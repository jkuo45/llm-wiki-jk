# Deployment runbook — knowledge graph chat backend

Serves `api.johnnykuo.com`, the backend for the chat panel in
`graphify-out/three-graph.html`.

## Architecture

```
Browser (graph.johnnykuo.com)
    │  POST /api/intent            JSON
    │  POST /api/execute/stream    SSE
    ▼
Cloudflare edge  ──── outbound tunnel ────┐
                                          ▼
                          cloudflared (server)
                                          │
                                          ▼
                          FastAPI adapter  127.0.0.1:8000
                            ├─ api/graph_ops.py   networkx over graph.json
                            ├─ session registry   browser tab → opencode session
                            └─ HTTP
                                          ▼
                          opencode serve   127.0.0.1:4096   (basic auth)
                            └─ agent: wiki-chat (bash/edit/write disabled)
```

Two invariants:

1. **`opencode serve` never appears in the tunnel ingress.** It exposes
   filesystem and shell tools. Loopback only.
2. **`disableChunkedEncoding` stays `false`.** Otherwise cloudflared buffers the
   whole SSE body and the chat appears to hang, then dumps all at once.

---

## Part 1 — Server install

Runs on the server, not the laptop. Assumes Debian/Ubuntu with systemd.

```bash
sudo mkdir -p /srv && sudo git clone <repo-url> /srv/llm-wiki-jk
cd /srv/llm-wiki-jk
sudo ./deploy/install.sh
```

`/srv` is a convention, not a requirement — nothing serves it automatically.
The script installs from whatever checkout it lives in. To use a different
path:

```bash
sudo WIKI_ROOT=/opt/llm-wiki-jk ./deploy/install.sh
```

The assignment must come *after* `sudo` — sudo strips the caller's environment,
so `WIKI_ROOT=... sudo ./install.sh` is silently ignored.

**`/root` will not work.** It is mode `0700`, so the `wiki` service user cannot
traverse into it no matter how the repo itself is owned. The script rejects it.

`install.sh` creates the `wiki` service user, installs opencode, installs
`python3-venv`, builds `.venv` from `api/requirements.txt`, writes
`/etc/wiki-api/env` with a generated `OPENCODE_SERVER_PASSWORD`, installs both
systemd units, and starts them.

Then authenticate the model provider **as the service user** (opencode stores
credentials under that user's home):

```bash
sudo -u wiki HOME=/home/wiki opencode auth login
sudo systemctl restart opencode-serve
```

Verify:

```bash
curl -s http://127.0.0.1:8000/api/health | python3 -m json.tool
# {"status":"ok","nodes":...,"edges":...,"sessions":0,
#  "opencode":{"status":"ok","version":"1.18.5"}}
```

If `opencode.status` is `unreachable`: `journalctl -u opencode-serve -n 50`.

Confirm the public agent is locked down — `bash`, `edit`, `write` must all show
`deny`:

```bash
PW=$(sudo grep OPENCODE_SERVER_PASSWORD /etc/wiki-api/env | cut -d= -f2)
curl -s -u "opencode:$PW" http://127.0.0.1:4096/agent \
  | python3 -c "import json,sys; [print(p) for a in json.load(sys.stdin) if a['name']=='wiki-chat' for p in a['permission'] if p['action']!='allow']"
```

---

## Part 2 — Cloudflare

### Step 1. Install and authenticate cloudflared

```bash
curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg \
  | sudo tee /usr/share/keyrings/cloudflare-main.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://pkg.cloudflare.com/cloudflared any main" \
  | sudo tee /etc/apt/sources.list.d/cloudflared.list
sudo apt update && sudo apt install -y cloudflared

cloudflared tunnel login
```

`tunnel login` prints a URL. Open it on the laptop, pick the `johnnykuo.com`
zone. A cert lands at `~/.cloudflared/cert.pem` on the server.

### Step 2. Create the tunnel

```bash
cloudflared tunnel create wiki-api
```

Note the **tunnel UUID** and the credentials JSON path it prints.

```bash
sudo mkdir -p /etc/cloudflared
sudo cp ~/.cloudflared/<TUNNEL-UUID>.json /etc/cloudflared/
sudo cp /srv/llm-wiki-jk/deploy/cloudflared-config.yml /etc/cloudflared/config.yml
sudo chmod 600 /etc/cloudflared/<TUNNEL-UUID>.json
```

Edit `/etc/cloudflared/config.yml` and substitute the real UUID in both the
`tunnel:` and `credentials-file:` lines.

### Step 3. Route DNS

```bash
cloudflared tunnel route dns wiki-api api.johnnykuo.com
```

This creates a **proxied** (orange cloud) CNAME
`api.johnnykuo.com → <UUID>.cfargotunnel.com`. Confirm in
**DNS → Records** that the proxy status is *Proxied*, not *DNS only*.

### Step 4. Run as a service

```bash
sudo cloudflared service install
sudo systemctl enable --now cloudflared
sudo systemctl status cloudflared
```

Test from the laptop:

```bash
curl -s https://api.johnnykuo.com/api/health | python3 -m json.tool
```

### Step 5. Cache rule — bypass

Dashboard → **Rules → Cache Rules → Create rule**

| Field | Value |
|---|---|
| Name | `api-no-cache` |
| Expression | `(http.host eq "api.johnnykuo.com")` |
| Cache eligibility | **Bypass cache** |

Without this, `/api/intent` responses can be served stale.

### Step 6. Configuration rule — disable content rewriting

Dashboard → **Rules → Configuration Rules → Create rule**

| Field | Value |
|---|---|
| Name | `api-raw-passthrough` |
| Expression | `(http.host eq "api.johnnykuo.com")` |
| Rocket Loader | **Off** |
| Auto Minify | **Off** (all) |
| Email Obfuscation | **Off** |
| Mirage | **Off** |
| Polish | **Off** |

Rocket Loader injects JavaScript into response bodies and will corrupt
`text/event-stream`. This is the second most common cause of a chat that works
locally but fails in production.

### Step 7. Rate limiting

Dashboard → **Security → WAF → Rate limiting rules**

Rule A — expensive streaming endpoint:

| Field | Value |
|---|---|
| Name | `api-stream-limit` |
| Expression | `(http.request.uri.path eq "/api/execute/stream")` |
| Characteristics | IP |
| Rate | 10 requests / 1 minute |
| Action | Block, 60s |

Rule B — intent endpoint:

| Field | Value |
|---|---|
| Name | `api-intent-limit` |
| Expression | `(http.request.uri.path eq "/api/intent")` |
| Characteristics | IP |
| Rate | 30 requests / 1 minute |
| Action | Managed Challenge |

Each chat turn is one model invocation with real cost. These rules are the only
thing standing between you and a scripted bill.

### Step 8. Bot protection exception

Dashboard → **Security → Bots**. If Bot Fight Mode or Super Bot Fight Mode is
enabled on the zone, `fetch()` POSTs from the graph page will be challenged
intermittently. Add **Security → WAF → Custom rules**:

| Field | Value |
|---|---|
| Name | `api-skip-bot` |
| Expression | `(http.host eq "api.johnnykuo.com" and http.request.method eq "POST")` |
| Action | **Skip** → Super Bot Fight Mode |

### Step 9. Timeouts

Cloudflare terminates proxied connections idle for ~100 s (error 524). The
adapter emits a `: ping` SSE comment every 15 s (`HEARTBEAT_SECONDS`), which
keeps the connection alive through arbitrarily long model turns. Nothing to
configure — but if you ever see 524s on `/api/execute/stream`, check that
heartbeats are reaching the wire (Step 11).

### Step 10. Origin lockdown

The tunnel is outbound-only, so no inbound ports need opening. Confirm:

```bash
sudo ss -tlnp | grep -E ':(8000|4096)'
# both MUST show 127.0.0.1, never 0.0.0.0
```

Then confirm from outside that opencode is unreachable:

```bash
curl -sS --max-time 5 http://<server-public-ip>:4096/global/health   # must fail
```

### Step 11. End-to-end verification

```bash
curl -sS -H 'Origin: https://graph.johnnykuo.com' \
  -H 'Content-Type: application/json' \
  -d '{"message":"what is autophagy"}' \
  https://api.johnnykuo.com/api/intent

# then, with the session_id it returned:
curl -N -sS -H 'Origin: https://graph.johnnykuo.com' \
  -H 'Content-Type: application/json' \
  -d '{"intent":"chat","message":"what is autophagy","session_id":"ses_..."}' \
  https://api.johnnykuo.com/api/execute/stream
```

Expected: `data: {"type":"reasoning",...}` and `data: {"type":"text",...}`
frames arriving **incrementally**, occasional `: ping`, then
`data: {"type":"done","elapsed":N}`.

If everything arrives in one burst at the end, buffering is still on. Check in
this order: cloudflared `disableChunkedEncoding` (Step 2) → Configuration Rules
(Step 6) → Cache Rules (Step 5).

---

## Part 3 — Frontend

`graphify-out/chat.js` runs in the browser, **not** on this server. Committing
it does not ship it; publish `graphify-out/` to whatever hosts
`graph.johnnykuo.com`.

Deploy the static frontend *before* the API. If the API ships first, old
browsers keep sending the pre-session payload shape: no `session_id`, so every
turn silently allocates a fresh session and follow-ups lose context. Nothing
errors — the assistant just acts amnesiac.

To point a local copy at a different backend, set the override before
`graph.js` loads in `three-graph.html`:

```html
<script>window.GRAPH_API_BASE = 'http://127.0.0.1:8000';</script>
```

The SSE event contract is unchanged, so no other frontend edits are required.

---

## Operations

```bash
# logs
journalctl -u opencode-serve -f
journalctl -u wiki-api -f
journalctl -u cloudflared -f

# restart after a git pull
cd /srv/llm-wiki-jk && sudo -u wiki git pull
sudo /srv/llm-wiki-jk/.venv/bin/pip install -r api/requirements.txt
sudo systemctl restart wiki-api

# restart after editing .opencode/agent/wiki-chat.md or AGENTS.md
sudo systemctl restart opencode-serve

# active chat sessions
curl -s http://127.0.0.1:8000/api/health | python3 -m json.tool
```

Sessions idle longer than `SESSION_TTL_SECONDS` (default 1 h) are reaped
automatically; `MAX_SESSIONS` (default 200) caps concurrent sessions and evicts
the oldest.

### Regenerating the graph

`api/graph_ops.py` loads `graphify-out/graph.json` once at startup and caches
it. After regenerating the graph, restart the adapter:

```bash
sudo systemctl restart wiki-api
```

### What the server needs from the repo

Beyond `api/`: `graphify-out/graph.json`, `AGENTS.md`, `.opencode/`, and
`src/notes/` — the agent reads the notes to ground answers. Clone the whole
repo; a sparse checkout of `api/` alone produces a service that starts and then
fails every request.

## Local development

On the laptop, no systemd or tunnel involved:

```bash
./deploy/dev.sh
```

Starts `opencode serve` on 4096 and the adapter on 8000 with `--reload`.
