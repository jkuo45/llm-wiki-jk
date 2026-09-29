---
title: Histone H2AX
description: Histone H2AX is a variant of the core H2A histone that constitutes roughly 2-25% of total H2A depending on cell type, and whose phosphorylation at Ser139 (gamma-H2AX) is the earliest and most widely used molecular marker of DNA double-strand breaks.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - dna-damage
  - epigenetics
aliases: [H2AX, gamma-H2AX, γH2AX, H2A.X, H2A variant X, phosphorylated histone H2AX]
---

# Histone H2AX

H2AX is a **histone variant** — a protein that replaces a canonical histone in a subset of nucleosomes, rather than a modified form of it. It is defined by a conserved C-terminal motif, **SQ(E/D)Y**, whose serine is the phosphorylation site that gives the whole field its workhorse readout. In most mammalian cell types H2AX makes up between ~2% and ~25% of total H2A, with the fraction rising in cells that proliferate or that experience genotoxic stress; it is much higher (up to ~25–30%) in stem cells and in much of the brain.

> [!info] Mechanism: the DSB response
> 1. A DNA [[Double-Strand Break]] occurs. The MRN complex (MRE11-RAD50-NBS1) senses the break.
> 2. The ATM kinase is activated and, within seconds to minutes, **phosphorylates H2AX at Ser139**. The phosphorylated form is called **γ-H2AX**. ATR phosphorylates H2AX at Ser139 in the replication-stress and single-stranded-DNA contexts, via CHK1.
> 3. γ-H2AX is not a passive marker: it **spreads megabase-scale along the chromatin** flanking the break through iterative MDC1 → RNF8/RNF168 → ubiquitin → 53BP1 recruitment, forming visible **γ-H2AX foci**. Foci have been reported to extend up to ~50 kb on each side of the break. γ-H2AX also recruits MDC1, which is what makes the break itself visible to the rest of the repair machinery.
> 4. This platform recruits and concentrates the repair and signalling proteins — 53BP1 and [[BRCA1]] for end protection and homologous recombination choice, MDC1 as scaffold — and checkpoint factors including p53, [[CHK1]] and [[CHK2]].
> 5. After repair, phosphatases (PP2A, PP4, WIP1-linked feedback) dephosphorylate H2AX and the foci dissolve. **Persistent γ-H2AX foci therefore signal repair failure**, not ongoing damage — a distinction that matters for interpreting any dataset.

> [!info] Relationship to the other H2A variants
> H2AX is one of four H2A variants in mammals. **H2A.Z** ([[Histone H2A.Z]]) is the functionally distinct, structurally conserved paralog with roles in transcription and chromatin accessibility; it is *not* related to H2AX beyond family membership, and the two are frequently confused. MacroH2A is a large H2A variant that marks the inactive X chromosome and is itself X-linked-dosage dependent. The vault's H2AX note exists because the γH2AX note needs a parent protein.

## Measurement and its pitfalls

γ-H2AX is quantified by immunofluorescence (as foci number per nucleus), flow cytometry (as %γ-H2AX-positive cells), and immunohistochemistry (as a tissue stain). The measurement is sensitive enough to detect single DSBs, which is its main virtue.

> [!warning] Caveats
> - **γ-H2AX is not exclusively a DSB marker.** It is phosphorylated during replication stress, in collapsing replication forks, in mitosis (including on chromatin that is being segregated and on pre-cytotoxic T-cell receptors), and in apoptosis — where it forms a pan-nuclear pattern rather than discrete foci. The two signature patterns are distinguishable but require care.
> - **Basal and sub-DSB γ-H2AX exists.** Low-level γ-H2AX is reported in apparently undamaged cells, in proliferating populations, and in senescent cells; several reviews and vendor protocols exist specifically on the correct use of the assay.
> - **Foci ≠ breaks.** Apoptotic nuclear fragmentation generates large numbers of γ-H2AX-positive fragments; the standard fix is to pair γ-H2AX with a marker of cell death.
> - In **senescence** γ-H2AX has a distinctive role: persistent DDR from replication stress or telomere dysfunction is a major route to establishing the senescence-associated heterochromatin foci, and residual γ-H2AX foci are a recognised marker of cells that escaped senescence.

## Ageing context

> [!info] Why the vault cares
> DNA damage accumulation is one of the [[Hallmarks of Aging|hallmarks of aging]], and γ-H2AX is how that accumulation is measured. Two specific threads connect it to the vault's other notes:
> - **Telomere attrition** is sensed as a persistent DDR; telomere dysfunction produces persistent γ-H2AX at telomeric sites (TIFs), which is a direct molecular readout of the telomere-attribution hallmark.
> - **Senescence** is established in part by DDR signalling, and γ-H2AX appears in the SAHF literature as both a driver (DDR → p53 → p21 → arrest) and a residue (SAHF forming at the same sites).
> - The **atypical, non-telomeric persistent DDR** model of ageing — in which unrepaired DSBs accumulate at random genomic sites — is the framework in which a small persistent γ-H2AX-positive cell fraction is a read-out of the damage load of a whole tissue.

## Documents
- [[γ-H2AX]]
  - The vault's inbound link and the phosphorylated readout of this protein. That note needs a parent: the antibody, the assay and the community's usage conventions live there, and the chromatin biology and caveats live here.

## Connections

- [[γ-H2AX]] — the vault's measurement-level note for the phosphorylated form; this note supplies the parent protein and the chromatin biology.
- [[Double-Strand Break]] and [[DNA Damage Response]] — the event H2AX reports on and the pathway it initiates. Ionizing radiation, [[Radiotherapy|radiotherapy]], topoisomerase inhibitors and replication stress are the main inducers.
- [[ATM]] and [[ATR]] — the two upstream kinases; ATM is the dominant DSB kinase, ATR handles replication-associated ssDNA via CHK1, and both converge on Ser139.
- MRE11-RAD50-NBS1 (MRN) and [[NBS1]] — the upstream break sensor complex; the [[53BP1]]–[[BRCA1]] pathway choice downstream of γ-H2AX is the single best-worked example of how the marker determines repair outcome rather than just reporting it.
- [[DNA Repair]] and [[Homologous Recombination]] and [[Non-homologous End Joining]] — the two repair routes whose balance is set at the γ-H2AX-marked chromatin.
- [[Histone]] and [[Nucleosome]] and [[Chromatin]] — H2AX is a nucleosomal protein, so its phosphorylation is also a chromatin mark; the "histone mark versus signalling scaffold" dual role is a recurring theme in this vault's epigenetics notes.
- [[Cellular Senescence]] and [[Senescence-Associated Heterochromatin Foci|SAHF]] — persistent DDR is an establishment route for senescence, and γ-H2AX foci mark the DDR-active subdomain of the nuclear speckle.
- [[Telomere]] and [[Telomere Attrition]] — telomere dysfunction signalling is read out as telomeric γ-H2AX foci, and is one of the cleanest examples of a telomere-level lesion being visible in a bulk molecular assay.
- [[Radiotherapy]] and [[Ionizing Radiation]] — the clinical context in which γ-H2AX is measured on biopsies to assess DNA repair capacity and predict radiosensitivity.
- [[p53]] — γ-H2AX → MDC1 → ATM/p53 checkpoint signalling; loss of p53 in checkpoint-defective tumours lets cells carry γ-H2AX-positive lesions without arrest.

## Linking Summary
- New links added: [[Double-Strand Break]], [[DNA Damage Response]], [[ATM]], [[ATR]], [[53BP1]], [[BRCA1]], [[DNA Repair]], [[Homologous Recombination]], [[Non-homologous End Joining]], [[Histone]], [[Nucleosome]], [[Chromatin]], [[Cellular Senescence]], [[Senescence-Associated Heterochromatin Foci]], [[Telomere]], [[Telomere Attrition]], [[Radiotherapy]], [[Ionizing Radiation]], [[p53]], [[CHK1]], [[CHK2]], [[NBS1]], [[Hallmarks of Aging]], [[Histone H2A.Z]]
- Suggested notes to create: [[MRN Complex]], [[Replication Stress]], [[γH2AX Foci]], [[TIF (Telomeric DDR Focus)]], [[MacroH2A]], [[RNF168]], [[WIP1]], [[DNA-PKcs]], [[H2AX Knockout]]
- Strong connections to strengthen: [[Histone H2AX]] ↔ [[γ-H2AX]], [[Histone H2AX]] ↔ [[ATM]], [[Histone H2AX]] ↔ [[Cellular Senescence]], [[Histone H2AX]] ↔ [[Double-Strand Break]]
