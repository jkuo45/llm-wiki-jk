---
title: Phagosome
description: A phagosome is the membrane-bound compartment a phagocyte forms around an ingested particle; its maturation through sequential fusion with early, intermediate, and late endosomes and lysosomes — driven by Rab5 to Rab7 GTPase switching — delivers the cargo to degradative proteases and acid.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - biological-process
  - membrane-trafficking
  - innate-immunity
  - autophagy
aliases: [Phagosome, Phagophore-derived vacuole, Phagocytic vacuole, Phagosomal compartment]
---

# Phagosome

A **phagosome** is the membrane-bound vesicle a professional phagocyte forms around an engulfed particle — a bacterium, apoptotic cell, fungal spore, or inert cargo. It is a *compartment*, not an organelle in the classical sense: the phagosome is built from plasma membrane, is not present in the cell until an engulfment event occurs, and matures by continuous fusion with, and fission from, the endolysosomal system. Its single purpose is to convert an external threat into something internal that the cell's own acid and proteases can handle.

> [!info] Distinction from the autophagosome
> The phagosome forms around a *pre-existing external object*; the autophagosome forms around *internal cargo the cell has chosen to sequester*. Their membrane origins differ, but the downstream maturation machinery is largely shared, which is why the two pathways are easy to confuse experimentally.

## Phagocytosis

The sequence is stereotyped. Recognition of the target — by opsonins such as [[Complement System|C3b]] and immunoglobulin via Fcγ receptors, or by pattern-recognition receptors binding pathogen surfaces directly — triggers actin polymerisation under the forming cup, and the cup closes and seals to create a sealed phagosome. A signalling requirement is that phagocytes must be *polarised*: Rac1 drives the membrane ruffles and cup, while Cdc42 and the Par complex establish the basal surface against which the cup advances, and local PIP2/PI(3,5)P2 hydrolysis generates the membrane geometry for cup closure.

Not all phagocytosis is receptor-driven. [[LC3|LAP]] and related pathways can recruit [[LC3]] (Map1LC3B/GABARAP-family proteins) to the nascent phagosome, generating a **LAPosome**. This is *LC3-associated phagocytosis* — a non-canonical form of [[Autophagy]] in which Atg8 lipidation coats a phagophore-derived membrane without the classic autophagosome. LAP requires [[NOX2]]-dependent [[NADPH Oxidase]] respiratory-burst ROS to trigger the recruitment of the NADPH oxidase and PI3P-producing machinery, and it is a genuine mechanistic difference from canonical autophagy rather than a naming convention.

## Maturation: the Rab5 to Rab7 Switch

Maturation is a strictly sequential trafficking cascade, and each step is gated on the previous one:

- **Early phagosome (0–5 min)** — Rab5-positive. Recruits PI3K, which produces [[PtdIns3P|PI(3)P]]; PI(3)P then recruits EEA1 and the SNARE machinery that drives the next fusion. NADPH oxidase assembles on the phagosome and generates the ROS burst that kills many ingested microbes outright.
- **Intermediate phagosome (5–15 min)** — PI(3)P-to-PI(4,5)P2 conversion, PI(5)P acquisition, and a switch from **Rab5 to Rab7** recruitment. This transition is a regulated, decisive step: constitutively active Rab5 and dominant-negative Rab7 block maturation, while Rab7 activation is what commits the phagosome to the degradative path.
- **Late phagosome/phagolysosome** — Rab7-positive and fully acidified (pH ~4.5–5), enriched in lysosomal hydrolases including cathepsins, acid phosphatase, and the vacuolar-type H⁺-ATPase that maintains acidity. Acquisition of these features is what makes the compartment competent to degrade.

> [!info] How fusion is physically achieved
> Sequential phagosome–endosome and phagosome–lysosome fusion requires tethering factors and SNARE pairing. The [[SNARE proteins|SNARE]] machinery assembles progressively: early endosomes supply VAMP7, maturing compartments add syntaxin-16/VAMP3, and the lysosome contributes VAMP7 and VAMP8. The tethering complex [[HOPS complex|HOPS]] bridges Rab7-tagged membranes, and the effector PLEKHM1 recruits HOPS onto the phagosome. Blocking VAMP7, or disrupting HOPS, arrests maturation at the intermediate stage.

## Functional Significance

- **Killing.** The respiratory burst (see [[Respiratory Burst]]) and lysosomal hydrolases kill and digest most ingested microbes, but the split is important: many pathogens are killed by ROS/NO early and digested later, while others (*Mycobacterium*, *Leishmania*, *Salmonella*, *Listeria*, *Helicobacter*) actively interfere with maturation — *Listeria* by polymerising actin to escape into the cytosol, *Salmonella* and *Mycobacterium* by arresting phagosome maturation entirely.
- **Immune signalling.** Maturation and degradation are the source of loaded [[MHC type II]] peptides, and the inflammatory consequence of the phagosome is set by which signals the membrane generates. The link to [[Inflammasome]] activation, IL-1β release, and [[Pyroptosis]] runs through this compartment.
- **Efferocytosis.** A phagocyte engulfing an apoptotic cell forms an efferosome, which matures with a distinct, largely ROS-independent program; PS recognition (see [[Phosphatidylserine]]) selects this path.
- **Antigen presentation.** The phagosome is the compartment in which exogenous antigen is processed for the MHC class II pathway — the functional counterpart of the [[Proteasome]] for MHC class I.

## Documents

- [[SNARE proteins]] — the phagosome is the vault's worked example of SNARE-mediated sequential fusion; VAMP7 blockade arrests phagosome maturation and was the decisive experimental evidence for the SNARE requirement.
- [[Signaling Molecules]] — the phagosome is where the oxidative and lipid signals generated on the phagosomal membrane are catalogued in this vault; phagosomal ROS and phospholipid species are the local version of those signals.
- [[_document_ - Lysosome biogenesis Regulation and functions]] — contributes the lysosome-side context: phagosome maturation terminates in fusion with the lysosomal pool, so lysosome biogenesis capacity and phagosome maturation are coupled.

## Connections

- [[Autophagy]] — the phagosome is a phagophore-derived compartment, and LC3 association via the LAP pathway makes the distinction between the two routes a matter of the initiating cue rather than of membrane origin. This is the vault's clearest place to explain why "autophagic" LC3 signal on a membrane does not automatically mean canonical autophagy.
- [[Macrophage]] — macrophages are the cells that build the most elaborate phagosomes and are the canonical experimental system; their phagosome maturation is also what fails first in diseases such as [[Chronic Granulomatous Disease]] (NADPH oxidase absent) and in lysosomal storage disease.
- [[SNARE proteins]] — sequential fusion is a SNARE process, and the specific pairing progression VAMP7 → VAMP3/syntaxin-16 → VAMP7/VAMP8 is what converts a Rab5-positive compartment into an acidified phagolysosome.
- [[Phosphatidylserine]] — PS recognition selects the efferosome path with a distinct maturation program, so the lipid composition of the engulfed cargo's surface changes which maturation route the phagosome takes.
- [[NOX2]] — the phagosomal respiratory burst requires assembly of [[NADPH Oxidase|NOX2]] on the phagosome membrane, triggered by the localised signals that drive maturation; this is the mechanistic link between the oxidant arm and the trafficking arm.
- [[Rab7]] — Rab5-to-Rab7 conversion is the decisive commitment step of phagosome maturation, and Rab7 is the same GTPase that governs autophagosome-lysosome fusion through effectors like PLEKHM1 and ORP1L.
- [[Proteasome]] — the functional opposite compartment: the proteasome generates MHC class I peptides from cytosolic antigen, while the phagosome generates MHC class II peptides from engulfed antigen.
- [[Inflammasome]] — phagosomal content and the membrane's own signalling platform determine inflammasome assembly and IL-1β maturation, which is why phagosome dysfunction converts into inflammasome-driven [[Pyroptosis]] in disease.
- [[LAMP1]] — acquisition of LAMP1-positive lysosomal membrane is the standard marker of phagosome maturation, and it is the marker whose absence defines a maturation block.
- [[Phagocytic Lysosome Reformation]] — a phagosome or phagolysosome that has rendered its contents can, like the autolysosome, be reformed into new lysosomes, coupling phagosome turnover to lysosomal pool size.
- [[Respiratory Burst]] — the phagosomal ROS burst is the vault's canonical example of localised, compartment-restricted oxidant production, and the model for compartment-specific redox signalling generally.

## Linking Summary

- New links added: [[Complement System]], [[LC3]], [[Autophagy]], [[NOX2]], [[NADPH Oxidase]], [[Rab7]], [[PLEKHM1]], [[Macrophage]], [[SNARE proteins]], [[Phosphatidylserine]], [[Proteasome]], [[Inflammasome]], [[Pyroptosis]], [[LAMP1]], [[Respiratory Burst]], [[Phagocytic Lysosome Reformation]], [[Signaling Molecules]], [[MHC type II]]
- Suggested notes to create: [[Phagocytosis]], [[Phagosome Maturation]], [[Efferocytosis]], [[Phagosome-Lysosome Fusion]], [[LC3-associated Phagocytosis]], [[HOPS complex]], [[VAMP7]] — removed as already existing: EEA1, Ectoparasite, PtdIns3P, Rab5, Toll-like Receptor
- Strong connections to strengthen: [[Phagosome]] ↔ [[Macrophage]], [[Phagosome]] ↔ [[Autophagy]] (the LAP distinction is the load-bearing concept in both), [[Phagosome]] ↔ [[SNARE proteins]]
