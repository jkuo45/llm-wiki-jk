---
title: Endocytosis
description: Endocytosis is the vesicle-mediated internalisation of plasma membrane, extracellular fluid and membrane-bound cargo into a cell, delivering it to endosomes for sorting to recycling, retrograde transport, or lysosomal degradation.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - biological-process
  - cell-biology
  - membrane-trafficking
aliases:
  - endocytic uptake
  - receptor-mediated endocytosis
  - pinocytosis
---

# Endocytosis

Endocytosis is the process by which a cell invaginates a patch of its
[[Plasma Membrane]] and pinches it off as an intracellular vesicle, thereby
internalising membrane, bound cargo, and extracellular fluid. It is not a single
pathway but a family of them, and it is the only route by which macromolecules
too large to pass through transporters - proteins, lipoproteins, antibody
complexes, pathogens - enter a cell.

> [!info] Why the cell bothers
> Endocytosis is not merely a delivery mechanism. It is also the principal way a
> cell *regulates its own signalling*: removing a receptor from the surface ends
> its signal, and in several cases (notably [[Notch Signaling|notch]] and
> [[EGFR]]) the internalised receptor triggers a different signal from the
> endosome than it would from the membrane.

## The main routes

**Clathrin-mediated endocytosis (CME)** is the best-characterised and, in
most cells, the dominant route. Cargo bearing a cytoplasmic sorting motif -
typically a NPXY or di-leucine motif, or the aromatic-and-bulky-hydrophobic
signal used by the transferrin receptor - is bound by an adaptor complex
(AP-2) that also recruits [[Ubiquitin|clathrin]]. Clathrin polymerises into a
scaffold that bends the membrane; accessory proteins including
[[Cortactin|AP-2]] and dynamin stabilise the neck and drive scission. The
clathrin coat is stripped within seconds of internalisation, and the naked
vesicle fuses with the early endosome.

**Caveolin-dependent endocytosis** occurs at flask-shaped caveolae, membrane
invaginations stabilised by caveolin-1 and enriched in cholesterol and
glycosphingolipids. Caveolae appear to function partly as reversible membrane
reservoirs that buffer surface-area tension, not only as uptake portals.

**Clathrin- and caveolin-independent routes** are real and were badly
under-served by a two-pathway taxonomy. They include Arf6-driven tubular
uptake, the CLIC/GEEC endocytic carrier, and various lipid-raft-dependent
routes. Most are cholesterol-dependent and all of them are much less
mechanistically resolved.

**Phagocytosis** and **macropinocytosis** are the large-cargo and bulk-fluid
endpoints of the same machinery, used by [[Macrophages]] and by essentially every
cell type respectively.

## Endosomal sorting

Internalised cargo enters the early endosome, a Rab5-positive compartment with
a mildly acidic pH (~6.2-6.5). The low pH is functional, not incidental: it is
what dissociates many ligand-receptor pairs, so unbinding is triggered by the
same geometry that delivered the cargo.

From the early endosome there are three fates:

- **Recycling** back to the plasma membrane, either directly (fast recycling) or
  via the recycling endosome, with the RAB proteins [[Rab5]] handing off to Rab11.
  This returns both receptors and membrane lipids.
- **Retrograde transport** to the trans-[[Golgi apparatus]] or, for some cargo,
  straight to the cytosol. The LDL receptor recycles this way; the transferrin
  receptor shuttles iron in this way.
- **Degradation** in the [[Lysosome]], which requires delivery into
  multivesicular bodies.

Degradation-bound sorting is performed by the [[ESCRT]] machinery, which
invaginates the endosomal limiting membrane into intraluminal vesicles, thereby
sealing the cargo away from the cytosol and committing it to the lysosome.
ESCRT also recognises and removes ubiquitinated membrane proteins, which is why
endosomal sorting and [[Ubiquitination]] are functionally inseparable.

> [!info] The cholesterol loop
> PCSK9 binds the LDL receptor and redirects it from recycling to lysosomal
> degradation by engaging the ESCRT pathway. Blocking PCSK9 therefore lowers
> plasma LDL not by blocking absorption but by lengthening the receptor's
> surface half-life. This is the cleanest pharmacological proof that endocytic
> sorting decisions are rate-limiting for physiology.

## Relation to lysosomes, autophagy and nutrient sensing

The [[Endocytic Lysosome Reformation]] response means a cell that has
endocytosed a large load must rebuild lysosomal volume afterwards; without it
the lysosome dilutes, acidification fails, and autophagic and endocytic
degradation both stall. The autophagic pathway is mechanistically a cousin of
endocytosis: the [[Autophagosome]] is a double-membrane vesicle of endomembrane
origin, and autophagosome-lysosome fusion uses overlapping machinery with
endosomal fusion.

Endocytic trafficking is also wired into nutrient sensing. [[mTORC1]]
phosphorylates and activates [[TFEB]] and [[TFE3]] on the endolysosomal
surface; active mTORC1 holds them cytoplasmic, and only when mTORC1 is
inhibited - by [[Rapamycin]], by amino acid withdrawal, or by lysosomal
mTORC1-Lysosome Compartment failure - are the factors dephosphorylated, allowed
into the nucleus, and turned on to run the lysosomal biogenesis programme.

## Pathogen exploitation and disease

Endocytosis is also an immune hazard. Influenza, [[SARS-CoV-2]] and many other
enveloped viruses enter through endocytic uptake; endosomal acidification is
what triggers fusion and genome release. Several bacterial toxins
([[Cholera]] toxin, diphtheria toxin, ricin) rely on retrograde transport from
the endosome to the cytosol. [[Salmonella enterica]] translocates effector
proteins through the endosomal membrane via a type III secretion system.
[[BACE1]], the rate-limiting enzyme in amyloid-beta generation, is an
aspartyl protease that operates in the acidified endosomal/lysosomal
compartment - the reason [[Alzheimer's Disease]] risk genes that traffic
amyloid precursor protein change endosomal trafficking and therefore change
risk.

## Connections

- [[Plasma Membrane]] — the membrane whose area, lipid composition and protein
  content endocytosis continually remodels; compensatory endocytosis
  ([[Endocytic Lysosome Reformation]]) restores surface area after bulk uptake.
- [[Cell Membranes]] — the physical substrate: endocytosis is membrane
  deformation, so curvature-generating proteins and the phosphoinositide code
  set which route a cargo takes.
- [[Ubiquitination]] — the tagging language of endosomal sorting. Ubiquitin
  chains on a membrane protein recruit the ESCRT complex and the lysosomal
  targeting machinery; the CYLD deubiquitinase tunes the same
  ubiquitin language in the innate immune system, setting the threshold for
  endocytic uptake.
- [[Lysosome]] — the terminal compartment for the degradative branch; its
  acidification depends on the endomembrane traffic that endocytosis feeds.
- [[BIG1]] — the inositol lipid phosphatase coupled to ARF1 that generates the
  PI(4)P/PI(3)P gradients that recruit coat and tether proteins to the
  endosomal membrane.
- [[Rab5]] and [[Rab7]] — the small GTPases that define early endosome and late
  endosome identity and hand cargo between sorting stages.
- [[ESCRT]] — the membrane-remodelling complex that performs the committed step
  from endosomal sorting to lysosomal delivery.
- [[Transferrin receptor 1]] — the textbook clathrin cargo, recycled rather
  than degraded, and the reason iron uptake does not signal through the
  receptor.
- [[LDL]] and [[PCSK9]] — receptor-mediated cholesterol uptake and its
  pharmacological manipulation.
- [[BACE1]] — endosomal protease linking trafficking to amyloid generation.
- [[Alpha-synuclein]] — cleared substantially by endosomal-lysosomal and
  autophagic flux, which is why lysosomal failure is a risk factor for
  accumulation.
- [[Autophagy]] — shares sorting, tethering and fusion machinery with
  endocytosis; the [[Autophagosome]] is itself derived from endomembrane.

## Documents

- [[BIG1]]
  - Places BIG1 as the ARF1-linked phosphoinositide phosphatase that sets the
    lipid environment in which endocytic coat proteins assemble.
- [[Cell Membranes]]
  - Establishes the bilayer, fluidity and curvature constraints that make
    vesicle budding possible.
- [[Ubiquitination]]
  - Supplies the tagging system that decides whether internalised cargo is
    recycled or destroyed.

## Linking Summary

- New links added: [[Plasma Membrane]], [[Cell Membranes]], [[Ubiquitin]], [[Ubiquitination]], [[Lysosome]], [[Autophagy]], [[Autophagosome]], [[Autophagosome-lysosome fusion]], [[Endocytic Lysosome Reformation]], [[ESCRT]], [[Rab5]], [[Rab7]], [[BIG1]], [[Transferrin receptor 1]], [[LDL]], [[PCSK9]], [[BACE1]], [[Alpha-synuclein]], [[Notch Signaling]], [[EGFR]], [[Golgi apparatus]], [[Macrophages]], [[Cortactin]], [[mTORC1]], [[TFEB]], [[TFE3]], [[mTORC1-Lysosome Compartment]], [[Rapamycin]], [[SARS-CoV-2]], [[Salmonella enterica]], [[Cholera]], [[Alzheimer's Disease]], [[CYLD]]
- Suggested notes to create: [[Clathrin]], [[Dynamin]], [[Caveolin]], [[AP2]], [[Adaptor Protein Complex]], [[Arf6]], [[Multivesicular Body]], [[Transferrin]], [[LDL Receptor]], [[Late Endosome]], [[Retrograde Transport]], [[Pinocytosis]], [[RAB11]], [[RAB GTPases]]
- Strong connections to strengthen: [[Endocytosis]] <-> [[Autophagy]] (shared ESCRT/tether/fusion machinery is asserted in both notes but not written out), [[Endocytosis]] <-> [[Cholera]] (toxin retrograde transport), [[Endocytosis]] <-> [[SARS-CoV-2]] (endosomal entry route)
