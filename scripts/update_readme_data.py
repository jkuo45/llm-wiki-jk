import os
import glob
from datetime import datetime

def get_timestamp():
    # Using PDT as requested in GEMINI.md examples, or local if not specified.
    # The prompt says %d_%b_%Y %I:%M %p %Z
    # I'll use the current time in the user's locale or UTC if unsure, 
    # but I'll try to match the format.
    now = datetime.now()
    return now.strftime("%d_%b_%Y %I:%M %p %Z")

def count_words(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            return len(content.split())
    except:
        return 0

def main():
    notes_dir = 'notes'
    topics = sorted([d for d in os.listdir(notes_dir) if os.path.isdir(os.path.join(notes_dir, d))])
    
    topic_data = []
    document_data = []
    
    for topic in topics:
        topic_path = os.path.join(notes_dir, topic)
        md_files = glob.glob(os.path.join(topic_path, '*.md'))
        
        entities = [f for f in md_files if not os.path.basename(f).startswith('[document]')]
        documents = [f for f in md_files if os.path.basename(f).startswith('[document]')]
        
        last_updated_ts = 0
        if md_files:
            last_updated_ts = max(os.path.getmtime(f) for f in md_files)
            last_updated_str = datetime.fromtimestamp(last_updated_ts).strftime("%d_%b_%Y")
        else:
            last_updated_str = "---"
            
        topic_data.append({
            'topic': topic,
            'last_updated': last_updated_str,
            'entities': len(entities),
            'documents': len(documents)
        })
        
        for doc in documents:
            mtime = os.path.getmtime(doc)
            mtime_str = datetime.fromtimestamp(mtime).strftime("%d_%b_%Y")
            word_count = count_words(doc)
            document_data.append({
                'topic': topic,
                'date': mtime_str,
                'path': doc,
                'words': word_count
            })
            
    # Format tables
    print(f"LAST_UPDATED_GLOBAL: {get_timestamp()}")
    print("\nTOPICS_TABLE:")
    print("| topic | last updated | count entities | count documents |")
    print("| :--- | :--- | :--- | :--- |")
    for t in topic_data:
        print(f"| {t['topic']} | {t['last_updated']} | {t['entities']} | {t['documents']} |")
        
    print("\nDOCUMENTS_TABLE:")
    print("| topic | date modified | document path | word count |")
    print("| :--- | :--- | :--- | :--- |")
    for d in document_data:
        print(f"| {d['topic']} | {d['date']} | {d['path']} | {d['words']} |")

if __name__ == "__main__":
    main()
