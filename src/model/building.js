import * as THREE from 'three';

export function createBuilding(config) {
  const b = config.building;
  const root = new THREE.Group(); root.name = 'Building'; root.position.fromArray(b.origin);
  const floors = [], zones = [], envelopes = [], roofMaterials = [];
  const resources = new Set();
  const material = (options) => { const m = new THREE.MeshStandardMaterial(options); resources.add(m); return m; };
  const white = material({ color: '#f8f8f3', roughness: 0.85 });
  const slab = material({ color: '#efeee6', roughness: 0.9 });
  const stairs = material({ color: '#c9cec8', roughness: 0.9 });
  const furniture = material({ color: '#deded3', roughness: 1 });
  const glass = material({ color: '#c0d8d4', transparent: true, opacity: 0.19, roughness: 0.35, depthWrite: false, side: THREE.DoubleSide });
  const edgeMat = new THREE.LineBasicMaterial({ color: '#8b9991', transparent: true, opacity: 0.25 }); resources.add(edgeMat);
  const cube = new THREE.BoxGeometry(1, 1, 1); resources.add(cube);
  const cubeEdges = new THREE.EdgesGeometry(cube); resources.add(cubeEdges);
  function box(parent, size, pos, mat = white, outline = false) {
    const mesh = new THREE.Mesh(cube, mat); mesh.scale.set(...size); mesh.position.set(...pos);
    mesh.castShadow = !mat.transparent; mesh.receiveShadow = true; parent.add(mesh);
    if (outline) mesh.add(new THREE.LineSegments(cubeEdges, edgeMat));
    return mesh;
  }
  function ring(parent, y, thickness, mat, outline = false) {
    const side = (b.width - b.atrium.width) / 2, front = (b.depth - b.atrium.depth) / 2;
    box(parent, [side, thickness, b.depth], [-(b.width + b.atrium.width) / 4, y, 0], mat, outline);
    box(parent, [side, thickness, b.depth], [(b.width + b.atrium.width) / 4, y, 0], mat, outline);
    box(parent, [b.atrium.width, thickness, front], [0, y, -(b.depth + b.atrium.depth) / 4], mat, outline);
    box(parent, [b.atrium.width, thickness, front], [0, y, (b.depth + b.atrium.depth) / 4], mat, outline);
  }
  for (let i = 0; i < b.floorCount; i++) {
    const floor = new THREE.Group(); floor.name = `Floor_${i + 1}`; floor.userData.baseY = i * b.floorHeight; root.add(floor); floors.push(floor);
    ring(floor, b.slabThickness / 2, b.slabThickness, slab, true);
    const h = b.floorHeight - b.slabThickness;
    // 外周の柱は共通ジオメトリを再利用。
    for (let x = -b.width / 2; x <= b.width / 2 + 0.01; x += b.width / 5) {
      for (const z of [-b.depth / 2, b.depth / 2]) box(floor, [b.columnSize, h, b.columnSize], [x, b.slabThickness + h / 2, z]);
    }
    for (let z = -b.depth / 2 + b.depth / 4; z < b.depth / 2; z += b.depth / 4) {
      for (const x of [-b.width / 2, b.width / 2]) box(floor, [b.columnSize, h, b.columnSize], [x, b.slabThickness + h / 2, z]);
    }
    for (const x of [-b.atrium.width / 2, b.atrium.width / 2]) for (const z of [-b.atrium.depth / 2, b.atrium.depth / 2]) box(floor, [b.columnSize, h, b.columnSize], [x, b.slabThickness + h / 2, z]);
    // 背面壁・腰壁・ガラス帯。正面は内部構成が読める透過表現。
    box(floor, [b.width, 0.65, 0.20], [0, 0.58, -b.depth / 2], white);
    box(floor, [0.20, 0.65, b.depth], [-b.width / 2, 0.58, 0], white);
    for (const z of [-b.depth / 2, b.depth / 2]) {
      const pane = box(floor, [b.width - 0.3, h - 0.75, 0.06], [0, b.slabThickness + h / 2 + 0.18, z], glass); envelopes.push(pane);
      box(floor, [b.width, 0.16, 0.18], [0, b.floorHeight - 0.20, z]);
    }
    for (const x of [-b.width / 2, b.width / 2]) {
      const pane = box(floor, [0.06, h - 0.75, b.depth - 0.3], [x, b.slabThickness + h / 2 + 0.18, 0], glass); envelopes.push(pane);
      box(floor, [0.18, 0.16, b.depth], [x, b.floorHeight - 0.20, 0]);
    }
    // 可視化用の低い間仕切り。
    for (const z of [-b.depth * 0.04, b.depth * 0.15]) box(floor, [b.width * 0.35, 1.15, 0.14], [b.width * 0.30, 0.83, z]);
    box(floor, [0.14, 1.15, b.depth * 0.85], [-b.width * 0.13, 0.83, 0]);
    // 吹き抜け周囲の細い手すり。
    for (const z of [-b.atrium.depth / 2, b.atrium.depth / 2]) box(floor, [b.atrium.width, 0.06, 0.06], [0, 1.25, z]);
    for (const x of [-b.atrium.width / 2, b.atrium.width / 2]) box(floor, [0.06, 0.06, b.atrium.depth], [x, 1.25, 0]);
    for (const x of [-b.atrium.width / 2, 0, b.atrium.width / 2]) for (const z of [-b.atrium.depth / 2, b.atrium.depth / 2]) box(floor, [0.05, 1, 0.05], [x, 0.75, z]);
    // 折返し階段。各階のオブジェクトに属し、分解時も追従。
    if (i < b.floorCount - 1) {
      const n = 12, run = b.depth * 0.30, stairWidth = b.width * 0.045;
      for (let j = 0; j < n; j++) {
        box(floor, [stairWidth, 0.14, run / n], [b.atrium.width / 2 + stairWidth, b.slabThickness + (j + 1) * b.floorHeight / (2 * n), -run / 2 + (j + 0.5) * run / n], stairs);
        box(floor, [stairWidth, 0.14, run / n], [b.atrium.width / 2 + stairWidth * 2.1, b.slabThickness + b.floorHeight / 2 + (j + 1) * b.floorHeight / (2 * n), run / 2 - (j + 0.5) * run / n], stairs);
      }
      box(floor, [stairWidth * 2.2, 0.16, 1], [b.atrium.width / 2 + stairWidth * 1.55, b.slabThickness + b.floorHeight / 2, run / 2], stairs);
    }
    for (const zone of config.floors[i].zones) {
      const mat = new THREE.MeshBasicMaterial({ color: config.palette[zone.type], transparent: true, opacity: 0, depthWrite: false }); resources.add(mat);
      const mesh = box(floor, [zone.w * b.width, 0.045, zone.d * b.depth], [zone.x * b.width, b.slabThickness + 0.025, zone.z * b.depth], mat);
      mesh.name = `Zone_${zone.name}`; mesh.renderOrder = 2; zones.push(mesh);
    }
    // 控えめな模型家具：図書棚・円卓・ベンチ。
    for (let k = 0; k < 4; k++) {
      if (i === 1) {
        box(floor, [0.5, 1.5, b.depth * 0.25], [-b.width * 0.38 + k * b.width * 0.064, 1.01, -b.depth * 0.10], furniture);
      } else {
        const geo = new THREE.CylinderGeometry(0.72, 0.72, 0.09, 20); resources.add(geo);
        const table = new THREE.Mesh(geo, furniture); table.position.set(-b.width * 0.33 + (k % 2) * 3.6, 1.03, -3 + Math.floor(k / 2) * 6); floor.add(table);
        box(floor, [0.12, 0.68, 0.12], [table.position.x, 0.64, table.position.z], furniture);
      }
    }
    box(floor, [b.width * 0.20, 0.5, 0.65], [-b.width * 0.28, 0.52, b.depth * 0.38], furniture);
  }
  const roof = new THREE.Group(); roof.name = 'Roof'; root.add(roof);
  const roofMat = material({ color: '#f4f3ec', roughness: 0.95, transparent: true, opacity: 1 }); roofMaterials.push(roofMat);
  ring(roof, b.slabThickness / 2, b.slabThickness, roofMat);
  for (const z of [-b.depth / 2, b.depth / 2]) box(roof, [b.width, 0.45, 0.2], [0, 0.4, z], roofMat);
  for (const x of [-b.width / 2, b.width / 2]) box(roof, [0.2, 0.45, b.depth], [x, 0.4, 0], roofMat);
  return { root, floors, roof, zones, envelopes, roofMaterials, dispose() { resources.forEach((r) => r.dispose()); } };
}
