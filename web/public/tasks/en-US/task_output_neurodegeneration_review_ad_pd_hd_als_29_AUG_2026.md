---
title: "Neurodegeneration Review: AD, PD, HD, ALS/FTD — Comparative Synthesis from the Wiki, Graphs, and 2025–2026 Literature"
description: Comparative review of neurodegenerative disease (Alzheimer's, Parkinson's, Huntington's, ALS/FTD spectrum) synthesizing the wiki's notes, triples-graph and wiki-graph analyses, and web research on the 2025–2026 therapeutic and biomarker landscape. Focuses on shared convergent mechanisms versus disease-specific differences in trigger, vulnerable cell type, spread, and therapeutic logic.
created: 2026-08-29
updated: 2026-08-29
type: task-output
tags:
  - neurodegeneration
  - alzheimers-disease
  - parkinsons-disease
  - huntingtons-disease
  - als
  - tauopathy
  - proteinopathy
  - comparative-review
---

# Neurodegeneration Review — AD, PD, HD, ALS/FTD

> [!info]
> **Source context.** Primary basis: the wiki's own notes — [[Neurodegeneration]], [[Alzheimer's Disease]], [[Parkinson's Disease]], [[Huntington's Disease]], [[Amyotrophic Lateral Sclerosis]], [[Tau]], [[Tauopathy]], [[TDP-43]], [[C9orf72]], [[SOD1]], [[HTT]], [[Alpha-synuclein]], [[Frontotemporal Dementia]], plus the oxidative-stress ([[Oxidative Stress]], [[Ferroptosis]], [[Lipid Peroxidation]]), neuromelanin ([[Neuromelanin]], [[Lewy Bodies]], [[Pathogenic Threshold of Neuromelanin]]), autophagy ([[Autophagy]], [[TFEB]]), sirtuins ([[SIRT1]]–[[SIRT7]]), senescence ([[Senescence]], [[SASP]], [[Inflammaging]]), COMT, epigenetics and adrenochrome topics. Quantitative statements about "the graph" come from `wiki-out/wiki-graph.json` (3,007 nodes / 35,150 wiki-link edges) and BFS traversal of `graphify-out/graph.json`. Therapeutic/biomarker updates (2024–2026) come from web research (FDA/EMA announcements, uniQure/Roche/Biogen releases, *JAMA Neurology*, *Nature Medicine*, *Molecular Psychiatry* 2025–2026 reviews) — each flagged as **[web]** and listed in Sources. Wiki-sourced statements link to the relevant note.

---

## Executive Summary

[[Neurodegeneration]] — the progressive loss of neuron structure and function — presents clinically as a family of distinct diseases, yet mechanistically converges on a small set of aging-linked failures: **proteostasis collapse**, **mitochondrial dysfunction**, **oxidative and nitrative stress**, **neuroinflammation**, and **prion-like spread of misfolded proteins**. The wiki's own graph makes this convergence visible: [[Oxidative Stress]] is the single largest hub in the entire knowledge base (591 edges), and every major disease node shares a common core of neighbors ([[SIRT1]], [[Autophagy]], [[cGAS-STING Pathway]], [[TFEB]], [[Ferroptosis]]).

But the *differences* between [[Alzheimer's Disease]] (AD), [[Parkinson's Disease]] (PD), [[Huntington's Disease]] (HD) and [[Amyotrophic Lateral Sclerosis]]/[[Frontotemporal Dementia]] (ALS/FTD) are at least as informative as the similarities, and they run along four axes:

1. **Trigger**: redundant age-driven proteinopathies (AD) vs. a self-oxidizing neurotransmitter (PD) vs. a deterministic repeat expansion (HD) vs. RNA-binding proteostasis failure (ALS/FTD).
2. **Vulnerable cell type**: hippocampal/entorhinal memory circuits vs. neuromelanin-rich [[Substantia Nigra]] dopaminergic neurons vs. striatal medium spiny neurons vs. motor neurons — each destroyed by a different local chemistry.
3. **Spread topology**: limbic→cortical (AD), caudal brainstem→limbic→cortical (PD), striatum-centric (HD), corticospinal ± frontal (ALS).
4. **Therapeutic logic**: extracellular immunotherapy works where the target is extracellular (AD anti-amyloid antibodies — now approved); intracellular, genetically defined targets demand gene silencing (HD's AMT-130, ALS's tofersen — the 2025–2026 breakthroughs); PD, with no dominant single target, advances the broadest pipeline (anti-[[Alpha-synuclein]] antibody prasinezumab in Phase 3, GCase activation with ambroxol, LRRK2 inhibition).

> [!important]
> 2024–2026 mark an inflection: AD gained two approved anti-amyloid antibodies (lecanemab, donanemab) and FDA-cleared blood biomarkers; HD reported the first ever disease-slowing result (AMT-130, 75% slowing at 36 months, BLA filed Q1 2026); ALS demonstrated precision-neurology (tofersen for SOD1-ALS, presymptomatic treatment in the ATLAS trial); and PD's first α-synuclein antibody entered Phase 3. Meanwhile TDP-43 proteinopathy (LATE) emerged as the third major contributor to late-life dementia, physically connecting the AD and ALS/FTD columns of the table below.

---

## 1. The Convergent Frame: What All Neurodegeneration Shares

The wiki's [[Neurodegeneration]] note and its neighbors describe five interacting failure modes. They are shared across diseases — but with disease-specific weightings.

### 1.1 Proteostasis collapse

Every major neurodegenerative disease is defined by a misfolded protein: [[Amyloid Beta]] + [[Tau]] (AD), [[Alpha-synuclein]] (PD), mutant huntingtin ([[HTT]]) (HD), [[TDP-43]] and [[SOD1]] (ALS). Clearance runs through the [[Autophagy]]–lysosome system and the ubiquitin–proteasome system; the wiki's autophagy topic shows [[TFEB]]-mediated autophagy rescuing dopaminergic neurons from α-synuclein toxicity (PD) and mitigating tau/amyloid burden (AD), and [[PGC-1α]]-driven TFEB activation rescuing HD proteotoxicity. Interventions that raise autophagic flux ([[Intermittent Fasting]], [[Caloric Restriction]], exercise) recur in the wiki's AD, PD and HD notes as the closest thing to a shared therapeutic bet.

### 1.2 Mitochondrial dysfunction

The wiki grounds this disease-by-disease: Complex I deficiency of ~30–40% in the [[Substantia Nigra]] in PD (reproduced by [[MPTP]], [[Rotenone]], paraquat); Aβ–mitochondrial interaction in AD; mHTT-driven [[PGC-1α]] suppression in HD; and SOD1/TDP-43 mitochondrial impairment in ALS ([[Mitochondrial Dysfunction]] note). All five canonical PD genes (SNCA, LRRK2, PRKN, PINK1, DJ-1) have mitochondrial regulatory roles; LRRK2 directly phosphorylates [[DRP1]] to drive excess fission. Impaired [[Mitophagy]] (PINK1/Parkin) is both a PD mechanism and — per the wiki's senescence document (Hruby & Higuchi-Sanabria 2025) — a *bridge* by which [[Mitochondrial Dysfunction|mitochondrial dysfunction]] induces [[Senescence]] and the [[SASP]], feeding [[Inflammaging]].

### 1.3 Oxidative & nitrative stress

The [[Oxidative Stress]] topic is the wiki's largest hub for good reason: the brain combines high O₂ flux, lipid-rich membranes ([[Lipid Peroxidation]] → [[Malondialdehyde]], [[4-Hydroxynonenal]]), and modest antioxidant reserve. [[Nitrative Stress]] adds [[Peroxynitrite]]-mediated nitration — of α-synuclein in PD, tau/Aβ in AD, TDP-43 and neurofilaments in ALS ([[Reactive Nitrogen Species]]). [[Ferroptosis]] — iron-catalyzed lipid-peroxidation death — is the graph's shared-neighbor wildcard, linked to all four diseases.

### 1.4 Neuroinflammation and innate immunity

Activated microglia (NOX2 respiratory burst, iNOS → [[Peroxynitrite]]) and reactive A1 astrocytes amplify damage in all four diseases ([[Neuroinflammation]]). The wiki's most distinctive contribution here is the **[[cGAS-STING Pathway]]** cluster: cytosolic [[Mitochondrial DNA|mtDNA]] and cytoplasmic chromatin fragments (senescence) or TDP-43-driven mitochondrial rupture engage cGAS-STING → type-I interferon signaling. In the wiki graph, the entire AD/tau/FTD/TDP-43/C9orf72 contingent sits in one community named for this pathway — the innate immune axis is the graph's organizing principle for the tau/TDP-43 diseases.

### 1.5 Aging as the master risk factor

Aging is the dominant risk factor for AD, PD and ALS, and the wiki's senescence topic provides the mechanism: senescent glia accumulate, secrete a pro-inflammatory SASP ([[IL-6]], [[IL-1β]]), and create a feed-forward loop with proteinopathy. The PD note documents a circulating SASP signature in urinary extracellular vesicles that distinguishes PD patients from matched controls; the AD note documents epigenetic-age acceleration in AD brains ([[Epigenetic Clock]], [[DNA Methylation]] drift).

---

## 2. Disease Profiles

### 2.1 Alzheimer's Disease — the amyloid/tau (± TDP-43) dementia

**Clinicopathology.** Progressive amnestic dementia; the most common cause of dementia and the most common neurodegenerative disease. Hallmarks: extracellular [[Amyloid Beta]] plaques (Aβ1–42) and intracellular [[Tau]] neurofibrillary tangles, beginning in medial temporal lobe and spreading limbic→association cortex over ~20 years of preclinical biomarker phase.

**Wiki-grounded mechanisms.** The [[Neurodegeneration]] note details the metal–redox engine: Aβ (via His6/13/14) binds Cu²⁺/Fe³⁺ and catalyzes [[Fenton Reaction]] chemistry, generating H₂O₂ that peroxidizes lipids, carbonylates proteins, oxidizes nucleic acids (8-oxo-dG) — and H₂O₂ inhibits [[PP2A]], the main tau phosphatase, locking tau into its hyperphosphorylated, aggregation-prone state. Oxidized tau seeds propagate trans-synaptically in a prion-like manner. The AD note adds the epigenetic layer: global hypomethylation, histone deacetylation ("closed" chromatin at memory genes), miRNA dysregulation; and the sirtuin layer — [[SIRT1]] (protective: Beclin-1 deacetylation → autophagy; CREB-mediated tau O-GlcNAc control), [[SIRT3]] (mitochondrial protection, mirrors Aβ deposition), [[SIRT2]] (harmful — inhibition is an active therapeutic strategy), with serum SIRT1/3/6 inversely correlating with AD.

**2025–2026 state [web].** Two anti-amyloid monoclonals are FDA-approved for early symptomatic AD with confirmed amyloid: **lecanemab** (Leqembi; traditional approval Jul 2023; IV-maintenance dosing approved Jan 2025; subcutaneous self-injection approved 2025; EU approval 2025/2026) and **donanemab** (Kisunla; full approval Jul 2024; ~35% slowing on iADRS at 76 weeks in TRAILBLAZER-ALZ 2; monthly dosing that stops once plaques clear). Both slow decline modestly (~25–35%) rather than reverse it; both carry ARIA (edema/microhemorrhage) risk, highest in APOE ε4 homozygotes, mandating MRI monitoring. Aducanumab was withdrawn from market in early 2024. The field is now defined by **blood diagnostics** — plasma p-tau217 assays received FDA clearance in 2025 — and by anti-tau immunotherapies/ASOs in mid-stage trials. Critically, **TDP-43 proteinopathy (LATE)** is now recognized as a major co-pathology: present in roughly a third of brains over 85, it mimics or compounds AD, accelerates decline when comorbid with ADNC, and predicts poorer anti-amyloid response — one reason amyloid-positive trials show heterogeneous benefit.

### 2.2 Parkinson's Disease — the self-poisoning dopamine neuron

**Clinicopathology.** Second most common neurodegenerative disease; bradykinesia, rigidity, rest tremor, postural instability, plus prodromal non-motor features (REM-sleep behavior disorder, anosmia, constipation). Defined by loss of neuromelanin-rich dopaminergic neurons of the [[Substantia Nigra|substantia nigra pars compacta]] and [[Lewy Bodies]] (α-synuclein aggregates), with a caudal-brainstem→limbic→cortical spread pattern and gut/vagal entry hypotheses ([[Dorsal Motor Nucleus of the Vagus]]).

**Wiki-grounded mechanisms.** PD is the wiki's most densely annotated disease (352 file mentions; 293-edge node). Three intersecting oxidative mechanisms ([[Neurodegeneration]] note): **(1) dopamine autoxidation** — the catechol ring oxidizes (iron or [[Monoamine oxidase|MAO]]) to dopamine quinones that covalently adduct α-synuclein cysteines and to 6-OHDA; **(2) Complex I deficit** (30–40%) reproducing the MPTP/MPP⁺/rotenone model; **(3) microglial NO + superoxide → peroxynitrite → nitrated α-synuclein (Tyr39/125/133) → [[Lewy Bodies]]**. Uniquely, the wiki develops the **[[Pathogenic Threshold of Neuromelanin]]** model: [[Neuromelanin]] is protective (buffers catechols and redox-active metals) until intracellular burden crosses a late-life ceiling, after which proteostasis collapse, lysosomal failure, metal redox cycling and mitochondrial stress converge — explaining why PD selectively kills the *most* neuromelanin-laden neurons. The COMT topic adds the pharmacology angle: [[COMT Inhibitors]] (entacapone, opicapone, tolcapone) prolong [[Levodopa]] action but, by blocking catechol exit routes, can theoretically raise aminochrome/adrenochrome load under oxidative stress — the [[Adrenochrome]] topic's PD relevance. The sirtuin layer mirrors AD's: [[SIRT1]] promotes autophagic α-synuclein degradation, [[SIRT3]] counters α-synuclein mitochondrial toxicity (declining with age in SNpc), [[SIRT2]] is harmful (deletion protective).

**2025–2026 state [web].** No disease-modifying therapy is approved. The pipeline is the broadest in neurology: **prasinezumab** (anti-α-synuclein antibody) entered **Phase 3 (PARAISO, ~900 participants, Nov 2025)** after Phase 2 showed slowing in biomarker-defined *rapid progressors* (Nat. Med. 2024/2025); **ambroxol** (GCase chaperone — see the wiki's [[Glucocerebrosidase]] and [[Ambroxol]] notes) is in **Phase 3 (ASPro-PD, UCL, 330 participants, GBA1-enriched, 2025)** after a Phase 2 in PD dementia showed safety without clear benefit (JAMA Neurol. 2025); brain-penetrant **LRRK2 inhibitors** (e.g., GSK3357679) advance with GPNMB emerging as a lysosomal-stress pharmacodynamic biomarker; α-synuclein **seed amplification assay (SAA)** received biomarker-qualification opinion (2024) enabling biologically-confirmed trial enrollment. Dopaminergic replacement ([[Levodopa]] + [[COMT Inhibitors]] + MAO-B inhibitors + DBS) remains purely symptomatic.

### 2.3 Huntington's Disease — the deterministic repeat expansion

**Clinicopathology.** Autosomal dominant; CAG-repeat expansion (>36) in exon 1 of *HTT* → toxic-gain-of-function mutant huntingtin (mHTT) with striatal medium-spiny-neuron (indirect pathway) degeneration; chorea, psychiatric disturbance, cognitive decline; mid-life onset with genetic anticipation. The only common neurodegenerative disease where *genotype fully predicts disease* — which is why its therapeutic story is the purest test of the gene-silencing paradigm.

**Wiki-grounded mechanisms.** The wiki's HD note is the thinnest of the four (a gap noted in §5) but captures the essentials: [[Autophagy]] is the primary mHTT clearance route and enhancing [[Autophagic Flux]] the major research direction; [[TFEB]] activation via [[PGC-1α]] rescues proteotoxicity; [[SIRT1]] is strongly protective — brain-specific knockout *worsens* HD, overexpression rescues survival and [[BDNF]] transcription via the CRTC1–CREB axis (BDNF is produced cortically and transported to striatum; mHTT disrupts this) — while [[SIRT2]] inhibition is neuroprotective. Graph-wise, HD sits in the wiki's "SIRT1" community (community 8) with TFEB, [[PGC-1α]], [[Ferroptosis]], [[Caloric Restriction]] — the *metabolic/epigenetic* cluster rather than the immune cluster.

**2025–2026 state [web].** September 2025 delivered the field's first positive disease-modifying pivotal result: **AMT-130** (uniQure) — a one-time AAV5-microRNA gene therapy delivered by MRI-guided convection-enhanced infusion into the striatum — showed **75% slowing of cUHDRS decline at 36 months** (p=0.003) vs. Enroll-HD propensity-matched external controls, 60% slowing on Total Functional Capacity (p=0.033), and CSF NfL *below baseline* (−8.2% vs. expected +30–45%/3 yr). BLA was targeted for Q1 2026 with possible approval in late 2026. Caveats: small treated n (12 high-dose), open-label vs. external control. Roche's **tominersen** (HTT ASO) continues in a restricted adult-manifesting trial after its Phase 3 failure, and oral/silencing programs follow. Symptomatic care (VMAT2 inhibitors for chorea) is unchanged.

### 2.4 ALS and the ALS–FTD spectrum — RNA-binding proteostasis failure

**Clinicopathology.** Progressive motor-neuron degeneration (corticospinal ± anterior horn), median survival 2–5 years from diagnosis; ~10% familial. **~97% of ALS shows TDP-43 pathology**, and ~40% of familial ALS (plus ~10% sporadic) is C9orf72-repeat driven; C9orf72 also causes FTD. ALS and FTD are now one disease spectrum — TDP-43 proteinopathy with different anatomical epicenters. The wiki graph encodes this directly: ALS↔FTD, ALS↔TDP-43, ALS↔C9orf72, FTD↔TDP-43, FTD↔Tau are all direct edges, and TDP-43's highest-Jaccard neighbors are C9orf72 (0.250) and [[Tauopathy]] (0.182).

**Wiki-grounded mechanisms.** The [[Neurodegeneration]] note details the motor-neuron-specific cascade: mutant [[SOD1]] (A4V, G93A; >180 variants) gains toxic function — aberrant copper chemistry plus insoluble aggregates — and triggers ER stress/UPR via Derlin-1; astrocytic EAAT2 loss → [[Excitotoxicity|excitotoxic]] Ca²⁺ overload → [[NADPH Oxidase]] (NOX2) and calpain activation. The [[TDP-43]] note adds the modern layer: cytoplasmic mislocalization → loss of nuclear RNA-splicing repression (cryptic exons in *STMN2*, *UNC13A*) → axonal instability, plus mitochondrial rupture engaging [[cGAS-STING Pathway]]; [[C9orf72]] adds toxic RNA foci + dipeptide-repeat proteins on top of haploinsufficiency (normal C9orf72 protein *regulates autophagy* — a tidy mechanistic loop with §1.1). [[SARM1]] (axon-destruction NADase) is a druggable node in the wiki's ALS neighborhood. The ALS node sits in the wiki's "Inflammation" community — fit for a disease whose glial (microglial/astrocytic) contribution is decisive.

**2025–2026 state [web].** Four FDA-approved drugs exist: riluzole (1995), edaravone (2017), sodium phenylbutyrate/taurursodiol (RELYVRIO — **withdrawn April 2024** after Phase 3 failure), and **tofersen** (Qalsody, Apr 2023) — the first *precision* neurodegenerative therapy: an intrathecal SOD1-ASO approved on **biomarker grounds** (plasma NfL −55%) after its functional endpoint missed, now being tested **presymptomatically** in the ATLAS trial (NfL-elevated SOD1 carriers; first data 2026–27). The ASO wave continues: C9orf72-targeting ASOs (Wave WVE-004 — allele-selective; Novartis) in Phase 1/2; FUS-targeting ION363 (FUSION trial); and — potentially applicable to ~97% of ALS — an **ATXN2 ASO** (stabilizes TDP-43) and **UNC13A cryptic-exon ASO (FUNCtion)**. Anti-inflammatory masitinib (mast-cell/tyrosine-kinase) entered a confirmatory Phase 3 (AB23005, 408 participants, 2025). ~295 ALS trials were active as of mid-2026; plasma **NfL** is now the field's validated pharmacodynamic surrogate.

---

## 3. Head-to-Head Comparison

| Dimension | **Alzheimer's** | **Parkinson's** | **Huntington's** | **ALS / FTD** |
|---|---|---|---|---|
| **Core proteinopathy** | [[Amyloid Beta]] (extracellular) + [[Tau]] (intracellular); ± [[TDP-43]] (LATE), ± Lewy | [[Alpha-synuclein]] ([[Lewy Bodies]]) | Mutant [[HTT]] (polyQ, intranuclear/inclusion) | [[TDP-43]] (~97% ALS; ~45% FTD); [[SOD1]], [[FUS]], [[C9orf72]] DPRs in subsets; [[Tau]] in FTD-tau |
| **Primary trigger** | Age-driven redundant proteinopathies; APOE ε4; metal-redox amplification | Dopamine's intrinsic autoxidation + Complex I defect + neuromelanin threshold | **Deterministic** CAG expansion (>36) in *HTT* | Repeat expansions (C9orf72), SOD1/FUS/TARDBP mutations; TDP-43 proteostasis failure (sporadic) |
| **Heritability** | ~1–5% (PSEN1/2, APP); APOE ε4 common risk | ~5–10% monogenic (SNCA, LRRK2, GBA1, PRKN, PINK1, DJ-1); mostly sporadic | 100% autosomal dominant | ~10% familial; C9orf72 = ~40% of fALS |
| **Vulnerable cell type** | Hippocampal/entorhinal & association-cortex glutamatergic neurons | Neuromelanin-rich SNpc [[Dopaminergic Neurons]] | Striatal **medium spiny neurons** (indirect pathway) | Upper + lower **motor neurons** (ALS); frontal/temporal neurons (FTD) |
| **Why that cell** | Aβ-metal Fenton chemistry; PP2A oxidation → tau; synaptic plasticity dependence | Dopamine oxidation chemistry is unavoidable in dopamine neurons; iron/nm load; threshold model | mHTT transcriptional dysregulation (CRTC1–CREB→BDNF), proteostasis, cortico-striatal glutamate | Highest metabolic demand; weakest EAAT2 clearance → excitotoxicity; long axons/SARM1 |
| **Spread topology** | Trans-entorhinal → limbic → neocortical (Braak), tau prion-like | Caudal brainstem → locus coeruleus → SNpc → limbic → cortex (Braak); gut/vagal entry | Striatum-centric; cortical spread later | Motor cortex + spinal cord (ALS); frontal/temporal (FTD); TDP-43 across the spectrum |
| **Prodrome / tempo** | ~20-yr silent amyloid phase; slow cognitive decline (decades) | Decade-long prodrome (RBD, anosmia, constipation); slow motor progression | Genotype known from birth; onset ~30–50 y; 15–20 y course | Abrupt; fastest of the four (median 2–5 y from diagnosis) |
| **Key biomarkers [web]** | Amyloid/tau PET; CSF Aβ42/40, p-tau181/Aβ42; **plasma p-tau217 (FDA-cleared 2025)** | α-syn **SAA** (qualification opinion 2024); DAT-SPECT; neuromelanin MRI; GPNMB | CAG genotype; CSF/plasma **NfL**; striatal volumetric MRI | **Plasma NfL** (validated surrogate); genetics; STMN2/UNC13A cryptic-exon assays (emerging) |
| **Approved disease-modifying [web]** | Lecanemab (2023), donanemab (2024) — ~25–35% slowing, ARIA risk | **None** | **None** (AMT-130 BLA filed Q1 2026) | Tofersen (2023, SOD1-ALS only, biomarker-based) |
| **Symptomatic standard** | Cholinesterase inhibitors (Zunveyl 2025), memantine | Levodopa/carbidopa, MAO-B, [[COMT Inhibitors]], dopamine agonists, DBS | VMAT2 inhibitors (chorea) | Riluzole, edaravone (RELYVRIO withdrawn 2024) |
| **Late-stage pipeline [web]** | Anti-tau immunotherapies/ASOs; blood-biomarker-guided early treatment | Prasinezumab Ph3 (PARAISO); ambroxol Ph3 (ASPro-PD); LRRK2 inhibitors (GSK); stem-cell (bemdaneprocel) | AMT-130 (BLA Q1 2026); tominersen (restricted); oral HTT-lowering | C9orf72 ASOs (WVE-004); FUS ASO (ION363); ATXN2 ASO; UNC13A ASO (FUNCtion); masitinib Ph3; STMN2 restoration (QRL-201) |
| **Dominant wiki topic** | Oxidative stress, epigenetics, sirtuins, autophagy | Neuromelanin, adrenochrome/COMT, senescence/SASP | Sirtuins (SIRT1), autophagy/TFEB | Inflammation, cGAS-STING, oxidative stress |

---

## 4. Why the Differences Matter — Selective Vulnerability and Therapeutic Logic

### 4.1 Selective vulnerability is local chemistry, not global damage

The wiki's strongest single explanatory asset is that each disease's vulnerable neuron dies of a *local* version of the same stress. Dopamine neurons are poisoned by the neurotransmitter they carry (autoxidation → quinones → α-synuclein adducts; [[Neuromelanin]] as dose-dependent double agent); motor neurons are killed by their own excitatory drive once EAAT2-dependent glutamate clearance fails; striatal MSNs die of a transcriptional/nutritional coup (cortical BDNF loss + mHTT); hippocampal neurons succumb to the slow metal-redox/tau cascade seeded by Aβ. This reframes "why is one cell type lost when the protein is everywhere?" — the answer is that the *protein is the tinder, and the cell's local chemistry is the spark*.

### 4.2 Therapeutic paradigm follows target topology

> [!tip]
> **The unifying rule of 2025–2026 neurology [web]:** you can immunize against an *extracellular* aggregate (AD Aβ — approved; PD α-syn — Phase 3), but *intracellular* toxic proteins require nucleic-acid therapeutics — ASOs (tofersen, tominersen, WVE-004, ION363) or AAV-microRNA (AMT-130). Where no single dominant toxic species exists (sporadic AD, sporadic ALS), the field falls back on shared-axis interventions: proteostasis (TFEB/autophagy), mitochondria (CoQ10/[[MitoQ]], creatine — the wiki's cross-PD/HD/ALS trial), and anti-inflammatory approaches (masitinib; senolytics/senomorphics per the wiki's PD-senescence work).

This explains the observed success/failure pattern: HD — pure single-gene intracellular disease — finally succeeded *only* when therapy went directly to the nucleic acid (AMT-130) rather than the protein aggregates; AD — extracellular plaque — succeeded with antibodies but only modestly, because tau/TDP-43/vascular co-pathologies proceed independently; PD — hybrid target biology — splits its pipeline across antibody, chaperone, kinase and metabolic bets; ALS — a *spectrum* of distinct molecular etiologies sharing a final common TDP-43 pathway — succeeded per-subtype (SOD1) and is now converging on pathway-wide targets (ATXN2/TDP-43, UNC13A).

### 4.3 The biomarker revolution is the common enabler

Every 2024–2026 breakthrough above leans on a biomarker: donanemab's plaque-clearance-based dosing (amyloid PET), prasinezumab's rapid-progressor enrichment (SAA), AMT-130's external-control methodology (NfL), tofersen's accelerated approval (pNfL), ATLAS's presymptomatic enrollment (elevated NfL before symptoms). The wiki's own sirtuin notes anticipate this (serum SIRT1/3/6 as inverse AD correlates); the graph's biomarker nodes ([[Positron Emission Tomography]], [[Magnetic Resonance Imaging]], [[Flortaucipir]]) are the connective tissue to expand next.

---

## 5. What the Wiki's Graphs Show

### 5.1 Wiki-graph topology (3,007 nodes / 35,150 edges)

- **Hub hierarchy**: [[Oxidative Stress]] (591 edges) > [[Parkinson's Disease]] (293) > [[Alzheimer's Disease]] (203) > [[Neurodegeneration]] (189) > [[Neuromelanin]] (134) > [[COMT|COMT (Catechol-O-methyltransferase)]] (122) > [[Dopamine]] (124) / [[Mitochondrial Dysfunction]] (136) > [[Alpha-synuclein]] (65) > [[Tau Protein|Tau]] (69) > ALS (50) > [[Huntington's Disease]] (38). PD's edge count is more than 5× HD's and 6× FTD's — the wiki is, structurally, a PD-and-oxidation-centric corpus with AD as its cognitive-disease mirror.
- **Community split with mechanistic meaning**: PD + [[Alpha-synuclein]] + [[Neuromelanin]] + [[Lewy Bodies]] + COMT/adrenochrome share one community (1, "Parkinson's Disease" — the catecholamine-oxidation block), while **AD, [[Tau]], [[Tauopathy]], [[TDP-43]], [[C9orf72]], [[Frontotemporal Dementia]] all cluster in community 7, named "[[cGAS-STING Pathway]]"** — i.e., the graph independently recovered the modern insight that the tau/TDP-43 proteinopathy family is organized around innate-immune/interferon signaling. ALS sits in the "Inflammation" community (3) and HD in "SIRT1" (8) — the graph's way of saying ALS is glia-dominated and HD is metabolism/epigenetics-dominated.
- **Direct disease interlocks match clinical reality**: AD↔FTD, ALS↔FTD, AD↔[[Tau]], PD↔[[Alpha-synuclein]], ALS↔[[TDP-43]]↔[[C9orf72]], FTD↔[[Tau]]/[[Tauopathy]] — the graph already encodes the ALS–FTD spectrum and the AD–tauopathy continuum.

### 5.2 Shared-neighbor (Jaccard) analysis of disease pairs

| Pair | Shared neighbors | Jaccard | Most overlapping concepts |
|---|---|---|---|
| AD & PD | 94 | **0.263** | [[Oxidative Stress]], [[SIRT1]], [[Autophagy]], [[Aging]], [[SIRT3]], [[Inflammaging]], [[cGAS-STING Pathway]], [[Ferroptosis]], [[Mitophagy]] |
| TDP-43 & C9orf72 | 7 | **0.250** | [[cGAS-STING Pathway]], cGAS, STING, type-I interferon, ALS, FTD |
| PD & α-synuclein | 58 | 0.216 | [[Autophagy]], [[TFEB]], [[Neuromelanin]], [[Dopamine]], [[Substantia Nigra Pars Compacta]], [[Peroxynitrite]] |
| TDP-43 & Tauopathy | 6 | 0.182 | cGAS-STING, mtDNA, type-I interferon, proteinopathy, FTD |
| AD & ALS | 29 | 0.143 | [[SIRT1]], [[SIRT3]], [[SIRT6]], cGAS-STING, DNA damage, [[Lipid Peroxidation]], [[Peroxynitrite]] |
| AD & HD | 25 | 0.128 | [[SIRT1]], [[Autophagy]], [[TFEB]], [[PGC-1α]], [[SIRT2]], [[Unfolded Protein Response]], [[Calcium]] |
| HD & ALS | 6 | 0.080 | [[SIRT1]], cGAS-STING, UPR, proteinopathy, phenylbutyrate |

Reading: AD–PD is the wiki's most entangled disease pair (shared aging/oxidation/sirtuin axis); HD is the most *distinct* (pure-genetic metabolic profile); and the TDP-43–C9orf72–FTD triad is essentially inseparable in the graph — an accurate rendering of the ALS–FTD spectrum.

### 5.3 Where each disease lives in the repo's topics (file-mention counts)

| Topic | AD | PD | HD | ALS |
|---|---|---|---|---|
| `_link/` (shared entities) | 158 | 156 | 40 | 30 |
| oxidative_stress | 27 | 26 | 1 | 3 |
| sirtuins | 17 | 19 | 13 | 6 |
| adrenochrome | 16 | 27 | – | 1 |
| epigenetics | 16 | 15 | 5 | 7 |
| autophagy | 15 | 15 | 8 | 2 |
| **neuromelanin** | 4 | **74** | 2 | – |
| comt | 2 | 11 | – | – |
| senescence | 3 | 5 | 2 | 1 |

[[Parkinson's Disease]] is the repo's most cross-referenced disease overall (352 files), driven by the neuromelanin and adrenochrome topics; [[Alzheimer's Disease]] (264 files) is the most evenly distributed across oxidative-stress, sirtuin, epigenetic and autophagy topics; HD is sirtuin/autophagy-skewed; ALS is the most concentrated in shared `_link/` entities (the cGAS-STING/TDP-43 documents).

### 5.4 Graphify traversal findings (triples graph)

BFS traversal of `graphify-out/graph.json` on the four diseases converges on the same hub set the wiki graph shows — [[Oxidative Stress]], [[Mitochondrial Dysfunction]], [[Mitophagy]], [[Lysosomal Dysfunction]], [[Neuroinflammation]], [[cGAS-STING Pathway]], [[SIRT1]], [[TFEB]], [[Ferroptosis]] — plus disease-specific pockets: the PD pocket ([[Substantia Nigra Pars Compacta]], [[MPTP]], [[Lewy Bodies]], [[Pathogenic Threshold of Neuromelanin]], [[Glucocerebrosidase]]), the AD pocket ([[Amyloid Beta]], [[Tau]], [[APOE4]], [[APOE3 Christchurch]], [[5xFAD]], disease-associated microglia), and the ALS/FTD pocket ([[SARM1]], [[Excitotoxicity]], [[TDP-43]], stress granules). The sirtuin document-triples additionally tie SIRT1/SIRT3 activation to PD/HD/ALS motor-neuron metabolic abnormalities — consistent with §5.3's sirtuin skew for HD.

---

## 6. Convergence vs. Divergence — the Synthesis

> [!important]
> **One sentence version:** neurodegenerative diseases share a *matrix* (aging + proteostasis failure + mitochondrial/oxidative stress + innate immune activation) but differ in the *initial condition* (which protein misfolds, in which cell, under which local chemistry), and therapy succeeds only when it is matched to that initial condition — extracellular aggregates → antibodies; genetically defined intracellular toxins → ASO/gene silencing; no dominant species → metabolic/senolytic/anti-inflammatory shared-axis bets.

| Convergent (shared) | Divergent (disease-specific) |
|---|---|
| Proteostasis collapse; [[Autophagy]]/lysosome + UPS failure | Which protein, and its subcellular/extracellular location |
| [[Mitochondrial Dysfunction]] + impaired [[Mitophagy]] | Complex I (PD) vs mtDNA-rupture/TDP-43 (ALS) vs Δψm/PGC-1α (HD) vs Aβ-ETC (AD) |
| Oxidative/nitrative stress, lipid peroxidation, [[Ferroptosis]] | Dopamine autoxidation (PD, unique chemical idiosyncrasy) vs Fenton-metal Aβ (AD) vs NOX2/calpain excitotoxicity (ALS) |
| [[Neuroinflammation]]; microglia/astrocytes; cGAS-STING | Community-of-disease weight: immune-dominant (ALS/FTD/tau) vs chemistry-dominant (PD) vs epigenetic-dominant (HD) |
| [[Senescence]]/[[SASP]]/[[Inflammaging]] bridge via aging glia | Symptom topology: cognition (AD) vs movement (PD/HD) vs motor neuron loss (ALS) |
| Prion-like templated spread of misfolded proteins | Spread route and tempo: Braak limbic-cortical (AD/PD) vs striatal (HD) vs corticospinal (ALS); decades vs years |
| Biomarkers as trial enablers (NfL, PET, SAA, p-tau217) | Which biomarker gates which therapy: amyloid-PET → antibody eligibility; genotype/NfL → ASO/gene therapy |

---

## 7. Gaps in the Wiki & Suggested Enrichment (next tasks)

1. **HD is under-built.** The [[Huntington's Disease]] note (~60 lines) and [[HTT]]/[[Huntingtin]] notes predate the AMT-130 result; no note covers striatal MSN vulnerability in depth (the [[Medium spiny neurons]] note lives in the COMT topic and is dopamine-centric). Suggested: enrich HD with the AMT-130/tominersen saga, CAG-threshold/anticipation, somatic repeat expansion, and BDNF transport biology.
2. **No LATE note.** TDP-43-in-aging (LATE) is now the third major contributor to late-onset dementia and bridges the AD and ALS/FTD columns; a [[LATE]] note would create the missing direct AD↔TDP-43 edge the graph currently lacks (AD & TDP-43 share only 10 neighbors, Jaccard 0.051 — the weakest clinically important pair).
3. **Duplicate entity notes.** `Amyotrophic Lateral Sclerosis` vs `Amyotrophic Lateral Sclerosis (ALS)`, `Huntington's Disease` vs `Huntington's Disease (HD)`, `Tau` vs `Tau Protein`, and `Neurodegeneration` vs `Neurodegenerative Disease(s)` are separate files (§2 filename-uniqueness / §7 merge candidates). Consolidation would clean up the disease neighborhoods.
4. **Therapeutic entities missing**: [[tofersen|Tofersen]], prasinezumab, AMT-130, tominersen, masitinib, seed amplification assay, neurofilament light chain (no `Neurofilament*.md` exists), p-tau217 — all referenced here in plain text but unlinked because no note exists; all are high-frequency candidates by the ≥10-link rule going forward.
5. **FTD depth**: the [[Frontotemporal Dementia]] note (epigenetics topic) is thinner than its graph centrality (25 edges, direct ALS/AD bridges) warrants; bvFTD behavioral phenomenology, GRN/C9orf72 biology, and tau-vs-TDP-43 subtyping deserve a dedicated expansion.

---

## 8. Sources

**Wiki (primary):** `src/notes/_link/` — [[Neurodegeneration]], [[Alzheimer's Disease]], [[Parkinson's Disease]], [[Huntington's Disease]], [[Amyotrophic Lateral Sclerosis]], [[Tau]], [[Tauopathy]], [[TDP-43]], [[C9orf72]], [[SOD1]], [[HTT]], [[Huntingtin]], [[Alpha-synuclein]], [[Frontotemporal Dementia]], [[cGAS-STING Pathway]], [[SARM1]], [[Excitotoxicity]], [[Amyloid Beta]]; `src/notes/neuromelanin/` — [[Neuromelanin]], [[Pathogenic Threshold of Neuromelanin]], [[Lewy Bodies]], [[Glucocerebrosidase]], [[Ambroxol]], [[Substantia Nigra Pars Compacta]], [[MPTP]], [[6-hydroxydopamine]]; `src/notes/oxidative_stress/` — [[Oxidative Stress]], [[Reactive Nitrogen Species]], [[4-Hydroxynonenal]], [[Malondialdehyde]], [[S-Nitrosylation]], [[Ferroptosis]]; `src/notes/senescence/` — Mitochondrial-dysfunction-in-senescence document (Hruby & Higuchi-Sanabria 2025); `src/notes/sirtuins/`, `src/notes/autophagy/`, `src/notes/comt/`, `src/notes/epigenetics/` topic notes. Graph data: `wiki-out/wiki-graph.json`, `graphify-out/graph.json` (BFS traversal).

**Web [web] (2024–2026, accessed 29 Aug 2026):**
- FDA press announcement — approval of Kisunla (donanemab), Jul 2 2024; FDA conversion of lecanemab to traditional approval; Eisai/Biogen lecanemab maintenance-dosing (Jan 2025) and subcutaneous approvals; EMA authorizations 2025–2026; Aducanumab market withdrawal (2024). (fda.gov; alzint.org; beingpatient.com; sciencedirect.com S3050840126000383)
- A 2025 update on treatment strategies for the Alzheimer's disease spectrum (PMC12637128); appropriate-use recommendations for donanemab (Rabinovici et al. 2025).
- Gao et al., "The mechanisms underlying TDP-43-associated neurodegeneration in Alzheimer's disease and related dementias," *Mol Psychiatry* 30:5500–5512 (2025), doi:10.1038/s41380-025-03089-8; Wolk et al., "Clinical criteria for limbic-predominant age-related TDP-43 encephalopathy," *Alzheimer's & Dementia* (2025), doi:10.1002/alz.14202; LATE reviews (*Acta Neuropathologica* 2026, doi:10.1007/s00401-026-03027-0; *Discover Neuroscience* 2026).
- Pagano et al., "Prasinezumab slows motor progression in rapidly progressing early-stage Parkinson's disease," *Nature Medicine* (2024/2025); Roche PARAISO Phase 3 launch (Nov 2025, ~900 participants); Alzforum prasinezumab therapeutic page.
- Silveira et al., "Ambroxol as a Treatment for Parkinson Disease Dementia: A Randomized Clinical Trial," *JAMA Neurology* (2025), doi:10.1001/jamaneurol.2025.1687; Cure Parkinson's ASPro-PD Phase 3 page (UCL, 330 participants, 2025); The Science of Parkinson's monthly review (Dec 2025) — GSK3357679 LRRK2 inhibitor, GPNMB lysosomal-stress biomarker; Critical Path Institute α-syn SAA qualification opinion (2024).
- uniQure press release, "Positive Topline Results from Pivotal Phase I/II Study of AMT-130," Sep 24 2025 (75% cUHDRS slowing at 36 months, p=0.003; 60% TFC slowing, p=0.033; CSF NfL −8.2%; BLA Q1 2026); Scientific American, "First Treatment That Slows Huntington's Disease" (Oct 2025); MedCity News and huntingtonsdiseasenews.com coverage.
- ClinicalMetric, "ALS Clinical Trials 2026" (tofersen/VALOR/ATLAS, pNfL −55%, C9orf72 ASO programs, ION363 FUSION, IONIS-ATXN2Rx, UNC13A FUNCtion); alsnewstoday.com — masitinib Phase 3 AB23005 launch (Jul 2025, 408 participants); BriefGlance/DelveInsight ALS pipeline report (Dec 2025 — RELYVRIO withdrawal Apr 2024, four FDA-approved ALS drugs); datalookout.com ALS trial tracker (Aug 2026, 295 active trials); Nature Communications Biology Table 1 — FDA-approved and investigational ALS interventions (2025).
