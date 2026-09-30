---
title: Integrase
description: HIV-1 integrase, the retroviral endonuclease that inserts viral DNA
  into the host chromosome via 3'-processing and strand transfer; the target of
  the INSTI class of antiretroviral drugs including raltegravir and dolutegravir.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - enzyme
  - virus
aliases: [HIV Integrase, Retroviral Integrase, IN, HIV-1 Integrase]
---

# Integrase

**Integrase** is the retroviral enzyme that inserts the viral genome into the
host cell's chromosomal DNA. In this vault it refers to **HIV-1 integrase**, the
product of the *int* gene — one of the three enzymes that HIV-1 needs to
complete its life cycle, alongside [[Reverse Transcriptase]] and
[[Proteasome]]-paired maturation via protease.

## Structure

Integrase is a ~32 kDa protein of three canonical domains joined by flexible
linkers:

- **N-terminal domain (residues 1–50)** — an HH-CC zinc-binding three-helix
  bundle coordinating a single Zn²⁺. Not catalytic; it drives oligomerisation
  and enhances core-domain activity.
- **Catalytic core domain (residues 51–205)** — an RNase H fold containing the
  invariant **DDE motif (Asp64, Asp116, Glu152)**. Mutation of any of the three
  abolishes integration.
- **C-terminal domain (residues 206–288)** — an SH3-like fold that binds viral
  and host DNA non-specifically and stabilises the intasome.

Biochemical and structural data indicate integrase operates as a **tetramer
(dimer of dimers)**; all three domains contribute to both multimerisation and
DNA binding. A chimeric host factor, **LEDGF/p75**, binds integrase tightly and
tethers the pre-integration complex to transcriptionally active chromatin —
this is a major determinant of *where* HIV integrates.

> [!info] The intasome
> The complex of integrase bound to the ends of the viral DNA is the
> **intasome**. It assembles within the pre-integration complex after reverse
> transcription delivers linear double-stranded viral DNA flanked by LTR
> long terminal repeats.

## Catalytic mechanism

Integrase performs two chemistry steps in a single active site, both by
**transesterification without a covalent protein–DNA intermediate** (which is
what distinguishes integrases from Ser/Tyr recombinases):

1. **3′-processing** — endonucleolytic removal of two or three nucleotides from
   each 3′ end of the viral DNA, exposing the invariant **CA dinucleotide**.
   Requires Mg²⁺ or Mn²⁺ coordinated by the DDE motif.
2. **Strand transfer** — the exposed 3′-OH attacks a host phosphodiester bond by
   SN2-type nucleophilic attack, covalently joining viral to host DNA.
3. **Gap repair** — 5′ overhangs are resolved by host DNA repair enzymes,
   completing the provirus.

Because the chemistry is metal-dependent and the DDE residues are absolutely
conserved, they are the rational binding sites for inhibitors.

## Clinical significance

> [!warning] Clinical caveat
> Integrase strand-transfer inhibitors (INSTIs) — raltegravir, elvitegravir,
> dolutegravir, bictegravir, cabotegravir — are the backbone of modern
> first-line HIV therapy because they are effective, well tolerated, and
> rapidly reduce viral load. Three consequences matter clinically. (1)
> Resistance emerges fast if viraemia persists, mutating the catalytic core.
> (2) INSTI-associated dolutegravir resistance has been linked to integrase
> polymorphisms in naive patients, so baseline genotype matters.
> (3) INSTIs can cause **weight gain** and metabolic change, an ongoing
> concern in an already metabolically vulnerable population.

Integrase is essential: without it the provirus cannot form, so the infected
cell would not be a permanent carrier of the viral genome. Integration is
therefore described as a point of no return in the viral life cycle, and is a
major reason antiretroviral therapy is not curative — the integrated provirus
persists in the latent reservoir.

The stub's inbound document link from [[HIV-1]] is retained in the Documents
section.

## Connections

- [[HIV-1]] — Integrase is one of the three enzymatic activities encoded by the
  HIV-1 pol gene, alongside reverse transcriptase and protease, and is required
  to establish the provirus. It is the target of the INSTI drug class that
  transformed HIV from a rapidly fatal disease into a manageable chronic
  infection. The stub's inbound document link is retained.

- [[HIV-1 Protease]] — The third pol-encoded enzyme. Protease cleaves and
  activates the gag-pol polyprotein, so integrase is only functional as a
  product of protease maturation. All three enzymatic activities sit on the
  same pol precursor, which is why a single pol gene can be the target of
  three distinct drug classes.

- [[Chromatin]] — LEDGF/p75 tethers the pre-integration complex to
  transcriptionally active chromatin, biasing integration into actively
  transcribed genes. The same preference is a major barrier to curative
  "block and clear" strategies, because it places the provirus in a
  transcriptionally active, drug-resistant location.

- [[AIDS]] — INSTIs are first-line therapy; the resistance, weight-gain, and
  integrase-polymorphism issues above are the practical reasons the class is
  monitored so closely, and the reason combination regimens are mandatory.

- [[Nuclear Pore Complex]] — The pre-integration complex must traverse the
  nuclear pore to reach chromosomal DNA. Nuclear import is host-factor
  dependent and rate-limiting, and represents a target distinct from the
  catalytic chemistry.

- [[Drug Resistance]] — Class resistance is well characterised: mutations
  Q148H/K/R, N155H, and Y143 in the catalytic core reduce inhibitor binding
  and can be rescued only partly by second-generation INSTIs.

## Documents

- [[HIV-1]]
  - The stub's sole inbound document link, retained; provides the viral context
    for the enzyme.

## Linking Summary

- New links added: [[Proteasome]], [[Chromatin]], [[Drug Resistance]],
  [[AIDS]], [[Nuclear Pore Complex]]
- Suggested notes to create: [[HIV-1 Integrase]], [[Raltegravir]],
  [[Dolutegravir]], [[Elvitegravir]], [[Bictegravir]], [[Cabotegravir]],
  [[Intasome]], [[Pre-Integration Complex]], [[LEDGF/p75]], [[Provirus]],
  [[Long Terminal Repeat]], [[Reverse Transcriptase]], [[HIV-1 Protease]],
  [[Antiretroviral Therapy]]
- Strong connections to strengthen: [[Integrase]] ↔ [[Reverse Transcriptase]],
  [[Integrase]] ↔ [[Drug Resistance]], [[Integrase]] ↔ [[HIV-1 Protease]]
