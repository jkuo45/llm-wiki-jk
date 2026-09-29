---
title: NOD-like Receptors
description: A family of ~20 cytosolic innate immune receptors built on a nucleotide-binding NACHT domain, encompassing signal-transducing NOD1/NOD2 and inflammasome-forming NLRs such as NLRP1, NLRP3, and the NAIP-NLRC4 inflammasome.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - immunology
aliases: [NLRs, NOD-like receptor family, nucleotide-binding oligomerization domain receptors]
---

# NOD-like Receptors

**NOD-like receptors (NLRs)** are a family of roughly 20 cytosolic innate immune receptors in mammals, characterised by a conserved **nucleotide-binding oligomerization domain (NACHT)**, which gives the family its name. They fall into two functional groups that use the same structural scaffold for opposite jobs:

- **Signal-transducing NLRs** — [[NOD1]] and [[NOD2]] have N-terminal CARD domains and, on ligand recognition, assemble signalling platforms that activate [[NF-κB]] via [[RIPK2]].
- **Inflammasome-forming NLRs** — [[NLRP1]], [[NLRP3]], [[NLRP6]], [[NLRP12]], the [[NAIP]]–[[NLRC4]] inflammasome, and others oligomerise into a single large platform that activates [[Caspase-1]] to cleave [[Gasdermin D]] and [[Interleukin 1β]], producing [[Pyroptosis]] and IL-1β release.

They are a distinct family from the [[Toll-like Receptor|TLRs]] and the RIG-I-like receptors: NLRs sense the *state* of the cell (microbial products, damage, metabolic stress) rather than extracellular pathogen-associated molecular patterns.

## Domain architecture

> [!info] Structure
> A typical NLR has an N-terminal effector domain, a central NACHT domain, and a C-terminal leucine-rich repeat (LRR) domain. The **NACHT** domain is the ATPase engine: it mediates self-oligomerisation and, with the LRR, senses the presence of a ligand. The **N-terminal domain** determines the output — a CARD recruits the [[Apoptosome|apoptosome]] machinery of [[Caspase-1]] and [[Caspase-9]], while a pyrin (PYD) domain recruits ASC and the same caspase. The **LRR** domain is the specificity determinant; NLRs with a truncated or absent LRR (NLRP1, NLRP3, [[NLRC4]]) are triggered by indirect mechanisms rather than direct ligand binding, whereas NOD1/2 bind microbial peptidoglycan fragments directly. The LRR is also where auto-inhibitory and regulatory mutations cluster, which is why NLRs are so strongly associated with genetically driven inflammatory disease.

A useful unifying picture from the cryo-EM era: the NLR is a **nucleotide-dependent, self-assembling molecular switch**. Ligand or stress removes the closed state, the NACHT domain's ATPase activity drives oligomerisation, and the resulting filament is the signalling platform. The "wheel-and-axle" or "doughnut" oligomers seen structurally are the same phenomenon in different NLRs.

## The inflammasome-forming subset

**[[NLRP3]]** is the best-characterised and the most clinically implicated. It is activated by a strikingly wide range of stimuli — crystalline particulates (urate, [[Cholesterol|cholesterol crystals]]), K⁺ efflux, mitochondrial damage and ROS, lysosomal rupture, viral RNA, and the products of bacterial toxins — which has led to a debate about whether it senses a single ligand at all. The prevailing view is that it senses **cellular danger states**: several convergent models (K⁺ efflux, trans-Golgi network disruption, and mitochondrial dysfunction/oxidative signalling) each account for part of the evidence. NLRP3 also recruits [[NEK7]], which acts as an essential licensing factor bridging the NLRP3 and LRR domains, and is a direct target of MCC950, a diarylsulfonylurea compound that blocks NLRP3 oligomerisation in vivo and is one of the few pharmacological NLR3 inhibitors with strong preclinical data.

**[[NAIP]]–[[NLRC4]]** is the inflammasome with the clearest ligand logic. Human NAIP proteins (notably NAIP2/NAIP5/NAIP6) directly bind cytosolic bacterial flagellin and, for NAIP2, the T3SS needle proteins of *Shigella* and [[Salmonella]]; these ligand-bound sensors then activate NLRC4, which forms the inflammasome. This is direct, high-affinity, and demonstrably evolutionarily selected — NAIP-deficient mice succumb to *Shigella* flexneri. NLRC4 also directly senses the cytosolic products of gasdermin-D pores (T3SS-associated membrane disruption) and T3SS effectors like IpaB.

**[[NLRP1]]** senses proteolysis of the N-terminus, which can be triggered by host caspases, bacterial proteases, or the *Shigella*/[[Legionella]] effector IpaH7.8, which ubiquitinates NLRP1 and triggers proteasomal degradation — a striking example of a pathogen targeting the sensor itself. **[[NLRP6]]** and **[[NLRP12]]** are negative regulators: NLRP12 restrains [[NF-κB]] signalling and colonic inflammation, and NLRP6 tunes intestinal microbiota-dependent inflammasome activity. Negative-regulator NLRs are why "NLR" does not imply pro-inflammatory.

## Germline variants and disease

NLRs are one of the most genetically tractable immune-receptor families, and gain-of-function and loss-of-function variants are well documented:

- **Cryopyrin-associated periodic syndromes (CAPS)** — activating *NLRP3* mutations cause recurrent fever and urticaria; IL-1 blockade with anakinra or canakinumab is effective, which is the strongest clinical validation of the inflammasome pathway.
- **Familial cold autoinflammatory syndrome / Muckle–Wells** — also *NLRP3*.
- **Blau syndrome** — activating *NOD2* mutations cause early-onset granulomatous arthritis, uveitis, and dermatitis.
- **IBD susceptibility** — *NOD2* p.Leu1007fs is the strongest single common risk variant for [[Inflammatory Bowel Disease]], linking bacterial sensing to intestinal inflammation.
- **Lymphoproliferative syndrome with autoimmunity** — *NAL12*/*NLRP12* loss of function.
- **Gout and autoinflammatory periodic fevers** — NLRP3 inflammasome activation by urate crystals.

## Therapeutic targets

Drugs acting on NLRs are in and around the clinic. IL-1 blockade (anakinra, canakinumab, rilonacept) targets the pathway's output rather than the sensor; direct NLR3 inhibition is represented by MCC950 and dapansutrile (OLT1177); and the [[IL-1 Receptor|IL-1 receptor accessory protein]] axis offers downstream nodes. Much of the current development interest is in inflammation in ageing and [[Inflammaging|inflammaging]] and in [[Atherosclerosis]].

> [!warning] Caveat
> NLR biology is genuinely complex and several popular statements are over-simplifications: NLRP3 does not have a single identified ligand; not all inflammasome-forming NLRs are pro-inflammatory; and the boundary between "NLR" and "NLR gene" behaviour varies (e.g. [[NLRP7]] and NLRP12 have been implicated in divergent directions depending on context). Where the vault's notes assert a single trigger for NLRP3, treat that as one model among several.

## Connections

- [[Pattern Recognition Receptors]] — The parent category; NLRs are the cytosolic PRR branch, complementing membrane TLRs and cytosolic RIG-I/MDA5.
- [[Inflammasome]] — The multimeric assembly platform that the inflammasome-forming NLRs nucleate; NLRP3 is the dominant member in most tissues.
- [[NLRP3 Inflammasome]] — The most clinically consequential NLR complex; the target of MCC950 and of the whole IL-1 blockade therapeutic class.
- [[NLRP3]] — The prototypical multi-stimulus NLR, and the one whose genetics define CAPS.
- [[Caspase-1]] — The effector protease activated by every inflammasome; cleaves gasdermin D and pro-IL-1β.
- [[Pyroptosis]] — The lytic, pro-inflammatory cell death executed by gasdermin D pores downstream of inflammasome activation.
- [[NF-κB]] — The transcriptional output of the signal-transducing NLRs (NOD1/2) and the pathway that inflammasome output reinforces.
- [[RIPK2]] — The kinase linking NOD1/2 recognition to NF-κB activation; a validated drug target for Crohn's disease.
- [[Toll-like Receptor]] — The other major PRR family; cooperates with NLRs, as in the TLR4–NLRP3 axis for LPS plus ATP.
- [[Inflammaging]] — Chronic low-grade NLRP3 activation is a central mechanism proposed for age-related inflammation; MCC950-class interventions are preclinically active here.
- [[Inflammation]] — The physiological context in which NLR signalling is activated and resolved.
- [[Interleukin 1β]] — The principal cytokine product of inflammasome activation and the target of IL-1 blockade therapy.
- [[Atherosclerosis]] — NLRP3 activation by cholesterol crystals is a well-supported mechanism in the atherosclerotic plaque, and MCC950 reduces plaques in murine models.
- [[Legionella]] — Flagellin/LPD-mediated NAIP–NLRC4 activation; *Legionella* also effectors that antagonise or exploit the pathway.
- [[Macrophage]] — The cell type in which inflammasome assembly and IL-1β release were originally and most clearly defined.
- [[Interferon]] — Antagonistic to the inflammasome programme: type I interferon signalling suppresses NLRP3, and the cross-talk is a tunable point of immune resolution.
- [[Salmonella]] — Cytosolic flagellin/T3SS detection via NAIP–NLRC4, and a pathogen that also deploys effectors (IpaB-family homologues) to trigger NLRC4.

## Linking Summary

- New links added: [[NOD1]], [[NOD2]], [[RIPK2]], [[NAIP]], [[NLRC4]], [[NLRP1]], [[NLRP6]], [[NLRP12]], [[NLRP7]], [[Cholesterol]], [[NEK7]], [[MCC950]], [[Anakinra]], [[Rilonacept]], [[Colchicine]], [[Inflammaging]], [[Atherosclerosis]], [[Salmonella]], [[Inflammatory Bowel Disease]].
- Suggested notes to create: [[NAIP]], [[NLRC4]], [[NLRP1]], [[NLRP6]], [[NLRP12]], [[NEK7]], [[NAIP-NLRC4 inflammasome]], [[CARD domain]], [[LRR domain]], [[NACHT domain]], [[ASC]], [[Flagellin]], [[Gasdermin D]], [[Anakinra]], [[Canakinumab]], [[Dapansutrile]], [[Diphtheria toxin A]], [[Cryopyrin-associated periodic syndromes]], [[Blau syndrome]], [[Dapansutrile]], [[Neutrophil]].
- Strong connections to strengthen: [[NOD-like Receptors]] ↔ [[NLRP3 Inflammasome]] ↔ [[Caspase-1]], [[NOD-like Receptors]] ↔ [[Pattern Recognition Receptors]] ↔ [[Toll-like Receptor]], [[NOD-like Receptors]] ↔ [[NF-κB]] ↔ [[RIPK2]].
