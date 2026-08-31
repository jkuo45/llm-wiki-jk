"""api.graph_ops — query/explain/path/analyze against a synthetic graph.json."""

import json

import networkx as nx
import pytest
from networkx.readwrite import json_graph

import api.graph_ops as go
import api.wiki as wiki

NODES = [
    {"id": "sirt1", "label": "SIRT1", "norm_label": "sirt1",
     "description": "NAD-dependent deacetylase.",
     "community": 0, "source_file": "src/notes/sirtuins/SIRT1.md",
     "aliases": ["sirtuin 1"]},
    {"id": "res", "label": "Resveratrol", "norm_label": "resveratrol",
     "description": "Polyphenol activator.", "community": 0,
     "source_file": "src/notes/sirtuins/Resveratrol.md", "aliases": []},
    {"id": "nad", "label": "NAD+", "norm_label": "nad",
     "description": "Redox coenzyme.", "community": 0,
     "source_file": "src/notes/_link/NAD+.md", "aliases": []},
    {"id": "cd38", "label": "CD38", "norm_label": "cd38",
     "description": "NADase ectoenzyme.", "community": 0,
     "source_file": "src/notes/sirtuins/CD38.md", "aliases": []},
    {"id": "mtorc1", "label": "mTORC1", "norm_label": "mtorc1",
     "description": "Growth complex in its own component.", "community": 1,
     "source_file": "", "aliases": []},
]

LINKS = [
    {"source": "res", "target": "sirt1", "relation": "activates",
     "confidence": "EXTRACTED", "confidence_score": 0.9, "context": "resv activates sirt1",
     "weight": 1},
    {"source": "sirt1", "target": "nad", "relation": "consumes",
     "confidence": "EXTRACTED", "confidence_score": 0.8, "context": "sirt1 consumes nad+",
     "weight": 1},
    {"source": "cd38", "target": "nad", "relation": "degrades",
     "confidence": "EXTRACTED", "confidence_score": 0.7, "context": "cd38 degrades nad+",
     "weight": 1},
    {"source": "mtorc1", "target": "mtorc1", "relation": "self", "weight": 1},
]


def graph_doc():
    # matches the production artifact: graph.json is a plain DiGraph
    # (multigraph: false), which nx.pagerank and friends require
    return {
        "directed": True, "multigraph": False, "graph": {},
        "nodes": [dict(n) for n in NODES],
        "links": [dict(l) for l in LINKS],
    }


@pytest.fixture
def G():
    return json_graph.node_link_graph(graph_doc(), edges="links")


@pytest.fixture
def graph_env(tmp_path, monkeypatch, G):
    """Point graph_ops + wiki at a synthetic graph and empty wiki/tasks roots.

    graph_ops caches the graph, matcher, and metrics in module globals; reset
    them so every test starts cold against the fixture graph."""
    gpath = tmp_path / "graph.json"
    gpath.write_text(json.dumps(graph_doc()), encoding="utf-8")
    monkeypatch.setattr(go, "GRAPH_PATH", gpath)
    monkeypatch.setattr(go, "_G", None)
    monkeypatch.setattr(go, "_MATCHER", None)
    monkeypatch.setattr(go, "_NAME_TO_NODE", None)
    monkeypatch.setattr(go, "_METRICS_CACHE", None)

    (tmp_path / "notes").mkdir()
    (tmp_path / "tasks").mkdir()
    monkeypatch.setattr(wiki, "WIKI_ROOT", tmp_path / "notes")
    monkeypatch.setattr(wiki, "TASKS_ROOT", tmp_path / "tasks")
    monkeypatch.setattr(wiki, "_WIKI_INDEX", None)
    monkeypatch.setattr(wiki, "_TASK_PATHS", None)
    return G


class TestFindNodes:
    def test_exact_label_and_norm(self, graph_env):
        G = graph_env
        assert go._find_node(G, "SIRT1") == "sirt1"
        assert go._find_node(G, "sirt1") == "sirt1"  # via norm_label
        assert go._find_node(G, "NAD+") == "nad"

    def test_term_scoring(self, graph_env):
        G = graph_env
        assert go._find_node(G, "nad metabolism") == "nad"
        assert go._find_node(G, "resveratrol polyphenol") == "res"

    def test_no_match(self, graph_env):
        assert go._find_node(graph_env, "quantum flux") is None

    def test_find_nodes_top_n(self, graph_env):
        G = graph_env
        hits = go._find_nodes(G, "nad", limit=2)
        assert "nad" in hits
        assert len(hits) <= 2
        assert go._find_nodes(G, "zzz") == []


class TestEdgeMeta:
    def test_plain_attr_dict(self, graph_env):
        G = graph_env  # DiGraph: get_edge_data returns the attr dict directly
        assert go._edge_meta(G, "sirt1", "nad") == ("consumes", "EXTRACTED")
        # reversed order falls back to the opposite direction
        assert go._edge_meta(G, "nad", "sirt1") == ("consumes", "EXTRACTED")

    def test_multigraph_nested_attrs(self):
        M = nx.MultiDiGraph()
        M.add_edge("a", "b", relation="binds", confidence="high")
        assert go._edge_meta(M, "a", "b") == ("binds", "high")

    def test_missing_edge(self, graph_env):
        assert go._edge_meta(graph_env, "sirt1", "cd38") == ("", "")


class TestShortestPath:
    def test_directed_path(self, graph_env):
        assert go._shortest_path(graph_env, "res", "nad") == ["res", "sirt1", "nad"]

    def test_falls_back_to_undirected(self, graph_env):
        # cd38 -> nad only; directed cd38->sirt1 has no path, undirected does
        assert go._shortest_path(graph_env, "cd38", "sirt1") == ["cd38", "nad", "sirt1"]

    def test_no_path_raises(self, graph_env):
        with pytest.raises(nx.NetworkXNoPath):
            go._shortest_path(graph_env, "sirt1", "mtorc1")


class TestMatchNodesInText:
    def test_matches_labels_and_highlights_edges(self, graph_env):
        out = go.match_nodes_in_text("SIRT1 consumes NAD+ in the cell")
        assert set(out["highlight_nodes"]) >= {"sirt1", "nad"}
        assert ["sirt1", "nad"] in out["highlight_edges"]

    def test_matches_alias(self, graph_env):
        out = go.match_nodes_in_text("we discuss sirtuin 1 here")
        assert "sirt1" in out["highlight_nodes"]

    def test_no_match(self, graph_env):
        out = go.match_nodes_in_text("nothing relevant at all")
        assert out == {"highlight_nodes": [], "highlight_edges": []}


class TestGraphQuery:
    def test_bfs_subgraph(self, graph_env):
        out = go.graph_query("NAD+ metabolism")
        assert out["type"] == "query"
        assert out["primary_node"] == "nad"
        assert {"nad", "sirt1", "cd38"} <= set(out["highlight_nodes"])
        assert "Found" in out["text"] and "Key nodes:" in out["text"]

    def test_no_match_message(self, graph_env):
        out = go.graph_query("quantum flux")
        assert "No nodes found" in out["text"]
        assert out["highlight_nodes"] == [] and out["primary_node"] is None


class TestGraphExplain:
    def test_explain_lists_connections(self, graph_env):
        out = go.graph_explain("SIRT1")
        assert out["type"] == "explain"
        assert out["primary_node"] == "sirt1"
        assert "SIRT1" in out["text"]
        assert "Connections (2):" in out["text"]
        assert "→ **NAD+** [consumes]" in out["text"]
        assert "← **Resveratrol** [activates]" in out["text"]
        assert out["wiki_source"] is None  # empty wiki root
        assert out["task_outputs"] == []
        assert ["sirt1", "nad"] in out["highlight_edges"]
        assert ["res", "sirt1"] in out["highlight_edges"]

    def test_unknown_node(self, graph_env):
        out = go.graph_explain("quantum flux")
        assert "No node found" in out["text"]
        assert out["primary_node"] is None


class TestGraphPath:
    def test_fewer_than_two_waypoints(self, graph_env):
        out = go.graph_path(["only one"])
        assert "at least two concepts" in out["text"]

    def test_single_leg(self, graph_env):
        out = go.graph_path(["Resveratrol", "NAD+"])
        assert out["type"] == "path"
        assert out["primary_node"] == "res"
        assert "(2 hops across 1 leg)" in out["text"]
        assert "--[activates]-->" in out["text"]
        assert out["highlight_nodes"][0] == "res"

    def test_missing_waypoints_reported(self, graph_env):
        out = go.graph_path(["Resveratrol", "quantum flux", "NAD+"])
        assert "Unresolved concepts: 'quantum flux'" in out["text"]
        # path still found for the resolvable leg
        assert out["primary_node"] == "res"

    def test_broken_leg_reported(self, graph_env):
        out = go.graph_path(["SIRT1", "mTORC1"])
        assert "No path found" in out["text"]
        assert "1 leg(s) had no connecting path." in out["text"]

    def test_duplicate_consecutive_waypoints_collapsed(self, graph_env):
        out = go.graph_path(["Resveratrol", "Resveratrol", "NAD+"])
        assert "(2 hops across 1 leg)" in out["text"]


class TestGraphAnalyze:
    def test_pairwise_analysis(self, graph_env):
        out = go.graph_analyze(["NAD+", "SIRT1"], "centrality")
        assert out["type"] == "analyze"
        assert out["primary_node"] == "nad"

        data = out["analysis_data"]
        assert len(data["nodes"]) == 2
        sirt1 = next(r for r in data["nodes"] if r["id"] == "sirt1")
        assert sirt1["degree"] == 2 and sirt1["in_degree"] == 1
        assert sirt1["out_degree"] == 1
        assert 0.0 <= sirt1["betweenness"] <= 1.0
        assert sirt1["pagerank"] > 0.0

        assert len(data["pairs"]) == 1
        pair = data["pairs"][0]
        assert pair["a"] == "NAD+" and pair["b"] == "SIRT1"
        assert pair["distance"] == 1  # undirected fallback: sirt1 -> nad edge
        assert pair["common_neighbor_count"] == 0
        assert pair["path"] == ["NAD+", "SIRT1"]

        assert "Pairwise:" in out["text"]
        assert data["primary_node"] == "nad"
        assert "nad" in data["subgraph"]["nodes"]

    def test_no_matching_nodes(self, graph_env):
        out = go.graph_analyze(["quantum flux"])
        assert "Could not find any nodes matching 'quantum flux'" in out["text"]
        assert out["primary_node"] is None

    def test_duplicate_nodes_collapsed(self, graph_env):
        out = go.graph_analyze(["SIRT1", "sirt1", "NAD+"])
        assert len(out["analysis_data"]["nodes"]) == 2


class TestWarmIndex:
    def test_builds_cache_and_matcher(self, graph_env):
        go.warm_index()
        assert go._METRICS_CACHE is not None
        assert set(go._METRICS_CACHE) == {"betweenness", "closeness",
                                          "clustering", "pagerank"}
        assert go._MATCHER is not None and go._NAME_TO_NODE is not None
        # matcher works after warm
        out = go.match_nodes_in_text("Resveratrol")
        assert "res" in out["highlight_nodes"]

    def test_metric_failure_degrades_gracefully(self, graph_env, monkeypatch, caplog):
        def boom(G):
            raise RuntimeError("laplacian exploded")

        monkeypatch.setattr(go, "_compute_metrics", boom)
        go.warm_index()  # must not raise
        assert go._METRICS_CACHE is None
        assert go._MATCHER is not None  # matcher still built
