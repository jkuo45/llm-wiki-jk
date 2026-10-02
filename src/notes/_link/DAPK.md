---
title: DAPK
description: 'Death-associated protein kinase (DAPK) is the calcium/calmodulin-dependent Ser/Thr kinase family DAPK1, DAPK2/DRP-1, and DAPK3/ZIP-kinase. DAPK1 is a tumour suppressor that promotes apoptosis and autophagy, is frequently silenced by promoter hypermethylation, and phosphorylates RIPK1, Beclin1, TSC2, and Pin1.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - kinase
  - apoptosis
  - autophagy
  - cancer
aliases: [Death-Associated Protein Kinase, DAP kinase, DAPK1, DAPK2, DAPK3, ZIP-kinase, ZIPK, DRP-1, Dlk]
---

# DAPK

## Overview

DAPK is the **death-associated protein kinase family**. The name most often
refers to **DAPK1**, the founding member and the best-characterised; the family
also contains **DAPK2** (DAP-kinase-related protein 1, DRP-1) and **DAPK3**
(also called Dlk, ZIP-kinase/ZIPK, or "zipper-interacting protein kinase").
All three are Ca²⁺/[[Calmodulin]]-dependent Ser/Thr kinases, but DAPK1 alone is
a genuine tumour suppressor with four characteristic domains; DAPK2 and DAPK3
are more compact, non-secreted, ubiquitously expressed kinases involved in
TGF-β and Hippo signalling.

> [!info] Not to be confused with the RSK family
> UniProt lists DAPK3 under the alternative name "p90RSK3"/"RSK-2"; the
> *protein* entry P51812 is the ribosomal S6 kinase RSK2, while DAPK3 itself is
> UniProt O43293. The two identifiers are a well-known source of confusion in
> older literature.

## Structure and domains (DAPK1)

DAPK1 is a ~1430-residue multidomain protein, N-terminal to C-terminal:

- **Protein kinase domain** (residues ~13–275) — a classical bilobed Ser/Thr
  kinase. The domain is not catalytically active until the autoinhibitory
  region is relieved by Ca²⁺/calmodulin binding.
- **Autoinhibitory region** (partly within residues ~267–334) — sterically
  occludes the active site until calmodulin binding induces a conformational
  change. Relieved also by the dephosphorylation of Ser308.
- **Death domain** (residues ~681–955) — a death effector domain that recruits
  and binds the ERK kinases (MAPK1/ERK2 and MAPK3/ERK1) and the netrin
  receptor [[UNC5B]].
- **Ankyrin repeat region** (residues ~1312–1396) — mediates interactions
  including with MAP1B and colocalization with microtubules and cortical actin.

DAPK2 and DAPK3 lack the death domain and ankyrin repeats; they have a compact
single-kinase-domain architecture with N- and C-terminal regulatory segments.

## Mechanism and regulation

> [!info] A two-step activation lock
> DAPK1 is held inactive by two independent mechanisms: **autophosphorylation
> at Ser308** (which locks the kinase) and **steric occlusion by the
> autoinhibitory region**. Activation requires Ser308 dephosphorylation
> *and* Ca²⁺/calmodulin binding. Endoplasmic reticulum stress, and the
> UNC5B-mediated inhibition of Ser308 phosphorylation, both release this lock;
> the netrin [[NTN1]] antagonises UNC5B and therefore suppresses DAPK1.

- **Mitogenic suppression.** Phosphorylation at **Ser289** by the ERK
  downstream kinases RSK1/RSK2 suppresses DAPK's pro-apoptotic function.
  Ser734 phosphorylation by MAPK1/ERK2 instead *increases* catalytic
  activity and promotes cytoplasmic retention of ERK — a self-reinforcing
  survival loop. PMA or EGF also triggers Ser289 phosphorylation.
- **Degradation.** DAPK1 is ubiquitinated by the BCR^KLHL20 E3 ligase
  complex, targeting it for proteasomal degradation.
- **Turnover of the small isoform.** Proteolytic removal of the C-terminal
  tail of isoform 2 (s-DAPK-1) maximally stimulates its membrane-blebbing
  function.

## Substrates

| Substrate | Effect |
|---|---|
| [[RIPK1]] | Phosphorylates RIPK1 to inhibit its pro-necrotic kinase activity — a tumour-restraining role in the [[Necroptosis]] network |
| [[Beclin1]] (BECN1) | Phosphorylates Thr119 within the BH3 domain, displacing Bcl-xL and initiating [[Autophagy]] |
| TSC2 | Phosphorylates TSC2, disrupting the TSC1/TSC2 complex and stimulating [[mTORC1]] — the opposite of AMPK's action on the same node |
| [[Pin1]] | Phosphorylates Ser71 in the catalytic active site, fully inactivating Pin1 and blocking centrosome amplification and transformation |
| STX1A | Phosphorylates syntaxin-1A, markedly reducing its binding to STXBP1 |
| TPM1 | Phosphorylates tropomyosin-1, enhancing stress fibre formation in endothelial cells |
| PRKD1, RPS6, MYL9, DAPK3 | Additional reported substrates |

## Physiological roles

- **Apoptosis.** DAPK1 promotes intrinsic apoptosis, and isoform 2 can induce
  membrane blebbing but not apoptosis.
- **Autophagy.** By releasing [[Beclin1]] from BCL2/BCL2L1, DAPK1 initiates the
  autophagy cascade; it can therefore serve as a "type II" cell-death
  regulator as well as a caspase-dependent one.
- **Neuronal excitotoxicity.** Cerebral ischaemia recruits DAPK1 into the
  extrasynaptic NMDA receptor complex; DAPK1 phosphorylates the receptor
  scaffold at Ser1303, driving injurious Ca²⁺ influx and irreversible neuronal
  death. This makes DAPK1 a driver of stroke injury rather than a protector in
  that context.
- **Interferon response.** DAPK1 and DAPK3 act together to phosphorylate RPL13A
  on interferon-γ activation, producing transcript-selective translational
  inhibition.
- **Pancreatic beta-cell biology.** DAPK1 is expressed in normal intestinal
  tissue and in colorectal carcinoma; its splice isoform s-DAPK-1 has been
  studied as a candidate tumour-suppressive biomarker in colorectal cancer.

## Pathology and clinical relevance

> [!important] DAPK1 as a tumour suppressor silenced by methylation
> DAPK1 is one of the most frequently epigenetically silenced tumour
> suppressors in human cancer. Promoter CpG hypermethylation of *DAPK1* has
> been reported in essentially every tumour type examined, including lung,
> colorectal, gastric, breast, cervical, renal, and glioma. Because the gene
> body is heavily methylated, DAPK1 protein detection (by immunohistochemistry
> or methylation-specific PCR) is used as an adjunctive marker in cervical
> cancer screening alongside high-risk HPV and cytology.

- **Modulation of autophagy in cancer.** The gastric-cancer literature links
  downregulation of DAPK together with PTEN, TSC1, TSC2, and LKB1/STK11 to
  impaired lysosomal degradation capacity. Given that DAPK1 phosphorylates
  TSC2 to *activate* [[mTORC1]] and phosphorylates Beclin1 to *initiate*
  autophagy, its net effect on flux depends on which substrate dominates.
- **Therapeutic potential.** Small-molecule DAPK1 activators have been
  investigated but none is clinically approved; the therapeutic logic of
  reactivating a methylated tumour suppressor is attractive but
  pharmacologically difficult. A DAPK3 inhibitor has been used as a tool to
  dissect Hippo signalling and intestinal epithelial regeneration in murine
  colitis.
- **Other disease contexts.** DAPK2 has been implicated in propagating ER
  stress in macrophages during sepsis via an HSPA5/IRE1α axis; DAPK1 loss has
  been described in response to DNA damage and oxidative stress, which is why
  it is described as "a double-edged sword."

## Documents

- [[_document_ - Regulatory complexity and therapeutic targeting of the necroptosis network|Regulatory complexity and therapeutic targeting of the necroptosis network]] — DAPK1 phosphorylates RIPK1 to inhibit its pro-necrotic function, listed among the phospho-layer regulators of the RIPK1 survival/death decision.
- [[_document_ - The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting|The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting]] — lists DAPK alongside PTEN, TSC1, TSC2, and LKB1/STK11 as a protein whose downregulation in cancer cells is associated with reduced lysosomal degradation capacity.

## Connections

- [[RIPK1]] — DAPK1 phosphorylates RIPK1 to restrain its pro-necrotic kinase activity, placing DAPK1 in the phospho-regulatory layer of the necroptosis decision alongside PTPN6 and the PI3K/Akt axis.
- [[Beclin1]] — DAPK phosphorylates Thr119 in the Beclin1 BH3 domain, releasing it from BCL2/BCL2L1 and triggering autophagy initiation.
- [[TSC1]] / [[TSC2]] — DAPK1 phosphorylates TSC2 to disrupt the TSC1/TSC2 GAP complex and thereby activate [[mTORC1]], opposing [[AMPK]]'s inhibitory phosphorylation of the same residue region.
- [[Pin1]] — Ser71 phosphorylation by DAPK1 fully inactivates the prolyl isomerase and blocks centrosome amplification; DAPK1 levels correlate positively with Pin1 pSer71 in human breast cancer.
- [[Apoptosis]] and [[Autophagy]] — DAPK1 is a node where the caspase-dependent ("type I") and caspase-independent, autophagic ("type II") death programs are both switched.
- [[mTORC1]] — DAPK1 is a direct upstream activator of mTORC1 via TSC2, giving it a role in nutrient-sensing biology distinct from its death-promoting role.
- [[Necroptosis]] — DAPK1's phosphorylation of RIPK1 makes it a suppressor, not an executor, of the necrosome pathway.

## Linking Summary

- New links added: [[Calmodulin]], [[RIPK1]], [[Beclin1]], [[TSC1]], [[TSC2]], [[Pin1]], [[AMPK]], [[NTN1]], [[UNC5B]], [[Necroptosis]]
- Suggested notes to create: [[DAPK2]], [[DAPK3]], [[NTN1]], [[UNC5B]], [[Syntaxin]], [[MAPK1]], [[MAPK3]], [[KLHL20]], [[RPL13A]], [[Serine 308]], [[Autoinhibitory domain]] — removed as already existing: RSK
- Strong connections to strengthen: [[DAPK]] ↔ [[RIPK1]], [[DAPK]] ↔ [[TSC2]] ↔ [[mTORC1]], [[DAPK]] ↔ [[Autophagy]]