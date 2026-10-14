---
title: Cell Signaling
description: The process by which cells detect and respond to chemical and physical cues
  through receptors, second messengers and amplified signal-transduction cascades;
  includes autocrine, paracrine, juxtacrine and endocrine signalling modes.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - biological-process
  - signaling-pathway
  - scientific-concept
aliases: [cell signalling, signal transduction, intercellular communication]
---

# Cell Signaling

Cell signaling is the process by which a cell detects an external or internal cue and
converts it into a change in its own behaviour. It is universal: it underlies
development, tissue repair, immunity and homeostasis, and its failure causes cancer,
autoimmunity and diabetes. The core architecture is three-part — **first messenger**
(ligand), **receptor**, and **signal** — and everything else in the field is variation
on how those three are connected.

## The canonical architecture

- **First messenger (ligand)** — the signalling molecule. Chemically diverse: ions
  ([[Calcium]], [[Potassium]]), lipids (steroids, [[Prostaglandins]]), peptides
  ([[Insulin]], ACTH), nucleotides ([[Cyclic Adenosine Monophosphate|cAMP]],
  [[Cyclic Guanosine Monophosphate|cGMP]]), and gases ([[Nitric Oxide]]). Peptide and
  lipid ligands comprise most hormones.
- **Receptor** — the detection device, with specificity conferred by the ligand–receptor
  binding interface.
- **Effector / transduction** — the relay network that converts receptor occupancy into
  intracellular chemical change and, ultimately, the cellular response.

## Receptor classes

**Cell-surface receptors:**

1. **Ligand-gated ion channels** — large transmembrane proteins with a ligand-activated
   gate. Ion flux is itself the signal; these are the fastest (microsecond) receptors
   and include the [[NMDA receptor|NMDA]], GABA-A, nicotinic acetylcholine and
   glycine receptors. Most receptors activated by physical stimuli — pressure,
   temperature, light — belong to this class.
2. **G protein-coupled receptors** — seven-pass transmembrane proteins. Ligand binding
   causes a conformational change that opens an intracellular heterotrimeric
   [[GTP|GTPase]] ([[GPCR]]-Gα-Gβγ), which exchanges GDP for [[GTP]] and dissociates.
   Gαs stimulates [[Adenylate Cyclase]] (raising cAMP); Gαi inhibits it; Gαq activates
   [[Phospholipase C]] (generating IP3 and DAG); Gα12/13 signals to Rho-family GTPases.
   This is the largest receptor superfamily in mammals and the target of roughly a third
   of all licensed drugs.
3. **Enzyme-linked receptors** — transmembrane proteins with an extracellular ligand
   domain and an intracellular catalytic domain. Receptor tyrosine kinases
   ([[Receptor Tyrosine Kinases|RTKs]]) such as [[EGFR]], [[IGF1R]] and [[PDGFR]]
   autophosphorylate on dimerisation and recruit signalling proteins to their phosphotyrosines;
   [[Cytokine]] receptors and [[Toll-like Receptor|toll-like receptors]] recruit
   [[JAK]]/[[STAT]] or [[NF-κB]] machinery instead.

**Intracellular (nuclear) receptors:** lipid-soluble ligands — steroid hormones,
[[Retinoic Acid]], thyroid hormone, vitamin D — diffuse across the lipid bilayer and bind
cytosolic or nuclear receptors, which translocate to regulate gene transcription
directly. [[Thyroid Hormones|Thyroid hormone receptors]] are the archetype.

> [!info] Amplification is the whole point
> Signal transduction exists to amplify. A few occupied receptors generate many
> second-messenger molecules, and second messengers activate many kinase molecules, so a
> signal that began with a handful of ligand molecules becomes a cell-wide response.
> Amplification is also the reason pathways have built-in brakes: phosphatases,
> GTPase-activating proteins, receptor internalisation and counter-regulatory proteins
> such as [[SOCS3]] exist to make the response transient and to set its threshold.

## Modes of intercellular signalling

| Mode | Range | Example |
| --- | --- | --- |
| **Autocrine** | Same cell | Interleukin-2 on the T cell that secreted it; [[SASP]] acting on adjacent senescent cells |
| **Intracrine** | Same cell, intracellular receptor | Hormone acting on its own nuclear receptor before secretion |
| **Juxtacrine** | Direct contact | [[Notch]]–Delta between adjacent cells; [[PD-L1]] on a macrophage engaging [[PD-1]] on a T cell |
| **Paracrine** | Nearby cells | Growth factors, cytokines, [[Prostaglandins]]; [[Paracrine Senescence]] |
| **Endocrine** | Distant, via blood | Hormones from endocrine glands |

The vault's [[Paracrine Senescence]] and [[Metabolic Reprogramming|paracrine
reprogramming]] notes are specific instances of the paracrine mode and the two are
useful counterexamples to the endocrine default.

## Downstream effectors

Beyond ion channels, second-messenger cascades end in covalent modification: protein
[[Phosphorylation]] (by [[Kinase|kinases]], opposed by phosphatases),
[[Ubiquitination]] and protein degradation, methylation and acetylation, and proteolytic
cleavage. Signalling therefore converges on the [[Proteasome]], the
[[Nucleus]] and the [[Transcription Factor|transcription machinery]], which is why
signalling cascades are so frequently studied through gene-expression endpoints.

## Regulation and termination

Signals are terminated by: GTP hydrolysis (intrinsic to the Gα subunit), receptor
desensitisation by arrestin-mediated internalisation, phosphatase-mediated dephosphorylation,
counter-regulatory proteins (SOCS, [[SMAD7]], and various inducers of degraders), and
cleavage of second messengers. A large fraction of the "unused" machinery in signalling
exists purely to switch things off — and the failure of that off-switch is what produces
constitutive signalling in cancer.

## Beyond animals

Cell signaling is not a vertebrate invention:

- **Bacterial quorum sensing** — *Aliivibrio fischeri* produces autoinducer as
  concentration rises and switches on luminescence only when the population is
  sufficient. This was the first demonstration that signalling is a density-dependent
  behaviour, and it works in both gram-positive and gram-negative bacteria and across
  species.
- **Slime mould aggregation** — *Dictyostelium* cells respond to a cAMP gradient to
  aggregate into a multicellular slug and fruiting body, and are a leading model for
  self-organisation without a nervous system.
- **Plants** — use phytohormones (auxin, cytokinin, ABA), peptide-receptor kinase
  systems, and hydraulic and electrical signals. The vault's
  [[_document_ - 2026_Mickky_salt-eustress-sunflower_BMC-Plant-Biol_ABSTRACT-STUB|salt
  eustress in sunflower]] source is a plant-side example of signalling under stress.

## Diseases of signalling

Constitutive activation: [[KRAS]] and [[BRAF]] activating mutations, receptor
overexpression ([[HER2]]), [[NF-κB]] activation in chronic inflammation, and
[[JAK-STAT Signaling|JAK2]] mutations in myeloproliferative disease. Loss of
signalling: insulin resistance in [[Type 2 Diabetes]] ([[Insulin Receptor]] desensitisation),
defective [[TGF-beta Signaling Pathway|TGF-β]] and [[Notch]] signalling in congenital heart
disease, tumour suppressor loss in the [[Hippo Pathway]] and [[Wnt signaling|Wnt]] axes.
In this vault's ageing context, the signalling nodes most heavily represented are the
[[mTOR]] nutrient-sensing axis, the [[Integrated Stress Response]], the
[[cGAS-STING Pathway]] and the [[Notch]]/Hes1 and Hey2 developmental program.

## Documents

- [[BIG1]]
  - Casein kinase 2 regulatory subunit; a signalling node connecting membrane receptors to the proteome and to stress responses.
- [[Cell Membranes]]
  - The physical compartment in which most receptors, G proteins and second-messenger generators sit; membrane lipid and protein composition is itself a signalling input.

## Connections

- [[Cell Membranes]] — The plasma membrane is the signalling platform: it hosts GPCRs, ligand-gated channels, enzyme-linked receptors and lipid rafts, and its lipid composition (cholesterol, sphingolipids, PIP species) gates receptor trafficking and second-messenger generation.
- [[BIG1]] — BIG1 is the regulatory beta subunit of casein kinase 2, a constitutively active kinase that phosphorylates substrates across signalling, transcription and proteostasis. It sits at the intersection of receptor signalling output and the stress response, making it a bridge between signal transduction and the vault's ageing modules.
- [[Calcium]] — Calcium is the prototypical second messenger: its concentration is kept low in the cytosol and its transient elevation encodes signal identity (amplitude, duration and frequency all carry information).
- [[Notch]] — Notch is the canonical juxtacrine pathway — a membrane-bound ligand on one cell engaging a receptor on an adjacent cell, with cleavage releasing the intracellular domain as the signal. It is also one of the two exceptions that proves the rule: Notch signalling is regulated by ligand flux and endocytosis rate rather than by classical second messengers.
- [[mTOR]] — Nutrient sensing is signalling: amino acids, growth factors and energy charge converge on mTORC1, which couples nutrient availability to protein synthesis, autophagy and metabolism. It is the vault's most heavily connected signalling node.
- [[Integrated Stress Response]] — Four kinases (PERK, GCN2, HRI, ATF6) converge on eIF2-alpha phosphorylation and a global shift in translation with selective up-regulation of stress-response mRNAs — a signalling architecture built on amplification and on a common effector.
- [[Kinase]] — Kinases are the principal signal-transducing enzymes: they install the reversible post-translational marks (phosphorylation) that transmit and terminate signals and that the cell reads as state.
- [[Phosphorylation]] — Phosphorylation is the dominant reversible signalling mark, distinguishing activating from inhibitory modifications, creating binding sites, and enabling switch-like behaviour because one residue can be read differently by different effectors.
- [[Transcription Factor]] — The terminal output of most signalling cascades is a change in gene expression, and the primary reason signalling biology is studied in bulk transcriptomic experiments.
- [[STAT]] — STAT proteins are a minimal signalling module — a transcription factor recruited directly to activated receptor complexes — that makes cytokine signalling unusually easy to trace from membrane to nucleus.
- [[Hes1 and Hey2]] — Hes1 and Hey2 are the transcriptional output of Notch in the developing heart, illustrating how a single pathway produces tissue-specific effects depending on the cell's existing transcription factor complement.

## Linking Summary

- New links added: [[Calcium]], [[Potassium]], [[Prostaglandins]], [[Insulin]], [[Cyclic Adenosine Monophosphate]], [[Cyclic Guanosine Monophosphate]], [[Nitric Oxide]], [[GTP]], [[Adenylate Cyclase]], [[Phospholipase C]], [[Receptor Tyrosine Kinases]], [[EGFR]], [[IGF1R]], [[PDGFR]], [[JAK]], [[STAT]], [[NF-κB]], [[Toll-like Receptor]], [[NMDA receptor]], [[Retinoic Acid]], [[Thyroid Hormones]], [[SOCS3]], [[SMAD7]], [[Ubiquitination]], [[Proteasome]], [[Kinase]], [[Phosphorylation]], [[Transcription Factor]], [[Quorum sensing]], [[Paracrine Senescence]], [[Metabolic Reprogramming]], [[mTOR]], [[Integrated Stress Response]], [[cGAS-STING Pathway]], [[Wnt signaling]], [[Hippo Pathway]], [[JAK-STAT Signaling]], [[Type 2 Diabetes]], [[Insulin Receptor]], [[TGF-beta Signaling Pathway]], [[Notch]]
- Suggested notes to create: [[GPCR]], [[Ligand]], [[Second Messenger]], [[Cytokine]], [[Hormone]], [[Autocrine Signaling]], [[Paracrine Signaling]], [[Juxtacrine Signaling]], [[Endocrine Signaling]], [[Adenylate Cyclase]], [[G Protein]], [[Second Messenger System]], [[Dictyostelium]], [[Aliivibrio fischeri]]
- Strong connections to strengthen: [[Cell Signaling]] ↔ [[Cell Membranes]], [[Cell Signaling]] ↔ [[BIG1]], [[Cell Signaling]] ↔ [[mTOR]], [[Cell Signaling]] ↔ [[Notch]]
