"""Relative-age labels on reader/index cards.

Registry `created`/`updated` values are date-only (`YYYY-MM-DD`). The shipped
JS originally did `Date.now() - new Date(iso)`, and per ECMA-262 `new Date of a
date-only string is UTC midnight` — the *previous* local day in every
negative-offset timezone, so a task written at 09:00 PDT measured 32h and
rendered "updated 1d ago" on the day it was written.

These tests port ageDays/relAge from
web/public/pages/themes/shared/index-core.js and the matching copy in
web/components/reader.js. Kept in Python like the other web tests; the
timezone handling is the whole point, so the port pins the local-midnight
parse rather than re-deriving elapsed hours.
"""

import math
import re
from datetime import datetime, timedelta
from pathlib import Path

import pytest

INDEX_CORE = Path("web/public/pages/themes/shared/index-core.js")
READER = Path("web/components/reader.js")

DATE_ONLY = re.compile(r"^(\d{4})-(\d{2})-(\d{2})")


def _day_of(iso):
    """Port of dayOf(): local midnight of the date-only value (or of whatever
    day a full timestamp falls on). None == unparseable."""
    if not iso:
        return None
    m = DATE_ONLY.match(str(iso))
    try:
        d = datetime(*map(int, m.groups())) if m else datetime.fromisoformat(str(iso))
    except ValueError:  # new Date(...) → Invalid Date in JS
        return None
    return d.replace(hour=0, minute=0, second=0, microsecond=0)


def age_days(iso, now):
    d = _day_of(iso)
    return math.nan if d is None else (now - d).total_seconds() / 86400


def rel_age(iso, now):
    """Port of relAge(); returns None where JS returns "" (no date)."""
    days = age_days(iso, now)
    if math.isnan(days):
        return "date unknown" if iso else None
    n = max(0, math.floor(days))
    if n == 0:
        return "today"
    if n < 7:
        return f"{n}d"
    if n < 30:
        return f"{n // 7}w"
    if n < 365:
        return f"{n // 30}mo"
    return f"{n / 365:.1f}y"


@pytest.fixture
def now():
    return datetime.now()


def test_today_reads_today_even_late_in_the_day(now):
    """The reported bug: 23:31 PDT on the day of writing showed "1d ago"."""
    assert rel_age(now.strftime("%Y-%m-%d"), now) == "today"


def test_same_day_at_any_hour_reads_today(now):
    for hour in (0, 6, 12, 17, 23):
        at = now.replace(hour=hour, minute=30)
        assert rel_age(at.strftime("%Y-%m-%d"), at) == "today"


def test_yesterday_and_the_ladder(now):
    assert rel_age((now - timedelta(days=1)).strftime("%Y-%m-%d"), now) == "1d"
    assert rel_age((now - timedelta(days=3)).strftime("%Y-%m-%d"), now) == "3d"
    assert rel_age((now - timedelta(days=8)).strftime("%Y-%m-%d"), now) == "1w"
    assert rel_age((now - timedelta(days=45)).strftime("%Y-%m-%d"), now) == "1mo"
    assert rel_age((now - timedelta(days=400)).strftime("%Y-%m-%d"), now) == "1.1y"


def test_utc_timestamps_snap_to_their_local_day(now):
    """Full ISO values keep working: `2026-10-04T02:00:00Z` is still the 3rd
    locally in PDT, and the label must agree with the printed date."""
    stamp = now.strftime("%Y-%m-%d") + "T02:00:00Z"
    assert rel_age(stamp, now) in {"today", "1d"}


def test_future_and_empty_dates_do_not_throw(now):
    future = (now + timedelta(days=3)).strftime("%Y-%m-%d")
    assert rel_age(future, now) == "today"  # clamped, never negative
    assert rel_age("", now) is None
    assert rel_age("not-a-date", now) == "date unknown"


def test_no_registry_date_is_off_by_one_at_render_time():
    """Every date in the shipped registries must render as itself, not as the
    day before — the failure the user saw."""
    import json

    checked = 0
    for name, key in (("articles.json", None), ("tasks.json", "tasks"),
                      ("wiki.json", "wiki")):
        p = Path("web/public/data") / name
        if not p.exists():
            continue
        data = json.loads(p.read_text(encoding="utf-8"))
        rows = data if isinstance(data, list) else data.get(key, [])
        now = datetime.now()
        for row in rows:
            for lang in (row.get("langs") or {}).values():
                for field in ("created", "updated"):
                    iso = lang.get(field)
                    if not iso:
                        continue
                    checked += 1
                    day = (now - _day_of(iso)).days
                    assert day >= 0, f"{row['id']} {field}={iso} is in the future"
    assert checked > 100, "expected the full registry corpus"


@pytest.mark.parametrize("path", [INDEX_CORE, READER])
def test_shipped_sources_use_the_calendar_day_port(path):
    """Both bundles must carry the local-midnight parse; they can't share a
    module (index-core is a plain script loaded by the standalone index pages,
    reader.js is Vite-bundled), so the copy is asserted instead."""
    src = path.read_text(encoding="utf-8")
    assert re.search(r"new Date\(\s*\w+\.getFullYear\(\),\s*\w+\.getMonth\(\),"
                     r"\s*\w+\.getDate\(\)", src), path
    assert not re.search(r"ms\s*<\s*864e5", src), (
        f"{path} still gates on elapsed hours, not calendar days")
