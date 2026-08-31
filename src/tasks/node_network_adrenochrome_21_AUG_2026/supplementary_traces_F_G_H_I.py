#!/usr/bin/env python3
"""Supplementary traces F-I for the adrenochrome protocol trace atlas (round 2).

Run against graphify-out/graph.json build 867a5ae5fdb8a46c, RANDOM_SEED convention
of scripts/analysis/node_analysis.py (seed unused here except where nulls are drawn).

F. Confidence-weighted PPR re-rank of the full coupling ladder
   (Phase 3 / Phase 1 method: weight = confidence_score on undirected projection).
G. MB <-> carbazochrome Complex-I competition subgraph (MRR amplifier conflict).
H. Hormetic Window / SIRT3-SIRT4 ratio ego-graphs (MRR predictive biomarker).
I. Post-entity-resolution re-run: NF-kB variant merge -> Arm C + ladder deltas.

Usage:
  uv run --with networkx --with scipy python3 supplementary_traces_F_G_H_I.py
"""

from __future__ import annotations

import json
from collections import Counter
from pathlib import Path

import networkx as nx

ROOT = Path(__file__).resolve().parents[3]
GRAPH = ROOT / "graphify-out" / "graph.json"

# Canonical NF-kB merge set (quartet study §4.3 / remediation Phase 0b)
NFKB_CANON = "nf_b"
NFKB_VARIANTS = [
    "nf_kb",                    # NF-kB
    "nf_kappab",                # NF-kappaB
    "nf_b_p65",                 # NF-κB p65
    "rela_p65_nf_b_subunit",    # RelA/p65 (NF-κB subunit)
    "nf_kappa_b_signaling",     # NF-kappa B signaling
    "nf_b_signaling_pathway",   # NF-κB signaling pathway
]

LADDER = [
    ("aminoguanidine", "Aminoguanidine"),
    ("methylene_blue", "Methylene blue"),
    ("carbazochrome", "Carbazochrome"),
    ("ascorbic_acid", "Ascorbic Acid"),
    ("rapamycin", "Rapamycin"),
    ("mitohormesis", "Mitohormesis"),
    ("urolithin_a", "Urolithin A"),
    ("autophagy", "Autophagy"),
    ("creatine", "Creatine"),
    ("fisetin", "Fisetin"),
    ("spermidine", "Spermidine"),
    ("resveratrol", "Resveratrol"),
    ("nicotinamide_riboside", "Nicotinamide Riboside"),
    ("nad", "NAD+"),
    ("n_acetylcysteine", "N-Acetylcysteine"),
    ("sirtuins", "Sirtuins"),
]
ADR = "adrenochrome"


def load(path: Path):
    data = json.loads(path.read_text(encoding="utf-8"))
    return data["nodes"], data["links"]


def build_undirected(nodes, links, weight_key=None):
    G = nx.Graph()
    G.add_nodes_from(n["id"] for n in nodes)
    lab = {n["id"]: n["label"] for n in nodes}
    for l in links:
        s, t = l["source"], l["target"]
        if s == t:
            continue
        w = float(l.get("confidence_score", 1.0)) if weight_key == "weight" else 1.0
        if G.has_edge(s, t):
            if weight_key == "weight":
                G[s][t]["weight"] = max(G[s][t]["weight"], w)
        else:
            G.add_edge(s, t, weight=w,
                       relation=l.get("relation"),
                       confidence_score=l.get("confidence_score"))
    cc = max(nx.connected_components(G), key=len)
    return G.subgraph(cc).copy(), lab


def rank_of(order_sorted_scores, nid):
    for i, (n, _) in enumerate(order_sorted_scores):
        if n == nid:
            return i + 1
    return None


def run_f(nodes, links):
    print("=" * 70)
    print("RUN F - Confidence-weighted PPR re-rank of the full ladder")
    print("=" * 70)
    Gu, _ = build_undirected(nodes, links)               # unweighted
    Gw, _ = build_undirected(nodes, links, weight_key="weight")  # weighted
    pu = nx.pagerank(Gu, personalization={ADR: 1.0}, alpha=0.85, max_iter=500, tol=1e-9)
    pw = nx.pagerank(Gw, personalization={ADR: 1.0}, alpha=0.85, max_iter=500, tol=1e-9)
    ou = sorted(pu.items(), key=lambda x: -x[1])
    ow = sorted(pw.items(), key=lambda x: -x[1])
    print(f"    {'node':26s} {'unw rank':>9s} {'w rank':>7s} {'unw score':>10s} {'w score':>10s} {'delta':>6s}")
    for nid, label in LADDER:
        ru = rank_of(ou, nid)
        rw = rank_of(ow, nid)
        d = (rw - ru) if (ru and rw) else None
        ds = f"{d:+d}" if d is not None else "—"
        print(f"    {label:26s} #{ru:<8d} #{rw:<6d} {pu[nid]:10.5f} {pw[nid]:10.5f} {ds:>6s}")


def show_edge(lab, s, t, edata, directed_links):
    rel = edata.get("relation") or "?"
    conf = edata.get("confidence_score")
    # recover stored direction from directed triple list
    key = {(s, t), (t, s)}
    arrow = "->"
    for dl in directed_links:
        if (dl["source"], dl["target"]) in key:
            arrow = "--[%s|%s]-->" % (dl.get("relation"), dl.get("confidence_score"))
            print(f"      {lab[dl['source']]} {arrow} {lab[dl['target']]}")
            return
    print(f"      {lab[s]} --[{rel}|{conf}]--> {lab[t]}")


def run_g(nodes, links):
    print()
    print("=" * 70)
    print("RUN G - MB <-> carbazochrome Complex-I competition subgraph")
    print("=" * 70)
    G, lab = build_undirected(nodes, links)

    focus = ["methylene_blue", "carbazochrome", "complex_i", "complex_iii",
             ADR, "adrenochrome_formation"]
    present = [n for n in focus if n in G]
    print("    Focus-node presence:", {lab[n]: (n in G) for n in focus})

    for n in ["methylene_blue", "carbazochrome", "complex_i"]:
        if n not in G:
            continue
        print(f"\n    All stored edges of {lab[n]} ({G.degree(n)}):")
        for nbr in sorted(G.neighbors(n)):
            show_edge(lab, n, nbr, G[n][nbr], links)

    # distance carbazochrome -> Complex I
    try:
        sp = nx.shortest_path(G, "carbazochrome", "complex_i")
        print("\n    Shortest path Carbazochrome -> Complex I:",
              "  ".join(lab[x] for x in sp))
        paths = list(nx.all_shortest_paths(G, "carbazochrome", "complex_i"))
        print(f"    multiplicity = {len(paths)}")
    except nx.NetworkXNoPath:
        print("    Carbazochrome -> Complex I: NO PATH")

    # shared neighbours MB vs carbazochrome
    nb_mb = set(G.neighbors("methylene_blue"))
    nb_cb = set(G.neighbors("carbazochrome"))
    inter = nb_mb & nb_cb
    print(f"\n    |N(MB)|={len(nb_mb)}  |N(Carb)|={len(nb_cb)}  "
          f"shared={[lab[x] for x in inter]}")
    jac = len(inter) / len(nb_mb | nb_cb)
    print(f"    Jaccard(MB, Carbazochrome) = {jac:.3f}")

    # does anything wire carbazochrome into electron transport?
    etch = [n for n in G if "complex" in n.lower() or "electron" in n.lower()]
    hits = [lab[n] for n in etch if nx.has_path(G, "carbazochrome", n)
            and nx.shortest_path_length(G, "carbazochrome", n) <= 3]
    print(f"    ETC-family nodes within 3 hops of Carbazochrome: {hits}")

    # who feeds Complex I? redox context around complex_i at radius 1
    print("\n    Complex I neighbourhood (radius 1):",
          sorted(lab[x] for x in G.neighbors("complex_i")))


def run_h(nodes, links):
    print()
    print("=" * 70)
    print("RUN H - Hormetic Window / SIRT3-SIRT4 ratio ego-graphs")
    print("=" * 70)
    G, lab = build_undirected(nodes, links)
    dup = Counter((l["source"], l["target"]) for l in links
                  if {l["source"], l["target"]} == {"sirt3_sirt4_ratio", "hormetic_window"})
    for k, v in dup.items():
        if v > 1:
            print(f"    DUPLICATE TRIPLE x{v}: {lab[k[0]]} --{k[1]}--> "
                  f"{lab[k[0]]}/{lab[k[1]]}  (dedup ticket)")

    for nid in ["hormetic_window", "sirt3_sirt4_ratio"]:
        if nid not in G:
            print(f"    {nid}: NOT IN GIANT COMPONENT")
            continue
        eg = nx.ego_graph(G, nid, radius=2)
        print(f"\n    Ego({lab[nid]}, r=2): {eg.number_of_nodes()} nodes / "
              f"{eg.number_of_edges()} edges")
        for u, v, d in sorted(eg.edges(data=True)):
            if u == nid or v == nid:
                print(f"      {lab[u]} --[{d.get('relation')}|"
                      f"{d.get('confidence_score')}]--> {lab[v]}")

    # SIRT3/SIRT4 family wiring relevant to the biomarker claim
    for nid in ["sirt3", "sirt4"]:
        if nid in G:
            print(f"\n    {lab[nid]}: degree {G.degree(nid)}")
            mn = [x for x in G.neighbors(nid) if "mn" in lab[x].lower() or "sod" in lab[x].lower()]
            print(f"      MnSOD-family neighbours: {[lab[x] for x in mn]}")
    try:
        sp = nx.shortest_path(G, "sirt4", "hormetic_window")
        print(f"\n    SIRT4 -> Hormetic Window shortest path: "
              f"{'  '.join(lab[x] for x in sp)}")
    except nx.NetworkXNoPath:
        pass


def run_i(nodes, links):
    print()
    print("=" * 70)
    print("RUN I - Post-entity-resolution re-run (NF-kB variant merge)")
    print("=" * 70)
    lab0 = {n["id"]: n["label"] for n in nodes}

    def canon(nid):
        return NFKB_CANON if nid in NFKB_VARIANTS else nid

    merged_nodes = [n for n in nodes if n["id"] not in NFKB_VARIANTS]
    merged_links = []
    for l in links:
        nl = dict(l)
        nl["source"] = canon(l["source"])
        nl["target"] = canon(l["target"])
        merged_links.append(nl)
    # collapse parallel edges keeping max-confidence representative per pair
    best = {}
    for l in merged_links:
        key = tuple(sorted((l["source"], l["target"])))
        c = float(l.get("confidence_score", 0))
        if key not in best or c > float(best[key].get("confidence_score", 0)):
            best[key] = l
    merged_links = list(best.values())
    print(f"    Merged {len(NFKB_VARIANTS)} variants into '{lab0[NFKB_CANON]}'; "
          f"edges {len(links)} -> {len(merged_links)}")

    G0, _ = build_undirected(nodes, links)
    G1, lab1 = build_undirected(merged_nodes, merged_links)

    def arm_report(G, tag):
        out = {}
        for src, name in [("mitohormesis", "MH"), ("autophagy", "Auto"),
                          ("sirtuins", "Sirt")]:
            try:
                paths = list(nx.all_shortest_paths(G, src, ADR))
                bridges = sorted({lab1[p[1]] for p in paths if len(p) > 2})
                out[name] = (len(paths), bridges, len(paths[0]))
            except nx.NetworkXNoPath:
                out[name] = (0, [], None)
            print(f"    [{tag}] {name} -> Adrenochrome: {out[name][0]} shortest "
                  f"path(s), bridges={out[name][1]}, hops={out[name][2]}")
        # Jaccard Sirtuins vs Adr
        try:
            a, b = set(G.neighbors("sirtuins")), set(G.neighbors(ADR))
            j = len(a & b) / len(a | b)
            print(f"    [{tag}] Jaccard(Sirtuins, Adrenochrome) = {j:.4f} "
                  f"shared={sorted(lab1[x] for x in a & b)[:8]}")
        except Exception:
            pass
        return out

    print("\n    --- BEFORE dedup ---")
    arm_report(G0, "pre")
    print("\n    --- AFTER dedup ---")
    arm_report(G1, "post")

    # PPR ranks before/after for the full ladder
    p0 = nx.pagerank(G0, personalization={ADR: 1.0}, alpha=0.85, max_iter=500, tol=1e-9)
    p1 = nx.pagerank(G1, personalization={ADR: 1.0}, alpha=0.85, max_iter=500, tol=1e-9)
    o0 = sorted(p0.items(), key=lambda x: -x[1])
    o1 = sorted(p1.items(), key=lambda x: -x[1])
    print(f"\n    {'node':24s} {'pre':>6s} {'post':>6s}")
    for nid, label in LADDER:
        r0, r1 = rank_of(o0, nid), rank_of(o1, nid)
        print(f"    {label:24s} #{r0:<5d} #{r1:<5d}")

    # multi-path counts for Fisetin / Resveratrol -> Adr
    for src in ["fisetin", "resveratrol"]:
        for G, tag in [(G0, "pre"), (G1, "post")]:
            paths = list(nx.all_shortest_paths(G, src, ADR))
            bridges = sorted({lab1[p[1]] for p in paths if len(p) > 2})
            print(f"    [{tag}] {label_of(src, lab1)} -> Adr: {len(paths)} shortest "
                  f"path(s), bridges={bridges}")

    # Arm C chain after merge: does Sirtuins reach NF-kB more directly?
    for G, tag in [(G0, "pre"), (G1, "post")]:
        sp = nx.shortest_path(G, "sirtuins", ADR)
        print(f"    [{tag}] Sirtuins->Adr example path: "
              f"{'  '.join(label_of(x, lab1) for x in sp)}")


def label_of(nid, lab):
    return lab.get(nid, nid)


def main():
    nodes, links = load(GRAPH)
    run_f(nodes, links)
    run_g(nodes, links)
    run_h(nodes, links)
    run_i(nodes, links)


if __name__ == "__main__":
    main()
