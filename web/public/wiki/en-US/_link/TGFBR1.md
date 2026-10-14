---
title: TGFBR1
description: The type I TGF-beta receptor, a ligand-activated ser/thr kinase that phosphorylates SMAD2/3 to launch canonical TGF-beta signalling; it is also a BMP receptor, and heterozygous loss-of-function mutations cause Loeys-Dietz syndrome.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - receptor
  - kinase
  - signaling
aliases: [TGFβR1, TGF-beta Receptor Type 1, TβRI, ALK5, tgfbr1]
---

# TGFBR1

**TGFBR1** (TGF-beta receptor type 1, also called TGFβR1 or TβRI; the kinase domain is historically **ALK5**) is a 503-amino-acid transmembrane **serine/threonine kinase receptor** and the primary signalling receptor for [[TGF-beta]]. It is a component of a heteromeric type II/type I receptor pair for TGF-beta and, separately, a type I receptor for [[BMP]] with the type II receptors BMPR2, BMPR1B and AMBR2. It is the node through which the TGF-beta superfamily enters the nucleus, and in the vault it is the entry point for the paracrine-senescence axis in the [[_document_ - acosta2013_paracrine_senescence]] document.

## Structure and activation

TGFBR1 has a short N-terminal extracellular domain, a single transmembrane helix, and a cytoplasmic kinase domain with a C-terminal ser/thr tail. Unlike [[TGF-beta Receptor|TGFBR2]] and most RTKs, TGFBR1 has no intrinsic kinase activity in the resting complex — it is a **constitutively active kinase held off by a regulatory interaction**. Ligand (TGF-beta, as a disulfide-linked heterodimer) binds TGFBR2, which is itself an active kinase and phosphorylates TGFBR1 at three residues in its juxtamembrane region, displacing the inhibitory interaction and unleashing catalytic activity. The receptor is pre-assembled in a heteromeric complex of two type I and two type II subunits; ligand displaces the preformed inhibitory "coreceptor" arrangement rather than inducing receptor assembly.

> [!info] Two receptors, two programmes
> The same TGFBR1 complex, with the same SMAD2/3 effector, produces profoundly different biology depending on the type II receptor and the SMAD used. TGFBR2–TGFBR1 → SMAD2/3 → canonical TGF-beta signalling, which in most epithelial and endothelial contexts is *cytostatic* and pro-differentiation. BMPR2–TGFBR1 → SMAD1/5/9 → BMP signalling, which is pro-osteogenic and drives osteoblast differentiation via Runx2. "TGFBR1 signalling" is therefore an underspecified phrase.

## Smad-dependent (canonical) signalling

1. Ligand activates the receptor complex; TGFBR1 phosphorylates receptor-regulated SMAD2 and SMAD3 at their C-terminal SSXS motifs.
2. Smad2/3 form a complex with [[SMAD4]] and translocate to the nucleus.
3. The SMAD complex acts as a transcription factor, and also binds other transcription factors including [[STAT3]], NF-κB, p53 and RUNX2, so the "canonical" pathway is not purely SMAD-driven.
4. Target genes are context-dependent and famously double-edged: CTGF, [[PAI-1]], [[Collagen]]/ECM components (profibrotic), α-SMA (myofibroblast differentiation), osteoprotegerin, RUNX2, and in haematopoiesis p21 and p15 (cytostasis).

**Negative feedback.** The induced inhibitory SMAD [[Smad7]] binds the activated receptor complex and recruits [[Smurf1]] and [[SMURF2]] to ubiquitinate TGFBR1 and the SMADs, ending the signal. BMP7 can also act as a context-specific antagonist by stabilising [[Smad7]].

**Alternative (non-canonical) signalling.** Ligand-engaged TGFBR1, independent of SMADs, activates PI3K–AKT/mTOR, Rho GTPases (via TRAF6, linking to ephrin and cytoskeletal programmes), and ERK/JNK/p38 MAPKs. This is the branch that connects TGF-beta signalling to [[Autophagy]], cytoskeletal remodelling, and mechanotransduction, and it is also the branch that disagrees with canonical signalling about what TGF-beta does to proliferation.

## Clinical genetics

TGFBR1 was the second TGF-beta receptor found to cause aortic disease. **Heterozygous germline mutations cause Loeys-Dietz syndrome** (LDS), a dominantly inherited connective tissue disorder characterised by arterial aneurysm/dissection, hypertelorism, bifid uvula, arachnodactyly, scoliosis and early inflammatory disease. The relationship to Marfan is close but distinct: LDS is caused by loss of function in the TGF-beta receptor itself, and, counter-intuitively, **reducing** TGF-beta signalling (haploinsufficiency) causes more vascular disease than the fibrillin-1 defect of Marfan, which is thought to act by increasing TGF-beta availability. Characterisation work found that all tested LDS substitutions are inactivating for canonical TGF-beta signalling and confer a modest dominant-negative effect (Cardoso, Robertson & Daniel 2012).

The same loss-of-function logic explains why pharmacological TGF-beta blockade is protective in some settings: in a neurofibromatosis type 1 mouse model of skeletal defects, TGF-beta receptor 1 kinase inhibition with SD-208 rescued bone mass deficits and prevented tibial fracture nonunion.

> [!warning] Clinical caveat
> This is a counter-intuitive and clinically important point. Naive readers assume that in a disease caused by a TGF-beta pathway mutation, more TGF-beta blockade must be therapeutic — the opposite is true for the vascular phenotype of LDS and Marfan, and losartan and other ARBs (which raise TGF-β1 signalling) are used to *reduce* aortic dilation in Marfan patients. Any note that links TGFBR1 to "more signalling = worse" is wrong for connective tissue disease, and right for much solid tumour biology. The two should not be conflated.

## Cancer and senescence

TGFBR1 signalling is classically a **tumour suppressor** early in tumorigenesis: it induces p15 and p21, drives [[Apoptosis]], and suppresses proliferation in most epithelial cells. Later in progression it is co-opted as a promoter of epigenetic plasticity, EMT, invasion, and metastasis — the switch is attributed to [[SMAD4]] loss, TGFBR1 downregulation causing a TGF-β2-driven autocrine loop, and gain of receptor signalling in a permissive context. A 2007 meta-analysis attributed much of this to loss of TGFBR1 as a driver of TGF-β2-driven tumour progression.

In the paracrine senescence axis, TGFBR1 is the receptor through which a senescent cell's TGF-β1 output acts on neighbouring cells, and its activation there drives [[SMAD3]]-dependent senescence in those neighbours. That is the mechanistic reason the [[_document_ - acosta2013_paracrine_senescence]] document treats the receptor as a lynchpin rather than one of several parallel mediators.

TGFBR1 is a stated target of the anti-tumour small molecule **galunisertib (LY2157299)**, and TGF-β receptor inhibition in general is being trialled in combination with checkpoint blockade — the rationale being that an excluded tumour stroma suppresses T cell infiltration.

## Documents

- [[SMAD3]] — SMAD3 is the direct transcription-factor effector of activated TGFBR1 and the primary route by which TGF-beta signalling drives the SASP and paracrine senescence.
- [[_document_ - acosta2013_paracrine_senescence]] — the Acosta 2013 paper establishing paracrine senescence, in which TGFBR1 is the receptor through which one cell's TGF-β1 output induces senescence in its neighbours.

## Connections

- [[TGF-beta]] — TGFBR1 is the principal type I receptor for TGF-beta and the reason the cytokine can do anything at all. Nearly every claim about TGF-beta biology is a claim about TGFBR1-driven SMAD2/3 signalling plus the non-canonical branches.
- [[TGF-beta Receptor]] — TGFBR1 functions obligately as part of a heteromeric type I/type II receptor complex, and the nomenclature overlap between this note and the general TGF-beta receptor note is deliberate. TGFBR2 is the ligand-binding kinase that activates TGFBR1; this note is the type I half.
- [[SMAD2]] — Receptor-phosphorylated SMAD2 is the direct substrate and the first SMAD3 partner on the canonical pathway. Its phosphorylation state is the standard readout of TGFBR1 activity.
- [[SMAD3]] — SMAD3 is the decisive effector of TGFBR1 signalling: it drives the SASP transcriptional program in paracrine senescence, fibrotic transcriptional programs, and cytostatic p15/p21 induction. It is also a co-activator partner for other transcription factors including RUNX2 and STAT3.
- [[Smad7]] — Smad7 is the SMAD-independent negative feedback loop: induced by TGF-beta, binds activated TGFBR1, and recruits Smurf1/SMURF2 to degrade it. The SMAD7 arm is the only reason TGF-beta signalling is transient.
- [[SMAD4]] — SMAD4 is the obligatory common mediator that heterodimerises with SMAD2/3 and SMAD1/5 to reach the nucleus. SMAD4 loss is the classic mechanism by which TGF-beta switches from tumour suppressor to promoter.
- [[SMURF2]] — Smurf2 is recruited by Smad7 alongside Smurf1 to ubiquitinate TGFBR1, terminating signalling at the receptor level.
- [[Smurf1]] — Smurf1 is the E3 ligase that, together with Smad7, sets the termination kinetics of TGF-beta superfamily signalling by ubiquitinating TGFBR1 and the receptor-regulated SMADs. Its activity level is therefore a determinant of how long a TGFBR1 pulse lasts.
- [[BMP]] — TGFBR1 is also a BMP type I receptor, where it pairs with BMPR2 and signals through SMAD1/5/9 rather than SMAD2/3. This is why "TGFBR1 signalling" can be pro-osteogenic in one context and cytostatic in another.
- [[Senescence]] — TGFBR1 is the receptor that converts a neighbouring cell's TGF-β1 secretion into senescence in the target cell, making it the mechanism by which senescence is *paracrine* rather than cell-autonomous. It is the reason an SASP diffusible signal can impose senescence at a distance.
- [[SASP]] — The senescence-associated secretory phenotype is one of the main outputs of TGFBR1–SMAD3 signalling in the responding cell, which is the mechanistic link between the TGF-beta branch and the SASP branch of the vault.
- [[Cancer]] — TGFBR1 signalling is the textbook example of a switch-signalling context: cytostatic and pro-apoptotic early, EMT-promoting and invasion-enabling later. The switch is driven largely by SMAD4 loss and receptor downregulation shifting signalling onto a TGF-β2 autocrine loop.
- [[Epigenetics]] — TGF-beta signalling is a major source of epigenetic reprogramming: DNA methylation changes, miRNA induction (including the miR-200 and miR-21 axes), and long-term memory of the signalling event via chromatin marks. TGFBR1 is the upstream receptor for all of that.
- [[Autophagy]] — Non-canonical TGFBR1 signalling via PI3K–AKT/mTOR and via ROS regulates autophagy, and TGF-beta-induced EMT and autophagy are linked in fibrosis. The relationship is real but direction- and context-dependent rather than a simple switch.

## Linking Summary

- New links added: [[TGF-beta]], [[TGF-beta Receptor]], [[SMAD2]], [[Smad7]], [[SMURF2]], [[Smurf1]], [[BMP]], [[Senescence]], [[SASP]], [[Cancer]], [[Epigenetics]], [[Autophagy]]
- Suggested notes to create: [[TGF-beta Receptor Type 2 (TGFBR2)]], [[ALK5]], [[Loeys-Dietz Syndrome]], [[Galunisertib]], [[Connective Tissue Growth Factor (CTGF)]], [[Epithelial-Mesenchymal Transition]], [[TGF-beta2]], [[Fibrillin-1]], [[Angiotensin II Receptor Blocker]], [[Runx2]], [[p21]], [[p15]], [[Osteoprotegerin]], [[Bone Remodeling]] — removed as already existing: Akt
- Strong connections to strengthen: [[TGFBR1]] ↔ [[SMAD3]], [[Smad7]] ↔ [[Smurf1]], [[TGF-beta Receptor]] ↔ [[SMAD4]]
