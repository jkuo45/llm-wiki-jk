import argparse
import re


def clean_file(filepath: str, dry_run: bool = False) -> int:
    with open(filepath, "r") as f:
        text = f.read()

    original = text

    # 1. Remove trailing whitespace from every line
    lines = text.split("\n")
    lines = [line.rstrip() for line in lines]
    text = "\n".join(lines)

    # 2. Collapse 3+ consecutive blank lines to 1
    result = []
    blank_count = 0
    for line in lines:
        if line == "":
            blank_count += 1
            if blank_count <= 1:
                result.append(line)
        else:
            blank_count = 0
            result.append(line)
    text = "\n".join(result)

    # 3. Remove literal \n\n in text content
    text = text.replace("\\n\\n", "")

    # 4. Inline single-line code blocks (```...```) that contain short expressions
    def inline_code_block(m):
        before = m.group(1).rstrip()
        expr = m.group(2).strip()
        after = m.group(3).lstrip()
        sep_l = "" if not before or before.endswith((" ", "**", "|", "-", "_", "(")) else " "
        sep_r = "" if not after or after.startswith((" ", "**", "|", "]]", "))", ".", ",", ")", ";", ":", "?")) else " "
        return f"{before}{sep_l}{expr}{sep_r}{after}"

    for _ in range(10):
        new_text = re.sub(
            r"([^\n]*?)\n[ \t]*```[ \t]*\n[ \t]*([^\n]+?)[ \t]*\n[ \t]*```[ \t]*\n([^\n]*?)",
            inline_code_block,
            text,
        )
        if new_text == text:
            break
        text = new_text

    # 5. Clean up mid-line tabs (artifacts from code block merges inside list items)
    lines = text.split("\n")
    for i, line in enumerate(lines):
        line = re.sub(r"(?<=\S)\t+", " ", line)
        stripped = line.lstrip()
        indent = line[: len(line) - len(stripped)]
        stripped = re.sub(r"  +", " ", stripped)
        lines[i] = indent + stripped
    text = "\n".join(lines)

    # 6. Trim leading/trailing blank lines
    text = text.strip("\n") + "\n"

    if text == original:
        return 0

    if not dry_run:
        with open(filepath, "w") as f:
            f.write(text)

    return len(original.split("\n")) - len(text.split("\n"))


def main():
    parser = argparse.ArgumentParser(description="Clean unnecessary whitespace and newlines from a markdown file.")
    parser.add_argument("filepath", help="Path to the markdown file to clean")
    parser.add_argument("--dry-run", action="store_true", help="Print stats without modifying the file")
    args = parser.parse_args()

    removed = clean_file(args.filepath, dry_run=args.dry_run)
    if removed == 0:
        print(f"No changes needed for {args.filepath}")
    elif args.dry_run:
        print(f"{args.filepath}: would remove {removed} lines")
    else:
        print(f"{args.filepath}: removed {removed} lines")


if __name__ == "__main__":
    main()
