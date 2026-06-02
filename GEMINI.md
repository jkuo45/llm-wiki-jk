# Wiki-style Knowledge Base

## Maintenance

- Create or update README.md within the directory of the topic/subtopic folder.
  - Last updated and total count of entities.
- Project timestamp format %d*%b*%Y %I:%M %p %Z
- documents start with '[document]' in the file name. Depending on task, they may or may not be included in context, counts.
- notes directory is organized by topic.
  - each markdown file within that topic can be counted as a single entity.
- use uv for all python executables
- scripts directory
  - periodically audit scripts for reusability.
  - if they contain values that are task specific, refactor for reusability.

## Linking Format

- Use Obsidian-style wiki links: [[Exact Note Title]] or [[Note Title|Display Text]] when the display text differs.
- Only link to entities and biomedical terms that make sense contextually — do not over-link or create trivial links.
- Prefer precise, canonical note titles (e.g., use [[Large Language Models]] instead of [[LLMs]] unless you know an alias exists).
- e.g. Genes/proteins/enzymes, etc.: [[miR-29b]], [[miR-101]], and [[miR-193a-3p]],[[BRCA1]],[[CaMKII (PP1)]],[[ERK1/2 (MKP-3)]],[[TP53]],[[CFTR]], [[Ser308]], [[Tyr310]], [[PIKfyve]], [[TRMPL1]], [[SLC-36.1]], [[PtdIns(4,5)P2]]
- e.g. Diseases/disorders: [[notes/_link/Alzheimer's Disease]], [[Cystic Fibrosis]], [[Type 2 Diabetes Mellitus]]
- If a concept is mentioned but no dedicated note exists yet, suggest creating one by using a clear [[New Entity Name]] and note it at the end. Prefer space to underscore in the entity name. Create markdown files for each new entity.
- Add links in the most natural places: first meaningful mention is often best.
- In a dedicated "Connections" or "Related" section (if it exists, or create one), list important bidirectional connections with brief one-line explanations.
- Maintain consistency: Use the same exact title for the same entity across files.
- Each new entity should have a Linking Summary.

### Linking Summary:

- New links added: [[Entity1]], [[Entity2]], ...
- Suggested new entity notes to create: [[Missing Concept]]
- Strong connections to strengthen: [[Note A]] ↔ [[Note B]]

### Output Format:

- Return the FULL updated Markdown content with all new [[links]] inserted. At the very end, add a section:

### Orphan Link Resolution

Maintain link integrity by performing periodic audits:

- **Scan & Normalize**:
  - Identify wiki links `[[Link]]` without matching files.
  - **Case Sensitivity**: Prefer proper noun spelling (match the filename exactly).
  - **Pluralization**: If `[[Concept]]` is missing but `[[Concepts]]` exists, update the link.
- **Resolve True Orphans**:
  - Create new Markdown files for missing concepts.
  - Use a standardized template: `# Title`, a one-sentence context, and a `Linking Summary`.
- **Automation**: Use `uv run` to perform batch updates to minimize manual errors and ensure workspace-wide consistency.

### Overlapping Link Resolution

- The scope of this task is entities and topics in the notes directory.
- This process does not need to be ran while extracting entities or triples.
- 'notes/\_link/' directory contains entities that may exist across topics.
- If the entity already exists in 'notes/\_link/' directory, append the wiki entry to it.
- If the entity does not exist, create the entry in 'notes/\_link/' and move the original topic note into the 'notes/\_link/' folder.
  - Use git-mv to move files instead of shell mv.
- Prefer to write with shell commands, python scripts if necessary (execute using uv).
- Although the entity file may be moved to 'notes/\_link', it should still remain on the README.md within that topic.
- The 'notes/\_link/' folder is only for entities that span across multiple topics.
- Maintain only the consolidated file in 'notes/\_link/' to ensure a single source of truth.
- The goal is to highlight these overlapping entities in graph view as central hubs.
- Examples (since they are mentioned across topics in notes):
  - 'notes/\_link/Cancer.md'
  - 'notes/\_link/Autophagy.md'
  - 'notes/\_link/Inflammation.md'
- When a new entity is identified as overlapping, merge its content into the 'notes/\_link/' version and delete the topic-specific files so that it is centrally linked in 'notes/\_link/' directory.
- Validate completeness of the wiki entry.

## Entity Type Schema

To maintain consistency, all entity notes should include an `entity_type` field. Suggest additional entity types if they do not exist. These values are intended for README.md and do not need to be included in entity wiki notes. Depending on topic/user preference, more values maybe added.

### entity type 1 schema

| entity_type_1                 | entity_description_1                                                             | entity_examples_1                                                                     |
| ----------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **Chemical Compound**         | Specific small molecules and chemical substances.                                | [[Adrenochrome]], [[notes/_link/Epinephrine]], [[Sodium nitrite]], [[Methylene blue]] |
| **Chemical Class**            | Groups of chemically related substances.                                         | [[Catecholamines]], [[Aminochromes]], [[Persulfates]]                                 |
| **Metabolite**                | Endogenous or drug metabolites (can overlap with Chemical Compound).             | [[Adrenochrome]] (as epinephrine metabolite), [[6-Hydroxymelatonin]]                  |
| **Enzyme**                    | Specific biological catalysts.                                                   | [[MAO]], [[notes/_link/COMT]], [[notes/_link/Myeloperoxidase]], [[Diaphorase]]        |
| **Protein**                   | Large biomolecules, structural or functional proteins (non-enzyme).              | [[Hemoglobin]], [[Cytochrome b5 reductase]]                                           |
| **Receptor**                  | Signal-receiving proteins.                                                       | [[Adrenergic receptor]], [[D2 receptor]], [[NMDA receptor]]                           |
| **Transporter**               | Membrane proteins that transport molecules.                                      | [[VMAT2]], [[SERT]], [[DAT]]                                                          |
| **Ion Channel**               | Proteins forming ion pores.                                                      | [[hERG channel]], [[Voltage-gated sodium channel]]                                    |
| **Gene**                      | Specific genes or genomic loci.                                                  | [[COMT gene]], [[MAOA]], [[CYP2D6]]                                                   |
| **Genetic Variant**           | Mutations, SNPs, or alleles.                                                     | [[COMT Val158Met]], [[rs4680]]                                                        |
| **Biological Molecule**       | Other metabolites, signaling molecules, radicals, etc.                           | [[notes/_link/Glutathione]], [[notes/_link/Nitric Oxide]], [[Hydroxyl radical]]       |
| **Biomarker**                 | Measurable indicators of biological states.                                      | [[Troponin]], [[Methemoglobin level]], [[8-OHdG]]                                     |
| **Antibody**                  | Immunoglobulins or monoclonal antibodies.                                        | [[Rituximab]], [[Anti-MPO antibody]]                                                  |
| **Cell Type**                 | Specific types of biological cells.                                              | [[notes/_link/Neutrophils]], [[Erythrocytes]], [[Chromaffin cells]]                   |
| **Anatomy**                   | Organs, tissues, or physiological structures.                                    | [[Adrenal gland]], [[notes/_link/Substantia Nigra]], [[Lungs]]                        |
| **Microorganism**             | Bacteria, viruses, fungi, parasites.                                             | [[Pseudomonas aeruginosa]], [[SARS-CoV-2]]                                            |
| **Toxin**                     | Naturally occurring or synthetic poisons.                                        | [[Cyanide]], [[Botulinum toxin]]                                                      |
| **Medical Condition**         | Diseases, syndromes, or pathological states.                                     | [[Methemoglobinemia]], [[Anaphylaxis]], [[notes/_link/Schizophrenia]]                 |
| **Symptom**                   | Subjective patient-reported experiences.                                         | [[Dyspnea]], [[Cyanosis]], [[Hallucinations]]                                         |
| **Clinical Sign**             | Objective observable or measurable findings.                                     | [[Tachycardia]], [[Cherry-red skin]]                                                  |
| **Adverse Effect**            | Undesired reactions to exposures or treatments.                                  | [[Hypertensive crisis]], [[Serotonin syndrome]]                                       |
| **Biological Process**        | Normal or pathological biological events and pathways.                           | [[notes/_link/Inflammation]], [[notes/_link/Respiratory Burst]], [[Homeostasis]]      |
| **Chemical Process**          | Specific chemical reactions or mechanisms.                                       | [[Oxidation]], [[Michael addition]], [[Autoxidation]]                                 |
| **Pharmacological Action**    | Mechanism or effect of a drug/compound.                                          | [[MAO inhibition]], [[Antioxidant]], [[Vasoconstriction]]                             |
| **Diagnostic Test**           | Procedures or tools for medical diagnosis.                                       | [[ABG]], [[Pulse oximetry]], [[Co-oximetry]]                                          |
| **Analytical Technique**      | Scientific methods used for laboratory analysis.                                 | [[HPLC]], [[LC-MS]], [[Mass Spectrometry]], [[H-NMR]]                                 |
| **Imaging Technique**         | Medical or scientific imaging methods.                                           | [[MRI]], [[PET scan]], [[fMRI]]                                                       |
| **Medical Treatment**         | Interventions, therapies, or procedures.                                         | [[Exchange transfusion]], [[Hyperbaric oxygen]]                                       |
| **Surgical Procedure**        | Invasive therapeutic or diagnostic interventions.                                | [[Adrenalectomy]], [[Bronchoscopy]]                                                   |
| **Medical Product**           | Prepared devices or specific pharmaceutical products.                            | [[EpiPen]], [[Neffy]], [[Symjepi]]                                                    |
| **Vaccine**                   | Preparations to stimulate immunity.                                              | [[mRNA COVID-19 vaccine]]                                                             |
| **Scientific Theory**         | Hypotheses or scientific models.                                                 | [[Adrenochrome Hypothesis]], [[Dopamine hypothesis]]                                  |
| **Scientific Concept**        | Broad scientific principles or mechanisms.                                       | [[Redox Cycling]], [[notes/_link/Oxidative Stress]], [[Electrophile]]                 |
| **Laboratory Standard**       | Quality control and reference materials.                                         | [[Reference standard]], [[Certificate of Analysis]], [[Impurity marker]]              |
| **Pharmacokinetic Parameter** | Quantitative ADME properties.                                                    | [[Half-life]], [[Volume of distribution]], [[Bioavailability]]                        |
| **Model Organism**            | Species or strains used in research.                                             | [[Rattus norvegicus]], [[Zebrafish]], [[Knockout mouse]]                              |
| **Person**                    | Historical or scientific figures (less emphasis, exclude, for scoring purposes). | [[Abram Hoffer]], [[Humphry Osmond]]                                                  |
| Organization                  | Public, private sector organizations                                             | [[Merck & Co. Inc]], [[GlaxoSmithKline]]                                              |
| NA                            | If none of the above                                                             |                                                                                       |
