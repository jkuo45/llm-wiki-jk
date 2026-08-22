#!/usr/bin/env python3
"""Query and validate per-node biological roles (web/data/node_roles.json).

Reads the role artifact emitted by scripts/03_rebuild_from_triples.py
(export_three_json) and provides:

  1. Role queries  -- filter/sort/top-N over the role-tagged node table.
  2. --validate    -- regression check that pins the worked examples from
                      src/tasks/task_output_node_analysis_biology_16_AUG_2026.md
                      so rule/threshold changes cannot silently break them.

Roles are derived from the static metric fingerprint (degree, in/out_degree,
pagerank, betweenness, clustering, k_core) via live-graph percentile rules;
see ROLE_DEFS inside export_three_json() for the current definitions.

Run:
  uv run python3 scripts/05_role_query.py --role Spreader --top 10
  uv run python3 scripts/05_role_query.py \
      --role Bottleneck --exclude-role Periphery --sort pagerank --top 20
  uv run python3 scripts/05_role_query.py --node "Acid ceramidase"
  uv run python3 scripts/05_role_query.py --validate
  uv run python3 scripts/05_role_query.py --summary
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_ROLES = ROOT / "web" / "data" / "node_roles.json"

# Worked examples from task_output_node_analysis_biology_16_AUG_2026.md,
# verified against the graph when the classifier was introduced. Each entry
# pins: every expected role must be present; no unexpected non-empty role may
# appear beyond the expected set.
VALIDATION_CASES: list[dict] = [
    {
        "label": "Acid ceramidase",
        "expected": ["Spreader", "Bottleneck"],
        "why": "out-degree spreader -> senolytic target signature",
    },
    {
        "label": "SASP",
        "expected": ["Master regulator", "Bottleneck", "Core backbone"],
        "why": "convergent-and-divergent secretory hub / signaling nexus",
    },
    {
        "label": "Aging",
        "expected": ["Master regulator", "Bottleneck", "Core backbone"],
        "why": "PageRank + k-core-6 foundational driver",
    },
    {
        "label": "GPX4",
        "expected": ["Module member"],
        "why": "clustering ~1.0 cohesive redox module participant",
    },
    {
        "label": "Cataract",
        "expected": ["Module member"],
        "why": "clustering 1.0 AGE-cross-linking cluster member",
    },
]

SORT_KEYS = ("pagerank", "betweenness", "clustering", "k_core", "degree",
             "in_degree", "out_degree")


def load(path: Path) -> dict:
    if not path.exists():
        sys.exit(f"roles artifact not found at {path} "
                 f"(run scripts/03_rebuild_from_triples.py first)")
    return json.loads(path.read_text(encoding="utf-8"))


def cmd_summary(doc: dict) -> None:
    s = doc.get("summary", {})
    print(f"nodes: {s.get('node_count', '?')}")
    print("role counts:")
    for role, count in sorted(s.get("role_counts", {}).items(),
                              key=lambda kv: -kv[1]):
        pct = 100 * count / max(1, s.get("node_count", 1))
        print(f"  {role:<18} {count:>5}  ({pct:.1f}%)")
    print(f"nodes with multiple roles: {s.get('nodes_with_multiple_roles', '?')}")
    t = doc.get("thresholds", {})
    if t:
        print("thresholds:")
        for k, v in sorted(t.items()):
            print(f"  {k}: {v:g}")


def cmd_validate(doc: dict, verbose: bool = False) -> int:
    by_label = {n["label"]: n for n in doc["nodes"]}
    failures = 0
    print(f"Validating {len(VALIDATION_CASES)} worked examples against {doc['source_graph']}\n")
    for case in VALIDATION_CASES:
        label = case["label"]
        node = by_label.get(label)
        if node is None:
            print(f"FAIL {label}: not found in role artifact")
            failures += 1
            continue
        actual = set(node["roles"])
        expected = set(case["expected"])
        missing = expected - actual
        extra = actual - expected
        if missing or extra:
            print(f"FAIL {label}: expected {sorted(expected)}, got {sorted(actual)}")
            if missing:
                print(f"     missing: {sorted(missing)}")
            if extra:
                print(f"     unexpected: {sorted(extra)}")
            failures += 1
        else:
            print(f"PASS {label}: {node['roles']}  ({case['why']})")
            if verbose:
                m = node["metrics"]
                print(f"     deg={m['degree']:.0f} in={m['in_degree']:.0f} "
                      f"out={m['out_degree']:.0f} pr={m['pagerank']:.6f} "
                      f"btw={m['betweenness']:.5f} clust={m['clustering']:.2f} "
                      f"kcore={m['k_core']:.0f}")
    print()
    if failures:
        print(f"{failures}/{len(VALIDATION_CASES)} validation cases FAILED — "
              f"classifier rules or graph data drifted from the pinned examples.")
        return 1
    print(f"All {len(VALIDATION_CASES)} validation cases passed.")
    return 0


def cmd_nodes(
    doc: dict,
    roles: list[str],
    exclude_roles: list[str],
    sort_key: str,
    top: int,
    as_json: bool,
) -> None:
    rows = doc["nodes"]
    for role in roles:
        rows = [n for n in rows if role in n["roles"]]
    for role in exclude_roles:
        rows = [n for n in rows if role not in n["roles"]]

    def sort_value(n: dict) -> float:
        v = n["metrics"].get(sort_key, 0)
        return float(v) if isinstance(v, (int, float)) else 0.0

    rows.sort(key=sort_value, reverse=True)
    rows = rows[:top] if top else rows

    if as_json:
        print(json.dumps(rows, ensure_ascii=False, indent=2))
        return
    if not rows:
        print("no nodes match the given filters")
        return
    width = max(len(n["label"]) for n in rows)
    for n in rows:
        m = n["metrics"]
        print(
            f"{n['label']:<{width}}  {sort_key}={sort_value(n):<12.6g} "
            f"[{', '.join(n['roles'])}]"
        )
    print(f"\n({len(rows)} node(s))")


def cmd_node(doc: dict, label: str, fuzzy: bool) -> None:
    needle = label.lower()
    matches = [
        n for n in doc["nodes"]
        if n["label"].lower() == needle
        or (fuzzy and needle in n["label"].lower())
    ]
    if not matches:
        print(f"no node matching {label!r}")
        sys.exit(1)
    for n in matches:
        m = n["metrics"]
        print(f"{n['label']}  [{', '.join(n['roles']) or 'no roles'}]")
        print(f"  degree={m['degree']:.0f} in={m['in_degree']:.0f} out={m['out_degree']:.0f}")
        print(f"  pagerank={m['pagerank']:.8f} betweenness={m['betweenness']:.8f}")
        print(f"  clustering={m['clustering']:.3f} k_core={m['k_core']:.0f}")


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--graph-dir", type=Path, default=ROOT / "web" / "data",
                    help="directory containing node_roles.json")
    ap.add_argument("--roles", nargs="+", default=[],
                    help="require ALL of these roles")
    ap.add_argument("--exclude-role", nargs="+", default=[],
                    help="exclude nodes carrying ANY of these roles")
    ap.add_argument("--node", default=None,
                    help="show full fingerprint for one node (by label)")
    ap.add_argument("--fuzzy", action="store_true",
                    help="substring match for --node")
    ap.add_argument("--sort", choices=SORT_KEYS, default="pagerank")
    ap.add_argument("--top", type=int, default=20)
    ap.add_argument("--json", action="store_true", help="JSON output for node queries")
    ap.add_argument("--validate", action="store_true",
                    help="run pinned worked-example validation; exit 1 on drift")
    ap.add_argument("--verbose", "-v", action="store_true")
    ap.add_argument("--summary", action="store_true",
                    help="print role distribution summary")
    args = ap.parse_args()

    path = args.graph_dir / "node_roles.json"
    doc = load(path)

    if args.validate:
        return cmd_validate(doc, verbose=args.verbose)
    if args.summary:
        cmd_summary(doc)
        return 0
    if args.node:
        cmd_node(doc, args.node, args.fuzzy)
        return 0

    if args.verbose:
        cmd_summary(doc)
        print()
    cmd_nodes(doc, args.roles, args.exclude_role, args.sort, args.top, args.json)
    return 0


if __name__ == "__main__":
    sys.exit(main())
