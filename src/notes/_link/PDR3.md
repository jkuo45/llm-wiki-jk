---
title: PDR3
description: PDR3 is a bZIP transcription factor of Saccharomyces cerevisiae and a paralog of Pdr1 that drives the pleiotropic drug resistance network, including plasma membrane drug efflux transporters and proteasome stress genes.
protected: false
created: 2026-10-01
updated: 2026-10-02
tags:
  - transcription-factor
  - gene
  - mitochondria
aliases: [Pdr3p, PDR3 transcription factor, pleiotropic drug resistance 3]
---

# PDR3

**PDR3** (Pdr3p) is a bZIP [[Transcription Factor]] of the budding yeast *Saccharomyces cerevisiae* and the best-studied paralog of Pdr1p. It sits at the head of the pleiotropic drug resistance (PDR) network, the largest and best-characterised transcriptional stress programme in yeast, and it is a principal effector of the mitochondrial unfolded protein response (UPR<sup>m</sup>).

## Structure & Sequence Features

Pdr3p is a 976-residue protein with a C-terminal DNA-binding domain of the bZIP class, closely related to that of Pdr1p. The two paralogs bind the same core motif — the PDR responsive element (PDRE), consensus **5′-YYGTT-3′** (often written YNATTGGTTAAT, where Y is a pyrimidine) — but differ in the flanking sequences they prefer, which is why their regulons overlap only partially.

> [!info] Two paralogs, two regulons
> Genomic occupancy profiling (CUT&RUN) and binding assays show that flanking sequence context around the PDRE motif measurably alters binding affinity and, more importantly, transcriptional activity. This contributes to Pdr3's distinctive stress-responsive target set relative to Pdr1.

## Mechanism and Targets

PDR3 binding to PDREs activates genes in several defence classes:

- **Drug efflux transporters** — plasma membrane pumps of the PDR5/ABC and SNQ2/MFS families, which eject xenobiotics, azole antifungals and lipids.
- **Proteasome and chaperone stress genes** — including **RPN4**, the proteasome assembly chaperone/regulator, which is itself very short-lived and binds the proteasome directly.
- **Mitoproteostasis effectors** — the adaptor **Cis1**, which recruits the AAA ATPase Msp1/ATAD1 to mitochondria so that stalled, ubiquitinated precursors can be extracted and delivered to the proteasome; this is the defining output of mitoCPR.
- **Asparagine biosynthesis** — ASN1, part of the metabolic arm of the network.
- **Ergosterol and sphingolipid biosynthesis** genes, linking antifungal resistance to membrane sterol flux.

Basal PDR3-dependent expression of the network additionally requires the SWI/SNF chromatin remodeller and the histone chaperone Rtt106, which localises to PDR network promoters in a Pdr3-dependent manner; loss of Rtt106 abolishes Pdr3-mediated basal expression.

## Mitochondrial Stress Connection

PDR3 is a canonical target of the [[HSF1]]-driven response to mitochondrial protein import failure. When precursor proteins accumulate in the cytosol — as in [[mPOS]] or mitochondrial unfolded protein stress — the Pdr3 arm of the PDR network is induced alongside [[Heat Shock Proteins|chaperones]] and [[Ubiquitin-Proteasome System|proteasomal]] capacity, raising cytosolic clearance thresholds. Overactivation of the PDR network is a recurring cause of multidrug resistance in fungi and is an active antifungal drug target.

> [!warning] Organism scope
> PDR3 is a fungal (yeast) factor with **no clear homologue in higher organisms**; the mammalian mitoproteostasis machinery uses ATF4/ATF5, HSF1, NRF1/NRF2 and the selective-autophagy receptors p62/PARK7 instead. Yeast mitoproteostasis is nonetheless widely used as a tractable model for conserved principles, and human Msp1/ATAD1 mutations cause a severe early-infantile encephalopathy — so the downstream machinery is conserved even though the transcriptional factor is not.

## Documents

- [[_document_ - Mitohormesis - 2023_NOV|Mitohormesis - 2023_NOV]] — places PDR3 in the yeast mitochondrial import-stress hierarchy: HSF1 → RPN4 → PDR3, describes the Cis1/Msp1 arm of mitoCPR, and states explicitly that RPN4 and PDR3 lack clear mammalian homologues.

## Connections

- [[Saccharomyces cerevisiae]] — PDR3 was characterised in budding yeast, where the PDR network is the model system for transcription-factor-driven multidrug resistance and the standard genetic toolkit (PDRE reporters, pdr3Δ and pdr1Δ strains) makes it experimentally tractable.
- [[HSF1]] — The yeast heat-shock transcription factor sits upstream of the Pdr3 arm of the mitoproteostatic stress response, so cytosolic precursor accumulation engages both arms jointly.
- [[Ubiquitin-Proteasome System]] — Pdr3 drives RPN4 and proteasome-associated transcription, coupling the transcriptional stress response to downstream degradation capacity.
- [[Proteostasis]] — Pdr3 induction is a canonical transcriptional output of the yeast proteostasis network, and persistent Pdr3 activity is itself a cause of misfolded-protein and drug resistance phenotypes.
- [[mitoCPR]] — The mitochondrial compromised protein response, or mitoCPR, is the yeast pathway whose transcriptional output includes Pdr3 and which drives the stress-induced clearance of unimported precursors.
- [[Mitophagy]] — Both pathways remove damaged mitochondrial material by a ubiquitin- and receptor-dependent route and converge on the lysosome, so they are read together when mitoproteostasis fails.

## Linking Summary

- New links added: [[PDR5]], [[ABC Transporter]], [[RPN4]], [[Cis1]], [[Msp1]], [[NRF1]], [[NRF2]], [[Asparagine biosynthesis]]
- Suggested notes to create: [[PDR5]], [[ABC Transporter]], [[RPN4]], [[Pdr1]], [[Cis1]], [[Msp1]]
- Strong connections to strengthen: [[PDR3]] ↔ [[Pdr1]], [[PDR3]] ↔ [[mPOS]], [[PDR3]] ↔ [[Proteasome]]
