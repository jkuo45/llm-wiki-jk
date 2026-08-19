#!/usr/bin/env python3
"""Add zh-TW translations to data/notes/manifest.json for the Notes panel.

Each translation batch is a JSON array of {"id": ..., "title": ..., "ocr": ...}
written by the translation workers (zh-TW, Taiwan). This script merges every
<batch>.zh.json found in the translation dir into the manifest, adding one new
key per note:

    "translations": { "zh-TW": { "title": "<zh-TW>", "ocr": "<zh-TW>" } }

placed as the LAST key of the note object so no positional assumptions break.
All existing fields are preserved (only the new key is added, verified by a
deep compare).

Usage:
    uv run python scripts/02_add_note_translations.py [TRANSLATION_DIR]

Default TRANSLATION_DIR is the OpenCode temp dir used by the batch pipeline.
"""

from __future__ import annotations

import copy
import glob
import json
import os
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
MANIFEST = REPO_ROOT / "data" / "notes" / "manifest.json"

DEFAULT_TEMP = Path(
    os.environ.get(
        "TMPDIR",
        "/private/var/folders/5z/f8k9k4cd62bdw6pgw7vrywh00000gn/T",
    )
)


def main() -> int:
    tdir = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_TEMP / "opencode" / "notes-translations"
    if not tdir.is_dir():
        print(f"translation dir not found: {tdir}", file=sys.stderr)
        return 2

    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    by_id = {n["id"]: n for n in manifest}
    if len(by_id) != len(manifest):
        print("duplicate ids in manifest!", file=sys.stderr)
        return 2

    translations: dict[str, dict] = {}
    for path in sorted(glob.glob(str(tdir / "*.zh.json"))):
        try:
            batch = json.loads(Path(path).read_text(encoding="utf-8"))
        except json.JSONDecodeError as exc:
            print(f"invalid batch {path}: {exc}", file=sys.stderr)
            return 2
        for item in batch:
            ident = item.get("id")
            title = (item.get("title") or "").strip()
            ocr = (item.get("ocr") or "").strip()
            if not ident or not title or not ocr:
                print(f"incomplete entry in {path}: {ident}", file=sys.stderr)
                return 2
            if ident in translations:
                print(f"duplicate translation id {ident}", file=sys.stderr)
                return 2
            translations[ident] = {"zh-TW": {"title": title, "ocr": ocr}}

    missing = [i for i in by_id if i not in translations]
    if missing:
        print(f"missing translations for {len(missing)} notes: {missing}", file=sys.stderr)
        return 2

    original = copy.deepcopy(manifest)
    for n in manifest:
        n["translations"] = translations[n["id"]]

    # Deep-compare every note against the original once the added key is removed
    # — guarantees no pre-existing field was altered.
    for orig, merged in zip(original, manifest):
        check = copy.deepcopy(merged)
        check.pop("translations", None)
        if check != orig:
            print(f"unexpected change beyond translations in {orig.get('id')}", file=sys.stderr)
            return 2

    out = json.dumps(manifest, ensure_ascii=False, indent=2) + "\n"
    MANIFEST.write_text(out, encoding="utf-8")
    print(f"merged {len(translations)} translations into {MANIFEST.name}")
    print(f"notes: {len(manifest)} (all translated)")

    for path in glob.glob(str(tdir / "*.zh.json")):
        try:
            os.remove(path)
        except OSError:
            pass
    print("consumed translation batch files")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())