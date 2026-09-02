"""Server-side PostgREST persistence for the content-flags router (/v1/flags).

Uses the service-role key over HTTPS (same dependency-free httpx pattern as
auth.py). Because the service role bypasses RLS, the single consumer (flags.py)
scopes rows explicitly where ownership matters.

Set SUPABASE_URL + SUPABASE_SERVICE_KEY to enable; without them /v1/flags
returns 503 (the rest of the API keeps working).
"""

import logging
import os
from typing import Any

import httpx

logger = logging.getLogger(__name__)

SUPABASE_URL = os.environ.get("SUPABASE_URL", "").rstrip("/")
# Accept both the project URL and a PostgREST URL (this module appends
# /rest/v1 itself).
if SUPABASE_URL.endswith("/rest/v1"):
    SUPABASE_URL = SUPABASE_URL[: -len("/rest/v1")]
SERVICE_KEY = os.environ.get("SUPABASE_SERVICE_KEY", "")

DB_ENABLED = bool(SUPABASE_URL and SERVICE_KEY)

_CLIENT: httpx.AsyncClient | None = None


async def get_client() -> httpx.AsyncClient:
    global _CLIENT
    if _CLIENT is None or _CLIENT.is_closed:
        _CLIENT = httpx.AsyncClient(
            base_url=f"{SUPABASE_URL}/rest/v1",
            headers={
                "apikey": SERVICE_KEY,
                "Authorization": f"Bearer {SERVICE_KEY}",
            },
            timeout=httpx.Timeout(connect=5.0, read=30.0, write=30.0, pool=10.0),
            limits=httpx.Limits(max_connections=20, max_keepalive_connections=10),
        )
    return _CLIENT


async def close_client() -> None:
    global _CLIENT
    if _CLIENT is not None and not _CLIENT.is_closed:
        await _CLIENT.aclose()
    _CLIENT = None


class DBError(RuntimeError):
    """PostgREST call failed (status >= 400 or transport error)."""


def _params(*, columns: str, eq: dict[str, Any] | None, order: str | None,
            limit: int | None, or_filter: str | None) -> dict[str, Any]:
    params: dict[str, Any] = {"select": columns}
    if eq:
        for k, v in eq.items():
            params[k] = f"eq.{v}"
    if or_filter:
        params["or"] = or_filter
    if order:
        params["order"] = order
    if limit is not None:
        params["limit"] = str(limit)
    return params


async def select(table: str, *, columns: str = "*", eq: dict[str, Any] | None = None,
                 order: str | None = None, limit: int | None = None,
                 or_filter: str | None = None) -> list[dict]:
    c = await get_client()
    r = await c.get(
        f"/{table}",
        params=_params(columns=columns, eq=eq, order=order, limit=limit,
                       or_filter=or_filter),
    )
    if r.status_code != 200:
        raise DBError(f"select {table}: {r.status_code} {r.text[:300]}")
    return r.json()


async def select_one(table: str, *, columns: str = "*",
                     eq: dict[str, Any] | None = None) -> dict | None:
    rows = await select(table, columns=columns, eq=eq, limit=1)
    return rows[0] if rows else None


async def insert(table: str, row: dict | list[dict]) -> list[dict]:
    """Insert and return the representation (row ids included)."""
    c = await get_client()
    r = await c.post(f"/{table}", json=row, headers={"Prefer": "return=representation"})
    if r.status_code not in (200, 201):
        raise DBError(f"insert {table}: {r.status_code} {r.text[:300]}")
    return r.json()


async def upsert(table: str, rows: dict | list[dict], on_conflict: str,
                 *, ignore_duplicates: bool = False) -> list[dict]:
    """Upsert by a unique constraint; returns the representation by default.

    With ignore_duplicates=True PostgREST returns only the newly inserted rows.
    """
    c = await get_client()
    prefer = "resolution=merge-duplicates,return=representation"
    if ignore_duplicates:
        prefer = "resolution=ignore-duplicates,return=representation"
    r = await c.post(
        f"/{table}",
        params={"on_conflict": on_conflict},
        json=rows,
        headers={"Prefer": prefer},
    )
    if r.status_code not in (200, 201):
        raise DBError(f"upsert {table}: {r.status_code} {r.text[:300]}")
    return r.json()


async def update(table: str, row: dict, eq: dict[str, Any]) -> list[dict]:
    c = await get_client()
    r = await c.patch(
        f"/{table}",
        params=_params(columns="*", eq=eq, order=None, limit=None, or_filter=None),
        json=row,
        headers={"Prefer": "return=representation"},
    )
    if r.status_code not in (200, 201):
        raise DBError(f"update {table}: {r.status_code} {r.text[:300]}")
    return r.json()


async def delete(table: str, eq: dict[str, Any]) -> int:
    c = await get_client()
    r = await c.delete(
        f"/{table}",
        params=_params(columns="*", eq=eq, order=None, limit=None, or_filter=None),
        headers={"Prefer": "return=representation"},
    )
    if r.status_code not in (200, 204):
        raise DBError(f"delete {table}: {r.status_code} {r.text[:300]}")
    return len(r.json()) if r.status_code == 200 else 0
