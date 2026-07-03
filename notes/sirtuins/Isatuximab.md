---
type: entity
category: chemical
aliases:
  - Isatuximab
  - Sarclisa
  - SAR650984
database_ids:
  mesh: D000077593
  uniprot: ""
  chebi: CHEBI:174697
relations:
  - predicate: targets
    target: "[[CD38]]"
    sources: []
  - predicate: treats
    target: "[[Multiple Myeloma]]"
    sources: []
  - predicate: inhibits
    target: "[[CD38]]"
    sources: []
created: 2026-07-03
updated: 2026-07-03
---

# Isatuximab

**Isatuximab** (brand name **Sarclisa**, formerly SAR650984) is a chimeric IgG1κ monoclonal antibody directed against **[[CD38]]**. It was approved by the FDA in **March 2020** for **[[Multiple Myeloma]]** (MM), and by the EMA in 2021. It binds a distinct epitope on CD38 compared to [[Daratumumab]].

## Mechanism of Action

Isatuximab kills CD38-expressing myeloma cells through overlapping but distinct mechanisms:

| Mechanism | Description |
|---|---|
| **Direct apoptosis** | Stronger intrinsic apoptosis induction (without crosslinking required) — key differentiator from [[Daratumumab]] |
| **ADCC** | Antibody-dependent cellular cytotoxicity via NK cells |
| **ADCP** | Antibody-dependent cellular phagocytosis |
| **CDC** | Complement-dependent cytotoxicity (weaker than daratumumab due to epitope) |
| **Immunomodulation** | Depletes CD38⁺ Tregs/MDSCs; activates T-cell and NK-cell responses |
| **CD38 enzymatic inhibition** | Partially inhibits the ADP-ribosyl cyclase activity of CD38 |

Isatuximab also does **not** bind to the CD38 region required for daratumumab binding, enabling potential combination use or rescue in daratumumab-refractory patients.

## Clinical Use

- Approved in combination with:
  - Pomalidomide + dexamethasone (Pd) — relapsed/refractory MM (2nd-line+)
  - Carfilzomib + dexamethasone (Kd) — relapsed/refractory MM
  - Bortezomib, lenalidomide, dexamethasone (VRd) — transplant-ineligible newly diagnosed MM
- Investigated in combination with **cemiplimab (anti-PD-1)** for solid tumors, exploring its role in remodeling the **[[Tumor Microenvironment]]**.

## Adverse Effects

- Infusion-related reactions (mitigated by premedication)
- Infections: similar risk profile to [[Daratumumab]] — pneumonia, upper respiratory infections; prophylaxis required
- Hematologic toxicity: neutropenia, thrombocytopenia
- Interference with blood bank testing (less pronounced vs. daratumumab due to different epitope)

## Connections

- [[CD38]] — molecular target
- [[Multiple Myeloma]] — primary oncologic indication
- [[Daratumumab]] — related anti-CD38 mAb; distinct epitope allows sequential or combination use
- [[Tumor Microenvironment]] — isatuximab remodels TME by depleting immunosuppressive CD38⁺ cells

---

## Linking Summary

- New links added: [[CD38]], [[Multiple Myeloma]], [[Daratumumab]], [[Tumor Microenvironment]]
- Suggested new entity notes: [[cADPR]], [[Tumor Microenvironment]]
- Strong connections: [[Isatuximab]] ↔ [[CD38]], [[Isatuximab]] ↔ [[Daratumumab]]
