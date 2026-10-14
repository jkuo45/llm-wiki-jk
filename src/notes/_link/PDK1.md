---
title: PDK1
description: '3-Phosphoinositide-dependent protein kinase 1 (gene PDPK1), a PH-domain-containing serine/threonine kinase of the AGC/CAMK family that phosphorylates Akt at Thr308 and acts as the master upstream activator of AGC-family kinases. Distinct from pyruvate dehydrogenase kinase 1 (PDHK1), which shares the abbreviation.'
created: 2026-07-04
updated: 2026-10-01
tags:
  - protein
  - kinase
  - signal-transduction
aliases: [3-Phosphoinositide-Dependent Protein Kinase 1, PDPK1, PDK-1]
---

# PDK1

> [!warning] Naming hazard — read this first
> "PDK1" is used in the literature for **two different kinases**, and the confusion is systematic rather than occasional:
>
> - **3-phosphoinositide-dependent protein kinase 1** — gene **PDPK1**, UniProt O15530, ~50 kDa, a PH-domain kinase of the AGC/CAMK family. **This note is about this one.** It phosphorylates [[Akt]] at Thr308.
> - **Pyruvate dehydrogenase kinase 1** — gene **PDHK1** (older alias PDK1), UniProt Q16636, ~43 kDa, a Ca²⁺/ATP-dependent kinase that phosphorylates the E1 component of the [[Pyruvate Dehydrogenase]] complex. It is *not* a note topic here, and it has nothing mechanistically to do with PDK1/PDPK1 except the initials.
>
> The safest practice is to write **PDPK1** or **PDK1/PDPK1** when referring to the PI3K-pathway kinase, and **PDHK1** for the metabolic one. Interaction databases and pathway maps have historically been populated inconsistently, so "PDK1 interactions" in a pathway resource may be either protein.

## Structure and domains

PDK1 is a ~50 kDa kinase built from two modules, and the module logic is the whole point of the protein:

- **N-terminal pleckstrin homology (PH) domain**, residues ~110–185. Binds phosphatidylinositol phosphates with the usual preference for **PtdIns(3,4,5)P₃ (PIP₃)** — the lipid product of [[PI3K]] — and also PtdIns(4,5)P₂. Localises PDK1 to the plasma membrane and to late endosomes.
- **Serine/threonine kinase domain**, residues ~400–500, whose catalytic core is the classic bilobal AGC fold. Between them lie the **turn motif** (Ser218, phosphorylation-dependent) and the **hydrophobic motif** (Ser233 and Ser241), both of which regulate kinase activity. A C-terminal **PDK1-interacting fragment (PIF)** region and an internal PIF-binding site allow PDK1 to trans-phosphorylate its own hydrophobic motif.
- Beyond that, PDK1 has a kinase-independent **nuclear localisation motif** and can form a nuclear, transcription-regulating pool independent of its catalytic activity.

## Mechanism

> [!info] Source: [[_document_ - mTOR signaling at a glance]]
> The mTOR review describes the core circuit: full activation of Akt requires phosphorylation at **two sites** — **Ser308, by PDK1**, and **Ser473, by mTORC2** (demonstrated in 2005 by the same group). With growth-factor stimulation, Akt is phosphorylated at the membrane by the binding of PtdIns(3,4,5)P₃ to its own PH domain; **under these conditions PDK1 is also recruited to the membrane through its PH domain** and phosphorylates Akt at Ser308. The review proposes that mTORC2 component mSIN1, which possesses a C-terminal PH domain, may promote mTORC2 translocation to the membrane and hence Ser473 phosphorylation.

> [!info] Mechanism
> The canonical sequence is therefore: growth factor → receptor tyrosine kinase → [[PI3K]] → PIP₃ at the inner membrane → PDK1 and Akt both dock via PH domains → PDK1 phosphorylates Akt Thr308 → Akt's own PH domain is released and it becomes a freely diffusible, partially active kinase → mTORC2 phosphorylates Ser473 for full activity → substrate phosphorylation including GSK3, FOXO, TSC2, and the mTORC1 inputs PRAS40.

PDK1 is broader than Akt, and this is under-appreciated:

- **AGC-family master kinase.** PDK1 phosphorylates and activates the activation loops of the entire AGC/CAMK group — including PKA, PKC, RSK, SGK, and p90 ribosomal S6 kinases — provided the turn and hydrophobic motifs are already in place. It is the designated "master kinase" of the family.
- **Non-canonical, lipid-independent functions.** Nuclear PDK1 has been reported to regulate gene expression independently of its kinase activity, and PDK1 phosphorylation of the Na⁺/K⁺-ATPase and of Mdm2 is functionally distinct from PI3K signalling.
- **Feedback.** PDK1 itself is a target of AGC-family and mTORC1-mediated phosphorylation (Ser244 by mTORC1, Ser342/Ser363/Ser376 by SGK and p90RSK), so signalling layers onto itself and is turned down as well as up.

## Genetics and disease

PDK1 is essential in development: homozygous *Pdpk1* knockout mice die in utero. The most informative human lesion is a knock-in allele in which the **PH domain is replaced by a non-functional sequence** — this abolishes phosphoinositide binding and thereby lipid-dependent recruitment without removing the kinase. The mutant is kinase-incompetent at the membrane but retains nuclear and non-lipid functions, and the resulting phenotype distinguishes the two: PH-domain mutant animals are viable and show grossly increased insulin sensitivity with a reduced fat mass, whereas complete null animals are embryonic lethal. This is the cleanest genetic evidence that **the PH domain is the lipid-sensing module, not the catalytic one**, and that PDK1's role in insulin action is partly lipid-dependent.

Clinically, PDK1 is a validated but unexploited oncology target: it is frequently amplified or overexpressed in [[Breast Cancer]], [[Prostate Cancer]] and [[Lung Cancer]] with correspondingly reduced dependence on upstream receptor or PI3K lesions, and PDK1 inhibition — via small-molecule ATP-competitive inhibitors, or via degradation of the protein — can produce responses where PI3K or Akt inhibition fails. The rationale for targeting it rather than PI3K or Akt is exactly that it sits *downstream* of both and upstream of many. Small-molecule PDK1 inhibitors remain preclinical.

## Documents

- [[_document_ - mTOR signaling at a glance|mTOR signaling at a glance]] — identifies PDK1 as the kinase responsible for Akt Ser308, explains PH-domain membrane recruitment under growth-factor stimulation, and sets up the Ser473-by-mTORC2 complementary phosphorylation model.

## Connections

- [[Akt]] — The canonical substrate and the reason PDK1 matters everywhere; Thr308 (PDK1) plus Ser473 (mTORC2) constitute full Akt activation.
- [[PI3K]] — Upstream producer of the lipid PDK1's PH domain binds; the PI3K→PIP₃→PDK1→Akt chain is the spine of growth-factor signalling.
- [[mTORC2]] — The complementary kinase for Akt Ser473, and PDK1's most direct signalling partner; the two make Akt fully active only in collaboration.
- [[mSIN1]] — mTORC2's PH-domain component, proposed in this vault's mTOR document to mediate mTORC2's own membrane recruitment by analogy with PDK1.
- [[PI3K-Akt Signaling]] — The pathway-level framing of what PDK1 does within the nutrient-sensing and growth network.
- [[FOXO]] — Downstream of Akt and therefore of PDK1; loss of Akt activity releases FOXO, which is why mTORC2/PDK1 status propagates to stress resistance, metabolism, and apoptosis genes.
- Akt Ser473 — the complementary mTORC2 site; the Ser473/Ser308 division of labour is the single most useful fact about PDK1 and would merit its own note.
- [[Pyruvate Dehydrogenase]] — Points at the *other* PDK1 (PDHK1), which phosphorylates this complex's E1 subunit; flagged here specifically to prevent the abbreviation collision from propagating.
- [[Insulin Resistance]] — PDK1 sits squarely on the insulin-signalling axis, and the PH-domain mutant phenotype is a direct genetic probe of it.
- [[Breast Cancer]] — One of the tumour types with frequent PDK1 amplification and PDK1-dependence.
- [[Kinase]] — General family-level note; PDK1 is an unusual kinase in that its substrate selectivity is defined by a lipid-sensing domain rather than by a recognition sequence.

## Linking Summary

- New links added: [[Akt]], [[PI3K]], [[mTORC2]], [[mSIN1]], [[PI3K-Akt Signaling]], [[FOXO]], [[Pyruvate Dehydrogenase]], [[Insulin Resistance]], [[Breast Cancer]], [[Kinase]]
- Suggested notes to create: [[PDHK1]], [[Pleckstrin Homology]], [[PtdIns(3,4,5)P3]], [[AGC Kinase Family]], [[Turn Motif]], [[Hydrophobic Motif]], [[Akt Ser473]], [[SGK]] — removed as already existing: RSK
- Strong connections to strengthen: [[PDK1]] ↔ [[Akt]] (Akt's note should state which kinase does Thr308 and which does Ser473 — the two-site activation model is currently split across documents), [[PDK1]] ↔ [[PI3K]] (the PH-domain/lipid-recognition relationship is the only mechanistic link and is stated on neither side)
