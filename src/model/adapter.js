import { createBuilding } from './building.js';

// モデルと時間軸の境界。GLBも同じ { root, floors, roof, zones } 契約を返す。
export async function loadBuilding(config) {
  if (!config.building.modelUrl) return createBuilding(config);
  const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');
  const url = new URL(config.building.modelUrl, new URL(import.meta.env.BASE_URL, window.location.href)).href;
  const gltf = await new GLTFLoader().loadAsync(url);
  const root = gltf.scene, b = config.building;
  const floors = Array.from({ length: b.floorCount }, (_, i) => root.getObjectByName(`Floor_${i + 1}`));
  const roof = root.getObjectByName('Roof');
  if (floors.some((f) => !f || f.parent !== root) || !roof || roof.parent !== root) {
    root.traverse((o) => { o.geometry?.dispose(); if (o.material) for (const m of [o.material].flat()) m.dispose(); });
    throw new Error('GLBの直下にFloor_1、Floor_2、Floor_3、Roofを配置してください。READMEのモデル契約を確認してください。');
  }
  const zones = [], envelopes = [], roofMaterials = [], materials = new Set(), geometries = new Set(), textures = new Set();
  floors.forEach((f, i) => { f.userData.baseY = i * b.floorHeight; });
  root.position.fromArray(b.origin);
  root.traverse((o) => {
    if (!o.isMesh) return;
    geometries.add(o.geometry); o.castShadow = true; o.receiveShadow = true;
    o.material = Array.isArray(o.material) ? o.material.map((m) => m.clone()) : o.material.clone();
    for (const m of [o.material].flat()) {
      materials.add(m); Object.values(m).forEach((v) => { if (v?.isTexture) textures.add(v); });
      if (o.name.startsWith('Zone_')) { m.transparent = true; m.depthWrite = false; m.opacity = 0; }
      if (o.name.startsWith('Glass_')) envelopes.push(o);
    }
    if (o.name.startsWith('Zone_')) zones.push(o);
  });
  roof.traverse((o) => { if (o.isMesh) for (const m of [o.material].flat()) { m.transparent = true; roofMaterials.push(m); } });
  return { root, floors, roof, zones, envelopes, roofMaterials, dispose() {
    materials.forEach((m) => m.dispose()); geometries.forEach((g) => g.dispose()); textures.forEach((t) => t.dispose());
  } };
}
