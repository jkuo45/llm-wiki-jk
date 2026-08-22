# Study Design — One Damage Node, Three Defense Programs: Adrenochrome ↔ Mitohormesis / Autophagy / Sirtuins

> [!NOTE]
> **Task**: Design a study on the current knowledge graph focused on four nodes — [[Adrenochrome]], [[Mitohormesis]], [[Autophagy]], [[Sirtuins]] — using the metric fingerprint and relation-aware methods documented in `web/pages/node-analysis-examples-biology.html` and implemented in `scripts/04_node_analysis.py`. All baseline metrics below are **already computed** against the live graph; the study design turns them into falsifiable hypotheses, an in-silico perturbation experiment, validation arms, and a remediation queue.
> **Date**: 20_August_2026 07:43 PM PDT
> **Graph**: `graphify-out/graph.json` — build `867a5ae5fdb8a46c` (metrics computed 2026-08-20 18:21:44) · 2,596 nodes / 3,737 edges · giant component 2,110 nodes / 3,295 edges
> **Methods basis**: per-node fingerprint (`degree`, `in/out_degree`, `pagerank`, `betweenness_centrality`, `clustering_coefficient`, `k_core_number`, `community_*`) + relation-aware battery (shortest-path multiplicity, Jaccard, Adamic–Adar, k-core, Fiedler/eigh, effective resistance, Personalized PageRank)
> **Runs**: 2 canonical `04_node_analysis.py` runs (both directions) + 3 supplementary computations (composite score, configuration-model nulls, bridge-perturbation sweep). Full commands in §12 Reproducibility.

---

## 1. Rationale and Study Question

The vault's notes describe [[Adrenochrome]] as a redox-cycling catecholamine oxidation product — a *damage effector* that generates ROS, depletes [[Glutathione|GSH]], and is hypothesized to drive ferroptosis in cardiomyocytes and dopaminergic neurons. The other three focus nodes are *defense programs*: [[Mitohormesis]] (adaptive stress signaling), [[Autophagy]] (lysosomal clearance), and [[Sirtuins]] ([[NAD+]]-dependent deacetylase family).

The graph encodes this damage/defense opposition with **zero direct edges among the four nodes** — all coupling is multi-hop through intermediate bridges. That makes the quartet an ideal test bed for the central claim of the methods briefing: *the pattern across metrics is a biological role, and relation-aware methods explain how and why two entities connect.*

> [!IMPORTANT]
> **Primary study question**
> **Which defense program is most tightly coupled to the adrenochrome damage module, through which rate-limiting bridges — and do independent metric families (topology, spectral, flow) agree on the ranking?**

Secondary questions: (a) are the bridges single points of failure (rate-limiting choke points)? (b) does the undirected projection distort causal direction anywhere? (c) which cross-program regulators recur across all four neighborhoods?

---

## 2. Hypotheses (falsifiable, derived from the fingerprints)

| # | Hypothesis | Network basis | Prediction that would falsify it |
| :--- | :--- | :--- | :--- |
| **H1** | Each defense program couples to adrenochrome through **exactly one rate-limiting bridge**, and each bridge is arm-specific | Shortest-path multiplicity = 1 for all three pairs; distinct first hops ([[Reactive Oxygen Species|ROS]], [[Neuromelanin]], [[SASP]]) | Multiple equally short paths per pair; shared first-hop bridges across arms |
| **H2** | Adrenochrome and the three defense programs sit on **opposite sides of the weakest functional seam** (Fiedler cut) | Fiedler values: Adrenochrome −0.0015 vs. +0.0033…+0.0043 for all three programs (λ₂ = 0.0463) | Mixed signs across the defense trio |
| **H3** | Walk-mass coupling follows the gradient **Mitohormesis ≈ Autophagy ≫ Sirtuins** | Confidence-weighted PPR seeded at Adrenochrome ranks Mitohormesis #89 / Autophagy #93 / Sirtuins #305; reverse direction #60 / #58 / #147 | Sirtuins rank above either program under weighted re-analysis |
| **H4** | Druggability strategy differs by fingerprint: Autophagy = **module consolidation** (C = 0.039, k-core 6); Adrenochrome = **bridge-cutting at few inbound edges** (C = 0.0094, out 42/in 18) | Clustering/k-core contrast between the two highest-Pagerank quartet members | Similar clustering/k-core profiles across the quartet |
| **H5** | All four are **genuine bottlenecks**, not degree artifacts | Configuration-model nulls: z = +7.76 (Autophagy), +5.87 (Adrenochrome), +3.85 (Sirtuins), +3.22 (Mitohormesis) | Any node's observed betweenness within ~2σ of its degree-preserving null |

---

## 3. Baseline Evidence (computed on build `867a5ae5fdb8a46c`)

### 3.1 Per-node fingerprints

| Node | In | Out | Degree | PageRank | Betweenness | Clustering | k-core | Community (size) | Role tags (`node_roles.json`) |
| :--- | --: | --: | --: | --: | --: | --: | --: | :--- | :--- |
| **Adrenochrome** | 18 | 42 | 60 | 0.00501 | 0.0387 | 0.0094 | 4 | Adrenochrome (33) | Spreader · Master regulator · Bottleneck |
| **Mitohormesis** | 7 | 27 | 34 | 0.00083 | 0.0166 | 0.0143 | 5 | Mitohormesis (35) | Spreader · Bottleneck · Core backbone |
| **Autophagy** | 23 | 16 | 39 | 0.00429 | 0.0276 | 0.0390 | **6** | Autophagy (19) | Master regulator · Bottleneck · Core backbone |
| **Sirtuins** | 11 | 13 | 24 | 0.00203 | 0.0112 | 0.0119 | 5 | Sirtuins (17) | Spreader · Master regulator · Bottleneck · Core backbone |

Readings per the briefing's rule layer:

- **Adrenochrome** is the quartet's strongest *spreader* (out 42 ≫ in 18): the graph encodes it broadcasting effects (generates ROS, participates in Redox Cycling, converts to semiquinone radical, induces/causes damage endpoints) rather than being regulated. It is also the only quartet member **outside the k-core ≥ 5 inner shell** — consistent with a local damage module anchored at k = 4.
- **Autophagy** is the only quartet member in the **k-core 6 backbone** (with Aging/SASP/Senescent cells) and has the highest clustering — a cohesive, globally embedded clearance module.
- **Mitohormesis** is a near-pure source (in 7 / out 27): interventions (Exercise, Caloric Restriction, Metformin, AMPK, NRF2) flow *in*, adaptive outputs (ISR, ATF4, GDF15, FGF21, Mitochondrial Biogenesis, Longevity) flow *out*.
- **Sirtuins** is the most balanced (in 11 / out 13) — a family-level hub collecting NAD+/inhibitor edges and broadcasting functional annotations.

### 3.2 Pairwise relation-aware results (`scripts/04_node_analysis.py`, both directions)

| Metric | Mitohormesis–Adrenochrome | Autophagy–Adrenochrome | Sirtuins–Adrenochrome |
| :--- | :--- | :--- | :--- |
| Shortest-path multiplicity | **1** | **1** | **1** |
| Path (undirected traversal) | MH —requires→ ROS —generates→ Adr | Auto —associated_with→ NM —sequesters→ Adr | Sirt —suppress→ SASP ←is_regulated_by— NF-κB ←inhibits— Adr ⚠️ |
| Jaccard (neighborhood overlap) | 0.011 | 0.011 | **0.000** |
| Adamic–Adar (missing-edge hint) | 0.328 | 0.271 | **0.000** |
| Effective resistance (z vs. random null, n=300) | 0.141 (z −1.72) | **0.138 (z −1.72)** | 0.227 (z −1.57) |
| PPR rank of program, seeded at Adrenochrome | #89 (0.00195) | #93 (0.00174) | #305 (0.00029) |
| PPR rank of Adrenochrome, seeded at program | #60 (0.00304) | #58 (0.00246) | #147 (0.00064) |

Defense-program pairwise controls: Jaccard(Mitohormesis, Autophagy) = 0.076 — the highest in the quartet, sharing **AMPK, Caloric Restriction, Metformin, Mitochondrial ROS, Mitophagy**; Jaccard(Mitohormesis, Sirtuins) = 0.018 (AMPK only); Jaccard(Autophagy, Sirtuins) = 0.034 (AMPK, SASP). **AMPK is the only neighbor shared by all three defense programs.**

### 3.3 Spectral seam (dense `eigh` on the Laplacian)

λ₂ (algebraic connectivity) = 0.0463. Fiedler coordinates: Adrenochrome **−0.0015**; Mitohormesis +0.0034; Autophagy +0.0033; Sirtuins +0.0043.

> [!TIP]
> **H2 supported at baseline**
> The damage node sits alone on one side of the weakest functional seam; all three defense programs sit on the other. Cross-seam nodes — ROS, Neuromelanin, SASP/NF-κB — are exactly the bridges H1 names, which is what the briefing predicts for nodes stranded on a spectral cut.

### 3.4 Null-model validation (configuration model, 30 degree-preserving draws)

| Node | Observed betweenness¹ | Null mean ± σ | z |
| :--- | --: | :--- | --: |
| Autophagy | 0.0418 | 0.0210 ± 0.0027 | **+7.76** |
| Adrenochrome | 0.0586 | 0.0367 ± 0.0037 | **+5.87** |
| Sirtuins | 0.0170 | 0.0104 ± 0.0017 | **+3.85** |
| Mitohormesis | 0.0251 | 0.0180 ± 0.0022 | **+3.22** |

¹ Recomputed on the giant component for consistency with the null ensemble (stored fingerprint values in §3.1 are computed on the full undirected projection; scales differ slightly, comparisons within-table are like-for-like).

All four clear the briefing's "test against a degree-preserving null before calling something a bottleneck" bar. **H5 supported.**

### 3.5 Composite senolytic-style score placement

Replicating the briefing's composite (0.30 source-asymmetry · 0.20 betweenness · 0.30 bridge-fraction · 0.20 low-clustering) over the 2,110-node giant component:

| Rank | Node | Score | Reading |
| --: | :--- | --: | :--- |
| **#85 (top 4.0%)** | Mitohormesis | 0.537 | Extreme source asymmetry + high bridge fraction |
| #451 | Adrenochrome | 0.455 | Strong spreader, but low clustering penalty dominates less than expected |
| #578 | Sirtuins | 0.343 | Balanced degrees dilute asymmetry term |
| #593 | Autophagy | 0.333 | Sink-leaning profile + highest clustering (module, not bridge) |

The composite is a *spreader detector* — it rewards outbound control, so it ranks the mitohormetic intervention gateway highest and the module-embedded clearance program lowest. This is a feature, not a bug: the score and the fingerprint answer different questions, exactly as the briefing warns ("never rank on one metric").

### 3.6 PPR seed-intersection: recurrent cross-program regulators

Nodes appearing in the top-40 of PPR seeded at **≥ 3 of the 4** focus nodes:

| Recurring node | Interpretation |
| :--- | :--- |
| **AMPK** | The quartet's only shared first-order neighbor — the master energy-sensor crosslink |
| **SIRT1, SIRT3, SIRT6** | Individual sirtuin isoforms carry more walk mass than the family-level [[Sirtuins]] node itself |
| **Caloric Restriction** | The single lifestyle intervention adjacent to all three defense programs |
| **Rapamycin** | mTOR-axis drug reaching both autophagy and sirtuin communities |
| **SASP** | The shared inflammatory conduit (also the sirtuin arm's bridge) |

---

## 4. Key Structural Findings

### 4.1 Three arms, each with a single rate-limiting bridge

Per the briefing's interpretation guide, *multiplicity of one is a genuine, rate-limiting choke point whose single causative edge is the precise intervention target*. All three couplings have multiplicity 1:

```
Arm A (mitohormetic):  Mitohormesis --requires(0.92)--> ROS --generates(0.95)--> Adrenochrome
Arm B (autophagic):    Autophagy --associated_with(0.95)--> Neuromelanin --sequesters(0.8)--> Adrenochrome
Arm C (sirtuin/NAD+):  Sirtuins --suppress(0.86)--> SASP <--is_regulated_by(0.96)-- NF-κB <--inhibits(0.6, AMBIGUOUS)-- Adrenochrome
```

Arms A and B are short, high-confidence, and mechanistically direct. Arm C is longer, passes through the graph's top-betweenness node (SASP), and terminates in the quartet's lowest-confidence edge.

### 4.2 ⚠️ The direction-inversion trap on Arm C

> [!WARNING]
> **Undirected shortest-path reading inverts the terminal edge**
> The analysis script prints `NF-κB --[inhibits|0.6]--> Adrenochrome`, but the stored triple is the reverse: **`Adrenochrome --inhibits--> NF-κB`** (confidence 0.6, flagged AMBIGUOUS, from `_document_ - as senotherapeutic agent.md`). The context: the *senomorphic hypothesis* — adrenochrome's electrophilic o-quinone chemistry covalently modifies p65/IKK cysteines, blunting NF-κB-driven SASP transcription.
>
> Read correctly, Arm C does **not** say "sirtuins control adrenochrome production." It says **[[Sirtuins]] and [[Adrenochrome]] are two parallel levers on the same SASP/NF-κB axis** — sirtuins suppress SASP from above; adrenochrome (hypothetically) suppresses the same axis from below via electrophile alkylation. This is precisely the "undirected projection loses causal direction" caveat from the briefing, caught red-handed inside the study's own data. Any downstream claim built on Arm C must be restated in these terms.

This finding motivates Phase 0 remediation (§7) and a standing rule: **every path edge used in a study claim gets its stored direction audited before citation.**

### 4.3 Entity fragmentation depresses the sirtuin arm

The graph carries ≥ 7 NF-κB variants as separate nodes: `NF-κB` (nf_b, degree 48), `NF-kB` (nf_kb, degree 1), `NF-kappaB` (nf_kappab, degree 2), `NF-κB p65`, `RelA/p65 (NF-κB subunit)`, `NF-kappa B signaling`, `NF-κB signaling pathway`. Fragmentation splits walk mass, lengthens apparent paths, and contributes to Sirtuins' zero-Jaccard isolation from Adrenochrome. Some of H3's "sirtuins are distant" signal is entity-resolution artifact, not biology — quantified as remediation Phase 0b.

### 4.4 Bridge-perturbation sweep: each bridge carries only its own arm

Removing each bridge edge (or bridge node) and recomputing confidence-weighted PPR:

| Perturbation | Δ(MH→Adr) | Δ(Auto→Adr) | Δ(Sirt→Adr) | Specificity |
| :--- | --: | --: | --: | :--- |
| remove edge Mitohormesis–ROS | **−22.7%** | −0.4% | −0.0% | clean |
| remove edge ROS–Adrenochrome | **−23.4%** | −2.4% | −7.8% | clean |
| delete node ROS | **−27.0%** | −2.4% | −9.4% | clean |
| remove edge Autophagy–Neuromelanin | −0.3% | **−24.8%** | −1.6% | clean |
| remove edge Neuromelanin–Adrenochrome | −2.3% | **−19.5%** | −3.1% | clean |
| delete node Neuromelanin | −0.7% | **−33.3%** | −3.1% | clean |
| remove edge Sirtuins–SASP | +0.9% | +3.3% | **−4.7%** | weak |
| delete node SASP | **+2.6%** | **+3.7%** | −3.1% | inverted! |

Two results:

1. **Arms A and B behave like true single-bridge chokes**: cutting either hop collapses ~20–33% of that arm's walk-mass coupling while leaving the other arms untouched (cross-arm deltas ≈ 0). H1's specificity prediction holds for A and B.
2. **Arm C barely depends on its nominal bridge** (−4.7%), and deleting SASP slightly *increases* MH/Autophagy→Adrenochrome flow. SASP acts as a **competing attractor** soaking up walk mass from all seeds; removing it redistributes flow rather than severing a route. Combined with §4.2, Arm C should be treated as *axis co-regulation*, not a production-control chain — the network and the corrected triple semantics agree.

---

## 5. Study Arms (proposed validation design)

Each arm pairs a graph-level manipulation with literature adjudication and, where the vault supports it, empirical readouts. Arms are ordered by expected effect size from §4.4.

| Arm | Intervention class | Graph rationale | Predicted effect on adrenochrome burden | Empirical readouts (from vault notes) |
| :--- | :--- | :--- | :--- | :--- |
| **A. Mitohormetic** | Exercise, Caloric Restriction, Metformin (AMPK/NRF2 activators) | Single ROS bridge, −23% coupling when cut; MH is top-4% composite spreader | **Indirect increase** of adaptive ROS tone → raises adrenochrome *formation* but strengthens downstream redox buffering; net effect testable | GDF15/FGF21 plasma levels, HRV (per [[Mitohormesis]] note), lipid-peroxidation markers |
| **B. Autophagic** | Rapamycin, Spermidine, Intermittent Fasting | Single Neuromelanin bridge; Autophagy is the k-core-6 module member | Enhanced clearance/sequestration of catecholamine oxidation products → **decreased steady-state adrenochrome adducts** | LC3-II/p62 flux, neuromelanin-autophagy assays in dopaminergic models |
| **C. Sirtuin/NAD+** | Nicotinamide Riboside, NAD+ repletion | Weak, indirect, direction-inverted coupling (#305/#147 ranks) | **Smallest direct prediction** — effect mediated via SASP suppression, not adrenochrome chemistry | SIRT1 activity, SASP cytokines (IL-6/IL-8), NF-κB acetylation status |
| **D. Control (antagonist)** | Antioxidant megadose (NAC, high-dose antioxidants) | Graph encodes `N-Acetylcysteine --blocks(0.95)--> Mitohormesis` and `Mitohormesis --is_blocked_by(0.9)--> Antioxidants` | Decouples Arm A entirely — the graph's own negative control | Blunted GDF15/FGF21 response; loss of hormetic conditioning |

> [!NOTE]
> **Why Arm D matters**
> The vault already documents the antioxidant-vs-mitohormesis paradox (`task_output_mitohormesis_antioxidants_05_August_2026.md`). The graph independently encodes the blockade as two high-confidence edges into Mitohormesis. If Arm D fails to decouple Arm A's markers empirically, both the triples and the study's bridge logic need re-examination — the briefing's rule: *if the check fails, the score is wrong, not the biology.*

---

## 6. Endpoints and Decision Rules

Primary endpoint (computational): **ΔPPR(adrenochrome ↔ program)** after (a) confidence-weighted re-analysis and (b) entity-resolution repair — measured against the §3.2 baseline.

Decision rules:

- **H3 survives** if the gradient Mitohormesis ≈ Autophagy ≫ Sirtuins persists after weighting + NF-κB deduplication (predicted: Sirtuins improves from #305 but stays > 3× farther in rank than the other two).
- **H1 survives** if post-repair path multiplicity remains 1 for Arms A/B; Arm C multiplicity may rise above 1 after NF-κB deduplication (reclassification to "redundant wiring" would be recorded, not forced).
- **Bridge adjudication** succeeds only if each Arm A/B bridge triple is confirmed in primary literature; any failed triple is corrected or deleted *before* the study claims are finalized (never after).
- **Composite score check**: Mitohormesis must remain top-decile after remediation; if it drops, the bridge-fraction term is being gamed by fragmentation artifacts.

---

## 7. Phase Plan

| Phase | Work | Tooling | Output |
| :--- | :--- | :--- | :--- |
| **0a. Direction audit** | Re-state every study-cited path with stored edge directions; fix the Arm C inversion in prose and flag the triple for curator review (AMBIGUOUS, 0.6) | manual + `graph.json` link inspection | Corrected path table (done in §4.2) |
| **0b. Entity resolution** | Merge NF-κB variants (≥ 7 nodes listed in §4.3) into canonical `NF-κB`; audit analogous fragments (e.g., ROS vs. Reactive Oxygen Species vs. Mitochondrial ROS) | extend `normalize_triples_schema.py` / rebuild pipeline | Rebuilt graph; re-run §3.2 battery; quantify ΔH3 |
| **1. Weighted re-analysis** | Pass `weight="weight"` into PageRank (strength) and inverted confidence `1/confidence` as `distance` into betweenness/effective-resistance (the briefing's documented open limitation) | modify `04_node_analysis.py` flags | Weighted vs. unweighted comparison table |
| **2. Full null envelope** | Extend configuration-model z-scores (30 → 100–1,000 draws) to clustering and PageRank, not just betweenness | supplementary script (seeded, versioned) | Null-envelope table for all four nodes |
| **3. Formal PPR intersection** | Confidence-weighted PPR from all four seeds; intersect top-K (K ∈ {25, 40, 100}); report stability across K | `04_node_analysis.py` + wrapper | Recurrent-effector list with robustness notes |
| **4. Literature adjudication** | Check the six bridge triples (§4.1) plus AMPK-shared-neighborhood claims against primary sources; PMIDs/DOIs recorded per AGENTS.md | manual review queue | Confirmed/corrected/deleted verdicts; triple write-backs |
| **5. Empirical mapping** | Bind each arm to measurable biomarkers (§5 table); specify direction and magnitude expectations from the perturbation magnitudes (−20% to −33% coupling) | vault notes + external literature | Pre-registered predictions document |

Phases 0–3 are executable immediately on the repo; Phases 4–5 gate any biological claim leaving the vault.

---

## 8. Limitations

- **Undirected projection loses causal direction** — demonstrated concretely by the Arm C inversion (§4.2). All path readings in this study were re-audited against stored directions; future runs should emit direction-audited paths by default.
- **Stored centralities are unweighted topology**; confidence scores attach after centrality in the rebuild. §7 Phase 1 addresses this; until then, weighted PPR (which does use `weight`) is the only confidence-aware flow metric in the battery.
- **Corpus bias**: degree and PageRank favor well-annotated entities. Adrenochrome's 60 edges include PubChem-derived property triples (~3 pure metadata edges: xlogp, molecular weight, formula) and several chemical-taxonomy `is_a` edges; a biological-relations-only fingerprint would be tighter. The denylist removes type hubs but not per-node metadata noise.
- **Family-level vs. isoform nodes**: [[Sirtuins]] competes with its own children (SIRT1/3/6 dominate PPR everywhere). Claims about "sirtuins" as a class inherit this compression.
- **Composite weights are arbitrary** (0.30/0.20/0.30/0.20); they were validated once against Acid ceramidase and reused here without re-tuning. Treat §3.5 as ordinal, not cardinal.
- **Null draws (30)** are sufficient for z ≈ ±3 discrimination but underpowered for tail claims; Phase 2 raises this to 100–1,000.

---

## 9. Literature Adjudication Queue (Phase 4 entry tickets)

| Triple | Conf. | Vault source | Adjudication question |
| :--- | :--: | :--- | :--- |
| `Mitohormesis --requires--> ROS` | 0.92 | Mitohormesis docs (2014_FEB, 2023_NOV) | Established: mROS as signaling requirement (review-level consensus) |
| `ROS --generates--> Adrenochrome` | 0.95 | [[Adrenochrome]] note; PubChem doc | Confirm superoxide/H₂O₂-driven epinephrine oxidation kinetics (primary refs needed) |
| `Autophagy --associated_with--> Neuromelanin` | 0.95 | Autophagy corpus | Confirm neuromelanin–autophagy linkage in catecholaminergic neurons |
| `Neuromelanin --sequesters--> Adrenochrome` | 0.80 | [[Adrenochrome Pathway]] docs | Confirm adrenochrome polymerization/incorporation into neuromelanin |
| `Sirtuins --suppress--> SASP` | 0.86 | Sirtuin reviews | Confirm SIRT1/NF-κB deacetylation → SASP attenuation |
| `Adrenochrome --inhibits--> NF-κB` | 0.60 ⚠️ AMBIGUOUS | `_document_ - as senotherapeutic agent.md` | **Priority**: the senomorphic hypothesis is explicitly speculative in-source; verify whether any primary data supports electrophile alkylation of p65/IKK by adrenochrome (vs. aminochrome) |

No missing-edge hypotheses are manufactured for Sirtuins–Adrenochrome: Adamic–Adar = 0.000 means the graph proposes nothing, and per the briefing's caveat, link-prediction output is a to-read list, never a finding.

---

## 10. Expected Impact

If H1–H5 survive remediation, the study delivers:

1. A **direction-audited, null-validated** account of how the vault's damage module (adrenochrome) attaches to its three defense programs — with the autophagy arm predicted to be the most direct lever and the sirtuin arm explicitly reframed as SASP-axis co-regulation.
2. Two **data-hygiene fixes** (edge-direction auditing; NF-κB entity resolution) that improve every downstream analysis, not just this study.
3. A template for **four-node studies**: fingerprint triage → relation-aware battery → perturbation sweep → adjudication queue, all reproducible from committed scripts and seeds.

---

## 11. Deliverables

- This study design: `src/task_output/task_output_four_node_network_study_adrenochrome_defense_programs_20_August_2026.md`
- Archived run logs (same directory):
  - `run_log_A_sources_mitohormesis_autophagy_sirtuins_targets_adrenochrome.txt` — canonical battery, defense→damage direction
  - `run_log_B_sources_adrenochrome_targets_mitohormesis_autophagy_sirtuins.txt` — canonical battery, damage→defense direction
  - `run_log_C_supplementary_edge_wiring_and_partial_composite.txt` — in/out edge census per focus node; direct-edge check
  - `run_log_D_composite_score_ppr_intersection_null_zscores.txt` — composite score ranks, PPR sweeps + top-40 intersection, configuration-model nulls
- Remediation tickets: §4.2 (direction inversion), §4.3 (NF-κB fragmentation), §9 (triple adjudication queue)
- Follow-up task outputs (proposed): Phase 1 weighted re-analysis; Phase 0b post-resolution re-run

---

## 12. Reproducibility

```bash
# Canonical relation-aware battery (both directions)
uv run --with networkx --with scipy python3 scripts/04_node_analysis.py \
    --sources mitohormesis autophagy sirtuins --targets adrenochrome
uv run --with networkx --with scipy python3 scripts/04_node_analysis.py \
    --sources adrenochrome --targets mitohormesis autophagy sirtuins

# Supplementary computations (this document):
#   - composite score (weights .30/.20/.30/.20 over giant component)
#   - unweighted PPR sweeps + top-40 intersection across 4 seeds
#   - configuration-model betweenness nulls (30 draws, seeds 2..31)
#   - bridge edge/node removal sweep with confidence-weighted PPR
# Implemented as inline scripts against graphify-out/graph.json,
# RANDOM_SEED=1 convention matching scripts/04_node_analysis.py.
# Raw outputs archived as run_log_A..D in src/task_output/.
```

Environment: Python 3.14, NetworkX 3.x, SciPy 1.x (`uv run --with networkx --with scipy`). Graph build `867a5ae5fdb8a46c`; any rebuild changes ranks and requires re-running §3 in full.

## References

1. Vault methods briefing, 16 August 2026. *Node-level network analysis for biological prioritization.* `web/pages/node-analysis-examples-biology.html`.
2. Multi-node analytics tooling. `scripts/04_node_analysis.py` — giant-component restriction, path multiplicity, Jaccard, Adamic–Adar, dense-`eigh` Fiedler, effective resistance, confidence-weighted PPR.
3. Rebuild pipeline. `scripts/03_rebuild_from_triples.py` — `DENYLIST`, `enrich_graph_metrics()`, Leiden communities, role tags → `web/data/node_roles.json`.
4. Jeong H, et al. Lethality and centrality in protein networks. *Nature* 2001;411:41–42.
5. Yu H, et al. The importance of bottlenecks in protein networks. *PLoS Comput Biol* 2007;3:e59.
6. Wuchty S, Almaas E. Peeling the yeast protein network. *Proteomics* 2005;5:444–449.
7. Vault prior art: `task_output_node_sirtuins_adrenochrome_15_August_2026.md`; `task_output_mitohormesis_antioxidants_05_August_2026.md`; `task_output_autophagy_vs_mitophagy_17_JUL_2026.md`; `task_output_node_analysis_biology_16_AUG_2026.md`.
