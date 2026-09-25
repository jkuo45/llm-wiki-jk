// Tooltip lookups key on data-wiki (the link TARGET), so a display-text link
// like [[Retinoblastoma Protein|Rb]] must not degrade to the visible "Rb".
// Run: node components/markdown.test.mjs
import assert from 'node:assert/strict';
import test from 'node:test';

import { renderMarkdown, unescapeHtml } from './markdown.js';

test('wikilink keeps the target in data-wiki when a display text is given', () => {
  const html = renderMarkdown('[[Retinoblastoma Protein|Rb]]', { wikiHref: () => 'gh' });
  assert.match(html, /data-wiki="Retinoblastoma Protein"/);
  assert.match(html, />Rb<\/a>/);
});

test('wikilink without a resolvable note still exposes the target', () => {
  const html = renderMarkdown('[[NAD+]]', { wikiHref: () => '' });
  assert.match(html, /<span class="wikilink" data-wiki="NAD\+">NAD\+<\/span>/);
});

test('a target containing a quote cannot break out of the attribute', () => {
  const html = renderMarkdown('[[a"b]]', { wikiHref: () => '' });
  assert.match(html, /data-wiki="a&quot;b"/);
  assert.ok(!/data-wiki="a"b"/.test(html));
});

test('unescapeHtml reverses esc() on a data-wiki target', () => {
  assert.equal(unescapeHtml('Merck &amp; Co. Inc'), 'Merck & Co. Inc');
  assert.equal(unescapeHtml('a&quot;b&#39;c&lt;d&gt;e'), 'a"b\'c<d>e');
});

// The prompt panel promotes .wikilink spans to .prompt-entity-link. That pass
// used to run a second [[...]] regex, which never matched because renderMarkdown
// had already consumed the syntax — so every prompt wiki link stayed inert.
// Mirrors promoteWikiSpans() in analysis.js against a stand-in node label map.
function promoteWikiSpans(html, byLabel) {
  return html.replace(/<span class="wikilink" data-wiki="([^"]*)">([\s\S]*?)<\/span>/g,
    (m, key, text) => {
      const k = byLabel.has(unescapeHtml(key)) ? unescapeHtml(key) : null;
      return k ? `<span class="prompt-entity-link" data-wiki="${k}">${text}</span>` : m;
    });
}

test('rendered wikilinks become prompt entity links when the entity resolves', () => {
  const byLabel = new Map([['Retinoblastoma Protein', 'd'], ['FOXO3a', 'd'], ['foxo3a', 'd']]);
  const html = promoteWikiSpans(renderMarkdown('[[FOXO3a]] and [[Retinoblastoma Protein|Rb]] and [[Nope]]'),
    byLabel);
  assert.match(html, /<span class="prompt-entity-link" data-wiki="FOXO3a">FOXO3a<\/span>/);
  assert.match(html, /<span class="prompt-entity-link" data-wiki="Retinoblastoma Protein">Rb<\/span>/);
  assert.match(html, /<span class="wikilink" data-wiki="Nope">Nope<\/span>/); // inert
});
