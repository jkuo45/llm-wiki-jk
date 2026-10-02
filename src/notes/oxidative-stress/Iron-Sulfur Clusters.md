---
title: Iron-Sulfur Clusters
description: Iron-sulfur clusters are small inorganic Fe-S cofactor assemblies, most often [2Fe-2S] and [4Fe-4S], built on the ISCU scaffold by the NFS1 desulfurase machinery and inserted into proteins needing electron transfer, catalysis or stress sensing; their loss causes aconitase failure, cluster-free complex II and neurodegeneration.
protected: false
created: 2026-10-01
updated: 2026-10-02
tags: [cofactor, iron, oxidative-stress, mitochondria]
aliases: [Fe-S clusters, Fe/S clusters, iron-sulfur centres, iron sulphur clusters]
---

# Iron-Sulfur Clusters

**Iron-sulfur (Fe-S) clusters** are the smallest inorganic cofactors in biology — typically [2Fe-2S] or [4Fe-4S] assemblies of iron and inorganic sulfide held by cysteine thiolate ligands. They are found in respiratory complexes I, II and III, aconitase, NADPH-dependent oxidoreductases, the mitochondrial DNA polymerase and gamma-glutamyl transpeptidase. They serve as **electron carriers** (their redox potentials span roughly -300 to +100 mV, a range no protein side chain can match), **catalytic centres**, and **sensors** whose cluster occupancy reports on iron, oxygen or oxidative stress.

> [!info] A cofactor that must be made, not supplied
> Unlike NAD+ or ATP, Fe-S clusters are neither dietary nor made by a single enzyme. They need a dedicated assembly pathway with a scaffold, a sulfur donor, an electron source, iron and chaperones — one of the more elaborate cofactor systems in the cell, and the reason Fe-S-deficient organisms are non-viable.

## Chemistry

Iron sits in tetrahedral or trigonal coordination with cluster sulfurs as ligands, giving a delocalised mixed-valent electronic system — which is why a two- or four-iron centre can mediate one-electron chemistry that would be ruinous for a cysteine thiol. Clusters are oxidation-labile: hydrogen peroxide or free iron releases the iron and leaves an apo-protein. This fragility is the mechanistic basis of the cluster's dual role as **damage sensor** and **labilisation target** in oxidative injury.

Cluster **type** predicts function better than protein family: [4Fe-4S] clusters are usually catalytic or structural sensors (aconitase, nitrogenase), while [2Fe-2S] clusters are typically electron-transfer relays, including the Rieske protein of complex III.

## Mitochondrial Biogenesis

Most synthesis occurs in the mitochondrial matrix, and that machinery is shared with cytosolic and nuclear proteins — the long-standing reason cytosolic Fe-S enzymes are also mitochondria-dependent.

1. **Sulfur donation.** The PLP-dependent cysteine desulfurase [[NFS1]] homodimer strips sulfur from cysteine, forming a persulfide on its mobile loop (Cys381 in the human protein). ISD11/LYRM4 stabilises NFS1 and binds the acyl carrier protein ACP, giving a hetero-octamer of two copies each.
2. **Scaffold loading.** Sulfur transfers to a conserved cysteine (Cys138) of the scaffold ISCU. **Frataxin** (FXN) binds between NFS1 and ISCU and allosterically accelerates this transfer — the best-supported view is that frataxin is a persulfide-transfer activator, not an iron chaperone, despite decades of iron-donor proposals. Its loss causes Friedreich's ataxia.
3. **Electron input.** Ferredoxin FDX2 with its reductase supplies reducing equivalents; ISCU dimerisation via Tyr35 completes a [2Fe-2S] cluster.
4. **Chaperoned transfer.** Hsp70 chaperone HSPA9 with co-chaperone HSC20 binds the ISCU LPPVK motif, delivering the cluster either directly to recipients or to secondary carriers — [[CISD1]]/CISD2, NFU1, GLRX5, BOLA3, ISCA1/2 — which then target specific proteins.
5. **Maturation and export.** [2Fe-2S] is upgraded to [4Fe-4S] on late carriers (NFU1, ISCA/IBA57), and an incompletely defined sulfur species is exported through ABCB7 for the cytosolic CIA machinery.

> [!warning] Iron-starvation ferroptosis runs through this pathway
> Suppressing NFS1 alone does not kill a cell; it becomes lethal when the cell is simultaneously under oxidative or iron stress. Blocking cluster biosynthesis starves iron availability, suppresses GPX4 and the iron-dependent detoxifying enzymes, and pushes the cell into [[Ferroptosis]]. The synergy between cluster failure and ROS is what makes Fe-S biogenesis a genuine ferroptosis node rather than a housekeeping detail.

## Consequences of Failure

Because clusters are required by so many proteins, deficiency is pleiotropic. The canonical readouts are **aconitase activity loss** and **complex II (succinate dehydrogenase) deficiency** — the latter because one subunit is itself an Fe-S protein, so complex II fails twice over. Clinically this presents as Friedreich's ataxia, congenital sideroblastic anaemia, ISCU-related myopathy (a distinctive lifelong exercise intolerance rather than a neurodegeneration), NFU1 deficiency in infants, and ABCD1-related adrenoleukodystrophy with cytosolic Fe-S handling defects. Declining biogenesis capacity is also a plausible contributor to the mitochondrial iron accumulation and complex II defect seen in [[Aging]] and in senescent cells after iron chelation.

## Documents
- [[_document_ - Ferroptosis past present and future|Ferroptosis: past, present and future]] — establishes NFS1 as the iron-sulfur cluster biosynthetic enzyme whose suppression, combined with ROS-driven iron starvation, promotes ferroptosis, and describes the cluster-carrying outer mitochondrial membrane protein CISD1 as a ferroptosis brake.

## Connections
- [[NFS1]] — NFS1 is the cysteine desulfurase at the centre of the pathway and the sole source of inorganic sulfur; its suppression couples Fe-S failure to ferroptosis.
- [[Ferroptosis]] — Fe-S biogenesis intersects ferroptosis at two points: NFS1-mediated cluster loss depletes iron-dependent antioxidant capacity, while cluster-bearing proteins such as GPX4 are themselves oxidative damage targets.
- [[CISD1]] — CISD1 is a mitochondrial [2Fe-2S]-carrying protein on the outer membrane that limits lipid peroxidation, connecting cluster biology to ferroptosis control.
- [[Complex II]] — Succinate dehydrogenase contains Fe-S-requiring subunits, so cluster failure gives a combined enzyme-plus-cofactor deficit rather than a simple loss of activity.
- [[Aconitase]] — Aconitase is the vault's named [4Fe-4S] enzyme and the standard biochemical readout of Fe-S cluster status.
- [[Glutathione]] — Glutathione complexes are one candidate source of iron and reducing equivalents for assembly, tying cluster biogenesis to the vault's redox-defence network.
- [[Aging]] — Biogenesis capacity declines with age, and the resulting complex II defect and mitochondrial iron accumulation contribute to the dysfunction that drives senescent arrest.
- [[Fenton Reaction]] — Iron released from labilised clusters feeds the Fenton cycle, which is why Fe-S oxidation converts into oxidative damage.

## Linking Summary
- New links added: [[NFS1]], [[Ferroptosis]], [[CISD1]], [[Complex II]], [[Aconitase]], [[Glutathione]], [[Aging]], [[Fenton Reaction]]
- Suggested notes to create: [[Frataxin]], [[ISCU]], [[ISD11]], [[Ferrochelatase]], [[Friedreich's Ataxia]], [[ABCB7]]
- Strong connections to strengthen: [[Iron-Sulfur Clusters]] ↔ [[NFS1]], [[Iron-Sulfur Clusters]] ↔ [[Ferroptosis]]