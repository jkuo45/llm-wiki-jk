"""Intent parsing via opencode subprocess."""

import asyncio
import json
import re
import logging

logger = logging.getLogger(__name__)

INTENT_PROMPT = """You are an intent classifier for a biomedical knowledge graph chatbot.

Given the user's message, classify it into EXACTLY ONE of these intents and respond with ONLY a JSON object (no markdown, no explanation):

1. query - user asks a question about the graph/knowledge base
   Response: {"intent": "query", "question": "<the question>"}

2. explain - user wants to understand a specific concept/node
   Response: {"intent": "explain", "node": "<node name>"}

3. path - user wants to find a connection between two concepts
   Response: {"intent": "path", "from": "<node A>", "to": "<node B>"}

4. unknown - cannot classify
   Response: {"intent": "unknown"}

Examples:
- "What is autophagy?" → {"intent": "explain", "node": "Autophagy"}
- "How does rapamycin relate to mTOR?" → {"intent": "path", "from": "Rapamycin", "to": "mTOR"}
- "What are the key nodes in longevity research?" → {"intent": "query", "question": "key nodes in longevity research"}
- "Tell me about NAD+" → {"intent": "explain", "node": "NAD+"}
- "Show me the connection between inflammation and Alzheimer's" → {"intent": "path", "from": "Inflammation", "to": "Alzheimer's Disease"}
- "hello" → {"intent": "unknown"}

User message: {message}

Respond with ONLY the JSON object:"""


async def parse_intent(message: str, timeout: float = 45.0) -> dict:
    """Call opencode to parse user message into structured intent."""
    prompt = INTENT_PROMPT.replace("{message}", message)

    try:
        proc = await asyncio.create_subprocess_exec(
            "opencode", "run", prompt, "--format", "json",
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
        )

        stdout, stderr = await asyncio.wait_for(
            proc.communicate(), timeout=timeout
        )

        output = stdout.decode("utf-8", errors="replace")

        # Parse NDJSON events to extract text content
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

        full_text = "".join(text_parts).strip()

        if not full_text:
            logger.warning("No text output from opencode")
            return {"intent": "unknown"}

        # Extract JSON from response (handle cases where LLM adds extra text)
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


def _extract_json(text: str) -> dict:
    """Extract JSON object from LLM response text."""
    # Try direct parse first
    try:
        obj = json.loads(text)
        if isinstance(obj, dict) and "intent" in obj:
            return obj
    except json.JSONDecodeError:
        pass

    # Try to find JSON in the text
    match = re.search(r'\{[^{}]*"intent"[^{}]*\}', text)
    if match:
        try:
            obj = json.loads(match.group())
            if isinstance(obj, dict) and "intent" in obj:
                return obj
        except json.JSONDecodeError:
            pass

    return {"intent": "unknown"}
