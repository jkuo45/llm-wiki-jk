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
  7. Exports nodes.json, edges.json, legend.json for three-graph.html.

Run:  python3 scripts/03_rebuild_from_triples.py
"""

from __future__ import annotations

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
    """Export nodes.json, edges.json, legend.json from graph.json for three-graph.html."""
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

    # Build node objects for three-graph.html (use pre-computed metrics)
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
            "weight": link.get("weight", conf),
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
    print(
        f"Three-graph export: {len(node_objects)} nodes, {len(edge_objects)} edges, {len(legend)} communities"
    )


# ------------------------------------------------------------------
# Wiki context export (for three-graph.html Source/Context node panels)
# ------------------------------------------------------------------

GITHUB_BASE = "https://github.com/jkuo45/llm-wiki-jk/blob/dev/"
NOTES_DIR = ROOT / "src" / "notes"
TARGET_WORDS = 650
MAX_WORDS = 700


def _strip_frontmatter(text: str) -> str:
    return re.sub(r"^---.*?---\s*", "", text, count=1, flags=re.DOTALL).strip()


def _strip_markdown(text: str) -> str:
    """Remove all markdown/obsidian syntax, leaving plain prose."""
    s = text
    # Wiki links [[Link]] or [[Link|Display]] → Display or Link
    # Also handles malformed [[A], [B]] patterns
    s = re.sub(r"\[\[(.+?)\]\]",
               lambda m: m.group(1).split("|", 1)[1] if "|" in m.group(1) else m.group(1), s)
    # Cleanup any stray ]] or [[ left by malformed/truncated links
    s = s.replace("]]", "")
    s = s.replace("[[", "")
    # Stray single-bracket links [Entity] that look like wiki links
    s = re.sub(r"\[([A-Z][^\]]{2,}?)\](?!\()", r"\1", s)
    # Footnotes [^1]
    s = re.sub(r"\[\^\d+\]", "", s)
    # Images ![alt](url)
    s = re.sub(r"!\[([^\]]*)\]\([^)]*\)", r"\1", s)
    # Inline links [text](url) → text
    s = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", s)
    # Headings  ## Foo → Foo
    s = re.sub(r"^#{1,6}\s+", "", s, flags=re.MULTILINE)
    # Bold / italic variants (DOTALL to match across newlines)
    s = re.sub(r"\*\*\*(.+?)\*\*\*", r"\1", s, flags=re.DOTALL)
    s = re.sub(r"___(.+?)___", r"\1", s, flags=re.DOTALL)
    s = re.sub(r"\*\*(.+?)\*\*", r"\1", s, flags=re.DOTALL)
    s = re.sub(r"__(.+?)__", r"\1", s, flags=re.DOTALL)
    s = re.sub(r"\*(.+?)\*", r"\1", s, flags=re.DOTALL)
    s = re.sub(r"_(.+?)_", r"\1", s, flags=re.DOTALL)
    # Strikethrough
    s = re.sub(r"~~(.+?)~~", r"\1", s, flags=re.DOTALL)
    # Blockquotes  > text → text
    s = re.sub(r"^>\s?", "", s, flags=re.MULTILINE)
    # Horizontal rules
    s = re.sub(r"^[-*_]{3,}\s*$", "", s, flags=re.MULTILINE)
    # Table syntax  | col | col |  →  col  col
    s = re.sub(r"^\|", "", s, flags=re.MULTILINE)
    s = re.sub(r"\|$", "", s, flags=re.MULTILINE)
    s = re.sub(r"\|", "  ", s)
    # Unordered list markers
    s = re.sub(r"^[\s]*[-*+]\s+", "", s, flags=re.MULTILINE)
    # Ordered list markers
    s = re.sub(r"^[\s]*\d+\.\s+", "", s, flags=re.MULTILINE)
    # Inline code
    s = re.sub(r"`([^`]+)`", r"\1", s)
    # HTML tags (sub, sup, br, span, etc.)
    s = re.sub(r"<[^>]+>", "", s)
    # Collapse blank lines
    s = re.sub(r"\n{3,}", "\n\n", s)
    # Remove duplicated headings: if a non-empty line starts with the same
    # text as a recent non-empty line (heading stub repeated as body opener),
    # drop the shorter one.  Blank lines between them are fine.
    # Also handles "The Epigenome" matching heading "Epigenome" and
    # end-of-heading + start-of-body overlaps.
    def _words_overlap_end_start(a: str, b: str) -> bool:
        """Check if the end of line a matches the start of line b (word-boundary).
        Allows skipping 1-2 leading words in b (e.g. 'In the Prefrontal Cortex')."""
        wa, wb = a.lower().split(), b.lower().split()
        for n in range(min(3, len(wa), len(wb)), 0, -1):
            tail = wa[-n:]
            for skip in range(min(3, len(wb) - n + 1)):
                if wb[skip:skip + n] == tail:
                    return True
        return False

    lines = s.split("\n")
    deduped: list[str] = []
    recent_nonempty: list[int] = []
    for line in lines:
        stripped = line.strip()
        if stripped:
            drop = False
            for idx in reversed(recent_nonempty):
                prev = deduped[idx].strip()
                if not prev:
                    continue
                sl, pl = stripped.lower(), prev.lower()
                # Direct prefix match
                if sl.startswith(pl) or pl.startswith(sl):
                    if len(stripped) > len(prev):
                        deduped[idx] = ""
                        recent_nonempty.remove(idx)
                    else:
                        drop = True
                    break
                # Skip leading article ("The Epigenome" vs "Epigenome")
                matched_skip = False
                longer = sl if len(sl) >= len(pl) else pl
                shorter = pl if len(sl) >= len(pl) else sl
                for skip in range(1, min(3, len(longer.split()))):
                    remainder = " ".join(longer.split()[skip:])
                    if remainder.startswith(shorter):
                        if len(stripped) > len(prev):
                            deduped[idx] = ""
                            recent_nonempty.remove(idx)
                        else:
                            drop = True
                        matched_skip = True
                        break
                if matched_skip:
                    break
                # End-of-heading matches start-of-body
                if _words_overlap_end_start(prev, stripped) or _words_overlap_end_start(stripped, prev):
                    if len(stripped) > len(prev):
                        deduped[idx] = ""
                        recent_nonempty.remove(idx)
                    else:
                        drop = True
                    break
            if drop:
                continue
        deduped.append(line)
        if stripped:
            recent_nonempty.append(len(deduped) - 1)
            if len(recent_nonempty) > 5:
                recent_nonempty.pop(0)
    # Also deduplicate repeated phrases within a single line (heading + body
    # concatenated into one line after markdown stripping).
    result_lines: list[str] = []
    for line in deduped:
        words = line.split()
        if len(words) >= 4:
            lower = [w.lower() for w in words]
            # Check for any consecutive repeated phrase (not just from pos 0)
            for n in range(min(5, len(words) // 2), 1, -1):
                found = False
                for i in range(len(words) - 2 * n + 1):
                    if lower[i:i + n] == lower[i + n:i + 2 * n]:
                        line = " ".join(words[:i] + words[i + n:])
                        found = True
                        break
                if found:
                    break
        result_lines.append(line)
    return "\n".join(result_lines).strip()


def _truncate_words(text: str, target: int = TARGET_WORDS, hard_max: int = MAX_WORDS) -> str:
    words = text.split()
    if len(words) <= hard_max:
        return text
    truncated = " ".join(words[:target])
    # Cut at last sentence boundary
    cut = max(truncated.rfind("."), truncated.rfind("!"), truncated.rfind("?"))
    if cut > target * 0.5:
        truncated = truncated[: cut + 1]
    return truncated


def _build_note_index() -> dict[str, str]:
    """Map lowercase note filenames (without .md) → relative path from repo root."""
    index: dict[str, str] = {}
    for md_file in NOTES_DIR.rglob("*.md"):
        if md_file.stem == md_file.parent.name:
            continue
        index[md_file.stem.lower()] = md_file.relative_to(ROOT).as_posix()
    return index


def export_wiki_context(gp: Path, node_ids: set[str]) -> None:
    """Write wiki-context.json mapping node IDs to wiki note content + source URLs."""
    note_index = _build_note_index()
    # Load graph.json to get node labels (canonical names)
    graph = json.loads((gp / "graph.json").read_text(encoding="utf-8"))
    id_to_label = {n["id"]: n["label"] for n in graph["nodes"]}

    ctx: dict[str, dict] = {}
    matched = 0
    for nid in node_ids:
        label = id_to_label.get(nid, "")
        if not label:
            continue
        rel_path = note_index.get(label.lower())
        if not rel_path:
            continue
        full_path = ROOT / rel_path
        if not full_path.exists():
            continue
        try:
            raw = full_path.read_text(encoding="utf-8")
        except Exception:  # noqa: BLE001
            continue
        body = _strip_frontmatter(raw)
        body = _strip_markdown(body)
        ctx[nid] = {
            "wiki_path": rel_path,
            "wiki_url": GITHUB_BASE + rel_path,
            "description": _truncate_words(body),
        }
        matched += 1

    (gp / "wiki-context.json").write_text(
        json.dumps(ctx, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    not_found = len(node_ids) - matched
    print(f"Wiki context: {matched} nodes matched, {not_found} not found")


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

    # --- export wiki context for three-graph.html node info panels ---
    node_ids = set(G.nodes())
    export_wiki_context(GP, node_ids)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
