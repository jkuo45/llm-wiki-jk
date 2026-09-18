---
title: Apoptosis-Inducing Factor
description: Apoptosis-Inducing Factor (AIF) is a mitochondrial flavoprotein originally linked to caspase-independent apoptosis; its paralog AIFM2 is the ferroptosis suppressor FSP1.
protected: true
created: 2026-08-24
updated: 2026-09-14
tags: [protein, mitochondria, ferroptosis, apoptosis, cell-death]
aliases: [AIF, AIFM1, apoptosis-inducing factor mitochondria-associated 1]
---
# Apoptosis-Inducing Factor

**Apoptosis-Inducing Factor (AIF)**, encoded by **AIFM1**, is a mitochondrial flavoprotein originally identified as a caspase-independent apoptotic effector. When released from mitochondria to the cytosol/nucleus, AIF induces chromatin condensation and large-scale DNA fragmentation. Although AIF itself is an apoptosis mediator, the ferroptosis field is intimately connected to AIF because its paralog **AIFM2** is the protein now known as [[FSP1]] (ferroptosis suppressor protein 1, formerly AIFM2/AIF-M2).

## Structure & Biochemistry

AIF is a黄素蛋白 (flavoprotein) with an oxidoreductase-like fold and a mitochondrial localization signal; it resides in the intermembrane space anchored to the outer surface of the inner mitochondrial membrane. Its paralog AIFM2/FSP1 is a myristoylated flavoprotein that localizes to the plasma membrane.

## Mechanism of Action & Pathway

Classically, apoptotic stimuli trigger AIF translocation from mitochondria to the nucleus, where it promotes caspase-independent chromatinolysis. In ferroptosis, the relevant AIF-family member is **AIFM2 = FSP1**: FSP1 is recruited to the plasma membrane via myristoylation, where it acts as an oxidoreductase that reduces [[Coenzyme Q10|CoQ10]] (ubiquinone-10) to its antioxidant (ubiquinol) form, trapping lipid radicals and suppressing [[Lipid Peroxidation]] independently of [[GPX4]]/[[Glutathione]] (Bersuker et al.; Doll et al., 2019). Thus the AIF protein family bridges apoptosis (AIFM1) and ferroptosis suppression (AIFM2/FSP1).

> [!info] Nomenclature caution
> Do not confuse AIF (AIFM1, pro-apoptotic) with FSP1/AIFM2 (anti-ferroptotic). The review notes FSP1 was "previously known as AIF-M2," which is why AIF appears in ferroptosis literature.

## Physiological Function

AIF is essential for mitochondrial respiratory complex assembly (specifically CI integrity) and, upon release, mediates a death-execution program. FSP1/AIFM2 guards membranes against lipid peroxidation.

## Pathology & Clinical Relevance

AIFM1 mutations cause mitochondrial disease; FSP1 loss sensitizes tumors to ferroptosis, making it a therapeutic target in [[Cancer]] and a resistance factor in [[Hepatocellular Carcinoma]]. The AIF/FSP1 axis exemplifies how apoptosis and ferroptosis regulators are molecularly intertwined.

#


**AIF** (Apoptosis-inducing factor, gene *AIFM1*) is a flavoprotein normally resident in the mitochondrial intermembrane space, where it functions as an NADH oxidase contributing to oxidative phosphorylation and maintenance of mitochondrial structure. Upon severe cellular stress it is released and translocates to the nucleus, where it executes a **caspase-independent** form of programmed cell death — a distinct arm of [[Apoptosis]] and [[Cell Death]].

## Structure & Localization

AIF contains an N-terminal mitochondrial targeting sequence, a central flavin-binding domain related to oxidoreductases, and a C-terminal nuclear localization sequence exposed after proteolytic cleavage. In healthy mitochondria, AIF supports respiratory complex I assembly and stability. Its redox activity is independent of its lethal nuclear function.

## Mechanism of Action

Following mitochondrial outer membrane permeabilization (see [[Intrinsic Pathway]]), AIF is cleaved by calpains or cathepsins and translocates to the nucleus. There it binds to [[DNA]] and, together with [[Cyclophilin A]], induces large-scale (~50 kb) chromatin fragmentation and [[chromatin condensation]]. This caspase-independent route ensures death execution even when caspases are inhibited (e.g., by [[IAPs]] or viral inhibitors), providing a fail-safe lethal program.

> [!info] Parthanatos specifics
> PAR-binding motif on AIF-D3 (Arg588/Lys589/Arg592), separate from the DNA-binding site — mutation retains oxidase/DNA binding but blocks PAR-induced release/death. Rapid release of the 20–30% outer-membrane pool precedes cytochrome c. Calpain cleavage (62→57 kDa) is dispensable for canonical parthanatos; calpain–BID–BAX wiring (tBID → BAX → AIF) operates caspase-independently (Galán-Malo 2012). Nuclear execution via [[MIF]]/PAAN or CypA–H2AX complexes; [[HSP70]] sequesters cytosolic AIF as brake.

> [!info]
> Source: [[_document_ - Parthanatos Moura 2024 molecular mechanisms more questions than answers|Moura et al. 2024]]
> The review separates **AIF-dependent** from **AIF-independent** parthanatos: some PARP1-dependent death models (retinal cells, macrophages) show no detectable AIF translocation and die via energy collapse/mitochondrial fission instead. It lists as open questions the precise sequence of AIF release, the nuclease that fragments DNA, and the difference between apoptotic and parthanatic AIF translocation. Competing release models are direct [[PAR]] binding, [[Calpain|calpain I]] proteolysis (evidence against a central role in some models), and the [[Mitochondrial Permeability Transition Pore]]; competing nucleases are [[MIF]]/PAAN and an AIF–cyclophilin A–[[H2A.X]] complex.

## Physiological Function (Development & Viability)

Beyond cell death, AIF is essential for life: AIFM1 loss causes a severe mitochondrial encephalopathy (combined oxidative phosphorylation deficiency) in humans. In development, AIF-mediated caspase-independent death shapes cavitation during lumen formation and removes superfluous cells in select tissues.

## Pathological & Cancer Relevance

- **Tumor Cell Death**: AIF contributes to the lethality of many [[Chemotherapy]] agents and radiotherapy, particularly when they inflict catastrophic oxidative damage. Agents that trigger reactive oxygen species ([[Oxidative Stress]]) can engage AIF as a backup death route.
- **Resistance**: Caspase-deficient or [[Apoptosis]]-resistant tumors may still be killed via AIF, making it a therapeutic target of interest. Conversely, AIF downregulation can confer resistance to certain cytotoxic drugs.
- **Neuroprotection Interface**: Because AIF release also occurs in excitotoxic and ischemic injury, AIF inhibitors are explored neuroprotectively — a balance relevant where tumor and normal tissue share apoptotic vulnerability.

## Sex dimorphism

Nuclear AIF translocation kills males but not females after adult cerebral ischemia: PAR formation and AIF translocation occur in both sexes, yet PARP-1 deletion or AIF deficiency (Harlequin) protects males only, while females die preferentially via cytochrome-c/caspase-3 (McCullough et al. 2005, PMID 15689952; Yuan et al. 2009, *Exp Neurol* 217:210–218; Liu et al. 2009, *Stroke*, PMID 19265047). The split is cell-autonomous — XY neurons favor AIF-mediated death, XX neurons caspase death in vitro (Du et al. 2004, *J Biol Chem*). Neonatal males are likewise preferentially protected by PARP-1 disruption after hypoxia-ischemia (Hagberg et al. 2004, *J Neurochem*), with a both-sex additive benefit of AIF reduction plus caspase inhibition as caveat (Zhu et al. 2006, *Cell Death Differ*). See [[Parthanatos]] for the full PARP-1/PAR/AIF sex-dimorphic cascade.

## Documents

  - [[_document_ - Ferroptosis past present and future|Ferroptosis: past, present and future]]
    - The review explains that FSP1 was formerly known as AIFM2/AIF-M2; it reintroduces AIF in the ferroptosis context and describes FSP1 as a myristoylated plasma-membrane oxidoreductase reducing CoQ10.
  - [[_document_ - Parthanatos Andrabi 2008 mitochondrial nuclear crosstalk|Andrabi/Dawson 2008 Ann NY Acad Sci]]
    - AIFM1 is the parthanatos executioner: PARP-1-KO cells fail to release AIF; knockdown/neutralization protects; Harlequin (~80% reduction) resists NMDA/PAR and stroke; re-expression restores susceptibility.
  - [[_document_ - Parthanatos David 2009 messenger of death|David et al. 2009 Front Biosci]]
    - AIF maturation 67→62→57 kDa, FAD/NADH oxidoreductase fold, Complex-I/redox day-job; nuclear translocation kills caspase-independently via CypA; blocked by neutralizing antibodies/HSP70.
  - [[_document_ - Apoptosis in cancer from pathogenesis to treatment|Apoptosis in cancer from pathogenesis to treatment]]
    - Other apoptotic factors released from the mitochondrial intermembrane space include AIF, Smac DIABLO and Omi/HtrA2.
  - [[_document_ - sirtuins Michan_S_Sinclair_D_Sirtuins_in_mammals_insights_i|sirtuins Michan_S_Sinclair_D_Sirtuins_in_mammals_insights_i]]
    - SIRT1 promotes PARP-1-mediated cell survival via AIF; SIRT1 deacetylates histone variant H2A.Z linked to cardiac hypertrophy.
  - [[_document_ - Parthanatos Moura 2024 molecular mechanisms more questions than answers|Moura et al. 2024 Genet Mol Biol]]
    - AIF-dependent vs AIF-independent parthanatos; release routes (PAR binding, calpain, mPTP) and DNA-cleavage models ([[MIF]]/PAAN vs AIF–cyclophilin A–[[H2A.X]]) framed as open questions.

## Connections

  - [[FSP1]]: The AIFM2 paralog that suppresses ferroptosis
  - [[Apoptosis]]: Classical death program executed by AIFM1
  - [[Coenzyme Q10]]: Reduced by FSP1 to trap lipid radicals
  - [[GPX4]]: Parallel, GPX4-independent antioxidant axis
  - [[Lipid Peroxidation]]: Process restrained by FSP1
  - [[Intrinsic Pathway]]: AIF release is triggered by MOMP.
  - [[Apoptosis]]: Executes caspase-independent programmed death.
  - [[chromatin condensation]]: Morphological hallmark induced by AIF.
  - [[Cyclophilin A]]: Nuclear partner of AIF in DNA fragmentation.
  - [[Oxidative Stress]]: Trigger that promotes AIF-mediated death.
  - [[Cell Death]]: Broader category encompassing AIF function.
  - [[Chemotherapy]]: Many agents engage AIF.

## Linking Summary

- New links added: [[FSP1]], [[Apoptosis]], [[Coenzyme Q10]], [[GPX4]], [[Glutathione]], [[Lipid Peroxidation]], [[Cancer]], [[Hepatocellular Carcinoma]], [[Ferroptosis]]
- Suggested new entity notes to create: None
- Strong connections to strengthen:
    - [[Apoptosis-Inducing Factor]] ↔ [[FSP1]]
    - [[Apoptosis-Inducing Factor]] ↔ [[Apoptosis]]

## Linking Summary (Consolidated from AIF.md)

- New links added: [[Apoptosis]], [[Intrinsic Pathway]], [[Cell Death]], [[chromatin condensation]], [[Cyclophilin A]], [[Oxidative Stress]], [[DNA]], [[IAPs]], [[Chemotherapy]], [[Mitochondrial Respiration]]
- Suggested new entity notes to create: [[Cyclophilin A]], [[AIFM1]], [[caspase-independent cell death]]
- Strong connections to strengthen: [[Apoptosis-Inducing Factor|AIF]] ↔ [[Intrinsic Pathway]], [[Apoptosis-Inducing Factor|AIF]] ↔ [[Oxidative Stress]]
- Sex-dimorphism enrichment (2026-09-03): AIF translocation lethal in males only; cell-autonomous XY/XX split (McCullough 2005; Yuan 2009; Du 2004). New links: [[Parthanatos]], [[PARP1]].
- Source enrichment (2026-09-14): Moura et al. 2024 — AIF-dependent vs AIF-independent parthanatos and unresolved release/nuclease models. New links: [[MIF]], [[Calpain]], [[Mitochondrial Permeability Transition Pore]], [[H2A.X]], [[PAR]].
