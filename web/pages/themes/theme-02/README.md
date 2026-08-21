# theme-02 — self-contained paper-&-ink editorial theme

Used by the standalone article pages:

- `web/pages/index.html`
- `node-analysis-examples-biology.html` (+ `_zh-TW`)
- `adrenochrome-protocol-node-network-analysis.html` (+ `_zh-TW`)

## Files

| File | Purpose |
|---|---|
| `theme.css` | Shared base: font imports, `:root` light palette tokens, reset, nav/hero/typography primitives. Loaded BEFORE each page's page-specific inline `<style>`. |
| `dark.css` | `[data-theme="dark"]` token overrides + attribute-selector remaps for hardcoded SVG fill/stroke hexes. Loaded AFTER the inline `<style>` so overrides win. |
| `theme.js` | Synchronous pre-paint bootstrap (no theme flash) + resident listener for `storage` events and `wiki-theme` postMessages so the page follows the app's theme toggle live. |

## Theme model

- **Default: light**; only an explicit `'dark'` in
  `localStorage['llm-wiki-theme']` opts into dark — same key as theme-01,
  so one toggle controls everything.

## Conventions for new pages

1. Head order: `theme.css` link → `theme.js` script → inline page `<style>`
   → `dark.css` link.
2. Keep colors in CSS as `var(--token)`; avoid new hardcoded hexes in CSS.
3. Inline/JS-drawn SVGs may hardcode light-palette hexes as presentation
   attributes — add a remap selector to `dark.css` if you introduce a new one.
4. Known limitation: JS figure palettes that compute colors at runtime emit
   attributes covered by the `dark.css` remaps, not variables.
