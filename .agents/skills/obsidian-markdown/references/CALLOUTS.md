# Callouts Reference

> [!note]
> Put `> [!type]` on its own line and all content on the following lines. GitHub requires this — single-line callouts (`> [!info] text`) and inline titles (`> [!info] Custom Title`) render as plain blockquotes on GitHub. Fold this text (including any intended title) into the first content line.

## Basic Callout

```markdown
> [!note]
> This is a note callout.

> [!info]
> This callout has a title — write the title as the first content line.

> [!tip]
> Title-only callout: keep the marker alone on the first line.
```

## Foldable Callouts

Obsidian-only; GitHub will not render these as alerts.

```markdown
> [!faq]-
> Collapsed by default — this content is hidden until expanded.

> [!faq]+
> Expanded by default — this content is visible but can be collapsed.
```

## Nested Callouts

Obsidian-only; GitHub will not render nested callouts as alerts.

```markdown
> [!question]
> Outer callout title
> > [!note]
> > Inner callout content
> > Nested content
```

## Supported Callout Types

| Type | Aliases | Color / Icon |
|------|---------|-------------|
| `note` | - | Blue, pencil |
| `abstract` | `summary`, `tldr` | Teal, clipboard |
| `info` | - | Blue, info |
| `todo` | - | Blue, checkbox |
| `tip` | `hint`, `important` | Cyan, flame |
| `success` | `check`, `done` | Green, checkmark |
| `question` | `help`, `faq` | Yellow, question mark |
| `warning` | `caution`, `attention` | Orange, warning |
| `failure` | `fail`, `missing` | Red, X |
| `danger` | `error` | Red, zap |
| `bug` | - | Red, bug |
| `example` | - | Purple, list |
| `quote` | `cite` | Gray, quote |

## Custom Callouts (CSS)

```css
.callout[data-callout="custom-type"] {
  --callout-color: 255, 0, 0;
  --callout-icon: lucide-alert-circle;
}
```
