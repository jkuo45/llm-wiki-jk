---
title: The Biochemical Basis of Hormesis
description: Computational screening identifying the incoherent bivalent network motif and saturated-regime requirement as the minimal biochemical basis of drug hormesis, applied to rapamycin/mTOR-PI3K.
type: document
published: 2026-04-23
created: 2026-07-09
source: https://doi.org/10.64898/2026.04.20.719646
author:
  - Guillermo Cerrillo
  - Helena Vidakovic
  - David G. Míguez
tags:
  - hormesis
  - network-motif
  - mtor
  - dose-response
  - systems-biology
  - rapamycin
---

> [!abstract] Preprint Notice
> bioRxiv preprint doi: [10.64898/2026.04.20.719646](https://doi.org/10.64898/2026.04.20.719646); posted April 23, 2026. Not certified by peer review. The copyright holder is the author/funder. All rights reserved.

# The Biochemical Basis of Hormesis

Guillermo Cerrillo[1,2,3], Helena Vidakovic[1,2,3] and David G. Míguez[1,2,3]*

1 Dept. de Física de la Materia Condensada, Universidad Autónoma de Madrid, 28049, Madrid, Spain
2 Centro de Biología Molecular Severo Ochoa, CSIC, 28049, Madrid, Spain
3 Instituto de Física de la Materia Condensada, Universidad Autónoma de Madrid, 28049, Madrid, Spain

*E-mail: david.miguez@uam.es

## Abstract

Atypical dose-response curves, where the effect of a drug does not follow a monotonic shape, are unsuitable but common in drug development. Here, we develop a high-throughput computational screening to search for features that could induce this type of complex hormetic relation between changes in drug concentration and changes in drug effect. Our study suggests that all hormetic networks share a similar core structure: an [[Incoherent Bivalent Motif|incoherent bivalent network motif]] centered on the target of the drug. In addition, the probability of producing a [[Biphasic Dose-Response Curve|biphasic dose response]] requires that one of the interactions operate in the [[Saturated Enzymatic Regime|saturated regime]]. This insight is applied to explain how [[Hormesis|hormesis]] exhibited during long-term [[Rapamycin|rapamycin]] treatment arises directly from the structure of the network of interactions that form the [[mTOR|mTOR]]-[[PI3K|Pi3K]]-[[Akt|Akt]] signaling pathway. Overall, our study shows that drug hormesis can be explained and predicted, and should not be a cause for automatic rejection in the drug development pipeline.

## Introduction

Cells sense, process, and react to stimuli through an intricate network of interacting proteins. Disruptions in these signaling pathways due to inherited or *de novo* genetic alterations may affect the way cells translate these input stimuli into coordinated biological responses. At the tissue level, they can affect homeostasis and cell communication, and are at the core of many degenerative, autoimmune, or proliferative pathologies. Treatment strategies for these diseases with a clear molecular basis include monoclonal antibodies, gene therapy, and targeted small-molecule therapies. In this last category, small-molecule [[Kinase Inhibitor|kinase inhibitors]] stand out as a powerful, efficient, and rapidly developing strategy, with around 94 of them currently approved by the FDA (10 newly approved in 2025 and around 200 currently undergoing clinical trial validation). One of the main requirements for approval is a reliable and predictable relation between dosage and activity. In other words, a [[Biphasic Dose-Response Curve|dose-response curve]] has to follow a typical sigmoidal shape as the concentration increases (below toxic levels), with a well-defined [[IC50]] (the inflection point where the drug reaches 50% efficiency).

In this context, a nontypical dose-response curve constitutes a major red flag, often interpreted as an indication of potential problems or side effects. For instance, drugs with the highest efficiency at a narrow range of concentrations, or even drugs that act as inhibitors at lower doses and activators at higher doses. In the field of drug development, these types of complex dose-responses are commonly referred to as *hormetic* or *biphasic*.

A systematic analysis of peer-reviewed literature identified around 9000 dose–response relationships that can be classified as hormetic (higher frequency of appearance than the typical sigmoidal shape) [3-4]. Compounds as widely used as [[Aspirin|aspirin]] (reduces recurrent cardiovascular events at intermediate doses, but not at low or high doses) [5], [[Heparin|heparin]] (anti-inflammatory at low doses, pro-inflammatory at high doses) [6], [[Progesterone|progesterone]] (decreases plasminogen activator inhibitor type 1 antigen only at intermediate doses) [7]. In addition, [[Nicotinamide|nicotinamide]] (a common neuroprotective agent) [8], [[Metformin|metformin]] (treatment for Type 2 diabetes) [9], several antifungal, antibacterial, antiviral, and antitumour agents (such as [[Curcumin|curcumin]] [10] or ATN-161 Inhibitor [11]), show a clear biphasic response.

> [!info] Rapamycin: the canonical hormetic drug
> Arguably, the most widely reported hormetic drug is [[Rapamycin|rapamycin]] [12-14], an FDA-approved macrolide antibiotic used clinically to induce immunosuppression in organ-transplant patients, vascular anomalies, as well as certain autoimmune conditions and cancers [15]. In the last decade, rapamycin has been shown to have a remarkable potential to increase maximum life span in yeast [16], worms, flies, and mice [17]. In humans, it has been shown to improve multiple physiological parameters associated with aging [17].

[[Rapamycin|Rapamycin]] and its derivatives ([[Rapalogs|rapalogs]]) work basically as [[mTOR|mTOR]] inhibitors, a protein [18-19] involved in many aspects of the aging process [20]. The hormetic characteristics of rapamycin have been widely documented [21-22], with a positive effect at intermediate concentrations, and a detrimental effect at high doses, commonly attributed to toxicity [23-24].

A potential source of complex drug responses is the fact that targets are part of signaling networks, and these can be highly nonlinear in their structure and in the nature of their interactions. Signaling pathways often contain recurrent regulatory motifs with an important role in translating an external stimulus into an appropriate downstream response. The effect of these nonlinear network motifs has been extensively studied and characterized both theoretically and experimentally, and has been shown to influence robustness, adaptation, stability, and dynamics. In this context, negative feedback is known to induce desensitization [25-26], positive feedback can induce bistability, and a feedforward loop induces fold change dependence [27]. The authors have previously shown that certain network motifs can induce a previously unknown form of inverse hysteresis, producing a bistable reversible desensitization to drug treatment [28].

Interestingly, none of the known nonlinear network motifs or any combination of them has been associated with a disruption in the monotonic shape of the dose-response curve. In this direction, the molecular mechanisms that can induce drug hormesis are not known. To investigate this, they designed a high-throughput computational screening to answer the following questions: Are there specific signaling pathway topologies that can induce biphasic dose-response curves? What are the required ingredients to induce hormesis? Can we explain the hormesis reported for key compounds such as rapamycin?

> [!important] Two core ingredients of hormesis
> Our study demonstrates that network topologies where the target of inhibition is part of an [[Incoherent Bivalent Motif|incoherent bivalent motif]] are prone to exhibit biphasic dose-response curves. In addition, if one of the bivalent interactions of the target operates in a [[Saturated Enzymatic Regime|saturated regime]] (high affinity towards its substrate), the probability of hormesis is highly increased. Finally, they apply this insight to explain the hormesis of rapamycin, which arises from the specific topology of the [[mTOR|mTOR]]-[[PI3K|PI3K]] signaling cascade at long exposures.

## Materials And Methods

### Main approach and design

The approach uses a high-throughput computational approach to screen all potential network topologies in a conceptual coarse-grained model of a signaling cascade. The model is centered around a small molecule inhibitor that binds to its *Target* molecule. Molecular interactions above this *Target* are condensed as part of a single *Input* node, while downstream processes are condensed as an *Output* node. A scheme of the approach is illustrated in Fig 1. The signaling starts at the *Input* node, which receives a constant activation signal. The dynamics of the downstream cascade of activation and deactivation events is computed by solving the corresponding set of coupled ODEs. The value of the *Output* node at steady state is recorded, and the entire process is then repeated for increasing concentrations of the inhibitor, constructing the corresponding dose-response curve. Dose-response curves with a difference between their maximum and minimum values lower than 0.01 are labeled as *insensitive* to the drug treatment. The remaining dose-response curves are classified as *Hormetic* if there is a change in the sign of the local slope. Topologies with biphasic curves higher than 1% are classified as "hormetic" and are stored for further classification.

*Figure 1: Scheme of the approach used. (left panel) All potential interaction schemes between three nodes are tested using a high-throughput computational approach. The Input node is constantly stimulated, the Target node is inhibited by our inhibitor, and the activity is monitored based on the Output node. A total of 5000 numerical simulations for each potential network topology (to sample the entire parameter space) are computed until a steady state is reached (central panel). The value of the Output at steady state (vertical dashed line) is plotted for each inhibitor concentration as a dose-response curve. These curves are evaluated and classified as monotonic or hormetic (right panel) based on changes in the sign of the derivative.*

To sample all the parameter space, this process is repeated 5000 times using different values for the kinetic parameters, resulting in 5000 different dose-response curves per topology. Finally, all potential sets of interaction topologies between *Input*, *Target*, and *Output* nodes are evaluated. Since input and output nodes represent multiple interactions (above and below the *Target* protein), feedback regulation (positive and negative) is allowed in these nodes. For simplicity, the *Target* molecule is assumed not to directly activate or deactivate itself, only indirectly via the input and output nodes. In addition, interaction topologies where the *Input*, *Target*, or *Output* nodes are disconnected are not evaluated, and only one interaction between each pair of nodes is allowed. These conditions reduce the set of 3[3x3] = 19683 potential network topologies to only 5346.

### Model Equations and Parameter Sampling

The kinetic equations of the model are defined as three coupled ODEs where interactions between *Input*, *Target*, and *Output* nodes are computed following a [[Michaelis-Menten Kinetics|Michaelis-Menten approach]] of activation-deactivation, in its general form:

where *Xj* and *Xi* (i,j=1…3) correspond to the active form of *Input*, *Target*, and *Output* nodes, (0 < *Xj* < 1, with *Xj* = 1 corresponding to full activation). Parameter *kij* corresponds to the kinetic constant of the interaction of species *i* activating species *j*, and *Kij* is the [[Michaelis-Menten Kinetics|Michaelis-Menten constant]] of this specific interaction.

Computationally, this process is implemented by transcribing all potential topologies as adjacency matrices *A* of 3x3, where the element *Aij* = 1 if there is direct activation of node *j* mediated by node *i*, *Aij* = -1 if there is direct inhibition of node *j* mediated by node *i*, and *Aij* = 0 if there is no interaction from node *i* to node *j*. For instance, a value of *A13* = -1 means that the *Input* node is directly inhibiting the *Output* node, while *A33* = 1 means that the *Output* is directly activating itself. Since there is no direct feedback in the *Target*, the value of *A22* = 0. The δ symbol represents the Kronecker delta function, which can take values of 1 or 0 depending on the topology being evaluated: δ(Aij,1) = 1 only if node i activates node j, δ(Aij,-1) = 1 only if node i inhibits node j.

To avoid the trivial steady state where a node is fully activated if it only receives activating interactions, the software adds a background deactivation interaction as a balance (otherwise). Similarly, if a given node only receives deactivating interactions, the software adds a background activation interaction. Finally, the upstream activation of the network is included as constant activation of the *Input* node.

The inhibition of the *Target* node is implemented by modulating k21 and k23 (i.e., all interactions where the *Target* is acting) by:

where *inh* is the concentration of the inhibitor, which is maintained constant throughout each simulation. For each set, 30 inhibitor concentrations were tested, from *inh* = 0.05 to 1000, distributed on a logarithmic scale. Parameter values are summarized in Table 1.

| **Parameter** | **Value** | **Description** |
| --- | --- | --- |
| Kij | Random between 0.001 and 100 | Michaelis-Menten Constant |
| kij | Random between 0.1 and 10 | Kinetic Constant |
| Xi, Xj | computed | amount of active nodes |
| X1₀ | fixed at 0.0 | Initial input activation |
| X2₀ | fixed at 0.5 | Initial target activation |
| X3₀ | fixed at 0.5 | Initial output activation |
| *inh* | 30 values from 0.05 to 100 | Inhibitor concentration |
| *δ(Aij,1)* | 1 if Aij=1, 0 if Aij≠1 | Delta Kroneker |
| *δ(Aij,-1)* | 1 if Aij=-1, 0 if Aij≠-1 | Delta Kroneker |
| X1max | 0.5 | Activation by stimulus |
| kstim | 0.1 | kinetic constant of stimulus |

### Mass action model of the mTOR-PI3K pathway and the effect of Rapamycin

The mathematical model of the *Pi3K-mTOR* pathway and the interaction of [[Rapamycin|rapamycin]] is implemented as a set of coupled ODEs derived using full mass action kinetics. A scheme of the interactions included in the model is illustrated in Figure 5A, based on the following interactions (marked with red numbers).

- 1. The receptor [[IRS1|IRS]] upstream of the pathway is activated by binding reversibly to [[Insulin Signaling|Insulin]] [29]
- 2. [[IRS1|IRS]] is inactivated by phosphorylation by the active form of [[SK61_2|S6K1/2]] [14, 30]
- 3. Active [[IRS1|IRS]] promotes the activation of [[PI3K|Pi3K]] by phosphorylation [31]
- 4. [[mTOR|mTOR]] can bind to raptor to form the complex [[mTORC1|mTORC1]], or to rictor to form [[mTORC2|mTORC2]] [13]
- 5. [[mTORC1|mTORC1]] activates [[SK61_2|S6K1/2]] by phosphorylation [32]
- 6. [[Rapamycin|Rapamycin]] binds specifically to [[mTORC1|mTORC1]] in a reversible manner [12]
- 7. Active [[PI3K|Pi3K]] activates [[mTORC2|mTORC2]] by phosphorylation [33]
- 8. Active [[PI3K|Pi3K]] activates [[IRS1|IRS1]] indirectly via [[Akt|AKT]], forming a positive feedback loop [34-35]
- 9. Active [[SK61_2|S6K1/2]] deactivates [[mTORC2|mTORC2]] [36]
- 10. [[PTEN|PTEN]] is the main phosphatase that indirectly inactivates [[PI3K|Pi3K]] [37]
- 11. [[PP2A|PP2A]] is the main phosphatase that counteracts the effect of [[mTORC1|mTORC1]] in the activation of [[SK61_2|S6K1/2]] [38-39]

### Computer requirements, algorithms, and code

The approach resulted in a total of 5346 (topologies) × 5000 (parameter sets) × 30 (inhibitor concentrations) ≈ 8×10⁸ simulations, performed on a desktop computer running Windows 11 Pro, with an Intel Core i7-13700 (24 CPUs ~2.1 GHz) and 32 GB of RAM. Code is written in Julia 1.11.4 (available in https://github.com/GuillermoCerrillo/TFM_Hormesis). The model is written in Julia [40] and solved using a Runge-Kutta algorithm implemented in the package *DifferentialEquations* [41]. The solver *AutoTsit5* is used by default. If stiff changes are detected for a particular set of parameters, the program switches to the Rosenbrock23 solver (relative tolerance was set to 1e-8, absolute tolerance was set to 1e-10). Simulations are computed for a minimum of 500 time steps. If equilibrium is not reached at this point (set as a change of 1e-5 between consecutive time points), the simulation continues until equilibrium is reached. If the simulation reaches 2500 time steps, it is discarded from the analysis.

Sampling of the whole parameter space was performed by generating 5000 random sets of *k* and *K* parameters (Latin Hypercube Sampling, from 0.1 to 10 for *kij*, 0.001 to 100 for *Kij*).

## Results

### A large number of topologies exhibit biphasic dose-response curves

A first general characterization of the overall probabilities of hormesis is summarized in Figure 2. The analysis shows that more than 500 of the possible topologies tested show clear non-monotonic dose-response curves (Figure 2A). When organized by the number of interactions, the highest number of topologies that are capable of exhibiting hormesis contain 6 or 7 links (Figure 2B), suggesting that the probability of hormesis increases as the network becomes more complex. Figure 2C shows the same data but normalized by the number of possible topologies per number of links. The increase in the number of hormetic topologies as the number of active links increases indicates that the probability of exhibiting hormesis depends on the density and complexity of the network.

Next, the focus is on investigating what type of interactions induce hormesis with the highest probability. Figure 2D plots the sum of all components of the adjacency matrices for all hormetic topologies. A negative value corresponds to a tendency for deactivating or repressing interactions on average, and a positive value corresponds to an average of activating interactions. This analysis shows a clear tendency towards interactions of the repressing type, with this trend reducing towards a balance between positive and negative interactions as the networks grow in complexity.

Figure 2D focuses on the topology that produced the highest number of biphasic dose-response curves in the analysis (composed of four repressing interactions). Out of the 5000 conditions tested, a total of 475 dose response curves can be classified as nonmonotonic (more than 11% of all parameter sets that show responsiveness to inhibition, Figure 2E). To understand how the biphasic response emerges in this particular topology, three numerical simulations of this topology are plotted for low, medium, and high concentrations of inhibitor. In the three situations, the *Target* (pink line) remains constant at high values, while the concentration of *Input* increases as the inhibitor increases (orange line) because the *Target* is negatively regulating the *Input* node. This increase in the concentration of the *Input* increases the repression of the *Output* mediated by the *Input* node. Interestingly, the effect of inhibition via the *Input* node seems prominent at high inhibitor concentrations, while the direct repression of the *Output* mediated by the *Target* seems to be the dominant interaction at lower concentrations of inhibitor. Overall, the biphasic response in the *Output* node in this particular topology seems to occur due to a balance between activation and repression, taking preference at different concentrations of inhibitor. This balance generates a dose-response curve plotted in Figure 2E, with a clear inverted U shape.

> [!note] Takeaway
> Hormesis is a common feature that can arise even in smaller network motifs, and it is clearly linked to network complexity and favored in networks with a high number of repressing interactions on average. A detailed analysis of the biphasic response in one network shows that the combination of two interactions modulating the activity of the *Target*, one acting at low inhibitor and the other more dominant when the inhibitor is high, seems to be underlying the biphasic dose-response curve.

*Figure 2: Overall Characterization of hormetic network topologies. (A) Percentage of network topologies capable of producing a nonmonotonic dose-response curve. (B) Distribution of topologies capable of producing hormesis by number of links. (C) Percentage of topologies for a given number of links that can produce hormesis. (D) Average sign of the interactions clustered by the number of links in the network. (E) Scheme of the network topology with the highest percentage of Hormetic drug-response curves. (F) Distribution of hormesis versus monotonic drug responses in the previous network. (G) Dynamics of the three nodes for low, medium, and high inhibitor concentration, for a given set of parameter values. (H) Example of a hormetic Dose-Response curve for the previous network topology.*

### Hormesis arises from four minimal topologies with a similar core structure

Next, the study proceeds to investigate whether there are core interactions common to all topologies classified as hormetic. Starting with the largest networks (8-links) and comparing their percentage of hormesis with their parental networks (i.e., networks of 7 links that only differ by a single interaction). If this extra link does not increase the percentage of hormesis, the core architecture required for hormesis is assumed to be the same in both networks and the extra link does not positively influence their hormetic nature. This is then repeated between networks of 7 and 6 links, between 6 and 5, then between 5 and 4, and finally between 4 and 3 links, allowing the filtering out of all redundant network topologies and obtaining a subset of all topologies where each link has a net positive effect in the ability to generate biphasic dose-responses. This new set contains only 16 basic topologies, distributed by link density as shown in Figure 3A.

*Figure 3: Hormesis appears in networks within four core incoherent bivalent motifs. (A) Distribution of network topologies capable of producing nonmonotonic dose-response curves after redundant topologies are filtered. (B-C) Example of a hormetic topology and its illustration as a color diagram. (D) Organization of the 16 Hormetic network topologies of three nodes based on the presence of one of the four core network motifs. (E) Percentage of topologies that have an Incoherent Bivalent Motif centered in the Target node. (F) Percentage of topologies with an Incoherent Bivalent Motif centered in the Target node that produce hormetic dose-response curves. (G) Increase in percentage of Hormetic cases after adding extra links to a core topology.*

Next, the 16 topologies are clustered in families based on common minimal topological motifs, generating a visual representation of the adjacency matrix for each topology as a 3×3 square diagram where links are color-coded by sign (red corresponds to negative interaction, green corresponds to positive interaction, and white corresponds to no interaction). The main common characteristic in all four families is that all have a link from *Target* to *Input*, i.e, pointing upstream to the signal flow (from stimulus to *Output*). This link can be either inhibitory (Groups 1 and 2) or activatory (Groups 3 and 4). In addition, all networks have an additional interaction from *Target* to *Output*. This dual role of the *Target* found in all core topologies is commonly referred to as a [[Incoherent Bivalent Motif|bivalent motif]].

> [!important] The incoherent bivalent motif
> Focusing on the other interactions, if the link from *Target* to *Input* is inhibitory, the other two links in the network have to be either positive (Group 1) or negative (Group 2). On the other hand, if the *Target* activates the *Input*, the network needs two non-feedback links of different sign, combined with a feedback in the *Output* node that can be positive (Group 3) or negative (Group 4). In other words, the requirement for a network to exhibit hormesis is that the two links of the bivalent node have net opposite (direct or indirect) effects in the *Target*, in the form of an [[Incoherent Bivalent Motif|incoherent bivalent motif]]. This network topology is quite common in networks of three nodes, appearing in around 18% of all network topologies included in this study (Figure 3E).

To validate the importance of this structure, the number of networks with an incoherent bivalent motif classified as hormetic by the analysis was computed. Results (Figure 3F) show a 5× increase in the probability to exhibit hormesis, when comparing this subset (58% of the topologies with incoherent bivalent motif can show hormesis) with the set containing all topologies (11%, Figure 2A).

Taking as a starting point the parental network of Group 3, the new links around the incoherent bivalent motif have a mild positive effect on the rate of hormesis, increasing the number of parameter sets that show hormesis from 5% to 6%.

> [!note] Takeaway
> Hormesis requires a biphasic network motif centered on the *Target*. The two paths that act on the *Output* are required to be incoherent. The hormetic topologies can be clustered in four families, corresponding to the four possibilities for this core motif. The probability of a biphasic dose-response curve in any of these four families can be increased by extra links to the network.

### The backward interaction needs to work in the saturated regime

Next, the focus is on the dynamics of the interactions to search for relevant combinations of parameter values linked to biphasic dose-response curves. Combining in a violin plot (Figure 4A) all values of all kinetic and Michaelis-Menten constants that produced a biphasic drug response, the analysis shows that most parameters produce hormesis in their entire range tested, with one exception, the Michaelis-Menten constant of the interaction from *Target* to *Input* K21. Apart from a small number of outliers, its value is significantly lower than the other Michaelis-Menten constants. From the point of view of the Michaelis-Menten interaction, this suggests that the Target is catalyzing the activation or inhibition of the *Input* node working in the [[Saturated Enzymatic Regime|saturated regime]]. In other words, the speed of this reaction is not dependent on the amount of substrate.

To study the impact of this low value of K21, the analysis was performed in all topologies that contain each of the possible four bivalent motifs (18% of the total topologies), but now fixing the value of K21 = 0.001. In these conditions, the percentage of topologies capable of producing hormesis increased from 58% (Figure 3F) to more than 70% (Figure 4C). Despite this mild increase, when focusing on the probability of hormesis for each topology, the true importance of K21 is shown (Figure 4D): from around 6% of parameter sets that produce hormesis (when K21 is random), the rate now increases to 80% when K21 is fixed at 0.001.

> [!important] Saturation of the backward reaction
> The nature of the interaction between *Target* and *Input* has a clear effect on the probability of observing hormesis, with a 10× increase when the speed of this reaction becomes insensitive to the amount of *Input*. In other words, the combination of an [[Incoherent Bivalent Motif|incoherent bivalent loop]] centered in the inhibited node and the upstream reaction working in the [[Saturated Enzymatic Regime|saturated regime]] strongly increases the probability of producing hormetic dose-response curves.

*Figure 4: Hormesis requires the backwards reaction to work in the saturated enzymatic regime. (A-B) A violin diagram of all values of the kinetic constant and Michaelis-Menten constants that show hormesis. (C) Distribution of hormetic and non-hormetic topologies that contain one of the Incoherent Bivalent motifs after fixing the value of K21 = 0.01 (to be compared with Figure 3F). (D) Comparison of the percentage of hormetic dose-response curves in the subset of topologies with Incoherent Bivalent Motifs when using a fixed K21 = 0.001 (green bars) versus randomly selected values (blue bars).*

### Rapamycin is hormetic due to a biphasic motif

As explained in the introduction, one of the most well-characterized and mediatic small molecule inhibitors is [[Rapamycin|rapamycin]], due to its potential in extending the life span of organisms. Many independent studies show a clear inverted U-Shape dose-response curve after long-term rapamycin inhibition (more than 24 hours of treatment), in terms of cell viability, mitochondrial density [23], and expression of Ki-67 (a marker for cell proliferation). The maximum efficiency takes place typically around 1 nM [42], with a clear reduction in these markers if rapamycin is applied at higher concentrations (up to 50 nM). Typically, studies attribute this reduction to side effects or cytotoxicity [43]. On the other hand, many studies often use rapamycin at 100 nM [44] and even 200 nM in tissue culture with no observable or measurable cytotoxic effects [45-50].

As an alternative hypothesis, the authors propose to investigate whether the interaction network in the [[mTOR|mTOR]]-[[PI3K|PI3K]] pathway could be the cause of the hormesis for rapamycin. To test this hypothesis, a similar approach of computational high-throughput is followed. Now, instead of the coarse-grained depiction of a pathway, a full model that contains all the known interactions in the mTOR-PI3K signaling [24] is used, designed as a chain of kinase-phosphatase opposing pairs. The network of interactions is depicted in Figure 5A. In this scheme, the ligand upstream of the signaling cascade is insulin and insulin growth factors, and the downstream readout is identified as [[mTORC2|mTORC2]], since it drives cell cycle progression and survival via [[Akt|AKT]], also regulating mitochondrial physiology, metabolism, and integrity [51]. Moreover, [[mTORC2|mTORC2]] activity has been shown to increase with age [52], and its elimination has been shown to alleviate aging progression [53].

*Figure 5: Rapamycin is Hormetic due to an incoherent bivalent motif centered in its target mTORC1. (A) Scheme of the interactions of the mTOR pathway included in the model. (B) simplification of the interactions in the mTOR pathway architecture as a 3-node network scheme to visualize the dual role of mTORC1. (C) Distribution of cases by shape of the Dose-response curve in the mTOR simulations. (D) Typical Dose-Response curve of active mTORC2 and other key molecules in the pathway. (E) Computation of the Michaelis-Menten constants in all catalyzed interactions involved in the signaling cascade. (F) Heatmap plot of the Pearson Correlation coefficient between all parameters of the model. (G) Principal component analysis applied to the parameter sets that give Hormetic dose-response curves in the 16 core topologies.*

Following a similar strategy as in the previous sections (high-throughput numerical screening with parameter values selected from randomly distributed values), the mass action model composed of 25 coupled ODEs (see Methods) is solved for each parameter using different doses of rapamycin. The steady state value of the output ([[mTORC2|mTORC2]] in this case) is used to generate dose-response curves that are then filtered using the same algorithm to account for bimodal shapes. Figure 5C resumes the results of this screening, showing that 70% of parameter sets in this topology show some sensitivity to rapamycin, with 10% of those dose-responses classified as biphasic. Taking into account that the phase space of the mTOR model is much larger than the coarse-grained model in terms of dimensions (24 parameters versus 16 for the 3-node model), this large probability of hormesis suggests that this topology is highly prone to exhibiting dose-response curves that are not the typical S-shape monotonic. Figure 5D illustrates a typical dose-response curve generated by the simulations, with a clear decrease in [[mTORC2|mTORC2]] activity at intermediate levels (blue line), followed by a reduced sensitivity at higher doses. In addition, the model correctly reproduces the activation of [[PI3K|Pi3K]] (orange line) after rapamycin treatment [54-55] and a reduction in the levels of free [[mTOR|mTOR]] (cyan line) as the concentration of the inhibitor increases [56-57]. The model also reproduces the increase in activity of [[mTORC2|mTORC2]] after short-term exposure to rapamycin [58]. On the other hand, long-term rapamycin exposure (around 24 hours) traps [[mTOR|mTOR]] in [[mTORC1|mTORC1]] complexes, and this obstructs the assembly of [[mTORC2|mTORC2]] [59]. Therefore, rapamycin acts as an indirect activator of [[mTORC2|mTORC2]] (via [[PI3K|Pi3K]]) and an indirect inhibitor of [[mTORC2|mTORC2]], resulting in a network structure that resembles the [[Incoherent Bivalent Motif|incoherent bivalent loop]] found to be at the core of biphasic dose-responses [60] (illustrated in Figure 5B).

To search for regions in the phase space where hormesis is more probable, violin diagrams are generated with all parameter values that produce biphasic dose-response curves. Results show that hormesis can occur in all parameter space for all parameters tested, but when the Michaelis-Menten constants are computed as Ki = (kir+k_i)/kif for all interactions (Figure 5E), the constant corresponding to the activation of [[SK61_2|S6K1/2]] by [[mTORC1|mTORC1]] is significantly smaller on average, with a narrower distribution and lower medium. This correlates with the previous results that lower values of the Michaelis-Menten constant in the backwards interaction from the target ([[mTORC1|mTORC1]] in this case) towards the Input ([[IRS1|IRS1]], controlled by [[SK61_2|S6K1/2]] in this case) increase the rate of hormesis. Estimation of the Pearson correlation coefficient between all parameters of the model for the sets that produce hormesis is plotted as a heatmap in Figure 5F. This data shows a clear positive correlation between k_9 and k_10 (activation and deactivation of [[mTORC2|mTORC2]]). This is consistent with a required balance between opposite reactions acting in key nodes of the pathway. On the other hand, the analysis shows a significant negative correlation between k_1 and k_10 (inhibition of both [[IRS1|IRS1]]-Insulin complex and [[mTORC2|mTORC2]]p by the same enzyme [[SK61_2|S6K1p]]).

Next, to estimate the parameters that induce a higher effect in the hormesis, the dimensionality of the model is reduced using Principal Component Analysis (PCA), using all sets of Michaelis-Menten Constants that resulted in hormesis. The plot in Figure 5G shows all data represented in the obtained PC1 and PC2 axes. Interestingly, the most important parameters in PC1 are K2 = 0.66 and K4 = 0.7, which correspond to phosphorylation and dephosphorylation of [[PI3K|Pi3K]]. This suggests that the levels of [[PI3K|Pi3K]] (the kinase of the output [[mTORC2|mTORC2]]) are relevant in the mechanisms that induce the hormesis.

> [!important] Mechanistic explanation of rapamycin hormesis
> The analysis proposes an alternative explanation of the hormesis exhibited by rapamycin centered on the specific architecture of the network of interactions of the [[mTOR|mTOR]]-[[PI3K|PI3K]] signaling cascade. This is potentially due to the presence of a topology that resembles an [[Incoherent Bivalent Motif|incoherent bivalent network motif]] centered in [[mTORC1|mTORC1]], which can induce a [[Biphasic Dose-Response Curve|biphasic dose-response]] with high probability. The backwards reaction of this motif has a low Michaelis-Menten constant, consistent with the previous findings.

## Discussion

Biological systems process information through complex networks of biomolecular interactions that define how cells respond to stimuli and perturbations such as drug inhibition. Dissecting and simplifying these complicated networks in smaller, manageable key motifs and modules is a successful strategy to understand key properties of this signal processing [27, 61-64].

Previous theoretical approaches to studying hormesis focused on extracting curve parameters and on curve-fitting algorithms applied to these non-linear dose-responses [65-71]. More mechanistic approaches have also been developed to explain the hormesis in opiates based on the autocatalytic properties of opiate receptors [72] or the tradeoff of resources applied to chlorine as an oxidative stressor [73]. Here, an approach centered on a high-throughput computational screening is used that allows testing a very large number of topologies and parameters [28, 74]. To the authors' knowledge, their study constitutes the first attempt to search for general mechanisms that may induce complex non-monotonic responses.

Focusing on the limitations of the study, the coarse-grained perspective [75-77] of representing large pathways as simple networks of three nodes condenses molecular interactions upstream of a *Target* node as a single *Input* node, and molecular interactions downstream of the *Target* as a single *Output* node. This strategy implies that interactions upstream or downstream of the *Target* are linear or close to linear, and that nonlinear interactions are restricted as positive or negative feedback loops on *Input* and *Output* links, or between the three nodes (as Michaelis-Menten type). This simplification is required to obtain a manageable and simple-to-understand set of topologies that can be solved using a high-throughput type of approach. On the other hand, the purpose of the high-throughput approach is not to reproduce the behavior of a specific system, but to find general patterns and rules that can result in complex dose-response curves. In this direction, the fact that the approach allowed the authors to explain the tendency towards hormesis of a much more complex and realistic system (such as rapamycin) serves as a favorable argument about the usefulness of these types of coarse-grain approaches.

Another main limitation in the study is that it relies on a [[Michaelis-Menten Kinetics|Michaelis-Menten]] simplification for the interactions between the nodes (implicitly assuming that enzyme-substrate complex dissociation is basically instantaneous compared to other processes, which may not apply to all steps of a signaling pathway. Alternatively, the model of *mTOR-PI3K* has been written using a full mass action approach. Interestingly, the conclusions of the simplified 3-node Michaelis-Menten model translate quite well to the more complex full-mass-action approach. Based on this, the authors argue that the search for general rules using this type of simple conceptual models can be used to understand more complex and realistic systems.

In these scenarios of more complex models, still, some simplifications are required to make modeling approaches useful and not unnecessarily overly complicated. The rapamycin model includes its binding to [[mTORC1|mTORC1]], and a dynamic equilibrium between free [[mTOR|mTOR]] and [[mTORC1|mTORC1]] [12]. A more detailed model should include the direct intracellular receptor of rapamycin, [[FKBP12|FKBP12]], which interacts with the FRB domain of mTOR. The RICTOR subunit of the [[mTORC2|mTORC2]] inhibits its interaction with the [[FKBP12|FKBP12]]-rapamycin, making it effectively insensitive to rapamycin. Alternatively, the model includes the dynamic disassembly and turnover of the complex, [[mTORC2|mTORC2]], and rapamycin sequestering in [[mTORC1|mTORC1]] complexes, the [[mTOR|mTOR]] required for [[mTORC2|mTORC2]].

> [!info] The role of saturation as a nonlinear threshold
> One of the main findings of the study is the role of the [[Michaelis-Menten Kinetics|Michaelis-Menten constant]] of the backward activating or inhibiting interaction from the *Target* to the *Input*. This saturation acts as an effective non-linear threshold, i.e., the direct pathway to the Output is affected in a relatively linear manner by the inhibitor, but the indirect pathway is buffered (slight reductions in Target activity do not affect the Input node's activity, and only take place once the inhibitor crosses a critical threshold). The fact that only the saturation of the backward link arises as relevant, suggests that the delayed response of the indirect path also plays an important role and contributes to the nonlinear nature of this link.

The main impact of the approach is that it elucidates how a network can shape and modify the response to a drug treatment by inducing complexity in the response. The two main ingredients unveiled by the study (an [[Incoherent Bivalent Motif|incoherent bivalent network motif]] centered on the target of inhibition, and the upstream interaction working in the [[Saturated Enzymatic Regime|saturated regime]]) seem to represent a general rule for a system to exhibit hormesis. A network structure similar to this motif is at the core of the *mTOR-PI3K* pathway, and the authors propose that the hormesis of rapamycin may arise from this topology.

## Conclusions

Signaling pathways are highly nonlinear systems by design, and therefore, inhibitors of proteins inside these complex networks may exhibit a relation between dosage and response that is nonlinear. Therefore, as an alternative approach to discarding drugs from the drug development pipeline due to an atypical dose-response, the authors argue that a better strategy is to understand how this complex behavior arises and define an optimal dose or optimal strategy to overcome or even benefit from this nonlinear behavior.

Here, an *in silico* screening of a coarse-grained model of a signaling pathway was performed to study the minimal ingredients that will induce hormesis. The analysis shows that complex dose-responses with [[Biphasic Dose-Response Curve|biphasic shape]] arise due to a [[Incoherent Bivalent Motif|bivalent interaction]] centered at the target of inhibition, where the two interactions have an opposite effect (direct or indirect) over the output downstream (incoherent). In addition, if the upstream interaction is taking place in the [[Saturated Enzymatic Regime|saturated regime]] (in terms of a typical Michaelis-Menten approach), the resulting dose-response curves will be hormetic with much higher probability than just monotonic. This insight from abstract network topologies allowed the authors to understand that [[Rapamycin|rapamycin]] may exhibit a [[Biphasic Dose-Response Curve|biphasic dose-response]] due to a similar [[Incoherent Bivalent Motif|incoherent network motif]] around its target [[mTOR|mTOR]].

Overall, this type of simplified computational study can be very helpful to understand how complex systems such as signaling pathways integrate, interpret, and process signals, as well as to understand or even predict the effects and dynamics of drugs that target elements inside a highly nonlinear network architecture.

## Bibliography

[1] Philippe L Bedard, David M Hyman, Matthew S Davids and Lillian L Siu, "Small molecules, big impact: 20 years of targeted therapy in oncology," *The Lancet* 395 (2020): 1078--1088.
[2] Robert Roskoski, "Properties of FDA-approved small molecule protein kinase inhibitors: A 2026 update," *Pharmacological Research* 224 (2026): 108107.
[3] Edward J Calabrese, "Hormesis: from marginalization to mainstream," *Toxicology and Applied Pharmacology* 197 (2004): 125-136.
[4] Edward Calabrese, "Hormesis: a fundamental concept in biology," *Microbial Cell* 1 (2014): 145-149.
[5] David F Kong, "Aspirin in cardiovascular disorders: What is the optimum dose?," *American Journal of Cardiovascular Drugs* 4 (2004): 151--158.
[6] Helene Hochart, Vincent P Jenkins, Roger JS Preston, Owen P Smith, Barry White and James O'Donnell, "Concentration-dependent roles for heparin in modifying liopolysaccharide-induced activation of mononuclear cells in whole blood," *Thrombosis and haemostasis* 99 (2008): 570--575.
[7] Edward J Calabrese, "Estrogen and related compounds: biphasic dose responses," *Critical reviews in toxicology* 31 (2001): 503--515.
[8] Kenneth I. Maynard, "Hormesis Pervasiveness and its Potential Implications for Pharmaceutical Research and Development," *Dose-Response* 9 (2011): 1.
[9] Edward J. Calabrese, Evgenios Agathokleous, Rachna Kapoor, Gaurav Dhawan, Walter J. Kozumbo and Vittorio Calabrese, "Metformin-enhances resilience via hormesis," *Ageing Research Reviews* 71 (2021): 101418.
[10] N Rainey, L Motte, B B Aggarwal and P X Petit, "Curcumin hormesis mediates a cross-talk between autophagy and cell death," *Cell Death & Disease* 6 (2015): e2003.
[11] Dipita Bhakta-Guha and Thomas Efferth, "Hormesis: Decoding Two Sides of the Same Coin," *Pharmaceuticals* 8 (2015): 865-883.
[12] Shile Huang, Mary-Ann Bjornsti and Peter J Houghton, "Rapamycins: mechanisms of action and cellular resistance," *Cancer biology & therapy* 2 (2003): 222--232.
[13] Kathryn G Foster and Diane C Fingar, "Mammalian target of rapamycin (mTOR): conducting the cellular signaling symphony," *Journal of Biological Chemistry* 285 (2010): 14071--14077.
[14] Mee-Sup Yoon, "The role of mammalian target of rapamycin (mTOR) in insulin signaling," *Nutrients* 9 (2017): 1176.
[15] Ramasamy Selvarani, Sabira Mohammed and Arlan Richardson, "Effect of rapamycin on aging and age-related diseases—past and future," *Geroscience* 43 (2021): 1135--1158.
[16] Paola Fabrizio, Fabiola Pozza, Scott D. Pletcher, Christi M. Gendron and Valter D. Longo, "Regulation of Longevity and Stress Resistance by Sch9 in Yeast," *Science* 292 (2001): 288-290.
[17] Deborah J W Lee, Ajla Hodzic Kuerec and Andrea B Maier, "Targeting ageing with rapamycin and its derivatives in humans: a systematic review," *The Lancet Healthy Longevity* 5 (2024): e152-e162.
[18] David M. Sabatini, "Twenty-five years of mTOR: Uncovering the link from nutrients to growth," *Proceedings of the National Academy of Sciences* 114 (2017): 11818-11825.
[19] Hanxiao Zhang, Xia Xiao, Zhenrui Pan and Svetlana Dokudovskaya, "mTOR signaling networks: mechanistic insights and translational frontiers in disease therapeutics," *Signal Transduction and Targeted Therapy* 10 (2025): s41392-025-02493-4.
[20] Laura Mantoan Ritter, Nicholas M. P. Annear, Emma L. Baple, et al., "mTOR pathway diseases: challenges and opportunities from bench to bedside and the mTOR node," *Orphanet Journal of Rare Diseases* 20 (2025): s13023-025-03740-1.
[21] Adam D. Barlow, Michael L. Nicholson and Terry P. Herbert, "Evidence for Rapamycin Toxicity in Pancreatic β-Cells and a Review of the Underlying Molecular Mechanisms," *Diabetes* 62 (2013): 2674-2682.
[22] Mikhail V. Blagosklonny, "Fasting and rapamycin: diabetes versus benevolent glucose intolerance," *Cell Death & Disease* 10 (2019): s41419-019-1822-8.
[23] R Mahalakshmi, J Priyanga, Dipita Bhakta-Guha and Gunjan Guha, "Hormetic alteration of mTOR--mitochondria association: An approach to mitigate cellular aging," *Current Opinion in Environmental Science & Health* 29 (2022): 100387.
[24] R. Mahalakshmi, J. Priyanga, Dipita Bhakta-Guha and Gunjan Guha, "Hormetic effect of low doses of rapamycin triggers anti-aging cascades in WRL-68 cells by modulating an mTOR-mitochondria cross-talk," *Molecular Biology Reports* 49 (2021): 463--476.
[25] Yanfei Jiang and Nan Hao, "Memorizing environmental signals through feedback and feedforward loops," *Current Opinion in Cell Biology* 69 (2021): 96-102.
[26] David Lake, Sonia A. L. Corrêa and Jürgen Müller, "Negative feedback regulation of the ERK1/2 MAPK pathway," *Cellular and Molecular Life Sciences* 73 (2016): 4397-4413.
[27] David G. Míguez, "Network nonlinearities in drug treatment," *Interdisciplinary Sciences: Computational Life Sciences* 5 (2013): 85-94.
[28] Victoria Doldán-Martelli and David G. Míguez, "Drug treatment efficiency depends on the initial state of activation in nonlinear pathways," *Scientific Reports* 8 (2018): s41598-018-30913-9.
[29] JF Youngren, "Regulation of insulin receptor function," *Cellular and Molecular Life Sciences* 64 (2007): 873.
[30] Frédéric Tremblay, Sophie Brûlé, Sung Hee Um, et al., "Identification of IRS-1 Ser-1101 as a target of S6K1 in nutrient- and obesity-induced insulin resistance," *Proceedings of the National Academy of Sciences* 104 (2007): 14056-14061.
[31] Peter R Shepherd, Dominic J Withers and Kenneth Siddle, "Phosphoinositide 3-kinase: the key switch mechanism in insulin signalling," *Biochemical Journal* 333 (1998): 471--490.
[32] Brian Magnuson, Bilgen Ekim and Diane C Fingar, "Regulation and function of ribosomal protein S6 kinase (S6K) within mTOR signalling networks," *Biochemical Journal* 441 (2012): 1--21.
[33] Xiaoqing Gan, Jiyong Wang, Bing Su and Dianqing Wu, "Evidence for direct activation of mTORC2 kinase activity by phosphatidylinositol 3, 4, 5-trisphosphate," *Journal of Biological Chemistry* 286 (2011): 10998--11002.
[34] KD Copps and MF White, "Regulation of insulin sensitivity by serine/threonine phosphorylation of insulin receptor substrate proteins IRS1 and IRS2," *Diabetologia* 55 (2012): 2565--2582.
[35] Keren Paz, Yan-Fang Liu, Hagai Shorer, et al., "Phosphorylation of insulin receptor substrate-1 (IRS-1) by protein kinase B positively regulates IRS-1 function," *Journal of Biological Chemistry* 274 (1999): 28816--28822.
[36] Pengda Liu, Wenjian Gan, Hiroyuki Inuzuka, et al., "Sin1 phosphorylation impairs mTORC2 complex integrity and inhibits downstream Akt signalling to suppress tumorigenesis," *Nature cell biology* 15 (2013): 1340--1350.
[37] Osman Nidai Ozes, Hakan Akca, Lindsey D Mayo, et al., "A phosphatidylinositol 3-kinase/Akt/mTOR pathway mediates and PTEN antagonizes tumor necrosis factor inhibition of insulin signaling through insulin receptor substrate-1," *Proceedings of the National Academy of Sciences* 98 (2001): 4640--4645.
[38] Thomas W Sturgill and Jie Wu, "Recent progress in characterization of protein kinase cascades for phosphorylation of ribosomal protein S6," *Biochimica et Biophysica Acta (BBA)-Molecular Cell Research* 1092 (1991): 350--357.
[39] Randall T Peterson, Bimal N Desai, James S Hardwick and Stuart L Schreiber, "Protein phosphatase 2A interacts with the 70-kDa S6 kinase and is activated by inhibition of FKBP12--rapamycin-associated protein," *Proceedings of the National Academy of Sciences* 96 (1999): 4438--4442.
[40] Jeff Bezanson, Alan Edelman, Stefan Karpinski and Viral B Shah, "Julia: A fresh approach to numerical computing," *SIAM Review* 59 (2017): 65--98.
[41] Christopher Rackauckas and Qing Nie, "Differentialequations.jl--a performant and feature-rich ecosystem for solving differential equations in julia," *Journal of Open Research Software* 5 (2017): 15.
[42] Michael N Moore, "Lysosomes, autophagy, and hormesis in cell physiology, pathology, and age-related disease," *Dose-Response* 18 (2020): 1559325820934227.
[43] Paige Yellen, Mahesh Saqcena, Darin Salloum, et al., "High-dose rapamycin induces apoptosis in human cancer cells by dissociating mTOR complex 1 and suppressing phosphorylation of 4E-BP1," *Cell cycle* 10 (2011): 3948--3956.
[44] Dianxin Liu, Marica Bordicchia, Chaoying Zhang, et al., "Activation of mTORC1 is essential for β-adrenergic stimulation of adipose browning," *Journal of Clinical Investigation* 126 (2016): 1704-1716.
[45] Rosa H. Jimenez, Joan M. Boylan, Ju-Seog Lee, et al., "Rapamycin Response in Tumorigenic and Non-Tumorigenic Hepatic Cell Lines," *PLoS ONE* 4 (2009): e7373.
[46] MS Tsao, JW Grisham, BB Chou and JD Smith, "Clonal isolation of populations of γ-glutamyl transpeptidase-positive and-negative cells from rat liver epithelial cells chemically transformed in vitro," *Cancer research* 45 (1985): 5134--5138.
[47] William A Campbell, Deborah E Sah, Maria M Medina, Jorge E Albina, William B Coleman and Nancy L Thompson, "TA1/LAT-1/CD98 Light Chain and System L Activity, but Not 4F2/CD98 Heavy Chain, Respond to Arginine Availability in Rat Hepatic Cells: LOSS OF RESPONSE IN TUMOR CELLS," *Journal of Biological Chemistry* 275 (2000): 5347--5354.
[48] Lester W Lee, Ming-Sound Tsao, Joe W Grisham and Gary J Smith, "Emergence of neoplastic transformants spontaneously or after exposure to N-methyl-N'-nitro-N-nitrosoguanidine in populations of rat liver epithelial cells cultured under selective and nonselective conditions," *The American journal of pathology* 135 (1989): 63.
[49] Douglas C Hixson, Kerry D McEntire and Björn Öbrink, "Alterations in the expression of a hepatocyte cell adhesion molecule by transplantable rat hepatocellular carcinomas," *Cancer research* 45 (1985): 3742--3749.
[50] Douglas C Hixson, Jeanne Brown, Angela C McBride and Suzanne Affigne, "Differentiation status of rat ductal cells and ethionine-induced hepatic carcinomas defined with surface-reactive monoclonal antibodies," *Experimental and molecular pathology* 68 (2000): 152--169.
[51] Charles Betz, Daniele Stracka, Cristina Prescianotto-Baschong, Maud Frieden, Nicolas Demaurex and Michael N. Hall, "mTOR complex 2-Akt signaling at mitochondria-associated endoplasmic reticulum membranes (MAM) regulates mitochondrial physiology," *Proceedings of the National Academy of Sciences* 110 (2013): 12526-12534.
[52] Karthikeyani Chellappa, Jacqueline A. Brinkman, Sarmistha Mukherjee, et al., "Hypothalamic mTORC2 is essential for metabolic health and longevity," *Aging Cell* 18 (2019): acel13014.
[53] Weitong Xu, Honghan Chen and Hengyi Xiao, "mTORC2: A neglected player in aging regulation," *Journal of Cellular Physiology* 239 (2024): jcp31363.
[54] X Wan, B Harkavy, N Shen, P Grohar and L J Helman, "Rapamycin induces feedback activation of Akt signaling through an IGF-1R-dependent mechanism," *Oncogene* 26 (2006): 1932-1940.
[55] Xian-Guo Chen, Fei Liu, Xing-Fu Song, et al., "Rapamycin regulates Akt and ERK phosphorylation through mTORC1 and mTORC2 signaling pathways," *Molecular Carcinogenesis* 49 (2010): 603-610.
[56] Fangjie Xiong, Pan Dong, Mei Liu, et al., "Tomato FK506 binding protein 12KD (FKBP12) mediates the interaction between rapamycin and target of rapamycin (TOR)," *Frontiers in Plant Science* 7 (2016): 1746.
[57] Andreas M März, Anne-Katrin Fabian, Christian Kozany, Andreas Bracher and Felix Hausch, "Large FK506-binding proteins shape the pharmacology of rapamycin," *Molecular and cellular biology* 33 (2013): 1357--1367.
[58] Henry Querfurth and Han-Kyu Lee, "Mammalian/mechanistic target of rapamycin (mTOR) complexes in neurodegeneration," *Molecular neurodegeneration* 16 (2021): 44.
[59] Ghada A Soliman, "The role of mechanistic target of rapamycin (mTOR) complexes signaling in the immune responses," *Nutrients* 5 (2013): 2231--2257.
[60] Mirko Völkers, Mathias H Konstandin, Shirin Doroudgar, et al., "Mechanistic target of rapamycin complex 2 protects the heart from ischemic damage," *Circulation* 128 (2013): 2132--2144.
[61] Ian A. Swinburne, David G. Miguez, Dirk Landgraf and Pamela A. Silver, "Intron length increases oscillatory periods of gene expression in animal cells," *Genes & Development* 22 (2008): 2342-2346.
[62] David G. Míguez, "The role of asymmetric binding in ligand–receptor systems with 1:2 interaction ratio," *Biophysical Chemistry* 148 (2010): 74-81.
[63] David G. Míguez, Estel Gil-Guiñón, Sebastián Pons and Elisa Martí, "Smad2 and Smad3 cooperate and antagonize simultaneously in vertebrate neurogenesis," *Journal of Cell Science* 123 (2013): jcs130435.
[64] Ahmed N. Fayad, Diego Mazo-Durán and David G. Míguez, "Cellular Compartmentalization as a Physical Regulatory Mechanism of Signaling Pathways," *Biophysica* 4 (2024): 634-650.
[65] Ziqing Deng, Zhifen Lin, Xiaoming Zou, et al., "Model of hormesis and its toxicity mechanism based on quorum sensing: a case study on the toxicity of sulfonamides to Photobacterium phosphoreum," *Environmental science & technology* 46 (2012): 7746--7754.
[66] TATSUYA YOSHIMASU, TAKUYA OHASHI, SHOJI OURA, et al., "A Theoretical Model for the Hormetic Dose-response Curve for Anticancer Agents," *Anticancer Research* 35 (2015): 5851--5855.
[67] Xiang-Wei Zhu, Shu-Shen Liu, Li-Tang Qin, Fu Chen and Hai-Ling Liu, "Modeling non-monotonic dose--response relationships: Model evaluation and hormetic quantities exploration," *Ecotoxicology and environmental safety* 89 (2013): 130--136.
[68] Min An, "Mathematical modelling of dose-response relationship (hormesis) in allelopathy and its application," *Nonlinearity in biology, toxicology, medicine* 3 (2005): nonlin--003.
[69] Geneviève Bistodeau-Gagnon, Yale S. Michaels and Morgan Craig, "Uncovering Non-Monotonic Antagonistic and Synergistic Combinations (UNMASC), a robust method with applications to T cell differentiation in vitro," *Biorxiv* 1 (2025): 20250907674767.
[70] De Li Liu, Min An, Ian R Johnson and John V Lovett, "Mathematical modeling of allelopathy. III. A model for curve-fitting allelochemical dose responses," *Nonlinearity in biology, toxicology, medicine* 1 (2003): 15401420390844456.
[71] Regina G Belz, Karl Hurle and Stephen O Duke, "Dose-response—a challenge for allelopathy?," *Nonlinearity in biology, toxicology, medicine* 3 (2005): nonlin--003.
[72] Edward J Calabrese, "Opiates: biphasic dose responses," *Critical Reviews in Toxicology* 31 (2001): 585--604.
[73] Qiang Zhang, Jingbo Pi, Courtney G Woods, Annie M Jarabek, Harvey J Clewell III and Melvin E Andersen, "Hormesis and adaptive cellular control systems," *Dose-Response* 6 (2008): dose--response.
[74] Victoria Doldán-Martelli and David G. Míguez, "Synergistic Interaction between Selective Drugs in Cell Populations Models," *PLOS ONE* 10 (2015): e0117558.
[75] Teresa Ruiz-Herrero, Javier Estrada, Raúl Guantes and David G. Miguez, "A Tunable Coarse-Grained Model for Ligand-Receptor Interaction," *PLoS Computational Biology* 9 (2013): e1003274.
[76] Miguel Hernández-del-Valle, Andrea Valencia-Expósito, Antonio López-Izquierdo, et al., "A coarse-grained approach to model the dynamics of the actomyosin cortex," *BMC Biology* 20 (2022): s12915-022-01279-2.
[77] Miguel Hernández-Del-Valle, Andrea Valencia-Expósito, Nicole Gorfinkiel, Maria D. Martín-Bermudo and David G. Míguez, "Analysis of Actomyosin Oscillatory Dynamics Using a Coarse-Grained Model," *Frontiers in Physics* 10 (2022): fphy2022881384.

## Documents

- [[The Biochemical Basis of Hormesis|The Biochemical Basis of Hormesis]]
  - This source document, ingested from the bioRxiv preprint, forms the basis for the entity notes listed below.

## Connections

- [[Hormesis]]: The paper redefines hormesis as a network-topology property rather than a curve-fitting artifact.
- [[Incoherent Bivalent Motif]]: The core minimal structure (centered on the drug target) shown to generate biphasic dose-responses.
- [[Biphasic Dose-Response Curve]]: The quantitative signature (change in sign of local slope) classified by the screening.
- [[Saturated Enzymatic Regime]]: The low-K (backward) interaction that boosts hormesis probability ~10×.
- [[Rapamycin]]: The canonical hormetic drug; its mTOR-PI3K topology is explained mechanistically.
- [[mTORC1]] / [[mTORC2]] / [[mTOR]] / [[PI3K]] / [[Akt]] / [[IRS1]] / [[SK61_2]] / [[PTEN]] / [[PP2A]] / [[FKBP12]]: The proteins whose interactions constitute the incoherent bivalent motif around mTORC1.

## Linking Summary

- New links added: [[Incoherent Bivalent Motif]], [[Biphasic Dose-Response Curve]], [[Saturated Enzymatic Regime]], [[Rapalogs]], [[IC50]], [[mTORC2]], [[SK61_2]], [[Michaelis-Menten Kinetics]], [[Kinase Inhibitor]]
- Suggested new entity notes to create: [[Incoherent Bivalent Motif]], [[Biphasic Dose-Response Curve]], [[Saturated Enzymatic Regime]], [[Rapalogs]], [[IC50]], [[mTORC2]], [[SK61_2]]
- Strong connections to strengthen: [[Rapamycin]] ↔ [[Incoherent Bivalent Motif]]; [[mTORC1]] ↔ [[Hormesis]]; [[Hormesis]] ↔ [[Mitohormesis]]; [[Biphasic Dose-Response Curve]] ↔ [[Hormetic Window]]
- Justification: The paper's central claim — that hormesis arises from an incoherent bivalent motif centered on the inhibited target with a saturated backward interaction — requires dedicated concept notes and should be woven into the existing mTOR/Rapamycin/Hormesis notes.
