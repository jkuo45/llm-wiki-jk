import argparse
import json

from graphviz import Digraph


def main():
    parser = argparse.ArgumentParser(
        description="Visualize triples from a JSON file using Graphviz."
    )
    parser.add_argument(
        "input_file", help="Path to the input JSON file containing triples."
    )
    parser.add_argument(
        "output_base", help="Base name for the output files (PNG and SVG)."
    )
    args = parser.parse_args()

    input_file = args.input_file
    output_base = args.output_base

    # Load triples
    with open(input_file, "r") as f:
        triples = json.load(f)

    # Initialize Digraph
    dot = Digraph(comment="Knowledge Graph Triples", format="png")
    dot.attr(rankdir="LR", size="12,12")
    dot.attr(
        "node",
        shape="box",
        style="rounded,filled",
        color="lightblue",
        fontname="Helvetica",
    )
    dot.attr("edge", fontname="Helvetica", fontsize="10")

    # Add edges
    for triple in triples:
        subject = triple["subject"]
        predicate = triple["predicate"]
        obj = triple["object"]

        dot.edge(subject, obj, label=predicate)

    # Render PNG
    dot.render(output_base, cleanup=True)
    print(f"Generated PNG: {output_base}.png")

    # Render SVG
    dot.format = "svg"
    dot.render(output_base, cleanup=True)
    print(f"Generated SVG: {output_base}.svg")


if __name__ == "__main__":
    main()
