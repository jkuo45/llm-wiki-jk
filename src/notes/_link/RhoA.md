---
title: RhoA
description: 'RhoA (Ras homolog family member A) is a 21 kDa Rho-family small GTPase
  that acts as a GDP/GTP switch downstream of integrins, cadherins and GPCRs.
  Through ROCK and mDia it assembles stress fibers and focal adhesions, raises
  actomyosin contractility, and drives cytokinesis.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - signaling
  - gtpase
aliases: [Ras Homolog Family Member A, RHOA, small GTPase RhoA]
---

# RhoA

RhoA is a 21 kDa Rho-family small GTPase — with RhoB and RhoC the
prototypical "Rho" subgroup — and the central regulator of actomyosin
contractility. Unlike [[Rac1]], whose output is protrusion, RhoA's output is
tension: stress fibers, focal adhesions, the contractile ring in cytokinesis,
and rear-end retraction during migration.

## Structure and domains

RhoA carries the canonical Ras-superfamily **G domain** — P-loop, Switch I,
Switch II, N/TKXD and ExSAK motifs — plus a Rho-specific insert region and a
C-terminal **hypervariable region** ending in a CAAX box. Because RhoA carries
two extra N-terminal residues relative to RAS, numbering is offset: **G14,
G15 and Q63** in RhoA correspond to G12, G13 and Q61 in RAS and Rac1. Those
residues matter, because the engineered G14V and Q63L alleles are the
standard gain-of-function constructs.

RhoA is geranylgeranylated at the CAAX cysteine, cleaved, and
carboxyl-methylated, which is what anchors it to membranes — and to specific
membranes at specific moments. RhoA localization is unusually controlled:
[[RhoA]] is recruited to the cleavage furrow by Ect2 during cytokinesis, and
its membrane association is modulated by PKA phosphorylation of Ser188 and by
RhoGDI extraction.

## Mechanism

1. **Off.** GDP-bound, largely sequestered in the cytosol by RhoGDI.
2. **Activation.** RhoGEFs — p115RhoGEF/ARHGEF1, LARG/ARHGEF12, PDZ-RhoGEF,
   Ect2, Vav — are recruited by Gα12/13-coupled GPCRs, Src-family kinases
   downstream of [[Integrin]] and [[Cadherin]] adhesion, or in the case of
   Ect2, to the mitotic spindle. GEFs catalyze GDP release.
3. **On.** GTP-RhoA recruits effectors.
4. **Termination.** RhoGAPs (p190RhoGAP, ARHGAP26, ARHGAP29) accelerate
   hydrolysis; RhoGDI re-sequesters.

> [!info] Two effectors do most of the work
> **ROCK** (Rho-associated coiled-coil kinase; ROCK1 and ROCK2 share 92%
> identity in their kinase domains) is a serine/threonine kinase that
> phosphorylates the myosin-binding subunit of myosin phosphatase (MYPT1),
> inactivating it, and can also phosphorylate myosin light chain directly.
> Net effect: more phosphorylated myosin light chain, more myosin II
> cross-linking, more tension.
> **mDia1/mDia2** (diaphanous formins) nucleate and polymerize long, straight
> actin filaments and align microtubules. Neither can build a coherent
> stress fiber alone: active ROCK alone produces disorganized random bundles,
> and mDia is needed to correct that — so the two antagonize in detail while
> cooperating in output.

## Physiological roles

- **Stress fibers and focal adhesions.** Adhesion through [[Integrin]] and
  [[Cadherin]] activates RhoA; ROCK then phosphorylates LIM-kinase, which
  phosphorylates and inactivates cofilin, stabilizing filaments. Adhesions
  mature from small focal complexes into elongated focal adhesions as Rho
  activity rises.
- **Migration.** RhoA supplies the contractile force for cell-body retraction
  and rear detachment. Where [[Rac1]] drives lamellipodial migration, high
  RhoA/ROCK can switch cells to a bleb-driven, integrin-independent amoeboid
  mode.
- **Cytokinesis.** Ect2 delivers RhoA to the cleavage furrow; RhoA with ROCK,
  mDia2 and myosin II assembles and constricts the contractile ring. Excess
  RhoA activity actively blocks abscission.
- **Contraction.** Smooth-muscle contraction, vasoconstriction, and
  neurohormonal responses to angiotensin II signalling run through
  RhoA/ROCK.
- **Tension-metabolism coupling.** In epithelial cells, force on
  [[Cadherin]] junctions activates AMPK and glucose uptake, feeding
  RhoA/ROK contractility in a positive loop.

## Clinical and disease relevance

- **Cancer.** RhoA is deregulated across almost every stage of tumor
  progression. It is overexpressed in [[Breast Cancer]] and hyperactive in
  gastric cancer, where it drives G1–S transition; it is required for tumor
  [[Angiogenesis]] (Gα13 knockout in endothelium normalizes tumor vessels).
  Human tumors also carry RhoA mutations: **G17V** in a majority of
  angioimmunoblastic T-cell lymphomas — which behaves more like a
  dominant-negative than an activator — and **R5Q, G17E, Y42C** in about 25%
  of diffuse-type gastric carcinoma. RHOA Y42C impairs PKN binding while
  leaving ROCK1 and mDia2 signaling intact, and cooperates with
  [[Cadherin]]/E-cadherin loss to drive diffuse gastric cancer.
- **Cardiovascular disease.** Excessive RhoA/ROK tone drives hypertension,
  vascular remodeling and [[Atherosclerosis]].
- **Fibrosis.** RhoA–ROCK signaling in fibroblasts and myofibroblasts
  sustains [[Fibrosis]] and high myofibroblast contractility.

> [!warning] Therapeutic reality check
> RhoA has no approved inhibitor. The tractable levels are the ROCK kinase
> (fasudil approved in Japan for cerebral vasospasm; Y-27632 and AT13148 as
> tool/clinical-stage compounds) and prenylation (PTX-100 blocks
> geranylgeranyltransferase-1, in early trials). Direct RhoA ligands Rhosin and
> CCG-1423 are tool compounds.

## Documents

- [[_document_ - mTOR signaling at a glance|mTOR signaling at a glance]] — states that mTORC2 controls actin cytoskeletal organization via PKCα and paxillin phosphorylation and the GTP loading of RhoA and Rac1.

## Connections

- [[Rac1]] — its functional counterpart in migration: Rac1 protrudes the leading edge, RhoA contracts the rear; the RhoA/Rac1 balance sets motility mode.
- [[Integrin]] — adhesion through integrins activates RhoA via Src-family kinases, the main route into stress-fiber and focal-adhesion formation.
- [[Actin Cytoskeleton]] — RhoA builds the actomyosin architecture: stress fibers, contractile ring, and the retracted rear during migration.
- [[Focal Adhesion]] — RhoA/ROCK activity controls focal adhesion maturation and turnover, the mechanical anchor for migration.
- [[Cell Migration]] — the process RhoA serves by providing contractility for rear detachment and, at high levels, bleb-driven motility.
- [[mTORC2]] — mTORC2-dependent GTP loading of RhoA links nutrient and growth signaling to cytoskeletal organization.
- [[AMPK]] — participates in the tension-metabolism positive loop with RhoA/ROCK.

## Linking Summary

- New links added: [[Rac1]], [[Integrin]], [[Cadherin]], [[Actin Cytoskeleton]], [[Focal Adhesion]], [[Cell Migration]], [[Cell Adhesion]], [[AMPK]], [[Angiogenesis]], [[Breast Cancer]], [[Atherosclerosis]], [[Fibrosis]], [[Reactive Oxygen Species]], [[Myosin]], [[Angiotensin]], [[mTORC2]], [[Rho Kinase]], [[mDia1]], [[RhoB]], [[Cdc42]], [[RhoGDI]], [[Ect2]], [[ROCK2]]
- Suggested notes to create: [[Rho Kinase]], [[ROCK1]], [[ROCK2]], [[mDia1]], [[mDia2]], [[RhoGDI]], [[Ect2]], [[RhoB]], [[RhoC]], [[LIM-Kinase]], [[Cofilin]], [[Myosin Light Chain]], [[Angioimmunoblastic T-cell Lymphoma]], [[Diffuse Gastric Cancer]], [[Arp2/3]]
- Strong connections to strengthen: [[RhoA]] ↔ [[Rac1]], [[RhoA]] ↔ [[Actin Cytoskeleton]], [[TSC]] ↔ [[Rheb]]