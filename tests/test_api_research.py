"""api.research — topic lifecycle, search runs, extraction queue, review flow."""

import uuid

import pytest

import api.research as research
from api.sources import Record
from tests.conftest import USER_A, USER_B


class FakeAdapter:
    """Deterministic stand-in for a SourceAdapter."""

    def __init__(self, source_id, records):
        self.id = source_id
        self._records = records

    async def search(self, query, limit):
        return self._records[:limit]

    async def fetch(self, external_id):
        return next((r for r in self._records if r.external_id == external_id), None)


PUBMED_RECS = [
    Record(external_id="111", title="Paper one", abstract="Abstract one.",
           pub_year=2024, url="https://pubmed.ncbi.nlm.nih.gov/111/"),
    Record(external_id="222", title="Paper two", abstract="",  # no abstract
           url="https://pubmed.ncbi.nlm.nih.gov/222/"),
]
EPMC_RECS = [
    Record(external_id="333", title="Paper three", abstract="Abstract three.",
           url="https://europepmc.org/article/MED/333"),
]

CANNED_TRIPLES = [
    {"subject": "Resveratrol", "predicate": "activates", "object": "SIRT1",
     "confidence": 0.9, "rationale": "stated directly"},
    {"subject": "Novel Thing X", "predicate": "binds", "object": "SIRT1",
     "confidence": 0.5, "rationale": "unmapped label -> custom node"},
]


@pytest.fixture
def research_env(monkeypatch, client, fake_db, seeded_entities):
    """Patched adapters + LLM extraction, wired to a graph for approvals."""
    monkeypatch.setattr(research, "ADAPTERS", {
        "pubmed": FakeAdapter("pubmed", PUBMED_RECS),
        "europepmc": FakeAdapter("europepmc", EPMC_RECS),
    })

    async def fake_extract(topic, title, abstract, timeout=120.0):
        if title == "Paper one":
            return CANNED_TRIPLES
        return []

    monkeypatch.setattr(research, "extract_triples", fake_extract)

    graph_id = client.post(
        "/v1/graphs", json={"name": "Research target", "forked_from_slug": "sirtuins"}
    ).json()["id"]
    topic_id = client.post("/v1/research/topics", json={
        "query": "sirtuin activators", "user_graph_id": graph_id
    }).json()["id"]
    return {"graph_id": graph_id, "topic_id": topic_id}


def _run_search(client, topic_id, **overrides):
    payload = {"sources": ["pubmed", "europepmc"], "limit": 5, "extract_limit": 5}
    payload.update(overrides)
    return client.post(f"/v1/research/topics/{topic_id}/search", json=payload)


def _pending_triple(fake_db, topic_id, subject="Resveratrol", predicate="activates",
                    object_="SIRT1", record_id=None):
    row = {
        "id": str(uuid.uuid4()),
        "topic_id": topic_id,
        "evidence_record_id": record_id or str(uuid.uuid4()),
        "subject": subject, "predicate": predicate, "object": object_,
        "confidence": 0.9, "rationale": "r", "extractor": "llm", "status": "pending",
    }
    fake_db.seed("extracted_triples", [row])
    return row


class TestTopics:
    def test_create_topic(self, client, fake_db):
        r = client.post("/v1/research/topics", json={"query": "mitohormesis"})
        assert r.status_code == 200
        assert r.json()["status"] == "ready"  # idle; /search flips to researching
        assert len(fake_db.all("research_topics")) == 1

    def test_create_topic_with_unknown_graph_rejected(self, client, fake_db):
        r = client.post("/v1/research/topics", json={
            "query": "qq", "user_graph_id": str(uuid.uuid4())})
        assert r.status_code == 400
        assert fake_db.all("research_topics") == []

    def test_list_topics_scoped_to_owner(self, make_client, fake_db):
        make_client(USER_A).post("/v1/research/topics", json={"query": "aa"})
        make_client(USER_B).post("/v1/research/topics", json={"query": "bb"})

        mine = make_client(USER_A).get("/v1/research/topics").json()["topics"]
        assert [t["query"] for t in mine] == ["aa"]


class TestSearchRun:
    def test_search_run_stores_records_and_triples(self, client, research_env,
                                                   fake_db):
        tid = research_env["topic_id"]
        r = _run_search(client, tid)
        assert r.status_code == 200
        assert r.json()["status"] == "researching"

        topic = next(t for t in fake_db.all("research_topics") if t["id"] == tid)
        assert topic["status"] == "ready"  # background task completed inline

        records = fake_db.all("source_records")
        assert {rec["source_id"] for rec in records} == {"pubmed", "europepmc"}
        assert len(records) == 3

        # abstract-less papers excluded from extraction
        triples = fake_db.all("extracted_triples")
        assert len(triples) == len(CANNED_TRIPLES)
        assert all(t["status"] == "pending" for t in triples)
        evidence = next(t for t in triples)
        assert evidence["evidence_record_id"] in {rec["id"] for rec in records}

        results = fake_db.all("research_results")
        assert len(results) == 3
        assert all(res["topic_id"] == tid for res in results)

    def test_search_run_is_idempotent_on_rerun(self, client, research_env, fake_db):
        tid = research_env["topic_id"]
        _run_search(client, tid)
        _run_search(client, tid)

        assert len(fake_db.all("source_records")) == 3  # upserted, not duplicated
        assert len(fake_db.all("research_results")) == 3
        # duplicate triples were still queued (no dedupe on the review queue)...
        assert len(fake_db.all("extracted_triples")) == len(CANNED_TRIPLES) * 2

    def test_search_run_failed_adapter_is_isolated(self, client, research_env,
                                                   fake_db, monkeypatch):
        class Boom(FakeAdapter):
            async def search(self, query, limit):
                raise RuntimeError("network down")

        monkeypatch.setitem(research.ADAPTERS, "europepmc",
                            Boom("europepmc", []))
        _run_search(client, research_env["topic_id"])
        topic = next(t for t in fake_db.all("research_topics")
                     if t["id"] == research_env["topic_id"])
        assert topic["status"] == "ready"
        assert {r["source_id"] for r in fake_db.all("source_records")} == {"pubmed"}

    def test_search_run_failure_marks_topic_failed(self, client, research_env,
                                                   fake_db, monkeypatch):
        async def boom(*args, **kwargs):
            raise RuntimeError("unexpected")

        monkeypatch.setattr(research, "upsert", boom)
        _run_search(client, research_env["topic_id"])
        topic = next(t for t in fake_db.all("research_topics")
                     if t["id"] == research_env["topic_id"])
        assert topic["status"] == "failed"

    def test_search_unknown_sources_fall_back(self, client, research_env, fake_db):
        r = _run_search(client, research_env["topic_id"], sources=["not-a-source"])
        assert r.json()["sources"] == ["pubmed", "europepmc"]

    def test_extract_limit_zero_skips_llm(self, client, research_env, fake_db,
                                          monkeypatch):
        calls = []

        async def spy(*args, **kwargs):
            calls.append(args)
            return []

        monkeypatch.setattr(research, "extract_triples", spy)
        _run_search(client, research_env["topic_id"], extract_limit=0)
        assert calls == []
        assert fake_db.all("extracted_triples") == []

    def test_topic_detail_includes_results_and_triples(self, client, research_env,
                                                       fake_db):
        tid = research_env["topic_id"]
        _run_search(client, tid)
        body = client.get(f"/v1/research/topics/{tid}").json()

        assert body["status"] == "ready"
        assert len(body["results"]) == 3
        rec = body["results"][0]["record"]
        assert rec["source_id"] in ("pubmed", "europepmc")
        assert len(body["triples"]) == len(CANNED_TRIPLES)

        pending_only = client.get(
            f"/v1/research/topics/{tid}", params={"status": "pending"}
        ).json()
        assert all(t["status"] == "pending" for t in pending_only["triples"])

    def test_search_other_users_topic_404(self, client, make_client, fake_db):
        topic = make_client(USER_B).post("/v1/research/topics",
                                         json={"query": "bb"}).json()
        r = make_client(USER_A).post(
            f"/v1/research/topics/{topic['id']}/search", json={"sources": ["pubmed"]})
        assert r.status_code == 404


class TestReviewFlow:
    def test_approve_links_to_base_entities(self, client, research_env, fake_db):
        tid = research_env["topic_id"]
        gid = research_env["graph_id"]
        triple = _pending_triple(fake_db, tid)

        r = client.post(f"/v1/research/triples/{triple['id']}/review",
                        json={"status": "approved"})
        assert r.status_code == 200
        assert r.json()["status"] == "approved"

        # both endpoints resolved to base entities (norm ids), not custom nodes
        nodes = fake_db.all("user_nodes")
        by_entity = {n["entity_id"]: n["id"] for n in nodes}
        assert "resveratrol" in by_entity and "sirt1" in by_entity
        assert not any(n.get("custom_label") for n in nodes)

        edges = fake_db.all("user_edges")
        assert len(edges) == 1
        assert edges[0]["relation"] == "activates"
        assert edges[0]["from_node"] == by_entity["resveratrol"]
        assert edges[0]["to_node"] == by_entity["sirt1"]
        assert edges[0]["evidence_url"] is None  # seeded record id doesn't resolve

        triple_row = next(t for t in fake_db.all("extracted_triples")
                          if t["id"] == triple["id"])
        assert triple_row["status"] == "approved"
        assert triple_row["user_graph_id"] == gid

    def test_approve_unknown_label_creates_custom_node(self, client, research_env,
                                                       fake_db):
        tid = research_env["topic_id"]
        triple = _pending_triple(fake_db, tid, subject="Novel Thing X",
                                 object_="SIRT1")
        client.post(f"/v1/research/triples/{triple['id']}/review",
                    json={"status": "approved"})

        custom = [n for n in fake_db.all("user_nodes") if n.get("custom_label")]
        assert [n["custom_label"] for n in custom] == ["Novel Thing X"]

    def test_approve_twice_rejected(self, client, research_env, fake_db):
        tid = research_env["topic_id"]
        triple = _pending_triple(fake_db, tid)
        client.post(f"/v1/research/triples/{triple['id']}/review",
                    json={"status": "approved"})
        r = client.post(f"/v1/research/triples/{triple['id']}/review",
                        json={"status": "approved"})
        assert r.status_code == 400

    def test_reject_flow(self, client, research_env, fake_db):
        tid = research_env["topic_id"]
        triple = _pending_triple(fake_db, tid)
        r = client.post(f"/v1/research/triples/{triple['id']}/review",
                        json={"status": "rejected"})
        assert r.json()["status"] == "rejected"
        assert fake_db.all("user_edges") == []
        row = next(t for t in fake_db.all("extracted_triples")
                   if t["id"] == triple["id"])
        assert row["status"] == "rejected"

    def test_review_requires_topic_ownership(self, client, make_client, fake_db,
                                             seeded_entities):
        gid = make_client(USER_B).post("/v1/graphs", json={"name": "B"}).json()["id"]
        topic = make_client(USER_B).post("/v1/research/topics", json={
            "query": "qq", "user_graph_id": gid}).json()
        triple = _pending_triple(fake_db, topic["id"])

        # other user cannot see or review it
        r = make_client(USER_A).post(f"/v1/research/triples/{triple['id']}/review",
                                     json={"status": "approved"})
        assert r.status_code == 404

    def test_review_with_graph_override(self, client, research_env, fake_db):
        tid = research_env["topic_id"]
        # topic without a linked graph
        topic = client.post("/v1/research/topics", json={"query": "qq"}).json()
        triple = _pending_triple(fake_db, topic["id"])

        # no graph anywhere -> 400
        r = client.post(f"/v1/research/triples/{triple['id']}/review",
                        json={"status": "approved"})
        assert r.status_code == 400

        # explicit override works
        r = client.post(f"/v1/research/triples/{triple['id']}/review",
                        json={"status": "approved",
                              "user_graph_id": research_env["graph_id"]})
        assert r.status_code == 200

    def test_invalid_review_status_rejected(self, client, research_env, fake_db):
        triple = _pending_triple(fake_db, research_env["topic_id"])
        r = client.post(f"/v1/research/triples/{triple['id']}/review",
                        json={"status": "maybe"})
        assert r.status_code == 422
