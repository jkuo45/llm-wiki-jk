"""Reader id namespacing + md-viewer frame reconciliation.

The reader merges three registries into one flat list addressed by URL hash.
Article ids are lowercase slugs (eryptosis), wiki ids are note stems
(Eryptosis) — the same entity twice, differing only in case. Ids are
therefore namespaced `<kind>/<id>`, and every lookup falls back to the bare
id so links shared before the change still resolve.

These assertions mirror reader.js's flattenRegistry/getArticle/md-viewer
branch of matchFrameArticle. Keeping a copy here is deliberate: the logic is
pure string work whose failure mode is a user silently opening the wrong
note, which no amount of clicking around the UI would reliably catch.
"""

import json
import re
from collections import Counter
from pathlib import Path
from urllib.parse import unquote

import pytest

DATA = Path("web/public/data")

# Entities published under both an article slug and a note stem.
CASE_COLLISIONS = [
    ("apoptosis", "Apoptosis"),
    ("eryptosis", "Eryptosis"),
    ("ferroptosis", "Ferroptosis"),
    ("necroptosis", "Necroptosis"),
    ("parthanatos", "Parthanatos"),
    ("autophagy", "Autophagy"),
    ("lipid-peroxidation", "Lipid Peroxidation"),
]


def flatten(rows, kind):
    """Port of flattenRegistry in web/components/reader.js."""
    out = []
    for a in rows:
        for lang, l in (a.get("langs") or {}).items():
            bare = a["id"] if lang == "en-US" else f"{a['id']}-{lang.split('-')[0].lower()}"
            row = {**a, **l, "bare": bare, "id": f"{kind}/{bare}",
                   "group": a["id"], "kind": kind, "lang": lang}
            if row.get("active") is not False:
                out.append(row)
    return out


def load(name, key, kind):
    """Load a registry. articles.json is a bare list; tasks/wiki nest rows
    under their own key (see data.js getJSON callers). `key` is the JSON key,
    `kind` the reader namespace — they differ for tasks ("tasks" vs "task")."""
    p = DATA / name
    if not p.exists():
        return []
    data = json.loads(p.read_text(encoding="utf-8"))
    rows = data if isinstance(data, list) else data.get(key, [])
    return flatten(rows, kind)


def strip_legacy(id_):
    return re.sub(r"^task:", "", id_)


def get_article(rows, id_):
    """Port of getArticle in web/components/reader.js."""
    if not isinstance(id_, str):
        return None
    if "/" in id_:
        return next((r for r in rows if r["id"] == id_), None)
    bare = strip_legacy(id_)
    return (next((r for r in rows if r["bare"] == id_), None)
            or next((r for r in rows if r["bare"] == bare), None)
            or next((r for r in rows if r["group"] == bare), None))


@pytest.fixture(scope="module")
def rows():
    return (load("articles.json", "article", "article")
            + load("tasks.json", "tasks", "task")
            + load("wiki.json", "wiki", "wiki"))


class TestNamespacedIds:
    def test_no_duplicate_ids(self, rows):
        counts = Counter(r["id"] for r in rows)
        dupes = sorted(i for i, n in counts.items() if n > 1)
        assert not dupes, f"namespaced ids must be unique: {dupes[:5]}"

    def test_slash_namespaces_by_case_colliding_entities(self, rows):
        """The whole point: case-only siblings must be distinguishable."""
        live = [p for p in CASE_COLLISIONS
                if get_article(rows, f"article/{p[0]}") and get_article(rows, f"wiki/{p[1]}")]
        assert live, "no case-colliding entity is currently active in both registries"
        for lower, upper in live:
            a = get_article(rows, f"article/{lower}")
            w = get_article(rows, f"wiki/{upper}")
            assert a["kind"] == "article" and w["kind"] == "wiki"
            assert a["id"] != w["id"], f"{lower} / {upper} share an id"

    def test_zh_editions_keep_their_suffix(self, rows):
        zh = [r for r in rows if r["lang"] == "zh-TW"]
        if not zh:
            pytest.skip("no zh-TW editions published")
        for r in zh[:20]:
            assert r["id"].endswith("-zh"), r["id"]
            assert get_article(rows, r["id"]) is not None


class TestBackCompatFallback:
    def test_bare_ids_still_resolve(self, rows):
        """Links shared before namespacing must not 404."""
        for bare in sorted({r["bare"] for r in rows}):
            assert get_article(rows, bare) is not None, bare

    def test_bare_id_preserves_the_case_distinction(self, rows):
        """Pre-namespacing, case was load-bearing. It still must be."""
        checked = 0
        for art, note in CASE_COLLISIONS:
            a = get_article(rows, art)
            w = get_article(rows, note)
            if a and w and a["kind"] == "article" and w["kind"] == "wiki":
                assert a["kind"] != w["kind"]
                checked += 1
        assert checked, "no live case-colliding pair to check"

    def test_legacy_task_colon_prefix(self, rows):
        t = next((r for r in rows if r["kind"] == "task"), None)
        if not t:
            pytest.skip("no task rows")
        assert get_article(rows, f"task:{t['bare']}") is not None

    def test_group_lookup_lands_on_en_edition(self, rows):
        t = next((r for r in rows if r["kind"] == "task" and r["lang"] == "zh-TW"), None)
        if not t:
            pytest.skip("no zh task rows")
        assert get_article(rows, t["group"])["lang"] == "en-US"

    def test_unknown_id_is_null(self, rows):
        assert get_article(rows, "wiki/definitely-not-a-note") is None
        assert get_article(rows, "nope/nope") is None


class TestMdViewerFrameMatch:
    """md-viewer serves EVERY note/task from one document, so the frame
    pathname identifies nothing — reconciliation must read ?src=."""

    # loadArticle now writes a root-absolute src; the reader once wrote
    # "../wiki/…", and _redirects produces the bare "wiki/…". All three must
    # resolve to the same row, or an old bookmark opens the wrong note.
    SRC_FORMS = ("/{p}", "../{p}", "{p}")

    def _match(self, rows, src):
        want = re.sub(r"^(?:\.\./|/)", "", src)
        want_d = unquote(want)
        return next((r for r in rows if r["path"] == want
                     or unquote(r["path"]) == want_d), None)

    def test_each_note_resolves_to_its_own_row(self, rows):
        """The stale-URL bug: before this, every note matched nothing, so
        md-viewer's Next button left the address bar naming the old note."""
        md = [r for r in rows if r["path"].endswith(".md")]
        assert len(md) > 100, "expected the full note + task corpus"
        for r in md:
            for form in self.SRC_FORMS:
                hit = self._match(rows, form.format(p=r["path"]))
                assert hit is not None, f"no frame match for {form.format(p=r['path'])}"
                assert hit["id"] == r["id"], (
                    f"{r['path']} matched {hit['id']} — two rows share a path?")

    def test_src_forms_agree(self, rows):
        """All three spellings of the same src must land on one row — the
        invariant behind old bookmarks, the reader iframe, and pretty URLs."""
        md = [r for r in rows if r["path"].endswith(".md")]
        for r in md[::11]:
            hits = {self._match(rows, f.format(p=r["path"]))["id"]
                    for f in self.SRC_FORMS}
            assert len(hits) == 1, f"{r['path']} → {hits}"

    def test_percent_encoded_paths_match(self, rows):
        spaced = [r for r in rows if " " in r["path"] or "%20" in r["path"]]
        if not spaced:
            pytest.skip("no percent-encoded paths in this corpus")
        for r in spaced[:20]:
            assert self._match(rows, "/" + r["path"])["id"] == r["id"]

    def _match_pretty(self, rows, pretty_path):
        """Port of the pretty-path branch added to matchFrameArticle: a frame
        showing /wiki/… or /tasks/… (no ?src=) resolves via pathname + '.md'."""
        m = re.match(r"^/(wiki|tasks)/(.+)$", pretty_path)
        if not m or m.group(2).endswith((".md", ".html")):
            return None
        want = m.group(1) + "/" + m.group(2) + ".md"
        want_d = unquote(want)
        return next((r for r in rows if r["path"] == want
                     or unquote(r["path"]) == want_d), None)

    def test_pretty_frame_path_resolves(self, rows):
        """md-viewer's Next keeps the current URL form, so an iframe on a
        pretty page navigates pretty — the frame matcher must follow."""
        md = [r for r in rows if r["path"].endswith(".md")]
        assert len(md) > 100
        for r in md:
            pretty = "/" + r["path"].removesuffix(".md")
            hit = self._match_pretty(rows, pretty)
            assert hit is not None, f"no pretty match for {pretty}"
            assert hit["id"] == r["id"]


class TestRedirects:
    @pytest.fixture(scope="class")
    def redirects(self):
        p = Path("web/public/_redirects")
        if not p.exists():
            pytest.skip("_redirects not present")
        return p.read_text(encoding="utf-8")

    def test_wiki_and_tasks_are_rewritten(self, redirects):
        assert re.search(r"^/wiki/\*\s+/pages/md-viewer\.html\?kind=wiki&src=wiki/:splat\.md\s+200$",
                         redirects, re.M), "missing /wiki/* rewrite"
        assert re.search(r"^/tasks/\*\s+/pages/md-viewer\.html\?kind=task&src=tasks/:splat\.md\s+200$",
                         redirects, re.M), "missing /tasks/* rewrite"

    def test_rewrite_targets_the_html_extension(self, redirects):
        """An extension-less target (/pages/md-viewer) makes Cloudflare emit
        its own 307 and drop the query string with it. Only the splat rules
        rewrite to md-viewer; the `*.md` identity rules target their own path."""
        for line in redirects.splitlines():
            s = line.strip()
            if not s.startswith("/") or "md-viewer" not in s:
                continue
            assert "/pages/md-viewer.html?" in s, s


class TestViteMirrorsRedirects:
    """web/vite.config.js applies _redirects in dev so the two cannot drift.
    This ports its parser + middleware and runs the real rule file through it —
    the bug it guards (a literal ':splat' left in a path) was invisible to
    curl-based checks because the SPA fallback also returns 200."""

    @pytest.fixture(scope="class")
    def config(self):
        p = Path("web/vite.config.js")
        if not p.exists():
            pytest.skip("vite.config.js not present")
        return p.read_text(encoding="utf-8")

    PROBE = """
import {{ parseRedirects, resolveRedirect }} from {config_url};
import fs from 'node:fs';
const rules = parseRedirects(fs.readFileSync({rules}, 'utf8'));
const urls = {urls};
console.log(JSON.stringify(urls.map((url) => ({{ url, out: resolveRedirect(rules, url) }}))));
"""

    def _plugin(self, tmp_path):
        """Run vite.config.js's own parseRedirects + resolveRedirect against the
        real rule file, so the test exercises shipped code rather than a
        reimplementation. parseRedirects and resolveRedirect are already
        `export`ed from the config, so the copy needs no additions."""
        import subprocess
        from pathlib import Path as _Path
        cfg = _Path("web/vite.config.js")
        rd = Path("web/public/_redirects")
        # Place the probe next to the real config so its `vite` import
        # resolves, and stub `vite` out — the parser under test needs nothing
        # from it, and the test runner has no node_modules of its own.
        mod = cfg.parent / "vite-redirects-probe.mjs"
        stub = cfg.parent / "node_modules"
        made_stub = not stub.exists()
        if made_stub:
            (stub / "vite").mkdir(parents=True)
            (stub / "vite" / "package.json").write_text(
                '{"name":"vite","version":"0.0.0","type":"module",'
                '"main":"index.js"}', encoding="utf-8")
            (stub / "vite" / "index.js").write_text(
                "export const defineConfig = (f) => f;\n", encoding="utf-8")
        try:
            mod.write_text(cfg.read_text(encoding="utf-8"), encoding="utf-8")
            urls = [
                "/wiki/en-US/_link/Urolithin%20A",
                "/wiki/en-US/_link/Urolithin%20A.md",
                "/wiki/en-US/cell-death/Ferroptosis",
                "/tasks/en-US/task_output_x_01_Sep_2026.md",
            ]
            script = self.PROBE.format(
                config_url=json.dumps(mod.resolve().as_uri()),
                rules=json.dumps(str(rd.resolve())),
                urls=json.dumps(urls))
            out = subprocess.run(["node", "--input-type=module", "-e", script],
                                 capture_output=True, text=True)
            assert out.returncode == 0, out.stderr
            return {r["url"]: r["out"] for r in json.loads(out.stdout)}
        finally:
            mod.unlink(missing_ok=True)
            if made_stub:
                for p in sorted(stub.rglob("*"), reverse=True):
                    p.unlink() if p.is_file() else p.rmdir()
                stub.rmdir()

    def test_note_fetch_is_not_rewritten_away(self, config, tmp_path):
        """The .md path must map to ITSELF. If it maps to anything else —
        including a target still holding a literal ':splat' — the note fetch
        404s into the SPA shell and every note renders blank."""
        res = self._plugin(tmp_path)
        md = res["/wiki/en-US/_link/Urolithin%20A.md"]
        assert md == "/wiki/en-US/_link/Urolithin%20A.md", md
        assert ":splat" not in md, f"literal ':splat' left in target: {md}"

    def test_md_identity_target_gains_exactly_one_extension(self, config, tmp_path):
        """`:splat` for a `*.md` rule excludes the extension (Cloudflare's
        wildcard-suffix capture), so the target must not append a second one —
        `/wiki/x.md.md` 404s into the SPA shell."""
        res = self._plugin(tmp_path)
        for url in ("/wiki/en-US/_link/Urolithin%20A.md",
                    "/tasks/en-US/task_output_x_01_Sep_2026.md"):
            out = res[url]
            assert out.endswith(".md"), out
            assert not out.endswith(".md.md"), f"double extension: {out}"

    def test_extension_less_url_rewrites_to_the_viewer(self, config, tmp_path):
        res = self._plugin(tmp_path)
        out = res["/wiki/en-US/_link/Urolithin%20A"]
        assert out.startswith("/pages/md-viewer.html?"), out
        assert "kind=wiki" in out, out
        assert "src=wiki%2Fen-US%2F_link%2FUrolithin%2520A.md" in out, out
        assert res["/wiki/en-US/cell-death/Ferroptosis"].startswith("/pages/md-viewer.html?")
        assert res["/tasks/en-US/task_output_x_01_Sep_2026.md"].startswith("/tasks/")


class TestRedirectShape:
    """Rules in web/public/_redirects, in the order Cloudflare applies them."""

    @pytest.fixture(scope="class")
    def redirects(self):
        p = Path("web/public/_redirects")
        if not p.exists():
            pytest.skip("_redirects not present")
        return p.read_text(encoding="utf-8")

    @pytest.fixture(scope="class")
    def order(self, redirects):
        rules = [l.split() for l in redirects.splitlines()
                 if l.strip().startswith("/") and not l.strip().startswith("//")]
        return [r[0] for r in rules]

    def test_md_identity_rules_precede_the_splats(self, redirects, order):
        """md-viewer fetches each note by its real path (`../wiki/…/X.md`).
        A bare `/wiki/*` splat swallows that fetch and returns HTML, so EVERY
        note fails to render. The `*.md` identity rules must therefore come
        first — Cloudflare _redirects is first-match-wins, so order is
        load-bearing. (Found by checking content-type under wrangler dev: a
        plain 200 hid it, since the SPA shell also returns 200.)"""
        for prefix in ("wiki", "tasks"):
            ident, splat = f"/{prefix}/*.md", f"/{prefix}/*"
            assert ident in order, f"missing identity rule {ident}"
            assert splat in order, f"missing splat rule {splat}"
            assert order.index(ident) < order.index(splat), (
                f"{ident} must precede {splat} or the note fetch is swallowed")

    def test_md_identity_rules_are_self_mapped(self, redirects):
        """`/wiki/*.md → /wiki/:splat.md`: :splat excludes the extension, so
        the mapping is an identity that lets the static asset win."""
        for prefix in ("wiki", "tasks"):
            m = re.search(rf"^/{prefix}/\*\.md\s+(/\S+)\s+200$", redirects, re.M)
            assert m, f"no identity rule for /{prefix}/*.md"
            assert m.group(1) == f"/{prefix}/:splat.md", m.group(1)

    def test_src_has_no_leading_slash(self, redirects):
        """md-viewer's safeSrc() rejects a leading slash (it expects the
        page-relative `wiki/…` or `../wiki/…` form), so `src=/wiki/:splat.md`
        would 400 into \"Invalid or missing ?src= parameter.\""""
        for line in redirects.splitlines():
            m = re.match(r"\s*/(?:wiki|tasks)/\*\s+.*?&src=(\S+)", line)
            if m:
                assert not m.group(1).startswith("/"), line

    def test_rewrite_preserves_the_src_string_match_frame_expects(self, redirects):
        """`:splat` must land in `src` extension-stripped and re-added, so the
        value equals the registry `path` that matchFrameArticle compares."""
        m = re.search(r"^/wiki/\*\s+.*?src=(wiki/:splat\S*)\s+200$", redirects, re.M)
        assert m, "no /wiki rule"
        # /wiki/en-US/cell-death/Eryptosis -> src=wiki/en-US/cell-death/Eryptosis.md
        assert m.group(1) == "wiki/:splat.md", m.group(1)

    def test_rewritten_src_passes_md_viewers_own_validator(self, redirects):
        """Port of safeSrc() in md-viewer.html, applied to what the redirect
        actually produces — the check that would otherwise only fail in a
        browser, as an \"Invalid or missing ?src=\" page."""
        m = re.search(r"^/wiki/\*\s+.*?&src=(\S+)\s+200$", redirects, re.M)
        assert m, "no /wiki rule"
        # A representative note path with a space, as readme-counts emits it.
        raw = m.group(1).replace(":splat", "en-US/cell-death/Apoptosis-Inducing%20Factor")
        got = re.match(r"^(?:\.\./)?((?:tasks|wiki)/.+)$", unquote(raw))
        assert got, f"safeSrc would reject src={raw!r}"
        segs = got.group(1).split("/")
        assert segs[0] == "wiki" and all(s and s not in (".", "..") for s in segs)
        assert segs[-1].endswith(".md")


def safe_src(raw):
    """Port of safeSrc(raw) in web/public/pages/md-viewer.html. Accepts the
    root-absolute ("/wiki/…"), page-relative ("../wiki/…") and bare
    ("wiki/…") spellings; always returns root-absolute, matching the shipped
    function so the fetch resolves identically from any document URL."""
    m = re.match(r"^(?:\.\./|/)?((?:tasks|wiki)/.+)$", unquote(raw or ""))
    if not m:
        return None
    segs = m.group(1).split("/")
    ok = (len(segs) >= 2
          and all(s and s not in (".", "..") and "\\" not in s for s in segs)
          and segs[-1].endswith((".md", ".markdown")))
    return "/" + m.group(1) if ok else None


def note_from_pathname(pathname):
    """Port of noteFromPathname() in md-viewer.html: resolve a pretty note
    path to (kind, src) with NO query string involved — the 200 rewrite keeps
    the browser URL, so the rewrite target's ?kind=&src= never reaches the
    shell and the pathname is the only channel."""
    m = re.match(r"^/(wiki|tasks)/(.+)$", pathname or "")
    if not m or m.group(2).endswith((".md", ".html")):
        return None
    src = safe_src("/" + m.group(1) + "/" + m.group(2) + ".md")
    if not src:
        return None
    return ("wiki" if m.group(1) == "wiki" else "task", src)


class TestPrettyPathResolution:
    """The reported open-in-new-tab bug: a pretty URL has no ?src= (a 200
    rewrite is server-internal), so ?src=-only resolution rendered
    'Invalid or missing ?src= parameter.' instead of the note."""

    def test_every_note_resolves_without_any_query_string(self, rows):
        md = [r for r in rows if r["path"].endswith((".md", ".markdown"))]
        assert len(md) > 100
        failures = []
        for r in md:
            pretty = "/" + r["path"].removesuffix(".md")
            hit = note_from_pathname(pretty)
            if hit is None:
                failures.append(("unresolved", pretty))
            elif hit[1] != safe_src("/" + r["path"]):
                failures.append(("src mismatch", pretty, hit[1]))
        assert not failures, "\n".join(" | ".join(f) for f in failures[:8])

    def test_kind_comes_from_the_path(self, rows):
        """On a pretty URL the browser query carries no `kind`, so wiki vs
        task must come from the pathname — otherwise every wiki note opened
        via pretty URL gets the task back-link, task Next order, and title."""
        assert note_from_pathname("/wiki/en-US/sirtuins/SIRT1")[0] == "wiki"
        t = next(r for r in rows
                 if r["kind"] == "task" and r["path"].endswith(".md"))
        assert note_from_pathname("/" + t["path"].removesuffix(".md"))[0] == "task"

    def test_non_note_paths_resolve_to_nothing(self):
        assert note_from_pathname("/pages/md-viewer.html") is None
        assert note_from_pathname("/wiki/en-US/_link/Eryptosis.md") is None
        assert note_from_pathname("/") is None
        assert note_from_pathname("/data/wiki.json") is None

    def test_shell_checks_src_param_first(self):
        """When both exist, ?src= wins over the pathname — the explicit
        parameter beats the inferred one."""
        viewer = Path("web/public/pages/md-viewer.html").read_text(encoding="utf-8")
        assert "noteFromPathname" in viewer
        assert "_fromSrc" in viewer and "_fromPath" in viewer


class TestPrettyUrlRoundTrip:
    """The promise of the redirect: whatever md-viewer writes into
    rel=canonical must, when visited, resolve back to the same note."""

    @pytest.fixture(scope="class")
    def rules(self):
        p = Path("web/public/_redirects")
        if not p.exists():
            pytest.skip("_redirects not present")
        rules = {}
        for line in p.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if not line.startswith("/"):
                continue
            parts = line.split()
            prefix = re.match(r"^/(\w+)/\*$", parts[0])
            if not prefix:
                continue
            q = dict(re.findall(r"(\w+)=([^&\s]+)", parts[1].split("?", 1)[1]))
            rules[prefix.group(1)] = q["src"]
        return rules

    def apply(self, rules, pretty):
        for prefix, src_tpl in rules.items():
            m = re.match(rf"^/{prefix}/(.*)$", pretty)
            if m:
                return src_tpl.replace(":splat", m.group(1))
        return None

    def test_every_published_note_round_trips(self, rules, rows):
        """reader → iframe ?src= → md-viewer canonical → pretty URL → redirect
        → src. Any mismatch anywhere lands the user on a different note."""
        md = [r for r in rows if r["path"].endswith((".md", ".markdown"))]
        assert len(md) > 100, "expected the full note + task corpus"
        failures = []
        for r in md:
            # loadArticle writes `/` + path, then encodeURIComponent.
            frame_src = safe_src("/" + r["path"])
            if frame_src is None:
                failures.append(("safeSrc rejected", r["path"]))
                continue
            clean = frame_src.removeprefix("/").removesuffix(".md")
            pretty = "/" + clean
            redirected = self.apply(rules, pretty)
            if redirected is None:
                failures.append(("no redirect rule", pretty))
            elif redirected != clean + ".md":
                failures.append(("src mismatch", pretty, redirected))
            elif safe_src(redirected) != frame_src:
                failures.append(("redirected src rejected", redirected))
        assert not failures, "\n".join(" | ".join(f) for f in failures[:8])

    def test_canonical_form_matches_what_reader_offers(self, rules, rows):
        """loadArticle's `shareUrl` (open-in-new-tab) must equal the canonical
        md-viewer computes, or the two disagree about the note's address.
        Both keep the registry's percent-encoding (%20, never a literal
        space)."""
        md = [r for r in rows if r["path"].endswith(".md")]
        for r in md[::7]:  # sampled — the invariant is per-row, not corpus-wide
            share = "/" + r["path"].removesuffix(".md")
            assert " " not in share, f"shareUrl must stay encoded: {share}"
            frame_src = safe_src("/" + r["path"])
            # md-viewer's canonical goes through `new URL(...).href`, which
            # re-encodes — compare decoded on both sides.
            canonical = "/" + frame_src.removeprefix("/").removesuffix(".md")
            assert unquote(share) == unquote(canonical), (share, canonical)

    def test_next_button_matches_encoded_paths(self, rows):
        """md-viewer's Next lookup decodes both sides before comparing.
        A raw `l.path === curPath` check never matches a note with a space
        (%20 vs literal space), so Next silently jumps to the first row."""
        viewer = Path("web/public/pages/md-viewer.html").read_text(encoding="utf-8")
        assert "decodeURIComponent(l.path)" in viewer, (
            "Next lookup must decode the registry path before comparing")
        spaced = [r for r in rows if "%20" in r["path"]]
        assert spaced, "expected encoded paths in the corpus"
        for r in spaced[:10]:
            cur = unquote("/" + r["path"]).removeprefix("/").removeprefix("../")
            assert unquote(r["path"]) == cur, r["path"]


class TestReaderHashKeepsNamespaceReadable:
    """`reader=wiki/Eryptosis` must stay literal in the address bar.
    A plain encodeURIComponent turns `/` into %2F — still functional, but it
    hides the namespace the change was made for."""

    def test_routing_preserves_the_slash(self):
        src = Path("web/components/routing.js").read_text(encoding="utf-8")
        assert re.search(r"encodeURIComponent\(state\.readerId\)\.replace\(/%2F/gi,\s*'/'\)", src), (
            "routing.js must restore '/' after encoding the reader id")

    def test_share_url_stays_encoded(self):
        src = Path("web/components/reader.js").read_text(encoding="utf-8")
        assert "'/' + article.path.replace(" in src, (
            "shareUrl must use the encoded registry path, not a decoded one with spaces")


class TestMdViewerAssetsAreRootAbsolute:
    """md-viewer.html is served BOTH at /pages/md-viewer.html and, via
    _redirects, at pretty note paths (/wiki/en-US/cell-death/Eryptosis). The
    browser's base URL is the pretty path in the second case, so any relative
    reference resolves under /wiki/…, 404s, and is answered with the SPA shell
    as text/html — surfacing as "Uncaught SyntaxError" in a plain <script> and
    "Failed to load module script: … MIME type of text/html" for the import.
    Every href/src/import in the file must therefore start at the root."""

    @pytest.fixture(scope="class")
    def viewer(self):
        p = Path("web/public/pages/md-viewer.html")
        if not p.exists():
            pytest.skip("md-viewer.html not present")
        return p.read_text(encoding="utf-8")

    def test_no_relative_static_references(self, viewer):
        offenders = []
        for line_no, line in enumerate(viewer.splitlines(), 1):
            for m in re.finditer(r'(?:src|href)="([^"]+)"', line):
                ref = m.group(1)
                if ref.startswith(("http://", "https://", "//", "data:", "/", "#")):
                    continue
                offenders.append(f"{line_no}: {ref}")
        assert not offenders, (
            "relative refs break under pretty note URLs:\n" + "\n".join(offenders))

    def test_module_import_is_root_absolute(self, viewer):
        imports = re.findall(r"^\s*import .*? from '([^']+)'", viewer, re.M)
        assert imports, "no module import found"
        for spec in imports:
            assert spec.startswith("/"), f"module import not root-absolute: {spec}"

    def test_fetch_targets_are_root_absolute(self, viewer):
        """fetch() resolves against the document, so a relative path breaks the
        same way — including the manifest/nodes/registry loads behind the
        [[Entity]] tooltips and the Next button."""
        bad = [m.group(1) for m in re.finditer(r"fetch\(\s*'([^']+)'", viewer)
               if not m.group(1).startswith("/")]
        assert not bad, f"relative fetch targets: {bad}"

    def test_reference_targets_actually_exist(self, viewer):
        """Root-absolute is only correct if the file is really at the root.
        Themes live under public/pages/themes/, hence /pages/themes/… — a
        plausible slip is /themes/…, which 404s to the SPA shell."""
        for ref in sorted(set(re.findall(r'(?:src|href)="(/[^"#]+)"', viewer))):
            if "{d}" in ref or "*" in ref:
                continue
            fs_path = Path("web/public") / ref.lstrip("/")
            assert fs_path.exists(), f"{ref} → missing {fs_path}"

    def test_themes_are_under_pages_not_root(self, viewer):
        assert Path("web/public/pages/themes").is_dir()
        assert not Path("web/public/themes").exists(), (
            "themes moved to the root — update md-viewer.html's /pages/… prefix")


class TestBackButtonTargetsReader:
    """Standalone (its own tab), Back returns to the app's reader with the
    source tab selected (/#reader=wiki/wiki-index). Framed (reader modal /
    embed iframe), it stays in-frame on the standalone index page — a
    top-level navigation would yank the user out of the graph or be blocked."""

    @pytest.fixture(scope="class")
    def viewer(self):
        p = Path("web/public/pages/md-viewer.html")
        if not p.exists():
            pytest.skip("md-viewer.html not present")
        return p.read_text(encoding="utf-8")

    def test_standalone_back_links_to_reader_hash(self, viewer):
        # Match the href expression, not a bare substring: the pretty URLs
        # appear in comments too, so a substring check passes on words alone.
        assert "'/#reader=' + (IS_WIKI ? 'wiki/wiki-index' : 'task/tasks-index')" in viewer

    def test_framed_back_stays_in_frame(self, viewer):
        assert "/pages/wiki-index.html" in viewer
        assert "/pages/tasks-index.html" in viewer
        assert "window.top" in viewer, "no framing detection"

    def test_back_targets_resolve_in_the_registry(self, rows):
        """The /#reader=<id> links must open something — both index
        pseudo-entries exist and are namespaced as the reader expects."""
        for rid in ("wiki/wiki-index", "task/tasks-index"):
            assert get_article(rows, rid) is not None, f"{rid} resolves to nothing"

    def test_back_hrefs_are_root_absolute(self, viewer):
        for m in re.finditer(r"backIndex\.href\s*=\s*(.*?);", viewer, re.S):
            for lit in re.findall(r"'(/[^']*)'", m.group(1)):
                assert lit.startswith(("/pages/", "/#reader=")), lit


class TestMdViewerModuleParses:
    """The module script in md-viewer.html must parse. The `src` double-
    declaration shipped unnoticed because every other test ports the logic
    to Python or string-matches — none of them parse the file node does."""

    def test_module_has_no_syntax_errors(self, tmp_path):
        import subprocess
        html = Path("web/public/pages/md-viewer.html").read_text(encoding="utf-8")
        m = re.search(r'<script type="module">(.*?)</script>', html, re.S)
        assert m, "no module script found in md-viewer.html"
        mod = tmp_path / "md-viewer.mjs"
        mod.write_text(m.group(1), encoding="utf-8")
        out = subprocess.run(["node", "--check", str(mod)],
                             capture_output=True, text=True)
        assert out.returncode == 0, out.stderr

    def test_no_duplicate_top_level_declarations(self):
        html = Path("web/public/pages/md-viewer.html").read_text(encoding="utf-8")
        js = re.search(r'<script type="module">(.*?)</script>', html, re.S).group(1)
        seen = {}
        dupes = set()
        for m in re.finditer(r"^(?:const|let|var|function)\s+([A-Za-z_$][\w$]*)",
                             js, re.M):
            if m.group(1) in seen:
                dupes.add(m.group(1))
            seen[m.group(1)] = True
        assert not dupes, f"double-declared identifiers: {sorted(dupes)}"


class TestMdViewerEmbed:
    @pytest.fixture(scope="class")
    def viewer(self):
        p = Path("web/public/pages/md-viewer.html")
        if not p.exists():
            pytest.skip("md-viewer.html not present")
        return p.read_text(encoding="utf-8")

    def test_honours_embed_query_param(self, viewer):
        assert "is-embed" in viewer
        assert re.search(r"has\(['\"]embed['\"]\)", viewer), "no ?embed= detection"

    def test_embed_hides_the_nav(self, viewer):
        assert re.search(r"body\.is-embed\s+nav\s*\{[^}]*display:\s*none", viewer), \
            "embed mode must hide the nav chrome"

    def test_declares_a_canonical_link(self, viewer):
        assert 'rel="canonical"' in viewer

    def test_offers_an_embed_link_outside_embed_mode(self, viewer):
        assert 'id="embedlink"' in viewer
        assert re.search(r"body\.is-embed\s+#embedlink\s*\{[^}]*display:\s*none", viewer), \
            "the embed link must hide itself while embedded"
