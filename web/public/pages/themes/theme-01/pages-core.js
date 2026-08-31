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
    if (window.WikiTheme && typeof window.WikiTheme.currentTheme === 'function') {
      return window.WikiTheme.currentTheme();
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

/* ============================= DIAGRAM LIGHTBOX ============================= */
(function(){
  const lb = document.createElement('div');
  lb.id = 'diagram-lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.innerHTML =
    '<button id="diagram-lightbox-close" aria-label="Close full view">&times;</button>' +
    '<div class="diagram-lightbox-stage"></div>' +
    '<div class="diagram-lightbox-caption"></div>';
  document.body.appendChild(lb);
  const stage = lb.querySelector('.diagram-lightbox-stage');
  const caption = lb.querySelector('.diagram-lightbox-caption');
  let lastFocus = null;

  function sizeClone(clone){
    const vb = clone.getAttribute('viewBox');
    let W = 1000, H = 1000;
    if (vb){ const p = vb.trim().split(/[\s,]+/).map(Number); if (p.length >= 4){ W = p[2]; H = p[3]; } }
    const maxW = window.innerWidth * 0.94;
    const maxH = window.innerHeight * 0.82;
    let w = maxW, h = w * (H / W);
    if (h > maxH){ h = maxH; w = h * (W / H); }
    clone.style.width = Math.round(w) + 'px';
    clone.style.height = Math.round(h) + 'px';
  }

  function openDiagram(svg){
    const clone = svg.cloneNode(true);
    clone.removeAttribute('id');
    sizeClone(clone);
    stage.innerHTML = '';
    stage.appendChild(clone);
    const cap = svg.getAttribute('aria-label');
    caption.textContent = cap || '';
    caption.style.display = cap ? 'block' : 'none';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    lastFocus = document.activeElement;
    lb.querySelector('#diagram-lightbox-close').focus();
  }

  function closeDiagram(){
    lb.classList.remove('open');
    stage.innerHTML = '';
    caption.textContent = '';
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.addEventListener('click', (e)=>{
    if (lb.classList.contains('open')) return;
    if (e.target.closest && e.target.closest('.copy-btn')) return; // copy button must not open the full view
    const svg = e.target.closest && e.target.closest('svg[role="img"]');
    if (svg) openDiagram(svg);
  });

  lb.addEventListener('click', (e)=>{
    if (e.target.id === 'diagram-lightbox-close' || e.target === lb || e.target === stage){
      closeDiagram();
    }
  });

  document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape' && lb.classList.contains('open')) closeDiagram();
  });

  window.addEventListener('resize', ()=>{
    if (lb.classList.contains('open')){
      const c = stage.querySelector('.diagram-lightbox-svg');
      if (c) sizeClone(c);
    }
  });
})();
