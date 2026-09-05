"""api.sanitize — input sanitization for the prompt API (pure functions)."""

import pytest

from api.domain.sanitize import (
    MAX_ANALYSIS_LENGTH,
    MAX_INPUT_LENGTH,
    MAX_NODE_NAME_LENGTH,
    MAX_TRACE_NODES,
    sanitize_analysis,
    sanitize_input,
    sanitize_node_name,
    sanitize_tags,
    validate_intent,
)


class TestSanitizeInput:
    def test_valid_passage_kept(self):
        text = "How does  SIRT1   relate to NAD+ metabolism?"
        assert sanitize_input(text) == "How does SIRT1 relate to NAD+ metabolism?"

    def test_empty_or_non_string(self):
        assert sanitize_input("") == ""
        assert sanitize_input(None) == ""
        assert sanitize_input(123) == ""
        assert sanitize_input("   ") == ""

    def test_html_tags_stripped(self):
        assert sanitize_input("<b>bold</b> claim") == "bold claim"

    def test_control_chars_removed(self):
        assert sanitize_input("a\x00b\x1fc\x7fd") == "abcd"
        # \t and \n are whitespace (collapsed), not stripped outright
        assert sanitize_input("a\tb\nc") == "a b c"

    def test_truncated_to_max(self):
        assert sanitize_input("x" * (MAX_INPUT_LENGTH + 100)) == "x" * MAX_INPUT_LENGTH

    @pytest.mark.parametrize("payload,cleaned", [
        ("<script>alert(1)</script>", "alert(1)"),  # tags stripped first
        ("javascript:void(0)", ""),
        ("DATA:text/html;base64,xxx", ""),
        ("<img onerror=alert(1) src=x>", ""),  # whole payload is one tag
        ("onerror=alert(1)", ""),  # bare handler survives stripping
        ("click javascript: for more", ""),
    ])
    def test_xss_vectors(self, payload, cleaned):
        assert sanitize_input(payload) == cleaned


class TestSanitizeNodeName:
    def test_allowed_characters_kept(self):
        assert sanitize_node_name("NAD+/SIRT1 kinase-2.5 (p53)") == (
            "NAD+/SIRT1 kinase-2.5 p53"
        )

    def test_disallowed_characters_removed(self):
        assert sanitize_node_name("a[b]c{d}e<f>") == "abcdef"

    def test_truncated_to_max(self):
        out = sanitize_node_name("x" * (MAX_NODE_NAME_LENGTH + 50))
        assert out == "x" * MAX_NODE_NAME_LENGTH

    def test_empty_or_non_string(self):
        assert sanitize_node_name("") == ""
        assert sanitize_node_name(None) == ""
        assert sanitize_node_name(5) == ""


class TestSanitizeAnalysis:
    def test_clean_text_kept_and_collapsed(self):
        assert sanitize_analysis("compare  a\nand b") == "compare a and b"

    def test_truncated_to_max(self):
        assert sanitize_analysis("y" * 1000) == "y" * MAX_ANALYSIS_LENGTH

    def test_xss_rejected(self):
        assert sanitize_analysis("javascript: alert") == ""


class TestSanitizeTags:
    def test_deduped_and_sanitized(self):
        # dedupe is exact-string (case-sensitive); junk entries dropped
        assert sanitize_tags(["NAD+", " nad+ ", 42, "", None]) == ["NAD+", "nad+"]

    def test_non_list_rejected(self):
        assert sanitize_tags("NAD+") == []
        assert sanitize_tags(None) == []

    def test_capped_at_max_trace_nodes(self):
        out = sanitize_tags([f"node-{i}" for i in range(MAX_TRACE_NODES + 5)])
        assert len(out) == MAX_TRACE_NODES


class TestValidateIntent:
    def test_non_dict_is_unknown(self):
        assert validate_intent("explain SIRT1") == {"intent": "unknown"}
        assert validate_intent(None) == {"intent": "unknown"}

    def test_unknown_intent(self):
        assert validate_intent({"intent": "nonsense"}) == {"intent": "unknown"}
        assert validate_intent({}) == {"intent": "unknown"}

    def test_query(self):
        # node-name sanitization strips punctuation from the question
        assert validate_intent({"intent": "query", "question": "key nodes?"}) == {
            "intent": "query", "question": "key nodes",
        }

    def test_query_empty_question_is_unknown(self):
        assert validate_intent({"intent": "query", "question": "  "}) == {
            "intent": "unknown"
        }

    def test_explain(self):
        assert validate_intent({"intent": "explain", "node": "SIRT1!"}) == {
            "intent": "explain", "node": "SIRT1",
        }

    def test_explain_empty_node_is_unknown(self):
        assert validate_intent({"intent": "explain", "node": ""}) == {
            "intent": "unknown"
        }

    def test_path_from_to(self):
        assert validate_intent({"intent": "path", "from": "NAD+", "to": "SIRT1"}) == {
            "intent": "path", "from": "NAD+", "to": "SIRT1",
        }

    def test_path_missing_endpoint_is_unknown(self):
        assert validate_intent({"intent": "path", "from": "NAD+"}) == {
            "intent": "unknown"
        }

    def test_analyze_with_nodes_list(self):
        intent = validate_intent({
            "intent": "analyze",
            "nodes": ["NAD+", "SIRT1", 42, ""],
            "analysis": "centrality",
        })
        assert intent == {"intent": "analyze", "nodes": ["NAD+", "SIRT1"],
                          "analysis": "centrality"}

    def test_analyze_single_node_field(self):
        intent = validate_intent({"intent": "analyze", "node": "SIRT1"})
        assert intent == {"intent": "analyze", "nodes": ["SIRT1"], "analysis": ""}

    def test_analyze_node_list_capped(self):
        intent = validate_intent({
            "intent": "analyze",
            "nodes": [f"n{i}" for i in range(MAX_TRACE_NODES + 3)],
        })
        assert len(intent["nodes"]) == MAX_TRACE_NODES

    def test_analyze_without_valid_nodes_is_unknown(self):
        assert validate_intent({"intent": "analyze", "nodes": ["", "  "]}) == {
            "intent": "unknown"
        }
        assert validate_intent({"intent": "analyze"}) == {"intent": "unknown"}
