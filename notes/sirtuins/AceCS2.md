---
type: entity
category: enzyme
aliases:
  - AceCS2
  - Acetyl-CoA Synthetase 2
  - ACSS1
database_ids:
  uniprot: Q9NUB1
  hgnc: HGNC:15951
relations:
  - predicate: activated_by
    target: "[[SIRT3]]"
    sources:
      - PMID:16788062
  - predicate: regulated_by
    target: "[[notes/_link/Caloric Restriction]]"
    sources:
      - PMID:16788062
created: 2026-07-03
updated: 2026-07-03
---

# AceCS2

**AceCS2** (Acetyl-CoA Synthetase 2, mitochondrial; also encoded by *ACSS1*) is a crucial metabolic enzyme located in the mitochondrial matrix. It catalyzes the conversion of acetate and CoA into acetyl-CoA, consuming ATP. This reaction is fundamental for shuttling acetate carbon into the tricarboxylic acid (TCA) cycle for ATP generation and metabolic energy production.

## Regulation by SIRT3

AceCS2 activity is regulated post-translationally by reversible lysine acetylation. It is a primary target of the mitochondrial sirtuin [[SIRT3]]:

- **Activation by Deacetylation**: [[SIRT3]] deacetylates AceCS2 on a key conserved lysine residue, which directly activates the enzyme. Under normal conditions, AceCS2 is highly acetylated and inactive.
- **Caloric Restriction Adaptation**: During periods of food limitation or [[notes/_link/Caloric Restriction|Caloric Restriction]], mitochondrial NAD⁺ levels rise, inducing SIRT3 expression and activity. Activated SIRT3 deacetylates AceCS2, allowing the cell to efficiently metabolize acetate to acetyl-CoA, which enters the TCA cycle to maximize ATP yield.

## Evolutionary Context

The reversible acetylation of acetyl-CoA synthetases is a highly conserved metabolic regulatory system present from bacteria to mammals. In bacteria like *Salmonella typhimurium*, the sirtuin CobB deacetylates and activates acetyl-CoA synthetase (Acs), matching the mammalian SIRT3-AceCS2 and SIRT1-AceCS1 systems.

## Connections

- [[SIRT3]] — mitochondrial sirtuin that deacetylates and activates AceCS2
- [[SIRT1]] — deacetylates and activates AceCS1, the cytoplasmic isoform of acetyl-CoA synthetase
- [[notes/_link/Caloric Restriction]] — metabolic stress state that induces SIRT3/AceCS2 activation
- [[Acetyl-CoA]] — the enzymatic product of AceCS2

## Linking Summary

- New links added: [[SIRT3]], [[SIRT1]], [[notes/_link/Caloric Restriction]], [[Acetyl-CoA]]
- Suggested new entity notes to create: [[AceCS1]], [[CobB]]
- Strong connections to strengthen: [[AceCS2]] ↔ [[SIRT3]]
