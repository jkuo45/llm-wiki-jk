import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import fs from 'node:fs';

const envDir = fileURLToPath(new URL('..', import.meta.url));

// The standalone public/pages/md-viewer.html is served outside the JS
// bundle and imports '../components/markdown.js' (=> /components/markdown.js at
// the deploy root). The bundled app imports the same module from web/components,
// but Vite only copies publicDir — so emit it explicitly for production. Dev
// already resolves it straight from web/components, so this is build-only.
function emitStandaloneMarkdown() {
  return {
    name: 'emit-standalone-markdown',
    apply: 'build',
    generateBundle() {
      const src = fileURLToPath(new URL('./components/markdown.js', import.meta.url));
      this.emitFile({
        type: 'asset',
        fileName: 'components/markdown.js',
        source: fs.readFileSync(src, 'utf-8'),
      });
    },
  };
}

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
  return { envDir, plugins: [emitStandaloneMarkdown()] };
});
