"""api.llm — opencode client: prompt plumbing, output sanitization, SSE bus."""

import json

import httpx
import pytest

import api.gateways.llm as llm


@pytest.fixture
def llm_offline(monkeypatch):
    """Stub the opencode session helpers; capture the prompt sent."""
    state = {"prompt": "", "reply": "", "fail": False}
    monkeypatch.setattr(llm, "OPENCODE_URL", "http://loopback-invalid")

    async def fake_create_session(title="graph-prompt"):
        return "session-1"

    async def fake_delete_session(session_id):
        return None

    async def fake_prompt_sync(session_id, text, timeout=60.0, agent=None):
        if state["fail"]:
            raise RuntimeError("opencode down")
        state["prompt"] = text
        return state["reply"]

    monkeypatch.setattr(llm, "create_session", fake_create_session)
    monkeypatch.setattr(llm, "delete_session", fake_delete_session)
    monkeypatch.setattr(llm, "_prompt_sync", fake_prompt_sync)
    return state


# ---------------------------------------------------------------------------
# Fixtures for the remaining client surface
# ---------------------------------------------------------------------------

def sse(obj) -> str:
    return f"data: {json.dumps(obj)}\n"


def sse_bus(session_id="s1", reply="Hello world"):
    """A realistic opencode bus transcript for one assistant turn."""
    return "".join([
        sse({"type": "message.updated", "properties": {
            "sessionID": session_id, "info": {"id": "m1", "role": "user"}}}),
        sse({"type": "message.part.updated", "properties": {
            "sessionID": session_id,
            "part": {"id": "p0", "type": "text", "messageID": "m1",
                     "text": "user prompt echo"}}}),
        sse({"type": "message.updated", "properties": {
            "sessionID": session_id,
            "info": {"id": "m2", "role": "assistant"}}}),
        sse({"type": "message.part.updated", "properties": {
            "sessionID": session_id,
            "part": {"id": "p1", "type": "reasoning", "messageID": "m2",
                     "text": "thinking"}}}),
        sse({"type": "message.part.updated", "properties": {
            "sessionID": session_id,
            "part": {"id": "p2", "type": "text", "messageID": "m2",
                     "text": reply}}}),
        sse({"type": "session.idle", "properties": {"sessionID": session_id}}),
    ])


@pytest.fixture
def opencode(monkeypatch):
    """Route all opencode HTTP traffic through httpx.MockTransport."""
    monkeypatch.setattr(llm, "OPENCODE_URL", "https://oc.test")
    llm._CLIENT = None
    return monkeypatch


def patch_transport(monkeypatch, handler):
    client = httpx.AsyncClient(base_url="https://oc.test",
                               transport=httpx.MockTransport(handler))
    monkeypatch.setattr(llm, "_CLIENT", client)
    return client


class TestDetectLang:
    def test_scripts(self):
        assert llm.detect_lang("こんにちは") == "ja"
        assert llm.detect_lang("안녕하세요") == "ko"
        assert llm.detect_lang("自噬是什麼") == "zh-TW"
        assert llm.detect_lang("自噬是什么") == "zh-CN"  # simplified hint char
        assert llm.detect_lang("аутофагия") == "ru"
        assert llm.detect_lang("what is autophagy?") == "en"


class TestSessionHelpers:
    @pytest.mark.asyncio
    async def test_health(self, opencode, monkeypatch):
        patch_transport(monkeypatch, lambda r: httpx.Response(200, json={"version": "1.18"}))
        assert await llm.health() == {"version": "1.18"}

    @pytest.mark.asyncio
    async def test_health_unreachable(self, opencode, monkeypatch):
        def handler(request):
            raise httpx.ConnectError("down")

        patch_transport(monkeypatch, handler)
        with pytest.raises(llm.OpencodeUnavailable):
            await llm.health()

    @pytest.mark.asyncio
    async def test_create_session(self, opencode, monkeypatch):
        seen = {}

        def handler(request):
            seen["body"] = json.loads(request.content)
            return httpx.Response(200, json={"id": "sess-9"})

        patch_transport(monkeypatch, handler)
        assert await llm.create_session("graph-prompt") == "sess-9"
        assert seen["body"] == {"title": "graph-prompt"}

    @pytest.mark.asyncio
    async def test_create_session_unavailable(self, opencode, monkeypatch):
        patch_transport(monkeypatch, lambda r: httpx.Response(500))
        with pytest.raises(llm.OpencodeUnavailable):
            await llm.create_session()

    @pytest.mark.asyncio
    async def test_delete_and_abort_are_best_effort(self, opencode, monkeypatch):
        patch_transport(monkeypatch, lambda r: httpx.Response(500))
        await llm.delete_session("s1")  # logs, never raises
        await llm.abort_session("s1")


class TestPromptSync:
    @pytest.mark.asyncio
    async def test_concatenates_text_parts(self, opencode, monkeypatch):
        seen = {}

        def handler(request):
            seen["path"] = request.url.path
            seen["body"] = json.loads(request.content)
            return httpx.Response(200, json={"parts": [
                {"type": "text", "text": "answer "},
                {"type": "reasoning", "text": "ignored"},
                {"type": "text", "text": "text"},
            ]})

        patch_transport(monkeypatch, handler)
        out = await llm._prompt_sync("s1", "question")
        assert out == "answer text"
        assert seen["path"] == "/session/s1/message"
        assert seen["body"]["agent"] == llm.UTILITY_AGENT


class TestParseIntent:
    @pytest.mark.asyncio
    async def test_parses_classifier_json(self, opencode, monkeypatch):
        calls = {"deleted": []}

        def handler(request):
            if request.url.path == "/session":
                return httpx.Response(200, json={"id": "s1"})
            if request.url.path.endswith("/message"):
                return httpx.Response(200, json={"parts": [
                    {"type": "text", "text": '{"intent": "explain", "node": "SIRT1"}'}]})
            if request.method == "DELETE" and request.url.path == "/session/s1":
                calls["deleted"].append(request.url.path)
                return httpx.Response(200)
            return httpx.Response(404)

        patch_transport(monkeypatch, handler)
        assert await llm.parse_intent("Explain SIRT1") == {
            "intent": "explain", "node": "SIRT1"}
        assert calls["deleted"] == ["/session/s1"]  # throwaway session reaped

    @pytest.mark.asyncio
    async def test_garbage_or_empty_is_unknown(self, opencode, monkeypatch):
        def handler(request):
            if request.url.path == "/session":
                return httpx.Response(200, json={"id": "s1"})
            return httpx.Response(200, json={"parts": [
                {"type": "text", "text": "I cannot classify that."}]})

        patch_transport(monkeypatch, handler)
        assert await llm.parse_intent("hello?") == {"intent": "unknown"}

    @pytest.mark.asyncio
    async def test_unavailable_is_unknown(self, opencode, monkeypatch):
        def handler(request):
            raise httpx.ConnectError("down")

        patch_transport(monkeypatch, handler)
        assert await llm.parse_intent("anything") == {"intent": "unknown"}


class TestExtractJson:
    def test_direct_json(self):
        assert llm._extract_json('{"intent": "explain", "node": "X"}') == {
            "intent": "explain", "node": "X"}

    def test_json_embedded_in_prose(self):
        text = 'Sure! {"intent": "path", "from": "A", "to": "B"} hope that helps'
        assert llm._extract_json(text)["intent"] == "path"

    def test_no_json(self):
        assert llm._extract_json("no json here") == {"intent": "unknown"}


class TestBestEffortWrappers:
    @pytest.mark.asyncio
    async def test_translate_skipped_for_english(self, opencode, monkeypatch):
        async def boom(*a, **k):
            raise AssertionError("no model call for English")

        monkeypatch.setattr(llm, "create_session", boom)
        assert await llm.translate_text("Some text", "an english message") == (
            "Some text")
        assert await llm.translate_text("", "这是一条中文消息") == ""

    @pytest.mark.asyncio
    async def test_translate_chinese(self, opencode, monkeypatch):
        seen = {}

        async def fake_sync(session_id, text, timeout=60.0, agent=None):
            seen["prompt"] = text
            return "翻译后的文本"

        async def fake_session(title="graph-prompt"):
            return "s1"

        async def noop(sid):
            pass

        monkeypatch.setattr(llm, "_prompt_sync", fake_sync)
        monkeypatch.setattr(llm, "create_session", fake_session)
        monkeypatch.setattr(llm, "delete_session", noop)
        out = await llm.translate_text("Some text", "这是一条中文消息")
        assert out == "翻译后的文本"
        assert "Some text" in seen["prompt"]

    @pytest.mark.asyncio
    async def test_translate_failure_returns_original(self, opencode, monkeypatch):
        async def boom(*a, **k):
            raise llm.OpencodeUnavailable("down")

        monkeypatch.setattr(llm, "create_session", boom)
        assert await llm.translate_text("orig", "中文消息") == "orig"

    @pytest.mark.asyncio
    async def test_analysis_narrative(self, opencode, monkeypatch):
        async def fake_sync(session_id, text, timeout=60.0, agent=None):
            return "  The narrative.  "

        monkeypatch.setattr(llm, "_prompt_sync", fake_sync)
        monkeypatch.setattr(llm, "create_session", lambda title="x": _async("s1"))
        monkeypatch.setattr(llm, "delete_session", _noop)
        assert await llm.write_analysis_narrative({"nodes": []}, "req") == (
            "The narrative.")

    @pytest.mark.asyncio
    async def test_analysis_narrative_failure_is_empty(self, opencode, monkeypatch):
        async def boom(*a, **k):
            raise RuntimeError("x")

        monkeypatch.setattr(llm, "create_session", boom)
        assert await llm.write_analysis_narrative({}) == ""

    @pytest.mark.asyncio
    async def test_transcribe_image(self, opencode, monkeypatch):
        captured = {}

        async def fake_sync(session_id, text, timeout=60.0, agent=None):
            captured["prompt"] = text
            return " transcribed words "

        monkeypatch.setattr(llm, "_prompt_sync", fake_sync)
        monkeypatch.setattr(llm, "create_session", lambda title="x": _async("s1"))
        monkeypatch.setattr(llm, "delete_session", _noop)
        assert await llm.transcribe_image("/tmp/notes/page-1.png") == (
            "transcribed words")
        assert "/tmp/notes/page-1.png" in captured["prompt"]

    @pytest.mark.asyncio
    async def test_transcribe_image_failure_is_empty(self, opencode, monkeypatch):
        async def boom(*a, **k):
            raise RuntimeError("x")

        monkeypatch.setattr(llm, "create_session", boom)
        assert await llm.transcribe_image("/tmp/x.png") == ""


class TestStreamAnswer:
    def _patch(self, monkeypatch, bus_text, prompt_status=204, event_status=200):
        async def bus_stream():
            yield bus_text.encode()  # async iterator -> valid for client.stream

        def handler(request: httpx.Request) -> httpx.Response:
            if request.url.path == "/event":
                return httpx.Response(event_status, content=bus_stream())
            if request.url.path == "/session/s1/prompt_async":
                return httpx.Response(prompt_status)
            return httpx.Response(404)

        patch_transport(monkeypatch, handler)

    @pytest.mark.asyncio
    async def test_streams_text_and_done_dropping_user_echo(self, opencode,
                                                            monkeypatch):
        self._patch(monkeypatch, sse_bus(reply="Hello world"))
        chunks = [c async for c in llm.stream_answer("ask", session_id="s1")]
        assert chunks == [
            {"type": "reasoning", "text": "thinking"},
            {"type": "text", "text": "Hello world"},
            {"type": "done", "elapsed": chunks[-1]["elapsed"]},
        ]

    @pytest.mark.asyncio
    async def test_delta_feed_appends_incrementally(self, opencode, monkeypatch):
        # snapshot "Hel", then delta "lo" -> full "Hello" via snapshot flush
        bus = "".join([
            sse({"type": "message.updated", "properties": {
                "sessionID": "s1", "info": {"id": "m2", "role": "assistant"}}}),
            sse({"type": "message.part.updated", "properties": {
                "sessionID": "s1",
                "part": {"id": "p1", "type": "text", "messageID": "m2",
                         "text": "Hel"}}}),
            sse({"type": "message.part.delta", "properties": {
                "sessionID": "s1", "partID": "p1", "field": "text",
                "delta": "lo"}}),
            sse({"type": "message.part.updated", "properties": {
                "sessionID": "s1",
                "part": {"id": "p1", "type": "text", "messageID": "m2",
                         "text": "Hello"}}}),
            sse({"type": "session.idle", "properties": {"sessionID": "s1"}}),
        ])
        self._patch(monkeypatch, bus)
        chunks = [c async for c in llm.stream_answer("ask", session_id="s1")]
        texts = [c["text"] for c in chunks if c["type"] == "text"]
        assert texts == ["Hel", "lo"]  # no replay of the superseding snapshot

    @pytest.mark.asyncio
    async def test_ignores_other_sessions(self, opencode, monkeypatch):
        bus = "".join([
            sse({"type": "message.part.updated", "properties": {
                "sessionID": "other",
                "part": {"id": "px", "type": "text", "messageID": "mx",
                         "text": "foreign"}}}),
            sse({"type": "session.idle", "properties": {"sessionID": "other"}}),
            sse({"type": "session.idle", "properties": {"sessionID": "s1"}}),
        ])
        self._patch(monkeypatch, bus)
        chunks = [c async for c in llm.stream_answer("ask", session_id="s1")]
        assert chunks == [{"type": "done", "elapsed": chunks[0]["elapsed"]}]

    @pytest.mark.asyncio
    async def test_event_bus_error_yields_error(self, opencode, monkeypatch):
        self._patch(monkeypatch, "", event_status=500)
        chunks = [c async for c in llm.stream_answer("ask", session_id="s1")]
        assert chunks[0]["type"] == "error"

    @pytest.mark.asyncio
    async def test_prompt_async_failure_yields_error(self, opencode, monkeypatch):
        self._patch(monkeypatch, "", prompt_status=500)
        chunks = [c async for c in llm.stream_answer("ask", session_id="s1")]
        assert chunks[0] == {"type": "error", "text": "Prompt service unavailable."}

    @pytest.mark.asyncio
    async def test_session_error_event(self, opencode, monkeypatch):
        bus = sse({"type": "session.error", "properties": {
            "sessionID": "s1", "error": {"code": 1}}})
        self._patch(monkeypatch, bus)
        chunks = [c async for c in llm.stream_answer("ask", session_id="s1")]
        assert chunks[0]["type"] == "error"


async def _async(value):
    return value


async def _noop(_sid):
    pass
