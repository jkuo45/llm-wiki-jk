---
title: Ivermectin, Yamanaka Factors & Aging — graphify exploration
description: Multi-part exploration of ivermectin's intersection with aging biology — Yamanaka factors, mTOR/TFEB autophagy, STAT3/NF-κB inflammaging, SASP/senomorphic overlap, and the central paradox of pro-longevity vs. anti-rejuvenation mechanisms
created: 2026-07-28
updated: 2026-07-28
tags:
  - task-output
  - ivermectin
  - yamanaka-factors
  - aging
  - autophagy
  - graphify
  - stat3
  - nf-kb
  - inflammaging
  - sasp
  - senomorphic
  - mtor
  - longevity
source: graphify query on graphify-out/graph.json
---

# Ivermectin, Yamanaka Factors & Aging — Exploration via Knowledge Graph

**Method:** `graphify query` on `graphify-out/graph.json` (prebuilt graph), then grounding in wiki notes. Expanded via wiki-wide search for STAT3, NF-κB, mTOR, and aging pathway connections.
**Date:** 28 July 2026

---

## Q1 — Does ivermectin promote anti-aging (reverse aging) via Yamanaka factors?

**Verdict: The wiki contains NO direct link between ivermectin and Yamanaka-factor rejuvenation.**

The graph connects `Ivermectin` (community 26, drug repositioning) to the `Yamanaka Factors` cluster (Oct4, Sox2, Klf4, c-Myc; community 36) only through shared bridging nodes:

- **PAK1** — ivermectin is a PAK1 inhibitor (`cancer/PAK1.md:31`)
- **mTOR** — ivermectin inhibits Akt/mTOR (`cancer/Ivermectin.md:21`)
- **Cancer Stem Cells** — ivermectin suppresses CSCs via PAK1–STAT3 (`cancer/Cancer Stem Cells.md:22`)

`Yamanaka Factors.md` and `Partial Reprogramming.md` document OSKM-driven epigenetic rejuvenation, but **no note attributes any rejuvenation effect to ivermectin**. The intersections are mechanistically *opposing* or *orthogonal*, not synergistic.

---

## Q2 — Does ivermectin HELP or HINDER Yamanaka-factor rejuvenation through PAK1?

**Verdict: HINDERS (wiki-grounded).**

Decisive node — `cancer/Cancer Stem Cells.md:22`:
> "**Ivermectin**: Preferentially targets and inhibits CSCs in breast cancer cells. It inhibits the expression of **Nanog, Oct4, and Sox2** and acts through the **PAK1–STAT3** axis."

Path through PAK1 is antagonistic to rejuvenation:

```
Ivermectin ──(PAK1 inhibitor, proteasomal degradation)──▶ PAK1 ──▶ STAT3
                                                              │
                                                              ▼
                                    suppresses expression of Oct4 & Sox2 (2 of 4 OSKM factors)
                                                              │
                                                              ▼
                                    ↓ reprogramming capacity → opposes Partial Reprogramming
```

- Oct4 and Sox2 are core Yamanaka factors (`Yamanaka Factors.md`); half the OSKM quartet needed to drive epigenetic rejuvenation (`Partial Reprogramming.md:19`).
- Ivermectin directly downregulates Oct4/Sox2 → suppresses the transcription factors rejuvenation requires turned ON.
- Therapeutic in cancer (kills CSCs); counterproductive for reprogramming.

**Nuance (general knowledge, not in wiki):**
1. Partial reprogramming often delivers OSKM *virally/doxycycline-inducibly*, not relying on endogenous Oct4/Sox2 expression — so exogenous factors may bypass the suppression.
2. PAK1 is a known co-factor enhancing iPSC generation efficiency; its inhibition likely still reduces reprogramming efficiency even with exogenous factors.

**Convergent (pro-) thread:** ivermectin's separate mTOR inhibition / autophagy induction (via TFEB) sits in the same longevity space as Rapamycin — but orthogonal to Yamanaka rejuvenation.

---

## Q3 — Can ivermectin's mTOR/TFEB effects independently extend healthspan (no reprogramming)?

**Verdict: Mechanistically YES, and independent of reprogramming. But the healthspan benefit is INFERRED, not proven in wiki.**

This is a separate lever — runs through community 14 (TFEB), not the PAK1/Yamanaka clusters.

Path (fully wiki-grounded):

```
Ivermectin
  └─ inhibits PAK1 / Akt / mTOR axis        ← Autophagy.md:113,184,368; Ivermectin.md:21
        └─ mTORC1 inhibition
              └─ Calcineurin dephosphorylates TFEB (Ser142/211)   ← TFEB.md:21-23
                    └─ TFEB nuclear translocation → CLEAR network
                          └─ Lysosomal biogenesis + autophagic flux   ← TFEB.md:34
                                └─ Autophagy induction → healthspan    ← Autophagy.md:47,224
```

- This is the **same axis** Rapamycin, Metformin, Spermidine, and Caloric Restriction use — all documented healthspan/lifespan extenders (`Autophagy.md:47,224,296,408`; `Rapamycin.md`).
- Requires none of the OSKM factors → genuinely independent of Yamanaka reprogramming.

### Honesty boundary (INFERRED vs PROVEN)

| Link | Status in wiki |
|---|---|
| Ivermectin inhibits PAK1/Akt/mTOR → induces autophagy | ✅ Documented, but **only in cancer cells** (breast, glioma) (`Autophagy.md:184,368`; `Ivermectin.md:23`) |
| mTOR inhibition activates TFEB → CLEAR/lysosomal program | ✅ Documented mechanism (`TFEB.md:21-23`) |
| **Ivermectin itself extends healthspan/lifespan** | ⚠️ **AMBIGUOUS / inferred by analogy** — wiki has *no* ivermectin longevity study; rests on its rapamycin-class mTOR→autophagy positioning |

### Double-edged sword
Autophagy suppresses early tumorigenesis but supports established-tumor survival (`Autophagy.md:51,174`). Ivermectin's autophagy induction is cytostatic/cytotoxic in cancer, and the *same* clearance mechanism benefits aging tissues.

---

## Q4 — What additional aging-relevant pathways does ivermectin intersect?

Beyond Yamanaka and mTOR/TFEB, the wiki reveals several additional pathway nodes where ivermectin's anticancer mechanisms overlap with aging biology. None are directly linked to ivermectin in the aging literature within the wiki — but the shared nodes are well-characterized.

### 4a. STAT3 ↔ Inflammaging ↔ SASP

The PAK1-STAT3 axis that ivermectin disrupts in cancer is the same axis driving age-related immune dysfunction:

- **Aging CD4+ T cells** show a STAT3-mediated Th17 inflammatory profile, contributing to inflammaging and senescence (`STAT3.md:20-22`). Metformin reverses this phenotype by enhancing autophagy and mitochondrial bioenergetics.
- **SASP-driven stemness**: IL-6 → JAK/STAT3 is the dominant axis by which senescent cells promote cancer stemness in neighboring epithelium. STAT3 transcriptionally sustains OCT4, NANOG, SOX2 and upregulates CD44. STAT3 creates a feed-forward loop by inducing further IL-6 secretion (`Paracrine Reprogramming.md:59`).
- **SIRT6** inhibits JAK2/STAT3 (`JAK-STAT Signaling.md`), suggesting a potential convergence point with the sirtuin longevity network.

```
Ivermectin ──▶ PAK1 degradation ──▶ STAT3 suppression
                                          │
                    ┌─────────────────────┼─────────────────────┐
                    ▼                     ▼                     ▼
            ↓ IL-6 transcription   ↓ Th17 inflammaging   ↓ OCT4/NANOG/SOX2
            (Kim et al. 2019)     (STAT3.md:20)         (Cancer Stem Cells.md:22)
```

Ivermectin's STAT3 suppression theoretically opposes inflammaging at the same node metformin targets — but via PAK1 rather than AMPK.

### 4b. NF-κB ↔ SASP ↔ Inflammaging

PAK1 facilitates NF-κB nuclear activation (`PAK1.md:26`). Ivermectin's PAK1 degradation dampens NF-κB signaling. In the aging context:

- **NF-κB is the master transcriptional regulator of the SASP** — in senescent cells, persistent DNA damage activates IKK → sustained NF-κB → transcription of IL-6, IL-8, TNF-α, MCP-1 (`NF-κB.md:73`).
- **Inflammaging**: chronic NF-κB activation increases with age across tissues, driven by AGE-RAGE, mitochondrial dysfunction, and DNA damage. Sustained activation promotes insulin resistance, atherosclerosis, sarcopenia, neurodegeneration (`NF-κB.md:77`).
- **Sirtuin counter-regulation**: SIRT1 deacetylates RelA/p65; SIRT6 deacetylates H3K9 at NF-κB targets; SIRT7 inhibits p65 nuclear translocation (`NF-κB.md:66-71`).

Ivermectin's NF-κB suppression via PAK1 loss overlaps with the senomorphic strategy — targeting SASP production without killing senescent cells (`Senomorphic Therapy.md:25`).

### 4c. mTOR ↔ Senescence ↔ Stem Cell Exhaustion

The mTOR connection extends beyond autophagy into the core hallmarks of aging:

- **mTOR promotes SASP translation** — rapamycin inhibits mTOR-dependent SASP amplification, used as a senomorphic brake (`Rapamycin.md:14`, `mTOR.md:17`).
- **Stem cell exhaustion**: mTOR hyperactivation depletes stem cell pools; rapamycin restores self-renewal of hematopoietic stem cells in old mice (`Autophagy.md:57`).
- **Hallmarks of Aging**: deregulated nutrient sensing (mTOR) and disabled macroautophagy are primary/antagonistic hallmarks (`Hallmarks of Aging.md:19`).

Ivermectin's mTOR inhibition via PAK1 degradation recapitulates the rapamycin-class intervention at a different entry point — upstream kinase rather than directly at mTORC1.

### 4d. Autophagy ↔ Epigenetic Aging

Autophagy decline and epigenetic aging form a vicious cycle documented in the wiki:

- Epigenetic changes (DNA methylation of Atg5, LC3B, Beclin1; H4K16 deacetylation; miR-34a upregulation) reduce autophagy with age (`Autophagy.md:126-161`).
- Reduced autophagy fails to clear damaged epigenetic modifiers, accelerating epigenetic drift.
- NAD+ depletion with age suppresses SIRT1 activity, reducing both autophagic capacity and epigenetic maintenance (`Autophagy.md:36-43`, `NAD+.md:35-40`).

Ivermectin's autophagy induction (PAK1 → Akt/mTOR → TFEB) could theoretically interrupt this cycle — but the wiki only documents this effect in cancer cells, not aged tissues.

---

## Consolidated Pathway Map

```
IVERMECTIN
    │
    ├─▶ PAK1 degradation (proteasomal)
    │       ├─▶ STAT3 suppression
    │       │       ├─▶ ↓ IL-6 transcription (anti-CSC, anti-inflammaging)
    │       │       ├─▶ ↓ OCT4/NANOG/SOX2 (anti-stemness, ANTI-rejuvenation)
    │       │       └─▶ ↓ Th17 inflammaging profile (aging CD4+ T cells)
    │       ├─▶ NF-κB suppression
    │       │       ├─▶ ↓ SASP (senomorphic overlap)
    │       │       └─▶ ↓ inflammaging transcription
    │       ├─▶ Akt/mTOR inhibition
    │       │       ├─▶ TFEB activation → autophagy/lysosomal biogenesis
    │       │       ├─▶ ↓ SASP translation (rapamycin-class effect)
    │       │       ├─▶ stem cell self-renewal restoration
    │       │       └─▶ ↓ HIF-1α → ↓ glycolytic reprogramming
    │       └─▶ Wnt/β-catenin disruption
    │               └─▶ relevant to stem cell aging (context-dependent)
    │
    └─▶ YAP1 inhibition (separate from PAK1)
            └─▶ Hippo pathway → growth control (aging role unclear)
```

---

## The Central Paradox

Ivermectin's mechanisms split into two categories with opposing implications for aging:

| Mechanism | Anti-Cancer | Anti-Aging? |
|---|---|---|
| mTOR inhibition → autophagy induction | Cytostatic/cytotoxic in tumors | **Pro-longevity** (same as rapamycin) |
| STAT3/NF-κB suppression → ↓ SASP | Removes CSC-supportive niche | **Anti-inflammaging** (senomorphic overlap) |
| OCT4/SOX2/NANOG suppression | Kills CSCs (therapeutic) | **Anti-rejuvenation** (opposes partial reprogramming) |
| Autophagy induction | Cytostatic in early cancer | **Pro-longevity** (clears damaged proteins/organelles) |

The first two mechanisms align with known longevity interventions. The third — suppression of the Yamanaka-factor triad — directly opposes the epigenetic rejuvenation strategy. Whether the net effect is pro- or anti-aging likely depends on context: dose, tissue, timing, and whether exogenous reprogramming factors are also being delivered.

---

## Summary Table (Expanded)

| Question | Answer | Confidence | Key wiki citation |
|---|---|---|---|
| Ivermectin → Yamanaka rejuvenation? | No direct link; intersections oppose/orthogonal | High (absence) | `Ivermectin.md`, `Yamanaka Factors.md` |
| Help or hinder via PAK1? | **Hinders** (suppresses Oct4/Sox2) | High | `Cancer Stem Cells.md:22` |
| Independent mTOR/TFEB healthspan? | Mechanistically yes; benefit inferred | Medium (inferred) | `TFEB.md:21-23`, `Autophagy.md:184,368`, `Rapamycin.md` |
| STAT3/inflammaging overlap? | Same axis metformin targets; ivermectin enters via PAK1 | Medium (pathway overlap) | `STAT3.md:20-22`, `Paracrine Reprogramming.md:59` |
| NF-κB/SASP senomorphic overlap? | PAK1 loss dampens NF-κB → ↓ SASP transcription | Medium (pathway overlap) | `NF-κB.md:73-77`, `PAK1.md:26` |
| Net effect on aging? | **Paradoxical** — pro-longevity mechanisms + anti-rejuvenation mechanisms | Low (unresolved) | Multiple |

## Suggested follow-up traces (not yet run)
- TFEB ↔ Calcineurin ↔ CLEAR Element nuclear translocation detail
- Whether ivermectin shares Rapamycin's inverted-U hormetic dose via the mTORC1 `Incoherent Bivalent Motif` (`Rapamycin.md:63`)
- Combination of ivermectin's autophagy axis with the Senolytic/Senomorphic strategy (`Fisetin`, `Senolytics.md`)
- Whether ivermectin's NF-κB suppression is sufficient to qualify as senomorphic (vs. senolytic)
- Ivermectin + NAD+ precursor (NMN/NR) combination: autophagy induction + sirtuin activation as convergent longevity stack
- Whether STAT3 suppression by ivermectin reverses the aging CD4+ T cell Th17 phenotype (testable hypothesis from `STAT3.md:20`)
- PAK1's role in iPSC generation efficiency — does PAK1 inhibition reduce reprogramming yield? (`Cancer Stem Cells.md:22`, `Partial Reprogramming.md:19`)
