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
  let html = esc(src);
  // Wiki links: [[Entity]] / [[Entity|Display]] — resolved via opts.wikiHref
  html = html.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (m, target, display) => {
    const label = target.trim();
    const href = opts.wikiHref ? opts.wikiHref(label) : null;
    const text = (display || label).trim();
    return href
      ? `<a class="wikilink" href="${href}" target="_blank" rel="noopener">${text}</a>`
      : `<span class="wikilink">${text}</span>`;
  });
  // Code blocks: ```...```
  html = html.replace(/```(\w*)\n?([\s\S]*?)```/g, (m, lang, code) => `<pre><code>${code.trim()}</code></pre>`);
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
  // Bold: **...**
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // Italic: *...*
  html = html.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');
  // Blockquotes: > ...
  html = html.replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>');
  // Unordered lists: - ... or * ...
  html = html.replace(/^[\-\*] (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`);
  // Ordered lists: 1. ...
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
  // Links: [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  // Tables: simple pipe tables
  html = html.replace(/^(\|.+\|)\n(\|[-: |]+\|)\n((?:\|.+\|\n?)*)/gm, (m, header, sep, body) => {
    const hCells = header.split('|').filter(c => c.trim()).map(c => `<th>${c.trim()}</th>`).join('');
    const rows = body.trim().split('\n').map(row => {
      const cells = row.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('');
      return `<tr>${cells}</tr>`;
    }).join('');
    return `<table><thead><tr>${hCells}</tr></thead><tbody>${rows}</tbody></table>`;
  });
  // Paragraphs: double newlines
  html = html.replace(/\n\n+/g, '</p><p>');
  // Single newlines to <br>
  html = html.replace(/\n/g, '<br>');
  // Wrap in paragraph
  html = '<p>' + html + '</p>';
  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, '');
  // Merge adjacent blockquotes
  html = html.replace(/<\/blockquote>\s*<blockquote>/g, '<br>');
  // Restore extracted callouts (unwrap placeholder-only paragraphs first)
  html = html.replace(/<p>\s*\u0000CALLOUT(\d+)\u0000\s*<\/p>/g, '\u0000CALLOUT$1\u0000');
  html = html.replace(/\u0000CALLOUT(\d+)\u0000/g, (m, i) => callouts[i]);
  return html;
}
