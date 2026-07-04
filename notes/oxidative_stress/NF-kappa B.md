---
type: entity
category: "protein"
aliases:
  - "NF-kappa B"
  - "NFKB"
  - "nuclear factor kappa-light-chain-enhancer of activated B cells"
tags:
  - "oxidative_stress"
  - "transcription_factor"
  - "inflammation"
created: 2026-05-09
updated: 2026-07-04
---

# NF-kappa B

## Definition
Nuclear factor-kappa B (NF-κB) is a protein complex that functions as a central transcription factor in the regulation of [[Immunity]], [[notes/_link/Apoptosis]], and inflammation. It is highly "redox-sensitive."

## Biological Role
- **Activation:** Inactive in the cytoplasm (bound to IκB); oxidative stress triggers its translocation to the nucleus.
- **Gene Regulation:** Induces the expression of over 500 genes, including pro-inflammatory cytokines ([[TNF-alpha]], [[IL-1b]]), adhesion molecules ([[VCAM-1]]), and enzymes ([[NADPH Oxidase]]).

## Impact on Oxidative Stress
- **Feed-Forward Loop:** ROS activate NF-κB, which in turn induces genes that produce more ROS and inflammation, potentially leading to chronic disease states.
- **Cytoprotection:** Can sometimes induce antioxidant genes (e.g., MnSOD) to protect cells from oxidative stress.

## Connections
- [[notes/oxidative_stress/Oxidative Stress]]: Acts as a key downstream mediator and amplifier.
- [[TNF-alpha]]: A primary cytokine regulated by and capable of activating NF-κB.
- [[notes/_link/Atherosclerosis]]: Plays a central role in the vascular inflammation driven by oxidative stress.

### Linking Summary:
- New links added: [[Immunity]], [[notes/_link/Apoptosis]], [[TNF-alpha]], [[IL-1b]], [[VCAM-1]], [[NADPH Oxidase]], [[notes/oxidative_stress/Oxidative Stress]], [[notes/_link/Atherosclerosis]]
- Suggested new entity notes to create: [[IκB]], [[IKK Complex]], [[Pro-inflammatory Cytokines]]
- Strong connections to strengthen: [[NF-kappa B]] ↔ [[notes/oxidative_stress/Oxidative Stress]]

## Canonical and Non-Canonical Pathways

NF-κB activation proceeds through two distinct signaling cascades that converge on nuclear translocation of different dimeric complexes. The **canonical pathway** is triggered by [[TNF-alpha]], [[IL-1b]], [[LPS|bacterial lipopolysaccharide]], and [[notes/_link/Reactive Oxygen Species|ROS]], leading to activation of the IκB kinase (IKK) complex composed of IKKα (CHUK), IKKβ (IKBKB), and the regulatory subunit NEMO (IKKγ). Activated IKKβ phosphorylates IκB proteins (primarily IκBα) at Ser-32 and Ser-36, triggering K48-linked polyubiquitination by the β-TrCP E3 ligase and subsequent 26S proteasomal degradation. Freed NF-κB dimers (predominantly p50/RelA) translocate to the nucleus within minutes. The **non-canonical pathway** is activated by a distinct set of signals including [[CD40L]], [[BAFF|BAFF/BLyS]], [[Lymphotoxin β]], and [[RANKL]], leading to NIK (NF-κB-inducing kinase)-dependent IKKα homodimer activation. IKKα phosphorylates p100 (NF-κB2), causing its partial proteasomal processing to p52, which then dimerizes with RelB and translocates to the nucleus. The non-canonical pathway operates on a slower timescale (hours) and is essential for [[Secondary Lymphoid Organ|secondary lymphoid organ]] development, B cell maturation, and [[osteoclastogenesis]].

## Redox-Sensitive Regulatory Cysteines

NF-κB activation is exquisitely redox-regulated through specific cysteine residues at multiple levels. In the cytoplasm, [[notes/_link/Hydrogen Peroxide]] (H2O2) inhibits the phosphatase activity of [[PP2A]] and other phosphatases that would otherwise dephosphorylate IKK, thereby sustaining IKK activation. H2O2 also directly oxidizes catalytic cysteine residues in the [[Zinc Finger|zinc finger]] domains of IKKγ/NEMO (Cys-54 and Cys-347), inducing conformational changes that promote IKK oligomerization and activation. In the nucleus, the p50 subunit contains a conserved cysteine (Cys-62 in human p50) in its DNA-binding domain that is susceptible to [[S-Nitrosylation|S-nitrosylation]] and [[S-Glutathionylation|S-glutathionylation]]—reversible modifications that inhibit DNA binding. Similarly, the RelA (p65) subunit has redox-sensitive cysteines (Cys-38) whose oxidation to sulfenic acid (−SOH) disrupts DNA contact. This provides a negative feedback mechanism: high oxidative stress in the nucleus directly terminates NF-κB transcriptional activity, preventing excessive inflammation while allowing transient inflammatory responses.

## Negative Regulation: A20 and CYLD

NF-κB signaling is tightly controlled by a network of negative regulators that are themselves NF-κB target genes, creating feedback loops. [[A20]] (TNFAIP3) is a ubiquitin-editing enzyme that removes K63-linked ubiquitin chains from RIP1 and TRAF6 (via its OTU deubiquitinase domain) and conjugates K48-linked ubiquitin chains targeting them for degradation (via its zinc finger E3 ligase domain), effectively terminating IKK activation. Polymorphisms in TNFAIP3 are strongly associated with [[Rheumatoid Arthritis]], [[Systemic Lupus Erythematosus]], and [[notes/_link/Inflammation|inflammatory bowel disease]]. [[CYLD]] is another deubiquitinase that cleaves K63-linked ubiquitin chains from TRAF2, TRAF6, and NEMO, suppressing both canonical and non-canonical activation. CYLD is inactivated by [[notes/_link/Reactive Oxygen Species|ROS]]-mediated oxidation of its catalytic cysteine (Cys-601), providing a direct mechanism by which [[oxidative_stress|oxidative stress]] prolongs NF-κB activation and contributes to the feed-forward loop of chronic inflammation.

## NF-κB–Nrf2 Crosstalk

The balance between NF-κB (pro-inflammatory) and [[notes/_link/Nrf2]] (cytoprotective/antioxidant) signaling is a central determinant of the cellular response to [[notes/oxidative_stress/Oxidative Stress]]. These two transcription factors exhibit mutual antagonism at multiple levels. First, the Nrf2 target gene p62 ([[p62/SQSTM1|SQSTM1]]) competes with IκB for binding to the E3 ligase β-TrCP, stabilizing IκB and thereby inhibiting NF-κB activation. Second, [[HO-1|Heme oxygenase-1]] (HO-1), an Nrf2 target, degrades free heme, which is required for [[NADPH Oxidase|NOX2]] assembly, reducing ROS production. Third, RelA (p65) directly competes with Nrf2 for the transcriptional coactivator [[CREB-binding protein]] (CBP/p300), which has limiting nuclear levels. Under chronic oxidative stress where NF-κB is persistently activated, Nrf2 activity is suppressed, shifting the balance toward inflammation and tissue damage. This antagonism underlies the therapeutic rationale for Nrf2-activating interventions (e.g., [[Alpha-Lipoic Acid]], [[notes/_link/Sulforaphane]], [[Dimethyl fumarate]]) in [[notes/_link/Inflammation|inflammatory]] and [[notes/_link/Neurodegenerative Diseases|neurodegenerative]] diseases where NF-κB hyperactivity is pathogenic.

## Role in Disease and Therapeutic Targeting

NF-κB hyperactivation is a characteristic feature of [[Cancer]], [[notes/_link/Atherosclerosis]], [[Rheumatoid Arthritis]], [[notes/_link/Inflammatory Bowel Disease]], [[Asthma]], and [[notes/_link/Neurodegenerative Diseases]]. In [[Cancer]], NF-κB promotes survival (via [[BCL-XL|Bcl-XL]], [[XIAP|XIAP]], [[c-FLIP|c-FLIP]]), proliferation (via [[Cyclin D1]], [[c-Myc]]), angiogenesis (via [[VEGF|VEGF]]), and metastasis (via [[MMP9|MMP-9]], [[ICAM1|ICAM-1]]). Therapeutic strategies include proteasome inhibitors ([[Bortezomib]]), which block IκB degradation; IKKβ inhibitors (e.g., [[MLN120B]], [[TPCA-1]]); and naturally occurring inhibitors such as [[Curcumin]], [[Resveratrol]], and [[EGCG]] ([[notes/_link/EGCG]]), which suppress IKK activity or p65 nuclear translocation. However, systemic NF-κB inhibition carries risks due to its essential role in [[notes/_link/Immunity|host defense]] and [[Liver|hepatic]] homeostasis, explaining the [[Hepatotoxicity|hepatotoxicity]] and increased infection risk observed with high-dose [[Curcumin]] or broad IKK inhibitors in clinical trials.

## Connections
- [[notes/_link/Nrf2]]: Master transcriptional antagonist of NF-κB.
- [[A20]]: Key ubiquitin-editing negative regulator of NF-κB.
- [[IκB]]: The inhibitory anchor that retains NF-κB in the cytoplasm.
- [[proteasome]]: Degrades IκB to allow NF-κB activation.
- [[Cancer]]: NF-κB promotes tumorigenesis through survival and proliferation genes.
- [[p50]], [[p65/RelA]], [[c-Rel]], [[RelB]]: NF-κB subunit family members.
- [[Bortezomib]]: Proteasome inhibitor that blocks NF-κB activation.
- [[notes/_link/Inflammation]]: NF-κB is the "master switch" for inflammatory gene expression.
- [[Rheumatoid Arthritis]]: Pathogenic NF-κB activation in synovial fibroblasts.

### Updated Linking Summary:
- New links added in this revision: [[LPS]], [[HIF-1α]], [[PP2A]], [[S-Nitrosylation]], [[Rheumatoid Arthritis]], [[notes/_link/Nrf2]], [[p62/SQSTM1]], [[HO-1]], [[Alpha-Lipoic Acid]], [[notes/_link/Neurodegenerative Diseases]], [[Cancer]], [[BCL-XL]], [[c-FLIP]], [[Curcumin]], [[Resveratrol]], [[notes/_link/EGCG]], [[Bortezomib]], [[CD40L]], [[BAFF]], [[RANKL]], [[Zinc Finger]], [[A20]], [[CYLD]], [[proteasome]], [[notes/_link/Inflammation]], [[Notes/_link/Inflammatory Bowel Disease]], [[Vitamin E]], [[notes/_link/Sulforaphane]]
- Suggested new entity notes to create: [[NEMO]], [[IκBα]], [[TNFAIP3 Polymorphisms]], [[CBP/p300]], [[Dimethyl fumarate]]
