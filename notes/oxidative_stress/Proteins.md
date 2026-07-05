---
type: entity
category: protein
aliases:
  - "Proteins"
tags:
  - "oxidative_stress"
  - "protein_oxidation"
created: 2026-05-09
updated: 2026-07-04
---

# Proteins

## Definition
Proteins are large biomolecules consisting of one or more long chains of amino acid residues. They perform a vast array of functions within organisms, including catalyzing metabolic reactions, DNA replication, responding to stimuli, and transporting molecules.

## Role in Oxidative Stress
Proteins are major targets of [[Oxidative Stress]]. Radical-mediated damage to proteins, often termed **protein oxidation**, can lead to side-chain modification, backbone fragmentation, and cross-linking. These modifications can result in the loss of enzymatic activity, altered structural integrity, and the accumulation of protein aggregates.

## Connections
- [[Oxidative Stress]]: Proteins are primary targets for damage by [[notes/_link/Reactive Oxygen Species]].
- [[Enzyme]]: Many enzymes are inactivated by oxidative modifications to their active sites.
- [[Neurodegeneration]]: The accumulation of oxidized and misfolded proteins is a hallmark of diseases like [[notes/_link/Alzheimer's Disease]] and [[notes/_link/Parkinson's Disease]].

### Linking Summary:
- New links added: [[Oxidative Stress]], [[notes/_link/Reactive Oxygen Species]], [[Enzyme]], [[Neurodegeneration]], [[notes/_link/Alzheimer's Disease]], [[notes/_link/Parkinson's Disease]]
- Suggested new entity notes to create: [[Neurodegeneration]]
- Strong connections to strengthen: [[Proteins]] ↔ [[Oxidative Stress]]

## Amino Acid Susceptibility to Oxidation

The susceptibility of individual amino acid side chains to [[notes/_link/Reactive Oxygen Species]] (ROS) and [[Reactive Nitrogen Species]] (RNS) varies widely:

| Amino Acid | ROS Susceptibility | Major Oxidative Products | Biological Consequence |
|------------|-------------------|------------------------|----------------------|
| **Cysteine** (Cys) | Very High (k ≈ 10⁸–10⁹ M⁻¹s⁻¹) | Sulfenic (−SOH), sulfinic (−SO₂H), sulfonic (−SO₃H) acids; disulfides (−S−S−); S-nitrosothiols (−SNO) | Redox signaling; enzyme inactivation; structural disulfide scrambling |
| **Methionine** (Met) | High (k ≈ 10⁷–10⁸ M⁻¹s⁻¹) | Methionine sulfoxide (MetSO); methionine sulfone (MetSO₂) | Loss of function; repaired by [[MsrA/MsrB]] |
| **Tryptophan** (Trp) | High | N-formylkynurenine; kynurenine; 5-hydroxytryptophan | Fluorescence loss; protein aggregation |
| **Tyrosine** (Tyr) | Moderate | Dityrosine; 3,4-dihydroxyphenylalanine (DOPA); 3-nitrotyrosine (with RNS) | Cross-linking; nitration biomarker |
| **Histidine** (His) | Moderate | 2-oxohistidine; 4-hydroxyglutamate | Metal-binding disruption; enzyme inactivation |
| **Phenylalanine** (Phe) | Low–Moderate | o-tyrosine; m-tyrosine | Structural perturbation |
| **Lysine** (Lys) | Low | Carbonyl derivatives; chloramines (with HOCl) | Cross-linking; impaired DNA binding |
| **Arginine** (Arg) | Low | Glutamic semialdehyde (via carbonylation); nitroarginine (with RNS) | Altered charge; enzyme inactivation |

## Types of Protein Oxidative Modifications

### Carbonylation
Protein carbonylation is an **irreversible** modification introducing carbonyl groups (aldehydes, ketones) into proteins. It occurs via:
1. **Direct metal-catalyzed oxidation**: [[Fenton reaction|Fenton chemistry]] at metal-binding sites (e.g., Fe²⁺ bound to ATP-binding motifs) oxidizes Lys, Arg, Pro, and Thr residues to carbonyls
2. **Secondary reaction with lipid peroxidation products**: [[Malondialdehyde]] (MDA) and [[4-hydroxynonenal]] (4-HNE) form covalent Michael adducts with Cys, His, and Lys residues
3. **Reaction with reducing sugars (glycoxidation)**: Advanced glycation end-products (AGEs) contain carbonyl groups

**Consequences**: Carbonylated proteins are recognized by the [[20S Proteasome]] and preferentially degraded. Accumulation of carbonylated proteins is a hallmark of aging and is elevated in [[notes/_link/Alzheimer's Disease]], [[notes/_link/Parkinson's Disease]], and [[notes/_link/Cataract]].

### Sulfur Oxidation

#### Cysteine Modifications
- **Reversible oxidation**:
  - **S-nitrosylation** (−SNO): Formation by [[notes/_link/Nitric Oxide]]-derived species; regulates enzyme activity (e.g., [[notes/_link/NFRB|NF-κB]], [[notes/_link/Caspases]])
  - **S-glutathionylation** (−SSG): Mixed disulfide with [[notes/_link/Glutathione]]; protects Cys from irreversible oxidation
  - **Sulfenylation** (−SOH): Transient intermediate in redox signaling
  - **Disulfide formation** (−S−S−): Intra- or intermolecular; structural and regulatory
- **Irreversible oxidation**:
  - **Sulfinic acid** (−SO₂H): Most proteins can be reduced by [[Sulfiredoxin]] (Srx)
  - **Sulfonic acid** (−SO₃H): Terminal and irreversible; marks proteins for degradation

#### Methionine Modifications
- **Methionine sulfoxide** (MetSO): Two diastereomers (Met-S-SO and Met-R-SO) are repaired by [[Methionine sulfoxide reductase]] **MsrA** (reduces Met-S-SO) and **MsrB** (reduces Met-R-SO), using [[Thioredoxin]] as the reducing equivalent donor
- **Methionine sulfone** (MetSO₂): Irreversible

### Tyrosine Modifications

#### Dityrosine Formation
Two tyrosyl radicals cross-link to form dityrosine (ﬂuorescent, λex ≈ 315 nm, λem ≈ 400 nm), causing:
- **Intra- and intermolecular cross-linking**: Induces protein aggregation
- **Resistance to proteolysis**: Dityrosine-containing proteins accumulate during aging
- **Biomarker utility**: Dityrosine levels in urine and plasma reflect whole-body oxidative stress

#### Tyrosine Nitration
[[Peroxynitrite]] (ONOO⁻) and [[Hypochlorous Acid|HOCl]]-derived nitrating species convert tyrosine to **3-nitrotyrosine** (3-NT):
- **Mechanism**: ONOO⁻ + CO₂ → ONOOCO₂⁻ → •NO₂ + CO₃⁻•; •NO₂ + Tyr → 3-NT
- **Functional impact**: 3-NT incorporation alters protein conformation and can either inactivate (e.g., [[MnSOD]]) or constitutively activate (e.g., [[notes/_link/Src kinase]]) proteins
- **Clinical relevance**: 3-NT levels are elevated 4–10 fold in [[notes/_link/Atherosclerosis|atherosclerotic plaques]], [[Rheumatoid Arthritis|arthritic joints]], and [[notes/_link/Neurodegenerative Diseases|neurodegenerative brain tissue]]

### Tryptophan Oxidation

- **N-formylkynurenine** (NFK): Opening of the indole ring; undergoes further hydrolysis to **kynurenine**
- **Kynurenine pathway**: Trp oxidation feeds into the [[Kynurenine pathway]], producing neuroactive metabolites: [[Quinolinic acid]] (NMDA agonist) and [[Kynurenic acid]] (NMDA antagonist)
- **Cross-linking**: Kynurenine reacts with Lys residues to form covalent cross-links

### Advanced Oxidation Protein Products (AOPPs)

AOPPs are dityrosine-containing, carbonylated, aggregated protein species formed primarily by [[Hypochlorous Acid]] (HOCl) during [[notes/_link/Inflammation]]. They:
- Are measured as a marker of protein oxidative damage in plasma
- Activate [[notes/_link/Macrophage|macrophages]] and [[notes/_link/Neutrophils]] via [[RAGE]] receptor binding
- Predict cardiovascular events in [[Chronic Kidney Disease]] patients
- Stimulate [[NF-kappa B]] activation in endothelial cells

## Protein Repair Systems

### Methionine Sulfoxide Reductases (Msr)
- **MsrA**: Reduces Met-S-SO (stereospecific); located in cytosol and [[notes/_link/Mitochondria]]
- **MsrB**: Reduces Met-R-SO; [[Selenium]]-dependent (Sec-containing in mammals)
- **Thioredoxin/Thioredoxin reductase**: Regenerates Msr activity at the expense of [[NADPH]]

### Sulfiredoxin (Srx)
Specifically reduces **sulfinic acid** (−SO₂H) on 2-Cys peroxiredoxins (Prx), reactivating these peroxide-scavenging enzymes. Srx is induced by [[NRF2]] under oxidative stress.

### Glutaredoxin and Glutathione
Catalyze the reduction of **S-glutathionylated proteins**:
  Protein-SSG + 2 GSH → Protein-SH + GSSG
GSSG is recycled by [[Glutathione Peroxidase]]

### Disulfide Isomerases
[[Protein Disulfide Isomerase]] (PDI) in the [[Endoplasmic Reticulum]] reshuffles aberrant disulfides formed during oxidative stress, but is itself inactivated by hyper-oxidation.

## Proteolytic Clearance of Oxidized Proteins

### Proteasomal Degradation
- **20S Proteasome**: Degrades oxidized proteins in an [[Ubiquitin]]- and ATP-independent manner; the 20S core recognizes exposed hydrophobic patches on oxidized proteins
- **26S Proteasome**: Ubiquitin-dependent; degrades mildly oxidized proteins but is inhibited by heavily oxidized/cross-linked proteins
- **Immunoproteasome**: IFN-γ-induced variant with altered catalytic subunits (β1i, β2i, β5i) that show enhanced clearance of oxidized proteins during inflammation

### Autophagic Clearance
- **[[Macroautophagy]]**: Engulfs oxidized protein aggregates into [[notes/_link/Autophagosomes]], delivering them to [[notes/_link/Lysosome|lysosomes]] for degradation
- **[[notes/_link/Chaperone-mediated autophagy]] (CMA)**: Recognizes proteins with KFERQ-like motifs; oxidized proteins are CMA substrates
- **[[notes/_link/p62]]/SQSTM1**: Shuttles ubiquitinated oxidized proteins to autophagosomes

### Consequences of Impaired Clearance
When clearance systems are overwhelmed or decline with age:
- **Protein aggregation**: Accumulation of [[Amyloid-beta|Aβ]], [[notes/_link/Alpha-synuclein|α-synuclein]], and [[Tau protein|Tau]]
- **Proteasome inhibition**: Cross-linked oxidized proteins physically block the 20S barrel
- **Lipofuscin accumulation**: Autofluorescent, non-degradable aggregates ("age pigment") in post-mitotic cells

## Redox Signaling Through Protein Oxidation

Protein oxidation is not merely damage—it is a regulated mechanism of **redox signaling**:

### Cysteine-Based Signaling
- **H₂O₂-mediated inactivation of [[Protein Tyrosine Phosphatases]]** (PTPs): Reversible oxidation of the catalytic Cys enables sustained tyrosine kinase signaling
- **[[notes/_link/PTEN]] oxidation**: Cys124-SOH formation inactivates PTEN, activating [[notes/_link/PI3K]]/[[notes/_link/Akt]] signaling
- **[[notes/_link/NFRB]] regulation**: IκB oxidation promotes its degradation, activating NF-κB
- **[[notes/_link/KEAP1]] oxidation**: Cys151/Cys273 modification releases [[NRF2]]

### Methionine-Based Signaling
- **Calmodulin oxidation**: Met oxidation (Met76, Met144, Met145) alters Ca²⁺ binding affinity
- **[[notes/_link/Calcineurin]]**: Met oxidation modulates phosphatase activity in T-cell signaling

### Clinical and Pathological Significance

### Aging
- **Carbonyl content** increases exponentially with age in human tissues
- **Proteasome activity** declines 40–60% in aged tissues
- **Chaperone capacity** ([[Hsp70]], [[Hsp90]]) decreases with age
- **AOPPs** accumulate and activate inflammatory pathways

### Neurodegeneration
- [[notes/_link/Alzheimer's Disease]]: Tau hyperphosphorylation and [[Amyloid-beta|Aβ]] aggregation are promoted by oxidative cross-linking; oxidized [[notes/_link/GAPDH]] and [[notes/_link/Creatine kinase]] impair neuronal energy metabolism
- [[notes/_link/Parkinson's Disease]]: [[notes/_link/Alpha-synuclein]] nitration (3-NT) at Tyr39, Tyr125, Tyr133 stabilizes oligomers; oxidized [[DJ-1]] loses its protective function
- [[notes/_link/Huntington's Disease]]: [[notes/_link/Huntingtin]] fragments form aggregates via transglutaminase-catalyzed cross-links and oxidative modifications

### Cardiovascular Disease
- [[notes/_link/Atherosclerosis]]: Oxidized [[notes/_link/Apolipoprotein B]] in LDL; MPO-catalyzed protein chlorination in plaques
- [[Myocardial infarction]]: Ischemia-reperfusion oxidizes [[Complex I]] and [[notes/_link/Complex III]] subunits, amplifying ROS production

### Diabetes
- **AGE formation**: Hyperglycemia drives protein glycation and oxidative cross-linking
- **β-cell dysfunction**: Oxidized [[PDX1]] and [[Glucokinase]] impair insulin secretion
- **Insulin resistance**: Oxidized [[IRS-1]] and [[AKT]] reduce insulin signaling

### Biomarkers of Clinical Protein Oxidation

| Biomarker | Modification | Clinical Applications |
|-----------|-------------|---------------------|
| **Protein carbonyls** | Carbonylation | General oxidative stress (ELISA, DNPH assay) |
| **3-Nitrotyrosine** | Tyr nitration | Nitrative stress (inflammation, CVD) |
| **Dityrosine** | Tyr cross-linking | Aging, cataracts, CVD |
| **AOPPs** | HOCl-modified proteins | Chronic kidney disease, CVD |
| **Advanced glycation end-products (AGEs)** | Glycoxidation | Diabetes, aging |
| **Chlorotyrosine** | Tyr chlorination | MPO-specific activity marker |

### Connections
- [[Glutathione Peroxidase]]: Reduces H₂O₂ and regenerates reduced thiols
- [[Catalase]]: H₂O₂ decomposition
- [[notes/_link/Thioredoxin]]: Reducing Msr and Prx
- [[notes/_link/Unfolded Protein Response]]: ER stress response to oxidized proteins
- [[Autophagy]]: Bulk degradation of oxidatively damaged proteins
- [[notes/_link/Mitochondrial Dysfunction]]: Oxidized ETC proteins amplify ROS production
- [[notes/_link/Carbonyl Stress]]: Broader concept of protein carbonylation
