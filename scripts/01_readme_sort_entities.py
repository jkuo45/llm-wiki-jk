import sys
import argparse
import os

def sort_markdown_table(file_path):
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    start_index = -1
    for i, line in enumerate(lines):
        # Match table header with relevance_score or relevance
        if '| entity' in line.lower() and ('relevance' in line.lower()):
            start_index = i
            break
    
    if start_index == -1:
        print(f"Table with 'entity' and 'relevance' not found in {file_path}")
        return

    header = lines[start_index]
    separator = lines[start_index + 1]
    rows = lines[start_index + 2:]

    # Filter out empty lines or non-table lines at the end
    table_rows = []
    end_index = len(rows)
    for i, row in enumerate(rows):
        if not row.strip().startswith('|'):
            end_index = i
            break
        table_rows.append(row.strip())
    
    remaining_lines = rows[end_index:]

    def parse_row(row):
        parts = [p.strip() for p in row.split('|')[1:-1]]
        # entity | datetime | type | relevance | sentiment
        # We need to find the index of relevance and sentiment from the header
        header_parts = [p.strip().lower() for p in header.split('|')[1:-1]]
        
        relevance_idx = -1
        sentiment_idx = -1
        
        for idx, h in enumerate(header_parts):
            if 'relevance' in h:
                relevance_idx = idx
            if 'sentiment' in h:
                sentiment_idx = idx
        
        relevance = 0
        sentiment = 0
        
        if relevance_idx != -1 and relevance_idx < len(parts):
            try:
                relevance = int(parts[relevance_idx])
            except (ValueError, IndexError):
                relevance = 0
        
        if sentiment_idx != -1 and sentiment_idx < len(parts):
            try:
                sentiment = int(parts[sentiment_idx])
            except (ValueError, IndexError):
                sentiment = 0
                
        return (relevance, sentiment)

    # Sort: relevance desc (index 0), then sentiment desc (index 1)
    sorted_rows = sorted(table_rows, key=lambda x: parse_row(x), reverse=True)

    new_content = lines[:start_index] + [header, separator] + [r + '\n' for r in sorted_rows] + remaining_lines
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_content)
    print(f"Successfully sorted table in {file_path}")

def main():
    parser = argparse.ArgumentParser(description="Sort markdown entity tables by relevance and sentiment.")
    parser.add_argument("file", help="Path to the markdown file to sort (e.g., README.md or notes/topic/README.md)")
    args = parser.parse_args()

    sort_markdown_table(args.file)

if __name__ == "__main__":
    main()
