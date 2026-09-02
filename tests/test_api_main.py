"""api.main — middleware gates, intent routing, SSE streaming, health."""

import json
import time

import pytest
from networkx.readwrite import json_graph

import api.domain.graph_ops as go
import api.main as main_mod
import api.domain.wiki as wiki
from api.routers import prompts as prompts_mod
from test_api_graph_ops import graph_doc


@pytest.fixture
def api_env(tmp_path, monkeypatch, client):
    """Test client against a synthetic graph with auth gate bypassed."""
    G = json_graph.node_link_graph(graph_doc(), edges="links")
    monkeypatch.setattr(go, "_G", G)
    monkeypatch.setattr(go, "_MATCHER", None)
    monkeypatch.setattr(go, "_NAME_TO_NODE", None)
    monkeypatch.setattr(go, "_METRICS_CACHE", None)
    monkeypatch.setattr(go, "GRAPH_PATH", tmp_path / "graph.json")

    (tmp_path / "notes").mkdir()
    (tmp_path / "tasks").mkdir()
    monkeypatch.setattr(wiki, "WIKI_ROOT", tmp_path / "notes")
    monkeypatch.setattr(wiki, "TASKS_ROOT", tmp_path / "tasks")
    monkeypatch.setattr(wiki, "_WIKI_INDEX", None)
    monkeypatch.setattr(wiki, "_TASK_PATHS", None)

    async def allow(request):
        return None

    monkeypatch.setattr(main_mod, "authorize_request", allow)
    monkeypatch.setattr(prompts_mod, "_sessions", {})
    return client


def sse_events(response) -> list[dict]:
    out = []
    for frame in response.text.split("\n\n"):
        if frame.startswith("data: "):
            out.append(json.loads(frame[6:]))
    return out


class TestOriginGate:
    def test_missing_origin_and_referer_blocked(self, api_env):
        r = api_env.post("/v1/intent", json={"message": "hi"},
                         headers={"Origin": ""})
        assert r.status_code == 403
        assert "Origin not allowed" in r.json()["detail"]

    def test_local_origin_allowed(self, api_env):
        r = api_env.post("/v1/intent", json={"message": "hi"})
        assert r.status_code == 200  # conftest client sends localhost origin


class TestHealth:
    def test_ok(self, api_env, monkeypatch):
        async def healthy():
            return {"version": "1.18.5"}

        monkeypatch.setattr(prompts_mod, "opencode_health", healthy)
        body = api_env.get("/v1/health").json()
        assert body["status"] == "ok"
        assert body["nodes"] == 5 and body["edges"] == 4
        assert body["opencode"] == {"status": "ok", "version": "1.18.5"}

    def test_degraded_without_opencode(self, api_env, monkeypatch):
        async def down():
            raise prompts_mod.OpencodeUnavailable("connection refused")

        monkeypatch.setattr(prompts_mod, "opencode_health", down)
        body = api_env.get("/v1/health").json()
        assert body["status"] == "degraded"
        assert body["opencode"]["status"] == "unreachable"


class TestIntentEndpoint:
    def test_greeting_resolved_locally(self, api_env, monkeypatch):
        async def boom(*a, **k):
            raise AssertionError("classifier must not run for greetings")

        monkeypatch.setattr(prompts_mod, "parse_intent", boom)
        monkeypatch.setattr(prompts_mod, "create_session", boom)
        r = api_env.post("/v1/intent", json={"message": "Hi!"})
        body = r.json()
        assert body["intent"] == "greeting"
        assert body["lang"] == "en"

    def test_invalid_input_400(self, api_env):
        # whitespace-only input sanitizes to "" -> rejected before any session
        r = api_env.post("/v1/intent", json={"message": "   "})
        assert r.status_code == 400

    def test_plain_prompt_allocates_session(self, api_env, monkeypatch):
        async def fake_create(title="graph-prompt"):
            return "sess-1"

        monkeypatch.setattr(prompts_mod, "create_session", fake_create)
        r = api_env.post("/v1/intent",
                         json={"message": "What is autophagy?", "graphify": False})
        body = r.json()
        assert body["intent"] == "prompt"
        assert body["message"] == "What is autophagy?"
        assert body["session_id"] == "sess-1"

    def test_graphify_switch_forces_classifier(self, api_env, monkeypatch):
        seen = {}

        async def fake_intent(message, timeout=60.0):
            seen["message"] = message
            return {"intent": "explain", "node": "SIRT1"}

        monkeypatch.setattr(prompts_mod, "parse_intent", fake_intent)
        r = api_env.post("/v1/intent", json={
            "message": "Explain SIRT1", "graphify": True, "tags": ["NAD+"]})
        body = r.json()
        assert body["intent"] == "explain" and body["node"] == "SIRT1"
        # @-tags appended to the classifier prompt
        assert "Referenced nodes: NAD+" in seen["message"]

    def test_keyword_sniffing_when_switch_absent(self, api_env, monkeypatch):
        async def fake_intent(message, timeout=60.0):
            return {"intent": "query", "question": "key nodes"}

        monkeypatch.setattr(prompts_mod, "parse_intent", fake_intent)
        r = api_env.post("/v1/intent",
                         json={"message": "graphify query key nodes"})
        assert r.json()["intent"] == "query"

    def test_forced_graphify_unknown_falls_back_to_prompt(self, api_env,
                                                          monkeypatch):
        async def fake_intent(message, timeout=60.0):
            return {"intent": "unknown"}

        async def fake_create(title="graph-prompt"):
            return "sess-2"

        monkeypatch.setattr(prompts_mod, "parse_intent", fake_intent)
        monkeypatch.setattr(prompts_mod, "create_session", fake_create)
        r = api_env.post("/v1/intent",
                         json={"message": "graphify explain???", "graphify": True})
        body = r.json()
        assert body["intent"] == "prompt"
        assert body["session_id"] == "sess-2"

    def test_prompt_service_unavailable_503(self, api_env, monkeypatch):
        from api.gateways.llm import OpencodeUnavailable

        async def unavailable(title="graph-prompt"):
            raise OpencodeUnavailable("down")

        monkeypatch.setattr(prompts_mod, "create_session", unavailable)
        r = api_env.post("/v1/intent",
                         json={"message": "hello there", "graphify": False})
        assert r.status_code == 503


class TestSessionReset:
    def test_reset_drops_session(self, api_env, monkeypatch):
        deleted = []

        async def fake_delete(sid):
            deleted.append(sid)

        prompts_mod._sessions["sess-1"] = time.monotonic()
        monkeypatch.setattr(prompts_mod, "delete_session", fake_delete)
        # PromptRequest.message is required even for resets
        r = api_env.post("/v1/session/reset",
                         json={"message": "reset", "session_id": "sess-1"})
        assert r.json() == {"status": "ok"}
        assert deleted == ["sess-1"]
        assert "sess-1" not in prompts_mod._sessions

    def test_reset_unknown_session_is_noop(self, api_env):
        r = api_env.post("/v1/session/reset",
                         json={"message": "reset", "session_id": "ghost"})
        assert r.json() == {"status": "ok"}


class TestExecuteStream:
    def test_unknown_intent(self, api_env):
        r = api_env.post("/v1/execute/stream", json={"intent": "nonsense"})
        events = sse_events(r)
        assert events[0]["type"] == "text"
        assert "couldn't understand" in events[0]["text"]
        assert events[-1]["type"] == "done"

    def test_greeting_event(self, api_env):
        r = api_env.post("/v1/execute/stream", json={"intent": "greeting"})
        events = sse_events(r)
        assert "knowledge graph assistant" in events[0]["text"]
        assert events[-1]["type"] == "done"

    def test_explain_streams_single_event(self, api_env):
        r = api_env.post("/v1/execute/stream",
                         json={"intent": "explain", "node": "SIRT1"})
        events = sse_events(r)
        text_event = events[0]
        assert text_event["type"] == "text"
        assert "SIRT1" in text_event["text"]
        assert text_event["primary_node"] == "sirt1"
        assert ["sirt1", "nad"] in text_event["highlight_edges"]
        assert events[-1]["type"] == "done"

    def test_query_intent(self, api_env):
        r = api_env.post("/v1/execute/stream",
                         json={"intent": "query", "question": "NAD+ metabolism"})
        events = sse_events(r)
        assert events[0]["primary_node"] == "nad"
        assert "Found" in events[0]["text"]

    def test_path_intent_with_waypoints(self, api_env):
        r = api_env.post("/v1/execute/stream", json={
            "intent": "path", "nodes": ["Resveratrol", "NAD+"]})
        events = sse_events(r)
        assert "(2 hops across 1 leg)" in events[0]["text"]

    def test_analyze_includes_narrative_and_data(self, api_env, monkeypatch):
        async def narrative(data, request=""):
            return "Computed narrative."

        monkeypatch.setattr(prompts_mod, "write_analysis_narrative", narrative)
        r = api_env.post("/v1/execute/stream", json={
            "intent": "analyze", "nodes": ["NAD+", "SIRT1"],
            "analysis": "centrality"})
        events = sse_events(r)
        assert events[0]["text"] == "Computed narrative."
        assert events[0]["analysis_data"]["pairs"][0]["distance"] == 1
        assert events[-1]["type"] == "done"

    def test_prompt_streams_highlight_before_text(self, api_env, monkeypatch):
        seen = {}

        async def fake_session(title="graph-prompt"):
            return "sess-3"

        async def stream(message, session_id=None, **kw):
            seen["session_id"] = session_id
            seen["message"] = message
            yield {"type": "text", "text": "SIRT1 is a deacetylase"}
            yield {"type": "done", "elapsed": 1.0}

        monkeypatch.setattr(prompts_mod, "create_session", fake_session)
        monkeypatch.setattr(prompts_mod, "stream_answer", stream)
        r = api_env.post("/v1/execute/stream", json={
            "intent": "prompt", "message": "Tell me about SIRT1"})
        events = sse_events(r)
        # highlight is emitted just before done, after the full text buffer
        assert [e["type"] for e in events] == ["text", "highlight", "done"]
        assert "sirt1" in events[1]["highlight_nodes"]
        assert seen["session_id"] == "sess-3"
        assert "SIRT1 is a deacetylase" in events[0]["text"]

    def test_prompt_service_down_streams_error(self, api_env, monkeypatch):
        from api.gateways.llm import OpencodeUnavailable

        async def unavailable(title="graph-prompt"):
            raise OpencodeUnavailable("down")

        monkeypatch.setattr(prompts_mod, "create_session", unavailable)
        r = api_env.post("/v1/execute/stream",
                         json={"intent": "prompt", "message": "hello"})
        events = sse_events(r)
        assert events == [{"type": "error",
                           "text": "Prompt service unavailable."}]

    def test_sanitizes_payload_fields(self, api_env):
        r = api_env.post("/v1/execute/stream", json={
            "intent": "explain", "node": "SIRT1 <script>"})
        events = sse_events(r)
        # node name sanitized (tags stripped) before the graph op -> resolves
        assert events[0]["primary_node"] == "sirt1"

    def test_unhandled_error_becomes_json_500(self, api_env, monkeypatch):
        # the ServerErrorMiddleware handler only renders JSON in production
        # mode (raise_server_exceptions=False)
        from fastapi.testclient import TestClient

        def boom(name):
            raise RuntimeError("exploded")

        monkeypatch.setattr(prompts_mod, "graph_explain", boom)
        c = TestClient(main_mod.app, raise_server_exceptions=False)
        c.headers.update({"Origin": "http://localhost:5173"})
        r = c.post("/v1/execute/stream",
                   json={"intent": "explain", "node": "SIRT1"})
        assert r.status_code == 500
        assert "Internal server error (RuntimeError)" in r.json()["detail"]


class TestRateLimitHelpers:
    def test_limit_for_known_paths(self):
        assert main_mod._limit_for("/v1/notes/upload") == (8, 60)
        assert main_mod._limit_for("/v1/intent") == (40, 60)
        assert main_mod._limit_for("/v1/flags") == (60, 60)

    def test_limit_for_unlisted_path(self):
        assert main_mod._limit_for("/v1/health") is None
        assert main_mod._limit_for("/static/app.js") is None

    def test_client_ip_prefers_forwarded_header(self):
        from starlette.requests import Request

        from api.main import _client_ip

        def make(headers):
            raw = [[k.lower().encode(), v.encode()] for k, v in headers.items()]
            return Request(scope={"type": "http", "method": "GET",
                                  "path": "/", "headers": raw,
                                  "query_string": b"", "scheme": "http",
                                  "server": ("t", 80), "client": ("1.2.3.4", 5)})

        assert _client_ip(make({"x-forwarded-for": "9.9.9.9, 10.0.0.1"})) == "9.9.9.9"
        assert _client_ip(make({})) == "1.2.3.4"


class TestSseHelpers:
    def test_sse_frame_format(self):
        frame = prompts_mod._sse({"type": "done"})
        assert frame == 'data: {"type": "done"}\n\n'

    def test_greeting_and_unknown_results_shape(self):
        for result in (prompts_mod._greeting_result(), prompts_mod._unknown_result()):
            assert {"type", "text", "highlight_nodes", "highlight_edges"} <= set(result)
