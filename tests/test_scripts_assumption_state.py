"""Tests for the assumption-state layer in scripts/03_rebuild_from_triples.py.

load_assumption_state / assumption_excludes / apply_selection_edits power the
document-level exclusions (excludedSources, with keepTripleIds exceptions) and
canonical conflict selections (selections, synced from Supabase by
07_sync_assumptions.py) applied during the 03 graph build.
"""

import json

import pytest

from script_loader import load_script

mod = load_script("03_rebuild_from_triples")


@pytest.fixture
def state():
    return {
        "excluded_docs": {"_document_ - as senotherapeutic agent.md"},
        "keep_triples": {"0ad00fdc47e2"},
        "exclusion_records": [
            {"id": "exc-1", "document": "_document_ - as senotherapeutic agent.md", "topic": "adrenochrome"},
        ],
        "removed_keys": {("autophagy", "impairs", "parkinson_s_disease")},
        "added_edges": [
            {
                "from": "mitohormesis", "label": "is_mediated_by", "to": "sirtuins",
                "confidence_score": 0.8, "context": "SIRT1/SIRT3 mediate adaptation.",
                "_scenario": "triples-review-2026-08-21", "_conflict": "T3-3b",
                "updatedAt": "2026-08-30T10:00:00+00:00",
            },
        ],
        "selection_keys": {"triples-review-2026-08-21": {"T3-3b": "A"}},
        "schema_version": 2,
    }


class TestLoadAssumptionState:
    def test_missing_file_is_empty_state(self, tmp_path):
        st = mod.load_assumption_state(tmp_path / "nope.json")
        assert st["excluded_docs"] == set()
        assert st["removed_keys"] == set()
        assert st["added_edges"] == []
        assert st["selection_keys"] == {}

    def test_parses_exclusions_and_selections(self, tmp_path):
        doc = {
            "schemaVersion": 2,
            "excludedSources": [
                {"id": "e1", "document": "notes/some dir/_document_ - x.md", "keepTripleIds": ["0ad00fdc47e2"]},
            ],
            "selections": {
                "s1": {
                    "c1": {
                        "key": "A",
                        "addedEdges": [{"from": "a", "label": "activates", "to": "b"}],
                        "removedEdges": [["x", "inhibits", "y"]],
                        "updatedAt": "2026-08-30T10:00:00+00:00",
                    },
                },
            },
            "scenarios": [],
        }
        p = tmp_path / "assumptions.json"
        p.write_text(json.dumps(doc), encoding="utf-8")
        st = mod.load_assumption_state(p)
        assert st["excluded_docs"] == {"_document_ - x.md"}  # basename only
        assert st["keep_triples"] == {"0ad00fdc47e2"}
        assert st["removed_keys"] == {("x", "inhibits", "y")}
        assert len(st["added_edges"]) == 1
        assert st["selection_keys"] == {"s1": {"c1": "A"}}

    def test_invalid_json_degrades_to_empty(self, tmp_path, capsys):
        p = tmp_path / "assumptions.json"
        p.write_text("{nope", encoding="utf-8")
        st = mod.load_assumption_state(p)
        assert st["excluded_docs"] == set()
        assert "unreadable" in capsys.readouterr().out


class TestAssumptionExcludes:
    def test_excluded_document_triple(self, state):
        t = {"source_document": "_document_ - as senotherapeutic agent.md", "id": "abc"}
        assert mod.assumption_excludes(t, state, "s", "o") is True

    def test_keep_triple_ids_rescue(self, state):
        t = {"source_document": "_document_ - as senotherapeutic agent.md", "id": "0ad00fdc47e2"}
        assert mod.assumption_excludes(t, state, "s", "o") is False

    def test_other_documents_pass(self, state):
        t = {"source_document": "SIRT1.md", "id": "abc"}
        assert mod.assumption_excludes(t, state, "s", "o") is False

    def test_legacy_source_key_supported(self, state):
        t = {"source": "_document_ - as senotherapeutic agent.md", "id": "abc"}
        assert mod.assumption_excludes(t, state, "s", "o") is True

    def test_path_prefixed_sources_match_by_basename(self, state):
        t = {"source_document": "src/notes/adrenochrome/_document_ - as senotherapeutic agent.md", "id": "abc"}
        assert mod.assumption_excludes(t, state, "s", "o") is True


class TestApplySelectionEdits:
    def test_removal_wins_over_corpus_triple(self, state):
        records = {
            ("autophagy", "impairs", "parkinson_s_disease"): {"relation": "impairs"},
            ("a", "activates", "b"): {"relation": "activates"},
        }
        removed, added, skipped = mod.apply_selection_edits(records, state)
        assert removed == 1
        assert ("autophagy", "impairs", "parkinson_s_disease") not in records
        assert ("a", "activates", "b") in records
        assert added == 1 and skipped == 0

    def test_add_wins_dedupe_with_selection_timestamp(self, state):
        records = {
            ("mitohormesis", "is_mediated_by", "sirtuins"): {
                "updated": "2020-01-01T00:00:00Z", "confidence_score": 0.5,
            },
        }
        mod.apply_selection_edits(records, state)
        rec = records[("mitohormesis", "is_mediated_by", "sirtuins")]
        assert rec["updated"] == "2026-08-30T10:00:00+00:00"
        assert rec["confidence_score"] == 0.8
        assert rec["source_file"].startswith("assumptions:")

    def test_add_with_unknown_node_is_skipped(self, state):
        records = {}
        _, added, skipped = mod.apply_selection_edits(
            records, state, node_ok={"mitohormesis"}  # sirtuins missing
        )
        assert added == 0 and skipped == 1
        assert records == {}

    def test_add_creates_record_with_optional_zh(self, state):
        records = {}
        mod.apply_selection_edits(records, state, node_ok={"mitohormesis", "sirtuins"})
        rec = records[("mitohormesis", "is_mediated_by", "sirtuins")]
        assert "context_zh_TW" not in rec  # absent add context stays absent
        assert rec["context"] == "SIRT1/SIRT3 mediate adaptation."


class TestValidateAssumptionsFile:
    def _write_min_web_data(self, tmp_path, doc, monkeypatch):
        data = tmp_path / "data"
        data.mkdir()
        (data / "assumptions.json").write_text(json.dumps(doc), encoding="utf-8")
        (data / "triples-edges.json").write_text(
            json.dumps([
                {"from": "resveratrol", "label": "activates", "to": "sirt1", "confidence_score": 0.95},
            ]),
            encoding="utf-8",
        )
        (data / "triples-nodes.json").write_text(
            json.dumps([{"id": "resveratrol"}, {"id": "sirt1"}]),
            encoding="utf-8",
        )
        monkeypatch.setattr(mod, "DATA_DIR", data)
        return data

    def test_remove_key_tolerated_when_canonical(self, tmp_path, monkeypatch, capsys):
        # canonical selections already removed this edge -> info, not error
        doc = {"scenarios": [{"id": "s", "conflicts": [{
            "id": "c", "tier": 1, "anchor": [], "evidence": [],
            "options": [{"key": "A", "edits": {"remove": [["resveratrol", "activates", "sirt1"]]}}],
        }]}]}
        self._write_min_web_data(tmp_path, doc, monkeypatch)
        mod.validate_assumptions_file(ok_remove_keys={("resveratrol", "activates", "sirt1")})
        out = capsys.readouterr().out
        assert "OK" in out

    def test_unknown_remove_key_fails(self, tmp_path, monkeypatch, capsys):
        doc = {"scenarios": [{"id": "s", "conflicts": [{
            "id": "c", "tier": 1, "anchor": [], "evidence": [],
            "options": [{"key": "A", "edits": {"remove": [["ghost", "x", "node"] ]}}],
        }]}]}
        self._write_min_web_data(tmp_path, doc, monkeypatch)
        with pytest.raises(SystemExit):
            mod.validate_assumptions_file()

    def test_selections_block_key_validation(self, tmp_path, monkeypatch, capsys):
        doc = {
            "scenarios": [{"id": "s", "conflicts": [{
                "id": "c", "tier": 1, "anchor": [], "evidence": [],
                "options": [{"key": "A", "edits": {}}],
            }]}],
            "selections": {"s": {"c": {"key": "Z", "addedEdges": [], "removedEdges": []}}},
        }
        self._write_min_web_data(tmp_path, doc, monkeypatch)
        with pytest.raises(SystemExit):
            mod.validate_assumptions_file()
        assert "not an option" in capsys.readouterr().out

    def test_excluded_source_must_be_corpus_doc(self, tmp_path, monkeypatch, capsys):
        doc = {"excludedSources": [{"id": "e", "document": "not-in-corpus.md"}], "scenarios": []}
        self._write_min_web_data(tmp_path, doc, monkeypatch)
        with pytest.raises(SystemExit):
            mod.validate_assumptions_file(corpus_docs={"SIRT1.md"})
        assert "not a source" in capsys.readouterr().out

    def test_bad_keep_triple_id_fails(self, tmp_path, monkeypatch):
        doc = {"excludedSources": [
            {"id": "e", "document": "SIRT1.md", "keepTripleIds": ["not-hex-id"]},
        ], "scenarios": []}
        self._write_min_web_data(tmp_path, doc, monkeypatch)
        with pytest.raises(SystemExit):
            mod.validate_assumptions_file(corpus_docs={"SIRT1.md"})
