---
title: EXITS
description: EXITS (Escape from X-Inactivation Tumor Suppressors) is a framework
  identifying X-linked tumor suppressor genes that escape X-inactivation and are
  loss-of-function mutated more frequently in male cancers.
created: 2026-09-02
updated: 2026-09-02
tags:
  - scientific-concept
  - cancer
  - sex-chromosome-biology
  - tumor-suppressor
  - x-inactivation
aliases:
  - Escape from X-Inactivation Tumor Suppressors
  - EXITS framework
  - EXITS genes
  - Escape from X-inactivation tumor suppressor genes
---

# EXITS

[[EXITS]] (**E**scape from **X**-**I**nactivation **T**umor **S**uppressors) is a framework, proposed by **Dunford et al., *Nature Genetics* 2017** (PMID 27869828), that identifies X-chromosome tumor suppressor genes which **escape X-inactivation** and are therefore protected by **biallelic expression** in females. Because these genes are **hemizygous in males**, males are more vulnerable to single-hit loss-of-function mutation — contributing to the broad male predominance in cancer incidence at non-reproductive sites.

## The Headline Statistic

Across **>4,100 cancers from 21 tumor types** (TCGA + Broad datasets, excluding sex-restricted cancers such as prostate, ovarian, breast), exactly **six** of **783** non-pseudoautosomal-region (non-PAR) X-chromosome genes harbored loss-of-function (LOF) mutations significantly more often in males:

> [[ATRX]], [[CNKSR2]], [[DDX3X]], [[KDM5C]], [[KDM6A]], [[MAGEC3]]

By contrast, **zero of 18,055** autosomal and PAR genes showed male-biased LOF mutations (Fisher's exact **P < 0.0001**; FDR < 0.1). This sex-biased pattern is therefore **uniquely X-linked** — a generalized phenomenon seen across many cancers, and in individual tumor types (e.g., [[ATRX]] in lower-grade glioma, [[KDM5C]] in clear-cell kidney cancer).

## The Core Problem: Why Location Alone Isn't Enough

The framework hinges on a subtlety that the paper explicitly confronts. For **most** X-linked genes, one X chromosome is randomly inactivated in every female cell (X-chromosome inactivation, XCI), leaving each female cell **functionally haploid**. If a tumor suppressor were on such a gene, **a single mutation would hit males and females equally** — the female's second allele would already be silent.

**The asymmetry arises only for the subset of X genes that escape X-inactivation.** Escape genes remain **biallelically active in females** (two working alleles), whereas males express from a single allele. That is why the six EXITS genes were specifically identified as escape genes — biallelic female expression is the entire basis for the female protection:

> "Escape from X-inactivation results in expression of two copies of a tumor suppressor gene in females whereas males only have one."

## Two-Hit vs One-Hit Mechanism

| Situation | Female (XX) | Male (XY) |
|---|---|---|
| **Non-escape X-linked TSG** | 1 active allele (other inactivated) → **1 hit is enough** | 1 allele → **1 hit is enough** |
| **EXITS (escape) TSG** | **2 active alleles** → **2 hits required** | **1 allele** (no functional Y homolog) → **1 hit is enough** |

The paper's hypothesis (Figure 1b-c):

> "A single deleterious mutation in a TSG is equally likely to occur in male and female cancers because males have only one chrX, and females have one active chrX (Xa) and one inactive chrX (Xi)."

For EXITS escape genes:

> "In females, there are two active alleles of EXITS genes and therefore females are protected from complete gene loss after a single alteration. **Complete inactivation of an EXITS gene may require biallelic mutations, or mutation with loss of the other chrX.**"

### Direct Experimental Validation

The paper **tested** the two-hit corollary in the tumor data — a key strength of the study:

- **Female tumors with EXITS mutations were significantly more likely to have lost the whole other X chromosome**: 23.3% (10/43) vs 6.2% (45/726), **P = 0.0005**.
- **6.3% of female tumors with an EXITS mutation had two LOF mutations** in the gene (short-read sequencing could not distinguish *cis* vs *trans*).

This is direct genomic evidence that females genuinely require the **second hit** — either a second mutation or loss of the entire other X chromosome.

## The Y-Chromosome Homolog Corollary

A second, male-specific pathway complicates the "one hit" story: **three of the six EXITS genes have functional Y-chromosome homologs** — [[DDX3X]]/DDX3Y, [[KDM5C]]/[KDM5C Y partner], and [[KDM6A]]/[[UTY]].

- **UTY** is the archetypal case: the Y-encoded paralog **lacks H3K27 demethylase activity** but retains **non-catalytic tumor-suppressor function** (Gozdecka et al., 2018), so it can partially compensate for KDM6A/UTX loss in males in some contexts.
- **Mosaic loss of chromosome Y (chrY loss)** — common with **aging and smoking** — removes that backup. Male tumors with LOF mutations in EXITS genes with Y homologs showed a **trend toward chrY loss** (10.2% vs 5.8%, P = 0.077); across all X genes with functional Y homologs the enrichment was significant (10.6% vs 5.5%, **P = 0.019**).
- So a male's "one hit" may actually require **mutation of the X allele + loss/disabling of the Y homolog** for these three genes.

The paper found that **X-X compensation in females was stronger than X-Y compensation in males** (female 36% chrX loss vs male 8.2% chrY loss among mutated tumors, **P = 0.0022**), indicating the Y homologs are **not functionally equivalent** tumor suppressors — a key reason females retain a net advantage.

## Escape Is Context-Dependent (Not a Fixed Percentage)

Escape from X-inactivation is **variable across tissues, cell types, and individuals** — there is **no single universal percentage** of biallelic expression for any EXITS gene. The paper states:

> "a fraction of chrX genes 'escape' inactivation and have biallelic expression, albeit with poorly understood mechanisms leading to **differences across individuals and cell types**"

and

> "Tissue-specific and inter-individual variation in escape are recognized phenomena."

Evidence for escape in the paper:
- **KDM6A, DDX3X, KDM5C** are recognized escape genes **across multiple tissues**, with **female-biased expression** in tumors and normal tissue (GTEx).
- **ATRX** escapes only in specific contexts — evidence (biallelic/allele-specific expression and female-biased expression) was strongest in **female brain**, where ATRX showed **heterogeneous escape**. This matches its male-biased mutation enrichment being largely confined to lower-grade gliomas.
- **CNKSR2** and **MAGEC3** were more recently suggested to escape (next-generation sequencing / epigenetic analyses).
- Expression could also be **downregulated without coding mutation** via non-coding or epigenetic mechanisms, predominantly in males (e.g., 23/465 male vs 2/217 female tumors for KDM6A expression below the 5th percentile, P = 0.0077).

## Male Cancer Excess Context

The framework sits within a larger sex-disparity picture (SEER 2008–2012): males carry ~**20% excess risk** of developing any cancer (516.6 vs 411.2 per 100,000 person-years) and **≥2:1 male predominance** for some types (kidney/renal pelvis, bladder, oral cavity/pharynx, HCC). The EXITS model explains a **portion** of this excess — the paper explicitly acknowledges it is **not the sole explanation**, co-existing with hormonal biology, tobacco/alcohol exposure, and other X/Y-linked mechanisms.

## Key Caveats

- EXITS explains **X-linked** tumor-suppressor vulnerability, but is **one of several** drivers of male cancer bias (testosterone/AR signaling, immunologic sex differences, somatic mutation load are others).
- The **MAGEC3** entry is the least mechanistically characterized — it relies most heavily on the statistical EXITS signal rather than established protein function.
- Disease-specific enrichment is strong for some pairs (ATRX→LGG, KDM5C→KIRC) but underpowered to capture all tumor types; the authors note many more tumor types must be sequenced to fully quantify the EXITS contribution.

## Connections

- [[ATRX]] — SWI/SNF remodeler; escapes in female brain; ALT pathway; LGG
- [[CNKSR2]] — RAS/MAPK scaffolding regulator; recently suggested escape
- [[DDX3X]] — RNA helicase; multi-tissue escape; medulloblastoma; Y homolog DDX3Y
- [[KDM5C]] — H3K4me3 demethylase; multi-tissue escape; KIRC; Y homolog
- [[KDM6A]] — UTX, H3K27me3 demethylase; multi-tissue escape; bladder cancer; Y homolog UTY
- [[MAGEC3]] — MAGE cancer-testis antigen; recently suggested escape
- [[Tumor Suppressor Gene]] — EXITS genes are X-linked tumor suppressors
- [[X-Chromosome Inactivation]] — escape from XCI is the mechanistic basis
- [[p53]] — KDM6A/KDM5C interact with p53 pathway; X-linked p53 regulators
- [[Hallmarks of Cancer]] — EXITS loss contributes to genome instability and sustained proliferative signaling

## Documents

Source: **Dunford A, Weinstock DM, Savova V, et al.** Tumor suppressor genes that escape from X-inactivation contribute to cancer sex bias. *Nat Genet.* 2017;49(1):10–16. doi:10.1038/ng.3726. PMID: 27869828 / PMC5206905.

(This source document has not yet been ingested into the vault.)

## Linking Summary

- New links added: [[ATRX]], [[CNKSR2]], [[DDX3X]], [[KDM5C]], [[KDM6A]], [[MAGEC3]], [[Tumor Suppressor Gene]], [[X-Chromosome Inactivation]], [[p53]], [[Hallmarks of Cancer]]
- Strong connections to strengthen: [[EXITS]] ↔ [[KDM6A]] (archetype escape gene), [[EXITS]] ↔ [[ATRX]] (context-specific escape in glioma), [[EXITS]] ↔ [[Tumor Suppressor Gene]]
