---
type: entity
category: enzyme
aliases:
  - AceCS1
  - Acetyl-CoA Synthetase 1
  - ACSS2
database_ids:
  uniprot: Q9NR19
  hgnc: HGNC:15952
relations:
  - predicate: activated_by
    target: "[[SIRT1]]"
    sources:
      - PMID:16790548
  - predicate: regulated_by
    target: "[[notes/_link/Caloric Restriction]]"
    sources:
      - PMID:16790548
created: 2026-07-03
updated: 2026-07-03
---

# AceCS1

**AceCS1** (Acetyl-CoA Synthetase 1, cytoplasmic; also encoded by *ACSS2*) is a cytoplasmic enzyme that catalyzes the conversion of acetate and CoA into acetyl-CoA, consuming ATP. Cytoplasmic acetyl-CoA is primarily used as a precursor for fatty acid synthesis, cholesterol biosynthesis, and histone acetylation.

## Regulation by SIRT1

Like its mitochondrial counterpart [[AceCS2]], AceCS1 is post-translationally regulated by reversible lysine acetylation. It is a direct target of the nuclear/cytoplasmic sirtuin [[SIRT1]]:

- **Activation by Deacetylation**: [[SIRT1]] deacetylates AceCS1 on a key conserved lysine residue, which directly activates the enzyme.
- **Role in Fatty Acid Synthesis**: During nutrient-rich states, AceCS1 is active and provides acetyl-CoA for lipogenesis. Under fasting or [[notes/_link/Caloric Restriction|Caloric Restriction]] conditions, SIRT1-mediated deacetylation of AceCS1 helps coordinate the cellular shift away from de novo fatty acid synthesis and towards fatty acid oxidation and acetate utilization, preserving energy homeostasis.

## Connections

- [[SIRT1]] — cytoplasmic/nuclear sirtuin that deacetylates and activates AceCS1
- [[AceCS2]] — mitochondrial counterpart activated by SIRT3
- [[notes/_link/Caloric Restriction]] — physiological state regulating SIRT1/AceCS1 activity
- [[Acetyl-CoA]] — the enzymatic product of AceCS1

## Linking Summary

- New links added: [[SIRT1]], [[AceCS2]], [[notes/_link/Caloric Restriction]], [[Acetyl-CoA]]
- Suggested new entity notes to create: [[Lipogenesis]]
- Strong connections to strengthen: [[AceCS1]] ↔ [[SIRT1]]
