---
title: CD38–SARM1 Bridging Gaps — Missing Edges, Metabolic Overlap, and Research Opportunities
description: Research synthesis identifying all missing connections between the CD38 and SARM1 traces. Covers shared NAD+ substrate competition, NMN bridging node, cADPR production overlap, CZ-48 pharmacological divergence, tissue compartmentalization, NAD+ consumer hierarchy, and proposed graph edges to add.
created: 2026-07-17
updated: 2026-07-17
tags:
  - task-output
  - cd38
  - sarm1
  - nad-plus
  - nmn
  - knowledge-graph-gaps
  - research-synthesis
source: graphify graph analysis + web research (PubMed 33010451, PMC 6555258, Nature Metabolism 2020, iScience 2019, JBC 2024, Cell & Bioscience 2023)
---

# CD38–SARM1 Bridging Gaps

> Research synthesis identifying missing connections between the CD38 (community 78) and SARM1 (community 101) traces in the wiki knowledge graph.
> Date: 17_JUL_2026

> **STATUS UPDATE (17_JUL_2026):** Gap 1 is now RESOLVED in the current graph build. A direct edge `link_cd38 → link_sarm1` exists, and both nodes share `link_nad` (NAD+) and `link_cadpr` (cADPR) as neighbors. Full updated trace: `task_output_CD38_SARM1_NADplus_competition_17_JUL_2026.md`. Gaps 2–7 (NMN bridge, CZ-48, compartmentalization, consumer hierarchy, macrophage overlap) remain valid as AMBIGUOUS/hypothesized research directions.

## Executive Summary

The graph has **no direct edge** between CD38 and SARM1 (graphify path returns "No path found"). Yet the published literature shows extensive mechanistic overlap: both are NAD+ glycohydrolases with nearly identical catalytic activities, both produce cADPR from NAD+, both have base-exchange activity to generate NAADP, and they are metabolically bridged by the **NMN** node — CD38 degrades NMN extracellularly, while SARM1 is activated by NMN accumulation intracellularly.

This document identifies **7 categories of gaps** with proposed graph edges and research directions.

---

## Gap 1: No Direct CD38 ↔ SARM1 Edge

### Current Graph State
```
CD38 (community 78) ──/── NO EDGE ──/── SARM1 (community 101)
```

### Literature Evidence

| Finding | Source |
|---|---|
| "SARM1 catalysis was similar to CD38, despite having no sequence similarity. Both catalyzed similar set of reactions, but SARM1 had much higher NAD-cyclizing activity." | Zhao et al. 2019, iScience (PMID: 31128467) |
| "One of the potential candidates for the synthesis of NAADP is the newly discovered NADase SARM1." | Chini et al., PMC 6555258 |
| Both CD38 and SARM1 are classified as NAD+ glycohydrolases (NADases) that cleave NAD+ → NAM + ADPR + cADPR | Consensus review |

### Proposed Edges to Add

| Source | Relation | Target | Confidence | Justification |
|---|---|---|---|---|
| CD38 | conceptually_related_to | SARM1 | INFERRED (0.70) | Both are NAD+ glycohydrolases with similar catalytic activities |
| SARM1 | similar_to | CD38 | INFERRED (0.65) | Same substrate (NAD+), same products (ADPR, cADPR, NAM), base-exchange activity |
| CD38 | functionally_competes_with | SARM1 | AMBIGUOUS | Compete for shared NAD+ pool, but in different compartments |

---

## Gap 2: NMN as the Critical Bridging Metabolite

The strongest metabolic link between CD38 and SARM1 runs through **NMN**.

### The NMN Bridge

```
                    CD38 (ecto-enzyme, community 78)
                    │
Extracellular NMN ──┤
                    │
                    └──▶ Degrades NMN → NAM + ribose
                         (limits NMN availability to cells)
                    
Intracellular NMN ──▶ SARM1 activator (community 101)
                         (rising NMN/NAD+ ratio triggers activation)
                         
NMNAT2 ──▶ Converts NMN → NAD+ (community 161)
              │
              └──▶ When lost, NMN accumulates → SARM1 ON
```

### Literature Evidence

| Finding | Source |
|---|---|
| CD38 is an ecto-NMNase: "blocking the ecto-enzymatic activity of CD38 can increase NAD+ through an NMN-dependent process" | Covarrubias et al. 2020, Nature Metabolism |
| Extracellular NMN is degraded by CD38 before it can enter parenchymal cells | Covarrubias et al. 2020 |
| "CD38 decreased levels of NMN and NAD+ through its ecto-enzymatic activity" | Covarrubias et al. 2020 |
| NMN accumulation is the direct trigger for SARM1 autoinhibition release | Zhao et al. 2019; Shi et al. 2022, Molecular Cell |
| "SARM1 is a metabolic sensor of the NMN/NAD+ ratio in neurons" | Cell & Bioscience review 2023 |

### Key Insight: CD38 Activity Could Modulate SARM1 Tone

- CD38 degrades extracellular NMN → less NMN available for cellular uptake → less intracellular NMN available to activate SARM1
- Therefore: **high CD38 activity may protect against SARM1 activation** by keeping NMN low
- Conversely: **CD38 inhibition** (78c, Quercetin) preserves NMN → could potentially **sensitize to SARM1 activation** in neurons
- This is a clinically relevant interaction that NO study has directly tested

### Proposed Edges to Add

| Source | Relation | Target | Confidence | Justification |
|---|---|---|---|---|
| CD38 | degrades | NMN | EXTRACTED (0.90) | Well-established ecto-NMNase activity |
| CD38 | regulates_availability_of | NMN | INFERRED (0.80) | CD38 controls extracellular NMN pool |
| NMN | activates | SARM1 | EXTRACTED (0.95) | NMN is the direct allosteric activator |
| CD38 | modulates | SARM1 | AMBIGUOUS (0.40) | Through NMN availability — hypothesized, not directly tested |

---

## Gap 3: Shared cADPR Production

### Current Graph State
```
cADPR (community 19)
    │
    └── CD38 references (EXTRACTED)
    
SARM1 ──/── NO EDGE ──/── cADPR
```

### Literature Evidence

| Finding | Source |
|---|---|
| "SARM1 activated... to cyclize NAD and produce a Ca²⁺ messenger, cADPR" | Zhao et al. 2019, iScience |
| "SARM1 catalysis... had much higher NAD-cyclizing activity [than CD38], making it more efficient in elevating cADPR" | Zhao et al. 2019 |
| "SARM1 cleaves NAD+ to generate Nam, ADP ribose and cyclic ADP-ribose (cADPR)" | Bowie et al. 2024, JBC |
| CZ-48 activates SARM1 to produce cADPR, deplete NAD and ATP, induce non-apoptotic death | Zhao et al. 2019 |

### Proposed Edges to Add

| Source | Relation | Target | Confidence | Justification |
|---|---|---|---|---|
| SARM1 | produces | cADPR | EXTRACTED (0.90) | Direct catalytic product of SARM1 NADase |
| cADPR | regulates | Calcium Signaling | EXTRACTED (0.85) | Canonical function of cADPR |
| CD38 | also_produces | cADPR | EXTRACTED (0.95) | ADP-ribosyl cyclase activity |

---

## Gap 4: CZ-48 Pharmacological Divergence

CZ-48 (sulfo-ara-F-NMN) is a synthetic NMN analog with **opposite effects on CD38 and SARM1**:

| Compound | Effect on CD38 | Effect on SARM1 |
|---|---|---|
| **CZ-48** (sulfo-ara-F-NMN) | **Inhibits** | **Activates** |
| **CZ-48 (endogenous NMN)** | Substrate (degraded) | Activator (allosteric) |

### Literature Evidence

| Finding | Source |
|---|---|
| "CZ-48 acted selectively, activating SARM1 but inhibiting CD38" | Zhao et al. 2019, iScience (PMID: 31128467) |
| "A cell-permeant mimetic of NMN activates SARM1 to produce cyclic ADP-ribose and induce non-apoptotic cell death" | Zhao et al. 2019 |
| CZ-48: "a synthetic analog of NMN that has been identified as an inhibitor of CD38" | Benchchem Application Note 2021 |

### Proposed Edges to Add

| Source | Relation | Target | Confidence | Justification |
|---|---|---|---|---|
| CZ-48 | inhibits | CD38 | EXTRACTED (0.90) | Directly shown in Zhao et al. 2019 |
| CZ-48 | activates | SARM1 | EXTRACTED (0.90) | Directly shown in Zhao et al. 2019 |
| CZ-48 | is_analog_of | NMN | EXTRACTED (0.95) | Structural analog |

---

## Gap 5: Tissue Compartmentalization

CD38 and SARM1 operate in different subcellular and tissue compartments, yet compete for the same systemic NAD+ pool.

| Property | CD38 | SARM1 |
|---|---|---|
| **Localization** | Plasma membrane (ecto-enzyme) + mitochondrial intermembrane space | Cytoplasmic, axonal, mitochondrial-targeting sequence |
| **Enzymatic domain orientation** | Extracellular | Intracellular |
| **Primary tissue** | Immune cells, broad | Neurons (DRG, spinal cord, brain) |
| **Substrate access** | Extracellular NAD+/NMN | Intracellular NAD+ |
| **Timescale of action** | Chronic (hours to years) | Acute (minutes) |
| **Tissue specificity** | Broad (WAT, liver, blood, brain) | Narrow (nervous system) |

### The NAD+ Pool Problem

Despite compartmentalization, NAD+ consumers compete for overlapping pools:

- Extracellular NAD+ → CD38 consumes → limits precursor availability to cells
- Intracellular NAD+ → SARM1 consumes → catastrophic depletion in axons
- CD38 in mitochondrial intermembrane space → consumes NAD+ adjacent to mitochondrial matrix
- SARM1 has a mitochondrial-targeting sequence → may act at mitochondria

### Research Gap
The extent to which CD38-mediated extracellular NMN depletion affects SARM1's intracellular NMN/NAD+ sensing has not been directly studied.

---

## Gap 6: NAD+ Consumer Hierarchy

PARP1, CD38, SARM1, Sirtuins, and CD73 all consume NAD+. Their relative contributions change with age and disease state.

### Current Graph State

```
NAD+ ──▶ CD38 (community 78) — primary age-related consumer
NAD+ ──▶ PARP1 (community 99) — DNA repair
NAD+ ──▶ SARM1 (community 101) — catastrophic axonal
NAD+ ──▶ Sirtuins (community 78) — signaling/deacetylation
NAD+ ──▶ CD73 (community 78) — adenosine production
```

### Literature Evidence on Competition

| Finding | Source |
|---|---|
| "CD38 has a lower Km than most NAD+-consuming enzymes" | npj Metabolic Health and Disease 2025 |
| "Altering the activity or expression level of one enzyme affects the activity of the others" | Fang et al. 2017; SciDirect 2021 |
| "Combined inhibition of PARP1 and CD38 completely reversed the LPS-induced NAD+ decline" | Covarrubias et al. 2020 |
| CD38 is the "main NADase responsible for the aging-related NAD decline" (Chini lab paradigm shift) | Chini, R01 AG058812 |

### Proposed Hyperedge

**NAD+ consumer competition network** (new hyperedge):
- Nodes: CD38, PARP1, SARM1, Sirtuins, CD73, NAD+
- Relation: compete_for_substrate
- Confidence: EXTRACTED (0.85)
- Source: Consensus from multiple reviews

---

## Gap 7: SARM1 in Immune Cells (CD38 Overlap)

Recent evidence shows SARM1 is expressed in macrophages and can fine-tune immune responses — a functional domain where it overlaps with CD38's immune role.

| Finding | Source |
|---|---|
| "SARM1 is most highly expressed in neurons and is also detectable in other cells" | Bowie et al. 2024, JBC |
| "The enzymatic activity of SARM1 impacts macrophage metabolism... SARM1 can fine-tune macrophage immune responses via consumption of NAD+ and altered metabolism" | Bowie et al. 2024, JBC |
| CD38 is highly expressed in activated macrophages and regulates their NAD+ levels | Covarrubias et al. 2020 |

### Proposed Edges to Add

| Source | Relation | Target | Confidence | Justification |
|---|---|---|---|---|
| SARM1 | regulates | Macrophage Metabolism | INFERRED (0.65) | JBC 2024 shows SARM1 NADase affects macrophage metabolism |
| SARM1 | expressed_in | Macrophages | INFERRED (0.50) | Detectable but at lower levels than neurons |
| CD38 | co-expressed_with | SARM1 | AMBIGUOUS (0.35) | Both found in macrophages; expression overlap not well characterized |

---

## Summary: All Proposed Edges

### Direct Edges

| # | Source | Relation | Target | Confidence | Type |
|---|---|---|---|---|---|
| 1 | CD38 | conceptually_related_to | SARM1 | INFERRED (0.70) | Functional similarity |
| 2 | SARM1 | similar_to | CD38 | INFERRED (0.65) | Substrate/products overlap |
| 3 | CD38 | functionally_competes_with | SARM1 | AMBIGUOUS | Shared NAD+ pool |
| 4 | CD38 | degrades | NMN | EXTRACTED (0.90) | Ecto-NMNase activity |
| 5 | CD38 | regulates_availability_of | NMN | INFERRED (0.80) | Extracellular pool control |
| 6 | NMN | activates | SARM1 | EXTRACTED (0.95) | Direct allosteric activator |
| 7 | CD38 | modulates | SARM1 | AMBIGUOUS (0.40) | Via NMN availability |
| 8 | SARM1 | produces | cADPR | EXTRACTED (0.90) | Catalytic product |
| 9 | CZ-48 | inhibits | CD38 | EXTRACTED (0.90) | Selective pharmacology |
| 10 | CZ-48 | activates | SARM1 | EXTRACTED (0.90) | Selective pharmacology |

### Hyperedges

| # | Label | Nodes | Confidence |
|---|---|---|---|
| H1 | NAD+ consumer competition network | CD38, PARP1, SARM1, Sirtuins, CD73, NAD+ | EXTRACTED (0.85) |
| H2 | NAD+ consuming ectoenzymes (existing) | CD38, CD73, NAD+ | INFERRED (0.70) — EXPAND to add SARM1? No, SARM1 is intracellular not ecto. Keep separate. |

---

## Highest Priority Research Questions

1. **Does CD38-mediated NMN depletion protect against SARM1 activation?** — No study has tested whether high CD38 activity (via reducing extracellular NMN availability) reduces the pool of intracellular NMN available to activate SARM1. This has implications for combination therapy: CD38 inhibition to raise NAD+ for aging may inadvertently increase SARM1-activable NMN.

2. **What happens to SARM1 in CD38 KO mice?** — CD38 KO mice have elevated NAD+ and NMN levels. Does this sensitize neurons to SARM1-dependent Wallerian degeneration? If so, CD38 inhibition as a longevity strategy may carry a neurological risk.

3. **Does combined CD38 + SARM1 inhibition synergize?** — If CD38 inhibition preserves NAD+ for sirtuins/PARPs, and SARM1 inhibition blocks catastrophic NAD+ loss in axons, combined inhibition could simultaneously address chronic age-related NAD+ decline and acute neurodegenerative NAD+ collapse. No study has tested this.

4. **Are CD38 and SARM1 co-expressed in microglia?** — Microglia express CD38 (immune cells in brain) and may express SARM1. Both could consume NAD+ in the central nervous system. CD38 in microglia drives neuroinflammation; SARM1 in neurons drives axonal degeneration. The overlap has not been mapped.
