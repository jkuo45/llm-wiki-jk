---
name: image-ingest
description: Ingest screenshots or photos (e.g. graph-analysis screenshots, handwritten notes) into the wiki notes panel using a LOCAL ollama vision model for OCR. Creates one media/notes folder per image, moves the file from raw/, adds a curated entry (with OCR transcription) to media/notes/manifest.json, and generates a web-gallery thumbnail.
---

# Image Ingest (local ollama OCR)

Turn an image located in `raw/` (or elsewhere) into a curated note entry in the
Notes panel (`media/notes/`), transcribing its text with a **local ollama vision
model** — no cloud/API OCR, no agent vision required.

## When to use

- A screenshot (e.g. graph-analysis UI, prompt, results, node sets) or photo of
  handwritten notes needs to be added to the wiki's Notes panel.
- The source image lives in `raw/` (or a given path) and should be moved into a
  per-note folder in `media/notes/`.
- You need an `ocr` transcription for the manifest entry.

## Conventions (follow exactly)

- **One image per folder.** Each note folder holds exactly one image file (its
  original basename). Two separate screenshots → two separate folders + two manifest entries.
- **Folder naming**: `media/notes/n-<YYYYMMDD>-<slug>-00/`
  - `YYYYMMDD` = today (e.g. `20260818`)
  - `slug` = short kebab-case descriptor (e.g. `graph-analysis-creatine-mb-prompt`)
  - `-00` suffix (collision counter if needed)
- **Retain the original file name** — do NOT rename to `page-N`. When copying
  into the note folder, keep the source basename (e.g. `IMG_6170.jpeg`,
  `gr1_autophagosomes.jpg`). The manifest `pages[].file` must list that basename.
  (Preserves source provenance and avoids ambiguity across notes.)
- **Move, don't copy**: after copying the image into its note folder, remove the
  original from `raw/` (the user's "move image there" intent).
- Timestamps: frontmatter-style `created`/`updated` = `YYYY-MM-DD`; `created_at`/
  `updated_at` = ISO-8601 UTC (e.g. `2026-08-18T22:03:45+00:00`), from
  `date -u +"%Y-%m-%dT%H:%M:%S+00:00"`.

## Workflow

### 1. Read the image context

The image may or may not be viewable directly (the working model may have no
vision). Regardless, plan to OCR it with ollama.

### 2. Pick a vision-capable ollama model

List locally installed models:

```bash
ollama list
```

Prefer a **vision-capable** model (e.g. `gemma3`, or another multimodal model).
If none are vision-capable, tell the user and stop rather than fabricating OCR.

### 3. OCR each image

Create the note folder and copy the image in first (OCR works off the final
path, and the manifest points into the folder):

```bash
mkdir -p "media/notes/n-20260818-<slug>-00"
cp raw/<source>.<ext> "media/notes/n-20260818-<slug>-00/<source>.<ext>"
```

Then run ollama on the copy. Clean the ANSI control-char noise from the output:

```bash
OLLAMA_NOPROGRESS=1 ollama run <model> \
  "Transcribe ALL visible text in the image at the absolute path: <ABS_PATH_TO_PAGE>. Output only the transcribed text, faithfully. If there are diagrams/buttons, describe them briefly." \
  2>/dev/null | sed 's/\x1b\[[0-9;?]*[a-zA-Z]//g' | tr -d '\r'
```

**Prompt guidance**
- Reference the image **by absolute path** — that is how ollama attaches it.
- Ask it to preserve structure (headings, lists, bullets) and fold diagrams /
  buttons into brief inline notes so nothing meaningful is lost.
- Run OCR **per image** (one call each).
- **Post-process the output**: strip ANSI escapes (shown above), remove UI
  spinner/toolbar noise, fix obvious OCR errors (e.g. "Crestine" → "Creatine"),
  and normalize symbols to standard forms (e.g. `NAD+`, `SIRT1`). Never wrap
  entities in `[[wiki links]]` inside the OCR text.

### 4. Add the manifest entry

Append a new object to `media/notes/manifest.json` (keep existing entries).
Schema:

```jsonc
{
  "id": "n-20260818-<slug>-00",
  "title": "<Human readable title>",
  "topic": "<topic, existing topic dir name>",
  "document": "",                 // plain filename; only if it maps to a doc
  "entities": ["<GraphNodeLabel>", ...],   // graph node labels, plain text
  "tags": ["<kebab-case tags>"],
  "pages": [{ "page": 1, "file": "<original-basename>.<ext>" }],
  "ocr": "<transcription from Step 3>",
  "ocr_lang": "en",
  "annotations": [],
  "created": "YYYY-MM-DD",
  "updated": "YYYY-MM-DD",
  "created_at": "<ISO-8601 UTC>",
  "author": "you",
  "draft": false,
  "updated_at": "<ISO-8601 UTC>"
}
```

**Field decisions**
- `entities`: derive from the image/graph content (e.g. `["Creatine",
  "Methylene Blue"]`). Ask the user if ambiguous.
- `topic`: reuse an existing topic name where possible; ask the user otherwise.
- `ocr`: single page → just the text. Multi-page (separate entries) each carry
  their own page text.
- `pages[].file`: the **original source basename** (not `page-1`), e.g.
  `IMG_6170.jpeg`. It must exactly match the file placed in the note folder.
- When a value is genuinely unknown/not applicable, leave `document` as `""`
  and `annotations` as `[]` rather than inventing data.

Validate the file:

```bash
python3 -m json.tool media/notes/manifest.json > /dev/null && echo OK
```

### 4b. Generate a thumbnail

Every note needs a `<stem>.thumb.<ext>` sibling: the web gallery requests
`?thumb=1` for every card / page-strip, and the API serves the full-resolution
original when no thumbnail exists (making the gallery slow). Once the manifest
entry is in place, run the shared backfill script — it scans `media/notes/`
(manifest + staged) and creates a `.thumb` for any page that lacks one
(idempotent, format-preserving, keeps EXIF orientation):

```bash
uv run --with pillow python scripts/01_generate_thumbnail.py
```

Confirm this note's thumbnail was written:

```bash
ls -lh media/notes/n-<YYYYMMDD>-<slug>-00/
# expect: <source>.<ext>  AND  <source>.thumb.<ext>
```

### 5. Clean up `raw/`

Remove the original from `raw/` now that a copy lives in the note folder:

```bash
rm raw/<source>.png
```

## Rules / pitfalls

- **One folder per image** — never lump two screenshots into one folder as two
  page files unless the user explicitly wants a multi-page note.
- **Retain original file names** — do not normalize to `page-N`; keep the source
  basename in the folder and in `pages[].file`.
- **No wiki links in data files** — `ocr`, `entities`, `document`, `entities`
  are plain text, never `[[...]]`.
- **No fabricated OCR** — if a model cannot read the image (no vision), say so
  and stop; do not invent a transcription.
- **Always strip ANSI / control characters** from `ollama run` output before
  storing it in the manifest.
- **Always generate the thumbnail** — after appending the manifest entry, run
  `uv run --with pillow python scripts/01_generate_thumbnail.py` (Step 4b) so
  the web gallery's `?thumb=1` requests get a small file instead of the
  full-resolution original.
- **Only touch `manifest.json`** — `.staged.json` is for live browser uploads;
  leave it alone unless the user asks to reconcile (scripts/02_reconcile_notes.py).
- Timestamps must be real (use `date -u`) and match the project display format
  rules in AGENTS.md where applicable.

## Optional: verify in the web app

If the server is running, the Notes panel at `web/index.html` (API
`/v1/notes` in `api/notes.py`) surfaces these entries. Confirm the new note
appears and its image/OCR render correctly.
