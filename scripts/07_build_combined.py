#!/usr/bin/env python3
"""Build the combined (triples + wiki) web dataset from the per-source exports.

Reads `web/data/{nodes,edges,legend,graph-meta}.json` (triples) and
`web/data/wiki-{nodes,edges,legend,graph-meta}.json` (wiki), and merges them
into `web/data/combined-{nodes,edges,legend,graph-meta,node_roles,roles-meta}.json`.

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

Run AFTER scripts/03_rebuild_from_triples.py AND scripts/05_rebuild_from_wiki.py:

  uv run --with networkx python3 scripts/07_build_combined.py
"""

from __future__ import annotations

import json
import sys
import time
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from _graph_common import export_roles_json, generate_community_colors, write_web_version

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "web" / "data"

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


def main() -> int:
    tN = load("nodes.json") or []
    tE = load("edges.json") or []
    tL = load("legend.json") or []
    tM = load("graph-meta.json") or {}

    wN = load("wiki-nodes.json") or []
    wE = load("wiki-edges.json") or []
    wL = load("wiki-legend.json") or []

    if not tN:
        print("Missing triples web data (web/data/nodes.json) -- run 03_rebuild first.")
        return 1
    if not wN:
        print("Missing wiki web data (web/data/wiki-nodes.json) -- run 05_rebuild first.")
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
    # Emit.
    # ------------------------------------------------------------------
    write("combined-nodes.json", nodes)
    write("combined-edges.json", edges)
    write("combined-legend.json", legend, compact=False)
    write("combined-graph-meta.json", tM)

    # Roles: classify the combined node table with the shared role lib.
    labels = {c["cid"]: c["label"] for c in legend}
    roles_path = DATA_DIR / "combined-node_roles.json"
    export_roles_json({"nodes": nodes}, labels, roles_path,
                      source_graph="web/data/combined-nodes.json")
    roles_doc = json.loads(roles_path.read_text(encoding="utf-8"))
    roles_meta = {
        "generated_at": roles_doc["generated_at"],
        "graph_build": roles_doc.get("graph_build", ""),
        "rules": roles_doc["rules"],
        "thresholds": roles_doc["thresholds"],
        "summary": roles_doc["summary"],
    }
    (DATA_DIR / "combined-roles-meta.json").write_text(
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
    print(f"Wrote web/data/combined-* and bumped version.json ({time.strftime('%H:%M:%S')} UTC)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())