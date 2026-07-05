# Wiki-style Knowledge Base

## Project Maintenance:

- Project timestamp format %d\_%B\_%Y %I:%M %p %Z (uppercase)
  - Note: frontmatter dates use YYYY-MM-DD format; the timestamp format above is for README display, task outputs, and file naming only
- Documents start with '[document]' or '\_document\_' in the file name.
  - Depending on task, they may or may not be included in context, counts.
- 'notes' directory:
  - Directory name represents the topic.
  - Each markdown file within that topic can be counted as a single entity.
- 'scripts' directory:
  - Periodically audit scripts for reusability.
  - If they contain values that are task specific, refactor for reusability.
- 'tasks' directory:
  - Contains task outputs. Default to saving to this directory.
- Prefer WriteFile tool over python scripts to create entities.
- Use uv for all python executables

## Linking Format (creating wiki entries/notes/documents):

- Use Obsidian-style wiki links: [[Exact Note Title]] or [[Note Title|Display Text]] when the display text differs.
- Only link to entities and biomedical terms that make sense contextually — do not over-link or create trivial links.
- Prefer precise, canonical note titles (e.g., use [[Large Language Models]] instead of [[LLMs]] unless you know an alias exists).
- e.g. Genes/proteins/enzymes, etc.: [[miR-29b]], [[miR-101]], and [[miR-193a-3p]],[[BRCA1]],[[CaMKII (PP1)]],[[ERK1/2 (MKP-3)]],[[TP53]],[[CFTR]], [[Ser308]], [[Tyr310]], [[PIKfyve]], [[TRMPL1]], [[SLC-36.1]], [[PtdIns(4,5)P2]]
- e.g. Diseases/disorders: [[notes/_link/Alzheimer's Disease]], [[Cystic Fibrosis]], [[Type 2 Diabetes Mellitus]]
- If a concept is mentioned but no dedicated note exists yet, suggest creating one by using a clear [[New Entity Name]] and note it at the end. Prefer space to underscore in the entity name. Create markdown files for each new entity.
- Add links in the most natural places: first meaningful mention is often best.
- In a dedicated "Connections" or "Related" section (if it exists, or create one), list important bidirectional connections with brief explanations.
- Maintain consistency: Use the same exact title for the same entity across files.
- Each new entity should have a Linking Summary.

### Wiki Entries:

- Append-Only Guidelines:
  When modifying existing notes, never rewrite or delete any existing content. Only append new information. Insert links naturally, add new subsections or sections toward the end of relevant areas, and preserve the user's original voice and structure completely. Always update the updated: frontmatter date.
  - Prioritize adding value incrementally.
  - Update the `updated:` date in frontmatter.
- Each topic contains a default linking entity file (e.g. notes/adrenochrome/Adrenochrome.md).
  - This file can be used for Obsidian file merging.
  - Do not create in \_link, append additional content, context to the entity file.
  - Examples:
    - 'notes/autophagy/Autophagy.md'
    - 'notes/cancer/Cancer.md'
    - 'notes/comt/COMT.md'
    - 'notes/epigenetics/Epigenetics.md'
    - 'notes/neuromelanin/Neuromelanin.md'
    - 'notes/oxidative_stress/Oxidative Stress.md'
    - 'notes/sirtuins/Sirtuins.md'
- **Context-dependent content:** Adapt depth, focus, and tone according to the entity type and available scientific literature. For well-studied topics, synthesize multiple high-impact scientific articles, reviews, and meta-analyses. Prioritize recent, high-quality papers (include key PMIDs/DOIs) and clearly distinguish established knowledge from emerging findings.
- Use scientific articles as the primary foundation for all new content. When appending, integrate insights from relevant studies rather than generic knowledge.
- **Depth First:** Do not produce shallow summaries. Expand with mechanisms, historical context, key studies, controversies, open questions, and clinical/research implications. Target 800–3000+ words for established entities (scale appropriately for narrower topics).
- **Evidence-Based:** Ground everything in real scientific understanding. Reference landmark papers, meta-analyses, and recent reviews (include PMIDs/DOIs where possible).
- **Neutral & Precise:** Use formal but accessible language. Clearly distinguish established facts from emerging or controversial findings.
  Interconnectedness: Make the note a hub that intelligently links to related concepts.

- Example for new entities:
  Standard Structure for Gene / Protein / Enzyme:
  - **Overview**: A concise definition, biological role, and cellular localization.
  - **Structure & Domains**: Key structural features, active sites, and post-translational modifications (e.g., phosphorylation sites like [[Ser308]]).
  - **Mechanism of Action & Pathways**: Detailed biochemical pathways, upstream activators, downstream targets, and regulatory feedback loops.
  - **Physiological Function**: Its role in normal tissue development, homeostasis, or systemic physiology.
  - **Pathology & Clinical Relevance**: Associated mutations, overexpression/downregulation in diseases (e.g., cancer, neurodegeneration), and its viability as a therapeutic target.

  ### Standard Structure for Disease / Disorder:
  - **Etiology & Pathophysiology**: Molecular and cellular mechanisms driving the pathology, including genetic risk factors or environmental triggers.
  - **Clinical Presentation & Biomarkers**: Key symptoms, diagnostic criteria, and molecular biomarkers.
  - **Therapeutic Landscape**: Current standard-of-care treatments, mechanism of action of key drugs, and emerging clinical trials or therapeutic strategies.

  ### Standard Structure for Chemicals / Compounds / Drugs:
  - **Chemical Properties & Classification**: Basic structure, class, and target selectivity.
  - **Pharmacodynamics & Pharmacokinetics**: Mechanism of action at the molecular level, absorption, distribution, metabolism, and excretion (ADME) where relevant.
  - **Applications**: Research uses or clinical indications.

- **Format Preferences**:
  - Prefer simple, professional, scientific markdown headings (less enumerated)
  - Enumerated headings only if it makes sense (chronological, scale, etc.)
  - Caution when using backslash in entity note title names, as they may clash with markdown table formats.

### Linking Summary:

- New links added: [[Entity1]], [[Entity2]], ...
- Suggested new entity notes to create: [[Missing Concept]]
- Strong connections to strengthen: [[Note A]] ↔ [[Note B]]

### Semantic Metadata & Properties (Open Knowledge Format, OKF)

When creating or updating a note, include the following frontmatter block. Refer to entity type 1 schema for categories.

Frontmatter:

- **Date format**: frontmatter `created:` / `updated:` must use `YYYY-MM-DD`, _not_ the project display format (`DD_MMMM_YYYY`).
- **Quoting**: Prefer unquoted scalar values (`category: enzyme`, not `category: "enzyme"`). Use quotes only when required (e.g., values containing colons or special characters).
- **Duplicate YAML keys**: No key should appear twice at the same indentation level.

---

type: entity # [entity | document]
category: # [gene | protein | enzyme | disease | chemical | pathway | method]
aliases: [] # Alternative names, abbreviations, acronyms
database_ids: # If applicable
mesh: # Medical Subject Headings ID if available (e.g., D008164)
uniprot: # UniProt ID for proteins (e.g., P04637)
hgnc: # HGNC ID for genes (e.g., HGNC:11998)
chebi: # ChEBI ID for chemicals/compounds
created: YYYY-MM-DD
updated: YYYY-MM-DD
relations: # If applicable

- predicate: # [associated_with | inhibits | activates | regulates | treats | causes]
  target: "[[Target Entity]]"
  sources: [] # DOIs, PMIDs, or reference document names

---

### Output Format:

- Return the FULL updated Markdown content with all new [[links]] inserted. At the very end, add a section:

## Orphan Link Resolution (on user request):

Maintain link integrity by performing periodic audits:

- **Scan & Normalize**:
  - Identify wiki links `[[Link]]` without matching files.
  - **Case Sensitivity**: Prefer proper noun spelling (match the filename exactly).
  - **Pluralization**: If `[[Concept]]` is missing but `[[Concepts]]` exists, update the link.
- **Resolve True Orphans**:
  - Create new Markdown files for missing concepts.
  - Use a standardized template: `# Title`, a short paragraph context, and a `Linking Summary`.
- **Automation**: Use `uv run` to perform batch updates to minimize manual errors and ensure workspace-wide consistency.

## Overlapping Link Resolution (on user request):

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
- Make sure to escape Obsidian link syntax when updating documents and readme files (especially in tables).
- Validate completeness of the wiki entry.

## Subject Object Relation Triples (on user request):

Extract all key factual triples in JSON format:
[{"subject": "...", "predicate": "...", "object": "...", "context": "brief quote or explanation", "confidence": "high/medium/low"}]

Rules:

- Subjects and objects should be specific entities/concepts (normalize names where possible, e.g., use canonical terms).
- Predicates should be clear verbs/relations (e.g., "causes", "is a type of", "outperforms").
- Focus on non-obvious, useful relations. Avoid trivial ones.
- Resolve coreferences.
- Each topic contains and consolidated triples file.
  - Example:
    - 'notes/sirtuins/\_triples_sirtuin.json'
    - 'notes/oxidative_stress/\_triples_oxidative_stress.json'
- The goal is to keep each .json file in sync with ingested documents in that topic.

**Create directed graph analysis**

- In scripts directory, execute visualize triples python script with output.json.
- Output graphviz in .png, .svg, .dot to the tasks directory.
- If not output/export name is provided, name the file(s).
  - 'tasks/task_output\_[timestamp].svg'
  - 'tasks/task_output\_[timestamp].png'
  - 'tasks/task_output\_[timestamp].dot'

## Entity Type Schema:

To maintain consistency, all entity notes should include an `entity_type` field. Suggest additional entity types if they do not exist. These values are intended for README.md and do not need to be included in entity wiki notes. Depending on topic/user preference, more values maybe added.

### entity_type_1 schema:

| entity_type_1                 | entity_description_1                                                 | entity_examples_1                                                                     |
| ----------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **Chemical Compound**         | Specific small molecules and chemical substances.                    | [[Adrenochrome]], [[notes/_link/Epinephrine]], [[Sodium nitrite]], [[Methylene blue]] |
| **Chemical Class**            | Groups of chemically related substances.                             | [[Catecholamines]], [[Aminochromes]], [[Persulfates]]                                 |
| **Metabolite**                | Endogenous or drug metabolites (can overlap with Chemical Compound). | [[Adrenochrome]] (as epinephrine metabolite), [[6-Hydroxymelatonin]]                  |
| **Enzyme**                    | Specific biological catalysts.                                       | [[MAO]], [[COMT]], [[notes/_link/Myeloperoxidase]], [[Diaphorase]]                    |
| **Protein**                   | Large biomolecules, structural or functional proteins (non-enzyme).  | [[Hemoglobin]], [[Cytochrome b5 reductase]]                                           |
| **Receptor**                  | Signal-receiving proteins.                                           | [[Adrenergic receptor]], [[D2 receptor]], [[NMDA receptor]]                           |
| **Transporter**               | Membrane proteins that transport molecules.                          | [[VMAT2]], [[SERT]], [[DAT]]                                                          |
| **Ion Channel**               | Proteins forming ion pores.                                          | [[hERG channel]], [[Voltage-gated sodium channel]]                                    |
| **Gene**                      | Specific genes or genomic loci.                                      | [[COMT gene]], [[MAOA]], [[CYP2D6]]                                                   |
| **Genetic Variant**           | Mutations, SNPs, or alleles.                                         | [[COMT Val158Met]], [[rs4680]]                                                        |
| **Biological Molecule**       | Other metabolites, signaling molecules, radicals, etc.               | [[notes/_link/Glutathione]], [[notes/_link/Nitric Oxide]], [[Hydroxyl radical]]       |
| **Biomarker**                 | Measurable indicators of biological states.                          | [[Troponin]], [[Methemoglobin level]], [[8-OHdG]]                                     |
| **Antibody**                  | Immunoglobulins or monoclonal antibodies.                            | [[Rituximab]], [[Anti-MPO antibody]]                                                  |
| **Cell Type**                 | Specific types of biological cells.                                  | [[notes/_link/Neutrophils]], [[Erythrocytes]], [[Chromaffin cells]]                   |
| **Anatomy**                   | Organs, tissues, or physiological structures.                        | [[Adrenal gland]], [[notes/_link/Substantia Nigra]], [[Lungs]]                        |
| **Microorganism**             | Bacteria, viruses, fungi, parasites.                                 | [[Pseudomonas aeruginosa]], [[SARS-CoV-2]]                                            |
| **Toxin**                     | Naturally occurring or synthetic poisons.                            | [[Cyanide]], [[Botulinum toxin]]                                                      |
| **Medical Condition**         | Diseases, syndromes, or pathological states.                         | [[Methemoglobinemia]], [[Anaphylaxis]], [[notes/_link/Schizophrenia]]                 |
| **Symptom**                   | Subjective patient-reported experiences.                             | [[Dyspnea]], [[Cyanosis]], [[Hallucinations]]                                         |
| **Clinical Sign**             | Objective observable or measurable findings.                         | [[Tachycardia]], [[Cherry-red skin]]                                                  |
| **Adverse Effect**            | Undesired reactions to exposures or treatments.                      | [[Hypertensive crisis]], [[Serotonin syndrome]]                                       |
| **Biological Process**        | Normal or pathological biological events and pathways.               | [[notes/_link/Inflammation]], [[notes/_link/Respiratory Burst]], [[Homeostasis]]      |
| **Chemical Process**          | Specific chemical reactions or mechanisms.                           | [[Oxidation]], [[Michael addition]], [[Autoxidation]]                                 |
| **Pharmacological Action**    | Mechanism or effect of a drug/compound.                              | [[MAO inhibition]], [[Antioxidant]], [[Vasoconstriction]]                             |
| **Diagnostic Test**           | Procedures or tools for medical diagnosis.                           | [[ABG]], [[Pulse oximetry]], [[Co-oximetry]]                                          |
| **Analytical Technique**      | Scientific methods used for laboratory analysis.                     | [[HPLC]], [[LC-MS]], [[Mass Spectrometry]], [[H-NMR]]                                 |
| **Imaging Technique**         | Medical or scientific imaging methods.                               | [[MRI]], [[PET scan]], [[fMRI]]                                                       |
| **Medical Treatment**         | Interventions, therapies, or procedures.                             | [[Exchange transfusion]], [[Hyperbaric oxygen]]                                       |
| **Surgical Procedure**        | Invasive therapeutic or diagnostic interventions.                    | [[Adrenalectomy]], [[Bronchoscopy]]                                                   |
| **Medical Product**           | Prepared devices or specific pharmaceutical products.                | [[EpiPen]], [[Neffy]], [[Symjepi]]                                                    |
| **Vaccine**                   | Preparations to stimulate immunity.                                  | [[mRNA COVID-19 vaccine]]                                                             |
| **Scientific Theory**         | Hypotheses or scientific models.                                     | [[Adrenochrome Hypothesis]], [[Dopamine hypothesis]]                                  |
| **Scientific Concept**        | Broad scientific principles or mechanisms.                           | [[Redox Cycling]], [[notes/oxidative_stress/Oxidative Stress]], [[Electrophile]]      |
| **Laboratory Standard**       | Quality control and reference materials.                             | [[Reference standard]], [[Certificate of Analysis]], [[Impurity marker]]              |
| **Pharmacokinetic Parameter** | Quantitative ADME properties.                                        | [[Half-life]], [[Volume of distribution]], [[Bioavailability]]                        |
| **Model Organism**            | Species or strains used in research.                                 | [[Rattus norvegicus]], [[Zebrafish]], [[Knockout mouse]]                              |
| Organization                  | Public, private sector organizations                                 | [[Merck & Co. Inc]], [[GlaxoSmithKline]]                                              |
| NA                            | If none of the above                                                 |                                                                                       |
