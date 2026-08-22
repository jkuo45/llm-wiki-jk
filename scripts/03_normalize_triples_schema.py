#!/usr/bin/env python3
"""Idempotently normalize all src/**/_triples.json to the multilingual schema (v2).

Converts the legacy flat triple format to the current one:

  - `context`: plain string  ->  {"en-US": <string>, "zh-TW": <string-or-"">}
  - adds a stable `id`  = sha1(norm(subject)|predicate|norm(object))[:12]
  - adds `created` / `updated` (ISO-8601 UTC) when missing, backfilled from the
    file's mtime on the first migration only; future edits set them properly
  - validates required fields, both BCP-47 context keys, ISO timestamps,
    updated >= created, and that `id` is unique within the file

Idempotent — safe to run after any ingest/edit. Missing zh-TW contexts are
reported (NOT auto-translated) so they can be filled by a re-extraction or by a
translation pass over the opencode serve adapter (api/llm.translate_text).

Run:  python3 scripts/03_normalize_triples_schema.py [--check]
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# Canonical serialization order for a normalized triple.
KEY_ORDER = [
    "id",
    "subject",
    "predicate",
    "object",
    "context",
    "confidence",
    "source_document",
    "created",
    "updated",
]

ISO_RE = re.compile(r"^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$")


def strip_wikilink(s: str) -> str:
    return re.sub(
        r"\[\[([^\]]+)\]\]",
        lambda m: m.group(1).split("|", 1)[1] if "|" in m.group(1) else m.group(1),
        s,
    ).strip()


def norm(label: str) -> str:
    """Stable snake_case node id (mirrors scripts/03_rebuild_from_triples.py)."""
    s = strip_wikilink(label).strip().lower()
    return re.sub(r"[^a-z0-9]+", "_", s).strip("_")


def triple_id(t: dict) -> str:
    key = (
        f"{norm(t.get('subject', ''))}"
        f"|{t.get('predicate', '')}"
        f"|{norm(t.get('object', ''))}"
    )
    return hashlib.sha1(key.encode("utf-8")).hexdigest()[:12]


def now_iso() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def mtime_iso(path: Path) -> str:
    return datetime.fromtimestamp(path.stat().st_mtime, tz=timezone.utc).strftime(
        "%Y-%m-%dT%H:%M:%SZ"
    )


def normalize_context(t: dict) -> dict:
    c = t.get("context", "")
    if isinstance(c, dict):
        ctx = dict(c)
        ctx.setdefault("en-US", "")
        ctx.setdefault("zh-TW", "")
        return {
            "en-US": (ctx["en-US"] or "").strip(),
            "zh-TW": (ctx["zh-TW"] or "").strip(),
        }
    return {"en-US": (c or "").strip(), "zh-TW": ""}


def reorder(t: dict) -> dict:
    out = {}
    for k in KEY_ORDER:
        if k in t:
            out[k] = t[k]
    for k in t:
        if k not in out:
            out[k] = t[k]
    return out


def serialize(triples: list) -> str:
    return json.dumps(triples, ensure_ascii=False, indent=2) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Normalize src/_triples.json files to the v2 multilingual schema."
    )
    parser.add_argument(
        "--check",
        action="store_true",
        help="validate + report coverage only; do not write any files",
    )
    args = parser.parse_args()

    files = sorted(ROOT.glob("src/**/_triples.json"))
    if not files:
        print("No _triples.json files found under src/")
        return 1

    totals = Counter()
    problems = Counter()
    written = 0

    print(f"=== Normalizing {len(files)} _triples.json files (check={args.check}) ===")
    for f in files:
        rel = str(f.relative_to(ROOT))
        raw = f.read_text(encoding="utf-8")
        try:
            data = json.loads(raw)
        except json.JSONDecodeError as e:
            print(f"  !! {rel}: invalid JSON ({e})")
            totals["invalid_files"] += 1
            continue
        if not isinstance(data, list):
            print(f"  !! {rel}: expected a JSON array")
            totals["invalid_files"] += 1
            continue

        seen: set = set()
        out: list = []
        for t in data:
            if not isinstance(t, dict):
                problems["non_object_triple"] += 1
                continue
            t = dict(t)
            # context -> multilingual map
            t["context"] = normalize_context(t)
            # stable id
            if "id" not in t or not t.get("id"):
                t["id"] = triple_id(t)
            # timestamps (backfill from file mtime on first migration only)
            if "created" not in t or not t.get("created"):
                t["created"] = mtime_iso(f)
            if "updated" not in t or not t.get("updated"):
                t["updated"] = t["created"]

            # --- validation ---
            for req in ("subject", "predicate", "object"):
                if not t.get(req):
                    problems[f"missing_{req}"] += 1
            if not t["context"]["en-US"]:
                problems["missing_en"] += 1
            if not t["context"]["zh-TW"]:
                problems["missing_zh"] += 1
            if not ISO_RE.match(t["created"]) or not ISO_RE.match(t["updated"]):
                problems["bad_timestamp"] += 1
            elif t["updated"] < t["created"]:
                problems["updated_before_created"] += 1
            if t["id"] in seen:
                problems["duplicate_id"] += 1
                continue  # drop the later duplicate, keep the first
            seen.add(t["id"])
            out.append(reorder(t))

        new_text = serialize(out)
        if new_text == raw or args.check:
            tag = "validated, not written" if args.check else "unchanged"
            print(f"  {rel}: {len(out)} triples ({tag})")
        else:
            f.write_text(new_text, encoding="utf-8")
            written += 1
            print(f"  {rel}: {len(out)} triples (NORMALIZED + written)")
        totals["triples"] += len(out)
        totals["files"] += 1

    print("\n=== Totals ===")
    for k in ("files", "triples"):
        print(f"  {k}: {totals[k]}")
    print("  files rewritten:", written)
    if problems:
        print("\n=== Coverage / validation problems (fix these) ===")
        for k in (
            "missing_zh",
            "missing_en",
            "missing_dates",
            "bad_timestamp",
            "updated_before_created",
            "duplicate_id",
            "missing_subject",
            "missing_predicate",
            "missing_object",
            "non_object_triple",
        ):
            if problems[k]:
                print(f"  {k}: {problems[k]}")
    else:
        print("  no validation problems")

    if args.check and (problems["missing_en"] or problems["invalid_files"]):
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
