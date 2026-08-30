"""api.assumptions — per-user Assumptions Lab selections (/v1/assumptions).

PARKED FEATURE: the router is intentionally NOT registered in api/main.py
until the DB layer is set up (see the parking note there). These tests mount
the router on a standalone FastAPI app so the parked code stays covered and
ready to enable. Uses the real web/public/data/assumptions.json (scenario
`triples-review-2026-08-21` / conflict `T1-1` / option `B`).
"""

import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

import api.assumptions as assumptions
from tests.conftest import USER_A, USER_B

SCENARIO = "triples-review-2026-08-21"
CONFLICT = "T1-1"
OPTION = "B"


@pytest.fixture
def api_client(patch_db, monkeypatch):
    """Standalone app carrying only the parked assumptions router, wired to
    the shared FakeDB + a signed-in USER_A (mirrors conftest's make_client,
    without main.py — the router is not registered there while parked)."""
    patch_db(assumptions)

    async def fake_user(request):
        return USER_A

    monkeypatch.setattr(assumptions, "get_user_id", fake_user)
    app = FastAPI()
    app.include_router(assumptions.router)
    return TestClient(app)


@pytest.fixture
def canonical_owner(monkeypatch):
    monkeypatch.setattr(assumptions, "_canonical_owner", lambda: USER_A)
    return USER_A


class TestCanonical:
    def test_empty_when_no_owner(self, api_client, monkeypatch):
        monkeypatch.setattr(assumptions, "_canonical_owner", lambda: "")
        body = api_client.get("/v1/assumptions").json()
        assert body == {"selections": {}, "updated_at": "", "canonical": False}

    def test_canonical_rows_are_public(self, api_client, fake_db, canonical_owner):
        fake_db.seed("assumption_selections", [
            {"owner": USER_A, "scenario_id": SCENARIO, "conflict_id": CONFLICT,
             "selected_key": OPTION,
             "added_edges": [], "removed_edges": [["adrenochrome", "is_a", "aminochrome"]],
             "source_hash": "abc123", "updated_at": "2026-08-30T10:00:00+00:00"},
            {"owner": USER_B, "scenario_id": SCENARIO, "conflict_id": CONFLICT,
             "selected_key": "A", "added_edges": [], "removed_edges": [],
             "updated_at": "2026-08-30T09:00:00+00:00"},
        ])
        r = api_client.get("/v1/assumptions")
        assert r.status_code == 200
        assert r.headers["cache-control"] == "public, max-age=60"
        body = r.json()
        assert body["canonical"] is True
        sel = body["selections"][SCENARIO][CONFLICT]
        assert sel["key"] == OPTION
        assert sel["removedEdges"] == [["adrenochrome", "is_a", "aminochrome"]]
        assert USER_B not in str(body)  # only the canonical owner's rows leak out

    def test_db_unavailable_returns_503(self, api_client, monkeypatch):
        monkeypatch.setattr(assumptions, "DB_ENABLED", False)
        assert api_client.get("/v1/assumptions").status_code == 503

    def test_table_missing_degrades_to_empty(self, api_client, fake_db, canonical_owner):
        """Feature parked (SQL not applied): select fails -> EMPTY payload, 200."""
        fake_db.fail_next = ("select", "assumption_selections")
        r = api_client.get("/v1/assumptions")
        assert r.status_code == 200
        assert r.json() == {"selections": {}, "updated_at": "", "canonical": False}


class TestMine:
    def test_requires_signin(self, api_client, monkeypatch):
        async def no_user(request):
            return None
        monkeypatch.setattr(assumptions, "get_user_id", no_user)
        assert api_client.get("/v1/assumptions/mine").status_code == 401
        assert api_client.put("/v1/assumptions/mine", json={
            "scenario_id": SCENARIO, "conflict_id": CONFLICT, "selected_key": OPTION,
        }).status_code == 401

    def test_upsert_resolves_edges_server_side(self, api_client, fake_db):
        r = api_client.put("/v1/assumptions/mine", json={
            "scenario_id": SCENARIO, "conflict_id": CONFLICT, "selected_key": OPTION,
        })
        assert r.status_code == 200, r.text
        body = r.json()
        assert body["saved"] is True
        assert body["removed_edges"] == [["adrenochrome", "is_a", "aminochrome"]]
        assert body["added_edges"] == []
        assert body["source_hash"]  # pinned for drift detection
        row = fake_db.all("assumption_selections")[0]
        assert row["owner"] == USER_A

    def test_upsert_rejects_unknown_option_key(self, api_client, fake_db):
        r = api_client.put("/v1/assumptions/mine", json={
            "scenario_id": SCENARIO, "conflict_id": CONFLICT, "selected_key": "Z",
        })
        assert r.status_code == 400
        assert fake_db.all("assumption_selections") == []

    def test_upsert_resolves_add_edges(self, api_client, fake_db):
        # T3-3b option A adds mitohormesis is_mediated_by sirtuins
        r = api_client.put("/v1/assumptions/mine", json={
            "scenario_id": SCENARIO, "conflict_id": "T3-3b", "selected_key": "A",
        })
        assert r.status_code == 200, r.text
        body = r.json()
        assert body["added_edges"] == [{
            "from": "mitohormesis", "label": "is_mediated_by", "to": "sirtuins",
            "confidence_score": 0.8,
            "context": body["added_edges"][0]["context"],
            "context_zh_TW": body["added_edges"][0]["context_zh_TW"],
        }]

    def test_unknown_scenario_404(self, api_client):
        r = api_client.put("/v1/assumptions/mine", json={
            "scenario_id": "nope", "conflict_id": "x", "selected_key": "A"})
        assert r.status_code == 404

    def test_base_key_deletes_row(self, api_client, fake_db):
        api_client.put("/v1/assumptions/mine", json={
            "scenario_id": SCENARIO, "conflict_id": CONFLICT, "selected_key": OPTION})
        assert len(fake_db.all("assumption_selections")) == 1
        r = api_client.put("/v1/assumptions/mine", json={
            "scenario_id": SCENARIO, "conflict_id": CONFLICT, "selected_key": "base"})
        assert r.status_code == 200
        assert r.json()["deleted"] is True
        assert fake_db.all("assumption_selections") == []

    def test_mine_returns_own_rows_only(self, api_client, fake_db):
        fake_db.seed("assumption_selections", [
            {"owner": USER_B, "scenario_id": SCENARIO, "conflict_id": CONFLICT,
             "selected_key": "A", "added_edges": [], "removed_edges": [],
             "updated_at": "2026-08-30T09:00:00+00:00"},
        ])
        body = api_client.get("/v1/assumptions/mine").json()
        assert body["selections"] == {}

    def test_upsert_then_mine_roundtrip(self, api_client):
        api_client.put("/v1/assumptions/mine", json={
            "scenario_id": SCENARIO, "conflict_id": CONFLICT, "selected_key": OPTION})
        body = api_client.get("/v1/assumptions/mine").json()
        sel = body["selections"][SCENARIO][CONFLICT]
        assert sel["key"] == OPTION
        assert sel["sourceHash"]

    def test_owner_scoping_on_upsert(self, api_client, fake_db, monkeypatch):
        """Two users can hold different stances on the same conflict."""
        current = {"uid": USER_A}

        async def switch_user(request):
            return current["uid"]

        monkeypatch.setattr(assumptions, "get_user_id", switch_user)
        api_client.put("/v1/assumptions/mine", json={
            "scenario_id": SCENARIO, "conflict_id": CONFLICT, "selected_key": "A"})
        current["uid"] = USER_B
        api_client.put("/v1/assumptions/mine", json={
            "scenario_id": SCENARIO, "conflict_id": CONFLICT, "selected_key": OPTION})
        rows = fake_db.all("assumption_selections")
        assert {(r["owner"], r["selected_key"]) for r in rows} == {
            (USER_A, "A"), (USER_B, OPTION),
        }
        current["uid"] = USER_A
        a = api_client.get("/v1/assumptions/mine").json()["selections"][SCENARIO][CONFLICT]
        assert a["key"] == "A"
