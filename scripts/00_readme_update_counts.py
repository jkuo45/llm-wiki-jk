import argparse
import glob
import json
import os
import re
import subprocess
import urllib.parse
from collections import Counter
from datetime import datetime


def format_number(n):
    """Return an integer formatted with thousands separators (e.g. 12,345)."""
    return f"{n:,}"


EXCLUDED_TOPICS = {"graphify-out"}


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
        dirnames[:] = [
            d for d in dirnames
            if not d.startswith(".") and d not in EXCLUDED_TOPICS
        ]
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
        if os.path.isdir(os.path.join(notes_dir, d)) and d not in EXCLUDED_TOPICS
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

        last_updated_ts = 0
        if md_files:
            last_updated_ts = max(os.path.getmtime(f) for f in md_files)
            # GEMINI.md format: %d_%b_%Y %I:%M %p %Z
            last_updated_str = (
                datetime
                .fromtimestamp(last_updated_ts)
                .astimezone()
                .strftime("%d_%b_%Y")
                .upper()
            )
        else:
            last_updated_str = "---"

        topic_files, topic_size, topic_words = get_dir_size_and_count(topic_path)

        topic_data.append({
            "topic": topic,
            "last_updated": last_updated_str,
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
        f"| **subtotal** | {max(t['last_updated'] for t in topic_data)} | **{total_docs}** | **{total_entities}** | **{format_number(total_words)}** | **{format_size(total_size)}** |"
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
