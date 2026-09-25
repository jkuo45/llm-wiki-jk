---
title: Proximity-guided graph learning — techniques & repo implementation plan
description: "Key graph analysis techniques from Scandore et al. (Nature, 2026; proximity-guided TAPA discovery) mapped onto concrete adjustments to llm-wiki-jk's graph pipeline."
created: 2026-09-21
updated: 2026-09-21
tags: [graph-analysis, link-prediction, task]
---

# Proximity-guided graph learning — techniques & repo implementation plan

Source: `raw/_document_ - Proximity-guided graph learning reveals tumour-associated proximity antigens.md`
(Scandore et al., Nature 2026, s41586-026-11003-7)

## Key graph analysis techniques in the paper

### 1. MAD-normalized *t*-statistic edge confidence (micromap preprocessing)
Each of the 248 proximity maps is normalized with median absolute deviation (MAD)
to equalize dynamic range across experiments, then scored as a *t*-statistic per
protein. High-confidence edges: **MAD-*t* ≥ 2.0**. This is a robust
(z-score-like) per-map thresholding step that turns noisy quantitative proteomics
into a binary/weighted proximity network resistant to experiment-specific
variation.

### 2. Jaccard neighborhood similarity (anchor-vs-anchor)
Pairwise **Jaccard index over edge sets** (0.4–0.5 band highlighted) to find
receptors whose proximity neighborhoods overlap — distinguishes structured spatial
organization from random colocalization or abundance-driven detection.

### 3. MetaMap — Spearman correlation meta-network
The core non-targeted inference trick: build a **protein × micromap matrix**
(every protein's enrichment profile across all experiments), then compute
**pairwise Spearman rank correlations** between proteins. Proteins whose
proximity signatures co-vary across anchors/cell lines form a correlation
network → threshold → **community detection** (spatial protein communities).
This infers proximity for proteins that were *never directly targeted*.

### 4. Homogeneous multimodal graph construction
Per experiment, a single protein graph stacking three edge/node modalities:
- **STRING connectivity** (curated/known interactome prior),
- **measured proximity co-enrichment** (MAD-*t* edges),
- **protein expression** (abundance features).

### 5. Graph representation learning for co-target prediction
Three architectures trained to rank EGFR-associated co-targets:
| Model | Role |
|---|---|
| **Node2Vec** | structure-only baseline (noisy, weaker recovery) |
| **VGAE** | variational graph autoencoder — latent reconstruction |
| **GAT** | graph attention network — learns edge attention weights |

Findings that matter for reproduction:
- **Feature ablation**: dropping proximity *or* expression hurts precision; both together win. Proximity carries non-redundant signal beyond structure + expression.
- **Curriculum schedule**: progressively harder prediction tasks; GAT converges within a few epochs (attention + high signal-to-noise).
- Architecture agreement (VGAE ∩ GAT) = higher-confidence candidates; Node2Vec alone is unreliable.

### 6. Orthogonal enrichment validation
Predicted pairs checked against external layers: curated DBs (STRING/CORUM/
BioGRID/IntAct), DepMap coessentiality, clinical proteomics, normal-tissue
expression — prioritization is multi-layer, not a single score.

---

## Repo gap analysis

What already exists (reuse, don't rebuild):

| Paper technique | Repo equivalent |
|---|---|
| Jaccard neighborhood similarity | `scripts/analysis/node_analysis.py` §2 (pairwise Jaccard on giant component) |
| Community detection | graphify builds (`community`, `community_name` on nodes in `graphify-out/graph.json`) |
| Link candidates | `scripts/analysis/link_prediction.py` (Adamic-Adar + PPR + optional effective-resistance null) |
| Multimodal graph | combined dataset `web/public/data/nodes.json` + `edges.json` (triples ∪ wiki, `web_to_graph.py` bridge) |
| Null-hypothesis benchmarking | `--validate` + random-pair null in `link_prediction.py` |

What's missing (the actual paper techniques):

1. **Cross-map correlation layer (MetaMap)** — no Spearman protein-profile
   network exists; wiki/triples graphs are single-layer, but the *vault itself*
   is the "atlas": each note/topic acts like a micromap context.
2. **Robust edge normalization (MAD-*t*)** — wiki edges carry raw `weight`
   (co-occurrence counts, `scripts/wiki/rebuild.py:313`) with
   `confidence_score=1.0` hardcoded; no within-context robust scaling.
3. **Learned embeddings (Node2Vec/VGAE/GAT)** — nothing in `scripts/analysis/`
   trains models; only handcrafted metrics.
4. **Feature-ablation harness** — no way to test whether a modality contributes.

---

## Proposed repo adjustments (lazy → full)

### A. MetaMap analogue — highest value, zero new deps ⭐

New module `scripts/analysis/meta_map.py` + CLI entry `meta-map` in
`scripts/cli.py`:

1. Build a **node × context matrix**: rows = normalized node ids, columns =
   contexts (topic directories and/or source documents), cell = presence/
   co-occurrence strength of that node in that context (count of edges or
   mentions within the topic). Same `norm(label)` keying as the rest of the
   pipeline.
2. **Spearman pairwise correlations** between node profiles
   (`scipy.stats.spearmanr` or a rank+pearson via numpy — already using scipy
   in analysis scripts).
3. Threshold (e.g. ρ ≥ 0.5 **and** co-context count ≥ 2, both CLI flags) →
   correlation edges.
4. **Community detection** on the thresholded correlation network
   (`nx.community.greedy_modularity_communities`, matching graphify's approach)
   → "spatial protein communities" equivalent = topic-coherent entity clusters.
5. Emit `wiki-out/meta-map.json` (or `web/public/data/meta-map.json` if it
   should surface in the UI) with: correlation edges, communities, and
   **non-adjacent high-ρ pairs** = the paper's "non-targeted proximity"
   equivalent → feed straight into the existing Predicted Connections panel.

Run shape (mirrors existing conventions):

```bash
uv run --with networkx --with scipy python3 -m scripts.analysis.meta_map \
  --graph wiki-out/graph.json --rho 0.5 --min-contexts 2
```

Why this first: it's the paper's actual novel engine (MetaMap), it reuses the
graph loader/normalizer from `node_analysis.py`, and it produces candidate pairs
in the exact format `link_prediction.py` already validates.

### B. Robust edge weighting (MAD-*t* lite)

In `scripts/wiki/rebuild.py`, replace `confidence_score=1.0` with a **robust
z-score of `weight` within each topic/community** (MAD scaling:

```
z = 0.6745 * (w - median_w) / MAD_w
```

Keep edges with z ≥ 2.0 as "high-confidence", store as `confidence_score`.
One-line-ish change at the weight-recording site (`rebuild.py:313–328`), plus a
pass over each topic's edge group. No new deps (numpy already in the rebuild
command). Document the threshold in the script docstring. This is the literal
paper trick applied to co-occurrence counts instead of TMT intensities.

### C. Node2Vec baseline (only if you want learned embeddings)

Ponytail rung 4: don't add VGAE/GAT (torch-geometric is a heavy new dep for a
wiki). If a learned structure-only baseline is wanted:

```bash
uv run --with node2vec --with networkx python3 -m scripts.analysis.embed_nodes
```

New thin `scripts/analysis/embed_nodes.py`: load graph → Node2Vec (dim=64) →
cosine-similarity top-k non-neighbors per seed god-node → append to
`link-prediction.json` under `"node2vec_similar"` beside the existing
`"ppr_similar"`. This reproduces the paper's weakest model — useful only as a
sanity baseline against PPR/Adamic-Adar.

**Skip VGAE/GAT** until there's a labeled co-target task with ground truth
(there isn't — the wiki has no training labels). The paper needed them because
they had 248 supervised-ish proximity maps; the vault's equivalent supervision
is document co-occurrence, which MetaMap (A) already consumes without gradient
descent. The feature-ablation harness (§4 of the paper) also has nothing to
ablate here beyond {structure, co-occurrence, roles} — and `node_roles.json`
already covers roles.

### D. Ablation + validation harness (small)

Extend `link_prediction.py --validate` with a **modality ablation flag**:

```bash
python -m scripts predict-links --ablate cooccurrence   # drop weight edges
python -m scripts predict-links --ablate structure      # degree-preserving rewiring null
```

Each mode drops one modality, re-runs candidate scoring, and reports the drop in
overlap with a held-out edge set (or with MetaMap's high-ρ pairs). Mirrors the
paper's Fig. 4c without any ML — the null-rewiring variant is ~15 lines using
`nx.double_edge_swap`.

### E. Optional: co-target pair report

If the goal is explicitly "TAA–TAPA-style pairs", add a mode to `meta_map.py`
`--pairs --seed egfr` that, for a seed entity, ranks non-adjacent nodes by
combined score:

```
score = ρ_meta * log(1 + adamic_adar) * (1 if cross-community else 0.5)
```

Output a short markdown table → `src/tasks/` (task outputs live there per §AGENTS). This is the one-shot "proximity-guided co-pair" deliverable.

---

## Implementation order

| # | Change | Effort | New deps |
|---|---|---|---|
| 1 | `meta_map.py` + `meta-map` CLI (technique #3) | medium | scipy (already used) |
| 2 | MAD-weighted `confidence_score` in `rebuild.py` (technique #1) | small | numpy (already used) |
| 3 | ablation flags in `link_prediction.py` (technique #6) | small | none |
| 4 | Node2Vec baseline bolt-on (technique #5, baseline only) | small | `node2vec` |
| — | VGAE / GAT | skip | torch-geometric — no labels to justify |

Verification for each step: existing suite

```bash
uv run --no-build --with pytest --with pytest-asyncio --with fastapi --with httpx \
  --with networkx --with numpy --with scipy --with pydantic --with python-multipart \
  --with pillow --with graphifyy --with pyyaml python3 -m pytest tests/ -q
```

plus `predict-links --validate` after any edge-weight change, and a determinism
check (two runs of `meta-map` → byte-identical output, same convention as
`link_prediction.py`).

## Skipped / when to add

- Skipped VGAE/GAT + curriculum training: no supervision in the vault; add when
  a labeled proximity/co-target dataset is ingested.
- Skipped full TMT/MAD-*t* pipeline: vault edges are counts, not intensities;
  robust z-score is the honest analogue.
- Skipped UI surface for meta-map: emit JSON first; add a web panel only if the
  correlation communities prove better than graphify's existing communities.
