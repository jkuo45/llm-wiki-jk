"""Tests for scripts/tools/pdf_to_md.py (pymupdf4llm is stubbed, no PDF needed)."""

import sys
import types

import pytest

from script_loader import load_script

sys.modules.setdefault("pymupdf4llm", types.SimpleNamespace(to_markdown=lambda p: "# doc"))
pdf = load_script("tools/pdf_to_md")


class TestParsePdf:
    def test_missing_file_exits(self, tmp_path):
        with pytest.raises(SystemExit) as e:
            pdf.parse_pdf(str(tmp_path / "no.pdf"))
        assert e.value.code == 1

    def test_success_writes_frontmatter(self, tmp_path, monkeypatch):
        src = tmp_path / "paper.pdf"
        src.write_bytes(b"%PDF-1.4 fake")
        monkeypatch.setattr(pdf.pymupdf4llm, "to_markdown", lambda p: "# Hi")
        outdir = tmp_path / "out"
        pdf.parse_pdf(str(src), str(outdir))
        md = (outdir / "paper.md").read_text(encoding="utf-8")
        assert md.startswith("---\ntitle: paper\n")
        assert "# Hi" in md

    def test_parse_error_exits(self, tmp_path, monkeypatch):
        src = tmp_path / "bad.pdf"
        src.write_bytes(b"%PDF-1.4 fake")

        def boom(p):
            raise RuntimeError("boom")

        monkeypatch.setattr(pdf.pymupdf4llm, "to_markdown", boom)
        with pytest.raises(SystemExit) as e:
            pdf.parse_pdf(str(src), str(tmp_path / "o2"))
        assert e.value.code == 1
