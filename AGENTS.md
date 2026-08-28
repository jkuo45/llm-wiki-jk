# AGENTS.md — llm-wiki-jk

An Obsidian-flavored biomedical knowledge base (mitohormesis, sirtuins, autophagy,
senescence, oxidative stress, pharmacology, etc.) with a three-mode knowledge-graph
viewer, a prompt backend, and graph-build tooling.

---

## 1. Repository Layout

| Path               | Purpose                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `src/notes/`       | The wiki. Subdirectories are **topics** (`_link/` holds cross-topic shared entities). Each `.md` is one entity or document note.      |
| `src/tasks/`       | Task/analysis outputs. Default save location for task outputs.                                                                        |
| `src/images/`      | Ingested images per `image-ingest` skill; `manifest.json` is the source of truth.                                                     |
| `raw/`             | Unprocessed documents awaiting the Document Ingestion Workflow (§5).                                                                  |
| `scripts/`         | Numbered pipeline: `00_` README counts, `03_` triples graph, `04_` analyses, `05_` wiki/combined graphs, `99_` utilities.             |
| `graphify-out/`    | Triples-graph artifacts (`graph.json`, `GRAPH_REPORT.md`, `graph.html`).                                                              |
| `wiki-out/`        | Wiki-graph artifacts (`wiki-graph.json`, diff/orphan/link-prediction reports).                                                        |
| `web/`             | Vite + Three.js graph site. Static data in `web/public/data/`; built with `npm run build`, deployed with `npm run deploy` (wrangler). |
| `api/`             | FastAPI adapter (SSE prompt bridge to headless `opencode serve`, networkx graph ops, user-built graphs `/v1/graphs`, pluggable research adapters + triple review queue `/v1/research`; mirrors the base graph layer from Supabase via `api/db.py`).                 |
| `deploy/`          | `dev.sh` (local: opencode serve + API) and `install.sh` (server bootstrap, systemd units).                                            |
| `.opencode/agent/` | `wiki-prompt.md` (read-only public agent), `wiki-util.md`.                                                                            |
| `.agents/skills/`  | `obsidian-markdown`, `image-ingest`, `triples`, `graphify` helpers, persona skills.                                                   |

Node IDs are canonicalised by `norm(label)` (Unicode-normalised, Greek letters
transliterated), so the same entity joins cleanly across all three graph
datasets: **Triples** (`_triples.json` → `graphify-out/graph.json`), **Wiki**
(`[[wikilinks]]` → `wiki-out/wiki-graph.json`), and **Combined**
(`web/public/data/nodes.json` — the default UI dataset, wiki community ids
offset by +1000).

---

## 2. Conventions

- **Timestamps** (README display, task outputs, file naming):
  `%d_%b_%Y %I:%M %p %Z` — e.g. `27_Aug_2026 09:30 AM PDT`, uppercase.
  Frontmatter dates are the exception: always `YYYY-MM-DD`.
- **Filename uniqueness**: every `.md` filename must be unique across all of
  `src/notes/` (topics _and_ `_link/`). Obsidian resolves wiki links globally
  by filename; duplicates are ambiguous.
- **Python**: run scripts with `uv run --with <deps>` (see script docstrings
  for the exact deps, e.g. `uv run --with networkx --with scipy`).
- **Graphify** is installed as a uv tool; builds knowledge graphs and answers
  graph queries (§4).
- **Translation**: prefer `deep-translator` (Google engine) via `uv run
--with deep-translator`; review biomedical terminology before publishing.
- **New pages**: check whether a language-specific version already exists
  before adding one; register new articles in the site index artifacts —
  `web/public/sitemap.xml`, `web/public/data/articles.json`, `web/public/llms.txt`.
- **Commit messages**: `chore(<scope>): <short lowercase description>` —
  single line, lowercase after the colon, ≤ ~72 chars. Scope optional.

---

## 3. Frontmatter (Open Knowledge Format)

Rules:

- `created:` / `updated:` use `YYYY-MM-DD` (never the display format).
- Prefer unquoted scalars; quote only when required (colons, specials).
- No duplicate YAML keys at the same level.
- **Never put `[[wiki links]]` in frontmatter** — plain text only.
- All tag values kebab-case; `entity_type_1` must be one of the `tags` values.
- `protected: true` prevents relocation to `_link/` (see §7).

**Entity note:**

```yaml
title: Entity Name
description: Short description
protected: false
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: [entity_type_1, related-tag]
url: #
source: #
aliases: [Alt Name, ACRONYM]
```

**Document note** (filename prefix `_document_ - `):

```yaml
title: Full title of the source document
description: Short summary
published: YYYY-MM-DD
created: YYYY-MM-DD # date ingested into the vault
source: URL or DOI
author: []
tags: [...]
```

---

## 4. Retrieval Guidelines

When answering biomedical questions, in priority order:

1. **Notes first** — search `src/notes/` (including `_link/`); wiki content is
   the primary basis for answers.
2. **Supplement** with general biomedical knowledge when notes fall short;
   clearly distinguish the two sources.
3. **Cross-reference** — link entities as `[[Entity Name]]` (canonical titles)
   to reinforce the knowledge graph.
4. **Graphify traversal** when `graphify-out/graph.json` exists:
   - `graphify query "<question>"` — BFS context (add `--dfs` to trace a
     specific chain; `--budget N` caps tokens).
   - `graphify path "A" "B"` — shortest hop-by-hop path between two entities.
   - `graphify explain "Entity"` — single node's connections, sources, role.
   - Expand queries against the graph's vocabulary first. Answer only from
     graph content; cite `source_location` for specific facts.

---

## 5. Document Ingestion Workflow

| Step                            | Action                                                                                                                                                                                                                   | Output                   |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| **1. Ingest**                   | Use the `obsidian-markdown` skill: convert the raw doc to Obsidian markdown in place — frontmatter, callouts for key insights, `[[wiki links]]` on biomedical entities (checklist below). Preserve all original content. | Linked markdown file     |
| **2. Enrich / Create entities** | Existing notes: enrich with document-specific info; update `Documents`, `Connections`, `Linking Summary`; bump `updated:`. New notes: create in the topic dir with OKF frontmatter and the same three sections.          | New/updated entity notes |
| **3. Review stubs & orphans**   | Cross-reference all entities against every topic + `_link/`. Create notes for high-frequency, well-defined concepts; normalize composites; apply Orphan Link Resolution (§6).                                            | Resolved stubs and links |
| **4. Update README**            | Update the topic `README.md` (documents table + entity index).                                                                                                                                                           | Updated topic README     |

### Wiki-link checklist (Step 1)

- Link **every distinct biomedical entity** on its **first meaningful
  mention** — genes, proteins, enzymes, cytokines, pathways, diseases, drugs,
  processes, anatomical structures, cell types. Don't over-link; skip common
  words unless the note adds context.
- **Canonical titles**: match exact filenames (`[[NAD+]]`, not `[[NAD⁺]]`).
  Resolve against `_link/` and topic dirs before inventing new links.
- New entities: still link them (`[[New Entity]]`, spaces not underscores) and
  note them at the end of the document for Step 3.
- Bare links only — no path prefixes (`[[Entity]]`, never `[[notes/topic/Entity]]`).
- No wiki links in data files (triples JSON, dot, SVG) — `.md` targets only.
- **Split composites** into one link per entity (`[[DAF-16]]`/`[[FOXO]]`);
  keep alternative-names pairs single (`[[p62/SQSTM1]]` → `[[p62]]`).
- Display text is fine: `[[Retinoblastoma Protein|Rb]]`.
- Use callouts (`> [!info]`, `[!tip]`, `[!important]`, `[!warning]`) for
  mechanisms, clinical significance, key findings.
- Headings: drop enumeration unless it's meaningful (chronology, scale).
- Entity notes end with `## Documents`, `## Connections`, `## Linking Summary`
  (bidirectional connections with 2–3 sentence justifications).

### Depth & evidence (Step 2)

- Preserve existing content but reorganize for coherence; accuracy first.
- Scale depth to the entity: 800–3000+ words for well-established entities —
  mechanisms, landmark studies (PMIDs/DOIs), controversies, clinical relevance.
- Clearly separate established knowledge from emerging findings.

### Entity structure templates

_Gene / protein / enzyme_: Overview → Structure & Domains → Mechanism of
Action & Pathways → Physiological Function → Pathology & Clinical Relevance.

_Disease / disorder_: Etiology & Pathophysiology → Clinical Presentation &
Biomarkers → Therapeutic Landscape.

_Chemical / compound / drug_: Chemical Properties & Classification →
Pharmacodynamics & Pharmacokinetics → Applications.

---

## 6. Orphan Link Resolution

Periodic audits, in priority order: (1) redirectable mismatches, (2)
high-frequency true orphans (≥10 links), (3) note the rest for future
enrichment.

Normalizations (verify canonical filenames first):

- **Capitalization**: `[[cisplatin]]` → `[[Cisplatin]]`.
- **Pluralization**: `[[Concept]]` → `[[Concepts]]` if only the plural exists.
- **Hyphen/space variants**: `[[Caspase 9]]` → `[[Caspase-9]]`, `[[IRS-1]]` → `[[IRS1]]`.
- **Unicode/Greek**: `[[IKKβ]]` → `[[IKKbeta]]`, `[[NAD⁺]]` → `[[NAD+]]`,
  `[[Ca²⁺]]` → `[[Calcium Ions]]`.
- **Abbreviation expansion** (unambiguous only): `[[OXPHOS]]` →
  `[[Oxidative Phosphorylation]]`, `[[PFC]]` → `[[Prefrontal Cortex]]`.
- **Trailing punctuation**: `[[Merck & Co. Inc.]]` → `[[Merck & Co. Inc]]`.
- **Escaped pipes** in tables: `[[Link\|Display]]` → `[[Link|Display]]`.
- **Triple brackets**: `[[[rapamycin]]` → `[[Rapamycin]]`.
- **Composite splitting**: see checklist in §5.

---

## 7. Overlapping Link Resolution (`_link/` semantics)

- `src/notes/_link/` is the **single source of truth** for entities referenced
  across multiple topics (e.g. `Inflammation.md`, `NAD+.md`). Topic dirs keep
  their hub note (filename == directory name) and topic-specific entities only.
- **Prevention check**: before creating any entity, verify no same-named file
  exists anywhere in `src/notes/`.
- Overlapping new entity → merge (append) its content into the `_link/`
  version; keep only the consolidated file there. The note still stays listed
  on the original topic's README.
- **Protected entities**: frontmatter `protected: true` files are **never**
  moved to `_link/` (topic hubs are protected by this flag too). Frontmatter
  is the single source of truth — no hardcoded lists.

---

## 8. Graph & Site Pipeline

Regenerating web data (all keyed by `norm(label)`):

```bash
# Triples graph + triples-* web files (graphify-out/, web/public/data/)
uv run --with graphifyy --with networkx --with scipy python3 scripts/03_rebuild_from_triples.py

# Wiki graph from [[wikilinks]] (wiki-out/) — auto-runs the combined build
uv run --with graphifyy --with networkx --with scipy python3 scripts/05_rebuild_from_wiki.py

# Combined default dataset + diff report (wiki-out/graph-diff.json, GRAPH_DIFF.md)
uv run --with networkx python3 scripts/05_build_combined.py

# Analyses (work on any graph schema-compatible file via --graph)
uv run --with networkx python3 scripts/04_node_analysis.py --graph wiki-out/wiki-graph.json --sources sirt1 --targets mtorc1
uv run --with networkx python3 scripts/04_link_prediction.py --graph graphify-out/graph.json
uv run python3 scripts/04_role_query.py --roles-file web/public/data/node_roles.json --role Spreader --top 10

# Mirror base layer into Supabase (topics/entities/edges/metrics/predictions;
# incremental on version.json hash — needs SUPABASE_URL + SUPABASE_SERVICE_KEY
# in env or repo .env, which is git-ignored). Run after any graph rebuild.
uv run --no-build --with supabase --with pyyaml --with networkx python3 scripts/07_sync_to_db.py

# Offline API test suite (tests/; no Supabase or opencode server needed)
uv run --no-build --with pytest --with pytest-asyncio --with fastapi --with httpx \
  --with networkx --with numpy --with scipy --with pydantic --with python-multipart \
  --with pillow python3 -m pytest tests/ -q
```

Notes:

- `web/public/data/graph.json` is retired; the frontend reads the canonical
  `nodes.json`/`edges.json`/`legend.json`/`graph-meta.json` plus the
  `triples-*`/`wiki-*` source files per mode. The backend (`api/`) reads
  `graphify-out/graph.json` directly.
- Analyses/tasks written before the wiki graph existed were computed on the
  **triples** graph; state the graph (mode) explicitly when running new analyses.
- README counts/tables: `scripts/00_readme_update_counts.py`.

## 9. Running Locally

```bash
./deploy/dev.sh                 # opencode serve + FastAPI adapter (foreground)
cd web && npm run dev           # Vite dev server for the graph UI
cd web && npm run deploy        # vite build && wrangler deploy (production)
```

`api/main.py` is the only public-facing process; `opencode serve` binds to
loopback and is never exposed. The `wiki-prompt` agent is strictly read-only
(no bash/write/network tools) and answers in the user's language, referencing
`[[Entity Name]]` links for UI highlighting.
