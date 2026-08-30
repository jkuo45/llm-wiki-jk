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
DATA_DIR = WEB / "public" / "data"  # runtime data JSONs consumed by the web app (Vite publicDir)
NOTES_DIR = ROOT / "src" / "notes"  # topic-scoped entity notes (topic = directory)

# Hand-maintained data files the script does NOT produce but that must exist
# alongside the generated ones in web/public/data/ (checked by ensure_manual_data_files).
MANUAL_DATA_FILES = (
    "query.json",  # curated graph-query traces for the Trace panel
    "translations-zh-TW.json",  # zh-TW translation dictionary for UI/node labels
    "predicates-zh-TW.json",  # zh-TW relationship-predicate labels (display only)
    "articles.json",  # article registry for the Reader (EN + zh-TW)
    "notes-tags-zh-TW.json",  # zh-TW tag labels for the Notes panel gallery
    "assumptions.json",  # curated A/B conflict registry for the Assumptions Lab
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
    """Export nodes.json, edges.json, legend.json to web/public/data/ for the three-graph app.

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
    # The classifier lives in scripts/_node_roles_lib.py (single source of truth,
    # shared with scripts/04_role_query.py) and computes all thresholds from the
    # live graph so it stays calibrated as the build evolves. The result is
    # baked into each node object (nodes.json) and also emitted as the standalone
    # web/public/data/node_roles.json artifact.
    import _node_roles_lib

    fps = [_node_roles_lib._fingerprint(n) for n in nodes]
    thresholds = _node_roles_lib.compute_thresholds(fps)
    _pr_p90 = thresholds["pagerank_p90"]
    _pr_p95 = thresholds["pagerank_p95"]
    _out_p90 = thresholds["out_degree_p90"]
    _out_p95 = thresholds["out_degree_p95"]
    _btw_p90 = thresholds["betweenness_p90"]

    # Build the per-node role map (for nodes.json) and the standalone
    # node_roles.json document in one pass.
    node_roles: dict[str, list[str]] = {}
    role_records = []
    role_counts = {name: 0 for name, _ in _node_roles_lib.ROLE_DEFS}
    multi = 0
    for n, fp in zip(nodes, fps):
        roles = _node_roles_lib.classify(fp, thresholds)
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
        "graph_build": short_commit(graph.get("built_at_commit", "")),
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
    by this script) but must live in web/public/data/ for the deployed app.
    """
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    missing = [name for name in MANUAL_DATA_FILES if not (DATA_DIR / name).exists()]
    if missing:
        print(
            "WARNING: hand-maintained data files missing from web/public/data/ "
            f"(add them manually): {', '.join(missing)}"
        )


def load_assumption_state(path: Path | None = None) -> dict:
    """Load the curated assumption state from web/public/data/assumptions.json.

    Returns a tolerant, always-well-formed dict:

        {
            "excluded_docs": set[str],      # basenames excluded from the build
            "keep_triples": set[str],       # triple ids rescued from excluded docs
            "exclusion_records": list[dict],
            "removed_keys": set[tuple],     # canonical (from,label,to) removals
            "added_edges": list[dict],      # canonical directional add edges
            "selection_keys": dict,         # scenario -> conflict -> option key
            "schema_version": int,
        }

    Missing file / sections degrade to an empty state so the build stays
    offline-first and deterministic (the DB->file sync, scripts/
    07_sync_assumptions.py, is what materializes DB selections into the file).
    """
    path = path or (DATA_DIR / "assumptions.json")
    empty = {
        "excluded_docs": set(),
        "keep_triples": set(),
        "exclusion_records": [],
        "removed_keys": set(),
        "added_edges": [],
        "selection_keys": {},
        "schema_version": 1,
    }
    if not path.exists():
        return empty
    try:
        doc = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as e:
        print(f"WARNING: assumptions.json unreadable ({e}); no exclusions applied")
        return empty

    def basename(s: str) -> str:
        return str(s).rsplit("/", 1)[-1].strip()

    state = dict(empty)
    state["schema_version"] = doc.get("schemaVersion", 1)
    for rec in doc.get("excludedSources") or []:
        doc_name = basename(rec.get("document", ""))
        if not doc_name:
            continue
        state["exclusion_records"].append(rec)
        state["excluded_docs"].add(doc_name)
        for tid in rec.get("keepTripleIds") or []:
            state["keep_triples"].add(str(tid))

    # Machine-managed selections block (written by 07_sync_assumptions.py):
    # {scenario_id: {conflict_id: {key, addedEdges[], removedEdges[], updatedAt}}}
    for sid, conflicts in (doc.get("selections") or {}).items():
        if not isinstance(conflicts, dict):
            continue
        for cid, sel in conflicts.items():
            if not isinstance(sel, dict):
                continue
            state["selection_keys"].setdefault(sid, {})[cid] = sel.get("key")
            for key in sel.get("removedEdges") or []:
                if isinstance(key, (list, tuple)) and len(key) == 3:
                    state["removed_keys"].add((key[0], key[1], key[2]))
            for add in sel.get("addedEdges") or []:
                if isinstance(add, dict) and add.get("from") and add.get("to"):
                    state["added_edges"].append({**add, "_scenario": sid, "_conflict": cid})
    return state


def assumption_excludes(t: dict, state: dict, sid: str, tid: str) -> bool:
    """True when a triple comes from an excluded source document and is not
    rescued via keepTripleIds."""
    if not state["excluded_docs"]:
        return False
    src = (t.get("source_document") or t.get("source") or "").rsplit("/", 1)[-1]
    if src not in state["excluded_docs"]:
        return False
    return str(t.get("id", "")) not in state["keep_triples"]


def apply_selection_edits(
    edge_records: dict, state: dict, node_ok: set | None = None
) -> tuple[int, int, int]:
    """Apply canonical conflict selections to the accumulated edge records.

    Removals win over any same-key corpus triple (a remove is applied after
    accumulation, so extraction can never resurrect a removed edge). Adds are
    injected unconditionally with `updated` stamped from the selection
    timestamp so they deterministically win the `_newer()` dedupe rule
    (a human decision beats extraction on equal keys).

    When `node_ok` is given, adds referencing nodes absent from the built
    graph are skipped (warned) instead of creating bare undescribed nodes.

    Returns (n_removed, n_added, n_skipped_adds).
    """
    for key in state["removed_keys"]:
        edge_records.pop(key, None)

    applied = 0
    skipped = 0
    for add in state["added_edges"]:
        key = (norm(add["from"]), add.get("label", ""), norm(add["to"]))
        if node_ok is not None and (key[0] not in node_ok or key[2] not in node_ok):
            print(
                f"WARNING: canonical add {key} references unknown node(s); skipped"
            )
            skipped += 1
            continue
        updated = add.get("updatedAt") or ""
        rec = {
            "relation": add.get("label", ""),
            "confidence": add.get("confidence", "EXTRACTED"),
            "confidence_score": float(add.get("confidence_score", 0.6)),
            "score": float(add.get("confidence_score", 0.6)),
            "source_file": f"assumptions:{add.get('_scenario', '?')}:{add.get('_conflict', '?')}",
            "source_triples": "web/public/data/assumptions.json",
            "context": add.get("context", ""),
            "created": updated,
            "updated": updated,
        }
        if add.get("context_zh_TW"):
            rec["context_zh_TW"] = add["context_zh_TW"]
        edge_records[key] = rec  # unconditional: selection wins dedupe
        applied += 1
    return len(state["removed_keys"]), applied, skipped


def write_assumptions_build_artifact(
    astate: dict,
    excl_by_doc: Counter,
    kept_by_doc: Counter,
    n_removed: int,
    n_added: int,
) -> None:
    """Write web/public/data/assumptions-build.json: what the build applied.

    Machine-readable provenance for the Assumptions Lab and the sync scripts:
    which source documents were excluded (per-document triple counts, incl.
    keepTripleIds rescues) and which canonical conflict selections were
    materialized into the graph. Participates in the version.json cache-bust
    hash automatically (it lives in DATA_DIR).
    """
    excluded = [
        {
            "id": rec.get("id", ""),
            "document": rec.get("document", ""),
            "topic": rec.get("topic", ""),
            "excludedTriples": excl_by_doc.get(
                str(rec.get("document", "")).rsplit("/", 1)[-1], 0
            ),
            "keptTriples": kept_by_doc.get(
                str(rec.get("document", "")).rsplit("/", 1)[-1], 0
            ),
        }
        for rec in astate["exclusion_records"]
    ]
    doc = {
        "generated": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "schemaVersion": astate["schema_version"],
        "excluded": excluded,
        "canonicalSelections": astate["selection_keys"],
        "applied": {"removedEdges": n_removed, "addedEdges": n_added},
    }
    (DATA_DIR / "assumptions-build.json").write_text(
        json.dumps(doc, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(
        "Wrote web/public/data/assumptions-build.json "
        f"({len(excluded)} excluded doc(s), {n_removed} removed, {n_added} added)"
    )


def validate_assumptions_file(
    ok_remove_keys: set | None = None,
    corpus_docs: set | None = None,
    ok_node_ids: set | None = None,
) -> None:
    """Fail the build when the curated assumptions registry drifts from data.

    The Assumptions Lab (web/public/pages/en-US/assumptions.html, zh-TW
    shell under pages/zh-TW/) re-runs graph
    analyses over a modified edge set derived from web/public/data/
    assumptions.json. Every edge key, node id, and path endpoint it references
    must resolve against the freshly built triples-edges.json /
    triples-nodes.json, or the derived scenario silently diverges from the
    graph it claims to analyze. Curation aid: scripts/03_triple_lookup.py maps
    a review report's triple ids to web edge keys.

    Applied-state awareness: the build applies exclusions + canonical
    selections BEFORE validation, so a conflict option whose `remove` key is
    missing from the built graph is only an error when the key is not already
    covered by canonical selections or source exclusions (`ok_remove_keys`,
    passed by main()). The same tolerance applies to `add` edges that
    canonical selections already injected.
    """
    path = DATA_DIR / "assumptions.json"
    if not path.exists():
        return
    try:
        doc = json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as e:
        raise SystemExit(f"assumptions.json is not valid JSON: {e}") from e

    edges = json.loads((DATA_DIR / "triples-edges.json").read_text(encoding="utf-8"))
    edge_keys = {(e["from"], e["label"], e["to"]) for e in edges}
    node_ids = {n["id"] for n in json.loads((DATA_DIR / "triples-nodes.json").read_text(encoding="utf-8"))}

    ok_remove = ok_remove_keys or set()
    ok_nodes = ok_node_ids or set()

    def edge_key(key) -> tuple[str, str, str]:
        # stored as [from, label, to] (JSON arrays) — tolerate 3-tuples
        if not isinstance(key, (list, tuple)) or len(key) != 3:
            raise SystemExit(f"assumptions.json: bad edge key {key!r} (want [from, label, to])")
        return (key[0], key[1], key[2])

    errors: list[str] = []
    infos: list[str] = []
    scenario_ids: set[str] = set()
    file_scenario_ids: set[str] = set()

    # --- excludedSources: documents must be known corpus sources; keep ids
    # must be well-formed triple ids (12 hex chars) ---
    for i, rec in enumerate(doc.get("excludedSources") or []):
        where = f"excludedSources[{i}]"
        doc_name = str(rec.get("document", "")).rsplit("/", 1)[-1].strip()
        if not doc_name:
            errors.append(f"{where}: missing document")
        elif corpus_docs is not None and doc_name not in corpus_docs:
            errors.append(f"{where}: document {doc_name!r} is not a source of any triples container")
        for tid in rec.get("keepTripleIds") or []:
            if not (isinstance(tid, str) and len(tid) == 12 and all(c in "0123456789abcdef" for c in tid)):
                errors.append(f"{where}: keepTripleIds entry {tid!r} is not a 12-hex triple id")
        if not str(rec.get("id", "")).strip():
            errors.append(f"{where}: missing id")

    # --- machine-managed selections block: keys must resolve to curated
    # scenario/conflict/option ids ---
    for sid, conflicts in (doc.get("selections") or {}).items():
        scenario_ids.add(sid)
        sc = next((s for s in doc.get("scenarios", []) if s.get("id") == sid), None)
        if sc is None:
            errors.append(f"selections: unknown scenario id {sid!r}")
            continue
        for cid, sel in conflicts.items():
            conflict = next((c for c in sc.get("conflicts", []) if c.get("id") == cid), None)
            if conflict is None:
                errors.append(f"selections/{sid}: unknown conflict id {cid!r}")
                continue
            key = sel.get("key")
            opt = next((o for o in conflict.get("options", []) if o.get("key") == key), None)
            if opt is None:
                errors.append(f"selections/{sid}/{cid}: key {key!r} is not an option of this conflict")
                continue
            # resolved edges must match the option's curated edits
            opt_removed = {edge_key(k) for k in (opt.get("edits") or {}).get("remove", [])}
            sel_removed = {edge_key(k) for k in sel.get("removedEdges") or []}
            if sel_removed != opt_removed:
                errors.append(f"selections/{sid}/{cid}: removedEdges diverge from option {key!r} edits")
            opt_added = {
                (norm(a.get("from", "")), a.get("label", ""), norm(a.get("to", "")))
                for a in (opt.get("edits") or {}).get("add", [])
            }
            sel_added = {
                (norm(a.get("from", "")), a.get("label", ""), norm(a.get("to", "")))
                for a in sel.get("addedEdges") or []
            }
            if sel_added != opt_added:
                errors.append(f"selections/{sid}/{cid}: addedEdges diverge from option {key!r} edits")

    for sc in doc.get("scenarios", []):
        sid = sc.get("id", "?")
        if sid in file_scenario_ids:
            errors.append(f"duplicate scenario id {sid!r}")
        file_scenario_ids.add(sid)
        for preset in sc.get("pathPresets", []):
            if len(preset) != 2:
                errors.append(f"{sid}: pathPreset {preset!r} must be [source, target]")
                continue
            for nid in preset:
                if nid not in node_ids and nid not in ok_nodes:
                    errors.append(f"{sid}: pathPreset endpoint {nid!r} is not a known node")
        conflict_ids: set[str] = set()
        for c in sc.get("conflicts", []):
            cid = c.get("id", "?")
            if cid in conflict_ids:
                errors.append(f"{sid}: duplicate conflict id {cid!r}")
            conflict_ids.add(cid)
            where = f"{sid}/{cid}"
            for nid in c.get("anchor", []):
                if nid not in node_ids and nid not in ok_nodes:
                    errors.append(f"{where}: anchor {nid!r} is not a known node")
            for e in c.get("evidence", []):
                k = (e.get("from"), e.get("label"), e.get("to"))
                if k not in edge_keys and k not in ok_remove:
                    infos.append(f"{where}: evidence edge {k} absent from built graph (excluded/removed)")
                elif k not in edge_keys:
                    pass  # tolerated: covered by canonical removals/exclusions
            for opt in c.get("options", []):
                okey = opt.get("key", "?")
                edits = opt.get("edits") or {}
                for key in edits.get("remove", []):
                    if edge_key(key) not in edge_keys and edge_key(key) not in ok_remove:
                        errors.append(f"{where}/{okey}: remove key {key} not in triples-edges.json")
                for add in edits.get("add", []):
                    k = (add.get("from"), add.get("label"), add.get("to"))
                    if k in edge_keys:
                        infos.append(f"{where}/{okey}: add edge {k} already in built graph (canonical)")
                        continue
                    if k[0] not in node_ids or k[2] not in node_ids:
                        errors.append(f"{where}/{okey}: add edge {k} references unknown node(s)")
                    conf = add.get("confidence_score")
                    if not isinstance(conf, (int, float)) or not 0 <= conf <= 1:
                        errors.append(f"{where}/{okey}: add edge {k} has bad confidence_score {conf!r}")
                    if not str(k[1]).strip():
                        errors.append(f"{where}/{okey}: add edge {k} has an empty label")

    if errors:
        print("assumptions.json validation failed:")
        for err in errors:
            print(f"  - {err}")
        raise SystemExit(1)
    n_conf = sum(len(sc.get("conflicts", [])) for sc in doc.get("scenarios", []))
    n_excl = len(doc.get("excludedSources") or [])
    n_sel = sum(len(c) for c in (doc.get("selections") or {}).values())
    print(
        f"assumptions.json OK: {len(doc.get('scenarios', []))} scenario(s), "
        f"{n_conf} conflict(s), {n_excl} excluded source(s), {n_sel} canonical selection(s)"
    )
    for info in infos:
        print(f"  ℹ {info}")


# ------------------------------------------------------------------
# Copy shared graphify JSON that the web app consumes at runtime.
# These remain canonical in graphify-out (the source of truth) and are
# copied verbatim into web/public/data/ so the deployed app is self-contained.
# ------------------------------------------------------------------

# Graphify-standard artifacts the web app fetches (components/data.js).
WEB_SHARED_JSON = (
    "manifest.json",
)


def copy_shared_json() -> None:
    """Copy canonical graphify JSON into web/public/data/ for the deployed app."""
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
    print(f"Copied {copied} shared graphify JSON files into web/public/data/")


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


def short_commit(commit: str) -> str:
    """Abbreviate a git commit hash to the canonical short form (git --short).

    graphify-out/graph.json stores full 40-char SHAs in ``built_at_commit``,
    while the wiki build uses ``git rev-parse --short HEAD`` (8 chars). Collapsing
    both to the short form makes the two layers render matching-length
    provenance hashes on pages and in artifacts.
    """
    if not commit:
        return ""
    try:
        out = subprocess.run(
            ["git", "rev-parse", "--short", commit],
            capture_output=True,
            text=True,
            timeout=10,
        ).stdout.strip()
        if out:
            return out
    except Exception:
        pass
    return commit[:8]


def write_version_file() -> None:
    """Write web/public/data/version.json with a content hash (cache-busting).

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
    """Write web/public/data/topics.json: the controlled topic-slug vocabulary.

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
    print(f"Wrote web/public/data/topics.json ({len(topics)} topics)")


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


def _format_assumptions_report(
    astate: dict,
    excl_by_doc: Counter,
    kept_by_doc: Counter,
    n_removed: int,
    n_added: int,
) -> str:
    """Render the assumption-state section appended to GRAPH_REPORT.md."""
    lines = [
        "",
        "## Assumption State",
        "",
        "Curated exclusions (`excludedSources`) and canonical conflict selections",
        "(`selections`, synced from Supabase by scripts/07_sync_assumptions.py)",
        "applied to this build. See web/public/data/assumptions-build.json.",
        "",
        f"- Excluded source documents: {len(astate['excluded_docs'])}",
        f"- Triples excluded by document: {sum(excl_by_doc.values())}",
        f"- Triples rescued via keepTripleIds: {sum(kept_by_doc.values())}",
        f"- Canonical edges removed (selections): {n_removed}",
        f"- Canonical edges added (selections): {n_added}",
        "",
    ]
    if astate["exclusion_records"]:
        lines += [
            "| Document | Topic | Excluded | Kept |",
            "| --- | --- | ---: | ---: |",
        ]
        for rec in astate["exclusion_records"]:
            base = str(rec.get("document", "")).rsplit("/", 1)[-1]
            lines.append(
                f"| {base} | {rec.get('topic', '')} "
                f"| {excl_by_doc.get(base, 0)} | {kept_by_doc.get(base, 0)} |"
            )
        lines.append("")
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
    """Refresh web/public/data/link-prediction.json via scripts/04_link_prediction.py.

    Runs as a subprocess (same pattern as the graphify HTML export) so the
    networkx dependency stays isolated and a failure degrades to a warning
    instead of failing the rebuild. Must run BEFORE write_version_file(): the
    version hash covers every web/public/data/*.json, so the artifact participates in
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
    corpus_docs: set[str] = set()  # all source_document basenames (validation)
    excluded_node_ids: set[str] = set()  # nodes seen (only) via excluded triples
    # --- curated assumption state (exclusions + canonical selections) ---
    astate = load_assumption_state()
    excluded_edge_keys: set[tuple] = set()  # pre-application universe, for validation tolerance
    excl_by_doc: Counter = Counter()
    kept_by_doc: Counter = Counter()
    if astate["excluded_docs"] or astate["removed_keys"] or astate["added_edges"]:
        print(
            "Assumption state: "
            f"{len(astate['excluded_docs'])} excluded doc(s), "
            f"{len(astate['removed_keys'])} canonical removal(s), "
            f"{len(astate['added_edges'])} canonical add(s)"
        )
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
            subj = strip_wikilink(t["subject"])
            obj = strip_wikilink(t["object"])
            sid, tid = norm(subj), norm(obj)
            pre_key = (sid, t.get("predicate", ""), tid)
            # every source_document basename, incl. excluded docs (validation)
            src_base = (t.get("source_document") or t.get("source") or "").rsplit("/", 1)[-1]
            if src_base:
                corpus_docs.add(src_base)
            # --- document-level exclusion (with keepTripleIds exceptions) ---
            if assumption_excludes(t, astate, sid, tid):
                excluded_edge_keys.add(pre_key)
                excluded_node_ids.update((sid, tid))
                if str(t.get("id", "")) in astate["keep_triples"]:
                    kept_by_doc[src_base] += 1
                else:
                    excl_by_doc[src_base] += 1
                    continue
            i18n["triples_total"] += 1
            if not sid or not tid or sid == tid:
                continue
            src = t.get("source_document", "") or rel
            corpus_docs.add(str(src).rsplit("/", 1)[-1])
            en = get_context(t, "en-US")
            if not en:
                continue
            # canonical conflict removals drop the edge — and keep the removed
            # triple's context from feeding node descriptions either
            if pre_key in astate["removed_keys"]:
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

    # --- apply canonical conflict selections (removals win; adds win dedupe) ---
    n_sel_removed, n_sel_added, n_sel_skipped = apply_selection_edits(
        edge_records, astate, node_ok=set(G.nodes())
    )
    if n_sel_removed or n_sel_added or n_sel_skipped:
        print(
            f"Applied canonical selections: -{n_sel_removed} edge(s), "
            f"+{n_sel_added} edge(s)"
            + (f", {n_sel_skipped} add(s) skipped" if n_sel_skipped else "")
        )

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
            context_zh_TW=rec.get("context_zh_TW", ""),
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
    assumptions_report = _format_assumptions_report(
        astate, excl_by_doc, kept_by_doc, n_sel_removed, n_sel_added
    )
    with open(GP / "GRAPH_REPORT.md", "a", encoding="utf-8") as fh:
        fh.write(assumptions_report)
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
    print("Wrote web/public/data/triples-graph-meta.json")

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

    # --- copy shared graphify JSON the web app needs into web/public/data/ ---
    copy_shared_json()

    # --- regenerate the topic-slug vocabulary the notes panel consumes ---
    write_topics_json()

    # --- sanity-check hand-maintained data files (query.json, translations) ---
    ensure_manual_data_files()
    # --- assumption-state provenance + validation (exclusion/selection aware) ---
    write_assumptions_build_artifact(
        astate, excl_by_doc, kept_by_doc, n_sel_removed, n_sel_added
    )
    validate_assumptions_file(
        ok_remove_keys=astate["removed_keys"] | excluded_edge_keys,
        corpus_docs=corpus_docs,
        ok_node_ids=excluded_node_ids,
    )

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
