---
title: H3K27ac
description: Acetylation of histone H3 at lysine 27, a hallmark active-enhancer mark that is remodeled at TAD scale in senescence and recruits BRD4/CEBPα to drive SASP.
created: 2026-07-09
updated: 2026-07-09
tags:
  - scientific-concept
  - histone-modification
  - enhancer-mark
  - senescence
aliases:
  - H3 lysine 27 acetylation
  - Histone H3 acetylated at lysine 27
---

# H3K27ac

H3K27ac is the acetylation of lysine 27 on the N-terminal tail of histone H3. It is one of the most informative chromatin marks for active enhancers and promoters, and in cellular senescence it is the signature mark whose genome-wide remodeling orchestrates [[SASP|Senescence-Associated Secretory Phenotype]] expression, as reviewed in the npj Aging survey (Dasgupta et al., 2024; https://doi.org/10.1038/s41514-024-00172-2).

## Definition

H3K27ac is mutually informative with H3K4me1 (active enhancer) versus H3K27me3 (Polycomb-repressed). High H3K27ac + H3K4me1 denotes active enhancers; H3K27me3 alone denotes repressed promoters/enhancers. The acetyl group neutralizes the positive charge of lysine, loosening DNA–histone contacts and creating a binding surface for bromodomain readers.

## Writer, Reader, Eraser

- **Writer:** Histone acetyltransferases of the p300/CBP family install H3K27ac at enhancers; p300 is specifically recruited to senescence-activated [[Super-enhancer|super-enhancers]] (Sen et al., 2019, PMID 30753809).
- **Reader:** The BET-family protein [[BRD4]] and the transcription factor [[CEBPα]] bind H3K27ac at senescence-activated enhancers flanking SASP genes (Tasdemir et al., 2016, PMID 27193494; Guan et al., 2020, PMID 33004516). [[HDAC4]], a catalytically inactive class IIa HDAC, is recruited to H3K27ac loci as an epigenetic reader that monitors acetylation status.
- **Eraser:** Class I/IIa HDACs remove the mark; HDAC4, together with [[HDAC3]], buffers the H3K27ac program until its senescence-entry degradation.

## Role in SASP and Senescence

Upon senescence entry, enhancers marked by H3K27ac undergo global remodeling at the [[Topologically Associating Domain|TAD]] scale in replicative (RS), oncogene-induced (OIS) and therapy-induced (TIS) senescence across human and murine fibroblasts (Guan et al., 2020; Tasdemir et al., 2016). Most enhancer activation occurs de novo from unmarked chromatin. Senescence-activated super-enhancers are enriched in H3K27ac (plus [[H3K18ac]], [[H3K122ac]], [[H4K5ac]]) and directly drive SASP genes. The pioneer factor [[AP-1]] opens these enhancers; BRD4 and C/EBPα bind H3K27ac to induce NF-κB-regulated SASP genes. HDAC4 normally restrains this axis and is degraded upon senescence, unleashing AP-1/p300 transcription (Di Giorgio et al., 2021, PMID 33948120).

## Mechanistic Details

H3K27ac is both a marker and a functional hub: its acetyl moiety recruits the transcriptional machinery via BRD4, and its genomic distribution defines the senescence enhancer landscape. Loss of BRD4 binding at H3K27ac enhancers impairs SASP immune surveillance (Tasdemir et al., 2016). The H3K27ac axis therefore integrates pioneer opening, acetyl-writing, and reader recruitment into SASP output.

## Clinical and Therapeutic Relevance

The H3K27ac–BRD4 axis is directly targetable: BET inhibitors (apabetalone, molibresib) and BRD4 degraders in clinical trials can be repurposed as [[Senomorphic|senomorphics]] (see [[KDM4]], [[DOT1L]]).

## Metabolic Gating of H3K27ac by Mitochondrial Acetyl-CoA

Beyond writers and readers, H3K27ac at SASP loci is gated by substrate availability. In senescent cells, mitochondrial pyruvate metabolism produces the acetyl-CoA pool used for H3K27ac deposition: pyruvate enters mitochondria via the [[MPC|mitochondrial pyruvate carrier]], citrate is exported by the mitochondrial citrate carrier [[SLC25A1]], and cytoplasmic [[ACLY]] regenerates acetyl-CoA. Inhibiting [[SLC25A1]] (with [[CTPI2]]) or [[MPC]] depletes this pool and removes H3K27ac specifically at SASP enhancers, blunting SASP expression without affecting cell viability. Acetate supplementation rescues the mark via [[ACSS2]], confirming acetyl-CoA availability as the limiting input.

> [!important] Source: [[_document_ - Mitochondrial metabolism and epigenetic crosstalk drive SASP|Mitochondrial metabolism and epigenetic crosstalk drive SASP]]
> H3K27ac loss upon SLC25A1 inhibition is an active, transcription-dependent process (not passive mark dilution), is restricted to SASP loci, and is independent of [[Mitochondrial DNA|mtDNA]]-mediated signaling — separating the acetyl-CoA epigenetic checkpoint from the mtDNA–[[cGAS-STING Pathway|cGAS-STING]] arm of the SASP. In vivo, CTPI2 reduced age-related [[Frailty]] and improved healthspan in aged mice.

## Documents

- [[_document_ - The role of the dynamic epigenetic landscape in senescence_orchestrating SASP expression]] — H3K27ac is the active-enhancer mark remodeled at TAD scale in senescence; AP-1 opens enhancers, BRD4/CEBPα bind H3K27ac at SA-SEs to drive SASP.
- [[_document_ - Mitochondrial metabolism and epigenetic crosstalk drive SASP|Mitochondrial metabolism and epigenetic crosstalk drive SASP]] — Demonstrates that H3K27ac at SASP loci depends on mitochondrial citrate-derived acetyl-CoA (MPC/SLC25A1/ACLY); SLC25A1 inhibition removes H3K27ac and suppresses SASP.

## Connections

- [[BRD4]]: Bromodomain reader of H3K27ac at SASP enhancers.
- [[AP-1]]: Pioneer factor that opens H3K27ac-marked enhancers.
- [[Super-enhancer]]: H3K27ac-rich SEs drive SASP.
- [[P300]]: HAT that writes H3K27ac at SEs.
- [[HDAC4]]: Reader that buffers the H3K27ac program.
- [[SASP|Senescence-Associated Secretory Phenotype]]: H3K27ac remodeling drives SASP.
- [[Acetyl-CoA]]: Substrate pool for H3K27ac deposition, supplied by mitochondrial citrate export in senescence.
- [[MPC]]: Pyruvate carrier feeding the mitochondrial acetyl-CoA axis upstream of H3K27ac.
- [[SLC25A1]]: Mitochondrial citrate carrier; inhibition depletes H3K27ac at SASP loci.
- [[ACLY]]: Cytosolic acetyl-CoA generator from exported citrate.
- [[ACSS2]]: Acetate-dependent route that rescues H3K27ac upon SLC25A1 inhibition.
- [[CTPI2]]: SLC25A1 inhibitor that removes H3K27ac and suppresses SASP in vivo.

## Linking Summary

- New links added: [[BRD4]], [[CEBPα]], [[HDAC4]], [[HDAC3]], [[AP-1]], [[Super-enhancer]], [[P300]], [[Enhancer-Promoter Looping]], [[Topologically Associating Domain]], [[H3K18ac]], [[H3K122ac]], [[H4K5ac]], [[H3K4me1]], [[SASP|Senescence-Associated Secretory Phenotype]], [[Senomorphic]], [[KDM4]], [[DOT1L]], [[Senescence]], [[Acetyl-CoA]], [[MPC]], [[SLC25A1]], [[ACLY]], [[ACSS2]], [[CTPI2]], [[Mitochondrial DNA]]
- Suggested new entity notes to create: [[CBP]], [[H3K27me3]]
- Strong connections to strengthen: [[H3K27ac]] ↔ [[BRD4]]; [[H3K27ac]] ↔ [[SASP|Senescence-Associated Secretory Phenotype]]; [[Acetyl-CoA]] ↔ [[SLC25A1]] ↔ [[H3K27ac]]
