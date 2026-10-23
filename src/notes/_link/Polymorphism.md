---
title: Polymorphism
description: A DNA sequence variation present in a population at a frequency of roughly one percent or more, encompassing single-nucleotide variants, indels and repeat-length variants, and forming the substrate of GWAS and pharmacogenomics.
protected: false
created: 2026-10-22
updated: 2026-10-22
tags: [genetics, genetic-variation, genomics]
url: #
source: #
aliases: [Genetic polymorphism, Polymorphism, SNP, Single nucleotide polymorphism]
---

# Polymorphism

**Polymorphism** is a heritable DNA sequence difference that occurs in a population at a frequency of about 1% or more — the threshold that distinguishes a common variant from a rare [[Mutations|mutation]]. Polymorphisms are the substrate of population genetics, of genome-wide association studies, and of CYP-based pharmacogenomics, and they are a major reason why two people respond differently to the same drug, diet or environment.

## Overview

Classically, polymorphisms are classified by the size and type of the sequence change:

- **Single-nucleotide polymorphisms (SNPs).** Single-base substitutions, the most common class; typically biallelic and intergenic or intronic, though coding variants exist. The wiki note [[SNP]] and [[single nucleotide variation]] cover the technical detail.
- **Indels.** Small insertions and deletions, from one base up to several kilobases; less frequent than SNPs but disproportionately associated with structural variation and with certain disease alleles.
- **Repeat-length variants.** Variable numbers of tandem repeats and short tandem repeats, including microsatellites and minisatellites; changes in repeat number alter protein structure, gene expression, or the repeat expansion disorders.
- **Copy-number variation.** Gains and losses of larger genomic segments.
- **Structural variants.** Larger rearrangements, inversions and translocations, now routinely detected by long-read and array-based sequencing.

Polymorphisms also exist at the epigenetic level — [[DNA Methylation]] and other chromatin marks vary between individuals and between alleles, and can be stably inherited, giving epigenetic variation that behaves like a polymorphism without a sequence change.

## Mechanism

- **Origin.** Most polymorphisms arise from replication error or from DNA repair events; some are introduced by [[Homologous Recombination]] during [[Meiosis]] and are passed on as haplotypes. Recombination hotspots and the [[DNA Repair]] machinery determine which variants become common.
- **Population structure.** Allele frequencies vary between populations owing to founder effects, genetic drift, selection (including pathogen-driven selection, as in malaria resistance) and gene flow. This is why allele frequencies must be reported with ancestry information; a frequency that is common in one population may be rare in another.
- **Genotype and phenotype.** A polymorphism does not determine a trait on its own. Effect sizes are usually small and additive, and phenotype depends on interactions with other variants, with environment, and with epigenetic state. This is why [[Genotype]] and [[Phenotype]] are related but not interchangeable, and why single-variant findings rarely generalise.
- **Haplotype structure.** Because recombination is not uniform, nearby variants are inherited in blocks; the [[HLA Haplobank]] is a classic example of how polymorphism density differs across the genome.

## Physiological Function

Polymorphisms shape metabolism, immunity and drug response:

- **Pharmacogenomics.** Cytochrome P450 alleles determine how drugs are activated or cleared: [[CYP2D6]] poor metabolisers, [[CYP3A4]] and [[CYP2C19]] variants, and [[CYP2C9]] alter the handling of many agents. The [[Warfarin]] dosing algorithm combines [[VKORC1]] and CYP2C9 genotypes, and is the standard example of genotype-guided prescribing.
- **Nutrition and metabolism.** [[MTHFR]] variants alter folate-homocysteine metabolism and have been linked to cardiovascular and pregnancy outcomes.
- **Immune and host defence.** [[HLA Haplobank]] polymorphisms determine antigen presentation and transplant compatibility, and underlie autoimmune and infectious disease susceptibility.
- **Pigmentation and behaviour variants.** [[MC1R]] loss-of-function variants explain red hair, fair skin and elevated UV sensitivity, and their association with addiction phenotypes.
- **Neurodegeneration risk.** [[APOE4]] is the strongest common genetic risk factor for late-onset [[Alzheimer's Disease]], illustrating how a common polymorphism can multiply disease risk.
- **Evolutionary adaptation.** Variants in [[CYP2J2]], haemoglobin and other genes illustrate recent human adaptation; the [[Trisomy]] and [[Aneuploidy]] notes cover dosage effects at the chromosomal scale.

## Clinical Relevance

- **Genetic testing.** Clinical interpretation requires distinguishing causal variants from benign polymorphisms, and from rare pathogenic mutations; allele frequency databases, functional assays and segregation analysis are used together.
- **GWAS interpretation.** Association studies nominate candidate loci but rarely establish causality; fine-mapping, functional genomics and Mendelian randomisation are needed before a locus can be claimed as a target.
- **Ancestry bias.** Because most large association cohorts are of European ancestry, predictive scores transfer poorly to other ancestries — a documented inequity in precision medicine.
- **Pharmacogenomic prescribing.** Genotype-guided dosing for anticoagulants, antidepressants, opioids and some chemotherapies (e.g. DPYD and TPMT, though the latter are rare mutations rather than common polymorphisms) reduces adverse events.
- **Forensic and population applications.** Polymorphic STR loci underpin forensic identification; population allele frequencies inform migration and demographic history.

## Documents

- (no document notes yet)

## Connections

- [[SNP]] / [[single nucleotide variation]] — the most common class of polymorphism
- [[Mutations]] / [[Genotype]] / [[Phenotype]] / [[Gene]] — the concepts that define and contextualise a polymorphism
- [[Meiosis]] / [[Homologous Recombination]] / [[DNA Repair]] — how variants arise and are transmitted
- [[DNA Methylation]] / [[Methylation]] — epigenetic variation that behaves like a polymorphism
- [[CYP2D6]] / [[CYP3A4]] / [[CYP2C19]] / [[CYP2C9]] / [[CYP2J2]] / [[VKORC1]] / [[Warfarin]] — pharmacogenomic action
- [[MTHFR]] / [[MC1R]] / [[APOE4]] / [[Alzheimer's Disease]] — common variants with measurable phenotypic effect
- [[HLA Haplobank]] — extreme polymorphism density and immune consequences
- [[Transcriptome]] / [[Gene Expression]] — expression consequences of regulatory polymorphisms
- [[Aneuploidy]] / [[Trisomy]] — dosage variation at the chromosomal scale
- [[DNA]] / [[Chromosome]] — the physical substrate of variation

## Linking Summary

- New entity note in `src/notes/_link/` (shared genetics concept used across genomics, disease and pharmacology notes).
- New links added: [[SNP]], [[single nucleotide variation]], [[Mutations]], [[Genotype]], [[Phenotype]], [[Gene]], [[Meiosis]], [[Homologous Recombination]], [[DNA Repair]], [[DNA Methylation]], [[Methylation]], [[CYP2D6]], [[CYP3A4]], [[CYP2C19]], [[CYP2C9]], [[CYP2J2]], [[VKORC1]], [[Warfarin]], [[MTHFR]], [[MC1R]], [[APOE4]], [[Alzheimer's Disease]], [[HLA Haplobank]], [[Transcriptome]], [[Gene Expression]], [[Aneuploidy]], [[Trisomy]], [[DNA]], [[Chromosome]].
- Suggested new entity notes to create: [[Haplotype]], [[GWAS]], [[Pharmacogenomics]], [[Copy-Number Variation]], [[Short Tandem Repeat]], [[Linkage Disequilibrium]], [[Allele Frequency]], [[Ancestry and Health Disparities]].
- Strong connections to strengthen: [[Polymorphism]] ↔ [[SNP]], [[Polymorphism]] ↔ [[CYP2D6]], [[Polymorphism]] ↔ [[APOE4]].
