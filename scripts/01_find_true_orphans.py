import os
import re

def get_orphans():
    links = set()
    files = set()
    
    # Get all files
    for f in os.listdir('.'):
        if f.endswith('.md'):
            files.add(f[:-3])
            
    # Get all links
    link_pattern = re.compile(r'\[\[([^\]|]+)(?:\|[^\]]+)?\]\]')
    for f in os.listdir('.'):
        if f.endswith('.md'):
            with open(f, 'r') as file:
                content = file.read()
                matches = link_pattern.findall(content)
                for m in matches:
                    # Handle paths
                    m = m.split('/')[-1]
                    links.add(m)
                    
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

if __name__ == "__main__":
    true_orphans = get_orphans()
    for o in true_orphans:
        print(o)
