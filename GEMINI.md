# Wiki-style Knowledge Base

## Project Maintenance:

- Project timestamp format %d\_%B\_%Y %I:%M %p %Z (uppercase)
  - Note: frontmatter dates use YYYY-MM-DD format; the timestamp format above is for README display, task outputs, and file naming only
- Documents contain '\_document\_' prefix in the file name.
  - Depending on task, they may or may not be included in context, counts.
- 'notes' directory:
  - Directory name represents the topic.
  - Each markdown file within that topic can be counted as a single entity.
- 'raw' directory:
  - Contains raw documents that have not been ingested into notes.
  - Documents in this directory may be used to create articles, content, summaries, etc.
- 'scripts' directory:
  - Periodically audit scripts for reusability.
  - If they contain values that are task specific, refactor for reusability.
- 'tasks' directory:
  - Contains task outputs. Default to saving to this directory.
- Prefer WriteFile tool over python scripts to create entities.
- Use uv for all python executables.
- **On ingest of a file within a topic**: Extract/update triples into the topic's `_triples_<topic>.json`, then regenerate the corresponding `.svg` and `.dot` visualizations to `notes/<topic>/` (alongside the triples file). (See Subject Object Relation Triples section below.)

## Single Document Ingestion Workflow

**Prerequisites:** Document in `raw/` with `_document_` prefix.

**Agent Skills Used:**

- `obsidian-markdown` — Step 1 (ingest & markup raw documents)
- `research-scientist` — Steps 4 & 5 (entity enrichment, stub analysis, orphan resolution)

| Step                             | Action                                                                                                                                                                                                                                                                                                                              | Output                                             |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| **1. Ingest**                    | **Use `obsidian-markdown` skill** — read raw document, convert to Obsidian-flavored markdown with wiki links, callouts, properties, embeds                                                                                                                                                                                          | Structured markdown content for triples/entities   |
| **2. Extract Triples**           | Append new triples to topic's `_triples_<topic>.json` (normalize entity names to canonical forms)                                                                                                                                                                                                                                   | Updated triples JSON in `notes/<topic>/`           |
| **3. Regenerate Visualizations** | Run `uv run scripts/visualize_triples.py` on updated JSON → output `.svg`, `.dot`.                                                                                                                                                                                                                                                  | Graph visualizations co-located with triples       |
| **4. Enrich/Create Entities**    | **Use `research-scientist` agent skill** — for each new entity: create `.md` in topic dir with OKF frontmatter, wiki links, Connections section, Linking Summary. For existing entities: append new content, adapt based on context, update `updated:` date.                                                                        | New/updated entity notes / enriched existing notes |
| **5. Review Stubs & Orphans**    | **Use `research-scientist` agent skill** — cross-reference all triples subjects/objects against existing notes (all topics + `_link/`). For stubs: create entity notes for high-frequency/well-defined concepts; normalize composites to canonical entities. Apply Orphan Link Resolution (scan & normalize, resolve true orphans). | Resolved stubs, normalized triples                 |
| **6. Update README**             | Update summary table (date, entity count, word count) + triples overview section (nodes, edges, predicates, high%, top subjects/objects/predicates, zh-TW)                                                                                                                                                                          | Current README metrics                             |
| **7. Cross-Topic Links**         | If new entity spans topics → consolidate in `notes/_link/` per Overlapping Link Resolution rules (topic hubs stay in topic dir)                                                                                                                                                                                                     | `_link/` consistency                               |

## Linking Format (creating wiki entries/notes/documents):

- Use Obsidian-style wiki links: [[Exact Note Title]] or [[Note Title|Display Text]] when the display text differs.
- **NEVER use path-prefixed wiki links like [[notes/topic/Entity]]** — they break when entities are reorganized. Always use bare [[Entity]] links.
- **NEVER create wiki links to triples files (.json, .dot, or .svg)** — they are data/visualization artifacts, not entity notes. Only `.md` files are valid wiki link targets.
- Only link to entities and biomedical terms that make sense contextually — do not over-link or create trivial links.
- Prefer precise, canonical note titles (e.g., use [[Large Language Models]] instead of [[LLMs]] unless you know an alias exists).
- e.g. Genes/proteins/enzymes, etc.: [[miR-29b]], [[miR-101]], [[miR-193a-3p]], [[BRCA1]], [[CaMKII (PP1)]], [[ERK1/2 (MKP-3)]], [[TP53]], [[CFTR]], [[Ser308]], [[Tyr310]], [[PIKfyve]], [[TRMPL1]], [[SLC-36.1]], [[PtdIns(4,5)P2]]
- e.g. Diseases/disorders: [[Alzheimer's Disease]], [[Cystic Fibrosis]], [[Type 2 Diabetes Mellitus]]
- **Avoid composite entities in a single link**: Do not combine multiple distinct entities into one wiki link with separators like `/`, `&`, or parentheses (e.g., [[IIS (DAF-16/FOXO)]]). Split these into separate links: [[IIS DAF-16]]/[[FOXO]]. Each biological entity (gene, protein, complex, etc.) gets its own `[[Link]]`.
- If a concept is mentioned but no dedicated note exists yet, suggest creating one by using a clear [[New Entity Name]] and note it at the end. Prefer space to underscore in the entity name. Create markdown files for each new entity.
- Add links in the most natural places: first meaningful mention is often best.
- In a dedicated "Connections" or "Related" section (if it exists, or create one), list important bidirectional connections with brief explanations.
- Maintain consistency: Use the same exact title for the same entity across files.
- Each new entity should have a Linking Summary.

## Wiki Entries:

- When adding new content to an existing note, **append new connections** to the existing `## Connections` section (deduplicating by target entity).
- **Merge Linking Summaries**: Combine new links with existing `### Linking Summary` — deduplicate across `New links added`, `Suggested new entity notes to create`, and `Strong connections to strengthen`.
- Keep only one `### Connections` and `### Linking Summary` at the end of the note.
- The `### Connections` section belongs above `### Linking Summary`, NOT below it.
- **Modification:** When modifying existing notes, prefer appending new information to preserve existing content, but reorganize or rewrite when necessary to improve coherence, accuracy, and flow. Prioritize accuracy and contextual relevance over strict preservation. Always update the `updated:` date in frontmatter.
- **Content:** Adapt depth, focus, and tone according to the entity type and available scientific literature. For well-studied topics, synthesize multiple high-impact articles, reviews, and meta-analyses. Prioritize recent, high-quality papers (include key PMIDs/DOIs) and clearly distinguish established knowledge from emerging findings.
- **Depth:** Scale depth according to topic importance and available literature. For well-established entities, provide comprehensive coverage with mechanisms, historical context, key studies, controversies, open questions, and clinical/research implications. For narrower topics, focus on essential context. Target 800–3000+ words for established entities (scale appropriately for narrower topics).
- **Evidence-Based:** Ground everything in real scientific understanding. Reference landmark papers, meta-analyses, and recent reviews (include PMIDs/DOIs where possible).
- **Neutral & Precise:** Use formal but accessible language. Clearly distinguish established facts from emerging or controversial findings. Make each note a hub that intelligently links to related concepts.
- Each topic contains a default linking entity file (e.g. notes/adrenochrome/Adrenochrome.md).
  - **Topic hubs stay in their topic directory only.** They must NEVER be duplicated or moved to `notes/_link/`. A "topic hub" is a file whose name matches its parent directory name (e.g., `notes/cancer/Cancer.md`, `notes/autophagy/Autophagy.md`).
  - This file can be used for Obsidian file merging.
  - **Protected central topic files that must NEVER be moved to `notes/_link/`:**
    - `notes/adrenochrome/Adrenochrome.md`
    - `notes/autophagy/Autophagy.md`
    - `notes/cancer/Cancer.md`
    - `notes/comt/COMT.md`
    - `notes/epigenetics/Epigenetics.md`
    - `notes/neuromelanin/Neuromelanin.md`
    - `notes/oxidative_stress/Oxidative Stress.md`
    - `notes/sirtuins/Sirtuins.md`
    - `notes/sirtuins/SIRT1.md`
    - `notes/sirtuins/SIRT2.md`
    - `notes/sirtuins/SIRT3.md`
    - `notes/sirtuins/SIRT4.md`
    - `notes/sirtuins/SIRT5.md`
    - `notes/sirtuins/SIRT6.md`
    - `notes/sirtuins/SIRT7.md`

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
  - Caution when using backslash and pipes in entity note title names, as they may clash with markdown table formats.

### Semantic Metadata & Properties (Open Knowledge Format, OKF)

When creating or updating a note, include the following frontmatter block. Refer to entity type 1 schema for categories.

Frontmatter:

- **Date format**: frontmatter `created:` / `updated:` must use `YYYY-MM-DD`, _not_ the project display format (`DD_MMMM_YYYY`).
- **Quoting**: Prefer unquoted scalar values (`entity_type_1: Enzyme`, not `entity_type_1: "Enzyme"`). Use quotes only when required (e.g., values containing colons or special characters).
- **Duplicate YAML keys**: No key should appear twice at the same indentation level.
- **No wiki links in frontmatter**: Frontmatter values must be plain text only. Never use `[[Wiki Link]]` or `[[Link|Display]]` syntax inside YAML fields. Obsidian does not render wiki links in frontmatter, and they leak into non-body context.

---

**Entity frontmatter**

type: entity # [entity | document | index]
title: # Name of entity, index of topic, name of document, etc.
description: # Short description (if chat thread, summarize)
created: YYYY-MM-DD
updated: YYYY-MM-DD
entity_type_1: # Refer to entity_type_1 schema
url: #
source: #
aliases: [] # Alternative names, abbreviations, acronyms
tags: [] #

---

**Document frontmatter** for `_document_`/`:

---

type: document
title: # Full title of the source document, if chat thread rename
source: # URL/DOI of the original source
author: [] # List of authors
published: YYYY-MM-DD # Original publication date
created: YYYY-MM-DD # Date ingested into the vault
description: # Short summary of the document, if chat thread summarize
tags: [] #

---

### Output Format:

- Return the FULL updated Markdown content with all new [[links]] inserted. At the very end, add a section:

```

### Connections

  - Entity Name - short description

### Linking Summary:

  - New links added: [[Entity1]], [[Entity2]], ...
  - Suggested new entity notes to create: [[Missing Concept]]
  - Strong connections to strengthen: [[Note A]] ↔ [[Note B]]
```

## Orphan Link Resolution (on user request):

Maintain link integrity by performing periodic audits:

- **Priority Tiers**: Fix in order — (1) redirectable mismatches, (2) high-frequency true orphans (≥10 links), (3) note low-frequency orphans for future enrichment.

- **Scan & Normalize**:
  - Identify wiki links `[[Link]]` without matching files.
  - **Case Sensitivity**: Prefer proper noun spelling (match the filename exactly).
  - Capitalize all wiki links to match the actual filename (e.g., `[[cisplatin]]` → `[[Cisplatin]]`, `[[apoptosis]]` → `[[Apoptosis]]`). Proper nouns in scientific terms should always use title/proper case as defined by the canonical file.
  - **Pluralization**: If `[[Concept]]` is missing but `[[Concepts]]` exists, update the link.
  - **Hyphen/Space Normalization**: Resolve format variants where a file exists with different hyphenation or spacing (e.g., `[[Caspase 9]]` → `[[Caspase-9]]`, `[[TNF-α]]` → `[[TNFα]]`, `[[IRS-1]]` → `[[IRS1]]`).
  - **Unicode/Greek Character Normalization**: Replace Greek letters and Unicode modifier characters with their English-name equivalents (e.g., `[[IKKβ]]` → `[[IKKbeta]]`, `[[IκBα]]` → `[[IkappaBalpha]]`, `[[NAD⁺]]` → `[[NAD+]]`, `[[ERRα]]` → `[[ERRalpha]]`, `[[Ca²⁺]]` → `[[Calcium Ions]]`). Verify canonical filenames first.
  - **Abbreviation Expansion**: Resolve common abbreviations where the full form has a canonical file (e.g., `[[OXPHOS]]` → `[[Oxidative Phosphorylation]]`, `[[PFC]]` → `[[Prefrontal Cortex]]`, `[[ER]]` → `[[Endoplasmic Reticulum]]`, `[[Smac]]` → `[[Smac DIABLO]]`). Verify there is no ambiguity before expanding.
  - **Trailing Punctuation**: Strip trailing periods from abbreviation wiki link targets (e.g., `[[Merck & Co. Inc.]]` → `[[Merck & Co. Inc]]`) to match filenames that omit trailing periods. Handle piped display-text variants (`[[Merck & Co. Inc.|Merck]]`) in the same pass.
  - **Escaped Pipe Fix**: In table cells, `\|` escapes the pipe character. Strip the backslash from the link target so `[[Link\|Display]]` resolves as `[[Link|Display]]`.
  - **Triple-Bracket Errors**: Fix malformed links like `[[[rapamycin]]` → `[[Rapamycin]]` (remove the extra opening bracket).
  - **Composite Entity Splitting**: Detect single wiki links bundling multiple distinct entities via `/`, `&`, or parenthetical groupings (e.g., `[[IIS (DAF-16/FOXO)]]`). Split into separate `[[Entity1]]`/`[[Entity2]]` links. Keep as-single-linked cases where `/` denotes the same entity under alternative names (e.g., `[[p62/SQSTM1]]` → `[[p62]]`, `[[Smac/DIABLO]]` → `[[Smac DIABLO]]`). Handle piped display-text variants in the same pass.
- **Resolve True Orphans**:
  - Create new Markdown files for missing concepts.
  - Use a standardized template: `# Title`, a short paragraph context, and a `Linking Summary`.
  - **Threshold**: Only create entity notes for concepts with ≥10 vault-wide links (or as specified). Lower-frequency orphans should be noted but not created.
  - **Context-Dependent Redirects**: Before creating a redirect, verify the redirected entity is semantically equivalent. For example, do NOT blindly redirect `[[TFE]]` → `[[TFEB]]` — TFE (transcription factor E subfamily) is not the same entity as TFEB (a specific family member). Prefer creating a new entity note over a semantically incorrect redirect.
- **Verification**: After each pass, re-scan to confirm all fixable mismatches are resolved. The target state is 0 fixable mismatches and 0 true orphans above the frequency threshold.

## Overlapping Link Resolution (on user request):

- The scope of this task is the notes directory.
- This process does not need to be ran while extracting entities or triples.
- 'notes/\_link/' directory contains entities that may exist across topics.
- **IMPORTANT: Topic hubs must NEVER be moved to \_link/.** A "topic hub" is a file whose name matches its parent directory (e.g., `notes/cancer/Cancer.md`, `notes/autophagy/Autophagy.md`). These always stay in their topic directory as the canonical source.
- If the entity already exists in 'notes/\_link/' directory, append the wiki entry to it.
- If the entity does not exist, create the entry in 'notes/\_link/' and move the original topic note into the 'notes/\_link/' folder.
  - Use git-mv to move files instead of shell mv.
- Prefer to write with shell commands, python scripts if necessary (execute using uv).
- Although the entity file may be moved to 'notes/\_link', it should still remain on the README.md within that topic.
- The 'notes/\_link/' folder is only for entities that span across multiple topics.
- Maintain only the consolidated file in 'notes/\_link/' to ensure a single source of truth.
- The goal is to highlight these overlapping entities in graph view as central hubs.
- Examples (since they are mentioned across topics in notes):
  - 'notes/\_link/Inflammation.md'
  - 'notes/\_link/HIF-1α.md'
  - 'notes/\_link/NAD+.md'
- When a new entity is identified as overlapping, merge its content into the 'notes/\_link/' version and delete the topic-specific files so that it is centrally linked in 'notes/\_link/' directory.
- Make sure to escape Obsidian link syntax when updating documents and readme files (especially in tables).
- Validate completeness of the wiki entry: after merging, there should be one H1, no `## Source:` attribution lines, no redundant stub paragraphs, and only one `### Linking Summary` (at the end). Use `research-scientist` skill to synthesize overlapping content from multiple sources into coherent, flowing text.
- **Prevention check**: Before creating any new entity in `_link/`, verify a topic-dir hub file with the same name does not already exist. If it does, do NOT create a `_link/` version — the topic hub is canonical.
- **Post-merge cleanup**: After appending/merging topic content into the `_link/` entity note:
  - Remove path-prefixed wiki links (`[[topic/Entity]]` → `[[Entity]]`) and `.md` extensions in link targets.
  - Convert `## From [[topic/Entity]]` or `## Content from [[topic/Entity]]` headings to `## Source: topic/Entity` as plain-text provenance (no wiki link).
  - Remove duplicate H1 lines (keep only the first).
  - Remove all `## Source:` lines — provenance notation is a transitional artifact; once content is integrated, they are no longer needed.
  - Remove stub paragraphs (<300 chars) that are redundant with more detailed content below.
  - Remove early/redundant `### Linking Summary` sections that appear before the first `##` section heading (keep only the last one).
  - **Do not concatenate paragraphs without newlines** — ensure blank line separation between H1 and subsequent content.
  - Use `uv run python` scripts for batch cleanup to minimize manual errors.

## Subject Object Relation Triples:

Extract all key factual triples in JSON format:
[{"subject": "...", "predicate": "...", "object": "...", "context": "brief quote or explanation", "confidence": "high/medium/low"}]

Rules:

- Subjects and objects should be specific entities/concepts (normalize names where possible, e.g., use canonical terms).
- Predicates should be clear verbs/relations (e.g., "causes", "is a type of", "outperforms").
- Focus on non-obvious, useful relations. Avoid trivial ones.
- Resolve coreferences.
- Each topic contains three files related to triples (.json, .dot, .svg) prefixed with `\_triples`.
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

To maintain consistency, all entity notes should include an `entity_type_1` field. Suggest additional entity types if they do not exist. These values are intended for README.md and do not need to be included in entity wiki notes. Depending on topic/user preference, more values maybe added.

### entity_type_1 schema:

| entity_type_1                 | entity_description_1                                                 | entity_examples_1                                                         |
| ----------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Chemical Compound**         | Specific small molecules and chemical substances.                    | [[Adrenochrome]], [[Epinephrine]], [[Sodium nitrite]], [[Methylene blue]] |
| **Chemical Class**            | Groups of chemically related substances.                             | [[Catecholamines]], [[Aminochromes]], [[Persulfates]]                     |
| **Metabolite**                | Endogenous or drug metabolites (can overlap with Chemical Compound). | [[Adrenochrome]] (as epinephrine metabolite), [[6-Hydroxymelatonin]]      |
| **Enzyme**                    | Specific biological catalysts.                                       | [[MAO]], [[COMT]], [[Myeloperoxidase]], [[Diaphorase]]                    |
| **Protein**                   | Large biomolecules, structural or functional proteins (non-enzyme).  | [[Hemoglobin]], [[Cytochrome b5 reductase]]                               |
| **Receptor**                  | Signal-receiving proteins.                                           | [[Adrenergic receptor]], [[D2 receptor]], [[NMDA receptor]]               |
| **Transporter**               | Membrane proteins that transport molecules.                          | [[VMAT2]], [[SERT]], [[DAT]]                                              |
| **Ion Channel**               | Proteins forming ion pores.                                          | [[hERG channel]], [[Voltage-gated sodium channel]]                        |
| **Gene**                      | Specific genes or genomic loci.                                      | [[COMT gene]], [[MAOA]], [[CYP2D6]]                                       |
| **Genetic Variant**           | Mutations, SNPs, or alleles.                                         | [[COMT Val158Met]], [[rs4680]]                                            |
| **Biological Molecule**       | Other metabolites, signaling molecules, radicals, etc.               | [[Glutathione]], [[Nitric Oxide]], [[Hydroxyl radical]]                   |
| **Biomarker**                 | Measurable indicators of biological states.                          | [[Troponin]], [[Methemoglobin level]], [[8-OHdG]]                         |
| **Antibody**                  | Immunoglobulins or monoclonal antibodies.                            | [[Rituximab]], [[Anti-MPO antibody]]                                      |
| **Cell Type**                 | Specific types of biological cells.                                  | [[Neutrophils]], [[Erythrocytes]], [[Chromaffin cells]]                   |
| **Anatomy**                   | Organs, tissues, or physiological structures.                        | [[Adrenal gland]], [[Substantia Nigra]], [[Lungs]]                        |
| **Microorganism**             | Bacteria, viruses, fungi, parasites.                                 | [[Pseudomonas aeruginosa]], [[SARS-CoV-2]]                                |
| **Toxin**                     | Naturally occurring or synthetic poisons.                            | [[Cyanide]], [[Botulinum toxin]]                                          |
| **Medical Condition**         | Diseases, syndromes, or pathological states.                         | [[Methemoglobinemia]], [[Anaphylaxis]], [[Schizophrenia]]                 |
| **Symptom**                   | Subjective patient-reported experiences.                             | [[Dyspnea]], [[Cyanosis]], [[Hallucinations]]                             |
| **Clinical Sign**             | Objective observable or measurable findings.                         | [[Tachycardia]], [[Cherry-red skin]]                                      |
| **Adverse Effect**            | Undesired reactions to exposures or treatments.                      | [[Hypertensive crisis]], [[Serotonin syndrome]]                           |
| **Biological Process**        | Normal or pathological biological events and pathways.               | [[Inflammation]], [[Respiratory Burst]], [[Homeostasis]]                  |
| **Chemical Process**          | Specific chemical reactions or mechanisms.                           | [[Oxidation]], [[Michael addition]], [[Autoxidation]]                     |
| **Pharmacological Action**    | Mechanism or effect of a drug/compound.                              | [[MAO inhibition]], [[Antioxidant]], [[Vasoconstriction]]                 |
| **Diagnostic Test**           | Procedures or tools for medical diagnosis.                           | [[ABG]], [[Pulse oximetry]], [[Co-oximetry]]                              |
| **Analytical Technique**      | Scientific methods used for laboratory analysis.                     | [[HPLC]], [[LC-MS]], [[Mass Spectrometry]], [[H-NMR]]                     |
| **Imaging Technique**         | Medical or scientific imaging methods.                               | [[MRI]], [[PET scan]], [[fMRI]]                                           |
| **Medical Treatment**         | Interventions, therapies, or procedures.                             | [[Exchange transfusion]], [[Hyperbaric oxygen]]                           |
| **Surgical Procedure**        | Invasive therapeutic or diagnostic interventions.                    | [[Adrenalectomy]], [[Bronchoscopy]]                                       |
| **Medical Product**           | Prepared devices or specific pharmaceutical products.                | [[EpiPen]], [[Neffy]], [[Symjepi]]                                        |
| **Vaccine**                   | Preparations to stimulate immunity.                                  | [[mRNA COVID-19 vaccine]]                                                 |
| **Scientific Theory**         | Hypotheses or scientific models.                                     | [[Adrenochrome Hypothesis]], [[Dopamine hypothesis]]                      |
| **Scientific Concept**        | Broad scientific principles or mechanisms.                           | [[Redox Cycling]], [[Oxidative Stress]], [[Electrophile]]                 |
| **Laboratory Standard**       | Quality control and reference materials.                             | [[Reference standard]], [[Certificate of Analysis]], [[Impurity marker]]  |
| **Pharmacokinetic Parameter** | Quantitative ADME properties.                                        | [[Half-life]], [[Volume of distribution]], [[Bioavailability]]            |
| **Model Organism**            | Species or strains used in research.                                 | [[Rattus norvegicus]], [[Zebrafish]], [[Knockout mouse]]                  |
| Organization                  | Public, private sector organizations                                 | [[Merck & Co. Inc]], [[GlaxoSmithKline]]                                  |
| NA                            | If none of the above                                                 |                                                                           |
