---
type: entity
category: protein
aliases:
  - FOXO4
  - Forkhead box O4
  - Foxo4
  - AFX
database_ids:
  uniprot: P98177
  hgnc: HGNC:3822
relations:
  - predicate: deacetylated_by
    target: "[[SIRT1]]"
    sources:
      - PMID:15126506
created: 2026-07-03
updated: 2026-07-03
---

# FOXO4

**FOXO4** (Forkhead Box O4; also encoded by *FOXO4*, originally called AFX) is a mammalian member of the **Forkhead box class O (FOXO)** transcription factor family. Like its counterparts [[FOXO1]] and [[FOXO3a]], FOXO4 integrates extracellular signals, oxidative stress, and metabolic cues to regulate transcription of genes responsible for cell cycle progression, DNA repair, and senescence.

## Regulation by SIRT1

FOXO4 is directly targeted by sirtuin-mediated deacetylation in response to oxidative stress:

- **Peroxide Stress**: Treatment of cells with hydrogen peroxide ($H_2O_2$) induces acetylation of FOXO4, which inhibits its transcriptional activation potential.
- **SIRT1 Deacetylation**: [[SIRT1]] physically interacts with FOXO4 and deacetylates it. This deacetylation reverses the inhibitory effect of acetylation and **restores** FOXO4's transactivation potential.
- **Antioxidant Defenses**: Restored FOXO4 transcriptional activity enhances mammalian cellular defenses against oxidative stress by inducing expression of the growth arrest and DNA-damage-inducible protein **GADD45** ($\alpha$-isoform).
- **Caspase Inhibition**: In transformed cancer cells (but not untransformed epithelial cells), SIRT1 acting via FOXO4 has been shown to suppress the pro-apoptotic proteases **caspase-3** and **caspase-7**, promoting cancer cell survival.

## Connections

- [[SIRT1]] — deacetylates FOXO4, restoring its transactivation potential under oxidative stress
- [[FOXO1]] / [[FOXO3a]] — sister transcription factors also deacetylated by SIRT1
- [[notes/_link/DNA Repair]] — process enhanced by the SIRT1–FOXO4 axis via GADD45 expression

## Linking Summary

- New links added: [[SIRT1]], [[FOXO1]], [[FOXO3a]], [[notes/_link/DNA Repair]]
- Suggested new entity notes to create: [[GADD45]], [[Caspase-3]]
- Strong connections to strengthen: [[FOXO4]] ↔ [[SIRT1]]
