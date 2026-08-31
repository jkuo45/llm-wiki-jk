#!/usr/bin/env python3
"""Sync the vault + graph artifacts into Supabase (derived mirror).

The markdown notes in src/notes/ remain the source of truth; this script
pushes the canonical base layer (topics, entities, edges, per-mode node
metrics, link predictions) into Postgres so user-built graphs and the
PubMed-style research layer can reference it. Writes use the service-role
key (RLS makes every base table read-only to clients).

Usage:
    export SUPABASE_URL=https://<ref>.supabase.co
    export SUPABASE_SERVICE_KEY=<service-role key>   # or put both in .env

    uv run --no-build --with supabase --with pyyaml --with networkx \
        python3 -m scripts.sync.graph_to_db            # incremental
    python3 -m scripts.sync.graph_to_db --dry-run      # counts only, no writes
    python3 -m scripts.sync.graph_to_db --force        # re-sync even if hash matches
    python3 -m scripts.sync.graph_to_db --prune        # also delete entities gone from the vault

What is synced (all keyed by norm(label) from scripts/lib/graph_common.py):
    topics            <- web/public/data/topics.json
    entities          <- union of combined/triples/wiki node files + note frontmatter
    entity_edges      <- triples-edges.json (graph_source='triples')
                         wiki-edges.json     (graph_source='wiki')
    node_metrics      <- *-nodes.json x3 modes + node_roles.json files (roles[])
    link_predictions  <- link-prediction.json (triples) + wiki-link-prediction.json (wiki)
    graph_builds      <- one row per run (version.json hash), linked from metrics rows

Incremental: if version.json's hash matches the latest graph_builds row the
sync is a no-op (--force overrides). Upserts are idempotent, so re-running
after a new build only rewrites changed rows' current values.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[2]  # repo root (scripts/<group>/)

DATA_DIR = ROOT / "web" / "public" / "data"
NOTES_DIR = ROOT / "src" / "notes"

MODE_FILES = {
    "combined": "nodes.json",
    "triples": "triples-nodes.json",
    "wiki": "wiki-nodes.json",
}
ROLES_FILES = {
    "combined": "node_roles.json",
    "triples": "triples-node_roles.json",
    "wiki": "wiki-node_roles.json",
}
PREDICTION_FILES = {
    "triples": "link-prediction.json",
    "wiki": "wiki-link-prediction.json",
}

BATCH_SIZES = {"entity_edges": 200, "default": 500}


# ----------------------------------------------------------------------
# Config
# ----------------------------------------------------------------------

def load_env() -> tuple[str, str]:
    """Read SUPABASE_URL / SUPABASE_SERVICE_KEY from env, then repo .env."""
    url = os.environ.get("SUPABASE_URL")
    key = os.environ.get("SUPABASE_SERVICE_KEY")
    if url and key:
        return url, key
    env_file = ROOT / ".env"
    if env_file.exists():
        for line in env_file.read_text().splitlines():
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            k, v = k.strip(), v.strip().strip('"').strip("'")
            if not v:
                continue
            if k == "SUPABASE_URL" and not url:
                url = v
            if k == "SUPABASE_SERVICE_KEY" and not key:
                key = v
    if not url or not key:
        sys.exit(
            "Missing SUPABASE_URL / SUPABASE_SERVICE_KEY (env vars or repo .env).\n"
            "The service-role key is required: base tables are read-only via RLS."
        )
    # Accept both the project URL and the PostgREST URL; supabase-py appends
    # /rest/v1 itself.
    url = re.sub(r"/rest/v1/?$", "", url.rstrip("/"))
    return url, key


# ----------------------------------------------------------------------
# Frontmatter
# ----------------------------------------------------------------------

_FM_RE = re.compile(r"\A---\s*\n(.*?)\n---\s*\n?", re.DOTALL)


def parse_frontmatter(text: str) -> dict:
    """Parse OKF frontmatter with PyYAML (tolerates malformed blocks)."""
    m = _FM_RE.match(text)
    if not m:
        return {}
    try:
        fm = yaml.safe_load(m.group(1))
        return fm if isinstance(fm, dict) else {}
    except yaml.YAMLError:
        return {}


def load_frontmatter_index() -> dict[str, dict]:
    """Map basename -> frontmatter for every note in src/notes/."""
    index: dict[str, dict] = {}
    for p in NOTES_DIR.rglob("*.md"):
        fm = parse_frontmatter(p.read_text(encoding="utf-8", errors="replace"))
        index[p.name] = {
            "title": str(fm.get("title") or p.stem),
            "tags": [str(t) for t in (fm.get("tags") or [])],
            "aliases": [str(a) for a in (fm.get("aliases") or [])],
            "protected": bool(fm.get("protected", False)),
            "created": _date_or_none(fm.get("created")),
            "updated": _date_or_none(fm.get("updated")),
        }
    return index


def _date_or_none(v) -> str | None:
    if v is None:
        return None
    s = str(v)[:10]
    return s if re.match(r"^\d{4}-\d{2}-\d{2}$", s) else None


def topic_of_source_file(source_file: str | None) -> str | None:
    """Topic slug from a note path: src/notes/<topic>/X.md -> <topic>,
    underscored dirs hyphenated to match topics.json; _link -> None."""
    if not source_file:
        return None
    m = re.search(r"notes[/\\]([^/\\]+)[/\\]", source_file)
    if not m:
        return None
    topic = m.group(1)
    return None if topic == "_link" else topic.replace("_", "-")


# ----------------------------------------------------------------------
# Row builders
# ----------------------------------------------------------------------

def build_topics(slugs: list[str]) -> list[dict]:
    return [
        {"slug": s, "name": s.replace("-", " ").title()}
        for s in sorted(slugs)
    ]


def build_entities(node_files: dict[str, list[dict]], fm_index: dict) -> list[dict]:
    """Union of all three node sets. Combined descriptions win; frontmatter
    supplies tags/aliases/protected/dates when a matching note file exists."""
    merged: dict[str, dict] = {}

    def absorb(nodes: list[dict]) -> None:
        for n in nodes:
            nid = n.get("id")
            if not nid:
                continue
            cur = merged.setdefault(nid, {"label": n.get("label") or nid})
            for field, val in (
                ("description", n.get("description")),
                ("description_zh_tw", n.get("description_zh_TW")),
                ("source_file", n.get("source_file")),
            ):
                if val and not cur.get(field):
                    cur[field] = val
            if n.get("updated") and not cur.get("updated"):
                cur["updated"] = _date_or_none(n["updated"])

    for mode in ("triples", "wiki", "combined"):  # combined absorbed last (wins)
        absorb(node_files[mode])

    rows = []
    for nid, cur in merged.items():
        fm = fm_index.get(Path(cur.get("source_file") or "").name, {})
        labels = [cur.get("label") or nid, fm.get("title")]
        label = next((l for l in labels if l), nid)
        tags = fm.get("tags") or []
        rows.append({
            "norm_id": nid,
            "label": label,
            "description": cur.get("description"),
            "description_zh_tw": cur.get("description_zh_tw"),
            "entity_type": tags[0] if tags else "concept",
            "tags": tags,
            "aliases": fm.get("aliases") or [],
            "source_file": cur.get("source_file"),
            "topic_slug": topic_of_source_file(cur.get("source_file")),
            "protected": fm.get("protected", False),
            "created": fm.get("created"),
            "updated": fm.get("updated") or cur.get("updated"),
        })
    return rows


def build_edges(files: dict[str, list[dict]]) -> list[dict]:
    """triples + wiki edges; context coalesced to '' so the unique constraint
    is a plain-column one (PostgREST ON CONFLICT target)."""
    out, seen = [], set()
    for source, edges in (("triples", files["triples"]), ("wiki", files["wiki"])):
        for e in edges:
            f, t, pred = e.get("from"), e.get("to"), e.get("label")
            if not f or not t or not pred:
                continue
            ctx = e.get("context") or ""
            key = (f, t, pred, source, ctx)
            if key in seen:
                continue
            seen.add(key)
            out.append({
                "from_id": f,
                "to_id": t,
                "predicate": pred,
                "graph_source": source,
                "confidence": e.get("confidence"),
                "confidence_score": e.get("confidence_score"),
                "weight": e.get("weight"),
                "context": ctx,
                "context_zh_tw": e.get("context_zh_TW"),
                "source_file": e.get("source_file"),
            })
    return out


def build_node_metrics(node_files: dict, roles_files: dict, build_id: int | None) -> list[dict]:
    rows = []
    for mode in ("combined", "triples", "wiki"):
        roles_by_id = {
            n["id"]: n.get("roles") or []
            for n in json.loads((DATA_DIR / roles_files[mode]).read_text())["nodes"]
        }
        for n in node_files[mode]:
            if not n.get("id"):
                continue
            rows.append({
                "norm_id": n["id"],
                "mode": mode,
                "community": n.get("community"),
                "community_name": n.get("community_name"),
                "degree": int(n.get("degree") or 0),
                "size": n.get("size"),
                "pagerank": n.get("pagerank"),
                "betweenness": n.get("betweenness"),
                "clustering": n.get("clustering"),
                "k_core": int(n.get("k_core") or 0),
                "roles": roles_by_id.get(n["id"]) or n.get("roles") or [],
                "build_id": build_id,
            })
    return rows


def build_link_predictions(build_id: int | None) -> list[dict]:
    rows = []
    for mode, fname in PREDICTION_FILES.items():
        path = DATA_DIR / fname
        if not path.exists():
            continue
        data = json.loads(path.read_text())
        for c in data.get("candidates", []):
            rows.append({
                "a": c["a"],
                "b": c["b"],
                "method": data.get("params", {}).get("method", "adamic_adar"),
                "mode": mode,
                "score": c.get("score"),
                "shared_neighbors": c.get("shared_neighbors"),
                "shared_top": c.get("shared_top"),
                "cross_community": c.get("cross_community"),
                "build_id": build_id,
            })
    return rows


# ----------------------------------------------------------------------
# Supabase writes
# ----------------------------------------------------------------------

def chunked(rows: list[dict], size: int):
    for i in range(0, len(rows), size):
        yield rows[i:i + size]


def upsert_table(sb, table: str, rows: list[dict], on_conflict: str,
                 ignore_duplicates: bool = False, dry_run: bool = False) -> int:
    if not rows:
        print(f"  {table:<18} 0 rows (nothing to do)")
        return 0
    if dry_run:
        print(f"  {table:<18} {len(rows)} rows (dry run)")
        return len(rows)
    size = BATCH_SIZES.get(table, BATCH_SIZES["default"])
    written = 0
    for i, batch in enumerate(chunked(rows, size)):
        sb.table(table).upsert(
            batch,
            on_conflict=on_conflict,
            ignore_duplicates=ignore_duplicates,
            returning="minimal",
        ).execute()
        written += len(batch)
        if i % 20 == 0 or written == len(rows):
            print(f"  {table:<18} {written}/{len(rows)}", end="\r" if written < len(rows) else "\n")
        time.sleep(0.05)
    return written


def db_counts(sb, tables: list[str]) -> dict[str, int]:
    counts = {}
    for t in tables:
        res = sb.table(t).select("*", count="exact").limit(0).execute()
        counts[t] = res.count or 0
    return counts


# ----------------------------------------------------------------------
# Main
# ----------------------------------------------------------------------

def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--dry-run", action="store_true", help="count rows, write nothing")
    ap.add_argument("--force", action="store_true", help="sync even if the build hash is unchanged")
    ap.add_argument("--prune", action="store_true",
                    help="delete entities (and cascaded edges/metrics) absent from the current build")
    args = ap.parse_args()

    version = json.loads((DATA_DIR / "version.json").read_text())
    build_hash = version.get("hash")

    # Load everything before touching the network so failures are cheap.
    print("Loading source artifacts...")
    node_files = {
        mode: json.loads((DATA_DIR / fname).read_text())
        for mode, fname in MODE_FILES.items()
    }
    edge_files = {
        "triples": json.loads((DATA_DIR / "triples-edges.json").read_text()),
        "wiki": json.loads((DATA_DIR / "wiki-edges.json").read_text()),
    }
    fm_index = load_frontmatter_index()
    topic_slugs = json.loads((DATA_DIR / "topics.json").read_text())

    topics = build_topics(topic_slugs)
    entities = build_entities(node_files, fm_index)
    edges = build_edges(edge_files)
    metrics = build_node_metrics(node_files, ROLES_FILES, build_id=None)  # id patched later
    predictions = build_link_predictions(build_id=None)

    # Entities referenced by edges/metrics must exist before those tables
    # can be written (FKs). Report any dangling ids loudly.
    entity_ids = {e["norm_id"] for e in entities}
    dangling = sorted(
        ({e["from_id"] for e in edges} | {e["to_id"] for e in edges}
         | {m["norm_id"] for m in metrics} | {p["a"] for p in predictions}
         | {p["b"] for p in predictions})
        - entity_ids
    )
    if dangling:
        print(f"WARNING: {len(dangling)} ids referenced but absent from node files "
              f"(sample: {dangling[:5]})")

    known_topics = {t["slug"] for t in topics}
    stray_topics = Counter(
        e["topic_slug"] for e in entities
        if e["topic_slug"] is not None and e["topic_slug"] not in known_topics
    )
    if stray_topics:
        print(f"WARNING: entities reference topics not in topics.json: {dict(stray_topics)}")

    print(f"Sources: {len(topics)} topics, {len(entities)} entities, {len(edges)} edges "
          f"({sum(1 for e in edges if e['graph_source'] == 'triples')} triples / "
          f"{sum(1 for e in edges if e['graph_source'] == 'wiki')} wiki), "
          f"{len(metrics)} metric rows, {len(predictions)} link predictions")
    print(f"Build: hash={build_hash} generated={version.get('generated')}")

    if args.dry_run:
        print("Dry run — no writes performed.")
        return

    from supabase import create_client

    url, key = load_env()
    sb = create_client(url, key)

    # Incremental check: same build hash => already mirrored.
    latest = (sb.table("graph_builds")
                .select("id,hash")
                .order("id", desc=True)
                .limit(1)
                .execute())
    if latest.data and latest.data[0]["hash"] == build_hash and not args.force:
        print(f"Build {build_hash} already synced (graph_builds id="
              f"{latest.data[0]['id']}). Use --force to re-sync.")
        return

    print("Syncing...")
    upsert_table(sb, "topics", topics, on_conflict="slug")
    upsert_table(sb, "entities", entities, on_conflict="norm_id")
    upsert_table(sb, "entity_edges", edges,
                 on_conflict="from_id,to_id,predicate,graph_source,context",
                 ignore_duplicates=True)

    gen_raw = version.get("generated")
    try:
        generated = datetime.fromtimestamp(
            datetime.strptime(gen_raw, "%Y-%m-%d %H:%M:%S").timestamp(), tz=timezone.utc
        ) if gen_raw else None
    except ValueError:
        generated = None
    build_res = (sb.table("graph_builds")
                   .insert({"hash": build_hash, "generated": generated.isoformat() if generated else None,
                            "params": {"version_generated": gen_raw},
                            "files": version.get("files", [])})
                   .execute())
    build_id = build_res.data[0]["id"]
    for row in metrics:
        row["build_id"] = build_id
    for row in predictions:
        row["build_id"] = build_id
    upsert_table(sb, "node_metrics", metrics, on_conflict="norm_id,mode")
    upsert_table(sb, "link_predictions", predictions, on_conflict="a,b,method,mode")

    if args.prune:
        current_ids = {e["norm_id"] for e in entities}
        res = sb.table("entities").select("norm_id").execute()
        stale = [r["norm_id"] for r in res.data if r["norm_id"] not in current_ids]
        if stale:
            print(f"  pruning {len(stale)} entities removed from the vault...")
            for batch in chunked(stale, BATCH_SIZES["default"]):
                sb.table("entities").delete().in_("norm_id", batch).execute()

    print("Verifying DB counts...")
    db = db_counts(sb, ["topics", "entities", "entity_edges", "node_metrics", "link_predictions"])
    print(f"  DB: {db}")
    expected = {
        "topics": len(topics),
        "entities": len(entities),
        "entity_edges": len(edges),
        "node_metrics": len(metrics),
        "link_predictions": len(predictions),
    }
    mismatches = {t: (db[t], expected[t]) for t in expected if db[t] < expected[t]}
    if mismatches:
        print(f"WARNING: DB has fewer rows than source (table: db vs source): {mismatches}")
        sys.exit(1)
    print(f"Sync complete. graph_builds id={build_id} hash={build_hash}")


if __name__ == "__main__":
    main()
