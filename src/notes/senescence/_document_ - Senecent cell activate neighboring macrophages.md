---
title: Senescent Cells Activate Neighbouring Macrophages via Surface IL-1α and SASP for Amplification of Inflammation
description: >-
  Research synthesis on how senescent cells translocate IL-1α to the cell surface
  through the SASP, thereby activating neighbouring macrophages to amplify
  chronic inflammation via juxtacrine and paracrine signaling loops.
published: 2026-07-11
created: 2026-07-11
source: Multi-source research synthesis
author: []
tags:
  - senescence
  - sasp
  - inflammation
  - il-1-alpha
  - macrophages
  - inflammaging
  - aging
  - cell-surface-signaling
---

# Senescent Cells Activate Neighbouring Macrophages via Surface IL-1α and SASP for Amplification of Inflammation

## IL-1α as the Master Upstream Initiator of SASP

The foundational finding comes from Orjalo et al. (2009, PNAS, PMID 19911007), who demonstrated that **cell surface-bound [[IL-1α]]** — not secreted IL-1α — is the essential cell-autonomous driver of the [[SASP|Senescence-Associated Secretory Phenotype]]. Senescent human fibroblasts express high levels of IL-1α mRNA, intracellular protein, and cell surface-associated protein, but secrete very little protein to the extracellular compartment.

> [!important] IL-1α Drives SASP Through Cell Surface Presentation, Not Secretion
> Neutralizing IL-1α antibodies, IL-1 receptor antagonist (IL-1RA), and siRNA knockdown of IL-1α all markedly reduced senescence-associated [[IL-6]] and [[IL-8]] secretion. This established that the membrane-bound form of IL-1α, rather than a soluble secreted form, is the critical SASP initiator.

Key mechanistic findings from this study:

- Depletion of **[[IRAK1]]** — a key component of the IL-1R signaling cascade — also suppressed SASP secretion, confirming engagement of the [[IL-1R]] pathway.
- IL-1α depletion reduced DNA binding activity of both [[NF-κB|NF-κB]] and [[CEBPβ|C/EBPβ]], the two transcription factors that stimulate IL-6/IL-8 transcription.
- The mechanism was **universal** across senescence inducers: DNA damage, replicative exhaustion, oncogenic [[HRAS]], and chromatin relaxation.
- Conditioned medium from IL-1α-depleted senescent cells markedly reduced the invasiveness of metastatic cancer cells, demonstrating that IL-1α regulates the biological effects of the SASP on the tissue microenvironment.

This established the regulatory hierarchy: **IL-1α → IL-1R → IRAK1 → NF-κB/C/EBPβ → IL-6/IL-8 and full SASP**.

## Non-Classical Secretion Pathways for IL-1α Surface Translocation

IL-1α presents a paradox: it lacks a signal peptide and a transmembrane domain, yet localizes to the plasma membrane of senescent cells. Three interconnected mechanisms explain this surface translocation.

### S100A13/Cu²⁺-Dependent Non-Classical Secretory Pathway

Su et al. (2019, Aging, PMID 30673283) showed that IL-1α is exported to the cell surface via [[S100A13]], a calcium-binding protein that forms a multiprotein complex with IL-1α:

1. The S100A13–IL-1α complex interacts with **Cu²⁺ ions**, driving it to the acidic inner leaflet of the plasma membrane.
2. S100A13 is **upregulated** during all forms of senescence — oncogene-induced (Ras OIS), therapy-induced, and replicative.
3. Overexpression of S100A13 increases surface IL-1α levels, [[NF-κB|NF-κB]] activity, and SASP gene induction; knockdown has the opposite effect.
4. Lowering Cu²⁺ levels decreases surface IL-1α, NF-κB activity, and SASP production.

> [!tip] S100A13 Is Rate-Limiting for Senescence
> Impairment of the non-classical secretory pathway of IL-1α via S100A13 knockdown delays senescence establishment. This positions S100A13 as a potential therapeutic target for limiting the deleterious effects of accumulated senescent cells.

### Tethering via IL-1R2 and GPI-Anchored Proteins

Chan et al. (2020, Eur J Immunol, PMID 32445212) revealed the anchoring mechanism for surface IL-1α:

- Pro-IL-1α tethers to the plasma membrane through **IL-1R2** (the decoy receptor lacking a signaling-competent cytoplasmic domain).
- A proportion also associates via **GPI-anchored proteins** — pro-IL-1α interacts with another GPI-anchored protein at the surface (since pro-IL-1α lacks its own GPI signal sequence).
- IL-1R2⁻/⁻ and IL-1R1⁻/⁻ macrophages show significantly lower surface IL-1α.
- **Thrombin** cleavage releases active IL-1α from the surface (cleaving pro-IL-1α at its N-terminus).
- **PI-PLC** (phosphoinositide-specific phospholipase C) strips GPI-anchored proteins and eliminates residual surface IL-1α.
- **IFN-γ** potently inhibits trafficking of IL-1α to the surface, independent of expression levels — linking macrophage polarization state to IL-1α surface presentation.

> [!warning] Controversy on Cell Surface IL-1α in Senescent Cells
> Chan et al. (2020) found that careful flow cytometry with robust dead-cell gating revealed no bona fide csIL-1α on viable senescent IMR-90 fibroblasts, but rather soluble IL-1α release (~120 pg/mL). Prior reports of csIL-1α on senescent cells may have been confounded by inadvertent cell permeabilization. This remains an area of active investigation.

### Redox and Calcium-Dependent Processing by Calpain

McCarthy et al. (2013, JBC, PMID 23986464) demonstrated that senescence-associated oxidative stress and calcium dysregulation drive IL-1α processing:

- Senescence-associated increases in **H₂O₂** drive IL-1α expression.
- Elevated intracellular **Ca²⁺** activates [[Calpain]], which cleaves pro-IL-1α (31 kDa) into mature IL-1α (17 kDa C-terminal fragment) plus an N-terminal propiece.
- The mature C-terminal fragment binds IL-1R1 at the cell surface.
- The N-terminal propiece contains a canonical nuclear localization sequence and enters the nucleus, where it acts as a transcriptional activator of inflammatory genes.
- Antioxidants and Ca²⁺ chelators prevent SASP establishment.

> [!info] Feedforward Amplification
> IL-1α neutralization also inhibited expression of nascent IL-1α itself, revealing a feedforward mechanism in which surface IL-1α stimulates its own transcription through NF-κB activation.

## Caspase-5/11: The Missing Cleavage Mechanism in Senescence

Wiggins et al. (2019, Aging Cell, PMID 30916891) solved the long-standing question of how IL-1α is cleaved during senescence:

- IL-1α is directly cleaved at a conserved site by **[[Caspase-5]]** (human) or **[[Caspase-11]]** (mouse) — enzymes of the **noncanonical inflammasome**.
- Senescent human cells (IMR-90, WI-38 fibroblasts) show increased CASP5 expression, cell surface IL-1α, and cleaved IL-1α in conditioned media.
- CASP5 knockdown significantly reduced surface IL-1α, cleaved IL-1α release, and downstream [[IL-6]], [[IL-8]], [[CCL2]] — without affecting SA-β-gal or proliferation (senescence arrest was maintained, but SASP was abolished).
- In mouse hepatocytes, Caspase-11 is required for SASP-driven [[Senescence Surveillance]] *in vivo*.
- The [[cGAS-STING Pathway|cGAS–STING pathway]] controls CASP5 expression upstream — cGAS knockdown reduced CASP5 expression, linking cytoplasmic chromatin sensing to IL-1α processing.
- Notably, [[Interleukin 1β|IL-1β]] was not released from senescent cells despite being transcriptionally upregulated — only IL-1α processing and release occurred, independently of caspase-1/NLRP3/ASC.

> [!info] Species Differences in Caspase Dependence
> In human cells, caspase-5 is sufficient for IL-1α cleavage and SASP. In murine cells, only caspase-11 is required for IL-1α release, while IL-1β requires both caspase-11 and caspase-1. This implies that IL-1α release during senescence operates independently of the canonical NLRP3/caspase-1 inflammasome.

## Paracrine and Juxtacrine Activation of Neighbouring Macrophages

### Juxtacrine Signaling via IL-1R1

Surface-bound IL-1α on senescent cells engages **IL-1R1** on neighbouring cells — including [[Macrophages]] — in a juxtacrine (contact-dependent) manner:

1. IL-1R1 recruits **IL-1RAcP** (accessory protein)
2. The complex activates **MyD88** → **IRAK1/4** → **TRAF6**
3. Downstream activation of [[NF-κB|NF-κB]] and [[MAPK]] signaling
4. Full pro-inflammatory transcriptional program in macrophages: TNF-α, IL-6, IL-1β, IL-12, chemokines, COX-2, iNOS

> [!warning] Macrophages May Not Respond to Soluble IL-1α/IL-1β Directly
> Chan et al. (2020) found that human and mouse macrophages do not respond to exogenous IL-1α or IL-1β treatment despite expressing IL-1R1 and responding to LPS. This suggests that the juxtacrine, membrane-bound form of IL-1α — rather than soluble IL-1α — may be the primary activator of macrophage pro-inflammatory responses in the context of senescent cell accumulation.

### The Self-Amplifying Inflammatory Circuit

The senescent cell–macrophage axis creates a self-amplifying inflammatory loop:

```mermaid
graph TD
    SC[Senescent Cell] -->|Surface IL-1α| MB[Macrophage]
    MB -->|IL-1R1/NF-κB activation| MB2[Pro-inflammatory Macrophage]
    MB2 -->|TNF-α, IL-1β, IL-6| SC
    SC -->|More IL-1α expression & SASP| SC
    SC -->|TGFβ, IL-1α, VEGF, CCL2| HC[Healthy Neighbouring Cell]
    HC -->|Paracrine Senescence| SC2[New Senescent Cell]
    SC2 -->|Surface IL-1α| MB
    MB2 -->|DAMPs (HMGB1, mtDNA)| MB3[Inflammasome Activation]
    MB3 -->|IL-1β maturation & pyroptosis| MB2
```

The circuit operates through several interconnected mechanisms:

1. **Senescent cell** presents surface IL-1α → activates macrophage IL-1R1 → NF-κB in macrophage
2. **Macrophage** produces TNF-α, IL-1β, IL-6 → further activates NF-κB in the senescent cell → more IL-1α expression and SASP
3. **Macrophage** also produces IL-1α itself (TLR ligation → pro-IL-1α → surface translocation via IL-1R2/GPI anchoring → feeds back on senescent cells)
4. **[[Paracrine Senescence]]**: SASP factors (TGFβ, IL-1α, VEGF, CCL2) from senescent cells induce senescence in healthy neighbouring cells, increasing the senescent cell burden and expanding the inflammatory source (Acosta et al., 2013, Nat Cell Biol)

### Macrophage Polarisation Effects

- Senescent cell SASP skews macrophages toward a **pro-inflammatory M1-like phenotype**.
- IL-6 and IL-1β (with TGFβ) from the SASP also promote **TH17 differentiation**, further amplifying tissue inflammation.
- Paradoxically, excessive SASP can also impair macrophage phagocytosis and recruit immunosuppressive **MDSCs**, creating an immunosuppressive niche that allows senescent cells to persist.

### Inflammasome Crosstalk

- Senescent cells themselves activate components of the noncanonical inflammasome (caspase-5/11).
- Macrophages arriving at the site encounter DAMPs (e.g., [[HMGB1]], [[mtDNA]] from senescent cells) that activate the canonical **NLRP3 inflammasome** → caspase-1 → IL-1β maturation and pyroptosis.
- The noncanonical pathway (caspase-5/11, activated by intracellular LPS or other signals) can also cleave gasdermin D, causing pyroptosis and further IL-1α/IL-1β release.
- Burzynski et al. (2019) showed that surface pro-IL-1α on macrophages can be cleaved by **thrombin**, providing an additional proteolytic activation mechanism — potentially relevant in atherosclerotic plaques where senescent cells, macrophages, and thrombin coexist.

## Tissue-Specific Contexts

### Atherosclerosis

Senescent macrophages, endothelial cells, and vascular smooth muscle cells all accumulate in advanced plaques. Surface IL-1α drives SASP that perpetuates plaque inflammation. Chan et al. (2018, Cardiovasc Res) demonstrated that the SASP — driven by membrane-bound IL-1α — is a key driver of chronic inflammation in vascular disease. [[Atherosclerosis]] represents a tissue context where senescent cell–macrophage interactions are particularly consequential.

### Liver

Senescent hepatocytes require caspase-11 (in mice) for SASP-driven immune surveillance. Kupffer cells (liver macrophages) clear senescent hepatocytes via IL-1α-dependent mechanisms (Wiggins et al., 2019). Hepatic stellate cell senescence drives IL-33 secretion, promoting [[Hepatocellular Carcinoma]] development.

### Cancer Microenvironment

Senescent fibroblasts promote epithelial-to-mesenchymal transition ([[Epithelial-to-mesenchymal transition]]) and invasion in neighbouring cancer cells through IL-1α-dependent SASP (IL-6, IL-8). Conditioned medium from IL-1α-depleted senescent cells markedly reduced cancer cell invasiveness. The SASP reshapes the tumour microenvironment to support cancer growth, immune evasion, and metastasis.

## Therapeutic Implications

> [!tip] Multiple Therapeutic Entry Points
> The IL-1α–macrophage inflammatory axis offers several druggable nodes for intervention in age-related inflammatory disease.

| Target | Strategy | Rationale |
|--------|----------|-----------|
| IL-1α | Canakinumab (anti-IL-1α mAb), Anakinra (IL-1RA) | Block SASP initiation; CANTOS trial showed cardiovascular benefit |
| Caspase-5 | Small-molecule inhibitors | Prevent IL-1α cleavage during senescence; reduce SASP without killing senescent cells |
| S100A13 | Inhibition of non-classical secretion | Prevent IL-1α surface translocation |
| Cu²⁺ | Tetrathiomolybdate (TTM) | Chelate copper to impair S100A13/IL-1α complex formation |
| NF-κB | [[Rapamycin]], [[Metformin]], glucocorticoids | Block downstream SASP transcription |
| Senolytics | [[Dasatinib]] + [[Quercetin]], Fisetin | Eliminate senescent cells entirely, removing the inflammatory source |
| mTORC1 | [[Rapamycin]] | Suppresses IL-1α translation and SASP protein production |

## Key References

1. Orjalo AV et al. (2009) "Cell surface-bound IL-1α is an upstream regulator of the senescence-associated IL-6/IL-8 cytokine network." *PNAS* 106(40):17031-17036. PMID: 19911007
2. Wiggins KA et al. (2019) "IL-1α cleavage by inflammatory caspases of the noncanonical inflammasome controls the senescence-associated secretory phenotype." *Aging Cell* 18(3):e12946. PMID: 30916891
3. Su Y et al. (2019) "S100A13 promotes senescence-associated secretory phenotype and cellular senescence via modulation of non-classical secretion of IL-1α." *Aging* 11(2):517-536. PMID: 30673283
4. Chan JNE et al. (2020) "Cell surface IL-1α trafficking is specifically inhibited by interferon-γ, and associates with the membrane via IL-1R2 and GPI anchors." *Eur J Immunol* 50(8):1186-1199. PMID: 32445212
5. McCarthy DA et al. (2013) "Redox Control of the Senescence Regulator Interleukin-1α and the Secretory Phenotype." *J Biol Chem* 288(48):34469-34481. PMID: 23986464
6. Acosta JC et al. (2013) "Inflammasome activation controls paracrine senescence." *Nat Cell Biol* 15(7):780-792. PMID: 23770686
7. Chan JNE et al. (2018) "Cell surface interleukin-1α, which drives the senescence-associated secretory phenotype (SASP), is tethered via IL-1R2 or GPI-anchored." *Cardiovasc Res* 114(Suppl 1):P10.

## Documents

List of documents in the wiki that mention this entity

- [[_document_ - SASP, senescent cells, grok|SASP, senescent cells, grok]]
  - Highlights IL-1α as a master regulator of SASP through its activation of NF-κB; discusses inflammasome-mediated SASP activation.

- [[_document_ - The role of the dynamic epigenetic landscape in senescence_orchestrating SASP expression]]
  - Lists IL-1α among the upstream SASP regulators whose outputs are shaped by the epigenetic landscape that orchestrates downstream SASP expression.

- [[_document_ - The Senescence-Associated Secretory Phenotype The Dark Side of Tumor Suppression|SASP: The Dark Side of Tumor Suppression]]
  - Foundational review characterizing the SASP as a pro-inflammatory secretome; details the dual role of senescence as both tumor suppressive and cancer-promoting via the SASP.

- [[_document_ - sirtuins in health and disease s41392-022-01257-8|Sirtuins in health and disease]]
  - Discusses the effect of SIRTs in inflammatory cells including macrophages, mast cells, and endothelial cells, relevant to understanding macrophage polarization in the senescence context.

## Connections

- [[SASP|Senescence-Associated Secretory Phenotype]] — The SASP is the effector mechanism through which surface IL-1α drives inflammatory amplification; IL-1α is the master upstream SASP regulator
- [[IL-1α]] — Cell surface-bound IL-1α is the essential initiator of SASP and the bridge to macrophage activation via juxtacrine IL-1R1 signaling
- [[Macrophages]] — Recruited and activated by senescent cell SASP; produce TNF-α, IL-1β, IL-6 that feed back to amplify senescent cell SASP in a self-reinforcing inflammatory loop
- [[NF-κB|NF-κB]] — Master transcription factor activated by both IL-1α (in senescent cells) and downstream in macrophages; drives the full SASP gene program
- [[Caspase-5]] / [[Caspase-11]] — Noncanonical inflammasome caspases that cleave IL-1α at a conserved site, generating fully active cytokine during senescence
- [[S100A13]] — Non-classical secretory protein that forms a Cu²⁺-dependent complex with IL-1α to translocate it to the cell surface; upregulated during all forms of senescence
- [[Calpain]] — Ca²⁺-activated protease that cleaves pro-1α into mature form; aberrantly active in senescent cells due to elevated Ca²⁺
- [[cGAS-STING Pathway|cGAS–STING]] — Senses cytoplasmic chromatin fragments; drives interferon signaling that controls CASP5 expression upstream
- [[Paracrine Senescence]] — SASP factors (TGFβ, IL-1α, VEGF, CCL2) induce senescence in healthy neighbouring cells, expanding the senescent cell population
- [[Interleukin 1β|IL-1β]] — Transcriptionally upregulated in senescent cells but not released; IL-1α, not IL-1β, is the primary SASP driver
- [[IL-6]] / [[IL-8]] — Key downstream SASP cytokines whose secretion depends entirely on surface IL-1α signaling
- [[CCL2]] — SASP chemokine regulated by IL-1α; strong chemoattractant for monocytes and macrophages
- [[Aging]] — Senescent cell accumulation with age drives chronic SASP-mediated inflammation (inflammaging)
- [[Inflammaging]] — Chronic, sterile, low-grade inflammation driven by accumulated senescent cells and their SASP
- [[Atherosclerosis]] — Tissue context where senescent cell–macrophage interactions via surface IL-1α perpetuate plaque inflammation
- [[Epithelial-to-mesenchymal transition]] — SASP from senescent fibroblasts promotes EMT and cancer cell invasion via IL-1α-dependent mechanisms
- [[HMGB1]] — DAMP released by senescent cells that activates macrophage NLRP3 inflammasome
- [[mtDNA]] — Mitochondrial DNA released via miMOMP activates cGAS–STING in senescent cells, driving SASP
- [[Rapamycin]] — mTOR inhibitor that suppresses IL-1α translation and SASP protein production
- [[Metformin]] — Inhibits NF-κB signaling in fibroblasts, macrophages, and senescent endothelial cells
- [[Dasatinib]] / [[Quercetin]] — Senolytic combination that eliminates senescent cells, removing the inflammatory source
- [[p38 MAPK]] — Activates NF-κB-mediated SASP independent of DDR; stabilizes SASP transcripts in tumour microenvironment
- [[IRAK1]] — Key IL-1R signaling component; depletion suppresses SASP secretion, confirming IL-1R pathway engagement
- [[TNFα]] — Pro-inflammatory SASP cytokine produced by activated macrophages that feeds back to amplify senescent cell NF-κB signaling
- [[Senescence Surveillance]] — Immune-mediated clearance of senescent cells; requires caspase-11/IL-1α axis in vivo
- [[Senescent Cells]] — Source of surface IL-1α and the SASP; accumulate with age and drive chronic inflammation

## Linking Summary

- New links added: [[SASP|Senescence-Associated Secretory Phenotype]], [[IL-1α]], [[Macrophages]], [[NF-κB|NF-κB]], [[Caspase-5]], [[Caspase-11]], [[S100A13]], [[Calpain]], [[cGAS-STING Pathway|cGAS–STING]], [[Paracrine Senescence]], [[Interleukin 1β|IL-1β]], [[IL-6]], [[IL-8]], [[CCL2]], [[Aging]], [[Inflammaging]], [[Atherosclerosis]], [[Epithelial-to-mesenchymal transition]], [[HMGB1]], [[mtDNA]], [[Rapamycin]], [[Metformin]], [[Dasatinib]], [[Quercetin]], [[p38 MAPK]], [[IRAK1]], [[TNFα]], [[Senescence Surveillance]], [[Senescent Cells]]
- Suggested new entity notes to create: [[Inflammasome]], , [[Senolytic Therapy]], [[Senomorphic Therapy]], [[MyD88]], [[TRAF6]]
- Strong connections to strengthen:
    - [[IL-1α]] ↔ [[SASP|Senescence-Associated Secretory Phenotype]]
    - [[IL-1α]] ↔ [[Macrophages]]
    - [[IL-1α]] ↔ [[NF-κB|NF-κB]]
    - [[Macrophages]] ↔ [[Senescent Cells]]
    - [[SASP|Senescence-Associated Secretory Phenotype]] ↔ [[Inflammaging]]
    - [[Caspase-5]] ↔ [[IL-1α]]
    - [[S100A13]] ↔ [[IL-1α]]
    - Justification: These bidirectional connections represent the core molecular axis of the senescent cell–macrophage inflammatory amplification loop. Strengthening them ensures the knowledge graph correctly surfaces the mechanistic chain from IL-1α surface translocation to macrophage activation to inflammatory amplification.
