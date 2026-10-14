---
title: NLRP3
description: 'NOD-like receptor pyrin domain-containing protein 3 (NLRP3, cryopyrin), the sensor component of the NLRP3 inflammasome. It is a tripartite PYD-NACHT-LRR protein activated by a two-step priming-then-activation process that culminates in caspase-1 activation and pyroptosis.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - inflammation
  - innate-immunity
aliases: [NLR Family Pyrin Domain Containing 3, Cryopyrin, NALP3, CIAS1]
---

# NLRP3

NLRP3 is the sensor protein of the [[NLRP3 Inflammasome]] and one of the most heavily studied inflammatory nodes in medicine. Its importance is a direct consequence of how promiscuous its activation is: it responds not to one molecular pattern but to a very wide range of microbial, host-derived, and environmental stimuli.

> [!warning] Causal attribution is hard
> Because NLRP3 is activated by potassium efflux, by lysosomal disruption, by mitochondrial ROS, by crystalline structures, and by metabolic stress simultaneously, "the NLRP3 inflammasome was activated" in a paper is frequently a *readout* of cell stress rather than a mechanism. Claims that a drug or a gene acts "through NLRP3" should be tested with genetic (Nlrp3/ASC/caspase-1 knockout) rather than only pharmacologic evidence, because NLRP3 inhibitors are largely indirect and poorly specific.

## Structure and domains

NLRP3 is a ~100 kDa NOD-like receptor with three domains, plus ATPase activity in the middle one:

| Domain | Function |
| --- | --- |
| **N-terminal PYD** (pyrin domain) | Homotypic PYD–PYD interaction scaffold that nucleates [[ASC]] (PYCARD), the adaptor that recruits pro-caspase-1. Many NLRP3 ligands such as MCC950 bind here. |
| **Central NACHT domain** | Contains an **NBD (nucleotide-binding domain) with Walker A/B ATPase motifs** plus a winged C-terminal domain (WHD) and a helical domain (HD2). ATP binding and hydrolysis drive NLRP3 self-association — an NBD/HD2 conformation switch rather than a canonical GEF ATPase. The LRR–NACHT interaction also confers autoinhibition. |
| **C-terminal LRR** (leucine-rich repeat) | Leucine-rich repeats, the family-defining recognition module. Contributes to autoinhibition, and the last residues are required for NEK7 interaction. Truncating an exon that shortens the LRR blocks NLRP3–NEK7 binding and abolishes activation. |

Cryo-EM work has shown the inactive protein is not a floppy monomer: NLRP3 forms a **12- to 16-subunit double-ring cage** in which LRR–LRR interactions hold the assembly together and the PYD domains are **shielded inside**, preventing premature ASC recruitment. Activation is therefore not a simple "unfolding" but a cage-to-disc rearrangement: the disc of NLRP3–NEK7–ASC in the active inflammasome involves ~85° rotation of NACHT subdomains.

## Two-step activation

> [!info] Source: [[_document_ - sirtuins in health and disease s41392-022-01257-8]]
> The sirtuin review states the two-step model explicitly: the NLRP3 inflammasome "must be primed, then activated," and describes TLR4 engagement driving [[NF-κB]] activation and augmented NLRP3 expression, with downstream generation of IL-1β, IL-18, TNF-α and TGF-β. It also reports SIRT1 and SIRT3 acting on NLRP3 to exert anti-inflammatory effects, SIRT3 attenuating ROS and reducing NLRP3 activity, and the mitophagy/autophagy-blockade route in which accumulated damaged mitochondria generate ROS that activates the NLRP3 inflammasome.

> [!info] Mechanism
> **Step 1 (priming).** A pattern-recognition receptor such as [[Toll-like Receptor|TLR4]] or a cytokine receptor activates [[NF-κB]] and [[AP-1]], which raise NLRP3 mRNA and de-repress it from deubiquitination, and drive pro-IL-1β and pro-IL-18 expression. This step is transcription-dependent and requires hours.
>
> **Step 2 (activation).** A second, largely transcription-independent stimulus is required. Established second signals include **potassium efflux** (via P2X7 or TWIK2, and via the cardiac glycoside-sensitive Na⁺/K⁺-ATPase), **lysosomal cathepsin B release** after particle phagocytosis, **mitochondrial ROS** and mitochondrial damage sensed via cardiolipin and TXNIP, **trans-Golgi network disassembly** via [[AIFM2]]-mediated PI3P–ATPase dissociation, and **necroptosis-associated membrane damage via RIPK3**. The kinase **NEK7** binds the NLRP3 LRR and bridges NLRP3 to ASC, and is required for assembly.
>
> **Output.** The assembled inflammasome recruits and activates pro-**[[Caspase-1]]**, which cleaves pro-IL-1β and pro-IL-18 to their mature forms, cleaves gasdermin D to trigger [[Pyroptosis]], and cleaves [[Akt]]. IL-1β and IL-18 are then released — an inflammatory, lytic, and metabolically costly cell death.

The priming/activation split explains the pharmacology: gene-expression-suppressing agents (corticosteroids, IL-1 blockers upstream) act on step 1, whereas NLRP3-specific inhibitors (MCC950 and successors) act on step 2.

## Disease relevance

> [!important] Clinical significance
> **Cryopyrin-associated periodic syndrome (CAPS).** Gain-of-function NLRP3 mutations — most commonly R260W, and L266P, Q705K, Y749C in the NBD/NACHT domain — cause CAPS, comprising familial cold autoinflammatory syndrome, Muckle–Wells syndrome, and NOMID/CINCA. These are the proof that NLRP3 misactivation alone is sufficient for disease. Interleukin-1 blockade ([[Anakinra]], [[Canakinumab]]) is effective in CAPS, which validated the IL-1β axis as a therapeutic target and in turn validated NLRP3 as its upstream gatekeeper.
>
> **Common disease.** NLRP3 activation is implicated at varying evidence strength in gout (monosodium urate crystals), [[Atherosclerosis]], [[Alzheimer's Disease]] and other neurodegenerative conditions, [[Type 2 Diabetes Mellitus]], [[NASH]], [[Fibrosis]], sepsis and [[Cytokine Storm]], and — increasingly central to this vault's interests — in [[Inflammaging]] and the SASP, where mitochondrial dysfunction and ROS in senescent cells are a documented route to constitutive NLRP3 activation. The sirtuin review's SIRT3/mitophagy findings in this vault are the mechanistic link between mitochondrial quality control and inflammasome tone.
>
> **Therapeutics.** Beyond MCC950 and its relatives, the target space includes P2X7 antagonists, K⁺-efflux-independent NEK7 inhibition, gasdermin D pore blockers, and — most relevant to ageing — upstream interventions that restore mitochondrial quality and reduce ROS, of which [[Mitophagy]] and SIRT3 activation are the leading examples.

## Documents

- [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]] — states the two-step priming/activation model, describes TLR4→NF-κB-driven NLRP3 upregulation with IL-1β/IL-18/TNF-α generation, and reports SIRT1/SIRT3 attenuation of NLRP3 activity via reduced ROS plus the mitophagy-blockade → mitochondrial ROS → NLRP3 route.

## Connections

- [[NLRP3 Inflammasome]] — The multi-protein complex NLRP3 nucleates; the distinction between the sensor and the inflammasome is the most common source of confusion in this area and the two notes must be kept separate.
- [[Inflammasome]] — Family-level framing; NLRP3 is the best characterised inflammasome and the only one with gain-of-function monogenic disease.
- [[Caspase-1]] — The effector protease the inflammasome activates; cleaves pro-IL-1β, pro-IL-18, and gasdermin D.
- [[IL-1β]] — The principal cytokine output; blocking IL-1 is proven in CAPS, which is the strongest causal chain in inflammasome therapeutics.
- [[IL-18]] — The second canonical output, always released alongside IL-1β; note that IL-18 requires inflammasome cleavage to become active, unlike IL-1.
- [[ASC]] — The adaptor bridging NLRP3's PYD to pro-caspase-1; the obligate nucleator of the inflammasome disc.
- [[Pyroptosis]] — The lytic cell death that accompanies inflammasome activation, executed through gasdermin D pores; the reason NLRP3 activation is cytotoxic rather than merely inflammatory.
- [[Gasdermin D]] — The executioner cleaved by caspase-1 to form the pores that both release the cytokines and lyse the cell.
- [[MCC950]] — The best-validated small-molecule NLRP3 inhibitor, and the compound that established the inflammasome as a druggable target rather than a descriptive one.
- [[Canakinumab]] — Anti-IL-1β antibody approved in CAPS; the clinical validation of the whole NLRP3 → caspase-1 → IL-1β axis.
- [[Anakinra]] — IL-1 receptor antagonist, likewise approved in CAPS and the other inherited autoinflammatory syndromes.
- [[Autoinflammation]] — CAPS is the founding inherited autoinflammatory syndrome and the clearest demonstration of inflammasome-driven disease.
- [[Gout]] — A crystal-induced NLRP3 activator, and the case that established particle/phagolysosomal damage as an activation route.
- [[Toll-like Receptor]] — TLR4 and other TLRs supply the priming signal in step 1; the TLR–NLRP3 cooperation is the textbook two-signal axis.
- [[NF-κB]] — The priming transcription factor that raises NLRP3 abundance; NLRP3 is one of its canonical targets alongside IL-6 and TNF.
- [[Inflammaging]] — One of the main reasons NLRP3 matters in geroscience: chronic low-level NLRP3 activation driven by mitochondrial ROS is a proposed core mechanism of age-related inflammation.
- [[SASP]] — Senescent cells sustain NLRP3 activation, and the resulting IL-1β/IL-18 secretion is part of what makes the SASP pro-inflammatory rather than merely quiescent.
- [[SIRT3]] — The mitochondrial deacetylase whose loss increases NLRP3 activation via excess mitochondrial ROS, per the sirtuin document in this vault.
- [[Mitophagy]] — Loss of mitophagy accumulates damaged mitochondria, raises ROS, and activates NLRP3; the direct link between mitochondrial quality control and inflammasome tone.
- [[Microglia]] — A resident inflammatory cell type in which NLRP3 activation is a recurring feature in neuroinflammation models, relevant to the neurodegenerative diseases above.

## Linking Summary

- New links added: [[NLRP3 Inflammasome]], [[Inflammasome]], [[Caspase-1]], [[IL-1β]], [[IL-18]], [[ASC]], [[Pyroptosis]], [[Gasdermin D]], [[MCC950]], [[Canakinumab]], [[Anakinra]], [[Autoinflammation]], [[Gout]], [[Toll-like Receptor]], [[NF-κB]], [[Inflammaging]], [[SASP]], [[SIRT3]], [[Mitophagy]], [[Microglia]]
- Suggested notes to create: [[NEK7]], [[Cryopyrin-Associated Periodic Syndrome]], [[Muckle-Wells Syndrome]], [[NOMID]], [[PYCARD]], [[Lysosomal Rupture]], [[Potassium Efflux]] — removed as already existing: AIFM2, P2X7 Receptor, TXNIP
- Strong connections to strengthen: [[NLRP3]] ↔ [[NLRP3 Inflammasome]] (the sensor/complex distinction is the single most common error in this literature and needs to be explicit on both sides), [[NLRP3]] ↔ [[Inflammaging]] (the SIRT3/mitophagy → ROS → NLRP3 chain is documented in a sirtuin document but not in the geroscience notes)
