---
type: entity
category: scientific_concept
entity_type: "Scientific Concept"
created: 2024-01-01
updated: 2024-07-04
---

# DNA Replication Stress

**DNA Replication Stress** describes a state of inefficient or stalled [[DNA Replication]] fork progression caused by impediments such as nucleotide depletion, DNA lesions, RNA-DNA hybrids ([[R-loops]]), transcription-replication conflicts, or oncogene-induced hyper-replication. It is a major source of [[Genomic Instability|genomic instability]] and a driving force behind [[Cellular Senescence]] and [[Cancer]].

## Molecular Sources

| Source | Mechanism | Example |
|---|---|---|
| **Nucleotide depletion** | Reduced dNTP pools slow polymerase progression | [[Hydroxyurea]] (RRM2 inhibition) |
| **DNA template lesions** | Bulky adducts, crosslinks block replicative polymerases | [[Cisplatin]]-DNA crosslinks, UV photoproducts |
| **Oncogene activation** | Unscheduled S-phase entry exhausts dNTPs and replisome components | [[RAS]]^G12V^, [[MYC]] overexpression |
| **R-loops** | RNA-DNA hybrids stall polymerases and cause DSBs | Loss of [[SETX]] or [[RNASEH2]] |
| **Replication-transcription collisions** | Convergent transcription and replication triggers fork collapse | Highly transcribed regions in cancer genomes |
| **Fragile site expression** | Difficult-to-replicate AT-rich sequences spontaneously break | [[FRA3B]], [[FRA16D]] |

## Signaling and Response

Replication stress is primarily detected by [[ATR]] kinase, which is activated by [[RPA]]-coated ssDNA at stalled forks. The ATR-[[CHK1]] pathway:
1. Stabilizes stalled forks by inhibiting [[CDK]] activity (preventing new origin firing).
2. Promotes dormant origin firing near stalled forks.
3. Suppresses [[CDK1]] to prevent mitotic entry with under-replicated DNA.
4. Drives [[p53]] stabilization if stress is unresolved.

## Replication Stress in Senescence

Persistent replication stress is a hallmark of [[Oncogene-Induced Senescence|OIS]]. In [[RAS]]^G12V^-expressing cells, hyper-replication causes chronic ATR-CHK1 activation, ultimately engaging [[p53]]-[[p21]] and [[p16INK4A]] to enforce permanent arrest. [[DNA Replication Stress]] also contributes to [[Replicative Senescence]]: as telomeres shorten, the telomeric replication fork encounters increasing difficulty, generating replication stress signals even before telomeres become critically short.

## Therapeutic Opportunities

- **Replication stress induction:** [[Chemotherapeutic|Chemotherapies]] like [[Gemcitabine]], [[Cytarabine]], and [[Hydroxyurea]] deliberately induce replication stress in cancer cells.
- **ATR inhibition:** [[AZD6738]] (Ceralasertib) and [[VE-822]] exploit baseline replication stress in cancer; synthetic lethality with [[ATM]] loss and [[CCNE1]] amplification.
- **CHK1 inhibition:** [[Prexasertib]] kills cancer cells with high replication stress.
- **Protecting normal cells:** [[Roscovitine]] (CDK inhibitor) reduces origin firing and protects against replication stress-induced damage in normal tissues.

### Linking Summary:
- New links added: [[DNA Replication]], [[Genomic Instability]], [[Senescence]], [[Oncogene-Induced Senescence]], [[R-loops]], [[ATR]], [[CHK1]]
- Suggested new entity notes to create: [[R-loops]], [[FRA3B]], [[FRA16D]], [[Fragile sites]]
- Strong connections to strengthen: [[DNA Replication Stress]] ↔ [[Oncogene-Induced Senescence]], [[DNA Replication Stress]] ↔ [[Senescence]]
