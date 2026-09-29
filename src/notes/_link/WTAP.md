---
title: WTAP
description: Wilms tumor 1-associated protein (WTAP) is a nuclear regulatory
  subunit of the m6A mRNA methyltransferase complex that binds METTL3 and
  METTL14, localizes to nuclear speckles, and has m6A-independent roles in
  alternative splicing and sex determination.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - epitranscriptomics
  - rna-modification
  - alternative-splicing
aliases:
  - Wilms tumor 1-associated protein
  - Wtap
  - FLJ27456
  - CAMKI
---

# WTAP

**WTAP** (Wilms tumor 1-associated protein) is a ~341-amino-acid nuclear protein encoded by the *WTAP* gene on chromosome Xp13. It is best known as a **regulatory/scaffolding subunit of the m6A mRNA methyltransferase ("writer") complex**, but it also has established functions that do not require m6A deposition at all. The name comes from its original identification as a transcript that is co-expressed with the Wilms tumor suppressor gene *WT1*.

## Mechanism

> [!info] WTAP is not the catalyst
> [[m6A Modification|m6A]] methylation of adenosine is catalyzed by the SAM-dependent methyltransferase activity of [[METTL3]] (catalytic, structurally homologous to [[METTL14]]). **WTAP has no catalytic activity.** It binds the METTL3–METTL14 heterodimer through its N-terminal "OTT" (OTT-like) region and stabilizes the complex, raises its affinity for RNA, and positions it at methylatable sites. Loss of WTAP sharply reduces global m6A even though the catalytic subunits remain present.

Beyond the writer complex, WTAP is a **localization and recruitment factor**. It partitions into **nuclear speckles** — subnuclear bodies enriched in pre-mRNA splicing factors — and it is a genuine m6A *writer* on two non-mRNA substrates: **small nuclear RNAs** (snRNA) and **long non-coding RNAs** such as *MALAT1*, which remain m6A-modified even in METTL3-depleted cells. In mouse embryonic stem cells WTAP is required for self-renewal, and its knockout phenotype includes failure to upregulate the core pluripotency circuitry.

> [!warning] m6A-independent functions
> A body of work describes WTAP as an **alternative-splicing regulator** that controls exon inclusion independently of its methylation role, acting with splicing factors recruited to speckles. The degree to which these "m6A-independent" effects are cleanly separable from residual methylation in vivo is **still actively debated**; several reviews frame the relationship between WTAP's splicing function and its writer-complex role as unresolved. Treat claims of a fully methylation-independent mechanism as provisional.

## Physiological Function

- **Developmental**: WTAP knockout is embryonic lethal in mice; conditional deletion perturbs germ cell development and sex determination, and the protein is a documented candidate in 46,XY differences of sex development. (The specific clinical penetrance of human *WTAP* variants remains poorly characterized.)
- **Metabolic**: WTAP participates in adipogenesis and adipocyte differentiation programs, and in hepatic lipid metabolism.
- **Cancer**: WTAP is frequently overexpressed across tumor types. Its best-characterized mechanism is the **m6A-dependent degradation of *CSF1R* mRNA**: WTAP deposits m6A on *Csflr*, which targets the transcript for destruction by the reader protein YTHDF2, lowering CSF1R and *dampening* osteoclast differentiation. Myeloid-specific *Wtap* knockout in mice therefore worsens estrogen-deficient bone loss — so in this setting WTAP is protective, and "WTAP is oncogenic" is a statement about expression level, not a coherent mechanism.

> [!info] Divergent tumor reports
> Because WTAP sits upstream of both oncogene stabilization and tumor-suppressor destabilization depending on the transcript, the direction of its net effect is transcript- and context-specific. Reviews differ on whether WTAP is best framed as an oncoprotein or a tumor suppressor, and both readings are defensible from the primary literature. This vault does not take a side.

## Clinical Relevance

No approved therapy targets WTAP. Its value is as (a) a mechanistic node in m6A biology, (b) a biomarker candidate in [[Hepatocellular Carcinoma]], [[Bladder Cancer]], and [[Melanoma]], and (c) a proof that writer complexes require non-catalytic subunits — a principle being exploited in the design of m6A-directed degraders and PROTACs.

## Documents

- [[m6A Modification]]
  - The vault's m6A note already names WTAP as part of the writer triad ([[METTL3]]–[[METTL14]]–[[WTAP]]); this note supplies the regulatory and non-catalytic detail that note lacked.

## Connections

- [[m6A Modification]] — WTAP is the obligate regulatory subunit of the writer complex that installs the modification; without it, [[METTL3]]/[[METTL14]] retain catalytic capacity but the complex does not function efficiently on mRNA. This is the single most important relationship in the vault for this protein.
- [[METTL3]] — METTL3 is the catalytic subunit whose stability and RNA binding WTAP supports; depleting WTAP destabilizes the METTL3/14 heterodimer rather than simply removing a spectator.
- [[METTL14]] — METTL14 is the second, catalytically impaired partner of METTL3, and like METTL3 depends on WTAP for complex assembly and nuclear/nucleolar partitioning.
- [[ALKBH5]] — ALKBH5 is the nuclear eraser for m6A; WTAP controls the writing side of the same nuclear pool of substrate that ALKBH5 erases, so their balance sets steady-state nuclear m6A.
- [[FTO]] — FTO is the cytoplasmic eraser; together with ALKBH5 it defines the compartment-specific read/write/erase logic that WTAP helps establish on the nuclear side.
- [[Alternative Splicing]] — WTAP's speckle localization and reported exon-level regulatory activity are the basis of its proposed m6A-independent function; the strength of this link is the main open question in the field.
- [[Osteoporosis]] — WTAP-mediated m6A on *CSF1R* restrains osteoclastogenesis, giving a concrete, mechanistically clean physiological output of WTAP activity.
- [[Nuclear-speckles]] — WTAP's speckle residency is structurally central to its non-catalytic functions; this note is the vault's anchor for the writer-complex side of m6A biology, and nuclear speckle biology is the natural extension of the splicing discussion.

## Linking Summary

- New links added: [[m6A Modification]], [[METTL3]], [[METTL14]], [[ALKBH5]], [[FTO]], [[Alternative Splicing]], [[Osteoporosis]], [[Hepatocellular Carcinoma]], [[Bladder Cancer]], [[Melanoma]]
- Suggested notes to create: [[Nuclear-speckles]], [[Epitranscriptomics]], [[snRNA]], [[YTHDF2]], [[WT1]], [[Sex determination]], [[CSF1R]] — removed as already existing: MALAT1, Non-coding RNA
- Strong connections to strengthen: [[METTL3]] ↔ [[METTL14]] ↔ [[WTAP]] (writer complex); [[ALKBH5]] ↔ [[WTAP]] (nuclear write/erase balance)
