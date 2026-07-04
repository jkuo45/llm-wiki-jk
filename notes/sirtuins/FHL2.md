---
type: entity
category: protein
aliases:
  - FHL2
  - Four and a half LIM domains protein 2
  - SLIM3
database_ids:
  uniprot: Q14192
  hgnc: HGNC:3703
relations:
  - predicate: regulates
    target: "[[SIRT1]]"
    sources:
      - "PMID:15692560"
  - predicate: regulates
    target: "[[notes/sirtuins/FOXO1|FOXO1]]"
    sources:
      - "PMID:15692560"
created: 2026-07-03
updated: 2026-07-03
---

# FHL2

## Overview
**FHL2** (Four and a Half LIM Domains Protein 2, also known as **SLIM3**) is a prominent member of the LIM-only protein family. Characterized by its unique cysteine-rich zinc-finger-like structures, FHL2 lacks intrinsic DNA-binding or enzymatic activity but acts as an exceptionally versatile molecular "adaptor" or scaffolding protein. Shuttling dynamically between the plasma membrane, focal adhesions, cytoplasm, and nucleus, FHL2 integrates cell-matrix adhesion signals directly with transcriptional complexes that govern cell proliferation, hypertrophy, and survival.

---

## Structure & Domains
FHL2 is composed of four and a half highly conserved **LIM domains**:
- **LIM Domain**: A double zinc-finger motif characterized by a specific spacing of cysteine and histidine residues ($CX_2C_17-19HX_2C_2CX_2C_16-20C$).
- **Scaffolding Function**: The LIM domains of FHL2 serve as versatile protein-protein interaction interfaces, allowing it to physically bind a vast array of partners, including integrins, structural proteins, kinases, nuclear receptors, and transcription factors (such as androgen receptor, β-catenin, and p53).

---

## Interplay with SIRT1 & FOXO1 in Cancer
FHL2 plays a key role in modulating cell survival pathways under oxidative or genotoxic stress, particularly in the context of prostate cancer:
- **FOXO1 Repression**: In prostate cancer cells, FHL2 binds directly to the forkhead transcription factor **[[notes/sirtuins/FOXO1|FOXO1]]** and the Class III deacetylase **[[SIRT1]]**, forming a ternary complex.
- **Enhanced Deacetylation**: Within this complex, FHL2 acts as a molecular matchmaker that dramatically enhances the physical interaction between SIRT1 and FOXO1, driving the SIRT1-dependent deacetylation of FOXO1.
- **Tumor Survival Advantage**: While deacetylation of FOXO transcription factors by SIRT1 usually shifts the cell toward stress resistance and cell cycle arrest, the specific FHL2-promoted deacetylation of FOXO1 in cancer cells suppresses its pro-apoptotic transactivation potential. This effect shields prostate cancer cells from apoptotic triggers during aging, promoting tumorigenesis and tumor cell survival in androgen-depleted states.

---

## Physiological Roles & Pathology

### Cardiac Homeostasis and Hypertrophy
FHL2 is highly expressed in the heart where it localizes to the sarcomeric Z-disc. It acts as an essential sensor of mechanical strain. Loss of FHL2 leads to exaggerated cardiac hypertrophy and failure in response to chronic pressure overload, demonstrating its protective role in normal myocardial physiology.

### Muscle and Bone Development
FHL2 regulates osteoblast differentiation and bone formation by interacting with and co-activating Wnt/β-catenin and bone morphogenetic protein (BMP) signaling pathways.

---

## Connections & Related Concepts
- **[[SIRT1]]**: Scaffolding by FHL2 accelerates SIRT1's ability to deacetylate target proteins like FOXO1.
- **[[notes/sirtuins/FOXO1|FOXO1]]**: Deacetylated and suppressed in cancer cells via FHL2 scaffolding, providing a cell survival advantage.
- **Androgen Receptor**: FHL2 acts as a co-activator of the androgen receptor, driving oncogenic programs in prostate cancer.
