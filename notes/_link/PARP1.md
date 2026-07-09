---
title: PARP1
description: PARP1 (Poly [ADP-ribose] polymerase 1, 116 kDa) is a nuclear zinc-finger
  enzyme that detects DNA strand breaks and catalyzes the transfer of ADP-ribose units
  from NAD+ onto target proteins, forming poly(ADP-ribose) (PAR) chains.
created: 2024-01-01
updated: 2026-07-06
tags:
  - enzyme
aliases: [PARP-1, Poly(ADP-ribose) polymerase 1, ARTD1]
---

# PARP1

PARP1 (Poly [ADP-ribose] polymerase 1, 116 kDa) is the founding member of the PARP family, which comprises 17 members in humans. It is a nuclear zinc-finger enzyme that detects DNA strand breaks and catalyzes the transfer of ADP-ribose units from [[NAD+]] onto target proteins, forming poly(ADP-ribose) (PAR) chains. This PARylation modifies histones, transcription factors, and DNA repair proteins to facilitate the DNA damage response. PARP1 is the most abundant nuclear protein—approximately one copy per 1,000 nucleosomes—and the primary sensor of DNA single-strand breaks (SSBs) and double-strand breaks (DSBs). By rapidly synthesizing negatively charged PAR polymers, PARP1 initiates a signaling cascade that recruits downstream repair factors and remodels chromatin to provide access to damaged DNA.

## Structure & Domains

PARP1 is organized into three functional regions. The N-terminal DNA-binding domain contains three zinc finger motifs: Zn1 directly detects DNA strand breaks by recognizing disrupted base pairing, Zn2 mediates allosteric activation of the catalytic domain upon DNA binding, and Zn3 serves as an automodification site where PARP1 attaches PAR chains to itself. The central auto-modification domain harbors BRCT (BRCA1 C-terminus) repeats that mediate protein–protein interactions, a WGR motif involved in DNA binding, and glutamate-rich automodification sites that are targets for self-PARylation. The C-terminal catalytic domain comprises a helical autoinhibitory module—held in a closed conformation by the zinc fingers in the absence of DNA damage—and the ART (ADP-ribosyltransferase) domain, which contains the conserved PARP signature motif His-Glu-Trp-XXX-Glu responsible for NAD+ binding and catalysis.

The structural transition from autoinhibited to active conformation is well-characterized by X-ray crystallography. In the absence of DNA, the helical domain folds over the ART active site, physically blocking NAD+ access. DNA binding induces a lever-arm movement in Zn2 that swings the helical domain away, exposing the catalytic cleft. This allosteric mechanism ensures PARP1 remains silent unless a genuine DNA lesion is present, preventing spurious PARylation that would waste cellular [[NAD+]].

Within the PARP family, [[PARP2]] retains approximately 20% of the catalytic activity of PARP1 and cooperates with it in DNA repair, particularly in the SSBR pathway where PARP1 and PARP2 can form heterodimers at break sites. PARP3 participates in mitotic checkpoint signaling and DNA repair at centrosomes, while PARP4 (also known as vault PARP) is a component of vault particles whose function remains incompletely understood. Tankyrases (TNKS1 and TNKS2) PARylate AXIN proteins in the Wnt signaling pathway and regulate telomere function through shelterin complex modification. PARP6 and PARP7 (TMEM123) have more specialized roles in RNA editing and viral defense, respectively. Despite shared catalytic mechanisms, each family member has distinct substrate preferences, subcellular localizations, and regulatory mechanisms.

## Mechanism of Action

PARP1 activation begins when a DNA strand break is detected by the zinc fingers. Zn1 binds the broken DNA terminus, triggering a conformational change transmitted through Zn2 that relieves autoinhibition of the catalytic domain. The activated ART domain then catalyzes two sequential reactions: automodification, in which PARP1 attaches long, branched PAR chains to itself, and trans-PARylation, in which PAR chains are added to histones, topoisomerases, [[XRCC1]], and DNA-PKcs in the vicinity of the break. The highly negatively charged PAR chains function as a molecular beacon, recruiting DNA repair proteins through their PAR-binding motifs.

For single-strand break repair, PARP1 recruits the SSBR pathway scaffold [[XRCC1]], which in turn coordinates DNA ligase III and DNA polymerase β to seal the break and fill the gap. For double-strand break signaling, PARP1-mediated PARylation facilitates the recruitment of [[ATM]] and ATR kinases, which phosphorylate H2AX (γH2AX) and activate the broader checkpoint response. When homologous recombination is the chosen repair pathway, BRCA1, BRCA2, and RAD51 are mobilized. PAR chains are transient and rapidly degraded by poly(ADP-ribose) glycohydrolase (PARG) and ADP-ribosylhydrolase 3 (ARH3), ensuring that repair signaling is spatially and temporally controlled.

## Physiological Function

PARP1 plays essential roles in multiple nuclear processes. Its primary function is DNA single-strand break repair via the SSBR pathway: PARP1 detects the break, recruits the [[XRCC1]] scaffold, and coordinates ligase III and polymerase β to complete repair. This pathway handles approximately 10,000–20,000 SSBs per cell per day arising from oxidative metabolism, spontaneous depurination, and aborted topoisomerase I activity. In double-strand break signaling, PARP1-dependent PARylation helps recruit and activate [[ATM]]/ATR kinases, initiating the DNA damage checkpoint cascade that arrests the cell cycle and prevents replication of damaged templates. PARP1 also mediates chromatin remodeling by PARylating histones H1, H2B, H3, and H4, which neutralizes their positive charge and loosens chromatin structure to expose damaged DNA to repair machinery. This chromatin relaxation is reversible, as PARG rapidly degrades PAR chains once repair is complete.

Beyond DNA repair, PARP1 regulates transcription by modulating the activity of factors such as NF-κB and AP-1, and it contributes to mitotic spindle assembly by PARylating tubulin and NuMA proteins at the mitotic apparatus. Telomere maintenance also depends on PARP1, which PARylates shelterin components to prevent telomere fusion and maintain replicative senescence checkpoints. In the immune response, PARP1 facilitates NF-κB activation and inflammatory gene expression, linking DNA damage sensing to innate immunity.

A critical downstream consequence of excessive PARP1 activation is parthanatos: hyperactivation of PARP1 leads to massive [[NAD+]] consumption, which depletes cellular ATP pools and triggers a caspase-independent form of programmed cell death. During parthanatos, PAR polymers themselves translocate from the nucleus to the mitochondria, where they trigger the release of apoptosis-inducing factor (AIF) from the inner mitochondrial membrane. AIF then translocates to the nucleus and promotes large-scale DNA fragmentation. This pathway is implicated in neuronal death following ischemic injury, and understanding it has driven the development of neuroprotective PARP inhibitor strategies.

## Pathology & Clinical Relevance

The therapeutic exploitation of PARP1 biology centers on synthetic lethality. In cells deficient in [[BRCA1]] or BRCA2—proteins essential for homologous recombination—the loss of PARP1-mediated repair eliminates the last major pathway available to fix DNA breaks. PARP inhibitors (PARPi) thus cause lethal accumulation of DSBs selectively in BRCA-mutant tumors while sparing normal cells. Four PARPi are FDA-approved: olaparib (Lynparza), rucaparib (Rubraca), niraparib (Zejula), and talazoparib (Talzenna). These agents are indicated for ovarian, breast, pancreatic, and prostate cancers harboring BRCA mutations or homologous recombination deficiency. Talazoparib is notable for its potent PARP-trapping activity, which contributes to greater cytotoxicity but also distinct toxicity profiles.

PARP1 hyperactivation is also implicated in ischemia–reperfusion injury. During stroke and myocardial infarction, oxidative DNA damage triggers excessive PARylation, depleting [[NAD+]] and [[ATP]] and driving cell death. PARPi have shown neuroprotective effects in preclinical stroke models by preserving cellular energy stores. In aging, age-related decline in PARP activity correlates with reduced DNA repair capacity and accumulation of genomic instability, suggesting that maintaining PARP1 function may be important for longevity. Species with longer lifespans tend to have higher basal PARP activity, supporting this association.

PARP1 also promotes [[Inflammation]] by facilitating NF-κB-dependent cytokine expression, positioning it as a potential target in chronic inflammatory conditions. PARP inhibitors have demonstrated anti-inflammatory effects in models of arthritis, colitis, and endotoxemia. The interplay between PARP1 and [[SIRT1]] adds another layer of metabolic regulation: because both enzymes consume [[NAD+]], hyperactive PARP1 can suppress SIRT1-dependent deacetylation and metabolic homeostasis, linking DNA damage to metabolic dysfunction. Recent research has also revealed roles for PARP1 in the regulation of gene expression through PARylation of transcription factors, RNA polymerase II, and chromatin-remodeling complexes, expanding its biological significance well beyond classical DNA repair.

# 

## Documents

List of documents that mention this entity

  - [[_document_ - Nicotinamide Riboside—The Current State of Research and Therapeutic Uses|Nicotinamide Riboside—The Current State of Research and Therapeutic Uses]]
    - PARP1 and PARP2 respond to DNA breaks in the nucleus and facilitate the process of DNA repair \[\].


## Connections

- [[PARP2]] — related family member with ~20% catalytic activity, cooperates in DNA repair
- [[NAD+]] — substrate consumed by PARP1 catalysis; PARP1 and [[SIRT1]] compete for this pool
- [[DNA Repair]] — PARP1 is the primary sensor and initiator of the SSB repair pathway
- [[BRCA1]] — deficiency creates synthetic lethality with PARP inhibition
- [[XRCC1]] — scaffold protein recruited by PARP1 for single-strand break repair
- [[ATM]] — kinase recruited to DSBs with assistance from PARP1-dependent PARylation
- [[PARP inhibitors]] — therapeutic agents that exploit synthetic lethality in BRCA-mutant cancers
- [[Apoptosis]] — excessive PARP1 activation triggers parthanatos, a caspase-independent cell death pathway
- [[Chromatin]] — PARylation of histones remodels chromatin structure at damage sites
- [[NF-κB]] — transcription factor whose activity is modulated by PARP1-dependent PARylation
- [[Inflammation]] — PARP1 promotes NF-κB activation and pro-inflammatory cytokine expression
- [[DNA Damage]] — PARP1 is the primary detector of DNA strand breaks
- [[Histone Modification]] — PARylation is a post-translational modification of histones
- [[Oxidative Stress]] — oxidative DNA damage is a major activator of PARP1

## Linking Summary

- New links added: [[PARP2]], [[NAD+]], [[DNA Repair]], [[BRCA1]], [[XRCC1]], [[ATM]], [[PARP inhibitors]], [[Apoptosis]], [[Chromatin]], [[NF-κB]], [[Inflammation]], [[DNA Damage]], [[Histone Modification]], [[Oxidative Stress]], [[ATP]], [[SIRT1]]
- Suggested new entity notes to create: [[PARG]], [[Parthanatos]]
  - Strong connections to strengthen: [[PARP1]] ↔ DNA Repair, [[PARP1]] ↔ [[NAD+]], [[PARP1]] ↔ PARP inhibitors, [[PARP1]] ↔ BRCA1
