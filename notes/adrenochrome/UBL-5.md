---
title: UBL-5
description: UBL-5 is a ubiquitin-like protein in C. elegans that is essential for the transcriptional activation of the Mitochondrial Unfolded Protein Response (UPRmt).
type: entity
created: 2026-07-04
updated: 2026-07-06
tags:
  - protein
aliases: []
---

# UBL-5

UBL-5 is a ubiquitin-like protein in *Caenorhabditis elegans* that functions as an essential transcriptional cofactor for the [[Mitochondrial Unfolded Protein Response]] (UPRmt). Despite its ubiquitin-like domain, UBL-5 does not conjugate to target proteins like ubiquitin; instead, this domain mediates protein-protein interactions that stabilize the transcriptional complex responsible for upregulating mitochondrial chaperones and proteases under stress.

## Overview

UBL-5 belongs to the ubiquitin-like protein family but is functionally distinct from canonical ubiquitin. While ubiquitin is covalently attached to substrates to signal degradation, UBL-5 uses its ubiquitin-like fold as a binding interface to interact with other proteins, particularly the homeobox transcription factor [[DVE-1]]. This interaction is critical for mounting the UPRmt, a stress-response pathway that monitors and maintains proteostasis within the [[Mitochondrion]].

UBL-5 was first characterized in *C. elegans* as a nuclear protein whose expression and localization are rapidly induced upon mitochondrial perturbation. It acts downstream of the mitochondrial stress sensor [[ATFS-1]] and works in concert with DVE-1 to drive the expression of nuclear-encoded mitochondrial quality-control genes. Loss of UBL-5 function abolishes the UPRmt, leading to accumulation of misfolded mitochondrial proteins and increased sensitivity to mitochondrial toxins.

## Mechanism

The UPRmt signaling cascade in *C. elegans* proceeds through a well-defined series of steps in which UBL-5 plays an indispensable role:

1. **Stress Sensing**: Mitochondrial proteotoxic stress — caused by misfolded protein accumulation, electron transport chain dysfunction, or impaired mitochondrial translation — reduces the efficiency of protein import into the mitochondrial matrix.

2. **ATFS-1 Translocation**: The transcription factor [[ATFS-1]], which is normally imported into mitochondria and degraded, accumulates in the cytosol due to reduced import efficiency. Cytosolic ATFS-1 is then shuttled to the nucleus via its nuclear localization signal (NLS).

3. **Transcriptional Complex Assembly**: In the nucleus, ATFS-1 binds to the promoters of UPRmt target genes. It recruits the homeobox protein [[DVE-1]] and the ubiquitin-like protein UBL-5 to form a stable transcriptional activation complex. UBL-5 physically interacts with DVE-1 and is required for DVE-1's proper nuclear accumulation and DNA-binding activity.

4. **Target Gene Activation**: The ATFS-1/DVE-1/UBL-5 complex drives the expression of mitochondrial chaperones — including [[HSP60]] (hsp-60) and HSP6 (hsp-6, a mitochondrial Hsp70 family member) — and mitochondrial proteases such as [[ClpP]] (clpp-1) and ClpX. These effectors restore proteostasis by refolding or degrading damaged proteins within the mitochondrial matrix.

5. **Resolution**: Once mitochondrial proteostasis is reestablished, import efficiency normalizes, ATFS-1 is again degraded in the matrix, and the UPRmt transcriptional program is downregulated.

## Function

UBL-5 is the linchpin of UPRmt transcriptional activation. It stabilizes the ATFS-1/DVE-1 complex through direct physical interaction with DVE-1, enabling sustained expression of quality-control genes. Without UBL-5, DVE-1 fails to accumulate in the nucleus and cannot bind target DNA, rendering the UPRmt nonfunctional even when ATFS-1 is present and activated.

The physiological consequences of UBL-5 loss underscore its importance: *ubl-5* mutant animals exhibit mitochondrial proteotoxicity, shortened lifespan, and hypersensitivity to mitochondrial stressors such as ethidium bromide or doxycycline. The dependence of the UPRmt on UBL-5 also places it at a key node connecting mitochondrial health to organismal longevity. Studies on [[Mitohormesis]] have shown that lifespan extension from mild mitochondrial dysfunction requires intact UBL-5 function, positioning UBL-5 as a gatekeeper of hormetic adaptation.

## Connections

- [[Mitochondrial Unfolded Protein Response]]: UBL-5 is an essential transcriptional cofactor required for UPRmt activation in *C. elegans*.
- [[DVE-1]]: UBL-5 physically interacts with the homeobox transcription factor DVE-1 and is required for its nuclear localization and DNA-binding activity.
- [[ATFS-1]]: UBL-5 acts downstream of ATFS-1; together they form a transcriptional complex that drives UPRmt target gene expression.
- [[C. elegans]]: UBL-5 was characterized in *Caenorhabditis elegans* as a core component of the UPRmt pathway.
- [[HSP60]]: A major mitochondrial chaperone whose expression is upregulated by the ATFS-1/DVE-1/UBL-5 complex during UPRmt activation.
- [[Mitochondrion]]: UBL-5 regulates the cellular response to mitochondrial proteotoxic stress, ultimately restoring organellar proteostasis.

## Linking Summary

- New links added: [[Mitochondrial Unfolded Protein Response]], [[DVE-1]], [[ATFS-1]], [[C. elegans]], [[HSP60]], [[Mitochondrion]], [[ClpP]], [[Mitohormesis]]
- Suggested new entity notes to create: [[HSP6]], [[ClpX]], [[hsp-60]], [[hsp-6]]
- Strong connections to strengthen: [[UBL-5]] ↔ [[DVE-1]], [[UBL-5]] ↔ [[ATFS-1]]
