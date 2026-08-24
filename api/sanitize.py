"""Input sanitization for the prompt API.

Prompts are delivered to opencode over HTTP as JSON, never as shell argv, so
the historical shell-injection blocklist is gone. It rejected legitimate
biomedical questions (backticks, `&&`, "erase", "truncate") for no benefit.
What remains guards against XSS reflected into the prompt panel and against
oversized or malformed payloads.
"""

import re

MAX_INPUT_LENGTH = 4000
MAX_NODE_NAME_LENGTH = 200
MAX_TRACE_NODES = 8
MAX_ANALYSIS_LENGTH = 400

_HTML_TAG_RE = re.compile(r"<[^>]+>")
_CONTROL_CHAR_RE = re.compile(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]")
_WHITESPACE_RE = re.compile(r"\s+")

# Reflected-XSS vectors. The frontend escapes user text, but this is defense
# in depth for any path that renders a message as HTML.
_XSS_RE = re.compile(
    r"<\s*script|javascript:|data:text/html|\bon\w+\s*=",
    re.IGNORECASE,
)


def sanitize_input(text: str) -> str:
    """Sanitize user input. Returns a cleaned string, or "" if invalid."""
    if not text or not isinstance(text, str):
        return ""

    text = _HTML_TAG_RE.sub("", text)
    text = _CONTROL_CHAR_RE.sub("", text)
    text = _WHITESPACE_RE.sub(" ", text).strip()
    text = text[:MAX_INPUT_LENGTH]

    if _XSS_RE.search(text):
        return ""

    return text


def sanitize_node_name(name: str) -> str:
    """Sanitize a node name extracted by the model."""
    if not name or not isinstance(name, str):
        return ""
    name = re.sub(r"[^\w\s\-./+]", "", name).strip()
    return name[:MAX_NODE_NAME_LENGTH]


def sanitize_analysis(text: str) -> str:
    """Sanitize the free-text description of a custom node analysis."""
    if not text or not isinstance(text, str):
        return ""
    text = _HTML_TAG_RE.sub("", text)
    text = _CONTROL_CHAR_RE.sub("", text)
    text = _WHITESPACE_RE.sub(" ", text).strip()
    text = text[:MAX_ANALYSIS_LENGTH]
    if _XSS_RE.search(text):
        return ""
    return text


def sanitize_tags(tags) -> list[str]:
    """Sanitize client-supplied @-tagged node names (deduped, bounded)."""
    if not isinstance(tags, list):
        return []
    out: list[str] = []
    for t in tags:
        if not isinstance(t, str):
            continue
        name = sanitize_node_name(t)
        if name and name not in out:
            out.append(name)
        if len(out) >= MAX_TRACE_NODES:
            break
    return out


def validate_intent(intent: dict) -> dict:
    """Validate and sanitize a parsed model intent."""
    if not isinstance(intent, dict):
        return {"intent": "unknown"}

    raw_intent = intent.get("intent", "unknown")

    if raw_intent == "query":
        q = sanitize_node_name(intent.get("question", ""))
        if not q:
            return {"intent": "unknown"}
        return {"intent": "query", "question": q}

    if raw_intent == "explain":
        node = sanitize_node_name(intent.get("node", ""))
        if not node:
            return {"intent": "unknown"}
        return {"intent": "explain", "node": node}

    if raw_intent == "path":
        from_node = sanitize_node_name(intent.get("from", ""))
        to_node = sanitize_node_name(intent.get("to", ""))
        if not from_node or not to_node:
            return {"intent": "unknown"}
        return {"intent": "path", "from": from_node, "to": to_node}

    if raw_intent == "analyze":
        raw_nodes = intent.get("nodes")
        if not isinstance(raw_nodes, list):
            raw_nodes = [intent.get("node")]
        nodes = []
        for raw in raw_nodes[:MAX_TRACE_NODES]:
            if not isinstance(raw, str):
                continue
            node = sanitize_node_name(raw)
            if node:
                nodes.append(node)
        if not nodes:
            return {"intent": "unknown"}
        analysis = sanitize_analysis(intent.get("analysis", ""))
        return {"intent": "analyze", "nodes": nodes, "analysis": analysis}

    return {"intent": "unknown"}
