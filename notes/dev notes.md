
---

Dev Environment
* Docker
	* `docker exec -it 'python-streamlit' /bin/zsh`
	* `docker exec -it 'python-streamlit' /bash/sh`
	* `docker run --network host <image_name>`
* App Engine

Version Control:
	feat: New feature
	fix: Bug fix or correction
	docs: Documentation update or addition
	style: Code style improvement (e.g., formatting, whitespace)
	refactor: Code refactoring (e.g., performance optimization, code reorganization)
	test: Test-related changes (e.g., new tests, test updates)
	chore: Housekeeping tasks (e.g., updating dependencies, fixing build issues)
	perf: Performance improvement

Python
* debugpy
* pytest
* mypy
* uv
	- install from requirements with cache

LLM (at least 2 primary[?])
* Claude
* Gemini
* Groq
* Ollama
* Cohere[?]

Embeddings (2 primary[?])
* GPT4All
* HuggingFace MiniLM?
* Nomic Embeddings through LM Studio or Ollama

VectorStore
* Chroma
* PgVector

Agent
- task creation
- task prioritization
- execution
- [babyagi](https://github.com/samwit/langchain-tutorials/blob/main/agents/YT_BabyAGI_Langchain_with_Tools.ipynb)
* langgraph prebuilt components, create_react_agent

todo
- gpt4all embeddings (nomic embeddings)
- pgvector on docker or supabase
- **migrate scripts from dev, tools to img**
* lm studio (phi3, llama3, embedding server?)
* react prompt and callback handler?

BabyAGI
* vectorstore to find similarly completed tasks
* very similar to plan and execute with

