---
title: Tel1p
description: Tel1p is the S. cerevisiae ortholog of mammalian ATM, a 322 kDa PIKK family kinase that functions in DNA damage signaling, telomere maintenance, and mediates mitohormetic lifespan extension through mitochondrial ROS sensing.
type: entity
created: 2026-07-04
updated: 2026-07-06
tags:
  - enzyme
aliases: []
---

# Tel1p

Tel1p is the *Saccharomyces cerevisiae* ortholog of mammalian [[ATM]] (ataxia-telangiectasia mutated), a ~322 kDa serine/threonine protein kinase belonging to the phosphatidylinositol 3-kinase-related kinase ([[PIKK]]) family. Tel1p functions as a central sensor of DNA double-strand breaks and telomere dysfunction, activating downstream checkpoint kinases and coordinating DNA repair, cell cycle arrest, and telomere maintenance. Beyond its canonical nuclear roles, Tel1p has emerged as a key mediator of mitochondrial reactive oxygen species (ROS) signaling that couples mild mitochondrial stress to longevity through [[Epigenetics|epigenetic]] reprogramming — a defining example of [[Mitohormesis]].

## Functions

**DNA Damage Checkpoint.** In response to double-strand breaks, the Mre11/Rad50/Xrs2 (MRX) complex binds broken DNA ends and recruits Tel1p to the damage site. Tel1p undergoes autophosphorylation at conserved serine residues (analogous to ATM Ser1981 in humans), enhancing its kinase activity. Active Tel1p phosphorylates and activates the downstream checkpoint kinase [[Rad53p]] (the yeast functional homolog of mammalian [[CHK2]]). Rad53p, once phosphorylated, dissociates from Tel1p and phosphorylates a broad array of effectors that enforce cell cycle arrest at G1/S and G2/M transitions, induce transcription of DNA repair genes, stabilize stalled replication forks, and promote repair pathway choice. This Tel1p–Rad53p signaling cascade is the yeast functional equivalent of the mammalian ATM–CHK2 DNA damage checkpoint axis.

**Telomere Maintenance.** Tel1p associates with telomeric chromatin through physical interactions with the MRX complex and the Ku heterodimer ([[Yku70]]/[[Yku80]]). It exhibits a striking preference for short telomeres, where it accumulates and recruits [[Telomerase]] to elongate critically shortened chromosome ends, thereby preserving genome stability over successive cell divisions. This length-dependent recruitment establishes Tel1p as a key determinant of telomere length homeostasis. Tel1p also contributes to the establishment of telomeric and subtelomeric silencing by promoting the recruitment and proper localization of the [[Sir2 (yeast)|Sir2]]/Sir4 complex. At subtelomeric regions, Sir2 deacetylates histone H4 lysine 16, facilitating the spread of repressed heterochromatin — a process that requires Tel1p function for efficient silencing.

## Mitochondrial ROS / Longevity

Tel1p operates as a redox-sensitive signaling node that translates mitochondrial ROS into a longevity-promoting transcriptional program. Studies in [[S. cerevisiae]] have demonstrated that mild mitochondrial dysfunction — arising from deletion of respiratory chain components such as *clk-1* (demethoxyubiquinone hydroxylase) or *cco-1* (cytochrome c oxidase assembly factor) — elevates mitochondrial superoxide and hydrogen peroxide production. These ROS are sensed by a signaling module centered on Tel1p, which becomes activated and in turn phosphorylates Rad53p, initiating a non-canonical signaling cascade that converges on the chromatin template.

Activated Rad53p drives genome-wide remodeling of histone post-translational modifications: a reduction in the active transcription mark [[H3K4me3]] and an increase in [[H4K16ac]]. These epigenetic changes reprogram the transcriptional landscape to favor the expression of stress-resistance genes, metabolic regulators, and mitochondrial quality control factors, collectively shifting the cell toward a pro-longevity state. The lifespan extension — observed in both replicative and chronological aging assays — is strictly dependent on Tel1p and Rad53p; deletion of *TEL1* or *RAD53* fully abolishes both the epigenetic changes and the longevity benefit.

Crucially, this mitohormetic signaling operates independently of the canonical DNA damage checkpoint. The same kinase that arrests the cell cycle upon genotoxic stress can, under lower activation thresholds and distinct upstream inputs (mitochondrial ROS rather than nuclear DNA breaks), orchestrate an adaptive survival program. This pathway illustrates how a core DNA damage signaling module has been evolutionarily co-opted to serve as a redox-responsive longevity regulator, linking mitochondrial state to organismal aging through chromatin-based epigenetic memory. The Tel1p–Rad53p mitohormetic axis joins other conserved longevity pathways — such as the [[Retrograde Response]] mediated by Rtg1p/Rtg3p and the TOR/Sch9 nutrient-sensing network — in defining the complex signaling architecture that governs lifespan in response to metabolic and mitochondrial cues.

## Connections

- [[Rad53p]]: Downstream effector kinase phosphorylated and activated by Tel1p in both DNA damage and mitohormetic signaling.
- [[Mitohormesis]]: The broader adaptive paradigm in which low-level mitochondrial stress extends lifespan, with Tel1p as a required sensor.
- [[Longevity]]: Tel1p-dependent epigenetic reprogramming drives replicative and chronological lifespan extension in yeast.
- [[S. cerevisiae]]: The model organism in which the Tel1p/Rad53p mitohormetic pathway has been characterized.
- [[ATM]]: Human ortholog of Tel1p; shares conserved functions in DNA damage signaling, telomere maintenance, and redox sensing.
- [[DNA Damage]]: Tel1p is the primary sensor of double-strand breaks in yeast, activating the Rad53p checkpoint kinase cascade.
- [[Telomere]]: Tel1p maintains telomere length homeostasis by recruiting telomerase to short chromosome ends.

## Linking Summary

- New links added: [[ATM]], [[PIKK]], [[Epigenetics]], [[CHK2]], [[Yku70]], [[Yku80]], [[Telomerase]], [[Sir2 (yeast)]], [[H3K4me3]], [[H4K16ac]], [[Retrograde Response]], [[Telomere]]
- Suggested new entity notes to create: [[PIKK]], [[CHK2]], [[H3K4me3]], [[H4K16ac]], [[Mre11]], [[Rad50]], [[Xrs2]], [[Telomere]]
- Strong connections to strengthen: [[Tel1p]] ↔ [[Rad53p]], [[Tel1p]] ↔ [[Mitohormesis]], [[Tel1p]] ↔ [[ATM]]
