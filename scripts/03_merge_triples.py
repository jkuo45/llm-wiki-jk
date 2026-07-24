#!/usr/bin/env python3
"""Merge per-topic _triples.json files into a single cross-topic triples file.

Deduplication strategy (per triples TRIPLE_RULES.md):
  - Key on (subject, predicate, object).
  - Keep distinct contexts as separate entries (separate entries allowed).
  - For identical (subject, predicate, object, context), keep the entry with
    the highest confidence (high > medium > low).
"""

import json
from pathlib import Path

CONF_RANK = {"high": 3, "medium": 2, "low": 1}


def load(path: Path):
    with open(path) as f:
        return json.load(f)


def main():
    out_path = Path("src/notes/_triples.json")
    files = sorted(
        str(p)
        for p in Path("src/notes").rglob("_triples.json")
        if p.resolve() != out_path.resolve()
    )
    if not files:
        print("No _triples.json files found.")
        return

    merged = {}
    total = 0
    counts = {}
    for fp in files:
        data = load(Path(fp))
        topic = Path(fp).parent.name
        for t in data:
            total += 1
            key = (
                t.get("subject"),
                t.get("predicate"),
                t.get("object"),
                t.get("context"),
            )
            conf = t.get("confidence", "low")
            if key not in merged:
                merged[key] = dict(t)
                counts[topic] = counts.get(topic, 0) + 1
            else:
                # same subject/predicate/object/context -> keep higher confidence
                if CONF_RANK.get(conf, 0) > CONF_RANK.get(
                    merged[key].get("confidence", "low"), 0
                ):
                    merged[key]["confidence"] = conf

    result = [
        merged[k]
        for k in sorted(merged, key=lambda x: (x[0] or "", x[1] or "", x[2] or ""))
    ]

    with open(out_path, "w") as f:
        json.dump(result, f, indent=2, ensure_ascii=False)

    print(f"Merged {len(files)} files from topics: {counts}")
    print(f"Total input triples: {total}")
    print(f"Merged output triples: {len(result)}")
    print(
        f"Removed (exact subject+predicate+object+context duplicates): {total - len(result)}"
    )
    print(f"Output: {out_path}")


if __name__ == "__main__":
    main()
