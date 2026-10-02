---
title: CENP-A
description: "CENP-A is the centromere-specific histone H3 variant whose centromere targeting domain uniquely replaces H3 in centromeric nucleosomes, defining centromere identity epigenetically and licensing kinetochore assembly for chromosome segregation."
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - chromatin
  - cell-cycle
  - epigenetic-mark
aliases: [Centromere Protein A, CENP-A/CENP-H, cenH3, Cse4, histone variant CENP-A]
---

# CENP-A

**Overview:** CENP-A is the **centromere-specific variant of histone H3**. It is the protein that *defines* a centromere: no CENP-A, no centromere, and therefore no kinetochore and no faithful chromosome segregation. It was the first centromeric protein identified in any species, discovered as an autoantigen in the CREST form of systemic sclerosis and named for its exclusive centromeric localisation.

## Structure and domains

Human CENP-A is 140 amino acids, unusually small for a centromere protein and made almost entirely of the H3 fold:

- **Histone fold (res. 1–100)** — an α-helical domain highly similar to canonical H3, able to substitute for H3 within a nucleosome core. The **H3-H4 interface** (α1 and α3 helices) is the key determinant: swapping these two helices between CENP-A and H3 dictates centromere vs. nucleosome assembly, and reciprocal swaps retarget CENP-A to pericentric chromatin.
- **Centromere targeting domain (CATD, residues 22–66)** — a short, disordered insertion in the L1 loop between helices α1 and α2. Despite being unstructured, it is essential and sufficient to direct CENP-A to centromeric chromatin. CENP-H assembles into a **CENP-A–CENP-H/CENP-N dimer** whose CENP-H Arg50 **locks** the CATD, producing the conformationally distinct "CENP-A nucleosome" that is the substrate for CENP-C.
- **Extended N-terminal tail** — contains an **RG-rich region** and a conserved **ELY motif** (Glu82–Leu83–Tyr84) that contacts [[DNA]], and an **LLG motif** (Leu109–Leu110–Gly111) that binds [[Lamin A]] at the nuclear envelope during interphase, tethering centromeres to the lamina and controlling nuclear architecture.
- CENP-A is deposited by the **CENP-C/CENP-N/CENP-H (CCNL)** chaperone in nascent CENP-A nucleosomes and assembled through the CENP-T/CENP-U/CENP-W (CUF1) and NIP-A pathways; turnover is mediated by a UBE2J1-linked ubiquitin system.

> [!info] Functional centromere identity is a chromatin state, not a DNA sequence
> Unlike the [[Pericentromeric Satellite Repeats|pericentromeric satellite repeats]], CENP-A-marked chromatin can be propagated epigenetically to reporter constructs lacking any centromeric DNA — the basis of "centromere de novo" formation experimentally. Human neocentromeres arise on acentric sites and recruit CENP-A, [[DNA Methylation|DNA methylation]], and heterochromatin.

## Mechanism

1. **Assembly.** Chaperones load H4, then CENP-A, onto centromeric chromatin; deposition is coupled to DNA replication and to transcription from the divergent [[Pericentromeric Satellite Repeats|alpha-satellite]] repeats.
2. **Reader phase.** CENP-C binds the CENP-A nucleosome surface, recruiting CENP-I (which acts as an E3 for CENP-H), CENP-S, CENP-T, and ultimately the outer kinetochore (Ndc80 complex, Mis13 complex, CENP-F) plus spindle checkpoint components.
3. **Turnover.** CENP-A is continuously replaced throughout the cell cycle — roughly one nucleosome per centromere per cell cycle, and substantially more during stress — so centromeres are a *dynamic* chromatin state, not a fixed structure.

## Physiological roles

- **Chromosome segregation.** CENP-A nucleosomes seed the kinetochore, generating the chromosome attachment that spindle microtubules capture and the tension-based error correction used by the spindle assembly checkpoint.
- **Genome integrity.** Loss or mislocalisation of CENP-A causes multinucleation, aneuploidy, and chromosome missegregation. Mislocalised CENP-A recruits kinetochore proteins ectopically, producing ectopic/mistended attachments.
- **Nuclear architecture.** The LLG motif tethers centromeres to the nuclear lamina, defining the interphase centromere cluster and contributing to lamina organisation.
- **Quiescent cell-state maintenance.** CENP-A is **actively and continuously deposited in quiescent (G0-arrested) cells**. Because *de novo* centromere formation is exceptionally rare, loss of CENP-A deposition during long G0 arrest compromises centromere identity and produces segregation defects on re-entry — and the same requirement holds for oocytes during extended prophase I arrest.

## Disease relevance

| Context | Finding |
| --- | --- |
| [[Alzheimer's Disease]] and other neurodegenerative disease | CENP-A is mislocalised away from centromeres into discrete nuclear bodies, and levels fall with age and disease severity |
| Senescence | CENP-A is downregulated or displaced from centromeres during senescence; pericentromeric heterochromatin decompacts and loss of CENP-A may itself contribute to cell-cycle arrest |
| Age-related centromeric loss | CENP-A levels decline with age; centromeric integrity is a proposed contributor to age-related aneuploidy and progeroid syndromes |
| Cancer | CENP-A overexpression is frequent in solid tumours; ectopic CENP-A recruits kinetochore machinery and centromeric chromatin marks to ectopic sites |
| Intestinal tumorigenesis | [[SIRT7]] promotes CENP-A nucleosome assembly and acts as a suppressor of intestinal tumours |
| Immune serology | Anti-CENP-A and anti-centromere antibodies are markers of limited systemic sclerosis (CREST) and appear in anti-PM/Scl overlap |

> [!warning] The centromere–senescence link is bidirectional and not fully causal
> It is established that CENP-A is lost from centromeres in senescent cells and that artificial CENP-A depletion can promote arrest. It is **not** established that CENP-A loss is a primary cause rather than a consequence of the senescent chromatin programme.

## Documents

- [[_document_ - Cellular Mechanisms and Regulation of Quiescence|Cellular Mechanisms and Regulation of Quiescence]] — specialized CENP-A-containing nucleosomes mark the centromere; quiescent cells continuously incorporate new CENP-A to maintain centromere identity through arbitrarily long arrest, and blocking deposition causes segregation defects on re-entry (as in oocytes).
- [[_document_ - The role of the dynamic epigenetic landscape in senescence orchestrating SASP expression|The role of the dynamic epigenetic landscape in senescence orchestrating SASP expression]] — CENP-A is downregulated or displaced during senescence, with centromeric decompaction contributing to arrest and correlating with SASP.
- [[_document_ - sirtuins in health and disease s41392-022-01257-8|Sirtuins in health and disease]] — cites SIRT7 facilitating CENP-A nucleosome assembly and suppressing intestinal tumorigenesis.

## Connections
- [[Histone]] — CENP-A is a histone H3 variant; the H3–CENP-A interface helices and the CATD determine centromere targeting.
- [[Pericentromeric Satellite Repeats]] — alpha-satellite DNA lies beneath CENP-A chromatin and drives its deposition, but CENP-A is the functional definition of the centromere.
- [[Nucleosome]] — the CENP-A nucleosome is a distinct, CENP-H-stabilised chromatin state with its own readers.
- [[Centromere]] — CENP-A is the centromeric mark itself; its loss abolishes centromere identity.
- [[Heterochromatin]] — centromeric chromatin is constitutively heterochromatic; its decompaction accompanies senescence and CENP-A displacement.
- [[Quiescence]] — CENP-A deposition continues in G0-arrested cells and is required for genome integrity on re-entry.
- [[Mitosis]] — CENP-A chromatin is the foundation of the kinetochore, hence of chromosome segregation.
- [[Meiosis]] and [[Oocyte]] — CENP-A deposition is required during extended prophase I arrest for accurate segregation after meiotic resumption.
- [[Senescence]] — CENP-A loss accompanies senescence and pericentromeric decompaction, tying centromeric integrity to the senescent chromatin state.
- [[SIRT7]] — the sirtuin that promotes CENP-A nucleosome assembly and restrains intestinal tumorigenesis.
- [[Chromatin]] and [[Epigenetics]] — CENP-A is the textbook example of a chromatin state that propagates without an underlying DNA sequence.
- [[Aneuploidy]] — CENP-A mislocalisation produces ectopic kinetochores, missegregation, and aneuploidy.

## Linking Summary
- New links added: [[Aneuploidy]]
- Suggested notes to create: [[CENP-C]], [[CENP-H]], [[CENP-B]], [[CENP-I]], [[CENP-T]], [[Kinetochore]], [[Ndc80 Complex]], [[Alpha-Satellite DNA]], [[Centromere Clustering]], [[LLG Motif]], [[UBE2J1]], [[CREST Syndrome]], [[Anticentromere Antibodies]], [[Neocentromere]]
- Strong connections to strengthen: [[CENP-A]] ↔ [[Centromere]], [[CENP-A]] ↔ [[Quiescence]], [[CENP-A]] ↔ [[Senescence]], [[CENP-A]] ↔ [[Nucleosome]]
