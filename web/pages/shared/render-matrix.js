/* ============================= MATRIX ============================= */
function renderMatrix(svgId, columns, sirtOrder, SIRTS, MATRIX, MECH, opts){
  opts = opts || {};
  const svg = document.getElementById(svgId);
  const C = wikiThemeColors();
  const W = opts.W || 1240;
  const top = opts.top || 90;
  const left = opts.left || 110;
  const cw = opts.cw || 118;
  const ch = opts.ch || 84;
  const rh = opts.rh || 72;
  const labelFontSize = opts.labelFontSize || '11.5';
  const cellFontSize = opts.cellFontSize || '16';
  const cellPadX = opts.cellPadX || 5;
  const cellPadW = opts.cellPadW || 10;
  const lastBottom = top + (sirtOrder.length-1)*rh + (ch-16);
  const pad = top - 56;
  const H = lastBottom + pad;
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.innerHTML = ''; // idempotent: rebuild fully on re-render (theme switch)
  columns.forEach((a,i)=>{
    const cx = left + i*cw + cw/2;
    const parts = a.split(' / ');
    let label = '';
    if (parts.length > 1){
      label += `<text x="${cx}" y="${top-62}" text-anchor="middle" fill="${C.dim}" font-size="${labelFontSize}" font-weight="600"><tspan x="${cx}">${parts[0]}</tspan><tspan x="${cx}" dy="15">${parts[1]}</tspan></text>`;
    } else {
      label += `<text x="${cx}" y="${top-55}" text-anchor="middle" fill="${C.dim}" font-size="${labelFontSize}" font-weight="600">${a}</text>`;
    }
    svg.innerHTML += label +
      `<line x1="${cx}" y1="${top-40}" x2="${cx}" y2="${top+sirtOrder.length*rh-10}" stroke="${C.codeBg}" stroke-width="1"/>`;
  });
  sirtOrder.forEach((s,row)=>{
    const y = top + row*rh;
    const sc = wikiAccent(SIRTS.find(x=>x.id===s).color) || C.text;
    svg.innerHTML += `<text x="${left-14}" y="${y+rh/2+5}" text-anchor="end" fill="${sc}" font-size="16" font-weight="700">${s}</text>`;
    columns.forEach((a,col)=>{
      const val = MATRIX[s][0][col];
      const cell = MECH[s][col];
      const x = left + col*cw, cx = x + cw/2, cy = y + rh/2;
      let fill, stroke, txtcol, sym;
      if (val==='D') { fill=wikiHexAlpha(C.amber,.12); stroke=C.amber; txtcol=C.amber; sym='⇄'; }
      else if (+val>0) { fill=wikiHexAlpha(C.green,0.06+0.10*(+val)); stroke=C.green; txtcol=C.green; sym='+' .repeat(+val); }
      else if (+val<0) { const v=-val; fill=wikiHexAlpha(C.red,0.06+0.10*v); stroke=C.red; txtcol=C.red; sym='−'.repeat(v); }
      else { fill=wikiHexAlpha(C.text,.04); stroke=C.line2; txtcol=C.mute; sym='·'; }
      const g = document.createElementNS('http://www.w3.org/2000/svg','g');
      const r = document.createElementNS('http://www.w3.org/2000/svg','rect');
      r.setAttribute('x', x+cellPadX); r.setAttribute('y', y+8); r.setAttribute('width', cw-cellPadW); r.setAttribute('height', rh-16); r.setAttribute('rx',10);
      r.setAttribute('fill', fill); r.setAttribute('stroke', stroke); r.setAttribute('stroke-width','1.2');
      const t1 = document.createElementNS('http://www.w3.org/2000/svg','text');
      t1.setAttribute('x', cx); t1.setAttribute('y', cy+5); t1.setAttribute('text-anchor','middle'); t1.setAttribute('font-size',cellFontSize); t1.setAttribute('font-weight','800'); t1.setAttribute('fill', txtcol);
      t1.textContent = sym;
      g.appendChild(r); g.appendChild(t1);
      g.style.cursor='pointer';
      g.addEventListener('mouseenter',()=>showTip(`<b style="color:${stroke}">${s} × ${a}</b> — ${cell.des}<br><span style="color:var(--dim)">${cell.txt}</span>`));
      g.addEventListener('mousemove', moveTip);
      g.addEventListener('mouseleave', hideTip);
      g.addEventListener('touchstart', ev=>tipTap(ev, `<b style="color:${stroke}">${s} × ${a}</b> — ${cell.des}<br><span style="color:var(--dim)">${cell.txt}</span>`));
      svg.appendChild(g);
    });
  });
}

// Re-render on theme switch so the diagram adopts the active palette.
(function(){
  let lastArgs = null;
  const orig = window.renderMatrix;
  window.renderMatrix = function(svgId, columns, sirtOrder, SIRTS, MATRIX, MECH, opts){
    lastArgs = [svgId, columns, sirtOrder, SIRTS, MATRIX, MECH, opts || {}];
    orig.apply(null, lastArgs);
  };
  document.addEventListener('wiki-theme', function(){
    if (lastArgs) orig.apply(null, lastArgs);
  });
})();