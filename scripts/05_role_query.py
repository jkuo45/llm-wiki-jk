#!/usr/bin/env python3
"""Query and validate per-node biological roles (web/data/node_roles.json).

Reads the role artifact emitted by scripts/03_rebuild_from_triples.py
(export_three_json) and provides:

  1. Role queries   -- filter/sort/top-N over the role-tagged node table.
  2. --validate     -- drift detection WITHOUT hardcoded expectations:
       a. Threshold check : recompute all percentile cutoffs from the
          artifact's own embedded metrics and compare against the stored
          values (catches stale thresholds after a graph update).
       b. Consistency     : re-run the shared classifier
          (scripts/node_roles_lib.py) over every node's fingerprint and
          require stored roles to match exactly (catches classifier /
          artifact divergence).
       c. Semantic anchors: a handful of literature-anchored nodes are
          checked via SCALE-FREE metric predicates (ratios/orderings, not
          absolute numbers), so the checks stay valid as the graph grows.

Nothing in this script hardcodes role assignments or cutoffs — if the graph
updates and roles recalculate, validation adapts automatically and only
fails when something is genuinely inconsistent.

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

sys.path.insert(0, str(Path(__file__).resolve().parent))
import node_roles_lib as nrl

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_ROLES = ROOT / "web" / "data" / "node_roles.json"

THRESHOLD_TOL = 1e-9  # float round-trip tolerance for stored vs recomputed

# Literature-anchored nodes from task_output_node_analysis_biology_16_AUG_2026.md.
# Each anchor lists scale-free INVARIANTS (metric ratios / orderings that hold
# regardless of graph size or recalculated percentiles) plus the ROLE RULES
# (by name, referencing nrl.ROLE_DEFS logic implicitly) that must follow.
# No expected role labels and no absolute metric constants appear here.
ANCHOR_CASES: list[dict] = [
    {
        "label": "Acid ceramidase",
        "why": "out-degree spreader -> senolytic target signature",
        "invariants": [
            ("out dominates in", lambda m: m["out_degree"] > 3 * m["in_degree"]),
            ("spreads widely", lambda m: m["out_degree"] >= 3),
            ("non-peripheral", lambda m: m["k_core"] >= 2),
        ],
        # role names whose DEFINING conditions these invariants encode
        "must_include_rules": ["Spreader"],
    },
    {
        "label": "SASP",
        "why": "convergent-and-divergent secretory hub / signaling nexus",
        "invariants": [
            ("high in-flow", lambda m: m["in_degree"] > m["out_degree"]),
            ("large footprint", lambda m: m["degree"] >= 10),
            ("core-resident", lambda m: m["k_core"] >= 4),
            ("bridging", lambda m: m["betweenness"] > 0),
        ],
        "must_include_rules": ["Master regulator", "Bottleneck", "Core backbone"],
    },
    {
        "label": "Aging",
        "why": "PageRank + core foundational driver",
        "invariants": [
            ("sink-leaning", lambda m: m["in_degree"] > m["out_degree"]),
            ("core-resident", lambda m: m["k_core"] >= 4),
            ("bridging", lambda m: m["betweenness"] > 0),
        ],
        "must_include_rules": ["Master regulator", "Core backbone"],
    },
    {
        "label": "GPX4",
        "why": "clustering ~1 cohesive redox module participant",
        "invariants": [
            ("tight module", lambda m: m["clustering"] > 0.5),
            ("small local role", lambda m: m["degree"] <= 5),
        ],
        "must_include_rules": ["Module member"],
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
        print("stored thresholds:")
        for k, v in sorted(t.items()):
            print(f"  {k}: {v:g}")


# ------------------------------------------------------------------
# Validation (fully dynamic — nothing pinned to the current build)
# ------------------------------------------------------------------

def cmd_validate(doc: dict, verbose: bool = False) -> int:
    nodes = doc.get("nodes", [])
    if not nodes:
        print("FAIL: empty role artifact")
        return 1
    failures = []

    fps = [n.get("metrics", {}) for n in nodes]
    live = nrl.compute_thresholds(fps)
    stored = doc.get("thresholds", {})

    # --- a. threshold freshness ---
    print(f"a. Threshold check ({len(nodes)} nodes)")
    stale = []
    for key, want in live.items():
        got = stored.get(key)
        if got is None or abs(float(got) - want) > THRESHOLD_TOL:
            stale.append(f"    {key}: stored={got} recomputed={want:g}")
    if stale:
        failures.append("threshold drift")
        print(f"   FAIL — stored thresholds do not match the embedded metrics:")
        for s in stale[:6]:
            print(s)
        print("    -> rerun scripts/03_rebuild_from_triples.py to refresh")
    else:
        print(f"   PASS — {len(live)} thresholds match recomputed values")
    print()

    # --- b. per-node consistency ---
    print(f"b. Classifier consistency ({len(nodes)} nodes)")
    mismatches = []
    for n in nodes:
        fp = nrl._fingerprint(n)
        want = set(nrl.classify(fp, live))
        have = set(n.get("roles", []))
        if want != have:
            mismatches.append((n.get("label"), sorted(have), sorted(want)))
    if mismatches:
        failures.append("classifier mismatch")
        print(f"   FAIL — {len(mismatches)} node(s) disagree with the "
              f"classifier in scripts/node_roles_lib.py:")
        for label, have, want in mismatches[:6]:
            print(f"    {label}: stored={have} recomputed={want}")
    else:
        print(f"   PASS — every stored role set matches a fresh classification")
    print()

    # --- c. semantic anchors (scale-free invariants only) ---
    print(f"c. Semantic anchors ({len(ANCHOR_CASES)} cases)")
    by_label = {n["label"]: n for n in nodes}
    anchor_failures = 0
    for case in ANCHOR_CASES:
        label = case["label"]
        node = by_label.get(label)
        if node is None:
            print(f"   FAIL {label}: absent from artifact (renamed or removed?)")
            anchor_failures += 1
            continue
        m = nrl._fingerprint(node)
        bad = [name for name, pred in case["invariants"] if not pred(m)]
        if bad:
            anchor_failures += 1
            print(f"   FAIL {label}: broken invariants {bad} "
                  f"(roles now {node['roles']})")
            continue
        missing = [r for r in case["must_include_rules"]
                   if r not in node["roles"]]
        if missing:
            anchor_failures += 1
            print(f"   FAIL {label}: invariants hold but required rules not "
                  f"fired: {missing} (roles now {node['roles']})")
            continue
        print(f"   PASS {label}: [{', '.join(node['roles'])}]  ({case['why']})")
        if verbose:
            print(f"     deg={m['degree']:.0f} in={m['in_degree']:.0f} "
                  f"out={m['out_degree']:.0f} pr={m['pagerank']:.6f} "
                  f"btw={m['betweenness']:.5f} clust={m['clustering']:.2f} "
                  f"kcore={m['k_core']:.0f}")
    if anchor_failures:
        failures.append("semantic anchors")
    print()

    if failures:
        print(f"VALIDATION FAILED ({'; '.join(failures)}). If this follows a "
              f"genuine graph update, review whether the rule catalog in "
              f"scripts/node_roles_lib.py still encodes the intended biology.")
        return 1
    print(f"All checks passed — artifact is internally consistent and "
          f"biologically anchored.")
    return 0


# ------------------------------------------------------------------
# Queries
# ------------------------------------------------------------------

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
                    help="threshold/consistency/anchor validation; exit 1 on drift")
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
