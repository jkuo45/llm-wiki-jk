---
title: Phospholipase C
description: Phospholipase C is the family of inositol lipid hydrolases (PLCβ, γ, δ, ε, ζ, η) that cleave phosphatidylinositol 4,5-bisphosphate into IP3 and DAG, converting receptor activation into calcium release and protein kinase C activation; PLCζ is the sperm factor that triggers egg activation.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - enzyme
  - signaling
  - lipid-metabolism
aliases: [Phospholipase C, PLC, PI-PLC, Phosphoinositide-specific phospholipase C, PIP2 phosphodiesterase]
---

# Phospholipase C

**Phospholipase C** (PLC) is the family of inositol lipid phosphodiesterases that performs the single most-used chemical reaction in receptor signalling: hydrolysis of the membrane phospholipid [[PtdIns(4,5)P2]] at the phosphodiester bond to yield two second messengers, **inositol 1,4,5-trisphosphate (IP3)**, which is water-soluble and diffuses to the endoplasmic reticulum to open IP3 receptor calcium channels, and **diacylglycerol (DAG)**, which stays in the membrane and recruits and activates [[PKC]]. In mammals the relevant substrates are the phosphoinositides rather than phosphatidylcholine; the class also includes bacterial PLCs and the eukaryotic **PLC-like (PLC-L) / phospholipase D / NAPE-PLD** enzymes historically lumped into the same category.

## Isoforms

Six mammalian families, each with its own regulators:

| Isoform | Regulation | Notes |
| --- | --- | --- |
| **PLCβ1–4** | Gαq/Gα11, Gβγ | The classic receptor-coupled family. PLCβ1/β3 are neuronal; PLCβ4 carries an epileptogenic gain-of-function variant (e.g. p.Arg788Gln) linked to partial epilepsy and to alcohol withdrawal seizures. |
| **PLCγ1, PLCγ2** | Direct tyrosine phosphorylation by activated receptor tyrosine kinases; SH2/SH3 recruitment | Dual SH2 domain is the signature. PLCγ2 is constitutively active in platelets and is the platelet collagen receptor signal. |
| **PLCδ1–4** | Ca²⁺- and PIP2-dependent, largely PKC- and BCL2-regulated | Highest basal specific activity; implicated in replicative [[Senescence]] and in Golgi membrane trafficking. |
| **PLCε** | Activated by small G proteins Ras, Rap1, RhoA and by Gα12/13 | The only PLC with CDC25-domain GEF activity; the principal PLC in [[Ras signaling]]. |
| **PLCζ** | Unregulated; constitutively active | The sperm cytosolic factor that triggers oocyte activation. Mouse knockout gives male infertility. |
| **PLCη, PLCξ** | Tissue-restricted | PLCη is highly expressed in keratinocytes and in M-type sensory neurons and is required for TRPV1 thermal hyperalgesia. |

> [!info] Mechanistic consequence of the reaction
> Because PLC consumes [[PtdIns(4,5)P2]] to make the two messengers, it simultaneously **releases calcium** and **destroys the membrane scaffold** that the signalling complex was built on. The local loss of PI(4,5)P2 also drives endocytosis, which is why a PLC signal characteristically terminates itself by removing the receptor from the membrane.

## The IP3 / DAG / Calcium Axis

The two products act on different timescales, which is the point of having two. DAG and the membrane-retained IP3 receptor both operate locally and briefly on the plasma membrane — calcium flux and [[PKC]] recruitment lasting tens of seconds. IP3 alone, diffusing and being degraded over tens of seconds to minutes, produces a propagating, oscillating cytosolic calcium signal whose frequency and amplitude encode the strength and duration of the stimulus. This is the basis of calcium-dependent feedback, store-operated calcium entry, and, in secretory cells, sustained secretion.

Calcium then feeds back on PLC itself: Ca²⁺ activates PLC isoforms (δ, ζ) and, together with Ca²⁺/calmodulin, further amplifies PLCβ output. Calcium also terminates the signal by activating IP3 3-kinases and pumps.

## Other PLC Substrates and Family Members

- **PLC on phosphatidylinositol 4,5-bisphosphate** is the dominant mammalian reaction, but PLC activity on PI(3,4,5)P3 and PI(3,5)P2 is reported, and **PLCζ is promiscuous across phosphoinositides** — a real constraint on any experiment using it as a generic PI(4,5)P2 probe.
- **Phospholipase C in bacteria**, notably *Listeria* and *Staphylococcus* PLCs, act on bacterial membranes rather than host ones, and the *Listeria* PI-PLC C-terminal domain is a cause of host cytosolic PLC activation.
- **Phospholipase D** is frequently lumped in, but it hydrolyses a different bond (the phosphodiester adjacent to the head group) and its signature product is **phosphatidic acid**, not DAG. It has its own dedicated note in this vault.

## Clinical Relevance

> [!warning] Clinical caveat
> PLC signalling is pervasive enough that "PLC" as a therapeutic target is mostly being pursued indirectly — through pathway nodes, receptor systems, or isoform-selective chemistry — rather than with a direct PLC inhibitor. The one genuinely established clinical exception is the opposite case: activating PLCζ *is* the mechanism of **ovulation induction** in assisted reproduction, using either purified sperm extract or a recombinant PLCζ, with a live birth rate comparable to IUI. That is a striking proof that a single well-defined PLC species is sufficient to trigger a whole developmental cascade.

- **Inflammation.** PLCγ2 and PLCβ mediate pro-inflammatory signalling in platelets and leukocytes; the shared P2Y12–PLCβ–IP3–Ca²⁺–P2Y12-feedback loop is why platelet aggregation is self-amplifying.
- **Cancer.** PLC isoforms are altered across tumour types, and PI3K/PLC/PKC crosstalk is an active area of pharmacology.
- **Neurodegeneration and pain.** PLCη in TRPV1-expressing sensory neurons is a validated target for thermal hyperalgesia; PLCβ4 in neurons ties to alcohol-withdrawal seizure susceptibility.
- **Senescence.** Elevated PLCδ activity accompanies senescence and contributes to the secretory phenotype; the causal weight of this is not firmly established.

## Documents

- [[PtdIns(4,5)P2]] — the vault's hub phosphoinositide note, which names PLC as the main consumer of PI(4,5)P2. This note is the enzyme side; the lipid note is the substrate side of the same reaction.

## Connections

- [[PtdIns(4,5)P2]] — PLC is the dominant sink for this lipid. The ratio of PIP5KI production (see [[PIP5KI]]) to PLC consumption sets the local concentration of PI(4,5)P2 and therefore both signalling gain and the surface availability of membrane scaffolds.
- [[PIP5KI]] — PIP5KI synthesises what PLC consumes; the two sit on opposite sides of the same lipid flux and together set the steepness of the membrane PI(4,5)P2 gradient.
- [[Calcium Signaling]] — IP3 released by PLC opens the IP3 receptor, making PLC the upstream initiator of essentially all receptor-driven cytosolic calcium signalling.
- [[PKC]] — DAG released by the same PLC reaction recruits and activates conventional and novel PKC isoforms, so PLC and PKC are obligate partners in every DAG-dependent signal.
- [[Cell Signaling]] — PLC is the archetypal second-messenger-generating enzyme, the textbook illustration of how a surface receptor is converted into intracellular information.
- [[Receptor Tyrosine Kinases]] — PLCγ1/2 are phosphorylated directly by activated RTKs, which is the reason growth factor signalling can raise calcium without any G protein involvement.
- [[Apoptosis]] — PLC activity is required for phosphatidylserine externalisation in the apoptotic pathway, so PLC sits upstream of the surface change the phagocyte reads.
- [[Phospholipase D]] — often discussed alongside PLC but mechanistically distinct: it produces phosphatidic acid, not DAG, and is coupled to a different receptor/second-messenger logic.
- [[Phospholipase A2]] — the other major membrane phospholipase, releasing arachidonic acid and lysophospholipids; the three families run in parallel on the same membrane lipids.
- [[Phosphatidylserine]] — PLCγ signalling contributes to the scramblase activation that exposes PS, linking calcium/PLC signalling to the eat-me signal.
- [[Ras signaling]] — PLCε is directly activated by Ras, making it the branch of PLC signalling that sits immediately downstream of the dominant oncogenic driver.
- [[Senescence]] — increased PLCδ activity and resultant calcium/secretory signalling are reported in senescent cells, though how much of the secretory phenotype is PLC-dependent is not settled.

## Linking Summary

- New links added: [[PtdIns(4,5)P2]], [[PIP5KI]], [[PKC]], [[Calcium Signaling]], [[Cell Signaling]], [[Receptor Tyrosine Kinases]], [[Apoptosis]], [[Phospholipase D]], [[Phospholipase A2]], [[Phosphatidylserine]], [[Ras signaling]], [[Senescence]]
- Suggested notes to create: [[Phospholipase D]], [[Ras signaling]], [[IP3]], [[Diacylglycerol]], [[IP3 Receptor]], [[Inositol 1,4,5-Trisphosphate]], [[PLCζ]], [[Phosphatidic Acid]], [[Oocyte Activation]], [[Store-operated Calcium Entry]], [[Calcium Oscillations]]
- Strong connections to strengthen: [[Phospholipase C]] ↔ [[PtdIns(4,5)P2]] (these two notes are two halves of one reaction and should cross-reference the axis explicitly), [[Phospholipase C]] ↔ [[Calcium Signaling]]
