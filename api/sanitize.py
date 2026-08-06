"""Input sanitization for the chat API."""

import re

MAX_INPUT_LENGTH = 500

# Patterns that could indicate injection attempts
DANGEROUS_PATTERNS = [
    r'`',           # backtick (shell expansion)
    r'\$\(',        # $(...) command substitution
    r'\$\{',        # ${...} variable expansion
    r'\|\|',        # logical OR (shell chaining)
    r'&&',          # logical AND (shell chaining)
    r';\s*rm\b',    # rm command
    r';\s*cat\b',   # cat command
    r';\s*ls\b',    # ls command
    r'\|\s*sh\b',   # pipe to sh
    r'\|\s*bash\b', # pipe to bash
    r'<\s*script',  # script tags
    r'javascript:', # javascript protocol
    r'on\w+\s*=',   # event handlers (onclick=, onerror=, etc.)
    # Destructive file operations
    r'\bdelete\b.*\bfile\b',
    r'\bremove\b.*\bfile\b',
    r'\bunlink\b',
    r'\bdestroy\b.*\bfile\b',
    r'\berase\b',
    r'\bdrop\b.*\btable\b',
    r'\btruncate\b',
]

_DANGEROUS_RE = re.compile('|'.join(DANGEROUS_PATTERNS), re.IGNORECASE)
_HTML_TAG_RE = re.compile(r'<[^>]+>')
_CONTROL_CHAR_RE = re.compile(r'[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]')
_WHITESPACE_RE = re.compile(r'\s+')


def sanitize_input(text: str) -> str:
    """Sanitize user input. Returns cleaned string or empty string if invalid."""
    if not text or not isinstance(text, str):
        return ""

    # Strip HTML tags
    text = _HTML_TAG_RE.sub('', text)

    # Remove null bytes and control chars (keep newline, tab)
    text = _CONTROL_CHAR_RE.sub('', text)

    # Collapse whitespace
    text = _WHITESPACE_RE.sub(' ', text).strip()

    # Max length
    text = text[:MAX_INPUT_LENGTH]

    # Block injection patterns
    if _DANGEROUS_RE.search(text):
        return ""

    return text


def sanitize_node_name(name: str) -> str:
    """Sanitize a node name extracted by the LLM."""
    if not name or not isinstance(name, str):
        return ""
    # Node names should be alphanumeric, spaces, hyphens, underscores, dots, slashes
    name = re.sub(r'[^\w\s\-./+]', '', name).strip()
    return name[:200]


def validate_intent(intent: dict) -> dict:
    """Validate and sanitize parsed LLM intent."""
    if not isinstance(intent, dict):
        return {"intent": "unknown"}

    raw_intent = intent.get("intent", "unknown")

    if raw_intent == "query":
        q = sanitize_node_name(intent.get("question", ""))
        if not q:
            return {"intent": "unknown"}
        return {"intent": "query", "question": q}

    elif raw_intent == "explain":
        node = sanitize_node_name(intent.get("node", ""))
        if not node:
            return {"intent": "unknown"}
        return {"intent": "explain", "node": node}

    elif raw_intent == "path":
        from_node = sanitize_node_name(intent.get("from", ""))
        to_node = sanitize_node_name(intent.get("to", ""))
        if not from_node or not to_node:
            return {"intent": "unknown"}
        return {"intent": "path", "from": from_node, "to": to_node}

    return {"intent": "unknown"}
