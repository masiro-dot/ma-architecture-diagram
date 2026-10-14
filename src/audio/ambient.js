import { createScore, frequency } from './score.js';

export function createAmbientMusic(settings, onState = () => {}) {
  const score = createScore(settings.bpm), voices = new Set();
  let context, input, master, timer, stopTimer, anchor, cursor = 0, cycle = 0;
  let enabled = false, hidden = false, volume = settings.volume, disposed = false;
  const report = () => onState({ enabled, playing: enabled && !hidden && context?.state === 'running', volume });
  function smoothLevel(value) {
    if (!master) return;
    const time = context.currentTime;
    if (master.gain.cancelAndHoldAtTime) master.gain.cancelAndHoldAtTime(time);
    else { master.gain.cancelScheduledValues(time); master.gain.setValueAtTime(master.gain.value, time); }
    master.gain.setTargetAtTime(value, time, 0.08);
  }
  function initialize() {
    const Audio = globalThis.AudioContext || globalThis.webkitAudioContext;
    if (!Audio) throw new Error('このブラウザではBGMを再生できません。');
    context = new Audio(); input = context.createGain(); master = context.createGain(); master.gain.value = 0;
    const filter = context.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 2600; filter.Q.value = 0.35;
    const dry = context.createGain(); dry.gain.value = 0.90;
    const reverb = context.createConvolver(), wet = context.createGain(); wet.gain.value = 0.28;
    const impulse = context.createBuffer(2, Math.floor(context.sampleRate * 2.6), context.sampleRate);
    let seed = 0x613ac4;
    for (let c = 0; c < 2; c++) {
      const data = impulse.getChannelData(c);
      for (let i = 0; i < data.length; i++) { seed ^= seed << 13; seed ^= seed >>> 17; seed ^= seed << 5; data[i] = ((seed >>> 0) / 2147483648 - 1) * (1 - i / data.length) ** 3.5; }
    }
    reverb.buffer = impulse;
    const compressor = context.createDynamicsCompressor(); compressor.threshold.value = -18; compressor.knee.value = 14; compressor.ratio.value = 2; compressor.release.value = 0.35;
    input.connect(filter); filter.connect(dry); dry.connect(master); filter.connect(reverb); reverb.connect(wet); wet.connect(master); master.connect(compressor); compressor.connect(context.destination);
    context.onstatechange = report;
    anchor = context.currentTime + 0.12;
  }
  function playNote(event, at) {
    const pan = context.createStereoPanner(); pan.pan.value = event.pan; pan.connect(input);
    const harmonics = event.kind === 'piano' ? [[1, 0.74, 0], [2, 0.20, 0], [3, 0.06, 0]] : event.kind === 'pad' ? [[1, 0.5, -4], [1, 0.5, 4]] : [[1, 1, 0]];
    const voice = { oscillators: [], gains: [], pan, remaining: harmonics.length }; voices.add(voice);
    for (const [partial, weight, cents] of harmonics) {
      const oscillator = context.createOscillator(), envelope = context.createGain();
      oscillator.type = 'sine'; oscillator.frequency.value = frequency(event.note) * partial; oscillator.detune.value = cents;
      const peak = event.velocity * weight;
      envelope.gain.setValueAtTime(0.0001, at);
      if (event.kind === 'piano') {
        envelope.gain.linearRampToValueAtTime(peak, at + 0.012);
        envelope.gain.exponentialRampToValueAtTime(0.0001, at + event.duration / Math.sqrt(partial));
      } else {
        envelope.gain.linearRampToValueAtTime(peak, at + (event.kind === 'pad' ? 1.2 : 0.3));
        envelope.gain.setValueAtTime(peak * 0.8, at + event.duration - 1.6);
        envelope.gain.linearRampToValueAtTime(0.0001, at + event.duration);
      }
      oscillator.connect(envelope); envelope.connect(pan); voice.oscillators.push(oscillator); voice.gains.push(envelope);
      oscillator.onended = () => { oscillator.disconnect(); envelope.disconnect(); if (--voice.remaining === 0) { pan.disconnect(); voices.delete(voice); } };
      oscillator.start(at); oscillator.stop(at + event.duration + 0.02);
    }
  }
  function schedule() {
    if (!enabled || hidden || disposed || context.state !== 'running') return;
    while (anchor + cycle * score.duration + score.events[cursor].at < context.currentTime + 0.45) {
      const event = score.events[cursor], at = anchor + cycle * score.duration + event.at;
      if (at >= context.currentTime - 0.03) playNote(event, Math.max(at, context.currentTime));
      if (++cursor === score.events.length) { cursor = 0; cycle++; }
    }
  }
  function startScheduler() { clearInterval(timer); schedule(); timer = setInterval(schedule, 150); }
  return {
    async toggle() {
      if (disposed) return;
      clearTimeout(stopTimer);
      if (enabled) {
        enabled = false; clearInterval(timer); smoothLevel(0); report();
        stopTimer = setTimeout(() => { if (!enabled && context?.state === 'running') context.suspend().catch(() => {}); }, 350);
        return;
      }
      if (!context) initialize();
      enabled = true;
      try { await context.resume(); if (disposed || !enabled) return; smoothLevel(hidden ? 0 : volume); startScheduler(); report(); }
      catch (error) { enabled = false; report(); throw error; }
    },
    setVolume(value) { volume = Math.max(0, Math.min(1, value)); if (enabled && !hidden) smoothLevel(volume); report(); },
    async setHidden(value) {
      hidden = value; clearInterval(timer);
      if (!context || !enabled) { report(); return; }
      if (hidden) await context.suspend();
      else { await context.resume(); if (!disposed && enabled) { smoothLevel(volume); startScheduler(); } }
      report();
    },
    dispose() {
      disposed = true; enabled = false; clearInterval(timer); clearTimeout(stopTimer);
      voices.forEach((v) => { v.oscillators.forEach((o) => { o.onended = null; try { o.stop(); } catch {} o.disconnect(); }); v.gains.forEach((g) => g.disconnect()); v.pan.disconnect(); }); voices.clear();
      if (context) { context.onstatechange = null; context.close().catch(() => {}); }
    },
  };
}
