---
type: entity
category: protein
aliases:
  - Sirtuin 7
  - nucleolar sirtuin
  - SIRT7 RNA Pol I activator
database_ids:
  uniprot: Q9NRC8
  hgnc: HGNC:14935
relations:
  - predicate: activates
    target: "RNA Polymerase I"
    sources:
      - PMID:16618798
  - predicate: localises_to
    target: "Nucleolus"
    sources:
      - PMID:16079181
  - predicate: associated_with
    target: "Breast Cancer"
    sources:
      - PMID:17003781
  - predicate: overexpressed_in
    target: "Thyroid Carcinoma"
    sources:
      - PMID:11953824
      - PMID:12454781
  - predicate: interacts_with
    target: "Histone H2A"
    sources:
      - PMID:16618798
  - predicate: interacts_with
    target: "Histone H2B"
    sources:
      - PMID:16618798
  - predicate: associated_with
    target: "TAFI68"
    sources:
      - Michan 2007
created: 2026-07-02
updated: 2026-07-05
---

# SIRT7

**SIRT7** (Sirtuin 7) is a **nuclear/nucleolar sirtuin** classified in phylogenetic **Class IVb** — the same class as [[SIRT6]] (Class IVa). Class IV sirtuins are absent from prokaryotes but broadly distributed in metazoans, plants, and vertebrates. SIRT7 is unique among mammalian sirtuins for its **nucleolar localisation** and its role as an **activator of RNA Polymerase I (RNA Pol I)** transcription.

## Enzymatic Activity

SIRT7 possesses NAD⁺-dependent deacetylase activity with high selectivity for **histone H3 at lysine 18 (H3K18ac)**. Deacetylation of H3K18ac promotes a repressive chromatin state at specific genomic loci, including tumour suppressor genes. SIRT7 also exhibits desuccinylase activity, broadening its substrate repertoire. The reactions consume [[NAD+]] and produce nicotinamide and [[OAADPr]].

## Subcellular Localisation

**Nucleolar** — SIRT7 localises to the **nucleolus**, where it associates with:

- The promoter and transcribed regions of the **rDNA locus**
- The RNA Pol I transcriptional machinery
- **Histones H2A and H2B**

During the cell cycle, SIRT7 dynamically redistributes between the nucleolus and the nucleoplasm, peaking in the G1 phase to support ribosome biogenesis.

## RNA Polymerase I Transcription

Unlike [[SIRT1]] (which represses RNA Pol I-mediated transcription by deacetylating [[TAFI68]]), SIRT7 **activates** RNA Pol I transcription and promotes expression of **ribosomal RNA genes**. SIRT7 is found as part of the RNA Pol I transcriptional machinery, making it a positive regulator of ribosome biogenesis and protein synthesis capacity. This function is critical for cell proliferation and growth.

## Heterochromatin Stabilisation

SIRT7 deacetylates H3K18ac at pericentric heterochromatin regions, maintaining genomic stability by suppressing the transcription of repetitive elements. Loss of SIRT7 leads to heterochromatin destabilisation, DNA damage, and premature cellular senescence.

## Cell Cycle Regulation

SIRT7 levels oscillate during the cell cycle, with peak expression in G1 phase. SIRT7 promotes cell cycle progression by enhancing ribosome biogenesis and by repressing the CDKN1A/p21 tumour suppressor via H3K18 deacetylation at its promoter. SIRT7 depletion causes G1 cell cycle arrest.

## Cancer Associations

SIRT7 exhibits context-dependent oncological roles:

- **Breast Cancer**: SIRT7 levels increase significantly in breast cancer; along with [[SIRT3]], SIRT7 is highly transcribed in **lymph-node positive breast biopsies**.
- **Thyroid Carcinoma**: SIRT7 is **overexpressed** in human thyroid carcinoma cell lines and tissues.
- **Hepatocellular Carcinoma**: SIRT7 promotes HCC growth by enhancing ribosome biogenesis and suppressing p53 activity.
- **Dual Role**: SIRT7 can act as either a tumour promoter or suppressor depending on cellular context. It promotes proliferation in most cancers but may suppress metastasis through H3K18 deacetylation at EMT-related gene promoters.

## Cardiac Protection

SIRT7 protects against cardiac hypertrophy and fibrosis by deacetylating [[GATA4]] and suppressing its pro-hypertrophic transcriptional activity. SIRT7 knockout mice develop progressive cardiac dysfunction, fibrosis, and inflammatory infiltration.

## Counteracting Cellular Aging

SIRT7 expression declines with age in multiple tissues. Overexpression of SIRT7 extends the replicative lifespan of primary human cells by maintaining rDNA stability, preventing heterochromatin loss, and reducing mitochondrial dysfunction. SIRT7 deficiency accelerates cellular senescence through p53 hyperactivation and increased DNA damage signalling.

## Evolutionary Context

SIRT7 belongs to **Class IVb**, which:

- Is absent from prokaryotes
- Broadly distributed in metazoans, plants, and vertebrates
- Evolved later than Class II and Class III sirtuins
- Groups with [[SIRT6]] (Class IVa) as the most recently evolved mammalian sirtuin subclass

## Connections

- [[SIRT6]] — fellow Class IV sirtuin; both nuclear; SIRT6 is heterochromatic while SIRT7 is nucleolar
- [[SIRT1]] — both regulate RNA Pol I transcription but in opposite directions (SIRT1 represses via [[TAFI68]]; SIRT7 activates)
- [[RNA Polymerase I]] — SIRT7 activates RNA Pol I-mediated rDNA transcription
- [[Breast Cancer]] — SIRT7 is overexpressed in lymph-node positive breast cancer
- [[GATA4]] — deacetylated by SIRT7 to suppress cardiac hypertrophy
- [[p53]] — SIRT7 suppresses p53 by promoting ribosome biogenesis and MDM2-mediated degradation
- [[NAD+]] — required co-substrate for enzymatic activity

## Linking Summary

- New links added: [[SIRT6]], [[SIRT1]], [[SIRT3]], [[RNA Polymerase I]], [[Breast Cancer]], [[NAD+]], [[TAFI68]], [[GATA4]], [[p53]]
- Suggested new entity notes to create: [[RNA Polymerase I]], [[rDNA]], [[Ribosome Biogenesis]], [[Thyroid Carcinoma]], [[H3K18ac]]
- Strong connections to strengthen: [[SIRT7]] ↔ [[RNA Polymerase I]], [[SIRT7]] ↔ [[Breast Cancer]], [[SIRT7]] ↔ [[GATA4]]
