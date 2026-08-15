#!/usr/bin/env bash
# Local development runner (laptop, macOS or Linux).
#
#   ./deploy/dev.sh
#
# Starts `opencode serve` and the FastAPI adapter in the foreground, tears both
# down on Ctrl-C. Nothing is installed, no systemd, no reverse proxy.

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

export OPENCODE_PORT="${OPENCODE_PORT:-4096}"
export OPENCODE_URL="http://127.0.0.1:${OPENCODE_PORT}"
export OPENCODE_SERVER_PASSWORD="${OPENCODE_SERVER_PASSWORD:-devpassword}"
export OPENCODE_SERVER_USERNAME="${OPENCODE_SERVER_USERNAME:-opencode}"
export OPENCODE_CHAT_AGENT="${OPENCODE_CHAT_AGENT:-wiki-chat}"
export ALLOWED_ORIGINS="${ALLOWED_ORIGINS:-http://localhost:8080,http://127.0.0.1:8080}"
export LOG_LEVEL="${LOG_LEVEL:-INFO}"

PY="${ROOT}/.venv/bin/python"
[[ -x "$PY" ]] || PY="$(command -v python3)"

cleanup() {
  echo
  echo "shutting down..."
  [[ -n "${OC_PID:-}" ]] && kill "$OC_PID" 2>/dev/null || true
  [[ -n "${API_PID:-}" ]] && kill "$API_PID" 2>/dev/null || true
  wait 2>/dev/null || true
}
trap cleanup EXIT INT TERM

echo "==> starting opencode serve on :${OPENCODE_PORT}"
opencode serve --port "$OPENCODE_PORT" --hostname 127.0.0.1 &
OC_PID=$!

for _ in $(seq 1 30); do
  if curl -fsS -u "${OPENCODE_SERVER_USERNAME}:${OPENCODE_SERVER_PASSWORD}" \
       "${OPENCODE_URL}/global/health" >/dev/null 2>&1; then
    break
  fi
  sleep 1
done

echo "==> starting adapter on :8000"
"$PY" -m uvicorn api.main:app --host 127.0.0.1 --port 8000 --reload &
API_PID=$!

cat <<EOF

  adapter   http://127.0.0.1:8000/health
  opencode  ${OPENCODE_URL}/doc

  To point the graph UI at this backend, serve graphify-out/ and set:
    <script>window.GRAPH_API_BASE = 'http://127.0.0.1:8000';</script>
  before graph.js loads, or run:
    cd graphify-out && python3 -m http.server 8080

  Ctrl-C to stop both.

EOF

wait
