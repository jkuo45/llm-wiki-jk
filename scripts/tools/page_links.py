#!/usr/bin/env python3
"""Normalize outbound links in the published web pages.

Articles are rendered inside the reader iframe (web/index.html
`#page-modal-frame`, no `sandbox`). A cross-origin link clicked there
navigates the *iframe*, and the target host refuses to be framed
(github.com and doi.org both send `X-Frame-Options: deny` /
`frame-ancestors 'none'`), so the click silently does nothing. Marking
those anchors `target="_blank"` opens a real top-level tab instead.

Same-origin links (`SITE_HOST`, default graph.johnnykuo.com) are
deliberately left alone: they are in-reader navigation, reconciled by
`matchFrameArticle()` / the `reader-navigate` postMessage in
web/components/reader.js. Giving them `_blank` would break it.

Only `<a>` opening tags are rewritten — `<link rel="canonical">` and
`hreflang` alternates match a naive href grep but must stay as written.

Modes:
  --check   report violations, exit 1 if any (lint / CI)
  --fix     rewrite in place (default)

Idempotent: `--fix` twice yields the same bytes.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

PAGES_ROOT = Path("web/public/pages")
SITE_HOST = "graph.johnnykuo.com"
TARGET_ATTRS = ' target="_blank" rel="noopener noreferrer"'

# A single <a ...> opening tag. The href value is captured so we can tell
# same-origin from cross-origin without re-parsing.
A_TAG = re.compile(r"<a\s[^>]*>", re.IGNORECASE | re.DOTALL)
HREF = re.compile(r"""href\s*=\s*(["'])(.*?)\1""", re.IGNORECASE | re.DOTALL)
HAS_TARGET = re.compile(r"""\btarget\s*=""", re.IGNORECASE)
HAS_REL = re.compile(r"""\brel\s*=""", re.IGNORECASE)


def is_cross_origin(href: str) -> bool:
    """True for an absolute http(s) href pointing off the site host."""
    low = href.strip().lower()
    if not (low.startswith("http://") or low.startswith("https://")):
        return False
    host = low.split("://", 1)[1].split("/", 1)[0].split("?", 1)[0]
    return host.split(":")[0] != SITE_HOST


def fix_tag(tag: str) -> str | None:
    """Return the rewritten opening tag, or None if already compliant."""
    if not is_cross_origin(HREF.search(tag).group(2)):
        return None
    if HAS_TARGET.search(tag):
        return None  # caller audits rel separately via --check
    # Insert before the closing '>' (or '/>' for a self-closing anchor).
    stripped = tag.rstrip()
    if stripped.endswith("/>"):
        return stripped[:-2].rstrip() + TARGET_ATTRS + "/>"
    return stripped[:-1].rstrip() + TARGET_ATTRS + ">"


def check_tag(tag: str, strict: bool) -> str | None:
    """Return a reason string when the anchor is non-compliant."""
    if not is_cross_origin(HREF.search(tag).group(2)):
        return None
    if not HAS_TARGET.search(tag):
        return "missing target=\"_blank\""
    # rel is a hardening nit, not the bug: hundreds of pre-existing anchors
    # carry target without it. Only enforced under --strict so `--check`
    # stays a usable regression guard for the target regression.
    if strict and not HAS_REL.search(tag):
        return "missing rel=noopener"
    return None


def process(path: Path, fix: bool, strict: bool) -> list[str]:
    """Rewrite or audit one file; return a list of problems found."""
    src = path.read_text(encoding="utf-8")
    problems: list[str] = []
    out: list[str] = []
    last = 0
    changed = False

    for m in A_TAG.finditer(src):
        tag = m.group(0)
        new = fix_tag(tag)
        if fix:
            if new is None:
                continue
            out.append(src[last:m.start()])
            out.append(new)
            last = m.end()
            changed = True
            continue
        reason = check_tag(tag, strict)
        if reason:
            line = src.count("\n", 0, m.start()) + 1
            problems.append(f"{path}:{line}: {reason} — {tag[:90]}")

    if fix and changed:
        out.append(src[last:])
        path.write_text("".join(out), encoding="utf-8")
    return problems


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    mode = ap.add_mutually_exclusive_group()
    mode.add_argument("--check", action="store_true", help="report only, exit 1 on violations")
    mode.add_argument("--fix", action="store_true", help="rewrite in place (default)")
    ap.add_argument("--strict", action="store_true", help="also require rel=noopener on targeted links")
    ap.add_argument("--root", type=Path, default=PAGES_ROOT, help=f"pages dir (default {PAGES_ROOT})")
    args = ap.parse_args()

    fix = not args.check
    files = sorted(args.root.rglob("*.html"))
    problems: list[str] = []
    for f in files:
        problems.extend(process(f, fix, args.strict))

    if args.check:
        for p in problems:
            print(p)
        print(f"\n{len(problems)} outbound link(s) missing target/rel across {len(files)} page(s).")
        return 1 if problems else 0

    print(f"scanned {len(files)} page(s) under {args.root}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
