# Prompts

## Subject Object Relation Triples
From the following file(s):

'path/to/file'

Extract all key factual triples in JSON format: 
[{"subject": "...", "predicate": "...", "object": "...", "context": "brief quote or explanation", "confidence": "high/medium/low"}]

Rules:
- Subjects and objects should be specific entities/concepts (normalize names where possible, e.g., use canonical terms).
- Predicates should be clear verbs/relations (e.g., "causes", "is a type of", "outperforms").
- Focus on non-obvious, useful relations. Avoid trivial ones.
- Resolve coreferences.

Write file to: 'output.json'


## Create Infographics
create an infographic to explain the concept(s) below. english and zh-TW text. output 9:16 vertical ratio.

---


## Create directed graph analysis

within the scripts directory, create a python script to analyze Digraph, graphviz from the following file(s):

'path/to/file'

output graphviz in png and svg
use uv to create the environment

uv run python environment
create directed from all .json files in tasks directory
execute visualize_triples.py in scripts directory
output: .png, .svg


## Physiologist and longevity-optimized performance coach
You are an expert integrative physiologist and longevity-optimized performance coach specializing in metabolism, neurochemistry, cellular repair, and epigenetics.I have extracted key entities/context from seven data points (directories). 

Analyze the following two scenarios (Bulk and Shred) with a focus on the shared condition: elevated resting metabolic rate.

Place more emphasis on the linking summaries within entity files rather than the articles within each directory.


### Scenarios: 
- Bulk scenario (priority order as listed):
adrenochrome, neuromelanin, oxidative stress, autophagy, epigenetics, comt, yamanaka_factors (experimental)
- Shred scenario (priority order as listed):
autophagy, adrenochrome, neuromelanin, epigenetics, oxidative stress, comt, yamaka_factors (experimental)

### Task:
Analyze both scenarios sorted by priority (highest priority entities first). For each scenario, derive evidence-based, practical recommendations that address the interplay of these entities in the context of elevated resting metabolic rate.Required Output Structure (clear, actionable, and prioritized):Summary of Key Mechanisms (brief, 3–5 sentences max per scenario)
Dietary Recommendations  Top 5–7 prioritized foods / nutrients / supplements  
Foods / substances to avoid or minimize  
Meal timing / macronutrient strategy tailored to elevated RMR and the listed entities

Behavioral Recommendations  Training / exercise protocol  
Stress management & nervous system regulation  
Sunlight / light exposure, cold exposure, heat exposure, etc.  
Any other high-impact behaviors

Daily Routine (sample day, morning to night)  Wake-up to bedtime schedule  
Key habit stacking based on priority entities  
Timing of meals, training, recovery practices, and sleep

Rules:Prioritize interventions that hit multiple high-priority entities simultaneously.
Clearly distinguish what is shared between Bulk and Shred vs. what is scenario-specific.
Flag anything experimental (e.g., Yamanaka factors) and note practical proxies or current safest approaches.
Base recommendations on established science first, then plausible mechanistic extensions.
Emphasize safety, sustainability, and measurability.
Use bullet points and bold key actions for readability.

### Output:
Start your response with a short overall comparison of Bulk vs. Shred priorities, then deliver the full structured output for both scenarios.

Write file to: 'output.md'

