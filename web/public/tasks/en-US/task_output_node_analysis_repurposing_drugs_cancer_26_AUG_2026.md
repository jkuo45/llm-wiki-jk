---
title: Node Analysis — Ivermectin, Fenbendazole & Mebendazole Against Cancer and Tumour Subtypes
description: NetworkX multi-node analysis of the drug-repositioning cluster (ivermectin, fenbendazole, mebendazole) against the Cancer hub and three tumour subtypes using scripts/04_node_analysis.py — fingerprints, path multiplicity, Jaccard neighbourhoods, Adamic–Adar, effective resistance, and Personalized PageRank show single-edge fragile claims of unusually high link-prediction headroom, a mechanistically disjoint twin-pair among the benzimidazoles, tumour subtypes captured into the drug community rather than the Cancer community, and a PPR inversion that ranks Ivermectin #2 from the Cancer seed.
created: 2026-08-26
updated: 2026-08-26
source: graphify-out/graph.json (2624 nodes / 2127 giant-component nodes / 3318 edges) + scripts/04_node_analysis.py
tags:
  - task-output
  - knowledge-graph
  - node-analysis
  - networkx
  - cancer
  - drug-repositioning
  - ivermectin
  - fenbendazole
  - mebendazole
  - personalized-pagerank
  - adamic-adar
author: []
starred: false
---

# Node Analysis — Ivermectin, Fenbendazole & Mebendazole Against Cancer and Tumour Subtypes

> [!NOTE]
> **Task**: Run `scripts/04_node_analysis.py` on the vault's repurposed-antiparasitic cluster against the oncology corpus — characterizing each drug's metric fingerprint, testing how strongly the graph supports the drug→cancer claims, and reading the metrics jointly as biology rather than as rankings.
> **Date**: 26_AUG_2026
> **Graph**: `graphify-out/graph.json` — 2,624 nodes / 2,127 giant-component nodes / 3,318 edges (newer build than the 16 August reference page)
> **Scope**: `[[Ivermectin]]`, `[[Fenbendazole]]`, `[[Mebendazole]]` (sources) × `[[Cancer]]`, `[[Glioblastoma]]`, `[[Cholangiocarcinoma]]`, `[[Renal Cell Carcinoma]]` (targets)

---

## Reproducibility

```bash
uv run --with networkx --with scipy python3 scripts/04_node_analysis.py \
    --sources ivermectin fenbendazole mebendazole \
    --targets cancer glioblastoma cholangiocarcinoma "renal cell carcinoma"
```

Edge-evidence dump (all triples touching the four anchor nodes) pulled separately via a small NetworkX pass over `graph.json` links.

---

## Metric Fingerprints

| Node | Degree (in/out) | PageRank | Betweenness | Clustering | k-core | Community |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Ivermectin | 44 (13/31) | 0.00141 | 0.0149 | 0.052 | 5 | "Ivermectin" (29) |
| Fenbendazole | 20 (6/14) | 0.00069 | 0.0026 | 0.131 | 5 | "Fenbendazole" (22) |
| Mebendazole | 9 (0/9) | 0.00022 | 0.0004 | 0.361 | 5 | "Fenbendazole" (22) |
| Cancer | 74 (37/37) | 0.00345 | **0.0585** | 0.043 | **6** | "Cancer" (30) |
| Glioblastoma | 7 (3/4) | 0.00034 | 0.0012 | 0.143 | 5 | "Fenbendazole" (22) |
| Cholangiocarcinoma | 6 (3/3) | 0.00032 | 0.0001 | 0.333 | 5 | "Fenbendazole" (22) |
| Renal Cell Carcinoma | 6 (3/3) | 0.00032 | 0.0007 | 0.267 | 5 | "Fenbendazole" (22) |

- Direction first cut:
  - Ivermectin is heavily outbound (31 out vs 13 in) — spreader shape.
  - Mebendazole is a pure source (in-degree 0).
  - Cancer is perfectly balanced (37/37) — collect-and-broadcast program.
- Community placement is already anomalous — see the capture finding below.

---

## Conclusions From Reading the Metrics Together

### Drug→cancer claims ride single thin edges of enormous link-prediction headroom

- Every shortest path is multiplicity **1** with no shared first-hop bridges:
  - `Ivermectin --[is_treated_by|0.75]--> Cancer`, `--[inhibits|0.8]--> Glioblastoma`, `--[inhibits|0.7]--> Cholangiocarcinoma`, `--[inhibits|0.7]--> RCC`.
  - `Fenbendazole --[is_treated_by|0.75]--> Cancer`, plus inhibits/repositioned edges at 0.65 to all three subtypes.
  - Mebendazole→Glioblastoma is the sole multiplicity-2 case (via Cancer and via Fenbendazole).
- Yet Adamic–Adar scores are extreme: **Ivermectin→Cancer 9.68**, Fenbendazole→Cancer 4.47, Mebendazole→Cancer 2.30 — far above anything recorded in the sirtuin run (max 1.85).
- Joint reading (multiplicity-1 × high AA × moderate R_eff z ≈ −1.6 to −1.9):
  - Genuine associations funnelled through *one curated choke point each*.
  - Per the reference-page taxonomy: rate-limiting edges whose single causative claim is both the precise intervention statement *and* the curation blind spot.
  - Quantified enrichment queue: the literature almost certainly contains more mechanism edges than the one captured per pair.

### Ivermectin is a pleiotropic spreader; the benzimidazoles are a bonded twin-pair

- Ivermectin's out-star broadcasts into mechanistically unrelated programs simultaneously:
  - Signaling suppression — Akt, mTOR, Wnt, YAP1, STAT3, NF-kB, PAK1.
  - Cell-death induction — Apoptosis, Autophagy, Pyroptosis, Caspase-3.
  - Resistance reversal — P-gp, Multidrug Resistance; synergy with Cisplatin, Docetaxel, Paclitaxel.
  - Stemness — Cancer Stem Cells suppressed; Oct4, Sox2 suppressed; Partial Reprogramming hindered.
  - Shape = high out-degree + mid betweenness + own named community — the Acid-ceramidase-style spreading signature.
- Twin-pair evidence:
  - **Jaccard(Fenbendazole, Mebendazole) = 0.421** — shared Tubulin, Microtubule, Benzimidazole, Glycolysis, Apoptosis; the PARP1/PARP2-style off-target-twin warning applies.
  - Claims validated for one benzimidazole should be presumed portable to the other until dissociated.
- But the two strategies are distinct:
  - Jaccard(Ivermectin, Fenbendazole) = 0.178, and the shared set is mostly *indications* (Cancer, subtypes, Leukemia, Drug Repositioning) not *mechanisms*.
  - Fenbendazole-only neighbours are Tubulin, Hexokinase 2, GLUT1, p53, MDM2, Metabolic Reprogramming — microtubule + glycolysis disruption.
  - Ivermectin-only neighbours are signaling/stemness/resistance nodes.
  - Two name-adjacent "repurposed antiparasitics" with genuinely distinct addresses — the graph argues against lumping them as one class effect.

### Tumour subtypes live in the drug community, not the Cancer community

- Community 28 ("Fenbendazole") contains Fenbendazole, Mebendazole, **and** Glioblastoma, Cholangiocarcinoma, RCC — while their parent Cancer sits in community 9.
- Neighbourhood corroboration:
  - Jaccard(Cancer, Glioblastoma) = **0.027** — a subtype shares almost none of its parent's neighbourhood.
  - Glioblastoma-only extras: Acid ceramidase, Chemotherapy, Temozolomide (+ the two drugs).
  - Cholangiocarcinoma–Glioblastoma Jaccard 0.625 is co-curation artifact (shared: Cancer, Cancer Stem Cells, Chemotherapy, and both drugs), not shared tumour biology.
- Interpretation:
  - These tumour nodes were extracted from repositioning-focused entity notes, so their entire network identity is "target of ivermectin/fenbendazole."
  - Cleanest document-gravity effect measured so far in this vault — extraction source dominates over biological ontology.
  - Practical consequence: any community-based navigation or module-level treatment of these subtypes is currently untrustworthy until independent oncology edges exist.

### Personalized PageRank inverts the global ranking

- Global PageRank orders: Cancer (0.00345) ≫ Ivermectin (0.00141) > Fenbendazole > Mebendazole.
- Seeded flows say otherwise:
  - PPR at **Cancer**: Ivermectin rank **#2** (0.01409) in the whole 2,127-node component; Fenbendazole #7; Mebendazole #25.
  - PPR at Glioblastoma: Ivermectin #4, Fenbendazole #7.
  - PPR at Cholangiocarcinoma: Ivermectin #3, Fenbendazole #4.
  - PPR at RCC: Fenbendazole #3, Ivermectin #4.
- Conclusion:
  - From every cancer-side vantage point, walk mass flows disproportionately into the repurposing cluster ahead of the senescence/sirtuin core that owns the k-core-6 shell.
  - The vault's Cancer hub currently answers "what treats you?" louder than "what drives you?" — worth knowing before using PPR for target discovery in this region, since generalist ranking would bury exactly these drugs.

### Cancer itself is the balanced master program and the top bottleneck of this sample

- Perfect symmetry (in 37 / out 37), k-core 6, betweenness 0.0585 — highest here, exceeding even SASP's 0.0555 on the reference build.
- Collects etiologies: Aging-associated, KRAS mutation, MDM2 amplification, p53 mutation; Senescence, Therapy-Induced Senescence, Paracrine Senescence all `can_promote→ Cancer` (0.68–0.72).
- Broadcasts hallmarks/drivers/treatments: a dozen `is_driven_by` nodes at 0.95 plus standard-of-care edges (Cisplatin, Docetaxel, trastuzumab, BET inhibitors, BH3 mimetics).
- The `Cellular Senescence --promotes--> Cancer` edge traces to the acid-ceramidase document — making Cancer the structural junction where the longevity corpus meets the oncology corpus.

### Confidence asymmetry will punish the drug claims once weights land

- Hallmark/ontology edges run 0.95–0.97 (`is_a`, `is_driven_by`, `binds Tubulin`); every drug claim except a few carries 0.65–0.8, and four Fenbendazole/Mebendazole edges are flagged AMBIGUOUS in GRAPH_REPORT.
- Current centrality ignores weights entirely (`weight` attached after centrality in the rebuild):
  - Recomputing with inverted-confidence distance would lengthen precisely these drug corridors most.
  - The repositioning narrative occupies structurally central positions (Ivermectin k-core 5, Cancer-adjacent) on the weakest evidential support in the sample.
  - Expect the largest re-ranking of any zone in the graph when weighted metrics arrive.

### Spectral placement is unremarkable

- All seven nodes sit on one side of the Fiedler cut (+0.0036…+0.0044; λ₂ = 0.0464) — no split onto the far half of the graph.
- Reading: the repurposing microcosm is captive to the main supercluster; drugs-as-well-connected-leaves-on-the-core topology, consistent with everything above.

---

## Effective Resistance Detail

| Pair | R_eff | z vs null (n=300) |
| :-- | :-- | :-- |
| Ivermectin ↔ Cancer | 0.066 | −1.81 |
| Fenbendazole ↔ Cancer | 0.116 | −1.72 |
| Mebendazole ↔ Cancer | 0.193 | −1.59 |
| Ivermectin ↔ Glioblastoma | 0.245 | −1.77 |
| Fenbendazole ↔ Cholangiocarcinoma | 0.297 | −1.68 |
| Mebendazole ↔ RCC | 0.383 | −1.74 |

- All pairs sit far below the random-null mean (~1.12–1.42): every drug–tumour proximity is real wiring, not chance adjacency.
- The ordering within every row (Ivermectin < Fenbendazole < Mebendazole) tracks degree/curation depth exactly — a second, independent signature that curation volume, not biology, separates the drugs' apparent prominence.

---

## Summary Judgment

- Therapeutically, the graph presents two complementary strategies rather than one class effect:
  - Ivermectin as a broad-spectrum, multi-axis suppressor (signaling + cell death + resistance reversal + stemness).
  - Fenbendazole/Mebendazole as a coherent tubulin-plus-glycolysis module whose members are mechanical twins.
- Structurally, every number also documents under-curation:
  - Single-edge claims despite double-digit Adamic–Adar headroom.
  - Tumour subtypes captured into the drug community with near-zero subtype–parent overlap.
  - Confidence scores inverted relative to structural centrality (weakest support on the most central claims).
- The AA-vs-multiplicity contrast (9.68 vs 1) is the quantified size of the next ingestion pass; the PPR inversion (#2 flow from Cancer) is the warning that current rankings privilege the repositioning narrative well beyond its evidential weight.
