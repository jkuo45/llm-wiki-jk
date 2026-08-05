"""FastAPI chat backend for the knowledge graph visualization."""

import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from sanitize import sanitize_input, validate_intent
from llm import parse_intent
from graph_ops import graph_query, graph_explain, graph_path, get_graph

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Load graph at startup."""
    G = get_graph()
    logger.info(f"Graph loaded: {G.number_of_nodes()} nodes, {G.number_of_edges()} edges")
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
    ],
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=500)


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


@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """Process a chat message. Sanitize -> LLM parse -> graph operation."""
    # Step 1: Sanitize input
    clean = sanitize_input(request.message)
    if not clean:
        raise HTTPException(status_code=400, detail="Invalid or empty input")

    # Step 2: Parse intent via opencode
    raw_intent = await parse_intent(clean)
    intent = validate_intent(raw_intent)

    logger.info(f"Intent: {intent}")

    # Step 3: Execute graph operation
    if intent["intent"] == "query":
        result = graph_query(intent["question"])
    elif intent["intent"] == "explain":
        result = graph_explain(intent["node"])
    elif intent["intent"] == "path":
        result = graph_path(intent["from"], intent["to"])
    else:
        # Check if it's a greeting
        greeting_words = {"hi", "hello", "hey", "yo", "sup", "greetings", "howdy", "hola", "嗨", "你好"}
        if clean.lower().strip().rstrip("!.?") in greeting_words:
            result = {
                "type": "greeting",
                "text": (
                    "Hey! I'm your knowledge graph assistant. Ask me anything about the biomedical wiki:\n\n"
                    "- **\"What is Autophagy?\"** — explain a concept\n"
                    "- **\"How does Rapamycin relate to mTOR?\"** — find a path between two concepts\n"
                    "- **\"Key nodes in longevity research\"** — query the graph\n"
                    "- **\"Explain SASP\"** — deep dive on a node\n\n"
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
                    "- **\"What is Autophagy?\"** — explain a concept\n"
                    "- **\"How does Rapamycin relate to mTOR?\"** — find a path\n"
                    "- **\"Key nodes in longevity research\"** — query the graph"
                ),
                "highlight_nodes": [],
                "highlight_edges": [],
            }

    return ChatResponse(**result)
