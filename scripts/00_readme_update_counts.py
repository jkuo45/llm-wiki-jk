import argparse
import glob
import os
import urllib.parse
from datetime import datetime


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
    total_mb = total_size / (1024 * 1024)
    return total_files, total_mb, total_words


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
                .strftime("%d_%b_%Y %I:%M %p %Z")
                .upper()
            )
        else:
            last_updated_str = "---"

        topic_data.append({
            "topic": topic,
            "last_updated": last_updated_str,
            "entities": entity_count,
            "documents": len(documents),
        })

        for doc in sorted(documents):
            mtime = os.path.getmtime(doc)
            mtime_str = (
                datetime
                .fromtimestamp(mtime)
                .astimezone()
                .strftime("%d_%b_%Y %I:%M %p %Z")
                .upper()
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
    total_files, total_mb, total_words = get_dir_size_and_count(notes_dir)

    topics_table = [
        "| topic | last updated | count entities |",
        "| :--- | :--- | :---: |",
    ]
    for t in topic_data:
        topic_link = f"[{t['topic']}](https://github.com/jkuo45/llm-wiki/tree/main/{urllib.parse.quote(notes_dir + '/' + t['topic'], safe='/')})"
        topics_table.append(f"| {topic_link} | {t['last_updated']} | {t['entities']} |")

    docs_table = [
        "| topic | date modified | document path | word count |",
        "| :--- | :--- | :--- | :--- |",
    ]
    for d in document_data:
        doc_link = f"[{d['path']}](https://github.com/jkuo45/llm-wiki/blob/main/{urllib.parse.quote(d['path'], safe='/')})"
        docs_table.append(f"| {d['topic']} | {d['date']} | {doc_link} | {d['words']} |")

    # Construct full README content
    readme_content = [
        "# llm-wiki-jk",
        "## Summary Table (notes directory)",
        "\n".join(topics_table),
        "\n",
        "---",
        "## notes directory stats",
        f"- last updated: {new_timestamp}",
        f"- **subtotal files:** {total_files}",
        f"- **subtotal documents:** {len(document_data)}",
        f"- **subtotal words:** {total_words}",
        f"- **subtotal size:** {total_mb:.2f} MB",
        "\n---",
        "## document list\n",
        "\n".join(docs_table),
        "\n",
        "---",
    ]

    with open(args.output, "w", encoding="utf-8") as f:
        f.write("\n".join(readme_content) + "\n")

    print(f"Successfully updated {args.output} at {new_timestamp}")


if __name__ == "__main__":
    main()
