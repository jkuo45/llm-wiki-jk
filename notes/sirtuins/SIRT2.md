---
type: entity
category: protein
aliases:
  - Sirtuin 2
  - tubulin deacetylase
  - SIRT2 deacetylase
database_ids:
  uniprot: Q8IXJ6
  hgnc: HGNC:14930
relations:
  - predicate: deacetylates
    target: "[[alpha-tubulin]]"
    sources:
      - PMID:12620231
  - predicate: deacetylates
    target: "[[Histone H4 Lys16]]"
    sources:
      - PMID:16909107
  - predicate: associated_with
    target: "[[Glioma]]"
    sources:
      - PMID:12963026
  - predicate: interacts_with
    target: "[[HOXA10]]"
    sources:
      - PMID:15213244
  - predicate: regulated_by
    target: "[[CDC14B]]"
    sources:
      - PMID:12697818
created: 2026-07-02
updated: 2026-07-02
---

# SIRT2

**SIRT2** (Sirtuin 2) is a mammalian sirtuin classified in phylogenetic **Class Ib** alongside yeast Hst2, fly D.mel2, and sirtuins from other fungi and protozoa. It is the primary **cytoplasmic sirtuin** and functions as an NAD⁺-dependent tubulin deacetylase, with additional roles in cell cycle regulation, chromosomal integrity, and brain tumour suppression.

## Enzymatic Activity

SIRT2 exhibits both:

- **NAD⁺-dependent deacetylase activity** (primary characterised activity; see [[NAD+]])
- **Mono-ADP-ribosyl transferase activity** (lower efficiency)

Its most characterised substrate is **α-tubulin**, making it the first identified tubulin deacetylase. It also deacetylates **Lys¹⁶ of histone H4**, contributing to chromatin condensation during mitosis. The deacetylation reaction produces [[OAADPr]] as a by-product.

## Subcellular Localisation

SIRT2 is predominantly **cytoplasmic** under normal conditions. During mitosis, it translocates from the cytoplasm to the nucleus, where it acts on histone H4-Lys¹⁶ to facilitate chromatin condensation during the G2/M transition.

## Cell Cycle Regulation

SIRT2 expression increases dramatically during **mitosis** and is hyperphosphorylated during the G2/M phase transition. Regulation:

- The phosphatase **CDC14B** dephosphorylates SIRT2, triggering its ubiquitination and degradation by the **26S proteasome**, promoting exit from mitosis.
- SIRT2 deacetylates Lys¹⁶ of histone H4, leading to condensed chromatin formation during G2/M.
- Exogenous SIRT2 blocks chromosomal condensation and hyperploidy in glioma cell lines, accompanied by cyclin B/cdc2 activity during mitotic stress.
- Proposed as a **novel metaphase checkpoint protein** that promotes genomic integrity and inhibits uncontrolled proliferation of transformed cells.

## Brain Cancer (Glioma)

SIRT2 acts as a putative **tumour suppressor** in gliomas:

- Resides in a genomic region frequently deleted in human gliomas.
- Ectopic SIRT2 expression in glioma-derived cell lines markedly reduces colony formation _in vitro_.
- SIRT2 inactivation may be a cause of gliomas; activation may protect against or treat these tumours.

## Nervous System

SIRT2 is expressed in **oligodendrocytes** and **Schwann cells** that form myelin sheaths covering axons (distinct from [[SIRT1]], which localises to neuronal bodies). It is also expressed in olfactory sensory neurons. Its expression pattern resembles the _Nf155_ gene (encoding the 155 kDa isoform of neurofascin), suggesting a role in **axonal myelinisation**. SIRT2 and HDAC6 are both microtubule deacetylases in the nervous system.

## Development

SIRT2 interacts with **HOXA10**, an evolutionarily conserved homeobox transcription factor critical for cell-type determination during embryogenesis. This suggests a developmental role for SIRT2 in cell-fate specification.

## Ion Channel Regulation

Through the generation of [[OAADPr]], SIRT2 (along with [[SIRT3]]) may regulate the **TRPM2** (transient receptor potential melastatin-related channel 2) non-selective cation channel. Decreasing SIRT2 expression reduces OAADPr-mediated TRPM2 activation and cell death.

## Connections

- [[SIRT1]] — fellow Class I sirtuin; both have deacetylase and ADP-ribosyl transferase activities
- [[SIRT3]] — also produces OAADPr; both implicated in TRPM2 channel regulation
- [[NAD+]] — required co-substrate for deacetylase activity
- [[OAADPr]] — by-product of sirtuin-mediated deacetylation
- [[Glioma]] — SIRT2 deletion is associated with glioma formation
- [[HOXA10]] — developmental transcription factor target

## Linking Summary

- New links added: [[NAD+]], [[OAADPr]], [[Glioma]], [[HOXA10]], [[SIRT1]], [[SIRT3]], [[TRPM2]]
- Suggested new entity notes to create: [[TRPM2]], [[CDC14B]], [[Neurofascin][[SIRT2]]g connections t[[SIRT2]]hen: [[SIRT2]] ↔ [[Glioma]], [[SIRT2]] ↔ [[OAADPr]]

# SIRT2

SIRT2 is a predominantly cytoplasmic sirtuin with both deacetylase and mono-ADP-ribosyl transferase activity. It is involved in regulating cell cycle, cell motility, tubulin acetylation, and is overexpressed in various cancers and [[Neurodegeneration|neurodegenerative disorders]].

### Linking Summary:

- New links added: [[NAD+]], [[Neurodegeneration]]
- Suggested new entity notes to create:
- Strong connections to strengthen: [[SIRT2]] ↔ [[NAD+]], [[SIRT2]] ↔ [[Neurodegeneration]]

# SIRT2

SIRT2 (Sirtuin 2) is a NAD+-dependent deacetylase localized primarily in the cytosol and nucleus. It is involved in cell cycle regulation, adipose tissue development and functionality, blood glucose homeostasis, and the modulation of peripheral myelination.

### Linking Summary:

- New links added: [[NAD+]], [[Sirtuins]]
- Suggested new entity notes to create:
- Strong connections to strengthen: [[notes/_link/SIRT2]] ↔ [[Cell Cycle]]
