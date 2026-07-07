---
title: STING
description: Stimulator of interferon genes, a signaling protein that plays a key
  role in innate immunity by sensing cytosolic DNA.
type: entity
created: 2024-01-01
updated: 2026-07-06
tags:
  - innate-immunity
  - cgas-sting-pathway
  - interferon
  - dna-sensing
  - autoinflammation
  - protein
aliases:
  - Stimulator of Interferon Genes
  - TMEM173
  - MITA
  - ERIS
  - MPYS
  - NET23
---

# STING

STING (Stimulator of Interferon Genes), also known as [[TMEM173]], MITA, ERIS, MPYS, or NET23, is a 379-amino acid transmembrane protein of the endoplasmic reticulum (ER) membrane that functions as a central signaling adaptor in the innate immune response to cytosolic DNA. STING is activated by cyclic dinucleotides (CDNs) produced by bacterial cGAS, or by host 2'3'-cGAMP produced by cGAS upon sensing cytosolic DNA. STING activates TBK1 → IRF3 → type I interferon (IFN-α/β) production, and also NF-κB → pro-inflammatory cytokines. It plays a critical role in defense against viral and bacterial infection, detection of damaged self-DNA, tumor immunity, and autoinflammatory disease.

## Structure & Domains

STING is a type III transmembrane protein oriented with its N-terminus in the ER lumen and C-terminus in the cytoplasm. Its architecture consists of two major functional regions:

**N-terminal transmembrane domain**: Contains four transmembrane segments (TM1–TM4) that anchor STING in the ER membrane. TM4 harbors a cholesterol-binding motif that is important for STING's trafficking to the ER-Golgi intermediate compartment (ERGIC) and Golgi apparatus upon activation. The transmembrane domain is also involved in oligomerization and mediates STING's interaction with the ER-resident protein STIM1.

**C-terminal STING domain (STING-CTD)**: Forms an obligate homodimer and contains the ligand-binding pocket for 2'3'-cGAMP and bacterial CDNs. The STING-CTD also encodes the TBK1-binding motif (pLxIS motif) and the IRF3-binding motif. Upon cyclic dinucleotide binding, STING-CTD undergoes a dramatic conformational change — the flexible lid region closes over the bound ligand — which repositions the TBK1-binding site and enables recruitment of [[TBK1]]. This open-to-closed lid transition is the molecular switch that initiates downstream signaling.

## Mechanism of Action

The canonical cGAS-STING pathway proceeds through the following steps:

1. **DNA sensing**: Cytosolic double-stranded DNA (from pathogens, mitochondria, or damaged nuclei) is detected by cGAS, which synthesizes the second messenger 2'3'-cGAMP (cyclic GMP-AMP).
2. **Ligand binding**: 2'3'-cGAMP is transferred to STING on the ER membrane, where it binds the C-terminal ligand-binding pocket.
3. **STING activation**: Cyclic dinucleotide binding induces a conformational change that triggers STING oligomerization and translocation from the ER to the ER-Golgi intermediate compartment (ERGIC) and Golgi apparatus.
4. **TBK1 recruitment**: On the Golgi membrane, STING recruits [[TBK1]] via the pLxIS motif. TBK1 autophosphorylates and becomes catalytically active.
5. **IRF3 phosphorylation**: Active TBK1 phosphorylates IRF3 (Interferon Regulatory Factor 3), causing IRF3 dimerization, nuclear translocation, and transcription of *IFNB1* (type I interferon, primarily IFN-β) and interferon-stimulated genes (ISGs).
6. **NF-κB activation**: STING also activates NF-κB via [[TRAF6]]/TBK1 signaling, leading to transcription of pro-inflammatory cytokines including TNF-α and IL-6.
7. **Autophagy induction**: STING induces autophagy through LC3 lipidation, though the precise mechanism remains under investigation. This may serve to clear cytosolic DNA and limit ongoing STING activation.

Cytosolic DNA sensors converge on this pathway: cGAS is the primary sensor for cytoplasmic DNA; AIM2 detects DNA and activates the inflammasome; IFI16 senses nuclear DNA and can also produce cGAMP in the nucleus.

## Physiological Function

STING serves multiple protective roles in host defense and homeostasis:

**Antiviral defense**: STING is essential for detecting DNA viruses including herpes simplex virus (HSV), cytomegalovirus (CMV), and adenovirus. Viral DNA released into the cytoplasm activates cGAS, producing cGAMP that engages STING and triggers IFN-α/β production to establish an antiviral state in neighboring cells.

**Antibacterial defense**: Intracellular bacteria such as *Mycobacterium tuberculosis* are sensed by the cGAS-STING pathway. Bacterial cyclic dinucleotides (c-di-GMP, c-di-AMP, 3'3'-cGAMP) can directly bind STING, and bacterial DNA released during infection activates cGAS.

**Mitochondrial DNA surveillance**: Mitochondrial damage (from oxidative stress, infection, or metabolic dysfunction) releases mitochondrial DNA (mtDNA) into the cytosol. cGAS detects this mtDNA, activating STING and promoting sterile inflammation. This is a key mechanism linking mitochondrial dysfunction to inflammatory disease.

**Nuclear DNA leak detection**: During mitosis, nuclear envelope breakdown allows nuclear DNA to contact cytoplasmic cGAS. This process is normally tolerogenic, but nuclear envelope rupture in interphase cells (due to mechanical stress or nuclear lamina defects) activates STING and drives senescence-associated inflammation.

**Tumor immunity**: Dying cancer cells release DNA that activates cGAS-STING in immune cells and tumor cells, promoting anti-tumor immunity through type I interferon production and dendritic cell cross-priming of CD8+ T cells.

## Pathology & Clinical Relevance

**STING-associated vasculopathy with onset in infancy (SAVI)**: SAVI is caused by gain-of-function mutations in *TMEM173* (e.g., N154S, V155M, R284G) that render STING constitutively active, independent of cGAMP binding. Patients present with severe systemic inflammation, vasculopathy (livedo reticularis, ulceration), interstitial lung disease, and elevated type I interferon. This condition demonstrates that uncontrolled STING signaling causes significant tissue damage and inflammation.

**Aicardi-Goutières syndrome (AGS)**: AGS is an autoinflammatory interferonopathy caused by chronic cGAS-STING activation by endogenous nucleic acids. Mutations in DNase III (TREX1) or SAMHD1 impair DNA degradation, leading to accumulation of cytosolic DNA that chronically activates cGAS-STING.

**Neurodegeneration**: Mitochondrial DNA released from damaged mitochondria activates cGAS-STING in microglia, driving neuroinflammation implicated in Alzheimer's disease, Parkinson's disease, and amyotrophic lateral sclerosis (ALS). STING inhibition has emerged as a therapeutic strategy for neurodegenerative conditions.

**Cancer immunotherapy**: STING agonists — including diABZI (a potent non-nucleotide agonist), MSA-2 (a systemic CDN analog), and ADU-S100 (an intratumoral CDN) — are being developed to activate anti-tumor immunity by stimulating type I interferon production within the tumor microenvironment. These agents are in clinical trials for various solid tumors and hematologic malignancies.

**Autoimmune disease**: Inappropriate STING activation contributes to lupus-like autoimmunity, where self-DNA from apoptotic cells triggers chronic cGAS-STING signaling. Therapeutic strategies under development include STING antagonists (e.g., HCl-560), neutralizing antibodies, and inhibition of upstream cGAS activity.

## Connections

- [[Immune System]] — STING is a core component of innate immune DNA sensing
- [[TBK1]] — kinase recruited by STING to phosphorylate IRF3
- [[TRAF6]] — adaptor protein mediating STING's NF-κB activation
- [[Autophagy]] — STING induces autophagy via LC3 lipidation
- [[LC3]] — marker of autophagosome formation, lipidated during STING-mediated autophagy
- [[Inflammation]] — STING drives pro-inflammatory cytokine production via NF-κB
- [[TFEB]] — transcription factor involved in lysosomal biogenesis, interacts with STING trafficking

## Linking Summary

- New links added: [[TMEM173]], [[TRAF6]], [[LC3]], [[Inflammation]], [[TBK1]]
- Existing links retained: [[Immune System]], [[TFEB]]
- Suggested new entity notes to create: [[cGAS]], [[IRF3]], [[2'3'-cGAMP]], [[NF-kB]], [[SAVI]], [[Aicardi-Goutières Syndrome]], [[Type I Interferon]]
- Strong connections to strengthen: [[STING]] ↔ [[TBK1]], [[STING]] ↔ [[Inflammation]]
