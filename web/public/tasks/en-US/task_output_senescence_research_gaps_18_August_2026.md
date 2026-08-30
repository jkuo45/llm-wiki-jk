---
title: Research Gaps in Cellular Senescence Biology — Most Recent Documents
description: Consolidated research gaps and open questions about cellular senescence extracted from the most recently updated wiki documents (Aug 2026).
created: 2026-08-18
updated: 2026-08-18
tags:
  - senescence
  - research-gaps
  - geroscience
  - literature-review
---

# Research Gaps in Cellular Senescence Biology (Most Recent Documents)

Compiled 18 August 2026 from the most recently added/updated senescence documents in `src/notes/senescence/`.
Sources (newest first):

- `Therapy-Induced Senescence.md` (updated 2026-08-16)
- 2026-08-15 entity batch: `Diabetic Kidney Disease.md`, `Lamins.md`, `Stemness.md`, `Viral Replication.md` plus supporting notes (Adaptor Protein, Amifostine, Autophagosome-lysosome fusion, Follistatin, Gut Dysbiosis, Immune Complex, Inflammatory Pain, Innate Immune Defense, Intestinal Barrier, Lymphopenia, MHC Class Ib, Myddosome, Natalizumab (Tysabri), Salmonella enterica)
- `SASP.md` (updated 2026-07-31)
- `_document_ - The role of the dynamic epigenetic landscape in senescence orchestrating SASP expression.md` (created 2026-07-27)
- `Senescence.md` (updated 2026-07-26)
- `SAMD.md`, `SADS.md` (updated 2026-07-25)
- Supporting docs quoted below: `_document_ - Mitochondrial dysfunction in cellular senescence a bridge to neurodegenerative disease.md` (created 2026-07-10), `_document_ - JCI -Expanding roles of cGAS-STING signaling in neuroinflammation.md` (created 2026-07-10)

---

## SAHF–SASP Necessity & 3D Genome Organization

- **SAHF necessity for SASP unresolved.** SAHF formation correlates with SASP expression, and SAHF disruption (via [[HIRA]] depletion or reduced nuclear pore density) decreases SASP — yet SAHF are not essential for cell cycle arrest and are not readily observed in vivo (HGPS patient cells, preneoplastic lesions; mouse embryo fibroblasts fail to form robust SAHF). Whether SAHF are *necessary* for SASP expression "remains unresolved" (dynamic epigenetic landscape doc; [[Senescence-Associated Heterochromatin Foci]]).
- **Euchromatin maintenance question.** It is unclear how SASP gene loci and enhancer regions maintain their position in euchromatin rather than becoming heterochromatinized and sequestered within SAHF — including why [[Super-enhancer|super-enhancer]] regions remain outside SAHF and whether [[HMGB2]] protects them (dynamic epigenetic landscape doc).
- **Compartment switching vs. heterochromatin loss.** Hi-C studies show B→A compartment switching in both RS and OIS, and SAHF-like compaction involves increased B–B long-range contacts, but the degree to which 3D remodeling (compartments, subcompartments, loops) *drives* SASP vs. merely correlates is unresolved (dynamic epigenetic landscape doc).
- **Technical resolution gap.** Most senescence Hi-C maps are >10 kb resolution — too coarse to resolve loops and enhancer–promoter interactions; multi-way (≥3-way) chromatin contacts are inaccessible to pairwise Hi-C and require long-read proximity ligation approaches (dynamic epigenetic landscape doc).
- **Late-stage senescence understudied.** Late (chronically retained) senescent cells are the most therapeutically relevant population but are rarely profiled due to experimental difficulty (Dalgarno preprint).

## DNA Hypomethylation, Enhancer Activation & Retrotransposon Derepression

- **Hypomethylation → enhancer activation link.** "Whether senescence-induced DNA hypomethylation plays a role in enhancer activation for SASP genes in RS cells remains to be elucidated"; DNA methylation in senescence is "enigmatic and highly influenced by context," and the direct involvement of CpG methylation in SASP expression "remains to be understood" (dynamic epigenetic landscape doc).
- **Reversibility question.** Whether manipulating DNA methylation during senescence could revert 3D genome organization and gene expression is an open, potentially reversible question (dynamic epigenetic landscape doc).
- **Retrotransposon–3D link.** DNA demethylation and heterochromatin decondensation trigger [[Endogenous Retrovirus|ERV]] transcription, and [[LINE-1]] derepression drives IFN-mediated inflammation; how 3D genome architecture supports retrotransposon activation (and vice versa) is only beginning to be defined (dynamic epigenetic landscape doc; [[LINE-1]]).

## CCF Formation & Genome Stability

- **CCF origin.** [[Cytoplasmic Chromatin Fragments]] (CCF) are enriched in heterochromatin marks and lack euchromatin marks, suggesting they emerge from SAHF regions or from damaged regions undergoing heterochromatinization — "the question remains regarding how the 3D genome organization maintains genome stability in senescent cells and dictates the formation of CCF from heterochromatin regions" (dynamic epigenetic landscape doc).
- **Histone loss–CCF connection.** [[DNA-SCARS]] may be precursors to CCF, and DNA damage induces 20–40% histone loss, but "the connection between histone loss and CCF remains unknown"; the specific role of histone loss in SASP expression "remains undefined" (dynamic epigenetic landscape doc).

## Senescence Biomarkers: No Universal Marker

- **No single biomarker.** "The exact proportion of senescent cells in aged tissues remains controversial due to a lack of a single biomarker for senescence" (mitochondrial dysfunction doc).
- **Rare-cell problem.** Senescent cells in tissues are rare, heterogeneous, and difficult to characterize; most senescence knowledge originates from tissue culture, where every cell is driven to arrest ([[SenNet|SenNet recommendations]], [[Senescence]]).
- **Circulating-biomarker gap.** Plasma/CSF SASP factors are candidate surrogate markers (GDF15, STC1, IL-6, IL-8, MMP-9, PAI-1), but panels separating senescent-cell burden from general inflammation are not validated clinically ([[SASP]]).

## SASP Composition & Heterogeneity

- SASP composition varies across senescence inducers, cell types, and time; exosome content is heterogeneous (proteins, lipids, miRNAs) and mediates paracrine effects; no consensus panel captures the full heterogeneity ([[SASP]]).
- SenCat-type multi-omic profiling is needed because "no single marker is universal" — different cell types/paradigms engage different senescence programs (SenCat 2026).

## mtDNA Release Pores/Channels & Mitochondrial DAMPs

- **Pore identity.** "It remains unclear whether these pathogenic proteins physically translocate into the mitochondrial matrix, which mitochondrial pores or channels mediate mtDNA release, and whether these processes are conserved across cell types"; mtDNA release mechanisms are cell-type- and trigger-dependent (e.g., mPTP inhibition fails to reduce cytosolic mtDNA in some neuronal lines) (JCI doc; [[VDAC1]], [[Mitochondrial Permeability Transition Pore]]).
- **DAMP contributions.** "While suggestive, more work is needed to fully elucidate the extent different DAMPs contribute to the senescent phenotype" (cardiolipin, TFAM, oxidized mtDNA; mitochondrial dysfunction doc); investigation of mitochondrial DAMPs in PD-associated neuroinflammation "is warranted."
- **mPTP paradox.** mPTP "flickering" supports senescence survival (calcium offloading) while sustained mPTP opening can act as a senolytic; [[Cyclophilin D]] is both an mPTP regulator and a senolytic target — the balance and molecular identity of the pore remain under investigation (mitochondrial dysfunction doc).

## Nuclear cGAS Noncanonical Functions

- "Further studies are needed to elucidate nuclear cGAS–interacting proteins and the functional consequences of nuclear cGAS on chromatin. In addition, it is important to understand how nuclear and cytosolic cGAS coordinate their functions" (JCI doc).
- Nuclear cGAS influences [[DNA Repair|DNA damage repair]] via [[PARP1]], suppresses homologous recombination, and may shape chromatin accessibility and gene expression (SWI/SNF and spliceosome interactors); defining nuclear cGAS in postmitotic neurons may illuminate neuronal vulnerability during aging and neurodegeneration (JCI doc).
- Potential intersections of cGAS with RNA-processing pathways ([[G3BP1]], [[PQBP1]]) may parallel but remain distinct from canonical inflammatory signaling (JCI doc).

## Senolytic Safety, Intermittent Dosing & Clinical Translation

- **Intermittent dosing rationale.** "Because clearance is rapid, pulsatile dosing minimizes off-target toxicity to healthy cells"; [[Senolytic Therapy|safety caveats]]: BCL-2 inhibitors cause thrombocytopenia; tissue selectivity and intermittent regimens are active design goals (Senolytic Therapy note).
- **Side-effect vigilance.** "It will be important to consider possible side effects when administering senolytic treatments, particularly in light of the role senescent cells play in wound healing and [[Liver Regeneration|liver regeneration]]" (mitochondrial dysfunction doc).
- **Clinical evidence base is thin.** Human senolytic data remain limited to small pilot/phase trials (D+Q, fisetin, UBX1325); no intermittent-dosing randomized trials with biomarker endpoints are published yet.

## Model-Independent Senomorphics & Epigenetic Approaches

- Epigenetic modulator knockdown ([[MLL1]], [[KDM4]], [[DOT1L]], [[BRD4]], [[HMGB2]]) blocks SASP without releasing arrest across models, but no model-independent senomorphic is clinically validated; BET/KDM4/DOT1L inhibitors already in oncology trials could be repurposed to tame TIS-associated inflammation (Therapy-Induced Senescence; dynamic epigenetic landscape doc).
- LINE-1/NRTI interventions (e.g., lamivudine) suppress retrotransposon-driven inflammation in mice but lack human clinical evidence ([[LINE-1]]; Simon 2019).

## TIS Escape & OIS Senolytic Paradox

- A small population of TIS cells can override arrest and re-enter the cell cycle, seeding recurrence (Lee & Schmitt 2019); the molecular determinants of escape (p21/p16 bypass, SCAP upregulation, immune evasion), its frequency in patients, and whether senolytic clearance of TIS cells improves outcomes remain poorly defined ([[Therapy-Induced Senescence]]; Saleh 2024).
- "An open question is whether transient OIS cell clearance can reduce the pro-tumorigenic [[SASP]] without compromising tumor suppression" ([[Oncogene-Induced Senescence]]; [[Senolytic Paradox]]).

## SADS Universality

- "The main uncertainty is the degree to which [[Senescence-Associated Distension of Satellites|SADS]] is universal across senescence inducers versus context-specific" (SADS note); the relationship between SADS (satellite decompaction) and retrotransposon activation/innate immunity is only partially defined (SADS.md).

## Underpowered D+Q Trials in Alzheimer's Disease

- D+Q senolytic trials in AD are small, short, feasibility-phase studies; no effects on cognition or structural MRI were observed, CSF/plasma biomarker changes were not statistically significant, and CNS penetration of dasatinib was at/near the limit of quantitation; larger powered trials are needed (mitochondrial dysfunction doc; Gonzales 2023; Garbarino 2025).

---

## Key Excerpts — Direct Quotes Supporting the Gaps

### The role of the dynamic epigenetic landscape in senescence: orchestrating SASP expression (created 2026-07-27; npj Aging 2024)

> While [[Senescence-Associated Heterochromatin Foci|SAHF]] formation correlates with SASP expression, SAHF are not essential for cell cycle arrest. Their disruption (via [[HIRA]] depletion or reduced nuclear pore density) decreases SASP, yet SAHF formation is not readily observed in vivo (e.g., [[Hutchinson-Gilford Progeria Syndrome|HGPS]] patient cells or preneoplastic lesions). Mouse embryo fibroblasts also fail to form robust SAHF. The necessity of SAHF for SASP expression remains unresolved.

> It remains unclear whether SAHF is necessary for SASP expression and how SASP gene loci and enhancer regions maintain their position within the euchromatin compartment rather than becoming heterochromatinized and sequestered within SAHF. ... the question remains regarding how the 3D genome organization maintains genome stability in senescent cells and dictates the formation of CCF from heterochromatin regions.

> Although DNA methylation is typically associated with less accessible chromatin at enhancers, whether senescence-induced DNA hypomethylation plays a role in enhancer activation for SASP genes in RS cells remains to be elucidated.

> However, the connection between histone loss and CCF remains unknown. While DNA-SCARS and CCF are known to play pivotal roles in SASP expression, and the loss of histones is correlated with SASP expression, the specific role of histone loss in SASP expression remains undefined.

> It remains to be determined how super-enhancer (SE) regions remain outside of SAHF and if HMGB2, similar to SASP loci, protects the SE regions from sequestering in SAHF.

> Capturing multi-way chromosomal interactions using long-read sequencing techniques, which directly sequences DNA multivalent fragments joined by proximity-based ligation, can provide deeper insights into the 3D genome, TAD formation, and multi-way enhancer-promoter interactions in senescent cells.

### Mitochondrial dysfunction in cellular senescence: a bridge to neurodegenerative disease (created 2026-07-10; npj Aging 2025)

> Current interest in cellular senescence largely focuses on the role senescent cells play in the aging process. Senescent cells accumulate with age in a number of species across a wide variety of tissues, although the exact proportion of senescent cells in aged tissues remains controversial due to a lack of a single biomarker for senescence.

> Like any other therapeutic, it will be important to consider possible side effects when administering senolytic treatments, particularly in light of the role senescent cells play in wound healing and liver regeneration.

> Other mitochondrial DAMPs may also contribute to SASP release. ... While suggestive, more work is needed to fully elucidate the extent different DAMPs contribute to the senescent phenotype.

> There exists substantial evidence linking cellular senescence to AD, although much of it remains correlative or derived from aggressive transgenic mouse models.

### JCI — Expanding roles of cGAS-STING signaling in neuroinflammation (created 2026-07-10; J Clin Invest 2026)

> Further studies are needed to elucidate nuclear cGAS–interacting proteins and the functional consequences of nuclear cGAS on chromatin. In addition, it is important to understand how nuclear and cytosolic cGAS coordinate their functions.

> It remains unclear whether these pathogenic proteins physically translocate into the mitochondrial matrix, which mitochondrial pores or channels mediate mtDNA release, and whether these processes are conserved across cell types.

> This heterogeneity highlights the need for caution when extrapolating findings across disease models.

### Entity notes (Senescence-Associated Heterochromatin Foci; SADS; Senolytic Therapy; Oncogene-Induced Senescence)

> Review describes SAHF as DAPI-dense heterochromatin organized by H3K9me3/H3K27me3/DNA methylation, whose disruption correlates with reduced SASP expression, though their necessity for SASP is unresolved. — [[Senescence-Associated Heterochromatin Foci]]

> The main uncertainty is the degree to which SADS is universal across senescence inducers versus context-specific. — [[SADS]]

> Because clearance is rapid, pulsatile dosing minimizes off-target toxicity to healthy cells. ... Safety caveats: BCL-2 inhibitors can cause thrombocytopenia; tissue selectivity and intermittent regimens are active design goals. — [[Senolytic Therapy]]

> An open question is whether transient OIS cell clearance can reduce the pro-tumorigenic SASP without compromising tumor suppression. — [[Oncogene-Induced Senescence]]

---

## Prioritized Themes for New Entity Notes / Investigation

- SAHF–SASP causality and 3D genome organization → biomarker-agnostic definition of senescence.
- DNA hypomethylation → enhancer/loop activation → SASP; reversibility via methylation manipulation.
- mtDNA release pore identity (BAX/BAK macropores vs. VDAC1 vs. mPTP) and mitochondrial DAMPs.
- Nuclear cGAS noncanonical (chromatin/gene-expression) functions.
- Universal vs. context-specific senescence markers (SenCat/SenePy/SenNet) and circulating signatures.
- Senolytic clinical translation: intermittent dosing, safety, beyond D+Q (UBX1325, fisetin, SToMP-AD).
- TIS escape and OIS senolytic paradox — when to clear vs. preserve senescent cells.
- Model-independent senomorphics including the LINE-1/NRTI axis.

---

# Paper Recommendations to Fill the Gaps — 18 August 2026

Compiled 18 August 2026 via targeted web search (PubMed/DOI verification) against every gap listed above. Each recommendation maps to at least one open question; papers are tiered by how directly they fill the gap, recency, and value to the vault (entity enrichment + new `_document_` files). All DOIs/PMIDs verified via Europe PMC.

## Tier 1 — Direct Experimental / Mechanistic Fills (highest priority)

### 1. SAHF–SASP relationship & senescence heterogeneity (3D genome)

- **Paper:** Olan I, et al. "HMGA1 orchestrates chromatin compartmentalization and sequesters genes into 3D networks coordinating senescence heterogeneity." *Nat Commun.* 2024;15:6983. doi:10.1038/s41467-024-51153-8. PMID 39134516
- **Why it fills the gap:** Experimental Hi-C/3D-network study of [[HMGA1]]-mediated compartmentalization in senescence; shows how 3D genome organization sequesters genes and coordinates senescence heterogeneity — the primary recent data directly addressing how SAHF-like compaction coexists with SASP euchromatin.

### 2. DNA hypomethylation → SASP loops + LINE-1 derepression (3D)

- **Paper:** Dalgarno A, Evans SA, Kelsey MMG, et al. "Senescence-Associated Chromatin Rewiring Promotes Inflammation and Transposable Element Activation." *bioRxiv* [Preprint]. 2025 Jun 17:2025.06.11.659151. doi:10.1101/2025.06.11.659151. PMID 40666907
- **Why it fills the gap:** Highest-resolution (~2.75 kb) Hi-C maps of replicative senescence; ~6-fold increase in unique loops, hypomethylation-driven CTCF-independent loop formation, 67% of SASP genes within altered loops, and a LINE-1 structural hotspot (L1HS_14q23.2_3). Also shows quiescent controls are unexpectedly pro-inflammatory — a critical experimental-design caution. **Preprint — not yet peer-reviewed.**

### 3. mtDNA release during senescence (pore identity)

- **Paper:** Victorelli S, et al. "Apoptotic stress causes mtDNA release during senescence and drives the SASP." *Nature.* 2023;622:627-636. doi:10.1038/s41586-023-06621-4. PMID 37821702
- **Why it fills the gap:** Definitive mechanistic fill for the mtDNA-release gap: [[BAX]]/[[BAK]] macropores (mitochondrial outer membrane permeabilization) — *not* mPTP — mediate mtDNA release driving cGAS-STING SASP in senescence; resolves part of the "which pore" question.

### 4. mtDNA release in postmitotic cells (VDAC1)

- **Paper:** Li Y, et al. "mtDNA release promotes cGAS-STING activation and accelerated aging of postmitotic muscle cells." *Cell Death Dis.* 2024;15:527. doi:10.1038/s41419-024-06863-8. PMID 39039044
- **Why it fills the gap:** Fills the cell-type-specific pore question: [[VDAC1]] oligomerization (not BAX/BAK) releases mtDNA in Zmpste24-deficient postmitotic muscle; VBIT-4 (VDAC1 oligomerization inhibitor) blocks it — a direct counterpoint showing pore identity is trigger- and cell-type-dependent.

### 5. Extracellular mtDNA & immune heterogeneity (SASP amplification)

- **Paper:** Lai P, et al. "Mitochondrial DNA released by senescent tumor cells enhances PMN-MDSC-driven immunosuppression through the cGAS-STING pathway." *Immunity.* 2025. doi:10.1016/j.immuni.2025.03.005. PMID 40203808
- **Why it fills the gap:** Connects senescent-cell mtDNA release to the immune microenvironment: senescent tumor cells release mtDNA (via extracellular vesicles) that drives [[Myeloid-Derived Suppressor Cells|PMN-MDSC]] immunosuppression through cGAS-STING — expands the mtDNA-DAMP gap beyond cell-autonomous SASP.

### 6. Nuclear cGAS noncanonical functions

- **Paper:** Dvorkin S, et al. "New frontiers in the cGAS-STING intracellular DNA-sensing pathway." *Immunity.* 2024:718-730. doi:10.1016/j.immuni.2024.02.019. PMID 38599167
- **Why it fills the gap:** 2024 review by the Stetson lab covering nuclear cGAS–chromatin tethering, DDR, senescence, and aging — the most current synthesis of nuclear cGAS function filling the "further studies needed" gap.

### 7. Nuclear cGAS / mtDNA in senescence & aging (2026 state)

- **Paper:** Tan S, et al. "The cGAS-STING pathway in senescence and aging-related diseases: mechanisms and therapeutic opportunities." *Cell Commun Signal.* 2026:292. doi:10.1186/s12964-026-02855-7. PMID 41923153
- **Why it fills the gap:** 2026 review consolidating cGAS-STING in senescence/aging biology and therapy — update layer for [[cGAS-STING Pathway]] covering both nuclear and cytosolic cGAS and mtDNA triggers.

### 8. SADS / pericentromeric heterochromatin (mechanism)

- **Paper:** Mendez-Bermudez A, et al. "Selective pericentromeric heterochromatin dismantling caused by TP53 activation during senescence." *Nucleic Acids Res.* 2022;50:7493-7510. doi:10.1093/nar/gkac603. PMID 35819196
- **Why it fills the gap:** Direct molecular mechanism for [[Senescence-Associated Distension of Satellites|SADS]]: TP53 activation selectively dismantles pericentromeric heterochromatin at senescence onset — the best current mechanistic anchor for the SADS-universality gap.

### 9. SADS / heterochromatin loss & 3D genome (complement)

- **Paper:** Zhang X, et al. "The loss of heterochromatin is associated with multiscale three-dimensional genome reorganization and aberrant transcription during cellular senescence." *Genome Res.* 2021;31(7):1121-1135. doi:10.1101/gr.275235.121. PMID 34140314
- **Why it fills the gap:** Genome-wide link between heterochromatin loss (including satellite regions), 3D reorganization, and aberrant transcription in senescence — complements #8 and the CCF/hypomethylation gaps.

### 10. TIS escape

- **Paper:** Saleh T. "Therapy-induced senescence is finally escapable, what is next?" *Cell Cycle.* 2024;23:713-721. doi:10.1080/15384101.2024.2364579. PMID 38879812
- **Why it fills the gap:** Commentary consolidating breakthrough evidence that TIS cells can escape arrest and re-enter the cell cycle (tumor dormancy/recurrence); reframes TIS as escapable and argues for senolytic elimination of TIS cells — anchors the TIS-escape gap.

### 11. LINE-1 / NRTI senomorphic axis

- **Paper:** Simon M, et al. "LINE1 Derepression in Aged Wild-Type and SIRT6-Deficient Mice Drives Inflammation." *Cell Metab.* 2019;29:871-885.e5. doi:10.1016/j.cmet.2019.02.014. PMID 30853213
- **Why it fills the gap:** Canonical mechanistic proof that [[LINE-1]] derepression drives age-related sterile inflammation and that NRTI treatment (lamivudine) suppresses it in mice — the experimental backbone for the LINE-1/NRTI senomorphic gap (no human NRTI trial published yet).

### 12. 3D genome reorganization (review context)

- **Paper:** Shaban HA, Gasser SM. "Dynamic 3D genome reorganization during senescence: defining cell states through chromatin." *Cell Death Differ.* 2025;32:9-15. doi:10.1038/s41418-023-01197-y. PMID 37596440
- **Why it fills the gap:** Authoritative review of 3D-genome changes across senescence types — contextual anchor for papers #1, #2, #8, #9 and the SAHF/CCF gaps.

## Tier 2 — Biomarkers, Human Cohorts & Clinical Trials

### 13. No universal senescence marker (heterogeneity)

- **Paper:** Anerillas C, et al. "SenCat: Cataloging human cell senescence through multi-omic profiling of multiple senescent primary cell types." *Mol Cell.* 2026;86(13):2605-2616.e8. doi:10.1016/j.molcel.2026.05.017. PMID 42276073
- **Why it fills the gap:** Landmark multi-omic catalog across 14 primary human cell types / 30+ senescence paradigms; shows no single marker is universal and defines cell-type-specific senescence signatures — the most direct experimental answer to the biomarker-universality gap (SenCat).

### 14. Circulating senescence signatures (clinical)

- **Paper:** Olinger B, et al. "Circulating cell type senescence signatures track distinct dimensions of health status and trajectories in human longitudinal cohorts." *Cell Rep.* 2026:117389. doi:10.1016/j.celrep.2026.117389. PMID 42276069
- **Why it fills the gap:** Applications of the SenCat signatures to human longitudinal cohorts: circulating cell-type senescence signatures track health status/trajectories — first direct translational fill for the circulating-biomarker gap.

### 15. Single-cell senescence detection

- **Paper:** Sanborn MA, et al. "Unveiling the cell-type-specific landscape of cellular senescence through single-cell transcriptomics using SenePy." *Nat Commun.* 2025;16:1884. doi:10.1038/s41467-025-57047-7. PMID 39987255
- **Why it fills the gap:** SenePy computational framework detects senescence programs in single-cell data across tissues/species — the tool layer for parsing senescence heterogeneity from existing atlases.

### 16. Senescence marker recommendations (consensus)

- **Paper:** SenNet Biomarkers Working Group. "SenNet recommendations for detecting senescent cells in different tissues." *Nat Rev Mol Cell Biol.* 2024;25(12):1001-1023. doi:10.1038/s41580-024-00738-8. PMID 38831121
- **Why it fills the gap:** Consensus recommendations for senescence markers across 14 tissues (mouse/human) — fills the "how to actually detect senescent cells in tissues" gap and anchors the biomarker theme.

### 17. Computational senescence atlas (resource)

- **Paper:** Li S, et al. "Advancing biological understanding of cellular senescence with computational multiomics." *Nat Genet.* 2025:2381-2394. doi:10.1038/s41588-025-02314-y. PMID 40954249
- **Why it fills the gap:** SenNet multi-omics analytics overview (data portal, signatures, standardization) — resource anchor for the [[SenNet]] initiative and its outputs.

### 18. Underpowered D+Q AD trials (primary data)

- **Paper:** Gonzales MM, et al. "Senolytic therapy in mild Alzheimer's disease: a phase 1 feasibility trial." *Nat Med.* 2023:2481-2488. doi:10.1038/s41591-023-02543-w. PMID 37679434
- **Why it fills the gap:** SToMP-AD phase 1: D+Q safety/feasibility in 5 early AD patients; no cognition/MRI effects; dasatinib at the limit of quantitation in CSF — primary evidence documenting the underpowering flagged in the vault.

### 19. Underpowered D+Q AD trials (biomarker follow-up)

- **Paper:** Garbarino VR, et al. "Evaluation of exploratory fluid biomarkers from a phase 1 senolytic trial in mild Alzheimer's disease." *Neurotherapeutics.* 2025;22(4):e00591. doi:10.1016/j.neurot.2025.e00591. PMID 40274471
- **Why it fills the gap:** Follow-up biomarker analysis (CSF/plasma) from SToMP-AD — documents which exploratory fluid biomarkers moved (or not) and defines the measurement toolkit for future powered trials.

### 20. Senolytics beyond D+Q (randomized phase 2)

- **Paper:** Klier S, et al. "Safety and Efficacy of Senolytic UBX1325 in Diabetic Macular Edema." *NEJM Evidence.* 2025:EVIDoa2400009. doi:10.1056/evidoa2400009. PMID 40261111
- **Why it fills the gap:** Randomized phase 2 trial of the [[Bcl-xL]] inhibitor senolytic UBX1325 (foselutoclax) in diabetic macular edema — the most advanced non-D+Q senolytic clinical data, filling the "senolytics beyond pilot trials" gap.

### 21. Senolytic clinical modeling (fisetin OA)

- **Paper:** Siewe N, Friedman A. "Modeling treatment of osteoarthritis with standard therapy and senolytic drugs." *PLoS One.* 2025;20:e0332763. doi:10.1371/journal.pone.0332763. PMID 40982544
- **Why it fills the gap:** Mathematical modeling of the randomized fisetin-in-OA trial (NCT04210986, Steadman Philippon) — quantifies intermittent senolytic scheduling alongside standard OA therapy; supports the intermittent-dosing design discussion.

## Tier 3 — Therapeutic Landscape & Reviews

### 22. Senotherapies landscape (senolytics + senomorphics)

- **Paper:** McHugh D, Durán I, Gil J. "Senescence as a therapeutic target in cancer and age-related diseases." *Nat Rev Drug Discov.* 2025. doi:10.1038/s41573-024-01074-4. PMID 39548312
- **Why it fills the gap:** 2025 authoritative review of senotherapy challenges/opportunities (selectivity, dosing, biomarkers, clinical trials) — anchor for the senolytic safety/intermittent-dosing and senomorphic themes.

### 23. Senolytics & senomorphics (mechanistic classes)

- **Paper:** Saliev T, Singh PB. "Targeting Senescence: A Review of Senolytics and Senomorphics in Anti-Aging Interventions." *Biomolecules.* 2025;15(6):860. doi:10.3390/biom15060860. PMID 40563501
- **Why it fills the gap:** 2025 review of senolytic/senomorphic drug classes incl. epigenetic modulators — fills the model-independent senomorphic gap at review level with mechanistic framing.

### 24. cGAS-STING in neuroinflammation (therapeutic)

- **Paper:** Dvorkin S, et al. (Immunity 2024) as #6; Tan S, et al. (Cell Commun Signal 2026) as #7
- **Why it fills the gap:** See Tier 1 — both double as therapeutic-landscape reviews for STING pharmacology.

## Coverage Summary Table

- **SAHF–SASP necessity** — Partially filled (Olan 2024; Shaban & Gasser 2025) — a definitive SAHF-ablation/in vivo necessity experiment is still missing
- **DNA hypomethylation → enhancer/SASP activation** — Partially filled (Dalgarno preprint: loop-level mechanism; hypomethylation–enhancer causality in vivo still untested)
- **CCF formation & genome stability** — **Unfilled** — no direct CCF-formation mechanism paper (DNA-SCARS→CCF transition, nuclear envelope rupture) located
- **No universal senescence biomarker** — **Filled at research level** (SenCat; SenNet recommendations; SenePy; SenNet multiomics) — clinical-grade single marker still open
- **SASP composition/heterogeneity** — **Filled** (SenCat multi-cell-type; Olinger circulating signatures; SenePy single-cell)
- **mtDNA release pore identity** — **Filled** (Victorelli BAX/BAK; Li VDAC1; Lai extracellular mtDNA) — trigger/cell-type specificity now better bounded but not exhausted
- **Nuclear cGAS function** — Partially filled (Dvorkin 2024; Tan 2026 reviews) — dedicated nuclear-cGAS mechanism in senescence still open
- **Senolytic safety / intermittent dosing** — Partially filled (UBX1325 phase 2; Siewe & Friedman modeling) — no intermittent-dosing RCT with biomarker endpoints
- **Model-independent senomorphics** — Partially filled (review level; apigenin preprint already in vault) — validated model-independent senomorphic still open
- **TIS escape** — **Filled at concept level** (Saleh 2024) — molecular biomarkers of escape still open
- **OIS senolytic paradox** — **Unfilled** — no dedicated experimental paper located; only note-level framing
- **SADS universality** — Partially filled (Mendez-Bermudez 2022; Zhang 2021) — systematic screen across inducers/cell types not yet published
- **Underpowered D+Q AD trials** — **Filled as evidence** (Gonzales 2023 + Garbarino 2025 document the underpowering) — larger powered trial results still not published
- **LINE-1 / NRTI interventions** — Partially filled (Simon 2019 canonical; Dalgarno preprint) — no human NRTI trial results located
- **D+Q diabetic kidney disease trial** — **Already covered** — [[Diabetic Kidney Disease]] documents NCT02848131 pilot; no newer DKD senolytic publication located (excluded to avoid duplication)

## Already Queued / Already Covered in the Vault

- **D+Q in diabetic kidney disease** — already covered by `src/notes/senescence/Diabetic Kidney Disease.md` (NCT02848131 pilot, updated 2026-08-15). No new DKD senolytic publication was located during this research pass.
- `src/notes/_link/_document_ - repurposing_apigen_senomorphic.09.09.611999v1.full.md` — apigenin senomorphic preprint already ingested; relevant to the model-independent senomorphics gap (no new action needed).
- `src/notes/senescence/_document_ - Fisetin is a senotherapeutic that extends health and lifespan.md` — fisetin background already in vault; the OA-trial modeling paper (#21) would extend it.
- `raw/` currently holds only sirtuin-related documents — no senescence documents queued for ingestion.

## Gaps Still Unfilled (flag for future searches)

- **Direct causal test of SAHF necessity for SASP** (e.g., conditional SAHF ablation in vivo; SAHF-competent vs. SAHF-deficient models of the same inducer).
- **CCF formation mechanism** — molecular transition from DNA-SCARS/heterochromatin to cytoplasmic chromatin fragments; nuclear envelope rupture contribution.
- **Causal link between enhancer DNA hypomethylation and SASP transcription** (beyond correlation; methylation-editing experiments).
- **Dedicated experimental paper on the OIS senolytic paradox** (timing/windows of clearance in premalignancy).
- **SADS universality screen** across many inducers, cell types, and species.
- **Human NRTI (lamivudine) trial results** for inflammaging/senolytic-adjacent outcomes.
- **Larger powered D+Q (or other senolytic) AD trial results** — designs ongoing, results not yet published.
- **Intermittent-dosing randomized senolytic trials** with validated biomarker endpoints.

## Suggested New Entity Notes (Step 3 of ingestion workflow)

Create (no existing note; verified 18 Aug 2026):

- **[[SenNet]]** — NIH Common Fund consortium behind the biomarker recommendations (2024), computational multiomics (2025), and tissue atlases; becomes the hub linking consortium outputs to in-vault resources.
- **[[UBX1325]]** — first Bcl-xL inhibitor senolytic with randomized phase 2 clinical data (diabetic macular edema); anchors the "beyond D+Q" clinical senolytics thread.
- **[[HMGA1]]** — exists in `src/notes/_link/HMGA1.md`; do **not** create (Olan 2024 becomes its primary 3D-genome reference).

Do **not** create (already covered):

- [[HMGA1]], [[VDAC1]], [[BAX]], [[BAK]], [[Cyclophilin D]], [[Mitochondrial Permeability Transition Pore]], [[TFAM]], [[Cardiolipin]], [[PINK1]], [[LINE-1]], [[Fisetin]], [[Bcl-xL]], [[G3BP1]], [[PQBP1]] — existing notes in `src/notes/_link/`.
- [[Klf4]] — exists as `src/notes/epigenetics/Klf4.md`.
- [[Myeloid-Derived Suppressor Cells]] — covers the PMN-MDSC axis from Lai 2025.
- [[Senescence-Associated Heterochromatin Foci]], [[SADS]], [[Senolytic Paradox]], [[Senomorphic Therapy]], [[Senolytic Therapy]] — existing senescence-topic notes.
- [[DAPI]], [[SWI]], [[Timeless]], [[SP100]] — low-value generic terms; link textually instead.

## Existing Entity Notes to Enrich (Step 2 of ingestion workflow)

- **[[Senescence-Associated Heterochromatin Foci]]** — add Olan 2024 (HMGA1 3D networks), Dalgarno preprint (loop/compartment data), Shaban & Gasser 2025.
- **[[Senescence]]** — add SenNet recommendations 2024, SenCat 2026, SenePy 2025, SenNet multiomics 2025, Saleh 2024 (TIS escape).
- **[[SASP]]** — add Olinger 2026 (circulating signatures), Dalgarno preprint (67% of SASP genes in altered loops), SenCat heterogeneity data.
- **[[SADS]]** — add Mendez-Bermudez 2022 (TP53-driven dismantling) and Zhang 2021 (heterochromatin-loss 3D reorganization).
- **[[cGAS-STING Pathway]]** — add Dvorkin 2024 and Tan 2026 (nuclear cGAS + senescence/aging).
- **[[VDAC1]]** — add Li 2024 (VDAC1 oligomerization, VBIT-4).
- **[[BAX]] / [[BAK]]** — add Victorelli 2023 (macropore-mediated mtDNA release driving SASP).
- **[[Mitochondrial Permeability Transition Pore]]** — add Victorelli 2023 negative finding (mPTP not required for mtDNA release during senescence) — an important boundary condition.
- **[[LINE-1]]** — add Simon 2019 (NRTI suppression) and Dalgarno preprint (3D-structural activation).
- **[[Senolytic Therapy]]** — add Klier 2025 (UBX1325), Siewe & Friedman 2025, Gonzales 2023, Garbarino 2025.
- **[[Therapy-Induced Senescence]]** — add Saleh 2024 (escapability commentary).
- **[[Oncogene-Induced Senescence]] / [[Senolytic Paradox]]** — add Olan 2024 (OIS 3D/heterogeneity), note paradox status on clearance timing.
- **[[Alzheimer's Disease]]** — add Gonzales 2023 (SToMP-AD) and Garbarino 2025 (fluid biomarkers).