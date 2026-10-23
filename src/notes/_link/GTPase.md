---
title: GTPase
description: Superclass of guanine nucleotide-binding proteins that cycle between GTP- and GDP-bound states to convert receptor or mechanical input into cellular output, encompassing the Ras, Rho, Rab, Arf and dynamin families.
protected: false
created: 2026-10-22
updated: 2026-10-22
tags: [protein, gtpase, signaling]
url: #
source: #
aliases: [Guanine nucleotide-binding protein, GTP-binding protein, GTPase superclass]
---

# GTPase

**GTPase** denotes the superfamily of proteins that bind guanine nucleotides and act as molecular switches. A GTPase is "on" when it holds [[GTP]] and "off" when it holds GDP; the energy of GTP hydrolysis is what allows the switch to drive output. GTPases are the currency of fast, reversible signalling in the cell, and they also serve as mechanical motors in membrane remodelling.

## Structure & Domains

The canonical small GTPase (≈20–25 kDa) has:

- **P-loop (Walker A) motif** — a GxxxxGK[ST] sequence that binds the phosphate groups of the guanine nucleotide.
- **Walker B and switch I / switch II** — catalytic and conformational elements that rearrange between the GTP- and GDP-bound states, creating a binding surface for effectors and for GTPase-activating proteins.
- **G4 tetrad** — residues contacting the guanine base; magnesium coordination is required for hydrolysis.

Larger GTPases (Ras family members, dynamin, the trimeric G-protein α subunits) add effector-binding domains, membrane-targeting lipid modifications (CAAX motifs), or additional catalytic modules.

## Mechanism of Action & Pathways

The **nucleotide cycle** is the core of every GTPase:

1. **Exchange.** A guanine nucleotide exchange factor (GEF) destabilises the GDP-binding pocket so that abundant cytosolic GTP replaces GDP.
2. **Effectors.** GTP-bound GTPases expose switch I and switch II, recruiting effectors that transduce the signal — kinases, scaffolds, exchange factors for other GTPases, or membrane-remodelling machinery.
3. **Hydrolysis.** A GAP accelerates hydrolysis by supplying catalytic arginine and stabilising the transition state, converting the active state back to the inactive GDP state. Some GTPases, notably Ras and the trimeric α subunits, are intrinsically slow hydrolyses and rely on GAPs; others, such as many Rab proteins, hydrolyse quickly.
4. **Reset and re-localisation.** GEFs also relocalise GTPases to their target membranes, so "on/off" and "where" are coupled.

## Family Overview

- **Ras family** — [[RAS]] and relatives (Ras, Rap, Rin, Ral, Rheb) relay mitogenic and growth-factor signals to the [[ERK Signaling|ERK]] and [[PI3K-Akt Signaling|PI3K-Akt]] cascades. Oncogenic RAS is the most frequently mutated oncogene in human cancer.
- **Rho family** — [[RhoA]], [[Rac1]] and [[Cdc42]] control actin architecture, cell adhesion, polarity and [[Cell Migration]]. RhoA acts through [[ROCK]] to generate actomyosin contractility; Rac and Cdc42 drive protrusion.
- **Rab family** — [[Rab5]] (early endosome), [[Rab7]] (late endosome/lysosome) and [[Rab8]] define membrane identity in [[Membrane Trafficking]]; Rab conversion underlies [[Autophagy]] and lysosome reformation.
- **Arf family** — [[Arf1]] recruits coat proteins and lipid-modifying enzymes at the Golgi and endosomes and drives membrane bending.
- **Dynamin family** — [[Dynamin]] and the mitofusins [[MFN1]]/[[MFN2]] are mechanochemical GTPases that sever membranes, including in [[Mitochondrial Fission]].
- **Heterotrimeric G proteins** — the α subunits act as GTPases and are switched by G-protein-coupled receptors, coupling [[G Protein-Coupled Receptor|GPCRs]] to adenylyl cyclase and phospholipase C.
- **Translation factors** — EF-Tu, EF-G and the initiation factors run the ribosome cycle.

## Physiological Function

GTPases organize essentially all fast cellular behaviour: signal transduction from receptors, membrane trafficking, cytoskeletal organisation, cell division, and translation. Their distinctive advantage is that the switch is fast, reversible and *amplifiable*: one activated GTPase can activate many effector molecules before it is switched off. Mis-controlled GTPase signalling is therefore a common route to disease.
## Pathology & Clinical Relevance

- **Cancer.** Activating mutations in RAS-family GTPases and loss of the GTPase-activating proteins that restrain them (e.g. NF1 for Ras) are recurrent oncogenic events; Rho-family hyperactivity drives invasion and metastasis.
- **Immunodeficiency.** Defective GTPases (e.g. Rab27A in Chediak–Higashi syndrome, Cdc42 and WASP in Wiskott-Aldrich syndrome) impair lysosomal trafficking, degranulation and immunity.
- **Neurodegeneration.** Altered Rab and Rho GTPase trafficking contributes to axonal transport failure, and defective mitofusin/dynamin-mediated fission underlies [[Neurodegeneration]] and [[Parkinson's Disease]].
- **Metabolic disease and ageing.** Mitochondrial GTPases participate in the mitochondrial quality-control network; their dysfunction couples to [[Cellular Senescence]], [[Reactive Oxygen Species]] and [[Autophagy]] impairment.
- **Pharmacology.** GTPases are direct targets of several drug classes: farnesyltransferase inhibitors (targeting Ras processing), and small-molecule inhibitors of Rho-family members, Rheb and the antiviral drug ribavirin (via a host enzyme).

## Documents

- (no document notes yet)

## Connections

- [[GTP]] — the nucleotide whose hydrolysis powers the switch
- [[GAP]] — the GTPase-activating protein family that accelerates hydrolysis
- [[RAS]] / [[RhoA]] / [[Rac GTPase]] / [[Rac1]] / [[Cdc42]] / [[Arf1]] — principal small GTPase families
- [[Rab5]] / [[Rab7]] / [[Rab8]] — Rab family defining endomembrane identity
- [[Dynamin]] / [[MFN1]] / [[MFN2]] / [[Mitochondrial Fission]] — mechanochemical GTPases
- [[G Protein-Coupled Receptor]] / [[GbetaL]] — heterotrimeric G-protein signalling
- [[Membrane Trafficking]] / [[Vesicle Transport]] / [[Autophagy]] / [[Endocytosis]] — trafficking processes built on GTPase switches
- [[ERK Signaling]] / [[PI3K-Akt Signaling]] / [[ROCK]] — effector cascades
- [[Cancer]] / [[Oncogene]] / [[Genomic Instability]] — disease contexts of GTPase deregulation
- [[Reactive Oxygen Species]] / [[Cellular Senescence]] / [[Neurodegeneration]] / [[Parkinson's Disease]] — downstream and age-related consequences

## Linking Summary

- New entity note in `src/notes/_link/` (shared superclass note that acts as the parent concept for the family notes).
- New links added: [[GTP]], [[GAP]], [[RAS]], [[RhoA]], [[Rac GTPase]], [[Rac1]], [[Cdc42]], [[Arf1]], [[Rab5]], [[Rab7]], [[Rab8]], [[Dynamin]], [[MFN1]], [[MFN2]], [[Mitochondrial Fission]], [[G Protein-Coupled Receptor]], [[GbetaL]], [[Membrane Trafficking]], [[Vesicle Transport]], [[Autophagy]], [[Endocytosis]], [[ERK Signaling]], [[PI3K-Akt Signaling]], [[ROCK]], [[Cancer]], [[Oncogene]], [[Genomic Instability]], [[Reactive Oxygen Species]], [[Cellular Senescence]], [[Neurodegeneration]], [[Parkinson's Disease]].
- Suggested new entity notes to create: [[GEF]], [[Guanine Nucleotide Exchange Factor]], [[Rab27A]], [[G alpha subunit]], [[M-Ras]], [[Rheb]].
- Strong connections to strengthen: [[GTPase]] ↔ [[GTP]], [[GTPase]] ↔ [[RAS]], [[GTPase]] ↔ [[Rab7]].
