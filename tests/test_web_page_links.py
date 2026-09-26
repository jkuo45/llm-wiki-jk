"""Regression guard: outbound links in published pages need `target="_blank"`.

Background: articles render inside the reader iframe (web/index.html
`#page-modal-frame`, no `sandbox`). A cross-origin link clicked there
navigates the *iframe*, and hosts like github.com / doi.org /
pmc.ncbi.nlm.nih.gov answer `X-Frame-Options: deny`, so the browser refuses
to render it — the click silently does nothing and the URL never changes.
"Open in new tab" works because it leaves the frame entirely. Marking those
anchors `target="_blank"` restores normal behavior.

Same-origin `graph.johnnykuo.com` links are deliberately exempt: those are
in-reader navigation, reconciled by `matchFrameArticle()` and the
`reader-navigate` postMessage in web/components/reader.js. Targeting them
would break article-to-article jumps.

The pages are hand-authored (no script writes `web/public/pages/*.html`), so
this is the only thing keeping the convention from drifting.
"""

import re
from pathlib import Path

import pytest

PAGES_ROOT = Path("web/public/pages")
SITE_HOST = "graph.johnnykuo.com"

# A single <a ...> opening tag. DOTALL so a tag split across lines still matches.
A_TAG = re.compile(r"<a\s[^>]*>", re.IGNORECASE | re.DOTALL)
HREF = re.compile(r"""href\s*=\s*(["'])(.*?)\1""", re.IGNORECASE | re.DOTALL)
HAS_TARGET = re.compile(r"""\btarget\s*=""", re.IGNORECASE)


def is_cross_origin(href: str) -> bool:
    """True for an absolute http(s) href pointing off the site host."""
    low = href.strip().lower()
    if not (low.startswith("http://") or low.startswith("https://")):
        return False
    host = low.split("://", 1)[1].split("/", 1)[0].split("?", 1)[0]
    return host.split(":")[0] != SITE_HOST


def untargeted_cross_origin(src: str):
    """Yield (line_no, tag) for cross-origin anchors with no target attr."""
    for m in A_TAG.finditer(src):
        tag = m.group(0)
        h = HREF.search(tag)
        if h and is_cross_origin(h.group(2)) and not HAS_TARGET.search(tag):
            yield src.count("\n", 0, m.start()) + 1, tag


@pytest.mark.skipif(not PAGES_ROOT.exists(), reason="web/public/pages not present")
class TestPublishedPages:
    def test_every_cross_origin_link_opens_in_a_new_tab(self):
        problems = []
        for f in sorted(PAGES_ROOT.rglob("*.html")):
            for line, tag in untargeted_cross_origin(f.read_text(encoding="utf-8")):
                problems.append(f"{f}:{line}: {tag[:100]}")
        assert not problems, (
            "cross-origin links missing target=\"_blank\" — they silently do "
            "nothing inside the reader iframe (X-Frame-Options: deny):\n"
            + "\n".join(problems)
        )


class TestIsCrossOrigin:
    @pytest.mark.parametrize(
        "href",
        [
            "https://github.com/jkuo45/llm-wiki-jk",
            "https://doi.org/10.1038/s41419-026-09108-y",
            "http://example.com/x",
            "https://pmc.ncbi.nlm.nih.gov/articles/PMC13171333/",
        ],
    )
    def test_cross_origin(self, href):
        assert is_cross_origin(href)

    @pytest.mark.parametrize(
        "href",
        [
            "https://graph.johnnykuo.com/pages/en-US/lipid-peroxidation.html",
            "https://graph.johnnykuo.com/#reader=cell-death-comparison",
            "../index.html",
            "#overview",
            "mailto:x@example.com",
            "",
        ],
    )
    def test_not_cross_origin(self, href):
        assert not is_cross_origin(href)


class TestDetector:
    def test_flags_missing_target(self):
        found = list(untargeted_cross_origin('<p><a href="https://github.com/a">x</a></p>'))
        assert len(found) == 1

    def test_ignores_targeted_and_same_origin(self):
        src = (
            '<a href="https://github.com/a" target="_blank" rel="noopener">x</a>'
            '<a href="https://graph.johnnykuo.com/#node=SASP">y</a>'
        )
        assert not list(untargeted_cross_origin(src))

    def test_ignores_non_anchor_href_tags(self):
        """<link rel=canonical> matches a naive href grep but is not an anchor."""
        src = '<link rel="canonical" href="https://graph.johnnykuo.com/pages/x.html">'
        assert not list(untargeted_cross_origin(src))
