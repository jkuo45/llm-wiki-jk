---
title: NAD+ Metabolic Reprogramming
description: NAD+ metabolic reprogramming is the mucosal imbalance of impaired NAD+ biosynthesis and heightened NAD+ consumption that depletes NAD+ in ulcerative colitis and drives CD8+ T-cell senescence via mitochondrial dysfunction and cGAS-STING signaling.
protected: false
created: 2026-11-10
updated: 2026-11-10
tags:
  - biological-process
  - nad-metabolism
  - senescence
  - immunosenescence
  - ulcerative-colitis
aliases: [NAD+ metabolic dysregulation, NAD+ dysregulation, NAD+ exhaustion, Hyperconsumptive NAD+ state]
---

# NAD+ Metabolic Reprogramming

**NAD+ metabolic reprogramming** (NAD+ metabolic dysregulation) is the derangement of [[NAD+ Salvage Pathway|nicotinamide adenine dinucleotide metabolism]] that Ye et al. (2026) identify as the upstream metabolic driver of CD8+ T-cell senescence in [[Ulcerative Colitis]]. It is characterized by an imbalance between impaired biosynthesis and increased expression of NAD+-consuming enzymes, producing a hyperconsumptive state that exhausts the mucosal NAD+ pool.

## Metabolic signature

> [!info] Source: [[_document_ - Aging Cell - 2026 - Ye - NAD  Metabolic Reprogramming Drives CD8  T Cells Senescence and Exacerbates Ulcerative Colitis|Ye et al., 2026, Aging Cell]]
> Untargeted metabolomics of colitic murine mucosa shows enrichment of the nicotinate and nicotinamide metabolism pathway, with reduced NAD+ biosynthetic precursors (tryptophan, nicotinic acid) and accumulated catabolites (nicotinamide, ADP-ribose), and directly quantified lower NAD+ levels. Expression of [[NAMPT]], [[SIRT1]], [[CD38]] and [[PARP1]] is upregulated ([[NAMPT]] downregulated within HSS CD8+ T cells), indicating NAD+ hyperconsumption.

Single-cell metabolic scoring and bulk RNA-seq confirm the pathway is profoundly upregulated in high-senescence-score [[Senescent CD8+ T Cells|CD8+ T cells]] (reduced NAMPT, elevated CD38/SIRT1/PARP1). The infiltration score of these cells positively correlates with the NAD+ metabolism pathway score in UC patients (GSE87466), and spatial transcriptomics (GSE189184) shows the HSS^high/NAD^high "senescent niche" expands from 5.6% in healthy colon to 16.7% in UC tissue.

## Consequences

Lowering intracellular [[NAD+]] with [[FK866]] (NAMPT inhibitor), [[SRT1720]] (SIRT1 agonist) or NAMPT siRNA is sufficient to induce CD8+ T-cell senescence, while [[NMN]] supplementation largely abrogates it. NAD+ depletion suppresses [[Oxidative Phosphorylation|OXPHOS]], increases [[Glycolysis|glycolysis]], reduces ATP and mitochondrial mass, elevates [[Mitochondrial ROS|mtROS]], and causes [[mtDNA]] leakage through [[VDAC|VDAC1]] oligomerization. Cytosolic mtDNA activates [[cGAS-STING Pathway]]–[[IRF3]], upregulating [[p16]]/[[p21 CIP1|p21]] and a pro-inflammatory [[SASP]].

## Clinical relevance

Baseline NAD+ metabolism and senescent CD8+ T-cell infiltration scores correlate with endoscopic/Mayo activity and predict non-response to [[Infliximab]] and [[Vedolizumab]], positioning the axis as a candidate prognostic biomarker and therapeutic entry point. The authors note context-dependence: NAD+ precursor supplementation has been reported protective for the intestinal epithelium, so targeted rather than systemic NAD+ modulation is proposed.

## Documents

- [[_document_ - Aging Cell - 2026 - Ye - NAD  Metabolic Reprogramming Drives CD8  T Cells Senescence and Exacerbates Ulcerative Colitis|Ye et al., 2026, Aging Cell]]: defines the reprogramming, maps it spatially to senescent niches, and establishes it as the cause of CD8+ T-cell senescence.

## Connections

- [[NAD+]], [[NAD+ Salvage Pathway]] — the depleted metabolite and its biosynthetic route
- [[NAMPT]], [[CD38]], [[SIRT1]], [[PARP1]] — salvage/consuming enzymes whose imbalance defines the hyperconsumptive state
- [[Senescent CD8+ T Cells]], [[Ulcerative Colitis]] — the senescent population and disease the reprogramming drives
- [[FK866]], [[SRT1720]], [[NMN]] — pharmacological tools that deplete or restore NAD+ and respectively induce/rescue senescence
- [[Mitochondrial Dysfunction]], [[mtDNA]], [[cGAS-STING Pathway]] — downstream organelle-to-innate-immune cascade
- [[Oxidative Phosphorylation]], [[Glycolysis]], [[Mitochondrial ROS]] — metabolic and redox shifts accompanying NAD+ loss
- [[Infliximab]], [[Vedolizumab]] — biologics whose non-response the signature predicts

## Linking Summary

- New links added: [[NAD+]], [[NAD+ Salvage Pathway]], [[NAMPT]], [[CD38]], [[SIRT1]], [[PARP1]], [[FK866]], [[SRT1720]], [[NMN]], [[Senescent CD8+ T Cells]], [[Ulcerative Colitis]], [[Oxidative Phosphorylation]], [[Glycolysis]], [[Mitochondrial Dysfunction]], [[Mitochondrial ROS]], [[mtDNA]], [[VDAC]], [[cGAS-STING Pathway]], [[IRF3]], [[p16]], [[p21 CIP1]], [[SASP]], [[Infliximab]], [[Vedolizumab]]
- Suggested new entity notes to create: [[Kynurenine Pathway]], [[Preiss-Handler Pathway]]
- Strong connections to strengthen: [[NAD+ Metabolic Reprogramming]] ↔ [[Senescent CD8+ T Cells]], [[NAD+ Metabolic Reprogramming]] ↔ [[cGAS-STING Pathway]], [[NAD+ Metabolic Reprogramming]] ↔ [[NAD+]]
