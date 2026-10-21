"use strict";

if (window.self !== window.top) {
  document.body.classList.add('embedded');
}

/* ============================= BACK LINK =============================
   Article shells ship a static back link targeting the in-reader
   destination (the articles index). Embedded in the Reader that href is
   already correct; standalone (opened in a new tab / direct link), point
   it at the graph home instead. */
(function(){
  if (window.self === window.top) {
    var back = document.querySelector('nav a.back-home');
    if (back) {
      // Only rewire links that resolve to the articles index (article
      // pages); any other back target keeps its destination as written.
      var target = new URL(back.getAttribute('href'), location.href);
      if (/\/pages\/index\.html$/.test(target.pathname)) {
        var dir = location.pathname.replace(/\/[^\/]*$/, '');
        var i = dir.lastIndexOf('/pages');
        if (i !== -1) {
          var root = dir.slice(i + 1).split('/').filter(Boolean) // ['pages', 'en-US']
            .map(function(){ return '../'; }).join('');
          back.setAttribute('href', root + 'index.html');
          var zh = (document.documentElement.lang || '').toLowerCase().indexOf('zh') === 0;
          back.setAttribute('title', zh ? '返回圖譜首頁' : 'Back to graph home');
        }
      }
    }
  }
})();

/* ============================= THEME =============================
   The <head> bootstrap (themes/theme-01/page-theme.js) starts pages-light.css in the
   right state before first paint. Here we listen for parent 'wiki-theme'
   messages / storage events, re-apply the link, and notify diagram renderers
   (wiki-theme event) so they re-render on switch. */
(function(){
  var KEY = 'llm-wiki-theme';
  var link = document.getElementById('theme-light');
  var last = null;
  function cur(){
    // Resolve the active theme through the single page-world helper defined
    // by page-theme.js (<head>), so it can never drift from the pre-paint
    // state. Fall back to the same rule (light default; only explicit 'dark'
    // opts in) if the helper is somehow absent.
    if (window.AppTheme && typeof window.AppTheme.currentTheme === 'function') {
      return window.AppTheme.currentTheme();
    }
    try { return localStorage.getItem(KEY) === 'dark' ? 'dark' : 'light'; }
    catch (e) { return 'light'; }
  }
  function sync(theme){
    if (theme === last) return;
    last = theme;
    if (link) link.disabled = theme !== 'light';
    document.dispatchEvent(new CustomEvent('wiki-theme', { detail: { theme: theme } }));
  }
  window.addEventListener('message', function(e){
    if (e.source !== window.parent) return;
    var d = e.data;
    if (d && d.type === 'wiki-theme' && (d.theme === 'light' || d.theme === 'dark')){
      try { localStorage.setItem(KEY, d.theme); } catch (err) {}
      sync(d.theme);
    }
  });
  window.addEventListener('storage', function(e){
    if (e.key === KEY) sync(e.newValue === 'dark' ? 'dark' : 'light');
  });
  sync(cur());
})();

/* ============================= THEME COLORS =============================
   Helpers for render scripts: read the active theme's palette from CSS
   variables, and map dark-theme accent hexes to light-theme equivalents.
   Called at render time so diagrams re-render correctly on theme switch. */
function wikiThemeColors(){
  function v(name){
    return (getComputedStyle(document.documentElement).getPropertyValue(name) || '').trim();
  }
  var lightLink = document.getElementById('theme-light');
  var theme = lightLink && lightLink.disabled ? 'dark' : 'light';
  return {
    theme: theme,
    bg: v('--bg'), bg2: v('--bg2'), card: v('--card'),
    line: v('--line'), line2: v('--line2'),
    text: v('--text'), dim: v('--dim'), mute: v('--mute'),
    teal: v('--teal'), red: v('--red'), amber: v('--amber'),
    purple: v('--purple'), blue: v('--blue'), pink: v('--pink'),
    green: v('--green'), orange: v('--orange'),
    codeBg: v('--code-bg'),
    node: v('--net-node'), netText: v('--net-text'),
    lineOn: v('--net-line-on'), lineOff: v('--net-line-off'),
  };
}
function wikiHexAlpha(hex, alpha){
  if (!/^#[0-9a-fA-F]{6}$/.test(hex)) return hex;
  var a = Math.round(Math.max(0, Math.min(1, alpha)) * 255).toString(16).padStart(2, '0');
  return hex + a;
}
function wikiAccent(hex){
  if (!hex || wikiThemeColors().theme === 'dark') return hex;
  var map = {
    '#e8a33d': '#B45309', '#9d8df1': '#6D5BD0', '#58d68d': '#1E7A4E',
    '#3ec9a7': '#0F766E', '#f5a65b': '#D9480F', '#5da8ff': '#2563A8',
    '#f283b2': '#C6538F', '#e4575e': '#C0392B', '#8b8bb0': '#4B5563',
    '#c9c9dd': '#22304A', '#5a5a8a': '#0F766E', '#1a1a30': '#F3EFE6',
    '#2a2a4e': '#E2DCCE', '#3a3a5e': '#CCC5B2', '#23233f': '#EFEBE1',
    '#9a9ab0': '#4B5563', '#6b6b85': '#7C8698', '#e0e0e0': '#22304A',
  };
  return map[hex.toLowerCase()] || hex;
}

/* ============================= DIAGRAM TEXT ============================= */

const DIAGRAM_TEXT_SCALE = 1.5;
function scaleDiagramText(svg){
  svg.querySelectorAll('text').forEach(t=>{
    const s = parseFloat(t.getAttribute('font-size'));
    if (s) t.setAttribute('font-size', (s*DIAGRAM_TEXT_SCALE).toFixed(1));
  });
}

/* ============================= TOOLTIP HELPERS ============================= */

function getTip(){
  let el = document.getElementById('netTip');
  if (!el){ // pages without a network diagram have no #netTip — create one lazily
    el = document.createElement('div');
    el.id = 'netTip';
    (document.body || document.documentElement).appendChild(el);
  }
  return el;
}
function showTip(t){ const el=getTip(); el.style.display='block'; el.innerHTML=t; }
function moveTip(ev){ const el=getTip(); el.style.left=(ev.clientX+14)+'px'; el.style.top=(ev.clientY+10)+'px'; }
function hideTip(){ const el=getTip(); el.style.display='none'; }
function tipTap(ev, html){
  const tc = ev.touches && ev.touches[0];
  const el = getTip();
  el.style.display='block'; el.innerHTML=html;
  if (tc){ el.style.left=(tc.clientX+14)+'px'; el.style.top=(tc.clientY+10)+'px'; }
  ev.stopPropagation();
}

document.addEventListener('touchstart', ()=>hideTip(), true);
window.addEventListener('scroll', hideTip, true);

/* ============================= FIGURE LIGHTBOX =============================
   One overlay for both figure kinds: inline SVG diagrams (click a diagram
   to view it full-screen) and raster figure images (gallery cards, <figure>
   blocks). The overlay copies the figure as PNG, zooms images to their
   native size, steps through the page's figure images, and behaves like a
   dialog (Esc / arrow keys, focus restore).

   An SVG diagram is MOVED into the overlay (not cloned) so it keeps its id
   and every id-scoped page rule (#netSvg{background:...}) still paints the
   same card; it goes back to its exact place when the overlay closes.

   The markup and the styles live in themes/shared/figure-lightbox.css —
   theme-02's pages-core.js emits the exact same markup, so both themes
   show the same frame. */
(function(){
  const IMG_SEL = 'figure img, .gallery-card img, .img-wrap img';
  const SVG_SEL = 'svg[role="img"]';
  const FIG_SEL = SVG_SEL + ', ' + IMG_SEL;
  const lb = document.createElement('div');
  lb.className = 'fig-lb';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Figure viewer');
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
  const stage = lb.querySelector('.fig-lb-stage');
  const caption = lb.querySelector('.fig-lb-cap');
  const tools = lb.querySelector('.fig-lb-tools');
  const btnCopy = tools.querySelector('[data-lb="copy"]');
  const btnZoom = tools.querySelector('[data-lb="zoom"]');
  const linkOpen = tools.querySelector('[data-lb="open"]');
  const btnPrev = lb.querySelector('.fig-lb-prev');
  const btnNext = lb.querySelector('.fig-lb-next');
  let lastFocus = null;
  let current = null;  // { kind:'img'|'svg', src, svg, home:{parent,next}, captionEl }
  let gallery = [];    // the page's figure images, in document order
  let index = -1;

  // Icons (small svgs / thumbs) are not figures — same <60px rule the
  // copy-button sweep uses in pages-svg.js.
  function isIcon(el){
    const r = el.getBoundingClientRect();
    return (r.width && r.width < 60) || (r.height && r.height < 60);
  }

  // Mark the figures the overlay can open, so the zoom-in cursor matches
  // exactly what a click does (icons stay un-marked).
  function markFigures(){
    document.querySelectorAll(FIG_SEL).forEach(el => {
      if (!isIcon(el)) el.classList.add('fig-zoom');
    });
  }

  function sizeFigure(el){
    const vb = el.getAttribute('viewBox');
    let W = 1000, H = 1000;
    if (vb){ const p = vb.trim().split(/[\s,]+/).map(Number); if (p.length >= 4){ W = p[2]; H = p[3]; } }
    const maxW = Math.max(window.innerWidth * 0.94, 200);
    const maxH = window.innerHeight * 0.76;
    let w = maxW, h = w * (H / W);
    if (h > maxH){ h = maxH; w = h * (W / H); }
    el.style.width = Math.round(w) + 'px';
    el.style.height = Math.round(h) + 'px';
  }

  function captionFor(el, isSvg){
    if (isSvg){
      const label = el.getAttribute('aria-label');
      if (label) return label.trim();
    }
    const card = el.closest('.gallery-card, figure, .fig, .card');
    const figcap = card && card.querySelector('figcaption');
    if (figcap){
      const t = figcap.textContent.replace(/\s+/g, ' ').trim();
      if (t) return t;
    }
    const parts = [];
    if (card){
      const l = card.querySelector('.fig-label');
      const h = card.querySelector('h3');
      if (l) parts.push(l.textContent.trim());
      if (h) parts.push(h.textContent.trim());
    }
    if (parts.length) return parts.join(' · ');
    return (el.getAttribute('aria-label') || el.alt || '').trim();
  }

  function downloadBlob(blob, name){
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  }

  function flash(msg){
    const orig = btnCopy.textContent;
    btnCopy.textContent = msg;
    btnCopy.disabled = true;
    setTimeout(() => { btnCopy.textContent = orig; btnCopy.disabled = false; }, 1600);
  }

  function updateNav(){
    // The arrows step through the page's figure IMAGES — an SVG diagram has
    // no place in that sequence.
    const many = gallery.length > 1 && current && current.kind === 'img';
    btnPrev.hidden = !many;
    btnNext.hidden = !many;
  }

  function show(el, isSvg, trigger){
    const cap = captionFor(el, isSvg);
    caption.textContent = cap;
    caption.style.display = cap ? '' : 'none';
    lb.classList.add('open');
    document.body.classList.add('fig-lb-open');
    if (!lastFocus) lastFocus = trigger || document.activeElement;
    lb.querySelector('.fig-lb-close').focus();
    updateNav();
  }

  function openImage(img, trigger){
    gallery = Array.from(document.querySelectorAll(IMG_SEL)).filter(el => !isIcon(el));
    index = gallery.indexOf(img);
    const src = img.currentSrc || img.src;
    const full = document.createElement('img');
    full.className = 'fig-lb-img';
    full.src = src;
    full.alt = img.alt || '';
    stage.innerHTML = '';
    stage.appendChild(full);
    current = { kind: 'img', src: src, el: full, captionEl: null };
    const a = img.closest('a[href]');
    linkOpen.href = a ? a.getAttribute('href') : src;
    linkOpen.hidden = false;
    btnZoom.hidden = false;
    btnCopy.textContent = 'Copy image';
    show(img, false, trigger);
  }

  function openSvg(svg, trigger){
    const cap = svg.closest('figure, .fig, .gallery-card');
    const captionEl = cap ? cap.querySelector('figcaption') : null;
    const home = { parent: svg.parentNode, next: svg.nextSibling };
    stage.innerHTML = '';
    svg.classList.add('fig-lb-svg');
    sizeFigure(svg);
    stage.appendChild(svg);
    current = { kind: 'svg', svg: svg, home: home, captionEl: captionEl };
    linkOpen.hidden = true;
    btnZoom.hidden = true;
    btnCopy.textContent = 'Copy diagram';
    show(svg, true, trigger);
  }

  function closeFigure(){
    if (!current) return;
    if (current.kind === 'svg' && current.home && current.home.parent){
      current.home.parent.insertBefore(current.svg, current.home.next);
      current.svg.classList.remove('fig-lb-svg');
      current.svg.style.width = '';
      current.svg.style.height = '';
    }
    current = null;
    lb.classList.remove('open');
    stage.innerHTML = '';
    caption.textContent = '';
    document.body.classList.remove('fig-lb-open');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
    lastFocus = null;
  }

  function step(delta){
    if (!gallery.length) return;
    index = (index + delta + gallery.length) % gallery.length;
    openImage(gallery[index]);
  }

  async function copyCurrent(){
    if (!current) return;
    try {
      if (current.kind === 'img'){
        // Cross-origin images need CORS to be readable by canvas; the figure
        // hosts (cdn.ncbi.nlm.nih.gov, api.johnnykuo.com) send ACAO:*.
        const res = new Image();
        res.crossOrigin = 'anonymous';
        res.src = current.src;
        await res.decode();
        const canvas = document.createElement('canvas');
        canvas.width = res.naturalWidth || res.width;
        canvas.height = res.naturalHeight || res.height;
        canvas.getContext('2d').drawImage(res, 0, 0);
        const blob = await new Promise((ok, no) =>
          canvas.toBlob(b => b ? ok(b) : no(new Error('toBlob failed')), 'image/png'));
        if (!(navigator.clipboard && window.ClipboardItem)) throw new Error('clipboard-unsupported');
        await navigator.clipboard.write([new ClipboardItem({'image/png': blob})]);
        flash('Copied ✓');
      } else {
        const svg = current.svg;
        if (typeof window.svgToPngBlob === 'function' && svg.id){
          const blob = await window.svgToPngBlob(svg.id, 2, { captionEl: current.captionEl });
          if (!(navigator.clipboard && window.ClipboardItem)) throw new Error('clipboard-unsupported');
          await navigator.clipboard.write([new ClipboardItem({'image/png': blob})]);
          flash('Copied ✓');
        } else {
          // No PNG exporter on this page — fall back to the vector source.
          const xml = new XMLSerializer().serializeToString(svg);
          downloadBlob(new Blob([xml], {type:'image/svg+xml;charset=utf-8'}), (svg.id || 'diagram') + '.svg');
          flash('Saved SVG ✓');
        }
      }
    } catch (err) {
      // A tainted canvas (image without CORS headers) can't be exported —
      // say so instead of failing silently.
      console.warn('figure copy failed', err);
      flash('Copy unavailable');
    }
  }

  document.addEventListener('click', (e)=>{
    if (lb.classList.contains('open')) return;
    if (e.target.closest && e.target.closest('.copy-btn')) return; // copy button must not open the full view
    const img = e.target.closest && e.target.closest(IMG_SEL);
    if (img && !isIcon(img)){
      e.preventDefault(); // the figure may be wrapped in a link to the original
      openImage(img, img);
      return;
    }
    const svg = e.target.closest && e.target.closest(SVG_SEL);
    if (svg && !isIcon(svg)) openSvg(svg, svg);
  });

  lb.addEventListener('click', (e)=>{
    if (e.target.classList.contains('fig-lb-close') || e.target === lb || e.target === stage){
      closeFigure();
    } else if (e.target.classList.contains('fig-lb-img')){
      e.target.classList.toggle('is-original'); // click the image to zoom to 1:1
    }
  });

  tools.addEventListener('click', (e)=>{
    const btn = e.target.closest('[data-lb]');
    if (!btn) return;
    if (btn.dataset.lb === 'copy') copyCurrent();
    else if (btn.dataset.lb === 'zoom'){
      const img = stage.querySelector('.fig-lb-img');
      if (img) img.classList.toggle('is-original');
    }
  });

  btnPrev.addEventListener('click', () => step(-1));
  btnNext.addEventListener('click', () => step(1));

  document.addEventListener('keydown', (e)=>{
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeFigure();
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
  });

  window.addEventListener('resize', ()=>{
    if (lb.classList.contains('open') && current && current.kind === 'svg') sizeFigure(current.svg);
  });

  markFigures();
  // Diagrams are drawn by the page scripts that load after this file, so
  // re-mark once the DOM is parsed and again after load.
  document.addEventListener('DOMContentLoaded', markFigures);
  window.addEventListener('load', markFigures);
})();
