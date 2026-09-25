---
title: PARP1
description: PARP1 (Poly [ADP-ribose] polymerase 1, 116 kDa) is a nuclear zinc-finger
  enzyme that detects DNA strand breaks and catalyzes the transfer of ADP-ribose units
  from NAD+ onto target proteins, forming poly(ADP-ribose) (PAR) chains.
protected: true
created: 2024-01-01
updated: 2026-09-14
tags:
  - enzyme
aliases: [PARP-1, Poly(ADP-ribose) polymerase 1, ARTD1]
---

# PARP1

PARP1 (Poly [ADP-ribose] polymerase 1, 116 kDa) is the founding member of the PARP family, which comprises 17 members in humans. It is a nuclear zinc-finger enzyme that detects DNA strand breaks and catalyzes the transfer of ADP-ribose units from [[NAD+]] onto target proteins, forming poly(ADP-ribose) (PAR) chains. This PARylation modifies histones, transcription factors, and DNA repair proteins to facilitate the DNA damage response. PARP1 is the most abundant nuclear protein—approximately one copy per 1,000 nucleosomes—and the primary sensor of DNA single-strand breaks (SSBs) and double-strand breaks (DSBs). By rapidly synthesizing negatively charged PAR polymers, PARP1 initiates a signaling cascade that recruits downstream repair factors and remodels chromatin to provide access to damaged DNA.

## Structure & Domains

PARP1 is organized into three functional regions. The N-terminal DNA-binding domain contains three zinc finger motifs: Zn1 directly detects DNA strand breaks by recognizing disrupted base pairing, Zn2 mediates allosteric activation of the catalytic domain upon DNA binding, and Zn3 serves as an automodification site where PARP1 attaches PAR chains to itself. The central auto-modification domain harbors BRCT (BRCA1 C-terminus) repeats that mediate protein–protein interactions, a WGR motif involved in DNA binding, and glutamate-rich automodification sites that are targets for self-PARylation. The C-terminal catalytic domain comprises a helical autoinhibitory module—held in a closed conformation by the zinc fingers in the absence of DNA damage—and the ART (ADP-ribosyltransferase) domain, which contains the conserved PARP signature motif His-Glu-Trp-XXX-Glu responsible for NAD+ binding and catalysis.

The structural transition from autoinhibited to active conformation is well-characterized by X-ray crystallography. In the absence of DNA, the helical domain folds over the ART active site, physically blocking NAD+ access. DNA binding induces a lever-arm movement in Zn2 that swings the helical domain away, exposing the catalytic cleft. This allosteric mechanism ensures PARP1 remains silent unless a genuine DNA lesion is present, preventing spurious PARylation that would waste cellular [[NAD+]].

Within the PARP family, [[PARP2]] retains approximately 20% of the catalytic activity of PARP1 and cooperates with it in DNA repair, particularly in the SSBR pathway where PARP1 and PARP2 can form heterodimers at break sites. PARP3 participates in mitotic checkpoint signaling and DNA repair at centrosomes, while PARP4 (also known as vault PARP) is a component of vault particles whose function remains incompletely understood. Tankyrases (TNKS1 and TNKS2) PARylate AXIN proteins in the Wnt signaling pathway and regulate telomere function through shelterin complex modification. PARP6 and PARP7 (TMEM123) have more specialized roles in RNA editing and viral defense, respectively. Despite shared catalytic mechanisms, each family member has distinct substrate preferences, subcellular localizations, and regulatory mechanisms.

## Mechanism of Action

PARP1 activation begins when a DNA strand break is detected by the zinc fingers. Zn1 binds the broken DNA terminus, triggering a conformational change transmitted through Zn2 that relieves autoinhibition of the catalytic domain. The activated ART domain then catalyzes two sequential reactions: automodification, in which PARP1 attaches long, branched PAR chains to itself, and trans-PARylation, in which PAR chains are added to histones, topoisomerases, [[XRCC1]], and DNA-PKcs in the vicinity of the break. The highly negatively charged PAR chains function as a molecular beacon, recruiting DNA repair proteins through their PAR-binding motifs.

For single-strand break repair, PARP1 recruits the SSBR pathway scaffold [[XRCC1]], which in turn coordinates DNA ligase III and DNA polymerase β to seal the break and fill the gap. For double-strand break signaling, PARP1-mediated PARylation facilitates the recruitment of [[ATM]] and ATR kinases, which phosphorylate H2AX (γH2AX) and activate the broader checkpoint response. When homologous recombination is the chosen repair pathway, BRCA1, BRCA2, and RAD51 are mobilized. PAR chains are transient and rapidly degraded by poly(ADP-ribose) glycohydrolase ([[PARG]]) and ADP-ribosylhydrolase 3 ([[ARH3]]), ensuring that repair signaling is spatially and temporally controlled.

## Physiological Function

PARP1 plays essential roles in multiple nuclear processes. Its primary function is DNA single-strand break repair via the SSBR pathway: PARP1 detects the break, recruits the [[XRCC1]] scaffold, and coordinates ligase III and polymerase β to complete repair. This pathway handles approximately 10,000–20,000 SSBs per cell per day arising from oxidative metabolism, spontaneous depurination, and aborted topoisomerase I activity. In double-strand break signaling, PARP1-dependent PARylation helps recruit and activate [[ATM]]/ATR kinases, initiating the DNA damage checkpoint cascade that arrests the cell cycle and prevents replication of damaged templates. PARP1 also mediates chromatin remodeling by PARylating histones H1, H2B, H3, and H4, which neutralizes their positive charge and loosens chromatin structure to expose damaged DNA to repair machinery. This chromatin relaxation is reversible, as PARG rapidly degrades PAR chains once repair is complete.

Beyond DNA repair, PARP1 regulates transcription by modulating the activity of factors such as NF-κB and AP-1, and it contributes to mitotic spindle assembly by PARylating tubulin and NuMA proteins at the mitotic apparatus. Telomere maintenance also depends on PARP1, which PARylates shelterin components to prevent telomere fusion and maintain replicative senescence checkpoints. In the immune response, PARP1 facilitates NF-κB activation and inflammatory gene expression, linking DNA damage sensing to innate immunity.

PARP1 also regulates DNA repair enzymes at the post-translational level. [[PARP1]] poly(ADP-ribosyl)ates [[OGG1]], the bifunctional glycosylase that initiates [[Base Excision Repair]] of 8-oxoguanine lesions, stimulating OGG1's enzymatic activity. This regulatory connection links PARP1 activation to the removal of oxidative DNA damage, the most abundant class of endogenous DNA lesions.

Through its PARylation activity, PARP1 participates in the regulation of [[Autophagy]]. PARsylation of [[ULK1]], [[TFEB]], and [[mTORC1]] components by PARP family enzymes — including PARP1 — modulates autophagic flux. PARP inhibitors such as [[Olaparib]] induce autophagy in cancer cells, suggesting that PARP1 restrains autophagy under basal conditions and that its inhibition relieves this brake.

A critical downstream consequence of excessive PARP1 activation is parthanatos: hyperactivation of PARP1 leads to massive [[NAD+]] consumption, which depletes cellular ATP pools and triggers a caspase-independent form of programmed cell death. During parthanatos, PAR polymers themselves translocate from the nucleus to the mitochondria, where they trigger the release of apoptosis-inducing factor (AIF) from the inner mitochondrial membrane. AIF then translocates to the nucleus and promotes large-scale DNA fragmentation — a morphologically distinct cell death pathway separable from apoptosis, necroptosis, and ferroptosis. NAD+/ATP depletion and PAR–[[Hexokinase-1]] glycolysis inhibition are dissociable arms (2026 PARG-inhibition uncoupling; FK866/NR controls) — see [[Parthanatos]] and `task_output_parthanatos_open_questions_08_Sep_2026.md`. Apoptotic caspase cleavage yields the [[89-kDa PARP1 Fragment]], classically inactivating but now shown (2025) to act as a cytoplasmic PAR carrier feeding AIF signaling.

> [!info]
> Source: [[_document_ - Parthanatos Moura 2024 molecular mechanisms more questions than answers|Moura et al. 2024]]
> PARP1 domain architecture (ZnF1–3, BRCT, WGR, helical autoinhibitory + ART catalytic subdomains) and its high-affinity DNA-break binding make it the defining upstream sensor: genetic deletion or pharmacological inhibition is strongly cytoprotective, the criterion separating parthanatos from [[Apoptosis]]/[[Necrosis]]. The review stresses that whether PARP1 can be catalytically activated without a DNA strand break (in its chromatin, gene-regulation, and inflammation roles) remains unclear, and that the downstream cascade is context-dependent across cell types.

## NAD+ Consumer Network

PARP1 is one of four major NAD⁺-consuming enzyme families — alongside [[CD38]], [[SARM1]], and the [[Sirtuins]] — that compete for a shared intracellular NAD⁺ pool. Each enzyme consumes NAD⁺ through distinct catalytic mechanisms: PARP1 polymerizes ADP-ribose for DNA repair signaling, CD38 and SARM1 hydrolyze NAD⁺ to produce calcium-mobilizing second messengers (cADPR, ADPR), and sirtuins cleave NAD⁺ to fuel lysine deacylation. Altering the activity of one consumer shifts the effective NAD⁺ availability for the others.

The competitive relationship between PARP1 and [[SIRT1]] carries particular significance for aging and metabolism. Because both enzymes use NAD⁺ as substrate, chronic PARP1 activation — from accumulated DNA damage — can suppress SIRT1-dependent deacetylation of targets such as [[PGC-1α]], [[FOXO]] factors, and [[p53]], linking genomic instability to metabolic decline. PARP2 further represses SIRT1 by binding the *Sirt1* promoter directly and downregulating its transcription.

Combined pharmacological inhibition of CD38 and PARP1 fully reversed LPS-induced NAD⁺ decline in macrophages where single-agent inhibition failed (Covarrubias et al. 2020, *Nature Metabolism*), demonstrating that NAD⁺-consumer redundancy buffers individual enzyme blockade. This finding has therapeutic implications for NAD⁺-boosting strategies targeting the aging NAD⁺ consumer network.

## Chromatin Relocalization & Epigenetics

Within the [[Relocalization of Chromatin Modifiers (RCM) Hypothesis]], PARP1 is one of the key [[Chromatin Modifiers]] — alongside [[SIRT1]], [[SIRT6]], and [[HDAC1]] — that relocate from their native genomic loci to sites of [[DNA Damage]], particularly [[Double-Strand Break|double-strand breaks (DSBs)]]. At damage sites, PARP1-dependent PARylation and chromatin remodeling facilitate repair factor access. After repair, these modifiers normally return to their original positions, but imperfect return over a lifetime of accumulated damage is proposed to erode the [[Epigenetic Landscape]], de-repress [[Retrotransposon|retrotransposons]], and drive age-related epigenetic drift. The ICE mouse model, which induces targeted DSBs without introducing mutations, demonstrates that repeated damage-recruitment cycles accelerate epigenetic aging phenotypes, consistent with PARP1's role in this mechanism.

## Pathology & Clinical Relevance

The therapeutic exploitation of PARP1 biology centers on synthetic lethality. In cells deficient in [[BRCA1]] or BRCA2—proteins essential for homologous recombination—the loss of PARP1-mediated repair eliminates the last major pathway available to fix DNA breaks. PARP inhibitors (PARPi) thus cause lethal accumulation of DSBs selectively in BRCA-mutant tumors while sparing normal cells. Four PARPi are FDA-approved: olaparib (Lynparza), rucaparib (Rubraca), niraparib (Zejula), and talazoparib (Talzenna). These agents are indicated for ovarian, breast, pancreatic, and prostate cancers harboring BRCA mutations or homologous recombination deficiency. Talazoparib is notable for its potent PARP-trapping activity, which contributes to greater cytotoxicity but also distinct toxicity profiles.

PARP1 hyperactivation is also implicated in ischemia–reperfusion injury. During stroke and myocardial infarction, oxidative DNA damage triggers excessive PARylation, depleting [[NAD+]] and [[ATP]] and driving cell death. PARPi have shown neuroprotective effects in preclinical stroke models by preserving cellular energy stores. In aging, age-related decline in PARP activity correlates with reduced DNA repair capacity and accumulation of genomic instability, suggesting that maintaining PARP1 function may be important for longevity. Species with longer lifespans tend to have higher basal PARP activity, supporting this association.

### Sex-dimorphic PARP-1/AIF death

The nNOS → PARP-1 → PAR → [[Apoptosis-Inducing Factor|AIF]] cascade is the sexually dimorphic death switch in ischemic brain: males die via PARP/AIF caspase-independent death, females via caspase-mediated death with higher cleaved caspase-3 (Li et al. 2005, *Ann Neurol* 58:317–321; Liu et al. 2009, *Stroke* 40:1842–1848, PMID 19265047). In females PARP-1 is protective, not toxic: its loss shunts females toward enhanced cytochrome-c release and caspase-9/-3 activation, reversible by pan-caspase inhibition (*Stroke* 2011;42:739–745, PMID 21311064). PARP inhibitors, nNOS inhibitors, and related preconditioning protect males but worsen or fail in females even after ovariectomy, so preclinical neuroprotection must stratify by sex. Proposed female-side brakes (estrogen-receptor crosstalk, X-linked inhibitor dosage) remain hypotheses. See [[Parthanatos]] and [[Apoptosis]] for the graded evidence.

Clinical translation has not followed the biology (2026-09-13): the only stroke PARP-inhibitor program to reach the clinic, JPI-289 ([[Amelparib]], Jeil; Ph2a NCT03062397), was built on the male-arm mechanism yet enrolled without sex stratification — its Ph1 ran in healthy male volunteers and neither trial used the male-selective parthanatos biology in its design. Female-side candidates — pan-caspase inhibition (Q-VD-OPh, female-only rescue) and ERβ-selective agonism — carry preclinical rescue evidence but have no stroke program; clinical pan-caspase data are discouraging (emricasan, NASH Ph2b miss, *J Hepatol* 2020), and chronic estradiol stroke trials (WEST, WHI) failed, so the female strategy must target the executor and the ERβ axis rather than hormone replacement. See [[Parthanatos]] §Sex dimorphism for the clinical-translation gap and a straw-man sex-stratified trial design.

PARP1 also promotes [[Inflammation]] by facilitating NF-κB-dependent cytokine expression, positioning it as a potential target in chronic inflammatory conditions. In the [[SASP|senescence-associated secretory phenotype]], the ATM–PARP1–IKK axis is acutely activated in advance of NF-κB signaling; PARP1 was initially shown to mediate NF-κB-associated SASP, with [[IκBζ]] acting as a selective co-activator for a subset of SASP genes (IL6, IL8). PARP inhibitors have demonstrated anti-inflammatory effects in models of arthritis, colitis, and endotoxemia.

Nuclear [[cGAS]] interacts directly with PARP1, disrupting the PARP1–Timeless complex and thereby suppressing [[Homologous Recombination|homologous recombination]]. This cGAS–PARP1 interaction positions nuclear cGAS as a regulator of genome stability independent of its cytosolic DNA-sensing role. In contrast, cGAS from the long-lived [[Naked Mole Rat]] exhibits prolonged chromatin retention and enhances DNA repair, suggesting that PARP1–cGAS crosstalk may be tuned differently in long-lived species.

The interplay between PARP1 and [[SIRT1]] adds another layer of metabolic regulation: because both enzymes consume [[NAD+]], hyperactive PARP1 can suppress SIRT1-dependent deacetylation and metabolic homeostasis, linking DNA damage to metabolic dysfunction. Combined CD38 + PARP1 inhibition fully rescues NAD⁺ levels where single agents fail, underscoring the therapeutic potential of targeting the NAD⁺ consumer network holistically. Recent research has also revealed roles for PARP1 in the regulation of gene expression through PARylation of transcription factors, RNA polymerase II, and chromatin-remodeling complexes, expanding its biological significance well beyond classical DNA repair.

## Documents

  - [[_document_ - Nicotinamide Riboside—The Current State of Research and Therapeutic Uses|Nicotinamide Riboside Review]]
    - PARP1 and PARP2 respond to DNA breaks in the nucleus, consuming NAD⁺ during repair and competing with sirtuins for the NAD⁺ pool.
  - [[_document_ - JCI -Expanding roles of cGAS-STING signaling in neuroinflammation|JCI cGAS-STING in Neuroinflammation]]
    - Nuclear cGAS interacts with PARP1, disrupting the PARP1–Timeless complex to suppress homologous recombination.
  - [[_document_ - The-senescence-associated-secretory-phenotype-and-its-physiological-and-pathological-implications|SASP Implications]]
    - PARP1 mediates NF-κB-associated SASP via the ATM–PARP1–IKK axis; IκBζ is a downstream regulator of SASP genes.
  - [[_document_ - Parthanatos Moura 2024 molecular mechanisms more questions than answers|Moura et al. 2024 Genet Mol Biol]]
    - PARP1 domain architecture and DNA-break-driven hyperactivation as the defining upstream step of parthanatos; open questions on DNA-independent activation and on the downstream cascade.


## Connections

- [[PARP2]] — related family member with ~20% catalytic activity, cooperates in DNA repair
- [[NAD+]] — substrate consumed by PARP1 catalysis; competes with [[SIRT1]], [[CD38]], and [[SARM1]] for this pool
- [[DNA Repair]] — PARP1 is the primary sensor and initiator of the SSB repair pathway
- [[BRCA1]] — deficiency creates synthetic lethality with PARP inhibition
- [[XRCC1]] — scaffold protein recruited by PARP1 for single-strand break repair
- [[ATM]] — kinase recruited to DSBs with assistance from PARP1-dependent PARylation; ATM–PARP1–IKK axis drives SASP
- [[PARP inhibitors]] — therapeutic agents that exploit synthetic lethality in BRCA-mutant cancers
- [[Amelparib]] — JPI-289, the only stroke PARP-inhibitor program to reach the clinic; male-arm parthanatos biology, enrolled without sex stratification
- [[Apoptosis]] — excessive PARP1 activation triggers parthanatos, a caspase-independent cell death pathway
- [[Chromatin]] — PARylation of histones remodels chromatin structure at damage sites
- [[NF-κB]] — transcription factor whose activity is modulated by PARP1-dependent PARylation
- [[Inflammation]] — PARP1 promotes NF-κB activation and pro-inflammatory cytokine expression
- [[DNA Damage]] — PARP1 is the primary detector of DNA strand breaks
- [[Histone Modification]] — PARylation is a post-translational modification of histones
- [[Oxidative Stress]] — oxidative DNA damage is a major activator of PARP1
- [[CD38]] — competing NAD⁺ consumer; combined CD38 + PARP1 inhibition fully rescues NAD⁺
- [[SIRT1]] — competing NAD⁺ consumer; hyperactive PARP1 suppresses SIRT1-dependent deacetylation
- [[cGAS]] — nuclear cGAS binds PARP1, disrupting the PARP1–Timeless complex to suppress homologous recombination
- [[OGG1]] — PARP1 poly(ADP-ribosyl)ates OGG1, stimulating its base excision repair activity
- [[SASP]] — PARP1 mediates NF-κB-driven SASP via the ATM–PARP1–IKK axis
- [[Autophagy]] — PARP1 restrains autophagy; PARP inhibitors (e.g., [[Olaparib]]) induce autophagy
- [[Relocalization of Chromatin Modifiers (RCM) Hypothesis]] — PARP1 is a relocalizing modifier recruited to DSBs
- [[Ischemia-reperfusion Injury]] — PARP1 hyperactivation drives parthanatos in stroke and myocardial infarction
- [[Caspase-3]] — cleaves and inactivates PARP1 during apoptosis as a canonical apoptotic marker

## Linking Summary

- New links added: [[PARP2]], [[NAD+]], [[DNA Repair]], [[BRCA1]], [[XRCC1]], [[ATM]], [[PARP inhibitors]], [[Apoptosis]], [[Chromatin]], [[NF-κB]], [[Inflammation]], [[DNA Damage]], [[Histone Modification]], [[Oxidative Stress]], [[ATP]], [[SIRT1]], [[CD38]], [[SARM1]], [[Sirtuins]], [[cGAS]], [[OGG1]], [[SASP]], [[Autophagy]], [[Olaparib]], [[Relocalization of Chromatin Modifiers (RCM) Hypothesis]], [[Ischemia-reperfusion Injury]], [[Caspase-3]]
- Suggested new entity notes to create: [[PARG]], [[Parthanatos]], [[Apoptosis-Inducing Factor|AIF]]
- Strong connections to strengthen:
  - [[PARP1]] ↔ [[NAD+]] — substrate competition across the NAD⁺ consumer network (CD38, SARM1, sirtuins)
  - [[PARP1]] ↔ [[SIRT1]] — metabolic crosstalk via NAD⁺ competition and PARP2-mediated transcriptional repression
  - [[PARP1]] ↔ [[CD38]] — synergistic NAD⁺ rescue with combined inhibition
  - [[PARP1]] ↔ [[cGAS]] — nuclear cGAS suppresses homologous recombination via PARP1 binding
  - [[PARP1]] ↔ [[Relocalization of Chromatin Modifiers (RCM) Hypothesis]] — PARP1 relocation to DSBs drives epigenetic drift
  - Sex-dimorphism enrichment (2026-09-03): male PARP/AIF vs female caspase death switch; PARP loss shunts females to caspase (Stroke 2011); inhibitors stratify by sex. New links: [[Parthanatos]].
  - Clinical-translation enrichment (2026-09-13): JPI-289 ([[Amelparib]]) Ph2a NCT03062397 enrolled without sex stratification despite male-arm biology; female-arm candidates (pan-caspase, ERβ agonism) lack stroke programs. New links: [[Amelparib]].
  - Source enrichment (2026-09-14): Moura et al. 2024 — PARP1 domain/DNA-break activation framing and downstream-cascade open questions. New links: [[Parthanatos]].
