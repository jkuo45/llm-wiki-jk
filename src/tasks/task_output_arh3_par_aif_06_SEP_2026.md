---
title: ARH3 and PAR-induced AIF release — research synthesis
description: ARH3 PARG-like activity plus PAR to AIF release mechanisms (direct binding vs calpain vs BAX vs mPTP).
created: 2026-09-06
updated: 2026-09-06
type: task-output
tags:
  - arh3
  - parg
  - par
  - aif
  - parthanatos
  - adp-ribosylation
---

# ARH3 and PAR-induced AIF release — research synthesis

Generated 06_Sep_2026. Wiki sources: [[ARH3]], [[PAR]], [[PARP1]], [[Parthanatos]], [[ADP-ribosylation]]. Web sources as cited inline.

## 1. ARH3 — the 39-kDa PARG-like hydrolase

Original identification: Oka S., Kato J., Moss J. *Identification and characterization of a mammalian 39-kDa poly(ADP-ribose) glycohydrolase.* J Biol Chem 2006; Mueller-Dieckmann et al. 2006 apo crystal structure.

- ARH family: ARH1/ARH2/ARH3, all ~39 kDa. Gene `ADPRHL2`, 6 exons, 363 aa, N-terminal mitochondrial-targeting sequence.
- Mg2+-dependent binuclear center (Asp77/Asp78/Asp314/Asp316, catalytic Glu41); stereospecific for alpha-anomer at C-1''.
- In vitro substrates (2006 view): [[PAR]] O-glycosidic bond, O-acetyl-ADP-ribose, alpha-[[NAD+]]; trace Arg-ADPr activity only at high enzyme (ARH1 is the true Arg eraser, <1% reciprocal PAR activity).
- Structure: narrow cavity docking only terminal ADP-ribose → strict **exo**-glycosidase. [[PARG]] (macrodomain, Glu755/Asp737, metal-free) has endo- + exo-activity, prefers long protein-bound chains, leaves terminal MAR.

Revision since 2017 (Fontana, Palazzo, Gibbs-Seymour):

- Main physiological substrate is **serine-MAR** written by [[PARP1]]/HPF1. ARH3 is the only known Ser-deMARylase; PAR cleavage is slow by comparison.
- Localization ~65% cytosol / 25% mitochondrial matrix / 10% nucleus. Only active mitochondrial PAR degrader (PARG55/60 lack exon 5, dead).
- `Arh3-/-`: H2O2 → nuclear [[PAR]] at 10 min → cytoplasmic at 30 min → [[AIF]] release → caspase-independent death ([[Parthanatos]] brake).
- Disease: biallelic `ADPRHL2` → CONDSIAS (stress-induced childhood neurodegeneration, ataxia, seizures). PARP inhibitors rescue.
- Therapy: short PAR oligomers (<5 units) are poor [[PARG]] substrates; ARH3 compensates → rationale for dual PARG/ARH3 inhibition. Selective ARH3 inhibitors in preclinical development.

Vault changes made: created `src/notes/_link/ARH3.md`; linked in [[PAR]], [[PARP1]], [[Parthanatos]], [[ADP-ribosylation]]; added 10 triples to `src/notes/_link/_triples.json` (source_document ARH3.md).

## 2. How [[PAR]] induces [[AIF]] release — still unresolved

User hypothesis ("mPT or mitochondrial BAX translocation") is half of the current picture. Four models per 2025 review *More questions than answers* (PMC11445734):

### Model A — direct PAR-AIF binding (best proven)
- Wang et al. 2011 Sci Signal: [[AIF]]-D3 PAR-binding motif Arg588/Lys589/Arg592, distinct from DNA-binding site.
- PAR-binding-dead mutant keeps oxidase/FAD/DNA activity but is **not released, no nuclear translocation, no death**.
- Yu et al. 2009: ~30% of [[AIF]] on cytosolic face of outer membrane; this pool releases fast as uncleaved 62 kDa. Explains [[AIF]] preceding cytochrome c.

### Model B — calpain cleavage (inner-membrane pool, model-dependent)
- For: Polster 2005, Cao 2007 — Ca2+ via [[TRPM2]] → calpain I 62 → 57 kDa tAIF, detaches from inner membrane; Bid/Bax alone releases cytochrome c but not [[AIF]]; calpeptin/CsA block.
- Against: Wang 2009 J Neurochem — canonical MNNG/NMDA releases **uncleaved 62 kDa**; calpastatin/KO fails to block. Ischemia shows cleavage; canonical parthanatos does not require it.

### Model C — BAX / outer-membrane permeabilization
- Moubarak 2007: PARP1 → calpains → [[BAX]] translocation → OMP. Bax KO protects equal to DPQ while [[NAD+]] still falls.
- Gap: no link from nuclear [[PAR]] to [[BAX]] activation; no evidence [[AIF]] passes a Bax pore (NBK6179).

### Model D — permeability transition pore
- CsA protects in some models but also preserves mito-[[NAD+]]; directionality (mPT releases [[AIF]] vs [[AIF]] loss causes mPT) unresolvable on minute timescale.

Working synthesis: outer-membrane [[AIF]] = direct [[PAR]]-binding release; inner-membrane [[AIF]] needs a second hit (calpain and/or BAX-MOMP and/or MPTP) depending on stimulus and cell type. [[AIF]]-independent parthanatos exists (retina, macrophages).

## 3. Open questions / follow-ups

- [[PARG]] note still missing (suggested in [[PAR]], [[PARP1]], [[Parthanatos]], [[ARH3]] linking summaries).
- [[ARH1]] / HPF1 notes missing; proposed follow-up entity notes.
- No direct inhibitor of [[AIF]] release; PAR-binding-dead mutant is proof-of-concept only; PAANIB-1 acts downstream at [[MIF]] nuclease.
- Sex dimorphism (male PARP/AIF vs female caspase) has no verified [[MIF]]-step difference.

## Sources

- Oka et al. 2006 JBC; Mueller-Dieckmann et al. 2006; Mashimo/Kato/Moss 2014 DNA Repair (PMC4241382); Cells 2022 ARH review (MDPI 11:3853).
- Pourfarjam 2021; Rack 2020 Genes Dev; PMC6309922, PMC6139573, PMC8141533 on ARH3 mechanism.
- Wang 2009 Exp Neurol; Wang 2009 J Neurochem; Wang 2011 Sci Signal; Yu 2009 ASN Neuro; Polster 2005 JBC; Cao 2007 J Neurosci; Moubarak 2007 MCB; Fatokun 2014; PMC3976618; IJMS 2022 23:7292; PMC11445734.
