---
title: Graphify Trace — Adrenochrome → Autophagy/Mitophagy & Foam Cells
description: Graphify knowledge-graph traces linking adrenochrome (beneficial/hormetic framing) to autophagy/mitophagy via the Mitohormetic Redox-Relay, plus a foam-cell trace bridging oxidative stress, glycation, atherosclerosis, and TFEB-controlled lipophagy.
created: 2026-07-17
updated: 2026-07-17
tags:
  - task-output
  - graphify
  - adrenochrome
  - autophagy
  - mitophagy
  - foam-cells
  - atherosclerosis
  - mitohormesis
source: graphify-out/graph.json
---

# Graphify Trace — Adrenochrome → Autophagy/Mitophagy & Foam Cells

> [!NOTE]
> **Method**
> Traces generated via graphify BFS/shortest-path traversal of `graphify-out/graph.json`, cross-referenced against source wiki notes. Edge provenance (EXTRACTED / INFERRED) noted where relevant per the honesty rules.

---

## Trace 1: Adrenochrome → Autophagy / Mitophagy (beneficial / hormetic framing)

Under the **"assume beneficial"** framing, the relevant path is the **[[Mitohormetic Redox-Relay]] (MRR)** — adrenochrome as a *sub-cytotoxic hormetic trigger*, not a toxin.

### The path (5 hops)

```
[[Adrenochrome]] / [[Carbazochrome]]  (sub-µM, 50–500 nM)
        │ one-electron reduction at [[Complex I]]/[[Complex III]] → semiquinone
        ▼
[[Redox Cycling]] → [[Superoxide anion]]  (localized, matrix-confined)
        │ SOD2 dismutation
        ▼
[[Hydrogen Peroxide|H₂O₂]] pulse → [[Keap1]] cysteine modification
        │
        ▼
[[NRF2]] + [[ATF4]] + [[PGC1-α]]  (adaptive transcription)
        │ Quality-control arm: TFEB / FOXO
        ▼
[[Autophagy]] genes + [[Mitophagy]] ([[Urolithin A]] → [[PINK1]]/[[Parkin]])
```

### Why "beneficial" is the correct qualifier

The wiki holds **two opposing readings** of the same chemistry; the qualifier picks the branch:

| | Toxic branch (default) | Beneficial branch (MRR) |
|---|---|---|
| **Dose** | sustained, µM+ | pulsed, 50–500 nM |
| **ROS** | runaway, cytosolic | localized, matrix-confined |
| **Effect on mitophagy** | *exhausts* mitophagic capacity → damaged mito accumulate (`Mitophagy.md:39`) | *induces* selective mitophagy → clears damaged mito (`Mitohormetic Redox-Relay.md:25`) |
| **Outcome** | mitochondrial dysfunction, [[Inflammaging]] | hormetic adaptation, [[Healthspan]] |

### The mechanistic bridge (from `Mitohormetic Redox-Relay.md`)

1. **Trigger** — [[Carbazochrome]] (stabilized adrenochrome) redox-cycles at [[Complex I]]/[[Complex III]], emitting a *spatially constrained* superoxide pulse (`:34`).
2. **Relay** — [[SOD2]] → [[Hydrogen Peroxide|H₂O₂]] → exits via [[Aquaporins]] → modifies [[Keap1]], releasing [[NRF2]]; matrix [[ROS]] also drives the [[Integrated Stress Response]] (OMA1→OPA1→DELE1→HRI→ATF4) (`:38–42`).
3. **Convergence on autophagy** — The Step-4 transcription table (`:61`) is the literal source→target edge:
   > **Quality control | [[TFEB]], [[FOXO]] | [[Autophagy]] genes, [[Ubiquitin-Proteasome System]] | [[Mitophagy]], [[Proteostasis]]**
4. **Cleanup** — [[Urolithin A]] induces selective mitophagy via the [[PINK1]]/[[Parkin]] axis, closing the loop by removing the mitochondria the adrenochrome pulse stressed (`:25`, `:96`).

### Graph-traversal note

- `graphify path "Adrenochrome" "Autophagy"` → `Adrenochrome ← Oxidative Stress ← Foam Cells → Autophagy` (a *toxic* atherosclerosis route, distinct from the MRR branch).
- `graphify path "Adrenochrome" "Mitophagy"` → **no path** (undirected matcher hit the ambiguous `Adrenochrome` node; the beneficial bridge co-occurs only inside `Mitohormetic Redox-Relay.md`, which the fuzzy path-matcher missed).
- The **[[TFEB]]/[[FOXO]] → Autophagy/Mitophagy** row is the honest bridge connecting the [[Oxidative Stress]] community (9) to the [[Mitophagy]] community (56).

---

## Trace 2: Foam Cells

**[[Foam Cells]]** is a bridge node in the adrenochrome topic (`community 42`) linking the **oxidative-stress/glycation cluster** (community 9/80) to the **atherosclerosis/lipid cluster** (community 27) and the **autophagy/lysosomal cluster** (community 8/25).

### What it is

Lipid-laden [[Macrophages]] — the hallmark lesion of early [[Atherosclerosis]]. [[Monocytes]] enter the arterial intima, become macrophages, and engulf modified [[Low-Density Lipoprotein|LDL]] via scavenger receptors (SR-A, [[CD36]]) that — unlike the classical LDL receptor — are *not* switched off by cholesterol load. Result: unchecked cholesteryl-ester buildup → "foamy" morphology (`Foam Cells.md:15`).

### The graph paths (three converging routes)

```
                    ┌── [[Methylglyoxal]] → [[Advanced Glycation End Products]] (AGEs on ApoB-100)
                    │        │ (glycation branch, community 42/80)
[[Low-Density      ─┤        ▼
  Lipoprotein]]     │   glycated/[[Oxidized LDL|oxidized LDL]] → scavenger receptor ligand
                    │        │
                    └── [[Oxidative Stress]] ────┐ (redox branch, community 9)
                                                  ▼
                                          [[FOAM CELLS]]  (community 42)
                                                  │
                    ┌─────────────────────────────┼─────────────────────────────┐
                    ▼                              ▼                              ▼
          [[Atherosclerosis]]            impaired [[Autophagy]]           necrosis →
          (plaque, community 27)         (defective efflux/clearance)     necrotic core +
                                          │ regulated by [[TFEB]]          efferocytosis failure
                                          ▼                                → [[Inflammation]]
                                    [[Lysosome]] / [[Lipophagy]]
                                    (community 8)
```

### The three mechanistic branches

1. **Glycation branch** (community 42/80) — under [[Hyperglycemia|hyperglycemic]]/pro-oxidative conditions, [[Methylglyoxal]] and [[Glucose]] form [[Advanced Glycation End Products|AGEs]] on [[Apolipoprotein B|ApoB-100]], oxidizing LDL and making it a high-affinity scavenger-receptor ligand — the metabolic-dysfunction → vascular-disease link (`:17`).
2. **Redox + clearance branch** (community 9 → 8) — foam-cell formation is amplified by [[Oxidative Stress]] **and impaired [[Autophagy]]** (inefficient [[Cholesterol Efflux|cholesterol efflux]], defective autophagic clearance). This is the [[TFEB]]-controlled lysosomal/[[Lipophagy|lipophagy]] arm — the same [[TFEB]]/[[FOXO]] quality-control hub as the adrenochrome→mitophagy trace (`:20`).
3. **Terminal/inflammatory branch** (community 27) — foam cells [[Cell necrosis|necrose]], seeding the plaque necrotic core; efferocytosis failure perpetuates [[Inflammation]] (`:22`).

### Cross-trace connection

Foam Cells sits at the intersection of **three communities**:
- **[[Oxidative Stress]]** (9) — shared upstream with adrenochrome's redox cycling
- **[[TFEB]]/[[Autophagy]]** (8) — the *same* lysosomal quality-control hub as Trace 1's mitophagy branch
- **[[Atherosclerosis]]/lipid** (27) — its own disease community

Honesty caveat: edges here are `EXTRACTED --references-->` from a single note plus `INFERRED` conceptual links to the atherosclerosis cluster. The [[TFEB]] connection is the strongest cross-community bridge, sourced from two documents (Oxidative Stress + TFEB regulatory mechanism).

---

## Key convergence: TFEB as a three-community god node

Both traces converge on **[[TFEB]]**, the master transcriptional regulator of autophagy/[[Lysosomal Biogenesis]] ([[CLEAR Element|CLEAR network]]). It bridges:
- Foam-cell **lipophagy** (cholesterol efflux/clearance)
- Adrenochrome-driven **mitophagy** (MRR quality-control arm)
- **[[Parkinson's Disease]]** ([[PINK1]]/[[Parkin]] mitophagy)

This makes TFEB the single most-connected bridge across the oxidative-stress, autophagy, atherosclerosis, and neurodegeneration communities in the current graph.

## Source notes referenced

- [[Adrenochrome]] — `notes/adrenochrome/Adrenochrome.md`
- [[_document_ - Mitohormetic Redox-Relay]] — `notes/adrenochrome/Mitohormetic Redox-Relay.md`
- [[Mitophagy]] — `notes/_link/Mitophagy.md`
- [[Foam Cells]] — `notes/adrenochrome/Foam Cells.md`
