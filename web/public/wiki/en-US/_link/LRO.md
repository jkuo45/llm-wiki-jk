---
title: LRO
description: Lysosome-related organelles, a family of secretory and storage
  compartments with a lysosome-like acidic lumen but specialised cargo, best
  characterised as the C. elegans gut granules and including human melanosomes
  and platelet dense granules.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - cell-type
  - organelle
  - autophagy
  - lysosome
aliases: [Lysosome-Related Organelle, Lysosome Related Organelles, Gut Granules, LROs]
---

# LRO

**Lysosome-related organelles** (LROs) are a family of compartments that share
with the lysosome an acidic, hydrolase-containing lumen and a membrane
topology, but are distinguished by their *cargo* and by the fact that they
are the product of a specialised biogenesis programme rather than of the
canonical late-endosome maturation pathway.

The defining structural feature is an internal limiting membrane. An LRO
therefore is a lysosome *inside* a membrane-bounded vesicle — the hallmark of
compartments whose cargo is delivered to a terminal, non-fusing destination
such as a melanosome or a secretory granule.

> [!info] Why the category exists
> LROs are not lysosomes that store something else; they are lysosomes
> diverted to a different job. Human melanocytes produce a melanosome, platelets
> produce dense granules and lysosomes, and cytotoxic T cells produce lytic
> granules — all from the same endosomal system, all requiring a shared
> biogenesis machinery. Naming the shared class makes the machinery
> legible. In [[C. elegans]] the same logic gives the term its single most
> useful concrete instance: the **gut granule**.

## C. elegans gut granules

In the nematode, gut granules are LROs of the intestinal cells, and they are
the animal's fat store. They are:

- **Formed during embryogenesis**, populated with lipid, and then largely
  inert in the fed adult.
- **Mobilised during [[Fasting]] and [[Starvation]]**, when the transcriptional
  programme driven by [[HLH-30]] (the *C. elegans* TFEB orthologue, working
  with [[MXL-3]]) induces lysosomal lipases — chiefly [[LIPL-1]] and
  [[LIPL-3]] — in the gut.
- **Essential for survival during fasting**: loss of the lipases, or of the
  granule itself, causes failure to mobilise stored lipid and produces a
  "retarded" larval arrest under starvation conditions rather than under
  abundant food.

This makes the gut granule a remarkably clean experimental system: fat storage
in an organelle whose mobilisation is under defined transcriptional control,
with a soluble reporter (the RAB-7-positive, PGP-2-marked granule) that can be
counted by microscopy. Autophagy and lipid-storage phenotypes in *C. elegans*
are almost always measured as changes in gut granule number, size, or
refractive index.

> [!warning] Translation caveat
> The mapping from *C. elegans* gut granules to human organelles is real but
> partial. Gut granules are a genuine LRO, but the human organelle most
> often compared to them — the [[Melanocyte|melanosome]] — differs in cargo
  (melanin versus lipid), in developmental origin, and in the fact that human
  adipocytes store lipid in cytosolic [[Lipid Droplet|lipid droplets]] rather
  than in an LRO. Gut granule phenotypes should not be assumed to predict human
  adipocyte storage biology.

## Biogenesis machinery

Human LRO biogenesis depends on a set of proteins distinct from canonical
lysosome formation, and their failure produces the diagnostic human diseases:

- **BLOC complex (BLOC-1, BLOC-2)** and **HPS1–HPS5** — required for melanosome
  maturation; *HPS* mutations cause [[Hermansky-Pudlak Syndrome|Hermansky-Pudlak
  syndrome]] (oculocutaneous albinism with bleeding diathesis and, in some
  forms, granulomatous colitis and pulmonary fibrosis).
- **AP-3 and [[VPS33A]]-containing trafficking modules** and **VPS45** — sort
  distinct LRO cargoes; deficiency impairs both melanosomes and lytic granules.
- **LYST** — a BEACH-domain protein regulating lysosome size and fusion;
  *LYST* mutations cause Chediak–Higashi syndrome with giant granules and
  immunodeficiency.
- **Griscelli syndrome type 2 (RAB27A)** — unpigmented leucocytes plus immune
  deficiency, because the same trafficking step delivers both melanosomes and
  lytic granules.
- **[[ABCD1]]** — peroxisomal membrane transporter; defective in
  X-linked adrenoleukodystrophy, which is a storage disease of myelin
  [[Lipid Peroxidation|lipid]] — a different compartment, but the same
  disease archetype.

> [!info] C. elegans factors
> In *C. elegans*, [[PGP-2]] — an ABC family transporter related to the human
  ABCG5/ABCG8 sterol transporters — is essential for gut granule biogenesis and
  is used as the standard membrane marker of the LRO compartment. Loss of
  *pgp-2* abolishes gut granules. IRF-family and similar upstream factors are
  also required for granule formation, but the *C. elegans* literature is
  sparser on their specific biochemical roles, and I have not been able to
  verify individual gene assignments confidently enough to assert them.

## LROs as a model for human lysosomal storage disease

LRO biogenesis is a comparatively tractable system for modelling
[[Lysosomal Storage Diseases]] because defects are (a) single-gene, (b)
visible by microscopy as enlarged or absent granules, and (c) amenable to
genetic suppression screens. This is the strategy behind much of the *C.
elegans* work on storage-disease genes, and it complements the
[[Neurodegeneration]]-focused human literature, where the relevant organelles
are not directly observable.

## Connections

- [[LIPL-1]] — The lysosomal triglyceride lipase whose lumen localisation is
  the LRO, and whose induction by HLH-30 during fasting is what mobilises
  gut-granule lipid. The link from an LRO to stored fat to a soluble lipase is
  the whole fasting-response architecture. The stub's inbound document link is
  retained in the Documents section.

- [[PGP-2]] — The ABC transporter whose presence defines LRO biogenesis in
  *C. elegans*, and the standard membrane marker used to count and size gut
  granules. Its loss abolishes the compartment. The stub's second inbound
  document link is retained.

- [[Lysosome]] — LROs share the acidic lumen and hydrolase repertoire of the
  lysosome but are not lysosomes; the LRO category exists precisely to mark
  the ones whose biogenesis, cargo, and fate differ.

- [[HLH-30]] — The *C. elegans* TFEB-family transcription factor that
  translocates to the nucleus on starvation and induces the lipases that
  digest LRO contents. This is the transcriptional switch for LRO lipid
  mobilisation.

- [[TFEB]] — The mammalian orthologue family. Conserved control of lysosomal
  and LRO programmes by TFEB/TFE3 is why the *C. elegans* fasting model
  transfers conceptually to mammalian autophagy and lipophagy.

- [[MXL-3]] — The *C. elegans* transcription factor that represses
  LIP-family lipases when nutrients are abundant and thereby prevents
  inappropriate LRO lipid mobilisation in the fed state.

- [[LIPL-3]] — The second gut lipase, acting with LIPL-1 to release fatty acids
  from LRO contents. The two are partly redundant; single mutants show milder
  phenotypes than double mutants.

- [[Lysosomal Lipolysis]] — The process LROs exist to serve. In *C. elegans*
  it is hydrolysis of stored triglyceride by LIP-family lipases in the LRO
  lumen; in mammals the equivalent occurs at [[Lipid Droplet|cytosolic lipid
  droplets]] by ATGL and HSL, which is the main reason gut granules do not
  translate directly.

- [[Lipophagy]] — Selective delivery of lipid to lysosomal degradation.
  LRO-resident lipases are the *C. elegans* implementation of lipophagy, and
  the LRO system was developed as a tractable surrogate for the mammalian
  pathway.

- [[Lipid Droplet]] — Functionally the mammalian counterpart of the gut granule
  as a lipid store, but structurally distinct: a cytosolic monolayer-bound
  droplet rather than a double-membrane acidic LRO. The contrast is the single
  most important fact about applying the *C. elegans* work to human fat storage.

- [[Lysosomal Acid Lipase]] — The human LAL/LIPA gene product is the functional
  orthologue of the LIP-family lipases that work inside *C. elegans* LROs, and
  its deficiency causes cholesteryl ester storage disease and Wolman disease.
  The vault's LIPL-1 note uses this orthology explicitly.

- [[ABCD1]] — A neighbouring illustration of compartment-specific lipid
  disease: a peroxisomal transporter whose loss causes a myelin lipid storage
  disease. Alongside the LRO storage diseases it shows that "lipid storage
  disorder" names a family of compartment-specific defects, not one pathway.

- [[Alzheimer's Disease]] and [[Microglia]] — Microglial lysosomes are
  developmentally derived from the yolk-sac macrophage lineage and are
  developmentally distinct from most tissue lysosomes; the granule
  size/lysosomal-storage phenotypes reported in neurodegeneration models
  frequently involve this LRO-adjacent compartment.

- [[Autophagy]] — LRO biogenesis and macroautophagy share sorting machinery
  at the late endosome. Studying LRO traffic is therefore a way to study the
  sorting decisions that autophagosome formation also depends on.

- [[C. elegans]] — The system in which LRO biology is most tractably studied,
  and the reason this note's organism is a nematode rather than a human.

## Documents

- [[LIPL-1]]
  - The stub's inbound document link, retained. Supplies the LRO-resident lipase
    that executes lipid mobilisation from LRO contents.
- [[PGP-2]]
  - The stub's inbound document link, retained. Supplies the LRO membrane marker
    and biogenesis requirement that define the compartment.

## Linking Summary

- New links added: [[Lysosome]], [[LIPL-3]], [[HLH-30]], [[TFEB]], [[MXL-3]],
  [[Fasting]], [[Starvation]], [[Lipid Droplet]], [[Lysosomal Lipolysis]],
  [[Lipophagy]], [[Lysosomal Acid Lipase]], [[ABCD1]], [[Melanocyte]],
  [[Microglia]], [[Autophagy]], [[Lysosome Biogenesis]], [[LAMP1]],
  [[Rab7]], [[C. elegans]], [[Neuronal Ceroid Lipofuscinosis]],
  [[Lysosomal Storage Diseases]], [[Neurodegeneration]]
- Suggested notes to create: [[Gut Granule]], [[Hermansky-Pudlak Syndrome]],
  [[Chediak-Higashi Syndrome]], [[Griscelli Syndrome]], [[LYST]],
  [[BLOC Complex]], [[Melanosome]], [[Platelet Dense Granule]],
  [[Lytic Granule]], [[VPS33A]], [[RAB27A]], [[Lipa Gene]],
  [[Cholesteryl Ester Storage Disease]], [[Wolman Disease]]
- Strong connections to strengthen: [[LRO]] ↔ [[PGP-2]], [[LRO]] ↔ [[LIPL-1]],
  [[LRO]] ↔ [[Lipid Droplet]], [[LRO]] ↔ [[HLH-30]],
  [[LRO]] ↔ [[Lysosome]], [[C. elegans]] ↔ [[Autophagy]]
