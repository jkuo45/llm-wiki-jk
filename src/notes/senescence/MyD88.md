---
title: MyD88
description: >-
  MyD88 is a universal cytoplasmic adaptor protein that transduces signals from
  Toll-like receptors and interleukin-1 receptors to IRAK kinases and TRAF6,
  activating NF-κB and MAPK-driven inflammatory gene expression.
created: 2026-07-11
updated: 2026-07-11
tags:
  - protein
  - adaptor-protein
  - innate-immunity
  - inflammation
aliases: [MyD88, Myeloid Differentiation Primary Response Protein 88]
---

# MyD88

**Myeloid differentiation primary-response protein 88 (MyD88)** is a ubiquitously expressed cytoplasmic adaptor protein that serves as the central hub of [[Toll-like Receptor]] (TLR) and [[IL-1R]] (interleukin-1 receptor) signaling pathways. Nearly all TLRs (except TLR3) and all IL-1 family receptors (IL-1R, IL-18R, IL-33R) signal through MyD88, making it one of the most critical nodes in innate immunity.

MyD88 was originally identified as a myeloid differentiation primary-response gene induced during IL-1 stimulation. It functions as the scaffolding protein of the **myddosome** — a supramolecular organizing center (SMOC) that hierarchically recruits IRAK kinases to activate downstream inflammatory signaling.

## Structure

MyD88 contains two functional domains:

1. **N-terminal Death Domain (DD)** — mediates homotypic interactions with the DD of IRAK4 and IRAK1/IRAK2
2. **C-terminal TIR (Toll/IL-1 Receptor) Domain** — mediates homotypic interactions with the TIR domains of activated receptors (TLRs, IL-1R)

Between these domains lies a short interdomain region. MyD88 is expressed as a monomer in resting cells and does not self-associate until recruited to the activated receptor.

## The Myddosome Signaling Complex

Upon receptor activation, MyD88 assembles into a helical oligomeric platform called the **myddosome**:

### Assembly Sequence

1. **Receptor dimerization**: Ligand binding (IL-1α, IL-1β, LPS via TLR4, or other PAMPs/DAMPs) induces conformational changes in receptor TIR domains
2. **MyD88 recruitment**: 6–8 MyD88 molecules are recruited via TIR–TIR homotypic interactions (directly or via the co-adaptor **Mal/TIRAP** for TLR2 and TLR4)
3. **IRAK4 recruitment**: 4 IRAK4 molecules are recruited via DD–DD interactions with MyD88
4. **IRAK1/IRAK2 recruitment**: 4 IRAK1 or IRAK2 molecules interact with IRAK4 in a 4:4 stoichiometry

The resulting three-layered helical structure (MyD88 → IRAK4 → IRAK1/2) brings multiple kinase domains into proximity, enabling sequential trans-autophosphorylation and activation.

> [!info] Myddosome as a Signaling Hub
> The myddosome controls not only transcriptional responses (NF-κB, AP-1, IRF5, IRF7) but also post-transcriptional mRNA stability, metabolic reprogramming (glycolysis, oxidative phosphorylation), and [[Inflammasome]] activation (Pereira & Gazzinelli, Front Immunol, 2023).

## Downstream Signaling Cascade

### The MyD88 → IRAK → TRAF6 → NF-κB/MAPK Axis

1. **IRAK4 activation**: IRAK4 molecules within the myddosome auto-trans-autophosphorylate
2. **IRAK1 phosphorylation**: Active IRAK4 recruits and phosphorylates IRAK1 at its ProST region
3. **IRAK1 hyperphosphorylation**: IRAK1 undergoes auto-hyperphosphorylation, activating its kinase activity
4. **TRAF6 recruitment**: Phosphorylated IRAK1 (via its C-terminal TRAF6-binding motifs, TBMs) recruits **[[TRAF6]]** — the E3 ubiquitin ligase
5. **TRAF6 auto-activation**: IRAK–TRAF6 interaction triggers TRAF6 auto-K63-ubiquitination
6. **IKK complex activation**: K63-ubiquitinated TRAF6 recruits and activates the IKK complex → phosphorylation and degradation of IκBα → **[[NF-κB|NF-κB]] nuclear translocation**
7. **MAPK activation**: TRAF6 also activates TAK1 → [[MAPK]] (JNK, ERK, p38) → **AP-1** transcription factor activation

> [!important] Signal Amplification and Termination
> IRAK1 activity rapidly decreases after TLR stimulation due to hyperphosphorylation and degradation (possibly via PEST sequences targeted by the proteasome or calpain). IRAK2 is more stable and sustains signaling for longer periods. TRAF6 expression decreases after prolonged TLR activation (~24 hours) via proteasomal degradation, providing a negative feedback loop.

### Additional Downstream Pathways

- **IRF5**: Activated by TRAF6-dependent ubiquitination; drives type I interferon and pro-inflammatory cytokine expression
- **IRF7**: Activated downstream of MyD88 in plasmacytoid dendritic cells; drives type I IFN production
- **IRAK1 degradation**: IRAK1 bound to TRAF6 can be K48-ubiquitinated and degraded, terminating the signal

## Role in Senescent Cell–Macrophage Signaling

The MyD88–IRAK–TRAF6 axis is the **critical signaling bridge** between senescent cell surface IL-1α and macrophage inflammatory activation:

1. **Senescent cell** presents surface-bound [[IL-1α]]
2. **IL-1α** engages [[IL-1R]] (IL-1R1) on neighbouring macrophages
3. **IL-1R** recruits **MyD88** via TIR–TIR interactions
4. MyD88 assembles the myddosome → IRAK4 → IRAK1 → [[TRAF6]]
5. TRAF6 activates **NF-κB** and **MAPK** → macrophage pro-inflammatory gene transcription (TNF-α, IL-6, IL-1β, IL-12, COX-2, iNOS)

> [!info] IRAK1 Depletion Confirms the Pathway
> Orjalo et al. (2009, PNAS, PMID 19911007) showed that depletion of IRAK1 — a key myddosome component — suppressed SASP secretion from senescent cells. IL-1α neutralizing antibodies prevented IRAK1 degradation, confirming engagement of the IL-1R/MyD88/IRAK1 signaling pathway.

This creates a **self-amplifying inflammatory loop**:
- Senescent cell → IL-1α → macrophage IL-1R → MyD88 → IRAK → TRAF6 → NF-κB → more SASP
- Macrophage → TNF-α, IL-1β → senescent cell NF-κB → more IL-1α

## Regulation

- **IRAK-M (IRAK3)**: Negative regulator; prevents IRAK1/IRAK4 dissociation from the myddosome, inhibiting downstream signaling
- **Tollip**: Inhibits IRAK1 kinase activity in resting cells; interacts with the DD and kinase domain of IRAK1
- **SOCS1**: Targets MyD88 and Mal for proteasomal degradation
- **SIGIRR (TIR8)**: Inhibits MyD88-dependent IL-1R and TLR signaling
- **PINK1**: Facilitates delivery of IRAK1 to the myddosome in some contexts
- **Pellino E3 ligases**: Ubiquitinate IRAK1, modulating myddosome output

## Clinical / Pathological Relevance

- **MyD88 deficiency**: Mice are highly susceptible to pyogenic bacterial infections; MyD88 polymorphisms in humans associate with susceptibility to tuberculosis, Legionella, and invasive aspergillosis
- **Gain-of-function mutations**: MYD88 L265P is an oncogenic driver in Waldenström macroglobulinemia (WM) and diffuse large B-cell lymphoma (DLBCL), causing constitutive NF-κB activation
- **Cancer**: MyD88-mediated NF-κB signaling in the tumour microenvironment promotes chronic inflammation and tumorigenesis
- **Aging**: Persistent MyD88-dependent IL-1R signaling drives [[Inflammaging]] and age-related tissue degeneration
- **Therapeutic targets**: MyD88 inhibitors (e.g., TJ-M2010-5) are in preclinical development for inflammatory and autoimmune diseases

## Documents

List of documents in the wiki that mention this entity

- [[_document_ - Senecent cell activate neighboring macrophages|Senescent cells activate neighbouring macrophages]]
  - Details how IL-1α on senescent cells engages IL-1R on macrophages, activating the MyD88 → IRAK → TRAF6 → NF-κB axis to drive macrophage pro-inflammatory responses and SASP amplification.

## Connections

- [[IL-1α]] — Surface IL-1α on senescent cells engages IL-1R, which recruits MyD88 to initiate signaling
- [[IL-1R]] — IL-1 receptor whose cytoplasmic TIR domain recruits MyD88 upon ligand binding
- [[Toll-like Receptor]] — TLRs (except TLR3) signal through MyD88 to activate innate immune responses
- [[IRAK1]] — Serine/threonine kinase recruited to the myddosome; phosphorylates and activates TRAF6
- [[IRAK4]] — First kinase recruited to MyD88; initiates the phosphorylation cascade
- [[TRAF6]] — E3 ubiquitin ligase activated by IRAK1; bridges to NF-κB and MAPK pathways
- [[NF-κB|NF-κB]] — Master inflammatory transcription factor activated downstream of MyD88 signaling
- [[MAPK]] — JNK, ERK, p38 activated downstream of TRAF6; drive AP-1 transcription
- [[Senescent Cells]] — Surface IL-1α from senescent cells activates MyD88 signaling in neighbouring macrophages
- [[Macrophages]] — MyD88 is the central signaling hub in macrophages for IL-1R and TLR responses
- [[SASP|Senescence-Associated Secretory Phenotype]] — MyD88-dependent IL-1R signaling is required for SASP establishment and maintenance
- [[Inflammaging]] — Chronic MyD88-dependent IL-1R signaling drives age-related inflammation
- [[Senescence Surveillance]] — MyD88-dependent macrophage activation contributes to immune clearance of senescent cells

## Linking Summary

- New links added: [[IL-1α]], [[IL-1R]], [[Toll-like Receptor]], [[IRAK1]], [[IRAK4]], [[TRAF6]], [[NF-κB|NF-κB]], [[MAPK]], [[Senescent Cells]], [[Macrophages]], [[SASP|Senescence-Associated Secretory Phenotype]], [[Inflammaging]], [[Senescence Surveillance]]
- Suggested new entity notes to create: [[IRAK3]], [[Tollip]], [[SOCS1]], [[Pellino]]
- Strong connections to strengthen:
    - [[MyD88]] ↔ [[IL-1R]]
    - [[MyD88]] ↔ [[IRAK1]]
    - [[MyD88]] ↔ [[TRAF6]]
    - [[MyD88]] ↔ [[NF-κB|NF-κB]]
    - [[MyD88]] ↔ [[Senescent Cells]]
    - [[MyD88]] ↔ [[SASP|Senescence-Associated Secretory Phenotype]]
