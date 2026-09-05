# api/ — architecture

The FastAPI adapter between the graph UI and a headless `opencode serve`, plus
a small Supabase-backed admin surface. The package is organised into clean
architecture layers so each module has one job and dependences flow inward.

## Layers

```
routers/   →  domain/       (framework-free services)
routers/   →  gateways/     (external I/O adapters)
domain/    →  stdlib + networkx only
gateways/  →  stdlib + httpx only
main.py    →  wires everything together (composition root, middleware)
```

### `routers/` — HTTP entry points
The only place FastAPI decorators and pydantic request models live. Each
endpoint sanitises input → calls a domain/gateway service → maps errors to
HTTP status codes / SSE payloads. Nothing here performs real work.

| File | Surface |
| --- | --- |
| `prompts.py` | `/v1/health`, `/v1/intent`, `/v1/session/reset`, `/v1/execute/stream`, session registry + SSE helpers |
| `notes.py` | `/v1/notes` read-only gallery + image serving, annotations/metadata (no live uploads) |
| `flags.py` | `/v1/flags` content-curation overlay (GET public, POST super-admin) |

### `domain/` — pure services
Framework-free, unit-testable without HTTP or Supabase.

| File | Responsibility |
| --- | --- |
| `graph_ops.py` | networkx query/explain/path/analyze over `graphify-out/graph.json`, entity matcher, index warm-up |
| `wiki.py` | wiki/task note path resolution + description enrichment |
| `sanitize.py` | input validation + normalisation helpers |

### `gateways/` — infrastructure adapters
All external I/O, each owning its client lifecycle (`close_client()`).

| File | Responsibility |
| --- | --- |
| `llm.py` | opencode client: sessions, SSE streams, intent parsing, translation |
| `auth.py` | Supabase token verification (super-admin gate + any-user id lookup) |
| `db.py` | PostgREST persistence for the flags router (`content_flags`) |

### `main.py` — composition root
Builds the app, registers the middleware (origin → auth → rate-limit), CORS,
the lifespan (graph load, opencode health, index warm-up, session reaper), and
mounts the routers. No endpoint logic.

### `config.py` — settings
Reads environment variables once (`ALLOWED_ORIGINS`, session TTLs,
`HEARTBEAT_SECONDS`, …) so modules import constants instead of re-parsing
`os.environ`.

## Deliberate simplifications

- **No `ports/` layer.** Every gateway has exactly one implementation and this
  is a single-deployment adapter; abstract interfaces would be speculative.
  The module boundary is the interface. If a need for a second provider
  (e.g. an alternate LLM backend) appears, introduce `ports/` then.
- **No service objects.** The routers are thin passthroughs over PostgREST;
  a separate "service" module for a handful of DB lines would be ceremony.