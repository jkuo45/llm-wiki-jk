#!/usr/bin/env python3
"""Migrate path-based note images into their own data/notes/<id>/ folders.

Historically most notes referenced an image "in place" via a `path` field
(e.g. "../biology/<topic>/<file>"), keeping the physical file under
data/biology/. The notes web app is moving to GitHub-first image URLs, which
require every note's image to live at the deterministic location
data/notes/<id>/<file> (thumb at <stem>.thumb.<ext>).

This script (idempotent):
  - copies each `path`-referenced full-resolution image into its note folder
    (data/notes/<id>/<file>), keeping the source basename
  - drops the `path` field from the manifest entry so the API / thumbnails
    resolve the file from the note folder
  - leaves data/biology/ untouched (it stays gitignored; delete it locally
    once this migration is verified and committed)

Run scripts/01_generate_thumbnail.py afterwards to backfill/confirm every
<stem>.thumb.<ext> sibling (already present for most path-based notes).

Usage:
    uv run python scripts/03_migrate_biology_notes.py            # migrate
    uv run python scripts/03_migrate_biology_notes.py --dry-run  # preview only
"""

import argparse
import json
import shutil
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
DATA_NOTES = REPO_ROOT / "data" / "notes"
MANIFEST = DATA_NOTES / "manifest.json"


def read_list(path: Path) -> list:
    if not path.exists():
        return []
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
        return data if isinstance(data, list) else []
    except (json.JSONDecodeError, OSError) as exc:
        print(f"[migrate-notes] WARN could not read {path}: {exc}", file=sys.stderr)
        return []


def write_list(path: Path, data: list) -> None:
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    tmp.replace(path)


def migrate(dry_run: bool) -> int:
    manifest = read_list(MANIFEST)
    if not manifest:
        print("[migrate-notes] manifest.json empty/absent — nothing to do")
        return 0

    copied = skipped = dropped = 0
    for note in manifest:
        path_val = note.get("path")
        if not path_val:
            continue
        nid = note.get("id", "")
        if not nid or nid != Path(nid).name:
            print(f"[migrate-notes] WARN skipping unsafe id: {nid!r}", file=sys.stderr)
            continue

        # `path` is anchored at data/notes/ (e.g. "../biology/<topic>/<file>"),
        # resolving to a sibling directory like data/biology/. Keep it inside
        # the repo so we can never pull in an arbitrary path.
        src = (DATA_NOTES / path_val).resolve()
        if REPO_ROOT != src and REPO_ROOT not in src.parents:
            print(f"[migrate-notes] WARN path escapes repo: {path_val}", file=sys.stderr)
            continue
        if not src.is_file():
            print(f"[migrate-notes] WARN source missing ({path_val}), leaving note as-is", file=sys.stderr)
            continue

        note_dir = DATA_NOTES / nid
        dst = note_dir / (src.name or "image")
        if dst == src:  # nothing to move (already in the note folder)
            note.pop("path", None)
            dropped += 1
            continue

        if not dst.exists() or dst.stat().st_size != src.stat().st_size:
            if not dry_run:
                note_dir.mkdir(parents=True, exist_ok=True)
                shutil.copy2(src, dst)  # copy — leave data/biology/ in place
            copied += 1
        else:
            skipped += 1

        note.pop("path", None)
        dropped += 1

    if dry_run:
        print(f"[migrate-notes] dry-run: WOULD copy {copied}, drop `path` on {dropped} "
              f"(already-in-place {skipped})")
        return 0

    if dropped:
        write_list(MANIFEST, manifest)
    print(f"[migrate-notes] copied {copied} image(s), skipped {skipped}, "
          f"dropped `path` on {dropped}; manifest updated at {MANIFEST}")
    return 0


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--dry-run", action="store_true",
                    help="report what would change without writing anything")
    args = ap.parse_args()
    return migrate(args.dry_run)


if __name__ == "__main__":
    raise SystemExit(main())
