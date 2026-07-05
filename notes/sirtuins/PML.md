---
type: entity
category: protein
aliases:
  - TRIM19
  - Promyelocytic Leukemia Protein
  - Tripartite Motif-Containing Protein 19
database_ids:
  uniprot: P29590
  hgnc: HGNC:9113
relations:
  - predicate: associated_with
    target: "SIRT1"
    sources:
      - PMID:12006491
  - predicate: regulates
    target: "p53"
    sources:
      - PMID:12006491
created: 2026-07-03
updated: 2026-07-03
---

# PML

**PML** (Promyelocytic Leukemia protein, also known as **TRIM19**) is a tripartite motif-containing protein that functions as the essential scaffold for **PML nuclear bodies (PML-NBs)**. PML-NBs are dynamic subnuclear macromolecular structures involved in a wide array of vital cellular processes, including tumor suppression, DNA damage response, apoptosis, and cellular senescence.

## Role in Senescence and the PML–SIRT1–p53 Axis

PML-NBs recruit specific proteins to regulate cellular aging and tumor suppression:

1. **Recruitment of p53 and SIRT1**: Upon oncogenic stress or upregulation of the specific PML isoform **PML-IV**, both **p53** and **SIRT1** are recruited into PML nuclear bodies.
2. **Regulation of Senescence**: Within these subnuclear bodies, **SIRT1** physically associates with PML and deacetylates **p53**. This deacetylation suppresses p53-mediated transactivation and pro-apoptotic signaling.
3. **Protection from Senescence**: By deacetylating p53, SIRT1 rescues primary mouse embryonic fibroblasts from PML-mediated premature cellular senescence and growth arrest, allowing cell survival under stress.

## Connections

- [[SIRT1]] — colocalizes with PML in nuclear bodies to deacetylate and suppress p53
- [[p53]] — target of PML nuclear body recruitment and SIRT1-mediated deacetylation
- [[HIC1]] — transcript repressor of SIRT1; also involved in the p53 tumor suppressive feedback loop

## Linking Summary

- New links added: [[SIRT1]], [[p53]], [[HIC1]]
- Suggested new entity notes to create: [[PML Nuclear Bodies]], [[Cellular Senescence]], [[PML-IV]]
- Strong connections to strengthen: [[PML]] ↔ [[SIRT1]], [[PML]] ↔ [[p53]]
