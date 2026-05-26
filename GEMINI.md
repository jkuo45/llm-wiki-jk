# Wiki-style Knowledge Base

## Maintenance
- Create or update README.md within the directory of the topic/subtopic folder.
    - Last updated and total count of entities.
- The timestamp format should be %d_%b_%Y %I:%M %p %Z.
- If single directory:
    |entity|datetime updated|
    |------|----------------|
- If multiple sub-directories:
    |entity|datetime updated|directory|
    |------|----------------|---------|
- documents start with '[document]' in the file name. Depending on task, they may or may not be included in context.
- Notes directory is organized by topic. 
- uv for python environments

## Orphan Link Resolution
Maintain link integrity by performing periodic audits:
1.  **Scan & Normalize**:
        - Identify wiki links `[[Link]]` without matching files.
    - **Case Sensitivity**: Prefer proper noun spelling (match the filename exactly).
    - **Pluralization**: If `[[Concept]]` is missing but `[[Concepts]]` exists, update the link.
2. **Resolve True Orphans**:
    - Create new Markdown files for missing concepts.
    - Use a standardized template: `# Title`, a one-sentence context, and a `Linking Summary`.
3. **Automation**: Use `uv run python3` to perform batch updates to minimize manual errors and ensure workspace-wide consistency.

## Linking Format
- Use Obsidian-style wiki links: [[Exact Note Title]] or [[Note Title|Display Text]] when the display text differs.
- Only link to entities and biomedical terms that make sense contextually — do not over-link or create trivial links.
- Prefer precise, canonical note titles (e.g., use [[Large Language Models]] instead of [[LLMs]] unless you know an alias exists). e.g. Genes/proteins: [[BRCA1]], [[TP53]], [[CFTR]]
Diseases/disorders: [[Alzheimer's Disease]], [[Cystic Fibrosis]], [[Type 2 Diabetes Mellitus]]
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
