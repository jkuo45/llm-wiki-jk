---
title: SARM1–NAD+ Trace — Graph-Derived Mechanistic Map
description: Comprehensive trace of the SARM1-NAD+ relationship extracted from the graphify knowledge graph. Covers SARM1's NADase activity, NMN/NAD+ ratio sensing, Wallerian degeneration mechanism, signaling through MAPK/JNK/TRAF6, disease connections, and therapeutic intervention (Disulfiram).
created: 2026-07-17
updated: 2026-07-17
tags:
  - task-output
  - sarm1
  - nad+
  - wallerian-degeneration
  - axon-degeneration
  - nmnat2
  - neurodegenration
  - knowledge-graph
source: graphify graph query + notes/adrenochrome/SARM1.md
---

# SARM1–NAD+ Trace

> Extracted from the wiki knowledge graph (4714 nodes, 8624 edges, 363 communities) via BFS/DFS traversal and node explanation.
> Date: 17_JUL_2026

## Graph Position

| Property | Value |
|---|---|
| **Node** | SARM1 |
| **ID** | `adrenochrome_sarm1` |
| **Source** | `adrenochrome/SARM1.md` |
| **Type** | concept (enzyme) |
| **Community** | 101 |
| **Degree** | 20 |

## Direct Connections (from graph)

| Source | Relation | Target | Confidence | Target Community |
|---|---|---|---|---|
| SARM1 | references | **Nad** | EXTRACTED | 101 |
| Nad | conceptually_related_to | SARM1 | INFERRED | 101 |
| SARM1 | references | **Nmn** | EXTRACTED | 101 |
| SARM1 | references | **Nmnat2** | EXTRACTED | 101 |
| SARM1 | references | **Nicotinamide** | EXTRACTED | 101 |
| SARM1 | references | **Glycolysis** | EXTRACTED | 152 |
| SARM1 | references | **MAPK** | EXTRACTED | 101 |
| SARM1 | references | **JNK** | EXTRACTED | 101 |
| SARM1 | references | **TRAF6** | EXTRACTED | 132 |
| SARM1 | references | **Phosphorylation** | EXTRACTED | 101 |
| SARM1 | references | **Disulfiram** | EXTRACTED | 101 |
| SARM1 | references | **ALS** | EXTRACTED | 101 |
| SARM1 | references | **Neuropathy** | EXTRACTED | 101 |
| SARM1 | references | **Glaucoma** | EXTRACTED | 101 |
| SARM1 | references | **Injury** | EXTRACTED | 101 |
| SARM1 | references | **Degeneration** | EXTRACTED | 101 |
| SARM1 | references | **Disease** | EXTRACTED | 13 |
| SARM1 | references | **Rossmann fold** | EXTRACTED | 101 |
| SARM1 | references | **Mononucleotide** | EXTRACTED | 101 |
| SARM1 | references | **Domain** | EXTRACTED | 101 |

## Adjacent NAD+ Metabolism Nodes

| Node | Community | Role |
|---|---|---|
| **NMNAT** | 4/161 | NAD+ synthase — converts NMN → NAD+ |
| **NMN** | 161 | Precursor and SARM1 activator |
| **NAMPT** | 161 | Rate-limiting salvage enzyme (NAM → NMN) |
| **Nicotinamide** | 101 | Product of NAD+ cleavage + allosteric inhibitor |
| **Nicotinamide Riboside** | 161 | NAD+ precursor |
| **PARP** | 161 | Competitor NAD+ consumer |

## Mechanism: The Three-Phase Axonal NAD+ Catastrophe

### Phase 1 — Homeostasis (healthy axon)

```
NMNAT2 (t½ ~30 min, continuously delivered from soma)
    │
    ▼
NMN ──▶ NAD+  (actively maintained at ~400 μM)
            │
            ▼
      SARM1 is ARM-TIR autoinhibited
      (NAD+ binds ARM domain, keeping TIR inactive)
            │
            ▼
      Nicotinamide allosterically suppresses SARM1
```

### Phase 2 — Trigger (axonal injury)

```
Injury severs axon from soma
    │
    ▼
NMNAT2 supply cut off → NMNAT2 proteasomal degradation (t½ ~30 min)
    │
    ▼
NMN accumulation (no longer converted to NAD+)
    │
    ▼
NMN/NAD+ ratio rises  ← PRIMARY METABOLIC TRIGGER
    │
    ▼
NMN binds ARM domain → relieves autoinhibition
```

### Phase 3 — Catastrophe (NAD+ depletion → Wallerian degeneration)

```
Activated SARM1 octamerizes via SAM domains
    │
    ▼
TIR domains dimerize → form composite NADase active site
    │
    ▼
NAD+ consumed at high rate: NAD+ drops ~400 μM → ~0 in minutes
    │
    ├──▶ Glycolysis halts (GAPDH requires NAD+)
    ├──▶ ATP production ceases
    ├──▶ Membrane potential lost
    ├──▶ Ca²⁺ influx
    └──▶ Axonal fragmentation (Wallerian degeneration, 30-60 min)
```

### Enzymatic Products

SARM1 cleaves NAD+ to produce:

| Product | Function |
|---|---|
| **Nicotinamide** | Also acts as feedback allosteric inhibitor |
| **ADP-ribose (ADPR)** | Primary cleavage product |
| **cADPR** | Ca²⁺-mobilizing second messenger (minor but present) |

SARM1 also has base-exchange activity, similar to CD38 — exchanging nicotinamide for free bases such as nicotinic acid to produce NAADP.

## Non-NADase Signaling (scaffold function)

SARM1 has a TIR domain-mediated signaling function independent of its NADase activity:

```
SARM1 (scaffold)
    │
    ├──▶ TRAF6 recruitment
    │       │
    │       └──▶ JNK pathway activation
    │
    ├──▶ p38 MAPK activation
    │
    └──▶ TLR3/TLR4 negative regulation
```

This signaling function is captured in the graph via edges to MAPK, JNK, and TRAF6.

## Disease Connections

| Disease | Graph Evidence | Mechanism |
|---|---|---|
| **ALS** | EXTRACTED edge | SARM1 upregulated in spinal motor neurons; KO modestly extends survival in SOD1^G93A mice |
| **Chemotherapy-Induced Peripheral Neuropathy** | Neuropathy edge | Taxanes/platinum agents activate SARM1 via NMNAT2 downregulation; SARM1 KO protects |
| **Glaucoma** | EXTRACTED edge | Retinal ganglion cell degeneration involves SARM1 |
| **Traumatic Brain Injury** | Injury edge | Diffuse axonal injury activates SARM1; inhibition reduces pathology |
| **Alzheimer's Disease** | Community 28 (via NMNAT) | Aβ and tau trigger SARM1-dependent NAD+ depletion in cultured neurons |
| **Parkinson's Disease** | Community 69 (via NMNAT) | Potential role in dopaminergic axon degeneration |
| **Ischemic Stroke** | Injury edge | SARM1 contributes to secondary axonal injury |

## Therapeutic Interventions

| Intervention | Type | Mechanism |
|---|---|---|
| **Disulfiram** | FDA-approved repurposed | Covalent modification of TIR domain cysteine (irreversible) |
| **DSRM-3716** | Next-generation small molecule | Non-covalent, occupies NAD+-binding pocket |
| **GSK-428** | Quinazoline scaffold inhibitor | Orthosteric, high potency (nM IC₅₀) |

## Graph Health Assessment

- **Degree:** 20 direct connections (most connected NAD+ consumer in graph)
- **Community isolation:** Primarily within community 101 (adrenochrome cluster)
- **Cross-community edges:** TRAF6 (132), Glycolysis (152), Disease (13)
- **Confidence distribution:** 19 EXTRACTED, 1 INFERRED
- **Graph gaps:** No edges to CD38 (78), cADPR (19), or PARP1 (99) despite shared NAD+ substrate
