---
title: Lipid Nanoparticles
description: Lipid nanoparticles are self-assembling nanoscale lipid assemblies that encapsulate nucleic acids and proteins, using ionizable lipids to enable endosomal escape and cytosolic delivery of mRNA.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [nanoparticle, drug-delivery, lipids, biotechnology]
aliases: [LNPs, lipid nanoparticle, lipid-based nanoparticles, lipid nanocarriers]
---

# Lipid Nanoparticles

**Lipid nanoparticles (LNPs)** are nanoscale, self-assembling assemblies of
[[Lipids|lipids]] — typically a lipid, cholesterol, an ionizable amino lipid and a
helper phospholipid — that carry nucleic acid, protein or small-molecule cargo
into cells. They are the enabling technology of the mRNA vaccine platform and
of most approved RNA therapeutics, and they are the reason the *LNP* in
[[siRNA]] therapeutics such as patisiran and givosiran and in the mRNA COVID-19
vaccines behaves as a drug rather than as a nucleic acid.

## Why lipids

Nucleic acids are large, hydrophilic, nuclease-sensitive and membrane-impermeant.
LNPs solve all four problems at once. The core idea is **self-assembly**: mix
acidic aqueous RNA with lipids dispersed in ethanol at low pH, and the lipids
protonate, become water-soluble, and collapse around the payload. No covalent
conjugation to the RNA is required, and the encapsulation efficiency routinely
exceeds 90%.

- **Size and shape.** 60–100 nm spheres, comparable to many enveloped viruses,
  which is a large part of why LNP delivery is efficient: uptake by
  [[Lipoprotein Receptors|ldl-receptor-family]]-mediated endocytosis and by
  non-endocytic uptake in phagocytes, and minimal renal filtration.
- **Protection.** The lipid shell shields cargo from serum RNases.
- **Low innate immunogenicity relative to the payload.** LNPs are, by design,
  largely non-immunogenic; the *adjuvant* effects of RNA vaccines come from
  the RNA and from the ionizable lipid's own inflammation-modulating activity,
  not from the particle per se.
- **Stability on storage and lyophilisation.** This is what made global
  distribution of frozen mRNA vaccine possible, and is the non-obvious
  engineering achievement behind those vaccines.

> [!info] Why ionizable lipids dominate
> Early LNPs used permanently cationic lipids such as DOTAP or
> DLin-MC3-DMA. Permanent charge gives high encapsulation and good endosomal
> disruption but is toxic — membrane disruption, inflammation, complement
> activation — and is quickly neutralised by serum anionic lipids and
> non-specific protein adsorption, which is what drives clearance and limits
> repeat dosing.
>
> The innovation of **ionizable** lipids (SM-102, ALC-0315, MC3) is that they
> are **neutral at physiological pH and protonated at acidic pH**. A
> typical ionizable lipid has a tertiary amine with a pKa around 6.2–6.5, so
> in blood the particle is near-neutral, non-toxic and non-immunogenic, and
> only after endocytosis — in the pH 5.0–6.0 endosome — does a fraction of
> the lipids become cationic. This is **pH-dependent, tissue- and
> compartment-selective activation**.

## Endosomal escape

Endosomal escape remains the rate-limiting step: most LNP cargo never escapes
its endosome and is degraded. The current consensus mechanism is a
combination rather than a single well-defined event:

1. Apparent endocytosis via clathrin-mediated and non-clathrin routes.
2. Protonation of the ionizable lipid, giving the particle a cationic surface.
3. Anionic membrane lipids of the endosome (principally [[Phospholipid]]
   phosphatidylserine) bind the particle, and PEG-lipid displacement and
   lipid mixing begin.
4. The mixing of LNP lipids with the endosomal membrane — the
   "inverse hexagonal" or non-bilayer transition — destabilises the endosomal
   membrane. The protonated lipids form hexagonal H_II phase domains, which
   invert the membrane topology and cause a non-lytic release of cargo into
   the cytosol.

> [!warning] Honest state of the field
> The literature does not agree on the details. Escape efficiency is typically
> only a few percent in many cell systems, and whether it proceeds by
> membrane fusion, lipid mixing, or transient pore formation remains debated.
> Escape is also strongly cell-type dependent — it is high in professional
> phagocytes and in many cell lines, and often poor in primary cells such as
> primary human hepatocytes, T cells and cardiomyocytes, which is a
> significant limitation for in vivo therapeutics. Do not treat any single
> mechanism diagram as settled.

## Composition and the PEG question

A four-component LNP is standard:

| Component | Function | Examples |
| --- | --- | --- |
| Ionizable amino lipid | Encapsulation, endosomal escape | SM-102, ALC-0315, MC3, ALC-0159 |
| Helper phospholipid | Structural lipid, stabilises the particle | DSPC |
| Cholesterol | Displaces lipid packing, reduces lipid phase separation, modulates size | cholesterol from yeast-derived sources |
| PEG-lipid | Prevents aggregation during manufacture and storage; controls size | DMG-PEG2000, ALC-0159 |

PEG-lipid is double-edged. It prevents aggregation in the vial but also
**anti-PEG antibodies** develop after repeated dosing and cause accelerated
clearance and hypersensitivity reactions on repeat administration. Attempts to
reduce this by lowering PEG content, by using selectively cleavable PEG-lipids
that shed after injection, or by switching to alternative PEGylation chemistries
are active areas of work.

## Other lipids and platforms in the field

- **Solid lipid nanoparticles and nanostructured lipid carriers** — lipid
  matrices rather than liposomes, giving higher payload loading and more
  sustained release, mostly in oncology and dermal delivery.
- **Liposomal anthracyclines** — [[Doxorubicin]] and daunorubicin encapsulated
  in pegylated liposomes, designed to reduce cardiotoxicity by changing
  biodistribution from the heart to the tumour.
- **[[Cholesterol]]-lowering nanoparticles** and the related
  [[Antisense Oligonucleotide]] platform.
- **Self-amplifying RNA** and circular RNA in LNPs, and the lipid
  formulation in [[Redox Vaccination|mRNA vaccine]] lipid moieties for
  intratumoural and inhaled use.

## Applications

- **mRNA vaccines** — [[Shingles Vaccine|SARS-CoV-2 mRNA vaccines]] contain
  ~50 µg of LNP-encapsulated mRNA encoding the spike protein with N1-methylpseudouridine.
- **RNA therapeutics** — patisiran, givosiran (siRNA), inclisiran.
- **Oncology** — liposomal doxorubicin, mRNA-2416 (OX40L) and neoantigen
  vaccines, intratumoural LNP injection such as mRNA-2759.
- **Protein and small-molecule delivery** — including topical dermal LNP
  delivery and inhaled LNP formulations.
- **Tool use** — [[Antagomirs|antagomirs]] and [[siRNA]] are delivered this way;
  LNP-mediated delivery of small activating RNAs is a research tool for
  [[Fibrosis|anti-fibrotic]] reprogramming.

> [!warning] Clinical caveats
> - **Reactogenicity** is largely attributable to the ionizable lipid and
>   occurs after a few doses in ~10–20% of mRNA vaccine recipients. It is
>   dose- and lipid-dependent.
> - **Myocarditis**, particularly in adolescent and young adult males, occurs at
>   a rate of roughly 1 in 10,000 to 1 in 100,000 after mRNA vaccination and
>   is still incompletely explained; lipid accumulation in myocardium and
>   innate immune activation via [[Toll-like Receptor]] pathways are leading
>   hypotheses, not settled mechanisms.
> - **Repeat dosing** is limited by anti-PEG antibodies and by
>   complement-activation-related pseudoallergy in some individuals.
> - The **reactogenicity of ALC-0315 vs SM-102** differs slightly, and the
>   two are not interchangeable.

## Documents

- [[Antagomirs]] — antagomir and siRNA therapeutics are among the first and
  most important LNP-delivered nucleic acid products; the link records the
  platform's earliest clinical validation.

## Connections

- [[siRNA]] — LNP encapsulation is what makes siRNA a drug: patisiran
  (transthyretin amyloidosis) and givosiran (acute hepatic porphyria) are
  LNP–siRNA conjugates in clinical use, and the liver is LNP's most reliable
  target organ because of its fenestrated endothelium and Kupffer cell
  clearance.
- [[Antagomirs]] — Antagomirs (antimiRs) are among the earliest
  LNP cargoes, and [[Antagomirs|mRNA-1341]]-type constructs for cardiac
  fibrosis were among the first microRNA therapeutics to enter the clinic.
- [[Cholesterol]] — Cholesterol is one of four standard LNP components and
  is not a passive filler: it constrains lipid packing and thereby particle
  size, stability and escape efficiency.
- [[Nanoparticles]] — LNPs are one branch of a broader nanoparticle
  delivery taxonomy; the general nanoparticle literature in the vault
  (metallic, polymeric, [[Ligand-conjugated Nanoparticles]]) contrasts
  with the self-assembling, non-covalent, biologically tolerated approach
  LNPs represent.
- [[Phospholipid]] — The helper phospholipid class (DSPC) that provides the
  structural backbone of the particle, and the anionic endosomal
  phospholipids whose interaction with cationic LNPs is the proximate
  trigger of escape.
- [[Liposomes]] — LNPs and liposomes are both lipid self-assemblies; the
  distinction is that LNPs are non-bilayer, ionizable and PEG-lipid-stabilised
  rather than classical bilayer vesicles.
- [[Shingles Vaccine]] — the mRNA vaccine platform relies wholly on LNP
  delivery, and the pandemic-scale distribution established the manufacturability
  and cold-chain engineering the platform depends on.
- [[Cardiotoxicity]] — liposomal anthracyclines were engineered specifically
  to decouple drug exposure from cardiac tissue; a well-established
  formulation–toxicity link.
- [[Doxorubicin]] — the archetypal liposomal cargo, and the reason pegylated
  liposomal doxorubicin shows markedly less cardiotoxicity than free drug.
- [[Fibrosis]] — LNP-delivered small activating RNAs to reprogram activated
  fibroblasts back to a quiescent state are an active anti-fibrotic strategy.
- [[Toll-like Receptor]] — Ionizable lipids, and the LNPs themselves, signal
  through TLR4 and TLR2 in several contexts, contributing both to
  adjuvanticity and to reactogenicity.
- [[Antisense Oligonucleotide]] — [[siRNA]] and antisense oligonucleotides are
  the most common LNP cargoes, and the chemistry is shared between the
  mRNA, siRNA and antisense platforms.

## Linking Summary

- New links added: [[Lipids]], [[siRNA]], [[Nanoparticles]], [[Cholesterol]], [[Phospholipid]], [[Antisense Oligonucleotide]], [[Redox Vaccination]], [[Shingles Vaccine]], [[Fibrosis]], [[Toll-like Receptor]], [[Doxorubicin]], [[Liposomes]]
- Suggested notes to create: [[Ionizable Lipid]], [[SM-102]], [[ALC-0315]], [[MC3]], [[DLin-MC3-DMA]], [[Endosomal Escape]], [[Anti-PEG Antibody]], [[Patisiran]], [[Givosiran]], [[DSPC]], [[Pegylated Liposomes]], [[Solid Lipid Nanoparticles]], [[Soluble Interferon]], [[mRNA Vaccine]], [[Cationic Lipid]], [[DOTAP]], [[Liposomal Doxorubicin]], [[LNPs]], [[Lipoprotein Receptors]]
- Strong connections to strengthen: [[Lipid Nanoparticles]] ↔ [[siRNA]], [[Lipid Nanoparticles]] ↔ [[Nanoparticles]], [[Lipid Nanoparticles]] ↔ [[Antagomirs]]
