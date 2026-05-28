import glob
import os
from datetime import datetime


def get_timestamp():
    # Using PDT as requested in GEMINI.md examples, or local if not specified.
    # The prompt says %d_%b_%Y %I:%M %p %Z
    now = datetime.now()
    return now.strftime("%d_%b_%Y %I:%M %p %Z")


def count_words(filepath):
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            return len(content.split())
    except:
        return 0


def main():
    notes_dir = "notes"
    topics = sorted([
        d for d in os.listdir(notes_dir) if os.path.isdir(os.path.join(notes_dir, d))
    ])

    topic_data = []
    document_data = []

    for topic in topics:
        topic_path = os.path.join(notes_dir, topic)
        md_files = glob.glob(os.path.join(topic_path, "*.md"))

        entities = [
            f for f in md_files if not os.path.basename(f).startswith("[document]")
        ]
        documents = [
            f for f in md_files if os.path.basename(f).startswith("[document]")
        ]

        last_updated_ts = 0
        if md_files:
            last_updated_ts = max(os.path.getmtime(f) for f in md_files)
            last_updated_str = datetime.fromtimestamp(last_updated_ts).strftime(
                "%d_%b_%Y"
            )
        else:
            last_updated_str = "---"

        topic_data.append({
            "topic": topic,
            "last_updated": last_updated_str,
            "entities": len(entities) - 1,  # remove one for README.md
            "documents": len(documents),
        })

        for doc in sorted(documents):
            mtime = os.path.getmtime(doc)
            mtime_str = datetime.fromtimestamp(mtime).strftime("%d_%b_%Y")
            word_count = count_words(doc)
            document_data.append({
                "topic": topic,
                "date": mtime_str,
                "path": doc,
                "words": word_count,
            })

    # Prepare new content
    new_timestamp = get_timestamp()

    topics_table = [
        "| topic | last updated | count entities | count documents |",
        "| :--- | :--- | :---: | :---: |",
    ]
    for t in topic_data:
        topics_table.append(
            f"| {t['topic']} | {t['last_updated']} | {t['entities']} | {t['documents']} |"
        )

    docs_table = [
        "| topic | date modified | document path | word count |",
        "| :--- | :--- | :--- | :--- |",
    ]
    for d in document_data:
        docs_table.append(
            f"| {d['topic']} | {d['date']} | {d['path']} | {d['words']} |"
        )

    # Construct full README content
    readme_content = [
        "# llm-wiki-jk",
        f"last updated: {new_timestamp} \n",
        "## topics (notes directory)\n",
        "\n".join(topics_table),
        "\n",
        "---",
        "## document list\n",
        "\n".join(docs_table),
        "\n",
        "---",
    ]

    with open("README.md", "w", encoding="utf-8") as f:
        f.write("\n".join(readme_content) + "\n")

    print(f"Successfully updated README.md at {new_timestamp}")


if __name__ == "__main__":
    main()
