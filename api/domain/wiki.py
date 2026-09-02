"""Wiki note + task output lookup for enriching graph node descriptions.

Read-only synthesis: resolves a graph node (by id / label) to its canonical
wiki note under src/notes/ and surfaces relevant snippets from src/tasks/.
All indexes are built lazily and cached at module level.
"""

import logging
import re
from collections import OrderedDict
from pathlib import Path

logger = logging.getLogger(__name__)

WIKI_ROOT = Path(__file__).resolve().parents[2] / "src" / "notes"  # api/domain/ -> repo root
TASKS_ROOT = Path(__file__).resolve().parents[2] / "src" / "tasks"

_MAX_EXCERPT = 600
_MAX_DESCRIPTION = 1200

_WIKI_INDEX: dict[str, dict] | None = None
# Task outputs are matched per query. We keep file paths (cheap) and lazily load
# each file's text into a bounded LRU so a large src/tasks/ tree can't pin every
# file's full text in memory forever (previously the whole index was loaded).
_TASK_PATHS: list[Path] | None = None
_TASK_TEXT_CACHE: "OrderedDict[Path, str]" = OrderedDict()
_TASK_TEXT_CAP = 16

_FRONTMATTER_RE = re.compile(r"^---\n(.*?)\n---", re.DOTALL)
_DESCRIPTION_RE = re.compile(r"(?m)^description:\s*(.*)$")
_TITLE_RE = re.compile(r"(?m)^title:\s*(.*)$")
_ALIASES_RE = re.compile(r"(?m)^aliases:\s*\[(.*)\]$")
_MD_LINK_RE = re.compile(r"\[\[([^\]|]+)(?:\|[^\]]+)?\]\]|\[([^\]]+)\]\([^)]+\)")


def _first_line(value: str) -> str:
    return value.strip().strip('"').splitlines()[0].strip()


def _parse_frontmatter(text: str) -> dict:
    """Extract title / description / aliases from Obsidian frontmatter."""
    meta: dict[str, object] = {}
    m = _FRONTMATTER_RE.search(text)
    if not m:
        return meta
    fm = m.group(1)

    t = _TITLE_RE.search(fm)
    if t:
        meta["title"] = _first_line(t.group(1))
    d = _DESCRIPTION_RE.search(fm)
    if d:
        start = d.start()
        rest = fm[start:]
        lines = rest.splitlines()
        value = lines[0].split(":", 1)[1] if ":" in lines[0] else ""
        for line in lines[1:]:
            if line.startswith((" ", "\t")) and line.strip():
                value += " " + line.strip()
            else:
                break
        meta["description"] = value.strip().strip("'\"")
    a = _ALIASES_RE.search(fm)
    if a:
        meta["aliases"] = [
            x.strip().strip('"') for x in a.group(1).split(",") if x.strip()
        ]
    return meta


def _clean_text(value: str) -> str:
    """Strip wiki links, markdown emphasis, and list markers for plain prose."""
    value = _MD_LINK_RE.sub(lambda m: m.group(1) or m.group(2) or "", value)
    value = re.sub(r"^\s*[-*+]\s+", "", value)
    value = re.sub(r"\*\*(.*?)\*\*", r"\1", value)
    value = re.sub(r"(?<!\*)\*(?!\*)", "", value)
    value = re.sub(r"`([^`]*)`", r"\1", value)
    value = re.sub(r"\s*>?\s*\[![\w-]+\]\s*", " ", value)
    value = re.sub(r"\s*>", " ", value)
    value = re.sub(r"\|", " ", value)
    value = re.sub(r"\s{2,}", " ", value)
    return value.strip()


def _body_excerpt(text: str) -> str:
    """First plain paragraph after the leading H1, skipping callouts/tables."""
    lines = text.splitlines()
    started = False
    buf: list[str] = []
    for line in lines:
        if line.startswith("# "):
            started = True
            continue
        if not started:
            continue
        stripped = line.strip()
        if not stripped:
            continue
        if stripped.startswith(">") or stripped.startswith("|") or stripped.startswith("#"):
            continue
        buf.append(_clean_text(stripped))
        if len(" ".join(buf)) >= _MAX_EXCERPT:
            break
    joined = " ".join(p for p in buf if p)
    return joined[: _MAX_EXCERPT] if joined else ""


def _load_frontmatter_file(path: Path) -> dict | None:
    """Read a wiki note into an index record."""
    try:
        text = path.read_text(encoding="utf-8")
    except OSError:
        return None
    meta = _parse_frontmatter(text)
    title = meta.get("title") or path.stem
    record = {
        "path": str(path),
        "title": title,
        "description": meta.get("description", "") or "",
        "excerpt": _body_excerpt(text),
        "aliases": meta.get("aliases", []),
    }
    if not record["description"] and not record["excerpt"]:
        return None
    return record


def build_wiki_index() -> dict[str, dict]:
    """Scan src/notes/ (incl. _link/) into a lookup by lowercased title/alias/stem."""
    global _WIKI_INDEX
    if _WIKI_INDEX is not None:
        return _WIKI_INDEX
    index: dict[str, dict] = {}
    if WIKI_ROOT.is_dir():
        for path in sorted(WIKI_ROOT.rglob("*.md")):
            record = _load_frontmatter_file(path)
            if not record:
                continue
            is_document = path.stem.startswith("_document_")
            for key in {record["title"], path.stem} | set(record["aliases"]):
                key = key.lower()
                existing = index.get(key)
                # record["path"] is absolute; compare on the filename so the
                # entity-beats-document preference actually fires
                existing_is_doc = Path(existing.get("path", "")).name.startswith(
                    "_document_"
                ) if existing else False
                if existing is None:
                    index[key] = record
                elif existing_is_doc and not is_document:
                    index[key] = record
                elif not existing_is_doc and not is_document:
                    if len(record["description"]) > len(existing["description"]):
                        index[key] = record
    _WIKI_INDEX = index
    logger.debug("wiki index: %d records", len(_WIKI_INDEX))
    return _WIKI_INDEX


def match_wiki_node(node_id: str, label: str) -> dict | None:
    """Resolve a graph node to its canonical wiki note, or None."""
    index = build_wiki_index()
    for term in (label, node_id):
        if not term:
            continue
        hit = index.get(term.lower())
        if hit:
            return hit
    if label:
        for key, record in index.items():
            if label.lower() in key:
                return record
    return None


def _task_paths() -> list[Path]:
    """Lazily list task-output files (paths only — cheap, cached once)."""
    global _TASK_PATHS
    if _TASK_PATHS is None:
        _TASK_PATHS = (
            sorted(TASKS_ROOT.glob("task_output_*.md"))
            if TASKS_ROOT.is_dir()
            else []
        )
    return _TASK_PATHS


def _task_text(path: Path) -> str:
    """Load a task file's body text, cached in a bounded LRU."""
    text = _TASK_TEXT_CACHE.get(path)
    if text is None:
        try:
            text = path.read_text(encoding="utf-8")
        except OSError:
            text = ""
        text = _FRONTMATTER_RE.sub("", text)
        _TASK_TEXT_CACHE[path] = text
        while len(_TASK_TEXT_CACHE) > _TASK_TEXT_CAP:
            _TASK_TEXT_CACHE.popitem(last=False)
    return text


def search_task_outputs(label: str, limit: int = 3) -> list[dict]:
    """Find snippets mentioning the label across top-level task outputs."""
    if not label:
        return []
    needle = re.compile(
        r"\[\[" + re.escape(label) + r"\]\]|(?<![\[\]A-Za-z])" + re.escape(label),
        re.IGNORECASE,
    )
    found: list[dict] = []
    for path in _task_paths():
        text = _task_text(path)
        match = needle.search(text)
        if not match:
            continue
        start = max(0, match.start() - 120)
        snippet = text[start : match.end() + 120]
        snippet = " ".join(snippet.split())
        snippet = _clean_text(snippet)
        snippet = snippet.strip("[]()|,;:-")
        if len(snippet) > 200:
            snippet = snippet[:200] + "..."
        found.append({"file": path.stem, "snippet": snippet})
        if len(found) >= limit:
            break
    return found


def _dedupe_excerpt(excerpt: str, description: str) -> str:
    """Trim excerpt sentences that largely repeat the frontmatter description."""
    if not excerpt or not description:
        return excerpt
    base_words = {w.lower() for w in re.findall(r"\w+", description)}
    sentences = re.split(r"(?<=[.!?])\s+", excerpt)
    kept = []
    for sent in sentences:
        words = {w.lower() for w in re.findall(r"\w+", sent)}
        if not words or not base_words:
            kept.append(sent)
            continue
        overlap = len(words & base_words) / max(len(words), 1)
        if overlap > 0.7:
            continue
        kept.append(sent)
    return " ".join(kept)


def enrich_description(node_id: str, label: str, fallback: str = "") -> dict:
    """Synthesize an expanded description from wiki note + task outputs.

    Returns {"description", "wiki_source", "task_outputs"}. Falls back to the
    provided graph description when no wiki note is found.
    """
    wiki = match_wiki_node(node_id, label)
    tasks = search_task_outputs(label)

    parts: list[str] = []
    if wiki:
        base = wiki["description"] or wiki["excerpt"] or fallback
        if base:
            parts.append(base.strip().rstrip("."))
        excerpt = wiki["excerpt"]
        if wiki["description"] and excerpt:
            excerpt = _dedupe_excerpt(excerpt, wiki["description"])
        if excerpt:
            parts.append(excerpt.strip().rstrip("."))
    elif fallback:
        parts.append(fallback.strip().rstrip("."))

    if tasks:
        seen_snippets: set[str] = set()
        for task in tasks:
            snippet = task["snippet"]
            if snippet in seen_snippets or snippet in " ".join(parts):
                continue
            seen_snippets.add(snippet)
            parts.append(f"From task output ({task['file']}): {snippet}")

    description = ". ".join(p for p in parts if p).strip()
    if not description:
        description = fallback.strip()
    if len(description) > _MAX_DESCRIPTION:
        description = description[: _MAX_DESCRIPTION] + "..."

    return {
        "description": description,
        "wiki_source": wiki["title"] if wiki else None,
        "task_outputs": tasks,
    }
