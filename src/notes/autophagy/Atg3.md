---
title: Atg3
description: Atg3 (Autophagy-related 3) is the E2 conjugating enzyme that transfers Atg8/LC3-family proteins from Atg7 to phosphatidylethanolamine, a lipid conjugation step unique to autophagosome membrane biogenesis.
protected: true
created: 2026-10-01
updated: 2026-10-01
tags: [protein, autophagy]
aliases: [ATG3, Apg3, hApg3p]
---

# Atg3

**Atg3** (Autophagy-related 3; yeast homologue Apg3, human HApg3p) is the **E2 conjugating enzyme** of the Atg8/LC3 lipidation cascade and the enzyme that makes this conjugation system unusual: instead of transferring Atg8 to a protein lysine, Atg3 transfers it to the **amine head group of phosphatidylethanolamine (PE)** in a membrane. Atg3 is therefore the point at which soluble Atg8 becomes membrane-bound, which is what makes autophagosome formation possible at all. It is a **single-pass membrane protein** anchored by an N-terminal transmembrane helix, which is how it is positioned to find PE on the phagophore surface.

## Structure & Domains

- **Catalytic (E2) conjugating domain** — contains the active cysteine (Cys264 in human Atg3), which forms the thioester intermediate with Atg8. This domain recognises the lipid substrate as well as the protein substrate.
- **Flexible region (FR), ~100 residues** — a largely unstructured segment N-terminal to the catalytic domain that binds the E1 enzyme **Atg7** to receive Atg8. Its flexibility is what allows conformational hand-off from Atg7.
- **Region interacting with Atg12 (RIA12)** — a ~30-residue stretch within the FR (visible residues 153–165) that binds the E3 complex. It forms a short intermolecular β-strand followed by an α-helix; **Met157** inserts into a narrow hydrophobic "M pocket" on Atg12, and Asp156/Glu158 salt-bridge to Atg12 Lys54.
- **Transmembrane helix** — localises Atg3 to the ER, where it first forms a complex with Atg7 and Atg8 to initiate lipidation, and to phagophore membranes thereafter.

## Mechanism of Action & Pathways

Atg8/LC3 processing runs as a ubiquitin-like cascade with a non-canonical E3:

1. **Proteolysis** — [[Atg4]] cleaves the C-terminal tail of Atg8/LC3 to expose Gly116.
2. **E1 activation** — the shared E1 enzyme [[Atg7]] adenylates Gly116 with ATP and forms a thioester with its own catalytic cysteine.
3. **E2 transfer to Atg3** — Atg7 transfers Atg8 to the catalytic cysteine of **Atg3**, giving the high-energy Atg8~Atg3 thioester intermediate.
4. **E3-stimulated transfer to lipid** — the **Atg12–Atg5–Atg16L1** complex acts as a **pseudo-E3**. Crucially, it does not recognise substrate the way a RING E3 does; instead **Atg12 recruits Atg3** via RIA12, physically positioning Atg3 on the correct membrane and enhancing reactivity of the Atg8~Atg3 thioester. Atg16L1 (with Atg16L2 forming an obligate dimer) scaffolds the ~800 kDa Atg12–Atg5–Atg16L complex onto the phagophore surface, which is what specifies *where* lipidation happens.
5. **Completion** — the aminopeptidase **ATG4B** then deconjugates a fraction of lipidated Atg8 from the outer autophagosome membrane, allowing it to be recycled back to cytosol.

> [!important] Lipidation targets the phagophore, not just "any PE"
> PE is abundant on essentially every membrane, so lipidation must be spatially restricted. The site is specified by membrane localisation of the Atg16L complex plus the Atg12–Atg3 interaction — forcing Atg16L to the plasma membrane drives ectopic LC3 lipidation there. This makes the Atg16L complex a novel kind of E3: one that **recognises a specific membrane** rather than a specific protein substrate.

> [!info] Evolutionarily distinct from ubiquitin
> Atg3's recognition of a lipid head group rather than a lysine side chain, and its reliance on E3-mediated *positioning* rather than substrate specificity, has led to the description of the Atg8 conjugation system as a distinct evolutionary solution to the same problem. ATG3 nevertheless shares the E2 fold with ubiquitin-conjugating E2s, and Atg7 with E1s, reflecting the single origin of these cascades.

## Physiological Function

- **Autophagosome membrane expansion.** Lipidated LC3/GABARAP on the phagophore promotes membrane hemifusion and elongation, and its N-terminal glycine drives the membrane curvature needed for closure.
- **Cargo recruitment.** Membrane-attached Atg8/LC3 provides the docking platform for cargo receptors carrying the LC3-interacting region (LIR) motif — the mechanism underlying selective autophagy via [[p62]]-type receptors.
- **Atg12 conjugation.** Atg3 is also an authentic E2 for a second substrate: it facilitates the E1-like transfer of Atg12 to Atg10's catalytic cysteine (and, in reconstituted systems, conjugation of Atg12 to Atg5), so it is required for formation of the Atg12–Atg5 conjugate that becomes the E3 for LC3 itself. The Atg12–Atg5–Atg16L1 "E3" is thus built by the enzyme it subsequently licenses.
- **Lipid homeostasis and membrane quality control.** Via LC3 lipidation, Atg3 participates in autophagosome formation, lysosome biogenesis, and membrane remodelling beyond bulk autophagy.

## Pathology & Clinical Relevance

- **Atg3 loss of function** blocks autophagosome formation and causes neurodegeneration in mice, with progressive behavioural phenotype, ubiquitin and p62-positive inclusion accumulation, and reduced lifespan — Atg3 knockout animals are viable but succumb early. Autophagosome-like structures accumulate but fail to mature into autolysosomes.
- **Autophagy-perturbing drugs as cancer therapy.** Atg3 is a validated genetic target; small-molecule inhibitors of its E2 activity are used as chemical probes, and its genetic deletion sensitises or resists depending on genotype — genetic Atg3 deletion drives protective autophagy in KRAS-driven lung tumour models, whereas complete Atg3 loss in some backgrounds promotes tumour growth. The direction is context-dependent.
- **Infectious disease.** Atg3-dependent LC3 lipidation underlies LAP (LC3-associated phagocytosis) and CASM (conjugation of ATG8 proteins to single membranes) — non-canonical Atg8 conjugation routes that Atg7/Atg3 also execute, and which pathogens exploit or that host cells use to restrict them.
- **Therapeutic leverage:** because the Atg8 conjugation machinery is a node distinct from the nutrient-sensing ULK1 and mTOR arms, Atg3 remains an active target for autophagy modulators.

> [!warning] Do not conflate Atg3 with Atg10
> Atg10 is the E2 for the Atg12–Atg5 conjugate; Atg3 is the E2 for Atg8/LC3. They are frequently confused in older literature and in casual summaries. Both are required for the same overall process, but neither substitutes for the other.

## Documents
- (no document notes yet)

## Connections
- [[Atg7]] — the shared E1 enzyme for both Atg8 and Atg12; Atg3's flexible region exists largely to bind Atg7 and accept the Atg8 thioester, so the two are structurally inseparable partners.
- [[Atg12]] — Atg12 supplies the Atg3-binding surface (M pocket, Lys54, Lys72, Trp73) and is the principal point of contact between the E2 Atg3 and the pseudo-E3 complex.
- [[Atg5]] — forms the covalent conjugate with Atg12 and contributes the composite surface patch with Atg12 required for E3 activity; both are upstream requirements for Atg3 function.
- [[Atg16L1]] — oligomerises into the ~800 kDa Atg12–Atg5–Atg16L1 scaffold whose membrane localisation dictates where Atg3 transfers Atg8 to PE.
- [[LC3]] — the substrate; lipidated LC3 on the phagophore drives membrane elongation and closure and provides the LIR docking surface for selective cargo recognition.
- [[Atg8]] — the yeast Atg8/LC3-family protein family; Atg3 conjugates GATE-16, GABARAP and MAP-LC3 as well as Atg8 itself.
- [[Phosphatidylethanolamine]] — the lipid acceptor that makes this conjugation system unique; Atg3's catalytic domain recognises the PE head group and transfers Atg8 onto its amine.
- [[Ubiquitination]] — the pathway this cascade most resembles in architecture (E1/E2/E3) while diverging in substrate chemistry, which is why the two are compared but never merged.
- [[Selective Autophagy]] — LC3 lipidation by Atg3 provides the membrane platform that LIR-containing cargo receptors bind, so Atg3 is upstream of cargo selection.
- [[Autophagy]] — the pathway Atg3 defines the conjugation chemistry of; loss of Atg3 blocks autophagosome formation outright.

## Linking Summary
- New links added: [[Atg7]], [[Atg12]], [[Atg5]], [[Atg16L1]], [[LC3]], [[Atg8]], [[GABARAP]], [[Atg4]], [[Phosphatidylethanolamine]], [[Ubiquitin]], [[Ubiquitination]], [[p62]], [[Selective Autophagy]], [[Autophagy]], [[Autophagosome]], [[Lysosome]], [[Mitophagy]], [[Proteasome]]
- Suggested notes to create: [[Atg10]], [[ATG16L2]], [[Phagophore]], [[Isolation Membrane]], [[E1 Enzyme]], [[Pseudo-E3]], [[LC3-associated Phagocytosis]], [[CASM]], [[Cargo Receptor]] — removed as already existing: Atg4B, Autolysosome, LIR Motif
- Strong connections to strengthen: [[Atg3]] ↔ [[Atg7]], [[Atg3]] ↔ [[Atg12]], [[Atg3]] ↔ [[LC3]], [[Atg3]] ↔ [[Autophagy]]
