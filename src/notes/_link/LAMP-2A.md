---
title: LAMP-2A
description: 'Lysosomal membrane receptor for chaperone-mediated autophagy. LAMP-2A is one of three alternatively spliced LAMP-2 isoforms; it binds HSC70-delivered KFERQ-containing cytosolic proteins at the lysosomal surface and releases them into the lysosome for degradation.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - autophagy
  - lysosome
aliases: [LAMP2A, LAMP-2a, Lysosomal-Associated Membrane Protein 2A, CD68]
---

# LAMP-2A

LAMP-2A is the lysosomal membrane protein that serves as the receptor for [[Chaperone-Mediated Autophagy]] (CMA). It is one of three alternatively spliced isoforms of the single *LAMP2* gene (the others being LAMP-1 and LAMP-2B), and it is the only isoform that functions as a substrate receptor.

## Structure and domains

The *LAMP2* gene encodes a type I transmembrane glycoprotein of 410 residues. Alternative splicing of exon 8 generates:

- **LAMP-1** — the "full-length" isoform, expressed broadly and involved in lysosome biogenesis, lysosome reformation, and autophagosome–lysosome fusion.
- **LAMP-2A** — produced by exclusion of the 87-residue luminal exon 8. It has a **short 11-residue C-terminal cytosolic tail** that is the essential CMA receptor element.
- **LAMP-2B** — retains exon 8 and is the predominant isoform in heart and skeletal muscle.

LAMP-2A is heavily glycosylated on its large luminal loop (~110 kDa precursor, ~45 kD carbohydrate content), which protects the lysosomal membrane from its own acid hydrolases. Structural work on the transmembrane domain has shown it forms unusually high-order oligomeric assemblies, and that the short C-terminal tail plus a small portion of the transmembrane segment are sufficient to reconstitute substrate binding in vitro.

> [!info] Mechanism
> LAMP-2A does not recognise cargo on its own. Cytosolic [[HSC70]] (HSPA8) first binds substrates carrying a **KFERQ-like pentapeptide motif** (one or two basic residues, one or two hydrophobic, one acidic, one glutamine — the two forms ΦKQΦD and ΦKFERQΦ). Delivery of the HSC70–substrate complex to the lysosomal surface, translocation of the substrate into the lumen, and substrate unfolding are all LAMP-2A-dependent events.

## Physiological function

> [!info] Source: [[_document_ - The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting]]
> In the third major autophagy type, chaperone-mediated autophagy, a complex of chaperone proteins and target proteins is directed into the lysosomes via the activity of LAMP-2A.

CMA is unusual among autophagy pathways in that it is **selective for soluble, monomeric cytosolic proteins only** — no vesicles, no membranes, no organelle cargo. Roughly 20–30% of cytosolic protein is estimated to be a CMA substrate, and canonical substrates include [[HSC70]] itself, cytosolic proteins prone to misfolding (α-synuclein, tau, K-Ras), and metabolic enzymes such as lactate dehydrogenase and the α-subunit of the pyruvate dehydrogenase complex.

Because CMA degrades individual proteins with high selectivity and does not require de novo vesicle formation, it is a slow but metabolically cheap form of quality control. It also **translocates substrates through the membrane one at a time**, so the rate of CMA flux is a direct readout of lysosomal transport capacity.

A physiologically important role is **lipid droplet turnover**: CMA delivers lipid droplet–associated proteins (including the perilipin family and possibly lipase components) into lysosomes, and this lipophagy-like function is required for normal hepatic and skeletal muscle lipid handling.

## Regulation and age-related decline

LAMP-2A abundance at the lysosomal membrane, not its total protein level, is the rate-limiting control point. In practice, flux is modulated by:

- **Transcription** of *LAMP2* and of the transcriptional regulator of CMA (a CRTC–CREB–MEF2 transcriptional network responsive to nutrient and stress cues).
- **Constitutive endocytosis and recycling** of LAMP-2A between the lysosome surface and the Golgi, which redistributes a pre-existing pool.
- **Degradation** of the receptor itself, which occurs through autophagy-dependent lysosomal turnover.

CMA flux declines with age in liver, muscle, and brain, and this decline is reproduced in animals by knocking out LAMP-2A. Conversely, LAMP-2A overexpression in liver or brain is sufficient to protect against age-related proteotoxicity and behavioural decline in mouse models — one of the more striking pro-longevity results in the field, and mechanistically attributable to removal of a specific substrate set.

> [!warning] Caveat
> CMA's protective effects in these models are substrate-specific, and in other contexts (for example acute proteotoxic or mitochondrial stress in neurons) blocking LAMP-2A is protective. LAMP-2A is therefore not a general "good" or "bad" node.

## Clinical relevance

Loss-of-function mutations in *LAMP2* cause **Danon disease**, an X-linked dominant vacuolar cardiomyopathy with variable skeletal myopathy and intellectual disability. The mechanistic work on Danon disease has been dominated by the LAMP-2B isoform's role in autophagosome–lysosome fusion rather than by CMA, which is one reason the two functions are often conflated. Notable reports indicate that LAMP-2A can partially compensate for LAMP-2B loss in heart, and that residual LAMP-2 expression in Danon disease may protect patients — but these are still open questions.

Clinically, LAMP-2A is more a **therapeutic target than a biomarker**. Strategies under investigation include pharmacologically increasing lysosomal LAMP-2A abundance to boost CMA, and the use of peptide antagonists that block the HSC70/LAMP-2A interaction to inhibit CMA in diseases where CMA contributes to pathology.

## Documents

- [[_document_ - The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting|The Beneficial and Adverse Effects of Autophagic Response to Caloric Restriction and Fasting]] — names LAMP-2A as the receptor that delivers chaperone–substrate complexes into lysosomes in the third autophagy type, chaperone-mediated autophagy, alongside macroautophagy and microautophagy.

## Connections

- [[Chaperone-Mediated Autophagy]] — LAMP-2A is the defining receptor of this pathway; CMA is mechanistically defined by what LAMP-2A can do, and no other isoform performs that function.
- [[HSC70]] — The cytosolic chaperone that recognises KFERQ motifs and delivers substrates to LAMP-2A; HSC70 is both the delivery vehicle and itself a CMA substrate.
- [[LAMP2]] — The parent gene; LAMP-2A is one isoform, and understanding isoform-specific functions was necessary to separate CMA from LAMP-1/2B's roles in lysosome biogenesis and autophagosome fusion.
- [[LAMP1]] — Sibling isoform responsible for lysosome biogenesis and autophagosome–lysosome fusion; often reported together with LAMP-2 in the same lysosomal membrane domains.
- [[Autophagy]] — LAMP-2A governs one of three canonical autophagy types, all three of which contribute to proteostasis but operate on completely different substrates.
- [[Spermidine]] — Spermidine is the best-described pharmacological CMA activator and increases LAMP-2A at the lysosomal membrane, making it a direct mechanistic link between the compound and this receptor.
- [[Proteotoxicity]] — Selectively clearing misfolded, aggregate-prone proteins is the best-characterised protective role of LAMP-2A, particularly in brain and liver during ageing.

## Linking Summary

- New links added: [[Chaperone-Mediated Autophagy]], [[HSC70]], [[LIR Motif]], [[Cathepsins]], [[Skeletal Muscle]], [[Proteotoxicity]], [[Spermidine]], [[LAMP2]], [[LAMP1]], [[Lysosome]], [[Autophagy]]
- Suggested notes to create: [[KFERQ Motif]], [[Lipid Droplet Lipophagy]], [[Danon Disease]], [[Mim1]]
- Strong connections to strengthen: [[LAMP-2A]] ↔ [[LAMP2]] (isoform relationships need explicit treatment in both notes), [[LAMP-2A]] ↔ [[Spermidine]] (pharmacological CMA activation is under-documented on the Spermidine side)
