---
title: KDM6A
description: KDM6A (Lysine Demethylase 6A, also called UTX) is an X-linked H3K27me3
  demethylase that opens repressive chromatin and escapes X-inactivation in females;
  loss-of-function mutations are enriched in male tumors.
created: 2026-09-02
updated: 2026-09-02
tags:
  - protein
  - gene
  - enzyme
  - histone-demethylase
  - x-linked-tumor-suppressor
  - cancer
  - epigenetics
  - senescence
aliases:
  - UTX
  - Lysine Demethylase 6A
  - KDM6A
  - Ubiquitously Transcribed X-linked TPR Gene Protein
---

# KDM6A

[[KDM6A]] (Lysine Demethylase 6A, also called UTX — Ubiquitously Transcribed X-linked TPR Gene Protein) is an X-linked histone demethylase that removes the repressive trimethyl mark from histone H3 lysine 27 ([[H3K27me3]]), thereby derepressing silenced genes. KDM6A is a core member of the MLL/SET1 histone H3K4 methyltransferase complex and is one of six X-linked genes identified as **EXITS** (Escape from X-Inactivation Tumor Suppressors), with loss-of-function mutations enriched in male tumors (Dunford et al., *Nature Genetics* 2017).

## Structure & Domains

KDM6A (~140 kDa) contains:

- **JmjC catalytic domain**: Fe(II)- and α-ketoglutarate-dependent oxygenase that demethylates H3K27me3 → H3K27me2 → H3K27me1, counterbalancing [[EZH2]] (PRC2) methyltransferase activity.
- **TPR repeats**: Tetratricopeptide repeats mediating protein–protein interactions.
- **JMJD12 domain**: JmjN-like domain involved in protein complex assembly.
- **WRAD complex integration**: KDM6A associates with WDR5, RBBP5, ASH2L, and DPY30 to form the WRAD module of the MLL/SET1 complex.

## Function

KDM6A is a key epigenetic activator that removes repressive Polycomb marks:

- **Developmental gene regulation**: KDM6A demethylates H3K27me3 at developmental transcription factor loci (e.g., HOX clusters), permitting their activation during differentiation.
- **X-chromosome inactivation**: KDM6A escapes X-inactivation in females, meaning both X chromosomes produce functional KDM6A protein — a key part of the EXITS dosage advantage.
- **Senescence regulation**: KDM6A enhances p21/CDKN1A transcription by demethylating H3K27me3 at the p21 promoter, providing females with a unique dosage advantage in [[p53]]-mediated [[Senescence|senescence]].
- **DNA damage response**: KDM6A is recruited to DNA damage sites where it demethylates H3K27me3 to facilitate repair factor access.

> [!important]
> KDM6A escapes X-inactivation: Unlike most X-linked genes, KDM6A is biallelically expressed in females, producing roughly double the KDM6A protein of males (female-biased expression). This provides an epigenetic dosage advantage that buffers against loss-of-function mutations. Note that the extent of escape is **context-dependent** — it varies by tissue, cell type, and individual — and is not a single fixed percentage of cells.

## Role in Cancer

KDM6A is one of the most frequently mutated epigenetic regulators in cancer:

- **Bladder cancer**: KDM6A is mutated in ~30% of bladder tumors (one of the most frequently mutated genes).
- **Multiple myeloma**: KDM6A mutations in ~10–15%.
- **Medulloblastoma**: Recurrent mutations, especially in WNT-subtype.
- **Esophageal squamous cell carcinoma**: Recurrent loss-of-function.
- **Renal cell carcinoma, T-ALL, AML**: Recurrently mutated.

Loss of KDM6A leads to accumulation of H3K27me3 at promoters of tumor suppressors and developmental genes, silencing them through enhanced Polycomb repression. This is functionally similar to [[EZH2]] gain-of-function mutations, illustrating the antagonistic balance between EZH2 and KDM6A.

### EXITS Framework

KDM6A is one of six X-linked genes (with [[ATRX]], [[CNKSR2]], [[DDX3X]], [[KDM5C]], [[MAGEC3]], see [[EXITS]]) preferentially mutated in male tumors. KDM6A's escape from X-inactivation in females makes the dosage advantage particularly pronounced: females produce roughly twice the functional protein of males, requiring **two hits** (rather than one) for complete inactivation (Dunford et al., *Nature Genetics* 2017).

#### Two-Hit vs One-Hit

- **Females (XX)**: Because KDM6A escapes X-inactivation, both X alleles are active. Complete inactivation requires **two hits** — either biallelic mutations, or one mutation plus loss of the other X chromosome. Despite short-read limits, **6.3% of female tumors with an EXITS mutation had two LOF mutations** in the gene.
- **Males (XY)**: A single mutation on the lone X allele is generally sufficient — **unless** the Y-homolog backup (see below) is also disabled.

The two-hit requirement was directly validated: female tumors with EXITS mutations were significantly more likely to have lost the whole other X chromosome (23.3% vs 6.2%, **P = 0.0005**).

#### The UTY / Y-Chromosome Homolog Corollary

KDM6A has a Y-chromosome homolog, **[[UTY]]**. UTY **lacks H3K27 demethylase activity** but retains **non-catalytic tumor-suppressor function** (Gozdecka et al., 2018), so it can partially compensate for KDM6A/UTX loss in males. This means:

- A male's "one hit" on the X allele may require **concomitant loss or disabling of UTY** for complete inactivation.
- **Mosaic loss of chromosome Y** (common with aging and smoking) removes this backup. Male tumors with LOF mutations in EXITS genes with Y homologs (KDM6A, DDX3X, KDM5C) showed a **trend toward chrY loss** (10.2% vs 5.8%, P = 0.077).
- **X-X female compensation is stronger than X-Y male compensation** (female 36% chrX loss vs male 8.2% chrY loss among mutated tumors, **P = 0.0022**), indicating UTY is not a fully equivalent tumor suppressor — a key reason females retain a net advantage.

### KDM6A/KDM5C and Xist

KDM6A and [[KDM5C]] — both XCI escapees — cooperate to facilitate **[[Xist]] upregulation** at the onset of X-chromosome inactivation in early female embryonic development (removing H3K27me3 at the Xist promoter), reinforcing female-specific dosage biology.

## Sex Differences

> [!tip]
> KDM6A is arguably the most important EXITS gene for sex-specific cancer biology due to its escape from X-inactivation.

- KDM6A escapes X-inactivation → biallelic expression in females → **roughly double the protein dosage** compared to males (the degree of escape varies by tissue and individual).
- Males require only one loss-of-function event to eliminate KDM6A activity (or one hit plus [[UTY]] loss); females require **two hits**, creating a significant protective buffer.
- KDM6A enhances [[p21 CIP1|p21]] transcription, contributing to the female-biased p53→p21→senescence arm (vs. male-biased p53→apoptosis).
- KDM6A mediates **in utero ovarian programming** that biases female cells toward p21-dependent senescence, contributing to sex-specific cell fate decisions.
- KDM6A mutations in male tumors are enriched across 21 tumor types — a sex-biased pattern not seen in any of the 18,053 autosomal genes examined by the EXITS study (Dunford et al., *Nature Genetics* 2017) — with the strongest enrichment in bladder cancer and medulloblastoma.

### KDM6A and JMJD3 — Paralog Specificity

KDM6A (UTX) and [[JMJD3]] (KDM6B) are paralogous H3K27me3 demethylases with partially overlapping but distinct functions:

| Feature | KDM6A (UTX) | JMJD3 (KDM6B) |
|---|---|---|
| Chromosomal location | X-linked | Autosomal (17p13.1) |
| X-inactivation status | Escapes | N/A (autosomal) |
| Primary role | Developmental gene regulation | Stress/inflammatory response |
| SASP involvement | Less prominent | Key driver of IL-6/IL-8 expression |
| Cancer mutations | Recurrent loss-of-function | Less frequently mutated |
| Inhibition challenge | KDM6A specificity needed | GSK-J4 inhibits both |

## Connections

- [[JMJD3]] — Paralogous H3K27me3 demethylase (KDM6B); overlapping catalytic activity, distinct regulatory roles
- [[EZH2]] — Antagonistic: EZH2 deposits H3K27me3; KDM6A erases it
- [[H3K27me3]] — KDM6A's primary histone substrate
- [[p53]] — KDM6A enhances p21 transcription, providing females a dosage advantage in p53-mediated senescence
- [[p21 CIP1|p21]] — KDM6A demethylates H3K27me3 at the p21 promoter to activate transcription
- [[Senescence]] — KDM6A contributes to sex-specific senescence arm selection
- [[Cellular Senescence]] — KDM6A loss can dysregulate senescence programs
- [[ATRX]], [[CNKSR2]], [[DDX3X]], [[KDM5C]], [[MAGEC3]] — Fellow EXITS X-linked tumor suppressors (see [[EXITS]])
- [[EXITS]] — Hub note for the Escape from X-Inactivation Tumor Suppressor framework
- [[UTY]] — Y-chromosome homolog; lacks H3K27 demethylase activity but retains non-catalytic tumor-suppressor function; partially compensates for KDM6A loss in males
- [[Xist]] — KDM6A (with KDM5C) facilitates Xist upregulation at the onset of X-chromosome inactivation
- [[X-Chromosome Inactivation]] — KDM6A escapes inactivation, providing female dosage advantage
- [[Tumor Suppressor Gene]] — KDM6A is a chromatin-based tumor suppressor
- [[Histone Demethylase]] — KDM6A belongs to the KDM6 family

## Linking Summary

- New links added: [[JMJD3]], [[EZH2]], [[H3K27me3]], [[p21 CIP1|p21]], [[Senescence]], [[Cellular Senescence]], [[X-Chromosome Inactivation]], [[Tumor Suppressor Gene]], [[Histone Demethylase]], [[ATRX]], [[CNKSR2]], [[DDX3X]], [[KDM5C]], [[MAGEC3]], [[EXITS]], [[UTY]], [[Xist]]
- Suggested new entity notes to create: [[SET1 Complex]], [[WRAD Module]], [[UTY]] (if not existing)
- Strong connections to strengthen: [[KDM6A]] ↔ [[EZH2]] (H3K27me3 antagonism), [[KDM6A]] ↔ [[p53]] (senescence arm), [[KDM6A]] ↔ [[JMJD3]] (paralog specificity), [[KDM6A]] ↔ [[Tumor Suppressor Gene]] (EXITS), [[KDM6A]] ↔ [[UTY]] (Y homolog compensation)
