---
title: Deoxycytidine Kinase
description: Deoxycytidine kinase (DCK, dCK) is the rate-limiting nucleoside kinase that
  phosphorylates deoxycytidine and its analogs, most importantly gemcitabine and cytarabine;
  low DCK expression is a well-established mechanism of acquired gemcitabine resistance.
protected: false
created: 2026-10-01
updated: 2026-10-01
tags: [enzyme, pharmacology, cancer, nucleoside-metabolism]
url: #
source: #
aliases: [DCK, dCK, deoxycytidine kinase, EC 2.7.1.74]
---

# Deoxycytidine Kinase

**Deoxycytidine kinase** (DCK; EC 2.7.1.74) is the rate-limiting enzyme of the salvage pathway for deoxycytidine and cytidine analogs. It catalyzes the first phosphorylation step that converts these nucleosides into their monophosphate forms, committing them to further phosphorylation to the di- and triphosphate species that are pharmacologically active.

## Mechanism and Role in Nucleoside Analog Activation

DCK transfers the γ-phosphate of ATP to the 5′-hydroxyl of deoxycytidine, yielding 2′-deoxycytidine 5′-monophosphate. Downstream nucleoside diphosphate kinase and nucleoside triphosphate phosphate kinases complete the ladder to the triphosphate.

> [!info] Why DCK matters clinically
> The cytidine analogs used in oncology — gemcitabine, cytarabine, and decitabine — are **prodrugs**. They are essentially inert until phosphorylated intracellularly, and DCK performs the first, rate-limiting step. Tumor DCK activity therefore sets the activation rate, and it is the single most consistently validated predictor of gemcitabine sensitivity.

DCK activity correlated tightly with in vivo gemcitabine sensitivity across a panel of murine tumors and human xenografts, whereas the catabolic enzyme cytidine deaminase did not (Kroep et al., *Mol Cancer Ther* 2002; PMID 12477049). Overexpressors of the equilibrable nucleoside transporter hENT1 (SLC29A1) show the opposite problem — better uptake — which is why transporter and kinase status are usually assessed together.

> [!warning] Loss of DCK is a resistance mechanism, not a bystander
> CRISPR knockout screens in pancreatic ductal adenocarcinoma identified **DCK deficiency as the primary genetic mechanism of gemcitabine resistance**, ahead of CRYBA2, DMBX1, CROT, and CD36 (Dash et al., *Mol Cancer Res* 2023; PMID 36757299). DCK-knockout cells rewire toward MYC targets, folate/one-carbon metabolism, and glutamine metabolism, and upregulate mitochondrial oxidative phosphorylation and anti-apoptotic BCL2.

## Pharmacological Levers

Because DCK is a loss-of-function resistance node, the therapeutic logic is to raise it:

- **Casein kinase 1δ (CK1δ) inhibition** with the small molecule SR-3029 upregulates DCK and synergizes with gemcitabine in pancreatic and bladder cancer models, with efficacy confirmed in an orthotopic pancreatic model (Vena et al., *Mol Cancer Ther* 2020; PMID 32430484).
- **All-trans retinoic acid** transactivates the DCK promoter roughly twofold and lowers the gemcitabine IC50 about 2.8-fold in gemcitabine-resistant AsPC-1 pancreatic cells (Kuroda et al., *Eur J Pharm Sci* 2017; PMID 28215943).
- **Low-dose gemcitabine as a radiosensitizer** depends on DCK: dCK knockdown abolishes radiosensitization, and re-expression restores it (Kerr et al., *Clin Cancer Res* 2014; PMID 25224279).

## Pharmacogenomics

Common DCK polymorphisms produce variant allozyme activities ranging from roughly 32–105% of wild type, which plausibly contributes to population variation in the metabolic activation of gemcitabine and other cytidine antimetabolites (Kocabas et al., *Drug Metab Dispos* 2008; PMID 18556440).

## Documents

- (no document notes yet)

## Connections

- [[Gemcitabine]] — DCK performs the first and rate-limiting phosphorylation that switches gemcitabine from an inert prodrug into cytotoxic triphosphates; DCK loss is the dominant genetic resistance mechanism.
- [[Cytarabine]] — also a DCK substrate, so the same enzyme governs the activation of the standard AML induction agent.
- [[Decitabine]] — a further deoxycytidine analog activated through the same salvage entry point.
- [[Pancreatic Ductal Adenocarcinoma]] — the tumor type in which DCK inactivation and gemcitabine resistance have been most systematically characterized.
- [[Pancreatic Cancer]] — gemcitabine-based regimens are standard first-line therapy here, making DCK status directly clinically relevant.
- [[Bladder Cancer]] — the second tumor type in which low-dose gemcitabine radiosensitization has been shown to require DCK.
- [[Radiotherapy]] — low-dose gemcitabine is a clinical radiosensitizer whose activity depends on DCK expression.
- [[Glutamine]] — DCK-deficient cells become glutamine-dependent, an actionable metabolic vulnerability created by the resistance mutation itself.
- [[MYC]] — DCK knockout enriches for MYC target gene programs, linking nucleoside salvage to broader cancer metabolism.
- [[BCL2]] — DCK-knockout cells upregulate BCL2, which is why venetoclax is being tested against this resistance background.

## Linking Summary

- New links added: [[Gemcitabine]], [[Cytarabine]], [[Decitabine]], [[Pancreatic Ductal Adenocarcinoma]], [[Pancreatic Cancer]], [[Bladder Cancer]], [[Radiotherapy]], [[Glutamine]], [[MYC]], [[BCL2]]
- Suggested notes to create: [[Cytidine Deaminase]], [[Equilibrable Nucleoside Transporter 1]], [[Casein Kinase 1 Delta]], [[All-Trans Retinoic Acid]]
- Strong connections to strengthen: [[Deoxycytidine Kinase]] ↔ [[Gemcitabine]], [[Deoxycytidine Kinase]] ↔ [[Cytarabine]], [[Deoxycytidine Kinase]] ↔ [[Drug Resistance]]