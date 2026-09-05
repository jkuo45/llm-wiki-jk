"""Notes gallery support.

Serves photos of handwritten notes that were ingested by the offline
`image-ingest` skill (src/images/manifest.json — the durable source of truth).
Live browser uploads were removed; this module is a read-only gallery plus
annotation/metadata editing:

  - GET  /v1/notes                       merged committed index + document index
  - GET  /v1/notes/image/{id}/{page}     serve a note page (or ?thumb=1)
  - POST /v1/notes/{id}/annotations      replace a note's annotation overlay
  - POST /v1/notes/{id}/metadata         update title / document / entities / tags

Manifest entries may also carry a `path` field pointing at an image that stays
in place elsewhere in the repo (resolved relative to src/images/, e.g.
'../data/biology/<topic>/<file>'); such notes are served from that location and
their thumbnail lives in src/images/<id>/.

IMAGE SERVING IS GITHUB-FIRST. The web client (web/components/notes.js) builds
image URLs directly from the deterministic repo path src/images/<id>/<file>
(thumbnail <stem>.thumb.<ext>) hosted on raw.githubusercontent.com, so the
browser loads note images from GitHub's CDN rather than proxying bytes through
this server. This endpoint therefore acts only as a fallback for images not yet
committed/pushed to GitHub or on cache lag. It still serves every file locally
so the client's onerror fallback always works.
"""

import asyncio
import json
import logging
import os
import re
import time
from datetime import datetime, timezone
from pathlib import Path

from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/v1/notes", tags=["notes"])

REPO_ROOT = Path(__file__).resolve().parents[2]  # api/routers/ -> repo root
IMAGES_DIR = REPO_ROOT / "src" / "images"
MANIFEST_FILE = IMAGES_DIR / "manifest.json"
STAGED_FILE = IMAGES_DIR / ".staged.json"
NOTES_DIR = REPO_ROOT / "src" / "notes"

_OCR_FAIL_RE = re.compile(
    r"OCR_FAILED|"
    r"cannot (transcribe|process|read)|"
    r"can'?t (process|read|see)|"
    r"unable to (process|read|see)|"
    r"doesn'?t support|does not support image|"
    r"no vision|image files? directly|not support images?",
    re.IGNORECASE,
)


def _looks_like_ocr_failure(text: str) -> bool:
    return bool(text and _OCR_FAIL_RE.search(text))


def _now_iso() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def _today() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%d")


# --- In-memory caches -------------------------------------------------------
# manifest.json / .staged.json are re-read on every notes request (incl. each
# GET /image). They're written only by this process, so we cache the parsed
# payloads keyed by (mtime, size) and invalidate on write. The document index is
# cheap but walks the whole src/notes tree every refresh, so it's mtime-cached.
_committed_cache: tuple | None = None  # (key, data)
_staged_cache: tuple | None = None     # (key, data)
_documents_cache: tuple | None = None  # (mtime_ns, data)

# Serializes staged/manifest read-modify-write so concurrent uploads or edits
# don't clobber each other (single worker → asyncio lock is sufficient).
_staged_lock = asyncio.Lock()


def _file_key(path: Path) -> tuple | None:
    try:
        st = path.stat()
        return (st.st_mtime_ns, st.st_size)
    except OSError:
        return None


def _read_json(path: Path, default):
    try:
        if not path.exists():
            return default
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)
        return data if isinstance(data, list) else default
    except (json.JSONDecodeError, OSError) as e:
        logger.error(f"could not read {path}: {e}")
        return default


def _write_json(path: Path, data: list) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(path.suffix + ".tmp")
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    os.replace(tmp, path)


def _committed_notes() -> list[dict]:
    global _committed_cache
    key = _file_key(MANIFEST_FILE)
    if _committed_cache is not None and _committed_cache[0] == key:
        return _committed_cache[1]
    data = _read_json(MANIFEST_FILE, [])
    _committed_cache = (key, data)
    return data


def _staged_notes() -> list[dict]:
    global _staged_cache
    key = _file_key(STAGED_FILE)
    if _staged_cache is not None and _staged_cache[0] == key:
        return _staged_cache[1]
    data = _read_json(STAGED_FILE, [])
    _staged_cache = (key, data)
    return data


def _write_staged(notes: list[dict]) -> None:
    global _staged_cache
    _write_json(STAGED_FILE, notes)
    _staged_cache = None  # force reload on next read


def _note_lookup() -> dict[str, dict]:
    out = {}
    for n in _committed_notes():
        out[n["id"]] = n
    for n in _staged_notes():
        out[n["id"]] = n
    return out


def _note_dir(note_id: str) -> Path:
    safe = Path(note_id).name
    if safe != note_id:
        raise HTTPException(status_code=400, detail="Invalid note id")
    return IMAGES_DIR / safe


def _resolve_page_file(note: dict, fname: str) -> Path:
    """Resolve a note page to an actual file on disk.

    In-place ('path'-carrying) notes carry a `path` that is resolved relative
    to src/images/ (e.g. '../data/biology/<topic>/<file>' points at the physical
    file under src/data/biology/); legacy notes hold the file inside their own
    src/images/<id>/ folder. Kept inside the repo so we can never serve an
    arbitrary path."""
    if note.get("path"):
        p = (IMAGES_DIR / note["path"]).resolve()
        if p.is_relative_to(REPO_ROOT):
            return p
        raise HTTPException(status_code=400, detail="Invalid note path")
    return _note_dir(note["id"]) / fname


def _page_path(note: dict, page: int) -> Path | None:
    for p in note.get("pages", []):
        if p.get("page") == page:
            return _resolve_page_file(note, p["file"])
    return None


def _thumb_path(page_path: Path, note: dict | None = None) -> Path:
    """Thumbnail the gallery requests via `?thumb=1`.

    get_image() looks up `<stem>.thumb.<ext>` and serves it when present;
    otherwise it falls back to the full-res original. For in-place notes the
    thumb lives in the note's own src/images/<id>/ folder (sibling of the full
    image only for legacy notes whose image already sits inside that folder)."""
    if note is not None and note.get("path"):
        return _note_dir(note["id"]) / (page_path.stem + ".thumb" + page_path.suffix)
    return page_path.parent / (page_path.stem + ".thumb" + page_path.suffix)


def _list_documents() -> list[dict]:
    """Index of paper/document notes in src/notes for the gallery / admin list.

    Cached by the directory's mtime so we don't re-walk the whole tree on every
    gallery refresh."""
    global _documents_cache
    try:
        mtime = NOTES_DIR.stat().st_mtime_ns
    except OSError:
        mtime = None
    if _documents_cache is not None and _documents_cache[0] == mtime:
        return _documents_cache[1]
    out = []
    if not NOTES_DIR.exists():
        _documents_cache = (mtime, out)
        return out
    for p in sorted(NOTES_DIR.rglob("*.md")):
        if p.name.startswith("_document_"):
            rel = p.relative_to(REPO_ROOT).as_posix()
            out.append({"filename": p.name, "path": rel, "topic": p.parent.name})
    _documents_cache = (mtime, out)
    return out
    return out


def _tr(n: dict, code: str) -> dict:
    """Resolve a locale block from a note's translations map (empty dict if absent)."""
    tr = n.get("translations") or {}
    loc = tr.get(code)
    return loc if isinstance(loc, dict) else {}


def _public_note(n: dict, with_private: bool = False) -> dict:
    # Default content reads from translations["en-US"]; legacy root title/ocr
    # fields remain as fallbacks for un-migrated or staged entries.
    en = _tr(n, "en-US")
    title = en.get("title") or n.get("title") or n.get("id", "Untitled note")
    ocr = en.get("ocr") or n.get("ocr") or ""
    pub = {
        "id": n.get("id"),
        "title": title,
        "document": n.get("document") or "",
        "entities": n.get("entities") or [],
        "tags": n.get("tags") or [],
        "pages": n.get("pages") or [],
        "ocr": ocr,
        "has_ocr": bool(ocr) and not _looks_like_ocr_failure(ocr),
        "annotations": n.get("annotations") or [],
        "translations": n.get("translations") or {},
        "created": n.get("created") or _today(),
        "updated": n.get("updated") or _today(),
        "author": n.get("author") or "you",
        "draft": n.get("draft", False),
        "starred": bool(n.get("starred", False)),
    }
    if with_private:
        pub["image_dir"] = str(_note_dir(n["id"]))
        pub["image_paths"] = [
            {"page": p.get("page"), "path": str(_resolve_page_file(n, p["file"]))}
            for p in n.get("pages", [])
        ]
    else:
        pub["path"] = n.get("path") or ""
    return pub


@router.get("")
async def get_notes() -> dict:
    """Gallery index: merged committed + staged notes, plus the document index."""
    by_id: dict[str, dict] = {}
    for n in _committed_notes() + _staged_notes():
        by_id[n["id"]] = n  # staged wins on collision (still-pending drafts)
    notes = list(by_id.values())
    notes.sort(key=lambda n: (n.get("updated") or "", n.get("id") or ""), reverse=True)
    return {
        "notes": [_public_note(n) for n in notes],
        "documents": _list_documents(),
        "generated": _now_iso(),
        "count": len(notes),
    }


@router.get("/image/{note_id}/{page}")
async def get_image(note_id: str, page: int, thumb: bool = False) -> FileResponse:
    """Serve a note photo (per page). `?thumb=1` prefers a thumbnail file."""
    note = _note_lookup().get(note_id)
    if note is None:
        raise HTTPException(status_code=404, detail="Note not found")
    path = _page_path(note, page)
    if path is None or not path.exists():
        raise HTTPException(status_code=404, detail="Image not found")
    if thumb:
        tpath = _thumb_path(path, note)
        if tpath.exists():
            path = tpath
    # Note images are append-only uploads; safe to let the browser/CDN cache
    # them for an hour so the gallery (many per page) isn't re-fetched each load.
    return FileResponse(
        path, headers={"Cache-Control": "public, max-age=3600"}
    )


@router.post("/{note_id}/annotations")
async def save_annotations(note_id: str, payload: dict) -> dict:
    """Replace the annotation overlay list for a note."""
    note = _note_lookup().get(note_id)
    if note is None:
        raise HTTPException(status_code=404, detail="Note not found")
    ann = payload.get("annotations")
    if not isinstance(ann, list):
        raise HTTPException(status_code=400, detail="annotations must be a JSON array")
    cleaned = []
    for a in ann:
        if isinstance(a, dict) and a.get("type"):
            cleaned.append(
                {
                    "id": a.get("id") or f"a{int(time.time() * 1000)}",
                    "type": str(a["type"]),
                    "page": int(a.get("page") or 1),
                    "color": str(a.get("color") or "#ffcc00"),
                    "label": str(a.get("label") or ""),
                    **{k: float(v) for k, v in a.items()
                       if k in ("x", "y", "r", "w", "h", "x1", "y1", "x2", "y2")},
                }
            )
    note["annotations"] = cleaned
    note["updated"] = _today()
    await _persist_note(note)
    return {"id": note_id, "annotations": cleaned}


@router.post("/{note_id}/metadata")
async def save_metadata(note_id: str, payload: dict) -> dict:
    """Update title / document / entities / tags on a note."""
    note = _note_lookup().get(note_id)
    if note is None:
        raise HTTPException(status_code=404, detail="Note not found")
    if "title" in payload and payload["title"] is not None:
        new_title = str(payload["title"]).strip()
        if new_title:
            note.setdefault("translations", {}).setdefault("en-US", {})["title"] = new_title
    if "document" in payload and payload["document"] is not None:
        note["document"] = str(payload["document"]).strip()
    if "entities" in payload and isinstance(payload["entities"], list):
        note["entities"] = [str(e).strip() for e in payload["entities"][:40] if str(e).strip()]
    if "tags" in payload and isinstance(payload["tags"], list):
        note["tags"] = [str(t).strip().lower().replace(" ", "-") for t in payload["tags"][:40] if str(t).strip()]
    note["updated"] = _today()
    await _persist_note(note)
    return _public_note(note)


async def _persist_note(note: dict) -> None:
    """Write an edit back to wherever the note already lives.

    Committed notes update src/images/manifest.json; drafts and
    new edits go to .staged.json. Serialized via ``_staged_lock`` so concurrent
    edits can't lose each other's read-modify-write.
    """
    async with _staged_lock:
        committed = _committed_notes()
        for i, n in enumerate(committed):
            if n["id"] == note["id"]:
                committed[i] = note
                _write_json(MANIFEST_FILE, committed)
                global _committed_cache
                _committed_cache = None  # force reload on next read
                return
        staged = _staged_notes()
        for i, n in enumerate(staged):
            if n["id"] == note["id"]:
                staged[i] = note
                _write_staged(staged)
                return
        staged.append(note)
        _write_staged(staged)


