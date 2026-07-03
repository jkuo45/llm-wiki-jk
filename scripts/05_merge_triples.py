import argparse
import json
import sys

def main():
    parser = argparse.ArgumentParser(description="Merge multiple JSON files containing triples into a single JSON file.")
    parser.add_argument("input_files", nargs='+', help="Paths to the input JSON files.")
    parser.add_argument("-o", "--output", required=True, help="Path to the output JSON file.")
    
    args = parser.parse_args()
    
    combined_triples = []
    
    for file_path in args.input_files:
        try:
            with open(file_path, 'r') as f:
                triples = json.load(f)
                if isinstance(triples, list):
                    combined_triples.extend(triples)
                else:
                    print(f"Warning: File {file_path} does not contain a JSON list. Skipping.", file=sys.stderr)
        except Exception as e:
            print(f"Error reading {file_path}: {e}", file=sys.stderr)
            sys.exit(1)
            
    try:
        with open(args.output, 'w') as f:
            json.dump(combined_triples, f, indent=2)
        print(f"Successfully merged {len(args.input_files)} files into {args.output} (Total triples: {len(combined_triples)})")
    except Exception as e:
        print(f"Error writing to {args.output}: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
