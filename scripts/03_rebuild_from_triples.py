#!/usr/bin/env python3
"""Rebuild the graphify graph from per-topic triples in src/**/_triples.json.

This is the canonical rebuild used for this vault (the consolidated
src/notes/_triples.json was retired in favour of topic-scoped files).

What it does, in order:
  1. Iterates every src/**/_triples.json and accumulates nodes/edges.
  2. Prunes generic type/category hubs (e.g. 'chemical', 'protein', 'enzyme').
  3. Prunes document-title nodes (sources of 'discusses' edges).
  4. Re-clusters (Leiden), preserving old community labels by majority overlap.
   5. Regenerates GRAPH_REPORT.md, .graphify_labels.json, and graph.json.
   6. Regenerates graph.html via `graphify export html`.
   7. Exports nodes.json, edges.json, legend.json for the web app
      (web/data/), copies the shared graphify JSON the app consumes
      (graph.json, manifest.json) into web/data/, and writes
      web/data/version.json with a content-hash tag the app uses for
      cache busting (tooltips/modals read entity descriptions straight
      from graph.json nodes; wiki-context.json is retired).
   8. Leaves the hand-maintained web-root files untouched. Files at the
      web root — llms.txt, robots.txt, sitemap.xml, index.html,
      components/, pages/ — describe the site for crawlers/LLMs and are
      curated by hand; this script only ever writes under web/data/ and
      graphify-out/.

Run:  python3 scripts/03_rebuild_from_triples.py
"""

from __future__ import annotations

import hashlib
import json
import re
import subprocess
import sys
import time
from collections import Counter, defaultdict
from pathlib import Path

import networkx as nx
from graphify.analyze import god_nodes, suggest_questions, surprising_connections
from graphify.cluster import cluster, score_all
from graphify.export import to_json
from graphify.report import generate

ROOT = Path(__file__).resolve().parent.parent  # repo root
GP = ROOT / "graphify-out"          # canonical graphify analysis artifacts
WEB = ROOT / "web"                  # standalone three-graph web app (deployed)
DATA_DIR = WEB / "data"             # runtime data JSONs consumed by the web app

# Hand-maintained data files the script does NOT produce but that must exist
# alongside the generated ones in web/data/ (checked by ensure_manual_data_files).
MANUAL_DATA_FILES = (
    "query.json",               # curated graph-query traces for the Trace panel
    "translations-zh-TW.json",  # zh-TW translation dictionary for UI/node labels
    "articles.json",            # article registry for the Reader (EN + zh-TW)
)

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
    "EXTRACTED": 0.7,  # >= this -> EXTRACTED, else AMBIGUOUS
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
    # String numeric confidence (e.g. "0.95"): parse and use directly.
    if isinstance(c, str) and c.replace(".", "", 1).isdigit():
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
    """Export nodes.json, edges.json, legend.json to web/data/ for the three-graph app.

    Reads the canonical graph.json from graphify-out (gp) but writes the
    web-only data files into DATA_DIR.
    """
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    graph = json.loads((gp / "graph.json").read_text(encoding="utf-8"))

    nodes = graph["nodes"]
    links = graph["links"]

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

    # Build node objects for web/ (use pre-computed metrics)
    node_objects = []
    node_id_set = {n["id"] for n in nodes}
    for n in nodes:
        cid = n["community"]
        deg = n.get("degree", 0)
        node_objects.append({
            "id": n["id"],
            "label": n["label"],
            "file_type": n.get("file_type", "concept"),
            "community": cid,
            "community_name": n.get("community_name", labels.get(cid, f"Community {cid}")),
            "degree": deg,
            "size": max(3, min(20, 3 + deg * 0.8)),
            "pagerank": n.get("pagerank", 0.0),
            "betweenness": n.get("betweenness_centrality", 0.0),
            "clustering": n.get("clustering_coefficient", 0.0),
            "k_core": n.get("k_core_number", 0),
            "source_file": n.get("source_file", ""),
            "color": {"background": color_map.get(cid, "#888888")},
        })

    # Build edge objects for web/
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
            "weight": link.get("weight", conf),
            "color": {"opacity": max(0.1, min(1.0, conf))},
        })

    (DATA_DIR / "nodes.json").write_text(
        json.dumps(node_objects, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    (DATA_DIR / "edges.json").write_text(
        json.dumps(edge_objects, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    (DATA_DIR / "legend.json").write_text(
        json.dumps(legend, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(
        f"Three-graph export: {len(node_objects)} nodes, {len(edge_objects)} edges, {len(legend)} communities"
    )


def ensure_manual_data_files() -> None:
    """Warn when hand-maintained data files expected by the web app are absent.

    query.json and translations-zh-TW.json are curated by hand (not generated
    by this script) but must live in web/data/ for the deployed app.
    """
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    missing = [name for name in MANUAL_DATA_FILES if not (DATA_DIR / name).exists()]
    if missing:
        print(
            "WARNING: hand-maintained data files missing from web/data/ "
            f"(add them manually): {', '.join(missing)}"
        )


# ------------------------------------------------------------------
# Copy shared graphify JSON that the web app consumes at runtime.
# These remain canonical in graphify-out (the source of truth) and are
# copied verbatim into web/data/ so the deployed app is self-contained.
# ------------------------------------------------------------------

# Graphify-standard artifacts the web app fetches (components/data.js).
WEB_SHARED_JSON = (
    "graph.json",
    "manifest.json",
)


def copy_shared_json() -> None:
    """Copy canonical graphify JSON into web/data/ for the deployed app."""
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    copied = 0
    for name in WEB_SHARED_JSON:
        src = GP / name
        if not src.exists():
            print(f"  skip (missing): {name}")
            continue
        import shutil

        shutil.copy2(src, DATA_DIR / name)
        copied += 1
    print(f"Copied {copied} shared graphify JSON files into web/data/")


def write_version_file() -> None:
    """Write web/data/version.json with a content-hash cache tag.

    The web app fetches this tiny file with a no-cache query string and uses
    the tag (`?v=...`) to cache-bust the larger data files, so browsers only
    re-download them when the data actually changed (instead of on every page
    load). The tag covers all data files, including hand-maintained ones, so
    manual edits to query.json/translations also bump it. Written last so a
    failed rebuild never leaves a fresh tag pointing at stale data.
    """
    files = sorted(p for p in DATA_DIR.glob("*.json") if p.name != "version.json")
    h = hashlib.sha256()
    for p in files:
        h.update(p.name.encode("utf-8"))
        h.update(p.read_bytes())
    tag = h.hexdigest()[:16]
    (DATA_DIR / "version.json").write_text(
        json.dumps(
            {
                "generated": time.strftime("%Y-%m-%d %H:%M:%S"),
                "tag": tag,
                "files": [p.name for p in files],
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )
    print(f"Wrote data version tag {tag} over {len(files)} files")


# ------------------------------------------------------------------
# Graph enrichment: pre-compute node/edge metrics for graph.json
# ------------------------------------------------------------------


def enrich_graph_metrics(
    G: nx.DiGraph,
    communities: dict[int, list[str]],
    new_labels: dict[int, str],
    cohesion: dict[int, float],
    gods: list[dict],
    surprises: list[dict],
) -> dict:
    """Compute and attach node/edge metrics, return graph-level metadata.

    Node attributes added: degree, in_degree, out_degree, pagerank,
    betweenness_centrality, clustering_coefficient, k_core_number,
    community_size, community_name.

    Edge attributes added: weight (from confidence_score).

    Returns a dict of graph-level metadata to inject into graph.json
    after to_json writes it.
    """
    import time

    t0 = time.time()

    # --- undirected view for metrics that don't need direction ---
    G_und = G.to_undirected()

    # --- node metrics ---
    print("  Computing node metrics...")

    for n in G.nodes():
        G.nodes[n]["degree"] = G.in_degree(n) + G.out_degree(n)
        G.nodes[n]["in_degree"] = G.in_degree(n)
        G.nodes[n]["out_degree"] = G.out_degree(n)

    pr = nx.pagerank(G, alpha=0.85, max_iter=200)
    for n in G.nodes():
        G.nodes[n]["pagerank"] = round(pr.get(n, 0.0), 8)

    bet = nx.betweenness_centrality(G_und)
    for n in G.nodes():
        G.nodes[n]["betweenness_centrality"] = round(bet.get(n, 0.0), 8)

    clust = nx.clustering(G_und)
    for n in G.nodes():
        G.nodes[n]["clustering_coefficient"] = round(clust.get(n, 0.0), 8)

    kcore = nx.core_number(G_und)
    for n in G.nodes():
        G.nodes[n]["k_core_number"] = kcore.get(n, 0)

    community_sizes = {cid: len(members) for cid, members in communities.items()}
    node_community = {}
    for cid, members in communities.items():
        for m in members:
            node_community[m] = cid
    for n in G.nodes():
        cid = node_community.get(n)
        G.nodes[n]["community_size"] = community_sizes.get(cid, 0) if cid is not None else 0
        G.nodes[n]["community_name"] = new_labels.get(cid, f"Community {cid}") if cid is not None else ""

    # --- edge weight from confidence_score ---
    for u, v, d in G.edges(data=True):
        d["weight"] = d.get("confidence_score", 0.7)

    node_count = G.number_of_nodes()
    edge_count = G.number_of_edges()
    dt = time.time() - t0
    print(f"  Node/edge metrics computed in {dt:.1f}s ({node_count}n/{edge_count}e)")

    # --- graph-level metadata ---
    graph_meta = {
        "community_labels": {str(k): v for k, v in new_labels.items()},
        "community_cohesion": {str(k): round(v, 4) for k, v in cohesion.items()},
        "community_sizes": {str(k): v for k, v in community_sizes.items()},
        "god_nodes": gods,
        "surprising_connections": surprises,
        "metrics_computed_at": time.strftime("%Y-%m-%d %H:%M:%S"),
    }
    return graph_meta


def inject_graph_metadata(gp: Path, metadata: dict) -> None:
    """Post-process graph.json to add graph-level metadata."""
    path = gp / "graph.json"
    data = json.loads(path.read_text(encoding="utf-8"))
    data["metadata"] = metadata
    path.write_text(
        json.dumps(data, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    print(f"Injected graph metadata: {len(metadata)} top-level keys")


def main() -> int:
    topics = sorted(str(p) for p in ROOT.glob("src/**/_triples.json"))
    if not topics:
        print("No _triples.json files found under src/")
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
                        description=t.get("context", ""),
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
    discusses_sources = {
        u for u, _, e in G.edges(data=True) if e.get("relation") == "discusses"
    }
    docs = set()
    for n in discusses_sources:
        edge_relations = {e[2].get("relation") for e in G.edges(n, data=True)}
        # A pure document node only has 'discusses' and possibly 'has_type'
        non_trivial = edge_relations - {"discusses", "has_type"}
        if not non_trivial:
            docs.add(n)
    G.remove_nodes_from(docs)
    print(
        f"Pruned {len(docs)} document-title nodes (of {len(discusses_sources)} discusses sources)"
    )

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

    # --- enrich graph with pre-computed metrics ---
    graph_meta = enrich_graph_metrics(G, communities, new_labels, cohesion, gods, surprises)

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

    WEB.mkdir(parents=True, exist_ok=True)

    wrote = to_json(G, communities, str(GP / "graph.json"), force=True)
    print("to_json wrote:", wrote)

    # --- inject graph-level metadata ---
    inject_graph_metadata(GP, graph_meta)

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

    # --- copy shared graphify JSON the web app needs into web/data/ ---
    copy_shared_json()

    # --- sanity-check hand-maintained data files (query.json, translations) ---
    ensure_manual_data_files()

    # --- write content-hash version tag for web-app cache busting ---
    write_version_file()

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
