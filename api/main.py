"""FastAPI chat backend for the knowledge graph visualization."""

import json
import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from graph_ops import get_graph, graph_explain, graph_path, graph_query
from llm import parse_intent, translate_text
from pydantic import BaseModel, Field
from sanitize import sanitize_input, validate_intent

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


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
    allow_origins=[
        "https://www.johnnykuo.com",
        "https://johnnykuo.com",
        "https://graph.johnnykuo.com",
    ],
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=500)


def sse_event(event: str, data: dict) -> str:
    """Format a Server-Sent Event."""
    return f"event: {event}\ndata: {json.dumps(data, ensure_ascii=False)}\n\n"


async def chat_stream(request: ChatRequest):
    """SSE generator for the chat pipeline."""
    # Step 1: Sanitize
    clean = sanitize_input(request.message)
    if not clean:
        yield sse_event("error", {"detail": "Invalid or empty input"})
        return

    # Step 2: Parse intent
    yield sse_event("status", {"status": "thinking"})

    raw_intent = await parse_intent(clean)
    intent = validate_intent(raw_intent)
    lang = raw_intent.get("lang", "en")

    logger.info(f"Intent: {intent}, lang: {lang}")

    # Step 3: Execute graph operation
    if intent["intent"] == "query":
        result = graph_query(intent["question"])
    elif intent["intent"] == "explain":
        result = graph_explain(intent["node"])
    elif intent["intent"] == "path":
        result = graph_path(intent["from"], intent["to"])
    else:
        greeting_words = {
            "hi", "hello", "hey", "yo", "sup",
            "greetings", "howdy", "hola", "嗨", "你好",
        }
        if clean.lower().strip().rstrip("!.?") in greeting_words:
            result = {
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
        else:
            result = {
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

    # Step 4: Translate if non-English
    if lang and lang != "en":
        yield sse_event("status", {"status": "translating"})
        result["text"] = await translate_text(result["text"], lang)

    yield sse_event("done", result)


@app.get("/api/health")
async def health():
    """Health check endpoint."""
    G = get_graph()
    return {
        "status": "ok",
        "nodes": G.number_of_nodes(),
        "edges": G.number_of_edges(),
    }


@app.post("/api/chat")
async def chat(request: ChatRequest):
    """SSE chat endpoint. Returns event stream with status updates and final result."""
    return StreamingResponse(
        chat_stream(request),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        },
    )
