---
title: EEA1
description: Early endosome antigen 1, a 1413-residue FYVE-domain-containing tethering protein that localises exclusively to Rab5-positive early endosomes via binding to phosphatidylinositol 3-phosphate, and couples endosomal membrane docking to SNARE-mediated fusion.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [protein, membrane-trafficking, endosome, lipid-binding, vesicle-fusion]
aliases: [Early endosome antigen 1, Eea1, EEA1 protein]
---

# EEA1

**Early endosome antigen 1** (EEA1) is a 1,413-residue peripheral membrane protein that localises **exclusively** to early endosomes and has a central role in endosomal trafficking. It was originally identified as the primary autoantigen in a patient with a subacute form of [[Lupus Erythematosus|lupus erythematosus]], which is where the "early endosome antigen" name comes from.

> [!info] Mechanism
> EEA1 is a **tethering** factor, not a fusion protein. It does not drive membrane merger itself; it brings a transport vesicle and the target endosomal membrane into the correct proximity so that [[SNARE proteins|SNAREs]] can complete fusion. Its recruitment is a two-key mechanism, and both keys are required:
>
> 1. **Lipid binding.** A C-terminal **FYVE domain** (~60–70 residues, two β-hairpins plus a small α-helix, held by two Zn²⁺-binding clusters) binds [[PtdIns3P|phosphatidylinositol 3-phosphate]] through a basic (R/K)(R/K)HHCR motif in the first β-strand. PtdIns3P is enriched on early endosomes because [[PI3K]] phosphorylates PtdIns on that compartment, so EEA1's lipid binding is the spatial address label.
> 2. **GTPase binding.** The same FYVE domain, plus the adjacent coiled coil, binds [[Rab5]] in its GTP-bound form. Lawe et al. (2000, *JBC*) showed the FYVE domain is required for *both* PtdIns3P and Rab5 binding — neither interaction alone anchors EEA1.
>
> EEA1 forms a **homodimer** through a coiled-coil region, and dimerisation correlates with its ability to bind Rab5 and early endosomes. Because it is a homodimer with multiple interaction sites, EEA1 is effectively a *cooperative* tether: two endosomes can be cross-tethered by an EEA1 dimer pair, which is a plausible mechanism for how a Rab5-active endosome selectively fuses with a Rab5-active endosome rather than with a lysosome.

## Functional context

EEA1 sits in the canonical early-endosome maturation pathway: internalisation → early endosome (Rab5, PtdIns3P, EEA1) → late endosome/lysosome (Rab7, PI(3,5)P₂). Its core role is to sort Rab5-positive incoming vesicles and communicate with the retromer, which recycles cargo (e.g. the cation-independent mannose-6-phosphate receptor) back to the trans-Golgi network. EEA1 also participates in:

- **Membrane fusion and fission coupling** at the early endosome, including a documented relationship to EEA1 oligomerisation on tubules and vesicles.
- **Multivesicular body and virus budding.** Dominant-negative and late-acting mutants in the class E/ESCRT network arrest [[HIV-1]] and other enveloped virus budding through endosomal membranes, establishing that the endosomal sorting machinery is recruited by viral Gag late domains. EEA1 is part of that network of human proteins required for multivesicular body biogenesis.
- **Late endosome signalling.** In yeast and in mammalian cells, disruption of Rab5 family or their effectors, including EEA1, impairs mTORC1 activation and localisation, indicating that the early endosome is a signalling platform in its own right, not just a sorting station.
- **Phagosome maturation** — the same machinery is reused in [[Phagosome]] and [[Phagophore Assembly Site|autophagosome]] maturation.

## Domains and interactions

| Region | Role |
| --- | --- |
| N-terminal region | Interaction partners; partially disordered, which is relevant to EEA1's reported conformational flexibility and oligomerisation behaviour |
| Coiled coil (~residues 218–437) | Homodimerisation; Rab5 binding |
| C-terminal FYVE domain | PtdIns3P binding *and* Rab5 binding — both are required |
| Zn-finger region | Dimeric lattice contribution; Zn²⁺ chelation disrupts EEA1 endosomal targeting |

> [!warning] Clinical caveat
> Unlike many endosomal proteins, EEA1 has no established Mendelian disease association and no approved or clinical-stage drug. The dominant experimental tools are dominant-negative constructs, FYVE-domain point mutants, and the historic anti-EEA1 autoantibodies from lupus sera — which remain useful as reagents and as a lupus biomarker. Much of the detailed membrane-fusion mechanism is derived from in vitro reconstitution and from overexpression assays, which can artificially promote EEA1 oligomerisation; quantitative conclusions about how many EEA1 molecules sit on an endosome in vivo should be treated cautiously.

## Documents

- [[Rab5]] — the GTPase that defines the early endosome and whose GTP-bound form EEA1 binds; the Rab5-EEA1-PtdIns3P module is the core targeting mechanism.
- [[Membrane Trafficking]] — the umbrella process EEA1 functions in, and the reason its PtdIns3P-based address label matters.
- [[Endocytosis]] — the pathway in which EEA1 acts after internalisation, sorting cargo on the early endosome.
- [[Rab7]] — the GTPase of the next, late-endosome/lysosome stage to which EEA1-containing compartments mature; the Rab5→Rab7 conversion is what couples EEA1 to lysosome delivery.
- [[PtdIns3P]] — the phosphoinositide that gives the early endosome its identity and recruits EEA1 via the FYVE domain.

## Connections

- [[Rab5]] — the central molecular partner. EEA1 is the canonical Rab5 effector on endosomes, and the FYVE domain's dual requirement for PtdIns3P and Rab5 is the mechanistic reason endosomal identity needs both a lipid and a GTPase.
- [[PtdIns3P]] — the lipid address label. Its production by [[PI3K]] is what makes the early endosome EEA1-positive, so PI3K inhibition or loss of the VPS34 complex removes EEA1 from membranes and blocks maturation.
- [[Rab7]] — the hand-off partner. Early-to-late endosome maturation requires Rab5-to-Rab7 conversion, and EEA1 leaves the membrane as the compartment does, so Rab5/EEA1 and Rab7/PI(3,5)P₂ are sequential, not simultaneous, markers.
- [[Endocytosis]] — the physiological process for which EEA1-mediated tethering is required; receptor internalisation and cargo sorting fail at the tethering step without it.
- [[Lysosome]] — the destination. EEA1 is upstream of lysosome delivery, and defective maturation produces endolysosomal storage disease phenotypes, which is why EEA1-interacting partner mutations (e.g. in retromer components) present as lysosomal storage disorders.
- [[Autophagy]] — autophagosome maturation and lysosomal fusion recruit endosomal Rab machinery, so EEA1-deficient compartments impair autophagic flux. This is a well-documented fragility of EEA1 loss in cell models.
- [[PI3K]] and [[Vps34]] — the kinase that produces PtdIns3P on endosomes, without which EEA1 has no lipid to bind and endosomal maturation stalls.
- [[SNARE proteins]] — EEA1's functional output is positioning the membranes so SNAREs can fuse them; EEA1 is the specificity step and the SNAREs are the force.
- [[HIV-1]] — viruses hijack the same endosomal/ESCRT machinery for budding, which is the clearest demonstration that EEA1's trafficking function is load-bearing for a whole network of processes.
- [[mTORC1]] — early/late endosomes are a signalling site for amino-acid sensing, and the endosomal tethering machinery is required for normal mTORC1 activation and localisation.

## Linking Summary
- New links added: [[Rab5]], [[Rab7]], [[PtdIns3P]], [[Endocytosis]], [[Membrane Trafficking]], [[Lysosome]], [[Autophagy]], [[SNARE proteins]], [[PI3K]], [[Vps34]], [[Phagosome]], [[Phagophore Assembly Site]], [[HIV-1]], [[HIV]], [[mTORC1]], [[PtdIns(4,5)P2]], [[Multivesicular Body]], [[Vesicle Transport]], [[Rab GTPases]]
- Suggested notes to create: [[FYVE Domain]], [[Early Endosome]], [[Endosomal Sorting Complex Required for Transport]], [[Tetherin]], [[Retromer]], [[Lupus Erythematosus]], [[Coronin]], [[Vps21]], [[Endosomal Maturation]], [[Lupus Erythematosus]], [[Multivesicular Body]], [[Rab GTPases]]
- Strong connections to strengthen: [[Rab5]] ↔ [[Rab7]], [[EEA1]] ↔ [[PtdIns3P]], [[EEA1]] ↔ [[Vps34]]
