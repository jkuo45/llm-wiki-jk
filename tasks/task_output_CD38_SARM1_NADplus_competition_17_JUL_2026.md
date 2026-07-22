---
title: CD38 ↔ SARM1 NAD+ Competition — Graph-Derived Mechanistic Map
description: Trace of the CD38-SARM1 NAD+ competition axis, extracted from the graphify knowledge graph (4714 nodes, 8624 edges, 363 communities). Updates the prior gap note — the current graph now resolves a direct CD38↔SARM1 edge plus shared NAD+ and cADPR neighbors. Covers the NMN bridging metabolite, compartmentalized competition for the NAD+ pool, CZ-48 pharmacological divergence, and the sirtuin/redox defense convergence with the adrenochrome trace.
created: 2026-07-17
updated: 2026-07-17
tags:
  - task-output
  - cd38
  - sarm1
  - nad+
  - nmn
  - cadr
  - nicotinamide-riboside
  - sirtuins
  - axonal-degeneration
  - knowledge-graph
source: graphify graph query (path/bfs traversal) + task_output_CD38_SARM1_bridging_gaps_17_JUL_2026.md + task_output_SARM1_NADplus_trace_17_JUL_2026.md + task_output_CD38_NADplus_parallel_adrenochrome_17_JUL_2026.md
---

# CD38 ↔ SARM1 NAD+ Competition Trace

> Extracted from the wiki knowledge graph via BFS/DFS traversal and node explanation.
> Date: 17_JUL_2026
> Supersedes gap flag in `task_output_CD38_SARM1_bridging_gaps_17_JUL_2026.md` (now resolved in graph).

## Graph Position — Verified Live

| Property | CD38 | SARM1 |
|---|---|---|
| **Canonical ID** | `link_cd38` | `link_sarm1` |
| **Degree** | 15 | 8 |
| **Direct edge** | ✅ `link_cd38 → link_sarm1` present | |
| **Shared neighbors** | `link_nad`, `link_cadpr` | |

> **Correction to prior gap note:** The earlier `bridging_gaps` document reported "no direct CD38↔SARM1 edge." The current graph build resolves this — a direct edge now exists, and both nodes converge on `[[NAD+]]` (shared substrate) and `[[cADPR]]` (shared product). The mechanistic overlap described there remains valid; the structural gap is closed.

## The Competition Axis

Both CD38 and SARM1 are **NAD+ glycohydrolases** that cleave the same substrate into the same products (NAM + ADPR + cADPR). They compete for the shared NAD+ pool, but operate on different timescales and compartments:

```
                      SHARED NAD+ POOL
                            │
          ┌─────────────────┴─────────────────┐
          ▼                                   ▼
   CD38 (ecto-enzyme)                    SARM1 (intracellular)
   Community 78                          Community 101
   Chronic (hours–years)                 Acute (minutes)
   Immune cells, WAT, liver, brain       Neurons (axon, mitochondria)
          │                                   │
          ▼                                   ▼
   NAD+ → NAM + ADPR + cADPR           NAD+ → NAM + ADPR + cADPR
   (drains precursor availability)      (catastrophic axonal depletion)
          │                                   │
          └──────────>  Sirtuin / redox defense starved  <─┘
                              (converges with adrenochrome trace)
```

## The NMN Bridge (key metabolic link)

`[[NMN]]` is the critical bridging metabolite between the two consumers:

```
Extracellular NMN ──▶ CD38 (ecto-NMNase)
                         │ degrades → NAM + ribose
                         ▼
                    Less NMN available for cellular uptake
                         │
                         ▼
                    Lower intracellular NMN
                         │
                         ▼
                    SARM1 LESS activated (NMN/NAD+ ratio stays low)

Intracellular NMN ──▶ SARM1 activator
                         │ rising NMN/NAD+ ratio
                         ▼
                    SARM1 ON → NAD+ catastrophe (Wallerian degeneration)
```

**Paradox from the graph:** High CD38 activity *degrades extracellular NMN*, which may **protect** against SARM1 activation by keeping intracellular NMN low. Conversely, **CD38 inhibition** (78c, quercetin, apigenin) preserves NMN — potentially **sensitizing** neurons to SARM1-dependent degeneration. This interaction is hypothesized (AMBIGUOUS) and untested in the literature.

## CZ-48 Pharmacological Divergence

`[[CZ-48]]` (sulfo-ara-F-NMN) is the cleanest demonstration of the two enzymes diverging:

| Compound | Effect on CD38 | Effect on SARM1 |
|---|---|---|
| **CZ-48** | **Inhibits** | **Activates** |

This confirms they are pharmacologically separable NADases despite shared substrate/product chemistry.

## Convergence with the Adrenochrome / Sirtuin Traces

All three traces share the same pivot nodes — confirming a single, multiply-hit vulnerability axis:

| Pivot node | CD38 trace | SARM1 trace | Adrenochrome trace |
|---|---|---|---|
| `[[NAD+]]` | Consumed (chronic) | Consumed (acute) | Drain target of ROS |
| `[[Nicotinamide Riboside]]` | Precursor (degraded by CD38) | Precursor | Activates SIRTs |
| `[[Sirtuins]]` / `[[SIRT3]]` | Starved by NAD+ decline | Starved by NAD+ decline | Counter oxidative stress |
| `[[Redox Homeostasis]]` | Impaired | Impaired | Balance point |

**Synthesis:** Adrenochrome, CD38, and SARM1 are three independent drains/failures on the NAD+–sirtuin–redox axis. Adrenochrome imposes an oxidative load; CD38 imposes a chronic NAD+ drain (aging/inflammaging); SARM1 imposes an acute catastrophic drain (injury). All three disable the same sirtuin defense.

## NAD+ Consumer Hierarchy (shared pool)

From the graph and literature:

```
NAD+ ──▶ CD38   (primary age-related consumer, low Km)
NAD+ ──▶ PARP1  (DNA repair, community 99)
NAD+ ──▶ SARM1  (catastrophic axonal, community 101)
NAD+ ──▶ Sirtuins (signaling/deacetylation, community 78)
NAD+ ──▶ CD73   (adenosine production, community 78)
```

Combined CD38+PARP inhibition fully reverses LPS-induced NAD+ decline (Covarrubias 2020) — suggests combination inhibition is graph-logically sound.

## Therapeutic Implication (graph-derived)

- **NR + CD38 inhibitor** (from adrenochrome/CD38 parallel trace): restores chronic NAD+ for sirtuins.
- **SARM1 inhibitor** (Disulfiram / DSRM-3716 / GSK-428): blocks acute axonal collapse.
- **Unresolved risk:** CD38 inhibition may raise NMN enough to sensitize SARM1 — warrants co-inhibition rather than CD38 monotherapy in neuro-relevant contexts.

## Graph Health Assessment

- **CD38 degree:** 15 (canonical) / 19 (document node)
- **SARM1 degree:** 8 (canonical) / 20 (document node `adrenochrome_sarm1`)
- **Direct CD38↔SARM1 edge:** ✅ now present (was flagged as gap)
- **Shared neighbors:** `link_nad`, `link_cadpr`
- **Remaining gaps:** No direct CZ-48 node edge in graph; NMN-bridge and macrophage-coexpression edges still AMBIGUOUS (hypothesized, not extracted)

## Suggested Follow-up Traces

- **Combined CD38 + SARM1 inhibition synergy** — chronic + acute NAD+ protection.
- **NMN/NAD+ ratio sensing across compartments** — how extracellular CD38 tone modulates intracellular SARM1.
- **CD38 in microglia vs SARM1 in neurons** — CNS NAD+ competition map.
