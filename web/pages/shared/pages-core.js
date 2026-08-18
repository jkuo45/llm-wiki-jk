"use strict";

if (window.self !== window.top) {
  document.body.classList.add('embedded');
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
