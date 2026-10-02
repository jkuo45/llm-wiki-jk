---
title: IRF7
description: Interferon regulatory factor 7 is the master transcriptional regulator of type I and type III interferon responses, acting downstream of pattern-recognition receptors via TBK1 and cooperating with IRF3 at interferon-stimulated response elements.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags:
  - protein
  - transcription-factor
  - innate-immunity
  - interferon
aliases:
  - Interferon regulatory factor 7
  - IRF-7
---

# IRF7

**Interferon regulatory factor 7 (IRF7)** is a [[Transcription Factor]] of the IRF family and the master regulator of type I interferon ([[IFN-β]], IFN-α) and type III interferon gene expression. Its defining role is the **amplification loop**: a small amount of interferon produced by [[IRF3]] induces IRF7 protein, and IRF7 then drives the bulk of the delayed interferon response (Honda *et al.*, *Nature* 2005, PMID 15800576).

## Structure & Domains

IRF7 (human isoforms ~470–580 residues) has an N-terminal DNA-binding domain (containing the characteristic IRF "winged helix" motif with a conserved tryptophan cluster), an association domain for IRF partner proteins, and a C-terminal regulatory region containing the interferon-stimulated response element (ISRE)-binding region and a constitutively interacting domain.

> [!info] Regulatory logic: latent then amplification-competent
> In resting cells IRF7 is largely held in an autoinhibited conformation as a monomer. Monoubiquitination (on K10) targets it for [[Proteasome]] turnover; deubiquitination by [[OTULIN]] stabilises it and licenses activation. Phosphorylation by [[TBK1]] and [[IKKε]] on the C-terminus relieves autoinhibition, allowing dimerisation and nuclear import. In mice, an N-terminal SUMOylation site and a C-terminal SUMO-interaction motif add a further layer of negative control.

## Mechanism of Action

- **MyD88-independent (cytosolic nucleic acid) route:** [[RIG-I]] and [[MDA5]] signal through [[MAVS]] to [[TBK1]] and [[IKKε]], which phosphorylate [[IRF3]] and IRF7.
- **MyD88-dependent (endosomal TLR) route:** TLR7, TLR8 and [[Toll-like Receptor|TLR9]] signal through [[MyD88]] and [[IRAK4]] to IRF7; in [[Plasmacytoid Dendritic Cells]] this pathway alone produces the very large IFN-α burst, and it is entirely IRF7-dependent.
- **Execution:** active IRF7 binds ISREs together with [[NF-κB]] and AP-1, inducing [[Interferon-Stimulated Genes]] such as [[ISG15]], PKR, Mx1 and 2'-5'-oligoadenylate synthetase.

Human IRF7 is also subject to [[Alternative Splicing]] of intron 1; intron retention generates an N-terminally extended isoform (exIRF7) with increased dimerisation and stronger IFN induction in response to double-stranded RNA sensing (*Cell Rep* 2025, PMID 40833856).

## Physiological Function & Clinical Relevance

IRF7 loss-of-function in humans causes a mild immunodeficiency with impaired IFN response and susceptibility to early-life viral disease; IRF7 amplification drives systemic lupus erythematosus-associated interferon signatures, and IRF7 gain-of-function variants underlie Singleton-Merten syndrome, an interferonopathy with growth retardation, aortic calcification and osteoporosis.

> [!warning] Therapeutic target in both directions
> IRF7 inhibition is pursued to dampen pathogenic type I interferon in lupus and interferonopathies. Conversely, IRF7 agonists and IFN-α inducers are being explored as cancer immunotherapy: dendritic cells that tolerate antigen still need IRF7 to acquire the immunogenic state that primes CD8+ T cells. IRF7 also lies downstream of [[Imiquimod]]-type TLR7 agonists and of the [[cGAS-STING Pathway]] — the latter provides the interferon-rich arm of the [[SASP]] in senescent cells, sitting alongside [[IRF3]].

## Documents

- (no document notes yet)

## Connections

- [[IRF3]] — Acts in concert with IRF7 at ISREs and is functionally upstream of it: IRF3-induced IFN-β upregulates IRF7 protein, which then amplifies the response.
- [[TBK1]] — The principal kinase that phosphorylates and activates IRF7 downstream of pattern-recognition receptors.
- [[Interferon]] — IRF7 is the transcriptional node that converts interferon signalling into a full antiviral gene programme.
- [[cGAS-STING Pathway]] — Cytosolic DNA sensing through STING activates TBK1→IRF7, supplying the interferon-rich branch of senescence-associated and sterile inflammatory signalling.
- [[Imiquimod]] — TLR7 agonist whose antiviral and antitumour activity requires the MyD88→IRF7 axis.
- Singleton-Merten syndrome — Monogenic interferonopathy caused by IRF7 gain-of-function variants.
- [[Innate Immunity]] — IRF7 is a core effector of the antiviral arm of innate immunity in most nucleated cells.

## Linking Summary
- New links added: [[MAVS]], [[IRAK4]], [[Toll-like Receptor]], [[Proteasome]], [[OTULIN]], [[IKKε]], [[Interferon-Stimulated Genes]], [[ISG15]], [[Alternative Splicing]], [[Immune System]], [[SUMOylation]]
- Suggested notes to create: [[ISRE]], [[Interferonopathy]], [[Singleton-Merten Syndrome]], [[TLR7]], [[TLR8]], [[Type III Interferon]]
- Strong connections to strengthen: [[IRF7]] ↔ [[IRF3]], [[IRF7]] ↔ [[SASP]], [[IRF7]] ↔ [[Type I Interferon]]