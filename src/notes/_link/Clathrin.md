---
title: Clathrin
description: Clathrin is a three-legged scaffold protein that polymerises into the lattice of clathrin-coated pits and vesicles, the entry route for receptor-mediated endocytosis at the plasma membrane and at endosomes.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags: [protein, endocytosis, membrane-trafficking]
aliases: [CLTC, clathrin heavy chain, CHC]
---

# Clathrin

**Clathrin** is a cytosolic scaffold protein that self-assembles into polygonal lattices that curve membranes into vesicles. It is named for the cage-like ("clathra", Greek for lattice) coats seen in electron micrographs of coated pits. Together with the adaptor protein complex AP2 it forms the core of **clathrin-mediated endocytosis (CME)**, the major endocytic pathway in mammalian cells, which internalises transmembrane receptors and transporters, remodels plasma-membrane composition in response to the environment, and controls cell-surface signalling. CME is fundamental to neurotransmission, receptor down-regulation, nutrient uptake and immune-cell function; disrupting it is embryonic-lethal.

## Structure & Domains

- **Triskelion:** the assembly unit is a three-legged structure (triskelion) formed from three **clathrin heavy chains** (CHC, gene *CLTC*, ~190 kDa each) joined at their C-terminal trimerisation domains, each CHC carrying a tightly associated **clathrin light chain** (CLC, *CLTA/CLTB/CLTC*).
- **Anatomy of a leg:** the CHC has an N-terminal **terminal domain** (TD) linked by a distal leg, knee and proximal leg to the trimerisation hub, giving each leg a characteristic curl.
- **Lattice:** in the assembled coat, legs from adjacent triskelia interdigitate to form a lattice of open hexagonal and pentagonal faces. Cryo-EM shows the trimerisation domains projecting inward, contacting the ankle regions of three further triskelia each centred two vertices away — invariant contacts that stabilise the coat.
- **Triskelia do not bind membrane or cargo directly.** All specificity comes from adaptor proteins.

## Mechanism of Action: The CME Machinery

CME proceeds through a modular sequence, each step a distinct protein module:

1. **Initiation** — FCH-domain-only (FCHO) proteins, Eps15 and intersectin form a priming complex that nucleates shallow pits and activates AP2 allosterically.
2. **Cargo selection** — the **AP2** heterotetramer (α, β2, μ2, σ2 adaptins) binds sorting motifs in receptor cytoplasmic tails — the tyrosine-based **YXXΦ** motif via μ2 and the dileucine **[DE]XXXL[LI]** motif via σ2 — and binds plasma-membrane **PtdIns(4,5)P2** via three sites on α, β2 and μ2. AP2 sits "closed" in the cytosol and opens on the membrane, exposing cargo and lipid sites together; cargo binding and PIP2 binding cooperatively lock it open.
3. **Coat assembly and membrane bending** — clathrin triskelia polymerise onto the AP2 core (β2 hinge and β2 ear are the principal clathrin-binding sites), while AP2 ears recruit accessory proteins (epsin, amphiphysin, Dab2, Numb) that insert amphipathic helices to bend the membrane. Actin polymerisation is required under high membrane tension.
4. **Scission** — the large GTPase dynamin assembles helical collars around the neck of the deeply invaginated pit and hydrolyses GTP to sever it. AP2 acts as a GAP for dynamin.
5. **Uncoating** — immediately after release, auxilin recruits the Hsc70 chaperone, whose ATPase activity peels triskelia off the vesicle in a stepwise, sequential mechanism requiring ~3 HSC70 per triskelion. The naked vesicle then homotypically fuses with early endosomes.

> [!info] Cargo-adaptor specialisation
> Because clathrin itself is inert, tissue specificity comes from mixing different cargo adaptors into the same lattice. A single synaptic vesicle assembled by CME can carry more than 20 distinct cargoes in fixed stoichiometries. This modularity — the same modules reused, some swapped — is why CME can serve neurons, adipocytes and fibroblasts with one machinery.

> [!warning] AP-2 is not absolutely required, but it dominates
> siRNA depletion of AP2 reduces clathrin-coated pit number roughly tenfold and largely abolishes CME of transferrin, EGF receptor and LDL receptor, yet the residual pits are AP2-positive — i.e. selection of which pits fail is not random. In budding yeast, clathrin functions even in the absence of heterotetrameric adaptors and AP180-related proteins, so AP2's centrality is a vertebrate-emphasised, not absolute, arrangement.

## Physiological Function

- **Neurotransmission:** synaptic vesicle recycling at the nerve terminal runs on clathrin; the AP2 cargo repertoire there is unusually complex.
- **Receptor homeostasis:** internalisation of GPCRs, growth factor receptors (e.g. EGFR) and cytokine receptors sets signalling amplitude and duration.
- **Nutrient uptake:** [[Transferrin]] and [[LDL]] receptor pathways deliver iron and cholesterol.
- **Endosomal sorting:** clathrin patches on endosomes, together with AP2 and retromer-like machinery, recycle receptors back to the surface.
- **Cross-talk with autophagy:** clathrin-coated vesicles deliver lysosomal enzymes (via CI-MPR/Man-6-P) from the trans-Golgi to endosomes and lysosomes, so loss of clathrin disrupts lysosome replenishment and hence autophagic flux.
- **Pathogen exploitation:** viruses (e.g. influenza) and some bacterial toxins use CME as an entry route; [[TOM1]] acts as an adaptor recognising ubiquitinated cargo with clathrin-coated structures to route endosome-to-lysosome traffic.

## Pathology & Clinical Relevance

- **Loss of clathrin light chain or heavy chain** in mice causes embryonic lethality with severe growth retardation.
- **AP2 haploinsufficiency** — heterozygous loss of AP2 subunits produces embryonic death in mice, and the assembly chaperone **AAGAB** (with CCDC32) controls AP2 heterotetramer assembly; failure of this pathway is a candidate mechanism for neurodevelopmental disease.
- **Cargo-specific defects** present as receptor/signalling disorders rather than as general endocytosis failure: e.g. defective LDL-receptor internalisation in familial hypercholesterolaemia, or EGFR trafficking failures in lung adenocarcinoma.
- **Neurodegeneration:** clathrin dysfunction and endosomal trafficking defects are implicated in Alzheimer's and Parkinson's disease, where impaired lysosomal delivery and autophagic clearance contribute to protein aggregation.
- **Therapeutic leverage:** because CME concentrates cargo in a defined compartment, inhibitors of dynamin (e.g. dynasore) and of PI4KIIIβ were developed as research tools and explored therapeutically, and CME is a route being exploited for antibody–drug conjugate and nanoparticle delivery.

## Documents
- (no document notes yet)

## Connections
- [[AP2]] — the central adaptor; AP2's closed-to-open conformational switch is the regulatory node that links PIP2 and cargo recognition to clathrin polymerisation, making it the hub of CME initiation.
- [[Vesicle Transport]] — clathrin is the coat protein for one of the two major coated-vesicle routes; the vault treats it as a core trafficking hub alongside COPI/COPII.
- [[TOM1]] — a ubiquitin-sensitive endocytic adaptor that recruits clathrin-coated structures at endosomes to sort ubiquitinated cargo toward lysosomal degradation.
- [[Endocytic Lysosome Reformation]] — ELCR produces new lysosomes from endocytic tubules after lysosome repair; the endocytic machinery clathrin belongs to supplies the incoming membrane and hydrolases that this pathway depends on.
- [[PtdIns(4,5)P2]] — the plasma-membrane lipid AP2 binds; its local depletion is the earliest trigger of pit initiation and its hydrolysis by synaptojanin 1 is required for scission.
- [[Transferrin]] — the classic CME cargo, historically used as the tracer for quantifying clathrin-coated pit formation.
- [[Autophagy]] — indirectly coupled: clathrin-coated trafficking from the Golgi supplies lysosomal enzymes, so clathrin loss secondarily impairs autophagic degradation.

## Linking Summary
- New links added: [[AP2]], [[Vesicle Transport]], [[TOM1]], [[Endocytic Lysosome Reformation]], [[PtdIns(4,5)P2]], [[Transferrin]], [[LDL]], [[Actin]], [[Autophagy]], [[Rab5]], [[Rab7]], [[Dynamin]], [[Alzheimer's Disease]], [[Parkinson's Disease]]
- Suggested notes to create: [[Dynamin]], [[Dynamin-1]], [[FCHO1]], [[FCHO2]], [[Eps15]], [[Intersectin]], [[Amphiphysin]], [[Dab2]], [[Numb]], [[Auxilin]], [[Epsin]], [[Clathrin Light Chain]], [[Synaptojanin 1]], [[Synaptic Vesicle]], [[Receptor-mediated Endocytosis]], [[Endosome]], [[Cargo Selection]], [[Lipid Rafts]], [[Synaptotagmin]] — removed as already existing: HSC70
- Strong connections to strengthen: [[Clathrin]] ↔ [[AP2]], [[Clathrin]] ↔ [[Autophagy]], [[TOM1]] ↔ [[Clathrin]]
