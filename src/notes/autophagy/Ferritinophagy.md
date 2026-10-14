---
title: Ferritinophagy
description: Ferritinophagy is the cargo-receptor-mediated selective autophagic degradation of ferritin, mediated by NCOA4, which liberates free iron from storage and thereby sets the threshold for ferroptosis.
created: 2026-10-01
updated: 2026-10-02
tags:
  - biological-process
  - autophagy
  - selective-autophagy
  - iron-metabolism
  - cell-death
aliases: [ferritin autophagy, ferritinophagic flux]
---

# Ferritinophagy

**Ferritinophagy** is the selective autophagic turnover of [[Ferritin]], the cytosolic iron-storage complex. It is executed by the cargo receptor [[NCOA4]], which binds ferritin and delivers it to the autophagosome for lysosomal degradation, releasing its sequestered iron back into the cytosol. Because the free iron pool it generates feeds [[Ferroptosis]], ferritinophagy sits at the intersection of [[Autophagy]], iron handling, and regulated necrotic cell death.

> [!info] Ferritinophagy controls iron homeostasis
> Ferroptosis induction activates autophagy and consequently degrades both ferritin and its cargo receptor NCOA4. Blocking autophagy or knocking down NCOA4 abolishes labile iron accumulation, ROS production, and ferroptotic death (Hou *et al.*, *Autophagy* 2016; Santana-Codina, Gikandi & Mancias, *Adv Exp Med Biol* 2021, PMID: 34370287).

## Mechanism

Ferritin is a 24-mer shell of light (FTL) and heavy (FTH) chains that stores iron in a redox-inert ferric core. Under iron-replete conditions the iron sits inert inside that shell; under iron demand it must be released. Ferritinophagy is one of two principal release routes, the other being the iron-regulatory protein/IRE system.

The sequence is:

- **Cargo recognition.** [[NCOA4]] docks onto the FTH1 subunit of ferritin. NCOA4 is kept anchored to ferritin at low iron by HERC2-mediated ubiquitination; when cellular iron rises, that interaction weakens and NCOA4 engages the ferritin pool.
- **Complex formation and transport.** NCOA4–ferritin complexes are delivered along the microtubule network to the autophagosome.
- **Degradation.** Ferritin is proteolysed in the lysosome, releasing ferric iron that is reduced to ferrous Fe²⁺ by endogenous reductases.
- **Fate of the iron.** The liberated Fe²⁺ enters the labile iron pool. There it can (a) be reloaded into ferritin by iron storage proteins, or (b) catalyse the [[Fenton Reaction]] and drive hydroxyl-radical formation and [[Lipid Peroxidation]], the initiating event of [[Ferroptosis]].

Knockout or knockdown of ATG5/ATG7 limits erastin-induced ferroptosis by lowering intracellular ferrous iron and lipid peroxidation, establishing that the *autophagy machinery itself*, not only NCOA4, is required for the process.

## Relationship to ferroptosis

Ferroptosis is iron-dependent and driven by phospholipid peroxidation, usually because the glutathione/[[GPX4]] defence system is overwhelmed. Ferritinophagy supplies the iron. Consequently:

- Enhancing ferritinophagy raises the labile iron pool and lowers the ferroptosis threshold.
- Inhibiting it preserves iron inside the ferritin shell and suppresses ferroptosis, at the cost of also interfering with normal iron-recycling physiology.

The dependence is genuinely bidirectional: ferroptotic stress itself induces ferritinophagic flux, so NCOA4 sits in a feed-forward loop with the lipid-peroxidation machinery.

## Regulation

Ferritinophagic flux responds to several signals. Oxidative stress upregulates NCOA4 transcription and accelerates ferritin degradation. NCOA4 itself carries a [3Fe-4S] cluster that couples its activity to iron status, acting as an iron sensor upstream of ferritin binding. Post-translational signalling modifies the axis in disease contexts — lactylation of NCOA4 after cerebral ischaemia promotes ferritinophagy and neuronal glycolysis, and JNK-JUN signalling raises NCOA4 in chondrocytes to aggravate osteoarthritis.

> [!warning] Pathological dependence is cell-type specific
> Not every ferroptosis-prone tumour depends on ferritinophagy. Primary data report that ferritinophagy is dispensable for colon cancer cell growth, and NCOA4 expression has been associated with *favourable* immune infiltration in clear cell renal carcinoma. Whether a given tumour is NCOA4-dependent must be measured, not assumed.

## Pharmacological targeting

Ferritinophagy is a young but tractable drug axis:

- **NCOA4–FTH1 interface inhibitors** (compound 9a) bind the C-terminal region of NCOA4, block ferritin recruitment without inhibiting bulk autophagy, lower labile Fe²⁺, and show efficacy in ischaemia–reperfusion models.
- **PROTAC degraders** (PROTAC-V3) recruit NCOA4 to the VHL E3 ligase for proteasomal removal, abolishing ferritinophagy and suppressing ferroptosis in acute liver injury.
- **Ferritin stabilisers** such as the ellagitannin corilagin bind FTH1 and displace NCOA4, shielding ferritin from autophagic recognition.

Conversely, ferritinophagy induction can be exploited: [[Eltrombopag]] induces ferritinophagy in hematopoietic stem cells, which is one proposed contributor to its activity in bone marrow failure.

> [!important] Ceiling on selectivity
> Systemic NCOA4 inhibition risks iron-handling toxicity in erythropoiesis and immunity. Ferritinophagy inhibition is a *partial* ferroptosis blockade, not a substitute for GPX4 or system xᶜ⁻ restoration, and the two approaches are not interchangeable.

## Documents
- (no document notes yet)

## Connections
- [[NCOA4]] — the cargo receptor that ferritinophagy is defined by; NCOA4 gain or loss sets ferritinophagic flux and therefore the ferroptosis threshold.
- [[Ferritin]] — the substrate. Its degradation, not its abundance, is the regulated step that ferritinophagy controls.
- [[Ferroptosis]] — the downstream death programme ferritinophagy feeds, by generating the labile iron that catalyses lipid peroxidation.
- [[Autophagy]] — the machinery ferritinophagy borrows; ATG5/ATG7 loss blocks ferritin degradation as well as general autophagic flux.
- [[Fenton Reaction]] — the chemistry converting ferritin-derived Fe²⁺ into radicals, linking ferritinophagy to oxidative damage.
- [[Lipid Peroxidation]] — the terminal oxidised substrate class whose accumulation defines ferroptotic death.

## Linking Summary
- New links added: [[Ferritin]], [[NCOA4]], [[Ferroptosis]], [[Autophagy]], [[Fenton Reaction]], [[Lipid Peroxidation]], [[GPX4]], [[Eltrombopag]], [[Parkinson's Disease]], [[Alzheimer's Disease]]
- Suggested notes to create: [[Ferritin Heavy Chain]], [[Ferritin Light Chain]], [[Iron Regulatory Proteins]], [[Hepcidin]], [[Hemochromatosis]], [[NCOA4-FTH1 Interface]]
- Strong connections to strengthen: [[NCOA4]] ↔ [[Ferritinophagy]], [[Ferritinophagy]] ↔ [[Ferroptosis]], [[Ferritinophagy]] ↔ [[Ferritin]]