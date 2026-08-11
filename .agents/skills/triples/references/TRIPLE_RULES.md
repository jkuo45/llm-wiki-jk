---
title: KG Triples Reference
description: Detailed extraction rules and conventions for knowledge graph triples
type: index
created: 2026-07-09
updated: 2026-07-09
tags:
  - reference
  - knowledge-graph
---

# Triple Extraction Reference

## JSON Format

Each triple is a JSON object with the following fields:

| Field        | Type   | Description                                                          |
| ------------ | ------ | -------------------------------------------------------------------- |
| `subject`    | string | The source entity (normalized to canonical name)                     |
| `predicate`  | string | The relationship verb (present tense, lowercase)                     |
| `object`     | string | The target entity (normalized to canonical name)                     |
| `context`    | string | Explanation grounding the triple in the source text.    |

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

When updating an existing `_triples.json`, do not duplicate identical triples (same subject + predicate + object). Use a merge strategy:

- Different context → keep both contexts (array or separate entries)
- Different confidence → keep the higher confidence level
