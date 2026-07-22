import argparse
import glob
import os
import re


def get_link_entities(link_dir):
    return [
        os.path.basename(f)[:-3]
        for f in glob.glob(os.path.join(link_dir, "*.md"))
        if os.path.basename(f) not in ("README.md", "index.md")
    ]


def get_topic_readmes(notes_dir, link_dir):
    # Get all README.md or index.md files in notes_dir subdirectories, excluding link_dir
    readmes = []
    for d in os.listdir(notes_dir):
        topic_path = os.path.join(notes_dir, d)
        if os.path.isdir(topic_path) and topic_path != link_dir:
            readme_path = os.path.join(topic_path, "README.md")
            if not os.path.exists(readme_path):
                index_path = os.path.join(topic_path, "index.md")
                if os.path.exists(index_path):
                    readme_path = index_path
            if os.path.exists(readme_path):
                readmes.append(readme_path)
    return readmes


def check_entities(notes_dir, link_dir):
    link_entities = get_link_entities(link_dir)
    readmes = get_topic_readmes(notes_dir, link_dir)

    entity_to_readmes = {e: [] for e in link_entities}

    # Regex for [[Link]] or [[Link|Display]]
    # We want to match the entity name specifically
    for readme in readmes:
        try:
            with open(readme, "r", encoding="utf-8") as f:
                content = f.read()
                for e in link_entities:
                    # Match [[e]], [[src/notes/_link/e]], [[e|...]], or [[src/notes/_link/e|...]]
                    pattern = rf"\[\[(src/notes/_link/)?{re.escape(e)}(\||\]\])"
                    if re.search(pattern, content):
                        entity_to_readmes[e].append(readme)
        except Exception as ex:
            print(f"Error reading {readme}: {ex}")

    for e, rds in entity_to_readmes.items():
        if not rds:
            print(f"MISSING: '{e}' is in _link but NOT in any topic README.")
        else:
            # Optional: print found ones
            # print(f"FOUND: '{e}' is in {len(rds)} READMEs: {rds}")
            pass


def main():
    parser = argparse.ArgumentParser(
        description="Audit if entities in _link are referenced in any topic README."
    )
    parser.add_argument(
        "--notes_dir",
        default="src/notes",
        help="Directory containing topics (default: src/notes)",
    )
    parser.add_argument(
        "--link_dir",
        default="src/notes/_link",
        help="Directory containing overlapping links (default: src/notes/_link)",
    )
    args = parser.parse_args()

    check_entities(args.notes_dir, args.link_dir)


if __name__ == "__main__":
    main()
