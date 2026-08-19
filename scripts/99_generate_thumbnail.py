#!/usr/bin/env python3
"""Generate thumbnail images for handwritten notes.

The web gallery requests every card / page-strip image with `?thumb=1`, and the
API serves a sibling `<stem>.thumb.<ext>` file when one exists — otherwise it
falls back to the full-resolution original (330 KB–1.5 MB each), which makes
the gallery slow to load. Nothing previously generated those thumbnails.

This script backfills (and keeps in sync) a `.thumb` file next to every page
image under data/notes/: manifest.json (committed curation) plus .staged.json
(live browser uploads). It is idempotent — fresh thumbnails are left alone
unless `--force` is passed.

Usage:
    uv run --with pillow python scripts/99_generate_thumbnail.py [--thumb-size 400] [--force]

New uploads also generate a thumbnail at upload time (see api/notes.py), so
running this is only needed as a backfill or after a server deploy without
Pillow installed.
"""

import argparse
import json
import sys
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError as exc:  # pragma: no cover - hard to trigger deterministically
    sys.exit(f"Pillow is required: run with  uv run --with pillow python {Path(__file__).name}  ({exc})")

REPO_ROOT = Path(__file__).resolve().parent.parent
DATA_NOTES_DIR = REPO_ROOT / "data" / "notes"
MANIFEST = DATA_NOTES_DIR / "manifest.json"
STAGED = DATA_NOTES_DIR / ".staged.json"

DEFAULT_THUMB_SIZE = 400  # longest edge in pixels — plenty for the small gallery cards


def read_json(path: Path) -> list:
    if not path.exists():
        return []
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
        return data if isinstance(data, list) else []
    except (json.JSONDecodeError, OSError):
        return []


def resolve_page_file(note: dict, fname: str) -> Path:
    # `path` is resolved relative to data/notes/ (e.g. '../biology/<topic>/<file>').
    if note.get("path"):
        return (DATA_NOTES_DIR / note["path"]).resolve()
    return DATA_NOTES_DIR / note.get("id", "") / fname


def page_paths() -> list[tuple[Path, dict]]:
    """Every page image (and its note) referenced by committed + staged manifests."""
    out: list[tuple[Path, dict]] = []
    for note in read_json(MANIFEST) + read_json(STAGED):
        nid = note.get("id", "")
        if not nid or nid != Path(nid).name:
            continue  # reject path traversal in the (server-supplied) id
        for p in note.get("pages", []):
            fname = p.get("file")
            if not fname:
                continue
            path = resolve_page_file(note, fname)
            if path.exists():
                out.append((path, note))
    return out


def thumb_path(src: Path, note: dict | None = None) -> Path:
    if note is not None and note.get("path"):
        # in-place note -> thumb lives in its own data/notes/<id>/ folder
        return DATA_NOTES_DIR / note["id"] / (src.stem + ".thumb" + src.suffix)
    return src.parent / (src.stem + ".thumb" + src.suffix)


def save_thumbnail(src: Path, dst: Path, size: int) -> None:
    """Downscale src → dst, keeping the source format so the served
    content-type stays correct. Idempotent and orientation-aware."""
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im)  # honor EXIF rotation from phone photos
        im.thumbnail((size, size))        # longest-edge fit, preserves aspect
        ext = src.suffix.lower()
        if ext in (".jpg", ".jpeg"):
            if im.mode in ("RGBA", "P", "LA"):
                im = im.convert("RGB")
            im.save(dst, format="JPEG", quality=74, optimize=True, progressive=True)
        elif ext == ".webp":
            im.save(dst, format="WEBP", quality=74)
        elif ext == ".gif":
            im.convert("RGB").save(dst, format="GIF", optimize=True)
        else:  # .png and anything else
            im.save(dst, format="PNG", optimize=True)


def main() -> int:
    ap = argparse.ArgumentParser(description="Generate note page thumbnails.")
    ap.add_argument("--thumb-size", type=int, default=DEFAULT_THUMB_SIZE,
                    help=f"longest-edge pixel size (default {DEFAULT_THUMB_SIZE})")
    ap.add_argument("--force", action="store_true",
                    help="regenerate existing thumbnails instead of skipping fresh ones")
    args = ap.parse_args()

    if args.thumb_size < 48:
        sys.exit("--thumb-size must be at least 48px")

    sources = page_paths()
    if not sources:
        print("[note-thumbs] no note page images found in data/notes/")
        return 0

    made = skipped = failed = 0
    for src, note in sources:
        dst = thumb_path(src, note)
        if dst.exists() and not args.force:
            # Regenerate only if the source is newer than an existing thumb.
            if src.stat().st_mtime <= dst.stat().st_mtime:
                skipped += 1
                continue
        try:
            save_thumbnail(src, dst, args.thumb_size)
            made += 1
        except Exception as exc:  # noqa: BLE001 - report and keep going
            print(f"  ! {src.name}: {exc}", file=sys.stderr)
            failed += 1

    print(f"[note-thumbs] generated {made}, skipped {skipped}, failed {failed} "
          f"thumbnail(s) in {DATA_NOTES_DIR}")
    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
