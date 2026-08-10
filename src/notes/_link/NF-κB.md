---
title: NF-κB
description: Nuclear factor kappa-light-chain-enhancer of activated B cells (NF-κB) is a protein complex that controls transcription of DNA, cytokine production, and cell survival. It plays a central role in immunity, inflammation, and redox signaling.
created: '2026-05-09'
updated: '2026-07-24'
tags:
  - protein
  - transcription-factor
  - inflammation
  - oxidative-stress
aliases:
  - NFKB
  - NF-κB
  - NF-kappa B
  - Nuclear factor kappa-light-chain-enhancer of activated B cells
---

# NF-κB

**Nuclear factor kappa-light-chain-enhancer of activated B cells (NF-κB)** is a protein complex that functions as a central transcription factor in the regulation of [[Inflammation|inflammation]], [[Immunity|immunity]], [[Apoptosis|apoptosis]], and cell survival. It controls transcription of DNA, cytokine production, and stress adaptation, and is highly redox-sensitive.

## Subunit Composition

NF-κB transcription factors are homo- or heterodimers formed from five Rel homology domain-containing subunits:
- [[RelA]] (p65) — the most abundant transactivating subunit
- [[RelB]]
- [[c-Rel]]
- [[p50]] (processed from p105, encoded by [[NFKB1]])
- [[p52]] (processed from p100, encoded by [[NFKB2]])

All subunits share a conserved N-terminal Rel homology domain (RHD) responsible for DNA binding, dimerization, and nuclear localization. The most abundant and well-studied dimer is the p50-RelA heterodimer.

## Activation Pathways

### Canonical Pathway

Triggered by [[TNFα]], [[IL-1β]], [[LPS|bacterial lipopolysaccharide]], and [[Reactive Oxygen Species|ROS]], leading to activation of the IκB kinase (IKK) complex: [[IKKα]] (CHUK), [[IKKbeta]] (IKBKB), and the regulatory subunit [[NEMO]] (IKKγ). [[TAK1]] phosphorylates IKKβ, which then phosphorylates [[IkappaBalpha]] at Ser-32 and Ser-36, triggering K48-linked polyubiquitination and 26S proteasomal degradation. Freed NF-κB dimers (predominantly p50/RelA) translocate to the nucleus within minutes.

### Non-Canonical Pathway

Activated by [[CD40L]], [[BAFF]], lymphotoxin β, and [[RANKL]], leading to [[NIK]] (NF-κB-inducing kinase)-dependent IKKα homodimer activation. IKKα phosphorylates p100, causing partial proteasomal processing to p52, which dimerizes with RelB. The non-canonical pathway operates on a slower timescale (hours) and is essential for secondary lymphoid organ development, [[B Cell]] maturation, and osteoclastogenesis.

## Target Genes

NF-κB regulates hundreds of target genes encoding:
- **Pro-inflammatory cytokines**: [[TNFα]], [[IL-1β]], [[IL-6]]
- **Chemokines**: [[IL-8]], [[MCP-1]], [[RANTES]]
- **Adhesion molecules**: [[ICAM-1]], [[VCAM-1]], E-selectin
- **Anti-apoptotic factors**: [[Bcl-2]], [[Bcl-xL]], [[c-FLIP]], [[XIAP]]
- **Antioxidant enzymes**: [[Manganese superoxide dismutase|MnSOD]], ferritin heavy chain

## Redox-Sensitive Regulation

NF-κB activation is exquisitely redox-regulated through specific cysteine residues at multiple levels:
- In the cytoplasm, [[Hydrogen Peroxide|H₂O₂]] inhibits [[PP2A]] and other phosphatases that dephosphorylate IKK, sustaining activation. H₂O₂ also directly oxidizes catalytic cysteines in IKKγ/NEMO (Cys-54, Cys-347), promoting IKK oligomerization.
- In the nucleus, p50 contains a conserved cysteine (Cys-62) susceptible to S-nitrosylation and S-glutathionylation that inhibits DNA binding. RelA has redox-sensitive cysteines (Cys-38) whose oxidation terminates transcriptional activity, providing negative feedback.
- **Feed-forward loop**: ROS activate NF-κB, which induces genes producing more ROS and inflammation, potentially leading to chronic disease states.

## NF-κB–NRF2 Crosstalk

The balance between NF-κB (pro-inflammatory) and [[NRF2]] (cytoprotective/antioxidant) signaling is a central determinant of the cellular response to oxidative stress:
- The NRF2 target gene [[p62]] competes with IκB for binding to the E3 ligase β-TrCP, stabilizing IκB and inhibiting NF-κB
- [[HO-1]] (NRF2 target) degrades free heme required for NADPH oxidase assembly, reducing ROS
- RelA competes with NRF2 for the coactivator CBP/p300
- Under chronic oxidative stress, persistent NF-κB activation suppresses NRF2, shifting toward inflammation

## Regulation by Sirtuins

- [[SIRT1]] deacetylates RelA/p65 at Ac-Lys310, inhibiting its transactivation potential; also promotes proteasomal degradation of NF-κB p65
- [[SIRT2]] deacetylates NF-κB p65 to reduce pro-inflammatory cytokines
- [[SIRT6]] deacetylates H3K9 in promoters of NF-κB target genes, suppressing inflammatory responses
- [[SIRT7]] inhibits nuclear translocation of NF-κB p65

## Role in SASP

NF-κB is the master transcriptional regulator of the [[SASP|Senescence-Associated Secretory Phenotype]]. In senescent cells, persistent [[DNA Damage|DNA damage]] signaling activates the IKK complex, leading to sustained NF-κB activation and transcription of SASP genes including IL-6, IL-8, TNFα, MCP-1, [[VEGF]], and matrix metalloproteinases. NF-κB-driven SASP is restrained by [[p53]], explaining why p53 loss amplifies pro-tumorigenic effects of senescent cells.

## Role in Inflammaging

Chronic NF-κB activation is a hallmark of [[Inflammaging|inflammaging]] — the low-grade, sterile inflammation driving age-related functional decline. NF-κB activity increases with age in multiple tissues, driven by accumulated [[Advanced Glycation End Products|AGE]]-[[RAGE]] signaling, mitochondrial dysfunction, and DNA damage. This sustained activation promotes [[Insulin Resistance]], [[Atherosclerosis]], [[Sarcopenia]], neurodegeneration, and frailty.

## Negative Regulation

NF-κB signaling is tightly controlled by negative regulators that are themselves NF-κB target genes:
- [[A20]] (TNFAIP3) — ubiquitin-editing enzyme that removes K63-linked ubiquitin from RIP1 and TRAF6, terminating IKK activation
- CYLD — deubiquitinase that cleaves K63-linked ubiquitin from TRAF2, TRAF6, and NEMO; inactivated by ROS-mediated oxidation of its catalytic cysteine

## Disease and Therapeutic Targeting

NF-κB hyperactivation is characteristic of [[Cancer]], [[Atherosclerosis]], rheumatoid arthritis, inflammatory bowel disease, [[Asthma]], and neurodegenerative diseases. In cancer, NF-κB promotes survival, proliferation, angiogenesis, and metastasis. Therapeutic strategies include proteasome inhibitors ([[Bortezomib]]), IKKβ inhibitors, and natural inhibitors such as [[Curcumin]], [[Resveratrol]], and [[EGCG]].

## Documents

- [[_document_ - Oxidative Stress Harms and Benefits for Human Health|Oxidative Stress Harms and Benefits]]
  - Oxidants enhance inflammation via activation of kinases and transcription factors like NF-κB and AP-1.
- [[_document_ - The Senescence-Associated Secretory Phenotype The Dark Side of Tumor Suppression|SASP: The Dark Side of Tumor Suppression]]
  - Foundational review establishing NF-κB as master regulator of SASP gene expression; p53 restrains NF-κB-mediated SASP activation.

## Connections

- [[Oxidative Stress]] — ROS activate NF-κB; NF-κB induces ROS-producing genes (feed-forward loop)
- [[NRF2]] — master transcriptional antagonist; mutual competition for CBP/p300
- [[SIRT1]] — deacetylates RelA/p65 at Lys310, inhibiting transactivation
- [[SIRT6]] — deacetylates H3K9 at NF-κB target gene promoters
- [[p53]] — restrains NF-κB-mediated SASP activation
- [[A20]] — ubiquitin-editing negative regulator
- [[Inflammation]] — NF-κB is the master switch for inflammatory gene expression
- [[SASP|Senescence-Associated Secretory Phenotype]] — NF-κB is the master transcriptional regulator
- [[Inflammaging]] — chronic NF-κB activation drives age-related inflammation
- [[Atherosclerosis]] — pathogenic NF-κB activation in vascular inflammation
- [[Cancer]] — NF-κB promotes tumorigenesis through survival and proliferation genes
- [[Advanced Glycation End Products]] — AGE-RAGE signaling activates NF-κB
- [[p62]] — NRF2 target that inhibits NF-κB by stabilizing IκB

## Linking Summary

- New links added: [[RelA]], [[RelB]], [[c-Rel]], [[p50]], [[p52]], [[NFKB1]], [[NFKB2]], [[IKKα]], [[IKKbeta]], [[NEMO]], [[TAK1]], [[IkappaBalpha]], [[NIK]], [[TNFα]], [[IL-1β]], [[IL-6]], [[IL-8]], [[ICAM-1]], [[VCAM-1]], [[Bcl-xL]], [[c-FLIP]], [[XIAP]], [[A20]], [[SASP]], [[Inflammaging]], [[RAGE]], [[SIRT1]], [[SIRT2]], [[SIRT6]], [[SIRT7]], [[NRF2]], [[p62]], [[HO-1]], [[p53]], [[Bortezomib]], [[VEGF]]
- Suggested new entity notes to create: [[NEMO]], [[IkappaBalpha]], [[CYLD]], [[TAK1]]
- Strong connections to strengthen: NF-κB ↔ [[Oxidative Stress]], NF-κB ↔ [[NRF2]], NF-κB ↔ [[SASP]], NF-κB ↔ [[SIRT1]]
