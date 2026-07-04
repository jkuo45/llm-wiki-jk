---
type: entity
category: protein
aliases:
  - ING1
  - Inhibitor of Growth Protein 1
database_ids:
  uniprot: Q9UK53
  hgnc: HGNC:6062
relations:
  - predicate: interacts_with
    target: "[[SIRT1]]"
    sources:
      - PMID:16269335
  - predicate: inhibits
    target: "[[SIRT1]]"
    sources:
      - PMID:16269335
created: 2026-07-04
updated: 2026-07-04
---

# p33ING1b

**p33ING1b** (Inhibitor of Growth Protein 1, encoded by *ING1*) is a **tumor suppressor protein** that functions as a reader of the histone H3 trimethylation mark H3K4me3 through its plant homeodomain (PHD) finger. It is involved in chromatin remodeling, DNA repair, apoptosis, and cellular senescence.

## SIRT1 Interaction and p53 Regulation

p33ING1b physically interacts with [[SIRT1]] and **inhibits SIRT1's ability to deacetylate [[p53]]**. By blocking SIRT1-mediated p53 deacetylation, p33ING1b maintains p53 in an acetylated, transcriptionally active state.

### Hepatocellular Carcinoma Context

In hepatocarcinoma (HepG2) cells, the p33ING1b–SIRT1 interaction negatively regulates transcription of **alpha-fetoprotein (AFP)**, a diagnostic biomarker for hepatocellular carcinoma. Active (acetylated) p53 represses AFP transcription, while SIRT1-mediated deacetylation of p53 relieves this repression. p33ING1b therefore acts as a negative regulator of AFP expression by keeping p53 active via SIRT1 inhibition, establishing a **p33ING1b–SIRT1–p53–AFP regulatory axis**.

## Connections

- [[SIRT1]] — p33ING1b binds to and inhibits SIRT1 deacetylase activity toward p53
- [[p53]] — downstream target of the p33ING1b–SIRT1 interaction
- [[notes/_link/Hepatocellular Carcinoma]] — disease context for the p33ING1b-SIRT1-p53-AFP axis

## Linking Summary

- New links added: [[SIRT1]], [[p53]], [[notes/_link/Hepatocellular Carcinoma]]
- Suggested new entity notes to create: [[ING1 Gene]], [[AFP (Alpha-Fetoprotein)]], [[PHD Finger]]
- Strong connections to strengthen: [[p33ING1b]] ↔ [[SIRT1]], [[p33ING1b]] ↔ [[p53]]
