---
title: FSP1
description: Ferroptosis suppressor protein 1 (FSP1, formerly AIFM2) is a plasma-membrane flavoprotein that uses NAD(P)H to reduce ubiquinone (CoQ10) to ubiquinol, a lipophilic radical-trapping antioxidant, acting as a GPX4-independent, parallel brake on ferroptosis.
created: 2026-07-04
updated: 2026-08-24
tags:
  - protein
  - enzyme
  - ferroptosis
  - antioxidant
  - lipid-metabolism
aliases: [Ferroptosis Suppressor Protein 1, AIFM2, apoptosis-inducing factor mitochondria-associated 2]
---

# FSP1

**Overview:** **FSP1** (ferroptosis suppressor protein 1, encoded by *AIFM2*) is a **flavoprotein NAD(P)H:ubiquinone oxidoreductase** tethered to the **plasma membrane** that constitutes the second major, **glutathione-independent** system protecting cells from ferroptotic death. By reducing **ubiquinone (CoQ10)** to **ubiquinol (CoQ10H₂)** at the expense of **NAD(P)H**, FSP1 regenerates a lipophilic **radical-trapping antioxidant** that halts the propagation of phospholipid peroxyl radicals during [[Lipid Peroxidation]]. The resulting **FSP1–CoQ10–NAD(P)H pathway** operates as a **stand-alone parallel system that cooperates with [[GPX4]] and [[Glutathione]]** to suppress ferroptosis (Doll et al., 2019; Bersuker et al., 2019).

## Discovery

FSP1 was uncovered independently by two 2019 back-to-back studies as a gene capable of rescuing cells from GPX4 loss. Doll, Conrad and colleagues identified it through an **expression-cloning complementation screen** in human cancer cells lacking GPX4, recovering the flavoprotein previously known as **AIFM2 (apoptosis-inducing factor mitochondria-associated 2)**, which they renamed ferroptosis suppressor protein 1 (Doll et al., *Nature* 575:693–698, 2019; doi:10.1038/s41586-019-1707-0). In parallel, Dixon, Nomura, Bassik and colleagues identified the same gene in a **synthetic-lethal CRISPR–Cas9 dropout screen**, showing myristoylated FSP1 localizes to the plasma membrane where it reduces CoQ10 (Bersuker et al., *Cell* 177:1264–1279, 2019; doi:10.1016/j.cell.2019.03.049). Both groups established that FSP1 fully combats lethal peroxidation in the *absence* of GPX4, defining a non-mitochondrial CoQ10 antioxidant system that acts in parallel to the canonical glutathione axis.

> [!info] Naming note
> FSP1 was originally described as a pro-apoptotic mitochondrial protein (AIFM2). Its anti-ferroptotic function — mediated at the **plasma membrane**, not mitochondria — is distinct from the apoptosis-regulating activity of AIFM1. The rename to FSP1 avoids confusion with the apoptosis-inducing factor family.

## Structure & Membrane Localization

- **Flavoprotein core:** FSP1 binds a **FAD cofactor** and catalyzes two-electron transfer from NAD(P)H to ubiquinone; the enzymology is that of a classical **NAD(P)H-dependent ubiquinone oxidoreductase**.
- **N-terminal myristoylation motif:** A conserved **N-myristoylation** signal at the N-terminus recruits FSP1 to the **inner leaflet of the [[Plasma Membrane]]**, positioning the enzyme precisely where phospholipid peroxidation is initiated and propagated. Membrane association is essential for its ferroptosis-suppressive function.
- **Pharmacological contact residue:** The first-in-class small-molecule inhibitor **iFSP1** binds human FSP1 at a pocket centered on residue **F360**, accounting for its human-specific activity (IC₅₀ ≈ 103 nM).

## Mechanism of Action

### NAD(P)H-dependent ubiquinone oxidoreductase activity

FSP1 catalyzes the reaction:

> **Ubiquinone (CoQ10, oxidized) + NAD(P)H + H⁺ → Ubiquinol (CoQ10H₂, reduced) + NAD(P)⁺**

The enzyme thus **regenerates the reduced, antioxidant pool of CoQ10** using reducing equivalents supplied by **NAD(P)H**. This is mechanistically distinct from GPX4, which consumes [[Glutathione]] to reduce pre-formed lipid hydroperoxides; FSP1 instead maintains a **chain-breaking radical trap** in the membrane.

### Ubiquinol as a radical-trapping antioxidant

**Ubiquinol (CoQ10H₂)** is a potent **lipophilic radical-trapping antioxidant (RTA)**. It donates a hydrogen atom to a **lipid peroxyl radical (LOO•)** generated during [[Lipid Peroxidation]], yielding a relatively stable ubisemiquinone/ubiquinone and terminating the radical chain before it can abstract a bis-allylic hydrogen from an adjacent polyunsaturated phospholipid. In this way FSP1 prevents the explosive propagation of peroxidation that leads to membrane rupture and ferroptotic death.

> [!important] Parallel, not redundant
> GPX4 and FSP1 guard the same outcome — suppression of lethal [[Lipid Peroxidation]] — through **independent chemistries and cofactor requirements**. GPX4 is GSH/selenium-dependent and repairs *existing* phospholipid hydroperoxides; FSP1 is GSH-independent and maintains a *preventive* radical trap. Cells can survive loss of either axis if the other is intact, which is why inhibition of **both** (e.g., iFSP1 + a GPX4 inhibitor) is strongly **synergistic**.

## Parallel to the GPX4–Glutathione Axis

The discovery reframed ferroptosis control from a single master regulator (GPX4) into a **two-pillar system**:

| Feature | GPX4–Glutathione axis | FSP1–CoQ10–NAD(P)H axis |
| --- | --- | --- |
| Cofactors | GSH, selenocysteine (Sec) | NAD(P)H, FAD |
| Site | Cytosolic / membrane / mitochondrial isoforms | Plasma membrane (myristoylated) |
| Chemistry | Reduces phospholipid **hydroperoxides** to alcohols | Regenerates **ubiquinol radical trap** |
| GSH dependence | Yes | **No** |
| Independent of GPX4 | — | Fully suppresses ferroptosis when GPX4 is absent |

Doll et al. concluded that "the FSP1–CoQ10–NAD(P)H pathway exists as a stand-alone parallel system, which co-operates with GPX4 and glutathione to suppress phospholipid peroxidation and ferroptosis."

## Mevalonate Pathway Convergence

The substrate for FSP1 — **ubiquinone/CoQ10** — is a **non-sterol product of the [[Mevalonate pathway]]**. This creates a critical convergence: perturbations that suppress MVA output toward cholesterol synthesis simultaneously **starve FSP1 of its ubiquinone substrate**, collapsing the FSP1 axis and **predicting ferroptosis sensitivity**.

- **HMG-CoA reductase inhibition** (e.g., [[Statins]]) reduces flux through the mevalonate pathway, lowering CoQ10 availability.
- **Squalene synthase activation** (e.g., the Class III ferroptosis inducer **FIN56**) diverts MVA intermediates away from CoQ10 toward sterol/cholesterol biosynthesis, depleting the ubiquinone pool that FSP1 requires.
- Consequently, the MVA pathway intersects ferroptosis at **two nodes**: (1) selenocysteine-tRNA maturation required for **GPX4** synthesis, and (2) **CoQ10 supply** required for **FSP1** function. Loss of ubiquinone specifically converges on FSP1, explaining why MVA-pathway modulation so strongly governs ferroptosis sensitivity.

> [!tip] Therapeutic implication
> Because FSP1 depends on MVA-derived CoQ10, combining MVA-pathway inhibition (statins, squalene-synthase engagement) with direct FSP1 or GPX4 inhibition is a plausible strategy to sensitize therapy-resistant cancers to ferroptosis.

## Vitamin K Cycle Extension

A 2022 extension showed that FSP1 is also a **warfarin-resistant vitamin K reductase**. FSP1 reduces vitamin K to its hydroquinone form (VKH₂), sustaining a **non-canonical vitamin K redox cycle** that, like the CoQ10 cycle, supplies a reduced radical-trapping antioxidant independent of GPX4. This broadens FSP1 into a general **quinone-reductase ferroptosis suppressor** and explains its antidotal activity against warfarin poisoning. (Mishima et al., *Nature* 608:778–783 (2022); doi:10.1038/s41586-022-05022-3.)

## Regulation of Expression

- **PPARα** positively drives FSP1 expression; PPARα activators (e.g., fenofibrate, bezafibrate) raise FSP1 levels and ferroptosis resistance.
- The **MDM2/MDMX** complex suppresses FSP1 by inhibiting PPARα activity, lowering FSP1 and sensitizing cells to ferroptosis.
- FSP1 protein levels **correlate with ferroptosis resistance across hundreds of cancer cell lines**, making it both a biomarker of ferroptosis sensitivity and a druggable target.

## Pharmacology & Therapeutic Relevance

- **iFSP1** — first described FSP1 inhibitor (IC₅₀ ≈ 103 nM), human-specific via the F360 pocket; induces ferroptosis in vitro and in HCC models, often synergizing with GPX4 inhibitors.
- **Combination logic:** Most FSP1 inhibitors are insufficient alone in high-GPX4 cells but act as **ferroptosis enhancers** when paired with GPX4/system Xc− inhibition.
- **Cancer:** FSP1 high expression marks ferroptosis-resistant, often mesenchymal or drug-tolerant, tumor cells; targeting FSP1 is under investigation for HCC and other entities.
- **Beyond cancer:** The GPX4-independent axis is relevant wherever lipid-peroxidation–driven cell death contributes (neurodegeneration, ischemia–reperfusion, kidney injury).

## Open Questions

- How FSP1 selectivity between ubiquinone and vitamin K is spatially/temporally governed.
- Whether tissue-specific FSP1 paralogs or cofactors modulate the axis in vivo.
- The precise contribution of the FSP1 axis versus DHODH (mitochondrial CoQ10) in different membranes and cell states.

#

## Documents

List of documents in the wiki that mention this entity

  - [[task_output_fsp1_coq10_nadph_ferroptosis_axis_24_August_2026|FSP1–CoQ10–NAD(P)H Ferroptosis Axis (deep dive)]]
    - Synthesis of the Doll et al. (2019) discovery and the FSP1–CoQ10–NAD(P)H pathway, its parallel relationship to GPX4/glutathione, and MVA-pathway convergence predicting ferroptosis sensitivity.

  - [[_document_ - Ferroptosis past present and future|Ferroptosis: past, present and future]]
    - Landmark review systematically summarizing ferroptosis mechanisms, including the [[FSP1]]–[[Coenzyme Q10|CoQ10]] axis as a GPX4-independent suppressor.

## Connections

  - [[GPX4]]: The canonical, GSH-dependent ferroptosis brake; FSP1 acts in parallel and synergizes with GPX4 inhibition.
  - [[Glutathione]]: Cofactor for GPX4; FSP1 suppresses ferroptosis independently of GSH.
  - [[Coenzyme Q10]]: FSP1 substrate — reduced to ubiquinol, the membrane radical trap.
  - [[Ubiquinone]]: Oxidized CoQ10; the direct electron acceptor for FSP1.
  - [[NADPH]]: Electron donor for FSP1's ubiquinone-reductase activity (also recycles GSH via glutathione reductase).
  - [[Mevalonate pathway]]: Supplies CoQ10/ubiquinone; loss of MVA output converges on FSP1 to predict ferroptosis sensitivity.
  - [[Lipid Peroxidation]]: The process FSP1 suppresses by maintaining ubiquinol.
  - [[Ferroptosis]]: The regulated cell death held in check by the FSP1 axis.
  - [[Plasma Membrane]]: Site of myristoylated FSP1 localization and radical trapping.
  - [[PPARα]]: Transcriptional activator of FSP1 expression.
  - [[Statins]]: HMG-CoA reductase inhibitors that lower CoQ10, potentially sensitizing via FSP1.
  - [[System Xc-]]: Cystine antiporter feeding GSH synthesis; the upstream node of the parallel GPX4 axis.

## Linking Summary

- New links added: [[GPX4]], [[Glutathione]], [[Coenzyme Q10]], [[Ubiquinone]], [[NADPH]], [[Mevalonate pathway]], [[Lipid Peroxidation]], [[Ferroptosis]], [[Plasma Membrane]], [[PPARα]], [[Statins]], [[System Xc-]], [[FSP1]]
- Suggested new entity notes to create:
    - [[Vitamin K]] — FSP1 sustains a warfarin-resistant non-canonical vitamin K cycle (2022).
    - [[AIFM2]] — the gene symbol FSP1 was renamed from; worth a redirect/history note.
    - [[FIN56]] — Class III FIN that engages squalene synthase, depleting CoQ10 and converging on FSP1.
    - [[iFSP1]] — first-in-class FSP1 inhibitor (F360 pocket, IC₅₀ ≈ 103 nM).
    - [[Radical-trapping Antioxidant]] — the mechanistic class (ubiquinol, vitamin K hydroquinone, ferrostatin) that halts peroxidation chains.
    - [[Myristoylation]] — N-terminal modification tethering FSP1 to the plasma membrane.
    - [[HMG-CoA reductase]] — rate-limiting MVA enzyme; its inhibition lowers CoQ10/FSP1 substrate.
- Strong connections to strengthen:
    - [[FSP1]] ↔ [[Coenzyme Q10]] (direct substrate/product)
    - [[FSP1]] ↔ [[Mevalonate pathway]] (CoQ10 supply convergence)
    - [[FSP1]] ↔ [[GPX4]] (parallel, synergistic suppression)
    - [[FSP1]] ↔ [[NADPH]] (electron donor)
