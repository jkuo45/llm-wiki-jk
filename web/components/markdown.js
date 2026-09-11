// Pure string/HTML helpers shared across modules. No app state.

export function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

export function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Build a regex that matches the label only on word boundaries, so a short or
// common token (e.g. "A", "DNA") does not false-positive inside larger words.
export function labelBoundaryRegex(label) {
  const e = escapeRegex(label.replace(/\s+/g, '\\s+'));
  return new RegExp('(^|[^a-z0-9])\\s*' + e + '\\s*([^a-z0-9]|$)', 'i');
}

export function wikiExcerpt(text) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  if (!clean) return '';
  const max = 320;
  return clean.length > max ? clean.slice(0, max) + '…' : clean;
}

// Toolbar skeleton shared by renderMarkdown() (string context) and
// upgradeLegacyBlocks() (DOM context) so every diagram gets the same
// per-diagram controls: zoom out/in/reset, copy source, fullscreen.
function mermaidToolbarHTML() {
  return `<div class="mermaid-toolbar" role="toolbar" aria-label="Diagram controls">` +
    `<button type="button" data-m-action="zoom-out" title="Zoom out">−</button>` +
    `<span class="mermaid-zoom-label" data-m-zoom-label>100%</span>` +
    `<button type="button" data-m-action="zoom-in" title="Zoom in">+</button>` +
    `<button type="button" data-m-action="zoom-reset" title="Reset zoom">Reset</button>` +
    `<button type="button" data-m-action="copy" title="Copy diagram as image">Copy</button>` +
    `<button type="button" data-m-action="fullscreen" title="Fullscreen diagram">⛶ Fullscreen</button>` +
    `</div>`;
}

// Minimal, dependency-free markdown renderer for wiki modal bodies.
// opts.wikiHref(label) may resolve [[Entity]] links to a URL; when it
// returns a falsy value the link renders as an inert .wikilink span.
export function renderMarkdown(text, opts = {}) {
  const slug = (s) => s.toLowerCase().trim().replace(/[^a-z0-9\u4e00-\u9fff]+/g, '-').replace(/^-+|-+$/g, '');
  // Obsidian callouts are extracted from the RAW text up front into
  // placeholders so their inner content isn't double-escaped by the main
  // escape-then-replace pipeline below.
  const raw = String(text || '');
  const callouts = [];
  const src = raw.replace(/^> \[!(\w+)\][ \t]*([^\n]*)\n((?:>[^\n]*\n?)*)/gm, (m, type, title, body) => {
    const inner = renderMarkdown(body.replace(/^> ?/gm, ''), opts);
    const label = title.trim() || type.charAt(0).toUpperCase() + type.slice(1);
    callouts.push(`<div class="callout callout-${type.toLowerCase()}"><div class="callout-title">${label}</div>${inner}</div>`);
    return `\u0000CALLOUT${callouts.length - 1}\u0000`;
  });
  // Fenced code blocks are extracted up front into placeholders so their real
  // newlines survive the \n → <br> pipeline below (mermaid consumers read
  // textContent and need actual line breaks, not <br> elements), and so their
  // content is fully protected from inline-formatting replacements.
  const codeBlocks = [];
  const fenced = src.replace(/```(\w*)\n?([\s\S]*?)```/g, (m, lang, code) => {
    codeBlocks.push({ lang, code: code.trim() });
    return `\u0000CODE${codeBlocks.length - 1}\u0000`;
  });
  let html = esc(fenced);
  // Wiki links: [[Entity]] / [[Entity|Display]] — resolved via opts.wikiHref
  html = html.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (m, target, display) => {
    const label = target.trim();
    const href = opts.wikiHref ? opts.wikiHref(label) : null;
    const text = (display || label).trim();
    return href
      ? `<a class="wikilink" href="${href}" target="_blank" rel="noopener">${text}</a>`
      : `<span class="wikilink">${text}</span>`;
  });
  // Inline code: `...`
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Headers: #### ... (must come before bold/italic); slugged ids so the
  // reader's section tracking / deep links work on rendered markdown.
  html = html.replace(/^#### (.+)$/gm, (m, t) => `<h4 id="${slug(t)}">${t}</h4>`);
  html = html.replace(/^### (.+)$/gm, (m, t) => `<h3 id="${slug(t)}">${t}</h3>`);
  html = html.replace(/^## (.+)$/gm, (m, t) => `<h2 id="${slug(t)}">${t}</h2>`);
  html = html.replace(/^# (.+)$/gm, (m, t) => `<h1 id="${slug(t)}">${t}</h1>`);
  // Horizontal rules
  html = html.replace(/^---+$/gm, '<hr>');
  // Headings already act as visual dividers — drop <hr> that directly abuts a
  // heading (either side) so we don't render double dividers. Also collapse
  // consecutive <hr>s into one.
  html = html.replace(/<hr>\s*(\n)?(?=<h[1-4][ >])/g, '');
  html = html.replace(/(<\/h[1-4]>)\s*<hr>(\s*\n?)/g, '$1\n');
  html = html.replace(/<hr>(\s*<hr>)+/g, '<hr>\n');
  // Bold: **...**
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // Italic: *...*
  html = html.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');
  // Blockquotes: > ...
  html = html.replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>');
  // Lists (unordered `- ` / `* `, ordered `1. `) — capture indentation depth
  // so nested bullets render as nested lists under their parent topic/heading.
  const listItems = [];
  html = html.replace(/^( *)([-*]|\d+\.) (.+)$/gm, (m, ind, marker, t) => {
    const depth = Math.min(Math.floor(ind.replace(/\t/g, '  ').length / 2), 6);
    const kind = marker === '-' || marker === '*' ? 'ul' : 'ol';
    listItems.push({ kind, depth, text: t });
    return `\u0000LI${listItems.length - 1}\u0000`;
  });
  // Rebuild each run of adjacent list-item placeholders as a nested <ul>/<ol>.
  // The tree is built from indentation depth alone so a nested list of a
  // different kind (e.g. `1.` containing `-`) stays inside its parent <li>;
  // sibling runs of the same kind share one list element for valid HTML.
  html = html.replace(/(?:\u0000LI\d+\u0000\n?)+/g, (block) => {
    const run = [];
    block.replace(/\u0000LI(\d+)\u0000/g, (m, i) => { run.push(listItems[+i]); return m; });
    if (!run.length) return block;
    const root = { depth: -1, children: [] };
    const stack = [root];
    for (const it of run) {
      while (stack[stack.length - 1].depth >= it.depth) stack.pop();
      const node = { ...it, children: [] };
      stack[stack.length - 1].children.push(node);
      stack.push(node);
    }
    const renderNodes = (nodes) => {
      let out = '', i = 0;
      while (i < nodes.length) {
        const tag = nodes[i].kind;
        let j = i + 1;
        while (j < nodes.length && nodes[j].kind === tag) j++;
        const group = nodes.slice(i, j);
        out += `<${tag}>` + group.map((n) => {
          const inner = n.children.length ? renderNodes(n.children) : '';
          return `<li>${n.text}${inner}</li>`;
        }).join('') + `</${tag}>`;
        i = j;
      }
      return out;
    };
    return renderNodes(root.children);
  });
  // Links: [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  // Tables: simple pipe tables — wrapped in .tbl-wrap so wide tables scroll
  // horizontally, and tagged .md-table for vertical-expansion CSS.  A
  // <colgroup> pins column 1 to a compact width (170px) so long entity /
  // feature labels wrap vertically instead of stretching the table; the
  // remaining columns share the rest.  Honored only with table-layout:fixed.
  html = html.replace(/^(\|.+\|)\n(\|[-: |]+\|)\n((?:\|.+\|\n?)*)/gm, (m, header, sep, body) => {
    const hCells = header.split('|').filter(c => c.trim()).map(c => `<th>${c.trim()}</th>`).join('');
    const rows = body.trim().split('\n').map(row => {
      const cells = row.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('');
      return `<tr>${cells}</tr>`;
    }).join('');
    const nCols = header.split('|').filter(c => c.trim()).length;
    // Column 1 capped at 170px; every other column capped at 350px so prose
    // columns wrap vertically instead of stretching the table.  (Field lengths
    // are honured by table-layout:fixed; a table wider than the container
    // scrolls horizontally inside .tbl-wrap.)
    const colgroup = `<colgroup><col style="width:170px">${'<col style="width:350px">'.repeat(Math.max(0, nCols - 1))}</colgroup>`;
    return `<div class="tbl-wrap"><table class="md-table">${colgroup}<thead><tr>${hCells}</tr></thead><tbody>${rows}</tbody></table></div>`;
  });
  // Paragraphs: double newlines
  html = html.replace(/\n\n+/g, '</p><p>');
  // Single newlines to <br>
  html = html.replace(/\n/g, '<br>');
  // Wrap in paragraph
  html = '<p>' + html + '</p>';
  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, '');
  // Drop trailing line breaks at the end of paragraphs
  html = html.replace(/(<br>)+<\/p>/g, '</p>');
  // Merge adjacent blockquotes
  html = html.replace(/<\/blockquote>\s*<blockquote>/g, '<br>');
  // Tidy stray line breaks around block-level lists
  html = html.replace(/(<br>)+(?=<ul>|<ol>)/g, '');
  html = html.replace(/(<\/(?:ul|ol)>)(<br>)+/g, '$1');
  // Strip redundant <br> around all block-level elements (headings, hr,
  // lists, callouts, quotes...) — block margins provide the spacing.
  const BLOCK = '(?:h[1-4]|ul|ol|table|pre|blockquote|div)';
  html = html.replace(new RegExp(`(<br>)+(?=<${BLOCK}[ >]|<hr>)`, 'g'), '');
  html = html.replace(new RegExp(`(</${BLOCK}>|<hr>)((<br>)+)`, 'g'), '$1');
  // Restore extracted code blocks (unwrap placeholder-only paragraphs first).
  // Content is escaped here — once — and real newlines are preserved.
  // ```mermaid fences get a figure skeleton (toolbar + zoomable canvas +
  // code fallback) so enhanceMermaid() can render SVG in place and wire
  // per-diagram zoom in/out/reset + fullscreen. The raw source stays in
  // <code> so consumers read it back via textContent with real newlines.
  html = html.replace(/<p>\s*\u0000CODE(\d+)\u0000\s*<\/p>/g, '\u0000CODE$1\u0000');
  html = html.replace(/\u0000CODE(\d+)\u0000/g, (m, i) => {
    const { lang, code } = codeBlocks[i];
    const cls = lang ? ` class="language-${lang.toLowerCase()}"` : '';
    if ((lang || '').toLowerCase() === 'mermaid') {
      return `<figure class="mermaid-figure" data-mermaid-pending>` +
        mermaidToolbarHTML() +
        `<div class="mermaid-canvas"><div class="mermaid-zoom"><pre><code${cls}>${esc(code)}</code></pre></div></div>` +
        `</figure>`;
    }
    return `<pre><code${cls}>${esc(code)}</code></pre>`;
  });
  // Restore extracted callouts (unwrap placeholder-only paragraphs first)
  html = html.replace(/<p>\s*\u0000CALLOUT(\d+)\u0000\s*<\/p>/g, '\u0000CALLOUT$1\u0000');
  html = html.replace(/\u0000CALLOUT(\d+)\u0000/g, (m, i) => callouts[i]);
  return html;
}

// ------------------------------------------------------------
// Mermaid enhancement: SVG render + per-diagram zoom/fullscreen.
// ------------------------------------------------------------
// renderMarkdown() above emits each ```mermaid fence as
// <figure class="mermaid-figure"> with a toolbar skeleton and the raw
// source in <code class="language-mermaid">. Call enhanceMermaid(root)
// after inserting the HTML — it lazily imports mermaid from CDN (only
// when a diagram exists), swaps the fallback <pre> for SVG, and wires
// each figure's zoom in/out/reset + fullscreen buttons. Legacy markup
// (<pre><code class="language-mermaid"> without a figure) is upgraded
// to the same figure shape first, so older callers keep working.
// Fullscreen prefers the Fullscreen API with a fixed-overlay fallback
// class (.is-fullscreen) for iframes without fullscreen permission.
export const MERMAID_CDN =
  'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

const MERMAID_CSS = `
.mermaid-figure{margin:14px 0;padding:0;background:var(--card,#fff);border:1px solid var(--line, #e2e2e2);border-radius:8px;overflow:hidden}
.mermaid-toolbar{display:flex;align-items:center;gap:6px;padding:6px 10px;border-bottom:1px solid var(--line,#e2e2e2);background:color-mix(in srgb, var(--card,#fff) 80%, transparent)}
.mermaid-toolbar button{font-size:12px;line-height:1;padding:4px 10px;border:1px solid var(--line2,#ccc);border-radius:6px;background:var(--bg,#fff);color:var(--text,#111);cursor:pointer}
.mermaid-toolbar button:hover{border-color:var(--teal,#0e9b8b);color:var(--teal,#0e9b8b)}
.mermaid-zoom-label{font-size:12px;min-width:44px;text-align:center;color:var(--dim,#666);font-variant-numeric:tabular-nums}
.mermaid-canvas{overflow:auto;max-height:560px;padding:12px;cursor:grab;text-align:center}
.mermaid-canvas:active{cursor:grabbing}
.mermaid-zoom{transform-origin:top center;display:inline-block;min-width:100%;text-align:center}
.mermaid-zoom svg{max-width:none;height:auto}
.mermaid-figure.is-fullscreen{position:fixed;inset:0;z-index:9999;border-radius:0;display:flex;flex-direction:column;background:var(--bg,#fff)}
.mermaid-figure.is-fullscreen .mermaid-canvas{flex:1;max-height:none}
.mermaid-figure:fullscreen{display:flex;flex-direction:column}
.mermaid-figure:fullscreen .mermaid-canvas{flex:1;max-height:none}
`;

let mermaidLib = null;
let mermaidSeq = 0;
let mermaidStyleDone = false;
let mermaidThemeListenerDone = false;

function ensureMermaidStyles() {
  if (mermaidStyleDone) return;
  if (typeof document === 'undefined') return;
  if (document.querySelector('style[data-mermaid-controls]')) {
    mermaidStyleDone = true;
    return;
  }
  const el = document.createElement('style');
  el.setAttribute('data-mermaid-controls', '');
  el.textContent = MERMAID_CSS;
  document.head.appendChild(el);
  mermaidStyleDone = true;
}

async function getMermaid() {
  if (mermaidLib) return mermaidLib;
  const mod = await import(MERMAID_CDN);
  mermaidLib = mod.default;
  return mermaidLib;
}

function activeMermaidTheme() {
  try {
    return localStorage.getItem('llm-wiki-theme') === 'dark' ? 'dark' : 'neutral';
  } catch { return 'neutral'; }
}

async function renderMermaidSource(source) {
  return queuedMermaid(async () => {
    const mermaid = await getMermaid();
    mermaid.initialize({
      startOnLoad: false,
      theme: activeMermaidTheme(),
      securityLevel: 'loose',
      flowchart: { htmlLabels: true, useMaxWidth: true },
    });
    const id = 'mmd-' + (++mermaidSeq) + '-' + Date.now().toString(36);
    try {
      const { svg } = await mermaid.render(id, source);
      return svg;
    } catch (err) {
      if (typeof document !== 'undefined') document.getElementById('d' + id)?.remove();
      throw err;
    }
  });
}

// Serialize renders through a queue because mermaid.initialize() mutates
// global config — concurrent renders (theme switch + diagram enhance) must
// not interleave initialize/render pairs.
let mermaidQueue = Promise.resolve();
function queuedMermaid(fn) {
  const run = mermaidQueue.then(fn, fn);
  mermaidQueue = run.catch(() => {});
  return run;
}

// Split a mermaid HTML label (a foreignObject's content) into visual lines
// on <br> boundaries, with a screen rect + computed style per line, so the
// PNG-export path below can redraw labels with canvas text.
function mermaidLabelLines(fo) {
  const doc = fo.ownerDocument;
  const groups = [];
  let cur = [];
  const flush = () => { if (cur.length) { groups.push(cur); cur = []; } };
  const walk = (node) => {
    if (node.nodeType === 3) { if (node.textContent) cur.push(node); return; }
    if (node.nodeType !== 1) return;
    if (node.tagName === 'BR') { flush(); return; }
    let display = '';
    try { display = getComputedStyle(node).display; } catch { /* ignore */ }
    if (display === 'none') return;
    Array.from(node.childNodes).forEach(walk);
  };
  Array.from(fo.childNodes).forEach(walk);
  flush();
  return groups.map((nodes) => {
    const text = nodes.map((n) => n.textContent).join('').replace(/\s+/g, ' ');
    if (!text.trim()) return null;
    const range = doc.createRange();
    range.setStartBefore(nodes[0]);
    range.setEndAfter(nodes[nodes.length - 1]);
    const rects = Array.from(range.getClientRects());
    if (!rects.length) return null;
    let L = Infinity, T = Infinity, R = -Infinity, B = -Infinity;
    rects.forEach((q) => {
      if (!q.width && !q.height) return;
      L = Math.min(L, q.left); T = Math.min(T, q.top);
      R = Math.max(R, q.right); B = Math.max(B, q.bottom);
    });
    if (L === Infinity) return null;
    const host = nodes.find((n) => n.parentElement)?.parentElement || fo;
    return { text, left: L, top: T, right: R, bottom: B, style: getComputedStyle(host) };
  }).filter(Boolean);
}

function applyZoom(fig) {
  const zoom = fig.querySelector('.mermaid-zoom');
  const label = fig.querySelector('[data-m-zoom-label]');
  const z = parseFloat(fig.dataset.zoom || '1') || 1;
  if (zoom) zoom.style.transform = z === 1 ? '' : `scale(${z})`;
  if (label) label.textContent = Math.round(z * 100) + '%';
}

function setZoom(fig, z) {
  fig.dataset.zoom = String(Math.min(3, Math.max(0.4, Math.round(z * 100) / 100)));
  applyZoom(fig);
}

function toggleFullscreen(fig) {
  if (typeof document === 'undefined') return;
  const doc = document;
  if (doc.fullscreenElement === fig) {
    doc.exitFullscreen?.();
    return;
  }
  if (fig.classList.contains('is-fullscreen')) {
    fig.classList.remove('is-fullscreen');
    return;
  }
  // Fullscreen API may be blocked inside iframes; fall back to fixed overlay.
  try {
    const p = fig.requestFullscreen?.();
    if (p && typeof p.catch === 'function') {
      p.catch(() => fig.classList.add('is-fullscreen'));
    } else if (!fig.requestFullscreen) {
      fig.classList.add('is-fullscreen');
    }
  } catch {
    fig.classList.add('is-fullscreen');
  }
}

function loadSVGImage(text) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(new Blob([text], { type: 'image/svg+xml;charset=utf-8' }));
    const img = new Image();
    img.onload = () => { URL.revokeObjectURL(url); resolve(img); };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('SVG image decode failed')); };
    img.src = url;
  });
}

function canvasBlob(canvas) {
  return new Promise((resolve, reject) => {
    try {
      canvas.toBlob((b) => b ? resolve(b) : reject(new Error('toBlob failed')), 'image/png');
    } catch (err) { reject(err); }
  });
}

function downloadBlob(blob, name) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}

// Copy the diagram as a PNG image.
//
// NOTE: the on-screen SVG cannot be rasterized directly — mermaid renders
// labels as HTML inside <foreignObject>, and drawing such an SVG to canvas
// taints it ("Tainted canvases may not be exported", verified in Chrome),
// so toBlob always throws. Instead the export composites two layers: the
// SVG with labels stripped (rasterizes untainted) plus each HTML label line
// redrawn with canvas text at the same position, font, size, color, and
// alignment. Fallback is a vector SVG download, which renders faithfully
// anywhere (only canvas export is restricted).
async function copyMermaidDiagram(fig, btn) {
  const flash = (msg) => {
    if (!btn) return;
    const orig = btn.textContent;
    btn.textContent = msg;
    btn.disabled = true;
    setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 1500);
  };
  const fail = (err) => {
    console.warn('mermaid diagram copy failed', err);
    flash('Copy failed');
  };
  const code = fig.querySelector('code.language-mermaid');
  const source = (fig.dataset.mermaidSource || code?.textContent || '').trim();
  const svg = fig.querySelector('.mermaid-zoom svg');
  if (!svg) {
    // Never rendered (CDN blocked/slow): offer the faithful SVG file instead.
    if (!source) { fail(new Error('no diagram source')); return; }
    try {
      downloadBlob(
        new Blob([await renderMermaidSource(source)], { type: 'image/svg+xml;charset=utf-8' }),
        'diagram.svg');
      flash('Saved SVG ✓');
    } catch (err) { fail(err); }
    return;
  }
  try {
    if (typeof ClipboardItem === 'undefined') throw new Error('no ClipboardItem');
    const vb = svg.viewBox?.baseVal;
    const w = Math.round(vb?.width || 0);
    const h = Math.round(vb?.height || 0);
    if (!w || !h) throw new Error('diagram has no viewport');
    // Base layer: everything except the HTML labels.
    const base = svg.cloneNode(true);
    base.querySelectorAll('foreignObject').forEach((n) => n.remove());
    base.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    base.setAttribute('width', w);
    base.setAttribute('height', h);
    const scale = 2;
    const cw = w * scale;
    const ch = h * scale;
    const canvas = document.createElement('canvas');
    canvas.width = cw;
    canvas.height = ch;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff'; // opaque so pasted diagrams stay legible anywhere
    ctx.fillRect(0, 0, cw, ch);
    ctx.drawImage(
      await loadSVGImage(new XMLSerializer().serializeToString(base)), 0, 0, cw, ch);
    // Label layer: each HTML label line redrawn with canvas text.
    // Client rects include the figure's zoom transform and the svg element's
    // own sizing; both are divided back out to reach SVG units, then scaled
    // to canvas pixels. Computed font px == SVG units inside foreignObject.
    const svgRect = svg.getBoundingClientRect();
    const zoom = parseFloat(fig.dataset.zoom || '1') || 1;
    const unit = (svgRect.width / zoom) / w; // client px per SVG unit
    const X = (clientX) => (((clientX - svgRect.left) / zoom / unit) * scale);
    const Y = (clientY) => (((clientY - svgRect.top) / zoom / unit) * scale);
    const S = (clientPx) => ((clientPx / zoom / unit) * scale);
    svg.querySelectorAll('foreignObject').forEach((fo) => {
      mermaidLabelLines(fo).forEach((line) => {
        const size = parseFloat(line.style.fontSize) || 12;
        ctx.font = `${line.style.fontStyle} ${line.style.fontWeight} ${size * scale}px ${line.style.fontFamily}`;
        ctx.fillStyle = line.style.color || '#333';
        const align = line.style.textAlign;
        ctx.textAlign = align === 'center' ? 'center'
          : align === 'right' || align === 'end' ? 'right' : 'left';
        ctx.textBaseline = 'alphabetic';
        const m = ctx.measureText(line.text);
        const ascent = m.actualBoundingBoxAscent || size * scale * 0.8;
        const descent = m.actualBoundingBoxDescent || size * scale * 0.2;
        const lead = Math.max(0, S(line.bottom - line.top) - (ascent + descent));
        const bx = ctx.textAlign === 'center' ? X((line.left + line.right) / 2)
          : ctx.textAlign === 'right' ? X(line.right) : X(line.left);
        ctx.fillText(line.text, bx, Y(line.bottom) - descent - lead / 2);
      });
    });
    await navigator.clipboard.write([new ClipboardItem({ 'image/png': await canvasBlob(canvas) })]);
    flash('Copied ✓');
  } catch (err) {
    console.warn('mermaid PNG copy failed; falling back to SVG download', err);
    try {
      const live = svg.cloneNode(true);
      live.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      downloadBlob(
        new Blob([new XMLSerializer().serializeToString(live)], { type: 'image/svg+xml;charset=utf-8' }),
        'diagram.svg');
      flash('Saved SVG ✓');
    } catch (err2) { fail(err2); }
  }
}

function wireFigure(fig) {
  if (fig.dataset.mermaidWired) return;
  fig.dataset.mermaidWired = '1';
  if (!fig.dataset.zoom) fig.dataset.zoom = '1';
  const toolbar = fig.querySelector('.mermaid-toolbar');
  toolbar?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-m-action]');
    if (!btn) return;
    const z = parseFloat(fig.dataset.zoom || '1') || 1;
    const action = btn.dataset.mAction;
    if (action === 'zoom-in') setZoom(fig, z + 0.2);
    else if (action === 'zoom-out') setZoom(fig, z - 0.2);
    else if (action === 'zoom-reset') setZoom(fig, 1);
    else if (action === 'copy') copyMermaidDiagram(fig, btn);
    else if (action === 'fullscreen') toggleFullscreen(fig);
  });
  // Ctrl/Cmd + wheel zooms; plain drag pans the scrollable canvas.
  const canvas = fig.querySelector('.mermaid-canvas');
  canvas?.addEventListener('wheel', (e) => {
    if (!e.ctrlKey && !e.metaKey) return;
    e.preventDefault();
    const z = parseFloat(fig.dataset.zoom || '1') || 1;
    setZoom(fig, z + (e.deltaY < 0 ? 0.1 : -0.1));
  }, { passive: false });
  if (canvas) {
    let down = false, sx = 0, sy = 0, sl = 0, st = 0;
    canvas.addEventListener('pointerdown', (e) => {
      down = true; sx = e.clientX; sy = e.clientY; sl = canvas.scrollLeft; st = canvas.scrollTop;
    });
    window.addEventListener('pointermove', (e) => {
      if (!down) return;
      canvas.scrollLeft = sl - (e.clientX - sx);
      canvas.scrollTop = st - (e.clientY - sy);
    });
    window.addEventListener('pointerup', () => { down = false; });
  }
  applyZoom(fig);
}

function upgradeLegacyBlocks(root) {
  // <pre><code class="language-mermaid"> not yet wrapped in a figure —
  // rebuild the figure skeleton around it so all diagrams share controls.
  root.querySelectorAll('pre > code.language-mermaid').forEach((code) => {
    if (code.closest('.mermaid-figure')) return;
    const pre = code.closest('pre');
    if (!pre) return;
    const parent = pre.parentNode;
    const next = pre.nextSibling;
    const fig = document.createElement('figure');
    fig.className = 'mermaid-figure';
    fig.setAttribute('data-mermaid-pending', '');
    fig.innerHTML =
      mermaidToolbarHTML() +
      `<div class="mermaid-canvas"><div class="mermaid-zoom"></div></div>`;
    fig.querySelector('.mermaid-zoom').appendChild(pre);
    parent.insertBefore(fig, next);
  });
}

export async function enhanceMermaid(root = document, opts = {}) {
  if (!root || typeof root.querySelectorAll !== 'function') return 0;
  ensureMermaidStyles();
  upgradeLegacyBlocks(root);
  const figs = Array.from(root.querySelectorAll('.mermaid-figure'));
  if (!figs.length) return 0;
  figs.forEach(wireFigure);
  if (!mermaidThemeListenerDone && typeof document !== 'undefined') {
    mermaidThemeListenerDone = true;
    document.addEventListener('wiki-theme', () => {
      document.querySelectorAll('.mermaid-figure[data-mermaid-source]').forEach(async (fig) => {
        try {
          const svg = await renderMermaidSource(fig.dataset.mermaidSource);
          const zoom = fig.querySelector('.mermaid-zoom');
          if (zoom) zoom.innerHTML = svg;
          applyZoom(fig);
        } catch { /* keep previous rendering on failure */ }
      });
    });
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        document.querySelectorAll('.mermaid-figure.is-fullscreen').forEach((f) => {
          if (f !== document.fullscreenElement) f.classList.remove('is-fullscreen');
        });
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.mermaid-figure.is-fullscreen')
          .forEach((f) => f.classList.remove('is-fullscreen'));
      }
    });
  }
  const cdn = opts.cdn || MERMAID_CDN;
  if (cdn !== MERMAID_CDN) { /* reserved for self-hosted mermaid */ }
  let done = 0;
  for (const fig of figs) {
    if (fig.dataset.mermaidDone) continue;
    const code = fig.querySelector('code.language-mermaid');
    const source = (fig.dataset.mermaidSource || code?.textContent || '').trim();
    if (!source) continue;
    try {
      const svg = await renderMermaidSource(source);
      fig.dataset.mermaidSource = source;
      fig.removeAttribute('data-mermaid-pending');
      const zoom = fig.querySelector('.mermaid-zoom');
      if (zoom) zoom.innerHTML = svg;
      applyZoom(fig);
      fig.dataset.mermaidDone = '1';
      done++;
    } catch (err) {
      console.warn('mermaid render failed; keeping code block', err);
    }
  }
  return done;
}
