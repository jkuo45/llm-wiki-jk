"""Tests for scripts/vault/readme_counts.py (README markers + web tasks)."""

import argparse
import json
from datetime import datetime, timezone
from pathlib import Path

import pytest

from script_loader import load_script

rc = load_script("vault/readme_counts")


# ----------------------------------------------------------------------
# Formatting helpers
# ----------------------------------------------------------------------

class TestFormatting:
    def test_format_number(self):
        assert rc.format_number(12345) == "12,345"
        assert rc.format_number(0) == "0"

    def test_format_size_mb_only(self):
        assert rc.format_size(0) == "0.00 MB"
        assert rc.format_size(2 * 1024 * 1024) == "2.00 MB"

    def test_count_words(self, tmp_path):
        f = tmp_path / "x.md"
        f.write_text("one two  three\nfour", encoding="utf-8")
        assert rc.count_words(f) == 4
        assert rc.count_words(tmp_path / "missing.md") == 0

    def test_get_timestamp_project_format(self):
        ts = rc.get_timestamp()
        # %d_%b_%Y %I:%M %p %Z uppercased, e.g. 27_AUG_2026 09:30 AM PDT
        import re
        assert re.fullmatch(
            r"\d{2}_[A-Z]{3}_\d{4} \d{2}:\d{2} [AP]M [A-Z]{2,5}", ts)


# ----------------------------------------------------------------------
# Marker sections
# ----------------------------------------------------------------------

class TestMarkers:
    def test_make_and_has_markers(self):
        block = rc.make_marker_block("sec", "content")
        assert rc.has_markers(block)
        assert not rc.has_markers("plain readme")

    def test_update_section_replaces_existing(self):
        doc = ("intro\n" + rc.make_marker_block("sec", "old") + "\n\ntail")
        out = rc.update_section(doc, "sec", "new")
        assert "old" not in out and "new" in out
        assert "intro" in out and "tail" in out

    def test_update_section_appends_when_absent(self):
        out = rc.update_section("intro", "sec", "new")
        assert rc.has_markers(out)
        assert out.startswith("intro")

    def test_repeated_updates_are_idempotent_in_shape(self):
        doc = "intro"
        for _ in range(3):
            doc = rc.update_section(doc, "sec", "same")
        assert doc.count("<!-- GENERATED: sec -->") == 1


# ----------------------------------------------------------------------
# Frontmatter / dates / task ids
# ----------------------------------------------------------------------

class TestFrontmatter:
    def test_scalars_lists_quotes(self, tmp_path):
        f = tmp_path / "t.md"
        f.write_text(
            "---\n"
            "title: My Task\n"
            'description: "quoted"\n'
            "tags: [a, b]\n"
            "aliases:\n"
            "  - one\n"
            "  - two\n"
            "starred: true\n"
            "---\n\nbody\n",
            encoding="utf-8",
        )
        fm = rc.parse_frontmatter(f)
        assert fm["title"] == "My Task"
        assert fm["description"] == "quoted"
        assert fm["tags"] == ["a", "b"]
        assert fm["aliases"] == ["one", "two"]
        assert fm["starred"] == "true"

    def test_missing_or_invalid(self, tmp_path):
        assert rc.parse_frontmatter(tmp_path / "nope.md") == {}
        f = tmp_path / "plain.md"
        f.write_text("no frontmatter", encoding="utf-8")
        assert rc.parse_frontmatter(f) == {}


class TestParseIsoDate:
    def test_date_only(self):
        dt = rc.parse_iso_date("2026-08-27")
        assert (dt.year, dt.month, dt.day) == (2026, 8, 27)
        assert dt.tzinfo is not None

    def test_full_iso(self):
        dt = rc.parse_iso_date("2026-08-27T10:00:00+00:00")
        assert dt.year == 2026

    def test_fallback_on_garbage(self):
        sentinel = datetime(2000, 1, 1, tzinfo=timezone.utc)
        assert rc.parse_iso_date("not-a-date", sentinel) is sentinel


class TestTaskIdStem:
    def test_language_suffixes(self):
        assert rc.task_id_stem("report_zh-TW.md") == ("report", "zh-TW")
        assert rc.task_id_stem("report_en-US.md") == ("report", "en-US")
        assert rc.task_id_stem("report.md") == ("report", "en-US")
        assert rc.task_id_stem("report_ZH-TW.md") == ("report", "zh-TW")


# ----------------------------------------------------------------------
# Triple metrics
# ----------------------------------------------------------------------

class TestComputeTripleMetrics:
    def test_metrics(self):
        triples = [
            {"subject": "A", "predicate": "activates", "object": "B",
             "confidence": "high"},
            {"subject": "B", "predicate": "inhibits", "object": "C",
             "confidence": "low"},
            {"subject": "C", "predicate": "has_type", "object": "gene",
             "confidence": "high"},
        ]
        m = rc.compute_triple_metrics(triples, exclude_has_type=True)
        assert m["nodes"] == 3 and m["edges"] == 2
        assert m["predicates"] == 2
        assert m["high_confidence"] == 1
        assert m["high_pct"] == pytest.approx(50.0)
        assert m["top_subjects"][0] == ("A", 1)
        full = rc.compute_triple_metrics(triples, exclude_has_type=False)
        assert full["edges"] == 3 and full["predicates"] == 3

    def test_empty(self):
        m = rc.compute_triple_metrics([])
        assert m["nodes"] == 0 and m["high_pct"] == 0.0
        assert m["top_subjects"] == []


class TestLoadTriples:
    def test_loads_and_defaults(self, tmp_path):
        topic = tmp_path / "topic"
        topic.mkdir()
        f = topic / "_triples_topic.json"
        f.write_text('[{"subject": "A"}]', encoding="utf-8")
        assert rc.load_triples(topic) == [{"subject": "A"}]
        empty = tmp_path / "other"
        empty.mkdir()
        assert rc.load_triples(empty) == []


# ----------------------------------------------------------------------
# build_web_tasks integration
# ----------------------------------------------------------------------

def make_args(tmp_path):
    return argparse.Namespace(
        tasks_dir=tmp_path / "tasks",
        web_tasks_dir=tmp_path / "web_tasks",
        web_data_dir=tmp_path / "web_data",
    )


class TestBuildWebTasks:
    def _seed(self, tmp_path):
        args = make_args(tmp_path)
        (args.tasks_dir / "sub").mkdir(parents=True)
        (args.tasks_dir / "foo.md").write_text(
            "---\ntitle: Foo Task\ndescription: desc\ncreated: 2026-01-01\n"
            "updated: 2026-02-01\ntags: [analysis]\nstarred: true\n---\n\nbody\n",
            encoding="utf-8",
        )
        (args.tasks_dir / "sub" / "bar.md").write_text("body\n", encoding="utf-8")
        # hand-maintained zh-TW translation (web-only, never overwritten)
        zh_dir = args.web_tasks_dir / "zh-TW"
        zh_dir.mkdir(parents=True)
        (zh_dir / "foo_zh-TW.md").write_text("翻譯內容\n", encoding="utf-8")
        dt = datetime(2026, 2, 1, tzinfo=timezone.utc)
        task_data = [
            {"datetime": dt, "path": str(args.tasks_dir / "sub" / "bar.md"),
             "words": 1},
            {"datetime": dt, "path": str(args.tasks_dir / "foo.md"), "words": 2},
        ]
        return args, task_data

    def test_emits_index_groups_and_copies(self, tmp_path):
        args, task_data = self._seed(tmp_path)
        scanned = rc.scan_web_zh_tasks(args)
        assert len(scanned) == 1 and scanned[0]["in_place"] is True

        rc.build_web_tasks(task_data + scanned, args)

        doc = json.loads((args.web_data_dir / "tasks.json").read_text())
        tasks = doc["tasks"]
        assert tasks[0]["id"] == "tasks-index" and tasks[0]["active"] is True

        by_id = {t["id"]: t for t in tasks[1:]}
        foo = by_id["task:foo"]
        assert set(foo["langs"]) == {"en-US", "zh-TW"}
        assert foo["starred"] is True
        en = foo["langs"]["en-US"]
        assert en["title"] == "Foo Task"
        assert en["created"] == "2026-01-01"
        assert en["path"] == "tasks/en-US/foo.md"
        assert foo["langs"]["zh-TW"]["path"] == "tasks/zh-TW/foo_zh-TW.md"
        assert by_id["task:bar"]["langs"]["en-US"]["path"] == "tasks/en-US/sub/bar.md"

        # copies landed, zh-TW untouched
        assert (args.web_tasks_dir / "en-US" / "foo.md").exists()
        assert (args.web_tasks_dir / "en-US" / "sub" / "bar.md").exists()
        assert (args.web_tasks_dir / "zh-TW" / "foo_zh-TW.md").read_text(
            encoding="utf-8") == "翻譯內容\n"

    def test_rebuild_wipes_en_but_keeps_zh(self, tmp_path):
        args, task_data = self._seed(tmp_path)
        rc.build_web_tasks(task_data, args)
        # stale flat file in web_tasks root must be cleaned up too
        stale = args.web_tasks_dir / "old.md"
        stale.write_text("stale", encoding="utf-8")

        rc.build_web_tasks(task_data, args)

        assert not stale.exists()
        assert (args.web_tasks_dir / "en-US" / "foo.md").exists()
        assert (args.web_tasks_dir / "zh-TW" / "foo_zh-TW.md").exists()
