"""Tests for scripts/07_sync_assumptions.py (canonical selections -> file).

Offline: covers registry re-resolution (resolve_against_registry) including
drift/unresolved cases and the SYNC_KEYS preservation rule. The PostgREST
fetch is not exercised (network); main() is run end-to-end with a stubbed
fetch via monkeypatch.
"""

import json

import pytest

from script_loader import load_script

mod = load_script("07_sync_assumptions")


@pytest.fixture
def registry(tmp_path, monkeypatch):
    doc = {
        "dataset": "triples",
        "schemaVersion": 2,
        "generated": "30_Aug_2026 08:00 PM PDT",
        "excludedSources": [],
        "selections": {"old": {"stale": {"key": "A", "addedEdges": [], "removedEdges": []}}},
        "scenarios": [
            {"id": "s1", "conflicts": [{
                "id": "c1",
                "options": [
                    {"key": "A", "edits": {}},
                    {"key": "B", "edits": {
                        "remove": [["x", "is", "y"]],
                        "add": [{"from": "a", "label": "activates", "to": "b",
                                 "confidence_score": 0.8, "context": "ctx",
                                 "context_zh_TW": "語境"}],
                    }},
                ],
            }]},
        ],
    }
    path = tmp_path / "assumptions.json"
    path.write_text(json.dumps(doc, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    monkeypatch.setattr(mod, "ASSUMPTIONS_FILE", path)
    return path


def row(**kw):
    base = {
        "scenario_id": "s1", "conflict_id": "c1", "selected_key": "B",
        "added_edges": [], "removed_edges": [],
        "source_hash": None, "updated_at": "2026-08-30T20:00:00+00:00",
    }
    base.update(kw)
    return base


class TestResolveAgainstRegistry:
    def _doc(self, registry):
        return json.loads(registry.read_text(encoding="utf-8"))

    def test_resolves_option_edits(self, registry):
        entry, problem = mod.resolve_against_registry(self._doc(registry), row())
        assert problem is None
        assert entry["key"] == "B"
        assert entry["removedEdges"] == [["x", "is", "y"]]
        assert entry["addedEdges"][0]["label"] == "activates"
        assert entry["updatedAt"] == "2026-08-30T20:00:00+00:00"

    def test_unknown_scenario_unresolved(self, registry):
        entry, problem = mod.resolve_against_registry(self._doc(registry), row(scenario_id="zz"))
        assert entry is None and "no longer exists" in problem

    def test_unknown_conflict_unresolved(self, registry):
        entry, problem = mod.resolve_against_registry(self._doc(registry), row(conflict_id="zz"))
        assert entry is None and "no longer exists" in problem

    def test_unknown_option_unresolved(self, registry):
        entry, problem = mod.resolve_against_registry(self._doc(registry), row(selected_key="Z"))
        assert entry is None and "option" in problem


class TestMain:
    def _stub_env(self, monkeypatch, tmp_path):
        monkeypatch.setattr(mod, "canonical_owner", lambda: "owner-uuid")
        monkeypatch.setattr(mod, "load_env", lambda: ("http://sb", "key"))

    def _main(self, monkeypatch, *flags):
        import sys
        monkeypatch.setattr(sys, "argv", ["x", *flags])
        return mod.main()

    def test_writes_selections_block_only(self, registry, monkeypatch, capsys):
        self._stub_env(monkeypatch, registry)
        monkeypatch.setattr(mod, "fetch_selections", lambda *a, **k: [row()])
        assert self._main(monkeypatch) == 0
        doc = json.loads(registry.read_text(encoding="utf-8"))
        # stale machine block replaced, curated sections untouched
        assert set(doc["selections"]) == {"s1"}
        assert doc["scenarios"][0]["id"] == "s1"
        assert doc["excludedSources"] == []
        assert "08:00 PM" not in doc["generated"]  # generated re-stamped

    def test_idempotent_second_run(self, registry, monkeypatch, capsys):
        self._stub_env(monkeypatch, registry)
        monkeypatch.setattr(mod, "fetch_selections", lambda *a, **k: [row()])
        self._main(monkeypatch)
        first = registry.read_text(encoding="utf-8")
        capsys.readouterr()
        assert self._main(monkeypatch) == 0
        assert "already up to date" in capsys.readouterr().out
        assert registry.read_text(encoding="utf-8") == first

    def test_drift_reported_but_resolved(self, registry, monkeypatch, capsys):
        self._stub_env(monkeypatch, registry)
        monkeypatch.setattr(mod, "fetch_selections", lambda *a, **k: [row(source_hash="oldhash")])
        assert self._main(monkeypatch) == 0
        assert "drift" in capsys.readouterr().out

    def test_check_fails_on_unresolved(self, registry, monkeypatch, capsys):
        self._stub_env(monkeypatch, registry)
        monkeypatch.setattr(mod, "fetch_selections", lambda *a, **k: [row(selected_key="Z")])
        assert self._main(monkeypatch) == 0  # plain run: unresolved left to manual curation
        capsys.readouterr()
        assert self._main(monkeypatch, "--check") == 1

    def test_dry_run_never_writes(self, registry, monkeypatch, capsys):
        self._stub_env(monkeypatch, registry)
        monkeypatch.setattr(mod, "fetch_selections", lambda *a, **k: [row()])
        before = registry.read_text(encoding="utf-8")
        assert self._main(monkeypatch, "--dry-run") == 0
        assert "DRY RUN" in capsys.readouterr().out
        assert registry.read_text(encoding="utf-8") == before

    def test_no_owner_exits(self, registry, monkeypatch):
        monkeypatch.setattr(mod, "canonical_owner", lambda: "")
        with pytest.raises(SystemExit):
            mod.main()
