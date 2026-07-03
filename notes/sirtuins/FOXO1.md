---
type: entity
category: protein
aliases:
  - FOXO1
  - Forkhead box O1
  - Foxo1
  - FKHR
database_ids:
  uniprot: Q12778
  hgnc: HGNC:3819
relations:
  - predicate: deacetylated_by
    target: "[[notes/sirtuins/SIRT1]]"
    sources:
      - PMID:14980222
  - predicate: regulates
    target: "[[Adiponectin]]"
    sources:
      - PMID:17090532
  - predicate: regulates
    target: "[[Insulin Secretion]]"
    sources:
      - PMID:16154098
  - predicate: involved_in
    target: "[[Prostate Cancer]]"
    sources:
      - PMID:16917544
created: 2026-07-02
updated: 2026-07-02
---

# FOXO1

**FOXO1** (Forkhead Box O1; also known as Foxo1 or FKHR) is a member of the **Forkhead box class O (FOXO)** family of transcription factors and a key regulatory target of [[notes/sirtuins/SIRT1]] in metabolism, cell survival, and cancer biology. FOXO1 integrates sirtuin-mediated deacetylation with insulin/IGF-1 signalling, adipogenesis, and pancreatic β-cell function.

## FOXO Family and Sirtuin Regulation

There are four FOXO transcription factors in mammals (FOXO1, FOXO3a, FOXO4, FOXO6). [[notes/sirtuins/SIRT1]] has been demonstrated to deacetylate three of them:

- **FOXO1** (this entry)
- **FOXO3a** — reduces apoptosis in neurons and fibroblasts; increases DNA repair and cell-cycle checkpoint gene expression
- **FOXO4** — hydrogen peroxide-induced acetylation inhibits transactivation; SIRT1 deacetylation reverses this, enhancing GADD45 expression and resistance to oxidative stress

## FOXO1–SIRT1 Interaction

The **LXXLL motif** of FOXO1 is indispensable for SIRT1 binding and FOXO1 transcriptional regulation. [[notes/sirtuins/SIRT1]] deacetylates FOXO1, modulating its activity in a context-dependent manner.

## Metabolic Functions

### Adiponectin Regulation

FOXO1 forms a transcriptional complex at the mouse adiponectin promoter with **C/EBPα (CCAAT/enhancer-binding protein α)**. [[notes/sirtuins/SIRT1]] deacetylates FOXO1 and **enhances its interaction with C/EBPα**, thereby **increasing adiponectin concentrations**. Elevated adiponectin:

- Regulates energy homeostasis and glucose/lipid metabolism
- Improves insulin sensitivity
- Lowers blood glucose in obese and diabetic mouse models
- Is increased by [[notes/_link/Caloric Restriction]] in rats (possibly mediated by SIRT1)

### Pancreatic β-Cell Function and Insulin Secretion

By deacetylating FOXO1, [[notes/sirtuins/SIRT1]] promotes activation and transcription of:

- **NeuroD** (neurogenic differentiation factor)
- **MafA** (a β-cell transcription factor)

These transcription factors **preserve insulin secretion** and promote β-cell survival _in vivo_.

## Cancer Contexts

### Prostate Cancer

- The LXXLL motif of FOXO1 mediates its transcriptional regulation and SIRT1 binding, with implications for prostate cancer.
- **FHL2 (four-and-a-half LIM domain protein 2)** enhances SIRT1-mediated FOXO1 deacetylation in prostate cancer cells. This effect has been proposed to **promote tumorigenesis** in response to increased stress during aging — one context where SIRT1/FOXO1 signalling may be oncogenic.

### Vascular Endothelial Growth Factor

FOXO1 is linked to VEGF-C upregulation in response to androgen depletion via the IGF-IR–FOXO pathway, connecting FOXO1 to tumour angiogenesis.

## _C. elegans_ Orthologue (DAF-16)

The _C. elegans_ FOXO orthologue **DAF-16** is required for _sir-2.1_-mediated lifespan extension — demonstrating that the sirtuin–FOXO axis is evolutionarily ancient. SIR-2.1 also associates with **14-3-3 proteins**, directing its interaction with DAF-16 in an insulin/IGF-1-independent manner under stress conditions.

## Connections

- [[notes/sirtuins/SIRT1]] — directly deacetylates FOXO1; primary regulatory relationship
- [[notes/_link/Caloric Restriction]] — SIRT1-mediated FOXO1 deacetylation is a downstream effect of CR
- [[Adiponectin]] — FOXO1/C/EBPα complex drives adiponectin expression; enhanced by SIRT1
- [[p53]] — parallel SIRT1 deacetylation target; both regulated in apoptosis/survival decisions
- [[DAF-16]] — _C. elegans_ orthologue; required for sirtuin-mediated lifespan extension
- [[FOXO3a]] — related family member also deacetylated by SIRT1

## Linking Summary

- New links added: [[notes/sirtuins/SIRT1]], [[notes/_link/Caloric Restriction]], [[p53]], [[DAF-16]], [[FOXO3a]], [[Adiponectin]]
- Suggested new entity notes to create: [[DAF-16]], [[FOXO3a]], [[FOXO4]], [[FHL2]], [[NeuroD]], [[MafA]], [[Adiponectin]]
- Strong connections to strengthen: [[FOXO1]] ↔ [[notes/sirtuins/SIRT1]], [[FOXO1]] ↔ [[notes/_link/Caloric Restriction]]
