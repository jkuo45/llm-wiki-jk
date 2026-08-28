"""Tests for scripts/_graph_common.py — shared graph-build helpers."""

import json

import networkx as nx
import pytest

from script_loader import load_script

gc = load_script("_graph_common")
nrl = load_script("_node_roles_lib")


# ----------------------------------------------------------------------
# Wikilink / id parsing
# ----------------------------------------------------------------------

class TestStripWikilink:
    def test_plain_text_untouched(self):
        assert gc.strip_wikilink("SIRT1 activates NAD+") == "SIRT1 activates NAD+"

    def test_simple_link(self):
        assert gc.strip_wikilink("[[NAD+]]") == "NAD+"

    def test_display_text_wins(self):
        assert gc.strip_wikilink("[[p53|p53 protein]]") == "p53 protein"

    def test_link_inside_sentence(self):
        assert gc.strip_wikilink("resveratrol modulates [[SIRT1]] activity") == (
            "resveratrol modulates SIRT1 activity"
        )

    def test_strips_surrounding_whitespace(self):
        assert gc.strip_wikilink("  [[Foxo]]  ") == "Foxo"


class TestNorm:
    def test_basic_snake_case(self):
        assert gc.norm("Oxidative Phosphorylation") == "oxidative_phosphorylation"

    def test_case_and_punctuation(self):
        assert gc.norm("SIRT1") == "sirt1"
        assert gc.norm("NAD+") == "nad"
        assert gc.norm("p53") == "p53"

    def test_greek_transliteration(self):
        assert gc.norm("NF-κB") == gc.norm("NF-kappab") == "nf_kappab"
        assert gc.norm("IKKβ") == "ikkbeta"
        assert gc.norm("TGFβ") == "tgfbeta"

    def test_unicode_compatibility(self):
        assert gc.norm("Ca²⁺") == "ca2"
        assert gc.norm("NAD⁺") == "nad"

    def test_wikilink_display_side(self):
        assert gc.norm("[[p53|p53 protein]]") == "p53_protein"

    def test_collapses_repeated_separators(self):
        assert gc.norm("  FoxO -- 3  ") == "foxo_3"

    def test_empty(self):
        assert gc.norm("") == ""


class TestParseWikilinkTarget:
    def test_target_side_wins(self):
        assert gc.parse_wikilink_target("[[p53|p53 protein]]") == "p53"

    def test_bare_target(self):
        assert gc.parse_wikilink_target("SIRT3") == "sirt3"

    def test_bracketed_target(self):
        assert gc.parse_wikilink_target("[[NAD+]]") == "nad"

    def test_spaces_around(self):
        assert gc.parse_wikilink_target("  [[FoxO3]]  ") == "foxo3"


# ----------------------------------------------------------------------
# Community colors
# ----------------------------------------------------------------------

class TestCommunityColors:
    def test_rotates_through_palette(self):
        legend = [{"cid": i} for i in range(len(gc.PALETTE) + 3)]
        colors = gc.generate_community_colors(legend)
        assert len(colors) == len(legend)
        assert colors[0] == gc.PALETTE[0]
        assert colors[len(gc.PALETTE)] == gc.PALETTE[0]  # wraps
        assert colors[2] == gc.PALETTE[2]


# ----------------------------------------------------------------------
# enrich_graph_metrics
# ----------------------------------------------------------------------

def build_di() -> nx.DiGraph:
    G = nx.DiGraph()
    G.add_edge("a", "b", confidence_score=0.9)
    G.add_edge("b", "c", confidence_score=0.5)
    G.add_edge("c", "a")  # no confidence -> default weight 0.7
    return G


class TestEnrichGraphMetrics:
    def test_node_and_edge_metrics_attached(self):
        G = build_di()
        meta = gc.enrich_graph_metrics(
            G, {0: ["a", "b"]}, {0: "Core"}, {0: 0.8}, [], []
        )
        assert G.nodes["a"]["degree"] == 2
        assert G.nodes["b"]["in_degree"] == 1
        assert G.nodes["b"]["out_degree"] == 1
        assert 0.0 <= G.nodes["a"]["pagerank"] <= 1.0
        assert G.nodes["a"]["community_size"] == 2
        assert G.nodes["a"]["community_name"] == "Core"
        assert G.nodes["c"]["community_size"] == 0  # unassigned
        assert G.nodes["c"]["community_name"] == ""

    def test_edge_weights(self):
        G = build_di()
        gc.enrich_graph_metrics(G, {}, {}, {}, [], [])
        assert G["a"]["b"]["weight"] == 0.9
        assert G["b"]["c"]["weight"] == 0.5
        assert G["c"]["a"]["weight"] == 0.7

    def test_graph_metadata(self):
        G = build_di()
        gods = [{"id": "a", "label": "A", "degree": 2}]
        meta = gc.enrich_graph_metrics(
            G, {0: ["a", "b"]}, {0: "Core"}, {0: 0.8}, gods, []
        )
        assert meta["community_labels"] == {"0": "Core"}
        assert meta["community_cohesion"] == {"0": 0.8}
        assert meta["community_sizes"] == {"0": 2}
        assert meta["god_nodes"] == gods
        assert meta["surprising_connections"] == []
        assert "metrics_computed_at" in meta


# ----------------------------------------------------------------------
# inject_graph_metadata
# ----------------------------------------------------------------------

class TestInjectGraphMetadata:
    def test_roundtrip(self, tmp_path):
        path = tmp_path / "graph.json"
        path.write_text(json.dumps({"nodes": [1], "links": []}), encoding="utf-8")
        gc.inject_graph_metadata(path, {"god_nodes": ["a"]})
        data = json.loads(path.read_text(encoding="utf-8"))
        assert data["metadata"] == {"god_nodes": ["a"]}
        assert data["nodes"] == [1]


# ----------------------------------------------------------------------
# export_roles_json
# ----------------------------------------------------------------------

def raw_node(nid, label, **metrics):
    base = {"id": nid, "label": label, "file_type": "gene",
            "community": 0, "degree": 0}
    base.update(metrics)
    return base


class TestExportRolesJson:
    def test_doc_structure_and_classification(self, tmp_path):
        nodes = [
            raw_node("hub", "Hub", out_degree=6, in_degree=1, k_core=5,
                     pagerank=0.2, betweenness_centrality=0.5,
                     clustering_coefficient=0.0, degree=7),
            raw_node("leaf", "Leaf", k_core=1, in_degree=1,
                     clustering_coefficient=0.9, degree=1),
        ]
        out = tmp_path / "node_roles.json"
        gc.export_roles_json({"nodes": nodes}, {0: "C0"}, out, source_graph="test")
        doc = json.loads(out.read_text(encoding="utf-8"))
        assert doc["source_graph"] == "test"
        assert set(doc["rules"]) == {name for name, _ in nrl.ROLE_DEFS}
        by_id = {n["id"]: n for n in doc["nodes"]}
        assert "Spreader" in by_id["hub"]["roles"]
        assert "Core backbone" in by_id["hub"]["roles"]
        assert by_id["leaf"]["roles"] == ["Module member", "Periphery"]
        assert doc["summary"]["node_count"] == 2
        assert doc["summary"]["role_counts"]["Spreader"] == 1
        assert doc["summary"]["nodes_with_multiple_roles"] == 2
        assert doc["summary"]["exemplars"]["Spreader"][0]["id"] == "hub"

    def test_creates_parent_dirs(self, tmp_path):
        out = tmp_path / "deep" / "nested" / "node_roles.json"
        gc.export_roles_json({"nodes": []}, {}, out)
        assert out.exists()


# ----------------------------------------------------------------------
# export_wiki_three_json
# ----------------------------------------------------------------------

class TestExportWikiThreeJson:
    def graph(self):
        nodes = [
            {"id": "a", "label": "A", "community": 0, "degree": 2,
             "pagerank": 0.3, "betweenness_centrality": 0.1,
             "clustering_coefficient": 0.2, "k_core_number": 2,
             "file_type": "gene", "source_file": "src/notes/t/A.md",
             "description": "node a"},
            {"id": "b", "label": "B", "community": 1, "degree": 1,
             "pagerank": 0.2, "betweenness_centrality": 0.0,
             "clustering_coefficient": 0.0, "k_core_number": 1},
        ]
        links = [
            {"source": "a", "target": "b", "relation": "links_to",
             "confidence": "EXTRACTED", "confidence_score": 1.0, "weight": 2,
             "context": "A links B", "created": "2026-01-01T00:00:00Z",
             "updated": "2026-01-02T00:00:00Z"},
            {"source": "a", "target": "ghost", "relation": "links_to",
             "confidence_score": 1.0},
        ]
        return {"nodes": nodes, "links": links,
                "metadata": {"god_nodes": [{"id": "a", "label": "A"}]}}

    def test_emits_all_six_artifacts(self, tmp_path):
        labels = {0: "C0", 1: "C1"}
        gc.export_wiki_three_json(self.graph(), labels, tmp_path)
        for fname in ("wiki-nodes.json", "wiki-edges.json", "wiki-legend.json",
                      "wiki-node_roles.json", "wiki-roles-meta.json",
                      "wiki-graph-meta.json"):
            assert (tmp_path / fname).exists(), fname

    def test_node_schema(self, tmp_path):
        gc.export_wiki_three_json(self.graph(), {0: "C0", 1: "C1"}, tmp_path)
        nodes = json.loads((tmp_path / "wiki-nodes.json").read_text(encoding="utf-8"))
        a = next(n for n in nodes if n["id"] == "a")
        assert a["community_name"] == "C0"
        assert a["size"] == pytest.approx(3 + 2 * 0.8)  # 3 + deg*0.8
        assert a["color"]["background"] == gc.PALETTE[0]
        assert a["description"] == "node a"
        assert a["description_zh_TW"] == ""

    def test_dangling_edges_dropped(self, tmp_path):
        gc.export_wiki_three_json(self.graph(), {0: "C0", 1: "C1"}, tmp_path)
        edges = json.loads((tmp_path / "wiki-edges.json").read_text(encoding="utf-8"))
        assert len(edges) == 1
        e = edges[0]
        assert e["from"] == "a" and e["to"] == "b"
        assert e["label"] == "links_to"
        assert e["weight"] == 2
        assert e["color"]["opacity"] == 1.0

    def test_legend_counts_and_colors(self, tmp_path):
        gc.export_wiki_three_json(self.graph(), {0: "C0", 1: "C1"}, tmp_path)
        legend = json.loads((tmp_path / "wiki-legend.json").read_text(encoding="utf-8"))
        counts = {e["cid"]: e["count"] for e in legend}
        assert counts == {0: 1, 1: 1}
        assert all("color" in e for e in legend)

    def test_graph_meta_written(self, tmp_path):
        gc.export_wiki_three_json(self.graph(), {0: "C0", 1: "C1"}, tmp_path)
        meta = json.loads((tmp_path / "wiki-graph-meta.json").read_text(encoding="utf-8"))
        assert meta["god_nodes"] == [{"id": "a", "label": "A"}]


# ----------------------------------------------------------------------
# write_web_version
# ----------------------------------------------------------------------

class TestWriteWebVersion:
    def test_hash_covers_all_json_files(self, tmp_path):
        (tmp_path / "a.json").write_text("{}", encoding="utf-8")
        (tmp_path / "b.json").write_text("[]", encoding="utf-8")
        gc.write_web_version(tmp_path)
        version = json.loads((tmp_path / "version.json").read_text(encoding="utf-8"))
        assert version["files"] == ["a.json", "b.json"]
        assert len(version["hash"]) == 16

    def test_hash_changes_when_data_changes(self, tmp_path):
        (tmp_path / "a.json").write_text("{}", encoding="utf-8")
        gc.write_web_version(tmp_path)
        h1 = json.loads((tmp_path / "version.json").read_text())["hash"]
        (tmp_path / "a.json").write_text("{\"x\":1}", encoding="utf-8")
        gc.write_web_version(tmp_path)
        h2 = json.loads((tmp_path / "version.json").read_text())["hash"]
        assert h1 != h2

    def test_version_file_excluded_from_hash(self, tmp_path):
        (tmp_path / "a.json").write_text("{}", encoding="utf-8")
        gc.write_web_version(tmp_path)
        v1 = json.loads((tmp_path / "version.json").read_text())
        gc.write_web_version(tmp_path)
        v2 = json.loads((tmp_path / "version.json").read_text())
        assert v1["hash"] == v2["hash"]
