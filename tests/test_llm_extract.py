"""api.llm.extract_triples — prompt plumbing and output sanitization (offline)."""

import pytest

import api.llm as llm


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


VALID_REPLY = """Sure! Here is the extraction:
{"triples": [
  {"subject": "Resveratrol", "predicate": "Activates", "object": "SIRT1",
   "confidence": 0.9, "rationale": "Directly shown."},
  {"subject": "", "predicate": "inhibits", "object": "X",
   "confidence": 0.5, "rationale": "empty subject -> dropped"},
  {"subject": "A", "predicate": "some relation", "object": "B",
   "confidence": "not-a-number", "rationale": "bad confidence -> default"},
  {"subject": "C", "predicate": "increases", "object": "D",
   "confidence": 7.5, "rationale": "clamped to 1.0"}
]}"""


@pytest.mark.asyncio
async def test_extracts_and_sanitizes(llm_offline):
    llm_offline["reply"] = VALID_REPLY
    triples = await llm.extract_triples("sirtuin activators", "Title",
                                        "Some abstract about sirtuins.")

    assert len(triples) == 3  # empty-subject row dropped
    first = triples[0]
    assert first["predicate"] == "activates"  # lowercased
    assert 0.0 <= first["confidence"] <= 1.0

    by_subject = {t["subject"]: t for t in triples}
    assert by_subject["A"]["confidence"] == 0.5  # invalid -> default
    assert by_subject["C"]["confidence"] == 1.0  # clamped
    assert by_subject["C"]["predicate"] == "increases"

    # prompt carries the topic, title, and abstract
    prompt = llm_offline["prompt"]
    assert "sirtuin activators" in prompt
    assert "Title" in prompt
    assert "Some abstract" in prompt


@pytest.mark.asyncio
async def test_handles_markdown_fences(llm_offline):
    llm_offline["reply"] = '```json\n{"triples": [{"subject": "A", "predicate": "inhibits", "object": "B", "confidence": 0.4, "rationale": "r"}]}\n```'
    triples = await llm.extract_triples("t", "title", "abstract")
    assert triples == [{"subject": "A", "predicate": "inhibits", "object": "B",
                        "confidence": 0.4, "rationale": "r"}]


@pytest.mark.asyncio
async def test_no_triples_in_reply(llm_offline):
    llm_offline["reply"] = "I cannot extract anything from this."
    assert await llm.extract_triples("t", "title", "abstract") == []


@pytest.mark.asyncio
async def test_malformed_json_returns_empty(llm_offline):
    llm_offline["reply"] = '{"triples": [ {"subject": "A", '
    assert await llm.extract_triples("t", "title", "abstract") == []


@pytest.mark.asyncio
async def test_llm_failure_returns_empty(llm_offline):
    llm_offline["fail"] = True
    assert await llm.extract_triples("t", "title", "abstract") == []


@pytest.mark.asyncio
async def test_empty_abstract_short_circuits(llm_offline):
    llm_offline["fail"] = True  # would raise if called
    assert await llm.extract_triples("t", "title", "") == []
