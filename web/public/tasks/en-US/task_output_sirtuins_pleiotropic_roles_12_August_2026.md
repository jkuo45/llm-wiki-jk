---
title: Pleiotropic Roles of SIRTs in Tumor Cell Metabolism and Therapeutic Targeting
description: Synthesis of the pleiotropic roles of the seven mammalian sirtuins (SIRT1–SIRT7) in tumor cell metabolism — glycolysis/Warburg, glutamine metabolism/TCA anaplerosis, ROS/redox, lipid homeostasis — the dual context-dependent tumor-suppressor vs. oncogenic behavior of each isoform, and a comparison table of current sirtuin-targeting therapeutic agents with development stage and indications.
created: 2026-08-13
updated: 2026-08-13
tags:
  - task-output
  - sirtuins
  - tumor-metabolism
  - warburg-effect
  - sirtuin-therapeutics
  - nad-plus
  - cancer
  - longevity
  - review
source: https://doi.org/10.1038/s41392-022-01257-8
---


# Pleiotropic Roles of SIRTs in Tumor Cell Metabolism

## Overview

The **sirtuin family** (SIRT1–SIRT7) are NAD+-dependent acyltransferases whose pleiotropy in tumor metabolism stems from three sources: (1) **subcellular compartmentalization** — nuclear SIRT1/SIRT6/SIRT7, cytosolic SIRT2, and mitochondrial SIRT3/SIRT4/SIRT5 act on distinct metabolic nodes; (2) **catalytic promiscuity** — deacetylation, demalonylation, desuccinylation, deglutarylation, and ADP-ribosylation; and (3) **context-dependence** — the same sirtuin can be tumor-suppressive or oncogenic depending on tumor type, stage, and genetic background.

## Metabolic axes

### Glycolysis & the Warburg Effect

- **SIRT6** is the clearest anti-Warburg sirtuin: it corepresses HIF-1α and suppresses transcription of glycolytic enzymes (glucose transporters, Hexokinase 2) and deacetylates histone H3 at the ERK1/2 promoters. Loss of SIRT6 permits "Warburg-like" aerobic glycolysis; its restoration suppresses glycolysis in HCC/glioma (via JAK2/STAT3) and enhances radiosensitivity in Lung Cancer.
- **SIRT3** opposes aerobic glycolysis indirectly through redox: it activates MnSOD/SOD2 and IDH2, lowering ROS, which **destabilizes HIF-1α** — cutting the master glycolytic transcription factor. SIRT3 loss thus skews toward the Warburg Effect.
- **SIRT1** is bidirectional: deacetylation of PGC-1α represses glycolysis and drives oxidative phosphorylation, yet SIRT1 also partners with oncogenic c-Myc and HIF-1α in some contexts (e.g., heterozygous deletion in CRC induces c-Myc → glutamine metabolism → proliferation).
- **SIRT2** promotes tumor glycolysis in some settings by deacetylating phosphoglycerate mutase at Lys100 → channeling into NADPH production and accelerated tumor growth in Lung Cancer.
- **SIRT5** is protumorigenic in CRC, HCC, and NSCLC by reprogramming metabolism toward glycolysis and glutaminolysis.

### Glutamine metabolism & TCA anaplerosis

- **SIRT4** is the clearest anti-glutamine node: it mono-ADP-ribosylates **GDH**, limiting glutamate→α-ketoglutarate flux and restricting the anaplerotic carbon supply to the TCA cycle that "glutamine-addicted" cancers depend on. Loss of SIRT4 is common in HCC, gastric, CRC, bladder, and breast cancer and predicts poor prognosis — making it a metabolic tumor suppressor.
- **SIRT5** does the opposite: in CRC it enhances glutaminolysis and desuccinylates **LDHB** to hyperactivate autophagy, feeding cancer cells recycled nutrients.
- **SIRT3** couples into this circuit by stimulating pyruvate dehydrogenase complex (PDC) and activating AceCS2, favoring oxidative TCA flux and suppressing the glycolytic program.
- The NAD+/TCA link matters broadly: MYC-high tumors sustain a glutamine-fueled TCA cycle via Complex I-regenerated NAD+, and sirtuins are the NAD+-sensitive brake on these same pathways.

### ROS, redox, and lipid metabolism

- **SIRT3** and **SIRT5** coordinate antioxidant defense (SOD2/SOD1, IDH2, NADPH recycling); SIRT3 lowers mitochondrial membrane potential and ROS, protecting genomic integrity (ATM–Chk2) but also conferring radioresistance.
- **SIRT6** suppresses de novo lipogenesis by deacetylating H3 at the SREBP promoter to inhibit SREBP1/2 and ChREBP.
- **SIRT1** activates cytoplasmic AceCS1 (fatty acid synthesis) and regulates PPAR-γ, while **SIRT4** suppresses hepatic fatty acid oxidation (MTPα) and promotes lipid accumulation under nutrient-replete conditions.

### Growth machinery & cell fate

- **SIRT7** drives ribosome biogenesis (RNA Pol I activation of rDNA) and suppresses p21 via H3K18 deacetylation — fueling the biosynthetic capacity tumors need — and is overexpressed in breast, thyroid, and HCC.
- **SIRT1** deacetylates p53, Ku70, and FOXO factors, suppressing apoptosis in favor of repair; this is protective in normal stress but can promote tumorigenesis under chronic activation.
- **SIRT2** regulates cell cycle (tubulin) and shows tumor-suppressor (BRCA1–BARD1 in breast; IDH1 deacetylation suppressing CRC migration) and oncogenic (Slug stabilization) faces.

## Takeaway (part 1)

SIRTs form a **compartmentalized, NAD+-dependent metabolic rheostat**: nuclear SIRT1/6 oppose the Warburg program and control transcription, mitochondrial SIRT3–5 regulate TCA, glutamine anaplerosis, and redox, while SIRT2/7 tune cytoskeletal and biosynthetic capacity. Their shared dependence on NAD+ means tumor metabolic state (Complex I activity, glutaminolysis, NAMPT/CD38) directly gates sirtuin output — which is why NAD+ depletion is emerging as a synthetic-lethal lever in MYC-high and glutamine-dependent cancers, and why sirtuin modulation (e.g., SIRT1 inhibitors like EX-527, SIRT5 activators) is being explored therapeutically.

**Caveat:** every sirtuin shows dual/context-dependent behavior, so metabolic phenotype cannot be read from a single sirtuin in isolation.

---

# Dual / Context-Dependent Behavior by Sirtuin

## SIRT1 — the archetypal "double-edged sword"

The most context-dependent member. Both faces act through overlapping targets:

- **Tumor-suppressive:** deacetylates p53, Ku70, p73, and FOXO factors, so under acute genotoxic stress it blunts apoptosis in favor of repair; deacetylates hnRNP A1 to suppress glycolysis/growth in HCC; deacetylates androgen receptor (Lys630) to repress prostate cancer growth; suppresses NF-κB p65 and HMGB1 (anti-angiogenic in Ovarian Cancer); deacetylates PAK1 K420 to hinder glioblastoma.
- **Oncogenic/pro-tumor:** deacetylating p53 in *chronic* settings actually blunts the tumor-suppressor brake, and SIRT1 partners with c-Myc and HIF-1α; drives EMT/metadherin chemoresistance in triple-negative Breast Cancer; promotes cisplatin resistance (VEGF-A) in NSCLC; drives tamoxifen resistance (MRP2 via FoxO1); promotes T-ALL via CDK2 deacetylation → p27 degradation.
- **Key context variables:**
  - **Dose-dependence** — best demonstrated in CRC, where heterozygous SIRT1 deletion induces c-Myc → glutamine metabolism → proliferation, but homozygous deletion triggers apoptosis and reduces tumor formation.
  - **Tumor type/stage** — tumor-suppressor in glioma/HCC, promoter in gastric/endometrial/leukemia contexts.
  - **Severity** — same principle as its cardiac phenotype (7.5× cardiac overexpression protective; 12.5× pathogenic).

## SIRT2 — tumor suppressor in most epithelia, promoter in basal-like/leukemia

- **Suppressor face:** promotes BRCA1–BARD1 heterodimerization → homologous recombination (breast); deacetylates IDH1 to inhibit CRC liver metastasis; deacetylates AKR1C1 + inhibits STAT3 to suppress NSCLC migration; sensitizes ovarian cancer to cisplatin.
- **Promoter face:** deacetylates Slug → stabilizes it → basal-like breast tumorigenesis/invasion; deacetylates phosphoglycerate mutase K100 → NADPH flux → accelerated lung tumor growth; promotes endometrial cancer stemness/MEK-ERK signaling; deacetylates LMO2 to drive T-ALL growth/engraftment.
- **Context:** cytosolic sirtuin that frequently *opposes* the protective SIRT1/3/6 axis; tends to be harmful in neurodegeneration (AD, PD, HD) yet protective in metabolic/renal/joint disease. In leukemia it's split: NAMPT/SIRT2 activation reduces AML proliferation, but SIRT2 inhibition suppresses T-ALL.

## SIRT3 — mostly protective, but the mito oxidative phenotype is double-edged

- **Suppressor face (metabolic):** activates MnSOD/SOD2 and IDH2 → suppresses ROS → destabilizes HIF-1α (anti-Warburg); stimulates PDC; suppresses metastasis via Twist-downregulation/EMT in ovarian cancer; downregulates GST-π1 → sensitizes HCC to sorafenib/chemotherapy; disrupts ERα–p53 interaction in breast.
- **Promoter face (paradoxically via the same biology):** suppresses ROS so well that it confers radio/chemoresistance — promotes DNA repair/radioresistance via ATM–Chk2 in NSCLC, improves drug resistance in CRC (SOD2/PGC-1α); deacetylates p53 (onco-role); reprograms fatty acid synthesis (ACC1 upregulation) to drive cervical cancer invasion; promotes glioma viability via Ku70–Bax; elevated in node-positive breast cancer and OSCC.
- **Core tension:** the mitochondrial "guardian" phenotype (low ROS, intact OXPHOS, genomic stability) is *protective against cancer initiation* but *supports established tumors by preventing stress-induced death*. Also genuinely dual in NAFLD and osteoarthritis.

## SIRT4 — most consistently tumor-suppressive, with a metabolic cost

- **Suppressor (dominant):** inhibits GDH via mono-ADP-ribosylation → restricts glutamine-driven TCA anaplerosis (directly attacks "glutamine addiction"); represses mTOR via amino-acid-stimulated insulin secretion; upregulates p16/p21 and suppresses CyclinB1/Cdc2/Cdc25c → apoptosis in HCC; restores E-cadherin in CRC; negatively regulates SIRT1 via glutamine-metabolism repression.
- **Downside (why context still matters):** its GDH inhibition reduces amino-acid-stimulated insulin secretion and it suppresses hepatic fatty acid oxidation (MTPα) → lipid accumulation; it's the only sirtuin with adverse cardiac effects (aggravates Ang II hypertrophy/fibrosis). So SIRT4 is antitumor but metabolically "thrifty," and loss is uniformly prognostic for poor survival in HCC, gastric, CRC, bladder, breast cancer.

## SIRT5 — deacylase with a pro-tumor metabolic bias

- **Promoter face (metabolic reprogramming):** overexpressed in HCC, CRC, NSCLC where it pushes glutaminolysis + glycolysis; desuccinylates LDHB → hyperactive autophagy → nutrient recycling for tumor growth; deglutarylation-dependent glutaminolysis in CRC; promotes cisplatin resistance in ovarian cancer via Nrf2/HO-1.
- **Suppressor/contextual face:** in pancreatic cancer, high expression correlates with *favorable* prognosis — loss promotes GOT1 acetylation → proliferation via glutamine/glutathione metabolism; in HCC it's *dual* — suppresses immune evasion/bile-acid-metabolism-driven HCC yet promotes growth/metastasis via OXPHOS→glycolysis reprogramming.
- **Note:** SIRT5 has almost no classical deacetylase activity (it's a desuccinylase/demalonylase/deglutarylase), and it's resistant to nicotinamide inhibition — so it stays active in the tumor microenvironment where SIRT1–3 may be inhibited.

## SIRT6 — most consistently protective, dual only in lung/HCC

The most unambiguously anti-cancer sirtuin (anti-Warburg, pro-DDR, suppresses survivin, HIF-1α, c-MYC), but with two context-defined exceptions:

- **Lung Cancer (dual):** anticarcinogenic via CHD4 coordination → chromatin relaxation/DNA repair and glycolysis inhibition → radiosensitization; but pro-carcinogenic via snail-dependent transrepression of KLF4 → EMT/metastasis.
- **HCC:** deacetylates hnRNP A1 → suppresses glycolysis/growth, and USP48-stabilized SIRT6 attenuates metabolic reprogramming (suppressive), yet depletion downregulates multidrug resistance protein 1 → enhanced chemosensitivity (so high SIRT6 also correlates with chemoresistance).
- **Chemoresistance oncogene:** suppresses apoptosis (survivin/HIF-1α) so effectively that it confers chemoresistance in breast/prostate cancer — the same DDR/austerity program that prevents initiation later keeps established tumors alive during therapy.

## SIRT7 — proliferative biosynthetic driver with stage-dependent metastasis effects

- **Promoter (most cancers):** activates RNA Pol I → ribosome biogenesis → growth; deacetylates p21/CDKN1A promoter H3K18 → cell cycle progression; overexpressed in breast, thyroid, HCC; promotes CRC invasion via E-cadherin inhibition (EMT); suppresses p53 in HCC.
- **Suppressor face:** may suppress metastasis via H3K18 deacetylation at EMT-related gene promoters — the *same* H3K18 mark both lifts p21 (pro-proliferative) and silences EMT genes (anti-metastatic), showing how one enzyme's sign flips by promoter context.
- **Biomarker note:** expression rises with positive leukemia treatment response and falls on relapse — monitoring utility rather than a fixed tumorigenic role.

## Cross-cutting patterns

1. **ROS and DNA repair are the fault line.** SIRT3/SIRT6 protect against oxidative damage and fix DNA — this *prevents tumor initiation* but *mediates therapy resistance* in established disease (SIRT3 radioresistance, SIRT6 chemoresistance).
2. **Substrate sharing with opposite sign.** SIRT1/SIRT3 both deacetylate p53 — SIRT1's p53 repression is protumorigenic, SIRT3's in some models is a documented "oncogene" route; SIRT2 deacetylates Slug (onco) but BRCA1 (suppressive) via entirely different complexes.
3. **Compartment matters.** The mitochondrial trio (SIRT3/4/5) governs metabolic state, while nuclear SIRT1/6/7 govern the transcription of the same metabolic programs (glycolysis, glutaminolysis, lipogenesis) — so "SIRT output" at the cellular level is an integration of a metabolic setpoint (mitochondria) and a transcriptional gate (nucleus).
4. **Dose and stage dominate.** CRC SIRT1, cardiac SIRT1, and SIRT7's H3K18ac show the same principle: low/moderate activity is protective, high/chronically activated flips to pathology; early-stage loss favors initiation while late-stage loss sensitizes to therapy.

## Takeaway (part 2)

Pleiotropy is not random — it's the product of NAD+ availability, subcellular compartment, target-site selectivity, and tumor evolutionary stage, which is why no sirtuin can be described as purely "pro-" or "anti-" cancer.

---

*Sources: Sirtuins in Health and Disease (Wu et al., 2022, s41392-022-01257-8); Sirtuins: Guardians of Mammalian Healthspan (Giblin et al., 2014); wiki knowledge base (llm-wiki-jk) notes on SIRT1–SIRT7.*

---

# Therapeutic Agents Targeting Sirtuins — Comparison Table

| Agent | Primary Target | Modality | Development Stage | Indication(s) |
|---|---|---|---|---|
| **Resveratrol** (SRT501) | SIRT1 | Activator (STAC) | Clinically evaluated; mixed/limited → now research/nutraceutical | Metabolic syndrome, aging, CV, neuroprotection |
| **Pterostilbene** | SIRT1 | Activator (STAC) | Preclinical / nutraceutical | Metabolic, longevity |
| **SRT1720** | SIRT1 | Activator (STAC) | Preclinical (tool compound) | Metabolic (obesity/insulin sensitivity) |
| **SRT2104** | SIRT1 | Activator (STAC) | Phase I/II (completed) | Psoriasis, endotoxemia/coagulation, T2D, elderly |
| **Sirtinol** | SIRT1 / SIRT2 | Inhibitor | Preclinical (tool) | Oncology, senescence, epigenetic probing |
| **Salermide** | SIRT1 / SIRT2 | Inhibitor | Preclinical | Oncology (incl. colorectal cancer stem cells), epigenetic therapy |
| **Cambinol** | SIRT1 / SIRT2 | Inhibitor | Preclinical | HCC/lung metastasis, chemo-sensitization |
| **Tenovin-1 / Tenovin-6** | SIRT1 / SIRT2 (+SIRT3) | Inhibitor | Preclinical | p53-activating oncology, anti-tumor |
| **Suramin** | SIRT1 / SIRT2 / SIRT5 | Inhibitor | Approved antiparasitic (sirtuin effect preclinical) | Repurposed oncology research |
| **EX-527 (Selisistat)** | SIRT1 | Inhibitor | Phase I/II (Huntington's) | Huntington's disease; oncology chemo-sensitization |
| **AGK2** | SIRT2 | Inhibitor | Preclinical | Parkinson's, stroke, oncology |
| **AK-7** | SIRT2 | Inhibitor | Preclinical | Neurodegeneration |
| **SirReal2** | SIRT2 | Inhibitor | Preclinical | Neurodegeneration (microtubule stability) |
| **Honokiol** | SIRT3 | Activator | Preclinical | CV (hypertrophy), neuroprotection |
| **Dihydromyricetin (Ampelopsin)** | SIRT3 | Activator | Preclinical (dietary) | Metabolic, hepatoprotective, neuro |
| **C12** | SIRT3 | Activator | Preclinical | Cardioprotection |
| **2-APQC** | SIRT3 | Activator | Preclinical | Cardioprotection |
| **SKLB-11A** | SIRT3 | Activator (allosteric) | Preclinical | Cardiotoxicity prevention |
| **SZC-6** | SIRT3 | Activator (allosteric) | Preclinical | Diabetic kidney disease |
| **MDL-800** | SIRT6 | Activator (allosteric) | Preclinical | Fibrosis, cancer (anti-glycolysis) |
| **MDL-801** | SIRT6 | Activator (allosteric) | Preclinical | Fibrosis, cancer, genomic stability |
| **UBCS039** | SIRT6 | Activator (allosteric) | Preclinical | Acute liver failure, kidney fibrosis, tumor suppression |
| **Cyanidin** | SIRT6 | Activator (natural) | Preclinical | Anti-Warburg, antioxidant |
| **Fucoidan (F. vesiculosus)** | SIRT6 | Activator (natural) | Preclinical | Progeria/senotherapeutics, aging |
| **NMN (Nicotinamide Mononucleotide)** | Pan-sirtuin (via NAD⁺) | Indirect activator | Clinical trials (ongoing) | Healthy aging, metabolic disease |
| **NR (Nicotinamide Riboside)** | Pan-sirtuin (via NAD⁺) | Indirect activator | Clinical trials (ongoing) | Healthy aging, metabolic disease |
| **CD38 inhibitor 78c** | Indirect (NAD⁺ preservation) | Inhibitor | Preclinical | Longevity / aging (male-biased signal) |
| **AAV-SIRT6 (gene therapy)** | SIRT6 | Gene therapy | Preclinical | Progeria, aging-associated defects |
| **Caloric Restriction / mimetics** | Pan-sirtuin | Lifestyle / indirect | Established biology; trials of mimetics | Aging, metabolic health |
| **SIRT4** | — | No specific agent | — | Therapeutic angle: preserve/induce as glutamine-addiction brake |
| **SIRT5** | — | No specific agent | — | Desuccinylase; resistant to nicotinamide; open target |
| **SIRT7** | — | No specific agent | — | Ribosome-biogenesis driver; undrugged |

## Notes on the table

- **Stage legend:** *Preclinical* = cell/animal studies or research tool only; *Phase I/II* = human trials conducted (largely completed, no pivotal advancement for sirtuin-specific agents); *Clinical trials (ongoing)* = actively recruiting for NAD⁺-precursor strategies; *Approved* = marketed for a non-sirtuin indication.
- **Selectivity caveat:** early inhibitors (sirtinol, cambinol, tenovins, suramin) are dual/multi-isoform; truly isoform-selective allosterics (EX-527→SIRT1, AGK2/SirReal2→SIRT2, MDL-800/801 & UBCS039→SIRT6) are recent and preclinical.
- **Only SIRT1-directed agents have reached human trials** (STACs SRT2104/SRT501; inhibitor EX-527). All SIRT2/3/4/5/6/7-specific chemistry remains preclinical. The most advanced *clinical* lever is indirect NAD⁺ boosting (NMN/NR, CD38 inhibition).
- **Context-dependence governs use:** activators help when the isoform is tumor-suppressive (SIRT6 in HCC, SIRT3 guardian role) but can be harmful when that isoform is oncogenic (SIRT1 in gastric/endometrial cancer, SIRT3 radioresistance, SIRT6 chemoresistance); inhibitors face the mirror risk.
