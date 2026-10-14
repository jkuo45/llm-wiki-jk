---
title: CHOP
description: "CHOP (DDIT3, GADD153) is a stress-inducible bZIP transcription factor of the C/EBP family, induced downstream of eIF2alpha phosphorylation and ATF4, that couples ER stress to apoptosis by repressing survival genes and activating pro-death targets."
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - transcription
  - er-stress
  - apoptosis
aliases: [DDIT3, GADD153, C/EBP homologous protein, CHOP/GADD153, transcription factor CHOP, dditt3]
---

# CHOP

**Overview:** CHOP — **C/EBP homologous protein**, gene ***DDIT3***, also known as **GADD153** — is a 211-residue **bZIP (basic leucine zipper) transcription factor** of the CCAAT/enhancer-binding protein family. It is one of the most strongly stress-inducible transcription factors known, and it is the principal transcriptional effector that converts [[ER Stress|endoplasmic reticulum stress]] into programmed cell death.

## Structure and domains

- **N-terminal transcriptional activation domain (TAD, residues 1–99)** — unusually acidic. CHOP's pro-apoptotic potency maps almost entirely to this region; a CHOP fusion carrying only the TAD is sufficient to induce death.
- **bZIP domain (residues ~100–211)** — a basic DNA-binding region followed by a leucine zipper that mediates dimerisation. CHOP homodimerises, heterodimerises with other C/EBP family members, and with [[CREB]], c-Jun, and [[ATF4]]. Deleting the bZIP region abolishes CHOP-induced apoptosis.
- **Mutually exclusive leucine (Leu26)** in the TAD is the key regulatory switch. Phosphorylation of **Ser24** (by PKA) and dephosphorylation of Ser78 (by PP2A) disrupt a salt bridge with Leu26 and release the domain from a self-inhibitory intramolecular interaction. Once liberated, the TAD contacts the DNA-binding surface of the dimer — the classic **"regulatory domain unmasking"** mechanism.

## Mechanism

**Induction.** DDIT3 transcription rises steeply under stress via the [[Integrated Stress Response]]:

> [!info] The canonical ISR route
> Stress → activation of one of four eIF2α kinases (**[[PERK]]**, GCN2, PKR, HRI) → phosphorylation of [[eIF2α]] → attenuation of bulk translation while specialized mRNAs with upstream open reading frames escape → [[ATF4]] translation and transcriptional activation → direct binding to the DDIT3 promoter, plus cooperative binding with ATF4 at a C/EBP–ATF response element (CARE). [[ATF5]] and [[ATF6α]] can also contribute.

CHOP mRNA is unusually short-lived, so DDIT3 protein falls quickly once stress resolves — a built-in timer that prevents spurious death signalling.

**Dual function as activator and repressor.** CHOP is a *dominant-negative* inhibitor of other C/EBP family transcription factors: it heterodimerises with C/EBPβ, C/EBPδ, and ATF4 and blocks their binding to CRE and CARE sites. But CHOP *does* act as a genuine activator when partnered with ATF4 or phosphorylated c-Jun, driving a distinct set of genes containing a specific 12–14 bp cis-element.

**Pro-death outputs.**

| Direction | Target | Consequence |
| --- | --- | --- |
| Repress | BCL-2, BCL-XL, [[Mcl-1]] | Removes anti-apoptotic BCL-2 family blockade |
| Activate | Bim, [[Puma]] (BBC3), [[Noxa]] (PMAIP1) | Directly activates BH3-only pro-apoptotic effectors |
| Activate | DR5 and DR4 (with phosphorylated c-Jun) | Sensitises to extrinsic death-receptor signalling |
| Activate | GADD45, ATF3, TRIB3, [[SLC7A11]] | Growth arrest, further pro-death and metabolic stress signalling |
| Repress | IGF1, growth/survival genes | Contributes to growth arrest |

The net effect is a shift in the balance of the [[Apoptosis|apoptotic]] machinery from survival to death. CHOP-deficient cells are remarkably resistant to ER-stress-induced apoptosis.

**Non-apoptotic roles.** CHOP is also induced by oxidative stress, amino acid deprivation, anoxia, and LPS, and it has roles in adipogenesis (where CHOP *promotes* differentiation and lipogenesis, despite its name) and in erythropoiesis. CHOP is **not** a p53 target; DDIT3 expression is driven primarily by ER/ISR stress rather than DNA damage, which is why it can rise in cells with intact p53.

## Disease relevance

- **Cancer.** CHOP is a context-dependent double agent: **TLS-CHOP** and **IP6K2-CHOP** fusion proteins are oncogenic in myxoid liposarcoma and chondrosarcoma respectively. High CHOP expression also marks aggressive disease and therapy resistance in several tumours (e.g. [[Multiple Myeloma]] and [[Glioblastoma]]), and is used as an ISR/ER-stress readout.
- **Neurodegeneration.** Persistent CHOP induction accompanies ER stress in [[Alzheimer's Disease]], [[Parkinson's Disease]], prion disease, and ischemia, and CHOP deletion reduces neuronal death in several models.
- **Metabolic disease.** CHOP links hepatic ER stress to [[Insulin Resistance]] and [[Diabetes]], and to alcohol-related liver injury.
- **Stem cells and aging.** CHOP is a direct transcriptional target of [[SIRT1]], tying ISR output to NAD+/sirtuin activity; CHOP induction accompanies stem-cell exhaustion and inflammaging.
- **Myelodysplasia.** ATF4/CHOP-linked ER stress contributes to ineffective erythropoiesis in [[Myelodysplastic Syndrome]].

> [!warning] Name ambiguity
> "CHOP" here is the transcription factor DDIT3/GADD153. It is unrelated to **CHOP/GADD153-independent** uses of the acronym, and is frequently confused with *CHOPN* (C/EBPζ, officially **CEBPζ**, a distinct bZIP factor), which shares the "CHOP" mnemonic in the C/EBP family.

## Documents

- [[_document_ - crosstalk_cell_death_mechanisms_s41420-025-02328-9|Crosstalk between cell death mechanisms]] — ER stress activates nuclear CHOP, which induces PUMA and thereby triggers apoptosis, reinforcing ferroptosis.
- [[_document_ - Mitochondrial Drivers Stem Cell Aging Inflammaging Bautista 2026|Mitochondrial Drivers of Stem Cell Aging and Inflammaging]] — places ATF4, ATF5 and CHOP as the transcription factors mediating UPR^mt^ signalling to induce chaperones, proteases, and antioxidants.
- [[_document_ - sirtuins in health and disease s41392-022-01257-8|Sirtuins in health and disease]] — figure legend defining CHOP as C/EBP-homologous protein within the sirtuin–oxidative stress network.

## Connections
- [[Integrated Stress Response]] — CHOP induction is a canonical ISR output downstream of eIF2α phosphorylation.
- [[eIF2α]] — its phosphorylation by PERK/GCN2/PKR/HRI triggers ATF4 and hence DDIT3 transcription.
- [[PERK]] — the ER-stress eIF2α kinase of the ATF4–CHOP arm.
- [[ATF4]] — direct and cooperative transcriptional activator of DDIT3; also a CHOP heterodimerisation partner.
- [[ER Stress]] — the canonical trigger; ER-stress-induced apoptosis is CHOP-dependent.
- [[Apoptosis]] — CHOP is the transcription factor that commits an ER-stressed cell to death by shifting BCL-2 family balance and engaging death receptors.
- [[Puma]], [[Noxa]], [[Bim]] — pro-apoptotic effectors transcriptionally activated by CHOP.
- [[Mcl-1]] — an anti-apoptotic target repressed by CHOP, raising the Bax:Bcl-2 ratio.
- [[DR5]] — death receptor activated downstream of CHOP, coupling intrinsic and extrinsic apoptosis.
- [[Senescence]] — CHOP-mediated growth arrest overlaps with the senescence programme under chronic stress.
- [[SIRT1]] — transcriptionally induces DDIT3, linking ISR output to NAD+-dependent sirtuin activity.
- [[Stem Cell Exhaustion]] — chronic ISR/CHOP signalling accompanies stem-cell decline in aging tissues.
- [[Unfolded Protein Response]] — the broader ER-stress programme whose pro-death arm runs through CHOP.

## Linking Summary
- New links added: [[Integrated Stress Response]], [[Puma]], [[Bim]], [[Noxa]], [[DR5]], [[Multiple Myeloma]], [[Glioblastoma]]
- Suggested notes to create: [[DDIT3]], [[bZIP]], [[TLS-CHOP]], [[IP6K2-CHOP]], [[Myxoid Liposarcoma]], [[TRIB3]], [[ATF3]], [[Regulatory Domain Unmasking]], [[eIF2α Kinases]] CEBPβ, GADD45, GCN2
- Strong connections to strengthen: [[CHOP]] ↔ [[Integrated Stress Response]], [[CHOP]] ↔ [[ATF4]], [[CHOP]] ↔ [[ER Stress]], [[CHOP]] ↔ [[Apoptosis]]
