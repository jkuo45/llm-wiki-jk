---
type: entity
category: protein
aliases:
  - AR
  - NR3C4
  - Dihydrotestosterone receptor
  - Testosterone receptor
database_ids:
  uniprot: P10275
  hgnc: HGNC:644
relations:
  - predicate: deacetylated_by
    target: "[[SIRT1]]"
    sources:
      - Dai 2007
      - Fu 2006
  - predicate: repressed_by
    target: "[[SIRT1]]"
    sources:
      - Dai 2007
created: 2026-07-04
updated: 2026-07-04
---

# Androgen receptor

**Androgen receptor** (AR, NR3C4) is a steroid hormone-activated nuclear receptor transcription factor that mediates the physiological effects of androgens (testosterone and dihydrotestosterone). It controls the expression of genes essential for male sexual development, spermatogenesis, and prostate homeostasis.

## Structure and Domains

AR consists of an N-terminal transactivation domain (NTD), a central DNA-binding domain (DBD) with two zinc fingers, a hinge region containing the nuclear localization signal, and a C-terminal ligand-binding domain (LBD). The NTD harbors key acetylation sites, including [[Lys630]], which modulates transcriptional activity.

## Repression by SIRT1

[[SIRT1]] physically interacts with AR and deacetylates it at [[Lys630]], repressing its transcriptional activity in a NAD+-dependent manner. Hyperacetylation of AR (e.g., through SIRT1 inhibition or NAD+ depletion) enhances recruitment of coactivators such as p300 and potentiates androgen-responsive gene expression. In [[Prostate Cancer|prostate cancer]], this SIRT1-mediated deacetylation suppresses oncogenic AR signalling, cell proliferation, and tumor progression. The SIRT1–AR regulatory axis is therefore a target for chemopreventive and therapeutic strategies.

## Clinical Implications

Anti-androgen therapies (e.g., enzalutamide, abiraterone) are first-line treatments for advanced prostate cancer. Agents that upregulate SIRT1 activity or NAD+ bioavailability may complement these approaches by dampening AR transactivation at a post-translational level.

## Connections

- [[SIRT1]] — Deacetylates AR at Lys630, repressing AR-dependent transcription
- [[Prostate Cancer]] — Malignancy driven by AR signalling; SIRT1-mediated AR deacetylation suppresses tumour progression
- [[Lys630]] — Critical acetylation site on AR targeted by SIRT1
- [[NAD+]] — Required co-substrate for SIRT1 deacetylase activity
- [[p300]] — Transcriptional coactivator that acetylates AR; antagonized by SIRT1
- [[Resveratrol]] — SIRT1 activator shown to suppress AR activity in prostate cancer cell lines

## Linking Summary

- New links added: [[Androgen receptor]], [[Lys630]], [[Prostate Cancer]], [[p300]]
- Suggested new entity notes to create: [[Enzalutamide]], [[Abiraterone]], [[CBP/p300]]
- Strong connections to strengthen: [[SIRT1]] ↔ [[Androgen receptor]]
