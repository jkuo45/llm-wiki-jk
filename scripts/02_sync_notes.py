#!/usr/bin/env python3
"""Sync data/biology images into the notes manifest WITHOUT moving them.

Scans data/biology/<topic>/ for image files and tracks each one in
data/notes/manifest.json via a `path` field anchored at data/notes/
("../biology/<topic>/<file>") so the notes panel can serve them in place.
Images are never moved or copied into data/notes; the only artifact we write
there is a tiny <stem>.thumb.<ext> per note (keeps data/biology pristine).

Idempotent:
  - dedupes against existing manifest entries by content hash AND resolved path
  - never overwrites existing entries / curated fields
  - never removes entries (deleted images simply 404 until removed manually)

Usage:
    uv run --with pillow python scripts/02_sync_notes.py          # sync + thumbs
    uv run --with pillow python scripts/02_sync_notes.py --ocr    # + OCR new entries (local gemma3)
"""

import argparse
import concurrent.futures
import hashlib
import json
import re
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
DATA_NOTES = REPO_ROOT / "data" / "notes"
MANIFEST = DATA_NOTES / "manifest.json"
STAGED = DATA_NOTES / ".staged.json"
BIOLOGY = REPO_ROOT / "data" / "biology"

DAY = datetime.now(timezone.utc).strftime("%Y-%m-%d")
ID_DATE = DAY.replace("-", "")
NOW = datetime.now(timezone.utc).isoformat(timespec="seconds")

OLLAMA = "/usr/local/bin/ollama"
MODEL = "gemma3"
IMG_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".gif"}
THUMB_SIZE = 400

# biology folder -> manifest topic. Unmapped folders fall back to the folder
# slug itself (edit the manifest afterwards to regroup entries).
TOPIC_MAP = {
    "adrenochrome": "adrenochrome",
    "apoptosis": "cancer",
    "autophagy": "autophagy",
    "cancer_caspase": "cancer",
    "creatine": "creatine",
    "epigenetics": "epigenetics",
    "fenbendazole": "cancer",
    "glycation_AGEs": "misc",
    "honeybee_venom": "cancer",
    "inflammation": "misc",
    "ivermectin": "cancer",
    "leukocytes": "blood-cells",
    "lysosome_biogenesis": "autophagy",
    "methemoglobin": "oxidative_stress",
    "mitochrondia": "misc",
    "mitohormesis": "sirtuins",
    "mTORC": "autophagy",
    "nad+_nmn_nr": "sirtuins",
    "nicotinamide_riboside": "sirtuins",
    "pancreatic cancer": "cancer",
    "quiescent_cells": "senescence",
    "resveratrol": "sirtuins",
    "resting_metabolic_rate": "misc",
    "rgd_peptide_gut_microbiome": "cancer",
    "senescence": "senescence",
    "sirtuins": "sirtuins",
    "spermidine": "spermidine",
    "tfeb_mechanism_therapeutic": "autophagy",
    "tfeb_tfe3": "autophagy",
    "urolithin_a": "sirtuins",
    "vendors": "misc",
    "yamanaka_factors": "epigenetics",
}


def read_list(path: Path) -> list:
    if not path.exists():
        return []
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
        return data if isinstance(data, list) else []
    except (json.JSONDecodeError, OSError) as exc:
        print(f"[sync-notes] WARN could not read {path}: {exc}", file=sys.stderr)
        return []


def write_list(path: Path, data: list) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    tmp.replace(path)


def slugify(text: str, limit: int = 40) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return s[:limit].strip("-") or "note"


def file_key(path: Path) -> str:
    return hashlib.md5(path.read_bytes()).hexdigest()


def resolve_page_file(note: dict, fname: str) -> Path:
    """Resolve a note page to an actual file on disk.

    `path` is anchored at data/notes/ (e.g. '../biology/<topic>/<file>' resolves
    to the physical file under data/biology/); legacy notes hold the file inside
    their own data/notes/<id>/ folder."""
    if note.get("path"):
        return (DATA_NOTES / note["path"]).resolve()
    return DATA_NOTES / note.get("id", "") / fname


def existing_keys(manifest: list, staged: list) -> tuple[set, set]:
    """(resolved-path strings, content hashes) already covered by the manifests."""
    paths, hashes = set(), set()
    for n in manifest + staged:
        for p in n.get("pages", []):
            fname = p.get("file")
            if not fname:
                continue
            fpath = resolve_page_file(n, fname)
            if fpath.exists():
                paths.add(str(fpath))
                hashes.add(file_key(fpath))
    return paths, hashes


def make_thumbnail(src: Path, dst: Path) -> bool:
    """Downscale src -> dst, format-preserving + orientation-aware. Best-effort."""
    try:
        from PIL import Image, ImageOps  # noqa: PLC0415 - deferred optional dep
    except ImportError:
        print("[sync-notes] WARN Pillow missing — run with `uv run --with pillow`", file=sys.stderr)
        return False
    try:
        dst.parent.mkdir(parents=True, exist_ok=True)
        with Image.open(src) as im:
            im = ImageOps.exif_transpose(im)
            im.thumbnail((THUMB_SIZE, THUMB_SIZE))
            ext = src.suffix.lower()
            if ext in (".jpg", ".jpeg"):
                if im.mode in ("RGBA", "P", "LA"):
                    im = im.convert("RGB")
                im.save(dst, format="JPEG", quality=74, optimize=True)
            elif ext == ".webp":
                im.save(dst, format="WEBP", quality=74)
            elif ext == ".gif":
                im.convert("RGB").save(dst, format="GIF", optimize=True)
            else:
                im.save(dst, format="PNG", optimize=True)
        return True
    except Exception as exc:  # noqa: BLE001 - thumbnails are best-effort
        print(f"[sync-notes] WARN thumb failed for {src.name}: {exc}", file=sys.stderr)
        return False


def ocr_image(path: Path) -> str:
    cmd = [
        OLLAMA, "run", MODEL,
        "Transcribe ALL visible text in the image at the absolute path: "
        f"{path.resolve()}. Output only the transcribed text, faithfully. "
        "If there are diagrams/buttons/tables, describe them briefly.",
    ]
    r = subprocess.run(cmd, capture_output=True, text=True, timeout=900)
    out = r.stdout or ""
    out = re.sub(r"\x1b\[[0-9;?]*[a-zA-Z]", "", out)
    out = out.replace("\r", "")
    return out.strip()


def main() -> int:
    ap = argparse.ArgumentParser(description="Sync data/biology images into the notes manifest.")
    ap.add_argument("--ocr", action="store_true", help="OCR newly added entries with local gemma3")
    args = ap.parse_args()

    if not BIOLOGY.is_dir():
        print(f"[sync-notes] {BIOLOGY} not found — nothing to do")
        return 0

    manifest = read_list(MANIFEST)
    staged = read_list(STAGED)
    by_id = {n.get("id"): n for n in manifest + staged}
    covered_paths, covered_hashes = existing_keys(manifest, staged)

    candidates = []
    for folder in sorted(x for x in BIOLOGY.iterdir() if x.is_dir()):
        for p in sorted(folder.iterdir()):
            if p.is_file() and p.suffix.lower() in IMG_EXTS:
                candidates.append((folder.name, p))

    new_entries, added, thumbs = [], 0, 0
    used_ids = set(by_id)
    for folder_name, p in candidates:
        rel = p.relative_to(DATA_NOTES).as_posix()  # anchored at data/notes: ../biology/<topic>/<file>
        if str(p.resolve()) in covered_paths or file_key(p) in covered_hashes:
            continue
        topic = TOPIC_MAP.get(folder_name, slugify(folder_name).replace("-", "_"))
        nid = f"n-{ID_DATE}-{slugify(topic)}-{slugify(p.stem)}"
        base, idx = nid, 1
        while nid in used_ids:
            idx += 1
            nid = f"{base}-{idx:02d}"
        used_ids.add(nid)
        note = {
            "id": nid,
            "title": f"{p.stem} ({folder_name})",
            "topic": topic,
            "document": "",
            "entities": [],
            "tags": [slugify(topic)],
            "pages": [{"page": 1, "file": p.name}],
            "path": rel,
            "ocr": "",
            "ocr_lang": "en",
            "annotations": [],
            "created": DAY,
            "updated": DAY,
            "created_at": NOW,
            "author": "you",
            "draft": False,
            "updated_at": NOW,
        }
        new_entries.append(note)
        by_id[nid] = note
        added += 1
        thumb = DATA_NOTES / nid / (p.stem + ".thumb" + p.suffix)
        if not thumb.exists() and make_thumbnail(p, thumb):
            thumbs += 1

    if added:
        manifest = sorted(by_id.values(), key=lambda n: n.get("created_at") or "")
        write_list(MANIFEST, manifest)
        print(f"[sync-notes] added {added} entry(ies), wrote {thumbs} thumbnail(s) -> manifest.json")
    else:
        print("[sync-notes] nothing new in data/biology — manifest already in sync")

    if args.ocr:
        # Re-read from disk so any concurrent enrichment (entities/tags/titles)
        # is preserved when we merge transcripts back in.
        all_notes = read_list(MANIFEST) + read_list(STAGED)
        by_id = {n.get("id"): n for n in all_notes}
        pending = [n for n in all_notes
                   if n.get("pages") and not (n.get("ocr") or "").strip()]
        if not pending:
            print("[sync-notes] no entries missing OCR — nothing to transcribe")
        else:
            print(f"[sync-notes] OCRing {len(pending)} entry(ies) with {MODEL} ...", file=sys.stderr)
            done = 0

            def work(note):
                fname = note["pages"][0]["file"]
                path = resolve_page_file(note, fname)
                return note, path, ocr_image(path)

            def persist(updates):
                # Merge transcripts into the on-disk manifest by id so partial
                # progress survives timeouts/crashes. Never overwrites other
                # fields (entities/tags/titles) that were enriched meanwhile.
                disk = read_list(MANIFEST)
                dmap = {n.get("id"): n for n in disk}
                for nid, text in updates.items():
                    if nid in dmap:
                        dmap[nid]["ocr"] = text
                        dmap[nid]["updated_at"] = NOW
                write_list(MANIFEST, sorted(dmap.values(), key=lambda n: n.get("created_at") or ""))

            batch: dict[str, str] = {}
            with concurrent.futures.ThreadPoolExecutor(max_workers=4) as ex:
                futs = [ex.submit(work, n) for n in pending]
                for fut in concurrent.futures.as_completed(futs):
                    try:
                        note, _path, text = fut.result()
                    except Exception as exc:  # noqa: BLE001 - one bad image must not kill the sweep
                        print(f"[sync-notes] WARN OCR failed: {exc}", file=sys.stderr)
                        continue
                    note["ocr"] = text
                    note["updated_at"] = NOW
                    batch[note["id"]] = text
                    done += 1
                    print(f"[sync-notes] OCR {done}/{len(pending)} {note['id']}", file=sys.stderr)
                    if done % 3 == 0:  # persist every few so progress is durable
                        persist(batch)
                        batch = {}
            if batch:
                persist(batch)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())