---
title: Ferroptosis
description: Ferroptosis is a non-apoptotic form of regulated cell death driven by
  iron-dependent Lipid Peroxidation.
protected: true
created: 2024-01-01
updated: 2026-09-26
tags:
  - biological-process
aliases: []
---
# Ferroptosis
Ferroptosis is a non-apoptotic form of regulated cell death driven by iron-dependent [[Lipid Peroxidation]].
See [[Ferroptosis]].
**Ferroptosis** is a non-apoptotic form of regulated cell death driven by iron-dependent accumulation of lipid peroxides to lethal levels. It is morphologically, biochemically, and genetically distinct from apoptosis, necroptosis, and autophagy.
## Mechanism
Ferroptosis is initiated when the glutathione-dependent antioxidant enzyme [[GPX4]] is inactivated, either by genetic deletion, pharmacological inhibition (e.g., RSL3, ML162), or depletion of its cofactor [[Glutathione]] (e.g., by erastin-mediated inhibition of system Xc⁻). This inactivation permits unchecked iron-dependent [[Lipid Peroxidation]] of polyunsaturated fatty acid-containing phospholipids (particularly phosphatidylethanolamines), leading to membrane rupture and cell death. The process requires redox-active iron (Fe²⁺), which drives [[Fenton Reaction]] chemistry to propagate lipid radical chain reactions. [[Ferritin]]ophagy — the autophagic degradation of ferritin mediated by [[NCOA4]] — can liberate additional iron to fuel ferroptosis.

> [!info] Source: [[task_output_adrenochrome_lipid_peroxidation_bridge_17_July_2026|Adrenochrome → Lipid Peroxidation Bridge]]
> [[Adrenochrome]], a redox-cycling *o*-quinone derived from [[Epinephrine]] oxidation, is hypothesized to induce ferroptosis through a dual mechanism: (1) ROS generation via futile redox cycling → [[Superoxide]] → [[Hydrogen Peroxide]] → [[Hydroxyl radical]] → PUFA hydrogen abstraction (lipid peroxidation initiation), and (2) direct electrophilic inhibition of [[GPX4]] via *o*-quinone arylation of its catalytic [[Selenocysteine]], analogous to [[RSL3]]. If verified, this would establish adrenochrome as the first endogenous catecholamine-derived ferroptosis inducer, with implications for [[Takotsubo Cardiomyopathy|stress cardiomyopathy]], [[Catecholamine-induced cardiomyopathy]], and dopaminergic neuron loss in [[Parkinson's Disease]].
> [!info] Source: [[_document_ - Acid_ceramidase_modulates_the_lipid_profile_and_ex|Acid ceramidase modulates the lipid profile… (Soriano-Castell et al., 2026)]]
> A newly identified, **GPX4/GSH- and iron-independent** ferroptosis axis: [[Acid ceramidase]] (ASAH1) is over-expressed 5- to 20-fold in replicatively [[Senescent Cells|senescent]] WI-38 fibroblasts. By cleaving [[Ceramide|ceramide]] into free fatty acids, ACase enriches membrane [[Phospholipid|phospholipids]] with [[PUFA|PUFAs]] (the peroxidation substrates), creating a pro-ferroptotic lipid profile. ACase knockdown/inhibition (ARN14794) protects cells from [[RSL3]] *without* changing [[ACSL4]], [[GPX4]], or labile [[Iron|Fe²⁺]]—acting upstream by shrinking the PUFA substrate pool. Critically, senescent-cell [[SASP]] ([[IL-6]]/[[IL-8]]) transmits ACase up-regulation and ferroptotic sensitization to neighboring cells.

## FSP1–CoQ10–NAD(P)H: the parallel, GPX4-independent axis

In addition to GPX4, cells deploy a **second, stand-alone ferroptosis-suppression system** centered on **[[FSP1]]** (ferroptosis suppressor protein 1, formerly AIFM2). Myristoylated FSP1 resides at the **[[Plasma Membrane]]**, where it uses **[[NADPH]]** to reduce **[[Ubiquinone]] (CoQ10)** to **ubiquinol (CoQ10H₂)**, a lipophilic **radical-trapping antioxidant** that terminates phospholipid peroxyl-radical chains (Doll et al., 2019; Bersuker et al., 2019). This **FSP1–CoQ10–NAD(P)H pathway** is **glutathione-independent** and cooperates with the GPX4–glutathione axis: loss of either axis alone is tolerable if the other is intact, but combined inhibition is strongly synergistic.

> [!info] MVA-pathway convergence predicts ferroptosis sensitivity
> The ubiquinone substrate of FSP1 is a **non-sterol product of the [[Mevalonate pathway]]**. Interventions that suppress MVA output toward cholesterol — [[Statins]] (HMG-CoA reductase inhibition) or squalene-synthase engagement (e.g., FIN56) — deplete ubiquinone and **converge on FSP1**, collapsing its radical trap and sensitizing cells to ferroptosis. Loss of ubiquinone therefore predicts ferroptosis sensitivity independently of GPX4, explaining the NAD(P)H-dependence of the MVA/CoQ10 axis. See the [[task_output_fsp1_coq10_nadph_ferroptosis_axis_24_August_2026|FSP1–CoQ10–NAD(P)H deep-dive]].

## SIRT3–SLC25A22: the mitochondrial SIRT3 ferroptosis-defense axis

> [!info] Source: Wei et al., *Antioxidants* 2025;14(4):403 (doi:10.3390/antiox14040403); reviewed in "SIRT3 at the crossroads of ferroptosis" (2026)
> The mitochondrial deacetylase **[[SIRT3]]** is a central anti-ferroptotic checkpoint that operates through both enzymatic and non-enzymatic arms:
> - **Non-enzymatic arm (SLC25A22):** SIRT3 deacetylates the mitochondrial glutamate transporter **[[SLC25A22]]** at K83, preventing its ubiquitination and proteasomal degradation. The stabilized transporter sustains mitochondrial [[Glutamate]]/[[Glutathione]] supply and AMPK-driven monounsaturated-fatty-acid synthesis, blocking ferroptosis in [[Lung Cancer|lung adenocarcinoma (LUAD)]] and other metabolically constrained tumors.
> - **Enzymatic arm:** SIRT3 deacetylates/activates [[IDH2]] (NADPH), [[MnSOD]] (ROS scavenging), [[MTHFD2]] (NADPH), and [[Catalase]], and supports [[GPX4]] by regenerating the NADPH/GSH reducing buffer.
> - **Iron control:** by suppressing mitochondrial ROS, SIRT3 keeps IRP1 in its aconitase form, restricting [[Transferrin receptor 1|TfR1]]-mediated iron import and the labile iron pool that fuels [[Fenton Reaction|Fenton]] chemistry.
> Because SIRT3's redox shield is exploited by OXPHOS-prone, high-stress tumors (LUAD, glioblastoma), SIRT3 inhibition can **sensitize** such tumors to ferroptosis-inducing therapy — a tumor-selective vulnerability. Note the context-dependence: in some settings SIRT3 instead *promotes* ferroptosis (via mitophagy, as in glioblastoma), so the net effect is tumor- and context-specific.

## Sex differences

Ferroptosis sensitivity is sexually dimorphic at three nodes. (1) **Hormone-gated phospholipid remodeling:** the lyso-PL acyltransferases [[MBOAT1]] and [[MBOAT2]] suppress ferroptosis GPX4- and FSP1-independently by enriching PE-MUFA at the expense of peroxidizable PE-PUFA; MBOAT1 is a direct estrogen-receptor transcriptional target (estradiol up, tamoxifen/fulvestrant down) and MBOAT2 a direct androgen-receptor target, sensitizing ER+ breast and AR+ prostate cancers to ferroptosis induction combined with hormonal blockade (*Cell* 2023, PMCID PMC10330611). (2) **Kidney:** tubule-specific Gpx4 deletion injures male but strikingly spares female kidneys; ovariectomy partially abolishes protection, and single-cell profiling identifies elevated [[NRF2]] antioxidant tone as the female resilience mechanism — NRF2 activation rescues male tubules (Ide et al., *Cell Rep* 2022;41:111610, doi:10.1016/j.celrep.2022.111610). (3) **Heart:** estradiol-driven SmgGDS induction protects females against ferritinophagy-mediated ferroptosis in isoproterenol takotsubo-like injury (ovariectomy lowers SmgGDS to male levels; replacement restores), and estradiol/2-methoxyestradiol preserve metabolic gene programs and limit doxorubicin cardiomyopathy in female rats while ovariectomy/fulvestrant worsens it (SmgGDS study 2023, PMCID PMC10719533; *Naunyn-Schmiedeberg's Arch Pharmacol* 2024). Testosterone is the dominant susceptibility factor in renal ischemia (castration protects males; testosterone-loading sensitizes females — Park et al., *J Biol Chem* 2004), a pre-ferroptosis-era result consistent with, but not itself proof of, male ferroptotic vulnerability. No verified sex-dimorphic basal FSP1/GPX4 expression was found.

## The dietary radical-trapping tier: which vitamin wins

Beyond the enzymatic GPX4 axis and the FSP1–CoQ10 axis, cells deploy a **lipophilic radical-trapping antioxidant tier** supplied by the diet — most of it from [[Vitamin E]] and [[Vitamin A]]. The tier matters because it acts *upstream* of the GPX4 reaction: it intercepts LOO• and LO• chains directly, so it can hold the membrane safe even when GSH synthesis or GPX4 itself is compromised (as in erastin or RSL3 treatment).

**Tocotrienols ≫ tocopherols.** Yang, Ito et al. (*Sci Rep* 2026;16:4497, doi:10.1038/s41598-025-34673-1; PMID 41501350) benchmarked all nine tocochromanol analogs against RSL3, erastin, BSO, and genetic *Gpx4* deletion:

| Model | Tocotrienol EC₅₀ (α/β/γ/δ) | Tocopherol EC₅₀ (α/β/γ/δ) | Trolox |
| --- | --- | --- | --- |
| *Gpx4* deletion (Pfa1) | **0.12 / 0.12 / 0.13 / 0.36 μM** | 2.0 / 2.1 / 2.3 / 1.0 μM | 29 μM |
| RSL3 (HT-1080) | full protection **<1 μM** | full protection **>10 μM** | — |

The ranking reproduced in cell-free liposomal autoxidation and by [[C11-BODIPY]] oxidation, implicating bilayer radical-trapping efficiency (deeper membrane integration of the farnesyl tail) rather than signaling. α-TTP actively retains α-tocopherol, so this in-vitro potency advantage does not automatically translate to superior *in-vivo* tissue protection.

**Vitamin A metabolites out-trap α-tocopherol.** Retinol and all-*trans* retinal inhibit ferroptosis more potently than α-tocopherol (EC₅₀ 0.4–4.8 μM and 0.7–1.1 μM vs 7.4–36.1 μM), while all-*trans* [[Retinoic Acid]] acts chiefly by transcription (Jakaria et al. 2023, PMID 37236031; Studer et al., *Nat Commun* 2024, doi:10.1038/s41467-024-51996-1, where ATRA upregulates GPX4, FSP1, GCH1, ACSL3, SCD1, PPARα and where loss of vitamin A signaling *is* a ferroptosis phenotype in developing neurons).

**Carotenoids fill the same phase.** β-/α-carotene and xanthophylls from [[Carotenoids]] quench [[Singlet Oxygen]] and trap lipid radicals in the same bilayer, and serve as the feedback-regulated, non-toxic provitamin A reservoir feeding the retinoid arm above — the composition of [[Red Palm Oil]] (~600–750 ppm carotenoids + ~70% tocotrienol vitamin E + 18–25 ppm CoQ10) is the rare single-food delivery of the whole tier.

> [!info] Practical read
> The Wiki's food-first scheduling (see [[task_output_anti_ferroptosis_intake_schedule_26_Sep_2026]]) follows directly from this ranking: prefer tocotrienol- and carotenoid-rich oils (red palm oil) over pure-α supplements, keep dosing with dietary fat, avoid antioxidant *supplements* within ~3–4 h of exercise or fasting so [[Mitohormesis]] is not blunted, and remember that iron status (ferritin, [[Iron]]) is the upstream substrate any antioxidant tier cannot substitute for.

## Key Regulators
- **Negative regulators**: [[GPX4]] (master negative regulator), [[FSP1]] (CoQ10-dependent oxidoreductase at the plasma membrane; uses NADPH to regenerate ubiquinol, a GPX4-independent radical trap), [[DHODH]], [[Glutathione]], [[System Xc⁻]] (cystine/glutamate antiporter)
- **Positive regulators**: [[ACSL4]] (acyl-CoA synthetase that enriches membranes with oxidizable PUFAs), [[Acid ceramidase]] (ASAH1; cleaves [[Ceramide|ceramide]] to free fatty acids that feed membrane [[PUFA|PUFA]] incorporation—a GPX4/GSH/iron-independent sensitization axis in [[Senescent Cells|senescence]]), [[LPCAT3]] (remodels membrane phospholipids), [[NOX]] family NADPH oxidases, mitochondrial electron transport chain
- **Iron regulators**: [[Transferrin receptor 1|TFR1]] (iron uptake), [[Ferritin]] (iron storage), [[NCOA4]] (ferritinophagy cargo receptor), [[HO-1]] (heme degradation liberating iron)
## Detection & Biomarkers
- Loss of [[GPX4]] or [[System Xc⁻]] (SLC7A11) expression
- Accumulation of lipid hydroperoxides ([[C11-BODIPY]] 581/591 oxidation by flow cytometry)
- [[Malondialdehyde]] (MDA) and [[4-Hydroxynonenal]] (4-HNE) adducts
- Transmission electron microscopy showing shrunken mitochondria with increased membrane density
- Suppression by iron chelators ([[Deferoxamine]], [[Deferiprone]]), lipophilic antioxidants ([[Vitamin E]], [[Ferrostatin-1]], [[Liproxstatin-1]]), and GPx4 mimicking compounds
## Clinical Relevance
Ferroptosis has been implicated in [[Neurodegeneration|neurodegenerative diseases]] ([[Parkinson's Disease]], [[Alzheimer's Disease]], [[Huntington's Disease]]), [[Ischemia-reperfusion Injury]] (kidney, heart, brain), [[Diabetes Mellitus]] (pancreatic β-cell loss), and [[Cancer]]. In oncology, ferroptosis induction is a promising therapeutic strategy for therapy-resistant cancers (e.g., [[Breast Cancer]], [[Renal Cell Carcinoma]], [[Melanoma]], [[leukemia]]), particularly those with mesenchymal or drug-tolerant persister cell states that are highly dependent on GPx4 activity.

#

# 

## Documents

List of documents that mention this entity
  - [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]]
    - Regarding tumor resistance, SIRT6 silencing can overcome VEGF resistance by promoting Ferroptosis. Thus, SIRTs could act as novel biomarkers and therapeutic targets of GC.

  - [[task_output_adrenochrome_lipid_peroxidation_bridge_17_July_2026|Adrenochrome → Lipid Peroxidation Bridge]]
    - A task output analyzing the direct mechanistic bridge from [[Adrenochrome]] redox cycling to [[Lipid Peroxidation]], proposing adrenochrome as a dual ferroptosis inducer (ROS generation + GPX4 inhibition).

  - [[_document_ - Acid_ceramidase_modulates_the_lipid_profile_and_ex|Acid ceramidase modulates the lipid profile… (Soriano-Castell et al., 2026)]]
    - Primary study showing [[Acid ceramidase]] (ASAH1) over-expression in replicative senescence drives a pro-ferroptotic membrane lipid profile (elevated PL-[[PUFA|PUFAs]]), independent of [[GPX4]]/[[Glutathione|GSH]] and [[Iron|iron]], and is transmitted to neighbors via [[IL-6]]/[[IL-8]] SASP cytokines.

  - [[_document_ - Could this enzyme help remove "zombie" cells from our tissues?|Salk press release — "Could this enzyme help remove 'zombie' cells…"]]
    - Public summary framing ACase as a druggable [[Senolytic|senotherapeutic]] target for clearing senescent "zombie" cells via ferroptosis.

  - [[_document_ - Ferroptosis past present and future|Ferroptosis: past, present and future]]
    - Landmark 2020 review (Li et al., *Cell Death & Disease*) systematically summarizing ferroptosis mechanisms — system Xc⁻/[[SLC7A11]] cystine uptake, [[GPX4]] inactivation, iron metabolism ([[Transferrin]], [[Ferroportin]], [[DMT1]], [[STEAP3]]), lipid remodeling ([[ACSL4]], [[LPCAT3]], [[Phosphatidylethanolamine]]), the [[FSP1]]–[[Coenzyme Q10|CoQ10]] axis — and its roles across cancer, neurodegeneration, AKI, I/R injury and other diseases. Primary source for the entity notes created in this ingestion ([[Erastin]], [[SAT1]], [[ALOX15]], [[Sorafenib]], [[Artesunate]], [[Mitotane]], [[Apoptosis-Inducing Factor]], [[Mevalonate pathway]], etc.).

  - [[task_output_fsp1_coq10_nadph_ferroptosis_axis_24_August_2026|FSP1–CoQ10–NAD(P)H Ferroptosis Axis (deep dive)]]
    - Synthesis of the Doll et al. (2019) discovery that FSP1 uses NAD(P)H to regenerate CoQ10/ubiquinol at the plasma membrane, acting as a GPX4-independent parallel brake, and how MVA-pathway loss of ubiquinone converges on FSP1 to predict ferroptosis sensitivity.

  - [[task_output_anti_ferroptosis_intake_schedule_26_Sep_2026|Anti-Ferroptosis Intake Schedule]]
    - Wiki-coverage assessment plus the food-first daily schedule for vitamin E, vitamin A, and red palm oil; source of the tocotrienol-vs-tocopherol and vitamin-A potency tables now recorded in this note.


## Connections

- [[Lipid Peroxidation]] — interacts with
- [[GPX4]] — interacts with
- [[Glutathione]] — interacts with
- [[Fenton Reaction]] — interacts with
- [[Ferritin]] — interacts with
- [[NCOA4]] — interacts with
- [[FSP1]] — interacts with
- [[Ubiquinone]] — FSP1 substrate regenerated to ubiquinol, the membrane radical trap
- [[NADPH]] — Electron donor for FSP1-mediated ubiquinone reduction
- [[DHODH]] — interacts with
- [[System Xc-]] — interacts with
- [[ACSL4]] — interacts with
- [[Acid ceramidase]] — Novel positive regulator in senescence: over-expression enriches membrane PL-PUFAs via ceramide catabolism, sensitizing cells to ferroptosis through a GPX4/GSH/iron-independent axis; knockdown protects
- [[LPCAT3]] — interacts with
- [[NOX]] — interacts with
- [[Adrenochrome]] — Hypothesized dual ferroptosis inducer: generates ROS via redox cycling and may directly inhibit GPX4 via electrophilic arylation, analogous to RSL3
- [[System Xc-]] — Core cystine/glutamate antiporter; inhibition (e.g., by [[Erastin]]) depletes [[Glutathione|GSH]] and is the classic ferroptosis trigger
- [[SLC7A11]] — Catalytic light chain of system Xc-; transcriptionally repressed by [[p53]] to promote ferroptosis
- [[Erastin]] — Prototype ferroptosis inducer; inhibits system Xc- and activates chaperone-mediated autophagy of [[GPX4]]
- [[ALOX15]] — Arachidonate lipoxygenase downstream of the [[p53]]–SAT1 axis that amplifies lipid peroxidation
- [[SAT1]] — Polyamine-catabolism enzyme, p53 transcriptional target, engages [[ALOX15]] to drive ferroptosis
- [[Iron]] — Redox-active Fe²⁺ fuels the [[Fenton Reaction]] that propagates lipid radical chain reactions
- [[Transferrin]] — Iron-delivery protein; endocytosis via [[Transferrin receptor 1]] supplies labile iron for ferroptosis
- [[Sorafenib]] — HCC therapy whose ferroptosis induction is enabled by [[Retinoblastoma|Rb]] loss
- [[Artesunate]] — Anti-malarial that activates ferroptosis in pancreatic, ovarian, and HNC models
- [[Mitotane]] — ACC therapy; ACCs show exquisite sensitivity to ferroptosis induction
- [[Apoptosis-Inducing Factor]] — Mitochondrial flavoprotein; FSP1 was formerly named AIFM2
- [[Mevalonate pathway]] — Regulates selenocysteine tRNA maturation and thus [[GPX4]] levels
- [[SIRT3]] — Mitochondrial deacetylase; central anti-ferroptotic checkpoint via NADPH-GSH regeneration, IRP1/TfR1 iron control, and stabilization of the glutamate transporter [[SLC25A22]]
- [[SLC25A22]] — Mitochondrial glutamate transporter stabilized by SIRT3 (K83 deacetylation); supplies glutamate for GSH synthesis and blocks ferroptosis
- [[IDH2]] — Deacetylated/activated by SIRT3 to regenerate NADPH/GSH, supporting ferroptosis resistance
- [[MTHFD2]] — NADPH-generating one-carbon enzyme in the SIRT3 ferroptosis-defense network
- [[Catalase]] — ROS-scavenging enzyme in the SIRT3 anti-ferroptotic arm
- [[Tocotrienols]] — Most potent dietary vitamin E class against ferroptosis (EC₅₀ 0.12–0.36 μM vs 1.0–2.3 μM for tocopherols); GPX4-independent membrane radical trap
- [[Vitamin A]] — Retinol/retinal are direct lipid-radical traps more potent than α-tocopherol; ATRA transcriptionally upregulates GPX4, FSP1, GCH1, ACSL3
- [[Carotenoids]] — Provitamin A precursors and ¹O₂ quenchers occupying the same bilayer as the tocochromanols
- [[Red Palm Oil]] — Single-food co-delivery of the dietary radical-trapping tier (tocotrienols, carotenoids, CoQ10) on an oleic/palmitic vehicle
- [[Mitohormesis]] — Why dietary antioxidant dosing is scheduled away from exercise/fasting windows

## Linking Summary
- New links added: [[Lipid Peroxidation]], [[GPX4]], [[Glutathione]], [[Fenton Reaction]], [[Ferritin]], [[NCOA4]], [[FSP1]], [[DHODH]], [[System Xc-]], [[ACSL4]], [[LPCAT3]], [[NOX]], [[Transferrin receptor 1]], [[HO-1]], [[Malondialdehyde]], [[4-Hydroxynonenal]], [[Deferoxamine]], [[Deferiprone]], [[Vitamin E]], [[Ferrostatin-1]], [[C11-BODIPY]], [[Adrenochrome]], [[Acid ceramidase]], [[Ceramide]], [[Sphingosine]], [[Sphingomyelin]], [[Phospholipid]], [[PUFA]], [[IL-6]], [[IL-8]], [[SASP]], [[Senescent Cells]], [[SLC7A11]], [[Erastin]], [[SAT1]], [[ALOX15]], [[Transferrin]], [[Ferroportin]], [[DMT1]], [[STEAP3]], [[Sorafenib]], [[Artesunate]], [[Mitotane]], [[Apoptosis-Inducing Factor]], [[Mevalonate pathway]], [[Phosphatidylethanolamine]], [[CISD1]], [[NFS1]], [[Clear cell renal cell carcinoma]], [[Head and neck cancer]], [[Adrenocortical carcinomas]], [[Pancreatic Cancer]], [[Ovarian Cancer]], [[Gastric Cancer]], [[Colorectal Cancer]], [[Lung Cancer]], [[Stroke]], [[Traumatic Brain Injury]], [[Ubiquinone]], [[NADPH]], [[task_output_fsp1_coq10_nadph_ferroptosis_axis_24_August_2026]]
  - Strong connections to strengthen: [[Ferroptosis]] ↔ Lipid Peroxidation, [[Ferroptosis]] ↔ [[GPX4]], [[Ferroptosis]] ↔ [[Glutathione]], [[Ferroptosis]] ↔ Fenton Reaction, [[Ferroptosis]] ↔ Ferritin, [[Ferroptosis]] ↔ [[Adrenochrome]] (dual mechanism hypothesis)
  - Sex-dimorphism enrichment (2026-09-03): hormone-gated MBOAT1/2 remodeling (Cell 2023), Gpx4-KO kidney NRF2 resilience (Ide 2022), cardiac estradiol/SmgGDS and doxorubicin protection, testosterone renal context (Park 2004). New links: [[MBOAT1]], [[MBOAT2]], [[NRF2]].

