import { config, steps } from '../config.js';
import { icon } from './icons.js';

export function createLayout() {
  const b = config.building;
  const musicControls = `<div class="music-panel"><div class="music-controls"><button id="music" class="music-button" aria-label="BGMを再生" aria-pressed="false">${icon('music')}<span id="music-state">BGM OFF</span><span class="music-equalizer" aria-hidden="true"><i></i><i></i><i></i></span></button><input id="music-volume" type="range" min="0" max="100" value="${Math.round(config.audio.volume * 100)}" aria-label="BGMの音量"/><span id="music-volume-value">${Math.round(config.audio.volume * 100)}%</span></div><span id="music-title" class="music-title">${config.audio.title} / AMBIENT PIANO</span></div>`;
  document.querySelector('#app').innerHTML = `
    <header class="header">
      <a class="brand" href="./" aria-label="間 MA ホーム"><span class="brand-mark">間</span><span class="brand-name">MA<span>ARCHITECTURE IN MOTION</span></span></a>
      <div class="header-center"><span class="header-rule"></span>動く建築ダイヤグラム<span class="badge">コンセプトモデル</span></div>
      <div class="header-actions"><span class="sample-dot"></span><span class="sample-label">サンプルプロジェクト</span><button id="help" class="icon-button" title="操作ガイド" aria-label="操作ガイド">${icon('help')}</button></div>
    </header>
    <div class="workspace">
      <aside class="sidebar">
        <section class="project-intro"><div class="eyebrow">PUBLIC ARCHITECTURE / 001</div><h1>${config.project.name}</h1><p>${config.project.subtitle}</p><div class="project-meta"><span>公共施設</span><span>地上${b.floorCount}階</span><span>コンセプトスタディ</span></div></section>
        <section class="sequence"><div class="section-heading"><span>空間を読み解く</span><span class="small-caps">SEQUENCE</span></div><nav aria-label="アニメーションのステップ">${steps.map((s) => `<button class="step" data-step="${s.id}"><span class="step-number">${s.number}</span><span class="step-title">${s.name}<small>${s.english}</small></span><span class="step-end">${icon('chevron')}</span></button>`).join('')}</nav></section>
        <section class="legend"><div class="section-heading"><span>用途の凡例</span><span class="small-caps">PROGRAM</span></div>
          <div class="legend-row"><i class="swatch exchange"></i><div><strong>交流</strong><span>カフェ・ラウンジ・ギャラリー</span></div></div>
          <div class="legend-row"><i class="swatch learning"></i><div><strong>学び</strong><span>図書・閲覧・ワークショップ</span></div></div>
          <div class="legend-row"><i class="swatch community"></i><div><strong>共創</strong><span>市民活動・会議・スタジオ</span></div></div>
        </section>
        <section class="floor-index"><div class="section-heading"><span>フロア構成</span><span class="small-caps">FLOORS</span></div>${[...config.floors].reverse().map((f, n) => `<div class="floor-row"><span>${f.label}</span><div><strong>${f.name}</strong><small>${f.use}</small></div><i style="background:${config.palette[n === 0 ? 'community' : n === 1 ? 'learning' : 'exchange']}"></i></div>`).join('')}</section>
        <div class="sidebar-foot"><span>CONCEPT STUDY</span><span>01 / 2026</span></div>
      </aside>
      <main class="main">
        <div class="main-heading"><div class="scene-copy"><div class="eyebrow" id="scene-eyebrow">01 / VOLUME DIAGRAM</div><h2 id="scene-title"></h2><p id="scene-description"></p></div><div class="main-heading-actions">${musicControls}<button id="capture" class="export-button" aria-label="画像を保存">${icon('download')}<span>画像を保存</span></button></div></div>
        <section id="viewer" class="viewer" aria-label="3Dダイヤグラム">
          <div class="view-label"><span class="status-dot"></span>アイソメトリック<span class="view-tag">3D VIEW</span></div>
          <div class="stats"><div><span>建築面積</span><strong>${(b.width * b.depth).toLocaleString()}<small>㎡</small></strong></div><div><span>階数 / 階高</span><strong>${b.floorCount}<small>階 / ${b.floorHeight.toFixed(1)} m</small></strong></div><div><span>建物高さ</span><strong>${(b.floorCount * b.floorHeight).toFixed(1)}<small>m</small></strong></div></div>
          <div id="flow-key" class="flow-key" style="--route-color:${config.circulation.color}" hidden><span class="flow-key-line"></span><span>人の流れ</span><span class="flow-key-dot"></span><span>移動する光の粒</span></div>
          <div id="labels" class="labels">${config.floors.map((f, i) => `<div class="floor-label" data-floor="${i}"><span class="label-floor">${f.label}</span><div class="label-line"></div><span class="label-name">${f.name}</span></div>`).join('')}<span id="width-label" class="dimension-label">${b.width.toFixed(1)} m</span><span id="depth-label" class="dimension-label">${b.depth.toFixed(1)} m</span></div>
          <div class="compass">${icon('north')}<span>N</span></div>
          <div class="view-tools"><button class="icon-button" id="reset-camera" title="視点をリセット (R)" aria-label="視点をリセット">${icon('reset')}</button><span></span><button class="icon-button" id="toggle-diagrams" title="ダイヤグラムを非表示 (D)" aria-label="ダイヤグラム表示" aria-pressed="true">${icon('layers')}</button><span></span><button class="icon-button" id="fullscreen" title="全画面表示 (F)" aria-label="全画面表示">${icon('expand')}</button></div>
          <div class="canvas-hint"><span class="mouse-outline"></span>ドラッグで回転<span>·</span>スクロールでズーム</div>
          <div id="loading" class="loading"><span class="loading-mark">間</span><p>模型を準備しています</p></div>
        </section>
        <section class="transport" aria-label="アニメーション操作"><div class="transport-top"><div class="playback-actions"><button id="play" class="play-button" aria-label="再生">${icon('play')}<span>再生</span></button><button id="restart" class="icon-button" title="最初から再生" aria-label="最初から再生">${icon('reset')}</button><span class="timecode"><b id="current-time">00:00</b><span>/</span>00:48</span></div><div class="playback-options"><label for="speed">再生速度</label><select id="speed" aria-label="再生速度"><option value="0.5">0.5 ×</option><option value="0.75">0.75 ×</option><option value="1" selected>1.0 ×</option><option value="1.5">1.5 ×</option><option value="2">2.0 ×</option></select><button id="loop" class="loop-button" aria-pressed="false">ループ <span class="toggle-track"><i></i></span></button></div></div>
          <div class="timeline-track"><input id="seek" type="range" min="0" max="48" value="0" step="0.01" aria-label="アニメーション時刻" aria-valuetext="0秒"/><div class="timeline-markers">${steps.map((s) => `<button data-start="${s.start}" title="${s.name}の開始時刻" style="left:${s.start / 48 * 100}%"><span>${s.number}</span></button>`).join('')}</div></div>
          <div class="timeline-captions">${steps.map((s) => `<button data-step="${s.id}" style="flex:${s.end - s.start}">${s.name.replace('の', '')}</button>`).join('')}</div>
        </section>
        <footer class="main-footer"><span>${icon('cube')}空間の構成を、時間で描く。</span><span>THREE.JS + GSAP<span class="footer-dot">·</span>MA DIAGRAM STUDIO</span></footer>
      </main>
    </div>
    <div id="toast" role="status" class="toast"></div>
    <dialog id="help-dialog"><div class="dialog-top"><div class="eyebrow">QUICK GUIDE</div><button id="close-help" class="icon-button" aria-label="ガイドを閉じる">${icon('close')}</button></div><h2>空間を、自由に読み解く。</h2><p>左のステップで場面を選び、再生ボタンでその先を見られます。</p><dl><dt>再生 / 一時停止</dt><dd>再生ボタン、または Space</dd><dt>時刻を移動</dt><dd>シークバー / ← → で1秒ずつ</dd><dt>ステップ切り替え</dt><dd>左の項目、または 1〜5</dd><dt>3D回転 / ズーム</dt><dd>ドラッグ / ホイール・ピンチ</dd><dt>平行移動</dt><dd>右ドラッグ / 2本指ドラッグ</dd><dt>視点リセット</dt><dd>右下のリセット、または R</dd><dt>ダイヤグラム表示</dt><dd>レイヤーボタン、または D</dd><dt>全画面表示</dt><dd>全画面ボタン、または F</dd><dt>BGM</dt><dd>上部のBGMボタン / 横の音量バー</dd></dl><div class="dialog-note">BGMは操作してから再生します。アニメーションを停止中でも流せます。画像を保存すると、現在の視点の模型と注釈をPNGで出力します。サンプルは設計意図を示す概念模型です。</div></dialog>
  `;
}
