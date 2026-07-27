---
title: Acid Ceramidase in Ferroptosis & Cellular Senescence
description: Research synthesis on acid ceramidase (ASAH1) as a novel GPX4/GSH/iron-independent regulator of ferroptosis in senescent cells, including paracrine propagation via SASP, mechanistic model via the Lands cycle, and therapeutic implications as a senolytic/senomorphic target.
published: 2026-07-27
created: 2026-07-27
source: https://doi.org/10.1038/s41419-026-09108-y
author:
  - David Soriano-Castell
  - Marie Goujon
  - Nawab John Dar
  - Antonio Currais
  - Pamela Maher
tags:
  - ferroptosis
  - senescence
  - lipid-metabolism
  - sphingolipid-metabolism
  - enzyme
  - senolytic
---

# Research Report: Acid Ceramidase in Ferroptosis & Cellular Senescence

**Date:** 27_July_2026 09:12 AM PDT
**Topic:** [[Acid ceramidase]] (ACase; [[ASAH1]]) as a novel regulator of [[Ferroptosis]] in [[Senescent Cells|senescent cells]]

---

## Overview

[[Acid ceramidase]] (ACase, aCDase; encoded by [[ASAH1]]) is a lysosomal hydrolase that cleaves [[Ceramide]] into [[Sphingosine]] and a free fatty acid. It controls the ceramide ↔ [[Sphingosine-1-phosphate]] (S1P) rheostat — a metabolic switch governing cell fate. In 2026, a landmark study (Soriano-Castell et al., *Cell Death Dis*) revealed a completely unexpected role: ACase is overexpressed 5- to 20-fold in [[Replicative Senescence|replicatively senescent]] cells, where it drives a pro-[[Ferroptosis|ferroptotic]] membrane [[Lipid Metabolism|lipid profile]] through [[Ceramide]] catabolism, operating independently of the classical [[GPX4]]/[[Glutathione|GSH]] and [[Iron]] axes.

---

## Structural Biology

- **Heterodimeric glycoprotein:** Catalytic α-subunit (~40 kDa) + protective β-subunit (~13 kDa), both derived from a single [[ASAH1]] precursor by autocatalytic processing in the lysosome
- **Active site:** Nucleophilic cysteine (Cys143) within a Ser–Glu–His catalytic triad ([[NIT family]] amidase)
- **Crystal structure (Gebai et al., 2018; PDB 5U7Z, 2.5 Å):** In the proenzyme, the catalytic center is buried. Autocleavage exposes a hydrophobic channel leading to the active site, with a membrane-attachment surface for substrate access via [[Saposin-D]]
- **pH optimum:** ~4.5 (lysosomal lumen); at neutral pH, ACase can exhibit reverse ceramide synthase activity

---

## Catalytic Function

- **Primary reaction:** [[Ceramide]] + H₂O → [[Sphingosine]] + Free fatty acid
- **Substrate range:** [[Ceramide|Ceramides]] with varying fatty acyl chain lengths (C14–C26)
- **Cysteine amidase:** Activity blocked by thiol-reactive agents and covalent inhibitors targeting Cys143

---

## Sphingolipid Pathway Position

```
                  De novo synthesis
                        ↓
                  Ceramide ←── Sphingomyelin (via SMase)
                  /       \
                 /         \
    ACase (↓)              Sphingomyelin synthase
       ↓                      ↓
   Sphingosine + FA      Sphingomyelin
       ↓ (SPHK1/2)
   Sphingosine-1-phosphate (S1P)
```

[[Acid ceramidase|ACase]] occupies the irreversible catabolic arm of [[Sphingolipid Metabolism]]. Its activity:
- **Lowers [[Ceramide]]** (pro-[[Apoptosis|apoptotic]], pro-[[Senescence]])
- **Raises [[Sphingosine-1-phosphate|S1P]]** (pro-survival, pro-proliferative)
- **Liberates free fatty acids** that enter the [[Lands cycle]] for membrane [[Phospholipid|phospholipid]] remodeling — the mechanistic link to [[Ferroptosis]]

---

## The Ferroptosis Connection: ACase as a Novel GPX4/GSH/Iron-Independent Regulator

> [!info] Source: Soriano-Castell, Goujon, Dar, Currais & Maher, 2026, *Cell Death Dis* (DOI: 10.1038/s41419-026-09108-y)
> The central finding: [[Acid ceramidase]] is overexpressed 5- to 20-fold in [[Replicative Senescence|replicatively senescent]] [[Fibroblast|fibroblasts]], where it creates a pro-[[Ferroptosis|ferroptotic]] membrane lipid profile independent of [[GPX4]]/[[Glutathione|GSH]] and [[Iron]].

### Key Discovery

Replicatively senescent [[WI-38]] [[Fibroblast|fibroblasts]] overexpress [[Acid ceramidase|ACase]] 5- to 20-fold compared to proliferative controls. This overexpression creates a **pro-[[Ferroptosis|ferroptotic]] membrane [[Lipid Metabolism|lipid profile]]** that sensitizes cells to [[Ferroptosis]] — and this vulnerability can be transmitted to neighboring cells.

### Mechanistic Model

- [[Ceramide]] synthesis consumes free saturated ([[SFA]]) and monounsaturated ([[MUFA]]) fatty acids, diverting them from [[Phospholipid|phospholipid]] [[PUFA]] incorporation
- [[Acid ceramidase|ACase]] overexpression breaks down [[Ceramide]], **releasing free SFAs/MUFAs** that enter the [[Lands cycle]]
- These liberated fatty acids are exchanged into the *sn-2* position of membrane [[Phospholipid|phospholipids]], **enriching [[PUFA]]-containing species** (all [[Arachidonic acid|arachidonic acid]]-containing PLs, plus PC-LA, PC-[[Docosahexaenoic acid|DHA]], PE-DHA, PG-DHA)
- Membrane PUFA-PLs are the preferred substrates for [[Iron|iron]]-dependent [[Lipid Peroxidation]] — the execution step of [[Ferroptosis]]
- [[Acid ceramidase|ACase]] knockdown or pharmacological inhibition ([[ARN14794]]) **reduces membrane PL-PUFA content** and protects cells from [[RSL3]]-induced [[Ferroptosis]]

### Independence from Classical Ferroptosis Regulators

> [!important] Novel regulatory axis
> This axis operates independently of the three canonical [[Ferroptosis]] pathways — [[GPX4]], [[Glutathione|GSH]], and labile [[Iron|Fe²⁺]] — and also independently of [[ACSL4]].

| Classical Regulator | Effect After ACase KD | Interpretation |
|---------------------|------------------------|----------------|
| [[GPX4]] | GPX4 protein *decreased* yet cells remained protected | GPX4 is not the mediator |
| [[Glutathione]] | GSH *increased*; protection persisted even after GSH depletion with BSO | GSH-independence confirmed |
| Labile [[Iron]] | Labile iron *increased* ([[Ferritin]] rose) yet cells were protected | Iron is not the mediator |
| [[ACSL4]] | ACSL4 protein unchanged despite PL-PUFA reduction | ACase acts independently of, and upstream of, ACSL4 |

[[Acid ceramidase|ACase]] acts **upstream** by controlling the size of the [[Lipid Peroxidation]] substrate pool — it sets the stage for [[Ferroptosis]] without engaging the usual cast of characters.

### Paracrine Propagation via SASP

> [!tip] Bystander ferroptotic sensitization
> [[SASP]] cytokines [[IL-6]] and [[IL-8]] induce [[Acid ceramidase]] upregulation and ferroptotic sensitization in neighboring proliferative cells, establishing a SASP→ACase→pro-ferroptotic lipid profile axis that spreads both senescence *and* ferroptotic vulnerability through tissue.

- Co-culture of proliferative [[WI-38]] cells with [[Senescent Cells|senescent cells]] (trans-well inserts) induces [[Acid ceramidase|ACase]] upregulation in the proliferative cells
- Recombinant [[IL-6]] and [[IL-8]] (2:1 ratio) recapitulate this effect
- The resulting paracrine [[Acid ceramidase|ACase]] upregulation elevates [[Lipid Peroxidation]] and sensitizes neighboring cells to [[Ferroptosis]]
- This establishes a **[[SASP]] → ACase → pro-ferroptotic lipid profile** axis that spreads ferroptotic vulnerability through tissue, mechanistically explaining how a small number of [[Senescent Cells|senescent cells]] can have disproportionate impact

---

## ACase Over-Expression in Senescence: The Pro-Survival Paradox

| Consequence | Lipid Mediator | Effect on Senescent Cell |
|-------------|----------------|--------------------------|
| Anti-apoptotic | ↑ [[Sphingosine]] / [[Sphingosine-1-phosphate]] | Promotes survival, prevents apoptosis |
| Pro-ferroptotic | ↑ Free FAs → ↑ PL-[[PUFA]]s | Sensitizes to ferroptotic death |

Elevated [[Acid ceramidase|ACase]] raises [[Sphingosine]]/[[Sphingosine-1-phosphate|S1P]], which is classically anti-[[Apoptosis|apoptotic]] and helps [[Senescent Cells|senescent cells]] resist apoptosis — a known [[Senescent cell anti-apoptotic pathways|senescent cell anti-apoptotic pathway (SCAP)]]. This same metabolic shift, however, **inadvertently creates pro-ferroptotic vulnerability** as an unintended consequence. [[Acid ceramidase|ACase]] inhibition therefore represents a selective strategy: it removes ferroptotic vulnerability while leaving the senescence arrest and [[SASP]] intact.

> [!note] Senescence features persist after ACase KD
> siACase [[Senescent Cells|senescent cells]] retain high [[p21]] expression, high SA-β-gal activity, and elevated [[IL-6]]/[[IL-8]] secretion (Soriano-Castell et al., 2026).

---

## Therapeutic Implications: ACase as a Senolytic/Senomorphic Target

- **Selective vulnerability removal:** [[Acid ceramidase|ACase]] inhibition protects [[Senescent Cells|senescent cells]] from [[Ferroptosis]] without reversing the senescent phenotype — it is a **[[Senomorphic]]** (mitigating effects) rather than a frank [[Senolytic]] (killing) strategy, though in contexts where ferroptotic stress is high, it may act senolytically
- **Existing inhibitors:** [[Acid ceramidase|ACase]] inhibitors already exist ([[ARN14794]], [[ARN14974]], [[Carmofur]]), providing a rare near-term translational advantage
- **Druggability:** The catalytic Cys143 is targetable by covalent inhibitors; [[ARN14974]] is systemically active with good brain penetration, and [[Carmofur]] is already clinically approved in Japan
- **Paracrine protection:** Inhibiting [[Acid ceramidase|ACase]] may protect not only [[Senescent Cells|senescent cells]] but also their neighbors from bystander ferroptotic damage

### Key Inhibitors Relevant to the Senescence-Ferroptosis Axis

| Inhibitor | IC50 (hAC) | Key Features |
|-----------|------------|--------------|
| [[ARN14794]] | ~100 nM | Specifically used in the Soriano-Castell 2026 ferroptosis study |
| [[ARN14974]] | 79 nM | Systemically active, brain-penetrant; inhibits ACase across multiple organs |
| [[Carmofur]] | 29 nM | Clinically approved (Japan); crosses BBB; repurposing candidate |

---

## Key Questions & Future Directions

- How generalized is the [[Acid ceramidase|ACase]]-[[Ferroptosis]] axis across diverse senescence inducers ([[Replicative Senescence|replicative]], oncogene-induced, therapy-induced, [[OIS]])?
- Does [[Acid ceramidase|ACase]] inhibition selectively eliminate [[Ferroptosis|ferroptosis]]-prone [[Senescent Cells|senescent cells]] *in vivo* without toxicity to healthy tissues?
- Can [[Carmofur]] (clinically approved) or [[ARN14974]] be repurposed as senotherapeutics in preclinical aging models?
- What is the spatiotemporal dynamics of [[Acid ceramidase|ACase]] upregulation during organismal aging — is it restricted to certain tissues?
- Does the [[Acid ceramidase|ACase]]-[[Ferroptosis]] axis contribute to age-related pathologies where both [[Senescence]] and [[Ferroptosis]] are implicated ([[Neurodegenerative Diseases|neurodegeneration]], ischemia-reperfusion injury, [[Osteoarthritis]])?
- Can [[Acid ceramidase|ACase]] activity or its downstream lipid products serve as biomarkers of ferroptotic vulnerability in aging tissues?

---

## References

- Soriano-Castell D, et al. Acid ceramidase modulates the lipid profile and exacerbates sensitivity to ferroptosis in WI-38 replicative senescent cells. *Cell Death Dis*. 2026. DOI: 10.1038/s41419-026-09108-y
- Gebai A, et al. Structural basis for the activation of acid ceramidase. *Nat Commun*. 2018;9:1621. PMID: 29692406
- Pizzirani D, et al. Benzoxazolone carboxamides: potent and systemically active inhibitors of intracellular acid ceramidase. *Angew Chem Int Ed Engl*. 2015;54:485-489. PMID: 25395373
- Realini N, et al. Discovery of highly potent acid ceramidase inhibitors with in vitro tumor chemosensitizing activity. *Sci Rep*. 2013;3:1035. PMID: 23301156
