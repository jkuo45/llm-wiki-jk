/* ============================= COPY DIAGRAM AS PNG ============================= */
function svgToPngBlob(svgId, scale){
  const svg = document.getElementById(svgId);
  const clone = svg.cloneNode(true);
  clone.setAttribute('xmlns','http://www.w3.org/2000/svg');
  clone.setAttribute('xmlns:xlink','http://www.w3.org/1999/xlink');
  const vb = svg.viewBox.baseVal;
  const w = vb.width, h = vb.height;
  clone.setAttribute('width', w);
  clone.setAttribute('height', h);
  const svgCS = getComputedStyle(svg);
  let bg = '';
  const sBgImage = svgCS.backgroundImage && svgCS.backgroundImage !== 'none' ? svgCS.backgroundImage : '';
  const sBgColor = svgCS.backgroundColor && svgCS.backgroundColor !== 'rgba(0, 0, 0, 0)' ? svgCS.backgroundColor : '';
  if (sBgImage) bg = sBgImage;
  else if (sBgColor) bg = sBgColor;
  else {
    const card = svg.closest('.spectrum-card');
    const cCS = card ? getComputedStyle(card) : null;
    bg = cCS && cCS.backgroundColor ? cCS.backgroundColor : 'transparent';
  }
  const xml = new XMLSerializer().serializeToString(clone);
  const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(xml);
  return new Promise((resolve, reject)=>{
    const img = new Image();
    img.onload = ()=>{
      const canvas = document.createElement('canvas');
      canvas.width = w*scale; canvas.height = h*scale;
      const ctx = canvas.getContext('2d');
      ctx.scale(scale, scale);
      if (bg && bg !== 'transparent'){ ctx.fillStyle = bg; ctx.fillRect(0,0,w,h); }
      ctx.drawImage(img, 0, 0, w, h);
      canvas.toBlob(b=> b ? resolve(b) : reject(new Error('no-blob')), 'image/png');
    };
    img.onerror = ()=>reject(new Error('svg-load'));
    img.src = url;
  });
}
/* ============================= COPY TABLE TO CLIPBOARD ============================= */
function tableToTsv(table){
  return Array.from(table.querySelectorAll('tr'))
    .map(tr => Array.from(tr.children).map(c => c.innerText.replace(/\s+/g,' ').trim()).join('\t'))
    .join('\n');
}
function tableToHtml(table){
  const clone = table.cloneNode(true);
  clone.removeAttribute('id');
  return '<table>' + clone.innerHTML + '</table>';
}
async function copyTableToClipboard(table){
  const tsv = tableToTsv(table);
  if (navigator.clipboard && window.ClipboardItem){
    try {
      await navigator.clipboard.write([new ClipboardItem({
        'text/plain': tsv,
        'text/html': tableToHtml(table)
      })]);
      return 'copied';
    } catch(_){ /* fall through to text fallback */ }
  }
  if (navigator.clipboard && navigator.clipboard.writeText){
    await navigator.clipboard.writeText(tsv);
    return 'copied';
  }
  throw new Error('clipboard-unsupported');
}
document.querySelectorAll('.copy-btn[data-copy-table]').forEach(btn=>{
  btn.addEventListener('click', async ()=>{
    const tableId = btn.getAttribute('data-copy-table');
    const table = document.getElementById(tableId);
    const origTitle = btn.getAttribute('title') || 'Copy table';
    const origIcon = btn.innerHTML;
    btn.disabled = true;
    try {
      if (!table) throw new Error('no-table');
      await copyTableToClipboard(table);
      btn.classList.add('ok');
      btn.title = 'Copied ✓';
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>';
    } catch (err) {
      try {
        const tsv = table ? tableToTsv(table) : '';
        const a = document.createElement('a');
        a.download = tableId + '.tsv';
        a.href = URL.createObjectURL(new Blob([tsv], {type:'text/tab-separated-values'}));
        a.click();
        URL.revokeObjectURL(a.href);
        btn.classList.add('ok');
        btn.title = 'Downloaded TSV';
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>';
      } catch (_) {
        btn.classList.add('err');
        btn.title = 'Copy failed';
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
      }
    }
    btn.disabled = false;
    setTimeout(()=>{ btn.innerHTML = origIcon; btn.title = origTitle; btn.classList.remove('ok','err'); }, 1800);
  });
});
document.querySelectorAll('.copy-btn[data-copy]').forEach(btn=>{
  btn.addEventListener('click', async ()=>{
    const svgId = btn.getAttribute('data-copy');
    const origTitle = btn.getAttribute('title') || 'Copy as PNG';
    const origIcon = btn.innerHTML;
    btn.disabled = true;
    try {
      const blob = await svgToPngBlob(svgId, 2);
      if (navigator.clipboard && window.ClipboardItem){
        await navigator.clipboard.write([new ClipboardItem({'image/png': blob})]);
        btn.classList.add('ok');
        btn.title = 'Copied ✓';
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>';
      } else {
        throw new Error('clipboard-unsupported');
      }
    } catch (err) {
      try {
        const blob = await svgToPngBlob(svgId, 2);
        const a = document.createElement('a');
        a.download = svgId + '.png';
        a.href = URL.createObjectURL(blob);
        a.click();
        URL.revokeObjectURL(a.href);
        btn.classList.add('ok');
        btn.title = 'Downloaded PNG';
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>';
      } catch (_) {
        btn.classList.add('err');
        btn.title = 'Copy failed';
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
      }
    }
    btn.disabled = false;
    setTimeout(()=>{ btn.innerHTML = origIcon; btn.title = origTitle; btn.classList.remove('ok','err'); }, 1800);
  });
});
