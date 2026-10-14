---
title: Polymerase chain reaction
description: A DNA amplification method that uses a thermostable DNA polymerase and thermal cycling through denaturation, annealing and extension to make millions of copies of a target sequence from a starting amount as small as a single molecule.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - technique
  - molecular-biology
  - diagnostics
aliases:
  - PCR
  - Amplification
---

# Polymerase chain reaction

**Polymerase chain reaction (PCR)** is an in-vitro method for amplifying a defined
DNA sequence. Two oligonucleotide primers flanking the target, a DNA polymerase, and
repeated cycles of heating and cooling produce an exponential increase in copy number —
ideally 2ⁿ from n cycles — so that a starting quantity invisible to ordinary
detection becomes abundant enough to read out.

## Mechanism

Each cycle has three temperature-controlled steps:

- **Denaturation** (~94–95 °C) separates the double-stranded template.
- **Annealing** (~50–65 °C, typically near the primer melting temperature) lets each
  primer hybridise to its complementary strand.
- **Extension** (~72 °C) lets the polymerase extend from the primer 3′-OH, and the
  product of a cycle becomes the template of the next.

The exponential — rather than linear — accumulation is what makes the method work;
the two primers must be on opposite strands and pointing inward for the product to
double each round.

## History and the Taq problem

Kjell Kleppe described PCR-like logic in 1971 and Kary Mullis worked out the method at
Cetus in 1983, receiving the 1993 Nobel Prize in Chemistry. Early versions used the
Klenow fragment of *E. coli* DNA polymerase I, which is destroyed by the ~95 °C
denaturation step — enzyme had to be re-added after every few cycles, and tubes had
to be opened, making cross-contamination a real risk. The 1985–88 isolation of Taq
DNA polymerase from *Thermus aquaticus* (Brock's isolate, 1969) fixed this: the
reaction could be assembled once and run closed.

Taq was not perfect. It is error-prone (no 3′→5′ proofreading exonuclease), retains
intrinsic activity at lower temperature, and is poor on GC-rich or highly structured
templates. This motivated two lines of improvement that are now standard: **hot-start**
formats, in which the enzyme is chemically or conformationally blocked until first
denaturation, suppressing mispriming; and higher-fidelity engineered enzymes.

## Variants

- **Reverse-transcription PCR (RT-PCR)** — a reverse transcriptase first converts RNA
  to cDNA so that RNA abundance can be measured. It is often conflated with
  "real-time PCR"; the two address different problems.
- **Quantitative real-time PCR (qPCR)** — fluorescence is monitored as the reaction
  proceeds, and the cycle at which threshold is crossed (Cq) is used to infer starting
  quantity. The MIQE guidelines (Bustin et al. 2010) set reporting standards for this,
  reflecting how easily the method is misapplied.
- **Digital PCR** — the sample is partitioned into thousands of micro-reactions, and
  Poisson statistics on the fraction of positive partitions gives absolute
  quantification without a standard curve.
- **Multiplex, nested, and isothermal variants** — several primer sets in one tube;
  a second, internal primer pair for specificity; and constant-temperature
  amplification with enzymes such as Bst and reverse transcriptase.

> [!warning] Methodological caveat
> PCR is highly sensitive to contamination, because a single stray template molecule
> generates the same signal as a genuinely rare target. False positives from
> contamination, primer-dimers misread as product, and over-amplification from
> nonspecific priming are all routine failure modes, and the assay's sensitivity is
> what makes them consequential. The MIQE guidelines exist because of this.

## Applications

Clinical use includes pathogen detection, viral load quantification, and genotyping.
In parasitology, PCR is the most sensitive method for low-parasite-burden infections
and for distinguishing relapse from reinfection. For [[Leishmaniasis]] specifically,
PCR-based assays detect amastigote DNA in tissue and are especially valuable in
mucosal cutaneous disease, where the parasite burden is too low for microscopy. PCR
also underpins [[CRISPR]] guide design, genotyping of [[DNA Methylation]] state, and
the [[Assay]] methods used throughout this vault.

## Documents

- [[Leishmaniasis]] — cites PCR-based assays as the highest-sensitivity confirmation
  and species-identification tool, particularly in mucosal disease and for separating
  relapse from reinfection, where microscopy and serology are weak.

## Connections

- [[DNA Polymerase]] — the enzyme class PCR depends on; the shift from a
  heat-labile in-vivo enzyme to thermostable Taq, and then to proofreading engineered
  enzymes, is what moved PCR from a theoretical idea to a routine technique and is the
  main driver of the field's accuracy gains.
- [[Leishmaniasis]] — the vault's concrete PCR application: low parasite burden and
  mucosal disease make PCR the confirmatory method of choice, complementing the
  microscopic and rK39 serological approaches described in that note.
- [[DNA Replication]] — PCR is a stripped-down, single-primer-pair, in-vitro version
  of semiconservative DNA synthesis, run without a parental strand, without a
  replicative origin, and with a defined terminus.
- [[CRISPR]] — depends on PCR both for amplifying guide constructs and for genotyping
  the resulting edits, so the technique is upstream and downstream of the genome
  editing workflow.
- [[DNA Methylation]] — bisulphite-modified DNA is amplified by PCR, which is how
  methylation-specific PCR and its quantitative variants measure CpG methylation state.
- [[Assay]] — PCR is the archetypal amplification-based assay; the amplification step
  is what converts low-abundance analyte into a detectable signal, and also the source
  of most of its artefacts.

## Linking Summary

- New links added: [[DNA Polymerase]], [[DNA Replication]], [[CRISPR]],
  [[DNA Methylation]], [[Assay]], [[Leishmaniasis]], [[Macrophage]]
- Suggested notes to create: [[Taq DNA Polymerase]], [[Reverse Transcriptase]],
  [[Quantitative PCR]], [[Primers]], [[qPCR]], [[Thermal Cycler]],
  [[Kary Mullis]], [[Hot Start PCR]], [[TaqMan]], [[Fluorescence]]
- Strong connections to strengthen: [[Polymerase chain reaction]] ↔ [[DNA Polymerase]],
  [[Polymerase chain reaction]] ↔ [[Leishmaniasis]]
