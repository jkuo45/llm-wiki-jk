---
title: COPI
description: COPI is the heptameric coatomer complex that mediates retrograde vesicular transport from the Golgi to the endoplasmic reticulum and within Golgi cisternae, recruited to membranes by Arf1 GTP and selected for dilysine-tagged cargo.
protected: false
created: 2026-10-02
updated: 2026-10-02
tags: [protein-complex, vesicle-transport, golgi, membrane-trafficking]
aliases: [COPI, coatomer, coatomer complex I, coatomer protein complex I, COP-I]
---

# COPI

**COPI** (coatomer protein complex I, or simply *coatomer*) is a soluble heptameric protein complex that coats vesicles budding from the Golgi, providing the retrograde half of the [[Membrane Trafficking]] system. Where COPII carries cargo forward from the endoplasmic reticulum to the Golgi, COPI brings it back — and, crucially, moves cargo *between* Golgi cisternae in the anterograde direction as well. Coatomer is the cytosolic counterpart to clathrin: it is pre-assembled in solution and recruited to the membrane, rather than being assembled on it.

## Subunit Composition

The coatomer complex contains seven subunits:

| Subunit | Gene | Alias |
| --- | --- | --- |
| α-COP | *COPA* | |
| β-COP | *COPB1* | β'-COP also arises from *COPB1* by alternative splicing |
| β′-COP | *COPB2* | |
| γ-COP | *COPG1* | |
| δ-COP | *COPD* | |
| ε-COP | *COPE* | |
| ζ-COP | *COPZ1/2* | |

Several subunits form the "legacy" core (β-COP, β′-COP, γ-COP, δ-COP, ζ-COP) conserved with COPII subunits, while α-COP and ε-COP are specific to COPI. Coatomers exist as long-lived, soluble heptamers in the cytosol; membrane association is transient and regulated.

> [!info] Recruitment is Arf1, not the coat
> Arf-family GTPases control coat recruitment. For COPI, Arf1 in its GTP-bound form binds the Golgi membrane and presents a membrane-proximal myristoyl group to a hydrophobic pocket in β′-COP; Arf1 then promotes a conformational change in the complex that opens it from a closed, soluble arrangement into a membrane- and cargo-binding-competent open form. The Arf1–COPI pair is bivalent: one Arf1 to recruit, a second to engage the cage. Coat disassembly follows GTP hydrolysis, and the released subunits return to the cytosol. The bacterial toxin brefeldin A exploits exactly this switch — it locks Arf1 in its GDP-bound state, and COPI coats promptly disappear from the Golgi while the anterograde COPII route continues.

## Cargo Recognition

Cargo selection is the COPI system's principal function, and it is largely independent of coatomer itself. Cargo adaptors — notably the bivalent Arf1–COPI complex plus GGA proteins — read sorting signals in the cytosolic tails of transmembrane cargo. The signature COPI signal is the **di-lysine (dixie) motif**, an acidic-cluster motif of the form (S/R)XXK(X)E, present on the cytosolic tail of ER-resident and ER-retrieval proteins such as KDEL-bearing soluble proteins and type I transmembrane ER residents. Recognition of a dilysine motif retains the cargo in the retrograde COPI route.

> [!warning] Where the coats disagree, cargo goes to the lysosome
> A protein can be sorted into different routes by small changes in its tail sequence — a dilysine motif versus a monovaline motif, or an aromatic-tyrosine-based motif, can determine COPI versus [[Clathrin]]-dependent exit from the trans-Golgi network. This competition is not academic: lysosomal enzyme receptors rely on it, which is why defects in adaptor selection produce [[Lysosomal Storage Diseases]] with intact core secretory trafficking.

## Functional Roles

- **Retrograde Golgi → ER transport** of dilysine-tagged ER-resident proteins. This is essential: without it, escaped ER residents would be secreted, and ER membrane and lumenal composition would drift.
- **Intra-Golgi transport** in the anterograde direction — COPI-derived vesicles move cargo from early to intermediate to later Golgi cisternae, opposite to the bulk flow of Golgi maturation. COPI therefore serves both retrograde retrieval and forward intra-Golgi flux.
- **Retrograde transport from endosomes** to the trans-Golgi network for receptors whose cytosolic tails carry dilysine motifs, via retromer- and SNX-bar-independent pathways.
- **Intraflagellar transport** — the TERC complex is a COPI-like coat with distinct subunits, functioning as the ciliary equivalent.

## Disease Associations

- **COPB1 deficiency** causes *Baralle-Macken syndrome*, a neurodevelopmental disorder with developmental delay and dysmorphic features. Mechanistically instructive: COPI is non-redundant, and deficient coatomer complex I causes aberrant activation of the unfolded protein response, ER stress and defective protein trafficking.
- **COPB2** mutations have been associated with severe neurodevelopmental phenotypes; the gene is described in OMIM as necessary for retrograde trafficking from Golgi to ER.
- Coat assembly is sensitive to cholesterol and phosphoinositide composition, and Golgi pH; these are indirect, non-genetic routes from lipid metabolism to secretory-pathway dysfunction.

> [!warning] Directionality is inference, not observation
> Whether a cargo actually travels on COPI carriers rather than diffusing between cisternae is not directly observable at steady state, and the intra-Golgi role of COPI is supported by acute depletion experiments that perturb the whole Golgi. Claims about COPI's quantitative contribution to flux should be treated as uncertain.

## Documents

- (no document notes yet)

## Connections

- [[Membrane Trafficking]] — the umbrella note that assigns COPI its role opposite COPII and clathrin; the coat is one of the three directional systems it coordinates.
- [[Vesicle Transport]] — describes coat assembly, scission and coat recycling, the cycle COPI participates in as the retrograde carrier.
- [[Golgi Apparatus]] — COPI's principal membrane of action; bidirectional intra-Golgi and Golgi-to-ER traffic is what maintains the cisternae's distinct cargo complement.
- [[Clathrin]] — the other cytosolic pre-assembled coat, recruited by a different GTPase and reading different tail motifs, but cooperating with COPI in sorting decisions at the trans-Golgi network and in receptor retrieval.
- [[Endocytosis]] — COPI participates in endosome-to-TGN retrograde recycling, the return leg that follows internalisation.
- [[B-cell Immunoglobulin-derived Gene 1]] — the vault's membrane-trafficking hub note; it uses COPI coat recruitment as its worked example of Arf1-dependent trafficking.

## Linking Summary

- New links added: [[Golgi Apparatus]], [[Clathrin]], [[Endocytosis]], [[Lysosomal Storage Diseases]], [[B-cell Immunoglobulin-derived Gene 1]], [[Ubiquitin-Proteasome System]]
- Suggested notes to create: Arf1 (the GTPase that recruits COPI — the single highest-value missing note here), COPII (the anterograde coat that defines COPI by contrast; named repeatedly across the vault with no note), [[Coatomer Subunits]] (COPA/COPB1/COPB2/COPG1/COPD/COPE/COPZ1 as gene-level notes), [[ArfGAP1]] (the GTPase-activating protein that triggers coat disassembly), [[Dilysine Motif]] and [[KDEL]] (the cargo signals), [[Baralle-Macken Syndrome]] (the human COPI deficiency disease), [[Retromer]] (the competing endosome-to-TGN retrieval route)
- Strong connections to strengthen: [[Membrane Trafficking]] ↔ COPI ↔ COPII (the retrograde/anterograde pair is asserted in the trafficking note but has no coat to anchor it), [[Golgi Apparatus]] ↔ COPI (the Golgi note has no coat note of its own; COPI is the one to add), Arf1 ↔ [[COPI]] ↔ brefeldin A (the Arf-switch mechanism is the most useful thing this note contributes and currently has no home)