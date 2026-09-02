"""FastAPI composition root.

Wires the app together and holds the HTTP middleware — no endpoint logic lives
here:
  - loads the graph and verifies opencode reachability (lifespan),
  - registers the three middleware gates (origin, auth, rate-limit) + CORS,
  - mounts the routers from api/routers/.

Layering: routers/ -> domain/ + gateways/. See api/routers/prompts.py for the
conversation endpoints, api/routers/notes.py and api/routers/flags.py for the
admin surface.
"""

import asyncio
import logging
import os
import time
from collections import defaultdict, deque
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from .config import ALLOWED_ORIGINS, LOCAL_ORIGIN_HINTS
from .domain.graph_ops import get_graph, warm_index
from .gateways.auth import authorize_request, close_client as close_auth_client
from .gateways.db import close_client as close_db_client
from .gateways.llm import OpencodeUnavailable, close_client, health as opencode_health
from .routers import flags, notes, prompts

logging.basicConfig(level=os.environ.get("LOG_LEVEL", "INFO"))
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Load the graph and verify the opencode server is reachable."""
    G = get_graph()
    logger.info(
        f"Graph loaded: {G.number_of_nodes()} nodes, {G.number_of_edges()} edges"
    )
    try:
        info = await opencode_health()
        logger.info(f"opencode server ready: v{info.get('version')}")
    except OpencodeUnavailable as e:
        logger.error(f"opencode server NOT reachable at startup: {e}")

    # Warm graph-global indexes (centrality metrics + entity matcher) off the
    # event loop. Until this finishes, the first analyze/query calls compute
    # inline (slower but correct) — see api/domain/graph_ops.warm_index().
    asyncio.create_task(asyncio.to_thread(warm_index))

    reaper = asyncio.create_task(prompts.reap_sessions())
    try:
        yield
    finally:
        reaper.cancel()
        async with prompts._session_lock:
            ids = list(prompts._sessions)
            prompts._sessions.clear()
        for sid in ids:
            await delete_session(sid)
        await close_client()
        await close_auth_client()
        await close_db_client()


app = FastAPI(
    title="Knowledge Graph Prompt API",
    version="2.0.0",
    lifespan=lifespan,
)


@app.middleware("http")
async def auth_gate(request: Request, call_next):
    """Require a verified super-admin Supabase token on mutating requests.

    Every non-GET /v1 path flows through this gate (reads are public static
    data; see api/gateways/auth.py::authorize_request).
    """
    denial = await authorize_request(request)
    if denial is not None:
        return denial
    return await call_next(request)


@app.middleware("http")
async def origin_gate(request: Request, call_next):
    """Reject requests that did not originate from an allowed UI origin.

    Local-development origins (localhost/127.0.0.1/file://) are always allowed.
    """
    if request.url.path == "/v1/health":
        return await call_next(request)

    def _local(header_value: str) -> bool:
        # Browsers send the literal string "null" (not "file://") as the Origin
        # header when a file:// page issues a fetch(). Treat it as a local
        # origin so opening web/index.html directly still works against the API.
        return header_value == "null" or header_value.startswith(LOCAL_ORIGIN_HINTS)

    origin = request.headers.get("origin")
    referer = request.headers.get("referer", "")

    if origin:
        if origin in ALLOWED_ORIGINS or _local(origin):
            return await call_next(request)
    elif referer.startswith("http") and (
        _local(referer) or any(referer.startswith(u) for u in ALLOWED_ORIGINS)
    ):
        return await call_next(request)

    logger.warning(f"Blocked request from origin={origin!r} referer={referer!r}")
    return JSONResponse(status_code=403, content={"detail": "Origin not allowed"})


# Registered LAST so it is the OUTERMOST middleware: add_middleware stacks each
# new layer outside the previous ones, and CORS must wrap every response —
# including 401/403 denials from the auth/origin gates above — or the browser
# misreports auth failures as opaque CORS errors.
app.add_middleware(
    CORSMiddleware,
    allow_origins=sorted(ALLOWED_ORIGINS) + ["null"],
    allow_origin_regex=r"^https?://(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$",
    allow_methods=["GET", "POST", "OPTIONS", "PATCH", "DELETE"],
    allow_headers=["*"],
)


# ---------------------------------------------------------------------------
# Rate limiting (defense-in-depth on the PUBLIC write endpoints)
# ---------------------------------------------------------------------------
# The mutating write routes require a super-admin token (see auth_gate); this
# per-IP limiter stays on as defense-in-depth. This is an in-process
# fixed-window limiter: correct for the single-worker deployment (see
# wiki-api.service). If the server is ever scaled to multiple workers, swap
# this state for a shared store (e.g. Redis) — the interface (keyed counters)
# stays the same.

_RATE_STATE: dict[str, deque] = defaultdict(deque)
_RATE_LOCK = asyncio.Lock()

# path -> (max requests, window seconds). More specific paths take precedence.
_RATE_LIMITS: dict[str, tuple[int, int]] = {
    "/v1/notes/upload": (8, 60),
    "/v1/notes/transcribe": (20, 60),
    "/v1/notes/": (60, 60),  # annotations / metadata edits
    "/v1/intent": (40, 60),
    "/v1/execute/stream": (40, 60),
    "/v1/session/reset": (40, 60),
    "/v1/flags": (60, 60),  # content flag toggles (admin panel)
}


def _client_ip(request: Request) -> str:
    """Best-effort client IP behind Cloudflare / a reverse proxy."""
    fwd = request.headers.get("x-forwarded-for")
    if fwd:
        return fwd.split(",")[0].strip()
    return request.client.host if request.client else "unknown"


def _limit_for(path: str) -> tuple[int, int] | None:
    if path in _RATE_LIMITS:
        return _RATE_LIMITS[path]
    for prefix in ("/v1/notes/",):
        if path.startswith(prefix):
            return _RATE_LIMITS[prefix]
    return None


@app.middleware("http")
async def rate_limit_middleware(request: Request, call_next):
    limit = _limit_for(request.url.path)
    if limit is None or request.method != "POST":
        return await call_next(request)

    key = f"{request.url.path}:{_client_ip(request)}"
    max_hits, window = limit
    now = time.monotonic()
    dq = _RATE_STATE[key]
    # Drop hits outside the window.
    while dq and dq[0] <= now - window:
        dq.popleft()
    # If everything expired, drop the key so the dict doesn't grow across many
    # distinct clients, then grab a fresh empty deque.
    if not dq:
        _RATE_STATE.pop(key, None)
        dq = _RATE_STATE[key]
    if len(dq) >= max_hits:
        retry = int(window - (now - dq[0])) if dq else window
        logger.warning(f"Rate limit hit for {key}")
        return JSONResponse(
            status_code=429,
            headers={"Retry-After": str(retry)},
            content={"detail": "Rate limit exceeded. Try again later."},
        )
    dq.append(now)
    return await call_next(request)


@app.exception_handler(Exception)
async def unhandled_exception_handler(request: Request, exc: Exception):
    """Convert unhandled server errors into clean JSON so the CORS middleware
    can attach headers and the browser sees a readable response instead of an
    opaque `Failed to fetch` / CORS-blocked failure."""
    logger.exception(
        "Unhandled error on %s %s", request.method, request.url.path
    )
    return JSONResponse(
        status_code=500,
        content={"detail": f"Internal server error ({exc.__class__.__name__})"},
    )


app.include_router(prompts.router)
app.include_router(notes.router)
app.include_router(flags.router)