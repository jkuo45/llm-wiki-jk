---
title: IGF1R
description: 'IGF1R (CD221) is a ubiquitously expressed receptor tyrosine kinase of the insulin receptor family. It is a disulfide-linked alpha2beta2 tetramer that signals through IRS/Shc to PI3K-AKT-mTOR and RAS-MAPK, is obligatory for prenatal growth, and is a driver and validated-on-target-but-hard-to-drug cancer dependency.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - receptor-tyrosine-kinase
  - signaling
  - growth-factor
  - cancer
aliases: [Insulin-like Growth Factor 1 Receptor, IGF-I Receptor, CD221, IGF1R alpha, IGF1R beta]
---

# IGF1R

## Overview

IGF1R is the type I receptor for [[IGF1]] and, with lower affinity, for IGF2
and [[Insulin]]. It is a **preformed disulfide-linked α₂β₂ heterotetramer**
rather than a ligand-induced dimer, which is a key structural difference from
most receptor tyrosine kinases and explains several of its peculiar
properties, including its tendency to form **hybrid receptors** with the
[[Insulin Receptor]].

Its two outputs are the reason IGF1R matters everywhere: **PI3K–AKT–mTOR**
(growth, survival, anabolism) and **RAS–MAPK** (proliferation).

## Structure and domains

IGF1R is a precursor whose signal peptide is cleaved, but the two resulting
chains remain disulfide-linked into an obligate tetramer.

- **α chains (2 ×)** — extracellular, ~130 kDa each after cleavage.
  The extracellular region contains:
  - **L1 (leucine-rich) domain**, **L2**, and **FnIII (fibronectin type III)**
    domains forming the ligand-binding surface, related to the insulin
    receptor ectodomains;
  - a **CR (cysteine-rich) region**;
  - a **single transmembrane α-helix** that spans the membrane.
  Two α chains together form the **FnIII-1/FnIII-2 dimerisation interface**,
  which is structurally analogous to the insulin-receptor CR region and carries
  a key N-linked glycosylation site.
- **β chains (2 ×)** — intracellular, ~95 kDa each. Each contains:
  - a short extracellular tail;
  - the **transmembrane helix**;
  - a **kinase domain** with the classic bilobed Ser/Thr kinase fold, an
    activation loop, and the DFG motif;
  - a **C-terminal tail**.
- **Activation.** The kinase domains are held apart in a
  **trans**-antiparallel arrangement on one αβ heterodimer. Ligand binding
  trans-agonises the two kinase domains across *different* heterodimers,
  producing the active configuration.
- **Autophosphorylation sites.** Three tyrosines in the kinase activation loop
  (**Tyr1161, Tyr1162, Tyr1166**) must all be phosphorylated for optimal
  kinase activity. Steady-state kinetics show each successive autophosphorylation
  increases turnover number and lowers Km for ATP and peptide — an
  autophosphorylation "ratchet." A 2.1 Å structure of the tris-phosphorylated
  kinase domain with an ATP analogue and peptide substrate shows that substrate
  recognition uses **hydrophobic residues at P+1 and P+3**.
- **Dimer of pairs.** Because the active unit is an α₂β₂, functional
  signalling is often from the transactivation of two such tetramers.

## Mechanism of action

1. **Ligand binding and transactivation.** [[IGF1]] (and, weakly, IGF2 and
   insulin) binds the extracellular region of one αβ half, allosterically
   activating the kinase on the partner αβ half of the other half of the
   tetramer.
2. **Autophosphorylation.** Activation-loop and C-terminal tyrosines are
   autophosphorylated, creating phosphotyrosine docking sites.
3. **Docking of IRS proteins.** The autophosphorylated receptor recruits the
   insulin receptor substrates **[[IRS1]]** and [[IRS-2]] (via their PTB
   domains binding the NPXY motif, and their YXXM motifs binding the receptor's
   phosphotyrosines) plus SHC, GRB10, and 14-3-3 proteins.
4. **Two canonical outputs.**
   - **PI3K–AKT**: IRS1/2 phosphotyrosines bind the p85 regulatory subunit
     ([[PI3K]]), generating PIP3, recruiting AKT. AKT then activates
     [[mTORC1]] (protein synthesis and anabolism), inactivates [[Bad]]
     (anti-apoptotic), and inhibits GSK3. This arm mediates "survival,
     protein synthesis" and most of the metabolic effect.
   - **RAS–MAPK**: IRS1/2 or Shc recruit GRB2/SOS, activating RAS and the
     RAF–MEK–ERK cascade; this arm mediates proliferation and, with PI3K,
     cell growth.
5. **Additional arms.**
   - **JAK/STAT**, in particular **[[STAT3]]**, described by UniProt as
     potentially essential for the transforming activity of IGF1R;
   - **JNK**, activated in parallel, with IGF1 inhibiting JNK activation by
     phosphorylating and inhibiting MAP3K5/ASK1, which associates directly
     with IGF1R.
6. **Hybrid receptors.** IGF1R forms hybrid receptors with INSR, consisting of
   one α and one β chain of each. Hybrid IGF1R/INSR(long) receptors are
   activated with high affinity by IGF1 and with low affinity by IGF2, and are
   not significantly activated by insulin; IGF1R/INSR(short) hybrids are
   activated by IGF1, IGF2, and insulin. Two independent studies disagree on
   whether INSR(long) and INSR(short) hybrids differ in binding
   characteristics — worth flagging as an unsettled point.

## Physiological role

- **Growth.** IGF1R signalling is **obligatory for prenatal growth** in mice:
  *Igf1r* knockout animals die at birth, whereas liver-specific IGF1R knockout
  animals survive with ~70% of normal body mass — demonstrating that much of
  the growth effect is endocrine (liver-derived IGF1) rather than local.
- **Metabolism.** IGF1R and INSR together constitute the insulin/IGF axis and
  are the receptors that trigger signals associated with energy homeostasis.
  [[Insulin Resistance]] involves dysregulation of both.
- **Neurobiology.** IGF signalling is central to nervous-system development
  and neuronal survival, and podocyte-specific IGF1R is required for normal
  glomerular and podocyte gene transcription.
- **Bone and cartilage.** IGF signalling drives chondrocyte proliferation and
  matrix synthesis; in joint tissue it interacts with [[TGFβ]]-driven
  programmes.
- **Muscle regeneration.** IGF1R signalling on satellite cells
  ([[Muscle Stem Cell]]) is one route by which injury-driven IGF signalling
  supports repair.

## Pathology and clinical relevance

> [!important] IGF1R in cancer: high on-target, hard to drug
> - **Biology.** IGF1R is described by UniProt as crucial for tumour
>   transformation and survival of malignant cells. It supports proliferation,
>   survival, invasion, and therapy resistance, and confers resistance to
>   [[CDK4 6]] inhibitors and to EGFR- and KRAS-directed agents.
> - **Molecular subtypes.** Receptor crosstalk with [[KRAS]] (particularly
>   *KRAS* mutant), EGFR, HER2, and MET is frequent; the IGF1R axis is a
>   common bypass-resistance route.
>   IGF1R also signals through integrins, cadherins, and the tumour
>   microenvironment, and its *sub-cellular localisation* may matter as much as
>   its abundance.
> - **Therapeutic history.** Antibodies against IGF1R (dalotuzumab,
>   figitumumab) and small-molecule dual IGF1R/INSR inhibitors
>   (BMS-754807) reached clinical trials but disappointingly limited single-
>   agent activity. The recurring explanation is redundancy — normal glucose
>   homeostasis requires IGF1R signalling, and the hybrid receptor pool blunts
>   selectivity — so IGF1R blockade is now largely pursued in rational
>   combinations rather than as monotherapy.
> - **Metabolic toxicity.** Hyperglycaemia and insulin resistance are the
>   class-limiting adverse effects of IGF1R/INSR-pathway inhibition, which is
>   the mirror image of the observation that [[Fasting]] and calorie
>   restriction reduce signalling through this same axis and can improve
>   IGF system sensitivity.

## Documents

- [[_document_ - The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting|The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting]] — insulin binds the membrane-associated receptor tyrosine kinases INSR and IGF1R to trigger signals associated with energy homeostasis; activation of both increases glucose uptake via PI3K/Akt, induces glycolysis, glycogenesis, and lipogenesis, suppresses gluconeogenesis via FoxO1 phosphorylation, and inhibits autophagy via mTORC1 and ULK1 phosphorylation.

## Connections

- [[Insulin Receptor]] — IGF1R's closest relative and its hybrid-receptor partner; the INSR/IGF1R axis is the system that couples nutrient status to growth, and hybrid receptors complicate every attempt at selective blockade.
- [[IRS1]] and [[IRS-2]] — the principal receptor substrates that dock to the phosphorylated IGF1R and relay to PI3K and to GRB2/SOS; IRS1 is where the growth and metabolic arms converge.
- [[PI3K]] and [[Akt]] — the survival and anabolic arm; AKT drives [[mTORC1]] protein synthesis and inactivates Bad.
- [[mTORC1]] — the downstream effector of IGF1R–PI3K–AKT, which is why IGF1R activation is antiautophagic and why IGF1R blockade can sensitise tumours to mTOR or CDK4/6-directed therapy.
- [[RAS]] and [[ERK]] — the proliferative arm, engaged via Shc/IRS1–GRB2–SOS.
- [[STAT3]] — the JAK/STAT arm that UniProt flags as potentially essential for IGF1R's transforming activity.
- [[IGF1]] — the cognate high-affinity ligand; the IGF1/IGF1R axis is endocrine (liver-produced IGF1 acting on distant tissue) and paracrine.
- [[IGF-Akt Signaling]] — the named pathway-level node summarising the IGF1R → IRS → PI3K → AKT chain in this vault.
- [[Insulin]] and [[Insulin Signaling]] — insulin binds IGF1R with low affinity; the shared signalling logic is why IGF1R blockade causes hyperglycaemia.
- [[Insulin Resistance]] and [[Type 2 Diabetes]] — the metabolic context in which IGF axis dysregulation is measured; chronic hyperinsulinaemia and IGF signalling both feed this loop.
- [[CDK4 6]] — the IGF1R axis is a resistance mechanism against CDK4/6 inhibitors, via cyclin D–CDK4/6 and the RB–E2F node.
- [[Muscle Stem Cell]] and [[Cell Proliferation]] — IGF signalling is one of the injury-induced mitogenic inputs into satellite-cell proliferation.
- [[Autophagy Inducer]] — caloric restriction and fasting reduce IGF1R/INSR signalling, relieving mTORC1-mediated autophagy suppression.

## Linking Summary

- New links added: [[Insulin Receptor]], [[IRS1]], [[IRS-2]], [[PI3K]], [[Akt]], [[mTORC1]], [[RAS]], [[ERK]], [[STAT3]], [[IGF1]], [[IGF-Akt Signaling]], [[Insulin]], [[Insulin Signaling]], [[Insulin Resistance]], [[Type 2 Diabetes]], [[CDK4 6]], [[Muscle Stem Cell]], [[Autophagy Inducer]], [[Bad]]
- Suggested notes to create: [[IGF2]], [[INSR]], [[Hybrid receptor]], [[PIK3R1]], [[SHC]], [[GRB2]], [[SOS1]], [[MAP3K5]], [[CD221]], [[Albuminoid]], [[Igf1r knockout]], [[Podocyte]], [[Dalotuzumab]], [[Figitumumab]], [[BMS-754807]], [[Pixantrone]], [[METABOLIC toxicity]] — removed as already existing: ASK1, Bad, GSK3, Hyperglycemia, IGF1R, IRS-2, JAK, Satellite Cell, TSC1, TSC2
- Strong connections to strengthen: [[IGF1R]] ↔ [[IRS1]] ↔ [[PI3K]] ↔ [[Akt]], [[IGF1R]] ↔ [[Insulin Receptor]], [[IGF1R]] ↔ [[mTORC1]] ↔ [[Autophagy]]