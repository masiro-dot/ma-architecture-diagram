import './style.css';
import * as THREE from 'three';
import { config, steps, validateConfig } from './config.js';
import { loadBuilding } from './model/adapter.js';
import { createViewer } from './scene/viewer.js';
import { createDiagrams } from './scene/diagrams.js';
import { createTimeline, applyBuildingState } from './animation/timeline.js';
import { createLayout } from './ui/layout.js';
import { icon } from './ui/icons.js';
import { createAmbientMusic } from './audio/ambient.js';

createLayout();
const $ = (selector) => document.querySelector(selector);
const abort = new AbortController();
const on = (element, event, listener) => element.addEventListener(event, listener, { signal: abort.signal });
const host = $('#viewer');
let viewer, model, diagrams, animation, raf, toastTimeout;
const music = createAmbientMusic(config.audio, ({ enabled, playing, volume }) => {
  const button = $('#music'); button.setAttribute('aria-pressed', String(enabled)); button.setAttribute('aria-label', enabled ? 'BGMを停止' : 'BGMを再生');
  button.classList.toggle('playing', playing && volume > 0);
  $('#music-state').textContent = enabled ? 'BGM ON' : 'BGM OFF';
  $('#music-volume-value').textContent = `${Math.round(volume * 100)}%`;
});
let diagramVisible = true, looping = false, hiddenWasPlaying = false, isScrubbing = false, scrubWasPlaying = false;
let lastUIKey = '';
const timecode = (time) => `00:${Math.floor(time).toString().padStart(2, '0')}`;
function toast(message) { $('#toast').textContent = message; $('#toast').classList.add('show'); clearTimeout(toastTimeout); toastTimeout = setTimeout(() => $('#toast').classList.remove('show'), 3800); }

// ヘルプはWebGLが利用できない場合も開ける。
on($('#help'), 'click', () => $('#help-dialog').showModal());
on($('#close-help'), 'click', () => $('#help-dialog').close());
on($('#help-dialog'), 'click', (e) => { if (e.target === $('#help-dialog')) { const r = e.target.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) e.target.close(); } });

function updateUI() {
  const time = animation.timeline.time(), current = animation.stepAt(time);
  const uiKey = `${Math.floor(time * 10)}:${animation.timeline.paused()}:${isScrubbing}`;
  if (uiKey === lastUIKey) return;
  lastUIKey = uiKey;
  $('#current-time').textContent = timecode(time);
  if (!isScrubbing) $('#seek').value = time;
  $('#seek').style.setProperty('--progress', `${time / animation.duration * 100}%`);
  $('#seek').setAttribute('aria-valuetext', `${time.toFixed(1)}秒 / ${current.name}`);
  $('#scene-eyebrow').textContent = `${current.number} / ${current.english} DIAGRAM`;
  $('#scene-title').textContent = current.title;
  $('#scene-description').textContent = current.description;
  document.querySelectorAll('[data-step]').forEach((el) => { const active = el.dataset.step === current.id; el.classList.toggle('active', active); if (active) el.setAttribute('aria-current', 'step'); else el.removeAttribute('aria-current'); });
  const playing = !animation.timeline.paused() && time < animation.duration;
  const play = $('#play');
  play.innerHTML = `${icon(playing ? 'pause' : 'play')}<span>${playing ? '一時停止' : '再生'}</span>`;
  play.setAttribute('aria-label', playing ? '一時停止' : '再生');
}
function seek(time, pause = true) { if (pause) animation.timeline.pause(); animation.seek(time); updateUI(); }
function togglePlay() {
  if (animation.timeline.paused()) { if (animation.timeline.time() >= animation.duration) animation.seek(0); animation.timeline.play(); }
  else animation.timeline.pause();
  updateUI();
}
function toggleDiagrams() {
  diagramVisible = !diagramVisible;
  $('#toggle-diagrams').setAttribute('aria-pressed', String(diagramVisible));
  $('#toggle-diagrams').title = diagramVisible ? 'ダイヤグラムを非表示 (D)' : 'ダイヤグラムを表示 (D)';
  $('#labels').hidden = !diagramVisible;
  toast(diagramVisible ? 'ダイヤグラムを表示しました' : '模型のみを表示しています');
}
async function fullscreen() {
  const root = document.documentElement;
  if (root.classList.contains('presentation')) { root.classList.remove('presentation'); updateFullscreenButton(); return; }
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else if (root.requestFullscreen) {
      let timer;
      await Promise.race([root.requestFullscreen(), new Promise((resolve) => { timer = setTimeout(resolve, 900); })]).finally(() => clearTimeout(timer));
      if (!document.fullscreenElement) { root.classList.add('presentation'); toast('ブラウザの全画面が制限されているため、集中表示に切り替えました'); }
    } else { root.classList.add('presentation'); toast('集中表示に切り替えました'); }
  } catch { root.classList.add('presentation'); toast('ブラウザの全画面が制限されているため、集中表示に切り替えました'); }
  updateFullscreenButton();
}
function updateFullscreenButton() {
  const active = !!document.fullscreenElement || document.documentElement.classList.contains('presentation');
  const button = $('#fullscreen'); button.setAttribute('aria-label', active ? '全画面を解除' : '全画面表示');
  button.setAttribute('aria-pressed', String(active)); button.title = active ? '全画面を解除 (Esc)' : '全画面表示 (F)';
}
const temp = new THREE.Vector3();
const origin = new THREE.Vector3().fromArray(config.building.origin);
function placeLabel(element, point) {
  const p = viewer.project(point);
  element.style.left = `${p.x}px`; element.style.top = `${p.y}px`;
  element.style.display = p.visible && p.x > 12 && p.x < host.clientWidth - 42 && p.y > 80 && p.y < host.clientHeight - 45 ? '' : 'none';
}
function updateLabels() {
  const b = config.building;
  const labels = $('#labels'); labels.style.opacity = animation.state.rise > 0.7 ? '1' : '0';
  model.root.updateMatrixWorld(true);
  for (const label of document.querySelectorAll('[data-floor]')) {
    const floor = model.floors[Number(label.dataset.floor)];
    temp.set(b.width / 2 + 0.7, 0.45, -b.depth / 2).applyMatrix4(floor.matrixWorld);
    placeLabel(label, temp);
  }
  temp.set(0, 0.1, b.depth / 2 + 4.4).add(origin); placeLabel($('#width-label'), temp);
  temp.set(b.width / 2 + 4.7, 0.1, 0).add(origin); placeLabel($('#depth-label'), temp);
  const azimuth = viewer.controls.getAzimuthalAngle();
  $('.compass').style.transform = `rotate(${-azimuth * 180 / Math.PI + 22}deg)`;
}

async function exportImage() {
  const wasPlaying = !animation.timeline.paused(); animation.timeline.pause(); updateUI();
  try {
    await document.fonts.ready;
    viewer.render(); updateLabels();
    const width = 2560, height = 1440, pad = 80, titleY = 130;
    const output = document.createElement('canvas'); output.width = width; output.height = height;
    const ctx = output.getContext('2d'); ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#82917d'; ctx.font = '18px Arial'; ctx.fillText('MA / ARCHITECTURE IN MOTION', pad, 60);
    const step = animation.stepAt(animation.timeline.time());
    ctx.fillStyle = '#293e3b'; ctx.font = '36px "Yu Mincho",serif'; ctx.fillText(step.title, pad, titleY);
    ctx.font = '18px "Yu Gothic",sans-serif'; ctx.fillStyle = '#8b9a86'; ctx.fillText(`${config.project.name}  /  ${step.number} ${step.name}`, pad, titleY + 44);
    const canvas = viewer.renderer.domElement, available = { x: pad, y: 225, w: width - pad * 2, h: height - 350 };
    const scale = Math.min(available.w / canvas.width, available.h / canvas.height);
    const w = canvas.width * scale, h = canvas.height * scale;
    const x = available.x + (available.w - w) / 2, y = available.y + (available.h - h) / 2;
    ctx.drawImage(canvas, x, y, w, h);
    if (diagramVisible && animation.state.rise > 0.7) {
      const px = w / host.clientWidth, py = h / host.clientHeight;
      for (const el of document.querySelectorAll('[data-floor]')) {
        if (el.style.display === 'none') continue;
        const lx = x + parseFloat(el.style.left) * px, ly = y + parseFloat(el.style.top) * py;
        ctx.fillStyle = '#607966'; ctx.font = '24px Georgia'; ctx.fillText(el.querySelector('.label-floor').textContent, lx, ly + 5);
        ctx.strokeStyle = '#a8b5a0'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(lx + 44, ly); ctx.lineTo(lx + 96, ly); ctx.stroke();
        ctx.font = '18px "Yu Gothic",sans-serif'; ctx.fillStyle = '#8b9b86'; ctx.fillText(el.querySelector('.label-name').textContent, lx + 108, ly + 5);
      }
    }
    ctx.strokeStyle = '#dce3d6'; ctx.beginPath(); ctx.moveTo(pad, height - 115); ctx.lineTo(width - pad, height - 115); ctx.stroke();
    let lx = pad;
    for (const [type, label] of [['exchange', '交流'], ['learning', '学び'], ['community', '共創']]) {
      ctx.fillStyle = config.palette[type]; ctx.fillRect(lx, height - 75, 14, 14);
      ctx.fillStyle = '#71816c'; ctx.font = '19px "Yu Gothic",sans-serif'; ctx.fillText(label, lx + 29, height - 61); lx += 155;
    }
    ctx.font = '17px Arial'; ctx.fillStyle = '#9aa592'; ctx.textAlign = 'right';
    ctx.fillText(`${config.building.width} × ${config.building.depth} m   /   ${config.building.floorCount} FLOORS   /   CONCEPT STUDY`, width - pad, height - 62);
    const blob = await new Promise((resolve, reject) => output.toBlob((value) => value ? resolve(value) : reject(new Error('PNGを生成できませんでした')), 'image/png'));
    const url = URL.createObjectURL(blob), anchor = document.createElement('a');
    anchor.href = url; anchor.download = `ma-diagram-${step.id}-2560x1440.png`; anchor.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast('2560 × 1440のPNGを保存しました');
  } catch (error) { console.error(error); toast('画像の保存に失敗しました。モデルの読込元やブラウザの制限を確認してください。'); }
  finally { if (wasPlaying) animation.timeline.play(); updateUI(); }
}

async function init() {
  try {
    validateConfig(); viewer = createViewer(host, config);
    model = await loadBuilding(config); viewer.scene.add(model.root);
    diagrams = createDiagrams(viewer.scene, model, config);
    animation = createTimeline(() => { if (animation) updateUI(); });
    animation.timeline.eventCallback('onComplete', () => { if (looping) { animation.timeline.restart(); } else { animation.timeline.pause(); updateUI(); } });
    seek(steps[0].start); $('#loading').remove();
    on($('#play'), 'click', togglePlay);
    on($('#music'), 'click', async () => {
      $('#music').disabled = true;
      try { await music.toggle(); } catch (error) { console.error(error); toast('BGMを再生できませんでした。ブラウザの音声設定をご確認ください。'); }
      finally { $('#music').disabled = false; }
    });
    on($('#music-volume'), 'input', (e) => music.setVolume(Number(e.target.value) / 100));
    on($('#restart'), 'click', () => { animation.seek(0); animation.timeline.play(); updateUI(); });
    on($('#speed'), 'change', (e) => animation.timeline.timeScale(Number(e.target.value)));
    document.querySelectorAll('[data-step]').forEach((el) => on(el, 'click', () => seek(steps.find((s) => s.id === el.dataset.step).preview)));
    document.querySelectorAll('[data-start]').forEach((el) => on(el, 'click', () => seek(Number(el.dataset.start))));
    on($('#seek'), 'pointerdown', () => { scrubWasPlaying = !animation.timeline.paused(); isScrubbing = true; animation.timeline.pause(); updateUI(); });
    on($('#seek'), 'input', (e) => { animation.seek(Number(e.target.value)); updateUI(); });
    const endScrub = () => { if (!isScrubbing) return; isScrubbing = false; if (scrubWasPlaying) animation.timeline.play(); updateUI(); };
    on(window, 'pointerup', endScrub); on(window, 'pointercancel', endScrub);
    on($('#reset-camera'), 'click', () => { viewer.reset(); toast('初期の視点に戻しました'); });
    on($('#toggle-diagrams'), 'click', toggleDiagrams);
    on($('#fullscreen'), 'click', fullscreen);
    on(document, 'fullscreenchange', () => { if (document.fullscreenElement) document.documentElement.classList.remove('presentation'); updateFullscreenButton(); });
    on($('#capture'), 'click', exportImage);
    on($('#loop'), 'click', () => { looping = !looping; $('#loop').setAttribute('aria-pressed', String(looping)); });
    on(document, 'keydown', (e) => {
      if (e.key === 'Escape') { document.documentElement.classList.remove('presentation'); updateFullscreenButton(); }
      if (e.ctrlKey || e.metaKey || e.altKey || $('#help-dialog').open || ['INPUT', 'SELECT', 'TEXTAREA', 'BUTTON'].includes(e.target.tagName)) return;
      const key = e.key.toLowerCase();
      if (key === ' ') { e.preventDefault(); togglePlay(); }
      if (key === 'r') viewer.reset(); if (key === 'd') toggleDiagrams(); if (key === 'f') fullscreen();
      if (/^[1-5]$/.test(key)) seek(steps[Number(key) - 1].preview);
      if (key === 'arrowright' || key === 'arrowleft') { e.preventDefault(); seek(animation.timeline.time() + (key === 'arrowright' ? 1 : -1)); }
    });
    on(document, 'visibilitychange', () => {
      music.setHidden(document.hidden).catch(() => { toast('BGMを再開できませんでした。BGMボタンで再生し直してください。'); });
      if (document.hidden) { hiddenWasPlaying = !animation.timeline.paused(); animation.timeline.pause(); cancelAnimationFrame(raf); }
      else { if (hiddenWasPlaying) animation.timeline.play(); cancelAnimationFrame(raf); render(); } updateUI();
    });
    on(host, 'viewererror', (e) => { animation.timeline.pause(); toast(e.detail); updateUI(); });
    let lastRenderKey = '', lastShadowKey = '';
    function render() {
      applyBuildingState(model, animation.state, config, diagramVisible);
      diagrams.update(animation.state, animation.timeline.time(), diagramVisible);
      $('#flow-key').hidden = !diagramVisible || animation.state.flow < 0.05;
      const state = animation.state;
      const shadowKey = `${state.rise}:${state.explode}:${state.roof}`;
      if (shadowKey !== lastShadowKey) { viewer.renderer.shadowMap.needsUpdate = true; lastShadowKey = shadowKey; }
      const renderKey = `${animation.timeline.time()}:${diagramVisible}`;
      if (viewer.render(renderKey !== lastRenderKey)) updateLabels();
      lastRenderKey = renderKey; raf = requestAnimationFrame(render);
    }
    render();
    if (document.hidden) hiddenWasPlaying = true;
    else animation.timeline.play();
    updateUI();
  } catch (error) {
    console.error(error);
    $('#loading').innerHTML = `<span class="loading-mark">間</span><p>模型を表示できませんでした。<br>WebGL対応ブラウザとモデルの設定をご確認ください。</p><p id="load-detail"></p>`;
    $('#load-detail').textContent = error.message;
    document.querySelectorAll('.transport button,.transport input,.transport select,.step,.view-tools button,#capture').forEach((el) => { el.disabled = true; });
  }
}
init();
on(window, 'pagehide', (event) => { if (event.persisted) music.setHidden(true).catch(() => {}); else music.dispose(); });
on(window, 'pageshow', (event) => { if (event.persisted) music.setHidden(document.hidden).catch(() => {}); });

if (import.meta.hot) import.meta.hot.dispose(() => { abort.abort(); music.dispose(); cancelAnimationFrame(raf); clearTimeout(toastTimeout); animation?.dispose(); diagrams?.dispose(); model?.dispose(); viewer?.dispose(); });
