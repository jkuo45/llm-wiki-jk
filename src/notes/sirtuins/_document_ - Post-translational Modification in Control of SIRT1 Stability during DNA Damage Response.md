---
title: Post-translational Modification in Control of SIRT1 Stability during DNA Damage Response
description: Ouyang et al. show that severe DNA damage triggers two reciprocal PTMs of SIRT1 — TRIM28-mediated K48-polyubiquitination/proteasomal degradation and caspase-mediated C-terminal cleavage at DEPDVP(704-709) — on an ATM-TRIM28-SIRT1 axis that determines cell fate in the DNA damage response.
published: 2022-03-27
created: 2026-08-28
updated: 2026-08-28
source: https://doi.org/10.7150/ijbs.68587
author: [Chenxi Ouyang, Guang Lu, Weifeng He, Boon-Huat Bay, Han-Ming Shen]
tags:
  - document
  - apoptosis
  - sirtuin
  - caspase
  - dna-repair
---

# Post-translational Modification in Control of SIRT1 Stability during DNA Damage Response

**Post-translational Modification in Control of SIRT1 Stability during DNA Damage Response** (Ouyang, Lu, He, Bay & Shen, *Int. J. Biol. Sci.* 2022;18(7):2655–2669, doi:10.7150/ijbs.68587, PMID 35541916, PMC9066097; CC BY 4.0 — full text ingested).

> [!important] Central claim
> Under severe DNA damage, [[SIRT1]] undergoes two **reciprocal** post-translational modifications: (i) **polyubiquitination and proteasomal degradation** mediated by the RING-domain E3 ligase [[KAP1|TRIM28]], and (ii) **C-terminal cleavage by caspases** at DEPDVP(704–709). Cleaved SIRT1 binds TRIM28 *more* strongly, accelerating its own destruction — an [[ATM]]–TRIM28–SIRT1 signaling axis that converts an anti-apoptotic repair protein into a casualty of the death program ([[Sirtuin-Caspase Crosstalk]]).

## Background

- **DDR logic**: DNA damage detection → repair (MMR/BER/NER for ssDamage; NHEJ/HR for double-strand breaks) → cell-fate decision; persistent DDR signaling drives [[Senescence]] or [[Apoptosis]], the latter executed by [[Caspases]].
- **TRIM28/KAP1**: 110 kDa multi-domain RING E3 ligase of the TRIM family; roles in DDR, transcriptional co-repression, p53 degradation, and autophagy. Upon DSBs it is phosphorylated by [[ATM]] (Ser824), relaxing chromatin for repair; [[SIRT1]]-mediated deacetylation of TRIM28 stabilizes its interaction with 53BP1 and enhances NHEJ repair.
- **SIRT1 in DDR (known prior)**: recruited to damaged sites by ATM; reciprocally deacetylates ATM, stimulating its auto-phosphorylation and stabilization; also deacetylates TIP60, NBS1, XPA, and XPC. What was *unknown*: how SIRT1 **protein stability** itself is regulated by PTMs under DNA damage.

## Methods (summary)

HeLa, HEK293T, HCT116 cells; DNA damage via doxorubicin (DOX, topoisomerase II), camptothecin (CPT, topoisomerase I), etoposide (ETOP, topoisomerase II), and UV (NER-type damage). Proteasome vs lysosome discrimination with MG132 vs bafilomycin A1/chloroquine; turnover by cycloheximide (CHX) chase; CRISPR/Cas9 TRIM28-knockout HeLa lines (WT vs E3-dead TRIM28C65/68A reconstitution); SIRT1 cleavage-site mutants **SIRT1-D707A** (cleavage-resistant) and **SIRT1-ΔC703** (cleavage-mimic); caspase inhibitors Q-VD-OPh and Boc-D-FMK; ATM inhibitor KU-55933; SIRT1 modulators resveratrol (activator) and Selisistat/EX-527 (inhibitor); in vivo denaturing-IP and in vitro (UBE1/UBE2L6) ubiquitination assays; nuclear/cytoplasmic fractionation; cell synchronization (double thymidine block, nocodazole); cell death by PI-exclusion flow cytometry.

## Results

### 1. SIRT1 protein decreases upon DNA damage (Fig. 1)

DOX, CPT, ETOP, and UV all reduced SIRT1 protein time- and dose-dependently in HeLa cells; the same downregulation occurred in HEK293T and HCT116 — not cell-line- or agent-specific. γH2AX marked the damage.

### 2. Degradation is proteasome-dependent (Fig. 2)

- CHX chase: SIRT1 half-life shortens under ETOP.
- SIRT1 **mRNA unchanged** (qRT-PCR) → post-transcriptional.
- **MG132 restored SIRT1; bafilomycin A1 did not** → ubiquitin-proteasome system (UPS), not autophagy-lysosome. SIRT1 ubiquitination rose with DOX.

### 3. TRIM28 interacts with SIRT1 (Fig. 3)

Candidate E3 ligases were found by intersecting the inBio Discover PPI database with UbiBrowser predictions — **TRIM28** appeared in both, and SIRT1 appeared as a predicted TRIM28 substrate in both reverse directions. Endogenous co-IP showed a **constitutive** SIRT1–TRIM28 interaction (unchanged by DOX); both proteins are primarily nuclear. Domain mapping: the **B-box and coiled-coil domains** of TRIM28 are required for binding (RING deletion did not abolish interaction — consistent with RING being the catalytic domain, not the docking site).

### 4. TRIM28 mediates SIRT1 ubiquitination and degradation (Fig. 4)

- TRIM28 siRNA → SIRT1 stabilized in CHX chase; **K48-linked** ubiquitination of SIRT1 markedly reduced.
- Three independent CRISPR TRIM28-KO clones → elevated basal SIRT1 protein and stability.
- Reconstitution: WT TRIM28, but not E3-dead **TRIM28C65/68A**, lowered SIRT1 and restored ubiquitination — in vivo and in a purified **in vitro** ubiquitination assay (recombinant His-SIRT1 + UBE1/UBE2L6). TRIM28 is **necessary and sufficient** as SIRT1's damage-induced E3.

### 5. Caspases cleave SIRT1 at DEPDVP(704–709) (Fig. 5)

- A lower SIRT1 band appeared with DOX; only **pan-caspase inhibitors** (Q-VD-OPh, Boc-D-FMK, z-VAD) blocked it — calpain/cathepsin-B inhibitor EST and calpain inhibitor ALLN did not (ALLN even induced cleavage without damage).
- Individual siRNA knockdown of CASP1–9 failed to block cleavage; only pan-inhibition worked → **redundant, multi-caspase mediation** (cleaved [[Caspase-9]] tracked inhibitor efficacy).
- N-terminal tags (FLAG/GFP) but not a C-terminal MYC tag detected the lower band → **C-terminal cleavage**.
- SitePrediction + tag logic nominated **DEPDVP(704–709)**: the **D707A** mutant was cleavage-resistant, and the **ΔC703** truncation reproduced the natural cleaved band.
- Both full-length and cleaved SIRT1 were degraded with damage; TRIM28 overexpression lowered SIRT1, and Q-VD-OPh *partially restored* it → cleavage and degradation are coupled.

> [!tip] Cleaved SIRT1 is a better TRIM28 substrate (Fig. 6)
> ΔC703 degraded faster than full-length SIRT1 in CHX chases — but not in TRIM28-KO cells. Boc-D-FMK abolished the damage-induced ubiquitination boost; the ΔC703 mimic showed the **highest** ubiquitination of all constructs and **enhanced TRIM28 binding** (D707A showed reduced binding). Fractionation showed ΔC703 accumulating in the nucleus with damage, where TRIM28 resides; cleaved Caspase-9 was also detected in nuclear extracts.

### 6. The same program runs in mitosis (Fig. S5)

Double-thymidine-block and nocodazole synchronization showed SIRT1 declining as cells enter mitosis (Cyclin B1/Aurora B up), again MG132-sensitive, transcription-independent, with elevated ubiquitination and Boc-D-FMK-sensitive cleavage. TRIM28–SIRT1 colocalization increased in prometaphase/metaphase. ATM phosphorylates TRIM28 Ser824 in mitosis too — dissociating TRIM28 from heterochromatin.

### 7. SIRT1 protects against damage-induced death — the ATM–TRIM28–SIRT1 axis (Fig. 7)

- **Resveratrol** (SIRT1 activator) attenuated ETOP/CPT-induced death; **Selisistat (EX-527)** enhanced it — validated by acetyl-p53 (Lys379) changes.
- In TRIM28-KO cells (where SIRT1 can no longer be degraded), SIRT1 knockdown *increased* ETOP death and SIRT1 overexpression rescued — proving TRIM28-mediated degradation is what kills.
- **KU-55933** (ATM inhibitor) lowered pATM(Ser1981) and pTRIM28(Ser824), *accelerated* SIRT1 degradation, and increased death — effects absent in TRIM28-KO cells → ATM's pro-survival role runs through restraining the TRIM28–SIRT1 destruction axis.

## Discussion (key points)

- Third known E3 for SIRT1, and the first tied to DNA damage: **SMURF2** (colorectal cancer proliferation) and **MDM2** were reported previously, neither under DDR conditions.
- Caspase cleavage of SIRT1 places it in a canonical DDR-cleavage set — **PARP1**, **DNA-PKcs**, and **ATM itself** are cleaved/inactivated during apoptosis — suggesting caspases systematically dismantle the repair machinery to commit to death.
- The two PTMs are **mutually reinforcing**: UPS inhibition reduces cleavage (ubiquitination may prime cleavage), while cleavage enhances TRIM28 binding and degradation.
- ATM inhibition *increasing* SIRT1 destruction (via failing to phosphorylate/activate TRIM28 properly) reframes ATM as a pro-survival guardian of SIRT1 stability; TRIM28 Ser824 phosphorylation may even modulate its E3 activity toward SIRT1.
- Therapeutic reading: the axis decides cell fate after genotoxic chemotherapy; SIRT1 stabilization (or TRIM28 inhibition) could sensitize or protect depending on context.

## Connections

- [[SIRT1]]: the regulated protein — ubiquitinated, cleaved at DEPDVP(704–709), and degraded under severe DNA damage.
- [[KAP1|TRIM28]]: RING E3 ligase; necessary and sufficient for SIRT1 K48-polyubiquitination; binds cleaved SIRT1 preferentially.
- [[ATM]]: phosphorylates TRIM28 Ser824; ATM inhibition accelerates SIRT1 destruction and death (TRIM28-dependent).
- [[Caspase-9]] / [[Caspase-3]]: mediators of the redundant C-terminal cleavage; pan-caspase inhibition is the only blockade.
- [[p53]]: acetylation (Lys379) readout of SIRT1 activity in the functional assays.
- [[PARP1]]: fellow caspase substrate in the DDR-cleavage program.
- [[Resveratrol]] / [[EX-527]]: SIRT1 activator/inhibitor pair used to establish SIRT1's protective role.
- [[Apoptosis]] / [[DNA Repair]]: the cell-fate outputs the axis decides between.
- [[Sirtuin-Caspase Crosstalk]]: this paper is the mechanistic anchor of the caspase→sirtuin direction.

## Linking Summary

- New links added: [[SIRT1]], [[KAP1|TRIM28]], [[ATM]], [[Caspase-9]], [[Caspase-3]], [[p53]], [[PARP1]], [[Resveratrol]], [[EX-527]], [[Apoptosis]], [[DNA Repair]], [[Senescence]], [[Sirtuin-Caspase Crosstalk]], [[CYCLIN B1]]
- Suggested new entity notes to create: [[SMURF2]] (resolved: [[DNA-PKcs]], [[MDM2]], [[53BP1]], [[XPA]], [[γH2AX]] already exist in the vault)
- Strong connections to strengthen: [[KAP1]] ↔ [[SIRT1]], [[ATM]] ↔ [[KAP1]], [[Caspase-3]] ↔ [[SIRT1]]
