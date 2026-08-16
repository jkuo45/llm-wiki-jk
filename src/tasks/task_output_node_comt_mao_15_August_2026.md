---
title: COMT × MAO Node Analysis vs Dopamine/Epinephrine — 15 August 2026
description: "Comparative node analysis of the two catecholamine-metabolizing enzymes COMT and MAO against the substrates Dopamine and Epinephrine in the wiki knowledge graph. Hop-distance is non-discriminating (all edges); Adamic-Adar, k-core, effective-resistance z-scores, Fiedler vector, and personalized PageRank resolve a sharply asymmetric picture: COMT is a dense, high-flow hub tightly wired to both catecholamines, while MAO is a low-degree peripheral node whose only substantive pull is toward Epinephrine. Reproduces via scripts/node_analysis.py."
created: 2026-08-15
updated: 2026-08-15
tags:
  - task-output
  - knowledge-graph
  - node-analysis
  - networkx
  - scipy
  - spectral-analysis
  - comt
  - mao
  - dopamine
  - epinephrine
  - graph-theory
source: graphify-out/graph.json + scripts/node_analysis.py (networkx/scipy)
---

# COMT × MAO Node Analysis vs Dopamine / Epinephrine

> Graph-derived comparative node analysis. Date: 15_August_2026
> Method: `uv run --with networkx --with scipy python3 scripts/node_analysis.py --sources comt mao --targets dopamine epinephrine`
> Corpus: `graphify-out/graph.json` (2479 nodes / 3388 links directed), undirected projection, self-loops removed, giant component analysed (2028 nodes, 209 total components).

## Data Reduction Note

- Graph node ids are snake_case strings; script resolves entity labels case-insensitively.
- **Hop distance is trivially non-discriminating**: every source–target pair sits exactly **1 edge** apart (they are metabolically adjacent in the corpus). All discriminating signal comes from the networkx/scipy metrics below.

## 1. Shortest-Path Multiplicity (NetworkX)

| Pair | Shortest paths | Bridges (1st hop) |
|---|---|---|
| COMT → Dopamine | 1 | — (direct edge) |
| COMT → Epinephrine | 1 | — (direct edge) |
| MAO → Dopamine | 1 | [[Epinephrine]] |
| MAO → Epinephrine | 1 | — (direct edge) |

- COMT links directly to both catecholamines; MAO reaches Dopamine **only through Epinephrine** (no direct edge).

## 2. Neighborhood Distinctness (degree + Jaccard)

| Measure | COMT | MAO | Dopamine | Epinephrine |
|---|---|---|---|---|
| Degree | 57 | **2** | 12 | 21 |

Pairwise Jaccard: COMT–MAO **0.017**, COMT–Dopamine 0.015, COMT–Epinephrine 0.013, MAO–Dopamine **0.000**, MAO–Epinephrine 0.045, Dopamine–Epinephrine 0.031.

- MAO has **zero shared neighbors** with Dopamine — its only graph footprints are [[Epinephrine]] and [[Hydrogen Peroxide]] (degree 2).
- COMT's unique neighborhood is genotype/pharmacology: [[Berberine]], [[Betaine]], COMT Val allele, Catechols, D2 receptor, chromosome 22q11.21, COMT inhibitor supplements.
- Dopamine's orbit is neurotoxicology ([[Dopaminochrome]], [[Dopamine o-quinone]], [[Neuromelanin]], [[Substantia Nigra Pars Compacta]]); Epinephrine's is cardiometabolic oxidation ([[Adrenochrome]], [[Adrenaline-quinone]], [[Myeloperoxidase]], [[Neutrophils]], [[Metanephrine]]).

## 3. Adamic-Adar Link-Prediction Proximity (every source × every target)

| Pair | Adamic-Adar |
|---|---|
| COMT → Dopamine | 0.514 |
| COMT → Epinephrine | **0.721** |
| MAO → Dopamine | **0.000** |
| MAO → Epinephrine | 0.379 |

- COMT's strongest latent edge pull is toward Epinephrine; MAO has nothing latent toward Dopamine and a moderate pull to Epinephrine.

## 4. k-Core Nesting (NetworkX)

| Node | k-core |
|---|---|
| COMT | **4** |
| Dopamine | 4 |
| Epinephrine | 4 |
| MAO | **2** |

- MAO is excluded from the denser enzymatic/genealogy core shared by COMT and both catecholamines.

## 5. Spectral Analysis (SciPy — dense eigh)

- **Algebraic connectivity** λ₂ = **0.0495** (same giant component as all analyses).
- **Fiedler vector** (bisection axis): COMT **+0.0274** (well off the boundary), MAO +0.0028, Dopamine +0.0066, Epinephrine +0.0050.
- COMT is the node most distinctly placed on one side of the graph's natural bisection among the four — its metabolism/genotype cluster is cleanly separable from the rest of the graph.

## 6. Effective-Resistance / Commute Distance (pseudoinverse Laplacian)

`R_eff` via thresholded dense `eigh`, null model = 300 random nodes per target.

| Pair | R_eff (lower = closer) | z |
|---|---|---|
| COMT → Dopamine | 0.216 | −1.66 |
| COMT → Epinephrine | **0.195** | −1.74 |
| MAO → Dopamine | 0.736 | −0.70 |
| MAO → Epinephrine | 0.552 | −1.07 |

- COMT is significantly closer to both catecholamines than random expectation; MAO is only marginally / not significantly closer (Dopamine z = −0.70).
- Despite both being "enzymes of catecholamine metabolism", MAO has ~3–4× larger commute distance to the target zone than COMT.

## 7. Personalized PageRank — Random-Walk Proximity (networkx)

| Target seed | COMT | MAO |
|---|---|---|
| Dopamine | **#3** (0.03671) | #380 (0.00023) |
| Epinephrine | **#3** (0.02622) | #14 (0.01190) |

- Seeded at Dopamine, COMT is the #3 most proximal node in the whole graph; MAO #380 (~4 orders of magnitude lower flow fraction).
- Seeded at Epinephrine, COMT still #3, but MAO rises to #14 (diffusion flows through the direct MAO–Epinephrine edge).
- Ranking coherence: COMT = high-flow hub for both substrates; MAO = peripheral, only locally coupled to Epinephrine.

## 8. Cross-Metric Synthesis

| Metric | COMT | MAO |
|---|---|---|
| Direct adjacency to both targets | Yes | Epinephrine only |
| Adamic-Adar | 0.51–0.72 | 0–0.38 |
| k-core | 4 | 2 |
| Effective resistance z | **−1.66 / −1.74** | −0.70 / −1.07 |
| PPR rank seeded at Dopamine | #3 | #380 |

**Biological reading**: In corpus topology, COMT is the *systemic* hub of catecholamine handling — dense, high-flow, genotype-linked — while MAO sits as a peripheral metabolic spoke whose connection to the dopamine lineage depends on passing through epinephrine. A 1-hop BFS answer ("COMT and MAO both adjacent") would erase this enzymatic-hub vs enzyme-periphery distinction that every higher-order measure recovers.

## Caveats & Methodology Notes

- Undirected projection; relation semantics collapsed.
- Giant component only; self-loops removed; src/tasks/_triples.json excluded.
- Fiedler eigenvector sign is arbitrary; compare magnitudes/relative placement, not sign.
- `eigsh(which='SM')` and truncated `svds` are deliberately avoided (see task_output_sirtuins_adrenochrome_node_analysis_15_August_2026.md).
- Adamic-Adar of 0.000 means zero common neighbors, not necessarily zero relatedness.
- Numbers reproduce with `scripts/node_analysis.py`; default seed 1.

## Suggested Follow-ups

- Run the same drill on another enzyme axis, e.g. `--sources nqo1 dt_diaphorase --targets menadione` to test whether hub-vs-periphery asymmetry is a general feature of enzyme–substrate pairs.
- Trace SIRT1/SIRT2 → Dopamine vs Epinephrine to combine the sirtuin and catecholamine analyses.
- Compare COMT genotype-axis nodes (Val/Met) against hotspot residues to test whether the spectral bisection axis aligns with genotype partitioning.
- Weight edges by `confidence_score` (EXTRACTED vs INFERRED) and re-run to see if MAO's peripheral status persists in a confidence-weighted graph.