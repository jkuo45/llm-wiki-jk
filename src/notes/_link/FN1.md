---
title: FN1
description: FN1 encodes fibronectin, the high-molecular-weight extracellular matrix glycoprotein whose integrin-binding type III repeats carry cell adhesion, mechanotransduction, and both pro- and anti-fibrotic signalling, and whose plasma isoform drives fibrin clot retraction.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - gene
  - protein
  - extracellular-matrix
  - fibrosis
aliases:
  - fibronectin
  - FN
  - cold-insoluble globulin
  - alpha 2 macroglobulin
---

# FN1

FN1 is one of the largest and most heavily studied genes in the human genome.
It encodes [[Fibronectin]], an ~500-600 kDa extracellular matrix (ECM)
glycoprotein that exists as a soluble plasma protein (from hepatocytes) and as
fibrillar strands deposited in tissue (from local cells). The gene spans
roughly 75 kb with 30+ exons; alternative splicing is extensive and heavily
regulated, and the *extra domain A* (EDA) and EDB regions are the best-known
casual splice switches.

## Domain structure and what each part does

Fibronectin is a tandem array of type I, type II, and type III homology modules.
Function maps cleanly onto the module map:

- **FnI1-5** - the assembly domain. Required for fibronectin to self-assemble
  into fibrils, and the site through which neighbouring fibronectin molecules
  polymerise.
- **FnI6-9** - collagen-binding domain. Links fibronectin fibrils to
  [[Collagen]].
- **FnI10-12, FnIII13-14** - fibrin and heparin/heparan-sulfate-proteoglycan
  binding. This is how soluble plasma fibronectin (which lacks most FnI
  modules) captures [[Fibrinogen]] and [[Heparin]]-like glycosaminoglycans at a
  wound.
- **FnIII9-10** - the cell-binding domain. **FnIII10** carries the RGD motif
  recognised by [[Integrins|integrins]] alpha5beta1 and alphaVbeta3;
  **FnIII9** carries the PHSRN synergy site ~32 Angstrom away.

> [!info] The RGD plus synergy logic
> RGD alone gives weak, low-affinity adhesion. The synergy site converts
> binding to alpha5beta1 into high-affinity, force-resistant binding - and
> because the two sites are on adjacent modules joined by a hinge, mechanical
> stretching of the molecule changes the inter-site distance and with it the
> binding energy. Fibronectin is therefore a mechanotransducer, not just an
> adhesive: the integrin-fibronectin bond transmits cytoskeletal force to the
  ECM and ECM tension back to the cell, through the actin cytoskeleton
  downstream.

## EDA/EDB splicing and the fibrosis switch

The EDA/EDB domains are cryptic splice exons whose inclusion is controlled by
[[TGF-beta1|TGF-β]] and by mechanical tension via the actomyosin cytoskeleton.
This is the mechanistically important part of FN1 regulation:

- **EDA included -> pro-adhesive state.** Alpha5beta1 engagement activates
  FAK, PI3K and [[PI3K-Akt Signaling|AKT]], suppresses the nuclear
  translocation of the myocardin-related transcription factor MRTF-A (via
  GEF-H1/RhoA/ROCK), and thereby *reduces* alpha-SMA expression. The
  fibronectin-coated surface promotes proliferation.
- **EDA excluded -> pro-differentiation state.** Loss of EDA releases
  MRTF-A from GEF-H1 sequestration, allowing nuclear MRTF-A to act with
  [[Serum Response Factor|SRF]] and drive [[ACTA2]] and smooth-muscle differentiation.

This makes FN1 expression itself ambivalent in fibrosis: more fibronectin does
not simply mean "more fibrotic." The splice isoform is the variable that
matters.

> [!info] Relationship to the TGF-beta axis
> [[TGF-beta1]] is a direct transcriptional inducer of FN1 through
> [[SMAD3]]-dependent and SMAD-independent routes, so FN1 sits downstream of the
  master profibrotic cytokine. [[TIMP1]] is co-induced by the same axis and
  blocks matrix metalloproteinase activity, so ECM is both increased and
  protected from turnover - which is precisely the combination that produces
  progressive fibrosis rather than remodelling.

## FN1 in disease

- **Fibrosis**: FN1 is a canonical fibrosis gene. Elevated plasma and tissue
  fibronectin accompanies [[Cardiac Fibrosis]], [[Pulmonary Fibrosis]],
  [[Idiopathic Pulmonary Fibrosis]], liver fibrosis, and kidney fibrosis.
- **Wound healing and the clot**: plasma fibronectin is deposited in the
  fibrin clot and cross-links it; it is essential for the clot to anchor
  [[Platelet|platelets]] and fibroblasts to the wound. The long EDA isoform,
  EDA+/EDB+, is markedly pro-inflammatory and is present in plasma at
  elevated levels in rheumatoid arthritis and other inflammatory states.
- **Cancer**: tumour cells and tumour stroma over-express FN1, and aberrant FN1
  is used as a preclinical plasma biomarker. The ECM is a critical component of
  the [[Tumor Microenvironment]].
- **Development**: FN1 is required for embryogenesis - *Fn1* null mice die
  around implantation with multiple mesodermal defects - and is a core
  component of [[ECM]] remodelling during [[Wnt]] and BMP-driven development.
- **Vascular biology**: endothelial cells deposit FN1 during angiogenesis
  sprouting and vessel stabilisation.

## Connections

- [[Fibronectin]] — the protein encoded by this gene; the two notes describe the
  same entity from gene and protein standpoints respectively.
- [[Integrins]] — alpha5beta1 (RGD + synergy) and alphaVbeta3 (RGD alone) are
  the effectors; the RGD motif is the most-used integrin-recognition handle in
  drug delivery research.
- [[ECM]] and [[Extracellular Matrix]] — fibronectin is a core structural
  component and, through the RGD-actomyosin axis, a regulator of how much ECM
  gets made.
- [[Collagen]] — bound via FnI6-9; collagen and fibronectin co-assemble, which is
  why fibronectin loss alone does not rescue fibrotic phenotypes in every model.
- [[Fibrinogen]] — plasma fibronectin binds fibrin via FnI10-12 and is required
  for normal clot-to-wound anchoring.
- [[TGF-beta1]] and [[SMAD3]] — the upstream transcriptional drivers of FN1,
  and the reason FN1 is a fibrosis read-out as well as a fibrosis effector.
- [[TIMP1]] — co-induced by the same TGF-beta programme; blocks ECM turnover
  while FN1 increases ECM supply.
- [[ACTA2]] — the differentiation marker that EDA exclusion drives via MRTF-A
  and SRF.
- [[Cell Membranes]] — the plasma membrane and cytoskeleton interface through
  which integrin-mediated force is transmitted.
- [[Wnt]] and [[BMP]] — cooperate with FN1 during morphogenesis; ECM
  composition feeds back into their transcriptional programmes.
- [[VEGFR]] — endothelial sprouting requires fibronectin-integrin engagement
  on the matrix.
- [[Tumor Microenvironment]] — stromal FN1 supports invasion and defines the
  basement-membrane niche.

## Documents

- [[SMAD3]] — documents the SMAD3-dependent transcriptional induction of FN1
  and the non-canonical routes alongside it.
- [[TGF-beta1]] — supplies the upstream profibrotic signal, including the FN1
  induction alongside COL1A1, COL3A1, ACTA2, and TIMP1.
- [[TIMP1]] — the co-induced ECM-degradation brake that makes FN1 induction
  translate into net matrix accumulation.
- [[_document_ - RGD peptide in cancer targeting Benefits, challenges, solutions, and possible integrin–RGD interactions]] — covers the RGD motif as a drug-targeting handle and the integrin biology that FN1 is the reference ligand for.

## Linking Summary

- New links added: [[Fibronectin]], [[Integrins]], [[ECM]], [[Extracellular Matrix]], [[Collagen]], [[Fibrinogen]], [[Heparin]], [[TGF-beta1]], [[SMAD3]], [[TIMP1]], [[ACTA2]], [[Cell Membranes]], [[Wnt]], [[BMP]], [[VEGFR]], [[Platelet]], [[Cardiac Fibrosis]], [[Pulmonary Fibrosis]], [[Idiopathic Pulmonary Fibrosis]], [[Tumor Microenvironment]], [[PI3K-Akt Signaling]], [[Serum Response Factor|SRF]]
- Orphan link normalised: the RGD document was linked with a spurious colon; corrected to the exact filename stem.
- Suggested notes to create: [[Extra domain A]], [[Integrin alpha5beta1]], [[Myocardin]], [[MRTF-A]], [[Serum Response Factor]], [[FAK]], [[EDB]]
- Strong connections to strengthen: [[FN1]] <-> [[Fibronectin]] (near-duplicate pair: consider merging, keeping the FN1 file as the gene record and the fibronectin file as the protein record), [[FN1]] <-> [[TGF-beta1]] (the EDA splice switch is currently only in this note)
