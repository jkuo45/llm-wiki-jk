"""Graph operations: query, explain, path, analyze. Read-only against graph.json."""

import json
import logging
import re
from pathlib import Path

import networkx as nx
from networkx.readwrite import json_graph

from .wiki import enrich_description

logger = logging.getLogger(__name__)

GRAPH_PATH = Path(__file__).parent.parent.parent / "graphify-out" / "graph.json"

# Canonical combined (triples + wiki) web dataset — the default UI dataset.
# Health reports these counts; graph ops still run on the triples GRAPH_PATH
# above (typed relations). See scripts/combined/build.py.
DATA_DIR = Path(__file__).parent.parent.parent / "web" / "public" / "data"
COMBINED_NODES_PATH = DATA_DIR / "nodes.json"
COMBINED_EDGES_PATH = DATA_DIR / "edges.json"

_G: nx.MultiDiGraph | None = None

# mtime-keyed cache so /v1/health stats files instead of re-parsing ~24MB
# of JSON on every call. Reset in tests via monkeypatch.
_COMBINED_CACHE: dict = {}


def get_graph() -> nx.MultiDiGraph:
    """Load graph once, cache globally."""
    global _G
    if _G is None:
        data = json.loads(GRAPH_PATH.read_text(encoding="utf-8"))
        _G = json_graph.node_link_graph(data, edges="links")
    return _G


def _count_json_array(path: Path) -> int:
    """Count top-level items in a JSON array file."""
    return len(json.loads(path.read_text(encoding="utf-8")))


def get_combined_counts() -> dict[str, int | None]:
    """Return combined node/edge counts from the canonical web dataset.

    Results are cached by file mtime; missing/unreadable files yield None
    so callers can fall back to the triples graph counts.
    """
    try:
        n_stat = COMBINED_NODES_PATH.stat()
        e_stat = COMBINED_EDGES_PATH.stat()
    except OSError:
        return {"nodes": None, "edges": None}
    key = (n_stat.st_mtime_ns, n_stat.st_size, e_stat.st_mtime_ns, e_stat.st_size)
    if _COMBINED_CACHE.get("key") == key:
        return {"nodes": _COMBINED_CACHE["nodes"], "edges": _COMBINED_CACHE["edges"]}
    try:
        nodes = _count_json_array(COMBINED_NODES_PATH)
        edges = _count_json_array(COMBINED_EDGES_PATH)
    except (OSError, ValueError):
        logger.warning("combined counts unreadable; falling back to triples graph")
        return {"nodes": None, "edges": None}
    _COMBINED_CACHE.update({"key": key, "nodes": nodes, "edges": edges})
    return {"nodes": nodes, "edges": edges}


# --- Precomputed, graph-global indexes ---------------------------------------
# Betweenness/closeness/clustering/pagerank are deterministic for a given graph
# yet graph_analyze() used to recompute all four on EVERY request (~27s of pure
# Python on the 2.6k-node graph). We compute them once at startup (or lazily,
# thread-safe) and cache the per-node maps. analyze() then just looks them up.
_METRICS_CACHE: dict[str, dict[str, float]] | None = None

# match_nodes_in_text() previously compiled one regex per node + alias on every
# call (~1.2s, thrashing Python's 512-entry regex cache). We build ONE
# alternation regex once and map matched text back to a node id.
_MATCHER: re.Pattern | None = None
_NAME_TO_NODE: dict[str, str] | None = None


def _compute_metrics(G: nx.MultiDiGraph) -> dict[str, dict[str, float]]:
    """Graph-global centrality metrics, computed once.

    Betweenness is sampled (k=500) — full O(VE) Brandes is the dominant cost,
    and the sampled estimate is plenty for the ranking/display this feeds.
    """
    U = G.to_undirected()
    k = min(500, len(U))
    return {
        "betweenness": nx.betweenness_centrality(U, k=k) if k else {},
        "closeness": nx.closeness_centrality(U),
        "clustering": nx.clustering(U),
        "pagerank": nx.pagerank(U),
    }


def _build_matcher(G: nx.MultiDiGraph) -> None:
    """Compile one alternation regex over every node label + alias."""
    global _MATCHER, _NAME_TO_NODE
    name_to_node: dict[str, str] = {}
    alts: list[str] = []
    for nid, ndata in G.nodes(data=True):
        names = [ndata.get("label", "") or ""] + list(ndata.get("aliases") or [])
        for n in names:
            n = (n or "").strip()
            if not n:
                continue
            key = n.lower()
            if key not in name_to_node:
                name_to_node[key] = nid
                alts.append(re.escape(n))
    # Longest alternatives first so "NAD+" wins over "NAD" at a shared offset.
    alts.sort(key=len, reverse=True)
    _MATCHER = re.compile(
        r"(?<![a-z0-9])(?:" + "|".join(alts) + r")(?![a-z0-9])", re.IGNORECASE
    )
    _NAME_TO_NODE = name_to_node


def warm_index() -> None:
    """Build the metric cache and entity matcher. Idempotent; safe to call from
    a background thread at startup. Falls back gracefully on metric errors so a
    partial failure never leaves analyze() broken (it recomputes inline)."""
    global _METRICS_CACHE
    G = get_graph()
    try:
        _METRICS_CACHE = _compute_metrics(G)
    except Exception as e:  # noqa: BLE001 - inline fallback covers this
        logger.warning(f"graph metric warm failed: {e}")
    try:
        _build_matcher(G)
    except Exception as e:  # noqa: BLE001 - lazy rebuild on first use
        logger.warning(f"entity matcher warm failed: {e}")


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
    if _MATCHER is None:
        _build_matcher(G)
    blob = f"{query_text} {text}".lower()
    matched_ids = set()

    if _MATCHER is not None and _NAME_TO_NODE is not None:
        for m in _MATCHER.finditer(blob):
            nid = _NAME_TO_NODE.get(m.group(0).lower())
            if nid:
                matched_ids.add(nid)
    else:  # pragma: no cover - only when matcher build failed outright
        for nid, ndata in G.nodes(data=True):
            label = (ndata.get("label") or "").strip()
            if not label:
                continue
            pattern = re.compile(
                r"(^|[^a-z0-9])\s*" + re.escape(label) + r"\s*([^a-z0-9]|$)",
                re.IGNORECASE,
            )
            if pattern.search(blob):
                matched_ids.add(nid)
                continue
            for alias in ndata.get("aliases") or []:
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
        f"match_nodes_in_text: {len(matched_ids)} nodes, {len(highlight_edges)} edges"
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
    enriched = enrich_description(nid, label, (ndata.get("description", "") or ""))
    desc = enriched["description"]
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
        "wiki_source": enriched["wiki_source"],
        "task_outputs": enriched["task_outputs"],
    }


def _edge_meta(G: nx.MultiDiGraph, a: str, b: str) -> tuple[str, str]:
    """Return (relation, confidence) for the first edge between a and b."""
    edge_data = G.get_edge_data(a, b) or G.get_edge_data(b, a)
    if not edge_data:
        return "", ""
    # graph.json is a DiGraph (multigraph: false), so get_edge_data returns the
    # attribute dict directly. A MultiDiGraph instead nests attr dicts under edge
    # keys. Handle both so the real relation is returned rather than "related_to".
    first_edge = (
        next(iter(edge_data.values())) if isinstance(G, nx.MultiDiGraph) else edge_data
    )
    if isinstance(first_edge, dict):
        return first_edge.get("relation", "related_to"), first_edge.get(
            "confidence", ""
        )
    return "related_to", ""


def _shortest_path(G: nx.MultiDiGraph, src: str, tgt: str) -> list[str]:
    """Directed shortest path, falling back to the undirected view."""
    try:
        return nx.shortest_path(G, src, tgt)
    except nx.NetworkXNoPath:
        return nx.shortest_path(G.to_undirected(), src, tgt)


def _hop_lines(
    G: nx.MultiDiGraph, path: list[str]
) -> tuple[list[str], list[list[str]]]:
    """Render a node chain as numbered hop lines plus its edge pairs."""
    lines: list[str] = []
    edges: list[list[str]] = []
    for i, nid in enumerate(path):
        label = G.nodes[nid].get("label", nid)
        if i == len(path) - 1:
            lines.append(f"{i + 1}. **{label}**")
            continue
        next_nid = path[i + 1]
        rel, conf = _edge_meta(G, nid, next_nid)
        if rel:
            lines.append(f"{i + 1}. **{label}** --[{rel}]--> ({conf})")
        else:
            lines.append(f"{i + 1}. **{label}**")
        edges.append([nid, next_nid])
    return lines, edges


def graph_path(waypoints: list[str]) -> dict:
    """Find the shortest route through two or more waypoint nodes.

    A two-waypoint call finds a single shortest path; three or more waypoints
    chain a shortest path per consecutive pair (each leg reported separately,
    unconnected legs noted inline). This subsumes the old multi-hop "trace" op.
    """
    G = get_graph()
    terms = [w.strip() for w in (waypoints or []) if isinstance(w, str) and w.strip()]
    if len(terms) < 2:
        return {
            "type": "path",
            "text": "A path needs at least two concepts, e.g. "
            '"Path from NAD+ to SIRT1" or "Path from CD38 via NAD+ to SIRT1".',
            "highlight_nodes": [],
            "highlight_edges": [],
            "primary_node": None,
        }

    resolved: list[str] = []
    missing: list[str] = []
    for term in terms:
        nid = _find_node(G, term)
        if nid is None:
            missing.append(term)
        elif not resolved or resolved[-1] != nid:
            resolved.append(nid)

    if len(resolved) < 2:
        unmatched = ", ".join(f"'{m}'" for m in missing) or "the given concepts"
        return {
            "type": "path",
            "text": f"Could not find enough nodes matching {unmatched}.",
            "highlight_nodes": [],
            "highlight_edges": [],
            "primary_node": None,
        }

    labels = [G.nodes[nid].get("label", nid) for nid in resolved]
    logger.info(f"graph_path: {' -> '.join(labels)}")

    highlight_nodes: list[str] = []
    highlight_edges: list[list[str]] = []
    seen: set[str] = set()
    body: list[str] = []
    total_hops = 0
    broken = 0

    for leg, (src, tgt) in enumerate(zip(resolved, resolved[1:]), start=1):
        src_label = G.nodes[src].get("label", src)
        tgt_label = G.nodes[tgt].get("label", tgt)
        try:
            path = _shortest_path(G, src, tgt)
        except nx.NetworkXNoPath:
            broken += 1
            body.append(f"**Leg {leg} — {src_label} → {tgt_label}**")
            body.append("_No path found between these two concepts._")
            body.append("")
            for nid in (src, tgt):
                if nid not in seen:
                    seen.add(nid)
                    highlight_nodes.append(nid)
            continue

        lines, edges = _hop_lines(G, path)
        total_hops += len(path) - 1
        body.append(f"**Leg {leg} — {src_label} → {tgt_label}** ({len(path) - 1} hops)")
        body.extend(lines)
        body.append("")
        highlight_edges.extend(edges)
        for nid in path:
            if nid not in seen:
                seen.add(nid)
                highlight_nodes.append(nid)

    legs = len(resolved) - 1
    header = "Path: " + " → ".join(f"**{lbl}**" for lbl in labels)
    header += f" ({total_hops} hops across {legs} leg{'s' if legs != 1 else ''})"

    notes = []
    if missing:
        notes.append("Unresolved concepts: " + ", ".join(f"'{m}'" for m in missing))
    if broken:
        notes.append(f"{broken} leg(s) had no connecting path.")

    text_lines = [header, ""] + body
    if notes:
        text_lines.append("_" + " ".join(notes) + "_")

    return {
        "type": "path",
        "text": "\n".join(text_lines).rstrip(),
        "highlight_nodes": highlight_nodes,
        "highlight_edges": highlight_edges,
        "primary_node": resolved[0],
    }


def _analyze_error(text: str) -> dict:
    return {
        "type": "analyze",
        "text": text,
        "highlight_nodes": [],
        "highlight_edges": [],
        "primary_node": None,
    }


def graph_analyze(nodes: list[str], analysis_text: str = "") -> dict:
    """Custom, user-described analysis of one or more nodes.

    Resolves the named nodes, computes networkx metrics (degree, in/out degree,
    betweenness, closeness, clustering, pagerank) plus pairwise shortest paths,
    distances and common neighbours, and builds an induced neighbourhood
    subgraph for highlighting / export. The LLM narrative is layered on in
    `api/main.py`; this function returns the computed summary + structured
    `analysis_data` the client downloads.
    """
    G = get_graph()
    terms = [w.strip() for w in (nodes or []) if isinstance(w, str) and w.strip()]
    resolved: list[str] = []
    missing: list[str] = []
    for term in terms:
        nid = _find_node(G, term)
        if nid is None:
            missing.append(term)
        elif not resolved or resolved[-1] != nid:
            resolved.append(nid)

    if not resolved:
        unmatched = ", ".join(f"'{m}'" for m in missing) or "the given nodes"
        return _analyze_error(f"Could not find any nodes matching {unmatched}.")

    labels = [G.nodes[nid].get("label", nid) for nid in resolved]
    logger.info(f"graph_analyze: {' + '.join(labels)}")

    # Undirected view for pairwise common-neighbour / shortest-path work below.
    U = G.to_undirected()

    # Graph-global centrality metrics, cached at startup (see warm_index()).
    # Recompute inline only if the cache is missing (e.g. server warmed down).
    between = _METRICS_CACHE.get("betweenness") if _METRICS_CACHE else None
    close = _METRICS_CACHE.get("closeness") if _METRICS_CACHE else None
    cluster = _METRICS_CACHE.get("clustering") if _METRICS_CACHE else None
    pr = _METRICS_CACHE.get("pagerank") if _METRICS_CACHE else None
    if between is None or close is None or cluster is None or pr is None:
        logger.warning("graph_analyze: metrics cache cold; computing inline")
        try:
            between = nx.betweenness_centrality(U, k=min(500, len(U)))
            close = nx.closeness_centrality(U)
            cluster = nx.clustering(U)
            pr = nx.pagerank(U)
        except Exception as e:  # noqa: BLE001 - fall back to zeros if a metric fails
            logger.warning(f"graph_analyze metrics partial failure: {e}")
            between = close = cluster = pr = {}

    node_rows = []
    for nid in resolved:
        nd = G.nodes[nid]
        enriched = enrich_description(
            nid, nd.get("label", nid), (nd.get("description", "") or "")
        )
        node_rows.append({
            "id": nid,
            "label": nd.get("label", nid),
            "community": nd.get("community", ""),
            "degree": G.degree(nid),
            "in_degree": G.in_degree(nid),
            "out_degree": G.out_degree(nid),
            "betweenness": round(between.get(nid, 0.0), 6),
            "closeness": round(close.get(nid, 0.0), 6),
            "clustering": round(cluster.get(nid, 0.0), 6),
            "pagerank": round(pr.get(nid, 0.0), 6),
            "description": enriched["description"],
            "wiki_source": enriched["wiki_source"],
            "task_outputs": enriched["task_outputs"],
        })

    pair_rows = []
    for i in range(len(resolved)):
        for j in range(i + 1, len(resolved)):
            a, b = resolved[i], resolved[j]
            try:
                path = _shortest_path(G, a, b)
                distance = len(path) - 1
            except nx.NetworkXNoPath:
                path, distance = [], None
            try:
                cn = list(nx.common_neighbors(U, a, b))
            except Exception:
                cn = []
            denom = U.degree(a) + U.degree(b)
            jac = (len(cn) / denom) if denom else 0.0
            pair_rows.append({
                "a": G.nodes[a].get("label", a),
                "b": G.nodes[b].get("label", b),
                "distance": distance,
                "common_neighbor_count": len(cn),
                "jaccard": round(jac, 4),
                "common_neighbors": [G.nodes[c].get("label", c) for c in cn][:20],
                "path": [G.nodes[p].get("label", p) for p in path],
            })

    # Induced neighbourhood (BFS depth 2) for highlight + PNG export.
    subgraph_nodes: set[str] = set(resolved)
    frontier: set[str] = set(resolved)
    subgraph_edges: list[tuple[str, str]] = []
    for _ in range(2):
        nxt: set[str] = set()
        for n in frontier:
            for nb in set(G.predecessors(n)) | set(G.successors(n)):
                if nb not in subgraph_nodes:
                    nxt.add(nb)
                    subgraph_edges.append((n, nb))
        subgraph_nodes.update(nxt)
        frontier = nxt
    sub_set = subgraph_nodes
    highlight_edges = [
        [u, v] for u, v in subgraph_edges if u in sub_set and v in sub_set
    ][:200]

    summary_lines = [f"Analysis of {len(resolved)} node(s): " + ", ".join(labels)]
    if analysis_text:
        summary_lines.append(f"Request: {analysis_text}")
    if missing:
        summary_lines.append(f"Unresolved: {', '.join(missing)}")
    summary_lines += ["", "Nodes:"]
    for r in node_rows:
        summary_lines.append(
            f"- **{r['label']}** (deg {r['degree']}, in {r['in_degree']}, "
            f"out {r['out_degree']}, betweenness {r['betweenness']}, "
            f"closeness {r['closeness']}, pagerank {r['pagerank']:.4f})"
        )
    if pair_rows:
        summary_lines += ["", "Pairwise:"]
        for p in pair_rows:
            dist = p["distance"] if p["distance"] is not None else "no path"
            summary_lines.append(
                f"- **{p['a']}** ↔ **{p['b']}**: distance {dist}, "
                f"{p['common_neighbor_count']} common neighbor(s)"
            )

    analysis_data = {
        "query": analysis_text,
        "nodes": node_rows,
        "pairs": pair_rows,
        "subgraph": {
            "nodes": list(subgraph_nodes)[:200],
            "edges": [
                [u, v] for u, v in subgraph_edges if u in sub_set and v in sub_set
            ][:200],
        },
        "primary_node": resolved[0],
    }

    return {
        "type": "analyze",
        "text": "\n".join(summary_lines),
        "highlight_nodes": list(subgraph_nodes)[:200],
        "highlight_edges": highlight_edges,
        "primary_node": resolved[0],
        "analysis_data": analysis_data,
    }
