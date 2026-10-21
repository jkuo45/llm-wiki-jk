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
