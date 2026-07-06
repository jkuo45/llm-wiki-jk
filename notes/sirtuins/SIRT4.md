---
type: entity
category: protein
aliases:
  - Sirtuin 4
  - mitochondrial sirtuin 4
  - SIRT4 ADP-ribosyl transferase
database_ids:
  uniprot: Q9Y6E7
  hgnc: HGNC:14932
relations:
  - predicate: inhibits
    target: "Glutamate Dehydrogenase (GDH)"
    sources:
      - PMID:16959573
  - predicate: inhibits
    target: "Insulin Secretion"
    sources:
      - PMID:16959573
  - predicate: downregulated_by
    target: "notes/_link/Caloric Restriction"
    sources:
      - PMID:16959573
  - predicate: mono-ADP-ribosylates
    target: "Glutamate Dehydrogenase (GDH)"
    sources:
      - PMID:16959573
created: 2026-07-02
updated: 2026-07-05
---

# SIRT4

**SIRT4** (Sirtuin 4) is a **mitochondrial sirtuin** classified in phylogenetic **Class II**, which includes sirtuins from bacteria, insects, nematodes, mould fungus, and protozoans — making SIRT4 and Class II sirtuins among the most ancient in evolutionary terms. Unlike [[SIRT1]] and [[SIRT3]], SIRT4's **primary enzymatic activity is mono-ADP-ribosylation** rather than deacetylation, though it also exhibits weak deacetylase activity.

## Enzymatic Activity

SIRT4 is a **mono-ADP-ribosyl transferase** using NAD⁺ as a donor (see [[NAD+]]). It generates [[OAADPr]] as a by-product. No robust deacetylase activity has been confirmed as a primary function, though weak deacetylase activity has been reported under specific conditions. This makes SIRT4 one of only two mammalian sirtuins (along with [[SIRT6]]) whose primary characterised activity is mono-ADP-ribosylation.

## Subcellular Localisation

**Mitochondrial** — SIRT4, along with [[SIRT3]] and [[SIRT5]], is one of the three mitochondrial sirtuins, localised to the mitochondrial matrix.

## Metabolic Functions

### Glutamate Dehydrogenase (GDH) Regulation

The primary characterised function of SIRT4 is regulation of **GDH (glutamate dehydrogenase)** in pancreatic β-cells:

- GDH regulates **glutamate and glutamine metabolism**, promotes ATP synthesis, and enhances insulin secretion.
- SIRT4 **mono-ADP-ribosylates GDH**, thereby **inhibiting its activity** and slowing the conversion of glutamate into α-ketoglutarate.
- Consequence: **reduced amino-acid-stimulated insulin secretion** from pancreatic β-cells.

### Caloric Restriction Response

Critically, SIRT4 responds to CR in the **opposite direction** from [[SIRT1]] and [[SIRT3]]:

- **SIRT4 is downregulated by CR**, leading to increased GDH activity.
- This allows **glutamine to serve as an insulin secretagogue** — an adaptive metabolic response.
- Pancreatic islets of SIRT4 knockout mice display: increased GDH activity, higher insulin levels, upregulation of amino acid-stimulated insulin secretion, and insulin secretion in response to glutamine.

### Glucose and Lipid Metabolism

SIRT4 regulates glucose metabolism by modulating insulin secretion and glutamate metabolism. It also suppresses fatty acid oxidation in the liver by inhibiting [[MTPα]] (mitochondrial trifunctional protein α subunit), thereby promoting lipid accumulation under nutrient-replete conditions. This places SIRT4 at a critical intersection of glucose and lipid homeostasis.

## Tumour Suppressor Activity

SIRT4 functions as a tumour suppressor in multiple cancer types by downregulating glutamine metabolism:

- **Glutamine Addiction**: SIRT4 inhibits GDH activity, limiting the conversion of glutamate to α-ketoglutarate and thereby restricting the anaplerotic supply of carbon to the TCA cycle that cancer cells rely on for proliferation.
- **Cancer Types**: Decreased SIRT4 expression is observed in hepatocellular carcinoma, gastric cancer, colorectal cancer, bladder cancer, and breast cancer. Low SIRT4 correlates with poor prognosis in these malignancies.
- **Mechanism**: SIRT4 suppresses tumour growth by repressing mTOR signalling through the inhibition of amino-acid-stimulated insulin secretion and by direct regulation of mitochondrial metabolism.

## DNA Repair and Apoptosis

SIRT4 contributes to genomic stability through regulation of mitochondrial metabolism and redox balance. It suppresses apoptosis by maintaining mitochondrial integrity and limiting the release of pro-apoptotic factors. SIRT4 depletion sensitises cells to genotoxic stress, linking it to the DNA damage response.

## Neurological Relevance

Since **glutamate is the primary neurotransmitter at excitatory synapses**, SIRT4's regulation of GDH may extend to neuronal function. SIRT4 could potentially regulate neuronal impulse transmission or the brain's response to toxic glutamate concentrations released following stroke. SIRT4 is also implicated in neuroprotection by maintaining mitochondrial health and limiting oxidative stress in neurons.

## Evolutionary Context

SIRT4 belongs to **Class II**, one of the most evolutionarily ancient sirtuin classes present across bacteria, insects, nematodes, and protozoans. SIRT4 and [[SIRT5]] are proposed to be among the most ancient mammalian sirtuins.

## Connections

- [[SIRT3]] — fellow mitochondrial sirtuin; complementary metabolic roles. Together they form the [[SIRT3/SIRT4 Ratio]], a mitochondrial redox dial
- [[SIRT5]] — fellow mitochondrial sirtuin; Class III (more ancient)
- [[SIRT6]] — both are primary mono-ADP-ribosyl transferases among mammalian sirtuins
- [[NAD+]] — required co-substrate
- [[OAADPr]] — by-product of ADP-ribosylation
- [[Caloric Restriction]] — SIRT4 is **downregulated** by CR (contrast with SIRT1/3 which are upregulated)
- [[Glutamate Dehydrogenase (GDH)]] — primary substrate; SIRT4 inhibits GDH via ADP-ribosylation
- [[MTPα]] — SIRT4 inhibits this fatty acid oxidation enzyme
- [[mTOR]] — SIRT4 suppresses mTOR signalling via metabolic regulation

## Linking Summary

- New links added: [[NAD+]], [[OAADPr]], [[Caloric Restriction]], [[SIRT3]], [[SIRT5]], [[SIRT6]], [[Glutamate Dehydrogenase (GDH)]], [[MTPα]], [[mTOR]]
- Suggested new entity notes to create: [[Glutamate Dehydrogenase (GDH)]], [[ADP-ribosylation]], [[MTPα]]
- Strong connections to strengthen: [[SIRT4]] ↔ [[Caloric Restriction]], [[SIRT4]] ↔ [[Glutamate Dehydrogenase (GDH)]]
