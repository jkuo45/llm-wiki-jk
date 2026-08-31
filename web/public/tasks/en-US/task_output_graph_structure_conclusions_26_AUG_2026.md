---
title: Further Graph-Level Conclusions From graph.json
description: Structural conclusions beyond the per-node metric fingerprint — degree distribution and giant-component dominance, centrality concentration as collection-strategy bias, community cohesion inversion, effector-arm fragility around acid ceramidase, entity-resolution debt, edge-direction semantics, ambiguity clustering, provenance staleness, and cross-document integration gaps. Derived from stored node metrics in graphify-out/graph.json, aggregate counters in GRAPH_REPORT.md, and recorded scripts/04_node_analysis.py runs.
created: 2026-08-26
updated: 2026-08-26
source: graphify-out/graph.json + graphify-out/GRAPH_REPORT.md + recorded outputs of scripts/04_node_analysis.py
tags:
  - task-output
  - knowledge-graph
  - node-analysis
  - networkx
  - graph-structure
  - curation
author: []
---

# Further Graph-Level Conclusions From graph.json

> [!NOTE]
> **Task**: Export the second-round structural conclusions drawn after the node-analysis reference work — moving past the per-node fingerprint toward graph-level architecture, bias sources, and curation priorities.
> **Date**: 26_AUG_2026
> **Basis**: Everything below derives from the stored per-node fingerprints in `graphify-out/graph.json`, the aggregate counters in `graphify-out/GRAPH_REPORT.md`, and the recorded `scripts/04_node_analysis.py` runs (16–17 August 2026 task outputs). No fresh execution is claimed; each section carries the exact NetworkX command that would confirm or extend its reading.

---

## Basis of Derivation

- Sources read together:
  - Per-node fingerprint stored on every node (`degree`, `in_degree`, `out_degree`, `pagerank`, `betweenness_centrality`, `clustering_coefficient`, `k_core_number`, `community_size`, `community_name`) — computed by `scripts/03_rebuild_from_triples.py` (`enrich_graph_metrics()`).
  - Aggregate counters in `graphify-out/GRAPH_REPORT.md` (2,624 nodes / 3,768 edges / 398 communities / god nodes / isolated-node list / ambiguous edges).
  - Recorded multi-node analytics results (path multiplicity, Jaccard, Adamic–Adar, effective resistance, PPR) from the sirtuin run of `scripts/04_node_analysis.py`.
- No live queries against graphify were used; graphify's query tools were deliberately bypassed so every conclusion here rests on quantities reproducible with plain NetworkX.

---

## Global Architecture — a Document-Gravity Star, Not an Interactome

- Hand-computed from build counters (2,624 nodes / 3,768 edges):
  - Mean undirected degree = 2 · 3768 / 2624 ≈ **2.87** — far sparser than physical interactomes (~5–15); path metrics are dominated by a handful of corridors.
  - Nodes with degree ≤ 1 = 1,784 / 2,624 = **68.0%** — two-thirds of the graph is pendant decoration off roughly 800 skeleton nodes.
  - Max k-core = **6**, held by ~99 nodes (3.8%) — a very shallow onion; dense mesh exists only in the senescence/sirtuin core.
  - Algebraic connectivity λ₂ = **0.0454** (recorded sirtuin run) — loosely coupled architecture with one dominant weak seam separating the damage/secretory program from housekeeping metabolism.
- Consequences for interpretation:
  - Every global ranking is effectively a ranking of the ~700-node giant-component skeleton.
  - Percentiles should be reported *within* the giant component, never graph-wide — the reference page's 74.2%-periphery figure and the report's 68%-isolated figure are two views of the same star topology.
  - Low λ₂ predicts that deleting cut-straddling bridges ([[Acid ceramidase]], [[NF-κB]]) would fragment the component — check before any aggressive pruning pass.
- Confirmation commands:

```bash
uv run --with networkx python3 - <<'PY'
import json, networkx as nx
data = json.load(open("graphify-out/graph.json"))
G = nx.Graph()
G.add_nodes_from(n["id"] for n in data["nodes"])
G.add_edges_from((l["source"], l["target"]) for l in data["links"])
G.remove_edges_from(nx.selfloop_edges(G))
cc = max(nx.connected_components(G), key=len)
U = G.subgraph(cc).copy()
print("n", G.number_of_nodes(), "e", G.number_of_edges(),
      "mean-k", 2*G.number_of_edges()/G.number_of_nodes())
print("deg<=1", sum(1 for _, d in G.degree() if d <= 1))
print("lambda2", nx.algebraic_connectivity(U))
print("max-core", max(nx.core_number(U).values()), "core size",
      sum(1 for v in nx.core_number(U).values() if v == max(nx.core_number(U).values())))
PY
```

---

## Centrality Concentration Tracks Collection Strategy, Not Biology

- Observed concentration:
  - The ten god nodes (SIRT1 217, SIRT3 183, SIRT6 117, [[SASP]] 101, SIRT2 81, Cancer 74, Adrenochrome 60, [[COMT]] 59, Nicotinamide Riboside 57, [[TFEB]] 54 edges) sum to 1,003 edge endpoints ≈ **13.3% of all edge mass on ten nodes**.
  - Seven of the ten are protagonists of the vault's most-ingested document families (sirtuin series, adrenochrome series, COMT).
- Interpretation:
  - The DENYLIST removed abstract type hubs but not *topical over-collection*.
  - Degree and PageRank here partially measure "how many documents about this entity exist" — valid for comparisons inside one topic family, biased across families.
  - The fix is metric-side, not curation-side: cap per-document edge contribution or weight edges by source diversity.
- Confirmation command (degree-preserving null):

```bash
uv run --with networkx python3 - <<'PY'
import networkx as nx, collections
# rebuild G as above, then
degs = sorted((d for _, d in G.degree()), reverse=True)
nulls = []
for seed in range(100):
    M = nx.configuration_model(degs, seed=seed)
    top10 = sorted((d for _, d in M.degree()), reverse=True)[:10]
    nulls.append(sum(top10))
print("observed", sum(degs[:10]), "null mean", sum(nulls)/len(nulls),
      "z", (sum(degs[:10]) - sum(nulls)/len(nulls)) / ( statistics.pstdev(nulls) or 1))
PY
```

---

## Community Size and Cohesion Are Inversely Related — and That Is Diagnostic

- Reading `community_size` against `community_cohesion` across the 175 reported communities shows a clean monotonic inverse trend:
  - Giant, diffuse — SIRT1 (124 nodes, 0.02), SIRT3 (107, 0.02), SIRT6 (69, 0.03): bibliographic grab-bags around review-document hubs.
  - Mid-size — Senescence (33, 0.09), NF-κB (27, 0.09), Fisetin (26, 0.10): mixed topic buckets.
  - Small, tight — Caspase-8/extrinsic pathway (10, 0.31), DRP1 fission (8, 0.32), Nitric Oxide (7, 0.33), [[Ferroptosis]] (7, 0.29), DNMT1 (5, 0.40): genuine linear mechanisms/cascades.
- Conclusions:
  - Leiden at the current resolution is segmenting by *document*, not by mechanism — each dedicated document spawns its own community (398 communities from 11 files ≈ 36/file).
  - Treat high-cohesion small communities as candidate **mechanism units** deserving module-level notes.
  - Treat giant low-cohesion communities as navigation buckets only.
  - A multi-resolution Leiden sweep (or comparison against the Fiedler 2-cut) should split the SIRT1 mega-community into coherent submodules — divergences flag cross-program integrators.

---

## The Senolytic Effector Arm Is Maximally Fragile — a Testable Choke Point

- Structural facts:
  - [[Acid ceramidase]] anchors community 62 (11 nodes, cohesion 0.20).
  - Yet ACSL4, Ceramide, PUFA, ARN14794, Carmofur all appear in the 1,784-node isolated list (degree ≤ 1).
  - The entire lipid-remodeling → ferroptosis-sensitization story therefore hangs off one hub plus single-edge leaves.
- Prediction to test:
  - Shortest-path multiplicity between Acid ceramidase and Ferroptosis should be ≈ 1–2, with Lipid Peroxidation as the near-universal first-hop bridge.
  - Per the reference page's caveat taxonomy: a genuine rate-limiting choke point whose single causative edge is the precise intervention target — *and* a curation blind spot, because no redundant wiring can exist when the underlying document was extracted once.
- Related expectation:
  - [[GPX4]]'s clique sits at k-core 2 with no direct route into the k-core-6 backbone except through [[Senescent Cells]] — the redox arm is a peripheral satellite of the senescence core.
  - Personalized PageRank seeded at Aging should rank ferroptosis effectors far lower than PPR seeded at Senescent cells does.
- Confirmation command:

```bash
uv run --with networkx --with scipy python3 scripts/04_node_analysis.py \
    --sources acid_ceramidase --targets ferroptosis
```

---

## Entity-Resolution Debt Measurably Distorts the Fingerprint

- Documented variant splinters:
  - `NF-κB` vs `NF-kappaB` — the `deacetylates` edge lives on the *variant* node.
  - `MnSOD` / `SOD2` / `SOD2 (Superoxide Dismutase 2)`.
  - Three GDH nodes; three H3K9-family nodes; `PGC-1α` vs `PGC-1alpha`.
  - Note-level twins visible in the manifest: `Aminoguanidine` vs `Aminoguanidine HCL`, two ALS nodes, `CDK4 6` vs `CDK4`/`CDK6`.
- Consequences:
  - Canonical-node PageRank and degree are systematically *understated*; endorsement leaks to variants.
  - After an alias merge, NF-κB's PageRank lead over SIRT1 (0.00441 vs 0.00351) should widen, and master-regulator counts will shift.
  - Current rankings therefore function as a conservative floor — rebuild-and-diff is the verification step.

---

## Direction Semantics Corrupt Asymmetry Readings for a Subset of Edges

- The problem:
  - Subject-oriented labels exist alongside biological direction: `SIRT1 --inhibited_by--> NF-κB` encodes the miR-34a feedback loop; `SIRT4 --inhibited_by--> GDH` although biologically SIRT4 inhibits GDH.
- Consequences:
  - In/out-degree asymmetry — the spreader-vs-sink signal — is unreliable wherever reciprocal feedback edges exist.
  - Any role classifier must normalize `inhibited_by`/`activates` reciprocal pairs before computing asymmetry, or master-regulator detection inherits sign errors.
  - The ambiguous `Adrenochrome → NF-κB [inhibits]` edge adds further noise to exactly the graph's most important attractor.

---

## Ambiguity Clusters Where Documents Make Therapeutic Claims

- The 27 flagged AMBIGUOUS edges are not randomly distributed — they concentrate in five claim-dense zones:
  - Benzimidazole repositioning (fenbendazole/mebendazole → three cancer types).
  - COMT pharmacogenetics.
  - The senescence–cancer boundary (Cancer ⇄ Paracrine Senescence, Fisetin → SASP).
  - Mitophagy cross-talk (PINK1 → DRP1).
  - NAD+ immunometabolism (NMN → COVID-19, CD38 antibodies).
- Conclusions:
  - Low confidence correlates with *repositioning/therapeutic assertions*, not extraction noise.
  - Because edge `weight` attaches after centrality, the stored fingerprint ignores this structure entirely — current rankings are an upper bound on robustness.
  - Confidence-weighted recomputation (`weight="weight"` for PageRank; inverted distance for betweenness) would move rankings *most* in precisely these five zones.

---

## Provenance Staleness Is Quantified and Non-Trivial

- The number:
  - 793 of 4,004 triples (**19.8%**) have `updated` older than their source note's mtime.
- Consequences:
  - Nearly one in five edges may not reflect the latest note edits.
  - Any confidence-decay/recency weighting built now would encode staleness rather than evidence — a refresh pass must precede the weighting proposal on the reference page's next-steps list.
  - Positive counterpoint: zh-TW context coverage is complete (0 missing), so multilingual fallback is not a live risk.

---

## Cross-Document Integration Is the Scarcest Resource

- Evidence:
  - All five "surprising connections" trace to a single document (*Mitohormesis - 2014_FEB*).
  - The community map shows edges largely staying within their source document's topic.
- Conclusions:
  - The graph currently mirrors document boundaries more than integrated biology; the highest-leverage curation is inter-document bridging edges.
  - Structurally nominated candidates already exist: nodes sitting on the Fiedler cut, or whose neighbours live mostly in other Leiden communities — [[NF-κB]], [[p53]], FOXO, MnSOD, Cellular Senescence (the recorded universal bridges).
  - New cross-family triples at these nodes would most reduce effective resistance between the sirtuin, senescence, and ferroptosis programs.

---

## Summary Judgment

- The current graph is best read as a **sparse, document-shaped star with a genuinely dense 99-node core**:
  - Trustworthy for role-fingerprinting inside the core and its immediate satellites.
  - Increasingly annotation-biased outward.
  - Structurally honest about its own gaps — the isolated-list membership of ACSL4/Ceramide/PUFA, the variant-node splits, and the ambiguity clusters are the graph correctly reporting where its next curation pass should go.
- Priority order implied by these findings:
  - Refresh stale triples (19.8%) before any confidence weighting.
  - Merge entity-resolution variants, then rebuild and diff fingerprints.
  - Fill bridge triples at Fiedler-cut / inter-community nodes.
  - Recompute centralities with confidence as weight/distance once the above lands.

---

## Reproducibility

- Reference task outputs feeding this analysis:
  - `src/tasks/task_output_node_analysis_biology_16_AUG_2026.md` — fingerprint methodology and worked examples.
  - `src/tasks/task_output_node_analysis_sirtuins_in_aging_process_17_AUGUST_2026.md` — recorded multi-node analytics (PPR, Jaccard, Adamic–Adar, effective resistance, λ₂).
- Graph metadata: `graphify-out/GRAPH_REPORT.md` (god nodes, communities, isolated list, ambiguous edges).
- Multi-node script: `scripts/04_node_analysis.py`; rebuild pipeline: `scripts/03_rebuild_from_triples.py`.
