// Runnable check for renderMarkdown image support.
// Usage: node web/components/markdown.test.mjs
import { renderMarkdown } from './markdown.js';

const cases = [
  ['md image',
    'Hello ![fruit](https://x.example/a.png) world',
    (o) => o.includes('<img src="https://x.example/a.png" alt="fruit" loading="lazy">') && !o.includes('![')],
  ['md image with title (post-esc &quot;)',
    '![alt](https://x.example/d.png "Title")',
    (o) => o.includes('src="https://x.example/d.png"') && !o.includes('Title')],
  ['raw img strips handlers',
    'para\n\n<img src="https://x.example/b.png" alt="B" width="480" onclick="evil()">\n\nnext',
    (o) => o.includes('<img src="https://x.example/b.png" alt="B" width="480">') && !o.includes('onclick')],
  ['onerror stripped',
    '<img src=x onerror="alert(1)">',
    (o) => !o.includes('onerror')],
  ['figure + figcaption passthrough',
    '<figure>\n<img src="https://x.example/c.png" alt="C">\n<figcaption>Caption</figcaption>\n</figure>',
    (o) => o.includes('<figure>') && o.includes('<figcaption>Caption</figcaption>') && !o.includes('&lt;figure')],
  ['img inside code fence stays escaped',
    '```\n<img src="nope.png">\n```',
    (o) => o.includes('&lt;img') && !o.includes('<img src="nope.png">')],
  ['links + wikilinks intact',
    'see [docs](https://example.com) and [[NAD+]]',
    (o) => o.includes('<a href="https://example.com" target="_blank" rel="noopener">docs</a>') && o.includes('wikilink')],
];

let fail = 0;
for (const [name, input, check] of cases) {
  const ok = check(renderMarkdown(input));
  console.log((ok ? 'PASS' : 'FAIL') + ' ' + name);
  if (!ok) fail++;
}
process.exit(fail ? 1 : 0);
