---
title: SASP-Remodeling Aminochrome Complex
description: The SASP-Remodeling Aminochrome Complex (SRAC) is a sequential
  senomorphic-senolytic strategy using AMM, methylene blue, rapamycin, fisetin,
  and GlyNAC to reprogram the senescent phenotype and mitigate inflammaging.
created: 2026-07-04
updated: 2026-07-09
tags:
  - scientific-concept
  - senescence
aliases: []
---

# SASP-Remodeling Aminochrome Complex

The **SASP-Remodeling Aminochrome Complex (SRAC)** is a sequential senomorphic-senolytic strategy designed to reprogram the senescent phenotype and mitigate inflammaging. It uses a two-phase protocol: AMM + methylene blue + rapamycin-mediated SASP suppression (Phase 1) followed by fisetin-mediated senescent cell clearance (Phase 2), with GlyNAC as a continuous redox buffer.

> [!warning] Protocol Revision (08–09 July 2026)
> **Two revisions applied:**
> 1. **Nanoparticle delivery removed** — replaced with AMM (adrenochrome monoaminoguanidine, a pre-stabilized complex) + Methylene Blue (mitochondrial self-targeting). No physical targeting vehicle needed.
> 2. **Sequential dosing** — rapamycin and fisetin are administered sequentially, not concurrently, to resolve the senomorphic/senolytic timing conflict.
> See [[task_output_SRAC_revision_log_08_JULY_2026|revision log]] for full rationale.

## Strategy Components
- **Modulator:** [[Adrenochrome monoaminoguanidine|AMM]] (stabilized adrenochrome–aminoguanidine complex; sub-micromolar, intermittent oral dosing). Provides redox trigger + AGE inhibition in a single stable molecule.
- **Amplifier:** [[Methylene blue|MB]] (mitochondrial electron cycler; 0.5–2 mg daily). Self-targets mitochondria via membrane potential; dampens runaway ROS from AMM while maintaining the hormetic signal.
- **Brake:** [[Rapamycin|Rapamycin]] (mTOR inhibitor; 5 mg weekly, **Phase 1 only**).
- **Strike:** [[Fisetin|Fisetin]] (senolytic; intermittent pulses, **Phase 2 only**).
- **Buffer:** [[GlyNAC]] (Glycine + N-Acetylcysteine; daily, **continuous across both phases**).

> [!info] Rapamycin shows a biphasic (hormetic) dose-response
> Cerrillo, Vidakovic & Míguez (2026, *bioRxiv* 2026.04.20.719646) report that rapamycin produces an inverted-U response — maximal efficacy at ~1 nM, with reduced effect at higher concentrations (up to 50 nM), classically attributed to toxicity yet 100–200 nM is well tolerated *in vitro*. Mechanistically, long-term (>24 h) rapamycin traps mTOR in mTORC1, obstructing mTORC2 assembly; it thus acts as both an indirect activator (via PI3K) and indirect inhibitor of mTORC2 — an incoherent bivalent motif that generates the biphasic curve. Implication for SRAC: rapamycin's effect is concentration- and duration-dependent, favoring intermediate, time-limited (Phase 1 only) exposure over high or continuous dosing.

## Mechanism of Action (MOA)

### Phase 1 — Senomorphic Priming (Weeks 1–4)

1. **SASP Suppression:** Rapamycin inhibits mTOR-dependent translation of IL-1α and stabilizes SASP transcripts via the MK2/ZFP36L1 axis, reducing circulating IL-6, IL-8, and MCP-1.
2. **Redox Buffering:** GlyNAC replenishes glutathione reserves, establishing the protective redox buffer before AMM exposure.
3. **Hormetic Priming + AGE Inhibition:** [[Adrenochrome monoaminoguanidine|AMM]] provides a dual-action trigger — the adrenochrome moiety generates a controlled mitochondrial superoxide burst (activating [[NRF2]]/ARE and [[SIRT1]]/[[PGC-1α]]), while the aminoguanidine moiety traps reactive dicarbonyls and inhibits [[Advanced Glycation End Products|AGE]] formation. Co-administration with rapamycin blocks the NF-κB arm of the ROS response, diverting signaling toward a quiescent "senomorphic" state.
4. **Mitochondrial Electron Shunting:** [[Methylene blue|MB]] bypasses damaged Complex I/III, shuttling electrons from NADH directly to Cytochrome c. This prevents runaway ROS amplification from AMM's redox cycling while sustaining ATP production. MB's natural accumulation in mitochondria (membrane potential–driven) provides inherent organellar targeting without nanoparticles.

### Phase 2 — Senolytic Strike (Weeks 5–6, after 1–2 week rapamycin washout)

5. **Selective Senolysis:** [[Fisetin]] exploits the sensitized metabolic state of senescent cells — autophagy-primed, SASP-suppressed, redox-stressed — to induce selective apoptosis via PI3K/Akt and BCL-2 family inhibition.
6. **Continued Buffering:** GlyNAC continues throughout Phase 2 to protect healthy tissue from collateral oxidative stress during senescent cell lysis and debris clearance.

> [!important] Rationale for Sequential Dosing
> Rapamycin suppresses the pro-survival signaling loops that fisetin targets for selective senolysis. Concurrent administration may shield senescent cells from apoptosis. A 1–2 week washout restores the SASP signaling environment that fisetin exploits.

## Selectivity Without Physical Targeting

The SRAC achieves senescent cell selectivity through **three layers of biological selectivity** rather than nanoparticle-mediated physical targeting:

1. **Mitochondrial self-targeting (MB):** Methylene blue naturally accumulates in mitochondria driven by membrane potential. Senescent cells with dysfunctional mitochondria have altered membrane potential, creating differential MB distribution.
2. **Biochemical targeting (AMM):** The aminoguanidine moiety traps reactive dicarbonyls (methylglyoxal, glyoxal) that are elevated in senescent cells due to glycolytic flux and mitochondrial dysfunction.
3. **Metabolic vulnerability:** Senescent cells have elevated ROS, stalled autophagy, and high metabolic demand. The combined AMM + MB redox signal preferentially stresses these already-compromised cells.
4. **SCAP dependence:** Senescent cells depend on BCL-2 family and PI3K/Akt for survival. Fisetin blocks these pathways. Redox stress + SCAP inhibition creates a synthetic lethal interaction specific to senescent cells.
5. **Glutathione differential:** Healthy cells maintain high GSH (supported by GlyNAC). Senescent cells have depleted GSH and cannot buffer the AMM redox pulse, creating a therapeutic window.
6. **Autophagy priming:** Rapamycin in Phase 1 activates autophagy. Autophagy-primed senescent cells may be more susceptible to fisetin-induced apoptosis.

## Expected Outcomes
- Significant reduction in systemic SASP biomarkers (IL-6, IL-1β, MCP-1).
- Reduced AGE accumulation and protein cross-linking (AMM aminoguanidine moiety).
- Improved mitochondrial function (MB electron shuttling).
- Improved tissue regeneration and reduced chronic "inflammaging."
- Selective elimination of high-SASP senescent cells without systemic toxicity.

## Biomarkers for SRAC Monitoring

> [!info] Reference — SASP biomarker framework
> Per [[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications|Wang et al. (2024, Nat Rev Mol Cell Biol)]], SASP products measured at a single time point cannot discriminate beneficial from detrimental senescence, so SRAC should track biomarkers **longitudinally** (pre, end of Phase 1, post-Phase 2, and during washout).

### Primary SRAC readouts (already specified)
- **IL-6, IL-1β, MCP-1 (CCL2)** — direct readouts of rapamycin-mediated SASP suppression in Phase 1.
- **CXCL12** — fisetin-driven vascular-aging response; proposed to personalize the 1–2 week rapamycin washout duration.

### Expanded panel to adopt (from the SASP review)
- **SASP Atlas core set** (combinatorial plasma biomarker of senescence): [[GDF15]], stanniocalin-1, serpin-family proteins, and [[MMP]]s.
- **Mortality-associated 5-factor panel**: GDF15, RAGE, VEGF-A, PARC ([[CCL18]]), and MMP-2 — strongly associated with all-cause mortality and useful as a global senescence-burden index for SRAC.
- **Urine / urinary-EV panel** (non-invasive): IL-6, CCL2, MMP-7, MMP-8 — practical for repeated sampling across the phased protocol.
- **Senolytic efficacy markers** (validated in Dasatinib + Quercetin trials): IL-6, [[MMP-9]], [[GM-CSF]] in plasma — applicable to the Phase 2 fisetin strike.

### Mitochondrial redox-dial biomarker — [[SIRT3-SIRT4 Ratio]]

The [[SIRT3-SIRT4 Ratio]] is a **predictive mitochondrial biomarker** for individual responsiveness to SRAC's own mitohormetic trigger (the AMM adrenochrome moiety + MB electron cycling in Phase 1). It sets the [[Hormetic Window]] for the protocol's redox signal by governing MnSOD (SOD2) activity:

- **SIRT3** deacetylates and activates MnSOD (at Lys68/Lys122), converting superoxide → H₂O₂ for adaptive NRF2/ARE signaling.
- **SIRT4** mono-ADP-ribosylates and inhibits MnSOD, sustaining elevated superoxide.

The ratio therefore determines how the AMM-generated mitochondrial superoxide burst is processed:

- **High ratio (SIRT3 dominant):** Superoxide is rapidly quenched → narrow hormetic window; SRAC's redox priming is well-tolerated but may under-signal for adaptive mitohormesis.
- **Low ratio (SIRT4 dominant):** Superoxide persists → wide hormetic window; greater risk of oxidative damage, SASP flare, or cytokine-storm during senescent-cell lysis.

> [!tip] Use in SRAC
> Because the SRAC redox pulse and the SASP-suppression/readout are both redox-coupled, the [[SIRT3-SIRT4 Ratio]] acts as a **companion biomarker** to the SASP panel: it predicts *who* will tolerate and benefit from AMM/MB dosing, and can personalize the AMM dose and the MB low-end setting (0.5 mg) to keep the signal within each individual's hormetic window. [[Caloric Restriction]] and NAD⁺ precursors ([[NMN]]/[[NR]]) shift the ratio toward SIRT3 dominance, dovetailing with the SRAC redox-buffer logic.

### Mechanistic rationale
The review confirms rapamycin suppresses the SASP through the mTOR → IL-1α → MK2/ZFP36L1 axis and NF-κB, exactly the Phase 1 "brake." Tracking the expanded panel lets SRAC distinguish true SASP remodeling from transient SASP flares during senescent-cell lysis (cytokine-storm risk flagged in the original protocol).

## Connections

- [[Adrenochrome monoaminoguanidine]]: Stabilized adrenochrome–aminoguanidine complex providing the hormetic ROS trigger + AGE inhibition.
- [[Methylene blue]]: Mitochondrial electron cycler amplifying and controlling the redox signal.
- [[Rapamycin]]: mTOR inhibitor suppressing SASP in Phase 1.
- [[Fisetin]]: Senolytic agent exploiting the primed senescent state in Phase 2.
- [[GlyNAC]]: Redox buffer protecting healthy tissue throughout both phases.
- [[NRF2]]: Antioxidant transcription factor activated by AMM hormetic ROS.
- [[SIRT1]]: Deacetylase activated by the redox signal; connects to PGC-1α.
- [[SASP]]: The pro-inflammatory secretome targeted by rapamycin in Phase 1.
- [[Advanced Glycation End Products]]: Inhibited by AMM's aminoguanidine moiety.
- [[Senescence]]: The biological state targeted by the two-phase strategy.
- [[Mitohormetic Redox-Relay]]: Shares MB and redox-hormesis logic with SRAC Phase 1.
- [[Glyco-Oxidative Proteostasis Shield]]: Shares AMM with SRAC; GOPS focuses on glycation/proteostasis while SRAC focuses on senescence/SASP.
- [[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications]]: Authoritative SASP biomarker framework (Wang et al., 2024) underpinning the SRAC monitoring panel.
- [[GDF15]]: Core SASP Atlas marker and mortality-associated panel member; tracks global senescence burden.
- [[MMP-9]]: Senolytic-efficacy marker (Dasatinib+Quercetin trials); applicable to Phase 2 fisetin strike.
- [[GM-CSF]]: Plasma senolytic-efficacy marker per the SASP review.
- [[CCL18]]: PARC — mortality-associated 5-factor panel member.
- [[CXCL12]]: Fisetin-driven vascular-aging response; proposed to personalize rapamycin washout.
- [[MMP-2]]: Mortality-associated panel member; matrix-remodeling SASP factor.
- [[SIRT3-SIRT4 Ratio]]: Mitochondrial redox-dial biomarker predicting individual responsiveness to the AMM/MB hormetic trigger and the safe hormetic window for SRAC.
- [[SIRT3]]: Deacetylates/activates MnSOD; high SIRT3/SIRT4 ratio → superoxide quenching → protective.
- [[SIRT4]]: Inhibits MnSOD via mono-ADP-ribosylation; low SIRT3/SIRT4 ratio → persistent superoxide → oxidative risk.
- [[MnSOD]]: Shared substrate whose activity is set by the SIRT3/SIRT4 ratio; processes the AMM-derived superoxide burst.
- [[Hormetic Window]]: Determined by the SIRT3/SIRT4 ratio; defines the safe dosing range for SRAC's redox priming.

## Documents

- [[tasks/outline_adrenochrome_combo_therapy|SRAC Outline]]
- [[notes/adrenochrome/_document_ - (protocol) SRAC - senescent, ligand-conjugated|SRAC Protocol (Original)]]
- [[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications|SASP Review (Wang et al., 2024)]]: Source for the expanded SRAC biomarker panel.

## Linking Summary
- New links added: [[Adrenochrome monoaminoguanidine]], [[Methylene blue]], [[Rapamycin]], [[Fisetin]], [[GlyNAC]], [[NRF2]], [[SIRT1]], [[PGC-1α]], [[SASP]], [[Glutathione]], [[Inflammaging]], [[Advanced Glycation End Products]], [[GDF15]], [[MMP-9]], [[GM-CSF]], [[CCL18]], [[CXCL12]], [[MMP-2]], [[SASP Atlas]], [[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications]], [[SIRT3-SIRT4 Ratio]], [[SIRT3]], [[SIRT4]], [[MnSOD]], [[Hormetic Window]]
- Suggested new entity notes to create: [[GDF15]], [[MMP-9]], [[GM-CSF]], [[CCL18]], [[CXCL12]], [[MMP-2]], [[SASP Atlas]]
- Strong connections to strengthen: [[SASP-Remodeling Aminochrome Complex]] ↔ [[Senescence]], [[SASP-Remodeling Aminochrome Complex]] ↔ [[Adrenochrome monoaminoguanidine]], [[SASP-Remodeling Aminochrome Complex]] ↔ [[Methylene blue]], [[SASP-Remodeling Aminochrome Complex]] ↔ [[SASP]] (biomarker framework)
