---
title: P-glycoprotein
description: P-glycoprotein (ABCB1/MDR1) is a full-length ATP-binding cassette transporter that pumps a very broad range of hydrophobic drugs and xenobiotics out of cells using ATP hydrolysis; its activity underlies both multidrug resistance in cancer and xenobiotic protection at the gut, kidney, and blood-brain barrier.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - pharmacology
  - drug-resistance
  - membrane-trafficking
aliases: [P-gp, ABCB1, MDR1, Multidrug resistance protein 1, CD29]
---

# P-glycoprotein

**P-glycoprotein** (P-gp; *ABCB1*, historically *MDR1*) is a ~1280 aa, 170 kDa full-length transporter of the ATP-binding cassette (ABC) superfamily. It is the founding member of the F-BP subfamily of ABC exporters and the widest-substrate-range drug transporter known. P-gp expels substrates from the cytosolic leaflet to the extracellular/luminal side using the energy of two ATP hydrolysis events, and it does so for chemically diverse compounds including vinca alkaloids, taxanes, anthracyclines, colchicine, digoxin, verapamil, fentanyl, loperamide, and ivermectin.

## Structure and Transport Cycle

Structurally P-gp is a pseudo-symmetric **heterodimer**, each half made of a 6-transmembrane-helix TMD0 membrane-spanning domain (which forms the drug-binding cavity) fused to a nucleotide-binding domain (NBD) with a characteristic ABC signature motif. Cryo-EM of the human transporter in detergent, in nanodiscs, and in a lipid bilayer has resolved the inward-facing (open, NBDs separated, cavity solvent-exposed) and outward-facing (closed, NBDs dimerised, cavity collapsed and facing the outside) conformations, plus intermediate states with a short, wide cavity (Frank et al., 2016, *Nature*; later 2020–2024 human structures).

> [!info] Substrate recognition
> The cavity is lined with aromatics and hydrogen-bond acceptors and is lined with a *few* polar residues (Seelig's "chemical pattern recognition" analysis). Drugs must present **two or three electron-donor groups spaced 2.5 Å and 4.6 Å apart** to engage the two halves of the transporter. This simple pattern rule explains both the enormous substrate diversity and why the same drug is or is not a P-gp substrate across species — a single residue change can abolish it.

The coupling between NBD dimerisation and TMD rearrangement is not a simple two-state switch; the conformational landscape includes multiple intermediate cavity volumes, which is why P-gp substrates differ in how efficiently they drive turnover.

## Tissue Distribution and Physiological Role

P-gp is expressed at exactly the surfaces where it protects the organism: the apical enterocytes of the small intestine, the canalicular membrane of hepatocytes, the proximal renal tubule, the blood–brain barrier endothelium, the placenta, the testes, and the immune cell surface.

> [!warning] Clinical caveat
> The CNS protection is pharmacologically load-bearing. P-gp at the BBB is what keeps [[Ivermectin]] and many opioids out of the brain, and it is why **ivermectin-sensitive collies** (*ABCB1*/*ABCB1-1* deletion-mutant alleles) can be lethally neurotoxic at doses that are unremarkable in other breeds. Any P-gp inhibitor given to such an animal — including spinosad and azole antifungals — can convert a safe preventive dose into a fatal one. This is a general principle, not just a veterinary one: the same logic underlies neurotoxicity risk for human patients on P-gp-inhibiting comedications.

Beyond drug efflux, P-gp is a physiological lipid transporter (it exports cholesterol, sphingomyelin, and platelet-activating factor) and it modulates the immune response by translocating sphingosine-1-phosphate and cholesterol to the outer leaflet, which is how it controls lymphocyte trafficking and how [[CD47]]-dependent phagocytosis of activated T cells is engaged. Zebrafish *Abcb1b* also plays a non-transport role in dendritic cell migration.

## Multidrug Resistance in Cancer

Overexpression of *ABCB1* — via gene amplification, transcription-factor activation, or epigenetic derepression — is the classic mechanism of intrinsic and acquired [[Multidrug Resistance]] in cancers. It was the first transporter shown to cause the phenotype, in 1986-1990, and remains the most clinically relevant one.

> [!warning] Why clinical translation stalled
> Despite a very clear mechanistic case, P-gp inhibitors (third-generation: tariquidar, elacridar, zosuquidar) have repeatedly failed phase II/III trials. The standard explanations are (a) **dose-limiting toxicity of the inhibitor itself** at the exposures needed to occupy the transporter, and (b) **redundancy** — MRP-family transporters and [[BCRP]]/ABCG2 also export the same drugs, so blocking P-gp alone achieves little. A further complication is that P-gp is high-variability in expression across tumours and patients, and *ABCB1* genotype modifies both toxicity and response in a way that has not been exploited routinely.

## Documents

- [[Detoxification]] — P-gp is one of the phase III transport proteins in the vault's detoxification pathway, alongside MRPs and organic anion/cation transporters. It moves already-metabolised conjugates out of hepatocytes, renal tubules, and enterocytes for biliary and urinary excretion.
- [[docetaxel]] — a taxane whose clinical exposure and efficacy are limited by P-gp-mediated efflux. Taxanes are also substrates of ABCG2, which is the resistance mechanism that survives P-gp inhibition.

## Connections

- [[Multidrug Resistance]] — P-gp is the prototype mechanism behind multidrug resistance: one transporter confers cross-resistance to many chemically unrelated agents because the substrate recognition pattern is generic, not agent-specific. Overexpression is a standard selectable marker in laboratory work for exactly this reason.
- [[Detoxification]] — P-gp performs the membrane-translocation step of phase III metabolism, exporting conjugated metabolites into bile, urine, or the intestinal lumen. Its location at the apical/canalicular membrane of enterocyte and hepatocyte makes it the gatekeeper for the whole pathway.
- [[docetaxel]] — docetaxel is a P-gp substrate, so P-gp overexpression is a clinically relevant mechanism of taxane resistance alongside ABCG2. This is one of the strongest drug–transporter pairs in oncology.
- [[Ivermectin]] — ivermectin is a well-characterised P-gp substrate, and P-gp efflux at the blood–brain barrier is the main reason it lacks central nervous system toxicity at antiparasitic doses. MDR1-mutant collies are the canonical demonstration of what happens when that barrier fails.
- [[Doxorubicin]] — anthracyclines are P-gp substrates, though their resistance in tumours more often reflects altered topoisomerase II and detoxification than P-gp alone.
- [[Vincristine]] and [[Vinblastine]] — vinca alkaloids were the original chemotherapy agents used to select the MDR1-overexpressing cell lines that identified and characterised P-gp.
- [[Cisplatin]] — cisplatin is a useful negative case: it is not well transported by P-gp, and its resistance is instead driven by DNA repair capacity and glutathione-mediated trapping. The contrast shows how much substrate-specificity matters even within a single drug class.
- [[Endocytosis]] — this is a mechanistically sharp connection: for many P-gp substrates, endosomal/lysosomal sequestration is itself a P-gp *requirement* for cytotoxicity, because the acidic endolysosomal lumen acts as a compartment that traps the neutral, membrane-permeant drug after it has been extruded from the cytosol. Blocking P-gp therefore changes where the drug accumulates, not just how much.
- [[BCRP]] — ABCG2 is the principal alternative efflux pump for taxanes, mitoxantrone, and topotecan. P-gp/ABCG2 co-expression is the usual reason single-transporter inhibition disappoints.

## Linking Summary

- New links added: [[Multidrug Resistance]], [[Detoxification]], [[docetaxel]], [[Ivermectin]], [[Doxorubicin]], [[Vincristine]], [[Vinblastine]], [[Cisplatin]], [[Endocytosis]], [[BCRP]], [[CD47]]
- Suggested notes to create: [[ABC Transporter]], [[ATP-Binding Cassette]], [[Efflux Pump]], [[BCRP]], [[ABCB1 1Δ mutation]], [[Taxane]]
- Strong connections to strengthen: [[P-glycoprotein]] ↔ [[Multidrug Resistance]] (the MDR note should name ABCB1 as the founding mechanism rather than treating it generically), [[P-glycoprotein]] ↔ [[Blood-Brain Barrier]]
