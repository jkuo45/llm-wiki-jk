"""Prompt endpoints (/v1) — the conversation surface of the API.

Owns:
  - the browser <-> opencode session registry + reaper
  - /v1/intent (phase-1 routing),
  - /v1/execute/stream (SSE: prompt streaming + graph ops)
  - /v1/session/reset and /v1/health

Pure entry point: sanitize input -> call a domain/gateway service -> shape
the SSE / JSON response. No env parsing (see api/config.py), no graph state
loaded here (see api/main.py lifespan).
"""

import asyncio
import json
import logging
import time
from collections.abc import AsyncGenerator, Awaitable, Callable

from fastapi import APIRouter, HTTPException, Request
from fastapi.concurrency import run_in_threadpool
from fastapi.responses import StreamingResponse
from pydantic import BaseModel, Field

from ..config import HEARTBEAT_SECONDS, MAX_SESSIONS, SESSION_SWEEP_SECONDS, SESSION_TTL_SECONDS
from ..domain.graph_ops import (
    get_combined_counts,
    get_graph,
    graph_analyze,
    graph_explain,
    graph_path,
    graph_query,
    match_nodes_in_text,
    warm_index,
)
from ..domain.sanitize import (
    sanitize_analysis,
    sanitize_input,
    sanitize_node_name,
    sanitize_tags,
    validate_intent,
)
from ..gateways.llm import (
    OpencodeUnavailable,
    abort_session,
    create_session,
    delete_session,
    detect_lang,
    health as opencode_health,
    parse_intent,
    stream_answer,
    translate_text,
    write_analysis_narrative,
)

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/v1")

# ---------------------------------------------------------------------------
# Session registry
# ---------------------------------------------------------------------------

_sessions: dict[str, float] = {}
_session_lock = asyncio.Lock()


async def reap_sessions() -> None:
    """Periodically drop opencode sessions that have gone idle. Runs for the
    lifetime of the app; cancelled by the composition-root lifespan."""
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


# ---------------------------------------------------------------------------
# Models
# ---------------------------------------------------------------------------


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


# ---------------------------------------------------------------------------
# Health
# ---------------------------------------------------------------------------


@router.get("/health")
async def health():
    """Health check for the adapter and the upstream opencode server.

    `nodes`/`edges` report the canonical combined (triples + wiki) dataset —
    the default UI graph in web/public/data/nodes.json + edges.json.
    """
    G = get_graph()
    combined = get_combined_counts()
    payload = {
        "status": "ok",
        "nodes": combined["nodes"] if combined["nodes"] is not None else G.number_of_nodes(),
        "edges": combined["edges"] if combined["edges"] is not None else G.number_of_edges(),
        "sessions": len(_sessions),
    }
    try:
        info = await opencode_health()
        payload["opencode"] = {"status": "ok", "version": info.get("version")}
    except OpencodeUnavailable as e:
        payload["status"] = "degraded"
        payload["opencode"] = {"status": "unreachable", "detail": str(e)[:200]}
    return payload


# ---------------------------------------------------------------------------
# Intent routing + streaming
# ---------------------------------------------------------------------------

GREETING_WORDS = {
    "hi", "hello", "hey", "yo", "sup", "greetings", "howdy", "hola",
    "嗨", "你好", "您好",
}


@router.post("/intent", response_model=IntentResponse)
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


@router.post("/session/reset")
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


@router.post("/execute/stream")
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