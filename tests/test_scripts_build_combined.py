"""Tests for scripts/05_build_combined.py — triples+wiki merge and graph diff."""

import json

import pytest

from script_loader import load_script

cb = load_script("05_build_combined")


def triples_web_data():
    return {
        "triples-nodes.json": [
            {"id": "sirt1", "label": "SIRT1", "community": 0,
             "community_name": "C0", "file_type": "gene", "degree": 5,
             "pagerank": 0.1, "betweenness": 0.05, "clustering": 0.2,
             "k_core": 3, "description": "from triples"},
        ],
        "triples-edges.json": [
            {"from": "sirt1", "to": "nad", "label": "activates",
             "confidence": "EXTRACTED", "confidence_score": 0.9},
        ],
        "triples-legend.json": [{"cid": 0, "label": "C0", "count": 1}],
        "triples-graph-meta.json": {"god_nodes": []},
    }


def wiki_web_data():
    return {
        "wiki-nodes.json": [
            {"id": "sirt1", "label": "SIRT1", "community": 2,
             "community_name": "W2", "file_type": "gene", "degree": 2,
             "pagerank": 0.2, "betweenness": 0.01, "clustering": 0.1,
             "k_core": 1, "description": "from wiki"},
            {"id": "foxo", "label": "FOXO", "community": 3,
             "community_name": "W3", "file_type": "gene", "degree": 1,
             "pagerank": 0.05, "betweenness": 0.0, "clustering": 0.0,
             "k_core": 1},
        ],
        "wiki-edges.json": [
            {"from": "sirt1", "to": "nad", "label": "links_to",
             "confidence": "EXTRACTED", "confidence_score": 1.0, "weight": 3},
            {"from": "foxo", "to": "sirt1", "label": "links_to",
             "confidence": "EXTRACTED", "confidence_score": 1.0, "weight": 1},
        ],
        "wiki-legend.json": [{"cid": 2, "label": "W2", "count": 1},
                             {"cid": 3, "label": "W3", "count": 1}],
    }


@pytest.fixture
def data_dir(tmp_path, monkeypatch):
    d = tmp_path / "data"
    d.mkdir()
    payload = {**triples_web_data(), **wiki_web_data()}
    for name, content in payload.items():
        (d / name).write_text(json.dumps(content), encoding="utf-8")
    # a stale combined-* artifact that main() must remove
    (d / "combined-nodes.json").write_text("[]", encoding="utf-8")

    monkeypatch.setattr(cb, "DATA_DIR", d)
    # point the triples-vs-wiki comparison at nonexistent paths so the
    # diff section exits gracefully
    monkeypatch.setattr(cb, "TRIPLES_GRAPH", tmp_path / "nope1.json")
    monkeypatch.setattr(cb, "WIKI_GRAPH", tmp_path / "nope2.json")
    return d


class TestMainMerge:
    def test_node_union_and_flags(self, data_dir):
        assert cb.main() == 0
        nodes = {n["id"]: n for n in
                 json.loads((data_dir / "nodes.json").read_text())}
        assert set(nodes) == {"sirt1", "foxo"}
        shared = nodes["sirt1"]
        assert shared["in_triples"] is True and shared["in_wiki"] is True
        assert shared["graph_sources"] == ["triples", "wiki"]
        # triples attributes win on shared ids
        assert shared["description"] == "from triples"
        assert shared["community"] == 0

    def test_wiki_only_nodes_get_cid_offset(self, data_dir):
        assert cb.main() == 0
        nodes = {n["id"]: n for n in
                 json.loads((data_dir / "nodes.json").read_text())}
        assert nodes["foxo"]["in_triples"] is False
        assert nodes["foxo"]["in_wiki"] is True
        assert nodes["foxo"]["community"] == 3 + cb.WIKI_CID_OFFSET

    def test_edge_union_accumulates_sources(self, data_dir):
        assert cb.main() == 0
        edges = json.loads((data_dir / "edges.json").read_text())
        by_pair = {(e["from"], e["to"]): e for e in edges}
        assert set(by_pair) == {("sirt1", "nad"), ("foxo", "sirt1")}
        shared = by_pair[("sirt1", "nad")]
        assert shared["sources"] == ["triples", "wiki"]
        # triples relation label kept over the generic wiki links_to
        assert shared["label"] == "activates"

    def test_legend_offset_and_recolor(self, data_dir):
        assert cb.main() == 0
        legend = json.loads((data_dir / "legend.json").read_text())
        cids = {e["cid"] for e in legend}
        assert cids == {0, 2 + cb.WIKI_CID_OFFSET, 3 + cb.WIKI_CID_OFFSET}
        wiki_entries = [e for e in legend if e.get("wiki")]
        assert len(wiki_entries) == 2
        assert all(e["color"].startswith("#") for e in legend)

    def test_graph_meta_passthrough(self, data_dir):
        assert cb.main() == 0
        meta = json.loads((data_dir / "graph-meta.json").read_text())
        assert meta == {"god_nodes": []}

    def test_roles_and_version_emitted(self, data_dir):
        assert cb.main() == 0
        roles = json.loads((data_dir / "node_roles.json").read_text())
        assert roles["source_graph"] == "web/public/data/nodes.json"
        by_id = {n["id"]: n["metrics"] for n in roles["nodes"]}
        # in/out degree recomputed from the merged edge list
        assert by_id["sirt1"]["in_degree"] == 1
        assert by_id["sirt1"]["out_degree"] == 1
        assert by_id["foxo"]["out_degree"] == 1
        assert (data_dir / "roles-meta.json").exists()
        version = json.loads((data_dir / "version.json").read_text())
        assert "hash" in version

    def test_stale_combined_files_removed(self, data_dir):
        assert cb.main() == 0
        assert not (data_dir / "combined-nodes.json").exists()

    def test_missing_triples_data_fails(self, tmp_path, monkeypatch):
        d = tmp_path / "data"
        d.mkdir()
        monkeypatch.setattr(cb, "DATA_DIR", d)
        assert cb.main() == 1


class TestCompareReport:
    def test_writes_diff_artifacts(self, tmp_path, monkeypatch):
        tg = {"nodes": [{"id": "a", "label": "A", "degree": 2},
                        {"id": "b", "label": "B"}],
              "links": [{"source": "a", "target": "b"}]}
        wg = {"nodes": [{"id": "a", "label": "A", "degree": 2},
                        {"id": "c", "label": "C"}],
              "links": [{"source": "a", "target": "c", "weight": 3},
                        {"source": "a", "target": "c", "weight": 1}]}
        tpath = tmp_path / "triples.json"
        wpath = tmp_path / "wiki.json"
        tpath.write_text(json.dumps(tg))
        wpath.write_text(json.dumps(wg))
        out_json = tmp_path / "graph-diff.json"
        out_md = tmp_path / "GRAPH_DIFF.md"
        monkeypatch.setattr(cb, "TRIPLES_GRAPH", tpath)
        monkeypatch.setattr(cb, "WIKI_GRAPH", wpath)
        monkeypatch.setattr(cb, "OUT_JSON", out_json)
        monkeypatch.setattr(cb, "OUT_MD", out_md)

        cb.write_compare_report(top=5)

        diff = json.loads(out_json.read_text())
        assert diff["counts"]["shared_nodes"] == 1
        assert diff["counts"]["wiki_only_nodes"] == 1
        assert diff["counts"]["triples_only_nodes"] == 1
        assert diff["counts"]["wiki_only_edges"] == 1   # (a, c)
        assert diff["counts"]["triples_only_edges"] == 1  # (a, b)
        assert diff["top_wiki_only_edges"][0]["weight"] == 3  # max weight kept
        assert diff["top_wiki_only_nodes"][0]["id"] == "c"
        md = out_md.read_text()
        assert "# Triples vs Wiki Graph Diff" in md

    def test_skips_when_graphs_missing(self, tmp_path, monkeypatch, capsys):
        monkeypatch.setattr(cb, "TRIPLES_GRAPH", tmp_path / "nope.json")
        cb.write_compare_report()
        assert "skipped" in capsys.readouterr().out


class TestDegreeHelpers:
    def test_node_degree_prefers_precomputed(self):
        assert cb.node_degree({"id": "a", "degree": 7}, []) == 7

    def test_node_degree_computed_from_edges(self):
        edges = [{"source": "a", "target": "b"}, {"source": "c", "target": "a"}]
        assert cb.node_degree({"id": "a"}, edges) == 2

    def test_top_by_degree(self):
        nodes = [{"id": "a", "label": "A", "degree": 1},
                 {"id": "b", "label": "B", "degree": 5},
                 {"id": "c", "label": "C", "degree": 3}]
        top = cb.top_by_degree(nodes, [], 2)
        assert [t["id"] for t in top] == ["b", "c"]
