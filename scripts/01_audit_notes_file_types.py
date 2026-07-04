import os

def audit_notes_file_types(notes_dir="notes"):
    """
    Audits the 'notes' directory to ensure it only contains files with specified
    text-based extensions (.md, .json, .svg) or is a .DS_Store file.

    Args:
        notes_dir (str): The path to the notes directory.

    Returns:
        list: A list of file paths that are not of the allowed types.
    """
    allowed_extensions = ['.md', '.json', '.svg']
    allowed_files = ['.ds_store']
    non_text_files = []

    for root, _, files in os.walk(notes_dir):
        for file in files:
            file_lower = file.lower()
            if file_lower in allowed_files:
                continue

            _, file_ext = os.path.splitext(file_lower)
            if file_ext not in allowed_extensions:
                file_path = os.path.join(root, file)
                non_text_files.append(file_path)

    return non_text_files

if __name__ == "__main__":
    non_text_files = audit_notes_file_types()
    if non_text_files:
        print("The following non-text based files were found in the notes directory:")
        for file_path in non_text_files:
            print(file_path)
    else:
        print("All files in the notes directory are of allowed text-based types.")
