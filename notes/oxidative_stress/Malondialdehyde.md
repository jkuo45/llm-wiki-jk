---
type: entity
category: "metabolite"
aliases:
  - "MDA"
tags:
  - "oxidative_stress"
  - "biomarker"
  - "lipid_peroxidation"
created: 2026-05-09
updated: 2026-07-04
---

# Malondialdehyde
Malondialdehyde (MDA) is a reactive dialdehyde that is a prominent marker for [[Lipid Peroxidation]] and chronic [[notes/oxidative_stress/Oxidative Stress]]. It is often measured as a [[Biomarker]] to assess the level of oxidative damage in various tissues and fluids.

## Formation Chemistry and Sources
MDA is generated primarily from the peroxidation of polyunsaturated fatty acids (PUFAs) containing at least three double bonds — particularly arachidonic acid (20:4, n-6), eicosapentaenoic acid (22:5, n-3), and docosahexaenoic acid (22:6, n-3). During [[Lipid Peroxidation]], bicyclic endoperoxide intermediates (prostaglandin G₂-like structures) are formed from the cyclization of PUFA peroxyl radicals. These endoperoxides undergo β-scission and fragmentation to yield MDA as a three-carbon dialdehyde ($CH_2(CHO)_2$). The yield is non-stoichiometric: under typical in vitro peroxidation conditions, approximately 1 molecule of MDA is produced for every 20–40 molecules of fatty acid oxidized, depending on the PUFA composition and reaction conditions.

MDA can also form as a byproduct of [[notes/_link/Thromboxane A₂]] and [[Prostacyclin]] biosynthesis via the cyclooxygenase (COX) pathway, where the fragmentation of the endoperoxide intermediate PGH₂ generates MDA alongside the thromboxane or prostacyclin product. This enzymatic source contributes to basal MDA levels in platelets and vascular endothelial cells, meaning that not all MDA in biological samples necessarily derives from oxidative damage — a fact relevant to its interpretation as a biomarker.

## Chemical Reactivity and Adduct Formation
MDA exists primarily as its enolate anion ($CH_2(CHO)(CH=CHOH)$) at neutral pH and exhibits high electrophilic reactivity toward nucleophilic groups in biomolecules. The most well-characterized DNA adduct is **M₁dG** (3-(2-deoxy-β-D-erythro-pentofuranosyl)pyrimido[1,2-α]purin-10(3H)-one), formed by the reaction of MDA with the exocyclic amino group and N1 of deoxyguanosine. This lesion is mutagenic, inducing base-pair substitutions (primarily G→T transversions) and frameshift mutations in bacterial and mammalian cells. M₁dG is efficiently repaired by the [[notes/_link/Nucleotide Excision Repair]] (NER) pathway but escapes [[notes/_link/Base Excision Repair]]. Elevated M₁dG levels have been detected in tissues from individuals with [[notes/_link/Hereditary Nonpolyposis Colorectal Cancer]] and in patients with [[notes/_link/Helicobacter pylori]]-associated gastritis, linking MDA-mediated DNA damage to carcinogenesis.

MDA also forms covalent adducts with proteins, reacting preferentially with the ε-amino group of lysine residues and the imidazole group of histidine residues. The resulting **MDA-lysine** adducts (dihydropyridine-type) are stable, fluorescent cross-links that accumulate in aging tissues and are recognized by advanced glycation end-product (AGE) receptors ([[notes/_link/RAGE]]), triggering pro-inflammatory signaling. MDA adduction of low-density lipoprotein (LDL) generates **MDA-LDL**, a form of oxidized LDL recognized by [[notes/_link/Macrophage|macrophage]] scavenger receptors (SR-A, CD36) — the same receptors that take up [[notes/_link/Oxidized LDL]] in [[notes/_link/Atherosclerosis]]. Circulating anti-MDA-LDL autoantibodies are elevated in patients with [[notes/_link/Cardiovascular Disease]] and correlate with disease severity.

## Measurement and Biomarker Utility
MDA is most commonly quantified as **thiobarbituric acid reactive substances** (TBARS), a colorimetric/fluorometric assay in which MDA reacts with thiobarbituric acid (TBA) at acidic pH and high temperature to form an MDA-(TBA)₂ adduct measurable at 532–535 nm. Despite its widespread use for over 50 years, the TBARS assay has significant limitations: TBA reacts with many non-MDA aldehydes (including 4-hydroxynonenal, acrolein, and glycated proteins), and sample processing can generate artifactual MDA from decomposition of existing lipid hydroperoxides. More specific methods include HPLC separation with UV or fluorescence detection of MDA-TBA adducts, GC-MS and LC-MS/MS with deuterated MDA as internal standard (e.g., MDA-d₂), and immunochemical detection using anti-MDA-lysine antibodies. LC-MS/MS is the current gold standard for accurate, specific MDA quantification in both clinical and research settings.

Normal plasma MDA levels in healthy humans are typically 0.5–1.5 μM by specific LC-MS/MS methods, with TBARS-based measurements reporting 1–4 μM. Elevated MDA has been reported in:
- **[[notes/_link/Cardiovascular Disease]]**: Increased in plasma, LDL fractions, and atherosclerotic plaque tissue.
- **[[notes/_link/Diabetes Mellitus]]**: Elevated in plasma and erythrocytes, correlating with hemoglobin A1c (HbA1c) and diabetic complications.
- **[[notes/_link/Neurodegenerative Diseases]]**: Higher MDA in cerebrospinal fluid and brain tissue in [[notes/_link/Alzheimer's Disease]] and [[notes/_link/Parkinson's Disease]].
- **[[notes/_link/Chronic Kidney Disease]]**: Increased plasma MDA reflective of uremic oxidative stress.
- **[[notes/_link/Cancer]]**: Elevated in plasma and tumor tissue of breast, lung, colorectal, and liver cancers.

## Therapeutic Implications
Pharmacological interventions that lower MDA include [[notes/_link/Statins]] (via pleiotropic antioxidant effects independent of cholesterol lowering), [[notes/_link/Metformin]] (through AMPK-dependent reduction of mitochondrial ROS), [[notes/_link/Vitamin E]] supplementation (chain-breaking antioxidant in lipid membranes), and [[notes/_link/N-Acetylcysteine]] (replenishing [[notes/_link/Glutathione]] stores). Lifestyle interventions including [[notes/_link/Caloric Restriction]], [[notes/_link/Exercise]], and adherence to [[notes/_link/Mediterranean Diet]] (rich in [[notes/_link/Polyphenols]] and [[notes/_link/Flavonoids]]) are associated with reduced serum MDA levels in human intervention trials.

## Connections
- [[Lipid Peroxidation]]: MDA is the most widely measured end-product.
- [[notes/oxidative_stress/Oxidative Stress]]: MDA levels reflect the balance between pro- and antioxidant forces.
- [[notes/_link/Biomarkers]]: MDA is a validated biomarker of oxidative damage.
- [[notes/_link/Atherosclerosis]]: MDA-modified LDL is a prominent feature of plaque biology.

### Linking Summary
- New links added: [[Lipid Peroxidation]], [[notes/oxidative_stress/Oxidative Stress]], [[Biomarker]]
- Suggested new entity notes to create: [[Reactive dialdehyde]], [[Biomarker]]
- Strong connections to strengthen: [[Malondialdehyde]] ↔ [[Lipid Peroxidation]]

### New Linking Summary (Added 2026-07-04):
- New links added: [[notes/_link/DNA]], [[notes/_link/Atherosclerosis]], [[notes/_link/Macrophage]], [[notes/_link/Cardiovascular Disease]], [[notes/_link/Diabetes Mellitus]], [[notes/_link/Neurodegenerative Diseases]], [[notes/_link/Alzheimer's Disease]], [[notes/_link/Parkinson's Disease]], [[notes/_link/Cancer]], [[notes/_link/Vitamin E]], [[notes/_link/N-Acetylcysteine]], [[notes/_link/Glutathione]], [[notes/_link/Caloric Restriction]], [[notes/_link/Exercise]], [[notes/_link/Polyphenols]], [[notes/_link/Flavonoids]], [[notes/_link/Metformin]], [[notes/_link/Inflammation]], [[CD36 Receptor]]
- Suggested new entity notes to create: [[M₁dG]], [[TBARS Assay]], [[MDA-LDL]], [[RAGE Receptor]], [[Oxidized LDL]]
