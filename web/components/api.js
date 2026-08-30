// Prompt API transport: endpoint URLs, auth'd POSTs, and SSE stream parsing.
// Pure transport — no DOM. Consumers (analysis.js) own rendering and error
// surfaces; this module only knows how to talk to the FastAPI adapter.

import { authHeaders } from './auth.js';

const API_BASE = (import.meta.env.VITE_API_BASE || window.GRAPH_API_BASE).replace(/\/$/, '');
export const INTENT_API = `${API_BASE}/intent`;
export const EXECUTE_STREAM_API = `${API_BASE}/execute/stream`;
export const SESSION_RESET_API = `${API_BASE}/session/reset`;

export function postJSON(url, body, opts = {}) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(body),
    ...opts,
  });
}

// Release a server-side prompt session (best-effort, page-unload safe).
export function resetSession(sessionId) {
  return postJSON(
    SESSION_RESET_API,
    { message: 'reset', session_id: sessionId },
    { keepalive: true },
  ).catch(() => {});
}

// Parse an SSE response body into an async stream of JSON events. The API
// emits `data: {json}` frames plus `: ping` heartbeat comment lines, which are
// skipped here. Malformed frames are ignored.
export async function* sseEvents(resp) {
  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buf = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += decoder.decode(value, { stream: true });
    const lines = buf.split('\n');
    buf = lines.pop(); // keep incomplete line
    for (const line of lines) {
      if (!line.startsWith('data: ')) continue;
      const payload = line.slice(6);
      if (!payload.trim()) continue;
      try {
        yield JSON.parse(payload);
      } catch {
        /* skip malformed frame */
      }
    }
  }
}
