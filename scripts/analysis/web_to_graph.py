#!/usr/bin/env python3
"""Serialize the combined web dataset to graph.json schema (stdlib only).

Reads web/public/data/nodes.json + edges.json (the canonical triples ∪ wiki
union built by `python -m scripts build-combined`) and emits the
{nodes, links} schema that scripts/analysis/node_analysis.py --graph expects
(node dicts pass through; edge from/to become source/target).

Run:
  uv run python3 scripts/analysis/web_to_graph.py
  uv run python3 scripts/analysis/web_to_graph.py --out /tmp/combined.json
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]  # repo root (scripts/<group>/)
DATA = ROOT / "web" / "public" / "data"


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--nodes", default=DATA / "nodes.json")
    ap.add_argument("--edges", default=DATA / "edges.json")
    ap.add_argument("--out", default="/tmp/combined_graph.json")
    args = ap.parse_args()

    nodes = json.loads(Path(args.nodes).read_text(encoding="utf-8"))
    edges_doc = json.loads(Path(args.edges).read_text(encoding="utf-8"))
    # ponytail: inline decode of the int-encoded edge form (kept standalone
    # rather than importing scripts.lib.graph_common.decode_edges).
    if isinstance(edges_doc, dict):
        ids, labels = edges_doc["ids"], edges_doc["labels"]
        edges = [{
            "from": ids[r[0]], "to": ids[r[1]], "label": labels[r[2]],
            "confidence": "EXTRACTED" if r[3] >= 0.7 else "AMBIGUOUS",
            "confidence_score": r[3], "weight": r[4] if len(r) > 4 else r[3],
        } for r in edges_doc["edges"]]
    else:
        edges = edges_doc
    links = [
        {"source": e["from"], "target": e["to"], **{k: v for k, v in e.items() if k not in ("from", "to")}}
        for e in edges
    ]
    out = Path(args.out)
    out.write_text(
        json.dumps({"nodes": nodes, "links": links}, ensure_ascii=False), encoding="utf-8"
    )
    print(f"wrote {len(nodes)} nodes / {len(links)} links -> {out}")


if __name__ == "__main__":
    main()
