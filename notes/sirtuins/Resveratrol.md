---
type: entity
category: chemical
aliases:
  - Resveratrol
  - trans-resveratrol
  - 3
  - 5
  - 4'-trihydroxystilbene
  - STAC
  - sirtuin activating compound
database_ids:
  chebi: CHEBI:27881
  pubchem: 445154
relations:
  - predicate: activates
    target: "[[notes/sirtuins/SIRT1]]"
    sources:
      - PMID:12939617
  - predicate: extends_lifespan_in
    target: "[[Sir2 (yeast)]]"
    sources:
      - PMID:12939617
  - predicate: requires
    target: "[[Sir2 (yeast)]]"
    sources:
      - PMID:12939617
  - predicate: mimics
    target: "[[notes/_link/Caloric Restriction]]"
    sources:
      - PMID:15254550
  - predicate: improves
    target: "[[Insulin Sensitivity]]"
    sources:
      - PMID:17086191
  - predicate: activates
    target: "[[PGC-1α]]"
    sources:
      - PMID:17112576
created: 2026-07-02
updated: 2026-07-02
---

# Resveratrol

**Resveratrol** (3,5,4′-trihydroxystilbene) is a **polyphenolic stilbene** found naturally in the skin of grapes, red wine, and a variety of other plants. It is synthesised by plants in response to stress (biotic or abiotic). Resveratrol was identified as a **STAC (sirtuin activating compound)** — the prototypical pharmacological activator of [[notes/sirtuins/SIRT1]] — and has been shown to extend lifespan in diverse organisms and improve metabolic health in mammals.

## Discovery as a STAC

A systematic search for sirtuin activating compounds (STACs) that might extend lifespan was prompted by findings that extra copies of _SIR2_ extend lifespan in diverse organisms. Howitz et al. (2003) identified resveratrol as one of a series of STACs that activate mammalian [[notes/sirtuins/SIRT1]] _in vitro_ and extend lifespan in yeast.

Critically, resveratrol's lifespan-extending effects require the presence of the _SIR2_ gene — it has no apparent effect when _SIR2_ is deleted.

## Cross-Species Lifespan Extension

Resveratrol extends lifespan in diverse organisms:
| Organism | Reference |
|----------|-----------|
| _Saccharomyces cerevisiae_ (yeast) | Howitz et al., 2003 |
| _Caenorhabditis elegans_ (nematode) | Viswanathan et al., 2005 |
| _Drosophila melanogaster_ (fruit fly) | Wood et al., 2004 |
| _Nothobranchius furzeri_ (short-lived fish) | Valenzano et al., 2006 |

## Mammalian In Vivo Studies

Two pivotal studies demonstrated resveratrol's effects in mice:

### Baur et al. (2006) — High-calorie diet model

- Middle-aged mice on a **high-calorie diet** given resveratrol at **22.4 mg/kg/day**
- Physiological shift toward that of lean mice on standard diet:
  - Increased mitochondrial number
  - Lower blood glucose and insulin
  - Hepatic gene expression profile matching lean mice
  - Increased [[notes/sirtuins/SIRT1]] and [[PGC-1α]] activity

### Lagouge et al. (2006) — High-fat diet/obesity model

- Resveratrol administered at **400 mg/kg** (20× Baur dose) to mice on an obesity-inducing diet
- Results:
  - Leaner body mass vs. controls
  - Increased oxidative-type muscle fibres
  - Enhanced resistance to muscle fatigue
  - Lower blood glucose and insulin
  - Greater cold tolerance
  - Increased [[notes/sirtuins/SIRT1]] and [[PGC-1α]] activity

### Human Genetic Evidence

Three **single nucleotide polymorphisms (SNPs) in the human _SIRT1_ gene** were significantly associated with systemic energy expenditure in Finnish subjects, implicating the [[notes/sirtuins/SIRT1]]–resveratrol pathway in human metabolism.

## Molecular Mechanisms

Resveratrol's pharmacological effects in mammalian cells are SIRT1-dependent and include:

- **Neuroprotection** — inhibits NF-κB signalling; reduces β-amyloid toxicity
- **Tumour suppression** — context-dependent pro- and anti-apoptotic effects
- **Differentiation** — modulates muscle, adipocyte, and osteoblast differentiation
- **Anti-inflammation** — reduces NF-κB-mediated inflammatory responses
- **Metabolic reprogramming** — via SIRT1→PGC-1α axis; promotes mitochondrial biogenesis and oxidative phosphorylation

## Caloric Restriction Mimicry

Resveratrol is widely considered a **CR mimetic** — it recapitulates many of the physiological effects of [[notes/_link/Caloric Restriction]] without reducing food intake. The shared mechanism is proposed to be SIRT1 activation and downstream PGC-1α-mediated metabolic reprogramming.

> [!NOTE]
> Whether resveratrol's effects are _truly_ SIRT1-dependent in mammals remains debated (as noted by Michan & Sinclair 2007). Subsequent research has clarified that resveratrol's primary direct target may be AMPK rather than SIRT1 directly, though SIRT1 is activated as a downstream consequence.

## Connections

- [[notes/sirtuins/SIRT1]] — primary molecular target; resveratrol activates SIRT1 _in vitro_ and in cells
- [[Sir2 (yeast)]] — founding sirtuin; resveratrol extends yeast lifespan in a Sir2-dependent manner
- [[notes/_link/Caloric Restriction]] — resveratrol mimics CR physiological effects via SIRT1
- [[PGC-1α]] — key downstream effector activated by resveratrol-stimulated SIRT1
- [[NAD+]] — resveratrol activates SIRT1 in a NAD⁺-dependent context
- [[notes/sirtuins/SIRT3]] — may contribute to resveratrol's metabolic effects indirectly

## Linking Summary

- New links added: [[notes/sirtuins/SIRT1]], [[Sir2 (yeast)]], [[notes/_link/Caloric Restriction]], [[PGC-1α]], [[NAD+]], [[notes/sirtuins/SIRT3]]
- Suggested new entity notes to create: [[STACs (Sirtuin Activating Compounds)]], [[AMPK]], [[Polyphenol]]
- Strong connections to strengthen: [[Resveratrol]] ↔ [[notes/sirtuins/SIRT1]], [[Resveratrol]] ↔ [[notes/_link/Caloric Restriction]]
