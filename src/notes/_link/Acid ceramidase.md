---
title: Acid ceramidase
description: A lysosomal hydrolase (ASAH1) that cleaves ceramide into sphingosine and free fatty acids; recently identified as a novel regulator of ferroptosis sensitivity in senescent cells, independent of the GPX4/GSH and iron axes.
created: 2026-07-24
updated: 2026-07-24
tags:
  - enzyme
  - lipid-metabolism
  - sphingolipid-metabolism
  - senescence
  - ferroptosis
aliases:
  - ASAH1
  - ACase
  - Acid ceramidase (ASAH1)
  - N-acylsphingosine amidohydrolase 1
---

# Acid ceramidase

**Acid ceramidase (ACase; encoded by [[ASAH1]])** is a lysosomal hydrolase that catalyzes the hydrolysis of [[Ceramide|ceramide]] into [[Sphingosine|sphingosine]] and a free fatty acid. By controlling the ceramide ↔ sphingosine/sphingosine-1-phosphate rheostat, it sits at a central node of [[Sphingolipid Metabolism|sphingolipid metabolism]] and, as newly shown, of cellular [[Lipid Metabolism|membrane lipid composition]] that governs [[Ferroptosis|ferroptotic]] vulnerability.

## Structure & Domains

Human acid ceramidase is a heterodimeric glycoprotein assembled from a catalytic α-subunit and a protective β-subunit, both derived from a single ASAH1 precursor by autocatalytic processing in the lysosome. The active site contains a catalytic triad (Ser–Glu–His) typical of the NIT family of amidases. The enzyme is optimally active at acidic pH within the lysosomal lumen; its stability and activity are notably elevated in [[Senescent Cells|senescent cells]], where it is refractory to complete knockdown.

## Mechanism of Action & Pathways

- **Ceramide catabolism:** ACase cleaves the *N*-acyl linkage of [[Ceramide|ceramide]], releasing [[Sphingosine|sphingosine]] (which is re-phosphorylated to [[Sphingosine-1-phosphate|S1P]]) and a free fatty acid. This diverts substrate away from [[Sphingomyelin|sphingomyelin]] synthesis and reduces the ceramide pool.
- **Membrane lipid remodeling (novel, ferroptosis link):** Ceramide synthesis consumes free saturated (SFA) and monounsaturated (MUFA) fatty acids, competing that limits their availability for phospholipid PUFA incorporation. By *breaking down* [[Ceramide|ceramide]], ACase **releases free SFAs/MUFAs** that—via the Lands cycle—are exchanged into the *sn-2* position of membrane [[Phospholipid|phospholipids]], increasing the [[PUFA|polyunsaturated fatty acid (PUFA)]] content (notably [[Arachidonic acid|arachidonic acid]]-containing species). These PUFA-PLs are the preferred substrates for [[Lipid Peroxidation|lipid peroxidation]], the execution step of [[Ferroptosis]].
- **Pro-survival vs. pro-death duality:** Elevated ACase raises [[Sphingosine|sphingosine]]/S1P, classically *anti-[[Apoptosis|apoptotic]]* and pro-survival in [[Senescent Cells|senescent cells]]. This same metabolic shift, however, inadvertently creates a **pro-ferroptotic lipid profile**, sensitizing the cells to [[Ferroptosis]].

> [!info] Source: [[_document_ - Acid_ceramidase_modulates_the_lipid_profile_and_ex|Acid ceramidase modulates the lipid profile… (Soriano-Castell et al., 2026)]]
> In WI-38 [[Replicative Senescence|replicatively senescent]] fibroblasts, ACase is over-expressed 5- to 20-fold. Its knockdown or pharmacological inhibition (ARN14794) protects both proliferative and senescent cells against [[RSL3]]-induced [[Ferroptosis]] **independently of [[GPX4]]/[[Glutathione|GSH]] levels and of labile [[Iron|Fe²⁺]] regulation**, by lowering membrane PL-[[PUFA|PUFA]] content and thus the [[Lipid Peroxidation|LPO]] substrate pool.

## Physiological Function

ACase is essential for the turnover of [[Sphingomyelin|sphingomyelin]] and [[Ceramide|ceramide]] in virtually all tissues. Germline loss-of-function causes Farber disease (a rare lysosomal storage disorder). In normal physiology, ACase activity tunes the ceramide/sphingosine rheostat that regulates proliferation, differentiation, and stress responses.

## Pathology & Clinical Relevance

- **Senescence & aging:** ACase over-expression in [[Senescent Cells|senescent cells]] is a newly identified **senolytic/[[Senomorphic|senomorphic]] target** — its inhibition selectively removes [[Ferroptosis|ferroptotic vulnerability]] while leaving the senescence arrest and [[SASP]] intact, and it is transmitted to neighbors via [[IL-6]]/[[IL-8]] SASP cytokines ([[Paracrine Senescence|paracrine]] ferroptotic sensitization).
- **Cancer:** ACase is over-expressed in multiple malignancies and has been implicated in [[Melanoma]] tumorigenesis and radioresistance in [[Prostate Cancer]]; because cancer cells are often already ferroptosis-prone (high [[Iron|iron]], oxidative stress), ACase inhibition may be context-dependent (pro- or anti-tumor).
- **Druggability:** Small-molecule ACase inhibitors (e.g., **ARN14794**) already exist for other indications, providing a proof-of-concept that the enzyme is targetable — a rare near-term translational advantage for a newly discovered [[Senolytic|senotherapeutic]] axis.

## Documents

  - [[_document_ - Acid_ceramidase_modulates_the_lipid_profile_and_ex|Acid ceramidase modulates the lipid profile and exacerbates sensitivity to ferroptosis in WI-38 replicative senescent cells]]
    - Primary 2026 study (Cell Death and Disease) demonstrating ACase over-expression in replicative senescence drives a pro-ferroptotic membrane lipid profile, independently of GPX4/GSH and iron, and is transmitted via IL-6/IL-8 SASP.
  - [[_document_ - Could this enzyme help remove "zombie" cells from our tissues?|Salk press release — "Could this enzyme help remove 'zombie' cells…"]]
    - Public-facing summary of the Soriano-Castell/Maher study framing ACase as a target for clearing senescent "zombie" cells to support healthy aging.

## Connections

- [[Ceramide]] — ACase substrate; its breakdown releases free fatty acids that feed PUFA-phospholipid synthesis.
- [[Sphingosine]] / [[Sphingosine-1-phosphate|S1P]] — Products of ACase; pro-survival, anti-apoptotic signaling lipids.
- [[Sphingomyelin]] — Alternative ceramide consumer; ACase inhibition only modestly alters SM levels.
- [[Phospholipid]] — Membrane PLs whose PUFA content is increased by ACase activity.
- [[PUFA]] — The ferroptosis-substrate fatty acids enriched in membranes by ACase-driven remodeling.
- [[Ferroptosis]] — ACase is a novel positive regulator; its inhibition protects cells via a GPX4/GSH/iron-independent axis.
- [[GPX4]] — ACase inhibition *reduced* GPX4 expression yet still protected, indicating GPX4 is not the driver.
- [[Glutathione]] — GSH rises after ACase KD but protection persists even when GSH is depleted (BSO), confirming GSH-independence.
- [[Iron]] / [[Fenton Reaction]] — Labile Fe²⁺ rises (not falls) after ACase KD, ruling out iron as the mediator.
- [[ACSL4]] — Classical ferroptosis driver; ACase-KD lowers PL-PUFAs *without* changing ACSL4, so the two act through distinct mechanisms.
- [[Senescent Cells]] — ACase is strongly over-expressed in replicatively senescent cells and sensitizes them to ferroptosis.
- [[SASP]] — IL-6/IL-8 SASP cytokines induce ACase up-regulation and ferroptotic sensitization in neighboring cells.
- [[IL-6]] / [[IL-8]] — SASP factors sufficient to drive paracrine ACase up-regulation.
- [[RSL3]] — GPX4 inhibitor used to induce ferroptosis in the ACase study.
- [[Lipid Peroxidation]] — The downstream execution step whose substrate pool (PUFA-PLs) is set by ACase.
- [[Melanoma]] / [[Prostate Cancer]] — Cancers in which ACase activity has been linked to tumorigenesis/resistance.

## Linking Summary

- New links added: [[Ceramide]], [[Sphingosine]], [[Sphingosine-1-phosphate]], [[Sphingomyelin]], [[Phospholipid]], [[PUFA]], [[Ferroptosis]], [[GPX4]], [[Glutathione]], [[Iron]], [[Fenton Reaction]], [[ACSL4]], [[Senescent Cells]], [[SASP]], [[IL-6]], [[IL-8]], [[RSL3]], [[Lipid Peroxidation]], [[Melanoma]], [[Prostate Cancer]], [[Apoptosis]], [[Replicative Senescence]], [[Paracrine Senescence]], [[Senolytic]], [[Senomorphic]]
- Suggested new entity notes to create: [[Lands cycle]]
- Strong connections to strengthen: [[Acid ceramidase]] ↔ [[Ferroptosis]], [[Acid ceramidase]] ↔ [[Senescent Cells]], [[Acid ceramidase]] ↔ [[SASP]] (via IL-6/IL-8), [[Acid ceramidase]] ↔ [[Ceramide]]
