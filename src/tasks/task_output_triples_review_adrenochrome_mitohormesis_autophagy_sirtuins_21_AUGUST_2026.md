---
title: Triples Human-Review Report — Adrenochrome, Mitohormesis, Autophagy, Sirtuins
description: Prioritized list of knowledge-graph triples flagged for human review due to cross-document conflicts, low confidence, malformed predicates, or suspected factual errors. Neighborhood centrality (SIRT1, SIRT3, SIRT6, SASP) used to rank priority.
created: 2026-08-21
tags: [triples, knowledge-graph, quality-control, adrenochrome, mitohormesis, autophagy, sirtuins]
---

# Triples Human-Review Report — Adrenochrome / Mitohormesis / Autophagy / Sirtuins

**Date:** 21_August_2026
**Scope:** All 10 `_triples.json` topic files (3,792 triples total; 865 directly touch the four seed concepts).
**Method:** (1) seeded on `Adrenochrome`, `Mitohormesis`/`Hormesis`, `Autophagy`/`Mitophagy`, and `Sirtuins`/`SIRT1–7`; (2) expanded a 2-hop region (1,407 nodes); (3) ranked candidate triples by **surrounding-node degree** — errors attached to hub nodes propagate furthest in graph traversal and visualization node descriptions; (4) screened for polarity conflicts (`activates/inhibits` vs `does_not_*`), negation claims from conflicting papers, self-loops/malformed predicates, and biologically implausible assertions.

## Why surrounding nodes drive the prioritization

Region-degree ranking of hubs in the analyzed neighborhood:

| Node | Region degree | Review relevance |
|---|---|---|
| SIRT1 | 206 | Any mis-stated SIRT1 relation contaminates the largest subgraph |
| SIRT3 | 169 | Dual oncogene/tumor-suppressor claims already diverge by source |
| SASP | 114 | Senescence hub bridging sirtuins ↔ adrenochrome senotherapeutics |
| SIRT6 | 107 | Contains malformed self-loop + lifespan-extension claims |
| Cancer | 80 | Context-dependent dual-role triples concentrate here |
| SIRT2 | 74 | NF-κB deacetylation claim needs substrate verification |
| Adrenochrome | 69 | Detectability conflict + taxonomy error |
| Nicotinamide Riboside | 61 | Clinical-efficacy contradiction |
| NF-κB | 55 | Direction-of-effect conflict with adrenochrome |
| Rapamycin | 46 | Immune-effect contradiction |

Triples below are grouped into three review tiers.

---

## Tier 1 — High priority: factual errors & direct contradictions

### T1-1. `Adrenochrome --is_a--> Aminochrome` (conf 0.95)
- **File/topic:** `src/notes/adrenochrome/_triples.json` ← *as senotherapeutic agent* | id `ce2b8b15cb68`
- **Issue:** Taxonomically wrong or at best badly inverted. Aminochrome is specifically the oxidation product of **dopamine**; adrenochrome is the corresponding product of **epinephrine**. The source context actually means "adrenochrome belongs to the *aminochrome class of compounds*", but as written it asserts identity between two distinct molecules. This also collides with other `is_a` triples (`o-quinone`, `Indoles`) creating inconsistent type edges on a 69-degree hub.
- **Recommended fix:** Re-cast as `Adrenochrome --is_a_member_of--> Aminochromes (catecholamine oxidation products)` and verify against the PubChem-based triples.

### T1-2. Adrenochrome detectability contradiction
- `Adrenochrome --is_undetectable_in--> Biological fluids` (conf 0.90, id `ace9cb6d35a2`, *The Adrenochrome Pathway*)
- vs. `Adrenochrome --detected_in--> Rheumatoid synovial fluid` (conf 0.75, id `e550f9490e22`, *neutrophils role in adrenochrome production*)
- **Issue:** Direct cross-paper conflict — one source states adrenochrome has never been detected in biological fluids (central to its controversial clinical significance), another reports detection in rheumatoid synovial fluid. Both carry plausible context (instability vs. localized oxidative inflammation). A human should reconcile: likely resolution is "undetectable in healthy/systemic fluids; detectable locally under high-oxidative inflammatory conditions."

### T1-3. `Autophagy --impairs--> Parkinson's Disease` (conf 0.95)
- **File/topic:** `src/notes/neuromelanin/_triples.json` ← *Neuromelanin, aging, neuronal vulnerability* | id `962a49df4bb4`
- **Issue:** Predicate direction error. Autophagy does not impair PD; **autophagic dysfunction contributes to PD**. The context field itself admits "the phrasing can be misread." Attached to the `Autophagy` (43) and `Parkinson's Disease` (39) hubs, this triple will corrupt any BFS/path answer about autophagy–neurodegeneration.
- **Recommended fix:** Invert to `Autophagy Dysfunction --contributes_to--> Parkinson's Disease` or `Autophagy --protects_against--> Alpha-Synuclein Aggregation` (the latter already exists and is correct).

### T1-4. `Rapamycin --> Immune System`: improves vs suppresses (conf 0.94 / 0.90)
- Sources: *Rapamycin for longevity opinion article* vs *Rapamycin for longevity — pros, cons*
- Triples: id `c260ca387ad5` (`improves`) vs id `0ad00fdc47e2` (`suppresses`)
- **Issue:** Classic conflicting-views case. mTOR inhibition is immunosuppressive (transplant literature) yet improves immune function in aged animals (immunosenescence reversal). The two triples are both individually defensible but contradictory without an age-context qualifier. Rapamycin is a 46-degree hub; unresolved, downstream queries will return whichever doc was traversed last.

### T1-5. `Nicotinamide Riboside --> Insulin Sensitivity`: improves vs fails_to_improve (both conf 0.90)
- Same source document (*NR—Current State of Research*) contains both the positive claim and its negation.
- Triples: id `0c95a5dcb21d` (`improves`) vs id `f3e93fb160fa` (`fails_to_improve`)
- **Issue:** Genuine trial-level heterogeneity (positive in at-risk cohorts, null in healthy adults), but stored as flat opposing edges with identical confidence. Needs either context qualifiers (population/endpoint) or confidence differentiation.

---

## Tier 2 — Medium priority: predicate mis-extraction & speculative claims stated as fact

### T2-1. `Superoxide dismutase --inhibits--> Adrenochrome` and `Catalase --inhibits--> Adrenochrome` (conf 0.75 each)
- Triples: id `7b5bb7e76478` (SOD) and id `b2fc32672010` (catalase)
- Context shows SOD/catalase inhibit the **oxidation of adrenaline → adrenochrome** by scavenging neutrophil ROS — not inhibition of adrenochrome itself.
- **Fix:** Recast as `Superoxide dismutase --prevents_formation_of--> Adrenochrome (via superoxide scavenging)`.

### T2-2. `Adrenochrome --inhibits--> NF-κB` (conf **0.60**, lowest-confidence edge on a 55-degree hub)
- id `2fd535aa0773`
- Source (*as senotherapeutic agent*) is explicitly hypothetical: "proposes… could permanently inhibit… plausible route." Meanwhile adjacent triples state adrenochrome `induces Oxidative Stress` (0.85, id `3a8147e4e834`) and `modifies IKK complex` (0.75, id `f563ea289358`).
- **Issue:** A speculative senomorphic hypothesis is stored at the same structural level as established biology, and it contradicts the general pro-inflammatory/redox-active characterization of adrenochrome elsewhere in the topic. Also note the same document produced the T1-1 taxonomy error — treat that whole document's extractions as needing re-review.

### T2-3. `Mitohormesis --requires--> Heart Rate Variability` (conf 0.92)
- id `5bd6375c93eb`
- Context describes HRV as a **recovery-monitoring biomarker** that correlates with successful adaptation — not a mechanistic requirement.
- **Fix:** `Mitohormesis --is_monitored_by--> Heart Rate Variability` or downgrade confidence substantially. High confidence (0.92) makes this especially dangerous.

### T2-4. `SIRT3 --suppresses_tumor_suppressive_in--> Cancer` (conf 0.95)
- id `b0a3f5ba1bbc`
- Garbled compound predicate; the context describes a well-supported **context-dependent dual role** (tumor suppressor via HIF-1α/IDH2/OGG1, oncogenic via SHMT2/PYCR1/GLDC desuccinylation and CLL chemoresistance).
- Related tension inside the same corpus: `SIRT5 --suppresses_hcc_development_via--> bile acid metabolism` (id `1fb008f9322e`) vs `SIRT5 --promotes--> HCC growth and metastasis` (id `9cf4c79391a3`) — both from *sirtuins in health and disease*. Recommend normalizing both to explicit dual-role framing rather than leaving opposite-polarity edges.

### T2-5. Self-loops / malformed edges
- `SIRT6 --enhance--> SIRT6` (conf 0.95, *SIRT6.md*, id `dd97749fc843`) — context is about centenarian variant CentSIRT6 gaining mono-ADP-ribosyltransferase activity; subject/object collapsed. Fix: `CentSIRT6 variant (A219T/A313S) --enhances_mono_ADPR_activity_of--> SIRT6`.
- `COMT --predominates_in--> itself` (conf 0.93, comt topic, id `11daee6e8cd9`) — same collapse pattern.
- `Val158Met --is--> itself` (conf 0.92, comt topic, id `d02a6f9e45b7`).
- `Resveratrol --is--> COMT` (conf 0.72, comt topic, id `82b981cb7f32`) — nonsense copula; context says resveratrol is *suitable for slow-COMT individuals because it doesn't interact with COMT*. Fix: drop or recast as `Resveratrol --does_not_inhibit--> COMT`.

### T2-6. `Erythrocytes --does_not_produce--> Adrenochrome` (conf 0.85)
- id `a522f693faf8`
- Negated claim whose own context concedes hemoglobin can catalyze epinephrine oxidation and the RBC membrane can convert adrenaline to aminochromes. Source title ("neutrophil and erythrocyte") suggests the paper contrasts the two cell types. Flag for human wording: distinguish "not a primary production site" from "cannot generate any."

---

## Tier 3 — Lower priority: consistency, duplication, and coverage gaps

### T3-1. Duplicate near-equivalent edges (canonicalization)
- `Rapamycin --induces--> Autophagy` (0.95, id `15547349278a`) + `Rapamycin --activates--> Autophagy` (0.96/0.97 variants, e.g. id `02c2a78e3f37`)
- `Metformin --activates--> Mitohormesis` (0.8, id `e86ba9b00bd0`) + `Metformin --exploits--> Mitohormesis` (0.9, id `ab9a00fbee89`)
- `Spermidine --induces--> Autophagy` (id `d7b5aadb954a`) + `--enhances--> Autophagy` (id `4c5707d31231`) — two 0.95 edges
- `Nicotinamide Riboside --increases--> NAD+` (id `bd858eb10427`) + `--converts_to--> NAD+` (id `3b1af1d13c97`) — both fine, but ensure predicates reflect precursor conversion vs pharmacological elevation

### T3-2. Lifespan-claim asymmetry worth annotating, not deleting
- `SIRT1 --brain_specific_brasto_overexpression_extends--> Lifespan` alongside `SIRT1 --global_overexpression_fails_to_extend--> Lifespan` (both 0.95, same doc; ids `e2405294b620` / `0a5ecc353ef0`). These are genuinely compatible (tissue-specific vs whole-body) and the predicates encode the distinction, but the compound predicates are fragile for graph tooling — consider splitting qualifier into context.

### T3-3. Missing edges (coverage gaps found during neighborhood analysis)
- **No `Mitohormesis ↔ Sirtuins` edge exists** despite SIRT1/SIRT3 being central mediators of mitochondrial-stress adaptation (NAD+ dependence, PGC-1α axis) in the source literature. The region connects them only indirectly via ROS/NAD+ precursors.
- **No `Resveratrol ↔ Sirtuins controversy` representation**: corpus stores `Resveratrol --activates--> SIRT1` (0.85/0.95, id `baa1d13f4de5` — same hash-deduplicated id appears in both `senescence/` and `sirtuins/` files; ~~duplicate in `senescence/_triples.json`~~ **resolved 2026-08-22: removed from senescence, kept the sirtuins copy sourced from SIRT1.md at conf 0.95**) but no capture of the well-known challenge to *direct* activation at physiological doses (e.g., Park et al. 2012; the corpus has no `does_not_activate` edge for this pair even though such negation predicates exist elsewhere). Given resveratrol's 36-degree hub status, add a qualified counter-edge or lower confidence.
- `Mitochondrial ROS --activates--> Autophagy` (0.85, id `b037ba33176a`) vs `Mitohormesis --requires--> ROS` (0.91, id `bf707094d24d`) — compatible but currently unlinked; consider an explicit ROS-mediated chain.

### T3-4. Low-confidence cluster around senescence bridges (conf ≤ 0.72)
63 region triples sit below 0.75; the most load-bearing ones touching seed concepts:
- `Autophagy --is_impaired_in--> Senescence` (0.72, id `7f9422b3880b`) — directionally consistent with autophagy-suppresses-SASP (0.9) but phrasing ambiguous ("impaired in" = reduced during senescence? verify).
- `Senescence --can_promote--> Cancer` (0.72, id `627c8437f0b9`) vs `Paracrine Senescence --suppresses_tumor--> Cancer` (0.7, id `f86f91ffd48f`) vs `Paracrine Senescence --can_promote--> Cancer` (0.68, id `95f64d34d751`) — three-way divergence reflecting real literature (immune-clearance-dependent duality); needs unified dual-role note.
- `Adrenochrome --promotes--> Lipid Peroxidation` (0.7, id `4d4a85d09092`); `Adrenolutin --is_a_metabolite_of--> Adrenochrome` (0.7, id `2546891a17f9`) vs separate `Adrenolutin --derives_from--> Adrenochrome` (0.8, id `720caa0a5954`) — duplicate relationship with different predicates/confidences.

---

## Suggested review workflow

1. **Verify against source documents first** — every flagged triple carries `source_document`; open the cited section before editing.
2. For Tier 1 items, edit subject/predicate/object and bump `updated:` (keep `id`/`created`); run `uv run scripts/normalize_triples_schema.py` afterwards.
3. For conflicting-view pairs (T1-4, T1-5, T2-4), prefer adding context qualifiers over deleting either side — the disagreement is often the scientifically valuable content.
4. After fixes, regenerate visualizations for affected topics (sirtuins, adrenochrome) since hub-node descriptions are drawn from triple contexts.

## Summary counts

| Tier | Count | Nature |
|---|---|---|
| 1 — Factual errors / direct contradictions | 5 clusters (~9 triples) | wrong identity, inverted direction, cross-paper conflicts |
| 2 — Predicate mis-extraction / speculation-as-fact | 6 clusters (~12 triples) | garbled predicates, self-loops, hypotheses at face value |
| 3 — Consistency & gaps | ~15 triples + 3 missing-edge findings | duplicates, qualifiers, absent key links |
