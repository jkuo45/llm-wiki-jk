#!/usr/bin/env python3
"""Reconcile live handwritten uploads into the durable committed manifest.

Reads data/notes/.staged.json (live browser uploads) and merges every
entry into data/notes/manifest.json, deduplicated by id. The draft flag
is dropped and .staged.json is left empty so the next upload starts clean.

Usage:
    uv run python scripts/02_reconcile_notes.py
"""

import json
import sys
from datetime import datetime, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
DATA_NOTES_DIR = REPO_ROOT / "data" / "notes"
MANIFEST = DATA_NOTES_DIR / "manifest.json"
STAGED = DATA_NOTES_DIR / ".staged.json"


def read_list(path: Path) -> list:
    if not path.exists():
        return []
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
        return data if isinstance(data, list) else []
    except (json.JSONDecodeError, OSError) as exc:
        print(f"[reconcile-notes] WARN could not read {path}: {exc}", file=sys.stderr)
        return []


def write_list(path: Path, data: list) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    tmp.replace(path)


def main() -> int:
    manifest = read_list(MANIFEST)
    staged = read_list(STAGED)
    if not staged:
        print("[reconcile-notes] nothing staged — nothing to do")
        return 0

    by_id = {n.get("id"): n for n in manifest}
    moved = 0
    for note in staged:
        note_id = note.get("id")
        if not note_id:
            continue
        note["draft"] = False
        note["updated_at"] = datetime.now(timezone.utc).isoformat(timespec="seconds")
        by_id[note_id] = note
        moved += 1

    write_list(MANIFEST, sorted(by_id.values(), key=lambda n: n.get("created_at") or ""))
    write_list(STAGED, [])
    print(f"[reconcile-notes] merged {moved} staged note(s) into manifest.json")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())