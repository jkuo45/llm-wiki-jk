#!/usr/bin/env python3
"""Predicted missing connections for the wiki knowledge graph (NetworkX).

Reads graphify-out/graph.json (the canonical knowledge-graph artifact) and emits
web/public/data/link-prediction.json: ranked non-adjacent entity pairs that the
topology suggests are related but no document states yet. Surfaced in the
Graph-mode "Predicted Connections" panel as a knowledge-gap finder.

Computed sections:
  1. Adamic-Adar candidates -- every non-adjacent pair (both endpoints
     degree >= min_degree) scored by nx.adamic_adar_index, with shared-
     neighbour explainability and a cross-community flag.
  2. Personalized-PageRank similarity profiles -- seeded at each metadata
     god node, ranking similar non-neighbour entities.
  3. (--spectral, optional) Effective-resistance z-scores between god-node
     pairs against a random-pair null. Ported from scripts/04_node_analysis.py;
     too heavy for routine rebuilds -- run manually for case studies.

Determinism: candidates are ordered by (-score, a, b) and PPR lists by
(-score, id), so identical topology produces byte-stable output. The build
(03_rebuild_from_triples.py) runs this script before hashing web/public/data/*.json,
so the artifact participates in the version cache tag without churning it.

Run:
  uv run --with networkx python3 scripts/04_link_prediction.py
  uv run --with networkx python3 scripts/04_link_prediction.py --top 20
  uv run --with networkx --with scipy python3 scripts/04_link_prediction.py \
      --spectral
  uv run --with networkx python3 scripts/04_link_prediction.py --validate
"""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
import time
from datetime import datetime, timezone
from itertools import combinations
from pathlib import Path

import networkx as nx

ROOT = Path(__file__).resolve().parent.parent


def short_commit(commit: str) -> str:
    """Abbreviate a git commit hash to the canonical short form (git --short).

    graphify-out/graph.json stores full 40-char SHAs in ``built_at_commit``,
    while the wiki build uses ``git rev-parse --short HEAD`` (8 chars). Collapsing
    both to the short form makes the two layers render matching-length
    provenance hashes on pages and in artifacts.
    """
    if not commit:
        return ""
    try:
        out = subprocess.run(
            ["git", "rev-parse", "--short", commit],
            cwd=str(ROOT),
            capture_output=True,
            text=True,
            timeout=10,
        ).stdout.strip()
        if out:
            return out
    except Exception:
        pass
    return commit[:8]
DEFAULT_GRAPH = ROOT / "graphify-out" / "graph.json"
DEFAULT_OUT = ROOT / "web" / "public" / "data" / "link-prediction.json"

MIN_DEGREE = 3          # candidate endpoints must both reach this degree
MAX_CANDIDATES = 150    # cap emitted Adamic-Adar pairs
PPR_ALPHA = 0.85        # matches the graph-wide pagerank convention
PPR_TOP_K = 8           # similar entities kept per god-node seed
NULL_SAMPLE_SIZE = 300  # random pairs per spectral null sample
TOL = 1e-9              # eigenvalue threshold for the pseudoinverse


# ------------------------------------------------------------------
# Graph loading (same conventions as scripts/04_node_analysis.py)
# ------------------------------------------------------------------
def load_graph(path: Path) -> tuple[nx.Graph, dict[str, str], dict]:
    """Load the undirected giant component + id->label map + metadata."""
    if not path.exists():
        sys.exit(f"graph not found at {path}")
    data = json.loads(path.read_text(encoding="utf-8"))
    G = nx.Graph()
    G.add_nodes_from((n["id"], n) for n in data["nodes"])
    for link in data["links"]:
        attrs = {k: v for k, v in link.items() if k not in ("source", "target")}
        G.add_edge(link["source"], link["target"], **attrs)
    G.remove_edges_from(nx.selfloop_edges(G))
    cc = max(nx.connected_components(G), key=len)
    id2lab = {n["id"]: n.get("label", n["id"]) for n in data["nodes"]}
    return G.subgraph(cc).copy(), id2lab, data.get("metadata", {})


def label_of(node_id: str, id2lab: dict[str, str]) -> str:
    return id2lab.get(node_id, node_id)


# ------------------------------------------------------------------
# Section 1: Adamic-Adar missing-link candidates
# ------------------------------------------------------------------
def candidate_pairs(G: nx.Graph, min_degree: int) -> list[tuple[str, str]]:
    """Non-adjacent pairs where both endpoints clear the degree floor."""
    eligible = [n for n, d in G.degree() if d >= min_degree]
    pairs: list[tuple[str, str]] = []
    for a, b in combinations(sorted(eligible), 2):
        if not G.has_edge(a, b):
            pairs.append((a, b))
    return pairs


def shared_neighbours(G: nx.Graph, a: str, b: str) -> set[str]:
    return set(G[a]) & set(G[b])


def adamic_adar_candidates(
    G: nx.Graph,
    id2lab: dict[str, str],
    min_degree: int,
    max_candidates: int,
) -> tuple[list[dict], int]:
    """Rank non-adjacent pairs by Adamic-Adar; explain each hit."""
    pairs = candidate_pairs(G, min_degree)
    pairs_scored = len(pairs)
    if not pairs:
        return [], 0

    scores = {(u, v): s for u, v, s in nx.adamic_adar_index(G, pairs)}

    community_of = {
        n: G.nodes[n].get("community") for n in G.nodes() if "community" in G.nodes[n]
    }
    degree_order = sorted(G.nodes(), key=lambda n: (-G.degree(n), n))

    rows: list[dict] = []
    for (a, b), score in scores.items():
        if score <= 0:
            continue
        shared = shared_neighbours(G, a, b)
        top_shared = sorted(
            shared,
            key=lambda n: (-G.degree(n), n),
        )[:3]
        ca, cb = community_of.get(a), community_of.get(b)
        cross = ca is not None and cb is not None and ca != cb
        rows.append({
            "a": a,
            "b": b,
            "label_a": label_of(a, id2lab),
            "label_b": label_of(b, id2lab),
            "score": round(score, 6),
            "shared_neighbors": len(shared),
            "shared_top": [label_of(n, id2lab) for n in top_shared],
            "cross_community": cross,
            "community_pair": [ca, cb],
        })

    rows.sort(key=lambda r: (-r["score"], r["a"], r["b"]))
    # Deterministic tie-break on degree order is implicit via sort above;
    # degree_order retained for potential future features.
    _ = degree_order
    return rows[:max_candidates], pairs_scored


# ------------------------------------------------------------------
# Section 2: Personalized-PageRank similarity profiles
# ------------------------------------------------------------------
def ppr_profiles(
    G: nx.Graph,
    id2lab: dict[str, str],
    seeds: list[dict],
    top_k: int = PPR_TOP_K,
    alpha: float = PPR_ALPHA,
) -> dict[str, list[dict]]:
    """For each seed, rank similar NON-neighbour entities by PPR mass.

    Direct neighbours always carry PPR weight by construction, so they are
    excluded to keep the profile a discovery surface rather than an adjacency
    restatement.
    """
    out: dict[str, list[dict]] = {}
    nodes = list(G.nodes())
    for seed_rec in seeds:
        seed = seed_rec.get("id") if isinstance(seed_rec, dict) else seed_rec
        if seed not in G:
            continue
        personalization = {n: (1.0 if n == seed else 0.0) for n in nodes}
        pr = nx.pagerank(G, alpha=alpha, personalization=personalization)
        neighbours = set(G[seed]) | {seed}
        ranked = sorted(
            (
                (n, s)
                for n, s in pr.items()
                if n not in neighbours and s > 0
            ),
            key=lambda t: (-t[1], t[0]),
        )[:top_k]
        out[seed] = [
            {"id": n, "label": label_of(n, id2lab), "score": round(s, 8)}
            for n, s in ranked
        ]
    return out


# ------------------------------------------------------------------
# Section 3 (--spectral): effective resistance vs random-pair null
# ------------------------------------------------------------------
def spectral_resistance(
    G: nx.Graph,
    seeds: list[dict],
    prng: "np.random.Generator",
) -> list[dict]:
    """God-node pair effective resistances z-scored against a null sample.

    Ported from scripts/04_node_analysis.py: dense eigh on the giant-component
    Laplacian (scipy eigsh(which='SM') returns the trivial zero mode; svds is
    not a valid commute-time proxy), pseudoinverse from thresholded
    eigenvalues.
    """
    import numpy as np
    from scipy.sparse.csgraph import laplacian

    pos = {n: i for i, n in enumerate(G.nodes())}
    A = nx.to_scipy_sparse_array(G, format="csr").astype(np.float64)
    Ld = laplacian(A, normed=False).toarray()
    evals, evecs = np.linalg.eigh(Ld)
    inv = np.where(evals > TOL, 1.0 / evals, 0.0)
    pinvL = (evecs * inv) @ evecs.T
    diag = np.diag(pinvL)

    def rdist(a: str, b: str) -> float:
        return float(diag[pos[a]] + diag[pos[b]] - 2 * pinvL[pos[a], pos[b]])

    ids = [s["id"] if isinstance(s, dict) else s for s in seeds]
    ids = [i for i in ids if i in G]

    null_nodes = list(G.nodes())
    null_vals: list[float] = []
    for _ in range(min(NULL_SAMPLE_SIZE, len(null_nodes) // 2)):
        x, y = prng.choice(null_nodes, size=2, replace=False)
        null_vals.append(rdist(x, y))
    mean = float(np.mean(null_vals))
    std = float(np.std(null_vals))

    rows: list[dict] = []
    for a, b in combinations(sorted(ids), 2):
        r = rdist(a, b)
        z = (r - mean) / std if std else float("nan")
        rows.append({
            "a": a,
            "b": b,
            "resistance": round(r, 6),
            "z_vs_null": round(z, 4),
        })
    rows.sort(key=lambda r: (r["z_vs_null"], r["a"], r["b"]))
    return rows


# ------------------------------------------------------------------
# Validation (mirrors 04_role_query.py's drift-adaptive philosophy)
# ------------------------------------------------------------------
def validate(doc: dict, G: nx.Graph) -> list[str]:
    """Recompute checks against the artifact; no hardcoded expectations.

      a. Adjacency  : every candidate must be genuinely non-adjacent now.
      b. Null sanity: mean top-K candidate score must beat the median
         Adamic-Adar of random same-degree pairs (else the ranking is noise).
      c. Ordering   : stored order must match a fresh deterministic re-sort.
    """
    problems: list[str] = []

    for row in doc.get("candidates", []):
        if G.has_edge(row["a"], row["b"]):
            problems.append(f"candidate now adjacent: {row['a']} - {row['b']}")

    cands = doc.get("candidates", [])
    if cands:
        top_scores = [c["score"] for c in cands[:10]]
        eligible = [n for n, d in G.degree() if d >= MIN_DEGREE]
        import random

        rng = random.Random(42)
        sampled: list[float] = []
        seen = 0
        while len(sampled) < NULL_SAMPLE_SIZE and seen < 20000:
            seen += 1
            a, b = rng.sample(eligible, 2)
            if G.has_edge(a, b):
                continue
            s = next(nx.adamic_adar_index(G, [(a, b)]))[2]
            sampled.append(s)
        null_median = sorted(sampled)[len(sampled) // 2] if sampled else 0.0
        top_mean = sum(top_scores) / len(top_scores)
        if top_mean <= null_median:
            problems.append(
                f"top-10 mean score {top_mean:.3f} <= null median "
                f"{null_median:.3f} — ranking indistinguishable from noise"
            )

        expected = sorted(cands, key=lambda r: (-r["score"], r["a"], r["b"]))
        if [r["a"] for r in expected] != [r["a"] for r in cands] or [
            r["b"] for r in expected
        ] != [r["b"] for r in cands]:
            problems.append("candidate ordering drifted from canonical sort")
    return problems


# ------------------------------------------------------------------
# Main
# ------------------------------------------------------------------
def build_doc(
    graph_path: Path,
    min_degree: int,
    max_candidates: int,
    with_spectral: bool,
) -> dict:
    G, id2lab, metadata = load_graph(graph_path)

    candidates, pairs_scored = adamic_adar_candidates(
        G, id2lab, min_degree, max_candidates
    )
    print(f"scored {pairs_scored} non-adjacent pairs -> {len(candidates)} candidates")

    seeds = metadata.get("god_nodes", [])
    ppr = ppr_profiles(G, id2lab, seeds)
    print(f"PPR profiles for {len(ppr)} god-node seeds")

    spectral = None
    if with_spectral:
        import numpy as np

        prng = np.random.default_rng(1)  # matches 04's RANDOM_SEED
        spectral = spectral_resistance(G, seeds, prng)
        print(f"spectral resistances for {len(spectral)} god-node pairs")

    doc = {
        "generated": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "source_graph": "graphify-out/graph.json",
        "graph_build": "",  # filled by caller when graph carries built_at_commit
        "params": {
            "method": "adamic_adar",
            "min_degree": min_degree,
            "max_candidates": max_candidates,
            "ppr_alpha": PPR_ALPHA,
            "ppr_top_k": PPR_TOP_K,
            "spectral": bool(with_spectral),
        },
        "summary": {
            "pairs_scored": pairs_scored,
            "candidates": len(candidates),
            "cross_community": sum(1 for c in candidates if c["cross_community"]),
            "ppr_seeds": len(ppr),
        },
        "candidates": candidates,
        "ppr_similar": ppr,
    }
    if spectral is not None:
        doc["god_node_resistances"] = spectral
    return doc


def main() -> int:
    ap = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter
    )
    ap.add_argument("--graph", type=Path, default=DEFAULT_GRAPH,
                    help="input graph.json (default: graphify-out/graph.json)")
    ap.add_argument("--out", type=Path, default=None,
                    help="output path (default: <graph dir>/link-prediction.json)")
    ap.add_argument("--min-degree", type=int, default=MIN_DEGREE,
                    help=f"candidate endpoint degree floor (default {MIN_DEGREE})")
    ap.add_argument("--max-candidates", type=int, default=MAX_CANDIDATES,
                    help=f"cap on emitted pairs (default {MAX_CANDIDATES})")
    ap.add_argument("--top", type=int, default=None,
                    help="print top-N candidates instead of writing the file")
    ap.add_argument("--spectral", action="store_true",
                    help="also compute effective-resistance z-scores (needs scipy)")
    ap.add_argument("--validate", action="store_true",
                    help="validate an existing link-prediction.json and exit")
    ap.add_argument("--quiet", action="store_true",
                    help="suppress progress output (build mode)")
    args = ap.parse_args()

    def log(msg: str) -> None:
        if not args.quiet:
            print(msg)

    out_path = args.out or DEFAULT_OUT

    if args.validate:
        G, _, _ = load_graph(args.graph)
        doc = json.loads(out_path.read_text(encoding="utf-8"))
        problems = validate(doc, G)
        if problems:
            print("VALIDATION FAILED:")
            for p in problems:
                print(f"  - {p}")
            return 1
        log(f"validation OK ({len(doc.get('candidates', []))} candidates)")
        return 0

    doc = build_doc(args.graph, args.min_degree, args.max_candidates, args.spectral)
    try:
        raw = json.loads(Path(args.graph).read_text(encoding="utf-8"))
        doc["graph_build"] = short_commit(raw.get("built_at_commit", ""))
    except (OSError, json.JSONDecodeError):
        pass

    if args.top:
        for row in doc["candidates"][: args.top]:
            flag = " ✚cross-community" if row["cross_community"] else ""
            shared = ", ".join(row["shared_top"])
            log(
                f"{row['label_a']} <-> {row['label_b']}  "
                f"aa={row['score']:.3f} shared={row['shared_neighbors']}{flag}"
                f"  via [{shared}]"
            )
        return 0

    out_path.write_text(
        json.dumps(doc, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    log(f"wrote {out_path} ({len(doc['candidates'])} candidates)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
