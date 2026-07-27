#!/usr/bin/env python3
"""Rebuild the graphify graph from per-topic triples in src/notes/**/_triples.json.

This is the canonical rebuild used for this vault (the consolidated
src/notes/_triples.json was retired in favour of topic-scoped files).

What it does, in order:
  1. Iterates every src/notes/<topic>/_triples.json and accumulates nodes/edges.
  2. Prunes generic type/category hubs (e.g. 'chemical', 'protein', 'enzyme').
  3. Prunes document-title nodes (sources of 'discusses' edges).
  4. Re-clusters (Leiden), preserving old community labels by majority overlap.
  5. Regenerates GRAPH_REPORT.md, .graphify_labels.json, and graph.json.
  6. Regenerates graph.html via `graphify export html`.
  7. Exports nodes.json, edges.json, legend.json for three-graph.html.

Run:  python3 scripts/03_rebuild_from_topics.py
"""

from __future__ import annotations

import json
import re
import subprocess
import sys
from collections import Counter, defaultdict
from pathlib import Path

import networkx as nx
from graphify.analyze import god_nodes, suggest_questions, surprising_connections
from graphify.cluster import cluster, score_all
from graphify.export import to_json
from graphify.report import generate

ROOT = Path(__file__).resolve().parent.parent  # repo root
GP = ROOT / "graphify-out"

# generic type/category vocabulary to drop (abstract ontology hubs)
DENYLIST = {
    "chemical",
    "enzyme",
    "protein",
    "biological_process",
    "biological_molecule",
    "chemical_class",
    "chemical_process",
    "gene",
    "anatomy",
    "receptor",
    "cell_type",
    "scientific_concept",
    "medical_condition",
    "analytical_technique",
    "pharmacological_action",
    "diagnostic_test",
    "organization",
    "medical_product",
    "document",
    "symptom",
    "medical_treatment",
    "transporter",
    "organism",
    "scientific_theory",
    "functional snp",
    "laboratory_standard",
    "redox_protocol",
    "methyl donor",
    "senescent cell marker",
}

CONF_MAP = {
    "high": (0.95, "EXTRACTED"),
    "medium": (0.75, "EXTRACTED"),
    "low": (0.4, "AMBIGUOUS"),
}

# Thresholds mapping a raw float confidence to a discrete rank label.
CONF_RANK = {
    "EXTRACTED": 0.7,   # >= this -> EXTRACTED, else AMBIGUOUS
}

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


def resolve_conf(t: dict) -> tuple[float, str]:
    """Return (confidence_score, conf_label) for a triple.

    Supports both legacy string confidence ("high"/"medium"/"low") and
    modern float confidence (e.g. 0.96), where the float is used directly
    as the numeric confidence_score.
    """
    c = t.get("confidence", "medium")
    if isinstance(c, (int, float)):
        score = float(c)
        conf = "EXTRACTED" if score >= CONF_RANK["EXTRACTED"] else "AMBIGUOUS"
        return score, conf
    return CONF_MAP.get(c, (0.75, "EXTRACTED"))


def strip_wikilink(s: str) -> str:
    return re.sub(
        r"\[\[([^\]]+)\]\]",
        lambda m: m.group(1).split("|", 1)[1] if "|" in m.group(1) else m.group(1),
        s,
    ).strip()


def norm(label: str) -> str:
    s = strip_wikilink(label).strip().lower()
    return re.sub(r"[^a-z0-9]+", "_", s).strip("_")


def generate_community_colors(legend: list[dict]) -> dict[int, str]:
    """Assign colors to community IDs, rotating through palette."""
    colors = {}
    for i, entry in enumerate(legend):
        colors[entry["cid"]] = PALETTE[i % len(PALETTE)]
    return colors


def export_three_json(gp: Path, labels: dict[int, str]) -> None:
    """Export nodes.json, edges.json, legend.json from graph.json for three-graph.html."""
    graph = json.loads((gp / "graph.json").read_text(encoding="utf-8"))

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

    (gp / "nodes.json").write_text(
        json.dumps(node_objects, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    (gp / "edges.json").write_text(
        json.dumps(edge_objects, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    (gp / "legend.json").write_text(
        json.dumps(legend, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"Three-graph export: {len(node_objects)} nodes, {len(edge_objects)} edges, {len(legend)} communities")


def main() -> int:
    topics = sorted(str(p) for p in ROOT.glob("src/notes/**/_triples.json"))
    if not topics:
        print("No _triples.json files found under src/notes/")
        return 1

    G = nx.DiGraph()
    edge_seen = set()
    total_triples = 0
    print("=== Iterating topics ===")
    for f in topics:
        rel = str(Path(f).relative_to(ROOT))
        triples = json.load(open(f, encoding="utf-8"))
        n0, e0 = G.number_of_nodes(), G.number_of_edges()
        for t in triples:
            total_triples += 1
            subj = strip_wikilink(t["subject"])
            obj = strip_wikilink(t["object"])
            sid, tid = norm(subj), norm(obj)
            if not sid or not tid or sid == tid:
                continue
            src = t.get("source_document", "") or rel
            for nid, raw in ((sid, subj), (tid, obj)):
                if nid not in G:
                    G.add_node(
                        nid,
                        label=raw,
                        file_type="concept",
                        source_file=src,
                        source_triples=rel,
                        description=t.get("context", "")[:300],
                    )
            score, conf = resolve_conf(t)
            key = (sid, t["predicate"], tid)
            if key not in edge_seen:
                edge_seen.add(key)
                G.add_edge(
                    sid,
                    tid,
                    relation=t["predicate"],
                    confidence=conf,
                    confidence_score=score,
                    source_file=src,
                    source_triples=rel,
                    context=t.get("context", ""),
                )
        print(
            f"  {rel}: +{G.number_of_nodes() - n0}n +{G.number_of_edges() - e0}e "
            f"(running {G.number_of_nodes()}n/{G.number_of_edges()}e)"
        )

    # --- prune generic type hubs ---
    hubs = [
        n
        for n, d in G.nodes(data=True)
        if d.get("label", "").strip().lower() in DENYLIST
    ]
    G.remove_nodes_from(hubs)
    print(f"Pruned {len(hubs)} generic hubs")

    # --- prune document-title nodes (sources of 'discusses') ---
    # Only prune nodes whose edges are exclusively 'discusses' or 'has_type'
    # (with target 'document').  Entity notes like Adrenochrome.md generate
    # 'discusses' edges *and* substantive edges (causes, promotes, …);
    # those must be kept.
    discusses_sources = {u for u, _, e in G.edges(data=True) if e.get("relation") == "discusses"}
    docs = set()
    for n in discusses_sources:
        edge_relations = {e[2].get("relation") for e in G.edges(n, data=True)}
        # A pure document node only has 'discusses' and possibly 'has_type'
        non_trivial = edge_relations - {"discusses", "has_type"}
        if not non_trivial:
            docs.add(n)
    G.remove_nodes_from(docs)
    print(f"Pruned {len(docs)} document-title nodes (of {len(discusses_sources)} discusses sources)")

    print(f"Graph before cluster: {G.number_of_nodes()}n/{G.number_of_edges()}e")

    # --- label continuity from existing graph.json (if present) ---
    old_labels = (
        json.loads(Path(GP / ".graphify_labels.json").read_text(encoding="utf-8"))
        if (GP / ".graphify_labels.json").exists()
        else {}
    )
    old_comm: dict[int, list[str]] = defaultdict(list)
    if (GP / "graph.json").exists():
        for n in json.load(open(GP / "graph.json", encoding="utf-8"))["nodes"]:
            if (c := n.get("community")) is not None:
                old_comm[c].append(n["id"])

    communities = cluster(G)
    new_labels: dict[int, str] = {}
    for cid, nodes in communities.items():
        best_old, best_n = None, 0
        for ocid, onodes in old_comm.items():
            inter = len(set(nodes) & set(onodes))
            if inter > best_n:
                best_n, best_old = inter, ocid
        if best_old is not None and best_old in old_labels and best_n > 0:
            new_labels[cid] = old_labels[best_old]
        else:
            deg = sorted(nodes, key=lambda n: G.degree(n), reverse=True)
            new_labels[cid] = G.nodes[deg[0]]["label"] if deg else f"Community {cid}"

    cohesion = score_all(G, communities)
    gods = god_nodes(G)
    surprises = surprising_connections(G, communities)
    questions = suggest_questions(G, communities, new_labels)
    # Count topic triple files (the actual graph sources)
    total_words = sum(len(Path(f).read_text(encoding="utf-8").split()) for f in topics)
    detection = {
        "total_files": len(topics),
        "total_words": total_words,
        "warning": None,
        "files": {"document": topics},
    }
    report = generate(
        G,
        communities,
        cohesion,
        new_labels,
        gods,
        surprises,
        detection,
        {"input": 0, "output": 0},
        str(ROOT),
        suggested_questions=questions,
    )
    Path(GP / "GRAPH_REPORT.md").write_text(report, encoding="utf-8")
    Path(GP / ".graphify_labels.json").write_text(
        json.dumps({str(k): v for k, v in new_labels.items()}, ensure_ascii=False),
        encoding="utf-8",
    )

    wrote = to_json(G, communities, str(GP / "graph.json"), force=True)
    print("to_json wrote:", wrote)
    print(
        f"FINAL: {G.number_of_nodes()} nodes, {G.number_of_edges()} edges, {len(communities)} communities"
    )

    # --- regenerate HTML ---
    py = sys.executable
    try:
        subprocess.run(
            [py, "-m", "graphify", "export", "html"], cwd=str(ROOT), check=True
        )
    except Exception as e:  # noqa: BLE001
        print(f"HTML export skipped ({e}); run: {py} -m graphify export html")

    # --- export three-graph JSON (nodes.json, edges.json, legend.json) ---
    export_three_json(GP, new_labels)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
