---
title: Dandelion Root Extract in Cancer — Preclinical Mechanism Map, Human Evidence Status, and Safety Constraints
description: Synthesis of dandelion (Taraxacum officinale / T. mongolicum) root extract anticancer evidence across cell-line and xenograft models (extrinsic apoptosis via caspase-8/FADD, mitochondrial ROS, pro-death autophagy, PI3K/Akt suppression, metabolic reprogramming), the human evidence base (one case report, one unreported Health Canada phase 1), and the interaction and estrogenicity constraints that govern any clinical use.
created: 2026-11-21
updated: 2026-11-21
source: src/notes/cancer/; src/notes/cell-death/; src/notes/autophagy/; src/notes/_link/Quercetin.md; src/notes/_link/Apigenin.md; src/notes/_link/Inulin.md; src/notes/_link/Polyphenols.md; src/notes/_link/STAT3.md; src/notes/_link/CYP3A4.md; src/notes/_link/Dasatinib.md; src/notes/_link/Estrogen.md; src/notes/_link/_document_ - Natural Bioactive Compounds Spermidine Fisetin Berberine Urolithin A.md; src/notes/_link/_document_ - Plant flavone apigenin An emerging anticancer agent.md; web sources listed in Sources
tags:
  - task-output
  - dandelion
  - taraxacum
  - oncology
  - apoptosis
  - autophagy
  - natural-product
  - clinical-evidence
  - herb-drug-interaction
author: []
type: task-output
---

# Dandelion Root Extract in Cancer — Preclinical Mechanism Map, Human Evidence Status, and Safety Constraints

Date: 21_Nov_2026 09:08 PM PST

> [!warning] Scope of the vault
> The vault contains no entity note for dandelion, *Taraxacum officinale*, or taraxasterol, and no node for any of them exists in the triples, wiki, or combined graph datasets. The closest existing entities are [[Quercetin]], [[Apigenin]], and [[Polyphenols]] (the flavonoid fraction), [[Inulin]] (the root fructan fraction), [[STAT3]], [[CYP3A4]], [[Dasatinib]], and [[Estrogen]]. This note is therefore a candidate source for a new `Dandelion` entity note in `src/notes/_link/`, which does not yet exist.

## Evidence tiers used in this note

Tier 1 = human randomized trial; Tier 2 = human observational/case evidence; Tier 3 = rodent in vivo; Tier 4 = in vitro human or animal cells; Tier 5 = untested hypothesis, mechanistic prediction, or claim without an experimental substrate.

No dandelion preparation of any kind has been tested against cancer in a randomized human trial. The total human oncology evidence comprises one case report (Tier 2, n = 1) and one Health Canada phase 1 trial whose results have never been published (Tier 1 by design, uninterpretable). All efficacy claims below are Tier 3 or Tier 4 unless explicitly labelled otherwise.

## Chemistry of the root

Dandelion root stores four compound classes that carry the reported activity (Wang et al., *Nutrients* 2025, 17:3769; Fan et al., *Molecules* 2023, 28:5022).

| Class | Representative compounds | Root content data |
|---|---|---|
| Pentacyclic triterpenoids | taraxasterol, ψ-taraxasterol, taraxerol, α-amyrin, β-amyrin, lupeol | Taraxasterol 0.5–2 % w/w in commercial root powders; triterpene biosynthesis in root via TcOSC1/3/4 |
| Phenolic acids | caffeic acid, chlorogenic acid, 3,4-/3,5-O-dicaffeoylquinic acid, cichoric acid, ferulic acid, protocatechuic acid | Caffeoylquinic acid content peaks under mild salt stress (isochlorogenic A 1.44× control at 1 g/kg NaCl) |
| Flavonoids | luteolin, quercetin, isorhamnetin, luteolin-7-O-glucoside, picrasinoside F | Luteolin derivatives 0.385–0.535 mg/mL in leaf and flower extracts; root-specific content not quantified here |
| Sesquiterpene lactones | taraxacin, taraxacerin, artecalin, arsanin, desacetylmatricarin | Bitter principles; α-methylene-γ-lactone moiety alkylates cysteine residues |
| Fructans and polysaccharides | inulin, 2-kestose, nystose, DRP-2b (31.8 kDa), DRP-3a (6.72 kDa) | Inulin 16.10 g/100 g dry weight in defatted root (63 % of total fructans); total fructans 25.35 g/100 g dw |

Two consequences follow. First, the antioxidant and prebiotic fractions ([[Inulin]], [[Polyphenols]]) and the cytotoxic triterpenoid/flavonoid fractions are chemically distinct, so a root tea and a standardized root extract are not interchangeable. Second, compound content varies with plant part, developmental stage, harvest season, and extraction solvent; the Windsor group reported that its laboratory extract is roughly five times more concentrated than the over-the-counter product.

## Preclinical mechanism map

### Extrinsic apoptosis via caspase-8 and FADD

The best-characterized mechanism is death-receptor-mediated. In human chronic myelomonocytic leukemia lines (MV-4-11, HL-60, U-937), aqueous dandelion root extract (DRE) induced [[Apoptosis]] in a dose- and time-dependent manner with early [[Caspase-8]] activation followed by [[Caspase-3]]; pan-caspase inhibitor Z-VAD-fmk and dominant-negative [[FADD]] cells each abolished the response, and dominant-negative FADD cells also retained intact mitochondrial membrane potential (Ovadje et al., *PLoS ONE* 2012, 7:e30604, PMID 22546979). The same FADD dependency was reported in Jurkat T-cell leukemia and B16 melanoma (Ovadje et al., *J Ethnopharmacol* 2011, 133:86–91).

In human pancreatic cancer (PANC-1, PANC-28), DRE induced apoptosis and autophagy with early caspase-8 activation; the death-inducing signaling complex assembled on [[DR5]] with calmodulin recruitment, and caspase-8 inhibitor Z-IETD-fmk halved the apoptotic fraction (Ovadje et al., *Pancreas* 2012, 41:1039–1047, PMID 22647733). The DRE preparation used in these studies was a hot-water homogenate of fresh root (100 g in 200 mL distilled water, lyophilised, 7.34 % yield), reconstituted to 100 mg/mL; working concentrations were 0.6–5.0 mg/mL.

Selectivity for malignant over normal cells was reported in the same studies: non-cancerous peripheral blood mononuclear cells from healthy volunteers, normal human fibroblasts, and normal colon mucosal epithelial cells (NCM460) showed no apoptosis or autophagic vacuoles at concentrations that killed the tumour lines.

### Mitochondrial targeting

In colorectal cancer cells, DRE caused mitochondrial membrane depolarisation and raised [[Mitochondrial ROS]] in isolated mitochondria, while isolated mitochondria from NCM460 cells produced no measurable ROS (Ovadje et al., *Oncotarget* 2016, 7:73080–73100, PMID 27564258). In the same study, caspase-8 was activated and [[Bid]] truncated, but the caspase-8 inhibitor IETD-fmk did not reduce cytotoxicity in HT-29 cells — that is, in colorectal cells the death was caspase-8 independent even though caspase-8 was switched on, a difference from the leukemia and pancreatic models. DRE at 2.5 mg/mL suppressed cFLIP expression in cancer cells, and lupeol at 40 µM did the same, with additive effect on combination; cFLIP suppression (the node covered by [[Caspase-8-c-FLIP Rheostat]]) is the mechanistic bridge to the extrinsic pathway. DRE did not induce DNA damage.

### Autophagy

Pro-death autophagy was reported alongside apoptosis in CMML (MDC-positive, propidium-iodide-positive vesicles, contrasted against tamoxifen-induced survival autophagy) and in pancreatic lines, with [[Beclin1]] up-regulation and LC3-I to LC3-II conversion. Separately, ψ-taraxasterol induced autophagy in MCF-7 cells through [[mTOR]]/[[4E-BP1]] inhibition, and taraxasterol at 50 µg/mL induced autophagic degradation of RNF31 in HCT116 and SW480 colon cancer cells, relieving RNF31-mediated [[p53]] ubiquitination.

### Cell-cycle arrest and anti-proliferation

ψ-taraxasterol at 1 µM arrested gastric cancer lines (HGC-27, NCI-N87) at G0/G1 with [[Cyclin D1]] and PCNA down and p21 up. Taraxasterol arrested SK-Hep1 and HepG2 hepatocellular carcinoma lines at G0/G1 via Hint1 up-regulation, with IC50 17.0 µM and 9.9 µM respectively, and dose-dependently reduced Ki-67 in tumour-bearing mice at 5.0–7.5 mg/kg. Dandelion polysaccharides raised [[p53]] in MCF-7 over 50–400 µg/mL.

### Signaling suppression

Three recurring axes appear across independent groups. PI3K/Akt is suppressed by DRE in MDA-MB-231 cells (phosphorylated PI3K and Akt reduced) and by DRE in tongue cancer Tca-8113 cells in a dose-dependent manner; taraxasterol inhibits EGFR/AKT1 in gastric cancer xenografts. STAT3 is suppressed in triple-negative breast cancer (TNBC) cells under a tumour-activated macrophage microenvironment, together with PD-L1 down-regulation and M2-to-M1 repolarisation of macrophages. FAK and src phosphorylation fall with DRE, reducing [[MMP]]-2 and MMP-9 activity. Wnt/β-catenin signalling and MMP-2/MMP-9 are suppressed by taraxasterol in papillary thyroid carcinoma.

### Metabolic reprogramming

Dandelion extract blocks the [[Warburg Effect]] axis in TNBC by down-regulating choline kinase alpha (CHKA), which lowers phosphocholine, phosphatidylcholine and phosphatidylethanolamine, lowers the PC/sphingomyelin ratio and membrane fluidity, and reduces PI3K/Akt phosphorylation and SREBP/FADS2 expression; adding choline and phosphocholine back reverses the Akt effect, and CHKA knockdown reproduces it (Wang et al., *Front Pharmacol* 2022, 13:942996). ψ-Taraxasterol inhibits hexokinase in H1299 and A549 lung cancer cells, and taraxasterol lowers glyceraldehyde-3-phosphate dehydrogenase in HGC-27. Dandelion polysaccharides at 200 mg/L reduce hepcidin and ferroportin expression in Huh7 and HepG2 and reduce iron deposition in tumour tissue in Hepa1-6 and H22 tumour-bearing mice at 200 mg/kg.

### Anti-angiogenesis and immune effects

Dandelion polysaccharides reduce HIF-1α and [[VEGF]] in hepatocellular carcinoma. Isochlorogenic acid A from the root suppresses FAK/PI3K/Akt/mTOR signalling and improves response to PD-1/PD-L1 blockade in TNBC. At the tissue level, DRE shifts tumour-associated macrophages toward M1 markers (TNF-α, IL-8, iNOS) and away from M2 markers (IL-10, CD206, arginase-1, TGF-β).

## Selected preclinical results with doses

| Model | Preparation and dose | Result | Source |
|---|---|---|---|
| HT-29 (p53−/−), HCT116 (p53 WT), NCM460 | Aqueous DRE, in vitro | EC50 2.0 mg/mL (HCT116), 3.5 mg/mL (HT-29); >95 % of colon cancer cells in programmed cell death by 48 h, irrespective of p53; NCM460 unaffected; FOLFOX comparably affected normal cells | Ovadje 2016, *Oncotarget* |
| HT-29 / HCT116 xenograft, CD-1 nu/nu | Oral DRE 40 mg/kg/day in drinking water, 75 days | Tumour growth retarded by more than 90 %; no weight change; urine protein unchanged; liver, kidney, heart histology minimal/incidental lesions | Ovadje 2016 |
| Balb/c normal mice | Oral DRE 40 mg/kg/day, 75 days | No toxicity signal on weight, urine protein, or histopathology | Ovadje 2016 |
| MV-4-11, HL-60, U-937 (CMML) | DRE 0.6–5.0 mg/mL | 60 % viability loss at 96 h; FADD-dependent caspase-8 → caspase-3; pro-death autophagy; non-cancerous PBMCs unaffected; second dose killed the surviving fraction | Ovadje 2012, *PLoS ONE* |
| PANC-1, PANC-28 | DRE, in vitro | Apoptosis and autophagy, caspase-8-dependent, DR5/CaM DISC assembly | Ovadje 2012, *Pancreas* |
| MCF-7/AZ, LNCaP | Aqueous leaf, flower, root extracts | Leaf extract reduced MCF-7/AZ growth via ERK; root and flower extracts had no effect on growth of either line; root extract blocked MCF-7/AZ invasion into collagen I; FAK/src phosphorylation and MMP-2/MMP-9 activity reduced | Sigstedt 2008, *Int J Oncol* 32:1085 |
| DU-145, PC-3 prostate | DRE 4 mg/mL in vitro; oral 40 mg/kg/day, 8 weeks | Apoptosis induced; DRE enhanced mitoxantrone effect at 4 mg/mL but did not significantly enhance taxol; xenograft tumour burden reduced and well tolerated | Nguyen 2019, *EB-CAM* 2019:2951428, PMID 31391857 |
| MDA-MB-231, MDA-MB-468, MCF-10A | 50 % ethanol macroporous-resin extract | IC50 110.8 ± 9.2 µg/mL (MDA-MB-231) and 107.9 ± 5.6 µg/mL (MDA-MB-468) at 24 h; MCF-10A affected only at 160 µg/mL at 48–72 h | Wang 2022, *Front Pharmacol* |
| MDA-MB-231 xenograft (NOG), 4T1 (BALB/c) | Extract 50 and 100 mg/kg, intraperitoneal, daily 15–20 days | Dose-dependent reduction of tumour volume and weight; no body-weight difference | Wang 2022 |
| A549 lung cancer, L929 fibroblast | Taraxasterol 25 µM | A549 viability reduced to 56.26 % at 48 h; L929 viability ≥ 80 %; SEM shows surface damage in A549, intact L929 | Liu 2025, *Pharmaceuticals* 18:663, PMID 40430483 |
| Cancer stem cell spheroids (2D vs 3D) | Methanol vs ethanol extract | Both inhibited proliferation; 3D spheroids far more resistant (methanol IC50 142.2 ± 17.45 µg/mL at 72 h vs 1012 ± 5 µg/mL in 2D); methanol more active than ethanol | van Trinh 2016, *Biomed Res Ther* |

Two results in this table cut against the extract as a general anticancer agent. Sigstedt 2008 found that root and flower aqueous extracts had no effect on the growth of MCF-7/AZ or LNCaP cells, with activity restricted to invasion; the positive proliferation results come from other preparations, other solvents, and other lines. And the breast-cancer-stem-cell work shows a roughly seven-fold right-shift of IC50 when the same cells are grown as spheroids rather than monolayers, so monolayer IC50 values understate the dose needed in a solid tumour.

## Human evidence

### Case report

Rahmat and Damon (*Case Rep Hematol* 2018, 2018:7267920) described a 76-year-old man with previously untreated chronic myelomonocytic leukemia and multiple comorbidities including treated prostate cancer, who from 2009 consumed papaya leaf extract and from early 2015 dandelion root extract plus other commercial supplements, with stable haematological parameters and improved bone marrow blast counts. The extract was not standardised, other interventions were concurrent, and there was no untreated control. The reporting clinicians framed it as a hypothesis-generating observation, not evidence of efficacy.

The origin story of the research programme is an anecdote: an 85-year-old woman whose white cell count of about 130 fell to about 10 after three months of drinking dandelion root tea, prompting Caroline Hamm at Windsor Regional Cancer Centre to contact Siyaram Pandey at the University of Windsor in 2009.

### Phase 1 trial

Health Canada approved a phase 1 trial in November 2012 (application filed by Hamm in July 2012), and the trial opened for referral in February 2015 at the Windsor Regional Cancer Centre with a target of 30 patients with end-stage blood cancers who had exhausted other treatment options. Reported status: responses were described in late 2015 as short-lived, and Pandey stated in 2021 that recruitment was difficult and funding was cut. No results have been published, and the trial does not appear in the ClinicalTrials.gov registry.

A registry query on 21_Nov_2026 for "dandelion" and "Taraxacum" returned five interventional studies, none in oncology: dyshidrotic hand eczema (NCT00442091, n = 4), a delirium bundle in neurointensive care (NCT02594982, where the acronym is DANDELION), and three gastrointestinal/bloating supplement trials (NCT07370740, NCT07033000, NCT06516744). Human trials of dandelion in oncology do not exist in the registry.

### The "kills 98 % of cancer cells in 48 hours" claim

The number traces to Ovadje 2016, which reported that more than 95 % of colon cancer cells in culture underwent programmed cell death within 48 hours of aqueous DRE exposure, and that oral DRE retarded human colon xenograft growth by more than 90 %. The viral claim converts a proportion of treated cells in a culture dish into a rate of cancer killing, drops the cell-model qualifier, and adds "immune booster" and "organ detoxifier" (Full Fact 2021; Snopes; USA Today 2021; Science Feedback 2024; AAP 2025). The MD Anderson Cancer Center (October 2026) states that none of the dandelion-root cancer studies have been conducted in people, quoting Meroë Morse: "Many plants show strong effects in early research, but those findings often do not translate into meaningful benefits for patients, and they can sometimes be harmful." Memorial Sloan Kettering's herb monograph states that dandelion has not been shown to treat or prevent cancer.

### Absence of pharmacokinetics

No in vivo pharmacokinetic study of dandelion root extract has been reported, so the concentration of any constituent reaching a tumour in a treated patient is unknown. The Nutrients 2025 review names this as the primary translational gap alongside extract standardisation.

## Safety and interaction constraints

### Estrogenic activity

Ethanolic *T. mongolicum* extract induced estrogenic activity in MCF-7 cells and increased uterine weight in immature female rats (Oh et al., *Chin J Nat Med* 2015, 13:808–814). Memorial Sloan Kettering flags this as a reason dandelion may promote growth of hormone-sensitive breast cancer. This constraint bears directly on the strongest preclinical claim set, since much of it concerns breast and TNBC lines.

### Drug metabolism and transporter interactions

Dandelion inhibited CYP1A2 in animal studies and CYP3A4 in vitro; dandelion tea extract inhibited CYP3A4 in herbal tea extracts in vitro (Dufay et al., *J Pharm Pharmacol* 2014, 66:1478–1470). Dandelion induces UGT activity in animals. Both directions matter: CYP inhibition can raise levels of co-administered substrates, UGT induction can lower them.

Specific measured interactions:

- Dasatinib: dandelion root extract lowered dasatinib bioavailability by approximately 50 % in rats (Alzoman et al., *Biomed Chromatogr* 2019, 33:e4674, PMID 31376170). Imatinib and nilotinib were studied in the same work.
- Ciprofloxacin: *Taraxacum mongolicum* reduced peak ciprofloxacin concentration by 73 % in rats (Zhu et al., *J Pharm Sci* 1999, 88:632–634).
- A kidney transplant recipient reached toxic blood levels of immunosuppressive agents after drinking a tea containing dandelion (Kwan et al., *Ren Fail* 2014, 36:309–312).
- Doxorubicin: aqueous dandelion extract increased tumour-cell sensitivity to doxorubicin and reduced doxorubicin-induced cardiotoxicity in the cited preclinical work — the combination direction that would otherwise be an argument for use.
- Dandelion root extract enhanced the efficacy of mitoxantrone but not taxol in DU-145 and PC-3 prostate cells, and combination with paclitaxel and mitoxantrone reduced xenograft tumour volume (Nguyen 2019).

### Reported adverse events

Case reports include acute liver injury from a liver-detoxification tea containing dandelion (Niazi et al., *Case Rep Gastroenterol* 2022, 16:612–617), digital necrosis from heavy dandelion tea intake (10–15 cups daily for 6 months) via hyperoxaluria (Moriarty et al., *Br J Dermatol* 2013, 169:227–230), haemorrhagic cystitis after a slimming product containing dandelion (Catania et al., *South Med J* 2010, 103:90–92), and contact dermatitis in Asteraceae-sensitive individuals. Mild diuresis, hypoglycaemia, heartburn and dyspepsia are the common reported effects; the diuretic and hypoglycaemic activity is additive with diuretics and antidiabetics. Sesquiterpene lactones are the allergenic principle.

### Regulatory status

Dandelion is sold as a dietary supplement or food, not as an oncology drug; no regulatory agency recognises it as a cancer treatment, and its constituents are not standardised across products.

## Vault connections

- [[Apoptosis]] and [[Caspase-8]] — the extrinsic, FADD-dependent axis that carries most of the root extract's selective cytotoxicity; the vault's [[Caspase-8-c-FLIP Rheostat]] note covers the cFLIP node that DRE suppresses.
- [[Autophagy]] and [[Beclin1]] — pro-death autophagy reported alongside apoptosis in CMML and pancreatic lines; connects to the vault's [[Autophagy]] and [[Autophagic Cell Death]] notes and to [[mTOR]]/[[4E-BP1]] inhibition by ψ-taraxasterol.
- [[Mitochondrial ROS]] and [[Oxidative Stress]] — isolated-mitochondria ROS generation in cancer but not normal cells.
- [[Warburg Effect]], [[Metabolic Reprogramming]], [[Hexokinase 2]], [[Glycolysis]] — CHKA/phosphocholine and hexokinase points of interference; the vault's existing metabolic-reprogramming material is the natural place to file a dandelion note.
- [[PI3K-Akt Signaling]], [[Akt]], [[STAT3]], [[p53]], [[Cyclin D1]], [[Wnt]] — the recurrent signaling axes; [[STAT3]] already links to the tumour microenvironment context.
- [[Cancer Stem Cells]] — the 2D-versus-3D spheroid IC50 shift and the side-population/EMT phenotype are the closest vault-side anchors for the spheroid resistance result.
- [[Tumor Microenvironment]] and [[Macrophage]] — M1/M2 repolarisation under TAM conditions and the STAT3/PD-L1 axis.
- [[Quercetin]], [[Apigenin]], [[Polyphenols]] — the flavonoid fraction; the vault's [[_document_ - Plant flavone apigenin An emerging anticancer agent]] already handles apigenin's own bioavailability limitation, which is the same constraint that limits any dandelion extract carrying a meaningful flavonoid load.
- [[Inulin]] — the dominant root fructan (16.1 g/100 g dry weight); prebiotic and gut-microbiome axis rather than direct cytotoxicity, and the reason a root tea and a cytotoxic extract are different products. The [[_document_ - Natural Bioactive Compounds Spermidine Fisetin Berberine Urolithin A]] framework covers the metabolic–microbiome arm that inulin belongs to.
- [[CYP3A4]], [[Dasatinib]], [[Estrogen]] — the interaction and estrogenicity constraints; [[Dasatinib]] and [[Quercetin]] already co-occur in the vault's senolytic-trial notes, and the ~50 % dasatinib bioavailability reduction is a direct measurement on a haematological-malignancy drug.
- Disease nodes: [[Colon Cancer]], [[Gastric Cancer]], [[Lung Cancer]], [[Prostate Cancer]], [[Hepatocellular Carcinoma]], [[Pancreatic Ductal Adenocarcinoma]], [[triple-negative breast cancer]], [[leukemia]], [[Melanoma]], [[Cancer]] — all carry preclinical dandelion entries; none carries human efficacy evidence.
- [[FOLFOX]] and [[paclitaxel]] — the chemotherapy comparators used in the Ovadje and Nguyen work; FOLFOX was shown to be non-selective against normal colon epithelium at the same doses where DRE was selective.

## Sources

Primary research and reviews

- Ovadje P, Ammar S, Guerrero JA, Arnason JT, Pandey S. Dandelion root extract affects colorectal cancer proliferation and survival through the activation of multiple death signalling pathways. *Oncotarget* 2016;7(45):73080–73100. PMID 27564258. PMC5341965.
- Ovadje P, Hamm C, Pandey S. Efficient induction of extrinsic cell death by dandelion root extract in human chronic myelomonocytic leukemia (CMML) cells. *PLoS ONE* 2012;7(2):e30604. PMID 22546979.
- Ovadje P, Chochkeh M, Akbari-Asl P, Hamm C, Pandey S. Selective induction of apoptosis and autophagy through treatment with dandelion root extract in human pancreatic cancer cells. *Pancreas* 2012;41(7):1039–1047. PMID 22647733.
- Ovadje P, Chatterjee S, Griffin C, Tran C, Hamm C, Pandey S. Selective induction of apoptosis through activation of caspase-8 in human leukemia cells (Jurkat) by dandelion root extract. *J Ethnopharmacol* 2011;133(1):86–91.
- Sigstedt SC, Hooten CJ, Callewaert MC, et al. Evaluation of aqueous extracts of Taraxacum officinale on growth and invasion of breast and prostate cancer cells. *Int J Oncol* 2008;32(5):1085–1090. PMID 18425335.
- Nguyen C, Mehaidli A, Baskaran K, et al. Dandelion root and lemongrass extracts induce apoptosis, enhance chemotherapeutic efficacy, and reduce tumour xenograft growth in vivo in prostate cancer. *Evid Based Complement Alternat Med* 2019;2019:2951428. PMID 31391857. PMC6662490.
- Wang S, Hao HF, Jiao YN, et al. Dandelion extract inhibits triple-negative breast cancer cell proliferation by interfering with glycerophospholipids and unsaturated fatty acids metabolism. *Front Pharmacol* 2022;13:942996.
- Wang A, Xiong W, Cheng C, Zou L, Niu B, Liu Y. Tracking evidences of dandelion for the treatment of cancer: from chemical composition, bioactivity, signaling pathways in cancer cells to perspective study. *Nutrients* 2025;17(23):3769. PMID 41374059. PMC12694484.
- Liu J, Yang H, Liu R, et al. Investigation of the anti-lung cancer mechanisms of Taraxacum officinale based on network pharmacology and multidimensional experimental validation. *Pharmaceuticals* 2025;18(5):663. PMID 40430483. PMC12114748.
- Renna M. Taraxacum officinale L. in leukemia and lymphoma: current knowledge and prospects for horticulture. *Front Plant Sci* 2026;16:1740142.
- Zhu H, Zhao H, Zhang L, et al. Dandelion root extract suppressed gastric cancer cells proliferation and migration through targeting lncRNA-CCAT1. *Biomed Pharmacother* 2017;93:1010–1017. PMID 28724210.
- Alzoman NZ, Maher HM, Shehata SM, Abanmy NO. UPLC–MS/MS study of the effect of dandelion root extract on the plasma levels of the selected irreversible tyrosine kinase inhibitors dasatinib, imatinib and nilotinib in rats: potential risk of pharmacokinetic interactions. *Biomed Chromatogr* 2019;33:e4674. PMID 31376170.
- Zhu M, Wong PY, Li RC. Effects of taraxacum mongolicum on the bioavailability and disposition of ciprofloxacin in rats. *J Pharm Sci* 1999;88(6):632–634.
- Oh SM, Kim HR, Park YJ, et al. Ethanolic extract of dandelion (Taraxacum mongolicum) induces estrogenic activity in MCF-7 cells and immature rats. *Chin J Nat Med* 2015;13(11):808–814.
- Niazi B, Ahmed K, Ahmed M, Ali S, Song K, Elias S. Drug-induced liver injury from herbal liver detoxification tea. *Case Rep Gastroenterol* 2022;16(3):612–617.
- Moriarty B, Pinney JH, Owen-Casey MP, et al. Digital necrosis from dandelion tea. *Br J Dermatol* 2013;169(1):227–230.
- Kwan LP, Mok MM, Ma MK, et al. Acute drug toxicity related to drinking herbal tea in a kidney transplant recipient. *Ren Fail* 2014;36(2):309–312.
- Dufay S, Worsley A, Monteillier A, et al. Herbal tea extracts inhibit cytochrome P450 3A4 in vitro. *J Pharm Pharmacol* 2014;66(10):1478–1490.
- Rahmat LT, Damon LE. The use of natural health products especially papaya leaf extract and dandelion root extract in previously untreated chronic myelomonocytic leukemia. *Case Rep Hematol* 2018;2018:7267920.
- Fan M, Zhang X, Song H, Zhang Y. Dandelion (Taraxacum genus): a review of chemical constituents and pharmacological effects. *Molecules* 2023;28:5022.
- Schütz K, Carle R, Schieber A. Taraxacum — a review on its phytochemical and pharmacological profile. *J Ethnopharmacol* 2006;107:313–323.
- Appl Sci 2025;15:4091. Physicochemical, functional, and antibacterial properties of inulin-type fructans isolated from dandelion (Taraxacum officinale) roots by "green" extraction techniques.
- Fulga A, Casian A, Casian I, Protopop S, Gudumac V, Tagadiuc O. Effects of Taraxacum officinale on glioblastoma cell culture and their correlation with hydroxycinnamic acids content. *Med Sci Forum* 2023;21(1):18.
- Chen Q, Wang M, Shen C. Bauerane induces S-phase cell cycle arrest, apoptosis, and inhibition of proliferation of A549 human lung cancer cells through the PI3K/AKT and STAT3 signaling pathway. *Med Sci Monit* 2020;26:1–7.
- Wang T, Sun J, Wang L, et al. Therapeutic potential of isochlorogenic acid A from Taraxacum officinale in improving immune response and enhancing the efficacy of PD-1/PD-L1 blockade in triple-negative breast cancer. *Front Immunol* 2025;16:1529710.

Registry, institutional, and fact-check sources

- ClinicalTrials.gov API v2, query "dandelion" and "Taraxacum", retrieved 21_Nov_2026 (5 studies, none in oncology: NCT00442091, NCT02594982, NCT07370740, NCT07033000, NCT06516744).
- Memorial Sloan Kettering Cancer Center. Dandelion — purported benefits, side effects, and more. Updated 23 May 2025.
- MD Anderson Cancer Center. Dandelion root: benefits, side effects and how to try it. 21 October 2026.
- University of Windsor Daily News. Human clinical trials on dandelion extract for cancer. 19 February 2015. CBC News. Health Canada approves dandelion extract trials in humans. 12 November 2012. CBC News. 30 patients to test dandelion's cancer-killing potential. 17 February 2015.
- Full Fact. Dandelion root is not a proven cancer cure. 21 May 2021. Science Feedback. No research shows that dandelion can kill cancer cells or treat cancer in humans. 13 May 2024. USA Today. Fact check: limited study on anti-cancer potential of dandelion root. 4 May 2021. AAP. Dandelion tea cancer cure claims blown away. 12 June 2025.

## Linking Summary

- [[Dandelion]] — no note exists. Candidate new entity note for `src/notes/_link/`, carrying the triterpenoid/flavonoid/fructan chemistry, the FADD-caspase-8 mechanism, the absence of human trial data, and the interaction constraints.
- [[Taraxasterol]] — no note exists; the principal isolated anticancer triterpenoid of the root, active across gastric, hepatocellular, colon, lung, cervical and bladder lines in vitro.
- [[Luteolin]] — note exists at `src/notes/comt/Luteolin.md`; ranked first by degree and betweenness among the top-ranked compounds in the TNBC network-pharmacology analysis and the best-docking candidate among them for CHKA (−6.94 kcal/mol), and it reduced CHKA, SREBP and phosphorylated Akt in MDA-MB-231.
- [[Caffeic Acid Phenethyl Ester]] — the vault's caffeic-phenol entry; plain caffeic acid (the root's phenolic acid) has no note.
- Pentacyclic triterpenoid, [[Chlorogenic Acid]], [[Chicoric Acid]], [[Isorhamnetin]], sesquiterpene lactone — no notes.
- Strong connections to strengthen: [[Apoptosis]] ↔ [[Caspase-8]] ↔ [[FADD]] (the DRE axis); [[Autophagy]] ↔ [[mTOR]] (ψ-taraxasterol); [[Warburg Effect]] ↔ [[Hexokinase 2]] (DRE and taraxasterol); [[Tumor Microenvironment]] ↔ [[STAT3]] ↔ [[Macrophage]] (TAM repolarisation); [[CYP3A4]] ↔ [[Dasatinib]] (measured interaction); [[Estrogen]] ↔ [[triple-negative breast cancer]] (the estrogenicity constraint against the strongest efficacy claims).
