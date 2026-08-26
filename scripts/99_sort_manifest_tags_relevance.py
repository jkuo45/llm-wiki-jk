#!/usr/bin/env python3
"""Sort tags in src/images/manifest.json by relevance priority.

Order per entry:
  1. TOPIC facet   — first tag, kept in place (exactly one per entry).
  2. FORMAT facets — notes / diagrams-charts / graph-analysis / generated-image.
  3. CONTENT facets — ranked: tags that directly correspond to one of the
     entry's `entities` come first (strongest relevance signal); the rest keep
     their original relative order (stable sort).

Idempotent: running twice yields the same result.
"""

import json
import re
import sys
from pathlib import Path

MANIFEST = Path("src/images/manifest.json")

FORMAT_TAGS = {"notes", "diagrams-charts", "graph-analysis", "generated-image"}


def kebab(s: str) -> str:
    s = s.lower()
    s = s.replace("+", "-plus")
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s


def entity_keys(entities):
    keys = set()
    for e in entities or []:
        k = kebab(e)
        if not k:
            continue
        keys.add(k)
        # also allow the head noun of multi-word entities ("Breast Cancer" -> breast-cancer)
        for part in k.split("-"):
            if len(part) > 3:
                keys.add(part)
    return keys


def main() -> int:
    data = json.loads(MANIFEST.read_text())
    changed = 0
    for entry in data:
        tags = entry.get("tags") or []
        if len(tags) <= 1:
            continue
        topic, rest = tags[0], tags[1:]
        fmt = [t for t in rest if t in FORMAT_TAGS]
        content = [t for t in rest if t not in FORMAT_TAGS]
        ekeys = entity_keys(entry.get("entities"))
        # stable rank: entity-matched content tags first, others after
        ranked = sorted(content, key=lambda t: 0 if t in ekeys else 1)
        new_tags = [topic] + fmt + ranked
        if new_tags != tags:
            changed += 1
            entry["tags"] = new_tags
    MANIFEST.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    print(f"reordered {changed}/{len(data)} entries")
    return 0


if __name__ == "__main__":
    sys.exit(main())
