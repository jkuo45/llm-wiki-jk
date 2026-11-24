---
title: Feoktistova et al., Molecular Cell 2011 — Results and Discussion Review: Ripoptosome Assembly by cIAPs, cFLIP Isoform Regulation
description: Results- and Discussion-section summary of Feoktistova et al., Molecular Cell 2011 (10.1016/j.molcel.2011.06.011): cellular inhibitor of apoptosis proteins (cIAPs) block spontaneous 2 MDa Ripoptosome formation; cFLIP isoforms set the Caspase-8 activity rheostat determining apoptosis versus RIPK3-dependent necroptosis. Each Results and Discussion item carries its physiological and pathological consequences, including the downstream MLKL-driven necroptosis in development, inflammation and disease.
created: 2026-11-22
updated: 2026-11-23
type: task-output
tags: [cell-death, ripoptosome, ciaps, cflip, apoptosis, necroptosis, 2011, consequences]
---

# Feoktistova et al., Molecular Cell 2011 — Results and Discussion Review

## Conceptual map of the death-switch mechanism

**Decision flow.** Assembly licenses; execution decides.

```
cIAPs present → modified RIPK1 held by the proteasome → no assembly (survival/apoptosis)

cIAPs lost (Smac mimetic, TLR3/TRIF, MG132, genotoxic stress)
  → modified RIPK1 accumulates → 2 MDa Ripoptosome "licenses" (necessary but not sufficient)
      ├─ Caspase-8 homodimers → cleave RIPK1 → disassemble → silent apoptosis
      ├─ FLIP_L-dominant      → cleave RIPK1 → disassemble → survival
      └─ FLIP_S-dominant      → no cleavage → RIPK1 → RIPK3 → MLKL → necrosome → necroptosis
           (requires intact RIPK3 and MLKL; otherwise fully protected)
```

**Glossary of the abstract terms.** Suggested entry order: `[[c-FLIP]]` → `[[Caspase-8-c-FLIP Rheostat]]` → `[[Ripoptosome]]` → `[[Smac mimetics]]` → `[[Necroptosis]]` / `[[necrosome]]` / `[[MLKL]]`. Each row names the vault note holding the deep dive.

| Term in this document | Deep-dive note | Anchor meaning |
|---|---|---|
| 2 MDa Ripoptosome | [`src/notes/cell-death/Ripoptosome.md`](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/cell-death/Ripoptosome.md) | Intracellular death platform of RIPK1, FADD, Caspase-8/10 and c-FLIP; gel filtration fractions 4–6 |
| "modified RIPK1 pool" | [`Ripoptosome.md` (Regulators)](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/cell-death/Ripoptosome.md) | Compartmentalized RIPK1 subset targeted to proteasomal degradation; MG132 triggers assembly |
| cIAP gate | [`src/notes/cell-death/cIAPs.md`](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/cell-death/cIAPs.md) | E3 ligases blocking assembly while present; Smac mimetics force their degradation |
| cFLIPL / cFLIPS | [`src/notes/_link/c-FLIP.md`](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/_link/c-FLIP.md) | cFLIPL = brake + assembly-blocker; cFLIPS = assembly promoter + apoptosis/activity suppressor |
| "FLIP_L:FLIP_S ratio, not total c-FLIP" | [`src/notes/cell-death/Caspase-8-c-FLIP%20Rheostat.md`](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/cell-death/Caspase-8-c-FLIP%20Rheostat.md) | Local heterodimer-to-homodimer ratio set at each complex sets fate |
| "Caspase-8 activity as the rheostat" | [`Caspase-8-c-FLIP%20Rheostat.md`](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/cell-death/Caspase-8-c-FLIP%20Rheostat.md) | FLIP_L heterodimers retain catalytic activity for RIPK1/RIPK3 cleavage below full activation |
| Licensing vs execution | [`Ripoptosome.md` (Mechanism step 4)](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/cell-death/Ripoptosome.md) | Assembly licenses death; RIPK3/MLKL provide the executing competence |
| Necrosome | [`src/notes/cell-death/necrosome.md`](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/cell-death/necrosome.md) | The RIPK1/RIPK3/MLKL execution complex |
| MLKL | [`src/notes/cell-death/MLKL.md`](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/cell-death/MLKL.md) | Executioner: N-terminal four-helix bundle oligomerizes, IP6-aided membrane pore → lytic DAMP release |
| Smac mimetics / IAP antagonists | [`src/notes/cell-death/Smac%20mimetics.md`](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/cell-death/Smac%20mimetics.md) | Bivalent IBM mimetics dimerize cIAP RING domains → rapid auto-ubiquitination → degradation |
| DAMP release, lytic vs silent | [`src/notes/cell-death/Necroptosis.md`](https://github.com/jkuo45/llm-wiki-jk/blob/dev/src/notes/cell-death/Necroptosis.md) | Lytic death leaks ATP, HMGB1, mitochondrial DNA, nuclear contents → inflammatory loop |

## Summary

In the absence of cellular inhibitor of apoptosis proteins (cIAPs), a 2 MDa (approximately 2 megadaltons) intracellular platform termed the Ripoptosome forms spontaneously — it contains receptor-interacting protein kinase 1 (RIPK1, also written RIP1), Fas-associated death domain (FADD), Caspase-8, Caspase-10 and cellular FLICE-like inhibitory protein (cFLIP; FLICE = FADD-like ICE, i.e. caspase-8) isoforms — and activates apoptosis or receptor-interacting protein kinase 3 (RIPK3, also written RIP3)-dependent necroptosis. Caspase-8 activity within the complex disassembles it by cleaving scaffold proteins; the long isoform (cFLIPL) blocks formation and restrains the activity, while the short isoform (cFLIPS) promotes assembly and suppresses the activity, so when cIAPs are absent, cFLIPS cells show necroptosis.

Each item below is followed by its physiological consequences: what the finding implies for cell physiology, tissue-level outcome and disease. Acronyms are expanded at first use in each item so that every numbered section can be read on its own. Basis for the consequence statements: the primary paper (Feoktistova et al., *Molecular Cell* 2011, DOI [digital object identifier] 10.1016/j.molcel.2011.06.011; Tier 3 — biochemical and cell-biological), the vault notes [[Ripoptosome]], [[Necroptosis]], [[MLKL]], [[necrosome]], [[Caspase-8-c-FLIP Rheostat]], [[Smac mimetics]], [[c-FLIP]], and later review/systematic evidence cited inline. Death-mode terminology follows the 2011 usage; the Nomenclature Committee on Cell Death 2012 (NCD-2012) restyling is noted where it changes the reading.

## Results

### 1. TLR3-induced cell death is blocked by cIAPs and proceeds in a Caspase- and RIP1-kinase-dependent manner independent from TNF signaling

Toll-like receptor 3 (TLR3) ligand (poly(I:C), i.e. polyinosinic-polycytidylic acid, a synthetic double-stranded RNA) induced cell death in HaCaT (spontaneously immortalized human keratinocyte line), MET-1 (mouse mammary epithelial line) and A5RT3 (HaCaT-derived metastatic clone) cells; pretreatment with an inhibitor of apoptosis protein (IAP) antagonist (compound A, a small-molecule Smac mimetic — second mitochondria-derived activator of caspases [SMAC] mimetic) or TWEAK (TNF-like weak inducer of apoptosis) sensitized HaCaT and MET-1 but not A5RT3. Caspase-8 and RIPK1 knockdown respectively reduced and eliminated TLR3-induced death in the absence of cIAPs; the combination of Z-VAD (Z-VAD-FMK, a benzyloxycarbonyl-Val-Ala-Asp-fluoromethylketone pan-caspase inhibitor) and Nec-1 (Necrostatin-1, a RIPK1 kinase inhibitor) fully rescued, with cell death morphology consistent with simultaneous apoptosis and necroptosis. High mobility group box 1 (HMGB1) release, a Caspase-8-independent marker, was unchanged by Z-VAD, reduced by Nec-1, and fully suppressed by the Z-VAD + Nec-1 combination. Death was independent of autocrine tumor necrosis factor receptor 1 (TNFR1) signaling: TNFR1 knockdown and blocking FADD-containing death receptor ligands (TNFR2-Fc, tumor necrosis factor receptor 2 [TNFR2] soluble receptor; TRAILR2-Fc, TNF-related apoptosis-inducing ligand receptor 2 soluble receptor; CD95-Fc, Fas soluble receptor) did not alter TLR3 death. Caspase-8 immunoprecipitation showed that cIAPs depletion increased Caspase-8–RIPK1 association upon TLR3 stimulation; the complex contained FADD, the cFLIP cleavage fragment p43, Caspase-10 p47/p43 and TIR-domain-containing (TIR = Toll/interleukin-1 receptor domain) adaptor-inducing interferon-β (TRIF), but not in TNFR1 complex II. Primary human keratinocytes (PKs) were sensitized to TLR3 death by cIAP/X-linked inhibitor of apoptosis (XIAP) depletion, independent of TNFR1.

**Physiological consequences.**

- poly(I:C) is the viral double-stranded RNA model and TLR3 is expressed in the tested epithelial lines; death proceeds on the Caspase-8 + RIPK1-kinase arm while cIAPs are present, and neither TNFR1 knockdown nor blocking of TNFR2/TRAILR2/CD95 ligands alters it — the TLR3 death complex is a platform distinct from TNFR1 complex II. Consequence: an innate double-stranded-RNA-sensing route to death that requires no death-receptor ligand, available in any TLR3-bearing cell once the cIAP brake is removed.
- HMGB1 release (a Caspase-8-independent marker) was unchanged by Z-VAD and reduced by Nec-1. Consequence: the lytic arm leaks a damage-associated molecular pattern (DAMP) that the apoptotic arm does not, so the physiological difference between the two outcomes is a sterile-danger signal and not only a morphology.
- Primary keratinocytes are sensitized by cIAP/XIAP depletion independent of TNFR1, so the route is generic to TLR3-bearing epithelium rather than restricted to the transformed lines.

### 2. cIAPs block spontaneous Ripoptosome formation; RIPK1 is required

Cell death required TLR3 expression and TRIF. Knockdown of Caspase-8 reduced TLR3 death in the absence of cIAPs (rescued by Nec-1 but not Z-VAD); knockdown of RIPK3 produced no protection, while Z-VAD protected independent of Nec-1 — the two effectors being Caspase-8 (apoptosis) and RIPK3 (necroptosis); combined RIPK3 and Caspase-8 knockdown fully protected. Knockdown of RIPK1 fully protected; Ripoptosome formation (Caspase-8 immunoprecipitation) required RIPK1. IAP antagonist alone produced Caspase-8–RIPK1–FADD interaction insufficient for death; additional poly(I:C) stimulation recruited TRIF into the complex.

**Physiological consequences.**

- At cIAP loss a stress platform becomes a death switch without any ligand engagement; because assembly is necessary but not sufficient (item 5), cIAP loss licenses death rather than executing it, and effector competence (RIPK3 present) decides the outcome.
- Spontaneous assembly is cell-type specific — HaCaT and MET-1 (transformed) yes, primary keratinocytes no — so in this system the cIAP-loss route operates mainly in transformed cells.
- cIAPs control a compartmentalized, "modified" RIPK1 pool targeted to proteasomal degradation (the proteasome inhibitor MG132 alone triggers assembly; MG132 plus IAP antagonist suppresses it). Consequence: the cIAP gate sits on a post-translational degradation cycle rather than on steady-state protein levels, and proteasome blockade alone is sufficient to license the platform; a lysosomal second control mechanism is suggested but speculative.

### 3. cFLIP is a critical regulator of the Ripoptosome

A5RT3 cells (no endogenous cFLIP): knockdown of cFLIP sensitized to TLR3 death. In A5RT3, cFLIP knockdown produced spontaneous Ripoptosome formation in the absence of cIAPs, amplified by TLR3 stimulation, with Caspase-10 accumulating in the complex.

**Physiological consequences.**

- Without cFLIP restraint the platform assembles on its own at cIAP loss and TLR3 stimulation amplifies it, with Caspase-10 accumulating in the complex — a second, Caspase-8-parallel execution arm that kills when the Caspase-8 arm is compromised.
- cFLIP is the only constituent of the complex whose absence makes the platform assemble spontaneously, so it is the molecule that holds the platform in a survival configuration; this is the basis for treating it as a target rather than merely as a Caspase-8 inhibitor.

### 4. cFLIP isoforms differentially regulate poly(I:C)-induced death by regulation of the Ripoptosome

In HaCaT (low endogenous cFLIP): cFLIPL protected from TLR3 death under all conditions, while cFLIPS cells died spontaneously upon cIAPs depletion — a RIPK1-kinase-dependent, Z-VAD-insensitive death. Ripoptosome immunoprecipitation: cFLIPL suppressed RIPK1/FADD association after IAP antagonist/TLR3; cFLIPS increased RIPK1 association (total RIPK1 levels slightly elevated). HeLa cells showed the same pattern: cFLIPS was protective from IAP antagonist, cFLIPL inhibitory. In primary keratinocytes, spontaneous Ripoptosome formation was not detectable without cIAPs function; high endogenous cFLIPL levels in primary keratinocytes versus HaCaT argue that spontaneous formation is cell-type specific, occurring mainly in transformed cells in a cFLIP-isoform-dependent manner.

**Physiological consequences.**

- The isoform present, not total cFLIP, sets the quality of death. With Caspase-8 intact, the cFLIPL heterodimer retains enough activity to cleave RIPK1 and disassemble the platform — survival with limited substrate cleavage and no full Caspase-8 activation; with Caspase-8 inactive or blocked and cFLIPS present, RIPK1 persists uncleaved and RIPK1 → RIPK3 → necroptosis executes, which is why the death is Z-VAD-insensitive.
- HaCaT and HeLa (human cervical cancer line) show the same isoform opposition with opposite outcome polarity (cFLIPS death versus cFLIPS protection): the outcome depends on the isoform present relative to the Caspase-8 pool and on the stimulus, not on cFLIP abundance alone ([[c-FLIP]]: the cFLIPL:cFLIPS ratio, not total cFLIP, is the fate-determining parameter).
- High cFLIPL in primary keratinocytes versus low in HaCaT is the stated basis for cell-type-restricted spontaneous assembly — a brake that distinguishes normal from transformed epithelium in this system.

### 5. Promotion of necroptosis by cFLIPS in the absence of cIAPs is independent of TNFR1 signaling and occurs in a 2 MDa complex

HaCaT-cFLIPS: IAP antagonist alone induced spontaneous Ripoptosome formation (no TRIF association). TNFR1 knockdown, autocrine TNFR1 blockade, and Caspase-8 immunoprecipitation in TNFR1 knockdown cells all showed unchanged spontaneous Ripoptosome formation and RIPK1 association; TNFR1 complex I/II analysis excluded Caspase-8 recruitment through the receptor — the complex cannot be called TNFR1 complex II. Nec-1 or RIPK3 knockdown fully blocked IAP antagonist-induced death; Ripoptosome formation preceded death detection. Gel filtration (Superose 6 column): RIPK1, FADD and Caspase-8 were mainly monomeric; a 2 MDa complex was detected in the column range of fractions 4–6; after cIAPs degradation, Caspase-8/RIPK1/cFLIP association appeared only in the 2 MDa fractions — cIAPs block assembly of the 2 MDa platform.

**Physiological consequences.**

- Nec-1 or RIPK3 knockdown fully blocks IAP-antagonist-induced death and RIPK3 is required: the necrosome — the RIPK1/RIPK3/MLKL execution complex — not the ripoptosome, is the death executor, and combined RIPK3 + Caspase-8 knockdown protects fully, so the platform carries two independent kill vectors ([[necrosome]]).
- Execution chain downstream of the persisting platform: uncleaved RIPK1 recruits RIPK3 through the RIP homotypic interaction motif (RHIM); RIPK3 phosphorylates mixed lineage kinase domain-like protein (MLKL); phosphorylated MLKL oligomerizes via its N-terminal four-helix bundle and translocates to phosphatidylinositol-phosphate-rich plasma-membrane domains, aided by binding of inositol hexakisphosphate (IP6), where it forms cation channels → osmotic swelling, membrane rupture, DAMP release (mitochondrial DNA, ATP, HMGB1, nuclear contents) ([[MLKL]]; Dhuriya & Sharma 2018, *Journal of Neuroinflammation*, PMCID [PubMed Central identifier] PMC3004764). A later addition to the execution arm is lysosomal membrane permeabilization with cathepsin B release (Cell Death & Differentiation 2023, DOI 10.1038/s41418-023-01237-7).
- DAMP amplification closes the loop: released DAMPs are recognized by pattern-recognition receptors — toll-like receptors (TLRs), the NLRP3 inflammasome (NOD = nucleotide-binding oligomerization domain, LRR = leucine-rich repeat, pyrin domain; NLRP3 = NOD-, LRR- and pyrin-domain-containing protein 3), cyclic GMP-AMP synthase (cGAS) – stimulator of interferon genes (STING), and retinoic acid-inducible gene I (RIG-I) / mitochondrial antiviral-signaling protein (MAVS) — and the cytosolic RNA sensors RIG-I and MAVS feed interferon and TNFα production back into further necroptotic death. Consequence: the lytic death does not end with the dying cell; it converts a local stimulus into a self-amplifying inflammatory loop (Dhuriya & Sharma 2018; *Experimental and Molecular Medicine* 2020; *Nature Immunology* 2025).
- Platform assembly precedes death detection and the Caspase-8/RIPK1/cFLIP association appears only in the 2 MDa fractions after cIAP degradation, so formation is a licensing step and execution competence decides — which is why a 2 MDa complex can exist without killing the cell.

### 6. cFLIPS but not cFLIPL blocks Caspase-8 activity within the Ripoptosome

HaCaT-cFLIPS Ripoptosome contained uncleaved RIPK1 (even with Z-VAD-FMK present); control cells contained cleaved RIPK1 (the p39 fragment), indicative of Caspase-8 activity within the complex, and Caspase-8 activity disassembles the complex by cleaving scaffold proteins. Flag-immunoprecipitation of the complex: in cFLIPS cells, RIPK1, FADD and (after TLR3) TRIF co-precipitated; in cFLIPL cells, less complex formation and mostly cleaved Caspase-8 — Caspase-8/cFLIPL heterodimers retaining catalytic activity at a level sufficient for selected substrate cleavage (including RIPK1) but insufficient for full Caspase-8 activation. Proteasome inhibitor MG132 (N-acetyl-leucyl-leucyl-norleucinal) alone induced spontaneous Ripoptosome formation despite cIAP presence; MG132 plus IAP antagonist suppressed it. Model: cIAPs prevent Ripoptosome formation by ubiquitinating a "modified" RIPK1 pool targeted to proteasomal degradation; proteasome blockade alone triggers spontaneous formation.

**Physiological consequences.**

- With cFLIPL the platform is a survival complex: Caspase-8/cFLIPL heterodimers cleave RIPK1 and disassemble it, releasing no apoptotic signal. With cFLIPS the platform persists — uncleaved RIPK1, with RIPK1/FADD/TRIF co-precipitated — and the RIPK1–RIPK3–MLKL axis executes lytic necroptosis.
- The physiological difference between the two isoform states is therefore the difference between a silent, immunologically tolerated death and a lytic, DAMP-releasing death with downstream inflammatory amplification.
- MG132 alone triggering assembly despite cIAP presence, and MG132 plus IAP antagonist suppressing it, place the cIAP gate on the turnover of a modified RIPK1 pool and imply a lysosomal second control mechanism (speculative).

## Discussion

### The 2 MDa Ripoptosome as the regulatory platform

The 2 MDa complex integrates multiple upstream stress signals converging at RIPK1; on cIAP loss it forms spontaneously and is necessary but not sufficient for cell death. The complex contains FADD, Caspase-8, Caspase-10 and cFLIP isoforms; the 2011 nomenclature has since been absorbed into the TNFR1 complex II framework — current usage often describes the same components as a TNF-independent complex-II variant or as a TRIF-recruited necrosome — but the paper's model is retained: RIPK1 is the core scaffold, and the platform links TLR3 (via TRIF) to the death effectors.

**Physiological consequences.**

- The complex is the single-cell decision point at which stress signals, innate sensing (TRIF-mediated double-stranded-RNA sensing) and death-receptor adaptor chemistry converge; because it assembles without ligand engagement at cIAP loss, a cell can be moved from survival to death by loss of an E3 ubiquitin ligase rather than by a new signal.
- Everything downstream of the platform is governed by local stoichiometry and isoform ratio rather than by signal strength, which is why the same 2 MDa complex yields apoptosis, necroptosis or survival in different cells.
- Its fate is decided downstream by the RIPK1–RIPK3–MLKL axis, and RIPK1 kinase inhibition removes that decision point without removing the platform (Nec-1 blocks the cFLIPS-driven necroptosis in HaCaT).

### Regulation by cIAPs

cIAPs block spontaneous assembly of the 2 MDa platform; the MG132 data argue they prevent assembly by ubiquitinating and degrading "modified" RIPK1; IAP antagonists themselves trigger cIAP autoubiquitination and degradation. The MG132-suppression of the MG132-plus-IAP-antagonist complex formation points to a lysosomal pathway as a second cIAP control mechanism (speculative, based on MG132's incomplete effect).

**Physiological consequences.**

- The gate is on the turnover of a modified, compartmentalized RIPK1 pool rather than on bulk RIPK1 abundance, so any perturbation that stalls RIPK1 degradation (proteasome inhibition) licenses the platform even with cIAPs present.
- Smac-mimetic-driven cIAP loss is therefore the therapeutic lever that converts the platform into death in tumor cells; cIAP loss additionally stabilizes NF-κB-inducing kinase (NIK) and activates the non-canonical nuclear factor kappa B (NF-κB) pathway, producing tumor necrosis factor alpha (TNFα) that feeds the Complex II route ("SMAC mimetic can also sensitize... via TNFα-mediated apoptotic cell death"; [[Smac mimetics]]).
- Because the platform is necessary but not sufficient, IAP antagonism alone leaves the outcome to the isoform state — which is the mechanistic argument for combining IAP antagonists with TLR3 agonists or with death ligands rather than using them as single agents.

### Caspase-8 activity as the death-quality rheostat

Caspase-8 activity within the Ripoptosome determines the death quality: Caspase-8/cFLIPL heterodimers cleave scaffold proteins (RIPK1) to disassemble the complex; cFLIPL–Caspase-8 heterodimers retain activity sufficient for RIPK1 cleavage but insufficient for full activation. In the absence of cIAPs, cFLIPS prevents this activity, so the accumulated RIPK1 activates RIPK3-dependent necroptosis — the stoichiometry of Caspase-8, cFLIPL and cFLIPS sets whether apoptosis or necroptosis occurs. Where Caspase-8 and RIPK3 are both absent, cells are fully protected. The paper explicitly notes the unresolved question of how the stoichiometric ratio of cFLIPL and cFLIPS impacts the outcome.

**Physiological consequences.**

- One platform, two death qualities: Caspase-8 homodimers give membrane-intact apoptosis with minimal DAMP release and efficient efferocytosis (clearance by phagocytes), whereas cFLIPS-licensed persistence gives lytic necroptosis with DAMP-driven inflammation ([[Necroptosis]]). The rheostat therefore sets not only the modality but the inflammatory burden that the dying cell imposes on its tissue.
- Full protection when both Caspase-8 and RIPK3 are absent means the platform's killing capacity is gated by the presence of two proteins: any cell lacking RIPK3 (as in several epithelial tumors) is necroptosis-incompetent even with a licensed platform.
- Redirect paradox: blocking RIPK3 activity does not merely prevent necroptosis — it shifts the same platform toward apoptosis, an effect enhanced by cFLIPL (Tsuchiya 2015; [[Necroptosis]] crosstalk). Consequence for therapy: kinase blockade changes the death modality rather than simply switching death off. The kinase-dead RIPK3 D161N mutant (Asp161→Asn active-site substitution) is the specific tool that produces this redirection.
- The lytic arm also feeds inflammatory output beyond the dying cell: RIPK3 can activate the NOD-, LRR- and pyrin-domain-containing protein 3 (NLRP3) inflammasome directly, and the MLKL–NLRP3 axis links necroptosis to pyroptotic cytokine release, so the rheostat state propagates into neighbouring cells.

### Cell-type specificity and in vivo relevance

Spontaneous assembly was observed mainly in transformed cells (HaCaT-cFLIPS); PKs express high cFLIPL and show no spontaneous assembly upon IAP antagonist treatment. In vivo, double knockout of Caspase-8 and FADD is embryonic lethal and is rescued by RIPK3/RIPK1 loss — consistent with necroptosis routing when the complex cannot be disassembled.

**Physiological consequences.**

- The Casp8⁻/⁻Fadd⁻/⁻ embryonic lethality rescued by Ripk3⁻/⁻, Ripk1⁻/⁻ or Mlkl⁻/⁻ identifies the lethal phenotype as unopposed necroptosis routed through the necrosome rather than residual apoptotic function; the developmental requirement is that the platform stay disassemblable ([[Necroptosis]]; [[Caspase-8-c-FLIP Rheostat]]). Cflip⁻/⁻ lethality requires combined Fadd⁻/⁻Ripk3⁻/⁻ rescue: without RIPK3, cFLIP is still needed to restrain Caspase-8/FADD-dependent apoptosis — cFLIPL brakes both death programs.
- Nec-1 is neuroprotective preclinically (reduced infarct volume after middle cerebral artery occlusion in mice), a direct consequence of disengaging the platform by RIPK1-kinase inhibition ([[Necroptosis]]).
- In vivo consequence of the necroptotic routing in disease models: cardiac ischemia–reperfusion injury (Ripk3⁻/⁻ improved ejection fraction; RIPK3 activates calcium/calmodulin-dependent protein kinase II [CaMKII] in cardiomyocytes during myocardial I/R); kidney ischemia–reperfusion injury (Mlkl⁻/⁻ reduced inflammation at 12 h and lower serum creatinine and tubular injury at 24 h, with increased apoptosis in the injured kidney, and the first 3 h after reperfusion a candidate treatment window — *Frontiers in Immunology* 2023); lung ischemia–reperfusion injury (necroptosis of graft cells drives chemokine (C-X-C motif) ligand 1 [CXCL1]-mediated neutrophil recruitment to subpleural vessels, then endothelial toll-like receptor 4 [TLR4]/NADPH oxidase 4 [NOX4] signaling and neutrophil extracellular traps [NETs] cause capillary disruption and graft dysfunction — *Proceedings of the National Academy of Sciences* 2022); viral infection (severe acute respiratory syndrome coronavirus 2 [SARS-CoV-2]-induced necroptosis in lung epithelial cells contributing to cytokine storm and multi-organ failure; influenza A nonstructural protein 1 (NS1) promoting MLKL oligomerization → NLRP3 activation → interleukin-1 beta [IL-1β] release, supporting antiviral defense and virus clearance — *Nature Immunology* 2025, DOI 10.1038/s41590-025-02298-1); cancer (double-edged: RIPK3-mediated necroptosis of leukemia-initiating cells suppresses acute myeloid leukemia [AML], whereas chronic lytic death promotes inflammation-associated cancers such as hepatocellular carcinoma [HCC] and colorectal carcinoma [CRC], and necroptosis-deficient tumors are poorly immunogenic — *Journal of Hematology & Oncology* 2025; *Annual Review of Pathology* 2017).
- The general framing of the in vivo literature: necroptosis acts as a backup route when apoptosis fails, and uncontrolled DAMP release converts host defense into chronic inflammation (*Experimental and Molecular Medicine* 2020; *Nature Immunology* 2025).

### Translational proposals

The paper proposes combining TLR3 agonists with IAP antagonists (SMAC mimetics). It also flags cFLIP as a critical regulator and a potential target.

**Physiological consequences.**

- The dual-trigger rationale: TLR3 agonists kill transformed cells through the platform, and the Smac-mimetic + poly(I:C) paradigm defines spontaneous ripoptosome assembly in transformed cells (Tsuchiya 2015; [[Smac mimetics]]; "TLR3 ligands in combination with Smac mimetic could provide a novel therapeutic concept" — PMCID PMC7545934).
- Clinical status of the modality: Smac mimetics entered early clinical trials (birinapant and others); they trigger tumor-cell death directly or prime cells to death-ligand and chemotherapy agents; in cells with high RIPK3 the Smac-mimetic route produces necroptosis, and RIPK3 inhibition blocks it while routing the platform toward apoptosis ([[Smac mimetics]]; PMCID PMC4247261).
- cFLIP as the second target: cFLIP overexpression confers TNF-related apoptosis-inducing ligand (TRAIL)/Fas ligand and chemotherapy resistance across cancers, so lowering the cFLIP dial re-sensitizes tumors to death ligands ([[c-FLIP]]; [[Caspase-8-c-FLIP Rheostat]]).
- TLR3-directed therapy in TLR3-expressing solid tumors: cholangiocarcinoma (poly(I:C) induces death only when cIAPs are removed; Smac mimetic also attenuated poly(I:C)-induced invasion, and high TLR3 or low RIPK1 status was associated with more invasiveness — PMCID PMC7545934); malignant mesothelioma (cisplatin downregulates cFLIP, which restores caspase-8-mediated TLR3 apoptosis; patient-derived cells were sensitive to poly(I:C) alone — 2020); head and neck, melanoma, renal and other tumors expressing TLR3.
- Systemic cost of the modality: loss of cIAP1/2 in immune cells activates the non-canonical NF-κB pathway, promoting B-cell survival and providing co-stimulatory signals to dendritic cells and T cells, and high-dose Smac-mimetic treatment carries systemic toxicity and cytokine-release-syndrome risk (PMCID PMC7226512).

### Points left open by the paper

Stoichiometry of Caspase-8/cFLIPL/cFLIPS within the complex; the specific ubiquitin chains cIAPs attach to RIPK1 and whether the ubiquitination occurs on the same "modified" pool that assembles the complex; whether spontaneous, TLR3-independent assembly occurs in primary cells (the data argue it is cell-type specific); the RIPK3–MLKL necrosome downstream of this platform as a drug target distinct from RIPK1 kinase inhibition; and whether the TRIF-recruited necrosome reported in current reviews corresponds to this same 2 MDa platform.

**Physiological consequences.**

- Each open question carries a physiological corollary: platform stoichiometry determines the per-cell probability of each death quality; the ubiquitin chain type determines whether the modified RIPK1 pool is the assembly-competent one; the cell-type question determines whether spontaneous assembly can occur in normal tissue, which governs the safety margin of IAP antagonism in non-transformed cells; and the RIPK3–MLKL necrosome is the execution arm, targetable separately from RIPK1 (GSK872 and HS-1371 for RIPK3, necrosulfonamide for MLKL) and independently of the platform.
- Because the modality changes death quality rather than only its probability, these unknowns translate into uncertainty about inflammatory burden per death, which is the quantity that determines whether the platform is a therapeutic asset or a source of collateral tissue injury.

## Sources

- **Primary:** Feoktistova et al., *Molecular Cell* 2011, DOI (digital object identifier) 10.1016/j.molcel.2011.06.011 (cited by DOI; the PubMed identifier is not recorded in the vault).
- **Vault notes:** [[Ripoptosome]], [[Necroptosis]], [[MLKL]], [[necrosome]], [[Caspase-8-c-FLIP Rheostat]], [[Smac mimetics]], [[c-FLIP]].
- **Later review/systematic evidence:** Dhuriya & Sharma 2018, *Journal of Neuroinflammation* (PMCID PMC3004764); Necroptosis in the Pathophysiology of Disease (*Experimental and Molecular Medicine* 2020); Necroptosis: Mechanisms and Relevance to Disease (*Annual Review of Pathology* 2017, DOI 10.1146/annurev-pathol-052016-100247); Necroptotic cell death consequences and disease relevance (*Nature Immunology* 2025, DOI 10.1038/s41590-025-02298-1); The double-edged functions of necroptosis (*Cell Death & Disease* 2023); Dynamics of necroptosis in kidney ischemia-reperfusion injury (*Frontiers in Immunology* 2023); Necroptosis triggers spatially restricted neutrophil-mediated vascular damage during lung ischemia reperfusion injury (*Proceedings of the National Academy of Sciences* 2022); MLKL polymerization-induced lysosomal membrane permeabilization promotes necroptosis (*Cell Death & Differentiation* 2023, DOI 10.1038/s41418-023-01237-7); Necroptosis in cancer (*Journal of Hematology & Oncology* 2025); TLR3 as a Context-Dependent Molecular Switch in Epithelial Cancers (2026); Release of c-FLIP brake selectively sensitizes human cancer cells to TLR3-mediated apoptosis (PMCID PMC6115461); RIPK1 as key mediator in TLR3 ligand and Smac mimetic-induced cell death in cholangiocarcinoma (PMCID PMC7545934); Cisplatin unleashes TLR3-mediated apoptosis through c-FLIP downregulation in malignant mesothelioma (2020); Small-Molecule SMAC Mimetics as New Cancer Therapeutics (PMCID PMC4247261); Potency and Selectivity of SMAC/DIABLO Mimetics in Solid Tumor Therapy (PMCID PMC7226512); Fueling the fire: inflammatory forms of cell death and cancer immunotherapy (PMCID PMC7858229); SMAC mimetic resistance (*Apoptosis* 2017).
