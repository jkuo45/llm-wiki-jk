---
title: Toll-like Receptor
description: A class of proteins that play a key role in the innate immune system
  by recognizing structurally conserved molecules derived from microbes.
type: entity
created: 2024-01-01
updated: 2026-07-06
tags:
  - Receptor
aliases: []
---

# Toll-like Receptor

Toll-like receptors (TLRs) are a family of pattern recognition receptors (PRRs) that detect conserved microbial components known as pathogen-associated molecular patterns (PAMPs) and endogenous damage-associated molecular patterns (DAMPs). Humans possess 10 functional TLRs (TLR1–TLR10), each a type I transmembrane glycoprotein characterized by three domains: a leucine-rich repeat (LRR) ectodomain, a single transmembrane helix, and a cytoplasmic Toll/interleukin-1 receptor (TIR) homology domain. TLRs were first linked to innate immunity when TLR4 was identified as the receptor for lipopolysaccharide (LPS) in 1998 by Poltorak and colleagues, building on earlier work showing that the Drosophila Toll protein was essential for dorsal–ventral patterning and antifungal immunity. The discovery opened a new understanding of how the immune system rapidly detects infection and initiates inflammatory responses.

## Structure & Domains

**Extracellular domain.** The ectodomain of each TLR is a horseshoe-shaped solenoid composed of 19–25 leucine-rich repeats, each approximately 24 amino acids with the consensus motif LxxLxLxxN. N- and C-terminal capping domains (LRR-NT and LRR-CT) enclose the solenoid, shielding the hydrophobic core. Ligand binding occurs at the convex or concave surfaces of the solenoid, and dimerization interface residues are critical for partner recognition. TLR1, TLR2, TLR4, and TLR6 form both homo- and heterodimers, while TLR3, TLR7, TLR8, and TLR9 predominantly form homodimers upon ligand engagement.

**Transmembrane domain.** A single-pass α-helical transmembrane segment anchors the receptor in the plasma membrane or endosomal membrane, positioning the ectodomain for ligand surveillance and the cytoplasmic TIR domain for signal transduction.

**Intracellular TIR domain.** The TIR domain spans roughly 200 amino acids and serves as a platform for recruiting adaptor proteins that initiate downstream signaling. Four key adaptors have been identified: MyD88 (myeloid differentiation primary response 88), TRIF (TIR-domain-containing adapter-inducing interferon-β, also called TICAM-1), MAL/TIRAP (MyD88-adaptor-like/TIR-domain-containing adaptor protein), and TRAM (TRIF-related adaptor molecule). The specificity of the TLR response depends on which adaptor complexes assemble at the TIR domain.

## TLR Classification & Ligands

TLRs can be divided by subcellular localization into two groups.

**Cell-surface TLRs (TLR1, TLR2, TLR4, TLR5, TLR6, TLR10).** These receptors survey the extracellular environment for microbial membrane components.

| Receptor | Ligand(s) | Microbial source |
|----------|-----------|------------------|
| TLR1/TLR2 (heterodimer) | Triacyl lipopeptides | Bacteria, mycobacteria |
| TLR2/TLR6 (heterodimer) | Diacyl lipopeptides, zymosan, lipoteichoic acid | Gram-positive bacteria, fungi |
| TLR4 (homodimer, with MD-2 and CD14) | Lipopolysaccharide (LPS) | Gram-negative bacteria |
| TLR5 | Flagellin | Flagellated bacteria |
| TLR10 | Unknown; possibly triacyl lipopeptides | Under investigation |

**Endosomal TLRs (TLR3, TLR7, TLR8, TLR9, TLR11).** After internalization into endolysosomes, these receptors scan for microbial nucleic acids released during pathogen degradation.

| Receptor | Ligand(s) | Microbial source |
|----------|-----------|------------------|
| TLR3 | Double-stranded RNA (dsRNA); synthetic poly(I:C) | Viruses |
| TLR7 | Single-stranded RNA (ssRNA); imiquimod, resiquimod | Viruses |
| TLR8 | Single-stranded RNA; resiquimod | Viruses |
| TLR9 | Unmethylated CpG DNA | Bacteria, DNA viruses |
| TLR11 | Profilin-like molecule | *Toxoplasma gondii* |

## Signaling Pathways

TLR signaling bifurcates into two major cascades, depending on adaptor usage.

**MyD88-dependent pathway (all TLRs except TLR3).** Ligand binding triggers TIR-domain recruitment of MAL/TIRAP, which in turn recruits MyD88. MyD88 associates with IRAK4 and IRAK1, forming the "Myddosome." IRAK4 phosphorylates IRAK1, which then activates TRAF6 (TNF receptor-associated factor 6). TRAF6, together with UBC13 and UEV1A, synthesizes K63-linked polyubiquitin chains that activate the TAK1 (TGF-β-activated kinase 1) complex. TAK1 subsequently activates the IκB kinase (IKK) complex, leading to NF-κB nuclear translocation and pro-inflammatory cytokine gene transcription (e.g., TNF-α, IL-6, IL-1β). TAK1 also activates MAP kinase cascades (p38, ERK, JNK), inducing the transcription factor AP-1.

**TRIF-dependent pathway (TLR3 and TLR4).** TLR3 signals exclusively through TRIF, while TLR4 utilizes TRIF after endocytosis from the plasma membrane. TRIF recruits TRAF3, which activates the kinase TBK1. TBK1 phosphorylates IRF3 (interferon regulatory factor 3), driving its dimerization and nuclear translocation to induce type I interferons, particularly IFN-β. TRIF can also engage TRAF6 to activate NF-κB, providing a bridge to inflammatory gene expression.

**Compartmentalized TLR4 signaling.** TLR4 is unique in using both pathways sequentially. At the plasma membrane, TLR4 engages MAL and MyD88 to trigger early-phase NF-κB activation. After endocytosis mediated by CD14 and the GTPase Rab11a, TLR4 engages TRAM and TRIF in endosomes to induce IRF3-dependent interferon production. This spatial segregation ensures distinct transcriptional programs from a single receptor.

**Endosomal TLR signaling.** TLR7, TLR8, and TLR9 primarily activate IRF7 (constitutively expressed in plasmacytoid dendritic cells) or IRF3, driving robust type I interferon production essential for antiviral defense. This is why endosomal acidification is required for ligand sensing by these receptors.

## Physiological Function

TLRs are sentinels of the innate immune system. Upon detecting PAMPs, they trigger rapid cytokine and chemokine production, recruiting neutrophils, monocytes, and other immune cells to the site of infection. This inflammatory response is essential for pathogen clearance.

TLRs also bridge innate and adaptive immunity. Dendritic cells activated through TLR signaling undergo maturation, upregulating major histocompatibility complex class II (MHC II) molecules and co-stimulatory molecules (CD80, CD86, CD40). This enhanced antigen presentation activates naive T cells, initiating antigen-specific adaptive immune responses. TLR-stimulated dendritic cells produce cytokines that shape T helper cell differentiation (e.g., IL-12 for Th1, IL-6 for Th17).

Beyond infection, TLR2 and TLR4 contribute to wound healing and tissue repair by activating fibroblasts and promoting extracellular matrix deposition. In the gastrointestinal tract, TLR signaling plays a critical role in immune tolerance to commensal microbiota, maintaining intestinal homeostasis through regulatory T cell induction and epithelial barrier integrity.

## Pathology & Clinical Relevance

**Sepsis.** Excessive TLR4 activation by LPS during Gram-negative bacteremia drives a cytokine storm, leading to systemic inflammatory response syndrome (SIRS), disseminated intravascular coagulation, multi-organ failure, and death. The TLR4 antagonist eritoran was tested in clinical trials for sepsis but did not meet primary endpoints, highlighting the complexity of sepsis pathophysiology.

**Autoimmune disease.** In systemic lupus erythematosus (SLE), self-DNA and self-RNA released from apoptotic cells can activate endosomal TLR9 and TLR7, respectively, driving autoantibody production and type I interferon signatures. Hydroxychloroquine, which raises endosomal pH and impairs TLR7/TLR9 signaling, is a cornerstone of SLE treatment.

**Inflammatory bowel disease.** Dysregulated TLR signaling in the gut mucosa contributes to chronic intestinal inflammation in Crohn's disease and ulcerative colitis, with altered expression of TLR2, TLR4, and TLR9 in affected tissue.

**Cancer.** TLR agonists have found clinical application in oncology. Imiquimod, a TLR7 agonist, is approved for basal cell carcinoma and actinic keratosis. CpG oligodeoxynucleotides (TLR9 agonists) are being evaluated as vaccine adjuvants and intratumoral immunotherapies to stimulate anti-tumor immune responses.

**Neurodegeneration.** TLR2 and TLR4 on microglia can be activated by amyloid-β (Aβ) aggregates, contributing to neuroinflammation in Alzheimer's disease. Genetic variants in TLR pathways have been associated with disease risk.

**Therapeutic landscape.** TLR agonists are widely used as vaccine adjuvants: monophosphoryl lipid A (MPL, TLR4) in the HPV and hepatitis B vaccines, CpG 1018 (TLR9) in the Heplisav-B hepatitis B vaccine, and imiquimod (TLR7) as a topical immunomodulator. TLR antagonists remain under investigation for sepsis, autoimmune diseases, and chronic inflammatory conditions.

## Connections
- [[Toll-like Receptor]] — related entity
- [[NF-kB]] — downstream transcription factor activated by TLR signaling
- [[Dendritic Cells]] — antigen-presenting cells activated by TLR ligands
- [[Inflammation]] — physiological process driven by TLR activation
- [[Innate Immune System]] — broader system in which TLRs function
- [[CpG DNA]] — ligand for TLR9
- [[Lipopolysaccharide]] — ligand for TLR4
- [[Hydroxychloroquine]] — TLR7/9 inhibitor used in SLE

## Linking Summary
- New links added: [[NF-kB]], [[Dendritic Cells]], [[Inflammation]], [[Innate Immune System]], [[CpG DNA]], [[Lipopolysaccharide]], [[Hydroxychloroquine]]
- Suggested new entity notes to create: [[MyD88]], [[TRIF]], [[IRAK4]], [[TRAF6]], [[TIR Domain]]
- Strong connections to strengthen: [[Toll-like Receptor]] ↔ [[Dendritic Cells]], [[Toll-like Receptor]] ↔ [[Inflammation]]
