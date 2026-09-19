"""Tests for scripts/sync/content_to_db.py pure builders (no Supabase needed)."""

import json

import pytest

from script_loader import load_script

content = load_script("sync/content_to_db")

pytest.importorskip("yaml", reason="sync/content_to_db imports PyYAML")


class TestParseFrontmatter:
    def test_no_frontmatter(self):
        assert content.parse_frontmatter("no fm") == {}

    def test_scalars(self):
        assert content.parse_frontmatter("---\ntitle: X\n---\nbody") == {"title": "X"}

    def test_non_dict_is_empty(self):
        assert content.parse_frontmatter("---\n- just\n- list\n---\n") == {}

    def test_invalid_yaml_is_empty(self):
        assert content.parse_frontmatter("---\ntitle: [unclosed\n---\n") == {}


class TestReadJson:
    def test_missing_returns_default(self, tmp_path):
        assert content._read_json(tmp_path / "missing.json", []) == []

    def test_invalid_returns_default(self, tmp_path):
        bad = tmp_path / "bad.json"
        bad.write_text("{oops")
        assert content._read_json(bad, {"d": 1}) == {"d": 1}

    def test_falsy_returns_default(self, tmp_path):
        empty = tmp_path / "empty.json"
        empty.write_text("[]")
        assert content._read_json(empty, ["fallback"]) == ["fallback"]


class TestBuilders:
    def test_build_articles_skips_rows_without_id(self, tmp_path, monkeypatch):
        (tmp_path / "articles.json").write_text(json.dumps([
            {"id": "a1", "langs": {"en": 1}}, {"noid": True}, "str",
        ]))
        (tmp_path / "tasks.json").write_text(json.dumps({"tasks": []}))
        monkeypatch.setattr(content, "DATA_DIR", tmp_path)
        assert content.build_articles() == [{"content_type": "article", "content_id": "a1",
                                             "langs": {"en": 1}, "active": True}]

    def test_build_tasks_normalizes_legacy_ids(self, tmp_path, monkeypatch):
        (tmp_path / "articles.json").write_text("[]")
        (tmp_path / "tasks.json").write_text(json.dumps({"tasks": [
            {"id": "task:stem1"}, {"id": "stem2", "active": False}, {"noid": 1},
        ]}))
        monkeypatch.setattr(content, "DATA_DIR", tmp_path)
        tasks = content.build_tasks()
        assert [t["content_id"] for t in tasks] == ["stem1", "stem2"]
        assert tasks[1]["active"] is False


class TestLoadEnv:
    def test_reads_from_environment(self, monkeypatch, tmp_path):
        monkeypatch.setenv("SUPABASE_URL", "https://x.supabase.co/rest/v1/")
        monkeypatch.setenv("SUPABASE_SERVICE_KEY", "k")
        monkeypatch.setattr(content, "ROOT", tmp_path)
        url, key = content.load_env()
        assert url == "https://x.supabase.co/rest/v1/" and key == "k"

    def test_missing_exits(self, monkeypatch, tmp_path):
        monkeypatch.delenv("SUPABASE_URL", raising=False)
        monkeypatch.delenv("SUPABASE_SERVICE_KEY", raising=False)
        monkeypatch.setattr(content, "ROOT", tmp_path)
        with pytest.raises(SystemExit):
            content.load_env()
