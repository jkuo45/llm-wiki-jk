---
title: "Senescence and the SASP: many therapeutic avenues"
source: "https://doi.org/10.1101/gad.343129.120"
authors:
  - name: Jodie Birch
    affiliation: MRC London Institute of Medical Sciences (LMS), London, United Kingdom; Institute of Clinical Sciences, Faculty of Medicine, Imperial College London, London, United Kingdom
  - name: Jesús Gil
    affiliation: MRC London Institute of Medical Sciences (LMS), London, United Kingdom; Institute of Clinical Sciences, Faculty of Medicine, Imperial College London, London, United Kingdom
    correspondence: "jesus.gil@imperial.ac.uk"
published: 2020-12-01
created: 2026-09-15
description: Genes & Development review of SASP regulation and the therapeutic potential of SASP modulation (senomorphics) alongside senolytics, including the SASP-induction scheme (Figure 2) that enumerates the sensors, intracellular signalling components and transcription factors driving the secretome.
tags:
  - document
  - senescence
  - sasp
  - inflammation
  - senolytics
  - senomorphics
  - aging
  - cancer
---

The review summarises how the [[SASP|senescence-associated secretory phenotype]] is regulated and what its functions are, then argues that SASP-centred interventions (senomorphics) are a viable complement or alternative to selectively killing [[Senescent Cells|senescent cells]] (senolytics). Its Figure 2 — the SASP-induction scheme — is the reference figure for this note and is the basis of the companion interactive model and the triples extracted below.

> [!info] Scope of this note
> The vault ingested the **figure**, not the full article text. What follows documents Figure 2 and the regulatory content it encodes, drawing on the review's own text where it bears directly on the figure. It is not a complete transcription of the review.

## Figure 2 — Regulation of the SASP

> [!quote] Figure caption (verbatim)
> Regulation of the senescence-associated secretory phenotype (SASP). Scheme showing the different factors contributing to SASP induction. Transcription factors are shown in yellow. Intracellular signaling components are shown in orange. Sensors and receptors and ligands are shown in red. (DSB) Double-strand breaks, (CCF) chromatin cytoplasmic foci.

The scheme is organised by **molecular class** rather than by compartment: yellow nodes are transcription factors, orange nodes are intracellular signalling components, and red nodes are sensors, receptors and ligands. Spatially it is divided into cytoplasm (upper) and nucleus (lower), but that division carries mechanistic meaning at only a few steps — most importantly the release of [[Cytoplasmic Chromatin Fragments|CCF]] from the nucleus for sensing in the cytosol, and the split between nuclear transcription and cytosolic transcript stabilization.

## Damage sensing

The review's central claim is that senescent cells have co-opted innate immune machinery to sense macromolecular damage and convert it into secretion:

- **Double-strand breaks and the DDR.** Unrepaired double-strand breaks (DSBs) sustain the [[DNA Damage Response|DNA damage response]], which is required for induction of several pro-inflammatory SASP factors including [[IL-6]] and [[IL-8]]. Persistent DDR also promotes CCF formation.
- **Chromatin cytoplasmic foci.** CCFs originate from blebbing of the nuclear membrane, linked to autophagy-mediated degradation of [[Lamin B1]]. Together with [[Mitochondrial DNA|mtDNA]] and retrotransposon-derived DNA ([[LINE-1]]), they constitute the [[Cytosol|cytosolic]] DNA pool sensed by [[cGAS]], which produces cGAMP to activate [[STING]].
- **RNA sensing.** [[RIG-I]], a sensor for cytosolic RNA, mediates senescence-associated [[Inflammation|inflammation]] — the figure routes the RNA-sensing arm in parallel with the DNA-sensing arm.
- **Inflammasome and TLR priming.** The [[Inflammasome]] is a major mediator of SASP induction, with [[NLRP3 Inflammasome|NLRP3]] at least partly responsible. In oncogene-induced senescence, [[TLR2]] priming by the acute-phase serum amyloids [[SAA1]] and [[SAA2]] triggers inflammasome activation, and other DAMPs including [[HMGB1]] activate TLR signalling to induce the SASP.

## Signalling to express the SASP

- **cGAS–STING → TBK1 → IRF3/NF-κB.** [[STING]] activation recruits [[TBK1]], downstream of which [[IRF3]] and [[NF-κB]] are activated to induce [[Type I Interferon|type I interferons]] and inflammatory responses.
- **p38 MAPK and MAPKAPK2.** Activation of [[p38 MAPK]] promotes the SASP by activating [[NF-κB]]; p38 signalling also stabilises SASP transcripts through [[MAPKAPK2]], a post-transcriptional control layer distinct from transcriptional activation.
- **mTOR.** [[mTOR]] is a further regulator of SASP expression, drawn in the figure feeding the mRNA-stabilization arm.
- **Metabolic inputs.** Altered [[NAD+]]/NADH ratios influence the SASP via [[AMPK]]-mediated signalling, and [[NAMPT]] activity — which salvages NAD⁺ — promotes a "high" pro-inflammatory SASP in oncogene-induced senescence by enhancing glycolysis and mitochondrial respiration.
- **Receptor and autocrine loops.** Secreted [[IL-6]] acts on [[IL-6R]] and [[IL-1β]]/[[IL-1α]] act on [[IL-1R]], engaging [[JAK-STAT Signaling|JAK–STAT]] and [[IRAK1]] signalling to reinforce the programme.

## Transcriptional control

The inflammatory SASP is regulated by two principal transcription factors, [[NF-κB]] and [[CEBPβ|C/EBPβ]]; loss of both reduces [[IL-8]] and other CXCR2 ligands. Additional inputs in the figure:

- [[GATA4]] stabilisation connects the DDR to NF-κB activation.
- The JAK–STAT pathway regulates SASP expression.
- [[Notch]] restrains the later pro-inflammatory SASP: NOTCH1-driven inhibition is mediated by repression of C/EBPβ transcriptional activity, and the released Notch intracellular domain ([[Notch|N1ICD]]) is the active species.
- **Chromatin and splicing.** The figure groups [[HMGA1]], [[MLL1]] and [[BRD4]] as epigenetic regulators of SASP loci, and groups N1ICD/[[MAML1]] with [[PTBP1]] under alternative splicing of trafficking genes — i.e. the export machinery the secretome requires.

## Therapeutic framing

> [!important] Senomorphics versus senolytics
> The review's argument is that the SASP is therapeutically tractable in its own right. Because SASP expression depends on identifiable signalling nodes — NF-κB, p38 MAPK, mTOR, JAK–STAT, cGAS–STING — those nodes can be inhibited to suppress the secretome without killing the senescent cell. This is the senomorphic strategy, complementary to senolytic clearance.

## Documents

- [[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications|The senescence-associated secretory phenotype and its physiological and pathological implications]] — companion review covering SASP composition, dynamics, heterogeneity and senomorphic therapy.

## Connections

- [[SASP]] — the subject of the review
- [[Senescence]] — the state that produces the SASP
- [[cGAS-STING Pathway]] — principal DNA-sensing route to the SASP
- [[Inflammasome]] — IL-1β maturation arm
- [[NF-κB]] — principal inflammatory SASP transcription factor
- [[CEBPβ|C/EBPβ]] — co-regulator with NF-κB
- [[Notch]] — temporal restraint of the late SASP
- [[p38 MAPK]] / [[MAPKAPK2]] — post-transcriptional stabilization arm
- [[Senomorphic Therapy]] — the therapeutic strategy the review advocates

## Linking Summary

- New links added: [[SAA1]], [[SAA2]], [[RIG-I]], [[IL-6R]], [[PTBP1]], [[MAML1]], [[Cytoplasmic Chromatin Fragments]], [[DNA Damage Response]]
- Suggested new entity notes to create: [[SAA1]], [[SAA2]]
- Strong connections to strengthen: [[Notch]] ↔ [[SASP]], [[MAPKAPK2]] ↔ [[SASP]], [[IRF3]] ↔ [[Type I Interferon|type I interferon]]
