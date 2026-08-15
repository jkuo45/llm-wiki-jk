"""FastAPI adapter between the graph UI and a headless `opencode serve`.

Responsibilities:
  - translate the opencode event bus into the SSE contract graphify-out/components/chat.js
    already speaks ({type: reasoning|text|highlight|done|error})
  - run read-only networkx graph operations (query/explain/path/analyze)
  - map browser chat windows onto long-lived opencode sessions

The opencode server itself is never exposed publicly; it binds to loopback and
this process is the only client.
"""

import asyncio
import json
import logging
import os
import time
from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException, Request
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
)
from .llm import (
    OpencodeUnavailable,
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

# Idle chat sessions are reaped so a long-running server does not accumulate
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


app = FastAPI(
    title="Knowledge Graph Chat API",
    version="2.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=sorted(ALLOWED_ORIGINS),
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


@app.middleware("http")
async def origin_gate(request: Request, call_next):
    """Reject requests that did not originate from an allowed UI origin."""
    if request.url.path == "/health":
        return await call_next(request)

    origin = request.headers.get("origin")
    referer = request.headers.get("referer", "")

    if origin:
        if origin in ALLOWED_ORIGINS:
            return await call_next(request)
    elif referer.startswith("http") and any(
        referer.startswith(u) for u in ALLOWED_ORIGINS
    ):
        return await call_next(request)

    logger.warning(f"Blocked request from origin={origin!r} referer={referer!r}")
    return JSONResponse(status_code=403, content={"detail": "Origin not allowed"})


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=500)
    session_id: str | None = None
    # Client-side routing switch (the "Graphify" checkbox in the chat composer).
    # True  -> always attempt a graph op (query/explain/path/analyze)
    # False -> always answer from the wiki via chat, even if the text says "graphify"
    # None  -> legacy behaviour: sniff for an explicit "graphify <op>" phrase
    graphify: bool | None = None


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

    new_id = await create_session(title="graph-chat")
    async with _session_lock:
        _sessions[new_id] = time.monotonic()
    logger.info(f"Created session {new_id} (active={len(_sessions)})")
    return new_id


@app.get("/health")
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


@app.post("/intent", response_model=IntentResponse)
async def intent_endpoint(request: ChatRequest):
    """Phase 1: route the turn to a graph op or to wiki chat.

    The client's `graphify` switch is authoritative when present; otherwise we
    fall back to sniffing for an explicit "graphify <op>" phrase. Only the
    graph-op branch costs a classifier call — greetings and ordinary chat are
    resolved locally.
    """
    clean = sanitize_input(request.message)
    if not clean:
        raise HTTPException(status_code=400, detail="Invalid or empty input")

    logger.info(f"Question asked: {clean!r}")

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
        raw_intent = await parse_intent(clean)
        intent = validate_intent(raw_intent)
        lang = raw_intent.get("lang") or detect_lang(clean)
        logger.info(f"Graphify intent: {intent}, lang: {lang}")
        # A forced graphify turn that the classifier cannot map to an op falls
        # back to wiki chat instead of dead-ending on "I couldn't understand".
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
        logger.info("Graphify op unresolved; falling back to wiki chat")

    try:
        session_id = await _touch_session(request.session_id)
    except OpencodeUnavailable as e:
        logger.error(f"Cannot allocate session: {e}")
        raise HTTPException(status_code=503, detail="Chat service unavailable") from e

    return IntentResponse(
        intent="chat",
        lang=detect_lang(clean),
        message=clean,
        session_id=session_id,
    )


@app.post("/session/reset")
async def reset_session(request: ChatRequest):
    """Drop a chat session so the next turn starts with clean context."""
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
    gen: AsyncGenerator[str, None], interval: int = HEARTBEAT_SECONDS
) -> AsyncGenerator[str, None]:
    """Interleave SSE comment frames so proxies keep the connection open."""
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
    try:
        while True:
            try:
                item = await asyncio.wait_for(queue.get(), timeout=interval)
            except asyncio.TimeoutError:
                yield ": ping\n\n"
                continue
            if item is DONE:
                return
            yield item
    finally:
        task.cancel()


@app.post("/execute/stream")
async def execute_stream(request: ExecuteRequest):
    """SSE endpoint. Chat streams reasoning + text; graph ops emit one event."""
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

    ALLOWED_INTENTS = {"greeting", "chat", "query", "explain", "path", "analyze"}
    if request.intent not in ALLOWED_INTENTS:
        async def _unknown():
            yield _sse({"type": "text", "text": _unknown_result()["text"]})
            yield _sse({"type": "done", "elapsed": 0})

        return StreamingResponse(
            _unknown(), media_type="text/event-stream", headers=SSE_HEADERS
        )

    # Chat intent — stream reasoning + answer, then emit graph highlights.
    if request.intent == "chat" and request.message:
        try:
            session_id = await _touch_session(request.session_id)
        except OpencodeUnavailable as e:
            logger.error(f"Cannot allocate session: {e}")

            async def _down():
                yield _sse({"type": "error", "text": "Chat service unavailable."})

            return StreamingResponse(
                _down(), media_type="text/event-stream", headers=SSE_HEADERS
            )

        async def _chat():
            text_buf = ""
            done_seen = False
            async for chunk in stream_answer(request.message, session_id=session_id):
                if chunk.get("type") == "text":
                    text_buf += chunk.get("text", "")
                if chunk.get("type") == "done":
                    done_seen = True
                    # Highlights must land before the client stops listening.
                    if text_buf:
                        highlights = match_nodes_in_text(text_buf, request.message)
                        if highlights["highlight_nodes"]:
                            yield _sse({"type": "highlight", **highlights})
                yield _sse(chunk)
            if not done_seen and text_buf:
                highlights = match_nodes_in_text(text_buf, request.message)
                if highlights["highlight_nodes"]:
                    yield _sse({"type": "highlight", **highlights})

        return StreamingResponse(
            _with_heartbeat(_chat()),
            media_type="text/event-stream",
            headers=SSE_HEADERS,
        )

    # Graph ops — computed synchronously, emitted as a single cumulative event.
    if request.intent == "greeting":
        result = _greeting_result()
    elif request.intent == "query" and request.question:
        result = graph_query(request.question)
    elif request.intent == "explain" and request.node:
        result = graph_explain(request.node)
    elif request.intent == "path" and (
        (request.nodes and len(request.nodes) >= 2)
        or (request.from_node and request.to_node)
    ):
        waypoints = (
            request.nodes
            if request.nodes and len(request.nodes) >= 2
            else [request.from_node, request.to_node]
        )
        result = graph_path(waypoints)
    elif request.intent == "analyze" and request.nodes:
        result = graph_analyze(
            request.nodes, request.message or request.analysis or ""
        )
        # Layer an LLM narrative over the computed summary (best-effort).
        analysis_data = result.get("analysis_data")
        if analysis_data:
            try:
                narrative = await write_analysis_narrative(
                    analysis_data, request.analysis or ""
                )
                if narrative:
                    result = {**result, "text": narrative}
            except Exception as e:  # noqa: BLE001 - keep computed text on failure
                logger.error(f"analyze narrative failed: {e}")
    else:
        result = _unknown_result()

    if (
        request.lang
        and request.lang != "en"
        and request.intent in ("query", "explain", "path", "analyze")
    ):
        result["text"] = await translate_text(result["text"], request.message)

    logger.info(
        f"Reply nodes: intent={request.intent}, "
        f"highlight_nodes={len(result.get('highlight_nodes', []))}, "
        f"highlight_edges={len(result.get('highlight_edges', []))} edges"
    )

    async def _single():
        yield _sse(
            {
                "type": "text",
                "text": result["text"],
                "highlight_nodes": result.get("highlight_nodes", []),
                "highlight_edges": result.get("highlight_edges", []),
                "primary_node": result.get("primary_node"),
                "analysis_data": result.get("analysis_data"),
            }
        )
        yield _sse({"type": "done", "elapsed": 0})

    return StreamingResponse(
        _single(), media_type="text/event-stream", headers=SSE_HEADERS
    )
