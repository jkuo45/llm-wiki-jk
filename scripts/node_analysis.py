#!/usr/bin/env python3
"""Reproducible multi-node analysis of the wiki knowledge graph (NetworkX + SciPy).

Compares a set of *source* nodes against one or more *target* anchor nodes,
fully general over any entity set present in graphify-out/graph.json.

Metrics computed (on the undirected giant component):
  1. Shortest-path multiplicity + first-hop bridge nodes (NetworkX)
  2. Neighbor distinctness: degree, pairwise Jaccard, signature neighbors
  3. Adamic-Adar link-prediction proximity (every source x every target)
  4. k-core nesting depth
  5. Spectral: algebraic connectivity (lambda2) + Fiedler vector (dense eigh)
  6. Effective-resistance / commute distance vs each target, z-scored against
     a random-node null sample (pseudoinverse Laplacian via thresholded eigh)
  7. Personalized PageRank (random-walk flow) seeded at each target

Pre-computed metrics loaded from graph.json:
  - degree, in_degree, out_degree, pagerank, betweenness_centrality,
    clustering_coefficient, k_core_number, community_size, community_name

Graph-level metadata loaded from graph.json:
  - god_nodes, surprising_connections, community_labels, community_cohesion

Pitfalls handled (do not "fix" these):
  - scipy eigsh(which='SM') returns the trivial zero mode for the singular
    Laplacian and renders the Fiedler vector useless -> use dense eigh.
  - scipy svds (truncated largest components) is NOT a valid commute-time
    proxy -> build the pseudoinverse from thresholded eigenvalues.

Works on any graphify-out/graph.json. Node arguments accept either entity
label ("SIRT3") or graph id ("sirt3"), matched case-insensitively.

Run:
  uv run --with networkx --with scipy python3 scripts/node_analysis.py
  uv run --with networkx --with scipy python3 scripts/node_analysis.py \
      --sources comt mao --targets dopamine epinephrine
  uv run --with networkx --with scipy python3 scripts/node_analysis.py \
      --graph other-vault/graphify-out/graph.json
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

import networkx as nx
import numpy as np

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_GRAPH = ROOT / "graphify-out" / "graph.json"
RANDOM_SEED = 1
PPR_ALPHA = 0.85
NULL_SAMPLE_SIZE = 300
TOL = 1e-9


def normalize(name: str) -> str:
    return name.lower().replace(" ", "_").replace("-", "_")


def resolve(label: str, nodes: list[dict]) -> str:
    by_id = {n["id"] for n in nodes}
    lab2id = {normalize(n["label"]): n["id"] for n in nodes}
    nrm = normalize(label)
    if nrm in lab2id:
        return lab2id[nrm]
    if label in by_id or nrm in by_id:
        return label if label in by_id else nrm
    raise KeyError(f"no graph node for {label!r} (tried label and id)")


def label_of(node_id: str, id2lab: dict[str, str]) -> str:
    return id2lab.get(node_id, node_id)


def load_graph(
    path: Path,
) -> tuple[nx.Graph, list[dict], int, dict]:
    """Load graph with edge attributes and graph-level metadata.

    Returns (G, nodes_list, total_count, metadata) where metadata contains
    god_nodes, surprising_connections, community_labels, etc.
    """
    if not path.exists():
        sys.exit(f"graph not found at {path}")
    data = json.loads(path.read_text(encoding="utf-8"))
    G = nx.Graph()
    G.add_nodes_from((n["id"], n) for n in data["nodes"])
    # Load edges with full attributes (weight, relation, confidence, source_file)
    for link in data["links"]:
        attrs = {
            k: v
            for k, v in link.items()
            if k not in ("source", "target")
        }
        G.add_edge(link["source"], link["target"], **attrs)
    G.remove_edges_from(nx.selfloop_edges(G))
    total = G.number_of_nodes()
    cc = max(nx.connected_components(G), key=len)
    metadata = data.get("metadata", {})
    return G.subgraph(cc).copy(), data["nodes"], total, metadata


def section(num: int, title: str) -> None:
    print(f"\n{num}. {title}")


def report_graph_context(
    nodes: list[dict],
    metadata: dict,
    sources: list[str],
    targets: list[str],
    id2lab: dict[str, str],
) -> None:
    """Report pre-computed metrics and graph-level metadata for source/target nodes."""
    node_map = {n["id"]: n for n in nodes}

    section(0, "Pre-computed node metrics")
    for nid in sources + targets:
        n = node_map.get(nid, {})
        name = label_of(nid, id2lab)
        deg = n.get("degree", "?")
        pr = n.get("pagerank", "?")
        btw = n.get("betweenness_centrality", "?")
        cc = n.get("clustering_coefficient", "?")
        kc = n.get("k_core_number", "?")
        cid = n.get("community", "?")
        cname = n.get("community_name", "?")
        csize = n.get("community_size", "?")
        ind = n.get("in_degree", "?")
        outd = n.get("out_degree", "?")
        print(f"    {name}:")
        print(f"      degree={deg}  in={ind}  out={outd}  pagerank={pr}")
        print(f"      betweenness={btw}  clustering={cc}  k_core={kc}")
        print(f"      community={cid} ({cname}, size={csize})")

    gods = metadata.get("god_nodes", [])
    if gods:
        print(f"\n    God nodes (top {len(gods)} by degree):")
        for g in gods[:10]:
            print(f"      {g['label']}: degree={g['degree']}")

    surprises = metadata.get("surprising_connections", [])
    if surprises:
        print(f"\n    Surprising connections ({len(surprises)} found):")
        for s in surprises[:5]:
            src = s.get("source", "?")
            tgt = s.get("target", "?")
            rel = s.get("relation", "?")
            why = s.get("why", s.get("note", ""))
            print(f"      {src} --[{rel}]--> {tgt}: {why}")

    cohesion = metadata.get("community_cohesion", {})
    if cohesion:
        low = {k: v for k, v in cohesion.items() if v < 0.15}
        if low:
            print(f"\n    Low-cohesion communities (<0.15): {len(low)}")
            for k, v in sorted(low.items(), key=lambda x: x[1])[:5]:
                cname = metadata.get("community_labels", {}).get(k, f"Community {k}")
                print(f"      {cname} (id={k}): {v:.4f}")


def report_community_context(
    G: nx.Graph, nodes: list[dict], involved: list[str], id2lab: dict[str, str]
) -> None:
    """Report community assignments and cross-community connections."""
    node_map = {n["id"]: n for n in nodes}
    section("0b", "Community context")

    # Group involved nodes by community
    by_community: dict[str, list[str]] = {}
    for nid in involved:
        cid = node_map.get(nid, {}).get("community", "?")
        by_community.setdefault(str(cid), []).append(label_of(nid, id2lab))
    for cid, names in by_community.items():
        cname = node_map.get(
            [n for n in involved if str(node_map.get(n, {}).get("community")) == cid][0],
            {},
        ).get("community_name", f"Community {cid}")
        print(f"    Community {cid} ({cname}): {names}")

    # Check if sources and targets share communities
    source_comms = {
        str(node_map.get(s, {}).get("community")) for s in involved if s in node_map
    }
    if len(source_comms) > 1:
        print(f"    Cross-community analysis: {len(source_comms)} distinct communities")
    else:
        print(f"    All involved nodes share community {source_comms}")

    # Source file overlap
    source_files = {}
    for nid in involved:
        sf = node_map.get(nid, {}).get("source_file", "")
        source_files.setdefault(sf, []).append(label_of(nid, id2lab))
    if len(source_files) > 1:
        print(f"\n    Source document provenance ({len(source_files)} documents):")
        for sf, names in source_files.items():
            short = sf.split(" - ", 1)[-1] if " - " in sf else sf
            print(f"      {short[:60]}: {names}")


def report_path_multiplicity(
    G: nx.Graph,
    sources: list[str],
    targets: list[str],
    id2lab: dict[str, str],
) -> None:
    """Shortest-path analysis with edge relations and confidence along paths."""
    section(1, "Shortest-path multiplicity (bridges = first hop, NetworkX)")
    for s in sources:
        for t in targets:
            try:
                paths = list(nx.all_shortest_paths(G, s, t))
            except nx.NetworkXNoPath:
                print(f"    {label_of(s, id2lab)} -> {label_of(t, id2lab)}: NO PATH")
                continue
            bridges = sorted({p[1] for p in paths if len(p) > 2})
            bridges = [label_of(b, id2lab) for b in bridges]
            print(
                f"    {label_of(s, id2lab)} -> {label_of(t, id2lab)}: "
                f"{len(paths)} shortest path(s), bridges = {bridges}"
            )
            # Show first path with edge details
            if paths:
                p = paths[0]
                segments = []
                for i in range(len(p) - 1):
                    edata = G.get_edge_data(p[i], p[i + 1]) or {}
                    rel = edata.get("relation", "?")
                    conf = edata.get("confidence_score", "?")
                    segments.append(
                        f"{label_of(p[i], id2lab)} --[{rel}|{conf}]--> "
                        f"{label_of(p[i + 1], id2lab)}"
                    )
                print(f"      Path: {'  '.join(segments[:5])}")
                if len(segments) > 5:
                    print(f"      ... ({len(segments) - 5} more hops)")


def report_neighborhood(G: nx.Graph, nodes: list[str], id2lab: dict[str, str]) -> None:
    """Neighborhood distinctness with pre-computed metrics and edge details."""
    section(2, "Neighborhood distinctness (degree + pairwise Jaccard)")
    nbrs = {n: set(G.neighbors(n)) for n in nodes}
    for n in nodes:
        deg = G.degree(n)
        # Get pre-computed metrics if available on node
        ndata = G.nodes[n]
        pr = ndata.get("pagerank", "")
        btw = ndata.get("betweenness_centrality", "")
        extra = ""
        if pr or btw:
            extra = f"  pagerank={pr}  betweenness={btw}"
        print(f"    degree {label_of(n, id2lab)}: {deg}{extra}")

    for i in range(len(nodes)):
        for j in range(i + 1, len(nodes)):
            a, b = nodes[i], nodes[j]
            inter = nbrs[a] & nbrs[b]
            union = nbrs[a] | nbrs[b]
            jac = len(inter) / len(union) if union else 0.0
            shared = [label_of(x, id2lab) for x in sorted(inter)]
            print(
                f"    Jaccard({label_of(a, id2lab)} vs {label_of(b, id2lab)}) = {jac:.3f}"
            )
            print(
                f"      shared ({len(shared)}): {shared[:15]}"
            )
            print(
                f"      {label_of(a, id2lab)}-only: "
                f"{[label_of(x, id2lab) for x in sorted(nbrs[a] - nbrs[b])][:15]}"
            )
            print(
                f"      {label_of(b, id2lab)}-only: "
                f"{[label_of(x, id2lab) for x in sorted(nbrs[b] - nbrs[a])][:15]}"
            )


def report_adamic_adar(
    G: nx.Graph, sources: list[str], targets: list[str], id2lab: dict[str, str]
) -> None:
    section(3, "Adamic-Adar link-prediction proximity (every source x every target)")
    pairs = [(s, t) for s in sources for t in targets]
    scores = {(u, v): s for u, v, s in nx.adamic_adar_index(G, pairs)}
    for s, t in pairs:
        print(
            f"    Adamic-Adar({label_of(s, id2lab)} -> {label_of(t, id2lab)}) = "
            f"{scores.get((s, t), 0.0):.3f}"
        )


def report_kcore(G: nx.Graph, nodes: list[str], id2lab: dict[str, str]) -> None:
    """k-core with pre-computed values when available."""
    section(4, "k-core nesting depth")
    core = nx.core_number(G)
    for n in nodes:
        pre = G.nodes[n].get("k_core_number", "")
        extra = f"  (pre-computed={pre})" if pre != "" and pre != core[n] else ""
        print(f"    k-core {label_of(n, id2lab)}: {core[n]}{extra}")


def report_spectral(
    G: nx.Graph, nodes: list[str], id2lab: dict[str, str], prng: np.random.Generator
):
    section(5, "Spectral (dense eigh)")
    from scipy.sparse.csgraph import laplacian

    pos = {n: i for i, n in enumerate(G.nodes())}
    A = nx.to_scipy_sparse_array(G, format="csr").astype(np.float64)
    Ld = laplacian(A, normed=False).toarray()
    evals, evecs = np.linalg.eigh(Ld)
    if len(evals) < 3:
        print("    spectral: giant component too small, skipping")
        return None
    print(f"    algebraic connectivity lambda2 = {evals[1]:.4f}")
    fied = evecs[:, 1]
    for n in nodes:
        print(
            f"    Fiedler {label_of(n, id2lab)}: {fied[pos[n]]:+.4f}  (sign is arbitrary)"
        )
    return Ld, evals, evecs


def report_effective_resistance(
    G: nx.Graph,
    sources: list[str],
    targets: list[str],
    id2lab: dict[str, str],
    prng: np.random.Generator,
    Ld: np.ndarray,
    evals: np.ndarray,
    evecs: np.ndarray,
) -> None:
    section(6, "Effective-resistance / commute distance (pseudoinverse Laplacian)")
    pos = {n: i for i, n in enumerate(G.nodes())}
    inv = np.where(evals > TOL, 1.0 / evals, 0.0)
    pinvL = (evecs * inv) @ evecs.T
    diag = np.diag(pinvL)

    def rdist(a: str, b: str) -> float:
        return float(diag[pos[a]] + diag[pos[b]] - 2 * pinvL[pos[a], pos[b]])

    nodes = list(G.nodes())
    for t in targets:
        sample = prng.choice(
            nodes, size=min(NULL_SAMPLE_SIZE, len(nodes) - 1), replace=False
        )
        null_vals = np.array([rdist(x, t) for x in sample])
        mean, std = float(null_vals.mean()), float(null_vals.std())
        print(
            f"    vs {label_of(t, id2lab)} (null mean {mean:.3f} +/- {std:.3f}, "
            f"n={len(null_vals)}):"
        )
        for s in sources:
            r = rdist(s, t)
            z = (r - mean) / std if std else float("nan")
            print(f"      {label_of(s, id2lab)}: {r:.3f}   z = {z:+.2f}")
        print(
            f"    self-check R_eff({label_of(t, id2lab)}, {label_of(t, id2lab)}) = "
            f"{rdist(t, t):.4f} (~0 expected)"
        )


def report_pagerank(
    G: nx.Graph, sources: list[str], targets: list[str], id2lab: dict[str, str]
) -> None:
    """PPR with comparison to pre-computed standard PageRank."""
    section(7, "Personalized PageRank (random-walk flow seeded at each target)")

    # Show pre-computed standard PageRank for context
    pre_pr = {}
    for n in sources + targets:
        p = G.nodes[n].get("pagerank")
        if p is not None:
            pre_pr[n] = p
    if pre_pr:
        print("    Standard PageRank (pre-computed):")
        for n, p in sorted(pre_pr.items(), key=lambda x: -x[1]):
            print(f"      {label_of(n, id2lab)}: {p:.8f}")

    order_cache: dict[str, list[str]] = {}
    for t in targets:
        pr = nx.pagerank(
            G, personalization={t: 1.0}, alpha=PPR_ALPHA, max_iter=500, tol=TOL
        )
        order = sorted(pr, key=pr.get, reverse=True)
        order_cache[t] = order
        print(f"\n    PPR seeded at {label_of(t, id2lab)}:")
        for s in sources:
            rank = order.index(s) + 1
            print(
                f"      {label_of(s, id2lab)}: rank #{rank} (score {pr[s]:.5f})"
            )


def main() -> None:
    ap = argparse.ArgumentParser(
        description="NetworkX/SciPy multi-node analysis of a graphify graph."
    )
    ap.add_argument(
        "--graph",
        type=Path,
        default=DEFAULT_GRAPH,
        help="path to a graphify-out/graph.json (default: repository one)",
    )
    ap.add_argument(
        "--sources",
        nargs="+",
        default=["sirt1", "sirt3", "sirt2"],
        help="source entity label/id set (compared against targets)",
    )
    ap.add_argument(
        "--targets",
        nargs="+",
        default=["adrenochrome"],
        help="anchor entity label/id set (can be several)",
    )
    ap.add_argument(
        "--seed", type=int, default=RANDOM_SEED, help="random seed for null sampling"
    )
    args = ap.parse_args()

    G, nodes, total, metadata = load_graph(args.graph)
    id2lab = {n["id"]: n["label"] for n in nodes}
    try:
        sources = [resolve(s, nodes) for s in args.sources]
        targets = [resolve(t, nodes) for t in args.targets]
    except KeyError as exc:
        sys.exit(str(exc))
    involved = sources + [t for t in targets if t not in sources]

    print(
        f"graph: {total} nodes / {G.number_of_nodes()} giant-component nodes / "
        f"{G.number_of_edges()} edges"
    )
    print(
        f"sources: {[label_of(s, id2lab) for s in sources]}   "
        f"targets: {[label_of(t, id2lab) for t in targets]}\n"
    )

    prng = np.random.default_rng(args.seed)
    report_graph_context(nodes, metadata, sources, targets, id2lab)
    report_community_context(G, nodes, involved, id2lab)
    report_path_multiplicity(G, sources, targets, id2lab)
    report_neighborhood(G, involved, id2lab)
    report_adamic_adar(G, sources, targets, id2lab)
    report_kcore(G, involved, id2lab)
    spectral = report_spectral(G, involved, id2lab, prng)
    if spectral is not None:
        report_effective_resistance(G, sources, targets, id2lab, prng, *spectral)
    report_pagerank(G, sources, targets, id2lab)

    print(
        "\nCross-metric note: hop distance is frequently non-discriminating; "
        "rankings by route-multiplicity vs flow metrics can disagree (see task output)."
    )


if __name__ == "__main__":
    main()
