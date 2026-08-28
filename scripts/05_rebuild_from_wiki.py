#!/usr/bin/env python3
"""Rebuild a knowledge graph from Obsidian wikilinks in src/notes/**/*.md.

This is the wiki-graph counterpart to scripts/03_rebuild_from_triples.py.
Instead of reading per-topic _triples.json, it parses `[[wiki links]]` out of
every note body and builds a directed graph where:

  - node  = a note (id = norm(filename), label = frontmatter title)
  - edge  = a wikilink from one note to another (relation "links_to",
            weight = number of times the source note links the target)

Both graphs key nodes by norm(label), so the *same entity* gets the identical
id in the triples graph and the wiki graph, and the two can be joined directly
(see scripts/05_build_combined.py for the diff).

The schema of the emitted wiki-out/wiki-graph.json is byte-identical to
graphify-out/graph.json (same node/edge attributes + metadata), so the existing
04_ analysis scripts work unchanged via --graph:

  uv run --with networkx --with scipy python3 scripts/04_node_analysis.py \
      --graph wiki-out/wiki-graph.json --sources sirt1 nad --targets mtorc1
  uv run --with networkx python3 scripts/04_link_prediction.py \
      --graph wiki-out/wiki-graph.json --out wiki-out/wiki-link-prediction.json
  uv run python3 scripts/04_role_query.py \
      --roles-file wiki-out/wiki-data/node_roles.json --role Spreader --top 10

Run:  uv run --with graphifyy --with networkx --with scipy \
          python3 scripts/05_rebuild_from_wiki.py
"""

from __future__ import annotations

import json
import re
import subprocess
import sys
import time
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path

import networkx as nx
from graphify.analyze import god_nodes, suggest_questions, surprising_connections
from graphify.cluster import cluster, score_all
from graphify.export import to_json
from graphify.report import generate

# Shared graph-building helpers (norm, parse_wikilink_target, enrich_graph_metrics,
# inject_graph_metadata, export_roles_json) -- kept in sync with 03_rebuild.
sys.path.insert(0, str(Path(__file__).resolve().parent))
from _graph_common import (  # noqa: E402
    enrich_graph_metrics,
    export_roles_json,
    export_wiki_three_json,
    inject_graph_metadata,
    norm,
    parse_wikilink_target,
    write_web_version,
)

ROOT = Path(__file__).resolve().parent.parent  # repo root
NOTES_DIR = ROOT / "src" / "notes"  # topic-scoped entity notes
WIKI_OUT = ROOT / "wiki-out"  # wiki-graph analysis artifacts
WIKI_GRAPH = WIKI_OUT / "wiki-graph.json"
WIKI_LABELS = WIKI_OUT / ".wiki_labels.json"  # community-label continuity
WIKI_ROLES = WIKI_OUT / "wiki-data" / "node_roles.json"
DATA_DIR = ROOT / "web" / "public" / "data"  # deployed three-graph viewer data

# Filename prefix used for source-document notes. Links often reference a
# document by its bare title (the part after this prefix), so resolution
# registers both the full stem and the prefix-stripped form.
DOC_PREFIX = "_document_ - "


def strip_doc_prefix(s: str) -> str:
    """Return `s` with the leading `_document_ - ` filename prefix removed."""
    s = s.strip()
    if s.startswith(DOC_PREFIX):
        return s[len(DOC_PREFIX):].strip()
    return s


# ----------------------------------------------------------------------
# Frontmatter parsing (minimal; avoids a hard pyyaml dependency)
# ----------------------------------------------------------------------

def parse_frontmatter(text: str) -> dict:
    """Parse a YAML frontmatter block into a flat dict.

    Handles scalar fields (title, description, created, updated, ...) and
    list fields (aliases, tags) in either inline `[a, b]` or block `- a`
    form. Good enough for the handful of fields this builder needs; it does
    not aim to be a general YAML parser."""
    fm: dict = {}
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        return fm
    end = None
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            end = i
            break
    if end is None:
        return fm
    block = lines[1:end]
    i = 0
    while i < len(block):
        line = block[i]
        if not line.strip() or line.lstrip().startswith("#"):
            i += 1
            continue
        m = re.match(r"^([A-Za-z_][\w ]*):\s*(.*)$", line)
        if not m:
            i += 1
            continue
        key = m.group(1).strip()
        val = m.group(2).strip()
        if val == "":
            # block list: subsequent "- item" lines
            items = []
            j = i + 1
            while j < len(block) and re.match(r"^\s*-\s+", block[j]):
                item = re.sub(r"^\s*-\s+", "", block[j]).strip().strip("\"'")
                if item:
                    items.append(item)
                j += 1
            fm[key] = items
            i = j
        elif val.startswith("["):
            inner = val.strip("[]").strip()
            fm[key] = (
                [x.strip().strip("\"'") for x in inner.split(",") if x.strip()]
                if inner
                else []
            )
            i += 1
        else:
            fm[key] = val.strip().strip("\"'")
            i += 1
    return fm


def strip_frontmatter(text: str) -> str:
    """Return the note body with the leading --- ... --- block removed."""
    lines = text.splitlines(keepends=True)
    if not lines or lines[0].strip() != "---":
        return text
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            return "".join(lines[i + 1 :])
    return text


def strip_code_fences(text: str) -> str:
    """Remove fenced code blocks (``` ... ```) so demonstrative links inside
    callouts/examples don't create false edges."""
    return re.sub(r"```.*?```", " ", text, flags=re.DOTALL)


def snippet(body: str, inner: str, width: int = 200) -> str:
    """Short context window around the first occurrence of a wikilink."""
    idx = body.find("[[")
    # locate the specific inner text if present
    pos = body.find(inner)
    if pos != -1:
        idx = pos
    if idx == -1:
        return ""
    start = max(0, idx - 80)
    end = min(len(body), idx + len(inner) + 80)
    return re.sub(r"\s+", " ", body[start:end]).strip()[:width]


# ----------------------------------------------------------------------
# Graph construction
# ----------------------------------------------------------------------

def build_graph() -> tuple[nx.DiGraph, Counter, int, Counter, Counter]:
    """Walk all notes, resolve wikilinks, return (G, orphan_counts, collisions,
    doc_refs, task_refs).

    Two passes:
      Pass 1 -- register every kept note as a node and build the
               norm(title|alias) -> note_id resolution map.
      Pass 2 -- resolve wikilinks against that map into edges.
    Creating all nodes up front (rather than lazily during edge resolution)
    is required: a note processed early may link to a note processed later,
    and a node must already exist in G before its incoming edges are tested.

    - Edges are added only when the link target resolves to an existing note
      (via filename stem or any frontmatter alias/title). Unresolved links are
      tallied in `orphan_counts` for the Orphan Link Resolution workflow.
    - Node ids use norm(stem); collisions (two notes mapping to the same id)
      keep the first and are counted.
    - Source-document notes (filenames starting `_document_`) are excluded from
      the entity graph (mirrors the triples build pruning document-title
      nodes). Links that reference them are tallied separately in `doc_refs`
      so they do not pollute the entity-orphan report.
    """
    # Source-document names are collected so links to them can be classified as
    # document-references (kept out of the entity graph AND the orphan report).
    doc_note_norms: set[str] = set()
    note_files: list[tuple[Path, str, str]] = []
    for p in sorted(NOTES_DIR.rglob("*.md")):
        if p.name == "README.md":
            continue
        # Source-document notes use either the `_document_ - ` prefix or a
        # `.full` doc-copy suffix (e.g. fenbendazole_3725.full.md). Both are
        # excluded from the entity graph.
        if p.stem.startswith("_document_") or p.stem.endswith(".full"):
            for c in (p.stem, strip_doc_prefix(p.stem)):
                if c:
                    doc_note_norms.add(norm(c))
            continue
        nid = norm(p.stem)
        note_files.append((p, p.stem, nid))

    # resolution map: norm(title|alias) -> note_id
    alias_map: dict[str, str] = {}
    note_meta: dict[str, dict] = {}
    collisions = 0
    used_ids: set[str] = set()
    G = nx.DiGraph()
    for p, stem, nid in note_files:
        if nid in used_ids:
            collisions += 1
            continue
        used_ids.add(nid)
        fm = parse_frontmatter(p.read_text(encoding="utf-8"))
        title = fm.get("title") or stem
        note_meta[nid] = {"label": title, "fm": fm, "path": p, "stem": stem}
        # Resolution keys, in Obsidian's resolution order:
        #   1. filename stem (primary -- [[COMT]] resolves to COMT.md even
        #      when its `title` frontmatter is "COMT (Catechol-...)");
        #   2. the `title` frontmatter property (newer Obsidian resolves it);
        #   3. explicit `aliases`;
        #   4. the stem/title/alias with the `_document_ - ` prefix stripped,
        #      so links that reference a source document by its bare title
        #      (e.g. [[Sirtuins in Health and Disease]]) resolve to the
        #      `_document_ - sirtuins ... s41392-...md` note.
        for c in [stem, title] + list(fm.get("aliases", [])):
            if not c:
                continue
            cn = norm(c)
            if cn and cn not in alias_map:
                alias_map[cn] = nid
            stripped = strip_doc_prefix(c)
            if stripped and stripped != c:
                scn = norm(stripped)
                if scn and scn not in alias_map:
                    alias_map[scn] = nid
        # Create the node now, before any edge resolution (see docstring).
        G.add_node(
            nid,
            label=title,
            norm_label=nid,
            file_type="concept",
            source_file=str(p.relative_to(ROOT)),
            source_triples=str(p.relative_to(ROOT)),
            description=fm.get("description", ""),
            created=fm.get("created", ""),
            updated=fm.get("updated", ""),
        )
        if fm.get("description_zh_TW"):
            G.nodes[nid]["description_zh_TW"] = fm["description_zh_TW"]

    edge_records: dict[tuple[str, str], dict] = {}
    orphan_counts: Counter = Counter()
    doc_refs: Counter = Counter()
    task_refs: Counter = Counter()

    for p, stem, nid in note_files:
        if nid not in used_ids:
            continue  # collision-skipped note (its links are dropped)
        meta = note_meta[nid]
        text = p.read_text(encoding="utf-8")
        body = strip_code_fences(strip_frontmatter(text))
        links = re.findall(r"\[\[([^\[\]]+)\]\]", body)

        target_counts: Counter = Counter()
        target_ctx: dict[str, str] = {}
        for lnk in links:
            tnorm = parse_wikilink_target(lnk)
            if not tnorm:
                continue
            target_counts[tnorm] += 1
            if tnorm not in target_ctx:
                target_ctx[tnorm] = snippet(body, lnk)

        for tnorm, cnt in target_counts.items():
            if tnorm == nid:
                continue
            dst = alias_map.get(tnorm)
            if dst is None or dst not in G:
                # Unresolved link. Classify it before calling it an entity gap:
                #   - source-document notes (doc_note_norms) -> document ref
                #   - task-output references (task_ prefixed) -> task ref
                #   - otherwise it is a genuine entity-orphan gap
                if tnorm in doc_note_norms:
                    doc_refs[tnorm] += cnt
                elif tnorm.startswith("task_"):
                    task_refs[tnorm] += cnt
                else:
                    orphan_counts[tnorm] += cnt
                continue
            key = (nid, dst)
            rec = edge_records.get(key)
            if rec is None:
                edge_records[key] = {
                    "weight": cnt,
                    "context": target_ctx.get(tnorm, ""),
                }
            else:
                rec["weight"] += cnt

    for (src, dst), rec in edge_records.items():
        if src not in G or dst not in G:
            continue
        w = rec["weight"]
        G.add_edge(
            src,
            dst,
            relation="links_to",
            confidence="EXTRACTED",
            confidence_score=1.0,
            weight=w,
            context=rec["context"][:240],
            context_zh_TW="",
            created="",
            updated="",
        )

    # Safety net: drop any residual self-loops (e.g. a note linked to one of
    # its own aliases, or id-collision mappings) before metric computation.
    self_loops = list(nx.selfloop_edges(G))
    if self_loops:
        G.remove_edges_from(self_loops)
        print(f"  Removed {len(self_loops)} self-loop edge(s)")

    return G, orphan_counts, collisions, doc_refs, task_refs


# ----------------------------------------------------------------------
# Community-label continuity (mirrors 03_rebuild)
# ----------------------------------------------------------------------

def load_label_continuity() -> tuple[dict, dict[int, list[str]]]:
    old_labels = (
        json.loads(WIKI_LABELS.read_text(encoding="utf-8"))
        if WIKI_LABELS.exists()
        else {}
    )
    old_comm: dict[int, list[str]] = defaultdict(list)
    if WIKI_GRAPH.exists():
        for n in json.load(open(WIKI_GRAPH, encoding="utf-8"))["nodes"]:
            if (c := n.get("community")) is not None:
                old_comm[c].append(n["id"])
    return old_labels, old_comm


def assign_labels(
    G: nx.DiGraph,
    communities: dict[int, list[str]],
    old_labels: dict,
    old_comm: dict[int, list[str]],
) -> dict[int, str]:
    new_labels: dict[int, str] = {}
    for cid, nodes in communities.items():
        best_old, best_n = None, 0
        for ocid, onodes in old_comm.items():
            inter = len(set(nodes) & set(onodes))
            if inter > best_n:
                best_n, best_old = inter, ocid
        if best_old is not None and best_old in old_labels and best_n > 0:
            new_labels[cid] = old_labels[best_old]
        else:
            deg = sorted(nodes, key=lambda n: G.degree(n), reverse=True)
            new_labels[cid] = G.nodes[deg[0]]["label"] if deg else f"Community {cid}"
    return new_labels


def git_commit() -> str:
    try:
        return subprocess.run(
            ["git", "rev-parse", "--short", "HEAD"],
            cwd=str(ROOT),
            capture_output=True,
            text=True,
            timeout=10,
        ).stdout.strip()
    except Exception:
        return ""


# ----------------------------------------------------------------------
# Main
# ----------------------------------------------------------------------

def main() -> int:
    t_start = time.time()
    print("=== Building wiki graph from Obsidian wikilinks ===")
    G, orphan_counts, collisions, doc_refs, task_refs = build_graph()
    print(
        f"Raw: {G.number_of_nodes()} entity notes, {G.number_of_edges()} resolved links, "
        f"{len(doc_refs)} doc-ref targets, {len(task_refs)} task-ref targets, "
        f"{len(orphan_counts)} orphan targets, {collisions} id collisions"
    )

    if G.number_of_nodes() == 0:
        print("No notes found under src/notes/ -- aborting.")
        return 1

    old_labels, old_comm = load_label_continuity()
    communities = cluster(G)
    new_labels = assign_labels(G, communities, old_labels, old_comm)
    cohesion = score_all(G, communities)
    gods = god_nodes(G)
    surprises = surprising_connections(G, communities)
    questions = suggest_questions(G, communities, new_labels)

    graph_meta = enrich_graph_metrics(
        G, communities, new_labels, cohesion, gods, surprises
    )

    # --- write GRAPH_REPORT.md (mirrors 03_rebuild) ---
    total_words = 0
    docs = []
    for p in sorted(NOTES_DIR.rglob("*.md")):
        if p.name == "README.md":
            continue
        try:
            total_words += len(p.read_text(encoding="utf-8").split())
            docs.append(str(p.relative_to(ROOT)))
        except OSError:
            pass
    detection = {
        "total_files": len(docs),
        "total_words": total_words,
        "warning": None,
        "files": {"document": docs},
    }
    report = generate(
        G,
        communities,
        cohesion,
        new_labels,
        gods,
        surprises,
        detection,
        {"input": 0, "output": 0},
        str(ROOT),
        suggested_questions=questions,
    )
    WIKI_OUT.mkdir(parents=True, exist_ok=True)
    (WIKI_OUT / "GRAPH_REPORT.md").write_text(report, encoding="utf-8")

    # --- persist community labels for next-run continuity ---
    WIKI_LABELS.write_text(
        json.dumps({str(k): v for k, v in new_labels.items()}, ensure_ascii=False),
        encoding="utf-8",
    )

    # --- emit the canonical node-link graph ---
    wrote = to_json(
        G,
        communities,
        str(WIKI_GRAPH),
        force=True,
        built_at_commit=git_commit() or None,
        community_labels=new_labels,
    )
    print("to_json wrote:", wrote)
    inject_graph_metadata(WIKI_GRAPH, graph_meta)

    # --- standalone role artifact (for 04_role_query.py --roles-file) ---
    graph = json.loads(WIKI_GRAPH.read_text(encoding="utf-8"))
    export_roles_json(graph, new_labels, WIKI_ROLES, source_graph=str(WIKI_GRAPH))

    # --- web-data export: wiki-prefixed files for the three-graph viewer ---
    # (triples / wiki / combined toggle). Also bumps web/public/data/version.json so
    # browsers re-fetch the new artifacts. Triples web data is NOT regenerated
    # here (that stays owned by scripts/03_rebuild_from_triples.py).
    export_wiki_three_json(graph, new_labels, DATA_DIR)
    write_web_version(DATA_DIR)

    # --- orphan-link report (feeds Orphan Link Resolution workflow) ---
    # Document- and task-reference links (to _document_ source notes / task
    # outputs, excluded from the entity graph) are reported separately so they
    # don't masquerade as entity gaps.
    top_orphans = orphan_counts.most_common(50)
    orphan_doc = {
        "generated_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "node_count": G.number_of_nodes(),
        "edge_count": G.number_of_edges(),
        "reference_links": {
            "document_notes": {
                "total_targets": len(doc_refs),
                "total_links": int(sum(doc_refs.values())),
            },
            "task_outputs": {
                "total_targets": len(task_refs),
                "total_links": int(sum(task_refs.values())),
            },
        },
        "total_orphan_targets": len(orphan_counts),
        "total_orphan_links": int(sum(orphan_counts.values())),
        "top_targets": [
            {"norm_id": k, "raw": k, "link_count": v} for k, v in top_orphans
        ],
    }
    (WIKI_OUT / "orphan_links.json").write_text(
        json.dumps(orphan_doc, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    dt = time.time() - t_start
    print(
        f"FINAL: {G.number_of_nodes()} entity nodes, {G.number_of_edges()} edges, "
        f"{len(communities)} communities  ({dt:.1f}s)"
    )
    print(f"Wrote: {WIKI_GRAPH}")
    print(f"Wrote: {WIKI_ROLES}")
    print(f"Wrote: {WIKI_OUT / 'orphan_links.json'}")
    print(f"Wrote: {WIKI_OUT / 'GRAPH_REPORT.md'}")
    if doc_refs:
        print(
            f"Document-reference links (excluded): {len(doc_refs)} "
            f"({int(sum(doc_refs.values()))} total)"
        )
    if task_refs:
        print(
            f"Task-reference links (excluded): {len(task_refs)} "
            f"({int(sum(task_refs.values()))} total)"
        )
    if orphan_counts:
        print(
            f"Orphan links (unresolved targets): {len(orphan_counts)} "
            f"({int(sum(orphan_counts.values()))} total) -- see orphan_links.json"
        )

    # --- regenerate the combined (triples + wiki) web dataset ---
    try:
        subprocess.run(
            [sys.executable, str(ROOT / "scripts" / "05_build_combined.py")],
            cwd=str(ROOT),
            check=True,
            timeout=300,
        )
    except Exception as e:  # noqa: BLE001
        print(
            f"combined build skipped ({e}); run manually: "
            "uv run --with networkx python3 scripts/05_build_combined.py"
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
