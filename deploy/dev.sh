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
export OPENCODE_PROMPT_AGENT="${OPENCODE_PROMPT_AGENT:-wiki-prompt}"
export ALLOWED_ORIGINS="${ALLOWED_ORIGINS:-http://localhost:8080,http://127.0.0.1:8080}"
# Auth kill-switch (see api/auth.py): set AUTH_DISABLED=1 to open the API.
export AUTH_DISABLED="${AUTH_DISABLED:-1}"
export LOG_LEVEL="${LOG_LEVEL:-INFO}"

# Adapter port (bare port number, loopback host is fixed below).
export API_PORT="${API_PORT:-8000}"

# Publishable Supabase values come from the repo .env (gitignored) — no
# hardcoded copies here. Exported vars set before this script still win
# unless .env defines them (sourced values take precedence).
if [[ -f "${ROOT}/.env" ]]; then
  set -a
  # shellcheck disable=SC1091
  source "${ROOT}/.env"
  set +a
fi
if [[ -z "${SUPABASE_URL:-}" || -z "${SUPABASE_ANON_KEY:-}" ]]; then
  echo "ERROR: SUPABASE_URL / SUPABASE_ANON_KEY not set — add them to ${ROOT}/.env" >&2
  exit 1
fi

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

echo "==> starting adapter on :${API_PORT}"
"$PY" -m uvicorn api.main:app --host 127.0.0.1 --port "$API_PORT" --reload &
API_PID=$!

cat <<EOF

  adapter   http://127.0.0.1:${API_PORT}/v1/health
  opencode  ${OPENCODE_URL}/doc

  To point the graph UI at this backend, serve web/ and set:
    <script>window.GRAPH_API_BASE = 'http://127.0.0.1:8000/v1';</script>
  before graph.js loads, or run:
    cd web && python3 -m http.server 8080

  Ctrl-C to stop both.

EOF

wait
