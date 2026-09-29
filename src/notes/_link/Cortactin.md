---
title: Cortactin
description: A Src-family kinase substrate encoded by CTTN on chromosome 11q13 that binds F-actin and the Arp2/3 complex, stabilising branched actin networks at cell protrusions and thereby driving migration, invadopodia formation and membrane trafficking.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - cytoskeleton
  - cancer
aliases: [CTTN, p80/85, EMS1, Src substrate cortactin]
---

# Cortactin

Cortactin is a 63-65 kDa actin-binding protein first identified in the early 1990s as a tyrosine-phosphorylated substrate of v-Src in transformed chick embryo fibroblasts, which gave it both names: *cortactin* from "cortical actin" and *p80/85* from its apparent molecular weight. It is encoded by the **CTTN** gene (synonym *EMS1*) at chromosomal band **11q13**, and its amplification and overexpression in a long list of human cancers is what made it a clinical interest rather than a cell-biology curiosity.

## Domain architecture

The protein is built from four modules, and each one has a defined job:

- **N-terminal acidic domain (NTA)**, residues ~15-35, containing a conserved **DDW** motif (Asp20-Asp21-Trp22) that binds the Arp3 subunit of the [[Arp2/3 complex]] and nucleates new branches. The DDW plays the same structural role as the verprolin-cofilin-acidic (VCA) domain of the WASP family.
- **Six and a half tandem repeats** of a 37-residue unit. The fourth repeat is the principal F-actin binding site; repeats three and five are needed to keep binding efficient. Post-translational modification of this region — phosphorylation by [[PAK1]] and [[PAK3]], acetylation by [[HDAC6]] and by [[Alpha-Tubulin Acetyltransferase|ATAT1]] — is a major regulatory lever.
- **Proline-rich and alpha-helical region**, variable in length, densely populated with phosphorylation sites. Tyrosines Y421, Y446, Y470 and Y486 are phosphorylated by [[SRC kinase|Src]], [[FER]], [[c-Met]] and [[Nck]]; serines S405 and S418 by [[ERK]], PAK and myosin light chain kinase.
- **C-terminal SH3 domain**, which makes cortactin a scaffold: cytoskeletal, membrane-trafficking and signalling proteins dock here.

Cortactin is the paralog of **HS1/L-plastin**, which is restricted mainly to hematopoietic cells. The two arose from a common duplication; notably, the F-actin-binding domain that mediates cell migration in cortactin mediates apoptosis in HS1.

## Mechanism

> [!info] Mechanism
> Cortactin does two things that the core nucleation-promoting factors do not do well. First, it activates [[Arp2/3]] directly, but more weakly than N-WASP; structural work indicates it also alters the lateral and longitudinal contacts between actin subunits in a filament, which exposes new binding sites and increases the affinity of [[Arp2/3]] for the side of a mother filament. Second, and more distinctively, it **stabilises branches after they form** and keeps the Arp2/3 complex from dissociating from existing branches. It is thus both an activator and a kinetic brake, and the "release the brakes" model (Yang et al., *Curr Biol* 2011) proposes that cortactin additionally promotes WASP-VCA detachment from Arp2/3 branches, recycling the activator.

The SH3 domain extends this into signalling and trafficking. Cortactin binds and **derepresses N-WASP**, exposing its VCA domain so that N-WASP can go on to activate [[Arp2/3]] — a documented synergistic mechanism (Wave 2 and colleagues, *eLife* 2013). It also binds WIP/SIR2alpha, which itself caps and stabilises branch points; the cortactin-WIP-filament complex is required for maximal [[Arp2/3]] activity. [[Dynamin]] binds through both the SH3 domain and its own proline-rich motifs, and this interaction is required for actin polymerisation. Further SH3 partners include cortactin-binding protein (CortBP), ZO-1, Shank, and the membrane-trafficking component Exo70.

The result is a physical bridge between membrane receptors, the actin cytoskeleton, and the exocytic machinery — cortactin couples signalling to shape and to secretion.

## Cellular functions

Cortactin concentrates at sites of dynamic actin assembly, which is why it is used as a **marker for lamellipodia and invadopodia**. Lamellipodia drive sheet-like protrusion in 2D migration; **invadopodia** are the matrix-degrading protrusions that allow a cell to breach the basement membrane. Cortactin also assembles adherens junctions, where it stabilises E-cadherin-based cell-cell adhesion — and, unusually for a migration driver, cortactin promotes rather than weakens cell-cell junctions, which is why its inactivation (not its activation) appears to be required for full epithelial-mesenchymal transition.

In endothelial cells cortactin is required for barrier function: it translocates to the cell periphery in response to [[Sphingosine-1-phosphate]] and hepatocyte growth factor, forms a cortical ring, and its loss increases vascular permeability and tissue oedema. This is where the [[HDACs]] connection in this vault comes from: [[HDAC6]] regulates autophagosome-lysosome fusion via cortactin deacetylation, and α-tubulin acetylation by ATAT1/HDAC6 regulates the same F-actin binding region.

## Pathology and prognosis

Cortactin is one of the best-characterised drivers of cancer cell invasion, and the evidence is unusually consistent across tumour types.

**Expression.** Overexpression or amplification is reported in head and neck squamous cell carcinoma, oral and lung squamous carcinoma, breast, hepatocellular, oesophageal, gastric, ovarian, colorectal and melanoma cancers, largely through 11q13 amplification — a region also containing [[Cyclin D1]], several FGF family members and FADD, which is why the amplification's effect is not attributable to cortactin alone in every study.

**Prognosis.** Cortactin expression predicts local recurrence, disease-free survival, overall survival and disease-specific mortality, in many cases independently of [[EGFR]] and of Cyclin D1. Independent prognostic value has been shown in laryngeal carcinoma, oesophageal squamous carcinoma, hepatocellular carcinoma, ovarian, gastric, colorectal and melanoma, and in non-small-cell lung cancer, where high CTTN (and SIRT1) expression tracks with lymph node metastasis and shorter survival. The independence from EGFR is important: it means that cortactin's effect on EGFR signalling is not the whole story.

**Function.** Overexpressing cortactin in established carcinoma lines increases migration, invasion and matrix degradation, and increases metastasis to bone, lung and liver in mouse models. Unlike Cyclin D1, transgenic cortactin expression in the mouse mammary gland does not by itself induce hyperplasia or tumours, so cortactin is best described as an **invasion and metastasis driver rather than a tumour initiator**. It also promotes anchorage- and serum-independent growth, plausibly by regulating autocrine secretion.

> [!info] Mechanism: invadopodia
> Cortactin promotes ECM degradation at invadopodia in two separable steps. It recruits [[Matrix Metalloproteinase|MMPs]] to the protrusion by regulating post-Golgi trafficking and vesicle capture, and it aligns the secretory machinery with the actin core. Cortactin and Exo70 act synergistically for MMP secretion, though the interaction mechanism is not fully resolved. Because invadopodia degrade matrix, they relieve space constraints, and this is the proposed route by which cortactin affects tumour size in some tumour types but not others.

> [!warning] Clinical caveat
> Cortactin is a validated prognostic biomarker and a compelling anti-invasive target, but not a therapeutic one. There is no cortactin-directed drug in clinical use, and the reason is structural: cortactin has no obvious small-molecule pocket unique to it, so inhibition would have to target its interactions or its phosphorylation sites, and phosphomimetic-site specificity is difficult. The field's realistic near-term role for CTTN is as a biomarker and as a target for the [[EGF|EGFR]] and miRNA (miR-182, miR-509) regulatory axes that sit upstream of it.

## Documents

- [[HDACs]]
  - The vault's HDAC note records that HDAC6 regulates autophagosome-lysosome fusion through cortactin deacetylation, placing cortactin in the autophagy-lysosome pathway as well as in migration and invasion.

## Connections

- [[HDACs]] — HDAC6 deacetylates cortactin in its F-actin repeat region, and cortactin in turn is reported to bind HDAC6; this deacetylation step regulates autophagosome-lysosome fusion and also cortactin's actin binding. It is the direct link that put cortactin in this vault's autophagy section.
- [[HDAC6]] — HDAC6 is the specific enzyme that deacetylates both cortactin and the tubulin whose acetylation state cortactin shares regulatory logic with; [[Alpha-Tubulin Acetyltransferase|ATAT1]] is the countervailing acetyltransferase.
- [[Arp2/3 complex]] — The DDW motif in cortactin's N-terminal acidic domain binds Arp3 and nucleates new branches, and cortactin stabilises the branches afterwards. This dual role is what makes it a nucleation-promoting factor and a branch stabilizer rather than either alone.
- [[Actin]] — Cortactin binds F-actin through the fourth of its 6.5 tandem repeats, which is why it sits at the cell cortex and at protrusions and why actin-binding post-translational modification is the main regulatory control point.
- [[SRC kinase|Src]] — Src phosphorylation of cortactin is both how cortactin was discovered and how it is activated; it is also the initiator of a feedback loop in which Src activity both requires and is promoted by the actin networks cortactin builds.
- [[Cell Migration]] — Cortactin is a general driver of motility, not only of cancer motility; endothelial migration, neurite outgrowth and immune cell trafficking all depend on it.
- [[Matrix Metalloproteinase|MMPs]] — Cortactin recruits and traffics MMPs to invadopodia, which is the mechanism by which it enables basement membrane breach.
- [[Metastasis]] — Cortactin overexpression increases experimental metastasis to bone, lung and liver, and its expression is an independent predictor of distant metastasis in human tumours.
- [[Plasma Membrane]] — The plasma membrane is where cortactin is enriched, where its SH3 domain docks membrane-proximal scaffolds, and where lamellipodia and invadopodia are built.
- [[Epithelial-to-mesenchymal transition]] — Because cortactin promotes cell-cell junction formation as well as migration, its inactivation rather than its activation appears to be required for full EMT — an unusual relationship worth noting.
- [[Dynamin]] — Dynamin binds the cortactin SH3 domain and its proline-rich motifs, and this interaction is required for actin polymerisation.
- [[VEGF]] — VEGF signalling in endothelial cells increases cortactin association with the Arp2/3 complex, connecting cortactin to the angiogenic arm of tumour progression.
- [[PAK1]] — PAK1 phosphorylation of the cortactin repeat region regulates F-actin binding, placing cortactin downstream of the PAK signalling axis in multiple migrating cell types.
- [[Cyclin D1]] — Cyclin D1 and cortactin sit side by side in the amplified 11q13 region and co-amplify, but they behave differently: Cyclin D1 drives proliferation, cortactin drives invasion.
- [[SIRT1]] — CTTN and SIRT1 expression are jointly elevated in non-small-cell lung cancer and correlate with lymph node metastasis and shorter survival.

## Linking Summary

- New links added: [[Arp2/3 complex]], [[Actin]], [[SRC kinase]], [[Cell Migration]], [[Matrix Metalloproteinase|MMPs]], [[Metastasis]], [[Plasma Membrane]], [[Epithelial-to-mesenchymal transition]], [[Dynamin]], [[VEGF]], [[PAK1]], [[Cyclin D1]], [[SIRT1]], [[HDAC6]], [[Alpha-Tubulin Acetyltransferase|ATAT1]], [[Sphingosine-1-phosphate]], [[c-Met]], [[ERK]], [[EGF|EGFR]], [[FER]]
- Suggested notes to create: [[Arp2/3 complex]], [[Invadopodia]], [[Lamellipodia]], [[N-WASP]], [[WIP]], [[Dynamin]], [[PAK1]], [[PAK3]], [[FER]], [[11q13 Amplification]], [[Cytoskeleton]], [[Cell Junction]], [[Adherens Junction]]
- Strong connections to strengthen: [[HDACs]] ↔ [[Cortactin]] (already mutual), [[Arp2/3 complex]] ↔ [[Actin]], [[Cortactin]] ↔ [[Cell Migration]], [[Cortactin]] ↔ [[Metastasis]]
