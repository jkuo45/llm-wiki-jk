#!/usr/bin/env python3
"""Unified entry point for the scripts package: `python -m scripts <command>`.

Every command maps 1:1 to a module in a domain subpackage (see the table in
scripts/README.md). Modules are imported lazily, so `--help` needs no heavy
dependencies — graphify/networkx/scipy are only required by the commands
that use them.

Run:  python -m scripts --help            # list commands
      python -m scripts rebuild-triples   # full pipeline command examples in
      python -m scripts sync-graph --dry-run   # scripts/README.md
"""

from __future__ import annotations

import sys

# command -> (module path, one-line description)
COMMANDS: dict[str, tuple[str, str]] = {
    # --- triples graph (scripts/triples/) ---
    "rebuild-triples": ("scripts.triples.rebuild", "Rebuild the triples graph + triples-* web artifacts"),
    "normalize-triples": ("scripts.triples.normalize", "Normalize/validate per-topic _triples.json files"),
    "visualize-triples": ("scripts.triples.visualize", "Render a triples JSON to a dot/svg graph"),
    # --- wiki graph (scripts/wiki/) ---
    "rebuild-wiki": ("scripts.wiki.rebuild", "Rebuild the wikilink graph + wiki-* web artifacts (auto-runs build-combined)"),
    # --- combined dataset (scripts/combined/) ---
    "build-combined": ("scripts.combined.build", "Merge triples+wiki datasets into the default web dataset + diff report"),
    # --- analyses (scripts/analysis/) ---
    "analyze-nodes": ("scripts.analysis.node_analysis", "Multi-node graph analysis (paths, spectral, PageRank, ...)"),
    "predict-links": ("scripts.analysis.link_prediction", "Adamic-Adar link prediction vs a random-pair null"),
    "query-roles": ("scripts.analysis.role_query", "Query/validate node biological roles"),
    # --- Supabase sync (scripts/sync/) ---
    "sync-graph": ("scripts.sync.graph_to_db", "Mirror the base graph layer into Supabase"),
    "sync-content": ("scripts.sync.content_to_db", "Mirror the content registry + star flags into Supabase"),
    # --- vault (scripts/vault/) ---
    "readme-counts": ("scripts.vault.readme_counts", "Update topic README counts/tables from the vault"),
    # --- tools (scripts/tools/) ---
    "thumbnail": ("scripts.tools.thumbnail", "Generate note-page thumbnails"),
    "pdf-to-md": ("scripts.tools.pdf_to_md", "Parse a PDF to Markdown (Obsidian-friendly)"),
    "sort-manifest-tags": ("scripts.tools.sort_manifest_tags", "Sort src/images/manifest.json tags by relevance"),
    "check-page-links": ("scripts.tools.page_links", "Audit/normalize outbound links in web pages (--check | --fix)"),
}


def _usage() -> str:
    lines = ["usage: python -m scripts <command> [args...]", "", "commands:"]
    width = max(len(cmd) for cmd in COMMANDS)
    for cmd, (_, desc) in COMMANDS.items():
        lines.append(f"  {cmd:<{width}}  {desc}")
    lines.append("")
    lines.append("Run `python -m scripts <command> --help` for per-command options.")
    return "\n".join(lines)


def main(argv: list[str] | None = None) -> int:
    argv = list(sys.argv[1:] if argv is None else argv)
    if not argv or argv[0] in ("-h", "--help"):
        print(_usage())
        return 0
    cmd = argv[0]
    if cmd not in COMMANDS:
        print(f"unknown command: {cmd}\n", file=sys.stderr)
        print(_usage(), file=sys.stderr)
        return 2
    module_name, _ = COMMANDS[cmd]
    import importlib

    module = importlib.import_module(module_name)
    # Hand the remaining args to the module's argparse, with a helpful prog.
    sys.argv = [f"python -m scripts {cmd}"] + argv[1:]
    rc = module.main()
    return rc if isinstance(rc, int) else 0


if __name__ == "__main__":
    raise SystemExit(main())
