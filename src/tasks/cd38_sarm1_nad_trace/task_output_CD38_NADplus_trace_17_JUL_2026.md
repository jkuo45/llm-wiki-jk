---
title: CD38–NAD+ Trace — Graph-Derived Mechanistic Map
description: Comprehensive trace of the CD38-NAD+ relationship extracted from the graphify knowledge graph (notes corpus, 4714 nodes, 8624 edges). Covers CD38's enzymatic activities, its role as the primary age-related NAD+ consumer, downstream effects on SIRT3/PARP1, therapeutic interventions, and cross-community connections to inflammaging.
created: 2026-07-17
updated: 2026-07-17
tags:
  - task-output
  - cd38
  - nad+
  - aging
  - inflammaging
  - sirtuins
  - parp1
  - knowledge-graph
source: graphify graph query + notes/_link/CD38.md + notes/_link/NAD+.md
---

# CD38–NAD+ Trace

> Extracted from the wiki knowledge graph (4714 nodes, 8624 edges, 363 communities) via BFS/DFS traversal and node explanation.
> Date: 17_JUL_2026

## Graph Position

| Property | Value |
|---|---|
| **Node** | CD38 |
| **ID** | `link_cd38` |
| **Source** | `_link/CD38.md` |
| **Type** | concept (enzyme) |
| **Community** | 78 |
| **Degree** | 12 |

## Direct Connections (from graph)

| Source | Relation | Target | Confidence | Target Community |
|---|---|---|---|---|
| CD38 | references | **NAD+** | EXTRACTED | 78 |
| CD38 | references | **Inflammaging** | EXTRACTED | 10 |
| CD38 | references | **Sirtuins** | EXTRACTED | 78 |
| CD38 | references | **SIRT3** | EXTRACTED | 79 |
| CD38 | references | **Nicotinamide Riboside** | EXTRACTED | 78 |
| CD38 | references | **Nicotinamide Mononucleotide** | EXTRACTED | 78 |
| CD38 | references | **PARP1** | EXTRACTED | 99 |
| CD38 | references | **Quercetin** | EXTRACTED | 22 |
| CD38 | references | **cADPR** | EXTRACTED | 19 |
| CD38 | references | **Multiple Myeloma** | EXTRACTED | 181 |
| CD38 | references | **Daratumumab** | EXTRACTED | 78 |
| CD38 | references | **Isatuximab** | EXTRACTED | 78 |
| CD73 | conceptually_related_to | CD38 | INFERRED | 78 |

## Hyperedge: NAD+ Consuming Ectoenzymes

- **Label:** NAD+ consuming ectoenzymes
- **Nodes:** CD38, CD73, NAD+
- **Relation:** participate_in
- **Confidence:** INFERRED (0.70)
- **Source:** `_link/CD38.md`

## Enzymatic Activities

CD38 is a multifunctional ectoenzyme that cleaves NAD+ via three catalytic activities:

| Activity | Substrate → Product | Function |
|---|---|---|
| **ADP-ribosyl cyclase** | NAD+ → **cADPR** (community 19) | Ca²⁺ mobilization from ER |
| **NAD+ glycohydrolase** | NAD+ → ADPR + Nicotinamide | Primary NAD+ consumption |
| **NAADP synthase** (base-exchange) | NADP+ → NAADP | Lysosomal Ca²⁺ release |
| **Ecto-NMNase** | Extracellular NMN → NAM + ribose | Degrades NAD+ precursors |

CD38 also catalyzes a base-exchange reaction that can generate toxic NAD+ derivatives (e.g., isoniazid-NAD adducts).

## Mechanism: The Inflammaging → CD38 → NAD+ Decline Axis

### The Aging Spiral (cross-community, EXTRACTED)

```
Inflammaging (community 10)
    │
    ▼  [drives infiltration of CD38+ immune cells]
CD38 (community 78)
    │
    ▼  [consumes NAD+ as substrate]
NAD+ depletion (community 78)
    │
    ├──▶ SIRT3 activity ↓ (community 79) → mitochondrial dysfunction
    ├──▶ Sirtuin activity ↓ (community 78) → impaired stress response
    ├──▶ PARP1 competition ↓ (community 99) → impaired DNA repair
    └──▶ More inflammation → more CD38 ← feedback loop
```

### Key Experimental Evidence in Notes

| Finding | Model | Source |
|---|---|---|
| CD38 knockout preserves NAD+ levels | Mouse | `_link/CD38.md` |
| CD38 KO boosts SIRT3 activity, improves mitochondrial function | Aged mice | `_link/CD38.md` |
| CD38 inhibitor 78c extends lifespan ~14% (male mice) | Mouse | `_link/CD38.md` |
| CD38 degrades NMN and NR precursors | In vitro | `_link/CD38.md` |
| CD38+ immune cells infiltrate tissues with age | Mouse WAT, liver | Covarrubias et al. 2020 (Nature Metabolism) |

### Immune Cell Infiltration Model (from 2020 research)

Aging → accumulation of senescent cells → SASP (senescence-associated secretory phenotype) → recruitment of CD38+ immune cells (macrophages, T cells) into tissues → CD38's ecto-enzymatic activity degrades extracellular NAD+ and NMN → parenchymal cells starved of NAD+ precursors → metabolic dysfunction.

## Downstream NAD+ Targets Affected by CD38 Activity

| Target | Community | Effect of CD38-Driven NAD+ Depletion |
|---|---|---|
| **SIRT3** | 79 | Impaired mitochondrial deacetylation → ROS ↑, ATP ↓ |
| **Sirtuins (pan)** | 78 | Broad deacetylation failure → metabolic dysregulation |
| **PARP1** | 99 | Reduced DNA repair capacity → genome instability |
| **Glycolysis** | 152 | GAPDH requires NAD+ → potential energy deficit |

## Therapeutic Interventions in Graph

| Intervention | Connection to CD38 | Community | Confidence |
|---|---|---|---|
| **CD38 inhibitor 78c** | Selective small-molecule inhibitor | 78 (via CD38) | EXTRACTED |
| **Quercetin** | Natural flavonoid inhibitor | 22 | EXTRACTED |
| **Apigenin** | Natural flavonoid inhibitor | 22 | INFERRED |
| **Nicotinamide Riboside** | NAD+ precursor (also degraded by CD38) | 78 | EXTRACTED |
| **Nicotinamide Mononucleotide** | NAD+ precursor (also degraded by CD38) | 78 | EXTRACTED |
| **Daratumumab** | Anti-CD38 monoclonal antibody (ADCC/CDC) | 78 | EXTRACTED |
| **Isatuximab** | Anti-CD38 monoclonal antibody (direct apoptosis) | 78 | EXTRACTED |

## Graph Health Assessment

- **Degree:** 12 direct connections
- **Cross-community edges:** 2 (Inflammaging [10], Quercetin [22], PARP1 [99])
- **Confidence distribution:** 11 EXTRACTED, 1 INFERRED (CD73 connection)
- **Dangling edges detected:** None for CD38 node
- **Graph gap:** No direct CD38 ↔ SARM1 edge exists, despite shared NAD+ substrate and overlapping cADPR production
