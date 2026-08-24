/* theme-02 — shared page core (mirrors themes/theme-01/pages-core.js).
   Reusable behaviors for the standalone article pages: SVG diagram
   helpers, section scroll-spy, chart tooltip, figure lightbox, nav
   scroll-hint, and Reader/iframe detection.

   Exposed as the global `T2`. Page-specific figure code stays inline in
   each page's <script> and aliases what it needs, e.g.:

     var el = T2.el, text = T2.text, svgRoot = T2.svgRoot;

   Load synchronously in <head>, before the page's end-of-body inline
   script: <script src="themes/theme-02/pages-core.js"></script> */
window.T2 = (function () {
  "use strict";

  var NS = "http://www.w3.org/2000/svg";

  /* Reader / full-page detection: when a page loads inside the graph's
     Reader iframe (self !== top), the parent chrome already provides
     navigation, so mark <body class="embedded"> — CSS hides the standalone
     "← Back" link. In full-page view the link stays visible.
     This file loads synchronously in <head>, so wait for <body>. */
  function markEmbedded() {
    if (window.self !== window.top) {
      document.body.classList.add("embedded");
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", markEmbedded);
  } else {
    markEmbedded();
  }

  /* ——— SVG diagram helpers ——— */

  function el(tag, attrs, parent) {
    var node = document.createElementNS(NS, tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (attrs[k] !== null && attrs[k] !== undefined) {
          node.setAttribute(k, String(attrs[k]));
        }
      });
    }
    if (parent) parent.appendChild(node);
    return node;
  }

  function text(parent, x, y, value, opts) {
    opts = opts || {};
    var t = el("text", {
      x: x,
      y: y,
      fill: opts.fill || "var(--ink)",
      "font-family": opts.mono ? 'IBM Plex Mono, ui-monospace, monospace' : 'IBM Plex Sans, Helvetica Neue, sans-serif',
      "font-size": opts.size || 12,
      "font-weight": opts.weight || 400,
      "text-anchor": opts.anchor || "start",
      "dominant-baseline": opts.baseline || "alphabetic",
      opacity: opts.opacity || null,
      transform: opts.transform || null
    }, parent);
    t.textContent = value;
    return t;
  }

  function clear(host) {
    while (host.firstChild) host.removeChild(host.firstChild);
  }

  function svgRoot(host, w, h, title) {
    clear(host);
    var svg = el("svg", {
      viewBox: "0 0 " + w + " " + h,
      role: "img",
      "aria-label": title || "Diagram"
    }, host);
    el("title", null, svg).textContent = title || "Diagram";
    el("rect", { x: 0, y: 0, width: w, height: h, fill: "var(--sheet)" }, svg);
    return svg;
  }

  function arrowHead(svg, id, color) {
    var defs = svg.querySelector("defs") || el("defs", null, svg);
    var m = el("marker", { id: id, viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto-start-reverse" }, defs);
    el("path", { d: "M 0 1.2 L 10 5 L 0 8.8 z", fill: color }, m);
  }

  function wrapText(svg, x, y, value, maxW, size) {
    var words = value.split(" ");
    var line = "";
    var dy = 0;
    var approx = size * 0.58;
    words.forEach(function (w) {
      var test = line ? line + " " + w : w;
      if (test.length * approx > maxW) {
        text(svg, x, y + dy, line, { size: size, fill: "var(--mute)" });
        line = w;
        dy += size + 4;
      } else {
        line = test;
      }
    });
    if (line) text(svg, x, y + dy, line, { size: size, fill: "var(--mute)" });
  }

  /* ——— Nav scroll spy ——— */

  function initNav() {
    var ids = Array.prototype.map.call(
      document.querySelectorAll("main section[id]"),
      function (s) { return s.id; }
    );
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-links a, .toc a"));
    function setActive(id) {
      links.forEach(function (a) {
        var href = a.getAttribute("href") || "";
        a.classList.toggle("is-active", href === "#" + id);
      });
    }
    if ("IntersectionObserver" in window) {
      var vis = {};
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { vis[e.target.id] = e.isIntersecting ? e.intersectionRatio : 0; });
        var best = ids.reduce(function (a, b) { return (vis[b] || 0) > (vis[a] || 0) ? b : a; }, ids[0]);
        if (best) setActive(best);
      }, { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] });
      ids.forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
    }
  }

  /* ——— Chart tooltip ([data-tip] targets) ——— */

  function initTooltip() {
    var tip = document.createElement("div");
    tip.className = "tooltip";
    tip.setAttribute("role", "tooltip");
    document.body.appendChild(tip);
    document.addEventListener("pointerover", function (e) {
      var t = e.target.closest("[data-tip]");
      if (!t) return;
      tip.textContent = t.getAttribute("data-tip");
      tip.classList.add("is-on");
    });
    document.addEventListener("pointermove", function (e) {
      if (!tip.classList.contains("is-on")) return;
      tip.style.left = e.clientX + "px";
      tip.style.top = e.clientY - 12 + "px";
    });
    document.addEventListener("pointerout", function (e) {
      if (e.target.closest("[data-tip]")) tip.classList.remove("is-on");
    });
  }

  /* ——— Diagram lightbox ——— */

  function initLightbox() {
    var lb = document.createElement("div");
    lb.className = "lb";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.innerHTML = '<button class="lb-close" type="button" aria-label="Close full view">&times;</button><div class="lb-stage"></div><p class="lb-cap"></p>';
    document.body.appendChild(lb);
    var stage = lb.querySelector(".lb-stage");
    var cap = lb.querySelector(".lb-cap");
    function sizeClone(clone) {
      var vb = clone.getAttribute("viewBox");
      var W = 1000, H = 1000;
      if (vb) { var p = vb.trim().split(/[\s,]+/).map(Number); if (p.length >= 4) { W = p[2]; H = p[3]; } }
      var maxW = Math.max(window.innerWidth - 48, 200);
      var maxH = window.innerHeight * 0.78;
      var w = maxW, h = w * (H / W);
      if (h > maxH) { h = maxH; w = h * (W / H); }
      clone.style.width = Math.round(w) + "px";
      clone.style.height = Math.round(h) + "px";
    }
    function openDiagram(svg) {
      var clone = svg.cloneNode(true);
      clone.removeAttribute("id");
      sizeClone(clone);
      stage.innerHTML = "";
      stage.appendChild(clone);
      var label = svg.getAttribute("aria-label") || "";
      cap.textContent = label;
      cap.style.display = label ? "" : "none";
      lb.classList.add("open");
      document.body.classList.add("lb-open");
      lb.querySelector(".lb-close").focus();
    }
    function closeDiagram() {
      lb.classList.remove("open");
      document.body.classList.remove("lb-open");
      stage.innerHTML = "";
    }
    document.body.addEventListener("click", function (e) {
      if (lb.classList.contains("open")) return;
      if (e.target.closest(".copy-btn")) return; // copy button must not open the full view
      var svg = e.target.closest(".fig-canvas svg");
      if (svg) openDiagram(svg);
    });
    lb.addEventListener("click", function (e) {
      if (e.target.classList.contains("lb-close") || e.target === lb || e.target === stage) closeDiagram();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lb.classList.contains("open")) closeDiagram();
    });
  }

  /* ——— Nav scroll-hint ——— */

  function initNavScrollHint() {
    var navLinks = document.querySelector(".nav-links");
    var siteNav = document.querySelector(".site-nav");
    if (!navLinks || !siteNav) return;
    function checkEnd() {
      var atEnd = navLinks.scrollLeft + navLinks.clientWidth >= navLinks.scrollWidth - 4;
      siteNav.classList.toggle("nav-end", atEnd);
    }
    navLinks.addEventListener("scroll", checkEnd, { passive: true });
    checkEnd();
    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkEnd, 150);
    }, { passive: true });
  }

  return {
    el: el,
    text: text,
    clear: clear,
    svgRoot: svgRoot,
    arrowHead: arrowHead,
    wrapText: wrapText,
    initNav: initNav,
    initTooltip: initTooltip,
    initLightbox: initLightbox,
    initNavScrollHint: initNavScrollHint
  };
})();
