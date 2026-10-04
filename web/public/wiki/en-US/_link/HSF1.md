---
title: HSF1
description: 'HSF1 (heat shock factor 1, HSTF1) is the mammalian stress-activated transcription factor that trimerises on heat and other proteotoxic stress, binds inverted NGAAN repeats in heat shock element promoters, and induces the chaperone network. It is held inactive by Hsp90 and is a validated cancer dependency.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - transcription-factor
  - proteostasis
  - stress-response
  - cancer
aliases: [Heat Shock Factor 1, HSF 1, Heat shock transcription factor 1, HSTF1, HSF1_HUMAN]
---

# HSF1

## Overview

HSF1 is the principal **heat shock factor** of mammals — a stress-activated
transcription factor that, when stress misfolds the proteome, induces the
chaperone genes that restore proteostasis. It is a member of a small family
(HSF1, HSF2, HSF3, HSF4; HSFY is a Y-linked variant), but HSF1 is the
dominant heat-inducible member and is the only one with a clear, essential
role in the heat shock response.

Human HSF1 is a 573-residue protein (UniProt Q00613).

## Structure and domains

HSF1 is built from three independently regulated modules, which is why its
activation requires at least two distinct structural transitions:

- **N-terminal DNA-binding domain (DBD)** (residues ~1–215) — a helix-turn-helix
  with an unusual β-sandwich "helical" subdomain; an ATP/GTP-binding region
  here contributes to oligomerisation-state sensing.
- **Oligomerisation domain** (LZ1–LZ3, plus a C-terminal leucine zipper
  region) — three hydrophobic leucine-zipper-like repeats. Trimerisation is
  the first transition: monomeric HSF1 in unstressed cells becomes a
  homotrimer on stress, which is what makes the DBD competent to bind DNA.
- **Regulatory domains** — LZ2-adjacent sequences and the C-terminal
  **transcription activation domain (TAD)**. Oligomerisation and transcriptional
  competence are controlled by *distinct* mechanisms, with LZ2 and downstream
  sequences separated from the TAD. The model is a fold-back structure that
  masks the TAD in unstressed cells and is opened by HSF1 modification
  and/or binding of a facilitating factor.
- **Nuclear localisation signal** — amino-terminal; unmasked by
  oligomerisation rather than constitutively active, which is why HSF1 is
  cytosolic at rest.

## Mechanism of activation

> [!info] Three states, two controlled transitions
> **Unstressed:** HSF1 is a cytosolic, DNA-inactive **monomer** held in an
> inactive conformation by a multichaperone complex containing
> **[[HSP90β]]**, FKBP4 ([[FKBP12|FKBP52]] family chaperone), FKBP5, PPID
> (cyclophilin 40), PPP5C (PP5), and p23 (PTGES3). Hsp90 binding prevents
> trimerisation.
>
> **Stressed:** HSF1 homotrimerises, translocates to the nucleus, binds HSEs,
> and — after further phosphorylation — acquires full transcriptional
> competence, recruiting [[NRF1]] and [[NRF2]]-type coactivators, TTC5/STRAP, and
> p300/EP300.
>
> **Attenuation:** HSF1 is re-exported and re-sequestered by the same Hsp90
> complex, and stress-denatured client proteins compete for Hsp90, relieving
> repression of HSF1.

- **DNA binding.** HSF1 binds **inverted repeats of the pentameric NGAAN
  sequence** (arrays of imperfect and perfect NGAAN matches) in promoters —
  the "heat shock element" (HSE). Genome-wide footprinting of the human
  *HSPA1A* (hsp70) promoter identified five contiguous NGAAN sequences as the
  HSF1 binding site.
- **Target genes.** *HSPA1A/B*, *HSPB1*, *HSPE1*, chaperones, and also
  non-chaperone targets including FOXR1 (which itself activates HSPA1A, HSPA6,
  and the antioxidant NADPH-dependent reductase DHRS2).
- **Positive and negative regulation.** HSP90–HSF1 binding is weakened by
  IER5 under stress, promoting nuclear accumulation. DAXX binding relieves
  HSF1 from Hsp90-complex repression. JNK1 and ERK interact with HSF1's
  regulatory domain, preferentially its hyperphosphorylated form. IER5-driven
  PPP2CA-mediated dephosphorylation (Ser121, Ser307, Ser314, Thr323, Thr367)
  dampens the response. BAG3 promotes nuclear shuttling of HSF1.

> [!warning] HSF1 is more than a heat sensor
> HSF1 is activated by many proteotoxic and metabolic stresses, not just
> heat: oxidative stress, mitochondrial import stress, heavy metals, certain
> chemotherapeutics, and glucose deprivation. Mechanistically it is best
> understood as a sensor of **proteome folding capacity** rather than of
> temperature.

## Non-transcriptional functions

- **Represses** Ras-induced transcriptional activation of *c-FOS* in
  heat-stressed cells.
- Positively regulates HSP70 pre-mRNA 3'-end processing and polyadenylation in
  a SYMPK (symplekin)-dependent manner, and participates in HSP70 mRNA nuclear
  export — i.e. HSF1 controls not just HSP transcription but its maturation.
- Acts as a **negative regulator of non-homologous end joining (NHEJ) DNA
  repair** in a DNA damage-dependent manner.
- Regulates mitotic progression.
- Reactivates latent HIV-1 transcription by binding the viral LTR and
  recruiting CDK9, CCNT1, and EP300.

## Physiological role

- **Proteostasis surveillance.** HSF1 is required for survival of sustained
  proteotoxic stress; Hsf1-null fibroblasts fail to accumulate [[HSP70]] and
  are hypersensitive to heat, oxidative stress, and heavy metals.
- **Mitochondrial stress response.** Accumulation of unimported mitochondrial
  precursor proteins in the cytosol — engineered "clogger" proteins — rapidly
  and robustly activates HSF1, which induces cytosolic chaperones and the
  ubiquitin–proteasome system. In yeast, HSF1 sits upstream of RPN4 (which
  induces proteasomal subunits) and PDR3; in mammals the equivalent response
  is NRF1/NRF2-driven and HSF1-dependent, coupled to cytosolic chaperone
  redox alterations.
- **Thermogenesis and exercise.** HSF1 is a transcriptional target of
  [[FoxO1]] and is induced by exercise and by sympathetic/β-adrenergic
  signalling in skeletal muscle, where it drives chaperone biogenesis during
  the heat generated by contraction. It also participates in fasting- and
  calorie-restriction-induced stress adaptation.

## Pathology and clinical relevance

> [!important] HSF1 is a validated cancer dependency
> - HSF1 supports tumour initiation and maintenance by repressing
>   proteotoxic and oxidative stress that would otherwise kill a proliferating
>   cell, and by directly repressing the tumour suppressor **p53**;
>   HSF1 is overexpressed in many tumours and its genetic loss impairs tumour
>   formation in mouse models.
> - HSF1 promotes invasion and metastasis, including a p53-independent
>   mechanism, and confers **chemoresistance and radioresistance** by
>   enabling survival under proteotoxic treatment.
> - HSF1 promotes cancer cell proliferation in an **IER5-dependent** manner
>   and cooperates with [[MYC]].
> - **Therapeutic status:** HSF1 is a validated but hard-to-drug target. The
>   clinical candidate **NXP800** (an HSF1 pathway inhibitor) has shown
>   antitumour activity in preclinical and early-phase settings. Other
>   approaches in preclinical work include maslinic acid (which promotes
>   HSF1 ubiquitination and degradation) and BAP1 modulation of HSF1 activity.
> - **Sirtuin connection:** [[SIRT1]] deacetylates HSF1. Resveratrol
>   protects against acute necrotizing pancreatitis in mice via
>   SIRT1-mediated deacetylation of p53 and HSF1 — mechanistically
>   ambiguous whether deacetylated HSF1 is more or less active, since
>   acetylation is required for HSF1 transcriptional competence and SIRT1
>   activity falls with age.

## Documents

- [[_document_ - Mitohormesis - 2023_NOV|Mitohormesis - 2023_NOV]] — mitochondrial import stress ("clogger" proteins) rapidly activates HSF1 in yeast, which then drives RPN4 and PDR3 to increase cytosolic chaperone activity and the ubiquitin–proteasome system; the mammalian UPRmt response is NRF1/NRF2- and HSF1-dependent and is triggered by a dual signal of mitochondrial ROS plus cytosolic protein accumulation.
- [[_document_ - rubinsztein2011_autophagy_and_aging|rubinsztein2011_autophagy_and_aging]] — lists HSF1 among the transcription factors (p53, NF-κB, HSF1, FOXO1/-3/-4, PGC1α) deacetylated by SIRT1.
- [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease]] — resveratrol protects against acute necrotizing pancreatitis in mice by enhancing SIRT1-mediated deacetylation of p53 and HSF1; HSF1 also appears in the SIRT metabolic network figure.

## Connections

- [[Heat Shock Proteins]] — HSF1's principal transcriptional output is the chaperone family (HSPA1A, HSPB1, HSPE1, DNAJ, chaperones); without HSF1 the chaperone arm of the stress response fails.
- [[HSP90β]] — Hsp90 in a multichaperone complex with FKBP4/FKBP52, p23, cyclophilin 40, and PP5 holds HSF1 as an inactive monomer; heat-induced competition from denatured clients relieves this repression.
- [[SIRT1]] — deacetylates HSF1; SIRT1 activity declines with age, and the acetylation state of HSF1 gates its transcriptional competence, coupling the stress response to NAD+ availability.
- [[Resveratrol]] — activates SIRT1 and thereby increases HSF1 deacetylation; this underlies the reported protection against acute necrotizing pancreatitis.
^- [[NRF2]] — cooperates with HSF1 in the mammalian mitochondrial unfolded-protein response; HSF1 drives chaperones while NRF1/NRF2 drive proteasomal and mitochondrial-biogenesis genes.
- [[FoxO1]] — an upstream transcriptional regulator of HSF1 in muscle and liver, linking fasting/AMPK signalling to chaperone biogenesis.
- [[Proteasome]] — HSF1 induction raises expression of ubiquitin–proteasome-system components alongside chaperones; in yeast this is mediated by RPN4 downstream of HSF1.
- [[MYC]] and [[p53]] — HSF1 cooperates with MYC to drive proliferation and represses p53-dependent stress responses, placing it as a node in oncogene-induced senescence.
- [[Mitohormesis]] — HSF1 is the transcriptional effector through which mitochondrial import stress is converted into a cytosolic proteostasis response.
- [[FKBP12]] — the FKBP-family chaperone FKBP4/FKBP52 in the HSF1–Hsp90 complex shares the FKBP domain with FKBP12; the pocket that binds rapamycin and FK506 sits in the same protein family as the one that restrains HSF1.

## Linking Summary

- New links added: [[Heat Shock Proteins]], [[HSP90β]], [[SIRT1]], [[Resveratrol]], [[NRF2]], [[FoxO1]], [[Proteasome]], [[MYC]], [[p53]], [[Mitohormesis]], [[FKBP12]], [[HSPA8]]
- Suggested notes to create: [[HSF2]], [[HSF4]], [[Heat shock element]], [[p23]], [[PTGES3]], [[Cyclophilin 40]], [[PP5]], [[PPP5C]], [[STRAP]], [[TTC5]], [[IER5]], [[BAG3]], [[NXP800]], [[FOXR1]], [[DHRS2]], [[Symplekin]], [[HIV-1 long terminal repeat]], [[Chaperone]] — removed as already existing: DAXX, EP300, HSF1, HSP27, HSP70, Mitochondrial Unfolded Protein Response, Norepinephrine, P300, Thermogenesis, Unfolded Protein Response
- Strong connections to strengthen: [[HSF1]] ↔ [[Heat Shock Proteins]], [[HSF1]] ↔ [[HSP90β]], [[HSF1]] ↔ [[SIRT1]] ↔ [[Resveratrol]]