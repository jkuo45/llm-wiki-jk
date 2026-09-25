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


class TestContentStats:
    def test_counts_words_images_links_diagrams(self, tmp_path):
        f = tmp_path / "note.md"
        f.write_text(
            "---\ntitle: X\ndescription: d\n---\n"
            "One two [link](https://x) [[Alpha]] and ![](img.png).\n"
            "中文測試\n"
            "```mermaid\ngraph TD;\n```\n"
            'More ![[Embed.png]] <div class="mermaid">graph</div>\n',
            encoding="utf-8",
        )
        s = rc.content_stats(f)
        assert s["images"] == 2
        assert s["links"] == 2          # image syntax never leaks into links
        assert s["diagrams"] == 2       # fence + <div class="mermaid">
        assert s["words"] == 24         # 20 latin tokens (incl. image/url bits) + 4 CJK chars, no frontmatter

    def test_missing_file_returns_zeros(self, tmp_path):
        assert rc.content_stats(tmp_path / "nope.md") == {
            "words": 0, "images": 0, "links": 0, "diagrams": 0,
        }


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
        foo = by_id["foo"]
        assert "kind" not in foo
        assert set(foo["langs"]) == {"en-US", "zh-TW"}
        assert foo["starred"] is True
        en = foo["langs"]["en-US"]
        assert en["title"] == "Foo Task"
        assert en["created"] == "2026-01-01"
        assert en["path"] == "tasks/en-US/foo.md"
        assert foo["langs"]["zh-TW"]["path"] == "tasks/zh-TW/foo_zh-TW.md"
        assert by_id["bar"]["langs"]["en-US"]["path"] == "tasks/en-US/sub/bar.md"

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


# ----------------------------------------------------------------------
# build_web_wiki — scored top-N selection
# ----------------------------------------------------------------------

def wiki_args(tmp_path, **over):
    ns = argparse.Namespace(
        notes_dir=tmp_path / "notes",
        web_wiki_dir=tmp_path / "web_wiki",
        web_data_dir=tmp_path / "web_data",
        wiki_roles=tmp_path / "node_roles.json",
        wiki_limit=30,
        wiki_half_life=60.0,
        wiki_weights=(0.5, 0.35, 0.10, 0.05),
        wiki_no_score=False,
    )
    for k, v in over.items():
        setattr(ns, k, v)
    return ns


def write_note(args, name, *, created, updated, starred=False, words=50):
    d = args.notes_dir / "topic"
    d.mkdir(parents=True, exist_ok=True)
    lines = ["---", f"title: {name}", "description: d",
             f"created: {created}", f"updated: {updated}", "tags: [x]"]
    if starred:
        lines.append("starred: true")
    lines.append("---")
    (d / f"{name}.md").write_text(
        "\n".join(lines) + "\n\n" + " ".join(["w"] * words) + "\n",
        encoding="utf-8",
    )


def write_roles(args, nodes):
    """nodes: {id: (pagerank, betweenness, degree)}"""
    payload = {"nodes": [
        {"id": i, "label": i,
         "metrics": {"pagerank": p, "betweenness": b, "degree": d}}
        for i, (p, b, d) in nodes.items()
    ]}
    args.wiki_roles.write_text(json.dumps(payload), encoding="utf-8")


def wiki_ids(args):
    doc = json.loads((args.web_data_dir / "wiki.json").read_text())
    return [g["id"] for g in doc["wiki"]]


class TestBuildWebWikiScoring:
    def _seed(self, tmp_path, **over):
        from datetime import timedelta
        args = wiki_args(tmp_path, **over)
        today = datetime.now(timezone.utc).date()
        write_roles(args, {
            "hub": (0.01, 0.18, 300),       # graph-max on every metric
            "base": (0.0001, 0.0, 2),       # low-metric baseline node
        })
        write_note(args, "hub", created="2026-01-01",
                   updated=str(today - timedelta(days=30)), words=2000)
        write_note(args, "fresh", created=str(today), updated=str(today))
        return args

    def test_default_limit_is_50(self):
        assert rc.WIKI_LIMIT_DEFAULT == 50

    def test_entries_carry_card_stats(self, tmp_path):
        args = self._seed(tmp_path)
        rc.build_web_wiki(rc.scan_notes_for_web(args.notes_dir), args, tmp_path)
        doc = json.loads((args.web_data_dir / "wiki.json").read_text())
        hub = next(g for g in doc["wiki"] if g["id"] == "hub")
        assert hub["stats"] == {
            "words": 2000, "images": 0, "links": 0, "diagrams": 0,
        }

    def test_central_hub_beats_fresh_stub(self, tmp_path):
        args = self._seed(tmp_path)
        rc.build_web_wiki(rc.scan_notes_for_web(args.notes_dir), args, tmp_path)
        ids = wiki_ids(args)
        assert ids[0] == "wiki-index"
        assert ids[1:3] == ["hub", "fresh"]  # pure recency would pick fresh first

    def test_no_score_flag_restores_recency_order(self, tmp_path):
        args = self._seed(tmp_path, wiki_no_score=True)
        rc.build_web_wiki(rc.scan_notes_for_web(args.notes_dir), args, tmp_path)
        assert wiki_ids(args)[1:3] == ["fresh", "hub"]

    def test_star_is_bonus_not_pin(self, tmp_path):
        from datetime import timedelta
        args = self._seed(tmp_path)
        today = datetime.now(timezone.utc).date()
        # Two equally-old isolated notes: the starred one gets the 0.10 bonus
        # and ranks higher, but neither outranks the hub, and with limit=1 the
        # starred note falls out of the feed entirely (bonus, not pin).
        write_note(args, "oldstar", created="2026-01-01",
                   updated=str(today - timedelta(days=120)), starred=True)
        write_note(args, "oldplain", created="2026-01-01",
                   updated=str(today - timedelta(days=150)))
        rc.build_web_wiki(rc.scan_notes_for_web(args.notes_dir), args, tmp_path)
        ids = wiki_ids(args)
        assert ids[1] == "hub"
        assert ids.index("oldstar") < ids.index("oldplain")

        args.wiki_limit = 1
        rc.build_web_wiki(rc.scan_notes_for_web(args.notes_dir), args, tmp_path)
        assert wiki_ids(args)[1] == "hub"

    def test_missing_roles_falls_back_to_recency(self, tmp_path):
        args = self._seed(tmp_path)
        args.wiki_roles = tmp_path / "nope.json"
        rc.build_web_wiki(rc.scan_notes_for_web(args.notes_dir), args, tmp_path)
        assert wiki_ids(args)[1:3] == ["fresh", "hub"]


class TestGithubBlob:
    def test_url_quoting_and_guards(self):
        from types import SimpleNamespace
        args = SimpleNamespace(repo_url="https://github.com/x/y", branch="dev")
        assert rc.github_blob(args, "src/notes/a b/NF-κB.md") == (
            "https://github.com/x/y/blob/dev/src/notes/a%20b/NF-%CE%BAB.md")
        assert rc.github_blob(args, "/abs/notes/a.md") == ""  # outside repo
        assert rc.github_blob(
            SimpleNamespace(repo_url="https://github.com/x/y", branch=""),
            "src/notes/a.md",
        ) == ""

    def test_wiki_entry_carries_github(self, tmp_path, monkeypatch):
        monkeypatch.chdir(tmp_path)  # so the fixture notes dir can be relative
        args = wiki_args(
            tmp_path,
            notes_dir=Path("notes"),
            repo_url="https://github.com/example/repo",
            branch="dev",
        )
        write_note(args, "hub", created="2026-01-01", updated="2026-01-01")
        rc.build_web_wiki(rc.scan_notes_for_web(args.notes_dir), args, tmp_path)
        doc = json.loads((args.web_data_dir / "wiki.json").read_text())
        hub = next(g for g in doc["wiki"] if g["id"] == "hub")
        assert hub["langs"]["en-US"]["github"] == (
            "https://github.com/example/repo/blob/dev/notes/topic/hub.md")

        # Without repo/branch (bare Namespace) the key is omitted entirely.
        args2 = wiki_args(tmp_path)
        write_note(args2, "hub", created="2026-01-01", updated="2026-01-01")
        rc.build_web_wiki(rc.scan_notes_for_web(args2.notes_dir), args2, tmp_path)
        doc2 = json.loads((args2.web_data_dir / "wiki.json").read_text())
        hub2 = next(g for g in doc2["wiki"] if g["id"] == "hub")
        assert "github" not in hub2["langs"]["en-US"]
