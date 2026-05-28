import sys

def sort_markdown_table(file_path):
    with open(file_path, 'r') as f:
        lines = f.readlines()

    start_index = -1
    for i, line in enumerate(lines):
        if '| entity' in line and 'relevance_score' in line:
            start_index = i
            break
    
    if start_index == -1:
        print("Table not found")
        return

    header = lines[start_index]
    separator = lines[start_index + 1]
    rows = lines[start_index + 2:]

    # Filter out empty lines or non-table lines at the end if any
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
        try:
            relevance = int(parts[3])
        except (ValueError, IndexError):
            relevance = 0
        try:
            sentiment = int(parts[4])
        except (ValueError, IndexError):
            sentiment = 0
        return (relevance, sentiment, row)

    # Sort: relevance desc (index 0), then sentiment desc (index 1)
    sorted_rows = sorted(table_rows, key=lambda x: (parse_row(x)[0], parse_row(x)[1]), reverse=True)

    new_content = lines[:start_index] + [header, separator] + [r + '\n' for r in sorted_rows] + remaining_lines
    
    with open(file_path, 'w') as f:
        f.writelines(new_content)

if __name__ == "__main__":
    sort_markdown_table('README.md')
