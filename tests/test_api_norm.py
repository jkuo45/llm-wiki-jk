"""api.norm — canonical id normalization must mirror scripts/lib/graph_common.py."""

from api.norm import norm

from script_loader import load_script

pipeline_norm = load_script("lib/graph_common").norm


class TestNorm:
    def test_plain_symbol(self):
        assert norm("SIRT1") == "sirt1"
        assert norm("mTORC1") == "mtorc1"

    def test_greek_transliteration(self):
        assert norm("NFκB") == "nfkappab"
        assert norm("NF-kappab") == "nf_kappab"
        assert norm("IKKβ") == "ikkbeta"

    def test_unicode_superscripts(self):
        assert norm("NAD⁺") == "nad"
        assert norm("Ca²⁺") == "ca2"  # NFKC turns ² into the digit 2

    def test_punctuation_and_spaces_collapse(self):
        assert norm("Caspase-9") == "caspase_9"
        assert norm("Caspase 9") == "caspase_9"
        assert norm("Advanced Glycation End Products") == (
            "advanced_glycation_end_products"
        )

    def test_wikilink_display_text_wins(self):
        assert norm("[[p62|p62 protein]]") == "p62_protein"
        assert norm("[[NAD+]]") == "nad"

    def test_empty_and_none_safe(self):
        assert norm("") == ""
        assert norm(None) == ""


class TestPipelineParity:
    def test_matches_pipeline_norm(self):
        """Cross-check a sample against the pipeline implementation directly."""
        for label in ("SIRT1", "NF-κB", "Caspase-9",
                      "Advanced Glycation End Products",
                      "[[p62|p62 protein]]", "NAD⁺"):
            assert norm(label) == pipeline_norm(label), label
