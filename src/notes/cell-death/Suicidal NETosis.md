---
title: Suicidal NETosis
description: Lytic NETosis pathway in which NADPH oxidase-derived ROS, MPO-mediated neutrophil elastase release, and GSDMD pore formation drive chromatin decondensation, plasma-membrane rupture, and neutrophil death.
protected: true
created: 2026-11-09
updated: 2026-11-09
tags: [cell-death, neutrophil, innate-immunity, inflammation]
url: #
source: #
aliases: [PMA-induced NETosis, lytic NETosis, suicidal NET formation]
---

# Suicidal NETosis

**Suicidal NETosis** is the first-described and best-characterized [[NETosis]] pathway: NET extrusion coupled to neutrophil death. It was observed in 2004 in neutrophils stimulated with high doses of phorbol-12-myristate-13-acetate ([[PMA]]), which remains the standard in vitro NETosis stimulant (Brinkmann et al. 2004). PMA activates [[PKC]] and drives assembly of [[NADPH Oxidase]]; the resulting [[Reactive Oxygen Species|ROS]] trigger [[Myeloperoxidase]] activation and cytosolic release of [[Neutrophil Elastase]], culminating in chromatin decondensation and NET expulsion through [[Gasdermin D]] pores or GSDMD-driven membrane tears.

> [!info]
> Source: [[_document_ - Neutrophil Extracellular Traps in Host Defense]]
> Suicidal NETosis is defined by an NE-, MPO-, and ROS-dependent axis. Ionophores (A23187, nigericin) also trigger suicidal NETosis through a poorly characterized mechanism independent of NE, MPO, and ROS, so the exemplar pathway is not the only route to lytic NET release (Neeli and Radic 2013; Kenny et al. 2017).

## Upstream signaling: NADPH oxidase

- PMA stimulation up-regulates [[Glycolysis]], which is required for NET expulsion (Rodríguez-Espinosa et al. 2015; Siler et al. 2017).
- Glucose uptake induces [[ERK2|ERK]] signaling, which phosphorylates [[p47phox]], a cytoplasmic regulatory subunit of NADPH oxidase (El Benna et al. 1996; Hakkim et al. 2011).
- Phosphorylated p47phox is recruited to granule and plasma membranes, where it assembles the NADPH oxidase complex that generates [[Superoxide]] (Dang et al. 1999; Dinauer 2016).
- ERK-pathway inhibitors block NADPH oxidase function and PMA-induced NET release. NET release is also suppressed in neutrophils lacking Rac2, a small GTPase required for NADPH oxidase function, and in neutrophils from [[Chronic Granulomatous Disease]] patients deficient in NADPH oxidase (Lim et al. 2011; Gavillet et al. 2018; Bianchi et al. 2009; Röhm et al. 2014).
- Gene therapy restoring NADPH oxidase function in a CGD patient reinstated NET production that inhibited *Aspergillus nidulans* growth, consistent with a host-defense role for ROS-dependent NETs against *Aspergilli* (Bianchi et al. 2009).

## Granule proteases and the azurosome

In resting neutrophils, NE clusters with MPO, azurocidin, CatG, defensin-1, lysozyme, and lactoferrin in an azurophil-granule complex termed the **azurosome**. NADPH-oxidase-derived ROS activate MPO and dissociate MPO and NE from the azurosome, releasing NE into the cytosol by a mechanism that requires intracellular MPO activity (Metzler et al. 2011, 2014).

- Murine NE deficiency prevents NET formation during in vivo *Klebsiella pneumoniae* challenge (Papayannopoulos et al. 2010).
- Neutrophils with partial MPO deficiency still form NETs on *C. albicans* exposure; MPO-deficient neutrophils cannot (Metzler et al. 2011).
- Cytosolic NE binds [[Actin]] and degrades F-actin, causing actin disassembly and neutrophil immobilization. Nuclear NE cleaves and inactivates histones H4 and H2B, driving chromatin relaxation and DNA decondensation. MPO acts synergistically with NE in this step (Metzler et al. 2014; Papayannopoulos et al. 2010).

## Histone citrullination is dispensable here

[[PAD4]]-dependent histone citrullination often accompanies suicidal NETosis but is generally dispensable for NET extrusion in this pathway, because NE-dependent histone cleavage provides redundancy. PAD4 is activated by a cytosolic calcium spike induced by ionophores but not by PMA. PAD4 is instead crucial for chromatin decondensation in [[Vital NETosis]] (Neeli et al. 2008; Claushuis et al. 2018; Guiducci et al. 2018).

> [!tip]
> Source: [[_document_ - Neutrophil Extracellular Traps in Host Defense]]
> PAD4 requirement is pathway-specific, not a universal NETosis marker: dispensable in suicidal NETosis, essential in vital NETosis, and dispensable in [[Noncanonical NETosis]].

## Gasdermin D as executioner

[[Gasdermin D]] is cleaved to the pore-forming GSDMD-p30 fragment. During PMA-induced suicidal NETosis, NE cleaves GSDMD, generating pores in plasma and granule membranes. A GSDMD inhibitor blocked PMA-induced NETosis without affecting NADPH oxidase, NE, or MPO function, isolating membrane permeabilization as the required terminal step (Sollberger et al. 2018).

The resulting feedforward model (Fig. 2 of the source review): ROS → MPO activation and azurosome dissociation → MPO-driven NE release → NE cleaves GSDMD to p30 → GSDMD pores rupture granules → further NE release and GSDMD cleavage → NE translocates to the nucleus and clips histones → chromatin expands and mixes with granule contents → GSDMD-p30 pores rupture the plasma membrane → NET release and neutrophil death.

## Documents

- [[_document_ - Neutrophil Extracellular Traps in Host Defense]] — Burgener & Schroder 2020 review defining the suicidal pathway and its NE/MPO/ROS/GSDMD model.
- [[NETosis]] — umbrella program; detection markers and blockade panel.
- [[Neutrophil Extracellular Traps]] — the extruded product.

## Connections

- [[NETosis]] — suicidal form is one of three NETosis pathways; all end in neutrophil death.
- [[PMA]] — defining pharmacological trigger and PKC activator.
- [[NADPH Oxidase]] — ERK/p47phox/Rac2-dependent ROS source; required for the canonical suicidal route.
- [[Reactive Oxygen Species]] — activates MPO and licenses azurosome dissociation.
- [[Myeloperoxidase]] — azurosome partner that gates NE release; synergizes with NE in chromatin decondensation.
- [[Neutrophil Elastase]] — degrades F-actin, clips histones H4/H2B, and cleaves GSDMD.
- [[PAD4]] — accompanies but is dispensable for suicidal NETosis due to NE-mediated histone clipping.
- [[Gasdermin D]] — pore-forming executioner shared with [[Noncanonical NETosis]].
- [[Chromatin]] — decondensation substrate released on nuclear-envelope breakdown.
- [[Chronic Granulomatous Disease]] — NADPH-oxidase deficiency abolishes ROS-dependent NETs; gene therapy restores them.
- [[Glycolysis]] — up-regulated on PMA stimulation and required for NET expulsion.
- [[Vital NETosis]] — contrast arm: PAD4-dependent, NADPH-oxidase-independent, membrane-preserving.

## Linking Summary

- New entity note in `src/notes/cell-death/` (topic home: a regulated cell-death modality).
- New links added: [[NETosis]], [[PMA]], [[PKC]], [[NADPH Oxidase]], [[ERK2]], [[p47phox]], [[Glycolysis]], [[Superoxide]], [[Reactive Oxygen Species]], [[Myeloperoxidase]], [[Neutrophil Elastase]], [[PAD4]], [[Gasdermin D]], [[Chromatin]], [[Actin]], [[Chronic Granulomatous Disease]], [[Vital NETosis]], [[Noncanonical NETosis]], [[Neutrophil Extracellular Traps]], [[_document_ - Neutrophil Extracellular Traps in Host Defense]].
- Suggested new entity notes to create: [[Azurophil Granule]], [[Azurosome]], [[Rac2]], [[GSDMD-p30]], [[Cathepsin G]], [[Ionophores]], [[Klebsiella pneumoniae]].
- Strong connections to strengthen: [[Suicidal NETosis]] ↔ [[Neutrophil Elastase]], [[Suicidal NETosis]] ↔ [[Gasdermin D]], [[Suicidal NETosis]] ↔ [[NADPH Oxidase]].
