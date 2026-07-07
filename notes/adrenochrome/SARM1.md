---
title: SARM1
description: SARM1 (Sterile Alpha and TIR Motif Containing 1) is an ~80 kDa NAD+ glycohydrolase of the Toll/IL-1 receptor (TIR) family that drives Wallerian degeneration upon axonal injury by depleting axonal NAD+.
type: entity
created: 2026-07-04
updated: 2026-07-06
tags:
  - enzyme
aliases: [SARM1, Sterile Alpha and TIR Motif Containing 1, MyD88-5]
---

# SARM1

**SARM1** (Sterile Alpha and TIR Motif Containing 1; also known as MyD88-5) is an ~80 kDa multidomain protein and the founding member of the TIR-domain-containing family with intrinsic [[NAD+|NAD⁺]] glycohydrolase (NADase) activity. Unlike other Toll/IL-1 receptor (TIR) adaptor proteins that mediate innate immune signaling, SARM1 functions primarily as a prodegenerative enzyme in the nervous system. In healthy axons, it is held in an autoinhibited conformation; upon axonal injury, SARM1 becomes activated, cleaves [[NAD+|NAD⁺]] into [[Nicotinamide]], ADP-ribose, and cyclic ADP-ribose (cADPR), and precipitates a catastrophic NAD⁺ depletion that triggers Wallerian degeneration within 30–60 minutes.

## Structure

SARM1 comprises three major functional regions:

- **N-terminal ARM (Armadillo) Repeat Region:** A series of helical ARM repeats that mediate autoinhibition by packing against the C-terminal TIR domain in cis. This region also participates in protein-protein interactions that maintain SARM1 in its closed, inactive state.
- **SAM (Sterile Alpha Motif) Domains (1–2):** Central tandem SAM domains promote multimerization. SARM1 must oligomerize (typically into an octameric ring complex) for its TIR domain to achieve catalytic competence; SAM-mediated assembly is therefore a critical checkpoint in the activation cascade.
- **TIR (Toll/IL-1 Receptor) Domain (C-terminal):** The catalytic core harboring the [[NAD+|NAD⁺]] glycohydrolase active site. In the autoinhibited state, the TIR domain is sterically blocked by the ARM domain. Upon injury-triggered release, the TIR dimerizes across adjacent SARM1 protomers to form the composite active site that binds and cleaves NAD⁺. Structural studies (cryo-EM and X-ray crystallography) have resolved the active site pocket, revealing a glutamate residue essential for catalysis.

## Mechanism of Action

SARM1 activation proceeds through a well-defined molecular sequence:

1. **Basal state (healthy axon):** The [[NMNAT2]] enzyme continuously synthesizes NAD⁺ from [[Nicotinamide Mononucleotide]] (NMN), maintaining high axonal NAD⁺ levels. SARM1 remains ARM-TIR autoinhibited. [[Nicotinamide]] and other metabolites further suppress SARM1 allosterically.
2. **Axonal injury signal:** Transection or damage severs the axon from its soma, disrupting NMNAT2 transport and causing rapid proteasomal degradation of NMNAT2 (half-life ~30 min). NMNAT2 loss reduces NAD⁺ synthesis.
3. **NMN accumulation:** As NMNAT2 declines, its substrate NMN accumulates. The rising NMN/NAD⁺ ratio is the primary metabolic trigger: NMN directly binds the ARM domain of SARM1, relieving autoinhibition.
4. **TIR domain activation:** Activated SARM1 oligomerizes via SAM domains into a ring-shaped octamer. The TIR domains dimerize across protomers, forming the composite NAD⁺ glycohydrolase active site.
5. **NAD⁺ catastrophe:** Each active TIR dimer consumes NAD⁺ with a turnover rate exceeding that of most cellular NADases. Axonal NAD⁺ is depleted from ~400 μM to near zero within minutes.
6. **Energy failure and degeneration:** NAD⁺ is an obligate co-substrate for [[Glycolysis]] (via GAPDH) and mitochondrial respiration. Its depletion halts ATP production, leading to loss of membrane potential, calcium influx, cytoskeletal dissolution, and fragmentation of the axon within 30–60 minutes.

SARM1 consumes NAD⁺ via three enzymatic activities: (i) NAD⁺ glycohydrolase (primary, producing nicotinamide + ADP-ribose), (ii) NAD⁺ cyclase (producing cADPR), and (iii) base-exchange activity. The relative contribution of each product to the degenerative cascade remains an active area of investigation.

## Physiological Function

SARM1 is the central executioner of Wallerian degeneration — the stereotyped program of axonal fragmentation distal to injury. Key physiological observations include:

- **Non-redundant role:** SARM1 knockout mice are profoundly resistant to Wallerian degeneration across peripheral nerves, dorsal root ganglia, and optic nerve. Axotomized SARM1⁻/⁻ axons remain structurally intact and functionally competent for days to weeks.
- **Nervous system specificity:** SARM1 is expressed predominantly in neurons (especially dorsal root ganglia, spinal cord, and brain), with lower levels in glia and immune cells.
- **Additional signaling roles:** Beyond axonal degeneration, SARM1 participates in:
  - **Mitochondrial stress signaling:** SARM1 has been implicated in mitochondrial unfolded protein response (UPR^mt) and mitophagy pathways.
  - **Innate immunity:** SARM1 negatively regulates TLR3 and TLR4 signaling, and can activate [[JNK]] and [[p38 MAPK]] pathways through its TIR domain interaction with TRAF6, independent of its NADase activity.
  - **TRAF6 signaling:** SARM1 scaffold functions recruit TRAF6 to activate the JNK pathway during cellular stress.
  - **Viral restriction:** SARM1 limits herpes simplex virus (HSV-1) replication in neurons, possibly through NAD⁺ depletion-mediated metabolic restriction.

## Pathology

### Wallerian Degeneration and Nerve Injury

Traumatic nerve injury activates SARM1-dependent NAD⁺ depletion as the primary mechanism of distal axon fragmentation. SARM1 inhibition preserves axonal integrity and improves functional recovery in rodent sciatic nerve crush and transection models.

### Chemotherapy-Induced Peripheral Neuropathy (CIPN)

Taxanes (paclitaxel), platinum agents (cisplatin, oxaliplatin), and vinca alkaloids (vincristine) cause a distal axonopathy that phenocopies Wallerian degeneration. SARM1 is activated by these chemotherapeutics — likely through metabolic stress and NMNAT2 downregulation — and SARM1 knockout mice are protected from paclitaxel- and vincristine-induced nerve degeneration.

### Traumatic Brain Injury (TBI)

Diffuse axonal injury in TBI involves SARM1-dependent NAD⁺ depletion contributing to secondary axonal degeneration. SARM1 deletion or pharmacological inhibition reduces axonal pathology, neuroinflammation, and behavioral deficits in mouse TBI models.

### Neurodegenerative Diseases

Emerging evidence links SARM1 to chronic neurodegenerative conditions:
- **Amyotrophic Lateral Sclerosis (ALS):** SARM1 is upregulated in spinal cord motor neurons of ALS patients and SOD1^G93A mice. SARM1 deletion modestly extends survival and delays motor decline in ALS models.
- **Alzheimer's Disease (AD):** SARM1 may contribute to the axonal dystrophy and synaptic loss that precede neuronal death. Amyloid-β and tau pathology can trigger SARM1-dependent NAD⁺ depletion in cultured neurons.
- **Parkinson's Disease:** A potential role in distal axonal degeneration of dopaminergic neurons is under investigation.

### Other Conditions

SARM1 has been linked to ischemic stroke, glaucoma (retinal ganglion cell degeneration), and peripheral neuropathies of diabetic and inflammatory origin.

## Therapeutics

The recognition of SARM1 as a druggable target has spurred intensive drug discovery efforts:

- **Disulfiram-like covalent inhibitors:** Disulfiram (an FDA-approved alcohol-aversion drug) was repurposed as a SARM1 inhibitor. It covalently modifies a cysteine residue in the TIR domain, irreversibly blocking NADase activity. However, disulfiram's promiscuity limits its utility.
- **Non-covalent small molecule inhibitors:** Next-generation inhibitors (e.g., DSRM-3716, GSK-428, and related quinazoline and pyrazolopyrimidine scaffolds) achieve greater potency (IC₅₀ in low nanomolar range) and selectivity. These molecules occupy the NAD⁺-binding pocket of the TIR dimer without covalent modification.
- **Clinical outlook:** SARM1 inhibitors are being developed primarily for CIPN, TBI, and chronic peripheral neuropathy. Preclinical efficacy has been demonstrated in multiple rodent models, and several candidates are approaching or in early-phase clinical trials. The major therapeutic hypothesis is that pharmacologically blocking SARM1 during acute injury windows can halt axonal degeneration before it becomes irreversible, allowing for axonal regeneration and functional recovery.

## Documents

List of documents that mention this entity

  - [[_document_ - NAD+ Precursors Nicotinamide Mononucleotide (NMN) and Nicotinamide Riboside (NR) Potential Dietary Contribution to Health|NAD+ Precursors Nicotinamide Mononucleotide (NMN) and Nicotinamide Riboside (NR) Potential Dietary Contribution to Health]]
    - Subsequently, NAD+ degradation processes were unveiled, using it as a substrate by CD38/CD157/SARM1, ADP-ribosyl transferases (ARTs), poly-ADP polymerases (PARPs), and sirtuins \[, – \] (Fig. 1).


## Connections

- [[NAD+]] — SARM1's substrate; catalytic cleavage of NAD⁺ drives axonal degeneration
- [[NMNAT2]] — the NAD⁺ synthase whose injury-induced loss initiates SARM1 activation
- [[Wallerian Degeneration]] — the self-destructive axonal program executed by SARM1
- [[Axon Degeneration]] — broader category; SARM1 is the central executioner
- [[TIR domain]] — the catalytic fold that confers NADase activity
- [[Nicotinamide]] — product of NAD⁺ cleavage; also allosterically inhibits SARM1
- [[NMN]] — accumulated NMN is the direct activator of SARM1
- [[Chemotherapy-Induced Peripheral Neuropathy]] — key therapeutic target indication
- [[Traumatic Brain Injury]] — SARM1 contributes to secondary axonal injury
- [[Disulfiram]] — first-in-class repurposed SARM1 inhibitor
- [[JNK]] — SARM1 signals through JNK via TRAF6 scaffolding
- [[TRAF6]] — scaffold partner for SARM1's non-NADase signaling functions

## Linking Summary

- New links added: [[NMNAT2]], [[Wallerian Degeneration]], [[Axon Degeneration]], [[TIR domain]], [[Nicotinamide]], [[NMN]], [[Chemotherapy-Induced Peripheral Neuropathy]], [[Traumatic Brain Injury]], [[Disulfiram]], [[JNK]], [[TRAF6]], [[p38 MAPK]], [[ALS]], [[Alzheimer's Disease]], [[Glaucoma]], [[Glycolysis]], [[Oxidative Phosphorylation]], [[Nicotinamide Mononucleotide]]
- Suggested new entity notes to create: [[NMNAT2]], [[Wallerian Degeneration]], [[TIR domain]]
- Strong connections to strengthen: [[SARM1]] ↔ [[NAD+]], [[SARM1]] ↔ [[NMNAT2]], [[SARM1]] ↔ [[Wallerian Degeneration]]
