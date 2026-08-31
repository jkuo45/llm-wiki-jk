---
title: MLKL
description: Mixed lineage kinase domain-like protein (MLKL) — the pseudokinase executor of necroptosis; phosphorylated by RIPK3, it oligomerizes at the plasma membrane to rupture the cell, and doubles as a trigger of NLRP3 inflammasome activation.
protected: false
created: 2026-08-29
updated: 2026-08-29
tags:
  - protein
  - cell-death
  - necroptosis
  - inflammation
url: #
source: #
aliases:
  - Mixed lineage kinase domain-like protein
  - Mixed Lineage Kinase Domain-Like
---

# MLKL

**MLKL** (mixed lineage kinase domain-like protein) is the terminal executor of [[Necroptosis]]. It is a pseudokinase — it binds but does not hydrolyze ATP — whose job is not signaling but membrane disruption. When [[Caspase-8]] is inhibited or absent, [[RIPK1]] recruits and activates [[RIPK3]], which phosphorylates MLKL; phosphorylated MLKL oligomerizes and translocates to the plasma membrane, where its four-helix bundle domains form cation channels that rupture the cell and release damage-associated molecular patterns (DAMPs).

## Mechanism of action

- **Activation**: RIPK3 phosphorylates MLKL's activation loop (human Thr357/Ser358), exposing the N-terminal four-helix bundle.
- **Execution**: MLKL oligomers traffic to the plasma membrane (with phosphatidylinositol phosphate binding) and form pores → osmotic swelling, membrane rupture, DAMP release → inflammatory cleanup, or — if uncontrolled — chronic inflammation driving cancer, Alzheimer's, parkinsonism, multiple sclerosis, pulmonary, liver, enteric, and cardiac disease.
- **Inhibitors**: necrosulfonamide (also an indirect [[Gasdermin D|GSDMD]] inhibitor — see below), plus upstream RIPK1 (necrostatin-1) and RIPK3 (GSK872, HS-1371) blockers.

> [!important]
> MLKL is a cell-fate switch, not just an endpoint: its pore-forming K⁺ efflux activates the [[NLRP3]] [[Inflammasome]] (RIPK3/MLKL/NLRP3 axis), linking necroptosis to [[Pyroptosis]]; MLKL intracellular membrane association attenuates [[Autophagy]]; and MLKL-driven membrane-lipid demands make necroptosis and [[Ferroptosis]] mutually alternative via ACSL4-dependent PUFA composition.

## Crosstalk roles (Eskander et al., 2025)

- **Necroptosis → pyroptosis**: MLKL pore formation triggers K⁺ efflux that activates the NLRP3 inflammasome.
- **Necroptosis → autophagy**: activated MLKL translocating to intracellular membranes inhibits autophagic flux.
- **Necroptosis ↔ ferroptosis**: MLKL may deplete membrane PUFA (halting ferroptosis), while [[ACSL4]] overexpression makes membranes refractory to MLKL pores — ACSL4 knockdown inhibits ferroptosis and activates necroptosis (acute kidney failure model).
- **Therapeutic overlap**: necrosulfonamide blocks both MLKL and GSDMD pore formation.

## Documents

- [[_document_ - crosstalk_cell_death_mechanisms_s41420-025-02328-9|Crosstalk Among Cell Death Mechanisms (Eskander et al. 2025)]]
  - MLKL as the necroptosis executor and the crosstalk hub linking necroptosis to pyroptosis (K⁺ efflux → NLRP3), autophagy inhibition, and ferroptosis via membrane-lipid composition.

## Connections

- [[RIPK3]] — phosphorylates and activates MLKL; the necrosome's output kinase
- [[RIPK1]] — recruits RIPK3; its kinase activity drives TNF-induced necroptosis
- [[Caspase-8]] — active caspase-8 cleaves RIPK1/RIPK3, preventing MLKL activation; caspase-8 inhibition flips fate to necroptosis
- [[NLRP3]] — MLKL-mediated K⁺ efflux activates the inflammasome, bridging necroptosis to pyroptosis
- [[Pyroptosis]] — the inflammatory lytic death MLKL can secondarily trigger
- [[ACSL4]] — membrane PUFA composition determines MLKL pore susceptibility (necroptosis↔ferroptosis switch)
- [[Autophagy]] — inhibited by MLKL's intracellular membrane association
- [[TNFα]] — the canonical death-ligand stimulus upstream of the TNFR1 necroptosis pathway
- [[Inflammation]] — DAMP release from MLKL-driven rupture fuels inflammatory disease
- [[Sirtuin-Caspase Crosstalk]] — MLKL extends the caspase→regulator network as the non-caspase lytic-death executor

## Linking Summary

- New links added: [[RIPK3]], [[RIPK1]], [[Caspase-8]], [[NLRP3]], [[Pyroptosis]], [[ACSL4]], [[Autophagy]], [[TNFα]], [[Inflammation]], [[Inflammasome]], [[Ferroptosis]], [[Necroptosis]], [[Sirtuin-Caspase Crosstalk]]
- Suggested new entity notes to create: [[DAMPs]], [[necrosome]], [[PANoptosis]]
- Strong connections to strengthen: [[MLKL]] ↔ [[RIPK3]], [[MLKL]] ↔ [[NLRP3]], [[MLKL]] ↔ [[ACSL4]]
