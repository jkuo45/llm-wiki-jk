"""api.db — PostgREST request construction, response handling, URL normalization."""

import importlib
import json

import httpx
import pytest

import api.db as db


@pytest.fixture
def mock_client(monkeypatch):
    """Patch db._CLIENT with an httpx.MockTransport-backed client.

    Mirrors test_api_sources.py's patch_transport: pass a request handler,
    get a client whose requests never leave the process."""

    def _apply(handler, base_url="https://x/rest/v1"):
        client = httpx.AsyncClient(base_url=base_url,
                                   transport=httpx.MockTransport(handler))
        monkeypatch.setattr(db, "_CLIENT", client)
        return client

    return _apply


class TestUrlConfig:
    def test_url_normalization(self, monkeypatch):
        """SUPABASE_URL may be given with or without the /rest/v1 suffix."""
        monkeypatch.setenv("SUPABASE_URL", "https://x.supabase.co/rest/v1")
        monkeypatch.setenv("SUPABASE_SERVICE_KEY", "k")
        reloaded = importlib.reload(db)
        assert reloaded.DB_ENABLED is True
        assert reloaded.SUPABASE_URL == "https://x.supabase.co"

        monkeypatch.setenv("SUPABASE_URL", "https://y.supabase.co")
        reloaded = importlib.reload(db)
        assert reloaded.SUPABASE_URL == "https://y.supabase.co"
        importlib.reload(db)  # restore module state for other tests

    def test_db_disabled_without_credentials(self, monkeypatch):
        monkeypatch.delenv("SUPABASE_URL", raising=False)
        monkeypatch.delenv("SUPABASE_SERVICE_KEY", raising=False)
        reloaded = importlib.reload(db)
        assert reloaded.DB_ENABLED is False
        importlib.reload(db)  # restore module state for other tests


class TestRequests:
    @pytest.mark.asyncio
    async def test_select_builds_expected_request(self, monkeypatch, mock_client):
        seen = {}

        def handler(request: httpx.Request) -> httpx.Response:
            seen["url"] = str(request.url)
            return httpx.Response(200, json=[{"id": "1"}])

        monkeypatch.setattr(db, "SUPABASE_URL", "https://x.supabase.co")
        monkeypatch.setattr(db, "SERVICE_KEY", "svc-key")
        mock_client(handler)

        rows = await db.select(
            "user_graphs",
            columns="id,name",
            eq={"owner": "u1"},
            order="created_at.desc",
            limit=5,
            or_filter="(owner.eq.u1,visibility.eq.public)",
        )
        assert rows == [{"id": "1"}]
        p = seen["url"]
        assert "/rest/v1/user_graphs" in p
        assert "select=id%2Cname" in p
        assert "owner=eq.u1" in p
        assert "order=created_at.desc" in p
        assert "limit=5" in p
        assert "or=%28owner.eq.u1%2Cvisibility.eq.public%29" in p

    @pytest.mark.asyncio
    async def test_insert_sends_representation_prefer(self, mock_client):
        seen = {}

        def handler(request: httpx.Request) -> httpx.Response:
            seen["prefer"] = request.headers.get("prefer")
            seen["body"] = json.loads(request.content)
            return httpx.Response(201, json=[{"id": "new"}])

        mock_client(handler)
        out = await db.insert("user_graphs", {"name": "g"})
        assert out == [{"id": "new"}]
        assert seen["prefer"] == "return=representation"
        assert seen["body"] == {"name": "g"}

    @pytest.mark.asyncio
    async def test_upsert_merge_and_ignore(self, mock_client):
        seen = {}

        def handler(request: httpx.Request) -> httpx.Response:
            seen["prefer"] = request.headers.get("prefer")
            seen["on_conflict"] = request.url.params.get("on_conflict")
            return httpx.Response(200, json=[{"id": "r"}])

        mock_client(handler)
        await db.upsert("source_records", [{"a": 1}],
                        on_conflict="source_id,external_id,kind")
        assert "resolution=merge-duplicates" in seen["prefer"]
        assert seen["on_conflict"] == "source_id,external_id,kind"

        await db.upsert("source_records", [{"a": 1}], on_conflict="x",
                        ignore_duplicates=True)
        assert "resolution=ignore-duplicates" in seen["prefer"]

    @pytest.mark.asyncio
    async def test_delete_returns_count(self, mock_client):
        mock_client(lambda r: httpx.Response(200, json=[{"id": "1"}, {"id": "2"}]))
        assert await db.delete("user_nodes", eq={"graph_id": "g"}) == 2


class TestErrors:
    @pytest.mark.asyncio
    async def test_error_raises_dberror(self, mock_client):
        mock_client(lambda r: httpx.Response(404, json={"message": "nope"}))
        with pytest.raises(db.DBError):
            await db.select("user_graphs")
