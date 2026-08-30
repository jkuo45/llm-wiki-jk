#!/usr/bin/env python3
"""Materialize the canonical Assumptions Lab selections into assumptions.json.

Companion to scripts/07_sync_to_db.py / 07_sync_content.py. The
assumption_selections table (deploy/supabase/assumption_selections.sql) stores
per-user conflict stances; the CANONICAL build state is the row set owned by
the designated owner (ASSUMPTIONS_CANONICAL_OWNER). This script pulls those
rows and rewrites ONLY the machine-managed "selections" block of the
hand-maintained web/public/data/assumptions.json — scenarios, conflicts and
excludedSources are never touched — so the offline 03 graph build can apply
the canonical selections (documented in AGENTS.md §8):

    normalize -> 07_sync_assumptions -> 03_rebuild_from_triples -> 05/07

The resolved directional edges are re-derived server-side-of-the-file: each
stored row pins (scenario, conflict, selected_key) + a source_hash of the
registry content the selection was made against. This script re-resolves the
option edits against the CURRENT registry and warns on hash drift (option
edits changed since the selection was saved — re-check in the Lab and
re-save if the stance no longer applies).

Usage:
    uv run --no-build --with supabase python3 scripts/07_sync_assumptions.py
    python3 scripts/07_sync_assumptions.py --dry-run   # preview, no write
    python3 scripts/07_sync_assumptions.py --check     # drift report only
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "web" / "public" / "data"
ASSUMPTIONS_FILE = DATA_DIR / "assumptions.json"

# Keys the sync owns inside the selections block; everything else in a
# selection entry (future-proofing) is preserved verbatim.
SYNC_KEYS = {"key", "addedEdges", "removedEdges", "updatedAt", "sourceHash"}


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


def canonical_owner() -> str:
    """The designated owner whose rows drive the canonical build."""
    import os

    owner = (os.environ.get("ASSUMPTIONS_CANONICAL_OWNER") or "").strip()
    if not owner and (ROOT / ".env").exists():
        for line in (ROOT / ".env").read_text().splitlines():
            line = line.strip()
            if line.startswith("ASSUMPTIONS_CANONICAL_OWNER="):
                owner = line.split("=", 1)[1].strip().strip('"').strip("'")
                break
    return owner


def fetch_selections(url: str, key: str, owner: str) -> list[dict]:
    """Canonical owner's rows via PostgREST (service role)."""
    import httpx

    resp = httpx.get(
        f"{url.rstrip('/')}/rest/v1/assumption_selections",
        params={
            "owner": f"eq.{owner}",
            "select": "scenario_id,conflict_id,selected_key,added_edges,removed_edges,source_hash,updated_at",
        },
        headers={
            "apikey": key,
            "Authorization": f"Bearer {key}",
        },
        timeout=30,
    )
    resp.raise_for_status()
    return resp.json()


def resolve_against_registry(doc: dict, row: dict) -> tuple[dict | None, str | None]:
    """Re-resolve a row's option edits against the CURRENT registry.

    Returns (selection_entry | None, drift_note | None). None entry means the
    row no longer resolves (scenario/conflict/option renamed or removed).
    """
    scenario = next(
        (s for s in doc.get("scenarios", []) if s.get("id") == row["scenario_id"]), None
    )
    if scenario is None:
        return None, f"scenario {row['scenario_id']!r} no longer exists"
    conflict = next(
        (c for c in scenario.get("conflicts", []) if c.get("id") == row["conflict_id"]), None
    )
    if conflict is None:
        return None, f"conflict {row['scenario_id']}/{row['conflict_id']} no longer exists"
    option = next(
        (o for o in conflict.get("options", []) if o.get("key") == row["selected_key"]), None
    )
    if option is None:
        return None, (
            f"option {row['selected_key']!r} no longer exists on "
            f"{row['scenario_id']}/{row['conflict_id']}"
        )
    edits = option.get("edits") or {}
    entry = {
        "key": row["selected_key"],
        "addedEdges": [
            {
                "from": a.get("from", ""),
                "label": a.get("label", ""),
                "to": a.get("to", ""),
                "confidence_score": a.get("confidence_score"),
                "context": a.get("context", ""),
                "context_zh_TW": a.get("context_zh_TW", ""),
            }
            for a in edits.get("add", [])
        ],
        "removedEdges": [list(k) for k in edits.get("remove", [])],
        "updatedAt": row.get("updated_at") or "",
    }
    if row.get("source_hash"):
        entry["sourceHash"] = row["source_hash"]
    return entry, None


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dry-run", action="store_true", help="preview, no write")
    parser.add_argument("--check", action="store_true", help="drift report only")
    args = parser.parse_args()

    raw = ASSUMPTIONS_FILE.read_bytes()
    doc = json.loads(raw.decode("utf-8"))
    current_hash = hashlib.sha256(raw).hexdigest()[:16]

    owner = canonical_owner()
    if not owner:
        sys.exit(
            "ASSUMPTIONS_CANONICAL_OWNER not set (env or repo .env) — "
            "no canonical owner designated; nothing to sync."
        )
    url, key = load_env()

    rows = fetch_selections(url, key, owner)
    print(f"Canonical owner {owner}: {len(rows)} selection row(s)")

    problems: list[str] = []
    drift: list[str] = []
    selections: dict[str, dict[str, dict]] = {}
    resolved_count = 0
    for row in sorted(rows, key=lambda r: (r["scenario_id"], r["conflict_id"])):
        # drift: selection made against different registry content
        if row.get("source_hash") and row["source_hash"] != current_hash:
            drift.append(
                f"{row['scenario_id']}/{row['conflict_id']}: saved against registry "
                f"hash {row['source_hash']}, current is {current_hash}"
            )
        entry, problem = resolve_against_registry(doc, row)
        if problem:
            problems.append(problem)
            continue
        selections.setdefault(row["scenario_id"], {})[row["conflict_id"]] = entry
        resolved_count += 1

    for d in drift:
        print(f"  ⚠ drift: {d}")
    for p in problems:
        print(f"  ✗ unresolved (left to manual curation): {p}")

    existing = doc.get("selections") or {}
    unchanged = selections == {
        s: {c: {k: v for k, v in sel.items() if k in SYNC_KEYS}
            for c, sel in conflicts.items()}
        for s, conflicts in existing.items()
    }

    if args.check:
        if problems or drift:
            return 1
        print("check OK: canonical selections resolve against the current registry")
        return 0

    if unchanged:
        print("assumptions.json selections already up to date")
        return 0

    doc["selections"] = selections
    doc["generated"] = datetime.now(timezone.utc).strftime("%d_%b_%Y %I:%M %p %Z").upper()
    out = json.dumps(doc, ensure_ascii=False, indent=1) + "\n"

    if args.dry_run:
        print(f"DRY RUN: would write {resolved_count} selection(s) to {ASSUMPTIONS_FILE}")
        return 0

    ASSUMPTIONS_FILE.write_text(out, encoding="utf-8")
    print(f"Wrote {resolved_count} canonical selection(s) into {ASSUMPTIONS_FILE}")
    print("Now re-run the graph build to apply them:")
    print("  uv run --with graphifyy --with networkx --with scipy python3 scripts/03_rebuild_from_triples.py")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
