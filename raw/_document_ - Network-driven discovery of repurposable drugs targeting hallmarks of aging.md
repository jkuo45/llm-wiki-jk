---
title: "Network-driven discovery of repurposable drugs targeting hallmarks of aging"
source: "https://www.nature.com/articles/s43587-026-01161-8"
author:
  - "[[Bnaya Gross]]"
  - "[[Joseph Ehlert]]"
  - "[[Vadim N. Gladyshev]]"
  - "[[Joseph Loscalzo]]"
  - "[[Albert-László Barabási]]"
published: 2026-06-25
created: 2026-11-16
description: "Despite the thousands of genes implicated in age-related phenotypes, effective interventions for aging remain elusive, due to the multifactorial nature of longevity and the interconnectedness of molecular components involved. Here we introduce a network medicine framework to map 2,358 longevity-associated genes onto the human interactome to identify drug-repurposing candidates capable of modulating specific hallmarks of aging. We find that genes associated with each hallmark form a connected subgraph, or hallmark module, allowing us to measure the network proximity of 6,442 compounds to each hallmark. We then introduce a transcription-based metric, pAGE, which evaluates whether drug-induced expression shifts reinforce or counteract known age-related expression changes within each hallmark module. By integrating network proximity and pAGE, we identify drug-repurposing candidates targeting specific hallmarks and provide a falsifiable framework to leverage genomic discoveries for accelerating drug repurposing in longevity. Our findings are interpretable, revealing molecular mechanisms through which drugs modulate hallmarks. The authors introduce a network medicine framework showing that the hallmarks of aging form interconnected molecular modules in the human interactome. This new approach can help to identify existing drugs that might influence aging-associated transcriptional changes."
tags:
  - "clippings"
type: "document"
---
## Abstract

Despite the thousands of genes implicated in age-related phenotypes, effective interventions for aging remain elusive, due to the multifactorial nature of longevity and the interconnectedness of molecular components involved. Here we introduce a network medicine framework to map 2,358 longevity-associated genes onto the human interactome to identify drug-repurposing candidates capable of modulating specific hallmarks of aging. We find that genes associated with each hallmark form a connected subgraph, or hallmark module, allowing us to measure the network proximity of 6,442 compounds to each hallmark. We then introduce a transcription-based metric, pAGE, which evaluates whether drug-induced expression shifts reinforce or counteract known age-related expression changes within each hallmark module. By integrating network proximity and pAGE, we identify drug-repurposing candidates targeting specific hallmarks and provide a falsifiable framework to leverage genomic discoveries for accelerating drug repurposing in longevity. Our findings are interpretable, revealing molecular mechanisms through which drugs modulate hallmarks.

## Main

Over the past decade, comprehensive genetic surveys [^1] [^2] [^3] [^4] [^5] and systematic animal experiments [^6] [^7] have implicated thousands of human genes in age-related phenotypes, with particular focus on the key biological processes underlying age-related functional decline, known as hallmarks of aging [^8] [^9] [^10]. While these efforts offer unprecedented opportunities to dissect the molecular basis of longevity [^11] [^12] [^13] [^14], we continue to lack treatments and interventions capable of modulating specific aging processes. This shortfall potentially stems from the multifactorial nature of aging and the functional and mechanistic interconnectedness of the molecular and genetic processes implicated in longevity, limiting the impact of any single intervention.

The multifactorial nature of longevity is often formalized through the ‘hallmarks of aging’, which demarcate multiple distinct age-related mechanisms, ranging from genomic instability to cellular senescence [^8] [^9] [^10]. Although each hallmark is intended to represent a distinct biological dimension, they are not fully distinct, and extensive cross-talk and synergy exist among them. Yet, current therapeutic interventions in clinical trials typically target only one or at most a few facets of aging. A comprehensive strategy for promoting longevity will likely require multiple interventions, each addressing different mechanisms (or hallmarks) of aging. Developing novel compounds to achieve this is a lengthy endeavor requiring a decade or more to reach clinical practice. An attractive alternative is to repurpose from the pool of over 6,000 clinically approved or experimental drugs, because some of these agents might effectively target specific aging processes [^15] [^16] [^17]. Indeed, most of these compounds have already undergone toxicity screening and possess well-characterized targets (and have known side effects), allowing for more rapid clinical development. The key challenge is to identify the compounds that can influence longevity—and specifically, the hallmark they target and the relevant molecular mechanism.

To address this bottleneck in aging research, here we introduce a network medicine framework [^18] [^19] [^20] [^21] that allows us to integrate data on thousands of aging-associated genes, along with their network relationships, and the targets of all approved and experimental drugs, aiming to identify potential interventions that could affect longevity. Specifically, we begin with a library of 2,358 previously identified longevity-associated genes, which we map onto the human interactome. Strikingly, we find that specific hallmark-associated genes aggregate into a connected subgraph, forming distinct and statistically significant hallmark modules. The discovery of these modules is our first discovery, enabling us to apply established network medicine approaches for drug repurposing [^22] [^23] [^24] and to evaluate the proximity of 6,442 clinically approved or experimental compounds to each hallmark module, thereby identifying candidates capable of perturbing specific aging phenotypes.

Our second key advance is the introduction of a novel transcription-based metric, Pro-Age (pAGE), that allows us to assess whether the expression changes induced by a drug reinforce or counteract known age-related expression changes, allowing us to distinguish beneficial interventions from those that may accelerate aging. This advance was missing in prior repurposing efforts [^22] [^23] [^24], which only predicted the drug’s impact on a given phenotype but not the directionality and the magnitude of its action. Ultimately, we find multiple drugs that successfully reverse the expression changes observed during aging in specific hallmarks, representing promising repurposing candidates. Our predictions are interpretable, revealing the precise molecular mechanisms by which each drug-repurposing candidate modulates the specific hallmark of aging, thereby providing experimentally falsifiable hypotheses. Together, our study offers a principled, integrative route to leverage the vast body of aging-related knowledge to identify drugs that can address the multifactorial nature of aging.

## The genetic roots and interconnectivity of the hallmarks of aging

We began by querying the OpenGenes database [^25], which manually curates gene-level annotations that link 2,358 genes to longevity, age-associated diseases or pathways implicated in aging, also offering a confidence level for each association (Fig. [1a](https://www.nature.com/articles/s43587-026-01161-8#Fig1) and Supplementary Section [I](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)), ranging from 1 (highest) to 5 (lowest). From this resource, we identify the genes that are explicitly linked to at least one of the 11 hallmarks of aging [^8] [^9] [^10] (Fig. [1b](https://www.nature.com/articles/s43587-026-01161-8#Fig1)). Among the 2,358 longevity-associated genes, 1,250 can be associated with specific hallmarks of aging: 860 are exclusive to a single hallmark, and 390 span multiple hallmarks (Fig. [1c](https://www.nature.com/articles/s43587-026-01161-8#Fig1)). The remaining 1,108 genes, while linked to aging, could not be associated with a specific hallmark based on the current knowledge of their biological function. We can, however, rely on the topology of the human interactome to link these genes to specific hallmarks (Supplementary Section [III](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)). The 390 multi-hallmark genes support our hypothesis that, at the molecular level, the hallmarks of aging are not independent entities. Further support is offered by pairwise comparisons using the Jaccard index [^26], revealing statistically significant gene overlap among 47 of the 55 hallmark pairs (Extended Data Fig. [1](https://www.nature.com/articles/s43587-026-01161-8#Fig9) and Supplementary Section [IV](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)).

![Fig. 1: Aging-associated genes.](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs43587-026-01161-8/MediaObjects/43587_2026_1161_Fig1_HTML.png?as=webp)

Fig. 1: Aging-associated genes.

Although the OpenGenes database offers evidence extracted from observational and experimental studies that link each gene to its assigned hallmark of aging, we wished to confirm whether the collective set of 1,250 hallmark-associated genes is broadly relevant to longevity. To this end, we performed additional validation (Supplementary Section [II](https://www.nature.com/articles/s43587-026-01161-8#MOESM1) and [Methods](https://www.nature.com/articles/s43587-026-01161-8#Sec23)), finding that the set of 1,250 genes shows significant enrichment in (i) age-related KEGG pathways [^27] (Supplementary Fig. [11](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)), (ii) genes implicated in aging by six large-scale aging studies [^3] [^4] [^5] [^28] [^29] [^30] (Supplementary Table [1](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)), (iii) five aging-related diseases (Supplementary Table [2](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)), (iv) eight distinct cancer types whose incidence increasing significantly with age (Supplementary Fig. [4](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)) and (v) genes involved in DNA repair or progeroid syndromes [^31] [^32] [^33] (Supplementary Fig. [5](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)). We checked that none of these validation datasets were included in the development of the OpenGenes database (Supplementary Section [II](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)). Hence, these enrichments lend additional support to the aging relevance of this gene set, serving as the foundation for our subsequent work.

## The hallmark modules of aging

To capture the network-level organization of aging, we mapped the 1,250 hallmark-associated genes onto the human interactome—a comprehensive catalog of 524,156 experimentally validated binding interactions among 18,223 proteins ([Methods](https://www.nature.com/articles/s43587-026-01161-8#Sec23)). For many diseases and phenotypes, the genes associated with the disease are known to coalesce in the interactome to form a ‘disease module’, formally defined as the largest connected component (LCC) formed by the disease genes [^18]. While disease modules were validated for multiple isolated traits [^34] [^35] [^36] [^37], aging comprises multiple hallmarks that may each behave as distinct, yet interrelated, phenotypes. It is thus unclear whether the different hallmark genes form independent modules, and if these modules reside in the same network neighborhood (Fig. [2a](https://www.nature.com/articles/s43587-026-01161-8#Fig2)).

![Fig. 2: Network characteristics of the hallmarks of aging.](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs43587-026-01161-8/MediaObjects/43587_2026_1161_Fig2_HTML.png?as=webp)

Fig. 2: Network characteristics of the hallmarks of aging.

To answer these questions, we examined each hallmark separately, finding that in 9 of the 11 hallmarks, associated genes cluster into a statistically significant LCC (*z* -score > 1.96; Fig. [2b](https://www.nature.com/articles/s43587-026-01161-8#Fig2)). The remaining two hallmarks—‘loss of proteostasis’ (*z* -score = 1.74) and ‘epigenetic alterations’ (*z* -score = 1.67)—also show a marginal significance, indicating that their gene sets are characterized by nonrandom connectivity. In other words, the hallmark-associated genes reside in narrowly defined network neighborhoods, each representing a distinct and identifiable ‘hallmark module’ within the global interactome (Fig. [3a–k](https://www.nature.com/articles/s43587-026-01161-8#Fig3)). We note that the structure of the hallmark modules may be partially shaped by pathway-driven aging research and by biases in protein–protein interaction (PPI) networks toward well-studied genes. To address this, we performed multiple robustness validations using an unbiased high-throughput PPI, the STRING PPI and an edge-permutation significance test, consistently recovering the statistical significance of the hallmark modules (Supplementary Section [XII](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)). These findings establish that hallmark genes form well-defined and statistically significant network modules.

![Fig. 3: The hallmark modules and the longevity module.](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs43587-026-01161-8/MediaObjects/43587_2026_1161_Fig3_HTML.png?as=webp)

Fig. 3: The hallmark modules and the longevity module.

We next examined whether these hallmark modules overlap, aiming to reveal functional relationships among them. To do so, we used two complementary measures: separation [^18] and proximity [^22] (Fig. [2a](https://www.nature.com/articles/s43587-026-01161-8#Fig2) and Extended Data Figs. [2](https://www.nature.com/articles/s43587-026-01161-8#Fig10) and [3](https://www.nature.com/articles/s43587-026-01161-8#Fig11); see also [Methods](https://www.nature.com/articles/s43587-026-01161-8#Sec23) and Supplementary Section [V](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)), finding that the hallmarks of aging are located in the same neighborhood of the interactome, together forming a broader ‘longevity module’ (Fig. [3l](https://www.nature.com/articles/s43587-026-01161-8#Fig3) and Supplementary Section [VI](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)). The overlap between the individual hallmark modules reflects the existence of shared molecular mechanisms underlying related hallmarks. Next, we leverage the existence of the individual hallmark modules to identify drug-repurposing candidates that target specific hallmarks.

## Network-based identification of hallmark-specific drug-repurposing candidates

The existence of the hallmark modules offers the opportunity to apply network-based drug-repurposing methods, originally designed for single-disease modules, to the more complex and multifactorial context of aging [^22] [^23] [^24]. To this end, we compiled 6,442 approved or clinically tested compounds from DrugBank [^38]. Our approach rests on the premise that drugs whose targets lie in the network proximity to a disease (or hallmark) module are poised to perturb that disease (or hallmark) with potential therapeutic outcome, a hypothesis that has been experimentally supported across multiple diseases—from asthma to heart disease, and has been experimentally validated for 6,710 drugs, successfully predicting their potential role in treating coronavirus disease 2019 (COVID-19) infection [^24] [^34] [^35] [^39]. To develop such a framework, we begin by measuring each drug’s network proximity to every hallmark module for five sets of hallmark genes, stratified by confidence level (Fig. [1a](https://www.nature.com/articles/s43587-026-01161-8#Fig1)). For each hallmark, we then ranked drugs by the significance of their proximity (*z* -score < −1.96). For example, we find 27 compounds that displayed statistically significant proximity to the ‘cell senescence’ hallmark at every confidence level (Fig. [7](https://www.nature.com/articles/s43587-026-01161-8#Fig7)). The top-ranked candidate in this list, pimasertib, is a MEK1/MEK2 inhibitor known to induce apoptosis and senescence [^40], aligning with its predicted effect. Another high-ranking compound, selisistat, a SIRT1 inhibitor, also promotes senescence [^41]. These examples demonstrate that proximity successfully detects compounds previously implicated in senescence. Yet they also show that proximity alone does not imply a beneficial (anti-senescence) effect.

The network-based approach relies on undirected protein interactions, which can successfully establish a compound’s ability to perturb a module, but carries no information on whether the perturbation is beneficial or detrimental. To address this limitation, here we introduce a metric called pAGE (Fig. [4](https://www.nature.com/articles/s43587-026-01161-8#Fig4) and [Methods](https://www.nature.com/articles/s43587-026-01161-8#Sec23)), which quantifies whether drug-induced changes in gene expression reinforce or counter documented age-related expression shifts. Specifically, if a drug upregulates a gene that is known to be upregulated with age, one might anticipate a potentially adverse effect on longevity, whereas downregulating the same gene may be advantageous (Fig. [4](https://www.nature.com/articles/s43587-026-01161-8#Fig4)).

![Fig. 4: The pAGE metric for quantifying age-accelerating and pro-longevity perturbations.](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs43587-026-01161-8/MediaObjects/43587_2026_1161_Fig4_HTML.png?as=webp)

Fig. 4: The pAGE metric for quantifying age-accelerating and pro-longevity perturbations.

In summary, proximity predicts a drug’s potential impact on a hallmark module, while pAGE predicts the directionality of that effect: positive pAGE values indicate shifts toward younger expression patterns, whereas negative values suggest potential age-accelerating effects (Fig. [4](https://www.nature.com/articles/s43587-026-01161-8#Fig4)). Based on this rationale, we propose SHARP (systematic hallmark-based aging repurposing pipeline), which first uses network proximity to identify compounds targeting hallmark-related subgraphs, and then uses pAGE to determine whether the induced transcriptional changes are pro-longevity or age-accelerating.

Note, however, that not all age-related expression changes are detrimental. For example, several stress-response pathways become activated with age yet may still confer adaptive benefits through hormesis [^42] [^43]. Nevertheless, as we show next, SHARP successfully distinguishes lifespan-extending from non-extending compounds, indicating that such adaptive responses have only a limited confounding effect on predictive performance.

## Validation of the SHARP repurposing pipeline

To validate SHARP and assess its limitations, we examined its ability to identify compounds supported by experimental and clinical evidence for longevity. Specifically, we evaluated drugs shown to extend lifespan in mice [^44] and compounds currently under clinical investigation for longevity [^45]. To estimate the false-positive rate, we also analyzed compounds tested in mice that failed to extend lifespan [^44]. Because low-confidence genes (levels 3–5) introduce substantial noise into the pAGE metric (Supplementary Fig. [20](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)), validation analyses were restricted to high-confidence genes (levels 1–2). SHARP classified a drug as a repurposing candidate if it displayed significant proximity together with positive pAGE for at least one hallmark.

### Validation of lifespan-extending drugs in mice from the intervention testing program

We first examined 11 drugs that the intervention testing program (ITP) [^44] found to prolong lifespan in mice (Fig. [5](https://www.nature.com/articles/s43587-026-01161-8#Fig5) and Supplementary Table [3](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)). Of the 11 that extend lifespan, 6 displayed significant proximity (*z* -score < −1.96), and 4 had marginal proximity (*z* -score < −1.645) to at least one hallmark. We measure the pAGE parameter for 8 of the 11 ITP-confirmed lifespan-extending drugs [^44] with Connectivity Map (CMap) data, finding that all eight have positive pAGE for at least one hallmark (Fig. [5](https://www.nature.com/articles/s43587-026-01161-8#Fig5) and Supplementary Table [3](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)). Since all eight also have statistically significant or marginally significant proximity to at least one hallmark, SHARP offers 100% sensitivity (95% confidence interval: 63%, 100%) for the ITP-tested drugs (see Supplementary Sections [XIII](https://www.nature.com/articles/s43587-026-01161-8#MOESM1) and [XVIII](https://www.nature.com/articles/s43587-026-01161-8#MOESM1) for an analysis of potential circularity in the validation process, and Supplementary Section [XVII](https://www.nature.com/articles/s43587-026-01161-8#MOESM1) for a baseline ablation analysis evaluating the predictive power of proximity and pAGE separately).

![Fig. 5: Drug repurposing of drugs currently under clinical trials for antiaging and from the ITP project.](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs43587-026-01161-8/MediaObjects/43587_2026_1161_Fig5_HTML.png?as=webp)

Fig. 5: Drug repurposing of drugs currently under clinical trials for antiaging and from the ITP project.

We also tested the 17 ITP drugs that failed to extend lifespan (Supplementary Table [11](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)). Of these, 12 displayed significant proximity (*z* -score < −1.96), and two had marginal proximity (*z* -score < −1.645) to at least one hallmark. We measure the pAGE parameter for 7 of the 17 with CMap data, finding that only three have positive pAGE and significant or marginally significant proximity for at least one hallmark (Supplementary Table [11](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)), resulting in a 42.8% (95% confidence interval: 9.9%, 81.5%) false-positive rate for the ITP-tested drugs.

We also find that lifespan-extending ITP drugs exhibit a higher number of hallmarks with positive pAGE values relative to negative ones ($\langle {{\rm{pAG}}{\rm{E}}}^{+}\rangle /\langle {\rm{pAG}}\rm{E}^{-}\rangle =1.24$), whereas ITP drugs that failed to extend lifespan show the opposite pattern ($\langle {{\rm{pAG}}{\rm{E}}}^{+}\rangle /\langle {{\rm{pAG}}{\rm{E}}}^{-}\rangle =0.52$), as shown in Supplementary Fig. [20](https://www.nature.com/articles/s43587-026-01161-8#MOESM1). These results suggest that while some negative pAGE values may reflect compensatory or protective responses, the dominant signal among lifespan-extending compounds remains positive. Indeed, even drugs that extend lifespan may show negative pAGE values for specific hallmarks. This is expected, as it is unlikely that any intervention will simultaneously reverse all hallmarks of aging. For example, masoprocol (NDGA) extends lifespan in mice, yet it exhibits a negative pAGE value for the mitochondrial dysfunction hallmark (Fig. [5](https://www.nature.com/articles/s43587-026-01161-8#Fig5)). This directionality is biologically plausible, as masoprocol has been shown to induce a loss of mitochondrial membrane potential in FL5.12 murine hematopoietic cells [^46].

### Validation using drugs under clinical trials for human longevity

We next tested our drug-repurposing pipeline against a curated list of 17 compounds currently undergoing clinical trials for healthy longevity [^45], a list that included well-known candidates such as metformin and sirolimus (rapamycin; Fig. [5](https://www.nature.com/articles/s43587-026-01161-8#Fig5) and Supplementary Table [4](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)). Three drugs (sirolimus, acarbose and metformin) overlap with the 11 compounds that extend lifespan in mice from the ITP program described above. Of these 17, we find that 11 display statistically significant proximity to at least one hallmark (*z* -score < −1.96). For instance, aspirin is predicted to influence six hallmarks, and dasatinib is predicted to affect five, whereas sirolimus (rapamycin) affects only one hallmark, specifically the ‘intercellular communication’ hallmark module. The six drugs undergoing clinical trials not captured by our pipeline had targets located relatively far from hallmark modules (proximity > 1.6; Supplementary Fig. [14](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)). Even so, 3 of the 6 compounds, acarbose, metformin and quercetin, exhibited marginally significant proximity (*z* -score < −1.645), illustrating that partial alignment with a hallmark can still be detected for these compounds. We measure the pAGE parameter for 9 of the 17 drugs in clinical trials for aging or longevity for which CMap data are available ([Methods](https://www.nature.com/articles/s43587-026-01161-8#Sec23)), finding that 8 of the nine drugs displayed positive pAGE and statistically or marginally significant for at least one hallmark (Fig. [5](https://www.nature.com/articles/s43587-026-01161-8#Fig5) and Supplementary Table [4](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)), resulting in 88.9% (95% confidence interval: 51.7%, 99.7%) sensitivity for the drugs undergoing clinical trials.

### Validation against independent experimental results

Finally, we evaluated SHARP using 10 compounds recently tested for lifespan and healthspan effects in mice in a parallel independent study [^47]. This study prioritized compounds using criteria distinct from those of the current work, and its experimental findings became available only after our predictive analysis had concluded (Supplementary Section [XIV](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)). Among the eight compounds with available CMap data, vorinostat, selumetinib, LY-294002, KU-0063794 and AZD-8055 significantly improved lifespan or healthspan, whereas valdecoxib, GDC-0941 and ascorbyl-palmitate did not. The successful compounds showed statistically significant (or marginal) proximity to at least one hallmark (Supplementary Table [12](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)), and all compounds with CMap data displayed positive pAGE for at least one hallmark, yielding 100% sensitivity (95% confidence interval: 47.8%, 100%).

Taken together, SHARP demonstrates 100% sensitivity for mouse lifespan-extending compounds and 88.9% sensitivity for clinically tested compounds. These results reinforce the predictive strength of our approach and provide confidence in the novel drug-repurposing predictions presented below. We note that larger sample sizes in future studies are expected to yield more precise estimates and reduce the confidence intervals.

## Identifying hallmark-targeted drug-repurposing candidates

Encouraged by the positive validation above, we next apply SHARP to identify drug-repurposing opportunities for each hallmark. Specifically, we identify all approved and experimental compounds with significant proximity to specific aging modules, as identified by our network analysis, and positive pAGE value, if there is available CMap data for the compound (Fig. [6](https://www.nature.com/articles/s43587-026-01161-8#Fig6)). This process allows us to identify ‘pro-longevity compounds’ that can successfully perturb a hallmark module, inducing pro-longevity expression changes. We also identify ‘age-accelerating compounds’ that can also perturb a hallmark, but the induced expression changes are more consistent with pro-aging effects. While the CMap database provides expression data for only a subset of the compounds listed in DrugBank (1,347 of 6,442), SHARP can operate with any source of drug perturbation profiles, including gene expression data available from independent studies for drugs not covered by CMap. Accordingly, the scope of the present analysis is constrained by the availability of CMap data but can be expanded using additional perturbational databases.

![Fig. 6: Perturbation pAGE signature.](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs43587-026-01161-8/MediaObjects/43587_2026_1161_Fig6_HTML.png?as=webp)

Fig. 6: Perturbation pAGE signature.

The network-based repurposing pipeline has allowed us to identify a total of 370 drugs (Fig. [7](https://www.nature.com/articles/s43587-026-01161-8#Fig7)), each showing statistically significant proximity to one or more hallmarks of aging, hence potentially capable of modulating longevity. Of these, 60 drugs have CMap expression profiles, allowing us to calculate their pAGE parameter. Among these 60 drugs, 21 display positive pAGE, indicating that they represent pro-longevity drugs, and another 23 display negative pAGE, representing potential age-accelerating compounds. The remaining 16 drugs show inconsistent pAGE values for confidence levels 1 and 2; thus, we need further data to evaluate their impact on longevity. Below, we summarize the identified candidate drugs in the context of each hallmark.

![Fig. 7: Drug repurposing for hallmark-targeted drugs.](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs43587-026-01161-8/MediaObjects/43587_2026_1161_Fig7_HTML.png?as=webp)

Fig. 7: Drug repurposing for hallmark-targeted drugs.

### Exhaustion of stem cells

We identified 113 drugs with significant proximity (*z* -score < −1.96) to this hallmark at confidence levels 3–5, 19 of which have CMap data. Nine of 19 exhibit positive pAGE for level 3 (guanadrel, guanethidine, olopatadine, epirubicin, nisoxetine, clorgiline, amineptine, acemetacin and amlexanox), and 10 are predicted to be age-accelerating compounds (protriptyline, iobenguane, rescinnamine, ketorolac, enalaprilat, doramapimod, ph-797804, navitoclax, neomycin and benzatropine).

### Altered intercellular communication

Sixty-one drugs are significantly proximal to this hallmark across all five confidence levels, of which 25 have CMap data. Five exhibit positive pAGE for levels 1 and 2 (oxymetazoline, terazosin, tetryzoline, cirazoline and synephrine), and 11 are age-accelerating compounds (niguldipine, phentolamine, sertindole, prazosin, doxazosin, naphazoline, methoxamine, alfuzosin, bms-754807, thioproperazine and dequalinium).

### Epigenetic alterations

Of 52 drugs with significant proximity across all five confidence levels, only 5 have CMap data. Of these, doconexent, fenoprofen and clinofibrate have positive pAGE for levels 1 and 2, while pilaralisib is predicted to be an age-accelerating compound.

### Mitochondrial dysfunction

Twenty-one drugs exhibit significant proximity across all five confidence levels, but none have CMap data. If we also consider drugs that show proximity for four of five confidence levels, we find three drugs with CMap data (navitoclax, alsterpaullone and pyrazolanthrone), which have non-negative pAGE for levels 1 and 2.

### Loss of proteostasis

Six drugs have significant proximity at all five confidence levels, but we do not have CMap data for any of them. Considering those display proximity at four of five confidence levels, we find minocycline with negative pAGE.

### Changes in the extracellular matrix structure

As no genes from the OpenGenes database have confidence levels 1 or 2 for this hallmark, we examined levels 3–5, identifying 25 significantly proximal drugs. Among these, marimastat and captopril have CMap data and non-negative pAGE for level 3.

### Deregulated nutrient sensing

Fifty-two drugs reach significance (*z* -score < −1.96) across all five confidence levels, four of which have CMap data and positive pAGE for levels 1 and 2: tivozanib, bms-754807, pilaralisib and linsitinib.

### Genomic instability

Four drugs achieve significant proximity at all five confidence levels, yet none have CMap data. Adding those significant at four levels yields three drugs with CMap data (gsk-1059615, paricalcitol and pimecrolimus), of which pimecrolimus is an age-accelerating compound exhibiting negative pAGE for levels 1 and 2.

### Cell senescence

Twenty-seven drugs are significant at all five levels; three of them—biotin, linsitinib and bms-754807—have CMap data, and show non-positive pAGE values for levels 1 and 2.

### Disabled macroautophagy

With no confidence level-1 genes available, we analyzed levels 2–5, identifying seven drugs that reach significance for all four. Two, monobenzone and imexon, have CMap data with pAGE = 0 for level 2.

### Telomere attrition

Two drugs show significance across all five levels, although neither has CMap data.

To summarize, we find 370 drugs that exhibit significant proximity to at least one hallmark of aging. Of the 370 drugs, 60 have CMap data, enabling us to compute their pAGE; of these, 21 have a positive pAGE across all five confidence levels, making them prime candidates for experimental testing in animal models. We also find an additional 23 compounds with negative pAGE, indicative of potential age-accelerating effects. Literature evidence supporting our predictions is provided in Supplementary Section [XV](https://www.nature.com/articles/s43587-026-01161-8#MOESM1) and Supplementary Table [13](https://www.nature.com/articles/s43587-026-01161-8#MOESM1). The variability of pAGE across different cell lines and its impact on our final candidate selection is discussed in Supplementary Section [IX](https://www.nature.com/articles/s43587-026-01161-8#MOESM1).

We wish to emphasize that 310 of our drug-repurposing predictions currently lack CMap data. One can rely, therefore, on expression profiling to determine their pAGE value and assess their directionality. Extrapolating from our previous data, we anticipate that 35% (or about 108 drugs) of these candidates may benefit longevity ([Methods](https://www.nature.com/articles/s43587-026-01161-8#Sec23)). Interestingly, 83 of the 370 candidates identified by our pipeline are ‘network drugs’, representing drugs that do not target aging genes directly (Supplementary Section [XVI](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)). These candidates would be missed by approaches that do not consider the full network topology and the respective hallmark modules, consistent with a previous study [^24], which found that 76 of 77 drugs experimentally effective against COVID-19 could not be explained by direct interactions with viral target proteins.

## Proximity and pAGE predict therapeutic effects

The integrated network-based pipeline, augmented by the pAGE metric, is not only capable of identifying promising drug-repurposing candidates, but can also yield falsifiable predictions regarding a drug’s mechanism of action. We demonstrate this using oxymetazoline (see other candidates in Supplementary Section [XI](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)), a repurposing candidate predicted to impact the Altered Intercellular Communication hallmark (Fig. [7](https://www.nature.com/articles/s43587-026-01161-8#Fig7)). Oxymetazoline is an α <sub>1</sub> - and α <sub>2</sub> -adrenergic agonist used clinically for nasal congestion, ocular allergic reactions and rosacea [^48]. It targets the proteins ADRA1A, ADRA1B and ADRA1D, members of the α <sub>1</sub> -adrenergic receptor group, and HTR1A, HTR1B and HTR1D, members of the serotonin receptor group (Fig. [8a](https://www.nature.com/articles/s43587-026-01161-8#Fig8)). Among these, ADRA1A is itself a hallmark gene (confidence level 1), and constitutively active ADRA1A has been linked to lifespan extension in mice [^49]. Perturbing ADRA1A may therefore influence insulin signaling, AMPK–TOR pathways and chronic inflammation [^50].

![Fig. 8: Proximity and pAGE predict mechanism of action.](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs43587-026-01161-8/MediaObjects/43587_2026_1161_Fig8_HTML.png?as=webp)

Fig. 8: Proximity and pAGE predict mechanism of action.

To understand how oxymetazoline perturbs the hallmark module, we examined the propagation of its transcriptional perturbation signature through the interactome. The α <sub>1</sub> -adrenergic receptor group connects to the module through ALB and NR3C1, while the serotonin receptor group connects through TGFB1. However, these direct neighbors show relatively weak perturbation signatures, suggesting that the perturbation instead propagates through ACKR3, a non-hallmark protein with one of the strongest perturbation scores among the targets’ neighbors (Fig. [8b](https://www.nature.com/articles/s43587-026-01161-8#Fig8)). ACKR3 interacts with hallmark proteins including NFKB1, TP53 and AKT1, each displaying significant perturbation signatures. Although expression of the α <sub>1</sub> -adrenergic receptor genes themselves does not significantly change with age (Fig. [8c](https://www.nature.com/articles/s43587-026-01161-8#Fig8)), targeting them induces downstream transcriptional changes across the hallmark module, resulting in a significant pAGE = 0.46 (*z* -score = 2.35; Supplementary Section [VIII](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)). Specifically, oxymetazoline counteracts aging-associated expression changes in genes involved in sterile inflammation, including *CCL5*, *NFE2L2*, *AGER*, *RELA*, *CEBPB*, *C3*, *MIF*, *NFKBIA*, *HDAC4*, *PTGS2* and *HLA-DRB1*, as well as genes involved in impaired intercellular communication, including *CCL5*, *TP63*, *NFE2L2*, *FOXO3*, *CDKN2B*, *IGF1R* and *SIRT1* (Fig. [8b–d](https://www.nature.com/articles/s43587-026-01161-8#Fig8)), thereby increasing the pAGE value (Fig. [8d](https://www.nature.com/articles/s43587-026-01161-8#Fig8)).

In summary, integrating the hallmark network structure (Fig. [8a](https://www.nature.com/articles/s43587-026-01161-8#Fig8)), drug perturbation profile (Fig. [8b](https://www.nature.com/articles/s43587-026-01161-8#Fig8)) and aging-associated expression changes (Fig. [8c](https://www.nature.com/articles/s43587-026-01161-8#Fig8)) reveals the molecular mechanisms through which a repurposable drug may modulate a hallmark module. The predicted mechanisms can then be validated in cell-based assays [^34] [^35] and animal models. While oxymetazoline serves here as an illustrative example, integrating pAGE with hallmark network structure (Fig. [3](https://www.nature.com/articles/s43587-026-01161-8#Fig3)) enables similarly detailed mechanistic predictions for all candidates in Fig. [7](https://www.nature.com/articles/s43587-026-01161-8#Fig7) (Supplementary Section [XI](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)).

## Discussion

An important paradigm in aging research is the distinction between the ‘why’ of aging, represented by causal factors [^51] [^52] [^53] and the ‘how’ of aging, as encapsulated by ‘aging hallmarks’ [^54]. The longevity module introduced here reveals that from a network perspective, both the causal factors and the ‘hallmarks’ of aging are located in the same network neighborhood. This implies that therapeutic interventions designed to target either the drivers of aging or its hallmark processes must ultimately focus on the same well-localized neighborhood of the subcellular network, defined by the longevity module (Fig. [3](https://www.nature.com/articles/s43587-026-01161-8#Fig3)). Consequently, from a network perspective, the traditional distinction between targeting ‘theories’ or ‘hallmarks’ may be less critical, given the realization that both involve the same network neighborhood.

Ultimately, our findings underscore the potential of leveraging the extensive hallmark-associated genetic evidence to identify drug-repurposing candidates for healthy longevity. Although the evidence presented here is primarily computational, it is supported by genetics and expression-based evidence, offering a principled basis for subsequent in vitro and in vivo validations, culminating in animal studies and eventually clinical trials.

We also introduce a key methodological advance, the pAGE metric, that helps us gauge whether a drug reinforces or counteracts aging-related transcriptional changes. Consequently, our pipeline uncovers both compounds that can act as pro-longevity compounds, as well as compounds that likely serve as ‘age-accelerating’ agents. These are also valuable for validating the genetic nexus of aging, illuminating further molecular targets, and identifying previously unknown side effects of existing drugs, helping clinicians to avoid unintended adverse effects on lifespan.

Because aging is multifactorial, effective interventions will likely require combination therapies targeting multiple hallmarks simultaneously. Notably, our approach identifies compounds that perturb several hallmarks, providing a framework for multi-target strategies (Supplementary Tables [5](https://www.nature.com/articles/s43587-026-01161-8#MOESM1) and [6](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)). Some candidates, such as bms-754807 (Fig. [7](https://www.nature.com/articles/s43587-026-01161-8#Fig7)), affect multiple hallmark modules, consistent with our independent experimental study showing that lifespan-extending drugs in mice tend to target multiple hallmarks (Supplementary Table [12](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)). Future work should therefore explore rational drug combinations using network-based models that account for drug–drug interactions, synergy and toxicity [^55].

Our work builds upon previous aging drug-repurposing approaches [^56] [^57] [^58] by integrating network topology with perturbational gene expression signatures. Prior approaches relied either on overlap between drug targets and aging genes [^56] or on CMap expression signatures alone [^57] [^58], lacking a network-based framework capable of identifying mechanism of action. In contrast, our approach captures broader network effects, including ‘network drugs’ that perturb hallmark modules without directly targeting hallmark genes, accounting for 83 of the 370 candidates identified by our pipeline (Supplementary Section [XVI](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)).

Our approach has several limitations. Aging processes vary substantially across tissues and cell types [^59], motivating integration of tissue-specific and single-cell data to refine hallmark definitions and tissue-level pAGE estimates. Tissue-dependent interactomes could be generated using GTEx data [^60], enabling evaluation of drug perturbations in biologically relevant cellular contexts [^59]. In this study, we primarily relied on MCF7 perturbation profiles because of their broad CMap coverage. However, analyses in the noncancerous WI38 and IMR90 cell lines showed that most pAGE signatures exhibit only minimal variation (Supplementary Section [IX](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)).

Regarding our second key advance, the pAGE parameter, we note that it does not yet account for dosage, nonlinear responses or the possibility that a single compound may confer beneficial effects in one tissue and detrimental effects in another. Future work could help improve its predictive value by implementing these features.

Capturing the progression of hallmark modules at different chronological ages in humans or model organisms could also reveal critical windows when interventions are most effective, guiding stage-specific therapeutics for healthy aging. Finally, combining patient stratification (for example, genetic background, lifestyle factors) with network-derived hallmark signatures might help tailor interventions to individual aging trajectories, moving the field toward personalized antiaging strategies and opening the doors for Precision Geroscience.

## Methods

### Ethical regulations statement

No approval or ethical regulations were required for this study.

### The human interactome

The human interactome was assembled from 26 databases encompassing six different types of PPIs: (i) binary PPIs systematically tested by high-throughput yeast two-hybrid (Y2H) experiments (HI-Union [^61], HINT [^62], HIPPIE [^63]); (ii) kinase–substrate interactions from both high-throughput and literature-curated low-throughput studies (KinomeNetworkX [^64], Human Protein Resource Database (HPRD) [^65], PhosphoSitePlus [^66]); (iii) literature-curated PPIs identified by affinity purification–mass spectrometry (AP–MS) and low-throughput experiments (InWeb [^67], BioGRID [^68], PINA [^69], MINT [^70], IntAct [^70], InnateDB [^71], APID [^72], DIP [^73], LitBM17 [^61]); (iv) structure-derived PPIs supported by three-dimensional protein structures or cofractionation evidence (Instruct [^74], Interactome3D [^75], INSIDER [^76], CoFrac [^77]); (v) signaling and regulatory interactions curated from literature and high-throughput studies (SignaLink2.0 [^78], ENCODE [^79], RAIN [^80], RISE [^81]); and (vi) protein complexes identified through systematic AP–MS experiments or computational inference (BioPlex2.0 [^82], QUBIC [^83], lncRNome [^84], NPInter [^85]). The genes were mapped to their Entrez ID based on the National Center for Biotechnology Information (NCBI) database as well as their official gene symbols. The resulting interactome includes 524,156 PPIs connecting 18,223 unique proteins. For comparison, the STRING PPI network [^86] contains 18,506 proteins and 728,844 interactions with a similar degree distribution (Supplementary Fig. [19](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)). Robustness validation using the restricted unbiased PPI and the STRING PPI network is provided in Supplementary Section [XII](https://www.nature.com/articles/s43587-026-01161-8#MOESM1).

### LCC statistical significance

A set of genes *A* with a degree distribution ${P}_{A}(k)\,$ forms the LCC ${\rm{LCC}}(A)\in A\,$ in the interactome. The degree distribution of the interactome ${P}_{G}(k)$ is sampled using log-binning with a bin size of 100 nodes. The statistical significance of LCC(*A*) is measured by random sampling 1,000 gene sets in the interactome with size ${|A|}\,$ and degree distribution ${P}_{A}(k)$, and measuring the expected distribution of the LCC sizes, resulting in a *z* -score for the LCC(*A*) statistical significance.

### Network-based separation

The network-based separation *S* (*A,B*) between pairs of genes set *A* and *B* is calculated using the separation measurement introduced in ref. [^18] as shown in equation ([1](https://www.nature.com/articles/s43587-026-01161-8#Equ1)):

 $S \left(A , B\right) = \langle d_{A , B} \rangle - \frac{\langle d_{A , A} \rangle + \langle d_{B , B} \rangle}{2}$ 
$$
S\left(A,B\right)=\left\langle {d}_{A,B}\right\rangle -\frac{\left\langle {d}_{A,A}\right\rangle +\left\langle {d}_{B,B}\right\rangle \,}{2}
$$

(1)

where 〈 *d* <sub><i>A,B</i></sub> 〉 is the average shortest path between proteins in different gene sets and 〈 *d* <sub><i>A,A</i></sub> 〉 and 〈 *d* <sub><i>B,B</i></sub> 〉 are the average shortest path between proteins within the same gene set.

### Network-based proximity

The network-based proximity *P* (*S,T*) between pairs of genes set *S* and *T* (pair of hallmarks of aging, or a hallmark of aging a drug targets) is calculated using the proximity measurement introduced in ref. [^22] as shown in equation ([2](https://www.nature.com/articles/s43587-026-01161-8#Equ2)):

 $P \left(S , T\right) = \frac{1}{\left|\right. \left|T\right| \left|\right.} \underset{t \in T}{\sum} \underset{s \in S}{min} d \left(s , t\right)$ 
$$
P\left(S,T\right)=\,\frac{1}{|\left|T\right||}\mathop{\sum }\limits_{t\in T}\mathop{\min }\limits_{s\in S}d(s,t)
$$

(2)

where *d* (*S,T*) is the shortest path length between nodes *s* and *t* in the network. The statistical significance of the proximity is obtained by comparing *P* (*S*,*T*) to the distribution of proximity values of 1,000 random selections of two sets of genes with size and degree distribution similar to *S* and *T*.

### Analysis of gene expression and perturbation parameters

The perturbation signatures of genes in the hallmark modules are retrieved from the CMap database ([https://clue.io/](https://clue.io/)) for the MCF7 cell line after treatment with all drugs in the CMap database. These signatures reflect the perturbation of the gene expression profile in the hallmark modules caused by the treatment with that particular drug relative to a reference population, which comprises all other treatments in the same experimental plate [^87]. For drugs having more than one experimental instance (such as time of exposure, cell line and dose), we first select the highest dose to ensure a sufficiently strong perturbational signal, and then choose the instance with the highest distil\_cc\_q75 value (75th quantile of pairwise Spearman correlations in landmark genes; [https://clue.io/connectopedia/glossary/](https://clue.io/connectopedia/glossary/)).

### pAGE metric

The network medicine framework relies on undirected protein interactions, which capture a drug’s ability to perturb disease module, but lack information about the direction of the induced change, or whether a drug-induced perturbation is beneficial or detrimental for the studied phenotype. To overcome this limitation, we introduce the pAGE metric, which quantifies whether a drug’s impact on gene expression reinforces or counteracts documented age-related shifts. The metric is defined in three steps: (i) We define the longevity vector $\Gamma ={\left\{{\sigma }_{g}\right\}}_{g\in \Lambda }$, which encodes the age-induced expression change of 2,025 genes, where *σ* <sub><i>g</i></sub>  = +1 for 995 genes that are upregulated with age according to the OpenGenes database and *σ* <sub><i>g</i></sub>  = −1 for the 1,030 genes that are downregulated with age. (ii) We define a drug’s perturbation signature $\Theta ={\left\{{\sigma }_{g}^{{\prime} }\right\}}_{g\in \Lambda }$, for a set of genes $\Lambda$, capturing each gene’s changes in expression following exposure to the drug according to the CMap [^87]. Specifically, ${\sigma }_{g}^{{\prime} }\in \left\{-\mathrm{1,0},+1\right\}$ in $\Theta$ indicates whether drug exposure decreases (${\sigma }_{{g}^{{\prime} }}=\,-1$), leaves unchanged (${\sigma }_{{g}^{{\prime} }}=\,0$) or increases (${\sigma }_{{g}^{{\prime} }}=\,+1$) expression of gene $g$. (iii) Finally, to assess the alignment between a drug’s perturbation profile $\Gamma$ and the longevity vector $\Theta$, we introduce the pAGE measure, defined as in equation ([3](https://www.nature.com/articles/s43587-026-01161-8#Equ3)):

 $p A G E = - \frac{1}{\left|\right. \Lambda_{\emptyset} \left|\right.} \sum_{i \in \Lambda} \sigma_{i} \sigma_{i}^{′} ,$ 
$$
{\rm{pAGE}}=\,-\frac{1}{|{\Lambda }_{\varnothing }|}{\sum }_{i\in \Lambda }{\sigma }_{i}{\sigma }_{i}^{{\prime} },
$$

(3)

where ${\Lambda }_{\varnothing }=\left\{{i|}{\sigma }_{i}{\sigma }_{i}^{{\prime} }\ne 0\right\}$ is a normalization factor that constrains pAGE to vary between −1 and +1. Whenever a drug’s induced expression changes match an age-related directional shift (${\sigma }_{i}$ and ${\sigma }_{i}^{\prime}$ share the same sign), the term ${\sigma }_{i}{\sigma }_{i}^{\prime}$ is positive, pushing pAGE toward negative values. Conversely, if the drug induces downregulation of a gene that is typically upregulated with age, it turns ${\sigma }_{i}{\sigma }_{i}^{\prime}$ negative, increasing pAGE. Thus, pAGE > 0 indicates that a drug attenuates age-related expression changes (pro-longevity compound), whereas pAGE < 0 implies that it may exacerbate them (age-accelerating compound). The statistical significance of the pAGE value is evaluated by comparing it to a control group of random drug signatures (Supplementary Section [VIII](https://www.nature.com/articles/s43587-026-01161-8#MOESM1)).

### Aging-associated genes and gene expression signatures

The aging genes associated with each hallmark of aging were obtained from the OpenGenes database ([https://open-genes.com/download/](https://open-genes.com/download/)). Details of the curation process are provided in ref. [^25], on the OpenGenes website ([https://open-genes.com/about/](https://open-genes.com/about/)) and in Supplementary Section [I](https://www.nature.com/articles/s43587-026-01161-8#MOESM1). To construct the longevity vector and compute pAGE (equation ([3](https://www.nature.com/articles/s43587-026-01161-8#Equ3))), we used age-associated gene expression signatures retrieved from OpenGenes, which manually curates data from studies on the genetics of aging and longevity. These studies include: (i) gene expression changes (mRNA or protein levels increasing or decreasing with age), (ii) protein activity changes (alterations in functional activity, activation or inhibition, enzymatic activity or binding affinity) and (iii) protein modifications and localization (posttranslational modifications, changes in subcellular localization or secretion levels). Our analysis incorporated studies across all tissues and cell types, requiring the data to be derived from human samples and that the reported signatures be statistically significant (*P* value < 0.01). Tissue-specific analyses can be performed by filtering the interactome to include only proteins expressed in the tissue of interest [^88].

### Gene–disease associations

By surveying over 120 databases with gene–disease associations, we selected those that (i) were not compiled from other data sources, and (ii) provided at least one kind of evidence type classified as strong (functional evidence using an experimental essay), weak (genome-wide association study (GWAS) evidence but no experimental validation), inferred (relying on bioinformatics or single-nucleotide polymorphisms from imputation in GWAS) or not compatible ((I)ncRNA, miRNA and other transcripts with or without experimental validation). For each database, we kept the disease name, HGNC-converted gene names (HUGO Gene Nomenclature Committee) and evidence level. Finally, we combined the following data sources: GWAS from ClinGen, ClinVar, CTD, Disease Enhancer, DisGeNET, GWAS Catalog, HMDD45, lncBook, LncRNA disease, LOVD, Monarch, OMIM, Orphanet, PheGenI and PsyGeNet. All types of association were used in this study.

### Statistics and reproducibility

No statistical method was used to predetermine sample size. No data were excluded from the analyses. The statistical method used for each mesurment is described in the relevant section in [Methods](https://www.nature.com/articles/s43587-026-01161-8#Sec23) and in [Supplementary Information](https://www.nature.com/articles/s43587-026-01161-8#MOESM1).

### Reporting summary

Further information on research design is available in the [Nature Portfolio Reporting Summary](https://www.nature.com/articles/s43587-026-01161-8#MOESM2) linked to this article.

## Data availability

All data supporting the findings of this study are available on GitHub ([https://github.com/BnayaGross/Longevity-module/](https://github.com/BnayaGross/Longevity-module/)) and within the paper and its [Supplementary Information](https://www.nature.com/articles/s43587-026-01161-8#MOESM1).

## Code availability

The code used to produce the results and figures in the study is published on GitHub ([https://github.com/BnayaGross/Longevity-module/](https://github.com/BnayaGross/Longevity-module/)). An open-source Python package is available at [https://github.com/BnayaGross/sharp-aging/](https://github.com/BnayaGross/sharp-aging/).

## References

## Acknowledgements

A.-L.B is supported by the European Union’s Horizon 2020 research and innovation program under grant agreement no. 810115—DYNASNET. J.L. is supported in part by National Institutes of Health grants R01 HL155107, R01 HL166137 and U01 HG007691; American Heart Association grants 957729 and AHA24MERIT 1185447; and EU Horizon 2021 grant 101057619 (RePO4EU). B.G. acknowledges the support of the Fulbright Postdoctoral Fellowship Program. We thank F. Nasirian for helpful discussions.

## Funding

Open access funding provided by Central European University Private University.

## Ethics declarations

### Competing interests

A.-L.B and J.L. are founders of Scipher Medicine, which applies network medicine strategies to biomarker development and personalized drug selection. B.G., J.E. and V.N.G. declare no competing interests.

## Peer review

### Peer review information

*Nature Aging* thanks Jan Gruber and the other, anonymous, reviewer(s) for their contribution to the peer review of this work.

## Additional information

**Publisher’s note** Springer Nature remains neutral with regard to jurisdictional claims in published maps and institutional affiliations.

## Extended data

### Extended Data Fig. 1 Jaccard index of the hallmarks of aging.

**a**, The Jaccard index measures the interconnectivity between pairs of hallmarks of aging. The hallmarks of Genomic instability, cell senescence, and Telomere attrition show the highest Jaccard value (center) while the Changes in the extracellular matrix structure hallmark show almost no overlap with the other hallmarks. **b**, The p-value of the Jaccard index are statistically significant (p-value < 0.05) between overlapping hallmarks.

### Extended Data Fig. 2 Separation of the hallmarks of aging.

The network-based separation measurement between pairs of hallmarks of aging. While the separation of the Changes in the extracellular matrix structure hallmark is positive with the other hallmarks (S > 0) many other pairs of the hallmarks are overlapping (S < 0), indicating that the hallmark modules reside in the same network neighborhood, together forming the longevity module.

### Extended Data Fig. 3 Proximity of the hallmarks of aging.

The z-score of the network-based proximity measurement of most hallmarks show statistically significant proximity (z-score < −1.96) except for the Changes in the extracellular matrix structure hallmark, indicating that the hallmark modules reside in the same network neighborhood, together forming the longevity module.

## Supplementary information

### Supplementary Information (download PDF )

Supplementary Sections I–XVIII, Figs. 1–22 and Tables 1–14.

### Reporting Summary (download PDF )

## Rights and permissions

**Open Access** This article is licensed under a Creative Commons Attribution 4.0 International License, which permits use, sharing, adaptation, distribution and reproduction in any medium or format, as long as you give appropriate credit to the original author(s) and the source, provide a link to the Creative Commons licence, and indicate if changes were made. The images or other third party material in this article are included in the article’s Creative Commons licence, unless indicated otherwise in a credit line to the material. If material is not included in the article’s Creative Commons licence and your intended use is not permitted by statutory regulation or exceeds the permitted use, you will need to obtain permission directly from the copyright holder. To view a copy of this licence, visit [http://creativecommons.org/licenses/by/4.0/](http://creativecommons.org/licenses/by/4.0/).

[^1]: Magalhães, J. P. D., Curado, J. & Church, G. M. Meta-analysis of age-related gene expression profiles identifies common signatures of aging. *Bioinformatics* **25**, 875–881 (2009).

[Article](https://doi.org/10.1093%2Fbioinformatics%2Fbtp073) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=19189975) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2732303) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Meta-analysis%20of%20age-related%20gene%20expression%20profiles%20identifies%20common%20signatures%20of%20aging&journal=Bioinformatics&doi=10.1093%2Fbioinformatics%2Fbtp073&volume=25&pages=875-881&publication_year=2009&author=Magalh%C3%A3es%2CJPD&author=Curado%2CJ&author=Church%2CGM)

[^2]: Newman, A. B. et al. A meta-analysis of four genome-wide association studies of survival to age 90 years or older: the Cohorts for Heart and Aging Research in Genomic Epidemiology Consortium. *J. Gerontol. A Biol. Sci. Med. Sci.* **65**, 478–487 (2010).

[Article](https://doi.org/10.1093%2Fgerona%2Fglq028) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=20304771) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2854887) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=A%20meta-analysis%20of%20four%20genome-wide%20association%20studies%20of%20survival%20to%20age%2090%20years%20or%20older%3A%20the%20Cohorts%20for%20Heart%20and%20Aging%20Research%20in%20Genomic%20Epidemiology%20Consortium&journal=J.%20Gerontol.%20A%20Biol.%20Sci.%20Med.%20Sci.&doi=10.1093%2Fgerona%2Fglq028&volume=65&pages=478-487&publication_year=2010&author=Newman%2CAB)

[^3]: Timmers, P. R. et al. Genomics of 1 million parent lifespans implicates novel pathways and common diseases and distinguishes survival chances. *eLife* **8**, e39856 (2019).

[Article](https://doi.org/10.7554%2FeLife.39856) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=30642433) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC6333444) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Genomics%20of%201%20million%20parent%20lifespans%20implicates%20novel%20pathways%20and%20common%20diseases%20and%20distinguishes%20survival%20chances&journal=eLife&doi=10.7554%2FeLife.39856&volume=8&publication_year=2019&author=Timmers%2CPR)

[^4]: Timmers, P. R. H. J., Wilson, J. F., Joshi, P. K. & Deelen, J. Multivariate genomic scan implicates novel loci and haem metabolism in human ageing. *Nat. Commun.* **11**, 3570 (2020).

[Article](https://doi.org/10.1038%2Fs41467-020-17312-3) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BB3cXhsVaksbzJ) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=32678081) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC7366647) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Multivariate%20genomic%20scan%20implicates%20novel%20loci%20and%20haem%20metabolism%20in%20human%20ageing.&journal=Nat.%20Commun.&doi=10.1038%2Fs41467-020-17312-3&volume=11&publication_year=2020&author=Timmers%2CPRHJ&author=Wilson%2CJF&author=Joshi%2CPK&author=Deelen%2CJ)

[^5]: Zenin, A. et al. Identification of 12 genetic loci associated with human healthspan. *Commun. Biol.* **2**, 41 (2019).

[Article](https://doi.org/10.1038%2Fs42003-019-0290-0) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=30729179) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC6353874) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Identification%20of%2012%20genetic%20loci%20associated%20with%20human%20healthspan.&journal=Commun.%20Biol.&doi=10.1038%2Fs42003-019-0290-0&volume=2&publication_year=2019&author=Zenin%2CA)

[^6]: Guarente, L. & Kenyon, C. Genetic pathways that regulate ageing in model organisms. *Nature* **408**, 255–262 (2000).

[Article](https://doi.org/10.1038%2F35041700) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BD3cXotFGksrs%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=11089983) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Genetic%20pathways%20that%20regulate%20ageing%20in%20model%20organisms.&journal=Nature&doi=10.1038%2F35041700&volume=408&pages=255-262&publication_year=2000&author=Guarente%2CL&author=Kenyon%2CC)

[^7]: Mitchell, S. J., Scheibye-Knudsen, M., Longo, D. L. & de Cabo, R. Animal models of aging research: implications for human aging and age-related diseases. *Annu. Rev. Anim. Biosci.* **3**, 283–303 (2015).

[Article](https://doi.org/10.1146%2Fannurev-animal-022114-110829) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC2MXlvVWmtLg%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=25689319) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Animal%20models%20of%20aging%20research%3A%20implications%20for%20human%20aging%20and%20age-related%20diseases&journal=Annu.%20Rev.%20Anim.%20Biosci.&doi=10.1146%2Fannurev-animal-022114-110829&volume=3&pages=283-303&publication_year=2015&author=Mitchell%2CSJ&author=Scheibye-Knudsen%2CM&author=Longo%2CDL&author=Cabo%2CR)

[^8]: López-Otín, C., Blasco, M. A., Partridge, L., Serrano, M. & Kroemer, G. The hallmarks of aging. *Cell* **153**, 1194–1217 (2013).

[Article](https://doi.org/10.1016%2Fj.cell.2013.05.039) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=23746838) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3836174) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20hallmarks%20of%20aging&journal=Cell&doi=10.1016%2Fj.cell.2013.05.039&volume=153&pages=1194-1217&publication_year=2013&author=L%C3%B3pez-Ot%C3%ADn%2CC&author=Blasco%2CMA&author=Partridge%2CL&author=Serrano%2CM&author=Kroemer%2CG)

[^9]: López-Otín, C., Blasco, M. A., Partridge, L., Serrano, M. & Kroemer, G. Hallmarks of aging: an expanding universe. *Cell* **186**, 243–278 (2023).

[Article](https://doi.org/10.1016%2Fj.cell.2022.11.001) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=36599349) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Hallmarks%20of%20aging%3A%20an%20expanding%20universe&journal=Cell&doi=10.1016%2Fj.cell.2022.11.001&volume=186&pages=243-278&publication_year=2023&author=L%C3%B3pez-Ot%C3%ADn%2CC&author=Blasco%2CMA&author=Partridge%2CL&author=Serrano%2CM&author=Kroemer%2CG)

[^10]: Pun, F. W. et al. Hallmarks of aging-based dual-purpose disease and age-associated targets predicted using PandaOmics AI-powered discovery engine. *Aging* **14**, 2475–2506 (2022).

[Article](https://doi.org/10.18632%2Faging.203960) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=35347083) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC9004567) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Hallmarks%20of%20aging-based%20dual-purpose%20disease%20and%20age-associated%20targets%20predicted%20using%20PandaOmics%20AI-powered%20discovery%20engine&journal=Aging&doi=10.18632%2Faging.203960&volume=14&publication_year=2022&author=Pun%2CFW)

[^11]: Finch, C. E. & Ruvkun, G. The genetics of aging. *Annu. Rev. Genom. Hum. Genet.* **2**, 435–462 (2001).

[Article](https://doi.org/10.1146%2Fannurev.genom.2.1.435) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BD3MXos1anurk%3D) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20genetics%20of%20aging&journal=Annu.%20Rev.%20Genom.%20Hum.%20Genet.&doi=10.1146%2Fannurev.genom.2.1.435&volume=2&pages=435-462&publication_year=2001&author=Finch%2CCE&author=Ruvkun%2CG)

[^12]: Finch, C. E. & Tanzi, R. E. Genetics of aging. *Science* **278**, 407–411 (1997).

[Article](https://doi.org/10.1126%2Fscience.278.5337.407) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DyaK2sXmslGltrc%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=9334291) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Genetics%20of%20aging&journal=Science&doi=10.1126%2Fscience.278.5337.407&volume=278&pages=407-411&publication_year=1997&author=Finch%2CCE&author=Tanzi%2CRE)

[^13]: Brooks-Wilson, A. R. Genetics of healthy aging and longevity. *Hum. Genet.* **132**, 1323–1338 (2013).

[Article](https://link.springer.com/doi/10.1007/s00439-013-1342-z) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC3sXht1OqurfP) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=23925498) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3898394) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Genetics%20of%20healthy%20aging%20and%20longevity&journal=Hum.%20Genet.&doi=10.1007%2Fs00439-013-1342-z&volume=132&pages=1323-1338&publication_year=2013&author=Brooks-Wilson%2CAR)

[^14]: Alon, U. *Systems Medicine: Physiological Circuits and the Dynamics of Disease* (CRC Press, 2023).

[^15]: Barzilai, N., Huffman, D. M., Muzumdar, R. H. & Bartke, A. The critical role of metabolic pathways in aging. *Diabetes* **61**, 1315–1322 (2012).

[Article](https://doi.org/10.2337%2Fdb11-1300) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC38XotlGqtLo%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=22618766) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3357299) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20critical%20role%20of%20metabolic%20pathways%20in%20aging&journal=Diabetes&doi=10.2337%2Fdb11-1300&volume=61&pages=1315-1322&publication_year=2012&author=Barzilai%2CN&author=Huffman%2CDM&author=Muzumdar%2CRH&author=Bartke%2CA)

[^16]: Wang, K. et al. Epigenetic regulation of aging: implications for interventions of aging and diseases. *Signal Transduct. Target. Ther.* **7**, 374 (2022).

[Article](https://doi.org/10.1038%2Fs41392-022-01211-8) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BB38XivVaqsLnK) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=36336680) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC9637765) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Epigenetic%20regulation%20of%20aging%3A%20implications%20for%20interventions%20of%20aging%20and%20diseases&journal=Signal%20Transduct.%20Target.%20Ther.&doi=10.1038%2Fs41392-022-01211-8&volume=7&publication_year=2022&author=Wang%2CK)

[^17]: Fong, S. et al. Principal componentbased clinical aging clocks identify signatures of healthy aging and targets for clinical intervention. *Nat. Aging* **4**, 1137–1152 (2024).

[Article](https://doi.org/10.1038%2Fs43587-024-00646-8) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=38898237) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC11333290) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Principal%20componentbased%20clinical%20aging%20clocks%20identify%20signatures%20of%20healthy%20aging%20and%20targets%20for%20clinical%20intervention&journal=Nat.%20Aging&doi=10.1038%2Fs43587-024-00646-8&volume=4&pages=1137-1152&publication_year=2024&author=Fong%2CS)

[^18]: Menche, J. et al. Uncovering disease-disease relationships through the incomplete interactome. *Science* **347**, 1257601 (2015).

[Article](https://doi.org/10.1126%2Fscience.1257601) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=25700523) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4435741) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Uncovering%20disease-disease%20relationships%20through%20the%20incomplete%20interactome&journal=Science&doi=10.1126%2Fscience.1257601&volume=347&publication_year=2015&author=Menche%2CJ)

[^19]: Barabási, A. -L., Gulbahce, N. & Loscalzo, J. Network medicine: a network-based approach to human disease. *Nat. Rev. Genet.* **12**, 56–68 (2011).

[Article](https://doi.org/10.1038%2Fnrg2918) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=21164525) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3140052) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Network%20medicine%3A%20a%20network-based%20approach%20to%20human%20disease&journal=Nat.%20Rev.%20Genet.&doi=10.1038%2Fnrg2918&volume=12&pages=56-68&publication_year=2011&author=Barab%C3%A1si%2CA-L&author=Gulbahce%2CN&author=Loscalzo%2CJ)

[^20]: Han, J. -D. J. Understanding biological functions through molecular networks. *Cell Res.* **18**, 224–237 (2008).

[Article](https://doi.org/10.1038%2Fcr.2008.16) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BD1cXhs1Omtb8%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=18227860) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Understanding%20biological%20functions%20through%20molecular%20networks&journal=Cell%20Res.&doi=10.1038%2Fcr.2008.16&volume=18&pages=224-237&publication_year=2008&author=Han%2CJ-DJ)

[^21]: Cohen, A. A. et al. A complex systems approach to aging biology. *Nat. Aging* **2**, 580–591 (2022).

[Article](https://doi.org/10.1038%2Fs43587-022-00252-6) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=37117782) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC12007111) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=A%20complex%20systems%20approach%20to%20aging%20biology&journal=Nat.%20Aging&doi=10.1038%2Fs43587-022-00252-6&volume=2&pages=580-591&publication_year=2022&author=Cohen%2CAA)

[^22]: Guney, E., Menche, J., Vidal, M. & Barábasi, A. -L. Network-based in silico drug efficacy screening. *Nat. Commun.* **7**, 10331 (2016).

[Article](https://doi.org/10.1038%2Fncomms10331) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC28XhslOrsL4%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=26831545) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4740350) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Network-based%20in%20silico%20drug%20efficacy%20screening&journal=Nat.%20Commun.&doi=10.1038%2Fncomms10331&volume=7&publication_year=2016&author=Guney%2CE&author=Menche%2CJ&author=Vidal%2CM&author=Bar%C3%A1basi%2CA-L)

[^23]: Guthrie, J. et al. AutoCore: A network-based definition of the core module of human autoimmunity and autoinflammation. *Sci. Adv.* **9**, eadg6375 (2023).

[Article](https://doi.org/10.1126%2Fsciadv.adg6375) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BB3sXhvFSqtbjE) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=37656781) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC10848965) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=AutoCore%3A%20A%20network-based%20definition%20of%20the%20core%20module%20of%20human%20autoimmunity%20and%20autoinflammation&journal=Sci.%20Adv.&doi=10.1126%2Fsciadv.adg6375&volume=9&publication_year=2023&author=Guthrie%2CJ)

[^24]: Morselli Gysi, D. et al. Network medicine framework for identifying drug-repurposing opportunities for COVID-19. *Proc. Natl Acad. Sci. USA* **118**, e2025581118 (2021).

[Article](https://doi.org/10.1073%2Fpnas.2025581118) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=33906951) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC8126852) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Network%20medicine%20framework%20for%20identifying%20drug-repurposing%20opportunities%20for%20COVID-19&journal=Proc.%20Natl%20Acad.%20Sci.%20USA&doi=10.1073%2Fpnas.2025581118&volume=118&publication_year=2021&author=Morselli%20Gysi%2CD)

[^25]: Rafikova, E. et al. Open Genes—a new comprehensive database of human genes associated with aging and longevity. *Nucleic Acids Res.* **52**, D950–D962 (2024).

[Article](https://doi.org/10.1093%2Fnar%2Fgkad712) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BB2cXivVamtrfM) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=37665017) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC10768108) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Open%20Genes%E2%80%94a%20new%20comprehensive%20database%20of%20human%20genes%20associated%20with%20aging%20and%20longevity&journal=Nucleic%20Acids%20Res.&doi=10.1093%2Fnar%2Fgkad712&volume=52&pages=D950-D962&publication_year=2024&author=Rafikova%2CE)

[^26]: Paul, J. Étude comparative de la distribution florale dans une portion des Alpes et des Jura. *Bull. Soc. Vaudoise Sci. Nat.* **37**, 547–579 (1901).

[Google Scholar](http://scholar.google.com/scholar_lookup?&title=%C3%89tude%20comparative%20de%20la%20distribution%20florale%20dans%20une%20portion%20des%20Alpes%20et%20des%20Jura&journal=Bull.%20Soc.%20Vaudoise%20Sci.%20Nat.&volume=37&pages=547-579&publication_year=1901&author=Paul%2CJ)

[^27]: Kanehisa, M. & Goto, S. KEGG: Kyoto Encyclopedia of Genes and Genomes. *Nucleic Acids Res.* **28**, 27–30 (2000).

[Article](https://doi.org/10.1093%2Fnar%2F28.1.27) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BD3cXhvVGqu74%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=10592173) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC102409) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=KEGG%3A%20Kyoto%20Encyclopedia%20of%20Genes%20and%20Genomes&journal=Nucleic%20Acids%20Res.&doi=10.1093%2Fnar%2F28.1.27&volume=28&pages=27-30&publication_year=2000&author=Kanehisa%2CM&author=Goto%2CS)

[^28]: Jia, K. et al. An analysis of aging-related genes derived from the Genotype Tissue Expression project (GTEx). *Cell Death Discov.* **4**, 26 (2018).

[Article](https://doi.org/10.1038%2Fs41420-018-0093-y) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=30155276) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC6102484) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=An%20analysis%20of%20aging-related%20genes%20derived%20from%20the%20Genotype%20Tissue%20Expression%20project%20%28GTEx%29&journal=Cell%20Death%20Discov.&doi=10.1038%2Fs41420-018-0093-y&volume=4&publication_year=2018&author=Jia%2CK)

[^29]: Peters, M. J. et al. The transcriptional landscape of age in human peripheral blood. *Nat. Commun.* **6**, 8570 (2015).

[Article](https://doi.org/10.1038%2Fncomms9570) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC2MXhslSmt7zL) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=26490707) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4639797) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20transcriptional%20landscape%20of%20age%20in%20human%20peripheral%20blood&journal=Nat.%20Commun.&doi=10.1038%2Fncomms9570&volume=6&publication_year=2015&author=Peters%2CMJ)

[^30]: Aging Atlas Consortium. Aging Atlas: a multi-omics database for aging biology. *Nucleic Acids Res.* **49**, D825–D830 (2021).

[^31]: Freitas, A. A., Vasieva, O. & de Magalhães, J. P. A data mining approach for classifying DNA repair genes into ageing-related or non-ageing-related. *BMC Genomics* **12**, 27 (2011).

[Article](https://link.springer.com/doi/10.1186/1471-2164-12-27) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC3MXhtVSitLw%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=21226956) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3031233) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=A%20data%20mining%20approach%20for%20classifying%20DNA%20repair%20genes%20into%20ageing-related%20or%20non-ageing-related&journal=BMC%20Genomics&doi=10.1186%2F1471-2164-12-27&volume=12&publication_year=2011&author=Freitas%2CAA&author=Vasieva%2CO&author=Magalh%C3%A3es%2CJP)

[^32]: Kipling, D., Davis, T., Ostler, E. L. & Faragher, R. G. A. What can progeroid syndromes tell us about human aging? *Science* **305**, 1426–1431 (2004).

[Article](https://doi.org/10.1126%2Fscience.1102587) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BD2cXntFartLc%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=15353794) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=What%20can%20progeroid%20syndromes%20tell%20us%20about%20human%20aging%3F&journal=Science&doi=10.1126%2Fscience.1102587&volume=305&pages=1426-1431&publication_year=2004&author=Kipling%2CD&author=Davis%2CT&author=Ostler%2CEL&author=Faragher%2CRGA)

[^33]: Burla, R., Torre, M. L., Merigliano, C., Verni, F. & Saggio, I. Genomic instability and DNA replication defects in progeroid syndromes. *Nucleus* **9**, 368–379 (2018).

[Article](https://doi.org/10.1080%2F19491034.2018.1476793) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC1cXhtF2gs7bO) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=29936894) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC7000143) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Genomic%20instability%20and%20DNA%20replication%20defects%20in%20progeroid%20syndromes&journal=Nucleus&doi=10.1080%2F19491034.2018.1476793&volume=9&pages=368-379&publication_year=2018&author=Burla%2CR&author=Torre%2CML&author=Merigliano%2CC&author=Verni%2CF&author=Saggio%2CI)

[^34]: Sharma, A. et al. A disease module in the interactome explains disease heterogeneity, drug response and captures novel pathways and genes in asthma. *Human Mol. Genet.* **24**, 3005–3020 (2015).

[Article](https://doi.org/10.1093%2Fhmg%2Fddv001) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC2MXhsVyhs7jO) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=A%20disease%20module%20in%20the%20interactome%20explains%20disease%20heterogeneity%2C%20drug%20response%20and%20captures%20novel%20pathways%20and%20genes%20in%20asthma&journal=Human%20Mol.%20Genet.&doi=10.1093%2Fhmg%2Fddv001&volume=24&pages=3005-3020&publication_year=2015&author=Sharma%2CA)

[^35]: Do Valle, I. F. et al. Network medicine framework shows that proximity of polyphenol targets and disease proteins predicts therapeutic effects of polyphenols. *Nat. Food* **2**, 143–155 (2021).

[Article](https://doi.org/10.1038%2Fs43016-021-00243-7) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=37117448) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Network%20medicine%20framework%20shows%20that%20proximity%20of%20polyphenol%20targets%20and%20disease%20proteins%20predicts%20therapeutic%20effects%20of%20polyphenols&journal=Nat.%20Food&doi=10.1038%2Fs43016-021-00243-7&volume=2&pages=143-155&publication_year=2021&author=Valle%2CIF)

[^36]: Spector, J. et al. Transformers enhance the predictive power of network medicine. Preprint at *medRxiv* [https://doi.org/10.1101/2025.01.27.25321204](https://doi.org/10.1101/2025.01.27.25321204) (2025).

[^37]: Kersting, J. et al. A nextflow pipeline for network-based disease module identification and validation. In *RExPO24 Conference* (REPO4EU, 2024).

[^38]: Wishart, D. S. et al. DrugBank: a comprehensive resource for in silico drug discovery and exploration. *Nucleic Acids Res.* **34**, D668–D672 (2006).

[Article](https://doi.org/10.1093%2Fnar%2Fgkj067) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BD28XisFOrsw%3D%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=16381955) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC1347430) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=DrugBank%3A%20a%20comprehensive%20resource%20for%20in%20silico%20drug%20discovery%20and%20exploration&journal=Nucleic%20Acids%20Res.&doi=10.1093%2Fnar%2Fgkj067&volume=34&pages=D668-D672&publication_year=2006&author=Wishart%2CDS)

[^39]: Patten, J. J. et al. Identification of potent inhibitors of SARS-CoV-2 infection by combined pharmacological evaluation and cellular network prioritization. *iScience* **25**, 104925 (2022).

[Article](https://doi.org/10.1016%2Fj.isci.2022.104925) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BB38XisVCrsLrO) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=35992305) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC9374494) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Identification%20of%20potent%20inhibitors%20of%20SARS-CoV-2%20infection%20by%20combined%20pharmacological%20evaluation%20and%20cellular%20network%20prioritization&journal=iScience&doi=10.1016%2Fj.isci.2022.104925&volume=25&publication_year=2022&author=Patten%2CJJ)

[^40]: Hata, A. N. et al. Synergistic activity and heterogeneous acquired resistance of combined MDM2 and MEK inhibition in KRAS mutant cancers. *Oncogene* **36**, 6581–6591 (2017).

[Article](https://doi.org/10.1038%2Fonc.2017.258) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC2sXht1yhs7jN) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=28783173) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC5700857) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Synergistic%20activity%20and%20heterogeneous%20acquired%20resistance%20of%20combined%20MDM2%20and%20MEK%20inhibition%20in%20KRAS%20mutant%20cancers&journal=Oncogene&doi=10.1038%2Fonc.2017.258&volume=36&pages=6581-6591&publication_year=2017&author=Hata%2CAN)

[^41]: Fu, C. et al. SRT1720 protects against CSE-induced cellular senescence via accelerates of FOXO3-PINK1-mediated mitophagy. Preprint at *Res. Sq.* [https://doi.org/10.21203/rs.3.rs-482635/v1](https://doi.org/10.21203/rs.3.rs-482635/v1) (2021).

[^42]: Cornelius, C., Perrotta, R., Graziano, A., Calabrese, E. J. & Calabrese, V. Stress responses, vitagenes and hormesis as critical determinants in aging and longevity: mitochondria as a ‘chi’. *Immun. Ageing* **10**, 15 (2013).

[Article](https://link.springer.com/doi/10.1186/1742-4933-10-15) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=23618527) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3644272) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Stress%20responses%2C%20vitagenes%20and%20hormesis%20as%20critical%20determinants%20in%20aging%20and%20longevity%3A%20mitochondria%20as%20a%20%E2%80%98chi%E2%80%99&journal=Immun.%20Ageing&doi=10.1186%2F1742-4933-10-15&volume=10&publication_year=2013&author=Cornelius%2CC&author=Perrotta%2CR&author=Graziano%2CA&author=Calabrese%2CEJ&author=Calabrese%2CV)

[^43]: Kourtis, N. & Tavernarakis, N. Cellular stress response pathways and ageing: intricate molecular relationships. *EMBO J.* **30**, 2520–2531 (2011).

[Article](https://doi.org/10.1038%2Femboj.2011.162) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC3MXmtF2ltbY%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=21587205) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3155297) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Cellular%20stress%20response%20pathways%20and%20ageing%3A%20intricate%20molecular%20relationships&journal=EMBO%20J.&doi=10.1038%2Femboj.2011.162&volume=30&pages=2520-2531&publication_year=2011&author=Kourtis%2CN&author=Tavernarakis%2CN)

[^44]: Miller, R. A. et al. An aging interventions testing program: study design and interim report. *Aging Cell* **6**, 565–575 (2007).

[Article](https://doi.org/10.1111%2Fj.1474-9726.2007.00311.x) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BD2sXptlyksL8%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=17578509) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=An%20aging%20interventions%20testing%20program%3A%20study%20design%20and%20interim%20report&journal=Aging%20Cell&doi=10.1111%2Fj.1474-9726.2007.00311.x&volume=6&pages=565-575&publication_year=2007&author=Miller%2CRA)

[^45]: Guarente, L., Sinclair, D. A. & Kroemer, G. Human trials exploring anti-aging medicines. *Cell Metab.* **36**, 354–376 (2023).

[^46]: Biswal, S. S. et al. Glutathione oxidation and mitochondrial depolarization as mechanisms of nordihydroguaiaretic acid-induced apoptosis in lipoxygenase-deficient FL5. 12 cells. *Toxicol. Sci.* **53**, 77–83 (2000).

[Article](https://doi.org/10.1093%2Ftoxsci%2F53.1.77) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BD3cXltFKluw%3D%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=10653524) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Glutathione%20oxidation%20and%20mitochondrial%20depolarization%20as%20mechanisms%20of%20nordihydroguaiaretic%20acid-induced%20apoptosis%20in%20lipoxygenase-deficient%20FL5.%2012%20cells&journal=Toxicol.%20Sci.&doi=10.1093%2Ftoxsci%2F53.1.77&volume=53&pages=77-83&publication_year=2000&author=Biswal%2CSS)

[^47]: Shindyapina, A. V. et al. Molecular signatures of longevity identify com- pounds that extend mouse lifespan and healthspan. Preprint at *bioRxiv* [https://doi.org/10.1101/2025.06.26.661776](https://doi.org/10.1101/2025.06.26.661776) (2025).

[^48]: Patel, N. U., Shukla, S., Zaki, J. & Feldman, S. R. Oxymetazoline hydrochloride cream for facial erythema associated with rosacea. *Expert Rev. Clin. Pharmacol.* **10**, 1049–1054 (2017).

[Article](https://doi.org/10.1080%2F17512433.2017.1370370) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC2sXhsVWgs7zF) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=28837365) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Oxymetazoline%20hydrochloride%20cream%20for%20facial%20erythema%20associated%20with%20rosacea&journal=Expert%20Rev.%20Clin.%20Pharmacol.&doi=10.1080%2F17512433.2017.1370370&volume=10&pages=1049-1054&publication_year=2017&author=Patel%2CNU&author=Shukla%2CS&author=Zaki%2CJ&author=Feldman%2CSR)

[^49]: Doze, V. A. et al. Long-term α1A-adrenergic receptor stimulation improves synaptic plasticity, cognitive function, mood, and longevity. *Mol. Pharmacol.* **80**, 747–758 (2011).

[Article](https://doi.org/10.1124%2Fmol.111.073734) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC3MXhs1ansbnO) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=21791575) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3187532) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Long-term%20%CE%B11A-adrenergic%20receptor%20stimulation%20improves%20synaptic%20plasticity%2C%20cognitive%20function%2C%20mood%2C%20and%20longevity&journal=Mol.%20Pharmacol.&doi=10.1124%2Fmol.111.073734&volume=80&pages=747-758&publication_year=2011&author=Doze%2CVA)

[^50]: Lagunas-Rangel, F. A. G-protein-coupled receptors that influence lifespan of human and animal models. *Biogerontology* **23**, 1–19 (2022).

[Article](https://link.springer.com/doi/10.1007/s10522-021-09945-8) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=34860303) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=G-protein-coupled%20receptors%20that%20influence%20lifespan%20of%20human%20and%20animal%20models&journal=Biogerontology&doi=10.1007%2Fs10522-021-09945-8&volume=23&pages=1-19&publication_year=2022&author=Lagunas-Rangel%2CFA)

[^51]: Gensler, H. L. & Bernstein, H. DNA damage as the primary cause of aging. *Q. Rev. Biol.* **56**, 279–303 (1981).

[Article](https://doi.org/10.1086%2F412317) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DyaL3MXlvF2isL4%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=7031747) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=DNA%20damage%20as%20the%20primary%20cause%20of%20aging&journal=Q.%20Rev.%20Biol.&doi=10.1086%2F412317&volume=56&pages=279-303&publication_year=1981&author=Gensler%2CHL&author=Bernstein%2CH)

[^52]: Schumacher, B., Garinis, G. A. & Hoeijmakers, J. H. J. Age to survive: DNA damage and aging. *Trends Genet.* **24**, 77–85 (2008).

[Article](https://doi.org/10.1016%2Fj.tig.2007.11.004) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BD1cXhsVGmtr4%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=18192065) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Age%20to%20survive%3A%20DNA%20damage%20and%20aging&journal=Trends%20Genet.&doi=10.1016%2Fj.tig.2007.11.004&volume=24&pages=77-85&publication_year=2008&author=Schumacher%2CB&author=Garinis%2CGA&author=Hoeijmakers%2CJHJ)

[^53]: Pal, S. & Tyler, J. K. Epigenetics and aging. *Sci. Adv.* **2**, e1600584 (2016).

[Article](https://doi.org/10.1126%2Fsciadv.1600584) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=27482540) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4966880) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Epigenetics%20and%20aging&journal=Sci.%20Adv.&doi=10.1126%2Fsciadv.1600584&volume=2&publication_year=2016&author=Pal%2CS&author=Tyler%2CJK)

[^54]: Gems, D. & De Magalhães, J. P. The hoverfly and the wasp: a critique of the hallmarks of aging as a paradigm. *Ageing Res. Rev.* **70**, 101407 (2021).

[Article](https://doi.org/10.1016%2Fj.arr.2021.101407) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=34271186) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC7611451) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20hoverfly%20and%20the%20wasp%3A%20a%20critique%20of%20the%20hallmarks%20of%20aging%20as%20a%20paradigm&journal=Ageing%20Res.%20Rev.&doi=10.1016%2Fj.arr.2021.101407&volume=70&publication_year=2021&author=Gems%2CD&author=Magalh%C3%A3es%2CJP)

[^55]: Cheng, F., Kovács, I. A. & Barabási, A. -L. Network-based prediction of drug combinations. *Nat. Commun.* **10**, 1197 (2019).

[Article](https://doi.org/10.1038%2Fs41467-019-09186-x) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=30867426) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC6416394) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Network-based%20prediction%20of%20drug%20combinations&journal=Nat.%20Commun.&doi=10.1038%2Fs41467-019-09186-x&volume=10&publication_year=2019&author=Cheng%2CF&author=Kov%C3%A1cs%2CIA&author=Barab%C3%A1si%2CA-L)

[^56]: Fuentealba, M. et al. Using the drug-protein interactome to identify anti-ageing compounds for humans. *Plos Comput. Biol.* **15**, e1006639 (2019).

[Article](https://doi.org/10.1371%2Fjournal.pcbi.1006639) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=30625143) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC6342327) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Using%20the%20drug-protein%20interactome%20to%20identify%20anti-ageing%20compounds%20for%20humans&journal=Plos%20Comput.%20Biol.&doi=10.1371%2Fjournal.pcbi.1006639&volume=15&publication_year=2019&author=Fuentealba%2CM)

[^57]: Calvert, S. et al. A network pharmacology approach reveals new candidate caloric restriction mimetics in *C. elegans*. *Aging Cell* **15**, 256–266 (2016).

[Article](https://doi.org/10.1111%2Facel.12432) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC2MXitVansbnI) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=26676933) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=A%20network%20pharmacology%20approach%20reveals%20new%20candidate%20caloric%20restriction%20mimetics%20in%20C.%20elegans&journal=Aging%20Cell&doi=10.1111%2Facel.12432&volume=15&pages=256-266&publication_year=2016&author=Calvert%2CS)

[^58]: Dönertaş, H. M., Fuentealba Valenzuela, M., Partridge, L. & Thornton, J. M. Gene expression-based drug repurposing to target aging. *Aging Cell* **17**, e12819 (2018).

[Article](https://doi.org/10.1111%2Facel.12819) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=29959820) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC6156541) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Gene%20expression-based%20drug%20repurposing%20to%20target%20aging&journal=Aging%20Cell&doi=10.1111%2Facel.12819&volume=17&publication_year=2018&author=D%C3%B6nerta%C5%9F%2CHM&author=Fuentealba%20Valenzuela%2CM&author=Partridge%2CL&author=Thornton%2CJM)

[^59]: Goeminne, L. J. E. et al. Plasma protein-based organ-specific aging and mortality models unveil diseases as accelerated aging of organismal systems. *Cell Metab.* **37**, 205–222 (2024).

[Article](https://doi.org/10.1016%2Fj.cmet.2024.10.005) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=39488213) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Plasma%20protein-based%20organ-specific%20aging%20and%20mortality%20models%20unveil%20diseases%20as%20accelerated%20aging%20of%20organismal%20systems&journal=Cell%20Metab.&doi=10.1016%2Fj.cmet.2024.10.005&volume=37&pages=205-222&publication_year=2024&author=Goeminne%2CLJE)

[^60]: Lonsdale, J. et al. The genotype-tissue expression (GTEx) project. *Nat. Genet.* **45**, 580–585 (2013).

[Article](https://doi.org/10.1038%2Fng.2653) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC3sXotlGls74%3D) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20genotype-tissue%20expression%20%28GTEx%29%20project&journal=Nat.%20Genet.&doi=10.1038%2Fng.2653&volume=45&pages=580-585&publication_year=2013&author=Lonsdale%2CJ)

[^61]: Luck, K. et al. A reference map of the human binary protein interactome. *Nature* **580**, 402–408 (2020).

[Article](https://doi.org/10.1038%2Fs41586-020-2188-x) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BB3cXmslejurc%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=32296183) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC7169983) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=A%20reference%20map%20of%20the%20human%20binary%20protein%20interactome&journal=Nature&doi=10.1038%2Fs41586-020-2188-x&volume=580&pages=402-408&publication_year=2020&author=Luck%2CK)

[^62]: Das, J. & Yu, H. HINT: high-quality protein interactomes and their applications in understanding human disease. *BMC Syst. Biol.* **6**, 92 (2012).

[Article](https://link.springer.com/doi/10.1186/1752-0509-6-92) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=22846459) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3483187) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=HINT%3A%20high-quality%20protein%20interactomes%20and%20their%20applications%20in%20understanding%20human%20disease&journal=BMC%20Syst.%20Biol.&doi=10.1186%2F1752-0509-6-92&volume=6&publication_year=2012&author=Das%2CJ&author=Yu%2CH)

[^63]: Alanis-Lobato, G., Andrade-Navarro, M. A. & Schaefer, M. H. HIPPIE v2.0: enhancing meaningfulness and reliability of protein–protein interaction networks. *Nucleic Acids Res.* **45**, D408–D414 (2016).

[Article](https://doi.org/10.1093%2Fnar%2Fgkw985) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=27794551) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC5210659) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=HIPPIE%20v2.0%3A%20enhancing%20meaningfulness%20and%20reliability%20of%20protein%E2%80%93protein%20interaction%20networks&journal=Nucleic%20Acids%20Res.&doi=10.1093%2Fnar%2Fgkw985&volume=45&pages=D408-D414&publication_year=2016&author=Alanis-Lobato%2CG&author=Andrade-Navarro%2CMA&author=Schaefer%2CMH)

[^64]: Cheng, F., Jia, P., Wang, Q. & Zhao, Z. Quantitative network mapping of the human kinome interactome reveals new clues for rational kinase inhibitor discovery and individualized cancer therapy. *Oncotarget* **5**, 3697–3710 (2014).

[Article](https://doi.org/10.18632%2Foncotarget.1984) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=25003367) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4116514) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Quantitative%20network%20mapping%20of%20the%20human%20kinome%20interactome%20reveals%20new%20clues%20for%20rational%20kinase%20inhibitor%20discovery%20and%20individualized%20cancer%20therapy&journal=Oncotarget&doi=10.18632%2Foncotarget.1984&volume=5&publication_year=2014&author=Cheng%2CF&author=Jia%2CP&author=Wang%2CQ&author=Zhao%2CZ)

[^65]: Peri, S. et al. Human protein reference database as a discovery resource for proteomics. *Nucleic Acids Res.* **32**, D497–D501 (2004).

[Article](https://doi.org/10.1093%2Fnar%2Fgkh070) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BD3sXhtVSrurvF) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=14681466) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC308804) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Human%20protein%20reference%20database%20as%20a%20discovery%20resource%20for%20proteomics&journal=Nucleic%20Acids%20Res.&doi=10.1093%2Fnar%2Fgkh070&volume=32&pages=D497-D501&publication_year=2004&author=Peri%2CS)

[^66]: Hornbeck, P. V. et al. PhosphoSitePlus, 2014: mutations, PTMs and recalibrations. *Nucleic Acids Res.* **43**, D512–D520 (2015).

[Article](https://doi.org/10.1093%2Fnar%2Fgku1267) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC2sXhtVymt7rO) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=25514926) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=PhosphoSitePlus%2C%202014%3A%20mutations%2C%20PTMs%20and%20recalibrations&journal=Nucleic%20Acids%20Res.&doi=10.1093%2Fnar%2Fgku1267&volume=43&pages=D512-D520&publication_year=2015&author=Hornbeck%2CPV)

[^67]: Li, T. et al. A scored human protein–protein interaction network to catalyze genomic interpretation. *Nat. Methods* **14**, 61–64 (2017).

[Article](https://doi.org/10.1038%2Fnmeth.4083) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC28XhvFShtrbN) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=27892958) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=A%20scored%20human%20protein%E2%80%93protein%20interaction%20network%20to%20catalyze%20genomic%20interpretation&journal=Nat.%20Methods&doi=10.1038%2Fnmeth.4083&volume=14&pages=61-64&publication_year=2017&author=Li%2CT)

[^68]: Chatr-Aryamontri, A. et al. The BioGRID interaction database: 2017 update. *Nucleic Acids Res.* **45**, D369–D379 (2017).

[Article](https://doi.org/10.1093%2Fnar%2Fgkw1102) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC1cXhslWhsrk%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=27980099) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20BioGRID%20interaction%20database%3A%202017%20update&journal=Nucleic%20Acids%20Res.&doi=10.1093%2Fnar%2Fgkw1102&volume=45&pages=D369-D379&publication_year=2017&author=Chatr-Aryamontri%2CA)

[^69]: Cowley, M. J. et al. PINA v2.0: mining interactome modules. *Nucleic Acids Res.* **40**, D862–D865 (2012).

[Article](https://doi.org/10.1093%2Fnar%2Fgkr967) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC3MXhs12htb7K) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=22067443) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=PINA%20v2.0%3A%20mining%20interactome%20modules&journal=Nucleic%20Acids%20Res.&doi=10.1093%2Fnar%2Fgkr967&volume=40&pages=D862-D865&publication_year=2012&author=Cowley%2CMJ)

[^70]: Orchard, S. et al. The MIntAct project—IntAct as a common curation platform for 11 molecular interaction databases. *Nucleic Acids Res.* **42**, D358–D363 (2014).

[Article](https://doi.org/10.1093%2Fnar%2Fgkt1115) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC2cXoslKg) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=24234451) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20MIntAct%20project%E2%80%94IntAct%20as%20a%20common%20curation%20platform%20for%2011%20molecular%20interaction%20databases&journal=Nucleic%20Acids%20Res.&doi=10.1093%2Fnar%2Fgkt1115&volume=42&pages=D358-D363&publication_year=2014&author=Orchard%2CS)

[^71]: Breuer, K. et al. InnateDB: systems biology of innate immunity and beyond—recent updates and continuing curation. *Nucleic Acids Res.* **41**, D1228–D1233 (2013).

[Article](https://doi.org/10.1093%2Fnar%2Fgks1147) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC38XhvV2ksbfM) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=23180781) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=InnateDB%3A%20systems%20biology%20of%20innate%20immunity%20and%20beyond%E2%80%94recent%20updates%20and%20continuing%20curation&journal=Nucleic%20Acids%20Res.&doi=10.1093%2Fnar%2Fgks1147&volume=41&pages=D1228-D1233&publication_year=2013&author=Breuer%2CK)

[^72]: Alonso-López, D. et al. APID database: redefining protein–protein interaction experimental evidences and binary interactomes. *Database* **2019**, baz005 (2019).

[Article](https://doi.org/10.1093%2Fdatabase%2Fbaz005) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=30715274) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC6354026) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=APID%20database%3A%20redefining%20protein%E2%80%93protein%20interaction%20experimental%20evidences%20and%20binary%20interactomes&journal=Database&doi=10.1093%2Fdatabase%2Fbaz005&volume=2019&publication_year=2019&author=Alonso-L%C3%B3pez%2CD)

[^73]: Xenarios, I. et al. DIP: the database of interacting proteins. *Nucleic Acids Res.* **28**, 289–291 (2000).

[Article](https://doi.org/10.1093%2Fnar%2F28.1.289) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BD3cXhvVKjtLg%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=10592249) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC102387) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=DIP%3A%20the%20database%20of%20interacting%20proteins&journal=Nucleic%20Acids%20Res.&doi=10.1093%2Fnar%2F28.1.289&volume=28&pages=289-291&publication_year=2000&author=Xenarios%2CI)

[^74]: Meyer, M. J., Das, J., Wang, X. & Yu, H. INstruct: a database of high-quality 3D structurally resolved protein interactome networks. *Bioinformatics* **29**, 1577–1579 (2013).

[Article](https://doi.org/10.1093%2Fbioinformatics%2Fbtt181) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC3sXptFCmtLs%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=23599502) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3673217) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=INstruct%3A%20a%20database%20of%20high-quality%203D%20structurally%20resolved%20protein%20interactome%20networks&journal=Bioinformatics&doi=10.1093%2Fbioinformatics%2Fbtt181&volume=29&pages=1577-1579&publication_year=2013&author=Meyer%2CMJ&author=Das%2CJ&author=Wang%2CX&author=Yu%2CH)

[^75]: Mosca, R., Céol, A. & Aloy, P. Interactome3D: adding structural details to protein networks. *Nat. Methods* **10**, 47–53 (2013).

[Article](https://doi.org/10.1038%2Fnmeth.2289) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC38XhvVersr%2FI) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=23399932) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Interactome3D%3A%20adding%20structural%20details%20to%20protein%20networks&journal=Nat.%20Methods&doi=10.1038%2Fnmeth.2289&volume=10&pages=47-53&publication_year=2013&author=Mosca%2CR&author=C%C3%A9ol%2CA&author=Aloy%2CP)

[^76]: Meyer, M. J. et al. Interactome INSIDER: a structural interactome browser for genomic studies. *Nat. Methods* **15**, 107–114 (2018).

[Article](https://doi.org/10.1038%2Fnmeth.4540) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC1cXhtlKjtg%3D%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=29355848) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC6026581) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Interactome%20INSIDER%3A%20a%20structural%20interactome%20browser%20for%20genomic%20studies&journal=Nat.%20Methods&doi=10.1038%2Fnmeth.4540&volume=15&pages=107-114&publication_year=2018&author=Meyer%2CMJ)

[^77]: Mooney, C., Pollastri, G., Shields, D. C. & Haslam, N. J. Prediction of short linear protein binding regions. *J. Mol. Biol.* **415**, 193–204 (2012).

[Article](https://doi.org/10.1016%2Fj.jmb.2011.10.025) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC38XhtFWnug%3D%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=22079048) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Prediction%20of%20short%20linear%20protein%20binding%20regions&journal=J.%20Mol.%20Biol.&doi=10.1016%2Fj.jmb.2011.10.025&volume=415&pages=193-204&publication_year=2012&author=Mooney%2CC&author=Pollastri%2CG&author=Shields%2CDC&author=Haslam%2CNJ)

[^78]: Fazekas, D. et al. SignaLink 2–a signaling pathway resource with multi-layered regulatory networks. *BMC Syst. Biol.* **7**, 7 (2013).

[Article](https://link.springer.com/doi/10.1186/1752-0509-7-7) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=23331499) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3599410) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=SignaLink%202%E2%80%93a%20signaling%20pathway%20resource%20with%20multi-layered%20regulatory%20networks&journal=BMC%20Syst.%20Biol.&doi=10.1186%2F1752-0509-7-7&volume=7&publication_year=2013&author=Fazekas%2CD)

[^79]: Tragante, V., Moore, J. H. & Asselbergs, F. W. The ENCODE project and perspectives on pathways. *Genet. Epidemiol.* **38**, 275–280 (2014).

[Article](https://doi.org/10.1002%2Fgepi.21802) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=24723339) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20ENCODE%20project%20and%20perspectives%20on%20pathways&journal=Genet.%20Epidemiol.&doi=10.1002%2Fgepi.21802&volume=38&pages=275-280&publication_year=2014&author=Tragante%2CV&author=Moore%2CJH&author=Asselbergs%2CFW)

[^80]: Junge, A. et al. RAIN: RNA–protein association and interaction networks. *Database* **2017**, baw167 (2017).

[Article](https://doi.org/10.1093%2Fdatabase%2Fbaw167) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=28077569) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC5225963) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=RAIN%3A%20RNA%E2%80%93protein%20association%20and%20interaction%20networks&journal=Database&doi=10.1093%2Fdatabase%2Fbaw167&volume=2017&publication_year=2017&author=Junge%2CA)

[^81]: Gong, J. et al. RISE: a database of RNA interactome from sequencing experiments. *Nucleic Acids Res.* **46**, D194–D201 (2018).

[Article](https://doi.org/10.1093%2Fnar%2Fgkx864) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC1cXitlGis7jE) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=29040625) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC5753368) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=RISE%3A%20a%20database%20of%20RNA%20interactome%20from%20sequencing%20experiments&journal=Nucleic%20Acids%20Res.&doi=10.1093%2Fnar%2Fgkx864&volume=46&pages=D194-D201&publication_year=2018&author=Gong%2CJ)

[^82]: Huttlin, E. L. et al. Architecture of the human interactome defines protein communities and disease networks. *Nature* **545**, 505–509 (2017).

[Article](https://doi.org/10.1038%2Fnature22366) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC2sXnvVCrsro%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=28514442) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC5531611) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Architecture%20of%20the%20human%20interactome%20defines%20protein%20communities%20and%20disease%20networks&journal=Nature&doi=10.1038%2Fnature22366&volume=545&pages=505-509&publication_year=2017&author=Huttlin%2CEL)

[^83]: Hubner, N. C. & Mann, M. Extracting gene function from protein–protein interactions using Quantitative BAC InteraCtomics (QUBIC). *Methods* **53**, 453–459 (2011).

[Article](https://doi.org/10.1016%2Fj.ymeth.2010.12.016) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC3MXjsFyhurk%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=21184827) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Extracting%20gene%20function%20from%20protein%E2%80%93protein%20interactions%20using%20Quantitative%20BAC%20InteraCtomics%20%28QUBIC%29&journal=Methods&doi=10.1016%2Fj.ymeth.2010.12.016&volume=53&pages=453-459&publication_year=2011&author=Hubner%2CNC&author=Mann%2CM)

[^84]: Bhartiya, D. et al. lncRNome: a comprehensive knowledgebase of human long noncoding RNAs. *Database* **2013**, bat034 (2013).

[Article](https://doi.org/10.1093%2Fdatabase%2Fbat034) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=23846593) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3708617) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=lncRNome%3A%20a%20comprehensive%20knowledgebase%20of%20human%20long%20noncoding%20RNAs&journal=Database&doi=10.1093%2Fdatabase%2Fbat034&volume=2013&publication_year=2013&author=Bhartiya%2CD)

[^85]: Teng, X. et al. NPInter v4.0: an integrated database of ncRNA interactions. *Nucleic Acids Res.* **48**, D160–D165 (2020).

[CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BB3cXhs1Glt7vL) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=31670377) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC7145607) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=NPInter%20v4.0%3A%20an%20integrated%20database%20of%20ncRNA%20interactions&journal=Nucleic%20Acids%20Res.&volume=48&pages=D160-D165&publication_year=2020&author=Teng%2CX)

[^86]: Szklarczyk, D. et al. The STRING database in 2021: customizable protein–protein networks, and functional characterization of user-uploaded gene/measurement sets. *Nucleic Acids Res.* **49**, D605–D612 (2021).

[Article](https://doi.org/10.1093%2Fnar%2Fgkaa1074) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BB3MXntlejtb0%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=33237311) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC7779004) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20STRING%20database%20in%202021%3A%20customizable%20protein%E2%80%93protein%20networks%2C%20and%20functional%20characterization%20of%20user-uploaded%20gene%2Fmeasurement%20sets&journal=Nucleic%20Acids%20Res.&doi=10.1093%2Fnar%2Fgkaa1074&volume=49&pages=D605-D612&publication_year=2021&author=Szklarczyk%2CD)

[^87]: Subramanian, A. et al. A next generation connectivity map: L1000 platform and the first 1,000,000 profiles. *Cell* **171**, 1437–1452 (2017).

[Article](https://doi.org/10.1016%2Fj.cell.2017.10.049) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC2sXhvFWmsbrE) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=29195078) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC5990023) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=A%20next%20generation%20connectivity%20map%3A%20L1000%20platform%20and%20the%20first%201%2C000%2C000%20profiles&journal=Cell&doi=10.1016%2Fj.cell.2017.10.049&volume=171&pages=1437-1452&publication_year=2017&author=Subramanian%2CA)

[^88]: Kitsak, M. et al. Tissue specificity of human disease module. *Sci. Rep.* **6**, 35241 (2016).

[Article](https://doi.org/10.1038%2Fsrep35241) [CAS](https://www.nature.com/articles/cas-redirect/1:CAS:528:DC%2BC28XhslSiu73O) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=27748412) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC5066219) [Google Scholar](http://scholar.google.com/scholar_lookup?&title=Tissue%20specificity%20of%20human%20disease%20module&journal=Sci.%20Rep.&doi=10.1038%2Fsrep35241&volume=6&publication_year=2016&author=Kitsak%2CM)