"""Tests for scripts/tools/page_links.py — outbound link normalization.

Background: articles render inside the reader iframe (web/index.html
`#page-modal-frame`, no `sandbox`). A cross-origin link clicked there
navigates the iframe, and hosts like github.com / doi.org answer
`X-Frame-Options: deny`, so the click silently does nothing. Marking those
anchors `target="_blank"` opens a real top-level tab instead.
"""

import textwrap

import pytest
from script_loader import load_script

page_links = load_script("tools/page_links")


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
        assert page_links.is_cross_origin(href)

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
        assert not page_links.is_cross_origin(href)


class TestFixTag:
    def test_adds_target_and_rel(self):
        tag = '<a href="https://github.com/a/b.md">'
        assert page_links.fix_tag(tag) == (
            '<a href="https://github.com/a/b.md" target="_blank" rel="noopener noreferrer">'
        )

    def test_preserves_other_attributes(self):
        tag = '<a class="source-link" href="https://doi.org/10.1/x">'
        out = page_links.fix_tag(tag)
        assert out.startswith('<a class="source-link" href="https://doi.org/10.1/x"')
        assert 'target="_blank"' in out

    def test_self_closing_anchor(self):
        tag = '<a href="https://x.com/i/grok" />'
        out = page_links.fix_tag(tag)
        assert out.endswith('rel="noopener noreferrer"/>')

    def test_skips_same_origin(self):
        tag = '<a href="https://graph.johnnykuo.com/#node=SASP">'
        assert page_links.fix_tag(tag) is None

    def test_skips_already_targeted(self):
        tag = '<a href="https://github.com/a" target="_blank" rel="noopener">'
        assert page_links.fix_tag(tag) is None

    def test_idempotent(self):
        once = page_links.fix_tag('<a href="https://github.com/a">')
        assert page_links.fix_tag(once) is None


class TestCheckTag:
    def test_flags_missing_target(self):
        assert 'target' in page_links.check_tag('<a href="https://github.com/a">', strict=False)

    def test_passes_when_compliant(self):
        tag = '<a href="https://github.com/a" target="_blank" rel="noopener">'
        assert page_links.check_tag(tag, strict=False) is None

    def test_targeted_without_rel_ok_unless_strict(self):
        tag = '<a href="https://github.com/a" target="_blank">'
        assert page_links.check_tag(tag, strict=False) is None
        assert page_links.check_tag(tag, strict=True) is not None


class TestProcess:
    def _write(self, tmp_path, body):
        p = tmp_path / "page.html"
        p.write_text(textwrap.dedent(body), encoding="utf-8")
        return p

    def test_fix_rewrites_only_cross_origin(self, tmp_path):
        p = self._write(
            tmp_path,
            """\
            <p>
              <a href="https://github.com/a">gh</a>
              <a href="https://graph.johnnykuo.com/#node=X">same</a>
              <a href="https://doi.org/10.1/x">doi</a>
            </p>
            """,
        )
        assert page_links.process(p, fix=True, strict=False) == []
        out = p.read_text(encoding="utf-8")
        assert out.count('target="_blank"') == 2
        assert 'href="https://graph.johnnykuo.com/#node=X"' in out

    def test_fix_is_idempotent(self, tmp_path):
        p = self._write(tmp_path, '<a href="https://github.com/a">gh</a>')
        page_links.process(p, fix=True, strict=False)
        first = p.read_text(encoding="utf-8")
        page_links.process(p, fix=True, strict=False)
        assert p.read_text(encoding="utf-8") == first

    def test_check_reports_and_does_not_write(self, tmp_path):
        p = self._write(tmp_path, '<a href="https://github.com/a">gh</a>')
        before = p.read_text(encoding="utf-8")
        problems = page_links.process(p, fix=False, strict=False)
        assert len(problems) == 1
        assert "missing target" in problems[0]
        assert p.read_text(encoding="utf-8") == before

    def test_head_links_are_not_anchors(self, tmp_path):
        """<link rel=canonical> matches a naive href grep but must survive."""
        p = self._write(
            tmp_path,
            """\
            <head>
              <link rel="canonical" href="https://graph.johnnykuo.com/pages/x.html">
            </head>
            <body><a href="https://github.com/a">gh</a></body>
            """,
        )
        page_links.process(p, fix=True, strict=False)
        out = p.read_text(encoding="utf-8")
        assert '<link rel="canonical" href="https://graph.johnnykuo.com/pages/x.html">' in out


class TestPublishedPages:
    """The real tree must be clean — this is the regression guard."""

    def test_no_cross_origin_link_missing_target(self):
        root = page_links.PAGES_ROOT
        if not root.exists():
            pytest.skip("web/public/pages not present")
        problems = []
        for f in sorted(root.rglob("*.html")):
            problems.extend(page_links.process(f, fix=False, strict=False))
        assert not problems, "\n".join(problems[:10])
