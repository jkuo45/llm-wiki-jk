---
title: B-cell Immunoglobulin-derived Gene 1
description: A disambiguation entry for the historical gene name BIG1, which in the vault resolves to GBF1, the Golgi-resident Sec7-domain Arf1 guanine nucleotide exchange factor that drives COPI coat recruitment and secretory-pathway trafficking. The full name "B-cell immunoglobulin-derived gene 1" is not a current HGNC or NCBI Gene symbol.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [gene, protein, protein-trafficking]
aliases: [BIG1, GBF1, BFA-inhibited GEF 1, Brefeldin A-inhibited guanine nucleotide-exchange protein 1, KIAA0248]
---

# B-cell Immunoglobulin-derived Gene 1

> [!warning] Naming caveat
> "B-cell immunoglobulin-derived gene 1" is **not** a current [[HGNC]] symbol and
> returns no hits in either the HGNC or NCBI Gene databases. It is a historical
> or vendor-database expansion of the symbol **BIG1**. BIG1 is itself ambiguous in
> the primary literature — it is used both for the Arf GEF now called [[GBF1]] and,
> in older nomenclature, for the casein kinase II regulatory beta subunit. This note
> follows the vault's own usage in
> [[_document_ - Application of the Yamanaka Transcription Factors Oct4, Sox2, Klf4, and c-Myc from the Laboratory to the Clinic|the Yamanaka factors review]],
> which expands BIG1 as "brefeldin A-inhibited guanine nucleotide-exchange
> protein 1" — i.e. **GBF1**.

## Overview

BIG1 (as used here) is [[GBF1]], human gene 8729 at 10q24.32, encoding a
~185 kDa Golgi-localised member of the [[ADP-Ribosylation Factor|Arf]]
guanine-nucleotide exchange factor family. It is the dominant GEF acting on
[[ADP-Ribosylation Factor|Arf1]] at the cis-Golgi and endoplasmic-reticulum
Golgi intermediate compartment (ERGIC), and it is required to assemble the
Golgi apparatus in the first place.

The protein is named for its defining experimental property: cells selected for
resistance to the fungal metabolite [[Brefeldin A]] — which otherwise releases
[[ADP-Ribosylation Factor|Arf-GDP]] from membranes and collapses Golgi
trafficking — remain functional in the presence of the drug because the GBF1
protein carries a brefeldin-A-resistant Sec7 domain.

> [!info] Mechanism
> GBF1 catalysis is the committed step in membrane-coat formation. Activated
> [[Arf1|Arf1-GTP]] recruits the [[COPI]] coat to the
> ERGIC and cis-Golgi, driving anterograde ER-to-Golgi transport and retrograde
> retrieval from the ERGIC/cis-Golgi back to the endoplasmic reticulum. GBF1 also
> loads [[Arf4]] and [[Arf5]] to recruit GGA adaptors and AP-1 at the
> trans-Golgi network for clathrin-dependent sorting back to the endosome, and it
> is required for normal trafficking of prosaposin (PSAP) processing and Golgi
> assembly (PMID 12047556, 12808027, 15616190, 17666033, 23386609).

## Structure & domains

GBF1 is a large multi-domain protein (~1859 aa) built around a catalytic
**Sec7** domain flanked by a **N-terminal GOLGB1/Astrin** domain, an
**Astra/Unc-13** domain, a **GK** domain, an **LNS16** domain and a
C-terminal PH domain. The Sec7 domain is the GEF catalytic module; the
GOLGB1 domain binds the trans-Golgi ribbon and the GOLGA7 golgin, which is
what tethers the protein to the Golgi in the first place.

## Physiological function

- **Golgi homeostasis.** GBF1 is required for Golgi assembly; loss of GBF1
  function causes a dispersing Golgi and a collapse of ER export.
- **Golgi disassembly during mitosis and stress.** Phosphorylation of GBF1 by
  [[AMP-activated Protein Kinase|AMPK]] activates its GEF activity and drives
  Golgi fragmentation; the phosphorylated form is then recruited to
  autophagosomes, where GBF1-generated [[Arf1|Arf1-GTP]] drives autophagosome
  maturation and lysosome fusion (PMID 18063581, 23418352). This places GBF1
  directly on the [[Autophagy]] machinery.
- **Mitochondrial morphology.** GBF1 has a reported role in maintaining
  mitochondrial network dynamics, independent of its Golgi pool (PMID 25190516).
- **Neutrophil signalling.** In neutrophils, GPCR stimulation generates
  phosphatidylinositol phosphates that recruit GBF1 to the leading edge, where it
  activates Arf1 and brings in GIT2 and the [[NADPH Oxidase]] complex to
  coordinate chemotaxis and respiratory burst (PMID 22573891).

## Pathology & clinical relevance

> [!warning] Clinical caveat
> The [[Charcot-Marie-Tooth Disease|CMT2GG]] link is the best-established human
> disease association (PMID 32937143), and it is a rare autosomal dominant
> axonal neuropathy. It is not a common indication for targeting GBF1; the
> pharmacological interest in GBF1 as an antiviral host factor (picornavirus
> replication, [[Severe Acute Respiratory Syndrome Coronavirus 2|SARS-CoV-2]])
> and as an autophagy regulator is still preclinical.

- **CMT2GG (MIM 606483).** Dominant missense variants in GBF1 cause a
  slowly progressive distal axonal neuropathy with weakness and atrophy,
  beginning in the peroneal muscles and later involving the hands. Nerve
  conduction velocities are normal or only mildly reduced, consistent with an
  axonal rather than demyelinating process.
- **Oncology.** GBF1 is recurrently amplified and overexpressed in several
  tumours, including gastric and colorectal cancer, and it feeds the same
  receptor-trafficking axis that sustains [[Growth Factor Receptor]] signalling
  — the reason the vault's [[BIG1]] note places it in [[Cell Signaling]] and
  [[Membrane Trafficking]] rather than in immunology.
- **Viral host factor.** GBF1 is required for the replication of several
  picornaviruses, and genome-wide screens identify GBF1 as a host dependency
  factor for [[Severe Acute Respiratory Syndrome Coronavirus 2|SARS-CoV-2]].

## Documents

- [[BIG1]]
  - The vault's existing BIG1 note expands the acronym as
    "brefeldin A-inhibited guanine nucleotide-exchange protein 1" and treats
    BIG1 as a [[Membrane Trafficking]] regulator — that expansion is GBF1, and
    this note is its full entity record.
- [[_document_ - Application of the Yamanaka Transcription Factors Oct4, Sox2, Klf4, and c-Myc from the Laboratory to the Clinic|Application of the Yamanaka Transcription Factors Oct4, Sox2, Klf4, and c-Myc from the Laboratory to the Clinic]]
  - Reports that [[Klf4]] binds the BIG1 promoter in induced neural stem cells,
    and that BIG1 knockdown reduces [[TNF-alpha|TNF-α]],
    IL-1β and IL-6 and impairs iNSC migration. This is a single preclinical
    report; the mechanism has not been independently replicated.

## Connections

- [[BIG1]] — The two notes are the same protein under two naming schemes;
  this note is the disambiguation and full record, BIG1 is the vault-facing
  short name. The BIG1 note's claim of a link to
  [[Alzheimer's Disease]] is **not** supported by anything I could verify and
  should be softened.
- [[Membrane Trafficking]] — GBF1 is the committed step for COPI coat
  recruitment at the ERGIC and cis-Golgi, so it sits upstream of essentially
  all anterograde and retrograde secretory traffic.
- [[Vesicle Transport]] — GBF1's Arf1-GTP output is what recruits the
  [[COPI]] and clathrin adaptor machinery onto the membranes it traffics.
- [[Endocytosis]] — GGA and AP-1 recruitment at the trans-Golgi network,
  driven in part by GBF1's Arf4/Arf5 activity, feeds the mannose-6-phosphate
  and transferrin-receptor sorting routes into the endosome.
- [[Autophagy]] — AMPK phosphorylation of GBF1 couples nutrient and energy
  stress to autophagosome maturation, making GBF1 a trafficking arm of
  autophagic flux rather than a core ATG component.
- [[NADPH Oxidase]] — GBF1 recruits the NADPH oxidase complex via GIT2 at
  the neutrophil leading edge, linking Arf1 activity to the respiratory burst.
- [[Mitochondria]] — GBF1 has a second, non-Golgi pool that maintains
  mitochondrial network morphology, which is the most direct connection between
  its trafficking function and the vault's mitohormesis modules.
- [[Cell Signaling]] — By controlling how many growth factor receptors reach
  the plasma membrane, GBF1 sets the gain on a wide range of signalling
  cascades, which is why it appears in the [[Cell Signaling]] hub note.
- [[Klf4]] — [[Klf4]] is reported to bind the BIG1/GBF1 promoter in induced
  neural stem cells, linking GBF1 to [[Cellular Reprogramming]].
- [[Induced Neural Stem Cells]] — The iNSC migration and neuroinflammation
  phenotype attributed to BIG1 knockdown was measured in this system.

## Linking Summary

- New links added: [[GBF1]], [[ADP-Ribosylation Factor]], [[COPI]], [[Arf1]],
  [[Arf4]], [[Arf5]], [[Brefeldin A]], [[AMP-activated Protein Kinase]],
  [[Charcot-Marie-Tooth Disease]], [[NADPH Oxidase]], [[Cellular Reprogramming]],
  [[HGNC]], [[Severe Acute Respiratory Syndrome Coronavirus 2]]
- Suggested notes to create: [[GBF1]] (preferred canonical note, one level up
  from this disambiguation stub), [[COPI]], [[Arf1]], [[Golgi Apparatus]],
  [[Endoplasmic Reticulum]], [[Brefeldin A]], [[Charcot-Marie-Tooth Disease]],
  [[AMP-activated Protein Kinase]], [[ERGIC]]
- Strong connections to strengthen: [[GBF1]] ↔ [[Autophagy]],
  [[GBF1]] ↔ [[Membrane Trafficking]], [[GBF1]] ↔ [[Mitochondria]],
  [[BIG1]] ↔ [[Cell Signaling]]
