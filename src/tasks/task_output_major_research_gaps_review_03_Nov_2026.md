---
title: Research Gaps Across Task Outputs — Review
description: Consolidated open questions and coverage gaps reported across ~90 task outputs in src/tasks/ (June–October 2026), grouped by thematic cluster, with recurring human-data, biomarker, and window-definition deficits and a source-derived priority order.
created: 2026-11-03
updated: 2026-11-04
tags:
  - research-gaps
  - review
  - meta-analysis
  - geroscience
---

# Research Gaps Across Task Outputs — Review

Compiled 03_Nov_2026 06:47 PM PST by synthesizing the gap sections of ~90 task outputs in `src/tasks/` (June–October 2026). The heading order follows the five extraction clusters used, not a ranking of scientific importance.

**Scope:** scientific research gaps primarily; knowledge-graph/vault coverage gaps are summarized separately. Caveat: these are gaps *as flagged by the task outputs themselves* — quality of each underlying claim varies (several docs are literature reviews; some findings rest on single-source preprints).

---

## Cross-Cutting Deficits

Three deficits recur across the clusters:

1. **Human, sex- and genotype-stratified interventional data.** ~96% of caloric-restriction studies ignore sex; senolytic responses are sex-dependent in rodents (D+Q→females, fisetin→males) with zero clinical sex-stratified data; JPI-289 reached clinic without sex stratification; no senolytic trial stratifies by COMT genotype despite a 3–4× activity span. (`task_output_gender_specific_attributes_vault_topics_02_SEP_2026.md`, `task_output_sex_dimorphic_cell_death_05_Sep_2026.md`, `task_output_hardcoded_individual_biomarker_gates_26_Sep_2026.md`, `task_output_biomarker_gate_biology_anatomy_review_29_Sep_2026.md`)
2. **Validated, procurable biomarkers / pharmacodynamic readouts.** No SenCat-style senescence-burden panel separating senescence from generic inflammation; no commercial MnSOD/PON1/NQO1 activity assays; p70S6K1 Thr389 (needed to close the rapamycin non-responder loop) has no commercial assay; no clinical SIRT3/SIRT4-ratio assay. (`task_output_senescence_research_gaps_18_August_2026.md`, `task_output_biomarker_gate_supply_chain_procurement_04_Oct_2026.md`)
3. **Quantitatively undefined therapeutic (hormetic) windows** — dose × time × tissue × sex for nearly every intervention cited (DRP1 inhibition, exercise/fasting ROS pulses, SIRT1 MnSOD K68 rheostat, retinoid U-shape). Recurs in `task_output_mitochondria_fusion_fission_27_JUL_2026.md`, `task_output_mitohormesis_antioxidants_05_August_2026.md`, `task_output_hormesis_rcd_acd_tier_model_13_Sep_2026.md`, `task_output_hormesis_overlooked_paradigms_30_Aug_2026.md`.

---

## Senescence / SASP

Recurs across six task outputs.

- **No universal senescence biomarker**; exact tissue proportion "remains controversial."
- **The beneficial→detrimental SASP tipping point (time/dose/composition) is undefined** — explicitly called the central translational blocker; single-timepoint biomarkers cannot discriminate; this limits the design of timed "modulate-then-clear" dosing.
- **Senolytic clinical translation limited** — no intermittent-dosing RCT with biomarker endpoints; D+Q AD trials underpowered; fisetin OA trial negative.
- **Therapy-induced senescence (TIS) escape / OIS senolytic paradox** — molecular determinants of re-entry unresolved; whether transient OIS clearance forfeits tumor suppression.
- **3D-genome causality** — SAHF necessity for SASP, CCF formation mechanism, enhancer-hypomethylation causal test; all explicitly flagged still unfilled.
- **Non-inflammatory SASP arms** (profibrotic / proangiogenic / ECM / hemostatic) unmapped; current senomorphics only hit IL-6/IL-8 and may skew the remainder.

Sources: `task_output_senescence_research_gaps_18_August_2026.md`, `task_output_sasp_pleiotropic_opposing_effects_20_Sep_2026.md`, `task_output_senescence_organ_dysfunction_scenarios_21_Sep_2026.md`, `task_output_cell_death_senescence_research_12_Sep_2026.md`, `task_output_cell_death_quadrants_controlled_inflammatory_lens_04_SEP_2026.md`, `task_output_eryptosis_review_vs_cell_death_01_Oct_2026.md`.

## Parthanatos / PAR–AIF

- **AIF-release mechanism unresolved** — direct PAR binding vs calpain cleavage vs BAX/mPTP vs pool- and cell-type dependence; AIF-independent parthanatos exists.
- **PARG has dose-dependent, conflicting effects** — dose-dependent executor vs protector; splice isoforms confound KO vs inhibitor readouts.
- **Free-PAR generation, nuclear export, cytosolic protection unresolved**; NAD rescue itself context-dependent and formally uncoupled from ATP signaling (2026 preprint); supplementation may *feed* PARP and worsen the burst.
- **TRPM2 necessity contested**; Ca²⁺→downstream arms unmapped; Nudix requirement unproven; glycolysis block necessary-but-not-sufficient.
- HMGB / MIF sex dimorphism untested.

Sources: `task_output_parthanatos_open_questions_08_Sep_2026.md`, `task_output_arh3_par_aif_06_SEP_2026.md`, `task_output_cell_death_modality_first_therapy_sex_stratified_13_Sep_2026.md`.

## Cell-Death Modality & Quantification

- **No global per-modality census of cell death exists** — figures like "billions of apoptotic cells per day" are not rigorously derivable; eryptosis (~200B RBC/day) excluded from "apoptosis" counts; TUNEL / caspase-3 / Annexin V cross-reactivity confounds fixed-tissue assignment; sex/age/health shifts unaddressed.
- **Sex-dimorphic cell death is validated preclinically but absent clinically** — the vault files identify this as the least-addressed variable (trial design specified: stratify by sex × hormone status with sex-specific biomarkers, e.g. CSF PAR / nuclear AIF vs cleaved caspase-3/8).
- **Modality-selection / patient-side matching is rare outside oncology**; ferroptosis patient-selection stratification missing; GSDME methylation biomarker proposed but unproven prospectively.

Sources: `task_output_cell_death_modality_distribution_research_13_Sep_2026.md`, `task_output_eryptosis_review_vs_cell_death_01_Oct_2026.md`, `task_output_cell_death_modality_first_therapy_sex_stratified_13_Sep_2026.md`, `task_output_ferroptosis_vs_apoptosis_cancer_26_AUG_2026.md`, `task_output_cell_death_quadrants_controlled_inflammatory_lens_04_SEP_2026.md`.

## Sirtuin / NAD

- **STAC (SIRT1 activator) on-target mechanism unresolved** — fluorophore-substrate artifact; in-vivo effects may be cAMP–Epac1–AMPK-mediated; no artifact-free direct on-target proof in vivo.
- **SIRT3 lifespan extension untested in vivo** — Sirt3OX mice exist but carry no lifespan data; SNP data inconsistent; repeatedly flagged "a critical gap."
- **SIRT4 mechanistic void** — in-vivo data essentially absent; the SIRT3/SIRT4 "Mitochondrial Sirtuin Balance" rheostat on MnSOD unverified; no clinical SIRT3/SIRT4-ratio assay.
- **CD38 × SARM1 axis never directly tested** — no study on whether CD38 inhibition alters SARM1-dependent axon degeneration; no synergy data (only CD38+PARP precedent); NMN dose vs SARM1 activation threshold unknown; sex-divergent outcomes (78c lifespan benefit in male mice, severe/fatal adverse reactions in females; NMN benefit female-specific). Recurs across 5–6 files.
- **Human longevity translation of sirtuins unresolved** — SRT2104-class programs halted, mostly neutral; human NAD+-precursor RCTs null/mixed (NICE–PAD null; MCI trial; head-to-head 2026); no trial uses a pace-of-aging (DunedinPACE) endpoint.
- **Sirtuin–NLRP3 inflammasome integration axis undefined** — the direct biochemical relationship between SIRT3 and NLRP3 is not characterized.
- **NAD+ compartmentalization / spatial-temporal regulation poorly understood** — most mechanism from preclinical systems; subcellular pools only recently shown interconnected.
- **Under-investigated isoforms** across disease areas: SIRT2 cardiac, SIRT5 fibrosis, SIRT6 autophagy mechanism, SIRT7 autophagy and cardiac roles, mtSIRT (3–5) autophagy.

Sources: `task_output_sirtuin_research_gaps_14_August_2026.md`, `task_output_sirtuins_recommendations_03_JULY_2026.md`, `task_output_review_notes_epinephrine_sirtuins_06_July_2026.md`, `task_output_nad_metabolism_cd38_sarm1_20_Oct_2026.md`, `cd38_sarm1_nad_trace/`, `task_output_sirt1_sirt3_pace_kinetic_modulators_23_Sep_2026.md`, `task_output_sirt1_ktype_allosteric_activation_14_August_2026.md`.

## Mitochondria / Hormesis Axis

- **Fission/fusion machinery mechanisms unresolved** — atomic-resolution fusion pore (MFN1 oligomers, OPA1/cardiolipin); L-OPA1/S-OPA1 ratio and S-OPA1 dispensability; cardiolipin's switch between OPA1-fusion and DRP1-fission; no unified DRP1 PTM code (Ser637 context paradox; SUMO1 vs SUMO2/3 opposite effects); MID49/51 dose-dependent paradox; ER site selection; PINK1 dual, context-dependent effects; mammalian FIS1 divergence. Explicitly a prerequisite for druggable therapies (Mdivi-1 already failed in pig MI).
- **Fission uncoupled from degradation in disease** — mHTT separates fission from mitophagy/autophagic flux; DRP1 not always required for mitophagy; downstream lysosomal capacity ("autophagic stress") is a bottleneck rapamycin cannot fix; fission:mitophagy ratio unmapped per neuronal subtype.
- **Cardiolipin peroxidation products are uncharacterized** — which oxidized cardiolipin species engage the DRP1 WRG motif is unresolved; GPX4 vs vitamin-E/ubiquinol substrate discrimination is untested.
- **No human trial of Trx1 stimulation**; SIRT3 activation + Trx1 preservation co-therapy untested.
- **Antioxidant-vs-hormesis experiments unperformed** — temporal-separation design (supplement vs exercise) untested; vitamin E has no direct hormesis-blocking mechanistic study; mechanistic basis of why exercise-blunting RCTs fail unresolved; direct α-Tocopherol–DRP1 contact never studied.
- **Hormesis literature is largely unindexed** — an estimated 80–90% is missed by standard PubMed/Web of Science searches; there is no MeSH broad term for hormesis, and cross-disciplinary synonyms (ischemic preconditioning, repeated-bout effect, trained immunity, eustress) are not co-indexed; this is reported to mis-design clinical trials and to limit the observed 30–60% efficacy ceiling.
- **Cross-domain hormetic combinations are untested** — whether hypoxia, cold, and fasting combine additively is uninvestigated; convergent AMPK/NRF2/HIF-1α signaling suggests they could, but no study reports the combination.
- **No single intervention reproduces the full set of CR effects**; CR fails to inhibit mTOR in old mice (rapamycin still works); a CR→rapamycin→exercise sequence has been proposed but not tested.
- **Autophagy directionality in cancer is unresolved** — no method is established for shifting autophagy from pro-survival to pro-death in a given tumor; biomarkers of autophagy dependence are lacking; the timing window for autophagy inhibition relative to chemotherapy is undefined (HCQ trials modest/inconsistent; ovarian phase II negative).
- Companion-animal flux data largely missing (no direct proof of feline lifespan extension; per-tissue "flux set points" unknown).

Sources: `task_output_mitochondria_fusion_fission_27_JUL_2026.md`, `task_output_mitochondrial_fission_vitamin_a_e_24_Sep_2026.md`, `task_output_mitohormesis_antioxidants_05_August_2026.md`, `task_output_mnsod_thioredoxin_link_01_Sep_2026.md`, `task_output_antioxidant_enzyme_hormetic_stress_resistance_01_Sep_2026.md`, `task_output_autophagy_mammals_longevity_22_JULY_2026.md`, `task_output_autophagy_and_cancer_13_JUL_2026.md`, `task_output_cr_vs_spermidine_autophagy_15_July_2026.md`, `task_output_hormesis_literature_invisibility_02_Sep_2026.md`, `task_output_hormesis_overlooked_paradigms_30_Aug_2026.md`, `task_output_hormetic_range_expansion_03_Sep_2026.md`, `task_output_hormesis_rcd_acd_tier_model_13_Sep_2026.md`, `task_output_lipid_peroxidation_vitamin_e_cluster_24_Sep_2026.md`.

## Clinical / Translational

- **No human clinical validation for repurposed/natural gero-oncologics** — ivermectin and fenbendazole evidence entirely preclinical; no clinical trials exist; anticancer dosing/schedules not established.
- **Four-compound stack** (spermidine / fisetin / berberine / urolithin A) — "no published co-administration PK/PD, no synergy or interaction matrix, no combined clinical endpoint — needed: factorial trials."
- **Genomic gates unvalidated** — COMT genotype gate for vitamin E/fisetin (mechanism unknown; compartment framing cannot explain the genotype flip); NQO1 rs1800566 flips the sign of quinone exposure and is absent from the adrenochrome protocol; CYP3A5*1 expressors clear sirolimus 40–60% faster (false mTOR "non-responders"; no CPIC guideline); PON1/MnSOD bins carry >2-fold activity spread ("measure activity, do not infer it from rs4880"); APOE4 treated as a single gate though rodent/human ketogenic evidence conflicts.
- **Neurodegeneration target gaps** — no disease-modifying PD therapy; prasinezumab only Phase 3; AMT-130 open-label n=12; anti-amyloids ~25–35% slowing; TDP-43/LATE co-pathology (~1/3 of brains >85 y) predicts non-response; no LATE note in the vault.
- **Adrenochrome/MRR protocol safety gaps unclosed** — methemoglobinemia mechanism and monitoring (co-oximetry vs pulse oximetry) absent; G6PD screening mentioned once, no protocol; NQO1\*2 unaddressed; neuromelanin cross-seeding / substantia-nigra vulnerability to aminochromes unaddressed.
- **Context-dependent autophagy paradox unresolved** — kills in breast cancer, protects in melanoma; fenbendazole's p53 activation plausibly anti-longevity in normal tissue — untested in aged tissue.

Sources: `task_output_ivermectin_cancer_14_JUL_2026.md`, `task_output_ivermectin_fenbendazole_mechanisms_28_JULY_2026.md`, `task_output_bioactive_compounds_aging_formulations_17_Sep_2026.md`, `task_output_comt_vitamin_e_genotype_gate_24_Sep_2026.md`, `task_output_comt_fisetin_senolytic_09_July_2026.md`, `task_output_berberine_type2_diabetes_21_Sep_2026.md`, `task_output_hardcoded_individual_biomarker_gates_26_Sep_2026.md`, `task_output_biomarker_gate_supply_chain_procurement_04_Oct_2026.md`, `task_output_biomarker_gate_biology_anatomy_review_29_Sep_2026.md`, `task_output_neurodegeneration_review_ad_pd_hd_als_29_AUG_2026.md`, `adrenochrome_mb_ag/task_output_adrenochrome_gap_analysis_09_JUL_2026.md`.

---

## Vault / Knowledge-Graph Coverage Gaps

Distinct from science gaps; a theme across ≥5 files is limited curation at the therapeutic frontier and clustering of edges by source document.

### Graph-Wide Structural Debt

- Sparse star topology — mean degree 2.87; 68% of nodes degree ≤ 1; λ₂ ≈ 0.045; 18% of triples nodes outside the giant component.
- **Cross-document integration is limited** — edges stay within source documents; Fiedler-cut bridge nodes (NF-κB, p53, FOXO, MnSOD, Cellular Senescence) are proposed for bridge triples.
- Parallel-edge collapse — ~201 relations silently overwritten by the DiGraph build; MultiDiGraph fix preserved 198 surplus links on 177 pairs; verb-form duplicates remain.
- Provenance staleness — 19.8% of triples (793/4,004) carry `updated` older than their source notes.
- Direction-semantics sign errors — `inhibited_by` convention inverts biological direction.
- Leiden segments by document, not mechanism — 398 communities from 11 files.
- Wiki edges are untyped and carry no polarity (confidence hardcoded 1.0) — the "Spreader" role proportion (49.6%) is an authoring artifact.

### Entity-Resolution & Layer Divergence

- Variant-node splinters — NF-κB/NF-kappaB, MnSOD/SOD2, three GDH nodes, PGC-1α/PGC-1alpha, dual ALS and HD nodes, Tau/Tau Protein.
- **NMN exists as two nodes** (`nmn` wiki 65 / triples 1 vs `nicotinamide_mononucleotide` wiki 5 / triples 29) with inverted layer strengths; cADPR split; `CD38 inhibitor 78c` label drift breaks layer joins.
- SARM1 inhibitors (DSRM-3716, GSK-428, NB-4746, CZ-48, disulfiram) wiki-only; PIDDosome triples-only; microglia/neuron stubs combined degree 3 vs 75/28 in wiki.

### Missing Entities / Notes

- **Anatomy layer almost entirely absent** — Skin, Endothelium, Enterocyte, Nephron are the recommended first four; also Ovary/Testis (nothing for the sex-hormone gate to hang on), Adipocyte, immune cell types.
- **Neurodegeneration under-built** — HD note ~60 lines, predating AMT-130; no LATE note (missing AD↔TDP-43 edge; Jaccard 0.051); ALS/FTD therapeutics (tofersen, prasinezumab, AMT-130, masitinib) and biomarkers (NfL, p-tau217, STMN2, UNC13A) unlinked/nonexistent.
- Caspase-family — no Caspase-14 node, no Gasdermin E node, Caspase-3 (Ser150) degree-1 stub.
- Sex/gender coverage is absent across core topics — Apoptosis/Caspases/p53, Senescence/SASP, Autophagy/mTORC1, NAD+ (PARP-1 decline, CD38 ovarian biology), NF-κB/Inflammaging; the source calls this "the largest single gap in the vault's sex-difference coverage." Priority 1–3 remediations are marked completed 2026-09-02 — treat as remediated-but-watch.

### Missing Mechanism / Typed Edges

- Navitoclax↔caspase axis topologically disjoint from Bcl-2 family (CASP-4/5/11 vs Bcl-2 Jaccard 0.000); `Caspase-2 → Apoptosis` missing; `Caspase-8 → Necroptosis` (RIPK1 gatekeeper) unstated.
- Senescence bridges are present only in prose — CASP-3→GSDME, CASP-1→IL-1α, CASP-8/RIPK1 senescence exit, NLRP3/cGAS-STING→Caspase-4/5/11 are absent as molecular edges.
- Ferroptosis–caspase crosstalk (CASP-8/GSDME potentiation) unrepresented.
- Mitohormesis↔Sirtuins, Resveratrol↔SIRT1 controversy — fixed via counter-edge/additive edges (2026-08-31); `Mitochondrial ROS → Autophagy` chain still unlinked.
- Acid-ceramidase neighborhood is weakly connected — ACSL4/Ceramide/PUFA cluster degree ≤ 1; GPX4 clique has k-core 2 with no backbone route except through Senescent Cells.

### Missing Analysis Infrastructure

- No typed-path composition pass in `link_prediction.py` — 2-hop typed-path enumeration for unknown connections is absent; the source reports this approach would have ranked COVID→ferroptosis ~2 years early.
- No signed-triad mining for the Assumptions Lab.
- No MAD-t robust edge normalization; no learned embeddings / ablation harness in `scripts/analysis/`.
- Assumptions Lab under-populated (registry has 1 scenario; zero ferroptosis/COVID coverage).

Sources: `task_output_graph_structure_conclusions_26_AUG_2026.md`, `task_output_node_metrics_combined_graph_27_Aug_2026.md`, `task_output_nad_metabolism_cd38_sarm1_20_Oct_2026.md`, `task_output_caspases_kinases_sirtuins_comparison_cell_death_22_Sep_2026.md` (see also `node_network_caspase_28_AUG_2026/task_output_caspase_graph_analysis_28_AUG_2026.md`), `task_output_neurodegeneration_review_ad_pd_hd_als_29_AUG_2026.md`, `task_output_biomarker_gate_biology_anatomy_review_29_Sep_2026.md`, `task_output_parallel_relation_links_impact_01_Sep_2026.md`, `task_output_proximity_graph_learning_21_Sep_2026.md`, `task_output_new_discovery_graph_metrics_ferroptosis_covid_30_Aug_2026.md`, `task_output_triples_review_adrenochrome_mitohormesis_autophagy_sirtuins_21_AUGUST_2026.md`, `task_output_gender_specific_attributes_vault_topics_02_SEP_2026.md`.

> [!note]
> The source documents propose one sequencing — refresh stale triples → merge variant nodes → fill bridge triples at cut points → recompute with confidence weights (`task_output_graph_structure_conclusions_26_AUG_2026.md`), with caspase, neurodegeneration, anatomy, and sex-difference enrichments as the note-level backlog.

---

## Suggested Priority Order

The source documents propose this sequencing:

1. **Senescence biomarker–threshold cluster** — limits trial endpoints, dosing schedules, and senomorphic logic; most cross-file recurrence and most explicit "translational blocker" language.
2. **CD38 × SARM1 / NAD+ axis** — a direct in-vivo study would test the central unresolved question; the sub-questions are specified in the source documents.
3. **STAC on-target proof in vivo** + SIRT3 lifespan transgenic study + SIRT3/SIRT4-ratio clinical assay (the `task_output_sirtuin_research_gaps_14_August_2026.md` "Gaps Still Unfilled" list).
4. **Sex-stratified cell-death trial design** — trial design is specified in `task_output_cell_death_modality_first_therapy_sex_stratified_13_Sep_2026.md`.
5. **Genotype-gated trials infrastructure** (COMT / NQO1 / CYP3A5) before further compound ranking.
6. **Vault hygiene** — refresh stale triples → variant merges → bridge triples → confidence-weighted rebuild; plus the anatomy/LATE/caspase enrichment backlog.

## Method Note

Compiled by parallel extraction over the `src/tasks/` corpus (five thematic readers: sirtuin/NAD, senescence/cell death, mitochondria/hormesis, clinical/disease, vault/graph coverage), then merged with duplicate recurrence noted. Not every task output contains a gaps section; where present, the source docs' own emphasis ("critical gap", "still unfilled", recurrence frequency) set priority. Items flagged by sources themselves as unverified single-source claims (e.g. KRAS G12C female enrichment, parthanatos sex dimorphism) are reported as gaps to *verify*, not as established findings. The companion gap documents `task_output_sirtuin_research_gaps_14_August_2026.md` and `task_output_senescence_research_gaps_18_August_2026.md` contain the most detailed per-gap paper recommendations (DOI/PMID tiered) in the corpus.
