---
title: XRCC1
description: 'XRCC1 is a catalytically inert nuclear scaffold protein that organises DNA single-strand break repair. It assembles PARP1, DNA polymerase beta, polynucleotide kinase, aprataxin and DNA ligase III into a functional repair complex at base excision and nucleotide excision lesions.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - dna-repair
  - base-excision-repair
  - scaffold
  - aging
aliases: [X-ray Repair Cross Complementing 1, X-ray repair cross-complementing protein 1, SCAR26 protein]

---

# XRCC1

**XRCC1** (UniProt P18887; human gene locus 19q13.31, 633 residues) is the founding member of a small family of **DNA single-strand break repair scaffolds**. It has no known intrinsic enzymatic activity. Its function is purely architectural: it brings together the sequential enzymes of [[Base Excision Repair|BER]] and [[Nucleotide Excision Repair|NER]] in the correct order and at the correct place, and it keeps repair from running away.

> [!info]
> **The core mechanism in one line.** [[PARP1]] senses a single-strand break, becomes auto-poly-ADP-ribosylated, and XRCC1 is recruited by binding that poly-ADP-ribose chain through its central domain. XRCC1 then hands the break to DNA polymerase beta for gap filling, to polynucleotide kinase for 5′-phosphate processing, and finally to DNA ligase III for sealing.

## Structure and domains

XRCC1 has **three globular domains joined by two flexible linkers** of roughly 150 and 120 residues (London, *DNA Repair* 2015; PMID 25795425). Each domain serves one step of the reaction:

| Region | Residues (approx.) | Binding partner | Role in repair |
| --- | --- | --- | --- |
| N-terminal domain (NTD) | 1–110 | DNA polymerase beta | β-sandwich core; also binds gapped/nicked ssDNA |
| Linker 1 | ~111–220 | REV1, PARP1 dimerisation, nuclear localisation sequence | nuclear import; error-prone translesion polymerase docking |
| Central domain | ~221–400 | poly-ADP-ribose chains | recruitment of XRCC1 to PARP1 at the lesion |
| BRCT domain II | ~471–536 | DNA ligase III, PNKP, aprataxin, APLF | late-step hand-off |
| C-terminal BRCT domain | 538–629 | DNA ligase III | ligation step |

Structures solved independently in 2008 by NMR (EBI) and crystallography captured a single **β-sandwich N-terminal domain** (PDB 1XNA, 1XNT, 1CDZ) that binds both the DNA gap and the polymerase beta complex.

> [!info]
> The two BRCT modules do **not** both engage ligase III. The **C-terminal BRCT domain (538–629)** is the one that binds DNA ligase III directly, anchoring the final ligation step; the internal BRCT-like region is the docking site for aprataxin, PNKP and APLF. This division of labour is why a point mutation in the C-terminal BRCT can abolish ligation while leaving gap filling intact.

## Regulatory roles

- **PARP1 brake.** XRCC1 does not merely recruit PARP1; it *negatively regulates* PARP1's ADP-ribosyltransferase activity, preventing runaway PARylation and delaying the cell past the point where the damage can be repaired. Loss of this brake produces PARP1 inhibitor-resistance phenotypes.
- **Redox sensing.** The N-terminal domain binds oxidized DNA, placing XRCC1 at the products of [[Reactive Oxygen Species|ROS]] attack as well as at alkylation and radiation damage.
- **Oligomerisation.** XRCC1 forms homodimers; phosphorylation at **Ser371** causes dimer dissociation, and CK2 phosphorylation promotes the aprataxin/APLF interactions used in end-joining contexts.
- **SUMOylation.** Sumoylated, which is not yet fully explained functionally.
- **Transcriptional tethering.** Interacts with PCNA, APEX1 (AP endonuclease 1), TDP1, CHEK2 and the DNA polymerase iota — the APEX1 interaction is induced by [[SIRT1]] and strengthens with acetylated APEX1, linking the deacetylase to base-excision repair.

## Physiological function and aging

Because XRCC1 sits at the convergence of almost all single-strand break chemistry, its loss is unusually well tolerated until an oxidising challenge arrives. Base excision repair handles thousands of oxidatively damaged bases per cell per day arising from normal [[Mitochondrial ROS|metabolic ROS]].

- **Aging.** In aged human adipose-derived stem cells, BER — but not double-strand break repair — is impaired, and XRCC1 is the factor that declines; overexpressing XRCC1 restores BER function (Zhang et al., *Aging Cell* 2020, PMID 31782607). The Gln399 polymorphism has been associated with greater susceptibility to tobacco- and age-related DNA damage.
- **Neuroprotection.** Partial loss of XRCC1 increases brain DNA damage and worsens recovery from ischemic stroke in mice (Ghosh et al., *Neurobiology of Aging* 2015, PMID 25971543) — oxidative stress during ischemia loads the repair system exactly when neurons can least afford to lose it.
- **Meiosis.** Expressed in germ cells, where XRCC1 is required for processing of meiotic intermediates.

## Disease and clinical relevance

XRCC1 is unusual among DNA repair proteins in that **both** directions of change have been linked to cancer, because it participates in two pathways with opposite mutagenic potential.

> [!warning]
> **Cisplatin/PARP inhibitor resistance.** XRCC1 is required for the repair of cisplatin-induced lesions. In several tumour models, XRCC1-deficient cells are **hypersensitive** to cisplatin, and loss of XRCC1 has been used as a biomarker to predict platinum response. This cuts against the intuition that "more repair = more resistance" and is the strongest argument for XRCC1 as a clinical stratifier.

- **Spinocerebellar ataxia, autosomal recessive, 26 (SCAR26).** Biallelic XRCC1 variants cause a progressive cerebellar ataxia with oculomotor apraxia, peripheral neuropathy, and distal weakness and areflexia (PMID 28002403) — one of the very few human Mendelian diseases directly caused by a single-strand break repair scaffold.
- **Overexpression in NSCLC.** High XRCC1 in non-small-cell lung carcinoma, and higher still in metastatic lymph nodes, is a recurrent prognostic finding.
- **Loss and tumour suppression.** Mice heterozygous for a truncating XRCC1 allele show suppressed tumour growth in colon, melanoma and breast carcinogenesis models. The explanation is that XRCC1 is one of six proteins required for **microhomology-mediated end joining**, an error-prone alternative end-joining pathway that produces deletions. Here XRCC1 *promotes* mutagenic repair, so reducing it reduces cancer progression — the opposite of the classical DNA repair paradigm.
- **Other partners documented in interaction datasets:** APLF, APTX, CHEK2, POLI, TDP1.

## Documents

- [[_document_ - Roles of SIRT3 in aging and aging-related diseases]] — places XRCC1 in SIRT3's nuclear DNA-repair / genome-stability network alongside PARP1 and Ku70/80 in NHEJ, and mtDNA damage repair.

## Connections

- [[PARP1]] — the obligate upstream sensor. XRCC1 is recruited by PARP1's poly-ADP-ribose chain and then feeds back to brake PARP1's catalytic activity, so PARP inhibitor resistance and XRCC1 status are mechanistically coupled.
- [[PARP2]] — the sibling PARP family member that also works with PARP1 and XRCC1 in efficient base excision repair; the two partially compensate for each other.
- [[SIRT1]] — deacetylates APEX1, strengthening the APEX1–XRCC1 interaction at abasic sites, which is one route by which a longevity factor touches single-strand break repair.
- [[Base Excision Repair]] — the pathway XRCC1 organises. Every oxidised or alkylated base becomes a single-strand break that must pass through an XRCC1-tethered polymerase beta step.
- [[Nucleotide Excision Repair]] — XRCC1 also functions in the NER gap-filling and ligation steps, so its substrate is not exclusively an abasic site.
- [[Ku70]] — the two systems meet at the same lesion classes: Ku70/80 holds the NHEJ machinery at double-strand breaks while XRCC1 channels single-strand intermediates, and SIRT3 sits upstream of both.
- [[Nucleotide Excision Repair]] and [[Ionizing Radiation]] — radiation is the canonical source of the single-strand break and abasic lesions that XRCC1 was first identified to complement.

## Linking Summary
- New links added: [[PARP1]], [[PARP2]], [[SIRT1]], [[Base Excision Repair]], [[Nucleotide Excision Repair]], [[Ku70]], [[Ionizing Radiation]], [[Mitochondrial ROS]]
- Suggested notes to create: [[DNA Polymerase Beta]], [[DNA Ligase III]], [[Aprataxin]], [[Polynucleotide Kinase]], [[APLF]], [[PCNA]], [[APEX1]], [[REV1]], [[Microhomology-Mediated End Joining]], [[XRCC1 Polymorphisms]]
- Strong connections to strengthen: [[XRCC1]] ↔ [[PARP1]] ↔ [[Base Excision Repair]]; [[XRCC1]] ↔ [[SIRT1]] ↔ [[APEX1]]