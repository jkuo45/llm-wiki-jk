---
title: SARM1
description: Sterile Alpha and TIR Motif Containing 1; an ~80 kDa NAD+-consuming glycohydrolase of the Toll/IL-1 receptor (TIR) family that drives axon degeneration and Wallerian degeneration upon axonal injury by depleting NAD+.
protected: false
created: 2026-07-04
updated: 2026-08-16
tags:
  - enzyme
  - nad-consumption
  - axon-degeneration
  - neurodegeneration
entity_type_1: enzyme
aliases:
  - Sterile Alpha and TIR Motif Containing 1
  - SAM Domain and HD Domain Containing Protein 1
  - MyD88-5
url: https://www.uniprot.org/uniprot/Q6SZW1
source: https://www.genecards.org/cgi-bin/carddisp.pl?gene=SARM1
---

# SARM1

## Overview

[[SARM1]] (Sterile Alpha and TIR Motif Containing 1; also known as MyD88-5) is an ~80 kDa multidomain protein and the founding member of the TIR-domain-containing family with intrinsic [[NAD+]] glycohydrolase (NADase) activity. Unlike other Toll/IL-1 receptor (TIR) adaptor proteins that mediate innate immune signaling, SARM1 functions primarily as a prodegenerative enzyme in the nervous system, playing a central role in axon degeneration (Wallerian degeneration). SARM1 activity depletes intracellular [[NAD+]] pools, which can compromise [[Sirtuins|sirtuin]] function and other NAD+-dependent processes. In healthy axons it is held in an autoinhibited conformation; upon axonal injury, SARM1 becomes activated, cleaves NAD+ into [[Nicotinamide]], ADP-ribose, and cyclic ADP-ribose (cADPR), and precipitates a catastrophic NAD+ depletion that triggers Wallerian degeneration within 30–60 minutes.

## Structure & Domains

- **Gene:** SARM1, located on chromosome 17q21.31
- **Protein:** ~724 amino acid multidomain protein (~80 kDa)

SARM1 comprises three major functional regions:

- **N-terminal ARM (Armadillo) Repeat Region:** A series of helical ARM repeats that mediate autoinhibition by packing against the C-terminal TIR domain in cis. This region also participates in protein-protein interactions that maintain SARM1 in its closed, inactive state and contains the NMN-binding pocket.
- **SAM (Sterile Alpha Motif) Domains (1–2):** Central tandem SAM domains promote multimerization. SARM1 must oligomerize (typically into an octameric ring complex) for its TIR domain to achieve catalytic competence; SAM-mediated assembly is therefore a critical checkpoint in the activation cascade.
- **TIR (Toll/IL-1 Receptor) Domain (C-terminal):** The catalytic core harboring the NAD+ glycohydrolase active site. In the autoinhibited state, the TIR domain is sterically blocked by the ARM domain. Upon injury-triggered release, the TIR dimerizes across adjacent SARM1 protomers to form the composite active site that binds and cleaves NAD+. Structural studies (cryo-EM and X-ray crystallography) have resolved the active site pocket, revealing a glutamate residue essential for catalysis.

## Mechanism of Action

### NAD+ Consumption

SARM1 catalyzes the cleavage of [[NAD+]]:
- **NAD+ → ADPR + Nicotinamide + cADPR**
- This reaction depletes cellular NAD+ pools
- Depleted NAD+ impairs [[Sirtuins|sirtuin]] activity and other NAD+-dependent enzymes

> [!info] NAD+ consuming enzymes
> Beyond sirtuins, other major [[NAD+]]-consuming enzymes include [[PARP1]], [[PARP2]], [[CD38]], and [[SARM1]]. Activity of these enzymes—particularly [[CD38]], which increases with [[Aging|age]]—can deplete cellular [[NAD+]] pools and compromise sirtuin function.

### Activation Sequence

SARM1 activation proceeds through a well-defined molecular sequence:

1. **Basal state (healthy axon):** The [[NMNAT2]] enzyme continuously synthesizes NAD+ from [[Nicotinamide Mononucleotide]] (NMN), maintaining high axonal NAD+ levels. SARM1 remains ARM-TIR autoinhibited. [[Nicotinamide]] and other metabolites further suppress SARM1 allosterically.
2. **Axonal injury signal:** Transection or damage severs the axon from its soma, disrupting NMNAT2 transport and causing rapid proteasomal degradation of NMNAT2 (half-life ~30 min). NMNAT2 loss reduces NAD+ synthesis.
3. **NMN accumulation:** As NMNAT2 declines, its substrate NMN accumulates. The rising NMN/NAD+ ratio is the primary metabolic trigger: NMN directly binds the ARM domain of SARM1, relieving autoinhibition. SARM1 is therefore a **metabolic sensor of the NMN/NAD+ ratio** — NMN and NAD+ compete for the same ARM-domain pocket, and the ratio (not absolute NMN) determines activation (Figley et al. 2021, _Neuron_).
4. **TIR domain activation:** Activated SARM1 oligomerizes via SAM domains into a ring-shaped octamer. The TIR domains dimerize across protomers, forming the composite NAD+ glycohydrolase active site. Recent work shows NMN first primes SARM1 base-exchange activity, generating ADP-ribose conjugates that act as molecular glues promoting assembly of superhelical SARM1 filaments — a two-step liquid-to-solid phase transition that spatially restricts activation to damaged axons (Wang et al. 2025/2026, _Nature Chemical Biology_).
5. **NAD+ catastrophe:** Each active TIR dimer consumes NAD+ with a turnover rate exceeding that of most cellular NADases. Axonal NAD+ is depleted from ~400 μM to near zero within minutes.
6. **Energy failure and degeneration:** NAD+ is an obligate co-substrate for [[Glycolysis]] (via GAPDH) and mitochondrial respiration. Its depletion halts ATP production, leading to loss of membrane potential, calcium influx, calpain activation, cytoskeletal dissolution, and fragmentation of the axon within 30–60 minutes.

SARM1 consumes NAD+ via three enzymatic activities: (i) NAD+ glycohydrolase (primary, producing nicotinamide + ADP-ribose), (ii) NAD+ cyclase (producing cADPR), and (iii) base-exchange activity. A fourth activity — **mono-ADP-ribosylation (MARylation)** — was identified in 2025: SARM1 MARylates itself and other proteins with catalytic efficiency *higher* than its hydrolase activity, and auto-MARylation promotes the phase transition and renders SARM1 responsive to NMN regulation; endogenous SARM1 is MARylated at mitochondria (Icso et al. 2025, _bioRxiv_). The relative contribution of each product to the degenerative cascade remains an active area of investigation.

## Cross-Talk with CD38 and the NAD+ Consumer Network

SARM1 is one of several NAD+-consuming enzymes (alongside [[CD38]], [[PARP1]], and [[Sirtuins|sirtuins]]) that compete for a shared NAD+ pool. Key overlaps with [[CD38]]:
- **Shared catalytic logic:** Both CD38 and SARM1 are NAD+ glycohydrolases producing nicotinamide, ADP-ribose, and cADPR, with base-exchange activity (Zhao et al. 2019, _iScience_). SARM1 has the *higher* NAD-cyclizing (cADPR) activity; CD38 has the lower K~m_ (priority consumer).
- **NMN as the bridging metabolite:** SARM1 activation requires intracellular [[Nicotinamide Mononucleotide|NMN]] accumulation (rising NMN/NAD+ ratio), whereas CD38 degrades *extracellular* NMN (ecto-NMNase). Whether CD38-mediated NMN depletion protects against SARM1 activation is untested; conversely, NAD+ precursor supplementation that raises NMN could increase SARM1 activation risk in injured axons (Takaso et al. 2020, _Scientific Reports_).
- **Pharmacological divergence via CZ-48:** The NMN analog CZ-48 (sulfo-ara-F-NMN) *activates* SARM1 but *inhibits* CD38 (Zhao et al. 2019) — the only molecule with opposite effects on the two NADases.
- **Shared inhibitor mechanism:** SARM1 inhibitors and the CD38 inhibitor **78c** both act as adduct-forming uncompetitive inhibitors — a conserved NAD-dependent mechanism (Bratkowski et al. 2022, _Neuron_). Combined CD38 + [[PARP1]] inhibition fully reversed LPS-induced NAD+ decline where single agents failed (Covarrubias et al. 2020, _Nature Metabolism_), supporting the plausibility of combined CD38 + SARM1 inhibition (untested).
- **Neuroprotection context:** CD38 knockout mice show *delayed* axon degeneration after facial nerve axotomy (Takaso et al. 2020), indicating CD38 deletion is axon-protective rather than SARM1-sensitizing — raising NAD+ alone does not trigger SARM1 without the injury-specific NMNAT2-loss context.

## Physiological Function

- **Axon integrity:** SARM1 is a key executor of axon degeneration after injury
- **Wallerian degeneration:** Programmed axon degeneration pathway following nerve injury
- **Non-redundant role:** SARM1 knockout mice are profoundly resistant to Wallerian degeneration across peripheral nerves, dorsal root ganglia, and optic nerve. Axotomized SARM1⁻/⁻ axons remain structurally intact and functionally competent for days to weeks.
- **Nervous system specificity:** SARM1 is expressed predominantly in neurons (especially dorsal root ganglia, spinal cord, and brain). Older studies report it is absent from microglia and peripheral glia at baseline (Lin et al. 2014), though 2025 reviews suggest SARM1 is "abundant in glial cells" under pathological conditions — the basal vs. injury-induced glial expression remains debated. In the peripheral nervous system, SARM1 is absent from peripheral glia (Loreto & Pérez-Navarro 2025, _Trends Pharmacol Sci_).
- **Neuroinflammation:** SARM1 mediates innate immune responses in neurons
- **Development:** Regulated axon pruning during neural development
- **Additional signaling roles:** Beyond axonal degeneration, SARM1 participates in:
  - **Mitochondrial stress signaling:** SARM1 has been implicated in mitochondrial unfolded protein response (UPR^mt) and mitophagy pathways.
  - **Innate immunity:** SARM1 negatively regulates TLR3 and TLR4 signaling, and can activate [[JNK]] and [[p38 MAPK]] pathways through its TIR domain interaction with [[TRAF6]], independent of its NADase activity.
  - **TRAF6 signaling:** SARM1 scaffold functions recruit TRAF6 to activate the JNK pathway during cellular stress.
  - **Viral restriction:** SARM1 limits herpes simplex virus (HSV-1) replication in neurons, possibly through NAD+ depletion-mediated metabolic restriction.

## Pathology & Clinical Relevance

- **Neurodegeneration:** SARM1 activation contributes to axonal loss in neurodegenerative diseases
- **Axon Degeneration:** SARM1 is the central executioner of Wallerian degeneration

### Wallerian Degeneration and Nerve Injury

Traumatic nerve injury activates SARM1-dependent NAD+ depletion as the primary mechanism of distal axon fragmentation. SARM1 inhibition preserves axonal integrity and improves functional recovery in rodent sciatic nerve crush and transection models.

### Chemotherapy-Induced Peripheral Neuropathy (CIPN)

Taxanes (paclitaxel), platinum agents (cisplatin, oxaliplatin), and vinca alkaloids (vincristine) cause a distal axonopathy that phenocopies Wallerian degeneration. SARM1 is activated by these chemotherapeutics — likely through metabolic stress and NMNAT2 downregulation — and SARM1 knockout mice are protected from paclitaxel- and vincristine-induced nerve degeneration.

### Traumatic Brain Injury (TBI)

Diffuse axonal injury in TBI involves SARM1-dependent NAD+ depletion contributing to secondary axonal degeneration. SARM1 deletion or pharmacological inhibition reduces axonal pathology, neuroinflammation, and behavioral deficits in mouse TBI models.

### Neurodegenerative Diseases

Emerging evidence links SARM1 to chronic neurodegenerative conditions:
- **Amyotrophic Lateral Sclerosis (ALS):** SARM1 is upregulated in spinal cord motor neurons of ALS patients and SOD1^G93A mice. SARM1 deletion modestly extends survival and delays motor decline in ALS models.
- **Alzheimer's Disease (AD):** SARM1 may contribute to the axonal dystrophy and synaptic loss that precede neuronal death. Amyloid-β and tau pathology can trigger SARM1-dependent NAD+ depletion in cultured neurons.
- **Parkinson's Disease:** A potential role in distal axonal degeneration of dopaminergic neurons is under investigation.

### Other Conditions

SARM1 has been linked to ischemic stroke, glaucoma (retinal ganglion cell degeneration), and peripheral neuropathies of diabetic and inflammatory origin.

### Therapeutic Target

SARM1 inhibitors are being developed as neuroprotective agents. The recognition of SARM1 as a druggable target has spurred intensive drug discovery efforts:

- **Disulfiram-like covalent inhibitors:** [[Disulfiram]] (an FDA-approved alcohol-aversion drug) was repurposed as a SARM1 inhibitor. It covalently modifies a cysteine residue in the TIR domain, irreversibly blocking NADase activity. However, disulfiram's promiscuity limits its utility.
- **Non-covalent small molecule inhibitors:** Next-generation inhibitors (e.g., DSRM-3716, GSK-428, and related quinazoline and pyrazolopyrimidine scaffolds) achieve greater potency (IC₅₀ in low nanomolar range) and selectivity. These molecules occupy the NAD+-binding pocket of the TIR dimer without covalent modification.
- **Adduct-forming uncompetitive inhibitors:** A conserved class of NAD-dependent inhibitors that intercept NAD+ hydrolysis and form a covalent conjugate with the ADPR product, conferring high potency and neuroprotection in preclinical models (Bratkowski et al. 2022, _Neuron_). The same mechanism underlies the CD38 inhibitor 78c, validating it as a shared strategy across NAD hydrolases. *Caution:* some clinical-stage SARM1 inhibitors show unexpected toxicity at subinhibitory doses (paradoxically promoting activation via ADPR adducts), underscoring the need for deeper mechanistic understanding (Loreto & Pérez-Navarro 2025).
- **Emerging SARM1 *activators*:** Pyridine-derived selective SARM1 activators (e.g., CZ-48, Vacor) are being explored as reversible, peripherally administered neuroablative agents for spasticity, dystonia, and neuropathic pain — expanding the therapeutic axis beyond inhibition (Loreto & Pérez-Navarro 2025, _Trends Pharmacol Sci_).
- **Clinical outlook:** SARM1 inhibitors are being developed primarily for CIPN, TBI, and chronic peripheral neuropathy. Nura Bio's brain-penetrant SARM1 inhibitor **NB-4746** completed Phase 1 in healthy volunteers (2024) with targeted plasma/CSF exposure and no serious adverse events, advancing to Phase 1b/2 in 2025. The major therapeutic hypothesis is that pharmacologically blocking SARM1 during acute injury windows can halt axonal degeneration before it becomes irreversible, allowing for axonal regeneration and functional recovery.

## Documents

- [[_document_ - The Sirtuin Network Linking NAD+ Metabolism, Mitochondrial Function, and Metabolic Homoeostasis]]
  - Mentioned as one of the major NAD+-consuming enzymes that can deplete cellular NAD+ pools and compromise sirtuin function.
- [[_document_ - NAD+ Precursors Nicotinamide Mononucleotide (NMN) and Nicotinamide Riboside (NR) Potential Dietary Contribution to Health|NAD+ Precursors Nicotinamide Mononucleotide (NMN) and Nicotinamide Riboside (NR) Potential Dietary Contribution to Health]]
  - Subsequently, NAD+ degradation processes were unveiled, using it as a substrate by CD38/CD157/SARM1, ADP-ribosyl transferases (ARTs), poly-ADP polymerases (PARPs), and sirtuins.

## Connections

- [[NAD+]] — Substrate; SARM1 cleaves NAD+ to deplete cellular pools; catalytic cleavage of NAD+ drives axonal degeneration
- [[Sirtuins]] — SARM1-mediated NAD+ depletion impairs sirtuin activity
- [[PARP1]] — Another NAD+-consuming enzyme; both compete for NAD+ substrate
- [[CD38]] — Major NAD+ consumer; combined activity with SARM1 depletes NAD+ pools; shared adduct-forming inhibitor mechanism
- [[Aging]] — Age-related increases in NAD+ consumption contribute to declining sirtuin function
- [[Axon Degeneration]] — SARM1 is the key executor of Wallerian degeneration
- [[Neurodegeneration]] — SARM1 activation contributes to axonal loss
- [[Wallerian Degeneration]] — Programmed axon degeneration pathway mediated by SARM1
- [[NMNAT2]] — the NAD+ synthase whose injury-induced loss initiates SARM1 activation
- [[Nicotinamide Mononucleotide]] — accumulated NMN (rising NMN/NAD+ ratio) is the direct allosteric activator; SARM1 is a metabolic sensor of this ratio (Figley et al. 2021)
- [[TIR domain]] — the catalytic fold that confers NADase activity
- [[Nicotinamide]] — product of NAD+ cleavage; also allosterically inhibits SARM1
- [[CZ-48]] — NMN analog that activates SARM1 while inhibiting CD38
- [[Chemotherapy-Induced Peripheral Neuropathy]] — key therapeutic target indication
- [[Traumatic Brain Injury]] — SARM1 contributes to secondary axonal injury
- [[Disulfiram]] — first-in-class repurposed SARM1 inhibitor
- [[NB-4746]] — brain-penetrant clinical-stage SARM1 inhibitor (Nura Bio)
- [[JNK]] — SARM1 signals through JNK via TRAF6 scaffolding
- [[TRAF6]] — scaffold partner for SARM1's non-NADase signaling functions
- [[p38 MAPK]] — activated through TIR domain interaction with TRAF6
- [[Microglia]] — SARM1 expression in microglia debated (absent basally per older studies; reported in glia under pathology in 2025 reviews); CD38 is the dominant glial NAD+ consumer

## Linking Summary

- New links added: [[NAD+]], [[Sirtuins]], [[PARP1]], [[CD38]], [[Aging]], [[Axon Degeneration]], [[Neurodegeneration]], [[Wallerian Degeneration]], [[NMNAT2]], [[TIR domain]], [[Nicotinamide]], [[Chemotherapy-Induced Peripheral Neuropathy]], [[Traumatic Brain Injury]], [[Disulfiram]], [[JNK]], [[TRAF6]], [[p38 MAPK]], [[Glycolysis]], [[Nicotinamide Mononucleotide]], [[CZ-48]], [[NB-4746]], [[Microglia]], [[ALS]], [[Alzheimer's Disease]], [[Glaucoma]]
- Suggested new entity notes to create: [[NAD+ Consumer Competition Network]]
- Strong connections to strengthen:
  - [[SARM1]] ↔ [[NAD+]] — Direct enzymatic cleavage; major cellular NAD+ consumer
  - [[SARM1]] ↔ [[Sirtuins]] — Competitive relationship for NAD+ substrate; SARM1 activity impairs sirtuin function
  - [[SARM1]] ↔ [[NMNAT2]] — metabolic trigger of activation
  - [[SARM1]] ↔ [[Wallerian Degeneration]] — central executioner
  - [[SARM1]] ↔ [[CD38]] — parallel NADase with shared inhibitor mechanism
  - [[SARM1]] ↔ [[CZ-48]] — divergent pharmacology vs CD38