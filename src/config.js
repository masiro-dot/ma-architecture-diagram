// 単位はメートル。X=東西、Y=高さ、Z=南北。ゾーン位置は床幅・奥行の比率。
export const config = {
  project: { name: 'まちの交流センター', subtitle: 'ひらく、つながる、重なり合う。' },
  building: {
    width: 30, depth: 20, floorHeight: 4, floorCount: 3,
    slabThickness: 0.26, columnSize: 0.32, atrium: { width: 8, depth: 6 },
    origin: [0, 0, 0], explodedGap: 5.5,
    modelUrl: null, // public/models/building.glb → 'models/building.glb'
  },
  camera: { position: [45, 34, 49], target: [0, 9, 0], viewHeight: 48, maxPixelRatio: 1.75 },
  palette: { exchange: '#cb866c', learning: '#719f9a', community: '#a2ae79', ink: '#283d39' },
  floors: [
    { label: '1F', name: '出会いのフロア', use: 'カフェ・交流ラウンジ・総合案内',
      zones: [
        { name: '交流ラウンジ', type: 'exchange', x: -0.30, z: 0, w: 0.36, d: 0.92 },
        { name: 'カフェ', type: 'exchange', x: 0.30, z: 0.31, w: 0.36, d: 0.30 },
        { name: '多目的スペース', type: 'community', x: 0.30, z: -0.20, w: 0.36, d: 0.60 },
        { name: '総合案内', type: 'learning', x: 0, z: 0.32, w: 0.25, d: 0.26 },
      ] },
    { label: '2F', name: '学びのフロア', use: '図書・閲覧・ワークショップ',
      zones: [
        { name: '図書・閲覧', type: 'learning', x: -0.30, z: 0, w: 0.36, d: 0.92 },
        { name: 'ワークショップ', type: 'learning', x: 0.30, z: -0.20, w: 0.36, d: 0.60 },
        { name: 'ラーニングコモンズ', type: 'exchange', x: 0.30, z: 0.31, w: 0.36, d: 0.30 },
        { name: '交流ギャラリー', type: 'exchange', x: 0, z: 0.32, w: 0.25, d: 0.26 },
      ] },
    { label: '3F', name: '共創のフロア', use: '市民活動・会議・スタジオ',
      zones: [
        { name: '市民活動室', type: 'community', x: -0.30, z: 0, w: 0.36, d: 0.92 },
        { name: '会議・スタジオ', type: 'community', x: 0.30, z: -0.20, w: 0.36, d: 0.60 },
        { name: '共創ラウンジ', type: 'exchange', x: 0.30, z: 0.31, w: 0.36, d: 0.30 },
        { name: '研究・学習室', type: 'learning', x: 0, z: 0.32, w: 0.25, d: 0.26 },
      ] },
  ],
};
export const steps = [
  { id: 'rise', number: '01', name: 'ボリュームの生成', english: 'VOLUME', start: 0, preview: 6.5, end: 8, title: '地面から、まちの居場所へ。', description: '30m × 20mの敷地に、3層の公共空間が立ち上がる。街にひらかれた、小さな交流の拠点。' },
  { id: 'explode', number: '02', name: 'フロアの分解', english: 'STRUCTURE', start: 8, preview: 14, end: 16, title: '重なりの中に、空間を読む。', description: '各階を垂直に分解し、床・壁・柱・階段を見渡す。中央の吹き抜けが、3つのフロアをつなぐ。' },
  { id: 'zone', number: '03', name: '用途のゾーニング', english: 'PROGRAM', start: 16, preview: 22, end: 26, title: '活動が重なる、3つの居場所。', description: '交流・学び・共創を、3つの色で可視化。用途を緩やかに重ね、人と活動が出会う構成へ。' },
  { id: 'flow', number: '04', name: '人の動線', english: 'CIRCULATION', start: 26, preview: 32, end: 38, title: '人の流れが、空間をつなぐ。', description: '入口から各階へ。中央階段と回遊する通路を、細い曲線と移動する光の粒で描く。' },
  { id: 'whole', number: '05', name: '全体の構成', english: 'SYNTHESIS', start: 38, preview: 46, end: 48, title: 'ひとつの建築に、まちを包む。', description: '用途と動線をひとつのボリュームへ。3層を結ぶ吹き抜けが、日々の活動に連続性を生む。' },
];
export function validateConfig(c = config) {
  const b = c.building;
  for (const key of ['width', 'depth', 'floorHeight', 'floorCount', 'slabThickness', 'columnSize']) {
    if (!Number.isFinite(b[key]) || b[key] <= 0) throw new Error(`${key}は正の数にしてください。`);
  }
  if (!Number.isInteger(b.floorCount) || c.floors.length !== b.floorCount) throw new Error('floorCountとfloorsの数を合わせてください。');
  if (b.atrium.width <= 0 || b.atrium.depth <= 0 || b.atrium.width >= b.width * 0.5 || b.atrium.depth >= b.depth * 0.6) throw new Error('吹き抜け寸法が建物寸法の範囲外です。');
  if (b.slabThickness >= b.floorHeight) throw new Error('床厚は階高より小さくしてください。');
  return c;
}
