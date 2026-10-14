---
title: TSC
description: 'TSC is the tuberous sclerosis complex, a heterotrimer of TSC1 (hamartin),
  TSC2 (tuberin) and TBC1D7 that functions as a GTPase-activating protein for
  Rheb and thereby restrains mTORC1. Loss-of-function variants cause tuberous
  sclerosis complex disease; mTOR inhibitors are an approved treatment.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - signaling
  - tumor-suppressor
aliases: [Tuberous Sclerosis Complex, TSC1/TSC2 complex, hamartin-tuberin complex, TSCC]
---

# TSC

> [!info] Ambiguous term, handled two ways
> **TSC** means both the *protein complex* (TSC1/TSC2/TBC1D7) and the
> *disease* — **tuberous sclerosis complex** — the most common autosomal
> dominant cancer predisposition syndrome. This note covers the complex;
> [[TSC1]] and [[TSC2]] cover the subunits.

TSC is the principal negative regulator of [[mTORC1]]. It is not an enzyme
class but a GAP scaffold: its only well-defined biochemical action is to
accelerate GTP hydrolysis on [[Rheb]], the small GTPase that activates
mTORC1.

## Structure and domains

The human TSC complex was solved by cryo-EM in **2:2:1 stoichiometry** of
TSC1 : TSC2 : TBC1D7, with an arch-shaped architecture and pseudo-C2
symmetry.

- **TSC1 (hamartin)** — 1,164 residues, ~130 kDa. An N-terminal α-helical
  **HEAT repeat domain**, then a long (~350 Å) **coiled-coil** spanning roughly
  residues 645–969 and running to the very C-terminus. Two TSC1 coiled-coils
  interweave, and TBC1D7 stabilizes their dimerization. TSC1 has no catalytic
  activity; its roles are assembly, membrane/lysosome targeting (it binds
  WIPI3), and stability of TSC2.
- **TSC2 (tuberin)** — 1,807 residues, ~200 kDa. Predominantly α-solenoid:
  a N-terminal HEAT repeat domain (residues ~40–415), a **dimerization domain**,
  and the C-terminal **RapGAP-like catalytic domain** (residues ~1,523–1,807)
  that is specific for Rheb. The two TSC2 subunits form a tail-to-tail dimer,
  cradling the TSC1 coiled-coils, with the two GAP domains facing outward and
  accessible.
- **TBC1D7** — 267–293 residues, ~34 kDa, a small globular RabGAP-family
  protein (Rab17-specific in its own right) that stabilizes TSC1 dimerization
  and increases complex GAP activity.

The isolated TSC2 GAP domain has undetectable activity; TSC1 is required to
assemble a fully active GAP. Catalysis uses the canonical arginine-finger
mechanism, with an **"asparagine thumb" — N1643** — contacting the γ-phosphate
of Rheb-GTP; K1638, H1640 and L1641 shape that catalytic helix, and
mutations at H1640, L1641 or N1643 abolish GAP activity. TSC2's
RapGAP-like domain initially showed weak activity toward Rap1 and Rab5, which
is why Rheb took years to identify as the real substrate.

## Mechanism

With TSC present, Rheb is held in the GDP-bound state, and [[mTORC1]] is off.
Removing or inhibiting TSC lets Rheb-GTP accumulate and stimulate mTORC1.

TSC is therefore the cell's **integrator of growth conditions** — it sits
upstream of mTORC1 and converts four inputs into a Rheb/mTORC1 output:

| Input | Route |
|---|---|
| Growth factors / insulin | [[PI3K]] → [[Akt]] phosphorylates TSC2 at Ser939/Thr1462 → binds [[14-3-3]] → translocates off the lysosome → mTORC1 **on** |
| Growth factors / RAS–ERK | [[ERK1_2|ERK]] and [[RSK]] phosphorylate TSC2 |
| Energy depletion | [[AMPK]] phosphorylates TSC2, **increasing** GAP activity → mTORC1 **off** |
| Hypoxia | [[REDD1]] releases TSC2 from 14-3-3; [[PML]] and [[BNIP3]] disrupt mTOR–Rheb |
| Amino acids | mTORC1 regulation by amino acids is TSC-independent, via Rag GTPases and [[Raptor]] |

Because TSC integrates rather than merely relays, TSC1/TSC2 loss produces the
**highest constitutive mTORC1 activity** of any upstream lesion — the reason
TSC tumors are so mTOR-dependent. Loss of a single input gene ([[PTEN]],
LKB1/STK11, NF1) produces a milder increase.

Downstream, mTORC1 drives [[Protein Synthesis]] via S6K1 and 4E-BP1 and
suppresses [[Autophagy]] and [[Macroautophagy]]; TSC also feeds [[FOXO]]
transcription through mTORC1/S6K, and mTORC2-mediated [[Akt]] Ser473
phosphorylation is TSC-independent.

## Disease and clinical relevance

**Tuberous sclerosis complex (TSC)** is autosomal dominant, from inactivating
variants in *TSC1* (9q34) or *TSC2* (16p13.3), with *TSC2* variants more
frequent. Roughly 15% of clinically diagnosed patients have no identifiable
pathogenic variant. Manifestations are multisystem: cortical tubers,
subependymal giant cell astrocytomas, **epilepsy** (present in nearly all
patients, often refractory), intellectual disability and [[Autism]],
hypomelanotic macules, facial angiofibromas, shagreen patches, renal
angiomyolipomas, and cardiac rhabdomyomas. **Lymphangioleiomyomatosis** (LAM),
a cystic lung disease of women, occurs in about 30% of TSC patients and is a
leading cause of TSC mortality.

> [!important] TSC is the paradigm for mTOR-directed therapy
> Because loss of TSC constitutively activates mTORC1, mTOR inhibitors are
> mechanistically anchored rather than empirically borrowed. [[Everolimus]] is
> approved for TSC-associated SEGA and renal angiomyolipoma, and — following
> EXIST-3, where ~40% of high-dose patients achieved ≥50% seizure reduction
> versus 15% on placebo — for adjunctive treatment of TSC-associated
> refractory seizures. [[Rapamycin]] is approved for LAM and renal AML.
> Limiting factors are central: mTORC1 inhibitors cross the blood–brain
> barrier poorly, stomatitis and mucositis are near-universal, and because
> rapalogues are cytostatic, lesions regrow on withdrawal, so long-term
> treatment is required.

TSC also frames [[Aging]] and longevity research. Rapamycin's extension of
lifespan in mice is precisely a bypass of TSC-mediated mTORC1 restraint —
which is why TSC status (and rapamycin tolerance) is studied as a
germline determinant of the response.

## Documents

- [[_document_ - mTOR signaling at a glance|mTOR signaling at a glance]] — describes TSC as a heterodimer of TSC1 (hamartin) and TSC2 (tuberin) acting as a GTPase-activating protein for Rheb, and summarizes its integration of growth factor, energy, oxygen and amino acid signals upstream of mTORC1.
- [[_document_ - Rapamycin for longevity the pros, the cons, and future perspectives|Rapamycin for longevity: pros, cons & future perspectives]] — notes that sirolimus and everolimus are FDA-approved for TSC-related seizures, reports the EXIST-3 result, and describes TSC mouse models in which rapamycin prevented seizures and rescued neuropathology.

## Connections

- [[TSC1]] and [[TSC2]] — the two subunits of the complex; hamartin scaffolds and tuberin supplies the catalytic GAP domain.
- [[Rheb]] — the only well-established substrate: TSC2's GAP activity on Rheb is what sets mTORC1 output.
- [[mTORC1]] — TSC's principal downstream target; TSC loss gives the highest constitutive mTORC1 activity of any upstream lesion.
- [[Rapamycin]] and [[Everolimus]] — the approved drugs for TSC manifestations, working precisely because TSC makes mTORC1 constitutively active.
- [[mTORopathies]] — TSC is one of the canonical mTORopathies alongside PTEN, LKB1/STK11 and DEPDC5/NPRL2–NPRL3 (GATOR1) disease.
- [[Akt]] and [[14-3-3]] — the Akt-mediated inhibitory phosphorylation of TSC2 that releases it from the lysosome is the canonical growth-factor route to mTORC1 activation.
- [[AMPK]] — phosphorylates TSC2 to increase its GAP activity, so energy shortage suppresses mTORC1 through the same complex.
- [[Autophagy]] — mTORC1 suppression of autophagy is the downstream output TSC loss removes.
- [[FOXO]] — mTORC1/S6K phosphorylates FOXO, so TSC status determines FOXO-dependent stress-resistance transcription.

## Linking Summary

- New links added: [[TSC1]], [[TSC2]], [[Rheb]], [[mTORC1]], [[mTORC2]], [[mTOR]], [[mTORopathies]], [[Rapamycin]], [[Everolimus]], [[Epilepsy]], [[Autism]], [[Autophagy]], [[Macroautophagy]], [[14-3-3]], [[Raptor]], [[REDD1]], [[PML]], [[BNIP3]], [[AMPK]], [[Akt]], [[ERK1_2]], [[RSK]], [[PTEN]], [[FOXO]], [[Protein Synthesis]], [[4E-BP1]], [[Aging]], [[Longevity]], [[Hypoxia]], [[VHL]], [[Rac1]], [[RhoA]], [[NF1]]
- Suggested notes to create: [[TBC1D7]], [[Tuberous Sclerosis Complex Disease]], [[Lymphangioleiomyomatosis]], [[Angiomyolipoma]], [[Subependymal Giant Cell Astrocytoma]], [[DEPDC5]], [[NPRL2]], [[NPRL3]], [[Rag GTPase]], [[STK11]], [[Hamartin]], [[Tuberin]], [[NF1]] — removed as already existing: GATOR1, LKB1
- Strong connections to strengthen: [[TSC]] ↔ [[Rheb]], [[TSC]] ↔ [[mTORC1]], [[TSC]] ↔ [[Rapamycin]], [[TSC]] ↔ [[TSC1]] ↔ [[TSC2]], [[VHL]] ↔ [[Hypoxia]]