---
title: SRF
description: Serum response factor (SRF) is a MADS-box transcription factor that binds CArG boxes and, with the coactivators myocardin and MRTF-A/B, regulates most smooth-muscle and myofibroblast genes, making it a central node in fibrosis.
created: 2026-10-01
updated: 2026-10-02
tags:
  - protein
  - gene
  - transcription-factor
  - signaling
aliases: [serum response factor, MADS2, SRF transcription factor]
---

# SRF

**Serum response factor (SRF)** is a MADS-box transcription factor that binds a conserved palindromic DNA sequence, `[CC(A/T)₆GG]`, known as a **CArG box** or serum response element. SRF regulates genes involved in proliferation, migration, cytoskeletal dynamics, and myogenesis; because the smooth-muscle programme is almost entirely CArG-dependent, SRF is a master regulator of the contractile phenotype.

## Dual role: growth response and muscle identity

SRF occupies two distinct regulatory contexts:

- **Serum response.** SRF binds CArG boxes in the promoters of immediate-early growth-response genes such as *c-fos*, cooperating with ternary complex factor (Ets-family) partners whose phosphorylation is the readout of [[MAPK]] signalling. This is where the "serum response factor" name comes from.
- **Muscle and myofibroblast programme.** SRF controls nearly every known smooth-muscle-specific gene. In muscle lineages SRF is not itself muscle-restricted — its myogenic specificity comes from which cofactors are present.

## Cofactors determine the output

SRF's transcriptional reach is set by its associated coactivators:

| Cofactor | Character |
|---|---|
| **Myocardin (MYOCD)** | Cardiac and smooth-muscle restricted; required and sufficient with SRF for muscle gene activation. A dominant-negative myocardin blocks myocardial differentiation. |
| **MRTF-A (MKL1)** and **MRTF-B (MKL2)** | Ubiquitously expressed, signal-responsive. Nuclear accumulation of MRTF-A in a Rho-ROCK-dependent manner is the switch that converts stress into transcription. |
| **Ternary complex factors (ELK1, etc.)** | Ets-family partners mediating growth-factor responsiveness. |

> [!info] SRF needs a partner to be a muscle factor
> SRF binds CArG DNA on its own but activates muscle promoters weakly; the potent response comes from myocardin and MRTF binding through their SAP domains to the MADS-box region of SRF. This distinguishes SRF from MEF2, another MADS-family muscle regulator — SRF and MEF2 interact at the promoter but show no detectable direct interaction.

## Rho-ROCK-MRTF-SRF as a mechanotransduction axis

Cytoskeletal tension is converted into gene expression through this cascade: RhoA activation → ROCK activation → actin polymerisation → MRTF-A release from G-actin sequestration → nuclear accumulation → CArG-box transcription. Laminar shear stress and stiff extracellular matrix both engage it, which is why SRF-dependent transcription is a hallmark of mechanically loaded cells.

## Role in fibrosis

The path to fibrosis runs through this axis:

- TGF-β₁ induces nuclear MRTF-A accumulation in a Rho-ROCK-dependent manner, driving α-smooth-muscle actin and extracellular-matrix gene expression.
- *Col1a2* (collagen type I α2) is a direct SRF/MRTF-A target; an evolutionarily conserved CArG box in its promoter is bound by endogenous SRF, and CArG mutation abolishes TGF-β₁ responsiveness.
- MRTF-A knockout mice show dramatically diminished fibrosis and scar formation after myocardial infarction and after angiotensin II treatment.
- In renal fibroblasts, TGF-β₁-driven MRTF-SRF signalling induces lysyl oxidase family members, type I procollagen, fibronectin, and integrin/ILK focal-adhesion components, with integrin blockade feeding back to suppress MRTF-SRF activity. Dual fibroblast-specific loss of MRTF-A and MRTF-B protects from adenine-induced renal fibrosis.
- High levels of both SRF and myocardin accompany the differentiated vascular smooth-muscle phenotype in atherosclerotic lesions.

> [!warning] CArG boxes are degenerate, and that matters
> Target specificity is set by flanking binding sites for other transcription factors and by the number and affinity of CArG boxes in a given promoter. Recent work argues that **degeneracy** of CArG sequences is functionally important: it lets stress-responsive nuclear accumulation of MRTF-A activate genes that a high-affinity SRF alone would not engage. Predictions based on consensus CArG sequences alone will therefore over- or under-estimate real target sets.

## Documents
- (no document notes yet)

## Connections
- [[Transcription Factor]] — SRF is a MADS-box DNA-binding transcription factor whose activity is cofactor-dependent rather than autonomous.
- [[FOS]] — the canonical immediate-early gene whose promoter carries a CArG box; SRF binding there is the original "serum response" that named the protein.
- [[RhoA]] — upstream activator of the ROCK-MRTF arm that translocates the SRF coactivator into the nucleus.
- [[ROCK]] — the kinase that links RhoA activation to MRTF-A nuclear accumulation, converting cytoskeletal tension into SRF-dependent transcription.
- [[TGF-beta]] — the dominant upstream driver of SRF-cofactor-dependent myofibroblast activation and therefore of fibrotic transcription.
- [[MAPK]] — phosphorylates the Ets-family ternary complex factors that partner SRF at growth-response promoters.

## Linking Summary
- New links added: [[Transcription Factor]], [[FOS]], [[RhoA]], [[ROCK]], [[TGF-beta]], [[MAPK]]
- Suggested notes to create: [[Serum Response Element]], [[CArG box]], [[Myocardin]], [[MRTF-A]], [[MRTF-B]], [[MADS box]], [[Ternary Complex Factor]], [[Collagen type I]], [[α-SMA]]
- Strong connections to strengthen: [[SRF]] ↔ [[ROCK]], [[SRF]] ↔ [[TGF-beta]], [[SRF]] ↔ [[Transcription Factor]]