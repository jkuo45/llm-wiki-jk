"""api.wiki — wiki note + task output lookup for description enrichment."""

from pathlib import Path

import pytest

import api.wiki as wiki


@pytest.fixture
def wiki_env(tmp_path, monkeypatch):
    """Empty wiki/tasks roots + cold caches; tests add files as needed."""
    notes = tmp_path / "notes"
    tasks = tmp_path / "tasks"
    notes.mkdir()
    tasks.mkdir()
    monkeypatch.setattr(wiki, "WIKI_ROOT", notes)
    monkeypatch.setattr(wiki, "TASKS_ROOT", tasks)
    monkeypatch.setattr(wiki, "_WIKI_INDEX", None)
    monkeypatch.setattr(wiki, "_TASK_PATHS", None)
    wiki._TASK_TEXT_CACHE.clear()
    return notes, tasks


def write(path: Path, text: str) -> Path:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")
    return path


def note_md(title, description, aliases=None, body=""):
    fm = f"---\ntitle: {title}\ndescription: {description}\n"
    if aliases:
        fm += f"aliases: [{', '.join(aliases)}]\n"
    fm += f"---\n\n# {title}\n\n{body}"
    return fm


class TestParseFrontmatter:
    def test_title_description_aliases(self):
        meta = wiki._parse_frontmatter(
            "---\ntitle: NAD+\ndescription: a redox coenzyme\n"
            "aliases: [NADH, \"Nicotinamide Adenine Dinucleotide\"]\n---\nbody"
        )
        assert meta["title"] == "NAD+"
        assert meta["description"] == "a redox coenzyme"
        assert meta["aliases"] == ["NADH", "Nicotinamide Adenine Dinucleotide"]

    def test_multiline_description_continuation(self):
        meta = wiki._parse_frontmatter(
            "---\ntitle: X\ndescription: first line\n  continued here\n---\n"
        )
        assert meta["description"] == "first line continued here"

    def test_no_frontmatter(self):
        assert wiki._parse_frontmatter("plain text") == {}


class TestCleanText:
    def test_strips_wikilinks_and_markdown(self):
        # wikilinks resolve to the link TARGET (group 1), not the display text
        text = "See [[NAD+|the coenzyme]] and [docs](https://x) for **bold** *ital* `code`."
        out = wiki._clean_text(text)
        assert out == "See NAD+ and docs for bold ital code."

    def test_strips_callouts_and_pipes_and_collapses(self):
        out = wiki._clean_text("> [!tip]  note | with pipes")
        assert out == "note with pipes"


class TestBodyExcerpt:
    def test_first_paragraph_after_h1(self):
        text = "---\ntitle: X\n---\n# X\n\n> [!info] callout skipped\n\n"
        text += "First real paragraph. Second sentence.\n\nAnother paragraph."
        # every non-skipped line joins until the excerpt budget is reached
        assert wiki._body_excerpt(text) == (
            "First real paragraph. Second sentence. Another paragraph."
        )

    def test_skips_headings_and_tables(self):
        text = "# X\n\n## Sub\n\n| a | b |\n|---|---|\n\nProse here."
        assert wiki._body_excerpt(text) == "Prose here."

    def test_no_h1(self):
        assert wiki._body_excerpt("no heading here") == ""


class TestBuildWikiIndex:
    def test_indexes_title_stem_and_aliases(self, wiki_env):
        notes, _ = wiki_env
        write(notes / "_link" / "NAD+.md",
              note_md("NAD+", "a coenzyme", aliases=["NADH"]))
        index = wiki.build_wiki_index()
        # title and stem coincide ("NAD+.md"); aliases indexed too
        assert "nad+" in index and "nadh" in index
        assert index["nad+"]["description"] == "a coenzyme"

    def test_entity_beats_document_on_key_collision(self, wiki_env):
        notes, _ = wiki_env
        write(notes / "sirtuins" / "_document_ - Some Paper.md",
              note_md("SIRT1", "paper mentioning SIRT1"))
        write(notes / "sirtuins" / "SIRT1.md", note_md("SIRT1", "the entity itself"))
        index = wiki.build_wiki_index()
        assert "paper mentioning" not in index["sirt1"]["description"]

    def test_prefers_longer_description_between_entities(self, wiki_env):
        notes, _ = wiki_env
        write(notes / "a" / "X.md", note_md("X", "short"))
        write(notes / "b" / "X.md", note_md("X", "a much longer and better description"))
        index = wiki.build_wiki_index()
        assert index["x"]["description"] == "a much longer and better description"

    def test_skips_notes_without_description_or_excerpt(self, wiki_env):
        notes, _ = wiki_env
        write(notes / "Empty.md", "---\ntitle: Empty\n---\n\n# Empty\n")
        assert wiki.build_wiki_index() == {}


class TestMatchWikiNode:
    def test_by_label_then_id_then_substring(self, wiki_env):
        notes, _ = wiki_env
        write(notes / "sirtuins" / "SIRT1.md", note_md("SIRT1", "the deacetylase"))
        hit = wiki.match_wiki_node("sirt1", "SIRT1")
        assert hit and hit["title"] == "SIRT1"
        assert wiki.match_wiki_node("sirt1", "")  # via node_id
        fuzzy = wiki.match_wiki_node("other", "SIRT1")  # exact key hit anyway
        assert fuzzy["title"] == "SIRT1"

    def test_substring_fallback(self, wiki_env):
        notes, _ = wiki_env
        write(notes / "_link" / "NAD+.md", note_md("NAD+", "coenzyme"))
        hit = wiki.match_wiki_node("nothing", "NAD")  # substring of title key "nad+"
        assert hit and hit["title"] == "NAD+"

    def test_no_match(self, wiki_env):
        assert wiki.match_wiki_node("x", "Ghost") is None


class TestTaskOutputs:
    def test_task_text_strips_frontmatter(self, wiki_env):
        _, tasks = wiki_env
        write(tasks / "task_output_a.md", "---\ntitle: A\n---\n\nbody about SIRT1")
        assert wiki._task_text(tasks / "task_output_a.md") == "\n\nbody about SIRT1"

    def test_task_text_lru_eviction(self, wiki_env, monkeypatch):
        _, tasks = wiki_env
        monkeypatch.setattr(wiki, "_TASK_TEXT_CAP", 2)
        paths = [write(tasks / f"task_output_{i}.md", f"text {i}") for i in range(3)]
        for p in paths:
            wiki._task_text(p)
        assert paths[0] not in wiki._TASK_TEXT_CACHE  # oldest evicted
        assert paths[2] in wiki._TASK_TEXT_CACHE

    def test_search_task_outputs_matches_wikilink_and_bare(self, wiki_env):
        _, tasks = wiki_env
        write(tasks / "task_output_links.md",
              "The study shows [[SIRT1]] activates stress responses.")
        write(tasks / "task_output_bare.md",
              "We also mention SIRT1 in passing here.")
        write(tasks / "task_output_other.md", "irrelevant content")
        found = wiki.search_task_outputs("SIRT1", limit=3)
        # task paths are scanned in sorted order; snippets have links stripped
        assert [f["file"] for f in found] == ["task_output_bare", "task_output_links"]
        assert "SIRT1" in found[1]["snippet"]
        assert "[[" not in found[1]["snippet"]

    def test_search_limit(self, wiki_env):
        _, tasks = wiki_env
        for i in range(5):
            write(tasks / f"task_output_{i}.md", f"note {i} mentions SIRT1.")
        assert len(wiki.search_task_outputs("SIRT1", limit=2)) == 2

    def test_search_empty_label(self, wiki_env):
        assert wiki.search_task_outputs("") == []

    def test_missing_task_file_handled(self, wiki_env, monkeypatch):
        _, tasks = wiki_env
        p = write(tasks / "task_output_gone.md", "about SIRT1")
        wiki._task_text(p)  # cache the text
        p.unlink()          # then delete the file; cached text still served
        assert "SIRT1" in wiki._task_text(p)


class TestEnrichDescription:
    def test_wiki_note_and_tasks_composed(self, wiki_env):
        notes, tasks = wiki_env
        write(notes / "sirtuins" / "SIRT1.md",
              note_md("SIRT1", "NAD-dependent deacetylase",
                      body="It links NAD+ metabolism to stress responses."))
        write(tasks / "task_output_t1.md",
              "Task output mentioning [[SIRT1]] and sirtuin biology.")
        out = wiki.enrich_description("sirt1", "SIRT1")
        assert out["wiki_source"] == "SIRT1"
        assert "NAD-dependent deacetylase" in out["description"]
        assert "links NAD+ metabolism" in out["description"]
        assert out["task_outputs"][0]["file"] == "task_output_t1"
        assert "From task output" in out["description"]

    def test_fallback_without_wiki_note(self, wiki_env):
        out = wiki.enrich_description("ghost", "Ghost", "graph description")
        assert out == {"description": "graph description",
                       "wiki_source": None, "task_outputs": []}

    def test_excerpt_deduped_against_description(self, wiki_env):
        notes, _ = wiki_env
        body = "NAD-dependent deacetylase. Unique extra fact."
        write(notes / "X.md", note_md("X", "NAD-dependent deacetylase", body=body))
        out = wiki.enrich_description("x", "X")
        # near-duplicate excerpt sentence dropped, unique one kept
        assert out["description"].count("NAD-dependent deacetylase") == 1
        assert "Unique extra fact" in out["description"]

    def test_description_truncated(self, wiki_env):
        notes, _ = wiki_env
        write(notes / "Long.md",
              note_md("Long", "word " * 400))
        out = wiki.enrich_description("long", "Long")
        assert len(out["description"]) == wiki._MAX_DESCRIPTION + 3
        assert out["description"].endswith("...")
