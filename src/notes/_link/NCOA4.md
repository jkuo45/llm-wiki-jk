---
title: NCOA4
description: 'Nuclear receptor coactivator 4 (also called androgen receptor-associated protein 70, ARA70). Best known as the receptor mediating ferritinophagy, the ATG5-ATG7-dependent autophagic delivery of ferritin heavy and light chains to lysosomes, which releases free iron and thereby licenses ferroptosis.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - autophagy
  - iron-metabolism
aliases: [Nuclear Receptor Coactivator 4, ARA70, RFG, ELE1, NCoA-4, IDC1]
---

# NCOA4

NCOA4 has two quite separate careers. It was first described as a 70 kDa androgen-receptor coactivator (ARA70, RET-fused gene product, RFG, IDC1, ELE1 — up to 579 aa depending on isoform). Its dominant modern role is as the **autophagy receptor for ferritin**, the process termed *ferritinophagy*.

> [!warning] Two-functions caution
> The nuclear-receptor coactivator literature and the ferritinophagy/ferroptosis literature rarely cite each other. Claims that NCOA4 "coactivates the androgen receptor" and claims that NCOA4 "controls iron availability" are both true, but the protein that does one is not obviously the same conformational state as the protein that does the other. Do not treat them as one function.

## Domain organisation

NCOA4 is a largely disordered ~60–80 kDa protein with a carboxy-terminal **ferritin-binding domain (FBD)** containing a conserved region that binds the acidic ferroxidase surface of [[Ferritin]] — specifically the ferritin heavy chain, ferritin light chain, and the assembled 24-mer hollow shell. A short **LC3-interacting region (LIR)** on NCOA4 docks the ferritin–NCOA4 complex onto lipidated LC3 at the autophagosome. The N-terminal region carries the nuclear receptor-binding / transactivation function, and NCOA4α (a longer isoform) and NCOA4β (shorter) differ mainly in this N-terminal region and behave oppositely as coactivators — NCOA4α has been reported to inhibit, and NCOA4β to promote, proliferation in prostate and breast cancer models.

## Mechanism of ferritinophagy

> [!info] Source: [[_document_ - Ferroptosis past present and future]]
> The ferroptosis review places NCOA4 in the iron-metabolism module of ferroptosis regulation alongside transferrin and [[Ferroportin]], and specifically names the ATG5–ATG7–NCOA4 axis: NCOA4-mediated ferritin degradation increases the labile iron pool and thereby promotes ferroptosis.

> [!info] Mechanism
> **High iron activates, low iron terminates.** When intracellular iron is high, NCOA4 accumulates in multimeric assemblies that bind ferritin. The ferritin–NCOA4 complex is engulfed via an ATG5/ATG7-dependent macroautophagy route and delivered to the lysosome, where cathepsins degrade ferritin and release iron. When iron levels fall, NCOA4 is itself degraded (in an iron-dependent manner via the E3 ubiquitin ligase HERC2), which switches ferritinophagy off and allows new ferritin to sequester the remaining iron.

The key point for the ageing and neurodegeneration literature is that ferritinophagy is a **two-edged pathway**:

- **Productive:** it is how the cell mobilises stored iron when it is needed for heme and Fe–S cluster synthesis, and how it prevents ferritin from becoming a long-lived iron sink.
- **Destructive:** the same released iron feeds the Fenton reaction and, when the [[Glutathione]]/GPX4 antioxidant axis is also compromised, drives lipid peroxidation and [[Ferroptosis]]. Genetic inhibition of NCOA4 blocks ferritin degradation and suppresses ferroptosis; NCOA4 overexpression increases ferritin turnover and increases ferroptosis susceptibility.

NCOA4 therefore sits at the intersection of autophagy and iron metabolism, and its flux is a *rate* rather than an on/off switch — which is why ATG5, ATG7, ATG3, lysosomal proteases and iron status all appear as upstream regulators.

## Pathology and clinical relevance

Ferritinophagy and NCOA4 expression are elevated in a range of contexts:

- **Cancer.** Many tumours overexpress NCOA4 and are unusually ferroptosis-sensitive; NCOA4-dependent ferritin degradation supplies the iron that feeds proliferation, and NCOA4 levels have been explored both as a response predictor for ferroptosis inducers and as a resistance mechanism.
- **Neurodegeneration and ageing.** Iron accumulation and altered ferritin handling feature in [[Parkinson's Disease]], Alzheimer's disease, and sarcopenia; NCOA4-mediated ferritin degradation has been reported in pressure-overload cardiac remodelling and in retinal disease. Whether raising NCOA4 is harmful or helpful in brain is genuinely unsettled.
- **Liver and metabolic disease.** Hepatic iron handling and ferritinophagy interlock with iron overload states and with ferroptotic hepatocyte death.

> [!warning] Readouts need care
> Because NCOA4 flux is a *rate* rather than an on/off state, the standard experimental readouts are the NCOA4:NCOA4–ferritin ratio (the amount of free NCOA4 available to act), the amount of undegraded ferritin, and the labile iron pool — not NCOA4 mRNA or protein abundance. Abundant NCOA4 protein is not evidence of high ferritinophagy, and its absence is not evidence of low ferritinophagy, because free NCOA4 is degraded by HERC2 when iron is scarce. NCOA4 abundance is also low in many common tumour cell lines for reasons unrelated to iron handling, which makes genetic or degrader-based perturbation preferable to knockdown-interpretation in those models.

NCOA4 has been described as the clearest single-gene handle on ferritinophagy. That is a statement about tractability, not about exclusivity: at least two other ferritin-destruction routes have been proposed (a non-receptor microautophagy route, and lysosome- or endosome-biased ferritin release), and the relative contribution of each appears to depend on cell type and iron status.

> [!info] Therapeutic relevance
> Iron chelators such as [[Deferoxamine]] suppress ferritinophagy output indirectly by lowering the available iron; genetic or degrader approaches against NCOA4 are early-stage. Conversely, because NCOA4 ferritinophagy releases iron for mitochondrial function, complete NCOA4 loss is not benign.

## Documents

- [[_document_ - Ferroptosis past present and future|Ferroptosis past present and future]] — names NCOA4 within the iron-metabolism regulator class of ferroptosis control and specifically describes the ATG5–ATG7–NCOA4 pathway as the route by which autophagic ferritin degradation raises unstable intracellular iron and promotes ferroptosis.

## Connections

- [[Ferritin]] — NCOA4's direct cargo; ferritin holds ~4500 iron atoms in a hollow 24-mer shell, and NCOA4 is what commits that iron to autophagic release.
- [[Ferroptosis]] — The downstream death program; ferritinophagy is one of the three canonical upstream modules (iron handling, PUFA phospholipid, and the GSH/GPX4 axis) that permit ferroptosis.
- [[Ferroportin]] — The other systemic iron exporter; the two constitute the extracellular-intracellular iron cycle that ferritinophagy taps.
- [[Iron]] — The proximate output of ferritinophagy; free Fe2+ is the substrate for the Fenton reaction and for labile iron-driven radical chemistry.
- [[Autophagy]] — NCOA4-mediated ferritin degradation requires an intact macroautophagy apparatus, which is why the pathway is described as the ATG5–ATG7–NCOA4 axis.
- [[Selective Autophagy]] — NCOA4 is one of the clearest examples of a selective-autophagy receptor that works by simultaneously binding cargo (ferritin) and the autophagosomal membrane (LC3 LIR).
- [[Glutathione]] — The GPX4/GSH axis is the antioxidant brake that NCOA4-released iron eventually overwhelms; the two pathways are mechanistically opposed.
- [[Deferoxamine]] — Iron chelator used both to trigger and to suppress ferritinophagy readouts depending on context, and the standard experimental tool for showing an effect is iron-dependent.

## Linking Summary

- New links added: [[Ferritin]], [[Ferroportin]], [[Iron]], [[Ferroptosis]], [[Glutathione]], [[Deferoxamine]], [[Autophagy]], [[Selective Autophagy]]
- Suggested notes to create: [[Ferritinophagy]], [[HERC2]] — removed as already existing: Androgen Receptor, Fenton Reaction, NCOA4
- Strong connections to strengthen: [[NCOA4]] ↔ [[Ferritin]] (ferritin's note should name NCOA4 as its autophagic receptor), [[Ferritin]] ↔ [[Ferroptosis]] (ferritin is currently a passive storage node in this vault; it is an active ferroptosis regulator)
