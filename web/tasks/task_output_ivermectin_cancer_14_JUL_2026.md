---
title: Ivermectin as a Preventative / Cancer Measure — Graphified Findings
description: Traced findings on ivermectin's anticancer repositioning, drawn from the wiki knowledge graph (graphify query + node reads).
created: 2026-07-15
updated: 2026-07-15
tags:
  - cancer
  - drug-repositioning
  - ivermectin
  - graphify-query
source: graphify query on graphify-out/graph.json (existing graph)
author: []
---

# Ivermectin as a Preventative / Cancer Measure

> Generated via `/graphify` on the existing knowledge graph (`graphify-out/graph.json`).
> Date of analysis: 15_July_2026 12:35 PM PDT.

## Headline Finding

The wiki corpus frames **ivermectin as a *repurposed anticancer therapeutic agent*, not as a primary preventive** (chemoprevention in cancer-free individuals). Every note describes it in treatment/adjuvant contexts — inhibiting proliferation, metastasis, angiogenesis, and reversing multidrug resistance. **No note in the vault addresses primary prevention** (reducing cancer incidence in healthy people).

**Honest gap:** The evidence is entirely preclinical — tumor-cell and xenograft models. The corpus itself states clinical validation "remains a research priority" (Lung Cancer.md). The claim that ivermectin *prevents* cancer is inference beyond the corpus.

---

## Anticancer Evidence in the Corpus

**Central node:** `[[Ivermectin]]` (community 10) — reviewed as a "potential anticancer drug derived from an antiparasitic drug."

Mechanisms of action (Ivermectin.md:20-26):
- **Pathway regulation:** Wnt/β-catenin, Akt/mTOR, MAPK.
- **Molecular targets:** primarily a `[[PAK1]]` inhibitor; also inhibits `[[YAP1]]`, `[[HSP27]]`, `[[KPNB1]]`.
- **Programmed cell death:** induces `[[Apoptosis]]`, `[[Autophagy]]`, `[[Pyroptosis]]`.
- **Tumor microenvironment:** mediates immunogenic cell death (e.g., `[[HMGB1]]` release).
- **Cancer stem cells:** inhibits `[[Cancer Stem Cells]]` via the `[[PAK1]]`–`[[STAT3]]` axis.
- **Multidrug resistance:** reverses `[[Multidrug Resistance]]` by inhibiting `[[P-gp]]`.

Synergy: `[[Cisplatin]]`, `[[docetaxel]]`, `[[paclitaxel]]`, `[[Daunorubicin]]`, `[[cytarabine]]`, `[[erlotinib]]`, `[[Dasatinib]]`, `[[dabrafenib]]` (Ivermectin.md:29).

**Preclinical efficacy cited across tumor types:**
- `[[Lung Cancer]]` — synergy with erlotinib; EGFR targeting (Lung Cancer.md:22-30).
- `[[glioblastoma]]` — angiogenesis/growth/survival inhibition via mitochondrial dysfunction + oxidative stress.
- `[[Prostate Cancer]]` — reverses enzalutamide/docetaxel resistance; inhibits `[[HSP27]]` phosphorylation.
- `[[Hepatocellular Carcinoma]]` — YAP1/Hippo-pathway targeting.
- `[[Colon Cancer]]`, `[[Cholangiocarcinoma]]`, `[[Leukemia]]`, `[[Renal Cell Carcinoma]]`.
- Grouped under `[[Drug Repositioning]]` (community 33) with `[[Fenbendazole]]` and `[[Mebendazole]]`.

---

## Traced Path: Antiparasitic Origin → Repositioned Anticancer Mechanisms

**Origin branch (community 10 — antiparasitic):**
1. `[[Ivermectin]]` is a semi-synthetic dihydro derivative of `[[Avermectin]]` (Avermectin.md:13) — a 16-membered macrocyclic lactone from *Streptomyces avermectinius*, discovered at the `[[Kitasato Institute]]` by `[[Satoshi Ōmura]]` and `[[William C. Campbell]]` (2015 Nobel Prize).
2. Antiparasitic mechanism: allosteric agonism of `[[Glutamate-gated Cl- channels]]` (GluCls) — invertebrate-only channels; Cl⁻ influx hyperpolarizes and paralyzes the parasite (Glutamate-gated Cl- channels.md:17).
3. **Pivot point:** humans *lack* GluCls. Vertebrate GABA_A/glycine receptors need ~100× higher ivermectin concentration; therapeutic plasma levels spare the host (Glutamate-gated Cl- channels.md:21). This safety margin enables repurposing.

**Repositioning branch (crosses into oncogenic communities):**
The same molecule at therapeutic concentrations engages *mammalian* targets instead of GluCls (Glutamate-gated Cl- channels.md:25):
- **`[[PAK1]]`** — ivermectin's primary host kinase target; drives proliferation and the `[[PAK1]]`–`[[STAT3]]` axis fueling `[[Cancer Stem Cells]]` (Ivermectin.md:22,25).
- **`[[YAP1]]`** — Hippo-effector oncogene inhibited in gastric and liver cancers (Ivermectin.md:45); also in `[[Hepatocellular Carcinoma]]`, `[[Lung Cancer]]`.
- **`[[Akt]]`/`[[mTOR]]`** — inhibited to induce `[[Autophagy]]` and `[[Apoptosis]]` (Ivermectin.md:21,44), converging on the PI3K-Akt/mTOR signaling community (community 42).

**The bridge node:** `[[Glutamate-gated Cl- channels]]` explicitly states the mammalian targets (Glutamate-gated Cl- channels.md:25). The connection is *pharmacological*, not mechanistic continuity — one safe macrocyclic scaffold with a vertebrate-spare target profile *and* fortuitous affinity for conserved mammalian survival kinases. Decades of mass-drug-administration safety data (OCP, APOC, Mectizan) underwrite repositioning trials.

---

## Graph Traversal Summary

- Query 1 ("ivermectin as preventative cancer measure"): BFS depth=2, start nodes `[Ivermectin, Cancer]`, 148 nodes found.
- Query 2 (traced path): BFS depth=2, start nodes `[YAP1, PAK1, Ivermectin, Akt, mTOR]`, 185 nodes found.
- Relevant communities touched: 10 (ivermectin/avermectin antiparasitic), 33 (drug repositioning), 42 (PI3K-Akt signaling), 18 (lung cancer/glioblastoma cluster), 6 (HCC/tumorigenesis), 85 (Wnt/colon cancer).

## Key Nodes

| Node | Community | Role |
|------|-----------|------|
| `[[Ivermectin]]` | 10 | Central repurposed agent |
| `[[Avermectin]]` | 10 | Parent macrocyclic lactone |
| `[[Glutamate-gated Cl- channels]]` | 10 | Antiparasitic target; bridge to mammalian targets |
| `[[PAK1]]` | 15 | Primary host kinase target |
| `[[YAP1]]` | — | Hippo-effector oncogene target |
| `[[Akt]]`/`[[mTOR]]` | 42 | Survival pathway inhibited |
| `[[Drug Repositioning]]` | 33 | Strategic cluster with Fenbendazole/Mebendazole |

## Open Questions / Caveats

- No primary-prevention evidence in corpus; all preclinical.
- Clinical validation explicitly flagged as a research priority.
- Safety margin established for antiparasitic dosing; anticancer dosing/schedules not established in corpus.

## Source Notes Consulted

- notes/cancer/Ivermectin.md
- notes/cancer/Avermectin.md
- notes/cancer/Glutamate-gated Cl- channels.md
- notes/cancer/Lung Cancer.md
- notes/cancer/Prostate Cancer.md
- notes/cancer/Hepatocellular Carcinoma.md
- notes/cancer/Fenbendazole.md, notes/cancer/Mebendazole.md (Drug Repositioning cluster)
