---
type: entity
category: chemical
aliases: [cyclic ADP-ribose, cyclic adenosine diphosphate ribose]
database_ids:
  pubchem: 445207
  chebi: 16824
relations:
  - predicate: associated_with
    target: "[[CD38]]"
    sources: [pmc.ncbi.nlm.nih.gov/articles/PMC6102604/]
    created: 2026-07-03
    updated: 2026-07-03
  - predicate: associated_with
    target: "[[NAD+]]"
    sources: [pmc.ncbi.nlm.nih.gov/articles/PMC6102604/]
    created: 2026-07-03
    updated: 2026-07-03
---

# cADPR (Cyclic ADP-ribose)

**Cyclic ADP-ribose** (cADPR) is a novel cyclic nucleotide second messenger synthesized from [[NAD+]] by ADP-ribosyl cyclases, primarily [[CD38]] in mammals.

cADPR acts as a potent cellular signaling molecule, primarily regulating intracellular calcium ($Ca^{2+}$) homeostasis.

## Synthesis and Metabolism

cADPR is generated and degraded via a bifunctional pathway catalyzed by the membrane-bound ectoenzyme [[CD38]]:
1. **Cyclase Activity:** CD38 cyclizes NAD⁺ to form cADPR (representing ~2-3% of CD38's total NAD⁺ consumption).
2. **Hydrolase Activity:** CD38 hydrolyzes cADPR to form ADPR, terminating the second messenger signal.

Because CD38 has both activities, it tightly regulates the steady-state levels of intracellular cADPR.

## Physiological Functions

- **Intracellular Calcium Mobilization:** cADPR triggers calcium release from the endoplasmic reticulum (ER) into the cytosol. It does this by activating ryanodine receptors (RyRs) on the ER membrane, operating independently of the IP3 pathway.
- **Skeletal and Cardiac Muscle Contraction:** Regulates calcium transients critical for excitation-contraction coupling.
- **Pancreatic Insulin Secretion:** Acts as a key signal linking glucose metabolism to calcium influx, which triggers insulin granule exocytosis in pancreatic β-cells.
- **Social Behavior and Nurturing:** CD38-mediated cADPR signaling regulates the release of oxytocin from hypothalamic neurons into the bloodstream, impacting social memory, trust, and maternal behavior. CD38-deficient mice fail to release oxytocin and display profound social deficits.

## Role in Pathopathology and Cancer

In tumor microenvironments, elevated cADPR can promote cancer cell survival, migration, and proliferation (e.g., in lung cancer models). CD38-mediated cADPR accumulation and NAD⁺ depletion also foster immunosuppressive environments by empowering suppressor cells (like MDSCs and Tregs) while compromising the metabolic fitness of effector T and NK cells.

## Connections

- **[[CD38]]**: The primary enzyme responsible for both the synthesis and degradation of cADPR.
- **[[NAD+]]**: The precursor molecule from which cADPR is synthesized.
- **[[notes/_link/Apoptosis|Apoptosis]]**: Regulated by calcium fluxes modulated by cADPR.

## Linking Summary:
- New links added: [[CD38]], [[NAD+]], [[notes/_link/Apoptosis]]
- Suggested new entity notes to create: [[Ryanodine Receptors]], [[Oxytocin]]
- Strong connections to strengthen: [[cADPR]] ↔ [[CD38]], [[cADPR]] ↔ [[NAD+]]
