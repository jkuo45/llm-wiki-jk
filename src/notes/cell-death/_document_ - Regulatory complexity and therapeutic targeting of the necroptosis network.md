---
title: "Regulatory complexity and therapeutic targeting of the necroptosis network"
description: Niu et al. 2026 review of canonical and non-canonical necroptosis induction (TNFR1, ZBP1, TRIF), the multilayered post-translational and transcriptional regulation of RIPK1/RIPK3/MLKL, crosstalk with apoptosis/autophagy/inflammation/metabolism, and therapeutic targeting.
published: 2026-04-30
created: 2026-09-14
source: https://pmc.ncbi.nlm.nih.gov/articles/PMC13171333/
author:
  - Lipan Niu
  - Fengxia Liu
  - Yuxin Zhao
  - Jiangtao Li
  - Hui Wang
tags:
  - clippings
url: https://doi.org/10.3389/fimmu.2026.1824460
pmid: 42148085
journal: Front Immunol. 2026;17:1824460
---

# Regulatory complexity and therapeutic targeting of the necroptosis network (Niu et al. 2026)

Frontiers in Immunology review synthesizing the canonical and non-canonical routes to [[Necroptosis]], the multilayered regulation of its core executors [[RIPK1]], [[RIPK3]], and [[MLKL]], the crosstalk that embeds it in a broader death/inflammation/metabolism network, and the resulting therapeutic opportunities. Its framing point is context dependence: necroptosis is pathogenic when dysregulated but protective as host defense and as an anticancer strategy.

> [!important]
> Central claim — necroptosis is best understood not as a linear [[TNFα]] → [[TNFR1]] → [[RIPK1]]/[[RIPK3]]/[[MLKL]] cascade but as a multi-input network. Non-canonical sensors ([[ZBP1]], [[TRIF]]), extensive post-translational regulation of the core kinases, and convergence with [[Apoptosis]], [[Autophagy]], metabolism, and [[PANoptosis]] together determine whether a cell dies and by which modality.

## Introduction

Necroptosis is a regulated lytic death typically activated when apoptotic signaling is inhibited. First recognized as antiviral host defense, it is now a pathogenic driver in inflammatory, cardiovascular, neurodegenerative, and malignant disease, while retaining protective roles in acute injury, infection, and reproduction. The canonical pathway — most characterized downstream of TNF — proceeds through Complex I, the [[Ripoptosome]] (Complex IIb), and finally the [[necrosome]], in which [[RIPK1]] and [[RIPK3]] phosphorylate [[MLKL]] to permeabilize the plasma membrane. Beyond TNF, viral nucleic acids activate [[ZBP1]] and [[Toll-like Receptor|TLR]] engagement ([[TLR3]]/[[TLR4]]) uses [[TRIF]], both converging on RIPK3–MLKL. Core-machinery activity is tuned by phosphorylation, ubiquitination, and modulatory proteins ([[TRIM21]], [[Akt]], [[Hsp90]]), and by crosstalk with other death and inflammatory pathways.

## Canonical and alternative pathways of necroptosis induction

### TNF/TNFR1 axis

[[TNFα]] binding to [[TNFR1]] nucleates Complex I; RIPK1 deubiquitination then allows assembly with [[FADD]], [[Caspase-8]], and [[RIPK3]] into the ripoptosome. Under necroptosis-permissive conditions (low caspase-8, high RIPK3/MLKL), this matures into the necrosome, where RIPK1 and RIPK3 reciprocally phosphorylate. Activated RIPK3 phosphorylates MLKL, driving oligomerization, membrane translocation, and pore formation → lysis → DAMP release → inflammation and a pathogenic feedback loop. This axis is a therapeutic target from autoimmune disease to severe viral infection such as SARS-CoV-2.

> [!info]
> Figure 1 routes: (1) TNFR1 → RIPK1/RIPK3/MLKL; (2) ZBP1 senses viral Z-RNA and recruits RIPK3; (3) TLR3 (dsRNA) and TLR4 (LPS) signal through TRIF, which binds RIPK3 directly. In mitochondria, RIPK3 phosphorylates the [[Pyruvate Dehydrogenase]] complex (PDC) to modulate metabolic reprogramming. MLKL oligomerizes to plasma and nuclear membranes, causing rupture, ion influx, and DAMP release.

### ZBP1-mediated pathway

[[Interferon]] signaling sensitizes cells to necroptosis (e.g. IFN-γ upregulates MLKL in lung epithelium). Central is [[ZBP1]], whose Zα domains recognize Z-DNA/Z-RNA; on detecting viral or endogenous Z-nucleic acids it recruits RIPK3 via RHIM–RHIM interaction → RIPK3 autophosphorylation → MLKL activation.

> [!warning] Species-dependent RIPK1 requirement
> In **human** cells ZBP1 cannot efficiently engage RIPK3 without RIPK1, which acts as an essential bridging adaptor. In **murine** cells ZBP1 binds and activates RIPK3 directly, and RIPK1 is inhibitory (RIPK1 loss or RHIM mutation promotes ZBP1-dependent necroptosis in vivo).

The ZBP1 pathway is implicated in diabetic nephropathy and inflammation. [[Caspase-6]], dispensable for canonical TNF necroptosis, facilitates ZBP1/RIPK3 complex formation during influenza A infection, potentiating necroptosis and [[NLRP3]] activation. Mitochondrial factors modulate it too: PUMA promotes mitochondrial DNA release that activates ZBP1 and amplifies RIPK3/MLKL phosphorylation, while PUMA itself can be upregulated RIPK3/MLKL-dependently in a positive feedback loop. In severe SARS-CoV-2, postmortem lungs show necroptosis alongside apoptosis and immune infiltration.

### TRIF-mediated pathway

[[TRIF]] is the adaptor for [[TLR3]] and a branch of [[TLR4]] signaling. Under caspase inhibition, poly(I:C) (TLR3) or [[Lipopolysaccharide|LPS]] (TLR4) promotes a TRIF/RIPK3 necrosome; LPS plus caspase inhibition induces RIPK3-dependent necroptosis in macrophages. TRIF's RHIM directly recruits and activates RIPK3, bypassing RIPK1 in some contexts; activated RIPK3 phosphorylates MLKL (human Thr357/Ser358 → oligomerization, membrane translocation, disruption). TRIF can also engage RIPK1, but the RIPK1-versus-RIPK3 contribution to TLR-driven necroptosis is context-dependent. TLR4 engages both [[MyD88]] and TRIF: MyD88 drives early NF-κB and can indirectly promote RIPK1/RIPK3 via autocrine TNF, a feed-forward loop. TLR4 antagonism reduces RIPK3 expression, NF-κB activation, and necroptosis in acute pancreatitis models. The TRIF pathway is implicated in acute pancreatitis and immune dysregulation, and TLR4 signaling crosstalks with ferroptosis (a TLR4/TRIF/type I IFN axis that recruits neutrophils ahead of a necroptotic wave in cardiac transplant).

### Other emerging triggers and context-specific circuits

- **RIPK3/CaMKII/mPTP axis:** in myocardial ischemia-reperfusion, RIPK3 activates [[CaMKII]], opening the [[Mitochondrial Permeability Transition Pore]].
- **RIPK3–MFN2 ER–mitochondria tethering:** RIPK3 phosphorylates [[MFN2|mitofusin-2]], promoting ER–mitochondria contact and mitochondrial Ca2+ overload.
- **Hydrogen postconditioning** attenuates skin ischemia-reperfusion via a RIPK/PGAM5-dependent mechanism.
- **Antitumor immunity:** the RIPK3/RIPK1/NF-κB axis appears dispensable for optimal CD8+ T-cell cross-priming induced by necroptotic cells.

In oncology, necroptotic tumor cells release DAMPs that can promote immunogenic cell death and antitumor immunity, whereas sustained necroptotic signaling may contribute to therapy resistance — a dual, context-dependent role.

## Multifaceted regulation of the core necroptotic machinery

RIPK1, RIPK3, and MLKL are central hubs whose activity is controlled by post-translational modifications, protein–protein interactions, and transcriptional/epigenetic mechanisms.

### Regulation of RIPK1: the decision-making integrator

Core nodes: RHIM-mediated RIPK3 interaction (essential for necrosome formation); caspase-8 cleavage of RIPK1 (checkpoint that removes the kinase domain and prevents aberrant necroptosis); and [[CYLD]]-mediated deubiquitination (releases RIPK1 from pro-survival Complex I into the pro-death necrosome).

- **Phosphorylation.** [[DAPK|Death-associated protein kinase 1]] phosphorylates RIPK1 at Ser321 to inhibit its pro-necrotic function; [[ROS]] promote RIPK1 autophosphorylation in a feedforward loop; phosphatases such as [[SHP1|PTPN6]] provide negative regulation; the pro-survival [[PI3K]]/[[Akt]] pathway inhibits RIPK1 kinase activity.
- **Ubiquitination.** [[TRIM21]] ubiquitinates RIPK1 (RING domain) to promote activation; [[OTULIN]] counteracts CYLD, and OTULIN phosphorylation at Tyr-56 during necroptosis regulates RIPK1 ubiquitination to drive death. Ubiquitinating/deubiquitinating and kinase/phosphatase layers integrate: phosphorylation can create docking sites for E3 ligases or DUBs and vice versa, so the integrated signaling code — not any single modification — decides survival versus necroptosis.

### Regulation of RIPK3: the core executor of necroptosis

The best-established activation mode is RHIM-mediated engagement by [[RIPK1]], [[ZBP1]], or [[TRIF]] → autophosphorylation. Context-specific regulation includes:

- **[[RSK3]]** directly phosphorylates RIPK3 to promote necroptosis in ischemic retinal injury.
- **[[CSNK1G2]]** (casein kinase 1G2) binds RIPK3 and inhibits its kinase activity; linked to male reproductive aging.
- **Pathogen bypass:** the severe fever with thrombocytopenia syndrome virus NSs protein binds the RIPK3 kinase domain to promote autophosphorylation independently of RHIM.

Beyond MLKL, RIPK3 phosphorylates substrates linking death to broader dysfunction: [[CaMKII]] (mitochondrial dysfunction; myocardial I/R, heart failure, neurological damage), the [[Pyruvate Dehydrogenase]] complex E3 subunit at Thr135 (enhances catalytic activity; cancer metabolism), and [[PGAM5]] (promotes mitochondrial fission and amplifies the death signal in I/R and neurodegeneration).

### Regulation of MLKL: the terminal effector

Core node: RIPK3 phosphorylation of the MLKL activation loop (human Thr357/Ser358) → conformational change, oligomerization, membrane translocation. Additional layers:

- **Transcriptional:** [[BRD4]] binds the MLKL promoter to promote expression.
- **Protein stability:** [[Hsp90]] binds MLKL, protecting it from proteasomal degradation and facilitating activation/translocation.
- **Other kinases:** during phagocytosis, [[TAM Kinases]] (Tyro3, Axl, Mer) are activated by exposed phosphatidylserine and can phosphorylate MLKL; RIPK1 can also phosphorylate MLKL under specific (particularly murine) conditions.
- **Pharmacology:** the salt-inducible kinase inhibitor HG-9-91-01 suppresses necroptosis by disrupting RIPK3/MLKL interaction; ketamine suppresses necroptosis by reducing ROS-dependent MLKL phosphorylation.

Mechanistically, MLKL membrane disruption is context-dependent: the canonical route is oligomerization, phosphatidylinositol/cardiolipin binding, and pore formation, but non-canonical routes exist (e.g. a necroptosis-like axonal degeneration in glaucoma that is independent of MLKL pore formation; indirect membrane compromise via ion channels such as TRPM7). MLKL-independent mechanisms contribute in some contexts.

**Table 1 (adapted): regulators of RIPK1, RIPK3, and MLKL**

| Mediator | Regulator | Mechanism | Disease context |
|---|---|---|---|
| RIPK1 | DAPK1 | Phosphorylates RIPK1 to inhibit activity | Tumors |
| RIPK1 | ROS | Induce RIPK1 autophosphorylation | Septic cardiomyopathy, viral myocarditis |
| RIPK1 | PTPN6 (SHP1) | Dephosphorylates RIPK1 tyrosines | Tumors, autoimmune/inflammatory disease |
| RIPK1 | PI3K/Akt | Phosphorylates and inhibits RIPK1 kinase activity | Tumors, systemic inflammation, myocardial I/R |
| RIPK1 | TRIM21 | RING-domain ubiquitination of RIPK1 | Viral infection/antiviral immunity, autoimmunity |
| RIPK1 | CYLD | Modulates RIPK1 ubiquitination status | Neuroinflammation/neurodegeneration, hyperinflammatory syndromes |
| RIPK1 | OTULIN | Tyr-56 phosphorylation regulates RIPK1 ubiquitination during necroptosis | Inflammation |
| RIPK3 | Caspase-6 | Promotes RIPK3–ZBP1 inflammatory signaling | Viral infectious disease |
| RIPK3 | ZBP1 | RHIM-dependent recruitment and autophosphorylation | Viral/inflammatory disease, reproductive disorders |
| RIPK3 | TRIF | Direct RHIM binding and activation downstream of TLR3/4 | Infection, inflammatory damage, tumors |
| RIPK3 | RSK3 | Upstream kinase promoting RIPK3 phosphorylation | Ischemic retinal injury |
| RIPK3 | CSNK1G2 | Binds and inhibits RIPK3 kinase activity | Male reproductive aging |
| RIPK3 | CaMKII | RIPK3 phosphorylates/activates CaMKII | Myocardial I/R, heart failure, neurological injury |
| RIPK3 | Pyruvate dehydrogenase complex | Phosphorylates PDC-E3 Thr135, enhancing activity | Cancer |
| RIPK3 | PGAM5 | RIPK3-phosphorylated PGAM5 dephosphorylates Drp1 → fission | I/R, neurodegenerative disease |
| MLKL | BRD4 | Transcriptionally controls MLKL expression | Inflammation-related disease |
| MLKL | HSP90 | Binds MLKL, prevents proteasomal degradation | Inflammatory/infectious disease |
| MLKL | RIPK1 | Direct MLKL phosphorylation under specific conditions (mouse) | Inflammation |
| MLKL | TAM kinases | Phosphorylate MLKL during phagocytosis | Inflammation-related disease |

## Crosstalk with other cellular processes

### Apoptosis

Necroptosis and [[Apoptosis]] share upstream components and switch on context and stress intensity (e.g. *Angiostrongylus cantonensis* drives astrocyte apoptosis and neuronal necroptosis from one stimulus; high *C. perfringens* enterotoxin induces necroptosis while low concentrations induce apoptosis, with calpain inhibition shifting toward apoptosis). Key switch candidates are [[Caspase-8]] activity, [[c-FLIP]] isoform levels, and RIPK1 phosphorylation status: high caspase-8 promotes apoptosis, whereas low/inhibited caspase-8 relieves suppression of the RIPK1/RIPK3 axis and permits necroptosis.

### Autophagy

Necroptosis–[[Autophagy]] crosstalk is bidirectional and phase-dependent. Energy-stress autophagy can rescue cells by restoring ATP; its inhibition may precipitate metabolic crisis and necroptosis. TNF-induced necroptosis initiates early autophagy via RIPK3-dependent [[AMPK]] activation, but later necroptotic signaling suppresses autophagic flux — possibly to prevent clearance of damaged organelles and amplify death.

### Inflammation

Necroptosis is both consequence and driver of [[Inflammation]], with feed-forward loops through [[NF-κB]]. NF-κB induces TNF and other cytokines that sensitize cells to necroptosis; necroptotic DAMP release further activates NF-κB, exacerbating injury in ischemic, neurodegenerative, and inflammatory bowel disease. Environmental toxins (cadmium, lead) promote necroptosis via NF-κB, while selenium attenuates death by inhibiting the MAPK/NF-κB axis. Necroptosis is also protective in host defense (influenza A, SARS-CoV-2), so therapy must spare beneficial death while curbing excessive inflammation.

### Metabolism

Mitochondria are hubs for necroptosis signaling and metabolic crosstalk; the necrosome induces mitochondrial dysfunction via mitophagy, mitochondrial ROS, and permeability transition. Conversely, metabolic state sets necroptosis sensitivity: inhibition of the mitochondrial pyruvate carrier ([[UK5099]]) suppresses necroptosis, and RIPK3 phosphorylates metabolic enzymes like the PDC. Higher-order complexes called [[PANoptosome|PANoptosomes]] can co-activate necroptosis, apoptosis, and pyroptosis (incorporating RIPK1, RIPK3, FADD, caspase-8, [[NLRP3]]). [[ZBP1]] can nucleate a PANoptosome that simultaneously activates RIPK3/MLKL necroptosis, caspase-8 apoptosis, and inflammasome-driven pyroptosis during viral infection or cytokine storm; [[AIM2]]-nucleated PANoptosomes respond to other pathogens. PANoptosis is implicated in bacterial sepsis, inflammatory bowel disease, and neurodegenerative disorders.

## Therapeutic implications and future perspectives

Current studies rely on pharmacological inhibition ([[Necrostatin-1]] for [[RIPK1]]; [[Necrosulfonamide]] for [[MLKL]]) plus markers such as phosphorylated MLKL, RIPK3 oligomerization, and membrane-integrity assays. Indirect biologics (TNF inhibitors: etanercept, infliximab, adalimumab) are FDA-approved for autoimmune/inflammatory disease but block upstream death-receptor signaling broadly. Direct necroptosis inhibitors in preclinical development include selective RIPK1 inhibitors ([[Necrostatin-1]]), RIPK3 inhibitors (GSK'840, GSK'872, Zharp-99), and MLKL inhibitors ([[Necrosulfonamide]], BRD4-targeting bromodomain inhibitors).

Non-pharmacological and endogenous modulators also show promise: electroacupuncture attenuates RIPK3/MLKL-mediated necroptosis after intracerebral hemorrhage; the endogenous peptide apelin reverses hippocampal necroptosis in diabetic rats and preserves cognition.

> [!warning] The therapeutic duality
> The field faces a fundamental duality — **inhibit** necroptosis to curb inflammation in chronic/inflammatory and ischemic disease, versus **induce** it to eliminate apoptosis-resistant cancer cells. Existing inhibitors have moderate selectivity, poor pharmacokinetics, off-target effects, or dose-limiting toxicity, largely restricting them to experimental use. Clinical translation needs better agents plus robust context-dependent biomarkers for patient stratification.

Future directions: more specific/viable inhibitors; context-dependent biomarkers distinguishing necroptotic activity by upstream trigger; differential roles across tissues and disease stages; and combination therapies targeting necroptosis alongside complementary pathways.

## Conclusions

Canonical and atypical necroptosis pathways converge on RIPK3-mediated MLKL activation while responding to distinct stimuli (viral nucleic acids, TLR signaling), expanding its scope beyond TNF-driven inflammation. Integrating transcriptional, post-translational, and contextual regulation — plus crosstalk with apoptosis, autophagy, and metabolism — shows necroptosis as a versatile, tightly controlled modality that can either promote or limit disease. Its ability to eliminate infected cells and apoptosis-resistant tumors complements its pathogenic roles, but its complexity (multifunctional signaling molecules, extensive crosstalk, context-dependent outcomes) remains a barrier to clinical translation. A nuanced, context-aware approach — inhibiting execution in degenerative disease while activating it in cancer — will be essential.

## Funding & declarations

Work supported by the Key Project of International Scientific and Technological Cooperation of Henan Province (241111520400). The authors declared no competing interests and stated that generative AI was not used in creating the manuscript. Author contributions: LN (conceptualization, investigation, visualization, original draft); FL (formal analysis, data curation, investigation, review/editing); YZ (visualization, review/editing, data curation, supervision); JL (review/editing, supervision, project administration, methodology); HW (investigation, supervision, methodology, conceptualization, review/editing, funding).

## Documents

- Source article: Niu L, Liu F, Zhao Y, Li J, Wang H. *Front Immunol* 2026;17:1824460. PMID 42148085; DOI 10.3389/fimmu.2026.1824460.
- Related task output: `task_output_selenium_necroptosis_mapk_nfkb_11_Sep_2026.md` (grounding of the selenium/MAPK/NF-κB sentence in primary studies).

## Connections

- [[Necroptosis]] — the review's subject; canonical and non-canonical pathways and their regulation.
- [[RIPK1]], [[RIPK3]], [[MLKL]] — core machinery whose multilayered regulation is the review's focus.
- [[necrosome]] — the RIPK1–RIPK3–MLKL assembly executing death.
- [[TNFR1]] / [[TNFα]] — canonical initiating axis.
- [[ZBP1]] — Z-nucleic-acid sensor; species-dependent RIPK1 requirement.
- [[TRIF]] / [[TLR3]] / [[TLR4]] — non-canonical TLR-driven route.
- [[Caspase-8]] / [[c-FLIP]] / [[FADD]] — apoptosis–necroptosis switch.
- [[CYLD]], [[OTULIN]], [[TRIM21]], [[DAPK]], [[SHP1]], [[PI3K]], [[Akt]] — ubiquitination/phosphorylation regulators of RIPK1.
- [[RSK3]], [[CSNK1G2]], [[PGAM5]], [[CaMKII]], [[Pyruvate Dehydrogenase]] — RIPK3 regulators/substrates.
- [[BRD4]], [[Hsp90]], [[TAM Kinases]], [[MFN2]] — MLKL regulators and context-specific effectors.
- [[PANoptosis]] / [[PANoptosome]] — co-execution of necroptosis, apoptosis, and pyroptosis.
- [[Necrostatin-1]], [[Necrosulfonamide]] — tool/lead inhibitors.
- [[Apoptosis]], [[Autophagy]], [[Inflammation]], [[NF-κB]] — crosstalk nodes.

## Linking Summary

- New document note in `src/notes/cell-death/` (topic: cell-death; cross-topic: inflammation, innate immunity, metabolism, oncology).
- New entity created: [[PANoptosome]].
- Enriched entity notes: Necroptosis, RIPK1, RIPK3, MLKL, necrosome, ZBP1, TRIF, PANoptosis, Necrostatin-1, Necrosulfonamide, CYLD, OTULIN, TRIM21, RSK3, CSNK1G2, PGAM5, Pyruvate Dehydrogenase, CaMKII, TAM Kinases, Hsp90, BRD4, cIAPs.
- Resolves the pre-existing red link in [[cIAPs]] to this document.
- Suggested new entity notes (Step 3): none outstanding — [[Apelin]], [[GSK840]], [[Zharp-99]], [[HG-9-91-01]], [[TRPM7]] created 2026-09-14.
- Strong connections to strengthen: [[Necroptosis]] ↔ [[RIPK3]], [[Necroptosis]] ↔ [[ZBP1]], [[Necroptosis]] ↔ [[TRIF]], [[MLKL]] ↔ [[Hsp90]], [[RIPK1]] ↔ [[CYLD]]/[[TRIM21]].
