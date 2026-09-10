# AGENTS.md — llm-wiki-jk

An Obsidian-flavored biomedical knowledge base (mitohormesis, sirtuins, autophagy,
senescence, oxidative stress, pharmacology, etc.) with a three-mode knowledge-graph
viewer, a prompt backend, and graph-build tooling.

---

## 1. Repository Layout

| Path               | Purpose                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `src/notes/`       | The wiki. Subdirectories are **topics** (`_link/` is the resolver pool for shared, non-protected entities). Each `.md` is one entity or document note. |
| `src/tasks/`       | Task/analysis outputs. Default save location for task outputs.                                                                        |
| `src/images/`      | Ingested images per `image-ingest` skill; `manifest.json` is the source of truth.                                                     |
| `raw/`             | Unprocessed documents awaiting the Document Ingestion Workflow (§5).                                                                  |
| `scripts/`         | Domain-packaged pipeline: `lib/` shared helpers, `triples/` + `wiki/` + `combined/` graph builds, `analysis/`, `sync/` (Supabase), `vault/`, `tools/`. Run via `python -m scripts <command>` (see §8 and `scripts/README.md`). |
| `graphify-out/`    | Triples-graph artifacts (`graph.json`, `GRAPH_REPORT.md`, `graph.html`).                                                              |
| `wiki-out/`        | Wiki-graph artifacts (`graph.json`, diff/orphan/link-prediction reports).                                                              |
| `web/`             | Vite + Three.js graph site. Static data in `web/public/data/`; built with `npm run build`, deployed with `npm run deploy` (wrangler). UI styling contract: `web/public/tokens.css` (geometry/control tokens + hard rules in its header) — components use `--r-*`/palette vars, never raw px radii or theme-dependent hexes; `three-graph-light.css` only remaps token values. |
| `api/`             | FastAPI adapter (layered: `routers/` → `domain/` + `gateways/` — SSE prompt bridge to headless `opencode serve`, networkx graph ops, content-flag admin `/v1/flags`; mirrors the base graph layer from Supabase via `gateways/db.py`).                 |
| `deploy/`          | `dev.sh` (local: opencode serve + API) and `install.sh` (server bootstrap, systemd units).                                            |
| `.opencode/agent/` | `wiki-prompt.md` (read-only public agent), `wiki-util.md`.                                                                            |
| `.agents/skills/`  | `obsidian-markdown`, `image-ingest`, `triples`, `graphify` helpers, persona skills.                                                   |

Node IDs are canonicalised by `norm(label)` (Unicode-normalised, Greek letters
transliterated), so the same entity joins cleanly across all three graph
datasets: **Triples** (`_triples.json` → `graphify-out/graph.json`), **Wiki**
(`[[wikilinks]]` → `wiki-out/graph.json`), and **Combined**
(`web/public/data/nodes.json` — the default UI dataset, wiki community ids
offset by +1000).

---

## 2. Conventions

- **Timestamps** (README display, task outputs, file naming):
  `%d_%b_%Y %I:%M %p %Z` — e.g. `27_Aug_2026 09:30 AM PDT`, uppercase.
  Frontmatter dates are the exception: always `YYYY-MM-DD`.
- **Starring**: the Supabase `content_flags` table is the runtime source of
  truth (managed via the SPA admin panel + `api/flags.py`; schema in
  `deploy/supabase/content_flags.sql`). Frontmatter `starred:` in
  `src/tasks/*.md` and the static flags in `articles.json`/manifest.json are
  legacy fallbacks only — prefer the DB/admin panel for new changes.
- **Filename uniqueness**: every `.md` filename must be unique across all of
  `src/notes/` (topics _and_ `_link/`). Obsidian resolves wiki links globally
  by filename; duplicates are ambiguous.
- **Python**: run scripts with `uv run --with <deps>` (see script docstrings
  for the exact deps, e.g. `uv run --with networkx --with scipy`).
- **Graphify** is installed as a uv tool; builds knowledge graphs and answers
  graph queries (§4).
- **Translation**: review biomedical terminology before publishing.
- **New pages**: check whether a language-specific version already exists
  before adding one; register new articles in the site index artifacts —
  `web/public/sitemap.xml`, `web/public/data/articles.json`, `web/public/llms.txt`.
- **Commit messages**: `chore(<scope>): <short lowercase description>` —
  single line, lowercase after the colon, ≤ ~72 chars. Scope optional.
- **Headings / outline**: prefer descriptive `##` / `###` headings and outline
  structure without enumeration — no numbered prefixes (`## 1. Foo`,
  `## Step 1`, `## I. Foo`). Add numbering only when order itself is
  meaningful (chronology, sequence, scale, ranking).

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

**Document note** (filename prefix `_document_ -`):

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
- Headings: use descriptive headings and outline structure without
  enumeration (`## Overview`, not `## 1. Overview`). Number a heading only
  when the order itself is meaningful (chronology, sequence, scale, ranking).
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

## 7. Topic Home vs `_link/` Placement

- **Topic dir** (e.g. `cell-death/`) is the home for entities whose
  primary context is that topic — core machinery, hub note
  (filename == directory name), and any note with `protected: true`.
  Example: apoptosis/necroptosis/parthanatos executors, regulators,
  and complexes live in `cell-death/`.
- **`src/notes/_link/`** is the resolver pool for shared,
  non-protected entities with no single primary home (e.g.
  `Inflammation.md`, `NAD+.md`). It is **not** the single source of
  truth — a topic home outranks it. Its only hard guarantee: exactly
  one resolvable copy of each non-protected shared entity.
- **Prevention check**: before creating any entity, verify no
  same-named file exists anywhere in `src/notes/`.
- **New entity →** create in the topic dir if it has a clear primary
  home; otherwise create in `_link/`. Set `protected: true` only to
  pin a note to its topic home.
- **Overlap found →** merge (append) into the primary-home version
  if one qualifies, else into the `_link/` version; keep only the
  consolidated file. Never move `protected: true` notes to `_link/`.
  Frontmatter is the single source of truth — no hardcoded lists.

---

## 8. Graph & Site Pipeline

Regenerating web data (all keyed by `norm(label)`):

```bash
# Triples graph + triples-* web files (graphify-out/, web/public/data/)
uv run --with graphifyy --with networkx --with scipy python3 -m scripts rebuild-triples

# Wiki graph from [[wikilinks]] (wiki-out/) — auto-runs the combined build
uv run --with graphifyy --with networkx --with scipy python3 -m scripts rebuild-wiki

# Combined default dataset + diff report (wiki-out/graph-diff.json, GRAPH_DIFF.md)
uv run --with networkx python3 -m scripts build-combined

# Analyses (work on any graph schema-compatible file via --graph)
uv run --with networkx python3 -m scripts analyze-nodes --graph wiki-out/graph.json --sources sirt1 --targets mtorc1
uv run --with networkx python3 -m scripts predict-links --graph graphify-out/graph.json
uv run python3 -m scripts query-roles --roles-file web/public/data/node_roles.json --role Spreader --top 10

# GitHub repo / branch for generated links: read from repo .env
# (GITHUB_REPO_URL, GITHUB_BRANCH). Both are required — readme-counts raises if
# either is missing (no hardcoded default).
uv run python3 -m scripts readme-counts

# Offline API test suite (tests/; no Supabase or opencode server needed)
# (--with graphifyy: scripts/ rebuild modules import graphify at module level)
# (--with pyyaml: scripts/sync/graph_to_db.py parses frontmatter with PyYAML)
uv run --no-build --with pytest --with pytest-asyncio --with fastapi --with httpx \
  --with networkx --with numpy --with scipy --with pydantic --with python-multipart \
  --with pillow --with graphifyy --with pyyaml python3 -m pytest tests/ -q
```

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
