"""api.sources — PubMed + Europe PMC adapters, offline via httpx MockTransport."""

import httpx
import pytest

import api.sources as sources
from api.sources import EuropePmcAdapter, PubmedAdapter

PUBMED_XML = """<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE PubmedArticleSet PUBLIC "-//NLM//DTD PubMedArticle, 1st January 2024//EN" "https://dtd.nlm.nih.gov/ncbi/pubmed/out/pubmed_240101.dtd">
<PubmedArticleSet>
  <PubmedArticle>
    <MedlineCitation>
      <PMID>111</PMID>
      <Article>
        <Journal>
          <ISOAbbreviation>Nature</ISOAbbreviation>
          <JournalIssue><PubDate><MedlineDate>2020 Mar 15</MedlineDate></PubDate></JournalIssue>
        </Journal>
        <ArticleTitle>SIRT1 <i>in vivo</i> roles in NAD+ metabolism</ArticleTitle>
        <Abstract>
          <AbstractText>Background text.</AbstractText>
          <AbstractText Label="RESULTS">SIRT1 activates AMPK.</AbstractText>
        </Abstract>
        <AuthorList>
          <Author><ForeName>Jane</ForeName><LastName>Doe</LastName></Author>
          <Author><CollectiveName>SIRTUIN Consortium</CollectiveName></Author>
        </AuthorList>
        <ArticleIdList>
          <ArticleId IdType="pubmed">111</ArticleId>
          <ArticleId IdType="doi">10.1000/abc</ArticleId>
        </ArticleIdList>
      </Article>
    </MedlineCitation>
  </PubmedArticle>
  <PubmedArticle>
    <MedlineCitation>
      <PMID>222</PMID>
      <Article>
        <Journal><Title>Cell Metabolism</Title>
          <JournalIssue><PubDate><Year>2021</Year></PubDate></JournalIssue>
        </Journal>
        <ArticleTitle>No abstract here</ArticleTitle>
      </Article>
    </MedlineCitation>
  </PubmedArticle>
</PubmedArticleSet>"""

ARTICLE_222_XML = """<?xml version="1.0" encoding="UTF-8"?>
<PubmedArticleSet>
  <PubmedArticle>
    <MedlineCitation>
      <PMID>222</PMID>
      <Article>
        <Journal><Title>Cell Metabolism</Title>
          <JournalIssue><PubDate><Year>2021</Year></PubDate></JournalIssue>
        </Journal>
        <ArticleTitle>No abstract here</ArticleTitle>
      </Article>
    </MedlineCitation>
  </PubmedArticle>
</PubmedArticleSet>"""

EPMC_JSON = {
    "version": "6.7", "hitCount": 2,
    "resultList": {"result": [
        {
            "id": "333", "source": "MED", "pmid": "333", "doi": "10.1000/def",
            "title": "Metabolic <h2>epigenetics</h2> review",
            "abstractText": "Abstract with <i>markup</i> inside.",
            "authorString": "Smith A, Jones B, Lee C",
            "pubYear": "2022",
            "journalInfo": {"journal": {"title": "Trends in Biochemical Sciences"}},
        },
        {
            "id": "PPR-777", "source": "PPR", "doi": "10.1101/pre",
            "title": "A preprint on sirtuins",
            "abstractText": "Emerging findings.",
            "authorString": "Ng T",
            "pubYear": "2026",
        },
    ]},
}


def _pubmed_handler(esearch_ids, xml=PUBMED_XML):
    def handler(request: httpx.Request) -> httpx.Response:
        url = str(request.url)
        if "esearch.fcgi" in url:
            return httpx.Response(200, json={"esearchresult": {"idlist": esearch_ids}})
        if "efetch.fcgi" in url:
            # real efetch only returns the requested ids; mimic that
            requested = request.url.params.get("id", "").split(",")
            if requested == ["222"]:
                return httpx.Response(200, text=ARTICLE_222_XML)
            return httpx.Response(200, text=xml)
        return httpx.Response(404)

    return handler


@pytest.fixture
def patch_transport(monkeypatch):
    """Route adapter HTTP calls to canned handlers."""

    def _apply(handler):
        client = httpx.AsyncClient(transport=httpx.MockTransport(handler))

        def shared():
            return client

        monkeypatch.setattr(sources, "_shared_client", shared)
        return client

    return _apply


class TestPubmed:
    @pytest.mark.asyncio
    async def test_search_parses_articles(self, patch_transport):
        patch_transport(_pubmed_handler(["111", "222"]))
        recs = await PubmedAdapter().search("sirtuin NAD+", 10)

        assert len(recs) == 2
        first = recs[0]
        assert first.external_id == "111"
        assert first.kind == "article"
        # mixed-content title keeps <i> children
        assert first.title == "SIRT1 in vivo roles in NAD+ metabolism"
        assert first.abstract == "Background text. SIRT1 activates AMPK."
        assert first.authors == ["Jane Doe", "SIRTUIN Consortium"]
        assert first.venue == "Nature"
        assert first.pub_year == 2020  # parsed from MedlineDate
        assert first.doi == "10.1000/abc"
        assert first.url == "https://pubmed.ncbi.nlm.nih.gov/111/"

    @pytest.mark.asyncio
    async def test_year_fallback_and_missing_abstract(self, patch_transport):
        patch_transport(_pubmed_handler(["222"]))
        recs = await PubmedAdapter().search("x", 5)
        assert recs[0].pub_year == 2021
        assert recs[0].abstract == ""
        assert recs[0].venue == "Cell Metabolism"

    @pytest.mark.asyncio
    async def test_search_empty_results(self, patch_transport):
        patch_transport(_pubmed_handler([]))
        assert await PubmedAdapter().search("x", 5) == []

    @pytest.mark.asyncio
    async def test_fetch_single(self, patch_transport):
        patch_transport(_pubmed_handler(["111"]))
        rec = await PubmedAdapter().fetch("111")
        assert rec and rec.external_id == "111"


class TestEuropePmc:
    @pytest.mark.asyncio
    async def test_search_parses_and_strips_markup(self, patch_transport):
        def handler(request: httpx.Request) -> httpx.Response:
            assert "resultType=core" in str(request.url)
            return httpx.Response(200, json=EPMC_JSON)

        patch_transport(handler)
        recs = await EuropePmcAdapter().search("sirtuins", 10)

        assert len(recs) == 2
        article = recs[0]
        assert article.external_id == "333"
        assert article.kind == "article"
        assert article.title == "Metabolic epigenetics review"
        assert article.abstract == "Abstract with markup inside."
        assert article.authors == ["Smith A", "Jones B", "Lee C"]
        assert article.pub_year == 2022
        assert article.venue == "Trends in Biochemical Sciences"
        assert article.url == "https://pubmed.ncbi.nlm.nih.gov/333/"

        preprint = recs[1]
        assert preprint.kind == "preprint"
        assert preprint.url.startswith("https://europepmc.org/article/PPR/")

    @pytest.mark.asyncio
    async def test_fetch_by_id(self, patch_transport):
        def handler(request: httpx.Request) -> httpx.Response:
            assert request.url.params.get("query") == "EXT_ID:333"
            return httpx.Response(200, json=EPMC_JSON)

        patch_transport(handler)
        rec = await EuropePmcAdapter().fetch("333")
        assert rec and rec.external_id == "333"

    @pytest.mark.asyncio
    async def test_no_hits(self, patch_transport):
        patch_transport(
            lambda r: httpx.Response(200, json={"resultList": {"result": []}}))
        assert await EuropePmcAdapter().search("x", 5) == []


class TestRecord:
    def test_as_row_shape(self):
        rec = sources.Record(
            external_id="999", title="T", abstract="A", authors=["X"],
            pub_year=2024, venue="V", url="https://x", doi="10.1/x",
            raw={"raw": True},
        )
        row = rec.as_row("pubmed")
        assert row["source_id"] == "pubmed"
        assert row["external_id"] == "999"
        assert row["kind"] == "article"
        for key in ("title", "abstract", "authors", "pub_year", "venue", "url",
                    "doi", "raw"):
            assert key in row
