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
UTILITY_AGENT = os.environ.get("OPENCODE_UTILITY_AGENT", "wiki-util")

_AUTH = (OPENCODE_USERNAME, OPENCODE_PASSWORD) if OPENCODE_PASSWORD else None


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
         flushed on that event. Both feeds describe slices of one cumulative
         string; deltas advance the emitted cursor and a superseding snapshot
         absorbs any remaining suffix without replay.
    """
    start = time.monotonic()
    part_types: dict[str, str] = {}
    part_messages: dict[str, str] = {}
    message_roles: dict[str, str] = {}
    # Cumulative text already relayed downstream for each part. Both the delta
    # and the part.updated snapshot feeds describe slices of the SAME
    # append-only cumulative string, so tracking the full emitted text (rather
    # than a bare length) lets a superseding snapshot absorb trailing deltas
    # without any replay.
    sented: dict[str, str] = {}
    snap_text: dict[str, str] = {}
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
        have = sented.get(pid, "")
        if len(full) <= len(have):
            return None
        # The snapshot supersedes partial deltas: emit only the suffix that has
        # not gone out yet, then adopt the snapshot as the canonical text.
        sented[pid] = full
        return {"type": kind, "text": full[len(have):]}

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
                            if ptype in ("text", "reasoning"):
                                snap_text[pid] = part.get("text") or ""
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
                        # Deltas are incremental slices of a cumulative string. If
                        # the most recent part.updated snapshot already contains
                        # this slice, it has been (or will be) relayed by the
                        # snapshot flush — do not re-emit it or the trace greps
                        # it twice. Otherwise it is a genuine continuation.
                        have = sented.get(pid, "")
                        cand = have + delta
                        snap = snap_text.get(pid)
                        if snap and snap.startswith(cand):
                            sented[pid] = cand
                            continue
                        sented[pid] = cand
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
# Analysis narrative
# ----------------------------------------------------------------------------

ANALYSIS_PROMPT = """You are narrating a custom graph analysis that was computed by a script over a biomedical knowledge graph. You are given the user's request and the exact computed metrics (degree, centrality, common neighbours, pairwise paths). Write a clear, plain-language interpretation of what the numbers mean for the named nodes.

Rules:
- The metrics are system-computed. Do NOT claim to have calculated, measured, or queried them. Present them as given.
- Narrate ONLY what the supplied data supports. Do not invent nodes, edges, scores, or relationships that are not in the data.
- Use the exact node labels from the data, wrapped as [[Node Name]] so the UI can highlight them.
- Where a finding has a biological meaning, connect it to the wiki; otherwise keep the interpretation strictly to graph structure.
- Keep it concise: 3-6 short paragraphs or a tight bulleted list. This renders in a small chat panel beside a 3D graph.

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
# Handwriting OCR (vision via the utility agent)
# ----------------------------------------------------------------------------

OCR_PROMPT = """You are transcribing handwriting from a photo of handwritten notes about a
scientific paper.

Read the image at the following absolute path and transcribe ALL visible text as
faithfully as you can:
{path}

Rules:
- Output ONLY the transcribed text. No commentary, no markdown code fences.
- Preserve the note's structure (headings, numbered lists, bullets).
- Where diagrams/arrows/boxes appear, fold them into inline text or a short
  bulleted list so nothing meaningful is lost.
- Render chemical, gene, and protein symbols in their standard forms (e.g.
  SIRT1, NAD+). Do not wrap them in [[wiki links]].
- IMPORTANT: If you cannot actually see or read the image (for example, your
  model has no vision support), reply EXACTLY with the single line: OCR_FAILED"""


async def transcribe_image(
    image_path: str, timeout: float = 120.0
) -> str:
    """OCR a photo of handwritten notes via the read-only utility agent.

    Runs ONCE per image by design: callers are expected to persist the result
    and short-circuit before re-calling. Returns "" on any failure so callers
    can surface a friendly error.
    """
    prompt = OCR_PROMPT.replace("{path}", image_path)
    session_id = None
    try:
        session_id = await create_session(title="ocr")
        text = await _prompt_sync(session_id, prompt, timeout=timeout)
        return text.strip()
    except Exception as e:  # noqa: BLE001 - OCR is best-effort
        logger.error(f"transcribe_image failed: {e}")
        return ""
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
