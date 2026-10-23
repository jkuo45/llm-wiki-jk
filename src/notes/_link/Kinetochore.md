---
title: Kinetochore
description: Multimeric protein complex assembled on centromeric chromatin that captures spindle microtubules, generates and senses attachment tension, and houses the spindle assembly checkpoint that guards chromosome segregation.
protected: false
created: 2026-10-22
updated: 2026-10-22
tags: [structure, cell-cycle, mitosis]
url: #
source: #
aliases: [Kinetochore complex, KIN, kinetochore microtubule attachment site]
---

# Kinetochore

**Kinetochore** is a trilaminar protein complex built on the centromere of each chromosome that serves two functions at once: it is the structure that captures spindle microtubules, and it is the signalling platform that decides whether the chromosome is correctly attached before the cell is allowed to segregate it. Everything downstream — accurate chromosome distribution, genomic stability, and the prevention of [[Aneuploidy]] — depends on the kinetochore working.

## Structure & Domains

The kinetochore is assembled hierarchically on centromeric [[Chromatin]]:

- **CENP-A** replaces histone H3 in centromeric nucleosomes and provides the centromeric chromatin foundation; the CENP-C, CENP-H, CENP-I, CENP-K and CENP-L complex (CENP-H/I/K/M) and CENP-T build the inner layer.
- **CENP-F and CENP-E** form the middle layer.
- **Outer layer (Ndc80 complex, Mis13/Mis14, Knl1, ZWINT)** — the kinetochore-microtubule interface. The Ndc80 complex, made of Ndc80, Nuf2, Spindly and Cdc80, forms a hetero-dimer that grips the microtubule lattice and couples it to CENP-F.
- **Kinetochore microtubules** are typically attached by the Ndc80 complex and by the Ska complex, with the Dam1/CENP-I–CENP-H/I/K/M "Dam1-like" complex providing a backup attachment.
- **Motive-force machinery.** The kinesin-8 motors [[KIF5B]] and kinesin-6 (CENP-E) generate directional motion along microtubules to power chromosome movement and to align chromosomes at the metaphase plate; the spindle itself is built from [[Microtubule]]s.

## Mechanism of Action & Pathways

1. **Assembly.** CENP-A-containing centromeres nucleate the inner kinetochore, which is then matured by CENP-H/I/K/M, CENP-F, the Ndc80 and Mis13/Mis14 complexes, and the SKA and KNL1 complexes.
2. **Capture.** Spindle microtubules are captured by the outer kinetochore, first by lateral attachment, then converted to end-on attachment through the SKA and Ndc80 complexes.
3. **Error correction.** The spindle assembly checkpoint (SAC) is anchored to the unattached kinetochore: the Mad2–BubR1–Bub3–Cdc20 module ("mitotic checkpoint complex") inhibits the [[Anaphase Promoting Complex-Cyclosome|APC/C]], preventing securin degradation and hence separase activation until every chromosome is bi-oriented.
4. **Tension sensing.** Attachment geometry is converted into a biochemical signal. The kinetochore recruits BUB3, which relieves the inhibition of Mad2; the p31^comet protein promotes Mad2 release; and BUB1 phosphorylation by Mps1 and PLK1 recruits the PP2A–B56 phosphatase, which dephosphorylates kinetochore substrates. Tension-driven recruitment of Aurora B also phosphorylates the Ndc80 complex, destabilising incorrect attachments.
5. **Error attachments.** Merotelic attachment (one kinetochore bound to both poles), lagging chromosomes and chromatin bridges are the physical outcomes of a defective kinetochore; they generate aneuploid daughter cells.

## Physiological Function

The kinetochore is the "pacemaker" of mitosis: it converts mechanical information (attachment, tension, geometry) into biochemical signals that direct progression through metaphase, and it is the mechanical coupler that translates spindle forces into chromosome movement. Its integrity is also critical for the fidelity of meiosis and for the DNA-damage checkpoint, since unattached kinetochores trigger a mitotic arrest in response to [[DNA Damage]].

## Pathology & Clinical Relevance

- **Aneuploidy and cancer.** Kinetochore and centromere defects — including weak CENP-A chromatin, mislocalised Ndc80, and altered BUB1/Mad2 signalling — are frequent in tumours, drive chromosomal instability, and correlate with poor prognosis and therapy resistance.
- **Ageing.** Kinetochore assembly defects and micronuclei accumulate with age in stem cells; improper kinetochore–spindle attachment is a leading cause of age-related tissue degeneration, connecting to [[Cellular Senescence]] and to [[Genomic Instability]].
- **Congenital disorders.** Mutations in kinetochore components (e.g. *CENP-A*, *KIF2*, *BUB1B*) cause primary microcephaly and other neurodevelopmental syndromes.
- **Anti-mitotic therapy.** Most clinically used anti-mitotic agents (taxanes, vinca alkaloids, and the newer CENP-E, KIF18A, and MPS1/PLK1 inhibitors) exploit the kinetochore dependency of mitosis; kinetochore amplification is a recognised resistance mechanism.

## Documents

- (no document notes yet)

## Connections

- [[CENP-A]] / [[Centromere]] / [[Pericentromeric Satellite Repeats]] — the chromatin foundation on which the kinetochore is built
- [[Microtubule]] / [[KIF5B]] / [[Condensin]] — the spindle machinery the kinetochore connects to
- [[Spindle Assembly Checkpoint]] / [[Mad2]] / [[BubR1]] — the checkpoint housed on unattached kinetochores
- [[Anaphase Promoting Complex-Cyclosome]] / [[Securin]] / [[Separase]] — the downstream events the checkpoint delays
- [[Mitosis]] / [[Cell Division]] / [[Cell Cycle]] / [[Sister Chromatids]] — the process context
- [[Aneuploidy]] / [[Genomic Instability]] / [[Micronuclei]] — the consequences of kinetochore failure
- [[Cancer]] — the disease context of kinetochore defects and anti-mitotic therapy
- [[Cellular Senescence]] / [[DNA Damage]] — the checkpoints that kinetochore integrity interfaces with
- [[Chromatin]] / [[Chromosome]] — the substrates and context of kinetochore assembly

## Linking Summary

- New entity note in `src/notes/_link/` (shared mitotic structure used across cell-cycle, cancer and ageing notes).
- New links added: [[CENP-A]], [[Centromere]], [[Pericentromeric Satellite Repeats]], [[Chromatin]], [[Chromosome]], [[Microtubule]], [[KIF5B]], [[Condensin]], [[Spindle Assembly Checkpoint]], [[Mad2]], [[BubR1]], [[Anaphase Promoting Complex-Cyclosome]], [[Securin]], [[Separase]], [[Mitosis]], [[Cell Division]], [[Cell Cycle]], [[Sister Chromatids]], [[Aneuploidy]], [[Genomic Instability]], [[Micronuclei]], [[Cancer]], [[Cellular Senescence]], [[DNA Damage]].
- Suggested new entity notes to create: [[Ndc80 Complex]], [[BUB1]], [[Mps1]], [[SKA Complex]], [[CENP-E]], [[Kinetochore Error Correction]], [[Mad2-BubR1 Checkpoint]].
- Strong connections to strengthen: [[Kinetochore]] ↔ [[Spindle Assembly Checkpoint]], [[Kinetochore]] ↔ [[Centromere]], [[Kinetochore]] ↔ [[Microtubule]].
