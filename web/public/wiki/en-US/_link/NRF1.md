---
title: NRF1
description: 'Nuclear respiratory factor 1 (NFE2L1), a bZIP transcription factor and homodimer that binds MCB elements in the promoters of nuclear-encoded mitochondrial genes, coordinating mitochondrial biogenesis, respiration and heme synthesis with the mitochondrial genome.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - transcription-factor
  - mitochondria
aliases: [Nuclear Respiratory Factor 1, Nrf1, NFE2L1, alpha-PAL, TCF11]
---

# NRF1

NRF1 is the transcription factor that coordinates the nuclear and mitochondrial genomes. It activates the nuclear-encoded genes required for mitochondrial respiration, biogenesis and heme synthesis, and it does so indirectly for the mitochondrial-encoded subunits by activating the mitochondrial transcription machinery.

> [!warning] Naming hazard
> "NRF1" is a shared abbreviation for two unrelated genes. **NRF1/NFE2L1** is this transcription factor. **NRF2/NFE2L2** is the antioxidant-response regulator, a different protein with different domains, different DNA motif, and a different half-life. The HGNC symbol for the gene discussed here is *NFE2L1*, and bibliographic databases have historically conflated the two.

## Structure and domains

Human NRF1 (NRF1a, 742 aa) is unusually modular for a transcription factor. Nrf1 is described as having nine discrete regions:

| Region | Feature |
| --- | --- |
| **NTD** (N-terminal domain, ~residues 1–155) | Contains a hydrophobic transmembrane-like segment that targets NRF1a to the endoplasmic reticulum membrane; attenuates nuclear localisation and therefore transactivation. Absent in NRF2. |
| **AD1** (acidic transactivation domain 1) | Constitutive transactivation element. |
| **NST domain** | Asn/Ser/Thr-rich segment carrying multiple N-glycosylation sites; quality-control and luminal-retention functions. |
| **AD2** | Second acidic transactivation region. |
| **SR** (serine-repeat) | Regulatory phosphorylation region; the S47 site lies here. |
| **NC** (nuclear localisation / basic domain) | Nuclear import. |
| **bZIP** | Basic region plus leucine zipper — the DNA-binding and dimerisation module. |

The DNA-binding domain is shared with other Cap'n'Collar (CNC) family bZIP factors and is structurally distinct from the bZIP of the Fos/Jun or ATF families.

## Mechanism

> [!info] Mechanism
> NRF1 forms homodimers (it can also heterodimerise with small Maf proteins) that bind **MCB (mitochondrial control region) elements** — a dyad-symmetrical consensus centred on `YGCGCAYGCGCR` — present in the promoters and distal enhancers of nuclear-encoded mitochondrial genes. Via this route it transcriptionally activates respiratory chain subunits, mitochondrial ribosomal proteins, heme biosynthesis enzymes, and lipid-handling enzymes, and it drives the nuclear genes for **TFAM**, TFB1M and TFB2M — the three components of the mitochondrial transcription factor complex — thereby also controlling the mitochondrial-encoded subunits indirectly.

Regulation is unusually indirect and therefore a frequent source of surprise:

- **ER targeting and retrotranslocation.** NRF1a is synthesised on ER ribosomes and inserted into the ER membrane by its N-terminal transmembrane domain. The quality-control machinery (glycosylation in the lumen, [[ER Stress]]/UPR-driven degradation of misfolded protein) is required for NRF1 to acquire transcriptional competence; it must be retrotranslocated, deglycosylated, deglycolysed, and degaded in the cytosol before it can import into the nucleus. NRF1 therefore couples mitochondrial biogenesis to ER proteostasis — a direct mechanistic link to the UPR.
- **O-GlcNAcylation.** O-GlcNAc modification of NRF1 in response to nutrient/glucose status is required for its nuclear import and DNA binding, and has been proposed to couple nutrient sensing to mitochondrial biogenesis.
- **Phosphorylation and degradation.** Cyclin D1–CDK4/6 phosphorylates NRF1 at S47, promoting its turnover and thereby coordinating nuclear DNA synthesis with mitochondrial function. ARF binding and the ubiquitin ligases Mdm2 and HUWE1 also regulate stability.

## Physiological role and disease relevance

Nrf1 is broadly and constitutively expressed (unlike NRF2, which is inducible) and is required in essentially all nucleated cell types. Conditional knockout in mice produces mitochondrial dysfunction, defective oxidative phosphorylation, and metabolic derangements; Nrf1 has been reported as essential for cardiomyocyte mitochondrial maturation and for retinal photoreceptor development. Human disease causation is less well established than the mouse literature suggests, and biallelic or de novo NRF1 variants are only recently being reported.

> [!info] Source: [[_document_ - Mitohormesis - 2023_NOV]]
> The mitohormesis review names NRF1 alongside NRF2 as the best mammalian candidate for the yeast proteasomal-stress regulators RPN4/PDR3, noting that NRF1/NRF2 transcriptionally regulate proteasome components and that a recent human study implicated an NRF1- and HSF1-dependent pathway in the mammalian mitochondrial unfolded protein response — a response triggered by the dual signal of increased mitochondrial ROS plus cytosolic protein accumulation.

> [!info] Source: [[_document_ - Roles of SIRT3 in aging and aging-related diseases]]
> The SIRT3 review places NRF1 in the AMPK/PGC-1α/ERRα/SIRT3 cascade, reporting that resveratrol reverses repression of PGC-1α, NRF1 and TFAM and restores PINK1/Parkin-mediated mitophagy in cadmium-injured cells.

Two areas of active interest:

- **Oxygen–sensing and HIF pathway crosstalk.** NRF1 coordinates mitochondrial biogenesis with the [[HIF-1α]]-dominated hypoxic response; during ischaemia the balance between them shifts mitochondrial fate.
- **Inflammaging.** A 2025 *Nature Communications* study reported that NRF1-mediated innate immune signalling drives inflammaging, positioning NRF1 as a node rather than a straightforwardly protective factor — a useful counterweight to the "boost NRF1 for longevity" framing common in the supplement literature.

## Documents

- [[_document_ - Mitohormesis - 2023_NOV|Mitohormesis - 2023_NOV]] — names NRF1/NRF2 as the mammalian functional analogues of yeast RPN4/PDR3 proteasomal-stress regulators and implicates an NRF1/HSF1 pathway in the mammalian UPRmt response.
- [[_document_ - Roles of SIRT3 in aging and aging-related diseases|Roles of SIRT3 in aging and aging-related diseases]] — places NRF1 downstream of the AMPK/PGC-1α/ERRα/SIRT3 axis, as a target of resveratrol-mediated reversal of PGC-1α, NRF1 and TFAM repression alongside restored PINK1/Parkin mitophagy.
- [[_document_ - Mitochondrial Drivers Stem Cell Aging Inflammaging Bautista 2026|Mitochondrial Drivers Stem Cell Aging Inflammaging Bautista 2026]] — lists NRF1 transcriptional programmes alongside PGC-1α and FOXO as a target of SIRT1/SIRT3 whose activity is compromised by reduced NAD+ availability in ageing.

## Connections

- [[NRF2]] — The frequently confused sibling: a CNC-bZIP factor that shares NRF1's DNA-binding domain but binds antioxidant response elements and is regulated by [[Keap1]]-controlled degradation rather than by NRF1's ER-retrotranslocation route. The two also compete for some target promoters.
- [[TFAM]] — NRF1's most consequential downstream target; activating TFAM switches on mitochondrial DNA transcription, which is how nuclear NRF1 signalling reaches the mitochondrial genome.
- [[PGC-1α]] — The coactivator that co-activates NRF1 at mitochondrial promoters; NRF1 supplies the DNA-binding function and PGC-1α supplies the metabolic-state-dependent activation, so the two are functionally inseparable in mitochondrial biogenesis.
- [[ERRalpha]] — Another nuclear-receptor-family coactivator at the same promoters, and a crossover point between NRF1 and the [[SIRT3]]/AMPK axis.
- [[Mitochondrial Biogenesis]] — NRF1 is the transcriptional core of this process; without its MCB-element activation there is no coordinated increase in respiratory capacity.
- [[Mitochondrial DNA]] — NRF1 controls the nuclear half of mitochondrial gene expression, which is the only way the nucleus can set the rate of transcription from the 13 protein-coding mtDNA genes.
- [[Mitochondrial Function]] — NRF1 loss-of-function is among the most direct genetic routes to reduced respiratory capacity in a cell.
- [[SIRT3]] — Acts upstream of NRF1 (via the AMPK/PGC-1α/ERRα cascade) and is also an NAD+-dependent enzyme whose substrate supply depends on the same metabolic state NRF1 controls.
- [[ER Stress]] — Unexpectedly upstream: NRF1a is an ER-membrane protein whose transcriptional competence depends on ER quality control, making the UPR a direct input into mitochondrial biogenesis.
- [[Mitochondrial Unfolded Protein Response]] — NRF1/HSF1 is a mammalian component of this stress response, distinct from the ATF4 branch and triggered by a combined mitochondrial ROS and cytosolic misfolded-protein signal.
- [[HIF-1α]] — The competing transcriptional programme during hypoxia; the NRF1/HIF-1 balance determines whether a cell respires or glycolyses.
- [[Inflammaging]] — Recently proposed as an NRF1-driven output, which reframes NRF1 from a longevity-promoting factor to a double-edged one.

## Linking Summary

- New links added: [[NRF2]], [[TFAM]], [[PGC-1α]], [[ERRalpha]], [[Mitochondrial Biogenesis]], [[Mitochondrial DNA]], [[Mitochondrial Function]], [[SIRT3]], [[ER Stress]], [[Mitochondrial Unfolded Protein Response]], [[HIF-1α]], [[Inflammaging]], [[Keap1]]
- Suggested notes to create: [[MCB Element]], [[Nuclear Respiratory Factor 2]], [[TFB1M]], [[TFB2M]], [[O-GlcNAcylation of NRF1]] — removed as already existing: Cyclin D1
- Strong connections to strengthen: [[NRF1]] ↔ [[NRF2]] (both notes should carry an explicit "do not confuse" callout — this is the most common error in this area), [[NRF1]] ↔ [[TFAM]] (the causal chain NRF1 → TFAM → mtDNA transcription is currently stated in neither direction)
