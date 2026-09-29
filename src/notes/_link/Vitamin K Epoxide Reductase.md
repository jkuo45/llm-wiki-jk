---
title: Vitamin K Epoxide Reductase
description: Vitamin K epoxide reductase is the VKORC1-encoded endoplasmic-reticulum enzyme system that recycles vitamin K epoxide back to the hydroquinone cofactor required by gamma-glutamyl carboxylase; inhibiting it blocks gamma-carboxylation of clotting factors and is the mechanism of warfarin anticoagulation.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - enzyme
  - pathway
  - drug-target
aliases: [VKOR, vitamin K epoxide reductase complex, VKORC, vitamin K reductase]
---

# Vitamin K Epoxide Reductase

**Vitamin K epoxide reductase (VKOR)** is the enzyme system that closes the
[[Vitamin K]] cycle. It is encoded by *VKORC1* and is the pharmacological target of
[[Warfarin]]. Because γ-carboxylation consumes reduced vitamin K and produces an epoxide
that cannot be recycled, without VKOR the vitamin K-dependent coagulation factors cannot be
maintained in their active form — which is why its inhibition is anticoagulant and why
vitamin K administration can reverse that inhibition.

> [!note] Scope of this note
> The protein-level detail — topology, the four catalytic cysteines, the closed/open
> conformational cycle, the Tyr139/Asn80 warfarin contacts, genotype–dose relationships —
> is written up under [[VKORC1]]. This note covers the cycle-level function and its
> consequences beyond hemostasis.

## The cycle

1. **γ-Glutamyl carboxylase** uses **vitamin K hydroquinone (KH₂)** as a cofactor,
   oxidising it to **vitamin K epoxide (KO)** while converting clusters of glutamate
   residues on its substrates into Gla residues.
2. **VKOR** reduces KO to the **quinone (K)**, then reduces K back to KH₂ — four electrons
   delivered as two two-electron steps, each coupled to oxidation of the C132/C135 active-
   site disulfide.
3. KH₂ is regenerated and reused. The cycle is therefore catalytic in vitamin K but not in
   epoxide: every carboxylation event must be paid for with a full four-electron reduction.

Electron supply to VKOR comes from ER glutathione and redox partner proteins, delivered to
the C43/C51 relay pair.

## Substrates of carboxylation

VKOR supports the activation of the full set of vitamin K-dependent proteins, not just
clotting factors:

| Protein | Consequence of undercarboxylation |
| --- | --- |
| Factors II, VII, IX, X, protein C, protein S | Bleeding diathesis |
| Matrix Gla protein | Loss of inhibition of ectopic calcification |
| Osteocalcin | Altered bone mineralisation; links to fracture risk and glucose handling |
| Gas6, RORγ ligands, endothelial protein C receptor | Vascular and inflammatory phenotypes |

This breadth is why VKOR inhibition is not purely a haemostatic drug and why
long-term warfarin exposure is associated with bone and vascular calcification effects —
and why the paralog VKORC1L1, which has minimal epoxide-reductase activity, is thought to
support matrix Gla protein carboxylation and bone biology rather than coagulation.

## Why a second reductase matters clinically

An unresolved question in the field: whether VKOR alone completes the K → KH₂ step, or
whether it works alongside a **warfarin-resistant vitamin K quinone reductase**.

Evidence for cooperation: clotting defects during warfarin therapy are corrected by
administering large doses of vitamin K; a second quinone reductase with high Km has been
demonstrated in liver; and 2018 dissection showed warfarin inhibits the overall
carboxylation-supporting activity ~400-fold more strongly than KO→K reduction alone,
indicating **uncoupling** of the two half-reactions rather than simple inhibition of both.
Cells expressing this second activity were markedly less sensitive to warfarin.

The identity of this enzyme remains unknown. It is plausible that tissues differ in how
much they express it, which would mean uniform warfarin dose does not produce uniform
undercarboxylation — a clinically relevant uncertainty with no resolution yet.

## Inhibition

- **Warfarin** and related 4-hydroxycoumarins occupy the same pocket as the vitamin K
  naphthoquinone, hydrogen-bonding via Tyr139 and Asn80, and effectively blocking both the
  partially and fully oxidised catalytic states. Inhibition is best described as reversible
  in mechanism but effectively irreversible in practice given the affinity.
- **Phenprocoumon, acenocoumarol** act by the same mechanism.
- **Direct oral anticoagulants do not target VKOR** — dabigatran, rivaroxaban, apixaban and
  edoxaban act on thrombin or factor Xa directly. The distinction matters for reversal:
  vitamin K is the antidote for VKAs only.

## Documents

- [[Warfarin]]
  - Supplies the inhibitory mechanism, the label dosing/ramp-up, and the reasons this
    enzyme's cycle-level role matters beyond clotting factors.

## Connections

- [[VKORC1]] — the gene product that constitutes this enzyme; the protein-level note.
- [[Warfarin]] — the principal clinical inhibitor and the source of most of what is known
  about VKOR's drug-binding site.
- [[Vitamin K]] — the substrate cycle this enzyme runs; the parent topic.
- [[Osteoporosis]] — VKORC1L1's contribution to matrix Gla protein and osteocalcin
  carboxylation links the vitamin K cycle to bone.
- [[Anticoagulation]] — the therapeutic category that exists because VKOR can be
  pharmacologically shut down.
- [[Endoplasmic Reticulum]] — the compartment VKOR resides in and from which it draws
  reducing equivalents.
- [[Heparin]] — an antithrombotic whose mechanism (indirect thrombin inhibition via
  antithrombin) is entirely distinct from VKOR inhibition; the contrast is why vitamin K
  does not reverse heparin.
- [[Thrombin]] — the downstream protease whose generation is curtailed by lack of
  carboxylated clotting factors.
- [[p53]] — a reported but poorly characterised route by which VKOR/vitamin K status
  intersects with apoptosis signalling; the evidence base is thin.

## Linking Summary

- New links added: [[VKORC1]], [[Warfarin]], [[Vitamin K]], [[Osteoporosis]],
  [[Anticoagulation]], [[Endoplasmic Reticulum]], [[Heparin]], [[Thrombin]], [[p53]]
- Suggested notes to create: [[gamma-Glutamyl Carboxylase]], [[Vitamin K Cycle]],
  [[VKORC1L1]], [[Matrix Gla Protein]], [[Osteocalcin]], [[Phenprocoumon]],
  [[Acenocoumarol]], [[Factor Xa Inhibitor]], [[Antithrombin]]
- Strong connections to strengthen: [[Vitamin K Epoxide Reductase]] ↔ [[VKORC1]],
  [[Vitamin K Epoxide Reductase]] ↔ [[Warfarin]], [[Vitamin K Epoxide Reductase]] ↔ [[Vitamin K]]
