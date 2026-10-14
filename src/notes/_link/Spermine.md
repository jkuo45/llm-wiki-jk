---
title: Spermine
description: The highest polyamine in the putrescine-spermidine-spermine pathway, a tetravalent polycation that binds nucleic acids, scavenges free radicals, and regulates chromatin, translation and innate immune sensing.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - chemical-compound
  - metabolism
  - cellular-molecule
  - redox
aliases: [spermidine-amine, spermidine 3-aminopropyl donor]
---

# Spermine

**Spermine** is the largest and most abundant of the mammalian **polyamines**, a tetravalent polycation (positively charged at physiological pH) found in all eukaryotic cells and, at low concentration, in many bacteria. It is the terminal product of the putrescine → [[Spermidine]] → spermine pathway and is the polyamine most tightly associated with nucleic acids.

## Biosynthesis and catabolism

Ornithine decarboxylase converts [[ornithine]] to putrescine — the rate-limiting step of the whole pathway, and itself a degron-bearing enzyme, so ODC half-life is one of the ways cells tune polyamine pools. Putrescine is aminopropylated to spermidine by spermidine synthase (SAMDC-derived aminopropyl donor), and spermidine is aminopropylated again by **spermine synthase** (SMS), whose N-terminal domain is structurally similar to S-adenosylmethionine decarboxylase and which functions as an obligate dimer.

Catabolism runs in the opposite direction and is equally important for signalling: spermine is oxidised by spermine oxidase (SMO, also called PAO) to 3,4-dehydrospermidine with release of H₂O₂ and 3-aminopropanal; spermine is N¹-acetylated by spermidine/spermine N¹-acetyltransferase 1 ([[SAT1]], the rate-limiting catabolic enzyme) to N¹-acetylspermine, then converted to putrescine; and spermidine itself can be N¹-acetylated and excreted.

> [!info] Human disease link
> Loss of spermine synthase (SMS mutations, X-linked) causes **Snyder-Robinson syndrome**: an X-linked recessive condition with intellectual disability, hypotonia, skeletal defects, movement disorders, and (in the mouse *gyro* deletion model that lacks spermine entirely) a marked reduction in body size, deafness, sterility and sudden death. This is the clearest evidence that spermine is not merely a growth stimulant but a molecule with specific, non-redundant physiological requirements.

## Molecular functions

**Nucleic acid binding.** Spermine binds backbone phosphate and the grooves of DNA and RNA, condensing chromatin, stabilising helical structure, and — in viruses where spermine is abundant — contributing directly to capsid stability. Spermine is present in the nucleus, cytoplasm and mitochondria.

**Free radical scavenging.** Spermine acts as an intracellular free radical scavenger, protecting DNA from radical attack. This is a direct biochemical antioxidant function, distinct from the enzyme-based antioxidant systems.

**DNA conformation and innate immunity.** Spermine and spermidine drive the B-to-Z transition of duplex DNA, and Z-DNA is bound with lower affinity by the cytosolic dsDNA sensor [[cGAS]]. Higher polyamine levels therefore suppress cGAS–STING activation; [[SAT1]]-mediated catabolism, which lowers spermine and spermidine, enhances cGAS activity and restrains HSV-1 replication in vivo (Zhao et al. 2023). This is a clean example of a small-molecule metabolite as a direct control point for innate immune tone, and it is the sort of shape-the-immune-setpoint mechanism the vault's cGAS-STING cluster cares about.

**Transcription and chromatin.** Spermine influences promoter activity, and its effects on gene expression are partly via chromatin compaction and partly via post-translational modification; spermidine in particular has documented effects on [[Epigenetics|epigenetic]] marks and on [[Autophagy]] induction via acetylation of [[EP300]].

**Other reported roles.** Spermine is required for mitochondrial function and membrane potential, and it is implicated in intestinal barrier integrity, in nitric oxide signalling (as the polyamine precursor via spermidine), in the hypoxic pulmonary vasoconstriction response, and in erythrocyte membrane stability. It is also the principal contributor to the characteristic odor of semen, via its oxidation to putrescine and cadaverine.

## Aging and disease relevance

Polyamine levels are among the more reproducible metabolite changes in aging. Notably:

- **Spermidine** (upstream of spermine) has been the workhorse in aging studies, with animal data showing that spermidine induction reproduces much of the effect of calorie restriction, and the spermidine analogue geranylgeranylacetone (GGA) was tested in humans. The "spermidine autophagy" work (Paik et al. 2015) is a central node in the [[_document_ - Natural Bioactive Compounds Spermidine Fisetin Berberine Urolithin A]] and spermidine-document cluster in the vault.
- **Spermine synthase** is on the human longevity candidate list, and a GWAS hit in SMS has been reported in human longevity studies.
- In [[Cancer]], polyamine pools are frequently elevated: tumour cells overproduce polyamines, and the [[Polyamine]] analogue class includes DFMO (eflornithine) as a validated ODC inhibitor. Conversely, spermine metabolism feeds one-carbon and methylation metabolism, and the SAM cycle is tightly coupled to polyamine synthesis.
- [[Fibroblast senescence]] and senescence-associated transcription are modulated by polyamine pool size, largely through effects on mTOR and on translation.
- Spermine has been implicated in neuroinflammation and in [[Neurodegeneration]] generally; excess polyamines are a known feature of Alzheimer's tissue.

> [!warning] Clinical caveat
> Neither spermine nor spermidine supplementation has shown robust human efficacy on lifespan or on age-related disease endpoints. The animal data for spermidine are strong and reproducible; the human translation is not established. Polyamine biology is also bidirectional — high polyamine levels promote tumour growth, and aggressive anti-polyamine strategies (DFMO, AMXT-1501) are in clinical trials — so "more polyamine" is not a safe default for a longevity intervention.

## Documents

- [[Polyamine]] — Spermine is the endpoint of the polyamine pathway this document places in its broader metabolic and aging context.

## Connections

- [[Polyamine]] — Spermine is the longest and most cationic member of the polyamine family, sharing biosynthesis, catabolism and essentially all of the biological readout with putrescine and spermidine. The polyamine document gives the pathway-level context; this note gives the spermine-specific biology.
- [[Spermidine]] — Spermine is made *from* spermidine by a single aminopropyltransfer, and spermidine is one molecule shorter with nearly identical chemistry. Most of the aging literature on polyamines is actually about spermidine, and spermidine is the better-studied of the two in autophagy and arterial aging contexts.
- [[SAT1]] — Spermidine/spermine N¹-acetyltransferase 1 is the rate-limiting catabolic enzyme. It is the direct control point over cellular spermine levels, and knocking it down raises polyamines, promotes Z-DNA, and blunts cGAS–STING signalling.
- [[cGAS-STING Pathway]] — Spermine (with spermidine) suppresses cGAS by promoting B-to-Z DNA transition. This is a direct, defined biochemical link from a small-molecule metabolite to innate immune tone, and it makes spermine a candidate node in the inflammatory set-point biology the vault tracks elsewhere.
- [[STING]] — STING is the downstream adaptor whose activation is gated by spermine-dependent suppression of the cGAS step upstream of it.
- [[Epigenetics]] — Spermine influences chromatin compaction and DNA methylation indirectly through the polyamine/SAM/methylation axis, and spermidine-induced acetylation of EP300 is one of the better-defined epigenetic mechanisms in this family.
- [[Autophagy]] — Polyamine pool size, particularly spermidine, is a genuine inducer of autophagy in several models, linking polyamine metabolism to the same nutrient-deprivation-sensing output that mTOR controls. Spermine's own role here is less well documented than spermidine's.
- [[Cancer]] — Elevated tumour polyamine pools and the resulting dependency on putrescine and spermidine synthesis is the basis of ODC-inhibitor therapy; spermine oxidase, which converts spermine back to spermidine, is a long-standing anti-tumour target in the same pathway.
- [[Oxidative Stress]] — Spermine is a direct intracellular free radical scavenger and its catabolism by spermine oxidase *generates* H₂O₂. That dual role is unusual: the same molecule is both antioxidant and a source of oxidant depending on which enzyme acts on it.
- [[Ornithine transcarbamylase|Ornithine metabolism]] — Ornithine is the substrate of ornithine decarboxylase and therefore the entry point to the whole polyamine pathway. The link is the shared pool rather than the enzyme: urea-cycle ornithine and polyamine ornithine compete.

## Linking Summary

- New links added: [[Spermidine]], [[SAT1]], [[cGAS-STING Pathway]], [[STING]], [[Epigenetics]], [[Autophagy]], [[Cancer]], [[Oxidative Stress]], [[Ornithine transcarbamylase|Ornithine metabolism]]
- Suggested notes to create: [[Spermine Synthase]], [[Spermidine Synthase]], [[Spermine Oxidase]], [[Ornithine Decarboxylase]], [[Snyder-Robinson Syndrome]], [[Eflornithine (DFMO)]], [[Polyamine Analogue Inhibitors]], [[AMXT-1501]] — removed as already existing: Z-DNA
- Strong connections to strengthen: [[Spermine]] ↔ [[cGAS-STING Pathway]], [[Spermidine]] ↔ [[Autophagy]], [[Polyamine]] ↔ [[Cancer]]
