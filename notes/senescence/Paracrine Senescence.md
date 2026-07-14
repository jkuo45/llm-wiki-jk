---
title: Paracrine Senescence
description: Paracrine senescence is the process by which SASP factors secreted by
  senescent cells induce senescence in neighbouring healthy cells, spreading the senescence
  phenotype through tissues.
created: 2026-07-07
updated: 2026-07-12
tags:
  - biological-process
  - senescence
  - inflammation
  - intercellular-signaling
aliases: [Bystander senescence, secondary senescence]
protected: true
---

# Paracrine Senescence

**Paracrine senescence** (also called bystander senescence or secondary senescence) is the process by which [[SASP|Senescence-Associated Secretory Phenotype]] secreted by senescent cells induce [[Cellular Senescence]] in neighbouring healthy cells, spreading the senescence phenotype through tissues. It explains why small numbers of senescent cells can drive disproportionate tissue dysfunction and why local senescent-cell burden amplifies with age (Acosta et al., 2013; PMID 23636316; Nelson et al., 2018, PMID 29902437).

## Mechanism

In [[Oncogene-Induced Senescence|OIS]] cells, SASP components — including [[IL-1α]], [[TGFβ]], [[VEGF]], [[CCL2]], and [[CCL20]] — autocrinally reinforce senescence-associated growth arrest and additionally induce paracrine proliferation arrest by binding their specific receptors on receiving cells, activating secondary [[DNA Damage Response|DDR]]-independent arrest pathways.

[[Notch]] signalling is essential for establishing paracrine senescence and weakens the SASP produced by secondary senescent cells, thereby preventing runaway continuous senescence induction. TGF-β and IGFBP3 from the SASP reinforce arrest in neighbours via Smad and PI3K/Akt suppression.

### SASP Components Mediating Paracrine Senescence

> [!info] Source: Acosta et al., 2013 (PMID 23636316)
> Coupling SILAC-based quantitative proteomics with a 78-compound drug library screen, Acosta et al. identified multiple SASP components mediating paracrine senescence. The top mediators were [[TGFβ]] family ligands, [[VEGF]], [[CCL2]], and [[CCL20]]. Drug inhibitors targeting [[VEGFR2]]/FLT3, TGFBR1, and [[CCR2]] receptors dose-dependently inhibited paracrine senescence. RNAi knockdown of CCR2 or TGF-β receptors ALK4, ALK5 (TGFBR1) and ALK7 confirmed their roles.

### TGF-β as the Major Mediator

> [!info] Source: Acosta et al., 2013 (PMID 23636316)
> Although TGF-β1 was induced during OIS, other TGF-β family ligands — BMP6, BMP2, [[Activin A]] (inhibin A homodimer), and [[GDF15]] — were more acutely upregulated. Both SMAD2/3 and SMAD1/5 phosphorylation were upregulated during paracrine senescence, corroborating involvement of both the TGF-β and BMP branches. Combination of blocking antibodies targeting TGF-β1, activin A, or BMP2 partially rescued paracrine arrest. TGFBR1 inhibitors prevented SMAD2/3 phosphorylation, blunted paracrine arrest, and correlated with impaired [[CDKN2B|p15^INK4b]] and [[p21 CIP1|p21^CIP1]] induction — placing TGF-β signaling upstream of the canonical CDK inhibitor effectors.

### Inflammasome–IL-1α Axis as Upstream Regulator

> [!important] Source: Acosta et al., 2013 (PMID 23636316)
> The entire SASP is controlled by [[Inflammasome|inflammasome]]-mediated [[IL-1α]] signalling. Cells undergoing OIS exhibit [[Caspase-1]] activity and secrete mature forms of both IL-1α and IL-1β. IL-1α expression alone phenocopies the full SASP. Caspase-1 or [[IL-1R]] inhibitors — but not TGFBR1 inhibitors — blunt SASP component expression during OIS, placing inflammasome activation upstream of the SASP. The inflammasome is also activated *in vivo* in Braf[V600E]-driven SSAs and Kras[G12D]-driven PanIN lesions.

### Core Arrest Machinery

> [!info] Source: Acosta et al., 2013 (PMID 23636316)
> Paracrine senescence depends on the same tumour suppressor networks as OIS: knockdown of [[p16 INK4a|p16^INK4a]], [[p53]], or [[p21 CIP1|p21^CIP1]] partially rescued paracrine arrest. Global gene expression profiling showed a high correlation (Pearson r = 0.67) between OIS and paracrine senescence transcriptomes, confirming that paracrine senescence implements a full senescence programme.

## Routes of Spread

- **Soluble factors**: Cytokines/chemokines (IL-6, IL-8, CCL2), growth factors, and proteases diffuse to neighbours.
- **Extracellular vesicles / exosomes**: Cargo including [[IFITM3]] and mitochondrial antigens transmits senescence signals; IFITM3 is enriched in exosomes from plasma of elderly individuals and is a potential ageing biomarker.
- **Mitochondrial antigen transfer**: Senescent-cell-derived mitochondrial peptides presented by receiving cells can trigger innate immune activation and arrest.

> [!warning] Spatial Restriction (Acosta et al., 2013)
> Paracrine senescence is spatially restricted: normal fibroblasts within ~1 mm of OIS cell clusters showed reduced BrdU incorporation, while those beyond 1 mm were unaffected. Serial CM transfer showed limited transmissibility — primary CM induced secondary senescence, but tertiary cells only slowed proliferation without SA-β-Gal positivity, establishing that soluble factors alone have a restricted effective range.

## Beneficial Roles

### Cancer Suppression
In cancer settings, paracrine senescence benefits tumour-growth suppression by:
- Reinforcing senescence in premalignant cells
- Recruiting immune cells to clear senescent cells
- Limiting expansion of pre-malignant clones

> [!info] In Vivo Evidence for Paracrine Senescence (Acosta et al., 2013)
> Paracrine senescence was demonstrated in three *in vivo* models:
> - **Mouse liver (Nras[G12V])**: Senescent hepatocytes surrounded by clusters of immune cells positive for p21 and p16.
> - **Mouse skin (K5-Sos Egfr[wa2/+])**: Stromal cells (K5−) near senescent papillomas showed elevated p16^Ink4a and p21^Cip1, while normal skin had no senescent stromal cells.
> - **Human sessile serrated adenomas (SSAs)**: Activated BRAF+/p21^CIP1+/Ki67− stromal cells significantly increased near SSAs compared with normal crypts (P = 0.03), with immune or fibroblast morphology.
>
> In the liver model, IL-1R inhibitor or a combination of drugs (IL-1R + VEGFR2 + CCR2 + TGFBR1 inhibitors) reduced the percentage of senescent hepatocytes, confirming that IL-1 signalling and SASP components are required for senescence maintenance *in vivo*.

### Embryonic Development
Senescence markers (SA-β-gal, [[p53]], [[p21 CIP1|p21]]) are upregulated in developing forelimbs and neural tube, with [[TGFβ]] as a crucial mediator (Muñoz-Espín et al., 2013; PMID 23552068).

### Tissue Repair
Short-term SASP exposure promotes stemness and regenerative capacity in keratinocytes. Transient senescent-cell accumulation during wound healing is crucial for proper tissue repair.

## Detrimental Roles

### Ageing
Exosomes from senescent cells induce paracrine senescence through [[IFITM3]]. Soluble SASP factors from senescent bone-marrow adipocytes spread senescence in bone, contributing to osteoporosis and [[Inflammaging]].

### Disease Propagation
- Long-term glucocorticoid exposure induces senescence in bone-marrow adipose tissue; SASP factors disperse senescence in bone.
- In non-healing wounds, persistent paracrine senescence amplifies inflammation and accelerates fibrosis.

### Tumour Promotion
In established tumours, paracrine senescence from therapy-induced senescent cells can promote cancer progression through:
- IL-6 and IL-8 secretion stimulating proliferation
- MMP-mediated matrix remodelling
- VEGF-driven angiogenesis
- Recruitment of immunosuppressive myeloid cells

## Regulation
- **Inflammasome–IL-1α axis**: The inflammasome (NLRP3/ASC/caspase-1) activates IL-1α and IL-1β processing in senescent cells, which is the master upstream driver of the SASP. Caspase-1 or IL-1R inhibitors prevent SASP expression and paracrine senescence (Acosta et al., 2013).
- **TGF-β signalling**: TGF-β family ligands (TGF-β1, activin A, BMP2, GDF15) signal through TGFBR1/ALK4/ALK5/ALK7 and SMAD2/3/1/5 to induce [[CDKN2B|p15^INK4b]] and [[p21 CIP1|p21^CIP1]] in receiving cells. TGFBR1 knockout in a PanIN mouse model attenuated OIS and accelerated tumorigenesis.
- **Notch signalling**: Suppresses C/EBPβ to limit secondary SASP and prevent continuous induction.
- **Senescent inducer type**: Different inducers produce SASP profiles with varying paracrine potency.
- **Cell type**: Fibroblasts secrete higher SASP due to their secretory machinery.
- **Tissue environment**: Oxygen, metabolic rate, and nutrients modulate paracrine effects.

## Therapeutic Implications
Reducing paracrine senescence is a key goal of both [[Senolytic Therapy|senolytics]] (removing the source cells) and [[Senomorphic Therapy|senomorphics]] (suppressing SASP production). Lifestyle interventions such as dietary restriction and exercise may reduce paracrine senescence by decreasing senescence burden.

## Clinical / Pathological Relevance
Paracrine senescence is the mechanistic bridge between a few senescent cells and widespread tissue dysfunction in ageing, fibrosis (IPF, liver, kidney), and therapy side-effects. It motivates combination strategies that both eliminate sources (senolytics) and dampen transmission (senomorphics).

#

## Documents

List of documents that mention this entity

  - [[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications|The SASP and its physiological and pathological implications]]
    - Discusses paracrine senescence mechanisms, beneficial roles in cancer suppression and tissue repair, and detrimental propagation in ageing and disease.

  - [[_document_ - The Senescence-Associated Secretory Phenotype The Dark Side of Tumor Suppression|SASP: The Dark Side of Tumor Suppression]]
    - Shows how SASP from senescent fibroblasts promotes paracrine tumor progression: IL-6/IL-8 stimulate epithelial cell proliferation, MMPs enable invasion, VEGF drives angiogenesis, and chemokine gradients recruit immunosuppressive cells. p53 loss amplifies the pro-tumorigenic paracrine effects.

  - [[_document_ - acosta2013_paracrine_senescence|Acosta et al., 2013 — Inflammasome controls paracrine senescence]]
    - Landmark study demonstrating that SASP factors (TGF-β family ligands, VEGF, CCL2, CCL20) from OIS cells induce paracrine senescence in neighbouring cells. Identified the inflammasome–IL-1α axis as the master upstream SASP regulator. Showed paracrine senescence depends on p16/Rb and p53/p21 pathways, is spatially restricted, and occurs in mouse and human models of OIS *in vivo*.

## Connections
- [[SASP|Senescence-Associated Secretory Phenotype]] — the effector molecules driving paracrine senescence
- [[Paracrine Reprogramming]] — sister process; SASP alters differentiation status (stemness, EMT, lineage) of neighbours rather than inducing arrest
- [[Cellular Senescence]] — the state induced in neighbouring cells
- [[IL-1α]] — primary SASP factor inducing paracrine senescence; master upstream regulator of the SASP via inflammasome-mediated processing
- [[TGFβ]] — SASP factor promoting paracrine senescence in tumour microenvironments; major mediator via p15^INK4b/p21^CIP1 induction
- [[Notch]] — regulates establishment of paracrine senescence
- [[IFITM3]] — exosomal protein mediating paracrine senescence; ageing biomarker
- [[CCL2]] — SASP chemokine contributing to paracrine effects
- [[VEGF]] — SASP growth factor with paracrine effects; drives angiogenesis to support tumor growth
- [[Senolytic Therapy|Senolytics]] — eliminate source of paracrine senescence
- [[Senomorphic Therapy]] — suppress SASP to reduce paracrine spread
- [[Aging]] — paracrine senescence contributes to age-related tissue dysfunction
- [[Cancer]] — paracrine senescence has both suppressive and promoting roles
- [[Inflammaging]] — chronic low-grade inflammation propagated by paracrine senescence
- [[IL-6]] — SASP cytokine that stimulates epithelial cell proliferation in a paracrine manner; drives cancer progression through JAK/STAT3 signaling
- [[IL-8]] — SASP chemokine that recruits CXCR2+ cells to the tumor microenvironment; promotes paracrine invasion and angiogenesis
- [[MMP1]] — SASP protease; paracrine degradation of type I collagen enables cancer cell invasion
- [[MMP-3]] — SASP protease; paracrine ECM remodeling promotes cancer cell migration
- [[MMP-9]] — SASP protease; paracrine basement membrane degradation enables cancer cell dissemination
- [[HGF]] — SASP growth factor; paracrine stimulation of cancer cell proliferation and invasion
- [[Amphiregulin]] — SASP growth factor; paracrine activation of EGFR signaling in prostate and breast cancer cells
- [[Connective Tissue Growth Factor|CTGF]] — SASP matricellular protein; paracrine promotion of fibrosis and tumor progression
- [[Tumor Microenvironment]] — Paracrine senescence reshapes the tumor microenvironment to support cancer growth
- [[Prostate Cancer]] — SASP from senescent fibroblasts promotes prostate tumor progression through paracrine signaling
- [[Breast Cancer]] — SASP from senescent fibroblasts promotes breast cancer cell proliferation through paracrine IL-6/IL-8
- [[Pancreatic Cancer]] — SASP from senescent stellate cells promotes pancreatic cancer invasion through paracrine HGF/MMPs; TGFBR1 knockout in Kras[G12D] PanIN model attenuates OIS and accelerates tumorigenesis
- [[p53]] — p53 restrains paracrine tumor-promoting effects; p53 loss amplifies SASP-driven cancer progression
- [[Inflammasome]] — inflammasome-mediated IL-1α/IL-1β processing is the master upstream regulator of the SASP that drives paracrine senescence
- [[Caspase-1]] — canonical effector caspase of the inflammasome; processes pro-IL-1α and pro-IL-1β in senescent cells
- [[IL-1R]] — IL-1 receptor; IL-1R inhibition partially prevents OIS and paracrine senescence *in vivo*
- [[Activin A]] — TGF-β family ligand identified as a mediator of paracrine senescence; blocking antibody partially rescues arrest
- [[GDF15]] — TGF-β family ligand acutely upregulated during OIS; contributes to paracrine senescence
- [[CDKN2B|p15^INK4b]] — CDK inhibitor induced by TGF-β signaling in receiving cells during paracrine senescence
- [[p21 CIP1|p21^CIP1]] — CDK inhibitor induced by both TGF-β and IL-1α pathways; essential effector of paracrine arrest
- [[p16 INK4a|p16^INK4a]] — CDK inhibitor required for paracrine senescence; part of the core arrest machinery
- [[SMAD2]] / [[SMAD3]] — receptor-regulated SMADs phosphorylated by TGFBR1/ALK5 during paracrine senescence
- [[KRas]] — oncogenic KRas[G12D] drives OIS in PanIN lesions; paracrine senescence expands the senescent footprint
- [[Senescence Surveillance]] — paracrine senescence may expand the senescent footprint to promote immune clearance of pre-malignant lesions

## Linking Summary
- New links added: [[Inflammasome]], [[Caspase-1]], [[IL-1R]], [[Activin A]], [[GDF15]], [[CDKN2B|p15^INK4b]], [[p21 CIP1|p21^CIP1]], [[p16 INK4a|p16^INK4a]], [[SMAD2]], [[SMAD3]], [[KRas]], [[Senescence Surveillance]]
- Suggested new entity notes to create: [[Bystander Effect]], [[Exosomes]], [[VEGFR2]], [[CCR2]]
  - Strong connections to strengthen:
    - [[Paracrine Senescence]] ↔ [[SASP|Senescence-Associated Secretory Phenotype]]
    - [[Paracrine Senescence]] ↔ [[Cellular Senescence]]
    - [[Paracrine Senescence]] ↔ [[Aging]]
    - [[Paracrine Senescence]] ↔ [[Inflammaging]]
    - [[Paracrine Senescence]] ↔ [[Inflammasome]]
    - [[Paracrine Senescence]] ↔ [[TGFβ]]
    - [[Paracrine Senescence]] ↔ [[IL-1α]]
  - Justification: The Acosta 2013 paper established the inflammasome–IL-1α axis as the master upstream regulator of the SASP driving paracrine senescence, and identified TGF-β family ligands as the major downstream mediators via p15^INK4b/p21^CIP1. These connections are central to the mechanistic understanding of how senescence spreads between cells.
