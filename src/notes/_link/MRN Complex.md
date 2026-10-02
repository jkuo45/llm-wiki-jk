---
title: MRN Complex
description: The MRN complex is the MRE11-RAD50-NBS1 heterotrimer, the primary sensor of DNA double-strand breaks and the activator of ATM, coordinating end resection for homologous recombination repair, alternative end joining, and telomere maintenance.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags:
  - protein-complex
  - dna-repair
  - genome-stability
aliases: [MRE11-RAD50-NBS1 complex, MRE11/RAD50/NBS1 complex, MRN]
---

# MRN Complex

The **MRN complex** — MRE11, RAD50, and [[NBS1]] — is a heterotrimeric nuclear complex and the cell's primary sensor of DNA **double-strand breaks (DSBs)**. It is the obligatory first responder at a break: it binds the DNA ends, changes conformation, and recruits and activates [[ATM]], which then phosphorylates hundreds of substrates to launch the [[DNA Repair]] response. It is also the active nuclease that initiates **end resection**, the reaction that determines whether the break is repaired by error-free [[Homologous recombination repair]] or by error-prone end joining, and therefore whether the repair is accurate at all.

> [!info] Conserved from yeast to human, named for its mutants
> The complex is named for the meiotic recombination (*mre11*), radiation sensitivity (*rad50*), and Nijmegen breakage syndrome (*nbs1*) yeast mutants. Orthologs (called Rad50–Xrs2–Mre11 in budding yeast) are present in essentially all eukaryotes, and the yeast work that identified the end-resection mechanism earned a Nobel Prize. Human MRE11 loss-of-function causes ataxia-telangiectasia-like disorder (ATLD); biallelic *NBN* mutation causes Nijmegen breakage syndrome.

## Subunits & Structure

- **MRE11** — the catalytic core. A homodimer with an N-terminal nuclease domain (Mn²⁺-dependent 5′→3′ exonuclease plus an endonuclease activity) and a C-terminal barrel domain. MRE11 does not function alone: it is constitutively bound by RAD50, and the MRE11–RAD50 heterodimer is the minimal functional unit.
- **RAD50** — an ATPase and coiled-coil structural scaffold. Its ATPase cycle (ABC ATPase signature) drives MRE11 activation and couples the enzyme to DNA. It forms an extended coiled-coil that self-assembles into a ~60 nm head-coiled-coil-head architecture, dynamically switching between a closed ATP-bound dimer and an extended open form that bridges two DNA ends from distant genomic loci.
- **NBS1** — the regulatory and signaling subunit and principal ATM activator. It is a WD40-repeat and FHA (forkhead-associated) domain protein that binds MRE11/RAD50 through its N-terminal FHA domain and recruits [[ATM]] through SH2/PTB-like domains. It is the most heavily regulated of the three, including by phosphorylation at multiple sites.

> [!important] Stoichiometry and the "head" architecture
> Native complexes are predominantly MRE11₂RAD50₂NBS1₂. The long RAD50 coiled-coil can bridge widely separated DNA sites, which is why MRN is implicated not only in break repair but in telomere maintenance, R-loop resolution, and even antigen receptor rearrangement. The existence of higher-ordered and dynamic assemblies has been a persistent source of disagreement in the field.

## Mechanism of Action & Pathways

**Break recognition.** MRN's ATPase-driven conformational change upon loading onto a DSB is the initiating event for the DNA damage response. Cooperative loading is regulated by OB-fold proteins that bend DNA ends and by long-range end tethering.

**ATM activation.** MRN recruitment brings ATM into DNA-proximal proximity, allowing ATM kinase to autophosphorylate and dissociate from MRN in active monomers that phosphorylate substrates including [[p53]], Chk2, NBS1 itself, and the histone variant H2AX (γ-H2AX, a widely used DSB marker).

**End resection — the commitment step.** MRN nuclease activity degrades the 5′ strand of the broken duplex, generating 3′ single-stranded tails. This converts the break from a blunt/ligatable substrate into one with an initiating region for RAD51 filament assembly. MRE11's exonuclease activity is essential, and its endonuclease activity is required for processing hairpins, forks, and some internal lesions. In budding yeast, and by analogy in mammals, resection is coordinated with the 5′→3′ helicase/nuclease activities of BLM–DNA2 and EXO1, with MRE11 acting in the initial phase; the exact division of labor across organisms is not fully settled.

**Branch choice.** Efficient resection commits the break to homologous recombination; failure to resect biases toward classical non-homologous end joining (c-NHEJ) or microhomology-mediated end joining (alt-EJ/MMEJ). This makes MRN nuclease activity the switch between high-fidelity and error-prone repair.

**Telomere and replication-fork roles.** MRN is required for telomere maintenance and for replication fork protection; MRN-deficient cells show telomere replication defects, replication catastrophe, and pronounced sensitivity to ionizing radiation.

> [!warning] Dose- and context-dependent tumor biology
> MRN loss or dysfunction is a double-edged cancer feature. Loss enables genomic instability and mutational burden, but MRN deficiency also generates the replication stress and DSB dependence that creates PARP-inhibitor sensitivity. Conversely, MRN overexpression and elevated MRE11 have been associated with more aggressive phenotypes in several tumor types, and NBS1 accumulation at specific loci can be protective (PMID: 42715307). Attempts to exploit MRE11 deficiency for synthetic lethality are ongoing (PMID: 42401578).

## Physiological Function

- Initiates the DNA damage response to DSBs from ionizing radiation, radiomimetics, replication stress, and programmed V(D)J recombination.
- Couples [[Telomere]] capping to replication-fork protection, preventing telomere end-to-end fusions and catastrophic telomere loss.
- Resects stalled replication forks and R-loops/R-DNA hybrids to permit their resolution; NBS1 recruitment to ribosomal DNA loci has been reported as an oxidative-stress-responsive safeguard of the nucleolar genome (PMID: 42715307).
- Interfaces with the [[cGAS-STING Pathway]] indirectly: micronuclei and cytosolic DNA arising from failed repair are processed by cGAS, making repair failure upstream of innate immune activation.

## Pathology & Clinical Relevance

- **Nijmegen breakage syndrome (biallelic *NBN*)** — microcephaly, distinctive facial appearance, short stature, immunodeficiency (particularly combined immunodeficiency with T-cell lymphopenia), radiosensitivity, cancer predisposition (notably lymphoid malignancy), and elevated chromosomal instability with the diagnostic 7;14 and 5;14 rearrangements involving immunoglobulin loci.
- **Ataxia-telangiectasia-like disorder (*MRE11* deficiency)** — milder than classical ataxia-telangiectasia, with ataxia and elevated cancer risk.
- **Rhabdoid tumor predisposition / *RAD50* and *MRE11* heterozygous variants** — associations with breast and ovarian cancer risk are reported but remain incompletely quantified.
- **Cancer therapy.** MRN status is being pursued as a predictive biomarker for [[PARP inhibitors]] and related DNA-repair-targeted agents, and MRN-depleted cells show distinct sensitivity to topoisomerase inhibitors and radiation.

> [!warning] What is established vs. proposed
> The core biochemistry — MRE11 nuclease activity, RAD50 ATPase coupling, NBS1-mediated ATM activation, and resection's role in branch choice — is well established. More speculative applications (MRE11 as a universal synthetic-lethal biomarker; MRN as a broad therapeutic target) are active research areas, not settled indications.

## Documents

- (no document notes yet)

## Connections

- [[NBS1]] — MRN's regulatory and ATM-activating subunit; the vault's NBS1 note and this note are the two halves of the same complex and should be cross-referenced in both directions.
- [[ATM]] — the principal kinase activated by MRN at DNA-proximal location; the MRN→ATM step is the initiating event of the whole DNA damage response.
- [[DNA Repair]] — MRN is the entry point for double-strand break repair and the switch that commits a break to resection-dependent homologous recombination.
- [[Homologous recombination repair]] — depends entirely on MRN-catalyzed end resection to generate the 3′ ssDNA that RAD51 coats; without resection, high-fidelity repair cannot proceed.
- [[Genomic Instability]] — MRN deficiency produces chromosomal instability, radiosensitivity, and cancer predisposition, making it a direct mechanistic link between repair failure and tumor biology.
- [[cGAS-STING Pathway]] — DSBs misrepaired or left unrepaired generate micronuclei and cytosolic DNA, which cGAS processes; MRN loss therefore feeds directly into innate immune signaling, relevant to the senescence and [[Inflammaging]] axis.
- [[PARP inhibitors]] — MRN deficiency creates replication-associated DSBs that PARP inhibitors exploit, positioning MRN status as a biomarker for PARP-targeted therapy.

## Linking Summary

- New links added: [[NBS1]], [[ATM]], [[DNA Repair]], [[Homologous recombination repair]], [[Genomic Instability]], [[cGAS-STING Pathway]], [[PARP inhibitors]], [[p53]], [[Inflammaging]]
- Suggested notes to create: [[MRE11]], [[RAD50]], [[Nijmegen Breakage Syndrome]], [[End Resection]] (already flagged as a needed stub by the [[Homologous recombination repair]] note), [[RAD51]], [[PARP inhibitors]], [[Replication Fork]], [[Telomere]], [[R-loop]], [[53BP1]] (exists in the vault — reconcile and cross-link rather than duplicate)
- Strong connections to strengthen: [[NBS1]] ↔ [[MRN Complex]] (reciprocal link; the NBS1 note predates this one and currently has no partner), [[ATM]] ↔ [[MRN Complex]], [[Homologous recombination repair]] ↔ [[MRN Complex]] (the resection dependency is the mechanistic core and is currently unrecorded on the HR note).