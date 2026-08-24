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
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'themes/theme-01/pages-light.css';
  link.id = 'theme-light';
  try {
    link.disabled = localStorage.getItem(KEY) === 'dark';
  } catch (err) {
    link.disabled = false; // storage unavailable -> stay light (default)
  }
  document.head.appendChild(link);
})();