// Site-wide theme controller (light is the default; dark is an opt-in).
// A shared preference (localStorage 'llm-wiki-theme') themes EVERYTHING:
//   - the graph app shell (three-graph-light.css via the #theme-light link)
//   - the 3D scene colours (graph background + resting edges, via core.js)
//   - the reader chrome (a sun/moon button in the reader header)
//   - the standalone article pages (web/pages/*.html), which load
//     shared/page-theme.js in their <head> and listen for storage/events
//
// The Settings tab's Theme buttons (#btn-theme-light / #btn-theme-dark)
// drive the preference; the reader header button toggles it too.

import { applyGraphTheme } from './core.js';

const THEME_KEY = 'llm-wiki-theme';
const appThemeLink = document.getElementById('theme-light');
const themeGrid = document.getElementById('theme-grid');
const themeButtons = themeGrid ? Array.from(themeGrid.querySelectorAll('button[data-theme]')) : [];
const themeBtn = document.getElementById('page-modal-theme');
const readerFrame = document.getElementById('page-modal-frame');
const readerOverlay = document.getElementById('page-modal-overlay');

const ICON_SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
const ICON_MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

// Current theme ('light' | 'dark'). Light is the default when no preference is
// stored (or storage is unavailable); only an explicit 'dark' opts in.
// NOTE: this is the SPA's copy of the same page-world rule exposed as
// window.WikiTheme.currentTheme() by pages/themes/theme-01/page-theme.js and
// themes/theme-02/theme.js. The bundled module can't load that classic global,
// so keep this rule in sync with those two (the `=== 'dark'` default test is
// the single source of truth for "light is the default").
export function currentTheme() {
  try { return localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light'; }
  catch (err) { return 'light'; }
}

export function getTheme() {
  return currentTheme();
}

export function setTheme(theme) {
  const t = theme === 'light' ? 'light' : 'dark';
  try { localStorage.setItem(THEME_KEY, t); } catch (err) {}
  applyTheme(t);
}

// Apply the theme to the open reader frame (link flip + message for
// pages-core.js diagram re-rendering).
function syncReaderFrame(theme) {
  if (!readerFrame) return;
  try {
    const link = readerFrame.contentDocument && readerFrame.contentDocument.getElementById('theme-light');
    if (link) link.disabled = theme !== 'light';
  } catch (err) { /* cross-origin or not yet loaded */ }
  if (readerFrame.contentWindow) {
    readerFrame.contentWindow.postMessage({ type: 'wiki-theme', theme }, '*');
  }
}

function syncThemeButtons(light) {
  themeButtons.forEach(btn => {
    const on = (btn.dataset.theme === 'light') === light;
    btn.classList.toggle('active', on);
    btn.setAttribute('aria-pressed', String(on));
  });
}

function applyTheme(theme) {
  const light = theme === 'light';
  // 1) App shell stylesheet (dark base + light override).
  if (appThemeLink) appThemeLink.disabled = !light;
  // 2) 3D scene colours (canvas background + resting edge colour).
  applyGraphTheme(light);
  // 3) Hook for JS consumers (PNG export, HTML-mode chart palette).
  document.body.classList.toggle('light-theme', light);
  // 4) Reader chrome (header bar, controls) follows the article theme.
  if (readerOverlay) readerOverlay.classList.toggle('light-theme', light);
  // 5) Settings tab Theme buttons + reader sun/moon button.
  syncThemeButtons(light);
  if (themeBtn) {
    themeBtn.innerHTML = light ? ICON_MOON : ICON_SUN;
    themeBtn.setAttribute('aria-pressed', String(light));
    themeBtn.title = light
      ? 'Dark theme / 切換深色主題'
      : 'Light theme / 切換淺色主題';
    themeBtn.setAttribute('aria-label', light
      ? 'Switch to dark theme / 切換為深色主題'
      : 'Switch to light theme / 切換為淺色主題');
  }
  syncReaderFrame(theme);
  // 6) Notify in-app consumers (analysis.js rebuilds an open HTML-mode document).
  window.dispatchEvent(new CustomEvent('site-theme-change', { detail: { theme } }));
  themeSubscribers.forEach((fn) => { try { fn(theme); } catch (err) {} });
}

// Public API: other modules (reader chrome, pages) toggle or observe the
// theme without reaching into internals. Subscribers fire on every applied
// change, including cross-tab storage events.
export function toggleTheme() {
  setTheme(getTheme() === 'light' ? 'dark' : 'light');
}

const themeSubscribers = new Set();
export function subscribeTheme(fn) {
  themeSubscribers.add(fn);
  fn(getTheme());
  return () => themeSubscribers.delete(fn);
}

// Settings tab Theme buttons.
if (themeGrid) {
  themeGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-theme]');
    if (!btn) return;
    setTheme(btn.dataset.theme);
  });
}

// Reader header sun/moon toggle.
if (themeBtn) {
  themeBtn.addEventListener('click', toggleTheme);
}

// Sync across tabs (article pages sync themselves via the same storage event).
window.addEventListener('storage', (e) => {
  if (e.key === THEME_KEY) applyTheme(e.newValue === 'dark' ? 'dark' : 'light');
});

applyTheme(getTheme());