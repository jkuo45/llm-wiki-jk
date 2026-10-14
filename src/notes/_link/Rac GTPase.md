---
title: Rac GTPase
description: 'The Rac GTPases (RAC1, RAC2, RAC3, RHOG) are a subfamily of Rho-family
  small GTPases of roughly 21-25 kDa. They act as binary GDP/GTP switches,
  cycle nucleotide state via GEFs, GAPs and GDIs, and drive lamellipodia,
  membrane ruffles and cell adhesion through WAVE, PAK and NADPH oxidase
  effectors.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - signaling
  - gtpase
aliases: [Rac, Rac GTPases, Rac subfamily, RAC1, RAC2, RAC3, RHOG]
---

# Rac GTPase

> [!info] Family note, not a single protein
> "Rac GTPase" refers to a **subfamily** of Rho-family small GTPases:
> RAC1, RAC2, RAC3 and RHOG in humans. RAC1 is the ubiquitously expressed
> prototype and has its own note ([[Rac1]]); the others are distinguished by
> tissue restriction and by which effectors and GEFs they engage.

## Classification

The Rho family contains roughly 20 canonical members in humans, grouped by
sequence homology into RHO (RHOA, RHOB, RHOC), RAC (RAC1, RAC1B, RAC2, RAC3,
RHOG), CDC42 (CDC42, TC10, TCL, WRCH1/2), RHOD/RIF, RND1–3, RHOH and
RHOBTB. RAC1, RAC2 and RAC3 share 89–93% identity in their G-domains yet
produce non-redundant output, so "Rac" is a family label rather than a
molecular entity.

RAC1 and RAC3 are broadly expressed; RAC2 is largely restricted to
hematopoietic cells, where it is required for the oxidative burst; RHOG is
enriched in lymphocytes and epithelial contexts.

## Structure and the switch cycle

Rac proteins are ~21–25 kDa, with a conserved **G domain** (the P-loop
Gx4GKS/T, Switch I, Switch II and the allosteric N/TKXD and ExSAK motifs) and
a C-terminal **hypervariable region** (HVR) ending in a **CAAX** box. The CAAX
cysteine is geranylgeranylated (farnesylated for RhoB and the RND proteins),
then endoproteolytically cleaved and carboxymethylated, which anchors the
protein at the plasma membrane and organelle membranes.

The nucleotide state is the switch:

1. **Off (GDP-bound).** Most Rac is cytosolic, sequestered in an inactive
   complex with a Rho GDP dissociation inhibitor (RhoGDI), which masks the
   prenyl group.
2. **Activation by GEF.** RacGEFs (Dbl-family, e.g. Tiam1, β-PIX/ARHGEF7,
   Vav, DOCK, P-REX1) catalyze GDP release; the GEF is usually recruited to
   the membrane by an activated receptor (RTK, GPCR, integrin) or by Rac's own
   partner [[RhoA]].
3. **On (GTP-bound).** Switch I and Switch II rearrange, creating a
   high-affinity surface for effectors.
4. **Termination by GAP.** RacGAPs insert an arginine "arginine finger" into
   the catalytic site to accelerate hydrolysis; RacGDI then re-extracts the
   GDP-bound protein from the membrane.

> [!info] Specificity comes from the C-terminus
> Because the G-domains of RAC1/2/3 are near-identical, specificity comes from
> the HVR: it encodes a polybasic region (which also carries a nuclear
> localization sequence), a proline-rich segment that binds SH3 domains such
> as β-PIX's, and the prenylation motif itself. The HVR is not merely a
> localization tag — it contributes directly to effector engagement.

## Effectors and outputs

- **Actin polymerization.** Rac1 activates the WAVE regulatory complex
  indirectly, via IRSp53, which relieves WAVE2 autoinhibition and lets it
  activate Arp2/3 — producing branched actin and the lamellipodia and
  membrane ruffles at the leading edge of migrating cells. This pathway also
  feeds [[NF-κB]] transcriptional output.
- **PAK1.** Rac-GTP binds the CRIB/GBD of p21-activated kinases, driving
  JNK and [[ERK]]/[[MAPK]] cascades and linking motility to proliferation.
- **NADPH oxidase.** Membrane Rac assembles the Nox complex and triggers the
  respiratory burst in [[Neutrophils]] — loss of Rac2 causes a
  chronic-granulomatous-disease-like immunodeficiency.
- **Other targets.** IQGAP-family scaffolds, formins, PI5K/DGK via the HVR,
  and the Rac1–SmgGDS–Nedd4 axis that couples Rac activation to ubiquitin
  ligase recruitment.

Spatial coordination matters: Cdc42 sets polarity, Rac1 protrudes the
lamellipodium, and [[RhoA]] drives rear contractility and focal-adhesion
turnover in the same fibroblast. Rac1 also directs [[Phagocytosis]] and
neutrophil chemotaxis, and is required for [[Cell Adhesion]] at
[[Integrin]] and [[Cadherin]] junctions.

## Clinical relevance

- **Cancer.** RAC1 is one of the few mutated Rho GTPases: **P29S** in switch I
  occurs in 4–9% of sun-exposed [[Melanoma]] and is a fast-cycling, effector-
  enhanced allele; constitutively active mutants (G12V, Q61K) appear in
  germ-cell tumors. More often, Rac activation is driven by upstream
  oncogenic RTKs and by overexpressed GEFs rather than by mutation. Rac1 and
  Rac1b are both implicated in [[EMT]] and invasion.
- **Neurodegeneration.** Rac1 misregulation is implicated in
  [[Alzheimer's Disease]] — altered RAC1 splicing and increased RAC1B in
  neuronal populations have been reported.
- **Inflammation and vascular disease.** Rac1 sits downstream of
  [[TNFα]], Ang II, and NADPH oxidase in endothelial and vascular cells,
  linking it to [[Atherosclerosis]] and to redox signaling via
  [[Reactive Oxygen Species]].

> [!warning] Therapeutic reality check
> Direct Rac inhibitors remain preclinical. The tractable nodes are upstream:
  RTK inhibitors, and effectors — PAK (FRAX597, IPA-3), and the Rac1-GEF
  interaction (NSC23766, EHop-016).

## Documents

- (no document notes yet)

## Connections

- [[Rac1]] — the prototypical and most-studied Rac member; the Rac family note should be read alongside it.
- [[RhoA]] — its functional counterweight: Rac1 drives leading-edge protrusion while RhoA drives rear contractility, and the two antagonize in migration.
- [[RAS]] — the parent Ras superfamily from which Rho GTPases derive; Ras signals to Rac through shared GEFs.
- [[Actin Cytoskeleton]] — the primary structural output of Rac activation via WAVE and Arp2/3.
- [[PAK1]] — principal kinase effector, linking Rac to MAPK signaling.
- [[NADPH Oxidase]] — Rac-GTP is required to assemble the oxidase complex and generate a respiratory burst.
- [[NF-κB]] — Rac1 also drives transcriptional output through NF-κB.

## Linking Summary

- New links added: [[Rac1]], [[RhoA]], [[RAS]], [[Actin Cytoskeleton]], [[PAK1]], [[NADPH Oxidase]], [[NF-κB]], [[ERK]], [[MAPK]], [[EMT]], [[Integrin]], [[Cadherin]], [[Cell Adhesion]], [[Phagocytosis]], [[Neutrophils]], [[Chronic Granulomatous Disease]], [[Melanoma]], [[Alzheimer's Disease]], [[Atherosclerosis]], [[Reactive Oxygen Species]], [[TNFα]], [[Rac1b]], [[Cdc42]], [[Arp2/3]], [[WAVE Regulatory Complex]], [[IQGAP]]
- Suggested notes to create: [[Arp2/3]], [[WAVE Regulatory Complex]], [[Cdc42]], [[WASP]], [[Rac1b]], [[RacGEF]], [[RacGAP]], [[RhoGDI]], [[IQGAP]], [[PAK2]], [[PAK3]]
- Strong connections to strengthen: [[Rac GTPase]] ↔ [[Rac1]], [[Rac GTPase]] ↔ [[RhoA]]