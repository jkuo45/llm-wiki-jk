"""Tests for scripts/cli.py dispatch + scripts/__main__.py delegation."""

import runpy
import sys
import types

from script_loader import load_script

cli = load_script("cli")


class TestUsage:
    def test_lists_all_commands(self, capsys):
        assert cli.main([]) == 0
        out = capsys.readouterr().out
        for cmd in cli.COMMANDS:
            assert cmd in out

    def test_help_flags(self, capsys):
        assert cli.main(["-h"]) == 0
        assert cli.main(["--help"]) == 0

    def test_unknown_command(self, capsys):
        assert cli.main(["nope"]) == 2
        err = capsys.readouterr().err
        assert "unknown command: nope" in err


class TestDispatch:
    def _stub(self, monkeypatch, rc):
        mod = types.SimpleNamespace(main=lambda: rc)
        monkeypatch.setitem(sys.modules, "fake.mod", mod)
        monkeypatch.setitem(cli.COMMANDS, "fake-cmd", ("fake.mod", "Fake"))
        return mod

    def test_returns_int_rc(self, monkeypatch):
        self._stub(monkeypatch, 3)
        assert cli.main(["fake-cmd", "--opt"]) == 3
        assert sys.argv == ["python -m scripts fake-cmd", "--opt"]

    def test_none_rc_becomes_zero(self, monkeypatch):
        self._stub(monkeypatch, None)
        assert cli.main(["fake-cmd"]) == 0

    def test_commands_table_sane(self):
        assert len(cli.COMMANDS) >= 10
        for cmd, (mod, desc) in cli.COMMANDS.items():
            assert mod.startswith("scripts.") and desc


class TestMainModule:
    def test_delegates_to_cli(self, monkeypatch, capsys):
        monkeypatch.setattr(sys, "argv", ["python -m scripts", "--help"])
        with __import__("pytest").raises(SystemExit) as e:
            runpy.run_path("scripts/__main__.py", run_name="__main__")
        assert e.value.code == 0
        assert "usage:" in capsys.readouterr().out
