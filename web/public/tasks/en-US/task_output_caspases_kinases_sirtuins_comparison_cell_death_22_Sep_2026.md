---
title: "Caspases vs Kinases vs Sirtuins — Enzyme-Superfamily Comparison"
description: Compare-and-contrast of the three major post-translational enzyme superfamilies (caspases, kinases, sirtuins) by chemistry, reversibility, cofactor, and biological role; their crosstalk nodes; and how their interactions regulate wanted vs unwanted cell death.
created: 2026-09-22
updated: 2026-09-23
tags: [task-output, caspase, kinase, sirtuin, enzyme, post-translational-modification, apoptosis, pyroptosis, signaling, nad-plus, cell-death]
---

# Caspases vs Kinases vs Sirtuins — Compare and Contrast

Generated: 22_Sep_2026 12:22 PM PDT. Cell-death regulation section added: 23_Sep_2026 09:58 AM PDT.
Sources: wiki vault notes `cell-death/Caspases.md`, `_link/Kinase.md`, `sirtuins/Sirtuins.md`, `_link/Sirtuin-Caspase Crosstalk.md`, plus `Akt.md`, `XIAP.md`, `Src.md`, `PAK2.md`, `Caspase-2.md`, `Caspase-3.md`, `PKCδ.md`, `NLRP3 Inflammasome.md`, `p53.md`, `FOXO Transcription Factors.md`, `Apoptosis.md`, `Pyroptosis.md`. Graph cross-checked via `graphify query` and `graphify path`. Synthesis of vault content; not a fresh literature search.

All three are enzyme superfamilies that modify existing proteins post-translationally to alter their activity, localization, or stability. They differ in reaction chemistry, reversibility of the modification, cofactor requirements, and the physiological processes they control.

## Comparison table

| | **Caspases** | **Kinases** | **Sirtuins** |
|---|---|---|---|
| **Chemistry** | Cysteine proteases — cleave peptide bonds C-terminal to **Asp** residues | Transfer the **γ-phosphate** of ATP onto Ser/Thr/Tyr (or lipid/sugar) hydroxyls | **NAD⁺-dependent** deacetylases/deacylases (some members also ADP-ribosylate) |
| **Effect on target** | Proteolysis — cleaves and typically inactivates or degrades the substrate | Phosphorylation — alters activity, binding, or localization; reversed by phosphatases | Removes acyl marks (acetyl, succinyl, malonyl, …); reversed by acyltransferases, NAD⁺-limited |
| **Cofactor / fuel** | None (regulated as zymogens assembled on activation platforms) | **ATP** | **NAD⁺** (reaction stoichiometrically consumes NAD⁺, producing nicotinamide + 2′-O-acyl-ADP-ribose) |
| **Activation logic** | Synthesized as inactive zymogens; initiator caspases dimerize on proximity platforms (PIDDosome, DISC), then proteolytically activate executioner caspases | Regulated by phosphorylation cascades, subcellular localization, and scaffold proteins | Gated by NAD⁺/nicotinamide levels, post-translational modifications, localization; some allosterically activated (STACs, [[Resveratrol]]) |
| **Scale** | ~12–17 members (mammals) | **Largest enzyme superfamily** (~500+ protein kinases) | 7 in mammals (SIRT1–7) |
| **Primary role** | [[Apoptosis]], [[Pyroptosis]], [[Inflammation]] — execute dismantling of the cell | Signal transduction — proliferation, metabolism, cell cycle, cell death | Metabolic/epigenetic sensing — stress resistance, autophagy, inflammation, longevity |
| **Reversibility of mark** | Irreversible — proteolysis cannot be undone | Reversible (kinase ↔ phosphatase) | Reversible in principle (sirtuin ↔ acetyltransferase); nicotinamide feedback inhibits sirtuins |

## Key contrasts

- **Irreversible vs reversible:** caspase cleavage is a terminal event that commits the cell to dismantling; phosphorylation and deacylation are reversible modifications that allow continuous adjustment of protein function in response to signals.
- **Cofactor as input:** kinases consume ATP, which is abundant and primarily reflects energy charge, indirectly tuning kinase regulators; sirtuins consume NAD⁺, whose cellular concentration tracks the NAD⁺/NADH balance and therefore directly couples sirtuin activity to metabolic state — a basis for their responsiveness to caloric restriction and NAD⁺ precursors ([[NMN]], NR) in the context of aging; caspases are activated by damage-associated or death-receptor-driven assembly of activation platforms rather than by a small-molecule cofactor.
- **Physiological bias:** kinase outputs are context-dependent (e.g. [[Akt]] phosphorylation can be pro-survival or, in other contexts, associated with death signaling); sirtuin activity generally favors stress resistance and survival (SIRT1 deacetylates p53 and FOXO4, reducing pro-apoptotic transcription); caspase activity generally drives cell death — though inflammatory caspases also process IL-1β/IL-18 and participate in non-lethal inflammatory remodeling.

## Intersections (where the three meet)

- **Kinases modify caspases:** Src phosphorylates and inhibits [[Caspase-8]]; Akt phosphorylates [[Caspase-9]] at Ser196 and suppresses its activity; PAK2 phosphorylates and inhibits [[Caspase-7]] (`Caspases.md`, Post-Translational Regulation).
- **Sirtuins suppress caspase activation:** SIRT1 deacetylates p53 and FOXO4, lowering Bax expression and downstream caspase-3 activation; SIRT5 deacetylates [[Cytochrome c]], reducing apoptosome formation and caspase-3 activation; SIRT1 and SIRT3 suppress NLRP3 inflammasome assembly and Caspase-1 maturation (`Sirtuin-Caspase Crosstalk.md`).
- **Caspases cleave sirtuins:** Caspase-3 and Caspase-9 cleave SIRT1 at DEPDVP (residues 704–709), causing nuclear-to-cytoplasmic relocalization and loss of its transcriptional protective functions — reinforcing the death program once it has begun.
- **Kinases and sirtuins share structural features:** the ATP/ADP-ribose–binding pockets of kinases and sirtuins are sufficiently similar that some kinase inhibitors (Ro31-8220, GW5074) also inhibit SIRT1/SIRT2 — a relevant off-target consideration in pharmacology (`Kinase.md`).

## Regulating cell death — wanted and unwanted

The three families form a layered control system: kinases set the acute signaling threshold, sirtuins set a metabolic (NAD⁺) threshold, and caspases convert either into irreversible commitment — with direct edges in both directions (`graphify path` confirms `Akt —phosphorylates→ Caspase-9` and `SIRT1 —is_cleaved_by→ Caspase-3` are single-hop).

### Kinases → caspases — the instantaneous threshold

Most kinase inputs are anti-death brakes on caspases:

- **Akt** phosphorylates [[Caspase-9]] (Ser196) and stabilizes [[XIAP]] (Ser87), raising the activation threshold (`Akt.md`, `XIAP.md`).
- **Src** phosphorylates [[Caspase-8]] (Tyr380), blocking its maturation and repurposing it as a pro-migratory/NF-κB scaffold (`Src.md`, `Caspase-8.md`).
- **PAK2** inhibits [[Caspase-7]] (Ser30/Ser239) — a chemoresistance mechanism in breast cancer (`PAK2.md`).
- **CDK1/CYCLIN B1** silences [[Caspase-2]] during mitosis; PKA, PKCζ, and p38 add further inhibitory sites.

A minority are pro-death: **c-ABL** promotes Caspase-9 autocleavage after DNA damage; **PKCδ** enhances Caspase-3; JNK/p38 phosphorylate Bax (Thr167) to promote mitochondrial outer-membrane permeabilization — the same site ERK2 modifies for survival, making Bax a coincidence detector (`Apoptosis.md`).

Counter-regulation comes from phosphatases (SHP1, PP2A, PP1α), so kinase control of caspases is genuinely reversible.

### Sirtuins → caspases — the metabolic threshold

Sirtuins mostly hold caspases and the inflammasome in check, gated by NAD⁺:

- **SIRT1** deacetylates p53 (↓Bax, ↓caspase-3), FOXO4, and 14-3-3ζ (keeping Caspase-2 sequestered); it also suppresses NLRP3/Caspase-1 via XBP1s and NRF2/PGC-1α (`Sirtuin-Caspase Crosstalk.md`, `Caspase-2.md`).
- **SIRT5** deacetylates [[Cytochrome c]], reducing apoptosome-driven Caspase-9/-3 activation; **SIRT3** delays cytochrome c release via CypD/Bcl-2 and lowers mtROS-driven NLRP3 assembly.
- Context exceptions exist: SIRT6 is pro-apoptotic in tumors via p53/p73; cytoplasmic SIRT1 is pro-death; SIRT3 can enhance Caspase-9 cleavage in HCC.

Because activity tracks NAD⁺, this brake weakens with age-related NAD⁺ decline — one reason excessive death increases with aging (`SIRT1.md`, `Sirtuins.md`).

### Caspases → the other two — converting reversible signals into commitment

- **Caspase-3/-9 cleave SIRT1** at DEPDVP (704–709) → nuclear export, TRIM28-mediated degradation, and gain of pro-apoptotic function — the brake is removed and repurposed (`Sirtuin-Caspase Crosstalk.md`).
- **Caspase-3 cleaves PKCδ** into a constitutively active fragment — feed-forward amplification (`PKCδ.md`).
- **Caspase-1 cleaves Parkin**, blocking mitophagy → ↑mtROS → more NLRP3 activation (feed-forward pyroptotic loop, opposed by SIRT3).
- Caspases also restrain themselves: Caspase-3/-7 cleave GSDMD to shut off pyroptosis after initiation.

### Shared nodes where the three meet

| Node | Who wins | Effect |
|---|---|---|
| **p53** | SIRT1 deacetylates (off); p53 drives Bax/PUMA → caspases | survival vs apoptosis |
| **FOXO** | Akt phosphorylates → nuclear exclusion; SIRT1 deacetylates → shifts output to stress-resistance/autophagy; JNK/AMPK → nuclear FOXO → Bim/Puma | death vs survival gene programs |
| **XIAP** | Akt stabilizes vs TBK1/IKKε destabilizes | sets caspase-3/7/9 threshold |
| **Bax / cytochrome c** | JNK/p38 vs ERK2 (Bax Thr167); SIRT1/Ku70 sequesters Bax; SIRT5 modifies cytochrome c | MOMP gate |
| **NLRP3 → Caspase-1 → GSDMD** | SIRT1/2/3 throttle; caspase-1 feed-forward via Parkin | pyroptosis amplitude |

### Wanted death

Developmental pruning (Caspase-3 KO causes brain hyperplasia and perinatal lethality, `Caspase-3.md`), immune deletion of infected/transformed lymphocytes (CASP8/CASP10 deficiency → autoimmunity/immunodeficiency), and proportionate pyroptosis for IL-1β/IL-18 release. Here the caspase arm must fire on cue, while Akt/Src/PAK2 brakes and sirtuin throttles keep it proportional; Caspase-3/-7 cleaving GSDMD prevents the inflammatory branch from overshooting.

### Unwanted death — three failure modes

- **Too much caspase activity:** neurodegeneration (excessive Caspase-3 in AD/PD/stroke), ischemic injury, sterile NLRP3 inflammation when the SIRT3/mtROS brake fails (`Caspase-3.md`, `NLRP3 Inflammasome.md`).
- **Too little sirtuin brake:** NAD⁺ decline with age → unchecked p53 acetylation and inflammasome tone; cardiac SIRT1 is hormetic (moderate overexpression protective, high levels pro-fibrotic/pro-apoptotic — `SIRT1.md`).
- **Too much survival signaling (the mirror image — cancer):** tumors co-opt the anti-death kinases — Akt+XIAP, Src keeping Caspase-8 as a scaffold, PAK2 holding Caspase-7 off, CDK1 silencing Caspase-2 — welding the system shut; SIRT1 inhibition is therapeutic in many tumors precisely because it re-releases caspase-2/-3.

**Summary:** kinases provide fast, reversible, context-dependent tuning of caspase activity (mostly inhibitory); sirtuins provide slower, NAD⁺-coupled restraint on both caspases and the inflammatory caspase-1 axis; once caspases engage, cleavage of SIRT1, PKCδ, Parkin, and GSDMD flips the system from reversible regulation to irreversible (or self-terminating) execution. Wanted death requires the system armed and releasable; unwanted death is either failure to restrain it (neurodegeneration, sterile inflammation) or failure to ever release it (cancer).

## One-line frame

Kinases use ATP to phosphorylate targets reversibly and propagate signaling; sirtuins use NAD⁺ to remove acyl marks reversibly and couple protein regulation to metabolic state; caspases cleave after aspartate residues irreversibly to dismantle cellular components during cell death. Their pathways converge on shared regulators such as p53, FOXO transcription factors, and the mitochondrial apoptosis machinery, and the sirtuin–caspase interaction is bidirectional (sirtuins suppress caspase activation; caspases inactivate SIRT1).

## Vault cross-references

- [[Caspases]] — the executioner protease family.
- [[Kinase]] — the signaling phosphate-transfer superfamily.
- [[Sirtuins]] — the NAD⁺-dependent deacylase family.
- [[Sirtuin-Caspase Crosstalk]] — the bidirectional survival/death regulation between two of the three.
- [[Apoptosis]], [[Pyroptosis]], [[NLRP3 Inflammasome]], [[XIAP]] — death pathways and the kinase-set caspase threshold.
- [[NAD+]], [[p53]], [[Akt]] — shared control nodes.
