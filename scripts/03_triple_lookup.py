#!/usr/bin/env python3
"""Map triple ids from src/notes/*/_triples.json to the built web edge keys.

Triple review reports cite 12-hex triple ids (e.g. `0ad00fdc47e2`) which only
exist in the raw `_triples.json` files — they do not survive into
graphify-out/graph.json or web/public/data/triples-edges.json (edges there are
keyed by norm(subject) / predicate / norm(object)). This helper resolves the
ids so assumption registries (web/public/data/assumptions.json) can be curated
against the built edge keys, and reports whether each edge exists in the
current web data.

Usage:
  uv run python3 scripts/03_triple_lookup.py 0ad00fdc47e2 c260ca387ad5
  uv run python3 scripts/03_triple_lookup.py --all     # dump id -> key table
"""

import glob
import json
import re
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WEB_EDGES = ROOT / "web" / "public" / "data" / "triples-edges.json"

_GREEK = {
    "α": "alpha", "β": "beta", "γ": "gamma", "δ": "delta", "ε": "epsilon",
    "ζ": "zeta", "η": "eta", "θ": "theta", "ι": "iota", "κ": "kappa",
    "λ": "lambda", "μ": "mu", "ν": "nu", "ξ": "xi", "ο": "omicron",
    "π": "pi", "ρ": "rho", "σ": "sigma", "ς": "sigma", "τ": "tau",
    "υ": "upsilon", "φ": "phi", "χ": "chi", "ψ": "psi", "ω": "omega",
}


def norm(label: str) -> str:
    """Canonical node id — mirrors scripts/_graph_common.py::norm()."""
    s = re.sub(r"\[\[([^\]]+)\]\]",
               lambda m: m.group(1).split("|", 1)[1] if "|" in m.group(1) else m.group(1),
               (label or "").strip())
    s = unicodedata.normalize("NFKC", s).lower()
    s = "".join(_GREEK.get(ch, ch) for ch in s)
    return re.sub(r"[^a-z0-9]+", "_", s).strip("_")


def index_triples() -> dict[str, dict]:
    """id -> triple record, across every topic _triples.json."""
    triples: dict[str, dict] = {}
    for path in glob.glob(str(ROOT / "src" / "notes" / "*" / "_triples.json")):
        for t in json.loads(Path(path).read_text(encoding="utf-8")):
            triples[t["id"]] = t
    return triples


def web_keys() -> set[tuple[str, str, str]]:
    edges = json.loads(WEB_EDGES.read_text(encoding="utf-8"))
    return {(e["from"], e["label"], e["to"]) for e in edges}


def main() -> int:
    args = sys.argv[1:]
    dump_all = "--all" in args
    ids = [a for a in args if not a.startswith("--")]
    triples = index_triples()
    keys = web_keys()

    if dump_all:
        ids = sorted(triples)

    if not ids:
        print(__doc__)
        return 1

    missing_web = 0
    for tid in ids:
        t = triples.get(tid)
        if not t:
            print(f"{tid}: NOT FOUND in any _triples.json")
            missing_web += 1
            continue
        key = (norm(t["subject"]), t["predicate"], norm(t["object"]))
        status = "OK " if key in keys else "GONE"
        if key not in keys:
            missing_web += 1
        print(f"{tid}: [{status}] {t['subject']} --{t['predicate']}--> {t['object']}")
        print(f"           web key: ({key[0]!r}, {key[1]!r}, {key[2]!r})")

    if missing_web:
        print(f"\n{missing_web} id(s) not present in current web edges "
              "(deduped away, edited, or self-loop filtered since the report).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
