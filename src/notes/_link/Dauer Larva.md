---
title: Dauer Larva
description: An alternative, non-feeding, stress-resistant third-stage larval state of Caenorhabditis elegans entered when conditions are poor. Dauer entry is a rich and reversible state with a thickened cuticle, arrested development and altered metabolism, made possible by the skin and the ability to store and re-use internal energy.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [model-organism, developmental-stage, diapause, stress-response, longevity]
aliases: [Dauer, Dauer stage, Dauer diapause, Dauer larvae]
---

# Dauer Larva

The **dauer** ("sustainer" in German) is an alternative developmental fate of the third-stage larva (*L3*) of [[Caenorhabditis elegans]] — a free-living nematode. Rather than progressing to reproductive adulthood, animals facing crowding, food scarcity, or adverse conditions arrest development as dauer larvae, and re-enter the reproductive life cycle when conditions improve.

> [!warning] Not all dauer arrest is the same thing
> Two superficially similar arrest states are routinely conflated. **Dauer** is an *alternative fate* of L2/L3 larvae: a distinct, integrated, reversible program with a thickened cuticle, alae, sealed mouth and anus, and complete developmental arrest. **L3 arrest** (sometimes called "L3 arrest" or, when it looks dauer-like, "dauer-like arrest") is a *stress response* superimposed on normal development by heat, starvation or toxicants, involving DAF-16 and DAF-2 but not the full dauer morphology, and it can occur at any developmental stage. Any experiment claiming to manipulate dauer entry needs to distinguish them.

## Dauer biology

A dauer larva is a substantially rebuilt animal, not merely a dormant one:

- **Cuticle and sealing.** A thick, impermeable, multilayered cuticle is produced, the mouth and anus are sealed, and lateral alae form. The animal does not feed and does not defecate.
- **Metabolic reorganisation.** Fat stores are built up on entry (via the *fat-7* fatty acid synthase and DAF-16-dependent lipogenesis) and then selectively consumed during prolonged dauer, so dauer can last months to over a year on endogenous reserves. Daf-2 mutants that are long-lived adults also accumulate excess fat, a shared feature.
- **Stress resistance.** Dauers are markedly resistant to heat, oxidative stress, osmotic shock and starvation, and are resistant to the dauer-specific pathogen *Phasmidia 2*. This resistance is active, not passive.
- **Growth arrest.** Germline precursors are held in G0/quiescence; there is no somatic or reproductive development. Development resumes only if food and sufficient temperature persist, and a so-called "dauer exit" occurs.
- **Polyphenism rather than a fixed stage.** Some species use dauer as a dispersal infective stage. In *C. elegans* it is an alternative developmental route for the same animal, which is what makes it a tractable model of developmental plasticity and of anti-ageing interventions.

## Genetic control

Two signalling pathways, which function largely in parallel and converge, control dauer entry:

- **Insulin/IGF-1 signalling via DAF-2.** [[DAF-2]] encodes the single insulin/IGF-1 receptor. Reduced signalling (loss-of-function) favours dauer formation and extends adult life span; increased signalling (e.g. activated *age-1*/PI3K signalling) favours reproduction. Genetic mosaic analysis showed that a fraction of *daf-2*(-) cells can impose dauer programme and longevity on the whole animal, which is why reduced IIS is understood to act partly systemically, via a diffusible secondary signal. The key IIS output is the FOXO transcription factor [[DAF-16]]: IIS normally phosphorylates DAF-16 and excludes it from the nucleus, and *daf-16* mutants abolish both dauer formation and *daf-2*-mediated longevity. A 2018 eLife study (Hung et al.) proposed that DAF-16 acts as a "sifter" integrating multiple inputs, rather than as a simple on/off switch.
- **TGF-β/DAF-7 signalling.** [[DAF-7]] encodes a TGF-β-like peptide ligand that acts on the DAF-1/TGF-β receptor to promote dauer formation; *daf-7* mutations cause constitutive dauer formation. This is a worm-specific branch of TGF-β signalling, distinct from the vertebrate branch in this vault.

Downstream of DAF-16 lie heat-shock proteins, antioxidant genes and detoxification enzymes. A shared transcriptional "dauer signature" with long-lived *daf-2* mutants includes small heat-shock proteins and detoxification gene classes (cytochrome P450, short-chain dehydrogenase/reductase, UDP-glucuronosyltransferases, glutathione S-transferases), supporting the interpretation that *daf-2* mutant adults mis-express a dauer longevity programme. Because "dauer" is not a subtype of "worm" but a state, genes can be studied in a developmentally quiescent, metabolically distinct background — which is a major reason dauer work is central to longevity biology.

## Why dauer matters for the longevity field

The dauer programme is, mechanistically, an early version of several of this vault's core interests — stress resistance, autophagy, proteostasis, and adaptive metabolic re-wiring — and it has been used to test inter vivos whether stress exposure early in life produces lasting benefit ("antifragility" style arguments). Dauer-forming signals (e.g. DAF-16/HSF-1 up-regulation) overlap heavily with the targets of caloric restriction and of the spermidine/hypusine path. Sooner or later every anti-ageing claim in *C. elegans* is checked against whether it acts through DAF-16, HSF-1, or a TOR pathway — and dauer is the strongest available case of a naturally-evolved, whole-organism, reversible stress-resistant state.

## Documents

- [[DAF-7]] — the TGF-β-like ligand whose loss causes constitutive dauer; the dauer-specific branch of TGF-β signalling.
- [[DAF-2]] — the single insulin/IGF-1 receptor; reduced signalling drives both dauer entry and longevity.
- [[DAF-16]] — the FOXO transcription factor that is required for dauer formation and stress gene expression, and the IIS effector.
- [[Caenorhabditis elegans]] — the species in which dauer is defined.

## Connections

- [[Caenorhabditis elegans]] — dauer is a species-specific developmental alternative of this nematode, and is the reason the worm is such a good model: the same genome produces either a fast-breeding adult or a stress-resistant arrested larva, depending on signalling.
- [[DAF-2]] — reduced signalling at this single receptor forces dauer and doubles lifespan; it is the direct functional link between dauer biology and IIS, and the origin of the "reduced signalling extends life" principle.
- [[DAF-7]] — the parallel, largely independent TGF-β arm of dauer control; establishing that two independent inputs must both permit developmental arrest shaped the whole field's model of dauer.
- [[DAF-16]] — the required transcriptional effector of both the IIS and stress arms; DAF-16 is what connects dauer to longevity and stress resistance.
- [[Insulin/IGF-1 Signalling]] — the vertebrate framework that dauer genetics gave a concrete mechanism for; the IIS/FOXO axis is the direct analogue of the reduced-signalling longevity work in flies and mice.
- [[HSP70]] and [[HSP27]] — heat-shock and small heat-shock protein up-regulation is a core dauer and longevity output; dauer larvae survive heat shocks adult worms do not.
- [[Proteostasis]] and [[Autophagy]] — dauer re-wires protein turnover and stress response; the autophagy/proteostasis links are well described but not required for dauer entry, so dauer is a useful tool to *dissociate* stress resistance from autophagy.
- [[Spermidine]] — dauer uses endogenous polyamine-derived energy reserves; the polyamine–[[Hypusination]] axis intersects dauer metabolism, though the causal links are not yet worked out.
- [[Model Organisms]] — dauer is one of the specific, tractable experimental features of the worm as a model, alongside the short life span, transparent body, and hermaphrodite genetics.

## Linking Summary
- New links added: [[Caenorhabditis elegans]], [[DAF-2]], [[DAF-7]], [[DAF-16]], [[FOXO]], [[Insulin Receptor]], [[HSP70]], [[HSP27]], [[Hsp90]], [[Model Organisms]], [[Nematode]], [[Proteostasis]], [[Autophagy]], [[Spermidine]], [[Hypusination]], [[Lifespan]], [[Intermittent Fasting]], [[Hormesis]]
- Suggested notes to create: [[Insulin/IGF-1 Signalling]], [[DAF-12]], [[Dauer Formation]], [[Quiescence]], [[Lipolysis]], [[Heat Shock Factor 1]], [[Phasmidia]], [[Germline Quiescence]], [[Insulin/IGF-1 Signalling]], [[Hsp90]]
- Strong connections to strengthen: [[DAF-2]] ↔ [[FOXO]], [[Dauer Larva]] ↔ [[Autophagy]], [[DAF-16]] ↔ [[HSP70]]
