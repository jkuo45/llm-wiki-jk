"use strict";
// Shared nav auto-hide: hide on scroll down, show on scroll up.
// Single source of truth for theme-01 (nav), theme-02 (.site-nav), and task-viewer (nav).
// Hides the sticky bar shortly after scrolling down, reappears on scroll up.
// Respects prefers-reduced-motion via CSS (transition:none).
(function () {
  var wired = {};
  function attachNavAutoHide(selector) {
    if (wired[selector]) return true;
    var nav = document.querySelector(selector);
    if (!nav) return false;
    wired[selector] = true;
    var lastY = window.scrollY;
    var hidden = false;
    var THRESH = 6;
    function onScroll() {
      var y = window.scrollY;
      var navH = nav.offsetHeight || 52;
      var down = y > lastY + THRESH;
      var up = y < lastY - THRESH;
      if (down && y > navH && !hidden) { nav.classList.add("nav-hidden"); hidden = true; }
      else if (up && hidden) { nav.classList.remove("nav-hidden"); hidden = false; }
      if (Math.abs(y - lastY) > THRESH) lastY = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return true;
  }
  // Expose for explicit calls (e.g. legacy T2.initNavAutoHide).
  window.attachNavAutoHide = attachNavAutoHide;

  function autoWire() {
    // Prefer the theme-02 selector if present; otherwise fall back to bare <nav>.
    if (!attachNavAutoHide(".site-nav")) attachNavAutoHide("nav");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", autoWire);
  else autoWire();
})();
