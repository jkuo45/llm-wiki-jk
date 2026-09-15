---
title: RIPK3
description: 'Overview: RIPK3 is a cellular protein with structural, signaling, or regulatory functions in eukaryotic cells. It participates in macromolecular complexes and signaling networks that govern cel...'
protected: true
created: 2026-07-04
updated: 2026-09-14
tags:
  - protein
aliases: [Receptor-Interacting Serine/Threonine-Protein Kinase 3]

---

# RIPK3

**RIPK3** (receptor-interacting serine/threonine-protein kinase 3) is the obligatory kinase of [[Necroptosis]]. Recruited by [[RIPK1]] via RHIM-domain amyloid-like assembly (or by TRIF/[[ZBP1]] in non-classical necrosomes), it phosphorylates [[MLKL]] to drive membrane-pore formation and lytic death. Overexpression or inducible dimerization of [[RIPK3]] alone suffices for [[MLKL]]-dependent death without [[RIPK1]].

> [!info]
> Source: [[_document_ - Necroptosis a regulated inflammatory mode of cell death|Dhuriya & Sharma 2018]]
> Key phospho-sites: Ser204 (mouse; Ser199 human; S204A blocks death), Ser232 (MLKL-recruitment surface, not kinase activity), Ser227 (permissive MLKL-binding conformation). Kinase-dead truncations form amyloid fibrils; phosphorylation gates RHIM necrosome assembly. Beyond death, [[RIPK3]] scaffolds inflammasome activation (caspase-8 and [[NLRP3]] arms → IL-1β maturation), drives antibacterial/antiviral defense (Yersinia, M. tuberculosis, MCMV/HCMV evasion targets), and is upregulated in liver injury, atherosclerosis, I/R, and neurodegeneration (ALS SOD1-G93A, PD, MS, SCI).

> [!info]
> Source: [[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026]]
> RIPK3 activation is dominated by RHIM-mediated engagement from [[RIPK1]], [[ZBP1]], or [[TRIF]], but is supplemented by context-specific regulators: [[RSK3]] phosphorylates RIPK3 to promote death in ischemic retinal injury, whereas [[CSNK1G2]] binds and inhibits RIPK3 (linked to male reproductive aging). Some pathogens bypass RHIM entirely — severe fever with thrombocytopenia syndrome virus NSs binds the RIPK3 kinase domain to promote autophosphorylation. RIPK3 also phosphorylates [[CaMKII]] (mitochondrial dysfunction in myocardial I/R, heart failure, neurological injury) and [[PGAM5]] (Drp1-driven fission) beyond [[MLKL]] and the [[Pyruvate Dehydrogenase]] complex.

## Metabolic regulation

Beyond [[MLKL]] phosphorylation, [[RIPK3]] is a metabolic regulator: it activates [[PYGL]], [[GLUL]], and [[GLUD1]], and directly phosphorylates the [[Pyruvate Dehydrogenase]] complex (E3 subunit, Thr135) to increase aerobic respiration and mitochondrial [[ROS]]. This respiratory arm feeds back on the necrosome, so blocking [[Pyruvate]] uptake via the [[MPC]] (e.g. with [[UK5099]]) suppresses TNF-induced [[Necroptosis]] (Yang et al., *Nat Cell Biol* 2018).

## Documents

- [[_document_ - Necroptosis a regulated inflammatory mode of cell death|Dhuriya & Sharma 2018 J Neuroinflammation review]]
  - Sufficiency by overexpression/dimerization; phospho-site map (Ser204/227/232); inflammasome scaffolding; infection and neurodegeneration roles.
- [[_document_ - RIP3 targets pyruvate dehydrogenase complex to increase aerobic respiration in TNF-induced necroptosis|Yang et al. 2018 — RIP3 targets PDC to increase aerobic respiration in TNF-induced necroptosis]]
  - RIPK3 phosphorylates PDC-E3 at Thr135 to drive aerobic respiration and mitochondrial ROS that reinforce the necrosome.
- [[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026 Front Immunol]]
  - RHIM-mediated activation by RIPK1/ZBP1/TRIF plus context-specific regulators (RSK3, CSNK1G2) and pathogen bypass (SFTSV NSs); non-MLKL substrates CaMKII, PDC, and PGAM5.

#

## Connections
- [[RIPK3]] — related entity
- [[Pyruvate Dehydrogenase]] — RIPK3 substrate (E3 Thr135); couples RIPK3 to aerobic respiration and ROS
- [[Necroptosis]] — death program driven by RIPK3-dependent necrosome assembly and metabolic amplification
- [[MLKL]] — downstream effector also required for RIPK3 access to mitochondria-localized PDC

## Linking Summary
- New links added: [[RIPK3]], [[Pyruvate Dehydrogenase]], [[Necroptosis]], [[MLKL]], [[Pyruvate]], [[MPC]], [[UK5099]], [[ROS]], [[PYGL]], [[GLUL]], [[GLUD1]]
  - Strong connections to strengthen: [[RIPK3]] ↔ [[Pyruvate Dehydrogenase]] ↔ [[Necroptosis]]
- Suggested new entity notes to create: [[PYGL]], [[GLUL]], [[GLUD1]]
- Source enrichment (2026-09-14): [[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026]] — context-specific RIPK3 regulators (RSK3, CSNK1G2, SFTSV NSs) and non-MLKL substrates (CaMKII, PDC, PGAM5). New links: [[RSK3]], [[CSNK1G2]], [[CaMKII]], [[PGAM5]], [[TRIF]].

