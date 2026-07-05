---
type: entity
category: chemical
aliases:
  - Sirtinol
database_ids:
  pubchem: 5191
relations:
  - predicate: inhibits
    target: "SIRT1"
    sources:
      - s41392-022-01257-8
  - predicate: inhibits
    target: "SIRT2"
    sources:
      - s41392-022-01257-8
created: 2026-07-03
updated: 2026-07-03
---

# Sirtinol

**Sirtinol** is a cell-permeable, small-molecule dual inhibitor of **[[SIRT1]]** and **[[SIRT2]]** containing a characteristic $\beta$-naphthol moiety. It was identified in yeast-based high-throughput screens and is widely used to study the biological effects of sirtuin inhibition on cell survival, senescence, and epigenetic state in human cancer lines.

---

## Chemical Properties & Classification

- **Class**: $\beta$-naphthol derivative sirtuin inhibitor.
- **Target Selectivity**: Inhibits both [[SIRT1]] ($IC_{50} \approx 131\ \mu\text{M}$) and [[SIRT2]] ($IC_{50} \approx 38\ \mu\text{M}$ to $68\ \mu\text{M}$ in various assays; review states $IC_{50} = 3858\ \mu\text{M}$ under certain assay conditions).

---

## Pharmacodynamics & Pharmacokinetics

### Mechanism of Action
Sirtinol binds to the catalytic core of [[SIRT1]] and [[SIRT2]], preventing the enzyme from deacetylating histones and key non-histone target proteins. By blocking deacetylation, sirtinol maintains these proteins in a hyperacetylated state, modulating cellular stress and cell division.

### Pathological & Physiological Effects
- **Growth Arrest and Senescence**: Sirtinol treatment has been shown to induce senescence-like growth arrest in human lung cancer H1299 cells.
- **Apoptosis and Autophagic Cell Death**: In MCF-7 human breast cancer cells, sirtinol successfully triggers both apoptotic and autophagic programmed cell death.
- **Epigenetic Re-patterning**: Inhibits the removal of acetyl groups from histone lysine residues, altering chromatin compaction and promoting the transcription of previously silenced genes.

---

## Applications

- **Oncology Research**: Widely utilized in breast, lung, and prostate cancer research to evaluate the tumor-suppressive effects of dual SIRT1/2 inhibition.
- **Developmental Biology**: Used as a standard chemical inhibitor in nematodes (*C. elegans*) and Drosophila to probe sirtuin-mediated life extension and muscle protection.

---

## Connections & Related Entities

- **[[SIRT1]]** & **[[SIRT2]]** — direct sirtuin targets inhibited by sirtinol.
- **[[Splitomicin]]** — another $\beta$-naphthol-containing inhibitor found in the same yeast-based screens.
- **[[Salermide]]** — a potent synthetic analog of sirtinol designed to optimize anticancer efficacy.

---

## Linking Summary

- **New Links Added**: [[SIRT1]], [[SIRT2]], [[Splitomicin]], [[Salermide]]
- **Suggested New Notes to Create**: [[Naphthol Derivatives]], [[Senescence-Like Growth Arrest]]
- **Strong Connections to Strengthen**: [[Sirtinol]] ↔ [[SIRT1]], [[Sirtinol]] ↔ [[SIRT2]]
