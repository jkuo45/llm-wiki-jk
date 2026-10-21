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

  /* Reader / full-page detection + back-link wiring for the article
     pages' "← Back" link (.site-nav a.home):
     - Embedded in the Reader iframe (self !== top): the link must keep
       navigation inside the frame, so it leads to the articles index
       (mirrors the theme-01 pages) — never the absolute graph URL, which
       would load the whole SPA inside the iframe.
     - Standalone (opened in its own tab / direct link): the graph home is
       the right destination — as a host-relative URL, without the #reader
       side effect that auto-opens the Reader modal.
     Also marks <body class="embedded"> for context-aware styling.
     This file loads synchronously in <head>, so wait for <body>. */
  function initPageContext() {
    if (window.self !== window.top) {
      document.body.classList.add("embedded");
    }
    var back = document.querySelector(".site-nav a.home");
    if (!back) return; // index pages have no back link
    var dir = window.location.pathname.replace(/\/[^\/]*$/, "");
    var i = dir.lastIndexOf("/pages");
    if (i === -1) return;
    var below = dir.slice(i + 1).split("/").filter(Boolean); // e.g. ["pages", "en-US"]
    var zh = (document.documentElement.lang || "").toLowerCase().indexOf("zh") === 0;
    if (window.self === window.top) {
      back.setAttribute("href", below.map(function () { return "../"; }).join("") + "index.html");
      back.setAttribute("title", zh ? "返回圖譜首頁" : "Back to graph home");
    } else {
      // Articles index: one ../ per path segment below pages/.
      back.setAttribute("href", below.slice(1).map(function () { return "../"; }).join("") + "index.html");
      back.setAttribute("title", zh ? "返回文章索引" : "Back to articles index");
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPageContext);
  } else {
    initPageContext();
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

/* ——— Figure lightbox ———
       One overlay for both figure kinds: inline SVG diagrams (click a
       diagram to view it full-screen) and raster figure images (<figure>
       blocks, gallery cards). The overlay copies the figure as PNG, zooms
       images to their native size, steps through the page's figure images,
       and behaves like a dialog (Esc / arrow keys, focus restore).

       An SVG diagram is MOVED into the overlay (not cloned) so it keeps its
       id and every id-scoped page rule (#netSvg{...}) still paints the same
       card; it goes back to its exact place when the overlay closes.

       The markup and the styles live in themes/shared/figure-lightbox.css —
       theme-01's pages-core.js emits the exact same markup, so both themes
       show the same frame. */

  var FIG_IMG_SEL = "figure img, .gallery-card img, .img-wrap img";
  var FIG_SVG_SEL = "svg[role=\"img\"]";
  var FIG_SEL = FIG_SVG_SEL + ", " + FIG_IMG_SEL;

  // Icons (small svgs / thumbs) are not figures — same <60px rule the
  // copy-button sweep uses in pages-svg.js.
  function figIsIcon(el) {
    var r = el.getBoundingClientRect();
    return (r.width && r.width < 60) || (r.height && r.height < 60);
  }

  // Mark the figures the overlay can open, so the zoom-in cursor matches
  // exactly what a click does (icons stay un-marked).
  function markFigures() {
    document.querySelectorAll(FIG_SEL).forEach(function (el) {
      if (!figIsIcon(el)) el.classList.add("fig-zoom");
    });
  }

  function initLightbox() {
    if (document.querySelector(".fig-lb")) return; // idempotent — pages may also call T2.initLightbox()
    var lb = document.createElement("div");
    lb.className = "fig-lb";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-label", "Figure viewer");
    lb.innerHTML =
      '<button class="fig-lb-close" type="button" aria-label="Close full view">&times;</button>' +
      '<button class="fig-lb-nav fig-lb-prev" type="button" aria-label="Previous figure">&#8249;</button>' +
      '<button class="fig-lb-nav fig-lb-next" type="button" aria-label="Next figure">&#8250;</button>' +
      '<div class="fig-lb-stage"></div>' +
      '<p class="fig-lb-cap"></p>' +
      '<div class="fig-lb-tools">' +
      '<button type="button" class="fig-lb-tool" data-lb="copy">Copy</button>' +
      '<button type="button" class="fig-lb-tool" data-lb="zoom">Zoom</button>' +
      '<a class="fig-lb-tool" data-lb="open" target="_blank" rel="noopener noreferrer" hidden>Open original</a>' +
      '</div>';
    document.body.appendChild(lb);
    var stage = lb.querySelector(".fig-lb-stage");
    var cap = lb.querySelector(".fig-lb-cap");
    var tools = lb.querySelector(".fig-lb-tools");
    var btnCopy = tools.querySelector('[data-lb="copy"]');
    var btnZoom = tools.querySelector('[data-lb="zoom"]');
    var linkOpen = tools.querySelector('[data-lb="open"]');
    var btnPrev = lb.querySelector(".fig-lb-prev");
    var btnNext = lb.querySelector(".fig-lb-next");
    var lastFocus = null;
    var current = null; // { kind:'img'|'svg', src, svg, home:{parent,next}, captionEl }
    var gallery = [];   // the page's figure images, in document order
    var index = -1;

    function sizeFigure(el) {
      var vb = el.getAttribute("viewBox");
      var W = 1000, H = 1000;
      if (vb) { var p = vb.trim().split(/[\s,]+/).map(Number); if (p.length >= 4) { W = p[2]; H = p[3]; } }
      var maxW = Math.max(window.innerWidth * 0.94, 200);
      var maxH = window.innerHeight * 0.76;
      var w = maxW, h = w * (H / W);
      if (h > maxH) { h = maxH; w = h * (W / H); }
      el.style.width = Math.round(w) + "px";
      el.style.height = Math.round(h) + "px";
    }

    function captionFor(el, isSvg) {
      if (isSvg) {
        var label = el.getAttribute("aria-label");
        if (label) return label.trim();
      }
      var card = el.closest(".gallery-card, figure, .fig, .card");
      if (card) {
        var figcap = card.querySelector("figcaption");
        if (figcap) {
          var t = figcap.textContent.replace(/\s+/g, " ").trim();
          if (t) return t;
        }
      }
      var parts = [];
      if (card) {
        var l = card.querySelector(".fig-label");
        var h = card.querySelector("h3");
        if (l) parts.push(l.textContent.trim());
        if (h) parts.push(h.textContent.trim());
      }
      if (parts.length) return parts.join(" · ");
      return (el.getAttribute("aria-label") || el.alt || "").trim();
    }

    function downloadBlob(blob, name) {
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
    }

    function flash(msg) {
      var orig = btnCopy.textContent;
      btnCopy.textContent = msg;
      btnCopy.disabled = true;
      setTimeout(function () { btnCopy.textContent = orig; btnCopy.disabled = false; }, 1600);
    }

    function updateNav() {
      // The arrows step through the page's figure IMAGES — an SVG diagram
      // has no place in that sequence.
      var many = gallery.length > 1 && current && current.kind === "img";
      btnPrev.hidden = !many;
      btnNext.hidden = !many;
    }

    function show(el, isSvg, trigger) {
      var text = captionFor(el, isSvg);
      cap.textContent = text;
      cap.style.display = text ? "" : "none";
      lb.classList.add("open");
      document.body.classList.add("fig-lb-open");
      if (!lastFocus) lastFocus = trigger || document.activeElement;
      lb.querySelector(".fig-lb-close").focus();
      updateNav();
    }

    function openImage(img, trigger) {
      gallery = Array.prototype.slice.call(document.querySelectorAll(FIG_IMG_SEL)).filter(function (el) { return !figIsIcon(el); });
      index = gallery.indexOf(img);
      var src = img.currentSrc || img.src;
      var full = document.createElement("img");
      full.className = "fig-lb-img";
      full.src = src;
      full.alt = img.alt || "";
      stage.innerHTML = "";
      stage.appendChild(full);
      current = { kind: "img", src: src, el: full, captionEl: null };
      var a = img.closest("a[href]");
      linkOpen.href = a ? a.getAttribute("href") : src;
      linkOpen.hidden = false;
      btnZoom.hidden = false;
      btnCopy.textContent = "Copy image";
      show(img, false, trigger);
    }

    function openSvg(svg, trigger) {
      var card = svg.closest("figure, .fig, .gallery-card");
      var captionEl = card ? card.querySelector("figcaption") : null;
      var home = { parent: svg.parentNode, next: svg.nextSibling };
      stage.innerHTML = "";
      svg.classList.add("fig-lb-svg");
      sizeFigure(svg);
      stage.appendChild(svg);
      current = { kind: "svg", svg: svg, home: home, captionEl: captionEl };
      linkOpen.hidden = true;
      btnZoom.hidden = true;
      btnCopy.textContent = "Copy diagram";
      show(svg, true, trigger);
    }

    function closeFigure() {
      if (!current) return;
      if (current.kind === "svg" && current.home && current.home.parent) {
        current.home.parent.insertBefore(current.svg, current.home.next);
        current.svg.classList.remove("fig-lb-svg");
        current.svg.style.width = "";
        current.svg.style.height = "";
      }
      current = null;
      lb.classList.remove("open");
      document.body.classList.remove("fig-lb-open");
      stage.innerHTML = "";
      cap.textContent = "";
      if (lastFocus && lastFocus.focus) lastFocus.focus();
      lastFocus = null;
    }

    function step(delta) {
      if (!gallery.length) return;
      index = (index + delta + gallery.length) % gallery.length;
      openImage(gallery[index]);
    }

    async function copyCurrent() {
      if (!current) return;
      try {
        if (current.kind === "img") {
          // Cross-origin images need CORS to be readable by canvas; the
          // figure hosts (cdn.ncbi.nlm.nih.gov, api.johnnykuo.com) send ACAO:*.
          var res = new Image();
          res.crossOrigin = "anonymous";
          res.src = current.src;
          await res.decode();
          var canvas = document.createElement("canvas");
          canvas.width = res.naturalWidth || res.width;
          canvas.height = res.naturalHeight || res.height;
          canvas.getContext("2d").drawImage(res, 0, 0);
          var blob = await new Promise(function (ok, no) {
            canvas.toBlob(function (b) { b ? ok(b) : no(new Error("toBlob failed")); }, "image/png");
          });
          if (!(navigator.clipboard && window.ClipboardItem)) throw new Error("clipboard-unsupported");
          await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
          flash("Copied ✓");
        } else {
          var svg = current.svg;
          if (typeof window.svgToPngBlob === "function" && svg.id) {
            var blob2 = await window.svgToPngBlob(svg.id, 2, { captionEl: current.captionEl });
            if (!(navigator.clipboard && window.ClipboardItem)) throw new Error("clipboard-unsupported");
            await navigator.clipboard.write([new ClipboardItem({ "image/png": blob2 })]);
            flash("Copied ✓");
          } else {
            // No PNG exporter on this page — fall back to the vector source.
            var xml = new XMLSerializer().serializeToString(svg);
            downloadBlob(new Blob([xml], { type: "image/svg+xml;charset=utf-8" }), (svg.id || "diagram") + ".svg");
            flash("Saved SVG ✓");
          }
        }
      } catch (err) {
        // A tainted canvas (image without CORS headers) can't be exported —
        // say so instead of failing silently.
        console.warn("figure copy failed", err);
        flash("Copy unavailable");
      }
    }

    document.addEventListener("click", function (e) {
      if (lb.classList.contains("open")) return;
      if (e.target.closest && e.target.closest(".copy-btn")) return; // copy button must not open the full view
      var img = e.target.closest && e.target.closest(FIG_IMG_SEL);
      if (img && !figIsIcon(img)) {
        e.preventDefault(); // the figure may be wrapped in a link to the original
        openImage(img, img);
        return;
      }
      var svg = e.target.closest && e.target.closest(FIG_SVG_SEL);
      if (svg && !figIsIcon(svg)) openSvg(svg, svg);
    });

    lb.addEventListener("click", function (e) {
      if (e.target.classList.contains("fig-lb-close") || e.target === lb || e.target === stage) {
        closeFigure();
      } else if (e.target.classList.contains("fig-lb-img")) {
        e.target.classList.toggle("is-original"); // click the image to zoom to 1:1
      }
    });

    tools.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-lb]");
      if (!btn) return;
      if (btn.dataset.lb === "copy") copyCurrent();
      else if (btn.dataset.lb === "zoom") {
        var img = stage.querySelector(".fig-lb-img");
        if (img) img.classList.toggle("is-original");
      }
    });

    btnPrev.addEventListener("click", function () { step(-1); });
    btnNext.addEventListener("click", function () { step(1); });

    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") closeFigure();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    });

    window.addEventListener("resize", function () {
      if (lb.classList.contains("open") && current && current.kind === "svg") sizeFigure(current.svg);
    });

    markFigures();
    window.addEventListener("load", markFigures);
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

  // Legacy alias — logic now lives in themes/shared/nav-auto-hide.js (auto-wires).
  // Kept so older pages calling T2.initNavAutoHide() remain harmless.
  function initNavAutoHide() {
    if (window.attachNavAutoHide) window.attachNavAutoHide(".site-nav");
  }

  // Every theme-02 page gets the figure lightbox. Pages that also call
  // T2.initLightbox() explicitly are no-ops (initLightbox is idempotent).
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLightbox);
  } else {
    initLightbox();
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
    initNavScrollHint: initNavScrollHint,
    initNavAutoHide: initNavAutoHide
  };
})();
