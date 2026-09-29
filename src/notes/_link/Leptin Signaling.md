---
title: Leptin Signaling
description: Leptin signalling is the JAK2-STAT3 cascade initiated by leptin binding the LepRb cytokine receptor, transmitted in the hypothalamus to regulate appetite, energy expenditure and glucose homeostasis.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [pathway, signal-transduction, metabolism, endocrinology]
aliases: [Leptin signaling, LEPRb signalling, leptin receptor signalling]
---

# Leptin Signaling

**Leptin signaling** is the intracellular signalling network initiated when
[[Leptin]] binds the long-form leptin receptor (**LepRb**, also LEPRb/CD228), the
chief route by which the brain receives information about the body's energy
stores. Its canonical output is a [[JAK2]] → [[STAT3]] cascade in
[[Hypothalamus|hypothalamic]] neurons, with parallel [[PI3K]], [[MAPK]] and
[[AMPK]] arms.

## The receptor

LepRb is a **class I cytokine receptor** — a single-pass type I transmembrane
protein with no intrinsic enzymatic activity. Six isoforms exist by alternative
splicing of the C-terminus; only the long, cytosolic-tail-containing isoform
(LepRb) is competent at signal transduction, and it is expressed almost
exclusively in the hypothalamus and brainstem. Extracellularly, it binds
[[Obelin]], while the other splice forms (LepRa, LepRc, LepRd, LepRe) act
largely as soluble or transport decoys that bind leptin without signalling.

A key structural feature relevant to [[Insulin Resistance]]: the receptor is
constitutively expressed on the cell surface, so leptin also drives its
internalisation, which is one route to attenuation of signalling.

## Canonical pathway

> [!info] JAK2 → STAT3 is the causal route
> Leptin binding to LepRb induces **trans-interaction of two receptor
> monomers**, bringing the receptor-associated [[JAK2]] kinases together for
> trans-phosphorylation. JAK2 phosphorylates tyrosines in the receptor's
> cytoplasmic tail, creating docking sites that recruit [[STAT3]]. STAT3 is
> then phosphorylated on Tyr705, dimerises and translocates to the nucleus to
> activate *transcription* of target genes such as **[[POMC]]**,
> **SOCS3** and **[[PTP1B]]**.
>
> This route is not one of several equals. Genetic evidence settles it:
> **mice with a LepRb Y985F mutation that cannot recruit STAT3** lose the
> anorexigenic and weight-reducing effect of leptin, and mice with a
> **STAT3 S727A** mutation show the same phenotype. By contrast, deletion of
> the [[SH2B1|SH2B1]] docking site, which abolishes PI3K recruitment, largely
> preserves leptin's effect on food intake and body weight. So STAT3 is
> required; PI3K is largely dispensable for the core metabolic action.

The direct transcriptional output in the [[Arcuate Nucleus]] is the canonical
POMC/CART anorexigenic neurons being stimulated and the NPY/AgRP orexigenic
neurons being suppressed, which together suppress appetite and increase
sympathetic outflow and energy expenditure.

## Parallel arms and their roles

- **[[PI3K]]/[[AKT]]** — engaged via IRS proteins and [[SH2B1]]. Contributes to
  leptin's effects on glucose handling and on the reproductive axis; dispensable
  for the feeding response.
- **SHP2/PTPN11 → [[RAS]]/[[MAPK]]/[[ERK]]** — historically proposed as a
  major mediator; its necessity is disputed.
- **[[AMPK]] and [[S6K1]]** — activated in the hypothalamus and in peripheral
  tissues, linking leptin to the energy-sensing and mTORC1 arms.
- **[[STAT5]]** — engaged downstream of LepRb; required for some immune and
  haematopoietic effects of leptin rather than for energy balance.
- **[[Hypothalamus|Hypothalamic]] neuronal targets** — both orexigenic
  NPY/AgRP neurons and anorexigenic POMC neurons, plus interneuron populations
  expressing [[RANKL]] and other transmitters.

## Feedback: why obesity produces leptin resistance

> [!info] Leptin resistance is a signalling failure, not a leptin deficiency
> In common obesity, leptin levels are high, not low, yet the hypothalamus
> stops responding. The candidate mechanisms, none of which alone accounts for
> the whole picture:
>
> - **[[SOCS3]] induction** — the classic negative feedback. Leptin-driven
>   STAT3 induces SOCS3, which docks on phosphorylated LepRb via its SH2
>   domain and inhibits JAK2. SOCS3-knockout mice are leptin-sensitive
>   despite extreme obesity, supporting a causal role.
> - **[[PTP1B]]** — a phosphatase that dephosphorylates LepRb tyrosines and
>   dampens [[JAK2]] signalling. PTP1B also negatively regulates the
>   [[Insulin Receptor|insulin receptor]], so it sits at the convergence of
>   leptin and insulin resistance, which is why it is such a favoured target.
> - **[[ER Stress|Endoplasmic reticulum]] stress** from nutrient overload
>   activates the [[Unfolded Protein Response|unfolded protein response]]
>   (XBP1, CHOP), which suppresses leptin signalling in hypothalamic
>   neurons; IRE1α and JAK2 also engage.
> - **Hypothalamic inflammation** — [[Toll-like Receptor]]-driven
>   [[NF-κB]] activation and [[Tumor Necrosis Factor Alpha|TNF]] signalling
>   induce SOCS3 and impair LepR trafficking. Microglial IL-1β is
>   implicated.
> - **Impaired transport and reduced receptor surface density** — defective
>   leptin transport across the blood–brain barrier, reduced LepRb
>   expression, and mis-sorting of the receptor in obesity.
> - **Heterodimerisation with LepRa** — a proposed, though not
>   consensus, mechanism for sequestration.

> [!warning] Clinical caveat
> **Leptin itself is not an approved weight-loss drug, and the failure of
> recombinant leptin (plus its analog pegylated leptin, metreleptin) is
> instructive.** Peg-leptin achieves high and sustained circulating levels and
> does produce weight loss, but only in patients with *lipodystrophy*, where
> leptin deficiency is the actual cause of the metabolic disease. In common
> obesity, where leptin is already abundant and resistance is the problem,
> more leptin does not help. This is the pharmacological statement of the
> leptin-resistance problem above. Leptin is licensed (metreleptin) for
> generalised and partial lipodystrophy and for the hypothalamic obesity
> associated with rare LepR deficiency.

## Peripheral and extra-hypothalamic signalling

Beyond the brain, LepRb is expressed on immune, haematopoietic, endothelial,
pancreatic β-cell and reproductive tissues, where leptin acts on immune
proliferation, [[T Helper Cell|Th1/Th17]] balance, thymic and haematopoietic
cell survival, and gonadal function. This explains the links between
adipocyte signalling, [[Innate Immunity|innate immune]] tone, and reproduction —
the HPG axis is a major site of leptin action, and leptin deficiency
(ob/hypoleptin) causes hypogonadotropic hypogonadism and infertility.

## Documents

- [[Insulin Sensitivity]] — the resistin/PTP1B/leptin-resistance cluster is the
  main documented overlap: PTP1B is a shared negative regulator of both the
  leptin and insulin receptors, which is why it is simultaneously a candidate
  metabolic drug target for both axes.
- [[PTP1B]] — directly supplies the phosphatase identity, its substrate
  relationship to LepRb, and its role as the convergence point of leptin and
  insulin resistance.

## Connections

- [[Leptin]] — Leptin is the ligand; the obese but leptin-replete state
  that makes this pathway clinically important is the central paradox
  discussed above.
- [[PTP1B]] — A phosphatase that dephosphorylates both LepRb and the insulin
  receptor, and the most druggable node shared by leptin and insulin
  signalling. It is also an inhibitor of [[SIRT1]], connecting this node to
  NAD+-dependent signalling in the vault.
- [[Insulin Sensitivity]] — Leptin and insulin signalling converge on
  hypothalamic glucose handling, and both are blunted by the same negative
  regulators; this is the closest mechanistic relation in the vault.
- [[Hypothalamus]] — The anatomical site of the canonical JAK2-STAT3 action
  and where the anorexigenic/orexigenic neuronal populations sit.
- [[SOCS3]] — The dominant negative-feedback inhibitor, induced by STAT3
  and by inflammatory cytokines; a hub in both leptin resistance and
  Toll-like receptor tolerance.
- [[JAK2]] and [[STAT3]] — The obligatory proximal transducers. STAT3's
  requirement is established by two independent mouse mutations, which is
  unusually clean genetic evidence for a signalling pathway.
- [[Insulin Resistance]] and [[Obesity]] — The clinical context; obesity is
  the state in which this pathway fails, and the reason pharmacologically
  adding ligand is ineffective.
- [[Adipose Tissue]] — Leptin's site of production and the tissue whose
  expansion in obesity generates the resistance.
- [[AMPK]] and [[mTOR]] — Energy-sensing arms engaged downstream of
  LepRb in both CNS and peripheral tissues.
- [[Inflammation]] — Chronic low-grade inflammation in the hypothalamus
  with TNF and IL-1β is a leading mechanistic candidate for acquired
  leptin resistance.
- [[ER Stress]] — The unfolded protein response under nutrient overload
  suppresses LepR signalling through XBP1/CHOP.

## Linking Summary

- New links added: [[Leptin]], [[JAK2]], [[STAT3]], [[Hypothalamus]], [[PI3K]], [[AKT]], [[MAPK]], [[ERK]], [[AMPK]], [[S6K1]], [[STAT5]], [[Arcuate Nucleus]], [[POMC]], [[Obelin]], [[SH2B1]], [[PTPN11]], [[SHP2]], [[RAS]], [[SOCS3]], [[PTP1B]], [[ER Stress]], [[Unfolded Protein Response]], [[Toll-like Receptor]], [[NF-κB]], [[Tumor Necrosis Factor Alpha]], [[Insulin Receptor]], [[Insulin Resistance]], [[Obesity]], [[Adipose Tissue]], [[mTOR]], [[RANKL]], [[T Helper Cell]], [[Innate Immunity]], [[XBP1]], [[CHOP]]
- Suggested notes to create: [[SH2B1]], [[POMC]], [[NPY]], [[AgRP]], [[Leptin Resistance]], [[LepRa]], [[Metreleptin]], [[Lipodystrophy]], [[XBP1]], [[CHOP]], [[Unfolded Protein Response]], [[JAK2-STAT Signaling]], [[Arcuate Nucleus]]
- Strong connections to strengthen: [[Leptin Signaling]] ↔ [[Leptin]], [[Leptin Signaling]] ↔ [[PTP1B]], [[Leptin Signaling]] ↔ [[SOCS3]]
