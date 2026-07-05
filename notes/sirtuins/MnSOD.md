---
type: entity
category: protein
aliases:
  - SOD2
  - Manganese Superoxide Dismutase
  - Mn-SOD
  - MnSOD
database_ids:
  uniprot: P04179
  hgnc: HGNC:11180
relations:
  - predicate: deacetylates_and_activates
    target: "MnSOD"
    sources:
      - Tao 2010
      - Chen 2011
  - predicate: upregulates
    target: "MnSOD"
    sources:
      - Michan 2007
  - predicate: upregulates_via_AMPK
    target: "MnSOD"
    sources:
      - Kim 2020
  - predicate: inhibits
    target: "MnSOD"
    sources:
      - Luo 2017
created: 2026-07-04
updated: 2026-07-04
---

# Manganese Superoxide Dismutase (MnSOD/SOD2)

**Manganese Superoxide Dismutase (MnSOD/SOD2)** is the primary mitochondrial antioxidant enzyme responsible for dismutating [[Superoxide]] (O₂⁻) to hydrogen peroxide (H₂O₂) and oxygen. It is encoded by the nuclear [[SOD2]] gene and imported into the [[Mitochondria]] matrix, where it forms a homotetrameric complex essential for [[Mitochondrial]] redox homeostasis.

## Sirtuin Regulation

[[SIRT3]] deacetylates MnSOD at Lys68 and Lys122, dramatically increasing its ROS-scavenging activity. This deacetylation is enhanced by [[Honokiol]], a small-molecule SIRT3 activator. [[SIRT6]] upregulates MnSOD expression through [[AMPK]] activation. [[SIRT1]] contributes indirectly via [[FOXO3a]]-dependent transcriptional upregulation of SOD2. Conversely, [[SIRT4]] inhibits MnSOD activity through ADP-ribosylation, representing a counter-regulatory mechanism within the sirtuin network.

## Physiological Role

MnSOD is a frontline defense against mitochondrial [[Oxidative Stress]]. Loss of MnSOD is embryonic lethal in mice; heterozygous knockout models show increased [[DNA Damage]], [[Apoptosis]], and susceptibility to [[Cancer]], [[Neurodegeneration]], and [[Cardiovascular Disease]]. Activation of MnSOD by sirtuins, particularly SIRT3, is a key mechanism underlying [[Caloric Restriction]] and [[Exercise]]-induced longevity benefits.

## Connections

- [[SIRT3]] — Directly deacetylates MnSOD at K68/K122, boosting enzymatic activity
- [[SIRT1]] — Upregulates SOD2 transcription via FOXO3a signaling
- [[SIRT6]] — Upregulates MnSOD via AMPK-dependent pathway
- [[SIRT4]] — Inhibits MnSOD activity via ADP-ribosylation
- [[Resveratrol]] — Activates SIRT1/FOXO3a axis to upregulate MnSOD
- [[Honokiol]] — Small molecule activator of SIRT3, enhancing MnSOD deacetylation
- [[AMPK]] — Mediates SIRT6-driven MnSOD upregulation
- [[FOXO3a]] — Transcription factor mediating SIRT1-dependent SOD2 expression
- [[Oxidative Stress]] — Primary protection against, via superoxide dismutation
- [[Mitochondria]] — Primary subcellular localization and site of action

## Linking Summary

- New links added: [[MnSOD]], [[SOD2]], [[Honokiol]], [[Superoxide]], [[DNA Damage]], [[Apoptosis]], [[Neurodegeneration]], [[Cardiovascular Disease]], [[Caloric Restriction]], [[Exercise]], [[FOXO3a]]
- Suggested new entity notes to create: [[Mitochondrial Antioxidant Defense]]
- Strong connections to strengthen: [[SIRT3]] ↔ [[MnSOD]], [[SIRT1]]/[[FOXO3a]] ↔ [[MnSOD]]
