"""api.flags — DB-backed curation flag read/write + validation + auth."""

import pytest

import api.flags as flags
from tests.conftest import USER_A


class TestGetFlags:
    def test_empty_flags(self, client):
        r = client.get("/v1/flags")
        assert r.status_code == 200
        body = r.json()
        assert body["flags"] == {}
        assert "updated_at" in body and "generated" in body

    def test_cache_header(self, client):
        r = client.get("/v1/flags")
        assert r.headers["cache-control"] == "public, max-age=60"

    def test_db_unavailable_returns_503(self, client, monkeypatch):
        monkeypatch.setattr(flags, "DB_ENABLED", False)
        assert client.get("/v1/flags").status_code == 503

    def test_only_set_flags_appear(self, client, fake_db):
        """Unset (None) flags are omitted so consumers fall back to static."""
        fake_db.seed("content_flags", [
            {"content_type": "article", "content_id": "a",
             "starred": True, "active": None, "updated_by": USER_A,
             "updated_at": "2026-08-28T10:00:00+00:00"},
            {"content_type": "task_output", "content_id": "t.md",
             "starred": False, "active": False, "updated_by": USER_A,
             "updated_at": "2026-08-28T09:00:00+00:00"},
        ])
        body = client.get("/v1/flags").json()
        assert body["flags"]["article"] == {"a": {"starred": True}}
        assert body["flags"]["task_output"] == {"t.md": {"starred": False, "active": False}}
        assert body["updated_at"] == "2026-08-28T10:00:00+00:00"


class TestSetFlags:
    def test_upsert_requires_signin(self, client, monkeypatch):
        """Signed-in uid absent -> 401 (flags never falls back open)."""

        async def no_user(request):
            return None

        monkeypatch.setattr(flags, "get_user_id", no_user)
        r = client.post("/v1/flags", json={"items": [
            {"content_type": "article", "content_id": "x", "starred": True}]})
        assert r.status_code == 401

    def test_upsert_and_read_back(self, client, fake_db):
        r = client.post("/v1/flags", json={"items": [
            {"content_type": "article", "content_id": "sirtuin-pleiotropy", "starred": True},
            {"content_type": "wiki_note", "content_id": "sirt1",
             "starred": True, "active": False},
        ]})
        assert r.status_code == 200, r.text
        f = r.json()["flags"]
        assert f["article"]["sirtuin-pleiotropy"] == {"starred": True}
        assert f["wiki_note"]["sirt1"] == {"starred": True, "active": False}
        row = fake_db.all("content_flags")[0]
        assert row["updated_by"] == USER_A
        assert row["updated_at"]

    def test_partial_update_preserves_other_flag(self, client, fake_db):
        """A row with both flags set keeps `active` when only `starred` changes."""
        client.post("/v1/flags", json={"items": [
            {"content_type": "article", "content_id": "x",
             "starred": True, "active": False}]})
        r = client.post("/v1/flags", json={"items": [
            {"content_type": "article", "content_id": "x", "starred": False}]})
        assert r.status_code == 200
        row = fake_db.all("content_flags")[0]
        assert row["starred"] is False
        assert row["active"] is False  # untouched by the partial update

    def test_unset_flag_only_creates_row_without_flags(self, client, fake_db):
        """Row with no flags set is invisible in the overlay (pure static)."""
        client.post("/v1/flags", json={"items": [
            {"content_type": "article", "content_id": "x", "starred": True}]})
        # Toggle both off — row still exists, overlay omits it.
        r = client.post("/v1/flags", json={"items": [
            {"content_type": "article", "content_id": "x",
             "starred": False, "active": None}]})
        # active=None is omitted from the payload entirely by pydantic default
        assert r.status_code == 200
        assert r.json()["flags"]["article"] == {"x": {"starred": False}}

    def test_invalid_content_type_rejected(self, client):
        r = client.post("/v1/flags", json={"items": [
            {"content_type": "nope", "content_id": "x", "starred": True}]})
        assert r.status_code == 400

    def test_blank_content_id_rejected(self, client):
        r = client.post("/v1/flags", json={"items": [
            {"content_type": "article", "content_id": "   ", "starred": True}]})
        assert r.status_code == 400

    def test_no_flags_set_rejected(self, client):
        r = client.post("/v1/flags", json={"items": [
            {"content_type": "article", "content_id": "x"}]})
        assert r.status_code == 400

    def test_db_unavailable_returns_503(self, client, monkeypatch):
        monkeypatch.setattr(flags, "DB_ENABLED", False)
        r = client.post("/v1/flags", json={"items": [
            {"content_type": "article", "content_id": "x", "starred": True}]})
        assert r.status_code == 503

    def test_too_many_items_rejected(self, client):
        r = client.post("/v1/flags", json={"items": [
            {"content_type": "article", "content_id": f"x{i}", "starred": True}
            for i in range(flags.MAX_ITEMS + 1)]})
        assert r.status_code == 422
