---
title: ATF6α
description: ATF6α is the transmembrane bZIP transcription factor of the unfolded protein response arm of ER stress signalling; ER stress triggers its Golgi proteolytic release, after which it drives XBP1 and UPRE-dependent target gene expression.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [protein, transcription-factor, endoplasmic-reticulum-stress, proteostasis, signaling]
aliases: [ATF6, ATF6alpha, Activating Transcription Factor 6 alpha, CREB-LZ, AIbZIP]
---

# ATF6α

**ATF6α** is one of three sensors of the [[Unfolded Protein Response]] (UPR) — the others
being [[IRE1]] and [[PERK]] — and the only one that is an integral membrane protein.
It is a type II transmembrane protein with a C-terminal [[Transcription Factor|bZIP]]
luminal domain, and it is retained at the ER membrane by binding the ER chaperone BiP on
its luminal domain. When misfolded proteins accumulate in the ER lumen, BiP is titrated
off, ATF6α is freed, and trafficks to the Golgi apparatus.

## Mechanism: signalling by proteolytic release

In the Golgi, ATF6α is sequentially cleaved by the site-1 protease (S1P, MBTPS1) and the
site-2 protease (S2P, a rhomboid-like intramembrane protease). The N-terminal cytosolic
fragment is liberated, dimerizes, translocates to the nucleus, and binds the
[[UPRE]] (ER stress response element, a CCAAT/N9-AT-rich consensus) in target promoters.

The principal ATF6α targets are:

- **[[XBP1]]**, whose transcription ATF6α initiates, and which then undergoes its own
  IRE1-dependent splicing to become the potent UPR transcriptional activator. ATF6α is
  therefore upstream of, and required to bootstrap, the XBP1 branch.
- **Chaperones and ERAD components** — BiP, calreticulin, calnexin, EDEM1, PDI — i.e.
  the load-bearing arms of [[Proteostasis]].
- **Lipid synthesis and ER biogenesis** enzymes, and glycosylation and vesicular
  trafficking genes.

Because XBP1 induces itself and then amplifies the response, the early ATF6α wave is
transient: it is permissive, and the sustained UPR transcriptional output comes from
spliced XBP1, which the literature calls the "XBP1 arm" proper.

> [!info] The non-canonical, apoptotic ATF6 isoform
> A second isoform, ATF6β, arises from alternative splicing within the transmembrane
> domain; it is constitutively present in the plasma membrane and, without ER-stress
> cleavage, can act pro-apoptotically. The α/β switch is a genuine, if less studied,
> branch point — evidence here is thinner than for the canonical α arm.

## Physiological and pathological relevance

- **Ischaemia–reperfusion and cardiac stress.** ATF6α signalling in cardiomyocytes has
  been reported to be protective in a GRP78/BiP-dependent manner.
- **Liver.** ATF6α is required for hepatic lipid metabolism and is a target of the
  [[Autophagy]]/ER-stress cross-talk in hepatocytes.
- **Neurons.** In the brain, ATF6α (and its downstream [[TFEB]]-related output) is
  implicated in the lysosomal biogenesis response to proteotoxic stress.
- **The [[UPRmt]] pathway is separate.** ATF6α is an ER-pathway factor; mitochondrial
  stress signalling runs through the distinct ATF4/ATF5 branch.

> [!warning] Direction of effect depends on intensity and duration
> Prolonged ATF6α activation without resolution of the ER stress is associated with
> pro-apoptotic outcomes in several models. "More ATF6α = more protection" is an
> oversimplification.

## Documents

- [[UPRE]] — the ATF6α/XBP1 binding element in ER stress-responsive promoters, including
  that of TFEB; this is the direct DNA-level output of ATF6α activation.

## Connections

- [[UPRE]] — ATF6α binds this element directly; the element is the readout, ATF6α is
  the writer. Any note on ER stress-responsive promoters should link the factor and the
  element.
- [[Unfolded Protein Response]] — ATF6α is one of three arms; describing the UPR without
  naming the arms (IRE1-XBP1, PERK-eIF2α-ATF4, ATF6α) loses the structure.
- [[XBP1]] — ATF6α transcriptionally initiates the XBP1 branch, which then becomes
  self-sustaining; the two are sequential rather than parallel.
- [[IRE1]] — the sibling arm acting on the same stress; cross-talk between IRE1-XBP1 and
  ATF6α output is extensive and incompletely resolved.
- [[PERK]] — the third arm, acting via eIF2α/ATF4 to repress translation and induce
  autophagy; shares BiP-based activation logic with ATF6α.
- [[ER Stress]] — the initiating condition for all three arms.

## Linking Summary

- New links added: [[Unfolded Protein Response]], [[IRE1]], [[PERK]], [[XBP1]], [[UPRE]],
  [[Transcription Factor]], [[Proteostasis]], [[UPRmt]], [[TFEB]], [[ER Stress]],
  [[Ischemia-reperfusion Injury]], [[Liver]]
- Suggested notes to create: [[Site-1 Protease]], [[Site-2 Protease]], [[ER-associated
  Degradation]], [[ATF6β]], [[MBTPS1]]
- Strong connections to strengthen: [[ATF6α]] ↔ [[XBP1]], [[ATF6α]] ↔ [[UPRE]]
