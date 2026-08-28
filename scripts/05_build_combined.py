#!/usr/bin/env python3
"""Build the combined (triples + wiki) web dataset from the per-source exports.

Reads `web/public/data/{nodes,edges,legend,graph-meta}.json` (triples) and
`web/public/data/wiki-{nodes,edges,legend,graph-meta}.json` (wiki), and merges them
into `web/public/data/combined-{nodes,edges,legend,graph-meta,node_roles,roles-meta}.json`.

This gives the front-end's "combined" mode a single backend-generated dataset
to load instead of re-implementing the merge in the browser (mirrors the JS
mergeCombined() so the merge rules never drift).

Merge rules:
  - nodes : union by `id`; prefer the triples `description`/`community`/`color`
            for shared ids; every node is tagged `in_triples`, `in_wiki`, and
            `graph_sources`.
  - edges : union by (`from`,`to`); accumulate a `sources` list; a shared edge
            keeps the triples relation label unless it is only `links_to`.
  - legend: triples legend + wiki legend, with wiki community cids offset by
            +1000 so the combined cid space never collides. Wiki-only nodes
            get the same offset on their `community` field.

This script ALSO folds in the former scripts/05_compare_graphs.py logic: it
compares the canonical triples graph (graphify-out/graph.json) and wiki graph
(wiki-out/wiki-graph.json) by node id and emits the curation-gap report
`wiki-out/graph-diff.json` + `wiki-out/GRAPH_DIFF.md` (shared / wiki-only /
triples-only nodes + edge deltas).

Run AFTER scripts/03_rebuild_from_triples.py AND scripts/05_rebuild_from_wiki.py:

  uv run --with networkx python3 scripts/05_build_combined.py
"""

from __future__ import annotations

import json
import sys
import time
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from _graph_common import export_roles_json, generate_community_colors, write_web_version

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "web" / "public" / "data"

# Fixed wiki-cid offset for the combined legend (smaller than any plausible
# triples community id, so the two cid spaces never collide).
WIKI_CID_OFFSET = 1000


def load(name: str):
    path = DATA_DIR / name
    if not path.exists():
        return None
    return json.loads(path.read_text(encoding="utf-8"))


def write(name: str, data, compact: bool = True) -> None:
    (DATA_DIR / name).write_text(
        json.dumps(data, ensure_ascii=False, separators=(",", ":") if compact else None),
        encoding="utf-8",
    )


# ---------------------------------------------------------------------------
# Triples-vs-wiki comparison (folded in from the removed scripts/05_compare_graphs.py)
# ---------------------------------------------------------------------------
TRIPLES_GRAPH = ROOT / "graphify-out" / "graph.json"   # canonical triples graph
WIKI_GRAPH = ROOT / "wiki-out" / "wiki-graph.json"     # canonical wiki graph
OUT_JSON = ROOT / "wiki-out" / "graph-diff.json"
OUT_MD = ROOT / "wiki-out" / "GRAPH_DIFF.md"
COMPARE_TOP = 20


def load_graph(path: Path) -> dict:
    if not path.exists():
        raise SystemExit(f"graph not found at {path}")
    return json.loads(path.read_text(encoding="utf-8"))


def node_degree(node: dict, edges: list[dict]) -> int:
    """Degree for a node, preferring the precomputed `degree` attribute."""
    if node.get("degree") is not None:
        return int(node["degree"])
    nid = node["id"]
    return sum(1 for e in edges if e["source"] == nid or e["target"] == nid)


def top_by_degree(nodes: list[dict], edges: list[dict], k: int) -> list[dict]:
    scored = sorted(((node_degree(n, edges), n) for n in nodes), key=lambda x: x[0], reverse=True)
    return [{"id": n["id"], "label": n.get("label", n["id"]), "degree": d} for d, n in scored[:k]]


def write_compare_report(top: int = COMPARE_TOP) -> None:
    """Compare the canonical triples graph vs the wiki graph (by node id) and
    emit the curation-gap report (wiki-out/graph-diff.json + GRAPH_DIFF.md)."""
    if not TRIPLES_GRAPH.exists() or not WIKI_GRAPH.exists():
        print("compare report skipped (graphify-out/graph.json or wiki-out/wiki-graph.json missing)")
        return
    tg = load_graph(TRIPLES_GRAPH)
    wg = load_graph(WIKI_GRAPH)

    t_nodes = {n["id"]: n for n in tg["nodes"]}
    w_nodes = {n["id"]: n for n in wg["nodes"]}
    t_ids = set(t_nodes)
    w_ids = set(w_nodes)
    shared = t_ids & w_ids
    wiki_only = w_ids - t_ids
    triples_only = t_ids - w_ids

    # Edge sets keyed by (source, target) endpoint pair (relation-agnostic).
    t_edges = {(e["source"], e["target"]) for e in tg["links"]}
    w_edges = {(e["source"], e["target"]) for e in wg["links"]}
    wiki_only_edges = w_edges - t_edges   # under-extracted triples
    triples_only_edges = t_edges - w_edges

    id2label = {nid: (t_nodes.get(nid) or w_nodes.get(nid) or {}).get("label", nid)
                for nid in (t_ids | w_ids)}

    def edge_list(pairs, top_k):
        scored = []
        for (s, t) in pairs:
            w = next((e.get("weight", 1) for e in wg["links"]
                      if e["source"] == s and e["target"] == t), 1)
            scored.append((w, s, t))
        scored.sort(reverse=True)
        return [{"source": s, "target": t, "source_label": id2label.get(s, s),
                 "target_label": id2label.get(t, t), "weight": w}
                for w, s, t in scored[:top_k]]

    diff = {
        "generated_at": time.strftime("%Y-%m-%dT%H:%M:%SZ"),
        "triples_graph": str(TRIPLES_GRAPH),
        "wiki_graph": str(WIKI_GRAPH),
        "counts": {
            "triples_nodes": len(t_ids), "wiki_nodes": len(w_ids),
            "shared_nodes": len(shared), "wiki_only_nodes": len(wiki_only),
            "triples_only_nodes": len(triples_only),
            "triples_edges": len(t_edges), "wiki_edges": len(w_edges),
            "wiki_only_edges": len(wiki_only_edges), "triples_only_edges": len(triples_only_edges),
        },
        "top_wiki_only_nodes": top_by_degree([w_nodes[i] for i in wiki_only], wg["links"], top),
        "top_triples_only_nodes": top_by_degree([t_nodes[i] for i in triples_only], tg["links"], top),
        "top_wiki_only_edges": edge_list(wiki_only_edges, top),
        "top_triples_only_edges": edge_list(triples_only_edges, top),
    }
    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(diff, ensure_ascii=False, indent=2), encoding="utf-8")

    c = diff["counts"]
    lines = [
        "# Triples vs Wiki Graph Diff", "",
        f"- Triples graph: `{TRIPLES_GRAPH}` ({c['triples_nodes']} nodes, {c['triples_edges']} edges)",
        f"- Wiki graph:    `{WIKI_GRAPH}` ({c['wiki_nodes']} nodes, {c['wiki_edges']} edges)", "",
        "## Node overlap", "",
        f"- **Shared** (in both): {c['shared_nodes']}",
        f"- **Wiki-only** (linked, no triple): {c['wiki_only_nodes']}",
        f"- **Triples-only** (triple, no wikilink): {c['triples_only_nodes']}", "",
        "## Edge overlap", "",
        f"- **Wiki-only edges** (under-extracted triples / curation gaps): {c['wiki_only_edges']}",
        f"- **Triples-only edges** (not surfaced as a wikilink): {c['triples_only_edges']}", "",
        f"## Top {top} wiki-only nodes (linked but absent from triples)", "",
        "| Node | Degree |", "| --- | --- |",
    ]
    for r in diff["top_wiki_only_nodes"]:
        lines.append(f"| {r['label']} | {r['degree']} |")
    lines += ["", f"## Top {top} triples-only nodes (triple but no wikilink)", "",
              "| Node | Degree |", "| --- | --- |"]
    for r in diff["top_triples_only_nodes"]:
        lines.append(f"| {r['label']} | {r['degree']} |")
    lines += ["", f"## Top {top} wiki-only edges (suggest extracting as triples)", "",
              "| Source | Target | Link count |", "| --- | --- | --- |"]
    for r in diff["top_wiki_only_edges"]:
        lines.append(f"| {r['source_label']} | {r['target_label']} | {r['weight']} |")
    lines += ["", f"## Top {top} triples-only edges (not reflected in any wikilink)", "",
              "| Source | Target |", "| --- | --- |"]
    for r in diff["top_triples_only_edges"]:
        lines.append(f"| {r['source_label']} | {r['target_label']} |")
    lines.append("")
    OUT_MD.write_text("\n".join(lines), encoding="utf-8")

    print(f"Diff: shared={c['shared_nodes']} wiki-only={c['wiki_only_nodes']} triples-only={c['triples_only_nodes']}")
    print(f"Diff edges: wiki-only(under-extracted)={c['wiki_only_edges']} triples-only={c['triples_only_edges']}")
    print(f"Wrote: {OUT_JSON}\nWrote: {OUT_MD}")


def main() -> int:
    tN = load("triples-nodes.json") or []
    tE = load("triples-edges.json") or []
    tL = load("triples-legend.json") or []
    tM = load("triples-graph-meta.json") or {}

    wN = load("wiki-nodes.json") or []
    wE = load("wiki-edges.json") or []
    wL = load("wiki-legend.json") or []

    # Remove the deprecated combined-* files: the merged dataset is now emitted
    # as the canonical nodes.json / edges.json / legend.json / graph-meta.json.
    for stale in DATA_DIR.glob("combined-*.json"):
        try:
            stale.unlink()
            print(f"  removed deprecated {stale.name}")
        except OSError:
            pass

    if not tN:
        print("Missing triples web data (web/public/data/triples-nodes.json) -- run 03_rebuild first.")
        return 1
    if not wN:
        print("Missing wiki web data (web/public/data/wiki-nodes.json) -- run 05_rebuild first.")
        return 1

    # ------------------------------------------------------------------
    # Nodes: union by id, prefer triples attributes on shared ids.
    # ------------------------------------------------------------------
    nmap: dict[str, dict] = {}
    nodes: list[dict] = []

    def add_node(n: dict, src: str, offset: int) -> None:
        ex = nmap.get(n["id"])
        if ex is not None:
            ex[f"in_{src}"] = True
            ex["graph_sources"] = sorted(set(ex["graph_sources"] + [src]))
            if src == "triples":
                # Triples wins for description / community / color on shared ids.
                if not ex.get("description") and n.get("description"):
                    ex["description"] = n["description"]
                ex["community"] = n.get("community", ex.get("community", 0))
                ex["community_name"] = n.get("community_name", ex.get("community_name", ""))
                if n.get("color"):
                    ex["color"] = n["color"]
            return
        nn = dict(n, **{f"in_{src}": True, f"in_{'triples' if src == 'wiki' else 'wiki'}": False,
                        "graph_sources": [src]})
        if src == "wiki":
            nn["community"] = (nn.get("community", 0) or 0) + offset
        nmap[n["id"]] = nn
        nodes.append(nn)

    for n in tN:
        add_node(n, "triples", 0)
    for n in wN:
        add_node(n, "wiki", WIKI_CID_OFFSET)

    # ------------------------------------------------------------------
    # Edges: union by (from, to), accumulate sources.
    # ------------------------------------------------------------------
    emap: dict[tuple[str, str], dict] = {}
    edges: list[dict] = []

    def add_edge(e: dict, src: str) -> None:
        key = (e.get("from"), e.get("to"))
        if key[0] is None or key[1] is None:
            return
        ex = emap.get(key)
        if ex is not None:
            ex["sources"] = sorted(set(ex["sources"] + [src]))
            # Keep the triples relation unless the only label we have is the
            # generic wiki "links_to".
            if ex.get("label") in (None, "", "links_to") and e.get("label"):
                ex["label"] = e["label"]
            return
        ne = dict(e, sources=[src])
        emap[key] = ne
        edges.append(ne)

    for e in tE:
        add_edge(e, "triples")
    for e in wE:
        add_edge(e, "wiki")

    # ------------------------------------------------------------------
    # Legend: triples + wiki (offset), recolor wiki communities.
    # ------------------------------------------------------------------
    legend = [dict(c) for c in tL]
    legend += [dict(c, cid=c["cid"] + WIKI_CID_OFFSET, wiki=True) for c in wL]
    color_map = generate_community_colors(legend)
    for entry in legend:
        entry["color"] = color_map[entry["cid"]]

    # ------------------------------------------------------------------
    # Emit: the merged dataset becomes the CANONICAL nodes/edges/legend/...
    # files (default "combined" mode). Triples and wiki keep their source
    # files (triples-* / wiki-*); combined-* is no longer emitted.
    # ------------------------------------------------------------------
    write("nodes.json", nodes)
    write("edges.json", edges)
    write("legend.json", legend, compact=False)
    write("graph-meta.json", tM)

    # Roles: classify the combined node table with the shared role lib. These
    # become the canonical roles-meta.json consumed by the default mode.
    labels = {c["cid"]: c["label"] for c in legend}
    roles_path = DATA_DIR / "node_roles.json"
    export_roles_json({"nodes": nodes}, labels, roles_path,
                      source_graph="web/public/data/nodes.json")
    roles_doc = json.loads(roles_path.read_text(encoding="utf-8"))
    roles_meta = {
        "generated_at": roles_doc["generated_at"],
        "graph_build": roles_doc.get("graph_build", ""),
        "rules": roles_doc["rules"],
        "thresholds": roles_doc["thresholds"],
        "summary": roles_doc["summary"],
    }
    (DATA_DIR / "roles-meta.json").write_text(
        json.dumps(roles_meta, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )

    write_web_version(DATA_DIR)

    shared = sum(1 for n in nodes if n.get("in_triples") and n.get("in_wiki"))
    both_edges = sum(1 for e in edges if len(e.get("sources", [])) > 1)
    print(
        f"Combined: {len(nodes)} nodes ({shared} shared), {len(edges)} edges "
        f"({both_edges} in both), {len(legend)} communities"
    )
    print(f"Wrote canonical nodes/edges/legend/graph-meta + roles (combined) and bumped version.json ({time.strftime('%H:%M:%S')} UTC)")

    # Triples-vs-wiki curation-gap report (folded in from removed 05_compare_graphs.py).
    try:
        write_compare_report(COMPARE_TOP)
    except Exception as e:  # noqa: BLE001
        print(f"compare report skipped ({e})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())