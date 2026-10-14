---
title: Biomarker Gates — Biological and Anatomical Mapping, with Structural Review of the Interactive Page
description: Gate-by-gate review of the hard-coded individual biomarkers in web/public/pages/en-US/hard-coded-biomarker-gates.html. For each gate, the biological substrate, the anatomy in which it is expressed and acts, the pathway axis, and the therapeutic class it modifies (senolytic, senomorphic, mitohormetic, redox, pharmacokinetic, dietary). Closes with structural defects found in the page - panel-vs-tracker coverage mismatch, a clinically incorrect class assignment, non-partitioning gate categories, an inverted KL-VS frequency, and undefined anatomy topics the vault does not yet carry.
created: 2026-09-29
updated: 2026-09-29
tags:
  - task-output
  - biomarkers
  - pharmacogenomics
  - anatomy
  - cell-death
  - senescence
  - sirtuins
  - autophagy
  - oxidative-stress
  - mitohormesis
source: web/public/pages/en-US/hard-coded-biomarker-gates.html
---

# Biomarker Gates — Biological and Anatomical Mapping

Compiled 29_Sep_2026 09:00 AM PDT. Subject: every gate and every therapy branch in
`web/public/pages/en-US/hard-coded-biomarker-gates.html` (GATES array: 17 entries;
THERAPIES array: 23 entries), read against the vault's actual note filenames.

Each gate below is mapped on four axes the page itself does not carry:

- **Substrate** — the gene, enzyme, or organism whose state is fixed.
- **Anatomy** — the tissue, cell type, and organ in which the value is expressed
  and in which the consequence is executed.
- **Pathway axis** — the vault mechanism note the gate actually sits on.
- **Therapeutic class gated** — senolytic, senomorphic, mitohormetic, redox,
  pharmacokinetic, dietary, or diagnostic.

The vault is mechanism-organised and has almost no anatomy, so the anatomy column
below is largely reconstructed from the mechanism notes rather than read off an
anatomy note. Section [Anatomy gaps](#anatomy-gaps-in-the-vault) lists the tissue
notes that would be needed to make it native rather than borrowed.

---

## Karyotype and reproductive stage (46,XX / 46,XY / 45,X / 47,XXY)

**Substrate.** Chromosomal complement plus, functionally, the current sex-steroid
milieu. Not a genotype in the usual sense — it is a chromosomal state that
determines which steroid is the dominant one, and reproductive stage then makes
that steroid itself a moving value.

**Anatomy.** The gate is *hormonal*, and the hormone is produced in
[[Hypothalamus]]-driven endocrine tissue: ovarian follicles in XX, testes in XY,
with [[Sex Steroid Ablation]] as the XY analogue of menopause. Downstream, the
tissue that reads the hormone is almost everything: [[Estrogen Receptor]]
signalling is documented in [[Myocardium]] ([[Cardiac Function]]), bone, and
brain. The specific anatomical lesion the page's age-related cardiac finding
describes is the aged female ventricle — reduced [[SIRT1]], [[SIRT3]] and
[[MnSOD]] with [[NF-κB]] activation and macrophage accumulation, present in female
and not male myocardium.

**Pathway axis.** The sirtuin–[[NAD+]] axis first, then everything downstream of
it: [[SIRT3-SIRT4 Ratio]], [[AMPK]]/[[mTORC1]]/[[Autophagy]],
[[Mitohormesis]]. Age-related cardiac change is reported to differ by sex:
reduced [[SIRT1]], [[SIRT3]] and SOD2 with [[NF-κB]] activation and macrophage
accumulation is described in aged female but not aged male ventricles
(*Aging*, 2019; PMC6503880).

**Therapeutic class gated.** This is the most anatomically far-reaching gate on the
page, and it is the one whose cell-death mapping the user asks about. It sets
**which death machinery is available**, not how fast it runs:

- **XX neurons** subjected to the same insult engage **caspase** — [[Caspase-8]]
  and [[Caspase-3]] — the [[Apoptosis]]/[[Apoptosome]] route.
- **XY neurons** engage [[PARP1]] and [[Apoptosis-Inducing Factor]] — the
  [[Parthanatos]] route, with [[Necroptosis]] as the neighbouring modality.
- [[SIRT6]] overexpression extends lifespan in males only (Kanfi, *Nature* 2012);
  caloric restriction and rapamycin produce larger extensions in males and females
  respectively.

So the anatomical statement is: **the same insult, in the same organ, in two
karyotypes, recruits two different cell-death programmes** — a caspase-dependent
apoptotic one in XX and a PARP1/AIF-dependent parthanatos one in XY. This is the
single most load-bearing biological claim attached to the page's most
demographically universal gate, and it is also the least verifiable: it rests on
in-vitro insult paradigms, not human outcome data, which the page's own Grade A
label does not reflect (see [Structural findings](#structural-findings)).

**Related vault notes.** [[Estrogen]], [[Estrogen Receptor]], [[Testosterone]],
[[Sex Steroid Ablation]], [[Sirtuins]], [[NAD+]], [[SIRT3-SIRT4 Ratio]],
[[Apoptosis]], [[Necroptosis]], [[Parthanatos]], [[Apoptosis-Inducing Factor]],
[[Caspase-8]], [[Caspase-3]], [[PARP1]], [[SIRT6]], [[MnSOD]], [[Myocardium]],
[[Cardiac Function]], [[Hypothalamus]].

---

## COMT Val158Met (rs4680)

**Substrate.** [[COMT]], a soluble and membrane-bound catechol
O-methyltransferase. rs4680 is a coding substitution (Val158Met) that
thermally destabilises the enzyme.

**Anatomy.** Highest expression in [[Liver]] and [[Kidney]] (the classic
catecholamine-clearance organs), with substantial expression in brain —
[[Dopamine]]-rich [[Prefrontal Cortex]] — and in placental tissue. Also in erythrocytes, which is why the activity phenotype is measurable
from a cheek epithelial scrape rather than a biopsy. The pharmacology consequence
sits in the liver: high-dose [[Alpha-tocopherol]] is cleared faster in Val/Val,
and the intersection with [[Estrogen]] is direct — catechol estrogens are
neutralised by COMT-dependent [[Methylation]], so slow COMT means slower
oestrogen-metabolite clearance.

**Pathway axis.** Catecholamine oxidation, methylation cycle, and the vitamin E
branch of [[Oxidative Stress]]. Three therapeutic classes hang off this one
enzyme:

- **Antioxidant** — high-dose α-tocopherol ([[Alpha-tocopherol]]).
- **Senolytic** — [[Fisetin]] is a validated COMT substrate inhibitor
  (IC<sub>50</sub> 2.6–5.8 µM), so COMT activity sets senolytic exposure
  directly. This is the page's most interesting gate–class coupling: a
  catechol-O-methyltransferase genotype gates a flavonoid senolytic, because the
  compound works by inhibiting the enzyme that clears the very catechols the
  senolytic mechanism runs on.
- **Methyl donor** — [[Methylation Cycle]] interventions (methylfolate,
  methylB12, SAMe, [[Betaine]]).

**Assay concordance — the vault's best case.** Enzyme activity differs 3–4-fold
between genotypes with limited within-category variance, so genotype is an
adequate proxy for activity. Compare [[PON1]] (activity varies *more* within
genotype than between) and SOD2 rs4880 (direction inconsistent across primary
studies). This is why [[Val158Met]] is the template and the other two are not.

**Related vault notes.** [[COMT]], [[Val158Met]], [[Alpha-tocopherol]],
[[Fisetin]], [[Quercetin]], [[EGCG]], [[Dopamine]], [[Prefrontal Cortex]],
[[Estrogen]], [[Methylation]], [[Methylation Cycle]], [[Folate]], [[Vitamin B12]],
[[Betaine]], [[Liver]], [[Kidney]].

---

## Urolithin metabotype (UM-A / UM-B / UM-0)

**Substrate.** Not a human gene — a **bacterial guild**. Carriage of
*Gordonibacter urolithinfaciens* determines whether dietary
[[Ellagitannins]] become [[Urolithin A]]. UM-B substitutes
*Ellagibacter isourolithinifaciens* and [[Enterocloster]], yielding
[[Isourolithin A]]; UM-0 has no urolithin at all.

**Anatomy.** The conversion happens in the **colon**, on ellagitannin substrate
that reaches the gut lumen from pomegranate, walnut, and strawberry — no host
tissue is required for the first step. The metabolite then acts systemically, and
this is where the anatomical distribution matters:
[[Urolithin A]] is a [[Mitophagy]] inducer via the
[[AMPK-PGC-1α Pathway]]/[[PGC-1α]] axis, with the highest receptor density in
[[Skeletal Muscle]], [[Adipose Tissue]], [[Liver]], and brain. The
[[Mitochondrial Uncoupling]] effect is likewise muscle- and adipose-weighted.

**Pathway axis.** [[Mitophagy]] → [[PINK1]]/[[Parkin]], [[AMPK-PGC-1α Pathway]],
[[mTORC1]] signalling, [[NAD+]].

**Therapeutic class gated.** Senolytic-adjacent and mitohormetic rather than
senolytic proper: urolithin A is the metabolite used in published
mitophagy/geroprotector trials, and dietary administration fails outright in
UM-0 (≈50%) and produces the wrong compound in UM-B (≈10%). Direct UA
supplementation bypasses the colonic step and applies to all metabotypes.

**Measurement caveat the page handles well.** 12% of a US cohort had detectable
UA glucuronide at baseline while ~40% converted after a standardised pomegranate
challenge — because a serum or fasting urinary value is a *snapshot of a meal*,
not the phenotype. A producer measured on a low-intake day is classified as a
non-producer. This is the one place on the page where the measurement method
rather than the biology is the finding.

**Related vault notes.** [[Metabotypes]], [[Urolithins]], [[Urolithin A]],
[[Ellagitannins]], [[Isourolithin A]], [[Gordonibacter urolithinfaciens]],
[[Ellagibacter isourolithinifaciens]], [[Gut Microbiome]], [[Intestinal Barrier]],
[[Gut Dysbiosis]], [[Mitophagy]], [[PINK1]], [[Parkin]], [[AMPK-PGC-1α Pathway]],
[[PGC-1α]], [[Mitochondrial Uncoupling]], [[Skeletal Muscle]], [[Adipose Tissue]],
[[Liver]].

---

## MC1R variant class (R-class / r-class / wild-type)

**Substrate.** [[MC1R]], a 7-transmembrane GPCR on melanocortin signalling.
R-class alleles (R151C, R160W, D294H) are loss-of-function; r-class are partial.

**Anatomy.** The canonical site is the [[Melanocyte]] — in the epidermal basal
layer and in the hair follicle, and — less obviously — in the **retina**:
[[Retinal Pigment Epithelium]] and [[Retinal Photoreceptors]] are melanocyte-
adjacent pigment cells carrying the same biosynthetic programme. The second,
separate anatomical site is **brain**: MC1R is expressed on neurons and
[[Astrocytes]], and loss-of-function associates with [[Parkinson's Disease]] risk
and with vulnerability of dopaminergic neurons in the [[Substantia Nigra]]. The
vault note makes this link explicitly: skin and brain melanogenesis share the
[[Tyrosinase]]-dependent catechol-oxidation pathway, and
[[Neuromelanin]] in the [[Substantia Nigra]] and [[Locus Coeruleus]] is the
brain-side terminal product.

**Pathway axis.** [[Melanogenesis]]: MC1R → cAMP → [[Tyrosinase]] →
[[Eumelanin]] vs [[Pheomelanin]]. Pheomelanin synthesis is
quinone-generating: it produces reactive oxygen species and depletes
[[Glutathione]] *during synthesis*, independent of UV. Hence UV-independent
[[Melanoma]] risk (OR 2.13 with ≥2 variants) and a raised baseline oxidant load.

**Therapeutic class gated.** Exposure/prevention decisions (solarium, sun) and
MC1R-agonist neuroprotection for dopaminergic neurons. The anatomical inversion is
worth stating: a **dermatologic** variant is a **neurologic** risk factor, and
the mechanism linking them is a pigment biosynthetic pathway running in the
substantia nigra, not in the skin.

**Related vault notes.** [[MC1R]], [[Melanocyte]], [[Melanocytes]],
[[Melanogenesis]], [[Tyrosinase]], [[Eumelanin]], [[Pheomelanin]], [[Neuromelanin]],
[[Melanins]], [[Dopachrome tautomerase]], [[Substantia Nigra]], [[Locus Coeruleus]],
[[Astrocytes]], [[Parkinson's Disease]], [[Alpha-synuclein]], [[Glutathione]],
[[Retinal Pigment Epithelium]], [[Retinal Photoreceptors]], [[UV Light]],
[[UV-induced photoaging]], [[Melanoma]].

---

## NQO1 C609T (rs1800566, Pro187Ser)

**Substrate.** [[NQO1]] (DT-diaphorase), a NRF2-regulated flavoprotein. T/T is
functionally null — no detectable NQO1 protein in saliva, [[Bone Marrow]], lung
epithelium, or endothelium (Siegel 1999).

**Anatomy.** Cytosolic and ubiquitous; highest in the organs of xenobiotic
handling — [[Liver]], [[Gastrointestinal Tract]] wall, kidney, and lung
epithelium. The catechol-oxidation programme it sits inside is adrenal-medullary
and CNS: [[Adrenochrome]] and [[Aminochromes]] are the relevant quinones, which
is why the vault's quinone material is filed under the catechol topic rather than
under general oxidative stress.

**Pathway axis.** Quinone redox chemistry. The fork is absolute:

- **Enzyme present** (C/C, C/T) → **two-electron** reduction to a stable,
  detoxifiable hydroquinone. Signal delivered *and* terminable.
- **Enzyme absent** (T/T) → one-electron reduction by [[Cytochrome P450]]/
  b5-reductase to a **semiquinone radical** that redox-cycles and produces
  [[Superoxide Radicals]].

**Therapeutic class gated.** Two, and the second is the one the page is actually
about — **redox signalling** protocols pairing a donor with a terminator:

- [[Methylene blue]] + [[Carbazochrome]] as signal donors, [[Aminoguanidine]] as
  terminator. In T/T the *terminator* half of the design has no substrate to act
  on, because the quinone is never converted to something terminable. The protocol
  becomes a one-directional oxidant load. This is a determinant of
  **admissibility**, not dose — the page's classification is correct here.
- [[NQO1]]-bioactivated quinone chemotherapy (mitomycin, intravesical). T/T is
  the opposite case: bioactivation is the cytotoxic mechanism, so T/T predicts a
  **no-op** on the drug's own terms while the bystander effect persists. Correct,
  and a good illustration that the same genotype is protective in one indication
  and disqualifying in another.

**Related vault notes.** [[NQO1]], [[Quinone]], [[Adrenochrome]], [[Aminochromes]],
[[Carbazochrome]], [[Aminoguanidine]], [[Methylene blue]], [[Cytochrome P450]],
[[NRF2]], [[Superoxide Radicals]], [[Reactive Oxygen Species]], [[ROS]],
[[Glutathione]], [[Bone Marrow]], [[Gastrointestinal Tract]], [[Liver]],
[[G6PD]], [[Adrenochrome Hypothesis]].

---

## CYP3A5 status and FKBP1A loss-of-function

**Substrate.** [[Cytochrome P450]] 3A5 expression status (*1 expressor vs*3/*6/*26
non-expressor), plus separately [[FKBP12]] loss-of-function. Two different gates
of two different pathways, sharing one therapy row.

**Anatomy.** The site of the gate is the **liver and the small-intestinal wall**
— the two organs that clear a systemically available drug. FKBP1A acts
everywhere, but its functional consequence is only visible where mTORC1 is
receptor-proximal: [[T Cell]] proliferation, [[Osteoclast]] differentiation,
hepatocyte and [[Neuron]] autophagy programmes. Whole-blood sirolimus trough
measures systemic exposure; the [[p70S6 kinase]] Thr389 readout measures
downstream engagement in the sampled nucleated cells.

**Pathway axis.** [[mTORC1]] and [[Autophagy]]; FKBP12–sirolimus complex
formation, which is step one. [[Rapamycin]] binds FKBP12, the complex binds
mTOR FRB, mTORC1 is inhibited, ULK1 is de-repressed, [[Autophagy]] proceeds.
CYP3A5 acts one stage earlier and orthogonally — it decides how much drug is
present at the step-one concentration.

**Therapeutic class gated.** mTORC1-directed interventions ([[Rapamycin]] and
analogues). The two failure modes are anatomically identical and
pharmacologically opposite:

- **CYP3A5 expressor** → pharmacokinetic. 40–60% faster clearance; trough
  below the target-engagement range for most of the dosing interval; 22% of the
  Mannick 2 mg weekly cohort had troughs < 1 ng/mL. Recorded as non-response.
  **Correctable by dose.**
- **FKBP12 LOF** → pharmacodynamic. The complex does not form. **Not correctable
  by dose at any level.**

The page's insistence that a non-responder classification without a trough and a
p70S6K1 measurement is a hypothesis about exposure rather than a measurement of
it is the correct pharmacokinetic position, and it is the anatomical point that
generalises: *the liver decides the dose, the blood decides whether the dose was
enough, and neither is the same as the target.*

**Related vault notes.** [[Cytochrome P450]], [[Rapamycin]], [[FKBP12]], [[mTOR]],
[[mTORC1]], [[mTORopathies]], [[Autophagy]], [[ULK1]], [[S6K1]], [[p70S6 kinase]],
[[AMPK]], [[IRS1]], [[Liver]], [[T Cell]], [[Osteoclast]], [[Neuron]],
[[Hepatocyte]], [[Skeletal Muscle]].

---

## HFE C282Y / H63D

**Substrate.** [[HFE]], a type I transmembrane glycoprotein (MHC class I fold,
6q21.3) that presents itself to [[Ferroportin]] to gate hepcidin signalling.
C282Y disrupts the hepcidin-binding surface.

**Anatomy.** Two sites matter. The **duodenal enterocyte** is the regulatory
site — HFE expression there controls apical [[Ferroportin]] export of dietary
iron, and therefore hepcidin production. The **hepatocyte** is the storage site
and the site of the injury: parenchymal iron loading in [[Liver]] is what drives
the endocrine (diabetes), cardiac ([[Myocardium]]), and dermatologic phenotypes.
Peripheral loading then reaches [[Heart]], pancreatic islet tissue,, joints, and skin. The labile pool that the page links to ferroptosis is
not a plasma concentration — it is a subcellular pool in the
mitochondrial/lysosomal compartment of the affected parenchyma.

**Pathway axis.** Iron handling: [[DMT1]] uptake → cytosolic pool → [[Ferritin]]
sequestration vs [[Ferroportin]] export, gated by hepcidin, gated in turn by HFE.
Downstream, the pool is the Fenton-reaction substrate for
[[Ferroptosis]] and [[Lipid Peroxidation]] — C282Y homozygosity lowers the
threshold for ferroptosis induction from the third decade of life onward, with no
dietary contribution required.

**Therapeutic class gated.** Ferroptosis-adjacent protocols, both directions.
The page's classification is right and somewhat counter-intuitive: the *missed
therapy* class applies because an indicated **iron-directed** intervention
(phlebotomy, at TSAT > 45% with ferritin > 300 ng/mL in men and postmenopausal
women, > 200 ng/mL in premenopausal women) is being withheld, while an
antioxidant-only regimen addresses a downstream consequence rather than the
accumulation. The ferroptosis threshold is the gate; the intervention being missed
is a depletion protocol, not an antioxidant.

**The page's own anatomical cross-link.** Menstrual blood loss is an iron sink, so
prevalent overload is more common in men than in premenopausal women. This
connects the HFE gate to the karyotype gate — the one place on the page where two
gates are shown to compose rather than merely coexist.

**Related vault notes.** [[HFE]], [[Iron]], [[Ferritin]], [[Ferroportin]], [[DMT1]],
[[Fenton Reaction]], [[Ferroptosis]], [[GPX4]], [[ACSL4]], [[FSP1]],
[[Lipid Peroxidation]], [[Lipid hydroperoxide]], [[Lipid peroxyl radical]],
[[4-Hydroxynonenal]], [[Liver]], [[Hepatocyte]], [[Myocardial Ischemia-Reperfusion Injury]],
[[Myocardium]], [[Cellular Senescence]].

---

## SOD2 Ala16Val (rs4880)

**Substrate.** The mitochondrial matrix targeting sequence of MnSOD —
Acp–Leu–Ala–Pro–*Val* → the arginine at position 16 is removed and
mitochondrial import efficiency falls by 30–40%.

**Anatomy.** Uniquely well-placed: SOD2 is mitochondrial, so this variant is
expressed in **every nucleated cell**, at full strength, in the mitochondrial
matrix — highest functional relevance in [[Skeletal Muscle]], [[Myocardium]], and
[[Kidney]], the most oxidatively loaded tissues. The variant is a
**trafficking** lesion, not a catalytic one: less enzyme arrives, the
intermembrane/matrix superoxide steady state rises, and the site of damage is
mitochondrial lipids and mtDNA.

**Pathway axis.** [[MnSOD]] and the [[SIRT3-SIRT4 Ratio]]. The actionable readout
of that ratio is acetylation at Lys68/Lys122 of MnSOD — a 30–40% change in
imported enzyme therefore corresponds to a 30–40% change in the width of the
window over which [[Hormesis]] is observed. This gate sets the **hormetic window
width**, which is a different thing from setting the dose.

**Therapeutic class gated.** Mitohormetic dosing, graded. Grade C for a reason:
the direction of the rs4880 effect on measured MnSOD activity is inconsistent
across primary studies, so measure the enzyme. The page's rule — "where genotype
predicts function, genotype is sufficient; where it does not, measure the enzyme"
— is the correct general policy and should be applied to every Grade C row.

**Related vault notes.** [[MnSOD]], [[SIRT3-SIRT4 Ratio]], [[SIRT3]], [[SIRT4]],
[[Hormesis]], [[Mitohormesis]], [[Superoxide Radicals]], [[Reactive Oxygen Species]],
[[Mitochondria]], [[Skeletal Muscle]], [[Myocardium]], [[Kidney]],
[[Oxidative Phosphorylation]], [[Glutathione]].

---

## TMAO producer status

**Substrate.** Gut microbial trimethylamine-producing flora (CutC/CutD), as
opposed to TMA-reducing flora (*Eubacterium limosum*, Lactobacillus).

**Anatomy.** Same two-compartment structure as urolithin, inverted in
direction. The **production** site is the colonic lumen; the **detoxification**
site is the liver, via hepatic flavin-containing monooxygenase 3 (FMO3); the
**target tissue** is the vascular endothelium and the vessel wall, where TMAO
drives endothelial dysfunction, and secondarily [[Skeletal Muscle]] and
[[Kidney]] (renal clearance is a major TMAO elimination route, so renal
impairment raises exposure independent of diet). The mechanism the page names —
TMAO-accelerated senescence and [[SIRT1]]-mediated attenuation in vascular
smooth muscle — is a senescence-plus-sirtuin mechanism executed in the vessel
wall, not in the gut.

**Pathway axis.** Microbial metabolism → [[Liver]] detoxification →
[[Inflammaging]] / [[Cellular Senescence]] in the vessel wall, with [[SIRT1]] as
the node.

**Therapeutic class gated.** Dietary pattern (choline-, carnitine-, red-meat-
forward). The anatomical argument is that identical dietary advice is issued to
high producers and non-producers while producing an order-of-magnitude difference
in systemic TMAO exposure, because the advice addresses the *substrate* and the
gate is the *machinery*.

**Related vault notes.** [[Trimethylamine N-oxide]], [[Gut Microbiome]],
[[Akkermansia]], [[Akkermansia muciniphila]], [[L-Carnitine]], [[Betaine]],
[[Liver]], [[Hepatocyte]], [[Inflammaging]], [[Senescence]], [[SIRT1]],
[[Atherosclerosis]], [[Cardiovascular Disease]], [[Dyslipidemia]], [[Kidney]].

---

## APOE ε isoform dosage

**Substrate.** [[APOE4]] versus ε3 versus ε2 — an apolipoprotein isoform, produced
almost entirely by one tissue.

**Anatomy.** Produced by hepatocytes and delivered to the brain, where the relevant
cells are **[[Microglia]]** (primed, IFN-I-amplifying) and **[[Astrocytes]]**
(APOE4 abundance, [[TREM2]] ligand supply, [[Blood-Brain Barrier]] integrity).
Peripherally it acts at vessel endothelium and on [[Lipid Metabolism]] via
[[Atherosclerosis]] risk. AD risk is dose-graded: ε4/ε4 ≈ 10-fold, single allele
≈ 3-fold, and [[Alzheimer's Disease]] is a *brain* disease whose risk allele is
manufactured in the *liver*.

**Pathway axis.** [[cGAS]]-[[STING]] / [[Type I Interferon]]-driven microglial
priming; a senescence-like microglial state with mitochondrial stress,
[[Cell Cycle]] arrest, and [[SASP]]. This is the axis on which the page's
cGAS-targeted-intervention claim rests, and the anatomical point is that the
population with the highest predicted ceiling for cGAS inhibition (ε4 carriers) is
diluted out of unstratified trials by the inclusion of ε3/ε3 participants.

**Therapeutic class gated.** Two, and the second is a genuine negative:

- **Neuroinflammation / cGAS–STING** interventions: ε4 carriers are a candidate
  population that is not currently being trialled. Classified as *missed therapy*.
- **Dietary cognition** ([[Ketogenic Diet]], MCT, saturated fat): ε4 carriers get
  **no** benefit and saturated fat is specifically detrimental. Randomised human
  data and scoping reviews find ketogenic agents ineffective in ε4 carriers; the
  APOE4-mouse cognitive benefit is female-specific and has not translated. A 2025
  umbrella review excepted only the [[Mediterranean Diet]]. Classified as
  *predicted no-op*.

**Related vault notes.** [[APOE4]], [[Klotho]], [[Microglia]], [[Astrocytes]],
[[cGAS]], [[STING]], [[Type I Interferon]], [[SASP]], [[Inflammaging]],
[[Atherosclerosis]], [[Cardiovascular Disease]], [[Dyslipidemia]], [[Alzheimer's Disease]],
[[Beta-amyloid]], [[Tau Pathology]], [[Cerebrospinal Fluid]], [[Blood-Brain Barrier]],
[[Liver]], [[Ketogenic Diet]], [[Metabolic Syndrome]].

---

## ALDH2 Glu487Lys (rs671)

**Substrate.** ALDH2, the aldehyde dehydrogenase of ethanol and 4-HNE
metabolism.

**Anatomy.** Highest in [[Liver]] (the ethanol-metabolism organ) and in the
gastric and oral mucosa (the first-pass site, source of the flushing response),
with high expression in [[Skeletal Muscle]], [[Myocardium]], and brain. The
substrate it clears in the oxidative-stress context is
[[4-Hydroxynonenal]] — a membrane lipid-peroxidation product — so the tissue at
risk in a *2 carrier is any tissue with high mitochondrial density and high lipid
content: cardiac, skeletal muscle, and neuron.

**Pathway axis.** [[Lipid Peroxidation]] clearance, and the
[[Mitochondrial Uncoupling]]/[[NAD+]] pool. The Km for acetaldehyde exceeds
available cellular [[NAD+]] by roughly 15-fold, which creates the page's
interesting inversion: **in a *2 carrier, aldehyde clearance capacity and the
[[NAD+]] availability that supplementation is meant to raise move in opposite
directions.** A*2 carrier is therefore simultaneously more oxidatively loaded and
less able to convert oxidant signal into the adaptive response.

**Therapeutic class gated.** Xenohormesis (ethanol as hormetic exposure), and
by extension any intervention whose mechanism depends on a redox-to-NAD+
conversion. *2/*2 is classified *harm*; *1/*2 *under-exposed*.

**Related vault notes.** [[4-Hydroxynonenal]], [[Lipid Peroxidation]], [[Glutathione]],
[[NAD+]], [[Mitochondria]], [[Mitochondrial Uncoupling]], [[Hormesis]],
[[Mitohormesis]], [[Liver]], [[Skeletal Muscle]], [[Myocardium]], [[Cardiovascular Disease]],
[[Oxidative Stress]].

---

## CYP1A2 / ADORA2A

**Substrate.** [[Cytochrome P450]] 1A2 (hepatic caffeine clearance) and the
adenosine receptor.

**Anatomy.** CYP1A2 is a **liver** enzyme with near-zero extrahepatic
contribution, so this is the cleanest pharmacokinetic gate on the page: a
single-organ determinant. The behavioural consequence is cortical, mediated by
adenosine antagonism at the [[Prefrontal Cortex]] and, for the sleep penalty, the
circadian system.

**Pathway axis.** Not a vault pathway axis — this is pure
pharmacokinetics plus receptor pharmacology. Included because the page's argument
generalises: slow metabolisers show a 2–12 hour caffeine half-life spread, so
*reduced perceived efficacy* and *sleep disruption after an afternoon dose* arise
from the same determinant. Apparent reduced efficacy frequently reflects sleep
disruption rather than a pharmacology failure.

**Therapeutic class gated.** Cognitive / exercise dosing (caffeine, green-tea
[[EGCG]]), and [[Prefrontal Cortex]]-mediated cognitive effects generally.

**Related vault notes.** [[Cytochrome P450]], [[EGCG]], [[Dopamine]],
[[Prefrontal Cortex]], [[Liver]], [[Hormesis]], [[Skeletal Muscle]],
CYP1A2 half-life *(no vault note — see gaps)*

---

## PON1 Q192R / L55M

**Substrate.** Paraoxonase-1, an HDL-bound esterase.

**Anatomy.** Synthesised in the [[Liver]], carried in plasma **on HDL**, and
executed at the **arterial intima**, where it hydrolyses oxidised phospholipids in
[[MDA-LDL]]-like particles. It acts at the vessel wall, not in the liver —
another "manufactured in one organ, executed in another" gate, shared with
[[APOE4]] and TMAO.

**Pathway axis.** [[Lipid Peroxidation]] defence within the
[[Atherosclerosis]] pathway; ties directly to the vitamin E branch of
[[Oxidative Stress]] via the coenzyme Q / [[Coenzyme Q10]] and lipid-soluble
antioxidant story.

**Therapeutic class gated.** Oxidized-LDL / lipid-peroxidation defence protocols.
Grade C with a specific reason: activity ranks RR > QR > QQ and LL > LM > MM, but
variation *within* genotype categories exceeds variation *between* them (Jarvik
2000) — a given MM individual may exceed a given LL individual. This row is the
page's own worked example of why genotype alone can be the wrong measurement, and
it is the direct contrast with [[COMT]].

**Related vault notes.** [[PON1]], [[MDA-LDL]], [[Atherosclerosis]],
[[Cardiovascular Disease]], [[Dyslipidemia]], [[Lipid Peroxidation]],
[[Oxidative Stress]], [[Coenzyme Q10]], [[Liver]], [[Metabolic Syndrome]],
[[Alpha-tocopherol]].

---

## KLOTHO KL-VS haplotype

**Substrate.** A two-SNP haplotype in the KLOTHO promoter/exon producing a
splice variant. KL-VS heterozygosity is advantageous; homozygosity is the
opposite.

**Anatomy.** Klotho is highest in [[Kidney]] and brain; the measurable
readout the page uses is **soluble Klotho in [[Cerebrospinal Fluid]]** — a
CNS-compartment measurement, not a serum one. The effect endpoint is
neuroinflammation: KL-VS het attenuates CSF IL-6, S100B, [[Alpha-synuclein]], and
NfL, with a larger effect in an AD-risk-enriched cohort, indicating interaction
with [[APOE4]] rather than an independent effect. Anatomy here is
brain-compartment fluid, and the biomarker *is* the pharmacodynamic readout.

**Pathway axis.** [[Klotho]] → [[mTOR]]/insulin-IGF signalling, phosphate and
vitamin D metabolism, [[NAD+]]. Also the axis by which [[Rapamycin]] rescues
Klotho-deficient models, via stem-cell protection.

**Therapeutic class gated.** Exerkine-oriented stacking. Soluble Klotho is raised
by exercise (Hedges' g 1.3 across 12 RCTs, N=621), so the genotype supports an
exercise prescription with an objective readout — the rare case where a hard-coded
gate and a modifiable exposure are the same analyte.

**Related vault notes.** [[Klotho]], [[APOE4]], [[Alzheimer's Disease]],
[[Microglia]], [[Astrocytes]], [[Cerebrospinal Fluid]], [[Blood-Brain Barrier]],
[[mTOR]], [[NAD+]], [[Rapamycin]], [[Osteoclast]], [[Kidney]].

---

## TERT promoter genotype (rs2853669) and somatic TERTp

**Substrate.** A germline germline-side ETS/TCF binding site in the TERT
promoter, disrupted by the G allele; separately, somatic −124/−146 C>T
canonical promoter mutations in tumour.

**Anatomy.** This is the narrowest anatomical gate on the page, and that is the
point. TERT transcription is rate-limiting for replicative immortality only in
**long-lived, dividing cell populations** — germ cells, [[Bone Marrow]] and
haematopoietic progenitors, [[Intestinal Stem Cell]], epidermal basal
[[Melanocyte]]s, and endothelium. Post-mitotic tissue (neuron, cardiomyocyte) has
already spent its reserve. So the gate is anatomically restricted to the stem-cell
compartment, while the consequence — the upper bound on replicative reserve — is
expressed systemically as [[Replicative Senescence]].

**Pathway axis.** [[Telomere Attrition]] → [[Telomere]] → [[DNA Damage Response]] →
[[p53]]/[[p16]] arrest. TERT activation is rate-limiting, so rs2853669 is an
**upper bound on replicative reserve** that is not modified by NMN,
[[Rapamycin]], or behavioural intervention.

**Therapeutic class gated.** Replicative-senescence / telomere-targeted protocols.
Grade D on the page, correctly: the mechanism is sound and the outcome data are
an association. The germline-by-somatic interaction (germline rs2853669 status
determines survival *in patients carrying a somatic TERTp mutation*) is a genuine
two-layer gate — a germline value that only expresses itself against a somatic
one, which no single-assay panel catches.

**Related vault notes.** [[Telomere]], [[Telomerase]], [[Telomere Attrition]],
[[Replicative Senescence]], [[Senescence]], [[p53]], [[p16]], [[DNA Damage Response]],
[[DNA Repair]], [[Bone Marrow]], [[Intestinal Stem Cell]], [[Cellular Senescence]],
[[Cancer]].

---

## SIRT3 / SIRT6 longevity variants

**Substrate.** SNPs in SIRT3 (rs11555236) and SIRT6 (rs4980329, rs117385980,
rs9997679; N308K, A313S).

**Anatomy.** The two sirtuins sit in different compartments, which explains the
sex-inconsistent findings better than the statistics do.

- **[[SIRT3]]** is mitochondrial-matrix-resident, so its variants act where
  mitochondrial density is highest: [[Myocardium]], [[Skeletal Muscle]],
  [[Kidney]], brown fat, and [[T Cell]]. It deacetylates [[MnSOD]] — the
  actionable readout being Lys68/Lys122 acetylation, the
  [[SIRT3-SIRT4 Ratio]].
- **[[SIRT6]]** is nuclear, acting on chromatin (H3K9 deacetylation, genomic
  stability) and on the [[NAD+]] pool; it is expressed broadly, with liver,
  adipocyte, and neuron among the highest.

**Pathway axis.** [[Sirtuins]] → [[NAD+]] → [[Mitohormesis]] and
[[Autophagy]]; [[SIRT3-SIRT4 Ratio]] for the mitochondrial arm.

**Therapeutic class gated.** SIRT-targeted longevity stacking. And the biological
position is clear: **these must be read jointly with karyotype.** rs11555236 was
associated with longevity in males in an Italian cohort, was not replicated in a
pooled cohort, and was significant in females only in TRELONG. [[SIRT6]]
overexpression extends lifespan in males only (Kanfi 2012); Roichman 2021
reported SIRT6 in both sexes with hepatic [[NAD+]]; the Finnish longevity
association was in Finnish men. Reporting any of these without the sex variable is
reporting half an observation.

**Related vault notes.** [[Sirtuins]], [[SIRT1]], [[SIRT3]], [[SIRT6]],
[[SIRT3-SIRT4 Ratio]], [[NAD+]], [[MnSOD]], [[Rapamycin]], [[Autophagy]],
[[Mitohormesis]], [[Myocardium]], [[Skeletal Muscle]], [[Kidney]], [[T Cell]],
[[Liver]].

---

## mtDNA haplogroup (Grade D)

**Substrate.** Maternal-line mitochondrial genome.

**Anatomy.** Every nucleated cell, with functional concentration in
[[Skeletal Muscle]], [[Myocardium]], [[Kidney]], and brain. Haplogroups differ in
baseline [[ROS]] production, uncoupling capacity, and antioxidant response — and
because mtDNA is maternally inherited, haplogroup co-segregates with maternal-line
confounders in observational studies, which accounts for most of the
inconsistency in the literature.

**Therapeutic class gated.** None. Included on the page to record the *absence* of
measurement in a mitochondria-focused corpus. Grade D and correctly excluded from
any dosing rule.

**Related vault notes.** [[Mitochondria]], [[Oxidative Phosphorylation]],
[[Mitohormesis]], [[ROS]], [[Reactive Oxygen Species]], [[Mitochondrial Uncoupling]],
[[UCP1]], [[Skeletal Muscle]], [[Myocardium]], [[Kidney]], [[Superoxide Radicals]].

---

## Cross-cutting anatomical patterns

Six patterns account for most of the page's structure. They are more useful than
the individual entries, because they tell you where the next gate will sit.

**Produced in one organ, executed in another.** [[APOE4]] (liver → brain
microglia), [[PON1]] (liver → arterial intima), TMAO (colon → liver → vessel
wall), [[Urolithin A]] (colon → muscle, adipose, liver, brain). For these, the
assay and the consequence compartment are anatomically separated, which is why
plasma surrogates misreport. The organ that manufactures the effector is not the
organ that suffers.

**Gates that set a pathway's first step.** [[MC1R]] (pigment synthesis),
[[NQO1]] (quinone reduction route), [[FKBP12]] (complex formation), TERT
(replicative immortality). No dose compensates; the page is right to call these
determinants of admissibility rather than of magnitude.

**Gates that set exposure, not response.** [[Cytochrome P450]] 3A5,
CYP1A2/ADORA2A, [[FKBP12]]'s twin in [[Cytochrome P450]], gut TMA producers. All
correctable by dose; all currently misreported as non-response.

**Gates that set a window rather than a target.** [[MnSOD]] rs4880 via the
[[SIRT3-SIRT4 Ratio]] — the *width* of the hormetic window. [[Estrogen]] status
— the trajectory, not the current value. These are the gates where a numeric
threshold is the wrong output format.

**Gates that flip sign with indication.** [[NQO1]]: T/T is *harmful* in a redox
donor/terminator protocol and *disqualifying* in NQO1-bioactivated chemotherapy.
[[APOE4]]: *missed therapy* for cGAS inhibition and *predicted no-op* for
ketogenic diet. Any register that assigns a single severity per genotype is
wrong; severity is a property of the (genotype, intervention) pair, which the
page's `THERAPIES` map does correctly and its gate cards do not.

**Gates that are modifiers of other gates, not standalone.** TERT germline
rs2853669 expresses only against a somatic TERTp mutation. [[SIRT3]]/[[SIRT6]]
variants express only against karyotype. KLOTHO KL-VS expresses only against
[[APOE4]] dosage. Menopausal status modifies the HFE iron threshold. This is a
compositional structure the page's flat gate list does not represent, and it is
the most common source of wrong conclusions drawn from single-assay panels.

---

## Structural findings

Ordered by how much they change conclusions.

**The karyotype gate is graded A for a cell-death claim that is not grade A.**
The page's Grade A justification is pathway-level sex difference. The
XX-caspase / XY-PARP1-AIF cell-death asymmetry comes from in-vitro insult
paradigms, and [[SIRT6]]-male-only lifespan extension is a transgenic
overexpression result, not a human observation. Two independent, well-known
results are being used to support a grade that neither of them earns. The
*phenotype* — that reproductive stage determines which interventions are
appropriate — is genuinely Grade A. The specific cell-death mapping is Grade B at
best. Recommend splitting: Grade A for endocrine indication, Grade B for
cell-death modality, Grade C for the SIRT6 extrapolation.

**The page's own frontmatter contradicts itself on karyotype.** The gates array
labels `xxpre` as 24% of every population including Black/African-ancestry, and
`xy` at 48% — a figure that is only defensible for a European-ancestry
denominator, and it is the same value in all four columns. Either the population
shares for the sex gate are placeholders (in which case they should be marked as
such, as they are for the urolithin and TMAO gates) or the ancestry selector
silently misreports for this one gate while being correct for the other sixteen.
Right now a Black-ancestry user sees a European-ancestry number and has no way to
know.

**A therapy row is misclassified as harm when it is a dosing observation.**
`fisetin` maps Met/Met to *harm* with the text "Exposure is approximately doubled
relative to fast metabolisers, with additional SAME consumption." Doubled
exposure to a senolytic is an overshoot risk, which is a *dosing* consequence,
not a directional reversal of the mechanism — the mechanism is more available, not
inverted. Compare the *NQO1* T/T row, where harm is correct because the effect
genuinely reverses. If `harm` means "reversed direction," fisetin Met/Met is not
harm; if it means "excess exposure," then the COMT VV row ("increased incident
cancer") and the ALDH2 row share that label for different reasons and the
classification table is not doing the work it appears to do. "SAME" is also an
undefined acronym in the page text.

**The methyl-donor × COMT mapping contradicts the sign the page uses elsewhere.**
`methyl` maps Met/Met to *harm* — reduced COMT activity plus methyl donors →
anxiety and insomnia. This is Grade B and rests on clinical-experience
literature with no citation on the page, while the same page grades [[COMT]]
itself Grade A on the strength of two randomised trials. The asymmetry is
defensible, but the methyl-donor row should carry the evidence it actually has,
and its two neutral rows (Val/Val, Val/Met) assert "downstream methylation
capacity determines tolerance" without a source.

**Non-partitioning gate categories make the Figure 3 bars wrong.** The
`sirt` gate has three values — *common* (78%), *SIRT3 rs11555236 G* (19%),
*SIRT6 N308K/A313S* (3%) — of which the *common* bucket necessarily contains
heterozygous and homozygous carriers of the very variants named in the other two
buckets, and individuals carrying both. The categories overlap, so summing them
for the consequential share double-counts. Figure 3 renders them as adjacent
segments at true population offsets, which asserts a partition the data does not
support. Same issue, milder, in `klotho` (het and homo are disjoint there, fine)
and in `mtdna` (see next). The `klotho` values sum to 1.000 by construction
(.979 + .02 + .001), which is fine, but `klotho` and `sirt` are the two rows
where the displayed population shares are placeholders rather than cohort
estimates and the page does not say so — unlike the urolithin and TMAO rows,
where it does.

**mtDNA haplogroup categories double-count rCRS and the shares are not
cohort estimates.** The three values are `H / rCRS` (low-ROS), `J / T / U / K`
(higher-ROS), and `Other / rCRS-adjacent`. rCRS (re Cambridge Reference
Sequence) is the reference *for* the H haplogroup, so it appears in the first
bucket and is referenced again in the third. The East Asian column is the
clearest symptom: H at 5% and macro at 40% with "other" at 55% is not a
haplogroup frequency table, it is a residual. This is Grade D and excluded from
dosing, so the impact is presentational — but the same `GATES` array is the
source of truth for the Figure 3 bars, and those bars are drawn at scale.

**The panel and the tracker cover different sets.** The "extended panel of
sixteen" and the `GATES` array (17 entries) disagree in both directions:

- In the tracker, absent from the panel: ALDH2 (rs671).
- In the panel, absent from the tracker: somatic TERTp status is folded into the
  tert row but the panel item 12 lists only "A/A · G/G with measured TL" — a
  two-value description for a three-value gate;
  panel item 14 adds CYP2C9/VKORC1, CYP2D6, ADORA2A, and SLCO1B1 metaboliser
  phenotypes, of which only CYP1A2/ADORA2A is in the tracker; panel item 15
  describes PON1 as "Q192R × L55M with measured activity" but the gate's values
  are 192QQ/192QR/192RR only, with L55M named in the code and never used as a
  dimension.
- [[G6PD]] appears in the prose as a gate that "already determines
  admissibility" for [[Methylene blue]] and is in neither the panel nor the
  tracker — which is an odd place for a value that is more firmly
  action-guiding than anything graded A in the list.

**A gate with the wrong assay description is described as requiring an activity
assay and does not offer one.** `sod2`'s `assay` field reads "SNP **plus** measured
MnSOD activity (never the SNP alone)" and panel item 8 repeats it — but the
tracker's value options are three genotype labels and nothing else, so the page
tells the user to measure the enzyme and then gives them no way to enter the
result. The measurement is what makes this gate interpretable, and the tool
structurally cannot accept it. Same failure for `pon1` ("SNP plus diazoxonase
activity"), where the values are pure genotype. The page's own framing — "the
genotype provides only a weak prior and the activity assay is the informative
measurement" — is correct and is then not implemented.

**The Grade column means three different things.** It appears at gate level
(`GATES[].grade`), at therapy level (`THERAPIES[].grade`), and at panel level, and
the values are frequently disjoint for the same underlying relationship:
COMT is **A** as a gate, and the two therapies gated by it are **B**
(`fisetin`, `methyl`) and **A** (`vite`). [[PON1]] is **A** as a gate and **C** as
a therapy. `sirt` is **B** and its therapy is **B**; `tert` is **B** and its
therapy is **D**. The page never states whether these are the same rubric applied
at different resolutions or three rubrics, and a reader comparing a gate badge to
a therapy badge has no way to know why they differ. The definition section
defines the rubric for gate–intervention relationships only.

**The mc1r gate's "other / wild-type 57%" is doing quiet work.** With R-class at
14% and r-class at 29% in European-ancestry, 43% of that population carries at
least one variant; the page's melanoma OR of 2.13 is quoted "with two or more
variants," a category the gate cannot express — it has no *count* dimension, only
*class*. The two-variant risk statement and the single-class gate are not the same
measurement, and the OR is therefore not derivable from the tool's output. Same
structural issue as [[PON1]] L55M: the code names a second variant the values
never use.

**Figure 3's "total consequential" column and the per-segment colouring
disagree by construction.** `wrongSide()` sums the shares of *consequential*
categories and divides by the known total; the segments are drawn at their true
population offsets across the full bar. When a gate's categories do not partition
(`sirt`, `mtdna`) or when a therapy's `_default` is consequential while its named
values are not, the drawn bar and the printed total are answering two different
questions. For the fifteen gates with clean partitions and complete maps they
agree; the exceptions are invisible in the figure and are the ones that matter.

**The page mixes "immutable" and "modifiable" under one heading.** The definition
section correctly calls the urolithin metabotype a *microbial phenotype* and
notes it is the one potentially modifiable value in the set — then the
`Unmeasured Gates` structural-deficiencies list (item 04) raises exactly this as
a deficiency ("the term 'metabotype' is applied to two distinct entities"). The
two sections are describing the same distinction; the page has not decided which
framing the file's own data uses. TMAO producer status is a second microbial gate
with the same property and the same absence of any note about it.

**Registered but not documented negative results sit next to positive ones
without a comparable treatment.** The limitations section retains
GPX1 Pro200Leu (no selenium-response modification, Miller 2012) as evidence —
correct and valuable. But [[G6PD]], the CYP2D6/CYP2C9 CPIC phenotypes, and the
documented failure of ketogenic cognitive benefit in humans are all treated as
findings, and there is no place in the register for a gate that was tested and did
*not* stratify response. The register is ordered by consequential proportion, so
a well-powered null has consequential proportion zero and sorts to the bottom,
where it reads as unimportant rather than as informative.

**"The COMT directory contains 46 notes and includes the corpus's only dedicated
genotype note, whereas the shared entity pool contains 1,812 notes."** Worth
verifying against the current tree before the page ships — the counts are stated
as fact in structural deficiency 01 and are the kind of number that goes stale.

---

## Anatomy gaps in the vault

The anatomy column above is reconstructed from mechanism notes because the vault
has almost no tissue-level notes. Specifically absent, and each blocking for the
mapping the page needs:

- **Integument** — Skin, Epidermis, Dermis, Keratinocyte, Hair Follicle, Nail.
  MC1R's primary anatomical site is unnameable in the vault.
- **Eye** — Retina, Photoreceptor, Uvea, Iris, Ciliary Body, Choroid, Sclera.
  Only [[Retinal Pigment Epithelium]] and [[Retinal Photoreceptors]] exist. MC1R
  and melanoma are eye notes as much as skin notes.
- **Reproductive** — Ovary, Testis, Uterus, Endometrium, Cervix, Prostate, Pituitary.
  The vault's most consequential gate is a sex-hormone gate with no
  reproductive-system anatomy to hang it on. [[Estrogen]],
  [[Estrogen Receptor]] and [[Testosterone]] exist as molecules; the organs that
  produce them do not.
- **Vascular** — Endothelium, Vascular Smooth Muscle, Microvascular. TMAO, PON1,
  and [[APOE4]] all execute at the intima; there is no intima note.
- **Gastrointestinal** — Enterocyte, Goblet Cell, Paneth Cell, Colonic mucosa.
  [[Gastrointestinal Tract]] and [[Intestinal Barrier]] exist; the cell types
  that carry the urolithin and TMAO gates do not. No Choline, Carnitine (only
  [[L-Carnitine]]), or Trimethylamine precursor note.
- **Renal** — Nephron, Podocyte, Urothelial. [[Kidney]] exists; the nephron —
  the compartment where TMAO clearance and the Klotho story both sit — does not.
- **Adipose** — Adipocyte, Brown adipose. SIRT6's adipose and thermogenic role is
  unnameable.
- **Immune** — no Immune, Monocyte, or Neutrophile note. Senescence's immune
  surveillance half, the cGAS–STING microglia story, and the efferocytosis
  clearance mechanism all lack a cell-type anchor.

Also absent and referenced by the page's own prose: Caffeine Metabolism
(CYP1A2 half-life is quoted as a 2–12 hour spread with no note behind it), and
SAME as a methyl donor.

**Recommendation.** Do not create all twenty-odd notes as a side effect of a
biomarker review. Create the four that the page's highest-grade gates execute in:
**Skin**, **Endothelium**, **Enterocyte**, **Nephron**. Those four cover MC1R,
TMAO/PON1/APOE4, the two microbial gates, and Klotho/renal clearance — the
majority of the page's consequential mass. The rest can wait for the
anatomical-pathway work to demand them.

---

## Linking Summary

This review is bidirectional with the page and with the source task outputs it
cites. `hard-coded-biomarker-gates.html` presents the gates as stratifying
variables; this document re-derives the same gates as **anatomical
localisations** and finds that the page's flat structure hides three things —
compartment separation (produced in one organ, executed in another), window
versus target (MnSOD, reproductive stage), and sign flips with indication (NQO1,
APOE4). The structural findings above are internal contradictions in the page's
own data and rubric, not disagreements about mechanism, and each is stated with
the line that produces it so it can be checked against the source. The vault is
strongest exactly where the page's mechanism sections are strongest — redox
chemistry, sirtuin compartment biology, autophagy initiation, iron handling — and
weakest where the page leans hardest on it, namely in having no anatomy to place
any of it. The four-note recommendation at the end of the anatomy section is the
smallest change that would make the page's own claims anatomically checkable.
