import argparse
import glob
import os
import re
import urllib.parse
from datetime import datetime


def format_number(n):
    """Return an integer formatted with thousands separators (e.g. 12,345)."""
    return f"{n:,}"


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


def main():
    parser = argparse.ArgumentParser(
        description="Update root README.md with topic counts and document lists."
    )
    parser.add_argument(
        "--notes_dir",
        default="notes",
        help="Directory containing topics (default: notes)",
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

    topics = sorted([
        d for d in os.listdir(notes_dir) if os.path.isdir(os.path.join(notes_dir, d))
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
            f
            for f in md_files
            if os.path.basename(f).startswith(("[document]", "_document_"))
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
            mtime = os.path.getmtime(doc)
            mtime_str = (
                datetime.fromtimestamp(mtime).astimezone().strftime("%d_%b_%Y").upper()
            )
            word_count = count_words(doc)
            document_data.append({
                "topic": topic,
                "date": mtime_str,
                "path": doc,
                "words": word_count,
            })

    # Prepare new content
    new_timestamp = get_timestamp()
    total_files, total_size, total_words = get_dir_size_and_count(notes_dir)

    topics_table = [
        "| topic | last updated | count entities | count documents | count words | disk size |",
        "| :--- | :--- | :---: | :---: | :---: | :---: |",
    ]
    for t in topic_data:
        topic_link = f"[{t['topic']}](https://github.com/jkuo45/llm-wiki/tree/dev/{urllib.parse.quote(notes_dir + '/' + t['topic'], safe='/')})"
        topics_table.append(
            f"| {topic_link} | {t['last_updated']} | {t['entities']} | {t['documents']} | {format_number(t['words'])} | {format_size(t['disk_size'])} |"
        )

    docs_table = [
        "| topic | date modified | document path | word count |",
        "| :--- | :--- | :--- | :--- |",
    ]
    for d in document_data:
        doc_link = f"[{d['path']}](https://github.com/jkuo45/llm-wiki/blob/dev/{urllib.parse.quote(d['path'], safe='/')})"
        docs_table.append(
            f"| {d['topic']} | {d['date']} | {doc_link} | {format_number(d['words'])} |"
        )

    # Build marker-delimited sections
    summary_table_content = "## Summary Table (notes directory)\n" + "\n".join(
        topics_table
    )
    summary_counts_content = (
        "## Summary Counts (notes directory)\n"
        f"- **last updated:** {new_timestamp}\n"
        f"- **file count:** {format_number(total_files)}\n"
        f"- **word count:** {format_number(total_words)}\n"
        f"- **documents:** {format_number(len(document_data))}\n"
        f"- **disk size:** {format_size(total_size)}"
    )
    doc_list_content = "## Document List\n\n" + "\n".join(docs_table)

    sections = {
        "summary_table": summary_table_content,
        "summary_counts": summary_counts_content,
        "document_list": doc_list_content,
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
