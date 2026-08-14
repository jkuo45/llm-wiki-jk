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

function showTip(t){ const el=document.getElementById('netTip'); el.style.display='block'; el.innerHTML=t; }
function moveTip(ev){ const el=document.getElementById('netTip'); el.style.left=(ev.clientX+14)+'px'; el.style.top=(ev.clientY+10)+'px'; }
function hideTip(){ document.getElementById('netTip').style.display='none'; }
function tipTap(ev, html){
  const tc = ev.touches && ev.touches[0];
  const el = document.getElementById('netTip');
  el.style.display='block'; el.innerHTML=html;
  if (tc){ el.style.left=(tc.clientX+14)+'px'; el.style.top=(tc.clientY+10)+'px'; }
  ev.stopPropagation();
}

document.addEventListener('touchstart', ()=>hideTip(), true);
window.addEventListener('scroll', hideTip, true);
