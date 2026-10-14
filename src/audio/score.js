// このアプリ用の短いアンビエント楽曲「静かな余白」。既存音源は使用しない。
const harmony = [
  { notes: [60, 64, 67, 71], melody: [76, 79, 74, 72] },
  { notes: [57, 60, 64, 67], melody: [76, 72, 71, 69] },
  { notes: [53, 57, 60, 64], melody: [72, 76, 79, 76] },
  { notes: [55, 59, 62, 69], melody: [74, 71, 69, 67] },
  { notes: [52, 55, 59, 62], melody: [71, 74, 76, 74] },
  { notes: [53, 57, 60, 64], melody: [72, 69, 67, 64] },
  { notes: [50, 53, 57, 60], melody: [69, 72, 74, 72] },
  { notes: [55, 60, 62, 67], melody: [74, 79, 76, 74] },
];
export const frequency = (midi) => 440 * 2 ** ((midi - 69) / 12);
export function createScore(bpm = 64) {
  if (!Number.isFinite(bpm) || bpm <= 0) throw new Error('BGMのbpmは正の数にしてください。');
  const beat = 60 / bpm, bar = beat * 8, events = [];
  harmony.forEach((chord, i) => {
    chord.notes.forEach((note, j) => events.push({ at: i * bar + j * 0.04, note, kind: 'pad', duration: bar + 0.6, velocity: 0.065, pan: (j - 1.5) * 0.30 }));
    events.push({ at: i * bar + 0.12, note: chord.notes[0] - 12, kind: 'bass', duration: bar - 0.3, velocity: 0.11, pan: 0 });
    chord.melody.forEach((note, j) => events.push({ at: i * bar + [0.5, 2.5, 4.75, 6.5][j] * beat, note, kind: 'piano', duration: 4.6, velocity: [0.22, 0.16, 0.20, 0.14][j], pan: [-0.25, 0.3, -0.15, 0.2][j] }));
  });
  return { events: events.sort((a, b) => a.at - b.at), duration: bar * harmony.length };
}
