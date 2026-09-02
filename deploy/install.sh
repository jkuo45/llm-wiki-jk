#!/usr/bin/env bash
# Server bootstrap for the knowledge graph prompt backend.
#
# Run on the SERVER (Debian/Ubuntu with systemd), not on the laptop:
#   sudo ./deploy/install.sh
#
# Idempotent: safe to re-run after a `git pull` to refresh deps and units.

set -euo pipefail

# Default to the checkout this script lives in, so the install works from any
# path. Override with:  sudo WIKI_ROOT=/some/where ./deploy/install.sh
# (sudo strips the environment, so the assignment must come after `sudo`.)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WIKI_ROOT="${WIKI_ROOT:-$(cd "${SCRIPT_DIR}/.." && pwd)}"
SERVICE_USER="${SERVICE_USER:-wiki}"
ENV_DIR="/etc/wiki-api"
ENV_FILE="${ENV_DIR}/env"
STATE_DIR="/var/lib/wiki-api"

log()  { printf '\033[1;34m==>\033[0m %s\n' "$*"; }
warn() { printf '\033[1;33mWARN:\033[0m %s\n' "$*" >&2; }
die()  { printf '\033[1;31mERROR:\033[0m %s\n' "$*" >&2; exit 1; }

[[ $EUID -eq 0 ]] || die "run as root (sudo $0)"
command -v systemctl >/dev/null || die "systemd required"

# Sanity-check that WIKI_ROOT really is the repo, not just any directory.
for required in api/main.py api/requirements.txt graphify-out/graph.json \
                .opencode/agent/wiki-prompt.md .opencode/agent/wiki-util.md; do
  [[ -f "${WIKI_ROOT}/${required}" ]] \
    || die "not a valid checkout: ${WIKI_ROOT}/${required} is missing
       Set the right path with:  sudo WIKI_ROOT=/path/to/repo $0"
done
log "repo root: ${WIKI_ROOT}"

case "$WIKI_ROOT" in
  /root|/root/*)
    die "the checkout is under /root, which cannot work.
       /root is mode 0700, so the '${SERVICE_USER}' service user cannot traverse
       into it regardless of ownership on the repo itself, and the units set
       ProtectHome=read-only. Move it and re-run:

         sudo mv ${WIKI_ROOT} /srv/llm-wiki-jk
         cd /srv/llm-wiki-jk && sudo ./deploy/install.sh"
    ;;
  /home/*)
    warn "repo lives under a home directory. The units set ProtectHome=read-only"
    warn "and rely on ReadWritePaths to punch through for ${WIKI_ROOT}."
    warn "This works, but /srv is the cleaner location for a service checkout."
    ;;
esac

# --- service user ------------------------------------------------------------
if ! id -u "$SERVICE_USER" >/dev/null 2>&1; then
  log "creating service user: $SERVICE_USER"
  useradd --system --create-home --shell /usr/sbin/nologin "$SERVICE_USER"
fi

install -d -o "$SERVICE_USER" -g "$SERVICE_USER" "$STATE_DIR"
install -d -o "$SERVICE_USER" -g "$SERVICE_USER" \
  "/home/${SERVICE_USER}/.config/opencode" \
  "/home/${SERVICE_USER}/.local/share/opencode" \
  "/home/${SERVICE_USER}/.cache"
chown -R "$SERVICE_USER:$SERVICE_USER" "$WIKI_ROOT"

# --- opencode ----------------------------------------------------------------
if ! command -v opencode >/dev/null 2>&1; then
  log "installing opencode"
  curl -fsSL https://opencode.ai/install | bash
  # The installer drops it in ~/.opencode/bin; expose it system-wide.
  if [[ -x "$HOME/.opencode/bin/opencode" && ! -e /usr/local/bin/opencode ]]; then
    ln -s "$HOME/.opencode/bin/opencode" /usr/local/bin/opencode
  fi
fi
command -v opencode >/dev/null || die "opencode not on PATH after install"
log "opencode $(opencode --version)"

# --- system packages ---------------------------------------------------------
# Debian/Ubuntu split venv and ensurepip out of the base python3 package, so a
# bare `python3 -m venv` leaves a half-built directory with no pip in it.
if command -v apt-get >/dev/null 2>&1; then
  missing=()
  dpkg -s python3-venv >/dev/null 2>&1 || missing+=(python3-venv)
  dpkg -s python3-dev  >/dev/null 2>&1 || missing+=(python3-dev)
  command -v curl >/dev/null 2>&1      || missing+=(curl)
  command -v git  >/dev/null 2>&1      || missing+=(git)
  if ((${#missing[@]})); then
    log "installing system packages: ${missing[*]}"
    apt-get update -qq
    DEBIAN_FRONTEND=noninteractive apt-get install -y -qq "${missing[@]}"
  fi
fi

# --- python venv -------------------------------------------------------------
VENV="${WIKI_ROOT}/.venv"

# Treat a venv without a working pip as broken and rebuild it. This is the state
# an aborted earlier run leaves behind.
if [[ -d "$VENV" && ! -x "${VENV}/bin/pip" ]]; then
  warn "existing ${VENV} has no pip — rebuilding"
  rm -rf "$VENV"
fi

if [[ ! -d "$VENV" ]]; then
  log "creating python venv"
  python3 -m venv "$VENV" || die "python3 -m venv failed.
       On Debian/Ubuntu:  sudo apt-get install -y python3-venv
       Then re-run this script."
fi

[[ -x "${VENV}/bin/pip" ]] || die "venv built but ${VENV}/bin/pip is missing.
       Install python3-venv, delete ${VENV}, and re-run."

log "installing python dependencies"
"${VENV}/bin/pip" install --quiet --upgrade pip
"${VENV}/bin/pip" install --quiet -r "${WIKI_ROOT}/api/requirements.txt"
"${VENV}/bin/python" -c "import fastapi, httpx, networkx, uvicorn" \
  || die "dependency import check failed"
chown -R "$SERVICE_USER:$SERVICE_USER" "$VENV"

# --- environment file --------------------------------------------------------
# Publishable Supabase values must come from the repo .env (gitignored) —
# there are no hardcoded fallbacks.
env_val() { # env_val KEY  — read a value from ${WIKI_ROOT}/.env, ignoring quotes
  local v=""
  v="$(grep -E "^${1}=" "${WIKI_ROOT}/.env" 2>/dev/null | tail -n1 | cut -d= -f2- | tr -d '"')"
  [[ -n "$v" ]] && { printf '%s' "$v"; return; }
  v="$(grep -E "^VITE_${1}=" "${WIKI_ROOT}/.env" 2>/dev/null | tail -n1 | cut -d= -f2- | tr -d '"')"
  printf '%s' "$v"
}
SUPABASE_URL_VAL="$(env_val SUPABASE_URL)"
SUPABASE_ANON_KEY_VAL="$(env_val SUPABASE_ANON_KEY)"
AUTH_DISABLED_VAL="$(grep -E '^AUTH_DISABLED=' "${WIKI_ROOT}/.env" 2>/dev/null | tail -n1 | cut -d= -f2- | tr -d '"')"
[[ -n "$SUPABASE_URL_VAL" ]] \
  || die "SUPABASE_URL not set — add it (or VITE_SUPABASE_URL) to ${WIKI_ROOT}/.env"
[[ -n "$SUPABASE_ANON_KEY_VAL" ]] \
  || die "SUPABASE_ANON_KEY not set — add it (or VITE_SUPABASE_ANON_KEY) to ${WIKI_ROOT}/.env"

# Generated inline rather than copied from deploy/env.example, because that
# template is gitignored and will not exist in a fresh server clone.
install -d -m 0750 -o root -g "$SERVICE_USER" "$ENV_DIR"
if [[ ! -f "$ENV_FILE" ]]; then
  log "creating $ENV_FILE with a generated opencode password"
  cat > "$ENV_FILE" <<EOF
# Generated by deploy/install.sh on $(date -u +%Y-%m-%dT%H:%M:%SZ).
# Both systemd units read this file. Restart them after editing.

# --- opencode server ---------------------------------------------------------
OPENCODE_SERVER_PASSWORD=$(openssl rand -hex 32)
OPENCODE_SERVER_USERNAME=opencode

# Where the adapter reaches opencode. Loopback only — never bind this publicly.
OPENCODE_URL=http://127.0.0.1:4096

# Agents used for public prompt turns and read-only utility prompts (intent
# classification, translation, graph narration). Must have bash/edit/write
# disabled.
OPENCODE_PROMPT_AGENT=wiki-prompt
OPENCODE_UTILITY_AGENT=wiki-util

# Provider credentials for the model opencode calls. Set whichever applies, or
# run \`opencode auth login\` once as the ${SERVICE_USER} user and omit these.
# ANTHROPIC_API_KEY=
# OPENAI_API_KEY=

# --- adapter -----------------------------------------------------------------
ALLOWED_ORIGINS=https://graph.johnnykuo.com
SESSION_TTL_SECONDS=3600
MAX_SESSIONS=200
HEARTBEAT_SECONDS=15
LOG_LEVEL=INFO

# --- supabase auth (publishable values only — safe to expose) ----------------
SUPABASE_URL=${SUPABASE_URL_VAL}
SUPABASE_ANON_KEY=${SUPABASE_ANON_KEY_VAL}

# Auth kill-switch: 1 = open API, no sign-in required anywhere (auth.py).
AUTH_DISABLED=${AUTH_DISABLED_VAL:-1}

WIKI_ROOT=${WIKI_ROOT}
EOF
  chmod 0640 "$ENV_FILE"
  chown root:"$SERVICE_USER" "$ENV_FILE"
  log "review $ENV_FILE before continuing (provider keys, allowed origins)"
else
  log "$ENV_FILE already exists — leaving it alone"
fi

# --- systemd units -----------------------------------------------------------
log "installing systemd units"
for unit in opencode-serve.service wiki-api.service; do
  sed "s|/srv/llm-wiki-jk|${WIKI_ROOT}|g; \
       s|^User=wiki$|User=${SERVICE_USER}|; \
       s|^Group=wiki$|Group=${SERVICE_USER}|; \
       s|/home/wiki/|/home/${SERVICE_USER}/|g" \
    "${WIKI_ROOT}/deploy/${unit}" > "/etc/systemd/system/${unit}"
done

systemctl daemon-reload
systemctl enable --now opencode-serve.service
sleep 5
systemctl enable --now wiki-api.service
sleep 3

# --- verify ------------------------------------------------------------------
log "verifying"
systemctl is-active --quiet opencode-serve.service \
  || die "opencode-serve failed: journalctl -u opencode-serve -n 50"
systemctl is-active --quiet wiki-api.service \
  || die "wiki-api failed: journalctl -u wiki-api -n 50"

curl -fsS http://127.0.0.1:8000/v1/health | python3 -m json.tool

cat <<EOF

Backend is up on 127.0.0.1:8000.

Next:
  1. Authenticate the model provider as the service user, if you did not put
     API keys in ${ENV_FILE}:
       sudo -u ${SERVICE_USER} HOME=/home/${SERVICE_USER} opencode auth login
       sudo systemctl restart opencode-serve
  2. Confirm the prompt agent is loaded and locked down:
       PW=\$(grep OPENCODE_SERVER_PASSWORD ${ENV_FILE} | cut -d= -f2)
       curl -s -u "opencode:\$PW" http://127.0.0.1:4096/agent | python3 -m json.tool
  3. Set up the reverse proxy — see deploy/README.md, section "Reverse proxy (nginx)".

EOF
