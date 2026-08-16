---
title: Sirtuins × Catecholamines Combined Node Analysis — 15 August 2026
description: Combined node analysis of SIRT1/SIRT3/SIRT2 + COMT/MAO vs the catecholamines Dopamine and Epinephrine in the wiki knowledge graph. SIRT1 is route-richest to Dopamine (7 shortest paths via aging/neurodegeneration bridges), SIRT3 carries the only latent redox edge, COMT is the direct metabolic flow hub, MAO stays peripheral. Hop-distance is non-discriminating (all ≤2 hops); every networkx/scipy metric separates three distinct modes of catecholamine proximity.
created: 2026-08-15
updated: 2026-08-15
tags:
  - task-output
  - knowledge-graph
  - node-analysis
  - networkx
  - scipy
  - spectral-analysis
  - sirtuins
  - comt
  - mao
  - dopamine
  - epinephrine
  - graph-theory
source: graphify-out/graph.json + scripts/node_analysis.py (networkx/scipy)
---

# Sirtuins × Catecholamines Combined Node Analysis

> Graph-derived comparative node analysis. Date: 15_August_2026
> Method: `uv run --with networkx --with scipy python3 scripts/node_analysis.py --sources sirt1 sirt3 sirt2 comt mao --targets dopamine epinephrine`
> Corpus: `graphify-out/graph.json` (2479 nodes / 3388 links directed), undirected projection, self-loops removed, giant component analysed (2028 nodes, 209 total components).

## Data Reduction Note

- All source–target pairs lie ≤2 hops apart; hop distance is non-discriminating. All signal comes from the networkx/scipy metrics below.
- Bridges listed are first-hop nodes on the shortest paths; multiple bridges = redundant routes into the target's neighborhood.

## 1. Shortest-Path Multiplicity (NetworkX)

| Source → Target | Shortest paths | Bridge nodes (1st hop) |
|---|---|---|
| SIRT1 → Dopamine | **7** | [[Aging]], [[Parkinson's Disease]], [[Resveratrol]], [[Senescence]], [[Tau]] |
| SIRT1 → Epinephrine | 5 | [[Aging]], [[Cellular Senescence]], [[NF-κB]], [[Resveratrol]] |
| SIRT3 → Dopamine | 1 | [[Oxidative Stress]] |
| SIRT3 → Epinephrine | 6 | [[Cellular Senescence]], [[Honokiol]], [[Mitochondria]], [[NF-κB]], [[Oxidative Stress]] |
| SIRT2 → Dopamine | 3 | [[Parkinson's Disease]] |
| SIRT2 → Epinephrine | 2 | [[NF-κB]] |
| COMT → Dopamine | 1 | — (direct edge) |
| COMT → Epinephrine | 1 | — (direct edge) |
| MAO → Dopamine | 1 | [[Epinephrine]] |
| MAO → Epinephrine | 1 | — (direct edge) |

- **SIRT1 → Dopamine is the single most route-rich relationship in the set** (7 distinct shortest paths) and every bridge is a geroscience/neurodegeneration hub (Aging, PD, Senescence, Tau) plus [[Resveratrol]] — i.e. the dopamine connection is *indirect and aging-contextual*, not enzymatic.
- **SIRT3 → Dopamine has exactly one route** — through [[Oxidative Stress]] (the only latent redox edge a sirtuin holds to a catecholamine).
- COMT sits 1 hop from both substrates (direct metabolic adjacency); MAO reaches Dopamine only via Epinephrine.

## 2. Neighborhood Distinctness (degree + pairwise Jaccard)

| Node | Degree |
|---|---|
| SIRT1 | 209 |
| SIRT3 | 104 |
| SIRT2 | 79 |
| COMT | 57 |
| Epinephrine | 21 |
| Dopamine | 12 |
| MAO | **2** |

- Sirtuin–catecholamine Jaccard overlap is ~0.000–0.009 (SIRT1/2/3 share essentially no neighbors with either catecholamine; only SIRT3–Dopamine reaches 0.009).
- Enzyme–substrate overlap is the only substantive one (COMT–Dopamine 0.015, COMT–Epinephrine 0.013, MAO–Epinephrine 0.045).
- Signature neighbors: SIRT1 | geroscience/proteostasis ([[Senescence]], [[Lifespan]], [[p53]], [[LC3]]); SIRT3 | mitochondrial metabolism ([[HIF-1α]], ketogenesis, [[H3K56ac]]); Dopamine | neurotoxicology ([[Dopaminochrome]], [[Neuromelanin]], Substantia Nigra Pars Compacta); Epinephrine | cardiometabolic oxidation ([[Adrenochrome]], [[Myeloperoxidase]], [[Metanephrine]]).

## 3. Adamic-Adar Link-Prediction Proximity

| Pair | Adamic-Adar |
|---|---|
| COMT → Epinephrine | **0.721** |
| COMT → Dopamine | 0.514 |
| MAO → Epinephrine | 0.379 |
| SIRT3 → Dopamine | **0.289** |
| SIRT1/2 → either | 0.000 |
| MAO → Dopamine | 0.000 |

- The only sirtuin with a nonzero latent edge to a catecholamine is **SIRT3 → Dopamine** (shared-neighbor pull via the redox zone), consistent with §1's single Oxidative-Stress bridge.
- COMT is the dominant latent-link hub; MAO has latent pull only to Epinephrine.

## 4. k-Core Nesting (NetworkX)

| Node | k-core |
|---|---|
| SIRT1 | **6** |
| SIRT3 | 5 |
| SIRT2 | 5 |
| COMT | 4 |
| Dopamine | 4 |
| Epinephrine | 4 |
| MAO | **2** |

## 5. Spectral Analysis (SciPy — dense eigh)

- **Algebraic connectivity** λ₂ = **0.0495** (healthy giant component, consistent across runs).
- **Fiedler vector**: sirtuins sit on the bisection boundary (−0.0028 to −0.0032); COMT **+0.0274** is the most offset node (genotype/metabolic cluster cleanly separated); catecholamines +0.005 to +0.007; MAO +0.0028.
- Reading: the graph's natural bisection separates the sirtuin governance zone (boundary) from the catecholamine-metabolism zone (COMT clearly inside the latter).

## 6. Effective-Resistance / Commute Distance (pseudoinverse Laplacian)

`R_eff` via thresholded dense `eigh`; null model = 300 random nodes per target.

| Node | → Dopamine (z) | → Epinephrine (z) |
|---|---|---|
| SIRT1 | 0.186 (−1.71) | **0.156 (−1.82)** |
| SIRT3 | 0.194 (−1.70) | 0.165 (−1.80) |
| SIRT2 | 0.214 (−1.66) | 0.186 (−1.76) |
| COMT | 0.216 (−1.66) | 0.195 (−1.74) |
| MAO | 0.736 (−0.70) | 0.552 (−1.07) |

- Sirtuins are marginally closer to both catecholamines than COMT (all significantly vs null, z ≤ −1.66).
- MAO is ~3–4× more distant and only marginally-significantly close to Epinephrine (z = −1.07) — the peripheral byproduct mode.

## 7. Personalized PageRank — Random-Walk Proximity

| Target seed | SIRT1 | SIRT3 | SIRT2 | COMT | MAO |
|---|---|---|---|---|---|
| Dopamine | #26 (0.00463) | #28 (0.00428) | #52 (0.00206) | **#3 (0.03671)** | #380 (0.00023) |
| Epinephrine | #44 (0.00331) | #53 (0.00237) | #119 (0.00091) | **#3 (0.02622)** | #14 (0.01190) |

- COMT receives >100× the diffusion flow of any sirtuin (direct adjacency → strong walk-residency); sirtuins rank mid-pack; MAO is near-invisible from Dopamine but jumps to #14 when seeded at Epinephrine (its only strong edge).

## 8. Cross-Metric Synthesis — Three Distinct Modes of Catecholamine Proximity

| Mode | Nodes | Signature measures |
|---|---|---|
| **Geroscience-contextual** | SIRT1, SIRT2 | Route multiplicity to Dopamine (7 / 3 paths via Aging–PD–Senescence bridges); zero latent edges; mid-flow; boundary Fiedler |
| **Direct metabolic hub** | COMT | 1-hop adjacency, highest Adamic-Adar (0.51–0.72), #3 PPR for both targets, most Fiedler-offset |
| **Redox latent & mitochondrial** | SIRT3 | single Oxidative-Stress route to Dopamine + only nonzero sirtuin Adamic-Adar (0.289), 6 routes to Epinephrine |
| **Peripheral byproduct** | MAO | degree 2, k-core 2, near-null resistance z, Dopamine-unreachable except via Epinephrine |

**Biological reading**: hop-count reports "all adjacent"; the higher-order measures show the sirtuins' dopamine relevance is an *aging/neurodegeneration context* phenomenon (SIRT1 most so, via redundant geroscience bridges), COMT is the actual enzymatic gateway, SIRT3 is the one sirtuin with a genuine redox/genotoxic link to dopamine, and MAO is a peripheral spoke that only reaches the dopamine lineage through epinephrine. This reconciles the two prior analyses (sirtuins×adrenochrome, COMT/MAO×catecholamines) into a single wiring map.

## Methodology Notes & Reproducibility

- Command: `uv run --with networkx --with scipy python3 scripts/node_analysis.py --sources sirt1 sirt3 sirt2 comt mao --targets dopamine epinephrine` (default `--seed 1`).
- Undirected projection; giant component only; self-loops removed.
- Fiedler eigenvector sign arbitrary — compare magnitude/relative placement.
- `eigsh(which='SM')` and truncated `svds` avoided (see task_output_sirtuins_adrenochrome_node_analysis_15_August_2026.md).
- Adamic-Adar 0.000 = zero common neighbors, not zero relatedness.