---
title: "Adrenochrome Protocol Network Traces, Round 2"
description: Second round of graph traces executing five queued analyses — NAD+ fuel-line wiring (NR vs NMN vs GlyNAC), confidence-weighted PPR re-rank of the protocol ladder, MB-carbazochrome Complex-I competition subgraph, hormetic-window/SIRT3-SIRT4 ego-graphs, and NF-κB entity-resolution re-run.
created: 2026-08-21
tags:
  - task-output
  - adrenochrome
  - knowledge-graph
  - nad-plus
  - network-analysis
---

# Task Output - Adrenochrome Protocol Network Traces, Round 2 (fuel line, amplifier conflict, biomarker, weighted re-rank, NF-κB dedup) - 21 August 2026

**Graph build:** `graphify-out/graph.json` — 2,596 nodes / 3,737 edges (giant component 2,110 / 3,295), build `867a5ae5fdb8a46c` (unchanged from round 1)
**Tooling:** `scripts/04_node_analysis.py` + `supplementary_traces_F_G_H_I.py` (RANDOM_SEED=1 convention)
**Purpose:** Execute the five queued traces from `task_output_adrenochrome_protocol_traces_20_AUG_2026.md`: (E) fold the NAD⁺ fuel line into the trace set; (F) Phase 3 confidence-weighted PPR re-rank of the full ladder; (G) MB ⇄ carbazochrome Complex-I competition subgraph; (H) Hormetic Window / SIRT3-SIRT4 ratio ego-graphs; (I) post-entity-resolution re-run (NF-κB variant merge). Feeds the living page `web/pages/en-US/adrenochrome-protocol-node-network-analysis.html`.

## Run log

| Log | Command / method |
| --- | --- |
| `run_log_E_sources_fuel_targets_adrenochrome.txt` | `uv run --with networkx --with scipy python3 scripts/04_node_analysis.py --sources nicotinamide_riboside nad n_acetylcysteine methylene_blue carbazochrome --targets adrenochrome` |
| `run_log_F_G_H_I_supplementary.txt` | `uv run --with networkx --with scipy python3 supplementary_traces_F_G_H_I.py` (runs F–I, single seeded script archived in this directory) |

## Headline findings

### E. The fuel line: NR is well-wired to the trigger, NMN is a stub, GlyNAC has no node

- **Nicotinamide Riboside** (degree 57, k-core 5): **8 co-shortest paths** to adrenochrome via bridges SIRT1, SIRT3, TNFα, IL-6, Neuroinflammation, Amyloid Beta, Hematopoietic Stem Cell. PPR @Adr **#86** (0.00197); effective resistance **0.134 (z −1.73)** — the second-closest of any traced protocol agent (rapamycin 0.130 / z −1.74 remains closest; NR edges out MB's 0.164). Fiedler +0.0037 (adaptive side). Jaccard(NR, Adr) = 0.000; Adamic–Adar 0.000 (nothing proposed).
- **Direction-audit caveat:** 7 of NR's 8 shortest paths terminate on the standing inverted print `NF-κB --[inhibits|0.6]--> Adrenochrome`; the stored triple is `Adrenochrome --inhibits--> NF-κB` (0.6, AMBIGUOUS). NR's apparent tightness rides the graph's weakest, most contested edge. Its two NF-κB-independent routes: `NR --reduces(0.9)--> Neuroinflammation --causes(0.95)--> Neuromelanin --sequesters(0.8)--> Adrenochrome` and `NR --reduces(0.9)--> Amyloid Beta --induces(0.95)--> Lipid Peroxidation --promotes(0.7)--> Adrenochrome`.
- **NMN** is a **degree-1 stub outside the giant component**: its only triple is `NMN --[restores|0.9]--> Intestinal Stem Cell`. There is *no* stored wiring connecting NMN to NAD+ biosynthesis, NR, or the trigger. All "NR/NMN" protocol fuel claims are currently carried by the NR node alone.
- **GlyNAC** has no node. Component-level trace: **Glycine** is itself degree-1 (`Creatine --is_synthesized_from(0.85)--> Glycine`, pendant in the creatine community); **N-Acetylcysteine** (degree 2) reaches adrenochrome through exactly one path — `NAC --blocks(0.95)--> Mitohormesis --requires(0.9)--> ROS --generates(0.95)--> Adrenochrome`. **The redox-buffer arm of the protocol reaches the trigger only through an edge that *blocks* the hormetic arm** — PPR #764, Fiedler +0.0039 (adaptive side), k-core 2. A GlyNAC entity still requires a triple write-back before it can be traced as a unit.

### F. Confidence-weighted PPR re-rank (Phase 3): the ladder is weighting-robust

Weighted PPR (`weight = confidence_score`) vs unweighted, seeded at Adrenochrome:

| Node | Unweighted | Weighted | Δ |
| --- | --- | --- | --- |
| Aminoguanidine | #4 | #4 | 0 |
| Methylene blue | #8 | #8 | 0 |
| Ascorbic Acid | #14 | #15 | +1 |
| Carbazochrome | #19* | #14 | −5 |
| Rapamycin | #63 | #59 | −4 |
| Nicotinamide Riboside | #85 | #86 | +1 |
| Mitohormesis | #87 | #89 | +2 |
| Urolithin A | #88 | #90 | +2 |
| Autophagy | #95 | #93 | −2 |
| Creatine | #96 | #95 | −1 |
| Fisetin | #149 | #147 | −2 |
| Spermidine | #176 | #174 | −2 |
| NAD+ | #229 | #224 | −5 |
| Resveratrol | #167 | #181 | +14 |
| Sirtuins | #305 | #305 | 0 |

\* Round-1 unweighted print reported #14 for carbazochrome; the re-run prints #19 unweighted / #14 weighted (parallel-edge handling in the supplementary script collapses duplicated triples). The **weighted** value matches the published ladder.

Readings: the top tier (AG #4, MB #8) is **exactly stable** under confidence weighting — §03's headline ordering is hardened. The chemistry pair swaps internally (ascorbate/carbazochrome #14/#15 ⇄ #15/#14). **Resveratrol moves most (+14)**: its multi-path count depends on lower-confidence SIRT1/SIRT3/SASP routes, which weighting deflates — its apparent proximity was partly low-confidence inflation.

### G. The MB ⇄ carbazochrome Complex-I conflict is graph-silent

- Carbazochrome's complete stored wiring is **two edges**: `Adrenochrome --is_an_intermediate_for(0.95)--> Carbazochrome` and `Carbazochrome --is_a_type_of(0.95)--> Hemostatics`. **No electron-transport-chain edge exists within 3 hops** except through Adrenochrome itself (Carbazochrome → Adrenochrome → Complex I, multiplicity 1).
- **Jaccard(Methylene blue, Carbazochrome) = 0.000** — zero shared neighbours; the two MRR amplifiers share no intermediary at all.
- MB's side of the alleged conflict is fully wired: `bypasses(0.9)` Complex I/III, `upregulates(0.92)` Complex IV, `shunts_electrons_to(0.95)` cytochrome c, plus previously unreported `suppresses(0.9)` glycolysis and `fails_to_protect_against(0.95)` glucose oxidase.
- Verdict: the amplifier-conflict hypothesis flagged in `task_output_research-scientist_combo_therapy_11_JUN_2026.md` is **neither confirmed nor deniable in silico** — the graph contains no carbazochrome→ETC wiring to compete with MB's bypass. This is a corpus gap, not evidence of absence. Adjudication ticket: does carbazochrome redox-cycling draw electrons at Complex I in vivo?

### H. The MRR predictive biomarker is a two-edge stub, disconnected from its own constituents

- `SIRT3/SIRT4 ratio --determines(0.95)--> Hormetic Window` exists — **twice** (exact duplicate triple; dedup ticket).
- Hormetic Window has degree **2**: its only edges are the SIRT3/SIRT4-ratio `determines` edge and `Methylene blue --follows(0.95)--> Hormetic Window`. The r=2 ego-graph (47 nodes) is inflated almost entirely by MB's neighbourhood.
- The `SIRT3/SIRT4 ratio` node (degree 1×2) is **not linked to [[SIRT3]] (degree 163) or [[SIRT4]] (degree 43)** — both richly wired to MnSOD/SOD2 — nor to adrenochrome/carbazochrome signalling. Shortest path SIRT4 → Hormetic Window runs SIRT4 → Caspases → Cytochrome c → Methylene blue → Hormetic Window, i.e., through MB, not through the ratio.
- Verdict: the combo-therapy document's predictive-biomarker claim (`ratio sets the hormetic window governing whether the signal is adaptive or toxic`) is stored as a bare assertion chain of length 1 with no mechanistic substrate in the graph. Entity-resolution ticket: link the ratio node to SIRT3, SIRT4, MnSOD, and the trigger family.

### I. Post-entity-resolution re-run (NF-κB merge): a quantified null result

Merged the six non-canonical variants (`NF-kB`, `NF-kappaB`, `NF-κB p65`, `RelA/p65 (NF-κB subunit)`, `NF-kappa B signaling`, `NF-κB signaling pathway`) into canonical `NF-κB` (nf_b, degree 48) in memory and re-ran the battery:

- **Arm structure unchanged:** all three arms keep multiplicity 1, same bridges (ROS / Neuromelanin / SASP), same hop counts (3/3/4). Jaccard(Sirtuins, Adrenochrome) stays **0.000**.
- **Ladder essentially unmoved:** every protocol agent keeps its rank ±2; Sirtuins #305 → #304; largest shift is NAC #777 → #783.
- **Fisetin (7 paths) and Resveratrol (8 paths) multi-path counts identical pre/post** — same bridge sets.

This **falsifies the round-1 expectation** that NF-κB dedup would change Arm C and the polyphenol multi-path counts most. The six variants are degree-1/2 pendants that carry no shortest-path traffic; fragmentation depresses *cosmetic* degree/PageRank mass, not path topology. Consequences:

1. H3 ("walk-mass coupling follows MH ≈ Auto ≫ Sirt") survives entity resolution — the sirtuin arm's distance is structural, not artifact.
2. Remediation Phase 0b can be de-prioritized for analysis purposes (still worth doing for display metrics).
3. New hygiene finding: the raw link list carries **180 exact duplicate unordered pairs** (e.g., `SIRT3/SIRT4 ratio ↔ Hormetic Window ×2`, `Cancer ↔ Paracrine Senescence ×2`). Deduplication at rebuild time is a cheap win (Phase 0c ticket).

## Queue disposition

All five queued traces are complete. No items remain queued; follow-up tickets opened instead: (a) carbazochrome→ETC literature adjudication, (b) SIRT3/SIRT4-ratio entity linking, (c) duplicate-triple dedup at rebuild, (d) GlyNAC triple write-back, (e) NMN wiring enrichment (currently a stub).
