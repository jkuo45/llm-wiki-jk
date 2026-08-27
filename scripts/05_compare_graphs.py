#!/usr/bin/env python3
"""Compare the triples graph and the wiki graph, joined on node id.

Both graphs key nodes by norm(label), so the same entity ("SIRT1") shares the
identical id ("sirt1") in graphify-out/graph.json and wiki-out/wiki-graph.json.
This script joins them on `id` and reports:

  - shared / wiki-only / triples-only nodes (and top-N by degree)
  - edge deltas:
      * wiki links with NO corresponding triple edge  -> under-extracted
        triples (a curation gap: the wiki links it, but no triple states it)
      * triple edges with NO corresponding wiki link   -> not surfaced as a
        wikilink in any note

Output: wiki-out/graph-diff.json + wiki-out/GRAPH_DIFF.md

Run:  uv run --with networkx python3 scripts/05_compare_graphs.py
      uv run --with networkx python3 scripts/05_compare_graphs.py --top 25
"""

from __future__ import annotations

import argparse
import json
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TRIPLES_GRAPH = ROOT / "graphify-out" / "graph.json"
WIKI_GRAPH = ROOT / "wiki-out" / "wiki-graph.json"
OUT_JSON = ROOT / "wiki-out" / "graph-diff.json"
OUT_MD = ROOT / "wiki-out" / "GRAPH_DIFF.md"


def load_graph(path: Path) -> dict:
    if not path.exists():
        raise SystemExit(f"graph not found at {path}")
    return json.loads(path.read_text(encoding="utf-8"))


def node_degree(node: dict, edges: list[dict], direction: str = "both") -> int:
    """Degree for a node, preferring the precomputed `degree` attribute."""
    if direction == "both" and node.get("degree") is not None:
        return int(node["degree"])
    nid = node["id"]
    if direction == "out":
        return int(node.get("out_degree", 0))
    if direction == "in":
        return int(node.get("in_degree", 0))
    return sum(1 for e in edges if e["source"] == nid or e["target"] == nid)


def top_by_degree(nodes: list[dict], edges: list[dict], k: int) -> list[dict]:
    scored = [(node_degree(n, edges), n) for n in nodes]
    scored.sort(key=lambda x: x[0], reverse=True)
    return [{"id": n["id"], "label": n.get("label", n["id"]), "degree": d}
            for d, n in scored[:k]]


def main() -> int:
    ap = argparse.ArgumentParser(description="Compare triples vs wiki graph.")
    ap.add_argument("--triples", type=Path, default=TRIPLES_GRAPH)
    ap.add_argument("--wiki", type=Path, default=WIKI_GRAPH)
    ap.add_argument("--top", type=int, default=20)
    args = ap.parse_args()

    tg = load_graph(args.triples)
    wg = load_graph(args.wiki)

    t_nodes = {n["id"]: n for n in tg["nodes"]}
    w_nodes = {n["id"]: n for n in wg["nodes"]}
    t_ids = set(t_nodes)
    w_ids = set(w_nodes)

    shared = t_ids & w_ids
    wiki_only = w_ids - t_ids
    triples_only = t_ids - w_ids

    # edge sets keyed by (source, target) endpoint pair (relation-agnostic)
    t_edges = {(e["source"], e["target"]) for e in tg["links"]}
    w_edges = {(e["source"], e["target"]) for e in wg["links"]}
    wiki_only_edges = w_edges - t_edges   # under-extracted triples
    triples_only_edges = t_edges - w_edges

    # label lookups for edge reporting
    id2label = {nid: (t_nodes.get(nid) or w_nodes.get(nid) or {}).get("label", nid)
                for nid in (t_ids | w_ids)}

    def edge_list(pairs, top_k):
        scored = []
        for (s, t) in pairs:
            # weight in wiki graph = link count (fallback 1)
            w = next((e.get("weight", 1) for e in wg["links"]
                      if e["source"] == s and e["target"] == t), 1)
            scored.append((w, s, t))
        scored.sort(reverse=True)
        return [
            {"source": s, "target": t, "source_label": id2label.get(s, s),
             "target_label": id2label.get(t, t), "weight": w}
            for w, s, t in scored[:top_k]
        ]

    diff = {
        "generated_at": __import__("time").strftime("%Y-%m-%dT%H:%M:%SZ"),
        "triples_graph": str(args.triples),
        "wiki_graph": str(args.wiki),
        "counts": {
            "triples_nodes": len(t_ids),
            "wiki_nodes": len(w_ids),
            "shared_nodes": len(shared),
            "wiki_only_nodes": len(wiki_only),
            "triples_only_nodes": len(triples_only),
            "triples_edges": len(t_edges),
            "wiki_edges": len(w_edges),
            "wiki_only_edges": len(wiki_only_edges),
            "triples_only_edges": len(triples_only_edges),
        },
        "top_wiki_only_nodes": top_by_degree(
            [w_nodes[i] for i in wiki_only], wg["links"], args.top),
        "top_triples_only_nodes": top_by_degree(
            [t_nodes[i] for i in triples_only], tg["links"], args.top),
        "top_wiki_only_edges": edge_list(wiki_only_edges, args.top),
        "top_triples_only_edges": edge_list(triples_only_edges, args.top),
    }

    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(
        json.dumps(diff, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    # --- markdown summary ---
    c = diff["counts"]
    lines = [
        "# Triples vs Wiki Graph Diff",
        "",
        f"- Triples graph: `{args.triples}` ({c['triples_nodes']} nodes, "
        f"{c['triples_edges']} edges)",
        f"- Wiki graph:    `{args.wiki}` ({c['wiki_nodes']} nodes, "
        f"{c['wiki_edges']} edges)",
        "",
        "## Node overlap",
        "",
        f"- **Shared** (in both): {c['shared_nodes']}",
        f"- **Wiki-only** (linked, no triple): {c['wiki_only_nodes']}",
        f"- **Triples-only** (triple, no wikilink): {c['triples_only_nodes']}",
        "",
        "## Edge overlap",
        "",
        f"- **Wiki-only edges** (under-extracted triples / curation gaps): "
        f"{c['wiki_only_edges']}",
        f"- **Triples-only edges** (not surfaced as a wikilink): "
        f"{c['triples_only_edges']}",
        "",
        f"## Top {args.top} wiki-only nodes (linked but absent from triples)",
        "",
        "| Node | Degree |",
        "| --- | --- |",
    ]
    for r in diff["top_wiki_only_nodes"]:
        lines.append(f"| {r['label']} | {r['degree']} |")
    lines += [
        "",
        f"## Top {args.top} triples-only nodes (triple but no wikilink)",
        "",
        "| Node | Degree |",
        "| --- | --- |",
    ]
    for r in diff["top_triples_only_nodes"]:
        lines.append(f"| {r['label']} | {r['degree']} |")
    lines += [
        "",
        f"## Top {args.top} wiki-only edges (suggest extracting as triples)",
        "",
        "| Source | Target | Link count |",
        "| --- | --- | --- |",
    ]
    for r in diff["top_wiki_only_edges"]:
        lines.append(f"| {r['source_label']} | {r['target_label']} | {r['weight']} |")
    lines += [
        "",
        f"## Top {args.top} triples-only edges (not reflected in any wikilink)",
        "",
        "| Source | Target |",
        "| --- | --- |",
    ]
    for r in diff["top_triples_only_edges"]:
        lines.append(f"| {r['source_label']} | {r['target_label']} |")
    lines.append("")

    OUT_MD.write_text("\n".join(lines), encoding="utf-8")

    print(
        f"Nodes: shared={c['shared_nodes']} wiki-only={c['wiki_only_nodes']} "
        f"triples-only={c['triples_only_nodes']}"
    )
    print(
        f"Edges: wiki-only(under-extracted)={c['wiki_only_edges']} "
        f"triples-only={c['triples_only_edges']}"
    )
    print(f"Wrote: {OUT_JSON}")
    print(f"Wrote: {OUT_MD}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
