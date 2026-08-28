---
title: "Anticancer Mechanisms: Ivermectin & Fenbendazole — Synergy and Combined Impact"
description: Analysis of the complementary anticancer mechanisms of ivermectin and fenbendazole, focusing on synergy, convergent pathways, and rationale for combination use in drug repositioning.
created: 2026-07-28
updated: 2026-08-22
tags:
  - cancer
  - drug-repositioning
  - ivermectin
  - fenbendazole
  - mechanisms
  - synergy
source: wiki knowledge base (entity notes + ingested review documents)
author: []
---

# Anticancer Mechanisms: Ivermectin & Fenbendazole — Synergy and Combined Impact

Synthesized from the wiki knowledge base: entity notes (`Ivermectin.md`, `Fenbendazole.md`, `Benzimidazole.md`, `GLUT1.md`, `Hexokinase 2.md`) and source review documents (Tang et al. 2020; Nguyen et al. 2024). All evidence is preclinical (cell lines + xenograft models). No clinical trials exist for either compound as an anticancer agent.

> [!TIP]
> **These two repurposed antiparasitics target fundamentally different nodes of cancer biology — ivermectin at kinase/signaling hubs, fenbendazole at structural/metabolic machinery. Their mechanisms are largely non-overlapping, which is why they are increasingly discussed as potential combination agents in the drug repositioning literature.**

---

## Ivermectin — Mechanisms

### PAK1 Degradation (Primary Target)

[[PAK1]] (p21-activated kinase 1) sits at the intersection of multiple oncogenic signaling cascades. Ivermectin does not merely inhibit PAK1 activity — it **promotes proteasomal degradation** of the PAK1 protein via the ubiquitin-proteasome pathway, without affecting PAK1 mRNA levels (Dou et al. 2016, PMID: 27302166). The proteasome inhibitor MG132 reverses this effect.

Downstream consequences of PAK1 loss:

- **MAPK cascade suppressed** — PAK1 normally activates MEK1/2 → ERK1/2 via RAF. Without PAK1, proliferative signaling through RAS-MAPK is dampened (demonstrated in melanoma and nasopharyngeal carcinoma).
- **Akt/mTOR pathway inhibited** — PAK1 activates PI3K/Akt signaling through PDK1. Its degradation removes a key Akt activator, de-repressing autophagy initiation.
- **Wnt/β-catenin disrupted** — PAK1 facilitates β-catenin cytoplasmic accumulation and nuclear translocation. Ivermectin's PAK1 suppression blocks Wnt-driven transcription (AXIN2, LGR5, ASCL2 downstream targets) in colorectal cancer.
- **NF-κB suppressed** — PAK1 facilitates nuclear activation of NF-κB; its loss dampens pro-survival inflammatory signaling.
- **STAT3 axis severed** — The PAK1-STAT3 axis drives cancer stem cell self-renewal. Ivermectin breaks this link, suppressing NANOG, OCT-4, and SOX-2 expression in CSCs.

> [!IMPORTANT]
> **PAK1 is not just one target among many — it is the *hub* through which ivermectin coordinates most of its anticancer effects. The review calls it ivermectin's "primary host kinase target" across breast, ovarian, nasopharyngeal, and melanoma cancers.**

### YAP1 Inhibition

[[YAP1]] (Yes-associated protein 1) is a Hippo pathway effector oncogene. Ivermectin inhibits YAP1 expression/activity in:

- **Gastric cancer** — cell lines with high YAP1 (MKN1, SH-10-TC) are sensitive to ivermectin; low-YAP1 lines (MKN7, MKN28) are resistant (Nambara et al. 2017, PMID: 29296196).
- **Hepatocellular carcinoma** — ivermectin blocks YAP1 activity in spontaneous liver cancer Mob1b⁻/⁻ mice (Nishio et al. 2016).
- **Lung cancer** — inhibits proliferation of H1299 cells via YAP1 suppression.

YAP1 is a *different* target than PAK1 — ivermectin has genuinely distinct mechanism-of-action branches.

### Programmed Cell Death (Three Modes)

#### Apoptosis (mitochondrial/intrinsic pathway)

- Ivermectin reduces mitochondrial membrane potential (ΔΨm)
- Upregulates pro-apoptotic [[Bax]], downregulates anti-apoptotic [[Bcl-2]]
- Promotes cytochrome c release from mitochondria into cytosol
- Activates caspase-9 → caspase-3 cascade → PARP cleavage
- Induces ROS generation, which amplifies the apoptotic signal
- Demonstrated in: HeLa, renal cell carcinoma (5 lines), CML K562, glioblastoma U87/T98G, colorectal, ovarian cancer cells

#### Autophagy (PAK1/Akt/mTOR-dependent)

- Ivermectin increases autophagic flux and expression of LC3, Beclin-1, Atg5
- Autophagosome formation observed directly
- Mechanism: PAK1 degradation → Akt dephosphorylation → mTOR inactivation → de-repression of the Beclin-1 complex → autophagosome nucleation
- In breast cancer (MCF-7, MDA-MB-231): autophagy is the *primary* death mode — inhibiting autophagy (chloroquine, wortmannin, Beclin-1/Atg5 siRNA) reduces ivermectin's anticancer activity
- In melanoma (SK-MEL-28): autophagy is *protective* — inhibiting it *enhances* apoptosis. TFE3 nuclear translocation (dephosphorylation at Ser321) drives autophagy via the ROS pathway.

> [!WARNING]
> **The autophagy paradox: In some cancers autophagy kills, in others it protects. The review notes this cross-talk is context-dependent and not fully resolved.**

#### Pyroptosis (inflammatory cell death)

- In breast cancer cells (MDA-MB-231, 4T1): ivermectin increases LDH release, caspase-1 activation, cell swelling/rupturing
- Proposed pathway: ivermectin → P2×4/P2×7 receptor activation → ROS → NLRP3 inflammasome assembly (ASC + NLRP3 + pro-caspase-1) → activated caspase-1 → GSDMD cleavage → membrane pore formation → IL-1β/IL-18 secretion + pyroptotic death
- Least-established of the three modes — only one study directly demonstrates it

### Mitochondrial Dysfunction

A distinct mechanism operating in renal cell carcinoma and CML:

- Ivermectin preferentially kills cancer cells while sparing normal cells
- Reduces mitochondrial membrane potential, inhibits mitochondrial respiration, collapses ATP production
- The mitochondrial fuel acetyl-L-carnitine (ALCAR) and antioxidant N-acetyl-L-cysteine (NAC) reverse the effect — confirming mitochondrial/ROS specificity
- In renal cell carcinoma: 5 cell lines affected without harming normal kidney cells (Zhu et al. 2017, PMID: 28847725)
- In CML: selectively induces mitochondrial dysfunction in K562 vs normal bone marrow (Wang et al. 2018, PMID: 29428725)

### Other Molecular Targets

- **[[HSP27]]** — ivermectin inhibits HSP27 phosphorylation, enhancing anti-EGFR drug activity (erlotinib, cetuximab) in lung and colorectal cancer (Nappi et al. 2020, JCI)
- **[[KPNB1]]** (importin-β1) — identified via shRNA/CRISPR screens in ovarian cancer; ivermectin blocks cell cycle and induces apoptosis through a KPNB1-dependent mechanism; synergy with paclitaxel almost completely inhibited tumor growth in vivo (Kodama et al. 2017)
- **[[P-gp]]** inhibition — ivermectin is a potent P-glycoprotein inhibitor, reversing MDR by blocking drug efflux. First identified in 1996 (Didier & Loor). Also inhibits MRP1/2/3.
- **SIN3 corepressor** — in TNBC, ivermectin acts as a SID (SIN3-interaction domain) mimic, blocking SID-paired amphipathic helix 2 interaction, restoring tamoxifen sensitivity
- **Chloride channel modulation** — in leukemia, ivermectin increases Cl⁻ influx → plasma membrane hyperpolarization → ROS production → cell death (Sharmeen et al. 2010, PMID: 20644115)

### Anti-Angiogenic & Anti-Metastatic Effects

- In glioblastoma: ivermectin induces apoptosis of human brain microvascular endothelial cells, significantly inhibiting angiogenesis (Liu et al. 2016, PMID: 27771251)
- In melanoma: reduces lung metastasis in animal models
- In lung cancer: reduces metastasis by inhibiting EMT

---

## Fenbendazole — Mechanisms

### Microtubule Destabilization (Primary Structural Mechanism)

Fenbendazole binds the **colchicine site** of β-[[Tubulin]], preventing polymerization into [[Microtubule]]s. This is the same mechanism as the broader [[Benzimidazole]] class (mebendazole, albendazole) but with moderate affinity — described as a "moderate microtubule destabilizing agent" (Dogra et al. 2018, *Scientific Reports*).

Consequences:

- **Mitotic spindle disruption** — chromosomes cannot align/separate properly
- **G2/M cell cycle arrest** — cells stall at the metaphase-anaphase checkpoint
- **Mitotic catastrophe → apoptosis** — prolonged arrest triggers death
- Compared to [[Vincristine]] (a vinca alkaloid), fenbendazole has lower tubulin-binding affinity but also lower systemic toxicity

### Glycolysis Inhibition (Metabolic Starvation)

Fenbendazole's most distinctive anticancer mechanism, separate from its tubulin effects:

#### GLUT1 down-regulation

- Fenbendazole reduces surface expression of [[GLUT1]], the primary glucose transporter overexpressed in cancer cells
- This directly impairs [[Glucose uptake]], starving tumors of their main fuel
- GLUT1 is normally induced by HIF-1α under hypoxia and by Akt/mTOR signaling — fenbendazole disrupts this axis

#### Hexokinase 2 inhibition

- Fenbendazole down-regulates/inhibits [[Hexokinase 2]] (HK2), the first rate-limiting enzyme of glycolysis
- HK2 is uniquely important in cancer: it binds the mitochondrial VDAC channel, drawing on mitochondrial ATP and *simultaneously blocking apoptosis* (by preventing cytochrome c release and apoptosome assembly)
- By suppressing HK2, fenbendazole achieves a dual hit: (1) collapsing glycolytic flux and (2) de-repressing apoptosis at the mitochondrial level
- Synergizes with GLUT1 suppression for compounded metabolic blockade

#### Warburg Effect interference

- Cancer cells preferentially use aerobic glycolysis (the [[Warburg Effect]]) even in the presence of oxygen
- Fenbendazole disrupts this metabolic program at two levels — glucose import (GLUT1) and the first committed step (HK2)
- This starves the cell of both ATP and biosynthetic intermediates (glucose-6-phosphate for the pentose phosphate pathway, etc.)

### p53 Activation

Fenbendazole and related benzimidazoles activate the p53 tumor suppressor by a specific mechanism:

- **Down-regulate [[MDM2]] and [[MdmX]]** — these are E3 ubiquitin ligases that constitutively degrade p53 in many tumors
- With MDM2/MdmX suppressed, p53 protein accumulates
- Stabilized p53 transactivates pro-apoptotic targets (Bax, PUMA, Noxa) and cell-cycle arrest genes (p21)
- This is particularly relevant in tumors with wild-type p53 but MDM2 overexpression (a common resistance mechanism)
- Demonstrated by Mrkvová et al. 2019 (*Molecules*) in MDMX-overexpressing tumor cells

### Oxidative Stress Induction

- Fenbendazole increases intracellular reactive oxygen species (ROS) levels
- Elevated ROS → oxidative damage to lipids, proteins, DNA → activation of stress kinases → apoptosis
- The ROS-dependent death pathway involves the **MEK3/6 → p38 MAPK** axis (Peng et al. 2022, *Chem Biol Interact*) — fenbendazole and its synthetic analogs modulate this pathway in HeLa cells
- This mechanism is shared with ivermectin (both induce ROS-mediated death), but fenbendazole's metabolic disruption may amplify it by collapsing the NADPH/glutathione antioxidant systems that depend on glycolytic flux

### p21-Mediated Cell Cycle Arrest

- In hepatocellular carcinoma (H4IIE cells), fenbendazole induces apoptosis via **p21-mediated cell-cycle arrest** (Park 2022, *Biol Pharm Bull*)
- p21 (CDKN1A) is a cyclin-dependent kinase inhibitor downstream of p53
- This links the p53 activation mechanism to concrete cell-cycle blockade

### Additional Pathway Modulation

- **NF-κB** — fenbendazole modulates NF-κB signaling, though the exact mechanism (direct vs. indirect through ROS/p53) is less defined than in ivermectin
- **MAPK** — the MEK3/6-p38-MAPK axis involvement suggests cross-talk with stress-response signaling

---

## Complementary Mechanisms — Where They Converge and Reinforce

The two drugs hit fundamentally different primary targets, but their downstream effects converge at several critical nodes. This non-overlap is the basis for rational combination.

### Convergent Apoptosis via Mitochondria

Both compounds funnel through the intrinsic (mitochondrial) apoptotic pathway, but they enter from different doors:

- **Ivermectin** directly depolarizes the mitochondrial membrane, collapses ATP production, upregulates Bax/downregulates Bcl-2, and releases cytochrome c — primarily through PAK1 degradation and ROS generation.
- **Fenbendazole** achieves a similar endpoint indirectly: by inhibiting HK2, it detaches the enzyme from the mitochondrial VDAC channel. HK2 binding to VDAC normally *blocks* apoptosome assembly; its removal de-represses cytochrome c release and caspase activation.

> [!IMPORTANT]
> ****Synergy point:** Ivermectin attacks mitochondria from the signaling side (PAK1 → Akt/mTOR → mitochondrial priming), while fenbendazole attacks from the metabolic side (HK2 detachment from VDAC). Combined, they may push cells past the apoptotic threshold that neither reaches alone.**

### Amplified ROS Cascade

Both drugs independently induce ROS — but through distinct mechanisms, and fenbendazole may amplify ivermectin's ROS signal:

- **Ivermectin** generates ROS via mitochondrial depolarization and chloride channel-mediated membrane hyperpolarization.
- **Fenbendazole** generates ROS via oxidative stress induction (MEK3/6 → p38 MAPK axis), *and* by collapsing the glycolytic supply of NADPH — the primary reducing equivalent that sustains glutathione recycling and the cell's antioxidant defense.

> [!IMPORTANT]
> ****Synergy point:** Fenbendazole's metabolic starvation depletes the NADPH/glutathione buffer that cancer cells normally use to neutralize ROS. This lowers the threshold for ivermectin's ROS-generating effects, potentially converting sub-lethal oxidative stress into lethal damage. The combination may achieve a "redox catastrophe" — overwhelming the tumor's antioxidant capacity from two directions simultaneously.**

### Multi-Level Cell Cycle Blockade

The two drugs arrest the cell cycle at different checkpoints through different mechanisms:

- **Fenbendazole** → G2/M arrest via microtubule destabilization (spindle assembly checkpoint)
- **Ivermectin** → G1/S arrest in some contexts (e.g., HeLa cells), S-phase arrest in others (e.g., cholangiocarcinoma)
- **Fenbendazole** → p21-mediated arrest via p53 stabilization (MDM2/MdmX suppression)
- **Ivermectin** → cell cycle effects mediated through PAK1 loss and downstream pathway suppression

> [!IMPORTANT]
> ****Synergy point:** Cells caught at G2/M by fenbendazole's tubulin disruption cannot escape into S-phase, while cells arrested at G1/S by ivermectin cannot reach mitosis. Dual-checkpoint trapping makes it harder for tumors to proliferate through either block alone.**

### Dual Attack on the Warburg Effect

Cancer's metabolic reprogramming — the [[Warburg Effect]] — is targeted by fenbendazole directly and by ivermectin indirectly:

- **Fenbendazole** directly suppresses GLUT1 (glucose import) and HK2 (first glycolytic step), collapsing the glycolytic pipeline.
- **Ivermectin** suppresses the Akt/mTOR signaling axis (via PAK1 degradation), which is a primary transcriptional and post-translational regulator of both GLUT1 expression and HK2 activity. Akt phosphorylates HK2 to promote its mitochondrial binding; mTOR upregulates HIF-1α, which induces GLUT1 and other glycolytic enzymes.

> [!IMPORTANT]
> ****Synergy point:** Fenbendazole attacks the metabolic machinery (the proteins doing the work), while ivermectin attacks the signaling pathways that *upregulate* that machinery in cancer. Combined, they may achieve deeper metabolic disruption than either alone — fenbendazole removes the enzymes, ivermectin removes the signals that would otherwise restore them.**

### Convergent NF-κB Suppression

Both compounds modulate NF-κB, a master regulator of tumor survival, inflammation, and drug resistance:

- **Ivermectin** suppresses NF-κB through PAK1 loss (PAK1 normally facilitates NF-κB nuclear activation).
- **Fenbendazole** modulates NF-κB, likely indirectly through ROS/p53-mediated pathways.

Combined NF-κB suppression from two independent directions may more effectively downregulate anti-apoptotic genes (Bcl-xL, XIAP, cIAP) and inflammatory cytokines that sustain the tumor microenvironment.

### Multidrug Resistance Reversal

- **Ivermectin** is a direct, potent inhibitor of P-glycoprotein (P-gp) and MDR-associated proteins (MRP1/2/3), actively blocking drug efflux pumps.
- **Fenbendazole** (as a benzimidazole) has a mechanism that partially evades classical P-gp efflux — benzimidazoles are not always recognized by the pump.

> [!IMPORTANT]
> ****Synergy point:** Ivermectin's P-gp blockade may increase intracellular retention of fenbendazole (and other co-administered chemotherapeutics), raising effective tumor drug concentrations without increasing systemic dose.**

---

## Theoretical Combination Rationale

### Why This Pairing Makes Mechanistic Sense

| Dimension           | Ivermectin Contribution                           | Fenbendazole Contribution                    | Combined Effect                                                                                     |
| ------------------- | ------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Signaling**       | PAK1/YAP1/Akt/mTOR suppression                    | Minimal direct signaling impact              | Ivermectin removes oncogenic signaling; fenbendazole exploits the resulting metabolic vulnerability |
| **Structure**       | No direct tubulin effect                          | Microtubule destabilization → mitotic arrest | Fenbendazole traps dividing cells; ivermectin prevents escape via survival signaling                |
| **Metabolism**      | Indirect (Akt/mTOR → glycolysis gene regulation)  | Direct (GLUT1 ↓, HK2 ↓, Warburg disruption)  | Fenbendazole starves the cell; ivermectin prevents compensatory metabolic reprogramming             |
| **ROS/Apoptosis**   | Mitochondrial depolarization, Cl⁻ channel ROS     | Metabolic ROS + NADPH depletion              | Fenbendazole disarms antioxidant defenses; ivermectin pushes ROS past lethal threshold              |
| **p53**             | Not a primary mechanism                           | MDM2/MdmX suppression → p53 stabilization    | Fenbendazole restores p53 function in tumors with wild-type p53/MDM2 overexpression                 |
| **Stem cells**      | PAK1-STAT3 axis suppression (NANOG, OCT-4, SOX-2) | Not specifically demonstrated                | Ivermectin targets the recurrence-driving CSC population                                            |
| **Drug resistance** | Potent P-gp/MDR protein inhibitor                 | Partial P-gp evasion (benzimidazole class)   | Ivermectin may enhance fenbendazole intratumoral retention                                          |
| **Immune**          | HMGB1 release → immunogenic cell death            | Less characterized                           | Ivermectin may prime immune recognition of dying tumor cells                                        |

### Why the Combination May Overcome Single-Agent Limitations

- **Tumor heterogeneity:** Tumors contain subpopulations with different vulnerabilities. Kinase-addicted cells may respond to ivermectin; metabolically-addicted cells may respond to fenbendazole. Together, coverage broadens.
- **Resistance escape:** Cells that upregulate alternative survival pathways to escape ivermectin's signaling blockade may still be caught by fenbendazole's structural/metabolic disruption, and vice versa.
- **Dose sparing:** If the mechanisms are truly complementary, lower doses of each agent may achieve the same or greater efficacy — reducing the risk of fenbendazole hepatotoxicity and ivermectin neurotoxicity at high doses.

---

## Sources

- Tang M et al. "Ivermectin, a potential anticancer drug derived from an antiparasitic drug." *Pharmacol Res* 2020;163:105207. PMID: 32971268, PMC7505114.
- Nguyen J et al. "Oral Fenbendazole for Cancer Therapy in Humans and Animals." *Anticancer Res* 2024;44(9):3725.
- Dou Q et al. "Ivermectin Induces Cytostatic Autophagy by Blocking the PAK1/Akt Axis in Breast Cancer." *Cancer Res* 2016;76(15):4457-4469. PMID: 27302166.
- Dogra N et al. "Fenbendazole acts as a moderate microtubule destabilizing agent and causes cancer cell death by modulating multiple cellular pathways." *Sci Rep* 2018;8.
- Nappi L et al. "Ivermectin inhibits HSP27 and potentiates efficacy of oncogene targeting in tumor models." *J Clin Invest* 2020;130(2):699-714. PMID: 31845908.
- Kodama M et al. "In vivo loss-of-function screens identify KPNB1 as a new druggable oncogene in epithelial ovarian cancer." *PNAS* 2017;114(35):E7301-E7310. PMID: 28811376.
- Nambara S et al. "Antitumor effects of the antiparasitic agent ivermectin via inhibition of Yes-associated protein 1 expression in gastric cancer." *Oncotarget* 2017;8(64):107666-107677. PMID: 29296196.
- Zhu M et al. "Antibiotic ivermectin preferentially targets renal cancer through inducing mitochondrial dysfunction and oxidative damage." *Biochem Biophys Res Commun* 2017;492(3):373-378. PMID: 28847725.
- Wang J et al. "Antibiotic ivermectin selectively induces apoptosis in chronic myeloid leukemia through inducing mitochondrial dysfunction and oxidative stress." *Biochem Biophys Res Commun* 2018;497(1):241-247. PMID: 29428725.
- Liu Y et al. "Anthelmintic drug ivermectin inhibits angiogenesis, growth and survival of glioblastoma through inducing mitochondrial dysfunction and oxidative stress." *Biochem Biophys Res Commun* 2016;480(3):415-421. PMID: 27771251.
- Mrkvová Z et al. "Benzimidazoles downregulate Mdm2 and MdmX and activate p53 in MdmX overexpressing tumor cells." *Molecules* 2019;24(21).
- Peng Y et al. "Fenbendazole and its synthetic analog interfere with HeLa cells' proliferation and energy metabolism via inducing oxidative stress and modulating MEK3/6-p38-MAPK pathway." *Chem Biol Interact* 2022;361.
- Park D. "Fenbendazole suppresses growth and induces apoptosis of actively growing H4IIE hepatocellular carcinoma cells via p21-mediated cell-cycle arrest." *Biol Pharm Bull* 2022;45:184-193.

## Wiki Entity Notes Referenced

- `notes/cancer/Ivermectin.md`
- `notes/cancer/Fenbendazole.md`
- `notes/cancer/Benzimidazole.md`
- `notes/cancer/GLUT1.md`
- `notes/cancer/Hexokinase 2.md`
- `notes/cancer/Microtubule.md`
- `notes/cancer/_document_ - Ivermectin, a potential anticancer drug derived from an antiparasitic drug.md`
- `notes/cancer/_document_ - Oral Fenbendazole for Cancer Therapy in Humans and Animals.md`
