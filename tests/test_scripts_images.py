"""Tests for scripts/tools/thumbnail.py and scripts/tools/sort_manifest_tags.py."""

import json

import pytest

from script_loader import load_script

th = load_script("tools/thumbnail")
ms = load_script("tools/sort_manifest_tags")

pytest.importorskip("PIL", reason="tools/thumbnail requires Pillow")

from PIL import Image  # noqa: E402


# ----------------------------------------------------------------------
# tools/thumbnail
# ----------------------------------------------------------------------

def make_image(path, size=(800, 600), color=(200, 30, 30), fmt="PNG"):
    Image.new("RGB", size, color).save(path, format=fmt)


@pytest.fixture
def images_env(tmp_path, monkeypatch):
    """A manifest with one note whose page image exists on disk."""
    img_dir = tmp_path / "note-1"
    img_dir.mkdir()
    page = img_dir / "page-1.png"
    make_image(page)

    manifest = [
        {"id": "note-1", "path": "", "pages": [{"file": "page-1.png"}]},
    ]
    monkeypatch.setattr(th, "IMAGES_DIR", tmp_path)
    monkeypatch.setattr(th, "MANIFEST", tmp_path / "manifest.json")
    monkeypatch.setattr(th, "STAGED", tmp_path / ".staged.json")
    (tmp_path / "manifest.json").write_text(json.dumps(manifest), encoding="utf-8")
    return tmp_path, page


class TestReadJson:
    def test_missing_and_invalid_and_non_list(self, tmp_path):
        assert th.read_json(tmp_path / "nope.json") == []
        bad = tmp_path / "bad.json"
        bad.write_text("{not json", encoding="utf-8")
        assert th.read_json(bad) == []
        obj = tmp_path / "obj.json"
        obj.write_text('{"a": 1}', encoding="utf-8")
        assert th.read_json(obj) == []


class TestResolveAndThumbPaths:
    def test_resolve_with_note_path(self, tmp_path, monkeypatch):
        monkeypatch.setattr(th, "IMAGES_DIR", tmp_path)
        note = {"id": "n1", "path": "sub/n2/page.png"}
        resolved = th.resolve_page_file(note, "whatever.png")
        assert resolved == (tmp_path / "sub" / "n2" / "page.png").resolve()

    def test_resolve_without_note_path(self, tmp_path, monkeypatch):
        monkeypatch.setattr(th, "IMAGES_DIR", tmp_path)
        resolved = th.resolve_page_file({"id": "n1"}, "page.png")
        assert resolved == tmp_path / "n1" / "page.png"

    def test_thumb_path_inplace_note(self, tmp_path, monkeypatch):
        monkeypatch.setattr(th, "IMAGES_DIR", tmp_path)
        src = tmp_path / "x" / "page.jpg"
        note = {"id": "n1", "path": "x/page.jpg"}
        assert th.thumb_path(src, note) == tmp_path / "n1" / "page.thumb.jpg"

    def test_thumb_path_sibling_default(self, tmp_path):
        src = tmp_path / "page.jpg"
        assert th.thumb_path(src) == tmp_path / "page.thumb.jpg"


class TestPagePaths:
    def test_collects_existing_pages_and_rejects_traversal(self, tmp_path,
                                                            monkeypatch):
        img_dir = tmp_path / "n1"
        img_dir.mkdir()
        page = img_dir / "p.png"
        make_image(page)
        manifest = [
            {"id": "n1", "pages": [{"file": "p.png"}]},
            {"id": "../evil", "pages": [{"file": "p.png"}]},  # traversal id
            {"id": "n2", "pages": []},                        # no pages
        ]
        monkeypatch.setattr(th, "IMAGES_DIR", tmp_path)
        monkeypatch.setattr(th, "MANIFEST", tmp_path / "manifest.json")
        monkeypatch.setattr(th, "STAGED", tmp_path / "missing.json")
        (tmp_path / "manifest.json").write_text(json.dumps(manifest))
        found = th.page_paths()
        assert [p for p, _ in found] == [page.resolve()]

    def test_page_found_via_both_manifests(self, tmp_path, monkeypatch):
        # the same note listed in both manifest.json and .staged.json is
        # surfaced twice; main() relies on thumbnail mtimes to skip the
        # second pass, so no explicit dedupe happens here
        img_dir = tmp_path / "n1"
        img_dir.mkdir()
        page = img_dir / "p.png"
        make_image(page)
        note = {"id": "n1", "pages": [{"file": "p.png"}]}
        monkeypatch.setattr(th, "IMAGES_DIR", tmp_path)
        monkeypatch.setattr(th, "MANIFEST", tmp_path / "manifest.json")
        monkeypatch.setattr(th, "STAGED", tmp_path / ".staged.json")
        (tmp_path / "manifest.json").write_text(json.dumps([note]))
        (tmp_path / ".staged.json").write_text(json.dumps([note]))
        found = th.page_paths()
        assert len(found) == 2
        assert {p for p, _ in found} == {page}


class TestSaveThumbnail:
    def test_png_downscales_longest_edge(self, tmp_path):
        src = tmp_path / "a.png"
        dst = tmp_path / "a.thumb.png"
        make_image(src, size=(800, 600))
        th.save_thumbnail(src, dst, 400)
        with Image.open(dst) as im:
            assert max(im.size) == 400
            assert im.size == (400, 300)  # aspect preserved

    def test_jpeg_rgba_converted(self, tmp_path):
        src = tmp_path / "b.jpg"
        dst = tmp_path / "b.thumb.jpg"
        Image.new("RGBA", (500, 500), (0, 0, 0, 128)).save(src, format="PNG")
        th.save_thumbnail(src, dst, 100)
        with Image.open(dst) as im:
            assert im.mode == "RGB"

    def test_gif(self, tmp_path):
        src = tmp_path / "d.gif"
        dst = tmp_path / "d.thumb.gif"
        make_image(src, size=(600, 400), fmt="GIF")
        th.save_thumbnail(src, dst, 100)
        assert dst.exists()


class TestMain:
    def _run(self, monkeypatch, *flags):
        import sys
        monkeypatch.setattr(sys, "argv", ["tools/thumbnail.py", *flags])
        return th.main()

    def test_generate_then_skip_then_force(self, images_env, monkeypatch):
        tmp_path, page = images_env
        assert self._run(monkeypatch) == 0
        thumb = page.parent / "page-1.thumb.png"
        assert thumb.exists()
        with Image.open(thumb) as im:
            assert max(im.size) == 400

        # idempotent: fresh thumbnails are skipped
        mtime = thumb.stat().st_mtime
        assert self._run(monkeypatch) == 0
        assert thumb.stat().st_mtime == mtime

        # --force regenerates
        assert self._run(monkeypatch, "--force") == 0

    def test_custom_size(self, images_env, monkeypatch):
        tmp_path, page = images_env
        assert self._run(monkeypatch, "--thumb-size", "100") == 0
        with Image.open(page.parent / "page-1.thumb.png") as im:
            assert max(im.size) == 100

    def test_too_small_size_exits(self, images_env, monkeypatch):
        with pytest.raises(SystemExit):
            self._run(monkeypatch, "--thumb-size", "10")

    def test_no_images_ok(self, tmp_path, monkeypatch):
        monkeypatch.setattr(th, "IMAGES_DIR", tmp_path)
        monkeypatch.setattr(th, "MANIFEST", tmp_path / "manifest.json")
        monkeypatch.setattr(th, "STAGED", tmp_path / ".staged.json")
        (tmp_path / "manifest.json").write_text("[]")
        assert self._run(monkeypatch) == 0


# ----------------------------------------------------------------------
# tools/sort_manifest_tags
# ----------------------------------------------------------------------

class TestKebab:
    def test_basic(self):
        assert ms.kebab("Breast Cancer") == "breast-cancer"

    def test_plus(self):
        assert ms.kebab("NAD+") == "nad-plus"

    def test_punctuation_collapses(self):
        assert ms.kebab("  FoxO3 --  variant  ") == "foxo3-variant"


class TestEntityKeys:
    def test_full_and_head_nouns(self):
        keys = ms.entity_keys(["Breast Cancer", "SIRT1"])
        assert "breast-cancer" in keys
        assert "breast" in keys and "cancer" in keys  # head nouns (len > 3)
        assert "sirt1" in keys
        assert "cancer" in keys

    def test_short_words_not_split_out(self):
        keys = ms.entity_keys(["p53"])
        assert "p53" in keys
        assert "p" not in keys

    def test_none_and_empty(self):
        assert ms.entity_keys(None) == set()
        assert ms.entity_keys([]) == set()


class TestManifestSort:
    def _manifest(self, tmp_path, entries):
        path = tmp_path / "manifest.json"
        path.write_text(json.dumps(entries), encoding="utf-8")
        return path

    def test_reorders_by_relevance(self, tmp_path, monkeypatch):
        entries = [{
            "id": "img1",
            "tags": ["topic-x", "sirt1", "graph-analysis", "notes", "mtor"],
            "entities": ["SIRT1"],
        }]
        path = self._manifest(tmp_path, entries)
        monkeypatch.setattr(ms, "MANIFEST", path)

        assert ms.main() == 0
        out = json.loads(path.read_text())
        # topic first, format facets next, entity-matched content tag first
        assert out[0]["tags"] == ["topic-x", "graph-analysis", "notes",
                                  "sirt1", "mtor"]

    def test_idempotent(self, tmp_path, monkeypatch):
        entries = [{
            "id": "img1",
            "tags": ["topic-x", "notes", "mtor", "sirt1"],
            "entities": ["SIRT1"],
        }]
        path = self._manifest(tmp_path, entries)
        monkeypatch.setattr(ms, "MANIFEST", path)
        ms.main()
        first = json.loads(path.read_text())
        assert ms.main() == 0
        assert json.loads(path.read_text()) == first

    def test_single_tag_untouched(self, tmp_path, monkeypatch):
        entries = [{"id": "img1", "tags": ["only"], "entities": []}]
        path = self._manifest(tmp_path, entries)
        monkeypatch.setattr(ms, "MANIFEST", path)
        assert ms.main() == 0
        assert json.loads(path.read_text())[0]["tags"] == ["only"]
