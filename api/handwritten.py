"""Handwritten Notes panel support.

Serves + accepts photos of handwritten notes about papers. Two posting paths
feed one place:

  - committed curation  : media/handwritten/manifest.json  (durable, ships with the wiki)
  - live uploads        : media/handwritten/.staged.json   (browser uploads, served immediately)

The GET index merges both. A reconcile script (scripts/09_reconcile_handwritten.py)
folds staged drafts into the committed manifest.

Writes are PUBLIC for now (auth lands later). Reads are public like the rest of
the site. OCR runs ONCE per note through the read-only wiki-util agent: the
endpoint short-circuits when a transcript already exists.
"""

import json
import logging
import os
import re
import time
from datetime import datetime, timezone
from pathlib import Path

from fastapi import APIRouter, File, Form, HTTPException, UploadFile
from fastapi.responses import FileResponse

from .llm import OpencodeUnavailable, transcribe_image

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/v1/handwritten", tags=["handwritten"])

REPO_ROOT = Path(__file__).resolve().parent.parent
HANDWRITTEN_DIR = REPO_ROOT / "media" / "handwritten"
MANIFEST_FILE = HANDWRITTEN_DIR / "manifest.json"
STAGED_FILE = HANDWRITTEN_DIR / ".staged.json"
NOTES_DIR = REPO_ROOT / "src" / "notes"

MAX_FILE_BYTES = 30 * 1024 * 1024  # 30 MB per image
MAX_PAGES = 24
ALLOWED_EXT = {".jpg", ".jpeg", ".png", ".webp", ".gif"}
_ALLOWED_CONTENT = {
    "image/jpeg", "image/png", "image/webp", "image/gif",
    "application/octet-stream", "",  # some browsers send opaque types
}

_SLUG_RE = re.compile(r"[^a-z0-9]+")


def _now_iso() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def _today() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%d")


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
    return _read_json(MANIFEST_FILE, [])


def _staged_notes() -> list[dict]:
    return _read_json(STAGED_FILE, [])


def _write_staged(notes: list[dict]) -> None:
    _write_json(STAGED_FILE, notes)


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
    return HANDWRITTEN_DIR / safe


def _page_path(note: dict, page: int) -> Path | None:
    for p in note.get("pages", []):
        if p.get("page") == page:
            return _note_dir(note["id"]) / p["file"]
    return None


def _list_documents() -> list[dict]:
    """Index of paper/document notes in src/notes for the upload picker."""
    out = []
    if not NOTES_DIR.exists():
        return out
    for p in sorted(NOTES_DIR.rglob("*.md")):
        if p.name.startswith("_document_"):
            rel = p.relative_to(REPO_ROOT).as_posix()
            out.append({"filename": p.name, "path": rel, "topic": p.parent.name})
    return out


def _public_note(n: dict, with_private: bool = False) -> dict:
    pub = {
        "id": n.get("id"),
        "title": n.get("title") or n.get("id", "Untitled note"),
        "topic": n.get("topic", "misc"),
        "document": n.get("document") or "",
        "entities": n.get("entities") or [],
        "tags": n.get("tags") or [],
        "pages": n.get("pages") or [],
        "ocr": n.get("ocr") or "",
        "ocr_lang": n.get("ocr_lang") or "en",
        "has_ocr": bool(n.get("ocr")),
        "annotations": n.get("annotations") or [],
        "created": n.get("created") or _today(),
        "updated": n.get("updated") or _today(),
        "author": n.get("author") or "you",
        "draft": n.get("draft", False),
    }
    if with_private:
        pub["image_dir"] = str(_note_dir(n["id"]))
        pub["image_paths"] = [
            {"page": p.get("page"), "path": str(_note_dir(n["id"]) / p["file"])}
            for p in n.get("pages", [])
        ]
    return pub


@router.get("")
async def get_handwritten() -> dict:
    """Gallery index: merged committed + staged notes, plus the document index."""
    by_id: dict[str, dict] = {}
    for n in _committed_notes() + _staged_notes():
        by_id[n["id"]] = n  # staged wins on collision (still-pending drafts)
    notes = list(by_id.values())
    notes.sort(key=lambda n: n.get("created_at") or n.get("updated") or "", reverse=True)
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
        tpath = path.parent / (path.stem + ".thumb" + path.suffix)
        if tpath.exists():
            path = tpath
    return FileResponse(path)


@router.post("/upload")
async def upload_notes(
    files: list[UploadFile] = File(...),
    title: str = Form(""),
    topic: str = Form(""),
    document: str = Form(""),
    entities: str = Form("[]"),
    tags: str = Form("[]"),
) -> dict:
    """Upload one note (one or more page photos) + metadata. Public for now."""
    if not files or len(files) > MAX_PAGES:
        raise HTTPException(status_code=400, detail=f"1–{MAX_PAGES} images per note")

    # Validate and buffer each file before touching disk.
    buffered = []
    for f in files:
        ext = Path(f.filename or "").suffix.lower() or ".jpg"
        if ext not in ALLOWED_EXT:
            raise HTTPException(status_code=400, detail=f"Unsupported type: {ext}")
        if f.content_type not in _ALLOWED_CONTENT:
            raise HTTPException(status_code=400, detail=f"Unsupported content type: {f.content_type}")
        data = await f.read()
        if not data:
            raise HTTPException(status_code=400, detail="Empty file")
        if len(data) > MAX_FILE_BYTES:
            raise HTTPException(status_code=400, detail="Image exceeds 30 MB")
        buffered.append((ext, data))

    clean_topic = (_SLUG_RE.sub("-", (topic or "misc").strip().lower()).strip("-") or "misc")[:40]

    try:
        parsed_entities = json.loads(entities)
        parsed_tags = json.loads(tags)
    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="entities/tags must be JSON arrays")
    if not isinstance(parsed_entities, list) or not isinstance(parsed_tags, list):
        raise HTTPException(status_code=400, detail="entities/tags must be JSON arrays")
    parsed_entities = [str(e).strip() for e in parsed_entities[:40] if str(e).strip()]
    parsed_tags = [str(t).strip().lower().replace(" ", "-") for t in parsed_tags[:40] if str(t).strip()]

    slug_base = _SLUG_RE.sub("-", ((title or "note").strip().lower()))[:40].strip("-") or "note"
    note_id = f"hn-{_today().replace('-', '')}-{slug_base}"
    # Avoid collisions if the same title arrives twice on one day.
    existing = _note_lookup()
    suffix = 2
    while note_id in existing:
        note_id = f"hn-{_today().replace('-', '')}-{slug_base}-{suffix}"
        suffix += 1

    ngroup = _note_dir(note_id)
    ngroup.mkdir(parents=True, exist_ok=True)

    pages = []
    for idx, (ext, data) in enumerate(buffered, start=1):
        fname = f"page-{idx}{ext}"
        (ngroup / fname).write_bytes(data)
        pages.append({"page": idx, "file": fname})

    note = {
        "id": note_id,
        "title": title.strip() or note_id,
        "topic": clean_topic,
        "document": document.strip(),
        "entities": parsed_entities,
        "tags": parsed_tags,
        "pages": pages,
        "ocr": "",
        "ocr_lang": "en",
        "annotations": [],
        "created": _today(),
        "updated": _today(),
        "created_at": _now_iso(),
        "author": "you",
        "draft": True,
    }

    staged = _staged_notes()
    staged.append(note)
    _write_staged(staged)
    logger.info(f"handwritten upload: {note_id} ({len(pages)} pages)")
    return _public_note(note)


@router.post("/transcribe")
async def transcribe_note(payload: dict) -> dict:
    """OCR a note via the read-only vision agent. Runs once per note."""
    note_id = payload.get("id")
    if not note_id:
        raise HTTPException(status_code=400, detail="id required")
    note = _note_lookup().get(note_id)
    if note is None:
        raise HTTPException(status_code=404, detail="Note not found")
    if note.get("ocr"):
        return {"id": note_id, "ocr": note["ocr"], "cached": True}

    lang = payload.get("lang") or note.get("ocr_lang") or "en"
    chunks = []
    try:
        for p in note.get("pages", []):
            path = _note_dir(note_id) / p["file"]
            if not path.exists():
                chunks.append(f"--- Page {p['page']}: image missing ---")
                continue
            text = await transcribe_image(str(path))
            if not text:
                raise RuntimeError(f"OCR failed for page {p['page']}")
            chunks.append(f"--- Page {p['page']} ---\n{text}")
    except OpencodeUnavailable as e:
        raise HTTPException(status_code=503, detail=f"OCR unavailable: {e}")
    except RuntimeError as e:
        raise HTTPException(status_code=502, detail=str(e))

    note["ocr"] = "\n\n".join(chunks)
    note["ocr_lang"] = lang
    note["updated"] = _today()
    note["updated_at"] = _now_iso()
    _persist_note(note)
    return {"id": note_id, "ocr": note["ocr"], "cached": False}


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
    note["updated_at"] = _now_iso()
    _persist_note(note)
    return {"id": note_id, "annotations": cleaned}


@router.post("/{note_id}/metadata")
async def save_metadata(note_id: str, payload: dict) -> dict:
    """Update title / document / entities / tags on a note."""
    note = _note_lookup().get(note_id)
    if note is None:
        raise HTTPException(status_code=404, detail="Note not found")
    if "title" in payload and payload["title"] is not None:
        note["title"] = str(payload["title"]).strip() or note["title"]
    if "document" in payload and payload["document"] is not None:
        note["document"] = str(payload["document"]).strip()
    if "entities" in payload and isinstance(payload["entities"], list):
        note["entities"] = [str(e).strip() for e in payload["entities"][:40] if str(e).strip()]
    if "tags" in payload and isinstance(payload["tags"], list):
        note["tags"] = [str(t).strip().lower().replace(" ", "-") for t in payload["tags"][:40] if str(t).strip()]
    note["updated"] = _today()
    note["updated_at"] = _now_iso()
    _persist_note(note)
    return _public_note(note)


def _persist_note(note: dict) -> None:
    """Write an edit back to wherever the note already lives.

    Committed notes update media/handwritten/manifest.json; drafts and
    new edits go to .staged.json (promoted by the reconcile script).
    """
    committed = _committed_notes()
    for i, n in enumerate(committed):
        if n["id"] == note["id"]:
            committed[i] = note
            _write_json(MANIFEST_FILE, committed)
            return
    staged = _staged_notes()
    for i, n in enumerate(staged):
        if n["id"] == note["id"]:
            staged[i] = note
            _write_staged(staged)
            return
    staged.append(note)
    _write_staged(staged)