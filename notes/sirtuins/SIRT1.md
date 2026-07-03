---
type: entity
category: protein
aliases:
  - Sirtuin 1
  - SIR2α
  - hSIR2
  - SIRT1 deacetylase
database_ids:
  uniprot: Q96EB6
  hgnc: HGNC:14929
relations:
  - predicate: deacetylates
    target: "[[p53]]"
    sources:
      - PMID:11672522
      - PMID:11672523
  - predicate: deacetylates
    target: "[[PGC-1α]]"
    sources:
      - PMID:15744310
  - predicate: deacetylates
    target: "[[FOXO1]]"
    sources:
      - PMID:16154098
  - predicate: deacetylates
    target: "[[FOXO3a]]"
    sources:
      - PMID:14976264
  - predicate: deacetylates
    target: "[[NF-κB (RelA/p65)]]"
    sources:
      - PMID:15152190
  - predicate: activated_by
    target: "[[Resveratrol]]"
    sources:
      - PMID:12939617
  - predicate: regulates
    target: "[[notes/_link/Caloric Restriction]]"
    sources:
      - PMID:15477390
  - predicate: inhibits
    target: "[[UCP2]]"
    sources:
      - PMID:16366736
  - predicate: associated_with
    target: "[[notes/_link/Caloric Restriction]]"
    sources:
      - PMID:15205477
created: 2026-07-02
updated: 2026-07-02
---

# SIRT1

**SIRT1** (Sirtuin 1, also known as SIR2α) is the most extensively studied mammalian sirtuin, a class III NAD⁺-dependent histone deacetylase and the closest mammalian homologue of yeast [[Sir2 (yeast)|Sir2]]. It belongs to phylogenetic Class Ia alongside yeast Sir2 and Hst1, _C. elegans_ SIR-2.1, and _D. melanogaster_ D.mel1. SIRT1 is primarily nuclear, with some cytoplasmic functions, and associates predominantly with euchromatin.

## Enzymatic Activity

SIRT1 is a robust [[NAD+]]-dependent protein deacetylase. Its deacetylation reaction produces [[OAADPr]] (2′-_O_-acetyl-ADP-ribose) and nicotinamide as by-products. Unlike [[notes/sirtuins/SIRT4]] and [[notes/sirtuins/SIRT6]], SIRT1's primary activity is deacetylation rather than mono-ADP-ribosylation.

## Histone Targets

SIRT1 facilitates the formation of heterochromatin by deacetylating:

- **Histone H1**: Lys⁹ and Lys²⁶
- **Histone H3**: Lys¹⁴
- **Histone H4**: Lys¹⁶

## Non-Histone Targets and Functions

### Chromatin and Transcription

- **TAFI68**: Deacetylation reduces DNA binding and represses RNA Pol I-mediated transcription.
- **p300** (Lys¹⁰²⁰/Lys¹⁰²⁴): Negative regulation of this limiting transcriptional cofactor.
- **MyoD/PCAF complex**: Deacetylation inhibits muscle gene expression and retards muscle differentiation.
- **MEF2D** (Lys⁴²⁴): In concert with HDAC4, promotes MEF2 sumoylation, negatively regulating myogenesis.
- **BCL11A / CTIP2**: Recruited to target promoters to deacetylate histones and stimulate transcriptional repression during haematopoietic development.
- **Hes1 / Hey2 (bHLH repressors)**: Modulates transcriptional repression during metazoan development.
- **HIV-1 Tat** (Lys⁵⁰): Deacetylation activates Tat, increasing viral transcription.

### Apoptosis and Cell Survival

- **[[p53]]** (Lys³¹⁷/³⁷⁰/³⁷⁹ in mouse; Lys³²⁰/³⁷³/³⁸² in human): Deacetylation inhibits p53 transactivation and suppresses apoptosis in response to oxidative stress/DNA damage. Part of a HIC1–SIRT1–p53 feedback loop.
- **Ku70**: Deacetylated Ku70 sequesters pro-apoptotic Bax away from mitochondria.
- **E2F1**: Mutual negative regulatory feedback loop protecting against DNA damage-induced apoptosis.
- **p73**: Deacetylation suppresses transcriptional activity and inhibits apoptosis.
- **FOXO transcription factors** (Foxo1, Foxo3a, Foxo4): Deacetylation reduces apoptosis while enhancing DNA repair and cell-cycle checkpoint gene expression. Foxo4 deacetylation enhances GADD45 expression and suppresses caspase-3/7.
- **RelA/p65 (NF-κB)**: Deacetylation inhibits transactivation potential, sensitizing cells to TNFα-induced apoptosis.
- **Smad7** (Lys⁶⁰/Lys⁷⁰): Deacetylation promotes ubiquitin-dependent proteasomal degradation via Smurf1, protecting glomerular mesangial cells from TGF-β-dependent apoptosis.
- **H2A.Z** (Lys¹¹⁵/Lys¹²¹): Deacetylation promotes ubiquitination and proteasomal degradation, protecting against cardiac hypertrophy.
- **Androgen receptor** (Lys⁶³⁰): Deacetylation represses oncogenic signalling and inhibits prostate cancer cell growth.
- **PARP-1**: Promotes PARP-1-mediated cell survival in response to DNA damage via AIF.

### Energy Metabolism

- **PPAR-γ / aP2**: Represses adipogenesis genes; promotes fat mobilisation in white adipose tissue.
- **[[PGC-1α]]**: Deacetylation represses glycolysis, increases hepatic glucose output, modulates mitochondrial function, and induces oxidative phosphorylation genes and mitochondrial biogenesis. Key downstream effector for neuroprotection.
- **FOXO1**: Enhances FOXO1 interaction with C/EBPα, increasing adiponectin concentrations. Also promotes NeuroD and MafA transcription for insulin secretion and β-cell survival.
- **UCP2**: Transcriptional repression enhances glucose-stimulated insulin secretion and ATP production in pancreatic β-cells.
- **AceCS1** (cytoplasmic): Deacetylation activates acetyl-CoA synthetase 1, regulating fatty acid synthesis.

### Nervous System and Neuroprotection

SIRT1 is expressed mainly in neuronal bodies and is highly expressed in the embryonic heart, brain, spinal cord, and dorsal root ganglia. SIRT1:

- Protects against axonal/Wallerian degeneration in concert with the NAD⁺ biosynthetic enzyme Nmnat.
- Protects against β-amyloid toxicity by inhibiting NF-κB signalling in microglia.
- Downregulates ROCK1 expression in neurons, inducing α-secretase (relevant to Alzheimer's disease prevention under CR).
- Neuroprotects via [[PGC-1α]]-mediated mitochondrial maintenance.

### Inflammation

SIRT1 deacetylates RelA/p65, inhibiting NF-κB-dependent pro-inflammatory gene expression. Higher SIRT1 in CR animals may explain their reduced inflammatory responses.

### Cellular Senescence

SIRT1's role in senescence is context-dependent:

- In primary mouse embryonic fibroblasts, SIRT1 rescues cells from PML-mediated premature senescence by inhibiting p53.
- Conversely, SIRT1 can promote senescence; SIRT1-deficient MEFs show extended replicative potential.
- SIRT1 levels decline with serial passaging and in dividing tissues of aged mice (thymus, testis).

## Subcellular Localisation

Predominantly **nuclear** (associated with euchromatin); also has cytoplasmic functions (e.g., AceCS1 deacetylation). During apoptosis, caspase-9 and Bcl-xL regulate SIRT1 cleavage, shifting localisation from nucleus to cytoplasm.

## Knockout Phenotype

SIRT1-deficient mice display:

- Developmental defects: abnormal eye morphogenesis, cardiac septation defects
- Reduced body size, developmental retardation
- Sterility in both sexes (low sperm count in males; failure to ovulate in females)
- ~50% expected pups born; ~20% survive to adulthood
- Retinal cell layer thinning, multiple retinal involutions
- p53 hyperacetylation after DNA damage, increased radiation sensitivity in thymocytes
- High UCP2 expression, blunted insulin secretion in β-cells

## Caloric Restriction and Aging

SIRT1 is a key mediator of [[notes/_link/Caloric Restriction]] benefits in mammals. CR increases SIRT1 levels and activity, and SIRT1 activation by [[Resveratrol]] mimics several physiological effects of CR in rodents. Three SNPs in the human _SIRT1_ gene are associated with systemic energy expenditure.

## Connections

- [[Sir2 (yeast)]] — evolutionary ancestor; SIRT1 is the closest mammalian homologue
- [[NAD+]] — obligatory co-substrate for deacetylase activity
- [[OAADPr]] — unique by-product of SIRT1-catalysed deacetylation
- [[p53]] — major regulatory target; SIRT1 deacetylates and suppresses p53-mediated apoptosis
- [[PGC-1α]] — downstream effector of SIRT1 in metabolism and neuroprotection
- [[Resveratrol]] — pharmacological activator (STAC)
- [[notes/_link/Caloric Restriction]] — SIRT1 is proposed mediator of CR-dependent longevity benefits
- [[notes/sirtuins/SIRT2]] — Class I sirtuin family member; both have deacetylase and ADP-ribosyl transferase activities
- [[notes/sirtuins/SIRT3]] — mitochondrial counterpart; both deacetylate AceCS isoforms (cytoplasmic vs. mitochondrial)
- [[FOXO1]] / [[FOXO3a]] / FOXO4 — forkhead transcription factors regulated by SIRT1 deacetylation

## Linking Summary

- New links added: [[Sir2 (yeast)]], [[NAD+]], [[OAADPr]], [[p53]], [[PGC-1α]], [[Resveratrol]], [[notes/_link/Caloric Restriction]], [[notes/sirtuins/SIRT2]], [[notes/sirtuins/SIRT3]], [[FOXO1]], [[FOXO3a]], [[UCP2]], [[NF-κB (RelA/p65)]], [[notes/sirtuins/SIRT4]], [[notes/sirtuins/SIRT6]]
- Suggested new entity notes to create: [[FOXO3a]], [[FOXO4]], [[Smad7]], [[Ku70]], [[E2F1]], [[p73]], [[HIC1]], [[Nmnat]], [[MEF2D]], [[PML]]
- Strong connections to strengthen: [[notes/sirtuins/SIRT1]] ↔ [[p53]], [[notes/sirtuins/SIRT1]] ↔ [[PGC-1α]], [[notes/sirtuins/SIRT1]] ↔ [[notes/_link/Caloric Restriction]]

# SIRT1

SIRT1 is a class III [[NAD+]]-dependent histone deacetylase and one of the seven human sirtuins. It is primarily localized in the nucleus (associated with euchromatin) but also functions in the cytoplasm. It plays a critical role in metabolic regulation, anti-aging pathways, oxidative stress response, DNA repair, and the regulation of key proteins such as [[p53]] and [[AMPK]].

### Linking Summary:

- New links added: [[NAD+]], [[p53]], [[AMPK]]
- Suggested new entity notes to create:
- Strong connections to strengthen: [[notes/sirtuins/SIRT1]] ↔ [[NAD+]], [[notes/sirtuins/SIRT1]] ↔ [[p53]], [[notes/sirtuins/SIRT1]] ↔ [[AMPK]]

# SIRT1

**[[notes/_link/SIRT1]]** (Sirtuin 1) is the most well-studied member of the [[Sirtuin]] family of proteins. It is an NAD+-dependent histone deacetylase that plays a critical role in cellular health, stress resistance, and longevity.

**SIRT1** (Sirtuin 1) is an NAD+-dependent deacetylase that plays a key role in regulating cellular metabolism, stress response, and [[notes/_link/Aging]].

## 1. Metabolic Sensing

Because SIRT1 requires NAD+ (a coenzyme involved in energy metabolism) to function, it acts as a sensor of the cell's energy status. When energy levels are low (e.g., during [[notes/_link/Caloric Restriction]]), SIRT1 activity increases, triggering a suite of protective responses.

## 2. Epigenetic Actions

As a deacetylase, SIRT1 modifies the [[Epigenome]] by removing acetyl groups from histones and non-histone proteins:

- **Gene Silencing**: SIRT1 promotes the formation of [[Heterochromatin]], helping to keep repetitive elements and pro-inflammatory genes "turned off."
- **Protein Regulation**: It deacetylates and regulates key transcription factors like p53 (cell cycle), PGC-1α (mitochondrial biogenesis), and NF-κB (inflammation).

## 3. SIRT1 and [[notes/_link/Aging]]

Higher levels of SIRT1 activity are generally associated with a longer, healthier lifespan. It protects against:

- **[[notes/_link/Cardiovascular Disease]]**: By improving vascular function and reducing inflammation.
- **[[notes/_link/Neurodegenerative Diseases]]**: By protecting neurons from stress and protein aggregation.
- **[[notes/_link/Diabetes Mellitus]]**: By improving insulin sensitivity.

## Linking Summary:

- New links added: [[notes/_link/SIRT1]], [[Sirtuin]], [[notes/_link/Caloric Restriction]], [[Epigenome]], [[Heterochromatin]], [[notes/_link/Aging]], [[notes/_link/Cardiovascular Disease]], [[notes/_link/Neurodegenerative Diseases]], [[notes/_link/Diabetes Mellitus]], [[notes/_link/Resveratrol]]
- Suggested new entity notes to create: [[NAD+]], [[PGC-1alpha]], [[Sirtuin Activators]]
- Strong connections to strengthen: [[notes/_link/SIRT1]] ↔ [[Sirtuin]], [[notes/_link/SIRT1]] ↔ [[notes/_link/Caloric Restriction]]

- New links added: [[notes/_link/Autophagy]], [[Atg]], [[FOXO1]], [[FOXO3a]], [[notes/_link/Caloric Restriction]], [[Intermittent Fasting]], [[notes/_link/AMPK]]
- Suggested new entity notes to create: [[Atg]], [[FOXO1]], [[FOXO3a]], [[notes/_link/Caloric Restriction]], [[Intermittent Fasting]], [[notes/_link/AMPK]]
- Strong connections to strengthen: [[notes/_link/SIRT1]] ↔ [[notes/_link/Caloric Restriction]], [[notes/_link/SIRT1]] ↔ [[notes/_link/AMPK]], [[notes/_link/SIRT1]] ↔ [[notes/_link/Autophagy]]

## Regulation of Autophagy

- SIRT1 is a potent activator of [[notes/_link/Autophagy]].
- It deacetylates various autophagy-related proteins, including those in the [[Atg]] machinery and transcription factors like [[FOXO1]] and [[FOXO3a]].
- SIRT1 activation is strongly induced by [[notes/_link/Caloric Restriction]] and [[Intermittent Fasting]], contributing to their lifespan-extending effects.

## Relationship with AMPK

- SIRT1 and [[notes/_link/AMPK]] form a reciprocal regulatory loop, where each can activate the other to promote energy homeostasis and autophagic flux.

## Connections

- **[[Sirtuin]]**: The family of proteins to which SIRT1 belongs.
- **[[notes/_link/Aging]]**: SIRT1 is a central regulator of the aging process.
- **[[notes/_link/Caloric Restriction]]**: SIRT1 is a primary mediator of the benefits of CR.
- **[[notes/_link/Resveratrol]]**: A natural compound known to activate SIRT1.

### Linking Summary:

- New links added: [[notes/_link/AMPK]], [[notes/_link/Aging]], [[Atg]], [[notes/_link/Autophagy]], [[notes/_link/Caloric Restriction]], [[notes/_link/Cardiovascular Disease]], [[notes/_link/Diabetes Mellitus]], [[Epigenome]], [[FOXO1]], [[FOXO3a]], [[Heterochromatin]], [[Intermittent Fasting]], [[notes/_link/Neurodegenerative Diseases]], [[notes/_link/Resveratrol]], [[notes/_link/SIRT1]], [[Sirtuin]]
- Suggested new entity notes to create: [[notes/_link/AMPK]], [[Atg]], [[notes/_link/Caloric Restriction]], [[FOXO1]], [[FOXO3a]], [[Intermittent Fasting]], [[NAD+]], [[PGC-1alpha]], [[Sirtuin Activators]]
- Strong connections to strengthen: [[notes/_link/SIRT1]] ↔ [[notes/_link/AMPK]], [[notes/_link/SIRT1]] ↔ [[notes/_link/Autophagy]], [[notes/_link/SIRT1]] ↔ [[notes/_link/Caloric Restriction]], [[notes/_link/SIRT1]] ↔ [[Sirtuin]]

---

### Merged from notes/autophagy/SIRT1.md

# SIRT1

Sirtuin 1 (SIRT1) is an NAD+-dependent deacetylase that promotes [[TFEB]] transcriptional activity and nuclear translocation by deacetylating it, notably at K116.

### Linking Summary

- New links added: [[TFEB]]
- Suggested new entity notes to create: [[Deacetylation]]
- Strong connections to strengthen: [[notes/_link/SIRT1]] ↔ [[TFEB]]
