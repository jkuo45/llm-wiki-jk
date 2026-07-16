---
title: PRDX6
description: Peroxiredoxin 6 (PRDX6), a 1-Cys peroxiredoxin with peroxidase, iPLA2, and LPCAT activities; the direct molecular target of apigenin's senomorphic suppression of the SASP in senescent cells.
created: 2026-07-10
updated: 2026-07-10
tags:
  - enzyme
  - peroxiredoxin
  - antioxidant
  - redox
  - senescence
  - sasp
  - phospholipase
  - protein
aliases: [Peroxiredoxin 6, PRDX6, Peroxiredoxin-6, 1-Cys peroxiredoxin, aiPLA2]
---

# PRDX6

**Peroxiredoxin 6** ([[PRDX6]]) is the unique 1-Cys member of the [[Peroxiredoxin|peroxiredoxin family]], a group of six highly conserved antioxidant enzymes ([[PRDX1]]–[[PRDX6]]) that use a catalytic cysteine residue to reduce peroxides. Distinct among the family, PRDX6 possesses three enzymatic activities: **peroxidase**, **acidic calcium-independent phospholipase A2 (aiPLA2 / iPLA2)**, and **lysophosphatidylcholine acyltransferase (LPCAT)**. It is an intracellular redox-active protein important for lipid peroxidation repair, inflammatory signaling, and antioxidant damage response[67, 68].

## Structure & Domains

PRDX6 is a ~25 kDa monomer. Unlike the 2-Cys peroxiredoxins, it contains a single conserved resolving cysteine (Cys91 in human PRDX6) and does not form the typical disulfide-linked dimer. The protein also harbors a phospholipase A2-like domain responsible for its iPLA2 activity, which is unusual for the peroxiredoxin family. Structural studies (PDB 5B6M) position [[Cys91]] in the peroxidatic active site and [[Glu210]] at the interface of the catalytic conformation[43].

## Mechanism of Action & Activities

- **Peroxidase activity** — PRDX6 reduces H2O2 (and organic peroxides) to water in the presence of NADPH and the accessory reductase [[PRDX1]]/[[PRDX1]]-regenerating system, minimizing oxidation damage. Its peroxidase activity is selectively inhibited by [[NAC]] (IC50 ≈ 15.5 µM)[44].
- **iPLA2 / PLA2 activity** — PRDX6's phospholipase A2 domain hydrolyzes membrane phospholipids to release [[Arachidonic Acid|arachidonic acid (AA)]], a pro-inflammatory eicosanoid precursor that promotes inflammation. Inhibition of this activity (e.g., by [[MJ33]]) suppresses inflammatory gene expression.
- **LPCAT activity** — reacylates lysophospholipids, contributing to membrane phospholipid repair.

## PRDX6 as the Direct Target of Apigenin (Senomorphic Mechanism)

> [!info] Source: [[_document_ - repurposing_apigen_senomorphic.09.09.611999v1.full|Repurposing apigenin for senomorphic effect in antiaging pipelines]]
> In a 66-compound natural-product screen, apigenin was identified as a potent **senomorphic** agent. Affinity pull-down (Bio-APIG), DARTS, CETSA, SPR and MST converged on **PRDX6 as the direct binding target** of apigenin. Apigenin binds PRDX6 at **Cys91** and **Glu210** (SPR KD ≈ 0.237 µM; MST Kd ≈ 916 nM); mutating either residue ~10-fold weakens binding, and mutating both abolishes it. Critically, apigenin suppresses the **iPLA2** (not peroxidase) activity of PRDX6, which underlies its SASP-dampening effect.

Apigenin restrains the [[SASP|senescence-associated secretory phenotype]] without reversing [[Cellular Senescence|cellular senescence]] (growth arrest and SA-β-Gal remain intact). Mechanistically, apigenin binding to PRDX6 blocks its PLA2 activity, which disrupts downstream activation of [[HSPA8]] and prevents HSPA8's interactions with [[ATM]] and [[p38 MAPK]], blocking the transition of the [[Acute Stress-Associated Phenotype|acute stress-associated phenotype (ASAP)]] into the chronic SASP[67]. The selective PRDX6-PLA2 inhibitor [[MJ33]] phenocopies apigenin, suppressing canonical SASP factors ([[IL-6]], [[IL-8|CXCL8]], [[IL-1α]], [[MMP1|MMP1/3]]) and inhibiting PI3K/Akt signaling. Co-IP/MS confirmed a physical interaction between PRDX6 and HSPA8 in senescent cells.

## Physiological Function

PRDX6 is broadly expressed and protects against oxidative and peroxidative damage across tissues. It is heavily studied in central nervous system disorders — including [[Alzheimer's Disease|Alzheimer's disease (AD)]] and [[Parkinson's Disease|Parkinson's disease (PD)]] — where its peroxidase and phospholipid-repair functions buffer neuronal oxidative stress[68]. Genetic inactivation of its PLA2 activity protects mice against LPS-induced acute lung injury[44]. PRDX6 also augments selenium utilization to limit iron toxicity and [[Ferroptosis|ferroptosis]][67].

## Pathology & Clinical Relevance

- **Cellular senescence / aging** — Until the apigenin study[67], the role of PRDX6 in cellular senescence was largely unknown. It is now positioned as a central, druggable node linking redox/phospholipid signaling to SASP development, making it a candidate senomorphic target.
- **Inflammation** — Through its iPLA2→arachidonic acid axis, PRDX6 feeds inflammatory eicosanoid production; its inhibition is being explored in acute lung injury and other inflammatory conditions.
- **Cancer** — Celastrol, another natural product, targets related peroxiredoxins (PRDX1/2) to induce ROS-mediated apoptosis in gastric cancer[81], indicating the peroxiredoxin family as a tractable anticancer target class. The apigenin–PRDX6 axis additionally reverses senescence-driven [[Chemoresistance|chemoresistance]] in prostate cancer models.

## Documents

- [[_document_ - repurposing_apigen_senomorphic.09.09.611999v1.full|Repurposing apigenin for senomorphic effect in antiaging pipelines]]
  - Identifies PRDX6 as the direct apigenin-binding target; defines Cys91/Glu210 binding, iPLA2 inhibition, and PRDX6–HSPA8 crosstalk as the senomorphic mechanism.

## Connections

- [[Apigenin]] — Direct binder of PRDX6 (Cys91/Glu210); senomorphic agent suppressing SASP via PRDX6 iPLA2 inhibition.
- [[HSPA8]] — Physically interacts with PRDX6; apigenin disrupts this interaction to block SASP.
- [[SASP]] — Downstream output suppressed when PRDX6 iPLA2 is inhibited.
- [[Acute Stress-Associated Phenotype]] — PRDX6/HSPA8 axis gates the ASAP→SASP transition.
- [[NAC]] — Selective peroxidase inhibitor of PRDX6 (IC50 15.5 µM); contrasts with apigenin's iPLA2 selectivity.
- [[MJ33]] — Selective PRDX6-PLA2 inhibitor that phenocopies apigenin's senomorphic effect.
- [[ATM]] / [[p38 MAPK]] — Their crosstalk via HSPA8 is blocked when apigenin binds PRDX6.
- [[Peroxiredoxin]] — PRDX6 is the unique 1-Cys member of this six-gene family.

## Linking Summary

- New links added: [[Apigenin]], [[HSPA8]], [[SASP]], [[Acute Stress-Associated Phenotype]], [[NAC]], [[MJ33]], [[ATM]], [[p38 MAPK]], [[Peroxiredoxin]], [[PRDX1]], [[Cys91]], [[Glu210]], [[Arachidonic Acid]], [[Cellular Senescence]], [[Chemoresistance]], [[Alzheimer's Disease]], [[Parkinson's Disease]], [[Ferroptosis]], [[IL-6]], [[IL-8]], [[IL-1α]], [[MMP1]]
- Suggested new entity notes to create: [[PRDX1]] (peroxiredoxin reductase partner), [[aiPLA2]], [[LPCAT]]
- Strong connections to strengthen: [[PRDX6]] ↔ [[Apigenin]], [[PRDX6]] ↔ [[HSPA8]], [[PRDX6]] ↔ [[SASP]]
