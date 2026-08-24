---
title: Sirtuins × Adrenochrome Node Analysis — NetworkX & SciPy — 15 August 2026
description: Comparative node analysis of SIRT1/SIRT2/SIRT3 proximity to Adrenochrome in the wiki knowledge graph. Hop distance is non-discriminating (all 2 hops); path multiplicity, neighborhood Jaccard, Adamic-Adar, k-core, effective-resistance, personalized PageRank, and Fiedler analysis resolve a metric-dependent ranking where SIRT3 wins on route redundancy but SIRT1 wins on flow proximity.
created: 2026-08-16
updated: 2026-08-22
tags:
  - task-output
  - knowledge-graph
  - node-analysis
  - networkx
  - scipy
  - spectral-analysis
  - sirtuins
  - adrenochrome
  - graph-theory
source: graphify-out/graph.json + networkx/scipy analysis
---

# Sirtuins × Adrenochrome Node Analysis — NetworkX & SciPy

> Graph-derived comparative node analysis. Date: 15_August_2026
> Method: `graphify-out/graph.json` (2479 nodes / 3388 links, directed) loaded into NetworkX, projected to undirected, self-loops removed, giant component (2028 nodes, 209 total components) used for all metric computation. Matlab-free, pure `networkx` + `scipy` (numpy dense `eigh`, `eigsh`, `svds`, `nx.pagerank`, `nx.core_number`, `nx.adamic_adar_index`).

## Data Reduction Note

- **Node ids** in the current `graph.json` are snake_case strings (`sirt1`, `adrenochrome`), unlike earlier graph builds that used topic-prefixed ids (e.g. `notes__link_sirt1`). Any downstream script must normalize ids from labels.
- **Hop distance is non-discriminating**: SIRT1, SIRT2, SIRT3 are all exactly **2 hops** from Adrenochrome. Every metric below exists to answer "which is *functionally* closer" where hop-count fails.

## Shortest-Path Multiplicity (NetworkX)

Count of *all* distinct shortest paths and their first-hop bridge nodes:

| Source → Adrenochrome | Shortest paths | Bridge nodes (1st hop) |
|---|---|---|
| SIRT3 | **2** | [[NF-κB]], [[Oxidative Stress]] |
| SIRT1 | 1 | [[NF-κB]] |
| SIRT2 | 1 | [[NF-κB]] |

- SIRT3 reaches Adrenochrome's zone through **two independent routes** — redundancy/robustness.
- SIRT1 and SIRT2 depend on a **single bridge** ([[NF-κB]]), a single point of failure.

## Neighborhood Distinctness (degree + Jaccard)

| Measure | SIRT1 | SIRT3 |
|---|---|---|
| Degree | 209 | 104 |
| Jaccard overlap of neighbor sets | **6.5%** | |

- SIRT1's unique neighbors cluster around transcription/proteostasis: [[LC3]], [[Senescence]], [[Lifespan]], [[p53]], [[HMGB1]], [[FOXO1]]/[[FOXO3]], fatty-acid metabolism, miR-543.
- SIRT3's unique neighbors are mitochondrial metabolism/aging: [[HIF-1α]] (inhibits glycolysis), ketogenesis, pyruvate dehydrogenase E1α, [[H3K56ac]], [[Intermittent Fasting]], [[ATM]], ischemia-reperfusion injury, obesity, epilepsy, Human aging (longevity).
- Conclusion: despite sharing the "sirtuin" label, SIRT1 and SIRT3 touch **nearly disjoint functional neighborhoods** in the graph.

## Common-Neighbor / Link-Prediction Proximity (Adamic-Adar, NetworkX)

| Pair | Adamic-Adar score |
|---|---|
| SIRT3 → Adrenochrome | **0.556** |
| SIRT1 → Adrenochrome | 0.268 |

- The latent (missing-edge) pull toward Adrenochrome is **strongest for SIRT3**, consistent with the 2-path redundancy from the Shortest-Path Multiplicity section.

## k-Core Nesting (NetworkX)

| Node | k-core |
|---|---|
| SIRT1 | **6** |
| SIRT2 | 5 |
| SIRT3 | 5 |
| Adrenochrome | 4 |

- SIRT1 sits in the densest nested core of the four; Adrenochrome is peripheral to it.

## Spectral Analysis (SciPy — dense `eigh`)

- **Algebraic connectivity** λ₂ = **0.0495** — the giant component is healthy (well above the ~0 disconnection threshold).
- **Fiedler vector** (smallest non-trivial eigenvector, spectral bisection axis): SIRT1 +0.0029, SIRT3 +0.0028, SIRT2 +0.0032, Adrenochrome **−0.0017**.
- Interpretation: the natural bisection axis of the graph separates Adrenochrome (redox/catecholamine side) from the sirtuin governance cluster; all three sirtuins sit essentially **on the boundary**, consistent with their redox-regulatory gatekeeper role.

## Effective-Resistance / Commute Distance (SciPy — pseudoinverse Laplacian)

`R_eff(a,b) = pinv(L)[a,a] + pinv(L)[b,b] − 2·pinv(L)[a,b]`, computed via dense `scipy.linalg.eigh` (thresholded eigenvalues) on the 2028-node giant component.

| Pair | R_eff (lower = closer) | z-score vs 300 random nodes |
|---|---|---|
| SIRT1 → Adrenochrome | **0.094** | −1.70 |
| SIRT3 → Adrenochrome | 0.103 | −1.68 |
| SIRT2 → Adrenochrome | 0.124 | −1.64 |

- All three sirtuins are meaningfully closer to Adrenochrome than random expectation (z ≈ −1.7), but only marginally different from one another by this global-flow metric.
- SIRT1 nominally closest; SIRT2 most distant.

## Personalized PageRank — Random-Walk Proximity (NetworkX)

`nx.pagerank(personalization={Adrenochrome: 1.0}, α=0.85)` — diffusion flow originating at Adrenochrome:

| Node | Rank (of 2028) | PPR score |
|---|---|---|
| SIRT1 | **#63** | 0.00422 |
| SIRT3 | #71 | 0.00295 |
| SIRT2 | #110 | 0.00127 |

- By random-walk flow, SIRT1 is closest to Adrenochrome, SIRT3 second, SIRT2 far behind.

## Cross-Metric Synthesis — the Ranking Flips

| Metric class | Winner | Meaning |
|---|---|---|
| Shortest-path multiplicity (§1) | **SIRT3** | Redundant routes → robustness |
| Adamic-Adar (§3) | **SIRT3** | Strongest latent link pull |
| k-core (§4) | **SIRT1** | Deepest nested core |
| Effective resistance (§6) | **SIRT1** | Global-flow proximity |
| Personalized PageRank (§7) | **SIRT1** | Diffusion-flow proximity |
| Fiedler (§5) | all ≈ boundary | Redox-gatekeeper positioning |

**Biological reading**: SIRT3 is wired *into* Adrenochrome's zone through multiple specific stress links ([[Oxidative Stress]] + [[NF-κB]]); SIRT1 merely sits in a high-flow central region. A 2-hop BFS answer ("identical") would have erased exactly the signal this analysis recovers.

## Caveats & Methodology Notes

- Graph projected to **undirected** for node metrics; edge relation semantics collapsed.
- Self-loops removed; isolated/duplicate components excluded (giant component only).
- Degree values differ from the earlier `task_output_adrenochrome_sirtuins_trace_17_JUL_2026` (e.g. SIRT1 209 here vs 198 there) because the graph was rebuilt with a different id scheme.
- `scipy.sparse.linalg.eigsh` in `'SM'` mode returns the trivial zero eigenvalue for the singular Laplacian and equal Fiedler coordinates — a documented pitfall. Use dense `eigh` or a non-zero `sigma` shift-invert instead.
- `svds` (truncated largest components) is **not** a valid commute-time substitute; use the pseudoinverse constructed from thresholded eigenvalues.
- PPR rank/score and resistance distances are sensitive to α and to giant-component inclusion; treat reported values as comparative, not absolute.

## Suggested Follow-ups

- Repeat the same 7-measure drill on the **COMT / MAO** pair vs [[Dopamine]]/[[Epinephrine]] to test whether robustness-vs-flow disagreement generalizes.
- Weight edges by `confidence_score` and compare weighted vs unweighted resistances.
- Diff the Fiedler signs of all `community_name` hubs to map which communities the sirtuin boundary separates.

## Interpretation

This is a knowledge-graph proximity analysis asking a question naive hop-count can't answer: **which sirtuin is functionally closest to Adrenochrome**, given all three are exactly 2 hops away.

**Core finding — the ranking is metric-dependent, and that dependence is the signal:**

| Metric class | Winner | What it measures |
|---|---|---|
| Redundancy/robustness | **SIRT3** | 2 independent shortest paths (via [[Oxidative Stress]] *and* [[NF-κB]]) vs SIRT1/SIRT2's single-bridge dependency; strongest latent-link pull (Adamic-Adar 0.556 vs 0.268) |
| Flow/proximity | **SIRT1** | Highest k-core (6), lowest effective resistance (0.094 vs 0.124), top PPR rank (#63 vs #110) |
| Topology | all ≈ | Fiedler vector places all three near the bisection boundary — consistent with shared redox-gatekeeper positioning |

**The biological reading:** SIRT3 is deliberately wired *into* Adrenochrome's stress zone — its connection to Adrenochrome passes through the mitochondrial redox/stress response ([[Oxidative Stress]], [[NF-κB]], [[HIF-1α]], ischemia-reperfusion) where it has mechanistic business being. SIRT1 instead sits in a high-traffic central region of the graph; its nearness is a byproduct of being a hub (degree 209 vs SIRT3's 104), not of specific path design. The graph's own structure encodes SIRT3 as the sirtuin that *belongs* in the adrenochrome neighborhood.

**Caution flags the analysis itself raises** (all valid):

- Projected to undirected — edge direction semantics are lost.
- Giant component (2028/2479 nodes) only — ~18% of nodes excluded.
- Values are comparative, not absolute (sensitive to α and component inclusion).
- Metric disagreement (SIRT1 vs SIRT3) is expected given the two distinct graph roles — but the z-scores (−1.7) say *all three* are meaningfully close vs random expectation.

In short: **there is no single "winner"** — SIRT3 wins the *wiring*, SIRT1 wins the *flow*; the two answer different questions (specificity vs centrality). Notably, the suggested follow-up (COMT/MAO vs [[Dopamine]]/[[Epinephrine]]) is the right way to test whether this robustness-vs-flow split is a general pattern for the catecholamine-metabolism cluster.