---
title: Glutathione
description: Glutathione (GSH) is the most abundant endogenous thiol antioxidant, a tripeptide of glutamate, cysteine, and glycine that buffers cellular redox state, reduces peroxides via GPX enzymes, and conjugates electrophiles for excretion.
created: 2026-05-29
updated: 2026-09-24
tags:
  - biological-molecule
  - antioxidant
  - redox-signaling
  - peptide
aliases: [GSH, GSSG, Reduced glutathione, Oxidized glutathione, gamma-glutamylcysteinylglycine]
---

# Glutathione

**Glutathione** (γ-L-glutamyl-L-cysteinylglycine, GSH) is the most abundant endogenous antioxidant in most cells, typically present at 1–10 mM concentrations. It is a tripeptide of [[Cysteine]], glutamate, and glycine whose reactive thiol makes it the central redox buffer of the cell — the terminal reductant of the antioxidant network and the cofactor that keeps [[GPX4]] cycling against [[Lipid Peroxidation]].

## Structure and Synthesis

Glutathione's distinguishing feature is the **γ-peptide bond** linking glutamate's side-chain carboxyl to the cysteine amino group. This unusual linkage renders it resistant to most peptidases, so GSH survives cytosolic turnover and is degraded only by γ-glutamyl transpeptidase on the cell surface.

Synthesis is ATP-dependent and cysteine-limited, in two steps:

1. **Glutamate–cysteine ligase (GCL, formerly γ-GCS)** — rate-limiting; feedback-inhibited by GSH itself. Encoded as catalytic (GCLC) and modifier (GCLM) subunits.
2. **Glutathione synthetase** — adds glycine.

Cysteine supply is the usual bottleneck: it comes from the transsulfuration pathway (homocysteine → cystathionine → cysteine), from protein turnover, or from the cystine/glutamate antiporter **system xc⁻** ([[SLC7A11]]/xCT), which imports cystine in exchange for glutamate.

## The Glutathione Redox Cycle

> [!info] GSH is a recyclable reductant, not a stoichiometric sink
> **Neutralization:** [[Glutathione Peroxidase]] (notably [[GPX4]]) uses GSH to reduce H₂O₂ and lipid hydroperoxides to water and alcohols, forming GSSG and a protein-glutathione mixed disulfide intermediate.
> **Regeneration:** **[[Glutathione Reductase]]** reduces GSSG back to 2 GSH using [[NADPH]] from the pentose phosphate pathway. One NADPH regenerates two GSH.

The **GSH/GSSG ratio** is the cell's principal redox readout. Cytosolic ratio is normally 30:1 to 100:1; a shift toward GSSG signals oxidative stress and directly alters the redox state of protein cysteines, which is the language of redox signaling.

Three layers of defense consume GSH:

- **Peroxide reduction**: GPX family, especially GPX4 against phospholipid hydroperoxides in membranes
- **Electrophile conjugation**: [[Glutathione S-Transferase]]s (GSTs) attach GSH to xenobiotics, lipid peroxidation products ([[4-Hydroxynonenal]], [[Acrolein]], [[Malondialdehyde]]), and quinones via Michael addition
- **Direct scavenging**: GSH reacts with hydroxyl radicals, peroxynitrite, and hypochlorous acid, though at diffusion-limited rates that make enzymatic routes more important in vivo

## Protein S-Glutathionylation

GSH forms mixed disulfides with protein cysteine thiols (**S-glutathionylation**), a reversible post-translational modification that protects cysteines from irreversible overoxidation and transduces redox signals. Targets include NF-κB, PKC, actin, mitochondrial complex I, and peroxiredoxins. Glutaredoxins reverse the modification using GSH.

## Lipid Peroxidation and Ferroptosis

Glutathione is the rate-limiting cofactor of the ferroptosis defense axis. [[GPX4]] reduces phospholipid hydroperoxides in membranes only while GSH is available; when cystine import via system xc⁻ is blocked ([[Erastin]]) or when GSH synthesis is inhibited ([[BSO]]), lipid hydroperoxides accumulate and cells die by [[Ferroptosis]].

> [!info] Two independent brakes on ferroptosis
> The GPX4/GSH axis is one. The **FSP1–[[Coenzyme Q10]]–[[NADPH]]** axis is the parallel glutathione-independent brake at the plasma membrane (Doll et al., 2019; Bersuker et al., 2019). Loss of either is survivable; combined inhibition is synergistic. See [[GPX4]] for details.

Because glutathione depletion converts the same chemistry into irreversible damage, the cell's cysteine economy is the switch between adaptive [[Mitohormesis|redox signaling]] and lethal peroxidation.

## Physiological and Clinical Significance

- **Detoxification**: hepatic GSH conjugates drugs, acetaminophen metabolites (NAPQI), and heavy metals. Acetaminophen overdose depletes hepatic GSH; N-acetylcysteine ([[NAC]]) restores it.
- **Neurodegeneration**: brain GSH declines in [[Parkinson's Disease]] and [[Alzheimer's Disease]]; substantia nigra has unusually low GSH and high iron, favoring peroxidation.
- **Aging**: GSH synthesis and GSH/GSSG ratio fall with age; GlyNAC (glycine + NAC) supplementation restores both in older adults and improves mitochondrial function.
- **Lung disease**: epithelial lining fluid GSH is ~100-fold higher than plasma and is depleted in asthma and COPD, lowering the threshold for oxidative injury.
- **Cardiovascular**: GSH preserves nitric oxide bioavailability and prevents [[Oxidized LDL]] formation.
- **Selenium linkage**: [[Selenium]] is required for GPX4's catalytic selenocysteine, so selenium deficiency phenocopies glutathione depletion at the membrane level. See [[Keshan disease]].

## Modulation

Precursors and supports: [[NAC]], glycine, [[Glutathione Synthetase]] substrates, [[Alpha-Lipoic Acid]] (regenerates GSH from GSSG and spares cysteine), selenium, and B6 (cystathionine β-synthase cofactor). Oral GSH has limited bioavailability; liposomal and sublingual forms and precursors are more effective. NRF2 activation ([[Sulforaphane]], [[Curcumin]]) upregulates GCL and the cystine antiporter, raising GSH capacity endogenously — the [[Xenohormesis|adaptive]] rather than substitutive strategy.

## Documents

List of documents that mention this entity

  - [[_document_ - formation, chemical stability|formation, chemical stability]]
    - Notes on how the body naturally slows this process, particularly through Glutathione and enzymatic protection. The cyclization step is highly sensitive to environmental conditions.

  - [[_document_ - Neuromelanin, one of the most overlooked molecules in modern medicine, is not a spectator|Neuromelanin, one of the most overlooked molecules in modern medicine, is not a spectator]]
    - Such antioxidants often take the form of thiols including Cysteine and Glutathione; natural neuromelanin has cysteine in its pheomelanin core, surrounded by a eumelanin component lacking cysteine.

  - [[_document_ - Oxidative Stress Harms and Benefits for Human Health|Oxidative Stress Harms and Benefits for Human Health]]
    - Cells deploy an antioxidant defensive system based mainly on enzymatic components, such as Superoxide Dismutase (SOD), Catalase (CAT), and Glutathione Peroxidase (GPx), to protect themselves from ROS-induced cellular damage.

  - [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]]
    - SIRT1 activated NRF2 by changing the structure of Keap1, leading to NRF2 nuclear transfer and promoting the expression of antioxidant genes, such as Glutathione S-transferase and glucuronyl transferase.

## Connections

- [[Glutathione Peroxidase]]: Uses GSH to neutralize peroxides; GPX4 handles membrane lipid hydroperoxides.
- [[GPX4]]: The ferroptosis-relevant selenoenzyme whose activity depends entirely on GSH availability.
- [[Glutathione Reductase]]: Regenerates GSH from GSSG using NADPH.
- [[Glutathione S-Transferase]]: Conjugates electrophiles including lipid-peroxidation aldehydes.
- [[Glutathione Synthetase]]: Second biosynthetic step; deficiency causes hemolytic anemia.
- [[Cysteine]]: Rate-limiting substrate; supply via system xc⁻ or transsulfuration.
- [[SLC7A11]]: Cystine/glutamate antiporter that sets GSH synthesis capacity.
- [[NADPH]]: Electron donor for GSSG regeneration and for the FSP1–CoQ10 axis.
- [[Lipid Peroxidation]]: GSH via GPX4 terminates the propagation of membrane peroxidation.
- [[Ferroptosis]]: GSH depletion collapses the GPX4 brake and triggers ferroptotic death.
- [[Erastin]]: System xc⁻ inhibitor that depletes GSH and induces ferroptosis.
- [[4-Hydroxynonenal]]: Electrophile conjugated by GSTs; GSH status determines whether it is detoxified or adducts proteins.
- [[Acrolein]]: Thiol-depleting alkenal cleared by GSH conjugation.
- [[Malondialdehyde]]: Dialdehyde detoxified in part by GSH conjugation.
- [[NAC]]: Cysteine donor that restores GSH after depletion.
- [[Alpha-Lipoic Acid]]: Regenerates GSH from GSSG and spares cysteine.
- [[Selenium]]: Required for GPX4 selenocysteine; deficiency phenocopies GSH loss.
- [[Oxidative Stress]]: GSH/GSSG ratio is the primary cellular readout of oxidative state.
- [[Adrenochrome]]: Redox-cycling quinone that consumes GSH and impairs membrane repair.
- [[Mitohormesis]]: The adaptive redox signaling that GSH buffering modulates.
- [[NRF2]]: Transcription factor that raises GCL, GST, and xCT expression.
- [[Sulforaphane]] / [[Curcumin]]: NRF2 activators that raise GSH capacity endogenously.
- [[Glutathione Reductase]] / [[Glutathione Synthetase]]: Enzymatic partners in the synthesis-recycling loop.

## Linking Summary

- New links added: [[Cysteine]], [[SLC7A11]], [[Glutathione Reductase]], [[Glutathione S-Transferase]], [[Glutathione Synthetase]], [[GPX4]], [[NADPH]], [[Lipid Peroxidation]], [[Ferroptosis]], [[Erastin]], [[4-Hydroxynonenal]], [[Acrolein]], [[Malondialdehyde]], [[NAC]], [[Selenium]], [[Keshan disease]], [[NRF2]], [[Sulforaphane]], [[Curcumin]], [[Mitohormesis]], [[Xenohormesis]], [[Parkinson's Disease]], [[Alzheimer's Disease]], [[Oxidized LDL]], [[Coenzyme Q10]]
- Suggested new entity notes to create: [[S-Glutathionylation]], [[GCL]], [[BSO]]
- Strong connections to strengthen: [[Glutathione]] ↔ [[Glutathione Peroxidase]], [[Glutathione]] ↔ [[Lipid Peroxidation]], [[Glutathione]] ↔ [[Ferroptosis]], [[Glutathione]] ↔ [[Adrenochrome]]
