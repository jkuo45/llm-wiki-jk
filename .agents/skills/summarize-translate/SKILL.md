---
name: summarize-translate
description: Generate short English summaries and Traditional Chinese (zh-TW) translations for linked documents in a README.md section, then append them as indented bullets under each link without altering the original link text or URL.
---

# Summarize & Translate Workflow

Given a section of a Markdown file containing bulleted links (e.g., `- 🔬 [Title](url)`), annotate each link with a concise English summary and a Traditional Chinese (zh-TW) translation.

## Workflow

1. **Identify the target section** — e.g., `### 📌 notable:` or `### 📅 recent:` in `README.md`.
2. **For each bullet link**, read the target document to understand its core contribution.
3. **Write a short English summary** (1–3 sentences) capturing the key finding, scope, or thesis.
4. **Translate the summary into zh-TW** using the `🀄️ (zh-TW):` prefix.
5. **Append both lines** as indented bullets under the link, preserving the original link line exactly:

```markdown
- 🔬 [Original Link](url)
  - English summary here.
  - 🀄️ (zh-TW): Traditional Chinese translation here.
```

## Rules

- **Never modify** the original link line (emoji, link text, URL — leave untouched).
- Match indentation style of the surrounding file (tabs vs spaces).
- Keep English summaries concise and substantive — focus on the article's core finding, not generic description.
- Ensure zh-TW translations are natural, not literal word-for-word, and use proper technical terms (e.g., 粒線體 for mitochondria, 自噬 for autophagy).
- Use `—` (em dash) for parenthetical phrasing in English.
- If a document is very long (thousands of lines), read only the abstract/intro to extract the key point.

## Example

Before:

```markdown
- 🔬 [sirtuins in health and disease](https://example.com/article)
```

After:

```markdown
- 🔬 [sirtuins in health and disease](https://example.com/article)
  - Comprehensive review of the seven mammalian sirtuins (SIRT1–7), NAD⁺-dependent deacetylases regulating inflammation, metabolism, oxidative stress, and apoptosis, with roles in cancer, CVD, and other diseases; surveys SIRT modulators in clinical trials.
  - 🀄️ (zh-TW): 綜述七種哺乳動物去乙醯酶（SIRT1–7），為NAD⁺依賴性酵素，調控發炎、代謝、氧化壓力與細胞凋亡，在癌症、心血管疾病等病理中扮演角色，並回顧SIRT調節劑的臨床試驗。
```
