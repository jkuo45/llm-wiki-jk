---
title: Tumor-Associated Macrophage
description: Tumor-associated macrophages (TAMs) are the most abundant immune cells in many tumors; their immunosuppressive M2 polarization is driven by intra-tumoral metabolic reprogramming, including a SENP1-SIRT3-cholesterol axis that suppresses antitumor CD8+ T-cell immunity.
protected: false
created: 2026-08-31
updated: 2026-08-31
tags:
  - cell-type
  - immunology
  - cancer
  - tumor-biology
  - metabolism
  - entity
type: entity
entity_type_1: cell-type
aliases:
  - TAM
  - TAMs
  - tumor-associated macrophages
---

# Tumor-Associated Macrophage

**Tumor-associated macrophages (TAMs)** are macrophages recruited into and shaped by the [[Tumor Microenvironment]]. They are often the most abundant immune cell population within solid tumors and are typically polarized toward an **immunosuppressive (M2-like)** phenotype that promotes angiogenesis, matrix remodeling, and immune evasion while suppressing cytotoxic [[CD8 T cells|CD8⁺ T cells]]. TAM behavior is intimately coupled to their metabolism — mitochondrial reprogramming within TAMs directly controls their polarization and their influence on the adaptive antitumor response.

## Role in the Tumor Microenvironment

TAMs exert pro-tumorigenic effects through multiple mechanisms:

- **Immunosuppression:** secrete [[IL-10]], [[TGF-beta]] and other factors that inhibit T-cell function and promote regulatory populations.
- **Angiogenesis and matrix remodeling:** produce pro-angiogenic factors ([[VEGF]]) and matrix metalloproteinases that remodel the ECM.
- **Anti-inflammatory polarization (M2):** express CD163, CD206, arginase-1 (Arg1), and IL-10; metabolic state (oxidative/FAO bias) supports the M2 program.
- **Metabolic immune checkpoint:** TAM-expressed CD73 generates adenosine, an immunosuppressive metabolite in the senescent/aging tumor microenvironment (see [[SASP]]).
- **Therapeutic target:** TAM density and M2 polarization correlate with poor prognosis; repolarizing TAMs from M2 toward M1-like (e.g., with metformin) can reawaken antitumor immunity and is an active therapeutic direction.

## The SENP1–SIRT3–Cholesterol Axis

> [!info] Source: Hu & Zhou et al., *Cancer Letters* 2025 (doi:10.1016/j.canlet.2025.217728) — SENP1-Sirt3 axis promotes cholesterol biosynthesis in tumor-associated macrophages to suppress anti-tumor immunity
> Mitochondrial metabolic reprogramming mediated by the **SENP1–SIRT3 axis** drives M2 polarization and immune suppression:
> - **SENP1** (a SUMO protease) deSUMOylates **[[SIRT3]]**, and SIRT3 **SUMOylation deficiency** enhances cholesterol synthesis in TAMs.
> - The activated SENP1–SIRT3 axis raises **mitochondrial acetyl-CoA**, which is channelled into **cholesterol biosynthesis** in macrophages.
> - Elevated cholesterol drives the immunosuppressive **M2 phenotype** and reduces the number/activity of **[[CD8 T cells|CD8⁺ T cells]]**.
> - Targeting cholesterol biosynthesis in TAMs is proposed as a promising cancer-immunotherapy strategy.

This is a clean illustration of **microenvironmental metabolic plasticity**: mitochondrial sirtuin ([[SIRT3]]) activity in *immune host cells* — not just tumor cells — shapes the redox/metabolic state that determines the immune tone of the [[Tumor Microenvironment]], ultimately gating the cytotoxic response against the tumor.

## Metabolic Reprogramming ↔ Polarization

- **M2/anti-inflammatory bias:** FAO and OXPHOS-supportive metabolism, elevated acetyl-CoA and cholesterol, sustained [[SIRT3]] activity.
- **M1/pro-inflammatory bias:** glycolysis-biased, higher ROS generation; generally less supportive of tumor growth.
- **Dietary/pharmacologic repolarization:** metformin (AMPK-dependent) shifts TAMs toward M1; agents targeting cholesterol metabolism block M2 polarization.
- **Redox coupling:** because [[SIRT3]] buffers mitochondrial ROS (via [[SOD2]], [[IDH2]]), SIRT3-rich TAMs tolerate the oxidative metabolism of M2 — linking mitochondrial sirtuin redox control directly to immune polarization and the [[Redox Homeostasis]] of the whole niche.

## Connections

- [[Tumor Microenvironment]] — the niche in which TAMs reside and which they shape
- [[SIRT3]] — mitochondrial deacetylase; SENP1-SIRT3 axis drives M2-cholesterol program
- [[SENP1]] — SUMO protease that deSUMOylates/activates SIRT3 in TAMs
- [[CD8 T cells]] — cytotoxic effectors suppressed by cholesterol-polarized TAMs
- [[Metabolic Plasticity]] — TAM mitochondrial reprogramming as microenvironmental plasticity
- [[IL-10]] — immunosuppressive cytokine secreted by M2 TAMs
- [[TGF-beta]] — immunosuppressive/remodeling factor from TAMs
- [[VEGF]] — pro-angiogenic factor promoting tumor vascularization
- [[SASP]] — senescent-TAM secretory phenotype supporting tumor progression
- [[Redox Homeostasis]] — SIRT3-mediated redox buffering sustaining M2 metabolism

## Linking Summary

- New links added: [[Tumor Microenvironment]], [[SIRT3]], [[SENP1]], [[CD8 T cells]], [[Metabolic Plasticity]], [[IL-10]], [[TGF-beta]], [[VEGF]], [[SASP]], [[Redox Homeostasis]]
- Suggested new entity notes to create: [[SENP1]] (exists), [[CD8 T cells]] (canonical note exists in the shared `_link` hub)
- Strong connections to strengthen:
  - [[Tumor-Associated Macrophage]] ↔ [[SIRT3]] — SENP1-SIRT3-cholesterol axis polarizes TAMs immunosuppressively
  - [[Tumor-Associated Macrophage]] ↔ [[Metabolic Plasticity]] — TAM metabolism is a microenvironmental plasticity hub
