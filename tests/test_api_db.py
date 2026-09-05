"""api.db — PostgREST request construction, response handling, URL normalization."""

import importlib
import json

import httpx
import pytest

import api.gateways.db as db


@pytest.fixture
def mock_client(monkeypatch):
    """Patch db._CLIENT with an httpx.MockTransport-backed client.

    Pass a request handler and get a client whose requests never leave the
    process."""

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
            "entities",
            columns="norm_id,label",
            eq={"topic_slug": "sirtuins"},
            order="label.desc",
            limit=5,
            or_filter="(id.eq.sirt1,id.eq.sirt3)",
        )
        assert rows == [{"id": "1"}]
        p = seen["url"]
        assert "/rest/v1/entities" in p
        assert "select=norm_id%2Clabel" in p
        assert "topic_slug=eq.sirtuins" in p
        assert "order=label.desc" in p
        assert "limit=5" in p
        assert "or=%28id.eq.sirt1%2Cid.eq.sirt3%29" in p

    @pytest.mark.asyncio
    async def test_insert_sends_representation_prefer(self, mock_client):
        seen = {}

        def handler(request: httpx.Request) -> httpx.Response:
            seen["prefer"] = request.headers.get("prefer")
            seen["body"] = json.loads(request.content)
            return httpx.Response(201, json=[{"id": "new"}])

        mock_client(handler)
        out = await db.insert("content_flags", {"content_type": "article", "content_id": "a"})
        assert out == [{"id": "new"}]
        assert seen["prefer"] == "return=representation"
        assert seen["body"] == {"content_type": "article", "content_id": "a"}

    @pytest.mark.asyncio
    async def test_upsert_merge_and_ignore(self, mock_client):
        seen = {}

        def handler(request: httpx.Request) -> httpx.Response:
            seen["prefer"] = request.headers.get("prefer")
            seen["on_conflict"] = request.url.params.get("on_conflict")
            return httpx.Response(200, json=[{"id": "r"}])

        mock_client(handler)
        await db.upsert("content_flags", [{"content_type": "article", "content_id": "a"}],
                        on_conflict="content_type,content_id")
        assert "resolution=merge-duplicates" in seen["prefer"]
        assert seen["on_conflict"] == "content_type,content_id"

        await db.upsert("content_flags", [{"content_type": "article", "content_id": "a"}],
                        on_conflict="x", ignore_duplicates=True)
        assert "resolution=ignore-duplicates" in seen["prefer"]

    @pytest.mark.asyncio
    async def test_delete_returns_count(self, mock_client):
        mock_client(lambda r: httpx.Response(200, json=[{"id": "1"}, {"id": "2"}]))
        assert await db.delete("content_flags", eq={"content_type": "article"}) == 2


class TestErrors:
    @pytest.mark.asyncio
    async def test_error_raises_dberror(self, mock_client):
        mock_client(lambda r: httpx.Response(404, json={"message": "nope"}))
        with pytest.raises(db.DBError):
            await db.select("content_flags")
