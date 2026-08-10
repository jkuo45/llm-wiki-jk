"""Client for a long-lived `opencode serve` instance.

Replaces the previous `opencode run` subprocess-per-request design. All model
work goes over HTTP to a headless opencode server bound to loopback.

Event contract (verified against opencode 1.18.5):
  GET  /event                     global SSE bus, `data: {...}` framing
  POST /session                   -> {id, ...}
  POST /session/:id/prompt_async  -> 204, streams results on the bus
  POST /session/:id/message       -> synchronous {info, parts}
  POST /session/:id/abort         -> bool

Bus events consumed here:
  message.updated        info.role, used to drop the echoed user prompt
  message.part.updated   part.type in text|reasoning|step-start|step-finish
                         carries the FULL part.text so far
  message.part.delta     {partID, field:"text", delta} incremental chunk
  session.idle           turn complete
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
CHAT_AGENT = os.environ.get("OPENCODE_CHAT_AGENT", "wiki-chat")
UTILITY_AGENT = os.environ.get("OPENCODE_UTILITY_AGENT", "wiki-chat")

_AUTH = (OPENCODE_USERNAME, OPENCODE_PASSWORD) if OPENCODE_PASSWORD else None


def _client(timeout: float | None = 30.0) -> httpx.AsyncClient:
    return httpx.AsyncClient(base_url=OPENCODE_URL, auth=_AUTH, timeout=timeout)


class OpencodeUnavailable(RuntimeError):
    """Raised when the opencode server cannot be reached."""


# ----------------------------------------------------------------------------
# Health / sessions
# ----------------------------------------------------------------------------


async def health() -> dict:
    """Return opencode server health, or raise OpencodeUnavailable."""
    try:
        async with _client(timeout=5.0) as c:
            r = await c.get("/global/health")
            r.raise_for_status()
            return r.json()
    except Exception as e:
        raise OpencodeUnavailable(str(e)) from e


async def create_session(title: str = "graph-chat") -> str:
    """Create an opencode session and return its id."""
    try:
        async with _client() as c:
            r = await c.post("/session", json={"title": title})
            r.raise_for_status()
            return r.json()["id"]
    except Exception as e:
        raise OpencodeUnavailable(f"create_session failed: {e}") from e


async def delete_session(session_id: str) -> None:
    """Best-effort session teardown."""
    try:
        async with _client(timeout=10.0) as c:
            await c.delete(f"/session/{session_id}")
    except Exception as e:
        logger.warning(f"delete_session({session_id}) failed: {e}")


async def abort_session(session_id: str) -> None:
    """Best-effort abort of an in-flight turn."""
    try:
        async with _client(timeout=10.0) as c:
            await c.post(f"/session/{session_id}/abort")
    except Exception as e:
        logger.warning(f"abort_session({session_id}) failed: {e}")


# ----------------------------------------------------------------------------
# Synchronous prompt (intent parsing, translation)
# ----------------------------------------------------------------------------


async def _prompt_sync(
    session_id: str, text: str, timeout: float = 60.0, agent: str = UTILITY_AGENT
) -> str:
    """Send a prompt and wait for the full reply. Returns concatenated text."""
    async with _client(timeout=timeout) as c:
        r = await c.post(
            f"/session/{session_id}/message",
            json={"agent": agent, "parts": [{"type": "text", "text": text}]},
        )
        r.raise_for_status()
        data = r.json()

    return "".join(
        p.get("text", "")
        for p in data.get("parts", [])
        if p.get("type") == "text"
    ).strip()


# ----------------------------------------------------------------------------
# Streaming prompt
# ----------------------------------------------------------------------------


async def stream_answer(
    message: str,
    session_id: str,
    timeout: float = 240.0,
    agent: str = CHAT_AGENT,
) -> AsyncGenerator[dict, None]:
    """Stream a turn as SSE-compatible dicts.

    Yields dicts with keys:
      - type: "reasoning" | "text" | "done" | "error"
      - text: incremental chunk (reasoning/text)
      - elapsed: seconds since start (done)

    Text is emitted as deltas so the browser can append directly. Two quirks of
    the opencode bus are handled here:

      1. The prompt is echoed back as a user-role text part. It must not be
         relayed or it corrupts the client's text buffer.
      2. The final `message.part.updated` for a part carries the full text while
         trailing deltas may be coalesced or dropped, so any unsent suffix is
         flushed on that event.
    """
    start = time.monotonic()
    part_types: dict[str, str] = {}
    part_messages: dict[str, str] = {}
    message_roles: dict[str, str] = {}
    streamed: dict[str, int] = {}
    emitted_done = False

    def _is_user_part(part_id: str) -> bool:
        mid = part_messages.get(part_id)
        return bool(mid) and message_roles.get(mid) == "user"

    def _flush(part: dict) -> dict | None:
        pid = part.get("id")
        kind = part.get("type")
        if kind not in ("text", "reasoning") or not pid:
            return None
        if _is_user_part(pid):
            return None
        full = part.get("text") or ""
        sent = streamed.get(pid, 0)
        if len(full) <= sent:
            return None
        streamed[pid] = len(full)
        return {"type": kind, "text": full[sent:]}

    try:
        async with _client(timeout=None) as c:
            # Subscribe BEFORE prompting so no events are missed.
            async with c.stream("GET", "/event") as events:
                if events.status_code != 200:
                    yield {"type": "error", "text": "Chat service unavailable."}
                    return

                post = await c.post(
                    f"/session/{session_id}/prompt_async",
                    json={
                        "agent": agent,
                        "parts": [{"type": "text", "text": message}],
                    },
                    timeout=30.0,
                )
                if post.status_code >= 400:
                    logger.error(
                        f"prompt_async failed: {post.status_code} {post.text[:200]}"
                    )
                    yield {"type": "error", "text": "Chat service unavailable."}
                    return

                lines = events.aiter_lines()
                while True:
                    remaining = timeout - (time.monotonic() - start)
                    if remaining <= 0:
                        await abort_session(session_id)
                        yield {"type": "error", "text": "Request timed out."}
                        return

                    try:
                        line = await asyncio.wait_for(
                            lines.__anext__(), timeout=remaining
                        )
                    except StopAsyncIteration:
                        break
                    except asyncio.TimeoutError:
                        await abort_session(session_id)
                        yield {"type": "error", "text": "Request timed out."}
                        return

                    if not line.startswith("data: "):
                        continue
                    try:
                        event = json.loads(line[6:])
                    except json.JSONDecodeError:
                        continue

                    etype = event.get("type")
                    props = event.get("properties", {})

                    # The bus is global; ignore other sessions.
                    evt_session = props.get("sessionID")
                    if evt_session is not None and evt_session != session_id:
                        continue

                    if etype == "message.updated":
                        info = props.get("info", {})
                        mid = info.get("id")
                        if mid:
                            message_roles[mid] = info.get("role", "")

                    elif etype == "message.part.updated":
                        part = props.get("part", {})
                        pid = part.get("id")
                        ptype = part.get("type")
                        if pid:
                            part_types[pid] = ptype
                            if part.get("messageID"):
                                part_messages[pid] = part["messageID"]
                        chunk = _flush(part)
                        if chunk:
                            yield chunk

                    elif etype == "message.part.delta":
                        if props.get("field") != "text":
                            continue
                        pid = props.get("partID")
                        kind = part_types.get(pid)
                        if kind not in ("text", "reasoning"):
                            continue
                        if _is_user_part(pid):
                            continue
                        delta = props.get("delta") or ""
                        if not delta:
                            continue
                        streamed[pid] = streamed.get(pid, 0) + len(delta)
                        yield {"type": kind, "text": delta}

                    elif etype == "session.error":
                        err = props.get("error", {})
                        logger.error(f"session.error: {err}")
                        yield {
                            "type": "error",
                            "text": "Sorry, I couldn't process that request.",
                        }
                        return

                    elif etype == "session.idle":
                        emitted_done = True
                        yield {
                            "type": "done",
                            "elapsed": round(time.monotonic() - start, 1),
                        }
                        return

    except httpx.ConnectError as e:
        logger.error(f"opencode server unreachable: {e}")
        yield {"type": "error", "text": "Chat service unavailable."}
        return
    except Exception as e:
        logger.error(f"stream_answer error: {e}")
        yield {"type": "error", "text": "Sorry, I couldn't process that request."}
        return

    if not emitted_done:
        yield {"type": "done", "elapsed": round(time.monotonic() - start, 1)}


# ----------------------------------------------------------------------------
# Intent parsing
# ----------------------------------------------------------------------------

INTENT_PROMPT = """You are an intent classifier for a biomedical knowledge graph chatbot.

Given the user's message, classify it into EXACTLY ONE of these intents and respond with ONLY a JSON object (no markdown, no explanation).

ALSO detect the language of the user's message and include it as "lang" (use BCP 47 codes: "en", "zh-TW", "zh-CN", "ja", "ko", "es", "fr", "de", "ru", etc.).

1. query - user asks a question about entities in wiki, graph. knowledge base.
   Response: {"intent": "query", "question": "<the question>", "lang": "<detected language>"}

2. explain - user wants to understand a specific concept/node
   Response: {"intent": "explain", "node": "<node name>", "lang": "<detected language>"}

3. path - user wants to find a connection between two concepts
   Response: {"intent": "path", "from": "<node A>", "to": "<node B>", "lang": "<detected language>"}

4. unknown - cannot classify
   Response: {"intent": "unknown", "lang": "<detected language>"}

Examples:
- "What is autophagy?" -> {"intent": "explain", "node": "Autophagy", "lang": "en"}
- "自噬是什麼？" -> {"intent": "explain", "node": "Autophagy", "lang": "zh-TW"}
- "How does rapamycin relate to mTOR?" -> {"intent": "path", "from": "Rapamycin", "to": "mTOR", "lang": "en"}
- "雷帕霉素和mTOR有什么关系？" -> {"intent": "path", "from": "Rapamycin", "to": "mTOR", "lang": "zh-CN"}
- "hello" -> {"intent": "unknown", "lang": "en"}
- "你好" -> {"intent": "unknown", "lang": "zh-TW"}

User message: {message}

Respond with ONLY the JSON object:"""


async def parse_intent(message: str, timeout: float = 60.0) -> dict:
    """Classify a graphify operation request into a structured intent.

    Uses a throwaway session so classifier turns never pollute chat history.
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
# Translation
# ----------------------------------------------------------------------------

TRANSLATE_PROMPT = """Translate the following text to {lang}. Preserve markdown
formatting and leave [[wiki links]], entity names, and gene/protein symbols in
their original form. Output ONLY the translation, no explanation or extra text:

{text}"""


async def translate_text(text: str, target_lang: str, timeout: float = 90.0) -> str:
    """Translate text to target language. Returns the original on failure."""
    if not text or target_lang == "en":
        return text

    prompt = TRANSLATE_PROMPT.replace("{lang}", target_lang).replace(
        "{text}", text[:3000]
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
