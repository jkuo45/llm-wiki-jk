---
title: "Cellular senescence and SASP in tumor progression and therapeutic opportunities"
source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11365203/"
author:
  - "Zening Dong"
  - "Yahan Luo"
  - "Zhangchen Yuan"
  - "Yu Tian"
  - "Tianqiang Jin"
  - "Feng Xu"
published: 2024-08-31
created: 2026-07-11
updated: 2026-07-13
description: "Comprehensive review of cellular senescence and SASP in tumor progression, covering types of senescence, SASP components reshaping the TME, the double-edged role of SASP in cancer, and therapeutic strategies including senolytics and senomorphics."
tags:
  - "document"
  - "senescence"
  - "sasp"
  - "cancer"
  - "tumor-microenvironment"
  - "senolytics"
  - "senomorphics"
---

## Abstract

Cellular senescence (CS), a permanent and irreversible arrest of the cell cycle and proliferation leading to the degeneration of cellular structure and function, has been implicated in various key physiological and pathological processes, particularly in cancer. Initially, CS was recognized as a barrier to tumorigenesis, serving as an intrinsic defense mechanism to protect cells from malignant transformation. However, increasing evidence suggests that senescent cells can promote tumor progression to overt malignancy, primarily through a set of factors known as [[SASP]], including chemokines, growth factors, cytokines, and stromal metalloproteinases. These factors significantly reshape the [[Tumor Microenvironment]], enabling tumors to evade immune destruction. Interestingly, some studies have also suggested that SASPs may impede tumor development by enhancing [[Senescence Surveillance]]. These opposing roles highlight the complexity and heterogeneity of CS and SASPs in diverse cancers. Consequently, there has been growing interest in pharmacological interventions targeting CS or SASPs in cancer therapy, such as [[Senolytic|senolytics]] and [[Senomorphic|senomorphics]], to either promote the clearance of [[Senescent Cells]] or mitigate the harmful effects of SASPs.

> [!info] Key Insight
> SASP exhibits a "double-edged sword" role in cancer: it can both enforce cell cycle arrest and recruit immune cells to eliminate damaged cells (antitumor), while simultaneously creating an immunosuppressive environment that supports tumor progression and recurrence (protumor).

**Keywords:** Cellular senescence, SASP, Tumor, Tumor microenvironment, Therapy

## Introduction

Cellular senescence was initially introduced in 1961 by Hayflick. In 1965, it was further described as a manifestation of the finite replicative capacity of diploid cell lines in vivo, characterized by the Hayflick limit, which represents the maximum number of cell divisions achievable before cellular growth arrest. This phenomenon was subsequently defined as [[Senescence|replicative senescence]], which was considered irreversible and permanent due to the cell's inability to physiologically reverse this cycle arrest.

Recent studies have shown that CS can result from exposure to various internal or external stressors, such as replication stress, telomere damage, metabolic disorders, and carcinogenic factors, leading to different types of senescence. In addition to arrested growth, another key feature of CS is [[SASP]], which includes a range of proinflammatory and proteolytic factors. SASP is generally diverse and dynamic, varying according to the type of senescent cells and the cellular environment.

> [!info] Source: Dong et al. 2024
> SASP can either promote or inhibit tumor progression by remodeling the TME, while the TME in turn affects SASP production. This intricate interaction significantly impacts tumor development.

## Types of CS

### Replicative Senescence

Replicative senescence (RS) was first proposed by Hayflick in 1961 and later defined as cell cycle arrest caused by continuous cell culture. A hallmark of RS is the presence of short telomeres, which result from repeated cycles of DNA replication.

Mechanistically, when telomeres reach a critical length, they are recognized as DNA double-strand breaks (DSB), which activate a [[DNA Damage|DNA damage response]] (DDR). The earliest checkpoint kinases, [[ATM]] and [[ATR]], are then activated to phosphorylate various proteins, including [[CHK2]]. CHK2 transmits DDR signals by phosphorylating the tumor suppressor protein [[p53]], which is involved in cell cycle arrest, apoptosis, and DNA repair. Phosphorylated p53 subsequently activates the downstream protein [[p21 CIP1|p21]]. p21 inhibits the phosphorylation of [[Rb]] by restraining the function of [[CDK2]]. Finally, the transcription of [[E2F1|E2F]], an essential protein in the S-phase of the cell cycle, is halted by the downregulation of RB phosphorylation, causing the cell cycle to arrest at the G1 stage and enter senescence.

> [!info] Source: Dong et al. 2024
> Cancer cells can also induce p21 through retroviral-mediated CHK2 activation without the involvement of p53.

In addition to the p53/p21 mechanism associated with cell cycle arrest, the [[p16]]/[[Rb]] pathway can also induce CS. p16, also known as cyclin-dependent kinase inhibitor 2A ([[CDKN2A]]), binds to the kinases CDK4 and CDK6, forming complexes that block RB phosphorylation, resulting in senescence.

### Oncogene-Induced Senescence (OIS)

[[Oncogene-Induced Senescence]] is primarily triggered by the expression of certain oncogenes. It was initially observed as a result of the heterotopic expression of HrasV12, an oncogenic form of Ras, in human lung fibroblasts. The mechanisms underlying OIS have since been elucidated: oncogene activation induces the production of [[Reactive Oxygen Species|ROS]], which leads to DSBs and DDR, thereby initiating CS. The TP53/CDKN1A and p16/RB pathways are also involved in OIS. TP53 acts to inhibit cancer cell growth, and its loss can lead to increased invasiveness. Meanwhile, RB plays an important role in maintaining OIS by inhibiting the expression of the DNA transcription factor E2F.

> [!info] Source: Dong et al. 2024
> OIS arises from DDR activation driven by oncogene-induced DNA hyper-replication. Oncogene expression alone does not trigger DDR in the absence of DNA replication.

OIS is also associated with signs of DNA replication stress, which can cause DSBs and genomic instability in human precancerous lesions. Bartkova et al. demonstrated that CS acts as a barrier to tumor formation in precancerous lesions by activating DNA damage checkpoints in response to DNA replication stress.

### Therapy-Induced Senescence (TIS)

[[Therapy-Induced Senescence]] occurs when senescence is induced by various types of chemotherapy or radiation therapy, which cause DSBs and activate DDR. Chemotherapeutic agents such as [[Cisplatin]], [[Doxorubicin]], bleomycin, and cyclophosphamide are more likely to induce TIS than radiation therapy. The mechanisms by which different chemotherapeutics induce TIS vary. For instance, busulfan induces CS through the p38 pathway, while cisplatin primarily triggers senescence via the p53 pathway. TIS is an effective strategy for suppressing cancer growth and has been shown to benefit cancer patients.

### SARS-CoV-2-Induced Senescence

Recent studies have revealed that [[SARS-CoV-2]] is closely linked to CS. SARS-CoV-2 infection can induce senescence in dopaminergic neurons. SARS-CoV-2 infection triggers epithelial cell senescence and increases the levels of SASPs. Additionally, SARS-CoV-2 infection can cause DNA damage and disrupt the DDR due to the depletion of CHK1. The SARS-CoV-2 N protein can bind to damage-induced long non-coding RNAs (lncRNAs), impairing the recruitment of 53BP1 and thereby hindering DNA repair.

### Rare Types of Senescence

Rare forms of senescence that do not depend on DNA damage include sodium butyrate- and nuclear barrier-induced senescence, as well as senescence caused by mitochondrial dysfunction, aberrant epigenetic modifications, protein homeostasis disorders, and paracrine signaling. Although these types of senescence are uncommon, further exploration of these different forms and their underlying mechanisms will provide a deeper understanding of age-related diseases and may ultimately benefit anti-senescence strategies for cancer treatment.

## Senescence-Associated Secretory Phenotype (SASP)

[[SASP]] is a key pathological feature of CS. Despite the arrest in cell cycle and proliferation, senescent cells maintain an active metabolic state and secrete a wide range of factors that influence both themselves and their surrounding environment. The concept of SASP was first introduced in 2008 as a phenotype in which genotoxic stress-induced aging in human cells results in the secretion of substances associated with inflammation and malignancy.

> [!info] Source: Dong et al. 2024
> SASP is a complex secretory process composed of hundreds of different proteins and nonprotein signaling molecules, including pro-inflammatory factors, proteases, and growth factors. Its exact composition remains unknown, and components and levels vary significantly depending on the stimuli, cell types, and duration of senescence.

### Interleukin-1 (IL-1)

The IL-1 pathway is essential for the expression of most SASP factors, although it is not necessary for the induction of senescence itself. [[IL-1α]] can activate SASP through [[IL-1 Receptor|IL-1R]] signaling, while [[IL-1β]], which shares the same signaling signaling pathway as IL-1α, is also crucial for SASP expression. Both IL-1α and IL-1β can independently affect SASP without a hierarchical relationship between them.

> [!info] Source: Dong et al. 2024
> IL-1β can induce growth arrest and senescence in proliferating hair cell astrocytoma cells, as well as upregulate SASP factors. The release of IL-1α depends on caspase-5 and caspase-11. DOT1L expression is necessary for SASP gene expression, possibly through the upregulation of H3K79me2/3 at the IL-1A locus.

### Interleukin-6 (IL-6)

[[IL-6]] plays a dual and context-dependent role in cancer. Atorvastatin can induce senescence in hepatocellular carcinoma (HCC) cells by inhibiting the IL-6/[[STAT3]] pathway. High levels of IL-6 are closely associated with HCC. Interestingly, IL-6 deficiency can lead to the deterioration of liver cancer in mice, which is related to severe damage and senescence of SASP. The contradictory effects of IL-6 may be related to the specific environment; for example, in chronic liver injury, IL-6 can inhibit liver injury, fibrosis, and the occurrence of liver cancer, while inhibiting IL-6 in acute liver injury can reduce the risk of liver cancer.

### Galectin-9

Tarallo et al. first reported that senescent cells secrete [[Galectin-9]] in melanoma. Previous studies have shown that Galectin-9 has immunosuppressive effects in the TME, promoting the apoptosis of T cells and monocytes, increasing the regulation of T cells, helper T cells, and M2 macrophages, and impairing anti-tumor immune responses. On the other hand, some reports suggest that Galectin-9 can inhibit melanoma metastasis.

### Extracellular Vesicles (EVs)

Lehmann et al. were among the first to report an increase in senescence-associated exosome release from [[Extracellular Vesicles|EVs]]. Suppression of small extracellular vesicle release induces the accumulation of DNA damage and apoptosis-like death in senescent cells. EVs have recently emerged as crucial intermediaries within SASP and have been shown to play various roles in senescence. Similar to the more conventional "soluble" SASP, this vesicular secretome also induces a diverse array of effects that can be beneficial or detrimental depending on the specific cellular environment.

> [!info] Source: Dong et al. 2024
> Since numerous EVs are found in all bodily fluids (blood, saliva, urine), they are considered valuable targets for liquid biopsy. EV release might be a potential target for the treatment or prevention of age-related diseases.

## CS and SASP on the Tumor Microenvironment

The impact of SASP on the [[Tumor Microenvironment]] varies significantly depending on the type of cells undergoing senescence and the specific triggers of senescence. For example, SASP can promote the neuroendocrine transdifferentiation of breast cancer cells through the [[NF-kappaB]] pathway. In melanoma, treatment with SASP-associated cytokines supports the immune system's self-sustained surveillance of senescent cells. Furthermore, senescent cells can enhance melanoma metastasis by increasing the production of soluble [[E-cadherin]].

In HCC, hepatic SASP facilitates HCC progression by polarizing macrophages, a process closely linked to Bcl3 expression in hepatocytes. SASP components such as Coactosin-like protein 1, Alpha-enolase, and Peroxiredoxin 2 contribute to the proliferation and behavioral changes of HCC cells. Additionally, acute SASP derived from mesenchymal stromal cells induce senescence in immortal prostate cells, but not in prostate cancer cells, suggesting that SASPs from acutely senescent cells may be more effective at preventing cancer initiation within the TME rather than eradicating established cancer cells.

Senescent fibroblasts secrete growth differentiation factor 15 ([[GDF15]]), a component of the TME that not only promotes the formation of colon cancer but also induces the proliferation, migration, and invasion of colon cancer cells. SASP also has the capacity to recruit various cell types to the tumor periphery. For example, [[CXCR2]] can attract and enhance the protumor properties of tumor-associated macrophages, facilitating [[Epithelial-to-mesenchymal transition|EMT]]. The knockout of BTG1 has been shown to induce senescence and create a microenvironment conducive to angiogenesis and tumor growth, thereby promoting tumor metastasis. Moreover, senescent cells interact with platelets through SASP, increasing platelet aggregation and promoting platelet activation.

> [!important] Source: Dong et al. 2024
> SASP factor IL-6, secreted by senescent tumor cells, elevates adenosine levels in the TME, which promotes [[CD73]] expression in macrophages via the JAK/STAT3 signaling pathway, leading to further adenosine accumulation. Even after clearance of senescent cells, T cell infiltration in the TME remains impaired. Targeted inhibition of CD73 not only suppresses tumors but also enhances the efficacy of anti-[[PD-L1]] monoclonal antibody immunotherapy.

## Double Roles of SASP in Tumors

The SASP plays a dual role in tumor biology due to its heterogeneity. SASP can act as both a tumor suppressor and a promoter of tumor initiation and progression.

### Antitumor Effects of SASP

#### Preserving Cell Cycle Arrest

One of the critical antitumor mechanisms of the SASP is its role in maintaining cell cycle arrest. For example, RNAi inhibition of [[PAI-1]], a p53 target gene, can induce fibroblasts from primary embryonic mice, as well as primary human BJ fibroblasts, to exit from replicative senescence. Conversely, p53 knockout and PAI-1 overexpression induce CS. SASP factors such as IL-6 and CXCR2 maintain cell cycle arrest via p53, thereby inhibiting tumor cell growth and proliferation.

> [!info] Source: Dong et al. 2024
> Although the precise mechanism by which SASP maintains cell cycle arrest is not fully understood, it is generally agreed that SASP does not directly cause cell cycle arrest but makes the arrest irreversible once the cell enters this state. Rapamycin has been found to inhibit SASP factor expression and reduce SASP-induced inflammation without reversing CS, suggesting that targeting SASP does not disrupt age-related cell cycle arrest.

#### Immunosurveillance

Although the full mechanisms by which SASP affects immune cells are not completely understood, SASP is theoretically capable of significantly impacting immune responses. Senescent cells can generate a SASP that regulates the microenvironment of surrounding tissue, particularly affecting nearby normal endothelial cells, which in turn mediate NF-κB factors in the SASP. These factors activate CD4+ T cells via STAT1 and inducible costimulator/its ligand signaling, recruiting neighboring T cells and driving immune-mediated senescence surveillance and clearance of senescent cells.

> [!info] Source: Dong et al. 2024
> In mouse liver cancer models, p53-induced CS suppresses macrophages, neutrophils, and NK cells, leading to the clearance of tumor cells through phagocytosis and NK cell activation. Tumor regression is not observed when p53 is activated in mice lacking both B and T lymphocytes, suggesting that adaptive immunity may not be needed for the clearance of senescent tumor cells within the SASP-recruited immune microenvironment.

### Pro-Tumor Effects of SASP

#### Promotion of Tumor Cell Proliferation

The initial protumor mechanism of SASP is its role in promoting tumor cell proliferation. Senescent human fibroblasts can stimulate hyperproliferation and progression of preneoplastic epithelial cells, accelerating tumorigenesis in neoplastic epithelial cells. Compared to "young" mesenchymal stem cells (MSCs), senescent human umbilical cord MSCs significantly accelerate the proliferation and migration of breast cancer cells via IL-6/STAT-3-dependent signaling. Senescent breast luminal cells secrete SASP factors, including IL-6 and IL-8, which activate stromal fibroblasts through the STAT3 pathway, leading to tumor development in a paracrine manner.

> [!info] Source: Dong et al. 2024
> Small extracellular vesicles (sEVs) from senescent cells were identified as crucial mediators of protumor functions, with senescent cells increasing EphA2 in sEVs, thereby promoting cancer cell proliferation through activation of the MAPK pathway. The extracellular matrix (ECM) secreted by SASP enhances tumor cell proliferation and provides a conducive environment for tumor progression.

#### Induction of Epithelial-Mesenchymal Transition (EMT)

Increasing evidence indicates that SASP can induce [[Epithelial-to-mesenchymal transition|EMT]], thereby favoring tumor progression. In breast cancer, senescent fibroblasts secrete IL-6 and IL-8, key components of SASP. These cytokines increase vimentin expression, decrease E-cadherin levels, and reduce cytokeratin in noninvasive breast cancer cells. Senescent fibroblasts can also inhibit the differentiation of epithelial cells and reduce the expression of differentiation markers by secreting [[Matrix Metalloproteinase|MMP-3]].

#### Induction of Stemness in Tumor Cells

Genotoxic-induced SASP was found to endow a subset of irradiated or doxorubicin-treated multiple myeloma cells with a stemness-like, highly tumorigenic state. CS induced by genotoxic stress produces SASP, leading to the release of IP-10 and RANTES in the TME, driving the formation of cancer stem cells (CSCs). SASP is known to promote tumor cell stemness in both tumor and nontumor environments. Keratinocytes exposed to SASP upregulate stem cell markers, and injury-induced senescence enables in vivo reprogramming in skeletal muscle, suggesting a paracrine effect of senescence on cellular plasticity.

#### Immunosuppression and Anti-Inflammatory Effects

SASP can recruit suppressor immune cells to prevent immune clearance of tumor cells while also inducing immune cell-mediated inflammatory responses that further promote tumor progression. Genetic knockout of Sin3B in the mouse genome inhibits pancreatic cancer progression by preventing CS induced by KRAS and reducing IL-1α in the SASP. Some SASP factors have been shown to both inhibit tumor initiation and promote tumor growth, depending on the tumor cell status. Chemokines secreted by senescent hepatic cells can inhibit HCC at an early stage but accelerate the growth of fully developed HCC cells, likely due to plasticity in myeloid CCR2 cells.

> [!info] Source: Dong et al. 2024
> In squamous cell carcinoma of the head and neck, early CS and SASP generation—where chemokine receptor ligands for CXCR2 play an important role—may lead to radioresistance. Through these mechanisms, SASP creates a TME that not only fosters tumor progression but also shields tumors from immune system attacks and external drug elimination once fully developed.

## Therapy Targeting CS and SASP in Tumors

Although CS was once considered an irreversible state of cell cycle arrest, recent evidence suggests that senescent cells can occasionally escape and re-enter the cell cycle under certain conditions, potentially contributing to tumor recurrence. Oncogene-induced senescent cells can occasionally bypass the barrier of irreversible cell cycle arrest and resume proliferation. The loss of the H3K9me3 marker can enable cells to exit the senescent state and re-enter the cell cycle.

> [!important] Source: Dong et al. 2024
> Senescent cells possess unique defenses against apoptotic stimuli, known as senescent cell antiapoptotic pathways ([[Senescent cell anti-apoptotic pathways|SCAP]]), which include the BCL-2/BCL-XL, PI3K/AKT, p53/p21/PAI-1&2, HIF-1α, and tyrosine kinase signaling pathways. The development of SCAP-targeting drugs may effectively eliminate senescent cells without harming normal cells.

### Senolytics

[[Senolytic|Senolytics]] are drugs that specifically target and kill senescent cells. Various senolytic drugs have been developed, including first-generation senolytics like dasatinib and quercetin (D+Q), BCL-2 family inhibitors (such as ABT-263/navitoclax and ABT-737), and cardiac glycosides like ouabain and digitoxin.

> [!info] Source: Dong et al. 2024
> The plant-derived compound piperlongumine (PL) selectively kills senescent cells by increasing ROS levels and inhibiting the PI3K/AKT/mTOR pathway. PL synergizes with ABT-263 to enhance its senolytic effects. A chimeric antigen receptor (CAR)-T cell targeting uPAR has been developed for the treatment of liver cancer and hepatic fibrosis. uPAR is less expressed in vital tissues, making these CAR-T cells more disease-specific and safer.

The BET family protein degrader (BETd) ARV825 exhibits strong senolytic activity in vivo by reducing BRD4 levels, negatively regulating XRCC4 expression in senescent cells, exacerbating DSBs, and positively regulating autophagy gene expression. This results in the apoptosis of senescent cells by blocking non-homologous end joining repair.

> [!tip] Source: Dong et al. 2024
> Current thinking suggests that senolytics are best administered intermittently rather than continuously, as it takes time for senescent cells to form and generate SASPs. However, whether this approach might have detrimental effects on the organism remains to be explored. Further preclinical animal studies are needed to evaluate the potential adverse effects of intermittent drug administration.

More targeted drugs have been developed using antibody-drug conjugates (ADCs). B2M, a membrane protein marker on senescent cells, can be used to deliver toxic drugs via ADC. Apolipoprotein D (Apo D) has been used to develop ADC drugs that specifically kill senescent human dermal fibroblasts when combined with pyrrolobenzodiazepine. Additionally, galacto-oligosaccharide nanoparticle delivery systems release encapsulated senolytics upon digestion by elevated SA-β-gal activity in senescent cells. A galactose-modified doxorubicin prodrug has been designed to target senescent cells with high SA-β-gal activity, providing a single-molecule approach for senescence-targeted antitumor therapies.

### Senomorphics

[[Senomorphic|Senomorphics]] are drugs that modify the phenotype of senescent cells, restoring them to a more youthful state without inducing apoptosis. They achieve this by interfering with the inflammatory response of senescent cells and disrupting signaling pathways related to senescence and SASP expression. Compared to senolytics, senomorphics may present fewer side effects since they do not directly kill senescent cells but instead inhibit the development of senescence.

Senomorphics primarily target signaling pathways associated with SASP expression, such as NF-κB, JAK/STAT, C/EBPβ, and GATA4, offering promising targets for drug development. Another strategy involves targeting specific components of the SASP using antibodies, such as those against IL-6/8. However, this approach is limited by the heterogeneity of SASP expression across different stages and types of senescent cells, making precise targeting challenging.

> [!warning] Source: Dong et al. 2024
> Most senomorphic studies have concentrated on a limited range of common SASP factors (IL-6, IL-8). Many senomorphics may inadvertently increase the secretion of harmful substances. Future studies must explore the effects of senomorphics on a broader range of SASP components, including ECM composition, microvesicles, and other elements of the TME.

## Future Perspectives and Conclusion

CS is a crucial process in growth, development, and cancer. Although significant progress has been made in understanding the mechanisms of CS and SASP, further studies are essential due to the heterogeneity of CS and SASP, which vary by cell type and stage. Additionally, the role of CS and SASP in vivo, particularly within the TME, requires more evidence.

Despite the increasing number of studies on senescence characteristics and SASP, numerous challenges remain. Key issues include how to identify CS more simply and specifically, and how to determine the status of different senescent cells at various time points. Given that CS is dynamic in both space and time, early and late factors that activate and sustain CS may differ.

> [!info] Source: Dong et al. 2024
> While "one-two punch" strategies hold promise for enhancing cancer therapies, several critical questions persist: determining the optimal timing for administering senolytics during anticancer regimens, identifying the best sequence of administration, and evaluating whether sequential treatment (initiating senescence followed by senolytics) offers the greatest benefits.

A better understanding of the mechanisms underlying CS and SASP could lead to more effective cancer prevention and treatment strategies. In the case of senolytics, attention must be given to their long-term adverse effects, as the elimination of senescent cells could increase the body's burden and trigger dysfunction. For senomorphics, it is important to consider their broader therapeutic impacts.

## References

1. Hayflick L, Moorhead PS. The serial cultivation of human diploid cell strains. Exp Cell Res. 1961;25:585–621.
2. Hayflick L. THE LIMITED IN VITRO LIFETIME OF HUMAN DIPLOID CELL STRAINS. Exp Cell Res. 1965;37:614–36.
3. Campisi J. Aging, cellular senescence, and cancer. Annu Rev Physiol. 2013;75:685–705.
4. Campisi J, d'Adda di Fagagna F. Cellular senescence: when bad things happen to good cells. Nat Rev Mol Cell Biol. 2007;8(9):729–40.
5. Coppé JP, et al. Senescence-associated secretory phenotypes reveal cell-nonautonomous functions of oncogenic RAS and the p53 tumor suppressor. PLoS Biol. 2008;6(12):2853–68.
6. Nagao H, et al. Unique ligand and kinase-independent roles of the insulin receptor in regulation of cell cycle, senescence and apoptosis. Nat Commun. 2023;14(1):57.
7. De Cecco M, et al. L1 drives IFN in senescent cells and promotes age-associated inflammation. Nature. 2019;566(7742):73–8.
8. Abbas T, Dutta A. p21 in cancer: intricate networks and multiple activities. Nat Rev Cancer. 2009;9(6):400–14.
9. Zhu W, Abbas T, Dutta A. DNA replication and genomic instability. Adv Exp Med Biol. 2005;570:249–79.
10. Aliouat-Denis CM, et al. p53-independent regulation of p21Waf1/Cip1 expression and senescence by Chk2. Mol Cancer Res. 2005;3(11):627–34.
11. Alcorta DA, et al. Involvement of the cyclin-dependent kinase inhibitor p16 (INK4a) in replicative senescence of normal human fibroblasts. Proc Natl Acad Sci U S A. 1996;93(24):13742–7.
12. Kandhaya-Pillai R, et al. Key elements of cellular senescence involve transcriptional repression of mitotic and DNA repair genes through the p53–p16/RB-E2F-DREAM complex. Aging (Albany NY). 2023;15(10):4012–34.
13. Xu JX, et al. A novel role for YPEL2 in mediating endothelial cellular senescence via the p53/p21 pathway. Mech Ageing Dev. 2023;211:111803.
14. Rattanavirotkul N, Kirschner K, Chandra T. Induction and transmission of oncogene-induced senescence. Cell Mol Life Sci. 2021;78(3):843–52.
15. Vickridge E, et al. The DNA repair function of BCL11A suppresses senescence and promotes continued proliferation of triple-negative breast cancer cells. NAR Cancer. 2022;4(4):zcac028.
16. Xue W, et al. Senescence and tumour clearance is triggered by p53 restoration in murine liver carcinomas. Nature. 2007;445(7128):656–60.
17. Khalil RM, Diab-Assaf JM. Emerging Therapeutic Approaches to Target the Dark Side of Senescent Cells. Cells. 2023;12(6):915.
18. Bartkova J, et al. Oncogene-induced senescence is part of the tumorigenesis barrier imposed by DNA damage checkpoints. Nature. 2006;444(7119):633–7.
19. Halazonetis TD, Gorgoulis VG, Bartek J. An oncogene-induced DNA damage model for cancer development. Science. 2008;319(5868):1352–5.
20. Di Micco R, et al. Oncogene-induced senescence is a DNA damage response triggered by DNA hyper-replication. Nature. 2006;444(7119):638–42.
21. Prasanna PG, et al. Therapy-Induced Senescence: Opportunities to Improve Anticancer Therapy. J Natl Cancer Inst. 2021;113(10):1285–98.
22. Demaria M, et al. Cellular Senescence Promotes Adverse Effects of Chemotherapy and Cancer Relapse. Cancer Discov. 2017;7(2):165–76.
23. Murray D, Mirzayans R. Cellular Responses to Platinum-Based Anticancer Drugs and UVC: Role of p53 and Implications for Cancer Therapy. Int J Mol Sci. 2020;21(16):5766.
24. Schmitt CA, et al. A senescence program controlled by p53 and p16INK4a contributes to the outcome of cancer therapy. Cell. 2002;109(3):335–46.
25. V'Kovski P, et al. Coronavirus biology and replication: implications for SARS-CoV-2. Nat Rev Microbiol. 2021;19(3):155–70.
26. Yang L, et al. SARS-CoV-2 infection causes dopaminergic neuron senescence. Cell Stem Cell. 2024;31(2):196–211.e6.
27. Meyer K, et al. SARS-CoV-2 Spike Protein Induces Paracrine Senescence and Leukocyte Adhesion in Endothelial Cells. J Virol. 2021;95(17):e0079421.
28. Gioia U, et al. SARS-CoV-2 infection induces DNA damage, through CHK1 degradation and impaired 53BP1 recruitment, and cellular senescence. Nat Cell Biol. 2023;25(4):550–64.
29. Park JH, et al. Disruption of nucleocytoplasmic trafficking as a cellular senescence driver. Exp Mol Med. 2021;53(6):1092–108.
30. McDermott MSJ, et al. HER2-Targeted Tyrosine Kinase Inhibitors Cause Therapy-Induced-Senescence in Breast Cancer Cells. Cancers (Basel). 2019;11(2):197.
31. Mirzakhani K, et al. The androgen receptor-lncRNASAT1-AKT-p15 axis mediates androgen-induced cellular senescence in prostate cancer cells. Oncogene. 2022;41(7):943–59.
32. Halkoum R, et al. Glyoxal Induces Senescence in Human Keratinocytes through Oxidative Stress and Activation of the Protein Kinase B/FOXO3a/p27(KIP1) Pathway. J Invest Dermatol. 2022;142(8):2068–2078.e7.
33. Ogrodnik M. Cellular aging beyond cellular senescence: Markers of senescence prior to cell cycle arrest in vitro and in vivo. Aging Cell. 2021;20(4):e13338.
34. Wallis R, et al. Senescence-associated morphological profiles (SAMPs). Aging (Albany NY). 2022;14(10):4220–46.
35. González-Gualda E, et al. A guide to assessing cellular senescence in vitro and in vivo. Febs j. 2021;288(1):56–80.

## Documents

- [[Cellular senescence and SASP in tumor progression and therapeutic opportunities]]

## Connections

- [[Senescence]] — Core topic: types, mechanisms, and biomarkers of CS
- [[SASP]] — Central secretory phenotype mediating CS effects on TME
- [[Tumor Microenvironment]] — SASP reshapes TME; TME influences SASP production
- [[Senolytic]] — Drugs targeting SCAP to eliminate senescent cells
- [[Senomorphic]] — Drugs modifying senescent cell phenotype without killing them
- [[Oncogene-Induced Senescence]] — Triggered by oncogene expression via ROS/DDR
- [[Therapy-Induced Senescence]] — Induced by chemotherapy/radiation via DSBs
- [[Senescence Surveillance]] — SASP-mediated immune recruitment for senescent cell clearance
- [[Paracrine Senescence]] — SASP factors induce senescence in neighboring cells
- [[Epithelial-to-mesenchymal transition]] — SASP induces EMT promoting tumor progression
- [[p53]] — Central regulator of CS via p21 activation
- [[p16]] — CDK inhibitor mediating CS via RB pathway
- [[Rb]] — Tumor suppressor whose phosphorylation state determines cell cycle arrest
- [[ATM]] — Checkpoint kinase activated by DNA double-strand breaks in RS
- [[ATR]] — Checkpoint kinase activated by replication stress
- [[CDK2]] — Kinase whose inhibition by p21 halts cell cycle
- [[E2F1]] — Transcription factor whose activity is blocked during CS
- [[IL-1α]] — Master regulator of SASP expression
- [[IL-1β]] — Essential for SASP expression via IL-1R
- [[IL-6]] — Dual-role SASP factor; context-dependent tumor promotion/suppression
- [[IL-8]] — SASP factor promoting tumor migration and invasion
- [[CXCR2]] — Chemokine receptor reinforcing senescence and attracting TAMs
- [[CCL2]] — SASP chemokine promoting tumor migration
- [[NF-kappaB]] — Transcription factor driving SASP expression
- [[STAT3]] — Signaling molecule mediating SASP effects on tumor cells
- [[CD73]] — Ecto-5'-nucleotidase upregulated by SASP; metabolic immune checkpoint
- [[PD-L1]] — Immune checkpoint upregulated by adenosine in TME
- [[Galectin-9]] — SASP factor with immunosuppressive effects in TME
- [[HMGB1]] — p53-dependent SASP alarmin
- [[Extracellular Vesicles]] — SASP carriers mediating intercellular communication
- [[Matrix Metalloproteinase]] — SASP proteases remodeling ECM for tumor progression
- [[Reactive Oxygen Species]] — ROS driving DDR and senescence induction
- [[PAI-1]] — p53 target gene; SASP factor maintaining cell cycle arrest
- [[GDF15]] — SASP factor promoting colon cancer formation
- [[Senescent cell anti-apoptotic pathways]] — SCAP defenses protecting senescent cells
- [[Senescent Cells]] — Targets of senolytic and senomorphic therapies
- [[CDKN2A]] — Gene encoding p16; critical CS biomarker

## Linking Summary

- New links added: [[Tumor Microenvironment]], [[Galectin-9]], [[PD-L1]], [[CHK2]], [[DNA Damage]]
- Suggested new entity notes to create: [[Tumor Microenvironment]] (major concept), [[Galectin-9]] (SASP immunosuppressive factor), [[PD-L1]] (immune checkpoint in TME)
- Strong connections to strengthen:
    - [[SASP]] ↔ [[Tumor Microenvironment]]
    - [[Senescence]] ↔ [[SASP]]
    - [[Senolytic]] ↔ [[Senescent cell anti-apoptotic pathways]]
    - [[IL-6]] ↔ [[STAT3]] ↔ [[Tumor Microenvironment]]
