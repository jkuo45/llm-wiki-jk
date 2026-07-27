#!/usr/bin/env python3
"""Export nodes.json, edges.json, legend.json from graphify-out/graph.json
for use by three-graph.html visualization."""

from __future__ import annotations

import json
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GP = ROOT / "graphify-out"

# Color palette for communities (Tableau-inspired)
PALETTE = [
    "#4E79A7",
    "#F28E2B",
    "#E15759",
    "#76B7B2",
    "#59A14F",
    "#EDC948",
    "#B07AA1",
    "#FF9DA7",
    "#9C755F",
    "#BAB0AC",
    "#86BCB6",
    "#D37295",
    "#FABFD2",
    "#B6992D",
    "#F1CE63",
    "#A0CBE8",
    "#FFBE7D",
    "#8CD17D",
    "#D4A6C8",
    "#B6992D",
]


def generate_community_colors(legend: list[dict]) -> dict[int, str]:
    """Assign colors to community IDs, rotating through palette."""
    colors = {}
    for i, entry in enumerate(legend):
        colors[entry["cid"]] = PALETTE[i % len(PALETTE)]
    return colors


def main() -> int:
    graph = json.loads((GP / "graph.json").read_text(encoding="utf-8"))
    labels_raw = json.loads((GP / ".graphify_labels.json").read_text(encoding="utf-8"))
    labels = {int(k): v for k, v in labels_raw.items()}

    nodes = graph["nodes"]
    links = graph["links"]

    # Build degree map
    degree: Counter = Counter()
    for link in links:
        degree[link["source"]] += 1
        degree[link["target"]] += 1

    # Build community membership counts
    community_counts: Counter = Counter()
    for n in nodes:
        community_counts[n["community"]] += 1

    # Build legend sorted by size
    legend = [
        {"cid": cid, "label": labels.get(cid, f"Community {cid}"), "count": count}
        for cid, count in community_counts.most_common()
    ]
    color_map = generate_community_colors(legend)
    # Attach color to legend
    for entry in legend:
        entry["color"] = color_map[entry["cid"]]

    # Build node objects for three-graph.html
    node_objects = []
    node_id_set = {n["id"] for n in nodes}
    for n in nodes:
        cid = n["community"]
        deg = degree.get(n["id"], 0)
        node_objects.append({
            "id": n["id"],
            "label": n["label"],
            "file_type": n.get("file_type", "concept"),
            "community": cid,
            "community_name": labels.get(cid, f"Community {cid}"),
            "degree": deg,
            "size": max(3, min(20, 3 + deg * 0.8)),
            "source_file": n.get("source_file", ""),
            "color": {"background": color_map.get(cid, "#888888")},
        })

    # Build edge objects for three-graph.html
    edge_objects = []
    for link in links:
        src = link["source"]
        tgt = link["target"]
        # Skip edges with missing endpoints
        if src not in node_id_set or tgt not in node_id_set:
            continue
        conf = link.get("confidence_score", 0.7)
        edge_objects.append({
            "from": src,
            "to": tgt,
            "label": link.get("relation", ""),
            "confidence": link.get("confidence", "EXTRACTED"),
            "confidence_score": conf,
            "color": {"opacity": max(0.1, min(1.0, conf))},
        })

    # Write outputs
    (GP / "nodes.json").write_text(
        json.dumps(node_objects, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    (GP / "edges.json").write_text(
        json.dumps(edge_objects, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    (GP / "legend.json").write_text(
        json.dumps(legend, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    print(
        f"Exported: {len(node_objects)} nodes, {len(edge_objects)} edges, {len(legend)} communities"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
