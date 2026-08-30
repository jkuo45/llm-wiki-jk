"""FastAPI adapter between the graph UI and a headless `opencode serve`.

Responsibilities:
  - translate the opencode event bus into the SSE contract web/components/prompt.js
    already speaks ({type: reasoning|text|highlight|done|error})
  - run read-only networkx graph operations (query/explain/path/analyze)
  - map browser Prompt-panel sessions onto long-lived opencode sessions

The opencode server itself is never exposed publicly; it binds to loopback and
this process is the only client.
"""

import asyncio
import json
import logging
import os
import time
from collections.abc import AsyncGenerator, Awaitable, Callable
from contextlib import asynccontextmanager

from fastapi import APIRouter, FastAPI, HTTPException, Request
from fastapi.concurrency import run_in_threadpool
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, StreamingResponse
from pydantic import BaseModel, Field

from .graph_ops import (
    get_graph,
    graph_analyze,
    graph_explain,
    graph_path,
    graph_query,
    match_nodes_in_text,
    warm_index,
)
from .notes import router as notes_router
from .graphs import router as graphs_router
from .research import router as research_router
from .flags import router as flags_router
from .auth import authorize_request, close_client as close_auth_client
from .db import close_client as close_db_client
from .llm import (
    OpencodeUnavailable,
    abort_session,
    close_client,
    create_session,
    delete_session,
    detect_lang,
    health as opencode_health,
    parse_intent,
    stream_answer,
    translate_text,
    write_analysis_narrative,
)
from .sanitize import (
    sanitize_analysis,
    sanitize_input,
    sanitize_node_name,
    sanitize_tags,
    validate_intent,
)

logging.basicConfig(level=os.environ.get("LOG_LEVEL", "INFO"))
logger = logging.getLogger(__name__)

ALLOWED_ORIGINS = {
    o.strip()
    for o in os.environ.get(
        "ALLOWED_ORIGINS",
        "https://www.johnnykuo.com,https://johnnykuo.com,https://graph.johnnykuo.com",
    ).split(",")
    if o.strip()
}

# Local development origins. Browsers cannot spoof these from the public web,
# so allowing them is safe and makes `file://` / localhost frontends work
# against the API without editing ALLOWED_ORIGINS.
LOCAL_ORIGIN_HINTS = (
    "http://localhost",
    "http://127.0.0.1",
    "http://[::1]",
    "file://",
)

# Idle prompt sessions are reaped so a long-running server does not accumulate
# opencode sessions from abandoned browser tabs.
SESSION_TTL_SECONDS = int(os.environ.get("SESSION_TTL_SECONDS", "3600"))
SESSION_SWEEP_SECONDS = 300
MAX_SESSIONS = int(os.environ.get("MAX_SESSIONS", "200"))

# SSE keepalive. Cloudflare drops idle proxied connections at ~100s.
HEARTBEAT_SECONDS = int(os.environ.get("HEARTBEAT_SECONDS", "15"))

_sessions: dict[str, float] = {}
_session_lock = asyncio.Lock()


async def _reap_sessions() -> None:
    """Periodically drop opencode sessions that have gone idle."""
    while True:
        await asyncio.sleep(SESSION_SWEEP_SECONDS)
        cutoff = time.monotonic() - SESSION_TTL_SECONDS
        async with _session_lock:
            stale = [sid for sid, seen in _sessions.items() if seen < cutoff]
            for sid in stale:
                _sessions.pop(sid, None)
        for sid in stale:
            await delete_session(sid)
        if stale:
            logger.info(f"Reaped {len(stale)} idle sessions")


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
    # inline (slower but correct) — see graph_ops.warm_index().
    asyncio.create_task(asyncio.to_thread(warm_index))

    reaper = asyncio.create_task(_reap_sessions())
    try:
        yield
    finally:
        reaper.cancel()
        async with _session_lock:
            ids = list(_sessions)
            _sessions.clear()
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

app.add_middleware(
    CORSMiddleware,
    allow_origins=sorted(ALLOWED_ORIGINS) + ["null"],
    allow_origin_regex=r"^https?://(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$",
    allow_methods=["GET", "POST", "OPTIONS", "PATCH", "DELETE"],
    allow_headers=["*"],
)

# All public endpoints live under the /v1 prefix.
api_v1 = APIRouter(prefix="/v1")


@app.middleware("http")
async def auth_gate(request: Request, call_next):
    """Require a verified super-admin Supabase token on mutating requests.

    /v1/graphs and /v1/research are carved out: they are multi-user routers
    that verify ANY signed-in user per request and scope rows by auth.uid
    (see api/auth.py::get_user_id). The historical super-admin gate still
    protects every other mutating path (notes, metadata, ...).
    """
    if request.url.path.startswith(("/v1/graphs", "/v1/research")):
        return await call_next(request)
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


# ---------------------------------------------------------------------------
# Rate limiting (defense-in-depth on the PUBLIC write endpoints)
# ---------------------------------------------------------------------------
# The notes write routes require a super-admin token (see auth_gate); this
# per-IP limiter stays on as defense-in-depth. This is an in-process
# fixed-window limiter: correct
# for the single-worker deployment (see wiki-api.service). If the server is ever
# scaled to multiple workers, swap this state for a shared store (e.g. Redis)
# — the interface (keyed counters) stays the same.
from collections import defaultdict, deque  # noqa: E402

_RATE_STATE: dict[str, deque] = defaultdict(deque)
_RATE_LOCK = asyncio.Lock()


def _client_ip(request: Request) -> str:
    """Best-effort client IP behind Cloudflare / a reverse proxy."""
    fwd = request.headers.get("x-forwarded-for")
    if fwd:
        return fwd.split(",")[0].strip()
    return request.client.host if request.client else "unknown"


# path -> (max requests, window seconds). More specific paths take precedence.
_RATE_LIMITS: dict[str, tuple[int, int]] = {
    "/v1/notes/upload": (8, 60),
    "/v1/notes/transcribe": (20, 60),
    "/v1/notes/": (60, 60),  # annotations / metadata edits
    "/v1/intent": (40, 60),
    "/v1/execute/stream": (40, 60),
    "/v1/session/reset": (40, 60),
    "/v1/research/topics": (10, 60),  # topic creation + search runs (LLM cost)
    "/v1/research/": (30, 60),  # listing / review actions
    "/v1/graphs/": (60, 60),  # user-graph CRUD + node/edge writes
    "/v1/flags": (60, 60),  # content flag toggles (admin panel)
}


def _limit_for(path: str) -> tuple[int, int] | None:
    if path in _RATE_LIMITS:
        return _RATE_LIMITS[path]
    for prefix in ("/v1/notes/", "/v1/research/", "/v1/graphs/"):
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


class PromptRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=4000)
    session_id: str | None = None
    # Client-side routing switch (the "Graphify" checkbox in the prompt composer).
    # True  -> always attempt a graph op (query/explain/path/analyze)
    # False -> always answer from the wiki via prompt, even if the text says "graphify"
    # None  -> legacy behaviour: sniff for an explicit "graphify <op>" phrase
    graphify: bool | None = None
    # @-tagged node names from the composer (explicit context for the turn).
    tags: list[str] | None = None


class IntentResponse(BaseModel):
    intent: str
    lang: str = "en"
    question: str | None = None
    node: str | None = None
    from_node: str | None = None
    to_node: str | None = None
    nodes: list[str] | None = None
    analysis: str | None = None
    message: str | None = None
    session_id: str | None = None


class ExecuteRequest(BaseModel):
    intent: str
    lang: str = "en"
    question: str | None = None
    node: str | None = None
    from_node: str | None = None
    to_node: str | None = None
    nodes: list[str] | None = None
    analysis: str | None = None
    message: str | None = None
    session_id: str | None = None
    # @-tagged node names from the composer (explicit context for the turn).
    tags: list[str] | None = None
    # Accepted for backwards compatibility; server-side sessions supersede it.
    history: list[dict] | None = None


async def _touch_session(session_id: str | None) -> str:
    """Return a live opencode session id, creating one when needed."""
    async with _session_lock:
        if session_id and session_id in _sessions:
            _sessions[session_id] = time.monotonic()
            return session_id
        if len(_sessions) >= MAX_SESSIONS:
            oldest = min(_sessions, key=_sessions.get)
            _sessions.pop(oldest, None)
            asyncio.create_task(delete_session(oldest))

    new_id = await create_session(title="graph-prompt")
    async with _session_lock:
        _sessions[new_id] = time.monotonic()
    logger.info(f"Created session {new_id} (active={len(_sessions)})")
    return new_id


@api_v1.get("/health")
async def health():
    """Health check for the adapter and the upstream opencode server."""
    G = get_graph()
    payload = {
        "status": "ok",
        "nodes": G.number_of_nodes(),
        "edges": G.number_of_edges(),
        "sessions": len(_sessions),
    }
    try:
        info = await opencode_health()
        payload["opencode"] = {"status": "ok", "version": info.get("version")}
    except OpencodeUnavailable as e:
        payload["status"] = "degraded"
        payload["opencode"] = {"status": "unreachable", "detail": str(e)[:200]}
    return payload


GREETING_WORDS = {
    "hi", "hello", "hey", "yo", "sup", "greetings", "howdy", "hola",
    "嗨", "你好", "您好",
}


@api_v1.post("/intent", response_model=IntentResponse)
async def intent_endpoint(request: PromptRequest):
    """Phase 1: route the turn to a graph op or to wiki prompt.

    The client's `graphify` switch is authoritative when present; otherwise we
    fall back to sniffing for an explicit "graphify <op>" phrase. Only the
    graph-op branch costs a classifier call — greetings and ordinary prompts are
    resolved locally.
    """
    clean = sanitize_input(request.message)
    if not clean:
        raise HTTPException(status_code=400, detail="Invalid or empty input")

    tags = sanitize_tags(request.tags)

    logger.info(f"Question asked: {clean!r} (tags={tags})")

    if clean.lower().strip().rstrip("!.?") in GREETING_WORDS:
        return IntentResponse(
            intent="greeting", lang=detect_lang(clean), session_id=request.session_id
        )

    lowered = clean.lower()
    keyword_op = "graphify" in lowered and any(
        op in lowered for op in ("explain", "path", "query", "analyze")
    )
    is_graphify_op = keyword_op if request.graphify is None else request.graphify

    if is_graphify_op:
        # Explicit @-tags are appended to the classifier prompt so the tagged
        # nodes bias intent parsing (e.g. "compare" + @NAD+ @SIRT1 -> analyze).
        classify_msg = clean
        if tags:
            classify_msg = f"{clean}\n\nReferenced nodes: {', '.join(tags)}"
        raw_intent = await parse_intent(classify_msg)
        intent = validate_intent(raw_intent)
        lang = raw_intent.get("lang") or detect_lang(clean)
        logger.info(f"Graphify intent: {intent}, lang: {lang}")
        # A forced graphify turn that the classifier cannot map to an op falls
        # back to wiki prompt instead of dead-ending on "I couldn't understand".
        if intent.get("intent") != "unknown" or request.graphify is None:
            return IntentResponse(
                intent=intent.get("intent", "unknown"),
                lang=lang,
                question=intent.get("question"),
                node=intent.get("node"),
                from_node=intent.get("from"),
                to_node=intent.get("to"),
                nodes=intent.get("nodes"),
                analysis=intent.get("analysis"),
                session_id=request.session_id,
            )
        logger.info("Graphify op unresolved; falling back to wiki prompt")

    try:
        session_id = await _touch_session(request.session_id)
    except OpencodeUnavailable as e:
        logger.error(f"Cannot allocate session: {e}")
        raise HTTPException(status_code=503, detail="Prompt service unavailable") from e

    return IntentResponse(
        intent="prompt",
        lang=detect_lang(clean),
        message=clean,
        session_id=session_id,
    )


@api_v1.post("/session/reset")
async def reset_session(request: PromptRequest):
    """Drop a prompt session so the next turn starts with clean context."""
    if request.session_id:
        async with _session_lock:
            existed = _sessions.pop(request.session_id, None) is not None
        if existed:
            await delete_session(request.session_id)
    return {"status": "ok"}


def _greeting_result() -> dict:
    return {
        "type": "greeting",
        "text": (
            "Hey! I'm your knowledge graph assistant. With **Graphify** on I run graph "
            "operations; switch it off to answer from the wiki instead.\n\n"
            '- **explain** — *"Explain SASP"* — deep dive on a single entity\n'
            '- **path** — *"How does Rapamycin relate to mTOR?"* — traces the direct relationship between two or more nodes\n'
            '- **analyze** — *"Compare the centrality of NAD+ and SIRT1"* — custom node analysis you can download\n'
            '- **query** — *"Key nodes in longevity research"* — open-ended, natural language questions\n\n'
            "Type a question to get started!"
        ),
        "highlight_nodes": [],
        "highlight_edges": [],
    }


def _unknown_result() -> dict:
    return {
        "type": "unknown",
        "text": (
            "I couldn't understand your question. Try one of:\n\n"
            '- **explain** — *"What is Autophagy?"* — deep dive on a single entity\n'
            '- **path** — *"How does Rapamycin relate to mTOR?"* — traces the direct relationship between two or more nodes\n'
            '- **analyze** — *"Compare the centrality of NAD+ and SIRT1"*\n'
            '- **query** — *"Key nodes in longevity research"* — open-ended, natural language questions\n\n'
            "Or switch **Graphify** off to answer from the wiki instead."
        ),
        "highlight_nodes": [],
        "highlight_edges": [],
    }


def _sse(payload: dict) -> str:
    return f"data: {json.dumps(payload)}\n\n"


SSE_HEADERS = {
    "Cache-Control": "no-cache, no-transform",
    "Connection": "keep-alive",
    "X-Accel-Buffering": "no",
}


async def _with_heartbeat(
    gen: AsyncGenerator[str, None],
    interval: int = HEARTBEAT_SECONDS,
    on_abort: Callable[[], Awaitable[None]] | None = None,
) -> AsyncGenerator[str, None]:
    """Interleave SSE comment frames so proxies keep the connection open.

    on_abort (optional) is awaited when the client disconnects before the
    stream finished — used to abort the in-flight opencode turn so the model
    stops generating (and burning tokens) for a listener that is gone.
    """
    queue: asyncio.Queue = asyncio.Queue()
    DONE = object()

    async def pump():
        try:
            async for item in gen:
                await queue.put(item)
        except Exception as e:  # noqa: BLE001 - surfaced to client below
            logger.error(f"stream generator failed: {e}")
            await queue.put(_sse({"type": "error", "text": "Stream error."}))
        finally:
            await queue.put(DONE)

    task = asyncio.create_task(pump())
    finished = False
    try:
        while True:
            try:
                item = await asyncio.wait_for(queue.get(), timeout=interval)
            except asyncio.TimeoutError:
                yield ": ping\n\n"
                continue
            if item is DONE:
                finished = True
                return
            yield item
    finally:
        task.cancel()
        if not finished and on_abort is not None:
            try:
                await on_abort()
            except Exception as e:  # noqa: BLE001 - best-effort teardown
                logger.warning(f"on_abort callback failed: {e}")


@api_v1.post("/execute/stream")
async def execute_stream(request: ExecuteRequest):
    """SSE endpoint. Prompt streams reasoning + text; graph ops emit one event."""
    if request.message:
        request.message = sanitize_input(request.message)
    if request.node:
        request.node = sanitize_node_name(request.node)
    if request.from_node:
        request.from_node = sanitize_node_name(request.from_node)
    if request.to_node:
        request.to_node = sanitize_node_name(request.to_node)
    if request.nodes:
        request.nodes = [
            n for n in (sanitize_node_name(x) for x in request.nodes[:8]) if n
        ]
    if request.analysis:
        request.analysis = sanitize_analysis(request.analysis)
    request.tags = sanitize_tags(request.tags)

    ALLOWED_INTENTS = {"greeting", "prompt", "query", "explain", "path", "analyze"}
    if request.intent not in ALLOWED_INTENTS:
        async def _unknown():
            yield _sse({"type": "text", "text": _unknown_result()["text"]})
            yield _sse({"type": "done", "elapsed": 0})

        return StreamingResponse(
            _unknown(), media_type="text/event-stream", headers=SSE_HEADERS
        )

    # Prompt intent — stream reasoning + answer, then emit graph highlights.
    if request.intent == "prompt" and request.message:
        try:
            session_id = await _touch_session(request.session_id)
        except OpencodeUnavailable as e:
            logger.error(f"Cannot allocate session: {e}")

            async def _down():
                yield _sse({"type": "error", "text": "Prompt service unavailable."})

            return StreamingResponse(
                _down(), media_type="text/event-stream", headers=SSE_HEADERS
            )

        async def _prompt():
            text_buf = ""
            done_seen = False
            # Explicit @-tagged nodes are pinned into the prompt as context so
            # the model grounds its answer on them.
            agent_message = request.message
            if request.tags:
                agent_message = (
                    f"Referenced graph nodes (pinned by the user): "
                    f"{', '.join(request.tags)}\n\nUser message:\n{request.message}"
                )
            async for chunk in stream_answer(agent_message, session_id=session_id):
                if chunk.get("type") == "text":
                    text_buf += chunk.get("text", "")
                if chunk.get("type") == "done":
                    done_seen = True
                    # Highlights must land before the client stops listening.
                    if text_buf:
                        highlights = await run_in_threadpool(
                            match_nodes_in_text, text_buf, request.message
                        )
                        if highlights["highlight_nodes"]:
                            yield _sse({"type": "highlight", **highlights})
                yield _sse(chunk)
            if not done_seen and text_buf:
                highlights = await run_in_threadpool(
                    match_nodes_in_text, text_buf, request.message
                )
                if highlights["highlight_nodes"]:
                    yield _sse({"type": "highlight", **highlights})

        return StreamingResponse(
            _with_heartbeat(
                _prompt(),
                on_abort=lambda: abort_session(session_id),
            ),
            media_type="text/event-stream",
            headers=SSE_HEADERS,
        )

    # Graph ops — CPU-bound networkx work. Offload to a thread so the single
    # worker event loop keeps streaming prompts / heartbeats / health checks.
    if request.intent == "greeting":
        result = _greeting_result()
    elif request.intent == "query" and request.question:
        result = await run_in_threadpool(graph_query, request.question)
    elif request.intent == "explain" and request.node:
        result = await run_in_threadpool(graph_explain, request.node)
    elif request.intent == "path" and (
        (request.nodes and len(request.nodes) >= 2)
        or (request.from_node and request.to_node)
    ):
        waypoints = (
            request.nodes
            if request.nodes and len(request.nodes) >= 2
            else [request.from_node, request.to_node]
        )
        result = await run_in_threadpool(graph_path, waypoints)
    elif request.intent == "analyze" and request.nodes:
        result = await run_in_threadpool(
            graph_analyze, request.nodes, request.message or request.analysis or ""
        )
    else:
        result = _unknown_result()

    logger.info(
        f"Reply nodes: intent={request.intent}, "
        f"highlight_nodes={len(result.get('highlight_nodes', []))}, "
        f"highlight_edges={len(result.get('highlight_edges', []))} edges"
    )

    async def _single():
        # Narrative + translation run INSIDE the stream so _with_heartbeat keeps
        # the proxy alive across these (up to ~210s of) network waits; the client
        # receives the single cumulative text event only once they finish.
        final = result
        if request.intent == "analyze" and (analysis_data := result.get("analysis_data")):
            try:
                narrative = await write_analysis_narrative(
                    analysis_data, request.analysis or ""
                )
                if narrative:
                    final = {**result, "text": narrative}
            except Exception as e:  # noqa: BLE001 - keep computed text on failure
                logger.error(f"analyze narrative failed: {e}")

        text = final["text"]
        if (
            request.lang
            and request.lang != "en"
            and request.intent in ("query", "explain", "path", "analyze")
        ):
            try:
                text = await translate_text(text, request.message)
            except Exception as e:  # noqa: BLE001 - keep untranslated text on failure
                logger.error(f"analyze translation failed: {e}")

        yield _sse(
            {
                "type": "text",
                "text": text,
                "highlight_nodes": final.get("highlight_nodes", []),
                "highlight_edges": final.get("highlight_edges", []),
                "primary_node": final.get("primary_node"),
                "analysis_data": final.get("analysis_data"),
            }
        )
        yield _sse({"type": "done", "elapsed": 0})

    # Heartbeat the single-event graph-op response too: the analyze path can
    # sit idle for the LLM narrative (120s) + translation (90s) before the
    # first byte, which exceeds Cloudflare's ~100s idle-drop window.
    return StreamingResponse(
        _with_heartbeat(_single()), media_type="text/event-stream", headers=SSE_HEADERS
    )


app.include_router(api_v1)
app.include_router(notes_router)
app.include_router(graphs_router)
app.include_router(research_router)
app.include_router(flags_router)
