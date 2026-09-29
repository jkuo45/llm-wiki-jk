---
title: EndMT
description: EndMT is an acronym covering two related mesenchymal transitions of endothelial origin - endocardial-to-mesenchymal transition during heart development, and the pathological endothelial-to-mesenchymal transition that supplies fibroblast-like cells to fibrosis.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - biological-process
  - development
  - fibrosis
  - cardiovascular
aliases:
  - EndoMT
  - endothelium-to-mesenchymal transition
---

# EndMT

**EndMT** is used in the literature for two distinct but mechanistically related
processes, and the vault uses the acronym for both:

- **Endocardial-to-mesenchymal transition** — the developmental process by which
  endocardial cells lining the atrioventricular and outflow cushions lose their
  endothelial identity and become cushion mesenchyme, from which atrioventricular
  valve leaflets, septa, and the membranous ventricular septum are built.
- **Endothelial-to-mesenchymal transition (EndoMT)** — a pathological process in
  adult and postnatal tissues in which vascular [[Endothelial Cells]] acquire
  mesenchymal features and contribute to fibrosis. See
  [[Endothelial-to-Mesenchymal Transition]] for the full note.

> [!warning] Naming caveat
> Because the acronym is overloaded, "EndMT" is not a safe search term: some
> papers use it for the embryonic endocardial process and some for the
> pathological adult endothelial process. Always check which cell of origin and
> which developmental stage a given paper means.

## Endocardial-to-mesenchymal transition in development

Endocardial cells are the endothelial lining of the primitive heart tube. The
cushion mesenchyme they generate is not derived from neural crest (as was
longly assumed) but predominantly from endocardium, established by
lineage-tracing and single-cell work in the mouse and chick heart.

The switch is driven by a small number of signaling inputs acting in sequence:

- [[Notch Signaling|Delta-Notch]] signaling is required to prime endocardial cells
  to respond, and works together with [[TGF-beta1|TGF-β]] to induce [[Snail]].
- [[TGF-beta1|TGF-β]] acting through [[SMAD2]]/[[SMAD3]] is the master
  profibrotic driver; [[Snail]] represses endothelial genes while
  [[Zeb1]] and [[Klf4]] promote the mesenchymal programme.
- [[Wnt]] signalling contributes to mesenchymal proliferation once the
  transition has been initiated.

Downstream, the transitioned cells express [[ACTA2]] (alpha-smooth muscle
actin), vimentin, and type I/III [[Collagen]], and behave as migratory
mesenchymal cells that populate the cardiac jelly.

## Endothelial-to-mesenchymal transition in disease

In the adult, the same machinery is reactivated by injury. The trigger is
usually a combination of TGF-β and pro-inflammatory co-signals, with
[[Notch Signaling|notch]], [[FGF]], [[Wnt]], and PI3K/[[AKT]] acting as
modulators. Arsenic trioxide, for example, drives EndoMT in human aortic
endothelial cells through an AKT/GSK-3beta/Snail axis, and blocking that axis
with a PI3K inhibitor abolishes the transition.

The lineage contribution of EndoMT to fibrosis is real but its magnitude is
contested. Fate-mapping in mice with an endothelial-restricted beta-galactosidase
reporter (Tie1-Cre;R26RstoplacZ) shows EndMT-derived, FSP1-positive cells accumulating around cardiac capillaries in
fibrotic hearts, and [[SMAD3]] knockout reduces both EndMT and fibrosis. The
arithmetic is less tidy than the enthusiasm implies: in most tissues the
majority of myofibroblasts arise from resident fibroblasts, and the EndMT
contribution is tissue- and time-dependent.

> [!info] Regulation by the SIRT6-GATA5 axis
> [[SIRT6]] raises [[GATA5]] transcriptionally, and the SIRT6-GATA5 programme
> suppresses EndoMT, lowers oxidative stress, and preserves endothelial barrier
> integrity. SIRT6 loss, with the accompanying fall in GATA5, accelerates
> EndoMT and vascular lesion formation - see the [[GATA5]] note.

Where EndoMT is well-supported as a disease mechanism:

- [[Cardiac Fibrosis]] and [[Pulmonary Fibrosis]] - conversion of endothelium
  into collagen-producing cells.
- [[Pulmonary Arterial Hypertension]] - EndMT-derived alpha-SMA-overexpressing
  cells thicken the arterial media.
- [[Atherosclerosis]] - plaque neointimal cells of endothelial origin.

## Connections

- [[Endothelial-to-Mesenchymal Transition]] — the canonical adult form of EndMT;
  this note covers the shared mechanism and the developmental variant, that note
  covers the senescence/SASP angle in detail.
- [[Endocardial-to-Mesenchymal Transition]] — the developmental form, still a
  suggested note; it carries the three existing links that currently use that
  spelling.
- [[Snail]] — the core transcription factor that represses endothelial genes in
  both forms; snail knockout blocks TGF-beta2-induced mural differentiation
  of endothelial cells.
- [[TGF-beta1]] — the dominant inducing cytokine in both development and
  disease.
- [[ACTA2]] — the marker most often used to score EndMT, and the reason the
  process is also described as an alpha-SMA transition.
- [[PECAM1]] / [[CDH5]] — the endothelial markers that are lost; their
  disappearance alongside ACTA2 gain is the diagnostic signature.
- [[GATA5]] — SIRT6-driven GATA5 expression restrains EndMT.
- [[Fibrosis]] — the tissue-level outcome that both forms converge on.

## Documents

- [[GATA5]]
  - Documents the SIRT6-GATA5 axis that suppresses EndMT and preserves
    vascular barrier function; supplies the transcriptional-control angle.

## Linking Summary

- New links added: [[Endothelial-to-Mesenchymal Transition]], [[Endothelial Cells]], [[Snail]], [[Zeb1]], [[Klf4]], [[TGF-beta1]], [[SMAD2]], [[SMAD3]], [[Notch Signaling]], [[Notch]], [[Wnt]], [[FGF]], [[ACTA2]], [[PECAM1]], [[CDH5]], [[Collagen]], [[Cardiac Fibrosis]], [[Pulmonary Fibrosis]], [[Pulmonary Arterial Hypertension]], [[Atherosclerosis]], [[Fibrosis]], [[SIRT6]], [[GATA5]]
- Suggested notes to create: [[Endocardial-to-Mesenchymal Transition]], [[Valve Development]], [[GSK-3beta]], [[Arsenic Trioxide]], [[Endocardial Cells]] — removed as already existing: Akt, Cardiac Development, FSP1
- Strong connections to strengthen: [[EndMT]] <-> [[Endothelial-to-Mesenchymal Transition]] (merge candidate: consider folding the EndoMT note into this one, or making this note a short redirect once the endocardial note exists), [[EndMT]] <-> [[Cardiac Development]]
