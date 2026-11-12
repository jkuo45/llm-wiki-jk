---
title: Cytotoxic CD4+ T cells induce age-associated myelopoiesis through CCL5–CCR5 signaling
description: Shows in aged mice that cytotoxic CD4+ T cells accumulating in the bone marrow drive myelopoiesis and neutrophilia via TCR–mitochondrial stress–STING–dependent CCL5 signaling to CCR5 on hematopoietic progenitors, and that the FDA-approved CCR5 antagonist maraviroc normalizes hematopoiesis and improves healthspan.
published: 2026-08-26
created: 2026-11-10
source: https://doi.org/10.1038/s43587-026-01209-9
author:
- Enrique Gabandé-Rodríguez
- Gonzalo Soto-Heredero
- María Mittelbrunn
tags:
  - document
  - immunosenescence
  - inflammaging
  - hematopoiesis
  - chemokine
aliases:
  - CCL5-CCR5 myelopoiesis paper
---

# Cytotoxic CD4+ T cells induce age-associated myelopoiesis through CCL5–CCR5 signaling

> [!info] Key finding
> [[Cytotoxic CD4+ T Cells|CD4+ CTLs]] accumulate in the aged bone marrow, produce [[CCL5]] in a [[T Cell Receptor|TCR]]–mitochondrial-stress–[[STING]]-dependent manner, and drive myeloid skewing of [[Hematopoiesis]] through [[CCR5]] on [[Hematopoietic Stem Cell|HSCs]] and myeloid progenitors. The FDA-approved CCR5 antagonist [[Maraviroc]] normalizes the neutrophil-to-lymphocyte ratio and improves aging biomarkers in old mice.

## Overview

Age-associated [[Hematopoiesis|hematopoietic skewing]] favors myeloid over lymphoid output, raising the neutrophil-to-lymphocyte ratio (NLR) — a strong predictor of all-cause mortality across age-associated human diseases (Rotterdam Study; Baltimore Longitudinal Study on Aging). This study identifies a **T cell–bone marrow axis** behind the skewing: [[Cytotoxic CD4+ T Cells|cytotoxic CD4+ T cells]] accumulate in the aged [[Bone Marrow]] and induce [[Myelopoiesis]] via [[CCL5]]–[[CCR5]] signaling. Pharmacological CCR5 blockade with [[Maraviroc]] (FDA-approved for HIV-1) normalizes myelopoiesis and improves multiple healthspan outcomes in aged mice.

## Results

### CD4+ T cells induce age-associated myelopoiesis

- Spectral flow cytometry (UMAP) of young (3-month) versus old (24-month) mice showed increased circulating neutrophils and monocytes, reduced lymphocytes, an elevated NLR, and increased neutrophil infiltration of kidney, lung, and liver.
- Aged mice had increased percentages/numbers of [[Hematopoietic Stem Cell|HSCs]] and granulocyte–monocyte precursors (GMPs), decreased common lymphoid progenitors (CLPs), and more CXCR4^hi^CD62L^lo "aged" neutrophils with an activated profile (upregulated ICAM-1, TLR-4, CD11b, CD66a, CD101; downregulated CXCR2).
- Unlike blood, lymph nodes, and spleen, the [[Bone Marrow|BM]] of old mice had an increased percentage of [[CD4+ T Cells]].
- Adoptive transfer of CD4+ cells from old donors into T/B-cell-deficient Rag1−/− recipients increased LS−K cells, GMPs, and BM neutrophils within 7 days, showing aged CD4+ T cells directly promote myelopoiesis; T-cell-deficient old *Cd3e−/−* mice had lower circulating neutrophils/monocytes.

### CCL5-producing CD4+ T cells accumulate in the BM with age

- Unbiased clustering of BM CD4+ T cells identified nine subsets; a [[CCL5]]+ cluster (>25% of CD4+ cells in old mice versus 1.64% mean in young; *P* < 0.0001) dominated the age-expanded population.
- The [[CCL5]]+ cluster expressed high CD38 and [[EOMES]] with low CD44 — a [[Cytotoxic CD4+ T Cells|CD4+ CTL]] signature — confirmed by perforin, T-bet, granzyme A, and [[Granzyme B]] staining, and by enrichment of cytotoxic/NK-associated transcripts (*Nkg7, Ctsd, Ctsw, Gzmb, Gzmk, Gzmm, Klre1, Klrb1f, Tbx21, Runx3*) in public scRNA-seq datasets.

### TCR stimulation in an aged milieu induces CCL5+CD4+ CTL differentiation

- Heterochronic adoptive transfer of young CD45.1+ CD4+ T cells into old recipients produced an 18.5-fold increase of CD4+ CTLs in the BM (versus young recipients), with donor cells preferentially enriched in the BM.
- OT-II cells (OVA-specific TCR, no antigen) transferred into old hosts showed reduced CCL5+ and PD-1+ fractions, indicating [[T Cell Receptor|TCR]] signaling is required for CD4+ CTL differentiation in an aged environment; cytokine exposure alone is insufficient.

### BM CD4+ CTLs exhibit altered mitochondria and STING-dependent CCL5 production

- CD4+ CTLs showed depolarized mitochondria (low TMRM/MitoTracker Green ratio), elevated mitochondrial ROS ([[MitoSOX]]), and downregulated mitochondrial-function gene programs.
- Chronic (CS) versus acute (AS) anti-CD3/CD28 stimulation in vitro reproduced the phenotype: increased CCL5, CD38, PD-1, EOMES, T-bet, perforin, GzmB, GzmK, cytotoxicity against antigen-loaded B cells, mitochondrial depolarization, and impaired respiration (Seahorse OCR; oligomycin/BAM15/rotenone).
- Inhibiting complexes I (rotenone) or III (antimycin A) increased CCL5 in CS cells; CS cells and aged CD4+ T cells showed TOMM20-negative cytosolic DNA foci by STED microscopy.
- CS cells from *Sting−/−* mice had markedly reduced CCL5 with preserved EOMES; cGAMP increased CCL5 dose-dependently. In vivo, *Sting−/−* CD4+ cells adoptively transferred into aged hosts produced less CCL5 but showed normal EOMES+ frequencies.
- Genetic mitochondrial dysfunction recapitulated the aging phenotype: *Cd4CreTfamfl/fl* mice (T-cell-specific [[TFAM]] deletion) at 8 months showed CD4+CCL5+ accumulation, neutrophilia, elevated NLR, expanded GMPs, and MPO+ neutrophil infiltration of kidney, liver, and lung — mirroring 24-month-old mice.

> [!important] Mechanistic chain
> Chronic [[T Cell Receptor|TCR]] stimulation → mitochondrial depolarization/ROS → cytosolic [[mitochondrial DNA]] release → [[cGAS-STING Pathway|cGAS–STING]] activation → [[CCL5]] upregulation in [[Cytotoxic CD4+ T Cells|CD4+ CTLs]] (STING dispensable for cytotoxic differentiation but required for CCL5 induction).

### Aged CD4+ CTLs induce myelopoiesis through CCL5–CCR5 signaling

- Old mice showed increased percentages of [[CCR5]]+ HSCs and GMPs in the BM.
- In mixed BM chimeras (1:1 *Ccr5+/+* CD45.1 / *Ccr5−/−* CD45.2), transfer of aged CD4+ cells expanded LS−K, CMP, GMP, Ly6C^hi monocyte and neutrophil fractions only in *Ccr5+/+* progenitors, leaving HSCs, CLPs, and CD8+ cells unaffected.
- Co-culture of sorted LSK cells with aged (but not young) CD4+ T cells increased Gr-1+ myeloid output; this was reversed by an anti-CCL5 blocking antibody.

### Inhibition of CCR5 reduces myelopoiesis and improves health status in aged mice

- One month of daily [[Maraviroc]] (35 mg/kg i.p.) in 23-month-old mice reduced GMPs and LS−K cells (no effect on HSCs), lowered circulating and tissue-infiltrating neutrophils, and normalized the NLR.
- Maraviroc reduced serum inflammaging cytokines (IL-6, TNF, IL-12p70, IL-18, IL-22, CXCL1; GM-CSF unaffected), nonfasting glucose, albumin, ALT, AST; normalized the respiratory exchange ratio, forelimb strength, and rotarod performance. No effect in young mice.

## Discussion

- [[Cytotoxic CD4+ T Cells|CD4+ CTLs]] expand with age (supercentenarians, chronic infection, cancer) and can eliminate senescent cells, but massive BM accumulation drives myelopoiesis and neutrophilia — a double-edged effector population.
- Prior models of hematopoietic aging emphasized the BM niche (adrenergic nerve degeneration, IL-1β, IGF1 decline, vascular and adipocyte changes); this work adds T cell infiltration as a causal driver of myeloid skewing. CCL5+ T cells in multiple sclerosis similarly drive BM myelopoiesis.
- STING deficiency reduced but did not abolish CCL5; NF-κB (activated by STING or directly by TCR) likely contributes. CD38, a [[NAD+]]ase, may itself feed mitochondrial stress.
- CCR5-Delta32 loss-of-function carriers show better stroke and multiple sclerosis outcomes; rebalancing hematopoiesis (myeloid-biased HSC depletion) rejuvenates aged immunity.
- Other CCL5 sources (monocytes, CD8+ T cells, NK cells) may amplify the CD4+ CTL signal.

## Methods (key points)

- C57BL/6 mice; young <4 months, old 22–25 months; spectral flow cytometry (Aurora) with UMAP/Cluster-X in OMIQ; [[Hematopoietic Stem Cell|HSC]] = LSK CD48+CD150−, GMP = LS−K CD16/32+CD34+, CLP = LSloKlo IL-7R+FLT3+.
- Adoptive transfers (MojoSort CD4 isolation, 6×10^6 cells i.v.), mixed BM chimeras (lethal 2×5.5 Gy irradiation), OT-II antigenic stimulation with OVA323–339-pulsed *Cd3e−/−* splenocytes.
- TMRM (25 nM) + MitoTracker Green (50 nM) with verapamil for membrane potential/mass; MitoSOX for mtROS; Seahorse XFe96 OCR; STED microscopy (anti-DNA + anti-TOMM20) for cytosolic DNA foci.
- *Sting−/−* (Sting_emKO), *Cd4CreTfamfl/fl*, *Ccr5−/−*, *Cd3e−/−*, [[Rag1|Rag1−/−]] strains; maraviroc 35 mg/kg/day i.p. in 10% DMSO/40% PEG300/5% Tween 80/45% saline for 1 month.

## Related entities

[[CCL5]], [[CCR5]], [[Cytotoxic CD4+ T Cells]], [[Myelopoiesis]], [[Maraviroc]], [[STING]], [[cGAS-STING Pathway]], [[TFAM]], [[Granzyme B]], [[Neutrophils]], [[Hematopoietic Stem Cell]], [[Hematopoiesis]], [[Bone Marrow]], [[Inflammaging]], [[Immunosenescence]], [[NAD+]], [[T Cell Receptor]], [[CD4+ T Cells]]
