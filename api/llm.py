"""Intent parsing and translation via opencode subprocess."""

import asyncio
import json
import logging
import re

logger = logging.getLogger(__name__)

INTENT_PROMPT = """You are an intent classifier for a biomedical knowledge graph chatbot.

Given the user's message, classify it into EXACTLY ONE of these intents and respond with ONLY a JSON object (no markdown, no explanation).

ALSO detect the language of the user's message and include it as "lang" (use BCP 47 codes: "en", "zh-TW", "zh-CN", "ja", "ko", "es", "fr", "de", "ru", etc.).

1. query - user asks a question about entities in wiki, graph. knowledge base.
   Response: {{"intent": "query", "question": "<the question>", "lang": "<detected language>"}}

2. explain - user wants to understand a specific concept/node
   Response: {{"intent": "explain", "node": "<node name>", "lang": "<detected language>"}}

3. path - user wants to find a connection between two concepts
   Response: {{"intent": "path", "from": "<node A>", "to": "<node B>", "lang": "<detected language>"}}

4. unknown - cannot classify
   Response: {{"intent": "unknown", "lang": "<detected language>"}}

Examples:
- "What is autophagy?" → {{"intent": "explain", "node": "Autophagy", "lang": "en"}}
- "自噬是什麼？" → {{"intent": "explain", "node": "Autophagy", "lang": "zh-TW"}}
- "How does rapamycin relate to mTOR?" → {{"intent": "path", "from": "Rapamycin", "to": "mTOR", "lang": "en"}}
- "雷帕霉素和mTOR有什么关系？" → {{"intent": "path", "from": "Rapamycin", "to": "mTOR", "lang": "zh-CN"}}
- "hello" → {{"intent": "unknown", "lang": "en"}}
- "你好" → {{"intent": "unknown", "lang": "zh-TW"}}

User message: {message}

Respond with ONLY the JSON object:"""


async def _run_opencode(prompt: str, timeout: float) -> str:
    """Run opencode subprocess and return concatenated text output."""
    proc = await asyncio.create_subprocess_exec(
        "opencode",
        "run",
        prompt,
        "--format",
        "json",
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
    )

    stdout, stderr = await asyncio.wait_for(proc.communicate(), timeout=timeout)

    output = stdout.decode("utf-8", errors="replace")

    text_parts = []
    for line in output.strip().split("\n"):
        if not line.strip():
            continue
        try:
            event = json.loads(line)
            if event.get("type") == "text":
                text_parts.append(event.get("part", {}).get("text", ""))
        except json.JSONDecodeError:
            continue

    return "".join(text_parts).strip()


async def parse_intent(message: str, timeout: float = 45.0) -> dict:
    """Call opencode to parse user message into structured intent."""
    prompt = INTENT_PROMPT.replace("{message}", message)

    try:
        full_text = await _run_opencode(prompt, timeout)

        if not full_text:
            logger.warning("No text output from opencode")
            return {"intent": "unknown"}

        intent = _extract_json(full_text)
        return intent

    except asyncio.TimeoutError:
        logger.error("opencode timed out")
        return {"intent": "unknown"}
    except FileNotFoundError:
        logger.error("opencode command not found")
        return {"intent": "unknown"}
    except Exception as e:
        logger.error(f"opencode error: {e}")
        return {"intent": "unknown"}


CHAT_PROMPT = """You are a knowledgeable assistant for a biomedical wiki knowledge base spanning longevity, pharmacology, cell biology, and related topics. Answer the user's question directly, clearly, and accurately.

You are in an ongoing conversation. Use the prior exchange for context when the user asks a follow-up (for example, "what about its side effects?" or "和上一個有什麼差別"). Answer the CURRENT user message.

Prior conversation:
{history}

User message:
{message}
"""


async def answer_question(
    message: str, history: list[dict] | None = None, timeout: float = 90.0
) -> str:
    """Answer a general user question via opencode. Returns empty string on failure."""
    history_text = ""
    if history:
        lines = []
        for turn in history[-10:]:
            role = "User" if turn.get("role") == "user" else "Assistant"
            content = str(turn.get("content", "")).strip()
            if content:
                lines.append(f"{role}: {content}")
        history_text = "\n".join(lines)
    prompt = CHAT_PROMPT.replace("{message}", message).replace(
        "{history_items}", history_text
    )
    try:
        return await _run_opencode(prompt, timeout)
    except asyncio.TimeoutError:
        logger.error("opencode chat timed out")
    except FileNotFoundError:
        logger.error("opencode command not found")
    except Exception as e:
        logger.error(f"opencode chat error: {e}")
    return "Sorry, I couldn't process that request."


TRANSLATE_PROMPT = """Translate the following text to {lang}. Output ONLY the translation, no explanation or extra text:

{text}"""


async def translate_text(text: str, target_lang: str, timeout: float = 30.0) -> str:
    """Translate text to target language via opencode. Returns original text on failure."""
    if not text or target_lang == "en":
        return text

    truncated = text[:3000]
    prompt = TRANSLATE_PROMPT.replace("{lang}", target_lang).replace(
        "{text}", truncated
    )

    try:
        translated = await _run_opencode(prompt, timeout)
        return translated if translated else text
    except Exception as e:
        logger.error(f"Translation error: {e}")
        return text


def _extract_json(text: str) -> dict:
    """Extract JSON object from LLM response text."""
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
