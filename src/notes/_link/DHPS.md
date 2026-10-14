---
title: DHPS
description: Deoxyhypusine synthase, the NAD-dependent enzyme that performs the first step of hypusine biosynthesis, transferring the 4-aminobutyl moiety of spermidine to a specific lysine (Lys50) on eukaryotic translation initiation factor 5A to form deoxyhypusine. Biallelic loss-of-function variants cause a neurodevelopmental disorder with seizures and hypotonia.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [enzyme, protein, post-translational-modification, translation, polyamine]
aliases: [Deoxyhypusine synthase, DHS, EC 2.5.1.46]
---

# DHPS

**Deoxyhypusine synthase** (DHPS; EC 2.5.1.46) is the rate-limiting enzyme of the [[Hypusination|hypusine pathway]]. It catalyses the first of two reactions that convert a specific lysine residue on [[eIF5A]] into the unusual amino acid hypusine — and, by doing so, converts eIF5A from an inactive protein into the functional translation factor.

> [!info] Mechanism
> DHPS performs an unusual NAD-dependent oxidative deamination coupled to a substrate transfer. It cleaves [[Spermidine]] and transfers its 4-aminobutyl group to the ε-amino group of Lys50 of eIF5A, generating an enzyme–substrate intermediate and the intermediate residue *deoxyhypusine*. The reaction requires NAD⁺ and releases 1,3-diaminopropane. The transferred aminobutyl moiety is later hydroxylated by [[DOHH]] to yield hypusine, and eIF5A is only functional in its hypusinated form. There is no free hypusine intermediate: DHPS and DOHH act sequentially on the same protein, and only that protein is the final acceptor.

> [!warning] The reaction is reversible
> Park et al. (2003, *JBC*) demonstrated that the DHPS reaction runs in reverse: incubating radiolabelled deoxyhypusine-bearing eIF5A with NAD⁺, 1,3-diaminopropane and DHPS regenerated unmodified eIF5A and released radiolabelled spermidine (or homospermidine). This reversibility is experimentally important — it means DHPS activity assays can be run in either direction — but its physiological significance in vivo is not established.

## Structure and substrates

DHPS functions as a **tetramer**. Substrate binding residues for spermidine, NAD⁺ and the critical catalytic Lys329 (the site of the covalent enzyme–substrate intermediate) have been mapped, and the human enzyme is highly conserved from yeast to mammals. Critical active-site residues include Asn173 and the Tyr305/Ile306 pair, both of which were shown to be functionally required in the human disease study below.

## Physiological role

- **Translation elongation.** Hypusinated eIF5A relieves ribosome stalling at polyproline-containing stretches of mRNA. Without it, translation of those transcripts stalls, and the full set of eIF5A-dependent transcripts is still not known.
- **Proliferation and differentiation.** eIF5A, hypusine, and DHPS are required for cell division and differentiation across species.
- **Inflammation and innate immunity.** Hypusinated eIF5A is differentially required in macrophage activation states and appears in the human protein atlas-type datasets as a regulator of inflammatory gene programmes.
- **Nutrient coupling.** The DHPS reaction consumes [[Spermidine]], so DHPS activity is directly coupled to polyamine pool size, which in turn is coupled to nutrient status. This is the structural link between dietary polyamines and the translational machinery.

## Pharmacology

- **GC7** (N¹-guanyl-1,7-diaminoheptane) is a competitive spermidine analogue with a Ki around 10 nM — roughly 400-fold below the Km for spermidine — and co-crystallisation confirmed it binds the DHPS active site. 1 µM GC7 inhibits over 97% of hypusine synthesis in cells. It has been used experimentally to induce hypoxia tolerance in mammalian cells, via a shift in metabolism toward glycolysis.
- **D ciclopirox, deferiprone and mimosine** are reported DOHH inhibitors rather than DHPS inhibitors, and are often used to probe the pathway at the second step.
- **Caveat on GC7:** at least one report (Oliverio et al. 2014) found GC7 induces autophagy through a mechanism that does *not* involve inhibition of eIF5A hypusination. Autophagy readouts from GC7 should therefore not be assumed to be hypusine-dependent.

## Clinical significance

> [!info] DHPS deficiency is a defined neurodevelopmental disorder
> Ganapathi et al. (2019, *Am J Hum Genet*) identified biallelic, recurrent, predicted likely pathogenic DHPS variants in five individuals from four unrelated families, all sharing a recurrent missense p.Asn173Ser in trans with a second loss-of-function allele. The consistent features were global developmental delay/intellectual disability (5/5), muscle tone abnormalities (5/5), abnormal EEG (5/5) and clinical seizures (5/5), with dysmorphic facial features, ataxic or spastic gait, and borderline low IgA/IgG in some. Recombinant p.Asn173Ser enzyme retained ~18–25% of wild-type activity, while p.Tyr305_Ile306del was inactive; both reduced eIF5A hypusination in HEK293T cells. Brain MRI was normal in those imaged, and birth anthropometrics were essentially normal.

Homozygous whole-body knockout of *Eif5a*, *Dhps* or *Dohh* is embryonic lethal in mice, confirming the pathway is essential for mammalian embryonic development — which is why [[Embryogenesis]] and this note are linked. A clinical review (2021, *Int J Mol Sci*) notes that DOHH's role in human disease was less well defined at that time; DOHH biallelic variants have since been reported in human disease, though the DHPS literature is the more extensive.

> [!warning] Clinical caveat
> There is no approved therapy targeting DHPS. Reduced hypusination is being pursued in cancer (where DHPS is a dependency and DHPS/DOHH are being explored as vulnerabilities), in inflammatory disease, and in neurodegeneration, but inhibition causes global translational suppression and is not currently a clinically viable intervention. The GC7/hypoxia-tolerance result is a cell-culture finding, not a drug.

## Documents

- [[Hypusination]] — the process of which DHPS is the first enzyme, and the note that carries the pathway context.
- [[eIF5A]] — the only substrate protein of physiological significance, and the reason DHPS matters beyond polyamine metabolism.
- [[Spermidine]] — the aminobutyl donor, and the point at which dietary polyamines feed into translation.
- [[Embryogenesis]] — Dhps-null mice are embryonic lethal, establishing the pathway as a developmental requirement.

## Connections

- [[DOHH]] — the obligate second enzyme of the same pathway. Neither can act alone: DHPS makes deoxyhypusine, DOHH hydroxylates it, and hypusination only completes if both act on the same eIF5A molecule.
- [[eIF5A]] — the single protein in the cell that carries hypusine. This extreme substrate specificity is what makes the pathway an unusually clean drug target and makes its conservation across eukaryotes so striking.
- [[Spermidine]] — DHPS is the direct consumer of the aminobutyl moiety, which is why polyamine supplementation and hypusine biology are inseparable topics in ageing and autophagy research.
- [[Polyamine]] — DHPS sits downstream of putrescine, [[Spermidine]] and [[Spermine]] metabolism, so polyamine pool regulation is upstream control of hypusine levels.
- [[Translation Initiation]] — hypusinated eIF5A acts at the ribosome during elongation, and its loss halts translation of polyproline-containing transcripts; this connects the pathway directly to proteome synthesis capacity and growth control.
- [[Mitochondrial Translation]] — eIF5A biology is not confined to cytosolic ribosomes, and mitochondrial translation has its own eIF5A-related requirements; the relationship is documented but not as well characterised as the cytosolic arm.
- [[Embryogenesis]] — knockout lethality in mice means this enzyme is required for the embryo to complete development, making hypusination a developmental prerequisite rather than a merely adult metabolic pathway.

## Linking Summary
- New links added: [[eIF5A]], [[DOHH]], [[Spermidine]], [[Spermine]], [[Putrescine]], [[Polyamine]], [[Translation Initiation]], [[Mitochondrial Translation]], [[Embryogenesis]], [[NAD+]], [[Protein Synthesis]]
- Suggested notes to create: [[eIF5A2]], [[Deoxyhypusine]], [[Hypusine]], [[GC7]], [[Deoxyhypusine Synthase Deficiency]], [[Polyamine Catabolism]]
- Strong connections to strengthen: [[eIF5A]] ↔ [[Translation Initiation]], [[Spermidine]] ↔ [[Autophagy]], [[DHPS]] ↔ [[DOHH]]
