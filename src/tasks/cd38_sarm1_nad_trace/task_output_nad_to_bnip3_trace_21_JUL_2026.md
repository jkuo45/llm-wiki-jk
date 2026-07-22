---
title: 'Graph Trace: NAD+ to BNIP3 — Metabolic Signaling to Mitophagy'
description: 'Graphify shortest-path trace of how NAD+ Biosynthesis connects to BNIP3/BNIP3L via Autophagy and HIF1A in the src/ knowledge graph (2,733 files, 62,276 edges, 355 communities).'
tags: [graph-trace, nad, bnip3, mitophagy, autophagy, hif1a, hypoxia, mitochondria, aging]
created: 2026-07-21
updated: 2026-07-22
---

# Graph Trace: NAD+ to BNIP3 — Metabolic Signaling to Mitophagy

**Question traced:** How does [[NAD+]] connect to [[BNIP3]]/[[BNIP3L]] in the knowledge graph?

**Method:** `nx.shortest_path` BFS on `graphify-out/graph.json` (26,333 nodes, 62,276 edges, 355 communities) after incremental update adding 28 new [[Mitophagy|mitophagy]]-related entity notes ([[BNIP3]], [[BNIP3L]], [[PINK1]], [[Parkin]], [[OPTN]], [[FUNDC1]], etc.).

---

## Path Summary

**Shortest path: [[NAD+ Biosynthesis]] → [[Autophagy]] → [[HIF1A]] → [[BNIP3L]]** (3 hops, 4 nodes)

**To canonical [[BNIP3]]:** [[NAD+ Biosynthesis]] → [[Autophagy]] → [[Ubiquitination]] → [[OPTN]] → [[Alzheimer's Disease]] → [[BNIP3]] (5 hops)

---

## Node Profiles

| Node | ID | Community | Degree | Source |
|---|---|---|---|---|
| [[NAD+ Biosynthesis]] | `notes_link_nad_biosynthesis` | 56 (NAD Metabolism) | 37 | `notes/_link/NAD+ Biosynthesis.md` |
| [[Autophagy]] | `autophagy` | 32 (Autophagy) | 347 | `notes/_link/Autophagy.md` (concept node) |
| [[HIF1A]] | `notes_link_hif1a` | 52 (Hypoxia & Mitophagy) | 15 | `notes/_link/HIF1A.md` |
| [[BNIP3L]] | `bnip3l` | 52 (Hypoxia & Mitophagy) | 2 | `notes/_link/BNIP3L.md` |
| [[BNIP3]] | `src_notes__link_bnip3_bnip3` | 163 (Mitophagy & Neurodegeneration) | 8 | `notes/_link/BNIP3.md` |

---

## Edge Details

### Edge 1: [[NAD+ Biosynthesis]] → [[Autophagy]]
- **Relation:** `references` (EXTRACTED, confidence: 1.0)
- **Source:** `notes/_link/NAD+ Biosynthesis.md`
- **Mechanism:** [[NAD+]] activates [[SIRT1]], which deacetylates and activates core autophagy machinery ([[Atg5]], [[Atg7]], [[LC3]]) and transcription factors ([[FOXO]], [[TFEB]]). NAD+ depletion suppresses autophagy; NAD+ precursor supplementation ([[NMN]], [[Nicotinamide Riboside|NR]]) restores it.

### Edge 2 (shared neighbors): [[NAD+ Biosynthesis]] ↔ [[HIF1A]]
- Both nodes share two common neighbors: **[[Autophagy]]** and **[[Mitohormesis]]**
- NAD+ → [[Mitohormesis]]: NAD+-dependent [[Sirtuins|sirtuins]] mediate mitochondrial stress responses
- [[HIF1A]] → [[Mitohormesis]]: [[Hypoxia]] response is a canonical [[Hormesis|hormetic]] stress pathway
- The shared [[Autophagy]] connection means both signals converge on the autophagic machinery

### Edge 3: [[HIF1A]] → [[Autophagy]]
- **Relation:** `references` (EXTRACTED, confidence: 1.0)
- **Source:** `notes/_link/HIF1A.md`
- **Mechanism:** [[HIF1A]] is a master transcription factor of the hypoxic response. Under [[Hypoxia]], HIF1A stabilization transactivates [[BNIP3]] and [[BNIP3L]], which are mitophagy receptors that recruit the autophagic machinery ([[LC3]], [[GABARAP]]) to damaged [[Mitochondria|mitochondria]].

### Edge 4: [[HIF1A]] → [[BNIP3L]]
- **Relation:** `references` (EXTRACTED, confidence: 1.0)
- **Source:** `notes/_link/HIF1A.md`
- **Mechanism:** [[HIF1A]] directly transactivates [[BNIP3L]] ([[BNIP3L|NIX]]), a mitophagy receptor essential for mitochondrial clearance. BNIP3L contains an [[LIR Motif|LIR (LC3-interacting region) motif]] that docks directly to [[LC3]] on the phagophore, tethering depolarized mitochondria to the autophagic machinery.

### Edge 5: [[BNIP3L]] → [[BNIP3]]
- **Relation:** `conceptually_related_to` (EXTRACTED, confidence: 1.0)
- **Source:** `notes/_link/BNIP3.md`
- Both are homologous mitophagy receptors of the [[Bcl-2 family]], sharing a C-terminal transmembrane domain and [[LIR Motif|LIR motif]]. BNIP3 is more strongly induced by [[HIF1A]]; [[BNIP3L|BNIP3L/NIX]] also functions in developmental mitophagy (erythroid maturation).

---

## Biological Narrative

### NAD+ → Autophagy
[[NAD+]] is a central metabolic cofactor. Its levels decline with age, driving the aging phenotype. NAD+ precursors ([[NMN]], [[Nicotinamide Riboside|NR]]) have been shown to activate [[SIRT1]], a NAD+-dependent deacetylase. [[SIRT1]] deacetylates:
- **[[FOXO3a]]** → activates autophagy-related genes ([[LC3]], [[BNIP3]])
- **[[TFEB]]** → promotes [[Lysosome|lysosomal]] biogenesis and autophagic flux
- **[[Atg5]], [[Atg7]], [[LC3]]** → directly activates core autophagy machinery

This establishes the NAD+/[[SIRT1]] axis as a key metabolic rheostat for autophagy.

### Autophagy → HIF1A
These two pathways are tightly interconnected through multiple shared regulators:
- **[[Mitohormesis]]** connects both (shared neighbor): mitochondrial stress elicits both [[HIF1A]] stabilization and autophagic responses
- **[[mTOR]]** and **[[AMPK]]** are master regulators of both [[Autophagy]] and [[HIF1A]] translation
- **[[Reactive Oxygen Species]]** produced under [[Hypoxia]] stabilize [[HIF1A]] and simultaneously activate [[Autophagy]]

### HIF1A → BNIP3/BNIP3L (Mitophagy)
[[HIF1A]] binds hypoxia-response elements (HREs) in the [[BNIP3]] and [[BNIP3L]] promoters. Upon stabilization under [[Hypoxia]] or mitochondrial dysfunction:
1. [[HIF1A|HIF1α]] dimerizes with [[ARNT|ARNT/HIF1β]]
2. The dimer binds HREs in [[BNIP3]]/[[BNIP3L]] promoters
3. BNIP3/BNIP3L proteins insert into the outer mitochondrial membrane
4. Their [[LIR Motif|LIR motifs]] recruit [[LC3]]/[[GABARAP]]-family proteins on the phagophore
5. The mitochondrion is engulfed and degraded by [[Mitophagy]]

### The NAD+ → BNIP3 Connection
The complete signaling axis:

```
NAD+ → SIRT1 → (FOXO/TFEB) → Autophagy machinery
                                      ↓
NAD+ → SIRT3/SIRT4 → Mitochondrial health → ROS/Hypoxia signaling
                                      ↓
                              HIF1A stabilization
                                      ↓
                            BNIP3/BNIP3L transactivation
                                      ↓
                              Mitophagy induction
```

This connects NAD+ levels (metabolic state sensor) to mitochondrial quality control ([[Mitophagy]]), explaining why NAD+ precursors improve mitochondrial health and why NAD+ decline with age leads to accumulation of dysfunctional mitochondria.

---

## Alternative Path: BNIP3 via OPTN

The path to [[BNIP3]] (not [[BNIP3L]]) is longer and more indirect:

```
NAD+ Biosynthesis → Autophagy → Ubiquitination → OPTN → Alzheimer's Disease → BNIP3
```

This reflects a different mitophagy route: **[[OPTN]] (optineurin)** is an autophagy receptor for ubiquitin-coated mitochondria, operating downstream of the [[PINK1]]/[[Parkin]] cascade. [[BNIP3]] in this path connects to [[Alzheimer's Disease]] because BNIP3-mediated mitophagy deficits contribute to neuronal dysfunction in neurodegeneration.

---

## Extended Network

### Key shared neighbors between [[NAD+ Biosynthesis|NAD+]] and [[HIF1A]]
- [[Autophagy]] — convergence point for both signals
- [[Mitohormesis]] — both participate in adaptive mitochondrial stress responses

### [[BNIP3L]] direct connections
- [[HIF1A]] — transcriptional activator (EXTRACTED)
- [[mTORC1]] — upstream regulator of protein synthesis and autophagy (EXTRACTED)
- [[BNIP3]] — homologous mitophagy receptor (conceptually_related_to)

### [[BNIP3]] direct connections
- [[HIF1A|HIF-1alpha]] — canonical transactivator
- [[Mitophagy]] — functional role
- [[LC3]] — physical interaction partner ([[LIR Motif|LIR motif]])
- [[Bcl-2 family]] — structural homology
- [[Apoptosis]] — BNIP3 can also trigger cell death
- [[Ischemia-reperfusion Injury]] — pathophysiological context
- [[Alzheimer's Disease]] — disease relevance

---

## Graph Statistics

- **Nodes in path:** 4 ([[NAD+ Biosynthesis]] → [[Autophagy]] → [[HIF1A]] → [[BNIP3L]])
- **Communities crossed:** 2 (56 → 32 → 52)
- **Total graph:** 26,333 nodes, 62,276 edges, 355 communities
- **Nodes added this update:** 28 new [[Mitophagy|mitophagy]] entity notes ([[BNIP3]], [[BNIP3L]], [[PINK1]], [[Parkin]], [[FUNDC1]], [[OPTN]], [[PHB2]], [[TOM20]], [[TRAK1]], etc.)

---

## Suggested Further Traces

1. **[[NAD+ Biosynthesis|NAD+]] → [[SIRT1]] → [[FOXO3a]] → [[BNIP3]]** — the direct transcriptional axis (inferred, not yet extracted)
2. **[[PINK1]]/[[Parkin]] → [[OPTN]]/[[NDP52]] → [[Ubiquitin]] → [[LC3]] → [[BNIP3]]** — the canonical mitophagy cascade
3. **[[HIF1A]] → [[BNIP3L]] → [[ERMIT]]** — erythroid mitophagy and its role in aging
4. **[[NAD+ Biosynthesis|NAD+]] → [[SIRT3]] → [[SOD2]] → [[Reactive Oxygen Species|ROS]] → [[HIF1A]]** — the mitochondrial redox arm

---

## Links to Explore

- [[NAD+ Biosynthesis]] — entity note
- [[Autophagy]] — entity note
- [[HIF1A]] — entity note
- [[BNIP3]] — entity note
- [[BNIP3L]] — entity note
- [[Mitophagy]] — entity note
- [[PINK1]] — upstream mitophagy kinase
- [[Parkin]] — E3 ubiquitin ligase for mitophagy
- [[OPTN]] — mitophagy receptor (ubiquitin-dependent)
- [[SIRT1]] — NAD+-dependent autophagy activator
- [[Mitohormesis]] — shared neighbor of NAD+ and HIF1A
- [[mTORC1]] — upstream regulator of BNIP3L

## Documents

This task output is a trace analysis derived from the following entity notes:
- [[NAD+ Biosynthesis]]
- [[Autophagy]]
- [[HIF1A]]
- [[BNIP3]]
- [[BNIP3L]]
- [[Mitohormesis]]
- [[Mitophagy]]

## Connections

- [[NAD+ Biosynthesis]] → [[Autophagy]] — NAD+/SIRT1 axis activates core autophagy machinery via FOXO, TFEB, Atg proteins
- [[Autophagy]] ↔ [[HIF1A]] — interconnected through Mitohormesis, mTOR, AMPK, and ROS signaling
- [[HIF1A]] → [[BNIP3L]] — HIF1A directly transactivates BNIP3L/NIX, a mitophagy receptor with LIR motif
- [[HIF1A]] → [[BNIP3]] — HIF1A transactivates BNIP3 under hypoxia; BNIP3 inserts into OMM and recruits LC3
- [[BNIP3L]] ↔ [[BNIP3]] — homologous Bcl-2 family mitophagy receptors; share C-terminal TM domain and LIR motif
- [[NAD+ Biosynthesis]] ↔ [[HIF1A]] — shared neighbors Autophagy and Mitohormesis connect metabolic and hypoxic signaling
- [[Ubiquitination]] → [[OPTN]] — OPTN recognizes ubiquitin-coated mitochondria downstream of PINK1/Parkin
- [[OPTN]] → [[Alzheimer's Disease]] — OPTN downregulated in AD via GSK-3β-mediated degradation

## Linking Summary

- New links added: [[Ubiquitination]], [[ARNT]], [[GABARAP]], [[GABARAPL1]], [[ERMIT]], [[SIRT3]], [[SIRT4]], [[Reactive Oxygen Species]], [[Hormesis]], [[Mitochondria]], [[Lysosome]], [[Sirtuins]], [[Bcl-2 family]], [[mTOR]], [[Ubiquitin]]
- Suggested new entity notes to create:
  - [[Ubiquitination]] — fundamental post-translational modification; substrate for OPTN in mitophagy
  - [[ARNT]] — HIF1A dimerization partner (HIF1β); essential for hypoxia response element binding
  - [[GABARAPL1]] — LC3/GABARAP family member; LIR motif binding partner for mitophagy receptors
  - [[ERMIT]] — Erythroid mitophagy; BNIP3L/NIX-dependent mitochondrial clearance in erythroid maturation
- Strong connections to strengthen:
  - [[NAD+ Biosynthesis]] ↔ [[Autophagy]] — detailed SIRT1/FOXO/TFEB mechanistic axis
  - [[HIF1A]] ↔ [[BNIP3]]/[[BNIP3L]] — direct transcriptional activation of mitophagy receptors
  - [[SIRT1]] ↔ [[Autophagy]] — SIRT1 deacetylates FOXO3a, TFEB, and core Atg machinery to drive autophagy
  - [[OPTN]] ↔ [[Ubiquitination]] — OPTN is the ubiquitin-binding mitophagy receptor in the PINK1/Parkin pathway
