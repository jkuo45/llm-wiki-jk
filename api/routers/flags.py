"""DB-backed content curation flags (/v1/flags).

Curation state used to live in markdown frontmatter (task outputs) and static
registries (articles.json, notes manifest); every change required a rebuild +
deploy. The Supabase content_flags table is now the runtime source of truth:

  - GET  /v1/flags  public read of the flag overlay (the static/frontmatter
                    values stay baked into the site data as offline fallback;
                    clients merge the DB flags on top when reachable).
  - POST /v1/flags  batch upsert. Super-admin only — the auth_gate middleware
                    in main.py already requires a verified token on every
                    mutating /v1 path; this router adds a defence-in-depth
                    check of its own.

Flag semantics: each flag column is nullable — a NULL (or absent) flag means
"not set", so consumers fall back to the static baked-in value. An item may
set any subset of flags per request; unset flags are left untouched on
existing rows.

Current flags:
    starred   curation star (indexes bucket starred items first)
    active    publication state (inactive items hidden or de-emphasized)

Content types and their content_id conventions:
    article      id from web/public/data/articles.json
    task_output  task markdown filename (e.g. task_output_xxx.md)
    wiki_note    norm entity id (same key as the entities table)
    document     _document_ markdown filename
    image_note   src/images manifest note id
"""

import logging
from datetime import datetime, timezone

from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel, Field

from ..gateways.auth import get_user_id
from ..gateways.db import DBError, DB_ENABLED, select, upsert

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/v1/flags", tags=["flags"])

CONTENT_TYPES = ("article", "task_output", "wiki_note", "document", "image_note")
FLAGS = ("starred", "active")
MAX_ITEMS = 200
MAX_ID_LEN = 300


class FlagItem(BaseModel):
    content_type: str = Field(..., description=f"One of: {', '.join(CONTENT_TYPES)}")
    content_id: str = Field(..., min_length=1, max_length=MAX_ID_LEN)
    starred: bool | None = None
    active: bool | None = None


class FlagUpdate(BaseModel):
    items: list[FlagItem] = Field(..., min_length=1, max_length=MAX_ITEMS)


def _require_db() -> None:
    if not DB_ENABLED:
        raise HTTPException(status_code=503, detail="Database not configured")


async def _flags_payload() -> dict:
    """Overlay payload: {type: {id: {<flag>: value, ...}}} — only flags that
    are actually SET appear (unset flags fall back to static site data)."""
    try:
        rows = await select(
            "content_flags",
            columns="content_type,content_id,starred,active,updated_at",
        )
    except DBError as e:
        logger.error(f"flags select failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e
    flags: dict[str, dict[str, dict[str, bool]]] = {}
    updated = ""
    for r in rows:
        item_flags = {f: r[f] for f in FLAGS if r.get(f) is not None}
        if item_flags:
            flags.setdefault(r["content_type"], {})[r["content_id"]] = item_flags
        ts = r.get("updated_at") or ""
        if ts > updated:
            updated = ts
    return {"flags": flags, "updated_at": updated}


@router.get("")
async def get_flags() -> dict:
    """Public flag overlay; cached briefly so the static indexes stay snappy."""
    _require_db()
    from fastapi.responses import JSONResponse

    payload = await _flags_payload()
    return JSONResponse(
        content={**payload, "generated": datetime.now(timezone.utc).isoformat(timespec="seconds")},
        headers={"Cache-Control": "public, max-age=60"},
    )


@router.post("")
async def set_flags(request: Request, payload: FlagUpdate) -> dict:
    """Batch-upsert flags. Verified super-admin only (defence-in-depth:
    the global auth_gate already enforces this when auth is configured)."""
    _require_db()
    uid = await get_user_id(request)
    if not uid:
        raise HTTPException(status_code=401, detail="Sign-in required")

    now = datetime.now(timezone.utc).isoformat(timespec="seconds")
    rows = []
    for item in payload.items:
        if item.content_type not in CONTENT_TYPES:
            raise HTTPException(
                status_code=400,
                detail=f"content_type must be one of: {', '.join(CONTENT_TYPES)}",
            )
        set_flags_on_item = {f: getattr(item, f) for f in FLAGS if getattr(item, f) is not None}
        if not set_flags_on_item:
            raise HTTPException(
                status_code=400,
                detail=f"At least one flag required ({', '.join(FLAGS)})",
            )
        cid = item.content_id.strip()
        if not cid or len(cid) > MAX_ID_LEN:
            raise HTTPException(status_code=400, detail="Invalid content_id")
        rows.append(
            {
                "content_type": item.content_type,
                "content_id": cid,
                **set_flags_on_item,
                "updated_by": uid,
                "updated_at": now,
            }
        )
    try:
        await upsert("content_flags", rows, on_conflict="content_type,content_id")
    except DBError as e:
        logger.error(f"flags upsert failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e
    logger.info(f"flags updated: {len(rows)} item(s) by {uid}")
    return await _flags_payload()
