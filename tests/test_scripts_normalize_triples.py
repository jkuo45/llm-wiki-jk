"""Tests for scripts/03_normalize_triples_schema.py (v2 multilingual schema)."""

import json

from script_loader import load_script

norm_mod = load_script("03_normalize_triples_schema")


def legacy_triple(**overrides):
    t = {
        "subject": "SIRT1",
        "predicate": "activates",
        "object": "NAD+",
        "context": "SIRT1 activates NAD+",
        "confidence": "high",
    }
    t.update(overrides)
    return t


class TestPureHelpers:
    def test_norm_matches_builder_convention(self):
        assert norm_mod.norm("SIRT1") == "sirt1"
        assert norm_mod.norm("NAD+") == "nad"
        assert norm_mod.norm("[[p53|p53 protein]]") == "p53_protein"

    def test_triple_id_deterministic_and_sensitive(self):
        t = legacy_triple()
        other_pred = legacy_triple(predicate="inhibits")
        other_obj = legacy_triple(object="NMN")
        assert norm_mod.triple_id(t) == norm_mod.triple_id(dict(t))
        assert norm_mod.triple_id(t) != norm_mod.triple_id(other_pred)
        assert norm_mod.triple_id(t) != norm_mod.triple_id(other_obj)
        assert len(norm_mod.triple_id(t)) == 12

    def test_normalize_context_from_legacy_string(self):
        assert norm_mod.normalize_context({"context": " hello "}) == {
            "en-US": "hello", "zh-TW": "",
        }

    def test_normalize_context_from_map(self):
        assert norm_mod.normalize_context(
            {"context": {"en-US": "en", "zh-TW": "zh"}}) == {
            "en-US": "en", "zh-TW": "zh",
        }

    def test_normalize_context_fills_missing_keys(self):
        assert norm_mod.normalize_context({"context": {"en-US": "en"}}) == {
            "en-US": "en", "zh-TW": "",
        }

    def test_reorder_puts_canonical_keys_first(self):
        t = {"confidence": "high", "object": "b", "id": "x",
             "subject": "a", "predicate": "p", "extra": 1}
        out = norm_mod.reorder(t)
        assert list(out) == ["id", "subject", "predicate", "object",
                             "confidence", "extra"]
        assert out["extra"] == 1  # unknown keys kept, appended last

    def test_serialize_is_stable_and_unicode_safe(self):
        text = norm_mod.serialize([{"subject": "NAD⁺"}])
        assert text.endswith("\n")
        assert "NAD⁺" in text


class TestMainPipeline:
    # the pipeline globs src/**/_triples.json — files are named literally
    # `_triples.json` under each topic dir
    def _write(self, tmp_path, triples, raw=None):
        topic = tmp_path / "src" / "topic"
        topic.mkdir(parents=True)
        path = topic / "_triples.json"
        path.write_text(
            raw if raw is not None
            else json.dumps(triples, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
        return path

    def _main(self, monkeypatch, tmp_path, *flags, capsys=None):
        import sys
        monkeypatch.setattr(norm_mod, "ROOT", tmp_path)
        monkeypatch.setattr(sys, "argv", ["x", *flags])
        return norm_mod.main()

    def test_migrates_legacy_file(self, tmp_path, monkeypatch, capsys):
        self._write(tmp_path, [legacy_triple(), legacy_triple()])

        assert self._main(monkeypatch, tmp_path, capsys=capsys) == 0
        out = json.loads(
            (tmp_path / "src" / "topic" / "_triples.json").read_text(
                encoding="utf-8")
        )
        assert len(out) == 1  # duplicate id dropped
        t = out[0]
        assert t["id"] == norm_mod.triple_id(legacy_triple())
        assert t["context"] == {"en-US": "SIRT1 activates NAD+", "zh-TW": ""}
        assert t["created"] == t["updated"]
        assert norm_mod.ISO_RE.match(t["created"])
        assert list(t)[0] == "id"  # canonical key order

        # idempotent: second run leaves the file byte-identical
        path = tmp_path / "src" / "topic" / "_triples.json"
        raw = path.read_text(encoding="utf-8")
        capsys.readouterr()
        assert self._main(monkeypatch, tmp_path, capsys=capsys) == 0
        assert path.read_text(encoding="utf-8") == raw

    def test_check_mode_never_writes(self, tmp_path, monkeypatch):
        path = self._write(tmp_path, [legacy_triple()])
        raw = path.read_text(encoding="utf-8")
        assert self._main(monkeypatch, tmp_path, "--check") == 0
        assert path.read_text(encoding="utf-8") == raw

    def test_check_flags_missing_en(self, tmp_path, monkeypatch):
        self._write(tmp_path, [legacy_triple(context="")])
        assert self._main(monkeypatch, tmp_path, "--check") == 1

    def test_check_passes_with_missing_zh_only(self, tmp_path, monkeypatch):
        self._write(tmp_path, [legacy_triple()])
        assert self._main(monkeypatch, tmp_path, "--check") == 0  # reported, not fatal

    def test_invalid_json_detected_in_check(self, tmp_path, monkeypatch, capsys):
        self._write(tmp_path, None, raw="{not json")
        assert self._main(monkeypatch, tmp_path, "--check") == 1
        assert "invalid JSON" in capsys.readouterr().out

    def test_no_triples_files_returns_error(self, tmp_path, monkeypatch):
        assert self._main(monkeypatch, tmp_path) == 1
