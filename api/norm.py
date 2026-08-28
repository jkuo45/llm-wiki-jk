"""Canonical entity id normalization — mirrors scripts/_graph_common.py::norm().

The base layer (entities/entity_edges) keys every row by norm(label), so the
API uses the same function to link user-supplied names (e.g. from an approved
research triple) onto base entities. Keep in sync with the pipeline version;
it is duplicated here so `api/` does not import `scripts/`.
"""

from __future__ import annotations

import re
import unicodedata

_GREEK = {
    "α": "alpha", "β": "beta", "γ": "gamma", "δ": "delta", "ε": "epsilon",
    "ζ": "zeta", "η": "eta", "θ": "theta", "ι": "iota", "κ": "kappa",
    "λ": "lambda", "μ": "mu", "ν": "nu", "ξ": "xi", "ο": "omicron",
    "π": "pi", "ρ": "rho", "σ": "sigma", "ς": "sigma", "τ": "tau",
    "υ": "upsilon", "φ": "phi", "χ": "chi", "ψ": "psi", "ω": "omega",
    "Α": "alpha", "Β": "beta", "Γ": "gamma", "Δ": "delta", "Ε": "epsilon",
    "Ζ": "zeta", "Η": "eta", "Θ": "theta", "Ι": "iota", "Κ": "kappa",
    "Λ": "lambda", "Μ": "mu", "Ν": "nu", "Ξ": "xi", "Ο": "omicron",
    "Π": "pi", "Ρ": "rho", "Σ": "sigma", "Τ": "tau", "Υ": "upsilon",
    "Φ": "phi", "Χ": "chi", "Ψ": "psi", "Ω": "omega",
}

_WIKILINK_RE = re.compile(r"\[\[([^\]]+)\]\]")


def _strip_wikilink(s: str) -> str:
    """Display text of a `[[link|display]]` (matches the pipeline behaviour)."""
    return _WIKILINK_RE.sub(
        lambda m: m.group(1).split("|", 1)[1] if "|" in m.group(1) else m.group(1),
        s,
    ).strip()


def norm(label: str) -> str:
    """Canonical node id: lowercase, non-alphanumerics -> single underscore,
    NFKC-normalized, Greek letters spelled out (e.g. "NF-κB" -> "nfkappab")."""
    s = _strip_wikilink(label or "").strip()
    s = unicodedata.normalize("NFKC", s).lower()
    s = "".join(_GREEK.get(ch, ch) for ch in s)
    return re.sub(r"[^a-z0-9]+", "_", s).strip("_")
