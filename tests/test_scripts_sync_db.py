"""Tests for scripts/sync/graph_to_db.py pure row builders (no Supabase needed)."""

import json

import pytest

from script_loader import load_script

sync = load_script("sync/graph_to_db")

pytest.importorskip("yaml", reason="sync/graph_to_db imports PyYAML")


# ----------------------------------------------------------------------
# Small helpers
# ----------------------------------------------------------------------

class TestDateOrNone:
    def test_valid_dates(self):
        assert sync._date_or_none("2026-08-27") == "2026-08-27"
        assert sync._date_or_none("2026-08-27T10:00:00Z") == "2026-08-27"

    def test_invalid(self):
        assert sync._date_or_none(None) is None
        assert sync._date_or_none("not-a-date") is None
        assert sync._date_or_none("") is None


class TestTopicOfSourceFile:
    def test_topic_paths(self):
        assert sync.topic_of_source_file("src/notes/sirtuins/SIRT1.md") == "sirtuins"
        assert sync.topic_of_source_file("src/notes/cell_repair/X.md") == (
            "cell-repair"  # underscores hyphenated to match topics.json
        )

    def test_link_dir_is_none(self):
        assert sync.topic_of_source_file("src/notes/_link/NAD+.md") is None

    def test_windows_separators(self):
        assert sync.topic_of_source_file("src\\notes\\sirtuins\\SIRT1.md") == (
            "sirtuins"
        )

    def test_non_note_paths(self):
        assert sync.topic_of_source_file(None) is None
        assert sync.topic_of_source_file("") is None
        assert sync.topic_of_source_file("graphify-out/graph.json") is None


class TestChunked:
    def test_batches(self):
        assert list(sync.chunked([1, 2, 3, 4, 5], 2)) == [[1, 2], [3, 4], [5]]

    def test_empty(self):
        assert list(sync.chunked([], 3)) == []


class TestParseFrontmatter:
    def test_okf_block(self):
        fm = sync.parse_frontmatter(
            "---\ntitle: NAD+\ntags: [coenzyme]\nprotected: false\n---\nbody"
        )
        assert fm["title"] == "NAD+"
        assert fm["tags"] == ["coenzyme"]
        assert fm["protected"] is False

    def test_malformed_returns_empty(self):
        assert sync.parse_frontmatter("---\n: [unclosed\n---\n") == {}
        assert sync.parse_frontmatter("no frontmatter") == {}


# ----------------------------------------------------------------------
# Row builders
# ----------------------------------------------------------------------

def node(id, **kw):
    return {"id": id, "label": kw.pop("label", id), **kw}


class TestBuildTopics:
    def test_sorted_and_titled(self):
        rows = sync.build_topics(["cell-repair", "sirtuins"])
        assert rows == [
            {"slug": "cell-repair", "name": "Cell Repair"},
            {"slug": "sirtuins", "name": "Sirtuins"},
        ]


class TestBuildEntities:
    def test_merges_three_modes(self):
        node_files = {
            "triples": [node("sirt1", label="SIRT1", description="d-triples",
                             source_file="src/notes/sirtuins/SIRT1.md")],
            "wiki": [node("sirt1"), node("foxo", label="FOXO",
                                         description="d-wiki")],
            "combined": [node("sirt1", description_zh_TW="zh-描述")],
        }
        fm_index = {
            "SIRT1.md": {
                "title": "SIRT1", "tags": ["gene"], "aliases": ["SIRT One"],
                "protected": True, "created": "2026-01-01",
                "updated": "2026-08-01",
            },
        }
        rows = sync.build_entities(node_files, fm_index)
        by_id = {r["norm_id"]: r for r in rows}
        assert set(by_id) == {"sirt1", "foxo"}

        sirt1 = by_id["sirt1"]
        assert sirt1["label"] == "SIRT1"  # frontmatter title when present
        assert sirt1["description"] == "d-triples"
        assert sirt1["description_zh_tw"] == "zh-描述"
        assert sirt1["entity_type"] == "gene"
        assert sirt1["tags"] == ["gene"]
        assert sirt1["aliases"] == ["SIRT One"]
        assert sirt1["protected"] is True
        assert sirt1["topic_slug"] == "sirtuins"
        assert sirt1["created"] == "2026-01-01"
        assert sirt1["updated"] == "2026-08-01"

        foxo = by_id["foxo"]
        assert foxo["entity_type"] == "concept"  # no tags -> default
        assert foxo["topic_slug"] is None
        assert foxo["description"] == "d-wiki"

    def test_missing_id_skipped(self):
        rows = sync.build_entities(
            {"triples": [{"label": "no id"}], "wiki": [], "combined": []}, {})
        assert rows == []


class TestBuildEdges:
    def test_dedupe_and_field_mapping(self):
        files = {
            "triples": [
                {"from": "a", "to": "b", "label": "activates",
                 "confidence": "EXTRACTED", "confidence_score": 0.9,
                 "weight": 2, "context": "ctx", "context_zh_TW": "語境",
                 "source_file": "src/notes/t/A.md"},
                {"from": "a", "to": "b", "label": "activates",
                 "context": "ctx"},  # duplicate (same source + ctx)
            ],
            "wiki": [
                {"from": "c", "to": "a", "label": "links_to"},
                {"from": "", "to": "x", "label": "links_to"},  # missing from
                {"from": "c", "to": "", "label": "links_to"},  # missing to
                {"from": "c", "to": "a"},  # missing label
            ],
        }
        rows = sync.build_edges(files)
        assert len(rows) == 2
        t = rows[0]
        assert t["from_id"] == "a" and t["to_id"] == "b"
        assert t["predicate"] == "activates"
        assert t["graph_source"] == "triples"
        assert t["context_zh_tw"] == "語境"
        w = rows[1]
        assert w["graph_source"] == "wiki"
        assert w["context"] == ""


class TestBuildNodeMetrics:
    def test_roles_joined_and_modes_covered(self, tmp_path, monkeypatch):
        data_dir = tmp_path / "data"
        data_dir.mkdir()
        monkeypatch.setattr(sync, "DATA_DIR", data_dir)

        roles = {"nodes": [{"id": "sirt1", "roles": ["Spreader"]}]}
        (data_dir / "roles.json").write_text(json.dumps(roles))

        node_files = {
            "combined": [node("sirt1", community=7, community_name="C7",
                              degree=5, size=7.0, pagerank=0.1,
                              betweenness=0.2, clustering=0.3, k_core=4)],
            "triples": [node("sirt1", degree=4, k_core=3)],
            "wiki": [],
        }
        rows = sync.build_node_metrics(
            node_files,
            {"combined": "roles.json", "triples": "roles.json",
             "wiki": "roles.json"},
            build_id=42,
        )
        assert len(rows) == 2  # combined + triples (wiki empty)
        combined = next(r for r in rows if r["mode"] == "combined")
        assert combined["roles"] == ["Spreader"]
        assert combined["build_id"] == 42
        assert combined["degree"] == 5
        assert combined["k_core"] == 4
        triples = next(r for r in rows if r["mode"] == "triples")
        assert triples["roles"] == ["Spreader"]


class TestBuildLinkPredictions:
    def test_rows_from_candidates(self, tmp_path, monkeypatch):
        data_dir = tmp_path / "data"
        data_dir.mkdir()
        monkeypatch.setattr(sync, "DATA_DIR", data_dir)
        monkeypatch.setattr(sync, "PREDICTION_FILES",
                            {"triples": "link-prediction.json"})

        doc = {
            "params": {"method": "adamic_adar"},
            "candidates": [
                {"a": "x", "b": "y", "score": 2.5, "shared_neighbors": 2,
                 "shared_top": ["m"], "cross_community": True},
            ],
        }
        (data_dir / "link-prediction.json").write_text(json.dumps(doc))

        rows = sync.build_link_predictions(build_id=7)
        assert rows == [{
            "a": "x", "b": "y", "method": "adamic_adar", "mode": "triples",
            "score": 2.5, "shared_neighbors": 2, "shared_top": ["m"],
            "cross_community": True, "build_id": 7,
        }]

    def test_missing_file_skipped(self, tmp_path, monkeypatch):
        monkeypatch.setattr(sync, "DATA_DIR", tmp_path)
        monkeypatch.setattr(sync, "PREDICTION_FILES",
                            {"triples": "missing.json"})
        assert sync.build_link_predictions(build_id=None) == []


class TestUpsertTable:
    def test_dry_run_counts_without_writing(self):
        rows = [{"id": i} for i in range(5)]
        assert sync.upsert_table(None, "user_nodes", rows, "id",
                                 dry_run=True) == 5

    def test_empty_rows_noop(self):
        assert sync.upsert_table(None, "user_nodes", [], "id") == 0


class TestGraphBaseDdlParity:
    """deploy/supabase/graph_base.sql must match the ON CONFLICT targets and
    row-builder fields used by scripts/sync/graph_to_db.py."""

    DDL = (sync.ROOT / "deploy" / "supabase" / "graph_base.sql").read_text()

    def test_on_conflict_targets_exist_in_ddl(self):
        assert "unique (from_id, to_id, predicate, graph_source, context)" in self.DDL
        assert "primary key (norm_id, mode)" in self.DDL
        assert "primary key (a, b, method, mode)" in self.DDL

    def test_builder_fields_have_columns(self):
        for col in ("description_zh_tw", "topic_slug", "context_zh_tw",
                    "community_name", "shared_top", "cross_community",
                    "build_id"):
            assert col in self.DDL, f"missing column {col} in graph_base.sql"

    def test_modes_constrained(self):
        assert "check (mode in ('combined', 'triples', 'wiki'))" in self.DDL
        assert "check (graph_source in ('triples', 'wiki'))" in self.DDL
