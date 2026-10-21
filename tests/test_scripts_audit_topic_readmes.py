"""Tests for scripts/vault/audit_topic_readmes.py (topic README index audit)."""

from pathlib import Path

import pytest

from script_loader import load_script

audit = load_script("vault/audit_topic_readmes")

REPO_ROOT = Path(__file__).resolve().parent.parent


# ----------------------------------------------------------------------
# Parsing helpers
# ----------------------------------------------------------------------

class TestRowParsing:
    def test_split_row_strips_and_resolves_escaped_pipe(self):
        assert audit.split_row("| [[A\\|B]] | x |") == ["[[A|B]]", "x"]
        assert audit.split_row("| a | b |") == ["a", "b"]

    def test_cell_spans_gives_raw_positions(self):
        line = "| [[A]] | protein | text |"
        spans = audit.cell_spans(line)
        assert [line[s:e].strip() for s, e in spans] == ["[[A]]", "protein", "text"]

    def test_link_parts_splits_target_and_display(self):
        assert audit.link_parts("A\\|B") == ("A", "B")
        assert audit.link_parts("A") == ("A", "")

    def test_row_target_ignores_rows_without_links(self):
        assert audit.row_target(["plain", "text"]) == (None, None)
        assert audit.row_target(["[[X|Y]]", "t"]) == ("X", "Y")

    def test_find_tables_handles_headerless_blocks(self):
        lines = [
            "| Entity | entity_type_1 | Description |",
            "|---|---|---|",
            "| [[A]] | protein | x |",
            "",
            "| [[B]] | protein | y |",
        ]
        tables = audit.find_tables(lines)
        assert len(tables) == 2
        assert tables[0].rows == [2]
        # the headerless block inherits the previous table's columns
        assert tables[1].header == tables[0].header
        assert tables[1].rows == [4]


# ----------------------------------------------------------------------
# Link resolution
# ----------------------------------------------------------------------

class TestResolver:
    def _resolver(self, tmp_path):
        notes = tmp_path / "notes" / "topic"
        notes.mkdir(parents=True)
        (notes / "NF-κB.md").write_text(
            "---\ntitle: NF-κB\ntags: [protein]\naliases: [NFkappaB]\n---\n", encoding="utf-8")
        (notes / "M1dG.md").write_text(
            "---\ntitle: M1dG\ntags: [biomarker]\n---\n", encoding="utf-8")
        (notes / "handgrip strength.md").write_text(
            "---\ntitle: handgrip strength\ntags: [biomarker]\n---\n", encoding="utf-8")
        (notes / "energy transfer.md").write_text(
            "---\ntitle: energy transfer\ntags: [process]\n---\n", encoding="utf-8")
        topics = audit.load_notes(tmp_path / "notes")
        return audit.Resolver(topics)

    def test_resolves_by_stem_title_and_alias(self, tmp_path):
        r = self._resolver(tmp_path)
        assert r.resolve("M1dG") == "M1dG"
        assert r.resolve("NF-κB") == "NF-κB"
        assert r.resolve("NFkappaB") == "NF-κB"

    def test_resolves_greek_and_subscript_variants(self, tmp_path):
        r = self._resolver(tmp_path)
        assert r.resolve("NFκB") == "NF-κB"
        assert r.resolve("M₁dG") == "M1dG"

    def test_resolves_repeated_word_typo(self, tmp_path):
        r = self._resolver(tmp_path)
        assert r.resolve("energy resonance energy transfer") == "energy transfer"

    def test_unknown_target_does_not_resolve(self, tmp_path):
        r = self._resolver(tmp_path)
        assert r.resolve("totally unrelated thing") is None


# ----------------------------------------------------------------------
# Row building
# ----------------------------------------------------------------------

class TestBuildRow:
    def _note(self):
        return audit.Note(
            "X", Path("X.md"),
            {"title": "X", "description": "d", "tags": ["protein", "gene"]},
        )

    def test_build_row_house_schema(self):
        row = audit.build_row(["Entity", "entity_type_1", "Description"], self._note())
        assert row == "| [[X]] | protein | d |"

    def test_build_row_legacy_schema_uses_justification(self):
        row = audit.build_row(
            ["entity", "datetime updated", "entity_type_1", "entity_justification_1"],
            self._note(),
        )
        assert row == "| [[X]] | - | protein | d |"

    def test_pick_tag_prefers_matching_tag(self):
        note = audit.Note("X", Path("X.md"), {"tags": ["gene", "protein"]})
        assert audit.pick_tag(note, "Protein") == "protein"
        assert audit.pick_tag(note, "Uncategorized") == "gene"


# ----------------------------------------------------------------------
# Section placement
# ----------------------------------------------------------------------

class TestSectionScore:
    def test_matching_tag_scores_higher(self):
        note = audit.Note("Atg3", Path("Atg3.md"), {"tags": ["protein", "autophagy"]})
        assert audit.section_score("Core Autophagy Machinery & ATG Proteins", note) > 0
        assert audit.section_score("Transcriptional & Translational Regulation", note) == 0


# ----------------------------------------------------------------------
# Repair (--fix) on a scratch vault
# ----------------------------------------------------------------------

def _write_note(path: Path, title: str, tags: str, description: str = "d") -> None:
    path.write_text(
        f"---\ntitle: {title}\ndescription: {description}\ntags: [{tags}]\n---\n\n# {title}\n",
        encoding="utf-8",
    )


@pytest.fixture()
def scratch_vault(tmp_path, monkeypatch):
    """A tiny vault: one topic with two notes and a README missing one of them."""
    notes = tmp_path / "src" / "notes" / "topic"
    notes.mkdir(parents=True)
    _write_note(notes / "Alpha.md", "Alpha", "protein")
    (notes / "Alpha.md").write_text(
        "---\ntitle: Alpha\ndescription: d\ntags: [protein]\naliases: [Alfa]\n---\n\n# Alpha\n",
        encoding="utf-8",
    )
    _write_note(notes / "Beta.md", "Beta", "enzyme")
    (notes / "README.md").write_text(
        "---\ntitle: Topic\ndescription: d\ncreated: 2026-01-01\nupdated: 2026-01-01\n---\n"
        "# Topic\n\n"
        "## Entity Notes\n\n"
        "| Entity | entity_type_1 | Description |\n"
        "|---|---|---|\n"
        "| [[Alpha]] | protein | d |\n",
        encoding="utf-8",
    )
    monkeypatch.setattr(audit, "ROOT", tmp_path)
    return tmp_path


class TestFix:
    def _run(self, root):
        topics = audit.load_notes(root / "src" / "notes")
        by_stem = {n.stem: n for notes in topics.values() for n in notes}
        resolver = audit.Resolver(topics)
        return audit.fix_topic("topic", topics["topic"], by_stem, resolver)

    def test_missing_entity_row_is_added(self, scratch_vault):
        self._run(scratch_vault)
        text = (scratch_vault / "src" / "notes" / "topic" / "README.md").read_text()
        assert "[[Beta]]" in text
        assert "| enzyme |" in text

    def test_duplicate_rows_are_removed(self, scratch_vault):
        readme = scratch_vault / "src" / "notes" / "topic" / "README.md"
        readme.write_text(
            readme.read_text() + "| [[Alpha]] | protein | dup |\n", encoding="utf-8")
        self._run(scratch_vault)
        assert readme.read_text().count("[[Alpha]]") == 1

    def test_link_is_rewritten_to_the_canonical_filename(self, scratch_vault):
        readme = scratch_vault / "src" / "notes" / "topic" / "README.md"
        readme.write_text(
            readme.read_text().replace("[[Alpha]]", "[[Alfa]]"), encoding="utf-8")
        self._run(scratch_vault)
        assert "[[Alfa]]" not in readme.read_text()
        assert "[[Alpha]]" in readme.read_text()

    def test_invalid_entity_type_is_replaced_with_a_note_tag(self, scratch_vault):
        readme = scratch_vault / "src" / "notes" / "topic" / "README.md"
        readme.write_text(
            readme.read_text().replace("| [[Alpha]] | protein |", "| [[Alpha]] | Protein |"),
            encoding="utf-8",
        )
        self._run(scratch_vault)
        assert "| [[Alpha]] | protein |" in readme.read_text()

    def test_stale_counts_are_refreshed(self, scratch_vault):
        readme = scratch_vault / "src" / "notes" / "topic" / "README.md"
        readme.write_text(
            readme.read_text() + "\nTotal count of entities: 99\n", encoding="utf-8")
        self._run(scratch_vault)
        assert "Total count of entities: 2" in readme.read_text()

    def test_audit_is_clean_after_the_fix(self, scratch_vault):
        self._run(scratch_vault)
        topics = audit.load_notes(scratch_vault / "src" / "notes")
        resolver = audit.Resolver(topics)
        issues = audit.audit_topic("topic", topics["topic"], resolver)
        assert issues == []


# ----------------------------------------------------------------------
# The vault itself must stay clean
# ----------------------------------------------------------------------

class TestVaultIsClean:
    def test_every_topic_readme_indexes_its_notes(self):
        issues = audit.audit_all(REPO_ROOT / "src" / "notes")
        assert issues == [], "\n".join(
            f"{i['topic']}: [{i['kind']}] {i['detail']}" for i in issues
        )
