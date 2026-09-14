/* ============================= COPY DIAGRAM AS PNG ============================= */
/* Resolve CSS custom properties (var(--ink), var(--sheet), ...) into concrete
   values on the clone, paired element-by-element with the live DOM. Serialized
   data-URL SVGs are rendered in isolation, where stylesheets and CSS variables
   don't exist — without this, copied/diagram PNGs fall back to default black
   regardless of the current light/dark mode. */

/* CJK codepoints (Han, Hiragana/Katakana, Hangul, Full-width punctuation) that
   may wrap at any character — used for caption line-breaking, since CJK text
   has no spaces. Latin/whitespace tokens break at spaces instead. */
const CJK_RE = /[\u2E80-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF\u3000-\u303F\u3040-\u30FF\u31F0-\u31FF\uAC00-\uD7AF\u3130-\u318F\uA960-\uA97F\uD7B0-\uD7FF]/;
function resolveCssVars(clone, src){
  const cloneEls = [clone].concat(Array.from(clone.querySelectorAll('*')));
  const srcEls = [src].concat(Array.from(src.querySelectorAll('*')));
  const PROPS = ['fill', 'stroke', 'stop-color', 'flood-color'];
  for (let i = 0; i < cloneEls.length; i++){
    const cel = cloneEls[i], sel = srcEls[i];
    if (!sel || sel.nodeType !== 1 || !cel.getAttribute) continue;
    let cs;
    try { cs = getComputedStyle(sel); } catch(_){ continue; }
    PROPS.forEach(p => {
      const v = cs.getPropertyValue(p);
      if (v) cel.setAttribute(p, v.trim());
    });
  }
}
function svgToPngBlob(svgId, scale, opts){
  const svg = document.getElementById(svgId);
  const clone = svg.cloneNode(true);
  resolveCssVars(clone, svg);
  clone.setAttribute('xmlns','http://www.w3.org/2000/svg');
  clone.setAttribute('xmlns:xlink','http://www.w3.org/1999/xlink');
  let w, h;
  try { w = svg.viewBox.baseVal.width; h = svg.viewBox.baseVal.height; } catch(_){}
  if (!w || !h){
    const r = svg.getBoundingClientRect();
    w = r.width || 800; h = r.height || 500;
    clone.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
  }
  const bodyH = h; // diagram height stays fixed — caption space is canvas-only
  // optional figcaption: measured against the LIVE element's computed style,
  // then rendered as wrapped text below the diagram. Wrapping is CJK-aware
  // (CJK text has no spaces) and preserves inline <strong>/<em> emphasis.
  const capEl = opts && opts.captionEl;
  let cap = null;
  if (capEl){
    const capCS = getComputedStyle(capEl);
    const font = parseFloat(capCS.fontSize) || 13;
    const lineH = parseFloat(capCS.lineHeight) || Math.round(font * 1.45);
    const padTop = parseFloat(capCS.paddingTop) || 12;
    const padBot = parseFloat(capCS.paddingBottom) || 12;
    const weight = capCS.fontWeight || '400';
    const family = capCS.fontFamily || 'sans-serif';
    const baseF = parseFloat(weight) || 400;
    const baseItalic = capCS.fontStyle === 'italic';
    const maxW = w - 32;
    const mctx = document.createElement('canvas').getContext('2d');
    function fontFor(bold, italic){
      return (bold ? 600 : 400) + ' ' + font + 'px ' + family;
    }

    // Flatten the caption into styled runs (text + bold/italic) so inline
    // emphasis survives into the exported PNG.
    const runs = [];
    (function walk(node, bold, italic){
      if (node.nodeType === 3){
        runs.push({ text: node.textContent, bold: bold, italic: italic });
        return;
      }
      if (node.nodeType !== 1 || !node.childNodes) return;
      let nb = bold, ni = italic;
      const cs = getComputedStyle(node);
      if (cs.fontWeight === 'bold' || (parseFloat(cs.fontWeight) >= 600)) nb = true;
      if (cs.fontStyle === 'italic') ni = true;
      node.childNodes.forEach(function(c){ walk(c, nb, ni); });
    })(capEl, baseF >= 600, baseItalic);

    // Tokenize into words (Latin) and single CJK characters (which may break
    // anywhere). Whitespace is preserved as its own token for measurement.
    const tokens = [];
    function pushWords(s, bold, italic){
      s.split(/(\s+)/).forEach(function(seg){
        if (seg) tokens.push({ text: seg, bold: bold, italic: italic, cjk: false });
      });
    }
    runs.forEach(function(r){
      if (!r.text) return;
      r.text.replace(/\s+/g, ' ').split(/([\u2E80-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF\u3000-\u303F\u3040-\u30FF\u31F0-\u31FF\uAC00-\uD7AF\u3130-\u318F\uA960-\uA97F\uD7B0-\uD7FF])/).forEach(function(part){
        if (!part) return;
        if (CJK_RE.test(part)){
          // each CJK run is one token; a multi-char run breaks only when it
          // overflows, but per-char tokens give natural mid-sentence wrapping
          part.split('').forEach(function(ch){ tokens.push({ text: ch, bold: r.bold, italic: r.italic, cjk: true }); });
        } else {
          pushWords(part, r.bold, r.italic);
        }
      });
    });

    // Greedy line fill: CJK breaks between characters, Latin breaks at spaces.
    const lines = [];
    let cur = [], curW = 0;
    for (let t = 0; t < tokens.length; t++){
      const tok = tokens[t];
      if (!cur.length && /^\s+$/.test(tok.text)) continue; // no leading whitespace
      mctx.font = fontFor(tok.bold, tok.italic);
      const tw = mctx.measureText(tok.text).width;
      if (curW + tw > maxW && cur.length){
        lines.push(cur); cur = []; curW = 0;
        if (/^\s+$/.test(tok.text)) continue; // drop whitespace at line start
      }
      cur.push(tok); curW += tw;
    }
    if (cur.length) lines.push(cur);

    // Clamp caption height; truncate with an ellipsis if it would overflow.
    const maxH = (opts && typeof opts.maxCaptionH === 'number') ? opts.maxCaptionH : 240;
    const maxLines = Math.max(1, Math.floor((maxH - padTop - padBot) / lineH));
    if (lines.length > maxLines){
      lines.length = maxLines;
      let last = lines[lines.length - 1];
      while (last.length && /^\s+$/.test(last[last.length - 1].text)) last.pop();
      if (!last.length){
        lines.pop();
        last = lines.length ? lines[lines.length - 1] : null;
      }
      if (last && last.length) last[last.length - 1].text += '…';
    }

    h += padTop + lines.length * lineH + padBot;
    cap = { lines: lines, font: font, family: family, fontFor: fontFor,
            lineH: lineH, padTop: padTop, padBot: padBot, color: capCS.color, maxW: maxW };
  }
  clone.setAttribute('width', w);
  clone.setAttribute('height', bodyH);
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
      else { ctx.fillStyle = '#ffffff'; ctx.fillRect(0,0,w,h); }
      ctx.drawImage(img, 0, 0, w, bodyH);
      if (cap){
        ctx.textBaseline = 'top';
        let ty = h - cap.padBot - cap.lines.length * cap.lineH;
        cap.lines.forEach(function(line){
          let tx = 16;
          line.forEach(function(tok){
            ctx.font = cap.fontFor(tok.bold, tok.italic);
            ctx.fillStyle = cap.color;
            ctx.fillText(tok.text, tx, ty);
            // Whitespace is its own token (so Latin words split at spaces and
            // CJK chars break between chars); advance by each token's width.
            tx += ctx.measureText(tok.text).width;
          });
          ty += cap.lineH;
        });
      }
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
  btn.addEventListener('click', (e)=>{
    e.stopPropagation(); // keep diagram lightbox / fullscreen handlers from firing
    const svgId = btn.getAttribute('data-copy');
    const svgEl = document.getElementById(svgId);
    // Locate the figure that wraps this diagram. Prefer <figure>, then fall
    // back to the .fig shell / .fig-canvas, so a caption is attached even if
    // the SVG is rendered into a host that isn't strictly a <figure>.
    const figEl = svgEl && (svgEl.closest('figure') || svgEl.closest('.fig') || svgEl.closest('.fig-canvas, .copy-host'));
    const caption = figEl ? figEl.querySelector('figcaption') : null;
    const pngOpts = { captionEl: caption || null };
    withFeedback(btn,
      async ()=>{
        const blob = await svgToPngBlob(svgId, 2, pngOpts);
        if (!(navigator.clipboard && window.ClipboardItem)) throw new Error('clipboard-unsupported');
        await navigator.clipboard.write([new ClipboardItem({'image/png': blob})]);
      },
      async ()=>{
        const blob = await svgToPngBlob(svgId, 2, pngOpts);
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
  btn.addEventListener('click', (e)=>{
    e.stopPropagation();
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
/* ============================= COPY CANVAS (e.g. WebGL) =============================
   Snapshots a <canvas> (2D or WebGL) as PNG, compositing the HTML overlay
   labels (.lbl / .ic-lbl / .phase / #ic-stepflag / #ic-scalebar) that sit on
   top of the 3-D stage. cv.toBlob alone only captures the WebGL buffer, so
   without this the exported PNG would lose every label. WebGL pages must
   create their renderer with preserveDrawingBuffer:true, otherwise the buffer
   is cleared before toBlob runs and the export comes out blank.
   Falls back to download. */
function pillPath(ctx, x, y, w, h){
  const r = Math.min(h / 2, 8);
  if (ctx.roundRect){ ctx.beginPath(); ctx.roundRect(x, y, w, h, r); return; }
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
function drawPill(ctx, x, y, w, h, cs){
  const bg = cs.backgroundColor;
  if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent'){
    pillPath(ctx, x, y, w, h);
    ctx.fillStyle = bg; ctx.fill();
  }
  const bw = parseFloat(cs.borderWidth) || 0;
  if (bw > 0 && cs.borderStyle !== 'none'){
    pillPath(ctx, x, y, w, h);
    ctx.strokeStyle = cs.borderColor || '#fff';
    ctx.lineWidth = bw;
    ctx.stroke();
  }
}
function drawPillText(ctx, text, x, y, w, h, cs, scale){
  const t = (text || '').trim();
  if (!t) return;
  const size = (parseFloat(cs.fontSize) || 11) * scale;
  ctx.font = (cs.fontWeight || '400') + ' ' + size + 'px ' + (cs.fontFamily || 'sans-serif');
  ctx.fillStyle = cs.color || '#fff';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(t, x + w / 2, y + h / 2, Math.max(w - 4, 10));
}
function compositeStageLabels(cv, ctx, scale){
  const stage = (cv.closest && (cv.closest('.stage') || cv.closest('#ic-stage'))) || cv.parentElement;
  if (!stage || !stage.querySelectorAll) return;
  const cvRect = cv.getBoundingClientRect();
  const nodes = stage.querySelectorAll('.lbl, .ic-lbl, .phase, #ic-stepflag, #ic-scalebar');
  nodes.forEach((el)=>{
    if (el.closest && el.closest('.copy-btn')) return;
    let cs;
    try { cs = getComputedStyle(el); } catch(_){ return; }
    if (!cs || cs.display === 'none' || cs.visibility === 'hidden') return;
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const x = (r.left - cvRect.left) * scale, y = (r.top - cvRect.top) * scale;
    const w = r.width * scale, h = r.height * scale;
    // Scale-bar card (text span + .bar meter): draw the text at the span's
    // own rect and the meter as a filled bar so both survive the export.
    const bar = el.querySelector && el.querySelector('.bar');
    if (bar){
      drawPill(ctx, x, y, w, h, cs);
      const span = el.querySelector('span');
      const rs = span ? span.getBoundingClientRect() : null;
      if (rs && rs.width){
        drawPillText(ctx, span.textContent, (rs.left - cvRect.left) * scale,
          (rs.top - cvRect.top) * scale, rs.width * scale, rs.height * scale, getComputedStyle(span), scale);
      } else {
        drawPillText(ctx, el.textContent, x, y, w, h * 0.6, cs, scale);
      }
      const rb = bar.getBoundingClientRect();
      if (rb.width){
        let bcs;
        try { bcs = getComputedStyle(bar); } catch(_){ bcs = null; }
        ctx.fillStyle = (bcs && bcs.backgroundColor) || '#fff';
        ctx.fillRect((rb.left - cvRect.left) * scale, (rb.top - cvRect.top) * scale,
          rb.width * scale, Math.max(rb.height * scale, 2));
      }
      return;
    }
    drawPill(ctx, x, y, w, h, cs);
    drawPillText(ctx, el.textContent, x, y, w, h, cs, scale);
  });
}
function canvasToBlob(cv){
  return new Promise((resolve, reject)=>{
    const scale = (cv.clientWidth ? cv.width / cv.clientWidth : 1) || 1;
    const finish = (srcCanvas)=>{
      try {
        // Composite overlay labels onto a fresh canvas so the export keeps
        // them; canvases without overlays (e.g. plain 2-D charts) just copy.
        const out = document.createElement('canvas');
        out.width = srcCanvas.width; out.height = srcCanvas.height;
        const ctx = out.getContext('2d');
        ctx.drawImage(srcCanvas, 0, 0);
        compositeStageLabels(cv, ctx, scale);
        if (out.toBlob) out.toBlob(b => b ? resolve(b) : reject(new Error('no-blob')), 'image/png');
        else reject(new Error('no-toblob'));
      } catch(err){ reject(err); }
    };
    if (cv.toBlob) cv.toBlob(b => b ? finish(cv) : reject(new Error('no-blob')), 'image/png');
    else reject(new Error('no-toblob'));
  });
}
function bindCanvasCopyBtn(btn){
  if (btn._bound) return;
  btn._bound = true;
  btn.addEventListener('click', (e)=>{
    e.stopPropagation();
    const cvId = btn.getAttribute('data-copy-canvas');
    const cv = document.getElementById(cvId);
    const pngOpts = {};
    withFeedback(btn,
      async ()=>{
        if (!cv) throw new Error('no-canvas');
        const blob = await canvasToBlob(cv);
        if (!(navigator.clipboard && window.ClipboardItem)) throw new Error('clipboard-unsupported');
        await navigator.clipboard.write([new ClipboardItem({'image/png': blob})]);
      },
      async ()=>{
        if (!cv) throw new Error('no-canvas');
        const blob = await canvasToBlob(cv);
        const a = document.createElement('a');
        a.download = (cvId || 'canvas') + '.png';
        a.href = URL.createObjectURL(blob);
        a.click();
        setTimeout(()=>URL.revokeObjectURL(a.href), 4000);
      });
  });
}
document.querySelectorAll('.copy-btn[data-copy-table]').forEach(bindTableCopyBtn);
document.querySelectorAll('.copy-btn[data-copy]').forEach(bindSvgCopyBtn);
document.querySelectorAll('.copy-btn[data-copy-canvas]').forEach(bindCanvasCopyBtn);

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
function getScrollParent(el){
  let e = el.parentElement;
  while (e && e !== document.body){
    const ox = getComputedStyle(e).overflowX;
    if (ox === 'auto' || ox === 'scroll') return e;
    e = e.parentElement;
  }
  return null;
}
function ensureTableCopyButton(table){
  if (table.closest('button, a')) return;
  const id = table.id || (table.id = uniqId('dataTable'));
  // If the table sits in a horizontally scrollable wrapper (.table-wrap etc.),
  // anchor the button OUTSIDE that wrapper so it stays fixed while rows scroll.
  const scrollParent = getScrollParent(table);
  const anchorEl = scrollParent || table;
  let host = anchorEl.parentElement && anchorEl.parentElement.classList.contains('copy-host')
    ? anchorEl.parentElement : null;
  let btn;
  if (host && host.querySelector('.copy-btn[data-copy-table]')){
    btn = host.querySelector('.copy-btn[data-copy-table]');
    btn.setAttribute('data-copy-table', id);
  } else {
    host = document.createElement('div');
    host.className = 'copy-host table-host';
    anchorEl.parentNode.insertBefore(host, anchorEl);
    // adopt any stale button left inside the old wrapper and unwrap its host
    const stale = document.querySelector('.copy-btn[data-copy-table="' + id + '"]');
    if (stale){
      const oldHost = stale.closest('.copy-host');
      stale.remove();
      if (oldHost && oldHost !== host){
        while (oldHost.firstChild) oldHost.parentNode.insertBefore(oldHost.firstChild, oldHost);
        oldHost.remove();
      }
    }
    btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.setAttribute('data-copy-table', id);
    btn.title = 'Copy table';
    btn.setAttribute('aria-label', 'Copy table to clipboard');
    btn.innerHTML = TABLE_COPY_ICON;
    host.appendChild(btn);
    host.appendChild(anchorEl);
  }
  bindTableCopyBtn(btn);
}
function runCopySweep(){
  document.querySelectorAll('svg').forEach(ensureSvgCopyButton);
  document.querySelectorAll('table').forEach(ensureTableCopyButton);
  // Canvases are opt-in via static markup (data-copy-canvas); WebGL pages must
  // use preserveDrawingBuffer:true. Just (re)bind — never auto-wrap canvases,
  // since the sweep's host-wrapping would disturb canvas sizing/layout.
  document.querySelectorAll('.copy-btn[data-copy-canvas]').forEach(bindCanvasCopyBtn);
}
if (document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', runCopySweep);
} else {
  runCopySweep();
}
/* Late-render safety net: some pages draw diagrams after DOMContentLoaded.
   Sweep again shortly after load; the sweep is idempotent.               */
window.addEventListener('load', ()=>{ runCopySweep(); setTimeout(runCopySweep, 600); });
