---
title: FYCO1
description: FYCO1 is an LC3-binding selective autophagy receptor that tethers autophagosomes to kinesin-1 motors for transport along microtubules toward the lysosome, where it also promotes cargo release.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - autophagy
  - selective-autophagy
  - cargo-receptor
aliases:
  - FYVE and coiled-coil domain-containing protein 1
  - Toca-1
  - KIAA1476
---

# FYCO1

FYCO1 (FYVE and coiled-coil domain-containing protein 1) is a selective
autophagy receptor and autophagosome transport factor. It was originally
identified through its FYVE domain, which binds phosphatidylinositol-3-phosphate
enriched on the phagophore and autophagosome membrane, and it is sometimes still
called Toca-1 in the older literature.

## Architecture

The protein is built from two classes of module, and that is the whole design:

- An **N-terminal FYVE domain** that binds PIP3-rich early endosomal and
  autophagic membranes, positioning the protein on the organelle.
- A **C-terminal LIR (LC3-interacting region)** that binds the LC3/GABARAP
  family of autophagosomal membrane proteins, tethering a second organelle
  onto the autophagosome.
- Three **LC3-interacting regions in total**, the third (LIR1) being the
  C-terminal one that does the transport work.

> [!info] The FYCO1 LIR is a textbook case of motif selectivity
> The LIR consensus is [W/F/Y]-X-X-[I/L/V], which is common across the
> proteome; specificity comes from the flanking residues. In FYCO1,
> Asp1285 at the +5 position makes the motif prefer LC3A/LC3B, because it
> forms a salt bridge with the LC3A/B His57, whereas the corresponding Glu in
> LC3C or Asp in GABARAP causes charge repulsion. D1277 at the -3 position
> anchors the motif electrostatically to LC3B Arg10. The structure of mouse
> LC3B bound to the FYCO1 LIR (Sakurai et al. 2017) showed that the C-terminal
> extension forms a short alpha-helix, not just a bare tetradipeptide. The
> D1285A mutant is the standard LC3-binding-deficient tool, and its use is what
> established that FYCO1's transport function is LIR-dependent rather than
> tethering-based.

## Transport function

FYCO1 links the autophagosome to the kinesin-1 motor [[KIF5B]] through its
N-terminal coiled-coil region, driving plus-end-directed, microtubule-based
transport of autophagosomes toward the cell periphery, where lysosomes are
concentrated. This is one of the two principal delivery routes by which
autophagosomes reach lysosomes; the other is non-processive, long-range
transport by contact with the ER along the plus end of the microtubule network.

> [!warning] Direction, and where the controversy is
> The direction of travel has been contested. FYCO1 has been reported to drive
> both anterograde (peripheral, plus-end, toward lysosomes) and retrograde
> (perinuclear) transport in different systems, and the resolution appears to
> depend on which kinesin is engaged and on the cell's lysosome position. The
> core, well-replicated claim is that FYCO1 couples autophagosomes to kinesin-1
> and thereby increases autophagosome delivery to lysosomes; the *direction* of
> that movement is context-dependent and should be treated as unsettled.

Delivery to the lysosome is a two-part event. FYCO1 is released by the
activity of the deubiquitinase USP8 and by [[TFE3]]-driven transcription, and
this release is what triggers cargo disengagement - the autophagosome lumen
opens and the contents are dumped. A receptor that is not removed holds the
lysosome hostage.

## Selective autophagy and disease

- **Xenophagy**: FYCO1 has been reported to participate in selective
  bacterial clearance of *Salmonella enterica* by recruitment, and
  independently in ER-phagy, in which it tethers ER-derived membrane to
  autophagosomes. Which selective-autophagy process it serves in a given cell
  is not fully settled.
- **Lipid homeostasis**: FYCO1 is required for autophagic degradation of lipid
  droplets - a component of the [[Lipophagy]] machinery.
- **Neurodegeneration**: FYCO1 is a modifier in genetic screens for Parkinson's
  disease and for lysosomal storage disease, consistent with its position at the
  autophagy-lysosome interface. The genetic evidence is stronger than the
  mechanistic evidence.
- **Viral infection**: coronaviruses block autophagic flux by interfering with
  lysosomal fusion; FYCO1 function is disrupted as a downstream consequence in
  several such studies, though it is not itself a viral target.

## Connections

- [[LC3]] — the autophagosomal membrane protein that FYCO1's LIR binds; FYCO1
  was one of the first LIR-containing proteins described.
- [[Atg8]] — the family name for the LC3/GABARAP paralogues; FYCO1's LIR is
  selective for the LC3A/LC3B subset rather than for GABARAPs.
- [[Rab7]] — defines the late endosome/lysosome compartment FYCO1 transports
  autophagosomes toward, and the retrieval machinery that releases FYCO1.
- [[KIF5B]] — the kinesin-1 heavy chain FYCO1 directly binds; this is the motor
  that converts FYCO1's tethering into directional transport.
- [[Lysosomal Localization]] — the endpoint of FYCO1's transport function and
  the reason its loss causes cargo to accumulate in peripheral autophagosomes.
- [[Autophagosome-lysosome fusion]] — the process FYCO1 accelerates by moving
  autophagosomes toward lysosomes rather than by catalysing fusion itself.
- [[Lysosome]] — the destination organelle; FYCO1's failure produces a
  peripherally enriched autophagosome population and impaired flux.
- [[Autophagosome]] and [[Vps34]] — the double-membrane vesicle FYCO1 attaches
  to, and the kinase that produces the PIP3 its FYVE domain reads.
- [[TFEB]] and [[TFE3]] — TFE3-driven transcription raises FYCO1 levels, and
  TFE3 also promotes FYCO1 disengagement from the autophagosome at the
  lysosome.
- [[Autophagy]] and [[Lipophagy]] — the bulk process and the specific
  cargo-selective process FYCO1 serves.
- [[p62]], [[NBR1]], [[OPTN]] — the other canonical soluble selective autophagy
  receptors; FYCO1 is the unusual one that also traffics.
- [[Rab5]] — the small GTPase whose phosphoinositide signature recruits the FYVE
  domain.

## Documents

- [[KIF5B]] — establishes the kinesin-1 motor FYCO1 engages for directional
  autophagosome transport.
- [[Lysosomal Localization]] — supplies the lysosome-position and
  lysosome-recycling framework that FYCO1's transport function serves.
- [[Rab7]] — provides the late endosome/lysosome Rab identity that FYCO1
  transport converges on and that governs FYCO1 release.

## Linking Summary

- New links added: [[LC3]], [[Atg8]], [[Rab7]], [[KIF5B]], [[Autophagosome-lysosome fusion]], [[Lysosome]], [[Autophagosome]], [[Vps34]], [[TFEB]], [[TFE3]], [[Autophagy]], [[Lipophagy]], [[p62]], [[NBR1]], [[OPTN]], [[Rab5]], [[Salmonella enterica]], [[FAM134B]], [[LIR]], [[USP8]]
- Suggested notes to create: [[LIR]], [[FYVE domain]], [[Kinesin-1]], [[ER-phagy]], [[Xenophagy]], [[USP8]], [[FAM134B]], [[Tollip]] — removed as already existing: Lipid Droplet, Selective Autophagy
- Strong connections to strengthen: [[FYCO1]] <-> [[Autophagy]] (the transport-vs-fusion distinction should be stated in the autophagy note), [[FYCO1]] <-> [[LC3]] (LIR selectivity mechanism), [[FYCO1]] <-> [[KIF5B]] <-> [[Lysosomal Localization]]
