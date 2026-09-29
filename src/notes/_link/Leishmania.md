---
title: Leishmania
description: Leishmania is a genus of kinetoplastid protozoan parasites of the order Trypanosomatida, transmitted by phlebotomine sandflies, whose intracellular amastigotes replicate within host macrophages.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [parasite, pathogen, innate-immunity, microbiology]
aliases: [Leishmania parasites, L. donovani, L. infantum, L. braziliensis, L. mexicana]
---

# Leishmania

**Leishmania** is a genus of flagellated kinetoplastid protozoa of the family
Trypanosomatidae, closely related to [[Trypanosoma]]. Around 20 species are
human pathogens. The disease they cause, [[Leishmaniasis]], ranges from
self-limiting cutaneous lesions to fatal visceral disease. Leishmania is
notable in this vault for two reasons: it is a textbook case of **intracellular
parasitism in the macrophage**, and it is one of the clearest demonstrations
of **parasite–host competition for L-arginine metabolism**, which sits directly
on the vault's [[Nitric Oxide]] and polyamine biology.

## Life cycle

The cycle alternates between an insect vector and a mammalian host.

1. **Sand fly acquisition.** A female phlebotomine sandfly takes a blood meal and
   ingests infected [[Macrophage|macrophages]]. Amastigotes transform in the
   midgut into elongated, flagellated **promastigotes** with a single kinetoplast,
   which multiply by longitudinal binary fission in the hindgut and then
   differentiate through procyclic to infective **metacyclic promastigotes** with a
   short free flagellum.
2. **Transmission.** The fly injects roughly 10²–10³ metacyclic promastigotes
   during a subsequent blood meal.
3. **Host entry.** Promastigotes are phagocytosed by [[Macrophage|macrophages]] and
   [[Dendritic Cell|dendritic cells]]. Crucially, the **complement receptor 1 (CR1)**
   is a major entry portal for metacyclic promastigotes, and complement activation
   in the host is actively exploited rather than merely a barrier.
4. **Amastigote stage.** Promastigotes transform to aflagellate, round
   **amastigotes** with two organelles (nucleus and kinetoplast — the "LD bodies"
   of microscopy) and replicate in phagolysosomes. The sand fly's
   proteophosphoglycan coat protects the parasite from digestive enzymes and is
   a major virulence factor — uncoated parasites are degraded in the midgut.
5. **Sand fly invasion.** Infected macrophages are taken up during the next blood
   meal, closing the cycle.

Transmission efficiency is strongly modulated by the parasite's
**lipophosphoglycan (LPG)** and other glycoconjugates, which also suppress host
complement and [[Interferon]] responses.

## Immune evasion and disease

Leishmania survives inside the phagolysosome — a compartment intended for
degradation — by preventing the oxidative burst and by subverting macrophage
activation signalling.

> [!info] Macrophage subversion
> - **[[Leukotriene]] neutralisation.** Induced [[LIPOXIN A4|Lipoxin A4]] and
>   other eicosanoids are produced at the expense of pro-inflammatory
>   leukotrienes, and the parasite also generates its own.
> - **Innate immune sensing suppression.** Leishmania impairs
>   [[Toll-like Receptor]]-mediated activation and the [[TLR1|TLR2]] pathway, and
>   releases extracellular vesicles that carry miRNAs which silence host
>   inflammatory mRNAs — including immunomodulatory miRNAs carried in vesicles
>   that downregulate [[NF-kB]]-regulated transcripts in the recipient cell.
> - **[[Complement]] resistance** via surface glycoconjugates and recruitment of
>   host complement regulators, allowing opsonisation without lysis.

> [!info] The L-arginine tug-of-war
> This is the mechanistically most important metabolic interaction. Activated
> macrophages have two mutually exclusive uses for L-arginine:
>
> - **Inducible nitric oxide synthase ([[iNOS|NOS2]])** converts L-arginine to
>   [[Nitric Oxide]], which is nitrosated to [[Reactive Nitrogen Species|reactive
>   nitrogen species]] and is trypanocidal at the concentrations achieved in
>   classically activated M1 macrophages.
> - **Arginase 1 (ARG1)**, induced in alternatively activated M2-like macrophages
>   and by the IL-4/IL-13/IL-10 program, converts L-arginine to ornithine and
>   polyamines and supports tissue repair and parasite growth.
>
> Leishmania controls this competition. *L. donovani* amastigotes use
> [[Arginase]]-like activity and induce host ARG1, and they upregulate host
> cationic amino acid transporters (notably CAT-2/SLC7A2). Experimentally,
> knocking out the parasite's own ornithine decarboxylase reduces macrophage
> parasite burden by roughly 80%, and the parasites are **polyamine
> auxotrophs** — mutations in the polyamine biosynthetic pathway abolish
> infectivity in the mammalian host, though they salvage host ornithine and
> spermidine. This is why eflornithine (DFMO), an ODC inhibitor, is a
> front-line agent in African trypanosomiasis and has been investigated in
> leishmaniasis.

Polyamines feed into **trypanothione** (N¹,N⁸-bis(glutathionyl)ornithine), a
unique Leishmania/thiol redox cofactor that replaces glutathione as the
principal reductant — making the parasite's antioxidant system a
drug target in its own right.

## Clinical relevance

Species tropism determines disease: *L. braziliensis* complex, *L. mexicana* and
*L. tropica* cause cutaneous leishmaniasis; *L. donovani* and *L. infantum*
cause visceral (kala-azar) disease with hepatosplenomegaly, pancytopenia,
hypergammaglobulinaemia and cachexia; *L. aethiopica* causes diffuse
cutaneous disease. Visceral disease is frequently fatal untreated.

Diagnosis is by microscopy of aspirates or splenic/bone marrow biopsy, culture,
or PCR. Treatment depends on species and site: **sodium stibogluconate** (the
traditional parenteral pentavalent antimonial, toxic, with cardiotoxicity and
hepatotoxicity) for visceral disease, **liposomal amphotericin B** in
combination with miltefosine or stibogluconate, and **miltefosine** or
**fluconazole/terbinafine** for selected cutaneous disease. Antimony resistance
is widespread in some endemic regions, a problem aggravated by the use of
antimony in tsetse fly control programmes, which selected for resistant
parasites.

> [!warning] Evidence caveat
> The exact division of labour between parasite and host arginase, and how much
> macrophage polarisation state is determined by the parasite versus by
> co-infections, nutrition and host genetics, remains genuinely debated. The
> M1/M2 polarisation framework itself is a simplification that has been
> substantially revised; much current work favours a continuum over two
> discrete states.

## Documents

- [[Leishmaniasis]] — the clinical disease note; this note supplies the
  organism-level biology (life cycle, tropism, immune evasion) that the
  disease note depends on.
- [[Reactive Nitrogen Species]] — Leishmania amastigotes face macrophage-derived
  RNS from iNOS, and the parasite's strategies to survive them are the
  metabolic-competition argument in this note's core section.

## Connections

- [[Leishmaniasis]] — One organism, one disease family; the split is
  species–tropism-driven rather than mechanistically distinct.
- [[Macrophage Polarization]] — The M1/M2 axis is the single most cited
  explanatory frame for Leishmania pathogenesis, and also the most
  contested.
- [[Nitric Oxide]] — iNOS-derived NO is the principal macrophage effector
  molecule against intracellular amastigotes, and the reason arginine
  depletion by ARG1 is a virulence strategy.
- [[Reactive Nitrogen Species]] — The peroxynitrite and S-nitrosation chemistry
  downstream of NO is the actual trypanocidal mechanism.
- [[Arginine]] — The substrate both arms of the M1/M2 switch compete for;
  this is the node the whole pathogen-host interaction pivots on.
- [[Innate Immunity]] — Leishmania is a canonical example of a pathogen that
  survives inside the innate immune cell meant to destroy it.
- [[Polyamine Metabolism]] — Parasite ornithine decarboxylase is experimentally
  validated as indispensable in the mammalian host, and polyamines feed
  trypanothione.
- [[Macrophage]] — The obligatory replicative niche.
- [[Interferon]] — Host IFN-γ and type I IFN are protective and the parasite
  actively suppresses them; IFN-γ release assays are the classic
  Leishmania-specific T cell readout.
- [[Complement]] — CR1-mediated entry and complement evasion are two
  opposed faces of the same interaction.
- [[Glutathione]] — Defines how trypanothione substitutes for it as the
  parasite's reductant.

## Linking Summary

- New links added: [[Trypanosoma]], [[Nitric Oxide]], [[Polyamine Metabolism]], [[Complement]], [[Glutathione]], [[Dendritic Cell]], [[NF-kB]], [[Interferon]], [[iNOS]], [[Arginase]], [[LIPOXIN A4]], [[TLR1]]
- Suggested notes to create: [[Trypanothione]], [[Polyamine Metabolism]], [[Eflornithine]], [[Sodium Stibogluconate]], [[Liposomal Amphotericin B]], [[Antimony]], [[Kinetoplast]], [[Promastigote]], [[Amastigote]], [[Metacyclic Promastigote]], [[Lipophosphoglycan]], [[Complement Receptor 1]], [[Leukotriene]] — removed as already existing: TLR2
- Strong connections to strengthen: [[Leishmania]] ↔ [[Arginine]], [[Leishmania]] ↔ [[Macrophage Polarization]], [[Leishmania]] ↔ [[Nitric Oxide]]
