---
title: Node-Level Network Analysis for Biological Prioritization
description: Methodology guide for triaging biomedical entities in graphify-out/graph.json using per-node centrality metrics (degree, PageRank, betweenness, k-core, clustering coefficient, Leiden community) computed by scripts/03_rebuild_from_triples.py — with worked examples from the vault's graph and concrete next steps for target/druggability discovery in longevity and senescence research.
created: 2026-08-16
updated: 2026-08-22
source: graphify-out/graph.json node metrics + scripts/04_node_analysis.py + scripts/03_rebuild_from_triples.py
tags:
  - task-output
  - knowledge-graph
  - node-analysis
  - pagerank
  - betweenness-centrality
  - k-core
  - drug-discovery
  - geroscience
author: []
---

# Node-Level Network Analysis for Biological Prioritization

> [!NOTE]
> **Task**: Synthesize how the per-node centrality metrics in `graphify-out/graph.json` can be used to triage biomedical entities, walk through concrete worked examples already present in the vault's graph, document the analysis methods available, and propose concrete next steps to push this line of work forward.
> **Date**: 16_AUG_2026
> **Scope**: `graphify-out/graph.json` node metrics + `scripts/04_node_analysis.py` + `scripts/03_rebuild_from_triples.py`

---

## Objective

The vault's knowledge graph is not just a lookup table — each node carries a **metric fingerprint** computed in `scripts/03_rebuild_from_triples.py:441` (`enrich_graph_metrics`):

`degree`, `in_degree`, `out_degree`, `pagerank`, `betweenness_centrality`, `clustering_coefficient`, `k_core_number`, `community_size`, `community_name`.

The goal of this task is to (a) show _why_ this fingerprint is biologically meaningful, (b) demonstrate it on real nodes already in the graph, and (c) recommend how to operationalize it for target/druggability discovery in the longevity/senescence space the vault already covers.

---

## The Metrics and Their Biological Reading

| Metric                              | Graph op (line)                       | Biological question it answers                                 |
| :---------------------------------- | :------------------------------------ | :------------------------------------------------------------- |
| `in_degree` / `out_degree`          | `G.in_degree`/`G.out_degree` (471)    | Regulator vs. target? Upstream driver vs. downstream effector? |
| `pagerank`                          | `nx.pagerank` (475)                   | Foundational importance, weighted by _who_ connects to it      |
| `betweenness_centrality`            | `nx.betweenness_centrality` (479)     | Bottleneck / bridge node — systemic-leverage target            |
| `clustering_coefficient`            | `nx.clustering` (483)                 | Module member (tight complex) vs. connector (signaling hub)    |
| `k_core_number`                     | `nx.core_number` (487)                | Position in the resilient core backbone vs. periphery          |
| `community_name` / `community_size` | Leiden (628) + top-degree label (639) | Which emergent pathway/process the node belongs to             |

Two pipeline choices make these readings trustworthy for biology:

- **Type-hub denylisting** (`DENYLIST`, line 39): abstract categories (`chemical`, `protein`, `enzyme`, `gene`) are pruned so centrality reflects _specific instantiated entities_ (ACSL4, GPX4, Ferroptosis), not a dominating "protein" blob.
- **Confidence-weighted edges** (`d["weight"] = confidence_score`, line 503): every metric is evidence-weighted, not a raw co-occurrence count.

---

## Worked Examples from the Current Graph

- **Acid ceramidase — the out-degree "spreader" that becomes a senolytic target**
  - `degree 20`, **`out_degree 17` / `in_degree 3`**, `pagerank 0.00078`, `betweenness 0.0083`, `k_core 4`, community _"Acid ceramidase"_ (size 18).
  - The asymmetry (17 outgoing vs. 3 incoming) marks it as a **source node**: it pushes effects onto many lipid/ferroptosis nodes rather than being acted upon. In the underlying document _"Could this enzyme help remove 'zombie' cells from our tissues?"_, elevated acid ceramidase in senescent cells reshapes membranes toward a PUFA-rich, pro-ferroptotic profile — and its knockdown (or inhibition by ARN14794) protects cells. The out-degree dominance is the network signature of exactly this _spreading_ vulnerability: it is the control point through which a few senescent cells sensitize neighbors to ferroptosis. That is why the graph also carries a _"Senolytic Drug Target"_ node pointing at it.
  - **Reading**: high `out_degree` + mid `betweenness` + named-community-anchor ⇒ strong senolytic/senomorphic candidate.

- **SASP — the convergent-and-divergent secretory hub**
  - `degree 101`, **`in_degree 56` / `out_degree 45`**, `pagerank 0.0074`, `betweenness 0.060`, `k_core 6`.
  - Highest betweenness in the examples surveyed: SASP sits on the shortest paths between many communities (mitochondria → epigenetics → inflammation → senescence). It is both a sink for upstream senescence triggers and a source for the paracrine SASP cytokines (IL-6, IL-8) that, per _"Acid_ceramidase_modulates_the_lipid_profile_and_ex"_, induce acid ceramidase in bystander cells.
  - **Reading**: high `in_degree` + high `out_degree` + top `betweenness` ⇒ master program / signaling nexus; perturbing it has network-wide reverberation.

- **Aging — the PageRank/core backbone**
  - `degree 48`, `in_degree 35`, `out_degree 13`, `pagerank 0.0076`, `betweenness 0.046`, `k_core 6`.
  - PageRank (0.0076) is the highest among the sampled nodes, reflecting that Aging is connected to _other important_ nodes across communities. k-core 6 places it in the densest mutually-reinforcing core alongside SASP and Senescent Cells.
  - **Reading**: top `pagerank` + `k_core 6` ⇒ foundational, non-peripheral driver; the "common soil" node that downstream disease/age-related communities attach to.

- **GPX4 / iNOS / Cataract — clustering = 1.0 module members**
  - GPX4 `clustering 1.0`, `k_core 2`; Inducible NOS `clustering 1.0`; Cataract `clustering 1.0`.
  - A clustering coefficient of 1.0 means every neighbor of the node is also connected to every other neighbor — a tightly-knit local module (a redox complex, a NO-cascade, an AGE-cross-linking cluster). Contrast with bridging nodes (Acid ceramidase clustering ≈ 0.04), which connect otherwise-separate regions.
  - **Reading**: `clustering ≈ 1.0` ⇒ participant inside a cohesive mechanism; `clustering ≈ 0` ⇒ connector/bottleneck. The two are complementary druggability strategies (disable the module vs. cut the bridge).

- **The k-core 6 backbone**
  - Nodes at `k_core 6`: Aging, SASP, Senescent Cells. These form the resilient inner core — the mutually-reinforced machinery of the senescence/aging axis. Everything else (periphery at k-core 1, e.g. 2-Chlorophenothiazine, Acetate, Alagebrium) hangs off this core.
  - **Reading**: k-core decomposition gives an instant "essential vs. incidental" ranking — useful for deciding which nodes merit deep-dive entity notes vs. which are contextual leaves.

---

## Analysis Methods Already Available

Beyond the static fingerprint, `scripts/04_node_analysis.py` (referenced in README "Node Analysis") adds multi-node, relation-aware analytics on top of the same `graph.json`:

- **Shortest-path multiplicity with edge relations** — not just _whether_ A reaches B, but the _labeled_ chain (e.g. `Acid ceramidase —promotes→ Lipid Peroxidation —drives→ Ferroptosis`).
- **Neighborhood Jaccard similarity** — finds entities that share the same biological neighborhood (candidate mechanistic analogs / off-target twins).
- **Adamic-Adar link prediction** — surfaces plausible missing links (hypothesis generation for new mechanism edges).
- **k-core nesting** — already in the fingerprint; reusable for core/periphery ranking.
- **Spectral connectivity (Fiedler vector)** — identifies the graph cut that splits the network into two coherent sub-systems (e.g. separating "damage" vs. "repair" modules).
- **Effective resistance / commute distance** — a metric-aware distance that down-weights long, low-confidence routes; good for ranking "how far apart" two pathways really are.
- **Personalized PageRank** — seed with a node of interest (e.g. `sirt1`) to rank the rest of the graph by relevance to _that_ starting point.

Run form (from README):
`uv run --with networkx --with scipy python3 scripts/04_node_analysis.py --sources sirt1 sirt3 --targets adrenochrome`

---

## Suggestions to Further This Along

> [!TIP]
> Concrete, buildable next steps — ordered by effort/impact.

1. **Auto-role classifier from the fingerprint.** Add a small rule layer (in `node_analysis.py` or a new `scripts/role_classify.py`) that tags each node with a biological role from its metrics, e.g.:
   - `master_regulator` ← high `out_degree` + high `pagerank`
   - `bottleneck` ← `betweenness` in top decile
   - `module_member` ← `clustering` > 0.5
   - `core_backbone` ← `k_core` ≥ 5
   - `periphery` ← `k_core` == 1
     Emit as a new column in `nodes.json` / a `node_roles.json` for the three-graph panel.

2. **Composite "senolytic target score".** Because the vault already converges on senescence/ferroptosis, compute a per-node score combining `out_degree` (spreading control), `betweenness` (leverage), community-bridge status (node whose community differs from most neighbors), and `clustering` (module disruptability). Rank and write the top-N to a task output — Acid ceramidase should surface near the top, validating the score.

3. **Personalized PageRank target-prioritization sweep.** Seed PPR from each k-core-6 backbone node (Aging, SASP, Senescent Cells) and intersect the top-ranked downstream nodes. The intersection = entities repeatedly nominated as downstream effectors across the core programs → high-value intervention points.

4. **Link-prediction hypothesis queue.** Run Adamic-Adar on the current graph and export the top-K novel (subject, predicate, object) candidates with confidence into a `src/tasks/` review file for manual curation / literature check. This turns the graph into a hypothesis generator, not just a browser.

5. **Fiedler-cut module map.** Use the Fiedler vector to propose a stable 2-way (then recursive) partition of the graph and compare it to the Leiden communities. Divergences flag nodes caught between two processes (e.g. a node Leiden puts in "Lipid Peroxidation" but spectral analysis puts with "SASP") — these are the integrative bridge nodes worth a dedicated entity note.

6. **Confidence-decay / provenance weighting.** Today edge `weight = confidence_score`. Extend to also discount edges from older source documents (README timestamps show docs spanning 21_JUL → 16_AUG) so metrics reflect recency, and expose `source_file` per edge in the three-graph panel for traceability.

7. **Visualize the k-core onion.** Render the nested k-core layers (1→6) as concentric shells in `graph.html`/three-graph so the core-backbone vs periphery structure is immediately legible — currently only the number is stored, not its layered layout.

8. **Wire `god_nodes` + `surprising_connections` into the README loop.** The rebuild already computes `god_nodes` and `surprising_connections` (`main()`, lines 643–644) and injects them into `graph.json` metadata. Surface the top entries automatically into the README "updates"/"notable" section so emergent high-leverage nodes are flagged without manual curation.

---

## Summary

The `graph.json` node fingerprint is biologically meaningful because it runs on a **directed, relation-typed, confidence-weighted** graph and explicitly removes abstract type hubs. The worked examples (Acid ceramidase's out-degree spread, SASP's betweenness nexus, Aging's PageRank/core backbone, GPX4/iNOS/Cataract's unit clustering, the k-core-6 senescence core) show the fingerprint already recovers real, literature-backed biological roles. Pairing the static fingerprint with `scripts/04_node_analysis.py`'s relation-aware analytics — and adding the role classifier, senolytic score, PPR sweep, and link-prediction queue above — would turn the graph from a navigation aid into an active target-prioritization engine for the vault's longevity research.
