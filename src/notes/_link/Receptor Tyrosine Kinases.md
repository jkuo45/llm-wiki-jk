---
title: Receptor Tyrosine Kinases
description: 'Receptor tyrosine kinases (RTKs) are a family of 58 single-pass transmembrane
  receptors in 20 subfamilies that autophosphorylate on tyrosine after ligand-induced
  dimerization, generating phosphotyrosine docking sites that feed the MAPK,
  PI3K-Akt and PLCγ pathways.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - receptor
  - signaling
aliases: [RTKs, RTK, receptor protein-tyrosine kinase, Eph receptor family]
---

# Receptor Tyrosine Kinases

Receptor tyrosine kinases (RTKs) are the largest family of single-pass
transmembrane receptors with intrinsic catalytic activity. They are the
principal entry point by which extracellular growth factors, cytokines and
hormones are converted into intracellular phosphorylation events. Humans
encode **58 RTKs in 20 subfamilies**, among them [[EGFR]], [[HER2]],
[[Insulin Receptor]], [[IGF1R]], [[PDGFR]], [[VEGFR]] and [[MET]].

> [!info] Family note
> RTK is a family label, not a single protein. What unifies the family is
> architecture (extracellular ligand-binding ectodomain → single
> transmembrane α-helix → juxtamembrane region → tyrosine kinase domain →
> C-terminal tail) and activation logic (ligand brings two kinase domains
> together).

## Classification

Subfamilies are defined by ectodomain architecture, which determines ligand
specificity:

| Class | Family | Members | Ectodomain |
|---|---|---|---|
| I | EGFR/ErbB | EGFR, ERBB2/HER2, ERBB3, ERBB4 | 2 cysteine-rich domains |
| II | Insulin receptor | INSR, IGF1R | α2β2 heterotetramer, one cysteine-rich + 2 FNIII |
| III | PDGFR/CSFR/KIT | PDGFRα/β, M-CSFR, KIT, FLT3 | 5 Ig-like domains |
| IV | VEGFR | VEGFR1–3 | 7 Ig-like domains |
| V | FGFR | FGFR1–4 | 3 Ig-like + acidic box |
| VI | MET | MET, RON | Semaphorin domain + PSI |
| VII | Trk | TrkA/B/C | 2 Ig + 1 FNIII + NGF domain |
| XI | TAM | TYRO3, AXL, MER | 2 Ig-like |
| XII | Tie | Tie1, Tie2 | 2 Ig + EGF |
| XIII | Eph | EPHA1–6, EPHB1–6 | 1 Ig + 1 cysteine-rich + FNIII |
| XIV | RET | RET | cysteine-rich |

Other families include DDR (collagen receptors), ROR, MuSK, PTK7/CCK4, ROS,
LMR, LTK and STYK1.

## Structure and activation

All RTKs share a modular layout: an N-terminal, glycosylated ectodomain; a
~20-residue transmembrane α-helix; a juxtamembrane region; a cytosolic
tyrosine kinase (TK) domain; and a C-terminal tail. The TK domain has the
canonical two-lobe kinase fold (small N-lobe, large C-lobe, ATP in the cleft)
with an **activation loop** and **αC helix** that must adopt an active
configuration before catalysis.

> [!info] Activation mechanisms differ by family
> The unifying logic is *cis-autoinhibition released by dimerization*, but the
> details vary:
> - **Insulin/IGF/FGFR receptors.** The activation loop itself occludes the
>   active site; Y1162 (insulin receptor) projects in as if poised for
>   autophosphorylation. Ligand-driven trans-phosphorylation of that tyrosine
>   relieves the block.
> - **KIT, PDGFR, Eph.** Autoinhibition is juxtamembrane — the juxtamembrane
>   segment contacts the αC helix and activation loop; phosphorylation of
>   juxtamembrane tyrosines destabilizes it.
> - **Tie2.** A C-terminal tail blocks the active site.
> - **EGFR/ErbB.** No activation-loop phosphorylation needed: two kinase
>   domains form an **asymmetric dimer** in which the "activator" C-lobe
>   allosterically rearranges the "receiver" N-lobe. This is why the oncogenic
>   EGFR mutants L858R and exon-19 deletions need no ligand — they
>   destabilize the same autoinhibitory contacts.

## Signaling output

Autophosphorylation on the C-terminal tail (and, in some families, the
juxtamembrane region) creates phosphotyrosine sites that are read by SH2- and
PTB-domain proteins. The dominant output pathways are:

- **RAS → RAF → MEK → [[ERK]]** ([[MAPK Signaling|MAPK]]) — proliferation and
  differentiation.
- **[[PI3K]] → [[Akt]]** — survival, growth, and metabolic control through
  [[mTORC1]] and [[mTORC2]].
- **PLCγ** — calcium and PKC activation.
- **STAT** — direct transcriptional output.

RTKs also signal by trans-endocytosis: internalized receptors continue to
phosphorylate from endosomes, with distinct signaling output, and sorted to
either [[Lysosome]] or [[Proteasome]]. Several RTKs also translocate to the
nucleus (ErbB, FGFR, VEGFR, insulin/IGF1R, MET, ROR, Eph families).

## Disease and clinical relevance

RTKs are the most heavily targeted receptor class in oncology, for two
reasons: their activating mutations are oncogenic, and their inhibition is
tolerable because many are expressed in a tissue-restricted fashion.

| Drug | Target | Setting |
|---|---|---|
| [[trastuzumab]] | HER2 | HER2-positive [[Breast Cancer]] |
| Cetuximab | EGFR | [[Colorectal Cancer]] |
| [[Imatinib]] | BCR-ABL, KIT, PDGFR | CML, GIST |
| [[Sunitinib]] | VEGFR, PDGFR, KIT | RCC, GIST |
| Pazopanib | VEGFR, PDGFR, KIT | RCC, soft tissue sarcoma |
| [[Everolimus]] | mTORC1 downstream of PI3K | TSC, several tumors |

RTK biology also underlies non-malignant disease: RTK signaling drives
[[Angiogenesis]] ([[VEGFR]]) and Atherosclerosis in
vascular disease, glucose handling ([[Insulin Receptor]], [[IGF1R]]) in
[[Insulin Resistance]] and [[Diabetes]], mast-cell survival via KIT in
mastocytosis, and hyperparathyroidism via [[MET]]/RET. On-target toxicities
reflect this: VEGFR blockade causes hypertension and proteinuria, EGFR
inhibition causes characteristic skin and mucosal toxicity, and
PDGFR blockade causes marrow suppression and fluid retention.

## Documents

- (no document notes yet)

## Connections

- [[EGFR]] — the archetypal RTK and the mechanistic prototype for asymmetric allosteric kinase-dimer activation.
- [[Kinase]] — RTKs are the single-pass, ligand-regulated subset of the much larger protein kinase superfamily.
- [[MAPK Signaling]] — RAS–ERK is the canonical proliferative output of RTK activation.
- [[PI3K-Akt Signaling]] — the survival and growth arm, feeding mTORC1 and mTORC2.
- [[mTORC1]] — lies downstream of RTK-driven PI3K–Akt, which is why RTK inhibition lowers mTORC1 output.
- [[RAS]] — RTKs activate RAS by recruiting adaptor proteins and SOS GAP/GEF activity.

## Linking Summary

- New links added: [[EGFR]], [[HER2]], [[Insulin Receptor]], [[IGF1R]], [[PDGFR]], [[VEGFR]], [[MET]], [[ERK]], [[MAPK Signaling]], [[PI3K]], [[Akt]], [[PI3K-Akt Signaling]], [[RAS]], [[STAT]], [[mTORC1]], [[mTORC2]], [[Kinase]], [[Lysosome]], [[Proteasome]], [[Angiogenesis]], [[Insulin Resistance]], [[Diabetes]], [[Insulin Signaling]], [[trastuzumab]], [[Cetuximab]], [[Imatinib]], [[Sunitinib]], [[Pazopanib]], [[Everolimus]], [[Breast Cancer]], [[Colorectal Cancer]], [[PROTAC]]
- Suggested notes to create: [[VEGFR2]], [[FGFR]], [[Ephrin]], [[KIT]], [[FLT3]], [[Ret]], [[Tie2]], [[TrkA]], [[ROR1]], [[RTK Endocytosis]], [[Dimerization]], [[Angioimmunoblastic T-cell Lymphoma]]
- Strong connections to strengthen: [[EGFR]] ↔ [[Receptor Tyrosine Kinases]], [[Receptor Tyrosine Kinases]] ↔ [[RAS]], [[Receptor Tyrosine Kinases]] ↔ [[mTORC1]]