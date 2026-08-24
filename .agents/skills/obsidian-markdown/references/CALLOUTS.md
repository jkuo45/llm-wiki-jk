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

GitHub alerts support only `note`, `tip`, `important`, `warning`, and `caution`. Map other types when GitHub rendering matters: `info`/`abstract`/`todo` → `[!note]`, `tip`/`success`/`example` → `[!tip]`, `danger`/`error`/`failure`/`bug` → `[!caution]`.

| Type | Aliases | Color / Icon | GitHub alert |
|------|---------|-------------|--------------|
| `note` | - | Blue, pencil | `[!note]` |
| `abstract` | `summary`, `tldr` | Teal, clipboard | → `[!note]` |
| `info` | - | Blue, info | → `[!note]` |
| `todo` | - | Blue, checkbox | → `[!note]` |
| `tip` | `hint` | Cyan, flame | `[!tip]` |
| `important` | - | Cyan, flame (`tip` alias) | `[!important]` — distinct alert on GitHub, though an alias of `tip` in Obsidian |
| `success` | `check`, `done` | Green, checkmark | → `[!tip]` |
| `question` | `help`, `faq` | Yellow, question mark | no equivalent |
| `warning` | `caution`, `attention` | Orange, warning | `[!warning]` / `[!caution]` |
| `failure` | `fail`, `missing` | Red, X | → `[!caution]` |
| `danger` | `error` | Red, zap | → `[!caution]` |
| `bug` | - | Red, bug | → `[!caution]` |
| `example` | - | Purple, list | → `[!tip]` |
| `quote` | `cite` | Gray, quote | no equivalent (plain blockquote) |

## Custom Callouts (CSS)

```css
.callout[data-callout="custom-type"] {
  --callout-color: 255, 0, 0;
  --callout-icon: lucide-alert-circle;
}
```
