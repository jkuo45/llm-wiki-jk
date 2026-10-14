---
title: PIK3CA
description: "PIK3CA encodes the p110alpha catalytic subunit of class I PI3K, the most frequently mutated oncogene in breast cancer, where gain-of-function hotspot variants in exons 9 and 20 constitutively activate the PI3K-AKT-mTOR axis."
protected: true
created: 2026-10-01
updated: 2026-10-01
tags: [oncogene, gene, breast-cancer, signal-transduction]
aliases: [p110alpha, p110a, PI3Kalpha, PI3K-alpha]
---

# PIK3CA

**PIK3CA** (phosphatidylinositol 3-kinase catalytic subunit alpha, gene at 17q24.1) encodes **p110α**, the catalytic subunit of class I phosphoinositide 3-kinase (PI3K). Somatic activating mutations in PIK3CA are among the most common oncogenic events in human cancer — roughly 30–40% of breast cancers, ~15–20% of colorectal cancers, and substantial fractions of endometrial carcinoma. Because the mutations cluster in a small number of hotspots, PIK3CA status is both a prognostic marker and, for a defined mutation subset, an actionable predictive biomarker.

## Structure & Domains

p110α (1068 aa) has a modular architecture typical of class I PI3Ks:

- **Adaptor-binding domain (ABD)** — binds p85 regulatory subunits (PIK3R1/2/3), which stabilise the enzyme and relieve its cytosolic p110–p85 autoinhibition; it also couples PI3K to RAS-GTP via a Ras-binding domain.
- **RBD** — binds RAS-GTP directly, so PI3K can be activated downstream of receptor tyrosine kinases both through p85 recruitment and through direct RAS binding.
- **C2 domain** — membrane-binding, via a basic patch; the domain in which some non-hotspot activating variants (e.g. N345K) lie.
- **Helical domain** — mediates p110–p85 interaction and dimerisation; hotspot E542K/E545K/Q546* variants sit here.
- **Kinase domain (catalytic)** — phosphorylates phosphatidylinositols at the 3′ position of the inositol ring. The C-terminal tail past the kinase domain enhances catalytic activity; the H1047R/L hotspot sits in the C2–kinase junction and relieves substrate-access inhibition.

## Mechanism of Action & Pathways

PI3Kα converts PIP2 to **PIP3** at the plasma membrane, creating a docking platform for PH-domain proteins:

1. **AKT** (via PDK1 phosphorylation) is the principal effector. Activated AKT phosphorylates TSC1/TSC2 (inhibiting the GAP for Rheb), releasing Rheb-mTORC1 signalling, so PI3K and mTOR lie on the same axis rather than in parallel.
2. **PDK4, FOXO, GSK3, BAD** — AKT-mediated phosphorylation inactivates FOXO transcription factors and pro-apoptotic BAD, suppressing apoptosis and stress responses.
3. **Growth and translation** — mTORC1 drives S6K/4E-BP1 translation, ribosome biogenesis and lipid synthesis; PIK3CA-mutant cells show reliance on this axis, consistent with increased sensitivity to mTOR inhibitors in some retrospective series.
4. **Estrogen receptor crosstalk** — activated AKT phosphorylates and activates the estrogen receptor, allowing oestrogen-independent ER transcription. This is the proposed explanation for why PIK3CA mutations are over-represented in ER-positive, well-differentiated (luminal, grade 1–2) breast cancers, and for their association with resistance to aromatase-inhibitor endocrine therapy.

PIK3CA mutations are predominantly **single-copy, point, gain-of-function** events, and are mutually exclusive with germline PIK3CA variants causing the PIK3CA-related overgrowth spectrum (see the caveat below).

> [!important] Mutational spectrum and hotspot concentration
> In breast cancer, five variants — H1047R (~35%), E545K (~17%), E542K (~11%), N345K (~6%) and H1047L (~4%) — account for roughly 73% of all PIK3CA mutations. Mutation frequency is strongly subtype-dependent: ~42% in HR+/HER2−, ~31% in HER2+, ~16% in triple-negative breast cancer. Frequency also rises with age (26% under 60 vs 35% at 60+) and in metastatic versus primary samples (32% vs 27%).

> [!warning] Companion diagnostics under-detect PIK3CA
> Alpelisib is approved in combination with fulvestrant for HR+/HER2− advanced breast cancer harbouring one of 11 PIK3CA substitutions defined in the SOLAR-1 trial (exons 7, 9, 20). Comprehensive genomic profiling of ~34,000 biopsies found ~20% of PIK3CA-mutant tumours (and up to ~28% of those detected in circulating tumour DNA) carry mutations *outside* that list — N345K, E726K, and indels in the p85-binding domain being the commonest. Real-world data indicate these off-panel patients still benefit from alpelisib + fulvestrant, so the hotspot-panel restriction under-selects rather than over-selects patients.

## Physiological Function

PIK3CA is essential for cell growth, survival and metabolic reprogramming under nutrient and growth-factor limitation: it drives the Warburg effect, glycolytic adaptation, and ribosome biogenesis. PIK3CA activation also promotes [[EMT]] and invasiveness, and its signalling interfaces with the [[Wnt]]/β-catenin and RAS–ERK axes, which are mutually reinforcing rather than redundant.

## Pathology & Clinical Relevance

- **Breast cancer:** PIK3CA-mutant HR+/HER2− disease shows resistance to endocrine therapy and to mTORC1 inhibitors (e.g. everolimus) — in a Taiwanese cohort, median time to treatment failure on mTOR inhibition was 20.5 months in PIK3CA-mutant versus 6 months in wild-type patients, while CDK4/6-inhibitor benefit appeared slightly *reduced* in mutants (12 vs 16 months; HR 1.67, 95% CI 0.91–3.07). SRT-altered oestrogen deprivation also *increases* PIK3CA mutant ctDNA detection, consistent with selection for PI3K-driven clones.
- **Endometrial carcinoma:** PIK3CA is among the most frequently mutated genes (~71% of significantly mutated genes in TCGA endometrioid tumours), and PIK3CA/PTEN pathway alterations are mutually exclusive — a tumour rarely has both.
- **Colorectal cancer:** PIK3CA mutation (~15–20%) co-occurs with [[KRAS]] activation and contributes to resistance to anti-EGFR agents.
- **Co-alteration landscape:** PIK3CA-mutant tumours are enriched for MAP3K1, CDH1 and TBX3 alterations (invasive lobular carcinoma, luminal A biology), while showing mutual exclusivity with PIK3R1, AKT1, PTEN, IGF1R, TP53, BRCA1/2, RB1 and GATA3.
- **Population differences:** PIK3CA alterations are less frequent in patients of African genetic ancestry (27.1% vs 38.6% in European ancestry), whereas AKT1 and PTEN alterations are balanced.
- **Targeted therapy:** alpelisib (α-selective) plus fulvestrant is approved; AKT inhibitors (capivasertib) show benefit restricted to PIK3CA/AKT1/PTEN-altered disease when NGS-based selection is used, which is why the FAKTION trial's originally reported pan-population benefit shrank on molecular reanalysis.
- **Inherited PIK3CA-related overgrowth spectrum (PROS):** germline loss-of-function and mosaic variants cause CLOVES, MCAP and related overgrowth syndromes — a distinct, non-oncogenic use of the same gene.
  > [!warning] Clinical vs. germline biology differ
  > Somatic PIK3CA gain-of-function drives cancer; germline PIK3CA variants in PROS are predominantly loss-of-function or mosaic and cause tissue overgrowth rather than malignancy. Do not conflate the two when interpreting reports.

## Documents
- (no document notes yet)

## Connections
- [[PI3K-Akt Signaling]] — PIK3CA encodes the alpha catalytic subunit of the kinase at the head of this pathway; every activating hotspot funnels into AKT and then mTORC1, so the note is the mutational entry point to the axis the vault already documents.
- [[Breast Cancer]] — the tumour type in which PIK3CA is most often mutated (~36%) and most clinically actionable, via the SOLAR-1-derived alpelisib indication for HR+/HER2− advanced disease.
- [[PTEN]] — the phosphatase that opposes PI3K signalling by dephosphorylating PIP3; PTEN loss and PIK3CA activation are functionally redundant routes and are largely mutually exclusive in tumours.
- [[Akt]] — the direct downstream effector whose phosphorylation by PDK1 is the proximal consequence of p110α hyperactivation and the basis of most PIK3CA-driven phenotypes.
- [[mTOR]] — lies downstream of AKT in the same axis; PIK3CA-mutant tumours are consequently sensitive to mTOR inhibition, making the mTOR a second-line target.
- [[Estrogen]] — AKT activation downstream of PIK3CA phosphorylates and activates the ER, explaining both the ER-positive enrichment of PIK3CA mutations and the endocrine resistance they confer.
- [[Endometrial Cancer]] — PIK3CA is one of the dominant altered genes in endometrioid endometrial carcinoma, alongside PTEN, CTNNB1 and KRAS.
- [[KRAS]] — RAS-GTP directly binds the PIK3CA RBD, and KRAS and PIK3CA frequently co-occur in colorectal cancer where the two cooperate on the same proliferative output.
- [[Homologous Recombination]] — BRCA1/2 and other DNA-repair alterations are mutually exclusive with PIK3CA in breast cancer, which has practical implications for selecting PARP-inhibitor versus PI3K-inhibitor strategies.

## Linking Summary
- New links added: [[PI3K-Akt Signaling]], [[Breast Cancer]], [[PTEN]], [[Akt]], [[mTOR]], [[Estrogen]], [[Endometrial Cancer]], [[KRAS]], [[EMT]], [[Wnt]], [[Homologous Recombination]], [[Everolimus]], [[Metastasis]], [[Hallmarks of Cancer]]
- Suggested notes to create: [[PIK3R1]], [[PTPN11]], [[INPP4B]], [[AKT1]], [[ERBB2]], [[TP53]], [[MAP3K1]], [[Epidermal Growth Factor Receptor]], [[Alpelisib]], [[Fulvestrant]], [[Capivasertib]], [[PIK3CA-related Overgrowth Spectrum]], [[CLOVES Syndrome]], [[Aromatase Inhibitor]] — removed as already existing: CDH1, Cyclin D1
- Strong connections to strengthen: [[PIK3CA]] ↔ [[PI3K-Akt Signaling]], [[PIK3CA]] ↔ [[PTEN]], [[PIK3CA]] ↔ [[Breast Cancer]], [[PIK3CA]] ↔ [[Endometrial Cancer]]
