"""Tests for scripts/triples/visualize.py color helpers (graphviz is stubbed)."""

import sys
import types

from script_loader import load_script

gv = sys.modules.get("graphviz")
if gv is None:
    gv = types.SimpleNamespace(Digraph=object)
    sys.modules["graphviz"] = gv
viz = load_script("triples/visualize")


class TestInferType:
    def test_known_type(self):
        assert viz._infer_type("SIRT1", {"SIRT1": "gene"}) == "gene"

    def test_unknown_defaults(self):
        assert viz._infer_type("Mystery", {}) == "unknown"


class TestPredColor:
    def test_identity_bucket(self):
        assert viz._pred_color("is") == "#94A3B8"

    def test_inhibition_bucket(self):
        assert viz._pred_color("inhibits") == "#DC2626"

    def test_activation_bucket(self):
        assert viz._pred_color("activates") == "#65A30D"

    def test_causation_bucket(self):
        assert viz._pred_color("causes") == "#B91C1C"

    def test_fallback_is_stable(self):
        c1, c2 = viz._pred_color("frobnicate"), viz._pred_color("frobnicate")
        assert c1 == c2 and c1 in viz.EDGE_COLORS


class TestNodeColors:
    def test_hub_and_unknown(self):
        assert viz.NODE_COLORS["hub"] == "#FDE68A"
        assert viz.NODE_COLORS["unknown"] == "#F1F5F9"
