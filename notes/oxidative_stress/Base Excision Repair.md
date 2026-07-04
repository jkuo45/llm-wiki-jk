---
type: entity
category: biological_process
aliases: [BER, DNA base excision repair]
created: 2026-07-04
updated: 2026-07-04
---

# Base Excision Repair

**Base Excision Repair (BER)** is the primary DNA repair pathway for correcting small, non-helix-distorting base modifications caused by [[notes/oxidative_stress/Oxidative Stress|oxidation]], alkylation, deamination, and depurination/depyrimidination.

## Pathway Mechanism

BER proceeds through a sequential multi-step process:

1. **Lesion Recognition & Base Removal**: A damage-specific DNA glycosylase (e.g., [[OGG1]] for 8-oxoG, [[NTHL1]] for thymine glycol, [[UNG]] for uracil, [[NEIL1]]/[[NEIL2]] for oxidized pyrimidines) flips the damaged base into its active site and cleaves the N-glycosidic bond, creating an abasic (AP) site.
2. **AP Site Processing**: [[APE1]] (AP endonuclease 1) incises the DNA backbone 5′ to the AP site, generating a 3′-OH and a 5′-deoxyribose phosphate (5′-dRP) terminus.
3. **Gap Filling**: In **short-patch BER** (~85–90% of events), [[DNA Polymerase β]] incorporates a single nucleotide and removes the 5′-dRP moiety via its lyase activity. In **long-patch BER** (for blocked 5′-ends or reduced AP sites), [[DNA Polymerase δ]]/[[DNA Polymerase ε|ε]] synthesizes 2–13 nucleotides, displacing a flap that is cleaved by [[FEN1]].
4. **Ligation**: [[LIG3]]/[[XRCC1]] seals the nick in short-patch BER; [[LIG1]] seals in long-patch BER.

## Sub-pathways

| Feature | Short-Patch BER | Long-Patch BER |
|---------|----------------|----------------|
| Nucleotides replaced | 1 | 2–13 |
| Polymerase | Pol β | Pol δ/ε |
| Flap endonuclease | — | FEN1 |
| Ligase | LIG3/XRCC1 | LIG1 |
| Preferred lesions | Clean AP sites, 5′-dRP | Oxidized/reduced AP sites |

## Clinical Relevance

- **[[Cancer]]**: BER deficiency increases mutation rates and cancer risk. Polymorphisms in [[OGG1]] (Ser326Cys), [[XRCC1]] (Arg399Gln), and [[APE1]] (Asp148Glu) are associated with elevated risk of lung, breast, and colorectal cancers.
- **[[notes/_link/Aging]]**: BER capacity declines with age in multiple tissues, contributing to age-related accumulation of oxidative DNA damage, [[notes/_link/Genomic Instability|genomic instability]], and [[notes/oxidative_stress/Neurodegeneration|neurodegeneration]].
- **[[notes/oxidative_stress/Neurodegeneration]]**: Impaired BER in post-mitotic neurons leads to accumulation of oxidative lesions, mitochondrial DNA damage, and neuronal loss in [[notes/_link/Alzheimer's Disease]] and [[notes/_link/Parkinson's Disease]].
- **Therapeutic Exploitation**: [[Methoxyamine]] (AP site trap) sensitizes cancer cells to alkylating agents by blocking BER; [[PARP inhibitors]] exploit BER defects in [[BRCA]]-mutant cancers through synthetic lethality.
