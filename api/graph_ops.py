"""Graph operations: query, explain, path. Read-only against graph.json."""

import json
import logging
import re
from pathlib import Path

import networkx as nx
from networkx.readwrite import json_graph

logger = logging.getLogger(__name__)

GRAPH_PATH = Path(__file__).parent.parent / "graphify-out" / "graph.json"

_G: nx.MultiDiGraph | None = None


def get_graph() -> nx.MultiDiGraph:
    """Load graph once, cache globally."""
    global _G
    if _G is None:
        data = json.loads(GRAPH_PATH.read_text(encoding="utf-8"))
        _G = json_graph.node_link_graph(data, edges="links")
    return _G


def _find_node(G: nx.MultiDiGraph, term: str) -> str | None:
    """Find best matching node by label. Returns node id or None."""
    term_lower = term.lower()
    terms = [t for t in re.split(r"\s+", term_lower) if len(t) >= 2]

    scored = []
    for nid, ndata in G.nodes(data=True):
        label = (ndata.get("label") or "").lower()
        norm = (ndata.get("norm_label") or "").lower()
        # Exact match bonus
        if label == term_lower or norm == term_lower:
            return nid
        score = sum(1 for t in terms if t in label or t in norm)
        if score > 0:
            scored.append((score, len(label), nid))

    if not scored:
        return None

    scored.sort(key=lambda x: (-x[0], x[1]))
    return scored[0][2]


def _find_nodes(G: nx.MultiDiGraph, term: str, limit: int = 3) -> list[str]:
    """Find top N matching nodes."""
    term_lower = term.lower()
    terms = [t for t in re.split(r"\s+", term_lower) if len(t) >= 2]

    scored = []
    for nid, ndata in G.nodes(data=True):
        label = (ndata.get("label") or "").lower()
        norm = (ndata.get("norm_label") or "").lower()
        score = sum(1 for t in terms if t in label or t in norm)
        if score > 0:
            scored.append((score, nid))

    scored.sort(reverse=True)
    return [nid for _, nid in scored[:limit]]


def match_nodes_in_text(text: str, query_text: str = "") -> dict:
    """Find graph nodes mentioned in text by label matching.

    Returns dict with highlight_nodes (list of node IDs) and
    highlight_edges (list of [from, to] pairs between matched nodes).
    """
    G = get_graph()
    blob = f"{query_text} {text}".lower()
    matched_ids = set()

    for nid, ndata in G.nodes(data=True):
        label = (ndata.get("label") or "").strip()
        if not label:
            continue
        pattern = re.compile(
            r"(^|[^a-z0-9])\s*" + re.escape(label) + r"\s*([^a-z0-9]|$)", re.IGNORECASE
        )
        if pattern.search(blob):
            matched_ids.add(nid)
            continue
        for alias in (ndata.get("aliases") or []):
            alias = alias.strip()
            if not alias:
                continue
            ap = re.compile(
                r"(^|[^a-z0-9])\s*" + re.escape(alias) + r"\s*([^a-z0-9]|$)",
                re.IGNORECASE,
            )
            if ap.search(blob):
                matched_ids.add(nid)
                break

    if not matched_ids:
        logger.info("match_nodes_in_text: no entities found in response")
        return {"highlight_nodes": [], "highlight_edges": []}

    edge_set = set()
    highlight_edges = []
    for u, v in G.edges():
        if u in matched_ids and v in matched_ids:
            key = (u, v) if u <= v else (v, u)
            if key not in edge_set:
                edge_set.add(key)
                highlight_edges.append([u, v])

    logger.info(
        f"match_nodes_in_text: {len(matched_ids)} nodes, "
        f"{len(highlight_edges)} edges"
    )
    return {
        "highlight_nodes": list(matched_ids),
        "highlight_edges": highlight_edges,
    }


def graph_query(question: str) -> dict:
    """BFS traversal from best-matching nodes. Returns subgraph + summary."""
    G = get_graph()
    start_nodes = _find_nodes(G, question, limit=3)

    if not start_nodes:
        return {
            "type": "query",
            "text": f"No nodes found matching '{question}'. Try a different term.",
            "highlight_nodes": [],
            "highlight_edges": [],
            "primary_node": None,
        }

    start_labels = [G.nodes[n].get("label", n) for n in start_nodes]
    logger.info(f"graph_query: question={question!r}, matched_nodes={start_labels}")

    # BFS up to depth 3
    subgraph_nodes = set(start_nodes)
    frontier = set(start_nodes)
    subgraph_edges = []

    for _ in range(3):
        next_frontier = set()
        for n in frontier:
            # Bidirectional traversal
            for neighbor in set(G.predecessors(n)) | set(G.successors(n)):
                if neighbor not in subgraph_nodes:
                    next_frontier.add(neighbor)
                    subgraph_edges.append((n, neighbor))
        subgraph_nodes.update(next_frontier)
        frontier = next_frontier

    # Build response
    start_labels = [G.nodes[n].get("label", n) for n in start_nodes]
    node_summaries = []
    for nid in sorted(subgraph_nodes, key=lambda n: G.degree(n), reverse=True)[:20]:
        ndata = G.nodes[nid]
        label = ndata.get("label", nid)
        desc = ndata.get("description", "")
        snippet = desc[:200] + "..." if len(desc) > 200 else desc
        node_summaries.append(f"- **{label}** (degree {G.degree(nid)}): {snippet}")

    text_lines = [
        f'Query: "{question}"',
        f"Starting from: {', '.join(start_labels)}",
        f"Found {len(subgraph_nodes)} nodes, {len(subgraph_edges)} edges",
        "",
        "Key nodes:",
        *node_summaries[:15],
    ]

    # Filter edges to only those within the subgraph
    sub_set = subgraph_nodes
    highlight_edges = [
        [u, v] for u, v in subgraph_edges if u in sub_set and v in sub_set
    ][:200]

    return {
        "type": "query",
        "text": "\n".join(text_lines),
        "highlight_nodes": list(subgraph_nodes)[:200],
        "highlight_edges": highlight_edges,
        "primary_node": start_nodes[0],
    }


def graph_explain(node_name: str) -> dict:
    """Explain a node: show all connections with context."""
    G = get_graph()
    nid = _find_node(G, node_name)

    if not nid:
        return {
            "type": "explain",
            "text": f"No node found matching '{node_name}'. Try a different name.",
            "highlight_nodes": [],
            "highlight_edges": [],
            "primary_node": None,
        }

    ndata = G.nodes[nid]
    label = ndata.get("label", nid)
    logger.info(f"graph_explain: requested={node_name!r}, matched_node={label!r}")
    desc = ndata.get("description", "")
    source = ndata.get("source_file", "")
    community = ndata.get("community", "")
    degree = G.degree(nid)

    # Collect all connections
    connections = []
    highlight_edges = []
    neighbor_ids = []

    # Outgoing
    for _, target, edata in G.out_edges(nid, data=True):
        tlabel = G.nodes[target].get("label", target)
        rel = edata.get("relation", "related_to")
        conf = edata.get("confidence", "")
        ctx = edata.get("context", "")
        snippet = ctx[:150] + "..." if len(ctx) > 150 else ctx
        connections.append(f"- → **{tlabel}** [{rel}] ({conf}) {snippet}")
        highlight_edges.append([nid, target])
        neighbor_ids.append(target)

    # Incoming
    for source_nid, _, edata in G.in_edges(nid, data=True):
        slabel = G.nodes[source_nid].get("label", source_nid)
        rel = edata.get("relation", "related_to")
        conf = edata.get("confidence", "")
        connections.append(f"- ← **{slabel}** [{rel}] ({conf})")
        highlight_edges.append([source_nid, nid])
        neighbor_ids.append(source_nid)

    text_lines = [
        f"**{label}**",
        f"Source: {source}" if source else "",
        f"Community: {community} | Degree: {degree}",
        "",
        desc[:800] + "..." if len(desc) > 800 else desc,
        "",
        f"Connections ({len(connections)}):",
        *connections[:30],
    ]

    highlight_node_ids = [nid] + list(set(neighbor_ids))[:50]

    return {
        "type": "explain",
        "text": "\n".join(line for line in text_lines if line is not None),
        "highlight_nodes": highlight_node_ids,
        "highlight_edges": highlight_edges[:100],
        "primary_node": nid,
    }


def graph_path(from_name: str, to_name: str) -> dict:
    """Find shortest path between two nodes."""
    G = get_graph()
    src = _find_node(G, from_name)
    tgt = _find_node(G, to_name)

    if not src:
        return {
            "type": "path",
            "text": f"Could not find node matching '{from_name}'.",
            "highlight_nodes": [],
            "highlight_edges": [],
            "primary_node": None,
        }
    if not tgt:
        return {
            "type": "path",
            "text": f"Could not find node matching '{to_name}'.",
            "highlight_nodes": [],
            "highlight_edges": [],
            "primary_node": None,
        }

    src_label = G.nodes[src].get("label", src)
    tgt_label = G.nodes[tgt].get("label", tgt)
    logger.info(f"graph_path: from={src_label!r}, to={tgt_label!r}")

    try:
        # Try directed first, then undirected
        try:
            path = nx.shortest_path(G, src, tgt)
        except nx.NetworkXNoPath:
            path = nx.shortest_path(G.to_undirected(), src, tgt)

        path_lines = []
        highlight_edges = []
        for i, nid in enumerate(path):
            label = G.nodes[nid].get("label", nid)
            if i < len(path) - 1:
                next_nid = path[i + 1]
                # Try to find edge data
                edge_data = G.get_edge_data(nid, next_nid) or G.get_edge_data(
                    next_nid, nid
                )
                if edge_data:
                    first_edge = (
                        next(iter(edge_data.values()))
                        if isinstance(edge_data, dict)
                        else edge_data
                    )
                    if isinstance(first_edge, dict):
                        rel = first_edge.get("relation", "related_to")
                        conf = first_edge.get("confidence", "")
                    else:
                        rel = "related_to"
                        conf = ""
                    path_lines.append(f"{i + 1}. **{label}** --[{rel}]--> ({conf})")
                else:
                    path_lines.append(f"{i + 1}. **{label}**")
                highlight_edges.append([nid, next_nid])
            else:
                path_lines.append(f"{i + 1}. **{label}**")

        text_lines = [
            f"Path from **{src_label}** to **{tgt_label}** ({len(path) - 1} hops):",
            "",
            *path_lines,
        ]

        return {
            "type": "path",
            "text": "\n".join(text_lines),
            "highlight_nodes": path,
            "highlight_edges": highlight_edges,
            "primary_node": src,
        }

    except nx.NetworkXNoPath:
        src_label = G.nodes[src].get("label", src)
        tgt_label = G.nodes[tgt].get("label", tgt)
        return {
            "type": "path",
            "text": f"No path found between '{src_label}' and '{tgt_label}'.",
            "highlight_nodes": [src, tgt],
            "highlight_edges": [],
            "primary_node": src,
        }
