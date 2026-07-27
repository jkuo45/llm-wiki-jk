import argparse
import os
import subprocess

parser = argparse.ArgumentParser(description="Run AlphaFold analysis for given genes.")
parser.add_argument("genes", nargs="+", help="List of genes to analyze")
parser.add_argument(
    "--out-dir",
    default=os.path.expanduser("~/Documents/llm-wiki-jk/alphafold_data"),
    help="Output directory",
)
parser.add_argument(
    "--report",
    default=os.path.expanduser("~/Documents/llm-wiki-jk/src/tasks/alphafold_report.md"),
    help="Output report file",
)
args = parser.parse_args()

genes = args.genes
out_dir = args.out_dir
os.makedirs(out_dir, exist_ok=True)

uniprot_tool = os.path.expanduser(
    "~/.gemini/config/plugins/science/skills/uniprot_database/scripts/uniprot_tools.py"
)
fetch_tool = os.path.expanduser(
    "~/.gemini/config/plugins/science/skills/alphafold_database_fetch_and_analyze/scripts/fetch_structure.py"
)
plddt_tool = os.path.expanduser(
    "~/.gemini/config/plugins/science/skills/alphafold_database_fetch_and_analyze/scripts/analyze_plddt.py"
)
pae_tool = os.path.expanduser(
    "~/.gemini/config/plugins/science/skills/alphafold_database_fetch_and_analyze/scripts/analyze_pae.py"
)

report_lines = ["# AlphaFold Structural Analysis Report\n"]

env = os.environ.copy()
env["SCIENCE_SKILLS_USER_AGENT"] = "antigravity-agent/1.0 (test@example.com)"

for gene in genes:
    report_lines.append(f"## {gene}\n")
    print(f"Processing {gene}...")

    # Get accession
    cmd = [
        "uv",
        "run",
        uniprot_tool,
        "search",
        f"gene:{gene} AND taxonomy_id:9606 AND reviewed:true",
        "--format",
        "tsv",
        "--fields",
        "accession",
        "--limit",
        "1",
    ]
    res = subprocess.run(cmd, capture_output=True, text=True, env=env)
    lines = res.stdout.strip().split("\n")
    if len(lines) > 1:
        acc = lines[-1].strip()
        report_lines.append(f"**UniProt Accession:** {acc}\n")

        # Fetch structure
        fetch_cmd = ["uv", "run", fetch_tool, acc, "-o", out_dir]
        res_fetch = subprocess.run(fetch_cmd, capture_output=True, text=True, env=env)
        if res_fetch.returncode != 0:
            report_lines.append(
                f"Failed to fetch data: {res_fetch.stdout} {res_fetch.stderr}\n"
            )
            continue

        # Analyze pLDDT
        metadata_file = os.path.join(out_dir, f"AF-{acc}-F1-metadata.json")
        if os.path.exists(metadata_file):
            plddt_res = subprocess.run(
                ["uv", "run", plddt_tool, metadata_file],
                capture_output=True,
                text=True,
                env=env,
            )
            report_lines.append("### pLDDT Confidence Analysis\n```\n")
            report_lines.append(plddt_res.stdout)
            report_lines.append("```\n")

        # Analyze PAE
        pae_file = os.path.join(out_dir, f"AF-{acc}-F1-predicted_aligned_error_v6.json")
        if os.path.exists(pae_file):
            pae_res = subprocess.run(
                ["uv", "run", pae_tool, pae_file],
                capture_output=True,
                text=True,
                env=env,
            )
            report_lines.append("### Domain Boundary Analysis (PAE)\n```\n")
            report_lines.append(pae_res.stdout)
            report_lines.append("```\n")
    else:
        report_lines.append("Accession not found.\n")

    report_lines.append("\n---\n")

with open(args.report, "w") as f:
    f.writelines(report_lines)

print(f"Report generated at {args.report}")
