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
7. Exports nodes.json, edges.json, legend.json, node_roles.json

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
from datetime import datetime, timezone
from pathlib import Path

import networkx as nx
from graphify.analyze import god_nodes, suggest_questions, surprising_connections
from graphify.cluster import cluster, score_all
from graphify.export import to_json
from graphify.report import generate

# Shared graph-building helpers (norm, enrich_graph_metrics, ...).
sys.path.insert(0, str(Path(__file__).resolve().parent))
from _graph_common import (
    PALETTE,
    enrich_graph_metrics,
    generate_community_colors,
    inject_graph_metadata,
    norm,
    strip_wikilink,
)

ROOT = Path(__file__).resolve().parent.parent  # repo root
GP = ROOT / "graphify-out"  # canonical graphify analysis artifacts
WEB = ROOT / "web"  # standalone three-graph web app (deployed)
DATA_DIR = WEB / "data"  # runtime data JSONs consumed by the web app
NOTES_DIR = ROOT / "src" / "notes"  # topic-scoped entity notes (topic = directory)

# Hand-maintained data files the script does NOT produce but that must exist
# alongside the generated ones in web/data/ (checked by ensure_manual_data_files).
MANUAL_DATA_FILES = (
    "query.json",  # curated graph-query traces for the Trace panel
    "translations-zh-TW.json",  # zh-TW translation dictionary for UI/node labels
    "predicates-zh-TW.json",  # zh-TW relationship-predicate labels (display only)
    "articles.json",  # article registry for the Reader (EN + zh-TW)
    "notes-tags-zh-TW.json",  # zh-TW tag labels for the Notes panel gallery
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


def get_context(t: dict, lang: str) -> str:
    """Return a triple's context for a language.

    Handles both the legacy flat-string form (treated as en-US) and the v2
    multilingual map. Languages without a translation fall back to en-US so a
    partially-translated corpus never produces empty node/edge text.
    """
    c = t.get("context", "")
    if isinstance(c, dict):
        en = c.get("en-US", "") or ""
        if lang == "en-US":
            return en
        return c.get(lang, "") or en
    return c if lang == "en-US" else c


def iso_ts(t: dict, key: str, default: str = "") -> str:
    """Return a triple timestamp field as a string ('' when absent)."""
    v = t.get(key)
    return v if isinstance(v, str) and v else default


def has_translation(t: dict, lang: str) -> bool:
    """True when the triple carries a genuine non-empty context for `lang`
    (not a fallback). Distinguishes 'translated to zh-TW' from the en-US
    fallback that get_context() applies."""
    c = t.get("context")
    return isinstance(c, dict) and bool(c.get(lang))


def _newer(updated: str, score: float, existing: dict) -> bool:
    """Edge dedupe rule: most-recent `updated` wins; tie-break higher
    confidence; on a full tie keep the first (existing) record.
    ISO-8601 UTC strings are lexicographically orderable."""
    if updated > existing["updated"]:
        return True
    if updated == existing["updated"] and score > existing["score"]:
        return True
    return False


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

    # --- Classify per-node biological roles ---
    # Roles are derived from the same static fingerprint already on each node.
    # The classifier lives in scripts/node_roles_lib.py (single source of truth,
    # shared with scripts/04_role_query.py) and computes all thresholds from the
    # live graph so it stays calibrated as the build evolves. The result is
    # baked into each node object (nodes.json) and also emitted as the standalone
    # web/data/node_roles.json artifact.
    import node_roles_lib

    fps = [node_roles_lib._fingerprint(n) for n in nodes]
    thresholds = node_roles_lib.compute_thresholds(fps)
    _pr_p90 = thresholds["pagerank_p90"]
    _pr_p95 = thresholds["pagerank_p95"]
    _out_p90 = thresholds["out_degree_p90"]
    _out_p95 = thresholds["out_degree_p95"]
    _btw_p90 = thresholds["betweenness_p90"]

    # Build the per-node role map (for nodes.json) and the standalone
    # node_roles.json document in one pass.
    node_roles: dict[str, list[str]] = {}
    role_records = []
    role_counts = {name: 0 for name, _ in node_roles_lib.ROLE_DEFS}
    multi = 0
    for n, fp in zip(nodes, fps):
        roles = node_roles_lib.classify(fp, thresholds)
        node_roles[n["id"]] = roles
        for r in roles:
            role_counts[r] += 1
        if len(roles) > 1:
            multi += 1
        role_records.append({
            "id": n.get("id"),
            "label": n.get("label", n.get("id")),
            "roles": roles,
            "metrics": fp,
        })

    # Per-role exemplars: the top-3 nodes for each role, ranked by that
    # role's driving metric. Gives every role an at-a-glance sanity anchor
    # in node_roles.json / roles-meta.json (mirrors 04_role_query.py --role).
    _EXEMPLAR_METRIC = {
        "Spreader": "out_degree",
        "Sink": "in_degree",
        "Master regulator": "pagerank",
        "Bottleneck": "betweenness",
        "Module member": "clustering",
        "Core backbone": "k_core",
        "Periphery": "pagerank",
    }
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
        "source_graph": "graphify-out/graph.json",
        "graph_build": graph.get("built_at_commit", ""),
        "rules": {
            name: {"definition": expr, "operational": True}
            for name, expr in node_roles_lib.ROLE_DEFS
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
            "community_name": n.get(
                "community_name", labels.get(cid, f"Community {cid}")
            ),
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
            "roles": node_roles.get(n["id"], []),
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
            "context": link.get("context", ""),
            "context_zh_TW": link.get("context_zh_TW", ""),
            "created": link.get("created", ""),
            "updated": link.get("updated", ""),
            "color": {"opacity": max(0.1, min(1.0, conf))},
        })

    (DATA_DIR / "triples-nodes.json").write_text(
        json.dumps(node_objects, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    (DATA_DIR / "triples-edges.json").write_text(
        json.dumps(edge_objects, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    (DATA_DIR / "triples-legend.json").write_text(
        json.dumps(legend, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    (DATA_DIR / "triples-node_roles.json").write_text(
        json.dumps(node_roles_doc, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    # Client-facing slice of the role artifact (~1 KB): the full node table
    # stays in triples-node_roles.json (CLI-only); the web app only needs the
    # rule catalog, live thresholds, and summary counts to explain role badges.
    roles_meta = {
        "generated_at": node_roles_doc["generated_at"],
        "graph_build": node_roles_doc["graph_build"],
        "rules": node_roles_doc["rules"],
        "thresholds": node_roles_doc["thresholds"],
        "summary": node_roles_doc["summary"],
    }
    (DATA_DIR / "triples-roles-meta.json").write_text(
        json.dumps(roles_meta, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    print(
        f"Three-graph export: {len(node_objects)} nodes, {len(edge_objects)} edges, "
        f"{len(legend)} communities, {len(role_records)} role-tagged nodes"
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


# Keys dropped from the version hash. Two classes:
#   1. Provenance / timestamps that differ every run but aren't consumed data
#      (git commit, generation timestamps, per-entity updated/created).
#   2. The Leiden clustering OUTPUT — community assignment and everything
#      derived from it (labels, cohesion, sizes, node color, god/surprising
#      connection reports). Leiden is non-deterministic run-to-run (a +-1
#      community drift) yet adds no semantic signal beyond the deterministic
#      graph topology, so including it would make the tag churn on every
#      rebuild with no real change.
# Excluding both makes the tag stable for identical logical data (topology,
# metrics, roles, descriptions, edges) while still changing on any genuine
# node/edge/metric/role/description change.
HASH_EXCLUDE_KEYS = {
    # provenance / timestamps
    "generated_at",
    "built_at_commit",
    "metrics_computed_at",
    "generated",
    "timestamp",
    "updated",
    "created",
    "description_updated",
    # non-deterministic Leiden clustering output
    "community",
    "community_name",
    "community_size",
    "community_labels",
    "community_cohesion",
    "community_sizes",
    "color",
    "god_nodes",
    "surprising_connections",
}

# Files that are *entirely* clustering-derived and therefore never stable across
# runs (legend.json is a pure community-id -> label/color/count map). Skipped
# from the hash so they don't churn the tag; still listed in version.json's
# files array for reference.
HASH_SKIP_FILES = {"legend.json"}


def _stable_bytes(obj) -> bytes:
    """Canonical, hash-excluded JSON bytes for content hashing.

    Recursively drops HASH_EXCLUDE_KEYS and emits key-sorted, compact JSON.
    Two files with identical semantic content hash the same even if their
    embedded timestamps or community assignments differ.

    Assembled manually (not via ``json.dumps`` over a dict whose values are
    already bytes) so no ``bytes`` value is ever handed back to ``json.dumps``
    — that would raise and silently fall back to hashing raw volatile bytes.
    Lists are order-independent: elements are sorted by their canonical bytes,
    so array reordering (nodes grouped by a drifting Leiden community, edges
    emitted in a different sequence) does not churn the tag when the *set* of
    elements is unchanged.
    """
    if isinstance(obj, dict):
        parts = []
        for k in sorted(obj):
            if k in HASH_EXCLUDE_KEYS:
                continue
            parts.append(
                json.dumps(k, ensure_ascii=False, sort_keys=True).encode("utf-8")
                + b":"
                + _stable_bytes(obj[k])
            )
        return b"{" + b",".join(parts) + b"}"
    if isinstance(obj, list):
        parts = sorted(_stable_bytes(v) for v in obj)
        return b"[" + b",".join(parts) + b"]"
    return json.dumps(obj, ensure_ascii=False, sort_keys=True).encode("utf-8")


def write_version_file() -> None:
    """Write web/data/version.json with a content hash (cache-busting).

    The web app fetches this tiny file with a no-cache query string and uses
    the hash (`?v=...`) to cache-bust the larger data files, so browsers only
    re-download them when the data actually changed (instead of on every page
    load). The hash covers all data files, including hand-maintained ones, so
    manual edits to query.json/translations also bump it. Written last so a
    failed rebuild never leaves a fresh hash pointing at stale data.

    The hash is idempotent to content: it runs over a key-sorted view of each
    file with provenance timestamps AND the non-deterministic Leiden clustering
    output (community assignment, labels, legend) excluded, so a rebuild that
    yields the same logical data keeps the same hash. File names are still
    included, so adding or removing a data file still changes the hash.
    """
    files = sorted(p for p in DATA_DIR.glob("*.json") if p.name != "version.json")
    h = hashlib.sha256()
    for p in files:
        if p.name in HASH_SKIP_FILES:
            continue
        h.update(p.name.encode("utf-8"))
        try:
            h.update(_stable_bytes(json.loads(p.read_text(encoding="utf-8"))))
        except Exception:  # noqa: BLE001 - fall back to raw bytes for non-JSON
            h.update(p.read_bytes())
    data_hash = h.hexdigest()[:16]
    (DATA_DIR / "version.json").write_text(
        json.dumps(
            {
                "generated": time.strftime("%Y-%m-%d %H:%M:%S"),
                "hash": data_hash,
                "files": [p.name for p in files],
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )
    print(f"Wrote data version hash {data_hash} over {len(files)} files")


def write_topics_json() -> None:
    """Write web/data/topics.json: the controlled topic-slug vocabulary.

    The web notes panel (components/notes.js) derives a card's display topic
    from its tags by preferring a slug that is a real topic directory. Instead
    of maintaining a hard-coded KNOWN_TOPICS list in JS, auto-derive it here
    from the src/notes/*/ directory layout (excluding the shared _link/ folder).
    Folder names with underscores are normalized to hyphens so they match the
    tag-slug convention used throughout the manifest/vocab. Adding a topic is
    now purely a matter of creating a new src/notes/<topic>/ directory.
    """
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    topics = [
        p.name.replace("_", "-")
        for p in sorted(NOTES_DIR.iterdir())
        if p.is_dir() and not p.name.startswith("_")
    ]
    (DATA_DIR / "topics.json").write_text(
        json.dumps(topics, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"Wrote web/data/topics.json ({len(topics)} topics)")


# ------------------------------------------------------------------
# Graph enrichment: pre-compute node/edge metrics for graph.json
# ------------------------------------------------------------------


def _format_i18n_report(i18n: Counter) -> str:
    """Render the multilingual-coverage report appended to GRAPH_REPORT.md."""
    lines = [
        "",
        "## i18n / Multilingual Coverage",
        "",
        "Context fields are stored as a BCP-47 map (`en-US`, `zh-TW`); `en-US` is canonical.",
        "",
        "| Metric | Count |",
        "| --- | --- |",
        f"| Triples processed | {i18n.get('triples_total', 0)} |",
        f"| Missing zh-TW context (falls back to en-US) | {i18n.get('missing_zh', 0)} |",
        f"| Missing created/updated timestamps | {i18n.get('missing_dates', 0)} |",
        f"| Stale triples (`updated` < source note mtime) | {i18n.get('stale_triples', 0)} |",
        "",
    ]
    return "\n".join(lines)


def _load_source_doc_mtimes() -> dict[str, str]:
    """Basename -> ISO mtime for every .md tracked in graphify-out/manifest.json.

    Used to date a triple against the *source note* it was extracted from
    rather than the `_triples.json` container. The container is rewritten
    wholesale whenever any note in the topic re-extracts, so its mtime flags
    nearly every triple stale (the old behaviour: ~99.9% false positives).
    Falls back to the container mtime only when the document is missing from
    the manifest.
    """
    manifest_path = GP / "manifest.json"
    if not manifest_path.exists():
        return {}
    try:
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return {}
    mtimes: dict[str, str] = {}
    for path, meta in manifest.items():
        if not path.endswith(".md") or not isinstance(meta, dict):
            continue
        mtime = meta.get("mtime")
        if not isinstance(mtime, (int, float)):
            continue
        base = path.rsplit("/", 1)[-1]
        iso = datetime.fromtimestamp(mtime, tz=timezone.utc).strftime(
            "%Y-%m-%dT%H:%M:%SZ"
        )
        # First wins; vault convention keeps basenames unique across src/.
        mtimes.setdefault(base, iso)
    return mtimes


def run_link_prediction() -> None:
    """Refresh web/data/link-prediction.json via scripts/04_link_prediction.py.

    Runs as a subprocess (same pattern as the graphify HTML export) so the
    networkx dependency stays isolated and a failure degrades to a warning
    instead of failing the rebuild. Must run BEFORE write_version_file(): the
    version hash covers every web/data/*.json, so the artifact participates in
    cache busting automatically. Output is deterministic (sorted candidates),
    so an unchanged topology keeps the hash stable.
    """
    script = ROOT / "scripts" / "04_link_prediction.py"
    if not script.exists():
        print(f"link prediction skipped (missing): {script.name}")
        return
    try:
        subprocess.run(
            [sys.executable, str(script), "--quiet"],
            cwd=str(ROOT),
            check=True,
            timeout=600,
        )
    except subprocess.TimeoutExpired:
        print("link prediction skipped (timed out after 600s)")
    except OSError as e:
        print(f"link prediction skipped (could not launch {sys.executable}): {e}")
    except subprocess.CalledProcessError as e:
        print(
            f"link prediction failed (exit {e.returncode}); artifact left as-is. "
            "Re-run manually: uv run --with networkx python3 "
            "scripts/04_link_prediction.py"
        )


def main() -> int:
    topics = sorted(str(p) for p in ROOT.glob("src/**/_triples.json"))
    if not topics:
        print("No _triples.json files found under src/")
        return 1

    G = nx.DiGraph()
    total_triples = 0
    edge_records: dict[tuple, dict] = {}
    node_candidates: dict[str, list[dict]] = defaultdict(list)
    i18n = Counter()
    src_doc_mtime = _load_source_doc_mtimes()
    stale_basis = Counter()  # doc | container — how staleness was judged
    print("=== Iterating topics ===")
    for f in topics:
        rel = str(Path(f).relative_to(ROOT))
        triples = json.load(open(f, encoding="utf-8"))
        n0 = G.number_of_nodes()
        try:
            f_mtime_iso = datetime.fromtimestamp(
                Path(f).stat().st_mtime, tz=timezone.utc
            ).strftime("%Y-%m-%dT%H:%M:%SZ")
        except OSError:
            f_mtime_iso = ""
        for t in triples:
            total_triples += 1
            i18n["triples_total"] += 1
            subj = strip_wikilink(t["subject"])
            obj = strip_wikilink(t["object"])
            sid, tid = norm(subj), norm(obj)
            if not sid or not tid or sid == tid:
                continue
            src = t.get("source_document", "") or rel
            en = get_context(t, "en-US")
            if not en:
                continue
            zh = get_context(t, "zh-TW")
            has_zh = has_translation(t, "zh-TW")
            score, conf = resolve_conf(t)
            updated = iso_ts(t, "updated", "")
            created = iso_ts(t, "created", "")

            # i18n / date coverage
            if not has_zh:
                i18n["missing_zh"] += 1
            if not (created and updated):
                i18n["missing_dates"] += 1
            else:
                # Prefer the source note's mtime (genuine staleness: the note
                # was edited after this triple was last updated). Fall back to
                # the triples container mtime only when the document is not in
                # the manifest.
                doc_iso = src_doc_mtime.get(src, "")
                ref_iso = doc_iso or f_mtime_iso
                stale_basis["doc" if doc_iso else "container"] += 1
                if ref_iso and updated < ref_iso:
                    i18n["stale_triples"] += 1

            for nid, raw in ((sid, subj), (tid, obj)):
                if nid not in G:
                    G.add_node(
                        nid,
                        label=raw,
                        file_type="concept",
                        source_file=src,
                        source_triples=rel,
                    )
                node_candidates[nid].append({
                    "created": created,
                    "updated": updated,
                    "score": score,
                    "en": en,
                    "zh": zh if has_zh else "",
                    "id": t.get("id", ""),
                })

            key = (sid, t["predicate"], tid)
            rec = edge_records.get(key)
            if rec is None or _newer(updated, score, rec):
                edge = {
                    "relation": t["predicate"],
                    "confidence": conf,
                    "confidence_score": score,
                    "score": score,
                    "source_file": src,
                    "source_triples": rel,
                    "context": en,
                    "created": created,
                    "updated": updated,
                }
                # Only carry a zh-TW context when a real translation exists;
                # otherwise omit the field (the web layer falls back to en-US).
                if has_zh:
                    edge["context_zh_TW"] = zh
                edge_records[key] = edge
        print(f"  {rel}: +{G.number_of_nodes() - n0}n (running {G.number_of_nodes()}n)")

    # --- add edges (latest-`updated` triple wins for an identical edge key) ---
    for (sid, _pred, tid), rec in edge_records.items():
        G.add_edge(
            sid,
            tid,
            relation=rec["relation"],
            confidence=rec["confidence"],
            confidence_score=rec["confidence_score"],
            source_file=rec["source_file"],
            source_triples=rec["source_triples"],
            context=rec["context"],
            context_zh_TW=rec["context_zh_TW"],
            created=rec["created"],
            updated=rec["updated"],
        )
    print(f"Added {len(edge_records)} edges ({len(G.edges())} total after dedupe)")

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

    # --- resolve node descriptions: most recently updated bilingual triple wins ---
    # (tie-break higher confidence, then first-seen). en-US is canonical;
    # zh-TW falls back to en-US when a triple is not yet translated.
    desc_resolved = 0
    for nid in list(G.nodes()):
        cands = node_candidates.get(nid)
        if not cands:
            continue
        chosen = max(cands, key=lambda c: (c["updated"], c["score"]))
        G.nodes[nid]["description"] = chosen["en"]
        # Only emit description_zh_TW when a genuine translation exists; the
        # web layer falls back to the canonical en-US description otherwise.
        if chosen["zh"]:
            G.nodes[nid]["description_zh_TW"] = chosen["zh"]
        G.nodes[nid]["description_source_triple"] = chosen["id"]
        G.nodes[nid]["description_updated"] = chosen["updated"]
        G.nodes[nid]["created"] = chosen["created"]
        G.nodes[nid]["updated"] = chosen["updated"]
        desc_resolved += 1
    print(f"Resolved descriptions for {desc_resolved} nodes (latest-updated wins)")

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
    graph_meta = enrich_graph_metrics(
        G, communities, new_labels, cohesion, gods, surprises
    )
    graph_meta["i18n"] = dict(i18n)

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
    # --- append the i18n / multilingual coverage section ---
    i18n_report = _format_i18n_report(i18n)
    with open(GP / "GRAPH_REPORT.md", "a", encoding="utf-8") as fh:
        fh.write(i18n_report)
    print(i18n_report.strip())
    Path(GP / ".graphify_labels.json").write_text(
        json.dumps({str(k): v for k, v in new_labels.items()}, ensure_ascii=False),
        encoding="utf-8",
    )

    WEB.mkdir(parents=True, exist_ok=True)

    wrote = to_json(G, communities, str(GP / "graph.json"), force=True)
    print("to_json wrote:", wrote)

    # --- inject graph-level metadata ---
    inject_graph_metadata(GP / "graph.json", graph_meta)

    # --- emit the slim web-only metadata file (triples-graph-meta.json) ---
    # Derived from the same graph_meta dict injected into the canonical
    # graphify-out/graph.json, so the frontend's metadata never goes stale.
    (DATA_DIR / "triples-graph-meta.json").write_text(
        json.dumps(graph_meta, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    print("Wrote web/data/triples-graph-meta.json")

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

    # --- regenerate the topic-slug vocabulary the notes panel consumes ---
    write_topics_json()

    # --- sanity-check hand-maintained data files (query.json, translations) ---
    ensure_manual_data_files()

    # --- write the i18n coverage report the web app can surface ---
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    print(
        "Staleness basis: "
        f"{stale_basis.get('doc', 0)} triples vs source-note mtime, "
        f"{stale_basis.get('container', 0)} vs container mtime (doc not in manifest)"
    )
    (DATA_DIR / "i18n-coverage.json").write_text(
        json.dumps(
            {"generated": time.strftime("%Y-%m-%d %H:%M:%S"), **dict(i18n)},
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )

    # --- refresh predicted-connection artifact (subprocess, warn-and-skip) ---
    run_link_prediction()

    # --- write content-hash version tag for web-app cache busting ---
    write_version_file()

    return 0


def refresh_roles_only() -> int:
    """Re-run ONLY the role classification + web export (no triple rebuild).

    Use after a graph.json update when metrics are already current but the
    role artifact / nodes.json roles need recalculating against the new
    fingerprint table. Community labels are reconstructed from the nodes'
    stored community_name so legend output matches a full rebuild.
    """
    graph = json.loads((GP / "graph.json").read_text(encoding="utf-8"))
    labels: dict[int, str] = {}
    for n in graph["nodes"]:
        cid = n.get("community")
        labels.setdefault(cid, n.get("community_name") or f"Community {cid}")
    export_three_json(GP, labels)
    run_link_prediction()
    write_version_file()
    return 0


if __name__ == "__main__":
    if "--roles-only" in sys.argv:
        raise SystemExit(refresh_roles_only())
    raise SystemExit(main())
