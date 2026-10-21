"""Regression guard: figures in the published pages need a full-screen view
and a working copy-to-clipboard path.

Three conventions the pages used to drift apart on:

1. Every figure (inline SVG diagram, raster figure image) must be
   openable full-screen. Both themes ship that overlay in their
   `pages-core.js`; a page with figures but no `pages-core.js` had a
   dead figure (e.g. nad-metabolism-cd38-sarm1.html).
2. A copy button is only bound by `pages-svg.js`, so a
   `.copy-btn[data-copy-canvas]` on a page without that script is a
   button that does nothing.
3. A WebGL canvas can only be snapshotted when the renderer was created
   with `preserveDrawingBuffer: true` — otherwise the export is blank.

The pages are hand-authored (no script writes `web/public/pages/*.html`),
so this is the only thing keeping the conventions from drifting.
"""

import re
from pathlib import Path

import pytest

PAGES_ROOT = Path("web/public/pages")

# A page with figures must load one of these (each ships the overlay).
LIGHTBOX_SCRIPTS = ("pages-core.js",)

# The clipboard exporter / copy-button binder.
COPY_SCRIPT = "pages-svg.js"

SVG_FIGURE = re.compile(r"<svg\b[^>]*\brole\s*=\s*[\"']img[\"']", re.IGNORECASE)
IMG_TAG = re.compile(r"<img\b[^>]*>", re.IGNORECASE | re.DOTALL)
FIGURE_BLOCK = re.compile(r"<figure\b|class\s*=\s*[\"'][^\"']*\bgallery-card\b", re.IGNORECASE)
COPY_CANVAS_BTN = re.compile(r"class\s*=\s*[\"'][^\"']*\bcopy-btn\b[^\"']*[\"'][^>]*data-copy-canvas", re.IGNORECASE)
INLINE_COPY_HANDLER = re.compile(r"copyBtn\.onclick", re.IGNORECASE)
DEAD_LIGHTBOX_REFS = re.compile(r"openLightbox|closeLightbox|galleryLightbox|shared/lightbox\.js")


def page_files():
    return sorted(PAGES_ROOT.rglob("*.html"))


def has_figures(src: str) -> bool:
    """True when the page shows at least one figure (SVG diagram or image)."""
    if SVG_FIGURE.search(src):
        return True
    # A raster figure: an <img> that sits in a <figure> / gallery card.
    for m in IMG_TAG.finditer(src):
        start = max(0, m.start() - 4000)
        if FIGURE_BLOCK.search(src[start : m.start()]):
            return True
    return False


@pytest.mark.skipif(not PAGES_ROOT.exists(), reason="web/public/pages not present")
class TestPublishedFigures:
    def test_figures_have_a_fullscreen_overlay(self):
        problems = []
        for f in page_files():
            src = f.read_text(encoding="utf-8")
            if not has_figures(src):
                continue
            if not any(s in src for s in LIGHTBOX_SCRIPTS):
                problems.append(f"{f}: figures but no lightbox script")
        assert not problems, (
            "pages with figures must load pages-core.js (the full-screen "
            "overlay): " + "; ".join(problems)
        )

    def test_copy_buttons_are_bound(self):
        problems = []
        for f in page_files():
            src = f.read_text(encoding="utf-8")
            if ".copy-btn" in src and COPY_SCRIPT not in src:
                problems.append(f"{f}: copy button but no {COPY_SCRIPT}")
        assert not problems, (
            f"copy buttons need {COPY_SCRIPT}: " + "; ".join(problems)
        )

    def test_no_double_bound_copy_handlers(self):
        """A page must not bind the canvas copy twice (two clipboard writes)."""
        problems = []
        for f in page_files():
            src = f.read_text(encoding="utf-8")
            if COPY_CANVAS_BTN.search(src) and INLINE_COPY_HANDLER.search(src):
                problems.append(str(f))
        assert not problems, (
            "canvas copy is bound by both pages-svg.js and an inline handler: "
            + "; ".join(problems)
        )

    def test_webgl_snapshot_needs_preserve_drawing_buffer(self):
        problems = []
        for f in page_files():
            src = f.read_text(encoding="utf-8")
            if not COPY_CANVAS_BTN.search(src):
                continue
            if "WebGLRenderer" not in src:
                continue
            if "preserveDrawingBuffer" not in src:
                problems.append(str(f))
        assert not problems, (
            "WebGL canvas snapshots need preserveDrawingBuffer: true — "
            + "; ".join(problems)
        )

    def test_no_dead_lightbox_references(self):
        problems = []
        for f in page_files():
            src = f.read_text(encoding="utf-8")
            if DEAD_LIGHTBOX_REFS.search(src):
                problems.append(str(f))
        assert not problems, (
            "pages must not reference the removed gallery lightbox: "
            + "; ".join(problems)
        )


# ---------------------------------------------------------------------------
# The two themes must show the SAME overlay. They keep separate JS (each
# theme's own file), but the markup and the styles are shared — otherwise
# the frames drift apart again (they did: two different lightboxes).
# ---------------------------------------------------------------------------

THEMES = Path("web/public/pages/themes")
SHARED_OVERLAY_CSS = THEMES / "shared" / "figure-lightbox.css"
THEME_CORES = [THEMES / "theme-01" / "pages-core.js", THEMES / "theme-02" / "pages-core.js"]
THEME_STYLES = [THEMES / "theme-01" / "pages.css", THEMES / "theme-02" / "theme.css"]
FIG_LB_CLASS = re.compile(r"fig-lb[\w-]*")
ZOOM_CURSOR = re.compile(r"cursor\s*:\s*zoom-in")


def overlay_classes(src: str) -> set:
    return set(FIG_LB_CLASS.findall(src))


@pytest.mark.skipif(not THEMES.exists(), reason="page themes not present")
class TestOverlayParity:
    def test_both_themes_emit_the_same_markup(self):
        sets = {p.name: overlay_classes(p.read_text(encoding="utf-8")) for p in THEME_CORES}
        assert all(sets.values()), f"no overlay classes found: {sets}"
        first, *rest = sets.items()
        for name, classes in rest:
            assert classes == first[1], (
                f"{name} emits different overlay classes than {first[0]}: "
                f"{sorted(classes ^ first[1])}"
            )

    def test_one_stylesheet_backs_both_overlays(self):
        assert SHARED_OVERLAY_CSS.exists(), "shared overlay stylesheet missing"
        for p in THEME_STYLES:
            src = p.read_text(encoding="utf-8")
            assert "figure-lightbox.css" in src, f"{p} does not import the shared overlay"
            # the theme stylesheets must not restyle the overlay themselves
            assert ".fig-lb" not in src, f"{p} defines .fig-lb rules of its own"

    def test_zoom_cursor_only_on_js_marked_figures(self):
        """The zoom-in cursor must come from .fig-zoom, not a broad selector.

        A blanket `svg[role="img"]{cursor:zoom-in}` promises zoom on icons
        the JS refuses to open (they are under 60px), so the cursor lies.
        """
        shared = SHARED_OVERLAY_CSS.read_text(encoding="utf-8")
        assert ".fig-zoom" in shared and ZOOM_CURSOR.search(shared), (
            "the shared overlay must style .fig-zoom with the zoom-in cursor"
        )
        offenders = []
        for p in THEMES.rglob("*.css"):
            src = p.read_text(encoding="utf-8")
            for rule in re.finditer(r"([^{}]*)\{([^{}]*)\}", src):
                selector, body = rule.group(1), rule.group(2)
                if not ZOOM_CURSOR.search(body):
                    continue
                if ".fig-zoom" in selector:
                    continue
                if "svg[role=" in selector or "fig-canvas svg" in selector:
                    offenders.append(f"{p.name}: {selector.strip()[:60]}")
        assert not offenders, (
            "zoom-in cursor must be driven by the .fig-zoom class the JS sets: "
            + "; ".join(offenders)
        )
