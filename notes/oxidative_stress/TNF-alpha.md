---
type: entity
category: "protein"
aliases:
  - "TNF-alpha"
  - "tumor necrosis factor alpha"
  - "cachectin"
tags:
  - "oxidative_stress"
  - "cytokine"
  - "inflammation"
created: 2026-05-09
updated: 2026-07-04
---

# TNF-alpha
Tumor necrosis factor alpha (TNF-alpha) is a cell signaling protein (cytokine) involved in systemic [[notes/_link/Inflammation]] and is one of the cytokines that make up the acute phase reaction. It is a potent activator of the [[NF-kappa B]] pathway and can induce [[notes/_link/Apoptosis]] and the production of other cytokines like [[IL-1b]].

## Linking Summary
- New links added: [[notes/_link/Inflammation]], [[NF-kappa B]], [[notes/_link/Apoptosis]], [[IL-1b]]
- Suggested new entity notes to create: [[Cytokine]], [[Pro-inflammatory response]]
- Strong connections to strengthen: [[TNF-alpha]] ↔ [[NF-kappa B]]

## Oxidative Stress and TNF-α Signaling

### TNFR1 Signaling and ROS Generation
TNF-α exerts its biological effects through two receptors: [[TNFR1]] (p55; ubiquitously expressed) and [[TNFR2]] (p75; restricted to immune and endothelial cells). Upon TNF-α binding, TNFR1 recruits the adaptor protein [[TRADD]] (TNFR-associated death domain protein), which serves as a platform for the assembly of two sequential signaling complexes. **Complex I** — formed at the plasma membrane — includes [[RIPK1]] (receptor-interacting protein kinase 1), [[TRAF2]] (TNF receptor-associated factor 2), and [[cIAP1]]/[[cIAP2]], leading to [[NF-kappa B]] activation. [[notes/oxidative_stress/Mitochondria|Mitochondrial]] ROS production is an early and obligatory event in TNFR1 signaling: TRAF2 recruits the E3 ligase [[TRIM21]], which ubiquitinates [[p65]] ([[NDUFS1]]) of [[notes/oxidative_stress/Respiratory Chain Complex I]], causing electron leak and [[notes/oxidative_stress/Superoxide Radicals]] generation. This mitochondrial ROS (mtROS) is required for sustained [[JNK]] activation and [[notes/oxidative_stress/IL-1b|IL-1β]] production.

### ROS in TNF-Induced NF-κB Activation and Its Feedback
NF-κB activation by TNF-α is both facilitated and regulated by [[notes/oxidative_stress/Oxidative Stress]]. Low-level ROS promote the phosphorylation and degradation of [[IκBα]] (the inhibitory subunit of NF-κB) by the [[IκB kinase]] ([[IKK]]) complex, allowing [[p65]]/[[p50]] nuclear translocation. NF-κB then transcriptionally upregulates a battery of antioxidant genes that create a negative feedback loop:
* [[MnSOD]] ([[SOD2]]) — mitochondrial superoxide dismutase that dismutes O₂⁻• to H₂O₂
* [[Ferritin heavy chain]] ([[FTH1]]) — sequesters free iron, reducing [[Fenton reaction]]-driven •OH production
* [[notes/oxidative_stress/HO-1|Heme oxygenase-1]] ([[HMOX1]]) — degrades pro-oxidant [[Free heme]] to biliverdin/[[bilirubin]] (antioxidant) and CO (anti-inflammatory)
* [[notes/oxidative_stress/Glutathione Peroxidase]] — reduces lipid hydroperoxides
* [[notes/oxidative_stress/Catalase]] — converts H₂O₂ to H₂O

This antioxidant gene program represents a critical mechanism limiting TNF-α-induced tissue damage. Defects in this NF-κB-driven antioxidant response sensitize cells to TNF-α-induced [[notes/_link/Apoptosis]].

### Complex II Formation, ROS, and Necroptosis
When NF-κB activation is blocked or insufficient, TNF-α signaling shifts from cytoprotective to pro-death. Complex I disassembles and [[RIPK1]] associates with [[FADD]] and [[Caspase-8]] to form **Complex II** (the death-inducing signaling complex, [[DISC]]). If [[Caspase-8]] is inhibited (e.g., by viral inhibitors or pharmacological blockade), [[RIPK1]] interacts with [[RIPK3]] and [[MLKL]], forming the [[necrosome]] — a signaling platform that executes [[Necroptosis]], a lytic and highly pro-inflammatory form of cell death. ROS — particularly mitochondrial O₂⁻• and [[notes/oxidative_stress/Hydrogen Peroxide]] — are critical for necrosome assembly. [[RIPK3]] enhances [[notes/oxidative_stress/Mitochondria|mitochondrial]] metabolism and ROS production by activating [[pyruvate dehydrogenase complex]] ([[PDC]]) and [[glutamine metabolism]], creating a feed-forward oxidative burst. MLKL oligomers also directly permeabilize the plasma membrane, allowing further ROS influx.

### TNF-α in Insulin Resistance and Metabolic Syndrome
TNF-α is a major mediator of [[Insulin resistance]] in [[Obesity]] and [[notes/_link/Diabetes Mellitus]]. TNF-α impairs insulin signaling by [[Serine phosphorylation]] of [[IRS-1]] ([[insulin receptor substrate-1]]) via [[JNK]] and [[IKKβ]]. Both JNK and IKKβ are activated by TNF-α-induced ROS. Adipose tissue [[notes/_link/Macrophage|macrophages]] from obese individuals secrete elevated TNF-α, which generates a local oxidative environment that suppresses [[adiponectin]] (an insulin-sensitizing, antioxidant adipokine) and promotes lipolysis. This TNF-α/ROS/adiponectin axis is a central driver of metabolic inflammation.

### Therapeutic Targeting of TNF-α and Oxidative Stress
Anti-TNF biologics — [[Infliximab]] (chimeric monoclonal), [[Adalimumab]] (human monoclonal), [[Etanercept]] (TNFR2-Fc fusion), [[Certolizumab pegol]], and [[Golimumab]] — are widely used in [[Rheumatoid Arthritis]], [[Inflammatory bowel disease]], [[Psoriasis]], and [[Ankylosing spondylitis]]. Beyond neutralizing TNF-α, these agents reduce systemic [[notes/oxidative_stress/Oxidative Stress]]: treated patients show decreased serum [[notes/oxidative_stress/Malondialdehyde]], increased [[notes/_link/Glutathione]], and improved [[total antioxidant capacity]]. [[Xanthine oxidase inhibitors]] ([[Allopurinol]]) and [[N-acetylcysteine]] have been proposed as adjuncts to enhance anti-TNF efficacy by reducing the ROS burden that perpetuates TNF-α production through NF-κB activation.

## Linking Summary (New Additions)
- New links added: [[notes/oxidative_stress/Mitochondria]], [[notes/oxidative_stress/Superoxide Radicals]], [[notes/oxidative_stress/Respiratory Chain Complex I]], [[notes/oxidative_stress/HO-1]], [[notes/oxidative_stress/Glutathione Peroxidase]], [[notes/oxidative_stress/Catalase]], [[notes/oxidative_stress/Oxidative Stress]], [[notes/oxidative_stress/IL-1b]], [[notes/oxidative_stress/Malondialdehyde]], [[notes/_link/Glutathione]], [[notes/_link/Apoptosis]], [[notes/_link/Diabetes Mellitus]], [[Rheumatoid Arthritis]], [[Obesity]]
- Suggested new entity notes to create: [[TNFR1]], [[TRADD]], [[RIPK1]], [[RIPK3]], [[MLKL]], [[Necroptosis]], [[Necrosome]], [[Infliximab]], [[Adalimumab]], [[Etanercept]], [[IRS-1]], [[Adiponectin]], [[MnSOD]]
- Strong connections to strengthen: [[TNF-alpha]] ↔ [[notes/oxidative_stress/Mitochondria]], [[TNF-alpha]] ↔ [[Necroptosis]], [[TNF-alpha]] ↔ [[Rheumatoid Arthritis]]

## Sirtuin Regulation of TNF-α

[[notes/sirtuins/SIRT1]] deacetylation of [[NF-κB]] downregulates pro-inflammatory cytokines including TNF-α. [[notes/sirtuins/SIRT7]] kidney-specific knockout reduces TNF-α and other inflammatory factors.

### Linking Summary (Sirtuin Additions):
- New links added: [[notes/sirtuins/SIRT1]], [[notes/sirtuins/SIRT7]]
- Suggested new entity notes to create:
- Strong connections to strengthen: [[TNF-alpha]] ↔ [[notes/sirtuins/SIRT1]], [[TNF-alpha]] ↔ [[notes/sirtuins/SIRT7]]
