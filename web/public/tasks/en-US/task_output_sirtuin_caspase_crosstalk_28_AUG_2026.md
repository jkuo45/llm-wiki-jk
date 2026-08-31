---
title: Sirtuin-Caspase Crosstalk — Research Synthesis (Wiki, Graph, Web)
description: Cross-source research report on the bidirectional regulation between sirtuins and caspases, combining the wiki vault notes, the graphify knowledge graph, and current web literature (with PMIDs).
published: 2026-08-28
created: 2026-08-28
source: tasks/task_output_sirtuin_caspase_crosstalk_28_AUG_2026.md
author: []
tags:
  - sirtuin
  - caspase
  - apoptosis
  - cell-death
  - research-synthesis
updated: 2026-08-28
---

# Research Synthesis: Sirtuin–Caspase Crosstalk (Wiki · Graph · Web)

*Compiled 28_Aug_2026 11:17 PM PDT. Scope: how the seven mammalian sirtuins and the caspase family regulate one another across apoptosis, pyroptosis, and the DNA-damage response.*

## 1. Summary

The sirtuin–caspase relationship is **bidirectional** and acts as a cell-fate switch:

- **Sirtuins → Caspases:** sirtuins (NAD⁺-fueled deacetylases) generally *suppress* caspase-dependent apoptosis — SIRT1 via FOXO4/p53, SIRT3 via CypD/IDH2/Bcl-2, SIRT4/5 by holding procaspase-3/9 and Cytochrome c in check. SIRT2 is the exception (can promote apoptosis).
- **Caspases → Sirtuins:** caspases feed back to *cleave and inactivate* sirtuins — Caspase-9/-3 cleave SIRT1 at DEPDVP(704–709), relocalizing it nucleus→cytoplasm and flipping it to a pro-apoptotic, deacetylase-independent form that is then ubiquitinated by TRIM28 and degraded. Caspases are also upstream negative regulators of SIRT4.

The web literature **refines** three things the wiki only hints at: (a) the exact SIRT1 cleavage site and its coupling to TRIM28 in the DNA-damage response; (b) the nuclear-anti / cytoplasmic-pro fate flip of SIRT1; and (c) a SIRT1→14-3-3ζ→Caspase-2 axis.

## 2. Wiki (vault) current state

**Sirtuins → Caspases (mostly anti-apoptotic)**
- **SIRT1** suppresses **Caspase-3 / Caspase-7** via **FOXO4** (transformed cells); deacetylates **p53** → downregulates **Bax** + caspase-3; suppresses **Caspase-1** (pyroptosis) via NRF2/PGC-1α (`SIRT1.md`, `Caspase-3.md`, `sirtuins in health and disease`).
- **SIRT2** is pro-apoptotic: overexpression raises cleaved caspase-3 + Bax, lowers Bcl-2; inhibitor **AGK2** blocks it via JNK/FOXO3a→Bim (`AGK2.md`).
- **SIRT3** dual: anti-apoptotic in stress (delays Cyt-C release → "subsequent caspase activation"), pro-apoptotic in cancer (enhances caspase-9 cleavage) (`SIRT3.md`, `Roles of SIRT3…`).
- **SIRT4** prevents apoptosis via pro-caspase-9/caspase-9 and procaspase-3/caspase-3 ratios (`sirtuins in health and disease` L217).
- **SIRT5** deacetylates Cyt-C, blocking caspase-3 activation.

**Caspases → Sirtuins (feedback)**
- **Caspase-9 + Bcl-xL cleave SIRT1** during apoptosis, shifting it nucleus→cytoplasm (Ohsawa & Miura 2006, cited in `SIRT1.md`).
- In the mammalian signaling survey, **Caspases are negative regulators of SIRT4** (`SIRT4.md`).

## 3. Graph (graphify, triples graph)

- **SIRT1** is a degree-223 hub; its caspase axis routes through FOXO/p53/Bcl-2 (`SIRT1.md` carries 68 of its edges).
- **SIRT4** (degree 44) carries the explicit edge `Caspases --inhibited_by--> SIRT4` — caspases sit *upstream* of SIRT4.
- Shortest paths (graphify):
  - `SIRT1 → Caspase-3`: **3 hops** (SIRT1 → Cardiac Hypertrophy ← Honokiol → Caspase-3)
  - `SIRT1 → Caspase-9`: **3 hops** (SIRT1 → TFEB → Akt → Caspase-9) — the Akt-phosphorylates-Caspase-9 suppression route.
- BFS from {Caspases, Sirtuins, Apoptosis} returns 99 nodes spanning MOMP, Apoptosome, XIAP, Intrinsic/Extrinsic pathways, and the IAP/caspase control layer — confirming the crosstalk is embedded in the core apoptosis graph.

## 4. Web (current literature) — new detail beyond the wiki

**(a) SIRT1 caspase-cleavage mechanistically pinned down.** Beyond Ohsawa & Miura (FEBS Lett 2006: caspase-9 *and* -3 cleave Sir2α → nuclear export), a 2022 *Int. J. Biol. Sci.* study (PMID 35541916) shows that under severe DNA damage SIRT1 is cleaved at the **C-terminal site DEPDVP(704–709)** by *multiple* caspases, *and* simultaneously poly-ubiquitinated by **TRIM28**. The two PTMs are **reciprocal**: cleaved SIRT1 binds TRIM28 better → faster degradation. This places SIRT1 cleavage alongside PARP, ATM, and DNA-PKcs cleavage — a conserved "dismantle the repair machinery" program. The wiki notes the cleavage/relocalization but not the site or TRIM28 coupling.

**(b) SIRT1 location decides its verdict.** Nuclear SIRT1 = anti-apoptotic (deacetylates p53); cytoplasmic SIRT1 = pro-apoptotic, *caspase-dependent but deacetylase-independent* (Jin et al. 2007; 2025 *Biochem. Biophys. Res. Commun.* "Nuclear-localized SIRT1 inhibits apoptosis via deacetylating p53"). So caspase cleavage isn't just degradation — it flips SIRT1 into a death promoter. This upgrades the wiki's one-directional "caspases regulate SIRT1" note into a true feedback switch.

**(c) SIRT1 also gates Caspase-2 via 14-3-3ζ.** A 2011 *J. Biol. Chem.* paper (PMID 21884983) shows SIRT1 deacetylates **14-3-3ζ**, a direct caspase-2 regulator; SIRT1 inhibition sensitizes cells to **caspase-2-dependent** death and overrides nutrient-mediated caspase-2 suppression. The wiki has Caspase-2 (PIDDosome/DNA-damage initiator) but lacks this SIRT1→14-3-3ζ→Caspase-2 link.

**(d) SIRT3's specific deacetylation targets mapped** (Frontiers Cell Dev Biol 2022, PMC9354933): **CypD** (deacetylation prevents MPT-pore opening), **IDH2** (ROS quenching → anti-apoptotic in cardiomyocytes), **Mcl-1** (destabilization → pro-apoptotic), **GSK-3β** (activation → Bax translocation → pro-apoptotic). This explains the wiki's "dual role" at the enzyme-substrate level.

**(e) Caveat — sirtuin inhibition can be caspase-independent.** In platelets, sirtinol/EX-527/AGK2 trigger apoptosis-like death via p53–Bax but **without caspase-3** (calpain-mediated; PMC4424360). So "inhibit sirtuin → caspase activation" is cell-type dependent.

**(f) Pyroptosis cross-link.** A 2025 *Exp. Mol. Med.* caspases review notes Caspase-3/-7 cleave **GSDMD at non-canonical D87**, actively *suppressing* pyroptosis — relevant context for the wiki's SIRT1→Caspase-1 (pyroptosis) suppression note.

## 5. Consolidated model

```
Sirtuins (NAD+-fueled) ──suppress──> Caspase activation
   SIRT1: FOXO4→↓Casp-3/7; p53-deac→↓Bax/Casp-3; ↓Casp-1(pyroptosis); 14-3-3ζ→↓Casp-2
   SIRT3: CypD/IDH2→anti-apoptotic; Mcl-1/GSK-3β→pro-apoptotic (context)
   SIRT2: pro-apoptotic (↑cleaved Casp-3, via JNK/FOXO3a→Bim)
   SIRT4/5: hold procaspase-9/3 & Cyt-C in check

Caspases ──feed back──> Sirtuins
   Casp-9 + Casp-3 cleave SIRT1 @DEPDVP(704-709) → nuclear→cytoplasm flip
      → cytoplasmic SIRT1 turns PRO-apoptotic (caspase-dependent, deacetylase-independent)
      → cleaved SIRT1 + TRIM28 → ubiquitination/degradation (DDR, ATM-dependent)
   Caspases listed as negative regulators of SIRT4
```

## 6. Gaps & recommendations

- The wiki's "SIRT4 is negatively regulated by caspases" rests on limited studies; no strong new primary paper surfaced — flag as *emerging* rather than established.
- **Missing from notes:** the Caspase-2 (SIRT1/14-3-3ζ) axis, the SIRT1 DEPDVP(704-709)/TRIM28 cleavage coupling, and the nuclear/cytoplasmic fate flip.
- **Actions taken:** created `src/notes/_link/Sirtuin-Caspase Crosstalk.md` and enriched `SIRT1.md` + `Caspase-3.md` with findings (a)–(c). Suggested new entity notes: [[14-3-3ζ]], [[TRIM28]], [[CypD]], [[IDH2]], [[AGK2]].

## 7. Key references

- Ohsawa S, Miura M. Caspase-mediated changes in Sir2α during apoptosis. *FEBS Lett.* 2006;580(25):5875-9.
- Int J Biol Sci 2022;18:2655-2670 (PMID 35541916) — SIRT1 C-terminal caspase cleavage + TRIM28.
- J Biol Chem 2011 (PMID 21884983) — SIRT1 deacetylates 14-3-3ζ to regulate Caspase-2.
- Front Cell Dev Biol 2022;10:947357 (PMC9354933) — Mitochondrial SIRT3 and cell-death modalities.
- Exp Mol Med 2025;57:1470+ — Caspases as master regulators of programmed cell death (GSDMD D87).
- PMC4424360 — Sirtuin inhibition induces caspase-independent apoptosis-like changes in platelets.
