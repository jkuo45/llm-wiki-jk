---
title: Geminin
description: 'Geminin (GMNN) is a replication-licensing inhibitor that blocks MCM2-7 helicase loading onto chromatin by binding CDT1. It accumulates in S/G2 and is destroyed at the metaphase-anaphase transition, licensing exactly one round of DNA replication per cell cycle; biallelic GMNN mutations cause Meier-Gorlin syndrome 6.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - cell-cycle
  - dna-replication
  - development
aliases: [GMNN, Geminin DNA replication inhibitor, GL112]
---

# Geminin

## Overview

Geminin is a small (~209-residue) nuclear protein and the most important
"licensing re-licensing inhibitor" (SRI) of the eukaryotic cell cycle. It
enforces the rule that DNA is replicated **once, and only once, per cell
cycle**: it is present throughout S phase, G2, and mitosis, and it is destroyed
abruptly at the metaphase–anaphase transition, so the licensing machinery is
free to reload only after the cell has divided.

> [!warning] Name collision with a morphogen
> "Geminin" here is the DNA replication inhibitor encoded by *GMNN*. It is
> unrelated to the BMP-family signalling molecule "geminin" described in
> *Xenopus* embryology, and also unrelated to **GLMN** (glomulin), an E3
> ubiquitin-ligase adaptor that binds [[FKBP12]].

## Structure and domains

Geminin is a homotetramer. It is built from tandem, structurally similar
tiers — each tier is a helical bundle with an N-terminal α-helix, a
coiled-coil dimerisation segment, and a C-terminal α-helix, arranged in a
pseudo-two-fold-symmetric dome.

- **Coiled-coil dimerisation segment** (~residues 100–151) — the unusual
  parallel coiled-coil is the tetramerisation interface. It contains atypical
  residues (notably a buried histidine) that make the parallel orientation
  possible, and displays a characteristic negatively charged surface formed by
  an array of glutamate residues.
- **Two bipartite CDK1-phosphorylation sites** (~residues 157–161 and
  ~residues 193–197) — phosphorylation by CDK1 in mitosis adds negative
  charge and destabilises geminin's CDK1-binding surfaces.
- **CDT1-binding regions.** The negatively charged coiled-coil surface
  contacts the central region of CDT1, and an adjoining region independently
  contacts the N-terminal ~100 residues of CDT1. Both contacts are required
  for replication inhibition — a genuine **bipartite interface**.
- **Hox-binding region** (~residues 170–190) — distinct from the CDT1
  interface; geminin binds a subset of Hox proteins.

## Mechanism of action

> [!info] How geminin blocks licensing
> Replication origins are licensed when the MCM2–7 helicase is loaded onto
> chromatin by ORC, Cdc6, and CDT1. Geminin does not block the enzymes; it
> sequesters CDT1. Geminin forms two complexes with CDT1: a "permissive"
> heterotrimer and an "inhibitory" heterohexamer that prevents MCM loading.
> Recent work indicates geminin acts by **sterically blocking the CDT1–MCM2
> interaction** directly.

Additional inhibitory mechanisms:

- **Chromatin association.** Geminin associates with replication origins
  *in vivo* and blocks licensing there, rather than only acting in solution.
- **HBO1 inhibition.** Geminin inhibits the H4-specific histone acetylase
  **HBO1 (KAT7)** in a CDT1-dependent manner. HBO1 acetylase activity is
  required for licensing — an acetylase-defective HBO1 mutant bound at origins
  cannot load MCM — and H4 acetylation at origins is maximal at G1/S.
  Geminin therefore blocks licensing by two convergent routes: CDT1
  sequestration and inhibition of the chromatin-opening step licensing
  depends on.
- **IDAS/Geminin nuclear targeting.** Geminin is largely cytoplasmic with a
  nuclear fraction. The protein **IDAS** (MCIDAS) binds geminin through
  coiled-coil regions and targets it to the nucleus; the GMNN–MCIDAS heterodimer
  has much lower affinity for CDT1 than the geminin homotetramer, so IDAS
  effectively titrates geminin down.
- **LRWD1.** Geminin interacts with LRWD1 from G1/S through mitosis.

## Cell-cycle regulation

- **Synthesis and accumulation.** Geminin protein accumulates during S phase
  and G2 and persists through mitosis.
- **Destruction.** Geminin is degraded by the APC/C^CDH1 ubiquitin ligase at
  the metaphase–anaphase transition. This is the pivotal event: its removal
  allows origin relicensing during late mitosis and G1.
- **Phosphorylation.** CDK1 phosphorylation during mitosis increases geminin's
  affinity for Hox proteins and strengthens its inhibition of Hox
  transcriptional activity. CK2 phosphorylation at Ser184 has the same
  effect.
- **Transcriptional control.** Geminin inhibits the transcriptional activity
  of a subset of Hox proteins (affinity increasing from anterior HOXB1-type to
  posterior HOXC9/HOXD10-type), recruiting them into cell-cycle proliferative
  control — a non-replication function.

> [!warning] Quiescent cells behave counterintuitively
> A replication inhibitor would be expected to be *high* in quiescent (G0)
> cells, which are not replicating. It is not: quiescent cells actively
> suppress geminin transcription so that the MCM complex can be pre-loaded onto
  chromatin, so that DNA replication can begin immediately upon re-entry.
> Ectopic geminin expression in quiescent cells blocks MCM re-acquisition and
  prevents cell-cycle re-entry. Suppression of geminin in quiescence is
  achieved through APC/C^CDH1 activity.

## Pathology and clinical relevance

- **Meier-Gorlin syndrome 6 (MGORS6, MIM 616835).** Biallelic *GMNN* variants
  cause a form of Meier-Gorlin syndrome: bilateral microtia, patellar
  aplasia/hypoplasia, severe intrauterine and postnatal growth retardation
  with short stature and poor weight gain, plus variable cranial suture
  anomalies, microcephaly, low-set or simple ears, microstomia, full or
  high-arched palate, micrognathia, genitourinary anomalies, and skeletal
  anomalies. Intellect is usually normal. The disease is notable for placing
  DNA replication licensing squarely in human Mendelian genetics, alongside
  *ORC1*, *ORC4*, *ORC6*, *CDC6*, and *CDT1*.
- **Cancer.** Geminin overexpression is reported in a range of tumours —
  breast, ovarian, cervical, and others — and high geminin levels correlate
  with proliferation and poor prognosis. Mechanistically it has been linked to
  FoxO3 deacetylation and metastatic programmes in breast cancer, to
  EGFR–PI3K/Aurora A dual signalling in ovarian cancer, and to USP7/DUB3-dependent
  de-ubiquitination that stabilises geminin. Its prognostic value is
  best regarded as a marker of replication licensing capacity rather than as a
  validated therapeutic target.
- **Prognostic use.** Quantification of geminin mRNA has been proposed as a
  adjunct in low-grade cervical squamous intraepithelial lesions alongside
  HPV genotyping.

## Documents

- [[_document_ - Cellular Mechanisms and Regulation of Quiescence|Cellular Mechanisms and Regulation of Quiescence]] — geminin acts as a repressor blocking MCM loading onto chromatin (Xouri et al., 2004); quiescent cells suppress geminin via APC/C^CDH1 so that MCM can be pre-loaded and DNA replication can resume promptly on re-entry.

## Connections

- [[Chromatin]] — geminin's inhibitory effect is exerted at chromatin: it binds replication origins and blocks MCM2–7 loading there, and via HBO1 it blocks the origin histone acetylation that licensing requires.
- [[Cell Cycle]] — geminin is the molecular embodiment of the once-per-cycle replication rule, present in S/G2/M and destroyed at metaphase–anaphase.
- [[S Phase]] — geminin accumulates during S phase and blocks relicensing throughout S, G2, and mitosis.
- [[DNA Replication]] — geminin is the direct brake on replication licensing; its removal at mitotic exit is what makes the next round possible.
- [[Quiescence]] — quiescent cells actively suppress geminin so MCM is pre-loaded on chromatin and re-entry is rapid; this is the opposite of the naive expectation.
- [[FKBP12]] — the only documented geminin-interacting partner is GLMN (glomulin), an E3 ligase adaptor whose FKBP12 binding is displaced by rapamycin and FK506; a naming collision, not a functional one.
- [[Mitosis]] — CDK1 and CK2 phosphorylation during mitosis tunes geminin's Hox binding, and APC/C^CDH1-mediated destruction at metaphase–anaphase is the switch that licenses the next cycle.

## Linking Summary

- New links added: [[Quiescence]], [[Mitosis]], [[DNA Replication]], [[Cell Cycle]], [[FKBP12]]
- Suggested notes to create: [[GMNN]], [[CDT1]], [[MCM2–7]], [[Mini-Chromosome Maintenance Complex]], [[Cdc6]], [[Origin licensing]], [[Pre-replication complex]], [[IDAS]], [[LRWD1]], [[HBO1]], [[KAT7]], [[Hox]], [[USP7]], [[Meier-Gorlin syndrome]], [[CDC45]], [[Glomulin]], [[Chromatin acetyltransferase]], [[Meier-Gorlin syndrome 6]] — removed as already existing: APC-C, CDH1
- Strong connections to strengthen: [[Geminin]] ↔ [[CDT1]] ↔ [[MCM2–7]], [[Geminin]] ↔ [[Quiescence]], [[Geminin]] ↔ [[S Phase]] ↔ [[Mitosis]]