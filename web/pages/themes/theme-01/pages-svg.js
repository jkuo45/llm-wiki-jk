/* ============================= COPY DIAGRAM AS PNG ============================= */
function svgToPngBlob(svgId, scale){
  const svg = document.getElementById(svgId);
  const clone = svg.cloneNode(true);
  clone.setAttribute('xmlns','http://www.w3.org/2000/svg');
  clone.setAttribute('xmlns:xlink','http://www.w3.org/1999/xlink');
  let w, h;
  try { w = svg.viewBox.baseVal.width; h = svg.viewBox.baseVal.height; } catch(_){}
  if (!w || !h){
    const r = svg.getBoundingClientRect();
    w = r.width || 800; h = r.height || 500;
    clone.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
  }
  clone.setAttribute('width', w);
  clone.setAttribute('height', h);
  const svgCS = getComputedStyle(svg);
  let bg = '';
  const sBgImage = svgCS.backgroundImage && svgCS.backgroundImage !== 'none' ? svgCS.backgroundImage : '';
  const sBgColor = svgCS.backgroundColor && svgCS.backgroundColor !== 'rgba(0, 0, 0, 0)' ? svgCS.backgroundColor : '';
  if (sBgImage) bg = sBgImage;
  else if (sBgColor) bg = sBgColor;
  else {
    const card = svg.closest('.spectrum-card') || svg.closest('.copy-host') || svg.parentElement;
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
/* ============================= BUTTON FEEDBACK ============================= */
const ICON_OK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>';
const ICON_DL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>';
const ICON_ERR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
function flashBtn(btn, cls, title, icon){
  btn.classList.add(cls);
  btn.title = title;
  btn.innerHTML = icon;
  setTimeout(()=>{ btn.innerHTML = btn._origIcon; btn.title = btn._origTitle; btn.classList.remove('ok','err'); }, 1800);
  setTimeout(()=>{ btn.disabled = false; }, 50);
}
async function withFeedback(btn, action, download){
  btn._origIcon = btn._origIcon || btn.innerHTML;
  btn._origTitle = btn._origTitle || btn.getAttribute('title') || 'Copy';
  btn.disabled = true;
  try {
    await action();
    flashBtn(btn, 'ok', 'Copied ✓', ICON_OK);
  } catch (err) {
    try {
      await download();
      flashBtn(btn, 'ok', 'Downloaded', ICON_DL);
    } catch (_) {
      flashBtn(btn, 'err', 'Copy failed', ICON_ERR);
    }
  }
}
/* ============================= BINDINGS ============================= */
function bindSvgCopyBtn(btn){
  if (btn._bound) return;
  btn._bound = true;
  btn.addEventListener('click', ()=>{
    const svgId = btn.getAttribute('data-copy');
    withFeedback(btn,
      async ()=>{
        const blob = await svgToPngBlob(svgId, 2);
        if (!(navigator.clipboard && window.ClipboardItem)) throw new Error('clipboard-unsupported');
        await navigator.clipboard.write([new ClipboardItem({'image/png': blob})]);
      },
      async ()=>{
        const blob = await svgToPngBlob(svgId, 2);
        const a = document.createElement('a');
        a.download = svgId + '.png';
        a.href = URL.createObjectURL(blob);
        a.click();
        URL.revokeObjectURL(a.href);
      });
  });
}
function bindTableCopyBtn(btn){
  if (btn._bound) return;
  btn._bound = true;
  btn.addEventListener('click', ()=>{
    const tableId = btn.getAttribute('data-copy-table');
    const table = document.getElementById(tableId);
    withFeedback(btn,
      async ()=>{
        if (!table) throw new Error('no-table');
        await copyTableToClipboard(table);
      },
      async ()=>{
        if (!table) throw new Error('no-table');
        const a = document.createElement('a');
        a.download = tableId + '.tsv';
        a.href = URL.createObjectURL(new Blob([tableToTsv(table)], {type:'text/tab-separated-values'}));
        a.click();
        URL.revokeObjectURL(a.href);
      });
  });
}
document.querySelectorAll('.copy-btn[data-copy-table]').forEach(bindTableCopyBtn);
document.querySelectorAll('.copy-btn[data-copy]').forEach(bindSvgCopyBtn);

/* ============================= RUNTIME SWEEP =============================
   Ensures every diagram SVG and data table has a copy button — including
   diagrams created dynamically by page scripts (rendered after load).
   Idempotent: skips SVGs/tables that already carry a button.            */
const COPY_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
const TABLE_COPY_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 4v16"/></svg>';
let _copySweepUid = 0;

function isIconSvg(svg){
  const vb = svg.getAttribute('viewBox') || svg.getAttribute('viewbox') || '';
  if (/^0\s+0\s+2[0-9](\.\d+)?\s+2[0-9](\.\d+)?$/.test(vb.trim())) return true; // ~24px icons
  const r = svg.getBoundingClientRect();
  return (r.width && r.width < 60) || (r.height && r.height < 60);
}
function isDiagramSvg(svg){
  if (svg.closest('button, a, [data-copy]')) return false;
  return !!(svg.querySelector('title') ||
            svg.getAttribute('aria-label') ||
            svg.getAttribute('role') === 'img' ||
            (svg.getAttribute('viewBox') || '').trim());
}
function uniqId(base){
  let id = base, i = 1;
  while (document.getElementById(id)) id = base + (++i);
  return id;
}
function ensureSvgCopyButton(svg){
  if (isIconSvg(svg) || !isDiagramSvg(svg)) return;
  // already buttoned? (button referencing this svg anywhere on the page)
  let id = svg.id;
  if (id && document.querySelector('.copy-btn[data-copy="' + id + '"]')) return;
  if (svg.closest('.copy-host') && svg.closest('.copy-host').querySelector('.copy-btn[data-copy]')) {
    id = svg.id || (svg.id = uniqId('diagramSvg'));
    svg.closest('.copy-host').querySelector('.copy-btn[data-copy]').setAttribute('data-copy', id);
    bindSvgCopyBtn(document.querySelector('.copy-btn[data-copy="' + id + '"]'));
    return;
  }
  if (!id) { id = uniqId('diagramSvg'); svg.id = id; }
  const host = document.createElement('div');
  host.className = 'copy-host';
  svg.parentNode.insertBefore(host, svg);
  host.appendChild(svg);
  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.setAttribute('data-copy', id);
  btn.title = 'Copy as PNG';
  btn.setAttribute('aria-label', 'Copy diagram as PNG');
  btn.innerHTML = COPY_ICON;
  host.appendChild(btn);
  bindSvgCopyBtn(btn);
}
function ensureTableCopyButton(table){
  if (table.closest('button, a')) return;
  const id = table.id || (table.id = uniqId('dataTable'));
  if (document.querySelector('.copy-btn[data-copy-table="' + id + '"]')) return;
  const existingHost = table.parentElement && table.parentElement.classList.contains('copy-host')
    ? table.parentElement : null;
  let btn;
  if (existingHost && existingHost.querySelector('.copy-btn')){
    btn = existingHost.querySelector('.copy-btn');
    btn.setAttribute('data-copy-table', id);
    existingHost.classList.add('table-host');
  } else {
    const host = document.createElement('div');
    host.className = 'copy-host table-host';
    table.parentNode.insertBefore(host, table);
    btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.setAttribute('data-copy-table', id);
    btn.title = 'Copy table';
    btn.setAttribute('aria-label', 'Copy table to clipboard');
    btn.innerHTML = TABLE_COPY_ICON;
    host.appendChild(btn);
    host.appendChild(table);
  }
  bindTableCopyBtn(btn);
}
function runCopySweep(){
  document.querySelectorAll('svg').forEach(ensureSvgCopyButton);
  document.querySelectorAll('table').forEach(ensureTableCopyButton);
}
if (document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', runCopySweep);
} else {
  runCopySweep();
}
/* Late-render safety net: some pages draw diagrams after DOMContentLoaded.
   Sweep again shortly after load; the sweep is idempotent.               */
window.addEventListener('load', ()=>{ runCopySweep(); setTimeout(runCopySweep, 600); });
