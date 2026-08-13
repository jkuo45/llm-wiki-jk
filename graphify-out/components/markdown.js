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
export function renderMarkdown(text) {
  let html = esc(String(text || ''));
  // Code blocks: ```...```
  html = html.replace(/```(\w*)\n?([\s\S]*?)```/g, (m, lang, code) => `<pre><code>${code.trim()}</code></pre>`);
  // Inline code: `...`
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Headers: ### ... (must come before bold/italic)
  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
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
  return html;
}
