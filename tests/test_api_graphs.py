"""api.graphs — CRUD, ownership/visibility rules, validation, analytics, paths."""

import uuid

import pytest

import api.graphs as graphs
import api.research as research
from tests.conftest import USER_A, USER_B


@pytest.fixture
def gid(client, seeded_entities):
    """A graph forked from the sirtuins topic (3 seeded entities)."""
    r = client.post("/v1/graphs", json={"name": "My Graph", "forked_from_slug": "sirtuins"})
    assert r.status_code == 200, r.text
    return r.json()["id"]


class TestCreate:
    def test_create_plain_graph(self, client):
        r = client.post("/v1/graphs", json={"name": "Standalone"})
        assert r.status_code == 200
        body = r.json()
        assert body["name"] == "Standalone"
        assert body["visibility"] == "private"
        assert body["seeded_nodes"] == 0

    def test_create_fork_seeds_topic_entities(self, client, seeded_entities):
        r = client.post("/v1/graphs", json={"name": "Fork", "forked_from_slug": "sirtuins"})
        body = r.json()
        assert body["seeded_nodes"] == 3
        detail = client.get(f"/v1/graphs/{body['id']}").json()
        labels = {n["label"] for n in detail["nodes"]}
        assert labels == {"SIRT1", "SIRT3", "Resveratrol"}

    def test_create_fork_unknown_topic_rejected(self, client, fake_db):
        r = client.post("/v1/graphs", json={"name": "Fork", "forked_from_slug": "nope"})
        assert r.status_code == 400
        assert "Unknown topic" in r.json()["detail"]
        assert fake_db.all("user_graphs") == []

    def test_create_requires_auth(self, client, monkeypatch):
        """No Supabase session -> 401 (multi-user routers never fall back open)."""

        async def no_user(request):
            return None

        monkeypatch.setattr(graphs, "get_user_id", no_user)
        monkeypatch.setattr(research, "get_user_id", no_user)
        r = client.post("/v1/graphs", json={"name": "X"})
        assert r.status_code == 401

    def test_db_unavailable_returns_503(self, client, fake_db, monkeypatch):
        monkeypatch.setattr(graphs, "DB_ENABLED", False)
        r = client.post("/v1/graphs", json={"name": "X"})
        assert r.status_code == 503


class TestListVisibility:
    def test_list_shows_own_and_public_only(self, make_client, fake_db,
                                            seeded_entities):
        # NOTE: the auth patch is a single module attribute, so create the other
        # user's graphs FIRST and assert as USER_A last.
        b = make_client(USER_B)
        b.post("/v1/graphs", json={"name": "Theirs", "visibility": "public"})
        b.post("/v1/graphs", json={"name": "Hidden"})

        a = make_client(USER_A)
        a.post("/v1/graphs", json={"name": "Mine"})
        names = [g["name"] for g in a.get("/v1/graphs").json()["graphs"]]
        assert "Mine" in names and "Theirs" in names
        assert "Hidden" not in names

    def test_get_public_graph_of_other_user_visible(self, make_client,
                                                    seeded_entities):
        other = make_client(USER_B)
        gid = other.post(
            "/v1/graphs", json={"name": "Shared", "visibility": "public",
                                "forked_from_slug": "sirtuins"}
        ).json()["id"]

        other.patch(f"/v1/graphs/{gid}", json={"visibility": "private"})
        mine = make_client(USER_A)
        assert mine.get(f"/v1/graphs/{gid}").status_code == 404

        other2 = make_client(USER_B)
        other2.patch(f"/v1/graphs/{gid}", json={"visibility": "public"})
        mine2 = make_client(USER_A)
        assert mine2.get(f"/v1/graphs/{gid}").status_code == 200

    def test_get_unknown_graph_404(self, client):
        assert client.get("/v1/graphs/not-a-uuid").status_code == 400
        assert client.get(f"/v1/graphs/{uuid.uuid4()}").status_code == 404


class TestUpdateDelete:
    def test_patch_and_delete_own_graph(self, client, gid, fake_db):
        r = client.patch(f"/v1/graphs/{gid}",
                         json={"visibility": "public", "name": "Renamed"})
        assert r.json()["name"] == "Renamed"
        assert r.json()["visibility"] == "public"

        r = client.delete(f"/v1/graphs/{gid}")
        assert r.json()["status"] == "ok"
        assert fake_db.all("user_graphs") == []
        assert fake_db.all("user_nodes") == []  # cascade via FK in real DB

    def test_patch_other_users_graph_forbidden(self, make_client, fake_db,
                                               seeded_entities):
        owner = make_client(USER_B)
        gid = owner.post("/v1/graphs", json={"name": "B's"}).json()["id"]
        r = make_client(USER_A).patch(f"/v1/graphs/{gid}", json={"name": "Hijacked"})
        assert r.status_code == 404
        assert fake_db.all("user_graphs")[0]["name"] == "B's"


class TestNodesEdges:
    def test_add_node_by_entity_and_custom(self, client, gid, fake_db):
        # sirt1/sirt3/resveratrol were seeded by the fork; "nad" is new.
        r = client.post(f"/v1/graphs/{gid}/nodes", json={"entity_id": "sirt1"})
        assert r.status_code == 200 and r.json()["duplicate"] is True  # forked

        r = client.post(f"/v1/graphs/{gid}/nodes", json={"entity_id": "nad"})
        assert r.json()["duplicate"] is False

        r = client.post(f"/v1/graphs/{gid}/nodes", json={"entity_id": "nad"})
        assert r.json()["duplicate"] is True

        # unknown entity -> 400
        assert client.post(
            f"/v1/graphs/{gid}/nodes", json={"entity_id": "ghost"}
        ).status_code == 400

        # custom label, also deduped by label
        r = client.post(f"/v1/graphs/{gid}/nodes",
                        json={"custom_label": "Novel Kinase X"})
        assert r.json()["duplicate"] is False
        r = client.post(f"/v1/graphs/{gid}/nodes",
                        json={"custom_label": "Novel Kinase X"})
        assert r.json()["duplicate"] is True

        # neither entity_id nor custom_label -> 400
        assert client.post(f"/v1/graphs/{gid}/nodes", json={}).status_code == 400

        nodes = fake_db.all("user_nodes")
        custom = [n for n in nodes if n.get("custom_label") == "Novel Kinase X"]
        assert len(custom) == 1
        assert custom[0]["entity_id"] is None

    def test_add_edge_dedup_and_validation(self, client, gid, fake_db):
        a = client.post(f"/v1/graphs/{gid}/nodes",
                        json={"entity_id": "sirt1"}).json()["id"]
        b = client.post(f"/v1/graphs/{gid}/nodes",
                        json={"entity_id": "nad"}).json()["id"]

        r = client.post(f"/v1/graphs/{gid}/edges", json={
            "from_node": a, "to_node": b, "relation": "activates",
            "note": "from abstract", "evidence_pmid": "111",
        })
        assert r.status_code == 200 and r.json()["duplicate"] is False

        r = client.post(f"/v1/graphs/{gid}/edges", json={
            "from_node": a, "to_node": b, "relation": "activates",
        })
        assert r.json()["duplicate"] is True

        # node from another graph -> 400
        other = client.post("/v1/graphs", json={"name": "Other"}).json()["id"]
        c = client.post(f"/v1/graphs/{other}/nodes",
                        json={"custom_label": "Z"}).json()["id"]
        assert client.post(f"/v1/graphs/{gid}/edges", json={
            "from_node": a, "to_node": c, "relation": "x"
        }).status_code == 400

        # malformed uuid -> 400 (not a 500)
        assert client.post(f"/v1/graphs/{gid}/edges", json={
            "from_node": "not-a-uuid", "to_node": b, "relation": "x"
        }).status_code == 400

        assert len(fake_db.all("user_edges")) == 1

    def test_remove_node_and_edge(self, client, gid, fake_db):
        # sirt3 comes pre-seeded by the fork
        forked = [n for n in fake_db.all("user_nodes")
                  if n.get("entity_id") == "sirt3"]
        n = forked[0]["id"]
        e = client.post(f"/v1/graphs/{gid}/edges", json={
            "from_node": n, "to_node": n, "relation": "self"
        }).json()["id"]

        assert client.delete(f"/v1/graphs/{gid}/edges/{e}").json()["status"] == "ok"
        assert client.delete(f"/v1/graphs/{gid}/nodes/{n}").json()["status"] == "ok"
        assert client.delete(f"/v1/graphs/{gid}/nodes/zzz").status_code == 400
        remaining = fake_db.all("user_nodes")
        assert len(remaining) == 2  # sirt1 + resveratrol still forked in
        assert all(node["entity_id"] != "sirt3" for node in remaining)
        assert fake_db.all("user_edges") == []  # cascade removed the self-edge


class TestAnalyticsPaths:
    def test_analytics_metrics(self, client, gid):
        ids = {}
        for label, entity in (("SIRT1", "sirt1"), ("Resveratrol", "resveratrol"),
                              ("NAD", None)):
            payload = ({"entity_id": entity} if entity
                       else {"custom_label": label, "custom_type": "compound"})
            ids[label] = client.post(f"/v1/graphs/{gid}/nodes",
                                     json=payload).json()["id"]
        client.post(f"/v1/graphs/{gid}/edges", json={
            "from_node": ids["Resveratrol"], "to_node": ids["SIRT1"],
            "relation": "activates"})
        client.post(f"/v1/graphs/{gid}/edges", json={
            "from_node": ids["SIRT1"], "to_node": ids["NAD"],
            "relation": "consumes"})

        body = client.get(f"/v1/graphs/{gid}/analytics").json()
        assert body["summary"]["nodes"] == 4  # 3 forked + custom NAD
        assert body["summary"]["edges"] == 2
        assert body["summary"]["is_dag"] is True
        top = body["nodes"][0]
        assert {"label", "degree", "pagerank", "betweenness", "community"} <= set(top)

    def test_path_by_label(self, client, gid):
        a = client.post(f"/v1/graphs/{gid}/nodes",
                        json={"entity_id": "resveratrol"}).json()["id"]
        b = client.post(f"/v1/graphs/{gid}/nodes",
                        json={"entity_id": "sirt1"}).json()["id"]
        client.post(f"/v1/graphs/{gid}/edges", json={
            "from_node": a, "to_node": b, "relation": "activates"})

        r = client.get(f"/v1/graphs/{gid}/path",
                       params={"frm": "Resveratrol", "to": "SIRT1"})
        body = r.json()
        assert body["connected"] is True
        assert [p["label"] for p in body["path"]] == ["Resveratrol", "SIRT1"]
        assert body["hops"] == [{"from": "Resveratrol", "to": "SIRT1",
                                 "relation": "activates"}]

    def test_path_disconnected(self, client, gid):
        client.post(f"/v1/graphs/{gid}/nodes", json={"custom_label": "Island A"})
        client.post(f"/v1/graphs/{gid}/nodes", json={"custom_label": "Island B"})
        r = client.get(f"/v1/graphs/{gid}/path",
                       params={"frm": "Island A", "to": "Island B"})
        assert r.json()["connected"] is False
        assert r.json()["path"] == []

    def test_path_unknown_node_404(self, client, gid):
        client.post(f"/v1/graphs/{gid}/nodes", json={"custom_label": "A"})
        r = client.get(f"/v1/graphs/{gid}/path", params={"frm": "A", "to": "Ghost"})
        assert r.status_code == 404


class TestFailureHandling:
    def test_db_failure_becomes_500(self, client, fake_db):
        fake_db.fail_next = ("insert", "user_graphs")
        r = client.post("/v1/graphs", json={"name": "Doomed"})
        assert r.status_code == 500
        assert "Database error" in r.json()["detail"]
