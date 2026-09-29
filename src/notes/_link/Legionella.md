---
title: Legionella
description: Legionella is a genus of Gram-negative bacteria, chiefly L. pneumophila, transmitted by aerosolised water and causing Legionnaires' disease, a severe atypical pneumonia.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [bacterium, pathogen, innate-immunity, microbiology]
aliases: [Legionella pneumophila, Legionella bacteria]
---

# Legionella

**Legionella** is a genus of aerobic, Gram-negative, rod-shaped bacteria in the family
Legionellaceae. Its clinically dominant species, ***Legionella pneumophila***, causes
**Legionnaires' disease** — a severe, often fatal atypical pneumonia — and also
causes the milder Pontiac fever. Roughly 30 species are recognised; *L. longbeachae* is
the second most common human pathogen in the genus.

## Epidemiology and transmission

Legionella does not spread person-to-person. It persists and multiplies in
**aerosolised water systems** — cooling towers, plumbing, showers, fountains,
hospital potable water — where it forms biofilms. Outbreaks are linked to
aerosol-generating devices: the 1976 Philadelphia outbreak originated in a hotel
cooling tower; hospital cases cluster around contaminated water in units housing
immunocompromised patients. Risk factors include age over 50, smoking,
[[Diabetes Mellitus]], chronic lung disease, [[Cystic Fibrosis]], haematologic
malignancy, transplant, and corticosteroid or other immunosuppression. Because
municipal chlorination does not reliably eradicate it, and copper-silver
immobilisation and chlorine dioxide are used for building-level control,
the organism's environmental persistence is a persistent public-health problem.

## Virulence machinery

> [!info] The Dot/Icm secretion system
> *L. pneumophila* replicates inside host cells, which requires a type IVb secretion
> system, the **Icm/Dot (defective in organelle trafficking / intracellular
> multiplication)** T4SS. This is an ~80-protein machine related to the
> conjugation machinery of *Agrobacterium* and *Helicobacter*, assembled as a
> large inner and outer membrane spanning complex. It translocates roughly
> **300 effector proteins** into the host cell cytosol. That is an exceptionally
> large repertoire for one species, and it is the reason Legionella can remodel
> so many host compartments. The ATPase [[DotB]] powers substrate unfolding and
> translocation.

> [!info] Remodelling the phagosome
> The bacterium is taken up by [[Macrophage|macrophages]] into a phagosome but
> blocks fusion with lysosomes, creating a non-fusogenic, ribosome-studded
> **Legionella-containing vacuole (LCV)** that matures only under bacterial
> control. Key mechanistic points:
>
> - **Phosphoinositide signature.** The LCV is first coated with
>   [[PtdIns3P]] and acquires the [[Rab5]] early-endosome marker, then a
>   [[PtdIns4P]]-rich but [[Rab5|Rab7]]-deficient state, then later
>   [[PtdIns3P]] again. The bacterium actively generates and consumes these
>   lipids to hold the compartment in a maturation-blocked state.
> - **Effector cohorts.** MavQ, LepB and SidF together drive *de novo* synthesis
>   of [[PtdIns4P]] on the phagosome membrane; other effectors hydrolyse
>   phosphoinositides to block endolysosomal maturation.
> - **Reverse trafficking.** RavY and others recruit host trafficking machinery to
>   bring ER-derived vesicles to the LCV, expanding it and separating it from the
>   endomembrane compartment.
>
> Failure to build an LCV — for example in hosts defective in [[Toll-like Receptor]]
> pathways or with impaired cell-autonomous immunity — results in macrophage death
> by apoptosis or pyroptosis and dissemination.

### Other effectors relevant to host cell biology

- **[[Mitochondria]]** — several effectors (MavN, Lpg1329/LEaG) target mitochondrial
  dynamics and induce the mitochondrial unfolded protein response; the mitophagy
  machinery of the host is likewise recruited.
- **[[Leukotriene]] and host metabolism** — effectors and pore-forming toxins
  deplete host glutathione and disrupt NAD+ metabolism.
- **[[Interferon]] antagonism** — effectors suppress the type I interferon
  response and the RIG-I/MDA5 antiviral axis, which is a plausible mechanism for
  the low interferon levels in Legionella pneumonia.
- **Secretory pore formers** — [[Lpg113]] and [[Lpg250]]/Lpg251 disrupt host
  membrane integrity, driving the epithelial and endothelial injury that
  contributes to the characteristic hyponatraemia and multi-organ failure.

## Clinical features

Pontiac fever is a self-limited influenza-like illness with high attack rates and
no mortality. Legionnaires' disease is a biphasic pneumonia with high fever,
non-productive cough, and prominent constitutional and gastrointestinal symptoms
(relative bradycardia, hyponatraemia from inappropriate ADH, elevated LDH,
hypophosphataemia). Extrapulmonary manifestations — rhabdomyolysis, renal failure,
jaundice, abscesses — are uncommon but described, particularly in
immunosuppressed patients. Mortality in reported series ranges from about 5% in
otherwise healthy patients to well over 20% in those with severe
comorbidities.

Diagnosis is by urinary antigen (detects *L. pneumophila* serogroup 1, which causes
most cases; the test has good specificity but low sensitivity), culture on
buffered charcoal yeast extract agar, or PCR on respiratory samples. Culture
remains necessary for outbreak typing and is positive in fewer than half of cases.

Treatment is a macrolide (azithromycin) or a respiratory fluoroquinolone
(levofloxacin, moxifloxacin). Intensive support, particularly vasopressors for
septic shock, drives outcomes. The Infectious Diseases Society of America advises
against routine short-course antibiotic therapy after resolution of
symptomatology in the non-severe non-intubated patient, since the drugs are
bactericidal and the organism is cleared by host immunity.

> [!warning] Evidence caveat
> The claim that Legionella scavenges host nucleotides from the phagosome, and the
> "amoebal reservoir" model linking *Legionella* to environmental protozoa, rest on
> a substantial but not universally accepted evidence base. The core
> Dot/Icm–LCV paradigm is far better established than the sub-compartmental
> metabolic claims built on top of it.

## Documents

- [[PtdIns3P]] — the LCV cycles through defined phosphoinositide states, with
  Legionella effectors both synthesising ([[PtdIns4P]] via MavQ/LepB/SidF) and
  consuming these lipids; this note's mechanism section is the direct source of
  the link.
- [[Rab5]] — the LCV is decorated with the Rab5 early-endosome marker before
  transitioning through a Rab7-negative maturation-blocked state, which is the
  trafficking context the [[PtdIns3P]] link depends on.

## Connections

- [[Phagosome]] — The entire pathogenic strategy of Legionella is phagosome
  remodelling: the bacterium hijacks the [[Macrophage]] phagocytic pathway and then
  prevents lysosomal fusion to obtain a nutrient-rich replication niche. This makes
  Legionella a canonical case study in phagosome escape and host-organelle
  parasitism.
- [[PtdIns3P]] — Phosphoinositide identity defines endosomal maturation stages,
  and Legionella effectors manipulate those lipids to hold the LCV in a
  non-mature state.
- [[Rab5]] — Rab5 marks the early phagosome and is required for the maturation
  Legionella blocks; the recruitment is bacterial, not host, driven.
- [[Macrophage]] — Primary host cell and the site of replication; macrophage
  competence is the primary determinant of disease susceptibility.
- [[Innate Immunity]] — [[Toll-like Receptor]] signalling and the
  [[Interferon]] response are the host defences Legionella must evade, and
  [[RIG-I]]/[[MDA5]]-type antiviral axes are actively suppressed by effectors.
- [[Mitochondria]] — Several effectors manipulate mitochondrial dynamics and
  induce mitophagy, connecting Legionella infection to the vault's
  mitochondrial-quality-control literature.
- [[Reactive Oxygen Species]] — Macrophage-generated ROS and RNS are central to
  the respiratory burst response against Legionella and to the tissue injury that
  accompanies it.
- [[Biofilm]] — Environmental persistence and resistance to water treatment are
  biofilm-dependent and underpin the epidemiology.
- [[Leishmaniasis]] — Shares little mechanistically beyond the "intracellular
  macrophage parasite" framing; both illustrate how a pathogen's success depends
  on avoiding macrophage killing programmes.

## Linking Summary

- New links added: [[Diabetes Mellitus]], [[Cystic Fibrosis]], [[Phagosome]], [[Mitochondria]], [[Leukotriene]], [[Interferon]], [[Toll-like Receptor]], [[Innate Immunity]], [[RIG-I]], [[MDA5]], [[Reactive Oxygen Species]], [[PtdIns4P]], [[Biofilm]], [[Leishmaniasis]], [[DotB]], [[Lpg113]], [[Lpg1329]], [[LEaG]]
- Suggested notes to create: [[Legionella pneumophila]], [[Legionnaires Disease]], [[Pontiac Fever]], [[Type IV Secretion System]], [[Legionella-Containing Vacuole]], [[Dot/Icm T4SS]], [[Effector Protein]], [[Urinary Antigen Test]], [[PtdIns4P]], [[Biofilm]], [[Cystic Fibrosis]], [[Lpg250]], [[Lpg1329]]
- Strong connections to strengthen: [[Legionella]] ↔ [[Phagosome]], [[Legionella]] ↔ [[PtdIns3P]], [[Legionella]] ↔ [[Macrophage]]
