"""Client for a long-lived `opencode serve` instance.

Replaces the previous `opencode run` subprocess-per-request design. All model
work goes over HTTP to a headless opencode server bound to loopback.

Event contract (verified against opencode 2.1.1 — the v2 server API moved
every route under /api and replaced the v1 message bus):
  GET  /api/info                       server info (version, pid)
  POST /api/session                    -> {data: {id, ...}}
  POST /api/session/:id/agent          -> 204, picks the agent for the turn
  POST /api/session/:id/prompt         -> {data: {...}}, the turn runs async
  POST /api/session/:id/interrupt      -> aborts the running turn
  DELETE /api/session/:id              -> drops the session
  GET  /api/session/:id/message        -> {data: [messages]}

Bus events consumed here (payload lives under `data`, not `properties`):
  session.text.delta       {assistantMessageID, ordinal, delta}
  session.text.ended       {assistantMessageID, ordinal, text}  final snapshot
  session.reasoning.delta  {assistantMessageID, ordinal, delta}
  session.execution.succeeded | .failed | .interrupted   turn lifecycle
"""

import asyncio
import json
import logging
import os
import re
import time
from collections.abc import AsyncGenerator

import httpx

logger = logging.getLogger(__name__)

OPENCODE_URL = os.environ.get("OPENCODE_URL", "http://127.0.0.1:4096")
OPENCODE_USERNAME = os.environ.get("OPENCODE_SERVER_USERNAME", "opencode")
OPENCODE_PASSWORD = os.environ.get("OPENCODE_SERVER_PASSWORD", "")
PROMPT_AGENT = os.environ.get("OPENCODE_PROMPT_AGENT", "wiki-prompt")
UTILITY_AGENT = os.environ.get("OPENCODE_UTILITY_AGENT", "wiki-util")

_AUTH = (OPENCODE_USERNAME, OPENCODE_PASSWORD) if OPENCODE_PASSWORD else None


# A single shared client keeps one connection pool to opencode so every
# health/parse/translate/OCR turn reuses TCP+keepalive instead of opening a new
# pool per call (the old `async with _client()` design churned 5+ sockets per
# typical turn). The client is never used as a context manager here, so it is
# not closed between calls; close_client() tears it down on app shutdown.
_CLIENT: httpx.AsyncClient | None = None


def _client(timeout: float | None = 30.0) -> httpx.AsyncClient:
    global _CLIENT
    if _CLIENT is None:
        _CLIENT = httpx.AsyncClient(
            base_url=OPENCODE_URL,
            auth=_AUTH,
            timeout=httpx.Timeout(connect=5.0, read=30.0, write=30.0, pool=10.0),
            limits=httpx.Limits(
                max_connections=20, max_keepalive_connections=10
            ),
        )
    return _CLIENT


async def close_client() -> None:
    """Close the shared opencode client (called from the app lifespan)."""
    global _CLIENT
    if _CLIENT is not None:
        await _CLIENT.aclose()
        _CLIENT = None


# ----------------------------------------------------------------------------
# Language detection
# ----------------------------------------------------------------------------


_CJK_RE = re.compile(r"[\u4e00-\u9fff\u3400-\u4dbf]")
_KANA_RE = re.compile(r"[\u3040-\u30ff]")
_HANGUL_RE = re.compile(r"[\uac00-\ud7af]")
_CYRILLIC_RE = re.compile(r"[\u0400-\u04ff]")
_SIMPLIFIED_HINT_RE = re.compile(r"[国说这么会来对时长发过还给样应关点]")


def detect_lang(text: str) -> str:
    """Cheap script-based language detection. No model call."""
    if _KANA_RE.search(text):
        return "ja"
    if _HANGUL_RE.search(text):
        return "ko"
    if _CJK_RE.search(text):
        return "zh-CN" if _SIMPLIFIED_HINT_RE.search(text) else "zh-TW"
    if _CYRILLIC_RE.search(text):
        return "ru"
    return "en"


class OpencodeUnavailable(RuntimeError):
    """Raised when the opencode server cannot be reached."""


# ----------------------------------------------------------------------------
# Health / sessions
# ----------------------------------------------------------------------------


async def health() -> dict:
    """Return opencode server health, or raise OpencodeUnavailable."""
    try:
        c = _client()
        r = await c.get("/api/info", timeout=5.0)
        r.raise_for_status()
        return r.json()
    except Exception as e:
        raise OpencodeUnavailable(str(e)) from e


async def create_session(title: str = "graph-prompt") -> str:
    """Create an opencode session and return its id."""
    try:
        c = _client()
        r = await c.post("/api/session", json={"title": title}, timeout=30.0)
        r.raise_for_status()
        return r.json()["data"]["id"]
    except Exception as e:
        raise OpencodeUnavailable(f"create_session failed: {e}") from e


async def delete_session(session_id: str) -> None:
    """Best-effort session teardown."""
    try:
        c = _client()
        await c.delete(f"/api/session/{session_id}", timeout=10.0)
    except Exception as e:
        logger.warning(f"delete_session({session_id}) failed: {e}")


async def abort_session(session_id: str) -> None:
    """Best-effort abort of an in-flight turn."""
    try:
        c = _client()
        await c.post(f"/api/session/{session_id}/interrupt", timeout=10.0)
    except Exception as e:
        logger.warning(f"abort_session({session_id}) failed: {e}")


# ----------------------------------------------------------------------------
# One turn on the v2 event bus
# ----------------------------------------------------------------------------


async def _turn(
    session_id: str,
    text: str,
    agent: str,
    timeout: float,
) -> AsyncGenerator[dict, None]:
    """Run one prompt turn and yield its output as it arrives.

    Yields dicts with keys:
      - kind: "text" | "reasoning" | "done" | "error"
      - text: the chunk (text/reasoning) or the message (error)

    The v2 bus is global and carries every session's events, so each event is
    filtered by session id. Two v2 quirks are handled here:

      1. There is no per-prompt agent field — the session's agent decides how
         the turn runs, so it is selected before the prompt lands.
      2. `session.text.ended` carries the full text of a stream, so any suffix
         the deltas missed is flushed when it arrives.
    """
    start = time.monotonic()
    c = _client()
    # (kind, assistant message id, ordinal) -> text already relayed for that
    # stream. Text and reasoning are tracked separately: they are different
    # streams even when they share an ordinal.
    sent: dict[tuple[str, str, int], str] = {}

    try:
        async with c.stream(
            "GET",
            "/api/event",
            timeout=httpx.Timeout(connect=5.0, read=None, write=30.0, pool=10.0),
        ) as events:
            if events.status_code != 200:
                yield {"kind": "error", "text": "Prompt service unavailable."}
                return

            sel = await c.post(
                f"/api/session/{session_id}/agent",
                json={"agent": agent},
                timeout=15.0,
            )
            if sel.status_code >= 400:
                logger.error(
                    f"agent select failed: {sel.status_code} {sel.text[:200]}"
                )
                yield {"kind": "error", "text": "Prompt service unavailable."}
                return

            post = await c.post(
                f"/api/session/{session_id}/prompt",
                json={"text": text},
                timeout=30.0,
            )
            if post.status_code >= 400:
                logger.error(f"prompt failed: {post.status_code} {post.text[:200]}")
                yield {"kind": "error", "text": "Prompt service unavailable."}
                return

            lines = events.aiter_lines()
            while True:
                remaining = timeout - (time.monotonic() - start)
                if remaining <= 0:
                    await abort_session(session_id)
                    yield {"kind": "error", "text": "Request timed out."}
                    return

                try:
                    line = await asyncio.wait_for(
                        lines.__anext__(), timeout=remaining
                    )
                except StopAsyncIteration:
                    break
                except asyncio.TimeoutError:
                    await abort_session(session_id)
                    yield {"kind": "error", "text": "Request timed out."}
                    return

                if not line.startswith("data:"):
                    continue
                try:
                    event = json.loads(line[5:].lstrip())
                except json.JSONDecodeError:
                    continue

                etype = event.get("type", "")
                props = event.get("data") or {}

                # The bus is global; ignore other sessions.
                evt_session = props.get("sessionID")
                if evt_session is not None and evt_session != session_id:
                    continue

                if etype in ("session.text.delta", "session.reasoning.delta"):
                    chunk = props.get("delta") or ""
                    if not chunk:
                        continue
                    kind = "text" if etype == "session.text.delta" else "reasoning"
                    key = (
                        kind,
                        props.get("assistantMessageID", ""),
                        props.get("ordinal", 0),
                    )
                    sent[key] = sent.get(key, "") + chunk
                    yield {"kind": kind, "text": chunk}

                elif etype in ("session.text.ended", "session.reasoning.ended"):
                    kind = "text" if etype == "session.text.ended" else "reasoning"
                    key = (
                        kind,
                        props.get("assistantMessageID", ""),
                        props.get("ordinal", 0),
                    )
                    full = props.get("text") or ""
                    have = sent.get(key, "")
                    if len(full) > len(have):
                        sent[key] = full
                        yield {"kind": kind, "text": full[len(have):]}

                elif etype == "session.execution.succeeded":
                    yield {"kind": "done"}
                    return

                elif etype == "session.execution.failed":
                    logger.error(f"execution failed: {props.get('error')}")
                    yield {
                        "kind": "error",
                        "text": "Sorry, I couldn't process that request.",
                    }
                    return

                elif etype == "session.execution.interrupted":
                    yield {
                        "kind": "error",
                        "text": "Sorry, I couldn't process that request.",
                    }
                    return

    except httpx.ConnectError as e:
        logger.error(f"opencode server unreachable: {e}")
        yield {"kind": "error", "text": "Prompt service unavailable."}
        return
    except Exception as e:
        logger.error(f"turn error: {e}")
        yield {"kind": "error", "text": "Sorry, I couldn't process that request."}
        return

    # The bus closed without a terminal event — treat the turn as finished so
    # the caller is not left hanging.
    yield {"kind": "done"}


# ----------------------------------------------------------------------------
# Synchronous prompt (intent parsing, translation)
# ----------------------------------------------------------------------------


async def _prompt_sync(
    session_id: str, text: str, timeout: float = 60.0, agent: str = UTILITY_AGENT
) -> str:
    """Send a prompt and wait for the full reply. Returns concatenated text."""
    out: list[str] = []
    async for event in _turn(session_id, text, agent, timeout):
        kind = event.get("kind")
        if kind == "text":
            out.append(event.get("text", ""))
        elif kind == "error":
            raise RuntimeError(event.get("text", "prompt failed"))
    return "".join(out).strip()


# ----------------------------------------------------------------------------
# Streaming prompt
# ----------------------------------------------------------------------------


async def stream_answer(
    message: str,
    session_id: str,
    timeout: float = 240.0,
    agent: str = PROMPT_AGENT,
) -> AsyncGenerator[dict, None]:
    """Stream a turn as SSE-compatible dicts.

    Yields dicts with keys:
      - type: "reasoning" | "text" | "done" | "error"
      - text: incremental chunk (reasoning/text)
      - elapsed: seconds since start (done)

    Text is emitted as deltas so the browser can append directly.
    """
    start = time.monotonic()
    try:
        async for event in _turn(session_id, message, agent, timeout):
            kind = event.get("kind")
            if kind in ("text", "reasoning"):
                yield {"type": kind, "text": event.get("text", "")}
            elif kind == "error":
                yield {"type": "error", "text": event.get("text", "")}
                return
            elif kind == "done":
                yield {
                    "type": "done",
                    "elapsed": round(time.monotonic() - start, 1),
                }
                return
    except Exception as e:  # noqa: BLE001 - never break the SSE stream
        logger.error(f"stream_answer error: {e}")
        yield {"type": "error", "text": "Sorry, I couldn't process that request."}


# ----------------------------------------------------------------------------
# Intent parsing
# ----------------------------------------------------------------------------

INTENT_PROMPT = """You are an intent classifier for a biomedical knowledge graph assistant.

Given the user's message, classify it into EXACTLY ONE of these intents and respond with ONLY a JSON object (no markdown, no explanation).

1. query - user asks an OPEN-ENDED, natural language question about the graph / knowledge base (e.g. "what are the key nodes in longevity research?").
    Response: {"intent": "query", "question": "<the question>"}

2. explain - user wants a deep dive on a SINGLE entity / concept / node.
    Response: {"intent": "explain", "node": "<node name>"}

3. path - user wants the DIRECT relationship traced between TWO OR MORE nodes (the shortest/absolute path connecting them), optionally naming intermediate waypoints ("through", "via", "->", "then").
    Response: {"intent": "path", "nodes": ["<node A>", "<node B>", "<node C>"]}
    For a simple two-node case you may instead use {"intent": "path", "from": "<node A>", "to": "<node B>"}.

4. analyze - user wants a custom analysis or comparison of specific node(s):
    centrality, degree, common neighbours, bridging nodes, neighbourhood overlap,
    pairwise paths, or a node's structural role in the graph. The analysis may be
    comparative (two or more nodes) or about a single node.
    Response: {"intent": "analyze", "nodes": ["<node A>", "<node B>"], "analysis": "<short phrase describing what to compute>"}

5. unknown - cannot classify
    Response: {"intent": "unknown"}

Examples:
- "What is autophagy?" -> {"intent": "explain", "node": "Autophagy"}
- "自噬是什麼？" -> {"intent": "explain", "node": "Autophagy"}
- "How does rapamycin relate to mTOR?" -> {"intent": "path", "from": "Rapamycin", "to": "mTOR"}
- "雷帕霉素和mTOR有什么关系？" -> {"intent": "path", "from": "Rapamycin", "to": "mTOR"}
- "Path from NAD+ via SIRT1 to Mitophagy" -> {"intent": "path", "nodes": ["NAD+", "SIRT1", "Mitophagy"]}
- "從 CD38 經 NAD+ 追蹤到 SIRT1" -> {"intent": "path", "nodes": ["CD38", "NAD+", "SIRT1"]}
- "Compare the centrality and common neighbours of NAD+ and SIRT1" -> {"intent": "analyze", "nodes": ["NAD+", "SIRT1"], "analysis": "centrality and common neighbours"}
- "分析 NAD+ 與 SIRT1 的橋接節點" -> {"intent": "analyze", "nodes": ["NAD+", "SIRT1"], "analysis": "bridging nodes"}
- "hello" -> {"intent": "unknown"}
- "你好" -> {"intent": "unknown"}

User message: {message}

Respond with ONLY the JSON object:"""


async def parse_intent(message: str, timeout: float = 60.0) -> dict:
    """Classify a graphify operation request into a structured intent.

    Uses a throwaway session so classifier turns never pollute prompt history.
    """
    prompt = INTENT_PROMPT.replace("{message}", message)
    session_id = None
    try:
        session_id = await create_session(title="intent")
        text = await _prompt_sync(session_id, prompt, timeout=timeout)
        if not text:
            logger.warning("empty intent response from opencode")
            return {"intent": "unknown"}
        return _extract_json(text)
    except OpencodeUnavailable as e:
        logger.error(f"parse_intent unavailable: {e}")
        return {"intent": "unknown"}
    except Exception as e:
        logger.error(f"parse_intent error: {e}")
        return {"intent": "unknown"}
    finally:
        if session_id:
            await delete_session(session_id)


# ----------------------------------------------------------------------------
# Analysis narrative
# ----------------------------------------------------------------------------

ANALYSIS_PROMPT = """You are narrating a custom graph analysis that was computed by a script over a biomedical knowledge graph. You are given the user's request and the exact computed metrics (degree, centrality, common neighbours, pairwise paths). Write a clear, plain-language interpretation of what the numbers mean for the named nodes.

Rules:
- The metrics are system-computed. Do NOT claim to have calculated, measured, or queried them. Present them as given.
- Narrate ONLY what the supplied data supports. Do not invent nodes, edges, scores, or relationships that are not in the data.
- Use the exact node labels from the data, wrapped as [[Node Name]] so the UI can highlight them.
- Where a finding has a biological meaning, connect it to the wiki; otherwise keep the interpretation strictly to graph structure.
- Keep it concise: 3-6 short paragraphs or a tight bulleted list. This renders in a small prompt panel beside a 3D graph.

User request: {request}

Computed analysis (JSON):
{data}

Write the narrative:"""


async def write_analysis_narrative(
    computed_data: dict, request: str = "", timeout: float = 120.0
) -> str:
    """Turn computed graph metrics into a plain-language analysis narrative.

    Uses the utility agent (read-only). Returns "" on any failure so the caller
    can fall back to the computed summary text.
    """
    prompt = ANALYSIS_PROMPT.replace("{request}", request or "(none)").replace(
        "{data}", json.dumps(computed_data, ensure_ascii=False)[:4000]
    )
    session_id = None
    try:
        session_id = await create_session(title="analysis")
        text = await _prompt_sync(session_id, prompt, timeout=timeout)
        return text.strip()
    except Exception as e:  # noqa: BLE001 - narrative is best-effort
        logger.error(f"write_analysis_narrative failed: {e}")
        return ""
    finally:
        if session_id:
            await delete_session(session_id)


# ----------------------------------------------------------------------------
# Translation
# ----------------------------------------------------------------------------

TRANSLATE_PROMPT = """Translate the following text into the SAME language as the
user's request below. Preserve markdown formatting and leave [[wiki links]],
entity names, and gene/protein symbols in their original form. Output ONLY the
translation, no explanation or extra text:

{text}

User request:
{message}"""


async def translate_text(text: str, user_message: str, timeout: float = 90.0) -> str:
    """Translate text into the language of the user's message.

    Returns the original on failure or when the message is English.
    """
    if not text or detect_lang(user_message) == "en":
        return text

    prompt = TRANSLATE_PROMPT.replace("{text}", text[:3000]).replace(
        "{message}", user_message
    )
    session_id = None
    try:
        session_id = await create_session(title="translate")
        translated = await _prompt_sync(session_id, prompt, timeout=timeout)
        return translated or text
    except Exception as e:
        logger.error(f"Translation error: {e}")
        return text
    finally:
        if session_id:
            await delete_session(session_id)



# ----------------------------------------------------------------------------
# Helpers
# ----------------------------------------------------------------------------


def _extract_json(text: str) -> dict:
    """Extract a JSON intent object from model response text."""
    try:
        obj = json.loads(text)
        if isinstance(obj, dict) and "intent" in obj:
            return obj
    except json.JSONDecodeError:
        pass

    match = re.search(r'\{[^{}]*"intent"[^{}]*\}', text)
    if match:
        try:
            obj = json.loads(match.group())
            if isinstance(obj, dict) and "intent" in obj:
                return obj
        except json.JSONDecodeError:
            pass

    return {"intent": "unknown"}
