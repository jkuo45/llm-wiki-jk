---
title: Homodimerization
description: Homodimerization is the assembly of two identical polypeptide chains into a symmetric complex; this note covers interface chemistry, obligate versus facultative behaviour, functional consequences documented in the vault (caspase-8 activation, STING ligand sensing, IKKalpha non-canonical NF-kB, NOS electron transfer, bHLH-LZ DNA binding), regulation, and the assays used to measure dimer state.
protected: false
created: 2026-11-19
updated: 2026-11-19
tags:
  - biological-process
  - protein
  - protein-structure
  - quaternary-structure
url: #
source: #
aliases:
  - homodimerisation
  - homodimer formation
  - homodimeric assembly
---

# Homodimerization

**Homodimerization** is the assembly of two identical polypeptide chains — same gene product, same splice isoform, sometimes the same post-translational state — into a stable complex. It is the minimal case of homo-oligomerization and the structural counterpart of [[Heterodimerization]], where the two subunits differ. The distinction is functional, not cosmetic: the identity of the partner sets the interface, and therefore the allosteric coupling, the substrate specificity, and the downstream signal.

Homodimers are the default quaternary state of a large fraction of enzymes, transcription factors, and receptors. In the vault the term appears across cell-death signalling ([[Caspase-8]]), innate immunity ([[STING]]), kinase signalling ([[IKKalpha]]), redox enzymology ([[PRDX1]], [[Xanthine Oxidase]]), transcription ([[NRF1]], [[HNF4α]], [[TFEB]]), and structural/chromatin proteins ([[HIC1]], [[Beclin1]]).

## Definition and classification

- **Stoichiometry.** A homodimer has two protomers of identical sequence; higher assemblies (homotrimers, tetramers, 24-mers) are homo-oligomers.
- **Obligate versus facultative.** Obligate homodimers are inactive, unstable, or unexported as monomers — the [[STING]] C-terminal domain, the [[Nitric Oxide Synthase]] isoforms, and [[Xanthine Oxidase]] all require the dimer for catalysis. Facultative homodimers exchange between monomer and dimer in response to ligand, modification, or local concentration, making dimerization itself the regulatory event.
- **Transient versus stable.** Transient dimers (kinase activation, receptor clustering) turn over within seconds to minutes; stable dimers ([[FASN]], [[M-CSF]], [[PRDX1]]) persist through purification and are isolable by size-exclusion chromatography.
- **Covalent versus non-covalent.** Interchain disulfides — [[M-CSF]], the [[VEGF]]-A homodimer that activates [[VEGFR2]], [[IL-10]] — convert a reversible equilibrium into a fixed stoichiometry.

## Structural basis of the interface

### Interface chemistry

Homodimeric interfaces are symmetric: the same surface patch on each protomer contacts its counterpart, giving the complex C2 (two-fold rotational) symmetry. Buried surface per protomer is typically on the order of 800–2000 Å²; the driving term is hydrophobic burial, with hydrogen bonds and salt bridges providing specificity and orientation. This quantitative range is general structural biology, not a value documented in the vault notes.

Because the interface is self-complementary and often shallow, it is mutation-sensitive: a single substitution at a contact residue can shift the monomer–dimer equilibrium or act dominantly by sequestering the wild-type partner.

### Dedicated dimerization domains

Most obligate and switchable homodimers use a defined fold rather than an incidental surface:

- **POZ/BTB** — [[HIC1]] uses its N-terminal POZ/BTB domain to homodimerize and to recruit corepressors including [[SIRT1]] and HDACs.
- **Coiled-coil** — [[Beclin1]] homodimerizes through its coiled-coil domain, the same region that binds [[UVRAG]]; [[RILP]] forms a coiled-coil homodimer with two symmetric surfaces, giving a Rab7–RILP₂–Rab7 dyad.
- **bHLH-LZ / leucine zipper** — [[TFEB]] and the wider [[bHLH-LZ Transcription Factors]] family dimerize through the helix-loop-helix–zipper, with the adjacent basic region contacting the E-box (or M-box for TFEB).
- **C-terminal dimerization modules** — [[ORP1L]] carries a C-terminal homodimerization domain downstream of its sterol-sensing ORD; the [[STING]] C-terminal domain is an obligate homodimer harbouring the cyclic dinucleotide pocket.
- **Death-domain and DED folds** — the homotypic interaction surfaces that assemble the [[DISC]] and permit procaspase-8 dimerization.

## Energetics

Dimerization is a coupled equilibrium, K_d = [M]²/[D], so the fractional dimer depends on the square of subunit concentration. Two consequences follow: dimerization is steeply concentration-dependent (relevant at membranes, scaffolds, and in condensates), and apparent affinities measured at one concentration do not extrapolate. A dimer interface worth −10 kcal/mol is essentially fully dimeric at cellular protein concentrations (>1 µM); an interface worth −5 kcal/mol leaves the population monomer-dimer dependent. Exact dimerization free energies are protein-specific and are not documented in the vault.

## Functional consequences

### Activation by proximity

The clearest documented example is initiator caspase activation. Procaspase-8 recruited to the [[DISC]] is activated by homodimerization, which induces self-processing to the p18/p10 heterotetramer; the resulting activity cleaves [[Caspase-3]], [[Caspase-7]], and [[Bid]]. The competing [[c-FLIP]]_L heterodimer is reported to have a lower activation energy than the procaspase-8 homodimer and to change substrate specificity, so the homo/hetero partition at the DISC sets whether the output is apoptosis or restrained, [[RIPK1]]-cleaving survival signalling (Micheau 2002; Oberst 2011). Cleavage-dead Caspase-8 D387A homodimers are apoptosis-incompetent while D387A/c-FLIP_L heterodimers still signal — evidence that dimerization, not processing, is the primary activation step (Newton 2025).

### DNA-binding specificity

Dyad-symmetric dimers register with dyad-symmetric DNA elements. [[NRF1]] homodimers (or NRF1–small-Maf heterodimers) bind MCB elements centred on `YGCGCAYGCGCR` in nuclear-encoded mitochondrial gene promoters; [[HNF4α]] binds DR1 direct repeats as a homodimer; [[TFEB]] binds coordinated lysosomal expression and regulation (CLEAR) E-boxes as a homodimer. Dimer composition, not just DNA contact, sets target selection — the Myc–Max versus Max–Max comparison is the canonical case, and TFEB–TFEB versus TFEB–[[TFE3]] is its lysosomal analogue.

### Domain complementation

Multidomain enzymes use the dimer to complete a catalytic site or an electron-transfer chain. Each [[Nitric Oxide Synthase]] monomer carries an oxygenase domain (heme, BH₄, substrate) and a reductase domain (FAD, FMN, NADPH) joined by a calmodulin-binding linker; calmodulin binding enables electron flow from the reductase of one subunit to the oxygenase of the other, so activity is dimer-restricted. [[Xanthine Oxidase]] is a ~150 kDa homodimer with one molybdenum cofactor, two 2Fe–2S clusters, and one FAD per subunit, and [[FASN]] folds as a head-to-head homodimer with a dumbbell architecture in which the two subunits alternate catalytic roles.

### Avidity and scaffolding

Bivalent geometry raises effective affinity without changing intrinsic site affinity. [[ICAM-1]] homodimers on the cell surface increase adhesive avidity for [[LFA-1]]; [[RILP]] presents two Rab7-binding surfaces per dimer; [[PRDX1]] dimers assemble into hexamers and higher toroids that are both catalytically competent and chaperone-active. [[VDAC]] homodimers and homotrimers are reported as the assembly required for scramblase activity and for a pore large enough to pass [[Cytochrome c]].

### Pathway selection

The IKK complex illustrates how dimer identity reroutes signalling. Within the canonical complex IKKα partners [[IKKbeta]] and [[NEMO]]; released from NEMO, [[IKKalpha]] forms homodimers that — activated by NIK downstream of CD40/BAFF/LTβR — phosphorylate p100 to p52, driving non-canonical NF-κB and lymphoid organogenesis.

### Assembly into higher-order platforms

Homodimerization is frequently the first step of polymerization. [[TREX1]] homodimerizes into a dimeric ring with back-to-back active sites that processively degrades cytosolic DNA; [[STING]] dimers cluster into higher-order oligomers on activation; [[Cyclooxygenase]] isoforms act as homodimers; the [[NFS1]] homodimer forms the persulfide-generating platform for iron–sulfur cluster assembly.

## Regulation

- **Post-translational modification of the interface or its flank.** [[GCN5]] acetylates [[TFEB]] at K274/K279, disrupting homodimerization and impairing DNA binding — a direct PTM-to-oligomer-state switch.
- **Redox state.** Oxidation of interfacial cysteines converts xanthine dehydrogenase to the oxidase form in [[Xanthine Oxidase]]; the peroxidatic/resolving cysteine chemistry of [[PRDX1]] couples its oligomeric state to peroxide flux.
- **Ligand-induced conformational closure.** 2′3′-cGAMP closes the [[STING]] lid over the pocket, repositioning the TBK1 site — dimerization is constitutive, but the active conformation is ligand-gated.
- **Local concentration and scaffolds.** Recruitment to the [[DISC]], to membranes, or into condensates raises [M] and drives the equilibrium, which is why receptor-proximal dimerization is a sharper switch than bulk cytosolic dimerization.

## Measurement

Standing methods (general background, not vault-sourced): size-exclusion chromatography with multi-angle light scattering for absolute mass in solution, analytical ultracentrifugation for K_d, native mass spectrometry, chemical crosslinking with mass spectrometry for interface mapping, isothermal titration calorimetry for interface energetics, and BRET/FRET or split-luciferase complementation for dimer state in live cells. Crystal and cryo-EM structures define the interface; mutational scanning of the interface is the standard test of functional relevance.

## Cases documented in the vault

| Entity | Dimer form | Consequence | Note |
| --- | --- | --- | --- |
| [[Caspase-8]] | Homodimer at DISC | Activation, self-processing, apoptosis | [[Caspase-8-c-FLIP Rheostat]] |
| [[c-FLIP]] | Heterodimer partner | Lower activation energy; altered specificity | [[Caspase-8-c-FLIP Rheostat]] |
| [[STING]] | Obligate CTD homodimer | cGAMP binding, TBK1 recruitment | [[STING]] |
| [[IKKalpha]] | Homodimer (NEMO-free) | Non-canonical NF-κB, p100→p52 | [[IKKalpha]] |
| [[Nitric Oxide Synthase]] | Homodimer | Interdomain electron transfer | [[Nitric Oxide Synthase]] |
| [[Xanthine Oxidase]] | Homodimer | Moco/FeS/FAD catalysis per subunit | [[Xanthine Oxidase]] |
| [[PRDX1]] | Homodimer → decamer | Peroxidase and chaperone activity | [[PRDX1]] |
| [[TREX1]] | Homodimer | Processive DNA degradation | [[TREX1]] |
| [[NRF1]] | Homodimer or Maf heterodimer | MCB element binding | [[NRF1]] |
| [[HNF4α]] | Homodimer | DR1 binding, hepatic metabolic program | [[HNF4α]] |
| [[TFEB]] | Homodimer | CLEAR network; disrupted by GCN5 acetylation | [[bHLH-LZ Transcription Factors]] |
| [[HIC1]] | POZ/BTB homodimer | Corepressor recruitment | [[HIC1]] |
| [[Beclin1]] | CCD homodimer | PI3K-III complex assembly | [[Beclin1]] |
| [[RILP]] | Coiled-coil homodimer | Two Rab7-binding surfaces | [[RILP]] |
| [[M-CSF]] | Disulfide-linked homodimer | CSF1R activation | [[M-CSF]] |
| [[VEGF]]-A | Disulfide-linked homodimer | [[VEGFR2]] activation | [[VEGFR2]] |
| [[IL-10]] | Homodimeric cytokine | IL-10R1/IL-10R2 signalling | [[IL-10]] |
| [[FASN]] | Head-to-head homodimer | Alternating catalytic subunits | [[FASN]] |
| [[ICAM-1]] | Surface homodimer | Adhesive avidity | [[ICAM-1]] |
| [[VDAC]] | Homodimer/trimer | Scramblase and pore activity | [[VDAC]] |

## Disease and pharmacology

Interface mutations that disturb obligate dimerization behave as loss-of-function alleles and are frequently dominant-negative, since the mutant monomer poisons the wild-type partner — the mechanism underlying a subset of inherited mutations in dimeric enzymes and receptors. Conversely, interface surfaces are attractive drug targets in principle, but clinical success is limited: the approved interface-directed drugs (for example transthyretin stabilizers, which act on a tetramer rather than a dimer) exploit a well-defined ligand pocket at the subunit boundary rather than a flat symmetric patch. No homodimer-interface inhibitor is documented in the vault notes.

## Limits of the evidence

Interface-area ranges, coupling free energies, and assay performance figures above are general structural-biology background. Entity-specific statements — activation by dimerization, obligate dimer status, pathway selection, PTM-dependent dimer disruption — are drawn from the cited vault notes; primary literature is cited in those notes, not here.

## Documents

No source document ingested specifically for this entity. Content is synthesized from the linked entity notes.

## Connections

- [[Heterodimerization]] — the asymmetric counterpart; partner identity sets specificity
- [[Caspase-8]] / [[c-FLIP]] — the best-characterized homo-versus-heterodimer decision in the vault
- [[STING]] — obligate homodimer whose active conformation is ligand-gated
- [[IKKalpha]] — homodimer versus heterocomplex determines which NF-κB arm fires
- [[Nitric Oxide Synthase]] — dimer required for interdomain electron transfer
- [[PRDX1]] — dimer-to-decamer assembly couples redox state to chaperone function
- [[TFEB]] / [[bHLH-LZ Transcription Factors]] — dimer composition as a DNA-specificity determinant
- [[TREX1]] / [[VDAC]] / [[FASN]] — dimer as the functional unit of a larger assembly
- [[M-CSF]] / [[VEGF]] / [[IL-10]] — disulfide-locked secreted homodimers
- [[RILP]] / [[ICAM-1]] — avidity gained from bivalent geometry

## Linking Summary

- New links added: [[Heterodimerization]], [[Caspase-8-c-FLIP Rheostat]], [[STING]], [[IKKalpha]], [[Nitric Oxide Synthase]], [[Xanthine Oxidase]], [[PRDX1]], [[TREX1]], [[NRF1]], [[HNF4α]], [[TFEB]], [[TFE3]], [[bHLH-LZ Transcription Factors]], [[HIC1]], [[Beclin1]], [[RILP]], [[M-CSF]], [[VEGF]], [[VEGFR2]], [[IL-10]], [[FASN]], [[ICAM-1]], [[LFA-1]], [[VDAC]], [[Cyclooxygenase]], [[NFS1]], [[GCN5]], [[SIRT1]], [[Caspase-3]], [[Caspase-7]], [[Bid]], [[RIPK1]], [[DISC]], [[UVRAG]], [[ORP1L]], [[Cytochrome c]], [[NF-κB]], [[IKKbeta]], [[NEMO]]
- Backlinks added from: [[Caspase-8]], [[STING]], [[PRDX1]], [[HIC1]]
- Suggested new entity notes to create: [[Heterodimerization]], [[Homo-oligomerization]], [[Protein-Protein Interface]], [[Quaternary Structure]], [[LFA-1]]
- Strong connections to strengthen: [[Homodimerization]] ↔ [[Caspase-8]], [[Homodimerization]] ↔ [[STING]], [[Homodimerization]] ↔ [[bHLH-LZ Transcription Factors]]
