---
title: FASN
description: FASN is the human fatty acid synthase, a single 251 kDa multi-enzyme polypeptide that condenses one acetyl-CoA and seven malonyl-CoA plus 14 NADPH into palmitate, the committed enzyme of de novo lipogenesis.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - enzyme
  - protein
  - lipid-metabolism
  - metabolism
aliases:
  - fatty acid synthase
  - FAS
  - FASN1
---

# FASN

FASN (fatty acid synthase) is the multifunctional enzyme complex that performs
the bulk of de novo lipogenesis. In humans it is encoded by a single gene,
FASN on chromosome 2q24, whose product is a 2,511-residue, ~251 kDa polypeptide
that folds into a homodimer with an overall dumbbell architecture.

> [!info] What is actually conserved
> Mammalian FASN is a single protein with all catalytic activities on one
> chain, whereas the yeast and plant type-I FAS enzymes are large multi-subunit
> complexes. Do not carry the textbook "seven enzymes and an ACP" picture into
> a human context unaltered - the subunits and domains are separable parts of
> one polypeptide.

## Domain architecture

- **Acyl carrier protein (ACP)** - carries the growing acyl chain on a
  4'-phosphopantetheine prosthetic group derived from [[Coenzyme A|coenzyme A]].
  This is the swinging arm of the assembly line.
- **Malonyl/acetyltransferase (MAT)** - loads acetyl-CoA onto ACP, then
  repeatedly loads malonyl-CoA.
- **Beta-ketoacyl synthase (KS)** - the condensation reaction that builds the
  carbon skeleton; also the site of most FASN inhibitors.
- **Dehydratase (DH)**, **enoyl reductase (ER)**, **beta-ketoacyl reductase
  (KR)** - the two reduction steps, each consuming one NADPH.
- **Thioesterase (TE)** - hydrolyses the finished C16 chain off the ACP.

> [!info] Cycles, stoichiometry, and where the carbon comes from
> The reaction is acetyl-CoA + 7 malonyl-CoA + 14 NADPH + 6 H2O -> palmitate +
> 8 CoA + 14 NADP+ + 7 CO2. The two-carbon units come from citrate that has been
> shuttled out of the mitochondrion, so FASN is obligately fed by citrate
> export - which is why it is most active in cells with high citrate and high
> ATP. The product, palmitate, is then elongated and desaturated downstream.

## Regulation

Transcriptional control is dominated by [[SREBP1]], which is itself activated
by insulin through [[mTORC1]] and by [[ChREBP]] in response to carbohydrate and
glucose. LXR and [[LXRα]] contribute to SREBP1 induction in some contexts, and
[[LXRα]] is the reason the [[LXR]]-[[FASN]] axis is a popular anti-inflammatory
target.

Post-translational control is by phosphorylation and by degradation. AMPK and
[[AMPK]] phosphorylate FASN in response to energy stress, and
[[AMPK]]-mediated phosphorylation in turn promotes AMPK-ULK1 signalling and
[[Autophagy]] - a direct molecular coupling between low energy, lipogenesis
shutdown, and fat mobilisation. FASN is also subject to [[Ubiquitin|ubiquitin]]-
mediated proteasomal turnover, and its stability is influenced by
[[Palmitate]] itself.

Transcript and protein levels rise steeply in states of nutrient excess -
obesity, [[Hyperlipidemia]], [[NAFLD]]/MASH, feeding, and post-translational
growth factor signalling - and FASN overexpression is a recurring feature of
[[Cancer]].

## Division of labour with ACC1 and ACC2

Two isoforms of [[ACC1|acetyl-CoA carboxylase]] supply malonyl-CoA, and the
split matters more than is usually stated:

- **ACC1** is cytosolic and its sole product is the malonyl-CoA that FASN
  consumes. It is the lipogenic isoform.
- **ACC2** is bound to the outer mitochondrial membrane and produces malonyl-CoA
  purely as a *regulatory signal*: it inhibits CPT1 and therefore blocks fatty
  acid entry into mitochondria for beta-oxidation. It is the anti-lipogenic
  isoform. Note that ACC2's malonyl-CoA is not a substrate for cytosolic
  FASN.

This is the malonyl-CoA/CPT1 brake on the Randle cycle, and it is why
manipulating ACC isoforms has very different metabolic consequences from
manipulating FASN.

> [!info] Lipophagy and the DNL cycle
> FASN activity and [[Lipophagy]] are mechanistically opposed but
> metabolically coupled. Lipophagy delivers lipid droplets to lysosomes and
> frees [[Lysosome|Lysosomal]] amino acids including leucine and arginine, which
> re-activate [[mTORC1]] and re-engage SREBP1 - so autophagy-driven nutrient
> liberation feeds back into the lipogenic programme. The DNL and
> autophagic programs are not simply on/off; they hand off.

## Pathology and therapeutics

FASN overexpression is one of the most reproducible metabolic phenotypes in
cancer, correlating with poor prognosis in breast, prostate, colon, lung and
glioma. FASN supports proliferation not only by supplying membrane
phospholipid, but through a "FASN signalome" - FASN translocates to the plasma
membrane and nucleus, where it activates [[VEGFR]]-2 signalling and modifies
AKT, and it suppresses lipotoxicity that would otherwise drive
[[Lipotoxicity]] and cell death. Palmitate also feeds [[Ceramide]] synthesis.

Pharmacology:

- **C75** and **Orlistat** (a gastric lipase inhibitor that also inhibits
  FASN) are the classical pharmacological tools, both limited by poor
  selectivity and off-target effects.
- **Denifanstat (TVB-2640 / ASC40)** is the first clinical-grade FASN inhibitor.
  It targets the ketoacyl reductase domain, is oral and bioavailable, and has
  reached phase II in oncology (notably KRAS-mutant non-small cell lung cancer)
  and in NASH/MASH, where phase II work reported substantial MRI-PDFF liver fat
  reduction. Whether that translates into histological benefit is not yet
  settled.
- FASN inhibitors show preclinical synergy with taxanes, topoisomerase
  inhibitors, and anti-angiogenics.

> [!warning] Clinical caveats
> FASN is essential, not merely tumour-selective: blockade causes hepatic
> steatosis if the liver's own DNL is hit without differentiation from the
> tumour's, and the parallel non-oncology indications (MASH, [[NAFLD]]) are
> being pursued precisely because the enzyme is a well-validated metabolic
> target in the liver. No FASN inhibitor is approved for any indication as of
> writing; the pathway-level clinical validation is still in progress.

## Connections

- [[ACC1]] — supplies the malonyl-CoA substrate; ACC1 is the committed step of
  de novo lipogenesis immediately upstream of FASN, and the two form a
  substrate-channelling complex.
- [[ACC2]] — the competing carboxylase isoform whose malonyl-CoA inhibits
  CPT1 and therefore gates beta-oxidation rather than synthesis.
- [[Malonyl-CoA]] — the two-carbon extender produced by ACC1 and consumed by
  FASN's MAT domain.
- [[Fatty acid]] — the substrate class and the product class; FASN's palmitate
  output is elongated, desaturated, and re-esterified downstream.
- [[Palmitate]] — the end product of the reaction and, in excess, a driver of
  lipotoxicity and ceramide synthesis.
- [[LXRα]] and [[Liver X Receptor]] — nuclear receptor axis contributing to
  SREBP1/FASN induction; pharmacologically targeted to lower lipogenesis.
- [[SREBP1]] and [[ChREBP]] — the two principal transcriptional regulators of
  FASN, driven respectively by insulin/mTORC1 and by carbohydrate.
- [[mTORC1]] — signals nutrient sufficiency to SREBP1 and phosphorylates FASN.
- [[AMPK]] — phosphorylates FASN under energy stress, suppressing lipogenesis
  and engaging autophagy.
- [[Autophagy]] and [[Lipophagy]] — the opposing catabolic programme, coupled to
  FASN through the mTORC1 reactivation that follows lysosomal amino acid
  liberation.
- [[Insulin]] and [[Glucagon]] — the hormonal switch that toggles the whole DNL
  programme, with insulin driving SREBP1 and glucagon opposing it.
- [[Hepatocyte]] — the main site of physiological DNL and the cell whose
  steatosis and injury dominate the clinical interest in FASN inhibition.
- [[NAFLD]] and [[Metabolic Syndrome]] — the disease contexts in which FASN
  inhibition is being clinically tested.
- [[Cancer]] — the context in which FASN overexpression, the FASN signalome,
  and FASN inhibitors are most actively developed.
- [[VEGFR]] and [[PI3K-Akt Signaling]] — downstream of membrane-localised FASN
  in the pro-angiogenic FASN signalome.
- [[Ubiquitin]] — mediates FASN turnover and couples protein stability to
  nutritional state.

## Documents

- [[ACC1]] — establishes the upstream carboxylase that feeds FASN's
  malonyl-CoA pool and the substrate-channelling interaction with FASN.
- [[Fatty acid]] — supplies the substrate chemistry and the downstream fate of
  palmitate.
- [[LXRα]] — the nuclear receptor axis whose activation raises FASN expression
  through SREBP1.

## Linking Summary

- New links added: [[ACC1]], [[ACC2]], [[Malonyl-CoA]], [[CPT1]], [[Fatty acid]], [[Palmitate]], [[Triacylglycerol]], [[LXRα]], [[Liver X Receptor]], [[LXR]], [[SREBP1]], [[ChREBP]], [[mTORC1]], [[AMPK]], [[Autophagy]], [[Lipophagy]], [[Lysosome]], [[Insulin]], [[Glucagon]], [[Hepatocyte]], [[NAFLD]], [[Metabolic Syndrome]], [[Hyperlipidemia]], [[Cancer]], [[VEGFR]], [[PI3K-Akt Signaling]], [[Ubiquitin]], [[Ceramide]], [[Lipotoxicity]], [[Coenzyme A]], [[NADPH]], [[Acetyl-CoA]], [[Citrate]], [[Statins]], [[Denifanstat]]
- Suggested notes to create: [[ACC2]], [[CPT1]], [[Palmitate]], [[Triacylglycerol]], [[Acyl Carrier Protein]], [[De novo lipogenesis]], [[FASN inhibitor]], [[Ceramide]], [[Coenzyme A]], [[Malonyl-CoA]]
- Strong connections to strengthen: [[FASN]] <-> [[ACC1]] (substrate channel and the malonyl-CoA bridge), [[FASN]] <-> [[Autophagy]] (the lipid-droplet-to-mTORC1-to-SREBP1 loop), [[FASN]] <-> [[Cancer]] (FASN signalome, currently only in this note)
