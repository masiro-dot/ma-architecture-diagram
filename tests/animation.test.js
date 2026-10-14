import test from 'node:test';
import assert from 'node:assert/strict';
import { config, validateConfig, steps } from '../src/config.js';
import { createBuilding } from '../src/model/building.js';
import { createTimeline, applyBuildingState } from '../src/animation/timeline.js';
import * as THREE from 'three';
import { createDiagrams } from '../src/scene/diagrams.js';

test('時間軸を逆方向へシークしても同じ状態を再現する', () => {
  const a = createTimeline();
  for (const time of [0, 4, 14, 22, 32, 46, 48]) {
    a.seek(time); const expected = { ...a.state };
    a.seek(48); a.seek(0); a.seek(time);
    for (const key of ['rise', 'explode', 'zone', 'flow', 'roof']) assert.ok(Math.abs(expected[key] - a.state[key]) < 1e-6, `${time}: ${key}`);
  }
  assert.equal(a.timeline.duration(), a.duration); a.dispose();
});

test('5ステップの状態と再組立て、図示切替を実物オブジェクトで検証', () => {
  const a = createTimeline(), model = createBuilding(config);
  a.seek(0); applyBuildingState(model, a.state, config); assert.equal(model.root.visible, false);
  a.seek(14); applyBuildingState(model, a.state, config); assert.equal(model.floors[2].position.y, 19); assert.equal(model.roof.visible, false);
  a.seek(22); applyBuildingState(model, a.state, config); assert.ok(model.zones.every((z) => z.material.opacity > 0.7));
  applyBuildingState(model, a.state, config, false); assert.ok(model.zones.every((z) => !z.visible));
  a.seek(32); assert.equal(a.state.flow, 1);
  a.seek(48); applyBuildingState(model, a.state, config); assert.equal(model.floors[2].position.y, 8); assert.equal(model.roof.position.y, 12); assert.equal(model.roof.visible, true);
  assert.equal(a.state.zone, 0); assert.equal(a.state.flow, 0);
  assert.equal(a.stepAt(8).id, 'explode'); assert.equal(a.stepAt(48).id, 'whole');
  assert.equal(steps.length, 5); model.dispose(); a.dispose();
});

test('寸法・階高・原点を変更した模型も同じアニメーション契約を満たす', () => {
  const c = structuredClone(config); c.building.width = 36; c.building.depth = 24; c.building.floorHeight = 4.5; c.building.origin = [8, 2, -3];
  validateConfig(c); const model = createBuilding(c), a = createTimeline();
  a.seek(48); applyBuildingState(model, a.state, c);
  assert.deepEqual(model.root.position.toArray(), [8, 2, -3]); assert.equal(model.floors[2].position.y, 9); assert.equal(model.roof.position.y, 13.5);
  model.dispose(); a.dispose();
  c.building.floorCount = 4; assert.throws(() => validateConfig(c), /floors/);
});

test('上下階動線は逆方向シークで同じ形に戻り、図示を切ると全階で消える', () => {
  const scene = new THREE.Scene(), model = createBuilding(config), a = createTimeline(); scene.add(model.root);
  const diagrams = createDiagrams(scene, model, config);
  const paths = []; scene.traverse((o) => { if (o.name === 'CirculationPath') paths.push(o); });
  a.seek(32); diagrams.update(a.state, a.timeline.time(), true);
  const snapshots = paths.map((p) => [...p.geometry.getAttribute('instanceStart').data.array]);
  const buffers = paths.map((p) => p.geometry.getAttribute('instanceStart').data);
  a.seek(42); diagrams.update(a.state, a.timeline.time(), true);
  a.seek(10); diagrams.update(a.state, a.timeline.time(), true);
  a.seek(32); diagrams.update(a.state, a.timeline.time(), true);
  assert.equal(paths.length, config.building.floorCount * 2 - 1);
  paths.forEach((p, i) => { assert.deepEqual([...p.geometry.getAttribute('instanceStart').data.array], snapshots[i]); assert.equal(p.geometry.getAttribute('instanceStart').data, buffers[i]); });
  assert.ok(paths.every((p) => p.visible));
  diagrams.update(a.state, a.timeline.time(), false); assert.ok(paths.every((p) => !p.visible));
  diagrams.dispose(); assert.ok(paths.every((p) => p.parent === null)); model.dispose(); a.dispose();
});
