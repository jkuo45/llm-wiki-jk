"""Per-user Assumptions Lab selections (/v1/assumptions).

The Assumptions Lab (web/public/pages/assumptions.js) curates conflict
stances (A/B/C options) over the triples graph. This router makes those
selections durable:

  - GET  /v1/assumptions            public: the CANONICAL selections — the
        rows owned by ASSUMPTIONS_CANONICAL_OWNER, i.e. exactly the state the
        canonical build materialized (60s cache, mirrors /v1/flags).
  - GET  /v1/assumptions/mine       signed-in: the caller's own selections.
  - PUT  /v1/assumptions/mine       signed-in: upsert one (scenario, conflict)
        stance. selected_key "base" resets (deletes) the row.
  - DELETE /v1/assumptions/mine/{scenario_id}/{conflict_id}   reset one row.

Server-side resolution is the trust boundary: the caller only ever sends the
option KEY; this router validates it against web/public/data/assumptions.json
and derives added_edges / removed_edges from the curated option edits itself.
The database therefore always stores the exact directional edges the user's
selection implies, never client-computed ones.

Like /v1/graphs and /v1/research this is a multi-user router (carved out of
the super-admin auth_gate): any signed-in user may write, and every query is
scoped explicitly by owner — the api/db.py doctrine (service role bypasses
RLS, so helpers must not hide the owner filter).
"""

import hashlib
import json
import logging
import os
from datetime import datetime, timezone
from pathlib import Path

from fastapi import APIRouter, HTTPException, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field

from .auth import get_user_id
from .db import DBError, DB_ENABLED, delete, select, upsert

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/v1/assumptions", tags=["assumptions"])

REGISTRY_PATH = Path(__file__).resolve().parent.parent / "web" / "public" / "data" / "assumptions.json"
MAX_ID_LEN = 120
BASE_KEY = "base"


class SelectionUpsert(BaseModel):
    scenario_id: str = Field(..., min_length=1, max_length=MAX_ID_LEN)
    conflict_id: str = Field(..., min_length=1, max_length=MAX_ID_LEN)
    selected_key: str = Field(..., min_length=1, max_length=40)


def _require_db() -> None:
    if not DB_ENABLED:
        raise HTTPException(status_code=503, detail="Database not configured")


def _canonical_owner() -> str:
    """The designated owner whose selections drive the canonical build."""
    return (os.environ.get("ASSUMPTIONS_CANONICAL_OWNER") or "").strip()


def _load_registry() -> tuple[dict, str]:
    """(parsed assumptions.json, content hash) — hash pins selections to the
    registry content they were resolved against (drift detection at sync)."""
    try:
        raw = REGISTRY_PATH.read_bytes()
        return json.loads(raw.decode("utf-8")), hashlib.sha256(raw).hexdigest()[:16]
    except FileNotFoundError as e:
        raise HTTPException(status_code=500, detail="assumptions.json missing") from e
    except json.JSONDecodeError as e:
        raise HTTPException(status_code=500, detail="assumptions.json invalid") from e


def resolve_option(doc: dict, scenario_id: str, conflict_id: str, key: str) -> dict:
    """Validate a (scenario, conflict, option key) triple against the curated
    registry and return the resolved directional edges.

    Raises HTTPException(400/404) with a specific detail when anything does
    not resolve — the DB only ever stores registry-consistent state.
    """
    scenario = next(
        (s for s in doc.get("scenarios", []) if s.get("id") == scenario_id), None
    )
    if scenario is None:
        raise HTTPException(status_code=404, detail=f"Unknown scenario {scenario_id!r}")
    conflict = next(
        (c for c in scenario.get("conflicts", []) if c.get("id") == conflict_id), None
    )
    if conflict is None:
        raise HTTPException(status_code=404, detail=f"Unknown conflict {conflict_id!r}")
    option = next(
        (o for o in conflict.get("options", []) if o.get("key") == key), None
    )
    if option is None:
        raise HTTPException(
            status_code=400, detail=f"Key {key!r} is not an option of {conflict_id!r}"
        )
    edits = option.get("edits") or {}
    return {
        "added_edges": [
            {
                "from": a["from"],
                "label": a.get("label", ""),
                "to": a["to"],
                "confidence_score": a.get("confidence_score"),
                "context": a.get("context", ""),
                "context_zh_TW": a.get("context_zh_TW", ""),
            }
            for a in edits.get("add", [])
        ],
        "removed_edges": [
            [k[0], k[1], k[2]] for k in edits.get("remove", []) if len(k) == 3
        ],
    }


def _row_payload(uid: str, body: SelectionUpsert, doc: dict, source_hash: str) -> dict:
    resolved = resolve_option(doc, body.scenario_id, body.conflict_id, body.selected_key)
    now = datetime.now(timezone.utc).isoformat(timespec="seconds")
    return {
        "owner": uid,
        "scenario_id": body.scenario_id,
        "conflict_id": body.conflict_id,
        "selected_key": body.selected_key,
        **resolved,
        "source_hash": source_hash,
        "updated_at": now,
    }


def _rows_to_map(rows: list[dict]) -> dict:
    """Serialize rows into the selections-map shape the sync script writes
    into assumptions.json: {scenario: {conflict: {key, addedEdges, ...}}}."""
    out: dict[str, dict[str, dict]] = {}
    updated = ""
    for r in rows:
        sel = {
            "key": r.get("selected_key"),
            "addedEdges": r.get("added_edges") or [],
            "removedEdges": r.get("removed_edges") or [],
            "updatedAt": r.get("updated_at") or "",
        }
        if r.get("source_hash"):
            sel["sourceHash"] = r["source_hash"]
        out.setdefault(r["scenario_id"], {})[r["conflict_id"]] = sel
        ts = r.get("updated_at") or ""
        if ts > updated:
            updated = ts
    return {"selections": out, "updated_at": updated}


@router.get("")
async def get_canonical_selections() -> dict:
    """Public canonical selections (the designated owner's rows) — exactly
    what the canonical graph build materialized.

    Feature-parked degradation: when the table is absent (SQL not applied) or
    the DB is unreachable, this returns an EMPTY canonical payload instead of
    an error — the Lab renders without badges and everything else works."""
    _require_db()
    owner = _canonical_owner()
    if not owner:
        return JSONResponse(
            content={"selections": {}, "updated_at": "", "canonical": False},
            headers={"Cache-Control": "public, max-age=60"},
        )
    try:
        rows = await select(
            "assumption_selections",
            columns="scenario_id,conflict_id,selected_key,added_edges,removed_edges,source_hash,updated_at",
            eq={"owner": owner},
        )
    except DBError as e:
        logger.warning(f"assumptions canonical select unavailable (feature parked?): {e}")
        return JSONResponse(
            content={"selections": {}, "updated_at": "", "canonical": False},
            headers={"Cache-Control": "public, max-age=60"},
        )
    return JSONResponse(
        content={**_rows_to_map(rows), "canonical": True},
        headers={"Cache-Control": "public, max-age=60"},
    )


@router.get("/mine")
async def get_my_selections(request: Request) -> dict:
    _require_db()
    uid = await get_user_id(request)
    if not uid:
        raise HTTPException(status_code=401, detail="Sign-in required")
    try:
        rows = await select(
            "assumption_selections",
            columns="scenario_id,conflict_id,selected_key,added_edges,removed_edges,source_hash,updated_at",
            eq={"owner": uid},
        )
    except DBError as e:
        logger.error(f"assumptions mine select failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e
    return _rows_to_map(rows)


@router.put("/mine")
async def put_my_selection(request: Request, body: SelectionUpsert) -> dict:
    """Upsert one conflict stance for the signed-in user. selected_key "base"
    resets (deletes) the row. Edges are resolved server-side from the curated
    registry — the client never supplies edge data."""
    _require_db()
    uid = await get_user_id(request)
    if not uid:
        raise HTTPException(status_code=401, detail="Sign-in required")
    doc, source_hash = _load_registry()

    if body.selected_key == BASE_KEY:
        try:
            await delete(
                "assumption_selections",
                eq={
                    "owner": uid,
                    "scenario_id": body.scenario_id,
                    "conflict_id": body.conflict_id,
                },
            )
        except DBError as e:
            logger.error(f"assumptions delete failed: {e}")
            raise HTTPException(status_code=500, detail="Database error") from e
        return {"deleted": True, "scenario_id": body.scenario_id, "conflict_id": body.conflict_id}

    row = _row_payload(uid, body, doc, source_hash)
    try:
        await upsert(
            "assumption_selections", [row], on_conflict="owner,scenario_id,conflict_id"
        )
    except DBError as e:
        logger.error(f"assumptions upsert failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e
    return {"saved": True, **{k: v for k, v in row.items() if k != "owner"}}


@router.delete("/mine/{scenario_id}/{conflict_id}")
async def delete_my_selection(request: Request, scenario_id: str, conflict_id: str) -> dict:
    _require_db()
    uid = await get_user_id(request)
    if not uid:
        raise HTTPException(status_code=401, detail="Sign-in required")
    try:
        await delete(
            "assumption_selections",
            eq={"owner": uid, "scenario_id": scenario_id, "conflict_id": conflict_id},
        )
    except DBError as e:
        logger.error(f"assumptions delete failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e
    return {"deleted": True, "scenario_id": scenario_id, "conflict_id": conflict_id}
