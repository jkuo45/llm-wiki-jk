"""api.auth — Supabase token verification, user-id resolution, request gate.

The Supabase HTTP calls are replaced with httpx.MockTransport clients; module
caches are reset per test so network-call counts are exact.
"""

import httpx
import pytest
from starlette.requests import Request

import api.gateways.auth as auth


def make_request(headers: dict[str, str] | None = None, method="POST",
                 path="/v1/notes/upload") -> Request:
    raw = [[k.lower().encode(), v.encode()] for k, v in (headers or {}).items()]
    return Request(scope={
        "type": "http", "method": method, "path": path,
        "headers": raw, "query_string": b"",
        "scheme": "http", "server": ("testserver", 80),
    })


def supabase_handler(user_status=200, user_body=None, profile_status=200,
                     profile_body=None, calls=None):
    def handler(request: httpx.Request) -> httpx.Response:
        if calls is not None:
            calls.append(str(request.url))
        if "/auth/v1/user" in str(request.url):
            return httpx.Response(user_status, json=user_body or {"id": "uid-1"})
        if "/rest/v1/profiles" in str(request.url):
            return httpx.Response(profile_status,
                                  json=profile_body if profile_body is not None
                                  else [{"role": "super_admin"}])
        return httpx.Response(404)

    return handler


@pytest.fixture
def auth_env(monkeypatch):
    """Patch the Supabase endpoints and swap in a fresh mock client."""
    monkeypatch.setattr(auth, "SUPABASE_URL", "https://sb.test")
    monkeypatch.setattr(auth, "SUPABASE_ANON_KEY", "anon")
    monkeypatch.setattr(auth, "_cache", {})
    monkeypatch.setattr(auth, "_uid_cache", {})
    return monkeypatch


def patch_client(monkeypatch, handler):
    client = httpx.AsyncClient(transport=httpx.MockTransport(handler))
    monkeypatch.setattr(auth, "_client", client)
    return client


class TestBearerToken:
    def test_extracts_token(self):
        req = make_request({"Authorization": "Bearer tok-123"})
        assert auth.bearer_token(req) == "tok-123"

    def test_case_insensitive_scheme(self):
        req = make_request({"authorization": "bearer  spaced  "})
        assert auth.bearer_token(req) == "spaced"

    def test_missing_or_malformed(self):
        assert auth.bearer_token(make_request()) is None
        assert auth.bearer_token(make_request({"Authorization": "Basic abc"})) is None
        assert auth.bearer_token(make_request({"Authorization": "Bearer "})) is None


class TestIsSuperAdmin:
    @pytest.mark.asyncio
    async def test_happy_path(self, auth_env, monkeypatch):
        calls = []
        patch_client(monkeypatch, supabase_handler(calls=calls))
        assert await auth.is_super_admin("tok") is True
        assert len(calls) == 2  # /auth/v1/user + /rest/v1/profiles
        assert calls[0].startswith("https://sb.test/auth/v1/user")

    @pytest.mark.asyncio
    async def test_wrong_role_rejected(self, auth_env, monkeypatch):
        patch_client(monkeypatch, supabase_handler(profile_body=[{"role": "user"}]))
        assert await auth.is_super_admin("tok") is False

    @pytest.mark.asyncio
    async def test_empty_profile_rejected(self, auth_env, monkeypatch):
        patch_client(monkeypatch, supabase_handler(profile_body=[]))
        assert await auth.is_super_admin("tok") is False

    @pytest.mark.asyncio
    async def test_bad_user_token_rejected(self, auth_env, monkeypatch):
        patch_client(monkeypatch, supabase_handler(user_status=401))
        assert await auth.is_super_admin("tok") is False

    @pytest.mark.asyncio
    async def test_profile_error_rejected(self, auth_env, monkeypatch):
        patch_client(monkeypatch, supabase_handler(profile_status=403))
        assert await auth.is_super_admin("tok") is False

    @pytest.mark.asyncio
    async def test_network_error_rejected(self, auth_env, monkeypatch):
        def handler(request):
            raise httpx.ConnectError("down")

        patch_client(monkeypatch, handler)
        assert await auth.is_super_admin("tok") is False

    @pytest.mark.asyncio
    async def test_result_cached_for_ttl(self, auth_env, monkeypatch):
        calls = []
        patch_client(monkeypatch, supabase_handler(calls=calls))
        assert await auth.is_super_admin("tok") is True
        assert await auth.is_super_admin("tok") is True
        assert len(calls) == 2  # only the first call hits the network


class TestGetUserId:
    @pytest.mark.asyncio
    async def test_resolves_and_caches_uid(self, auth_env, monkeypatch):
        calls = []
        patch_client(monkeypatch, supabase_handler(calls=calls))
        req = make_request({"Authorization": "Bearer tok"})
        assert await auth.get_user_id(req) == "uid-1"
        assert await auth.get_user_id(req) == "uid-1"
        assert len(calls) == 1  # cached

    @pytest.mark.asyncio
    async def test_no_token_returns_none(self, auth_env):
        assert await auth.get_user_id(make_request()) is None

    @pytest.mark.asyncio
    async def test_failed_lookup_returns_none(self, auth_env, monkeypatch):
        patch_client(monkeypatch, supabase_handler(user_status=500))
        req = make_request({"Authorization": "Bearer tok"})
        assert await auth.get_user_id(req) is None


class TestAuthorizeRequest:
    @pytest.mark.asyncio
    async def test_disabled_auth_allows_everything(self, monkeypatch):
        monkeypatch.setattr(auth, "AUTH_ENABLED", False)
        assert await auth.authorize_request(
            make_request(method="POST")) is None

    @pytest.mark.asyncio
    async def test_gets_stay_open(self, auth_env, monkeypatch):
        monkeypatch.setattr(auth, "AUTH_ENABLED", True)
        assert await auth.authorize_request(make_request(method="GET")) is None

    @pytest.mark.asyncio
    async def test_health_stays_open(self, auth_env, monkeypatch):
        monkeypatch.setattr(auth, "AUTH_ENABLED", True)
        req = make_request(method="POST", path="/v1/health")
        assert await auth.authorize_request(req) is None

    @pytest.mark.asyncio
    async def test_missing_token_401(self, auth_env, monkeypatch):
        monkeypatch.setattr(auth, "AUTH_ENABLED", True)
        denial = await auth.authorize_request(make_request())
        assert denial is not None and denial.status_code == 401

    @pytest.mark.asyncio
    async def test_non_admin_403(self, auth_env, monkeypatch):
        monkeypatch.setattr(auth, "AUTH_ENABLED", True)
        monkeypatch.setattr(auth, "SUPABASE_URL", "https://sb.test")
        patch_client(monkeypatch, supabase_handler(profile_body=[{"role": "user"}]))
        req = make_request({"Authorization": "Bearer tok"})
        denial = await auth.authorize_request(req)
        assert denial is not None and denial.status_code == 403

    @pytest.mark.asyncio
    async def test_admin_allowed(self, auth_env, monkeypatch):
        monkeypatch.setattr(auth, "AUTH_ENABLED", True)
        patch_client(monkeypatch, supabase_handler())
        req = make_request({"Authorization": "Bearer tok"})
        assert await auth.authorize_request(req) is None


class TestClientLifecycle:
    @pytest.mark.asyncio
    async def test_close_client(self, auth_env, monkeypatch):
        patch_client(monkeypatch, supabase_handler())
        client = await auth._get_client()
        await auth.close_client()
        assert auth._client is None
        assert client.is_closed

    @pytest.mark.asyncio
    async def test_get_client_reuses_instance(self, auth_env, monkeypatch):
        patch_client(monkeypatch, supabase_handler())
        first = await auth._get_client()
        assert await auth._get_client() is first
