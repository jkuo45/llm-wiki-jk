---
title: IL-1RaCP
description: The interleukin-1 receptor accessory protein (IL-1RAcP, IL1RAP) is a shared co-receptor for IL-1R1, IL-33's receptor ST2, and IL-18R1, recruiting MyD88 to the receptor TIR domains to drive NF-κB and MAPK signaling.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags:
  - protein
  - receptor
  - inflammation
aliases: [IL-1RAcP, IL-1RaCP, IL1RAP, Interleukin-1 Receptor Accessory Protein, IL-1 receptor accessory protein, IL-1R3]
---

# IL-1RaCP

**IL-1RaCP** (interleukin-1 receptor accessory protein; gene *IL1RAP*, also called IL-1R3) is a ubiquitously expressed transmembrane co-receptor of the Toll-like receptor/IL-1 receptor superfamily. It has no signaling competence on its own — it is a signaling subunit, not a ligand-binding receptor. Its function is to partner with three different primary receptors (**IL-1R1**, **ST2/IL-1RL1** for [[Interleukin 33]], and **IL-18R1** for [[Interleukin 18]]) and, in each case, to provide the second TIR domain required to recruit [[MyD88]] and launch [[NF-κB]] and [[MAPK]] signaling.

> [!warning] Naming pitfall in the literature
> IL-1RAcP, IL-1R3, and IL1RAP are the same protein. Separately, **IL-1Ra** (IL-1 receptor antagonist, e.g. [[Anakinra]]) is the naturally occurring decoy antagonist of IL-1R1, and **IL-1R2** is a decoy receptor — neither of them is IL-1RaCP, despite the similar names. This note resolves only the accessory protein.

## Structure & Domains

- Human IL-1RaCP is a 570-amino-acid type I transmembrane glycoprotein expressed nearly ubiquitously. It contains three extracellular **Ig domains** (one of which, IgIII, binds IL-1R1), a single transmembrane helix, and a cytosolic **TIR (Toll/IL-1 receptor) domain** of the same fold as that of IL-1R1.
- The extracellular N-terminal Ig domain binds IL-1R1 with high affinity, stabilizing the 1:1:1 heterotrimeric receptor complex and increasing the effective ligand affinity of IL-1R1.
- IL-1RaCP is N-terminal myristoylated and palmitoylated, which targets it to lipid rafts and supports efficient signal propagation; it can also be shed as a soluble form.
- Alternative splice isoforms exist, notably a shorter neuronal form (IL-1RAcPb) with distinct expression and function (see pathology below).

## Mechanism of Action & Pathways

**Canonical assembly.** Ligand binding to IL-1R1 recruits IL-1RaCP, forming a 1:1:1 IL-1–IL-1R1–IL-1RaCP heterotrimer. The two TIR domains form a symmetric signaling platform that recruits [[MyD88]], which brings in IRAK4 and the IRAK1/IRAK2 family, activating [[TRAF6]], then the IKK complex and the MAP kinase arm (p38, JNK, ERK). The result is nuclear [[NF-κB]] and AP-1 activation and transcription of inflammatory genes including [[IL-1β]], [[IL-6]], and COX-2.

**Multi-receptor usage.** The same signaling subunit serves three receptors:
- **IL-1R1** — with [[IL-1α]] and [[IL-1β]].
- **ST2 (IL-1RL1)** — with [[Interleukin 33|IL-33]].
- **IL-18R1** — with IL-18, which is required for the inflammasome-dependent maturation step that yields active IL-18 (no vault note for either the receptor or the mature ligand; see Linking Summary).

This co-option is why IL-1RaCP sits upstream of [[Inflammaging]], of the [[NLRP3 Inflammasome]] (via IL-18R1 signaling), and of IL-33 biology — and it is precisely what makes IL-1RaCP a tempting, and difficult, drug target.

**Negative regulation.** The decoy receptor IL-1R2 competes for IL-1β without recruiting IL-1RaCP; the antagonist IL-1Ra blocks IL-1R1 without allowing IL-1RaCP recruitment; and soluble IL-1RaCP and shed ectodomains dampen signaling. [[Rilonacept]] exploits this logic directly by fusing soluble IL-1R1 to IL-1RaCP, intercepting ligands before they reach the receptor.

> [!important] Genetic evidence that the pathway requires the accessory protein
*IL1RAP* knockout mice are viable and fertile but cannot mount normal IL-1–driven responses, establishing that IL-1RaCP is not merely a scaffold but a required signaling component. That same knockout model is the tool used to show IL-1RaCP regulates tau hyperphosphorylation downstream of microglial IL-1β (PMID: 41353558).

## Physiological Function

- Required for IL-1-, IL-33-, and IL-18-driven inflammatory transcription across most cell types.
- IL-1R1–IL-1RaCP signaling in [[Microglia]] contributes to neuroinflammation, including IL-1β-driven tau hyperphosphorylation — a microglial, cell-autonomous effect (PMID: 41353558).
- Peripheral immune-cell IL-1RaCP signaling participates in [[Inflammaging]] and in the [[SASP|Senescence-Associated Secretory Phenotype]] IL-1β arm.
- IL-33/ST2–IL-1RaCP signaling in type 2 immune cells and in stromal cells drives type I hypersensitivity, [[Asthma]], and airway remodeling.

## Pathology & Clinical Relevance

- **Inflammatory disease.** IL-1RaCP-dependent IL-1 signaling drives [[Rheumatoid Arthritis]], [[Gout]], [[Inflammatory Bowel Disease]], and the cryopyrin-associated periodic syndromes. IL-1 blockade ([[Canakinumab]], [[Anakinra]], [[Rilonacept]]) works partly because IL-1RaCP transduces the very signals being blocked.
- **Neurodegenerative disease.** Genome-wide association studies have identified *IL1RAP* polymorphisms associated with increased [[Alzheimer's Disease]] risk. In an LPS-induced systemic inflammation mouse model, global and neuron-specific IL-1RaCP deficiency reduced hyperphosphorylated tau, while neuron-specific IL-1RaCP deficiency instead *increased* total tau — evidence that the subunit has context- and compartment-dependent effects rather than a uniformly protective or damaging role (PMID: 41353558).
- **Cardiovascular disease.** The CANTOS trial established that blocking IL-1β signaling reduces recurrent cardiovascular events in patients with prior myocardial infarction and elevated CRP, validating the pathway as an anti-inflammatory target beyond rheumatic disease (PMID: 42500746 was about LTP; CANTOS is the relevant cardiovascular trial).
- **Allergic disease and fibrosis.** IL-33/ST2–IL-1RaCP signaling is central to type 2 immunity and has been implicated in cardiac and pulmonary fibrosis.

> [!warning] Therapeutic targeting is hard by construction
> Because IL-1RaCP is a shared signaling subunit for three different cytokine receptors, blocking it broadly would simultaneously neutralize IL-1, IL-33, and IL-18 biology. This is a substantially harder target than a cytokine-specific antibody, and it is a plausible reason that IL-1-pathway drugs to date have all targeted the ligands or the primary receptors rather than the accessory protein. No IL-1RaCP-directed therapy is approved.

## Documents

- [[_document_ - SASP, senescent cells, grok|SASP, senescent cells, grok]] — discusses IL-1β/IL-1R1 signaling as a driver of SASP factor expression in senescent cells, which requires the IL-1RaCP signaling subunit.
- [[_document_ - Senecent cell activate neighboring macrophages|Senescent cells activate neighboring macrophages]] — covers macrophage activation by senescent cells, in which IL-1 signaling through the IL-1R1/IL-1RaCP axis mediates much of the paracrine inflammatory effect.

## Connections

- [[IL-1 Receptor]] — IL-1RaCP is the obligatory co-receptor for IL-1R1; the two notes describe the two halves of the functional receptor and are reciprocally linked.
- [[IL-1β]] — the most studied IL-1RaCP-dependent ligand in the vault; IL-1β signaling through IL-1R1/IL-1RaCP is the upstream driver of many of the [[SASP]] and inflammaging findings described here.
- [[IL-1α]] — also signals through the IL-1R1/IL-1RaCP complex and, like IL-1β, is an alarmin released by damaged cells.
- [[MyD88]] — the essential adaptor recruited to the paired TIR domains of IL-1R1 and IL-1RaCP; without it there is no IL-1 signaling output.
- [[Interleukin 33]] — signals through ST2, which requires IL-1RaCP as its co-receptor, making IL-1RaCP relevant to type 2 immunity and fibrosis.
- [[Anakinra]] — recombinant IL-1Ra that blocks IL-1R1 without recruiting IL-1RaCP, functionally removing this pathway.
- [[Rilonacept]] — a soluble fusion of IL-1R1 and IL-1RaCP ectodomains, which captures IL-1 ligands before they reach the membrane receptor complex.
- [[Inflammaging]] — IL-1RaCP-dependent signaling is one of the best-documented molecular routes by which chronic low-grade inflammation is sustained.
- [[Microglia]] — the source of IL-1β in neurodegeneration models; IL-1RaCP in microglia mediates IL-1β-driven tau hyperphosphorylation.
- [[Alzheimer's Disease]] — *IL1RAP* is an AD risk gene by GWAS, and IL-1RaCP deficiency alters tau phosphorylation in inflammation models.

## Linking Summary

- New links added: [[IL-1 Receptor]], [[IL-1β]], [[IL-1α]], [[Interleukin 33]], [[Interleukin 18]], [[MyD88]], [[TRAF6]], [[NF-κB]], [[MAPK]], [[Anakinra]], [[Rilonacept]], [[Canakinumab]], [[Microglia]], [[Inflammaging]], [[SASP]], [[Alzheimer's Disease]], [[Asthma]], [[Rheumatoid Arthritis]], [[Gout]], [[NLRP3 Inflammasome]]
- Suggested notes to create: [[ST2]], [[IL-18R1]], [[IL-1 Receptor Antagonist]] — removed as already existing: Anakinra, Canakinumab, IKK complex, TRAF6
- Strong connections to strengthen: [[IL-1 Receptor]] ↔ [[IL-1RaCP]] (reciprocal; the IL-1 Receptor note already links this target, and this is the note that makes the link resolve), [[MyD88]] ↔ [[IL-1RaCP]], [[IL-1β]] ↔ [[IL-1RaCP]] (the vault's most-referenced IL-1 edge is currently broken at the accessory-protein node).