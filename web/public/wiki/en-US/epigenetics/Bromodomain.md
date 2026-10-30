---
title: Bromodomain
description: Bromodomains are ~110-residue acetyl-lysine reader modules that translate histone acetylation into recruitment of transcriptional machinery, forming the reader tier of the writer-reader-eraser system alongside BET family proteins such as BRD2/3/4.
protected: false
created: 2026-10-22
updated: 2026-10-22
tags: [epigenetics, protein, domain]
url: #
source: #
aliases: [bromodomains, BET domain]
---

# Bromodomain

## Overview

A **bromodomain** is a conserved ~110-amino-acid protein module that binds ε-N-acetylated lysine residues. It is the reader element of the epigenetic "writer–reader–eraser" system: histone acetyltransferases such as [[HAT]] write acetyl marks, bromodomain-containing proteins read them, and deacetylases such as [[HDAC]] erase them. By converting a covalent histone modification into a physical docking site, bromodomains couple [[Histone Acetylation]] to the recruitment of transcription factors, Mediator, and elongation machinery — and they do so with remarkable specificity for the lysine context, which is why bromodomain inhibition can be selective rather than a blanket shutdown of transcription.

## Structure & Domains

The fold is an alpha-helical four-helix bundle with a hydrophobic binding pocket formed by the "asparagine ladder" — a set of conserved asparagine residues and a terminal carboxylate that hydrogen-bond to the acetyl-lysine. One of the 116 bromodomains in the human proteome is the BET (bromodomain and extraterminal) type, present in BRD2, BRD3, and [[BRD4]], each of which carries two bromodomains (BD1 and BD2) plus an extra-terminal (ET) domain. Other prominent families include the polycomb bromodomain (in CBX proteins), the bromo and PHD finger bromodomains (BRPF, TAF1), and bromodomain-containing transcriptional coactivators such as [[P300]] and [[CBP]].

## Mechanism of Action & Pathways

- **Reader function**: Two tandem bromodomains in BET proteins cooperate to avidity-bind doubly acetylated histone tails at active enhancers and super-enhancers, anchoring the complex and positioning it to recruit P-TEFb, [[MYC]] programmes, and lineage-specific enhancers.
- **Writer–reader crosstalk**: Acetylation by HATs creates the binding surface; bromodomain proteins then recruit further acetyltransferases (for example p300/CBP) or Mediator, producing positive feedback that sharpens and stabilises active chromatin.
- **Eraser crosstalk with sirtuins**: The NAD+-dependent [[Sirtuins]] deacetylate histones and non-histone substrates such as p300, and deacetylation of p300/CBP is itself the classic mechanism by which SIRT1 inactivates coactivator activity. Loss of the sirtuin brake therefore leaves acetylated lysines in place, which bromodomain proteins read as an activation signal — a direct link between the acetyl-CoA/[[NAD+]] axis and BET recruitment.
- **Non-histone substrates**: Bromodomains also read acetylated non-histone proteins, including transcription factors and the p300/CBP autoacetylation loops, broadening their influence beyond the nucleosome.

## Physiological and Clinical Relevance

BET bromodomain inhibition with the thienotriazolodiazepine JQ1 and its clinical successors (molibresib, pelabresib, apabetalone) displaces BET proteins from acetylated chromatin, suppressing super-enhancer-driven transcription. Applications include [[leukemia]] and [[Lymphoma]], where MYC- or BCL2-driven programmes are BET-dependent; NUT midline carcinoma, where BRD4-NUT fusion defines the disease; prostate and breast cancer; and inflammatory disease, where BET inhibition blunts cytokine transcription. In [[Inflammation]] and [[Inflammaging]], BET blockade reduces the SASP without reversing the senescence arrest, a senomorphic rather than senolytic effect documented for [[BRD4]]. Toxicity is dominated by haematopoietic and immune effects reflecting the central role of BET proteins in cytokine production and haematopoiesis.

## Documents

- [[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications|SASP Review 2024]] — bromodomain readers as regulators of senescence-associated secretory programmes.

## Connections

- [[BRD4]] — the archetypal BET-family bromodomain protein, linked to SASP regulation
- [[HAT]] / [[Histone Acetylation]] — the writers that create the marks bromodomains read
- [[HDAC]] / [[HDACs]] — the erasers that remove the marks
- [[P300]] / [[CBP]] / [[PCAF]] — acetyltransferases that contain bromodomains and read their own marks
- [[Sirtuins]] / [[NAD+]] — NAD+-dependent deacetylation that gates bromodomain recruitment
- [[Epigenetics]] — the wider regulatory framework
- [[Super-enhancer]] — the chromatin context in which BET recruitment is most consequential
- [[Cancer]] / [[leukemia]] / [[Lymphoma]] — principal therapeutic arenas for BET inhibition
- [[Inflammation]] / [[Inflammaging]] — inflammatory and senomorphic applications

## Linking Summary

- New entity note in `src/notes/epigenetics/` (no prior bromodomain note existed).
- New links added: [[BRD4]], [[HAT]], [[Histone Acetylation]], [[HDAC]], [[HDACs]], [[P300]], [[CBP]], [[PCAF]], [[Sirtuins]], [[NAD+]], [[Epigenetics]], [[Super-enhancer]], [[MYC]], [[leukemia]], [[Lymphoma]], [[Inflammation]], [[Inflammaging]].
- Suggested new entity notes to create: [[BET inhibitors]], [[BET Inhibitors]], [[BRD2]], [[BRD3]].
- Strong connections to strengthen: [[Bromodomain]] ↔ [[BRD4]], [[Bromodomain]] ↔ [[Histone Acetylation]], [[Bromodomain]] ↔ [[Sirtuins]].
