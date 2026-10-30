---
type: "query"
date: "2026-10-30T02:28:10.284437+00:00"
question: "Trace the mechanism: ATP depletion stimulates PKC-alpha activity and translocation to plasma membrane, enhancing serine phosphorylation of the Ca2+-permeable cation channel; increased intracellular Ca2+ leads to PS exposure and erythrocyte shrinkage — interconnection between glycolysis, energy metabolism, and cation channel-driven eryptosis"
contributor: "graphify"
outcome: "useful"
source_nodes: ["Eryptosis", "PKC", "Calcium", "Scramblase", "Phosphatidylserine", "Gardos Channel", "Glycolysis", "ATP", "AMPK", "Erythrocytes"]
---

# Q: Trace the mechanism: ATP depletion stimulates PKC-alpha activity and translocation to plasma membrane, enhancing serine phosphorylation of the Ca2+-permeable cation channel; increased intracellular Ca2+ leads to PS exposure and erythrocyte shrinkage — interconnection between glycolysis, energy metabolism, and cation channel-driven eryptosis

## Answer

Expanded from original query via vocab: [eryptosis, erythrocyte, glycolysis, atp, pkc, serine, calcium, scramblase, flippase, calpain, ampk, glucose]. Then traversed wiki-out/graph.json (wikilink graph, 3553 nodes) for the causal chain, and graphify-out/graph.json (triples, 4367 nodes) for typed edges. Chain confirmed in the vault: Glucose -> Glycolysis -> ATP -> PKC (PKC note line 23: ATP depletion drives PKC-alpha membrane translocation, phosphorylates the membrane cation channel, raises cytosolic Ca2+, scramblase activation + PS exposure); PKC -> Calcium; Calcium -> Gardos Channel (KCa3.1, shrinkage executor) and Calcium -> Scramblase (PS exposure); Scramblase -> Phosphatidylserine; Phosphatidylserine -> Eryptosis. Source: src/notes/cell-death/_document_ - Current understanding of eryptosis mechanisms... (line 130: glucose removal or 2-deoxyglucose -> fast ATP loss -> PKCalpha activation -> serine phosphorylation of cation channels -> Ca2+ rise -> PS exposure + shrinkage; AMPK senses this balance) and src/notes/cell-death/Eryptosis.md (energy coupling bullet). Triples graph carries the typed edges Eryptosis->Oxidative Stress (energy depletion impairs calcium extrusion), Scramblase->Eryptosis, Flippase->Eryptosis, Erythropoietin->Eryptosis (AMBIGUOUS). Gaps found: no explicit Glucose/2-deoxyglucose->eryptosis edge; Glycolysis note carries no erythrocyte content (erythrocytes depend solely on glycolysis is asserted in ERMIT triple, not in the Glycolysis note); no PKCalpha/cation-channel phosphorylation edge in triples.

## Outcome

- Signal: useful

## Source Nodes

- Eryptosis
- PKC
- Calcium
- Scramblase
- Phosphatidylserine
- Gardos Channel
- Glycolysis
- ATP
- AMPK
- Erythrocytes