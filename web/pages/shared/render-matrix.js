/* ============================= MATRIX ============================= */
function renderMatrix(svgId, columns, sirtOrder, SIRTS, MATRIX, MECH, opts){
  opts = opts || {};
  const svg = document.getElementById(svgId);
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
  columns.forEach((a,i)=>{
    const cx = left + i*cw + cw/2;
    const parts = a.split(' / ');
    let label = '';
    if (parts.length > 1){
      label += `<text x="${cx}" y="${top-62}" text-anchor="middle" fill="#9a9ab0" font-size="${labelFontSize}" font-weight="600"><tspan x="${cx}">${parts[0]}</tspan><tspan x="${cx}" dy="15">${parts[1]}</tspan></text>`;
    } else {
      label += `<text x="${cx}" y="${top-55}" text-anchor="middle" fill="#9a9ab0" font-size="${labelFontSize}" font-weight="600">${a}</text>`;
    }
    svg.innerHTML += label +
      `<line x1="${cx}" y1="${top-40}" x2="${cx}" y2="${top+sirtOrder.length*rh-10}" stroke="#23233f" stroke-width="1"/>`;
  });
  sirtOrder.forEach((s,row)=>{
    const y = top + row*rh;
    svg.innerHTML += `<text x="${left-14}" y="${y+rh/2+5}" text-anchor="end" fill="${SIRTS.find(x=>x.id===s).color}" font-size="16" font-weight="700">${s}</text>`;
    columns.forEach((a,col)=>{
      const val = MATRIX[s][0][col];
      const cell = MECH[s][col];
      const x = left + col*cw, cx = x + cw/2, cy = y + rh/2;
      let fill, stroke, txtcol, sym;
      if (val==='D') { fill='rgba(232,163,61,.12)'; stroke='#E8A33D'; txtcol='#E8A33D'; sym='⇄'; }
      else if (+val>0) { fill=`rgba(88,214,141,${0.06+0.10*(+val)})`; stroke='#58D68D'; txtcol='#58D68D'; sym='+' .repeat(+val); }
      else if (+val<0) { const v=-val; fill=`rgba(228,87,94,${0.06+0.10*v})`; stroke='#E4575E'; txtcol='#E4575E'; sym='−'.repeat(v); }
      else { fill='rgba(224,224,224,.04)'; stroke='#3a3a5e'; txtcol='#6b6b85'; sym='·'; }
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
