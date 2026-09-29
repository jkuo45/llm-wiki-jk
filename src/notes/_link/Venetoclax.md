---
title: Venetoclax
description: Venetoclax (ABT-199) is an orally bioavailable, BCL-2-selective BH3 mimetic that occupies the BCL-2 hydrophobic groove and displaces BH3-only activators to trigger mitochondrial outer membrane permeabilization; it is first-line in CLL and standard-of-care partner in AML.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - drug
  - pharmacology
  - chemical-compound
aliases: [ABT-199, GDC-0199, Venclyxto, Venclexta]
---

# Venetoclax

**Venetoclax** (ABT-199, GDC-0199) is the first successful small-molecule [[BH3 mimetics|BH3 mimetic]]
and the first drug to validate [[Bcl-2]] as a target. It is a large, poorly water-soluble
sulfonamide (C₄₅H₅₀ClN₇O₇S, MW 868.4) designed to occupy the hydrophobic BH3-binding
pocket of [[Bcl-2]] while avoiding the homologous pockets of [[Bcl-2 family|BCL-xL]] and
MCL-1. Initial FDA approval was 2016 for 17p-deleted relapsed/refractory CLL.

## Mechanism

BCL-2 is the anti-apoptotic anchor of the [[Bcl-2 family]]. It sequesters the BH3-only
activators BIM, BID and others in an inactive complex. Venetoclax binds the same groove
that a BH3 helix would occupy, competing for it with high affinity. This frees the
activators to engage BAX and BAK directly, causing:

[[Bcl-2]] inhibition → BH3-only displacement → [[BAX]]/[[BAK]] oligomerisation →
[[Mitochondrial outer membrane permeabilization]] → [[Cytochrome c]] release →
caspase activation → [[Apoptosis]].

> [!info] TP53 independence
> Because the drug acts downstream of the apoptotic machinery, its efficacy does not
> require intact [[p53]]. Responses in CLL are independent of 17p deletion, TP53 mutation,
> and TP53 function — a decisive advantage over cytotoxic chemotherapy in high-risk disease.

Killing is fast. In vitro, CLL cells begin dying within four hours at concentrations
achievable in vivo; LC50 at four hours was 820 nM, against roughly 300 nM after a 50 mg
dose and 1.3 µM after a 200 mg dose. Apoptotic cells were detectable in vivo within 6–24 h
of a single 20–50 mg dose.

## Clinical use

- **CLL/SLL** — fixed-dose 400 mg daily after a 5-week ramp (20 → 50 → 100 → 200 → 400 mg
  weekly). Also used with [[Obinutuzumab]] or rituximab.
- **AML** — in combination with [[Azacitidine]], [[Decitabine]], or low-dose cytarabine, in
  adults ≥75 or unfit for intensive induction. Shorter 3- or 4-day ramp (100/200/400 mg).
  Notably, venetoclax is *not* approved in multiple myeloma: adding it to bortezomib plus
  dexamethasone increased mortality, a warning carried on the label.

## Tumor lysis syndrome

> [!warning] The defining toxicity
> Because apoptosis is this fast, cell contents are released faster than the kidney can
> clear them. TLS occurred in 12–13% of early phase 1 patients using a 2–3 week ramp with
> higher starting doses, including two deaths and three cases of acute renal failure
> requiring dialysis. After the ramp was extended to five weeks with prophylaxis, TLS fell
> to **2%** in CLL monotherapy (168 patients), 1.1% with azacitidine, and 5.6% with
> low-dose cytarabine. Fatal TLS has been reported post-marketing after a single 20 mg
> dose. Biochemical changes consistent with TLS can appear within **6–8 hours** of the
> first dose.
>
> Management is structural, not discretionary: assess every patient for risk, give
> prophylactic hydration and anti-hyperuricaemics before the first dose, monitor
> potassium, uric acid, phosphorus, calcium and creatinine through the ramp, hospitalise
> high-burden patients, and dose-interrupt and re-titrate on interruption. Risk tracks with
> tumour burden, creatinine clearance <80 mL/min, and splenomegaly.

Other main toxicities are neutropenia (dose-limiting in practice, with febrile neutropenia
common in AML), infections, and anaemia. Strong CYP3A inhibitors are **contraindicated**
during ramp-up in CLL, because raising exposure raises TLS risk.

## Pharmacokinetics

Venetoclax is a CYP3A4/5 substrate and a P-gp substrate and inhibitor. It is eliminated
almost entirely by the faecal route after hepatic metabolism; the major metabolite M27 is
at least 58-fold less active. Dose reductions of 2-fold (moderate inducers/inhibitors) and
4-fold (strong CYP3A inhibitors) are prescribed when coadministration is necessary on a
stable dose.

## Biomarkers

[[BH3 profiling]] predicts response: the extent of mitochondrial depolarisation induced by
a BIM BH3 peptide in patient cells correlates with the depth of clinical response, whereas
standard cytotoxicity IC50s do not. This is unusual — a functional mitochondrial readout
outperformed conventional viability assays. High BCL-2 dependence is the predictive feature,
so AML with MECP2 or BAX/BCL2 alterations responds particularly well, while AML with TP53
or FLT3 abnormalities responds poorly.

## Resistance

Resistance arises by upregulating MCL-1 or BCL-xL (the paralogs venetoclax spares), by
mutating BCL-2 at residues contacting the drug, by amplifying MCL-1 through
[[MYC]]-driven mechanisms, or by reducing BCL-2 dependence itself as the clone selects
alternative survival pathways. Fixed-duration combination with a BCL-2 degrader is one
approach under study.

## Documents

- [[BH3 mimetics]]
  - Places venetoclax in the mimetic class and supplies the contrast with the earlier
    pan-BCL-2 agents whose platelet toxicity it avoided.
- [[BH3 profiling]]
  - Supplies the mitochondrial depolarisation assay validated as venetoclax's best
    available predictive biomarker.

## Connections

- [[Bcl-2]] — the drug's only meaningful target; its overexpression in CLL and AML is the
  reason the drug exists.
- [[BH3 mimetics]] — venetoclax is the class-defining member, and the first to achieve
  BCL-2 selectivity without the platelet toxicity of earlier pan-BCL-2 agents.
- [[BH3 profiling]] — the functional assay validated as the best available predictive
  biomarker for venetoclax response.
- [[Bcl-2 family]] — the pro-apoptotic and anti-apoptotic members that set which paralog
  venetoclax spares and which resistance pathway dominates.
- [[Mitochondrial outer membrane permeabilization]] — the decisive event venetoclax triggers;
  [[BAX]] and [[BAK]] are the effectors it releases.
- [[Chronic Lymphocytic Leukemia]] — the disease of approval and of greatest clinical impact;
  TP53-independent activity is what makes it valuable.
- [[Acute Myeloid Leukemia]] — second approved indication, always in combination with a
  hypomethylating agent or low-dose cytarabine.
- [[Cytochrome c]] and [[Apoptosis]] — the downstream effector cascade once BAX/BAK
  permeabilise the outer membrane.
- [[p53]] — its loss does not compromise venetoclax response, which is why the drug works
  where genotoxic chemotherapy fails.
- [[BH3-only Protein]] — the activators (BIM, BID) that venetoclax displaces and thereby frees.
- [[MCL-1]] — the principal bypass route; its upregulation is the commonest acquired
  resistance mechanism.
- [[Cytochrome P450 3A4]] — the enzyme governing venetoclax clearance and the driver of the
  dosing-interaction rules.

## Linking Summary

- New links added: [[Bcl-2]], [[BH3 mimetics]], [[BH3 profiling]], [[Bcl-2 family]],
  [[Mitochondrial outer membrane permeabilization]], [[BAX]], [[BAK]], [[Cytochrome c]],
  [[Apoptosis]], [[Chronic Lymphocytic Leukemia]], [[Acute Myeloid Leukemia]], [[p53]],
  [[MCL-1]], [[Obinutuzumab]], [[Azacitidine]], [[Decitabine]]
- Suggested notes to create: [[BH3-only Protein]], [[BH3 Peptide Profiling]] — removed as already existing: Mcl-1
  [[Obinutuzumab]], [[Azacitidine]], [[Tumor Lysis Syndrome]], [[MYC]], [[Bortezomib]],
  [[Cytochrome P450 3A4]], [[Ibrutinib]], [[Fludarabine]]
- Strong connections to strengthen: [[Venetoclax]] ↔ [[Bcl-2]],
  [[Venetoclax]] ↔ [[BH3 mimetics]], [[Venetoclax]] ↔ [[BH3 profiling]]
