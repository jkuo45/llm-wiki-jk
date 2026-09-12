---
title: RIP3 targets pyruvate dehydrogenase complex to increase aerobic respiration in TNF-induced necroptosis
description: Yang et al. 2018 — RIP3 phosphorylates the PDC-E3 subunit at Thr135 to boost aerobic respiration and mitochondrial ROS, which feed back on the necrosome; blocking mitochondrial pyruvate uptake suppresses TNF-induced necroptosis.
published: 2018-02-01
created: 2026-09-12
source: https://doi.org/10.1038/s41556-017-0022-y
author:
  - Zhentao Yang
  - Yan Wang
  - Yingying Zhang
  - Xiadi He
  - Chuan-Qi Zhong
  - Hengxiao Ni
  - Xin Chen
  - Yaoji Liang
  - Jianfeng Wu
  - Shimin Zhao
  - Dawang Zhou
  - Jiahuai Han
tags:
  - clippings
---

# RIP3 targets pyruvate dehydrogenase complex to increase aerobic respiration in TNF-induced necroptosis (Yang et al. 2018)

Primary mechanistic study (Han laboratory, Xiamen University) placing mitochondrial [[Pyruvate]] oxidation upstream of [[Necroptosis]]. RIP3 was already known as an energy-metabolism regulator that activates [[PYGL]], [[GLUL]], and [[GLUD1]] to raise aerobic respiration and [[ROS]]; this paper identifies the [[Pyruvate Dehydrogenase]] complex (PDC, PDH) as the major driver of that response.

> [!important] Core finding
> [[RIPK3]] directly phosphorylates the PDC-E3 subunit at **Thr135**, increasing PDC catalytic activity, aerobic respiration (oxygen consumption), and mitochondrial [[ROS]]. The resulting ROS feeds back on the necrosome by promoting [[RIPK1]] autophosphorylation and [[RIPK3]] recruitment, forming a self-reinforcing loop that commits the cell to [[Necroptosis]]. [[MLKL]] is required for RIP3 to reach mitochondria-localized PDC.

## Mechanism

- RIP3 activation of aerobic respiration is RIP3-dependent and correlates with oxygen consumption rate, [[ROS]] induction, and necroptosis in several TNF-treated cell types.
- [[Pyruvate Dehydrogenase]] converts [[Pyruvate]] to [[Acetyl-CoA]], the committed step feeding the [[TCA cycle]]; this is the rate-limiting link between [[Glycolysis]] and aerobic respiration.
- RIP3 interacts with PDC and activates it by **phosphorylation of PDC-E3 at Thr135**, a mechanism distinct from canonical PDK-mediated inhibitory phosphorylation.
- Recruitment of [[MLKL]] to the necrosome is needed for RIP3 to enhance respiration, most likely because MLKL enables necrosome translocation to the mitochondria, where RIP3 meets PDC.

## Evidence that mitochondrial pyruvate uptake is required

- **PDC blockade** prevents the TNF-induced increase in respiration, [[ROS]] production, and necroptosis.
- **Pyruvate depletion** and **inhibition of pyruvate transport into mitochondria** also inhibit TNF-induced necroptosis.
- The authors' own commentary states that "depletion of pyruvate, inhibition of pyruvate transport into the mitochondria, or inhibition of pyruvate carrier proteins in the mitochondria can all inhibit TNF-induced necroptosis" (Qiu, Zhang & Han, *Cell Death Differ* 2018, doi:10.1038/s41418-018-0075-x).
- Mechanistic basis for the ROS feedback: mitochondrial ROS oxidize [[RIPK1]] cysteines, promoting RIPK1 autophosphorylation and RIPK3 recruitment into the necrosome (Zhang et al., *Nat Commun* 2017;8:14329).

## Caveats and context-dependence

- **Agent selectivity.** The paper and commentary describe pyruvate depletion and transport inhibition; [[UK5099]] is the standard [[MPC]] tool compound, but its exact use versus genetic MPC knockdown must be checked in the primary methods. UK5099 has documented **MPC-independent** effects on the [[NLRP3]] [[Inflammasome]] and on OXPHOS/glutamate oxidation at higher doses.
- **Pyruvate can act without entering mitochondria.** In hypoxia- and chemotherapy-induced necroptosis of colorectal cancer cells, glucose/pyruvate protection was **not** reversed by UK5099, because cytosolic pyruvate scavenges mitochondrial superoxide non-enzymatically (Huang et al., *Cell Death Dis* 2013;4:e622).
- **Mitochondria are not always required.** Widespread mitochondrial depletion via [[Mitophagy]] does not compromise necroptosis in some models (Tait et al., *Cell Rep* 2013;5:878–885), so the metabolic dependence is cell-type- and stimulus-specific.
- An author correction was issued in 2024 (*Nat Cell Biol* 26:1225, doi:10.1038/s41556-024-01455-2).

## Documents

- Source: [Nat Cell Biol 2018;20(2):186–197](https://doi.org/10.1038/s41556-017-0022-y) — PMID 29358703.

## Connections

- [[Necroptosis]] — Cell-death program promoted by RIP3-driven pyruvate oxidation and mitochondrial ROS.
- [[RIPK3]] — Kinase that phosphorylates PDC-E3 at Thr135 and organizes the necrosome.
- [[RIPK1]] — Autophosphorylated downstream of mitochondrial ROS to reinforce necrosome assembly.
- [[MLKL]] — Required for RIP3 localization to mitochondria-localized PDC.
- [[Pyruvate Dehydrogenase]] — Direct RIP3 substrate; converts pyruvate to acetyl-CoA.
- [[Pyruvate]] — Carbon source whose mitochondrial import is required for the response.
- [[MPC]] — Carrier mediating pyruvate entry; proposed pharmacological target.
- [[UK5099]] — Tool MPC inhibitor; interpret with MPC-independent off-target caution.
- [[TCA cycle]] — Fueled by PDC-derived acetyl-CoA to generate reducing equivalents and ROS.
- [[ROS]] — Mitochondrial by-product that feeds back on the necrosome.

## Linking Summary

- New links added: [[Necroptosis]], [[RIPK3]], [[RIPK1]], [[MLKL]], [[Pyruvate Dehydrogenase]], [[Pyruvate]], [[MPC]], [[UK5099]], [[TCA cycle]], [[ROS]], [[PYGL]], [[GLUL]], [[GLUD1]], [[Glycolysis]], [[Acetyl-CoA]], [[NLRP3]], [[Inflammasome]], [[Mitophagy]]
- Suggested new entity notes to create: [[PYGL]], [[GLUL]], [[GLUD1]]
- Strong connections to strengthen: [[RIPK3]] ↔ [[Pyruvate Dehydrogenase]] ↔ [[Pyruvate]] ↔ [[MPC]]
