import os
import subprocess
import glob
import re
import argparse

def get_deleted_files(notes_dir, link_dir):
    """Returns a map of topic -> list of deleted file names (without .md)"""
    topics = [d for d in os.listdir(notes_dir) 
              if os.path.isdir(os.path.join(notes_dir, d)) and os.path.join(notes_dir, d) != link_dir]
    deleted_map = {}
    
    for topic in topics:
        topic_path = os.path.join(notes_dir, topic)
        try:
            # Get deleted files from git history for this specific directory
            cmd = ["git", "log", "--diff-filter=D", "--summary", topic_path]
            output = subprocess.check_output(cmd).decode('utf-8')
            
            # Look for lines like "delete mode 100644 notes/topic/Entity.md"
            # We need to escape backslashes for windows or handle separators
            pattern = rf"delete mode \d+ {re.escape(topic_path)}/(.+)\.md"
            deleted_files = re.findall(pattern, output)
            if deleted_files:
                deleted_map[topic] = list(set(deleted_files))
        except Exception as e:
            print(f"Error checking {topic}: {e}")
            
    return deleted_map

def get_link_entities(link_dir):
    return [os.path.basename(f)[:-3] for f in glob.glob(os.path.join(link_dir, '*.md')) if os.path.basename(f) != 'README.md']

def check_missing_readmes(notes_dir, link_dir):
    deleted_map = get_deleted_files(notes_dir, link_dir)
    link_entities = get_link_entities(link_dir)
    
    for topic, deleted in deleted_map.items():
        readme_path = os.path.join(notes_dir, topic, "README.md")
        if not os.path.exists(readme_path):
            continue
            
        try:
            with open(readme_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            print(f"Error reading {readme_path}: {e}")
            continue
            
        missing = []
        for d in deleted:
            # Find the actual entity name if d is slightly different (case, etc.)
            matches = [l for l in link_entities if l.lower() == d.lower()]
            if not matches:
                continue
                
            entity = matches[0]
            # Check if [[entity]] or [[notes/_link/entity]] is in README
            link_pattern = rf"\[\[(notes/_link/)?{re.escape(entity)}(\||\]\])"
            if not re.search(link_pattern, content, re.IGNORECASE):
                missing.append(entity)
        
        if missing:
            print(f"TOPIC: {topic}")
            print(f"  Missing entities that were moved to _link: {missing}")

def main():
    parser = argparse.ArgumentParser(description="Audit topic READMEs for entities that were moved to _link.")
    parser.add_argument("--notes_dir", default="notes", help="Directory containing topics (default: notes)")
    parser.add_argument("--link_dir", default="notes/_link", help="Directory containing overlapping links (default: notes/_link)")
    args = parser.parse_args()

    if not os.path.isdir(args.notes_dir):
        print(f"Notes directory not found: {args.notes_dir}")
        return

    check_missing_readmes(args.notes_dir, args.link_dir)

if __name__ == "__main__":
    main()
