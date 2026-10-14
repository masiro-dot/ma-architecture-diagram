const paths = {
  music: '<path d="M9 18V5l12-2v13M9 9l12-2"/><ellipse cx="6" cy="18" rx="3" ry="2"/><ellipse cx="18" cy="16" rx="3" ry="2"/>',
  play: '<path d="m9 5 11 7-11 7z"/>', pause: '<path d="M9 5v14M15 5v14"/>',
  reset: '<path d="M3 10a9 9 0 1 1 2 8M3 4v6h6"/>',
  expand: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
  layers: '<path d="m12 3 10 5-10 5L2 8zM2 12l10 5 10-5M2 16l10 5 10-5"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
  cube: '<path d="m12 2 9 5v10l-9 5-9-5V7zM3 7l9 5 9-5M12 12v10"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4 2c-1 .7-1.5 1-1.5 3m0 3h.01"/>',
  download: '<path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  north: '<path d="m12 3 6 15-6-3-6 3zM12 3v12"/>',
  chevron: '<path d="m9 5 7 7-7 7"/>',
};
export const icon = (name) => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.cube}</svg>`;
