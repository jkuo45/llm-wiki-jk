---
title: Cell-Penetrating Peptide
description: A short (roughly 5-40 residue), typically cationic or amphipathic peptide that crosses biological membranes and escorts covalently linked or non-covalently complexed cargo into the cytosol, most often by macropinocytosis with endosomal escape.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - biological-molecule
  - drug-delivery
aliases: [CPP, PTD, Protein Transduction Domain, Trojan peptide, Membrane translocating sequence]
---

# Cell-Penetrating Peptide

Cell-penetrating peptides (CPPs) are short water-soluble peptides, usually 5-40 amino acids, that are able to enter the interior of living cells and to deliver a membrane-impermeant cargo with them. They are used as vectors for proteins, nucleic acids, [[Nanoparticles]] and small molecules, and they are among the few non-viral options for getting hydrophilic cargo across the [[Plasma Membrane]].

## Discovery and the two founding sequences

The first demonstration came from [[HIV]]: Frankel and Pabo showed in 1988 that the transactivator of transcription protein of HIV-1 enters cells and reaches the nucleus. Mutational analysis of the full-length protein later isolated a short, highly basic, unstructured N-terminal segment, GRKKRRQRRR, that was necessary and sufficient for entry and cargo delivery; this became the [[TAT]] peptide (residues 47-57 of Tat). Independently, Prochiantz's group showed that the Drosophila Antennapedia homeodomain is internalised by neuronal cells, and in 1994 Derossi and colleagues defined the 16-residue third helix, RQIKIWFQNRRMKWKK, as the minimal internalisation motif and named it penetratin. Shortly afterwards, [[Transportan]] (a chimera of the galanin N-terminus and the wasp venom peptide mastoparan) and the synthetic non-covalent carriers Pep-1 and MPG were described, followed by the demonstration that poly-arginine oligomers such as R8/R9 are sufficient on their own.

> [!info] Why it matters
> CPPs are the standard way to test whether a candidate intracellular protein (a [[Kinase]], a transcription factor, an enzyme) is functionally active in the cytosol or nucleus, and they are the delivery platform for several nucleic-acid and RNA-interference therapeutics in development.

## Classification

Two orthogonal schemes are in common use.

By origin: protein-derived (Tat, penetratin, called protein transduction domains), chimeric (Transportan, Pep-1, M918), and synthetic (polyarginines, model peptides).

By physicochemical properties, following Eiriksdottir and colleagues:

- **Primary amphipathic** CPPs (Transportan, TP10) have sequential hydrophobic and hydrophilic residues in the primary sequence and are typically >20 residues. They are the most membrane-disruptive and the most cytotoxic.
- **Secondary amphipathic** CPPs (penetratin, pVEC, M918) are shorter and only reveal their amphipathicity when they adopt an alpha-helix or beta-sheet upon binding phospholipid. Membrane models suggest uptake via inverted micelles.
- **Non-amphipathic** CPPs (Tat(48-60), R9) are short and arginine-rich, bind membranes rich in anionic lipids, and rarely cause leakage at low micromolar concentrations. Arginine generally outperforms lysine in these scaffolds.

Anionic and neutral CPPs are rare; they require higher concentrations and their uptake mechanism is poorly understood.

## Uptake mechanism

The early consensus that CPPs translocate directly across the membrane was substantially revised after Richard and colleagues showed in 2003 that much of the original evidence was an artefact of methanol/formaldehyde fixation, which redistributes peptides that never actually crossed. With live-cell imaging and protease stripping of surface-bound peptide, **energy-dependent uptake by macropinocytosis is now the mainstream model at low CPP concentration**, followed by a separate escape step from the endosome.

> [!info] Mechanism
> Two separable steps govern CPP delivery. First, polycationic CPPs bind electrostatically to cell-surface heparan sulfate proteoglycans, which clusters them and triggers actin-driven membrane ruffling and macropinosome formation. Second, the endosome is escaped by a combination of direct translocation across the endosomal membrane and destabilisation of the endosomal bilayer, which is favoured by the low pH and changed lipid composition of the maturing endosome. Cargo must survive both steps; it is the endosomal escape step, not the uptake step, that is usually the efficiency bottleneck.

> [!warning] Mechanism is condition-dependent
> The same peptide can use several routes at once. Tat uptake is temperature-sensitive, dynamin-1-independent, and inhibited by cytochalasin D and amiloride, implicating macropinocytosis, but clathrin-mediated and caveolar routes have also been demonstrated, and Tat still enters cells engineered to lack clathrin and caveolae. For penetratin, direct translocation and endocytosis have both been reported, and the switch is partly concentration-dependent: Arg9 was reported to enter directly above ~10 microM but not at 5 microM or below. Some CPPs such as the proline-rich S413-PV show a GAG- and endocytosis-dependent route at 0.1 microM and a GAG-independent one at 1 microM. Treating "CPP uptake" as a single mechanism is an oversimplification.

Cargo also changes the picture. Small fluorophore-labelled peptides, large protein fusions and oligonucleotide complexes do not necessarily share an entry route with the unconjugated peptide, and the fluorophore itself can change the behaviour. A 2021 screen in KCNN4-knockout HeLa cells, which sharply reduces direct translocation, placed Tat, R9, penetratin, M918, Transportan and TAT-Ras-GAP in EEA1-positive early endosomes and then LAMP1-positive non-acidic vesicles, in a route that required Rab14 rather than the canonical Rab5/Rab7 axis.

## Toxicity and limitations

Membrane disruption is the double-edged sword. A CPP that is potent enough to escape the endosome is often also potent enough to perturb the plasma membrane, and plasma-membrane lytic activity is far more cytotoxic than endosomal lytic activity. Primary amphipathic peptides such as TP10 are toxic even at low micromolar concentrations. CPPs are also rapidly degraded by proteases, cleared rapidly by the kidney and liver, and accumulate in the liver and kidney rather than in tumors. Selectivity is poor: most CPPs enter nearly every cell type, which is a serious liability for a therapeutic intended to reach one tissue.

> [!warning] Translational status
> Despite three decades of work, no CPP-based therapeutic has been approved for human use. The field's honest assessment is that uptake efficiency, endosomal escape and in vivo biodistribution remain unsolved, and the lipophilicity/charge balance that produces good uptake also produces toxicity. Reported uptake efficiencies in the literature are difficult to compare because groups use different fixation, labelling and readout methods.

## Applications

CPPs are used to deliver intact protein reagents, antibodies and reporter enzymes into cells for imaging; antisense oligonucleotides, [[siRNA]] and plasmid DNA; metal and fluorescent probes; and nanoparticles for tumour-directed delivery. The non-covalent carriers Pep-1 and MPG form stable complexes with protein cargo and have been used to transduce full-length proteins including transcription factors in both cultured cells and rodent brain.

## Documents

- [[SV40]]
  - The vault's SV40 material refers to CPP-mediated delivery of large viral regulatory proteins (large T antigen and the 42-kDa OBPF protein) into cells, which is the classic large-cargo use case for the TAT and Penetratin CPPs.
- [[TAT]]
  - The Tat peptide is the founding CPP and the standard reference conjugate; it supplies the GRKKRRQRRR sequence and the dominant body of endocytosis-versus-translocation literature.

## Connections

- [[TAT]] — TAT is the archetypal CPP and the sequence every designed polycationic peptide is benchmarked against. Its uptake mechanism has been the most contested in the field, which makes it both the reference point and the source of most of the field's methodological lessons.
- [[SV40]] — SV40 large T antigen is one of the standard oversized CPP cargoes; translocating a protein of this size is a demanding test of whether a CPP genuinely reaches the cytosol and nucleus.
- [[Endocytosis]] — Macropinocytosis and clathrin/caveola-mediated [[Endocytosis]] are the accepted entry routes for most CPPs at working concentrations, and endosomal escape is the rate-limiting step for cargo delivery.
- [[HIV]] — Tat is an HIV-1 product and the CPP field's origin story; the same viral protein that is required for viral transcription also transduces cells efficiently.
- [[Nanoparticles]] — CPP-decorated liposomes and polymeric [[Nanoparticles]] are the main in vivo application, where a targeting ligand is added to a CPP so that uptake is both cell-entry competent and tissue-selective.
- [[Proteasome]] — Degradation of CPP-cargo conjugates by the [[Proteasome]] and by lysosomal proteases after endocytic uptake is a major route by which delivered cargo is lost.
- [[siRNA]] — CPP/siRNA and CPP/antisense conjugates are a leading translational application; the obstacle is endosomal escape and endosomal degradation of the oligonucleotide, not cellular uptake.
- [[Liposome Encapsulation]] — CPP conjugation is one of the standard strategies for getting liposomes and micelles past the reticuloendothelial system and into cells.

## Linking Summary

- New links added: [[TAT]], [[SV40]], [[HIV]], [[Endocytosis]], [[Nanoparticles]], [[Liposome Encapsulation]], [[Proteasome]], [[siRNA]], [[Plasma Membrane]], [[Transportan]], [[Kinase]]
- Suggested notes to create: [[Penetratin]], [[Polyarginine]], [[Macropinocytosis]], [[Endosomal Escape]], [[Pep-1]], [[Heparan Sulfate Proteoglycans]], [[Mastoparan]]
- Strong connections to strengthen: [[TAT]] ↔ [[Cell-Penetrating Peptide]] (already mutual), [[Endocytosis]] ↔ [[Cell-Penetrating Peptide]]
