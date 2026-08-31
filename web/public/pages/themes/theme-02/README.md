# theme-02 — self-contained paper-&-ink editorial theme

Used by the standalone article pages:

- `web/pages/index.html`
- `node-analysis-examples-biology.html` (+ `_zh-TW`)
- `adrenochrome-protocol-node-network-analysis.html` (+ `_zh-TW`)
- `beyond-mitohormesis-overlooked-paradigms.html` (+ `_zh-TW`)
- `discovery-arrival-graph-metrics.html` (+ `_zh-TW`)
- `wiki-and-triples-graph-biological-processes.html` (+ `_zh-TW`)
- `neurodegeneration-ad-pd-hd-als-review.html` (+ `_zh-TW`)
- `caspase-graph-analysis-28-AUG-2026.html` (+ `_zh-TW`)

Structure mirrors `themes/theme-01/`: shared base assets live here;
page-specific styles/scripts stay inline in each page.

## Files

| File | Purpose |
|---|---|
| `theme.css` | Shared base: font imports, `:root` light palette, reset, nav/hero primitives **and** shared article chrome (notes, figures, tables, metrics, lightbox…). Loaded BEFORE each page's inline `<style>`. Includes the mobile table readability guard (prose columns get a `min-width` so wide tables scroll horizontally instead of collapsing to narrow columns). |
| `pages-core.js` | Shared behaviors as global `T2`: SVG diagram helpers (`el`, `text`, `svgRoot`, `arrowHead`, `wrapText`), scroll-spy, chart tooltip, figure lightbox, nav scroll-hint, Reader/iframe detection. Synchronous in `<head>`. |
| `theme.js` | Pre-paint theme bootstrap (no flash) + resident listener for `storage` events / `wiki-theme` postMessages. |
| `pages-svg.js` | Copy-to-clipboard / PNG export for diagram SVGs and data tables (`resolveCssVars`, `svgToPngBlob`, copy-button sweep). Theme-agnostic — kept as a local copy so theme-02 pages don't depend on theme-01 assets. Loaded at the end of `<body>` (after page figure scripts). |
| `dark.css` | `[data-theme="dark"]` token overrides + attribute-selector remaps for hardcoded SVG fill/stroke hexes. Loaded AFTER inline `<style>` so overrides win. |

## Page head/body template

```
<head>
  <link rel="stylesheet" href="themes/theme-02/theme.css">
  <script src="themes/theme-02/theme.js"></script>
  <script src="themes/theme-02/pages-core.js"></script>
  <style> …page-specific CSS (optional)… </style>
  <link rel="stylesheet" href="themes/theme-02/dark.css">
</head>
…
<body>
  …
  <script> …page-specific figure code, aliasing T2 helpers… </script>
</body>
```

## Theme model

- **Default: light**; only an explicit `'dark'` in
  `localStorage['llm-wiki-theme']` opts into dark — same key as theme-01,
  so one toggle controls everything. Dark palette matches the graph app's
  navy theme.

## Conventions for new pages

1. Follow the head/body template above.
2. Keep colors in CSS as `var(--token)`; avoid new hardcoded hexes in CSS.
3. In JS figure code, alias helpers from `T2`; page-specific palettes
   (`var C = {...}`) may hardcode light hexes — add a remap selector to
   `dark.css` if you introduce a new one. Prefer `"var(--ink)"`
   / `"var(--sheet)"` fills where possible so dark mode works natively.
