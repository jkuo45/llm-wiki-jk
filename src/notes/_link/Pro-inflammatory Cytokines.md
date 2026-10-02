---
title: Pro-inflammatory Cytokines
description: 'The class of low-molecular-weight secreted proteins whose canonical members IL-1, IL-6 and TNF-alpha drive and amplify innate inflammation, acting through NF-kappaB, JAK-STAT and inflammasome pathways. This is a functional category, not a single protein, and includes both IL-1 family members and interferons.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - concept
  - inflammation
  - immunology
aliases: [Inflammatory Cytokines, Proinflammatory Cytokines]
---

# Pro-inflammatory Cytokines

> [!warning] This is a category, not a molecule
> "Pro-inflammatory cytokines" is a functional description, not a protein family. There is no pro-inflammatory cytokine gene. The term is a set of conventionally grouped secreted signalling proteins — chiefly **IL-1, IL-6, and TNF-α**, with IL-12, IL-17, IL-18, IL-23, IL-8/CXCL8, and the interferons included depending on the author. It is deliberately contrasted with anti-inflammatory cytokines such as [[IL-10]], TGF-β, and the glucocorticoid-driven pathway. The related note [[Cytokines]] covers the broader superfamily; this note covers the pro-inflammatory subset.

## The canonical three

| Cytokine | Receptor | Principal transcription factor | Signature role |
| --- | --- | --- | --- |
| [[TNFα]] | [[TNFR1]] | [[NF-κB]] | Master upstream amplifier; drives endothelial adhesion molecules, chemokines, and acute-phase response |
| [[IL-6]] | [[IL-6R]] + gp130 | [[JAK-STAT Signaling|STAT3]] | Acute-phase induction (CRP, fibrinogen); the main cytokine of the chronic phase |
| [[IL-1β]] | [[IL-1R]] | NF-κB (priming) | Requires [[NLRP3]] inflammasome processing from pro-form; potent fever and neutrophil recruitment |

IL-1α behaves similarly to IL-1β but is constitutively active as the pro-form. IL-1β and [[IL-18]] share a specific feature worth remembering: both are made as inactive precursors and require caspase-1 cleavage inside the inflammasome, so their release reports inflammasome activation specifically rather than general inflammation.

IL-1β, IL-6, and TNF-α are also the best-characterised **SASP components** released by [[Senescent Cells]], which is the mechanism by which cellular senescence becomes pro-inflammatory rather than merely growth-arrested.

## Two modes of production

The distinction matters for interpreting any experiment:

- **Induced, NF-κB-driven** — classical activation of macrophages and other myeloid cells by microbial products via TLRs. Rapid, large-amplitude, and the mode upregulated during infection and acute injury.
- **Priming-independent, second-signal-driven** — cytokine release triggered by the [[NLRP3]] inflammasome, where caspase-1 processes pro-IL-1β and pro-IL-18. This is the mode most relevant to chronic sterile inflammation.

Chronic low-grade elevation of IL-6 and TNF-α — without any infection — is the operational definition used in inflammaging and metabolic-inflammation research, and is what the term "pro-inflammatory cytokine milieu" typically denotes in a geroscience context.

## Feedback, antagonism, and the resolution problem

The network is not simply pro-inflammatory; it is self-limiting, and failure to resolve it is what defines chronic inflammation:

- **Corticosteroids and [[Glucocorticoids]]** suppress IL-1, IL-6, and TNF-α transcription through glucocorticoid-receptor-mediated repression of NF-κB and AP-1 — the pharmacological basis of anti-inflammatory therapy.
- **IL-10** is the key anti-inflammatory brake, suppressing macrophage TNF and IL-1 production; deficiency of IL-10 signalling causes experimental inflammatory bowel disease in mice, and IL-10 receptor mutations cause early-onset inflammatory bowel disease in humans.
- **Soluble receptors and decoys** (soluble IL-6R, soluble TNFR, IL-1RA) buffer circulating cytokine.
- **SOCS3** is induced by IL-6 and terminates JAK-STAT signalling — a classic negative feedback loop. [[Mitochondrial ROS]] and [[SIRT1]] activity also modulate NF-κB tone, which is why the sirtuin literature in this vault treats the sirtuins as anti-inflammatory via exactly these cytokines.

## Clinical relevance

> [!important] Clinical significance
> Cytokine blockade is one of the clearest therapeutic successes in modern medicine, and it traces directly to the pro-inflammatory class: TNF inhibition in rheumatoid arthritis, IBD, and psoriasis; IL-1 blockade in [[Gout]] (where NLRP3 is triggered by urate crystals), [[Anakinra]] and IL-1β blockade in cryopyrin-associated periodic syndrome; IL-6 blockade (tocilizumab) in rheumatoid arthritis and cytokine-release syndromes; and [[Canakinumab]] in CAPS, for the trial that directly tested the causal role of IL-1β in atherosclerotic cardiovascular disease.

The clinical costs of the same axis are equally well documented: [[Cytokine Storm]] and [[Sepsis]] mortality, cytokine release syndrome after checkpoint blockade and CAR-T therapy, the IL-6/IL-1 axis driving hyperinflammation after CAR-T, and the chronic IL-6/CRP elevation that predicts cardiovascular risk independent of lipid levels.

For this vault's interests specifically, the pro-inflammatory cytokine network is the mechanistic bridge between three otherwise-separate literatures: mitochondrial dysfunction and ROS (a second signal for NLRP3), cellular senescence and the [[SASP]], and [[Inflammaging]]. A cell that both fails mitochondrial quality control and becomes senescent is doubly primed for constitutive IL-1β and IL-6 release.

## Documents

- [[_document_ - sirtuins in health and disease s41392-022-01257-8|sirtuins in health and disease s41392-022-01257-8]] — describes TNF-α as the archetypal pro-inflammatory cytokine produced by macrophages and monocytes, frames NF-κB as the central regulator driving cytokine, chemokine, inflammasome-component, and adhesion-molecule expression, and documents SIRTUIN-mediated suppression of TNF-α and IL-1β via NF-κB and NLRP3.
- [[_document_ - SASP, senescent cells, grok|SASP, senescent cells, grok]] — documents pro-inflammatory cytokines as core SASP components released by senescent cells.
- [[_document_ - cellular_senescence_ipf_diseases-14-00201|cellular_senescence IPF diseases]] — treats pro-inflammatory cytokine secretion as a defining senescent-cell phenotype in fibrotic lung disease.

## Connections

- [[Cytokines]] — The parent superfamily; the pro-inflammatory subset is a functional slice of it, and the two notes should be cross-referenced rather than treated as independent entities.
- [[TNFα]] — The archetypal pro-inflammatory cytokine and the most clinically targeted member of the class.
- [[IL-6]] — Acute-phase cytokine acting through JAK-STAT3; central to both chronic inflammation and the SASP.
- [[IL-1β]] — Inflammasome-processed cytokine; its dependence on caspase-1 makes it the readout that distinguishes inflammasome-driven inflammation from NF-κB-driven inflammation.
- [[IL-18]] — Shares the inflammasome-processing requirement with IL-1β; frequently reported together with it.
- [[IL-1α]] — Constitutively active pro-form counterpart to IL-1β; the reason "IL-1" release can occur without inflammasome processing.
- [[IL-10]] — The principal anti-inflammatory antagonist of the class, and the cytokine whose loss defines a different disease category entirely.
- [[Chemokines]] — CXCL8/IL-8 and the CC and CXC chemokines are produced by the same NF-κB response and are often measured alongside cytokines; the boundary between the two classes is conventional rather than structural.
- [[NF-κB]] — The central transcriptional integrator for the whole pro-inflammatory programme; a majority of pro-inflammatory cytokines and chemokines have NF-κB-dependent promoters.
- [[JAK-STAT Signaling]] — The IL-6 and interferon arm, with SOCS3 providing the negative feedback.
- [[NLRP3]] — The inflammasome that processes IL-1β and IL-18; the link between pro-inflammatory cytokines and the two-signal activation model.
- [[Inflammasome]] — Produces the mature forms of the two cytokines that are not constitutively active.
- [[SASP]] — The senescence-associated secretory phenotype, whose pro-inflammatory component is largely IL-6, IL-1β, and TNF-α.
- [[Senescent Cells]] — The cellular source of chronic pro-inflammatory cytokine secretion in ageing tissues.
- [[Inflammaging]] — The chronic, low-grade, sterile elevation of this cytokine class that defines the inflammaging phenotype.
- [[Gout]] — The clinical case that established inflammasome-driven IL-1β as a drug target.
- [[Atherosclerosis]] — One of the chronic diseases where systemic IL-6/CRP elevation is an independent predictor of events.
- [[Canakinumab]] — The IL-1β antibody that made the pro-inflammatory cytokine class a direct cardiovascular hypothesis test.
- [[Anakinra]] — IL-1 receptor antagonist approved in inherited autoinflammatory disease.
- [[Cytokine Storm]] — The extreme, uncontrolled form of pro-inflammatory cytokine release; the main clinical failure mode of this axis.
- [[Glucocorticoids]] — The pharmacological brake on pro-inflammatory cytokine transcription, and the origin of the anti-inflammatory/immunosuppression distinction.
- [[COX-2]] — Not a cytokine, but the parallel arm of the same inflammatory output: IL-1 and TNF drive COX-2 and its prostaglandin output, which is why COX-2 inhibition is classed as anti-inflammatory.
- [[SIRT1]] — Deacetylates NF-κB components to suppress pro-inflammatory transcription, per the sirtuin document in this vault.
- [[Mitochondrial ROS]] — A second signal for NLRP3 and thus a route to IL-1β release independent of any infection.

## Linking Summary

- New links added: [[Cytokines]], [[TNFα]], [[IL-6]], [[IL-1β]], [[IL-1α]], [[IL-18]], [[IL-10]], [[Chemokines]], [[NF-κB]], [[JAK-STAT Signaling]], [[NLRP3]], [[Inflammasome]], [[SASP]], [[Senescent Cells]], [[Inflammaging]], [[Gout]], [[Atherosclerosis]], [[Canakinumab]], [[Anakinra]], [[Cytokine Storm]], [[Glucocorticoids]], [[COX-2]], [[SIRT1]], [[Mitochondrial ROS]], [[Sepsis]]
- Suggested notes to create: [[IL-12]], [[IL-17]], [[IL-8]], [[CXCL8]], [[Interferon-gamma]], [[TNFR1]], [[IL-6R]], [[gp130]], [[SOCS3]], [[Acute Phase Response]], [[C-reactive Protein]]
- Strong connections to strengthen: [[Pro-inflammatory Cytokines]] ↔ [[SASP]] (the SASP note should name the specific cytokines rather than leaving the class unnamed), [[Pro-inflammatory Cytokines]] ↔ [[Inflammaging]] (the cytokine-level definition of inflammaging is currently missing), [[Pro-inflammatory Cytokines]] ↔ [[Cytokines]] (the parent/child split needs a single explicit cross-reference on both sides)
