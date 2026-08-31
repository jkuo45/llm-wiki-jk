/* Wiki pages theme bootstrap — loaded synchronously in <head> of every
   standalone wiki page (web/pages/*.html) BEFORE first paint, so the
   pages-light.css stylesheet starts in the correct state (no theme flash).

   This replaces the old inline block that used to be duplicated in each page.
   Runtime switching is handled AFTER first paint by pages-core.js, which
   listens for the app's 'wiki-theme' postMessages and storage events,
   re-applies this link, and re-renders SVG diagrams. Keep both files in the
   page template.

   The single shared rule for the page world lives on window.WikiTheme
   (currentTheme()/isDark()); themes/theme-02/theme.js exposes the identical
   define-once object and pages-core.js consumes it via the same helper. Only
   an explicit 'dark' opts into the dark theme; light is the default when no
   preference is stored (or storage is unavailable). The bundled app module
   components/theme.js cannot load this classic global, so it carries its own
   copy of the same rule — keep all of them in sync. */
(function () {
  // Canonical defining helper for the page world (define-once). This is the
  // ONLY place the "explicit 'dark' opts in, light is the default" decision is
  // made for theme-01 pages; pages-core.js and theme-02/theme.js call it.
  window.WikiTheme = window.WikiTheme || {
    THEME_KEY: 'llm-wiki-theme',
    isDark: function () {
      try { return localStorage.getItem(this.THEME_KEY) === 'dark'; }
      catch (err) { return false; } // storage unavailable -> light (default)
    },
    currentTheme: function () { return this.isDark() ? 'dark' : 'light'; }
  };

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
  link.disabled = window.WikiTheme.isDark();
  if (injected) document.head.appendChild(link);
})();