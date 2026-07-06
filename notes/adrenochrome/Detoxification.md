---
type: entity
category: Biological Process
aliases: []
created: 2026-07-04
updated: 2026-07-04
---

# Detoxification

Detoxification is the physiological or medicinal removal of toxic substances from a living organism. In the context of [[Advanced Glycation End Products|AGEs]], receptors like [[AGER1]] and enzymes like the glyoxalase system play a role in their detoxification.

### Linking Summary:
- New links added: [[Advanced Glycation End Products]], [[AGER1]], [[Metabolism]]
- Suggested new entity notes to create: 
- Strong connections to strengthen: [[Detoxification]] ↔ [[Advanced Glycation End Products]]

## Phases of Detoxification

Xenobiotic and endobiotic detoxification proceeds through three coordinated phases, each specialized for distinct chemical transformations:

**Phase I (Functionalization)**: Introduces or exposes polar functional groups (‑OH, ‑NH₂, ‑COOH, ‑SH) via oxidation, reduction, or hydrolysis. The cytochrome P450 (CYP) superfamily — particularly CYP2D6, CYP3A4, and CYP2E1 — catalyzes monooxygenation reactions. Flavin-containing monooxygenases (FMOs), aldo-keto reductases, and epoxide hydrolases also contribute to Phase I. While Phase I usually increases water solubility, it can also bioactivate pro-toxins or generate reactive intermediates (e.g., quinones) that require downstream processing. In the context of catecholamines, [[MAO]]-mediated oxidative deamination is a Phase I reaction on the side chain, while [[COMT]]-mediated O-methylation falls at the Phase I/Phase II interface.

**Phase II (Conjugation)**: Covalently attaches endogenous molecules ([[Glutathione]], glucuronic acid, sulfate, glycine, methyl groups, acetyl groups) to the functionalized xenobiotic, markedly increasing water solubility and reducing biological activity. Key enzymes include:
- **[[Glutathione]] S-transferases (GSTs)**: Conjugate electrophilic compounds with GSH, forming mercapturic acid precursors that are eliminated in urine or bile. GSTs are of particular importance for detoxifying [[adrenaline-quinone]], [[Adrenochrome]], and other [[o-quinone]] or aminochrome species.
- **UDP-glucuronosyltransferases (UGTs)**: Add glucuronic acid to phenolic, carboxylic, and amine groups.
- **Sulfotransferases (SULTs)**: Add sulfate to phenolic hydroxyls.
- **N-acetyltransferases (NATs)**: Acetylate aromatic amines and hydrazines.

**Phase III (Elimination)**: Transports conjugated metabolites across membranes for excretion. ATP-binding cassette (ABC) transporters — including [[P-glycoprotein]] (MDR1/ABCB1), multidrug resistance-associated proteins (MRPs/ABCC), and breast cancer resistance protein (BCRP/ABCG2) — efflux conjugates into bile, urine, or intestinal lumen. Organic anion transporters (OATs) and organic cation transporters (OCTs) facilitate uptake into hepatocytes and renal tubules for clearance.

## Glutathione Conjugation in Aminochrome Detoxification

The electrophilic [[o-quinone]] intermediates generated during catecholamine oxidation — [[adrenaline-quinone]], [[Dopaminochrome]], and [[Adrenochrome]] — are rapidly conjugated by [[Glutathione]] S-transferases (particularly GSTA1, GSTM1, and GSTP1) to form stable thioether conjugates. For adrenaline-quinone, the reaction occurs at the C2 and C5 positions of the quinone ring. GSH conjugation serves multiple protective functions:
1. **Direct detoxification**: Removal of the reactive quinone before it can cyclize to adrenochrome or arylate protein thiols.
2. **Spare cellular GSH**: The glyoxalase system regenerates GSH, but GST-conjugated GSH is consumed permanently (excreted as mercapturate), necessitating de novo GSH synthesis.
3. **Prevention of redox cycling**: GSH-conjugated aminochromes are less prone to redox cycling with molecular oxygen, reducing secondary ROS production.

When [[Glutathione]] is depleted — as occurs under sustained oxidative stress — the unconjugated aminochrome fraction increases, promoting protein damage, mitochondrial dysfunction, and cell death. The GSH/aminochrome conjugation axis is thus a primary determinant of catecholamine oxidation toxicity.

## Nrf2-Regulated Antioxidant Enzymes

The [[NRF2]]-[[Antioxidant Response Element]] transcriptional program orchestrates the coordinated upregulation of multiple detoxification and antioxidant enzymes in response to electrophilic stress. Among the Nrf2 target genes most relevant to catecholamine detoxification are:
- **[[NQO1]]** (NAD(P)H:quinone oxidoreductase 1): Reduces [[o-quinone]] and [[Quinone]] species directly to hydroquinones, bypassing semiquinone radical formation and preventing redox cycling. NQO1 can reduce both adrenochrome and its quinone precursors.
- **[[HO-1]]** (heme oxygenase 1): Cleaves pro-oxidant heme into biliverdin (a potent antioxidant), free iron (sequestered by ferritin), and carbon monoxide (a signaling molecule with anti-inflammatory effects).
- **[[Glutathione]] synthesis enzymes**: GCLc (catalytic subunit of glutamate-cysteine ligase) and GCLm (modifier subunit) are Nrf2 targets, increasing GSH synthetic capacity.
- **Thioredoxin (TXN)** and **thioredoxin reductase (TXNRD1)**: Maintain thiol redox balance as a parallel system to GSH.

## Implications for Redox Homeostasis

Detoxification capacity is a key determinant of redox homeostasis. The failure to efficiently process catecholamine oxidation products — due to genetic polymorphisms, GSH depletion, or transcriptional downregulation of detoxification enzymes — shifts the cellular redox balance toward sustained oxidation. Conversely, pharmacological activation of Nrf2 (e.g., by sulforaphane from broccoli sprouts, [[Dimethyl fumarate]], or [[Oltipraz]]) enhances the entire Phase II/III detoxification network, representing a promising strategy to mitigate aminochrome toxicity. The interplay between catecholamine flux, GSH availability, and Nrf2-driven detoxification capacity defines the threshold for [[Oxidative Stress]]-induced cell injury.

### Linking Summary:
- New links added: [[MAO]], [[COMT]], [[adrenaline-quinone]], [[Adrenochrome]], [[Dopaminochrome]], [[o-quinone]], [[Quinone]], [[Glutathione]], [[NRF2]], [[Antioxidant Response Element]], [[NQO1]], [[HO-1]], [[Thioredoxin]], [[Oxidative Stress]], [[Aminochromes]], [[Redox Cycling]], [[Polymorphism]], [[P-glycoprotein]], [[Glutathione Peroxidase]], [[Glutathione Reductase]], [[GSTs]]
- Suggested new entity notes to create: [[Thioredoxin System]], [[GSTs (Glutathione S-Transferases)]]
- Strong connections to strengthen: [[Detoxification]] ↔ [[Adrenochrome]], [[Detoxification]] ↔ [[Glutathione]], [[Detoxification]] ↔ [[NRF2]]
