---
title: Reverse transcriptase
description: Reverse transcriptase is an RNA-dependent DNA polymerase (EC 2.7.7.49) that synthesizes DNA from an RNA template, the defining enzyme of retroviruses and retrotransposons and the catalytic core of telomerase.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - enzyme
  - protein
  - gene
aliases: [RNA-dependent DNA polymerase, RDDP, RT]
---

# Reverse transcriptase

**Reverse transcriptase** (RT) is an RNA-dependent DNA polymerase (EC 2.7.7.49) that copies an RNA template into complementary DNA. It was discovered independently in 1970 by Howard Temin (Rous sarcoma virus) and David Baltimore (murine leukemia virus), work that earned them the 1975 Nobel Prize in Physiology or Medicine with Renato Dulbecco. The discovery did not overturn the central dogma of molecular biology; it extended the permitted direction of information flow from RNA to DNA.

## Structure

Retroviral RT adopts the canonical right-hand polymerase fold with **fingers, palm, and thumb** subdomains, plus a C-terminal **RNase H domain** not found in most other viral polymerases. The enzyme is expressed as a single polypeptide that cleaves into two functional subunits: **HIV-1 RT** is a p66/p51 heterodimer, where p66 carries the catalytic sites and p51 is a structural arm that anchors the complex on the nucleic acid. Motile **Moloney murine leukemia virus** RT is a single ~75 kDa monomer, and **avian myeloblastosis virus** RT is a p95/p63 dimer.

> [!info] Mechanism
> Retroviral RT carries out three sequential activities in one enzyme: RNA-dependent DNA polymerase, RNase H (hydrolysis of the RNA template), and DNA-dependent DNA polymerase (synthesis of the second DNA strand). This dual-nuclease/polymerase architecture is what allows a single-stranded RNA genome to become double-stranded cDNA in the cytosol.

## Retroviral replication cycle

The tRNA primer anneals to the primer-binding site, RT extends it through the U5 and R regions, RNase H degrades the template, and the tRNA "jumps" to the 3′ end of the genome. After second-strand synthesis and primer transfer, linear double-stranded viral DNA is handed to [[Integrase]] for integration into the host genome. [[HIV-1]] is the canonical example; reverse-transcribing DNA viruses such as hepatitis B use a related polymerase in the opposite direction.

## Replication fidelity

> [!warning] Clinical caveat
> RT has **no 3′→5′ proofreading exonuclease**, so its error rate is orders of magnitude higher than that of replicative DNA polymerases. Commercially available M-MLV and AMV RTs are quoted at roughly 1 error per 17,000–30,000 bases. This is exactly why RT-based resistance emerges so rapidly in untreated [[HIV-1]]: most antiretroviral failure traces back to polymerase mutations. It is also why errors in RT-based cDNA synthesis generate spurious chimeric and antisense transcripts in the laboratory.

RT-driven **template switching** (copy-choice recombination) between the two RNA genomes packaged per virion occurs an estimated 5–14 times per genome per cycle, and appears to be required to maintain genome integrity rather than being a consequence of damage.

## Functions in cellular life

Three non-viral roles matter for the vault:

- **Telomerase.** The telomerase reverse transcriptase (TERT) extends the 3′ ends of linear eukaryotic chromosomes using an internal RNA template carried in the same ribonucleoprotein.
- **Retrotransposons.** LINE-1 and related elements copy themselves genome-wide through an RNA intermediate, which is why they are abundant in plant and animal genomes.
- **Prokaryotic retrons and DRT systems.** Bacteria and archaea use reverse transcriptases in retron-mediated msDNA synthesis and in defense-associated reverse transcriptase (DRT) ribonucleoprotein complexes that sense phage infection.

## Applications

RT underpins **RT-PCR**, cDNA library construction, and RNA-seq library prep. In 2016, directed evolution converted the proofreading *Thermus kodakarensis* DNA polymerase I into a proofreading **reverse transcribing xenotranscriptase (RTx)**, which copies and proofreads RNA templates; RTx is now commercially available and reduces RT-derived artifacts.

## Pharmacology

Because RT is essential to viral replication and largely absent from human cells, it is a high-value drug target. **Nucleoside/nucleotide analogues** such as zidovudine (AZT), lamivudine, and tenofovir are incorporated as chain terminators or obligate chain terminators after phosphorylation; **non-nucleoside inhibitors** such as nevirapine bind an allosteric pocket adjacent to the active site that does not overlap the nucleotide-binding site. These are grouped under [[Nucleoside Reverse Transcriptase Inhibitor]].

## Documents

- [[HIV-1]]
  - The virus note supplies the replication context in which RT is indispensable: without reverse transcription the viral genome cannot be converted to DNA for integration, and the absence of proofreading is the root cause of the resistance dynamics described in the pharmacology section.

## Connections

- [[HIV-1]] — HIV-1 encodes RT as part of its *pol* gene; the p66/p51 heterodimer is the structural paradigm for all studied retroviral RTs and the direct drug target of combination antiretroviral therapy.
- [[Telomerase]] — TERT is a specialized reverse transcriptase that carries its own RNA template, extending the ends of linear chromosomes instead of copying a viral genome.
- [[Retrotransposon]] — retrotransposons propagate by an RNA intermediate, requiring RT activity to reinsert a DNA copy at a new genomic site.
- [[Integrase]] — integrase acts immediately downstream of RT, converting the RT-generated linear double-stranded viral DNA into the integrated provirus.
- [[Nucleoside Reverse Transcriptase Inhibitor]] — the therapeutic class built directly on the chemistry of the RT active site, including both chain-terminating and allosteric inhibitors.
- [[Drug Resistance]] — the unproofread nature of RT makes viral quasispecies diversity and the speed of resistance acquisition a defining feature of the pathogen.

## Linking Summary

- New links added: [[HIV-1]], [[Integrase]], [[Telomerase]], [[Retrotransposon]], [[Nucleoside Reverse Transcriptase Inhibitor]], [[Drug Resistance]]
- Suggested notes to create: [[Zidovudine]], [[Tenofovir]], [[Nevirapine]], [[RNase H]], [[RNA-dependent DNA polymerase]], [[Provirus]], [[cDNA]]
- Strong connections to strengthen: [[HIV-1]] ↔ [[Reverse transcriptase]], [[Reverse transcriptase]] ↔ [[Nucleoside Reverse Transcriptase Inhibitor]]
