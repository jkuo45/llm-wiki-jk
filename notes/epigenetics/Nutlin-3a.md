---
type: entity
category: chemical
entity_type: "Chemical Compound"
created: 2024-01-01
updated: 2024-07-04
---

# Nutlin-3a

**Nutlin-3a** is a potent, selective small-molecule inhibitor of the [[MDM2]]-[[p53]] interaction. By displacing p53 from MDM2 (the primary E3 ubiquitin ligase that targets p53 for proteasomal degradation), nutlin-3a stabilizes and activates [[p53|p53]], inducing cell cycle arrest, [[Cellular Senescence|senescence]], or [[Apoptosis|apoptosis]] depending on cellular context.

## Mechanism

Nutlin-3a occupies the p53-binding pocket of MDM2 with an IC50 of ~90 nM in biochemical assays. The binding mimics three key p53 residues (Phe19, Trp23, Leu26), competing with endogenous p53 for MDM2 binding. This leads to:

- Rapid p53 accumulation (detectable within 1–2 hours).
- Selective activation of p53 target genes ([[p21|CDKN1A/p21]], [[Bax]], [[Puma]], [[Noxa]], [[TIGAR]]).
- Cell cycle arrest predominantly at [[G1 Phase|G1/S]] via p21-mediated [[CDK2]] inhibition.

## Cellular Effects

| Concentration | Effect | Cell type dependence |
|---|---|---|
| 5–10 µM (48–72 h) | Senescence ([[SA-beta-gal]]+, [[SASP]]+), persistent arrest | [[HFF1]] fibroblasts, [[DLD1]] colon cancer |
| 10–20 µM (24–48 h) | Apoptosis | [[SJSA-1]] osteosarcoma (p53^WT^, MDM2-amplified) |
| 20+ µM | Mixed cell death (apoptosis + necrosis) | High p53 activation in most cell types |

## Research Applications

Nutlin-3a is the most widely used tool for activating wild-type p53 without causing [[DNA Damage|DNA damage]] (unlike [[Doxorubicin]] or [[Etoposide]], which activate p53 indirectly through the [[DNA Damage Response|DDR]]). This allows dissection of:

- p53-dependent senescence vs. [[DDR]]-dependent senescence.
- p53 target gene specificity (which targets drive senescence vs. apoptosis).
- p53-mediated [[Epigenetic Remodeling|epigenetic remodeling]] during senescence (recruitment of [[DNMT3a]], [[HDAC1]], [[P300]]).

## Limitations

- Cells with mutant p53 or [[MDM2 amplification]] are insensitive.
- Nutlin-3a is rapidly cleared in vivo (short half-life), limiting preclinical studies.
- Sustained p53 activation can select for p53-mutant clones.
- [[MDM4]] can partially compensate for MDM2 inhibition in some cell types.

### Linking Summary:
- New links added: [[p53]], [[Senescence]], [[Apoptosis]], [[MDM2]], [[p21]]
- Suggested new entity notes to create: [[MDM4]], [[Puma]], [[Noxa]], [[Nutlin-3]]
- Strong connections to strengthen: [[Nutlin-3a]] ↔ [[p53]], [[Nutlin-3a]] ↔ [[Senescence]]
