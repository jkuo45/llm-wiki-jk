---
title: Sirtuins in Health and Disease — SIRT-by-SIRT Disease Landscape
description: Compiled excerpts from the sirtuins review (s41392-022-01257-8) organized by sirtuin (SIRT1–SIRT7), showing for each member the diseases and complications it is implicated in, its role (protective/harmful/dual), expression changes, and mechanisms.
created: 2026-08-11
updated: 2026-08-11
tags:
  - task-output
  - sirtuins
  - SIRT1
  - SIRT2
  - SIRT3
  - SIRT4
  - SIRT5
  - SIRT6
  - SIRT7
  - disease
  - review
source: https://doi.org/10.1038/s41392-022-01257-8
---

# Sirtuins in Health and Disease — SIRT-by-SIRT Disease Landscape

> Companion to `task_output_sirtuins_disease_complications_11_August_2026.md`. The same review (Wu et al. 2022, s41392-022-01257-8) viewed from the sirtuin side: one section per SIRT member, listing every disease/complication where that sirtuin plays a role.
> Date: 11_August_2026
> Method: Manual extraction of the "Regulatory role of SIRTs in human diseases" sections, inverted by sirtuin member.

## Overview of the seven members

| SIRT  | Primary localization      | Predominant activity                     | General disease stance                                                                                | Research depth & focus areas                                                                                                                                                                                                                                                                                                                                                     |
| ----- | ------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SIRT1 | Nucleus ↔ cytosol         | Deacetylase                              | Most studied; **dual/opposing roles** in nearly every system                                          | **Deepest literature**; roles characterized in every disease system. Focus: metabolic/aging axis (AMPK, PGC-1α, FoxO), inflammation (NF-κB, p53), EMT in cancer, circadian biology. Most RCTs — resveratrol, SRT1720, SRT2104 evaluated in humans. Modulator toolkit richest (activators + inhibitors).                                                                          |
| SIRT2 | Cytosol (nucleus in G2/M) | Deacetylase                              | Often **opposes** the protective SIRT1/3/6 axis; harmful in neuro/cancer contexts, protective in some | **Well studied but mostly cell/animal models**; heavy focus on SIRT2 inhibitors (AK-7, SirReal2, tenovins, AGK2) for neurodegenerative disease (PD/HD). Microtubule/cytoskeleton biology (α-tubulin, myelin). Early human biomarker work (serum SIRT2 in stroke). No approved clinical modulators.                                                                                 |
| SIRT3 | Mitochondria              | Deacetylase                              | **Near-universally protective** (metabolism, AKI, MI/R, DCM, LF, DKD)                                 | **Best-characterized mitochondrial sirtuin**; abundant mitochondrial proteomics/deacetylation-substrate studies. Focus: OXPHOS/ROS, SOD2, mitochondrial quality control, aging. Emerging clinical biomarkers (serum SIRT3 in COVID-19, LC diagnosis). Activators largely indirect (resveratrol, honokiol, Dihydromyricetin); no potent direct agonists.                              |
| SIRT4 | Mitochondria              | ADP-ribosyl transferase                  | Tumor-suppressive in cancer; protective in metabolism; **adverse in cardiac** hypertrophy/fibrosis    | **Understudied**; literature concentrated on glutamine metabolism and tumor suppression (BC/HCC/CRC/GC). Weak/no deacetylase activity → mechanistic tools scarce. Cardiac (adverse) effects reported from few studies. Little pharmacology — no specific modulators.                                                                                                                |
| SIRT5 | Mitochondria              | Desuccinylase/deglutarylase/demalonylase | **Mixed** — protective in some, pro-disease in DM/CRC/HCC                                             | **Understudied**; focus is metabolic reprogramming via non-deacetylase acylation (succinylation/glutarylation/malonylation) — urea cycle, FAO, glycolysis. Emerging cancer-metabolism literature (CRC, HCC, PC). Few substrates validated in vivo; no clinical modulators.                                                                                                            |
| SIRT6 | Nucleus/chromatin         | Deacetylase                              | **Consistently protective** across CVD, respiratory, digestive, kidney, most cancers                  | **Growing, active field**; focus on genome stability (DNA repair, telomere maintenance, base excision repair) and chromatin silencing (H3K9/H3K56), plus metabolic/lipogenic regulation (SREBP, ChREBP). Longevity/centenarian genetics interest. Direct activators emerging (UBCS039, MDL-800); research expanding toward CVD/aging translation.                                  |
| SIRT7 | Nucleus/nucleolus         | Deacetylase                              | Least studied; **inconsistent/dual** roles                                                            | **Least studied / research infancy**; limited to rRNA transcription (RNA Pol I), ribosome biogenesis, GATA4 deacetylation, cccDNA desuccinylation. Roles frequently conflicting (cardiac fibrosis, HBV). Treatment-response biomarker potential in leukemia. No specific modulators; virtually no pharmacology.                                                                      |

---

## SIRT1

The most extensively studied sirtuin, involved in **every** disease category reviewed. Its role is fundamentally context-dependent, often described explicitly as "dual" or "opposing."

### Cancer
- **Breast cancer**: Upregulated in BC tissue vs. adjacent/normal → predicts poor prognosis.[397][398][399] Regulates EMT-associated programming → triple-negative BC invasion/metastasis,[401] yet suppresses metastasis in nude mice.[402] Represses ERα-mediated proliferative response to estrogens;[405] upregulates DNA polymerase δ1 (MCF-7 proliferation/migration);[397] promotes metadherin-driven chemoresistance.[406] **Drug resistance**: causes tamoxifen resistance (MRP2 upregulation via FoxO1 deacetylation);[412] inhibition augments paclitaxel/doxorubicin cytotoxicity.[412]
- **Lung cancer**: High SIRT1–3 expression ↔ poor survival in NSCLC.[414][415] Suppresses NSCLC proliferation (SNHG10),[420] protects against osteopontin-induced NF-κB p65 acetylation/EMT,[421] but promotes lung adenocarcinoma growth via circ_0001946 → Wnt/β-catenin.[422] Promotes cisplatin resistance via VEGF-A.[426]
- **HCC**: Higher expression; high expression ↔ poor survival.[429][430][431][435] Deacetylates hnRNP A1 → suppresses glycolysis/growth.[440]
- **Colorectal cancer**: Increased in CRC tissue.[389][445] **Dose-dependent dual role**: heterozygous deletion induces c-Myc → glutamine metabolism → proliferation/autophagy; homozygous deletion triggers apoptosis, reduces cancer formation.[450]
- **Gastric cancer**: Upregulated in GC tissue; depletion promotes progression via STAT3/MMP-13.[331]
- **Pancreatic cancer**: Facilitates chemoresistance by regulating adaptive response to chemotherapy-induced stress.[457]
- **Ovarian cancer**: High expression ↔ poor survival.[458] Suppresses HMGB1 → inhibits migration/invasion/angiogenesis;[461] MHY2245 (SIRT1 inhibitor) antitumor via PKM2/mTOR blockade.[462]
- **Endometrial cancer**: Elevated — promotes autophagy/proliferation via LC3 deacetylation;[272] promotes growth and cisplatin resistance.[469]
- **Cervical cancer**: Overexpressed in HPV-infected cells ↔ poor clinical outcomes — nullifies AIM2 inflammasome-mediated immunity.[472]
- **Glioma**: Upregulated; higher expression ↔ worse prognosis.[475] Tumor suppressor via PAK1 K420 deacetylation (hinders autophagy/glioblastoma growth);[480] inhibition increases temozolomide sensitivity via ROS.[475]
- **Leukemia**: Promotes T-ALL progression via CDK2 deacetylation → p27 degradation;[483] knockdown sensitizes AML to tyrosine kinase inhibitor treatment.[485]

### Cardiovascular
- **Cardiac hypertrophy**: **Dose-dependent dual effect** — low (2.5×)/moderate (7.5×) overexpression attenuates, high (12.5×) exacerbates Ang II-induced hypertrophy.[502] Protective via reduced apoptosis/promoted autophagy,[498][499] PKC-ζ inhibition;[500] harmful via Akt/PDK1 membrane localization.[501]
- **Cardiac fibrosis**: Protective — resveratrol activation attenuates via TGF-β/Smad3 inhibition.[519][520]
- **Heart failure**: Decreased in advanced HF;[528][529] attenuates oxidative stress/apoptosis (MnSOD/thioredoxin1/Bcl-xL upregulation, p53 acetylation decrease);[528] NF-κB p65/miR-155/BDNF pathway;[532] restores SERCA2a via K492 deacetylation.[533]
- **Atherosclerosis**: Protective — endothelial overexpression (eNOS activation),[545] SRT1720 ameliorates endothelial dysfunction,[546] VSMC DNA-damage protection via NBS1,[544] reduces Lox-1-mediated foam cell formation via NF-κB.[548]
- **CAD**: Genetic polymorphisms associated with CAD risk;[563] reduced in CAD patients;[564] lncRNA C2dat1 → SIRT1 → suppresses miR-34a → VSMC proliferation/migration.[567]
- **MI/R injury**: Protective — KO increases infarct size; overexpression upregulates FoxO1/MnSOD, downregulates caspase-3/Bax;[572] miR-132 inhibition → PGC-1α/Nrf2;[573] lncRNA Oip5-as1 via SIRT1/AMPK/PGC-1α.[574]
- **Hypertension**: VSMC overexpression attenuates Ang II-induced hypertension;[582] attenuates Klotho-deficiency arterial stiffness (AMPKα/eNOS);[584] NAMPT-mediated overexpression alleviates Ang II ROS.[585] Decreased urinary SIRT1 = biomarker of early renal damage in hypertension.[587]

### Respiratory
- **COPD**: Substantially decreased in COPD/emphysema lungs;[597] anti-inflammatory/anti-apoptotic/antioxidant (NF-κB, FoxO3, p53);[597][598][599] SRT1720 inhibits LPS-induced cytokine release in COPD PBMCs.[600]
- **Lung fibrosis**: Loss involved in pathogenesis; activation promotes AT2 self-renewal in IPF;[609] attenuates LF via TGF-β1/p300.[611]
- **Asthma**: Decreased in severe asthma;[625] anti-inflammatory (IL-6 via Akt);[626][627] inhibits IL-9-producing CD4+ T cells (mTOR–HIF-1α);[628] miR-138-5p/SIRT1 axis blocks NF-κB.[621]
- **Lung injury**: KO mice highly susceptible to sepsis-induced ALI (NF-κB);[641] resveratrol reduces ALI;[637] but EX-527 suppresses mTOR → alleviates endotoxemia ALI → **detrimental in some conditions**.[642] Attenuates NAMPT in ventilator-induced lung injury;[645] paraquat-induced injury via Nrf2.[646]
- **COVID-19**: Unbalanced p53/SIRT1 axis → persistent p53 activation due to low SIRT1; increased SIRT1 may alleviate pathogenesis.[649]

### Digestive
- **FLDs/NAFLD**: Deacetylates ChREBP/SREBP-1c → lipid homeostasis;[5][136][663][664] blocks hepatic stellate cell activation → anti-fibrotic;[655][665] **harmful** in alcoholic hepatitis (myeloid SIRT1 prevents p-FoxO3 → apoptosis defect);[224] intestinal SIRT1 harmful via hepatic ferroptosis/inflammation (gut microbiota).[678]
- **Liver IRI**: Decreased after IRI;[280] high levels → superior transplant survival;[681] suppresses mitochondrial dysfunction via MFN2.[280]
- **HBV**: Slightly elevated mRNA in HBV-infected hepatocytes → histone hypoacetylation → pathomechanism;[689] resveratrol activates HBV transcription, sirtinol/EX-527 anti-HBV.[690]
- **Other liver**: Protective in acute liver failure (HIF-1α deacetylation → reduced ROS);[692] anti-aging on senescent CD4+ T cells in HCV;[697] SIRT1-null mice develop autoimmune-like liver disease;[700] decreased in cirrhosis;[665][669] protective in drug-induced injury;[693][704] **detrimental** in endotoxemic injury (p65 deacetylation → compromised NF-κB)[706] and cholestatic disease (myeloid inflammasome activation).[709]
- **Pancreatitis**: Protective in acute pancreatitis (p53/HSF1 deacetylation);[711][712] **upregulated in chronic pancreatitis** → inflammation-induced EMT (miR-278).[713]
- **IBD**: **Dual role** — downregulated in patients;[721] deficiency induces paneth/goblet activation, NF-κB,[722] but deletion protective via Foxp3+ Treg induction.[724][725]
- **Intestinal IRI**: Suppresses epithelial ROS/apoptosis (miR-34a-5p);[229] resveratrol protects via SIRT1–NF-κB–iNOS–NO.[728]
- **Other intestinal**: Downregulated in Hirschsprung-associated enterocolitis (NF-κB/NLRP3/caspase-1 pyroptosis);[729][731] protective in necrotizing enterocolitis (HIF-1α regulation).[730][732]

### Nervous system
- **Alzheimer's**: Reduces Aβ-induced senescence/mitochondrial dysfunction;[740] reduces tau O-GlcNAcylation via CREB;[749] enhances Beclin-1 deacetylation → beneficial autophagy;[270] inverse serum/saliva relationship with AD → diagnostic potential.[759][760]
- **Parkinson's**: Ameliorates LC3 deacetylation-mediated autophagic degradation of α-synuclein; improves motor defects.[763]
- **Huntington's**: Brain-specific KO exacerbates; overexpression rescues CREB-CRTC1 interaction → BDNF transcription.[767]
- **Brain injury/stroke**: Neuroprotective (oxidative/inflammatory/autophagy/apoptotic pathways);[214][772][773] NAMPT promotes neuronal survival SIRT1-dependently during cerebral ischemia;[774] deacetylates quaking 6 → PGC-1α → inhibits neuronal apoptosis.[690]
- **ALS/MS**: Increased in SOD1-G93A mice (functional implication unclear).[784]
- **Epilepsy**: Therapeutic target to rescue circadian rhythm genes;[788] CAY10602 agonist neuroprotective.[233]
- **Cognitive deficits**: Protective against hippocampal atrophy/aging-related impairment;[794] surgery-induced hippocampal downregulation → cognitive impairment.[795]
- **SCI**: Neuroprotective via suppressing microglial activation;[798][799] AMPK/SIRT1 autophagy regulation.[286]
- **Neuroinflammation/neuropathic pain**: Activation attenuates Mn-induced oxidative stress/neuroinflammation.[804]

### Endocrine
- **DM**: **Dual** — overexpression improves insulin sensitivity;[829][830] hepatic knockdown prevents fasting hyperglycemia (increased hepatic insulin responsiveness).[832]
- **DKD**: Protective — deacetylates p53,[815] activates FoxO3a/Nrf2;[815][847] resveratrol promotes resistance to diabetic renal fibrosis via Nrf2.[847]
- **DN**: Modulates neuronal viability/differentiation/synaptic plasticity;[849][850] alleviates cognitive decline,[843] neuropathic pain,[851] peripheral neuropathy (PGC-1α–TFAM axis).[852]
- **DR**: Overexpression prevents capillary apoptosis/degenerative capillary formation, reduces retinal inflammation.[129][854]
- **DCM**: Activation inhibits ROS-induced oxidative stress/fibrosis.[856]
- **Obesity**: Suppresses adipogenesis, stimulates energy expenditure (miR-146b axis;[862] hypothalamic inhibition → HPT axis → energy expenditure[863]).
- **Metabolic syndrome/lipid disorders**: Downregulated in metabolic syndrome;[178] HuR stabilization → represses inflammation/hyperglycemia;[817] modest overexpression protects from hepatic steatosis (MnSOD/Nrf1, PGC-1α).[869]

### Urogenital
- **AKI**: Protective (JNK/DUSP16 deacetylation; p53-up-regulated modulator of apoptosis/FoxO3a; NAD+/SIRT1/GSK-3β/Nrf2 axis).[873][887][890]
- **Kidney fibrosis**: Overexpression abolishes TGF-β1-induced apoptosis/fibrosis (CTGF suppression);[903] SRT1720 attenuates UUO fibrosis;[904] represses HIF2α;[813] **but downregulation may also inhibit fibroblast activation (EGFR/PDGFR-β) → therapeutic potential**.[911]
- **Kidney stones**: Suppressing SIRT1 promotes calcium oxalate crystal-cell adhesion/exacerbates injury.[913]
- **Aging-induced kidney injury**: HIF-1α deacetylation protects tubulointerstitial damage;[914] podocyte SIRT1 reduction → glomerulosclerosis/albuminuria.[915]
- **Genital**: Resveratrol/SIRT1 protective in erectile function and nicotine-induced reproductive damage;[919][920] dysregulation associated with male infertility;[921][922] higher SIRT1 in PCOS (SIRT1/AMPK autophagy axis);[923][924] overexpressed in endometriosis, participates in pathogenesis.[926]

### Motor system
- **OA**: Reduces apoptosis/ECM degradation via Wnt/β-catenin;[932] reverses homocysteine-induced changes (PGC-1α/PPAR-γ cascade);[934][935] inhibits EGFR ubiquitination;[936] inhibits chondrocyte senescence.[937]
- **Osteoporosis**: KO mice have low bone mass;[944] increases osteoblast osteogenesis via FoxO3a;[946] deacetylates sclerostin → Wnt/β-catenin;[947] resveratrol restores alkaline phosphatase/osteocalcin via NF-κB.[949][950]
- **IDD**: Reduced in degenerative nucleus pulposus; inhibits NF-κB,[58][952] suppresses c-Fos/c-Jun phosphorylation.[953]
- **Skeletal muscle atrophy**: Inhibits drug-induced mitochondrial dysfunction via PGC-1α.[959]

### Aging
- La Ribonucleoprotein 7 activation dampens p53/NF-κB p65 → ameliorates cellular senescence;[966] chromatin redistribution on DNA damage promotes repair/genomic stability.[967]

---

## SIRT2

Cytosolic sirtuin that frequently **opposes** the SIRT1/SIRT3/SIRT6 protective axis — harmful in most neuro/cancer contexts but protective in several metabolic, renal, and joint diseases.

### Cancer
- **Breast cancer**: Downregulated in BC tissue; increased expression ↔ longer survival.[395] **Binary role** — tumor suppressor via BRCA1–BARD1 heterodimerization → homologous recombination;[407] promoter via deacetylating Slug → stabilization → basal-like BC tumorigenesis/invasion.[409]
- **Lung cancer**: Suppresses NSCLC migration (AKR1C1 deacetylation, STAT3 inhibition);[379] promotes tumor growth via phosphoglycerate mutase K100 deacetylation → NADPH.[423]
- **HCC**: Expressed at higher levels.[429][430][431]
- **Colorectal cancer**: Decreased in CRC tissue.[446] IDH1 deacetylation → inhibits liver metastasis.[381]
- **Ovarian cancer**: High expression ↔ favorable survival;[458] overexpression enhances cisplatin sensitivity in resistant cells.[465]
- **Endometrial cancer**: Increased in most EC cell lines — promotes proliferation, inhibits apoptosis;[467] promotes stemness + MEK/ERK signaling while repressing chemosensitivity.[470]
- **Cervical cancer**: Decreased in CC tissue; negatively correlated with tumor size/lymph node metastasis → favorable survival.[471]
- **Leukemia**: Overexpressed in primary AML blasts; NAMPT activation reduces proliferation/induces apoptosis (Akt/GSK-3β/β-catenin);[335] inhibition suppresses T-ALL growth/engraftment (LMO2 deacetylation).[484]

### Cardiovascular
- **Cardiac hypertrophy**: Protective — reduced protein level in hypertrophy; overexpression attenuates agonist-induced hypertrophy (NFATc2 deacetylation);[513] but loss of SIRT2 reduces AMPK → promotes aging-related/Ang II hypertrophy.[514]
- **Cardiac fibrosis**: Protective — overexpression rescues cardiac function via AMPK activation (LKB1 deacetylation).[514]
- **Atherosclerosis**: Decreases plaque formation in LDL receptor-deficient mice via macrophage polarization.[552]
- **MI/R injury**: Few studies.[490]

### Respiratory
- **Asthma**: **Harmful** — enhances allergic asthmatic inflammation; pharmacologic ablation attenuates, genetic overexpression exaggerates phenotype;[629] aggravates via Th2 responses and macrophage polarization.[630]

### Digestive
- **FLDs/NAFLD**: Prevents NAFLD by deacetylating hepatocyte nuclear factor 4α;[670] **deleterious** in hepatic fibrosis via SIRT2/ERK/c-Myc axis.[675]
- **Liver IRI**: **Detrimental** — deacetylates MAPK phosphatase-1 → activates MAPK → augmented inflammation/cell death.[685]
- **HBV**: Slightly elevated mRNA in infected hepatocytes → pathomechanism.[689]
- **IBD**: Downregulated in IBD patients; deletion promotes inflammation via NF-κB;[715][716] inhibits Wnt/β-catenin → gut homeostasis.[333]

### Nervous system
- **Alzheimer's**: **Harmful** — suppression alleviates Aβ pathology/cognitive deficits (β-secretase 1 via reticulon 4B deacetylation);[744] affects tau phosphorylation/autophagic flux;[750] nuclear SIRT2 hyperactivated (FoxO1-recruited to Fzd1/Fzd7 promoters → H4K16ac reduction);[752] inhibition recovers microtubule stabilization/autophagy.[299]
- **Parkinson's**: Mediates exacerbation of α-synuclein toxicity;[298] NAD+ metabolism alteration → SIRT2 activation → decreased acetylated α-tubulin;[297] deletion protective.
- **Huntington's**: Inhibition achieves neuroprotection (sterol biosynthesis manipulation mimics SIRT2 inhibition → diminished huntingtin toxicity).[769]
- **Brain injury/stroke**: **Detrimental** — inhibition neuroprotective (Akt/FoxO3a, MAPK downregulation);[248] serum SIRT2 increased in AIS → risk/prognosis marker.[779]
- **Neuroinflammation/neuropathic pain**: Overexpression alleviates neuropathic pain/neuroinflammation;[805] AK-7 exacerbates traumatic brain injury (NF-κB p65 nuclear translocation);[88] microglial SIRT2 protective in amnesic deficits;[806] SIRT2-deficient mice show morphological microglial changes + increased proinflammatory cytokines upon LPS.[807]

### Endocrine
- **DM**: **Dual** — promotes glucose-dependent hepatic glucose uptake (GKRP K126 deacetylation);[833] downregulation ameliorates reduced Akt activity and increases insulin-stimulated glucose uptake in insulin-resistant neuro-2a cells.[834]
- **Obesity**: **Promotes obesity** — HIF-1α negatively regulates SIRT2–PGC-1α axis → negates fatty acid catabolism.[867]

### Urogenital
- **AKI**: Systematic KO ameliorates cisplatin-induced renal injury; transgenic mice aggravated (MAPK phosphatase-1 acetylation).[891]
- **Kidney fibrosis**: Knockdown/chemical inhibition attenuates TGF-β1-induced fibroblast activation/MDM2;[905] **downregulation inhibits interstitial fibroblast activation → therapeutic potential** (EGFR/PDGFR-β).[911]

### Motor system
- **OA**: Protective — inhibits ECM degradation by preventing p65 acetylation.[89]
- **IDD**: Reverses IL-1β action by inhibiting p53/p21 pathway → inhibited oxidative stress/senescence.[954]
- **Skeletal muscle atrophy**: Inhibits autophagic flux → maintains protein metabolism homeostasis.[960]

---

## SIRT3

Mitochondrial sirtuin with **near-universally protective** roles — the primary mitochondrial quality-control hub across metabolism, cardiovascular, renal, respiratory, and neurodegenerative disease.

### Cancer
- **Breast cancer**: Disrupts ERα–p53 interaction → decreased proliferation/colony formation/migration;[410] overexpression reduces tamoxifen sensitivity (MTR-3 line).[357][413]
- **Lung cancer**: Serum SIRT3 distinguishes LC patients from healthy (AUC 0.918, sensitivity 86.4%, specificity 94%);[416] high SIRT1–3 ↔ poor survival;[414][415] reduces cisplatin resistance (FoxO3/CDT1);[253][427] promotes DNA repair/radioresistance via ATM–Chk2.[428]
- **HCC**: Lower expression in HCC tissue;[432][433][434] CDK4/6-inhibition modulation enhances sorafenib therapy;[443] downregulates GST-π1 → enhances chemo/sorafenib-induced apoptosis.[252]
- **Colorectal cancer**: Overexpression improves drug resistance via SOD2/PGC-1α.[451]
- **Ovarian cancer**: Decreased in OC tissue;[458][459][460] overexpression suppresses metastasis via Twist-downregulation EMT inhibition.[463]
- **Cervical cancer**: Promotes invasion/metastasis by reprogramming fatty acid synthesis (ACC1 upregulation, lipogenesis).[473]
- **Glioma**: Downregulated vs. normal brain; higher expression ↔ worse prognosis;[475][477] promotes viability via Ku70–Bax stabilization.[477]

### Cardiovascular
- **Cardiac hypertrophy**: Protective — reduced in Ang II-induced hypertrophy; overexpression protects, silencing exacerbates;[505] promotes autophagy via FoxO1 deacetylation;[507] FoxO3a-dependent antioxidant defense;[164] reduces PARP-1 acetylation.[508]
- **Cardiac fibrosis**: Protective — resveratrol activation via TGF-β/Smad3;[519][520] modulates FOS/AP-1 pathway in cardiomyocytes.[65]
- **Heart failure**: Limited studies but implicated in energy metabolism.[541]
- **Atherosclerosis**: Associated with endothelial apoptosis;[553] SIRT3/SOD2 (circ_0003423) protects HUVECs from oxLDL.[554]
- **MI/R injury**: Deficiency exacerbates injury.[577]
- **Hypertension**: Overexpression attenuates Ang II and DOCA-salt-induced hypertension;[583] diminished expression/redox inactivation → SOD2 inactivation → hypertension;[586] alleviates hypertensive renal injury via EMT suppression.[588]

### Respiratory
- **COPD**: Inhibits airway epithelial mitochondrial oxidative stress → attenuates progression.[603]
- **Lung fibrosis**: Deficiency within aging lung promotes fibrotic response via TGF-β1;[612] promotes LF via AEC mitochondrial DNA damage/apoptosis;[614] overexpression ameliorates asbestos-induced pulmonary fibrosis.[615]
- **Asthma**: Upregulation reduces bronchial epithelial apoptosis and airway inflammation.[631]
- **Lung injury**: Promotes MnSOD → protective in hyperoxia-induced ALI;[643] SIRT3-deficient mice develop more severe ALI (NLRP3 in macrophages).[63]
- **COVID-19**: Serum levels associated with clinical outcome/prognosis; markedly lower in severe patients.[650]

### Digestive
- **FLDs/NAFLD**: Improves mitochondrial function via trifunctional protein/LCAD deacetylation;[671][672] **liver-specific knockdown alleviated alcoholic feeding-induced injury** (improved autophagy) → dual.[676][679]
- **Liver IRI**: Protective — systemic GPCR5 KO suppresses SIRT3 → proinflammatory macrophages → exacerbated injury.[684]
- **HBV**: Downregulated in HBV-positive patients; inhibits replication via H3K9 deacetylation on cccDNA.[442][687]
- **Other liver**: Curcumin-enhanced SIRT3 protective in cirrhosis;[703] loss/decline → damage-permissive phenotype in radiation-induced persistent liver injury.[694]
- **IBD**: Systematic KO mice susceptible to colitis.[718]
- **Intestinal IRI**: Alleviates mitochondrial oxidative damage/apoptosis via peroxiredoxin 3 deacetylation.[727]

### Nervous system
- **Alzheimer's**: Protects against Aβ pathology/excitotoxicity;[743] role in tau acetylation;[751] dysfunction → mitochondrial/neuronal damage;[755] intermittent food deprivation beneficial SIRT3-dependently;[756] mirrors Aβ deposition and is upregulated in AD temporal neocortex.[758]
- **Parkinson's**: Counteracts α-syn-induced mitochondrial dysfunction;[764] age-dependent loss of protective function in substantia nigra.[766]
- **Brain injury/stroke**: Prosurvival factor; protective in ischemic stroke via HIF-1α/VEGF in astrocytes;[775][776] downregulated in cerebral IRI; enhancing SIRT3 + Wnt/β-catenin = therapeutic target.[777]
- **ALS**: Increased mRNA/protein in ALS spinal cord.[785]
- **Epilepsy**: Protects from kainic acid excitotoxicity (miR-134-5p inhibition).[790]
- **Cognitive deficits**: Fluoride-induced SIRT3 inhibition → mitochondrial dysfunction/cognitive impairment;[796] honokiol upregulates SIRT3 → protective.[797]
- **Neuroinflammation**: Regulates mitochondrial oxidative stress via Mst1–JNK–SRV2 pathway in BV-2 microglia;[808] TREM2 overexpression enhances SIRT3 via NAD+.[809]

### Endocrine
- **DM**: Protective — KO impairs insulin-stimulated muscle glucose uptake → insulin resistance.[812]
- **DCM**: Regulates fibrosis/inflammation/apoptosis/oxidative stress in diabetic myocardium;[149] attenuates via p53-acetylation reduction + PFKFB3 upregulation;[842] deficiency aggravates hyperglycemic mitochondrial damage/ROS/necroptosis/NLRP3.[857]
- **Obesity**: Suppresses obesity — activates macroautophagy (AMPK–ULK1) → smaller lipid droplets;[864] induces perilipin-1–Hsc71–LAMP2 complex → chaperone-mediated autophagy.[864]

### Urogenital
- **AKI**: Central protective role — deficiency exacerbates sepsis-induced tubular damage/apoptosis (Bax/caspase-3 up, Bcl-2 down);[254] aggravation of fatty acid oxidation dysfunction;[788] honokiol activation increases ATP, reduces ROS/lipid peroxidation;[151] overexpression attenuates ischemia-reperfusion mitochondrial damage.[885]
- **Kidney fibrosis**: KO susceptible to severe fibrosis (PDH E1α hyperacetylation at K385).[906]
- **Kidney stones**: Downregulated in patients; protective via Nrf2/heme oxygenase-1 pathway.[51][912]
- **Vascular calcification**: Soluble epoxide hydrolase destabilizes SIRT3 → accelerates VSMC calcification; deletion preserves SIRT3 → suppressed calcification.[875]
- **Genital**: Dysregulation associated with male infertility;[921][922] SIRT3 deficiency in PCOS granulosa cells → impaired oocytes.[925]

### Motor system
- **OA**: **Dual role** — inhibits degeneration via mitochondrial homeostasis (SOD2 acetylation restoration);[938][939] but overexpression promotes chondrocyte apoptosis/reduced proliferation → OA progression.[940]
- **IDD**: Maintains nucleus pulposus cell homeostasis via mitochondrial oxidative-stress regulation.[955][956]
- **Skeletal muscle atrophy**: Deficiency enhances Ang II-induced fiber type transformation/metabolic reprogramming → exacerbates atrophy.[961]

### Aging
- Deficiency → lamina-associated domain detachment, increased chromatin accessibility, aberrant repetitive-sequence transcription → senescence of human MSCs.[968]

---

## SIRT4

Mitochondrial sirtuin with ADP-ribosyl transferase activity — **predominantly tumor-suppressive** in cancer and protective in metabolism, but **adverse** in cardiac hypertrophy/fibrosis.

### Cancer
- **Breast cancer**: Downregulated in BC tissue; increased expression ↔ longer survival.[396] Tumor-suppressive by negatively regulating SIRT1 via glutamine-metabolism repression (mitochondrial–nuclear crosstalk);[411] enhances tamoxifen sensitivity via STAT3 inhibition.
- **HCC**: Lower expression; low tumor levels predict decreased survival;[434][435][436] tumor suppressor via glutamine-metabolism inhibition;[434] upregulates p16/p21, suppresses CyclinB1/Cdc2/Cdc25c → apoptosis.[442]
- **Colorectal cancer**: Decreased in CRC tissue;[447] upregulates E-cadherin, suppresses proliferation/migration/invasion via glutamine-metabolism inhibition;[140] increases sensitivity to 5-fluorouracil by inhibiting the cell cycle.[447]
- **Gastric cancer**: Downregulated in GC tissue; low expression negatively correlates with tumor size/pathological grade → poor prognosis;[383][453] inhibits proliferation/migration/invasion via EMT.
- **Ovarian cancer**: High expression ↔ poor survival.[458]

### Cardiovascular
- **Cardiac hypertrophy**: **Adverse** — overexpression aggravates Ang II-induced hypertrophy by inhibiting MnSOD activity.[517]
- **Cardiac fibrosis**: **Contributes to fibrosis** — global KO confers resistance to Ang II infusion.[517]
- **Atherosclerosis**: Suppresses PI3K/Akt/NF-κB → relieves oxLDL-induced HUVEC injury.[555]
- **MI/R injury**: Downregulated after MI/R; overexpression decreases infarct size (mitochondrial preservation, reduced apoptosis).[578]

### Digestive
- **FLDs/NAFLD**: Upregulation inhibits HFD-induced lipid accumulation/inflammation/fibrogenesis via SIRT4/Smad4 axis;[662][674] **harmful** by deacetylating/destabilizing mitochondrial trifunctional protein-α.[661]
- **HBV**: Downregulated in HBV-positive patients; HBV X protein suppresses SIRT4 expression (HCC context).[442][688]
- **IBD**: Not well characterized.[632]

### Endocrine
- **DM**: Protective — overexpression leads to dyslipidemia/lipogenesis/decreased fatty acid oxidation (deactivates AMPK, inhibits insulin secretion) — described as protective against DM progression.[835]

### Urogenital
- **Genital**: Dysregulation associated with male infertility.[921][922]

---

## SIRT5

Mitochondrial sirtuin (desuccinylase/deglutarylase/demalonylase) — **mixed stance**: protective in several contexts but pro-disease in DM, CRC, and HCC (dual).

### Cancer
- **HCC**: Lower expression;[432][433][434] **dual** — prevents immune evasion/suppresses development via bile-acid metabolism;[438] promotes growth/metastasis via OXPHOS→glycolysis reprogramming.[439]
- **Colorectal cancer**: Overexpression ↔ poor prognosis;[448][449] enhances glutaminolysis (deglutarylation-dependent);[449] deacetylates lactate dehydrogenase B → hyperactive autophagy → tumorigenesis.[310]
- **Gastric cancer**: (Not prominently reported.)
- **Pancreatic cancer**: Expression directly correlated with favorable prognosis — loss promotes GOT1 acetylation → proliferation via glutamine/glutathione metabolism.[455]
- **Ovarian cancer**: Significantly increased in OC tissue; high expression ↔ favorable survival;[458][459][460] promotes cisplatin resistance via Nrf2/HO-1 ROS-dependent DNA-damage suppression.[460]

### Cardiovascular
- **Cardiac hypertrophy**: Prevents age-related hypertrophy.[515]
- **Cardiac fibrosis**: KO mice show increased fibrosis vs. age-matched WT.[515]
- **MI/R injury**: Loss increases infarct size (protein succinylation modulation).[579]

### Digestive
- **FLDs/NAFLD**: Systematic KO → impaired mitochondrial medium-chain fatty acid oxidation → periportal macrovascular steatosis;[673] improves mitochondrial function/fatty acid oxidation.[671][672]
- **HBV**: Slightly elevated mRNA in infected hepatocytes → pathomechanism.[689]
- **IBD**: Systematic KO mice susceptible to colitis.[719]

### Nervous system
- **Brain injury/stroke**: Mediates IR-induced brain damage by increasing blood-brain barrier permeability via occludin degradation.[778]
- **Epilepsy**: Deficiency increases mortality/seizure severity → neuroprotective role.[789]
- **ALS/MS**: (Not prominently reported.)

### Endocrine
- **DM**: **Promotes progression** — inhibition facilitates pancreatic β-cell proliferation/insulin secretion;[350] negatively regulates PDX1 transcription → aggravates DM.[838][839]

### Urogenital
- **AKI**: Protective — regulates mitochondrial vs. peroxisomal fatty acid oxidation balance in proximal tubular epithelial cells.[892]
- **Genital**: Dysregulation associated with male infertility.[921][922]

---

## SIRT6

Nuclear/chromatin deacetylase — the **most consistently protective** sirtuin across CVD, respiratory, digestive, renal, and most cancers (with context-dependent dual roles only in LC and HCC).

### Cancer
- **Breast cancer**: (Not prominently reported in this review's BC section.)
- **Lung cancer**: **Dual** — anticarcinogenic via CHD4 coordination → chromatin relaxation/DNA repair;[424] pro-carcinogenic via snail-dependent transrepression of KLF4 → EMT/metastasis;[425] inhibits glycolysis → enhances radiosensitivity.[428]
- **HCC**: Expressed at higher levels;[429][430][431] deacetylates hnRNP A1 → suppresses glycolysis/growth;[440] USP48-stabilized SIRT6 attenuates glycolysis/metabolic reprogramming;[441] depletion downregulates multidrug resistance protein 1 → enhanced chemosensitivity.[444]
- **Colorectal cancer**: Decreased in CRC tissue; expression related to improved survival.[446][448][449]
- **Gastric cancer**: Downregulated; low expression → poor prognosis;[383][453] inhibits JAK2/STAT3 → suppresses growth; silencing overcomes sorafenib resistance via ferroptosis.[454]
- **Pancreatic cancer**: KLF10-upregulated SIRT6 influences glycolysis, EMT, distant metastasis.[456]
- **Ovarian cancer**: Decreased in OC tissue; high expression ↔ favorable survival.[458][459][460]
- **Endometrial cancer**: Tumor suppressor — represses survivin → inhibits AN3CA/KLE proliferation.[468]
- **Glioma**: Downregulated; suppresses growth via apoptosis, oxidative-stress inhibition, JAK2/STAT3 inhibition.[477][478]
- **Leukemia**: DNA-repair deficiencies synergize with NAMPT targeting in AML (promising combination therapy).[486]

### Cardiovascular
- **Cardiac hypertrophy**: Protective — inhibits isoproterenol-induced hypertrophy via autophagy (FoxO3 nuclear retention via Akt attenuation);[314] decreases p300 → NF-κB p65 acetylation;[510] blocks IGF–Akt via c-Jun;[511] STAT3 suppression.[512]
- **Cardiac fibrosis**: Systemic KO induces fibrosis via TGF-β/Smad3 activation;[521] prevents Ang II-mediated fibrosis via AMPK–ACE2.[522]
- **Heart failure**: Decreased in chronic HF;[527] overexpression increases TAC-induced HF survival via telomerase (TERT, TRF1).[540]
- **Atherosclerosis**: Protects against endothelial dysfunction/VSMC senescence/atherosclerosis;[201][556][557] reduces oxLDL uptake in RAW macrophages (scavenger receptor 1 downregulation).[558]
- **CAD**: Genetic polymorphisms associated with CAD risk.[563]
- **MI/R injury**: Protective — FoxO3α antioxidant defense;[575] attenuates CHMP2B accumulation.[576]
- **Hypertension**: Endothelial deletion → enhanced BP, cardiorenal injury via Nkx3.2–GATA5.[589]

### Respiratory
- **COPD**: Reduced expression → COPD via insufficient autophagy/senescence;[601] overexpression weakens autophagy via IGF–Akt–mTOR.[601]
- **Lung fibrosis**: Inhibits TGF-β-induced cellular senescence;[616] inactivates TGF-β1/Smad2;[617] prevents myofibroblast differentiation (TGF-β1/Smad2 + NF-κB);[618] inhibits EMT during IPF (TGF-β1/Smad3).[619]
- **Asthma**: Upregulated in asthmatic bronchial epithelial cells; ameliorates airway remodeling via EMT regulation.[633][634]
- **Lung injury**: Regulates macrophage polarization → alleviates sepsis-induced ARDS (autophagy-dependent and -independent).[644]

### Digestive
- **FLDs/NAFLD**: Hepatocyte-specific KO → elevated fibrosis/oxidative stress in NASH mice;[158][669] deacetylates ChREBP/SREBP-1c;[663][664] antagonizes liver fibrosis via hepatic stellate cell blockade.[655][665]
- **HBV**: Downregulated in HBV-positive patients; inhibits replication via H3K9 deacetylation on cccDNA.[687][688]
- **Other liver**: Decreased in cirrhosis;[665][669] activation enhances glutathione → alleviates acetaminophen hepatotoxicity.[705]
- **IBD**: Downregulated in IBD patients; preserves Rspo1 → intestinal epithelium injury resistance;[715][717] deletion promotes inflammation via NF-κB.[716]
- **Intestinal IRI**: Downregulation by miR-351-5p aggravates injury via oxidative stress/inflammation/apoptosis.[726]

### Nervous system
- **Alzheimer's**: Inverse serum/saliva relationship with AD → diagnostic potential.[759][760]
- **ALS/MS**: Enhanced activity abrogates ALS-linked mutant SOD1 astrocyte neurotoxicity → therapeutic target.[786]
- **SCI**: Upregulation alleviates inflammation/oxidative stress/apoptosis.[800]

### Endocrine
- **DM**: Protective — induces PGC-1α acetylation and suppresses hepatic glucose production;[836] cooperates with p53 to deacetylate FoxO1 → suppresses gluconeogenic genes.[837]
- **Obesity**: **Promotes obesity** — overexpression exacerbates diet-induced obesity by decreasing STAT3 acetylation and lowering proopiomelanocortin in hypothalamus.[868]
- **Metabolic syndrome/lipid disorders**: Overexpression improves hypercholesterolemia (FoxO3 recruitment to SREBP2 promoter → H3K9/H3K56 deacetylation).[870]

### Urogenital
- **AKI**: Protective — inhibits LPS-induced apoptosis, promotes autophagy in HK-2 cells.[312]
- **Kidney fibrosis**: Proximal tubule-specific KO aggravates UUO fibrosis; MDL-800 activator mitigates.[806]
- **Aging-induced kidney injury**: SIRT6-deficient mice exhibit kidney hypertrophy/glomerular enlargement/proteinuria.[916]
- **Vascular calcification**: Markedly downregulated in CKD/VC patients; suppresses osteogenic transdifferentiation of VSMCs via runt-related transcription factor 2;[917] MSC exosomes inhibit high-phosphate aortic calcification via SIRT6–HMGB1 deacetylation.[918]

### Motor system
- **OA**: Inhibits chondrocyte senescence by negatively regulating NF-κB-mediated inflammation.[81]
- **Osteoporosis**: Inhibits age-related bone loss by stabilizing ER alpha in preosteoblastic cells.[948]
- **IDD**: Inhibits inflammatory response/senescence via NF-κB inhibition.[957]

### Aging
- Inhibition shortens VSMC lifespan/induces senescence (telomeric H3K9 hyperacetylation, 53BP1 binding); overexpression preserves telomere integrity;[201] deacetylates Polβ → DNA-damage resistance → prevents progeroid pathologies.[35]

---

## SIRT7

Nuclear/nucleolar sirtuin — the **least studied**, with frequently **inconsistent/dual** roles (dual in HBV, cardiac fibrosis, CRC; context-dependent).

### Cancer
- **Breast cancer**: Upregulated in BC tissue; increased expression predicts poor prognosis.[357][397][399] Depletion inhibits tumor growth via p38/MAPK activation.[357]
- **HCC**: High expression ↔ poor survival;[435] (involved in ribosome biogenesis regulation of HCC growth).
- **Colorectal cancer**: Increased in CRC tissue;[389][445] promotes CRC cell invasion via E-cadherin inhibition (EMT).[389]
- **Endometrial cancer**: Overexpressed in EC cells vs. normal endometrial cells; downregulation inhibits invasiveness.[390]
- **Glioma**: Upregulated; promotes proliferation/invasion via ERK and STAT3 signaling.[476]
- **Leukemia**: Expression increases with positive treatment response, reduces on progression/relapse → biomarker for monitoring treatment response in myeloid stem cell disorders.[487]

### Cardiovascular
- **Cardiac hypertrophy**: Protective — ameliorates stress-induced hypertrophy by deacetylating GATA4.[516]
- **Cardiac fibrosis**: **Inconsistent** — enhanced expression/phosphorylation promotes fibrosis via Smad2/ERK;[523] but SIRT7 KO also reported to result in fibrosis.[265]
- **Heart failure**: Limited studies.[541]
- **Atherosclerosis**: Regulates VSMC proliferation/migration via Wnt/β-catenin → anti-atherosclerosis strategy.[559]
- **MI/R injury**: Few studies.[490]

### Respiratory
- **Lung fibrosis**: Decreased most in LF fibroblasts; decline has profibrotic effect via Smad3 changes.[620]
- **Asthma**: Upregulated in asthmatic bronchial epithelial cells; promotes airway remodeling via TGF-β1-induced airway smooth muscle proliferation/migration.[633][635]

### Digestive
- **FLDs/NAFLD**: High expression in alcoholic hepatitis/NAFLD → harmful.[661][675][676]
- **HBV**: **Dual** — slightly elevated mRNA → pathomechanism in non-transformed hepatocytes;[689] but restricts HBV transcription/replication via cccDNA H3 desuccinylation (protective).[691]
- **IBD**: Systematic KO mice susceptible to colitis.[720]

### Nervous system
- **Alzheimer's**: (Not prominently reported in this review's AD section.)

### Endocrine
- **DM**: Future research focus; roles not yet established.[741]

### Urogenital
- **AKI**: SIRT7-deficient mice protected against AKI → **promotes tubular damage/kidney inflammation**.[893]

---

## Cross-cutting patterns by sirtuin

1. **SIRT1** = the "context-dependent master regulator" — dual/opposing roles in essentially every system; the only sirtuin explicitly implicated in *all* seven organ-system disease sections plus aging.
2. **SIRT2** = the "counter-regulatory sirtuin" — repeatedly harmful in neurodegenerative disease (AD, PD, HD, stroke) and asthma, yet protective in OA, IDD, kidney fibrosis, neuropathic pain, and several cancers where it behaves as a tumor suppressor (BC, OC, CC).
3. **SIRT3** = the "mitochondrial protector" — near-universally protective; only dual in OA and FLD/alcoholic liver disease.
4. **SIRT4** = the "tumor-suppressive metabolizer" — suppresses glutamine metabolism to fight BC/HCC/CRC/GC; the only sirtuin with clear **adverse** cardiac effects (hypertrophy/fibrosis).
5. **SIRT5** = the "metabolic double-edged sword" — protective in fatty liver/epilepsy/AKI, pro-disease in DM, CRC, HCC (glutamine/glucose metabolism reprogramming).
6. **SIRT6** = the "genome-stability guardian" — almost uniformly protective (DNA repair, telomere integrity, metabolic regulation); dual only in LC and obesity.
7. **SIRT7** = the "under-studied wildcard" — few studies, inconsistent results (cardiac fibrosis, HBV); nuclear/nucleolar functions (rRNA transcription, GATA4 deacetylation) suggest distinct biology awaiting exploration.

## Suggested follow-up tasks

- Create per-sirtuin entity notes capturing the disease landscape (e.g., enrich existing [[SIRT1]]/[[SIRT2]]/[[SIRT3]]/[[SIRT4]]/[[SIRT5]]/[[SIRT6]]/[[SIRT7]] notes with a "Disease landscape" section summarizing these roles).
- Flag SIRT1's and SIRT2's opposing roles per disease as candidates for a dedicated "SIRT1 dual role" / "SIRT2 counter-regulatory role" synthesis note.
- Cross-reference this sirtuin-first view against the complication-first view in `task_output_sirtuins_disease_complications_11_August_2026.md` to identify gaps (e.g., SIRT7 roles in AD, SIRT5 roles in ALS/MS).
