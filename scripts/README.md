# scripts/

Domain-packaged pipeline for the vault's knowledge graph, web data, and
Supabase sync. Every script is a module in a domain subpackage and is exposed
as a `python -m scripts <command>` subcommand (registered in `scripts/cli.py`):

```bash
python -m scripts --help          # list all commands
python -m scripts rebuild-triples # example
```

> All commands below assume repo root as cwd. Prefix with the `uv run
> --with <deps>` extras listed per command (see AGENTS.md §8 for the
> canonical full commands).

## Pipeline map

```
src/**/_triples.json          src/notes/**/*.md ([[wikilinks]])
        │                              │
        ▼                              ▼
  triples/rebuild.py ──────►  wiki/rebuild.py
  (graphify-out/graph.json,   (wiki-out/graph.json,
   triples-* web files,        wiki-* web files,
   auto-runs predict-links)    auto-runs build-combined)
        │                              │
        └──────────► combined/build.py ◄────────┘
              (web/public/data/{nodes,edges,legend,...}.json
               + wiki-out/graph-diff.json / GRAPH_DIFF.md)
                             │
            ┌────────────────┴────────────────┐
            ▼                                 ▼
      sync/graph_to_db.py             sync/content_to_db.py
      (Supabase base layer)           (Supabase content registry)
```

Analyses (`analysis/`) run standalone on any schema-compatible graph file
via `--graph` — no rebuild required.

## Commands

| Command | Module | What it does | Deps (`uv run --with`) |
|---|---|---|---|
| `rebuild-triples` | `triples/rebuild.py` | Rebuild triples graph + `graphify-out/` + `triples-*` web artifacts; auto-runs link prediction | `graphifyy networkx scipy` |
| `normalize-triples` | `triples/normalize.py` | Normalize/validate per-topic `_triples.json` (`--check` for check-only) | — |
| `visualize-triples` | `triples/visualize.py` | Render a triples JSON to dot/svg | `graphviz` |
| `rebuild-wiki` | `wiki/rebuild.py` | Rebuild wikilink graph + `wiki-out/` + `wiki-*` web files; auto-runs `build-combined` | `graphifyy networkx scipy` |
| `build-combined` | `combined/build.py` | Merge triples+wiki into the default web dataset + diff report | `networkx` |
| `analyze-nodes` | `analysis/node_analysis.py` | Multi-node graph analysis (paths, Jaccard, spectral, PPR) | `networkx scipy` |
| `predict-links` | `analysis/link_prediction.py` | Adamic-Adar link prediction vs random-pair null | `networkx` |
| `query-roles` | `analysis/role_query.py` | Query/validate node biological roles | — |
| `sync-graph` | `sync/graph_to_db.py` | Mirror base graph layer into Supabase (needs `SUPABASE_URL`/`SUPABASE_SERVICE_KEY`) | `supabase pyyaml networkx` |
| `sync-content` | `sync/content_to_db.py` | Mirror content registry + star flags into Supabase | `supabase pyyaml` |
| `readme-counts` | `vault/readme_counts.py` | Update topic README counts/tables from the vault | — |
| `thumbnail` | `tools/thumbnail.py` | Generate note-page thumbnails | `pillow` |
| `pdf-to-md` | `tools/pdf_to_md.py` | Parse a PDF to Markdown (Obsidian-friendly) | `pymupdf4llm` |
| `sort-manifest-tags` | `tools/sort_manifest_tags.py` | Sort `src/images/manifest.json` tags by relevance | — |

## Layout

```
scripts/
  cli.py            # `python -m scripts <command>` dispatcher (lazy imports)
  __main__.py
  lib/              # shared, importable helpers (no CLI)
    graph_common.py #   norm(), graph metrics, web export helpers
    node_roles.py   #   biological role classifier (single source of truth)
  triples/ wiki/ combined/   # graph build pipelines
  analysis/                  # standalone graph analyses
  sync/                      # Supabase mirrors
  vault/                     # vault housekeeping (README counts)
  tools/                     # utilities (thumbnails, PDF, manifest)
```

## Conventions

- New scripts go in a domain subpackage; register the command in
  `scripts/cli.py` (add a lazy `COMMANDS` entry) and a row in the table above.
- Every module exposes `main()`; argparse reads `sys.argv` normally.
- Repo-root paths are derived from `Path(__file__).resolve().parents[2]` —
  scripts also bootstrap `sys.path` so they can run directly
  (`python3 scripts/<group>/<script>.py`) as well as via `python -m`.
- Shared logic belongs in `lib/`, not duplicated across pipelines.
