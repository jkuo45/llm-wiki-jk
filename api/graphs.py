"""User-built graphs on top of the base wiki entities (/v1/graphs).

Every user (not just the super admin) can create graphs from existing topics
(forked_from_slug seeds the topic's base entities) or from brand-new custom
nodes. Rows live in the user layer tables (user_graphs/user_nodes/user_edges);
the service-role PostgREST client bypasses RLS, so every query here scopes by
the verified auth.uid explicitly.

Analytics (metrics + shortest paths) assemble a networkx graph per request
from the user's nodes/edges, resolving base entities through public.entities
— the same norm(label) ids as the site's three graph modes.
"""

import logging
import uuid

import networkx as nx
from fastapi import APIRouter, HTTPException, Request
from fastapi.concurrency import run_in_threadpool
from pydantic import BaseModel, Field

from .auth import get_user_id
from .db import DBError, DB_ENABLED, delete, insert, select, select_one, update
from .norm import norm

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/v1/graphs", tags=["graphs"])

MAX_NODES_PER_GRAPH = 2000
MAX_EDGES_PER_GRAPH = 10000


def _require_db() -> None:
    if not DB_ENABLED:
        raise HTTPException(status_code=503, detail="Database not configured")


async def _require_user(request: Request) -> str:
    uid = await get_user_id(request)
    if not uid:
        raise HTTPException(status_code=401, detail="Sign-in required")
    return uid


async def _owned_graph(gid: str, uid: str) -> dict:
    _require_uuid(gid, "graph")
    try:
        g = await select_one("user_graphs", eq={"id": gid})
    except DBError as e:
        logger.error(f"graph lookup failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e
    if not g or g["owner"] != uid:
        raise HTTPException(status_code=404, detail="Graph not found")
    return g


async def _visible_graph(gid: str, uid: str) -> dict:
    """Graph lookup for read paths: owner or public visibility."""
    _require_uuid(gid, "graph")
    try:
        g = await select_one("user_graphs", columns="owner,visibility", eq={"id": gid})
    except DBError as e:
        logger.error(f"graph lookup failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e
    if not g or (g["visibility"] != "public" and g["owner"] != uid):
        raise HTTPException(status_code=404, detail="Graph not found")
    return g


# ---------------------------------------------------------------------------
# Models
# ---------------------------------------------------------------------------


class GraphCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    description: str | None = Field(None, max_length=2000)
    visibility: str = Field("private", pattern="^(private|public)$")
    forked_from_slug: str | None = Field(None, max_length=100)


class GraphUpdate(BaseModel):
    name: str | None = Field(None, min_length=1, max_length=200)
    description: str | None = Field(None, max_length=2000)
    visibility: str | None = Field(None, pattern="^(private|public)$")


class NodeCreate(BaseModel):
    entity_id: str | None = Field(None, max_length=200)
    custom_label: str | None = Field(None, min_length=1, max_length=200)
    custom_description: str | None = Field(None, max_length=4000)
    custom_type: str | None = Field(None, max_length=60)


class EdgeCreate(BaseModel):
    from_node: str
    to_node: str
    relation: str = Field(..., min_length=1, max_length=120)
    note: str | None = Field(None, max_length=2000)
    evidence_pmid: str | None = Field(None, max_length=32)
    evidence_url: str | None = Field(None, max_length=500)


# (TripleReview lives in research.py — the only consumer.)


# ---------------------------------------------------------------------------
# Graph CRUD
# ---------------------------------------------------------------------------


@router.post("")
async def create_graph(request: Request, body: GraphCreate):
    _require_db()
    uid = await _require_user(request)

    forked_nodes = 0
    if body.forked_from_slug:
        try:
            topic = await select_one("topics", eq={"slug": body.forked_from_slug})
        except DBError:
            topic = None
        if not topic:
            raise HTTPException(status_code=400, detail="Unknown topic slug")

    row = {
        "owner": uid,
        "name": body.name.strip(),
        "description": body.description,
        "visibility": body.visibility,
        "forked_from_slug": body.forked_from_slug,
    }
    try:
        graph = (await insert("user_graphs", row))[0]
        if body.forked_from_slug:
            entities = await select(
                "entities",
                columns="norm_id",
                eq={"topic_slug": body.forked_from_slug},
            )
            rows = [{"graph_id": graph["id"], "entity_id": e["norm_id"]} for e in entities]
            for i in range(0, len(rows), 500):
                await insert("user_nodes", rows[i:i + 500])
            forked_nodes = len(rows)
    except DBError as e:
        logger.error(f"create_graph failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e

    logger.info(f"graph created user={uid} id={graph['id']} forked={forked_nodes}")
    return {**graph, "seeded_nodes": forked_nodes}


@router.get("")
async def list_graphs(request: Request):
    """Own graphs, plus public ones from other users."""
    _require_db()
    uid = await _require_user(request)
    try:
        rows = await select(
            "user_graphs",
            columns="id,name,description,visibility,forked_from_slug,owner,created_at,updated_at",
            or_filter=f"(owner.eq.{uid},visibility.eq.public)",
            order="created_at.desc",
        )
    except DBError as e:
        logger.error(f"list_graphs failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e
    return {"graphs": rows, "owner": uid}


@router.get("/{gid}")
async def get_graph(gid: str, request: Request):
    _require_db()
    uid = await _require_user(request)
    g = await _visible_graph(gid, uid)

    try:
        nodes = await select(
            "user_nodes",
            columns="id,entity_id,custom_label,custom_description,custom_type,entity:entities(label)",
            eq={"graph_id": gid},
            order="created_at.asc",
        )
        edges = await select(
            "user_edges",
            columns="id,from_node,to_node,relation,note,evidence_pmid,evidence_url",
            eq={"graph_id": gid},
            order="created_at.asc",
        )
    except DBError as e:
        logger.error(f"get_graph contents failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e

    nodes_out = [
        {
            "id": n["id"],
            "entity_id": n["entity_id"],
            "label": (n.get("entity") or {}).get("label") or n.get("custom_label"),
            "custom_description": n.get("custom_description"),
            "custom_type": n.get("custom_type"),
        }
        for n in nodes
    ]
    return {"graph": g, "nodes": nodes_out, "edges": edges, "owner": uid}


@router.patch("/{gid}")
async def patch_graph(gid: str, body: GraphUpdate, request: Request):
    _require_db()
    uid = await _require_user(request)
    await _owned_graph(gid, uid)
    changes = {k: v for k, v in body.model_dump().items() if v is not None}
    if not changes:
        return {"status": "ok"}
    try:
        rows = await update("user_graphs", changes, eq={"id": gid})
    except DBError as e:
        logger.error(f"patch_graph failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e
    return rows[0] if rows else {"status": "ok"}


@router.delete("/{gid}")
async def delete_graph(gid: str, request: Request):
    _require_db()
    uid = await _require_user(request)
    await _owned_graph(gid, uid)
    try:
        await delete("user_graphs", eq={"id": gid})  # nodes/edges cascade
    except DBError as e:
        logger.error(f"delete_graph failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e
    return {"status": "ok"}


# ---------------------------------------------------------------------------
# Nodes / edges
# ---------------------------------------------------------------------------


@router.post("/{gid}/nodes")
async def add_node(gid: str, body: NodeCreate, request: Request):
    _require_db()
    uid = await _require_user(request)
    await _owned_graph(gid, uid)

    if not body.entity_id and not body.custom_label:
        raise HTTPException(status_code=400, detail="entity_id or custom_label required")

    if body.entity_id:
        try:
            entity = await select_one("entities", columns="norm_id", eq={"norm_id": body.entity_id})
        except DBError as e:
            logger.error(f"entity lookup failed: {e}")
            raise HTTPException(status_code=500, detail="Database error") from e
        if not entity:
            raise HTTPException(status_code=400, detail="Unknown entity_id")

    try:
        count = await select("user_nodes", columns="id", eq={"graph_id": gid})
        if len(count) >= MAX_NODES_PER_GRAPH:
            raise HTTPException(status_code=400, detail="Graph node limit reached")

        # Identity within a graph is coalesce(entity_id, custom_label) — the
        # unique index is expression-based, so resolve duplicates by lookup.
        match: dict = {"graph_id": gid}
        if body.entity_id:
            match["entity_id"] = body.entity_id
        else:
            match["custom_label"] = body.custom_label.strip()
        existing = await select("user_nodes", columns="id", eq=match)
        if existing:
            return {"id": existing[0]["id"], "duplicate": True}

        row = {
            "graph_id": gid,
            "entity_id": body.entity_id,
            "custom_label": body.custom_label.strip() if body.custom_label else None,
            "custom_description": body.custom_description,
            "custom_type": body.custom_type,
        }
        node = (await insert("user_nodes", [row]))[0]
    except DBError as e:
        logger.error(f"add_node failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e
    return {**node, "duplicate": False}


@router.delete("/{gid}/nodes/{node_id}")
async def remove_node(gid: str, node_id: str, request: Request):
    _require_db()
    uid = await _require_user(request)
    await _owned_graph(gid, uid)
    _require_uuid(node_id, "node")
    try:
        await delete("user_nodes", eq={"id": node_id, "graph_id": gid})
    except DBError as e:
        logger.error(f"remove_node failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e
    return {"status": "ok"}


def _require_uuid(value: str, what: str) -> None:
    """Reject non-UUID ids early — Postgres 22P02 would otherwise 500."""
    try:
        uuid.UUID(value)
    except (ValueError, AttributeError):
        raise HTTPException(status_code=400, detail=f"Invalid {what} id")


@router.post("/{gid}/edges")
async def add_edge(gid: str, body: EdgeCreate, request: Request):
    _require_db()
    uid = await _require_user(request)
    await _owned_graph(gid, uid)
    _require_uuid(gid, "graph")
    _require_uuid(body.from_node, "from_node")
    _require_uuid(body.to_node, "to_node")

    try:
        for nid in (body.from_node, body.to_node):
            node = await select_one("user_nodes", columns="id", eq={"id": nid, "graph_id": gid})
            if not node:
                raise HTTPException(status_code=400, detail="Node not in this graph")
        count = await select("user_edges", columns="id", eq={"graph_id": gid})
        if len(count) >= MAX_EDGES_PER_GRAPH:
            raise HTTPException(status_code=400, detail="Graph edge limit reached")
        dupes = await select(
            "user_edges",
            columns="id",
            eq={
                "graph_id": gid,
                "from_node": body.from_node,
                "to_node": body.to_node,
                "relation": body.relation,
            },
        )
        if dupes:
            return {"id": dupes[0]["id"], "duplicate": True}
        row = {
            "graph_id": gid,
            "from_node": body.from_node,
            "to_node": body.to_node,
            "relation": body.relation.strip(),
            "note": body.note,
            "evidence_pmid": body.evidence_pmid,
            "evidence_url": body.evidence_url,
        }
        edge = (await insert("user_edges", [row]))[0]
    except HTTPException:
        raise
    except DBError as e:
        logger.error(f"add_edge failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e
    return {**edge, "duplicate": False}


@router.delete("/{gid}/edges/{edge_id}")
async def remove_edge(gid: str, edge_id: str, request: Request):
    _require_db()
    uid = await _require_user(request)
    await _owned_graph(gid, uid)
    _require_uuid(edge_id, "edge")
    try:
        await delete("user_edges", eq={"id": edge_id, "graph_id": gid})
    except DBError as e:
        logger.error(f"remove_edge failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e
    return {"status": "ok"}


# ---------------------------------------------------------------------------
# Analytics (networkx, computed per request)
# ---------------------------------------------------------------------------


async def _load_user_nx(gid: str) -> tuple[nx.DiGraph, dict[str, str]]:
    """Build a DiGraph of the user graph; returns (graph, id->label)."""
    try:
        nodes = await select(
            "user_nodes",
            columns="id,entity_id,custom_label,entity:entities(label)",
            eq={"graph_id": gid},
        )
        edges = await select(
            "user_edges",
            columns="from_node,to_node,relation",
            eq={"graph_id": gid},
        )
    except DBError as e:
        logger.error(f"analytics load failed: {e}")
        raise HTTPException(status_code=500, detail="Database error") from e

    labels = {
        n["id"]: (n.get("entity") or {}).get("label") or n.get("custom_label") or n["id"]
        for n in nodes
    }
    G = nx.DiGraph()
    for nid, label in labels.items():
        G.add_node(nid, label=label)
    for e in edges:
        if e["from_node"] in G and e["to_node"] in G:
            G.add_edge(e["from_node"], e["to_node"], relation=e["relation"])
    return G, labels


def _compute_analytics(G: nx.DiGraph) -> dict:
    if G.number_of_nodes() == 0:
        return {"nodes": [], "summary": {"nodes": 0, "edges": 0}}

    pagerank = nx.pagerank(G, alpha=0.85) if G.number_of_edges() else {
        n: 1.0 / G.number_of_nodes() for n in G
    }
    betweenness = (
        nx.betweenness_centrality(G) if G.number_of_edges() and G.number_of_nodes() <= 800
        else {n: 0.0 for n in G}
    )
    communities: dict[str, int] = {}
    if G.number_of_nodes() > 1:
        undirected = G.to_undirected()
        for i, com in enumerate(
            nx.community.greedy_modularity_communities(undirected)
        ):
            for n in com:
                communities[n] = i

    nodes_out = [
        {
            "id": n,
            "label": G.nodes[n].get("label", n),
            "degree": G.in_degree(n) + G.out_degree(n),
            "in_degree": G.in_degree(n),
            "out_degree": G.out_degree(n),
            "pagerank": round(pagerank.get(n, 0.0), 8),
            "betweenness": round(betweenness.get(n, 0.0), 8),
            "community": communities.get(n),
        }
        for n in G.nodes
    ]
    nodes_out.sort(key=lambda x: x["pagerank"], reverse=True)
    return {
        "nodes": nodes_out,
        "summary": {
            "nodes": G.number_of_nodes(),
            "edges": G.number_of_edges(),
            "density": round(nx.density(G), 8),
            "communities": len(set(communities.values())) if communities else 1,
            "is_dag": nx.is_directed_acyclic_graph(G),
        },
    }


@router.get("/{gid}/analytics")
async def graph_analytics(gid: str, request: Request):
    _require_db()
    uid = await _require_user(request)
    await _visible_graph(gid, uid)
    G, _ = await _load_user_nx(gid)
    return await run_in_threadpool(_compute_analytics, G)


@router.get("/{gid}/path")
async def graph_shortest_path(gid: str, request: Request, frm: str, to: str):
    """Shortest path between two nodes, addressed by label or entity id."""
    _require_db()
    uid = await _require_user(request)
    await _visible_graph(gid, uid)

    G, labels = await _load_user_nx(gid)
    id_by_label = {label.lower(): nid for nid, label in labels.items()}
    src = id_by_label.get(frm.strip().lower()) or (
        frm if frm in G else id_by_label.get(norm(frm))
    )
    dst = id_by_label.get(to.strip().lower()) or (
        to if to in G else id_by_label.get(norm(to))
    )
    if not src or not dst:
        raise HTTPException(status_code=404, detail="Node not found in graph")

    def _path():
        try:
            return nx.shortest_path(G.to_undirected(), src, dst)
        except nx.NetworkXNoPath:
            return None

    path = await run_in_threadpool(_path)
    if not path:
        return {"path": [], "connected": False}
    hops = []
    for a, b in zip(path, path[1:]):
        if G.has_edge(a, b):
            relation = G.edges[a, b].get("relation", "linked_to")
        else:
            relation = G.edges[b, a].get("relation", "linked_to")
        hops.append({"from": labels[a], "to": labels[b], "relation": relation})
    return {
        "path": [{"id": n, "label": labels[n]} for n in path],
        "hops": hops,
        "connected": True,
    }
