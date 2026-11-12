---
title: Gasdermin D
description: A pore-forming effector protein cleaved by inflammatory caspases to execute pyroptosis and drive IL-1 family cytokine release.
protected: true
created: 2026-07-25
updated: 2026-11-11
tags: [protein, cell-death, inflammation, inflammasome]
url: #
source: #
aliases: [GSDMD]
---

## Overview

Gasdermin D (GSDMD) is the central executioner of inflammatory cell death ([[Pyroptosis]]). In its resting state it is auto-inhibited: a C-terminal domain occludes the N-terminal pore-forming domain. Proteolytic cleavage by inflammatory caspases releases the N-terminal fragment, which oligomerizes in the plasma membrane to form pores, causing osmotic lysis, release of cytosolic contents, and extrusion of mature [[IL-1β]] and [[IL-18]].

## Mechanism / Structure

GSDMD contains two functional domains: an N-terminal pore-forming domain and a C-terminal inhibitory/autoinhibitory domain connected by a short linker. Cleavage at a single site (between the domains) relieves autoinhibition.

> [!info] Canonical cleavage events
> - **Caspase-1** (canonical inflammasome, e.g. the [[NLRP3 Inflammasome]]) cleaves GSDMD to release the pore-forming N-terminal fragment.
> - **Caspase-4/5** (human) and **Caspase-11** (mouse) — the noncanonical inflammasome — also cleave GSDMD downstream of intracellular LPS sensing.
> - The N-terminal fragment oligomerizes and inserts into membranes, forming ~10–20 nm pores selective for small molecules and ions while permitting the non-classical secretion of IL-1β/IL-18.

The pore itself is the lethal lesion: cellular swelling, loss of membrane integrity, and inflammatory death follow. Because the pores are wide enough to allow passage of IL-1β and IL-18 (which lack classical signal peptides), GSDMD physically couples pyroptotic death to cytokine release.

## Role in Senescence and Inflammation

In senescent and responding cells, GSDMD-mediated pyroptosis links innate immune sensing to the inflammatory milieu. The [[NLRP3 Inflammasome]] senses stress signals — including mitochondrial [[Reactive Oxygen Species]] and potassium efflux — and activates Caspase-1, which in turn cleaves GSDMD. This positions GSDMD at the intersection of metabolic stress, inflammasome activation, and the broader inflammatory secretome that overlaps with [[SASP]] biology.

> [!warning] Pyroptosis vs. apoptosis
> Pyroptosis is inherently inflammatory (membrane rupture, IL-1β/IL-18 release), in contrast to the immunologically silent cellular dismantling of [[Apoptosis]]. The pore-forming action of GSDMD is what confers this inflammatory character.

## Clinical & Research Significance

GSDMD is a promising therapeutic target for inflammatory and infectious diseases, and inhibitors of GSDMD pore formation are under investigation. Its role in inflammasome-driven tissue damage connects it to chronic inflammatory states, including those driven by sterile senescence-associated inflammation. Understanding GSDMD cleavage helps explain how metabolic and microbial danger signals convert into executive cell death and cytokine storms.

## Role in NETosis

> [!info]
> Source: [[_document_ - Neutrophil Extracellular Traps in Host Defense]]
> GSDMD is the shared executioner of [[Suicidal NETosis]] and [[Noncanonical NETosis]], and its inhibition is proposed as a therapeutic route in NET-associated disease (Chen et al. 2018; Sollberger et al. 2018). During PMA-induced suicidal NETosis, [[Neutrophil Elastase]] cleaves GSDMD to GSDMD-p30, which forms pores in granule and plasma membranes; a GSDMD inhibitor blocked PMA-induced NETosis without affecting NADPH oxidase, NE, or MPO function. During noncanonical NETosis, [[Caspase-4]]/[[Caspase-11]] cleave GSDMD; GSDMD-p30 pores permeabilize nuclear and granule membranes and allow caspase-11 nuclear access to degrade histones. GSDMD-p30 also binds cardiolipin, phosphatidylinositol phosphates, and phosphatidylserine and directly targets bacterial membranes, while GSDMD-dependent [[NLRP3]] activation drives [[IL-1β]] secretion that recruits neutrophils to kill NET-entrapped bacteria. [[Vital NETosis]] is the GSDMD-independent, membrane-preserving arm.

> [!info] Source: [[_document_ - Mitochondrial dysfunction and inflammaging a mechanistic bridge between bioenergetic failure and senescence|Nesci & Algieri 2026]]
> GSDMD can act on mitochondrial membranes in a [[Cardiolipin|cardiolipin]]-dependent manner, promoting depolarization, ROS production, mitochondrial permeabilization, and release of mitochondrial DAMPs that further amplify pyroptotic signalling.

## Documents
- [[_document_ - Neutrophil Extracellular Traps in Host Defense]] — Burgener & Schroder 2020 review identifying GSDMD as the convergent NETosis executioner and GSDMD inhibitors as candidate NET-disease therapeutics.
- The knowledge-graph triple contexts (caspase-cleaves-GSDMD / NLRP3 inflammasome entries) were the source for this entity note.
- [[_document_ - Mitochondrial dysfunction and inflammaging a mechanistic bridge between bioenergetic failure and senescence|Nesci & Algieri 2026 — Mitochondrial dysfunction and inflammaging]]: Adds cardiolipin-dependent mitochondrial permeabilization by GSDMD as an amplification loop.

## Connections
- [[Caspase-5]]: Cleaves GSDMD in noncanonical inflammasome signaling, releasing the pore-forming fragment.
- [[Caspase-4]] / [[Caspase-11]]: Cleave GSDMD during [[Noncanonical NETosis]]; caspase-11 then accesses chromatin through GSDMD-p30 nuclear pores.
- [[NLRP3 Inflammasome]]: Activates Caspase-1, which cleaves GSDMD to drive pyroptosis.
- [[Pyroptosis]]: GSDMD pore formation is the execution step of pyroptotic cell death.
- [[Suicidal NETosis]]: NE cleaves GSDMD to GSDMD-p30; pore-driven granule and plasma-membrane rupture releases NETs.
- [[Noncanonical NETosis]]: Caspase-4/11–GSDMD axis drives lytic NET extrusion independently of NE, MPO, and PAD4.
- [[Neutrophil Elastase]]: The protease that cleaves GSDMD in suicidal NETosis.
- [[Vital NETosis]]: The GSDMD-independent, membrane-preserving NETosis pathway.
- [[NETosis]] / [[Neutrophil Extracellular Traps]]: GSDMD-driven NET release and the extruded product.
- [[IL-1β]]: Released non-classically through GSDMD pores; recruits neutrophils to kill NET-entrapped bacteria.

## Linking Summary
- New links added: [[Caspase-5]], [[NLRP3 Inflammasome]], [[Pyroptosis]], [[IL-1β]], [[IL-18]], [[Reactive Oxygen Species]], [[Apoptosis]], [[SASP]], [[Caspase-4]], [[Caspase-11]], [[Neutrophil Elastase]], [[Suicidal NETosis]], [[Noncanonical NETosis]], [[Vital NETosis]], [[NETosis]], [[Neutrophil Extracellular Traps]], [[NLRP3]], [[_document_ - Neutrophil Extracellular Traps in Host Defense]]
- Suggested new entity notes to create: [[GSDMD-p30]], [[GSDMD inhibitor]]
- Strong connections to strengthen: [[NLRP3 Inflammasome]] ↔ [[Gasdermin D]] ↔ [[Pyroptosis]], [[Gasdermin D]] ↔ [[NETosis]]
