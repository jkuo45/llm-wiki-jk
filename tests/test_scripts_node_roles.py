"""Tests for scripts/lib/node_roles.py — the shared biological role classifier."""

import pytest

from script_loader import load_script

nrl = load_script("lib/node_roles")


# ----------------------------------------------------------------------
# percentile
# ----------------------------------------------------------------------

class TestPercentile:
    def test_empty(self):
        assert nrl.percentile([], 90) == 0.0

    def test_single_value(self):
        assert nrl.percentile([5.0], 90) == 5.0

    def test_exact_index(self):
        assert nrl.percentile(list(range(101)), 50) == 50.0

    def test_interpolates_between_ranks(self):
        # k = 9 * 0.9 = 8.1 -> interpolate between 8 and 9
        assert nrl.percentile(list(range(10)), 90) == pytest.approx(8.1)

    def test_p95_of_uniform(self):
        vals = list(range(1, 101))  # 1..100
        assert nrl.percentile(vals, 95) == pytest.approx(95.05)


# ----------------------------------------------------------------------
# _fingerprint
# ----------------------------------------------------------------------

class TestFingerprint:
    def test_raw_graph_node_keys(self):
        fp = nrl._fingerprint({
            "degree": 7,
            "in_degree": 4,
            "out_degree": 3,
            "pagerank": "0.02",
            "betweenness_centrality": 0.5,
            "clustering_coefficient": 0.25,
            "k_core_number": 3,
        })
        assert fp == {
            "degree": 7.0, "in_degree": 4.0, "out_degree": 3.0,
            "pagerank": 0.02, "betweenness": 0.5, "clustering": 0.25,
            "k_core": 3.0,
        }

    def test_node_roles_record_keys(self):
        fp = nrl._fingerprint({
            "id": "x", "label": "X",
            "metrics": {"degree": 2, "betweenness": 0.1, "k_core": 1},
        })
        assert fp["degree"] == 2.0
        assert fp["betweenness"] == 0.1
        assert fp["k_core"] == 1.0
        assert fp["in_degree"] == 0.0  # missing -> 0

    def test_missing_and_junk_values_default_to_zero(self):
        fp = nrl._fingerprint({"degree": "not-a-number", "pagerank": None})
        assert fp["degree"] == 0.0
        assert fp["pagerank"] == 0.0


# ----------------------------------------------------------------------
# compute_thresholds
# ----------------------------------------------------------------------

class TestComputeThresholds:
    def test_thresholds_from_known_table(self):
        fps = [{"betweenness": i / 10, "pagerank": i / 100,
                "out_degree": i, "in_degree": 10 - i, "k_core": 1}
               for i in range(1, 11)]
        t = nrl.compute_thresholds(fps)
        assert t["max_k_core"] == 1
        assert t["out_degree_p90"] == pytest.approx(9.1)
        assert t["in_degree_p90"] == pytest.approx(8.1)
        assert t["pagerank_p90"] == pytest.approx(0.091)
        assert t["pagerank_p95"] == pytest.approx(0.0955)
        assert t["betweenness_p90"] == pytest.approx(0.91)

    def test_empty_table(self):
        t = nrl.compute_thresholds([])
        assert t["max_k_core"] == 0
        assert t["betweenness_p90"] == 0.0


# ----------------------------------------------------------------------
# classify
# ----------------------------------------------------------------------

def thresholds_for(**overrides):
    base = {
        "betweenness_p90": 0.5, "pagerank_p90": 0.05, "pagerank_p95": 0.08,
        "out_degree_p90": 5.0, "out_degree_p95": 6.0, "in_degree_p90": 5.0,
        "max_k_core": 5,
    }
    base.update(overrides)
    return base


class TestClassify:
    def test_spreader(self):
        fp = {"out_degree": 6, "in_degree": 1, "k_core": 3,
              "pagerank": 0, "betweenness": 0, "clustering": 0, "degree": 7}
        assert nrl.classify(fp, thresholds_for()) == ["Spreader"]

    def test_spreader_requires_k_core_2(self):
        fp = {"out_degree": 6, "in_degree": 1, "k_core": 1,
              "pagerank": 0, "betweenness": 0, "clustering": 0, "degree": 7}
        assert nrl.classify(fp, thresholds_for()) == ["Periphery"]

    def test_sink(self):
        fp = {"in_degree": 6, "out_degree": 1, "k_core": 2,
              "pagerank": 0, "betweenness": 0, "clustering": 0, "degree": 7}
        assert nrl.classify(fp, thresholds_for()) == ["Sink"]

    def test_sink_requires_beating_in_degree_threshold(self):
        fp = {"in_degree": 4, "out_degree": 1, "k_core": 2,
              "pagerank": 0, "betweenness": 0, "clustering": 0, "degree": 5}
        assert "Sink" not in nrl.classify(fp, thresholds_for())

    def test_master_regulator(self):
        fp = {"pagerank": 0.09, "out_degree": 6, "in_degree": 2, "k_core": 3,
              "betweenness": 0, "clustering": 0, "degree": 8}
        assert "Master regulator" in nrl.classify(fp, thresholds_for())

    def test_master_regulator_needs_both_conditions(self):
        fp = {"pagerank": 0.09, "out_degree": 2, "in_degree": 1, "k_core": 3,
              "betweenness": 0, "clustering": 0, "degree": 3}
        assert "Master regulator" not in nrl.classify(fp, thresholds_for())

    def test_bottleneck(self):
        fp = {"betweenness": 0.6, "pagerank": 0, "out_degree": 0,
              "in_degree": 0, "clustering": 0, "k_core": 1, "degree": 4}
        roles = nrl.classify(fp, thresholds_for())
        assert "Bottleneck" in roles and "Periphery" in roles

    def test_module_member(self):
        fp = {"clustering": 0.9, "out_degree": 0, "in_degree": 0, "k_core": 3,
              "pagerank": 0, "betweenness": 0, "degree": 4}
        assert nrl.classify(fp, thresholds_for()) == ["Module member"]

    def test_core_backbone_requires_max_k_core_ge_5(self):
        fp = {"k_core": 5, "out_degree": 0, "in_degree": 0,
              "pagerank": 0, "betweenness": 0, "clustering": 0, "degree": 5}
        assert "Core backbone" in nrl.classify(fp, thresholds_for())
        assert "Core backbone" not in nrl.classify(
            fp, thresholds_for(max_k_core=3))

    def test_periphery(self):
        fp = {"k_core": 1, "out_degree": 0, "in_degree": 0,
              "pagerank": 0, "betweenness": 0, "clustering": 0, "degree": 1}
        assert nrl.classify(fp, thresholds_for()) == ["Periphery"]

    def test_multiple_roles_can_coexist(self):
        fp = {"out_degree": 6, "in_degree": 1, "k_core": 5, "pagerank": 0.09,
              "betweenness": 0.6, "clustering": 0.0, "degree": 7}
        roles = nrl.classify(fp, thresholds_for())
        assert "Spreader" in roles
        assert "Master regulator" in roles
        assert "Bottleneck" in roles
        assert "Core backbone" in roles


# ----------------------------------------------------------------------
# classify_all
# ----------------------------------------------------------------------

class TestClassifyAll:
    def test_roundtrip_on_raw_nodes(self):
        nodes = [
            {"id": "spread", "label": "Spread", "out_degree": 6,
             "in_degree": 1, "k_core": 3, "pagerank": 0.9,
             "betweenness_centrality": 0.0, "clustering_coefficient": 0.0,
             "degree": 7},
            {"id": "edge", "label": "Edge", "k_core": 1, "out_degree": 0,
             "in_degree": 1, "pagerank": 0.001,
             "betweenness_centrality": 0.0, "clustering_coefficient": 0.0,
             "degree": 1},
        ]
        roles, thresholds = nrl.classify_all(nodes)
        assert "Spreader" in roles["spread"]
        assert "Periphery" in roles["edge"]
        assert thresholds["max_k_core"] == 3

    def test_ids_stable_across_graph_modes(self):
        # norm() is the join key between triples/wiki/combined graphs
        from script_loader import load_script as _
        gc = _("lib/graph_common")
        assert gc.norm("SIRT1") == "sirt1"
        assert gc.norm("[[SIRT1]]") == "sirt1"
