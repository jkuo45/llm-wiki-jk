---
title: CDK9
description: Cyclin-dependent kinase 9, the catalytic subunit of P-TEFb that phosphorylates RNA polymerase II CTD Ser2 and releases promoter-proximal pausing, and a transcriptional vulnerability in cancer.
protected: false
created: 2026-10-02
updated: 2026-10-02
tags: [kinase, enzyme, protein, gene, transcription]
aliases: [CDK9, P-TEFb, PITALRE, Cyclin-Dependent Kinase 9, Positive Transcription Elongation Factor B]
---

# CDK9

**CDK9** (cyclin-dependent kinase 9, formerly PITALRE) is a nuclear
serine/threonine kinase best known not as a cell-cycle kinase but as the
catalytic subunit of **P-TEFb** (positive transcription elongation factor b).
CDK9 controls the transition from transcriptional initiation to productive
elongation for most [[RNA Polymerase II]]-transcribed genes.

## Structure & Regulation

CDK9 is a typical CDK with an ATP site and an activation T-loop containing
**Thr186**. Activation requires:

1. **Phosphorylation of Thr186** by CDK7 (the CAK of the transcription
   machinery), and
2. **Heterodimerization** with a cyclin partner — cyclin T1 or T2, or cyclin K.

More than half of cellular P-TEFb is sequestered in an inactive complex,
which is why P-TEFb availability rather than CDK9 abundance is the limiting
variable. P-TEFb is recruited to specific loci by sequence-specific factors;
[[BRD4]] is the best-characterized such recruiter, and BRD4 and CDK9 inhibition
are therefore synergistic.

## Mechanism of Action

The great majority of RNA Pol II is paused 20–50 nucleotides after the
transcription start site. CDK9 phosphorylates three components of the paused
complex:

- the **Pol II C-terminal domain at Ser2**, and
- subunits of **DSIF** and **NELF**,

which causes NELF to dissociate and DSIF to switch into a
pro-elongation-competent state. With TFIIS and PAF, DSIF then stabilizes the
transcription funnel and relieves the tilted RNA-DNA hybrid. Loss of Ser2
phosphorylation also blocks co-transcriptional processing, including
splicing and 3'-end processing.

> [!info] CDK9 as a MYC amplifier
> CDK9 is recruited to super-enhancers at the MYC locus and drives MYC
> expression, and MYC in turn recruits P-TEFb back to its own targets —
> including MYC itself. Amplified MYC makes tumour transcription output
> acutely sensitive to CDK9 activity, which is the mechanistic basis for
> CDK9's cancer selectivity.

## Disease & Therapeutic Landscape

CDK9 is a transcriptional vulnerability in several haematological and solid
tumours, because it downregulates short-lived, high-turnover survival proteins
([[Mcl-1]], cyclin B1, p21) alongside generic proliferation.

- **Broad/pan-CDK inhibitors.** Dinaciclib inhibits CDK1/2/5/9; alvocidib
  (flavopiridol) was the first CDK inhibitor into the clinic and is a potent
  P-TEFb inhibitor. Dinaciclib has reached Phase III.
- **Selective CDK9 inhibitors.** Atuveciclib (BAY 1143572) was the first
  highly selective oral P-TEFb/CDK9 inhibitor to enter trials; AZD4573,
  VIP152, KB-0742 and JSH-150 followed. Most show activity in haematological
  malignancies. Atuveciclib's narrow therapeutic window with neutropenia drove
  the development of VIP152.
- **Degraders.** CDK9 PROTACs exploit the transcriptional dependency itself.

CDK9 inhibition can also destabilise transcription-coupled nuclear substrates:
in epithelioid hemangioendothelioma models, CDK9 inhibition mobilises
transcription-coupled nuclear bodies from the nucleus, leading to their
proteasomal degradation — an effect reproduced by selective AZD4573 but not by
CDK1/2/5 inhibitors.

Roscovitine (seliciclib) inhibits CDK2/7/9 among others and is documented in
the senolytic literature as an inducer of premature senescence, making CDK9
a node shared by the targeted-therapy and senolytic literatures.

## Documents

- [[_document_ - Small molecule compounds that induce cellular senescence|Small
  molecule compounds that induce cellular senescence]]
  - Lists roscovitine (seliciclib) as a CDK2/7/9 inhibitor among compounds
    that induce premature senescence.

## Connections

- [[RNA Polymerase II]] — the polymerase whose CTD Ser2 phosphorylation by
  CDK9 is the release step from promoter-proximal pause.
- [[Cyclin-Dependent Kinase]] — the kinase family CDK9 belongs to, positioned
  here as a transcriptional rather than cell-cycle member.
- [[Roscovitine]] — the classic multi-CDK inhibitor whose CDK9 activity
  contributes to its senescence-inducing and antiproliferative effects.
- [[CDK Inhibitor]] — the pharmacological class CDK9 inhibitors belong to.
- [[BRD4]] — the recruiter of P-TEFb to super-enhancers; combined inhibition
  is synergistic.
- [[MYC]] — the oncogene whose expression and target activation depend on
  CDK9, creating a positive-feedback dependency.
- [[Super-enhancer]] — the loci where P-TEFb is productively recruited in
  cancer cells.
- [[Mcl-1]] — the short-lived anti-apoptotic protein whose transcription CDK9
  inhibitors collapse, the main therapeutic mechanism.
- [[Apoptosis]] — the downstream fate when Mcl-1 falls after CDK9 inhibition.
- [[Senescence]] — an alternative outcome of CDK9 inhibition, as documented
  for roscovitine.
- [[Cancer Stem Cells]] — transcriptional dependencies are often enriched in
  the persister fraction, a recurring obstacle for CDK9 inhibitors.
- [[Transcription]] — the process-level framing of CDK9's function.

## Linking Summary

- New links added: [[RNA Polymerase II]], [[Cyclin-Dependent Kinase]],
  [[Roscovitine]], [[CDK Inhibitor]], [[BRD4]], [[MYC]], [[Super-enhancer]],
  [[Mcl-1]], [[Apoptosis]], [[Senescence]], [[Transcription]]
- Suggested notes to create: [[Dinaciclib]], [[Alvocidib]], [[Atuveciclib]],
  [[Cyclin T1]], [[CDK7]], [[DSIF]], [[NELF]], [[Promoter-Proximal Pausing]]
- Strong connections to strengthen: [[CDK9]] ↔ [[RNA Polymerase II]],
  [[CDK9]] ↔ [[BRD4]], [[CDK9]] ↔ [[Mcl-1]], [[CDK9]] ↔ [[Roscovitine]]