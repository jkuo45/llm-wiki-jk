---
type: entity
category: biological_process
aliases:
  - "immune response"
  - "immune system"
tags:
  - "oxidative_stress"
  - "immune"
  - "ros"
created: 2026-05-09
updated: 2026-07-04
---

# Immunity

## Definition
Immunity is the capability of multicellular organisms to resist harmful microorganisms. It involves both specific and nonspecific components.

## Role of Oxidative Stress
[[notes/oxidative_stress/Oxidative Stress]] is fundamentally intertwined with the immune response. Phagocytes, such as [[notes/_link/Neutrophils]] and macrophages, utilize a process called [[notes/_link/Respiratory Burst]] to produce high concentrations of [[notes/_link/Reactive Oxygen Species]] (ROS) and [[Reactive Nitrogen Species]] (RNS) to destroy invading pathogens.

## Redox Signaling in Immunity
Beyond direct pathogen killing, ROS function as [[Signaling Molecules]] that regulate the activation of immune cells and the production of [[Pro-inflammatory Cytokines]] via pathways like [[NF-kappa B]].

## Connections
- [[notes/_link/Respiratory Burst]]: The primary mechanism of ROS production for immune defense.
- [[notes/_link/Inflammation]]: The physiological response often driven by ROS-mediated immune signaling.
- [[notes/_link/Neutrophils]]: Key immune cells that utilize oxidative mechanisms.
- [[NADPH Oxidase]]: The enzyme complex that powers the oxidative immune response.

### Linking Summary:
- New links added: [[notes/oxidative_stress/Oxidative Stress]], [[notes/_link/Neutrophils]], [[notes/_link/Respiratory Burst]], [[notes/_link/Reactive Oxygen Species]], [[Reactive Nitrogen Species]], [[Signaling Molecules]], [[Pro-inflammatory Cytokines]], [[NF-kappa B]], [[notes/_link/Inflammation]], [[NADPH Oxidase]]
- Suggested new entity notes to create: [[Pro-inflammatory Cytokines]]
- Strong connections to strengthen: [[Immunity]] ↔ [[notes/_link/Respiratory Burst]]

## Phagocyte NADPH Oxidase: The NOX2 System

The professional phagocyte NADPH oxidase (NOX2) is the central enzymatic engine of the oxidative immune response. The complex comprises a membrane-bound heterodimer (gp91phox/NOX2 and p22phox) and four cytosolic subunits (p47phox, p67phox, p40phox, and the small GTPase [[Rac|Rac1/2]]). Upon pathogen recognition via [[Toll-like Receptor|Toll-like receptors]] (TLRs), Fc receptors, or complement receptors, the cytosolic subunits translocate to the membrane, assembling the active oxidase. The catalytic core (NOX2) transfers electrons from cytosolic NADPH across the membrane to molecular oxygen in the phagosome, generating [[Superoxide Radicals]] at a rate of up to 2–4 nmol O2•−/min per 10^6 cells. This superoxide spontaneously dismutates to [[notes/_link/Hydrogen Peroxide]], which is further converted by [[Myeloperoxidase]] (released from azurophilic granules) into [[Hypochlorous Acid]] — the major bactericidal oxidant in neutrophils. Genetic defects in any NOX2 subunit cause [[Chronic Granulomatous Disease]] (CGD), characterized by severe recurrent infections, particularly with catalase-positive pathogens such as [[Staphylococcus aureus]], [[Burkholderia cepacia]], and [[Aspergillus species]].

## Macrophage Redox Biology and iNOS

Macrophages utilize both [[NADPH Oxidase|NOX2]] and the inducible isoform of [[Nitric Oxide Synthase]] (iNOS, NOS2) to produce [[notes/_link/Nitric Oxide]] (NO) and [[notes/_link/Reactive Oxygen Species|ROS]] simultaneously. Under inflammatory stimulation (e.g., [[LPS|bacterial lipopolysaccharide]] + [[IFN-γ|interferon-γ]]), iNOS is transcriptionally induced via [[NF-kappa B]] and [[STAT1|STAT1 signaling]], generating micromolar concentrations of NO. The simultaneous production of NO and superoxide by iNOS and NOX2 yields [[Peroxynitrite]] at diffusion-limited rates. Peroxynitrite nitrates tyrosine residues on bacterial proteins (forming 3-nitrotyrosine), inactivates bacterial [[Iron-Sulfur Clusters|iron-sulfur cluster]] enzymes, and damages [[Bacterial DNA|bacterial DNA]]. In alternatively activated (M2) macrophages, arginine metabolism shifts toward [[Arginase|arginase I]] instead of iNOS, producing [[Ornithine]] and [[Polyamines]] that promote tissue repair and fibrosis, illustrating how redox pathway choice determines [[Macrophage Polarization|macrophage polarization]].

## T Cell Redox Regulation and the Glutathione Axis

[[notes/_link/Glutathione]] (GSH) levels within T lymphocytes dictate the balance between pro-inflammatory (Th1/Th17) and anti-inflammatory (Th2/Treg) responses. Antigen-presenting cells ([[Dendritic Cells]], [[notes/_link/Macrophage|macrophages]]) modulate T cell GSH through cysteine delivery: dendritic cells export cysteine, which T cells import via the ASC transporter to support GSH synthesis. Low GSH favors Th1 differentiation by enhancing [[IL-12]] production and [[T-bet]] expression, while high GSH promotes Th2 polarization through [[GATA-3]] upregulation. In T regulatory cells (Tregs), the FOXP3 transcription factor directly induces expression of the [[Thioredoxin|thioredoxin system]] (TXN, TXNRD1), providing resistance to oxidative stress that is critical for their suppressive function in inflamed tissues. The age-related decline in T cell GSH is a hallmark of [[notes/_link/Immunosenescence]], contributing to impaired vaccine responses and increased susceptibility to infections in the elderly.

## Immunometabolism: The Redox-Metabolic Axis

Activated immune cells undergo a metabolic switch from oxidative phosphorylation to aerobic glycolysis (the "Warburg effect" in immunology), which is coupled to ROS production. In T cells, the [[notes/_link/mTOR|mTOR]]/[[HIF-1α]] axis drives glycolytic gene expression, while in macrophages, [[LPS]] stimulation triggers a break in the TCA cycle at isocitrate dehydrogenase and succinate dehydrogenase, leading to accumulation of [[succinate]] and [[citrate]]. Succinate oxidation at [[notes/_link/Mitochondria|mitochondrial]] Complex II drives reverse electron transport at Complex I, generating bursts of [[Mitochondrial ROS|mitochondrial ROS]] (mROS) that stabilize HIF-1α and enhance [[IL-1b]] production. Citrate is exported from mitochondria and used for [[notes/_link/Lipids|fatty acid]] synthesis (needed for membrane expansion) and [[itaconate]] production. Itaconate is a recently discovered anti-inflammatory metabolite that activates [[Nrf2]] through alkylation of [[Keap1]] and inhibits succinate dehydrogenase, forming a negative feedback loop that limits excessive [[notes/_link/Inflammation|inflammation]].

## Oxidative Stress and Immune Senescence

[[notes/_link/Immunosenescence]] and [[notes/_link/Inflammaging]] are driven in part by lifelong accumulation of oxidative damage to immune cells. In aged [[notes/_link/Neutrophils]], NOX2 activity is reduced but mitochondrial ROS are elevated, impairing bacterial killing while increasing bystander tissue damage. [[Hematopoietic Stem Cell|Hematopoietic stem cells]] (HSCs) accumulate oxidative DNA damage over time, leading to a myeloid-biased differentiation skew and impaired lymphopoiesis. The [[p38 MAPK]] pathway, activated by ROS-induced stress signaling, suppresses HSC self-renewal. Caloric restriction and [[notes/_link/Metformin]] partially reverse these age-related immune changes by reducing [[notes/_link/Reactive Oxygen Species|ROS]] production through [[AMPK]]/[[PGC-1α]]-mediated [[notes/_link/Mitochondria|mitochondrial]] biogenesis and antioxidant enzyme induction.

## Connections
- [[Chronic Granulomatous Disease]]: Genetic deficiency in NOX2 causing recurrent infections.
- [[Myeloperoxidase]]: Converts H2O2 to HOCl, the major neutrophil bactericidal agent.
- [[notes/_link/Macrophage]]: iNOS/NOX2 dual system for pathogen killing in macrophages.
- [[notes/_link/Toll-like Receptor]]: Pattern recognition receptors triggering oxidative burst.
- [[notes/_link/mTOR]]: Master regulator of immune cell metabolism and redox balance.
- [[notes/_link/HIF-1α]]: Hypoxia-inducible factor linking metabolism to ROS production.
- [[notes/_link/Immunosenescence]]: Age-related decline in immune function driven by oxidative stress.
- [[notes/_link/Inflammaging]]: Chronic low-grade inflammation fueled by oxidative stress.
- [[notes/_link/Mitochondrial Dysfunction]]: Impairs immune cell metabolism and redox signaling.

### Updated Linking Summary:
- New links added in this revision: [[Myeloperoxidase]], [[Hypochlorous Acid]], [[Toll-like Receptor]], [[LPS]], [[IFN-γ]], [[STAT1]], [[Peroxynitrite]], [[Iron-Sulfur Clusters]], [[Arginase]], [[Macrophage Polarization]], [[notes/_link/Glutathione]], [[Dendritic Cells]], [[IL-12]], [[notes/_link/Thioredoxin]], [[notes/_link/mTOR]], [[HIF-1α]], [[Mitochondrial ROS]], [[notes/_link/Immunosenescence]], [[notes/_link/Inflammaging]], [[Hematopoietic Stem Cell]], [[p38 MAPK]], [[notes/_link/Metformin]], [[AMPK]], [[PGC-1α]], [[Chronic Granulomatous Disease]], [[notes/_link/Mitochondrial Dysfunction]], [[notes/_link/Macrophage]], [[Keap1]]
- Suggested new entity notes to create: [[Itaconate]], [[T Cell Polarization]], [[Succinate]], [[CGD]], [[Rac GTPase]]
