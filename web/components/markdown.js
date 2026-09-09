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
  html = html.replace(/<p>\s*\u0000CODE(\d+)\u0000\s*<\/p>/g, '\u0000CODE$1\u0000');
  html = html.replace(/\u0000CODE(\d+)\u0000/g, (m, i) => {
    const { lang, code } = codeBlocks[i];
    return `<pre><code${lang ? ` class="language-${lang.toLowerCase()}"` : ''}>${esc(code)}</code></pre>`;
  });
  // Restore extracted callouts (unwrap placeholder-only paragraphs first)
  html = html.replace(/<p>\s*\u0000CALLOUT(\d+)\u0000\s*<\/p>/g, '\u0000CALLOUT$1\u0000');
  html = html.replace(/\u0000CALLOUT(\d+)\u0000/g, (m, i) => callouts[i]);
  return html;
}
