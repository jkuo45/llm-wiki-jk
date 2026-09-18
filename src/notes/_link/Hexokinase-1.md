---
title: Hexokinase-1
description: Hexokinase-1 (HK1) is the neuronal glycolytic gate whose PAR binding
  and VDAC dissociation couples PARP1 hyperactivation to glycolytic collapse in parthanatos.
protected: false
created: 2026-09-08
updated: 2026-09-14
tags: [enzyme, glycolysis, parthanatos, bioenergetics]
url: #
source: #
aliases: [HK1, HK-1, Brain Hexokinase]
---

# Hexokinase-1

**Hexokinase-1** (HK1, gene *HK1*) catalyzes the first regulatory step of [[Glycolysis]]: ATP-dependent phosphorylation of glucose to glucose-6-phosphate, feeding glycolysis and the pentose phosphate pathway (PPP → NADPH/GSH). It docks to outer-mitochondrial [[VDAC]], coupling cytosolic glycolysis to oxidative phosphorylation. In [[Parthanatos]], free [[PAR]] chains bind HK1 via its PAR-binding motif (PBM), inhibit catalysis, and drive VDAC dissociation → cytosolic translocation with activity loss.

> [!info] HK1 in one sentence
> Nuclear [[PARP1]] hyperactivation → cytosolic [[PAR]] → PBM-mediated HK1 inhibition + release from [[VDAC]] → glycolysis/PPP block → ATP + NADPH/GSH fall → mitochondrial failure.

## Overview

- ~100 kDa, N-terminal hydrophobic helix anchors to [[VDAC]]; VDAC-bound HK1 preferentially uses mitochondrial ATP and stabilizes membrane potential.
- PBM identified by Gagné et al. 2008 MS; validated functionally: purified [[PAR]] directly inhibits HK activity in neuronal/glioblastoma lysates while PARG-predigested PAR does not (Andrabi et al. 2014; Fouquerel et al. 2014).
- Kinetics: HK activity falls ~15 min post-MNNG — coincident with glycolytic (ECAR) defect but *before* [[NAD+]] depletion; total HK protein unchanged; PARP inhibition (DPQ) or PARG manipulation rescues activity.
- PBM requirement: PBM-mutant HK1 (pbmHK-1) resists PAR inhibition; overexpression of WT-HK1 partially rescues, pbmHK-1 rescues more fully in oxygen-glucose deprivation neurons (2024 FASEB J study) — decisive evidence for direct binding model.
- Localization arm: MNNG triggers HK1 mitochondria→cytosol mobilization with activity loss (Fouquerel 2014); release alone lowers activity (Saraiva 2010) and membrane potential, sensitizing to TNF/BAX death (Ullu 2002).
- PPP corollary: HK1 block starves glucose-6-phosphate → NADPH/GSH depletion (Hossain et al. 2024) — redox collapse as lethal output alongside ATP loss.
- Isoform note: [[Hexokinase 2]] is the cancer/HIF-1α isoform; HK1 is the neuronal/housekeeping parthanatos target. Do not conflate.

## Documents

List of documents that mention this entity

- [[_document_ - Parthanatos David 2009 messenger of death|David et al. 2009 Front Biosci]]
  - Early PAR-not-NAD+ framing; HK as candidate PAR-effector context.
- Task synthesis: `task_output_parthanatos_open_questions_08_Sep_2026.md`
  - Q2–Q3 determinants: pyruvate bypass, PBM evidence, PARG paradox, PPP/GSH arm.
- [[_document_ - Parthanatos Moura 2024 molecular mechanisms more questions than answers|Moura et al. 2024 Genet Mol Biol]]
  - Frames "how do free PAR chains inhibit hexokinase" as an open question and contrasts the PAR–HK1 block with the NAD+-centric model; notes the PPP/[[NADPH]]/[[Glutathione]] corollary.

## Connections

- [[Parthanatos]] — HK1 inhibition is the bioenergetic hit of the cytosolic dual-hit model.
- [[PAR]] — direct ligand; chain length/complexity scales toxicity.
- [[PARP1]] — upstream writer generating the inhibitory PAR signal.
- [[PARG]] — generates (endo) and destroys (exo) the free-PAR inhibitor; KD vs overexpression paradox.
- [[VDAC]] — mitochondrial anchor; dissociation couples glycolysis to OXPHOS failure.
- [[Glycolysis]] — pathway gated at its first step.
- [[NAD+]] — HK block precedes and is independent of NAD+ loss (FK866/NR controls).
- [[Apoptosis-Inducing Factor|AIF]] — parallel death arm; hypothesized AIF–HK interaction untested.
- [[Hexokinase 2]] — paralog; cancer isoform, distinct regulation.

## Linking Summary

- New note in src/notes/_link/ resolving orphan [[Hexokinase-1]] links from [[Parthanatos]] and [[PAR]].
- New links added: [[Glycolysis]], [[VDAC]], [[PAR]], [[PARP1]], [[PARG]], [[NAD+]], [[Apoptosis-Inducing Factor|AIF]], [[Hexokinase 2]], [[Parthanatos]].
- Suggested new entity notes to create: none (VDAC stub if orphan audit flags it).
- Strong connections to strengthen: [[Hexokinase-1]] ↔ [[PAR]], [[Hexokinase-1]] ↔ [[Parthanatos]], [[Hexokinase-1]] ↔ [[VDAC]].
- Source enrichment (2026-09-14): Moura et al. 2024 — PAR–HK1 inhibition as a core contested mechanism; PPP/[[NADPH]]/[[Glutathione]] redox corollary. New links: [[NADPH]], [[Glutathione]], [[Pentose Phosphate Pathway]].
