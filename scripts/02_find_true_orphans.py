import os
import re
import argparse

def get_orphans(search_dir='notes'):
    links = set()
    files = set()
    
    # Get all markdown files in the search_dir recursively
    for root, dirs, filenames in os.walk(search_dir):
        for f in filenames:
            if f.endswith('.md') and f not in ('README.md', 'index.md'):
                # Store the entity name (filename without .md)
                files.add(f[:-3])
            
    # Regex to find [[Link]] or [[Link|Display]]
    link_pattern = re.compile(r'\[\[([^\]|]+)(?:\|[^\]]+)?\]\]')
    
    # Scan all markdown files for links
    # Also scan root level files if they exist (like root README.md)
    scan_files = []
    for root, dirs, filenames in os.walk('.'):
        # Avoid .git and other hidden dirs
        dirs[:] = [d for d in dirs if not d.startswith('.')]
        for f in filenames:
            if f.endswith('.md'):
                scan_files.append(os.path.join(root, f))
                
    for f_path in scan_files:
        try:
            with open(f_path, 'r', encoding='utf-8') as file:
                content = file.read()
                matches = link_pattern.findall(content)
                for m in matches:
                    # Normalize: take only the last part if it's a path (e.g., notes/_link/Entity)
                    # and strip whitespace
                    entity_name = m.strip().split('/')[-1]
                    links.add(entity_name)
        except Exception as e:
            print(f"Error reading {f_path}: {e}")
                    
    # Orphans are links that don't have a corresponding file
    orphans = links - files
    
    # Filter out aliases that match existing files (case-insensitive)
    true_orphans = []
    lower_files = {f.lower(): f for f in files}
    
    for o in sorted(list(orphans)):
        if o.lower() in lower_files:
            # This is a case/pluralization issue or alias that could be normalized
            pass
        else:
            true_orphans.append(o)
            
    return true_orphans

def main():
    parser = argparse.ArgumentParser(description="Find true orphan links (links without a corresponding entity file).")
    parser.add_argument("--dir", default="notes", help="Directory containing entity files (default: notes)")
    args = parser.parse_args()

    true_orphans = get_orphans(args.dir)
    if true_orphans:
        print("True Orphan Links Found:")
        for o in true_orphans:
            print(f"  [[{o}]]")
    else:
        print("No true orphan links found.")

if __name__ == "__main__":
    main()
