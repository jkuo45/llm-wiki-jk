---
name: triples
description: Extract and visualize subject-object-relation triples from wiki documents to build knowledge graphs; manage JSON triple files and generate directed graph visualizations.
---

# Knowledge Graph Triples Skill

Extract factual triples from ingested wiki documents and entity notes to build a knowledge graph per topic. Each topic maintains a triple JSON file (`_triples.json`).

## Workflow

### Extract Triples from Documents

Read the target document or entity notes and extract all key factual triples in JSON format:

```json
[
  {
    "id": "26e6166c7ae1",
    "subject": "Sir2 (yeast)",
    "predicate": "is_ancestor_of",
    "object": "Sirtuins (SIRT1-7)",
    "context": {
      "en-US": "Detailed explanation of the relationship. ~200-300 words.",
      "zh-TW": "關係的詳細說明（英文的翻譯）。保留專有名詞與基因/蛋白符號原樣。"
    },
    "confidence": 0.95,
    "source_document": "Sir2 (yeast).md",
    "created": "2026-08-19T08:30:00Z",
    "updated": "2026-08-19T08:30:00Z"
  }
]
```

Each triple is authored in **English (`en-US`)** with a **`zh-TW` translation** in the same pass. `en-US` is canonical; `zh-TW` translates the prose only and **preserves entity names, gene/protein symbols, and wiki-linked terms verbatim** (e.g. `SIRT1`, `NAD+`, `p53` stay unchanged). Subjects/objects/predicates always stay canonical **English** — zh text lives only inside `context`.

**Timestamps** (`created` / `updated`) are ISO-8601 UTC (`YYYY-MM-DDTHH:MM:SSZ`):
- `created` — set when the triple is first added; never change it afterwards.
- `updated` — bump whenever `context`, `confidence`, `subject`, or `object` change.
- `id` — stable, deterministic (`sha1(norm(subject)|predicate|norm(object))[:12]`). Set it via the normalizer; do not hand-author. When updating an existing triple, keep its `id` and `created`, bump `updated`.

Run the schema normalizer after authoring/editing triples — it idempotently fills `id` / `created` / `updated` and validates the schema:

```
uv run scripts/03_normalize_triples_schema.py [--check]
```

See [TRIPLE_RULES.md](references/TRIPLE_RULES.md) for detailed extraction guidelines.

### Save to Topic File

Write the extracted triples to the appropriate topic directory:

```
src/notes/<topic>/_triples.json
```

Unless otherwise instructed, keep each `.json` file in sync with the documents ingested into that topic — update when new documents are added or existing ones are modified.


### Visualize Graph (Optional)

Generate directed graph visualizations using the triples script:

```
uv run scripts/03_visualize_triples.py src/notes/<topic>/_triples.json <output_base> [--max-nodes N] [--min-edges N]
```

This produces `.png`, `.svg`, and `.dot` files. If no output path is specified, save to `src/tasks/task_output_[timestamp].svg` (and `.png`, `.dot`).

## Rules Summary

- **Subjects and objects** should be specific entities/concepts — normalize names to canonical terms
- **Predicates** should be clear verbs/relations (e.g., `causes`, `is a type of`, `inhibits`, `produces`)
- **Focus** on non-obvious, useful relations — avoid trivial ones
- **Resolve coreferences** so that the same entity uses the same name across triples
- **Confidence levels**: `high` (directly stated, well-established), `medium` (implied or supported), `low` (speculative or inferred)
- **Multilingual context**: every triple carries `context` in `en-US` (canonical) **and** `zh-TW` (translation). Write EN first, then translate within the same extraction pass. Preserve entity names in zh-TW.
- **Timestamps**: set `created` (first appearance, immutable) and `updated` (on change) as ISO-8601 UTC. Never regress `updated` below `created`.
- **Context field must describe the relationship, not just one entity** — see below

The `context` field is used as the node description in the graph visualization. When the rebuild script (`03_rebuild_from_triples.py`) builds `graph.json`, it assigns each node a description drawn from one of its triples' `context` fields. If the context only describes one entity's perspective, the other entity gets a misleading description.

- **The context must be usable as a standalone description for EITHER entity in the triple.** Before writing context, ask: "If this text were assigned as the subject's node description, would it be accurate? What about the object's?"
- **One canonical name per entity.** If a document refers to the same entity by multiple names (e.g., "DJ-1" and "PARK7", "mTOR" and "mechanistic target of rapamycin"), pick ONE canonical name and use it consistently in all triples.
- **Check existing notes** before choosing a canonical name — use the filename of the entity's `.md` note as the authoritative name.
- **Never create separate nodes for aliases.** If "PARK7" and "DJ-1" refer to the same protein, all triples should use the same canonical name (e.g., "DJ-1").

## Source Document Attribution

When extracting triples from a document, note which entity the document is *about* (its primary subject):

- `src/notes/neuromelanin/DJ-1.md` → primary subject is DJ-1
- `src/notes/_link/DRP1.md` → primary subject is DRP1

When writing triples where the subject is NOT the document's primary subject, take extra care to write context from the subject's perspective, not the document's primary subject's perspective.
