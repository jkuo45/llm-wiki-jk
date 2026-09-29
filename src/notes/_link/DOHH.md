---
title: DOHH
description: Deoxyhypusine hydroxylase, the nonheme diiron monooxygenase that catalyses the second and final step of hypusine biosynthesis, hydroxylating deoxyhypusine on eIF5A to hypusine while reducing molecular oxygen. Reported human DOHH variants cause a neurodevelopmental disorder with hypotonia and intellectual disability, and DOHH is a proposed anti-cancer target.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [enzyme, protein, post-translational-modification, translation, metalloenzyme]
aliases: [Deoxyhypusine hydroxylase, DOHH, EC 1.14.11.-]
---

# DOHH

**Deoxyhypusine hydroxylase** (DOHH) is the second and final enzyme of the [[Hypusination|hypusine pathway]]. It hydroxylates the *deoxyhypusine* intermediate produced by [[DHPS]] on [[eIF5A]] to give hypusine, and in doing so completes the activation of eIF5A into the functional elongation factor.

> [!info] Mechanism
> DOHH is a **nonheme diiron monooxygenase**. It activates molecular O₂ at a diiron centre, one Fe in each of two dyad sites, and inserts one oxygen atom into the 1,3-diaminopropane-derived deoxyhypusine side chain at the carbon that DHPS created. The other oxygen atom from O₂ is released as water, and the enzyme is Fe(II)-dependent and heat-stable. It is not a P450 enzyme despite the hydroxylation chemistry — the geometry and the two-iron architecture are different.

> [!warning] The Fe stoichiometry is not fully settled
> Early work on recombinant human DOHH reported oxygen- and iron-dependent activity with an *estimated* iron:holoprotein stoichiometry. The absolute number of iron atoms per subunit, and how much of it is catalytically vs. structural, has been an open question. Treat any specific stoichiometry claim with caution.

## Structure

DOHH is a **HEAT-repeat protein**. The tandem HEAT repeats form a right-handed α-solenoid that wraps around the substrate protein rather than cleaving it — DOHH binds eIF5A across an extended surface and hydroxylates a single residue in place, with no proteolytic step. Each of the two dyads contains a strictly conserved His-Glu motif; the iron-binding residues derived from these motifs form the two proposed Fe coordination sites. This repeated, surface-engulfing architecture is characteristic of the HEAT-repeat family (Huntingtin, Elongation Factor 2, and many others in this vault).

## Localization and regulation

DOHH is predominantly cytosolic, like the substrate it modifies. It has also been reported to localise to the nucleus under some conditions — this matters because it means hypusination is not purely a cytoplasmic event and could be spatially restricted.

DOHH activity, and therefore hypusine levels, is coupled to oxygen availability. That coupling is not incidental: DOHH consumes O₂ stoichiometrically, so hypoxia limits the second step of the pathway while the DHPS step, which does not require O₂, can still proceed. The result is accumulation of the deoxyhypusine intermediate under hypoxia — a genuinely elegant molecular link between the vitamin/hypoxia axis and protein synthesis.

## Pharmacology

DOHH is a pharmacologically tractable node that [[DHPS]] is not, precisely because it requires iron and O₂:

- **Ciclopirox** (an antifungal hydroxypyridone), **deferiprone** (an oral iron chelator) and **mimosine** (a naturally occurring amino acid analogue) are all reported to inhibit DOHH and are used to block hypusination at the second step.
- Iron chelation therefore both induces [[Hypoxia]] signalling and blocks hypusine synthesis — two independent effects that have been confounded in some published work on iron metabolism and translation.

> [!warning] Clinical caveat
> DOHH has no approved inhibitor, and none of the agents above is selective enough for systemic hypusine blockade. Deferiprone and ciclopirox have clinical uses in unrelated indications (iron overload; topical antifungal) but not as hypusination inhibitors. A 2023 review (Ofek, *Int J Cancer*) reports that DOHH silencing inhibits migration, invasion and endothelial sprouting in glioblastoma cells and points to a possible link with epithelial–mesenchymal transition; that is a cell-culture result, not a demonstrated mechanism in vivo.

## Clinical significance

Biallelic human DOHH variants have been reported in individuals with a neurodevelopmental disorder characterised by hypotonia, intellectual disability and movement disorder. The clinical picture overlaps substantially with that of DHPS deficiency, which is expected: the two enzymes act in series on the same single protein, so partial loss of either produces reduced hypusine.

Whole-body *Dohh* knockout is embryonic lethal in mice, as are knockouts of *Eif5a* and *Dhps*. Hypusination is therefore a developmental requirement, not merely a support pathway for adult growth.

In cancer, the hypusine pathway is a genuine dependency. Several human tumours have elevated DHPS and DOHH expression, and this has motivated the exploration of the pathway as a therapeutic vulnerability — though note that a *complete* block would also shut down the proliferation it is meant to treat, which is the central pharmacological difficulty.

## Documents

- [[Hypusination]] — the process of which DOHH is the second and terminal enzyme.
- [[DHPS]] — the upstream enzyme whose product DOHH hydroxylates; the two cannot act independently.
- [[eIF5A]] — the only protein of physiological significance that carries hypusine, and therefore DOHH's only relevant substrate.
- [[Hypoxia]] — O₂ is a required cosubstrate for DOHH, so oxygen status directly limits hypusine completion.

## Connections

- [[DHPS]] — the obligate upstream partner. DHPS creates the deoxyhypusine intermediate; DOHH hydroxylates it. Loss of either blocks hypusination of eIF5A with the same downstream consequence.
- [[eIF5A]] — the substrate. Because only one protein in the cell is hypusinated, DOHH sits directly on the pathway that sets translational capacity, and reduced hypusine stalls elongation of polyproline-containing transcripts.
- [[Hypoxia]] — the direct biochemical coupling. DOHH requires O₂, so hypoxia selectively blocks the second step of hypusination and traps the pathway at the deoxyhypusine intermediate. The same O₂ requirement is why iron chelators inhibit this step.
- [[Iron]] — the catalytic cofactor, and the mechanistic reason [[Deferiprone]]-type chelators block hypusination. The iron–oxygen axis links this enzyme to redox biology, to ferroptosis, and to HIF-1 stabilising drugs such as ciclopirox.
- [[Translation Initiation]] — hypusinated eIF5A is required for efficient elongation; reduced DOHH activity means reduced protein synthesis capacity independent of any mitogenic signal.
- [[Embryogenesis]] — Dohh knockout is embryonic lethal, establishing this enzyme as a developmental requirement and a direct link from the polyamine–hypusine axis to embryonic development.
- [[Neurodegeneration]] — the DOHH and DHPS deficiency phenotypes are neurological, and hypusine pathway dysregulation is a recurring feature in neurodegenerative disease literature; the mechanistic connection in human disease is still developing.

## Linking Summary
- New links added: [[DHPS]], [[eIF5A]], [[Hypusination]], [[Hypoxia]], [[Iron]], [[Translation Initiation]], [[Embryogenesis]], [[Neurodegeneration]], [[Deferiprone]], [[Ciclopirox]], [[Reactive Oxygen Species]]
- Suggested notes to create: [[Hypusine]], [[Deoxyhypusine]], [[Mimosine]], [[DOHH Deficiency]], [[Nonheme Diiron Monooxygenase]], [[HEAT Repeat]], [[Ciclopirox]], [[Deferiprone]]
- Strong connections to strengthen: [[DOHH]] ↔ [[DHPS]], [[DOHH]] ↔ [[Iron]], [[eIF5A]] ↔ [[Translation Initiation]]
