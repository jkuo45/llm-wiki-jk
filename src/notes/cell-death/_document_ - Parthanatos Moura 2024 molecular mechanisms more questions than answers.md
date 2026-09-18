---
title: "Molecular mechanisms of cell death by parthanatos: More questions than answers"
description: Moura et al. 2024 mini-review framing parthanatos as a PARP1-dependent, caspase-independent death whose downstream steps remain unresolved; surveys NAD+/glycolysis, free ADP-ribose–TRPM2 Ca2+, Nudix–AMP–AMPK, and AIF/MIF DNA fragmentation, and lists 17 open questions.
published: 2024-08-30
created: 2026-09-14
source: https://pmc.ncbi.nlm.nih.gov/articles/PMC11445734/
author:
  - Rafael Dias de Moura
  - Priscilla Doria de Mattos
  - Penélope Ferreira Valente
  - Nícolas Carlos Hoch
tags:
  - clippings
url: https://doi.org/10.1590/1678-4685-GMB-2023-0357
pmid: 39356140
journal: Genet Mol Biol. 2024;47(Suppl 1):e20230357
---

# Molecular mechanisms of cell death by parthanatos: More questions than answers (Moura et al. 2024)

Hoch-lab mini-review arguing that while strict [[PARP1]] dependence defines [[Parthanatos]], the events *downstream* of PARP1 hyperactivation — [[NAD+]] depletion, glycolytic block, free [[ADP-ribose]] generation, [[TRPM2]] gating, [[Nudix Hydrolases]]-derived [[AMP]], and [[Apoptosis-Inducing Factor|AIF]]/[[MIF]] DNA fragmentation — are contested and likely context-dependent. It ends each mechanistic section with open questions and calls for dissecting the cascade in single, well-defined model systems.

> [!important]
> Central claim — the field cannot yet say which downstream events are **necessary and sufficient** for parthanatos execution or how each step connects to the next. Different cell types and metabolic states appear to use different dominant execution arms. The review's open questions were restored below from the companion analysis in `task_output_parthanatos_open_questions_08_Sep_2026.md` (the article HTML preserved the "Open questions:" headings but not their text).

## ADP-ribosylation and PARP1 activation

[[ADP-ribosylation]] is the covalent transfer of ADP-ribose from [[NAD+]] onto proteins/nucleic acids, either as single units (mono-ADP-ribose, MAR) or as long/branched poly(ADP-ribose) ([[PAR]]). The main human PAR-catalysing enzyme is [[PARP1]] — an abundant nuclear protein with three DNA-binding zinc fingers (ZnF1–3), a central BRCT domain, a WGR domain, and a bipartite C-terminal catalytic module (auto-inhibitory helical subdomain + ADP-ribosyl transferase, ART, subdomain). Its zinc fingers give high affinity/specificity for DNA strand breaks, so PARP1 activates rapidly on diverse lesions and PARylates itself plus histones and repair proteins, recruiting PAR-binding repair factors. PARP1 also acts in chromatin remodelling, gene regulation, and inflammation; whether it is catalytically activated without a strand break in those settings is unclear.

> [!info]
> Parthanatos is triggered when DNA damage is severe enough that canonical pro-survival PARP1 signalling becomes hyperactivation. Genetic PARP1 deletion or pharmacological [[PARP inhibitors|PARP inhibition]] is strongly cytoprotective — this strict PARP1 dependence is the defining feature that separates parthanatos from [[Apoptosis]] and [[Necrosis]].

Triggers: alkylators [[MNNG]] (N-methyl-N′-nitro-N-nitrosoguanidine) and [[MMS]] (methyl methanesulfonate); oxidative/nitrosative bursts ([[Hydrogen Peroxide|H2O2]], other oxidants); glutamate/NMDA [[Excitotoxicity]] in neurons; streptozotocin-induced diabetes and MPTP parkinsonism; [[Ischemia-reperfusion Injury]]; and [[Neurodegeneration]] including [[Parkinson's Disease]] and [[Alzheimer's Disease]].

## NAD+ depletion and inhibition of glycolysis

Because every ADP-ribose unit transferred consumes one [[NAD+]], PARP1 hyperactivation rapidly and profoundly depletes cellular NAD+, accompanied by [[ATP]] loss — suggesting energetic collapse. Cellular NAD+ pools are compartmentalized: nuclear and cytoplasmic NAD+ equilibrate rapidly, whereas the mitochondrial pool is maintained separately.

Two competing accounts of the ATP drop:

- **NAD-centric (astrocyte culture):** NAD+ unavailability starves glycolysis/[[TCA cycle]] and reduces NADH for [[Oxidative Phosphorylation]]. Parthanatos-like events were induced by other NAD+-depleting treatments and prevented by exogenous NAD+; [[Pyruvate]] or [[α-Ketoglutarate]] (which feed the TCA cycle while bypassing glycolysis) rescued — implying a glycolytic defect. [[Nicotinamide Riboside|NR]]/[[Nicotinamide Mononucleotide|NMN]] prevented PARP1-dependent death in some settings. Caveat flagged by the authors: this may be an artefact of glucose-only medium (artificial CSF), since conventional media supply pyruvate. Glycolysis-reliant cells are more sensitive, and pyruvate reverses that.
- **PAR-centric (cortical neurons, glioblastoma lines):** profound NAD+ depletion *without* PARP1 hyperactivation was insufficient to cause ATP/glycolytic collapse or death, and NR restored the NAD+ pool without rescuing glycolysis — arguing PARP1 suppresses glycolysis more directly. Here [[PAR]] released from target proteins by PAR-degrading enzymes binds and inhibits [[Hexokinase-1]], blocking the first glycolytic step (and, via hexokinase, the [[Pentose Phosphate Pathway]] → [[NADPH]]/[[Glutathione]] supply). Pyruvate again rescued, consistent with glycolysis as a core target.

A third route to the NAD+/ATP uncoupling: [[AMP]] generated during PAR catabolism inhibits the mitochondrial adenine nucleotide translocator (ANT), impairing ADP import for oxidative phosphorylation.

> [!note]
> ATP depletion may act as the apoptosis-to-parthanatos switch. Lower cytotoxic DNA damage produces an intermediate NAD+ draw that the salvage pathway matches (transient NAD+/ATP dip → [[Apoptosis]]), whereas greater damage causes prolonged depletion that precludes apoptosis. Conversely, apoptotic caspases cleave PARP1 between its DNA-binding and catalytic domains to preserve ATP for apoptosis.

**Open questions (metabolism):**

- What factor(s) determine whether NAD+ supplementation does or does not prevent parthanatos induction?
- Is inhibition of glycolysis necessary and/or sufficient for parthanatos?
- How do free PAR chains inhibit hexokinase activity?
- Are NAD+ and ATP depletion mechanistically connected?
- Is there more extensive crosstalk between apoptosis and parthanatos, or only mutual antagonism (energy block vs PARP1 cleavage)?

## ADP-ribose monomers and Ca2+ release

The nicotinamide released during PAR synthesis is mostly recycled by the NAD+ salvage pathway, but the ADP-ribose moiety transferred onto proteins and released by PAR/MAR hydrolases generates free [[ADP-ribose]]. Free ADP-ribose gates the Ca2+-permeable channel [[TRPM2]] (two ADP-ribose binding sites). Oxidative stress raises intracellular Ca2+ alongside free ADP-ribose, in a PARP1- and TRPM2-dependent manner; the ADP-ribose-dependent route requires [[PARG]] activity, supporting a PARP1/PARG→ADP-ribose model. MNNG-induced parthanatos also causes Ca2+ influx. In renal ischemia-reperfusion, both PARP1 inhibition and Ca2+ chelation prevent death. But Ca2+ chelation suppressed death after H2O2 but not MNNG in another study, and Ca2+ can itself affect PARP1 activation by a poorly understood mechanism.

TRPM2 is plasma-membrane resident (extracellular Ca2+ influx only), yet Ca2+ release from the [[Endoplasmic Reticulum]] may also contribute; unlike TRPM2 gating, that arm was PARG-independent, implying a different channel-opening mechanism.

**Open questions (ADP-ribose, PAR hydrolases, and Ca2+):**

- Do PAR hydrolases, and PARG in particular, promote or inhibit parthanatos execution?
- How are free PAR chains generated in sufficient amounts, protected from hydrolytic enzymes, and transported out of the nucleus?
- Is ADP-ribose-induced TRPM2 gating necessary and/or sufficient for parthanatos execution?
- Are there TRPM2-dependent and TRPM2-independent modes of parthanatos?
- What are the downstream molecular effects of TRPM2-mediated increases in intracellular Ca2+?

## ADP-ribose degradation into AMP

Free [[ADP-ribose]] is further degraded by [[Nudix Hydrolases]] into [[AMP]] and ribose-5-phosphate. These enzymes cleave the phosphodiester bond of free ADP-ribose (or leave a phosphoribose mark on ADP-ribosylated proteins, thus far detected only in vitro). Ribose-5-phosphate can become PRPP, required for the NAD+ salvage pathway.

> [!important]
> Salvage is energetically expensive. The complete NAD+ salvage cycle — from NAD+ to a protein-attached ADP-ribose unit and back to NAD+ using the same carbon backbones — costs **four high-energy phosphate groups per ADP-ribose**. With NAD(H) ≈ 0.3 mM versus ATP ≈ 3–4 mM, fully consuming and re-salvaging cellular NAD+ could itself contribute substantially to ATP depletion during parthanatos (see Figure 2 of the review).

The relative contribution of Nudix-dependent salvage versus glycolytic inhibition to energetic collapse is unclear, but ADP/AMP accumulation may be an important death signal. MNNG treatment of HEK-293 cells activated [[AMPK]] (via raised AMP/ATP), which inhibited [[mTORC1]] — a regulator of death/survival and energy metabolism. That predicts an autophagic response (seen in some parthanatos models), but whether AMPK activation and [[Autophagy]] contribute to death or protect against it is unresolved.

**Open questions (AMP/AMPK):**

- Are Nudix hydrolases required for parthanatos execution?
- What is the relative contribution of AMP generated from ADP-ribose hydrolysis versus ATP depletion from glycolysis inhibition for the AMPK activation/autophagy observed in parthanatos?
- How do AMPK activation and autophagy affect cell death by parthanatos?

## AIF translocation and DNA fragmentation

[[Apoptosis-Inducing Factor|AIF]] is a mitochondrial flavoprotein that helps assemble respiratory-chain complexes but also mediates cell death. It normally sits in the inner mitochondrial membrane facing the intermembrane space, and can also be found loosely associated with the outer membrane. After PARP1 hyperactivation, AIF often translocates mitochondrion→nucleus, but some PARP1-dependent death models show no AIF translocation — implying AIF-dependent and AIF-independent forms of parthanatos. Retinal cells and macrophages, for example, do not show AIF translocation after PARP1-dependent death induction. AIF translocation also occurs with some apoptotic stimuli, recently suggested to rely on PARP1 activation too.

Mechanistically, AIF is thought to be released via direct interaction with free PAR polymers, but the molecular details are unclear. Alternatives include proteolytic release by the Ca2+-dependent protease [[Calpain|calpain I]] (which could respond to TRPM2-dependent Ca2+ influx or ER Ca2+ release), though evidence argues against a central calpain role in some models; and the [[Mitochondrial Permeability Transition Pore]], whose opening swells and ruptures mitochondria.

AIF nuclear translocation is associated with large-scale DNA fragmentation. Two mechanisms have been proposed:

- Cytoplasmic AIF binds [[MIF]] (macrophage migration inhibitory factor), which has nuclease activity, and co-translocates to the nucleus. A selective MIF-nuclease inhibitor protects in a mouse model of parkinsonism.
- AIF itself has nuclease activity proposed to degrade DNA in a complex with [[Cyclophilin A]] and histone [[H2A.X]].

**Open questions (AIF and DNA fragmentation):**

- What is the precise sequence of molecular events that promotes AIF release from mitochondria?
- How does AIF translocation promote DNA fragmentation, and what protein(s) catalyse(s) DNA cleavage?
- What defines AIF-dependent versus AIF-independent parthanatos, and what fragments DNA in AIF-independent death?
- What are the differences and similarities between apoptotic and parthanatic AIF translocation?

## Conclusions

DNA damage was first shown in the late 1970s to deplete NAD and ATP via PARP1 (Goodwin and colleagues). Almost 50 years on, many stimuli and pathologies of PARP1 hyperactivation are known, yet the sequence of downstream events driving parthanatos remains unresolved: which steps are necessary and sufficient, and how each connects to the next. Parthanatos also proceeds differently across cell types and metabolic states. The authors call for studies that compare all cascade steps within single, well-defined model systems — using differential reliance on NAD+ supplementation, [[PARG]]/[[ARH3]] activity, AIF translocation, or TRPM2 gating — to determine whether there are multiple parthanatos pathways or one integrating pathway, and how parthanatos intersects with other death programmes such as [[Apoptosis]].

## Acknowledgements

Work in the NCH lab is funded by FAPESP grant 2018/18007-5.

## Documents

- Source article: Moura RD, Mattos PD, Valente PF, Hoch NC. *Genet Mol Biol* 2024;47(Suppl 1):e20230357. PMID 39356140; DOI 10.1590/1678-4685-GMB-2023-0357.
- Companion analysis updating all 17 questions with 2014–2026 literature: `task_output_parthanatos_open_questions_08_Sep_2026.md`.

## Connections

- [[Parthanatos]] — the review's subject; defines the PARP1-dependent, caspase-independent program and its unresolved downstream cascade.
- [[PARP1]] — sole obligatory upstream enzyme; hyperactivation is defining; inhibitors/knockout are cytoprotective.
- [[NAD+]] — consumed substrate; compartmentalized pools and salvage-cost ATP debt are central unresolved nodes.
- [[PAR]] — the polymer death signal; length/complexity gates toxicity; exported from nucleus to cytosol/mitochondria.
- [[PARG]] / [[ARH3]] — opposing erasers whose net activity determines free-PAR (and free-ADP-ribose) availability.
- [[Apoptosis-Inducing Factor|AIF]] — mitochondrial death effector; PAR-bound release, AIF-dependent vs independent parthanatos.
- [[MIF]] — PAAN nuclease recruited by AIF; alternative AIF–[[Cyclophilin A|CypA]]–[[H2A.X]] nuclease model.
- [[Hexokinase-1]] — PAR-inhibited glycolytic gate; bioenergetic arm.
- [[ADP-ribose]] — free monomer linking PAR catabolism to TRPM2 gating and Nudix salvage.
- [[TRPM2]] — ADP-ribose-gated Ca2+ channel; PARG-dependent gating; ER-release alternative.
- [[Nudix Hydrolases]] — convert ADP-ribose to AMP + ribose-5-phosphate; salvage-cost and AMPK arm.
- [[AMPK]] / [[mTORC1]] / [[Autophagy]] — energy-sensing overlay of unclear polarity.
- [[Apoptosis]] — mutual antagonism via the ATP switch and caspase cleavage of PARP1.

## Linking Summary

- New document note in `src/notes/cell-death/` (topic: cell-death; cross-topic: oxidative-stress, neurodegeneration, metabolism).
- New links added: [[Parthanatos]], [[PARP1]], [[ADP-ribosylation]], [[NAD+]], [[PAR]], [[PARG]], [[ARH3]], [[Apoptosis-Inducing Factor|AIF]], [[MIF]], [[Hexokinase-1]], [[ADP-ribose]], [[TRPM2]], [[Nudix Hydrolases]], [[AMPK]], [[mTORC1]], [[Autophagy]], [[Apoptosis]], [[Calpain]], [[Mitochondrial Permeability Transition Pore]], [[Excitotoxicity]], [[Ischemia-reperfusion Injury]], [[Neurodegeneration]].
- Enriched entity notes with source callouts/Documents: Parthanatos, PARP1, PAR, PARG, ARH3, Apoptosis-Inducing Factor, MIF, TRPM2, Hexokinase-1, Nudix Hydrolases, NAD+, Apoptosis, SLC25A51, Calpain, Mitochondrial Permeability Transition Pore.
- Suggested new entity notes to create (Step 3): none outstanding — [[MNNG]], [[MMS]], [[Cyclophilin A]], [[PAANIB-1]], [[PARG53]], [[Iduna]], [[H1.2]] created 2026-09-14.
- Strong connections to strengthen: [[Parthanatos]] ↔ [[PARP1]], [[Parthanatos]] ↔ [[Apoptosis-Inducing Factor|AIF]], [[Parthanatos]] ↔ [[Hexokinase-1]], [[Parthanatos]] ↔ [[PARG]].
