"""api.notes — gallery index, image serving + note edits (no uploads/OCR).

All filesystem state lives under tmp_path (module globals patched); the
super-admin auth gate is bypassed so tests don't depend on the shell env.
"""

import io
import json

import pytest
from fastapi import HTTPException
from PIL import Image

import api.main as main_mod
import api.routers.notes as notes

# Default (repo-relative) roots must resolve to the actual repo dirs — a move
# that shifts the Path(__file__) depth silently empties the gallery. The
# notes_env fixture patches REPO_ROOT, so assert the un-patched default here.
def test_default_repo_root_points_at_repo():
    assert (notes.REPO_ROOT / "src" / "images").is_dir()
    assert (notes.REPO_ROOT / "src" / "notes").is_dir()


def png_bytes(size=(8, 6), color=(10, 20, 30)):
    buf = io.BytesIO()
    Image.new("RGB", size, color).save(buf, format="PNG")
    return buf.getvalue()


@pytest.fixture
def notes_env(tmp_path, monkeypatch, client):
    """Patched images/docs dirs + cold caches + the API test client."""
    images = tmp_path / "images"
    images.mkdir()
    (tmp_path / "docs").mkdir()
    monkeypatch.setattr(notes, "REPO_ROOT", tmp_path)
    monkeypatch.setattr(notes, "IMAGES_DIR", images)
    monkeypatch.setattr(notes, "MANIFEST_FILE", images / "manifest.json")
    monkeypatch.setattr(notes, "STAGED_FILE", images / ".staged.json")
    monkeypatch.setattr(notes, "NOTES_DIR", tmp_path / "docs")
    monkeypatch.setattr(notes, "_committed_cache", None)
    monkeypatch.setattr(notes, "_staged_cache", None)
    monkeypatch.setattr(notes, "_documents_cache", None)

    async def allow(request):
        return None

    monkeypatch.setattr(main_mod, "authorize_request", allow)
    return images, client


def seed_staged(images, note):
    staged = images / ".staged.json"
    rows = json.loads(staged.read_text()) if staged.exists() else []
    rows.append(note)
    staged.write_text(json.dumps(rows))


def make_page_file(images, note_id, fname="page-1.png"):
    d = images / note_id
    d.mkdir(parents=True, exist_ok=True)
    (d / fname).write_bytes(png_bytes())
    return d / fname


class TestHelpers:
    def test_ocr_failure_detection(self):
        assert notes._looks_like_ocr_failure("OCR_FAILED")
        assert notes._looks_like_ocr_failure("I cannot process this image")
        assert notes._looks_like_ocr_failure("Model does not support images")
        assert not notes._looks_like_ocr_failure("Page 1: glucose uptake rises")

    def test_note_dir_rejects_traversal(self):
        with pytest.raises(HTTPException) as exc:
            notes._note_dir("../evil")
        assert exc.value.status_code == 400

    def test_resolve_page_file_rejects_escape(self):
        note = {"id": "n1", "path": "../../../etc/passwd"}
        with pytest.raises(HTTPException) as exc:
            notes._resolve_page_file(note, "x.png")
        assert exc.value.status_code == 400


class TestGalleryIndex:
    def test_merges_committed_and_staged_with_documents(self, notes_env,
                                                        tmp_path):
        images, c = notes_env
        (images / "manifest.json").write_text(json.dumps([
            {"id": "committed-1", "title": "Committed", "pages": [],
             "updated": "2026-01-01"},
        ]))
        seed_staged(images, {"id": "staged-1", "pages": [],
                             "updated": "2026-02-01", "draft": True})
        docs = tmp_path / "docs" / "topic"
        docs.mkdir(parents=True)
        (docs / "_document_ - A Paper.md").write_text("---\ntitle: A\n---\n")

        r = c.get("/v1/notes")
        assert r.status_code == 200
        body = r.json()
        assert body["count"] == 2
        assert body["notes"][0]["id"] == "staged-1"  # newest first
        assert body["notes"][1]["title"] == "Committed"
        assert body["documents"] == [
            {"filename": "_document_ - A Paper.md",
             "path": "docs/topic/_document_ - A Paper.md",
             "topic": "topic"},
        ]

    def test_public_note_shape(self, notes_env):
        images, c = notes_env
        seed_staged(images, {
            "id": "n1", "title": "Legacy title", "ocr": "transcript text",
            "pages": [{"page": 1, "file": "page-1.png"}],
            "entities": ["SIRT1"], "tags": ["notes"], "starred": True,
        })
        note = c.get("/v1/notes").json()["notes"][0]
        assert note["title"] == "Legacy title"
        assert note["ocr"] == "transcript text"
        assert note["has_ocr"] is True
        assert note["draft"] is False
        assert note["starred"] is True
        assert note["author"] == "you"
        assert "image_dir" not in note

    def test_ocr_failure_not_reported_as_transcript(self, notes_env):
        images, c = notes_env
        seed_staged(images, {"id": "n2", "ocr": "OCR_FAILED", "pages": []})
        note = c.get("/v1/notes").json()["notes"][0]
        assert note["ocr"] == "OCR_FAILED"
        assert note["has_ocr"] is False


class TestImageServing:
    def test_serves_page_and_prefers_thumb(self, notes_env):
        images, c = notes_env
        seed_staged(images, {"id": "n1",
                             "pages": [{"page": 1, "file": "page-1.png"}]})
        page = make_page_file(images, "n1")
        (page.parent / "page-1.thumb.png").write_bytes(png_bytes(color=(255, 0, 0)))

        r = c.get("/v1/notes/image/n1/1")
        assert r.status_code == 200
        assert r.headers["cache-control"] == "public, max-age=3600"

        r = c.get("/v1/notes/image/n1/1", params={"thumb": "1"})
        assert r.status_code == 200
        assert r.headers["content-type"] == "image/png"

    def test_unknown_note_and_page_404(self, notes_env):
        images, c = notes_env
        assert c.get("/v1/notes/image/ghost/1").status_code == 404
        seed_staged(images, {"id": "n1",
                             "pages": [{"page": 1, "file": "page-1.png"}]})
        assert c.get("/v1/notes/image/n1/9").status_code == 404


class TestNoteEdits:
    def test_save_annotations(self, notes_env):
        images, c = notes_env
        seed_staged(images, {"id": "n1", "pages": [], "annotations": []})
        r = c.post("/v1/notes/n1/annotations", json={
            "annotations": [
                {"type": "box", "page": 1, "x": 0.1, "y": 0.2, "w": 0.3, "h": 0.4},
                {"type": "dot"},  # minimal shape -> defaults applied
                "garbage",  # non-dict -> dropped
            ]
        })
        assert r.status_code == 200
        out = r.json()["annotations"]
        assert len(out) == 2
        assert out[0]["type"] == "box" and out[0]["w"] == 0.3
        assert out[1]["id"] and out[1]["page"] == 1
        assert out[1]["color"] == "#ffcc00"

        assert c.post("/v1/notes/n1/annotations",
                      json={"annotations": "x"}).status_code == 400
        assert c.post("/v1/notes/ghost/annotations",
                      json={"annotations": []}).status_code == 404

    def test_save_metadata_updates_and_persists(self, notes_env):
        images, c = notes_env
        seed_staged(images, {"id": "n1", "pages": [], "title": "Old"})
        r = c.post("/v1/notes/n1/metadata", json={
            "title": "New Title", "entities": ["SIRT1", "", 5],
            "tags": ["My Tag"], "document": "Some Paper",
        })
        assert r.status_code == 200
        body = r.json()
        assert body["title"] == "New Title"
        assert body["entities"] == ["SIRT1", "5"]  # non-str coerced via str()
        assert body["tags"] == ["my-tag"]
        assert body["document"] == "Some Paper"

        staged = json.loads((images / ".staged.json").read_text())
        assert staged[0]["translations"]["en-US"]["title"] == "New Title"

    def test_edit_committed_note_updates_manifest(self, notes_env):
        images, c = notes_env
        (images / "manifest.json").write_text(json.dumps(
            [{"id": "c1", "pages": [], "title": "Committed"}]))
        r = c.post("/v1/notes/c1/metadata", json={"title": "Renamed"})
        assert r.status_code == 200
        manifest = json.loads((images / "manifest.json").read_text())
        assert manifest[0]["translations"]["en-US"]["title"] == "Renamed"
