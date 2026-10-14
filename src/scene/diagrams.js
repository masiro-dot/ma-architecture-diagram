import * as THREE from 'three';

export function createDiagrams(scene, model, config) {
  const b = config.building, routes = [], particles = [], resources = new Set();
  const origin = new THREE.Vector3().fromArray(b.origin);
  const group = new THREE.Group(); group.position.copy(origin); scene.add(group);
  const flowMaterial = new THREE.LineBasicMaterial({ color: config.palette.exchange, transparent: true, opacity: 0 }); resources.add(flowMaterial);
  const particleMaterial = new THREE.MeshBasicMaterial({ color: '#d69b76', transparent: true, opacity: 0 }); resources.add(particleMaterial);
  const sphere = new THREE.SphereGeometry(0.12, 10, 8); resources.add(sphere);
  function route(parent, points, kind, index) {
    const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)), false, 'catmullrom', 0.25);
    const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(100)); resources.add(geometry);
    const line = new THREE.Line(geometry, flowMaterial); parent.add(line);
    routes.push({ curve, line, kind, index });
    for (let j = 0; j < 4; j++) {
      const dot = new THREE.Mesh(sphere, particleMaterial); parent.add(dot);
      particles.push({ dot, route: routes[routes.length - 1], phase: j / 4 });
    }
    // 控えめな矢印。線と同じ不透明度で追従。
    const arrowGeo = new THREE.ConeGeometry(0.15, 0.50, 8); resources.add(arrowGeo);
    const arrow = new THREE.Mesh(arrowGeo, particleMaterial); arrow.position.copy(curve.getPoint(0.78));
    arrow.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), curve.getTangent(0.78).normalize()); parent.add(arrow);
    routes[routes.length - 1].arrow = arrow;
  }
  model.floors.forEach((floor, i) => {
    const y = b.slabThickness + 0.35;
    route(floor, [[0, y, b.depth * 0.48], [0, y, b.depth * 0.28], [-b.width * 0.24, y, b.depth * 0.28], [-b.width * 0.26, y, -b.depth * 0.27], [0, y, -b.depth * 0.31], [b.width * 0.28, y, -b.depth * 0.27], [b.width * 0.29, y, b.depth * 0.24], [b.width * 0.19, y, b.depth * 0.31]], 'floor', i);
  });
  for (let i = 0; i < b.floorCount - 1; i++) {
    const x = b.atrium.width / 2 + b.width * 0.08;
    route(group, [[x, i * b.floorHeight + 0.6, -b.depth * 0.12], [x, i * b.floorHeight + 2, b.depth * 0.18], [x + 1, (i + 1) * b.floorHeight + 0.6, -b.depth * 0.12]], 'vertical', i);
  }
  const guides = new THREE.Group(); group.add(guides);
  const guideMat = new THREE.LineBasicMaterial({ color: '#97a39b', transparent: true, opacity: 0.45 }); resources.add(guideMat);
  function segment(points) { const geo = new THREE.BufferGeometry().setFromPoints(points.map((p) => new THREE.Vector3(...p))); resources.add(geo); guides.add(new THREE.Line(geo, guideMat)); }
  const z = b.depth / 2 + 3.7, x = b.width / 2 + 3.7;
  segment([[-b.width / 2, 0.04, z], [b.width / 2, 0.04, z]]);
  segment([[x, 0.04, -b.depth / 2], [x, 0.04, b.depth / 2]]);
  for (const v of [-b.width / 2, b.width / 2]) segment([[v, 0.04, z - 0.45], [v, 0.04, z + 0.45]]);
  for (const v of [-b.depth / 2, b.depth / 2]) segment([[x - 0.45, 0.04, v], [x + 0.45, 0.04, v]]);
  let lastExplode = -1;
  return { group, update(state, time, visible) {
    group.visible = visible;
    guides.visible = state.rise > 0.8;
    flowMaterial.opacity = visible ? state.flow * 0.82 : 0;
    particleMaterial.opacity = visible ? state.flow : 0;
    routes.forEach((r) => { r.line.visible = visible && state.flow > 0.002; r.arrow.visible = r.line.visible; });
    if (Math.abs(lastExplode - state.explode) > 0.0001) {
      for (const r of routes.filter((r) => r.kind === 'vertical')) {
        const i = r.index, x = b.atrium.width / 2 + b.width * 0.08;
        const y1 = i * (b.floorHeight + b.explodedGap * state.explode) + 0.6;
        const y2 = (i + 1) * (b.floorHeight + b.explodedGap * state.explode) + 0.6;
        r.curve.points[0].set(x, y1, -b.depth * 0.12);
        r.curve.points[1].set(x, (y1 + y2) / 2, b.depth * 0.18);
        r.curve.points[2].set(x + 1, y2, -b.depth * 0.12);
        r.curve.updateArcLengths();
        r.line.geometry.setFromPoints(r.curve.getPoints(100));
        r.arrow.position.copy(r.curve.getPoint(0.78));
        r.arrow.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), r.curve.getTangent(0.78).normalize());
      }
      lastExplode = state.explode;
    }
    for (const p of particles) {
      p.dot.visible = visible && state.flow > 0.002;
      const t = ((time - 26) / 7 + p.phase) % 1;
      p.dot.position.copy(p.route.curve.getPointAt((t + 1) % 1));
    }
    // 屋内動線も模型全体の立上がりに追従。
    group.scale.y = Math.max(0.001, state.rise);
  }, dispose() { resources.forEach((r) => r.dispose()); scene.remove(group); } };
}
