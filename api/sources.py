"""External research-source adapters — the pluggable layer behind the
`sources` registry table (public.sources.seed in the research_layer migration).

Each adapter implements the same two-call interface:

    search(query, limit) -> list[record]     # topic discovery
    fetch(external_id)   -> record | None    # single-item backfill

A `record` is the normalized shape of public.source_records:
    {external_id, kind, title, abstract, authors, pub_year, venue, url, doi, raw}

Adding a provider = new adapter class + one row in public.sources; no schema
changes. Adapters are network-only (no API keys required for the first two);
NCBI politeness params come from env when available.
"""

import asyncio
import logging
import os
import re
import xml.etree.ElementTree as ET
from dataclasses import dataclass, field

import httpx

logger = logging.getLogger(__name__)

NCBI_TOOL = os.environ.get("NCBI_TOOL_NAME", "llm-wiki-graph")
NCBI_EMAIL = os.environ.get("NCBI_EMAIL", "")

_TAG_RE = re.compile(r"<[^>]+>")


def _clean(text: str | None) -> str:
    """Strip inline markup (Europe PMC abstracts carry <h2>/<i> etc.)."""
    if not text:
        return ""
    return re.sub(r"\s+", " ", _TAG_RE.sub(" ", text)).strip()


@dataclass
class Record:
    external_id: str
    kind: str = "article"
    title: str = ""
    abstract: str = ""
    authors: list[str] = field(default_factory=list)
    pub_year: int | None = None
    venue: str = ""
    url: str = ""
    doi: str = ""
    raw: dict | None = None

    def as_row(self, source_id: str) -> dict:
        return {
            "source_id": source_id,
            "external_id": self.external_id,
            "kind": self.kind,
            "title": self.title,
            "abstract": self.abstract,
            "authors": self.authors,
            "pub_year": self.pub_year,
            "venue": self.venue,
            "url": self.url,
            "doi": self.doi or None,
            "raw": self.raw,
        }


class SourceAdapter:
    id: str = ""

    async def search(self, query: str, limit: int) -> list[Record]:
        raise NotImplementedError

    async def fetch(self, external_id: str) -> Record | None:
        raise NotImplementedError


def _shared_client() -> httpx.AsyncClient:
    return httpx.AsyncClient(
        timeout=httpx.Timeout(connect=5.0, read=30.0, write=10.0, pool=10.0)
    )


# ---------------------------------------------------------------------------
# PubMed / NCBI E-utilities
# ---------------------------------------------------------------------------

_EUTILS = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils"


class PubmedAdapter(SourceAdapter):
    """esearch (relevance-ranked pmids) + efetch (MedlineXML, abstracts)."""

    id = "pubmed"

    def _politeness(self) -> dict[str, str]:
        p = {"tool": NCBI_TOOL}
        if NCBI_EMAIL:
            p["email"] = NCBI_EMAIL
        return p

    async def search(self, query: str, limit: int) -> list[Record]:
        async with _shared_client() as c:
            r = await c.get(
                f"{_EUTILS}/esearch.fcgi",
                params={
                    **self._politeness(),
                    "db": "pubmed",
                    "term": query,
                    "retmode": "json",
                    "retmax": str(min(limit, 100)),
                    "sort": "relevance",
                },
            )
            r.raise_for_status()
            pmids = r.json().get("esearchresult", {}).get("idlist", [])
            if not pmids:
                return []
            await asyncio.sleep(0.4)  # <=3 rps without an NCBI API key
            return await self._fetch_many(c, pmids)

    async def fetch(self, external_id: str) -> Record | None:
        async with _shared_client() as c:
            rows = await self._fetch_many(c, [external_id])
            return rows[0] if rows else None

    async def _fetch_many(self, c: httpx.AsyncClient, pmids: list[str]) -> list[Record]:
        r = await c.get(
            f"{_EUTILS}/efetch.fcgi",
            params={
                **self._politeness(),
                "db": "pubmed",
                "id": ",".join(pmids[:20]),
                "rettype": "abstract",
                "retmode": "xml",
            },
        )
        r.raise_for_status()
        try:
            root = ET.fromstring(r.text)
        except ET.ParseError:
            logger.warning("pubmed efetch returned unparseable XML")
            return []

        out: list[Record] = []
        for art in root.iter("PubmedArticle"):
            rec = self._parse_article(art)
            if rec:
                out.append(rec)
        return out

    def _parse_article(self, art: ET.Element) -> Record | None:
        pmid = art.findtext(".//MedlineCitation/PMID")
        if not pmid:
            return None
        title = _clean(art.findtext(".//Article/ArticleTitle"))

        abstract_parts = [
            _clean("".join(el.itertext()))
            for el in art.findall(".//Article/Abstract/AbstractText")
        ]
        abstract = " ".join(p for p in abstract_parts if p)

        authors = []
        for a in art.findall(".//Article/AuthorList/Author"):
            name = a.findtext("CollectiveName") or " ".join(
                p for p in (a.findtext("ForeName"), a.findtext("LastName")) if p
            )
            if name:
                authors.append(name)

        venue = (
            art.findtext(".//Journal/ISOAbbreviation")
            or art.findtext(".//Journal/Title")
            or ""
        )
        year_text = (
            art.findtext(".//Journal/JournalIssue/PubDate/Year")
            or art.findtext(".//Journal/JournalIssue/PubDate/MedlineDate")
            or ""
        )
        pub_year = int(m.group(0)) if (m := re.search(r"\d{4}", year_text)) else None

        doi = ""
        for aid in art.findall(".//ArticleIdList/ArticleId"):
            if aid.get("IdType") == "doi":
                doi = (aid.text or "").strip()
                break

        return Record(
            external_id=pmid,
            kind="article",
            title=title,
            abstract=abstract,
            authors=authors[:25],
            pub_year=pub_year,
            venue=venue,
            url=f"https://pubmed.ncbi.nlm.nih.gov/{pmid}/",
            doi=doi,
            raw=None,
        )


# ---------------------------------------------------------------------------
# Europe PMC
# ---------------------------------------------------------------------------

_EPMC = "https://www.ebi.ac.uk/europepmc/webservices/rest"


class EuropePmcAdapter(SourceAdapter):
    """Europe PMC REST — same PMID namespace as PubMed plus preprints and
    full-text metadata; resultType=core returns abstracts in one call."""

    id = "europepmc"

    async def search(self, query: str, limit: int) -> list[Record]:
        async with _shared_client() as c:
            r = await c.get(
                f"{_EPMC}/search",
                params={
                    "query": query,
                    "format": "json",
                    "pageSize": str(min(limit, 100)),
                    "resultType": "core",
                },
            )
            r.raise_for_status()
            results = r.json().get("resultList", {}).get("result", [])
            return [rec for rec in (self._parse(r) for r in results) if rec]

    async def fetch(self, external_id: str) -> Record | None:
        async with _shared_client() as c:
            r = await c.get(
                f"{_EPMC}/search",
                params={
                    "query": f"EXT_ID:{external_id}",
                    "format": "json",
                    "resultType": "core",
                },
            )
            r.raise_for_status()
            results = r.json().get("resultList", {}).get("result", [])
            return self._parse(results[0]) if results else None

    def _parse(self, hit: dict) -> Record | None:
        ext = hit.get("id") or hit.get("pmcid")
        if not ext:
            return None
        is_preprint = hit.get("source") == "PPR"
        pmid = hit.get("pmid")
        rec = Record(
            external_id=ext,
            kind="preprint" if is_preprint else "article",
            title=_clean(hit.get("title")),
            abstract=_clean(hit.get("abstractText")),
            authors=[
                a.strip()
                for a in _clean(hit.get("authorString", "")).split(",")
                if a.strip()
            ][:25],
            pub_year=int(hit["pubYear"]) if hit.get("pubYear", "").isdigit() else None,
            venue=(hit.get("journalInfo", {}) or {}).get("journal", {}).get("title", "")
            or hit.get("bookOrReportDetails", {}).get("publisher", "")
            or "",
            url=(
                f"https://pubmed.ncbi.nlm.nih.gov/{pmid}/" if pmid
                else f"https://europepmc.org/article/{hit.get('source', 'PPR')}/{ext}"
            ),
            doi=hit.get("doi", ""),
            raw=None,
        )
        return rec


# Registry consumed by api/research.py. Keys must match public.sources.id.
ADAPTERS: dict[str, SourceAdapter] = {
    "pubmed": PubmedAdapter(),
    "europepmc": EuropePmcAdapter(),
}
