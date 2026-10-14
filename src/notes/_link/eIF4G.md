---
title: eIF4G
description: eIF4G is the large scaffolding subunit of the eIF4F cap-binding complex, binding eIF4E, eIF4A, eIF3 and poly(A)-binding protein to assemble the 43S preinitiation complex, and acting as the convergence point for mTORC1 and MNK1 control of translation.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - translation
  - cap-dependent-translation
  - scaffolding
aliases:
  - eIF4G1
  - eIF4GI
  - p220
  - Eukaryotic translation initiation factor 4 gamma
---

# eIF4G

**eIF4G** is the large scaffolding subunit of the **eIF4F** complex and the physical assembly point that holds the cap-binding machinery, the RNA helicase, the multi-subunit eIF3 body, and the poly(A)-binding protein together on an mRNA. In humans it is encoded by three paralogous genes — *EIF4G1* (p220, chromosome 3q27, alias *PARK18*), *EIF4G2*, and *EIF4G3* — with *EIF4G1* the dominant isoform in most tissues and the one covered here. It is a very large protein (~1600–1750 aa for p220) built largely from HEAT-repeats and intrinsically disordered regions, which is what lets it act as a flexible hub rather than an enzyme.

## Mechanism

> [!info] The three-way scaffold
> eIF4G binds four key partners through largely non-overlapping interfaces:
> - **[[eIF4E]]** — the cap-binding subunit, held via a short, conserved motif sequence that eIF4G shares with the 4E-binding proteins (see below)
> - **[[eIF4A]]** — the DEAD-box RNA helicase that unwinds 5′ UTR secondary structure, engaging eIF4G through two independent binding sites
> - **eIF3** — the 43S preinitiation complex scaffold; eIF4G is the bridge that docks the cap-bound eIF4F onto eIF3
> - **Poly(A)-binding protein (PABP)** — an N-terminal site that closes the loop between the 5′ cap and the 3′ poly(A) tail, the structural basis of poly(A)-dependent circularization and the synergistic ("closed-loop") enhancement of translation
>
> Assembling all four is what permits loading of the 40S subunit onto the mRNA and scanning to the AUG in [[Translation Initiation]].

Because eIF4G is a scaffold, its contribution to translation is **stoichiometric and non-catalytic** — which is precisely why it is such an efficient control point. Cells regulate translation initiation largely by controlling how much eIF4F is available and how stably it is assembled, not by changing the activity of the helicase.

## Regulation

- **[[4E-BP1]] (and 4E-BP2/3)** — the eIF4E-binding proteins compete with eIF4G for the same site on eIF4E. When 4E-BPs are **hypophosphorylated**, they sequester eIF4E and cap-dependent translation is blocked; **[[mTORC1]]-mediated phosphorylation of 4E-BP1** releases eIF4E back to eIF4G, restoring translation. This is the canonical nutrient/growth-factor arm of mTOR signaling.
- **[[Insulin Signaling]]** and amino acids both converge on the mTORC1–4E-BP1 axis; insulin was originally shown to stimulate eIF4G–eIF3 association via mTOR.
- **MNK1/MNK2** — eIF4G acts as a docking platform that recruits the MAPK-interacting kinases MNK1 and MNK2 to eIF4E, bringing them into position to phosphorylate eIF4E. This couples the MAPK stress arm to translation.
- **Ubiquitin–proteasome turnover** — [[USP9X]] deubiquitinates eIF4G, stabilizing it and thereby sustaining translation.
- **Heat shock** — chaperones such as Hsp27 can bind eIF4G and facilitate dissociation of cap-initiation complexes, providing a mechanism for selective translational shutdown during proteotoxic stress.

## Clinical & Disease Relevance

> [!info] Familial Parkinson's disease
> Heterozygous loss-of-function variants in *EIF4G1* were identified in families with autosomal dominant [[Parkinson's Disease]] without known cause, and the alias *PARK18* comes from this. A 2023 study (Kim et al., *PNAS*) showed that eIF4G1 promotes translation of a specific subset of mRNAs required for **mitochondrial oxidative phosphorylation, axonal morphogenesis, and memory**, providing a mechanistic link between a translation scaffold and a neurodegenerative phenotype. This is a strong demonstration that eIF4G is not merely a generic initiation factor.

EIF4G1 is also **gene-amplified in squamous cell lung carcinoma**, where the encoded protein is immunogenic — one of the earliest descriptions of eIF4G overexpression in human cancer, and a precedent for the "translation machinery as oncogene" model that has since become mainstream. In the vault's m6A/autophagy framing, eIF4G is also part of the machinery by which eIF4A activity is tuned (see the [[eIF4A]] note on PDCD4).

## Viral Tropism

> [!warning] Picornaviral 2A proteases target eIF4G
> Foot-and-mouth disease virus and other picornaviruses encode **2A proteases that cleave eIF4G**, shutting off host cap-dependent translation and forcing the virus onto its own cap-independent internal ribosome entry site. Because the cleavage occurs at a short conserved site, a single amino acid substitution (I739V in the susceptible region) renders eIF4G resistant to 2A cleavage and rescues viral susceptibility in vitro — a beautiful demonstration that one scissile bond controls a host-virus translation switch. Rotavirus NSP3 likewise binds eIF4GI and evicts PABP from eIF4F to redirect the host translation machinery.

## Documents

- [[Translation Initiation]]
  - Names eIF4G as the third component of eIF4F alongside eIF4E and eIF4A; this note supplies the scaffolding mechanism and the mTOR/4E-BP1/MNK regulatory logic behind that listing.
- [[eIF4A]]
  - The vault's eIF4A note frames eIF4A helicase activity (and its PDCD4 inhibition) as regulating TFEB mRNA translation; eIF4G is the physical scaffold that docks eIF4A to the cap-bound complex, connecting the TFEB framing to initiation.
- [[USP9X]]
  - Lists eIF4G among USP9X's deubiquitinating substrates; the eIF4G side of that relationship — stabilized eIF4F availability sustaining translation — is what this note makes explicit.

## Connections

- [[eIF4E]] — eIF4E is the cap-binding subunit and eIF4G's obligate partner; the entire 4E-BP/mTOR regulatory logic is built on competition between eIF4G and the 4E-BPs for a single motif on eIF4E.
- [[eIF4A]] — the RNA helicase docked to eIF4G through two independent binding sites; together eIF4E+eIF4A+eIF4G constitute eIF4F, and eIF4G is the part that makes the assembly a functional complex rather than three separate activities.
- [[Translation Initiation]] — eIF4G's role is defined entirely within this process: it converts the cap-recognition event into recruitment of the 43S preinitiation complex.
- [[cap-dependent translation]] — eIF4G is the defining scaffold of the cap-dependent pathway, and its cleavage by viral 2A proteases is the canonical example of this pathway being hijacked.
- [[4E-BP1]] — the direct competitive inhibitor of eIF4G–eIF4E binding; mTORC1 phosphorylation of 4E-BP1 is the switch that controls eIF4F availability.
- [[mTORC1]] and [[Insulin Signaling]] — upstream of 4E-BP1 phosphorylation and therefore of eIF4F assembly; this is the nutrient- and growth-factor-sensitive route into eIF4G function.
- [[USP9X]] — deubiquitinates and stabilizes eIF4G, connecting proteostasis to translation capacity.
- [[Parkinson's Disease]] — monogenic heterozygous *EIF4G1* loss-of-function causes dominant familial PD, and eIF4G1 promotes translation of the mitochondrial and axonal transcripts whose loss produces the phenotype.
- [[Mitochondrial Dysfunction]] — the same *EIF4G1* study identified mitochondrial oxidative phosphorylation as a directly translation-dependent output, connecting eIF4G to the mitochondria-centered aging literature in this vault.
- [[Ubiquitin-Proteasome System]] — the ubiquitin-dependent turnover of eIF4G is the layer that sets eIF4F availability over longer timescales.
- [[SARS-CoV-2]] and [[Viral Replication]] — coronavirus replicase polyprotein processing and host shutoff involve host translation machinery, making eIF4G relevant to the viral-replication framing even though it is not a direct coronaviral target.

## Linking Summary

- New links added: [[eIF4E]], [[eIF4A]], [[Translation Initiation]], [[cap-dependent translation]], [[4E-BP1]], [[mTORC1]], [[Insulin Signaling]], [[USP9X]], [[Parkinson's Disease]], [[Mitochondrial Dysfunction]], [[Ubiquitin-Proteasome System]], [[SARS-CoV-2]], [[Viral Replication]]
- Suggested notes to create: [[eIF3]], [[Poly(A)-binding protein]], [[43S preinitiation complex]], [[4E-BPs]], [[MNK1]], [[Internal ribosome entry site]], [[2A protease]], [[HEAT repeats]], [[Picornavirus]], [[Closed-loop model]], [[eIF4E phosphorylation]]
- Strong connections to strengthen: [[eIF4G]] ↔ [[eIF4E]] ↔ [[eIF4A]] (eIF4F trimer); [[eIF4G]] ↔ [[4E-BP1]] ↔ [[mTORC1]] (regulatory switch); [[eIF4G]] ↔ [[Parkinson's Disease]] (*EIF4G1*/PARK18)
