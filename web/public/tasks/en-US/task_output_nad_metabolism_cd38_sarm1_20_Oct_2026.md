---
title: NAD+ Metabolism and the CD38–SARM1 Competition — Consolidated Graph Synthesis
description: Consolidates the nine July 2026 CD38/SARM1 trace outputs onto the current combined graph build (4,821 nodes / 47,925 edges), re-derives the NAD+ consumer hierarchy, the CD38↔SARM1 competition and NMN-linkage metrics, audits layer divergence (wiki unified vs triples scattered) and extraction gaps within the NAD+ module, and states the pharmacological paradox of CD38 inhibition with its literature resolution.
created: 2026-10-20
updated: 2026-10-20
source: src/tasks/cd38_sarm1_nad_trace/ (9 outputs, 17–21 Jul 2026) + web/public/data/{nodes,edges,wiki-nodes,triples-nodes}.json (build 02_Oct_2026, hash `3d9d2c9fe214c0d2`) + notes/_link/{NAD+,CD38,SARM1,NAMPT,NMN,Nicotinamide Riboside}.md
tags:
  - task-output
  - nad-plus
  - cd38
  - sarm1
  - knowledge-graph
  - metabolism
  - aging
  - sirtuins
  - graph-analysis
author: []
---

# NAD+ Metabolism and the CD38–SARM1 Competition — Consolidated Graph Synthesis

**Date**: 20_Oct_2026
**Supersedes for page-building purposes**: the nine individual trace outputs in `src/tasks/cd38_sarm1_nad_trace/` (17–21 Jul 2026). Those remain the primary literature-anchored documents; this file re-derives the *quantitative* layer against the current graph build and adds three findings the July traces could not make.

> [!important] Why this consolidation exists
> The July traces were computed on a 4,714-node / 8,624-edge graph (triples layer only). The site now serves a combined dataset of **4,821 nodes / 47,925 edges** (build 02_Oct_2026, hash `3d9d2c9fe214c0d2`). Node degrees, community assignments and edge inventories within the NAD+ module have all moved. Publishing graph numbers from the July snapshots would misstate the current dataset.

---

## Basis of derivation

| Artifact | Role |
|---|---|
| `web/public/data/nodes.json` + `edges.json` | Combined union — canonical, 4,821 nodes / 47,925 edges |
| `web/public/data/wiki-nodes.json` + `wiki-edges.json` | Wiki co-mention layer, 3,486 nodes / 44,994 edges |
| `web/public/data/triples-nodes.json` + `triples-edges.json` | Typed triples layer, 3,493 nodes / 6,605 edges |
| `src/notes/_link/{NAD+,CD38,SARM1,NAMPT,NMN,Nicotinamide Riboside}.md` | Vault entity notes (primary prose) |
| `src/tasks/cd38_sarm1_nad_trace/*.md` (9 files) | July literature-grounded traces (primary for claims) |

**Metric convention** — matching the house method used by `caspase-graph-analysis.html`:
- **Degree** = distinct neighbours in the combined union (parallel edges collapse).
- **in / out** = edge incidences in the combined union.
- **k-core** = union-graph core number on the simple undirected projection.
- **Community** = the combined dataset's Leiden label. Triples wins for shared node ids; wiki-only ids carry the wiki label with a +1000 community-id offset.

Reproduction:

```bash
uv run --with networkx python3 - <<'PY'
import json, networkx as nx
nodes = json.load(open("web/public/data/nodes.json"))
edges = json.load(open("web/public/data/edges.json"))
G = nx.MultiDiGraph()
for n in nodes: G.add_node(n["id"])
for e in edges: G.add_edge(e["from"], e["to"])
Gund = G.to_undirected(reciprocal=False)
Gs = nx.Graph(Gund)
kcore = nx.core_number(Gs)
by = {}
for n in nodes: by.setdefault(n["label"], []).append(n["id"])
for lab, ids in sorted(by.items()):
    nid = ids[0]
    nb = set()
    for e in edges:
        if e["from"] == nid: nb.add(e["to"])
        if e["to"] == nid: nb.add(e["from"])
    print(f"{lab:42s} deg={len(nb):4d} "
          f"in={sum(1 for e in edges if e['to']==nid):4d} "
          f"out={sum(1 for e in edges if e['from']==nid):4d} "
          f"kcore={kcore.get(nid,0):3d}")
PY
```

> [!warning] The stored `degree` field is not the union degree
> `nodes.json` carries a `degree` attribute inherited from the source layer (see `scripts/combined/build.py` — the merged node keeps the triples node's fields for shared ids). For **2,157 of 2,158 shared nodes** that stored value is *lower* than the actual number of incident edges in the combined union, because the union adds the wiki layer's co-mention edges on top. NAD+ stores `degree: 51` while actually carrying 321 incident edges across 277 distinct neighbours.
> Every degree figure in this document and in the published page is the **recomputed union degree**, not the stored field. The same convention applies to the existing `caspase-graph-analysis` page (Caspase-3: stored 29, union 76).

---

## The consumer hierarchy

NAD+ is not a static quantity that can be restored by supplementation. It is a shared substrate pool consumed by at least four enzymatic systems operating on four different timescales and in four different compartments, and the substrate deficit arising from each converges on the same downstream target: sirtuin-catalysed, NAD+-requiring reactions.

| Consumer | Compartment | Timescale | Trigger | Signature |
|---|---|---|---|---|
| **CD38** | extracellular / cell surface | hours–years | inflammaging, immune-cell infiltration | NAD+ ↓, NMN ↓, cADPR ↑ |
| **SARM1** | intracellular (axon) | minutes | injury → NMNAT2 loss | NAD+ → ~0, Wallerian degeneration |
| **PARP1 / PARP2** | nucleus | hours | DNA damage | NAD+ ↓, PAR ↑ |
| **Sirtuins** | nucleus / cytosol / mitochondria | continuous | — | NAD+ consumed as catalytic co-substrate |
| **CD73** | extracellular | continuous | — | NAD+ → adenosine (competitive substrate) |

The vault's non-obvious framing, worth stating explicitly on the page: **sirtuins are consumers too**. Every deacetylation event hydrolyses one NAD+ into nicotinamide and OAADPr. NAD+ repletion is therefore not metabolically neutral — the sirtuins are themselves part of the consumption.

### Supply side

- **Preiss–Handler**: nicotinamide → nicotinic acid → NAD+ (the route NAMPT bypasses).
- **Salvage** (dominant in most mammalian tissues): nicotinamide → NMN via **NAMPT** (rate-limiting) → NAD+ via **NMNAT**.
- **Nicotinamide riboside route**: NR → NMN via NRK1/NRK2 → NAD+ via NMNAT.

NAMPT is the same enzyme in two opposing strategies: it is the master regulator to preserve in longevity, and the target to *inhibit* in oncology (FK866) so that PARP-driven DNA repair fails.

---

## Current-build metrics for the NAD+ module

**Combined union** (canonical). Communities are the combined dataset's labels.

| Node | Deg (union) | in | out | k-core | Clustering | Community |
|---|---:|---:|---:|---:|---:|---|
| NAD+ | 277 | 267 | 54 | 20 | 0.048 | NAD+ |
| Sirtuins | 187 | 141 | 60 | 20 | 0.061 | Sirtuins |
| Nicotinamide Riboside | 112 | 68 | 61 | 20 | 0.085 | Nicotinamide Riboside |
| Apigenin | 106 | 40 | 87 | 20 | 0.082 | Senescence-Associated Secretory Phenotype |
| PARP1 | 91 | 67 | 53 | 20 | 0.110 | Parthanatos |
| Microglia | 76 | 62 | 24 | 20 | 0.133 | Microgliosis |
| Glycolysis | 69 | 60 | 26 | 19 | 0.099 | HIF-1α |
| NMN | 65 | 62 | 11 | 19 | 0.161 | Nicotinamide Mononucleotide |
| CD38 | 48 | 38 | 28 | 19 | 0.174 | CD38 |
| NAMPT | 46 | 39 | 17 | 18 | 0.175 | Heart Failure |
| Nicotinamide Mononucleotide | 33 | 6 | 27 | 17 | 0.146 | Nicotinamide Mononucleotide |
| SARM1 | 31 | 18 | 27 | 16 | 0.247 | Nicotinamide Riboside |
| CD157 | 26 | 4 | 24 | 16 | 0.172 | Nicotinamide Riboside |
| SLC25A51 | 20 | 2 | 20 | 16 | 0.295 | NAD+ |
| ML385 | 19 | 0 | 19 | 19 | 0.415 | NRF2 |
| Axon Degeneration | 19 | 9 | 16 | 11 | 0.433 | Nicotinamide Riboside |
| ADP-Ribose | 19 | 10 | 16 | 12 | 0.263 | ADP-Ribose |
| Wallerian Degeneration | 13 | 7 | 10 | 11 | 0.603 | NAD+ |
| Disulfiram | 13 | 9 | 8 | 11 | 0.705 | Paracrine Senescence |
| DSRM-3716 / GSK-428 | 13 | 8 | 7 | 11 | 0.795 | NAD+ |
| NB-4746 | 12 | 9 | 4 | 11 | 0.864 | NAD+ |
| Chemotherapy-Induced Peripheral Neuropathy | 12 | 3 | 11 | 11 | 0.697 | NAD+ |
| NMNAT2 | 8 | 4 | 7 | 8 | 0.750 | NAD+ |
| cADPR (Cyclic ADP-ribose) | 7 | 5 | 3 | 5 | 0.571 | NAD+ |
| CZ-48 | 4 | 2 | 4 | 4 | 1.000 | NAD+ |

\* Microglia carries 75 distinct neighbours in the wiki layer alone; the figure above is the combined union.

### Reading the metrics

Three observations the July traces could not make:

**1. The NAD+ module has a k-core ceiling of 20, and almost everything within it sits there.**
NAD+ (20), Sirtuins (20), NR (20), Apigenin (20), PARP1 (20), Microglia (20) all reach the union's maximum k-core — 20 is the union-wide ceiling, confirmed on this build. CD38 sits at 19, NAMPT 18, SARM1 16. This is a **deeply embedded core, not a peripheral appendage** — the NAD+ module is one of the vault's structural spines, structurally comparable to the SIRT1/SASP god-node neighbourhood rather than a topic-level footnote.

**2. Clustering inverts between the two NADases.**
CD38 clustering 0.174, SARM1 clustering 0.247 — SARM1's neighbours are more mutually connected despite SARM1 having a *lower* degree (31 vs 48). The reading: SARM1 sits in a tight, self-referential injury/axon-degeneration neighbourhood (TIR domain, NMNAT2, Wallerian degeneration, Axon Degeneration, Disulfiram, DSRM-3716, GSK-428, NB-4746, CIPN — 9 of 31 neighbours are its own pharmacological and anatomical apparatus), whereas CD38's neighbours are spread across immune-cell, tumour-microenvironment and sirtuin territory. **CD38 is the diffuse hub; SARM1 is the closed specialist.** These are different therapeutic objects.

**3. The inhibitor nodes are near-perfectly cliqued with their targets.**
CZ-48 clustering 1.000, NB-4746 0.864, DSRM-3716 / GSK-428 0.795, Disulfiram 0.705. Each SARM1 inhibitor's neighbours are almost entirely other SARM1 pharmacology. The graph has learned the pharmacology as a closed sub-cluster, and — notably — `Disulfiram` carries the community label **Paracrine Senescence**, not NAD+. It is a repurposed drug whose primary fame is alcohol use disorder; the graph has filed it under a senescence community while its SARM1 edges pull it into the NAD+ axis.

---

## The competition between the two NADases

### Shared chemistry, opposite compartments

CD38 and SARM1 are both NAD+ glycohydrolases cleaving the same substrate to the same products (nicotinamide + ADP-ribose + cADPR), both with base-exchange activity. They differ in kinetics and location, not chemistry:

- **CD38** — lower K_m (priority consumer), extracellular, ecto-enzyme.
- **SARM1** — higher NAD-cyclizing activity (more efficient cADPR producer), intracellular, catalytic in the axon.

Zhao et al. 2019 (*iScience*, PMID 31128467): *"SARM1 catalysis was similar to CD38, despite having no sequence similarity… SARM1 had much higher NAD-cyclizing activity."*

### The NMN linkage

```
EXTRACELLULAR                              INTRACELLULAR
CD38 (ecto-NMNase)                        SARM1 activator
  degrades NMN → NAM + ribose               rising NMN/NAD+ ratio
        │                                          │
        ▼                                          ▼
  less NMN enters cells                      ARM-domain binding
        │                                          │
        └──────────► lower neuronal NAD+ buffer ◄─┘
                     → SARM1 closer to threshold
```

The paradox the graph encodes: **high CD38 activity may protect against SARM1 activation**, because degrading extracellular NMN keeps intracellular NMN low. Conversely, **CD38 inhibition for longevity may sensitize neurons to SARM1-dependent Wallerian degeneration.**

### CZ-48 as the pharmacological divergence probe

CZ-48 (sulfo-ara-F-NMN) is the cleanest demonstration that the two enzymes are separable despite shared substrate and product chemistry:

| Compound | Effect on CD38 | Effect on SARM1 |
|---|---|---|
| **CZ-48** | **Inhibits** | **Activates** |

It is the only molecule in the vault with opposite effects on the two NADases. In the current graph it sits inside the wiki layer's `NAD+` community with 4 distinct neighbours and clustering 1.000 — a textbook divergence node.

### The literature resolution (this is the honest part)

The July synthesis flagged the paradox as a live risk. The dedicated literature investigation (`task_output_research_CD38_SARM1_gaps_17_JUL_2026.md`) resolved it in two steps:

**Question 1 — Does CD38-mediated NMN depletion protect against SARM1 activation?**
*Verdict: PLAUSIBLE BUT NOT DIRECTLY TESTED.* The chemistry is sound and each link is separately established — CD38 is one of the main enzymes degrading NMN in mouse tissues (Camacho-Pereira 2016, PMID 27133162); blocking CD38's ecto-enzymatic activity raises NAD+ through an NMN-dependent process (Covarrubias 2020, PMID 33028765); accumulated NMN appears to activate the prodegenerative cADPR-forming enzyme SARM1 (Takaso 2020, PMID 33082370); the NMN/NAD+ ratio is the primary SARM1 activator (Figley 2021, *Neuron*, PMID 33657413). But no study has directly tested whether CD38 activity or inhibition alters SARM1-dependent axon degeneration.

**Question 2 — What happens to SARM1 in CD38 KO mice?**
*Verdict: NO EVIDENCE OF SENSITIZATION — IN FACT, PROTECTIVE.* This is the finding that dissolves the paradox. Takaso 2020 (PMID 33082370) shows CD38 knockout mice display **delayed** axon degeneration after facial nerve axotomy — the *opposite* of what SARM1 sensitization predicts.

Resolution of why the two verdicts differ:

1. CD38 deletion raises NAD+, and NAD+ is what NMNAT2 needs to make more NAD+ — the protective effect dominates.
2. NMN accumulation alone is not sufficient to activate SARM1 without the concurrent injury-specific NMNAT2 loss context.
3. The trigger is the **ratio** (NMN/NAD+), not absolute NMN. Raising NAD+ lowers the ratio even as absolute NMN rises.

The pharmacological distinction is the point: **CD38 inhibition alone is not the SARM1-sensitization risk that the mechanism alone suggests.** The risk attaches to NAD+ *precursor* supplementation, which raises NMN without the compensatory NAD+ rise that CD38 deletion also produces.

> [!tip] The corrected reading for the page
> The vault's own caution — "CD38 monotherapy to raise NAD+ for longevity could inadvertently sensitize neurons to SARM1-dependent Wallerian degeneration" — is **too strong as written for CD38 inhibition**. It holds for **NR/NMN supplementation** (Takaso's explicit caveat: *"accumulated NMN appeared to be an activator of the prodegenerative cADPR-forming enzyme SARM1"*), and it does not survive the CD38-KO axotomy data. The page must present it this way or it will overstate the risk.

### A third shared mechanism

Beyond substrate and the NMN linkage, 78c and the SARM1 inhibitors are mechanistically coupled: both act as **adduct-forming uncompetitive inhibitors** of NAD-dependent enzymes — a conserved NAD-dependent mechanism (Bratkowski et al. 2022, *Neuron*). Pharmacological separability therefore does not imply mechanistic independence.

---

## The CNS compartment map

Microglia CD38 versus neuronal SARM1, from `task_output_CD38_CNS_microglia_SARM1_neuron_17_JUL_2026.md`:

| Property | Microglial CD38 | Neuronal SARM1 |
|---|---|---|
| Cell type | Microglia (brain-resident macrophage) | Neuron (soma, axon, mitochondria) |
| Timescale | Chronic (aging, neuroinflammation) | Acute (injury, minutes) |
| Trigger | Inflammaging, immune activation | Axonal severance, NMNAT2 depletion |
| Output | Neuroinflammation, precursor depletion | Axonal NAD+ collapse, Wallerian degeneration |
| Disease links | Neuroinflammation, aging brain | TBI, neuropathy, glaucoma, ALS, AD, PD |

Two graph-plausible cross-talk routes: **precursor competition** (microglial CD38 lowers the neuronal NAD+ buffer, so injury tips SARM1 on more easily) and **inflammation→injury cascade** (neuroinflammation raises axonal vulnerability, so TBI/ischemia trips SARM1 in already-stressed axons).

In the current build both axes resolve to the same disease: **Chemotherapy-Induced Peripheral Neuropathy** is a wiki-layer neighbour of *both* CD38 and SARM1, and sits in the `NAD+` community with clustering 0.697. CIPN is **wiki-only** — the node does not exist in the triples layer at all — and the two `links_to` edges that reach it from CD38 and from SARM1 are wiki co-mention edges with no typed counterpart.

The July SARM1 trace did list CIPN as a SARM1 neighbour. What is new is the *convergence*: CIPN as a node reached by **both** NADases, and the fact that it is invisible to the triples layer entirely. The July traces ran against the triples graph, where the CIPN node and all three of its edges are absent.

---

## Therapeutic landscape

Organised by which consumption pathway is being targeted, not by compound.

| Target | Agents | Mechanism | Evidence | Note |
|---|---|---|---|---|
| CD38 | 78c | adduct-forming uncompetitive inhibitor | ~14% lifespan extension in male mice; severe adverse reactions in females requiring euthanasia | sex-specific |
| CD38 | quercetin, apigenin | natural flavonoids | weaker, pleiotropic | also SIRT/PI3K effects |
| CD38 | daratumumab, isatuximab | anti-CD38 mAb (ADCC / direct apoptosis) | oncology — multiple myeloma | not a longevity tool |
| CD38 | ML385 | NRF2 inhibitor | links CD38 to the oxidative-stress module | community NRF2, 19 out-edges, 0 in-edges |
| SARM1 | Disulfiram | covalent TIR cysteine | repurposed; clinical-stage | community label: Paracrine Senescence |
| SARM1 | DSRM-3716 | non-covalent pocket | preclinical | |
| SARM1 | GSK-428 | quinazoline, nM IC₅₀ | preclinical | |
| SARM1 | NB-4746 | brain-penetrant, clinical-stage (Nura Bio) | preclinical/clinical | |
| Substrate pool | NR, NMN | precursor repletion | preclinical; gated by CD38 | raises NMN → SARM1-sensitization risk |
| Substrate pool | NAMPT | FK866 | oncology — *deplete* NAD+ | inverse strategy, same enzyme |
| PARP | PARP inhibition | stops the third consumption pathway | CD38 + PARP inhibition fully reversed LPS-induced NAD+ decline where singles failed (Covarrubias 2020) | precedent for multi-consumer inhibition |

### Two-strategy synergy

- **Strategy A — chronic**: CD38 inhibitor + NR → restore substrate availability for sirtuin catalysis (hours–years timescale).
- **Strategy B — acute**: SARM1 inhibitor → prevent axonal collapse (minutes timescale).

Why synergy and not additivity: the two strategies address **different compartments and different timescales of the same substrate pool**, so combined coverage is broader than either alone.

> [!warning] The synergy edge does not exist in the graph
> No extracted synergy edge connects a CD38 inhibitor to a SARM1 inhibitor. The proposition is AMBIGUOUS (0.45) by construction — it is inferred from convergent node logic, and the only supporting precedent is **CD38 + PARP**, not CD38 + SARM1. Any published claim of CD38+SARM1 synergy must be labelled as untested.
>
> The NMN-sensitization caveat still applies to the **precursor component of Strategy A** (NR/NMN), for the reasons established above — but it does not apply to CD38 inhibition alone.

---

## Layer divergence: the wiki has unified what the triples layer has scattered

The single clearest structural finding in the current build.

Per-layer figures are **distinct neighbours in that layer's own edge list**, not the stored `degree` attribute — the same correction applied to the union figures above.

| Node | Wiki nb | Triples nb | Wiki community | Triples community | Reading |
|---|---:|---:|---|---|---|
| NAD+ | 270 | 38 | NAD+ | NAD+ | hub in both layers |
| CD38 | 42 | 16 | NAD+ | **CD38** | split across communities |
| SARM1 | 31 | 4 | NAD+ | **Nicotinamide Riboside** | split |
| NAMPT | 42 | 8 | NAD+ | **Heart Failure** | split — the salvage enzyme filed under a cardiac community |
| NMNAT2 | 8 | — | NAD+ | — | wiki-only |
| Nicotinamide Riboside | 70 | 60 | NAD+ | Nicotinamide Riboside | split |
| NMN | 65 | 1 | NAD+ | Nicotinamide Mononucleotide | in both — but see the shadow-node row below |
| Nicotinamide Mononucleotide | 5 | 29 | **AMPK** | Nicotinamide Mononucleotide | split, opposite directions |
| Glycolysis | 66 | 6 | Mitochondrial Respiration | **HIF-1α** | split |
| PARP1 | 89 | 11 | PARP1 | **Parthanatos** | split |
| Quercetin | 65 | 12 | Cellular Senescence | **Fisetin** | split |
| Apigenin | 94 | 39 | Senescence-Associated Secretory Phenotype | **p53** | split |
| Disulfiram | 12 | 1 | NAD+ | **Paracrine Senescence** | split |
| Microglia | 75 | 3 | Alzheimer's Disease | Microgliosis | split |
| Neuron | 28 | 3 | Alzheimer's Disease | Humanin | split |
| cADPR (Cyclic ADP-ribose) | 7 | — | NAD+ | — | wiki-only |
| cADP-Ribose | — | 1 | — | CD38 | triples-only |
| CD38 Inhibitor 78c | 11 | 7 | NAD+ | NAD+ | **in both** — but the two layers spell the label differently |
| ML385 | 19 | 1 | Nrf2 | NRF2 | split |
| DSRM-3716 / GSK-428 | 13 | — | NAD+ | — | wiki-only |
| NB-4746 | 12 | — | NAD+ | — | wiki-only |
| CZ-48 | 4 | — | NAD+ | — | wiki-only |

> [!warning] Compare layers by node **id**, not by label
> The two layers spell several of the same nodes differently: the wiki layer writes `CD38 Inhibitor 78c` and
> `NMN (Nicotinamide Mononucleotide)` where the triples layer writes `CD38 inhibitor 78c` and `NMN`. Joining the
> layers on the rendered label silently drops those rows and makes wiki-only nodes look absent from both.
> The counts above are joined on canonical node id.

**The wiki layer has already unified the entire NAD+ module into a single `NAD+` community** — CD38, SARM1, NAMPT, NMNAT2, NR, CZ-48, Disulfiram, DSRM-3716, GSK-428, NB-4746, SLC25A51, Wallerian Degeneration and CIPN all sit inside it. **The triples layer still scatters the same axis across five unrelated communities**, one of which files the salvage enzyme NAMPT under Heart Failure and another files the SARM1 inhibitor Disulfiram under Paracrine Senescence.

The combined dataset inherits the triples labels for shared ids (`scripts/combined/build.py`: "Triples wins for description / community / color on shared ids"), which is why the combined `community` column above still shows the scattered triples labels for CD38, SARM1 and NAMPT. This is a **known cost of the merge precedence rule**: the more coherent wiki clustering is present in the data but hidden from the default UI for every shared node.

The practical consequence: an analysis that reads community labels from the combined dataset will mis-scope the NAD+ module. It should read the wiki layer's labels for these nodes.

---

## Extraction gaps within the NAD+ module

| Gap | Evidence | Impact |
|---|---|---|
| `cADPR` exists as two nodes | `cADPR (Cyclic ADP-ribose)` (wiki-only, 7 nb, community NAD+) vs `cADP-Ribose` (triples-only, 1 nb, community CD38) | The calcium-messenger product of both NADases is split across two node identities, with no note covering the triples-side spelling. |
| `NMN` has a shadow node | `nmn` (wiki 65 nb / triples 1 nb, wiki label `NMN (Nicotinamide Mononucleotide)`) vs `nicotinamide_mononucleotide` (wiki 5 nb / triples 29 nb, community AMPK) | The bridging metabolite of the whole page exists as two node identities with **inverted layer strengths** — the graph cannot tell that both are the same molecule. Since NMN is what links CD38 to SARM1, half the linkage runs through a node that does not know what it is. |
| Layer label drift on the same node id | The wiki layer writes `CD38 Inhibitor 78c` and `NMN (Nicotinamide Mononucleotide)`; the triples layer writes `CD38 inhibitor 78c` and `NMN` | Any layer join keyed on the rendered label silently drops these rows. Compounds are also indexed by prose rather than identifier, blocking systematic compound-level queries. |
| SARM1 inhibitors absent from triples | DSRM-3716 / GSK-428 / NB-4746 / CZ-48 are **wiki-only** (13 / 13 / 12 / 4 nb); Disulfiram is 12 wiki nb vs 1 triples nb | The typed layer cannot express SARM1 pharmacology as directed edges; it survives only as wiki co-mention. |
| `ML385` is nearly one-directional | 19 wiki neighbours, 1 triples neighbour, **0** incoming combined edges; community label differs by layer (wiki `Nrf2`, triples `NRF2`) | An NRF2 inhibitor wired *out* to CD38 with no reciprocal edge — a one-directional extraction artefact, plus a community-label drift. |
| `Microglia` / `Neuron` stubs | combined 3 stored degree each (union 76 / 29) | The CNS compartment map rests on nodes the typed layer barely resolves. |

---

## Sex divergence in NAD+ metabolism

From `_link/NAD+.md` — a substantial block with no page home until now.

- Whole-blood NAD+ **34.5 µmol/L (male) vs 31.3 (female)**; males decline progressively from age 60, females fluctuate without monotonic decline (Yang et al., *Front Endocrinol* 2022).
- NAD+/NADH ratio **1.33 (female) vs 1.09 (male)**, P<0.001; the gap narrows with biological age (Schwarzmann et al., *Biosci Rep* 2021).
- **PARP-1 as the male consumption engine**: PARP activity rises with age in male skin but *not* female skin; in males PARP inversely correlates with NAD+ (r=−0.639). **PARP-1 knockout protects males from ischemic brain injury but exacerbates damage in females** (McCullough et al. 2005).
- **Estrogen-mediated PARP-1 stabilisation is a hypothesis**, not direct proof — must be labelled as such on the page.
- **CD38 and ovarian NAD+ decline**: CD38 rises with reproductive aging in the ovary; CD38-KO mice have larger primordial follicle pools, higher ovarian NAD+ and increased fecundity; human CD38 mRNA is higher in follicular cells from women >35 vs <25 (Wang et al., *Nature Aging* 2023).
- **NMN lifespan, sex-split** (Kane et al., *bioRxiv* 2024): females **+8.5% median lifespan** (no metabolic improvement); males improved metabolic health but **no** lifespan extension. Metabolomics: greater Preiss–Handler metabolism in females, greater liver salvage metabolism in males.
- Women retain higher absolute SIRT1 and SIRT3 protein pools with age (pilot *Biology* 2025 — preliminary, must not be presented as established).

Implication: precursor dosing and gate choice may need sex stratification — males may benefit more from PARP-1 inhibition to slow consumption, females more from CD38 inhibition to prevent ovarian NAD+ decline.

---

## Open questions the vault itself flags

1. Does CD38 inhibition alter SARM1-dependent axon degeneration? **No study.**
2. Does combined CD38 + SARM1 inhibition synergize? **Only CD38 + PARP precedent.**
3. CD38 / SARM1 co-expression in microglia — graph nodes are stubs.
4. NR + CD38-inhibitor dosing: does NMN preservation cross the SARM1 activation threshold?
5. CD38 + PARP vs CD38 + SARM1 as the better dual pairing.
6. Which NMN ratio matters — plasma, tissue, or axonal compartment?
7. Does the CIPN convergence (both NADases reaching the same indication) reflect a shared causal axis or a co-mention artefact?

---

## Corrections carried forward from the July traces

| July claim | Current status |
|---|---|
| "No direct CD38 ↔ SARM1 edge exists" (bridging_gaps, 17 Jul) | **Superseded.** The edge now exists in both layers, with shared neighbours NAD+ and cADPR. |
| "CD38 degree 12 / 15" | Union degree **48** on the current build (wiki 42 nb, triples 16 nb). |
| "SARM1 degree 8 / 20" | Union degree **31** (wiki 31 nb, triples 4 nb). |
| "NMN linkage edge still AMBIGUOUS" | Mechanistically unchanged; still no study. |
| "Synergy edge absent" | Still absent — correctly so. |
| "Disulfiram, DSRM-3716, GSK-428 have NO graph node" | **Resolved.** All four exist as nodes; DSRM-3716, GSK-428, NB-4746 and CZ-48 are wiki-only, Disulfiram is in both layers. |
| "CD38 inhibition may sensitize to SARM1" (stated as a live risk of CD38 inhibition) | **Overstated.** The CD38-KO axotomy data is protective. The risk attaches to **precursor supplementation**, not CD38 inhibition. |
