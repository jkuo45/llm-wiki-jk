---
title: "Research Gaps in Mitochondrial Fission & Fusion Mechanisms"
description: "Comprehensive analysis of what is known and what remains unknown about the exact mechanisms of mitochondrial fission and fusion, drawn from ingested review documents and supporting literature."
created: 2026-07-27
updated: 2026-07-27
tags:
  - mitochondrial-dynamics
  - research-gaps
  - fission
  - fusion
  - drp1
  - mfn1
  - mfn2
  - opa1
  - mitophagy
---

# Research Gaps in Mitochondrial Fission & Fusion Mechanisms

## Source Documents

- Adebayo et al. 2021 — *Mitochondrial Fusion and Fission: The fine-tune balance for cellular homeostasis* (FASEB J, PMID: 34048084)
- Wang et al. 2023 — *The role of mitochondrial dynamics in disease* (MedComm, PMID: 38156294)
- Yang et al. 2026 — *Targeting mitophagy for neuroprotection: mechanisms and therapeutic opportunities* (npj Aging, doi:10.1038/s41514-026-00424-3)

---

## OMM Fusion — MFN1/MFN2

| Gap | Current State | Source |
|-----|--------------|--------|
| **MFN2's exact role in fusion is unclear** | MFN1 and OPA1 are recognized as core fusion components, but MFN2 may have non-fusion primary roles (ER tethering, lipid transfer, organelle contact). Its specific contribution to membrane merger vs. docking remains undefined. | Wang et al. 2023, PMID: 38156294 |
| **Redox disulfide mechanism needs deeper characterization** | Mattie et al. showed HR2-domain cysteines form intermolecular disulfide bonds under oxidized glutathione, but how aberrant redox signaling affects fusion in disease states, and whether this is the dominant oligomerization pathway *in vivo*, is unresolved. | Adebayo et al. 2021, PMID: 34048084 |
| **Single-TM topology vs. classical two-TM model** | Updated cryo-EM/biochemistry supports a single transmembrane domain placing HR2 in the IMS. Functional implications of this topology for how MFNs actually deform and merge lipid bilayers remain to be elucidated structurally. | Adebayo et al. 2021 |
| **MFN1 vs. MFN2 functional redundancy vs. specialization** | They share ~80% homology and can rescue each other's loss in fibroblasts, yet MFN2 mutations cause CMT2A while MFN1 mutations are linked to HCC/TNBC. How their tissue-specific expression and non-overlapping interactomes produce distinct disease phenotypes is poorly understood. | Wang et al. 2023 |

## IMM Fusion — OPA1 & Cardiolipin

| Gap | Current State | Source |
|-----|--------------|--------|
| **L-OPA1 vs. S-OPA1: is S-OPA1 dispensable?** | Song et al. and Ge et al. showed L-OPA1 + S-OPA1 cooperate for efficient fusion. Other studies show L-OPA1 alone suffices. Whether S-OPA1 is strictly required or merely enhances kinetics is unresolved. | Adebayo et al. 2021 |
| **OPA1 isoform-specific functions remain open** | 8 splice variants, 3 cleavage sites (S1/S2/S3), processed by OMA1 (stress) and YME1L (constitutive). Which isoform combinations are active in which tissues and stress contexts is largely unmapped. | Wang et al. 2023 |
| **Cardiolipin's precise role in IMM fusion** | CL is required for OPA1-mediated fusion in liposomes and also stimulates DRP1 GTPase activity for fission. How CL balances these opposing roles — what triggers its differential actions — is unknown. | Adebayo et al. 2021 |
| **Structural mechanism of IMM merger** | No high-resolution structure exists for the actual fusion pore formed by OPA1 oligomers on cardiolipin-rich membranes. The biophysics of inner membrane remodeling remains a black box. | Adebayo et al. 2021 |

## Fission — DRP1 & Adaptors

| Gap | Current State | Source |
|-----|--------------|--------|
| **ER site selection for fission** | ER tubules wrap mitochondria to pre-constrict before DRP1 recruitment, but how the ER "chooses" where to initiate constriction is unknown. | Adebayo et al. 2021 |
| **DNM2 necessity** | One study shows DNM2 completes scission after DRP1 constriction; another shows DRP1 alone has severing ability sufficient for fission without DNM2. Whether DNM2 is truly dispensable or context-dependent needs resolution. | Adebayo et al. 2021 |
| **Adaptor functional specialization** | MFF, MID49, MID51, and FIS1 each independently recruit DRP1, but MFF drives symmetrical fission while FIS1 drives asymmetrical (mitophagy-linked) fission. How cells select among adaptors for different fission outcomes is unclear. | Wang et al. 2023 |
| **MID49/MID51 dose-dependent paradox** | Low MID levels enhance fission, but overexpression elongates mitochondria (by recruiting inactive DRP1). The mechanistic basis for this biphasic behavior is unresolved. | Wang et al. 2023 |
| **Mammalian FIS1 functional significance** | FIS1 is essential in yeast but mammalian FIS1-KO shows little fission defect. Its role appears shifted toward mitophagy rather than fission — why and how this evolutionary divergence occurred is not understood. | Wang et al. 2023 |

## DRP1 Post-Translational Regulation

| Gap | Current State | Source |
|-----|--------------|--------|
| **Ser637 context-dependent paradox** | PKA phosphorylation at Ser637 is "inhibitory" in most contexts, but in podocytes under high glucose it *promotes* fission. Ser637 phosphorylation may prime subsequent Ser616 phosphorylation. No single PTM determines outcome; multiple modifications act collaboratively. | Wang et al. 2023 |
| **No unified PTM code for DRP1** | Phosphorylation, SUMOylation (SUMO1 vs. SUMO2/3 have opposite effects), S-nitrosylation, O-GlcNAcylation, and ubiquitination all regulate DRP1. How these are integrated in a given cellular context to produce a specific fission outcome is unknown. | Wang et al. 2023 |
| **Cryo-EM mechanism incomplete** | Cryo-EM of MID49/51–DRP1–GTP complexes shows GTP binding forms linear oligomers, GTP hydrolysis curls them into helical rings (16 nm inner diameter). How this ring actually breaks two membranes simultaneously is not captured. | Wang et al. 2023 |

## Fission–Fusion–Mitophagy Coupling

| Gap | Current State | Source |
|-----|--------------|--------|
| **DRP1 not always required for mitophagy** | Cardiac-specific DRP1-KO mice show that preventing mitophagy *delays* cardiomyopathy. DRP1-mediated fission is not an absolute prerequisite for mitophagy. | Wang et al. 2023 |
| **How fusion/fission balance is maintained** | The coordinated role of L-OPA1 and S-OPA1, and how cells maintain a particular ratio of fusion-to-fission under different stresses, is undefined. | Wang et al. 2023 |
| **PINK1's dual and context-dependent effects** | PINK1 promotes fission (via DRP1 S616 phosphorylation) but also supports fusion (stabilizing OPA1, modulating MFN2). In murine M17 neurons, PINK1 loss increases fission; in rat dopaminergic cells, PINK1 loss elongates mitochondria. Species/cell-type dependence is unresolved. | Wang et al. 2023 |
| **Alternative compensatory fission pathways** | Whether alternative pathways compensate for PINK1-DRP1 fission defects in dendritic spines is unknown. Multiple backup systems (MUL1, Ambra-1/HUWE1, DRP1-mediated OMM rupture, receptor-mediated pathways) exist but their relative contributions in different neuronal subtypes are unmapped. | Yang et al. 2026 |
| **Fission/fusion uncoupling in HD** | mHTT does not simply suppress or enhance mitophagy — it *uncouples* fission from degradation while disrupting autophagic flux. Broad-spectrum autophagy activators like rapamycin may be insufficient or detrimental if downstream transport and lysosomal fusion remain blocked. | Yang et al. 2026 |

## Therapeutic Targeting Gaps

| Gap | Current State | Source |
|-----|--------------|--------|
| **Mdivi-1 off-target effects and translational failure** | Mdivi-1 is protective in mouse models but failed in pig MI. It also cleaves L-OPA1 and alters OXPHOS complex expression, increasing superoxide. Whether its benefits are truly DRP1-specific is questionable. | Wang et al. 2023 |
| **Therapeutic paradox of DRP1 inhibition** | Does suppressing pathological fission also interfere with essential physiological division (axonal transport, mitosis)? Prolonged DRP1 inhibition might disrupt quality control, introducing new pathological risks. | Yang et al. 2026 |
| **Constitutive vs. excessive mitophagy activation** | Mild PINK1-Parkin activation prevents HF; excessive activation is detrimental. The dose-response relationship and therapeutic window are undefined. | Wang et al. 2023 |
| **Cancer: fission vs. fusion as target** | DRP1 upregulation promotes proliferation/metastasis in most cancers, but mitochondrial fusion also supports tumor growth in some contexts (leflunomide in breast cancer). Whether to promote or inhibit dynamics depends on tumor type — no generalizable principle exists. | Wang et al. 2023 |
| **Mito-lysosomal mismatch** | Inducing mitophagy is insufficient if downstream lysosomes cannot process sequestered waste ("autophagic stress"). Future drug screening should prioritize dual mito-lysosomal repair. | Yang et al. 2026 |

## Disease-Causation Ambiguity

| Gap | Current State | Source |
|-----|--------------|--------|
| **Cause vs. consequence** | Whether mitochondrial dysfunction observed in neurodegeneration and cancer is a cause or a secondary effect of other pathogenic processes remains challenging to determine. | Wang et al. 2023 |
| **mtSIRT mechanism on autophagy** | SIRT3/4/5 promote fusion and/or inhibit fission, but "the mechanism of action of mtSIRTs on autophagy is still unclear." | Sirtuins review, PMID: 36595431 |
| **Hyperglycemia–dynamics–cancer link** | HMGB1/ERK/DRP1 axis may connect diabetes to cancer via mitochondrial dynamics, but direct mechanistic evidence is lacking. | Adebayo et al. 2021 |

---

## Top Priority Research Needs

1. **Structural resolution of the actual fusion pore** — how MFN1 oligomers and OPA1/cardiolipin complexes physically merge lipid bilayers at atomic resolution.
2. **DRP1 PTM code** — simultaneous assessment of multiple post-translational modifications in specific cellular contexts to predict fission outcomes.
3. **MFN2's non-fusion roles** — disentangling ER tethering, lipid transfer, and signaling from its fusion contribution.
4. **L-OPA1/S-OPA1 ratio** — definitive in vivo studies on whether S-OPA1 is dispensable and how the ratio is maintained across tissues.
5. **Context-dependent DRP1 regulation** — why Ser637 phosphorylation switches from inhibitory to activating in different cell types.
6. **Fission/mitophagy uncoupling** — understanding how mHTT and other disease proteins disconnect fission from degradation.
7. **Therapeutic window for DRP1 modulation** — identifying the threshold between beneficial and pathological fission inhibition.
8. **Cardiolipin's dual role** — what molecular switches determine whether CL promotes fusion (via OPA1) vs. fission (via DRP1).

---

## Connections

- [[DRP1]] — Central fission GTPase; context-dependent PTM regulation; therapeutic target (Mdivi-1, P110)
- [[MFN1]] / [[MFN2]] — OMM fusion GTPases; MFN2 has dual fusion + ER-tethering roles
- [[OPA1]] — IMM fusion GTPase; 8 splice variants; processed by [[OMA1]] and [[YME1L]]
- [[Cardiolipin]] — IMM phospholipid with dual pro-fusion (OPA1) and pro-fission (DRP1) roles
- [[Mitophagy]] — Selective autophagy of damaged mitochondria; tightly coupled to fission/fusion balance
- [[PINK1]] / [[Parkin]] — Master mitophagy regulators with context-dependent effects on dynamics
- [[Mdivi-1]] — DRP1 inhibitor with off-target effects and translational failure in large animal models
- [[SIRT3]] — Deacetylates OPA1 (Lys926/Lys931) to activate fusion; mechanism on autophagy unclear
- [[Huntingtin]] — mHTT uncouples fission from degradation in HD

## Linking Summary

- Suggested new entity notes to create: [[Cardiolipin]] (if not already consolidated), [[Mdivi-1]]
- Strong connections to strengthen:
    - [[DRP1]] ↔ [[Cardiolipin]] — CL stimulates DRP1 GTPase activity during fission
    - [[OPA1]] ↔ [[Cardiolipin]] — CL required for OPA1-mediated IMM fusion
    - [[MFN2]] ↔ [[Endoplasmic Reticulum]] — MFN2 tethers ER to mitochondria
    - [[DRP1]] ↔ [[Mitophagy]] — fission is coupled to but not absolutely required for mitophagy
