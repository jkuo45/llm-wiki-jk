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
    edges = json.loads(Path(args.edges).read_text(encoding="utf-8"))
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
