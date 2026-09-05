"""Shared fixtures for the api/ test suite.

Runs fully offline: the PostgREST layer (api/gateways/db.py) is replaced by an
in-memory FakeDB with the same function signatures and query semantics the
routers actually use (eq / or / order / limit filters plus embedded resources
such as `entity:entities(...)`).

Per-router patching: the routers import db/auth functions into their own
namespaces (`from ..gateways.db import select, ...`), so tests patch those
module attributes directly — see patch_db() and make_client().
"""

import sys
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO_ROOT))

from fastapi.testclient import TestClient  # noqa: E402

import api.routers.flags as flags_mod  # noqa: E402

USER_A = "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa"
USER_B = "bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb"

# Tables whose insert() auto-generates an id / timestamps in the fake.
_TABLES_WITH_IDS = set()
_EMBED_RE = r"(\w+):(\w+)\("

# FK cascade emulation: (parent_table, parent_col) -> [(child_table, child_col)]
_CASCADES: dict[tuple[str, str], list[tuple[str, str]]] = {}


class FakeDBError(RuntimeError):
    """Mirrors api.db.DBError so routers' except-clauses fire."""


class FakeDB:
    """In-memory stand-in for the PostgREST-backed helpers in api/db.py."""

    def __init__(self):
        self.tables: dict[str, list[dict]] = {}
        self.fail_next: tuple[str, str] | None = None  # (op, table) one-shot

    # -- seeding ----------------------------------------------------------

    def seed(self, table: str, rows: list[dict]) -> None:
        for row in rows:
            self.tables.setdefault(table, []).append(dict(row))

    def all(self, table: str) -> list[dict]:
        return self.tables.get(table, [])

    # -- filtering --------------------------------------------------------

    @staticmethod
    def _eq_match(row: dict, eq: dict | None) -> bool:
        return all(str(row.get(k)) == str(v) for k, v in (eq or {}).items())

    @staticmethod
    def _or_match(row: dict, or_filter: str | None) -> bool:
        """Parse the single parenthesised or=(a.eq.x,b.eq.y) form we use."""
        if not or_filter:
            return True
        inner = or_filter.strip()
        if inner.startswith("(") and inner.endswith(")"):
            inner = inner[1:-1]
        for clause in inner.split(","):
            col, op, value = clause.split(".", 2)
            if op == "eq" and str(row.get(col)) == value:
                return True
        return False

    def _embed(self, rows: list[dict], columns: str) -> list[dict]:
        import re

        for prefix, target in re.findall(_EMBED_RE, columns):
            fk = f"{prefix}_id"
            pk = "norm_id" if target == "entities" else "id"
            for row in rows:
                hit = next(
                    (t for t in self.all(target) if t.get(pk) == row.get(fk)),
                    None,
                )
                row[prefix] = dict(hit) if hit else None
        return rows

    def _check_fail(self, op: str, table: str) -> None:
        if self.fail_next == (op, table):
            self.fail_next = None
            raise FakeDBError(f"injected failure: {op} {table}")

    # -- api/db.py-shaped operations ---------------------------------------

    async def select(self, table: str, *, columns: str = "*", eq: dict | None = None,
                     order: str | None = None, limit: int | None = None,
                     or_filter: str | None = None) -> list[dict]:
        self._check_fail("select", table)
        rows = [dict(r) for r in self.all(table)
                if self._eq_match(r, eq) and self._or_match(r, or_filter)]
        if order:
            key, _, direction = order.partition(".")
            rows.sort(key=lambda r: str(r.get(key, "")), reverse=direction == "desc")
        if limit is not None:
            rows = rows[:limit]
        return self._embed(rows, columns)

    async def select_one(self, table: str, *, columns: str = "*",
                         eq: dict | None = None) -> dict | None:
        rows = await self.select(table, columns=columns, eq=eq, limit=1)
        return rows[0] if rows else None

    async def insert(self, table: str, row: dict | list[dict]) -> list[dict]:
        self._check_fail("insert", table)
        rows = [dict(r) for r in (row if isinstance(row, list) else [row])]
        out = []
        for r in rows:
            self.tables.setdefault(table, []).append(r)
            out.append(dict(r))
        return out

    async def upsert(self, table: str, rows: dict | list[dict], on_conflict: str,
                     *, ignore_duplicates: bool = False) -> list[dict]:
        self._check_fail("upsert", table)
        rows = [dict(r) for r in (rows if isinstance(rows, list) else [rows])]
        keys = on_conflict.split(",")
        out = []
        for r in rows:
            existing = next(
                (t for t in self.all(table)
                 if all(str(t.get(k)) == str(r.get(k)) for k in keys)),
                None,
            )
            if existing:
                if not ignore_duplicates:
                    existing.update(r)
                    out.append(dict(existing))
                continue
            out.extend(await self.insert(table, r))
        return out

    async def update(self, table: str, row: dict, eq: dict) -> list[dict]:
        self._check_fail("update", table)
        out = []
        for t in self.all(table):
            if self._eq_match(t, eq):
                t.update(row)
                out.append(dict(t))
        return out

    async def delete(self, table: str, eq: dict) -> int:
        self._check_fail("delete", table)
        before = len(self.all(table))
        removed = [r for r in self.all(table) if self._eq_match(r, eq)]
        self.tables[table] = [r for r in self.all(table)
                              if not self._eq_match(r, eq)]
        # emulate ON DELETE CASCADE
        for child_table, child_col in _CASCADES.get((table, next(iter(eq), "id")), []):
            if next(iter(eq), None) != "id":
                continue
            gone = {r.get("id") for r in removed}
            self.tables[child_table] = [
                r for r in self.all(child_table) if r.get(child_col) not in gone
            ]
        return before - len(self.tables[table])


@pytest.fixture
def fake_db() -> FakeDB:
    return FakeDB()


@pytest.fixture
def patch_db(monkeypatch, fake_db):
    """Wire fake_db into the router modules (they re-import db names)."""

    def _apply(*modules) -> None:
        db = fake_db
        for m in modules:
            for name in ("select", "select_one", "insert", "upsert", "update", "delete"):
                if hasattr(m, name):
                    monkeypatch.setattr(m, name, getattr(db, name))
            monkeypatch.setattr(m, "DBError", FakeDBError)
            monkeypatch.setattr(m, "DB_ENABLED", True)

    return _apply


@pytest.fixture
def make_client(monkeypatch, patch_db, fake_db):
    """TestClient factory; every request passes origin/auth gates offline."""

    def _make(uid: str = USER_A) -> TestClient:
        patch_db(flags_mod)

        # Offline tests would trip the in-process per-IP rate limiter across
        # dozens of requests; disable it for the test app instance.
        import api.main as main_mod
        monkeypatch.setattr(main_mod, "_limit_for", lambda path: None)
        main_mod._RATE_STATE.clear()

        async def fake_user(request):
            return uid

        monkeypatch.setattr(flags_mod, "get_user_id", fake_user)
        client = TestClient(main_mod.app)
        client.headers.update({"Origin": "http://localhost:5173"})
        return client

    return _make


@pytest.fixture
def client(make_client) -> TestClient:
    return make_client(USER_A)
