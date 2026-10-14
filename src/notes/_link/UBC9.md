---
title: UBC9
description: UBC9 (UBE2I) is the single, obligate E2 conjugating enzyme of the SUMO pathway; it transfers activated SUMO from the SAE1-SAE2 E1 onto substrate lysines, directly recognising the SUMO consensus motif Psi-K-x-E/D and serving as the pathway's principal substrate-recognition module.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - enzyme
  - protein
  - post-translational-modification
aliases: [UBE2I, SUMO E2, Ubc9]
---

# UBC9

**UBC9** (ubiquitin-conjugating enzyme E2 I; gene *UBE2I*) is the sole E2 enzyme of the
[[SUMOylation]] pathway in metazoans. Unlike the dozens of ubiquitin E2s that specialise
on chain topology, UBC9 is a single protein that performs all SUMO conjugation in the cell.
It is a compact ~18 kDa ubiquitin-fold protein whose catalytic cysteine (Cys93 in human)
holds SUMO as a thioester until a target lysine is attacked.

## Position in the cascade

The pathway runs E1 → E2 → substrate. The E1 is a heterodimer of [[SAE1]] (adenylation
subunit) and [[SAE2]] (catalytic subunit, UBA2). SAE2 first adenylates the SUMO
C-terminal glycine (ATP-dependent, forming an *AMP~SUMO* intermediate) and then forms a
thioester with its own Cys173. SUMO is then transferred to UBC9 Cys93, giving the
*UBC9~SUMO* thioester. UBC9 catalyses the final nucleophilic attack on a lysine side chain
in the substrate, producing the isopeptide bond.

> [!info] UBC9 is the substrate-recognition step, not just a carrier
> Unlike ubiquitin E2s, UBC9 reads the substrate itself. Its active-site cleft contacts a
> short **SUMO consensus motif**, hydrophobic-Ψ-Lys-X-Glu/Asp (ΨKxE/D, typically preceded
> by a Pro). Roughly a quarter of all SUMO substrates carry this motif. The E2–substrate
> interaction alone is often sufficient for efficient transfer, which is why UBC9 is sometimes
> described as a "read-write" E2.

## E3 dependence and specificity

Because consensus-motif binding is permissive rather than selective, most physiological
SUMOylation also needs a SUMO E3 ligase. The best characterised are [[RanBP2]]
(PCN-binding, contains SUMO-interacting motifs) and [[PIAS]] proteins (Siz/PIAS family),
plus UBC9-interacting co-factors such as [[PC2]] and [[ZNF451]]. E3s act in two ways: they
stabilise the *UBC9~SUMO* thioester in a "closed", catalytically competent conformation, and
they recruit or orient the substrate. Reconstitution on giant unilamellar vesicles shows that
recruitment of the E3-like machinery by a PI(3)P effector is what licenses LC3/ATG8 lipidation
in [[Macroautophagy]], and that recruitment alone is not sufficient — the conformational
activation matters independently.

> [!tip] Chain formation
> UBC9 also binds SUMO non-covalently on a surface far from the active site, formed by the
> N-terminal helix, β1 and the β1–β2 loop. Disrupting this interaction (e.g. UBC9 H20D, or
> SUMO1 E67R) does not block thioester formation but strongly reduces poly-SUMO chain
> extension, by a mechanism analogous to Mms2–Ubc13 in K63-linked ubiquitination. Because
> this backside site overlaps the E1 docking surface, SUMO and the E1 compete for it.

## Regulation by auto-SUMOylation

UBC9 itself is SUMOylated on Lys14, at a site that is **not** the consensus motif — the
modification sits on the N-terminal helix in a position analogous to E2-25K. Sumoylated
UBC9 is not catalytically impaired; instead it acquires a second binding surface that
recognises SUMO-interacting motifs (SIMs) on substrates. For [[Sp100]] this raises affinity
roughly five-fold and allows modification without an E3. This is functionally equivalent to
supplying an E3, and it may explain how a cell SUMOylates SIM-bearing targets without a
cognate ligase.

## Structural recognition by SAE1/UBA2

Cryo-EM of human SUMO E1 bound to UBC9 (2025) shows that thioester transfer requires a
~175° rotation of the E1 ubiquitin-fold domain plus a 17 Å translation, closing a ~67 Å gap
between the E1 and E2 catalytic cysteines. UBC9 is docked by its N-terminal helix and the
characteristically elongated β1β2 loop into a W-shaped surface of the UBA2 UFD. Two
additional interfaces form: one at the UBA2 crossover loop, and one at the "cys cap" of the
E1 cysteine domain, a loop that is disordered in E1 structures lacking UBC9 and becomes
ordered to engage UBC9. UBC9's Tyr139 and Ser89 make key contacts; mutating them substantially
reduces transfer.

## Biological importance and disease

*UBE2I* knockout mice die in early embryogenesis, and hypomorphic alleles cause
developmental and immune defects. UBC9 is required for mitotic progression, DNA repair,
telomere maintenance, PML body formation, and the nuclear trafficking machinery that
depends on SUMOylated [[RanBP2]]/[[RanGAP1]]. It is also a determinant of
[[Ubiquitin Ligase|E3]] choice and therefore of the identity of the SUMO modification
carried by any given substrate. UBC9 activity is reported to be modulated by [[NAD+]]-
dependent sirtuins indirectly, through deacetylation of the E3 layer rather than of UBC9
itself.

## Documents

- [[SUMOylation]]
  - Pathway-level source for UBC9's role as the obligate SUMO E2, its consensus-motif
    recognition, and its role in substrate selectivity.

## Connections

- [[SUMOylation]] — UBC9 is the obligate E2 of this pathway; every SUMO transfer passes
  through its Cys93 thioester.
- [[SUMO]] — the modifier UBC9 carries; its C-terminal glycine is the nucleophile in the
  final ligation step.
- [[Ubiquitin]] — UBC9 is a ubiquitin-superfold E2 and is homologous to ubiquitin-conjugating
  enzymes, but with a very different substrate-recognition strategy.
- [[RanBP2]] — the best-characterised SUMO E3; docks onto UBC9 in a manner that overlaps
  with E1 and noncovalent-SUMO binding, enforcing ordered hand-off.
- [[PIAS]] — SUMO E3 family that recruits UBC9 to specific substrates to confer specificity
  the consensus motif alone cannot provide.
- [[Macroautophagy]] — UBC9-mediated SUMOylation of ATG proteins is part of the stress
  response, though WIPI2-driven LC3 lipidation does not itself require UBC9.
- [[DNA Repair]] — UBC9 is essential for RNF8/RNF168-mediated damage signalling and for
  PML-body-dependent repair, making it a checkpoint-adjacent node.
- [[Ubiquitin Ligase]] — UBC9 is the substrate-recognition half of the SUMO cascade that
  determines which E3 engages which target.

## Linking Summary

- New links added: [[SUMOylation]], [[SUMO]], [[Ubiquitin]], [[RanBP2]], [[PIAS]],
  [[DNA Repair]], [[Ubiquitin Ligase]], [[SAE1]], [[SAE2]], [[Sp100]], [[RanGAP1]],
  [[ZNF451]], [[PC2]]
- Suggested notes to create: [[SAE1]], [[SAE2]], [[Sp100]], [[RanGAP1]], [[ZNF451]],
  [[PC2]], [[SUMO Consensus Motif]], [[RanBP2]]
- Strong connections to strengthen: [[UBC9]] ↔ [[SUMOylation]], [[UBC9]] ↔ [[RanBP2]]
