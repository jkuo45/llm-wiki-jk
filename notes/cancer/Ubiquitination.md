---
title: Ubiquitination
description: Covalent attachment of ubiquitin (76 aa) to target proteins via E1-E2-E3 cascade; a key post-translational modification governing protein turnover, signaling, endocytosis, cell cycle, autophagy, and immune response.
type: entity
created: 2026-07-06
updated: 2026-07-06
tags:
  - biological-process
aliases: []
---

# Ubiquitination

Ubiquitination is the covalent attachment of [[Ubiquitin]], a highly conserved 76-amino acid protein, to lysine residues or the N-terminus of target proteins. It is one of the most versatile [[Post-translational modification|post-translational modifications]], regulating protein stability, localization, activity, and interactions. The pathway proceeds through a three-step enzymatic cascade: an [[E1 activating enzyme]] activates ubiquitin in an [[ATP]]-dependent reaction, transferring it to an [[E2 conjugating enzyme]], which then works with an [[E3 ligase]] to conjugate ubiquitin to the substrate. Humans possess two E1s ([[UBA1]] and [[UBA6]]), ~40 E2s, and ~600 E3 ligases, reflecting the immense specificity and regulatory capacity of the system. Ubiquitin itself can be modified into polymeric chains of distinct linkage types, each encoding a different cellular fate.

## Ubiquitin Chain Types

Ubiquitin contains seven internal lysines (K6, K11, K27, K29, K33, K48, K63) plus the N-terminal methionine (M1), each capable of forming homotypic or heterotypic chains. Different chain topologies adopt distinct three-dimensional conformations that are recognized by specific ubiquitin-binding domains:

- **M1 (linear)** — Assembled by the [[LUBAC]] complex ([[HOIP]], [[HOIL-1]], [[SHARPIN]]). Regulates [[NF-κB]] signaling via linear ubiquitination of [[NEMO]] and [[RIPK1]].
- **K48** — The classical proteasomal degradation signal. Tetra-ubiquitin chains linked through K48 are the minimal signal for recognition by the [[26S proteasome]]. Governs the turnover of countless cell cycle regulators, transcription factors, and damaged proteins.
- **K63** — Non-degradative signaling chains. Mediates [[NF-κB]] activation, [[DNA repair]], [[Endocytosis]], and [[Multivesicular body]] (MVB) sorting. Recruits kinase complexes and adaptors via [[TAB2]], [[TAB3]], and [[RAP80]].
- **K11** — Functions in [[Cell cycle]] regulation. The [[Anaphase-Promoting Complex/Cyclosome]] ([[APC/C]]) assembles K11 chains on substrates such as [[Cyclin B]] and [[Securin]] to drive mitotic exit.
- **K29, K33** — Less characterized; implicated in [[Wnt signaling]] regulation (K29 by [[ITCH]]) and [[AMPK]]-related kinase signaling (K33). Thought to modulate protein function rather than targeting for degradation.

Mixed and branched chains add further complexity — for example, K48/K63 branched chains enhance proteasomal targeting of substrates initially modified with K63 linkages.

## Functions

Ubiquitination governs virtually every major cellular process:

- **[[Proteasomal degradation]]** — The canonical function. K48-polyubiquitinated proteins are recognized by the [[19S regulatory particle]] of the [[26S proteasome]], deubiquitinated, unfolded, and translocated into the [[20S core particle]] for proteolysis. This eliminates damaged, misfolded, or short-lived regulatory proteins such as [[p53]], [[Cyclins]], and [[IκBα]].
- **[[NF-κB]] signaling** — K63-linked ubiquitination of [[NEMO]] (IKKγ) by [[TRAF6]] or [[LUBAC]] (M1-linear) scaffolds the [[IKK complex]], enabling phosphorylation of [[IκBα]] and subsequent nuclear translocation of [[NF-κB]]. This is essential for inflammatory and immune gene expression.
- **[[DNA repair]]** — Following [[DNA double-strand breaks]], [[RNF168]] and [[RNF8]] ubiquitinate [[H2A]] and [[H2AX]] at damage foci with K63 chains, recruiting repair factors such as [[RAP80]], [[BRCA1]], and [[53BP1]].
- **[[Endocytosis]] and [[MVB sorting]]** — K63 ubiquitination of cell-surface receptors (e.g., [[EGFR]], [[GPCRs]]) triggers internalization, [[ESCRT]]-mediated sorting into intraluminal vesicles, and lysosomal degradation. [[CBL]] family E3 ligases mediate receptor downregulation.
- **[[Cell cycle]]** — The [[APC/C]] (a multi-subunit E3 ligase) ubiquitinates [[Cyclin B]] and [[Securin]] at the metaphase–anaphase transition, driving mitotic exit. [[SKP2]] (part of the [[SCF]] complex) ubiquitinates [[p27]] to promote G1/S progression.
- **[[Autophagy]]** — Ubiquitin serves as a cargo recognition signal for selective autophagy. [[p62]]/[[SQSTM1]] and [[NBR1]] contain both ubiquitin-binding [[UBA domains]] and [[LC3]]-interacting regions (LIRs), bridging ubiquitinated protein aggregates and damaged organelles to the autophagic machinery.
- **[[Mitophagy]]** — [[PINK1]] accumulates on depolarized mitochondria and recruits [[Parkin]] (an [[E3 ligase]]). Parkin ubiquitinates outer mitochondrial membrane proteins such as [[VDAC1]], [[MFN1]]/[[MFN2]], and [[TOM20]], marking the mitochondria for autophagic clearance via [[OPTN]] and [[NDP52]].
- **Immune response** — [[MHC class I]] antigen presentation requires [[ER-associated degradation]] (ERAD) of misfolded nascent proteins, a process driven by ubiquitination. [[Viral immune evasion]] often involves viral E3 ligases or DUBs that subvert this pathway. [[TNF receptor signaling]] and [[Pattern recognition receptor]] outputs are heavily regulated by ubiquitination.

## Deubiquitinating Enzymes (DUBs)

DUBs reverse ubiquitination by cleaving the isopeptide bond between ubiquitin and its substrate or between ubiquitin moieties in a chain. The human genome encodes ~100 DUBs across six families: [[USP]] (ubiquitin-specific protease, the largest), [[UCH]] (ubiquitin C-terminal hydrolase), [[OTU]] (ovarian tumor domain), [[JAMM]] (JAB1/MPN/Mov34 metalloprotease), [[MINDY]] (motif interacting with Ub-containing novel DUB family), and [[MJD]] (Machado-Joseph disease protein domain). DUBs recycle ubiquitin, rescue substrates from degradation, and edit chain topology. Notable examples include [[USP9X]], which deubiquitinates and stabilizes the anti-apoptotic protein [[Mcl-1]]; [[USP7]]/[[HAUSP]], which stabilizes [[MDM2]] and thereby promotes [[p53]] turnover; and [[CYLD]], a tumor-suppressive DUB that negatively regulates NF-κB by removing K63 chains from [[TRAF2]] and [[NEMO]].

## Pathology

Dysregulated ubiquitination is a hallmark of many diseases, particularly cancer:

- **Dysregulated E3 ligases** — Amplification or overexpression of [[MDM2]] is common in sarcomas and breast cancer, driving constitutive [[p53]] degradation and disabling apoptosis. Overexpression of [[SKP2]] in multiple cancers promotes degradation of the CDK inhibitor [[p27]], accelerating cell cycle progression. Mutations in components of the [[SCF complex]] or [[APC/C]] contribute to chromosomal instability.
- **DUBs in cancer** — [[USP9X]] overexpression correlates with elevated [[Mcl-1]] levels and chemoresistance in B-cell malignancies and solid tumors. [[USP7]] hyperactivation stabilizes MDM2, amplifying p53 suppression. [[USP14]] and [[UCHL5]] are associated with enhanced proteasomal degradation of pro-apoptotic proteins.
- **Therapeutic targeting** — The [[Proteasome]] inhibitors [[Bortezomib]] and [[Ixazomib]] are approved frontline therapies for [[Multiple Myeloma]], inducing ER stress and apoptosis by blocking proteasomal degradation of pro-apoptotic [[IκBα]], [[NOXA]], and misfolded immunoglobulins. [[PROTACs]] (proteolysis-targeting chimeras) are bifunctional molecules that recruit an E3 ligase to a target protein, inducing its ubiquitination and degradation — a rapidly growing therapeutic modality for "undruggable" targets such as [[AR]], [[BRD4]], and [[STAT3]].

## Connections

- [[PROTAC]] — Therapeutic modality hijacking E3 ligases for targeted protein degradation
- [[Proteasome]] — Proteolytic machine that degrades ubiquitinated proteins
- [[Ubiquitin]] — The 76-aa modifier protein
- [[E3 ligase]] — Substrate-specific enzymes conferring ubiquitination selectivity
- [[DUB]] — Deubiquitinating enzymes that reverse ubiquitination
- [[APC/C]] — E3 ligase complex controlling mitotic exit via K11 chains
- [[HUWE1]] — HECT-domain E3 ligase regulating [[Mcl-1]], [[p53]], and [[MYC]]
- [[USP9X]] — DUB stabilizing Mcl-1 in cancer
- [[Parkin]] — E3 ligase central to mitophagy
- [[Autophagy]] — Ubiquitin-dependent cargo recognition
- [[NF-κB]] — Signaling pathway regulated by K63 and M1 ubiquitination
- [[Apoptosis]] — Regulated in part by ubiquitin-mediated turnover of Bcl-2 family members
- [[Mcl-1]] — Anti-apoptotic protein stabilized by USP9X
- [[Post-translational modification]] — Broad category to which ubiquitination belongs

## Linking Summary

- New links added: [[Ubiquitin]], [[E1 activating enzyme]], [[E2 conjugating enzyme]], [[E3 ligase]], [[UBA1]], [[UBA6]], [[LUBAC]], [[HOIP]], [[HOIL-1]], [[SHARPIN]], [[NEMO]], [[RIPK1]], [[26S proteasome]], [[TAB2]], [[TAB3]], [[RAP80]], [[Anaphase-Promoting Complex/Cyclosome]], [[Cyclin B]], [[Securin]], [[ITCH]], [[AMPK]], [[Proteasomal degradation]], [[19S regulatory particle]], [[20S core particle]], [[IκBα]], [[TRAF6]], [[IKK complex]], [[RNF168]], [[RNF8]], [[H2A]], [[H2AX]], [[BRCA1]], [[53BP1]], [[ESCRT]], [[CBL]], [[SCF complex]], [[p27]], [[p62]], [[SQSTM1]], [[NBR1]], [[UBA domain]], [[LC3]], [[PINK1]], [[Parkin]], [[VDAC1]], [[MFN1]], [[MFN2]], [[TOM20]], [[OPTN]], [[NDP52]], [[MHC class I]], [[ER-associated degradation]], [[Viral immune evasion]], [[TNF receptor signaling]], [[Pattern recognition receptor]], [[USP]], [[UCH]], [[OTU]], [[JAMM]], [[MINDY]], [[MJD]], [[USP9X]], [[Mcl-1]], [[USP7]], [[MDM2]], [[CYLD]], [[Bortezomib]], [[Ixazomib]], [[Multiple Myeloma]], [[NOXA]], [[PROTAC]], [[AR]], [[BRD4]], [[STAT3]], [[HUWE1]], [[MYC]], [[Post-translational modification]]
- Suggested new entity notes to create: [[UBA domain]], [[LIR motif]], [[ESCRT machinery]], [[TAB2]], [[TAB3]], [[RAP80]], [[RNF168]], [[RNF8]], [[CBL family]], [[ITCH]], [[USP14]], [[UCHL5]], [[HOIL-1]], [[SHARPIN]]
- Strong connections to strengthen: [[Ubiquitination]] ↔ [[Proteasome]], [[Ubiquitination]] ↔ [[Autophagy]], [[Ubiquitination]] ↔ [[NF-κB]], [[E3 ligase]] ↔ [[PROTAC]], [[Parkin]] ↔ [[Mitophagy]], [[USP9X]] ↔ [[Mcl-1]]
