"""Supabase auth for the adapter.

The browser signs in with Supabase Auth (email/password, single super admin)
and sends the access token as `Authorization: Bearer <jwt>`. We verify the
token by asking Supabase (/auth/v1/user) — no JWT secret or extra dependency
needed — then check the caller's profile row for the super_admin role.

Set SUPABASE_URL + SUPABASE_ANON_KEY to enable; without them the API keeps
its historical open behaviour (handy for offline local dev).
"""

import hashlib
import logging
import os
import time

import httpx
from fastapi import Request
from fastapi.responses import JSONResponse

logger = logging.getLogger(__name__)

SUPABASE_URL = os.environ.get("SUPABASE_URL", "").rstrip("/")
SUPABASE_ANON_KEY = os.environ.get("SUPABASE_ANON_KEY", "")

# Explicit kill-switch: SUPABASE_URL enables auth by default, but the auth gate
# can be turned off without also losing the db.py features that share
# SUPABASE_URL (user-built graphs, flags). Set AUTH_DISABLED=1 to open the API.
AUTH_DISABLED = os.environ.get("AUTH_DISABLED", "").strip().lower() in ("1", "true", "yes")

AUTH_ENABLED = bool(SUPABASE_URL) and not AUTH_DISABLED

# Verified tokens are cached briefly so every keystroke of an SSE conversation
# does not cost two round-trips to Supabase. Tokens themselves expire in ~1h.
_CACHE_TTL = 300
_cache: dict[str, tuple[float, bool]] = {}

_client: httpx.AsyncClient | None = None


async def _get_client() -> httpx.AsyncClient:
    global _client
    if _client is None or _client.is_closed:
        _client = httpx.AsyncClient(timeout=10.0)
    return _client


async def close_client() -> None:
    global _client
    if _client is not None and not _client.is_closed:
        await _client.aclose()
    _client = None


def bearer_token(request: Request) -> str | None:
    header = request.headers.get("authorization", "")
    if header.lower().startswith("bearer "):
        token = header[7:].strip()
        return token or None
    return None


async def _check(token: str) -> bool:
    client = await _get_client()
    headers = {"apikey": SUPABASE_ANON_KEY, "Authorization": f"Bearer {token}"}
    try:
        user_resp = await client.get(f"{SUPABASE_URL}/auth/v1/user", headers=headers)
        if user_resp.status_code != 200:
            return False
        uid = user_resp.json().get("id")
        if not uid:
            return False
        prof = await client.get(
            f"{SUPABASE_URL}/rest/v1/profiles",
            params={"id": f"eq.{uid}", "select": "role"},
            headers=headers,
        )
        if prof.status_code != 200:
            return False
        rows = prof.json()
        return bool(rows) and rows[0].get("role") == "super_admin"
    except httpx.HTTPError as e:
        logger.warning(f"Supabase auth check failed: {e}")
        return False


async def is_super_admin(token: str) -> bool:
    key = hashlib.sha256(token.encode()).hexdigest()
    now = time.monotonic()
    cached = _cache.get(key)
    if cached and cached[0] > now:
        return cached[1]

    ok = await _check(token)
    _cache[key] = (now + _CACHE_TTL, ok)
    if len(_cache) > 128:
        stale = [k for k, v in _cache.items() if v[0] <= now]
        for k in stale:
            _cache.pop(k, None)
    return ok


_uid_cache: dict[str, tuple[float, str | None]] = {}


async def get_user_id(request: Request) -> str | None:
    """Verified Supabase user id for the request's bearer token, or None.

    Multi-user counterpart to is_super_admin: any signed-in user qualifies.
    Used by the flags router to attribute curation updates.
    """
    token = bearer_token(request)
    if not token:
        return None
    key = hashlib.sha256(token.encode()).hexdigest()
    now = time.monotonic()
    cached = _uid_cache.get(key)
    if cached and cached[0] > now:
        return cached[1]

    uid: str | None = None
    client = await _get_client()
    headers = {"apikey": SUPABASE_ANON_KEY, "Authorization": f"Bearer {token}"}
    try:
        user_resp = await client.get(f"{SUPABASE_URL}/auth/v1/user", headers=headers)
        if user_resp.status_code == 200:
            uid = user_resp.json().get("id") or None
    except httpx.HTTPError as e:
        logger.warning(f"Supabase user lookup failed: {e}")

    _uid_cache[key] = (now + _CACHE_TTL, uid)
    if len(_uid_cache) > 256:
        stale = [k for k, v in _uid_cache.items() if v[0] <= now]
        for k in stale:
            _uid_cache.pop(k, None)
    return uid


async def authorize_request(request: Request) -> JSONResponse | None:
    """Gate mutating requests behind a verified super-admin token.

    Returns an error JSONResponse to reject, or None to allow. GETs stay open
    (the graph UI's reads are public static data anyway); /v1/health likewise.
    """
    if not AUTH_ENABLED:
        return None
    if request.method not in {"POST", "PUT", "PATCH", "DELETE"}:
        return None
    if request.url.path == "/v1/health":
        return None

    token = bearer_token(request)
    if not token:
        return JSONResponse(status_code=401, content={"detail": "Sign-in required"})
    if not await is_super_admin(token):
        return JSONResponse(
            status_code=403, content={"detail": "Super admin access required"}
        )
    return None
