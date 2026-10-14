---
title: PDGFR
description: 'Platelet-derived growth factor receptor, a family of type III receptor tyrosine kinases comprising PDGFRA and PDGFRB. Dimeric PDGF ligands bind the extracellular Ig-like domain, triggering trans-autophosphorylation on the intracellular kinase domain and recruitment of PI3K, SHP2 and PLCγ adaptors.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - receptor-tyrosine-kinase
  - cancer
aliases: [Platelet-Derived Growth Factor Receptor, PDGFRA, PDGFRB, PDGFR-alpha, PDGFR-beta]
---

# PDGFR

> [!warning] Term ambiguity
> "PDGFR" is family-level, not a single protein. There are two paralogous receptors — **PDGFRA** and **PDGFRB** — with 58% extracellular and 82% intracellular sequence identity, four ligand isoforms, and largely non-redundant biology. Statements about "PDGFR" in a paper are usually shorthand for one of them, and the distinction is often the difference between a therapeutic success and a failure. Below, the shared architecture is described once and then the two are separated.

## Domain architecture

Both paralogues are type III (class III) receptor tyrosine kinases with the same topology:

- **Signal peptide**, residues 1–~20.
- **Extracellular region**, ~500 residues, containing **five immunoglobulin-like (Ig-like) domains** (I1–I5) and a short N-terminal acidic/glycine-rich stretch. Ig-like domain I1 is the primary ligand-contact surface; domains IV and V constrain receptor geometry and prevent free ligand-independent dimerisation, and a small collagen-binding sequence in domain IV anchors the receptor to fibrillar collagen.
- **Single transmembrane α-helix**, ~24 residues.
- **Juxtamembrane region**, ~50 residues, containing the juxtamembrane domain that mediates basal inhibition of the kinase.
- **Kinase domain**, split by the **hinge region** into an N-lobe and C-lobe; the activation loop carries the regulatory **Tyr849** and **Tyr857** in the mouse (Y816/Y824 numbering varies by register), whose phosphorylation is required for full catalytic activity.

The receptor is not glycosylated like a classical type I receptor; the Ig-like fold is rigid, and the receptor is normally **monomeric until ligand binds**, with activation occurring by ligand-induced dimerisation and **trans-autophosphorylation**.

## Mechanism

> [!info] Mechanism
> A PDGF dimer (PDGF-AA, AB, BB or CC) binds two receptor monomers simultaneously, juxtaposing the intracellular kinase domains. Each kinase phosphorylates tyrosines in the other's juxtamembrane and kinase regions. Phosphotyrosines then serve as docking sites for SH2-domain proteins and other adaptors, the principal ones being **PI3K** (via p85), **SHP2**, and **PLCγ** — with Grb2/SOS, STAT, and Dok family proteins completing the list. Every branch downstream of those three adaptors is a different cell-type-specific output: proliferation (PI3K–Akt, Ras–ERK), migration and actin remodelling (PLCγ, Rho/Rac), and cytokine transcription (STAT).

Phosphorylation is not the only regulatory layer. Receptor internalisation, degradation, and recycling are all relevant, as is ligand-induced receptor dimerisation being a *requirement* rather than a consequence — receptor kinase activity at the plasma membrane is the primary site of signalling, and endocytosis can attenuate rather than amplify it.

## Physiological roles

PDGFR signalling drives development and repair: mesenchymal and smooth-muscle proliferation, migration, and differentiation; neural crest and craniofacial development; haematopoiesis; and wound healing. It is a prominent regulator of the pericyte and vascular smooth muscle compartments of the vasculature, which is why both receptors are essential for vessel wall integrity and angiogenesis — and why excessive signalling contributes directly to [[Fibrosis]] and [[Atherosclerosis]].

> [!info] Source: [[_document_ - mTOR signaling at a glance]]
> The mTOR review notes that loss of TSC1/TSC2 suppresses PDGFR expression in a rapamycin-sensitive manner, and explicitly flags that how mTOR signalling controls PDGFR expression remained undetermined at the time — a useful example of receptor abundance being under mTORC1 control rather than receptor activation.

> [!info] Source: [[_document_ - sirtuins in health and disease s41392-022-01257-8]]
> The sirtuin review reports that SIRT3 was involved in the inhibitory effect of nicotinic alpha7 acetylcholine receptors on PDGFR-BB-induced vascular smooth muscle cell migration, a mitochondrial SIRT3-dependent mechanism.

## Clinical relevance

> [!important] Clinical significance
> Constitutive or dysregulated PDGFR signalling is one of the most druggable oncogenic drivers in medicine, and receptor tyrosine kinase inhibitors against it are among the most successful targeted therapies ever developed. [[Imatinib]] is approved in KIT-mutant gastrointestinal stromal tumour (PDGFRA D842V notably *resistant*), in FIP1L1-PDGFRA-driven hypereosinophilic syndromes (where it is the drug of choice), in chronic myeloid leukaemia and in PDGFR-driven Ph-negative myeloproliferative neoplasms including MDS/MPN with eosinophilia. [[Dasatinib]] and nilotinib extend the class; avapritinib, ripretinib and other agents target PDGFRA KIT-mutant GIST specifically.

Non-oncological applications with variable evidence include anti-PDGFR strategies in [[Idiopathic Pulmonary Fibrosis|idiopathic pulmonary fibrosis]] and other fibrotic lung disease, and in diabetic nephropathy, where [[PDGFR]]-β blockade reduced proteinuria in the simvastatin/benzylarginine trial family but did not translate to a hard renal outcome in mesangial proliferation or diabetic nephropathy trials. Abrogating PDGF signalling is also central to the fibrotic and vascular-remodelling arm of ageing research, and PDGFRB marks a well-studied pericyte population that has been directly targeted in senolytic strategies.

Mutational context matters: **PDGFRA D842V** is a common primary GIST mutation that confers resistance to nearly all tyrosine kinase inhibitors, because it sits in the ATP-binding pocket and reduces inhibitor affinity rather than simply raising kinase activity.

## Documents

- [[_document_ - mTOR signaling at a glance|mTOR signaling at a glance]] — reports that loss of TSC1/TSC2 suppresses PDGFR expression in a rapamycin-sensitive manner, and notes that the mechanism by which mTOR signalling controls PDGFR expression was unresolved.
- [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]] — reports SIRT3 involvement in α7 nicotinic acetylcholine receptor inhibition of PDGFR-BB-induced vascular smooth muscle migration, a mitochondrial SIRT3-dependent effect.

## Connections

- [[Platelet-Derived Growth Factor]] — The ligand family (PDGF-AA, AB, BB, CC) whose dimeric binding is the activating event; ligand identity determines which receptor dimerises and therefore which response.
- [[Receptor Tyrosine Kinases]] — The structural class PDGFR belongs to, sharing the five-Ig-like-domain extracellular architecture and the split activation-loop kinase domain.
- [[Imatinib]] — The prototype receptor tyrosine kinase inhibitor and the first drug validated against a receptor kinase driven by a defining oncogenic mutation.
- [[Dasatinib]] — Second-generation inhibitor active against both ABL and both PDGFR paralogues, used where imatinib resistance or intolerance is the problem.
- [[PI3K-Akt Signaling]] — The dominant mitogenic output of PDGFR signalling, via p85 docking; the reason receptor tyrosine kinase inhibitors and PI3K inhibitors can substitute for one another in some settings.
- [[mTOR]] — mTORC1 controls PDGFR receptor abundance downstream of TSC1/TSC2, adding a second layer of control on top of ligand binding.
- [[TSC1]] — Half of the TSC1/TSC2 complex whose loss elevates PDGFR expression in a rapamycin-sensitive manner; a mechanistic link between the nutrient-sensing pathway and receptor level.
- [[Fibrosis]] — One of the defining downstream pathologies of chronic PDGFR signalling in lung, liver, and kidney.
- [[Astrocytes]] — A context where PDGFR signalling is an active research target for CNS scar formation after injury.
- [[PDGFAA]] — One of the two ligand genes; PDGFAA also feeds platelet-derived growth factor biology, and the two notes should be cross-referenced.
- [[Angiogenesis]] — PDGFRβ signalling in pericytes and smooth muscle is required for vessel maturation, so receptor blockade impairs tumour angiogenesis alongside tumour-cell intrinsic effects.
- [[Proteostasis]] — Not a direct link, but the mTORC1-dependent control of receptor abundance above is why PDGFR signalling sits inside the nutrient-sensing network that autophagy belongs to.

## Linking Summary

- New links added: [[Platelet-Derived Growth Factor]], [[Receptor Tyrosine Kinases]], [[Imatinib]], [[Dasatinib]], [[PI3K-Akt Signaling]], [[mTOR]], [[TSC1]], [[TSC2]], [[Fibrosis]], [[Astrocytes]], [[PDGFAA]], [[Angiogenesis]], [[Atherosclerosis]], [[Idiopathic Pulmonary Fibrosis]]
- Suggested notes to create: [[PDGFRA]], [[PDGFRB]] (the two paralogues are argued as distinct above but share this note, so each deserves its own eventually), [[FIP1L1-PDGFRA]], [[Gastrointestinal Stromal Tumor]], [[Eosinophilic Disorders]], [[Tyrosine Kinase Inhibitor]], [[Activation Loop]], [[Pleckstrin Homology]]
- Strong connections to strengthen: [[PDGFR]] ↔ [[PDGFAA]] (ligand–receptor pairing is not documented from the ligand side), [[PDGFR]] ↔ [[Fibrosis]] (fibrosis notes list PDGFRB blockade as a senolytic-adjacent intervention with no target note)
