---
type: entity
category: protein
aliases:
  - MEF2D
  - Myocyte-Specific Enhancer Factor 2D
database_ids:
  uniprot: Q14814
  hgnc: HGNC:6997
relations:
  - predicate: regulated_by
    target: "[[SIRT1]]"
    sources:
      - PMID:16166628
created: 2026-07-03
updated: 2026-07-03
---

# MEF2D

**MEF2D** (Myocyte-specific enhancer factor 2D) is a member of the MEF2 (MADS-box transcription enhancer factor 2) family of transcription factors. It plays critical roles in skeletal and cardiac muscle development, as well as in neuronal survival and differentiation. In skeletal muscle cells, MEF2 proteins cooperate with myogenic regulators like **MyoD** to activate myogenic genes and drive muscle differentiation.

## Post-Translational Regulation by SIRT1 and HDAC4

The activity of MEF2D during myogenesis is tightly regulated by a molecular switch at residue **Lys⁴²⁴**:

1. **Activation via Acetylation**: When MEF2D is acetylated on Lys⁴²⁴, it is transcriptionally active and drives muscle-specific gene expression.
2. **Deacetylation and Repression by SIRT1**: **SIRT1** interacts with MEF2D and deacetylates Lys⁴²⁴. This deacetylation suppresses MEF2D's transcriptional activity.
3. **HDAC4 and Sumoylation**: The histone deacetylase **HDAC4**, which possesses SUMO E3 ligase activity, forms a transcriptional repressor complex with **SIRT1**. Deacetylation of Lys⁴²⁴ by SIRT1 facilitates the subsequent sumoylation of MEF2D on the same residue by HDAC4. Sumoylation of MEF2D strongly represses its activity, resulting in the downregulation of muscle-specific genes and retardation of muscle differentiation.

## Connections

- [[SIRT1]] — deacetylates MEF2D at Lys⁴²⁴, promoting its sumoylation and inhibiting myogenesis
- [[Sirtuins]] — mammalian sirtuin family of proteins

## Linking Summary

- New links added: [[SIRT1]], [[Sirtuins]]
- Suggested new entity notes to create: [[MyoD]], [[HDAC4]], [[Sumoylation]], [[Myogenesis]]
- Strong connections to strengthen: [[MEF2D]] ↔ [[SIRT1]]
