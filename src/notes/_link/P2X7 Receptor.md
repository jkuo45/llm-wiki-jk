---
title: P2X7 Receptor
description: P2X7 (P2RX7) is an ATP-gated, non-selective cation channel that functions as a
  death receptor in many cell types, driving potassium efflux, NLRP3 inflammasome assembly
  and cytokine release; it is an emerging drug target in neuroinflammation and cancer.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags:
  - receptor
  - ion-channel
  - purinergic-signaling
  - inflammation
  - pharmacology
aliases:
  - P2X7
  - P2X7 receptor
  - P2X7R
  - P2RX7
---

# P2X7 Receptor

The **P2X7 receptor** (gene *P2RX7*) is the most cytotoxic member of the P2X family of
[[ATP]]-gated ion channels. Unlike most receptors, its activation is not a graded
modulation of a resting current but a commitment to cell death: once the pore dilates,
the process is effectively irreversible.

## Mechanism

- **Ligand and location** — Extracellular [[ATP]] at millimolar concentrations activates
  P2X7. The receptor is a trimer; each subunit has two transmembrane domains with
  intracellular N- and C-termini. It is expressed by most mammalian cell types, at
  highest levels on [[Macrophages]] and other myeloid cells, [[T Cell|T cells]],
  [[Neutrophils]], [[Microglia]], and both microglia-like and other cells of the CNS.
- **Cation flux** — P2X7 is a non-selective cation channel permeable to [[Calcium]],
  sodium and potassium. Early activation produces depolarisation, [[Calcium Signaling]]
  and arachidonic acid release.
- **Large-conductance pore** — Sustained stimulation with millimolar ATP (typically
  lasting tens of seconds to minutes) drives the channel into a dilated,
  large-conductance state permeable to organic cations up to ~900 Da. The dilated pore
  requires ATP binding and is thought to cooperate with the pannexin-1 hemichannels to
  release [[DAMP|damage-associated molecular patterns]] such as IL-1β.
- **Potassium efflux as the critical signal** — Efflux of intracellular K⁺ is the
  proximal trigger for [[NLRP3 Inflammasome]] assembly: the fall in cytosolic K⁺ is
  sensed by NLRP3 itself, and blocking K⁺ efflux (raising extracellular K⁺) abolishes
  inflammasome activation. This reframes P2X7 as an *upstream executor* of
  [[Pyroptosis]] rather than merely a cytokine-release channel.
- **Amplication loops** — P2X7 signalling raises cytosolic [[Calcium]] and
  [[Mitochondrial ROS|mtROS]], which feed back on mitochondrial permeability and
  further amplify inflammasome activation. P2X7 also engages the
  [[Phospholipase C]]/[[NADPH Oxidase]] axis and, via [[MAPK]] and NF-κB, primes
  further P2X7 and NLRP3 expression.

> [!info] Two signals, one receptor
> P2X7 is best understood as the point where a cell detects that it is dying or is
> being damaged. Dying cells release ATP; inflammatory stimuli prime P2X7 and
> NLRP3 expression via [[Toll-like Receptor|TLR]] and [[TNFα]] signalling. The
> convergence of priming (signal 1) and extracellular ATP (signal 2) is what
> converts detection into [[Caspase-1]] activation, [[Interleukin 1β]] maturation and
> [[Gasdermin D]] pores.

## Pathological Roles

- **Inflammation and infection** — Required for IL-1β release from [[Neutrophils]] and
  [[Macrophages]] in response to bacterial toxins, urate crystals, silica and
  particulate matter. *P2rx7* knockout mice are profoundly blunted in
  [[NLRP3 Inflammasome|NLRP3]]-dependent models, including gout, peritonitis and
  contact hypersensitivity.
- **Cell death** — Described as a "death receptor" because activation sets in motion an
  irreversible death process that has been variously characterised as
  [[Pyroptosis]], necrotic death and apoptosis-like death depending on cell type and
  ATP dose.
- **Neuroinflammation** — Microglial P2X7 drives IL-1β, COX-2 and PGE2 release after
  cell death and damage signals, linking it to [[Neurodegenerative Diseases]] and
  [[Microgliosis]] in [[Alzheimer's Disease]], [[Parkinson's Disease]] and multiple
  sclerosis. Human *P2RX7* polymorphisms associate with depressive symptoms.
- **Aging and senescence** — P2X7 expression rises with age on microglia and is
  implicated in [[Inflammaging]] and age-related chronic inflammation.
- **Cancer** — P2X7 has a context-dependent, often bimodal role: activation promotes
  antitumour immunity (IL-1β release, cytotoxic T-cell stimulation) in some settings
  and tumour-promoting inflammation, survival and metastasis in others. *P2RX7* is
  frequently overexpressed in tumours.

## Pharmacology

- **Antagonists** — Pharmacological (A-438079, A-740003, AZ11645373, brilliant blue G)
  and genetic (knockout, human loss-of-function alleles) blockade suppresses
  [[Neuroinflammation]] and inflammasome output in a large number of rodent models.
- **Clinical translation has been sobering** — Several first-generation antagonists
  failed in humans: AZD9056 showed no significant efficacy in rheumatoid arthritis,
  questioning whether P2X7 is a useful target there; GSK1482160 was not pursued in
  schizophrenia. Second-generation brain-penetrant agents (e.g. the JNJ-54175446-class
  compounds NTRX-07, JNJ-61393215) are in early-phase trials in mood disorders and CNS
  inflammation, with results still preliminary.

> [!warning] Caveat
> P2X7 antagonism is mechanistically clean but clinically unproven. Rodent inflammasome
> biology does not always translate, and broad blockade risks disrupting host defence —
> the receptor is required for clearance of infected and damaged cells. Claims of P2X7 as
> a therapeutic target should be model-qualified.

## Documents

- (no document notes yet)

## Connections
- [[NLRP3 Inflammasome]] — P2X7 is the dominant physiological route to inflammasome
  activation, acting upstream of NLRP3 by letting K⁺ leave the cytosol. Reciprocal
  IL-1β signalling also upregulates P2X7, so the two form a feed-forward loop.
- [[Pyroptosis]] — Dilated P2X7 pores and the resulting caspase-1 activation are the
  proximate cause of pyroptotic membrane rupture in many cell types, making P2X7 the
  most actionable upstream node of this death programme.
- [[ATP]] — ATP is the obligatory agonist; where extracellular ATP comes from (cell
  lysis, pannexin channels, vesicular release) determines whether P2X7 fires as a
  sterile-damage sensor or a bactericidal effector.
- [[Microglia]] — Microglia are the dominant P2X7-expressing cell in the brain and the
  main route by which neuronal damage becomes neuroinflammation.
- [[NADPH Oxidase]] — P2X7-dependent NADPH oxidase recruitment is a major source of the
  respiratory burst and [[Superoxide]] that accompany its activation in phagocytes.
- [[DAMP]] — P2X7 sits downstream of DAMP sensing: released nucleotides are the ligand,
  and the channel's own dilated pore releases DAMPs that amplify the response.
- [[Neurodegenerative Diseases]] — Microglial P2X7 is one of the most replicated
  pharmacological targets across Alzheimer's, Parkinson's and ALS models.

## Linking Summary
- New links added: [[ATP]], [[Calcium]], [[Calcium Signaling]], [[Caspase-1]],
  [[Interleukin 1β]], [[Gasdermin D]], [[NLRP3 Inflammasome]], [[Pyroptosis]],
  [[DAMP]], [[Microglia]], [[Macrophages]], [[Neutrophils]], [[T Cell]], [[Mitochondrial ROS]],
  [[NADPH Oxidase]], [[MAPK]], [[Toll-like Receptor]], [[TNFα]], [[Phospholipase C]],
  [[Neuroinflammation]], [[Neurodegenerative Diseases]],
  [[Microgliosis]], [[Alzheimer's Disease]], [[Parkinson's Disease]], [[Inflammaging]],
  [[Multiple Sclerosis]], [[Superoxide]], [[Chemokines]]
- Suggested notes to create: [[Pannexin]], [[A-438079]], [[AZD9056]], [[NeuroTherapia]]
- Strong connections to strengthen: [[P2X7 Receptor]] ↔ [[NLRP3 Inflammasome]],
  [[P2X7 Receptor]] ↔ [[Pyroptosis]]
