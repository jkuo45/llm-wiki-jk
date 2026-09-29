---
title: MDC1
description: MDC1 is a large BRCT-domain scaffold protein that binds gamma-H2AX at DNA double-strand breaks and orchestrates RNF8/RNF168-mediated ubiquitin signalling and downstream repair factor recruitment.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags: [protein, dna-repair, dna-damage-response, chromatin]
aliases: [Mediator of DNA damage checkpoint 1, MDC1/NFBD1, NFBD1]
---

# MDC1

**MDC1** (mediator of DNA damage checkpoint 1; historically **NFBD1**, nuclear
factor binding to the DNA double-strand break factor MDC1/NFBD1) is a
**scaffold protein** of the [[DNA Damage|double-strand break]] response. It is
not an enzyme and not a repair catalyst — its function is to *read* the break
and *recruit and amplify* everything that acts on it. MDC1 is often described as
the organising principle of the double-strand break response, and that is a fair
summary.

## Domains and the chromatin reader

MDC1 is a 2089 aa (human) protein with a modular architecture:

- **N-terminal Forkhead-associated (FHA) domain and tandem BRCT domains** —
  together these bind **phosphorylated histone H2AX (Ser139, i.e.
  [[γ-H2AX]])**, the primary chromatin mark of a DSB. The BRCT domains
  recognise the phospho-Ser139 and insert an Arg/Lys side chain into the
  phosphoserine pocket; the FHA domain makes the second, cooperative
  interaction. This tandem reader is what physically tethers MDC1 to the
  chromatin flanking the break.
- **Proline-rich region** — disordered, phosphorylation-rich, and the site of
  the many DNA-damage-induced phospho-sites (Tyr1338, Ser1941, Thr1949) that
  serve as docking platforms for downstream factors.
- **C-terminal tandem BRCT domains** — bind [[DNA]] ends, [[KAP1]], and
  [[53BP1]]; also engage homodimerisation.
- **MDC1-binding motifs** scattered through the C-terminus, including the
  PP4 phosphatase-binding site and the [[RNF8]]-recruitment region.

> [!info] The two-step recruitment model
> MDC1's canonical loading mechanism was established in the original 2003
> Goldberg/Huen papers: MDC1 first associates loosely with chromatin through
> its **FHA domain binding unphosphorylated H2AX**, which places the BRCT
> domains in position; the local ATM/ATR-driven phosphorylation of
> H2AX Ser139 then **converts the initial weak interaction into a stable
> one**, trapping MDC1 at the break. This "priming" mechanism means MDC1
> accumulates specifically at phosphorylated — i.e. genuinely damaged —
> chromatin rather than at any double-stranded DNA.

## The amplification cascade

> [!info] MDC1 turns one modification into a thousand
> The core reason the vault links MDC1 to [[ATM]], [[53BP1]], [[H2A.X]] and
> [[γ-H2AX]] is that MDC1 *is* the node connecting them. The cascade:
>
> 1. **[[ATM]]/ATR phosphorylate H2AX Ser139** → [[γ-H2AX]] spreads over
>    kilobase-scale chromatin around the break.
> 2. **MDC1 binds γ-H2AX** via BRCT and is loaded (above).
> 3. **MDC1 recruits [[PARP1]]** and activates it; PARP1 mono-ADP-ribosylates
>    itself and generates PAR (see [[MARylation]]), which recruits further
>    readers and relaxes the chromatin locally.
> 4. **MDC1 recruits [[RNF8]]**, which works with [[RNF168]] to ubiquitylate
>    the surrounding chromatin. **[[RNF4]]**, the SUMO-targeted E3 ligase, is
>    required to license this step: MDC1 is SUMOylated, and SUMOylated MDC1
>    recruits RNF4, which relieves the compaction that otherwise blocks
>    RNF8 access.
> 5. **53BP1 and [[BRCA1]] are recruited to the RNF8/RNF168-modified
>    chromatin.** RNF168 directly ubiquitylates 53BP1 (K63-linked), which
>    both stabilises its retention and relieves its
>    [[Topoisomerase II|topoisomerase IIα]]- and [[Shieldin|shieldin]]-dependent
>    end protection. MDC1 is also SUMOylated to recruit
>    [[SET7/9|KMT5A]] and [[KDM5|KDM4A]] for chromatin relaxation, and
>    [[RNF4]]/[[KDM4A]]-dependent degradation of the class I HDAC
>    [[HDAC1]]/[[HDAC2]] corepressor complex releases transcription.
> 6. The **cell-cycle checkpoint** (S/G2 and G2/M) is enforced by the
>    ATM/Chk2 arm independently of the ubiquitylation cascade, which is why
>    "mediator of DNA damage *checkpoint* 1" is a slightly odd name for a
>    scaffold — MDC1 is required for checkpoint enforcement in both S and
>    G2/M, but by recruitment of checkpoint mediators rather than by
>    enzymatically enacting the arrest.

The functional consequence of this architecture is the **"amplification
switch"**: a single break, marked by one H2AX phosphorylation event, recruits
an arbitrarily large signalling platform and a large repair workforce, and
the response is a switch rather than a linear titration.

## Pathway choice

MDC1 is not neutral between the two DSB repair routes — it is an active
participant in the decision:

- **53BP1 antagonism of resection.** MDC1 recruits 53BP1, which recruits
  the **shieldin** complex (53BP1, REV7/MAD2L2, SHLD1, SHLD2, SHLD3,
  CTIF/CTIP-interacting factor) and blocks resection of the broken ends.
  This favours [[Non-homologous End Joining]].
- **Antagonism in BRCA1-deficient cells.** [[BRCA1]]/[[BARD1]] counteract
  53BP1: [[BARD1]] promotes 53BP1 ubiquitination and degradation, and
  BRCA1 blocks 53BP1 recruitment and inhibits shieldin, allowing resection
  and [[Homologous Recombination]]. Cells with **53BP1 or shieldin loss**
  rescue the HR defect of BRCA1-deficient cells — the synthetic-lethal
  logic that makes the 53BP1–BRCA1 axis a therapeutic target.
- Antagonism in [[Glioma]] — in glioblastoma, 53BP1 loss restores HR
  in IDH-mutant, MGMT-methylated tumours and sensitises them to
  [[PARP Inhibitor|PARP inhibitors]], whereas 53BP1 loss confers PARPi
  *resistance* in IDH-wildtype GBM. This is one of the more clinically
  consequential DSB-pathway findings of the past few years and is a good
  example of context dependence in the pathway choice.

## Other binding partners worth knowing

- **[[Topoisomerase IIα]]** and **[[Ku70]]** (with [[Ku80]]) — MDC1 links
  DSBs to both topoisomerase II-dependent chromosome bridges/decatenation
  and to [[Ku]]-dependent end processing.
- **[[NBS1]]/[[MRN complex]]** — MDC1 both recruits and is recruited by the
  MRN complex, which senses the break itself; the interaction is
  mutual and forms a feed-forward loop.
- **[[Optineurin]]**, **[[USP28]]**, **[[RNF8]]**, **[[TRRAP]]** — additional
  ubiquitin and chromatin machinery.
- **[[Chk2]]** and **[[Chk1]]** — checkpoint arms.
- **[[ATM]]** — beyond its upstream phosphorylation role, ATM
  phosphorylates MDC1 itself.

## Clinical relevance

> [!warning] Both directions of clinical importance
> **MDC1 as a dependency.** MDC1 is required for the survival of
> HR-deficient tumour cells *in HR-proficient backgrounds only* — i.e. MDC1
> is not a universal synthetic-lethal partner. MDC1 loss sensitises
> HR-proficient [[BRCA1]]/[[BRCA2]]-mutant cells to
> [[Cisplatin]] and to PARP inhibitors, and this has been validated in
> patient-derived xenografts. It is a real but narrowly applicable
> dependency, and the applicability depends on the tumour's HR status.
>
> **MDC1 as a tumour suppressor.** MDC1-deficient mice are
> cancer-predisposed, and MDC1 loss accelerates lymphomagenesis,
> consistent with MDC1's role in genome stability and checkpoint
> enforcement.
>
> **Cancer risk in humans.** Rare biallelic MDC1 variants cause
> **Nijmegen breakage syndrome-like** immunodeficiency with combined
> immunodeficiency, radiosensitivity, growth failure and chromosomal
> instability — the DSB-repair disorder spectrum that also includes
> [[Nijmegen Breakage Syndrome]] and [[Ataxia Telangiectasia]].

> [!warning] Evidence caveats
> - The RNF4 → RNF8 step is well established in cells and in mice, but the
>   **complete** ordering of every chromatin modification at a break —
>   which [[SUMO]]ylation, which [[Ubiquitin|ubiquitylation]] linkage, in what
>   sequence — is still being revised, and different labs' pipelines
>   disagree at the margins.
> - MDC1 is a large disordered protein and much of its proline-rich region
>   is intrinsically disordered; structure/function assignments for the
>   vast majority of its residues are not established. Claims about specific
>   MDC1 phosphosites should be treated as site-specific claims with
>   variable support.

## Documents

- [[53BP1]] — The most prominent MDC1-recruited factor; the 53BP1–BRCA1
  antagonism is the functional reason MDC1 influences repair-pathway
  choice, and this note supplies the recruitment mechanism.
- [[ATM]] — The kinase that phosphorylates H2AX to create the γ-H2AX
  platform MDC1 reads; MDC1 sits downstream in the same cascade and is
  itself an ATM substrate.
- [[DNA Damage]] — The general framework (detection, signalling,
  checkpoint, repair) into which MDC1 is the organising node.
- [[H2A.X]] — The histone substrate whose phosphorylation is the
  prerequisite for MDC1 loading, giving the BRCT reader something to bind.
- [[γ-H2AX]] — The phosphoform that is MDC1's direct binding target and
  the quantifiable DSB marker used to map damage.

## Connections

- [[γ-H2AX]] — MDC1's N-terminal BRCT domains recognise pSer139 on H2AX;
  this one interaction is the physical basis of MDC1's targeting, and
  the two are so tightly coupled that they are often discussed as a
  unit.
- [[H2A.X]] — The gene product that supplies the phospho-epitope;
  the FHA-then-BRCT "priming" loading model is a direct mechanistic
  claim about H2AX phosphorylation state gating MDC1 occupancy.
- [[ATM]] — Upstream kinase creating γ-H2AX and phosphorylating MDC1
  itself; the hierarchical ATM → γ-H2AX → MDC1 → RNF8/RNF168 chain is
  the single most-cited pathway ordering in the DDR.
- [[53BP1]] — Recruited to MDC1-modified chromatin; the effector of
  MDC1's influence over end resection and pathway choice, and the
  counterparty to [[BRCA1]].
- [[DNA Damage]] — MDC1 is the amplification node that converts one
  broken phospho-histone into a large repair platform.
- [[DNA Repair]] — The umbrella note; MDC1 coordinates the choice and
  execution of [[Non-homologous End Joining]] versus
  [[Homologous Recombination]].
- [[Non-homologous End Joining]] — Favoured when MDC1-recruited 53BP1
  and shieldin protect the DNA ends from resection.
- [[Homologous Recombination]] — Favoured when the 53BP1 branch is
  counteracted, principally by [[BRCA1]]/BARD1.
- [[BRCA1]] — Functionally antagonistic to 53BP1 and therefore, through
  MDC1's recruitment of 53BP1, to MDC1 itself; the basis of the
  53BP1-loss rescue and PARPi-sensitisation findings.
- [[Ubiquitin]] and [[RNF8]]/[[RNF168]] — The ubiquitylation cascade
  that MDC1 initiates by recruiting RNF8 and licensing RNF4-dependent
  chromatin decompaction.
- [[SUMO]] — MDC1 is SUMOylated, and that SUMOylation is what recruits
  RNF4 to make RNF8's access possible; the SUMO step precedes the
  ubiquitin step at the same site.
- [[NBS1]] and [[MRN complex]] — Mutual recruitment between MDC1 and the
  MRN break-sensing complex forms a feed-forward loop.
- [[Chromatin Remodeling]] — MDC1's ubiquitylation cascade also relaxes
  and decompacts chromatin, recruiting HDAC and H3K9 methyltransferase
  activity, so repair is co-ordinated with local chromatin state.
- [[Optineurin]] — An MDC1-interacting adaptor linking DSB response to
  autophagy and trafficking, connecting this note to the vault's
  autophagy literature.
- [[PARP1]] and [[MARylation]] — MDC1 recruits PARP1 at the break and
  activates it, which is the entry point of the ADP-ribosylation
  branch of the response.
- [[Cisplatin]] — MDC1 loss sensitises HR-proficient BRCA-mutant cells
  to platinum agents, one of the established synthetic-lethal
  relationships.
- [[Glioma]] — 53BP1 loss restores HR in glioblastoma and determines
  PARP-inhibitor sensitivity, making the MDC1–53BP1 branch clinically
  actionable in brain tumour.
- [[Topoisomerase IIα]] and [[Ku70]] — MDC1 links DSBs to
  topoisomerase II-dependent chromatin passage and to Ku-mediated end
  processing.

## Linking Summary

- New links added: [[DNA Damage]], [[DNA Repair]], [[PARP1]], [[MARylation]], [[RNF8]], [[RNF168]], [[RNF4]], [[SET7/9]], [[KDM4A]], [[BRCA1]], [[HDAC1]], [[HDAC2]], [[Non-homologous End Joining]], [[Homologous Recombination]], [[Optineurin]], [[USP28]], [[TRRAP]], [[SUMO]], [[Ubiquitin]], [[Shieldin]], [[Topoisomerase IIα]], [[Ku70]], [[Ku80]], [[NBS1]], [[MRN complex]], [[Chk1]], [[Chk2]], [[Nijmegen Breakage Syndrome]], [[Ataxia Telangiectasia]], [[Cisplatin]], [[Glioma]], [[PARP Inhibitor]], [[Topoisomerase IIα]]
- Suggested notes to create: [[RNF8]], [[RNF4]], [[Shieldin]], [[SET7/9]], [[KDM4A]], [[KDM5]], [[MRN Complex]], [[Ku80]], [[Topoisomerase IIα]], [[USP28]], [[TRRAP]], [[BARD1]], [[MAD2L2]], [[Nijmegen Breakage Syndrome-Like Immunodeficiency]], [[Nijmegen Breakage Syndrome]], [[Ataxia Telangiectasia]], [[HDAC2]], [[PARP Inhibitor]] — removed as already existing: CHK1, CHK2, CtIP, Glioma, HDAC1, Ku70, NBS1, RNF168
- Strong connections to strengthen: [[MDC1]] ↔ [[γ-H2AX]], [[MDC1]] ↔ [[53BP1]], [[MDC1]] ↔ [[ATM]], [[MDC1]] ↔ [[DNA Damage]]
