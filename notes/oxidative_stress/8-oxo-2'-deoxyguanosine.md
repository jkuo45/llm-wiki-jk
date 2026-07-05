---
type: entity
category: metabolite
aliases:
  - "8-oxodG"
  - "8-OHdG"
  - "8-hydroxy-2'-deoxyguanosine"
tags:
  - "oxidative_stress"
  - "biomarker"
  - "dna_damage"
created: 2026-05-09
updated: 2026-07-04
---

# 8-oxo-2'-deoxyguanosine
8-oxo-2'-deoxyguanosine (8-oxodG) is an oxidized derivative of deoxyguanosine and is one of the major products of [[DNA oxidation]]. It is a widely used biomarker of [[Oxidative Stress]] and is frequently associated with the development of [[Cancer]].

## Formation Mechanism and Chemistry
8-oxodG is formed when the C8 position of the guanine base in [[DNA]] (or the guanine pool in the nucleotide pool) is attacked by [[Hydroxyl Radicals]] (•OH), [[Singlet Oxygen]] ($^1O_2$), [[Peroxynitrite]] (ONOO⁻), or carbonate radical anions ($CO_3^{\bullet-}$). The reaction proceeds via addition of the radical to the C8–N7 double bond of guanine, forming an 8-hydroxy-7,8-dihydroguanyl radical intermediate that is subsequently oxidized to the fully aromatic 8-oxodG. Guanine is the most easily oxidized of the four DNA bases (lowest oxidation potential, $E_{ox} \approx 1.29$ V at pH 7) and the most susceptible to electrophilic attack, making 8-oxodG by far the most abundant oxidative DNA lesion — typically present at steady-state levels of 1–10 lesions per 10⁶ guanines in normal human cells, varying by tissue, age, and metabolic rate.

In addition to direct formation in DNA, 8-oxo-2'-deoxyguanosine can arise from incorporation of oxidized guanine nucleotides from the cellular nucleotide pool. 8-oxo-dGTP, formed by oxidation of dGTP, is a potent mutagenic substrate for [[notes/_link/DNA Polymerase]]; the enzyme [[MTH1]] (NUDT1) hydrolyzes 8-oxo-dGTP to 8-oxo-dGMP, preventing its incorporation into DNA. MTH1 is overexpressed in many [[Cancer]] types and is considered a potential therapeutic target.

## Mutagenic Potential and Structural Consequences
The biological impact of 8-oxodG stems from its ability to adopt two conformations. In the **anti** conformation, 8-oxodG pairs with deoxycytidine (dC) like unmodified guanine, causing no mutation. However, due to the substitution at C8, 8-oxodG can rotate about the N-glycosidic bond to the **syn** conformation, where its Hoogsteen edge presents a geometry nearly identical to thymine. In this conformation, 8-oxodG preferentially pairs with deoxyadenine (dA) during replication, leading to G→T transversion mutations after a second round of replication — one of the most common somatic mutations in human [[Cancer]] genomes. This G→T signature is prevalent in [[notes/_link/p53]] mutations in lung, breast, and colorectal cancers, and in [[notes/_link/KRAS]] mutations in [[notes/_link/Colorectal Cancer]].

Replicative DNA polymerases (Pol δ, Pol ε) are strongly blocked by 8-oxodG, but translesion synthesis (TLS) polymerases (Pol η, Pol κ, Pol ζ) can bypass it, albeit with varying accuracy. Pol η preferentially incorporates dA opposite 8-oxodG (error-prone bypass), while Pol κ preferentially incorporates dC (error-free bypass). The balance between error-free and error-prone TLS determines the mutagenic outcome and is influenced by cellular context, chromatin structure, and the relative expression of TLS polymerases. In [[notes/_link/Mitochondria|mitochondrial DNA]] (mtDNA), where repair capacity is more limited, 8-oxodG accumulates to 5–10 times the levels found in nuclear DNA, contributing to the age-related accumulation of mtDNA mutations.

## Repair Pathways
The primary repair pathway for 8-oxodG is [[Base Excision Repair]] (BER), initiated by the bifunctional glycosylase **OGG1** (8-oxoguanine glycosylase 1). OGG1 hydrolyzes the N-glycosidic bond to release free 8-oxodG, creating an abasic (AP) site, then cleaves the DNA backbone 3′ to the AP site via its associated AP lyase activity. AP endonuclease 1 (APE1) processes the 3′ ends, and Pol β inserts an undamaged dC, followed by ligation by DNA ligase III/XRCC1. Polymorphisms in OGG1 (particularly Ser326Cys) are associated with reduced repair activity and increased cancer risk in some populations. A second glycosylase, **NEIL1** (Neillike DNA glycosylase 1), can also excise 8-oxodG in a replication-independent manner and is particularly important for repair of 8-oxodG in single-stranded DNA during transcription.

In the nucleotide pool, **MTH1** (NUDT1) sanitizes oxidized dGTP, while **MUTYH** (MutY homolog) removes adenine misincorporated opposite 8-oxodG during replication. Biallelic mutations in MUTYH cause **MUTYH-associated polyposis** (MAP), a hereditary colorectal cancer syndrome characterized by an elevated frequency of G→T transversions in the [[notes/_link/APC]] gene.

## Clinical Biomarker Utility
Urinary 8-oxodG is the most widely used non-invasive biomarker of whole-body oxidative DNA damage and repair. It is derived from two sources: (1) direct repair of 8-oxodG in nuclear and mitochondrial DNA by OGG1, and (2) hydrolysis of 8-oxo-dGTP by MTH1 from the nucleotide pool. Excreted 8-oxodG is not reincorporated and is not metabolized further, making its urinary levels a reliable integrated measure of oxidative DNA damage over time. Normal levels in healthy adults are 3–15 ng/mg creatinine (or ~100–500 pmol/kg body weight/day), measured by LC-MS/MS, HPLC-EC, or ELISA. ELISA-based assays, while widely used due to their convenience, may overestimate urinary 8-oxodG levels by 2–10 fold due to cross-reactivity with related oxidized guanine species.

Elevated urinary 8-oxodG has been reported in:
- **[[Cancer]]**: Lung, breast, bladder, colorectal — both as a risk marker and as a correlate of tumor burden.
- **[[notes/_link/Cardiovascular Disease]]**: Associated with [[notes/_link/Atherosclerosis]] severity, heart failure, and risk of major adverse cardiac events.
- **[[notes/_link/Diabetes Mellitus]]**: Elevated in type 2 diabetes, correlating with HbA1c and albuminuria.
- **[[notes/_link/Neurodegenerative Diseases]]**: Higher levels in CSF and urine in [[notes/_link/Alzheimer's Disease]] and [[notes/_link/Parkinson's Disease]].
- **[[notes/_link/Aging]]**: Urinary 8-oxodG increases with age, though the trajectory is modifiable by lifestyle.
- **[[notes/_link/Lifestyle and Environmental Factors]]**: Smoking, air pollution (PM2.5, polycyclic aromatic hydrocarbons), occupational exposures (asbestos, silica), high-fat diets, and lack of [[Exercise]] are all associated with elevated 8-oxodG. Conversely, [[notes/_link/Caloric Restriction]] and [[Mediterranean Diet]] interventions reduce levels.

## Connections
- [[Oxidative Stress]]: 8-oxodG is the most validated biomarker of oxidative DNA damage.
- [[notes/_link/DNA Repair]]: OGG1 and BER are the major repair pathways for 8-oxodG.
- [[notes/_link/Genomic Instability]]: Unrepaired 8-oxodG drives G→T transversion mutations.
- [[notes/_link/p53]]: Frequently mutated at guanine residues susceptible to 8-oxodG formation.

### Linking Summary
- New links added: [[Oxidative Stress]], [[Cancer]], [[DNA oxidation]], [[8-hydroxy-2'-deoxyguanosine]]
- Suggested new entity notes to create: [[8-hydroxy-2'-deoxyguanosine]], [[DNA oxidation]]
- Strong connections to strengthen: [[8-oxo-2'-deoxyguanosine]] ↔ [[Oxidative Stress]]

### New Linking Summary (Added 2026-07-04):
- New links added: [[Hydroxyl Radicals]], [[Singlet Oxygen]], [[Peroxynitrite]], [[DNA]], [[notes/_link/Mitochondria]], [[Base Excision Repair]], [[notes/_link/Genomic Instability]], [[notes/_link/p53]], [[Colorectal Cancer]], [[notes/_link/Cardiovascular Disease]], [[notes/_link/Atherosclerosis]], [[notes/_link/Diabetes Mellitus]], [[notes/_link/Neurodegenerative Diseases]], [[notes/_link/Alzheimer's Disease]], [[notes/_link/Parkinson's Disease]], [[notes/_link/Aging]], [[Exercise]], [[notes/_link/Caloric Restriction]]
- Suggested new entity notes to create: [[OGG1]], [[MTH1]], [[MUTYH]], [[NEIL1]], [[Translesion Synthesis]], [[MUTYH-associated Polyposis]]
