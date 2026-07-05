---
type: entity
category: chemical
aliases:
  - SirReal2
  - SirReal-2
database_ids:
  pubchem: 86289063
relations:
  - predicate: inhibits
    target: "SIRT2"
    sources:
      - s41392-022-01257-8
created: 2026-07-03
updated: 2026-07-03
---

# SirReal2

**SirReal2** is a highly potent, selective, and structurally unique small-molecule inhibitor of **[[SIRT2]]** belonging to the aminothiazole chemical family. It is renowned for acting via a distinct ligand-induced conformational rearrangement of the SIRT2 active site, making it a pivotal pharmacological tool and template for selective sirtuin inhibitor design.

---

## Chemical Properties & Classification

- **Class**: Aminothiazole derivative; SIRT-rearranging ligand (SirReal).
- **Target Selectivity**: High selectivity for [[SIRT2]] ($IC_{50} = 0.14\ \mu\text{M}$) over other family members, showing minimal inhibitory effects on [[SIRT1]] or [[SIRT3]].
- **Structure**: Characterized by an aminothiazole core coupled to structural motifs that interact with a specific hydrophobic subpocket of SIRT2.

---

## Pharmacodynamics & Pharmacokinetics

### Mechanism of Action (Conformational Rearrangement)
Unlike classical sirtuin inhibitors that directly compete with NAD⁺ or the acetyl-lysine substrate, SirReal2 binds to an allosteric pocket near the zinc-binding domain of SIRT2, known as the **"selective pocket"**. 
X-ray crystallography reveals that SirReal2 induces a **ligand-induced structural rearrangement** of the SIRT2 active site. This rearrangement locks the enzyme in an inactive conformation and prevents substrate processing.

### Physiological & Pathological Impacts
- **Epigenetic Regulation**: In cell systems such as chondrocytes, SirReal2 increases the levels of acetylated Histone H3 (specifically H3K9ac and H3K56ac), validating its cellular efficacy in blocking SIRT2 deacetylation.
- **Oocyte Maturation**: SirReal2 modulates gap junction communication during oocyte development. It has been reported to elevate acetylated MEK1/2 levels, increase the phosphorylation of Connexin 43 (Cx43) on Ser³⁶⁸, and enhance the overall Cx43 acetylation levels of cumulus-oocyte complexes.

---

## Applications

- **Target Validation**: Used to study SIRT2 dependencies in cancer, metabolic disorders, and developmental biology.
- **Neurodegeneration & Inflammatory Models**: Serves as a high-affinity benchmark to evaluate the impact of targeted SIRT2 inhibition on protein aggregation (e.g., $\alpha$-synuclein in PD) and cell viability.

---

## Connections & Related Entities

- **[[SIRT2]]** — direct molecular target selectively inhibited by SirReal2.
- **[[notes/_link/Aging]]** — SIRT2 is a key regulator of mitotic exit and aging, pathways probed using SirReal2.
- **[[AGK2]]** — another selective SIRT2 inhibitor, utilizing a different binding mechanism.

---

## Linking Summary

- **New Links Added**: [[SIRT2]], [[AGK2]], [[notes/_link/Aging]]
- **Suggested New Notes to Create**: [[Connexin 43]], [[Selective Pocket]]
- **Strong Connections to Strengthen**: [[SirReal2]] ↔ [[SIRT2]]
