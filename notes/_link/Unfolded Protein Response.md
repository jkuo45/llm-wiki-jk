---
title: Unfolded Protein Response
description: A cellular stress response related to the endoplasmic reticulum (ER)
  stress.
created: 2024-01-01
updated: 2026-07-06
tags:
  - biological-process
aliases: []
---

# Unfolded Protein Response

The **Unfolded Protein Response (UPR)** is a conserved cellular stress response pathway activated when misfolded or unfolded proteins accumulate in the [[Endoplasmic Reticulum]] (ER) lumen. The UPR is the central mechanism by which cells maintain [[ER proteostasis]] — the balance between protein folding demand and folding capacity. Three parallel signaling branches coordinate the response: [[IRE1]] (Inositol-Requiring Enzyme 1), [[PERK]] (PKR-like ER Kinase), and [[ATF6]] (Activating Transcription Factor 6). Under non-stressed conditions, all three sensors are held in an inactive state through binding to the ER chaperone [[BiP]] (also known as [[GRP78]]). When misfolded proteins accumulate, BiP is titrated away to assist in folding, triggering sensor activation. The UPR orchestrates three broad outcomes: (1) attenuation of global protein synthesis to reduce the ER folding load, (2) transcriptional upregulation of ER chaperones and folding enzymes to increase folding capacity, and (3) induction of ER-associated degradation ([[ERAD]]) to clear terminally misfolded proteins. If these adaptive measures fail to resolve the stress, the UPR switches from pro-survival to pro-apoptotic signaling, engaging [[CHOP]], [[JNK]], and [[caspase]] cascades that ultimately drive the cell toward [[Apoptosis]].

## UPR Sensors & Signaling

### IRE1 Branch

[[IRE1]] ([[ERN1]] in mammals) is the most evolutionarily ancient UPR sensor, possessing both [[serine/threonine kinase]] and [[endoribonuclease]] (RNase) domains. Upon BiP dissociation, IRE1 oligomerizes on the ER membrane, leading to [[trans-autophosphorylation]] and activation of its RNase domain. The canonical RNase target is the mRNA encoding [[XBP1]] (X-box Binding Protein 1). IRE1 catalyzes an unconventional [[cytoplasmic splicing]] reaction that removes a 26-nucleotide intron from XBP1 mRNA, producing a [[frameshift]] that yields the potent transcription factor [[sXBP1]] (spliced XBP1). sXBP1 translocates to the nucleus and drives a broad transcriptional program encompassing ER chaperones ([[BiP]], [[GRP94]], [[calreticulin]]), ERAD components ([[Derlin-1]], [[EDEM]], [[Herp]]), and lipid biosynthetic enzymes ([[DGAT2]], [[SCAP]], [[SREBP]] cleavage). This arm is critical for expanding ER membrane and lumenal capacity (a process called ER biogenesis).

IRE1 also mediates [[Regulated IRE1-Dependent Decay]] ([[RIDD]]), wherein the RNase degrades a subset of ER-localized mRNAs, reducing the burden of proteins entering the secretory pathway. Under sustained stress, IRE1 recruits the adaptor protein [[TRAF2]], which activates the [[ASK1]] kinase cascade, culminating in [[JNK]] phosphorylation. JNK signaling promotes [[Apoptosis]] through both [[mitochondrial]] (intrinsic) and [[death receptor]] (extrinsic) pathways. IRE1 also activates the [[NF-κB]] pathway via [[TRAF2]]-dependent [[IKK]] activation, linking ER stress to [[inflammation]].

### PERK Branch

[[PERK]] ([[EIF2AK3]]) is a type I ER transmembrane protein whose lumenal domain senses unfolded proteins via BiP dissociation, triggering dimerization and autophosphorylation. Active PERK phosphorylates the α subunit of eukaryotic initiation factor 2 ([[eIF2α]]) at Ser51. Phospho-eIF2α inhibits the guanine nucleotide exchange factor [[eIF2B]], globally attenuating [[cap-dependent translation]] and reducing the influx of nascent polypeptides into the ER. This translational arrest is an immediate (minutes-scale) protective response that lowers ER workload.

Paradoxically, phospho-eIF2α selectively enhances translation of certain mRNAs containing [[upstream open reading frames]] ([[uORFs]]) in their 5′ untranslated regions. The most well-characterized is [[ATF4]] (Activating Transcription Factor 4), a master regulator of the [[Integrated Stress Response]] ([[ISR]]). ATF4 upregulates genes involved in [[amino acid metabolism]] ([[Asns]], [[SLC7A11]]), [[redox homeostasis]] ([[HO-1]], [[SOD2]]), [[autophagy]] ([[ATG5]], [[ATG7]], [[Beclin 1]]), and ER chaperones. However, if ER stress is prolonged, ATF4 drives expression of [[CHOP]] ([[DDIT3]]/[[GADD153]]), a [[pro-apoptotic]] transcription factor. CHOP downregulates [[Bcl-2]], upregulates [[BIM]], and induces [[ERO1α]], leading to [[ER hyper-oxidation]] and [[calcium]] release from the ER, sensitizing mitochondria to [[cytochrome c]] release and [[caspase]] activation. CHOP is a key switch from adaptive to apoptotic UPR and operates in parallel with IRE1-JNK signaling.

### ATF6 Branch

[[ATF6]] (Activating Transcription Factor 6) is a type II ER transmembrane protein with a [[bZIP]] transcription factor domain in its cytosolic N-terminus. Unlike IRE1 and PERK, ATF6 activation involves Golgi translocation rather than oligomerization. Upon BiP dissociation, ATF6 is released from ER retention and traffics to the [[Golgi apparatus]] via [[COPII]] vesicles. In the Golgi, ATF6 undergoes regulated intramembrane [[proteolysis]] by [[site-1 protease]] ([[S1P]]) and [[site-2 protease]] ([[S2P]]), liberating its N-terminal cytosolic fragment, [[ATF6(N)]]. ATF6(N) then enters the nucleus and binds to [[ER stress response elements]] ([[ERSE]]) in target gene promoters.

ATF6(N) transcriptionally activates a distinct but overlapping set of UPR genes, including ER chaperones ([[BiP]], [[GRP94]], [[calreticulin]], [[PDI]] [[Protein Disulfide Isomerase]]), ERAD components, and [[XBP1]] itself, providing a feed-forward mechanism. ATF6 also cooperates with [[sXBP1]] at shared ERSE motifs to amplify the adaptive response. The ATF6 arm is particularly important for recovery from acute ER stress and for restoring ER homeostasis after the stressor is removed.

## Physiological Function

The UPR is essential for normal cellular physiology, particularly in [[secretory cells]] that face high protein-folding loads. In [[plasma cells]], the UPR (predominantly the IRE1/XBP1 axis) is required for differentiation and high-level [[immunoglobulin]] production. [[Pancreatic β-cells]] rely on the UPR to manage [[insulin]] biosynthesis, and PERK mutations cause [[Wolcott-Rallison syndrome]], a neonatal diabetes syndrome, underscoring the pathway's necessity. [[Hepatocytes]] engage the UPR to support [[apolipoprotein]] and [[albumin]] secretion, and XBP1 is required for [[lipid biosynthesis]] in the liver. The UPR also regulates [[immune signaling]] through cross-talk with [[NF-κB]], [[JAK/STAT]], and [[type I interferon]] pathways. During [[embryonic development]], the UPR supports organogenesis in high-secretory tissues. The [[ATF6]] arm provides protection against chronic mild stress, while [[PERK]] guards against acute translation overload. Basal UPR activity is detectable in all cell types and adjusts dynamically to meet secretory demand.

## Pathology & Clinical Relevance

### Neurodegeneration

ER stress is a hallmark of multiple [[neurodegenerative diseases]]. In [[Alzheimer's Disease]], both [[Aβ]] oligomers and [[Tau]] tangles induce UPR activation. p-eIF2α is elevated in patient brains, and genetic or pharmacological attenuation of PERK signaling rescues synaptic plasticity and memory deficits in mouse models. In [[Parkinson's Disease]], [[α-synuclein]] aggregates trigger ER stress via PERK and IRE1. [[CHOP]] knockout mice show reduced dopaminergic neuron loss in MPTP models. In [[Huntington's Disease]], [[polyglutamine]] ([[polyQ]]) expansions in [[huntingtin]] cause chronic UPR activation. In [[Amyotrophic Lateral Sclerosis]] ([[ALS]]), mutant [[SOD1]] and [[TDP-43]] aggregates induce persistent ER stress, and UPR markers are elevated in postmortem spinal cord.

### Metabolic Disease

[[Pancreatic β-cell]] dysfunction in [[Type 2 Diabetes Mellitus]] ([[T2DM]]) is driven by chronic ER stress due to insulin resistance and [[glucolipotoxicity]]. Sustained PERK activation leads to β-cell apoptosis. [[Non-alcoholic Fatty Liver Disease]] ([[NAFLD]]) involves ER stress from lipid overload, driving [[steatosis]] and inflammation through IRE1-JNK and ATF6 activation. [[PERK]] and [[IRE1]] inhibitors are being explored as metabolic therapeutics.

### Cancer

Tumor cells face chronic ER stress from [[hypoxia]], [[nutrient deprivation]], and high secretory demand (e.g., [[multiple myeloma]]). The UPR is co-opted as an adaptive survival mechanism. [[sXBP1]] is required for [[multiple myeloma]] cell survival, and PERK-ATF4 signaling supports tumor growth under hypoxia. Targeting the UPR is a therapeutic strategy: [[IRE1]] inhibitors (e.g., [[MKC-8866]], developed by [[ManniKind]]) are in early clinical development for [[triple-negative breast cancer]] and [[multiple myeloma]].

### Viral Infection

Viruses such as [[SARS-CoV-2]], [[hepatitis C virus]], and [[influenza]] hijack the ER for replication, inducing UPR. Some viruses suppress PERK signaling to avoid translational arrest, while others activate ATF6 to promote membrane biogenesis for replication compartments.

### Therapeutic Approaches

[[Tauroursodeoxycholic Acid]] ([[TUDCA]]) and [[4-Phenylbutyrate]] ([[4-PBA]]) are chemical chaperones that reduce ER stress and improve folding capacity. [[ISRIB]] (Integrated Stress Response Inhibitor) reverses the effects of p-eIF2α, enhancing translation even under PERK activation, and shows promise in cognitive enhancement and neurodegeneration models. [[IRE1 RNase inhibitors]] ([[MKC-8866]], [[STF-083010]]) block XBP1 splicing and RIDD. [[PERK inhibitors]] ([[GSK2606414]]) have been explored but faced toxicity at high doses. [[ATF6 activators]] ([[ceapins]]) and inhibitors are under investigation.

# 

## Documents

List of documents that mention this entity

  - [[_document_ - TFEB AND TFE3, LINKING LYSOSOMES TO CELLULAR ADAPTATION TO STRESS|TFEB AND TFE3, LINKING LYSOSOMES TO CELLULAR ADAPTATION TO STRESS]]
    - ER stress Accumulation of misfolded proteins in the ER is a potent stress signal that induces activation of stress responses, such as the Unfolded Protein Response (UPR) and Autophagy, with the goal of reestablishing cell homeostasis.


## Connections

- [[Unfolded Protein Response]] — related entity
- [[Endoplasmic Reticulum]] — organelle where the UPR is activated
- [[Apoptosis]] — terminal outcome of unresolved UPR
- [[ERAD]] — UPR-induced quality control pathway
- [[Autophagy]] — linked via ATF4 and CHOP
- [[Integrated Stress Response]] — shares the PERK-eIF2α-ATF4 axis
- [[Inflammation]] — UPR cross-talk via NF-κB and JNK
- [[Lipid Biosynthesis]] — regulated by sXBP1
- [[Neurodegeneration]] — UPR dysfunction in AD, PD, HD, ALS

## Linking Summary

- New links added: [[IRE1]], [[PERK]], [[ATF6]], [[BiP]], [[GRP78]], [[CHOP]], [[JNK]], [[XBP1]], [[sXBP1]], [[RIDD]], [[TRAF2]], [[ASK1]], [[eIF2α]], [[ATF4]], [[eIF2B]], [[Integrated Stress Response]], [[ISRIB]], [[TUDCA]], [[ERAD]], [[ER proteostasis]], [[Wolcott-Rallison syndrome]], [[Multiple Myeloma]], [[Endoplasmic Reticulum]], [[Golgi apparatus]], [[COPII]], [[S1P]], [[S2P]], [[protein disulfide isomerase]], [[Type 2 Diabetes Mellitus]], [[Non-alcoholic Fatty Liver Disease]], [[Amyotrophic Lateral Sclerosis]], [[Alzheimer's Disease]], [[Parkinson's Disease]], [[Huntington's Disease]], [[MKC-8866]], [[GSK2606414]], [[4-PBA]], [[ceapins]], [[ManniKind]]
- Suggested new entity notes to create: [[MKC-8866]], [[ISRIB]], [[CEAPINS]], [[Wolcott-Rallison syndrome]]
  - Strong connections to strengthen: [[Apoptosis]] ↔ Unfolded Protein Response, Integrated Stress Response ↔ Unfolded Protein Response, Autophagy ↔ Unfolded Protein Response
