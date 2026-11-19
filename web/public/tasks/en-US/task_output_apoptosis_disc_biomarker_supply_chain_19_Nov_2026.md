---
title: Apoptosis and DISC biomarker supply chain — sensors, detection, availability and pricing
description: Procurement audit of the commercially available detection routes for the CD95 DISC / c-FLIP / caspase-8 biomarker stack: antibody and assay-kit catalogue numbers with list prices and source URLs, live-cell caspase reporters and biosensor platforms, recombinant proteins, genetic tools and chemical probes, plus lead times, shipping and cold-chain constraints, price visibility, QC documentation and discount structure. Establishes that caspase-8 activity is a stocked commercial market while isoform-resolved c-FLIP and c-FLIP recruitment to the DISC have no commercial detection route.
created: 2026-11-19
updated: 2026-11-19
type: task-output
tags:
  - task-output
  - cell-death
  - apoptosis
  - procurement
  - supply-chain
  - antibodies
  - assays
  - biosensors
source: web research (2026-11-19) against vendor catalogue pages, distributors and institutional core facilities
---

# Apoptosis and DISC biomarker supply chain — sensors, detection, availability and pricing

## The question this document addresses

The task output on the procaspase-8 : c-FLIP ratio ([[task_output_cflip_caspase8_disc_ratio_kinetics_19_Nov_2026]]) concluded that what decides CD95-mediated cell fate is the *local* composition of the DISC: c-FLIP occupying FADD DED-binding sites versus procaspase-8 homodimers, with a bell-shaped p43-FLIP response and a ligand threshold set by c-FLIP abundance versus activated receptor number. Every number in that argument is a modelled or literature-derived quantity, and its central variable — the cFLIP : procaspase-8 ratio *at the DISC* — has not been measured in any cell to date.

This audit asks the prior question: **can it be measured, by a lab that can buy the reagents, at a price and lead time that fit a normal grant?**

The short answer is split:

> [!important] The detection market for caspase signalling is well stocked; the detection market for the DISC itself does not exist.
> Caspase-8 *activity* has at least eight commercial routes with published prices between $49 and $1,225 per reagent. c-FLIP *recruitment to the DISC*, p43-FLIP as a species, c-FLIP_R as a distinct isoform, and DISC stoichiometry have **no commercial detection route at all** — no antibody, no kit, no recombinant protein, no sensor. The c-FLIP_L : c-FLIP_S ratio is the partial exception: two isoform-resolved clones exist at Abcam (ab314747, ab323748) plus one at Santa Cruz (sc-136160), but all three are **Western-blot only**, and none carries published knockout validation. Every published measurement of DISC composition rests on quantitative mass spectrometry (Schleich 2012; Dickens 2012) or on reconstituted-filament structural biology (Hughes 2016; Fu 2016; Yang 2024), i.e. on core-facility capability rather than catalogue SKUs.

## How to read this audit

**Prices.** All prices are list prices in the currency shown, observed on the page URL given, on **19 November 2026**. Where a vendor does not publish prices, the entry reads *price not published — quote required*; no price is inferred. Pack sizes are given because a $351 antibody (100 µl) and a $351 kit (100 assays) are not comparable quantities.

**Three detection chemistries are not interchangeable**, and vendor marketing frequently blurs them:

| Chemistry | Detects | Does *not* detect |
| --- | --- | --- |
| Fluorogenic peptide substrate (IETD-AFC, DEVD-AMC, LEHD-AFC) | Free enzyme activity cleaving a synthetic peptide | The cleaved cellular protein; the complex; the isoform |
| Antibody against a cleavage product (cleaved caspase-8 Asp374/Asp387, cleaved caspase-3 Asp175, cleaved PARP) | The cleaved fragment, in lysate, tissue or cells | Whether the cleavage happened enzymatically, and where |
| Covalent affinity label in intact cells (FAM/FITC-IETD-FMK, LEVD-FMK) | The amount of *active* enzyme present at the moment of addition, irreversibly trapped | Continuous kinetics (it is an endpoint), and DISC occupancy |

A third-order specificity problem sits inside the first chemistry: the common "caspase-8" substrates are not caspase-8-exclusive. Cayman lists **Ac-VEID-AMC (14989) as caspase-6 *and* -8** and **Ac-IEPD-pNA (27139) as caspase-8 *and* granzyme B**; Enzo's **Ac-IETD-AMC (ALX-260-042)** is a caspase-8/10/6 + granzyme B substrate. Any paper claiming "caspase-8 activity" from a peptide readout has measured a caspase-8-containing activity, not caspase-8.

**Evidence tiers.** The vault's scientific tier 4 = in-vitro or cellular measurement, tier 5 = modelling or hypothesis; every reagent claim in this document is tier 4 (a catalogue or vendor-document fact) or tier 5 (a projection about what a laboratory could measure). The Tier 1–3 labels used below are **procurement classes**, not evidence tiers.

**A note on catalogue churn.** Novus Biologicals now redirects into R&D Systems (Bio-Techne), so a second quote route for niche apoptosis antibodies has been removed by consolidation.

## Procurement tiers

### Tier 1 — Stocked, priced, purchasable today

| Need | Route | Cost | Lead time |
| --- | --- | --- | --- |
| Total c-FLIP (WB) | CST FLIP (D5J1E) mAb #56343 | $161 / 20 µl; $351 / 100 µl | Next-day (CST: "next-day delivery on 99% of CST products for orders received by 7:30 PM EST") |
| c-FLIP_L isoform-specific (WB) | Abcam FLIP-L [EPR27008-110] #ab314747, recombinant mAb | $220 / 20 µl; $640 / 100 µl | Standard; human |
| c-FLIP_S isoform-specific (WB) | Abcam FLIP-S short isoform [EPR29011-104] #ab323748, recombinant mAb | $257 / 20 µl; $640 / 100 µl | Standard; human |
| Cleaved caspase-8 (WB) | CST #9496 (Asp374, 18C8) or #8592 (Asp387, D5B2) | Per CST size table | Next-day |
| Caspase-8 activity (plate, lysate) — cheapest per assay | Cayman Ac-IETD-AFC #17480 | $49 / 1 mg; $213 / 5 mg (thousands of assays at 0.5 µM) | 1–3 business days if in stock |
| Caspase-8 activity (live cells) | Vybrant FLICA Caspase 8 #V35119 (FAM-LETD-FMK) | $350 / 25 assays | Standard |
| Caspase-8 activity (live cells, true IETD) | Calbiochem Caspase-8 Detection Kit #QIA1131KIT (FITC-IETD-FMK) | $1,225 (Fisher CA) / £724 excl. VAT (UK) | UK listing flagged "being discontinued, order up to available stock" |
| Apoptosis (flow) | CST Annexin V-PE Early Apoptosis Detection Kit #40295 | $570 / 100 assays | Next-day |
| Caspase-3/7 real-time (plate) | Promega Caspase-Glo 3/7 #G8091 (100 assays) | €528 (Promega Italy list; Promega publishes no prices on its own site) | Standard |
| Caspase-8 activity, cheapest kit | Beyotime C1151 / C1152 (colourimetric, Ac-LEVD-pNA) | $94 / 20 tests; $325 / 100 tests | Global catalogue, no regional lock |
| Caspase-3/7 real-time (flow) | Thermo CellEvent Caspase-3/7 #C10427 | $552 / 100 assays | Standard |
| Caspase-3/7 FRET/FLIM biosensor | Evrogen Casper3-GR #FP971 | €400 | RUO; "not available in certain countries" |

### Tier 2 — Available but constrained, gated, or chemistry-limited

| Need | Route | Constraint |
| --- | --- | --- |
| Caspase-8 activity, colourimetric | RayBiotech #MACO-CASP8-1 $349; APExBIO #K2012 $179 (25 tests); MyBioSource #MBS9718958 $205 (20 tests) | Substrate cross-reactivity (see above) |
| Caspase-8 activity, multiplexed 3/7+8+9 | AAT Bioquest #22820 | $594 / 100 tests; three fluor channels in one well |
| Caspase-8 live-cell affinity label | Bio-Rad ICT099 $321; FAM-FLICA (ICT) F0015 $354 / 25, $1,020 / 100; AAT Cell Meter #20115 $355 | Bio-Rad SKU flagged *NotForSaleInCountries: KR*; covalent, endpoint only |
| Caspase-8 genetic perturbation | Horizon HAP1 CFLAR KO (2 clones); Ubigene CASP8 KO "starting at $1,490" (promo $990); EditCo CASP8/FAS KO quote-only | Horizon ≈$3,000 per single-gene HAP1 KO line |
| c-FLIP knockdown | Thermo Silencer siRNA CFLAR #AM16708 $233; OriGene shRNA $1,013/kit; Santa Cruz Cas9 plasmid #sc-400147 $397 | 2–5 weeks for viral/CRISPR delivery formats |
| c-FLIP overexpression | Addgene pLJM1 flag-cFLIP #211529 $94 (academic); Ad-FLIP adenovirus (Vector BioLabs #1525) $475 | Not isoform-specific; Addgene is academic/nonprofit only |
| Caspase-8/c-FLIP_L heterodimer probe | ProbeChem FLIPinB #PC-23804; FLIPinBγ #PC-23805; Ambinter Amb1202053 / Amb37832612 (the originating supplier) | Quote-only at every size; **not** listed at MedChemExpress, Selleck, Cayman or Tocris |
| Caspase-8 FRET/FLIM reporter | **None commercial** | Bespoke cloning only (academic precedent: Porubský et al. 2022) |
| Classic caspase activity kits (category contraction) | Biotium #30008, #30011, #30012; Thermo/Invitrogen C12440, C12441, B21240, A13279, F21970, 13031, 13221, K117, A13148, B8884 | Biotium's render as discontinued at $0; Thermofisher.com returns `SKU_NOT_FOUND`. Both must be re-sourced, not re-ordered |
| Caspase-8 / -9 activity kits | Cayman ships substrates only (Ac-IETD-AFC #17480, Ac-LEHD-pNA #24570) | No kit from Cayman; assemble from substrate plus your own protocol |
| Multiplex death panel | MSD U-PLEX (Caspase-1, Caspase-3, PARP only); RayBiotech arrays (cytokine/proteome/MAPK); Olink PEA (no prices) | No cleaved-species panel covering caspase-3/8/9 + PARP + RIPK1/3/pMLKL is obtainable |

### Tier 3 — No commercial route; core facility or bespoke

| Need | Why it is absent | Closest route |
| --- | --- | --- |
| c-FLIP_R isoform-specific antibody | No product found at any vendor checked; only c-FLIP_L (Abcam #ab314747) and c-FLIP_S (Abcam #ab323748) have isoform-resolved clones | Isoform-resolved mass spectrometry (Schleich 2016: c-FLIP and procaspase-10 are ~10-fold lower than procaspase-8 in the DED chain) |
| Isoform resolution in any application other than Western blot | The two Abcam isoform clones and SCBT sc-136160 are validated for WB only; no IF, flow, IHC or ELISA validation is published for them, and no knockout validation is claimed on any of the three pages | Custom conjugate or validation of the clones in-house |
| Phospho-RIPK3 (Ser358) and phospho-MLKL (Ser16) | Neither site exists in the human numbering used by the antibodies (RIPK3 Ser358 is the mouse-equivalent; MLKL Ser16 is not an MLKL site at all) | Buy the human-equivalent products: RIPK3 Ser227 (CST #93654, Abcam #ab209384); MLKL Thr357/Ser358 (CST #91689, Abcam #ab187091) |
| Cytochrome c "released" as a species | Every vendor sells total cytochrome c only; SCBT A-8 (#sc-13156) recognises holo- **and** apocytochrome c, so release cannot be read from it | Fractionation plus a total-protein control, or APExBIO K2104 (the only release-detection kit found) |
| p43-FLIP as a species | No p43-FLIP-specific antibody is a catalogue product; CST #56343 lists "subunit p43" only as an alternate name and reports MW 55/25 kDa, not the 43 kDa species | Custom antibody against Asp376-cleaved c-FLIP_L + own validation |
| The antibodies the reference papers actually use | c-FLIP clone NF6, caspase-8 clone C15 and FADD clone 1C4 are DKFZ in-house clones obtained by collaboration (Krammer lab), not catalogue SKUs; NF6 is what resolves the p43-FLIP band | Obtain by collaboration, or reproduce the DISC panel with catalogue clones and your own validation |
| c-FLIP recruitment / DISC occupancy | No sensor, assay or binder reports occupancy | Reconstituted DED-filament structural biology (Hughes 2016; Yang 2024) or proximity labelling + MS |
| Isoform-pure, functionally validated recombinant c-FLIP | Every catalogue "FLIP" protein is full-length (L) and unvalidated for function, denatured, or ambiguously "transcript variant 3" | Express it yourself: Salvesen ΔDED FLIP-L (Addgene #13790) and cleavage-resistant ΔDED FLIP-L D375A (#13791), or contract a CDMO |
| Caspase-8 prodomain as a standalone protein | Not sold | Make it, or use the Salvesen plasmids |
| Caspase-8 electrochemical/FET biosensor | All published devices are academic constructs | Academic literature (ACS Omega 2025, 10:34106–34122) |
| Cleaved caspase-8 / -9 sandwich ELISA | No vendor in scope sells one; RayBiotech's "Caspase-8 ELISA" (ELH-CASP8-1) is total-protein | Antibody Western (Beyotime AG1330 / AG1334) |
| DISC-assembly or death-receptor signalling kit | None found at any vendor reached | Immunoprecipitate the DISC and immunoblot it |
| Commercial cytochrome-c-release kit other than APExBIO K2104 | Every other vendor sells cytochrome-c antibodies only | APExBIO K2104, $1,095 |

## Antibodies

### Antibodies by target, vendor, catalogue and price

*(catalogue-level survey; see the availability section for the price-visibility caveats)*

| Target | Vendor | Catalogue no. | Clone / host / conjugate | Validated applications | List price (USD) | Source URL (19 Nov 2026) |
| --- | --- | --- | --- | --- | --- | --- |
| Total c-FLIP (all isoforms) | Cell Signaling Technology | 56343 (20 µl 56343T / 100 µl 56343S) | FLIP (D5J1E) Rabbit mAb, recombinant | WB, IP; H/M/R; "recognizes both the long and short isoforms of FLIP" | $161 / $351 | cellsignal.com/products/56343 |
| Total c-FLIP, carrier-free | Cell Signaling Technology | 96297 | FLIP (D5J1E) Rabbit mAb (BSA/azide free) | WB | price per CST size table | cellsignal.com/products/96297 |
| c-FLIP (conjugated, IF) | Proteintech | CL488-10394 | CoraLite Plus 488 CFLAR/FLIP Polyclonal (RRID AB_3672439; immunogen aa 31–184) | IF/ICC; KD/KO-validated badge; H/M | price not published on page (bulk quote only) | ptglab.com/products/CFLAR-FLIP-Antibody-CL488-10394.htm |
| Cleaved caspase-8 (Asp374) | Cell Signaling Technology | 9496 | 18C8 Rabbit mAb | WB; H | per CST size table | cellsignal.com/products/9496 |
| Cleaved caspase-8 (Asp387) | Cell Signaling Technology | 8592 (14071 PE conjugate) | D5B2 Rabbit mAb | WB; IF; flow (14071) | per CST size table | cellsignal.com/products/8592 |
| Cleaved caspase-3 (Asp175) | Cell Signaling Technology | 9664 (14070 conjugate) | 5A1E Rabbit mAb | WB, IP, IHC, IF, flow | $274 / 100 µl (Labome listing; CST list per size table) | labome.com/product/Cell-Signaling-Technology/9664S.html |
| **c-FLIP_L isoform-specific** | Abcam | ab314747 | FLIP-L [EPR27008-110] Rabbit recombinant mAb | WB (human) | $220 (20 µl); $640 (100 µl) | abcam.com/en-us/products/primary-antibodies/flip-l-antibody-epr27008-110-ab314747 |
| **c-FLIP_S isoform-specific** | Abcam | ab323748 | FLIP-S short isoform [EPR29011-104] Rabbit recombinant mAb | WB (human) | $257 (20 µl); $640 (100 µl) | abcam.com/en-us/products/primary-antibodies/flips-short-isoform-antibody-epr29011-104-ab323748 |
| c-FLIP_L (labelled isoform-specific) | Santa Cruz | sc-136160 | FLIP-L (5D8) Mouse mAb, 50 µg/0.5 ml | WB, IP, ELISA | $322 | scbt.com/p/flipl-antibody-5d8 |
| c-FLIP total | Proteintech | 10394-1-AP | Rabbit polyclonal (RRID AB_2081087) | WB, IHC, IF/ICC, IP, ELISA; KD/KO badge | $149 (20 µl); $449 (150 µl) | ptglab.com/products/CFLAR-FLIP-Antibody-10394-1-AP.htm |
| procaspase-8 | Abcam | ab108333 | [EPR162] Rabbit recombinant mAb | WB, IHC-P | $225 starts | abcam.com/en-us/products/primary-antibodies/pro-caspase-8-antibody-epr162-ab108333 |
| procaspase-8 | Cell Signaling Technology | 4790 / 8873 / 9746 | D35G2 / F5K9P / 1C12 | WB; WB, WB-simple, IHC; WB | $151 / $161 / $147 (20 µl) | cellsignal.com/products/4790 |
| Cleaved caspase-8 (Asp387), mouse | Cell Signaling Technology | 8592 | D5B2 Rabbit mAb | WB, IF, F | $179 (20 µl); $446 (100 µl) | cellsignal.com/products/8592 |
| Cleaved caspase-8 (Asp387), p10 subunit | Cell Signaling Technology | 16709 | E8K5S Rabbit mAb | WB, IP | $194 (20 µl) | cellsignal.com/products/16709 |
| Caspase-8 p43/p18 | Proteintech | 66093-1-Ig | Mouse recombinant mAb | WB, IHC, IF/ICC, IP, CoIP, ELISA | $149 (20 µl); $449 (150 µl) | ptglab.com/products/Caspase-8-p43-p18-Antibody-66093-1-Ig.htm |
| Cleaved caspase-3 (Asp175) | Cell Signaling Technology | 9664 / 9661 | 5A1E mAb / polyclonal | WB, IP, IHC-P, IF/ICC, F | $169 / $148 (20 µl) | cellsignal.com/products/9664 |
| Cleaved caspase-3 (Asp175), KO-validated | Abcam | ab32042 | [E83-77] Rabbit mAb | WB, IF | $230 starts (20 µl); $675 (100 µl) | abcam.com/en-us/products/primary-antibodies/cleaved-caspase-3-antibody-e83-77-ab32042 |
| Cleaved PARP1 (Asp214) | Cell Signaling Technology | 9541 / 5625 | polyclonal / D64E10 mAb | WB; WB, IF/ICC, F | $148 / $186 (20 µl) | cellsignal.com/products/9541 |
| Cleaved PARP1 (Asp214), KO-validated | Abcam | ab32064 | [E51] Rabbit mAb | WB, IHC | $140 starts | abcam.com/en-us/products/primary-antibodies/cleaved-parp1-antibody-e51-ab32064 |
| RIPK1 | Cell Signaling Technology | 3493 / 73271 | D94C12 / E8S7U | WB, IF/ICC, F; WB, IP, IHC, IF | $161 / $204 (20 µl) | cellsignal.com/products/3493 |
| Phospho-RIPK1 (Ser166), human | Cell Signaling Technology | 65746 / 44590 | D1L3S / D8I3A | WB; WB, IF/ICC, F | $223 / $178 (20 µl) | cellsignal.com/products/65746 |
| RIPK3 | Cell Signaling Technology | 10188 / 13526 | E7A7F / E1Z1D | WB, IP, IHC, IF, F; WB | $187 / $161 (20 µl) | cellsignal.com/products/10188 |
| Phospho-RIPK3 (Ser227), human | Cell Signaling Technology | 93654 | D6W2T Rabbit mAb | WB, IF | $197 (20 µl); $417 (100 µl) | cellsignal.com/products/93654 |
| Phospho-MLKL (Ser358), human | Cell Signaling Technology | 91689 | D6H3V Rabbit mAb | WB | $197 (20 µl); $415 (100 µl) | cellsignal.com/products/91689 |
| Phospho-MLKL (Ser345), mouse | Cell Signaling Technology | 37333 | D6E3G Rabbit mAb | WB, IF/ICC | $197 (20 µl) | cellsignal.com/products/37333 |
| BID (total + 15 kDa cleaved) | Cell Signaling Technology | 2002 | Rabbit polyclonal | WB | $136 (20 µl) | cellsignal.com/products/2002 |
| tBid-directed | Abcam | ab10640 | Rabbit polyclonal (BID cleavage site) | WB, ICC/IF | $535 starts | abcam.com/en-us/products/primary-antibodies/bid-cleavage-site-antibody-ab10640 |
| AIF | Cell Signaling Technology | 4642 / 5318 | polyclonal / D39D2 | WB, IF; WB, IP, IHC, IF/ICC | $368 (100 µl) / $159 (20 µl) | cellsignal.com/products/5318 |
| FADD | Cell Signaling Technology | 2782 | Rabbit polyclonal | WB | $135 (20 µl) | cellsignal.com/products/2782 |
| ASC/TMS1 | Cell Signaling Technology | 13833 | E1E3I Rabbit mAb | WB, IP, IHC | $161 (20 µl) | cellsignal.com/products/13833 |
| XIAP | Cell Signaling Technology | 14334 | D2Z8W Rabbit mAb | WB, IP, IHC | $167 (20 µl) | cellsignal.com/products/14334 |
| c-IAP1 | Cell Signaling Technology | 96099 | F7C3U Rabbit mAb — the only c-IAP1 product documented not to cross-react with c-IAP2 | WB, IP, F | $161 (20 µl) | cellsignal.com/products/96099 |
| c-IAP2 | Proteintech | 24304-1-AP | Rabbit polyclonal (RRID AB_2879485) | WB, IHC, IF/ICC, IP, ELISA | $149 (20 µl); $449 (150 µl) | ptglab.com/products/BIRC3-Antibody-24304-1-AP.htm |
| Cleaved caspase-8 (Asp384) | GeneTex | GTX86893 | Rabbit mAb (RRID AB_10722501) | WB, IHC-P | $419 (100 µg) | genetex.com/Product/Detail/Caspase-8-cleaved-Asp384-antibody/GTX86893 |
| Caspase-8 total | Enzo | ADI-90576 | 5F7 Mouse mAb | WB | $439 | enzo.com/product/caspase-8-monoclonal-antibody-5f7/ |

**Isoform resolution — partially available.** This is the one place where the catalogue is better than the earlier draft of this audit claimed. Two isoform-resolved clones exist: Abcam **ab314747** (FLIP-L, [EPR27008-110]) and **ab323748** (FLIP-S short isoform, [EPR29011-104]), both rabbit recombinant monoclonals, both validated for **Western blot only** in human, at $220 and $257 per 20 µl. Santa Cruz **sc-136160** (5D8, FLIP-L) is labelled isoform-specific but its epitope (aa 1–376) spans both isoforms; Santa Cruz's own support answer concedes that the blot shows only the 55 kDa long form, so its specificity is empirical rather than epitope-based. CST's entire CFLAR catalogue remains two total-FLIP SKUs (56343, 96297; plus 8510 and the discontinued polyclonal 3210), with **no knockout claim on the product page**. No c-FLIP_R-specific antibody was found at any vendor, and CST's `productsitemap.xml` returns "p43" only as tdp43/gap43 — there is no p43-FLIP product.

### Validation caveats to carry into the purchasing file

"Validated" is not "knockout-validated". Explicit KO/KD flags are carried by Abcam ab32042 (cleaved caspase-3), ab32064 (cleaved PARP), ab110315, ab191217 (PARP1), ab125072 (RIPK1) and by the Proteintech lines; CST validates application and reactivity but generally does not publish knockout evidence. Specific vendor caveats that matter for this panel:

- CST #8510 (D16A8) detects an unknown band at ~70 kDa; #4790 (D35G2) may cross-react with overexpressed caspase-10; #14993 (MLKL) cross-reacts with an unidentified 130 kDa protein; #9661 detects non-specific caspase substrates; #9496 detects an unknown 25 kDa band; #8762 (BID 3C5) does **not** recognise endogenous tBid.
- Abcam ab316923 (phospho-RIPK1 Ser166) reacts with transfected lysate and synthetic phospho-peptide; endogenous specificity is not demonstrated on the page.
- Low-provenance clones: Abcam ab2236 (ASC), ab227194 (FLIP), ab226297 (RIPK3), ab62469 (BID) carry 1–9 citations.

### Price benchmarks for negotiation

| Vendor | 20 µl / small | 100 µl | 300 µl / bulk |
| --- | --- | --- | --- |
| Cell Signaling Technology | $135–$186 | $314–$482 | $761–$1,043 (300 µl); carrier-free #96297 $865 / 100 µl |
| Proteintech | $149 (20 µl) | $449 (150 µl) | $3,592 (10 × 150 µl); PBS-only formats $699 / 100 µg |
| Abcam | $140–$670 "starts from" | $530–$675 (buy box) | µg-based formats |
| Santa Cruz | $322 flat (200 µg/ml) | — | conjugates $336–$424 |
| GeneTex | — | $419 / 100 µg | — |

CST and Santa Cruz sell volume-based (µl) formats while Abcam and Proteintech sell mass-based (µg) formats, so unit prices are not directly comparable without the stated concentration. No audited vendor publishes a standing volume-tier schedule; all figures above are single-unit list prices.

### The antibodies the field's own papers use

Methods sections of the primary DISC papers name the reagents that actually produced the figures, and a substantial fraction of them are **not catalogue products**:

| Target | Reagent used in the literature | Commercial route |
| --- | --- | --- |
| c-FLIP | Clone NF6 (DKFZ, Krammer lab) — also the antibody that resolves the p43-FLIP band | **Gift/collaboration only**; catalogue equivalents are total-FLIP and do not list a 43 kDa species |
| procaspase-8 | Clone C15 (DKFZ) | Collaboration; CST 4790 / 9746 are catalogue substitutes |
| FADD | Clone 1C4 (DKFZ) | Collaboration; CST 6002 is a catalogue substitute |
| Cleaved caspase-8 | 18C8, CST #9496 (Asp374) | Catalogue |
| Cleaved caspase-3 | 5A1E, CST #9664 / 9661 (Asp175) | Catalogue |
| CD95 | sc-715 (C-20), Santa Cruz | Catalogue |
| pMLKL | ab187091, Abcam; CST #14933 | Catalogue |
| RIPK3 | ab226297, Abcam; phospho-RIPK3 Ser227 CST #93654 | Catalogue |
| caspase-10 | M059-3, MBL International | Catalogue |
| Bid, XIAP, PARP, RIPK1 | CST #2002, #14334, #9542, #3493 | Catalogue |

The practical consequence is that the reagents behind the published DISC figures are partly unobtainable, so a replication attempt does not start from the same reagent set even when it starts from the same protocol.

## Assay kits and activity reagents

### Caspase activity kits — chemistry A (synthetic peptide)

| Product | Vendor | Catalogue no. | Format | Pack | Price (USD) | Source URL (19 Nov 2026) |
| --- | --- | --- | --- | --- | --- | --- |
| Caspase 8 Activity Assay Kit (colourimetric, **Ac-LEVD-pNA**) | Beyotime | C1151 / C1152 | Colourimetric 405 nm | 20T / 100T | $94.06 / $325.46 | beyotime.com/product/C1151.htm |
| Fluorometric Caspase 8 Activity Assay Kit | Beyotime | C1155S / C1155M | Fluorometric | 20T / 100T | $109.08 / $357.30 | beyotime.com |
| Caspase-8 Activity Assay Kit (colourimetric) | Elabscience | E-CK-A388 | Colourimetric | 20 / 100 assays | $68 / $228 | elabscience.com/p/caspase-8-activity-assay-kit-colorimetric-method--e-ck-a388 |
| Caspase-8 Colorimetric Assay Kit | APExBIO | K2013 | Colourimetric, IETD-class | 25 / 100 assays | $179 / $403 | apexbt.com/caspase-8-colorimetric-assay-kit.html |
| Caspase-8 Fluorometric Assay Kit | APExBIO | K2012 | Fluorometric IETD-AFC | 25 / 100 / 200 / 400 | $179 / $403 / $615 / $986 | apexbt.com/caspase-8-fluorometric-assay-kit.html |
| Caspase-8 Activity Assay Kit (colourimetric) | RayBiotech | MACO-CASP8-1 | IETD-pNA, lysate | — | $349 | raybiotech.com/caspase-8-activity-assay-kit-ma-casp8 |
| Caspase-8 Activity Assay Kit (colourimetric) | MyBioSource | MBS9718958 | Ac-IETD-pNA | 20 / 50 / 100 | $205 / $235 / $305 | mybiosource.com/assay-kits/caspase-8/9718958 |
| Caspase-8 Activity Assay Kit | Tribioscience | TBS2037F-1 | Fluorometric (page text says DEVD-AFC — **documentation error**) | 100 tests | $360 | tribioscience.com |
| AffiASSAY Caspase-8 Fluorometric Kit | AffiGEN | AFG-BV-0177 | IETD-AFC | 100 assays | $525 | affiassay.com |
| Caspase-8,10 Activity Fluorometric Kit | UBP Bio | J7110 | IETD-AFC + DEVD-AFC + Z-VAD-FMK + TRAIL-lysed control | 250 assays | $430 | ubpbio.com |
| Caspase 3/7 Cell-Based Activity Assay Kit | Cayman | 702790 | Fluorometric DEVD-AFC; −80 °C, ECCN 0 | 96-well plate | $385 (€492) | caymanchem.com (replaces legacy 10009135) |
| Caspase-3/7 Activity Assay Kit | Beyotime | C1115 / C1116 | Colourimetric | 20T / 100T | $86.55 / $301.29 | beyotime.com |
| Caspase-9 Activity Assay Kit | Beyotime | C1157 / C1158 | Colourimetric LEHD-pNA | 20T / 100T | $96.51 / $327.42 | beyotime.com/product/C1157.htm |
| Caspase 3/7 Activity Assay Kit | Elabscience | E-CK-A383 | Colourimetric DEVD-pNA | 20 / 100 | $68 / $228 | elabscience.com |
| Caspase-3 Activity Assay | Enzo | AKR-MA-0191 | Colourimetric | 25 wells / 96-well | $155 / $439 | enzo.com/product/caspase-3-activity-assay/ |
| Caspase-3 Colorimetric Assay Kit | APExBIO | K2008 | Colourimetric | 25 / 100 | $179 / $403 | apexbt.com/caspase-3-colorimetric-assay-kit.html |
| Caspase-Glo 3/7 Assay System | Promega | G8090 (25 assays) / G8091 (100) / G8092 (1,000) | Luminescent, DEVD-amidino-luciferin | — | €528 for G8091 in the Promega Italy list price table; **no price published on promega.com** | promega.com/products/cell-health-assays/apoptosis-assays/caspase_glo-3_7-assay-systems/ |
| Caspase-Glo 8 Assay | Promega | G8202 (100 mL) | Luminescent | — | price not published — quote required | promega.com (catalogue page via cell-notes PDF) |

**Three catalogue contractions in this category** (each verified on 19 Nov 2026):

- **Biotium has withdrawn its caspase substrate kits.** #30008 (caspase-3 DEVD-R110), #30011 (caspase-8 IETD-R110) and #30012 (caspase-8 HTS) all render as "discontinued", price $0, out of stock. Its NucView live-cell caspase-3 line (#30029, from $118) and Annexin/JC-1 lines survive.
- **Thermo Fisher/Invitrogen's classic caspase kits are delisted.** C12440, C12441, B21240, A13279, F21970, 13031, 13221, K117, A13148 and B8884 each return `SKU_NOT_FOUND` in thermofisher.com's own product JSON. Do not quote them from older papers.
- **Cayman sells caspase-3/7 as a kit (702790) but caspase-8 and caspase-9 as substrates only** — Ac-IETD-AFC #17480, Ac-IETD-pNA #24568, Ac-LEHD-pNA #24570, Ac-LETD-AFC #14991, Ac-VEID-AMC #14989.

### In-cell reporters — chemistry C (activity in intact cells)

| Product | Vendor | Catalogue no. | Chemistry | Pack | Price (USD) | Source URL |
| --- | --- | --- | --- | --- | --- | --- |
| Vybrant FLICA Caspase 8 Kit | Thermo Fisher | V35119 | FAM-LETD-FMK covalent affinity label | 25 assays | $350 | thermofisher.com/order/catalog/product/V35119 |
| Calbiochem Caspase-8 Detection Kit | MilliporeSigma | QIA1131KIT | FITC-IETD-FMK; includes Z-VAD-FMK competitor | — | $1,225 (Fisher CA); £724 excl. VAT (UK, "being discontinued") | fishersci.ca/shop/products/calbiochem-caspase-8-detection-kit-fitc-ietd-fmk/QIA1131KIT |
| FAM-FLICA Caspase 8 Assay Kit | ICT | F0015 | FAM-LETD-FMK | 25 / 100 tests | $354 / $1,020 | lktlabs.com/product/fam-flica-caspase-8-assay-kit |
| FAM FLICA Caspase-8 Kit | Bio-Rad (ICT) | ICT099 | FAM-LETD-FMK | 25 tests | $321 | labome.com/product/Bio-Rad/ICT099.html |
| Cell Meter Live Cell Caspase 8 Binding Kit | AAT Bioquest | 20115 / 20116 | FAM-LETD-FMK / iFluor647-LETD-FMK | 25 tests | $355 (green) | vareum.com |
| Cell Meter Caspase 8 Activity Kit (Red/Green/Blue) | AAT Bioquest | 22816 / 22798 / 22812 | Ac-IETD-ProRed / (Ac-IETD)₂-R110 | 100 / 200 tests | $237 / $237 (red, green) | vareum.com |
| Cell Meter Multiplexing Caspase 3/7, 8, 9 Kit | AAT Bioquest | 22820 | DEVD-ProRed + IETD-R110 + LEHD-AMC, one well | 100 tests | $594 | vareum.com |
| Caspase-8 Activity Detection Substrate for Flow | Elabscience | E-CK-A488 | In-cell flow | 20 / 100 assays | $210 / $480 | elabscience.com |
| FLICA Caspase-8 Assay Kit | ICT | #99 / #910 | FAM-LETD-FMK | 25T / 100T | $246.30 / $647.45 | immunochemistry.com/products/fam-flica-caspase-8-assay-kit-99 |
| CellEvent Caspase-3/7 Green Flow Kit | Thermo Fisher | C10427 / C10740 | DEVD-dye, no wash | 100 / 20 assays | $552 / $158 | thermofisher.com/order/catalog/product/C10427 |
| Magic Red caspase-3/7 | Bio-Rad (ICT) | 936 / 935 | MR-(DEVD)₂, non-cytotoxic | 100 / 25 tests | $572.95 / $210.20 | antibodiesinc.com |
| Muse Caspase-3/7 Kit | Cytek | MCH100108 | No-wash, mix-and-read | 100 tests | $679 | cytekbio.com/products/muse-caspase-37-kit |
| GreenNuc caspase-3 (live cell) | Beyotime | C1168S / C1168M | In-cell fluorogenic DEVD | 20–40T / 100–200T | $72.02 / $280.06 | beyotime.com |
| NucView 488 caspase-3 (live cell) | Biotium | 30029 | In-cell fluorogenic | 25 / 100 assays | from $118 | biotium.com/product/nucviewtm-488-caspase-3-assay-kit-for-live-cells/ |
| Casper3-GR FRET/FLIM sensor | Evrogen | FP971 | TagGFP–DEVD–TagRFP; FLIM 1.5→2.5 ns | 20 µg | €400 | evrogen.com/products/Casper3-GR/Casper3-GR.shtml |

### Cleaved-protein detection (chemistry B) and apoptosis/viability kits

| Product | Vendor | Catalogue no. | Detects | Pack | Price (USD) | Source URL |
| --- | --- | --- | --- | --- | --- | --- |
| Cleaved-Caspase-3 (D175) ELISA Kit | RayBiotech | PTE-CASP3-D175-1 | Cleaved caspase-3 protein | 1 plate | $521 | raybiotech.com/cleaved-caspase-3-d175-elisa-kit-pte-casp3-d175 |
| Cleaved caspase-3 + total caspase-3 ratio ELISA | RayBiotech | PTE-CASP3-D175-T | Cleaved over total | 1 / 2 / 5 plates | priced on page | raybiotech.com |
| "Human Caspase-3 ELISA Kit" | RayBiotech | ELH-CASP3-1 | **Total** caspase-3 (not cleaved-specific) | 1 / 2 / 5 plates | $499 | raybiotech.com |
| "Human Caspase-8 ELISA Kit" | RayBiotech | ELH-CASP8-1 | **Total** caspase-8 | 1 / 2 / 5 plates | $519 | raybiotech.com |
| Cleaved Caspase-8 / -9 antibodies | Beyotime; Elabscience | AG1330 / AG1334; AN302522L / AN302526L | Cleaved caspase-8 / -9 | 50 µl | $115–163 per antibody | beyotime.com; elabscience.com |
| Cleaved PARP-1 (Asp214) mAb; p85 mAb | Beyotime | AG1043; AG1050 | Cleaved PARP-1 | 50 µl | $162.97 each | beyotime.com |
| Cleaved Caspase-3 mAb | Beyotime | AC033 | Cleaved caspase-3 | 50 µl | $165.42 | beyotime.com |
| Annexin V FITC / APC / PE Assay Kits | Cayman | 600300 / 601410 / 601420 | PS externalisation | 100 tests | $359 / $447 / $447 | caymanchem.com |
| Early Apoptosis Detection Kit (Annexin V + TMRE + DAPI + TO-PRO-3) | Cayman | 601360 | PS + ΔΨm + permeability, 4-parameter | 100 samples | $659 | caymanchem.com |
| Multi-Parameter Apoptosis Kit | Cayman | 601280 | PS + ΔΨm + necrosis | 100 samples | $468 | caymanchem.com |
| Annexin V-FITC/PI Apoptosis Kit | Elabscience | E-CK-A211 | PS + PI | 20 / 50 / 100 / 200 | $65 / $135 / $210 / $350 | elabscience.com |
| Annexin V-FITC/PI Apoptosis Kit | APExBIO | K2003 | PS + PI | 20 / 50 / 100 | $70 / $140 / $220 | apexbt.com |
| Annexin V-FITC Apoptosis Detection Kit | Abcam | ab14085 | PS | — | $765 ("Starts from $755"); abcam.cn ¥9,022 | abcam.com/en-us/products/ab14085 |
| TUNEL In Situ Kit (HRP-DAB / green FITC) | Elabscience | E-CK-A331 / A320 | DNA fragmentation | 20 / 50 / 100 | $280 / $198 (20T) | elabscience.com |
| TUNEL Apoptosis Detection Kit (DAB) | APExBIO | K2271 | DNA fragmentation | 20 / 50 rxns | $210 / $420 | apexbt.com |
| One-step TUNEL / BeyoClick EdUTP kits | Beyotime | C1086 / C1088 / C1170 series | DNA fragmentation | 20T–100T | $240–$914 | beyotime.com |
| LDH Cytotoxicity Assay Kit | Beyotime | C0016 / C0017 | LDH release | 100T / 500T | $36.42 / $100.76 | beyotime.com |
| LDH Cytotoxicity Assay Kit | Cayman | 601170 | LDH release | 96 / 480 wells | $219 / $548 | caymanchem.com |
| JC-1 MitoMP Detection Kit | APExBIO | K2002 | ΔΨm | 100 tests | $113 | apexbt.com |
| JC-1 MitoMP Flow Assay Kit | Cayman | 701560 | ΔΨm (red:green) | 500 tests | $381 | caymanchem.com |
| TMRE MitoMP Assay Kit | Cayman | 701310 | ΔΨm | 500 wells | $373 | caymanchem.com |
| **Cytochrome c Apoptosis Assay Kit** | APExBIO | K2104 | **Released** cytochrome c | 200 µg | $1,095 — the only such kit found | apexbt.com/cytochrome-c-apoptosis-assay-kit.html |
| Mitochondrial PT Pore Assay Kit | Cayman | 601430 | MPTP opening | 100 tests | $536 | caymanchem.com |
| MTT / CCK-8 metabolic viability | Beyotime; Dojindo | C0009S/M; CK04 | Metabolic viability | 500T / 100T | $41.31 / $59 | beyotime.com; dojindo.com/products/CK04/ |
| Dead Cell Stain Kits (LIVE/DEAD Fixable) | Thermo Fisher | L34959 / L34955 | Viability | 200 assays | $403 / $378 | thermofisher.com/order/catalog/product/L34959 |
| RealTime-Glo Annexin V; ApoTox-Glo Triplex; CellTiter-Glo 2.0 | Promega | G8741–G8713; G9241/G9242 | PS kinetic; triplex; ATP | — | price not published — quote required | promega.com |

### Per-test economics — the cheapest credible route per biomarker class

| Target | Cheapest credible product | Price at 100 units | Chemistry |
| --- | --- | --- | --- |
| Caspase-8 activity | Beyotime C1152 | $325 / 100T | Activity |
| Caspase-3/7 activity | Beyotime C1116 | $301 / 100T | Activity |
| Caspase-3/7 activity, kit with recombinant control | Cayman 702790 | $385 / 96-well plate ($4.01/well) | Activity |
| In-cell caspase-8 activity (flow) | Elabscience E-CK-A488 | $480 / 100 assays | Activity |
| Cleaved caspase-3 (protein) | RayBiotech PTE-CASP3-D175-1 | $521 / plate | Antibody |
| Cleaved caspase-8 / -9 | Antibodies only — Beyotime AG1330 / AG1334 | $115–163 each | Antibody |
| Cleaved PARP-1 | Beyotime AG1043 | $163 | Antibody |
| Annexin V (PS), flow | Elabscience E-CK-A211 | $1.75 / test (200-test pack) | PS |
| TUNEL, fluorescent | Elabscience E-CK-A320 | $4.98 / test | DNA fragmentation |
| ΔΨm (JC-1) | APExBIO K2002 | $1.13 / test | Potential |
| LDH release | Beyotime C0016 | $0.36 / test | Enzyme |
| Metabolic viability | Beyotime C0009S | $0.08 / test | Enzyme |
| Cytochrome c release | APExBIO K2104 | $1,095 (kit) | Antibody |
| DISC assembly / death-receptor signalling | **No commercial kit found** | — | — |

### Chemistry warnings to carry into the purchasing file

1. **Activity is not the cleaved protein.** Every pNA/AFC kit in the tables above reads a synthetic peptide. A positive result does not demonstrate that the cellular zymogen was cleaved, and these assays cannot be run on fixed tissue.
2. **Two RayBiotech ELISAs are total-protein assays under apoptosis labels** (ELH-CASP3-1, ELH-CASP8-1). If cleaved-specific detection is required, use PTE-CASP3-D175 or the D175-T ratio kit.
3. **APExBIO's Caspase-4 kit K2199 is described as "LEVD-dependent"** — LEVD is caspase-8's tetrapeptide, not caspase-4's (LETD). Treat the specificity claim as unverified and require a selectivity panel.
4. **LETD labels caspase-6 as well as caspase-8.** Vybrant FLICA Caspase 8 (V35119), FAM-FLICA #99 and AAT 20115/20116 use LETD. Only Calbiochem QIA1131KIT uses true IETD — and that kit is flagged "being discontinued".
5. **Annexin V kits report PS externalisation only** and will be positive in any membrane-compromising insult. Pair them with a caspase readout and a viability dye.
6. **Cayman's domain changed to caymanchem.com.** `www.caymanchemical.com` now presents a certificate for a different hostname and fails TLS validation — a silent procurement-interception risk for anyone holding a bookmarked URL.
7. **Abcam's .com and .cn catalogues price the same kit differently** (ab14085: $765 vs ¥9,022) and several Annexin V kits are discontinued on .com (ab273274, ab14086).

### Multiplex: no commercial death panel

MSD's published U-PLEX analyte catalogue contains **Caspase-1, Caspase-3 and PARP only** — no cleaved-species members and no RIPK1/RIPK3/pMLKL. RayBiotech's arrays are cytokine/proteome/MAPK. Bio-Techne's Quantikine catalogue was unreachable from the audit host and remains unverified. Olink publishes no prices. **No single multiplex panel covering cleaved caspase-3 + cleaved caspase-8 + cleaved caspase-9 + cleaved PARP + RIPK1 + RIPK3 + pMLKL is commercially obtainable.** The closest construction is RayBiotech's cleaved-caspase-3/total ratio ELISA plus separate antibody Westerns for cleaved caspase-8/-9, cleaved PARP and phospho-RIPK1/RIPK3/pMLKL.

### Small-molecule inhibitors and occupancy controls

APExBIO Q-VD-OPh hydrate #A1901 ($55 / 1 mg; $265 / 25 mg; $780 / 100 mg) and Z-VAD-FMK #A1902 ($61 / 1 mg; $749 / 100 mg) are in stock; Cayman Z-VAD(OMe)-FMK #14463 $120 / 1 mg, $510 / 5 mg; Enzo Ac-IETD-AMC #ALX-260-042-M001 $62 / 1 mg and Ac-IETD-AFC #ALX-260-110-M010 $417 / 10 mg. Bachem's Z-VAD-FMK (N-1510 / 4026865) ships to mainland China through its distributor list.

**No biotinylated activity-based probe exists commercially.** Every commercial caspase "probe" is a fluorogenic affinity label. Biotinylation is a custom-modification exercise via Bachem/CPC custom synthesis or an in-house FMK→biotin-CP conjugation.

## Recombinant proteins, genetic tools and chemical probes

| Need | Product | Vendor | Catalogue no. | What it is | Price (USD) | Source URL (19 Nov 2026) |
| --- | --- | --- | --- | --- | --- | --- |
| c-FLIP (functional) | **None commercially** | — | — | Every catalogue FLIP protein is full-length (480 aa) and unvalidated, denatured in 6 M urea/detergent, or ambiguously "transcript variant 3" | RayBiotech 230-00717-10 $94 / 10 µg — datasheet: "not recommended for enzyme activity, ligand-receptor binding, cell-based functional assays, or SPR/BLI kinetic studies" | raybiotech.com/recombinant-human-flip-protein-230-00717 |
| c-FLIP (construct) | ΔDED FLIP-L; ΔDED FLIP-L D375A | Addgene (Salvesen) | 13790; 13791 | Bacterial expression vectors, 8×His; D375A cleavage-resistant | $94 each (academic, agar stab); $413 for 20 µg DNA | addgene.org/13790 |
| c-FLIP short-isoform protein | CFLAR/FLIP (Myc-DDK, HEK293), variant 3 | LSBio | LS-G67530-20 | 221 aa; isoform assignment ambiguous | $1,130 / 20 µg | lsbio.com |
| Caspase-8 (active) | Caspase-8, human | Enzo | BML-SE172-5000 (5000 U); ALX-201-062-U100 | Activity confirmed vs IETD-AFC | $563; quote for ALX | enzo.com/product/caspase-8-human-recombinant |
| FADD | FADD (1–208), His | ProteoGenix / Boster / ProSpec | ARO-P13443; PROTQ13158; pro-733 | *E. coli* | $230 / 50 µg; $265 / 10 µg; $60 / 2 µg (ProSpec best value per µg) | us.proteogenix.science |
| Caspase-8 prodomain | **None** | — | — | — | — | — |
| CFLAR KO | HAP1 CFLAR KO (2 clones) | Horizon Discovery | HZGHC…c002 / c004 | CRISPR near-haploid | ≈$3,000 (comparable single-gene HAP1 KO listing); 7 business days; UN3245 GMMO for IATA | horizondiscovery.com |
| CASP8 KO | AC16 / 293T / U-2932 | Ubigene | YKO-HB35181 etc. | CRISPR, Sanger-verified | "starting at $1,490" (promo $990); 1 week; China-based vendor | ubigene.us |
| FAS/CD95 KO | FAS KO HEK293 / HeLa | EditCo | EDJ-KQ657 / EDJ-KQ19167 | CRISPR | Quote only | editxor.com |
| CFLAR knockdown | Silencer siRNA set | Thermo Fisher | AM16708 | 87 siRNAs catalogued | $233 | thermofisher.com |
| CFLAR knockdown | shRNA / Cas9 gRNA | OriGene | TL-series; ABIN5230641/2 | Lentiviral | $1,013 / kit; $822.92 (300 µL); 31–42 business days | origene.com |
| Heterodimer probe | FLIPinB / FLIPinBγ | ProbeChem; Ambinter (originator) | PC-23804 / PC-23805; Amb1202053 / Amb37832612 | caspase-8/c-FLIP_L heterodimer stabiliser; CAS 380335-00-2 | Quote-only at every size | probechem.com/products_FLIPinB.html; ambinter.com |
| Biosensor platform | SPR: Biacore CM5 sensor chip | Cytiva | 05858 | Dextran surface, 10 chips | $2,473 (T200 discontinued, replaced by Biacore 1) | cytivalifesciences.com |
| Biosensor platform | BLI: Octet SA / SAX / ARC sensors | Sartorius | 18-5019 / 18-5118 / 18-5168 | Streptavidin / anti-avidin | $898 / $4,850 / $941 | shop.sartorius.com |
| Digital immunoassay | Simoa platform + assay kits | Quanterix | HD-1/HD-X/SR-X/SP-X | Single-molecule; already sells a TRAIL assay (LoD 0.0083 pg/mL) | Instrument quote; HD-X CNY 3.0–5.0 M via instrument.com.cn | quanterix.com |

**What the platforms can and cannot do.** SPR, BLI and QCM-D measure binding kinetics, so they could deliver caspase-8:c-FLIP_L affinity and DED-filament assembly kinetics — **if** the proteins were available in native fold, which they are not (see the c-FLIP row). Simoa would report c-FLIP *abundance*, not recruitment. Neither is a sensor for the cellular complex.

## Availability and procurement mechanics

### Lead time and fulfilment

| Vendor | Published service level | Source |
| --- | --- | --- |
| CST | Per-product ship date on catalogue pages (observed: next business day); "next-day delivery on 99% of CST products for orders received by 7:30 PM EST"; custom antibodies: **lead time not published** | cellsignal.com/product-information/new-lab-startup-discount |
| Abcam | "For orders to the UK and US, we provide next business day delivery. For orders to other regions, delivery will take 3–5 business days. For orders to APAC, delivery may take approximately 1–2 weeks" | abcam.com/en-us/support/shipping-storage-support |
| Santa Cruz | "Orders are generally shipped within 24 hours upon acceptance"; Express Blue Ice/Dry Ice "Ships Monday through Thursday"; custom orders: **lead time not published** | scbt.com/customer-care/shipping-information |
| Cayman | "In stock and ready to ship! … will ship from Cayman within 1–3 business days"; "Ships in 3 to 5 days"; "Contact for availability"; same-day dispatch for orders in by 2 PM EST, Mon–Thu | caymanchem.com/faq/how-do-i-know-if-a-product-is-available-to-ship |
| Bio-Techne/R&D | **Lead time not published**; backorder language only ("Made to Order products will appear out of stock") | rndsystems.com/resources/customer-service-ordering-info |
| Proteintech | **Catalogue lead time not published**; quote response "within 1 business day" | ptglab.com/products/custom-order-requests |
| GeneTex | No lead-time statement; confirmation e-mail "within one business day" | genetex.com/FAQ |
| Fisher / Promega / Sigma-Aldrich / BioLegend | **Not auditable** — every path returned HTTP 403 bot blocks or 404s | — |

### Shipping restrictions, cold chain, regional availability

- **Abcam**: ships to 143 countries; ambient antibody shipping is available for the US and EMEA but "**China and Japan** — Ambient temperature shipping is not yet available in these regions. Orders will continue to ship with ice packs"; dry-ice dispatches are **Monday–Wednesday only**. Some regions are served by distributors rather than direct shipment.
- **CST**: ships antibodies at ambient (room-temperature and 37 °C stability-tested for one week), with a dedicated China dangerous-goods ordering channel and a separate China procurement-terms pack.
- **Santa Cruz**: dangerous-goods items carry a hazard fee and require a signature; certain animal-health, labware and chemical items cannot ship to Canada, Puerto Rico or US territories; Express Blue/Dry Ice ship Mon–Thu.
- **Bio-Techne**: direct Mainland China (Shanghai) and Hong Kong sales offices.
- **Cayman**: per-product shipping statements ("Room temperature in continental US; may vary elsewhere"), per-lot CoA, SDS and product-insert PDFs, and an international distributor list.
- **No vendor publishes an explicit Russia/mainland-China exclusion list** for this reagent class, and **no vendor states export-control status** for zVAD-FMK, cycloheximide, staurosporine, 7-AAD, propidium iodide or ethidium bromide. Classification must be done per product.

### Price visibility — which vendors can actually be audited

| Vendor | List price published? | Presentation |
| --- | --- | --- |
| CST | **Yes** | Per size with ship date (20 µl $161; 100 µl $351); kit $570 / 100 assays |
| Abcam | **Yes** | "Price: Starts from $235"; volume-break banner "Savings from $100 to $1,250" |
| Cayman | **Yes** | Per size (Z-VAD(OMe)-FMK 1 mg $120, 5 mg $510); cart-based instant quote |
| Thermo Fisher | Partly | List price public; contract/institution price behind sign-in; "online exclusive price" |
| GeneTex | Weak | "Please contact us for bulk pricing" |
| Santa Cruz | Not verified | Final pricing emailed on order acceptance |
| Proteintech | Not verified | Product-page price not extractable; bulk by quote only |
| Bio-Techne/R&D | Not verified | Catalogue price behind login; restocking fee stated as "20% of list price" |
| MSD | **Quote-only** | Every assay kit routes to "How to Request a Quote" |
| Olink | **No prices published** | Panels quote-only; no cleaved-species pairing found |
| Promega | **Publishes no list prices at all** | No price string appears in any Promega product HTML; the €528 figure above comes from the Promega Italy promotional price table |
| Enzo (selected) | Mixed | "Inquire For Pricing" on the Annexin V kit; price lines on a page may belong to related products, not the item |
| Biotium | Discontinued lines show $0 | #30008 / #30011 / #30012 render as discontinued |
| Fisher / Promega / Sigma / BioLegend | Not auditable | Bot-blocked |

**Consequence for the audit.** Three of the largest suppliers of apoptosis reagents in this field — Fisher (and therefore Promega purchasing), Merck/Sigma-Aldrich and BioLegend — could not be read at all by automated fetching. Their lead times, DG status and QC claims must be closed by an account-holder or a manual browser before this audit is signed off.

### Regional and cold-chain specifics observed

- **Dojindo**: "Online orders are available only for the United States. For other regions, please see 'How to order'." The prices above are Americas list; regional sites exist (dojindo.co.jp, .com/ASIA, .com/EUROPE).
- **Beyotime and Elabscience**: catalogue numbers resolve identically on the global and US domains, in USD, with no regional catalogue split and no shipping restriction to China published. Elabscience states "ship in 3 days".
- **Abcam**: the same kit is priced differently across regional sites (ab14085: $765 on .com, ¥9,022 on .cn), and the .cn site is RMB-only.
- **Cayman**: runs two pricing regions — `cch` (US/EU list in USD with a EUR equivalent, used above) and `ce` (Cayman Europe). Storage classes range from −80 °C (caspase-3/7 kit 702790) to −20 °C (LDH, autophagy kits) to 4 °C (Annexin kits, shipped cold); 601360 and 601280 ship at room temperature.
- **APExBIO**: the cytochrome-c kit K2104 and the TUNEL DAB kit K2271 ship on dry ice; caspase kits are −20 °C; JC-1 K2002 ships blue ice.
- **Export control**: the only classification surfaced on any fetched page was **ECCN 0** (Cayman) on the apoptosis kits checked. No export-control, licence or restricted-shipment notice was observed on any caspase, cytotoxicity or apoptosis product page, including at the China-based vendors.
- **RUO**: Enzo states "RUO – Research Use Only" on every apoptosis/caspase page, MSD states "MSD products are for Research Use Only. Not for use in diagnostic procedures", and Elabscience states "For research use only".

### Quality documentation

- **CST** publishes per-product validation data and a per-lot Certificate of Analysis (e.g. media.cellsignal.com/coa/56343/5/), with the caveat stated on their own validation-principles page: "No single assay is sufficient to validate an antibody, including knockout" and "Knockout specificity in WB does not predict specificity in IHC". **No knockout claim appears on the FLIP #56343 or cleaved caspase-8 #8592 product pages.**
- **Proteintech** validates every lot with "knockout (KO) and knockdown (KD) genetic controls, and epitope mapping", publishes raw data on request, and badges products KD/KO-validated with publication counts.
- **Abcam** states that over 4,400 recombinant antibodies carry knockout validation, with a per-SKU application × species table.
- **Cayman** provides per-batch CoA, SDS and product inserts; it also offers exact-weight filling at a $55 per vial fee.

### Discount structure

| Vendor | Published benefit |
| --- | --- |
| CST | New Lab Start-Up Program: 20% off for 3 months, US only, new catalogue orders, expires 31 Dec 2026; publication thank-you: 50% off one 20 µl trial size. **No standing institutional or "open discount" schedule is published.** |
| Abcam | 20% off 100 µL/µg antibodies; "Buy More, Save More. Savings from $100 to $1,250" |
| Proteintech | "Buy any two antibodies, get a third free" (code 3FOR2AB); 5% off first self-quote |
| GeneTex | Bulk discounts at ≥10 units; no percentage published |
| Thermo Fisher | Login-gated contract pricing; site banner "Buy 3 qualifying products for the price of 2" (ends 31 Dec) |
| Bio-Techne, Cayman, Santa Cruz | Quote-only or not published (Santa Cruz's "Cruz Credit" economics are not retrievable) |

### Supply-chain risks specific to this panel

1. **Consolidation removed a second quote route.** Novus Biologicals now resolves to R&D Systems, so niche apoptosis antibodies formerly quoted through Novus are single-supplier (Bio-Techne) items.
2. **Single-source flagship lines.** CST carries one FLIP clone family (56343/96297) and one cleaved caspase-8 pair (8592/9496); a lot problem means switching vendor *and* re-validating.
3. **p43-FLIP has no catalogue product at all**, so the detection of the species the DISC model depends on is unprocurable.
4. **Regional asymmetry in cold chain.** Abcam's ambient-shipping upgrade stops at China and Japan, where the same shipments carry ice packs and take ~1–2 weeks.
5. **Weekend cut-offs.** SCBT dry ice Mon–Thu, Abcam dry ice Mon–Wed, Cayman same-day Mon–Thu — an order placed on Thursday or Friday idles 2–4 days, and a dry-ice shipment risks weekend sublimation.
6. **No stock guarantee anywhere.** SCBT "all orders are subject to availability"; Cayman "availability of all products is subject to prior sale"; Bio-Techne "made to order products will appear out of stock".
7. **RUO is universal.** CST, SCBT, GeneTex and Cayman all label these reagents for research use only; no audited apoptosis reagent moved to a more restricted status, and none became diagnostic.
8. **Lot-to-lot risk.** Hybridoma-derived antibodies (Santa Cruz, Cayman, Sigma monoclonals) carry the usual lot variation, and only CST and Proteintech publish a paid lot-reservation service.
9. **The classic caspase-kit category has contracted.** Biotium has discontinued its caspase-3 and caspase-8 substrate kits and Thermo Fisher has delisted ten legacy caspase-kit SKUs. A lab that restocked from a 2018 methods section will find both SKUs dead; the working replacements are Beyotime, APExBIO, Elabscience, Cayman substrates, and ICT FLICA.
10. **A procurement-interception risk in the vendor domain space.** Cayman's old `caymanchemical.com` hostname now presents a certificate for a different domain and fails TLS validation, and Abcam's .com/.cn price split is large and undocumented. Verify the certificate and the regional price before placing a multi-hundred-dollar order.
11. **The one-kit-per-target pattern is pervasive.** The only dedicated cytochrome-c-release kit found in the whole audit is APExBIO K2104 at $1,095; the only dedicated caspase-8 activity kits that are not disambiguated by caspase-6 are a single Calbiochem SKU flagged "being discontinued".

## The cheapest credible panel — and what it still cannot do

A lab asking "is this cell dying through the caspase-8 route, and how much c-FLIP is present?" can do it for roughly **$1,000–1,500** in list-price reagents:

| Item | Route | Cost |
| --- | --- | --- |
| Total c-FLIP, WB | CST #56343, 20 µl | $161 |
| Cleaved caspase-8, WB | CST #9496 or #8592, 20 µl | ~$161 |
| Caspase-8 activity, plate | Beyotime C1152, 100 tests | $325 |
| Apoptosis confirmation, flow | Elabscience E-CK-A211 (Annexin V-FITC/PI), 200 assays | $350 |
| Optional live-cell caspase-8 | Vybrant FLICA Caspase 8 #V35119, 25 assays | $350 |

Adding **isoform resolution** costs about $480 more (Abcam ab314747 $220 + ab323748 $257, 20 µl each) and buys a Western blot, not a flow panel or a knockout-validated reagent.

Volume economics change the shape of the answer rather than its size: the same panel scaled to 100 assays of Annexin V (Elabscience, $1.75/test), 100 LDH tests (Beyotime C0016, $0.36/test) and 500 metabolic viability tests (Beyotime C0009S, $0.08/test) costs **$200–300** in consumables. The fixed cost is the antibodies and the validation effort, not the assays.

That panel answers "is caspase-8 active and is c-FLIP present". It **cannot** answer the question the DISC model actually asks:

- it can separate c-FLIP_L from c-FLIP_S, but only on a Western blot, with human-reactive recombinant clones and no published knockout validation, and there is no c-FLIP_R reagent at all;
- it cannot measure c-FLIP *at* the DISC, because no commercial occupancy probe exists;
- it cannot detect p43-FLIP, because it is not a catalogue product;
- it cannot report DISC stoichiometry, because that requires quantitative mass spectrometry (core facility) or reconstitution;
- its caspase-8 readout is a *peptide* readout — cross-reactive with caspase-6 unless IETD and a competitor inhibitor are used carefully — so it is evidence of caspase-8-containing activity, not proof that procaspase-8 was cleaved in the cell.

The cost gap between the two questions is not a price gap. The first question is a ~$1,000 catalogue order; the second is a core-facility project with a different cost structure entirely — which is why the phase diagram in the DISC-ratio task output remains a model prediction rather than a measurement.

## Verification checklist for a purchasing lab

1. Confirm the antibody's **isoform coverage** in writing before ordering c-FLIP: total, L, or L+S.
2. Ask for the **knockout validation** of the exact lot for the exact application (CST's own guidance: knockout specificity in WB does not transfer to IHC).
3. Specify **application and clone** on the order line — clone substitution within a target number is not a like-for-like replacement.
4. For caspase-8 activity, specify **IETD** and demand the **competitor inhibitor** (Z-VAD-FMK) to control non-specific cleavage.
5. For live-cell caspase-8, specify **IETD rather than LETD** — LETD (Vybrant, FAM-FLICA) also labels caspase-6; and state that an affinity label is an endpoint, not a kinetic trace.
6. Order dry ice early in the week (Mon–Wed at Abcam, Mon–Thu at SCBT), and check the APAC lead time before committing to a CN delivery.
7. For reconstitution, do not buy catalogue c-FLIP protein: use the Salvesen ΔDED constructs (#13790/#13791) or a CDMO.
8. For FLIPinB, quote Ambinter (originator) and ProbeChem in parallel; neither MedChemExpress, Selleck, Cayman nor Tocris carries it.
9. Re-check every catalogue number before ordering: Biotium's caspase kits (#30008/#30011/#30012) are discontinued and Thermo Fisher's legacy caspase kits (C12440, C12441, B21240, A13279 …) return `SKU_NOT_FOUND`.
10. Read the substrate before the kit name. RayBiotech's ELH-CASP3-1 and ELH-CASP8-1 are total-protein ELISAs; APExBIO's caspase-4 kit K2199 is described with caspase-8's LEVD tetrapeptide; ICT and AAT caspase-8 live-cell kits use LETD, which also labels caspase-6.
11. Verify the vendor hostname in the certificate, not in the bookmark — Cayman's domain changed to caymanchem.com and the old hostname fails TLS validation.
12. Ask whether the c-FLIP product you are buying is a total-FLIP antibody or an isoform-resolved one, and check the application list: the isoform-resolved clones (Abcam ab314747, ab323748; Santa Cruz sc-136160) are Western-blot products, so IF, flow or ELISA use means custom work.
13. Check the vendor's caveat list before ordering. CST #8510, #4790, #9496, #9661, #14933/#14993 and #8762 all carry documented cross-reactivity or unknown-band notes; Abcam ab316923 is phospho-peptide/overexpressed-lysate validated only.

## Related vault entries

- [[task_output_cflip_caspase8_disc_ratio_kinetics_19_Nov_2026]] — the modelling argument whose central variable this audit finds unmeasurable with catalogue reagents.
- [[Caspase-8-c-FLIP Rheostat]] — the vault node for the switch; its "quantitative tuning" bullets carry the copy numbers this audit prices against.
- [[c-FLIP]], [[Caspase-8]], [[p43-FLIP]], [[DISC]], [[FADD]], [[Bid]] — molecular participants.
- [[Apoptosis]], [[Necroptosis]], [[Caspase-3]], [[Caspase-7]], [[Caspase-10]], [[RIPK1]], [[RIPK3]], [[MLKL]], [[PARP1]], [[XIAP]], [[cIAPs]] — the biomarker targets covered.
- [[Annexin V]], [[Cytochrome c]], [[TUNEL]], [[Apoptosis-Inducing Factor]] — detection targets with catalogue routes.
- [[Proteasome]] — the turnover machinery behind the fastest-changing analyte in this panel.
