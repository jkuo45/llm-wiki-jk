---
title: Centenarian SIRT6 variants elevate SIRT6 protein and enhance cellular senescence resistance
description: This preprint reports that two linked missense variants in SIRT6 (N308K and A313S) enriched in Ashkenazi Jewish centenarians elevate endogenous SIRT6 protein levels through weakened interaction with vimentin, alter enzymatic activities (enhanced mono-ADP-ribosyltransferase, reduced deacetylase), delay replicative senescence, and confer resistance to progerin-induced stress. AAV-delivered CentSIRT6 and pharmacological activation with Fucoidan-FV mitigate LINE1 derepression in progeria fibroblasts.
published: 2026-06-19
created: 2026-07-09
source: https://doi.org/10.21203/rs.3.rs-9997679/v1
author: [Yousin Suh, Jiping Yang, Xifan Wang, HyeRim Han, Yizhou Zhu, Lei Zhang, Haiqi Chen, Paul Robbins]
tags:
  - sirtuin
  - sirt6
  - longevity
  - centenarian
  - senescence
  - dna-repair
  - progeria
  - cellular-senescence
---

# Centenarian SIRT6 variants elevate SIRT6 protein and enhance cellular senescence resistance

**Yousin Suh** (Columbia University), **Jiping Yang** (Columbia University Medical Center), **Xifan Wang** (Columbia University Medical Center), **HyeRim Han** (Columbia University Irving Medical Centre), **Yizhou Zhu** (Columbia University Medical Center), **Lei Zhang** (University of Georgia), **Haiqi Chen** (Columbia University Medical Center), and **Paul Robbins** (University of Minnesota)

> [!important] Key Finding
> Two linked missense variants in [[SIRT6]] (N308K and A313S) enriched in [[Centenarians|Ashkenazi Jewish centenarians]] elevate endogenous SIRT6 protein via weakened interaction with [[Vimentin]], enhance mono-ADP-ribosyltransferase activity, and confer cellular stress resistance — revealing a mechanism that can be mimicked by AAV gene therapy or the natural compound [[Fucoidan]]-FV.

## Abstract

[[Centenarians]] represent a natural model of delayed human [[Aging]], offering a unique opportunity to uncover genetic mechanisms that promote [[Longevity]]. However, the functional consequences of the genetics variants carried by these long-lived individuals remain poorly characterized in physiologically relevant systems. Here, we introduced two linked missense variants in [[SIRT6]] enriched in Ashkenazi Jewish centenarians into the endogenous _SIRT6_ locus of [[Stem Cells|human embryonic stem cells]] and differentiated them into somatic lineages to define their effects in a native genomic context. We revealed that centenarian variants elevated endogenous [[SIRT6]] protein abundance through weakened interaction with [[Vimentin]], and altered endogenous SIRT6 enzymatic activities, including enhanced mono-[[ADP-ribosylation|ADP-ribosyltransferase]] activity and reduced deacetylase activity. Functionally, these variants delayed [[Cellular Senescence|replicative senescence]] and conferred resistance to [[Progerin]]-induced stress, accompanied by preservation of [[DNA Repair]] gene expression programs and suppression of [[Transposable Elements|transposable element]] derepression. Guided by these findings, we evaluated the translational potential of both genetic and pharmacological interventions, demonstrating that adeno-associated virus ([[AAV]])-mediated delivery of centenarian SIRT6 or pharmacological activation of SIRT6 using [[Fucoidan]] from _Fucus vesiculosus_ (Fucoidan-FV) partially attenuated aging-associated molecular defects, including [[Genomic Instability|genome instability]] and [[LINE-1]] derepression, in [[Progeria]] fibroblasts. Together, these findings demonstrate that centenarian variants exert multifaceted effects on [[SIRT6]] function to enhance cellular stress resistance, providing a framework for translating genetic discoveries from long-lived individuals into mechanistic insight and potential gerotherapeutic strategies for [[Healthspan|healthy aging]].

## Introduction

[[SIRT6]] is a [[NAD+]]-dependent deacetylase and [[ADP-ribosylation|mono-ADP-ribosyltransferase (mADPr)]] that plays pivotal roles in [[DNA Repair|DNA damage repair]], [[Chromatin|chromatin stability]], [[Metabolism|metabolic regulation]], and stress responses[1–4]. SIRT6 overexpression extends [[Longevity|lifespan]] and [[Healthspan]] in mice[5,6] and its double-strand break repair activity correlates with lifespan across species[7], firmly establishing _SIRT6_ as a longevity assurance gene.

[[Centenarians]], who live not only longer but also show resistance and resilience to age-related diseases, represent a natural model of human longevity[8–10]. Genetic studies in exceptionally long-lived individuals have identified rare variants associated with extended lifespan[11–20], including two linked missense variants in _SIRT6_ (rs201141490-N308K and rs183444295-A313S) that are enriched in Ashkenazi Jewish centenarians[21]. We previously showed that the resulting centenarian SIRT6 protein (CentSIRT6) exhibits reduced deacetylase activity but enhanced mADPr activity, and augments DNA double-strand break repair and cancer cell killing in overexpression systems[21].

> [!info] Study Design
> To overcome limitations of ectopic overexpression, the authors generated knock-in [[Stem Cells|human embryonic stem cells (hESCs)]] carrying the linked centenarian _SIRT6_ variants and differentiated them into somatic lineages — focusing on [[Mesenchymal Stromal Cells|human mesenchymal stromal cells (hMSCs)]] as a well-established model of cellular aging.

## Results

### Centenarian SIRT6 variants elevate endogenous SIRT6 protein levels

To investigate the impact of centenarian _SIRT6_ variants in an endogenous genomic context, we introduced the centenarian variants (rs183444295 and rs201141490) into hESCs (wild-type, WT) using [[CRISPR/Cas9]]-mediated gene editing (Fig. 1A). Successfully edited hESCs (centenarian, CENT) maintained pluripotency marker [[OCT4]] expression, comparable to their isogenic controls. Unexpectedly, CENT hESCs showed significantly elevated SIRT6 protein levels despite unchanged mRNA levels (Fig. 1B-1C). To assess whether this effect was cell-type specific, we differentiated hESCs into [[Mesenchymal Stromal Cells|human mesenchymal stromal cells (hMSCs)]], human endothelial cells (hECs) and human smooth muscle cells (hSMCs) (Fig. 1D). Each lineage expressed its respective markers, confirming lineage-committed differentiation. Notably, all three CENT hESC-derived lineages showed consistently elevated SIRT6 protein levels but unchanged mRNA levels. Given that hMSC is a well-established cellular model for aging research[22–26], we focused subsequent functional analyses on this cell type.

### Elevated SIRT6 is not caused by increased nuclear localization

Since these centenarian mutations (N308K and A313S) are located proximal to the C-terminal nuclear localization signal (NLS; amino acids 331–353) (Fig. 2A), raising the possibility of altered nuclear import, we examined their effect on subcellular distribution. However, subcellular fractionation revealed elevated SIRT6 in both cytoplasmic and nuclear compartments of CENT hMSCs (Fig. 2B), ruling out enhanced nuclear import.

### Elevated SIRT6 is independent of its stabilizer USP10

[[SIRT6]] stability is regulated by the [[Ubiquitin-Proteasome System]] through interactions with E3 ubiquitin ligases[27,28] and deubiquitinating enzymes (DUBs)[29]. Among its established interactors, the DUB [[USP10]] stabilizes SIRT6 by binding its C-terminal region[29] — the region harboring the centenarian mutations (Fig. 2A). To test whether the elevated SIRT6 is mediated by USP10, we performed USP10 knockdown using siRNAs in both WT and CENT hMSCs. While USP10 knockdown reduced SIRT6 protein levels in WT hMSCs, SIRT6 protein levels in CENT hMSCs remained unchanged, indicating that the increased SIRT6 levels in CENT hMSCs are independent of USP10.

### Vimentin mediates the increased SIRT6 protein

To identify mediators contributing to elevated SIRT6, we performed endogenous SIRT6 immunoprecipitation (IP) in WT and CENT hMSCs followed by tandem mass tag (TMT)-labeled [[Mass Spectrometry]] (MS). Strikingly, the most significantly altered SIRT6-interacting partner was [[Vimentin]] (VIM), an intermediate filament protein (Fig. 2C). Endogenous CentSIRT6 protein exhibited weaker interaction with vimentin compared to WT-SIRT6 (Fig. 2D). Moreover, vimentin knockdown by siRNAs increased SIRT6 protein levels in both WT and CENT hMSCs (Fig. 2E), whereas vimentin overexpression reduced SIRT6 levels in CENT hMSCs to those levels in WT hMSCs (Fig. 2F). These results demonstrate that vimentin mediates the increased SIRT6 in CENT hMSCs.

> [!info] IDR-Dependent Mechanism
> Given that the centenarian mutations reside within [[Intrinsically Disordered Region|intrinsically disordered regions (IDRs)]][2,30], which are known to mediate protein–protein interactions[31], we hypothesized that SIRT6-vimentin association is IDR-dependent. [[AlphaFold]] predictions revealed that SIRT6 harbors a C-terminal IDR (amino acids 298–355) and vimentin contains two IDRs at N-terminal (amino acids 1–89) and C-terminal (amino acids 409–422) regions. Computational analysis using FINCHES[33] revealed that the N308K mutation is uniquely responsible for the reduced SIRT6-Vimentin interaction and the consequent increase in SIRT6 protein levels, while A313S primarily enhances mADPr activity.

### Centenarian SIRT6 variants alter enzymatic activities in a cellular context

Despite having higher SIRT6 protein levels, CENT hMSCs showed increased [[Histone|histone]] acetylation at [[Histone H3|H3K9, H3K18, and H3K27]] compared to WT hMSCs (Fig. 2H), confirming the reduced deacetylase activity of CentSIRT6. Additionally, we observed an increased proportion of mADP-ribosylated SIRT6 protein in CENT hMSCs (Fig. 2I), indicating enhanced [[ADP-ribosylation|mono-ADP-ribosyltransferase (mADPr)]] activity of CentSIRT6.

### Centenarian SIRT6 variants moderately alter the transcriptome in young hMSCs

Differentially expressed gene (DEG) analysis demonstrated that replacement of two nucleotides altered the hMSC transcriptome, revealing 52 down-regulated and 72 up-regulated DEGs in CENT versus WT hMSCs. Gene ontology analysis showed that these DEGs were significantly enriched in [[ECM|extracellular matrix (ECM)]]. Notably, the ECM genes _HAS2_ and _LAMA1_, which were downregulated in _SIRT6_-knockout hMSCs and during hMSC senescence, were significantly upregulated in CENT hMSCs. _HAS2_, encoding hyaluronan synthase 2, is an ECM component that has been linked to improved [[Healthspan]][35].

### Centenarian SIRT6 variants delay replicative senescence

At early passages, WT and CENT hMSCs showed similar proliferation and [[Cellular Senescence|senescence-associated β-galactosidase (SA-β-gal)]] activity. However, at late passages, CENT hMSCs exhibited a higher proportion of [[Ki67]]-positive cells and fewer SA-β-gal-positive cells, demonstrating delayed senescence compared to WT hMSCs.

### Centenarian SIRT6 variants confer resistance to progerin-induced senescence

Since SIRT6 maintains chromatin organization and [[DNA Repair]], cellular processes that are disrupted by [[Progerin]][41], we further evaluated the impact of the centenarian _SIRT6_ variants in [[Hutchinson-Gilford Progeria Syndrome]] (HGPS). We generated WT and CENT hMSCs stably expressing [[Progerin|GFP-progerin]]. Colony formation assays revealed enhanced proliferative potential of CENT Progerin-hMSCs. Moreover, centenarian variants strongly ameliorated multiple cellular aging phenotypes, as evidenced by a higher percentage of [[Ki67]]-positive cells, reduced SA-β-gal activity, decreased expression of aging markers [[p16]] and [[p21 CIP1|p21]], reduced expression of the [[SASP|Senescence-Associated Secretory Phenotype]] gene [[IL-6]], and increased levels of [[Lamin B1]].

### Centenarian SIRT6 variants maintain genome stability under progerin-induced stress

Transcriptome analysis identified 312 down-regulated and 143 up-regulated DEGs in CENT versus WT hMSCs under progerin-induced stress. Pathways related to [[Cell Cycle]] regulation and [[Genomic Instability|genome stability]] — including [[DNA Repair|DNA damage repair]] such as double-strand break (DSB) and base excision repair (BER) as well as higher-order structures such as chromosome and [[Telomere Attrition|telomere]] maintenance — were significantly altered by the centenarian variants. The expression of DNA repair genes was markedly decreased in WT hMSCs under progerin stress but largely preserved in CENT hMSCs.

### Centenarian SIRT6 variants suppress progerin-induced TE derepression

[[Progerin]] triggers [[Heterochromatin]] loss[43], leading to the derepression of [[Transposable Elements|transposable elements (TEs)]] such as [[LINE-1]][44] and HERVs[45]. SIRT6 maintains TE silencing, but this fails in senescent cells or aged tissues[46,47]. Upon progerin-induced stress, CENT hMSCs showed better-maintained suppression of TEs, particularly [[LINE-1]] elements, compared to WT hMSCs. We further confirmed reduced LINE1 ORF1p and ORF2p proteins in Progerin-hMSCs carrying centenarian _SIRT6_ variants.

### Centenarian SIRT6 variants-based genetic and pharmacological interventions attenuate molecular defects in progeria fibroblasts

> [!tip] Translational Potential
> [[AAV|Adeno-associated virus (AAV)]]-mediated delivery of CentSIRT6 reduced LINE1 ORF1p and ORF2p protein levels in [[Hutchinson-Gilford Progeria Syndrome|HGPS]] patient-derived [[Fibroblasts|fibroblasts]], with CentSIRT6 exhibiting a more pronounced reduction than WT-SIRT6. Similarly, treatment with [[Fucoidan]]-FV (50–100 µg/mL), a SIRT6 activator that elevates SIRT6 levels and enhances mADPr activity[48,49], successfully reduced LINE1 proteins in progeria fibroblasts.

## Discussion

> [!abstract] Summary of Findings
> This study reveals that centenarian _SIRT6_ variants exert multifaceted effects on SIRT6 biology: (1) a distinct [[Intrinsically Disordered Region|IDR]]-mediated mechanism regulating SIRT6 protein abundance through weakened interaction with [[Vimentin]]; (2) altered catalytic activities (enhanced mADPr, reduced deacetylase); (3) preservation of [[DNA Repair|DNA repair]] gene expression and suppression of [[LINE-1]] derepression under stress; and (4) a framework for translating longevity-associated variants into gerotherapeutic strategies.

Our findings reveal that centenarian _SIRT6_ variants exert multifaceted effects on SIRT6 biology. In addition to previously reported alterations in catalytic activity, we identify a distinct IDR-mediated mechanism regulating SIRT6 protein abundance through weakened interaction with [[Vimentin]]. Vimentin, traditionally recognized as an intermediate filament protein providing structural support, has more recently been implicated in [[Autophagy]][53] and vesicle trafficking[54,55], underscoring its role in [[Proteostasis]]. Notably, vimentin has been reported to undergo liquid–liquid phase separation (LLPS) to form droplets[30], a process that depends on its IDR. Our data support a model in which the N308K substitution selectively reduces SIRT6-vimentin interaction, leading to increased SIRT6 protein levels.

At the cellular level, centenarian _SIRT6_ variants conferred resistance to both replicative and progerin-induced stress in hMSCs. Under progerin-induced perturbation, centenarian variants were associated with preservation of gene expression programs related to genome maintenance and reduced derepression of [[Transposable Elements]], particularly [[LINE-1]] elements. These observations are consistent with established roles for SIRT6 in [[DNA Repair]][56] and transposon silencing[46,47].

> [!important] Translational Implications
> The study highlights three translational avenues: (1) [[AAV]]-mediated delivery of CentSIRT6 as a gene therapy strategy; (2) engineering senescence-resistant [[Mesenchymal Stromal Cells|MSCs]] using naturally occurring centenarian variants (potentially safer than artificial mutations in [[FOXO3a|FOXO3]] used in recent primate studies[57]); and (3) developing SIRT6 activators that enhance mADPr activity (rather than deacetylase activity, which most existing activators target).

## Figures

Figure 1 — Elevated SIRT6 protein levels in hESCs and hESC-derived hMSCs carrying centenarian _SIRT6_ variants.
Figure 2 — Impact of centenarian _SIRT6_ variants on SIRT6 protein function in a cellular context.
Figure 3 — Moderate transcriptomic changes between WT and CENT hMSCs at early passage.
Figure 4 — Centenarian _SIRT6_ variants confer resistance to progerin-induced stress.
Figure 5 — Centenarian _SIRT6_ variants maintain genome stability under progerin-induced stress.
Figure 6 — Treatment with SIRT6 activator Fucoidan-FV downregulates LINE1 in progeria patient cells.

## References

1. Kugel S, Mostoslavsky R (2014) Chromatin and beyond: the multitasking roles for SIRT6. Trends Biochem Sci 39:72–81. https://doi.org/10.1016/j.tibs.2013.12.002
2. Klein MA, Denu JM (2020) Biological and catalytic functions of sirtuin 6 as targets for small-molecule modulators. J Biol Chem 295:11021–11041. https://doi.org/10.1074/jbc.REV120.011438
3. Tasselli L, Zheng W, Chua KF (2017) SIRT6: Novel Mechanisms and Links to Aging and Disease. Trends Endocrinol Metab 28:168–185. https://doi.org/10.1016/j.tem.2016.10.002
4. Pan PW et al (2011) Structure and biochemical functions of SIRT6. J Biol Chem 286:14575–14587. https://doi.org/10.1074/jbc.M111.218990
5. Kanfi Y et al (2012) The sirtuin SIRT6 regulates lifespan in male mice. Nature 483:218–221. https://doi.org/10.1038/nature10815
6. Roichman A et al (2021) Restoration of energy homeostasis by SIRT6 extends healthy lifespan. Nat Commun 12:3208. https://doi.org/10.1038/s41467-021-23545-7
7. Tian X et al (2019) SIRT6 Is Responsible for More Efficient DNA Double-Strand Break Repair in Long-Lived Species. Cell 177, 622–638 e622. https://doi.org/10.1016/j.cell.2019.03.043
8. Sebastiani P, Perls TT (2012) The genetics of extreme longevity: lessons from the New England centenarian study. Front Genet 3:277. https://doi.org/10.3389/fgene.2012.00277
9. Hitt R, Young-Xu Y, Silver M, Perls T (1999) Centenarians: the older you get, the healthier you have been. Lancet 354:652. https://doi.org/10.1016/S0140-6736(99)01987-X
10. Govindaraju D, Atzmon G, Barzilai N (2015) Genetics, lifestyle and longevity: Lessons from centenarians. Appl Transl Genom 4:23–32. https://doi.org/10.1016/j.atg.2015.01.001
11. Suh Y et al (2008) Functionally significant insulin-like growth factor I receptor mutations in centenarians. Proc Natl Acad Sci U S A 105:3438–3442. https://doi.org/10.1073/pnas.0705467105
12. Shen S et al (2020) Whole-genome sequencing of Chinese centenarians reveals important genetic variants in aging. Hum Genomics 14:23. https://doi.org/10.1186/s40246-020-00271-7
13. Raj A, Selvakumar G, Clement J, Church GM, Sivasubramaniam S (2025) Genetic signatures of exceptional longevity. Hum Genomics 19:115. https://doi.org/10.1186/s40246-025-00772-3
14. Garagnani P et al (2021) Whole-genome sequencing analysis of semi-supercentenarians. Elife 10. https://doi.org/10.7554/eLife.57849
15. Han J et al (2013) Discovery of novel non-synonymous SNP variants in 988 candidate genes from 6 centenarians. Mech Ageing Dev 134:478–485. https://doi.org/10.1016/j.mad.2013.01.005
16. Nygaard HB et al (2019) Whole-Exome Sequencing of an Exceptional Longevity Cohort. J Gerontol A Biol Sci Med Sci 74:1386–1390. https://doi.org/10.1093/gerona/gly098
17. Lin JR et al (2021) Rare genetic coding variants associated with human longevity. Nat Aging 1:783–794. https://doi.org/10.1038/s43587-021-00108-5
18. Ali A et al (2024) Identification of functional rare coding variants in IGF-1 gene in humans with exceptional longevity. bioRxiv. https://doi.org/10.1101/2024.10.11.617885
19. Qiu Y, Cattaneo M, Maciag A, Puca AA, Madeddu P (2025) A longevity-associated variant of the human BPIFB4 gene prevents diastolic dysfunction in progeria mice. Signal Transduct Target Ther 10:314. https://doi.org/10.1038/s41392-025-02416-3
20. Ryu S et al (2021) Genetic signature of human longevity in PKC and NF-kappaB signaling. Aging Cell 20:e13362. https://doi.org/10.1111/acel.13362
21. Simon M et al (2022) A rare human centenarian variant of SIRT6 enhances genome stability and interaction with Lamin A. EMBO J 41:e110393. https://doi.org/10.15252/embj.2021110393
22. Fehrer C, Lepperdinger G (2005) Mesenchymal stem cell aging. Exp Gerontol 40:926–930.
23. Al-Azab M, Safi M, Idiiatullina E, Al-Shaebi F, Zaky MY (2022) Aging of mesenchymal stem cell. Cell Mol Biol Lett 27:69.
24. Zhang W et al (2015) Aging stem cells. A Werner syndrome stem cell model unveils heterochromatin alterations as a driver of human aging. Science 348:1160–1163.
25. Jing Y et al (2023) Genome-wide CRISPR activation screening in senescent cells reveals SOX5 as a driver of rejuvenation. Cell Stem Cell 30, 1452–1471.
26. Wang W et al (2021) A genome-wide CRISPR-based screen identifies KAT7 as a driver of cellular senescence. Sci Transl Med 13.
27. Thirumurthi U et al (2014) MDM2-mediated degradation of SIRT6 phosphorylated by AKT1 promotes tumorigenesis. Sci Signal 7:ra71.
28. Ronnebaum SM, Wu Y, McDonough H, Patterson C (2013) The ubiquitin ligase CHIP prevents SirT6 degradation. Mol Cell Biol 33:4461–4472.
29. Lin Z et al (2013) USP10 antagonizes c-Myc transcriptional activation through SIRT6 stabilization. Cell Rep 5:1639–1649.
30. Basu A et al (2025) Vimentin undergoes liquid-liquid phase separation to form droplets which wet and stabilize actin fibers. Proc Natl Acad Sci U S A 122:e2418624122.
31. Holehouse AS, Kragelund BB (2024) The molecular basis for cellular function of intrinsically disordered protein regions. Nat Rev Mol Cell Biol 25:187–211.
32. Jumper J et al (2021) Highly accurate protein structure prediction with AlphaFold. Nature 596:583–589.
33. Ginell GM et al (2025) Sequence-based prediction of intermolecular interactions driven by disordered regions. Science 388:eadq8381.
34. Pan H et al (2016) SIRT6 safeguards human mesenchymal stem cells from oxidative stress by coactivating NRF2. Cell Res 26:190–205.
35. Zhang Z et al (2023) Increased hyaluronan by naked mole-rat Has2 improves healthspan in mice. Nature 621:196–205.
36. Sebastian C et al (2012) The histone deacetylase SIRT6 is a tumor suppressor that controls cancer metabolism. Cell 151:1185–1199.
37. Kim HS et al (2010) Hepatic-specific disruption of SIRT6 in mice results in fatty liver formation. Cell Metab 12:224–236.
38. Iachettini S et al (2018) Pharmacological activation of SIRT6 triggers lethal autophagy in human cancer cells. Cell Death Dis 9:996.
39. Shao J et al (2016) Autophagy induction by SIRT6 is involved in oxidative stress-induced neuronal damage. Protein Cell 7:281–290.
40. Kawahara TL et al (2011) Dynamic chromatin localization of Sirt6 shapes stress- and aging-related transcriptional networks. PLoS Genet 7:e1002153.
41. Kubben N, Misteli T (2017) Shared molecular and cellular mechanisms of premature ageing. Nat Rev Mol Cell Biol 18:595–609.
42. Kubben N et al (2016) Repression of the Antioxidant NRF2 Pathway in Premature Aging. Cell 165:1361–1374.
43. Chojnowski A et al (2020) Heterochromatin loss as a determinant of progerin-induced DNA damage in HGPS. Aging Cell 19:e13108.
44. Della Valle F et al (2022) LINE-1 RNA causes heterochromatin erosion and is a target for amelioration of senescent phenotypes in progeroid syndromes. Sci Transl Med 14:eabl6057.
45. Liu X et al (2023) Resurrection of endogenous retroviruses during aging reinforces senescence. Cell 186, 287–304.
46. Van Meter M et al (2014) SIRT6 represses LINE1 retrotransposons by ribosylating KAP1 but this repression fails with stress and age. Nat Commun 5:5011.
47. Simon M et al (2019) LINE1 Derepression in Aged Wild-Type and SIRT6-Deficient Mice Drives Inflammation. Cell Metab 29, 871–885.
48. Robbins P et al (2025) Fucoidans are senotherapeutics that enhance SIRT6-dependent DNA repair. Res Sq. https://doi.org/10.21203/rs.3.rs-6613032/v1
49. Biashad SA et al (2025) SIRT6 activator fucoidan extends healthspan and lifespan in aged wild-type mice. bioRxiv, 2025.2003.2024.645072. https://doi.org/10.1101/2025.03.24.645072
50. Zhang ZD et al (2020) Genetics of extreme human longevity to guide drug discovery for healthy ageing. Nat Metab 2:663–672.
51. Gallagher MD, Chen-Plotkin AS (2018) The Post-GWAS Era: From Association to Function. Am J Hum Genet 102:717–730.
52. Qi T, Song L, Guo Y, Chen C, Yang J (2024) From genetic associations to genes: methods, applications, and challenges. Trends Genet 40:642–667.
53. Biskou O et al (2019) The type III intermediate filament vimentin regulates organelle distribution and modulates autophagy. PLoS ONE 14:e0209665.
54. Hirata Y et al (2011) Vimentin binds IRAP and is involved in GLUT4 vesicle trafficking. Biochem Biophys Res Commun 405:96–101.
55. Jiu Y (2018) Vimentin intermediate filaments function as a physical barrier during intracellular trafficking of caveolin-1. Biochem Biophys Res Commun 507:161–167.
56. Mao Z et al (2011) SIRT6 promotes DNA repair under stress by activating PARP1. Science 332:1443–1446.
57. Lei J et al (2025) Senescence-resistant human mesenchymal progenitor cells counter aging in primates. Cell 188, 5039–5061.
58. Yang J et al (2017) Genetic enhancement in cultured human adult stem cells conferred by a single nucleotide recoding. Cell Res 27:1178–1181.
59. Patsch C et al (2015) Generation of vascular endothelial and smooth muscle cells from human pluripotent stem cells. Nat Cell Biol 17:994–1003.

