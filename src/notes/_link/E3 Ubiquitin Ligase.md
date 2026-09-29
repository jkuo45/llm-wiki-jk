---
title: E3 Ubiquitin Ligase
description: The third and substrate-selecting enzyme of the ubiquitination cascade, of which more than 600 are encoded in the human genome. E3 ligases determine which protein is modified and with what ubiquitin chain topology, and fall into structurally distinct families (RING, RBR, HECT) that transfer ubiquitin either directly or via a covalent enzyme intermediate.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [protein-class, ubiquitin, proteostasis, enzymology, cell-signaling]
aliases: [E3 ligase, Ubiquitin-protein ligase, E3 ubiquitin ligases, Ubiquitin ligases]
---

# E3 Ubiquitin Ligase

**E3 ubiquitin ligases** are the last and most numerous enzymes of the [[Ubiquitination]] cascade. Of the three steps — activation by [[Ubiquitin-activating enzyme E1]], conjugation by [[Ubiquitin-conjugating enzyme E2]], and transfer to substrate by the E3 — the E3 supplies the specificity. More than 600 E3s are encoded in the human genome, and a large fraction of the "druggable proteome" now consists of E3s and their adaptors.

> [!info] The key point
> The E1 and E2 steps are generic. E1s are few (two in humans) and E2s are ~30. The E3 is where substrate selection, subcellular location, and chain topology are specified. Loss of a single E3 typically produces a specific, well-defined phenotype — which is exactly what makes E3s attractive as drug targets and why, conversely, a great deal of E3 biology is known only from loss-of-function phenotypes.

## Families by mechanism

The E3 families are defined by *how* ubiquitin reaches the substrate:

- **RING** (>600 in humans, including U-box proteins, which are RING-like but lack the canonical zinc-coordinating motif). The RING domain simultaneously binds the substrate and the E2~ubiquitin, and acts as a scaffold to bring them into proximity, transferring ubiquitin **directly** from E2 to substrate lysine in a single step. No covalent intermediate. RINGs are subdivided into monomeric ones (COP1, [[MDM2]], TRAF6) and multisubunit Cullin–RING ligases (CRLs), of which the [[SCF Complex]] is the archetype and the [[Anaphase Promoting Complex-Cyclosome]] is the largest. [[TRIM2]] and [[Trim17]] are RING-type E3s of the tripartite-motif family.
- **RBR** (14 in humans, including ARIH1, ARIH2, [[Parkin]], RNF14, RNF31). Mechanistically a **hybrid**: a tripartite RING1–IBR–RING2 architecture that binds E2~Ub and transfers it to a **catalytic cysteine in RING2** (for Parkin, C431) before transferring to the substrate — the HECT-like two-step chemistry — while the RING1/IBR half confers RING-like E2 activation. RBRs are strongly associated with **linear (M1-linked) ubiquitin chains**, which have signalling roles distinct from K48 degradation chains.
- **HECT** (28 in humans, including the Nedd4 family). Form ubiquitin thioester intermediates on a catalytic cysteine in a two-step transthiolation, then nucleophilic attack on the substrate. Ubiquitination strictly requires prior E1–E2–E3 charging, so HECT E3s are a **molecular timer** — a way to make ubiquitination a function of E3 dwell time, not just E3 occupancy.

> [!warning] Family boundaries are not always clean
> Some ligases combine motifs (RBR, and "RCR"/other non-canonical families), and the taxonomy is being revised as more structures are solved. As one 2026 review puts it, the four-family scheme (RING, HECT, RBR, RCR) plus non-canonical families is a useful first cut, not a settled classification.

## The ubiquitin code

The E3 determines not only *which* protein but *what kind* of ubiquitin modification:

- **K48 polyUb chains** → recognition by the [[Proteasome]] → degradation.
- **K11 chains** → proteasomal degradation, and a prominent role in mitotic cell-cycle control via the APC.
- **K63 chains** → non-degradative: signalling, DNA-damage response, endocytosis, [[Autophagy]] receptor function.
- **Linear (M1) chains** → produced predominantly by the LUBAC complex (HOIP/HO1/SHARPIN), non-degradative, with distinct NF-κB and autophagy roles.
- **Mono-ubiquitination and short multi-monoubiquitination** → trafficking (endocytosis, lysosomal sorting) rather than destruction.

Because the same E3 can build different chains on different substrates under different conditions, "the E3" is not a fixed function. Ubiquitination is also reversible via deubiquitinases such as [[USP9X]] and [[USP30]], which makes it a signalling layer, not a one-way trash chute.

## Disease and therapeutics

- **Neurodegeneration.** [[Parkin]] (PARK2) mutations are the most common cause of early-onset [[Parkinson's Disease|recessive Parkinson's disease]]; RBR ligase failure → mitophagy failure. [[HUWE1]] and [[RNF168]] link E3s to neurodevelopmental and DNA-damage disease respectively.
- **Cancer.** [[MDM2]] ubiquitinates [[p53]]; this axis is one of the most successful drug targets in oncology, though direct MDM2 inhibition has been limited by cardiotoxicity and by resistance routes.
- **Immunity.** TRIM family members ([TRIM2]], [[Trim17]], [[TRIM21]]) are central to antiviral defence and to antigen presentation.
- **Metabolic disease.** E3–adaptor interfaces are a focus of obesity and diabetes drug discovery.
- **Targeting strategies.** The E3 is druggable either by occupying its substrate-binding site (blocking an E3–substrate interface) or by hijacking its catalytic site with a [[PROTAC]]: a bifunctional molecule that recruits a specific E3 to a target protein, converting a hijackable E3 into a delivery vehicle. A 2023 review (Exp Mol Med) frames E3s and their adaptors as an emerging therapeutic class for metabolic disease specifically.

> [!warning] Clinical caveat
> "E3 is druggable" is a hypothesis, not a result. The E3–substrate interface is often large and flat, and a small-molecule binder that occupies it must do so selectively and without disrupting the E3's other substrates. PROTACs have a well-documented failure mode in vivo — hook effect, large molecular weight limiting tissue penetration, and rapid clearance. Most human genetic evidence about E3 function comes from germline knockouts and hypomorphs, which rarely predict pharmacological inhibition in adults.

## Documents

- [[Anaphase Promoting Complex-Cyclosome]] — a multisubunit Cullin–RING E3; the archetypal cell-cycle E3, and a demonstration that an E3 can act as a large, ordered multi-protein machine rather than a single protein.
- [[TRIM2]] — a tripartite-motif RING E3 in the TRIM family; member of the largest E3 subgroup and an antiviral effector.
- [[Trim17]] — another TRIM-family RING E3, involved in antiviral immune signalling.
- [[Ubiquitin Ligase]] — the vault's general note on the ubiquitin-ligase concept; this note covers the E3 tier specifically.
- [[Proteasome]] — the downstream reader of K48/K11 chains; the E3–proteasome axis is the core degradative logic of the system.
- [[Ubiquitination]] — the modification itself and the chain-topology code.
- [[Parkin]] — the best-characterised RBR E3, and the reason RBR is mechanistically distinct rather than a taxonomic curiosity.
- [[SCF Complex]] — the prototype Cullin–RING ligase, and the other half of the canonical cell-cycle destruction pair with APC.

## Connections

- [[Ubiquitin]] — the substrate of the ligase, and the reason the E3's specificity is expressed as a code (chain linkage, multiplicity) rather than simply as "on/off."
- [[Ubiquitination]] — the E3 is the specificity-determining step of this reaction; without E3s, ubiquitination would be indiscriminate.
- [[Proteasome]] and the [[Ubiquitin-Proteasome System]] — the E3 is the routing decision that sends a specific protein to a specific degradative fate. Aggregated-protein clearance, and therefore the whole [[Proteostasis]] field, runs through E3s.
- [[Parkin]] — an RBR E3 whose catalytic mechanism (C431) resolved the RING/HECT hybrid question, and whose failure causes recessive [[Parkinson's Disease]]; it is the single best exemplar of E3 mechanistic diversity.
- [[Anaphase Promoting Complex-Cyclosome]] — the "DESTROY" phase of the cell cycle depends entirely on an E3, connecting ubiquitin to cell-cycle control and to every mitotic checkpoint.
- [[MDM2]] — the E3–[[p53]] axis is the paradigm for how E3 dysregulation causes cancer, and a proof that targeting an E3–substrate interface is clinically meaningful.
- [[TRIM2]] and [[Trim17]] — the TRIM family illustrates how a single RING E3 fold can be diversified by adjacent B-box and coiled-coil domains into dozens of paralogues with different targets, a general E3 diversification strategy.
- [[Autophagy]] — K63 and linear chains, built largely by RBR and LUBAC ligases, act as selective-autophagy receptor recognition signals. mitophagy receptor pathways are thus directly E3-dependent.
- [[Cell Cycle]] — both the APC and SCF E3s govern phase transitions by ubiquitinating specific securin and cyclin substrates; cyclin turnover timing is an E3-controlled event.
- [[Proteotoxicity]] — aggregate-prone proteins are cleared by ubiquitin-dependent routes; E3 failure converts a proteostasis problem into neurodegeneration.

## Linking Summary
- New links added: [[Ubiquitin]], [[Ubiquitination]], [[Ubiquitin-Proteasome System]], [[Proteasome]], [[Proteostasis]], [[Proteotoxicity]], [[Parkin]], [[PARK2]], [[MDM2]], [[p53]], [[TRIM21]], [[RNF168]], [[HUWE1]], [[Deubiquitinase]], [[USP9X]], [[USP30]], [[PROTAC]], [[Autophagy]], [[Cell Cycle]], [[Parkinson's Disease]], [[Histone H2A.Z]], [[LUBAC]], [[SHARPIN]], [[Mitophagy]], [[DNA Damage Response]]
- Suggested notes to create: [[Ubiquitin-Activating Enzyme E1]], [[Ubiquitin-Conjugating Enzyme E2]], [[RING Finger]], [[HECT Domain]], [[RBR Domain]], [[F-Box Protein]], [[Cullin]], [[K48 Polyubiquitin]], [[K63 Polyubiquitin]], [[Linear Ubiquitin]], [[Hook Effect]], [[Deubiquitinase]], [[Ubiquitin Code]], [[LUBAC]], [[DNA Damage Response]], [[Ubiquitin-Activating Enzyme E1]], [[Ubiquitin-Conjugating Enzyme E2]]
- Strong connections to strengthen: [[Parkin]] ↔ [[Mitophagy]], [[Anaphase Promoting Complex-Cyclosome]] ↔ [[Cell Cycle]], [[E3 Ubiquitin Ligase]] ↔ [[PROTAC]]
