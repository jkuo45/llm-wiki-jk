"""Environment-driven settings for the API.

Read once at import time so the composition root and routers can import
constants instead of re-parsing os.environ. Tests monkeypatch these module
attributes directly (see tests/) rather than mutating the environment.
"""

import os


def _env_set(name: str, default: str) -> set[str]:
    return {o.strip() for o in os.environ.get(name, default).split(",") if o.strip()}


def _env_int(name: str, default: int) -> int:
    try:
        return int(os.environ.get(name, str(default)))
    except (TypeError, ValueError):
        return default


# Allowed UI origins. Browsers cannot spoof these from the public web.
ALLOWED_ORIGINS: set[str] = _env_set(
    "ALLOWED_ORIGINS",
    "https://www.johnnykuo.com,https://johnnykuo.com,https://graph.johnnykuo.com",
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