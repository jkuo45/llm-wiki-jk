#!/usr/bin/env python3
"""Shared biological role classifier over the per-node metric fingerprint.

Single source of truth for the auto-role rules used by:
  - scripts/03_rebuild_from_triples.py (bakes roles into nodes.json /
    web/data/node_roles.json at rebuild time)
  - scripts/04_role_query.py (queries + live-consistency validation)

All thresholds are percentiles computed from the LIVE node table at call
time — no absolute constants — so the classifier stays calibrated as the
graph grows or shifts.

A node's "fingerprint" is the metric dict emitted in node_roles.json:
  {degree, in_degree, out_degree, pagerank, betweenness, clustering, k_core}
"""

from __future__ import annotations

# Human-readable rule catalog (emitted into node_roles.json.rules).
# Each entry pairs the role name with its operational expression.
ROLE_DEFS: list[tuple[str, str]] = [
    ("Spreader", "out_degree > in_degree AND out_degree >= 3 AND k_core >= 2"),
    ("Sink", "in_degree > out_degree AND in_degree >= p90(in_degree) AND k_core >= 2"),
    ("Master regulator", "pagerank >= p95 AND out_degree >= p95"),
    ("Bottleneck", "betweenness >= p90(betweenness)"),
    ("Module member", "clustering > 0.5"),
    ("Core backbone", "k_core >= max_k_core - 1"),
    ("Periphery", "k_core == 1"),
]


def percentile(sorted_vals: list[float], p: float) -> float:
    """Linear-interpolated percentile of an ascending-sorted list."""
    if not sorted_vals:
        return 0.0
    if len(sorted_vals) == 1:
        return float(sorted_vals[0])
    k = (len(sorted_vals) - 1) * p / 100.0
    f = int(k)
    c = min(f + 1, len(sorted_vals) - 1)
    return sorted_vals[f] + (sorted_vals[c] - sorted_vals[f]) * (k - f)


def _fingerprint(n: dict) -> dict[str, float]:
    """Extract the numeric fingerprint from a raw graph node or a
    node_roles.json record (accepts both key styles)."""
    m = n.get("metrics") if isinstance(n.get("metrics"), dict) else n

    def g(*keys: str) -> float:
        for k in keys:
            v = m.get(k)
            if v is not None:
                try:
                    return float(v)
                except (TypeError, ValueError):
                    pass
        return 0.0

    return {
        "degree": g("degree"),
        "in_degree": g("in_degree"),
        "out_degree": g("out_degree"),
        "pagerank": g("pagerank"),
        "betweenness": g("betweenness_centrality", "betweenness"),
        "clustering": g("clustering_coefficient", "clustering"),
        "k_core": g("k_core_number", "k_core"),
    }


def compute_thresholds(fingerprints: list[dict[str, float]]) -> dict:
    """Derive all classifier cutoffs from the live fingerprint table."""
    btw = sorted(f["betweenness"] for f in fingerprints)
    pr = sorted(f["pagerank"] for f in fingerprints)
    out = sorted(f["out_degree"] for f in fingerprints)
    ind = sorted(f["in_degree"] for f in fingerprints)
    max_core = max((f["k_core"] for f in fingerprints), default=0)
    return {
        "betweenness_p90": percentile(btw, 90),
        "pagerank_p90": percentile(pr, 90),
        "pagerank_p95": percentile(pr, 95),
        "out_degree_p90": percentile(out, 90),
        "out_degree_p95": percentile(out, 95),
        "in_degree_p90": percentile(ind, 90),
        "max_k_core": max_core,
    }


def classify(fp: dict[str, float], t: dict) -> list[str]:
    """Apply ROLE_DEFS to one fingerprint against live thresholds."""
    roles: list[str] = []
    if fp["out_degree"] > fp["in_degree"] and fp["out_degree"] >= 3 and fp["k_core"] >= 2:
        roles.append("Spreader")
    if (
        fp["in_degree"] > fp["out_degree"]
        and fp["in_degree"] >= t["in_degree_p90"]
        and fp["k_core"] >= 2
    ):
        roles.append("Sink")
    if fp["pagerank"] >= t["pagerank_p95"] and fp["out_degree"] >= t["out_degree_p95"]:
        roles.append("Master regulator")
    if fp["betweenness"] >= t["betweenness_p90"]:
        roles.append("Bottleneck")
    if fp["clustering"] > 0.5:
        roles.append("Module member")
    if t["max_k_core"] >= 5 and fp["k_core"] >= t["max_k_core"] - 1:
        roles.append("Core backbone")
    if fp["k_core"] == 1:
        roles.append("Periphery")
    return roles


def classify_all(raw_nodes: list[dict]) -> tuple[dict[str, list[str]], dict]:
    """Classify every node in a raw graph-node table (graph.json style).

    Returns ({node_id: [roles]}, thresholds).
    """
    fps = {n["id"]: _fingerprint(n) for n in raw_nodes}
    thresholds = compute_thresholds(list(fps.values()))
    return {nid: classify(fp, thresholds) for nid, fp in fps.items()}, thresholds
