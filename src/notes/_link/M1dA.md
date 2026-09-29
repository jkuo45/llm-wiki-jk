---
title: M1dA
description: 1-methyladenine is a cytotoxic DNA base lesion formed by N1-alkylation of adenine; it blocks replication and transcription and is removed by dedicated glycosylases.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [dna-damage, chemical-adduct, mutagenesis, carcinogenesis]
aliases: [1-methyladenine, 1-meA, N1-methyladenine, 1-methyl-6-hydroxylaminopurine]
---

# M1dA

**1-Methyladenine** (1-meA, N1-methyladenine) is a **cytotoxic** DNA base
lesion formed when an alkylating agent methylates the **N1 position of
adenine** — the nitrogen that occupies the Watson–Crick edge of the base pair
in double-stranded DNA.

## Why position 1 matters

> [!info] The structural reason 1-meA blocks polymerases
> Adenine's N1 nitrogen points into the centre of the A-T base pair and
> carries the hydrogen bond to the N3 of thymine. Alkylating it replaces that
> hydrogen-bond donor with a methyl group, so the A–T pair can no longer form
> correctly. The result is not a mispairing lesion that a polymerase might
> paper over — it is a **replication and transcription block**.

This distinguishes 1-meA from most other alkylated bases, which are
mutagenic but tolerated:

- **[[3-Methyladenine]]**, from methylation of adenine's N3 in the minor
  groove, is the most abundant alkylation product and is poorly mutagenic. Its
  main threat is spontaneous depurination into an AP site. N3 lies in the
  minor groove and is sterically accessible to alkylating agents without
  opening the duplex.
- **1-meA** is a replication block and is strongly cytotoxic. Because the N1
  site is buried in the base pair, it is a *transient* lesion that arises
  predominantly in **single-stranded DNA** — during replication, transcription,
  or DNA repair synthesis — where the duplex is locally unwound and N1 is
  solvent-exposed. 1-meA is therefore also known as the
  **1-methyl-6-hydroxylaminopurine (1,6-HAP)** lesion in the specific case of
  hydroxylamine modification.

> [!warning] The honest caveat
> Historically 1-meA was regarded as a lethal lesion that had to be removed
> absolutely, but work with site-specifically modified substrates established
> a more nuanced picture: replication past 1-meA *is* possible, at substantial
> cost. It triggers a futile, error-prone "replication slippage" cycle in which
> polymerases repeatedly start and fail. So 1-meA is both cytotoxic *and*
> mutationally relevant, and the modern view is that its lethal and mutagenic
> effects are not cleanly separable. Claims that it is "absolutely lethal" and
> claims that it is "harmless because easily repaired" are both wrong.

## Formation and repair

1-meA arises from:

- **Methyl methanesulfonate (MMS)** and methyl iodide, classic laboratory
  mutagens.
- **Nitrosamines** (metabolically activated to N-nitroso compounds) and
  **N-nitrosoureas** such as carmustine and lomustine, plus the
  clinically used alkylating chemotherapy [[Cyclophosphamide]] (via its
  phosphoramide mustard metabolite) and dacarbazine. Note that
  [[Cisplatin]] is a platinum crosslinker and does **not** generate 1-meA;
  the two are separate alkylation chemistries.
- **Dimethylsulfate** and related industrial methylating agents.
- Endogenously, at low rate, via S-adenosyl-L-methionine, which is a weak
  methylating agent.

Repair proceeds by **base excision repair**:

- **[[Alkyladenine glycosylase]]** (AAG/MPG) is the principal enzyme,
  excising 1-meA as the free base and leaving an AP site. This is why AAG's
  historical alias is "1-methyladenine DNA glycosylase."
- **[[AlkB|ALKB8]]** (human ALKBH-type dioxygenases) can directly
  **demethylate** 1-meA without base excision, an example of true direct
  reversal in which the alkyl group is oxidised off the base. AlkB also
  handles 3-methylcytosine and 1-methylguanine.
- **[[OGG1]] and other glycosylases** do not act on 1-meA; the exocyclic and
  oxidatively-generated lesions such as [[M₁dG]] are handled by a different
  branch of base excision repair. M1dA and M1dG are often written in parallel in
  the lipid-peroxidation adduct literature and are easy to confuse, but they
  are structurally unrelated: M1dA is a methyl group on adenine's N1, M1dG is
  a propanal-derived exocyclic adduct on guanine's N2.

> [!info] Mutational consequence and clinical relevance
> Replication past 1-meA produces characteristic **AT→TA transversions**
> (adenine to thymine at the AT base pair) and, via the futile-replication
> pathway, tandem base-pair substitutions. This specific mutational
> signature is used in the **mutational signature decomposition** literature
> to separate alkylating-agent mutagenesis from other processes.
>
> The same chemistry is why 1-meA matters therapeutically: alkylating
> chemotherapy kills largely by generating cytotoxic 1-meA, and the lesion
> also arises from nitrosamine exposure implicated in oesophageal, gastric and
> hepatocellular carcinoma. Note that the *mutagenic* burden that initiates
> cancer and the *cytotoxic* burden that kills are different consequences of
> the same lesion, and the ratio between them depends on repair capacity.

## Documents

- [[M₁dG]] — the exocyclic guanine adduct of lipid peroxidation, frequently
  written in parallel with M1dA; this note supplies the structural contrast
  (N1-alkylation of adenine versus N2-propanal adduction of guanine) and
  the fact that they are handled by separate glycosylases.

## Connections

- [[Alkyladenine glycosylase]] — AAG/MPG is the initiating base-excision-repair
  enzyme for 1-meA and is named for it; this is the direct enzymatic
  relation.
- [[3-Methyladenine]] — The other common adenine alkylation product, from
  the minor-groove N3 position; abundant and poorly mutagenic, in explicit
  contrast to the replication-blocking N1 lesion.
- [[M₁dG]] — A frequently co-cited but structurally unrelated DNA adduct;
  the pairing here is about keeping the two methylated-adduct names distinct
  and about the shared exocyclic/base-excision context.
- [[DNA Repair]] — 1-meA is a canonical substrate of the base-excision-repair
  branch, and its efficient repair is what makes normal cells tolerate
  background alkylation damage.
- [[DNA Methylation]] — Both are adenine/guanine methyl modifications, but
  DNA methylation is a regulated, heritable epigenetic mark deposited
  enzymatically at C5, whereas 1-meA is a random chemical adduct with no
  regulatory function. Conflating the two is a common error.
- [[OGG1]] — A parallel HhH-family glycosylase acting on 8-oxoG;
  mechanistically analogous base-flipping enzyme acting on a different
  lesion class.
- [[Mutagenesis]] — 1-meA produces a specific, recombinable transversion
  signature used in mutational-signature analysis.
- [[Reactive Oxygen Species]] and [[Lipid Peroxidation]] — Related damage
  context: reactive aldehydes from lipid peroxidation generate the exocyclic
  adducts, whereas direct alkylating agents generate 1-meA.
- [[Cisplatin]] and [[Cyclophosphamide]] — [[Cyclophosphamide]] and the
  nitrosoureas generate 1-meA and rely on it for cytotoxicity, which is why
  AAG over-expression is a resistance mechanism. [[Cisplatin]] is included as
  a contrasting alkylating agent whose lesions (mostly 1,2-intrastrand
  purine–purine crosslinks) are handled by a different repair hierarchy.
- [[Epigenetics]] — Included for contrast: 1-meA is chemically a methylated
  adenine but has no epigenetic significance whatsoever, unlike 5-methylcytosine.

## Linking Summary

- New links added: [[3-Methyladenine]], [[Alkyladenine glycosylase]], [[DNA Repair]], [[DNA Methylation]], [[OGG1]], [[Mutagenesis]], [[Reactive Oxygen Species]], [[Lipid Peroxidation]], [[Cisplatin]], [[Cyclophosphamide]], [[Epigenetics]]
- Suggested notes to create: [[1-Methyladenine]], [[Methyl Methanesulfonate]], [[Nitrosamine]], [[AlkB]], [[ALKBH]], [[1,6-HAP]], [[Transversion]], [[Mutational Signature]], [[Antineoplastic Agent]], [[Mutagenesis]] — removed as already existing: Base Excision Repair
- Strong connections to strengthen: [[M1dA]] ↔ [[Alkyladenine glycosylase]], [[M1dA]] ↔ [[3-Methyladenine]], [[M1dA]] ↔ [[M₁dG]]
