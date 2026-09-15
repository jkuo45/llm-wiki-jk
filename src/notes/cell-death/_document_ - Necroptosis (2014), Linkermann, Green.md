---
title: 'Necroptosis (2014), Linkermann & Green'
description: >-
  Linkermann and Green's 2014 NEJM review that canonically defined necroptosis as RIPK3-dependent regulated
  necrosis — the RIPK1–RIPK3–MLKL necrosome, its inducers (death receptors, TLRs, DAI, PKR), host-defense
  rationale, pathophysiological breadth (ischemia-reperfusion, neurodegeneration, skin/intestinal disease,
  pancreatitis, transplantation, sepsis), and the therapeutic landscape (Nec-1, Nec-1s, necrosulfonamide,
  combination with cyclophilin-D/MPT blockade).
published: 2014-01-30
created: 2026-09-14
source: https://pmc.ncbi.nlm.nih.gov/articles/PMC4035222/
author:
  - Andreas Linkermann
  - Douglas R. Green
tags:
  - clippings
---

# Necroptosis — RIPK3-dependent regulated necrosis (Linkermann & Green, NEJM 2014)

> [!important] Canonical definition
> Following the Nomenclature Committee on Cell Death 2012 recommendations, the authors define **necroptosis** as "necrotic cell death dependent on receptor-interacting protein kinase-3 ([[RIPK3]])" — *not* synonymous with all active necrosis. Other pathways of regulated necrosis (e.g. [[Mitochondrial Permeability Transition]], mediated by [[Cyclophilin D]]-dependent pore opening) are mechanistically distinct programs under the "regulated necrosis" umbrella. The therapeutic corollary: necrosis is no longer untouchable — it can be interfered with.

**Necroptosis** is the genetically encoded, lytic alternative to [[Apoptosis]]: a [[Necrosis|necrotic]] morphology produced by a defined molecular pathway. As long ago as the mid-19th century, Virchow taught that necrosis is a recognizable form of cell death and a cause or consequence of disease; apoptosis was defined roughly a century later and long assumed to be the only "programmed" death. This 2014 review established the modern reading — that [[RIPK3]]-dependent necroptosis is programmed yet necrotic, evolutionarily conserved as anti-infective defense, and central to a wide spectrum of clinical disease from ischemia-reperfusion injury to inflammatory bowel disease and pancreatitis.

![Figure 1 — necroptosis as a form of regulated necrosis](https://cdn.ncbi.nlm.nih.gov/pmc/blobs/003d/4035222/0214efa04d85/nihms573069f1.jpg)

## How is necroptosis induced, and why?

### The necrosome and its upstream gating

[[Apoptosis]] engages [[Caspase-8]]-activating pathways; necroptosis was first recognized as a **caspase-independent** death triggered by [[TNFα]] only when a pan-[[Caspases|caspase]] inhibitor such as [[Z-VAD-FMK|zVAD]] was present — it requires that the function of [[Caspase-8]] be inhibited or disrupted. The two death programs share upstream elements, and the sensitivity for either pathway is tuned (sometimes oppositely) by an overlapping regulator cluster: [[c-FLIP]], the deubiquitinases [[A20]] and [[CYLD|cylindromatosis]], and the cellular inhibitors of apoptosis [[cIAPs|cIAP1 and cIAP2]] ([[Inhibitor of Apoptosis Proteins]]). Additional inducers were later added — other death receptors, [[Toll-like Receptor|Toll-like receptors]], and intracellular triggers such as [[DAI]] and [[Protein Kinase R]].

[[TNFR1]] ligation by [[TNFα]] normally signals survival: polyubiquitinylation of [[RIPK1]] and of [[NEMO]] licenses the [[NF-κB]] pathway. Deubiquitinylation of the K63 and linear ubiquitin chains on [[RIPK1]] strips it of its default pro-survival function and licenses death. The receptor then recruits [[TRADD]] and [[FADD]], which bind pro-[[Caspase-8]]; [[c-FLIP]] (structurally related to but catalytically inactive as a homodimer partner) pairs with [[Caspase-8]] to block apoptosis. When [[Caspase-8]] or [[c-FLIP]] is lost, or its activation interrupted, [[RIPK1]] complexes with [[RIPK3]] to assemble the **[[necrosome]]** — an intracellular **amyloid-like structure** that transduces the necroptotic signal. Downstream sits **[[MLKL]]**, a pseudokinase whose effector function was not yet defined at the time of the review.

![Figure 2 — inducers of the necrosome](https://cdn.ncbi.nlm.nih.gov/pmc/blobs/003d/4035222/cb625fe5f207/nihms573069f2.jpg)

> [!note] The necrosome and the four RHIM proteins
> [[FADD]] and [[TRADD]] recruit [[RIPK1]], which undergoes an incompletely understood series of ubiquitylation, deubiquitylation, and phosphorylation events before exposing its [[RHIM|rip homotypic interaction motif]] to recruit [[RIPK3]]. [[RIPK1]], [[RIPK3]] and [[MLKL]] are all phosphorylated during necrosome assembly. Only four RHIM-domain proteins exist in the human genome: **RIPK1, RIPK3, [[TRIF]], and [[DAI]]**.
> - **TRIF** — intracellular transducer activating the necrosome downstream of Toll-like receptors triggered by microbial molecules ([[TLR3]]/[[TLR4]]).
> - **DAI** — integrates signals from cytoplasmic viral RNA sensors into the necrosome.
> - **PKR route** — viral infection triggers [[Type I Interferon|interferon]] production → [[JAK-STAT Signaling|JAK/STAT]]-dependent *de novo* synthesis of [[Protein Kinase R]] → PKR phosphorylates [[FADD]], which interacts with [[RIPK1]] to induce necrosome formation.

### Why preserve an immunogenic cell death?

Unlike [[Apoptosis]], which sequesters its immunogenic intracellular proteins in the corpse, necroptosis is a strong trigger of both innate and adaptive immunity via [[Damage-Associated Molecular Patterns|DAMP]] release. The likely answer is **microbial defense**:

- Embryonic lethality is the cleanest genetic proof of the program: deletion of [[FADD]], [[c-FLIP]], or [[Caspase-8]] in mice causes death at ~e10.5, **fully rescued** when bred onto a [[RIPK3]]-deficient background. Tissue-specific loss of FADD/caspase-8 causes disease that is likewise prevented by RIPK3 ablation — i.e., a critical function of the FADD–caspase-8–[[c-FLIP]] complex is preventing RIPK3-mediated necrotic death.
- Vaccinia virus (which expresses a viral caspase inhibitor) is lethal in **RIPK3-deficient but not wild-type** mice; several viruses and intracellular bacteria express proteins that interfere with caspase-8 and thereby sensitize cells to necroptosis, and viral inhibitors of necroptosis (targeting RIPK3/DAI) have been identified.
- Both apoptosis and necroptosis are induced by [[Type I Interferon|Type I and II interferons]], promoting death and removal of virally-infected cells.
- Additional proposed regulators awaiting confirmation in 2014: the deacetylase [[SIRT2]], [[Acid Sphingomyelinase]], and the mitochondrial phosphatase [[PGAM5]].

## Contribution of necroptosis to pathophysiology

### Nervous system

The first disease model investigated was **ischemic brain injury**, and [[Necrostatin-1]]-inhibitable death appears across clinically related models: [[Stroke|ischemic stroke]], controlled cortical impact, and neonatal hypoxia-ischemia (where Nec-1 reduced oxidative damage **and** subsequent immune-cell infiltration). Caspase-inhibitor-treated [[Microglia|microglia]] undergo necroptosis — interpreted as a protective strategy for neurons, though in-vivo mechanisms were lacking. Necrotic photoreceptor death marks retinal detachment and retinal ischemic death (apoptosis and necroptosis triggered simultaneously), and cones — but not rods — undergo necroptosis in a genetic model of retinitis pigmentosa. Apoptosis and necroptosis are therefore **not mutually exclusive programs** and can co-occur in the same organ.

### Cardiac and renal ischemia–reperfusion injury

[[Necrostatin-1]] protected in brain-ischemia models, and prevention of cardiac remodeling after [[Myocardial infarction]] plus myocardial and renal [[Ischemia-reperfusion Injury]] was marked but not excessive. Notably, **Nec-1 given 30 minutes after reperfusion failed to protect** in renal ischemia-reperfusion injury — pointing to off-target Nec-1 effects, rapid necrosome assembly, or an additional [[RIPK1]] role in peritubular capillary [[Endothelial Cells|endothelial cells]]. Two sobering 2014 caveats:

> [!warning] Tissue-truth of the 2014 data
> Necroptosis had **not** been demonstrated in primary kidney cells, neurons, retinal cells, or cardiomyocytes. [[RIPK3]]-deficient mice are protected from ischemia-reperfusion injury and Nec-1 adds nothing on top; glomerular endothelial cells (unlike tubular cells, mesangial cells, or podocytes) express high [[RIPK3]] — correlating with necroptosis propensity. Definitive assignment awaited [[MLKL]]-deficient mice and tissue-specific [[RIPK3]]/[[MLKL]] deletions.

### Skin and intestinal epithelium

- **Skin** — conditional deletion of [[FADD]] or [[Caspase-8]] in keratinocytes produces a [[RIPK3]]-dependent chronic inflammatory dermatitis, partly reversed on a [[TNFR1]]-deficient background; [[SHARPIN]] deficiency (a [[RIPK1]]-regulator and component of the linear ubiquitin chain assembly complex) causes chronic proliferative dermatitis, also reversed by TNFR1 deficiency.
- **Intestine** — deleting [[Caspase-8]] or [[FADD]] from intestinal epithelium causes spontaneous necroptosis with pathology morphologically similar to [[Inflammatory Bowel Disease]], especially [[Crohn's Disease|Crohn's disease]]; `RIPK3` deletion completely prevents it. Ablation of the [[RIPK1]]-deubiquitinase [[A20]] sensitizes to lethal colitis via TUNEL-positive TNF-mediated intestinal epithelial cell death (interpreted as apoptosis; necroptosis involvement possible). Mechanistically, high immunogenicity of necrotic cells plus loss of barrier function are implicated.

### Pancreatitis

The cerulein model of [[Pancreatitis|necrotizing pancreatitis]] was the first demonstration of necroptosis in the gastrointestinal tract (see [[Cerulein-Induced Pancreatitis]]). [[RIPK3]]-deficient mice show marked protection, and [[MLKL]]-deficient mice are protected too — yet **Nec-1 administration worsened** histological damage and raised serum lipase/amylase, likely due to the short half-life of Nec-1 (second-generation RIP1-kinase inhibitors or [[MLKL]] inhibitors should clarify). The rapid assembly of the necrosome defines a **narrow therapeutic window**.

### Solid-organ transplantation

[[Damage-Associated Molecular Patterns|DAMPs]] released from necroptotic cells are heavy triggers of the immune system and plausibly drive rejection. Inhibition of necroptosis would (i) minimize loss of functional parenchymal cells and (ii) reduce DAMP-mediated pro-inflammatory rejection signaling. RIPK3-deficient kidney allografts show better function and longer rejection-free survival; silencing of [[Caspase-8]] by siRNA upregulates necroptosis and worsens graft survival. The authors propose saturating donor organs with necroptosis-inhibiting drugs via machine perfusion before implantation — while cautioning that blockade of necroptosis could impair defense against cytomegalovirus in immunosuppressed transplant recipients.

### Sepsis and TNF shock

Intravenous [[TNFα]] causes acute [[TNFR1]]-dependent apoptotic detachment of enterocytes and kills mice within 48 h ("hyperacute TNF shock"); adding [[Z-VAD-FMK|zVAD-fmk]] *accelerates* death to 24 h, and [[RIPK3]]-deficiency partially protects. In the more physiologically relevant cecal-ligation-and-puncture (CLP) [[Sepsis|sepsis]] model, one study found [[Necrostatin-1]] protective, others found Nec-1 accelerating, and [[RIPK3]]-/[[MLKL]]-deficient mice show no benefit — the role of necroptosis in sepsis remains **open**.

> [!note] RIPK3 in inflammation ≠ proof of necroptosis
> [[RIPK3]] activation directly participates in inflammation through the DNA sensor [[Retinoic-acid-inducible protein I-like receptor|RIG-I]] and the [[NLRP3]] [[Inflammasome]], and in at least one case the pro-inflammatory effect depended on [[MLKL]]. It is not yet possible to formally separate these effects from necroptotic DAMP release. The authors' admitted bias: RIPK1-inhibition/RIPK3-ablation benefits are most likely necroptosis effects — but for clinicians the distinction may be irrelevant, since interference with RIPK3 will likely help either way.

## Therapeutic strategies for the prevention of necroptotic diseases

Interference is possible at the levels of the receptor, [[RIPK1]], [[RIPK3]], [[MLKL]], necrosome assembly, and the undefined downstream machinery leading to swelling and rupture (Fig. 2):

| Level | Agents / status in 2014 |
|---|---|
| Receptor | Death-receptor antagonists, other receptor/signal-based strategies; in vitro TNFR1 prominence **not** confirmed in vivo in renal IRI ([[TNFR1]]-deficient or TNFR1/2-double-deficient mice not protected) |
| [[RIPK1]] | [[Necrostatin-1]] (Nec-1) — first in class; **Nec-1s**, a stable, more potent second-generation inhibitor with potentially fewer side effects |
| [[RIPK3]] | RIP3-kinase inhibitors (emerging; targets beyond MLKL phosphorylation unknown) |
| [[MLKL]] | [[Necrosulfonamide]] (NSA) — first direct human MLKL inhibitor; proves MLKL druggable in principle |
| Downstream / undefined | Plasma-membrane channel blockers; identification of the necroptosis-mediating channels as promising targets |

> [!warning] Nec-1 caveats
> [[Necrostatin-1]] was later found to be identical to a previously reported **indoleamine 2,3-dioxygenase (IDO) inhibitor** (see [[IDO1]]). Its structural interaction with the RIP1 kinase domain has been solved, and RIPK1-deficient mice die perinatally — so RIPK1 may act as an inhibitor of necroptosis unless its kinase activity is engaged, with Nec-1 stabilizing the inhibitory state. Nec-1 has non-cell-death effects (e.g. influencing capillary diameters) and **accelerates death in some models where RIPK3-ablation is beneficial**; Nec-1s does not accelerate in TNF shock.

## Is all necrosis regulated?

No — but the regulated portion is larger than necroptosis. [[Mitochondrial Permeability Transition]] (MPT) is an independent regulated-necrosis program: [[Cyclophilin D]]-dependent opening of the permeability transition pore, and the intracellular target of [[Cyclosporine A]] (CsA). Cyclophilin D-deficient mice are partially protected from organ ischemia-reperfusion injury, and CsA prevented ischemic myocardial damage in humans. MPT and necroptosis are cleanly separate programs — shown by ischemia-reperfusion experiments in cyclophilin D–[[RIPK3]] **double-deficient** mice — and **combination therapy** ([[Necrostatin-1]] + [[Sanglifehrin A]]) gave significantly stronger protection than either monotherapy.

![Figure 3 — two independent regulated-necrosis pathways in ischemia-reperfusion injury](https://cdn.ncbi.nlm.nih.gov/pmc/blobs/003d/4035222/21ca3f606506/nihms573069f3.jpg)

> [!tip] The clinical irony of cyclosporine
> CsA revolutionized transplantation through immunosuppression, but isolated-mitochondria data show it prevents MPT, and its post-reperfusion immunosuppressive potency is weaker than tacrolimus, [[Rapamycin]], or mycophenolate-mofetil — yet only tacrolimus matched CsA's graft-protection in clinical trials. The authors speculate clinicians have already been exploiting CsA's MPT-blocking potential (less regulated necrosis, less inflammation, better graft survival).

**Regulated necrosis** is an umbrella term covering necroptosis, [[Mitochondrial Permeability Transition]], [[Ferroptosis]], [[Pyroptosis]], [[PARP1|PARP-1]]-mediated regulated necrosis, NADPH-oxidase-mediated regulated necrosis, [[Lysosomal Membrane Permeabilization]], and others — though how distinct and non-overlapping these programs are remains unclear. Reliable biomarkers for each pathway, plus combination therapies, hold the promise of controlling regulated necrosis in the clinic (see [[Regulated Cell Death]]).

## Supplementary Material

- NIHMS573069-supplement-tableS1 (69.4 KB DOCX): [tableS1](https://pmc.ncbi.nlm.nih.gov/articles/instance/4035222/bin/NIHMS573069-supplement-tableS1.docx)

## Glossary (from the paper)

- **CIP** — cerulein-induced pancreatitis.
- **CsA** — cyclosporine A; best known for immunosuppression; also a potent inhibitor of MPT.
- **DAI** — DNA-dependent activator of interferon regulatory factors.
- **DAMPs** — cell damage-associated molecular patterns released from necrotic cells — not restricted to necroptosis.
- **FLIP** — FLICE-like inhibitory protein.
- **IFN** — interferon.
- **JAK** — Janus kinase.
- **MLKL** — mixed lineage kinase domain like.
- **MPT** — mitochondrial permeability transition; a common increase in permeability of both mitochondrial membranes → swelling, ROS production, NAD+-depletion, and subsequent necrotic cell death.
- **Nec-1** — necrostatin-1 (first-in-class compound).
- **Nec-1s** — Nec-1 stable (second-generation RIP1-kinase inhibitor).
- **Necroptosis** — RIPK3-dependent regulated necrosis.
- **Necrosome** — supramolecular complex of RIPK3 and other cell-death-mediating molecules (e.g. RIPK1), dependent on the necroptotic trigger.
- **NEMO** — NF-κB essential modulator.
- **NF-κB** — nuclear factor 'kappa-light-chain-enhancer' of activated B-cells.
- **NSA** — necrosulfonamide.
- **PKR** — protein kinase R.
- **RHIM** — RIP homotypic interacting motif.
- **RIPK1** — receptor interacting protein kinase 1.
- **RIPK3** — receptor interacting protein kinase 3; the key molecule in necroptotic cell death.
- **ROS** — reactive oxygen species.
- **SfA** — sanglifehrin A.
- **SIRS** — systemic inflammatory response syndrome.
- **STAT** — signal transducer and activator of transcription.
- **TNF** — tumor necrosis factor.
- **TNFR** — TNF-receptor.
- **TLR** — Toll-like receptor.
- **TRIF** — TIR-domain-containing adapter-inducing interferon-β.

## References

1. Cho YS, Challa S, Moquin D, et al. Phosphorylation-driven assembly of the RIP1-RIP3 complex regulates programmed necrosis and virus-induced inflammation. Cell. 2009;137(6):1112–1123. doi: [10.1016/j.cell.2009.05.037](https://doi.org/10.1016/j.cell.2009.05.037). [PubMed](https://pubmed.ncbi.nlm.nih.gov/19524513/).
2. He S, Wang L, Miao L, et al. Receptor interacting protein kinase-3 determines cellular necrotic response to TNF-alpha. Cell. 2009;137(6):1100–1111. doi: [10.1016/j.cell.2009.05.021](https://doi.org/10.1016/j.cell.2009.05.021). [PubMed](https://pubmed.ncbi.nlm.nih.gov/19524512/).
3. Zhang DW, Shao J, Lin J, et al. RIP3, an energy metabolism regulator that switches TNF-induced cell death from apoptosis to necrosis. Science. 2009;325(5938):332–336. doi: [10.1126/science.1172308](https://doi.org/10.1126/science.1172308). [PubMed](https://pubmed.ncbi.nlm.nih.gov/19498109/).
4. Galluzzi L, Vitale I, Abrams JM, et al. Molecular definitions of cell death subroutines: recommendations of the Nomenclature Committee on Cell Death 2012. Cell Death Differ. 2011;19(1):107–20. doi: [10.1038/cdd.2011.96](https://doi.org/10.1038/cdd.2011.96). [PubMed](https://pubmed.ncbi.nlm.nih.gov/21760595/).
5. Cho Y, McQuade T, Zhang H, Zhang J, Chan FK. RIP1-dependent and independent effects of necrostatin-1 in necrosis and T cell activation. PLoS One. 2011;6(8):e23209. doi: [10.1371/journal.pone.0023209](https://doi.org/10.1371/journal.pone.0023209). [PubMed](https://pubmed.ncbi.nlm.nih.gov/21853090/).
6. Kaiser WJ, Upton JW, Mocarski ES. Viral modulation of programmed necrosis. Curr Opin Virol. 2013;3(3):296–306. doi: [10.1016/j.coviro.2013.05.019](https://doi.org/10.1016/j.coviro.2013.05.019). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23773332/).
7. Degterev A, Hitomi J, Germscheid M, et al. Identification of RIP1 kinase as a specific cellular target of necrostatins. Nat Chem Biol. 2008;4(5):313–321. doi: [10.1038/nchembio.83](https://doi.org/10.1038/nchembio.83). [PubMed](https://pubmed.ncbi.nlm.nih.gov/18408713/).
8. Smith CC, Davidson SM, Lim SY, Simpkin JC, Hothersall JS, Yellon DM. Necrostatin: a potentially novel cardioprotective agent? Cardiovasc Drugs Ther. 2007;21(4):227–233. doi: [10.1007/s10557-007-6035-1](https://doi.org/10.1007/s10557-007-6035-1). [PubMed](https://pubmed.ncbi.nlm.nih.gov/17665295/).
9. Lin J, Li H, Yang M, et al. A role of RIP3-mediated macrophage necrosis in atherosclerosis development. Cell Rep. 2013;3(1):200–210. doi: [10.1016/j.celrep.2012.12.012](https://doi.org/10.1016/j.celrep.2012.12.012). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23333278/).
10. Linkermann A, Brasen JH, Himmerkus N, et al. Rip1 (Receptor-interacting protein kinase 1) mediates necroptosis and contributes to renal ischemia/reperfusion injury. Kidney Int. 2012;81(8):751–761. doi: [10.1038/ki.2011.450](https://doi.org/10.1038/ki.2011.450). [PubMed](https://pubmed.ncbi.nlm.nih.gov/22237751/).
11. Oerlemans MI, Liu J, Arslan F, et al. Inhibition of RIP1-dependent necrosis prevents adverse cardiac remodeling after myocardial ischemia-reperfusion in vivo. Basic Res Cardiol. 2012;107(4):270. doi: [10.1007/s00395-012-0270-8](https://doi.org/10.1007/s00395-012-0270-8). [PubMed](https://pubmed.ncbi.nlm.nih.gov/22553001/).
12. Wu J, Huang Z, Ren J, et al. Mlkl knockout mice demonstrate the indispensable role of Mlkl in necroptosis. Cell Res. 2013;23(8):994–1006. doi: [10.1038/cr.2013.91](https://doi.org/10.1038/cr.2013.91). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23835476/).
13. Gunther C, Martini E, Wittkopf N, et al. Caspase-8 regulates TNF-alpha-induced epithelial necroptosis and terminal ileitis. Nature. 2011;477(7364):335–339. doi: [10.1038/nature10400](https://doi.org/10.1038/nature10400). [PubMed](https://pubmed.ncbi.nlm.nih.gov/21921917/).
14. Welz PS, Wullaert A, Vlantis K, et al. FADD prevents RIP3-mediated epithelial cell necrosis and chronic intestinal inflammation. Nature. 2011;477(7364):330–334. doi: [10.1038/nature10273](https://doi.org/10.1038/nature10273). [PubMed](https://pubmed.ncbi.nlm.nih.gov/21804564/).
15. Challa S, Chan FK. Going up in flames: necrotic cell injury and inflammatory diseases. Cell Mol Life Sci. 2010;67(19):3241–3253. doi: [10.1007/s00018-010-0413-8](https://doi.org/10.1007/s00018-010-0413-8). [PubMed](https://pubmed.ncbi.nlm.nih.gov/20532807/).
16. Oberst A, Green DR. It cuts both ways: reconciling the dual roles of caspase 8 in cell death and survival. Nat Rev Mol Cell Biol. 2011;12(11):757–763. doi: [10.1038/nrm3214](https://doi.org/10.1038/nrm3214). [PubMed](https://pubmed.ncbi.nlm.nih.gov/22016059/).
17. Weinlich R, Dillon CP, Green DR. Ripped to death. Trends Cell Biol. 2011;21(11):630–637. doi: [10.1016/j.tcb.2011.09.002](https://doi.org/10.1016/j.tcb.2011.09.002). [PubMed](https://pubmed.ncbi.nlm.nih.gov/21978761/).
18. Kim SJ, Li J. Caspase blockade induces RIP3-mediated programmed necrosis in Toll-like receptor-activated microglia. Cell Death Dis. 2013;4:e716. doi: [10.1038/cddis.2013.238](https://doi.org/10.1038/cddis.2013.238). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23846218/).
19. Kaiser WJ, Upton JW, Long AB, et al. RIP3 mediates the embryonic lethality of caspase-8-deficient mice. Nature. 2011;471(7338):368–372. doi: [10.1038/nature09857](https://doi.org/10.1038/nature09857). [PubMed](https://pubmed.ncbi.nlm.nih.gov/21368762/).
20. Welz PS, Pasparakis M. A way to DAI. Cell Host Microbe. 2012;11(3):223–225. doi: [10.1016/j.chom.2012.02.003](https://doi.org/10.1016/j.chom.2012.02.003). [PubMed](https://pubmed.ncbi.nlm.nih.gov/22423962/).
21. Upton JW, Kaiser WJ, Mocarski ES. DAI/ZBP1/DLM-1 complexes with RIP3 to mediate virus-induced programmed necrosis that is targeted by murine cytomegalovirus vIRA. Cell Host Microbe. 2012;11(3):290–297. doi: [10.1016/j.chom.2012.01.016](https://doi.org/10.1016/j.chom.2012.01.016). [PubMed](https://pubmed.ncbi.nlm.nih.gov/22423968/).
22. Vercammen D, Beyaert R, Denecker G, et al. Inhibition of caspases increases the sensitivity of L929 cells to necrosis mediated by tumor necrosis factor. J Exp Med. 1998;187(9):1477–1485. doi: [10.1084/jem.187.9.1477](https://doi.org/10.1084/jem.187.9.1477). [PubMed](https://pubmed.ncbi.nlm.nih.gov/9565639/).
23. Silke J, Strasser A. The FLIP Side of Life. Sci Signal. 2013;6(258):e2. doi: [10.1126/scisignal.2003845](https://doi.org/10.1126/scisignal.2003845). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23322903/).
24. Vanlangenakker N, Vanden Berghe T, Bogaert P, et al. cIAP1 and TAK1 protect cells from TNF-induced necrosis by preventing RIP1/RIP3-dependent reactive oxygen species production. Cell Death Differ. 2011;18(4):656–665. doi: [10.1038/cdd.2010.138](https://doi.org/10.1038/cdd.2010.138). [PubMed](https://pubmed.ncbi.nlm.nih.gov/21052097/).
25. Vanlangenakker N, Bertrand MJ, Bogaert P, Vandenabeele P, Vanden Berghe T. TNF-induced necroptosis in L929 cells is tightly regulated by multiple TNFR1 complex I and II members. Cell Death Dis. 2011;2:e230. doi: [10.1038/cddis.2011.111](https://doi.org/10.1038/cddis.2011.111). [PubMed](https://pubmed.ncbi.nlm.nih.gov/22089168/).
26. Holler N, Zaru R, Micheau O, et al. Fas triggers an alternative, caspase-8-independent cell death pathway using the kinase RIP as effector molecule. Nat Immunol. 2000;1(6):489–495. doi: [10.1038/82732](https://doi.org/10.1038/82732). [PubMed](https://pubmed.ncbi.nlm.nih.gov/11101870/).
27. Kim SO, Ono K, Han J. Apoptosis by pan-caspase inhibitors in lipopolysaccharide-activated macrophages. Am J Physiol Lung Cell Mol Physiol. 2001;281(5):L1095–L1105. doi: [10.1152/ajplung.2001.281.5.L1095](https://doi.org/10.1152/ajplung.2001.281.5.L1095). [PubMed](https://pubmed.ncbi.nlm.nih.gov/11597900/).
28. Thapa RJ, Nogusa S, Chen P, et al. Interferon-induced RIP1/RIP3-mediated necrosis requires PKR and is licensed by FADD and caspases. Proc Natl Acad Sci U S A. 2013. doi: [10.1073/pnas.1301218110](https://doi.org/10.1073/pnas.1301218110). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23898178/).
29. Gerlach B, Cordier SM, Schmukle AC, et al. Linear ubiquitination prevents inflammation and regulates immune signalling. Nature. 2011;471(7340):591–596. doi: [10.1038/nature09816](https://doi.org/10.1038/nature09816). [PubMed](https://pubmed.ncbi.nlm.nih.gov/21455173/).
30. Mevissen TE, Hospenthal MK, Geurink PP, et al. OTU Deubiquitinases Reveal Mechanisms of Linkage Specificity and Enable Ubiquitin Chain Restriction Analysis. Cell. 2013;154(1):169–184. doi: [10.1016/j.cell.2013.05.046](https://doi.org/10.1016/j.cell.2013.05.046). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23827681/).
31. O'Donnell MA, Perez-Jimenez E, Oberst A, et al. Caspase 8 inhibits programmed necrosis by processing CYLD. Nat Cell Biol. 2011;13(12):1437–1442. doi: [10.1038/ncb2362](https://doi.org/10.1038/ncb2362). [PubMed](https://pubmed.ncbi.nlm.nih.gov/22037414/).
32. Wilson NS, Dixit V, Ashkenazi A. Death receptor signal transducers: nodes of coordination in immune signaling networks. Nat Immunol. 2009;10(4):348–355. doi: [10.1038/ni.1714](https://doi.org/10.1038/ni.1714). [PubMed](https://pubmed.ncbi.nlm.nih.gov/19295631/).
33. Oberst A, Dillon CP, Weinlich R, et al. Catalytic activity of the caspase-8-FLIP(L) complex inhibits RIPK3-dependent necrosis. Nature. 2011;471(7338):363–367. doi: [10.1038/nature09852](https://doi.org/10.1038/nature09852). [PubMed](https://pubmed.ncbi.nlm.nih.gov/21368763/).
34. Sun L, Wang H, Wang Z, et al. Mixed lineage kinase domain-like protein mediates necrosis signaling downstream of RIP3 kinase. Cell. 2012;148(1–2):213–227. doi: [10.1016/j.cell.2011.11.031](https://doi.org/10.1016/j.cell.2011.11.031). [PubMed](https://pubmed.ncbi.nlm.nih.gov/22265413/).
35. Zhao J, Jitkaew S, Cai Z, et al. Mixed lineage kinase domain-like is a key receptor interacting protein 3 downstream component of TNF-induced necrosis. Proc Natl Acad Sci U S A. 2012;109(14):5322–5327. doi: [10.1073/pnas.1200012109](https://doi.org/10.1073/pnas.1200012109). [PubMed](https://pubmed.ncbi.nlm.nih.gov/22421439/).
36. Li J, McQuade T, Siemer AB, et al. The RIP1/RIP3 necrosome forms a functional amyloid signaling complex required for programmed necrosis. Cell. 2012;150(2):339–350. doi: [10.1016/j.cell.2012.06.019](https://doi.org/10.1016/j.cell.2012.06.019). [PubMed](https://pubmed.ncbi.nlm.nih.gov/22817896/).
37. Kang TB, Yang SH, Toth B, Kovalenko A, Wallach D. Caspase-8 Blocks Kinase RIPK3-Mediated Activation of the NLRP3 Inflammasome. Immunity. 2012;38(1):27–40. doi: [10.1016/j.immuni.2012.09.015](https://doi.org/10.1016/j.immuni.2012.09.015). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23260196/).
38. Wang Z, Jiang H, Chen S, Du F, Wang X. The mitochondrial phosphatase PGAM5 functions at the convergence point of multiple necrotic death pathways. Cell. 2012;148(1–2):228–243. doi: [10.1016/j.cell.2011.11.030](https://doi.org/10.1016/j.cell.2011.11.030). [PubMed](https://pubmed.ncbi.nlm.nih.gov/22265414/).
39. Yeh WC, Pompa JL, McCurrach ME, et al. FADD: essential for embryo development and signaling from some, but not all, inducers of apoptosis. Science. 1998;279(5358):1954–1958. doi: [10.1126/science.279.5358.1954](https://doi.org/10.1126/science.279.5358.1954). [PubMed](https://pubmed.ncbi.nlm.nih.gov/9506948/).
40. Yeh WC, Itie A, Elia AJ, et al. Requirement for Casper (c-FLIP) in regulation of death receptor-induced apoptosis and embryonic development. Immunity. 2000;12(6):633–642. doi: [10.1016/s1074-7613(00)80214-9](https://doi.org/10.1016/s1074-7613(00)80214-9). [PubMed](https://pubmed.ncbi.nlm.nih.gov/10894163/).
41. Varfolomeev EE, Schuchmann M, Luria V, et al. Targeted disruption of the mouse Caspase 8 gene ablates cell death induction by the TNF receptors, Fas/Apo1, and DR3 and is lethal prenatally. Immunity. 1998;9(2):267–276. doi: [10.1016/s1074-7613(00)80609-3](https://doi.org/10.1016/s1074-7613(00)80609-3). [PubMed](https://pubmed.ncbi.nlm.nih.gov/9729047/).
42. Dillon CP, Oberst A, Weinlich R, et al. Survival function of the FADD-CASPASE-8-cFLIP(L) complex. Cell Rep. 2012;1(5):401–407. doi: [10.1016/j.celrep.2012.03.010](https://doi.org/10.1016/j.celrep.2012.03.010). [PubMed](https://pubmed.ncbi.nlm.nih.gov/22675671/).
43. Kaczmarek A, Vandenabeele P, Krysko DV. Necroptosis: the release of damage-associated molecular patterns and its physiological relevance. Immunity. 2013;38(2):209–223. doi: [10.1016/j.immuni.2013.02.003](https://doi.org/10.1016/j.immuni.2013.02.003). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23438821/).
44. Moquin D, Chan FK. The molecular regulation of programmed necrotic cell injury. Trends Biochem Sci. 2010;35(8):434–41. doi: [10.1016/j.tibs.2010.03.001](https://doi.org/10.1016/j.tibs.2010.03.001). [PubMed](https://pubmed.ncbi.nlm.nih.gov/20346680/).
45. Li S, Zhang L, Yao Q, et al. Pathogen blocks host death receptor signalling by arginine GlcNAcylation of death domains. Nature. 2013  Epub ahead of print. doi: [10.1038/nature12436](https://doi.org/10.1038/nature12436). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23955153/).
46. Narayan N, Lee IH, Borenstein R, et al. The NAD-dependent deacetylase SIRT2 is required for programmed necrosis. Nature. 2012;492(7428):199–204. doi: [10.1038/nature11700](https://doi.org/10.1038/nature11700). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23201684/).
47. Roca FJ, Ramakrishnan L. TNF dually mediates resistance and susceptibility to mycobacteria via mitochondrial reactive oxygen species. Cell. 2013;153(3):521–534. doi: [10.1016/j.cell.2013.03.022](https://doi.org/10.1016/j.cell.2013.03.022). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23582643/).
48. Vandenabeele P, Grootjans S, Callewaert N, Takahashi N. Necrostatin-1 blocks both RIPK1 and IDO: consequences for the study of cell death in experimental disease models. Cell Death Differ. 2013;20(2):185–187. doi: [10.1038/cdd.2012.151](https://doi.org/10.1038/cdd.2012.151). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23197293/).
49. Degterev A, Huang Z, Boyce M, et al. Chemical inhibitor of nonapoptotic cell death with therapeutic potential for ischemic brain injury. Nat Chem Biol. 2005;1(2):112–119. doi: [10.1038/nchembio711](https://doi.org/10.1038/nchembio711). [PubMed](https://pubmed.ncbi.nlm.nih.gov/16408008/).
50. You Z, Savitz SI, Yang J, et al. Necrostatin-1 reduces histopathology and improves functional outcome after controlled cortical impact in mice. J Cereb Blood Flow Metab. 2008;28(9):1564–1573. doi: [10.1038/jcbfm.2008.44](https://doi.org/10.1038/jcbfm.2008.44). [PubMed](https://pubmed.ncbi.nlm.nih.gov/18493258/).
51. Chavez-Valdez R, Martin LJ, Flock DL, Northington FJ. Necrostatin-1 attenuates mitochondrial dysfunction in neurons and astrocytes following neonatal hypoxia-ischemia. Neuroscience. 2012;219:192–203. doi: [10.1016/j.neuroscience.2012.05.002](https://doi.org/10.1016/j.neuroscience.2012.05.002). [PubMed](https://pubmed.ncbi.nlm.nih.gov/22579794/).
52. Northington FJ, Chavez-Valdez R, Graham EM, Razdan S, Gauda EB, Martin LJ. Necrostatin decreases oxidative damage, inflammation, and injury after neonatal HI. J Cereb Blood Flow Metab. 2011;31(1):178–189. doi: [10.1038/jcbfm.2010.72](https://doi.org/10.1038/jcbfm.2010.72). [PubMed](https://pubmed.ncbi.nlm.nih.gov/20571523/).
53. Fricker M, Vilalta A, Tolkovsky AM, Brown GC. Caspase inhibitors protect neurons by enabling selective necroptosis of inflamed microglia. J Biol Chem. 2013;288(13):9145–9152. doi: [10.1074/jbc.M112.427880](https://doi.org/10.1074/jbc.M112.427880). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23386613/).
54. Trichonas G, Murakami Y, Thanos A, et al. Receptor interacting protein kinases mediate retinal detachment-induced photoreceptor necrosis and compensate for inhibition of apoptosis. Proc Natl Acad Sci U S A. 2010;107(50):21695–21700. doi: [10.1073/pnas.1009179107](https://doi.org/10.1073/pnas.1009179107). [PubMed](https://pubmed.ncbi.nlm.nih.gov/21098270/).
55. Lee YS, Dayma Y, Park MY, Kim KI, Yoo SE, Kim E. Daxx is a key downstream component of receptor interacting protein kinase 3 mediating retinal ischemic cell death. FEBS Lett. 2013;587(3):266–271. doi: [10.1016/j.febslet.2012.12.004](https://doi.org/10.1016/j.febslet.2012.12.004). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23260419/).
56. Murakami Y, Matsumoto H, Roh M, et al. Receptor interacting protein kinase mediates necrotic cone but not rod cell death in a mouse model of inherited degeneration. Proc Natl Acad Sci U S A. 2012;109(36):14598–14603. doi: [10.1073/pnas.1206937109](https://doi.org/10.1073/pnas.1206937109). [PubMed](https://pubmed.ncbi.nlm.nih.gov/22908283/).
57. Linkermann A, Brasen JH, Darding M, et al. Two independent pathways of regulated necrosis mediate ischemia-reperfusion injury. Proc Natl Acad Sci U S A. 2013;110(29):12024–12029. doi: [10.1073/pnas.1305538110](https://doi.org/10.1073/pnas.1305538110). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23818611/).
58. Linkermann A, Heller JO, Prokai A, et al. The RIP1-Kinase Inhibitor Necrostatin-1 Prevents Osmotic Nephrosis and Contrast-Induced AKI in Mice. J Am Soc Nephrol. 2013  Epub ahead of print. doi: [10.1681/ASN.2012121169](https://doi.org/10.1681/ASN.2012121169). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23833261/).
59. Bonnet MC, Preukschat D, Welz PS, et al. The adaptor protein FADD protects epidermal keratinocytes from necroptosis in vivo and prevents skin inflammation. Immunity. 2011;35(4):572–582. doi: [10.1016/j.immuni.2011.08.014](https://doi.org/10.1016/j.immuni.2011.08.014). [PubMed](https://pubmed.ncbi.nlm.nih.gov/22000287/).
60. Li C, Lasse S, Lee P, et al. Development of atopic dermatitis-like skin disease from the chronic loss of epidermal caspase-8. Proc Natl Acad Sci U S A. 2010;107(51):22249–22254. doi: [10.1073/pnas.1009751108](https://doi.org/10.1073/pnas.1009751108). [PubMed](https://pubmed.ncbi.nlm.nih.gov/21135236/).
61. Seymour RE, Hasham MG, Cox GA, et al. Spontaneous mutations in the mouse Sharpin gene result in multiorgan inflammation, immune system dysregulation and dermatitis. Genes Immun. 2007;8(5):416–421. doi: [10.1038/sj.gene.6364403](https://doi.org/10.1038/sj.gene.6364403). [PubMed](https://pubmed.ncbi.nlm.nih.gov/17538631/).
62. Linkermann A, Brasen JH, De ZF, et al. Dichotomy between RIP1- and RIP3-mediated Necroptosis in Tumor Necrosis Factor alpha-induced Shock. Mol Med. 2012;18:577–86. doi: [10.2119/molmed.2011.00423](https://doi.org/10.2119/molmed.2011.00423). [PubMed](https://pubmed.ncbi.nlm.nih.gov/22371307/).
63. Ladoire S, Hannani D, Vetizou M, et al. Cell-Death-Associated Molecular Patterns As Determinants of Cancer Immunogenicity. Antioxid Redox Signal. 2013. doi: [10.1089/ars.2012.5133](https://doi.org/10.1089/ars.2012.5133). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23394620/).
64. Lau A, Wang S, Jiang J, et al. RIPK3 mediated necroptosis promotes donor kindey inflammatory injury and reduces allograft survival. Am J Trans. 2013  In press. doi: [10.1111/ajt.12447](https://doi.org/10.1111/ajt.12447). [PubMed](https://pubmed.ncbi.nlm.nih.gov/24103001/).
65. De KK, Van LS, Peeters P, Vanholder R. Human cytomegalovirus and kidney transplantation: a clinician's update. Am J Kidney Dis. 2011;58(1):118–126. doi: [10.1053/j.ajkd.2011.04.010](https://doi.org/10.1053/j.ajkd.2011.04.010). [PubMed](https://pubmed.ncbi.nlm.nih.gov/21684438/).
66. Linkermann A, Hackl MJ, Kunzendorf U, et al. Necroptosis in Immunity and Ischemia-Reperfusion Injury. Am J Trans. 2013  In press. doi: [10.1111/ajt.12448](https://doi.org/10.1111/ajt.12448). [PubMed](https://pubmed.ncbi.nlm.nih.gov/24103029/).
67. Piguet PF, Vesin C, Guo J, Donati Y, Barazzone C. TNF-induced enterocyte apoptosis in mice is mediated by the TNF receptor 1 and does not require p53. Eur J Immunol. 1998;28(11):3499–3505. doi: [10.1002/(SICI)1521-4141(199811)28:11<3499::AID-IMMU3499>3.0.CO;2-Q](https://doi.org/10.1002/(SICI)1521-4141(199811)28:11<3499::AID-IMMU3499>3.0.CO;2-Q). [PubMed](https://pubmed.ncbi.nlm.nih.gov/9842892/).
68. Duprez L, Takahashi N, Van HF, et al. RIP Kinase-Dependent Necrosis Drives Lethal Systemic Inflammatory Response Syndrome. Immunity. 2011;35(6):908–918. doi: [10.1016/j.immuni.2011.09.020](https://doi.org/10.1016/j.immuni.2011.09.020). [PubMed](https://pubmed.ncbi.nlm.nih.gov/22195746/).
69. Dejager L, Pinheiro I, Dejonckheere E, Libert C. Cecal ligation and puncture: the gold standard model for polymicrobial sepsis? Trends Microbiol. 2011;19(4):198–208. doi: [10.1016/j.tim.2011.01.001](https://doi.org/10.1016/j.tim.2011.01.001). [PubMed](https://pubmed.ncbi.nlm.nih.gov/21296575/).
70. Takahashi N, Duprez L, Grootjans S, et al. Necrostatin-1 analogues: critical issues on the specificity, activity and in vivo use in experimental disease models. Cell Death Dis. 2012;3:e437. doi: [10.1038/cddis.2012.176](https://doi.org/10.1038/cddis.2012.176). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23190609/).
71. Zou J, Kawai T, Tsuchida T, et al. Poly IC triggers a cathepsin D- and IPS-1-dependent pathway to enhance cytokine production and mediate dendritic cell necroptosis. Immunity. 2013;38(4):717–728. doi: [10.1016/j.immuni.2012.12.007](https://doi.org/10.1016/j.immuni.2012.12.007). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23601685/).
72. Biton S, Ashkenazi A. NEMO and RIP1 control cell fate in response to extensive DNA damage via TNF-alpha feedforward signaling. Cell. 2011;145(1):92–103. doi: [10.1016/j.cell.2011.02.023](https://doi.org/10.1016/j.cell.2011.02.023). [PubMed](https://pubmed.ncbi.nlm.nih.gov/21458669/).
73. Xie T, Peng W, Liu Y, et al. Structural Basis of RIP1 Inhibition by Necrostatins. Structure. 2013;21(3):493–499. doi: [10.1016/j.str.2013.01.016](https://doi.org/10.1016/j.str.2013.01.016). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23473668/).
74. Kelliher MA, Grimm S, Ishida Y, Kuo F, Stanger BZ, Leder P. The death domain kinase RIP mediates the TNF-induced NF-kappaB signal. Immunity. 1998;8(3):297–303. doi: [10.1016/s1074-7613(00)80535-x](https://doi.org/10.1016/s1074-7613(00)80535-x). [PubMed](https://pubmed.ncbi.nlm.nih.gov/9529147/).
75. Burne MJ, Elghandour A, Haq M, et al. IL-1 and TNF independent pathways mediate ICAM-1/VCAM-1 up-regulation in ischemia reperfusion injury. J Leukoc Biol. 2001;70(2):192–198. [PubMed](https://pubmed.ncbi.nlm.nih.gov/11493610/).
76. Ko GJ, Jang HR, Huang Y, et al. Blocking Fas Ligand on Leukocytes Attenuates Kidney Ischemia-Reperfusion Injury. J Am Soc Nephrol. 2011;22(4):732–42. doi: [10.1681/ASN.2010010121](https://doi.org/10.1681/ASN.2010010121). [PubMed](https://pubmed.ncbi.nlm.nih.gov/21436290/).
77. Piot C, Croisille P, Staat P, et al. Effect of cyclosporine on reperfusion injury in acute myocardial infarction. N Engl J Med. 2008;359(5):473–481. doi: [10.1056/NEJMoa071142](https://doi.org/10.1056/NEJMoa071142). [PubMed](https://pubmed.ncbi.nlm.nih.gov/18669426/).
78. Baines CP, Kaiser RA, Purcell NH, et al. Loss of cyclophilin D reveals a critical role for mitochondrial permeability transition in cell death. Nature. 2005;434(7033):658–662. doi: [10.1038/nature03434](https://doi.org/10.1038/nature03434). [PubMed](https://pubmed.ncbi.nlm.nih.gov/15800627/).
79. Schinzel AC, Takeuchi O, Huang Z, et al. Cyclophilin D is a component of mitochondrial permeability transition and mediates neuronal cell death after focal cerebral ischemia. Proc Natl Acad Sci U S A. 2005;102(34):12005–12010. doi: [10.1073/pnas.0505294102](https://doi.org/10.1073/pnas.0505294102). [PubMed](https://pubmed.ncbi.nlm.nih.gov/16103352/).
80. Yang B, Jain S, Pawluczyk IZ, et al. Inflammation and caspase activation in long-term renal ischemia/reperfusion injury and immunosuppression in rats. Kidney Int. 2005;68(5):2050–2067. doi: [10.1111/j.1523-1755.2005.00662.x](https://doi.org/10.1111/j.1523-1755.2005.00662.x). [PubMed](https://pubmed.ncbi.nlm.nih.gov/16221205/).
81. Ekberg H, Tedesco-Silva H, Demirbas A, et al. Reduced exposure to calcineurin inhibitors in renal transplantation. N Engl J Med. 2007;357(25):2562–2575. doi: [10.1056/NEJMoa067411](https://doi.org/10.1056/NEJMoa067411). [PubMed](https://pubmed.ncbi.nlm.nih.gov/18094377/).
82. Merion RM, White DJ, Thiru S, Evans DB, Calne RY. Cyclosporine: five years' experience in cadaveric renal transplantation. N Engl J Med. 1984;310(3):148–154. doi: [10.1056/NEJM198401193100303](https://doi.org/10.1056/NEJM198401193100303). [PubMed](https://pubmed.ncbi.nlm.nih.gov/6361559/).
83. Dixon SJ, Lemberg KM, Lamprecht MR, et al. Ferroptosis: an iron-dependent form of nonapoptotic cell death. Cell. 2012;149(5):1060–1072. doi: [10.1016/j.cell.2012.03.042](https://doi.org/10.1016/j.cell.2012.03.042). [PubMed](https://pubmed.ncbi.nlm.nih.gov/22632970/).
84. Cookson BT, Brennan MA. Pro-inflammatory programmed cell death. Trends Microbiol. 2001;9(3):113–114. doi: [10.1016/s0966-842x(00)01936-3](https://doi.org/10.1016/s0966-842x(00)01936-3). [PubMed](https://pubmed.ncbi.nlm.nih.gov/11303500/).
85. Sosna J, Voigt S, Mathieu S, et al. TNF-induced necroptosis and PARP-1-mediated necrosis represent distinct routes to programmed necrotic cell death. Cell Mol Life Sci. 2013  Epub ahead of print. doi: [10.1007/s00018-013-1381-6](https://doi.org/10.1007/s00018-013-1381-6). [PubMed](https://pubmed.ncbi.nlm.nih.gov/23760205/).
86. Yazdanpanah B, Wiegmann K, Tchikov V, et al. Riboflavin kinase couples TNF receptor 1 to NADPH oxidase. Nature. 2009;460(7259):1159–1163. doi: [10.1038/nature08206](https://doi.org/10.1038/nature08206). [PubMed](https://pubmed.ncbi.nlm.nih.gov/19641494/).
87. Boya P, Kroemer G. Lysosomal membrane permeabilization in cell death. Oncogene. 2008;27(50):6434–6451. doi: [10.1038/onc.2008.310](https://doi.org/10.1038/onc.2008.310). [PubMed](https://pubmed.ncbi.nlm.nih.gov/18955971/).

## Documents

- Source article: Linkermann A, Green DR. *Necroptosis*. N Engl J Med. 2014;370(5):455–465. doi: [10.1056/NEJMra1310050](https://doi.org/10.1056/NEJMra1310050). PMID 24476417 (author manuscript PMC4035222).

## Connections

- [[Necroptosis]] — the review canonicalizes the 2014 definition: RIPK3-dependent necrotic cell death.
- [[RIPK3]] — defining molecule; embryonic-lethality rescue, host-defense and disease evidence.
- [[RIPK1]] — target of Nec-1/Nec-1s; survival-to-death switch via ubiquitination/deubiquitination.
- [[MLKL]] — downstream pseudokinase executor (function still undefined in 2014); NSA target.
- [[necrosome]] — amyloid-like RIPK1–RIPK3 transducing complex; four RHIM proteins (RIPK1, RIPK3, DAI, TRIF).
- [[TNFR1]] / [[TNFα]] — canonical inducer; in-vivo renal IRI data argue additional inducers matter.
- [[Caspase-8]] / [[c-FLIP]] / [[FADD]] / [[TRADD]] — the suppressive rheostat whose loss licenses necroptosis.
- [[Z-VAD-FMK]] — pan-caspase inhibitor whose co-treatment with TNF first unmasked necroptosis.
- [[TRIF]] / [[DAI]] / [[Protein Kinase R]] — non-classical necrosome triggers (TLRs, viral sensors, IFN-induced).
- [[Necrostatin-1]] / [[Necrostatin-1s]] / [[Necrosulfonamide]] — RIPK1- and MLKL-directed intervention tools.
- [[Mitochondrial Permeability Transition]] / [[Cyclophilin D]] / [[Cyclosporine A]] / [[Sanglifehrin A]] — the independent MPT program and its pharmacologic blockade; Nec-1 + SfA combination therapy.
- [[Ischemia-reperfusion Injury]] / [[Myocardial infarction]] / [[Stroke]] / [[Acute Kidney Injury]] — central disease domains.
- [[Cerulein-Induced Pancreatitis]] / [[Pancreatitis]] — first GI necroptosis model; RIPK3-/MLKL-KO protection but Nec-1 worsening.
- [[Inflammatory Bowel Disease]] / [[Crohn's Disease]] — intestinal-epithelial FADD/caspase-8 loss drives RIPK3-dependent colitis-like pathology.
- [[Sepsis]] / [[Systemic Inflammatory Response Syndrome]] — an open question (CLP model conflicts).
- [[SHARPIN]] — RIPK1-regulator/LUBAC component; deficiency causes proliferative dermatitis.
- [[Ferroptosis]] / [[Pyroptosis]] / [[PARP1]] / [[Lysosomal Membrane Permeabilization]] — fellow members of the regulated-necrosis umbrella.
- [[Damage-Associated Molecular Patterns]] — the immunogenic payoff that links necroptosis to disease and allograft rejection.
- [[Regulated Cell Death]] — the parent program; "regulated necrosis" as its lytic subset.
- [[SIRT2]] / [[Acid Sphingomyelinase]] / [[PGAM5]] — proposed regulators needing further evidence (2014).

## Linking Summary

- New document note in `src/notes/cell-death/` — canonical 2014 NEJM definition paper for the necroptosis topic.
- New entity notes created (Step 3): [[Inflammatory Bowel Disease]], [[SHARPIN]] (both in `src/notes/_link/`, non-protected).
- Enriched entity notes: Necroptosis, RIPK1, RIPK3, MLKL, necrosome, TNFR1, Necrostatin-1 (see each note's Linking Summary).
- New links added: [[RIPK3]], [[RIPK1]], [[MLKL]], [[necrosome]], [[Caspase-8]], [[c-FLIP]], [[FADD]], [[TRADD]], [[TNFR1]], [[TNFα]], [[NF-κB]], [[NEMO]], [[CYLD]], [[A20]], [[cIAPs]], [[Inhibitor of Apoptosis Proteins]], [[Z-VAD-FMK]], [[Toll-like Receptor]], [[TLR3]], [[TLR4]], [[TRIF]], [[DAI]], [[ZBP1]], [[RHIM]], [[Protein Kinase R]], [[Type I Interferon]], [[JAK-STAT Signaling]], [[Necrostatin-1]], [[Necrostatin-1s]], [[Necrosulfonamide]], [[Mitochondrial Permeability Transition]], [[Cyclophilin D]], [[Cyclosporine A]], [[Sanglifehrin A]], [[Ischemia-reperfusion Injury]], [[Myocardial infarction]], [[Stroke]], [[Acute Kidney Injury]], [[Atherosclerosis]], [[Pancreatitis]], [[Cerulein-Induced Pancreatitis]], [[Inflammatory Bowel Disease]], [[Crohn's Disease]], [[Sepsis]], [[Systemic Inflammatory Response Syndrome]], [[Damage-Associated Molecular Patterns]], [[Ferroptosis]], [[Pyroptosis]], [[PARP1]], [[Lysosomal Membrane Permeabilization]], [[NLRP3]], [[Inflammasome]], [[Microglia]], [[Endothelial Cells]], [[SHARPIN]], [[SIRT2]], [[Acid Sphingomyelinase]], [[PGAM5]], [[Rapamycin]], [[IDO1]], [[Retinoic-acid-inducible protein I-like receptor]], [[Regulated Cell Death]], [[Apoptosis]], [[Necrosis]], [[Caspases]], [[Inflammation]].
- Suggested future entity notes: [[SHARPIN]]-adjacent [[Linear Ubiquitin Chain Assembly Complex]]; retinal-disease entities [[Retinal Detachment]], [[Retinitis Pigmentosa]]; [[Necrotizing Pancreatitis]].
- Strong connections to strengthen: [[Necroptosis]] ↔ [[RIPK3]], [[Necroptosis]] ↔ [[Mitochondrial Permeability Transition]], [[RIPK1]] ↔ [[Necrostatin-1]], [[TNFR1]] ↔ in-vivo nonessentiality in renal IRI.