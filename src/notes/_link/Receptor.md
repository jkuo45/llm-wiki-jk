---
title: Receptor
description: A receptor is a protein that binds a specific ligand and converts that binding into a cellular signal; receptors include GPCRs, receptor tyrosine kinases, nuclear receptors, cytokine and pattern-recognition receptors, and ligand-gated ion channels, and constitute the largest drug-target class in pharmacology.
created: 2026-10-01
updated: 2026-10-02
tags:
  - protein
  - receptor
  - signaling
aliases: [receptors, protein receptor, receptor protein]
---

# Receptor

A **receptor** is a protein — membrane-bound or intracellular — that binds a specific signalling molecule (its **ligand**) and converts that binding into a signal the cell can act on. Receptors are the primary sensing layer of every multicellular organism: they convert hormone concentration, neurotransmitter release, nutrient availability, pathogen components, and mechanical cues into intracellular responses.

> [!info] Class over instance
> "Receptor" names a protein class, not one protein. The vault's individual receptor notes — [[MC1R]], [[Insulin Receptor]], [[G Protein-Coupled Receptor]], [[P2X7 Receptor]], [[Toll-like Receptor]] — are members. What follows is the shared architecture and logic.

## Ligand binding

Ligand binding occupies a defined site, usually a pocket or cleft on the extracellular face or within a cytoplasmic domain. Binding affinity and lifetime are tuned by:

- **Ligand concentration** — the primary variable receptors report on.
- **Structural selectivity** — small changes in the binding pocket determine agonist versus antagonist recognition. This is why a receptor can be agonised by one molecule and blocked by another that fits the same site.
- **Allostery and positive/negative cooperativity** — the affinity of subsequent ligand binding depends on whether a ligand is already bound. Adenosine and haemoglobin are the classical textbook cooperativity examples.

## Receptor families

**G protein-coupled receptors (GPCRs).** The largest class in the human genome, seven transmembrane helices coupled to heterotrimeric G proteins. Ligand binding acts as a guanine nucleotide exchange factor, promoting GDP release and GTP binding on the Gα subunit; Gα-GTP then dissociates from Gβγ to regulate effectors. Families are classified A–F (rhodopsin-like, secretin, metabotropic glutamate, fungal mating, cAMP, and frizzled/smoothened), of which A, B, C, adhesion and F are found in humans. Signals are terminated by G-protein hydrolysis, by receptor phosphorylation, and by arrestin-mediated desensitisation and internalisation. Orphan GPCRs — classified by sequence similarity but lacking an identified endogenous ligand — remain a large fraction of the class.

**Receptor tyrosine kinases (RTKs).** Single-pass transmembrane proteins with intrinsic kinase activity. Ligand binding dimerises the receptor and drives trans-autophosphorylation of cytoplasmic tyrosines, creating docking sites for SH2-domain and PTB-domain proteins and launching the Ras/MAPK, PI3K/Akt, and PLCγ pathways. Receptor activation is opposed by phosphatases and by receptor internalisation and degradation.

**Nuclear receptors.** Intracellular ligand-activated transcription factors, including the steroid hormone receptors ([[Estrogen Receptor]], [[Androgen Receptor]]), retinoid receptors, and orphan nuclear receptors. Ligand translocates the receptor to the nucleus where it binds response elements and recruits coactivators or corepressors.

**Cytokine and pattern-recognition receptors.** Type I/II cytokine receptors signal through JAK–STAT coupling ([[Growth Factor Receptor]] family). [[Toll-like Receptor]]s recognise pathogen-associated molecular patterns rather than host signals, which is why they bridge innate immunity and the inflammatory response.

**Ligand-gated ion channels.** Receptors whose ligand binding directly gates ion flux, producing fast millisecond-scale responses — the mechanism behind [[NMDA receptor]] and nicotinic acetylcholine receptor signalling.

## Pharmacology: why receptors dominate drug targets

Roughly a third to a half of all approved drugs act on a receptor, and the reason is structural rather than historical: a receptor has a defined ligand-binding site that a drug can occupy selectively, and receptor identity is a measurable, often patient-selectable biomarker.

- **Agonists** stabilise the active conformation, mimicking or amplifying the endogenous ligand.
- **Antagonists** occupy the site without activating, blocking the endogenous ligand. Inverse agonists additionally suppress constitutive basal activity, which matters for receptors with intrinsic activity.
- **Partial agonists** produce submaximal responses even at full occupancy, useful where full activation is toxic.
- **Allosteric modulators** bind a distinct site and shift the affinity or efficacy of orthosteric ligand binding, offering a way to tune agonist versus antagonist behaviour.

Because receptors are the transmission point for [[Neurotransmission]], [[Growth Factor]] signalling, and innate immune sensing, they sit upstream of nearly every pathway in this vault — which is why receptor-level interventions are preferred over downstream ones whenever specificity allows.

> [!warning] Receptor families are not interchangeable
> "Inhibiting the receptor" is meaningless without naming the receptor. Antibody blockade of a [[Toll-like Receptor]] and small-molecule inhibition of a GPCR share no pharmacology, and agonist vs antagonist choice can invert the therapeutic direction. Always specify the receptor and the direction of modulation.

## Documents
- (no document notes yet)

## Connections
- [[Transcription Factor]] — nuclear receptors are ligand-activated transcription factors, the clearest point where receptor signalling and gene regulation are the same protein.
- [[G Protein-Coupled Receptor]] — the largest receptor family and the principal pharmacological target class, coupling ligand binding to heterotrimeric G proteins.
- [[Receptor Tyrosine Kinases]] — the growth-factor receptor family with intrinsic kinase activity, upstream of Ras/MAPK and PI3K/Akt.
- [[Neurotransmission]] — synaptic receptors are the fast target set of neurotransmitters, converting release events into post-synaptic currents.
- [[Inflammation]] — pattern-recognition and cytokine receptors are how innate immune cells detect infection and amplify the inflammatory response.

## Linking Summary
- New links added: [[Transcription Factor]], [[G Protein-Coupled Receptor]], [[Receptor Tyrosine Kinases]], [[Neurotransmission]], [[Inflammation]]
- Suggested notes to create: [[Ligand]], [[Ligand Binding]], [[Second Messenger]], [[Beta-Arrestin]], [[Desensitization]], [[Orphan GPCR]], [[Cytokine Receptor]], [[Ligand-Gated Ion Channel]], [[Agonist]], [[Antagonist]], [[Allosteric Modulation]], [[Sh2 Domain]]
- Strong connections to strengthen: [[Receptor]] ↔ [[G Protein-Coupled Receptor]], [[Receptor]] ↔ [[Receptor Tyrosine Kinases]], [[Receptor]] ↔ [[Transcription Factor]]