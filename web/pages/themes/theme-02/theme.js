/* theme-02 bootstrap — loaded synchronously in <head> BEFORE first paint,
   so pages styled by themes/theme-02/theme.css start in the correct state
   (no theme flash).

   Shares the app-wide theme key with the graph chrome (components/theme.js):
   localStorage 'llm-wiki-theme' = 'dark' | 'light'. Light is the default;
   only an explicit 'dark' opts into the dark palette defined in dark.css.

   After paint this file also stays resident and re-applies the theme when
   it changes elsewhere: storage events (other tabs / the reader header
   toggle) and 'wiki-theme' postMessages (Reader iframe embedding).
*/
(function () {
  var KEY = 'llm-wiki-theme';

  function apply(theme) {
    document.documentElement.dataset.theme = theme === 'dark' ? 'dark' : 'light';
  }

  try {
    apply(localStorage.getItem(KEY));
  } catch (err) {
    apply('light'); // storage unavailable -> light default
  }

  window.addEventListener('storage', function (e) {
    if (e.key === KEY) apply(e.newValue);
  });

  window.addEventListener('message', function (e) {
    if (e.data && e.data.type === 'wiki-theme') apply(e.data.theme);
  });
})();
