---
title: BNIP3
description: "BNIP3 is a BH3-only BCL-2 family member and outer mitochondrial membrane mitophagy receptor that binds LC3 through an LIR motif; it is transcriptionally induced by HIF-1α under hypoxia, where it can also drive permeability transition and delayed neuronal death."
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - mitophagy
  - hypoxia
  - apoptosis
aliases: [BCL2 Interacting Protein 3, Bnip3, NIP3, BCL2/BNIP3]
---

# BNIP3

**Overview:** BNIP3 is a ~228-residue, single-pass transmembrane protein of the **BH3-only** subfamily of the [[Apoptosis|BCL-2 family]], localized to the [[Outer Mitochondrial Membrane|outer mitochondrial membrane]] (OMM). It is best known today as a **receptor for ubiquitin-independent [[Mitophagy]]** but was originally cloned as a strong adenovirus E1B 19-kDa binding protein and a hypoxia-inducible pro-death factor.

## Structure and domains

- **N-terminal BH3 domain** — the only conserved region. Unlike canonical BH3-only proteins, BNIP3's BH3 helix is *unusual*: it is flanked by hydrophobic residues that confer **anti-apoptotic** activity in overexpression assays, and its ability to displace BCL-2 is weak. Most of BNIP3's cell-death activity therefore comes from the transmembrane domain, not the BH3 motif.
- **LIR motif (LC3-interacting region)** — a conserved WXXL sequence that binds the LC3 [[LIR Motif|LC3-interacting pocket]] on the outer lip of autophagosomes. Binding is phosphorylation-regulated (Ser17, Thr43, Ser212), which tunes receptor activity.
- **C-terminal transmembrane domain** (residues ~219–228) — inserts into the OMM and can oligomerize; this region carries the necrosis/permeability-transition activity.
- BNIP3 also carries a **Walker-type ATPase-like domain** in the N-terminal region with structural homology to the AAA+ ATPase p97/VCP, which is required for oligomerization and autophagosome recruitment in some models.

> [!info] The BH3/NIX pair is the archetype of OMM mitophagy receptors
> BNIP3 and its close paralog [[NIX]] (BNIP3L) are the only well-established mitophagy receptors that sit constitutively in the OMM and require no ubiquitination or cytosolic adaptor (unlike [[OPTN]], [[NDP52]], [[NBR1]], or [[p62]]). Cells lacking both retain mitochondria and, in reticulocytes, become anemic.

## Mechanism of action

**As a mitophagy receptor.** Under hypoxia or nutrient stress, [[HIF-1α]] drives BNIP3 transcription. BNIP3 oligomerizes in the OMM, binds LC3 on the phagophore/autophagosome through its LIR motif, and thereby tethers autophagosomes to damaged mitochondria. The autophagy machinery — notably the [[Rubicon]]-containing class III [[Vps34]] complex, which is constitutively OMM-bound — drives engulfment and [[Mitochondrial Fission|fission]] of the sequestered region.

**Interaction with the fusion/fission machinery.** BNIP3 engages [[OPA1]] and [[DRP1]], promoting fragmentation of the mitochondrial network so that damaged subunits can be isolated and removed. Loss of BNIP3 blocks the fission step that mitophagy requires.

**As a cell-death effector.** Under severe or prolonged hypoxic/ischemic stress, BNIP3 inserts more extensively into the OMM, causing loss of [[Mitochondrial Membrane Potential|ΔΨm]] and triggering [[Mitochondrial Permeability Transition Pore|mitochondrial permeability transition]]. This produces a delayed, non-apoptotic form of cell death distinct from MOMP-driven apoptosis — historically termed "delayed neuronal death" in ischemia models.

> [!warning] The mitophagy/death decision is regulated upstream, not by BNIP3 itself
> Phosphorylation state of BNIP3 (Estrogen-receptor-α and AMPK-driven Thr43 and Ser17 phosphorylation in this model; 14-3-3 binding), BCL-2/[[Mcl-1]] availability, and [[Retinoblastoma Protein|Rb]]-dependent sequestration all shift BNIP3 between clearance and death. BNIP3 is best viewed as a **commitment switch** whose output is set by the surrounding network rather than by its own catalytic activity.

## Physiological roles

- **Reticulocyte maturation.** NIX is the dominant receptor here, removing mitochondria before splenic passage. BNIP3 plays a comparable role in other lineages.
- **Cardiomyocyte mitochondrial quality control.** BNIP3/NIX-mediated mitophagy removes damaged mitochondria from post-mitotic cells; excessive or unchecked activity potentiates heart failure.
- **Immune cell metabolism.** BNIP3/NIX remove depolarized mitochondria from activated [[T Cell|T cells]] and other cells, limiting ROS and restraining activation.

## Pathology

| Context | Finding |
| --- | --- |
| Ischemia/stroke | BNIP3 induction in neurons via HIF-1α; knockout improves survival in models |
| [[Alzheimer's Disease]] | BNIP3 levels are *lower* in patient brain than in controls — impaired mitochondrial clearance, not excess |
| Cancer | Upregulated in early/premalignant lesions of pancreatic and breast tumours but frequently *lost* as tumours become invasive; loss is associated with glycolytic shift and [[Hypoxia]] adaptation |
| Heart failure | Excess BNIP3/NIX mitophagy worsens remodelling |
| Aging | [[FOXO3a]]/[[SIRT1]]-dependent BNIP3 induction declines with age and with falling [[NAD+]], impairing mitochondrial turnover |

## Documents

- [[_document_ - s41514-026-00424-3_reference_mitophagy_neuroprotection|Targeting Mitophagy for Neuroprotection]] — BNIP3 as a hypoxia-inducible mitophagy receptor: direct LC3 binding via the LIR motif, ΔΨm loss and mPTP opening after insertion, and rescue of delayed neuronal death by BNIP3 knockout.
- [[_document_ - The role of mitochondrial dynamics in disease|The role of mitochondrial dynamics in disease]] — BNIP3 as an OMM receptor for hypoxia-induced mitophagy, engaging OPA1 and DRP1, upregulated in early premalignant pancreatic and breast lesions and lost with invasiveness, and potentiating heart failure.
- [[_document_ - mTOR signaling at a glance|mTOR signaling at a glance]] — BNIP3 (like PML) reduces mTORC1 signalling under hypoxia by disrupting the mTOR–[[Rheb]] interaction.
- [[_document_ - crosstalk_cell_death_mechanisms_s41420-025-02328-9|Crosstalk between cell death mechanisms]] — places BNIP3 among OMM-associated death effectors acting at the mitochondrial level.

## Connections
- [[Mitophagy]] — BNIP3's best-established role: an OMM receptor that binds LC3 directly and requires no ubiquitination or adaptor protein.
- [[LIR Motif]] — the short WXXL sequence in BNIP3 that engages the LC3 pocket; phosphorylation-tunable.
- [[NIX]] — closest paralog, functionally interchangeable with BNIP3 at the OMM; jointly required for efficient mitophagy.
- [[HIF-1α]] — the transcriptional activator of BNIP3 under hypoxia and ischemia.
- [[OPA1]] and [[Mitochondrial Fission]] — BNIP3 engages the fusion/fission machinery to fragment the network so damaged units can be isolated.
- [[Mitochondrial Permeability Transition Pore]] — the mechanism by which BNIP3 insertion produces ΔΨm loss and delayed, non-apoptotic cell death.
- [[Mcl-1]] and [[Apoptosis]] — BCL-2 family availability determines whether BNIP3's BH3 domain engages the apoptotic machinery or the autophagic one.
- [[OPTN]] — the canonical ubiquitin-dependent receptor, contrasted with BNIP3's ubiquitin-independent route; reduced BNIP3 in AD brain blunts this arm of mitochondrial quality control.
- [[FOXO3a]] and [[SIRT1]] — the transcriptional axis that induces BNIP3, and one that weakens with age as [[NAD+]] falls.
- [[Cardiomyocytes]] — post-mitotic cells where BNIP3/NIX mitophagy is protective at baseline but becomes maladaptive in heart failure.
- [[Cancer]] — BNIP3 is a biphasic marker: gained early, lost late, with loss favouring a glycolytic, hypoxia-adapted phenotype.

## Linking Summary
- New links added: [[Rubicon]], [[Vps34]]
- Suggested notes to create: [[Reticulocyte]], [[14-3-3 Proteins]], [[Delayed Neuronal Death]] AMPK, BNIP3L, Bcl-2, Bcl-2 family, Dyspnea, Erβ, Necrosis
- Strong connections to strengthen: [[BNIP3]] ↔ [[NIX]], [[BNIP3]] ↔ [[LC3]], [[BNIP3]] ↔ [[HIF-1α]], [[BNIP3]] ↔ [[Mitochondrial Permeability Transition Pore]]
