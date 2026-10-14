---
title: RNA Polymerase II
description: RNA polymerase II is the twelve-subunit eukaryotic enzyme that transcribes all protein-coding genes and most non-coding RNAs; its largest-subunit C-terminal domain is a heptad-repeat landing pad whose phosphorylation pattern coordinates capping, elongation, splicing and termination.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags:
  - protein
  - enzyme
  - transcription
  - chromatin
aliases:
  - Pol II
  - RNAPII
  - RNA Pol II
  - RPB1
---

# RNA Polymerase II

**RNA polymerase II (Pol II)** is the DNA-dependent RNA polymerase of eukaryotic protein-coding genes — it transcribes all protein-coding genes plus most non-coding RNAs, including microRNAs and many long non-coding RNAs. Structurally it is a 12-subunit enzyme analogous to bacterial RNAP but substantially larger (Pol I makes the large rRNAs, Pol III the tRNAs and 5S rRNA; Pol II makes mRNA and snRNA/snoRNA).

## The C-Terminal Domain

The distinguishing feature of Pol II is the **C-terminal domain (CTD)** of its largest subunit, RPB1: an unstructured tail of **YSPTSPS heptad repeats** — 26 repeats in *Saccharomyces cerevisiae*, 52 in humans.

> [!info] The CTD is a phosphorylation-code landing pad
> Because repeats are identical, *when* a residue is modified encodes *what* is recruited. Different kinases write and different readers read the code:
>
> - **CDK7** (TFIIH kinase) phosphorylates **Ser5 and Ser7** at promoter clearance → recruits 7-methylguanosine capping enzymes.
> - **CDK9** (P-TEFb) phosphorylates **Ser2** during elongation → recruits elongation, RNA-processing and chromatin-modifying factors, including the Set2 methyltransferase that deposits [[H3K36me3]] over gene bodies.
> - **CDK12** also contributes to Ser2 phosphorylation; **Rtr1/Ssu72** remove Ser5-P early and late in elongation, and **Fcp1** dephosphorylates Ser2-P near termination, regenerating hypophosphorylated Pol II for reuse.

## Transcription Cycle

1. **Initiation** — general transcription factors (TFIID, TFIIB, TFIIE, TFIIF, TFIIH) and the coactivator complex Mediator assemble a pre-initiation complex; TFIIB and TFIIH melt the promoter DNA, Mediator is released, and promoter escape occurs.
2. **Promoter-proximal pausing** — DSIF and NELF stall Pol II ~20–60 bp downstream of the transcription start site in roughly a third of human and fly genes. This is a *regulatory checkpoint* that buffers transcriptional noise and enables synchronous bursts of gene activation; CDK9 phosphorylation of the CTD and of NELF/DSIF releases the pause.
3. **Elongation** — Ser2/Ser5-phosphorylated CTD recruits capping, splicing, 3'-end processing, chromatin-remodelling and histone-modifying complexes, so RNA processing occurs co-transcriptionally.
4. **Termination** — polyadenylation signals lead to cleavage, NELF-dependent torpedo termination and All1/Nrd1-Nab3-mediated degradation of the transcript and release of Pol II.

## Regulation & Disease Relevance

- Elongation speed is a determinant of alternative splicing and of co-transcriptional folding, linking Pol II kinetics to protein isoform output.
- Chromatin sets the pause barrier: [[Polycomb Group Proteins|Polycomb complexes]] block elongation by ubiquitinating H2AK119, and [[H3K36me3]] suppresses cryptic initiation within gene bodies.
- [[HIV-1]] exploits the pause: the viral Tat protein sequesters CDK9/P-TEFb via Cyclin T1 to release paused Pol II from the integrated proviral promoter — which is why CDK9 inhibitors were explored for antiviral therapy.
- Inhibitors targeting the pause-release machinery (CDK7 inhibitor THZ1, CDK9 inhibitor PHA-767491) shift Pol II distribution toward promoter-proximal retention and are in oncology development, including acute myeloid leukaemia.
- A distinct non-coding Pol II transcript, **TERRA**, is the main subject of the vault's [[Telomere]] notes and links Pol II to telomere maintenance.

## Documents

- (no document notes yet)

## Connections

- [[RNA Polymerase I]] — The sibling nuclear polymerase; both use heptad-repeat CTDs and shared initiation factors such as TFIIH, making them a common teaching pairing.
- [[Gene Expression]] — Pol II is the effector of gene expression, and promoter-proximal pausing is a level at which expression is regulated.
- [[Polycomb Group Proteins]] — Polycomb-mediated H2A ubiquitination and H3K27me3 establish a chromatin state that Pol II must traverse, or that blocks its elongation.
- [[H3K36me3]] — Deposited co-transcriptionally by Set2 recruited through Ser2-phosphorylated Pol II, coupling elongation to gene-body chromatin.
- [[SUPT16H]] — A FACT-complex subunit that facilitates Pol II transcription through nucleosomal barriers, illustrating how chromatin remodelling assists Pol II.
- [[MicroRNA]] — MicroRNAs and other non-coding RNAs are transcribed by Pol II, extending its output beyond proteins.
- [[HIV-1]] — Tat hijacks CDK9/P-TEFb pause release to drive transcription from the viral long terminal repeat.

## Linking Summary
- New links added: [[Telomere]], [[Transcriptome]], [[Alternative Splicing]]
- Suggested notes to create: [[CTD]], [[Mediator]], [[TFIIH]], [[TFIID]], [[P-TEFb]], [[CDK7]], [[CDK9]], [[CDK12]], [[NELF]], [[DSIF]], [[SETD2]], [[TERRA]], [[Transcription Termination]]
- Strong connections to strengthen: [[RNA Polymerase II]] ↔ [[CTD]], [[RNA Polymerase II]] ↔ [[Gene Expression]], [[RNA Polymerase II]] ↔ [[H3K36me3]]