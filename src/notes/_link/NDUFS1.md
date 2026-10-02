---
title: NDUFS1
description: 'NADH:ubiquinone oxidoreductase core subunit S1, the 75 kDa Fe-S cluster subunit of mitochondrial complex I. It is a core catalytic subunit of the N-module, and biallelic NDUFS1 variants cause Leigh syndrome and other complex I deficiencies.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - mitochondria
  - oxidative-phosphorylation
aliases: [NADH:Ubiquinone Oxidoreductase Core Subunit S1, 75 kDa subunit, NDUFS1/NDUFV1]
---

# NDUFS1

NDUFS1 encodes the 75 kDa subunit of mitochondrial complex I (NADH:ubiquinone oxidoreductase), the largest of its 45 subunits. It is a **core, catalytic** subunit of the hydrophilic N-module: it contains the two iron–sulfur clusters (N1a `[2Fe-2S]` and N1b `[4Fe-4S]`) that carry electrons from NADH to ubiquinone.

## Position in the complex

Human complex I is L-shaped, with a membrane arm and a hydrophilic matrix arm:

- The **N-module** (matrix, distal) contains NDUFV1 (51 kDa, NADH-binding and FMN-binding), NDUFV2 (24 kDa, NISC subcomplex with NDUFS1), and **NDUFS1** (75 kDa). It performs NADH oxidation and the first electron transfer.
- The **ND2 (membrane-proximal) module** contains the Q and N2 modules and the antiporter-like subunits.

NDUFS1 associates with NDUFV2 in the NISC subcomplex and relays electrons from N1b to [[Ubiquinone]] (coenzyme Q) at the membrane-proximal end of the matrix arm. The reaction it participates in is:

`NADH + H+ + Q + 4Fe-4S(ox) → NAD+ + QH2 + 4Fe-4S(red)`

Because the N-module is the entry point for all substrate-derived electrons, it is the site of NADH oxidation, the site where electrons enter the chain, and the structural determinant of the "concave"/"distal" half of the complex.

One consequence of the module architecture is worth stating explicitly, because it is a common source of wrong experimental design: **loss of NDUFS1 cannot be compensated by boosting flux through complex II.** A cell that cannot oxidise NADH through complex I still receives electrons from succinate dehydrogenase (complex II) despite losing the N-module, so succinate-supported respiration can appear relatively preserved while NADH-linked respiration collapses. Assays that report only total or succinate-linked respiration will underestimate a severe NDUFS1 phenotype, which is part of why these patients are sometimes classified as "low complex I activity" only after a full substrate-linked battery.

A second consequence is the historical appearance of NDUFS1 in the "supernumerary vs core" literature. Early annotations called it a *core* subunit to distinguish it from the ~14 extra subunits that decorate the surface; the term "supernumerary" here means structurally dispensable, not functionally unimportant. Several supernumerary subunits are now known to modulate activity or assembly kinetics meaningfully, but none of them can stand in for a core subunit's chemistry.

## Assembly and accessory subunits

NDUFS1 is added to the nascent complex relatively late in assembly, alongside NDUFV2 and the accessory subunit NDUFA2. Because it is a core subunit, its loss destabilises the entire N-module — mutant NDUFS1 protein is typically absent from fully assembled complex I, and both assembled complex and total complex I content fall. This is a useful diagnostic pattern: an NDUFS1 mutation produces a *global* complex I assembly defect, not a partial one.

NDUFS1 also requires dedicated assembly factors (the NDUFAF family, including NDUFAF2 and NDUFAF4) and the NUBP2/NUBP1 chaperones for early NISC-module handling. Loss of a core subunit cannot be compensated by supernumerary subunits such as [[NDUFA10]], NDUFS4 or NDUFS6 — the supernumerary subunits stabilise the assembled complex and shape activity rather than substituting for its core.

## Redox output, ROS, and reverse electron transport

> [!info] Mechanism
> Complex I is the largest single contributor to steady-state mitochondrial [[Mitochondrial ROS]] production, because it has internal leak sites on the NADH dehydrogenase side. Electrons can also run backwards: with a high proton-motive force and a reduced ubiquinone pool (as in ischaemia-reoxygenation), complex I's FMN group passes electrons back to oxygen, generating superoxide. This is the setting for [[Reverse Electron Transport]].

The practical consequence is that any NDUFS1 loss-of-function reduces both ATP production from NADH and the cell's ability to hold [[Reverse Electron Transport]] in check — the two effects are hard to separate experimentally, which is one reason NDUFS1 deficiency models are used so widely in oxidative stress and neuroprotection research.

## Clinical relevance

> [!important] Clinical significance
> NDUFS1 mutations are a recognised cause of **Leigh syndrome** and other mitochondrial complex I deficiency disorders. Reported phenotypes include neonatal-onset lactic acidosis, hypotonia, dystonia, optic atrophy, hypertrophic cardiomyopathy, and encephalopathy, typically with autosomal recessive inheritance. Biochemical signatures include low isolated or combined complex I activity, reduced NADH:ubiquinone oxidoreductase activity, elevated lactate, and low citrate synthase–normal ratios in muscle.

Case series support NDUFS1 as a practical screening candidate in patients with **very low residual complex I activity** whose other complex I subunits are unrevealing. Genotype–phenotype correlation is imperfect: even within families, the same variant can give different severity, and low-residual-activity alleles in compound heterozygosity with a null allele tend to present earliest and most severely. Mouse models carrying hypomorphic Ndufs1 alleles reproduce cardiomyopathy, encephalopathy, and elevated ROS, and they are the standard platform for testing antioxidants and mitochondrial-targeted therapies.

## Documents

- (no document notes yet)

## Connections

- [[Complex I]] — NDUFS1 is a core catalytic subunit of this ~1 MDa membrane complex, not a peripheral accessory protein; a defect in it destabilises the whole N-module.
- [[Mitochondrial Complex I]] — the web/UI-side note for the same entity; worth reconciling so the two do not duplicate or contradict each other.
- [[Ubiquinone]] — the electron acceptor for the N-module; NDUFS1's Fe–S clusters deliver electrons to Q, and a reduced Q pool is the precondition for reverse electron transport.
- [[NDUFA10]] — a supernumerary subunit in the membrane arm; a useful contrast to NDUFS1, since NDUFA10 loss destabilises the complex only partially.
- [[Mitochondrial ROS]] — the functional consequence of complex I that NDUFS1 deficiency amplifies, through both loss of N-module containment and unchecked reverse electron flow.
- [[Reverse Electron Transport]] — the superoxide-producing back-reaction of complex I, regulated by the same N-module that NDUFS1 forms part of.
- [[MELAS]] — a mitochondrial disease in which complex I deficiency is a recurring feature, alongside other genetically defined complex I disorders.
- [[Succinate Dehydrogenase]] — complex II, the other entry point for electrons into the chain; often assayed alongside complex I when characterising a respiratory chain defect.
- [[Mitochondrial DNA]] — contrast in genetic architecture: complex I has 14 mtDNA-encoded subunits but 31 nuclear-encoded ones, so NDUFS1 defects are nuclear, inherited in a Mendelian pattern, and not subject to the heteroplasmy thresholds that complicate mtDNA disease.

## Linking Summary

- New links added: [[Complex I]], [[Mitochondrial Complex I]], [[Ubiquinone]], [[NDUFA10]], [[Mitochondrial ROS]], [[Reverse Electron Transport]], [[MELAS]], [[Succinate Dehydrogenase]], [[Mitochondrial DNA]]
- Suggested notes to create: [[NUBP2]], [[NDUFAF2]], [[NISC Subcomplex]], [[Leigh Syndrome]], [[Iron–Sulfur Cluster]] — removed as already existing: NADH
- Strong connections to strengthen: [[NDUFS1]] ↔ [[Reverse Electron Transport]] (RET is a complex-I property; its note should name the N-module explicitly), [[NDUFS1]] ↔ [[MELAS]] (both are complex-I-deficiency phenotypes, currently documented with no link between them)
