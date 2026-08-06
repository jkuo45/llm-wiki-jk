"""FastAPI chat backend for the knowledge graph visualization."""

import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from graph_ops import get_graph, graph_explain, graph_path, graph_query
from llm import answer_question, parse_intent, translate_text
from pydantic import BaseModel, Field
from sanitize import sanitize_input, validate_intent

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

ALLOWED_ORIGINS = {
    "https://www.johnnykuo.com",
    "https://johnnykuo.com",
    "https://graph.johnnykuo.com",
}


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Load graph at startup."""
    G = get_graph()
    logger.info(
        f"Graph loaded: {G.number_of_nodes()} nodes, {G.number_of_edges()} edges"
    )
    yield


app = FastAPI(
    title="Knowledge Graph Chat API",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=sorted(ALLOWED_ORIGINS),
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


@app.middleware("http")
async def origin_gate(request: Request, call_next):
    """Reject requests that did not originate from an allowed UI origin."""
    if request.url.path == "/api/health":
        return await call_next(request)

    origin = request.headers.get("origin")
    referer = request.headers.get("referer", "")

    # In-origin requests carry a browser Origin header from the allowlisted UI.
    # If Origin is present it must be allowed. Otherwise fall back to Referer.
    if origin:
        if origin in ALLOWED_ORIGINS:
            return await call_next(request)
    elif referer.startswith("http") and any(
        referer.startswith(u) for u in ALLOWED_ORIGINS
    ):
        return await call_next(request)

    logger.warning(f"Blocked request from origin={origin!r} referer={referer!r}")
    return JSONResponse(status_code=403, content={"detail": "Origin not allowed"})


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=500)


class IntentResponse(BaseModel):
    intent: str
    lang: str = "en"
    question: str | None = None
    node: str | None = None
    from_node: str | None = None
    to_node: str | None = None
    message: str | None = None


class ExecuteRequest(BaseModel):
    intent: str
    lang: str = "en"
    question: str | None = None
    node: str | None = None
    from_node: str | None = None
    to_node: str | None = None
    message: str | None = None


class ChatResponse(BaseModel):
    type: str
    text: str
    highlight_nodes: list[str] = []
    highlight_edges: list[list[str]] = []


@app.get("/api/health")
async def health():
    """Health check endpoint."""
    G = get_graph()
    return {
        "status": "ok",
        "nodes": G.number_of_nodes(),
        "edges": G.number_of_edges(),
    }


@app.post("/api/intent", response_model=IntentResponse)
async def intent_endpoint(request: ChatRequest):
    """Phase 1: Detect whether user explicitly asked for a graphify op, else chat."""
    clean = sanitize_input(request.message)
    if not clean:
        raise HTTPException(status_code=400, detail="Invalid or empty input")

    # Check for greeting
    greeting_words = {
        "hi", "hello", "hey", "yo", "sup",
        "greetings", "howdy", "hola", "嗨", "你好",
    }
    is_greeting = clean.lower().strip().rstrip("!.?") in greeting_words
    if is_greeting:
        return IntentResponse(intent="greeting", lang="en")

    # Only use graph_ops when the user explicitly requests a graphify op
    lowered = clean.lower()
    is_graphify_op = "graphify" in lowered and any(
        op in lowered for op in ("explain", "path", "query")
    )

    if is_graphify_op:
        raw_intent = await parse_intent(clean)
        intent = validate_intent(raw_intent)
        lang = raw_intent.get("lang", "en")
        logger.info(f"Graphify intent: {intent}, lang: {lang}")
        return IntentResponse(
            intent=intent.get("intent", "unknown"),
            lang=lang,
            question=intent.get("question"),
            node=intent.get("node"),
            from_node=intent.get("from"),
            to_node=intent.get("to"),
        )

    # Otherwise let opencode handle the query directly
    return IntentResponse(intent="chat", lang="en", message=clean)


def _greeting_result() -> dict:
    return {
        "type": "greeting",
        "text": (
            "Hey! I'm your knowledge graph assistant. Ask me anything about the biomedical wiki:\n\n"
            '- **"What is Autophagy?"** — explain a concept\n'
            '- **"How does Rapamycin relate to mTOR?"** — find a path between two concepts\n'
            '- **"Key nodes in longevity research"** — query the graph\n'
            '- **"Explain SASP"** — deep dive on a node\n\n'
            "Type a question to get started!"
        ),
        "highlight_nodes": [],
        "highlight_edges": [],
    }


def _unknown_result() -> dict:
    return {
        "type": "unknown",
        "text": (
            "I couldn't understand your question. Try one of:\n\n"
            '- **"What is Autophagy?"** — explain a concept\n'
            '- **"How does Rapamycin relate to mTOR?"** — find a path\n'
            '- **"Key nodes in longevity research"** — query the graph'
        ),
        "highlight_nodes": [],
        "highlight_edges": [],
    }


@app.post("/api/execute", response_model=ChatResponse)
async def execute_endpoint(request: ExecuteRequest):
    """Phase 2: Run graph op (if explicitly requested) or opencode chat."""
    if request.intent == "greeting":
        result = _greeting_result()
    elif request.intent == "chat" and request.message:
        text = await answer_question(request.message)
        result = {
            "type": "chat",
            "text": text,
            "highlight_nodes": [],
            "highlight_edges": [],
        }
    elif request.intent == "query" and request.question:
        result = graph_query(request.question)
    elif request.intent == "explain" and request.node:
        result = graph_explain(request.node)
    elif request.intent == "path" and request.from_node and request.to_node:
        result = graph_path(request.from_node, request.to_node)
    else:
        result = _unknown_result()

    # Translate graph results if non-English
    if request.lang and request.lang != "en" and request.intent in ("query", "explain", "path"):
        result["text"] = await translate_text(result["text"], request.lang)

    return ChatResponse(**result)
