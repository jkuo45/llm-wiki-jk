---
title: IRAK
description: Interleukin-1 receptor-associated kinase, a small family of
  serine/threonine kinases of which IRAK4 is the obligatory upstream kinase for
  Toll-like receptor and IL-1 receptor signalling into NF-kappaB and AP-1.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - kinase
  - signaling
  - innate-immunity
aliases: [Interleukin-1 Receptor-Associated Kinase, IRAK Family]
---

# IRAK

The **interleukin-1 receptor-associated kinases (IRAKs)** are a family of four
serine/threonine protein kinases — IRAK1, IRAK2, IRAK3 (IPAK), and IRAK4 —
that transduce signals from the Toll/IL-1 receptor (TIR) superfamily into
[[NF-κB]] and AP-1. Of the four, **[[IRAK4]]** is the only one that is
absolutely required; it is frequently what is meant when "IRAK" appears without
a number.

## Structure

All IRAKs share a modular architecture: an N-terminal death domain, a
proline-rich region that binds [[SH2-B]]-type adaptors and other scaffold
proteins, a central kinase domain, and a C-terminal tail. The N-terminal
domain has a zinc-binding (HH-CC) fold and mediates oligomerisation — it is
not a catalytic but a scaffolding role, and its deletion in *Drosophila* Pelle
removes signalling without abolishing the enzyme.

> [!info] IRAK4 is a gatekeeper, not just an enzyme
> Loss of IRAK4 or of its intrinsic kinase activity nearly abolishes IL-1R and
> TLR signalling. IRAK4 functions both as a scaffold in the myddosome and as a
> kinase: myddosome assembly itself stimulates IRAK4 dimerisation and
> trans-autophosphorylation, so the protein is required even in a
> catalytically-dead-ish context as long as some activity is retained. The
> activation-loop Thr345 of one monomer sits in the active site of its partner
> in crystallographic autophosphorylation structures.

## The signalling cascade

1. Ligand binding to a [[Toll-like Receptor]] (a [[PAMP]]) or an [[IL-1R]]
   family receptor causes the intracellular TIR domain to recruit the adapter
   [[MyD88]].
2. [[MyD88]] uses its death domain to recruit and activate IRAK4; IRAK2 is then
   phosphorylated and joins, forming the [[Myddosome]].
3. The myddosome recruits [[IRAK1]], which is phosphorylated and in turn
   recruits the E3 ubiquitin ligase [[TRAF6]].
4. [[TRAF6]] polyubiquitinates itself and [[IKKbeta]] (NEMO), recruiting
   [[TAK1]].
5. TAK1 activates the IKK complex, phosphorylating [[IkappaBalpha]] for
   degradation, which releases [[NF-κB]] to enter the nucleus; TAK1
   simultaneously activates the [[JNK]] arm of the [[MAPK Signaling]] pathway,
   producing AP-1.

> [!info] Reported off-pathway roles
> Beyond the canonical myddosome, IRAK4 has been reported in [[TAK1]]-dependent
> MAPK activation and in [[MyD88]]-dependent noncanonical [[NLRP3]]
> inflammasome priming. IRAK1/4 inhibition also augments checkpoint-blockade
> responses in [[Melanoma]] and overcomes checkpoint resistance in
> pancreatic ductal adenocarcinoma. Some of these claims rest on a limited
> number of studies and remain less settled than the core TLR pathway.

## Pharmacology and human genetics

IRAK4 inhibitors occupy the ATP pocket, which is guarded by a **tyrosine
gatekeeper** — unusual among serine/threonine kinases and the structural
rationale for IRAK4-selective inhibitor design. Clinical-stage small
molecules include zimlovisertib (PF-06650833), emavusertib (CA-4948), and
zabedosertib (BAY 1834845); **targeted IRAK4 degraders** have also entered
clinical trials.

> [!warning] Clinical caveat
> Broad systemic IRAK4 blockade is a two-edged sword, which is the main reason
> development is slow. Human IRAK4 deficiency produces recurrent *pyogenic
> bacterial* infections in childhood — yet a cohort of patients over 14 showed no
> significant bacterial infections, suggesting the phenotype attenuates with age.
> That age-dependence is the argument for target restriction (e.g. local
> delivery, exposure windows) rather than lifelong inhibition.

## Documents

- [[IKKbeta]]
  - Downstream kinase complex; the stub's inbound link, retained.
- [[IL-1R]]
  - One of the two receptor families whose signalling depends on IRAK4; the
    stub's second inbound link, retained.

## Connections

- [[IKKbeta]] — IKKβ is phosphorylated by the TAK1 complex, which IRAK4
  signals to via TRAF6-mediated ubiquitination. IKKβ in turn phosphorylates
  IκBα, the gate that releases NF-κB; IRAK4 sits three reaction steps upstream.

- [[IL-1R]] — The IL-1 receptor family signals obligatorily through
  IRAK4–MyD88. This is why [[IL-1β]] blockade (via the IL-1 receptor
  antagonist) and IRAK4 inhibition produce mechanistically overlapping
  effects in [[Inflammation]].

- [[MyD88]] — MyD88 is the adaptor that physically recruits IRAK4 to the
  receptor; the myddosome assembles only when both are present, making the
  pair the minimal functional unit of the pathway.

- [[IRAK4]] — The family member that is actually required. Any statement about
  "IRAK" in a signalling context almost always means IRAK4 specifically,
  because IRAK1/2/3 loss is compensated by each other.

- [[Toll-like Receptor]] — The upstream receptors. TLRs are activated by
  microbial PAMP motifs, and the resulting pro-inflammatory output is the
  target of IRAK4 inhibitors in autoimmune disease.

- [[IRF3]] — Acts in the parallel TRIF-dependent branch of TLR3/TLR4
  signalling. IRAK4 blocks the MyD88 branch only, so type I interferon
  induction via TRIF is spared — a partial reason for the tolerability profile.

- [[Melanoma]] — IRAK1/4 inhibition in mouse models increases programmed cell
  death and slows tumour growth, and augments the therapeutic response. Human
  translation is still early.

## Linking Summary

- New links added: [[IRAK4]], [[IRAK1]], [[MyD88]], [[Myddosome]],
  [[TRAF6]], [[TAK1]], [[IKKbeta]], [[NF-κB]], [[IkappaBalpha]], [[JNK]],
  [[MAPK Signaling]], [[Toll-like Receptor]], [[PAMP]], [[IL-1R]], [[IL-1β]],
  [[NLRP3]], [[Inflammation]], [[Melanoma]], [[IRF3]], [[Drosophila melanogaster]]
- Suggested notes to create: [[SH2-B]], [[Myddosome Assembly]],
  [[Zimlovisertib]], [[Emavusertib]], [[Zabedosertib]], [[IRAK1/4 Degraders]]
- Strong connections to strengthen: [[IRAK4]] ↔ [[NLRP3]],
  [[IRAK4]] ↔ [[Checkpoint Inhibitor]]
