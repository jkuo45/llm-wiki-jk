// Reader theme toggle (light/dark): a sun/moon button in the reader header
// (next to the open-in-new-tab and close buttons). It themes ONLY the reader
// article pages (web/pages/*.html), persisted to localStorage under
// 'llm-wiki-theme'.
//
// How the theme reaches the article:
//  - On load: each page's <head> bootstrap (shared/page-theme.js) starts its
//    #theme-light stylesheet in the right state before first paint.
//  - Live switch: we flip the frame's #theme-light link directly via
//    contentDocument and post a 'wiki-theme' message so pages-core.js can
//    re-render SVG diagrams.

const THEME_KEY = 'llm-wiki-theme';
const themeBtn = document.getElementById('page-modal-theme');
const readerFrame = document.getElementById('page-modal-frame');
const readerOverlay = document.getElementById('page-modal-overlay');

const ICON_SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
const ICON_MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

function getTheme() {
  try { return localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark'; }
  catch (err) { return 'dark'; }
}

function setTheme(theme) {
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

function applyTheme(theme) {
  const light = theme === 'light';
  // Reader chrome (header bar, controls) follows the article theme.
  if (readerOverlay) readerOverlay.classList.toggle('light-theme', light);
  if (!themeBtn) return;
  themeBtn.innerHTML = light ? ICON_MOON : ICON_SUN;
  themeBtn.setAttribute('aria-pressed', String(light));
  themeBtn.title = light
    ? 'Dark theme / 切換深色主題'
    : 'Light theme / 切換淺色主題';
  themeBtn.setAttribute('aria-label', light
    ? 'Switch to dark theme / 切換為深色主題'
    : 'Switch to light theme / 切換為淺色主題');
  syncReaderFrame(theme);
}

if (themeBtn) {
  themeBtn.addEventListener('click', () => setTheme(getTheme() === 'light' ? 'dark' : 'light'));
}

// Sync across tabs (article pages sync themselves via the same storage event).
window.addEventListener('storage', (e) => {
  if (e.key === THEME_KEY) applyTheme(e.newValue === 'light' ? 'light' : 'dark');
});

applyTheme(getTheme());