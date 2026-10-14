import * as THREE from 'three';
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';

export function createDiagrams(scene, model, config) {
  const b = config.building, routes = [], particles = [], resources = new Set();
  const style = config.circulation;
  const origin = new THREE.Vector3().fromArray(b.origin);
  const group = new THREE.Group(); group.position.copy(origin); scene.add(group);
  // CSSピクセルで線幅を維持。縮小表示やズームアウトでも動線が消えない。
  const lineOptions = { worldUnits: false, transparent: true, opacity: 0, depthWrite: false, depthTest: false, alphaToCoverage: true, toneMapped: false };
  const flowMaterial = new LineMaterial({ ...lineOptions, color: style.color, linewidth: style.lineWidth }); resources.add(flowMaterial);
  const outlineMaterial = new LineMaterial({ ...lineOptions, color: '#fffdf8', linewidth: style.lineWidth + 3.5 }); resources.add(outlineMaterial);
  const arrowMaterial = new THREE.MeshBasicMaterial({ color: style.color, transparent: true, opacity: 0, depthWrite: false, depthTest: false, toneMapped: false }); resources.add(arrowMaterial);
  // 小さな共有テクスチャで白い芯と柔らかい光を表現。画面全体の発光処理は不要。
  const size = 64, pixels = new Uint8Array(size * size * 4);
  const warm = new THREE.Color(style.particleColor).convertLinearToSRGB();
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const r = Math.hypot((x + 0.5) / size * 2 - 1, (y + 0.5) / size * 2 - 1);
    const mix = THREE.MathUtils.clamp((r - 0.16) / 0.18, 0, 1), offset = (y * size + x) * 4;
    pixels[offset] = Math.round(THREE.MathUtils.lerp(1, warm.r, mix) * 255);
    pixels[offset + 1] = Math.round(THREE.MathUtils.lerp(0.98, warm.g, mix) * 255);
    pixels[offset + 2] = Math.round(THREE.MathUtils.lerp(0.87, warm.b, mix) * 255);
    pixels[offset + 3] = r >= 1 ? 0 : Math.round((r < 0.34 ? 1 : Math.exp(-7 * (r - 0.34))) * 255);
  }
  const glowMap = new THREE.DataTexture(pixels, size, size); glowMap.colorSpace = THREE.SRGBColorSpace; glowMap.needsUpdate = true; resources.add(glowMap);
  const particleMaterial = new THREE.SpriteMaterial({ map: glowMap, transparent: true, opacity: 0, depthWrite: false, depthTest: false, toneMapped: false }); resources.add(particleMaterial);
  const trailMaterials = Array.from({ length: style.trailCount }, () => { const m = particleMaterial.clone(); resources.add(m); return m; });
  const arrowGeo = new THREE.ConeGeometry(style.arrowRadius, style.arrowLength, 10); resources.add(arrowGeo);
  const samplePositions = (curve) => curve.getPoints(100).flatMap((p) => p.toArray());
  function updatePathGeometry(geometry, curve) {
    const points = curve.getPoints(100), buffer = geometry.getAttribute('instanceStart').data;
    // 既存GPUバッファを更新し、分解・シークのたびに確保し直さない。
    for (let i = 0; i < points.length - 1; i++) {
      points[i].toArray(buffer.array, i * 6); points[i + 1].toArray(buffer.array, i * 6 + 3);
    }
    buffer.needsUpdate = true; geometry.computeBoundingBox(); geometry.computeBoundingSphere();
  }
  const axis = new THREE.Vector3(0, 1, 0);
  function orientArrow(arrow, curve) { arrow.position.copy(curve.getPoint(arrow.userData.progress)); arrow.quaternion.setFromUnitVectors(axis, curve.getTangent(arrow.userData.progress).normalize()); }
  function route(parent, points, kind, index) {
    const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)), false, 'catmullrom', 0.25);
    const geometry = new LineGeometry(); geometry.setPositions(samplePositions(curve)); resources.add(geometry);
    const outline = new Line2(geometry, outlineMaterial); outline.renderOrder = 8; parent.add(outline);
    const line = new Line2(geometry, flowMaterial); line.name = 'CirculationPath'; line.renderOrder = 9; parent.add(line);
    const arrows = [];
    const item = { curve, line, outline, kind, index, arrows }; routes.push(item);
    for (let j = 0; j < 4; j++) {
      const dot = new THREE.Sprite(particleMaterial); dot.scale.setScalar(style.particleRadius * 5); dot.renderOrder = 11; parent.add(dot);
      const trails = trailMaterials.map((m, k) => { const tail = new THREE.Sprite(m); tail.scale.setScalar(style.particleRadius * 3.5 * Math.pow(0.80, k)); tail.renderOrder = 10; parent.add(tail); return tail; });
      particles.push({ dot, trails, route: item, phase: j / 4 });
    }
    for (const progress of kind === 'floor' ? [0.32, 0.76] : [0.65]) {
      const arrow = new THREE.Mesh(arrowGeo, arrowMaterial); arrow.userData.progress = progress; arrow.renderOrder = 9;
      orientArrow(arrow, curve); parent.add(arrow); arrows.push(arrow);
    }
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
    flowMaterial.opacity = visible ? state.flow * 0.95 : 0;
    outlineMaterial.opacity = visible ? state.flow * 0.88 : 0;
    arrowMaterial.opacity = flowMaterial.opacity;
    particleMaterial.opacity = visible ? state.flow : 0;
    trailMaterials.forEach((m, k) => { m.opacity = visible ? state.flow * 0.55 * (1 - k / style.trailCount) : 0; });
    routes.forEach((r) => { r.line.visible = visible && state.flow > 0.002; r.outline.visible = r.line.visible; r.arrows.forEach((arrow) => { arrow.visible = r.line.visible; }); });
    if (Math.abs(lastExplode - state.explode) > 0.0001) {
      for (const r of routes.filter((r) => r.kind === 'vertical')) {
        const i = r.index, x = b.atrium.width / 2 + b.width * 0.08;
        const y1 = i * (b.floorHeight + b.explodedGap * state.explode) + 0.6;
        const y2 = (i + 1) * (b.floorHeight + b.explodedGap * state.explode) + 0.6;
        r.curve.points[0].set(x, y1, -b.depth * 0.12);
        r.curve.points[1].set(x, (y1 + y2) / 2, b.depth * 0.18);
        r.curve.points[2].set(x + 1, y2, -b.depth * 0.12);
        r.curve.updateArcLengths();
        updatePathGeometry(r.line.geometry, r.curve);
        r.arrows.forEach((arrow) => orientArrow(arrow, r.curve));
      }
      lastExplode = state.explode;
    }
    for (const p of particles) {
      p.dot.visible = visible && state.flow > 0.002;
      const t = ((time - 26) / 7 + p.phase) % 1;
      p.dot.position.copy(p.route.curve.getPointAt((t + 1) % 1));
      p.dot.scale.setScalar(style.particleRadius * 5 * (1 + 0.12 * Math.sin(time * 4 + p.phase * Math.PI * 2)));
      p.trails.forEach((tail, k) => { tail.visible = p.dot.visible; tail.position.copy(p.route.curve.getPointAt((t - (k + 1) * style.trailSpacing + 2) % 1)); });
    }
    // 屋内動線も模型全体の立上がりに追従。
    group.scale.y = Math.max(0.001, state.rise);
  }, dispose() {
    routes.forEach((r) => { r.line.removeFromParent(); r.outline.removeFromParent(); r.arrows.forEach((arrow) => arrow.removeFromParent()); });
    particles.forEach((p) => { p.dot.removeFromParent(); p.trails.forEach((tail) => tail.removeFromParent()); });
    resources.forEach((r) => r.dispose()); scene.remove(group);
  } };
}
