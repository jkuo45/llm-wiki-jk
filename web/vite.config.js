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

// Dev-only stand-in for Cloudflare's `_redirects`, which Vite ignores: in dev
// the pretty note URLs (/wiki/en-US/_link/Urolithin%20A) otherwise fall
// through to the SPA shell and return index.html with a 200, so the reader
// looked fine in the iframe while every bookmarked link silently opened the
// wrong thing. Reads the real rule file rather than duplicating it, so dev and
// production cannot drift.
const REDIRECTS = './public/_redirects';

// Parses `/prefix/*` and `/prefix/*.ext`  →  `/target[?query]  200` lines into
// ordered matchers. Only the shapes this site uses are supported; anything else
// is skipped rather than guessed at. Order is preserved and first match wins,
// mirroring Cloudflare — which matters because the `*.md` identity rules only
// beat the `/*` splats by being listed first.
export function parseRedirects(text) {
  return text.split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('/') && !line.startsWith('//'))
    .map((line) => {
      const [from, to, code] = line.split(/\s+/);
      const star = from.match(/^\/(\w+)\/(\*(?:\.\w+)?)$/);
      if (!star || code !== '200') return null;
      const [, prefix, suffix] = star;
      const ext = suffix.startsWith('*.') ? suffix.slice(1) : null;
      const [target, query] = to.split('?', 2);
      return {
        prefix,
        ext,
        test: (pathname) =>
          pathname.startsWith(`/${prefix}/`) && (!ext || pathname.endsWith(ext)),
        rewrite: (splat, search) => {
          // `:splat` may appear in the path (the `*.md` identity rules) as well
          // as in the query — substitute in both, or the target keeps a literal
          // ':splat' and resolves to nothing.
          const path = target.replace(':splat', splat);
          const params = new URLSearchParams(search);
          if (query) {
            for (const [k, v] of new URLSearchParams(query)) {
              params.set(k, v.replace(':splat', splat));
            }
          }
          const qs = params.toString();
          return qs ? `${path}?${qs}` : path;
        },
      };
    })
    .filter(Boolean);
}

// First matching rule wins, as in Cloudflare _redirects — the ordering in the
// rule file is load-bearing. Returns the rewritten URL, or null for no match.
// Split out from the middleware so tests can exercise the real matcher.
export function resolveRedirect(rules, url) {
  const [pathname, search = ''] = (url || '').split('?', 2);
  const hit = rules.find((r) => r.test(pathname));
  if (!hit) return null;
  let splat = pathname.slice(`/${hit.prefix}/`.length);
  // A `*.ext` rule's splat excludes the extension, matching Cloudflare's
  // wildcard-suffix capture — otherwise `/wiki/*.md → /wiki/:splat.md` would
  // append a second `.md` and 404 into the SPA shell.
  if (hit.ext) splat = splat.slice(0, -hit.ext.length);
  return hit.rewrite(splat, search);
}

function redirectsPlugin() {
  const apply = (server) => {
    const file = fileURLToPath(new URL(REDIRECTS, import.meta.url));
    let rules = [];
    try {
      rules = parseRedirects(fs.readFileSync(file, 'utf-8'));
    } catch {
      return; // no rule file → nothing to mirror
    }
    if (!rules.length) return;
    server.middlewares.use((req, _res, next) => {
      const out = resolveRedirect(rules, req.url);
      if (out === null) return next();
      req.url = out;
      next();
    });
    const pretty = rules.filter((r) => !r.ext);
    const to = pretty.map((r) => `/${r.prefix}/*`).join(', ');
    server.config.logger.info(to && `  ➜  pretty note URLs: ${to} → md-viewer`);
  };
  return {
    name: 'redirects-dev',
    apply: 'serve', // dev only; in production Cloudflare applies the rules
    configureServer: apply,
    configurePreviewServer: apply,
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
  return { envDir, plugins: [redirectsPlugin(), emitStandaloneMarkdown()] };
});
