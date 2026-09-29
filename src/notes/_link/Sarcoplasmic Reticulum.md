---
title: Sarcoplasmic Reticulum
description: Specialized smooth endoplasmic reticulum of muscle fibers that stores and releases cytosolic calcium via the SERCA pumps and ryanodine receptors, making it the core calcium-handling organelle of excitation-contraction coupling.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - biological-molecule
  - pathway
  - calcium-signaling
  - muscle
aliases: [SR, muscle sarcoplasmic reticulum]
---

# Sarcoplasmic Reticulum

The **sarcoplasmic reticulum** (SR) is the specialized smooth endoplasmic reticulum of muscle cells. It is a continuous network of membrane tubules and cisternae that wraps around, but does not touch, the myofibrils, and its defining function is to act as the intracellular calcium store. Cytosolic free calcium in a resting muscle fiber is held around 100 nM; inside the SR lumen it is roughly 1 mM, so a 10,000-fold gradient. Store and release of that gradient is what converts an electrical signal into a mechanical one.

## Architecture

The SR is regionally specialised rather than uniform:

- **Junctional SR (terminal cisternae)** — flattened cisternae lying about 12 nm from the transverse tubule (T-tubule) membrane. This is the release face. The gap between T-tubule and terminal cisterna is the site of the mechanically coupled machinery in skeletal muscle.
- **Longitudinal SR** — narrower tubules running parallel to the myofibril, away from the T-tubule. This is the uptake face and is enriched in the SERCA pumps.
- **Corbular SR** — a terminal, vesicle-like network connected by stalks; long thought to be a reserve or "SR calcium buffer" pool, though its functional importance is still debated.

Two of the defining SR proteins are the SR calcium binding protein **calsequestrin** (up to ~50 Ca²⁺ bound per molecule) and the RyR-anchoring proteins **triadin**, **junctin** and **ASPEN**, which tether calsequestrin to the release channel and act as a luminal calcium sensor that gates the channel.

## Calcium handling

> [!info] The calcium cycle
> 1. **Release.** An action potential depolarises the T-tubule. In skeletal muscle, the L-type calcium channel (Cav1.1, DHPR) is physically coupled to the skeletal ryanodine receptor RyR1 — voltage sensing and calcium sensing are the same protein. In cardiac muscle, Cav1.1 opens a small amount of extracellular calcium which then binds RyR2 to amplify release. Either way, Ca²⁺ exits the lumen through the ryanodine receptor, generating a local "calcium spark".
> 2. **Diffusion.** Free Ca²⁺ binds troponin C on actin, exposing the myosin-binding site and allowing cross-bridge cycling.
> 3. **Recapture.** Cytosolic Ca²⁺ is cleared by SERCA into the SR, by the plasma-membrane sodium/calcium exchanger (NCX), and by mitochondrial uptake. Extrusion out of the cell is slow; essentially all relaxation depends on SERCA.

SERCA isoforms differ by tissue: SERCA1a/2a in fast skeletal muscle, SERCA2a in slow skeletal and cardiac muscle, SERCA2b in smooth muscle and brain, SERCA3 in platelets and some smooth muscle. SERCA2a is the isoform studied in the vault's own notes and in the heart-failure literature.

The cardiac SERCA is held in check by **phospholamban** (PLB), which binds SERCA2a and lowers its apparent calcium affinity. β1-adrenergic signalling activates PKA, which phosphorylates PLB (relieving the inhibition) and phosphorylates RyR2 (increasing its open probability) — one pathway that simultaneously increases contraction force and relaxation rate, and therefore raises heart rate and contractility.

## Pathophysiology

Because the SR buffers cytosolic calcium so tightly, failure of SR function is unusually visible:

- **SR calcium leak** through overactive or leaky ryanodine receptors produces diastolic Ca²⁺ leak, mitochondrial calcium overload, and activation of the mitochondrial permeability transition — a well-studied contributor to arrhythmias and to ischemia/reperfusion injury.
- **SERCA2a deficiency or dysfunction** reduces sarcoplasmic/endoplasmic reticulum Ca²⁺ ATPase activity, as seen in heart failure, and the resulting cytosolic calcium overload is pro-arrhythmic.
- **RyR1 mutations** cause central core disease, multiminicore disease and malignant hyperthermia susceptibility; the latter is triggered by volatile anaesthetics and is treated with the ryanodine receptor blocker dantrolene.
- **Malignant hyperthermia** in general is an SR calcium-release defect — uncontrolled SR calcium efflux causes sustained contraction, rising core temperature, rhabdomyolysis and hyperkalaemia.
- **Postmortem calcium release** from the SR is a contributor to rigor mortis.

> [!warning] Clinical caveat
> Cytosolic calcium overload (the vault's [[Ca2+ overload]] note) converges on mitochondrial injury in almost every cell type. The SR is a muscle-specific structure, but the same SERCA/ryanodine-receptor architecture operates in non-muscle cells as the ER, so "SR leak" biology generalises to ER stress biology and to the many interventions that raise or lower SERCA activity.

## Connections to aging biology

There is no established longevity or senescence-specific role for the SR as such, but the SR is a working demonstration of a principle the vault cares about elsewhere: **stored-state maintenance**. Maintaining a steep ionic gradient across a membrane is continuous ATP-dependent work, and the organelle that does it in muscle is the same organelle that houses the ER stress response. Disuse, denervation, and sarcopenia all reduce SR function; conversely, [[Exercise]]-like interventions improve SERCA function and calcium handling.

## Documents

- [[Ca2+]] — the SR is the organelle that sets resting cytosolic free calcium and where released calcium is recovered from; the note's overload/hypoxia discussion is the cellular-injury counterpart of SR leak.
- [[SERCA2a]] — the SR-luminal ATPase isoform that this note treats as the core SR function; the SERCA2a note holds the isoform-specific detail.

## Connections

- [[SERCA2a]] — SERCA2a is the specific pump isoform embedded in the SR membrane of cardiac and slow-twitch skeletal muscle, so "the SR pumps calcium back" is mechanistically "SERCA2a hydrolyses ATP to move two Ca²⁺ into the lumen." Their failure modes overlap entirely: cytosolic calcium overload, mitochondrial calcium uptake, and loss of relaxation.
- [[Ca2+]] — The SR is the reason resting cytosolic Ca²⁺ is low enough for calcium to work as a second messenger. Anything that raises resting cytosolic calcium, or leaks calcium out of the SR, destroys the signal-to-noise ratio the compartment exists to create.
- [[Ryanodine Receptor]] — The ryanodine receptor is the SR's release valve, and its isoform choice defines the muscle type: RyR1 for skeletal, RyR2 for cardiac. Channel-level gain-of-function mutations are the mechanism of malignant hyperthermia susceptibility.
- [[Cardiomyocytes]] — Cardiomyocytes are the cell type in which SR architecture is most load-bearing: dyads (T-tubule–junctional SR pairs) control beat-to-beat calcium cycling and hence rate and force, and SR calcium leak is a leading arrhythmogenic mechanism in heart failure.
- [[Mitochondria]] — The SR is physically apposed to mitochondria at close contact sites, making it the dominant source of calcium delivered to the mitochondrial permeability transition pore. SR leak is therefore a direct upstream cause of mitochondrial calcium overload in muscle.
- [[Autophagy]] — Autophagy clears damaged SR and ER components via [[ER Stress]]-coupled pathways; chronic SR dysfunction raises ER stress signalling and this is a plausible link to sarcopenia, though the specific evidence in aging models is not strong.
- [[Skeletal Muscle]] — The SR is the reason skeletal muscle can produce force controllably; the amount of SR relative to myofibril volume differs between fast and slow fibers and sets the contraction kinetics of each fibre type.
- [[Ca2+ overload]] — SR leak is the canonical muscle mechanism for producing cytosolic calcium overload, and the resulting mitochondrial calcium uptake is the shared downstream pathway.

## Linking Summary

- New links added: [[SERCA2a]], [[Ryanodine Receptor]], [[Cardiomyocytes]], [[Mitochondria]], [[Autophagy]], [[Skeletal Muscle]], [[Ca2+ overload]]
- Suggested notes to create: [[Calsequestrin]], [[Phospholamban]], [[Triadin]], [[Calcium Spark]], [[Excitation-Contraction Coupling]], [[Malignant Hyperthermia]], [[Mitochondrial Calcium]], [[Sarcoplasmic Reticulum Calcium Leak]]
- Strong connections to strengthen: [[SERCA2a]] ↔ [[Heart Failure]], [[Ryanodine Receptor]] ↔ [[Arrhythmia]], [[Ca2+ overload]] ↔ [[Ischemia-Reperfusion Injury]]
