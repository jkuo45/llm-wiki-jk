---
title: MARylation
description: MARylation is mono-ADP-ribosylation, the transfer of a single ADP-ribose moiety from NAD+ to a serine residue, used by PARP1, PARP2 and PARG to produce a reversible DNA-break signal.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [post-translational-modification, dna-repair, nad-plus, signal-transduction]
aliases: [mono-ADP-ribosylation, monoADP-ribosylation, mono-ADP-ribosylation, SER ADPr]
---

# MARylation

**MARylation** is the vault's shorthand for **mono-ADP-ribosylation** — the
attachment of a *single* ADP-ribose moiety from [[NAD+]] to a protein serine
residue. It is the discrete, non-polymer, immediately reversible branch of
[[ADP-ribosylation]], and the dominant DNA-damage signal left at a
[[DNA Repair|double-strand break]] when [[PARP1]] is synthesised at
low level or inhibited.

## Mechanism

> [!info] The three-step cycle
> 1. **Synthesis.** [[PARP1]] binds the broken DNA end through its
>    zinc-finger domains and, using [[NAD+]] as the substrate, transfers
>    terminal ADP-ribose from NAD+ to its own **Ser499** (human numbering;
>    Ser508 in some older numbering schemes). This is a mono-ADP-ribose
>    (MAR) attachment — one unit, not a chain. PARP2 behaves equivalently at
>    its own serine.
> 2. **Reading.** The attached MAR recruits **macro-domain** proteins, most
>    importantly [[Macrodomain|MacroH2A]], PAR-binding zinc-finger proteins
>    (PBZ), and a range of reader modules. PARylated PARP1 also generates
>    local nuclear deformation and chromatin relaxation, and the PAR–chromatin
>    interaction triggers RNF168-dependent ubiquitylation.
> 3. **Erasure.** **[[PARG]]** cleaves the pyrophosphate-like bond, releasing
>    free [[ADP-ribose]] and restoring the unmodified serine. This makes
>    MARylation the one ADP-ribosylation form with a clean dedicated
>    eraser and hence a genuinely dynamic, reversible signal rather than a
>    stable mark.

Other mono-ADP-ribosyltransferases act outside the DDR — the
**ARTD/PARP family** members PARP7, PARP10, PARP12, PARP13 (ARTD13/CCLE)
and PARP14, and the bacterial **ARTs (ADP-ribosyltransferases)** such as
cholera toxin and diphtheria toxin, which modify [[G-protein]]s, [[EF2]] or
other targets, including [[POLQ|polθ]]-independent substrates. PARP3 also
mono-ADP-ribosylates histones at sites distinct from the break.

## Why it matters beyond repair

> [!warning] The broad claim is more secure than any single application
> **NAD+-derived ADP-ribosylation is an antimicrobial host defence.**
> Bacterial toxins that remodel host chromatin or NAD+ metabolism produce
> the same chemical species, and the epithelial NAD+ response to infection is
> an antimicrobial programme in its own right.
>
> This is where the well-documented antiviral application lives, and here
> the literature is unusually solid: **[[PARP1]]-dependent mono-ADP-ribosylation
> of [[Viral Replication|viral]] proteins restricts [[Viral Replication]].**
> In coronavirus infection, SARS-CoV-2 carries a **macrodomain in its
> non-structural protein nsp3** that hydrolyses and thereby neutralises
> mono-ADP-ribosylation. Removing the macrodomain makes the virus markedly
> attenuated and interferon-stimulating; the structural work on the
> macrodomain family across viruses — alphaviruses, coronaviruses,
> poxviruses — is unusually well characterised. This is a genuine
> virus–host arms race over a single, small chemical modification, and it
> is the reason MARylation is worth separating from PARylation rather than
> treating it as a footnote.

Other established and emerging roles:

- **NAD+ depletion and [[Sirtuins|sirtuin]] biology.** The classic PARP
  "NAD+ sink" model — persistent PARP1 activation consumes NAD+ and so
  suppresses sirtuin activity — is mechanistically real but has been
  substantially revised: the magnitude of NAD+ depletion depends on PAR
  chain length and on the NAD+ salvage pathway, and MARylation depletes NAD+
  stoichiometrically far less than PARylation. NAD+-boosting interventions
  such as [[Nicotinamide Riboside]] nevertheless have reported effects on
  PARP activity and DNA repair capacity, and the size of that effect is
  contested.
- **Innate immunity and chromatin.** Mono-ADP-ribosylation of histones by
  PARP10 and PARP12 remodels chromatin and suppresses transposable
  elements and retroviral transcription.
- **Inflammation.** PARP1 mono-ADP-ribosylates [[NF-κB]]-pathway components
  and [[STAT3]]; PARP14 is required for [[STAT6]]-dependent
  alternatively-activated macrophage polarisation.
- **Cell death crosstalk.** [[PARP1]]-dependent cell death (a
  caspase-independent death programme distinct from [[Apoptosis]] and
  [[Necrosis|necrosis]]) runs through NAD+ depletion and
  mitochondrial permeabilisation; mono-ADP-ribosylation sits upstream of
  that programme.

> [!warning] Clinical caveat
> **PARP inhibitors are clinically validated in
> [[Homologous Recombination|homologous recombination]]-deficient cancers**
> — [[BRCA1]]/[[BRCA2]], and more recently also selected
> [[HRD|homologous recombination deficiency]]-positive
> [[Pancreatic Cancer|pancreatic]] and [[Ovarian Cancer|ovarian]] cancers
> ([olaparib]], [[Niraparib]], [[Rucaparib]], [[Talazoparib]]). The mechanism
> is pharmacological trapping of PARP1 on DNA, not mono-ADP-ribosylation
> blockade, but it converts a PARP1 that would normally PARylate-or-MARylate
> into a persistent nuclease-independent lesion. It is a good illustration
> of why the distinction between the mono and polymer forms matters
> mechanistically but not always therapeutically.
>
> PARP1 hyperactivation after DNA damage also drives a **PARP inhibitor
> hypersensitivity** and, less commonly, **PARP inhibitor-associated myeloid
> neoplasms**, which is a real constraint on extended therapy.

## Documents

- [[ADP-ribosylation]] — supplies the parent modification class, the NAD+
  chemistry, the PARP family survey, and the terminology (mono vs poly)
  that this note specialises.
- [[Viral Replication]] — the source note for the antiviral application:
  in SARS-CoV-2 infection, PARP-mediated MARylation restricts viral
  replication and is counteracted by the viral macrodomain of nsp3. This
  note provides the enzymatic and reversibility detail behind that
  claim.

## Connections

- [[ADP-ribosylation]] — MARylation is the mono- form of this parent
  modification; the two differ in reversibility (PARG erases MAR cleanly,
  chains are degraded wholesale), in reader proteins, and in the extent
  of NAD+ consumption.
- [[Viral Replication]] — The best-established non-repair function of
  MARylation: it is an intrinsic host restriction factor, and viral
  macrodomains are a specific countermeasure.
- [[NAD+]] — Both substrate and the axis of interest: the modification
  consumes NAD+, which is the mechanistic reason MARylation and
  PARylation were long lumped together in the "NAD+ sink" model.
- [[PARP1]] — The principal mono-ADP-ribosyltransferase of the DNA damage
  response and the target of every approved PARP inhibitor.
- [[DNA Repair]] — Homologous recombination and base excision repair
  initiation both depend on PARP1 mono-ADP-ribosylation at the break; if
  PARylation is blocked, MARylation alone supports recruitment but not
  full repair.
- [[Sirtuins]] — [[NAD+]] depletion, however caused, reduces sirtuin
  NAD+-dependent deacetylase activity; the magnitude differs sharply
  between mono and polymer forms.
- [[AMPK]] — NAD+ salvage and energy status both sit upstream of
  PARP1 activity in the DDR, and AMPK-dependent regulation of
  [[NAD+]] availability is a reported but not fully established
  link; noted as a research-level rather than a settled
  connection.
- [[Ubiquitin]] — Mono-ADP-ribosylation of histones is itself a
  prerequisite for RNF8/RNF168-mediated ubiquitylation of the
  surrounding chromatin, so the two marks are sequential at the
  same site.
- [[Apoptosis]] and [[Necrosis]] — PARP1-dependent cell death is the
  caspase-independent route triggered by extreme, sustained PARP1
  activation; it is distinct from apoptosis proper.
- [[Chromatin]] — MARylated PARP1 decondenses chromatin around the break
  and PARylated histones are direct chromatin readers, making
  MARylation a chromatin-signalling mark.
- [[Innate Immunity]] — PARP14-mediated mono-ADP-ribosylation of STAT6
  is required for M2 macrophage polarisation; PARP10/PARP12 restrain
  transposable elements.
- [[Homologous Recombination]] and [[BRCA1]] — The setting in which
  PARP inhibition is an approved therapy, and the clearest clinical
  validation of the PARP axis.
- [[Histone]] — The substrate of PARP10/PARP12/PARP3-mediated
  mono-ADP-ribosylation, which is a distinct and less famous chemistry
  than PARylation of histones by PARP1.
- [[NF-κB]] and [[STAT3]] — Established PARP1 mono-ADP-ribosylation
  targets in the inflammatory and antiviral transcriptional programmes.
- [[Nicotinamide Riboside]] — NAD+ repletion; its effects on PARP
  activity and repair capacity are reported but contested in magnitude.

## Linking Summary

- New links added: [[PARP1]], [[DNA Repair]], [[PARG]], [[PARP2]], [[NAD+]], [[Sirtuins]], [[Ubiquitin]], [[Apoptosis]], [[Necrosis]], [[Chromatin]], [[Innate Immunity]], [[Homologous Recombination]], [[BRCA1]], [[Histone]], [[NF-κB]], [[STAT3]], [[Nicotinamide Riboside]], [[AMPK]], [[Olaparib]], [[Pancreatic Cancer]], [[HRD]]
- Suggested notes to create: [[Macrodomain]], [[PARP7]], [[PARP10]], [[PARP12]], [[PARP14]], [[PARP Inhibitor]], [[Niraparib]], [[Rucaparib]], [[Talazoparib]], [[Nsp3]], [[PARP1-Dependent Cell Death]], [[Homologous Recombination Deficiency]], [[NAD+ Salvage]], [[Adenosine Diphosphate Ribose]], [[G-protein]], [[EF2]], [[POLQ]] — removed as already existing: NF-κB
- Strong connections to strengthen: [[MARylation]] ↔ [[ADP-ribosylation]], [[MARylation]] ↔ [[Viral Replication]], [[MARylation]] ↔ [[NAD+]]
