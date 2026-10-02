---
title: PCNA
description: Proliferating cell nuclear antigen is a homotrimeric ring-shaped sliding clamp loaded onto DNA by RFC that gives replicative polymerases their processivity and acts as a mobile docking platform whose ubiquitin and SUMO modifications switch the cell between translesion synthesis and template switching.
protected: false
created: 2026-10-01
updated: 2026-10-02
tags: [protein, dna-replication, cell-cycle]
aliases: [Proliferating Cell Nuclear Antigen, PCNA ring, POL30]
---

# PCNA

**Proliferating cell nuclear antigen (PCNA)** is the eukaryotic DNA **sliding clamp** — a homotrimeric ring that encircles double-stranded DNA and tethers replicative DNA polymerases to the template. It is the structural homolog of the *E. coli* beta clamp and shares essentially no sequence similarity with it, which makes PCNA a clear demonstration that evolution converges on the same architecture for the same job.

Discovered in the early 1980s as a protein fluctuating with the cell cycle, PCNA was shown in 1988 to be required for simian virus 40 replication *in vitro*, and was quickly established as the processivity factor for polymerase delta (later also epsilon). Its unifying role is as a **mobile platform**: rather than merely boosting polymerase speed, PCNA is a multivalent landing pad recruiting dozens of proteins across replication, repair, chromatin assembly and cell-cycle control.

> [!important] Three binding sites on the front, two modifications on the back
> Most partners bind through a conserved **PIP box** on the interdomain connector loop, on the front face of the ring. Two post-translational modifications sit instead on the back face at **Lys164** — ubiquitin and SUMO — and act as a switch changing which partners PCNA accepts.

## Structure and Clamp Loading

The clamp is a pseudo-six-fold symmetric ring with a central channel wide enough for B-form DNA. Loading is ATP-dependent: the **replication factor C** complex opens the ring at a nick and threads it onto the 5' end. Unloading (by ATAD5 in mammals) retrieves modified clamps so deubiquitinases can act. The ring is closed around duplex DNA but must let single-stranded regions pass during lesion bypass, so it is dynamically flexible rather than a rigid cylinder.

## Modification as a Pathway Switch

Forks stall constantly on endogenous damage, and PCNA's modification state decides which damage-tolerance route the cell takes:

- **Mono-ubiquitination at K164** by Rad6/Rad18. The signal for **error-prone translesion synthesis**: specialist polymerases (Pol eta, kappa, iota, Rev1), carrying both a PIP box and a ubiquitin-binding motif, dock onto the back of the clamp and replicate across the lesion. USP1 and USP10 remove the ubiquitin afterwards.
- **K63-linked polyubiquitination** by Ubc13/Mms2 and Rad5 (or the mammalian homologues SHPRH, HLTF). Promotes **error-free template switching**, using the nascent sister strand as template.
- **SUMOylation at K164** (and K127) by Ubc9/Siz1, constitutive during S phase once PCNA is chromatin-bound. Recruits the anti-recombinogenic helicase Srs2 in yeast and its human counterpart PARI, which displaces [[RAD51]] filaments and suppresses illegitimate recombination.

> [!warning] The "toolbelt" model is a model
> Crystal structures place the modifiers on the back face with minimal perturbation of the clamp, so a **toolbelt** arrangement is favoured: a polymerase stays bound on the front while a TLS polymerase is held in reserve on the back. The analogous bacterial arrangement (Pol III and Pol IV simultaneously bound to the beta clamp) is demonstrated; the eukaryotic version is a well-supported inference, not a direct observation.

## Clinical Relevance

PCNA is the routine **proliferation and cycling marker** in immunohistochemistry; loss of nuclear PCNA is what distinguishes a growth-arrested senescent cell from a quiescent one. PCNA expression rises in essentially every proliferating tumour, and PCNA-interacting proteins are being pursued as targets. Because its K164 modification state reports on replication stress, PCNA ubiquitinylation is assayed as a biomarker of genotoxic exposure. PCNA also sits downstream of CDK4/6 signalling — the reason [[Palbociclib]] and relatives affect the G1/S transition.

## Documents
- [[_document_ - Mitochondrial metabolism and epigenetic crosstalk drive SASP|Mitochondrial metabolism and epigenetic crosstalk drive SASP]] — uses anti-PCNA immunostaining in a 4i panel to distinguish senescent (p16/p21-positive, PCNA-negative) from cycling hepatocytes in liver senescence models.

## Connections
- [[DNA Replication]] — PCNA is the clamp that makes DNA synthesis processive on both leading and lagging strands; without it, replicative polymerases dissociate after short tracts.
- [[DNA Polymerase]] — Pol delta and Pol epsilon are the polymerases whose processivity PCNA confers; the clamp-polymerase pairing is the functional core of the replisome.
- [[DNA Repair]] — PCNA recruits and coordinates repair factors acting on the same substrate, making it a junction between replication-coupled and post-replicative repair.
- [[Cell Cycle]] — PCNA is the classic S-phase marker, and its abundance scales with the proliferative state the cell cycle controls.
- [[SUMOylation]] — PCNA SUMOylation is one of the best-understood SUMO functions in the cell and the paradigm case of a modifier acting as an anti-recombinase recruitment signal.
- [[Ubiquitin]] — Mono- versus poly-ubiquitination of PCNA at K164 decides whether lesion bypass is error-prone or error-free.
- [[RAD51]] — RAD51 filament assembly is the event PCNA SUMOylation exists to suppress, via Srs2 and PARI.
- [[Palbociclib]] — CDK4/6 inhibitors arrest cells in G1 by removing the mitogen drive for S-phase entry, downstream of which clamp loading occurs.
- [[XRCC1]] — PCNA is the platform that recruits XRCC1-dependent repair and ligation onto the nascent strand.

## Linking Summary
- New links added: [[DNA Replication]], [[DNA Polymerase]], [[DNA Repair]], [[Cell Cycle]], [[SUMOylation]], [[Ubiquitin]], [[RAD51]], [[Palbociclib]], [[XRCC1]]
- Suggested notes to create: [[Replication Factor C]], [[Rad18]], [[Translesion Synthesis]], [[Template Switching]], [[PARI]], [[ATAD5]]
- Strong connections to strengthen: [[PCNA]] ↔ [[DNA Replication]], [[PCNA]] ↔ [[SUMOylation]]