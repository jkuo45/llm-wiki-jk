#!/usr/bin/env python3
"""Shared graph-building helpers used by both graph rebuild pipelines.

Extracted from scripts/03_rebuild_from_triples.py so the triples-graph and
wiki-graph builders stay schema-identical and cannot drift:

  - norm / strip_wikilink / parse_wikilink_target  -- id + wikilink parsing
  - generate_community_colors                     -- palette assignment
  - enrich_graph_metrics                         -- node/edge metric attach
  - inject_graph_metadata                        -- post-write metadata inject
  - export_roles_json                            -- standalone node_roles.json

The wiki builder (scripts/05_rebuild_from_wiki.py) and the triples builder
(scripts/03_rebuild_from_triples.py) both import from here.
"""

from __future__ import annotations

import json
import re
import time
import unicodedata
from pathlib import Path

import networkx as nx

# Color palette for communities (Tableau-inspired). Shared so the two graphs
# use the same color ordering for comparable community IDs.
PALETTE = [
    "#4E79A7", "#F28E2B", "#E15759", "#76B7B2", "#59A14F",
    "#EDC948", "#B07AA1", "#FF9DA7", "#9C755F", "#BAB0AC",
    "#86BCB6", "#D37295", "#FABFD2", "#B6992D", "#F1CE63",
    "#A0CBE8", "#FFBE7D", "#8CD17D", "#D4A6C8", "#B6992D",
]


# ----------------------------------------------------------------------
# Wikilink / id parsing
# ----------------------------------------------------------------------

def strip_wikilink(s: str) -> str:
    """Return the *display* text of a `[[link|display]]` (used by triples,
    where the stored subject/object is the human label, not the target)."""
    return re.sub(
        r"\[\[([^\]]+)\]\]",
        lambda m: m.group(1).split("|", 1)[1] if "|" in m.group(1) else m.group(1),
        s,
    ).strip()


# Greek letters -> ASCII spelled-out names. Transliterating to the full name
# (rather than a single Latin letter) makes symbol forms collapse onto their
# spelled-out equivalents, e.g. "NF-κB" ("kappa" + "b") and "NF-kappab" both
# normalize to "nfkappab". This is what lets the same entity share one id
# across the triples graph and the wiki graph despite different notation.
_GREEK = {
    "α": "alpha", "β": "beta", "γ": "gamma", "δ": "delta", "ε": "epsilon",
    "ζ": "zeta", "η": "eta", "θ": "theta", "ι": "iota", "κ": "kappa",
    "λ": "lambda", "μ": "mu", "ν": "nu", "ξ": "xi", "ο": "omicron",
    "π": "pi", "ρ": "rho", "σ": "sigma", "ς": "sigma", "τ": "tau",
    "υ": "upsilon", "φ": "phi", "χ": "chi", "ψ": "psi", "ω": "omega",
    "Α": "alpha", "Β": "beta", "Γ": "gamma", "Δ": "delta", "Ε": "epsilon",
    "Ζ": "zeta", "Η": "eta", "Θ": "theta", "Ι": "iota", "Κ": "kappa",
    "Λ": "lambda", "Μ": "mu", "Ν": "nu", "Ξ": "xi", "Ο": "omicron",
    "Π": "pi", "Ρ": "rho", "Σ": "sigma", "Τ": "tau", "Υ": "upsilon",
    "Φ": "phi", "Χ": "chi", "Ψ": "psi", "Ω": "omega",
}


def _transliterate(s: str) -> str:
    """Replace Greek letters with their ASCII spelled-out names."""
    return "".join(_GREEK.get(ch, ch) for ch in s)


def norm(label: str) -> str:
    """Canonical node id: lowercase, non-alphanumerics -> single underscore.

    Unicode is first NFC/NFKC-normalized (canonicalizing full-width, variant,
    and compatibility characters) and Greek letters are transliterated to their
    spelled-out ASCII names, so symbol and spelled-out notations of the same
    entity share one id (e.g. "NF-κB" and "NF-kappab" -> "nfkappab").

    Both the triples graph and the wiki graph key nodes by norm(label), so the
    same entity (e.g. "SIRT1") gets the identical id ("sirt1") in both graphs
    and the two can be joined on `id` directly."""
    s = strip_wikilink(label).strip()
    s = unicodedata.normalize("NFKC", s).lower()
    s = _transliterate(s)
    return re.sub(r"[^a-z0-9]+", "_", s).strip("_")


def parse_wikilink_target(s: str) -> str:
    """Return the *target* id of an Obsidian wikilink `[[Target|Display]]`.

    Obsidian resolves on the LEFT side of `|` (the link target), with the right
    side being display text only. Unlike strip_wikilink(), this returns the
    target so `[[p53|p53 protein]]` resolves to the `p53` note, not a bogus
    `p53_protein` node."""
    # strip outer [[ ]] if present (handles bare targets too)
    m = re.match(r"^\s*\[\[(.*)\]\]\s*$", s)
    if m:
        s = m.group(1)
    target = s.split("|", 1)[0].strip()
    return norm(target)


# ----------------------------------------------------------------------
# Community colors
# ----------------------------------------------------------------------

def generate_community_colors(legend: list[dict]) -> dict[int, str]:
    """Assign colors to community IDs, rotating through PALETTE."""
    colors = {}
    for i, entry in enumerate(legend):
        colors[entry["cid"]] = PALETTE[i % len(PALETTE)]
    return colors


# ----------------------------------------------------------------------
# Metric enrichment (mirrors 03_rebuild enrich_graph_metrics)
# ----------------------------------------------------------------------

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
        G.nodes[n]["community_size"] = (
            community_sizes.get(cid, 0) if cid is not None else 0
        )
        G.nodes[n]["community_name"] = (
            new_labels.get(cid, f"Community {cid}") if cid is not None else ""
        )

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


def inject_graph_metadata(path: Path, metadata: dict) -> None:
    """Post-process a graph.json-style file to add graph-level metadata.

    `path` is the actual JSON file (e.g. wiki-out/wiki-graph.json), unlike the
    original which hardcoded graph.json under a directory."""
    data = json.loads(path.read_text(encoding="utf-8"))
    data["metadata"] = metadata
    path.write_text(
        json.dumps(data, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    print(f"Injected graph metadata: {len(metadata)} top-level keys")


# ----------------------------------------------------------------------
# Standalone role artifact (mirrors the role-baking section of
# 03_rebuild export_three_json, but writes only node_roles.json to an
# arbitrary path so the wiki graph can live outside web/data/).
# ----------------------------------------------------------------------

_EXEMPLAR_METRIC = {
    "Spreader": "out_degree",
    "Sink": "in_degree",
    "Master regulator": "pagerank",
    "Bottleneck": "betweenness",
    "Module member": "clustering",
    "Core backbone": "k_core",
    "Periphery": "pagerank",
}


def export_roles_json(
    graph: dict,
    labels: dict[int, str],
    out_path: Path,
    source_graph: str = "",
) -> None:
    """Emit web/data-style node_roles.json (per-node biological roles) to
    `out_path`. Uses scripts/_node_roles_lib as the single source of truth, so
    the classifier stays consistent with scripts/04_role_query.py."""
    import _node_roles_lib

    nodes = graph["nodes"]
    fps = [_node_roles_lib._fingerprint(n) for n in nodes]
    thresholds = _node_roles_lib.compute_thresholds(fps)

    node_roles: dict[str, list[str]] = {}
    role_counts = {name: 0 for name, _ in _node_roles_lib.ROLE_DEFS}
    multi = 0
    role_records = []
    for n, fp in zip(nodes, fps):
        roles = _node_roles_lib.classify(fp, thresholds)
        nid = n.get("id")
        node_roles[nid] = roles
        for r in roles:
            role_counts[r] += 1
        if len(roles) > 1:
            multi += 1
        role_records.append({
            "id": nid,
            "label": n.get("label", nid),
            "roles": roles,
            "metrics": fp,
        })

    # Per-role exemplars: top-3 nodes for each role by its driving metric.
    exemplars: dict[str, list[dict]] = {}
    for role_name, metric in _EXEMPLAR_METRIC.items():
        pool = [r for r in role_records if role_name in r["roles"]]
        pool.sort(key=lambda r: r["metrics"].get(metric, 0.0), reverse=True)
        exemplars[role_name] = [
            {
                "id": r["id"],
                "label": r["label"],
                "value": round(float(r["metrics"].get(metric, 0.0)), 8),
            }
            for r in pool[:3]
        ]

    node_roles_doc = {
        "generated_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "source_graph": source_graph,
        "rules": {
            name: {"definition": expr, "operational": True}
            for name, expr in _node_roles_lib.ROLE_DEFS
        },
        "thresholds": {k: round(v, 10) for k, v in thresholds.items()},
        "summary": {
            "node_count": len(role_records),
            "role_counts": role_counts,
            "nodes_with_multiple_roles": multi,
            "exemplars": exemplars,
        },
        "nodes": role_records,
    }

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(
        json.dumps(node_roles_doc, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    print(f"Wrote role artifact: {out_path} ({len(role_records)} nodes)")


# ----------------------------------------------------------------------
# Wiki web-data export (mirrors 03_rebuild export_three_json, but writes
# wiki-prefixed files into web/data/ so the deployed three-graph viewer can
# show the wiki graph as an alternative / combined dataset).
# ----------------------------------------------------------------------

def export_wiki_three_json(graph: dict, labels: dict[int, str], web_data_dir: Path) -> None:
    """Emit web/data/wiki-{nodes,edges,legend,graph-meta,node_roles,roles-meta}.json.

    The node/edge schema is identical to the triples nodes.json/edges.json so
    the front-end renders either dataset (or their union) without branching.
    Wiki edges use relation "links_to", confidence "EXTRACTED", weight = mention
    count."""
    from collections import Counter

    web_data_dir = Path(web_data_dir)
    web_data_dir.mkdir(parents=True, exist_ok=True)
    nodes = graph["nodes"]
    links = graph["links"]

    # --- legend (community membership + color) ---
    community_counts: Counter = Counter()
    for n in nodes:
        community_counts[n["community"]] += 1
    legend = [
        {"cid": cid, "label": labels.get(cid, f"Community {cid}"), "count": count}
        for cid, count in community_counts.most_common()
    ]
    color_map = generate_community_colors(legend)
    for entry in legend:
        entry["color"] = color_map[entry["cid"]]

    # --- node objects ---
    node_objects = []
    node_id_set = {n["id"] for n in nodes}
    for n in nodes:
        cid = n.get("community", 0)
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
            "source_triples": n.get("source_triples", ""),
            "description": n.get("description", ""),
            "description_zh_TW": n.get("description_zh_TW", ""),
            "updated": n.get("updated", ""),
            "color": {"background": color_map.get(cid, "#888888")},
        })

    # --- edge objects ---
    edge_objects = []
    for link in links:
        src = link["source"]
        tgt = link["target"]
        if src not in node_id_set or tgt not in node_id_set:
            continue
        cs = link.get("confidence_score", 1.0)
        edge_objects.append({
            "from": src,
            "to": tgt,
            "label": link.get("relation", ""),
            "confidence": link.get("confidence", "EXTRACTED"),
            "confidence_score": cs,
            "weight": link.get("weight", cs),
            "context": link.get("context", ""),
            "context_zh_TW": link.get("context_zh_TW", ""),
            "created": link.get("created", ""),
            "updated": link.get("updated", ""),
            "color": {"opacity": max(0.1, min(1.0, cs))},
        })

    (web_data_dir / "wiki-nodes.json").write_text(
        json.dumps(node_objects, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    (web_data_dir / "wiki-edges.json").write_text(
        json.dumps(edge_objects, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    (web_data_dir / "wiki-legend.json").write_text(
        json.dumps(legend, ensure_ascii=False, indent=2), encoding="utf-8",
    )

    # --- roles (standalone + roles-meta) ---
    out_roles = web_data_dir / "wiki-node_roles.json"
    export_roles_json(graph, labels, out_roles, source_graph=str(out_roles))
    roles_doc = json.loads(out_roles.read_text(encoding="utf-8"))
    roles_meta = {
        "generated_at": roles_doc["generated_at"],
        "graph_build": roles_doc.get("graph_build", ""),
        "rules": roles_doc["rules"],
        "thresholds": roles_doc["thresholds"],
        "summary": roles_doc["summary"],
    }
    (web_data_dir / "wiki-roles-meta.json").write_text(
        json.dumps(roles_meta, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )

    # --- graph metadata ---
    (web_data_dir / "wiki-graph-meta.json").write_text(
        json.dumps(graph.get("metadata", {}), ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    print(
        f"Wrote wiki web data: {len(node_objects)} nodes, {len(edge_objects)} edges, "
        f"{len(legend)} communities -> {web_data_dir}"
    )


def write_web_version(web_data_dir: Path) -> None:
    """Recompute web/data/version.json content hash over all data files.

    Adding wiki-*.json files changes the hash so browsers re-fetch the new
    artifacts. Mirrors the cache-busting purpose of 03_rebuild's version file
    without re-running the full triples rebuild."""
    import hashlib

    web_data_dir = Path(web_data_dir)
    h = hashlib.sha256()
    files = sorted(p for p in web_data_dir.glob("*.json") if p.name != "version.json")
    for p in files:
        h.update(p.name.encode("utf-8"))
        h.update(p.read_bytes())
    data_hash = h.hexdigest()[:16]
    (web_data_dir / "version.json").write_text(
        json.dumps(
            {"generated": time.strftime("%Y-%m-%d %H:%M:%S"), "hash": data_hash,
             "files": [p.name for p in files]},
            ensure_ascii=False, indent=2,
        ),
        encoding="utf-8",
    )
    print(f"Wrote web/data/version.json (hash {data_hash}, {len(files)} files)")
