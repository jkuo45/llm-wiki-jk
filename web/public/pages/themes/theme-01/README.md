# theme-01 — graph-app shared theme

The original wiki-page theme, coupled to the graph app chrome.

- **Default: dark** (`pages.css`). Light is a second stylesheet
  (`pages-light.css`) toggled via the `disabled` attribute.
- Pre-paint bootstrap: `page-theme.js` injects the light stylesheet in the
  correct state from `localStorage['llm-wiki-theme']` (set by the reader
  header toggle in `web/components/theme.js`).
- Runtime sync + diagram re-render: `pages-core.js`; SVG helpers in
  `pages-svg.js`; figure renderers `render-matrix.js`, `render-network.js`,
  `render-spectrum.js`; hover definitions `context-tooltip.js`.

Pages using this theme live directly in `web/pages/` and reference assets
as `themes/theme-01/…`.
