---
title: Histone H2A
description: Histone H2A is one of the four canonical core histones, present as two copies per nucleosome octamer; it supplies the acidic patch on the nucleosome surface that most bromodomain and PHD finger readers bind, carries modification sites including H2AK119ub, and is the base protein from which H2A.Z, H2A.X, H2A.J and macroH2A variants are derived.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags: [protein, chromatin, histone, nucleosome, histone-variant]
aliases: [H2A, HIST1H2AA, H2A/I, histone H2A type 1]
---

# Histone H2A

**Histone H2A** is a core histone of the [[Nucleosome]], present as **two
copies per octamer** alongside two copies each of [[Histone H3]], [[Histone H4]]
and [[Histone H2B]]. It is the most abundant histone and the most heavily
variant-substituted: essentially every nucleosome is a mixture of canonical H2A
and one of several H2A variants.

> [!info] Why H2A dominates chromatin pharmacology
> H2A is distinguished by an extended **acidic patch** on its histone-fold
> surface, plus a basic patch that engages the [[Histone H4]] C-terminal tail.
> Those two patches are the docking sites for most bromodomain, PHD finger,
> chromodomain and double-PHD
> reader families, and for the ATPase subunits of SWR1 and SRCAP-type
> [[Chromatin Remodeling|remodeling complexes]]. Practically every small-molecule
> chromatin drug and a large share of reader biology is aimed at H2A-present
> surfaces.

## Structure and Octamer Position

H2A adopts the histone-fold α-helical domain — three helices connected by loops
— and pairs obligatorily with [[Histone H2B]] to form an H2A–H2B heterodimer
that contacts 120 bp of DNA; two such dimers sit at the octamer ends opposite
the H3–H4 tetramer. Within the H2A–H2B dimer, H2A makes the H2A-docking
contacts to H3 and to DNA at the entry and exit points of the nucleosome,
while H2B faces outwards and carries the bulk of its own modifications. N-
terminal tails of both are disordered and accessible.

## Modifications

H2A tails carry the full range of [[Histone Modification|histone
modifications]], and two sites are clinically important:

- **H2AK5ac / H2AK8ac / H2AK12ac** — acetylation relieves the compaction
  contributed by the basic H2A N-terminal tail, so H2A acetylation is the
  classical "open chromatin" mark, reading out alongside H4 acetylation and
  H3K9ac at active promoters.
- **H2AK119ub** — the E3 ligase [[Polycomb Group Proteins|Polycomb]]
  repressive complex 1 monoubiquitylates this lysine in vertebrates (in
  *Drosophila* the homologous site is H2AK118ub). H2AK119ub is the canonical
  readout of PRC1, it recruits PRC2, and it is the principal epigenetic
  mechanism silencing developmental genes in vertebrates.
- **H2AS1ph** is the mitosis-specific phosphorylation that marks chromatin
  undergoing chromosome condensation, before the C-terminal H2A.X
  phosphorylation of [[γ-H2AX]] marks double-strand breaks.

## Variants

The H2A gene family has expanded into paralogous variants that substitute
subsequently into the canonical positions and change nucleosome properties:

- **H2A.Z** (H2AFZ) — a near-universal, evolutionarily ancient variant with an
  extended acidic patch and a longer L1 loop; it destabilises the H4 tail
  engagement, produces a more acidic, compaction-competent nucleosome surface,
  and has dedicated deposition machinery (SWR1, [[SRCAP]]). It functions as a
  boundary/anti-silencing mark at promoters, and as a distinct mark at
  [[DNA Damage|double-strand breaks]].
- **H2A.X** — the damage variant; its C-terminal SQ motif is
  phosphorylated to form [[γ-H2AX]], the platform for MDC1 and RNF8/RNF168
  ubiquitin signalling. H2A.X is present at ~2–25% of nucleosomes depending on
  cell type, so a double-strand break is marked by a local conversion of
  canonical H2A into the H2A.X signal.
- **H2A.J** (H2AJ) — testis-enriched, involved in meiotic chromatin and
  genome defence.
- **macroH2A** (H2AFY1/H2AFY2) — the largest variant, with an extra
  macrodomain folded onto the histone-fold that blocks the H4 tail and locks
  nucleosome structure, used to define a distinct macrodomain of
  constitutive, [[Chromatin Remodeling|remodelling]]-resistant heterochromatin.
- **H2A.Bbd**, **H2A.B**, **H2AW** — X-chromosome and testis-biased variants
  associated with gene-poor, silenced chromatin.

## Clinical Relevance

H2A biology is therapeutic because variant deposition and modification are
druggable in a way variant abundance is not. H2AZ depletion is
synthetic-lethal with [[BRCA1]]/[[BRCA2]]-deficient tumours because H2A.Z
loading is required at stalled replication forks; [[E3 Ubiquitin Ligase]] and
[[RNF168]] activity on the H2A.X axis is a target in DNA-damage
contexts; and the acidic-patch readers themselves are among the most actively
drugged chromatin targets.

> [!warning] Variant versus canonical is a dosage question
> Claims that "H2A.Z drives a phenotype" are usually about the *ratio* of H2A.Z
> to canonical H2A in a nucleosome, not about H2A.Z abundance alone, because
> almost all H2A.Z functions are competitive against canonical H2A for the same
> deposition and reader sites. The same applies to H2A.X and γ-H2AX: γ-H2AX is
> a local mark on a minority of nucleosomes, not a bulk level.

## Documents
- [[_document_ - The role of the dynamic epigenetic landscape in senescence orchestrating SASP expression]] — treats H2AK119ub/PRC1 chromatin as part of the senescent epigenetic programme.
- [[_document_ - Epigenetic changes during aging and their reprogramming potential]] — nuclear-architecture and heterochromatin drift that accompanies age.

## Connections
- [[Nucleosome]] — H2A is two of the eight subunits of the nucleosome core particle; its position defines the octamer geometry that [[CTCF]] and remodelers exploit.
- [[Histone H2B]] — H2A's obligate dimer partner; H2B ubiquitination and H2A modification are functionally coupled and the two faces of the same physical interface.
- [[Histone H3]] — the tetramer H2A–H2B pairs opposite, and H3 tail modifications (H3K4me3, [[H3K27ac]], [[H3K9me3]], [[H3K27me3]]) co-occur with and functionally cross-talk with H2A modification.
- [[Histone Variant]] — H2A is the paradigmatic variant-system histone; the vault's H2A.Z, H2A.X, H2A.J and macroH2A notes are all instances of this system.
- [[Histone H2A.Z]] — the most-studied H2A variant, deposited by SWR1 and read through the acidic patch at promoter boundaries and at DNA breaks.
- [[γ-H2AX]] — the phospho-form of H2A.X; the single most important H2A-derived signalling modification in the [[DNA Damage Response]] and [[DNA Repair]] literature.
- [[macroH2A]] — the largest H2A variant, whose macrodomain rigidifies the nucleosome and defines a distinct chromatin compartment.
- [[Chromatin Remodeling]] — ATP-dependent remodelers and H2A variant exchange are the two axes by which nucleosome composition is changed; they are mechanistically coupled.
- [[Histone Modification]] — acetylation, ubiquitylation, and phosphorylation of H2A are the direct readout level for transcription, Polycomb silencing, and damage signalling.
- [[Chromatin]] — H2A abundance and variant composition are the structural parameters that define what chromatin can do.
- [[DNA Repair]] — H2A.X→γ-H2AX is the recruitment platform for MDC1 and the RNF8/RNF168 ubiquitin cascade, making H2A a scaffold for break repair machinery.
- [[Non-homologous End Joining]] — a process in which γ-H2AX signalling is functionally required for efficient repair and for the checkpoint response.
- [[Polycomb Group Proteins]] — PRC1 monoubiquitylates H2A at K119, which is the vertebrate defining mark of the system.
- [[HUWE1]] — a large H3BCH E3 ligase with documented activity on H2A/H2B axes, linking H2A modification to turnover.
- [[RNF168]] — the ubiquitin ligase that writes and edits ubiquitin chains on γ-H2AX, the direct downstream reader of the H2A.X mark.
- [[Histone H2AX]] — the note that follows the H2A.X/γ-H2AX chain from variant to signalling output.

## Linking Summary
- New links added: [[Nucleosome]], [[Histone H2B]], [[Histone H3]], [[Histone Variant]], [[Chromatin Remodeling]], [[Histone Modification]], [[Chromatin]], [[DNA Repair]], [[Non-homologous End Joining]], [[Polycomb Group Proteins]], [[HUWE1]], [[RNF168]], [[γ-H2AX]], [[Histone H2AX]], [[Histone H2A.Z]], [[macroH2A]], [[SRCAP]], [[H3K27ac]], [[H3K27me3]], [[H3K4me3]], [[H3K9me3]], [[Histone H4]], [[Histone H1]], [[CTCF]], [[E3 Ubiquitin Ligase]], [[DNA Damage Response]], [[BRCA1]], [[DNA]], [[Acetylation]], [[Ubiquitination]]
- Suggested notes to create: [[H2A.Z]], [[H2A.Bbd]], [[SWR1]], [[Bromodomain]], [[PHD Finger]], [[Chromodomain]], [[Acidic Patch]], [[Polycomb Repressive Complex 1]], [[Polycomb Repressive Complex 2]], [[H2AK119ub]], [[H2AS1ph]], [[Histone Fold]] — removed as already existing: Condensin, H2A.X
- Strong connections to strengthen: [[Histone H2A]] ↔ [[Nucleosome]], [[Histone H2A]] ↔ [[γ-H2AX]], [[Histone H2A]] ↔ [[Histone Variant]]