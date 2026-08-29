---
title: Graph Metrics (wiki + triples) - Combined
description: Metrics analysis of the combined (triples + wiki) knowledge graph — recomputed centrality on the union topology (4,084 nodes / 36,982 edges), role distribution, connectivity contrast vs the triples graph (components 223→123, k-core 6→20, giant component 82%→94%), wiki-only core integration (cGAS, STING, Phosphorylation…), p53/TP53 consolidation, and wiki-boosted shared hubs — with the caveat that the stored combined fingerprint inherits per-source values. Correction note - the wiki previously split the single p53/TP53 entity into two nodes (p53 protein + TP53 gene); consolidated into p53, a shared union core node.
created: 2026-08-27
updated: 2026-08-27
source: web/data/nodes.json + edges.json (combined, scripts/05_build_combined.py) + graphify-out/graph.json (triples)
tags:
  - task-output
  - knowledge-graph
  - combined-graph
  - node-analysis
  - pagerank
  - betweenness-centrality
  - k-core
  - networkx
author: []
starred: true
---

# Node-Level Network Analysis for the Combined Knowledge Graph

> [!NOTE]
> **Task**: Run the same per-node metrics analysis that produced `web/pages/en-US/node-analysis-examples-biology.html` (a triples-graph reference) on the **combined graph** (triples + Obsidian-wiki links), recompute the centrality fingerprint on the actual union topology, and highlight anything that is specific to the combined graph.
> **Date**: 27_Aug_2026 06:15 PM PDT
> **Scope**: `web/data/nodes.json` + `web/data/edges.json` (canonical combined dataset, built by `scripts/05_build_combined.py`) · `graphify-out/graph.json` (triples, rebuilt with normalized ids 27_Aug_2026) · `scripts/04_node_analysis.py` conventions · recomputed union metrics (parameters in §3)

---

## 1 · What the combined graph is

The vault now exposes three graph datasets in the web viewer (**combined** is the default):

| Dataset | Nodes | Edges | Source |
| --- | ---: | ---: | --- |
| Triples | 2,629 | 3,832 | `_triples.json` extractions → `graphify-out/graph.json` |
| Wiki | 2,994 | 34,850 | Obsidian `[[wikilinks]]` (entity notes) → `wiki-out/wiki-graph.json` |
| **Combined** | **4,084** | **36,982** | union of the two (`05_build_combined.py`) |

Composition of the combined node set (by node id — `norm()`-canonical, so `NF-κB` = `nf_kappab` in all three):

- **shared (triples + wiki): 1,539**
- **wiki-only: 1,455**
- **triples-only: 1,090**

> [!note] Correction (this run)
> The wiki previously emitted **two** nodes for a single entity — `p53` (protein) and `tp53` (the `TP53` gene note, which also carried the alias `p53` and hijacked most `[[p53]]` links because it sorted first at build time). The two notes were merged into the canonical `src/notes/_link/p53.md` (aliases: `TP53`, `Tumor protein p53`) and all `[[TP53]]` links were relinked to `[[p53]]`. After rebuild, **p53 is a shared union core node** (union degree 211, k-core 20, PageRank 0.00341) — it is *not* a wiki-only leaf. That is why "TP53" no longer appears in the §2.3 wiki-only table below.

Edge sources in the union:

- **both graphs: 1,700** (4.6%)
- **wiki-only: 33,150** (89.7%)
- **triples-only: 2,132** (5.8%)

> [!important] Fingerprint caveat
> The `nodes.json` fingerprint stored on combined nodes is **inherited from each source graph**: triples nodes carry triples-side metrics, wiki-only nodes carry wiki-side metrics, and shared nodes carry triples values (community/color/description prefer triples). The union topology was **not** re-analyzed at build time. The numbers below are therefore **recomputed on the true union** (directed PageRank; undirected betweenness/clustering/k-core; roles via `_node_roles_lib`) so they are genuine combined-graph metrics, comparable to the triples-graph reference page.

---

## 2 · Headline findings — what is specific to the combined graph

### 2.1 The wiki links stitch the triples fragments into one dense network

Recomputing connectivity on the union versus the triples graph alone:

| Metric | Triples | Combined (union) | Δ |
| --- | ---: | ---: | ---: |
| Connected components | **223** | **123** | −100 |
| Giant component (nodes) | 2,147 (81.7%) | 3,839 (**94.0%**) | +1,692 |
| Max k-core | **6** | **20** | +14 |
| Average clustering | — | 0.290 | — |

The triples graph understates connectivity: 18% of its nodes sit outside the giant component, and its inner core stops at k = 6. Adding the `links_to` wiki edges collapses the periphery into the core — **k-core 6 → 20** is the single strongest combined-graph signal. A node's "backbone" rank is meaningless without stating which graph it was computed on (see §4).

### 2.2 Role distribution shifts dramatically on the union

Roles recomputed on the union (same `_node_roles_lib` rules, thresholds recalibrated to the union — see caveats):

| Role | Triples (reference page) | Combined (union) | Reading |
| --- | ---: | ---: | --- |
| Spreader | 205 (7.9%) | **2,026 (49.6%)** | wiki links are authoring out-edges → most nodes look like sources |
| Periphery | 1,925 (74.2%) | **1,055 (25.8%)** | leaves get pulled into the connected core |
| Module member | 71 (2.7%) | 799 (19.6%) | dense local neighbourhoods |
| Bottleneck | 260 (10.0%) | 409 (10.0%) | top-decile betweenness (recalibrated) |
| Sink | n/a | 359 (8.8%) | |
| Core backbone | 99 (3.8%) | 180 (4.4%) | k-core ≥ max−1 |
| Master regulator | 51 (2.0%) | 89 (2.2%) | source ∧ endorsed |

> [!warning] Spread vs role on wiki edges
> Wiki edges are untyped (`links_to`, direction = note-authoring direction) and `confidence = 1.0`. The Spreader explosion is a **semantic artifact of edge type**, not a biological claim: out-degree on wikilinks counts how many other entity notes a note mentions. On the combined graph, read *degree/k-core/connectivity*; treat *directed role semantics* (spreader/sink) with caution unless restricted to triples-typed edges.

### 2.3 Wiki-only nodes sit in the core, not the periphery

The top wiki-only nodes (present only in the wiki graph) are **integrated into the union's dense core** (k-core 15–20), not hanging leaves:

| Node | Degree (union) | k-core | Roles (union) |
| --- | ---: | ---: | --- |
| cGAS | 96 | 18 | Sink · Bottleneck |
| Phosphorylation | 87 | 17 | Spreader · Master regulator · Bottleneck |
| STING | 83 | 16 | Sink · Bottleneck |
| Cell Cycle | 83 | 15 | Sink · Bottleneck |
| Macrophage | 75 | 20 | Spreader · Bottleneck · Core backbone |
| Ubiquitination | 72 | 17 | Spreader · Bottleneck |
| NMN | 71 | 19 | Sink · Bottleneck |
| Rheumatoid Arthritis | 71 | 20 | Spreader · Bottleneck · Core backbone |
| Endothelial Cells | 68 | 18 | Bottleneck |
| Fibroblast | 68 | 17 | Sink · Bottleneck |
| Type I Interferon | 66 | 16 | Sink |

> [!note] p53/TP53 moved out of this table
> After the Consolidation, **p53 is a *shared* node** (it now carries both triples and wiki edges), so it is no longer a wiki-only entry. On the union it is the graph's 3rd-largest single-entity hub by wiki in-degree: union degree **211** (k-core 20, PageRank 0.00341, Sink · Bottleneck · Core backbone) and a top union-PageRank gainer (see §2.4). The largest wiki-only node is now **cGAS** (96, k-core 18).

Interpretation: the wiki corpus adds **mechanistic/process vocabulary** (cGAS–STING axis, ubiquitination, cell-cycle control, NMN/NAD+) that the triples extraction had under-represented; these nodes attach deep inside the aging/senescence core. Top wiki-only PageRank (corrected): Autophagosome (0.00174), Epigenetic Aging, Atg1, Epigenetic Alterations, Cell Cycle, Histone Variant, PARK2, mPTP, Phosphorylation, NMN.

### 2.4 Shared hubs are massively wiki-boosted

For shared nodes, union PageRank minus triples PageRank (top movers):

| Node | union PR | triples PR | Δ |
| --- | ---: | ---: | ---: |
| Oxidative Stress | 0.01143 | 0.00321 | +0.00822 |
| Cancer | 0.00924 | 0.00343 | +0.00581 |
| Apoptosis | 0.00745 | 0.00202 | +0.00543 |
| Inflammation | 0.00604 | 0.00062 | +0.00542 |
| ROS | 0.00537 | 0.00026 | +0.00511 |
| Mitochondria | 0.00504 | 0.00064 | +0.00440 |
| Autophagy | 0.00828 | 0.00414 | +0.00414 |
| Senescence | 0.00632 | 0.00277 | +0.00355 |
| Inflammaging | 0.00457 | 0.00142 | +0.00315 |
| Caloric Restriction | 0.00305 | 0.00075 | +0.00230 |
| p53 | 0.00341 | 0.00117 | +0.00225 |

Every established hub gains 2–5× PageRank once wiki endorsements are counted; several (ROS, Inflammation, Mitochondria) were near-invisible in triples-only ranking. **p53** now appears on this list: once the merged `p53` note is recognized as the same entity (rather than split into a wiki-only `TP53` node), its union PageRank (0.00341, ≈3× the triples value) reflects the full weight of the wiki's 184-link endorsement cluster.

### 2.5 Bottleneck reshuffle

Top betweenness on the union (undirected): **SIRT1 0.080**, Oxidative Stress 0.079, Cancer 0.069, SIRT3 0.056, Apoptosis 0.048, Aging 0.045, Autophagy 0.043, SASP 0.043. On the triples graph the reference case was **SASP 0.0555**. The wiki-stitched network redistributes path centrality: SIRT1 and Oxidative Stress displace SASP as the premier bridges — SASP becomes co-central rather than dominant.

### 2.6 NF-κB parity is fixed

After the normalized-id rebuild, `NF-κB` = `nf_kappab` **in all three graphs**, so the entity is a **shared node** in the combined set (degree 368, k-core 20, Master regulator on the union; union PageRank 0.0055 — 10th). Previously (old `norm()`), triples (`nf_b`) and wiki (`nf_kappab`) were two separate nodes; combined-mode analysis would have split the entity in two.

### 2.7 Union hub table (top-15 by recomputed degree)

| Node | Degree | k-core | Source | Roles (union) |
| --- | ---: | ---: | --- | --- |
| Oxidative Stress | 607 | 20 | both | Sink · Master regulator |
| SIRT1 | 578 | 20 | both | Spreader · Master regulator |
| Cancer | 572 | 20 | both | Sink · Master regulator |
| SASP | 546 | 20 | both | Sink · Master regulator |
| Apoptosis | 444 | 20 | both | Sink · Master regulator |
| Autophagy | 423 | 20 | both | Sink · Master regulator |
| Aging | 395 | 20 | both | Sink · Master regulator |
| Senescence | 384 | 20 | both | Sink · Master regulator |
| SIRT3 | 370 | 20 | both | Spreader · Master regulator |
| NF-κB | 368 | 20 | both | Sink · Master regulator |
| Inflammation | 351 | 20 | both | Sink · Master regulator |
| Parkinson's Disease | 295 | 20 | both | Sink · Master regulator |
| Mitochondria | 290 | 20 | both | Sink · Master regulator |
| SIRT6 | 286 | 20 | both | Spreader · Master regulator |
| ROS | 284 | 20 | both | Sink · Bottleneck |

All top-15 are shared nodes at k-core 20 — the union's inner shell is the established triples core with wiki reinforcement.

---

## 3 · Method notes

- **Recomputed, not inherited.** Numbers above recompute degree / PageRank (α = 0.85, unweighted, per `enrich_graph_metrics` convention) and betweenness/clustering/k-core on the undirected projection of the union. The stored `nodes.json` fingerprint is per-source and should not be read as union metrics.
- **Repro (ad-hoc, not a tracked script).** Build the union `DiGraph` from `web/data/nodes.json` + `edges.json` (nodes: `id`/`label`/`in_triples`/`in_wiki`; edges: `from`→`to`), drop self-loops, then: `nx.pagerank(G, alpha=0.85, max_iter=200)`; undirected `G.to_undirected()` → `nx.betweenness_centrality`, `nx.clustering`, `nx.core_number`, `nx.connected_components`; roles via `scripts/_node_roles_lib.py` (`compute_thresholds` + `classify`). Triples comparison reads `graphify-out/graph.json` the same way.
- **Communities.** Kept as the offset merged legend (triples cids + wiki cids +1000). Leiden was **not** re-run on the union; a re-cluster would produce genuinely new combined communities (a natural next step, see §5).
- **Roles.** `_node_roles_lib` rules unchanged; thresholds are percentiles recalibrated to the union, so counts are comparable in spirit, not 1:1, with the triples page table.
- **Edge typing.** 89.7% of union edges are untyped wiki `links_to`; directed role semantics on those edges are authoring artifacts (see §2.2 warning).

---

## 4 · What this means in practice

1. **State the graph in every analysis.** Degrees, k-core, betweenness, and PageRank are all graph-dependent; the triples and combined graphs give *qualitatively different* readings (k-core 6 vs 20; SASP vs SIRT1 as top bottleneck). The triples-graph reference page (`node-analysis-examples-biology.html`) and earlier calculation documents were computed on the triples graph only.
2. **The combined graph is the better connectivity picture** (94% giant component, k-core 20) — use it for *structural* questions (which entities bridge domains, what is the core).
3. **The triples graph is the better *mechanism* picture** — only it carries typed, confidence-weighted relations (`promotes`, `inhibits`, …); use it for directional causal claims. Restricting union analyses to `sources` contains triples (2,132 triples-only + 1,700 both = typed spine) recovers typed semantics on the denser topology.
4. **Wiki-only nodes are first-class core entities**, not curiosity leaves: cGAS, STING, Cell Cycle, Ubiquitination, NMN, PARK2 — many are k-core 15–20 in the union and merit the same deep-dive treatment as triples hubs. **p53** likewise earns deep-dive treatment, but now as a *shared* hub (union degree 211, k-core 20) after its gene/protein notes were consolidated.

---

## 5 · Recommended next steps

- **Re-cluster the union with Leiden** and emit a canonical `combined graph.json` (nodes with union metrics + roles baked in, like the triples pipeline), so `04_node_analysis.py --graph combined-graph.json` can run path/multiplicity/PPR analyses on the union.
- **Typed-spine analysis:** run the relation-aware methods (`04_node_analysis.py`) on the triples-only + shared edge set over the union node set (≈3,832 typed edges) to compare path structure vs full union.
- **Wiki-role de-biasing:** recompute roles on the typed subset to separate authoring-out-degree from biological broadcasting.
- **Reconcile the reference page** (`node-analysis-examples-biology.html`) with a combined-graph section or a companion page, labeling both graphs.

---

## References

- `web/pages/en-US/node-analysis-examples-biology.html` — triples-graph metrics/roles reference (16 Aug 2026).
- `src/tasks/task_output_node_analysis_biology_16_AUG_2026.md` — source analysis document (triples graph).
- `scripts/03_rebuild_from_triples.py` — triples rebuild (`enrich_graph_metrics`, `DENYLIST`, Leiden).
- `scripts/05_rebuild_from_wiki.py` — wiki graph build (entity notes, doc/task exclusion).
- `scripts/05_build_combined.py` — combined dataset merge + triples-vs-wiki gap report (`wiki-out/graph-diff.json`, `GRAPH_DIFF.md`).
- `scripts/_node_roles_lib.py` — shared role classifier (`ROLE_DEFS`).
- Recomputed union metrics — method in §3 of this task output.