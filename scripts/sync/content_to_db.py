#!/usr/bin/env python3
"""Sync the public content registry into Supabase + backfill star flags.

Companion to scripts/sync/graph_to_db.py (graph base layer). This script mirrors
the *content* layer into the content_registry table and can seed the
content_flags table from the legacy markdown/static star sources:

    article      <- web/public/data/articles.json  (hand-maintained registry)
    task_output  <- web/public/data/tasks.json     (generated from src/tasks/)
    image_note   <- src/images/manifest.json
    document     <- src/notes/**/_document_ *.md scan
    (wiki_note is intentionally absent: the entities table from the graph sync
     already covers wiki notes keyed by norm_id, which content_flags reuses)

Usage:
    uv run --no-build --with supabase --with pyyaml \
        python3 -m scripts.sync.content_to_db              # registry upsert
    python3 -m scripts.sync.content_to_db --dry-run        # counts only
    python3 -m scripts.sync.content_to_db --backfill-stars # + seed flags from
                              # src/tasks frontmatter + manifest starred=true
    python3 -m scripts.sync.content_to_db --prune          # delete registry rows
                              # whose content no longer exists in the repo

Star semantics: content_flags (DB) is the runtime source of truth once the
admin panel is in use. The frontmatter / static-JSON `starred` flags remain
baked into the site data as offline fallbacks — this script only READS them
(--backfill-stars); it never writes markdown or manifest files.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[2]  # repo root (scripts/<group>/)
DATA_DIR = ROOT / "web" / "public" / "data"
NOTES_DIR = ROOT / "src" / "notes"
MANIFEST_FILE = ROOT / "src" / "images" / "manifest.json"

_DOC_PREFIX = "_document_"
_FM_RE = re.compile(r"\A---\s*\n(.*?)\n---\s*\n?", re.DOTALL)


def load_env() -> tuple[str, str]:
    """Read SUPABASE_URL / SUPABASE_SERVICE_KEY from env, then repo .env."""
    import os

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
            "Missing SUPABASE_URL / SUPABASE_SERVICE_KEY (env vars or repo .env)."
        )
    url = re.sub(r"/rest/v1/?$", "", url.rstrip("/"))
    return url, key


def parse_frontmatter(text: str) -> dict:
    m = _FM_RE.match(text)
    if not m:
        return {}
    try:
        fm = yaml.safe_load(m.group(1))
        return fm if isinstance(fm, dict) else {}
    except yaml.YAMLError:
        return {}


def _read_json(path: Path, default):
    try:
        if not path.exists():
            return default
        data = json.loads(path.read_text())
        return data if data else default
    except (json.JSONDecodeError, OSError) as e:
        print(f"WARNING: could not read {path}: {e}")
        return default


# ----------------------------------------------------------------------
# Registry builders (one row per (content_type, content_id))
# ----------------------------------------------------------------------

def build_articles() -> list[dict]:
    data = _read_json(DATA_DIR / "articles.json", [])
    return [
        {
            "content_type": "article",
            "content_id": a["id"],
            "langs": a.get("langs") or {},
            "active": a.get("active", True),
        }
        for a in data
        if isinstance(a, dict) and a.get("id")
    ]


def build_tasks() -> list[dict]:
    data = _read_json(DATA_DIR / "tasks.json", {})
    return [
        {
            "content_type": "task_output",
            "content_id": t["id"],
            "langs": t.get("langs") or {},
            "active": t.get("active", True),
        }
        for t in (data.get("tasks") or [])
        if isinstance(t, dict) and t.get("id")
    ]


def build_image_notes() -> list[dict]:
    manifest = _read_json(MANIFEST_FILE, [])
    rows = []
    for n in manifest:
        if not isinstance(n, dict) or not n.get("id"):
            continue
        tr = (n.get("translations") or {}).get("en-US") or {}
        rows.append(
            {
                "content_type": "image_note",
                "content_id": n["id"],
                "langs": {
                    "en-US": {
                        "title": tr.get("title") or n.get("title") or n["id"],
                        "document": n.get("document") or "",
                        "created": n.get("created") or "",
                        "updated": n.get("updated") or "",
                    }
                },
                "active": not n.get("draft", False),
            }
        )
    return rows


def build_documents() -> list[dict]:
    rows = []
    if not NOTES_DIR.exists():
        return rows
    for p in sorted(NOTES_DIR.rglob("*.md")):
        if not p.name.startswith(_DOC_PREFIX):
            continue
        fm = parse_frontmatter(p.read_text(encoding="utf-8", errors="replace"))
        rows.append(
            {
                "content_type": "document",
                "content_id": p.name,
                "langs": {
                    "en-US": {
                        "title": str(fm.get("title") or p.stem.removeprefix(_DOC_PREFIX + " - ")),
                        "topic": p.parent.name,
                        "source": str(fm.get("source") or ""),
                        "published": str(fm.get("published") or "")[:10],
                    }
                },
                "active": True,
            }
        )
    return rows


def build_registry() -> dict[str, list[dict]]:
    return {
        "article": build_articles(),
        "task_output": build_tasks(),
        "image_note": build_image_notes(),
        "document": build_documents(),
    }


# ----------------------------------------------------------------------
# Star backfill (legacy markdown/static sources -> content_flags)
# ----------------------------------------------------------------------

def backfill_flags() -> list[dict]:
    """Seed content_flags with starred=true rows from the legacy sources."""
    now = datetime.now(timezone.utc).isoformat(timespec="seconds")
    flags: dict[tuple[str, str], dict] = {}

    def add(ctype: str, cid: str) -> None:
        if cid:
            flags[(ctype, cid)] = {
                "content_type": ctype, "content_id": cid,
                "starred": True, "updated_at": now,
            }

    # Task outputs: read frontmatter straight from src/tasks/*.md (the
    # generated tasks.json shape doesn't reliably surface starred per id).
    tasks_dir = ROOT / "src" / "tasks"
    if tasks_dir.exists():
        for p in sorted(tasks_dir.glob("*.md")):
            fm = parse_frontmatter(p.read_text(encoding="utf-8", errors="replace"))
            if str(fm.get("starred", "")).lower() == "true":
                add("task_output", p.name)

    manifest = _read_json(MANIFEST_FILE, [])
    for n in manifest:
        if isinstance(n, dict) and n.get("starred") is True and n.get("id"):
            add("image_note", n["id"])

    return list(flags.values())


# ----------------------------------------------------------------------
# Supabase writes
# ----------------------------------------------------------------------

def chunked(rows: list[dict], size: int):
    for i in range(0, len(rows), size):
        yield rows[i:i + size]


def upsert_table(sb, table: str, rows: list[dict], on_conflict: str) -> int:
    written = 0
    for chunk in chunked(rows, 500):
        sb.table(table).upsert(
            chunk, on_conflict=on_conflict
        ).execute()
        written += len(chunk)
    return written


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--dry-run", action="store_true", help="count rows, write nothing")
    ap.add_argument("--backfill-stars", action="store_true",
                    help="also seed content_flags from legacy starred sources")
    ap.add_argument("--prune", action="store_true",
                    help="delete registry rows whose content no longer exists")
    args = ap.parse_args()

    registry = build_registry()
    print("Registry sources:")
    for ctype, rows in registry.items():
        print(f"  {ctype:12s} {len(rows):4d}")

    flag_rows: list[dict] = []
    if args.backfill_stars:
        flag_rows = backfill_flags()
        print(f"Star backfill: {len(flag_rows)} flagged row(s)")

    if args.dry_run:
        print("Dry run — no writes performed.")
        return

    from supabase import create_client

    url, key = load_env()
    sb = create_client(url, key)

    registry_rows = [r for rows in registry.values() for r in rows]
    n = upsert_table(sb, "content_registry", registry_rows,
                     on_conflict="content_type,content_id")
    print(f"content_registry: upserted {n} row(s)")

    if args.prune:
        known = {(r["content_type"], r["content_id"]) for r in registry_rows}
        removed = 0
        for ctype, rows in registry.items():
            if not rows:
                continue
            existing = (
                sb.table("content_registry")
                .select("content_id")
                .eq("content_type", ctype)
                .execute()
                .data
                or []
            )
            stale = [e["content_id"] for e in existing
                     if (ctype, e["content_id"]) not in known]
            for batch in chunked(stale, 200):
                sb.table("content_registry").delete().eq(
                    "content_type", ctype
                ).in_("content_id", batch).execute()
                removed += len(batch)
            if stale:
                print(f"  pruned {ctype}: {len(stale)} stale row(s)")
        print(f"content_registry: pruned {removed} row(s)")

    if flag_rows:
        n = upsert_table(sb, "content_flags", flag_rows,
                         on_conflict="content_type,content_id")
        print(f"content_flags: backfilled {n} starred row(s) "
              "(unstarred items are intentionally not seeded — absent row = "
              "fall back to the static flag)")


if __name__ == "__main__":
    main()
