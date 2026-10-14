import { gsap } from 'gsap';
import { steps } from '../config.js';

export function createTimeline(onUpdate = () => {}) {
  const state = { rise: 0, explode: 0, zone: 0, flow: 0, roof: 1 };
  const timeline = gsap.timeline({ paused: true, onUpdate });
  timeline.to(state, { rise: 1, duration: 5.5, ease: 'power2.inOut' }, 0.5)
    .to(state, { explode: 1, roof: 0, duration: 5.5, ease: 'power2.inOut' }, 8.5)
    .to(state, { zone: 0.72, duration: 4, ease: 'sine.inOut' }, 16.5)
    .to(state, { flow: 1, duration: 2.5, ease: 'sine.inOut' }, 26)
    .to(state, { flow: 0, zone: 0, duration: 3, ease: 'sine.inOut' }, 38)
    .to(state, { explode: 0, roof: 1, duration: 6, ease: 'power2.inOut' }, 39)
    .to({}, { duration: 3 }, 45);
  const duration = 48;
  return { state, timeline, duration,
    stepAt(time) { return steps.find((s) => time >= s.start && time < s.end) ?? steps[steps.length - 1]; },
    seek(time) { timeline.time(Math.max(0, Math.min(duration, time)), false); },
    dispose() { timeline.kill(); },
  };
}

export function applyBuildingState(model, state, config, diagrams = true) {
  const b = config.building;
  model.root.scale.y = Math.max(0.001, state.rise);
  model.root.visible = state.rise > 0.002;
  model.floors.forEach((floor, i) => { floor.position.y = floor.userData.baseY + i * b.explodedGap * state.explode; });
  model.roof.position.y = b.floorCount * b.floorHeight + b.floorCount * b.explodedGap * state.explode;
  model.roof.visible = state.roof > 0.01;
  model.roofMaterials.forEach((m) => { m.opacity = state.roof; });
  const zoneOpacity = state.zone * (1 - config.circulation.zoneDimming * state.flow);
  model.zones.forEach((mesh) => { mesh.visible = diagrams && state.zone > 0.001; for (const m of [mesh.material].flat()) m.opacity = zoneOpacity; });
}
