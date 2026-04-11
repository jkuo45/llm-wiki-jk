# Wiki-style Knowledge Base

## Linking

### Linking Format:
- Use Obsidian-style wiki links: [[Exact Note Title]] or [[Note Title|Display Text]] when the display text differs.
- Only link to entities that make sense contextually — do not over-link or create trivial links.
- Prefer precise, canonical note titles (e.g., use [[Large Language Models]] instead of [[LLMs]] unless you know an alias exists).
- If a concept is mentioned but no dedicated note exists yet, suggest creating one by using a clear [[New Entity Name]] and note it at the end.
- Add links in the most natural places: first meaningful mention is often best.
- In a dedicated "Connections" or "Related" section (if it exists, or create one), list important bidirectional connections with brief one-line explanations.
- Maintain consistency: Use the same exact title for the same entity across files.

### Creating Entities:
- Create markdown files for new entities
- Each new entity should have a Linking Summary

### Output Format:
Return the FULL updated Markdown content with all new [[links]] inserted. At the very end, add a section:

 **Linking Summary:**
- New links added: [[Entity1]], [[Entity2]], ...
- Suggested new entity notes to create: [[Missing Concept]]
- Strong connections to strengthen: [[Note A]] ↔ [[Note B]]