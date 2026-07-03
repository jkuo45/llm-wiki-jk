---
type: entity
category: protein
aliases:
  - FOXO3
  - FOXO3a
  - Forkhead box O3
  - Foxo3a
database_ids:
  uniprot: O43524
  hgnc: HGNC:3821
relations:
  - predicate: deacetylated_by
    target: "[[SIRT1]]"
    sources:
      - PMID:14976264
      - PMID:14980222
  - predicate: regulates
    target: "[[Apoptosis]]"
    sources:
      - PMID:14976264
created: 2026-07-03
updated: 2026-07-03
---

# FOXO3a

**FOXO3a** (Forkhead Box O3; also encoded by *FOXO3*) is an evolutionarily conserved member of the **Forkhead box class O (FOXO)** transcription factor family. It acts as a central integrator of growth factor signaling, oxidative stress, and longevity pathways. In mammals, FOXO3a regulates genes involved in cell cycle arrest, DNA repair, apoptosis, and reactive oxygen species (ROS) detoxification.

## Regulation by SIRT1

Under oxidative stress or DNA damage, FOXO3a is post-translationally regulated by the nuclear sirtuin [[SIRT1]]:

- **Deacetylation**: [[SIRT1]] binds physically to FOXO3a and deacetylates key lysine residues.
- **Shift in Transcriptional Program**: SIRT1-mediated deacetylation of FOXO3a dualistically modulates its transcriptional activities. It suppresses FOXO3a's ability to induce pro-apoptotic genes (such as *Bim*), thereby inhibiting apoptosis and cell death. Simultaneously, deacetylation **amplifies** FOXO3a's ability to induce cell cycle arrest and stress-resistance genes (such as *p27Kip1*, *GADD45*, and *MnSOD*).
- **Cell Survival**: This sirtuin-mediated shift allows cells to survive oxidative stress by repairing DNA damage and neutralizing ROS instead of undergoing apoptosis.

## Connections

- [[SIRT1]] — deacetylates FOXO3a to shift its transcriptional output from apoptosis to stress survival
- [[FOXO1]] — sister FOXO transcription factor regulated by SIRT1
- [[Apoptosis]] — process inhibited in a cell-context dependent manner by the SIRT1–FOXO3a axis

## Linking Summary

- New links added: [[SIRT1]], [[FOXO1]], [[Apoptosis]]
- Suggested new entity notes to create: [[GADD45]], [[MnSOD]]
- Strong connections to strengthen: [[FOXO3a]] ↔ [[SIRT1]]
