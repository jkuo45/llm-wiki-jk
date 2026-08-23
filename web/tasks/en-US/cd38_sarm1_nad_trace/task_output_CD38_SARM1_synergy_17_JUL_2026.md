---
title: Combined CD38 + SARM1 Inhibition Synergy — Graph-Derived Mechanistic Map
description: Trace of the synergistic potential of combined CD38 and SARM1 inhibition, extracted from the graphify knowledge graph (4714 nodes, 8624 edges, 363 communities). Integrates the chronic NAD+ drain (CD38), acute catastrophic drain (SARM1), and the sirtuin/redox defense (adrenochrome axis) into a single intervention logic. Covers NR repletion, 78c/quercetin/apigenin CD38 inhibitors, Disulfiram/DSRM-3716/GSK-428 SARM1 inhibitors, and the NMN-sensitization paradox.
created: 2026-07-17
updated: 2026-07-17
tags:
  - task-output
  - cd38
  - sarm1
  - nad-plus
  - nicotinamide-riboside
  - sirtuins
  - combination-therapy
  - axonal-degeneration
  - inflammaging
  - knowledge-graph
source: graphify graph query (path/bfs traversal) + task_output_CD38_SARM1_NADplus_competition_17_JUL_2026.md + task_output_CD38_NADplus_parallel_adrenochrome_17_JUL_2026.md + task_output_SARM1_NADplus_trace_17_JUL_2026.md
---

# Combined CD38 + SARM1 Inhibition Synergy Trace

> Extracted from the wiki knowledge graph via BFS/DFS traversal and node explanation.
> Date: 17_JUL_2026
> Builds on: `task_output_CD38_SARM1_NADplus_competition_17_JUL_2026.md`

## Graph Position — Verified Live

The `notes__link_cd38` document node (degree 19) directly connects to the key synergy players, confirming the structural basis:

| CD38 doc node connects to | Role in synergy |
|---|---|
| `notes__link_sarm1` | Direct edge — shared NAD+ competition |
| `notes__link_nr` | Nicotinamide Riboside — NAD+ precursor |
| `notes__link_nad+` | Shared substrate pool |
| `notes__link_sirtuins` / `notes__link_sirt3` | Defense system to protect |
| `notes__link_quercetin` | CD38 inhibitor |
| `notes__link_cz_48` | Pharmacological divergence probe |
| `notes__link_inflammaging` | CD38 upstream driver |
| `notes__link_microglia` | CNS compartment where CD38 acts |

No direct synergy edge exists in the graph (combination therapy is not yet extracted as an edge) — this trace is therefore **INFERRED / AMBIGUOUS** from convergent node logic, consistent with the literature gap noted in prior task docs.

## The Two-Hit NAD+ Vulnerability

From the three companion traces, the NAD+–sirtuin–redox axis suffers three independent drains:

```
ADRENOCHROME  ── oxidative load ──┐
                                  ├──▶ SIRTUIN / REDOX DEFENSE STARVED
CD38          ── chronic NAD+ drain (inflammaging) ─┤        │
                                  │                └─▶ oxidative stress ↑, apoptosis
SARM1         ── acute catastrophic drain (injury) ─┘
```

A single intervention addresses only one hit. **Synergy logic:** combine agents so each drain is blocked simultaneously.

## Intervention Logic — Two Complementary Arms

### Arm A — Chronic NAD+ Restoration (targets CD38 + adrenochrome)

```
Inflammaging ──▶ CD38 (ecto-NADase) ──consumes──▶ NAD+ ↓
        │                                        │
        │  CD38 inhibitor (78c / Quercetin / Apigenin)
        ▼                                        ▼
   CD38 activity ↓ ──▶ NAD+ preserved ──▶ Sirtuins/SIRT3 active
                                                │
                              NR (Nicotinamide Riboside) ──boosts pool──┘
                                                │
                                                ▼
                                  MnSOD activated → counters adrenochrome ROS
```

- **CD38 inhibitors (graph-confirmed):** `notes__link_quercetin` (direct CD38 edge), `notes_sirtuins_cd38_inhibitor_78c` (connects to sirtuins), `notes__link_apigenin` (INFERRED inhibitor).
- **NAD+ precursor:** `notes__link_nr` (Nicotinamide Riboside) — raises the pool CD38 would otherwise consume.
- **Evidence (from CD38 trace):** CD38 KO preserves NAD+; 78c extends lifespan ~14% (male mice); CD38 degrades NMN/NR extracellularly, so inhibition boosts precursor availability.

### Arm B — Acute Axonal Protection (targets SARM1)

```
Injury ──▶ NMNAT2 loss ──▶ NMN/NAD+ ratio ↑ ──▶ SARM1 ON
                                              │ NADase
                                              ▼
                                   Axonal NAD+ → 0 → Wallerian degeneration
        │
        │  SARM1 inhibitor (Disulfiram / DSRM-3716 / GSK-428)
        ▼
   SARM1 OFF ──▶ NAD+ preserved in axon ──▶ degeneration blocked
```

- **SARM1 inhibitors (from SARM1 trace):** Disulfiram (covalent TIR cysteine), DSRM-3716 (non-covalent pocket), GSK-428 (quinazoline, nM IC₅₀).
- **Evidence:** SARM1 KO protects against chemotherapy neuropathy, TBI, glaucoma; inhibitors block NAD+ catastrophe in minutes.

## The Synergy Thesis

```
Arm A (CD38 inhib + NR)  ──► restores CHRONIC NAD+ pool for sirtuins
Arm B (SARM1 inhib)      ──► prevents ACUTE NAD+ collapse in axons
                                    │
                                    ▼
              COMBINED = whole-body NAD+ resilience across timescales
                                    │
                                    ▼
              Sirtuin/redox defense stays online under BOTH
              inflammaging (chronic) AND injury (acute)
```

**Why synergy, not additivity:** CD38 inhibition operates on the slow aging/inflammaging timescale (hours–years); SARM1 inhibition operates on the acute injury timescale (minutes). They protect *different compartments and timescales* of the same NAD+ pool, so combined coverage is broader than either alone. Literature precedent: combined CD38+PARP inhibition fully reversed LPS-induced NAD+ decline (Covarrubias 2020) — supporting the principle that multi-consumer inhibition outperforms single-target.

## The NMN-Sensitization Paradox (critical caveat)

From the competition trace, high CD38 activity degrades extracellular NMN, which may **protect** against SARM1 activation (keeps intracellular NMN low). Therefore:

```
CD38 inhibition ──▶ NMN preserved ──▶ intracellular NMN ↑
                                         │
                                         ▼
                              SARM1 sensitization risk (NMN/NAD+ ratio ↑)
```

**Implication:** CD38 monotherapy to raise NAD+ for longevity could inadvertently sensitize neurons to SARM1-dependent Wallerian degeneration. This is precisely why **combined CD38 + SARM1 inhibition** is graph-logically superior to CD38 alone — Arm B neutralizes the sensitization risk that Arm A creates.

## Proposed Graph Edges (AMBIGUOUS / to add)

| Source | Relation | Target | Confidence | Justification |
|---|---|---|---|---|
| CD38 inhibitor | synergizes_with | SARM1 inhibitor | AMBIGUOUS (0.45) | Complementary timescale/compartment coverage of shared NAD+ pool |
| NR + CD38 inhibitor | increases_risk_of | SARM1 activation | AMBIGUOUS (0.40) | NMN preservation hypothesis, untested |
| Combined CD38+SARM1 inhib | protects | NAD+ pool | INFERRED (0.60) | Extrapolated from CD38+PARP synergy precedent |

## Graph Health Assessment

- **Direct CD38↔SARM1 edge:** ✅ present (`notes__link_cd38 → notes__link_sarm1`)
- **Inhibitor nodes present:** Quercetin (deg 10), 78c (deg 1→sirtuins), Apigenin (deg 10), CZ-48 (connected to CD38)
- **Missing from graph:** Disulfiram, DSRM-3716, GSK-428 (SARM1 inhibitors) have NO graph node — gap in extraction
- **Synergy edge:** Absent (correctly, as it is hypothesized)
- **Confidence:** This trace is INFERRED from convergent node logic + literature; no extracted synergy edge exists

## Suggested Follow-up Traces

- **Microglia-CD38 vs neuronal-SARM1 CNS map** — where the two inhibitors act in brain.
- **NR + CD38 inhibitor dosing interaction** — does NMN preservation cross the SARM1 activation threshold?
- **CD38+PARP vs CD38+SARM1** — which dual-inhibition pairing shows strongest NAD+ rescue.
