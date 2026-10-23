---
title: Separase
description: Cysteine protease that cleaves cohesin at the onset of anaphase, releasing sister chromatids so that each can migrate to a daughter cell; its activity is gated by APC/C-dependent destruction of securin.
protected: false
created: 2026-10-22
updated: 2026-10-22
tags: [enzyme, cell-cycle, mitosis]
url: #
source: #
aliases: [ESPA1, Separase, Separin, ESP45]
---

# Separase

**Separase** is the cysteine protease that executes one of the decisive events of mitosis: it cleaves the cohesin complex holding sister chromatids together, allowing them to move apart toward opposite poles. Its activity is a tightly controlled, irreversible switch, and its failure produces the chromosome mis-segregation that underlies [[Aneuploidy]].

## Structure & Domains

Separase is a large (≈200 kDa) aspartyl-like cysteine protease built from two domains separated by a flexible linker:

- **N-terminal phosphatase-like domain (PLC)** — adopts an open "B-domain" conformation in which the active site is assembled. It has no known phosphatase activity; its role is regulatory and structural.
- **C-terminal protease domain (C-domain)** — contains the catalytic triad (His, Asp, Cys) and the SEPARASE motif.
- **Linker / "safety latch".** In the inactive enzyme, the C-domain packs against the PLC domain and buries the active site. A second conserved region of the linker forms an autoinhibitory "safety latch" that blocks the active site. Both restraints must be released before the enzyme can cut substrate.
- Separase works as a dimer; the N-terminal domain also binds the regulatory protein securin.

## Mechanism of Action & Pathways

1. **Cohesin loading.** The cohesin ring (containing [[Cohesin|SMC1/3]]) is loaded onto chromosomes in G1, with the kleisin subunit (SCC1/Rad21) protecting the centromeric region. Cohesin holds sister chromatids together and is essential for the spindle assembly checkpoint to sense tension.
2. **Arming by APC/C.** At metaphase–anaphase transition, the [[Anaphase Promoting Complex-Cyclosome|APC/C]] with its co-activators [[CDC20]] and Cdh1 ubiquitinates [[Securin]], which is degraded by the proteasome. Separase is thus held inactive by securin.
3. **Activation.** Depletion of securin allows the separase safety latch to release; the PLC and C domains snap into the active conformation. Separase additionally requires Ca²⁺/calmodulin and phosphorylation by Cdk1 and by Plk1 for full activity.
4. **Cohesin cleavage.** Separase cleaves the kleisin subunit (SCC1/Rad21 in mammals) at two sites. The cleaved cohesin ring opens, sister chromatids decatenate, and the spindle can now move each chromatid to its daughter cell.
5. **Downstream.** Cohesin removal also releases the centromeric [[Centromere]] from its hold, permitting the full anaphase spindle elongation.

## Physiological Function

Separase is the single point of control for chromatid segregation. It is essential for the maintenance of sister chromatid cohesion in G2 and for the metaphase-to-anaphase transition, and it plays a further role in meiosis, where it releases the axial element and enables the first meiotic division. Separase activity also contributes to the disassembly of the spindle and to mitotic exit, and it interacts with the DNA-damage response: unrepaired DNA damage activates the spindle checkpoint and blocks APC/C, keeping separase inhibited.

## Pathology & Clinical Relevance

- **Chromosomal instability and aneuploidy.** Overexpression of separase, or its mislocalisation, allows premature chromatid separation, producing aneuploid daughter cells and [[Genomic Instability]] — a hallmark of [[Cancer]] and of many age-related diseases.
- **Cancer.** Separase overexpression correlates with poor prognosis in breast, colorectal and ovarian cancer; separase is a proposed therapeutic target and is being pursued with small-molecule inhibitors and with vaccine approaches (SEP2 peptide immunotherapy has entered trials).
- **Congenital disorders.** Biallelic mutations in *ESCO2* (the cofactor that activates separase) cause [[Charcot-Marie-Tooth Disease Type 2A]]-spectrum neuropathy, and *ESCO1*/seco1 mutations cause Cornelia de Lange syndrome, confirming the importance of separase function in development.
- **Ageing.** Chromosome mis-segregation accumulates with age in stem and progenitor cells, linking separase fidelity to [[Cellular Senescence]] and tissue regeneration.

## Documents

- (no document notes yet)

## Connections

- [[Cohesin]] — the substrate whose cleavage releases sister chromatids
- [[Securin]] — the APC/C substrate that inhibits separase until anaphase
- [[Anaphase Promoting Complex-Cyclosome]] / [[APC-C]] / [[CDC20]] — the E3 ligase that arms separase by destroying securin
- [[Sister Chromatids]] — the structures whose separation separase executes
- [[Mitosis]] / [[Cell Division]] / [[Cell Cycle]] — the process in which separase acts
- [[Aneuploidy]] / [[Genomic Instability]] — the consequence of mis-regulated chromatid separation
- [[Spindle Assembly Checkpoint]] / [[Mad2]] / [[BubR1]] — the surveillance that prevents premature separase activation
- [[Centromere]] / [[CENP-A]] — the chromatin domain that holds cohesin and is released at anaphase
- [[Condensin]] / [[KIF5B]] — the machinery that operates after cohesion release
- [[Cancer]] / [[Charcot-Marie-Tooth Disease Type 2A]] — disease contexts of separase and its cofactor

## Linking Summary

- New entity note in `src/notes/_link/` (shared cell-cycle protease with no single topic home).
- New links added: [[Cohesin]], [[Securin]], [[Anaphase Promoting Complex-Cyclosome]], [[APC-C]], [[CDC20]], [[Sister Chromatids]], [[Mitosis]], [[Cell Division]], [[Cell Cycle]], [[Aneuploidy]], [[Genomic Instability]], [[Spindle Assembly Checkpoint]], [[Mad2]], [[BubR1]], [[Centromere]], [[CENP-A]], [[Condensin]], [[KIF5B]], [[Cancer]], [[Charcot-Marie-Tooth Disease Type 2A]], [[Cellular Senescence]].
- Suggested new entity notes to create: [[ESCO2]], [[Separase Inhibitor]], [[SCC1]], [[Precocious Sister Chromatid Separation]].
- Strong connections to strengthen: [[Separase]] ↔ [[Cohesin]], [[Separase]] ↔ [[Securin]], [[Separase]] ↔ [[Anaphase Promoting Complex-Cyclosome]].
