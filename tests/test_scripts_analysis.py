"""Tests for the scripts/analysis tools.

Uses a small synthetic graph.json (the same schema graphify-out/graph.json uses)
with two hubs that share neighbours but are not adjacent — the canonical
"missing link" shape — plus an isolated node and a self-loop to exercise the
giant-component / selfloop filtering."""

import argparse
import json
import sys

import networkx as nx
import pytest

from script_loader import load_script

ana = load_script("analysis/node_analysis")
lp = load_script("analysis/link_prediction")
rq = load_script("analysis/role_query")
nrl = load_script("lib/node_roles")


# ----------------------------------------------------------------------
# Synthetic graph fixture
# ----------------------------------------------------------------------

COMMUNITY = {"hub1": 0, "hub2": 1, "hub3": 2, "shared1": 0, "shared2": 0,
             "only1": 0, "only2": 0, "only3": 0, "w1": 1, "x1": 2, "x2": 2,
             "x3": 2, "iso": 3}

EDGES = [
    ("hub1", "shared1"), ("hub1", "shared2"),
    ("hub2", "shared1"), ("hub2", "shared2"),
    ("hub1", "only1"), ("hub1", "only2"), ("hub1", "only3"),
    ("hub2", "w1"),
    ("hub3", "x1"), ("hub3", "x2"), ("hub3", "x3"),
    ("x1", "w1"),  # bridges hub3's component into the giant component
]


def make_graph_doc():
    nodes = []
    for nid, label in [
        ("hub1", "Hub One"), ("hub2", "Hub Two"), ("hub3", "Hub Three"),
        ("shared1", "Shared One"), ("shared2", "Shared Two"),
        ("only1", "Only One"), ("only2", "Only Two"), ("only3", "Only Three"),
        ("w1", "W One"), ("x1", "X One"), ("x2", "X Two"), ("x3", "X Three"),
        ("iso", "Iso"),
    ]:
        nodes.append({"id": nid, "label": label, "community": COMMUNITY[nid]})
    links = [{"source": s, "target": t, "relation": "related_to",
              "confidence_score": 0.9} for s, t in EDGES]
    links.append({"source": "hub1", "target": "hub1", "relation": "selfloop",
                  "confidence_score": 1.0})
    return {
        "nodes": nodes,
        "links": links,
        "metadata": {"god_nodes": [{"id": "hub1", "label": "Hub One",
                                    "degree": 5}]},
    }


@pytest.fixture
def graph_path(tmp_path):
    path = tmp_path / "graph.json"
    path.write_text(json.dumps(make_graph_doc()), encoding="utf-8")
    return path


@pytest.fixture
def G(graph_path):
    g, _, _ = lp.load_graph(graph_path)
    return g


# ======================================================================
# analysis/node_analysis
# ======================================================================

class TestNodeAnalysisHelpers:
    def test_normalize(self):
        assert ana.normalize("SIRT1") == "sirt1"
        assert ana.normalize("Hub One") == "hub_one"
        assert ana.normalize("NF-kB") == "nf_kb"

    def test_resolve_by_label_and_id(self):
        nodes = make_graph_doc()["nodes"]
        assert ana.resolve("Hub One", nodes) == "hub1"
        assert ana.resolve("hub one", nodes) == "hub1"
        assert ana.resolve("hub1", nodes) == "hub1"

    def test_resolve_unknown_raises_keyerror(self):
        with pytest.raises(KeyError):
            ana.resolve("nope", make_graph_doc()["nodes"])

    def test_label_of_fallback(self):
        assert ana.label_of("missing", {}) == "missing"

    def test_load_graph_filters_and_metadata(self, graph_path):
        G, nodes, total, metadata = ana.load_graph(graph_path)
        # 13 nodes total; the giant component drops the isolated node only
        assert total == 13
        assert G.number_of_nodes() == 12
        assert "iso" not in G
        assert "hub3" in G
        # selfloop removed
        assert nx.number_of_selfloops(G) == 0
        # edge attributes preserved
        assert G["hub1"]["shared1"]["relation"] == "related_to"
        assert metadata["god_nodes"][0]["id"] == "hub1"

    def test_load_graph_missing_file_exits(self, tmp_path, capsys):
        with pytest.raises(SystemExit):
            ana.load_graph(tmp_path / "nope.json")

    def test_main_end_to_end(self, graph_path, monkeypatch, capsys):
        monkeypatch.setattr(sys, "argv", [
            "analysis/node_analysis.py", "--graph", str(graph_path),
            "--sources", "hub1", "--targets", "Hub Two", "--seed", "1",
        ])
        ana.main()  # exercises every report_* section incl. spectral
        out = capsys.readouterr().out
        assert "algebraic connectivity" in out
        assert "Adamic-Adar" in out
        assert "Personalized PageRank" in out
        assert "hub1 -> Hub Two" in out or "Hub One -> Hub Two" in out


# ======================================================================
# analysis/link_prediction
# ======================================================================

class TestCandidatePairs:
    def test_non_adjacent_eligible_pairs(self, G):
        pairs = lp.candidate_pairs(G, min_degree=3)
        assert ("hub1", "hub2") in pairs
        assert ("hub1", "hub3") in pairs
        # adjacent / low-degree pairs are never candidates
        assert ("hub1", "shared1") not in pairs
        assert all(not G.has_edge(a, b) for a, b in pairs)

    def test_shared_neighbours(self, G):
        assert lp.shared_neighbours(G, "hub1", "hub2") == {"shared1", "shared2"}


class TestAdamicAdar:
    def test_scores_and_explainability(self, G):
        id2lab = {n: n for n in G.nodes()}
        id2lab["hub1"] = "Hub One"
        rows, scored = lp.adamic_adar_candidates(G, id2lab, min_degree=3,
                                                 max_candidates=150)
        by_pair = {(r["a"], r["b"]): r for r in rows}
        # hub1-hub2 share 2 degree-3 neighbours -> positive score
        row = by_pair[("hub1", "hub2")]
        assert row["score"] > 0
        assert row["shared_neighbors"] == 2
        assert row["cross_community"] is True
        assert row["label_a"] == "Hub One"
        # hub1-hub3 share nothing -> filtered out (score <= 0)
        assert ("hub1", "hub3") not in by_pair
        # deterministic order: descending score, then (a, b)
        scores = [r["score"] for r in rows]
        assert scores == sorted(scores, reverse=True)

    def test_no_pairs(self):
        empty = nx.Graph()
        empty.add_node("a")
        rows, scored = lp.adamic_adar_candidates(empty, {}, 3, 10)
        assert rows == [] and scored == 0


class TestPprProfiles:
    def test_excludes_neighbours_and_ranks_structural_peers(self, G):
        seeds = [{"id": "hub1", "label": "Hub One"}]
        profiles = lp.ppr_profiles(G, {}, seeds, top_k=5)
        ids = [rec["id"] for rec in profiles["hub1"]]
        assert "hub1" not in ids and "shared1" not in ids  # seed + neighbours
        assert ids[0] == "hub2"  # strongest structural similarity
        assert "hub3" in ids
        assert "iso" not in ids  # never part of the giant component

    def test_unknown_seed_skipped(self, G):
        assert lp.ppr_profiles(G, {}, [{"id": "ghost"}]) == {}


class TestValidate:
    def test_fresh_doc_passes(self, graph_path, G):
        doc = lp.build_doc(graph_path, min_degree=3, max_candidates=150,
                           with_spectral=False)
        assert lp.validate(doc, G) == []

    def test_detects_adjacent_candidate(self, graph_path, G):
        doc = lp.build_doc(graph_path, min_degree=3, max_candidates=150,
                           with_spectral=False)
        G.add_edge("hub1", "hub2")
        problems = lp.validate(doc, G)
        assert any("candidate now adjacent" in p for p in problems)

    def test_detects_ordering_drift(self, graph_path, G):
        # two candidates stored in the wrong order (canonical sort is
        # descending score, then (a, b))
        doc = {"candidates": [
            {"a": "hub2", "b": "hub3", "score": 0.5},
            {"a": "hub1", "b": "hub2", "score": 1.0},
        ]}
        problems = lp.validate(doc, G)
        assert any("ordering drifted" in p for p in problems)

    def test_build_doc_shape(self, graph_path):
        doc = lp.build_doc(graph_path, min_degree=3, max_candidates=150,
                           with_spectral=False)
        assert doc["params"]["method"] == "adamic_adar"
        assert doc["params"]["min_degree"] == 3
        assert doc["summary"]["candidates"] == len(doc["candidates"])
        assert "generated" in doc
        assert set(doc["ppr_similar"]) == {"hub1"}  # the metadata god node


# ======================================================================
# analysis/role_query
# ======================================================================

def role_record(nid, label, **metrics):
    fp = {"degree": 0, "in_degree": 0, "out_degree": 0, "pagerank": 0.0,
          "betweenness": 0.0, "clustering": 0.0, "k_core": 1}
    fp.update(metrics)
    return {"id": nid, "label": label, "roles": [], "metrics": fp}


def make_roles_doc():
    nodes = [
        role_record("hub", "Hub", degree=9, out_degree=6, in_degree=3,
                    k_core=5, pagerank=0.2, betweenness=0.8, clustering=0.0),
        role_record("sink", "Sink", degree=9, out_degree=1, in_degree=8,
                    k_core=4, pagerank=0.1, betweenness=0.3, clustering=0.0),
        role_record("mod", "Module", degree=3, out_degree=1, in_degree=2,
                    k_core=3, pagerank=0.01, betweenness=0.0, clustering=0.9),
        role_record("edge", "Edge", degree=1, in_degree=1, k_core=1,
                    pagerank=0.001, clustering=0.0),
    ]
    fps = [n["metrics"] for n in nodes]
    thresholds = nrl.compute_thresholds(fps)
    for n in nodes:
        n["roles"] = nrl.classify(n["metrics"], thresholds)
    return {
        "generated_at": "2026-01-01T00:00:00Z",
        "source_graph": "test",
        "rules": {name: expr for name, expr in nrl.ROLE_DEFS},
        "thresholds": thresholds,
        "summary": {"node_count": len(nodes)},
        "nodes": nodes,
    }


@pytest.fixture
def roles_doc():
    return make_roles_doc()


class TestRoleQueries:
    def test_filter_by_role_and_sort(self, roles_doc, capsys):
        rq.cmd_nodes(roles_doc, ["Bottleneck"], [], "pagerank", 10, False)
        out = capsys.readouterr().out
        assert "Hub" in out
        assert "Sink" not in out and "Module" not in out and "Edge" not in out

    def test_exclude_role(self, roles_doc, capsys):
        rq.cmd_nodes(roles_doc, ["Core backbone"], ["Bottleneck"],
                     "pagerank", 10, False)
        out = capsys.readouterr().out
        assert "Sink" in out and "Hub" not in out

    def test_top_truncates(self, roles_doc, capsys):
        rq.cmd_nodes(roles_doc, [], [], "pagerank", 1, False)
        out = capsys.readouterr().out
        assert "(1 node(s))" in out

    def test_json_output(self, roles_doc, capsys):
        rq.cmd_nodes(roles_doc, ["Periphery"], [], "pagerank", 10, True)
        rows = json.loads(capsys.readouterr().out)
        assert [r["id"] for r in rows] == ["edge"]

    def test_no_matches(self, roles_doc, capsys):
        rq.cmd_nodes(roles_doc, ["Nonexistent"], [], "pagerank", 10, False)
        assert "no nodes match" in capsys.readouterr().out

    def test_node_lookup_exact_and_fuzzy(self, roles_doc, capsys):
        rq.cmd_node(roles_doc, "Hub", fuzzy=False)
        assert "Hub" in capsys.readouterr().out
        rq.cmd_node(roles_doc, "mod", fuzzy=True)
        assert "Module" in capsys.readouterr().out

    def test_node_lookup_miss_exits(self, roles_doc):
        with pytest.raises(SystemExit):
            rq.cmd_node(roles_doc, "ghost", fuzzy=False)

    def test_missing_roles_file_exits(self, tmp_path):
        with pytest.raises(SystemExit):
            rq.load(tmp_path / "nope.json")


class TestRoleValidation:
    def test_consistent_doc_passes(self, roles_doc, monkeypatch):
        monkeypatch.setattr(rq, "ANCHOR_CASES", [])
        assert rq.cmd_validate(roles_doc) == 0

    def test_tampered_roles_fail(self, roles_doc, monkeypatch):
        monkeypatch.setattr(rq, "ANCHOR_CASES", [])
        roles_doc["nodes"][0]["roles"] = ["Periphery"]
        assert rq.cmd_validate(roles_doc) == 1

    def test_stale_thresholds_fail(self, roles_doc, monkeypatch):
        monkeypatch.setattr(rq, "ANCHOR_CASES", [])
        roles_doc["thresholds"]["pagerank_p95"] = 999.0
        assert rq.cmd_validate(roles_doc) == 1

    def test_empty_artifact_fails(self, monkeypatch):
        assert rq.cmd_validate({"nodes": []}) == 1

    def test_anchor_absence_fails(self, roles_doc):
        # default ANCHOR_CASES reference real wiki entities absent here
        assert rq.cmd_validate(roles_doc) == 1
