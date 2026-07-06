---
entity_type: "Biological Process"
type: entity
category: scientific_concept
aliases:
  - Calorie Restriction
  - CR
  - dietary restriction
  - calorie restriction
database_ids:
  mesh: D004032
relations:
  - predicate: activates
    target: "SIRT1"
    sources:
      - PMID:15205477
  - predicate: requires
    target: "Sir2 (yeast)"
    sources:
      - PMID:11000115
  - predicate: extends
    target: "Lifespan"
    sources:
      - PMID:MICHAN2007
  - predicate: upregulates
    target: "SIRT1"
    sources:
      - PMID:MICHAN2007
  - predicate: upregulates
    target: "SIRT3"
    sources:
      - PMID:15653680
  - predicate: downregulates
    target: "SIRT4"
    sources:
      - PMID:16959573
  - predicate: increases
    target: "NAD+"
    sources:
      - PMID:11000115
  - predicate: mimicked_by
    target: "Resveratrol"
    sources:
      - PMID:15254550
created: 02_July_2026 08:57 PM PDT
updated: 02_July_2026 08:57 PM PDT
---
# Caloric Restriction

**Caloric restriction (CR)**—reducing calorie intake without malnutrition—is the most robust non-genetic intervention known to delay [[Aging]]. It exerts its effects largely by remodeling the [[Epigenome]], effectively "slowing down" the biological clock and delaying the onset of age-related diseases.


**Caloric Restriction** (or calorie restriction) is a dietary regimen that reduces food intake without causing malnutrition. It is one of the most robust interventions to increase [[Longevity]] and delay age-related diseases.


## 1. [[DNA Methylation]] and "Epigenetic Drift"
Aging is typically characterized by epigenetic drift: a global loss of DNA methylation (hypomethylation) alongside site-specific gains in methylation (hypermethylation) at gene promoters.
*   **Slowing the Clock:** CR significantly slows this drift. In mammalian models, CR maintains a "younger" methylation pattern across various tissues.
*   **Human Evidence:** Clinical trials have demonstrated that CR can slow the pace of molecular aging in healthy humans, as measured by various epigenetic algorithms.
*   **Gene Silencing:** CR promotes the silencing of pro-aging genes like p16INK4a (a marker of [[Cellular Senescence]]) and certain oncogenes, preventing their age-related increase.


## 2. [[Histone Modification]]s and [[Chromatin]] Structure
CR alters how DNA is packaged, keeping chromatin in a more stable, "youthful" state.
*   **[[Sirtuins]] Activation:** CR increases levels of NAD+, which activates [[SIRT1]] (a histone deacetylase). SIRT1 removes acetyl groups from histones, leading to tighter DNA packaging ([[Heterochromatin]]) and the silencing of genes that promote inflammation and senescence.
*   **Specific Marks:** CR has been shown to influence specific histone marks that are associated with telomere maintenance and longevity.
*   **Neuroprotection:** In the brain, CR prevents the age-related increase of [[HDAC]]s that can otherwise impair synaptic plasticity and memory.


## 3. Key Molecular Targets
The epigenetic changes induced by CR converge on several critical pathways:
*   **Senescence Genes:** CR suppresses senescence-inducing genes (like p16INK4a and p53) through both DNA methylation and histone deacetylation.
*   **Telomere Maintenance:** CR can help maintain telomere length by epigenetically regulating telomerase-related genes.
*   **Metabolic Reprogramming:** CR induces epigenetic changes in genes related to lipid metabolism and inflammation, shifting the body from a "growth" mode to a "maintenance and repair" mode.


## Linking Summary:
- New links added: [[Aging]], [[Epigenome]], [[DNA Methylation]], [[Cellular Senescence]], [[Histone Modification]], [[Chromatin]], [[Sirtuins]], [[SIRT1]], [[Heterochromatin]], [[HDAC]].
- Suggested new entity notes to create: [[p16INK4A]], [[NAD+]], [[Telomere]], [[DunedinPACE]].
- Strong connections to strengthen: [[Caloric Restriction]] ↔ [[Aging]], [[Caloric Restriction]] ↔ [[SIRT1]]

- New links added: [[Longevity]], [[Autophagy]], [[AMPK]], [[Cellular Homeostasis]], [[Cancer]], [[Neurodegenerative Disease]], [[Inflammaging]], [[Autophagic Cell Death]]
- Suggested new entity notes to create: [[Longevity]], [[AMPK]], [[Cellular Homeostasis]]
- Strong connections to strengthen: [[Caloric Restriction]] ↔ [[Autophagy]], [[Caloric Restriction]] ↔ [[Longevity]]

## Relationship with Autophagy
- Caloric restriction is a potent inducer of [[Autophagy]].
- It leads to ATP depletion and an increased AMP/ATP ratio, which activates [[AMPK]].
- AMPK activation subsequently induces autophagy to compensate for energy limitations and maintain [[Cellular Homeostasis]].


## Health Benefits
- Enhances protection against chronic pathologies like [[Cancer]] and [[Neurodegenerative Disease]].
- Regulates anti-inflammatory responses and reduces [[Inflammaging]].
- Improves metabolic health and insulin sensitivity.


## Adaptive vs. Excessive Autophagy
- Short-term or moderate caloric restriction stimulates **adaptive autophagy**, which is beneficial for cell survival.
- Prolonged or extreme caloric restriction can lead to **excessive autophagy**, potentially triggering type II [[Autophagic Cell Death]].


## Connections
- **[[Aging]]**: CR is the gold standard for interventions that extend lifespan and healthspan across species.
- **[[SIRT1]]**: A primary mediator of the beneficial effects of caloric restriction on the epigenome.
- **[[Cellular Senescence]]**: CR delays the accumulation of senescent cells by maintaining a more stable epigenetic state.


### Linking Summary:
- New links added: [[AMPK]], [[Aging]], [[Autophagic Cell Death]], [[Autophagy]], [[Cancer]], [[Cellular Homeostasis]], [[Cellular Senescence]], [[Chromatin]], [[DNA Methylation]], [[Epigenome]], [[HDAC]], [[Heterochromatin]], [[Histone Modification]], [[Inflammaging]], [[Longevity]], [[Neurodegenerative Disease]], [[SIRT1]], [[Sirtuins]]
- Suggested new entity notes to create: [[AMPK]], [[Cellular Homeostasis]], [[DunedinPACE]], [[Longevity]], [[NAD+]], [[Telomere]], [[p16INK4A]]
- Strong connections to strengthen: [[Caloric Restriction]] ↔ [[Aging]], [[Caloric Restriction]] ↔ [[Autophagy]], [[Caloric Restriction]] ↔ [[Longevity]], [[Caloric Restriction]] ↔ [[SIRT1]]

# Caloric Restriction

**Caloric Restriction** (CR) is a **dietary regimen** in which an organism is provided with **at least 20% fewer calories** than it would naturally consume *ad libitum*, while maintaining adequate nutrition. CR is the **only non-genetic method** that consistently increases maximal lifespan in mammals, and it represents one of the most powerful and reproducible interventions in the biology of aging.

## Definition and Scope

CR was first systematically described by McCay et al. (1935) and has since been demonstrated across a remarkable range of taxa:
- *Saccharomyces cerevisiae* (yeast): 0.5% vs. standard 2% (w/v) glucose
- *Drosophila melanogaster* (fruit fly)
- *Caenorhabditis elegans* (nematode)
- *Daphnia longispina* (crustacean)
- *Frontinella pyramitela* (spider)
- Rodents (mice and rats)
- Rhesus monkeys (*Macaca mulatta*) — ongoing studies; shows many benefits without confirmed lifespan extension

The diversity of species responding to CR argues that **the underlying mechanisms are ancient, relatively simple, and well conserved**.

## Effects on Mammals

CR does not simply prolong an unhealthy state — it **retards age-related deterioration**:
- Decreased collagen rigidity
- Improved insulin sensitivity (delayed insulin resistance)
- Better maintenance of immune function
- Reduced neurobehavioural impairments
- Delayed onset and reduced incidence of cancer and autoimmune disorders
- Reduced inflammation (via NF-κB suppression)
- Increased circulating adiponectin

In rhesus monkeys, CR results in: reduced body weight, lower body fat, decreased blood glucose, lower incidence of diabetes and heart disease, and altered hormonal profiles without compromising circadian patterns or reproductive timing.

## CR and Sirtuins

CR is a central context for understanding sirtuin biology. CR regulates mammalian sirtuins in a **sirtuin-specific manner**:

| Sirtuin | Response to CR |
|---------|----------------|
| [[SIRT1]] | **Upregulated** — mediates fat mobilisation, anti-inflammation, neuroprotection, metabolic reprogramming |
| [[SIRT3]] | **Upregulated** — mediates mitochondrial biogenesis, thermogenesis, AceCS2 activation |
| [[SIRT4]] | **Downregulated** — allows increased GDH activity and glutamine-stimulated insulin secretion |

CR-mediated lifespan extension in yeast **requires SIR2** and also involves Hst1 and Hst2 (other yeast sirtuins). In *Drosophila*, dietary restriction-mediated lifespan extension also requires the *Sir2* gene. The entire sirtuin family may control lifespan, having potentially evolved from a primordial sirtuin that responded to stress and calorie availability.

## Molecular Mechanisms Linking CR to Sirtuins

1. **NAD⁺ elevation**: CR increases [[NAD+]] levels (or NAD⁺/NADH ratio), directly enhancing sirtuin deacetylase activity.
2. **SIRT1→PGC-1α axis**: CR-activated [[SIRT1]] deacetylates [[PGC-1α]], inducing mitochondrial biogenesis, oxidative phosphorylation, and hepatic glucose output.
3. **SIRT1→PPAR-γ/NCoR/SMRT axis**: Promotes fat mobilisation from white adipose tissue.
4. **SIRT1→UCP2 repression**: Enhances glucose-stimulated insulin secretion from β-cells.
5. **SIRT3→AceCS2 activation**: Regulates carbon flow into the TCA cycle.
6. **SIRT1→NF-κB suppression**: Reduces inflammatory responses observed in CR animals.
7. **SIRT1→adiponectin upregulation** via FOXO1/C/EBPα: CR increases circulating adiponectin in rats.

## TOR Pathway

When cells become nutrient-starved, sirtuin-**independent** pathways such as **TOR (Target of Rapamycin)** are also activated and can extend lifespan, indicating that sirtuins are not the sole mediators of CR-related longevity.

## CR Mimetics

[[Resveratrol]] is the prototypical **CR mimetic** — a small molecule that recapitulates many physiological effects of CR (improved insulin sensitivity, mitochondrial biogenesis, metabolic reprogramming) via SIRT1 activation without requiring food restriction.

## Connections

- [[SIRT1]] — primary mammalian sirtuin activated by CR; mediates most CR benefits
- [[Sir2 (yeast)]] — required for CR-mediated lifespan extension in yeast
- [[SIRT3]] — upregulated by CR; mediates mitochondrial metabolic adaptations
- [[SIRT4]] — downregulated by CR (opposite to SIRT1/3); increases GDH activity
- [[NAD+]] — elevated by CR; mechanistically links CR to sirtuin activation
- [[Resveratrol]] — CR mimetic; activates SIRT1 pharmacologically
- [[PGC-1α]] — key downstream effector of SIRT1 under CR conditions
- [[Longevity]] — CR is the most reproducible longevity intervention
- [[TOR (Target of Rapamycin)]] — sirtuin-independent CR-longevity pathway

## Linking Summary

- New links added: [[SIRT1]], [[Sir2 (yeast)]], [[SIRT3]], [[SIRT4]], [[NAD+]], [[Resveratrol]], [[PGC-1α]], [[Longevity]]
- Suggested new entity notes to create: [[TOR (Target of Rapamycin)]], [[Adiponectin]], [[Longevity]]
- Strong connections to strengthen: [[Caloric Restriction]] ↔ [[SIRT1]], [[Caloric Restriction]] ↔ [[Sir2 (yeast)]], [[Caloric Restriction]] ↔ [[Longevity]]

# Caloric Restriction

Caloric restriction (CR) is a dietary regimen that reduces calorie intake without incurring malnutrition or a reduction in essential nutrients. It has been shown to increase lifespan and reduce oxidative stress in various model organisms, potentially by lowering the intake of dietary [[Advanced Glycation End Products|AGEs]].

### Linking Summary:
- New links added: [[Advanced Glycation End Products]], [[Oxidative Stress]], [[Lifespan]]
- Suggested new entity notes to create: 
- Strong connections to strengthen: [[Caloric Restriction]] ↔ [[Longevity]]
