import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';

const envDir = fileURLToPath(new URL('..', import.meta.url));

export default defineConfig(({ mode }) => {
  // VITE_* build-time env vars live in the repo-root .env (gitignored),
  // not in web/. Only VITE_-prefixed vars are exposed to the client bundle.
  const env = loadEnv(mode, envDir);
  const required = ['VITE_API_BASE', 'VITE_SUPABASE_URL', 'VITE_SUPABASE_ANON_KEY'];
  const missing = required.filter((k) => !env[k]);
  if (missing.length) {
    throw new Error(
      `Missing required env vars: ${missing.join(', ')}.\n` +
        'Add them to the repo-root .env (see AGENTS.md / deploy docs).',
    );
  }
  return { envDir };
});
