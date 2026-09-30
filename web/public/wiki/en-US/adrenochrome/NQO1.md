---
title: NQO1
description: NQO1 (NAD(P)H:quinone oxidoreductase 1) is a multi-functional antioxidant
  enzyme that is regulated by NRF2 and protects cells from oxidative stress by catalyzing
  the two-electron reduction of q...
created: 2026-07-04
updated: 2026-09-26
tags:
  - enzyme
  - pharmacogenetics
aliases:
  - DT-diaphorase
  - NAD(P)H dehydrogenase [quinone] 1
  - DTD
  - NQO1*2
  - NQO1 C609T
  - rs1800566
  - Pro187Ser

---

# NQO1

**NQO1 (NAD(P)H:quinone oxidoreductase 1)** is a multi-functional antioxidant enzyme that is regulated by [[NRF2]] and protects cells from oxidative stress by catalyzing the two-electron reduction of quinones to hydroquinones.

## Nomenclature: DT-diaphorase and DTD

The historical name **DT-diaphorase** derives from the enzyme's original characterization using the artificial electron acceptor 2,6-dichlorophenolindophenol (DCPIP, "D") with NADH or NADPH ("T", for triphosphopyridine nucleotide — the older term for NAD(P)H) as electron donor. It remains widely used in pharmacology literature and older redox-cycling papers, where "DT-diaphorase" and "NQO1" refer to the same flavoprotein; "DTD" is a further common abbreviation. The historical name is retained here as an alias rather than as a separate entity — it denotes the same protein, not a distinct one.

## Catalytic Mechanism

NQO1 catalyzes the obligatory two-electron reduction of quinones to hydroquinones using either [[NADH]] or [[NADPH]] as an electron donor. This mechanism bypasses the formation of reactive semiquinone intermediates, thereby preventing redox cycling and generation of [[Superoxide anion]]. The reaction proceeds via a compulsory-ordered bi-bi kinetic mechanism, with the pyridine nucleotide binding first and the hydroquinone product dissociating last. The enzyme contains a non-covalently bound [[FAD]] cofactor that mediates hydride transfer from NAD(P)H to the quinone substrate.

## Protective Role Against Quinone Toxicity

By reducing quinones directly to hydroquinones, NQO1 prevents one-electron reduction by enzymes such as [[NADPH Oxidase]] or [[NADPH-cytochrome P450 reductase]], which would generate semiquinone radicals that undergo redox cycling with molecular oxygen. This detoxification is particularly relevant for redox-active quinones including [[Menadione]], benzoquinones, and the catecholamine-derived [[o-quinone]] and adrenaline-quinone intermediates implicated in the [[Adrenochrome Pathway]].

## Nrf2 Regulation and Polymorphism

NQO1 expression is under the transcriptional control of [[NRF2]] via the [[Antioxidant Response Element]] (ARE). A common single-nucleotide polymorphism, NQO1*2 (C609T, Pro187Ser), results in complete loss of enzymatic activity due to protein instability and accelerated ubiquitin-dependent degradation. Homozygotes for this variant exhibit increased susceptibility to myeloid leukemia, urothelial tumors, and benzene-induced hematotoxicity. The NQO1*2 polymorphism also modulates sensitivity to quinone-based chemotherapeutics.

## The NQO1\*2 (C609T, rs1800566) Genotype — a Quinone Gate

The C609T substitution (Pro187Ser, rs1800566) is not a mild activity variant. It is a near-binary on/off switch, and it is one of the few genotypes in the vault that changes the **sign** of a quinone's effect rather than its magnitude.

| Genotype | Activity | Phenotype |
| --- | --- | --- |
| C/C | Full | Normal two-electron reduction to stable hydroquinones |
| C/T | ~3-fold reduction | Intermediate; NQO1 protein detectable but reduced |
| **T/T** | **2–4% of wild type** | Functionally **NQO1-null** — no detectable protein or activity |

Siegel et al. (*Pharmacogenetics* 1999) established the null phenotype directly in human tissue: in T/T individuals, NQO1 protein was undetectable in saliva and in bone marrow stromal cultures, and lung adenocarcinomas and normal lung epithelium from T/T donors showed no immunostaining. Heterozygotes were reliably intermediate.

> [!important] The gate is ancestry-skewed by a factor of four
> T/T is **2–5% in Caucasian and Black populations but ~20% in Asian populations** (Nebert 2002). The gate is rare in the populations where it was discovered and common in a population where it has not been characterised. Carriage of the 609T allele across ethnic groups ranges 0.22–0.45.

**Mechanism of the sign flip.** Whether a quinone is detoxified or made more toxic is decided by which enzyme reduces it first. NQO1 performs the obligatory **two-electron** reduction, giving a stable hydroquinone. Competing one-electron routes — NADPH cytochrome P450 reductase, cytochrome b5 reductase, carbonyl reductases, thioredoxin reductase — generate a **semiquinone radical** that cycles with O₂ and regenerates superoxide. An NQO1-null individual has *only* the one-electron routes available for [[Adrenochrome]] and other aminochromes, and is simultaneously less able to maintain the hydroquinone pool that buffers downstream chemistry.

This links directly to the vault's redox models. The [[SIRT3-SIRT4 Ratio]] note calls the mitochondrial superoxide output of the MRR protocol the critical variable, and [[MnSOD]] sets the conversion rate from superoxide to the diffusible H₂O₂ that transduces the signal. **NQO1 status sits upstream of both: it determines whether the quinone that generates the superoxide can be terminally reduced at all.** In an NQO1-null individual, the semiquinone pool is larger and the superoxide signal is not accompanied by the parallel hydroquinone buffering that normally accompanies it.

> [!warning] The MRR protocol does not currently stratify on this
> The [[_document_ - Mitohormetic Redox-Relay]] framework and the `adrenochrome_mb_ag/` task documents deliver redox signal via [[Methylene blue]] and [[Carbazochrome]] and terminate the pulse with [[Aminoguanidine]] as a carbonyl/AGE scavenger. **None of that dosing logic accounts for whether the subject can clear the quinone at all.** An NQO1-null individual is the genotype in which an adaptive pulse is most likely to convert to oxidative damage, and the argument runs through the vault's own mechanism rather than around it. Calibration is currently by tissue, never by genotype — see [[task_output_hardcoded_individual_biomarker_gates_26_Sep_2026]].

**Secondary consequence — quinone chemotherapy.** NQO1 bioactivation is the cytotoxic mechanism for mitomycin C and related antitumor quinones, so T/T carriers are the genotype in which that mechanism *fails* — an in-vitro biomarker of resistance that has repeatedly failed to predict clinical response in bladder tumour immunohistochemistry. The mirror-image risk is real in the same patients: two-electron reduction is also how these agents are detoxified in normal tissue, so the same null genotype that produces resistance can produce bystander toxicity.

**Cancer association.** C609T is a cancer-*susceptibility* modifier with meta-analytic support in gastrointestinal, urological and haematological malignancies, and a proposed mechanism of reduced p53 stabilisation and apoptosis. Like [[Val158Met]], the signal is a response modifier rather than a baseline risk genotype — T/T alone does not confer cancer, it modifies exposure.

> [!tip] Assay note
> NQO1 activity is measurable in tissue but genotype is the practical screen: a single rs1800566 assay, with ancestry-aware interpretation, replaces the need for the saliva or biopsy phenotyping that established the null phenotype in the first place. As with [[PON1]] and [[MnSOD]], the genotype→function relationship here is unusually tight, which is what makes it usable as a gate at all.

## Connection to Adrenochrome Detoxification

NQO1 represents a key enzymatic defense against adrenochrome accumulation. By reducing the [[Adrenochrome Semiquinone Radical]] and its oxidized precursors to less reactive hydroquinone forms, NQO1 limits aminochrome-induced oxidative damage. This protective axis is particularly important in tissues with high catecholamine turnover, such as the [[Adrenal gland]], [[Myocardium]], and central nervous system. Induction of NQO1 via Nrf2 activation represents a potential therapeutic strategy to mitigate adrenochrome-associated pathology.

## Documents

List of documents that mention this entity

  - [[_document_ - MRR - mitohormesis|mitohormesis]]
    - Verify Downstream Mitohormetic Transcriptional Activation: - Assay: In cell culture, measure nuclear translocation of NRF2 (via immunofluorescence or Western blot) and monitor the expression of downstream targets (HO-1, NQO1, PGC1-α) 4 to 24 hours post-trea...


## Connections

- [[NRF2]]: **NQO1 (NAD(P)H:quinone oxidoreductase 1)** is a multi-functional antioxidant enzyme that is regulated by NRF2 and pr...
- [[NADH]]: NQO1 catalyzes the obligatory two-electron reduction of quinones to hydroquinones using either NADH or [[NADPH]] as a...
- [[NADPH]]: NQO1 catalyzes the obligatory two-electron reduction of quinones to hydroquinones using either [[NADH]] or NADPH as a...
- [[Superoxide anion]]: This mechanism bypasses the formation of reactive semiquinone intermediates, thereby preventing redox cycling and gen...
- [[FAD]]: The enzyme contains a non-covalently bound FAD cofactor that mediates hydride transfer from NAD(P)H to the quinone su...
- [[NADPH Oxidase]]: By reducing quinones directly to hydroquinones, NQO1 prevents one-electron reduction by enzymes such as NAD(P)H Oxida...
- [[NADPH-cytochrome P450 reductase]]: One-electron reduction route to semiquinones that NQO1 bypasses by performing the obligatory two-electron reduction. (Original connection text truncated in-place on 2026-09-26; repaired.)
- [[Menadione]]: This detoxification is particularly relevant for redox-active quinones including Menadione, benzoquinones, and the ca...
- [[o-quinone]]: This detoxification is particularly relevant for redox-active quinones including [[Menadione]], benzoquinones, and th...
- [[Adrenochrome Pathway]]: This detoxification is particularly relevant for redox-active quinones including [[Menadione]], benzoquinones, and th...
- [[Antioxidant Response Element]]: NQO1 expression is under the transcriptional control of [[NRF2]] via the Antioxidant Response Element (ARE).
- [[Adrenochrome Semiquinone Radical]]: By reducing the Adrenochrome Semiquinone Radical and its oxidized precursors to less reactive hydroquinone forms, NQO...
- [[Adrenal gland]]: This protective axis is particularly important in tissues with high catecholamine turnover, such as the Adrenal gland...
- [[Myocardium]]: This protective axis is particularly important in tissues with high catecholamine turnover, such as the [[Adrenal gland]], [[Myocardium]], and central nervous system. (Original connection text truncated in-place on 2026-09-26; repaired.)
- rs1800566: The NQO1*2 C609T polymorphism — a near-binary activity gate (T/T functionally NQO1-null) that decides whether a quinone is two-electron reduced to a stable hydroquinone or one-electron reduced to a cycling semiquinone. Sets the subject's ability to clear the quinone that drives the MRR redox pulse.
- [[SIRT3-SIRT4 Ratio]]: NQO1 status sits upstream of the superoxide-to-H2O2 conversion the mitochondrial sirtuin balance sets; a larger semiquinone pool means more superoxide without the parallel hydroquinone buffering.
- [[MnSOD]]: Dismutates the superoxide generated by semiquinone cycling, at a rate set by the SIRT3/SIRT4 balance — so the NQO1 genotype and the sirtuin ratio act on the same signal from opposite ends.
- [[Adrenochrome]]: The vault's canonical aminochrome; in an NQO1-null individual only one-electron reduction pathways remain available for it.
- [[Methylene blue]] and [[Carbazochrome]]: Redox cyclers in the MRR protocol whose pulse termination assumes intact quinone-reduction capacity; the dosing logic is not stratified on NQO1 genotype.
- [[Aminoguanidine]]: The carbonyl/AGE scavenger terminating the MRR pulse — its value in an NQO1-null subject is a separate question from its value in a NQO1-competent one.
- P-benzoquinone (PQ): The paradigm compound detoxified by NQO1, and the textbook case of the two-electron route protecting against the one-electron route.
- [[Redox Cycling]]: The pathological process NQO1 prevents by making the obligatory two-electron reduction the first reduction a quinone receives; in an NQO1-null individual the semiquinone radical intermediate becomes unavoidable.
- [[Superoxide anion]]: The species generated when a quinone is reduced by one of the one-electron routes instead; superoxide is the direct link from quinone handling to the MnSOD/SIRT3 redox axis.
- [[Aminochromes]]: The catecholamine-derived quinone class (including [[Adrenochrome]]) whose handling NQO1 controls, making NQO1 genotype a gate on the vault's aminochrome pathway.

## Linking Summary
- New links added: [[NRF2]], [[Oxidative Stress]], [[Quinone]]
- Merged 2026-09-26: consolidated the duplicate `DT-diaphorase.md` stub into this note (it declared `NQO1` as one of its own aliases, which caused 25 inbound vault links to resolve to the stub instead of the canonical note). Its unique etymology and redox-cycling content is preserved in the Nomenclature and Connections sections.
- Added 2026-09-26 (C609T enrichment): rs1800566, [[SIRT3-SIRT4 Ratio]], [[MnSOD]], [[Adrenochrome]], [[Methylene blue]], [[Carbazochrome]], [[Aminoguanidine]], [[task_output_hardcoded_individual_biomarker_gates_26_Sep_2026]]
- Suggested new entity notes to create: [[Hepcidin]] (master negative regulator of iron absorption; the HAMP gene, and the node HFE exists to activate — currently plain text in [[HFE]])
- Strong connections to strengthen: [[NQO1]] ↔ [[NRF2]]; [[NQO1]] ↔ [[SIRT3-SIRT4 Ratio]]; [[NQO1]] ↔ [[Methylene blue]]
