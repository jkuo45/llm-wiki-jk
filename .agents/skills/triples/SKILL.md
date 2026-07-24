---
name: triples
description: Extract and visualize subject-object-relation triples from wiki documents to build knowledge graphs; manage JSON triple files and generate directed graph visualizations.
---

# Knowledge Graph Triples Skill

Extract factual triples from ingested wiki documents and entity notes to build a knowledge graph per topic. Each topic maintains a triple JSON file (`_triples.json`) in the topic directory, with graph visualizations (`.dot`, `.svg`) in `./media/kg_graph/`.

## Workflow

### 1. Extract Triples from Documents

Read the target document or entity notes and extract all key factual triples in JSON format:

```json
[
  {
    "subject": "Entity Name",
    "predicate": "verb relation",
    "object": "Related Entity",
    "context": "Explanation of the relationship. (3-5 sentences, short paragraph)",
    "confidence": "0.95"
  }
]
```

See [TRIPLE_RULES.md](references/TRIPLE_RULES.md) for detailed extraction guidelines.

### 2. Save to Topic File

Write the extracted triples to the appropriate topic directory:

```
src/notes/<topic>/_triples.json
```

Unless otherwise instructed, keep each `.json` file in sync with the documents ingested into that topic — update when new documents are added or existing ones are modified.

### 3. Merge Across Topics (Optional)

Combine per-topic triples into a single file for cross-topic analysis:

```
uv run scripts/03_merge_triples.py src/notes/<topic1>/_triples.json src/notes/<topic2>/_triples.json -o merged.json
```

### 4. Visualize Graph

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
