---
title: FSP1–CoQ10–NAD(P)H Ferroptosis Axis (deep dive)
description: Synthesis of the Doll et al. (2019) discovery that FSP1 uses NAD(P)H to regenerate ubiquinone (CoQ10) to ubiquinol at the plasma membrane, acting as a GPX4-independent parallel brake on ferroptosis, and how mevalonate-pathway loss of ubiquinone converges on FSP1 to predict ferroptosis sensitivity.
published: 2019-11-28
created: 2026-08-24
source: https://doi.org/10.1038/s41586-019-1707-0
author: []
tags:
  - task-output
  - ferroptosis
  - fsp1
  - coenzyme-q10
  - lipid-peroxidation
  - mevalonate-pathway
---

# FSP1–CoQ10–NAD(P)H Ferroptosis Axis (deep dive)

> Source passage under analysis:
> *"Doll et al. showed that FSP1 catalyzes the regeneration of COQ10 by NAD(P)H, and the FSP1-COQ10-NAD(P)H pathway is an independent parallel system that cooperates with GPX4 and glutathione to suppress phospholipid peroxidation and ferroptosis. Moreover, this also explains the effect of NAD(P)H in the MVA pathway through the loss of ubiquinone convergence on FSP1 and thereby predicts sensitivity to ferroptosis."*

This deep dive unpacks that single passage into the molecular, cellular, and translational logic established by the 2019 discovery papers and the work that followed.

## 1. Background — ferroptosis was thought to have a single master regulator

[[Ferroptosis]] is an iron-dependent, non-apoptotic regulated cell death driven by the uncontrolled accumulation of **phospholipid hydroperoxides** during [[Lipid Peroxidation]], particularly on polyunsaturated phosphatidylethanolamines. Before 2019, the field held that ferroptosis was controlled essentially by one enzyme: **[[GPX4]]** (glutathione peroxidase 4), a selenoprotein that uses **[[Glutathione]]** to reduce phospholipid hydroperoxides to harmless alcohols. Everything that protected against ferroptosis — cystine import via [[System Xc-]], cysteine from the transsulfuration pathway, selenocysteine from the [[Mevalonate pathway]] — was understood to **converge on GPX4/glutathione**.

The open question was why some cells (especially certain cancer lines) are strikingly resistant to GPX4 inhibition. That resistance implied an **unknown, GPX4-independent** defense.

## 2. The discovery — FSP1 (AIFM2) as a second ferroptosis suppressor

Two back-to-back 2019 studies independently identified the gene:

- **Doll, Conrad & colleagues** (*Nature* 575:693–698, 2019; doi:10.1038/s41586-019-1707-0) used an **expression-cloning complementation screen** in GPX4-null human cancer cells and recovered **AIFM2**, which they renamed **ferroptosis suppressor protein 1 ([[FSP1]])**.
- **Bersuker, Dixon, Nomura, Bassik & colleagues** (*Cell* 177:1264–1279, 2019; doi:10.1016/j.cell.2019.03.049) used a **synthetic-lethal CRISPR–Cas9 screen** and reached the same gene, showing that **N-myristoylation** recruits FSP1 to the **[[Plasma Membrane]]**, where it functions as an oxidoreductase reducing coenzyme Q10.

Both groups converged on the same mechanistic core, stated most explicitly by Doll et al.:

> "the FSP1–CoQ10–NAD(P)H pathway exists as a stand-alone parallel system, which co-operates with GPX4 and glutathione to suppress phospholipid peroxidation and ferroptosis."

## 3. Mechanism — FSP1 is a NAD(P)H:ubiquinone oxidoreductase

FSP1 is a **flavoprotein** (FAD-dependent) tethered to the inner leaflet of the plasma membrane by an **N-terminal myristoylation** signal. Its catalytic reaction is:

> **Ubiquinone (CoQ10, oxidized) + NAD(P)H + H⁺ → Ubiquinol (CoQ10H₂, reduced) + NAD(P)⁺**

Three points matter:

1. **NAD(P)H is the electron donor.** Either NADPH or NADH can supply reducing equivalents. This is the "regeneration of COQ10 by NAD(P)H" in the passage.
2. **Ubiquinone is the substrate.** The product of the reaction — **ubiquinol** — is a lipophilic **radical-trapping antioxidant (RTA)**. It donates a hydrogen atom to a lipid peroxyl radical (LOO•), terminating the chain reaction before it can abstract a bis-allylic hydrogen from an adjacent polyunsaturated phospholipid.
3. **Location is the plasma membrane**, the site where peroxidation is initiated and propagated — exactly where the trap is needed.

Thus FSP1 maintains a **preventive radical trap**, mechanistically distinct from GPX4, which *repairs* already-formed phospholipid hydroperoxides using GSH.

## 4. Parallel, not redundant — cooperation with GPX4/glutathione

The two systems guard the same outcome through **independent chemistries and cofactors**:

| Axis | Cofactors | Site | Chemistry | GSH-dependent? |
| --- | --- | --- | --- | --- |
| GPX4–Glutathione | GSH, selenocysteine | Cytosol / membrane / mitochondria | Reduces phospholipid **hydroperoxides** | Yes |
| FSP1–CoQ10–NAD(P)H | NAD(P)H, FAD | Plasma membrane | Regenerates ubiquinol **radical trap** | **No** |

Loss of **either** axis alone is tolerated if the other is intact — which is precisely why some GPX4-low cells survive via FSP1. The practical consequence: **inhibiting both is strongly synergistic**. The first-in-class FSP1 inhibitor, **iFSP1** (IC₅₀ ≈ 103 nM, human-specific via the F360 pocket), triggers ferroptosis especially when combined with GPX4 inhibitors, and shows activity in hepatocellular carcinoma models.

## 5. The mevalonate convergence — why NAD(P)H "in the MVA pathway" predicts ferroptosis sensitivity

This is the subtle part of the passage: *"this also explains the effect of NAD(P)H in the MVA pathway through the loss of ubiquinone convergence on FSP1."*

The substrate of FSP1 — **ubiquinone/CoQ10** — is a **non-sterol product of the [[Mevalonate pathway]]**. The MVA pathway therefore feeds FSP1 in two separable ways:

- **Node 1 (selenocysteine):** MVA-derived isopentenyl pyrophosphate (IPP) supports selenocysteine-tRNA maturation, required for [[GPX4]] synthesis (Yang et al., 2014).
- **Node 2 (CoQ10):** MVA supplies the isoprenoid backbone of ubiquinone, the direct **FSP1 substrate**.

The key insight is **convergence on FSP1 at Node 2**: if MVA output is diverted away from CoQ10 — by **HMG-CoA reductase inhibition** ([[Statins]]) or by **engaging squalene synthase** (e.g., the Class III ferroptosis inducer FIN56, which pushes flux toward cholesterol/sterols) — the ubiquinone pool collapses. With no ubiquinone to reduce, **FSP1 cannot regenerate ubiquinol even when NAD(P)H is abundant**. The NAD(P)H remains, but its substrate is gone; the radical trap fails; ferroptosis sensitivity rises.

In other words, **loss of ubiquinone converges on FSP1**, and because FSP1 is the GPX4-independent brake, this predicts ferroptosis sensitivity *independently of GPX4 status*. This resolved a previously confusing observation that the MVA pathway modulated ferroptosis through both GPX4 (selenocysteine) and a CoQ10-dependent, GPX4-independent route.

> [!tip] Why this matters therapeutically
> Sensitizing resistant cancers to ferroptosis may require hitting **both** pillars. Combining MVA-pathway inhibition (to starve the FSP1 axis of CoQ10) with GPX4/system Xc− inhibition (to cripple the GSH axis) is a rationally derived combination, distinct from either alone.

## 6. Extension — the non-canonical vitamin K cycle (2022)

A 2022 *Nature* study extended the model: FSP1 is also a **warfarin-resistant vitamin K reductase**, reducing vitamin K to its hydroquinone (VKH₂) and sustaining a **non-canonical vitamin K redox cycle** that likewise supplies a reduced radical-trapping antioxidant. This reframed FSP1 as a general **quinone-reductase ferroptosis suppressor** and explained its ability to overcome warfarin poisoning. (Wan et al., *Nature* 2022 — DOI to be verified at curation.)

## 7. Regulation of FSP1 expression

- **PPARα** transcriptionally activates FSP1; PPARα agonists (fenofibrate, bezafibrate) raise FSP1 and ferroptosis resistance.
- The **MDM2/MDMX** complex suppresses FSP1 by inhibiting PPARα, lowering FSP1 and sensitizing cells.
- Across hundreds of cancer cell lines, **FSP1 levels correlate with ferroptosis resistance**, making it both a biomarker and a therapeutic target.

## 8. Open questions

- How FSP1 discriminates between ubiquinone and vitamin K, and whether tissue-specific cofactors modulate the axis.
- The relative contribution of FSP1 (plasma membrane) versus **DHODH** (mitochondrial CoQ10) in different membranes and cell states.
- Whether CoQ10 supplementation can therapeutically bolster the FSP1 axis in neurodegeneration or ischemia–reperfusion injury.

#

## Documents

  - [[_document_ - Ferroptosis past present and future|Ferroptosis: past, present and future]]
    - Landmark review summarizing the FSP1–CoQ10 axis and MVA-pathway intersections.

## Connections

  - [[FSP1]] — The plasma-membrane NAD(P)H:ubiquinone oxidoreductase at the center of the axis.
  - [[GPX4]] — Canonical, GSH-dependent ferroptosis brake; FSP1 acts in parallel.
  - [[Glutathione]] — Cofactor for GPX4; the alternative defense axis.
  - [[Coenzyme Q10]] — The molecule whose reduced form (ubiquinol) is the radical trap; regenerated by FSP1.
  - [[Ubiquinone]] — Oxidized CoQ10; the direct FSP1 substrate.
  - [[NADPH]] — Electron donor for FSP1 (and for GSH recycling via glutathione reductase).
  - [[Mevalonate pathway]] — Biosynthetic source of ubiquinone; loss of output converges on FSP1.
  - [[Lipid Peroxidation]] — The process suppressed by the ubiquinol radical trap.
  - [[Ferroptosis]] — The cell death held in check by the two-pillar defense.
  - [[Plasma Membrane]] — Site of myristoylated FSP1 and radical trapping.
  - [[Statins]] — HMG-CoA reductase inhibitors that lower CoQ10, converging on FSP1.
  - [[PPARα]] — Transcriptional activator of FSP1.

## Linking Summary

- New links added: [[FSP1]], [[GPX4]], [[Glutathione]], [[Coenzyme Q10]], [[Ubiquinone]], [[NADPH]], [[Mevalonate pathway]], [[Lipid Peroxidation]], [[Ferroptosis]], [[Plasma Membrane]], [[Statins]], [[PPARα]], [[System Xc-]]
- Suggested new entity notes to create:
    - [[Vitamin K]] — FSP1 sustains a warfarin-resistant non-canonical vitamin K cycle.
    - [[AIFM2]] — the gene symbol from which FSP1 was renamed.
    - [[FIN56]] — Class III FIN engaging squalene synthase, depleting CoQ10.
    - [[iFSP1]] — first-in-class FSP1 inhibitor (F360 pocket, IC₅₀ ≈ 103 nM).
    - [[Squalene synthase]] — sterol-branch enzyme whose engagement diverts MVA from CoQ10.
    - [[Myristoylation]] — N-terminal modification tethering FSP1 to the plasma membrane.
    - [[Radical-trapping Antioxidant]] — mechanistic class (ubiquinol, vitamin K hydroquinone, ferrostatin) halting peroxidation chains.
- Strong connections to strengthen:
    - [[FSP1]] ↔ [[Coenzyme Q10]]
    - [[FSP1]] ↔ [[Mevalonate pathway]]
    - [[FSP1]] ↔ [[GPX4]]
    - [[Ubiquinone]] ↔ [[NADPH]]
