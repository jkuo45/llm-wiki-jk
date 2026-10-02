---
title: CDKN2A
description: "CDKN2A is a single 9p21.3 locus encoding two unrelated tumor suppressors from alternative first exons: p16INK4a, which inhibits CDK4/6 to hold Rb in a hypophosphorylated state, and p14ARF, which binds MDM2 to stabilise p53."
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - tumor-suppressor
  - cell-cycle
  - senescence
aliases: [p16INK4a, p14ARF, p16, INK4A, ARF, CDKN2, MTS1, MLM, p16INK4, p14ARF-p53 axis]
---

# CDKN2A

**Overview:** *CDKN2A* is a haploinsufficient **tumor suppressor locus** at chromosome **9p21.3**. It is unusual in encoding **two structurally unrelated proteins from one gene** via alternative first exons and alternative reading frames:

- **p16INK4a** (exons 1α, 2, 3; 156 aa) — an inhibitor of CDK4 and CDK6.
- **p14ARF** (exons 1β, 2, 3; 132 aa) — a binding partner of [[MDM2]] that indirectly activates [[p53]].

> [!important] One locus, two independent tumor-suppressor axes
> The two proteins share only exons 2 and 3 and are translated in different reading frames from different start sites, so their sequences are unrelated. Because of this, *CDKN2A* panels must be designed to cover both exon 1α and exon 1β; a melanoma-focused panel covering only the p16 reading frame will miss exon 1β variants that carry pancreatic cancer risk.

## Structure and function

### p16INK4a

A small, poorly structured protein with a **four-helix ankyrin repeat domain**. The ankyrin repeats form a groove that docks onto the kinase domain of CDK4/CDK6, in the ATP-binding region — unlike the INK4–CDK4/6 interaction being distinct from the substrate-binding site. p16INK4a binds CDK4/6 as a **monomer**, does not need a cyclin, and is essentially irreversible: once bound, the complex cannot be rescued by cyclin D and the CDK4/6 protein is sequestered.

Mechanistically: CDK4/6–cyclin D phosphorylates [[Retinoblastoma Protein|Rb]], releasing [[E2F]] to drive G1/S transcription. p16 blocks that phosphorylation, keeping Rb bound to E2F and enforcing G1 arrest, with consequent activation of [[Senescence]] when arrest is durable.

Regulation of p16 expression: it is essentially constitutive transcription plus decay, and its level rises steadily with age — one of the most widely used **transcriptional aging clocks**. Other signals — [[mTORC1]], [[KRAS]], and [[NF-κB]] — induce it. p16 is polyubiquitinated by CUL4B and degraded, and loss of the E3 ligase component RBX1 stabilizes it.

### p14ARF

A nucleolar protein with an N-terminal amphipathic helix, an intrinsically disordered middle, and a C-terminal **ARF domain (~residues 65–132)** that binds MDM2. Binding p14ARF to MDM2:

1. Blocks the MDM2-dependent negative feedback on [[p53]].
2. Promotes MDM2 self-ubiquitination and proteasomal degradation.
3. Together, this stabilises p53 and raises p53 transcriptional output, including p21.

p14ARF also has p53-independent roles: it represses ribosome biogenesis by binding ULF/TRIP12, sequesters NPM1 in nucleoli to block ribosome maturation, and contributes to ciliogenesis.

> [!warning] Name collision with CDK5 activators
> "p19ARF," sometimes cited as a mouse p16 homologue, is a distinct protein from human p14ARF. The mouse genes are *Cdkn2a* (p19Arf) and *Cdkn2c* (p18Ink4c); human *CDKN2A* encodes p16INK4a and p14ARF, and human p19INK4D is a separate locus.

## Clinical relevance

**Cancer.** *CDKN2A* is one of the most frequently mutated tumor suppressors in human cancer. Somatic loss or homozygous deletion is common in [[Pancreatic Cancer|pancreatic]], [[Melanoma|melanoma]], [[Glioblastoma|glioblastoma]], head and neck, lung, and esophageal squamous carcinoma. Loss of p16 is nearly universal in [[Hepatocellular Carcinoma|hepatocellular carcinoma]]. Two distinct phenotypes occur:

- **Pure p16 loss** (exon 2 or 3, or 1α) → RB pathway deregulation, G1/S dysregulation.
- **Pure p14ARF loss** (exon 1β) → p53 pathway deregulation.
- **Whole-locus deletion** → both; observed in familial melanoma.

**Hereditary syndromes.** Germline loss-of-function variants cause:

| Syndrome | Locus | Features |
| --- | --- | --- |
| Familial atypical multiple mole melanoma (FAMMM) / melanoma–pancreatic cancer syndrome | *CDKN2A* | Melanoma risk to age 80 of ~28–76%; pancreatic cancer risk up to ~21%; variant-specific risk, with p14ARF-only variants associated with nervous system tumours and sarcomas |
| Multiple primary cancers | *CDKN2A* | Sometimes only one tumour type presents in a family |
| Familial atypical multiple mole melanoma, type 2 | *CDK4* (not this locus) | Amplification activates the p16-resistant CDK4 |

Clinical management of carriers includes enhanced skin surveillance, avoidance of UV exposure, and (where regional guidance supports it) pancreatic surveillance by MRI/MRCP or EUS.

**Chronic inflammatory disease.** Loss-of-function *CDKN2A* variants are associated with [[Inflammatory Bowel Disease]] in genome-wide association studies, consistent with p16 restraining proliferation in the intestinal epithelium and lamina propria.

**Non-cancer biology.** p16 levels are a canonical readout of cellular aging; the p16–RB axis enforces senescence and stem-cell exit from self-renewal in many tissues, and p14ARF restrains ribosome biogenesis, which is why loss of the locus favors proliferative and biosynthetic phenotypes.

## Documents

- [[_document_ - Cellular senescence and SASP in tumor progression and therapeutic opportunities|Cellular senescence and SASP in tumor progression and therapeutic opportunities]] — describes the p16/Rb pathway as an alternative to p53/p21 for inducing cellular senescence, and lists *CDKN2A* as a critical CS biomarker.
- [[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications|The senescence-associated secretory phenotype and its physiological and pathological implications]] — discusses p16 induction as part of the DDR-driven senescent programme that activates SASP.
- [[_document_ - Senolytic Treatment With Fisetin Reverses Age‐Related Endothelial Dysfunction Partially Mediated by SASP Factor CXCL12|Senolytic Treatment With Fisetin Reverses Age-Related Endothelial Dysfunction]] — uses p16/CDKN2A status to define the senolytic-responsive endothelial population.
- [[_document_ - Mitochondrial metabolism and epigenetic crosstalk drive SASP|Mitochondrial metabolism and epigenetic crosstalk drive SASP]] — reports that acetate-driven nuclear hyperacetylation induces pro-inflammatory SASP genes *without* altering the senescence markers *CDKN2A*/*p16* or *CDKN1A*/*p21*, dissociating inflammatory from arrest programmes.

## Connections
- [[p16INK4A]] — the protein product; note that both `p16` and `p16INK4A` notes exist, with the former covering the aging-biomarker literature.
- [[CDK4 6]] — the kinase complex inhibited by p16INK4a; in the vault the combined note stands in for CDK4 and CDK6.
- [[Retinoblastoma Protein]] — p16's downstream effector; hypophosphorylated Rb sequesters [[E2F]] and blocks G1/S.
- [[E2F]] — the transcription factor released when CDK4/6 phosphorylates Rb, enabling S-phase gene expression.
- [[MDM2]] — direct binding partner of p14ARF; sequestration blocks MDM2's negative feedback on p53.
- [[p53]] — stabilised by p14ARF; p14ARF loss removes a major non-genetic route to p53 activation.
- [[p21 CIP1]] — the parallel CIP/KIP inhibitor on the p53 arm of the same arrest decision.
- [[CDK Inhibitor]] — p16 is the archetypal INK4-class inhibitor; p21/p27/p57 are the Cip/Kip class.
- [[Senescence]] — durable CDK4/6 inhibition enforces Rb hypophosphorylation and is one of the canonical routes to cellular senescence.
- [[Melanoma]] — the disease for which *CDKN2A* was discovered and for which FAMMM screening applies.
- [[Pancreatic Ductal Adenocarcinoma]] — the second major cancer in FAMMM; germline risk warrants surveillance.
- [[Cell Cycle]] — p16/p14ARF sit upstream of the two canonical arrest axes, G1/S and the DNA damage response.
- [[Quiescence]] — p16 and Rb-dependent arrest overlap with the reversible G0 arrest that characterizes quiescent cells.
- [[Inflammatory Bowel Disease]] — a non-cancer disease with a replicated *CDKN2A* genetic association.
- [[Transcriptomic Aging]] — p16 abundance is one of the most robust transcript-based aging clocks.

## Linking Summary
- New links added: [[MDM2]], [[CDK4 6]], [[Melanoma]], [[Pancreatic Ductal Adenocarcinoma]], [[Transcriptomic Aging]]
- Suggested notes to create: [[INK4]], [[Cip/Kip]], [[Multiple Primary Cancers]], [[Ankyrin Repeat]], [[CUL4B]], [[RBX1]], [[FAMMM]], [[Melanoma-Pancreatic Cancer Syndrome]], [[p19INK4D]], [[p18INK4C]], [[CDK4]], [[CDK6]] — removed as already existing: Glioblastoma, NPM1, Ribosome Biogenesis, p15INK4b
- Strong connections to strengthen: [[CDKN2A]] ↔ [[p16INK4A]], [[CDKN2A]] ↔ [[Retinoblastoma Protein]], [[CDKN2A]] ↔ [[p53]], [[CDKN2A]] ↔ [[Senescence]]