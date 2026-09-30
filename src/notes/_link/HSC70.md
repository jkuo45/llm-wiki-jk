---
title: HSC70
description: HSC70 (HSPA8, also HSP73) is the constitutively expressed Hsp70 family chaperone. Unlike inducible HSP70, HSC70 is present at high basal level and performs housekeeping proteostasis, and it is the obligatory cytosolic receptor that delivers KFERQ-motif substrates to LAMP2A for chaperone-mediated autophagy.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - proteostasis
  - autophagy
aliases: [HSPA8, Hsc70, Heat shock cognate 70 kDa protein, HSP73, sc70]
---

# HSC70

HSC70 (heat shock cognate protein 70, gene **HSPA8**, also called HSP73) is the constitutive member of the [[HSP70]] family. Where HSP70 is a stress-inducible emergency responder, HSC70 is present at high basal abundance and performs continuous housekeeping work: folding newly synthesised proteins, refolding partly unfolded ones, preventing aggregation, and — uniquely among chaperones — acting as a **selective receptor for autophagy**.

> [!info] Domain architecture
> Human HSC70 is 646 residues with three domains: a **44 kDa N-terminal nucleotide-binding (ATPase) domain** (residues 1–384), an **18 kDa substrate-binding domain** (385–543) forming a β-sandwich with a helical lid, and a **10 kDa C-terminal "lid" domain** (544–646). Its C-terminal tail ends in the absolutely conserved **EEVD motif**, which is required for association with several co-chaperones. HSC70 also carries two nuclear localisation signals (DAKRL69–73 and the KRKHKKDISENKRAVRR246–262 stretch in the ATPase domain), so it shuttles between cytosol and nucleus.

> [!info] Mechanism
> The ATPase domain cycles between an **open ADP-bound** state with the substrate-binding domain exposed (high-affinity, slow exchange) and a **closed ATP-bound** state with the lid latched shut over the substrate (low-affinity, rapid release). A substrate is delivered by the ATPase domain, released into the SBD, and only fully refolded or properly folded clients are released on the ATP cycle. Repeating this "bind-and-release" is what makes a chaperone catalytically distinct from a folding sink. and this ATPase cycle — not the substrate binding — is where the pharmacological Hsp70 inhibitors act. The DNAJ/HSP40 co-chaperone family and the nucleotide exchange factors set the timing.

## Chaperone-mediated autophagy

> [!info] Mechanism
> CMA is the only autophagy pathway that degrades **individual soluble cytosolic proteins** rather than organelles or bulk cytoplasm, and HSC70 is its essential first step. The mechanism is:
> 1. HSC70 binds a client protein whose sequence contains a **pentapeptide KFERQ-like motif** (one or two of K/R, F, E, Q, and one D/E in either flanking region).
> 2. The complex docks on the lysosomal membrane at **LAMP2A**, the third isoform of the lysosomal-associated membrane protein, which is the CMA receptor.
> 3. HSC70 translocates the unfolded substrate into the lysosomal lumen; the ATPase cycle is required at the membrane.
> 4. The substrate is degraded by lysosomal proteases; HSC70 returns to the cytosol.
>
> CMA activity rises with [[Fasting]] and [[Caloric Restriction]], is held down by chronic nutrient excess, and declines with age — an important caveat, because much of the "CMA declines with age" literature rests on over-expression of a GFP-tagged LAMP2A reporter and the true magnitude is debated.

HSC70 also has a specific role in degrading protein aggregates: it mediates the lysosomal clearance of [[Alpha-synuclein|α-synuclein]] via CMA (Mak et al., 2010) and the ubiquitination-dependent clearance of ALS-linked mutant SOD1 (Urushitani et al.). Both findings are of interest to the ageing/aggregation thread running through this vault, since a chaperone that is itself subject to age-related modification is a plausible failure point.

## Other functions

- Regulation of steroid hormone receptors: HSC70 holds [[Androgen Receptor|androgen]], [[Estrogen Receptor|estrogen]] and glucocorticoid receptors in a partially unfolded, ligand-ready state; the Hsp90 chaperone cycle then matures the receptor.
- Cell-surface signalling: HSC70 is exported and displayed on the plasma membrane of exosomes and of some cancer cells, where it acts as a ligand for [[TLR2]] and [[TLR4]] and for CD8⁺ T cells — a genuinely odd, still-contested "chaperone as signalling molecule" role.
- Immune regulation: HSPA8 is a described "molecular rheostat" in immune disorders, buffering both excessive and insufficient immune activation.

> [!warning] Clinical caveat
> The therapeutic record for direct HSC70 modulation is poor, and the reason is instructive. Broad Hsp70 induction (via [[HSF1]] activators such as [[Celastrol]]) has failed in trials, at least partly because HSC70 cannot distinguish a client that needs refolding from a mutant protein that needs destruction — pushing more chaperone onto a cell pushes both. The better-validated Hsp90-directed story in the vault depends on HSC70 only indirectly, as a co-chaperone. Separately, the claim that a small fraction of surface HSC70 is a therapeutically tractable target in cancer is real but remains far less mature than the Hsp90 story.

## Documents
- [[Chaperone-Mediated Autophagy]]
  - The vault's inbound link and the main reason for this note. CMA is the one autophagy pathway for which HSC70 is an obligatory component, so the enzyme and the pathway cannot be described independently.
- [[HSP70]]
  - The vault's inbound link from the family note; supplies the Hsp70 domain architecture and the stress-inducible contrast that defines HSC70's constitutive role.

## Connections

- [[HSP70]] — HSC70 is the constitutive paralog of the inducible HSP70. The two are ~80% identical, are both products of the HSPA1/HSPA8 gene pair, and are functionally interchangeable in most assays, which is a recurring source of antibody-specificity artefacts in the literature.
- [[Chaperone-Mediated Autophagy]] — HSC70 is the substrate-recognition step of CMA and without it no KFERQ protein is delivered to LAMP2A. This is the vault's clearest example of a chaperone functioning as a cargo receptor rather than a folding machine.
- [[LAMP-2A]] — the lysosomal receptor HSC70 docks on; its abundance, not HSC70 abundance, is the rate-limiting variable in most reported CMA manipulations.
- [[HSF1]] — the transcription factor that induces HSP70; HSC70 is only weakly HSF1-responsive, which is the mechanistic reason "heat shock" therapy hits HSP70 and not HSC70.
- [[HSP90β]] — HSC70 and Hsp90 cooperate in the folding of kinase clients including [[HER2]], and the Hsp90 inhibitor class works only while this chaperone partnership holds. The [[STUB1|STUB1/CHIP]] ubiquitin ligase terminates the cycle by ubiquitinating Hsp90.
- [[Alpha-synuclein]] and [[Parkinson's Disease]] — HSC70-mediated CMA degrades α-synuclein; the pathogenic species α-synuclein 25–35 kDa oligomers block the CMA machinery, and mutant α-synuclein in fibroblasts from patients impairs the pathway.
- [[Proteostasis]] and [[Autophagy]] — HSC70 sits at the intersection: it prevents aggregation (upstream of autophagy) and independently delivers individual proteins to lysosomes (as a distinct autophagy route).
- [[Aging]] — total HSC70 levels are broadly stable with age, but HSC70's *functional* capacity falls with age through post-translational modification, notably S-nitrosylation and S-glutathionylation, which impair its ATPase and substrate-binding domains. This decouples "chaperone levels are normal" from "chaperone function is normal".

## Linking Summary
- New links added: [[HSF1]], [[LAMP-2A]], [[Alpha-synuclein]], [[Parkinson's Disease]], [[TLR2]], [[TLR4]], [[Androgen Receptor]], [[Estrogen Receptor]], [[Celastrol]], [[Exosomes]]
- Suggested notes to create: [[KFERQ Motif]], [[LAMP2]], [[BAG3]], [[Nucleotide Exchange Factor]], [[DNAJC3]], [[CHIP]], [[HSP70 Inhibitor]], [[HSPA8 mRNA]]
- Strong connections to strengthen: [[HSC70]] ↔ [[Chaperone-Mediated Autophagy]], [[HSC70]] ↔ [[LAMP-2A]], [[HSC70]] ↔ [[HSP70]]
