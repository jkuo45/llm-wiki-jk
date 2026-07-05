---
type: entity
category: biological_process
entity_type: ""
created: 2024-01-01
updated: 2024-01-01
---

# Mitophagy

**Mitophagy** is a specialized form of [[Selective Autophagy]] that targets damaged or dysfunctional [[notes/_link/Mitochondria]] for degradation. It is a critical quality control mechanism for maintaining mitochondrial health and cellular homeostasis.

## Mechanism
Mitophagy typically involves the recognition of damaged mitochondria by receptors (like PINK1/Parkin) and their subsequent engulfment by [[Autophagosome|autophagosomes]], which then fuse with [[Lysosome|lysosomes]].

## Importance in Aging
A decline in mitophagy is associated with the accumulation of dysfunctional mitochondria, which can lead to:
- Increased [[notes/_link/Reactive Oxygen Species]] (ROS) production.
- Triggering of [[notes/_link/Inflammaging]].
- Impaired [[Immune Aging|immune cell function]].

## Regulation
Mitophagy can be modulated by various factors, including energy status (via [[notes/_link/AMPK]]), and pharmacological agents that act as [[Autophagy Inducer|autophagy inducers]].

### Linking Summary:

- New links added: [[Autophagy]], [[Mitochondria]], [[Quiescence]], [[Reactive Oxygen Species]], [[ROS]]
- Suggested new entity notes to create: [[Oxidative Stress]]
- Strong connections to strengthen: [[Mitophagy]] ↔ [[Hematopoietic Stem Cell]]

## Content from [[adrenochrome/Mitophagy.md]]

# Mitophagy

The selective degradation of mitochondria by [[Autophagy]]. It is a critical quality control mechanism to remove damaged or dysfunctional mitochondria, often regulated by the [[PINK1]]/[[Parkin]] pathway.

### Linking Summary

- New links added: [[PINK1]], [[Parkin]], [[Autophagy]]

## Pink1/Parkin Pathway Mechanism

The PTEN-induced putative kinase 1 ([[PINK1]])/[[Parkin]] pathway is the most extensively characterized mitophagy mechanism. In healthy mitochondria, [[PINK1]] (a serine/threonine kinase) is constitutively imported into the inner mitochondrial membrane via the TOM/TIM complexes and cleaved by [[PARL]] (presenilin-associated rhomboid-like protease), followed by rapid proteasomal degradation. When mitochondria become depolarized — due to electron transport chain dysfunction, [[Mitochondrial calcium uniporter]] overload, or oxidative damage — Pink1 import is arrested at the outer mitochondrial membrane (OMM). Full-length Pink1 accumulates on the OMM, where it dimerizes and autophosphorylates, activating its kinase domain. Activated Pink1 phosphorylates both [[Parkin]] (an E3 ubiquitin ligase) at Ser65 and ubiquitin molecules at Ser65, creating a phospho-ubiquitin signal that recruits and fully activates Parkin. Parkin then ubiquitinates a network of OMM proteins, including MFN1, MFN2, and VDAC1, building ubiquitin chains that serve as a recognition signal for autophagy receptors such as p62/SQSTM1, NBR1, OPTN, and NDP52. These receptors simultaneously bind ubiquitin and LC3/GABARAP family proteins on the phagophore membrane, tethering the damaged mitochondrion to the forming autophagosome.

## Receptor-Mediated Mitophagy

In addition to the Pink1/Parkin ubiquitin-dependent pathway, cells employ receptor-mediated mitophagy that operates independently of mitochondrial depolarization:
- **[[BNIP3]]** and **[[NIX]]** (BNIP3L): These hypoxia-inducible BH3-only proteins are transcriptionally upregulated by [[HIF-1α]]. They localize to the OMM and contain an LIR (LC3-interacting region) motif that directly binds LC3, tethering mitochondria to autophagosomes. BNIP3-mediated mitophagy removes mitochondria during erythroid maturation and under hypoxic stress.
- **[[FUNDC1]]**: A receptor that mediates hypoxia-induced mitophagy in a phosphorylation-dependent manner. Under normoxia, [[SRC kinase]] and [[CK2]] phosphorylate FUNDC1, preventing LC3 binding. Dephosphorylation by [[PGAM5]] under hypoxic or mitochondrial stress conditions activates its mitophagy function.
- **FAM176A** and **AMBRA1**: Additional OMM proteins with LIR motifs that recruit autophagic machinery.

## Connection to Mitochondrial Quality Control

Mitophagy operates within a broader mitochondrial quality control network that includes [[Mitochondrial Dynamics]] (fission/fusion), the [[Mitochondrial Unfolded Protein Response]] (UPRmt), and mitochondrial-derived vesicles (MDVs). Fission serves as a prerequisite for efficient mitophagy: damaged mitochondrial segments are fragmented by [[DRP1]]-mediated fission and selectively engulfed, while healthy segments rejoin the network via [[MFN1]]/[[MFN2]]-mediated fusion. The UPRmt transmits proteotoxic stress signals (via [[ATFS-1]] in worms; [[ATF4]], [[ATF5]], [[CHOP]] in mammals) to the nucleus, upregulating chaperones and proteases to restore mitochondrial proteostasis. Mitophagy represents the final "fail-safe" when repair mechanisms are overwhelmed.

## Role in Aging and Neurodegeneration

Mitophagy efficiency declines with age, contributing to the accumulation of dysfunctional mitochondria that generate excessive [[notes/_link/Reactive Oxygen Species]], release pro-apoptotic factors, and trigger inflammatory signaling via cytosolic mtDNA and [[NLRP3 Inflammasome]] activation. Impaired mitophagy is a hallmark of [[Parkinson's Disease]], where Pink1 and Parkin mutations cause early-onset familial forms, and of [[Alzheimer's Disease]], where amyloid-β and tau pathology impair mitophagy flux. Enhancing mitophagy through pharmacological interventions (e.g., [[Urolithin A]], [[Actinonin]], [[Metformin]], NAD⁺ precursors) restores mitochondrial function and extends healthspan in model organisms.

## Links to Adrenochrome-Induced Mitochondrial Damage

[[Adrenochrome]] and related aminochromes are mitochondrial toxins that directly compromise the organelle they trigger removal of. Adrenochrome undergoes redox cycling at Complex I of the electron transport chain, generating superoxide and consuming NADH. This leads to mitochondrial depolarization — precisely the signal that activates the Pink1/Parkin mitophagy pathway. Sustained adrenochrome exposure may exhaust mitophagic capacity, creating a scenario where damaged mitochondria accumulate and amplify ROS production. This mitophagy-impairment feedback loop is a plausible mechanism linking catecholamine oxidation to the mitochondrial dysfunction observed in aging, neurodegeneration, and cardiovascular disease. The interplay between [[Adrenochrome Pathway]] activity and mitophagy competence represents a critical nexus for therapeutic intervention.

### Linking Summary:
- New links added: [[PARL]], [[Mitochondrial calcium uniporter]], [[BNIP3]], [[NIX]], [[FUNDC1]], [[HIF-1α]], [[DRP1]], [[MFN1]], [[MFN2]], [[ATFS-1]], [[ATF4]], [[ATF5]], [[CHOP]], [[Mitochondrial Unfolded Protein Response]], [[Mitochondrial Dynamics]], [[notes/_link/Reactive Oxygen Species]], [[NLRP3 Inflammasome]], [[Parkinson's Disease]], [[Alzheimer's Disease]], [[Urolithin A]], [[Actinonin]], [[Metformin]], [[NAD+]], [[Aging]], [[Longevity]]
- Suggested new entity notes to create: [[MDV (Mitochondrial-Derived Vesicles)]], [[p62/SQSTM1]]
- Strong connections to strengthen: [[Mitophagy]] ↔ [[Parkinson's Disease]], [[Mitophagy]] ↔ [[Adrenochrome]], [[Mitophagy]] ↔ [[Aging]]
