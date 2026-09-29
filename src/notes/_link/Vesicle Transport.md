---
title: Vesicle Transport
description: Vesicle transport is the directed, coat-mediated movement of membrane-bound carriers between organelles and the cell surface — COPI/COPIl at the Golgi, COPII and clathrin at ER exit and endocytosis, with Rab GTPases, tethers and SNAREs specifying which membranes fuse.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - biological-process
  - membrane-trafficking
aliases: [vesicle trafficking, membrane vesicle transport, vesicular transport]
---

# Vesicle Transport

**Vesicle transport** is the umbrella term for how cells move membrane and soluble cargo
between compartments. A carrier membrane buds from a donor compartment, is coated and
tethered, traffics along cytoskeletal tracks, is captured by a Rab/tether/SNARE module, and
fuses. Each step is separately regulated, which is why vesicular transport has so many
disease associations — it is not one pathway but a network of them.

## Coat layers

Coats select cargo and bend the membrane to make the bud.

- **COPII** — ER exit. Sar1-GTP opens the ER gate and recruits the Sec23/24 inner
  scaffold; Sec13/31 builds the outer cage. ER-to-Golgi anterograde.
- **COPI** — Golgi-to-ER retrograde. Arf1-GTP recruits coatomer. Also returns escaped
  ER residents and resident Golgi enzymes.
- **Clathrin** — budding at the plasma membrane for [[Endocytosis]] and at the
  trans-Golgi network for lysosomal delivery, via adaptors (AP-2 at the surface, AP-1 at the
  TGN) that read sorting signals on cargo.
- **Retromer/ESCPE-1** — endosome-to-TGN recycling.
- **IL-2RGD** — endosomal sorting complex machinery for lysosome-bound and
  recycling-bound cargo.

## Specificity: Rab, tether, SNARE

Coats deliver vesicles but do not decide where they go. That is set by:

1. **Rab GTPases** — one per compartment identity (e.g. Rab5 early endosome, Rab1 ER-Golgi,
   Rab7 late endosome/lysosome, Rab11 recycling). Rab5, Rab7 and Rab11 conversions are the
   classic maturation switches.
2. **Tethers (effectors)** — long coiled-coil or multisubunit complexes (EEA1, HOPS, CORVET,
   exocyst) that capture a vesicle and bring it into contact with the target membrane.
3. **[[SNARE proteins|SNAREs]]** — the final, irreversible step. See [[VAMP8]] for a case
   where one v-SNARE serves two different fusion steps depending on Q-SNARE partner.

## The canonical secretory pathway

ER folding and quality control → COPII vesicles → ERGIC/cis-Golgi → Golgi glycosylation and
sorting → TGN → secretory vesicles or lysosome → [[Endocytosis]] or exocytosis.

Golgi-resident coat recruitment depends on the **Golgi-resident Arf1 GEF
[[B-cell Immunoglobulin-derived Gene 1|GBF1]]** (historically *BIG1*), which is activated by
Brefeldin A's covalent inhibition of Arf1 and is therefore the classic probe for
coat recruitment. Disrupting GBF1 fragments the Golgi and redistributes resident enzymes —
this is a direct experimental handle on vesicle transport, and it is the context in which
the [[BIG1]] symbol enters this vault.

## Regulation and checkpoints

Transport is not constitutively on. Key controls:

- Coat assembly is nucleotide-gated: Sar1 and Arf1 require GTP.
- Ubiquitin ligases such as [[Ubiquitin Ligase|VPS4]] and the ESCRT machinery police
  ubiquitin-tagged membrane into intraluminal vesicles, and their failure to disassemble
  produces ESCRT-negative multicystic bodies.
- Rabs are themselves regulated by GEFs (DENND, Mon1-Ccz1) and GAPs; Rab conversion is
  switch-like and irreversible in practice.
- Autophagosome biogenesis uses a distinct, ATG-conjugation-driven route to phagophore
  expansion — see [[Phagophore Assembly Site]] and [[WIPI2]] for how [[PtdIns3P]]
  couples it to the standard trafficking logic.

## Failure modes

Impaired vesicle transport produces recognisable disease pictures. Coat and motor defects
cause neurodegeneration (SNCA/Parkinson's, kinesin mutations). ESCRT dysfunction causes
multicystic disease and tumour susceptibility. Golgi fragmentation is a common feature of
many neurodegenerative diseases. Lysosomal delivery defects underlie lysosomal storage
diseases. In the adaptive immune system, antigen-presenting cells depend on
secretory-pathway flux to load and secrete MHC.

In ageing, reduced secretory throughput and altered Golgi morphology are well documented,
and appear in models of reduced [[NAD+]] availability — a plausible link between the
sirtuin axis and extracellular-matrix maintenance.

## Connections

- [[BIG1]] — the historical symbol for [[GBF1]], the Golgi-resident Arf1 GEF that drives
  COPI coat recruitment; its Brefeldin A sensitivity made it the workhorse probe for this
  process.
- [[B-cell Immunoglobulin-derived Gene 1]] — the vault's canonical entry disambiguating
  BIG1 to GBF1, with the naming caveat.
- [[Membrane Trafficking]] — the parent process; this note is the operational view.
- [[SNARE proteins]] — the fusion layer that makes delivery irreversible and compartment-specific.
- [[VAMP8]] — a concrete example of how one v-SNARE's pairing choice specifies which
  membranes fuse at which step.
- [[Endocytosis]] — the plasma-membrane branch of transport, driven by clathrin and AP-2.
- [[Golgi apparatus]] — the central processing station whose resident enzyme distribution
  depends on continual COPI-mediated retrieval.
- [[Lysosome Biogenesis]] — the endpoint of the TGN and endosomal arms of this network.
- [[PtdIns3P]] — the lipid signal that links phagophore formation to the surrounding
  trafficking machinery, via WIPI effectors.
- [[Phagophore Assembly Site]] — the autophagic structure assembled by a parallel
  conjugation-driven route and coordinated with these pathways.
- [[Ubiquitin Ligase]] — ubiquitination is both the cargo-sorting signal and the
  degradation/damage signal that recruits the autophagy machinery.
- [[Parkinson's Disease]] — SNCA and vesicle-transport defects are core to its pathology.
- [[NAD+]] — the cofactor whose availability falls with age and tracks with secretory
  capacity decline.
- [[Autophagy]] — the stress-response process that reuses the same machinery for bulk
  lysosomal delivery.

## Linking Summary

- New links added: [[BIG1]], [[B-cell Immunoglobulin-derived Gene 1]],
  [[Membrane Trafficking]], [[SNARE proteins]], [[VAMP8]], [[Endocytosis]],
  [[Golgi apparatus]], [[Lysosome Biogenesis]], [[PtdIns3P]],
  [[Phagophore Assembly Site]], [[Ubiquitin Ligase]], [[Parkinson's Disease]], [[NAD+]],
  [[Autophagy]]
- Suggested notes to create: [[GBF1]], [[COPII]], [[COPI]], [[Clathrin]],
  [[Arf1]], [[Sar1]], [[Brefeldin A]], [[Rab GTPase]], [[TGN]], [[ESCRT]], [[VPS4]],
  [[EEA1]], [[Trans-Golgi Network]], [[Secretory Pathway]]
- Strong connections to strengthen: [[Vesicle Transport]] ↔ [[BIG1]],
  [[Vesicle Transport]] ↔ [[Membrane Trafficking]]
