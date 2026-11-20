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

// --- XSS regression: untrusted fragments (ingested docs, model output) ---

test('callout titles are escaped', () => {
  const html = renderMarkdown('> [!info] <img src=x onerror=alert(1)>\n> body\n');
  assert.ok(!/<img/.test(html), 'no raw tag from the callout title');
  assert.match(html, /&lt;img src=x/);
});

test('slash-separated handlers in figure/img HTML are stripped', () => {
  const html = renderMarkdown('<img/onerror=alert(2) src=x>');
  assert.ok(!/onerror/.test(html));
});

test('text inside quoted attribute values survives sanitizing', () => {
  const html = renderMarkdown('<img src="https://x.com/a/onerror=1.png" alt="an onerror=x">');
  assert.match(html, /src="https:\/\/x\.com\/a\/onerror=1\.png"/);
  assert.match(html, /alt="an onerror=x"/);
});

test('javascript: links render as inert text', () => {
  const html = renderMarkdown('[click](javascript:alert(1))');
  assert.ok(!/<a /.test(html));
  assert.match(html, /click/);
});

test('normal links and images still render', () => {
  const html = renderMarkdown('![alt](https://x.com/a.png)\n\n[ok](https://x.com)');
  assert.match(html, /<img src="https:\/\/x\.com\/a\.png"/);
  assert.match(html, /<a href="https:\/\/x\.com"/);
});

test('script: URLs in raw HTML are neutralized', () => {
  const html = renderMarkdown('<table><tr><td><a href="javascript:alert(1)">x</a></td></tr></table>');
  assert.ok(!/javascript:/i.test(html), 'no javascript: URL survives');
  assert.match(html, /href="#alert\(1\)"/);
});

// --- Obsidian-style highlight: ==text== ---

test('==text== renders as <mark>', () => {
  const html = renderMarkdown('Some ==highlighted text== here.');
  assert.match(html, /<mark>highlighted text<\/mark>/);
});

test('highlight inside inline code stays literal', () => {
  const html = renderMarkdown('`==not highlight==`');
  assert.match(html, /<code>==not highlight==<\/code>/);
  assert.ok(!/<mark>/.test(html));
});

test('bare == and ==== rules are not highlights', () => {
  assert.ok(!/<mark>/.test(renderMarkdown('a == b == c')));
  assert.ok(!/<mark>/.test(renderMarkdown('==== separator ====')));
});

// --- Super/subscripts: <sup> / <sub> in the vault's prose ---

test('<sup>/<sub> render as real tags', () => {
  const html = renderMarkdown('cFLIP<sub>L</sub> and NAD<sup>+</sup>');
  assert.match(html, /cFLIP<sub>L<\/sub>/);
  assert.match(html, /NAD<sup>\+<\/sup>/);
  assert.ok(!/&lt;sup&gt;/.test(html), 'no escaped tag left over');
  assert.ok(!/&lt;sub&gt;/.test(html));
});

test('<sup> content is escaped — no markup injection', () => {
  const html = renderMarkdown('<sup><b onclick=alert(1)>x</b></sup>');
  assert.ok(!/<b /.test(html), 'no raw tag inside sup');
  assert.match(html, /<sup>&lt;b onclick=alert\(1\)&gt;x&lt;\/b&gt;<\/sup>/);
});

test('a literal <sup> inside inline code stays literal', () => {
  const html = renderMarkdown('`<sup>`');
  assert.match(html, /<code>&lt;sup&gt;<\/code>/);
});

test('a wiki-link display text keeps its superscript', () => {
  const html = renderMarkdown('[[Calcium|Ca<sup>2+</sup>]]', { wikiHref: () => 'gh' });
  assert.match(html, /data-wiki="Calcium"/);
  assert.match(html, />Ca<sup>2\+<\/sup><\/a>/);
});

test('a wiki-link target with a superscript stays attribute-safe', () => {
  const html = renderMarkdown('[[Ca<sup>2+</sup>]]', { wikiHref: () => '' });
  assert.match(html, /data-wiki="Ca&lt;sup&gt;2\+&lt;\/sup&gt;"/);
  assert.ok(!/data-wiki="Ca<sup>/.test(html), 'raw tag in the attribute');
});

test('raw HTML tables pass through with their superscripts intact', () => {
  const html = renderMarkdown('<table><tr><td>a<sup>1</sup></td></tr></table>');
  assert.match(html, /<table>[\s\S]*<sup>1<\/sup>[\s\S]*<\/table>/);
});

test('a heading with a superscript slugs without the tags', () => {
  const html = renderMarkdown('### GABA<sub>A</sub> and NMDA modulation');
  assert.match(html, /id="gabaa-and-nmda-modulation"/);
  assert.match(html, /GABA<sub>A<\/sub>/);
});
