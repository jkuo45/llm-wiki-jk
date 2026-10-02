---
title: GAP
description: 'GAP (GTPase-activating protein) is a family of regulatory proteins that accelerate intrinsic GTP hydrolysis on small GTPases, switching them from GTP- to GDP-bound and thereby terminating their signalling. The clearest cases in this vault are the TSC1/TSC2 heterodimer acting on Rheb to restrain mTORC1, and NF1/neurofibromin acting on Ras.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - signaling
  - gtpase
  - mtor
  - tumor-suppressor
aliases: [GTPase-Activating Protein, GTPase activating protein, GAP activity, Ras GAP, Rho GAP, ARHGAP]
---

# GAP

## Overview

> [!warning] The term is ambiguous in three ways
> "GAP" in this vault can mean:
>
> 1. **The protein family** — GTPase-activating proteins (this note). This is
>    the sense intended here.
> 2. **A single protein** — in the mTOR literature, "GAP" is often used as a
>    shorthand for the **TSC1/TSC2 complex**, which is the GAP activity toward
>    [[Rheb]].
> 3. **Unrelated abbreviations** — do not link those: [[GAPDH]] is
>    glyceraldehyde-3-phosphate dehydrogenase; [[Gap Junction]] is the
>    intercellular channel formed by connexins.
>
> There is no single protein called "GAP." The entry below is a family note.

## What a GAP actually does

Small GTPases of the [[RAS]] superfamily cycle between two states: an active
**GTP-bound** state and an inactive **GDP-bound** state. The switch is
regulated by three classes of partner:

- **GEFs** (guanine nucleotide exchange factors) catalyse GDP release and GTP
  loading — they turn the switch **on**.
- **GAPs** accelerate the intrinsic Ras GTPase reaction — catalysing the
  hydrolysis of the γ-phosphate, sometimes by three to four orders of
  magnitude. They turn the switch **off**, fast.
- **GEIs/GDP dissociator inhibitors** (e.g. SOS has dual activity; GDI/RGD
  family proteins extract GDP-loaded GTPases from membranes) control
  localisation and nucleotide cycling.

> [!info] The logic
> Cells express far less active GTPase than inactive at any moment. A GAP is
> therefore a *brake*, not an off-switch on a running motor: removing a GAP
> does not block signalling, it makes it persist. That is why almost every
> well-characterised tumour suppressor in this family (NF1, TSC2) is a GAP.

The catalytic mechanism requires the GTPase to adopt a conformation that
positions a catalytic arginine from the GAP (a "arginine finger") into the
γ-phosphate-binding site. GAPs are unusually diverse in architecture —
families named after their target GTPase family (Ras GAPs, Rho GAPs, Rab GAPs,
Arf GAPs, etc.) — but they all converge on supplying or positioning that
arginine.

## Principal examples relevant to this vault

### TSC1/TSC2 as a Rheb GAP

The best-characterised GAP biology in the ageing/metabolism literature.

- [[TSC]] is a heterodimer of **TSC1 (hamartin, tumour-suppressor)** and
  **TSC2 (tuberin, tumour-suppressor)**.
- The complex acts as a **GAP specific for Rheb**, converting
  GTP-loaded Rheb to its inactive GDP state.
- Because GTP-Rheb is the direct activator of [[mTORC1]], TSC1/TSC2 is
  therefore a negative regulator of mTORC1.
- Nutrient and energy signals act *through* this GAP. [[AMPK]] phosphorylates
  TSC2 in response to energy depletion, **increasing** its GAP activity toward
  Rheb and thereby reducing mTORC1 activation. Growth-factor signalling via
  [[Akt]] and [[ERK1_2]]/RSK phosphorylates TSC2 at sites that *reduce* its GAP
  activity, permitting Rheb-GTP accumulation and mTORC1 activation.
- Biallelic loss of *TSC1* or *TSC2* causes **tuberous sclerosis complex
  disease**, with the mTOR hyperactivation that this entails producing renal
  angiomyolipomas, cardiac rhabdomyomas, subependymal giant cell astrocytomas,
  and cortical tubers. Somatic *TSC2* loss with mTOR activation is also
  common in [[Bladder Cancer]] and other tumours, which is why rapamycin and
  everolimus are used therapeutically in TSC-associated lesions.

### NF1/neurofibromin as a Ras GAP

- **Neurofibromin**, encoded by *NF1*, is a Ras GAP and one of the most
  frequently mutated tumour suppressors in human cancer.
- Its loss leaves Ras GTP-loaded and hyperactivates the RAS–MAPK axis; this
  underlies **neurofibromatosis type 1** and much of the Ras-driven biology in
  sporadic cancers.

### ARHGAP family

A large family of Rho-family GAPs that control actin remodelling, cell
morphology, migration, and focal-adhesion turnover. Overexpression of several
ARHGAPs (e.g. ARHGAP6, ARHGAP21, ARHGAP24) has been reported in a range of
cancers, generally through effects on cytoskeletal signalling rather than by
being loss-of-function tumour suppressors.

### Other notable GAPs

- **RASA1 (p120GAP)** — Ras GAP downstream of integrin and receptor
  engagement.
- **RASA2** — Ras GAP and a tumour suppressor mutated in melanoma.
- **IQGAP1** — a large scaffold that binds Cdc42 and actin; Ca²⁺/[[Calmodulin]]
  disrupts IQGAP1–Cdc42 binding in a concentration-dependent manner.
- **Charcot–Marie–Tooth disease protein 43 (CMT43)** — RAB-specific GAP.
- **Gyp5** — a GAP family implicated in [[Neurodegeneration]] in flies and mice.

## Pathology and clinical relevance

> [!important] The therapeutic logic of GAP biology is two-sided
> - **Restore a missing brake (tumour suppressor loss):** the mTORC1
>   inhibitors rapamycin/[[Rapalog|everolimus]] effectively substitute for
>   lost TSC GAP activity; mTOR inhibitors are used in TSC, in TSC-associated
>   renal angiomyolipoma, and investigationally in TSC2-mutant bladder cancer.
> - **Remove a brake that is inappropriately holding growth off (gain of
>   function):** in some settings ARHGAP upregulation acts *oncogenically* by
>   restraining Rho-dependent adhesion and migratory programmes, which is why
>   inhibiting specific ARHGAPs is being pursued.
>
> - **Rho-family GAP dysregulation is also implicated in Mendelian disease**
>   (neurofibromatosis, Charcot–Marie–Tooth disease) and increasingly in
>   haematologic malignancy.

## Documents

- [[_document_ - mTOR signaling at a glance|mTOR signaling at a glance]] — defines the TSC1/TSC2 heterodimer (hamartin/tuberin) as the GTPase-activating protein for the Ras-related small GTPase Rheb, converts Rheb-GTP to its inactive GDP state to negatively regulate mTORC1, and describes AMPK phosphorylation of TSC2 increasing TSC2 GAP activity under energy depletion.

## Connections

- [[TSC]] — the TSC1/TSC2 heterodimer is the Rheb GAP that sets mTORC1 activity, the archetypal GAP node in this vault.
- [[Rheb]] — the substrate of the TSC GAP; only GTP-loaded Rheb activates mTORC1, so GAP activity sets mTORC1 output.
- [[mTORC1]] — downstream of the Rheb GAP; TSC loss or AMPK-driven TSC2 activation directly determines whether mTORC1 is on or off.
- [[AMPK]] — phosphorylates TSC2 to *increase* its Rheb GAP activity under energy depletion, the canonical route by which energy status suppresses mTORC1.
- [[RAS]] — the substrate class of the Ras GAPs (NF1/neurofibromin, RASA1, RASA2); GAP loss leaves Ras GTP-loaded.
- [[mTORC2]] — shares the FRB domain with mTORC1 but is not regulated by a GAP at TSC; TSC GAP activity acts on Rheb rather than directly on either complex.
- [[Gap Junction]] and [[GAPDH]] — unrelated entities that share the acronym; do not confuse when linking.

## Linking Summary

- New links added: [[TSC]], [[Rheb]], [[AMPK]], [[RAS]], [[Gap Junction]], [[GAPDH]], [[Neurodegeneration]]
- Suggested notes to create: [[Neurofibromin]], [[NF1]], [[RASA1]], [[RASA2]], [[ARHGAP]], [[Rho]], [[Cdc42]], [[GTPase]], [[GDI]], [[GEF]], [[Neurofibromatosis type 1]], [[Tuberous sclerosis complex]], [[Charcot–Marie–Tooth disease]], [[Gyp5]], [[IQGAP1]], [[Hamartin]], [[Tuberin]]
- Strong connections to strengthen: [[GAP]] ↔ [[TSC]] ↔ [[Rheb]] ↔ [[mTORC1]], [[GAP]] ↔ [[RAS]] ↔ [[NF1]]