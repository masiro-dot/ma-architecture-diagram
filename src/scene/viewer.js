import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function createViewer(host, config) {
  const scene = new THREE.Scene(); scene.background = new THREE.Color('#ffffff');
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, config.camera.maxPixelRatio));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.shadowMap.autoUpdate = false; renderer.shadowMap.needsUpdate = true;
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.domElement.setAttribute('aria-label', '公共施設の3D建築模型。ドラッグで回転、ホイールでズーム。');
  host.prepend(renderer.domElement);
  const origin = new THREE.Vector3().fromArray(config.building.origin);
  const camera = new THREE.OrthographicCamera(-40, 40, 24, -24, 0.1, 300);
  const controls = new OrbitControls(camera, renderer.domElement);
  let dirty = true;
  controls.enableDamping = true; controls.dampingFactor = 0.08; controls.minZoom = 0.55; controls.maxZoom = 2.6;
  controls.minPolarAngle = 0.16; controls.maxPolarAngle = Math.PI / 2.08;
  controls.enablePan = true; controls.rotateSpeed = 0.65; controls.zoomSpeed = 0.8;
  function reset() { camera.position.fromArray(config.camera.position).add(origin); controls.target.fromArray(config.camera.target).add(origin); camera.zoom = 1; camera.lookAt(controls.target); camera.updateProjectionMatrix(); controls.update(); dirty = true; }
  reset();
  scene.add(new THREE.HemisphereLight('#ffffff', '#cdd5cf', 1.75));
  const key = new THREE.DirectionalLight('#ffffff', 2.1); key.position.set(-18, 45, 22); key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048); key.shadow.camera.left = -42; key.shadow.camera.right = 42; key.shadow.camera.top = 42; key.shadow.camera.bottom = -42;
  key.shadow.camera.near = 0.1; key.shadow.camera.far = 120; key.shadow.normalBias = 0.03; key.shadow.bias = -0.0003; key.shadow.radius = 4; scene.add(key);
  key.position.add(origin); key.target.position.copy(origin); scene.add(key.target);
  const fill = new THREE.DirectionalLight('#e5efec', 0.8); fill.position.set(25, 18, -28); scene.add(fill);
  fill.position.add(origin); fill.target.position.copy(origin); scene.add(fill.target);
  const planeGeo = new THREE.PlaneGeometry(250, 250);
  const planeMat = new THREE.ShadowMaterial({ opacity: 0.11 });
  const ground = new THREE.Mesh(planeGeo, planeMat); ground.rotation.x = -Math.PI / 2; ground.position.copy(origin); ground.position.y -= 0.08; ground.receiveShadow = true; scene.add(ground);
  const siteGeo = new THREE.BoxGeometry(config.building.width + 8, 0.16, config.building.depth + 8);
  const siteMat = new THREE.MeshStandardMaterial({ color: '#f1f2ec', roughness: 1 });
  const site = new THREE.Mesh(siteGeo, siteMat); site.position.fromArray(config.building.origin); site.position.y -= 0.12; site.receiveShadow = true; scene.add(site);
  // 最小限の敷地植栽。白模型と同じ色域で統一。
  const trunkGeo = new THREE.CylinderGeometry(0.08, 0.10, 1.6, 7);
  const crownGeo = new THREE.IcosahedronGeometry(1.1, 1);
  const treeMat = new THREE.MeshStandardMaterial({ color: '#d5dfd0', roughness: 1 });
  const trunkMat = new THREE.MeshStandardMaterial({ color: '#c6cec0', roughness: 1 });
  for (const [x, z] of [[-0.48, 0.62], [-0.60, -0.35], [0.56, -0.55]]) {
    const tree = new THREE.Group(); tree.position.set(x * config.building.width + config.building.origin[0], config.building.origin[1], z * config.building.depth + config.building.origin[2]);
    const trunk = new THREE.Mesh(trunkGeo, trunkMat); trunk.position.y = 0.8;
    const crown = new THREE.Mesh(crownGeo, treeMat); crown.position.y = 2.2; crown.scale.y = 1.2; crown.castShadow = true;
    tree.add(trunk, crown); scene.add(tree);
  }
  const resize = () => {
    const width = host.clientWidth, height = host.clientHeight;
    if (!width || !height) return;
    const aspect = width / height, h = config.camera.viewHeight * (aspect < 1.1 ? 1.1 / aspect : 1);
    camera.left = -h * aspect / 2; camera.right = h * aspect / 2; camera.top = h / 2; camera.bottom = -h / 2;
    camera.updateProjectionMatrix(); renderer.setSize(width, height); dirty = true;
  };
  const observer = new ResizeObserver(resize); observer.observe(host); resize();
  renderer.domElement.addEventListener('webglcontextlost', (event) => { event.preventDefault(); host.dispatchEvent(new CustomEvent('viewererror', { detail: '描画接続が中断されました。ページを再読み込みしてください。制作データは保存されています。' })); });
  return { scene, camera, renderer, controls, reset,
    project(point) { const p = point.clone().project(camera); return { x: (p.x + 1) / 2 * host.clientWidth, y: (-p.y + 1) / 2 * host.clientHeight, visible: p.z > -1 && p.z < 1 }; },
    render(force = true) { const changed = controls.update(); if (force || changed || dirty) { renderer.render(scene, camera); dirty = false; return true; } return false; },
    dispose() { observer.disconnect(); controls.dispose(); renderer.dispose(); key.shadow.dispose(); [planeGeo, planeMat, siteGeo, siteMat, trunkGeo, crownGeo, treeMat, trunkMat].forEach((r) => r.dispose()); renderer.domElement.remove(); },
  };
}
