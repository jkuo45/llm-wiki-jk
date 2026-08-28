"""Research workflow (/v1/research): search external sources for a topic,
queue LLM-extracted triples for review, and promote approved triples into a
user graph.

Flow:
  1. POST /topics                      -> research_topics row (status=researching)
  2. POST /topics/{id}/search          -> background run: adapters search ->
     source_records + research_results -> LLM extracts triples from the top
     abstracts -> extracted_triples (status=pending) -> status=ready
  3. GET  /topics/{id}                 -> poll status / results / queue
  4. POST /triples/{id}/review         -> approve inserts nodes+edges into the
     topic's user graph; reject drops it from the queue

Providers come from api/sources.ADAPTERS, keyed by public.sources.id — new
sources need only an adapter and a registry row.
"""

import logging

from fastapi import APIRouter, BackgroundTasks, HTTPException, Request
from pydantic import BaseModel, Field

from .auth import get_user_id
from .db import DBError, DB_ENABLED, insert, select, select_one, update, upsert
from .llm import extract_triples
from .norm import norm
from .sources import ADAPTERS

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/v1/research", tags=["research"])

DEFAULT_SOURCES = ["pubmed", "europepmc"]
DEFAULT_LIMIT = 10
DEFAULT_EXTRACT_LIMIT = 5


def _require_db() -> None:
    if not DB_ENABLED:
        raise HTTPException(status_code=503, detail="Database not configured")


async def _require_user(request: Request) -> str:
    uid = await get_user_id(request)
    if not uid:
        raise HTTPException(status_code=401, detail="Sign-in required")
    return uid


async def _owned_topic(tid: str, uid: str) -> dict:
    try:
        topic = await select_one("research_topics", eq={"id": tid})
    except DBError as e:
        logger.error(f"topic lookup failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e
    if not topic or topic["owner"] != uid:
        raise HTTPException(status_code=404, detail="Research topic not found")
    return topic


# ---------------------------------------------------------------------------
# Models
# ---------------------------------------------------------------------------


class TopicCreate(BaseModel):
    query: str = Field(..., min_length=2, max_length=500)
    user_graph_id: str | None = None


class SearchRun(BaseModel):
    sources: list[str] = Field(default_factory=lambda: list(DEFAULT_SOURCES))
    limit: int = Field(DEFAULT_LIMIT, ge=1, le=50)
    extract_limit: int = Field(DEFAULT_EXTRACT_LIMIT, ge=0, le=10)


class TripleReview(BaseModel):
    status: str = Field(..., pattern="^(approved|rejected)$")
    user_graph_id: str | None = None


# ---------------------------------------------------------------------------
# Topics
# ---------------------------------------------------------------------------


@router.post("/topics")
async def create_topic(body: TopicCreate, request: Request):
    _require_db()
    uid = await _require_user(request)

    if body.user_graph_id:
        try:
            g = await select_one("user_graphs", columns="id", eq={"id": body.user_graph_id})
        except DBError as e:
            logger.error(f"graph lookup failed: {e}")
            raise HTTPException(status_code=500, detail="Database error") from e
        if not g:
            raise HTTPException(status_code=400, detail="Unknown user_graph_id")

    try:
        topic = (
            await insert(
                "research_topics",
                {
                    "owner": uid,
                    "query": body.query.strip(),
                    "user_graph_id": body.user_graph_id,
                    # A fresh topic is idle-ready; /search flips it to
                    # 'researching' when the background run starts.
                    "status": "ready",
                },
            )
        )[0]
    except DBError as e:
        logger.error(f"create_topic failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e
    return topic


@router.get("/topics")
async def list_topics(request: Request):
    _require_db()
    uid = await _require_user(request)
    try:
        rows = await select(
            "research_topics",
            columns="id,query,status,user_graph_id,created_at",
            eq={"owner": uid},
            order="created_at.desc",
        )
    except DBError as e:
        logger.error(f"list_topics failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e
    return {"topics": rows}


# ---------------------------------------------------------------------------
# Search + extraction run
# ---------------------------------------------------------------------------


async def run_research(topic_id: str, query: str, sources: list[str],
                       limit: int, extract_limit: int) -> None:
    """Background: search -> store records -> LLM-extract triples -> ready.

    Best-effort per source and per paper; a failed extraction still yields the
    stored records. Unexpected errors flip the topic to 'failed'.
    """
    try:
        records: list[dict] = []
        for name in sources:
            adapter = ADAPTERS.get(name)
            if not adapter:
                logger.warning(f"unknown source {name!r}; skipping")
                continue
            try:
                found = await adapter.search(query, limit)
            except Exception as e:  # noqa: BLE001 - per-source isolation
                logger.error(f"source {name} search failed: {e}")
                continue
            if not found:
                continue
            rows = [rec.as_row(name) for rec in found]
            try:
                stored = await upsert(
                    "source_records",
                    rows,
                    on_conflict="source_id,external_id,kind",
                )
            except Exception as e:  # noqa: BLE001
                logger.error(f"source {name} store failed: {e}")
                continue
            records.extend(r for r in stored if r.get("id"))

        # Relevance = result rank per source (1.0 .. 0.5), merged by id.
        try:
            await upsert(
                "research_results",
                [
                    {
                        "topic_id": topic_id,
                        "record_id": r["id"],
                        "relevance": round(1.0 - 0.5 * i / max(len(records), 1), 4),
                        "provider_score": {"rank": i},
                    }
                    for i, r in enumerate(records)
                ],
                on_conflict="topic_id,record_id",
                ignore_duplicates=True,
            )
        except DBError as e:
            logger.warning(f"research_results insert failed: {e}")

        extracted = 0
        with_abstracts = [r for r in records if (r.get("abstract") or "").strip()]
        for rec_row in with_abstracts[:extract_limit]:
            triples = await extract_triples(
                query, rec_row.get("title", ""), rec_row["abstract"]
            )
            if not triples:
                continue
            try:
                await insert(
                    "extracted_triples",
                    [
                        {
                            "topic_id": topic_id,
                            "user_graph_id": None,
                            "evidence_record_id": rec_row["id"],
                            "subject": t["subject"],
                            "predicate": t["predicate"],
                            "object": t["object"],
                            "confidence": t["confidence"],
                            "rationale": t["rationale"],
                            "extractor": "llm",
                            "status": "pending",
                        }
                        for t in triples
                    ],
                )
                extracted += len(triples)
            except DBError as e:
                logger.error(f"extracted_triples insert failed: {e}")

        await update("research_topics", {"status": "ready"}, eq={"id": topic_id})
        logger.info(
            f"research run done topic={topic_id}: {len(records)} records, "
            f"{extracted} triples"
        )
    except Exception as e:  # noqa: BLE001 - background task
        logger.exception(f"research run failed topic={topic_id}: {e}")
        try:
            await update("research_topics", {"status": "failed"}, eq={"id": topic_id})
        except DBError:
            pass


@router.post("/topics/{tid}/search")
async def start_search(tid: str, body: SearchRun, bg: BackgroundTasks, request: Request):
    _require_db()
    uid = await _require_user(request)
    topic = await _owned_topic(tid, uid)

    if topic.get("status") == "researching":
        return {"status": "researching", "detail": "run already in progress"}

    sources = [s for s in body.sources if s in ADAPTERS] or list(DEFAULT_SOURCES)
    bg.add_task(run_research, tid, topic["query"], sources, body.limit, body.extract_limit)
    return {"status": "researching", "sources": sources}


@router.get("/topics/{tid}")
async def topic_detail(tid: str, request: Request, status: str | None = None):
    _require_db()
    uid = await _require_user(request)
    topic = await _owned_topic(tid, uid)

    try:
        results = await select(
            "research_results",
            columns="relevance,provider_score,record:source_records(id,source_id,external_id,kind,title,venue,pub_year,url,doi)",
            eq={"topic_id": tid},
            order="relevance.desc",
            limit=50,
        )
        eq = {"topic_id": tid}
        if status:
            eq["status"] = status
        triples = await select(
            "extracted_triples",
            columns="id,subject,predicate,object,confidence,rationale,status,extractor,evidence_record_id",
            eq=eq,
            order="confidence.desc",
            limit=200,
        )
    except DBError as e:
        logger.error(f"topic_detail failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e

    return {**topic, "results": results, "triples": triples}


# ---------------------------------------------------------------------------
# Review queue -> user graph
# ---------------------------------------------------------------------------


async def _ensure_node(gid: str, label: str) -> str:
    """Find or create the graph node for a label: base entity when norm(label)
    exists in public.entities, else a custom node."""
    nid = norm(label)
    try:
        entity = await select_one("entities", columns="norm_id", eq={"norm_id": nid})
        match: dict = {"graph_id": gid}
        if entity:
            match["entity_id"] = entity["norm_id"]
            existing = await select("user_nodes", columns="id", eq=match)
            if existing:
                return existing[0]["id"]
            return (await insert(
                "user_nodes", [{"graph_id": gid, "entity_id": entity["norm_id"]}]
            ))[0]["id"]

        match["custom_label"] = label.strip()
        existing = await select("user_nodes", columns="id", eq=match)
        if existing:
            return existing[0]["id"]
        return (await insert(
            "user_nodes",
            [{"graph_id": gid, "custom_label": label.strip()}],
        ))[0]["id"]
    except DBError as e:
        logger.error(f"_ensure_node failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e


@router.post("/triples/{triple_id}/review")
async def review_triple(triple_id: str, body: TripleReview, request: Request):
    _require_db()
    uid = await _require_user(request)
    try:
        triple = await select_one(
            "extracted_triples",
            columns="*,topic:research_topics(id,owner,user_graph_id)",
            eq={"id": triple_id},
        )
    except DBError as e:
        logger.error(f"triple lookup failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e
    if not triple or (triple.get("topic") or {}).get("owner") != uid:
        raise HTTPException(status_code=404, detail="Triple not found")
    if triple["status"] != "pending":
        raise HTTPException(status_code=400, detail=f"Triple already {triple['status']}")

    if body.status == "rejected":
        await update("extracted_triples", {"status": "rejected"}, eq={"id": triple_id})
        return {"status": "rejected"}

    gid = body.user_graph_id or (triple.get("topic") or {}).get("user_graph_id")
    if not gid:
        raise HTTPException(
            status_code=400,
            detail="No user graph linked to the topic; pass user_graph_id",
        )
    try:
        g = await select_one("user_graphs", columns="id", eq={"id": gid})
    except DBError as e:
        logger.error(f"graph lookup failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e
    if not g:
        raise HTTPException(status_code=400, detail="Unknown user_graph_id")

    from_id = await _ensure_node(gid, triple["subject"])
    to_id = await _ensure_node(gid, triple["object"])
    dupes = await select(
        "user_edges",
        columns="id",
        eq={
            "graph_id": gid,
            "from_node": from_id,
            "to_node": to_id,
            "relation": triple["predicate"],
        },
    )
    if not dupes:
        evidence_url = None
        try:
            rec = await select_one(
                "source_records", columns="url", eq={"id": triple["evidence_record_id"]}
            )
            evidence_url = rec and rec.get("url")
        except DBError:
            pass
        await insert(
            "user_edges",
            [{
                "graph_id": gid,
                "from_node": from_id,
                "to_node": to_id,
                "relation": triple["predicate"],
                "note": triple["rationale"],
                "evidence_url": evidence_url,
            }],
        )

    await update("extracted_triples", {"status": "approved", "user_graph_id": gid},
                 eq={"id": triple_id})
    logger.info(f"triple {triple_id} approved into graph {gid}")
    return {"status": "approved", "graph_id": gid}
