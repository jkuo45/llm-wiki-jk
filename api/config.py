"""Environment-driven settings for the API.

Read once at import time so the composition root and routers can import
constants instead of re-parsing os.environ. Unless a setting is already
present as a real environment variable, config falls back to the repo `.env`
file (gitignored), then to the hardcoded default below. Tests monkeypatch these
module attributes directly (see tests/) rather than mutating the environment.

Precedence: environment variable > repo `.env` > code default.
"""

import os
from pathlib import Path

# Repo root (this file lives in api/).
_REPO_ROOT = Path(__file__).resolve().parent.parent


def _load_env_file() -> dict[str, str]:
    """Parse simple KEY=VALUE lines from the repo .env, if present.

    Used only as a fallback default source — real environment variables always
    take precedence (see `_env_set`/`_env_int`). Supports optional surrounding
    quotes so `ALLOWED_ORIGINS="https://a,https://b"` parses correctly.
    """
    path = _REPO_ROOT / ".env"
    out: dict[str, str] = {}
    if not path.exists():
        return out
    try:
        text = path.read_text(encoding="utf-8")
    except OSError:
        return out
    for line in text.splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, val = line.partition("=")
        out[key.strip()] = val.strip().strip('"').strip("'")
    return out


_ENV_FILE = _load_env_file()


def _env_set(name: str, default: str) -> set[str]:
    raw = os.environ.get(name) or _ENV_FILE.get(name) or default
    return {o.strip() for o in raw.split(",") if o.strip()}


def _env_int(name: str, default: int) -> int:
    raw = os.environ.get(name) or _ENV_FILE.get(name)
    try:
        return int(raw)
    except (TypeError, ValueError):
        return default


# Allowed UI origins. The graph frontend is served only from graph.johnnykuo.com
# (see web/index.html canonical / sitemap / llms.txt), so just that origin is
# required here. See the repo .env / install.sh if the main site ever calls the
# API directly.
ALLOWED_ORIGINS: set[str] = _env_set(
    "ALLOWED_ORIGINS",
    "https://graph.johnnykuo.com",
)

# Local-development origins. Browsers cannot spoof these from the public web,
# so allowing them is safe and makes `file://` / localhost frontends work
# against the API without editing ALLOWED_ORIGINS.
LOCAL_ORIGIN_HINTS = ("http://localhost", "http://127.0.0.1", "http://[::1]", "file://")

# Idle prompt sessions are reaped so a long-running server does not accumulate
# opencode sessions from abandoned browser tabs.
SESSION_TTL_SECONDS: int = _env_int("SESSION_TTL_SECONDS", 3600)
SESSION_SWEEP_SECONDS: int = 300
MAX_SESSIONS: int = _env_int("MAX_SESSIONS", 200)

# SSE keepalive. Cloudflare drops idle proxied connections at ~100s.
HEARTBEAT_SECONDS: int = _env_int("HEARTBEAT_SECONDS", 15)