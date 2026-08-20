# Notes Panel — Transcript Tightening & qwen Re-OCR

**Date:** 19_August_2026 04:38 PM PDT

## Goal

Improve the readability of `src/images/manifest.json` OCR transcripts for the
web notes panel: strip OCR-model editorial narration, fix line-wrap/duplicate
artifacts, flag genuinely ambiguous segments as `[AMBIGUOUS]`, and salvage the
handwritten (`notes`-tagged) entries whose gemma3 transcripts were garbled or
mislabeled — using a best local vision model (qwen3.5) via re-OCR + zh
re-translation.

## Approach & scripts

1. **Idempotent cleanup pass** — `scripts/tighten_manifest_transcripts.py`
   (new) across all 220 entries, `translations[en-US].ocr` + `zh-TW.ocr`:
   - Strips OCR-model editorial / narration blocks (trailing
     "The image contains…", "Diagram/Table Description: …", "Note: This
     appears to be…", `[Handwritten Note – …]` framing) and model closures
     ("I have aimed to transcribe…", "Let me know if…").
   - Joins words split across a line break ("A dead↲deadly process" →
     "A deadly process"), run to a fixpoint for chained wraps.
   - Collapses runaway duplicate words.
   - Normalizes `[illegible]`/`[unclear]`/`[unreadable]` → `[AMBIGUOUS]`.
   - Strips ollama CLI ANSI cursor-redraw escapes and stray braille spinner
     glyphs.
   - Strips zh editorial annotations (「（原文…，疑為OCR誤植）」).
   - Safety net: never empties a transcript (over-stripped entries keep the
     source).
   Idempotent (recompute == stored); tags/metadata untouched.

2. **qwen3.5 local re-OCR (handwritten notes)** — `scripts/reocr_notes_qwen.py`:
   - `ollama run qwen3.5 --think=false "<prompt>" /abs/path/image` — thinking
     must be disabled (else it spirals for minutes) and the image path must be
     **absolute** (relative paths are not attached and qwen refuses).
   - Re-transcribed all 74 `notes`-tagged images into `/tmp/ocr_raw/<id>.txt`.

3. **zh-TW re-translation** — `scripts/reocr_notes_zh.py`: translates each
   corrected English transcript into natural Traditional Chinese (English gloss
   on first mention), `/tmp/ocr_raw/zh/<id>.txt`.

4. **Fold-in** — `scripts/apply_qwen_reocr.py`: replaces `en-US.ocr` and
   `zh-TW.ocr` for entries whose fresh transcripts are ≥120 chars (short /
   failed outputs are skipped, original kept), then `tighten_manifest_transcripts.py`
   is re-run so the cleanup applies uniformly.

## Results

- All **220** transcripts mechanically cleaned (editorial strip, wrap-merge,
  dup-collapse, `[AMBIGUOUS]`, ANSI removal).
- **71 handwritten notes** replaced with faithful qwen re-OCR (avg en length
  ~1.5K chars) and **71 regenerated zh translations**.
- **3 entries skipped** (diary pages `epigenetics-img-6148/6149/6150`) — qwen
  could only read their date/heading; the original (richer) gemma transcripts
  are kept.
- Verified: manifest JSON valid, idempotent, zero non-OCR field drift, zero
  residual ANSI/`[illegible]`, tag-label vocabulary still fully covered by
  `web/data/notes-tags-zh-TW.json`.
- Committed (`9dc0e7ac`).

## Notable finding

The page tagged **`n-20260818-phenethylamine-00`** is actually a **spermidine**
note (microbiota gut → polyamine regulation; the old gemma transcript
mislabeled it as phenethylamine). The qwen re-OCR corrected both the en text
and the zh translation. **Tag/entity metadata for this id is now inconsistent
with its true content** and was left untouched (out of scope) — worth an
upstream relabel/re-tag review.

## Notes for the maintainer

- Re-OCR strategy only applied to the 74 handwritten (`notes`-tagged) entries
  as requested. The ~146 printed infographics keep the mechanical cleanup
  (their bilingual print OCR was already structured); re-OCRing them with qwen
  would roughly triple the pipeline runtime.
- Retaining genuinely-garbled handwriting is intentional: the transcripts keep
  their "handwritten note" character; only deterministically-fixable artifacts
  are cleaned and unreadable segments flagged `[AMBIGUOUS]` rather than
  invented.