import os
import re
import subprocess


def get_untracked_md_files():
    try:
        output = subprocess.check_output(
            ["git", "ls-files", "--others", "--exclude-standard"], text=True
        )
        files = [f.strip() for f in output.splitlines() if f.strip().endswith(".md")]
        return files
    except subprocess.CalledProcessError as e:
        print("Error running git status:", e)
        return []


def clean_headings():
    files_to_clean = get_untracked_md_files()
    if not files_to_clean:
        print("No untracked markdown files found.")
        return

    print(f"Found {len(files_to_clean)} untracked markdown files to check:")
    for f in files_to_clean:
        print(f"  - {f}")

    cleaned_count = 0
    pattern = re.compile(r"^(#+)\s+\d+(?:\.\d+)*\.\s+(.*)$")

    for file_path in files_to_clean:
        if not os.path.exists(file_path):
            print(f"Skipping {file_path} (does not exist)")
            continue

        with open(file_path, "r", encoding="utf-8") as f:
            lines = f.readlines()

        modified = False
        new_lines = []
        for line in lines:
            match = pattern.match(line)
            if match:
                hashes = match.group(1)
                text = match.group(2)
                new_lines.append(f"{hashes} {text}\n")
                modified = True
            else:
                new_lines.append(line)

        if modified:
            with open(file_path, "w", encoding="utf-8") as f:
                f.writelines(new_lines)
            print(f"Cleaned {file_path}")
            cleaned_count += 1
        else:
            print(f"No enumerated headings found in {file_path}")

    print(f"\nTOTAL_CLEANED: {cleaned_count}")


if __name__ == "__main__":
    clean_headings()
