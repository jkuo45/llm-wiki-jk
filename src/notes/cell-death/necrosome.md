---
title: necrosome
description: The RIPK1–RIPK3–MLKL signaling complex that executes necroptosis — assembled when caspase-8 is absent or inhibited, converting a death-receptor stimulus into lytic, DAMP-releasing inflammatory cell death.
protected: true
created: 2026-08-29
updated: 2026-09-14
tags:
  - biological-process
  - necroptosis
  - cell-death
  - inflammation
url: #
source: #
aliases:
  - Necrosome complex
  - RIPK1-RIPK3-MLKL complex
---

# necrosome

The **necrosome** is the amyloid-like signaling complex that executes [[Necroptosis]]. It forms at the third branch point of TNFR1 signaling: when the survival arm (complex I → NF-κB) and both apoptotic arms (complex IIa and IIb → [[Caspase-8]]) are unavailable — classically because caspase-8 is absent, inactivated, or pharmacologically or virally inhibited — [[RIPK1]] recruits and phosphorylates [[RIPK3]], which recruits and phosphorylates **[[MLKL]]**.

## Assembly and execution

1. **Nucleation**: RIPK1–RIPK3 interaction via RHIM domains; RIPK3 autophosphorylation and MLKL recruitment.
2. **Anchoring**: [[PGAM5]] anchors the complex at mitochondria and supports the RIPK3–PGAM5–[[DRP1]] fission axis.
3. **Execution**: phosphorylated MLKL oligomerizes, translocates to the plasma membrane, forms cation pores → osmotic rupture and DAMP release.
4. **Alternate assembly**: TRIF–RIPK3 (TLR3/4) and ZBP1/DAI–RIPK3 complexes assemble necrosomes **independently of RIPK1**.

> [!info]
> The necrosome is the output stage of a fate decision, not a starting point — c-FLIP/caspase-8 activity is the rheostat that keeps RIPK1/RIPK3 cleaved and the necrosome from ever forming.

> [!info]
> Source: [[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026]]
> The review details the alternative assemblies: [[TRIF]] binds the RIPK3 RHIM directly downstream of [[TLR3]]/[[TLR4]], and [[ZBP1]] recruits RIPK3 via RHIM—with [[RIPK1]] required as a bridging adaptor in human cells but dispensable/inhibitory in murine cells. Necrosome output is tuned by RHIM-independent regulators ([[RSK3]], [[CSNK1G2]]) and by pathogen proteins (e.g. SFTSV NSs) that activate RIPK3 without RHIM engagement.

> [!info]
> Source: [[_document_ - Necroptosis (2014), Linkermann, Green|Linkermann & Green, NEJM 2014]]
> The necrosome was established (Li et al., *Cell* 2012) as "an intracellular **amyloid-like structure** that acts as the transducer of the necroptotic signal," assembled when [[Caspase-8]] or [[c-FLIP]] is lost or its activation interrupted. Only four RHIM-domain proteins exist in the human genome — RIPK1, RIPK3, [[TRIF]], and [[DAI]] — so the necrosome's RHIM interactome is small and heavily reused: TRIF activates it downstream of Toll-like receptors, DAI integrates viral-RNA-sensor signals, and a JAK/STAT-dependent [[Protein Kinase R]] route (PKR → phosphorylated [[FADD]]) provides an interferon-driven assembly path. Because necrosome assembly is rapid, therapeutic windows in disease are narrow.

## Documents

- [[_document_ - crosstalk_cell_death_mechanisms_s41420-025-02328-9|Crosstalk Among Cell Death Mechanisms (Eskander et al. 2025)]]
  - Necrosome formation as the caspase-8-blocked third choice of TNFR1 signaling, with PGAM5 anchoring and MLKL-driven rupture.
- [[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026 Front Immunol]]
  - TRIF–RIPK3 and ZBP1–RIPK3 alternative necrosome assemblies (species-dependent RIPK1 role); RHIM-independent activation by RSK3/CSNK1G2/pathogen proteins.
- [[_document_ - Necroptosis (2014), Linkermann, Green|Linkermann & Green 2014 NEJM — Necroptosis]]
  - The necrosome as a functional amyloid signaling complex; the four-RHIM-protein genome (RIPK1, RIPK3, DAI, TRIF); TRIF/DAI/PKR assembly routes; rapid-assembly therapeutic-window caveat.

## Connections

- [[RIPK1]] / [[RIPK3]] — the kinase core of the complex
- [[MLKL]] — the phosphorylated executor released to rupture the membrane
- [[PGAM5]] — mitochondrial anchor bridging necrosome to fission
- [[Caspase-8]] / [[c-FLIP]] — the suppressive rheostat whose failure permits assembly
- [[TNFα]] — the canonical initiating ligand (TNFR1)
- [[Necroptosis]] — the death program the necrosome executes
- [[Inflammation]] — DAMP release from necroptotic rupture

## Linking Summary

- New links added: [[RIPK1]], [[RIPK3]], [[MLKL]], [[PGAM5]], [[Caspase-8]], [[c-FLIP]], [[TNFα]], [[Necroptosis]], [[Inflammation]]
- Strong connections to strengthen: [[necrosome]] ↔ [[RIPK3]], [[necrosome]] ↔ [[MLKL]], [[necrosome]] ↔ [[PGAM5]]
- Source enrichment (2026-09-14): [[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Niu et al. 2026]] — TRIF/ZBP1 assemblies and RHIM-independent regulation. New links: [[TRIF]], [[ZBP1]], [[RSK3]], [[CSNK1G2]].
- Source enrichment (2026-09-14): [[_document_ - Necroptosis (2014), Linkermann, Green|Linkermann & Green 2014]] — amyloid-like necrosome structure (Li 2012); four-RHIM-proteins genome (RIPK1, RIPK3, DAI, TRIF); TRIF/DAI/PKR routes; rapid assembly. New links: [[DAI]], [[Protein Kinase R]], [[c-FLIP]], [[JAK-STAT Signaling]].
