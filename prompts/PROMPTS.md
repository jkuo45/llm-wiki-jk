# Prompts

## Subject Object Relation Triples

From the following file(s):

'path/to/file' or description of file to search

Extract all key factual triples in JSON format:
[{"subject": "...", "predicate": "...", "object": "...", "context": "brief quote or explanation", "confidence": "high/medium/low"}]

Rules:

- Subjects and objects should be specific entities/concepts (normalize names where possible, e.g., use canonical terms).
- Predicates should be clear verbs/relations (e.g., "causes", "is a type of", "outperforms").
- Focus on non-obvious, useful relations. Avoid trivial ones.
- Resolve coreferences.

Write file to: 'tasks/task_output\_[timestamp].json'

**Create directed graph analysis**

- In scripts directory, execute visualize triples python script with output.json.
- Output graphviz in .png and .svg to the tasks directory.
- If not output/export name is provided, name the file(s)
  - 'tasks/task_output\_[timestamp].svg'
  - 'tasks/task_output\_[timestamp].png'

---

## Create Infographics

create an infographic to explain the concept(s) below. english and zh-TW text. output 9:16 vertical ratio.

---

## Recreate Diagram

recreate the attached diagram with english and zh-TW text. upscale image if possible.
