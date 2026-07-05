"""
Visualize triples from a JSON file using Graphviz with color-coded nodes and edges.
Generates PNG, SVG, and DOT output.

Usage:
    uv run scripts/03_visualize_triples.py <input.json> <output_base> [--max-nodes N] [--min-edges N]
"""

import argparse
import json
from collections import Counter

from graphviz import Digraph

# ── Node color palette (maps has_type values to colors) ─────────────────────
NODE_COLORS = {
    "gene": "#E2E8F0",
    "genetic_variant": "#E2E8F0",
    "protein": "#E2E8F0",
    "enzyme": "#E2E8F0",
    "receptor": "#E2E8F0",
    "transporter": "#E2E8F0",
    "ion_channel": "#E2E8F0",
    "disease": "#FDE8E8",
    "medical_condition": "#FDE8E8",
    "symptom": "#FDE8E8",
    "adverse_effect": "#FDE8E8",
    "chemical_compound": "#DBEAFE",
    "chemical_class": "#DBEAFE",
    "chemical": "#DBEAFE",
    "drug": "#DBEAFE",
    "toxin": "#DBEAFE",
    "metabolite": "#DBEAFE",
    "biological_process": "#F0F0E0",
    "pathway": "#F0F0E0",
    "biological_molecule": "#F0F0E0",
    "scientific_concept": "#F0F0E0",
    "scientific_theory": "#F0F0E0",
    "biomarker": "#F0F0E0",
    "pharmacological_action": "#E2E8F0",
    "pharmacokinetic_parameter": "#E2E8F0",
    "cell_type": "#E8E0F0",
    "anatomy": "#E8E0F0",
    "microorganism": "#E8E0F0",
    "antibody": "#E8E0F0",
    "treatment": "#DBEAFE",
    "diagnostic_test": "#E2E8F0",
    "analytical_technique": "#E2E8F0",
    "imaging_technique": "#E2E8F0",
    "surgical_procedure": "#DBEAFE",
    "vaccine": "#DBEAFE",
    "model_organism": "#E8E0F0",
    "organization": "#F0F0E0",
    "laboratory_standard": "#F0F0E0",
    "clinical_sign": "#FDE8E8",
    "hub": "#FDE68A",
    "unknown": "#F1F5F9",
}

# ── Edge color palette ──────────────────────────────────────────────────────
EDGE_COLORS = [
    "#65A30D",
    "#DC2626",
    "#D97706",
    "#B91C1C",
    "#7C3AED",
    "#0891B2",
    "#EA580C",
    "#2563EB",
    "#9333EA",
    "#64748B",
    "#94A3B8",
    "#BE185D",
    "#16A34A",
    "#0D9488",
]


def _infer_type(name: str, type_map: dict[str, str]) -> str:
    """Look up entity type from has_type triples; return 'unknown' if absent."""
    return type_map.get(name, "unknown")


def _pred_color(pred: str) -> str:
    """Assign a colour to a predicate by matching keywords in the predicate string.

    Falls back to a stable hash-based colour from EDGE_COLORS for unrecognised predicates.
    """
    p = pred.lower().replace("-", "_")

    # Identity / classification
    if p in ("is", "are", "is_a"):
        return "#94A3B8"

    # ── Keyword-based pattern matching ─────────────────────────────────────
    patterns = [
        # Inhibition / blocking
        (["inhibit", "block", "impair", "suppress"], "#DC2626"),
        # Activation / enhancement / increase
        (["activ", "enhanc", "increas", "promot", "stimul"], "#65A30D"),
        # Reduction / prevention / decrease
        (
            [
                "prevent",
                "reduc",
                "decreas",
                "avoid",
                "bypass",
                "slow",
                "neutraliz",
                "protect",
            ],
            "#16A34A",
        ),
        # Metabolism / chemical transformation
        (["metabol", "methylat", "oxid", "reduc", "conjug"], "#0891B2"),
        # Production / synthesis
        (["produc", "synthes", "generat", "convert", "transfer"], "#0D9488"),
        # Transport / reuptake
        (["reuptak", "transport", "clear", "efflux", "influx", "uptak"], "#0891B2"),
        # Location / expression / abundance
        (
            [
                "express",
                "locat",
                "abund",
                "sparse",
                "found_in",
                "present_in",
                "inactive_in",
                "part_of",
                "component",
            ],
            "#2563EB",
        ),
        # Composition / containment
        (["contain", "comprise", "include", "consist"], "#64748B"),
        # Support / requirement
        (["support", "requir", "need", "essential", "critical", "depend"], "#9333EA"),
        # Regulation / modulation / control
        (
            [
                "regulat",
                "modulat",
                "determin",
                "control",
                "maintain",
                "predomin",
                "dominat",
            ],
            "#D97706",
        ),
        # Causation
        (["caus", "lead_to", "result_in", "trigger", "induc"], "#B91C1C"),
        # Association / correlation / risk
        (
            [
                "associ",
                "risk",
                "correl",
                "link",
                "influenc",
                "sensitive",
                "suscept",
                "predict",
            ],
            "#7C3AED",
        ),
        # Response / treatment
        (["treat", "respond", "target", "effect", "efficac", "therap"], "#D97706"),
        # Impact / effect
        (["impact", "affect", "modif", "alter", "change"], "#D97706"),
        # Binding / interaction
        (["bind", "interact", "depend"], "#0D9488"),
    ]

    for keywords, color in patterns:
        if any(kw in p for kw in keywords):
            return color

    # Fallback: stable hash
    idx = hash(p) % len(EDGE_COLORS)
    return EDGE_COLORS[idx]


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Visualize triples with colour-coded nodes and edges."
    )
    parser.add_argument("input_file", help="Path to JSON triples file")
    parser.add_argument(
        "output_base", help="Base name for output files (PNG, SVG, DOT)"
    )
    parser.add_argument(
        "--max-nodes", type=int, default=120, help="Max nodes (default 120)"
    )
    parser.add_argument(
        "--min-edges",
        type=int,
        default=1,
        help="Min edge count for inclusion (default 1)",
    )
    args = parser.parse_args()

    with open(args.input_file) as f:
        triples = json.load(f)

    # Build type map from has_type triples
    type_map: dict[str, str] = {}
    for t in triples:
        if t.get("predicate") == "has_type":
            type_map[t["subject"]] = t["object"].lower()

    # Count degree for every entity
    degree: Counter = Counter()
    for t in triples:
        degree[t["subject"]] += 1
        degree[t["object"]] += 1

    # Filter to top nodes
    top = {n for n, d in degree.most_common(args.max_nodes) if d >= args.min_edges}

    # Filter edges
    edges = [t for t in triples if t["subject"] in top and t["object"] in top]

    # ── Build graph ──────────────────────────────────────────────────────
    dot = Digraph(comment="Knowledge Graph", format="png")
    dot.attr(
        rankdir="LR",
        size="30,45",
        dpi="150",
        bgcolor="#FAFAFA",
        pad="0.5",
    )
    dot.attr(
        "node", shape="box", style="rounded,filled", fontname="Helvetica", fontsize="9"
    )
    dot.attr("edge", fontname="Helvetica", fontsize="7", penwidth="1.4")

    # Add nodes
    for node in sorted(top, key=lambda n: -degree[n]):
        cat = _infer_type(node, type_map)
        color = NODE_COLORS.get(cat, NODE_COLORS["unknown"])
        deg = degree[node]
        if deg > 10:
            dot.node(
                node,
                node,
                fillcolor=NODE_COLORS["hub"],
                style="filled,bold",
                penwidth="2.5",
                fontsize="10",
            )
        elif deg > 5:
            dot.node(
                node,
                node,
                fillcolor=color,
                style="filled,bold",
                penwidth="1.8",
                fontsize="9.5",
            )
        else:
            dot.node(node, node, fillcolor=color, penwidth="1.2")

    # Add edges
    seen: set = set()
    for t in edges:
        key = (t["subject"], t["predicate"], t["object"])
        if key in seen:
            continue
        seen.add(key)
        c = _pred_color(t["predicate"])
        dot.edge(
            t["subject"],
            t["object"],
            label=t["predicate"],
            color=c,
            fontcolor=c,
            fontsize="6.5",
        )

    # Render
    dot.render(args.output_base, cleanup=True)
    print(f"PNG → {args.output_base}.png  ({len(top)} nodes, {len(edges)} edges)")

    dot.format = "svg"
    dot.render(args.output_base, cleanup=True)
    print(f"SVG → {args.output_base}.svg")

    dot.format = "dot"
    dot.render(args.output_base, cleanup=True)
    print(f"DOT → {args.output_base}.dot")


if __name__ == "__main__":
    main()
