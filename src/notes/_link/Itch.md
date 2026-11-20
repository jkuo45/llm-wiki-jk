---
title: Itch
description: The HECT-family E3 ubiquitin ligase (AIP4) that polyubiquitylates cFLIP_L in a JNK1-dependent manner, coupling TNF signaling, DNA-damage checkpoints and chemoresistance to the turnover of the caspase-8 rheostat.
protected: false
created: 2026-11-19
updated: 2026-11-19
tags:
  - enzyme
  - ubiquitin
  - cell-death
  - apoptosis
url: #
source: #
aliases:
  - AIP4
  - E3 ubiquitin-protein ligase Itch
  - ITCH
  - NEDD4-like Itch
---

# Itch

**Itch** (E3 ubiquitin-protein ligase, alias *AIP4*) is a HECT-domain E3 ubiquitin ligase that polyubiquitylates [[c-FLIP|cFLIP_L]], the long isoform of the caspase-8 rheostat. Because Itch-mediated degradation lowers cFLIP_L abundance, Itch is an indirect but upstream determinant of whether a TNF-α or DNA-damage stimulus ends in [[Apoptosis]], [[Necroptosis]], or survival.

## Structure & Domains

N-terminal C2 domain (membrane/cytosol targeting), two WW domains (substrate recognition), and a C-terminal HECT catalytic domain. As a HECT ligase, Itch forms a covalent ubiquitin thioester intermediate before transferring ubiquitin to the substrate lysine — a two-step transthiolation chemistry characteristic of the HECT family (see [[E3 Ubiquitin Ligase]]).

## Mechanism of Action & Pathways

- **cFLIP_L degradation.** Itch is required for cFLIP_L degradation during TNF-α-dependent cell death, and the process is [[JNK|JNK1]]-dependent (Chang et al.). The reciprocal arm of the loop: cFLIP_L binds [[MKK7]] and inhibits JNK signaling, so cFLIP_L abundance and JNK activity are mutually antagonistic.
- **DNA-damage route.** [[Cisplatin]] induces an Itch–[[p53]]–cFLIP complex and subsequent cFLIP polyubiquitylation. [[ATM]] activates Itch by Ser161 phosphorylation, which promotes cFLIP_L degradation and links the DNA-damage checkpoint to the death-receptor sensitivity axis.
- **Itch is itself regulated.** Itch is ubiquitylated in an Akt-dependent manner in glioblastoma; PTEN depletion or USP8 (ubiquitin-specific protease 8) overexpression blocks Itch ubiquitylation, and TNF-α-mediated downregulation of USP2 stabilizes polyubiquitylated Itch — in hepatocytes this stabilizes both cFLIP_L and cFLIP_S.
- **Accessibility control.** TG interacting factor (TGIF) promotes TNF-α-dependent apoptosis by increasing the accessibility of cFLIP_L for Itch. Cystatin B reduces Itch abundance and raises cFLIP_L in melanoma cells.
- **Pathogen exploitation.** *Trypanosoma cruzi* infection blocks the cFLIP_L–Itch interaction in HeLa cells, which the authors interpret as a parasite survival strategy that prevents host-cell apoptosis.

> [!info]
> Source: [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
> Itch is the best-characterised single E3 for cFLIP_L but is explicitly **not** the only one: [[c-FLIP|cFLIP]] is polyubiquitylated by a context-dependent set of ligases — Itch (HECT, cFLIP_L), Cbl (RING, cFLIP_S), Cbl-b (RING, cFLIP_L), Mind bomb 1 (RING, cFLIP_L), TRAF7 (RING, cFLIP_L) and [[STUB1|CHIP]] (U-box, cFLIP_L) — with substrate choice varying by isoform, cell type and signal. Gelsolin is reported as a further component of the Itch–p53–cFLIP complex, and its expression confers chemoresistance against cisplatin in gynecologic cancers.

## Physiological Function

Itch sits at the intersection of TNF-α signaling, DNA-damage signaling and cytoskeletal turnover: it couples the stress-activated [[JNK]] axis and the [[p53]] checkpoint to the stability of the protein that decides between the three canonical fates of a death-receptor stimulus.

## Pathology & Clinical Relevance

- **Chemoresistance.** Itch-mediated cFLIP_L degradation sensitizes tumor cells to death-receptor killing; the Itch–p53–cFLIP module and its gelsolin component modulate cisplatin response in gynecologic cancers.
- **Inflammation.** TNF-α-dependent cFLIP_L degradation couples Itch activity to inflammatory signaling output, since loss of cFLIP releases JNK and raises [[Reactive Oxygen Species|ROS]] in tumor cells.
- **Glioblastoma.** Akt-dependent Itch ubiquitylation and the resulting cFLIP turnover are altered in glioblastoma multiforme.

## Documents

- [[_document_ - FLIP the Switch Regulation of Apoptosis and Necroptosis by cFLIP|Tsuchiya et al. 2015]]
  - Itch as the JNK1-dependent E3 for cFLIP_L; Itch–p53–cFLIP complex after cisplatin; ATM Ser161 phosphorylation; USP8/PTEN/USP2 control of Itch stability; TGIF and cystatin B modulation; *T. cruzi* blockade of the cFLIP_L–Itch interaction.

## Connections

- [[c-FLIP]] — the substrate; Itch-mediated polyubiquitylation of cFLIP_L lowers the apoptosis/necroptosis rheostat
- [[JNK]] — JNK1 activates Itch, while cFLIP_L inhibits JNK via MKK7 (a mutual-antagonism loop)
- [[MKK7]] — MAP2K bound by cFLIP_L; upstream of the JNK arm that licenses Itch
- [[p53]] — component of the cisplatin-induced Itch–p53–cFLIP complex
- [[ATM]] — phosphorylates Itch at Ser161, activating cFLIP_L degradation after DNA damage
- [[Cisplatin]] — chemotherapeutic whose Itch–p53–cFLIP route sensitizes cells to death-receptor apoptosis
- [[Proteasome]] — executes Itch-directed cFLIP_L degradation
- [[Ubiquitin]] — the transferred tag that marks cFLIP for destruction
- [[Gelsolin]] — reported component of the Itch–p53–cFLIP complex, linked to chemoresistance
- [[E3 Ubiquitin Ligase]] — the family-level note on HECT/RING/RBR mechanism and the ubiquitin code

## Linking Summary

- New links added: [[c-FLIP]], [[JNK]], [[MKK7]], [[p53]], [[ATM]], [[Cisplatin]], [[Proteasome]], [[Ubiquitin]], [[Gelsolin]], [[E3 Ubiquitin Ligase]], [[Reactive Oxygen Species|ROS]], [[Apoptosis]], [[Necroptosis]], [[STUB1|CHIP]]
- Suggested new entity notes to create: TRAF7, Mind bomb 1, Cbl-b
- Strong connections to strengthen: [[Itch]] ↔ [[c-FLIP]], [[Itch]] ↔ [[JNK]], [[Itch]] ↔ [[p53]]
