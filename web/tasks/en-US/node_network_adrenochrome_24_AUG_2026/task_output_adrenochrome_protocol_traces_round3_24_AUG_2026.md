---
title: "Adrenochrome Protocol Network Traces, Round 3 — Triples Remediation"
description: Round-3 prep for the next graph build — resolves the Round-2 follow-up tickets (NMN/GlyNAC/ratio/NF-kB/Complex I) entirely within src/**/_triples.json.
created: 2026-08-24
tags:
  - task-output
  - adrenochrome
  - knowledge-graph
  - nad-plus
  - network-analysis
---

# Task Output - Adrenochrome Protocol Network Traces, Round 3 (triples remediation) - 24 August 2026

**Scope:** Round-2 follow-up tickets (a)–(e) plus a 6th NF-κB-adjudication item, implemented **only** in `src/**/_triples.json`. No manual graph.json edits. Rebuild is triggered by the Graphify plugin (not reproducible from bash here, since `graphify` is an opencode plugin and `scripts/03_rebuild_from_triples.py` imports a module not installed in this env).

**Verification method:** emulated Graphify's node normalization (`norm(label) = lower, non-alnum → '_'`), rebuilt node/edge sets from all 11 `_triples.json` files, and confirmed each Round-2 defect is resolved. `scripts/03_normalize_triples_schema.py` runs clean (4084 triples, 0 validation problems, 0 dup ids).

## What changed (by ticket)

### (e) NMN wiring / entity unification
- `src/notes/_link/_triples.json`: subject `NMN` → `Nicotinamide Mononucleotide` on the `restores → Intestinal Stem Cell` triple.
- `src/notes/sirtuins/_triples.json`: renamed `NMN (Nicotinamide Mononucleotide)` and `NR (Nicotinamide Riboside)` to canonical labels; rewrote `NAMPT → Nicotinamide to NMN` to `→ Nicotinamide Mononucleotide`; split the composite `CD38 inhibitor 78c → NMN and NR` and `NAD-boosting molecules (NMN, NR) → all seven sirtuins` into two canonical triples each (targets `Nicotinamide Mononucleotide` / `Nicotinamide Riboside` and the `Sirtuins` hub).
- `src/notes/adrenochrome/_triples.json`: added `Nicotinamide Riboside --converts_to(0.95)--> Nicotinamide Mononucleotide` (the missing NMRK bridge joining the NR and NMN fuel subgraphs).
- **Result:** one NMN node, degree **31** (was a degree-1 `nmn` stub). Run-E retraces must now use source `nicotinamide_mononucleotide`.

### (d) GlyNAC triple write-back
- `src/notes/adrenochrome/_triples.json`: new `GlyNAC` node, degree **10**. 10 direct triples (composition `Glycine`/`N-Acetylcysteine`; `increases → Glutathione`; clinical effects vs Oxidative Stress, Mitochondrial Function, Inflammation, Insulin Sensitivity; `buffers → Adrenochrome` (0.7, theoretical), `synergizes_with → Carbazochrome` (0.6, SRAC), `activates → NRF2`) + 5 precursor-chain edges (`Glycine/N-Acetylcysteine/Cysteine → Glutathione`, `N-Acetylcysteine → Cysteine / replenishes Glutathione / reduces Oxidative Stress`).
- **Result:** pulls `Glycine` (was a pendant off `Creatine`) and `N-Acetylcysteine` (was reaching the trigger only by `blocks → Mitohormesis`) into the glutathione/redox-buffer arm of the protocol subgraph.

### (b) SIRT3/SIRT4 ratio linking
- `src/notes/sirtuins/_triples.json`: renamed `SIRT3/SIRT4 ratio` → `SIRT3-SIRT4 Ratio` (matches the entity note `notes/sirtuins/SIRT3-SIRT4 Ratio.md`); normalized `Hormetic window` → `Hormetic Window`. Added `SIRT3 --determines→`, `SIRT4 --determines→`, and `SIRT3-SIRT4 Ratio --correlates_with→ MnSOD (0.85)` to give the biomarker chain mechanistic substrate.
- **Result:** ratio node degree **4**, neighbors `sirt3`, `sirt4`, `mnsod`, `hormetic_window`.

### (a) Carbazochrome → Complex I (adjudicated)
- Literature (PMID 16487923, *Redox cycling of adrenaline and adrenochrome catalysed by mitochondrial Complex I*) shows Complex I reduces adrenochrome, forming a redox cycle that amplifies superoxide. Adrenochrome is therefore an electron acceptor at Complex I.
- Added: `Adrenochrome --redox_cycles_at(0.9)--> Complex I` (sourced to PMID) and `Carbazochrome --redox_cycles_at(0.5)--> Complex I` (inferred by analogy — carbazochrome is a stabilized adrenochrome derivative; direct carbazochrome-specific evidence limited, hence low confidence).
- **Result:** carbazochrome now has its first ETC wiring, so the MB ⇄ carbazochrome amplifier conflict (Round-2 ticket G) becomes testable instead of graph-silent.

### (b-add) NF-κB adjudication (Round-2 direction trap, 7/8 of NR's paths)
- The stored `Adrenochrome --inhibits(0.6, AMBIGUOUS)--> NF-κB` edge is the **senomorphic hypothesis** (SRAC framing), not general biology. Lowered confidence to **0.5** and rewrote context to mark it contested vs the broadly-evidenced direction.
- Added canonical, evidence-backed direction: `Oxidative Stress --activates(0.9)--> NF-κB` (in `oxidative_stress/_triples.json`), driving SASP/inflammation. This gives the fuel-line an evidence-backed route that does not depend solely on the contested edge.

### (c) + entity-resolution: dedup and NF-κB variant merge
- Merged the 6 bare NF-κB variants into canonical `NF-κB`: `NF-kB`, `NF-kappaB`, `NF-kappa B signaling`, `NF-κB p65`, `NF-κB signaling pathway`, `RelA/p65 (NF-κB subunit)` (across `_link`, `sirtuins`, `oxidative_stress`, `senescence`, `tasks`). Canonical `nf_b` node degree rose **48 → 64**.
- Within-file symmetric/duplicate collapse applied to all 11 files (the Round-2 "180 duplicate pairs" at build time; cross-file same-direction repeats are parallel evidence the build already collapses). No exact-duplicate triples or duplicate ids remain.

## Next build expectations

| Defect (Round 2) | Before | After (this remediation) |
| --- | --- | --- |
| NMN wiring | degree-1 `nmn` stub outside giant component | single `nicotinamide_mononucleotide`, degree 31 |
| GlyNAC | no node | `glynac`, degree 10, on glutathione arm |
| SIRT3/SIRT4 ratio | degree 1×2, disconnected from SIRT3/SIRT4/MnSOD | degree 4, linked to all three + Hormetic Window |
| Carbazochrome→ETC | graph-silent | `redox_cycles_at → Complex I` (0.9 adrenochrome / 0.5 carbazochrome) |
| NF-κB direction | single AMBIGUOUS edge carries 7/8 NR paths | contested edge flagged (0.5) + canonical `Oxidative Stress → NF-κB` added |
| NF-κB fragments | 6 bare variants | merged to canonical `nf_b` (degree 64) |

**Recommended re-trace for the next build:** `scripts/04_node_analysis.py --sources nicotinamide_riboside nicotinamide_mononucleotide n_acetylcysteine glynac methylene_blue carbazochrome --targets adrenochrome`, followed by the confidence-weighted PPR re-rank (F) to confirm the top tier (AG #4 / MB #8) stays stable and that NR's multi-path count no longer rides the contested NF-κB edge.

## Residual gaps / recommendations (not changed here)

- **Cross-file parallel edges** (same A→B asserted in two files) remain; the build collapses them, but a build-time dedup flag (Phase 0c) would make this explicit rather than relying on plugin behavior.
- **NF-κB "blocked NF-kappaB" / "VCAM-1 transcription" sub-nodes** were deliberately left as distinct concepts.
- The `Carbazochrome → Complex I` 0.5 edge is analogy-based; replace with a primary source once carbazochrome-specific ETC data is located.
- `GlyNAC --buffers → Adrenochrome` (0.7) and `synergizes_with → Carbazochrome` (0.6) rest on modeling/SRAC rationale, not direct measurement — flag before over-interpreting PPR ranks that traverse them.
