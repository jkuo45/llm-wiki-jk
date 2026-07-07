---
title: APC-C
description: The Anaphase-Promoting Complex/Cyclosome (APC/C) is a ~1.5 MDa multi-subunit E3 ubiquitin ligase that governs metaphase-to-anaphase transition, mitotic exit, and Mcl-1 degradation during mitotic arrest.
type: entity
created: 2026-07-06
updated: 2026-07-06
tags:
  - enzyme
aliases: []
---

# APC-C

**APC-C** (the Anaphase-Promoting Complex/Cyclosome, also designated APC/C) is a giant ~1.5 MDa multi-subunit E3 [[Ubiquitination|ubiquitin]] ligase complex composed of approximately 16 core proteins. It acts as the master regulator of mitotic progression, governing the metaphase-to-anaphase transition, mitotic exit, and G1 phase stability. By ubiquitinating [[CYCLIN B1]] and [[Securin]], APC-C targets them for [[Proteasome|proteasomal]] degradation, licensing anaphase and mitotic exit. During prolonged mitotic arrest, APC-C also degrades [[Mcl-1]], coupling cell cycle timing to [[Apoptosis|apoptotic]] commitment.

## Structure and Subunit Architecture

APC-C is one of the largest known ubiquitin ligases, with a molecular mass of approximately 1.2–1.5 MDa and a diameter of roughly 20 nm. Cryo-electron microscopy reveals a tri-lobed architecture with a platform, a TPR (tetratricopeptide repeat) lobe, and a catalytic core. The complex comprises approximately 16 subunits:

- **Scaffold/Platform:** APC1 (~200 kDa), APC4, APC5, APC15, and APC16 form the structural backbone.
- **TPR Subunits:** APC3/CDC27, APC6/CDC16, APC7, and APC8/CDC23 mediate substrate recognition and co-activator docking.
- **Catalytic Core:** APC2 (cullin family) and APC11 (RING-H2 finger) recruit the E2 and catalyze ubiquitin transfer.
- **Substrate Recognition:** APC10/DOC1 binds the D-box motif on substrates with the co-activator.

The catalytic mechanism follows the canonical RING E3 paradigm: the E2~Ub conjugate binds the APC2–APC11 module, and the substrate receives ubiquitin directly from the E2.

## Activation by Co-Activators

APC-C is catalytically quiescent in isolation and requires association with one of two related co-activator proteins to achieve full activity:

- **CDC20** (Cell Division Cycle 20): Activates APC-C during metaphase to drive anaphase onset. APC-C-CDC20 preferentially recognizes substrates containing a D-box (RxxLxxxxN) or KEN-box motif.
- **CDH1** (also known as FZR1): Replaces CDC20 after anaphase and sustains APC-C activity through late mitosis and G1. CDH1 confers broader substrate specificity and targets mitotic cyclins, CDC20 itself, and other cell-cycle regulators for continued degradation.

Both co-activators bind the TPR subunits of APC-C and engage APC10/DOC1 to assemble the substrate-recognition platform. The switch from CDC20 to CDH1 is driven by CDC20 autodegradation and [[CDK1]] inactivation.

## Regulation by the Spindle Assembly Checkpoint

APC-C-CDC20 is the principal target of the spindle assembly checkpoint (SAC), a surveillance mechanism that ensures accurate chromosome segregation. In early mitosis, unattached kinetochores catalyze the assembly of the mitotic checkpoint complex (MCC), composed of [[MAD2]], [[BUBR1]], and [[BUB3]], which binds and sequesters CDC20. This prevents premature APC-C activation until all kinetochores are properly attached to spindle [[Microtubule|microtubules]] under tension.

Once the SAC is satisfied, the MCC disassembles, releasing CDC20 to activate APC-C. The first wave of ubiquitination targets [[Securin]] and [[CYCLIN B1]]: securin degradation activates separase to cleave cohesin rings, triggering anaphase, while cyclin B1 degradation inactivates [[CDK1]], allowing mitotic exit. CDC20 is then itself ubiquitinated by active APC-C-CDH1 and degraded, completing the switch.

Additional regulation includes [[Phosphorylation|phosphorylation]] of APC-C subunits by [[CDK1]]-[[CYCLIN B1]] and [[PLK1]], and by [[MAPK]] and [[PKA]] under specific conditions.

## Mcl-1 Degradation in Mitotic Arrest

A clinically important function of APC-C emerges during prolonged mitotic arrest. Treatment of cancer cells with [[Microtubule|microtubule]]-targeting agents (MTAs) — including [[Taxane|taxanes]] ([[paclitaxel]], [[docetaxel]]) and [[vinca alkaloids]] ([[Vincristine]], vinblastine) — disrupts spindle formation, keeping the SAC persistently active. In this state, a pool of APC-C-CDC20 retains partial activity and selectively targets [[Mcl-1]] for ubiquitination and proteasomal degradation.

Mcl-1 is a short-lived anti-apoptotic member of the [[Bcl-2 family]]. Its destruction by APC-C-CDC20 removes the apoptotic block, shifting the balance toward [[MOMP]]. This is a key determinant of the anticancer activity of anti-mitotic chemotherapies. Resistance can arise through Mcl-1 overexpression, D-box mutations that prevent APC-C recognition, or deubiquitinase [[USP9X]] upregulation.

The degradation is primed by [[CDK1]]-[[CYCLIN B1]]-mediated [[Phosphorylation|phosphorylation]] of Mcl-1 at Thr92, which creates a phosphodegron recognized by CDC20-bound APC-C. Thus, the same kinase that drives mitotic entry also licenses Mcl-1 destruction, linking cell cycle progression to the apoptotic machinery.

## Connections

- [[CDC20]]: Co-activator that targets APC-C to mitotic substrates including cyclins, securin, and Mcl-1.
- [[CDH1]]: Co-activator that sustains APC-C activity after anaphase and throughout G1.
- [[Mcl-1]]: Degraded by APC-C-CDC20 during prolonged mitotic arrest, coupling cell cycle delay to apoptosis.
- [[CYCLIN B1]]: Canonical APC-C substrate whose degradation drives mitotic exit; its CDK1-mediated phosphorylation of Mcl-1 primes Mcl-1 for APC-C-dependent turnover.
- [[Securin]]: APC-C substrate whose degradation separates sister chromatids at anaphase onset.
- [[Ubiquitination]]: The enzymatic reaction catalyzed by APC-C to target substrates for proteasomal degradation.
- [[Cell Cycle]]: APC-C is the master ubiquitin ligase controlling cell cycle transitions from metaphase through G1.
- [[Mitosis]]: The cell cycle phase in which APC-C executes its primary regulatory and apoptotic functions.
- [[Microtubule]]: Spindle microtubules monitored by the SAC, which gates APC-C-CDC20 activation.
- [[CDK1]]: Phosphorylates APC-C subunits and primes Mcl-1 for APC-C-dependent degradation.
- [[Apoptosis]]: APC-C-mediated Mcl-1 degradation links mitotic arrest to apoptotic cell death.
- [[Taxane]]: Microtubule-stabilizing drugs that induce mitotic arrest and APC-C-dependent Mcl-1 degradation.
- [[vinca alkaloids]]: Microtubule-destabilizing drugs that engage the APC-C-Mcl-1 apoptosis axis.
- [[Proteasome]]: Degrades ubiquitinated substrates of APC-C.

## Linking Summary
- New links added: [[CDC20]], [[CDH1]], [[Mcl-1]], [[CYCLIN B1]], [[Securin]], [[Ubiquitination]], [[Cell Cycle]], [[Mitosis]], [[Microtubule]], [[CDK1]], [[Apoptosis]], [[Taxane]], [[vinca alkaloids]], [[paclitaxel]], [[docetaxel]], [[Vincristine]], [[Bcl-2 family]], [[Proteasome]], [[MAD2]], [[BUBR1]], [[BUB3]], [[PLK1]], [[MAPK]], [[PKA]], [[USP9X]], [[MOMP]]
- Suggested new entity notes to create: [[CDH1]], [[Securin]], [[Cell Cycle]], [[Mitosis]], [[MAD2]], [[BUBR1]], [[BUB3]], [[Proteasome]], [[PLK1]], [[MOMP]]
- Strong connections to strengthen: [[APC-C]] ↔ [[CDC20]], [[APC-C]] ↔ [[Mcl-1]], [[APC-C]] ↔ [[CYCLIN B1]], [[APC-C]] ↔ [[CDH1]]
