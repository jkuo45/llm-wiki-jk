"""Tests for pure helpers in the two graph rebuild pipelines:

- scripts/03_rebuild_from_triples.py (triple confidence/context/timestamps)
- scripts/05_rebuild_from_wiki.py   (frontmatter + wikilink text handling)
"""

from script_loader import load_script

rb = load_script("03_rebuild_from_triples")
wiki = load_script("05_rebuild_from_wiki")


# ======================================================================
# 03_rebuild_from_triples
# ======================================================================

class TestResolveConf:
    def test_legacy_strings(self):
        assert rb.resolve_conf({"confidence": "high"}) == (0.95, "EXTRACTED")
        assert rb.resolve_conf({"confidence": "medium"}) == (0.75, "EXTRACTED")
        assert rb.resolve_conf({"confidence": "low"}) == (0.4, "AMBIGUOUS")

    def test_default_is_medium(self):
        assert rb.resolve_conf({}) == (0.75, "EXTRACTED")
        assert rb.resolve_conf({"confidence": "unknown-value"}) == (0.75, "EXTRACTED")

    def test_numeric_confidence(self):
        assert rb.resolve_conf({"confidence": 0.96}) == (0.96, "EXTRACTED")
        assert rb.resolve_conf({"confidence": 0.5}) == (0.5, "AMBIGUOUS")
        assert rb.resolve_conf({"confidence": 0.7}) == (0.7, "EXTRACTED")

    def test_numeric_string_confidence(self):
        assert rb.resolve_conf({"confidence": "0.95"}) == (0.95, "EXTRACTED")
        assert rb.resolve_conf({"confidence": "0.3"}) == (0.3, "AMBIGUOUS")


class TestGetContext:
    def test_legacy_string_is_en_us(self):
        t = {"context": "plain text"}
        assert rb.get_context(t, "en-US") == "plain text"
        assert rb.get_context(t, "zh-TW") == "plain text"  # legacy falls back

    def test_v2_map(self):
        t = {"context": {"en-US": "hello", "zh-TW": "你好"}}
        assert rb.get_context(t, "en-US") == "hello"
        assert rb.get_context(t, "zh-TW") == "你好"

    def test_missing_translation_falls_back_to_en(self):
        t = {"context": {"en-US": "hello", "zh-TW": ""}}
        assert rb.get_context(t, "zh-TW") == "hello"

    def test_missing_context(self):
        assert rb.get_context({}, "en-US") == ""


class TestIsoTsAndTranslation:
    def test_iso_ts(self):
        t = {"created": "2026-01-02T03:04:05Z"}
        assert rb.iso_ts(t, "created") == "2026-01-02T03:04:05Z"
        assert rb.iso_ts(t, "updated") == ""
        assert rb.iso_ts(t, "updated", default="d") == "d"
        assert rb.iso_ts({"created": 5}, "created") == ""

    def test_has_translation_distinguishes_fallback(self):
        assert rb.has_translation({"context": {"en-US": "x", "zh-TW": "翻"}}, "zh-TW")
        assert not rb.has_translation({"context": {"en-US": "x", "zh-TW": ""}}, "zh-TW")
        assert not rb.has_translation({"context": "flat"}, "zh-TW")


class TestNewer:
    def test_newer_updated_wins(self):
        assert rb._newer("2026-02-01T00:00:00Z", 0.5,
                         {"updated": "2026-01-01T00:00:00Z", "score": 0.9})

    def test_tie_broken_by_higher_score(self):
        existing = {"updated": "2026-01-01T00:00:00Z", "score": 0.8}
        assert rb._newer("2026-01-01T00:00:00Z", 0.9, existing)
        assert not rb._newer("2026-01-01T00:00:00Z", 0.7, existing)

    def test_full_tie_keeps_existing(self):
        existing = {"updated": "2026-01-01T00:00:00Z", "score": 0.8}
        assert not rb._newer("2026-01-01T00:00:00Z", 0.8, existing)


# ======================================================================
# 05_rebuild_from_wiki
# ======================================================================

class TestStripDocPrefix:
    def test_strips_prefix(self):
        assert wiki.strip_doc_prefix("_document_ - Some Paper Title") == (
            "Some Paper Title"
        )

    def test_leaves_plain_names(self):
        assert wiki.strip_doc_prefix("SIRT1") == "SIRT1"

    def test_only_strips_leading(self):
        assert wiki.strip_doc_prefix("Notes about _document_ - x") == (
            "Notes about _document_ - x"
        )


class TestWikiParseFrontmatter:
    def test_scalars_and_quotes(self):
        fm = wiki.parse_frontmatter(
            "---\ntitle: My Note\nprotected: true\nquoted: \"yes\"\n---\n"
        )
        assert fm == {"title": "My Note", "protected": "true", "quoted": "yes"}

    def test_inline_list(self):
        fm = wiki.parse_frontmatter("---\ntags: [gene, sirtuin]\n---\n")
        assert fm["tags"] == ["gene", "sirtuin"]

    def test_block_list(self):
        fm = wiki.parse_frontmatter(
            "---\naliases:\n  - SIRT One\n  - \"Sirtuina\"\n---\n"
        )
        assert fm["aliases"] == ["SIRT One", "Sirtuina"]

    def test_empty_value_becomes_list(self):
        fm = wiki.parse_frontmatter("---\nauthor:\n---\n")
        assert fm["author"] == []

    def test_no_frontmatter(self):
        assert wiki.parse_frontmatter("just text") == {}
        assert wiki.parse_frontmatter("---\nno closing") == {}

    def test_comments_and_blank_lines_skipped(self):
        fm = wiki.parse_frontmatter(
            "---\n# a comment\n\ntitle: X\n---\n"
        )
        assert fm == {"title": "X"}


class TestWikiTextHelpers:
    def test_strip_frontmatter(self):
        text = "---\ntitle: X\n---\nbody [[Link]] here"
        assert wiki.strip_frontmatter(text) == "body [[Link]] here"

    def test_strip_frontmatter_noop(self):
        assert wiki.strip_frontmatter("no fm") == "no fm"
        assert wiki.strip_frontmatter("---\nunclosed") == "---\nunclosed"

    def test_strip_code_fences(self):
        text = "before ```\n[[Fake Link]]\n``` after [[Real Link]]"
        out = wiki.strip_code_fences(text)
        assert "[[Fake Link]]" not in out
        assert "[[Real Link]]" in out

    def test_snippet_context_window(self):
        body = "x" * 100 + " see [[NAD+]] for details " + "y" * 100
        snip = wiki.snippet(body, "NAD+")
        assert "[[NAD+]]" in snip
        assert len(snip) <= 200

    def test_snippet_no_link(self):
        assert wiki.snippet("nothing here", "NAD+") == ""
