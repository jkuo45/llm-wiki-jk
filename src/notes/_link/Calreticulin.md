---
title: Calreticulin
description: Calreticulin (CRT, CALR) is an ER calcium-binding chaperone with three domains that also functions as a cell-surface 'eat-me' signal driving phagocytic clearance, a plasminogen receptor on the tumor surface, and a regulator of both MeCP2 and NRF2 activity.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags:
  - protein
  - calcium-binding
  - endoplasmic-reticulum
aliases: [CRT, CALR, Calregulin]
---

# Calreticulin

**Calreticulin** (CRT; gene *CALR*) is one of the most functionally promiscuous proteins in the cell. It is best known as the ER's most abundant calcium-binding protein and a folding chaperone that partners with [[HSP70|BiP]] — but it also travels to the cell surface as a phagocytic "eat-me" signal, sits on the surface of tumor cells as a plasminogen receptor, and shuttles to the nucleus to modulate both MeCP2 and NRF2 transcription factor activity. It is the archetypal example of a protein whose function depends on where it is, not just what it is.

> [!info] Four-compartment protein
> Calreticulin was long considered ER-restricted, an assumption reinforced by its C-terminal KDEL-like ER retention signal. Identification of CRT in the nucleus, cytosol, and plasma membrane overturned that view. The retention signal is not absolute: CRT is released from the ER during ER stress and traffics to the surface in a regulated manner (PMID: 39858072).

## Structure & Domains

Calreticulin is a 46 kDa, 417-amino-acid protein with three globular domains separated by a flexible hinge:

- **N-terminal domain (NTD)** — a β-sandwich structure with an ER targeting signal peptide. The NTD mediates interactions with [[ERAD|ER-associated degradation]] machinery and with tapasin in the MHC class I loading pathway. The extreme N-terminus acts as a myristoylation/acylation site and has an independent, non-chaperone function in cell motility and membrane tethering.
- **P-domain (central)** — the distinctive "P" domain, a globular structure studded with three high-affinity Ca²⁺-binding sites (one high-affinity, two lower-affinity) arranged within a short acidic tail (the E-F hand domain). It is unique to the calreticulin/calnexin family. A mutant lacking Ca²⁺-binding capacity loses chaperone activity.
- **C-terminal domain (CTD)** — a β-sandwich with a conserved acidic "acidic tail" of ~30 residues. This is the Ca²⁺-sensing regulatory element: Ca²⁺ binding to the P-domain stabilizes the "open" CTD conformation, allowing client binding. Loss of calcium binding or truncation of the acidic tail converts CRT from a chaperone to a lectin-like adhesion molecule.

> [!warning] Low calcium is the switch, and this matters for interpreting experiments
> In the ER, calcium depletion (as occurs in [[ER Stress]]) lowers Ca²⁺ occupancy of the P-domain and drives the CTD closed, promoting chaperone mode. The reverse — elevated calcium or loss of the acidic tail — produces "open" CRT capable of binding carbohydrate ligands. Many apparently contradictory CRT findings reduce to differences in calcium state, compartment, and redox status.

## Mechanism of Action & Pathways

**ER chaperoning.** CRT forms a heterodimer with [[HSP70|BiP]] in the ER lumen, where the two chaperones act together: CRT provides Ca²⁺-dependent glycosylation checking (via its P-domain and, with calnexin, the calreticulin/calnexin cycle) while BiP provides ATP-driven folding. Together they impose a folding checkpoint on glycoproteins entering the ER lumen. CRT is co-induced with BiP by the [[Unfolded Protein Response]], driven by [[ATF6α]] and spliced [[XBP1]], which makes it a standard transcriptional readout of ER stress activation.

**Surface exposure and phagocytic clearance.** Under specific lethal stress — notably anthracycline chemotherapy, photodynamic therapy, and some radiotherapy regimens — surface CRT becomes the dominant "eat-me" signal, recognized by [[CD47]]-competing receptors on phagocytes (LRP1/CD91, calreticulin-binding integrins; see Linking Summary for missing notes). Surface CRT is itself subject to oxidation and disulfide interchange; oxidized CRT becomes a potent attractant for phagocytes. This is the mechanistic basis of **immunogenic cell death**.

> [!important] Immunogenic cell death is the clinically important function
> Surface CRT exposure, together with the co-release of [[HMGB1]] and extracellular ATP, is the canonical signature of immunogenic cell death — a form of cell death in which dying cells become unusually visible and stimulatory to the immune system. Elevated surface CRT on cancer cells has been associated with better anticancer immunity and superior outcomes in non-small cell lung carcinoma, colorectal carcinoma, acute myeloid leukemia, ovarian cancer, and high-grade serous carcinoma (PMID: 39858072). This makes CRT a biomarker whose prognostic value is being actively pursued.

**Nuclear roles.** CRT translocates to the nucleus and interacts with MeCP2 (methyl-CpG-binding protein 2; no vault note yet), affecting chromatin and gene-expression regulation; and with NRF2, influencing oxidative stress response gene expression.

## Physiological Function

- ER calcium store: a major contributor to total ER calcium content and to ER calcium-dependent folding.
- Glycoprotein quality control via the calreticulin/calnexin cycle, integrated with ERAD.
- Wound healing and tissue repair: extracellular CRT acts as a profibrotic and migratory signal, promoting fibroblast activation and matrix deposition.
- Neuronal: CRT is abundant in the brain and is released as a DAMP in injury.
- Anti-inflammatory: in its surface/secreted form CRT can dampen dendritic cell responses and promote immune tolerance of dying cells.

## Pathology & Clinical Relevance

- **Cancer.** Surface CRT drives phagocytic clearance of dying tumor cells and can enhance anticancer immunity; but CRT also has a pro-tumor role as a cell-surface plasminogen receptor facilitating cell migration, with implications for essential thrombocythemia and other myeloproliferative neoplasms (PMID: 39858072).
- **Myeloproliferative neoplasms.** *CALR* mutations — typically frameshift insertions producing a 1-bp shift in the C-terminus — are found in roughly a quarter of essential thrombocythemia cases, with a distinct thrombotic phenotype.
- **Autoimmune disease.** Calreticulin exposure is implicated in systemic lupus erythematosus and other autoimmune conditions as a DAMP acting on [[Pattern Recognition Receptors]].
- **Neurodegenerative disease.** Dysregulated CRT and chronic ER stress with calreticulin dysregulation are implicated in [[Alzheimer's Disease]] and [[Parkinson's Disease]].
- **Organelle stress and inflammasome activation.** CRT release and ER stress signaling contribute to [[NLRP3 Inflammasome]] activation (PMID: 41484627).
- **Fibrosis.** Extracellular CRT is a documented profibrotic mediator, contributing to [[Fibrosis]] in lung, liver, and cardiac tissue.

> [!warning] Context dependence is the defining caveat
> CRT is protective in one compartment (ER folding fidelity, calcium homeostasis) and pro-pathogenic in another (surface plasminogen receptor, DAMP-driven inflammation, profibrotic signaling). Any claim about "CRT function" that omits compartment, calcium state, and redox state is underspecified.

## Documents

- [[_document_ - Ferroptosis past present and future|Ferroptosis: past, present and future]] — discusses regulated cell-death modalities including ferroptosis and the shared signaling infrastructure with other deaths, including the DAMP-release logic that involves calreticulin.
- [[Necrosis]] — lists calreticulin among the DAMPs released from necrotic tissue alongside [[HMGB1]], heat shock proteins, and histones.

## Connections

- [[Unfolded Protein Response]] — CRT is co-induced with BiP by ATF6α and XBP1, making CRT expression a transcriptional readout of UPR activation alongside its partner chaperone.
- [[ER Stress]] — ER calcium depletion flips CRT from lectin mode to chaperone mode; ER stress is therefore the physiological regulator of its functional state.
- [[HMGB1]] — HMGB1 and CRT are co-released in immunogenic cell death, and the two function as a coordinated DAMPs pair rather than independently.
- [[Pattern Recognition Receptors]] — extracellular CRT is sensed by TLR4 and other PRRs, linking calreticulin release to [[Inflammation]] and [[Inflammaging]].
- [[NLRP3 Inflammasome]] — ER stress and CRT release contribute to inflammasome activation, connecting calreticulin to the IL-1β/[[IL-1β]] inflammatory axis.
- [[CD47]] — CD47 is the dominant inhibitory "don't eat me" signal; surface CRT is the principal counter-signal ("eat me") whose relative display decides phagocytic outcome.
- [[Apoptosis]] — most apoptotic cells display phosphatidylserine and are cleared silently; a subset undergo immunogenic cell death with CRT exposure and are instead immunologically visible, a distinction with direct cancer-immunotherapy implications.
- [[Fibrosis]] — extracellular CRT is a profibrotic signal promoting fibroblast activation, linking calreticulin to tissue-remodeling disease.

## Linking Summary

- New links added: [[Unfolded Protein Response]], [[ATF6α]], [[XBP1]], [[ER Stress]], [[HMGB1]], [[Pattern Recognition Receptors]], [[Toll-like Receptor]], [[Inflammation]], [[Inflammaging]], [[NLRP3 Inflammasome]], [[IL-1β]], [[CD47]], [[Apoptosis]], [[Phosphatidylserine]], [[Fibrosis]], [[Alzheimer's Disease]], [[Parkinson's Disease]], [[Immunotherapy]]
- Suggested notes to create: [[Immunogenic Cell Death]] (the defining framework for CRT surface exposure; currently unresolved and the most important missing note here), [[ER-associated Degradation]]/[[ERAD]], [[MeCP2]], [[LRP1]] and [[CD91]] (the phagocytic receptors that read surface CRT), [[Calreticulin Translocation]], [[Essential Thrombocythemia]], [[Myeloproliferative Neoplasms]]
- Strong connections to strengthen: [[HMGB1]] ↔ [[Calreticulin]] (the co-release pair defining immunogenic cell death), [[CD47]] ↔ [[Calreticulin]] (opposing phagocytic signals — this is the highest-value new edge in the note), [[ER Stress]] ↔ [[Calreticulin]].