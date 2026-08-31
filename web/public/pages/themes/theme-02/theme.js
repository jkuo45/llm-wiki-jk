/* theme-02 bootstrap — loaded synchronously in <head> BEFORE first paint,
   so pages styled by themes/theme-02/theme.css start in the correct state
   (no theme flash).

   Shares the app-wide theme key with the graph chrome (components/theme.js):
   localStorage 'llm-wiki-theme' = 'dark' | 'light'. Light is the default;
   only an explicit 'dark' opts into the dark palette defined in dark.css.

   The page-world theme rule lives on window.WikiTheme (currentTheme()/isDark());
   themes/theme-01/page-theme.js exposes the identical define-once object and
   themes/theme-01/pages-core.js consumes it through the same helper. The
   bundled app module components/theme.js carries its own copy of the rule —
   keep all of them in sync.

   After paint this file also stays resident and re-applies the theme when
   it changes elsewhere: storage events (other tabs / the reader header
   toggle) and 'wiki-theme' postMessages (Reader iframe embedding).
*/
(function () {
  var KEY = 'llm-wiki-theme';

  // Canonical defining helper for the page world (define-once). Identical to
  // themes/theme-01/page-theme.js — the "explicit 'dark' opts in, light is
  // the default" decision lives here for theme-02 pages.
  window.WikiTheme = window.WikiTheme || {
    THEME_KEY: KEY,
    isDark: function () {
      try { return localStorage.getItem(this.THEME_KEY) === 'dark'; }
      catch (err) { return false; } // storage unavailable -> light (default)
    },
    currentTheme: function () { return this.isDark() ? 'dark' : 'light'; }
  };

  function apply(theme) {
    document.documentElement.dataset.theme = theme === 'dark' ? 'dark' : 'light';
  }

  apply(window.WikiTheme.currentTheme());

  window.addEventListener('storage', function (e) {
    if (e.key === KEY) apply(e.newValue);
  });

  window.addEventListener('message', function (e) {
    if (e.data && e.data.type === 'wiki-theme') apply(e.data.theme);
  });
})();
