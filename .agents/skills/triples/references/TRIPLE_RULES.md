---
title: KG Triples Reference
description: Detailed extraction rules and conventions for knowledge graph triples
type: index
created: 2026-07-09
updated: 2026-08-19
tags:
  - reference
  - knowledge-graph
---

# Triple Extraction Reference

## JSON Format

Each triple is a JSON object with the following fields:

| Field        | Type              | Description                                                          |
| ------------ | ----------------- | -------------------------------------------------------------------- |
| `id`         | string (opt)      | Stable id = `sha1(norm(subject)|predicate|norm(object))[:12]`; filled by the normalizer |
| `subject`    | string            | The source entity (normalized to canonical name)                     |
| `predicate`  | string            | The relationship verb (present tense, lowercase)                     |
| `object`     | string            | The target entity (normalized to canonical name)                     |
| `context`    | object            | BCP-47 map: `{"en-US": string, "zh-TW": string}`. `en-US` is canonical; translate prose to `zh-TW`, preserve entity names. |
| `confidence` | string \| float   | Confidence level (`high`/`medium`/`low`) or numeric score (0–1)       |
| `source_document` | string       | Originating wiki note filename                                       |
| `created`    | string (ISO UTC)  | `YYYY-MM-DDTHH:MM:SSZ` — first added; immutable                       |
| `updated`    | string (ISO UTC)  | `YYYY-MM-DDTHH:MM:SSZ` — bumped on any content change                 |

## Multilingual / Timestamp Rules

- **Author both languages in one pass**: write the `en-US` context, then translate that exact text to `zh-TW`.
- **`zh-TW` preserves proper nouns**: entity names, gene/protein symbols (`SIRT1`, `NAD+`, `p53`), and any `[[wiki link]]` targets stay unchanged. Only the surrounding prose is translated.
- **No zh in endpoints**: `subject`/`predicate`/`object` must stay canonical English — the rebuild's `norm()` strips non-`[a-z0-9]`, so zh there would silently drop the triple.
- **`created` immutable, `updated` advances**: when editing an existing triple, keep `id` and `created`, set `updated` to now (or `>= created`).
- Missing `zh-TW` is allowed temporarily (the graph falls back to `en-US`), but the normalizer's `--check`/coverage report flags it so it can be filled.
- `confidence` and `source_document` are always English-only (they are not translated).

## Predicate Naming

- Use **present tense, lowercase** (e.g., `inhibits`, not `inhibited` or `INHIBITS`)
- Use **snake_case** for multi-word predicates (e.g., `leads_to`, `is_a_type_of`)
- Prefer **concrete, domain-specific verbs** over generic ones:
  - Good: `catalyzes`, `methylates`, `phosphorylates`, `upregulates`
  - Acceptable: `causes`, `increases`, `decreases`
  - Avoid: `is related to`, `is connected with`

### Common Predicate Patterns

| Category               | Example Predicates                                                  |
| ---------------------- | ------------------------------------------------------------------- |
| Identity/classification| `is`, `is_a`, `is_a_type_of`                                        |
| Causation              | `causes`, `leads_to`, `results_in`, `triggers`, `induces`           |
| Inhibition             | `inhibits`, `blocks`, `suppresses`, `impairs`                       |
| Activation             | `activates`, `enhances`, `promotes`, `stimulates`                   |
| Production             | `produces`, `synthesizes`, `generates`, `converts_to`               |
| Regulation             | `regulates`, `modulates`, `controls`, `maintains`                   |
| Binding                | `binds`, `interacts_with`, `targets`                                |
| Metabolism             | `metabolizes`, `oxidizes`, `methylates`, `conjugates`               |
| Transport              | `transports`, `uptakes`, `clears`, `effluxes`                       |
| Expression             | `expressed_in`, `localized_to`, `found_in`                          |
| Association            | `associated_with`, `linked_to`, `correlates_with`                   |
| Treatment              | `treats`, `targets`, `responds_to`                                  |

## Entity Normalization

- Use **canonical note titles** from the wiki (same as `[[wiki links]]`)
  - `SIRT1` not `Sirtuin 1` or `sirt1`
  - `Oxidative Stress` not `oxidative stress`
- **Resolve coreferences**: if the document says "The enzyme" referring to COMT, use `COMT` as the subject
- **Split composite entities**: `IIS (DAF-16/FOXO)` → handle as separate triples per canonical entity
- **No path prefixes**: entity names are bare, never `notes/topic/Entity`

## Confidence Guidelines

| Level    | Criteria                                                |
| -------- | ------------------------------------------------------- |
| `high`   | Directly stated in source, well-established finding     |
| `medium` | Implied by context, supported by multiple mentions      |
| `low`    | Speculative, inferred, or single indirect mention       |

## Deduplication

When updating an existing `_triples.json`, do not duplicate identical triples (same `id`, i.e. same subject + predicate + object). Use a merge strategy:

- Keep the **existing `id` and `created`**, bump **`updated`** with the newer content.
- Different context → keep the updated triple's context (both languages) as the canonical entry; retain any alternates as supplementary text if still valued.
- Different confidence → keep the higher confidence level.
- At graph-build time, `03_rebuild_from_triples.py` resolves cross-file edge collisions as **most-recent `updated` wins** (tie-break higher confidence, then first-seen). The schema normalizer enforces unique `id` within each file and drops later duplicates.

## Normalization

Run `scripts/normalize_triples_schema.py` (idempotent) after any triples edit — it fills `id`/`created`/`updated`, upgrades a legacy string `context` to the `en-US`/`zh-TW` map, validates the schema, and reports missing `zh-TW` coverage.
