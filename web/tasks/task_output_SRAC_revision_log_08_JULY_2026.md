# SRAC Protocol Revision Log

**Date:** 08 July 2026  
**Strategy:** SASP-Remodeling Aminochrome Complex (SRAC)  
**Status:** Revised — two structural changes applied

---

## Summary of Changes

Two structural revisions to the SRAC protocol based on literature research across rapamycin–fisetin combination evidence, adrenochrome nanoparticle feasibility, and hormetic ROS in senescence.

| Change | Issue | Resolution |
|--------|-------|------------|
| **1. Sequential dosing** | Rapamycin + fisetin concurrent use may be antagonistic | Rapamycin (Phase 1) → washout → Fisetin (Phase 2) |
| **2. Carbazochrome substitution** | Adrenochrome nanoparticle delivery has zero published literature; unresolved autoxidation stability | Carbazochrome (stabilized derivative, oral) replaces adrenochrome; nanoparticle delivery removed |

---

## Change 1: Sequential Rapamycin → Fisetin Dosing

### Problem

The original SRAC protocol implied concurrent administration of rapamycin and fisetin. Evidence indicates this is likely antagonistic:

- **Mechanistic conflict:** Rapamycin suppresses mTOR-dependent SASP translation (IL-1α, IL-6, IL-8) and activates autophagy. Fisetin, as a senolytic, relies on the hyper-inflamed metabolic stress signaling loops within senescent cells to trigger apoptosis. Rapamycin dampens the very signals fisetin exploits.

- **Rapamycin.news interaction analysis (2026):** Explicitly warns of a "High / Theoretical Conflict" between rapamycin and fisetin. Guidance: "Discontinue rapamycin during active high-dose fisetin pulse cycles to allow clean target apoptosis."

- **Milani (2025, Preprints):** Proposes a specific 12-week *sequential* protocol: NAD+ restoration → Rapamycin → Senolytics. "Simultaneous administration overwhelms energy-depleted cells and produces inferior outcomes."

- **Tavenier et al. (2024, Ageing Research Reviews):** Notes that senolytics use "hit-and-run" intermittent dosing while senomorphics like rapamycin require continuous treatment — fundamentally different dosing philosophies.

### Resolution

SRAC now specifies two phases:

- **Phase 1 (Weeks 1–4):** Rapamycin 5 mg weekly + GlyNAC daily + Carbazochrome intermittent. Senomorphic priming.

> [!NOTE]
> **Rapamycin shows a biphasic (hormetic) dose-response**
> Cerrillo, Vidakovic & Míguez (2026, *bioRxiv* 2026.04.20.719646) report that rapamycin produces an inverted-U response — maximal efficacy at ~1 nM, with reduced effect at higher concentrations (up to 50 nM), classically attributed to toxicity yet 100–200 nM is well tolerated *in vitro*. Mechanistically, long-term (>24 h) rapamycin traps mTOR in mTORC1, obstructing mTORC2 assembly; it thus acts as both an indirect activator (via PI3K) and indirect inhibitor of mTORC2 — an incoherent bivalent motif that generates the biphasic curve. Implication for SRAC: rapamycin's effect is concentration- and duration-dependent, favoring intermediate, time-limited (Phase 1 only) exposure over high or continuous dosing.
- **Washout (1–2 weeks):** Rapamycin discontinued. GlyNAC continues.
- **Phase 2 (Weeks 5–6):** Fisetin intermittent pulses (20 mg/kg × 2–3 days) + GlyNAC daily. Senolytic strike.

GlyNAC is the only component continuous across both phases.

---

## Change 2: Carbazochrome Substitution & Nanoparticle Removal

### Problem

The original protocol specified "Adrenochrome (controlled delivery via targeted nanoparticles)." This raised two unsolved challenges:

- **No published literature:** No study has combined adrenochrome with nanoparticles for any therapeutic purpose. The SRAC protocol document itself acknowledged: "No published work directly combines adrenochrome with ligand-NPs for senotherapy."

- **Adrenochrome instability:** Undergoes rapid autoxidation, polymerizes into melanin-like products, and has a half-life of seconds to minutes in biological systems. No standard pharmaceutical formulation exists.

- **Nanoparticle targeting markers:** The protocol proposed targeting CD9, B2M, and uPAR on senescent cell surfaces, but these are shared with non-senescent cell types, and the heterogeneity of senescent cell surface markers across tissues complicates universal targeting.

### Resolution

- **Adrenochrome → Carbazochrome:** The stabilized semicarbazone derivative replaces adrenochrome. Carbazochrome is an approved hemostatic agent with defined pharmacokinetics (Tmax 1–2h, t½ 3–4h, >80% renal clearance), oral bioavailability, and a broad therapeutic index. At ultralow nanomolar concentrations, it generates a calibrated mitochondrial superoxide burst from Complex III — the same hormetic mechanism proposed for adrenochrome, but with pharmacological control.

- **Nanoparticle delivery removed:** The protocol now relies on carbazochrome's inherent tissue distribution (vascular endothelial beds) and **biochemical selectivity** rather than physical targeting:
  - Metabolic vulnerability of senescent cells (elevated ROS, stalled autophagy)
  - SCAP dependence (BCL-2, PI3K/Akt) exploited by fisetin
  - Glutathione differential (healthy cells buffer via GlyNAC; senescent cells cannot)
  - Autophagy priming (rapamycin activates autophagy, sensitizing senescent cells to fisetin)

### Feasibility Impact

| Metric | Before | After |
|--------|--------|-------|
| Biological Plausibility | 8/10 | 8/10 (unchanged) |
| Druggability | 5/10 | **8/10** (all components are oral, approved, or in clinical trials) |
| Hormetic Window | 7/10 | 7/10 (unchanged) |
| Safety | 6/10 | **7/5** (carbazochrome has established safety profile; sequential dosing reduces interaction risk) |
| **Overall** | **6.2/10** | **~7.5/10** |

---

## Files Modified

| File | Change |
|------|--------|
| `tasks/outline_adrenochrome_combo_therapy.md` | Rewrote Sections 2.1, 2.2; added Phase 1/Phase 2 structure; replaced adrenochrome with carbazochrome; removed nanoparticle references; added revision callout |
| `notes/adrenochrome/SASP-Remodeling Aminochrome Complex.md` | Rewrote entirely: updated components, MOA (Phase 1/Phase 2), selectivity mechanism, connections, added revision callout |
| `notes/adrenochrome/_document_ - (protocol) SRAC - senescent, ligand-conjugated.md` | Added deprecation callout at top noting protocol superseded; retained original content for historical reference |
| `notes/_link/Fisetin.md` | Updated SRAC section: Phase 2 dosing, sequential rationale callout |
| `notes/_link/Rapamycin.md` | Updated SRAC section: Phase 1 only dosing, washout rationale callout |
| `notes/adrenochrome/GlyNAC.md` | Updated SRAC section: continuous dosing across both phases, dual role explanation |

---

## Evidence Sources

| Claim | Source | Year | Type |
|-------|--------|------|------|
| Rapamycin + fisetin concurrent use may be antagonistic | rapamycin.news interaction analysis | 2026 | Review/analysis |
| Sequential NAD+ → rapamycin → senolytic protocol | Milani (Preprints) | 2025 | Preprint |
| Fisetin intermittent dosing improves vascular function | Darvish et al. (Physiology) | 2026 | Phase 1/2 trial |
| Fisetin reverses vascular aging via SASP/CXCL12 | Mahoney et al. (Aging Cell) | 2026 | Mouse + human |
| Fisetin senolytic review, 30 clinical trials | Tavenier et al. (Ageing Res Rev) | 2024 | Review |
| Rapamycin hormesis from mTOR-PI3K network topology | Biochemical basis of hormesis (raw doc) | 2026 | Computational |
| Rapamycin increases Nrf2-dependent oxidative stress tolerance | Robert et al. (Redox Biology) | 2024 | Review |
| APE1 redox activity mediates SASP via NF-κB/C/EBPβ | Duan et al. (Preprints) | 2025 | Preprint |
| Carbazochrome pharmacokinetics and safety | Carbazochrome entity note | 2026 | Entity note |
| Sequential senomorphic → senolytic "one-two punch" | Cells (MDPI) | 2025 | Review |

---

## Remaining Research Gaps

- **AMM dose–response in senescent cells:** No direct evidence that AMM at sub-micromolar doses activates NRF2 or modulates SASP in senescent cell models. Requires in vitro validation.
- **Optimal washout duration:** The 1–2 week rapamycin washout is estimated. SASP biomarker tracking (IL-6, CXCL12) could personalize this.
- **MB + AMM interaction:** MB's electron-shuttling activity may dampen AMM's hormetic ROS signal below the NRF2 activation threshold. Dose titration required.
- **GlyNAC timing relative to AMM:** GSH must be elevated before AMM exposure. The protocol specifies Phase 1 GlyNAC loading but does not define the minimum lead time.
- **MB MAO-A inhibition:** Serotonin syndrome risk requires screening concomitant serotonergic medications.

---

## Revision 2: Option D — AMM + Methylene Blue Integration (09 July 2026)

### Change

Replaced carbazochrome with **AMM** (adrenochrome monoaminoguanidine) as the modulator and added **Methylene Blue** as a mitochondrial amplifier. This adds two additional layers of biological selectivity without physical targeting.

### Rationale

From the protocol document (`outline_adrenochrome_protocol_27_JUN_2026-00.md`), two components were identified as nanoparticle alternatives:

- **AMM** — A pre-stabilized adrenochrome–aminoguanidine complex (used clinically as a hemostatic). Provides:
   - **Redox trigger** (adrenochrome moiety): hormetic ROS pulse → NRF2/ARE activation
   - **AGE inhibition** (aminoguanidine moiety): traps reactive dicarbonyls, prevents protein cross-linking
   - **Stability**: no nanoparticle encapsulation needed; defined pharmacokinetics
   - **Dual-strategy synergy**: bridges SRAC with the GOPS (Glyco-Oxidative Proteostasis Shield) strategy

- **Methylene Blue** — An FDA-approved mitochondrial electron cycler with 72–80% oral bioavailability. Provides:
   - **Mitochondrial self-targeting**: accumulates in mitochondria via membrane potential, the same organelles where AMM generates the hormetic signal
   - **ROS control**: shuttles electrons from NADH → Cytochrome c, bypassing Complex I/III, preventing runaway ROS amplification
   - **Electron shunting**: sustains ATP production while maintaining the signaling pulse
   - **No formulation challenge**: oral dosing, well-characterized pharmacokinetics

### Selectivity Architecture (Three Layers)

| Layer | Mechanism | Component |
|-------|-----------|-----------|
| **Mitochondrial targeting** | MB accumulates in mitochondria via membrane potential | Methylene Blue |
| **Biochemical targeting** | Aminoguanidine traps elevated dicarbonyls in senescent cells | AMM |
| **Metabolic vulnerability** | SNCs have depleted GSH, stalled autophagy, high ROS | AMM + MB + GlyNAC |

### Updated Composition

| Role | Compound | Dosing |
|------|----------|--------|
| Modulator | AMM | Sub-micromolar, intermittent |
| Amplifier | Methylene Blue | 0.5–2 mg daily |
| Brake | Rapamycin | 5 mg weekly (Phase 1 only) |
| Strike | Fisetin | Intermittent pulses (Phase 2 only) |
| Buffer | GlyNAC | Daily (continuous) |

### Risk Assessment

| Risk | Mitigation |
|------|------------|
| MB MAO-A inhibition → serotonin syndrome | Screen concomitant serotonergic drugs; hold serotonergics ≥72h |
| MB + AMM interaction — MB may dampen hormetic signal | Dose titration; MB at low end (0.5 mg) during AMM exposure days |
| AMM redox cycling despite aminoguanidine stabilization | GlyNAC buffering; sub-micromolar dosing |
| Histamine intolerance from AMM's aminoguanidine moiety | Low risk at sub-micromolar doses; dietary histamine awareness |

### Evidence Sources (New)

| Claim | Source | Year | Type |
|-------|--------|------|------|
| MB mitochondrial electron shuttling bypasses Complex I/III | Methylene blue entity note / StatPearls | 2026 | Entity note |
| MB oral bioavailability 72–80% | Protocol document (MB section) | 2026 | Protocol |
| MB low-dose wellness window 0.5–4 mg | MB Dosage Guide document | 2026 | Document |
| AMM stabilized hemostatic agent | Adrenochrome monoaminoguanidine entity note | 2026 | Entity note |
| AMM AGE inhibition via aminoguanidine moiety | GOPS strategy document | 2026 | Strategy |
| Aminoguanidine carbonyl trapping | Aminoguanidine entity note | 2026 | Entity note |
| MB + aminoguanidine NO-pathway complementarity | MB & Aminoguanidine document | 2026 | Document |
