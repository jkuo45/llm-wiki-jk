---
title: STAT1
description: 'STAT1 is a latent cytoplasmic transcription factor and the canonical effector
  of type I and type II interferon signaling. JAK phosphorylation at Tyr701
  drives reciprocal SH2-phosphotyrosine dimerization, nuclear translocation
  and binding to GAS elements; STAT1 forms homodimers and STAT1-STAT2
  heterodimers.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - signaling
  - transcription-factor
aliases: [Signal Transducer and Activator of Transcription 1, STAT1alpha, STAT1beta, pY-STAT1]
---

# STAT1

STAT1 is the founding member of the [[STAT]] family and the principal effector
of [[Interferon]] signaling. It is a **latent cytoplasmic transcription
factor**: no enzymatic activity, no nuclear localization until it is
phosphorylated on tyrosine. Almost everything STAT1 does — antiviral defense,
tumor immunosurveillance, inflammatory gene induction — flows from that one
switch.

## Structure

STAT1 (750 residues) has six modular regions:

- **N-terminal domain (ND, 1–123).** Mediates unphosphorylated dimerization
  and cooperates with the core fragment; also binds importins and the
  IFNAR2 receptor.
- **Coiled-coil domain (136–317).** Four helices with a predominantly
  hydrophilic surface, used by other helical proteins for specific docking;
  also forms a reciprocal interface with the partner's DNA-binding domain in
  the antiparallel dimer.
- **DNA-binding domain (318–488).** Immunoglobulin-like fold, related to
  [[NF-κB]] and p53, that inserts one segment deep into the major groove.
- **Linker domain (488–576).** Flexible; classically mis-annotated as an SH3
  domain, which it is not.
- **SH2 domain (577–683).** Binds phosphotyrosines, including the receptor's
  own pTyr and the partner STAT's C-terminal pTyr.
- **Transactivation domain (684–750).** C-terminal tail following
  **Tyr701**; Ser727 in the same region is phosphorylated by
  MAPK-family kinases and contributes to full transcriptional strength.

A 2.9 Å structure of pY-STAT1 bound to DNA shows the dimer forming a
continuous C-shaped clamp around the duplex, stabilized by reciprocal pTyr–SH2
interactions, with the two tail segments forming a short antiparallel
β-sheet through a tunnel between helices αB and αB′.

## Mechanism

1. Interferon binds its receptor. For [[Type I Interferon]] (IFN-α/β),
   IFNAR1/IFNAR2 recruits JAK1 and TYK2; for [[Interferon-gamma|IFN-γ]],
   IFNGR1/IFNGR2 recruits JAK1 and JAK2.
2. Receptor-associated JAKs phosphorylate themselves and tyrosines on the
   receptor's cytoplasmic tail.
3. STAT1 docks via its SH2 domain on the receptor pTyr and is phosphorylated
   at **Tyr701** by the JAK.
4. Reciprocal pTyr701–SH2 binding between two STAT1 monomers creates a
   parallel dimer; N-terminal contacts are lost, and the complex translocates
   into the nucleus.
5. STAT1 recognizes the palindromic **GAS (IFN-γ-activated sequence)**
   consensus TTCN2-4GAA and, in the ISGF3 context, cooperates with
   STAT2 and IRF proteins to drive interferon-stimulated genes (ISGs).

> [!info] Dephosphorylation is part of the mechanism, not an afterthought
> Unphosphorylated STAT1 also dimerizes, and its core fragments can adopt
> either a **parallel** or an **antiparallel** arrangement. Mutating either
> the ND/ND or the coiled-coil/DNA-binding interface abolishes
> unphosphorylated dimerization and, strikingly, produces abnormally persistent
> phosphorylation in vivo and resistance to phosphatases in vitro. The
> working model is that a nuclear phosphodimer rearranges from parallel to
> antiparallel to present pTyr701 efficiently to phosphatase, terminating the
> signal. Disease-causing interface mutants such as F172W and T385A extend
> nuclear residence and gene-specific output, consistent with this.

**STAT1 also forms heterodimers with STAT2**, which is the dominant
complex in type I interferon signaling; viruses target this interface, and
paramyxovirus V and rabies P proteins inhibit STAT signaling by binding the
STAT1 N-domain and blocking phosphorylation or DNA binding.

## Physiological roles

- **Antiviral defense.** STAT1 induces PKR, 2'-5' oligoadenylate synthetase,
  Mx proteins, guanylate-binding proteins and other ISGs. Stat1−/− and
  Stat1 S727A mice are highly susceptible to viral and bacterial infection —
  Stat1-null mice even lose bacterial resistance when N-terminal dimerization
  is disrupted.
- **Immune cell development and function.** STAT1 is required for NK-cell and
  T-cell effector function, [[Cellular Senescence|senescence]] induction in
  response to DNA damage and oncogene activation, myeloid differentiation, and
  the anti-proliferative response of tumor cells.
- **Cross-talk.** STAT1 is phosphorylated on Ser727 by [[ERK]]/p38, is
  acetylated by [[CBP]]/[[P300]], and cooperates with [[IRF3]], [[IRF7]] and
  [[NF-κB]] at many promoters, so interferon output integrates with MAPK,
  acetylation and DNA-damage pathways.

## Clinical relevance

- **Inborn errors.** Germline heterozygous **STAT1** mutations cause
  autosomal dominant chronic mucocutaneous candidiasis and Mendelian
  susceptibility to mycobacterial disease. Mutations concentrate in the
  coiled-coil domain (GAF domain), which interfaces with IFNGR1; the
  DNA-binding-domain T385M allele causes disseminated histoplasmosis and
  early bronchiectasis.
- **Cancer.** STAT1 acts as a tumor suppressor through its
  [[Cellular Senescence|senescence]] and immune-surveillance functions:
  loss of STAT1 or of IFN-γ signaling lets tumors escape CD8+ T-cell
  detection and is associated with resistance to [[Immunotherapy]] and to
  [[PD-L1]] checkpoint blockade. Conversely, persistent pY-STAT1 signaling in
  tumor-infiltrating myeloid cells drives immunosuppressive transcriptional
  programs, and [[STAT3]]-dominant tumors are often STAT1-low.
- **Inflammation.** STAT1 loss or impaired signaling is implicated in
  [[Atherosclerosis]] and in failed antiviral responses in
  [[Immunosenescence]].

## Documents

- (no document notes yet)

## Connections

- [[STAT]] — the family note: STAT1 is the archetype from which JAK–STAT signaling was defined, and the only STAT that forms both homodimers and STAT1–STAT2 heterodimers.
- [[JAK]] — receptor-associated JAK1/JAK2/TYK2 phosphorylate STAT1 at Tyr701; no kinase activity means no STAT1 activation.
- [[Interferon]] — the ligand class STAT1 was defined by, upstream of both IFNAR and IFNGR.
- [[Interferon-gamma]] — engages IFNGR1/2 and drives canonical STAT1 homodimer binding to GAS elements.
- [[Type I Interferon]] — engages IFNAR1/2 and drives the STAT1–STAT2–IRF9 (ISGF3) trimer complex.
- [[IRF3]] and [[IRF7]] — cooperate with STAT1 in interferon-stimulated gene transcription.
- [[Interferon-Stimulated Genes]] — the antiviral output program STAT1 exists to turn on.
- [[STAT3]] — the other major STAT; its relative abundance versus STAT1 often decides inflammatory versus immunosuppressive tone in tumors.
- [[ERK]] — phosphorylates STAT1 at Ser727, modulating full transcriptional activity.
- [[Cellular Senescence]] — STAT1 is a required node in oncogene- and DNA-damage-induced senescence.

## Linking Summary

- New links added: [[STAT]], [[STAT2]], [[STAT3]], [[JAK]], [[Interferon]], [[Interferon-gamma]], [[Type I Interferon]], [[IRF3]], [[IRF7]], [[Interferon-Stimulated Genes]], [[NF-κB]], [[ERK]], [[CBP]], [[P300]], [[Cellular Senescence]], [[Innate Immunity]], [[Immunotherapy]], [[PD-L1]], [[Immunosenescence]], [[Atherosclerosis]]
- Suggested notes to create: [[Chronic Mucocutaneous Candidiasis]], [[GAS Element]], [[ISGF3]], [[Natural Killer Cell]], [[Interferon Regulatory Factor 9]], [[Antiviral Immunity]], [[STAT2]]
- Strong connections to strengthen: [[STAT1]] ↔ [[JAK]], [[STAT1]] ↔ [[Interferon]], [[STAT1]] ↔ [[Interferon-Stimulated Genes]], [[STAT1]] ↔ [[STAT3]]