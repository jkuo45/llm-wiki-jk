/* Wiki pages theme bootstrap — loaded synchronously in <head> of every
   standalone wiki page (web/pages/*.html) BEFORE first paint, so the
   pages-light.css stylesheet starts in the correct state (no theme flash).

   This replaces the old inline block that used to be duplicated in each page.
   Runtime switching is handled AFTER first paint by pages-core.js, which
   listens for the app's 'wiki-theme' postMessages and storage events,
   re-applies this link, and re-renders SVG diagrams. Keep both files in the
   page template.

   Theme key: localStorage 'llm-wiki-theme' = 'dark' | 'light', set by the
   reader header toggle in the graph app (components/theme.js). Light is the
   default when no preference is stored; only an explicit 'dark' opts into
   the dark theme. */
(function () {
  var KEY = 'llm-wiki-theme';
  // Reuse a statically-included #theme-light link when the page ships one
  // (a static <link> is render-blocking, so first paint already has the
  // correct theme — no dark→light flash). Only inject dynamically when the
  // page has no static light stylesheet (legacy pages).
  var link = document.getElementById('theme-light');
  var injected = false;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'stylesheet';
    // Resolve relative to THIS script's URL (not the page) so nested pages
    // (pages/en-US/, pages/zh-TW/…) resolve themes/theme-01/pages-light.css
    // correctly instead of 404ing.
    var base = document.currentScript && document.currentScript.src;
    link.href = base ? new URL('pages-light.css', base).href
                     : 'themes/theme-01/pages-light.css';
    injected = true;
  }
  link.id = 'theme-light';
  try {
    link.disabled = localStorage.getItem(KEY) === 'dark';
  } catch (err) {
    link.disabled = false; // storage unavailable -> stay light (default)
  }
  if (injected) document.head.appendChild(link);
})();