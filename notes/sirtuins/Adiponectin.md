---
type: entity
category: protein
aliases:
  - Adiponectin
  - ADIPOQ
  - Acrp30
database_ids:
  uniprot: Q15848
  hgnc: HGNC:13633
relations:
  - predicate: regulated_by
    target: "SIRT1"
    sources:
      - PMID:17090532
  - predicate: regulated_by
    target: "FOXO1"
    sources:
      - PMID:17090532
  - predicate: regulated_by
    target: "notes/_link/Caloric Restriction"
    sources:
      - PMID:17236764
created: 2026-07-03
updated: 2026-07-03
---

# Adiponectin

**Adiponectin** (encoded by the *ADIPOQ* gene; also known as Acrp30) is an adipocyte-derived hormone (adipokine) secreted primarily by white adipose tissue. It plays an essential role in regulating glucose homeostasis, lipid metabolism, energy expenditure, and insulin sensitivity. Unlike most adipokines, circulating adiponectin levels are inversely correlated with body fat percentage and are significantly reduced in obesity.

## Regulation by the SIRT1–FOXO1 Pathway

Adiponectin transcription and secretion are directly regulated by a nutrient-sensing sirtuin pathway:

- **Transcription Complex**: FOXO1 forms a transcription factor complex at the adiponectin promoter with **C/EBP$\alpha$ (CCAAT/enhancer-binding protein $\alpha$)**.
- **SIRT1 Deacetylation**: [[SIRT1]] deacetylates [[FoxO1]] on key lysine residues, which enhances its physical interaction with C/EBP$\alpha$, directly activating the adiponectin promoter and boosting its expression and secretion.
- **Caloric Restriction**: [[Caloric Restriction|Caloric Restriction]] increases circulating adiponectin levels in rodents and primates. This upregulation is mediated in part by SIRT1 activation in response to low nutrient availability.

## Physiological Functions

Adiponectin acts via its receptors (AdipoR1 and AdipoR2) to:
- Activate **AMPK (AMP-activated protein kinase)**, stimulating glucose uptake and fatty acid oxidation.
- Improve insulin sensitivity in skeletal muscle and liver, suppressing gluconeogenesis.
- Protect against the development of insulin resistance, Type 2 diabetes mellitus, and atherosclerosis.

## Connections

- [[SIRT1]] — deacetylates FOXO1, enhancing transcription of adiponectin
- [[FoxO1]] — forms a transcription complex with C/EBP$\alpha$ to drive adiponectin expression
- [[Caloric Restriction]] — increases circulating adiponectin levels

## Linking Summary

- New links added: [[SIRT1]], [[FoxO1]], [[Caloric Restriction]]
- Suggested new entity notes to create: [[AMPK]], [[Adiponectin Receptors]]
- Strong connections to strengthen: [[Adiponectin]] ↔ [[SIRT1]]
