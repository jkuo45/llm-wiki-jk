---
title: "Adrenochrome Protocol Network Traces (MB + AG + Stack)"
description: Graph-network extension of the four-node quartet study to the full adrenochrome protocol — methylene blue, aminoguanidine, and the supporting stack (carbazochrome, urolithin A, spermidine, rapamycin, fisetin, creatine, resveratrol) — ranked by personalized PageRank and shortest-path coupling to adrenochrome.
created: 2026-08-20
tags:
  - task-output
  - adrenochrome
  - knowledge-graph
  - methylene-blue
  - aminoguanidine
  - network-analysis
---

# Task Output - Adrenochrome Protocol Network Traces (MB + AG + stack) - 20 August 2026

**Graph build:** `graphify-out/graph.json` — 2,596 nodes / 3,737 edges (giant component 2,110 / 3,295), metrics computed 2026-08-20 18:21:44 (build `867a5ae5fdb8a46c`)
**Tooling:** `scripts/04_node_analysis.py` (RANDOM_SEED=1 convention)
**Purpose:** Extend the 20 Aug four-node quartet study (adrenochrome ↔ mitohormesis/autophagy/sirtuins) to the full **adrenochrome protocol**: methylene blue (MB), aminoguanidine (AG), and the supporting stack (carbazochrome, ascorbic acid, urolithin A, spermidine, rapamycin, fisetin, creatine, resveratrol). Feeds the living web page `web/pages/adrenochrome-protocol-node-network-analysis.html`.

## Run log

| Log | Command |
| --- | --- |
| `run_log_A_sources_mb_ag_targets_adrenochrome.txt` | `uv run --with networkx --with scipy python3 scripts/04_node_analysis.py --sources methylene_blue aminoguanidine --targets adrenochrome` |
| `run_log_B_sources_adrenochrome_targets_mb_ag.txt` | `uv run --with networkx --with scipy python3 scripts/04_node_analysis.py --sources adrenochrome --targets methylene_blue aminoguanidine` |
| `run_log_C_sources_arms_targets_adrenochrome.txt` | `uv run --with networkx --with scipy python3 scripts/04_node_analysis.py --sources mitohormesis autophagy sirtuins --targets adrenochrome` |
| `run_log_D_sources_protocol_stack_targets_adrenochrome.txt` | `uv run --with networkx --with scipy python3 scripts/04_node_analysis.py --sources urolithin_a spermidine rapamycin fisetin creatine resveratrol carbazochrome ascorbic_acid --targets adrenochrome` |

## Headline findings

### The protocol agents are the tightest-coupled exogenous nodes to adrenochrome

Personalized PageRank **seeded at Adrenochrome** (rank of agent):

| Node | PPR rank | Score | Path to adrenochrome |
| --- | --- | --- | --- |
| Aminoguanidine | **#4** | 0.01401 | **direct** `reacts_with(0.9)` |
| Methylene blue | **#8** | 0.00929 | 3 paths via Complex I / Oxidative Stress / Hemolysis |
| Carbazochrome | **#14** | 0.00716 | **direct** `is_an_intermediate_for(0.95)` |
| Ascorbic Acid | **#15** | 0.00689 | **direct** `reduces(0.75)` |
| Rapamycin | #59 | 0.00432 | 3 paths via NF-κB / OXPHOS / Ox Stress |
| Mitohormesis | #89 | 0.00195 | 1 path via Reactive Oxygen Species |
| Urolithin A | #90 | 0.00187 | 3 paths via NF-κB / Ox Stress / ROS |
| Autophagy | #93 | 0.00174 | 1 path via Neuromelanin |
| Creatine | #95 | 0.00164 | 1 path via ROS |
| Fisetin | #147 | 0.00072 | 7 paths via Senescence/COMT/Flavonoids/SASP/Senomorphic |
| Spermidine | #174 | 0.00061 | 1 path via Oxidative Stress |
| Resveratrol | #181 | 0.00057 | 8 paths via COMT/SAMD/SASP/SIRT1/SIRT3 |
| Sirtuins | #305 | 0.00029 | 1 path via SASP/NF-κB |

Reverse direction: seeded at **Aminoguanidine**, Adrenochrome ranks **#3** (0.02318); seeded at **Methylene blue**, **#7** (0.01090). Both directions top-10 — tighter than any adaptive program (#89/#93/#305 forward; #60/#58/#147 reverse).

### Three direct chemical edges into the trigger (multiplicity 1, no bridge)

- `Aminoguanidine --[reacts_with|0.9]--> Adrenochrome` (source: `_document_ - US4501923A - Process for preparing adrenochrome.md`)
- `Carbazochrome --[is_an_intermediate_for|0.95]--> Adrenochrome` (same patent document; stored direction Adr → Carbazochrome, undirected print reverses)
- `Ascorbic Acid --[reduces|0.75]--> Adrenochrome`; additionally `Ascorbic Acid --[inhibits|0.9]--> Adrenochrome formation`

### MB couples through shared redox/injury bridges, not chemistry

Three co-shortest paths, first-hop bridges **Complex I**, **Oxidative Stress**, **Hemolysis**. Direction-audited wiring: `Complex I --[reduces|0.9]--> Adrenochrome`; `Methylene blue --[bypasses|0.9]--> Complex I/III`, `--[accepts_electrons_from|0.96]--> NADH`, `--[shunts_electrons_to|0.95]--> Cytochrome c`, `--[induces|0.88]--> Oxidative Stress`, `--[causes|0.94]--> Hemolysis` (and `Adrenochrome --[induces|0.75]--> Hemolysis`). MB also carries `--[follows|0.95]--> Hormetic Window`.

### Spectral seam splits chemistry-layer from program-layer

Fiedler coordinates (λ₂ = 0.0463): **trigger side (−)**: Creatine −0.0024, Ascorbic Acid −0.0023, Adrenochrome −0.0015, Fisetin −0.0010, Carbazochrome −0.0008, Resveratrol −0.0006. **Adaptive side (+)**: Methylene blue +0.0013, Aminoguanidine +0.0021, Autophagy +0.0033, Urolithin A +0.0033, Mitohormesis +0.0034, Rapamycin +0.0036, Spermidine +0.0037, Sirtuins +0.0043. Reading: adrenochrome's redox partners (ascorbate, Complex-I reduction, carbazochrome) group with the trigger; the protocol's systemic modulators (MB, AG) sit with the adaptive programs and reach across the seam.

### Other notables

- Effective resistance vs Adrenochrome (null 1.164 ± 0.595): Rapamycin 0.130 (z −1.74) closest; MB 0.164 (z −1.68); AG 0.186 (z −1.64); Carbazochrome 0.747 (z −0.70) farthest despite the direct edge — pendant chemistry node.
- Adamic–Adar: MB → Adr **2.641** (highest in any trace so far; shared Complex I/Ox Stress/Hemolysis neighbourhood proposes an MB–Adr edge), Rapamycin 1.999, Ascorbic 0.910, UA 0.885, AG 0.558; Fisetin/Resveratrol/Carbazochrome 0.000.
- Jaccard(Carbazochrome, Ascorbic Acid) = **0.143** — highest pairwise in the study — sharing only `Adrenochrome`.
- Carbazochrome sits in community #98, literally named **"Adrenochrome monoaminoguanidine"** (size 6); Spermidine sits inside the Autophagy community (#34).
- Adaptive-arm refresh (log C) reproduces the 20 Aug quartet baseline exactly (multiplicity 1 per arm; bridges ROS / Neuromelanin / SASP; PPR #89/#93/#305; Fiedler +0.0034/+0.0033/+0.0043). Note: `Mitohormesis --requires--> ROS` confidence now reads 0.9 (earlier log printed 0.92).
- Standing direction trap reconfirmed: script prints `NF-κB --[inhibits|0.6]--> Adrenochrome`; stored triple is `Adrenochrome --[inhibits|0.6]--> NF-κB` (AMBIGUOUS, senomorphic hypothesis).

## Queued next traces

1. Confidence-weighted PPR re-rank of the full ladder (Phase 3 method).
2. MB ⇄ carbazochrome Complex-I competition subgraph trace (MRR amplifier conflict flagged in `_document_ - combo therapy`).
3. Hormetic Window / SIRT3-SIRT4 ratio ego-graph trace (`SIRT3/SIRT4 ratio --determines(0.95)--> Hormetic Window`).
4. Post-entity-resolution re-run (NF-κB dedup) — expect Arm C and Resveratrol/Fisetin multi-path counts to change most.

> [!TIP]
> **Queue executed 21 August 2026**
> All queued traces ran as round 2 in `src/tasks/node_network_adrenochrome_traces2_21_AUG_2026/` (runs E–I; NR/NMN fuel folded in via run E). Headline surprises: the NF-κB merge is a **quantified null** for path topology (item 4's expectation falsified — H3 survives entity resolution), the MB ⇄ carbazochrome Complex-I conflict is **graph-silent** (carbazochrome carries no ETC wiring), the SIRT3/SIRT4-ratio biomarker chain is a **two-edge stub** disconnected from its own constituents, and NMN is a degree-1 node **outside the giant component**. See `task_output_adrenochrome_protocol_traces_round2_21_AUG_2026.md` and the living page §09 log.
