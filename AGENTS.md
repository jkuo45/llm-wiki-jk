# Wiki-style Knowledge Base

## Project Maintenance:

- Project timestamp format %d\_%B\_%Y %I:%M %p %Z (uppercase)
  - Note: frontmatter dates use YYYY-MM-DD format; the timestamp format above is for README display, task outputs, and file naming only
- Documents with the `_document_` prefix in the filename are source documents awaiting ingestion. They live in the `raw/` directory until processed.
  - Depending on task, they may or may not be included in context, counts.
- `notes` directory:
  - Contains files for wiki, directories within represent topics.
  - Each markdown file within that topic can be counted as a single entity.
- `raw` directory:
  - Contains documents that have not yet been ingested into `notes/`. These are waiting to be processed through the Document Ingestion Workflow.
- `tasks` directory:
  - Contains task outputs. Default to saving task outputs to this directory.
- **Heading and sub-heading enumerations**: Use plain descriptive names only (e.g., `### Composition`, `### Mechanism of Action`).

## Document Ingestion Workflow:

**Prerequisites:** Documents with `_document_` prefix.

| Step                          | Action                                                                                                                                                                                                                                                                                                                                       | Output                                                 |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| **1. Ingest**                 | **Use `obsidian-markdown` skill** — read the raw document, convert to Obsidian-flavored markdown. Add frontmatter (`type: document`), callouts for key insights, and **mark up all biomedical entities with `[[wiki links]]`** (see Wiki Link Markup Checklist below). Overwrite the `raw/_document_` file in place with the linked version. | Linked markdown file overwriting the raw `_document_`. |
| **2. Enrich/Create Entities** | Create `.md` in topic dir with OKF frontmatter, wiki links. Make sure to add the following sections: `Documents`, `Connections`, `Linking Summary`. <br>For existing entities: append/merge new content, adapt based on context, update `updated:` date.                                                                                     | New/updated entity notes / enriched existing notes     |
| **3. Review Stubs & Orphans** | Cross-reference all entities against existing notes (all topics + `_link/`). For stubs: create entity notes for high-frequency/well-defined concepts; normalize composites to canonical entities. Apply Orphan Link Resolution (scan & normalize, resolve true orphans).                                                                     | Resolved stubs, normalized triples                     |
| **4. Update README**          | Update README.md in that topic.                                                                                                                                                                                                                                                                                                              | Updated README with new entities.                      |

### Wiki Link Markup Checklist (Step 1)

When marking up wiki links in the ingested document, apply these rules systematically:

- **Scan for all biomedical entities** — e.g. genes (`[[CDKN2A]]`), proteins (`[[p53]]`), enzymes (`[[COMT]]`), cytokines (`[[IL-6]]`), pathways (`[[NF-κB]]`), diseases (`[[Alzheimer's Disease]]`), drugs (`[[Rapamycin]]`), processes (`[[Apoptosis]]`), anatomical structures (`[[Adrenal gland]]`), cell types (`[[Macrophages]]`).
- **Link first meaningful mention** — place the `[[wiki link]]` on the first occurrence that adds contextual value. Do not over-link every subsequent mention in the same paragraph. Only link to entities and terms that make sense contextually — avoid linking common words like 'cell' or 'protein' unless the linked note adds specific context.
- **Use canonical note titles** — match exact filenames. If a note exists as `notes/_link/NAD+.md`, use `[[NAD+]]`, not `[[NAD⁺]]` or `[[Nicotinamide Adenine Dinucleotide]]` (unless an alias exists). Maintain consistency: use the same exact title for the same entity across files.
- **Resolve existing notes first** — before creating a new `[[link]]`, check `notes/_link/` and `notes/<topic>/` for an existing note with that entity name. Use existing notes whenever possible.
- **Flag new entities** — if no note exists, use a clear `[[New Entity Name]]` link anyway (Obsidian will show it as unresolved). Prefer space to underscore in the entity name. Note these at the end of the document for later creation in Step 3.
- **No path-prefixed links** — always use bare `[[Entity]]`, never `[[notes/topic/Entity]]` — they break when entities are reorganized.
- **No wiki links in data files** — never create wiki links inside triples JSON, dot, or SVG files. Only `.md` files are valid wiki link targets.
- **Split composite entities** — `[[IIS (DAF-16/FOXO)]]` → `[[DAF-16]]`/`[[FOXO]]`. Each biological entity gets its own link. Keep as-single-linked cases where `/` denotes the same entity under alternative names (e.g., `[[p62/SQSTM1]]` → `[[p62]]`).
- **Use display text when helpful** — `[[Retinoblastoma Protein|Rb]]` keeps readability while linking to the correct note.
- **Callout key insights** — use `> [!info]`, `> [!tip]`, `> [!important]`, `> [!warning]` to highlight mechanistic details, clinical significance, and key experimental findings.
- Add dedicated `Documents`,`Connections`, and `Linking Summary` sections listing important bidirectional connections with brief explanations.
- **Maintain consistency** — only use enumerated headings only if it makes sense (chronological, scale, etc.); otherwise prefer bulleted outline points. Caution when using backslash and pipes in entity note title names, as they may clash with markdown table formats.

> [!note] Reference
> General wiki link syntax and formatting rules are defined in [[#Linking Format]] below. The checklist above consolidates all linking rules for the ingestion workflow — steps 3–5 should follow the same conventions.

### Enrich/Create entity files (Step 3)

- **Modification:** When modifying existing notes, preserve existing content, but reorganize or rewrite when necessary to improve coherence, accuracy, and flow. Prioritize accuracy and contextual relevance over strict preservation. Always update the `updated:` date in frontmatter.
- **Content:** Adapt depth, focus, and tone according to the entity type and available scientific literature. For well-studied topics, synthesize multiple high-impact articles, reviews, and meta-analyses. Prioritize recent, high-quality papers (include key PMIDs/DOIs) and clearly distinguish established knowledge from emerging findings.
- **Depth:** Scale depth according to topic importance and available literature. For well-established entities, provide comprehensive coverage with mechanisms, historical context, key studies, controversies, open questions, and clinical/research implications. For narrower topics, focus on essential context. Target 800–3000+ words for established entities (scale appropriately for narrower topics).
- **Evidence-Based:** Ground everything in real scientific understanding. Reference landmark papers, meta-analyses, and recent reviews (include PMIDs/DOIs where possible).
- **Neutral & Precise:** Use formal but accessible language. Clearly distinguish established facts from emerging or controversial findings. Make each note a hub that intelligently links to related concepts.

### Examples

#### Standard Structure for Gene / Protein / Enzyme:

- **Overview**: A concise definition, biological role, and cellular localization.
- **Structure & Domains**: Key structural features, active sites, and post-translational modifications (e.g., phosphorylation sites like [[Ser308]]).
- **Mechanism of Action & Pathways**: Detailed biochemical pathways, upstream activators, downstream targets, and regulatory feedback loops.
- **Physiological Function**: Its role in normal tissue development, homeostasis, or systemic physiology.
- **Pathology & Clinical Relevance**: Associated mutations, overexpression/downregulation in diseases (e.g., cancer, neurodegeneration), and its viability as a therapeutic target.

#### Standard Structure for Disease / Disorder:

- **Etiology & Pathophysiology**: Molecular and cellular mechanisms driving the pathology, including genetic risk factors or environmental triggers.
- **Clinical Presentation & Biomarkers**: Key symptoms, diagnostic criteria, and molecular biomarkers.
- **Therapeutic Landscape**: Current standard-of-care treatments, mechanism of action of key drugs, and emerging clinical trials or therapeutic strategies.

#### Standard Structure for Chemicals / Compounds / Drugs:

- **Chemical Properties & Classification**: Basic structure, class, and target selectivity.
- **Pharmacodynamics & Pharmacokinetics**: Mechanism of action at the molecular level, absorption, distribution, metabolism, and excretion (ADME) where relevant.
- **Applications**: Research uses or clinical indications.

### Semantic Metadata & Properties (Open Knowledge Format, OKF)

When creating or updating a note, include the following frontmatter block. Refer to `entity _type_1` schema for category values.

#### **Frontmatter**

- **Date format**: frontmatter `created:` / `updated:` must use `YYYY-MM-DD`, _not_ the project display format (`DD_MMMM_YYYY`).
- **Quoting**: Prefer unquoted scalar values. Use quotes only when required (e.g., values containing colons or special characters).
- **Duplicate YAML keys**: No key should appear twice at the same indentation level.
- **No wiki links in frontmatter**: Frontmatter values must be plain text only. Never use `[[Wiki Link]]` or `[[Link|Display]]` syntax inside YAML fields. Obsidian does not render wiki links in frontmatter, and they leak into non-body context.
- **All tag values must be kebab-case** (lowercase, spaces replaced with hyphens). This applies to both the `entity_type_1` category tag and all topical/domain tags.
- `entity_type_1` should be one of the tag values.

---

**Entity frontmatter:**

```
title: # Name of entity, index of topic, name of document, etc.
description: # Short description (if chat thread, summarize)
type: entity # [entity | document | index]
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: [] # Populate with entity_type_1, relevant biomedical tags
url: #
source: #
aliases: [] # Alternative names, abbreviations, acronyms
```

**Document frontmatter:**

```
title: # Full title of the source document, if chat thread rename
description: # Short summary of the document, if chat thread summarize
type: document
published: YYYY-MM-DD # Original publication date
created: YYYY-MM-DD # Date ingested into the vault
source: # URL/DOI of the original source
author: [] # List of authors
tags: [] # Populate with relevant entity_type_1, biomedical tags

```

### Output Format (Step 2)

For documents return the FULL updated Markdown content with all new [[links]] inserted.
For entity notes at the very end, add a section:

```

#

## Documents

List of documents in the wiki that mention this entity

  - [[Document Filename|Document Short Name]]
    - Short description of how entity is related to document. (~ 2-3 sentences)

## Connections

  - Entity Name: Short description

## Linking Summary

  - New links added: [[Entity1]], [[Entity2]], ...
  - Suggested new entity notes to create: [[Missing Concept]]
  - Strong connections to strengthen: [[Note A]] ↔ [[Note B]]

  - Justification for suggested new entities and strong connections to strengthen.

```

## Orphan Link Resolution (on user request):

Maintain link integrity by performing periodic audits:

- **Priority Tiers**: Fix in order — (1) redirectable mismatches, (2) high-frequency true orphans (≥10 links), (3) note low-frequency orphans for future enrichment.
- **Scan & Normalize**:
  - Identify wiki links `[[Link]]` without matching files.
  - Capitalize all wiki links to match the actual filename (e.g., `[[cisplatin]]` → `[[Cisplatin]]`, `[[apoptosis]]` → `[[Apoptosis]]`). Proper nouns in scientific terms should always use title/proper case as defined by the canonical file.
  - **Pluralization**: If `[[Concept]]` is missing but `[[Concepts]]` exists, update the link.
  - **Hyphen/Space Normalization**: Resolve format variants where a file exists with different hyphenation or spacing (e.g., `[[Caspase 9]]` → `[[Caspase-9]]`, `[[TNF-α]]` → `[[TNFα]]`, `[[IRS-1]]` → `[[IRS1]]`).
  - **Unicode/Greek Character Normalization**: Replace Greek letters and Unicode modifier characters with their English-name equivalents (e.g., `[[IKKβ]]` → `[[IKKbeta]]`, `[[IκBα]]` → `[[IkappaBalpha]]`, `[[NAD⁺]]` → `[[NAD+]]`, `[[ERRα]]` → `[[ERRalpha]]`, `[[Ca²⁺]]` → `[[Calcium Ions]]`). Verify canonical filenames first.
  - **Abbreviation Expansion**: Resolve common abbreviations where the full form has a canonical file (e.g., `[[OXPHOS]]` → `[[Oxidative Phosphorylation]]`, `[[PFC]]` → `[[Prefrontal Cortex]]`, `[[ER]]` → `[[Endoplasmic Reticulum]]`, `[[Smac]]` → `[[Smac DIABLO]]`). Verify there is no ambiguity before expanding.
  - **Trailing Punctuation**: Strip trailing periods from abbreviation wiki link targets (e.g., `[[Merck & Co. Inc.]]` → `[[Merck & Co. Inc]]`) to match filenames that omit trailing periods. Handle piped display-text variants (`[[Merck & Co. Inc.|Merck]]`) in the same pass.
  - **Escaped Pipe Fix**: In table cells, `\|` escapes the pipe character. Strip the backslash from the link target so `[[Link\|Display]]` resolves as `[[Link|Display]]`.
  - **Triple-Bracket Errors**: Fix malformed links like `[[[rapamycin]]` → `[[Rapamycin]]` (remove the extra opening bracket).
  - **Composite Entity Splitting**: Detect single wiki links bundling multiple distinct entities via `/`, `&`, or parenthetical groupings (e.g., `[[IIS (DAF-16/FOXO)]]`). Split into separate `[[Entity1]]`/`[[Entity2]]` links. Keep as-single-linked cases where `/` denotes the same entity under alternative names (e.g., `[[p62/SQSTM1]]` → `[[p62]]`, `[[Smac/DIABLO]]` → `[[Smac DIABLO]]`). Handle piped display-text variants in the same pass.

## Overlapping Link Resolution (on user request):

- **Directory structure clarification**: `notes/_link/` holds cross-topic shared entities (e.g., `Inflammation.md`, `NAD+.md`). Topic directories hold topic-specific entities plus their topic hub file. When an entity is referenced across multiple topics, it lives in `notes/_link/` as the single source of truth; topic directories retain their hub and topic-specific notes only.
- **Prevention check**: Before creating any new entity in `_link/`, verify a topic-dir hub file with the same name does not already exist.
- When a new entity is identified as overlapping, merge (append) its content into the `notes/_link/` version so that it is centrally linked in `notes/_link/` directory.
- **IMPORTANT: Topic hubs must NEVER be moved to `_link/`.** A "topic hub" is a file whose name matches its parent directory. These always stay in their topic directory as the canonical source.
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
- If the entity already exists in `notes/_link/` directory, append/merge the wiki entries.
- Although the entity file may be moved to `notes/_link/`, it should still remain on the README.md within that topic.
- Maintain only the consolidated file in `notes/_link/` to ensure a single source of truth.
  - Examples (since they are mentioned across topics in notes):
    - `notes/_link/Inflammation.md`
    - `notes/_link/HIF-1α.md`
    - `notes/_link/NAD+.md`

## Subject Object Relation Triples (on user request):

Extract all key factual triples in JSON format:
[{"subject": "...", "predicate": "...", "object": "...", "context": "brief quote or explanation", "confidence": "high/medium/low"}]

Rules:

- Subjects and objects should be specific entities/concepts (normalize names where possible, e.g., use canonical terms).
- Predicates should be clear verbs/relations (e.g., "causes", "is a type of", "outperforms").
- Focus on non-obvious, useful relations. Avoid trivial ones.
- Resolve coreferences.
- Each topic contains three files related to triples (.json, .dot, .svg) prefixed with `_triples`.
  - Example:
    - `notes/sirtuins/_triples_sirtuins.json`
    - `notes/oxidative_stress/_triples_oxidative_stress.json`
- Unless otherwise instructed, the goal is to keep each .json file in sync with ingested documents in that topic.

**Create directed graph analysis**

- In scripts directory, execute visualize triples python script with output.json.
- Output graphviz in .png, .svg, .dot to the tasks directory.
- If no output/export name is provided, name the file(s).
  - `tasks/task_output_[timestamp].svg`
  - `tasks/task_output_[timestamp].png`
  - `tasks/task_output_[timestamp].dot`

## Entity Type Schema (entity_type_1):

Values for entity_type_1

| entity_type_1              | entity_description_1                                                          | entity_examples_1                                                   |
| -------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Chemical Compound**      | Specific small molecules, chemical substances, toxins, peptides, amino acids. | [[Adrenochrome]], [[Epinephrine]], [[Cyanide]], [[Glutamine]]       |
| **Chemical Class**         | Groups of chemically related substances.                                      | [[Catecholamines]], [[Aminochromes]], [[Persulfates]]               |
| **Biological Molecule**    | Endogenous metabolites, signaling molecules, radicals, biomarkers.            | [[Glutathione]], [[Nitric Oxide]], [[Adrenochrome]] (as metabolite) |
| **Enzyme**                 | Specific biological catalysts.                                                | [[MAO]], [[COMT]], [[Myeloperoxidase]], [[Diaphorase]]              |
| **Protein**                | Large biomolecules, structural/functional proteins, antibodies.               | [[Hemoglobin]], [[Rituximab]], [[Cytochrome b5 reductase]]          |
| **Receptor**               | Signal-receiving proteins.                                                    | [[Adrenergic receptor]], [[D2 receptor]], [[NMDA receptor]]         |
| **Transporter**            | Membrane proteins that transport molecules.                                   | [[VMAT2]], [[SERT]], [[DAT]]                                        |
| **Ion Channel**            | Proteins forming ion pores.                                                   | [[hERG channel]], [[Voltage-gated sodium channel]]                  |
| **Gene**                   | Specific genes, genomic loci, and genetic variants.                           | [[COMT gene]], [[MAOA]], [[COMT Val158Met]]                         |
| **Cell Type**              | Specific types of biological cells.                                           | [[Neutrophils]], [[Erythrocytes]], [[Chromaffin cells]]             |
| **Anatomy**                | Organs, tissues, or physiological structures.                                 | [[Adrenal gland]], [[Substantia Nigra]], [[Lungs]]                  |
| **Organism**               | Bacteria, viruses, fungi, parasites, and model organisms.                     | [[Pseudomonas aeruginosa]], [[Zebrafish]], [[Knockout mouse]]       |
| **Medical Condition**      | Diseases, syndromes, symptoms, adverse effects, clinical signs.               | [[Methemoglobinemia]], [[Cyanosis]], [[Serotonin syndrome]]         |
| **Biological Process**     | Normal or pathological biological events and pathways.                        | [[Inflammation]], [[Respiratory Burst]], [[Apoptosis]]              |
| **Chemical Process**       | Specific chemical reactions or mechanisms.                                    | [[Oxidation]], [[Michael addition]], [[Autoxidation]]               |
| **Pharmacological Action** | Mechanism or effect of a drug/compound.                                       | [[MAO inhibition]], [[Antioxidant]], [[Vasoconstriction]]           |
| **Diagnostic Test**        | Procedures or tools for medical diagnosis.                                    | [[ABG]], [[Pulse oximetry]], [[Co-oximetry]]                        |
| **Analytical Technique**   | Scientific methods for laboratory analysis and medical imaging.               | [[HPLC]], [[Mass Spectrometry]], [[MRI]]                            |
| **Medical Treatment**      | Interventions, therapies, and surgical/invasive procedures.                   | [[Exchange transfusion]], [[Hyperbaric oxygen]], [[Adrenalectomy]]  |
| **Medical Product**        | Prepared devices, vaccines, and pharmaceutical products.                      | [[EpiPen]], [[mRNA COVID-19 vaccine]], [[Neffy]]                    |
| **Scientific Theory**      | Hypotheses or scientific models.                                              | [[Adrenochrome Hypothesis]], [[Dopamine hypothesis]]                |
| **Scientific Concept**     | Broad scientific principles, standards, mechanisms.                           | [[Redox Cycling]], [[Oxidative Stress]], [[Reference standard]]     |
| **Organization**           | Public or private sector organizations.                                       | [[Merck & Co. Inc]], [[GlaxoSmithKline]]                            |
| **Person**                 | Individual people (researchers, clinicians, historical figures).              | [[Abram Hoffer]], [[Humphry Osmond]]                                |
