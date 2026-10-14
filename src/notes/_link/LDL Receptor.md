---
title: LDL Receptor
description: The LDL receptor (LDLR) is the cell-surface, clathrin-mediated endocytic receptor that clears LDL from plasma by binding apolipoprotein B; it is the rate-limiting step of receptor-mediated cholesterol uptake and the mutated gene in most familial hypercholesterolaemia.
protected: false
created: 2026-10-02
updated: 2026-10-02
tags: [protein, membrane-receptor, lipid-metabolism, endocytosis, cardiovascular]
aliases: [LDL Receptor, LDLR, LDL receptor, BHC receptor]
---

# LDL Receptor

The **LDL receptor** (LDLR) is the principal cell-surface receptor for LDL clearance and the rate-limiting step of receptor-mediated cholesterol uptake. It binds the apolipoprotein B-100 moiety of [[LDL]] (and ApoB of other atherogenic lipoproteins) on its β-propeller domain, internalises the particle through [[Clathrin]]-coated pits, and delivers it to the endosome, where acidified pH releases the ligand and the receptor is recycled back to the surface. The system was the paradigm that established how regulated receptor-mediated [[Endocytosis]] works, and its 1985 Nobel Prize made cholesterol metabolism one of the first molecular-genetics success stories in medicine.

## Structure

LDLR is a ~950-residue, calcium-dependent single-pass transmembrane glycoprotein with five functional domains:

- **Ligand-binding domains** — three tandem class-A LDL receptor repeats plus a β-propeller domain. The propeller recognises apoB-100 C-terminal residues 3359–3482; the cysteine-rich repeats contribute pH-dependent ligand release.
- **EGF-like domains** — required for processing of the nascent receptor (furin cleavage to the mature α/β heterodimer) and for maintaining Ca²⁺-dependent folding.
- **O-linked carbohydrate domain** — glycosylated, separates the ligand-binding module from the membrane and modulates receptor clustering.
- **Cytoplasmic tail** — a 50-residue intracellular segment with two NPXY motifs that engage [[AP2]] clathrin adaptors and the cytoskeleton. The tail's trafficking motifs are what the endocytic machinery reads.

> [!info] Acidification is the switch
> LDL binding requires physiological pH; the clustered negative charges of the EGF-like domains are neutralised by protonation in the endosome, dropping ligand affinity ~1000-fold and freeing apoB. The receptor's recycling and its ligand's onward routing to the lysosome are therefore independent processes — which is exactly why PCSK9 hijacks one without the other.

## Endocytic Cycle

1. LDL binds apoB-100 at the cell surface in coated pits.
2. Clathrin, with its AP-2 adaptor complex, and the large GTPase dynamin mediate internalisation into a clathrin-coated vesicle.
3. Vesicles uncoat and fuse with early endosomes; LDL is released at pH ~6.
4. LDLR recycles — a GNPAT/ACY3–PDLIM7 pathway, and sorting nexin 17 (SNX17)-directed recycling, both of which are required, and whose loss causes familial hypercholesterolaemia.
5. LDL proceeds to the late endosome and lysosome, where cholesteryl esters are liberated by lysosomal acid lipase and the protein is degraded.

## Cholesterol Sensing and Regulation

The receptor's activity is governed by the cell's sterol content through SREBP-2 (the sterol regulatory element-binding protein). High intracellular cholesterol:

- **Reduces LDLR transcription** (SREBP-2 is proteolytically inactivated and its escort protein SCAP retains SREBP-2 in the ER).
- **Retains unfolded LDLR in the ER** via its interaction with the ER chaperone Mesd/SR-BI, targeting it for ERAD degradation — so even unfolded protein does not reach the surface.
- Reduces synthesis enzymes including HMG-CoA reductase.

> [!important] Statins work through this loop
> Statins inhibit HMG-CoA reductase, lowering hepatic cholesterol, which **releases the SREBP-2 block and upregulates LDLR**. Statins therefore increase both LDL synthesis and LDL clearance, with clearance dominating — which is also why they raise blood PCSK9 and why statin intolerance leaves LDL elevated through a partly unresolved mechanism.

## PCSK9 and Degradation

[[PCSK9]] is a secreted protease that binds LDLR's β-propeller domain after internalisation and, in the acidic endosome, prevents the receptor from adopting the closed conformation needed for recycling — routing it instead to the lysosome. PCSK9's enzymatic activity is *not* required; it acts as a chaperone/scaffold. Statins raise PCSK9 transcription via SREBP-2, coupling the two pathways. Monoclonal antibodies against PCSK9 (evolocumab, alirocumab) block this and substantially lower LDL, a direct validation of the LDLR-trafficking model.

## Clinical Significance

- **Familial hypercholesterolaemia** — heterozygous LDLR mutations are the commonest monogenic cause (roughly 1 in 250–500 in most European populations), causing elevated LDL-C from birth, premature coronary disease, tendon xanthomas and often a family history of early heart disease. Biallelic/homozygous disease causes severe neonatal hypercholesterolaemia with cutaneous xanthomas and requires early therapy.
- **Atherosclerosis** — LDLR knockout mice are the foundational model of LDL-driven atherogenesis and remain the standard experimental system. This same model underpins the finding that SIRT3 deletion does not alter lesion development on an LDLR-deficient background, i.e. that sirtuin effects on the vessel wall are partly independent of plasma lipid levels.
- **PCSK9 loss of function** — naturally occurring loss-of-function PCSK9 variants produce lifelong low LDL-C and reduced cardiovascular events, mirroring the pharmacology of PCSK9 inhibitors.

## Documents

- [[_document_ - Roles of SIRT3 in aging and aging-related diseases|Roles of SIRT3 in aging and aging-related diseases]] — discusses the LDL receptor as the experimental basis for LDL-driven atherosclerosis and reports that SIRT3 deletion does not alter lesion development in LDLR-knockout mice, indicating a context-dependent sirtuin effect independent of plasma lipid levels.

## Connections

- [[LDL]] — the ligand LDLR exists to clear; LDL-C is the measured clinical variable and the therapeutic target for essentially all lipid-lowering therapy.
- [[Apolipoprotein B]] — apoB-100 on the LDL particle is what LDLR's β-propeller actually recognises, making apoB the more precise atherogenic particle measure than LDL-C.
- [[Endocytosis]] — LDLR was the paradigm case for clathrin-mediated receptor-mediated endocytosis and the sorting logic of receptor recycling.
- [[Clathrin]] — the coat that forms the pit LDLR is captured in, shared with insulin and transferrin receptor internalisation.
- [[Cholesterol Metabolism]] — LDLR-mediated uptake is the regulated influx arm of hepatic and peripheral cholesterol homeostasis, balancing synthesis against efflux.
- [[Oxidized LDL]] — the modified particle whose uptake by macrophage scavenger receptors bypasses LDLR, which is why oxLDL drives foam-cell formation and why LDLR loss does not prevent all atherogenesis.
- [[Atherosclerosis]] — LDLR is the causal gene for the most common form of monogenic dyslipidaemia and the mouse knockout that defined the disease model.
- [[PCSK9]] — the secreted regulator that diverts LDLR to lysosomal degradation instead of recycling; the pharmacological proof that receptor fate is the rate-limiting variable.
- [[Statins]] — HMG-CoA reductase inhibition works upstream, and only because it de-represses the SREBP-2 transcriptional program containing the LDLR gene.

## Linking Summary

- New links added: [[LDL]], [[Apolipoprotein B]], [[Endocytosis]], [[Clathrin]], [[Cholesterol Metabolism]], [[Oxidized LDL]], [[Atherosclerosis]], [[PCSK9]], [[Statins]], [[Macrophages]], [[Cardiovascular Disease]]
- Suggested notes to create: [[Dynamin]], [[Retromer]], [[SNX17]], [[ERAD]], [[Familial Hypercholesterolaemia]], [[LDLR ApoB Receptor Family]]
- Strong connections to strengthen: [[LDL]] ↔ [[LDL Receptor]] ↔ [[Cholesterol Metabolism]] (the vault has an LDL note, an Apolipoprotein B note and a Cholesterol Metabolism note that all reference the receptor with no target), [[Endocytosis]] ↔ [[LDL Receptor]] ↔ [[Clathrin]] (the paradigm case for receptor-mediated endocytosis, currently an unresolved edge), [[Oxidized LDL]] ↔ [[LDL Receptor]] ↔ [[Macrophages]] (the LDLR-independent scavenger-receptor route is the fact that most reconciles the foam-cell literature)