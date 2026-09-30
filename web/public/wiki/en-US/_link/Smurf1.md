---
title: Smurf1
description: HECT-domain E3 ubiquitin ligase that constrains TGF-beta superfamily signalling by ubiquitinating receptor-regulated SMADs; it is a negative regulator of osteoblast differentiation and bone mass, and its loss is embryonic lethal in mice.
protected: false
created: 2026-09-29
updated: 2026-09-29
tags:
  - protein
  - enzyme
  - ubiquitin
  - signaling
aliases: [SMURF1, Smad ubiquitination regulatory factor 1, HECW1, E3 ubiquitin-protein ligase SMURF1]
---

# Smurf1

**Smurf1** (SMAD ubiquitination regulatory factor 1) is a HECT-domain E3 ubiquitin ligase of 757 amino acids (~86 kDa) that sets the intensity and duration of TGF-beta superfamily signalling by ubiquitinating receptor-regulated SMADs and other substrates. It was originally cloned in *Xenopus* as a regulator of embryonic dorsal-ventral patterning, and its mammalian paralogue [[SMURF2]] has a partly non-overlapping substrate set.

> [!info] The core mechanism
> Smurf1 is a negative-feedback regulator of the TGF-beta/BMP axis. Ligand-engaged [[TGF-beta Receptor|TGFBR1]] phosphorylates receptor-regulated SMADs (SMAD2/3 for TGF-beta; SMAD1/5/9 for [[BMP]]); the accumulated SMADs enter the nucleus and transcribe target genes — **including SMAD7**, which then recruits Smurf1 (and Smurf2) back to the receptor complex. Smurf1 then ubiquitinates the receptor and the SMADs, terminating the signal. Smurf1 is thus the enzyme that closes the loop the SMAD7 switch opened, converting a transient signal into a self-limiting one.

## Domain architecture

- **C2 domain** (N-terminal) — mediates lipid binding and localisation to membranes, which is how Smurf1 is recruited to activated receptors and to the endosomal pathway.
- **WW domains** (two or three) — bind proline-rich and PPxY motifs; used to dock onto signalling scaffolds, and these domains are also hijacked by viral proteins.
- **HECT domain** (C-terminal) — the catalytic domain. HECT E3 ligases form a transient thioester intermediate with ubiquitin and transfer it directly to a lysine on the substrate, which is why Smurf1 is *cis*-regulated and needs its own auto-ubiquitination (stimulated by NDFIP1) to stay catalytically competent and stable.

Smurf1 is itself degraded by the SCF^FBXL15 ubiquitin ligase complex, which ubiquitinates it at Lys-381 and Lys-383 (Lys-383 being the primary site). It also dimerises with Smurf2, and the two are functionally interdependent in several settings.

## Substrates beyond SMADs

Smurf1's actions extend well beyond TGF-beta/BMP signalling, which is why it keeps appearing in unrelated literature:

- **Runx2** — the master transcription factor of osteoblast differentiation. Smurf1 ubiquitinates Runx2, and Smurf1-null or AMPK-site-mutant mice have high bone mass and premature osteoblast differentiation.- **Insulin receptor** — Smurf1 targets it for degradation; loss of Smurf1 raises insulin signalling in osteoblasts and increases circulating osteocalcin, with hyperinsulinaemia and hypoglycaemia in the knock-in mice.
- **MEKK2** — a scaffold kinase in the JNK and non-canonical NF-κB pathways.
- **RhoA** — targeted after TGF-β-induced epithelial-to-mesenchymal transition, contributing to cytoskeletal remodelling.
- **FGFR2** — the deubiquitinase OTUB1 restrains Smurf1 to preserve FGFR2 stability; loss of OTUB1 drives osteopenia, and restoring FGFR2 rescues it.
- **LATS1/2** — Smurf1-mediated LATS degradation activates the Hippo effector YAP/TAZ and promotes osteoblast differentiation. HSP90β is the chaperone that prevents this, which is why HSP90 inhibition increases bone mass.
- **TRAF family and [[TNF Signaling|TNFR]]-pathway adapters** — non-canonical NF-κB activation in response to TNF, IL-1 and RANKL.
- **Nedd9** and other scaffold proteins in cell migration.

## Skeletal phenotype

Smurf1 is best known as a brake on bone formation. Osteoblast-specific Smurf1 overexpression reduces postnatal bone formation, and global Smurf1 knockout produces a high bone mass phenotype. The AMPK phosphorylation site Ser-148 is the key regulatory node: the knock-in that blocks AMPK phosphorylation reproduces the full knockout phenotype (Shimazu, Wei & Karsenty 2016), which places Smurf1 downstream of energy sensing in bone.

> [!info] Smurf1, AMPK and bone
> This is a genuinely useful piece of signalling architecture for the vault: an energy sensor ([[AMPK]]) phosphorylates an E3 ligase, the ligase's activity sets the steady-state level of a transcription factor (Runx2), and the output is bone mass. Smurf1 is thus one of the clearest examples of ubiquitin-proteasome system flux as an output amplifier, not just a garbage collector.

The other well-characterised Smurf1 phenotype is the muscle one. Smurf1 promotes myogenic differentiation by degrading Smad5 and thereby blocking BMP-2-induced osteogenic conversion of myoblasts; separately, Smurf1 ubiquitinates ferritin heavy chain 1, and excess Smurf1 triggers ferroptotic death in myoblasts. Skeletal-muscle Smurf1 is also involved in unloading-induced atrophy and in ICU-acquired weakness (microRNA-542 raises SMAD2/3 phosphorylation by suppressing SMURF1 among other inhibitors).

## Disease associations and context dependence

Smurf1 is reported as both tumour suppressor and tumour promoter depending on tissue and substrate — a common E3 ligase problem:

- Reduced SMURF1 in ERα-positive breast cancer; reducing SMURF1 decreases proliferation in vitro and in vivo, so it acts as a tumour suppressor there.
- High SMURF1 correlates with poor survival in gastric cancer and clear cell renal cell carcinoma, where it acts oncogenically.
- SMURF1 is elevated in Parkinson's disease brain and in α-synuclein models, where it increases α-synuclein aggregation; knockdown reduces it. Silencing SMURF1 inhibits HIV-1 replication in HeLa P4/R5 cells.

> [!warning] Clinical caveat
> Smurf1 is an attractive but unexploited target — no Smurf1-directed therapy exists in the clinic. The AMPK–Smurf1–Runx2 axis is mechanistically clean in mouse genetics, and there is active work on SMURF1 in neurodegeneration and in solid tumours, but the field is genuinely early and the "tumour suppressor in one tissue, oncogene in another" pattern means systemic inhibition would be hard to get right. Treat Smurf1 as a research target, not a druggable node.

## Documents

- [[Smad7]] — Smad7 is the inhibitory SMAD that recruits Smurf1 to the TGF-beta receptor complex; the inhibitory arm of TGF-beta signalling is essentially SMAD7 plus Smurf1 (and Smurf2).

## Connections

- [[Smad7]] — Smad7 does nothing on its own: it is a docking adaptor whose main biochemical role is to bind TGFBR1 and recruit Smurf1/Smurf2 to ubiquitinate the receptor. Smurf1 is the enzyme, Smad7 the targeting mechanism, and together they are the canonical negative feedback loop in TGF-beta signalling.
- [[SMURF2]] — Smurf2 is the closest paralogue, with overlapping but distinct substrates and partly non-redundant functions. Any claim about Smurf1 in a given system should be checked against Smurf2 loss-of-function data, because double knockouts frequently produce phenotypes single knockouts do not.
- [[TGF-beta]] — Smurf1's defining role is as a brake on TGF-beta superfamily signalling intensity and duration. Where TGF-beta signalling is chronically active — fibrosis, [[Aging]]-associated tissue dysfunction, some tumours — Smurf1 loss or mislocalisation removes that brake.
- [[TGF-beta Receptor]] — TGFBR1 is the direct partner: Smurf1 is recruited to the activated receptor (usually via Smad7) and ubiquitinates both the receptor and its SMAD substrates, driving the receptor into the endosomal degradative route.
- [[SMAD2]] — Receptor-regulated SMAD2 is a direct Smurf1 substrate, mediating degradation of the TGF-beta signal transducer itself.
- [[SMAD3]] — SMAD3 degradation by Smurf1 terminates canonical TGF-beta signalling, which is the same axis the vault's SMAD3 note covers from the transcriptional side.
- [[BMP]] — Smad1/5/9 are the BMP-pathway SMADs targeted by Smurf1. This is the route by which Smurf1 blocks BMP-2-induced osteogenesis of myoblasts and constrains osteoblast differentiation.
- [[Ubiquitin]] — Smurf1 is a HECT E3 ligase, so it catalyses ubiquitin transfer directly rather than acting as a scaffold. Its auto-ubiquitination requirement and its SCF^FBXL15-mediated turnover are both ubiquitin-system phenomena.
- [[Proteasome]] — Smurf1's output is proteasomal degradation of its substrates, so it sets steady-state protein abundance rather than acting as a switch. Ubiquitin-proteasome flux is a genuine output amplifier in signalling.
- [[Osteoporosis]] — Smurf1 loss of function raises bone mass in mice, and the Smurf1/OTUB1/FGFR2 and Smurf1/LATS/YAP axes are all live in osteoblast biology. This is the most direct translational hook, though Smurf1 itself is not a drug target.
- [[Ferroptosis]] — Smurf1 ubiquitinates ferritin heavy chain 1, disrupting iron storage and pushing myoblasts into ferroptosis. That connects Smurf1 to the vault's ferroptosis cluster through iron handling rather than through lipid peroxidation enzymes.
- [[Inflammation]] — Smurf1 sits downstream of the TNFR pathway via MEKK2 and non-canonical NF-κB, and its activity is modulated by cytokine signalling; inflammatory cytokine exposure changes Smurf1 substrate availability and localisation.
- [[Parkinson's Disease]] — SMURF1 is elevated in patient brain and correlates with α-synuclein burden, and modulates it in cell models, making it a candidate proteostasis node in neurodegeneration.

## Linking Summary

- New links added: [[SMURF2]], [[TGF-beta]], [[TGF-beta Receptor]], [[SMAD2]], [[SMAD3]], [[BMP]], [[Ubiquitin]], [[Proteasome]], [[Osteoporosis]], [[Ferroptosis]], [[Inflammation]], [[Parkinson's Disease]], [[AMPK]], [[Runx2]]
- Suggested notes to create: [[Runx2]], [[Skeletal Muscle Atrophy]], [[YAP/TAZ]], [[Non-canonical NF-κB]], [[MEKK2]], [[Osteocalcin]], [[FBXL15]] — removed as already existing: Hippo Pathway, SERCA2a
- Strong connections to strengthen: [[Smurf1]] ↔ [[SMURF2]], [[Ubiquitin]] ↔ [[Proteasome]], [[TGF-beta Receptor]] ↔ [[Smad7]]
