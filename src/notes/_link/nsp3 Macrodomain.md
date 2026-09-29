---
title: nsp3 Macrodomain
description: The nsp3 macrodomain (Mac1, or Nsp3b in SARS-CoV-2) is a conserved ~130-residue domain in coronavirus nonstructural protein 3 that binds and hydrolyzes mono-ADP-ribose, reversing host PARP-mediated MARylation and thereby countering antiviral innate immunity.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein-domain
  - viral-replication
  - innate-immunity
  - nad-plus
aliases:
  - Mac1
  - nsp3 macrodomain
  - Nsp3b
  - Coronavirus macrodomain
---

# nsp3 Macrodomain

The **nsp3 macrodomain** — usually called **Mac1** in the literature, and **Nsp3b** when the SARS-CoV-2 nomenclature is used — is a conserved, catalytically active protein domain embedded in **nonstructural protein 3 (nsp3)** of every coronavirus. It is a **macrodomain**, one of a family of ~130-amino-acid modules that fold into a compact α/β/β/β sandwich with a conserved hydrophobic core and a substrate-binding cleft, and it is unusual among macrodomains because it is *not* dead — Mac1 has real enzymatic activity.

## Mechanism

> [!info] ADP-ribose binding and hydrolysis
> Mac1 binds free [[ADP-ribose]] and, crucially, also cleaves **mono-ADP-ribose covalently attached to protein serine residues** — that is, it is an ADP-ribosyl **hydrolase** (a "de-MARylase"), reversing the modification that interferon-stimulated ADP-ribosyltransferases install. The catalytic mechanism involves a conserved nucleophilic water activated by a nearby histidine and a magnesium ion, hydrolyzing the pyrophosphate-like linkage between ADP-ribose and the substrate serine.

This makes the macrodomain a direct molecular counter to the host's [[ADP-ribosylation]] response, and it is the mechanistic crux of the coronavirus–innate immunity interface described in the vault's [[Viral Replication]] note: [[Type I Interferon]]-linked activation of [[PARP]] enzymes drives [[MARylation]] of viral and host proteins, which inhibits [[Viral Replication]], and Mac1's de-MARylation activity is what reverses that. Deleting or mutating the macrodomain attenuates viruses dramatically — in a mouse hepatitis virus model, an adenine-binding-site mutant (D1329A) was extremely attenuated in all cell types tested, and a double mutant was unrecoverable.

> [!info] Domain architecture
> nsp3 is a multi-domain protein: nsp3a ( ubiquitin-independent ), the ubiquitin-like **UBI** and **UBL** domains, an **ADPRH** (ADP-ribose–hydrolase-related) domain, the ****nsp3a–ADPRH** accessory module, and — in SARS-CoV-2 and several other betacoronaviruses — **a second, catalytically inactive macrodomain, Mac2**, which has a distinct, incompletely resolved function. Mac1's presence is universal across coronaviruses; Mac2 is not.

## Host-Pathogen Consequences

- **Antiviral antagonism.** The best-evidenced host target is **PARP12**, an interferon-stimulated mono-ADP-ribosyltransferase. In *PARP12*-knockout mice, replication of macrodomain-mutant murine hepatitis virus is restored in macrophages and in vivo, with increased liver pathology. This is a clean genetic demonstration that Mac1's function is to neutralize an interferon-inducible ADP-ribosyltransferase.
- **Neurovirulence.** Mutating the macrodomain attenuates murine hepatitis virus neurotropism, and in a model of coronavirus-induced encephalitis the macrodomain is required for full virulence in mice. Chikungunya virus — an alphavirus, not a coronavirus — likewise encodes a macrodomain in its own nsp3, and that domain is described as a key neurovirulence factor, indicating convergent use of the same fold across divergent virus families.
- **NAD+ consumption.** Because Mac1 hydrolyzes ADP-ribose and participates in the same NAD+-metabolite economy as host PARPs and sirtuins such as [[SIRT1]], it is a node in the broader "NAD+-consuming enzymes in immune defense" framing of the vault's NAD+ notes.

## Druggability

Mac1 is a compelling antiviral target precisely because it is viral-encoded, enzymatically active, and structurally defined — a rare combination. The nucleoside analogue **GS-441524** (the active metabolite of remdesivir) was identified as a macrodomain-binding inhibitor, and structure-activity work on adenosine- and guanosine-based nucleoside analogues found that phosphate configuration and nucleobase identity strongly modulate affinity, with GS-441524 derivatives reaching ~200-fold higher affinity than adenosine-based ligands; a sulfamoyl derivative occupying the phosphate subsite gave the best potency. Separately, **mutating a conserved isoleucine in loop 2 to alanine enhanced ADP-ribose binding but was detrimental for replication**, showing that binding and turnover are not interchangeable and that simply tightening the substrate grip is not a viable therapeutic direction.

> [!warning] Evidence status
> Macrodomain inhibitors are at the structure-based design stage. As of writing there is **no approved or clinically validated coronavirus macrodomain inhibitor**, and the reported affinity improvements are in vitro biochemical measurements, not antiviral efficacy in animals or humans.

## Connections

- [[SARS-CoV-2]] — SARS-CoV-2 encodes Mac1 (Nsp3b) within nsp3, and the Nsp3b naming that this vault's sources use comes from the SARS-CoV-2 protein annotation. It is one of the most conserved nonstructural features of SARS-CoV-2, which is why it survives as a broad-spectrum coronavirus target.
- [[Viral Replication]] — this is the vault's central link. The Macrodomain note there states that the antiviral PARP/MARylation response is reversed by "the ADP-ribosylhydrolase macrodomain of the viral nonstructural protein nsp3"; this note supplies the enzymology, the genetic evidence, and the druggability work behind that sentence.
- [[MARylation]] — Mac1 is the eraser for the modification that MARylation describes. The host writes the mark with PARP1/PARP2-family enzymes; Mac1 removes it. This is the cleanest write/erase pairing in the vault's ADP-ribosylation section.
- [[ADP-ribosylation]] — Mac1's substrate class; understanding Mac1 requires distinguishing mono- from poly-ADP-ribosylation, since macrodomains only act on the mono form.
- [[ADP-ribose]] — the free product of Mac1 hydrolysis and also a ligand it binds; the binding/hydrolysis duality is what makes binding-strength measurements an imperfect proxy for enzymatic inhibition.
- [[PARP1]] and [[PARP]] — the host writers that generate the substrate Mac1 removes. PARP12 (mono-ADP-ribosyltransferase) is the specifically implicated target in coronavirus infection; PARP1 is the canonical founding member of the family and appears in the same IFN-linked response.
- [[Type I Interferon]] and [[Interferon-Stimulated Genes]] — the upstream signal that induces the PARP12/MARylation antiviral program, and therefore the trigger whose output Mac1 neutralizes. This is the immunological logic chain: IFN → ISG induction → PARP12 → MARylation → antiviral, broken at the last step by Mac1.
- [[cGAS-STING Pathway]] and [[STING]] — a related but mechanistically distinct innate-sensing axis that also converges on type I interferon production; the macrodomain sits downstream of, rather than on, this pathway, which is worth stating explicitly to avoid conflating the two.
- [[NAD+]] — Mac1 hydrolyzes an ADP-ribose moiety derived from NAD+ and therefore participates in NAD+ turnover, placing it in the same metabolic economy as PARPs and sirtuins.
- [[SIRT1]] — fellow NAD+-consuming enzyme in the immune-defense framing; relevant as a comparator for why host NAD+ metabolism itself is antiviral, which is the premise that Mac1 exists to defeat.
- [[Innate Immunity]] — the umbrella category: Mac1 is a specific, mechanistically defined mechanism by which a virus evades innate immunity, rather than by antigenic variation or direct protease cleavage of immune signaling proteins.

## Documents

- [[Viral Replication]]
  - The vault's Viral Replication note asserts that "the ADP-ribosylhydrolase macrodomain of the viral nonstructural protein nsp3" reverses the PARP/MARylation antiviral block; this note supplies the domain identity, enzymology, and evidence for that claim.
- [[_document_ - Nicotinamide Riboside—The Current State of Research and Therapeutic Uses]]
  - Cites Fehr et al., *J Virol* 2014, "The nsp3 Macrodomain Promotes Virulence in Mice with Coronavirus-Induced Encephalitis" — the primary mouse neurovirulence evidence, and the source that makes this entity concrete within the vault's NAD+/innate-immunity framing.

## Linking Summary

- New links added: [[SARS-CoV-2]], [[Viral Replication]], [[MARylation]], [[ADP-ribosylation]], [[ADP-ribose]], [[PARP1]], [[PARP]], [[Type I Interferon]], [[Interferon-Stimulated Genes]], [[NAD+]], [[SIRT1]], [[Innate Immunity]]
- Suggested notes to create: [[Macrodomain]], [[PARP12]], [[Ubiquitin-like domains]], [[Remdesivir]], [[GS-441524]], [[Chikungunya virus]], [[Murine hepatitis virus]], [[Neurovirulence]], [[Nonstructural proteins]]
- Strong connections to strengthen: [[nsp3 Macrodomain]] ↔ [[MARylation]] ↔ [[ADP-ribosylation]] (write/erase cycle); [[nsp3 Macrodomain]] ↔ [[Type I Interferon]] ↔ [[PARP]] (innate immune evasion chain)
