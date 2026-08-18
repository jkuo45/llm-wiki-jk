/* ============================= SPECTRUM CHART ============================= */
function renderSpectrum(svgId, SIRTS, labels){
  labels = labels || {};
  const svg = document.getElementById(svgId);
  const C = wikiThemeColors();
  const W = 1000, mid = W/2, scale = 120;
  const padL = 150, padR = 150;
  const barH = 34, rowGap = 20;
  const H = 54 + SIRTS.length*(barH + rowGap + 20) + 62;
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.innerHTML = ''; // idempotent: rebuild fully on re-render (theme switch)
  let y = 54;
  const defs = document.createElementNS('http://www.w3.org/2000/svg','defs');
  defs.innerHTML = `<linearGradient id="gradSupp" x1="0" x2="1"><stop offset="0" stop-color="${C.green}" stop-opacity=".05"/><stop offset="1" stop-color="${C.teal}"/></linearGradient>`+
                   `<linearGradient id="gradOnco" x1="1" x2="0"><stop offset="0" stop-color="${C.red}" stop-opacity=".05"/><stop offset="1" stop-color="${C.red}"/></linearGradient>`;
  svg.appendChild(defs);
  const topLabel = labels.top || 'HARMFUL / deleterious';
  const centerLabel = labels.center || 'center = context-dependent';
  const leftLabel = labels.left || '← harmful';
  const rightLabel = labels.right || 'protective →';
  svg.innerHTML += `<line x1="${mid}" y1="30" x2="${mid}" y2="${H-40}" stroke="${C.line}" stroke-width="2"/>` +
                   `<text x="${mid}" y="${H-24}" text-anchor="middle" fill="${C.dim}" font-size="13" font-weight="600">${topLabel}</text>` +
                   `<text x="${mid}" y="${H-8}" text-anchor="middle" fill="${C.mute}" font-size="11">${centerLabel}</text>` +
                   `<text x="${mid-24}" y="44" text-anchor="end" fill="${C.red}" font-size="12" font-weight="700">${leftLabel}</text>` +
                   `<text x="${mid+24}" y="44" text-anchor="start" fill="${C.green}" font-size="12" font-weight="700">${rightLabel}</text>`;

  SIRTS.forEach(s=>{
    const x = mid + s.score*scale;
    const lo = mid + (s.score - s.range)*scale;
    const hi = mid + (s.score + s.range)*scale;
    const sc = wikiAccent(s.color) || C.text;
    const g = document.createElementNS('http://www.w3.org/2000/svg','g');
    const win = document.createElementNS('http://www.w3.org/2000/svg','rect');
    win.setAttribute('x', Math.min(lo,hi)); win.setAttribute('y', y+4); win.setAttribute('width', Math.abs(hi-lo));
    win.setAttribute('height', barH-8); win.setAttribute('rx', 8); win.setAttribute('fill', C.codeBg); win.setAttribute('stroke', C.line2); win.setAttribute('stroke-width','1');
    const wbar = document.createElementNS('http://www.w3.org/2000/svg','rect');
    const left = s.score<0, w = Math.abs(s.score)*scale;
    wbar.setAttribute('x', left? x : mid); wbar.setAttribute('y', y+4); wbar.setAttribute('width', Math.max(w,6)); wbar.setAttribute('height', barH-8);
    wbar.setAttribute('rx',8); wbar.setAttribute('fill', left? 'url(#gradOnco)' : 'url(#gradSupp)'); wbar.setAttribute('stroke', left? C.red:C.teal); wbar.setAttribute('stroke-width','1.2');
    const lab = document.createElementNS('http://www.w3.org/2000/svg','text');
    lab.setAttribute('x', padL); lab.setAttribute('y', y+barH/2+5); lab.setAttribute('text-anchor','end');
    lab.setAttribute('font-size','16'); lab.setAttribute('font-weight','700'); lab.setAttribute('fill', sc);
    lab.textContent = s.id;
    const cap = document.createElementNS('http://www.w3.org/2000/svg','text');
    cap.setAttribute('x', mid); cap.setAttribute('y', y+barH+14); cap.setAttribute('text-anchor','middle');
    cap.setAttribute('font-size','10.5'); cap.setAttribute('fill', C.mute);
    cap.textContent = s.net;
    g.appendChild(win); g.appendChild(wbar); g.appendChild(lab); g.appendChild(cap);
    g.style.cursor='pointer';
    g.addEventListener('mouseenter', ()=>showTip(`<b style="color:${sc}">${s.id}</b> — ${s.net}<br><span style="color:var(--dim)">${s.rationale}</span>`));
    g.addEventListener('mousemove', moveTip);
    g.addEventListener('mouseleave', hideTip);
    g.addEventListener('touchstart', ev=>tipTap(ev, `<b style="color:${sc}">${s.id}</b> — ${s.net}<br><span style="color:var(--dim)">${s.rationale}</span>`));
    svg.appendChild(g);
    y += barH + rowGap + 20;
  });
}

// Re-render on theme switch so the diagram adopts the active palette.
(function(){
  let lastArgs = null;
  const orig = window.renderSpectrum;
  window.renderSpectrum = function(svgId, SIRTS, labels){
    lastArgs = [svgId, SIRTS, labels || {}];
    orig.apply(null, lastArgs);
  };
  document.addEventListener('wiki-theme', function(){
    if (lastArgs) orig.apply(null, lastArgs);
  });
})();