#!/usr/bin/env python3
"""Audit (and optionally repair) the topic README index files.

Every directory under ``src/notes/`` that holds notes carries a ``README.md``
that indexes it. The index is only useful if it stays in sync with the notes
it describes, so this tool checks the four properties that matter:

1. **Completion** - every note in the directory is linked from the README
   (entities and ``_document_`` notes alike).
2. **Resolution** - every wikilink in the README points at a note that
   exists (by filename, title or alias).
3. **Structure** - the frontmatter is complete, entity rows carry the note's
   ``entity_type_1`` (a value taken from the note's ``tags``) and a
   non-empty description, and no entity is listed twice.
4. **Accuracy** - the entity/document counts quoted in the README match the
   notes on disk.

Run in check mode (exit code 1 when something is wrong):

    python -m scripts audit-topic-readmes

Run with --fix to repair what can be repaired mechanically (missing rows,
duplicate rows, unresolved links, empty descriptions, stale counts,
entity_type_1 values that are not note tags):

    python -m scripts audit-topic-readmes --fix
"""

from __future__ import annotations

import argparse
import os
import re
import sys
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]  # repo root (scripts/<group>/)
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from scripts.triples.normalize import norm  # noqa: E402
from scripts.vault.readme_counts import parse_frontmatter  # noqa: E402

LINK_RE = re.compile(r"\[\[([^\]]+)\]\]")
FRONTMATTER_RE = re.compile(r"\A---\s*\n(.*?)\n---\s*\n", re.DOTALL)

# Rows whose entity_type_1 disagrees with the note's tags.
TYPE_MISMATCH = "type-mismatch"
MISSING_ENTITY = "missing-entity"
MISSING_DOCUMENT = "missing-document"
BROKEN_LINK = "broken-link"
DUPLICATE_ROW = "duplicate-row"
EMPTY_DESCRIPTION = "empty-description"
MALFORMED_ROW = "malformed-row"
NO_FRONTMATTER = "no-frontmatter"
STALE_COUNT = "stale-count"
NO_INDEX = "no-index"

# Count statements quoted in the READMEs, mapped to the disk number they must
# equal (entity count or document count).
COUNT_PATTERNS = [
    (r"Total count of entities:\s*(\d+)", "entities"),
    (r"Total entities:\s*(\d+)", "entities"),
    (r"Contains \*\*(\d+)\s+entities\*\*", "entities"),
    (r"Documents:\s*\*{0,2}(\d+)\*{0,2}", "documents"),
    (r"\*\*(\d+)\s+documents\*\*", "documents"),
]


# ---------------------------------------------------------------------------
# note loading
# ---------------------------------------------------------------------------


class Note:
    """A single note file: stem (canonical link target) plus its metadata."""

    def __init__(self, stem: str, path: Path, fm: dict):
        self.stem = stem
        self.path = path
        self.fm = fm
        self.title = (fm.get("title") or stem).strip()
        self.tags = [str(t).strip() for t in (fm.get("tags") or []) if str(t).strip()]
        self.aliases = [
            str(a).strip() for a in (fm.get("aliases") or []) if str(a).strip()
        ]

    @property
    def is_document(self) -> bool:
        return self.stem.startswith("_document_")

    @property
    def description(self) -> str:
        return " ".join(str(self.fm.get("description") or "").split())

    @property
    def entity_type(self) -> str:
        """entity_type_1: the note's first tag, per AGENTS.md §3."""
        return self.tags[0] if self.tags else "unclassified"


def load_notes(notes_dir: Path) -> dict[str, list[Note]]:
    """topic name -> notes in that topic directory (README.md excluded)."""
    topics: dict[str, list[Note]] = {}
    for entry in sorted(os.listdir(notes_dir)):
        topic_dir = notes_dir / entry
        if not topic_dir.is_dir() or entry.startswith((".", "__")):
            continue
        notes = []
        for path in sorted(topic_dir.glob("*.md")):
            if path.name == "README.md":
                continue
            fm = parse_frontmatter(path)
            notes.append(Note(path.stem, path, fm))
        topics[entry] = notes
    return topics


# ---------------------------------------------------------------------------
# link resolution
# ---------------------------------------------------------------------------


class Resolver:
    """Maps any spelling of a note (stem, title, alias) to its canonical stem.

    ``src/tasks`` files are included: the repository root is the Obsidian
    vault, so a README may legitimately link a task output.
    """

    def __init__(self, topics: dict[str, list[Note]], extra_stems: list[str] | None = None):
        self.by_stem: dict[str, str] = {}
        self.by_norm: dict[str, str] = {}
        self.bare: dict[str, str] = {}
        for notes in topics.values():
            for note in notes:
                self._add(note.stem, note.stem, note.title, *note.aliases)
        for stem in extra_stems or []:
            self._add(stem, stem)

    def _add(self, stem: str, *names: str) -> None:
        self.by_stem.setdefault(stem, stem)
        for name in names:
            if not name:
                continue
            key = norm(name)
            if not key:
                continue
            self.by_norm.setdefault(key, stem)
            self.bare.setdefault(key.replace("_", ""), stem)

    def resolve(self, target: str) -> str | None:
        """Canonical stem for a link target, or None when it cannot be resolved."""
        if not target:
            return None
        if target in self.by_stem:
            return target
        key = norm(target)
        if not key:
            return None
        if key in self.by_norm:
            return self.by_norm[key]
        bare = key.replace("_", "")
        if bare in self.bare:
            return self.bare[bare]
        # Fall back to containment: "energy resonance energy transfer" resolves
        # to "energy resonance transfer" because one name contains the other.
        best: tuple[int, str] | None = None
        for nk, stem in self.by_norm.items():
            nb = nk.replace("_", "")
            if len(nb) < 8:
                continue
            if nb in bare or (len(bare) >= 8 and bare in nb):
                if best is None or len(nb) > best[0]:
                    best = (len(nb), stem)
        if best:
            return best[1]
        # Last resort: the target repeats words ("resonance energy resonance
        # energy") - match notes whose word sequence is a subsequence of it.
        words = key.split("_")
        cand: tuple[int, str] | None = None
        for nk, stem in self.by_norm.items():
            nb = nk.replace("_", "")
            cwords = nk.split("_")
            if len(cwords) < 3 or len(cwords) >= len(words):
                continue
            if is_subsequence(cwords, words):
                if cand is None or len(cwords) > cand[0]:
                    cand = (len(cwords), stem)
        return cand[1] if cand else None


def task_stems(tasks_dir: Path) -> list[str]:
    if not tasks_dir.is_dir():
        return []
    return sorted({p.stem for p in tasks_dir.rglob("*.md")})


def is_subsequence(needle: list[str], haystack: list[str]) -> bool:
    """True when every word of ``needle`` appears in ``haystack`` in order."""
    it = iter(haystack)
    return all(word in it for word in needle)


# ---------------------------------------------------------------------------
# README parsing
# ---------------------------------------------------------------------------


def split_row(line: str) -> list[str]:
    """Split a markdown table row on unescaped pipes."""
    cells, cur, i = [], "", 0
    while i < len(line):
        c = line[i]
        if c == "\\" and i + 1 < len(line) and line[i + 1] == "|":
            cur += "|"
            i += 2
            continue
        if c == "|":
            cells.append(cur.strip())
            cur = ""
            i += 1
            continue
        cur += c
        i += 1
    cells.append(cur.strip())
    if cells and cells[0] == "":
        cells = cells[1:]
    if cells and cells[-1] == "":
        cells = cells[:-1]
    return cells


def cell_spans(line: str) -> list[tuple[int, int]]:
    """Character spans of every cell of a raw table row (outer pipes excluded)."""
    spans: list[tuple[int, int]] = []
    i = 1 if line.startswith("|") else 0
    start = i
    n = len(line)
    while i < n:
        c = line[i]
        if c == "\\" and i + 1 < n and line[i + 1] == "|":
            i += 2
            continue
        if c == "|":
            spans.append((start, i))
            start = i + 1
            i += 1
            continue
        i += 1
    if start < n:
        spans.append((start, n))
    return spans


def link_parts(inner: str) -> tuple[str, str]:
    """(target, display) of a wikilink body."""
    if "\\|" in inner:
        target, _, display = inner.partition("\\|")
    else:
        target, _, display = inner.partition("|")
    return target.strip(), display.strip()


def row_target(cells: list[str]) -> tuple[str | None, str | None]:
    """(link target, display text) of the first wikilink in a row."""
    if not cells:
        return None, None
    m = LINK_RE.search(cells[0])
    if not m:
        return None, None
    return link_parts(m.group(1))


def escape_cell(text: str) -> str:
    return text.replace("|", "\\|")


def parse_fm_block(block: str) -> dict:
    """Parse a frontmatter block into a dict (same rules as readme_counts)."""
    props: dict = {}
    key = None
    for line in block.split("\n"):
        stripped = line.strip()
        if not stripped or stripped.startswith("#"):
            continue
        if line[:1] not in (" ", "\t"):
            key, _, value = line.partition(":")
            key = key.strip()
            value = value.strip()
            if value.startswith("[") and value.endswith("]"):
                props[key] = [
                    v.strip().strip('"').strip("'")
                    for v in value[1:-1].split(",")
                    if v.strip()
                ]
            else:
                props[key] = value.strip('"').strip("'") if value else []
        elif key is not None:
            item = re.sub(r"^-\s+", "", stripped).rstrip(",").strip('"').strip("'")
            if not item:
                continue
            if isinstance(props.get(key), list):
                props[key].append(item)
            else:
                props[key] = (props.get(key, "") + " " + item).strip()
    return props


# ---------------------------------------------------------------------------
# table model
# ---------------------------------------------------------------------------


class Table:
    """A markdown table inside a README, with the rows we index."""

    def __init__(self, header: list[str] | None, start: int, rows: list[int]):
        self.header = header or []
        self.start = start  # line index of the first row of the block
        self.rows = rows  # line indices of data rows

    @property
    def known(self) -> bool:
        return bool(self.header)

    def col(self, name: str) -> int | None:
        if not self.header:
            return None
        for i, h in enumerate(self.header):
            if h.strip().lower() == name.lower():
                return i
        return None

    @property
    def type_col(self) -> int | None:
        return self.col("entity_type_1")

    @property
    def desc_col(self) -> int | None:
        c = self.col("description")
        if c is not None:
            return c
        for i, h in enumerate(self.header):
            if "justification" in h.strip().lower():
                return i
        return None

    @property
    def entity_col(self) -> int | None:
        if not self.header:
            return 0
        for name in ("entity", "document"):
            c = self.col(name)
            if c is not None:
                return c
        return 0


def is_separator(line: str) -> bool:
    stripped = line.replace("|", "").replace(" ", "")
    return bool(stripped) and "-" in stripped and set(stripped) <= set("-:")


def find_tables(lines: list[str]) -> list[Table]:
    """Locate every markdown table in a README.

    A table is a run of lines starting with ``|``. When the run opens with a
    header row plus a separator the columns are known; otherwise the columns
    are inherited from the closest preceding table with the same column count
    (the vault has headerless continuation blocks).
    """
    tables: list[Table] = []
    last_header: list[str] | None = None
    i = 0
    while i < len(lines):
        if not lines[i].startswith("|"):
            i += 1
            continue
        j = i
        while j < len(lines) and lines[j].startswith("|"):
            j += 1
        block = list(range(i, j))
        if len(block) >= 2 and is_separator(lines[i + 1]):
            header = split_row(lines[i])
            rows = block[2:]
            last_header = header
        else:
            header = None
            rows = block
            if last_header and len(split_row(lines[i])) == len(last_header):
                header = last_header
        tables.append(Table(header, i, rows))
        i = j
    return tables


def section_of(lines: list[str], index: int) -> str:
    """Nearest preceding '##'/'###' heading for a line index."""
    for j in range(index, -1, -1):
        if lines[j].startswith("#"):
            return lines[j].lstrip("#").strip()
    return ""


def table_role(table: Table, section: str) -> str:
    """'document' | 'entity' | 'other' for a table."""
    if table.col("document") is not None:
        return "document"
    if table.col("entity") is not None:
        return "entity"
    if "document" in section.lower():
        return "document"
    if "entit" in section.lower():
        return "entity"
    return "other"


# ---------------------------------------------------------------------------
# audit
# ---------------------------------------------------------------------------


def audit_topic(topic: str, notes: list[Note], resolver: Resolver) -> list[dict]:
    """Return the list of issues found in one topic README."""
    readme = ROOT / "src" / "notes" / topic / "README.md"
    issues: list[dict] = []
    if not readme.exists():
        return [{"topic": topic, "kind": NO_INDEX, "detail": "README.md missing"}]

    text = readme.read_text(encoding="utf-8")
    lines = text.split("\n")
    tables = find_tables(lines)

    # --- frontmatter ---
    m = FRONTMATTER_RE.match(text)
    if not m:
        issues.append({"topic": topic, "kind": NO_FRONTMATTER, "detail": "no YAML frontmatter"})
        fm = {}
    else:
        fm = parse_fm_block(m.group(1))
        for key in ("title", "description", "created", "updated"):
            if key not in fm:
                issues.append(
                    {"topic": topic, "kind": NO_FRONTMATTER, "detail": f"frontmatter missing '{key}'"}
                )

    # --- link resolution over the whole README (not just tables) ---
    body = text[m.end():] if m else text
    for link in LINK_RE.findall(body):
        target = link_parts(link)[0]
        if not target:
            continue
        if resolver.resolve(target):
            continue
        issues.append(
            {"topic": topic, "kind": BROKEN_LINK, "detail": f"[[{target}]] does not resolve"}
        )

    # --- per-table checks ---
    seen: dict[str, int] = {}
    for table in tables:
        section = section_of(lines, table.start)
        role = table_role(table, section)
        for row_idx in table.rows:
            cells = split_row(lines[row_idx])
            target, _ = row_target(cells)
            if not target:
                continue
            if table.known and len(cells) != len(table.header):
                issues.append(
                    {
                        "topic": topic,
                        "kind": MALFORMED_ROW,
                        "detail": f"row for [[{target}]] has {len(cells)} cells, header has {len(table.header)}",
                    }
                )
            canon = resolver.resolve(target) or target
            if role == "entity":
                seen[canon] = seen.get(canon, 0) + 1
                if seen[canon] == 2:
                    issues.append(
                        {
                            "topic": topic,
                            "kind": DUPLICATE_ROW,
                            "detail": f"[[{target}]] listed more than once",
                        }
                    )
            desc_col = table.desc_col
            if desc_col is not None and desc_col < len(cells):
                if not cells[desc_col].strip():
                    issues.append(
                        {
                            "topic": topic,
                            "kind": EMPTY_DESCRIPTION,
                            "detail": f"[[{target}]] has an empty description",
                        }
                    )
            type_col = table.type_col
            if type_col is not None and type_col < len(cells):
                note = next((n for n in notes if n.stem == canon), None)
                if note and note.tags:
                    value = cells[type_col].strip()
                    if value not in note.tags:
                        issues.append(
                            {
                                "topic": topic,
                                "kind": TYPE_MISMATCH,
                                "detail": f"[[{target}]] entity_type_1 '{value}' is not one of the note's tags",
                            }
                        )

    # --- completion ---
    linked = set()
    for table in tables:
        section = section_of(lines, table.start)
        role = table_role(table, section)
        if role == "other":
            continue
        for row_idx in table.rows:
            target, _ = row_target(split_row(lines[row_idx]))
            if target:
                linked.add(resolver.resolve(target) or target)
    for note in notes:
        if note.stem in linked:
            continue
        # the note may be linked from prose outside a table
        if f"[[{note.stem}]]" in body or f"[[{note.stem}\\|" in body:
            continue
        kind = MISSING_DOCUMENT if note.is_document else MISSING_ENTITY
        issues.append({"topic": topic, "kind": kind, "detail": f"[[{note.stem}]] is not indexed"})

    issues.extend(count_issues(topic, text, notes))
    return issues


def count_issues(topic: str, text: str, notes: list[Note]) -> list[dict]:
    """Compare the counts quoted in the README with the notes on disk."""
    issues: list[dict] = []
    n_entities = sum(1 for n in notes if not n.is_document)
    n_documents = sum(1 for n in notes if n.is_document)

    def check(pattern: str, expected: int, label: str) -> None:
        for m in re.finditer(pattern, text):
            got = int(m.group(1))
            if got != expected:
                issues.append(
                    {
                        "topic": topic,
                        "kind": STALE_COUNT,
                        "detail": f"README claims {got} {label}, disk has {expected}",
                    }
                )

    for pattern, label in COUNT_PATTERNS:
        check(pattern, n_entities if label == "entities" else n_documents, label)
    return issues


def audit_all(notes_dir: Path) -> list[dict]:
    topics = load_notes(notes_dir)
    resolver = Resolver(topics, task_stems(ROOT / "src" / "tasks"))
    issues: list[dict] = []
    for topic, notes in topics.items():
        issues.extend(audit_topic(topic, notes, resolver))
    return issues


# ---------------------------------------------------------------------------
# repair
# ---------------------------------------------------------------------------


def pick_tag(note: Note, current: str) -> str:
    """The tag that replaces a non-tag entity_type_1 value."""
    key = norm(current)
    for tag in note.tags:
        if norm(tag) == key:
            return tag
    return note.tags[0] if note.tags else "unclassified"


def replace_cell(line: str, index: int, value: str) -> str:
    """Replace one cell of a raw table row, keeping the column width."""
    spans = cell_spans(line)
    if index >= len(spans):
        return line
    start, end = spans[index]
    width = end - start
    cell = " " + value
    if len(cell) < width:
        cell += " " * (width - len(cell))
    return line[:start] + cell + line[end:]


def rewrite_links(text: str, resolver: Resolver) -> tuple[str, list[tuple[str, str]]]:
    """Point unresolvable wikilinks at their canonical target."""

    changes: list[tuple[str, str]] = []

    def repl_tracked(m):
        target, display = link_parts(m.group(1))
        canon = resolver.resolve(target)
        if not canon or canon == target:
            return m.group(0)
        changes.append((target, canon))
        if display:
            return f"[[{canon}\\|{display}]]"
        return f"[[{canon}]]"

    return LINK_RE.sub(repl_tracked, text), changes


def escape_link_pipes(cell: str) -> str:
    """Escape the display pipe of a wikilink so it cannot split a table cell."""

    def repl(m):
        inner = m.group(1)
        if "\\|" in inner or "|" not in inner:
            return m.group(0)
        target, _, display = inner.partition("|")
        return f"[[{target}\\|{display}]]"

    return LINK_RE.sub(repl, cell)


def fix_row_shape(lines: list[str], tables: list[Table], log: list[str]) -> None:
    """Repair rows whose cells do not line up with their table header."""
    for table in tables:
        if not table.header:
            continue
        ncols = len(table.header)
        for row_idx in table.rows:
            raw = lines[row_idx]
            escaped = escape_link_pipes(raw)
            spans = cell_spans(escaped)
            if len(spans) < 2:
                continue
            cells = [escaped[s:e].strip() for s, e in spans]
            original = [raw[s:e].strip() for s, e in cell_spans(raw)]
            if len(cells) != ncols:
                # cells that spilled past the last column belong to it; their
                # separators have to be escaped so the cell does not split again
                cells = cells[: ncols - 1] + [" \\| ".join(cells[ncols - 1:])]
                lines[row_idx] = "| " + " | ".join(cells) + " |"
                log.append("repaired a malformed table row")
                continue
            if cells == original:
                # only the escaping changed - keep the row's own layout
                if escaped != raw:
                    lines[row_idx] = escaped
                    log.append("escaped a wikilink pipe in a table row")
                continue
            lines[row_idx] = "| " + " | ".join(cells) + " |"
            log.append("repaired a malformed table row")


def section_score(heading: str, note: Note) -> int:
    """How well a section heading matches a note (for placing new rows)."""
    words = [w for w in re.split(r"[^A-Za-z0-9]+", heading.lower()) if w]

    def key(word: str) -> str:
        return re.sub(r"[^a-z0-9]", "", word.lower())

    signals = [note.stem, *note.aliases, *note.tags]
    score = 0
    for signal in signals:
        ks = key(signal)
        if len(ks) < 4:
            continue
        for word in words:
            kw = key(word)
            if not kw:
                continue
            if kw.startswith(ks[:6]) or ks.startswith(kw[:6]):
                score += 1
                break
    return score


def build_row(header: list[str], note: Note) -> str:
    """A table row for a note, shaped by the table's header."""
    cells: list[str] = []
    for name in header:
        col = name.strip().lower()
        if col == "entity_type_1":
            cells.append(note.entity_type)
        elif "justification" in col or "description" in col:
            cells.append(escape_cell(note.description))
        elif col in ("entity", "document", "filename", "file", "note"):
            label = note.title or note.stem
            cells.append(f"[[{note.stem}\\|{label}]]" if label != note.stem else f"[[{note.stem}]]")
        elif col == "source":
            cells.append(escape_cell(str(note.fm.get("source") or "-")))
        else:
            cells.append("-")
    return "| " + " | ".join(cells) + " |"


def fix_topic(topic: str, notes: list[Note], by_stem: dict[str, Note], resolver: Resolver) -> list[str]:
    """Apply every mechanical repair to one topic README."""
    path = ROOT / "src" / "notes" / topic / "README.md"
    if not path.exists():
        return []
    log: list[str] = []
    text = path.read_text(encoding="utf-8")
    original = text

    text, changes = rewrite_links(text, resolver)
    for old, new in changes:
        log.append(f"link [[{old}]] -> [[{new}]]")

    lines = text.split("\n")
    tables = find_tables(lines)
    fix_row_shape(lines, tables, log)

    # --- entity_type_1 and empty descriptions ---
    for table in tables:
        type_col, desc_col = table.type_col, table.desc_col
        if type_col is None and desc_col is None:
            continue
        for row_idx in table.rows:
            cells = split_row(lines[row_idx])
            target, _ = row_target(cells)
            if not target:
                continue
            note = by_stem.get(resolver.resolve(target) or target)
            if not note:
                continue
            if type_col is not None and type_col < len(cells):
                value = cells[type_col].strip()
                if value not in note.tags:
                    new = pick_tag(note, value)
                    lines[row_idx] = replace_cell(lines[row_idx], type_col, new)
                    log.append(f"[[{target}]] entity_type_1 {value!r} -> {new!r}")
            if desc_col is not None and desc_col < len(cells):
                if not cells[desc_col].strip() and note.description:
                    lines[row_idx] = replace_cell(
                        lines[row_idx], desc_col, escape_cell(note.description)
                    )
                    log.append(f"[[{target}]] description filled from frontmatter")

    # --- duplicate rows ---
    seen: set[str] = set()
    drop: set[int] = set()
    for table in tables:
        if table_role(table, section_of(lines, table.start)) != "entity":
            continue
        for row_idx in table.rows:
            cells = split_row(lines[row_idx])
            if not cells:
                continue
            targets = [link_parts(m.group(1))[0] for m in LINK_RE.finditer(cells[0])]
            if not targets:
                continue
            canons = [resolver.resolve(t) or t for t in targets]
            key = canons[0]
            if key in seen:
                drop.add(row_idx)
                log.append(f"dropped duplicate row [[{targets[0]}]]")
                continue
            seen.add(key)
            if len(set(canons)) < len(canons):
                kept, done = None, set()
                for m in LINK_RE.finditer(cells[0]):
                    canon = resolver.resolve(link_parts(m.group(1))[0]) or m.group(1)
                    if canon in done:
                        continue
                    done.add(canon)
                    kept = kept or m.group(0)
                if kept and kept != cells[0]:
                    lines[row_idx] = lines[row_idx].replace(cells[0], kept, 1)
                    log.append(f"collapsed repeated links in row [[{targets[0]}]]")

    lines = [line for i, line in enumerate(lines) if i not in drop]

    # --- missing notes ---
    tables = find_tables(lines)
    entity_tables = [
        t for t in tables if table_role(t, section_of(lines, t.start)) == "entity"
    ]
    document_tables = [
        t for t in tables if table_role(t, section_of(lines, t.start)) == "document"
    ]
    body = "\n".join(lines)
    linked: set[str] = set()
    for table in entity_tables + document_tables:
        for row_idx in table.rows:
            target, _ = row_target(split_row(lines[row_idx]))
            if target:
                linked.add(resolver.resolve(target) or target)

    pending: list[tuple[Note, Table]] = []
    for note in notes:
        if note.stem in linked:
            continue
        if f"[[{note.stem}]]" in body or f"[[{note.stem}\\|" in body:
            continue
        if note.is_document:
            if document_tables:
                pending.append((note, document_tables[0]))
        elif entity_tables:
            best, best_score = None, 0
            for table in entity_tables:
                score = section_score(section_of(lines, table.start), note)
                if score > best_score:
                    best, best_score = table, score
            pending.append((note, best or entity_tables[-1]))

    inserts: list[tuple[int, str]] = []
    for note, table in pending:
        if not table.header:
            log.append(f"SKIPPED [[{note.stem}]]: no table with known columns")
            continue
        row = build_row(table.header, note)
        pos = table.rows[-1] + 1 if table.rows else table.start + 2
        if len(entity_tables) == 1 and not note.is_document:
            # single flat entity table: keep it sorted by display text
            key = note.title.lower()
            pos = table.rows[-1] + 1 if table.rows else table.start + 2
            for row_idx in table.rows:
                cells = split_row(lines[row_idx])
                target, display = row_target(cells)
                if not target:
                    continue
                other = (display or target).lower()
                if other > key:
                    pos = row_idx
                    break
        inserts.append((pos, row))
        log.append(f"added row for [[{note.stem}]]")

    for pos, row in sorted(inserts, key=lambda item: -item[0]):
        lines.insert(pos, row)

    # --- counts ---
    n_entities = sum(1 for n in notes if not n.is_document)
    n_documents = sum(1 for n in notes if n.is_document)
    text = "\n".join(lines)
    for pattern, label in COUNT_PATTERNS:
        expected = n_entities if label == "entities" else n_documents

        def repl(m, expected=expected):
            if int(m.group(1)) != expected:
                log.append(f"count {label} {m.group(1)} -> {expected}")
            return m.group(0).replace(m.group(1), str(expected))

        text = re.sub(pattern, repl, text)

    if text != original:
        text = bump_updated(text)
        path.write_text(text, encoding="utf-8")
    return log


def bump_updated(text: str) -> str:
    """Refresh the frontmatter ``updated:`` field."""
    today = datetime.now().strftime("%Y-%m-%d")
    m = FRONTMATTER_RE.match(text)
    if not m:
        return text
    block = m.group(1)
    if re.search(r"^updated:", block, re.MULTILINE):
        new_block = re.sub(r"^updated:.*$", f"updated: {today}", block, count=1, flags=re.MULTILINE)
    else:
        new_block = block + f"\nupdated: {today}"
    return "---\n" + new_block + "\n---\n" + text[m.end():]


def fix_all(notes_dir: Path) -> dict[str, list[str]]:
    topics = load_notes(notes_dir)
    by_stem: dict[str, Note] = {}
    for notes in topics.values():
        for note in notes:
            by_stem.setdefault(note.stem, note)
    resolver = Resolver(topics, task_stems(ROOT / "src" / "tasks"))
    out: dict[str, list[str]] = {}
    for topic, notes in topics.items():
        log = fix_topic(topic, notes, by_stem, resolver)
        if log:
            out[topic] = log
    return out


# ---------------------------------------------------------------------------
# reporting
# ---------------------------------------------------------------------------


def report(issues: list[dict]) -> None:
    if not issues:
        print("OK: every topic README indexes its notes correctly.")
        return
    by_topic: dict[str, list[dict]] = {}
    for issue in issues:
        by_topic.setdefault(issue["topic"], []).append(issue)
    for topic in sorted(by_topic):
        print(f"\n{topic}")
        for issue in by_topic[topic]:
            print(f"  [{issue['kind']}] {issue['detail']}")
    print(f"\n{len(issues)} issue(s) across {len(by_topic)} topic(s).")


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Audit topic README indexes against the notes they describe."
    )
    parser.add_argument(
        "--notes-dir",
        default=str(ROOT / "src" / "notes"),
        help="Directory containing topics (default: src/notes)",
    )
    parser.add_argument(
        "--fix",
        action="store_true",
        help="repair what can be repaired mechanically (writes the READMEs)",
    )
    args = parser.parse_args()

    notes_dir = Path(args.notes_dir)
    if not notes_dir.is_dir():
        print(f"Notes directory not found: {notes_dir}")
        return 2

    if args.fix:
        for topic, log in fix_all(notes_dir).items():
            print(f"\n{topic}")
            for entry in log:
                print(f"  {entry}")

    issues = audit_all(notes_dir)
    report(issues)
    return 1 if issues else 0


if __name__ == "__main__":
    raise SystemExit(main())
