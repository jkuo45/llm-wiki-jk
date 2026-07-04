"""
Visualize triples from a JSON file using Graphviz with color-coded nodes and edges.
Filters to meaningful predicates only and limits to top entities by connectivity.
"""
import argparse
import json
from collections import Counter, defaultdict

from graphviz import Digraph


# Node colors by entity category
NODE_COLORS = {
    "gene": "#E8F5E9",
    "protein": "#C8E6C9",
    "enzyme": "#A5D6A7",
    "disease": "#FFCDD2",
    "medical_condition": "#FFCDD2",
    "chemical": "#BBDEFB",
    "chemical_compound": "#BBDEFB",
    "pathway": "#FFF9C4",
    "biological_process": "#FFF9C4",
    "cell_type": "#E1BEE7",
    "transcription_factor": "#B39DDB",
    "scientific_concept": "#FFE0B2",
    "drug": "#B2DFDB",
    "symptom": "#F8BBD0",
    "treatment": "#B2EBF2",
    "pharmacological_action": "#C8E6C9",
    "unknown": "#F5F5F5",
    "hub": "#FFD700",
}

# Edge colors by predicate type
EDGE_COLORS = {
    "causes": "#D32F2F",
    "activates": "#388E3C",
    "inhibits": "#1976D2",
    "regulates": "#F57C00",
    "associated_with": "#7B1FA2",
    "binds_to": "#00838F",
    "produces": "#2E7D32",
    "converts_to": "#E64A19",
    "is_a": "#546E7A",
    "required_for": "#6A1B9A",
    "connected_to": "#78909C",
    "links_to": "#90A4AE",
    "activated_by": "#43A047",
    "inhibited_by": "#1565C0",
    "regulated_by": "#EF6C00",
    "produced_by": "#388E3C",
    "described_as": "#BDBDBD",
    "component_of": "#607D8B",
    "biomarker_of": "#AD1457",
}

# Predicate types worth keeping (skip noise predicates)
MEANINGFUL_PREDICATES = {
    "causes", "activates", "inhibits", "regulates", "associated_with",
    "binds_to", "produces", "converts_to", "is_a", "required_for",
    "connected_to", "links_to", "activated_by", "inhibited_by",
    "regulated_by", "produced_by", "described_as", "component_of",
    "biomarker_of", "has_type",
}


def load_entity_types(triples_dir):
    """Load entity_type from md files in the directory."""
    import os
    import re
    entity_types = {}
    md_dir = os.path.join(triples_dir, '..', 'notes', 'epigenetics') if 'scripts' in triples_dir else triples_dir
    # Try the correct path
    base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    md_dir = os.path.join(base, 'notes', 'epigenetics')
    if not os.path.exists(md_dir):
        return entity_types
    for fname in os.listdir(md_dir):
        if not fname.endswith('.md'):
            continue
        fpath = os.path.join(md_dir, fname)
        with open(fpath) as f:
            content = f.read()
        m = re.search(r'entity_type:\s*(\S+)', content)
        if m:
            entity_types[fname.replace('.md', '')] = m.group(1)
    return entity_types


def get_entity_category(name, entity_types, triples):
    """Determine entity category."""
    # Check explicit entity_type
    if name in entity_types:
        return entity_types[name].lower()
    # Infer from predicates
    for t in triples:
        if t['subject'] == name and t['predicate'] == 'has_type':
            return t['object'].lower()
    # Infer from common keywords
    low = name.lower()
    if any(g in low for g in ['gene', 'mrna', 'dna', 'cdna', 'lncrna']):
        return 'gene'
    if any(p in low for p in ['protein', 'receptor', 'factor', 'kinase']):
        return 'protein'
    if any(e in low for e in ['ase', 'dnmt', 'hat', 'hdac', 'hmt']):
        return 'enzyme'
    if any(d in low for d in ['disease', 'syndrome', 'cancer', 'tumor', 'degeneration']):
        return 'disease'
    if any(c in low for c in ['acid', 'compound', 'drug', 'inhibitor', 'molecule']):
        return 'chemical_compound'
    return 'unknown'


def main():
    parser = argparse.ArgumentParser(
        description="Visualize triples from a JSON file using Graphviz with color coding."
    )
    parser.add_argument("input_file", help="Path to the input JSON file containing triples.")
    parser.add_argument("output_base", help="Base name for the output files (PNG and SVG).")
    parser.add_argument("--max-nodes", type=int, default=80, help="Maximum number of nodes to include (default: 80)")
    parser.add_argument("--min-edges", type=int, default=2, help="Minimum edge count for node inclusion (default: 2)")
    args = parser.parse_args()

    with open(args.input_file) as f:
        triples = json.load(f)

    # Filter to meaningful predicates
    filtered = [t for t in triples if t['predicate'] in MEANINGFUL_PREDICATES]

    # Count node degree
    degree = Counter()
    for t in filtered:
        degree[t['subject']] += 1
        degree[t['object']] += 1

    # Count edge frequency per pair
    edge_count = Counter()
    for t in filtered:
        key = (t['subject'], t['predicate'], t['object'])
        edge_count[key] += 1

    # Get top nodes by degree
    top_nodes = set()
    for node, count in degree.most_common(args.max_nodes):
        if count >= args.min_edges:
            top_nodes.add(node)

    # Filter edges to only include top nodes
    edges = []
    for t in filtered:
        if t['subject'] in top_nodes and t['object'] in top_nodes:
            edges.append(t)

    # Load entity types
    entity_types = load_entity_types(args.input_file)
    
    # Also extract has_type from triples
    type_map = {}
    for t in triples:
        if t['predicate'] == 'has_type':
            type_map[t['subject']] = t['object']

    # Build graph
    dot = Digraph(comment=f"Epigenetics Knowledge Graph ({len(top_nodes)} nodes, {len(edges)} edges)", 
                  format="png")
    dot.attr(rankdir="LR", size="24,24", dpi="150", 
             label=f"Epigenetics Knowledge Graph\n{len(top_nodes)} central entities, {len(edges)} relations",
             fontsize="16", labelloc="t")
    dot.attr("node", shape="box", style="rounded,filled", fontname="Helvetica", fontsize="9")
    dot.attr("edge", fontname="Helvetica", fontsize="7", penwidth="1.2")

    # Add nodes with category-based coloring
    for node in top_nodes:
        # Determine category
        cat = get_entity_category(node, entity_types, triples)
        if cat in type_map:
            cat = type_map[cat]
        color = NODE_COLORS.get(cat, NODE_COLORS["unknown"])
        # Highlight hub nodes (high degree)
        deg = degree[node]
        if deg > args.min_edges * 5:
            color = NODE_COLORS["hub"]
            dot.node(node, node, fillcolor=color, style="filled,bold", penwidth="2")
        else:
            dot.node(node, node, fillcolor=color, penwidth="1")

    # Add edges with predicate-based coloring
    added_edges = set()
    for t in edges:
        key = (t['subject'], t['predicate'], t['object'])
        if key in added_edges:
            continue
        added_edges.add(key)
        color = EDGE_COLORS.get(t['predicate'], "#9E9E9E")
        dot.edge(t['subject'], t['object'], label=t['predicate'], color=color, fontcolor=color)

    # Render
    dot.render(args.output_base, cleanup=True)
    print(f"Generated: {args.output_base}.png ({len(top_nodes)} nodes, {len(edges)} edges)")

    dot.format = "svg"
    dot.render(args.output_base, cleanup=True)
    print(f"Generated: {args.output_base}.svg ({len(top_nodes)} nodes, {len(edges)} edges)")

    # Also generate DOT format
    dot.format = "dot"
    dot.render(args.output_base, cleanup=True)
    print(f"Generated: {args.output_base}.dot")


if __name__ == "__main__":
    main()
