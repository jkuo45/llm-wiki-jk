import argparse
import glob
import json
import os
import re
import shutil
import subprocess
import urllib.parse
from collections import Counter, OrderedDict
from datetime import datetime


def format_number(n):
    """Return an integer formatted with thousands separators (e.g. 12,345)."""
    return f"{n:,}"


def get_git_commit_date(filepath, repo_root):
    """Get the last commit date for a file from git history."""
    try:
        result = subprocess.run(
            ["git", "log", "-1", "--format=%aI", "--", filepath],
            capture_output=True,
            text=True,
            cwd=repo_root,
        )
        if result.returncode == 0 and result.stdout.strip():
            return datetime.fromisoformat(result.stdout.strip())
    except Exception:
        pass
    return None


def format_size(size_bytes):
    """Return a file size string in MB only."""
    return f"{size_bytes / (1024**2):.2f} MB"


def get_timestamp():
    # Using local timezone with astimezone() as requested.
    # The project timestamp format is %d_%b_%Y %I:%M %p %Z
    now = datetime.now().astimezone()
    return now.strftime("%d_%b_%Y %I:%M %p %Z").upper()


def count_words(filepath):
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            return len(content.split())
    except Exception:
        return 0


MARKER_RE = re.compile(
    r"<!--\s*GENERATED:\s*(\w+)\s*-->\n.*?\n<!--\s*END\s+GENERATED:\s*\1\s*-->",
    re.DOTALL,
)


def make_marker_block(name, content):
    return f"<!-- GENERATED: {name} -->\n{content}\n<!-- END GENERATED: {name} -->"


def update_section(existing, name, content):
    block = make_marker_block(name, content)
    pattern = re.compile(
        rf"<!--\s*GENERATED:\s*{re.escape(name)}\s*-->\n.*?\n<!--\s*END\s+GENERATED:\s*{re.escape(name)}\s*-->",
        re.DOTALL,
    )
    if pattern.search(existing):
        return pattern.sub(block, existing, count=1)
    return existing.rstrip() + "\n\n" + block + "\n"


def has_markers(content):
    return bool(MARKER_RE.search(content))


def get_dir_size_and_count(directory):
    total_size = 0
    total_files = 0
    total_words = 0
    for dirpath, dirnames, filenames in os.walk(directory):
        # Optional: skip hidden directories like .git if any
        dirnames[:] = [d for d in dirnames if not d.startswith(".")]
        for f in filenames:
            if not f.startswith("."):
                fp = os.path.join(dirpath, f)
                if not os.path.islink(fp):
                    total_size += os.path.getsize(fp)
                    total_files += 1
                    if f.endswith(".md"):
                        total_words += count_words(fp)
    return total_files, total_size, total_words


def load_triples(topic_path):
    """Load triples from _triples_<topic>.json"""
    triples_file = os.path.join(
        topic_path, f"_triples_{os.path.basename(topic_path)}.json"
    )
    if os.path.exists(triples_file):
        with open(triples_file, "r", encoding="utf-8") as f:
            return json.load(f)
    return []


def compute_triple_metrics(triples, exclude_has_type=True):
    """Compute metrics from triples, optionally excluding has_type."""
    if exclude_has_type:
        triples = [t for t in triples if t.get("predicate") != "has_type"]

    if not triples:
        return {
            "nodes": 0,
            "edges": 0,
            "predicates": 0,
            "high_confidence": 0,
            "high_pct": 0.0,
            "top_subjects": [],
            "top_objects": [],
            "top_predicates": [],
        }

    # Collect all entities (subjects + objects)
    entities = set()
    for t in triples:
        entities.add(t.get("subject", ""))
        entities.add(t.get("object", ""))

    # Count predicates
    predicate_counts = Counter(t.get("predicate", "") for t in triples)

    # Count subjects and objects
    subject_counts = Counter(t.get("subject", "") for t in triples)
    object_counts = Counter(t.get("object", "") for t in triples)

    # High confidence count
    high_conf = sum(1 for t in triples if t.get("confidence") == "high")

    return {
        "nodes": len(entities),
        "edges": len(triples),
        "predicates": len(predicate_counts),
        "high_confidence": high_conf,
        "high_pct": (high_conf / len(triples) * 100) if triples else 0,
        "top_subjects": subject_counts.most_common(5),
        "top_objects": object_counts.most_common(5),
        "top_predicates": predicate_counts.most_common(5),
    }


def format_top_items(items, limit=5):
    """Format top items as string."""
    if not items:
        return "N/A"
    return ", ".join(f"{k} ({v})" for k, v in items[:limit])


# --- Web artifacts: task outputs for the reader panel -----------------------
# While building the README this script also emits web/public/data/tasks.json and
# copies task markdown into web/public/tasks/ so the site's reader can render them
# client-side. tasks.json mirrors articles.json's shape ({id, langs}) with a
# kind: "task" discriminator; dates prefer frontmatter, then git commit date,
# then filesystem mtime.

FRONTMATTER_RE = re.compile(r"\A---\s*\n(.*?)\n---\s*\n", re.DOTALL)
ZH_TW_SUFFIX_RE = re.compile(r"[_-]zh[-_]tw$", re.IGNORECASE)
EN_US_SUFFIX_RE = re.compile(r"[_-]en[-_]us$", re.IGNORECASE)


def parse_frontmatter(filepath):
    """Parse a simple YAML frontmatter block (scalar keys + flat lists)."""
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            head = f.read(8192)
    except Exception:
        return {}
    m = FRONTMATTER_RE.match(head)
    if not m:
        return {}
    props = {}
    key = None
    for line in m.group(1).splitlines():
        stripped = line.strip()
        if not stripped or stripped.startswith("#"):
            continue
        if not line[:1] in (" ", "\t"):
            key, _, value = line.partition(":")
            key = key.strip()
            value = value.strip()
            if value.startswith("[") and value.endswith("]"):
                inner = value[1:-1]
                props[key] = [v.strip().strip("\"'") for v in inner.split(",") if v.strip()]
            else:
                props[key] = value.strip("\"'") if value else []
        elif key is not None:
            item = re.sub(r"^-\s+", "", stripped).rstrip(",").strip("\"'")
            if isinstance(props[key], list) and item:
                props[key].append(item)
    return props


def parse_iso_date(value, fallback=None):
    """Parse a YYYY-MM-DD (or full ISO) string to an aware datetime."""
    try:
        return datetime.fromisoformat(str(value)[:10]).astimezone()
    except Exception:
        return fallback


def task_id_stem(basename):
    """Split a task filename stem into (logical id stem, language)."""
    stem = re.sub(r"\.md$", "", basename)
    lang = "en-US"
    if ZH_TW_SUFFIX_RE.search(stem):
        lang = "zh-TW"
        stem = ZH_TW_SUFFIX_RE.sub("", stem)
    else:
        # Strip an explicit en-US suffix too so pairs like
        # foo_en-US.md / foo_zh-TW.md group as one logical task.
        stem = EN_US_SUFFIX_RE.sub("", stem)
    return stem, lang


def scan_web_zh_tasks(args):
    """Scan hand-maintained zh-TW translations in web/public/tasks/zh-TW/.

    Translated task outputs are stored web-only (not in src/tasks), so they
    are discovered directly at their serving location and registered in
    tasks.json without being copied. Marked `in_place` so build_web_tasks
    skips the copy step for them.
    """
    out = []
    zh_dir = os.path.join(args.web_tasks_dir, "zh-TW")
    if not os.path.isdir(zh_dir):
        return out
    for dirpath, dirnames, filenames in os.walk(zh_dir):
        dirnames[:] = [d for d in dirnames if not d.startswith(".")]
        for fname in sorted(filenames):
            if fname.endswith(".md") and not fname.startswith("."):
                fpath = os.path.join(dirpath, fname)
                mtime_dt = datetime.fromtimestamp(
                    os.path.getmtime(fpath)
                ).astimezone()
                out.append({
                    "datetime": mtime_dt,
                    "path": fpath,
                    "in_place": True,
                })
    return out


def build_web_tasks(task_data, args):
    """Emit web/public/data/tasks.json and copy task markdown into web/public/tasks/<lang>/."""
    # en-US content is fully generated from src/tasks: wipe it plus any stale
    # flat copies from older builds. web/public/tasks/zh-TW is hand-maintained
    # (translations are stored web-only) and must survive rebuilds.
    en_dir = os.path.join(args.web_tasks_dir, "en-US")
    if os.path.isdir(en_dir):
        shutil.rmtree(en_dir)
    if os.path.isdir(args.web_tasks_dir):
        for fname in os.listdir(args.web_tasks_dir):
            fp = os.path.join(args.web_tasks_dir, fname)
            if os.path.isfile(fp):
                os.remove(fp)
    os.makedirs(en_dir, exist_ok=True)

    groups = OrderedDict()
    copied = 0
    for t in task_data:
        basename = os.path.basename(t["path"])
        stem, lang = task_id_stem(basename)
        fm = parse_frontmatter(t["path"])
        created_dt = parse_iso_date(fm.get("created"), t.get("datetime"))
        updated_dt = parse_iso_date(fm.get("updated"), t.get("datetime"))
        entry = {
            "title": fm.get("title") or stem,
            "description": fm.get("description", ""),
            "created": created_dt.date().isoformat() if created_dt else "",
            "updated": updated_dt.date().isoformat() if updated_dt else "",
            "tags": fm.get("tags") or [],
            # Raw filename (unquoted) so reader cards can show it directly.
            "filename": basename,
        }
        if t.get("in_place"):
            # zh-TW translations live only under web/public/tasks/zh-TW/ — already
            # at their serving location; register but do not copy. The path
            # relative to web/public/tasks already carries the zh-TW/ prefix.
            dest_rel = os.path.relpath(t["path"], args.web_tasks_dir)
        else:
            # Preserve topical subfolders (relative to src/tasks) under the
            # language dir: web/public/tasks/<lang>/<relative-subpath>.
            rel = os.path.relpath(t["path"], args.tasks_dir)
            dest_rel = os.path.join(lang, rel)
        entry["path"] = f"tasks/{urllib.parse.quote(dest_rel.replace(os.sep, '/'))}"
        group = groups.setdefault(stem, {"id": f"task:{stem}", "kind": "task", "langs": {}})
        if lang not in group["langs"]:
            group["langs"][lang] = entry
        # `starred` is a group-level flag (like `active`): any language
        # variant marking it stars the logical task for both languages.
        if str(fm.get("starred", "")).lower() == "true":
            group["starred"] = True

        if t.get("in_place"):
            continue
        dest_path = os.path.join(args.web_tasks_dir, dest_rel)
        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        try:
            shutil.copy2(t["path"], dest_path)
            copied += 1
        except OSError as e:
            print(f"Warning: could not copy {t['path']}: {e}")

    ordered = sorted(
        groups.values(),
        key=lambda g: max((l.get("updated") or "" for l in g["langs"].values()), default=""),
        reverse=True,
    )
    # Index pseudo-entry (no markdown behind it): opened when the reader's
    # Task Outputs tab is clicked. Empty dates keep it out of the newest
    # sort position and the "Older" recency bucket.
    ordered.insert(0, {
        "id": "tasks-index",
        "kind": "task",
        "active": True,
        "langs": {
            "en-US": {
                "title": "[index] task outputs",
                "description": "Index of all task outputs, grouped by how recently they were modified.",
                "created": "",
                "updated": "",
                "tags": [],
                "path": "pages/tasks-index.html",
            },
            "zh-TW": {
                "title": "任務輸出索引",
                "description": "所有任務輸出的索引，依最後修改時間分組。",
                "created": "",
                "updated": "",
                "tags": [],
                "path": "pages/tasks-index.html",
            },
        },
    })
    os.makedirs(args.web_data_dir, exist_ok=True)
    out_path = os.path.join(args.web_data_dir, "tasks.json")
    payload = {
        "generated": get_timestamp(),
        "tasks": ordered,
    }
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"Wrote {out_path} ({len(ordered)} tasks, {copied} files copied to {args.web_tasks_dir}/)")


def main():
    parser = argparse.ArgumentParser(
        description="Update root README.md with topic counts and document lists."
    )
    parser.add_argument(
        "--notes_dir",
        default="src/notes",
        help="Directory containing topics (default: src/notes)",
    )
    parser.add_argument(
        "--tasks_dir",
        default="src/tasks",
        help="Directory containing task outputs (default: src/tasks)",
    )
    parser.add_argument(
        "--output",
        default="README.md",
        help="Path to the output README file (default: README.md)",
    )
    parser.add_argument(
        "--web_data_dir",
        default="web/public/data",
        help="Directory for generated web data files (default: web/public/data)",
    )
    parser.add_argument(
        "--web_tasks_dir",
        default="web/public/tasks",
        help="Directory task markdown is copied to for the reader (default: web/public/tasks)",
    )
    parser.add_argument(
        "--skip-web",
        action="store_true",
        help="Only update the README; skip emitting web/public/tasks.json and copying markdown",
    )
    args = parser.parse_args()

    notes_dir = args.notes_dir
    if not os.path.isdir(notes_dir):
        print(f"Notes directory not found: {notes_dir}")
        return

    # Get git repo root
    try:
        result = subprocess.run(
            ["git", "rev-parse", "--show-toplevel"],
            capture_output=True,
            text=True,
        )
        repo_root = result.stdout.strip() if result.returncode == 0 else os.getcwd()
    except Exception:
        repo_root = os.getcwd()

    topics = sorted([
        d for d in os.listdir(notes_dir)
        if os.path.isdir(os.path.join(notes_dir, d))
    ])

    topic_data = []
    document_data = []

    for topic in topics:
        topic_path = os.path.join(notes_dir, topic)
        readme_path = os.path.join(topic_path, "README.md")
        if not os.path.exists(readme_path):
            index_path = os.path.join(topic_path, "index.md")
            if os.path.exists(index_path):
                readme_path = index_path

        md_files = glob.glob(os.path.join(topic_path, "*.md"))

        documents = [
            f for f in md_files if os.path.basename(f).startswith(("_document_"))
        ]

        # Count markdown files excluding README.md and index.md
        entity_count = sum(
            1
            for f in md_files
            if os.path.basename(f).lower() not in ["readme.md", "index.md"]
        )

        # Date the topic's notes content was last updated. Prefer the latest
        # git commit touching the topic's markdown files (so a bulk checkout
        # or a _triples.json regeneration that retouches mtimes does not skew
        # the date); fall back to filesystem mtime when git has no history
        # (e.g. a brand-new, untracked topic). Restricting to **/*.md keeps
        # derived artifacts such as _triples.json out of the calculation.
        last_updated_dt = None
        git_result = subprocess.run(
            ["git", "log", "-1", "--format=%aI", "--",
             f":(glob){topic_path}/**/*.md"],
            capture_output=True,
            text=True,
            cwd=repo_root,
        )
        if git_result.returncode == 0 and git_result.stdout.strip():
            try:
                last_updated_dt = datetime.fromisoformat(
                    git_result.stdout.strip()
                ).astimezone()
            except ValueError:
                last_updated_dt = None
        if last_updated_dt is None and md_files:
            last_updated_dt = max(
                datetime.fromtimestamp(os.path.getmtime(f)).astimezone()
                for f in md_files
            )

        last_updated_str = (
            last_updated_dt.strftime("%d_%b_%Y").upper()
            if last_updated_dt else "---"
        )

        topic_files, topic_size, topic_words = get_dir_size_and_count(topic_path)

        topic_data.append({
            "topic": topic,
            "last_updated": last_updated_str,
            "last_updated_dt": last_updated_dt or datetime.fromtimestamp(0).astimezone(),
            "entities": entity_count,
            "documents": len(documents),
            "words": topic_words,
            "disk_size": topic_size,
        })

        for doc in sorted(documents):
            # Get commit date from git history, fall back to filesystem mtime
            git_dt = get_git_commit_date(doc, repo_root)
            if git_dt:
                mtime_dt = git_dt.astimezone()
            else:
                mtime = os.path.getmtime(doc)
                mtime_dt = datetime.fromtimestamp(mtime).astimezone()
            mtime_str = mtime_dt.strftime("%d_%b_%Y %I:%M %p %Z").upper()

            word_count = count_words(doc)
            document_data.append({
                "topic": topic,
                "date": mtime_str,
                "datetime": mtime_dt,
                "path": doc,
                "words": word_count,
            })

    # --- Scan tasks directory for .md files (recursive) ---
    task_data = []
    tasks_dir = args.tasks_dir
    if os.path.isdir(tasks_dir):
        for dirpath, dirnames, filenames in os.walk(tasks_dir):
            dirnames[:] = [d for d in dirnames if not d.startswith(".")]
            for fname in sorted(filenames):
                if fname.endswith(".md") and not fname.startswith("."):
                    fpath = os.path.join(dirpath, fname)
                    if os.path.isfile(fpath):
                        rel_path = os.path.relpath(fpath, ".")
                        git_dt = get_git_commit_date(fpath, repo_root)
                        if git_dt:
                            mtime_dt = git_dt.astimezone()
                        else:
                            mtime_dt = datetime.fromtimestamp(
                                os.path.getmtime(fpath)
                            ).astimezone()
                        mtime_str = mtime_dt.strftime(
                            "%d_%b_%Y %I:%M %p %Z"
                        ).upper()
                        word_count = count_words(fpath)
                        task_data.append({
                            "date": mtime_str,
                            "datetime": mtime_dt,
                            "path": rel_path,
                            "words": word_count,
                        })
        task_data.sort(key=lambda x: x["datetime"], reverse=True)

    # --- Emit web artifacts for the reader panel (tasks.json + md copies) ---
    if not args.skip_web:
        # Hand-maintained zh-TW translations live web-only under
        # web/public/tasks/zh-TW/; register them alongside the src/tasks scan.
        build_web_tasks(task_data + scan_web_zh_tasks(args), args)

    # Prepare new content
    new_timestamp = get_timestamp()
    total_files, total_size, total_words = get_dir_size_and_count(notes_dir)

    topics_table = [
        "| topic | updated | documents | entities | words | disk |",
        "| :--- | :--- | :---: | :---: | :---: | :---: |",
    ]
    total_entities = 0
    total_docs = 0
    for t in topic_data:
        topic_gh = f"https://github.com/jkuo45/llm-wiki/tree/dev/{urllib.parse.quote(notes_dir + '/' + t['topic'], safe='/')}"
        topic_obsidian = f"[[src/notes/{t['topic']}/README\\|wiki]]"
        topics_table.append(
            f"| [{t['topic']}]({topic_gh}) {topic_obsidian} | {t['last_updated']} | {t['documents']} | {t['entities']} | {format_number(t['words'])} | {format_size(t['disk_size'])} |"
        )
        total_entities += t["entities"]
        total_docs += t["documents"]
    topics_table.append("| --- | --- | ---: | ---: | ---: | ---: |")
    topics_table.append(
        f"| **subtotal** | {max(t['last_updated_dt'] for t in topic_data).strftime('%d_%b_%Y').upper()} | **{total_docs}** | **{total_entities}** | **{format_number(total_words)}** | **{format_size(total_size)}** |"
    )

    # Sort documents by date descending (newest first)
    def parse_date(date_str):
        try:
            return datetime.strptime(date_str, "%d_%b_%Y")
        except ValueError:
            return datetime.min

    document_data.sort(key=lambda x: x["datetime"], reverse=True)

    docs_list = []
    for d in document_data:
        basename = os.path.basename(d["path"])
        # Create display name by removing _document_ prefix and .md extension
        display_name = re.sub(r"^_document_\s*-\s*", "", basename)
        display_name = re.sub(r"\.md$", "", display_name)
        # Truncate to 100 characters if needed
        if len(display_name) > 100:
            display_name = display_name[:97].rstrip() + "..."
        doc_gh = f"https://github.com/jkuo45/llm-wiki/blob/dev/{urllib.parse.quote(d['path'], safe='/')}"
        doc_wiki = f"[[{d['path']}|wiki]]"
        docs_list.append(
            f"- `{d['topic']}`: [{display_name}]({doc_gh}) {doc_wiki} ({d['date']})"
        )

    # Build task list
    task_list_lines = []
    for t in task_data:
        basename = os.path.basename(t["path"])
        display_name = re.sub(r"\.md$", "", basename)
        if len(display_name) > 100:
            display_name = display_name[:97].rstrip() + "..."
        # Show subfolder prefix when file is not in tasks root
        rel = os.path.relpath(t["path"], tasks_dir)
        prefix = os.path.dirname(rel)
        if prefix:
            display_name = f"`{prefix}/` {display_name}"
        task_gh = f"https://github.com/jkuo45/llm-wiki/blob/dev/{urllib.parse.quote(t['path'], safe='/')}"
        task_wiki = f"[[{t['path']}|wiki]]"
        task_list_lines.append(
            f"- [{display_name}]({task_gh}) {task_wiki} ({t['date']})"
        )

    # Build marker-delimited sections
    summary_table_content = "## Summary Table\n" + "\n".join(topics_table)
    doc_list_content = (
        "## Documents\n\n"
        "<details>\n"
        f"<summary><strong>Documents ({len(document_data)} total)</strong> — click to expand</summary>\n\n"
        + "\n".join(docs_list)
        + "\n\n</details>"
    )
    task_list_content = (
        "## Tasks\n\n"
        "<details>\n"
        f"<summary><strong>Tasks ({len(task_data)} total)</strong> — click to expand</summary>\n\n"
        + "\n".join(task_list_lines)
        + "\n\n</details>"
    )

    sections = {
        "summary_table": summary_table_content,
        "document_list": doc_list_content,
        "task_list": task_list_content,
    }

    # Read existing README if present
    if os.path.exists(args.output):
        with open(args.output, "r", encoding="utf-8") as f:
            existing = f.read()
    else:
        existing = ""

    if not existing or not has_markers(existing):
        # Fresh build (first run or pre-marker README)
        final = "# llm-wiki-jk\n\n"
        for name, content in sections.items():
            final += make_marker_block(name, content) + "\n\n"
    else:
        # Update markers in-place, preserving everything else
        final = existing
        for name, content in sections.items():
            final = update_section(final, name, content)

    with open(args.output, "w", encoding="utf-8") as f:
        f.write(final.rstrip() + "\n")

    print(f"Successfully updated {args.output} at {new_timestamp}")


if __name__ == "__main__":
    main()
