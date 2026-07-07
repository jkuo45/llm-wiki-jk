import argparse
import os
import re


def get_entities_from_readme(readme_path):
    entities = set()
    if not os.path.exists(readme_path):
        return entities
    with open(readme_path, "r", encoding="utf-8") as f:
        content = f.read()
        # Match [[Link]] or [[Link|Display]]
        matches = re.findall(r"\[\[([^\]|]+)(?:\|[^\]]+)?\]\]", content)
        for m in matches:
            entities.add(m.strip())
    return entities


def get_entities_from_fs(dir_path):
    entities = set()
    if not os.path.isdir(dir_path):
        return entities
    for f in os.listdir(dir_path):
        if (
            f.endswith(".md")
            and not f.startswith("_document_")
            and f not in ("README.md", "index.md")
        ):
            entities.add(f[:-3])
    return entities


def audit_topic(topic_dir, link_dir="notes/_link"):
    print(f"\nAuditing: {topic_dir}")
    readme_path = os.path.join(topic_dir, "README.md")
    if not os.path.exists(readme_path):
        index_path = os.path.join(topic_dir, "index.md")
        if os.path.exists(index_path):
            readme_path = index_path

    readme_entities = get_entities_from_readme(readme_path)
    fs_entities = get_entities_from_fs(topic_dir)
    link_entities = get_entities_from_fs(link_dir)

    missing_in_readme = fs_entities - readme_entities
    if missing_in_readme:
        print(f"  Missing in README: {missing_in_readme}")

    for entity in readme_entities:
        if entity in fs_entities:
            continue
        if entity.startswith("notes/_link/"):
            e_name = entity.replace("notes/_link/", "")
            if e_name in link_entities:
                continue

        # If the link is not in the local dir, check if it exists in _link
        if entity in link_entities:
            print(f"  Should be updated to _link reference: [[notes/_link/{entity}]]")
            continue

        # Potentially broken or external link
        # We don't print every external link to avoid noise, but could if requested.
        pass


def main():
    parser = argparse.ArgumentParser(
        description="Check if README.md is in sync with entities in topic directories."
    )
    parser.add_argument(
        "--topic", help="Specific topic directory to audit (e.g., notes/adrenochrome)"
    )
    parser.add_argument(
        "--all", action="store_true", help="Audit all topic directories in notes/"
    )
    args = parser.parse_args()

    notes_dir = "notes"
    link_dir = os.path.join(notes_dir, "_link")

    if args.topic:
        audit_topic(args.topic, link_dir)
    elif args.all:
        topics = [
            os.path.join(notes_dir, d)
            for d in os.listdir(notes_dir)
            if os.path.isdir(os.path.join(notes_dir, d)) and d != "_link"
        ]
        for topic in sorted(topics):
            audit_topic(topic, link_dir)
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
