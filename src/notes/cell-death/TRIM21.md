---
title: TRIM21
description: Tripartite motif containing 21, a RING E3 ubiquitin ligase that interacts with RIPK1 and catalyzes its ubiquitination to regulate necroptosis and antiviral immunity.
protected: false
created: 2026-09-11
updated: 2026-11-19
tags: [enzyme, cell-death, ubiquitin, innate-immunity]
url: #
source: #
aliases: [Tripartite motif containing 21, TRIM21 E3 ligase, RNF81]
---

# TRIM21

**TRIM21** (tripartite motif containing 21) is a RING-domain E3 ubiquitin ligase that directly interacts with [[RIPK1]] and catalyzes the ubiquitination of [[RIPK1]] through its RING domain, tuning RIPK1-dependent necroptosis. It also links [[TNFR1]] signaling to mitochondrial [[ROS]] production via TRAF2 recruitment.

## Structure & Domains

N-terminal RING (catalytic), B-box, coiled-coil (dimerization), and C-terminal PRYSPRY (substrate/IgG recognition) domains.

## Mechanism of Action & Pathways

- **RIPK1 ubiquitination.** TRIM21 binds [[RIPK1]] and ubiquitinates it, modulating necrosome assembly and downstream [[RIPK3]]–[[MLKL]] signaling.
- **TNFR1–mtROS axis.** TRAF2-recruited TRIM21 drives electron leak at Complex I, raising mtROS that propagate pro-inflammatory and pro-death programs.

> [!info]
> Source: [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
> TRIM21 also acts as a quality-control ligase for [[c-FLIP]]: the Cflip-l+46 mutant cFLIP_L (X482W stop-codon extension, C-terminal 46-amino-acid tail) is polyubiquitylated by TRIM21 and rapidly degraded by the proteasome, and the mice die around E13.5. This is a distinct substrate from RIPK1 and shows TRIM21 controlling the abundance of the apoptosis/necroptosis switch protein itself, not only necrosome assembly.

## Physiological Function

Regulates viral infections and antiviral immunity, balancing interferon induction against necroptotic clearance of infected cells.

## Pathology & Clinical Relevance

- **Viral infections and antiviral immunity:** TRIM21-mediated RIPK1 regulation shapes host defense.
- **Autoimmune diseases:** dysregulated TRIM21 ubiquitination contributes to autoimmunity.

## Documents

- [[_document_ - crosstalk_cell_death_mechanisms_s41420-025-02328-9|Crosstalk Among Cell Death Mechanisms (Eskander et al. 2025)]]
  - TNFR1–TRAF2–TRIM21 induction of mitochondrial ROS feeding necroptosis.
- [[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026 Front Immunol]]
  - TRIM21 RING-domain ubiquitination of RIPK1 promotes its activation/pro-necrotic function; the specific ubiquitin chain types and their stability-vs-signaling contributions remain unresolved.
- [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
  - TRIM21 polyubiquitylates the C-terminally extended Cflip-l+46 cFLIP_L mutant and targets it for proteasomal degradation, causing embryonic lethality at ~E13.5.

## Connections

- [[RIPK1]] — direct interactor; TRIM21 ubiquitinates RIPK1 via its RING domain
- [[RIPK3]] — downstream necrosome kinase gated by RIPK1 ubiquitination status
- [[MLKL]] — terminal executioner of the TRIM21-tuned necroptosis pathway
- [[ROS]] — mitochondrial ROS produced downstream of TNFR1–TRAF2–TRIM21 signaling
- [[TNFR1]] — receptor platform recruiting the TRAF2–TRIM21 axis
- [[c-FLIP]] — quality-control substrate; TRIM21 clears the C-terminally extended cFLIP_L mutant
- [[Proteasome]] — executes TRIM21-directed degradation of c-FLIP_L

## Linking Summary

- New links added: [[RIPK1]], [[RIPK3]], [[MLKL]], [[ROS]], [[TNFR1]]
- Strong connections to strengthen: [[TRIM21]] ↔ [[RIPK1]], [[TRIM21]] ↔ [[ROS]]
- Source enrichment (2026-09-14): [[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026]] — TRIM21 as a positive RIPK1 regulator; unresolved ubiquitin-chain-type question.
- Source enrichment (2026-11-19): [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]] — TRIM21 quality-control of the extended cFLIP_L (Cflip-l+46) mutant; embryonic lethality at ~E13.5. New links: [[c-FLIP]], [[Proteasome]].
