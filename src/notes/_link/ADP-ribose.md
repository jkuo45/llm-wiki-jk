---
title: ADP-ribose
description: Free ADP-ribose is the monomer cleaved from PAR/MAR by hydrolases; it gates TRPM2 calcium influx and is degraded by Nudix enzymes to AMP and ribose-5-phosphate, coupling PAR turnover to Ca2+ signaling and NAD+ salvage cost.
protected: false
created: 2026-09-14
updated: 2026-09-14
tags: [metabolite, adp-ribosylation, parthanatos, calcium-signaling]
url: #
source: #
aliases: [ADPR, ADPr, ADP ribose, free ADP-ribose]
---

# ADP-ribose

**ADP-ribose** (ADPR) is the monomeric unit transferred from [[NAD+]] by ADP-ribosyltransferases onto target proteins and nucleic acids. When [[PAR]] or mono-ADP-ribose marks are erased, free ADP-ribose is released. It is not merely a waste product: free ADPR is a signalling metabolite that gates the Ca2+-permeable channel [[TRPM2]] and, after Nudix cleavage, feeds [[AMP]] and ribose-5-phosphate back into nucleotide metabolism.

## Sources and fates

- **Source — PAR/MAR catabolism:** [[PARG]] and [[ARH3]] hydrolyze [[PAR]] chains to free ADP-ribose (and terminal ADP-ribose units). Ectoenzymes of the ADP-ribosyl cyclase family ([[CD38]], [[CD157]]) also produce ADPR from NAD+.
- **Signalling fate — TRPM2 gating:** free ADPR binds the NUDT9-homology domain of [[TRPM2]], opening the channel to Ca2+ (and other cations). In [[Parthanatos]], PARG-dependent free-ADPR generation links PARP1 hyperactivation to Ca2+ influx, with downstream candidates [[Calpain]] and the [[Mitochondrial Permeability Transition Pore]].
- **Metabolic fate — Nudix degradation:** [[Nudix Hydrolases]] cleave free ADPR to [[AMP]] + ribose-5-phosphate. AMP can inhibit the mitochondrial adenine nucleotide translocator and activate [[AMPK]]–[[mTORC1]] signalling; ribose-5-phosphate → PRPP supports [[NAD+]] salvage at a cost of ~4 high-energy phosphates per cycle.

> [!info]
> Source: [[_document_ - Parthanatos Moura 2024 molecular mechanisms more questions than answers|Moura et al. 2024]]
> Free ADP-ribose is a branch point of the parthanatos cascade: [[TRPM2]] opening (Ca2+ arm) versus [[Nudix Hydrolases]] degradation (AMP/salvage arm). Whether TRPM2 gating is necessary or sufficient, and the relative flux through each arm, remain open questions. ADP-ribose-dependent TRPM2 activation requires [[PARG]] activity, whereas [[Endoplasmic Reticulum]] Ca2+ release in parthanatos was PARG-independent.

## Documents

List of documents that mention this entity

- [[_document_ - Parthanatos Moura 2024 molecular mechanisms more questions than answers|Moura et al. 2024 Genet Mol Biol]]
  - Frames free ADP-ribose as the link between PAR catabolism, TRPM2 Ca2+ influx, and Nudix-derived AMP salvage during parthanatos; lists open questions on its source, transport, and downstream effects.

## Connections

- [[NAD+]] — the substrate whose ADP-ribose moiety becomes the transferred monomer.
- [[PAR]] — polymer source of free ADP-ribose after hydrolase cleavage.
- [[PARG]] — endo/exo-glycosidase generating free ADP-ribose; required for ADPR-dependent [[TRPM2]] gating.
- [[ARH3]] — removes serine-linked ADP-ribose and trims short PAR chains.
- [[TRPM2]] — direct ADPR-gated calcium channel.
- [[Nudix Hydrolases]] — degrade ADPR to AMP + ribose-5-phosphate.
- [[AMP]] — product of Nudix cleavage; ANT inhibition and AMPK activation.
- [[CD38]] and [[CD157]] — ectoenzymes producing ADPR and cyclic ADP-ribose.
- [[Parthanatos]] — ADPR is a central downstream signalling node.
- [[Calcium Signaling]] — ADPR-gated Ca2+ entry engages Ca2+-dependent death effectors.

## Linking Summary

- New note in `src/notes/_link/` resolving the orphan [[ADP-ribose]] link from [[CD157]] and serving the parthanatos cascade (cell-death / metabolism / calcium signalling).
- New links added: [[NAD+]], [[PAR]], [[PARG]], [[ARH3]], [[TRPM2]], [[Nudix Hydrolases]], [[AMP]], [[CD38]], [[CD157]], [[Parthanatos]], [[Calcium Signaling]], [[Calpain]], [[Mitochondrial Permeability Transition Pore]], [[mTORC1]].
- Suggested new entity notes: none new (2'-deoxy-ADPR is an optional future stub).
- Strong connections to strengthen: [[ADP-ribose]] ↔ [[TRPM2]], [[ADP-ribose]] ↔ [[Nudix Hydrolases]].
