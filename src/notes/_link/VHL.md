---
title: VHL
description: 'VHL (von Hippel-Lindau) is a tumor suppressor and the substrate receptor of
  the Cullin-2-RING E3 ubiquitin ligase. Its beta domain binds hydroxylated
  HIF alpha prolines, marking them for polyubiquitination and proteasomal
  degradation; loss of VHL constitutively activates HIF and underlies most
  clear cell renal cell carcinomas.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - tumor-suppressor
  - ubiquitin-ligase
aliases: [Von Hippel-Lindau, VHL protein, pVHL, VHL tumor suppressor, RH1]
---

# VHL

The **von Hippel-Lindau (VHL)** protein is a tumor suppressor and, in its
best-characterized role, the **substrate receptor** of a Cullin-RING E3
ubiquitin ligase. By recognizing hydroxylated prolines on the hypoxia-
inducible factors, VHL makes the cell's oxygen sensor out of the
ubiquitin–proteasome system: under normoxia the HIF-α subunits are destroyed;
under hypoxia they survive and drive a transcriptional program of
[[Angiogenesis]], glycolysis and [[Erythropoietin]] production.

## Structure and domains

pVHL is 213 residues (canonical isoform) and has three functional regions:

- **N-terminal region (1–~54).** Disordered in most structures; contains the
  **Φp box**, which is neddylated (SUMO-like) on Lys159 and mediates
  fibronectin binding — a non-degradation function whose loss is itself
  oncogenic.
- **α domain (~55–157).** A compact helical fold; interacts with
  ElonginC. Many VHL disease mutations cluster here.
- **β domain (~158–213).** An elongated β-sheet sandwich, resembling a
  TIM barrel, whose hydrophobic core contains the **hydroxyproline-binding
  pocket**. Also carries the **BC box** and **cullin box** motifs that engage
  ElonginC and Cullin-2. Type 1 VHL disease mutations — which retain
  ElonginC/Cul2 binding but destroy HIF binding — cluster in the β domain,
  including a mutational patch on a separate surface indicating a second
  macromolecular binding site.

VHL binds ElonginC and ElonginB through the α domain, forming the VCB
heterotrimer; ElonginB/C recruit Cullin-2, which with Rbx1 forms the complete
CRL2^VHL ligase. A 2017 structure of the whole pentameric CRL2^VHL complex
shows Cul2 with its characteristic elongated N-terminal repeat domain and
C-terminal winged-helix domain, Rbx1 at the far end, and VHL-ElonginBC bound
at the N-terminus.

## Mechanism

1. Under normoxia, **prolyl hydroxylase domain (PHD) enzymes** hydroxylate
   specific prolines — **Pro402 and Pro564** in HIF-1α's oxygen-dependent
   degradation (ODD) region — using Fe²⁺, 2-oxoglutarate and O₂.
2. The hydroxyproline inserts into the gap in the pVHL β-domain hydrophobic
   core. Its 4-hydroxyl is recognized by **buried serine and histidine**
   residues through optimized hydrogen bonding, which is what makes the
   interaction discriminate hydroxylated from unmodified proline.
3. HIF binds pVHL in an extended β-strand-like conformation, adding a β-sheet
   interface to the hydroxyproline contacts.
4. The CRL2^VHL complex polyubiquitinates HIF-α, which is then degraded by
   the [[Proteasome]].
5. Under [[Hypoxia]], PHD enzymes are oxygen-limited, unmodified HIF-α is
   not captured, HIF-α accumulates, dimerizes with HIF-β, and activates
   hypoxia-response genes.

> [!important] Oxygen sensing is an enzymatic measurement
> The hydroxylation step consumes O₂ and 2-oxoglutarate, so PHD enzymes
> literally measure oxygen availability — and, because PHDs are
  Fe²⁺/2-oxoglutarate-dependent dioxygenases, they are therefore also wired to
> [[Iron]] and to the TCA cycle. This is why oncometabolites matter: fumarate,
> succinate and 2-hydroxyglutarate inhibit PHDs and phenocopy VHL loss.

VHL also directs the degradation of several other substrates — including
[[Cyclin D]], [[p53]] in some contexts, and atypical PKC isoforms — and
participates in microtubule organization and ciliary function.

## Disease and clinical relevance

**Von Hippel-Lindau disease** is autosomal dominant (VHL gene, chromosome
3p25.3), with high penetrance and marked phenotypic variability. Germline
variants are classified into **type 1** (HIF binding preserved; predisposition
to [[Pheochromocytoma]] and pancreatic neuroendocrine tumors),
**type 2** (HIF binding lost; high clear cell [[Renal Cell Carcinoma]] risk),
and type 2A/2B/2C subdivisions.

> [!info] The RCC paradigm
> Loss of VHL is the initiating event in the majority of sporadic **clear cell
> renal cell carcinoma** and essentially all VHL-associated RCC. Constitutive
> HIF-2α signaling drives VEGF, PDGF, erythropoietin and metabolic
> reprogramming; interestingly, HIF-1α itself acts as a kidney cancer
> suppressor, so the phenotype is HIF-2α-driven. IHC for VHL loss (with
> internal positive controls such as fat, endothelium, and tubular cells) is a
> standard diagnostic criterion. Other VHL-associated lesions include
> hemangioblastomas of the cerebellum and retina, and clear cell renal and
> epididymal cystadenomas.

- **Therapy.** Anti-angiogenic and receptor-targeted agents dominate: VEGF
  inhibitors, [[Sunitinib]], Pazopanib, and mTOR inhibitors such as
  [[Everolimus]] for anti-VEGF-refractory disease. Belzutifan, a selective
  **HIF-2α inhibitor**, is approved for VHL-associated renal cell carcinoma
  and is the first drug to target the downstream transcription factor rather
  than the pathway's output. It exploits the dependency on HIF-2α dimerization
  that pVHL normally blocks.
- **Beyond oncology.** Inhibiting the pVHL–HIF axis to raise
  [[Erythropoietin]] is under investigation for anemia of chronic kidney
  disease and for ischemia. The same pathway governs the hypoxic
  [[Aging]] literature: HIF stabilization is part of the
  [[Intermittent Fasting]] response, so the PHD enzymes are also
  nutrient- and redox-sensitive — and pharmacologically accessible
  ("HIF-PH inhibitors") in a way that pure HIF activation is not.

## Documents

- (no document notes yet)

## Connections

- [[VEGFR]] — HIF-driven VEGF expression is the dominant effector arm of VHL loss, and the basis for anti-angiogenic therapy.
- [[Angiogenesis]] — the physiological output of HIF stabilization that VHL normally suppresses.
- [[Hypoxia]] — the input that disables PHD enzymes and thereby disengages VHL from HIF; the two are mechan inseparable.
- [[Renal Cell Carcinoma]] and [[Clear cell renal cell carcinoma]] — the tumor type in which VHL loss is the initiating lesion.
- [[E3 Ubiquitin Ligase]] — VHL is the substrate receptor, not the enzyme, of the Cullin-2-RING ligase it recruits.
- [[Ubiquitin-Proteasome System]] — the downstream machinery that executes VHL's degradation signal.
- [[Proteasome]] — the terminus of the VHL-HIF axis; degradation is how oxygen levels become a transcriptional decision.
- [[Iron]] — PHD enzymes are Fe²⁺/2-oxoglutarate dioxygenases, wiring VHL function to iron and TCA-cycle metabolites.
- [[Pheochromocytoma]] — a hallmark lesion of VHL disease type 1.
- [[Ubiquitination]] — the chemical step VHL exists to trigger.
- [[mTORC1]] — VHL loss raises mTORC1 output indirectly; the two tumor suppressor axes intersect in clear cell RCC.

## Linking Summary

- New links added: [[VEGFR]], [[VEGF]], [[Angiogenesis]], [[Hypoxia]], [[Renal Cell Carcinoma]], [[Clear cell renal cell carcinoma]], [[E3 Ubiquitin Ligase]], [[Ubiquitin-Proteasome System]], [[Proteasome]], [[Iron]], [[Ferritin]], [[Pheochromocytoma]], [[Ubiquitination]], [[mTORC1]], [[Cyclin D]], [[p53]], [[Sunitinib]], [[Pazopanib]], [[Everolimus]], [[Erythropoietin]], [[Intermittent Fasting]], [[Aging]], [[Anemia]], [[Succinate Dehydrogenase]], [[Epidermal Growth Factor]], [[VEGFR2]]
- Suggested notes to create: [[HIF]], [[HIF-1alpha]], [[HIF-2alpha]], [[Prolyl Hydroxylase Domain]], [[Belzutifan]], [[Von Hippel-Lindau Disease]], [[Hemangioblastoma]], [[Cullin]], [[Elongin]], [[VHL-HIF Axis]], [[2-Hydroxyglutarate]], [[Succinate]], [[Fumarate]], [[Cellular Oxygen Sensing]]
- Strong connections to strengthen: [[VHL]] ↔ [[Hypoxia]], [[VHL]] ↔ [[Clear cell renal cell carcinoma]], [[VHL]] ↔ [[VEGFR]], [[VHL]] ↔ [[E3 Ubiquitin Ligase]]