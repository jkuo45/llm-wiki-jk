# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "pymupdf4llm",
# ]
# ///

import argparse
import pathlib
import sys
import pymupdf4llm

def parse_pdf(pdf_path: str, output_dir: str = None) -> None:
    """
    Parses a PDF file into Markdown format suitable for Obsidian.
    """
    pdf_file = pathlib.Path(pdf_path)
    if not pdf_file.exists():
        print(f"Error: File not found: {pdf_path}", file=sys.stderr)
        sys.exit(1)
        
    print(f"Parsing {pdf_file.name}...")
    try:
        # Convert PDF to markdown
        md_text = pymupdf4llm.to_markdown(str(pdf_file))
    except Exception as e:
        print(f"Error parsing PDF: {e}", file=sys.stderr)
        sys.exit(1)
        
    out_dir = pathlib.Path(output_dir) if output_dir else pdf_file.parent
    out_dir.mkdir(parents=True, exist_ok=True)
    
    out_file = out_dir / f"{pdf_file.stem}.md"
    
    # Optional post-processing for Obsidian
    # e.g., adding YAML frontmatter
    frontmatter = f"---\ntitle: {pdf_file.stem}\nsource: {pdf_file.name}\ntags: [pdf, parsed]\n---\n\n"
    final_text = frontmatter + md_text

    out_file.write_text(final_text, encoding="utf-8")
    print(f"Successfully converted {pdf_file.name} to Markdown.")
    print(f"Output saved to: {out_file}")

def main() -> None:
    parser = argparse.ArgumentParser(description="Parse PDF to Markdown (ideal for Obsidian)")
    parser.add_argument("pdf_path", help="Path to the input PDF file")
    parser.add_argument("--outdir", "-o", help="Optional output directory. Defaults to the same directory as the PDF.", default=None)

    args = parser.parse_args()
    parse_pdf(args.pdf_path, args.outdir)


if __name__ == "__main__":
    main()
