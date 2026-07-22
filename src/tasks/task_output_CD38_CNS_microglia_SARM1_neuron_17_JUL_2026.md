---
title: Microglia-CD38 vs Neuronal-SARM1 — CNS NAD+ Competition Map
description: Trace of the central nervous system compartmentalization of NAD+ consumption, mapping CD38 activity in microglia (neuroinflammation, chronic) against SARM1 activity in neurons/axons (acute degeneration). Extracted from the graphify knowledge graph (4714 nodes, 8624 edges, 363 communities). Bridges the CD38-SARM1 competition and synergy traces into brain-specific biology.
created: 2026-07-17
updated: 2026-07-17
tags:
  - task-output
  - cd38
  - sarm1
  - microglia
  - neuron
  - nad+
  - neuroinflammation
  - traumatic-brain-injury
  - neurodegeneration
  - knowledge-graph
source: graphify graph query (path/bfs traversal) + notes__link_cd38 (microglia edge) + task_output_SARM1_NADplus_trace_17_JUL_2026.md + task_output_CD38_SARM1_synergy_17_JUL_2026.md
---

# Microglia-CD38 vs Neuronal-SARM1 — CNS NAD+ Competition Map

> Extracted from the wiki knowledge graph via BFS/DFS traversal and node explanation.
> Date: 17_JUL_2026
> Builds on: `task_output_CD38_SARM1_NADplus_competition_17_JUL_2026.md`, `task_output_CD38_SARM1_synergy_17_JUL_2026.md`

## Graph Position — Verified Live

| Anchor node | Connections (verified) | CNS relevance |
|---|---|---|
| `notes__link_cd38` | **`notes__link_microglia`** ✅ direct edge, `notes__link_inflammaging`, `notes__link_tumor_microenvironment` | CD38 acts in brain-resident immune cells |
| `notes_adrenochrome_sarm1` | `notes_adrenochrome_nad+`, `notes_adrenochrome_glycolysis` | SARM1 NADase in neurons/axons |
| `notes__link_traumatic_brain_injury_tbi` | `notes__link_traumatic_brain_injury`, `notes__link_tunneling_nanotubes` | Acute CNS injury → axonal NAD+ depletion |
| `notes__link_microglia` | degree 2 (stub) | Sparse — extraction gap |
| `notes__link_neuron` | degree 2 (stub) | Sparse — extraction gap |

> **Graph state note:** The CD38→microglia edge is present and confirms CD38's CNS immune locus. The neuron/SARM1/TBI side is under-extracted (stub nodes), so the CNS map below combines the confirmed `notes__link_cd38 → microglia` anchor with mechanistic content from the SARM1 task docs and adrenochrome neuromelanin corpus.

## The CNS Two-Cell NAD+ Competition

```
┌──────────────────────── BRAIN PARENCHYMA ────────────────────────┐
│                                                                   │
│   MICROGLIA (immune, chronic)          NEURON / AXON (acute)      │
│   ┌─────────────────────┐              ┌─────────────────────┐   │
│   │ CD38 (ecto-NADase)  │              │ SARM1 (intra-NADase)│   │
│   │  activated by:      │              │  activated by:      │   │
│   │  • inflammaging     │              │  • axonal injury   │   │
│   │  • neuroinflammation│              │  • NMNAT2 loss     │   │
│   │  • aging            │              │  • NMN/NAD+ ratio ↑│   │
│   └─────────┬───────────┘              └─────────┬───────────┘   │
│             │ consumes extracellular NAD+/NMN    │ consumes axonal│
│             │ → neuroinflammation amplifies       │ NAD+ → Waller │
│             │ → limits precursor to neurons      │ degeneration  │
│             └──────────────┬─────────────────────┘               │
│                            ▼                                      │
│                  SHARED BRAIN NAD+ POOL                          │
│                            │                                     │
│                            ▼                                     │
│              Sirtuin / redox defense impaired                   │
│              (converges with adrenochrome trace)                │
└───────────────────────────────────────────────────────────────────┘
```

## Cellular Loci (from graph + literature)

| Property | Microglial CD38 | Neuronal SARM1 |
|---|---|---|
| **Cell type** | Microglia (brain-resident macrophage) | Neuron (soma, axon, mitochondria) |
| **Graph anchor** | `notes__link_cd38 → notes__link_microglia` ✅ | `notes_adrenochrome_sarm1 → notes_adrenochrome_nad+` |
| **Timescale** | Chronic (aging, neuroinflammation) | Acute (injury, minutes) |
| **Trigger** | Inflammaging, immune activation | Axonal severance, NMNAT2 depletion |
| **Output** | Neuroinflammation, precursor drain | Axonal NAD+ catastrophe, Wallerian degeneration |
| **Disease links** | Neuroinflammation, aging brain | TBI, neuropathy, glaucoma, ALS, AD, PD |

## The Cross-Talk Hypothesis

The graph confirms CD38 lives in microglia while SARM1 lives in neurons — but they share the **brain NAD+ pool**. Two cross-talk routes are graph-plausible:

### Route 1 — Precursor Competition (extracellular → intracellular)
```
Microglial CD38 degrades extracellular NMN/NAD+
        │
        ▼
Less NAD+ precursor reaches neurons
        │
        ▼
Neuronal NAD+ pool lower → SARM1 closer to activation threshold
        │
        ▼
Injury → SARM1 tips ON more easily (lower NAD+ buffer)
```
**Paradox:** Microglial CD38 *lowers* neuronal NAD+ buffer, potentially **sensitizing** neurons to SARM1-dependent degeneration during subsequent injury.

### Route 2 — Inflammation → Injury Cascades
```
Neuroinflammation (microglial CD38 ON)
        │
        ▼
Cytokine storm / oxidative stress
        │
        ▼
Axonal vulnerability ↑
        │
        ▼
TBI / ischemia → SARM1 activation in already-stressed axons
```
The `notes__link_traumatic_brain_injury_tbi` node (connected to `tunneling_nanotubes`) anchors the acute injury entry point where SARM1 operates.

## Therapeutic Implication — CNS-Specific Synergy

From the synergy trace, the CNS map sharpens the combination logic:

| Arm | Target cell | Agent | CNS effect |
|---|---|---|---|
| A | Microglia | CD38 inhibitor (78c / Quercetin / Apigenin) | Quiets neuroinflammation, preserves brain NAD+ precursors |
| A | Parenchyma | NR (Nicotinamide Riboside) | Raises neuronal NAD+ buffer |
| B | Neuron/axon | SARM1 inhibitor (Disulfiram / DSRM-3716 / GSK-428) | Blocks Wallerian degeneration after TBI/injury |

**CNS-specific caveat:** NR raises neuronal NAD+ (good for sirtuins) but, per the NMN-sensitization paradox, could raise the NMN/NAD+ ratio and sensitize SARM1. In the CNS this risk is acute — so **SARM1 inhibition (Arm B) is especially critical alongside NR in brain contexts** to prevent iatrogenic axonal vulnerability.

## Graph Gaps Identified

| Gap | Status |
|---|---|
| `notes__link_microglia` (stub, deg 2) | Under-extracted — needs richer edges |
| `notes__link_neuron` (stub, deg 2) | Under-extracted |
| SARM1 inhibitors (Disulfiram, DSRM-3716, GSK-428) | **No graph nodes** |
| Cross-talk edge microglia→neuron NAD+ competition | AMBIGUOUS / hypothesized |
| Disease edges (ALS, AD, PD, glaucoma for SARM1) | Present in task docs, sparse in graph |

## Proposed Graph Edges (AMBIGUOUS / to add)

| Source | Relation | Target | Confidence |
|---|---|---|---|
| notes__link_microglia | expresses | notes__link_cd38 | INFERRED (0.80) |
| notes__link_neuron | expresses | notes_adrenochrome_sarm1 | INFERRED (0.85) |
| notes__link_cd38 | competes_with | notes_adrenochrome_sarm1 | AMBIGUOUS (0.40) |
| notes__link_traumatic_brain_injury | activates | notes_adrenochrome_sarm1 | INFERRED (0.70) |

## Suggested Follow-up Traces

- **Fill missing CNS nodes** — add SARM1 inhibitors, enrich microglia/neuron, disease edges.
- **NR dosing in CNS** — does NAD+ precursor cross the BBB and hit the SARM1 activation threshold?
- **Disease-specific maps** — ALS (motor neuron SARM1), AD (Aβ/tau → SARM1), PD (dopaminergic axon, see adrenochrome neuromelanin corpus).
