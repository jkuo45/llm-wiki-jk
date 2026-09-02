"""Notes panel support.

Serves + accepts photos of handwritten notes about papers. Two posting paths
feed one place:

  - committed curation  : src/images/manifest.json  (durable, ships with the wiki)
  - live uploads        : src/images/.staged.json   (browser uploads, served immediately)

The GET index merges both. Manifest entries may also carry a `path` field
pointing at an image that stays in place elsewhere in the repo (resolved
relative to src/images/, e.g. '../data/biology/<topic>/<file>'); such notes are
served from that location and their thumbnail lives in src/images/<id>/.

Writes are PUBLIC for now (auth lands later). Reads are public like the rest of
the site. OCR runs ONCE per note through the read-only wiki-util agent: the
endpoint short-circuits when a transcript already exists.

IMAGE SERVING IS GITHUB-FIRST. The web client (web/components/notes.js) builds
image URLs directly from the deterministic repo path src/images/<id>/<file>
(thumbnail <stem>.thumb.<ext>) hosted on raw.githubusercontent.com, so the
browser loads note images from GitHub's CDN rather than proxying bytes through
this server. This endpoint therefore acts only as a fallback for images not yet
committed/pushed to GitHub (staged drafts in .staged.json) or on cache lag. It
still serves every file locally so the client's onerror fallback always works.
"""

import asyncio
import json
import logging
import os
import re
import time
from datetime import datetime, timezone
from pathlib import Path

from fastapi import APIRouter, BackgroundTasks, File, Form, HTTPException, UploadFile
from fastapi.responses import FileResponse

from ..gateways.llm import OpencodeUnavailable, transcribe_image

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/v1/notes", tags=["notes"])

REPO_ROOT = Path(__file__).resolve().parent.parent
IMAGES_DIR = REPO_ROOT / "src" / "images"
MANIFEST_FILE = IMAGES_DIR / "manifest.json"
STAGED_FILE = IMAGES_DIR / ".staged.json"
NOTES_DIR = REPO_ROOT / "src" / "notes"

MAX_FILE_BYTES = 30 * 1024 * 1024  # 30 MB per image
MAX_PAGES = 24
ALLOWED_EXT = {".jpg", ".jpeg", ".png", ".webp", ".gif"}
_ALLOWED_CONTENT = {
    "image/jpeg", "image/png", "image/webp", "image/gif",
    "application/octet-stream", "",  # some browsers send opaque types
}

_SLUG_RE = re.compile(r"[^a-z0-9]+")

# Model refusals / vision-less responses must never be cached as a finished OCR
# transcript. The OCR prompt is instructed to return the exact sentinel
# OCR_FAILED when it cannot see the image; older refusals are caught here too.
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


# OCR locale aliases → canonical BCP-47 keys used in note.translations. English
# (en-US) is the default locale; Traditional Chinese is this wiki's second.
_LOCALE_ALIASES = {
    "en": "en-US",
    "en-us": "en-US",
    "en_us": "en-US",
    "zh": "zh-TW",
    "zh-tw": "zh-TW",
    "zh_tw": "zh-TW",
    "zh-hant": "zh-TW",
    "zh-hant-tw": "zh-TW",
    "zh-hk": "zh-TW",
    "zh-cn": "zh-CN",
    "zh-hans": "zh-CN",
}


class _UploadTooLarge(Exception):
    """Raised mid-stream when an uploaded image exceeds MAX_FILE_BYTES."""


def _locale_of(code: str) -> str:
    """Map a loose language code to a canonical translations key (en-US default)."""
    return _LOCALE_ALIASES.get((code or "").strip().lower(), "en-US")


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


_THUMB_SIZE = 400  # longest edge — plenty for the small gallery cards


def _make_thumbnail(page_path: Path, note: dict | None = None) -> None:
    """Downscale a page image into its thumbnail (best-effort).

    Pillow/JPEG robustness lets us generate a small thumbnail here, but we treat
    the import as optional so an upload never fails just because the deploy
    hasn't installed it yet — missing thumbs fall back to full-res (see
    get_image) and scripts/tools/thumbnail.py can backfill later.
    Keeping the source format means the served content-type stays correct."""
    try:
        from PIL import Image, ImageOps  # noqa: PLC0415 - deferred optional dep
    except ImportError:
        return
    try:
        with Image.open(page_path) as im:
            im = ImageOps.exif_transpose(im)
            im.thumbnail((_THUMB_SIZE, _THUMB_SIZE))
            tpath = _thumb_path(page_path, note)
            ext = page_path.suffix.lower()
            if ext in (".jpg", ".jpeg"):
                if im.mode in ("RGBA", "P", "LA"):
                    im = im.convert("RGB")
                im.save(tpath, format="JPEG", quality=74, optimize=True)
            elif ext == ".webp":
                im.save(tpath, format="WEBP", quality=74)
            elif ext == ".gif":
                im.convert("RGB").save(tpath, format="GIF", optimize=True)
            else:  # .png
                im.save(tpath, format="PNG", optimize=True)
    except Exception as exc:  # noqa: BLE001 - thumbnails are best-effort
        logger.warning("notes thumb generation failed for %s: %s", page_path.name, exc)


def _list_documents() -> list[dict]:
    """Index of paper/document notes in src/notes for the upload picker.

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


@router.post("/upload")
async def upload_notes(
    background_tasks: BackgroundTasks,
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

    # Validate type/content-type up front; the bytes are streamed to disk in
    # chunks below (no full-file buffering) so a 24×30 MB upload can't blow up
    # process memory.
    for f in files:
        ext = Path(f.filename or "").suffix.lower() or ".jpg"
        if ext not in ALLOWED_EXT:
            raise HTTPException(status_code=400, detail=f"Unsupported type: {ext}")
        if f.content_type not in _ALLOWED_CONTENT:
            raise HTTPException(status_code=400, detail=f"Unsupported content type: {f.content_type}")

    # Legacy topic field (empty when not provided) is folded into tags below;
    # no topic key is stored on notes anymore.
    clean_topic = (_SLUG_RE.sub("-", (topic or "").strip().lower()).strip("-") or "")[:40]

    try:
        parsed_entities = json.loads(entities)
        parsed_tags = json.loads(tags)
    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="entities/tags must be JSON arrays")
    if not isinstance(parsed_entities, list) or not isinstance(parsed_tags, list):
        raise HTTPException(status_code=400, detail="entities/tags must be JSON arrays")
    parsed_entities = [str(e).strip() for e in parsed_entities[:40] if str(e).strip()]
    parsed_tags = [str(t).strip().lower().replace(" ", "-") for t in parsed_tags[:40] if str(t).strip()]
    # Topic no longer exists on notes; fold the legacy topic field into the
    # tags list so categorization lives in tags/entities only.
    if clean_topic and clean_topic not in parsed_tags:
        parsed_tags.insert(0, clean_topic)

    slug_base = _SLUG_RE.sub("-", ((title or "note").strip().lower()))[:40].strip("-") or "note"
    note_id = f"n-{_today().replace('-', '')}-{slug_base}"
    # Avoid collisions if the same title arrives twice on one day.
    existing = _note_lookup()
    suffix = 2
    while note_id in existing:
        note_id = f"n-{_today().replace('-', '')}-{slug_base}-{suffix}"
        suffix += 1

    ngroup = _note_dir(note_id)
    pages = []
    try:
        ngroup.mkdir(parents=True, exist_ok=True)
        for idx, f in enumerate(files, start=1):
            ext = Path(f.filename or "").suffix.lower() or ".jpg"
            fname = f"page-{idx}{ext}"
            page_path = ngroup / fname
            # Stream to disk in 64 KB chunks; enforce the per-image cap as we go.
            total = 0
            with open(page_path, "wb") as out:
                while True:
                    chunk = await f.read(65536)
                    if not chunk:
                        break
                    total += len(chunk)
                    if total > MAX_FILE_BYTES:
                        raise _UploadTooLarge()
                    out.write(chunk)
            if total == 0:
                raise HTTPException(status_code=400, detail="Empty file")
            pages.append({"page": idx, "file": fname})
            # Thumbnails are best-effort and off the request path; the gallery
            # already falls back to full-res when a thumb is absent.
            background_tasks.add_task(_make_thumbnail, page_path)
    except _UploadTooLarge:
        import shutil

        shutil.rmtree(ngroup, ignore_errors=True)
        raise HTTPException(status_code=413, detail="Image exceeds 30 MB")
    except OSError as e:
        logger.exception("notes upload write failed for %s", note_id)
        import shutil

        shutil.rmtree(ngroup, ignore_errors=True)
        raise HTTPException(
            status_code=500,
            detail=(
                f"Could not save the note on the server ({e}). "
                "The API user needs write access to src/images "
                "(e.g. sudo chown -R wiki:wiki /srv/llm-wiki-jk/src/images)."
            ),
        )

    note = {
        "id": note_id,
        "document": document.strip(),
        "entities": parsed_entities,
        "tags": parsed_tags,
        "pages": pages,
        "translations": {
            "en-US": {
                "title": title.strip() or note_id,
                "ocr": "",
            }
        },
        "annotations": [],
        "created": _today(),
        "updated": _today(),
        "author": "you",
        "draft": True,
    }

    # Register under the lock so a concurrent upload/edit can't clobber the
    # staged manifest between our read and write.
    async with _staged_lock:
        staged = _staged_notes()
        staged.append(note)
        try:
            _write_staged(staged)
        except OSError as e:
            logger.exception("notes staged manifest write failed for %s", note_id)
            import shutil

            shutil.rmtree(ngroup, ignore_errors=True)
            raise HTTPException(
                status_code=500,
                detail=(
                    f"Could not register the note ({e}). "
                    "The API user needs write access to src/images "
                    "(e.g. sudo chown -R wiki:wiki /srv/llm-wiki-jk/src/images)."
                ),
            )
    logger.info(f"notes upload: {note_id} ({len(pages)} pages)")
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

    # Transcripts live in translations[<locale>]; en-US is the default and
    # legacy root `ocr` is a fallback for un-migrated/staged entries.
    lang = payload.get("lang") or "en"
    locale = _locale_of(lang)
    existing = (
        _tr(note, locale).get("ocr")
        or _tr(note, "en-US").get("ocr")
        or note.get("ocr")
        or ""
    )
    if existing and not _looks_like_ocr_failure(existing):
        return {"id": note_id, "ocr": existing, "cached": True}

    chunks = []
    # OCR each page concurrently (bounded so we don't open a session per page
    # all at once); a failed page aborts the whole note, matching the old
    # sequential behaviour.
    sem = asyncio.Semaphore(4)

    async def _ocr(p: dict) -> str:
        path = _note_dir(note_id) / p["file"]
        if not path.exists():
            return f"--- Page {p['page']}: image missing ---"
        async with sem:
            text = await transcribe_image(str(path))
        if not text or _looks_like_ocr_failure(text):
            raise RuntimeError(
                "The OCR agent could not read the image — the wiki-util "
                "model may not support vision. Switch to a vision-capable "
                "model and try again."
            )
        return f"--- Page {p['page']} ---\n{text}"

    try:
        results = await asyncio.gather(
            *(_ocr(p) for p in note.get("pages", [])), return_exceptions=True
        )
    except OpencodeUnavailable as e:  # pragma: no cover - swallowed by callee
        raise HTTPException(status_code=503, detail=f"OCR unavailable: {e}")
    failed = [r for r in results if isinstance(r, Exception)]
    if failed:
        raise HTTPException(status_code=502, detail=str(failed[0]))
    chunks = [r for r in results if isinstance(r, str)]

    transcript = "\n\n".join(chunks)
    note.setdefault("translations", {}).setdefault(locale, {})["ocr"] = transcript
    note["updated"] = _today()
    await _persist_note(note)
    return {"id": note_id, "ocr": transcript, "cached": False}


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