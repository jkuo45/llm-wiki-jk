# Notes / 笔记

Photos of handwritten notes about papers in the wiki. Served and posted through
the **Notes panel** in `web/index.html` (API at
`/v1/notes/*` in `api/notes.py`).

## Layout

- `manifest.json` — committed, curated notes (the durable source of truth that
  ships with the wiki).
- `.staged.json` — live browser uploads, served immediately.
- `<topic>/n-<date>-<slug>/` — per-note folders holding `page-N.<ext>` images
  and optional `page-N.thumb.<ext>` thumbnails.
- **In-place notes** — manifest entries may carry a `"path"` field pointing at
  an image that lives outside `data/notes/` (e.g. `data/biology/<topic>/<file>`).
  The value is anchored at `data/notes/` (`"../biology/<topic>/<file>"`), the
  thumbnail is stored at `data/notes/<id>/<stem>.thumb.<ext>`, and the source
  image is never moved or copied.

## Record schema

```jsonc
{
  "id": "n-20260818-sirtuins-mechanisms",
  "title": "Sirtuins review — mechanism sketch",
  "topic": "sirtuins",
  "document": "_document_ - sirtuins ... .md",   // plain filename; no wiki links in data files
  "entities": ["SIRT1", "NAD+"],                 // graph node labels (plain text)
  "tags": ["aging", "metabolism"],
  "pages": [{ "page": 1, "file": "page-1.jpg" }],
  "path": "../biology/<topic>/<file>",  // optional; in-place source, anchored at data/notes/
  "ocr": "--- Page 1 ---\nTranscribed text...",  // generated once via wiki-util OCR
  "ocr_lang": "en",
  "annotations": [{ "id": "a1", "type": "circle", "page": 1,
                    "x": 0.3, "y": 0.4, "r": 0.08, "color": "#ffcc00", "label": "" }],
  "created": "2026-08-18", "updated": "2026-08-18",
  "created_at": "2026-08-18T10:00:00+00:00", "author": "you",
  "draft": true
}
```

Annotation coordinates are normalized 0–1 across tools:
- `circle` → `x, y, r`
- `rect` → `x, y, w, h`
- `arrow` → `x1, y1, x2, y2`
- `label` → `x, y, label`

## API

| Endpoint | Purpose |
|---|---|
| `GET /v1/notes` | Merged gallery index + `src/notes` document index |
| `GET /v1/notes/image/{id}/{page}?thumb=1` | Note photo (or thumbnail) |
| `POST /v1/notes/upload` | Browser upload (multipart: `files`, `title`, `topic`, `document`, `entities`, `tags`) |
| `POST /v1/notes/transcribe` | OCR once per note via the read-only wiki-util agent |
| `POST /v1/notes/{id}/annotations` | Persist annotation overlays |
| `POST /v1/notes/{id}/metadata` | Update title / document / entities / tags |

Writes are currently public; auth will be added later.
