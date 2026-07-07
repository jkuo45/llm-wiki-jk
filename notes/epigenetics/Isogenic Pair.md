---
title: Isogenic Pair
description: Two cell lines that are genetically identical except for a single defined locus, enabling controlled attribution of phenotype to genotype.
type: entity
created: 2024-01-01
updated: 2026-07-06
tags:
  - scientific-concept
aliases: []
---

# Isogenic Pair

An [[Isogenic Pair]] consists of two cell lines that share an otherwise identical [[Genetic Background]] but differ at a single defined genetic locus — for example a point mutation, a knock-out, or an edited regulatory variant. By holding the remainder of the genome constant, an isogenic pair isolates the contribution of one allele or locus to cellular phenotype, making it a powerful tool for causal inference in functional genomics.

## Generation

Isogenic pairs are most often produced by precise genome editing of a parental line using [[CRISPR]]-Cas9, TALENs, or homologous recombination in embryonic stem cells or [[Induced Pluripotent Stem Cells]] (iPSCs). A corrected "wild-type" and an engineered "mutant" clone derived from the same parental genome constitute the pair. In the context of patient-derived iPSCs, an isogenic pair can be created by repairing a disease-causing mutation (isogenic control) or by introducing a known mutation into a healthy line (isogenic disease model).

## Applications in Disease Modeling

Because non-isogenic comparisons confound genetic background with the variant of interest, isogenic pairs are the gold standard for [[Disease Modeling]] of monogenic disorders. They permit unambiguous assessment of how a single nucleotide variant alters differentiation potential, electrophysiology, metabolism, or drug response — free of inter-individual variability. This is especially valuable in iPSC-based studies of neurodevelopmental, cardiac, and metabolic diseases.

## Quantitative & Pharmacological Use

Isogenic pairs enable clean dose–response and rescue experiments: comparing a mutant line against its isogenic control quantifies penetrance and severity, while re-introduction of the wild-type allele confirms causality. In toxicology and [[Drug Discovery]], they support stratification of drug sensitivity by genotype and identification of synthetic-lethal interactions.

## Limitations

Residual off-target edits, clonal variability in epigenetic state, and passage-dependent drift can introduce confounds if not controlled. Independent clones and orthogonal validation are recommended to confirm that observed phenotypes trace to the intended edit rather than to clonal artifacts.

## Connections

- [[Induced Pluripotent Stem Cells]] — Common parental platform for generating isogenic pairs.
- [[Disease Modeling]] — Primary application of isogenic pairs in functional genomics.
- [[CRISPR]] — Genome-editing tool used to create the single-locus difference.
- [[Genetic Background]] — The controlled variable held constant between the pair.

## Linking Summary

- New links added: [[Induced Pluripotent Stem Cells]], [[Disease Modeling]], [[CRISPR]], [[Genetic Background]], [[Drug Discovery]]
- Suggested new entity notes to create: [[Synthetic Lethality]], [[TALEN]]
- Strong connections to strengthen: [[Isogenic Pair]] ↔ [[Disease Modeling]]
