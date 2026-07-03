---
type: entity
category: chemical
aliases:
  - SIR2
  - silent information regulator 2
  - yeast Sir2
  - ScSir2
  - MAR1
database_ids:
  uniprot: P06700
relations:
  - predicate: suppresses
    target: "[[Ribosomal DNA Recombination]]"
    sources:
      - PMID:2647300
  - predicate: extends
    target: "[[Replicative Lifespan]]"
    sources:
      - PMID:10521401
  - predicate: regulates
    target: "[[Gene Silencing]]"
    sources:
      - PMID:3297920
  - predicate: homologue_of
    target: "[[notes/sirtuins/SIRT1]]"
    sources:
      - PMID:10381378
  - predicate: requires
    target: "[[NAD+]]"
    sources:
      - PMID:10811920
      - PMID:10693811
  - predicate: mediates
    target: "[[notes/_link/Caloric Restriction]]"
    sources:
      - PMID:15520384
created: 2026-07-02
updated: 2026-07-02
---

# Sir2 (yeast)

**Sir2** (Silent Information Regulator 2) from _Saccharomyces cerevisiae_ is the founding member of the **sirtuin family** of proteins. Originally discovered as **MAR1** (mating-type regulator 1) and subsequently renamed by Jasper Rine as part of the _SIR1–4_ gene set (silent information regulators), Sir2 established the paradigm for NAD⁺-dependent protein deacetylation and its link to longevity.

## Discovery History

- Originally identified as **MAR1** by Klar et al. (1979) through a spontaneous sterility-causing mutation that relieved silencing at the mating-type loci _HMR_ and _HML_.
- Renamed **SIR2** by Jasper Rine as one of four _SIR_ genes (_SIR1–4_).
- Gottlieb and Esposito (1989) demonstrated Sir2 is the **only SIR gene** required to suppress recombination between rDNA repeats on chromosome XII.
- By 1991, Sir2 was known to silence genes near **telomeres**.
- Braunstein et al. (1993) showed silent chromatin regions are associated with **hypoacetylated histones**, and Sir2 overexpression caused substantial histone deacetylation.
- 1995: Brachmann et al. and Derbyshire et al. discovered four additional yeast Sir2 homologues: **HST1–4** (homologues of SIR2), none essential but all involved in silencing and cell-cycle progression.

## Enzymatic Activity

Sir2 was initially characterised as an **ADP-ribosyl transferase** (Moazed et al., 1999), but was subsequently shown to be an **NAD⁺-dependent histone deacetylase** (Landry et al. and Imai et al., 2000):

- Acetylated Lys⁹ and Lys¹⁴ of **histone H3** and Lys¹⁶ of **histone H4** are _in vivo_ targets.
- The H364Y mutation abolishes Sir2 deacetylation and all silencing activities.
- A G270A mutant defective in ADP-ribosyl transferase activity but retaining 80% deacetylase activity proficiently silenced rDNA recombination → **deacetylation is the primary mechanism**.
- Deacetylation reaction produces the unique metabolite [[OAADPr]] (2′-_O_-acetyl-ADP-ribose) and nicotinamide, consuming one molecule of [[NAD+]].

## Key Biological Functions in Yeast

| Function                  | Details                                                                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **rDNA silencing**        | Suppresses recombination between the 100–200 rRNA gene copies on chromosome XII                                                    |
| **Telomeric silencing**   | Silences genes near telomeres via heterochromatin formation                                                                        |
| **Mating-type silencing** | Required for HML/HMR silencing                                                                                                     |
| **ERC suppression**       | Suppresses formation of extrachromosomal rDNA circles (ERCs), a major cause of yeast aging                                         |
| **Longevity**             | Extra copies of _SIR2_ extend replicative lifespan by ~30%; deletion shortens lifespan                                             |
| **DNA repair**            | Part of the Ku-associated apparatus for double-stranded DNA break repair; localises to DNA breaks in a checkpoint-dependent manner |

## Aging and Caloric Restriction

- Sinclair and Guarente (1997): ERCs (extrachromosomal rDNA circles) formed by homologous recombination between rDNA repeats accumulate exponentially during yeast aging.
- Kaeberlein et al. (1999): Extra _SIR2_ suppresses ERC formation and extends replicative lifespan up to **30%**; _SIR2_ deletion accelerates ERC formation and shortens lifespan.
- Under CR conditions (0.5% glucose vs. standard 2%), yeast replicative lifespan extends ~30%, and this effect **requires SIR2**.
- Additional yeast sirtuins **Hst1** and **Hst2** also participate in the CR response, suggesting the entire sirtuin family may regulate lifespan.
- _Drosophila_: Extra copies of _dSir2_ extend lifespan 18–29% in males and females; lifespan extension by dietary restriction also requires Sir2.
- _C. elegans_: _sir-2.1_ (chromosome duplication) extends lifespan up to 50%, requiring forkhead transcription factor DAF-16.

## Conservation and Family Expansion

Sir2 is the prototypical member of a large and ancient gene family now called **sirtuins**, present in all domains of life — bacteria, archaea, and eukaryotes. In mammals, seven homologues ([[notes/sirtuins/SIRT1]]–[[notes/sirtuins/SIRT7]]) have been identified, with [[notes/sirtuins/SIRT1]] being the closest mammalian orthologue (Class Ia). The enzymatic mechanism, structural core domain (275 amino acids), and NAD⁺ dependence are all conserved.

## Connections

- [[notes/sirtuins/SIRT1]] — closest mammalian homologue (Class Ia); conserved biological roles
- [[NAD+]] — obligatory co-substrate for all Sir2 family deacetylase activity
- [[OAADPr]] — unique metabolic by-product of Sir2-catalysed deacetylation
- [[notes/_link/Caloric Restriction]] — Sir2 is required for CR-mediated lifespan extension in yeast and flies
- [[Extrachromosomal rDNA Circles (ERCs)]] — Sir2 suppresses ERC formation, preventing accelerated aging
- [[Resveratrol]] — pharmacological activator of Sir2/SIRT1; extends lifespan in yeast and other organisms
- [[DAF-16]] — required for _sir-2.1_-dependent lifespan extension in _C. elegans_

## Linking Summary

- New links added: [[notes/sirtuins/SIRT1]], [[NAD+]], [[OAADPr]], [[notes/_link/Caloric Restriction]], [[Resveratrol]], [[DAF-16]]
- Suggested new entity notes to create: [[Extrachromosomal rDNA Circles (ERCs)]], [[DAF-16]], [[Replicative Lifespan (Yeast)]]
- Strong connections to strengthen: [[Sir2 (yeast)]] ↔ [[notes/sirtuins/SIRT1]], [[Sir2 (yeast)]] ↔ [[notes/_link/Caloric Restriction]]
