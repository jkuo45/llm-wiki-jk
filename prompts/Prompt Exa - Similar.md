
Title: What is Prompt Engineering?
URL: https://prmpts.ai/blog/what-is-prompt-engineering
ID: https://prmpts.ai/blog/what-is-prompt-engineering
Score: 0.8417931199073792
Published Date: 2023-01-24
Author: None
Text: Blog What is Prompt Engineering? 2023-01-24 · 8 minute read Large language models like GPT-3 have spawned a new emerging field called Prompt Engineering. People are coming up with clever techniques to prompt these models to perform different tasks, such as:

TL;DR summarization
Fix grammar/spelling errors
Explain a concept to a 5 year old
Generate code using natural language
Explain what a piece of code does
Generate stories
Q&A

These are just a couple of examples among millions of possible use cases. The exciting thing about Prompt Engineering is that the possibilities are endless.
 So what is Prompt Engineering exactly?
Prompt Engineering is the practice of producing robust prompts for generative language models that can withstand a number of real world challenges:

How do we craft a prompt to produce a specific result?
How do we test our prompts to know that they consistently produce the right results?
How do we trust the language model not to say something incorrect/inappropriate?
How do we prevent prompt injection?
How do we pass in a custom data set or knowledge base?
What do we do if our prompt doesn't fit within the model's token limits?
How do we estimate cost per prompt when inputs are unknown?
How do we compare competing language models as more become available?

As a Prompt Engineer, your job is to take the general capabilities of large language models and narrow them to a specific use case. You are responsible for addressing the above challenges and following best practices to accommodate them.
In this post we will explore the anatomy of a prompt, break down an example prompt, discuss best practices when designing prompts, and answer some common questions about Prompt Engineering.
 Anatomy of a prompt
Prompts are fundamentally made of 3 parts:

Static template: This is the text template that structures the prompt's context, task, and input placeholders. This part of the prompt doesn't change between executions.
 Dynamic inputs: This is dynamic data injected into the prompt based on user input. This could come directly from the user, such as a freeform text input or schema controlled input. It could also contain other injected data, such as externally fetched content. The location of these inputs are set using placeholders in the static template and will vary for every prompt.
 Model parameters: This is where you define which language model you are using and any additional parameters for that model (eg. temperature).

Example: Fruit → Color Hex
Let's look at one of my favourite examples: Fruit → Color Hex.
 Prompt Given the following fruit, output the closest color hex value that matches the color of that fruit.
Fruit:
fruit
Color hex string:
completion Tokens: 31 Inputs Preview Given the following fruit, output the closest color hex value that matches the color of that fruit.
Fruit:
Banana
Color hex string:
completionTokens: 34
You'll notice the prompt has 3 sections:

The prompt template: This top section is the meat and potatoes of the prompt. It contains the core instructions and structure for the prompt. If you click on it, you'll see how the fruit input placeholder was created.
 Inputs and preview: For every input placeholder in the template, an input is created below. In this example, the fruit input is a simple free-form text box. Next to the inputs is a text preview to help you visualize what the final prompt will look like before its sent.
 Model parameters: At the bottom you choose which language model you want to use for this prompt. As more language models are released (from multiple organizations), you can experiment with them here.

The goal of this specific prompt is to produce a color hex value that best matches the color of the fruit provided.
Notice how we designed our prompt template. You can logically break it down into multiple parts: a context, task, label, and placeholder. Let's identify each one:

Context:
 Given the following fruit,

Task:
 output the closest color hex value that matches the color of that fruit.

Placeholder with label:
 Fruit:
{{ fruit }}

Completion label:
 Color hex string:

Why did we break up the prompt this way? Let's explore this in the next section about tips for effective prompts.
 Tips for effective prompts
The structure of an effective prompt varies depending on your goals. But as a general rule of thumb, the following components are recommended:

Identity: Give the language model an identity.
 You are a question-answer bot for a luxury watch website.

The goal with identity is to prime the language model with context that will reinforce the task you will ask to it do.

Context: Give context when applicable. For example, a luxury watch bot will need to know as much information as possible about the product in order to answer questions about it. We must inject this information into the prompt to give it content to work with.
 Given the following information about the product:
{{ productInformation }}

Task: Explain the model's job.
 Answer the following question from a customer about the above watch product.

Conditions: Prevent the model from hallucinating (making up answers) by adding a condition to the task.
 If the answer is not provided above or you are unsure, reply with "Sorry, I don't know."

Labels: Labels help set expectations and structure for the model. Without labels, models will sometimes try to add on to the task itself instead of performing the task. In our example, it would be wise to label our question and answer:
 Question: """
{{ question }}
"""
Answer:

Notice that we also wrap our question input in triple quotes. This helps make the input explicit for the model. It also helps mitigate against prompt injection.

User input: As you can see above, we needed a place to inject user input. Most prompt tools will provide a templating language to allow you to set placeholders within your prompt:
 {{ question }}

Keep in mind that any of the above components have the ability to be dynamically injected as required. For example, context is a prime candidate for dynamic injection since this information may be constantly changing and unknown at build time. Likely you would retrieve context from a database, knowledge base, or external API. You can use embeddings to determine which content is most relevant when injecting.
Here's the final result:
 Prompt You are a question-answer bot for a luxury watch website. Given the following information about the product:
productInformation
Answer the following question from a customer about the above watch product. If the answer is not provided above or you are unsure, reply with "Sorry, I don't know."
Question: """
question
"""
Answer:
completion Tokens: 71 Inputs Preview You are a question-answer bot for a luxury watch website. Given the following information about the product:
- Stainless steel
- Designed for men and women, but not children
- $500 - $5000 range
- Gold and rose gold material accent options
- Watches are in analog
- No digital watches
Answer the following question from a customer about the above watch product. If the answer is not provided above or you are unsure, reply with "Sorry, I don't know."
Question: """
What are they made of?
"""
Answer:
completionTokens: 121
 Is Prompt Engineering the same as fine-tuning?
Not exactly. Fine-tuning is the process of re-training the language model itself with custom training data. Fine-tuning is just one of many tools in a Prompt Engineer’s tool belt to produce the desired outcome.
Fine-tuning is not always the answer. You will often pay a premium to fine-tune a model, both during the training process and for every future completion request after that. You may be surprised how far you can get using other Prompt Engineering techniques like context injection + embeddings.
 What is prmpts.AI?
 prmpts.AI is a prompt engineering playground to test and share robust prompts with others. Instead of proprietizing our discoveries, let’s keep this technology open and explore it together.
Highlights: None
Highlight Scores: None


Title: Welcome | Learn Prompting
URL: https://learnprompting.org/docs/intro?utm_source=puntofisso&utm_medium=email
ID: https://learnprompting.org/docs/intro?utm_source=puntofisso&utm_medium=email
Score: 0.8400365114212036
Published Date: 2023-01-01
Author: None
Text: Welcome to our introductory course on prompt engineering! Prompt engineering (PE) is the process of communicating effectively with an AI to achieve desired results. As AI technology continues to rapidly advance, the ability to master prompt engineering has become a particularly valuable skill. Prompt engineering techniques can be applied to a wide variety of tasks, making it a useful tool for anyone seeking to improve their efficiency in both everyday and innovative activities. This course is tailored to beginners, making it the perfect starting point if you're new to AI and PE. However, even if you're not a beginner, you'll still find valuable insights within this course. This course is the most comprehensive prompt engineering course available, and the content ranges from an introduction to AI to advanced PE techniques. Ethos and Philosophy​ This course is open source, and built by a diverse community of researchers, translators, and hobbyists. We believe that AI should be accessible to everyone, and that it should be described clearly and objectively. To this end, we strive to produce a comprehensive and unbiased course that is free of excessive jargon and hype. We have found this approach to be appreciated by the PE community: This course is cited by Wikipedia, and is used by people at companies such as O'REILLY, Scale AI, and OpenAI. You may also notice that almost every other prompt engineering video and guide
uses material from this course. We are honored to support the prompt engineering community, including our 620K users and 33K Discord members. How we teach​ Our approach to teaching prompt engineering is guided by the following principles: Quick Iterations—Since new PE content is published almost daily, we'll keep this course up-to-date with frequent, concise articles about emerging techniques. Please tell us what topics you'd like us to explore further! Emphasis on Practicality—Our focus is on applied, practical techniques that you can immediately incorporate into your projects and applications. Accessible Examples—To help you grasp the techniques quickly, we'll provide clear, relevant examples throughout the articles. Collaborative Learning—We believe in learning from each other. If you come across something that you don't quite understand or find a mistake, please let us know by creating an issue on GitHub. Your feedback helps us improve the course for everyone. note This course is under heavy development. We are working hard to improve the learning experience and add more content. If you have any suggestions, please let us know! How to read​ There's no need to read all chapters in order; feel free to explore what interests you! If you're new to AI, machine learning, and programming, we suggest starting with the Basics section and the Instructions guide. For those already familiar with these concepts, the Intermediate section is a great place to dive in and expand your knowledge. Article rating system​ We've implemented a rating system for articles based on their level of difficulty and the extent of programming knowledge needed: 🟢 Beginner-friendly; no programming required 🟡 Easy; basic programming knowledge necessary, but no specialized expertise 🔴 Intermediate; programming skills and some domain knowledge required (e.g., calculating logarithmic probabilities) 🟣 Advanced; programming expertise and in-depth domain understanding needed (e.g., reinforcement learning techniques) Please note that even for 🔴 and 🟣 articles, you can generally grasp the content without prior domain expertise, though it may be helpful for implementation. Chapters​ Below is a brief overview of each chapter: Basics: Introduction to prompt engineering and fundamental techniques Basic Applications: Simple, practical applications of prompt engineering Intermediate: Research-based PE techniques with moderate complexity Applied Prompting: Comprehensive PE process walkthroughs contributed by community members Advanced Applications: Powerful, and more complex applications of prompt engineering Reliability: Enhancing the reliability of large language models (LLMs) Images: Prompt engineering for text-to-image models, such as DALLE and Stable Diffusion Prompt Injection: Hacking, but for prompt engineering Tooling: A review of various prompt engineering tools and IDEs Prompt Tuning: Refining prompts using gradient-based techniques Miscellaneous: A collection of additional topics and techniques related to prompt engineering Feedback​ The single most important part of this course is your feedback! If you have any questions, comments, or suggestions, you can: Make an issue on GitHub Email us at learnprompting@gmail.com Join the Discord community Follow us on Twitter Join the HackAPrompt Competition until May 26 Twitter Even the smallest amount of feedback is very helpful!
Highlights: None
Highlight Scores: None


Title: Prompt-Engineering-Guide/prompts-intro.md at main · dair-ai/Prompt-Engineering-Guide
URL: https://github.com/dair-ai/Prompt-Engineering-Guide/blob/main/guides/prompts-intro.md
ID: https://github.com/dair-ai/Prompt-Engineering-Guide/blob/main/guides/prompts-intro.md
Score: 0.8378262519836426
Published Date: 2023-03-21
Author: Dair-Ai
Text: Prompting Introduction
Prompt engineering is a relatively new discipline for developing and optimizing prompts to efficiently use language models (LMs) for a wide variety of applications and research topics. Prompt engineering skills help to better understand the capabilities and limitations of large language models (LLMs). Researchers use prompt engineering to improve the capacity of LLMs on a wide range of common and complex tasks such as question answering and arithmetic reasoning. Developers use prompt engineering to design robust and effective prompting techniques that interface with LLMs and other tools.
This guide covers the basics of standard prompts to provide a rough idea of how to use prompts to interact and instruct large language models (LLMs).
All examples are tested with text-davinci-003 (using OpenAI's playground) unless otherwise specified. It uses the default configurations, e.g., temperature=0.7 and top-p=1.
Topic:

Basic Prompts
 A Word on LLM Settings
 Standard Prompts
 Prompt Elements
 General Tips for Designing Prompts

Basic Prompts
You can already achieve a lot with prompts, but the quality of results depends on how much information you provide it. A prompt can contain information like the instruction or question you are passing to the model and include other details such as inputs or examples.
Here is a basic example of a simple prompt:
 Prompt
 Output:
 blue
The sky is blue on a clear day. On a cloudy day, the sky may be gray or white.

As you can see, the language model outputs a continuation of strings that make sense given the context "The sky is". The output might be unexpected or far from the task we want to accomplish.
This basic example also highlights the necessity to provide more context or instructions on what specifically we want to achieve.
Let's try to improve it a bit:
 Prompt:
 Complete the sentence:
The sky is

Output:
Is that better? Well, we told the model to complete the sentence so the result looks a lot better as it follows exactly what we told it to do ("complete the sentence"). This approach of designing optimal prompts to instruct the model to perform a task is what's referred to as prompt engineering.
The example above is a basic illustration of what's possible with LLMs today. Today's LLMs can perform all kinds of advanced tasks that range from text summarization to mathematical reasoning to code generation.

A Word on LLM Settings
When working with prompts, you will be interacting with the LLM via an API or directly. You can configure a few parameters to get different results for your prompts.
 Temperature - In short, the lower the temperature the more deterministic the results in the sense that the highest probable next token is always picked. Increasing the temperature could lead to more randomness encouraging more diverse or creative outputs. We are essentially increasing the weights of the other possible tokens. In terms of application, we might want to use a lower temperature for something like fact-based QA to encourage more factual and concise responses. For poem generation or other creative tasks, it might be beneficial to increase the temperature.
 Top_p - Similarly, with top_p, a sampling technique with temperature called nucleus sampling, you can control how deterministic the model is at generating a response. If you are looking for exact and factual answers keep this low. If you are looking for more diverse responses, increase to a higher value.
The general recommendation is to alter one, not both.
Before starting with some basic examples, keep in mind that your results may vary depending on the version of LLM you are using.

Standard Prompts
We have tried a very simple prompt above. A standard prompt has the following format:
This can be formatted into a QA format, which is standard in a lot of QA dataset, as follows:
Given the standard format above, one popular and effective technique for prompting is referred to as few-shot prompting where we provide exemplars. Few-shot prompts can be formatted as follows:
 <Question>?
<Answer>
<Question>?
<Answer>
<Question>?
<Answer>
<Question>?

And you can already guess that its QA format version would look like this:
 Q: <Question>?
A: <Answer>
Q: <Question>?
A: <Answer>
Q: <Question>?
A: <Answer>
Q: <Question>?
A:

Keep in mind that it's not required to use QA format. The format depends on the task at hand. For instance, you can perform a simple classification task and give exemplars that demonstrate the task as follows:
 Prompt:
 This is awesome! // Positive
This is bad! // Negative
Wow that movie was rad! // Positive
What a horrible show! //

Output:
Few-shot prompts enable in-context learning which is the ability of language models to learn tasks given only a few examples. We will see more of this in action in the upcoming guides.

Elements of a Prompt
As we cover more and more examples and applications that are possible with prompt engineering, you will notice that there are certain elements that make up a prompt.
A prompt can contain any of the following components:
 Instruction - a specific task or instruction you want the model to perform
 Context - can involve external information or additional context that can steer the model to better responses
 Input Data - is the input or question that we are interested to find a response for
 Output Indicator - indicates the type or format of the output.
Not all the components are required for a prompt and the format depends on the task at hand. We will touch on more concrete examples in upcoming guides.

General Tips for Designing Prompts
Here are some tips to keep in mind while you are designing your prompts:
Start Simple
As you get started with designing prompts, you should keep in mind that it is an iterative process that requires a lot of experimentation to get optimal results. Using a simple playground like OpenAI's or Cohere's is a good starting point.
You can start with simple prompts and keep adding more elements and context as you aim for better results. Versioning your prompt along the way is vital for this reason. As we read the guide you will see many examples where specificity, simplicity, and conciseness will often give you better results.
When you have a big task that involves many different subtasks, you can try to break down the task into simpler subtasks and keep building up as you get better results. This avoids adding too much complexity to the prompt design process at the beginning.
The Instruction
You can design effective prompts for various simple tasks by using commands to instruct the model what you want to achieve such as "Write", "Classify", "Summarize", "Translate", "Order", etc.
Keep in mind that you also need to experiment a lot to see what works best. Try different instructions with different keywords, contexts, and data and see what works best for your particular use case and task. Usually, the more specific and relevant the context is to the task you are trying to perform, the better. We will touch on the importance of sampling and adding more context in the upcoming guides.
Others recommend that instructions are placed at the beginning of the prompt. It's also recommended that some clear separator like "###" is used to separate the instruction and context.
For instance:
 Prompt:
 ### Instruction ###
Translate the text below to Spanish:
Text: "hello!"

Output:
Specificity
Be very specific about the instruction and task you want the model to perform. The more descriptive and detailed the prompt is, the better the results. This is particularly important when you have a desired outcome or style of generation you are seeking. There aren't specific tokens or keywords that lead to better results. It's more important to have a good format and descriptive prompt. Providing examples in the prompt is very effective to get desired output in specific formats.
When designing prompts you should also keep in mind the length of the prompt as there are limitations regarding how long this can be. Thinking about how specific and detailed you should be is something to consider. Too many unnecessary details are not necessarily a good approach. The details should be relevant and contribute to the task at hand. This is something you will need to experiment with a lot. We encourage a lot of experimentation and iteration to optimize prompts for your applications.
As an example, let's try a simple prompt to extract specific information from a piece of text.
 Prompt:
 Extract the name of places in the following text.
Desired format:
Place: <comma_separated_list_of_company_names>
Input: "Although these developments are encouraging to researchers, much is still a mystery. “We often have a black box between the brain and the effect we see in the periphery,” says Henrique Veiga-Fernandes, a neuroimmunologist at the Champalimaud Centre for the Unknown in Lisbon. “If we want to use it in the therapeutic context, we need to understand the mechanism."

Output:
 Place: Champalimaud Centre for the Unknown, Lisbon

The input text is obtained from this Nature article.
Avoid Impreciseness
Given the tips above about being detailed and improving format, it's easy to fall into the trap of wanting to be too clever about prompts and potentially creating imprecise descriptions. It's often better to be specific and direct. The analogy here is very similar to effective communication -- the more direct, the more effective the message gets across.
For example, you might be interested in learning the concept of prompt engineering. You might try something like:
 Explain the concept of prompt engineering. Keep the explanation short, only a few sentences, and don't be too descriptive.

It's not clear from the prompt above how many sentences to use and what style. You might still somewhat get good responses with the above prompts but the better prompt would be one that is very specific, concise, and to the point. Something like:
 Use 2-3 sentences to explain the concept of prompt engineering to a high school student.

To do or not to do?
Another common tip when designing prompts is to avoid saying what not to do but say what to do instead. This encourages more specificity and focuses on the details that lead to good responses from the model.
Here is an example of a movie recommendation chatbot failing at exactly what I don't want it to do because of how I wrote the instruction -- focusing on what not to do.
 Prompt:
 The following is an agent that recommends movies to a customer. DO NOT ASK FOR INTERESTS. DO NOT ASK FOR PERSONAL INFORMATION.
Customer: Please recommend a movie based on my interests.
Agent:

Output:
 Sure, I can recommend a movie based on your interests. What kind of movie would you like to watch? Do you prefer action, comedy, romance, or something else?

Here is a better prompt:
 Prompt:
 The following is an agent that recommends movies to a customer. The agent is responsible to recommend a movie from the top global trending movies. It should refrain from asking users for their preferences and avoid asking for personal information. If the agent doesn't have a movie to recommend, it should respond "Sorry, couldn't find a movie to recommend today.".
Customer: Please recommend a movie based on my interests.
Agent:

Output:
 Sorry, I don't have any information about your interests. However, here's a list of the top global trending movies right now: [list of movies]. I hope you find something you like!

Some of the examples above were adopted from the "Best practices for prompt engineering with OpenAI API" article.

Next Section (Basic Prompting)
Highlights: None
Highlight Scores: None


Title: GitHub - promptslab/Awesome-Prompt-Engineering: This repository contains a hand-curated resources for Prompt Engineering with a focus on Generative Pre-trained Transformer (GPT), ChatGPT, PaLM etc
URL: https://github.com/promptslab/Awesome-Prompt-Engineering
ID: https://github.com/promptslab/Awesome-Prompt-Engineering
Score: 0.8322160840034485
Published Date: 2023-04-04
Author: Promptslab
Text: Awesome Prompt Engineering 🧙‍♂️

This repository contains a hand-curated resources for Prompt Engineering with a focus on Generative Pre-trained Transformer (GPT), ChatGPT, PaLM etc

Prompt Engineering Course is coming soon..

Table of Contents

Papers
 Tools & Code
 Apis
 Datasets
 Models
 AI Content Detectors
 Educational

Tutorials

Videos
 Books
 Communities
 How to Contribute

Papers
📄

Prompt Engineering Techniques:

A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT [2023] (Arxiv)
 Hard Prompts Made Easy: Gradient-Based Discrete Optimization for Prompt Tuning and Discovery [2023] (Arxiv)
 Synthetic Prompting: Generating Chain-of-Thought Demonstrations for Large Language Models [2023] (Arxiv)
 Progressive Prompts: Continual Learning for Language Models [2023] (Arxiv)
 Batch Prompting: Efficient Inference with LLM APIs [2023] (Arxiv)
 Successive Prompting for Decompleting Complex Questions [2022] (Arxiv)
 Structured Prompting: Scaling In-Context Learning to 1,000 Examples [2022] (Arxiv)
 Large Language Models Are Human-Level Prompt Engineers [2022] (Arxiv)
 Ask Me Anything: A simple strategy for prompting language models [2022] (Arxiv)
 Prompting GPT-3 To Be Reliable 2022
 Decomposed Prompting: A Modular Approach for Solving Complex Tasks [2022] (Arxiv)
 PromptChainer: Chaining Large Language Model Prompts through Visual Programming [2022] (Arxiv)
 Investigating Prompt Engineering in Diffusion Models [2022] (Arxiv)
 Show Your Work: Scratchpads for Intermediate Computation with Language Models [2021] (Arxiv)
 Reframing Instructional Prompts to GPTk's Language [2021] (Arxiv)
 Fantastically Ordered Prompts and Where to Find Them: Overcoming Few-Shot Prompt Order Sensitivity [2021] (Arxiv)
 The Power of Scale for Parameter-Efficient Prompt Tuning [2021] (Arxiv)
 Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm [2021] (Arxiv)
 Prefix-Tuning: Optimizing Continuous Prompts for Generation [2021] (Arxiv)

Reasoning and In-Context Learning:

Multimodal Chain-of-Thought Reasoning in Language Models [2023] (Arxiv)
 On Second Thought, Let's Not Think Step by Step! Bias and Toxicity in Zero-Shot Reasoning [2022] (Arxiv)
 ReAct: Synergizing Reasoning and Acting in Language Models [2022] (Arxiv)
 Language Models Are Greedy Reasoners: A Systematic Formal Analysis of Chain-of-Thought [2022] (Arxiv)
 On the Advance of Making Language Models Better Reasoners [2022] (Arxiv)
 Large Language Models are Zero-Shot Reasoners [2022] (Arxiv)
 Reasoning Like Program Executors [2022] (Arxiv)
 Self-Consistency Improves Chain of Thought Reasoning in Language Models [2022] (Arxiv)
 Rethinking the Role of Demonstrations: What Makes In-Context Learning Work? [2022] (Arxiv)
 Learn to Explain: Multimodal Reasoning via Thought Chains for Science Question Answering [2022] (Arxiv)
 Chain of Thought Prompting Elicits Reasoning in Large Language Models [2021] (Arxiv)
 Generated Knowledge Prompting for Commonsense Reasoning [2021] (Arxiv)
 BERTese: Learning to Speak to BERT [2021] (Acl)

Evaluating and Improving Language Models:

Large Language Models Can Be Easily Distracted by Irrelevant Context [2023] (Arxiv)
 Crawling the Internal Knowledge-Base of Language Models [2023] (Arxiv)
 Discovering Language Model Behaviors with Model-Written Evaluations [2022] (Arxiv)
 Calibrate Before Use: Improving Few-Shot Performance of Language Models [2021] (Arxiv)

Applications of Language Models:

Prompting for Multimodal Hateful Meme Classification [2023] (Arxiv)
 PLACES: Prompting Language Models for Social Conversation Synthesis [2023] (Arxiv)
 Commonsense-Aware Prompting for Controllable Empathetic Dialogue Generation [2023] (Arxiv)
 PAL: Program-aided Language Models 2023
 Legal Prompt Engineering for Multilingual Legal Judgement Prediction [2023] (Arxiv)
 Conversing with Copilot: Exploring Prompt Engineering for Solving CS1 Problems Using Natural Language [2022] (Arxiv)
 Plot Writing From Scratch Pre-Trained Language Models [2022] (Acl)
 AutoPrompt: Eliciting Knowledge from Language Models with Automatically Generated Prompts [2020] (Arxiv)

Threat Detection and Adversarial Examples:

Constitutional AI: Harmlessness from AI Feedback [2022] (Arxiv)
 Ignore Previous Prompt: Attack Techniques For Language Models [2022] (Arxiv)
 Machine Generated Text: A Comprehensive Survey of Threat Models and Detection Methods [2022] (Arxiv)
 Evaluating the Susceptibility of Pre-Trained Language Models via Handcrafted Adversarial Examples [2022] (Arxiv)
 Toxicity Detection with Generative Prompt-based Inference [2022] (Arxiv)
 How Can We Know What Language Models Know? [2020] (Mit)

Few-shot Learning and Performance Optimization:

Promptagator: Few-shot Dense Retrieval From 8 Examples [2022] (Arxiv)
 The Unreliability of Explanations in Few-shot Prompting for Textual Reasoning [2022] (Arxiv)
 Making Pre-trained Language Models Better Few-shot Learners [2021] (Acl)
 Language Models are Few-Shot Learners [2020] (Arxiv)

Text to Image Generation:

A Taxonomy of Prompt Modifiers for Text-To-Image Generation [2022] (Arxiv)
 Design Guidelines for Prompt Engineering Text-to-Image Generative Models [2021] (Arxiv)
 High-Resolution Image Synthesis with Latent Diffusion Models [2021] (Arxiv)
 DALL·E: Creating Images from Text [2021] (Arxiv)

Text to Music/Sound Generation:

MusicLM: Generating Music From Text [2023] (Arxiv)
 ERNIE-Music: Text-to-Waveform Music Generation with Diffusion Models [2023] (Arxiv)
 Noise2Music: Text-conditioned Music Generation with Diffusion Models [2023) (Arxiv)
 AudioLM: a Language Modeling Approach to Audio Generation [2023] (Arxiv)
 Make-An-Audio: Text-To-Audio Generation with Prompt-Enhanced Diffusion Models [2023] (Arxiv)

Text to Video Generation:

Dreamix: Video Diffusion Models are General Video Editors [2023] (Arxiv)
 Tune-A-Video: One-Shot Tuning of Image Diffusion Models for Text-to-Video Generation [2022] (Arxiv)
 Noise2Music: Text-conditioned Music Generation with Diffusion Models [2023) (Arxiv)
 AudioLM: a Language Modeling Approach to Audio Generation [2023] (Arxiv)

Overviews:

Piloting Copilot and Codex: Hot Temperature, Cold Prompts, or Black Magic? [2022] (Arxiv)

Tools & Code
🔧

Name
Description
Url

GPT Index
GPT Index is a project consisting of a set of data structures designed to make it easier to use large external knowledge bases with LLMs.
 [Github]

Promptify
Solve NLP Problems with LLM's & Easily generate different NLP Task prompts for popular generative models like GPT, PaLM, and more with Promptify
 [Github]

Better Prompt
Test suite for LLM prompts before pushing them to PROD
 [Github]

Interactive Composition Explorerx
ICE is a Python library and trace visualizer for language model programs.
 [Github]

Haystack
Open source NLP framework to interact with your data using LLMs and Transformers.
 [Github]

LangChainx
Building applications with LLMs through composability
 [Github]

OpenPrompt
An Open-Source Framework for Prompt-learning
 [Github]

Prompt Engine
This repo contains an NPM utility library for creating and maintaining prompts for Large Language Models (LLMs).
 [Github]

PromptInject
PromptInject is a framework that assembles prompts in a modular fashion to provide a quantitative analysis of the robustness of LLMs to adversarial prompt attacks.
 [Github]

Prompts AI
Advanced playground for GPT-3
 [Github]

Prompt Source
PromptSource is a toolkit for creating, sharing and using natural language prompts.
 [Github]

ThoughtSource
A framework for the science of machine thinking
 [Github]

Apis
💻

Name
Description
Url
Paid or Open-Source

OpenAI
GPT-n for natural language tasks, Codex for translates natural language to code, and DALL·E for creates and edits original images
 [OpenAI]
Paid

CohereAI
Cohere provides access to advanced Large Language Models and NLP tools through one API
 [CohereAI]
Paid

Anthropic
Coming soon
 [Anthropic]
Paid

FLAN-T5 XXL
Coming soon
 [HugginFace]
Open-Source

Datasets
💾

Name
Description
Url

P3 (Public Pool of Prompts)
P3 (Public Pool of Prompts) is a collection of prompted English datasets covering a diverse set of NLP tasks.
 [HuggingFace]

Awesome ChatGPT Prompts
Repo includes ChatGPT prompt curation to use ChatGPT better.
 [Github]

Writing Prompts
Collection of a large dataset of 300K human-written stories paired with writing prompts from an online forum(reddit)
 [Kaggle]

Midjourney Prompts
Text prompts and image URLs scraped from MidJourney's public Discord server
 [HuggingFace]

Models
🧠

Name
Description
Url

ChatGPT
ChatGPT
 [OpenAI]

Codex
The Codex models are descendants of our GPT-3 models that can understand and generate code. Their training data contains both natural language and billions of lines of public code from GitHub
 [Github]

Bloom
BigScience Large Open-science Open-access Multilingual Language Model
 [HuggingFace]

Facebook LLM
OPT-175B is a GPT-3 equivalent model trained by Meta. It is by far the largest pretrained language model available with 175 billion parameters.
 [Alpa]

GPT-NeoX
GPT-NeoX-20B, a 20 billion parameter autoregressive language model trained on the Pile
 [HuggingFace]

FLAN-T5 XXL
Flan-T5 is an instruction-tuned model, meaning that it exhibits zero-shot-like behavior when given instructions as part of the prompt.
 [HuggingFace/Google]

XLM-RoBERTa-XL
XLM-RoBERTa-XL model pre-trained on 2.5TB of filtered CommonCrawl data containing 100 languages.
 [HuggingFace]

GPT-J
It is a GPT-2-like causal language model trained on the Pile dataset
 [HuggingFace]

PaLM-rlhf-pytorch
Implementation of RLHF (Reinforcement Learning with Human Feedback) on top of the PaLM architecture. Basically ChatGPT but with PaLM
 [Github]

GPT-Neo
An implementation of model parallel GPT-2 and GPT-3-style models using the mesh-tensorflow library.
 [Github]

LaMDA-rlhf-pytorch
Open-source pre-training implementation of Google's LaMDA in PyTorch. Adding RLHF similar to ChatGPT.
 [Github]

RLHF
Implementation of Reinforcement Learning from Human Feedback (RLHF)
 [Github]

GLM-130B
GLM-130B: An Open Bilingual Pre-Trained Model
 [Github]

AI Content Detectors
🔎

Name
Description
Url

AI Text Classifier
The AI Text Classifier is a fine-tuned GPT model that predicts how likely it is that a piece of text was generated by AI from a variety of sources, such as ChatGPT.
 [OpenAI]

GPT-2 Output Detector
This is an online demo of the GPT-2 output detector model, based on the 🤗/Transformers implementation of RoBERTa.
 [HuggingFace]

Openai Detector
AI classifier for indicating AI-written text (OpenAI Detector Python wrapper)
 [GitHub]

Tutorials
📚

Introduction to Prompt Engineering

Prompt Engineering 101 - Introduction and resources
 Prompt Engineering 101
 Prompt Engineering Guide by SudalaiRajkumar

Beginner's Guide to Generative Language Models

A beginner-friendly guide to generative language models - LaMBDA guide
 Generative AI with Cohere: Part 1 - Model Prompting

Best Practices for Prompt Engineering

Best practices for prompt engineering with OpenAI API
 How to write good prompts

Complete Guide to Prompt Engineering

A Complete Introduction to Prompt Engineering for Large Language Models
 Prompt Engineering Guide: How to Engineer the Perfect Prompts

Technical Aspects of Prompt Engineering

3 Principles for prompt engineering with GPT-3
 A Generic Framework for ChatGPT Prompt Engineering
 Methods of prompt programming

Resources for Prompt Engineering

Awesome ChatGPT Prompts
 Best 100+ Stable Diffusion Prompts
 DALLE Prompt Book
 OpenAI Cookbook
 Prompt Engineering by Microsoft

Videos
🎥

Advanced ChatGPT Prompt Engineering
 ChatGPT: 5 Prompt Engineering Secrets For Beginners
 CMU Advanced NLP 2022: Prompting
 Prompt Engineering - A new profession ?
 ChatGPT Guide: 10x Your Results with Better Prompts
 Language Models and Prompt Engineering: Systematic Survey of Prompting Methods in NLP
 Prompt Engineering 101: Autocomplete, Zero-shot, One-shot, and Few-shot prompting

Communities
🤝

OpenAI Discord
 PromptsLab Discord
 Learn Prompting
 r/ChatGPT Discord
 MidJourney Discord

How to Contribute
We welcome contributions to this list! In fact, that's the main reason why I created it - to encourage contributions and encourage people to subscribe to changes in order to stay informed about new and exciting developments in the world of Large Language Models(LLMs) & Prompt-Engineering.
Before contributing, please take a moment to review our contribution guidelines. These guidelines will help ensure that your contributions align with our objectives and meet our standards for quality and relevance. Thank you for your interest in contributing to this project!

Image Source: docs.cohere.ai
Highlights: None
Highlight Scores: None


Title: GitHub - dair-ai/Prompt-Engineering-Guide: Guide and resources for prompt engineering
URL: https://github.com/dair-ai/Prompt-Engineering-Guide
ID: https://github.com/dair-ai/Prompt-Engineering-Guide
Score: 0.8272908926010132
Published Date: 2023-02-04
Author: Dair-Ai
Text: Skip to content
 Toggle navigation
 Sign up
 * Product
 + Actions
 Automate any workflow
 + Packages
 Host and manage packages
 + Security
 Find and fix vulnerabilities
 + Codespaces
 Instant dev environments
 + Copilot
 Write better code with AI
 + Code review
 Manage code changes
 + Issues
 Plan and track work
 + Discussions
 Collaborate outside of code
 + Explore
 + All features
 + Documentation
 + GitHub Skills
 + Blog
 * Solutions
 + For
 + Enterprise
 + Teams
 + Startups
 + Education
 + By Solution
 + CI/CD & Automation
 + DevOps
 + DevSecOps
 + Case Studies
 + Customer Stories
 + Resources
 * Open Source
 + GitHub Sponsors
 Fund open source developers
 + The ReadME Project
 GitHub community articles
 + Repositories
 + Topics
 + Trending
 + Collections
 * Pricing
 * In this repository All GitHub ↵
 Jump to ↵
 * No suggested jump to results
 * In this repository All GitHub ↵
 Jump to ↵
 * In this organization All GitHub ↵
 Jump to ↵
 * In this repository All GitHub ↵
 Jump to ↵
 Sign in
 Sign up
 {{ message }}
 dair-ai / Prompt-Engineering-Guide Public
 *
 * Notifications
 * Fork 118
 * Star 2.5k

🐙 Guide and resources for prompt engineering

License

MIT license
 2.5k stars 118 forks
 Star
 Notifications
 * Code
 * Issues 2
 * Pull requests 0
 * Actions
 * Projects 0
 * Security
 * Insights
 More
 * Code
 * Issues
 * Pull requests
 * Actions
 * Projects
 * Security
 * Insights

dair-ai/Prompt-Engineering-Guide

This commit does not belong to any branch on this repository, and may belong to a fork outside of the repository.
 main
 Switch branches/tags
 Branches Tags
 Could not load branches
 Nothing to show
 {{ refName }} default
 View all branches
 Could not load tags
 Nothing to show
 {{ refName }} default
 View all tags

Name already in use

A tag already exists with the provided branch name. Many Git commands accept both tag and branch names, so creating this branch may cause unexpected behavior. Are you sure you want to create this branch?
 Cancel Create
 2 branches 0 tags
 Code
 * Local
 * Codespaces
 * Clone
 HTTPS GitHub CLI

Use Git or checkout with SVN using the web URL.

Work fast with our official CLI. Learn more.

* Open with GitHub Desktop
 * Download ZIP

Sign In Required

Please sign in to use Codespaces.

Launching GitHub Desktop

If nothing happens, download GitHub Desktop and try again.

Launching GitHub Desktop

If nothing happens, download GitHub Desktop and try again.

Launching Xcode

If nothing happens, download Xcode and try again.

Launching Visual Studio Code

Your codespace will open once ready.

There was a problem preparing your codespace, please try again.

Latest commit

omarsar Update README.md
 …
 5386004 Feb 4, 2023
 Update README.md
 5386004

Git stats

* 169 commits

Files

Permalink
 Failed to load latest commit information.
 Type
 Name
 Latest commit message
 Commit time
 .github
 Create FUNDING.yml
 February 1, 2023 18:22
 CITATION.cff
 Update CITATION.cff
 January 28, 2023 15:34
 LICENSE.md
 Create LICENSE.md
 December 17, 2022 14:12
 README.md
 Update README.md
 February 4, 2023 14:17
 View code
 Prompt Engineering Guide Table of Contents Papers (Sorted by Release Date) Tools & Libraries (Sorted by Name) Datasets (Sorted by Name) Blog, Guides, Tutorials and Other Readings (Sorted by Name) Lecture + Tutorial

README.md

Prompt Engineering Guide

This guide contains a set of papers, learning guides, and tools related to prompt engineering. It includes several materials, guides, examples, papers, and more. The repo is intended to be used as a research and educational reference for practitioners and developers.

📣 Full lecture + notebook + exercises on the ~15th of Feb (announcement will happen on Twitter)

📣 Join our Discord to discuss more about prompt engineering

Table of Contents

* Papers
 * Tools & Libraries
 * Datasets
 * Blog, Guides, Tutorials and Other Readings

Papers

(Sorted by Release Date)

* Surveys / Overviews:

+ A Survey for In-context Learning (Dec 2022)
 + Towards Reasoning in Large Language Models: A Survey (Dec 2022)
 + Emergent Abilities of Large Language Models (Jun 2022)
 + A Taxonomy of Prompt Modifiers for Text-To-Image Generation (Apr 2022)
 + Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing (Jul 2021)

* Approaches/Techniques:

+ Multimodal Chain-of-Thought Reasoning in Language Models (Feb 2023)
 + Large Language Models Can Be Easily Distracted by Irrelevant Context (Feb 2023)
 + Synthetic Prompting: Generating Chain-of-Thought Demonstrations for Large Language Models (Feb 2023)
 + Progressive Prompts: Continual Learning for Language Models (Jan 2023)
 + Batch Prompting: Efficient Inference with LLM APIs (Jan 2023)
 + On Second Thought, Let's Not Think Step by Step! Bias and Toxicity in Zero-Shot Reasoning (Dec 2022)
 + Constitutional AI: Harmlessness from AI Feedback (Dec 2022)
 + Successive Prompting for Decomposing Complex Questions (Dec 2022)
 + Discovering Language Model Behaviors with Model-Written Evaluations (Dec 2022)
 + Structured Prompting: Scaling In-Context Learning to 1,000 Examples (Dec 2022)
 + PAL: Program-aided Language Models (Nov 2022)
 + Large Language Models Are Human-Level Prompt Engineers (Nov 2022)
 + Ignore Previous Prompt: Attack Techniques For Language Models (Nov 2022)
 + Machine Generated Text: A Comprehensive Survey of Threat Models and Detection Methods (Nov 2022)
 + Teaching Algorithmic Reasoning via In-context Learning (Nov 2022)
 + Enhancing Self-Consistency and Performance of Pre-Trained Language Models through Natural Language Inference (Nov 2022)
 + Ask Me Anything: A simple strategy for prompting language models (Oct 2022)
 + ReAct: Synergizing Reasoning and Acting in Language Models (Oct 2022)
 + Prompting GPT-3 To Be Reliable (Oct 2022)
 + Decomposed Prompting: A Modular Approach for Solving Complex Tasks (Oct 2022)
 + Language Models Are Greedy Reasoners: A Systematic Formal Analysis of Chain-of-Thought (Oct 2022)
 + Evaluating the Susceptibility of Pre-Trained Language Models via Handcrafted Adversarial Examples (Sep 2022)
 + Promptagator: Few-shot Dense Retrieval From 8 Examples (Sep 2022)
 + On the Advance of Making Language Models Better Reasoners (June 2022)
 + Large Language Models are Zero-Shot Reasoners (May 2022)
 + MRKL Systems: A modular, neuro-symbolic architecture that combines large language models, external knowledge sources and discrete reasoning (May 2022)
 + Toxicity Detection with Generative Prompt-based Inference (May 2022)
 + The Unreliability of Explanations in Few-shot Prompting for Textual Reasoning (May 2022)
 + A Taxonomy of Prompt Modifiers for Text-To-Image Generation (Apr 2022)
 + PromptChainer: Chaining Large Language Model Prompts through Visual Programming (Mar 2022)
 + Self-Consistency Improves Chain of Thought Reasoning in Language Models (March 2022)
 + Rethinking the Role of Demonstrations: What Makes In-Context Learning Work? (Feb 2022)
 + Chain of Thought Prompting Elicits Reasoning in Large Language Models (Jan 2022)
 + Show Your Work: Scratchpads for Intermediate Computation with Language Models (Nov 2021)
 + Generated Knowledge Prompting for Commonsense Reasoning (Oct 2021)
 + Reframing Instructional Prompts to GPTk's Language (Sep 2021)
 + Design Guidelines for Prompt Engineering Text-to-Image Generative Models (Sep 2021)
 + Making Pre-trained Language Models Better Few-shot Learners (Aug 2021)
 + Fantastically Ordered Prompts and Where to Find Them: Overcoming Few-Shot Prompt Order Sensitivity (April 2021)
 + BERTese: Learning to Speak to BERT (April 2021)
 + The Power of Scale for Parameter-Efficient Prompt Tuning (April 2021)
 + Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm (Feb 2021)
 + Calibrate Before Use: Improving Few-Shot Performance of Language Models (Feb 2021)
 + Prefix-Tuning: Optimizing Continuous Prompts for Generation (Jan 2021)
 + AutoPrompt: Eliciting Knowledge from Language Models with Automatically Generated Prompts (Oct 2020)
 + Language Models are Few-Shot Learners (May 2020)
 + How Can We Know What Language Models Know? (July 2020)

* Applications:

+ Legal Prompt Engineering for Multilingual Legal Judgement Prediction (Dec 2022)
 + Investigating Prompt Engineering in Diffusion Models (Nov 2022)
 + Conversing with Copilot: Exploring Prompt Engineering for Solving CS1 Problems Using Natural Language (Oct 2022)
 + Piloting Copilot and Codex: Hot Temperature, Cold Prompts, or Black Magic? (Oct 2022)
 + Plot Writing From Scratch Pre-Trained Language Models (July 2022)

* Collections:

+ Chain-of-ThoughtsPapers
 + Papers with Code
 + Prompt Papers

Tools & Libraries

(Sorted by Name)

* AI Test Kitchen
 * betterprompt
 * DreamStudio
 * DUST
 * Dyno
 * EveryPrompt
 * GPT Index
 * GPTTools
 * hwchase17/adversarial-prompts
 * Interactive Composition Explorer
 * LangChain
 * LearnGPT
 * Lexica
 * loom
 * Metaprompt
 * OpenAI Playground
 * OpenPrompt
 * Playground
 * Prodia
 * Prompt Base
 * Prompt Engine
 * Prompt Generator for OpenAI's DALL-E 2
 * Promptable
 * PromptInject
 * Prompts.ai
 * PromptSource
 * Scale SpellBook
 * sharegpt
 * ThoughtSource
 * Visual Prompt Builder

Datasets

(Sorted by Name)

* Anthropic's Red Team dataset, (paper)
 * Awesome ChatGPT Prompts
 * DiffusionDB
 * Midjourney Prompts
 * P3 - Public Pool of Prompts
 * PartiPrompts
 * Real Toxicity Prompts
 * Stable Diffusion Dataset
 * WritingPrompts

Blog, Guides, Tutorials and Other Readings

(Sorted by Name)

* 3 Principles for prompt engineering with GPT-3
 * A beginner-friendly guide to generative language models - LaMBDA guide
 * A Complete Introduction to Prompt Engineering for Large Language Models
 * A Generic Framework for ChatGPT Prompt Engineering
 * AI Content Generation
 * Awesome ChatGPT Prompts
 * Best 100+ Stable Diffusion Prompts
 * Best practices for prompt engineering with OpenAI API
 * ChatGPT, AI and GPT-3 Apps and use cases
 * CMU Advanced NLP 2022: Prompting
 * Curtis64's set of prompt gists
 * DALL·E 2 Prompt Engineering Guide
 * DALLE Prompt Book
 * Exploiting GPT-3 Prompts
 * Exploring Prompt Injection Attacks
 * Extrapolating to Unnatural Language Processing with GPT-3's In-context Learning: The Good, the Bad, and the Mysterious
 * Generative AI with Cohere: Part 1 - Model Prompting
 * Giving GPT-3 a Turing Test
 * GPT3 and Prompts: A quick primer
 * How to Draw Anything
 * How to get images that don't suck
 * How to write good prompts
 * Language Models and Prompt Engineering: Systematic Survey of Prompting Methods in NLP
 * Learn Prompting
 * Methods of prompt programming
 * Mysteries of mode collapse
 * NLP for Text-to-Image Generators: Prompt Analysis
 * Notes for Prompt Engineering by sw-yx
 * Pretrain, Prompt, Predict - A New Paradigm for NLP
 * Prompt Engineering 101 - Introduction and resources
 * Prompt Engineering 101: Autocomplete, Zero-shot, One-shot, and Few-shot prompting
 * Prompt Engineering 101
 * Prompt Engineering by co:here
 * Prompt Engineering by Microsoft
 * Prompt engineering davinci-003 on our own docs for automated support (Part I)
 * Prompt Engineering Guide: How to Engineer the Perfect Prompts
 * Prompt Engineering in GPT-3
 * Prompt Engineering Template
 * Prompt Engineering Topic by GitHub
 * Prompt Engineering: From Words to Art
 * Prompt injection attacks against GPT-3
 * Prompt injection to read out the secret OpenAI API key
 * Prompting Methods with Language Models and Their Applications to Weak Supervision
 * Prompts as Programming by Gwern
 * Reverse Prompt Engineering for Fun and (no) Profit
 * Simulators
 * Start with an Instruction
 * Talking to machines: prompt engineering & injection
 * the Book - Fed Honeypot
 * The ChatGPT Prompt Book
 * Using GPT-Eliezer against ChatGPT Jailbreaking

Lecture + Tutorial

Full tutorial and lecture coming soon!

Feel free to open a PR if you think something is missing here. Always welcome feedback and suggestions.

Join our Discord

About

🐙 Guide and resources for prompt engineering

Topics

deep-learning prompt-engineering

Resources

Readme

License

MIT license

Stars

2.5k stars

Watchers

62 watching

Forks

118 forks

Releases

No releases published

Sponsor this project

Sponsor
 Learn more about GitHub Sponsors

Packages 0

No packages published

Contributors 10

*
 *
 *
 *
 *
 *
 *
 *
 *
 *

Footer

© 2023 GitHub, Inc.

Footer navigation

* Terms
 * Privacy
 * Security
 * Status
 * Docs
 * Contact GitHub
 * Pricing
 * API
 * Training
 * Blog
 * About
 You can’t perform that action at this time.
 You signed in with another tab or window. Reload to refresh your session. You signed out in another tab or window. Reload to refresh your session.
Highlights: None
Highlight Scores: None


Title: GitHub - snwfdhmp/awesome-gpt-prompt-engineering: A curated list of awesome resources, tools, and other shiny things for GPT prompt engineering.
URL: https://github.com/snwfdhmp/awesome-gpt-prompt-engineering
ID: https://github.com/snwfdhmp/awesome-gpt-prompt-engineering
Score: 0.822102963924408
Published Date: 2023-07-24
Author: Snwfdhmp
Text: Awesome GPT Prompt Engineering
A curated list of awesome resources, tools, and other shiny things for GPT prompt engineering.
Consider giving it a ⭐️ if you like it to show your support!
🚀 RECOMMENDED: Use any LLM from the command line easily. 🚀
 Table of Contents

Awesome GPT Prompt Engineering

Roadmaps
 Guides
 Techniques
 Prompt Collections
 Papers
 Books
 Communities
 Prompt Generators
 Auto-GPT Related
 Prompt Injection
 Playgrounds and Alternative UIs
 ChatGPT Plug-ins
 Prompt Engineering Jobs Offers
 AI Links Directories

Contributing

Roadmaps

Prompt Engineering Roadmap: Step by step guide to learning Prompt Engineering.

Guides

Learn Prompt Engineering: Introduction to Prompt Engineering and Prompt Engineering techniques.
 Prompt Engineering Guide: Guides, papers, lecture, notebooks and resources for prompt engineering.
 Prompt Engineering 101: Prompt Engineering guide by Xavi.
 Prompt Engineering 101: Prompt Engineering guide by Raza Habib & Sinan Ozdemir.
 Prompt Engineering Guide: Prompt Engineering guide by Sudalai Rajkumar.
 How to generate text: using different decoding methods for language generation with Transformers: A guide to decoding methods for language generation with Transformers.
 The Illustrated Transformer: A visual guide to transformers, the core model used in GPT.
 Reddit's r/aipromptprogramming Tutorials Collection: A collection of tutorials for prompt engineering.
 Prompt Engineering Guide: A comprehensive guide that contains all the latest papers, learning resources, and developments in the field of prompt engineering.
 dair-ai/Prompt-Engineering-Guide: A GitHub repository that provides a prompt engineering guide with the latest papers and learning guides.
 How to Communicate with ChatGPT – A Guide to Prompt Engineering: A guide that explains what prompt engineering is and how you can use it to improve your communication with AI tools.
 A Beginner's Guide to ChatGPT Prompt Engineering: A beginner-friendly guide that delves into the art and science of Prompt Engineering.
 A Complete Introduction to Prompt Engineering for Large Language Models
 Prompt Engineering Guide: How to Engineer the Perfect Prompts
 Best practices for prompt engineering with OpenAI API: A guide by OpenAI that provides best practices for prompt engineering.
 ChatGPT Prompt Engineering for Developers: A short course on prompt engineering by deeplearning.ai.
 Natural Language Processing: Coursera specialization focusing on NLP.
 Learn Prompting: A Free, Open Source Course on Communicating with AI.
 Deep Learning Specialization: Coursera specialization by Andrew Ng, which includes a course on Sequence Models.
 OpenAI Cookbook: OpenAI's cookbook includes examples of prompt engineering.
 Tokens and Tokenization: Understanding Cost, Speed, and Limits with OpenAI's APIs: Everything tokens and tokenization. How to control costs/performance, how to handle Max Token limits, and a real-world example on how you can make your prompts more efficient.
 How OpenAI Parameters Actuallly Work: How to use OpenAI's parameters to experiment with prompts and get better outputs.
 A Beginner's Guide on Embeddings and Their Impact on Prompts: A Beginner's Guide on Embeddings and Their Impact on Prompts.

Techniques

Few Shot Learning: Everything you need to know about Few-Shot Learning.
 Zero Shot Learning: Large Language Models are Zero-Shot Reasoners.
 Chain of Thought: Encourages the LLM to explain its reasoning to improve its accuracy.
 Zero Shot Chain of Thought: Enable Chain of Thought with only a few words.
 Tree of Thoughts: Tree of Thoughts: Deliberate Problem Solving.
with Large Language Models.
 Multi Persona Collaboration: Prompt the LLM to dynamically generate personas to collaborate to solve a task.
 Mastering ChatGPT Prompts: Mastering ChatGPT Prompts: Harnessing Zero, One, and Few-Shot Learning, Fine-Tuning, and Embeddings for Enhanced GPT Performance.
 Prompting GPT-3 To Be Reliable: Prompting GPT-3 To Be Reliable.
 Decomposed Prompting: A Modular Approach for Solving Complex Tasks.
 AutoPrompt: Eliciting Knowledge from Language Models with Automatically Generated Prompts.
 LangChain Github Repository: Building applications with LLMs through composability.
 Embedchain Github Repository: Framework to create ChatGPT-like bots over your dataset.

Prompt Collections

FlowGPT: FlowGPT is the largest open source prompt community.
 awesomegptprompts.com: Explore hundreds of the best ChatGPT Prompts.
 fka/awesome-chatgpt-prompts: Dataset of awesome chatgpt prompts.
 f/awesome-chatgpt-prompts: This repo includes ChatGPT prompt curation to use ChatGPT better. .
 Awesome ChatGPT Prompts
 PromptHub
 ShowGPT.co
 Best Data Science ChatGPT Prompts
 ChatGPT prompts uploaded by the FlowGPT community
 Ignacio Velásquez Prompt Templates: 500+ ChatGPT Prompt Templates.
 PromptPal: A collection of prompts for GPT-3 and other language models.
 Hero GPT: AI Prompt Library.
 Reddit's ChatGPT Prompts
 Snack Prompt: GPT prompts collection, has a a Chrome extension.
 ShareGPT: Share your prompts and your entire conversations.
 Prompt Search: a search engine for AI Prompts.
 PromptBase: The largest prompts marketplace on the web.
 The Ultimate 5 ChatGPT Prompts: Simplify Your AI Experience.
 The Prompt Index: A vast collection of carefully curated prompts, stimulating imagination and fueling creative endeavours.
 PromptDen: A growing list of thousands of prompts for both text and image generation. Free to explore, add your own, save your favorites and even create a profile page for prompt engineering.

Papers

Attention Is All You Need: Transformer introduction paper.
 Language Models are Few-Shot Learners: GPT-3 introduction paper by OpenAI.
 Fine-Tuning Language Models from Human Preferences: Important paper on fine-tuning language models by OpenAI.
 The Power of Scale for Parameter-Efficient Prompt Tuning: Explores the benefits of "prompt tuning" for robust task performance.
 Deep Attentive Learning for Stock Movement Prediction From Social Media Text and Company Correlations: Introduces an architecture for accurate stock forecasting using financial data and social media signals.
 A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT
 Hard Prompts Made Easy: Gradient-Based Discrete Optimization for Prompt Tuning and Discovery.
 Synthetic Prompting: Generating Chain-of-Thought Demonstrations for Large Language Models.
 Progressive Prompts: Continual Learning for Language Models.
 Batch Prompting: Efficient Inference with LLM APIs.
 Successive Prompting for Decompleting Complex Questions
 Structured Prompting: Scaling In-Context Learning to 1,000 Examples.
 Large Language Models Are Human-Level Prompt Engineers
 Ask Me Anything: A simple strategy for prompting language models.
 PromptChainer: Chaining Large Language Model Prompts through Visual Programming.
 Reframing Instructional Prompts to GPTk's Language
 Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm.
 Prefix-Tuning: Optimizing Continuous Prompts for Generation
 Multimodal Chain-of-Thought Reasoning in Language Models
 On Second Thought, Let's Not Think Step by Step!: Bias and Toxicity in Zero-Shot Reasoning.
 ReAct: Synergizing Reasoning and Acting in Language Models
 Language Models Are Greedy Reasoners: A Systematic Formal Analysis of Chain-of-Thought.
 On the Advance of Making Language Models Better Reasoners
 Large Language Models are Zero-Shot Reasoners
 Reasoning Like Program Executors
 Self-Consistency Improves Chain of Thought Reasoning in Language Models
 Chain of Thought Prompting Elicits Reasoning in Large Language Models
 Generated Knowledge Prompting for Commonsense Reasoning
 Large Language Models Can Be Easily Distracted by Irrelevant Context
 Constitutional AI: Harmlessness from AI Feedback

Books

The ChatGPT Prompt Book: A book dedicated to ChatGPT prompts.
 You Look Like a Thing and I Love You: A book about AI with a focus on language models.

Communities

OpenAI Discord Server: The official OpenAI Discord server.
 Attention Architects: Prompt Engineering expert & open source community.
 ChatGPT Prompt Engineering Discord Server: A Discord server dedicated to prompt engineering.
 Attention Architects: Prompt Engineering open source community.
 r/MachineLearning: The Machine Learning subreddit often has discussions on GPT and other language models.
 Hugging Face Forum: A forum for discussing Hugging Face's transformer models, including GPT.
 ChatGPT Community Discord Server: A Discord server dedicated to ChatGPT.
 Reddit's ChatGPT Discord Server: r/chatgpt Discord server.
 PromptsLab Discord: Knowledge sharing community for Generative Models, Prompt Engineering, LLMs.
 Learn Prompting: A Discord server dedicated to learning about prompts.
 Artificial Intelligence Discord: Discord server for AI enthusiasts and prompt engineers.

Playgrounds and Alternative UIs

Official OpenAI Playground
 llm: Use any LLM from the command line, easily.
 Nat.Dev: Multiple Chat AI Playground & Comparer.
 Poe.com: All in one playground: GPT4, Sage, Claude+, Dragonfly, and more...
 Ora.sh GPT-4 Chatbots
 Better ChatGPT: A web app with a better UI for exploring OpenAI's ChatGPT API.
 LMQL.AI: A programming language and platform for language models.
 Vercel Ai Playground: One prompt, multiple Models (including GPT-4).
 Conju.ai: A visual prompt chaining app.
 Voiceflow: Professional collaborative visual prompt-chaining tool.
 CometLLM: Track, visualize, and evaluate your LLM prompts and chains in one simple-to-use, convenient UI.

Prompt Generators

Promptify: Automatically improve your prompt.
 Fusion: Elevate your output with Fusion's smart prompts.
 Bumble-Prompts: Let AI Write your bumble prompt.
 ChatGPT Prompt Generator: Generates ChatGPT prompts based on a BART model.
 PromptPerfect: Prompt optimizer.
 Hero GPT: AI Prompt Generator.
 LMQL: Query language for programming large language models.
 OpenPromptStudio
 BossGPT

Auto-GPT Related

Auto-GPT Official Repo
 Auto-GPT God Mode
 OpenAIMaster's Guide to Auto-GPT: How does Auto-GPT work, an AI tool to create full projects.
 AgentGPT: GPT agents in browser.
 DemoGPT: 🧩 DemoGPT enables you to create quick demos by just using prompts.

Prompt Injection

Understanding Prompt Injections and What You Can Do About Them: An introduction to prompt injections with examples and tactics you can use to mitigate potential risks in your application.
 Learn Prompting's Prompt Injection guide: A guide to prompt injections with examples.
 Prompt injection: What's the worst that can happen?
 Prompt injections are bad, mkay?

ChatGPT Plug-ins

ChatGPT plugins: OpenAI Official Page.
 Plug-in example code in Python: Example code for creating a ChatGPT plug-in in Python.
 Surfer Plug-in source code
 Security: (PAID) Create, deploy, monitor and secure LLM Plugins.

Prompt Engineering Jobs Offers

Prompt-Talent: Prompt engineering job offers.

AI Links Directories

llm: Use any LLM from the command line.
 FuturePedia: The Largest AI Tools Directory Updated Daily.
 Theresanaiforthat: The biggest AI aggregator.
 Awesome-Prompt-Engineering
 AiTreasureBox
 EwingYangs Awesome-open-gpt
 KennethanCeyer Awesome-llmops
 KennethanCeyer awesome-llm
 tensorchord Awesome-LLMOps

Contributing
Contributions are always welcome! Please read the contribution guidelines first.
How to help:

Give a ⭐️ to increase the repository's visibility.
Add descriptions for resources that don't have them.
Add new resources to the list.
Fix typos or grammatical errors.
Share this repository with others.

Featured
🚀 RECOMMENDED: Use any LLM from the command line easily with llm. 🚀
Highlights: None
Highlight Scores: None


Title: GitHub - zjunlp/Prompt4ReasoningPapers: Repository for the ACL2023 paper "Reasoning with Language Model Prompting: A Survey".
URL: https://github.com/zjunlp/Prompt4ReasoningPapers
ID: https://github.com/zjunlp/Prompt4ReasoningPapers
Score: 0.8214123845100403
Published Date: 2023-07-28
Author: Zjunlp
Text: Reasoning with Language Model Prompting Papers

🔔 News

2023-7-12 We release EasyEdit, an easy-to-use knowledge editing framework for Large Language Models.
 2023-6-19 We open-source KnowLM, a knowledgeable large language model framework with pre-training and instruction fine-tuning code (supports multi-machine multi-GPU setup) and various LLMs.
 2023-3-27 We release EasyInstruct, a package for instructing Large Language Models (LLMs) like ChatGPT in your research experiments. It is designed to be easy to use and easy to extend!
 2023-2-19 We upload a tutorial of our survey paper to help you learn more about reasoning with language model prompting (Attached with a video (Chinese) of the tutorial).
 2022-12-19 We release a new survey paper:"Reasoning with Language Model Prompting: A Survey" based on this repository! We are looking forward to any comments or discussions on this topic :)
 2022-09-14 We create this repository to maintain a paper list on Reasoning with Language Model Prompting.

🔍 Contents

🌟 Introduction
 📜 Papers

Overview
 Methods

Strategy Enhanced Reasoning

Prompt Engineering

Single-Stage
 Multi-Stage

Process Optimization

Self-Optimization
 Ensemble-Optimization
 Iterative-Optimization

External Engine

Physical Simulator
 Code Interpreter
 Tool Learning

Knowledge Enhanced Reasoning

Implicit Knowledge
 Explicit Knowledge

Others

Analysis

🧰 Resources

Benchmarks and Tasks
 Tools

🎉 Contributing
 🚩Citation

🌟 Introduction
Reasoning, as an essential ability for complex problem-solving, can provide back-end support for various real-world applications, such as medical diagnosis, negotiation, etc. This paper provides a comprehensive survey of cutting-edge research on reasoning with language model prompting. We introduce research works with comparisons and summaries and provide systematic resources to help beginners. We also discuss the potential reasons for emerging such reasoning abilities and highlight future research directions.

📜 Papers
Overview

Reasoning with Language Model Prompting: A Survey.
 Shuofei Qiao, Yixin Ou, Ningyu Zhang, Xiang Chen, Yunzhi Yao, Shumin Deng, Chuanqi Tan, Fei Huang, Huajun Chen. [abs], 2022.12

Towards Reasoning in Large Language Models: A Survey.
 Jie Huang, Kevin Chen-Chuan Chang. [abs], 2022.12

A Survey of Deep Learning for Mathematical Reasoning.
 Pan Lu, Liang Qiu, Wenhao Yu, Sean Welleck, Kai-Wei Chang. [abs], 2022.12

A Survey for In-context Learning.
 Qingxiu Dong, Lei Li, Damai Dai, Ce Zheng, Zhiyong Wu, Baobao Chang, Xu Sun, Jingjing Xu, Lei Li, Zhifang Sui. [abs], 2022.12

Knowledge-enhanced Neural Machine Reasoning: A Review.
 Tanmoy Chowdhury, Chen Ling, Xuchao Zhang, Xujiang Zhao, Guangji Bai, Jian Pei, Haifeng Chen, Liang Zhao. [abs], 2023.2

Augmented Language Models: a Survey.
 Grégoire Mialon, Roberto Dessì, Maria Lomeli, Christoforos Nalmpantis, Ram Pasunuru, Roberta Raileanu, Baptiste Rozière, Timo Schick, Jane Dwivedi-Yu, Asli Celikyilmaz, Edouard Grave, Yann LeCun, Thomas Scialom. [abs], 2023.2

The Life Cycle of Knowledge in Big Language Models: A Survey.
 Boxi Cao, Hongyu Lin, Xianpei Han, Le Sun. [abs], 2023.3

Is Prompt All You Need? No. A Comprehensive and Broader View of Instruction Learning.
 Renze Lou, Kai Zhang, Wenpeng Yin. [abs], 2023.3

Logical Reasoning over Natural Language as Knowledge Representation: A Survey.
 Zonglin Yang, Xinya Du, Rui Mao, Jinjie Ni, Erik Cambria. [abs], 2023.3

Nature Language Reasoning, A Survey.
 Fei Yu, Hongbo Zhang, Benyou Wang. [abs], 2023.3

A Survey of Large Language Models.
 Wayne Xin Zhao, Kun Zhou, Junyi Li, Tianyi Tang, Xiaolei Wang, Yupeng Hou, Yingqian Min, Beichen Zhang, Junjie Zhang, Zican Dong, Yifan Du, Chen Yang, Yushuo Chen, Zhipeng Chen, Jinhao Jiang, Ruiyang Ren, Yifan Li, Xinyu Tang, Zikang Liu, Peiyu Liu, Jian-Yun Nie, Ji-Rong Wen. [abs], 2023.3

Tool Learning with Foundation Models.
 Yujia Qin, Shengding Hu, Yankai Lin, Weize Chen, Ning Ding, Ganqu Cui, Zheni Zeng, Yufei Huang, Chaojun Xiao, Chi Han, Yi Ren Fung, Yusheng Su, Huadong Wang, Cheng Qian, Runchu Tian, Kunlun Zhu, Shihao Liang, Xingyu Shen, Bokai Xu, Zhen Zhang, Yining Ye, Bowen Li, Ziwei Tang, Jing Yi, Yuzhang Zhu, Zhenning Dai, Lan Yan, Xin Cong, Yaxi Lu, Weilin Zhao, Yuxiang Huang, Junxi Yan, Xu Han, Xian Sun, Dahai Li, Jason Phang, Cheng Yang, Tongshuang Wu, Heng Ji, Zhiyuan Liu, Maosong Sun. [abs], 2023.4

A Survey of Chain of Thought Reasoning: Advances, Frontiers and Future.
 Zheng Chu, Jingchang Chen, Qianglong Chen, Weijiang Yu, Tao He, Haotian Wang, Weihua Peng, Ming Liu, Bing Qin, Ting Liu. [abs], 2023.9

Methods
Strategy Enhanced Reasoning
Prompt Engineering
Single-Stage

Prompting Contrastive Explanations for Commonsense Reasoning Tasks.
 Bhargavi Paranjape, Julian Michael, Marjan Ghazvininejad, Luke Zettlemoyer, Hannaneh Hajishirzi. [abs], 2021.6

Template Filling for Controllable Commonsense Reasoning.
 Dheeraj Rajagopal, Vivek Khetan, Bogdan Sacaleanu, Anatole Gershman, Andrew Fano, Eduard Hovy. [abs], 2021.11

Chain of Thought Prompting Elicits Reasoning in Large Language Models.
 Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Brian Ichter, Fei Xia, Ed H. Chi, Quoc V. Le, Denny Zhou. [abs], 2022.1

Large Language Models are Zero-Shot Reasoners.
 Takeshi Kojima, Shixiang Shane Gu, Machel Reid, Yutaka Matsuo, Yusuke Iwasawa. [abs], 2022.5

Psychologically-informed chain-of-thought prompts for metaphor understanding in large language models.
 Ben Prystawski, Paul Thibodeau, Noah Goodman. [abs], 2022.9

Complexity-based Prompting for Multi-step Reasoning.
 Yao Fu, Hao Peng, Ashish Sabharwal, Peter Clark, Tushar Khot. [abs], 2022.10

Language Models are Multilingual Chain-of-thought Reasoners.
 Freda Shi, Mirac Suzgun, Markus Freitag, Xuezhi Wang, Suraj Srivats, Soroush Vosoughi, Hyung Won Chung, Yi Tay, Sebastian Ruder, Denny Zhou, Dipanjan Das, Jason Wei. [abs], 2022.10

Automatic Chain of Thought Prompting in Large Language Models.
 Zhuosheng Zhang, Aston Zhang, Mu Li, Alex Smola. [abs], 2022.10

Large Language Models are few(1)-shot Table Reasoners.
 Wenhu Chen. [abs], 2022.10

Teaching Algorithmic Reasoning via In-context Learning.
 Hattie Zhou, Azade Nova, Hugo Larochelle, Aaron Courville, Behnam Neyshabur, Hanie Sedghi. [abs], 2022.11

Active Prompting with Chain-of-Thought for Large Language Models.
 Shizhe Diao, Pengcheng Wang, Yong Lin, Tong Zhang. [abs], 2023.2

Automatic Prompt Augmentation and Selection with Chain-of-Thought from Labeled Data.
 KaShun Shum, Shizhe Diao, Tong Zhang. [abs], 2023.2

A prompt pattern catalog to enhance prompt engineering with chatgpt.
 Jules White, Quchen Fu, Sam Hays, Michael Sandborn, Carlos Olea, Henry Gilbert, Ashraf Elnashar, Jesse Spencer-Smith, Douglas C Schmidt. [abs], 2023.2

ChatGPT Prompt Patterns for Improving Code Quality, Refactoring, Requirements Elicitation, anLearning to Reason and Memorize with Self-Notesd Software Design.
 Jules White, Sam Hays, Quchen Fu, Jesse Spencer-Smith, Douglas C Schmidt. [abs], 2023.3

Learning to Reason and Memorize with Self-Notes.
 Jack lanchantin, Shubham Toshniwal, Jason Weston, Arthur Szlam, Sainbayar Sukhbaatar. [abs], 2023.5

Plan-and-Solve Prompting: Improving Zero-Shot Chain-of-Thought Reasoning by Large Language Models.
 Lei Wang, Wanyu Xu, Yihuai Lan, Zhiqiang Hu, Yunshi Lan, Roy Ka-Wei Lee, Ee-Peng Lim. [abs], 2023.5

Beyond Chain-of-Thought, Effective Graph-of-Thought Reasoning in Large Language Models.
 Yao Yao, Zuchao Li, Hai Zhao. [abs], 2023.5

Re-Reading Improves Reasoning in Language Models.
 Xiaohan Xu, Chongyang Tao, Tao Shen, Can Xu, Hongbo Xu, Guodong Long, Jian-guang Lou. [abs], 2023.9

Multi-Stage

Iteratively Prompt Pre-trained Language Models for Chain of Thought.
 Boshi Wang, Xiang Deng, Huan Sun. [abs], 2022.3

Selection-Inference: Exploiting Large Language Models for Interpretable Logical Reasoning.
 Antonia Creswell, Murray Shanahan, Irina Higgins. [abs], 2022.5

Least-to-Most Prompting Enables Complex Reasoning in Large Language Models.
 Denny Zhou, Nathanael Schärli, Le Hou, Jason Wei, Nathan Scales, Xuezhi Wang, Dale Schuurmans, Olivier Bousquet, Quoc Le, Ed Chi. [abs], 2022.5

Maieutic Prompting: Logically Consistent Reasoning with Recursive Explanations.
 Jaehun Jung, Lianhui Qin, Sean Welleck, Faeze Brahman, Chandra Bhagavatula, Ronan Le Bras, Yejin Choi. [abs], 2022.5

Faithful Reasoning Using Large Language Models.
 Antonia Creswell, Murray Shanahan. [abs], 2022.8

Compositional Semantic Parsing with Large Language Models.
 Andrew Drozdov, Nathanael Schärli, Ekin Akyürek, Nathan Scales, Xinying Song, Xinyun Chen, Olivier Bousquet, Denny Zhou. [abs], 2022.9

Decomposed Prompting: A Modular Approach for Solving Complex Tasks.
 Tushar Khot, Harsh Trivedi, Matthew Finlayson, Yao Fu, Kyle Richardson, Peter Clark, Ashish Sabharwal. [abs], 2022.10

Measuring and Narrowing the Compositionality Gap in Language Models.
 Ofir Press, Muru Zhang, Sewon Min, Ludwig Schmidt, Noah A. Smith, Mike Lewis. [abs], 2022.10

Successive Prompting for Decomposing Complex Questions.
 Dheeru Dua, Shivanshu Gupta, Sameer Singh, Matt Gardner. [abs], 2022.12

The Impact of Symbolic Representations on In-context Learning for Few-shot Reasoning.
 Hanlin Zhang, Yi-Fan Zhang, Li Erran Li, Eric Xing. [abs], 2022.12

LAMBADA: Backward Chaining for Automated Reasoning in Natural Language.
 Seyed Mehran Kazemi, Najoung Kim, Deepti Bhatia, Xin Xu, Deepak Ramachandran. [abs], 2022.12

Iterated Decomposition: Improving Science Q&A by Supervising Reasoning Processes.
 Justin Reppert, Ben Rachbach, Charlie George, Luke Stebbing, Jungwon Byun, Maggie Appleton, Andreas Stuhlmüller. [abs], 2023.1

Self-Polish: Enhance Reasoning in Large Language Models via Problem Refinement.
 Zhiheng Xi, Senjie Jin, Yuhao Zhou, Rui Zheng, Songyang Gao, Tao Gui, Qi Zhang, Xuanjing Huang. [abs], 2023.5

Process Optimization
Self-Optimization

Reframing Human-AI Collaboration for Generating Free-Text Explanations.
 Sarah Wiegreffe, Jack Hessel, Swabha Swayamdipta, Mark Riedl, Yejin Choi. [abs], 2021.12

The Unreliability of Explanations in Few-Shot In-Context Learning.
 Xi Ye, Greg Durrett. [abs], 2022.5

Discriminator-Guided Multi-step Reasoning with Language Models.
 Muhammad Khalifa, Lajanugen Logeswaran, Moontae Lee, Honglak Lee, Lu Wang. [abs], 2023.5

RCOT: Detecting and Rectifying Factual Inconsistency in Reasoning by Reversing Chain-of-Thought.
 Tianci Xue, Ziqi Wang, Zhenhailong Wang, Chi Han, Pengfei Yu, Heng Ji. [abs], 2023.5

Ensemble-Optimization

Self-Consistency Improves Chain of Thought Reasoning in Language Models.
 Xuezhi Wang, Jason Wei, Dale Schuurmans, Quoc Le, Ed H. Chi, Sharan Narang, Aakanksha Chowdhery, Denny Zhou. [abs], 2022.3

On the Advance of Making Language Models Better Reasoners.
 Yifei Li, Zeqi Lin, Shizhuo Zhang, Qiang Fu, Bei Chen, Jian-Guang Lou, Weizhu Chen. [abs], 2022.6

Complexity-based Prompting for Multi-step Reasoning.
 Yao Fu, Hao Peng, Ashish Sabharwal, Peter Clark, Tushar Khot. [abs], 2022.10

Large Language Models are reasoners with Self-Verification.
 Yixuan Weng, Minjun Zhu, Shizhu He, Kang Liu, Jun Zhao. [abs], 2022.12

Answering Questions by Meta-Reasoning over Multiple Chains of Thought.
 Ori Yoran, Tomer Wolfson, Ben Bogin, Uri Katz, Daniel Deutch, Jonathan Berant. [abs], 2023.4

Tree of Thoughts: Deliberate Problem Solving with Large Language Models.
 Shunyu Yao, Dian Yu, Jeffrey Zhao, Izhak Shafran, Thomas L. Griffiths, Yuan Cao, Karthik Narasimhan. [abs], 2023.5

Improving Factuality and Reasoning in Language Models through Multiagent Debate.
 Yilun Du, Shuang Li, Antonio Torralba, Joshua B. Tenenbaum, Igor Mordatch. [abs], 2023.5

AutoMix: Automatically Mixing Language Models
 Aman Madaan, Pranjal Aggarwal, Ankit Anand, Srividya Pranavi Potharaju, Swaroop Mishra, Pei Zhou, Aditya Gupta, Dheeraj Rajagopal, Karthik Kappaganthu, Yiming Yang, Shyam Upadhyay, Mausam, Manaal Faruqui. [abs], 2023.9

Iterative-Optimization

STaR: Bootstrapping Reasoning With Reasoning.
 Eric Zelikman, Yuhuai Wu, Noah D. Goodman. [abs], 2022.3

Large Language Models Can Self-Improve.
 Jiaxin Huang, Shixiang Shane Gu, Le Hou, Yuexin Wu, Xuezhi Wang, Hongkun Yu, Jiawei Han. [abs], 2022.10

Reflexion: An Autonomous Agent with Dynamic Memory and Self-reflection.
 Noah Shinn, Beck Labash, Ashwin Gopinath. [abs], 2023.3

Self-Refine: Iterative Refinement with Self-Feedback.
 Aman Madaan, Niket Tandon, Prakhar Gupta, Skyler Hallinan, Luyu Gao, Sarah Wiegreffe, Uri Alon, Nouha Dziri, Shrimai Prabhumoye, Yiming Yang, Sean Welleck, Bodhisattwa Prasad Majumder, Shashank Gupta, Amir Yazdanbakhsh, Peter Clark. [abs], 2023.3

REFINER: Reasoning Feedback on Intermediate Representations.
 Debjit Paul, Mete Ismayilzada, Maxime Peyrard, Beatriz Borges, Antoine Bosselut, Robert West, Boi Faltings. [abs], 2023.4

Reasoning with Language Model is Planning with World Model
 Shibo Hao*, Yi Gu*, Haodi Ma, Joshua Jiahua Hong, Zhen Wang, Daisy Zhe Wang, Zhiting Hu [abs], 2023.5

External Engine
Physical Simulator

Mind's Eye: Grounded Language Model Reasoning through Simulation.
 Ruibo Liu, Jason Wei, Shixiang Shane Gu, Te-Yen Wu, Soroush Vosoughi, Claire Cui, Denny Zhou, Andrew M. Dai. [abs], 2022.10

Code Interpreter

Language Models of Code are Few-Shot Commonsense Learners.
 Aman Madaan, Shuyan Zhou, Uri Alon, Yiming Yang, Graham Neubig. [abs], 2022.10

PAL: Program-aided Language Models.
 Luyu Gao, Aman Madaan, Shuyan Zhou, Uri Alon, Pengfei Liu, Yiming Yang, Jamie Callan, Graham Neubig. [abs], 2022.11

Program of Thoughts Prompting: Disentangling Computation from Reasoning for Numerical Reasoning Tasks.
 Wenhu Chen, Xueguang Ma, Xinyi Wang, William W. Cohen. [abs], 2022.11

Faithful Chain-of-Thought Reasoning.
 Qing Lyu, Shreya Havaldar, Adam Stein, Li Zhang, Delip Rao, Eric Wong, Marianna Apidianaki, Chris Callison-Burch. [abs], 2023.1

Large Language Models are Versatile Decomposers: Decompose Evidence and Questions for Table-based Reasoning.
 Yunhu Ye, Binyuan Hui, Min Yang, Binhua Li, Fei Huang, Yongbin Li. [abs], 2023.1

Synthetic Prompting: Generating Chain-of-Thought Demonstrations for Large Language Models.
 Zhihong Shao, Yeyun Gong, Yelong Shen, Minlie Huang, Nan Duan, Weizhu Chen. [abs], 2023.2

MathPrompter: Mathematical Reasoning Using Large Language Models.
 Shima Imani, Liang Du, Harsh Shrivastava. [abs], 2023.3

Automatic Model Selection with Large Language Models for Reasoning.
 Xu Zhao, Yuxi Xie, Kenji Kawaguchi, Junxian He, Qizhe Xie. [abs], 2023.5

Code Prompting: a Neural Symbolic Method for Complex Reasoning in Large Language Models.
 Yi Hu, Haotong Yang, Zhouchen Lin, Muhan Zhang. [abs], 2023.5

Tool Learning

Toolformer: Language Models Can Teach Themselves to Use Tools.
 Timo Schick, Jane Dwivedi-Yu, Roberto Dessì, Roberta Raileanu, Maria Lomeli, Luke Zettlemoyer, Nicola Cancedda, Thomas Scialom. [abs], 2023.2

ART: Automatic multi-step reasoning and tool-use for large language models.
 Bhargavi Paranjape, Scott Lundberg, Sameer Singh, Hannaneh Hajishirzi, Luke Zettlemoyer, Marco Tulio Ribeiro. [abs], 2023.3

Chameleon: Plug-and-Play Compositional Reasoning with Large Language Models.
 Pan Lu, Baolin Peng, Hao Cheng, Michel Galley, Kai-Wei Chang, Ying Nian Wu, Song-Chun Zhu, Jianfeng Gao. [abs], 2023.4

CRITIC: Large Language Models Can Self-Correct with Tool-Interactive Critiquing.
 Zhibin Gou, Zhihong Shao, Yeyun Gong, Yelong Shen, Yujiu Yang, Nan Duan, Weizhu Chen. [abs], 2023.5

Making Language Models Better Tool Learners with Execution Feedback.
 Shuofei Qiao, Honghao Gui, Huajun Chen, Ningyu Zhang. [abs], 2023.5

CREATOR: Disentangling Abstract and Concrete Reasonings of Large Language Models through Tool Creation.
 Cheng Qian, Chi Han, Yi R. Fung, Yujia Qin, Zhiyuan Liu, Heng Ji. [abs], 2023.5

ChatCoT: Tool-Augmented Chain-of-Thought Reasoning on Chat-based Large Language Models.
 Zhipeng Chen, Kun Zhou, Beichen Zhang, Zheng Gong, Wayne Xin Zhao, Ji-Rong Wen. [abs], 2023.5

MultiTool-CoT: GPT-3 Can Use Multiple External Tools with Chain of Thought Prompting.
 Tatsuro Inaba, Hirokazu Kiyomaru, Fei Cheng, Sadao Kurohashi. [abs], 2023.5

ToolkenGPT: Augmenting Frozen Language Models with Massive Tools via Tool Embeddings
 Shibo Hao, Tianyang Liu, Zhen Wang, Zhiting Hu [abs], 2023.5

Knowledge Enhanced Reasoning
Implicit Knowledge

Generated Knowledge Prompting for Commonsense Reasoning.
 Jiacheng Liu, Alisa Liu, Ximing Lu, Sean Welleck, Peter West, Ronan Le Bras, Yejin Choi, Hannaneh Hajishirzi. [abs], 2021.10

Rainier: Reinforced Knowledge Introspector for Commonsense Question Answering.
 Jiacheng Liu, Skyler Hallinan, Ximing Lu, Pengfei He, Sean Welleck, Hannaneh Hajishirzi, Yejin Choi. [abs], 2022.10

Explanations from Large Language Models Make Small Reasoners Better.
 Shiyang Li, Jianshu Chen, Yelong Shen, Zhiyu Chen, Xinlu Zhang, Zekun Li, Hong Wang, Jing Qian, Baolin Peng, Yi Mao, Wenhu Chen, Xifeng Yan. [abs], 2022.10

PINTO: Faithful Language Reasoning Using Prompt-Generated Rationales.
 Peifeng Wang, Aaron Chan, Filip Ilievski, Muhao Chen, Xiang Ren. [abs], 2022.11

TSGP: Two-Stage Generative Prompting for Unsupervised Commonsense Question Answering.
 Yueqing Sun, Yu Zhang, Le Qi, Qi Shi. [abs], 2022.11

Distilling Multi-Step Reasoning Capabilities of Large Language Models into Smaller Models via Semantic Decompositions.
 Kumar Shridhar, Alessandro Stolfo, Mrinmaya Sachan. [abs], 2022.12

Teaching Small Language Models to Reason.
 Lucie Charlotte Magister, Jonathan Mallinson, Jakub Adamek, Eric Malmi, Aliaksei Severyn. [abs], 2022.12

Large Language Models Are Reasoning Teachers.
 Namgyu Ho, Laura Schmid, Se-Young Yun. [abs], 2022.12

Specializing Smaller Language Models towards Multi-Step Reasoning.
 Yao Fu, Hao Peng, Litu Ou, Ashish Sabharwal, Tushar Khot. [abs], 2023.1

PaD: Program-aided Distillation Specializes Large Models in Reasoning.
 Xuekai Zhu, Biqing Qi, Kaiyan Zhang, Xingwei Long, Bowen Zhou. [abs], 2023.5

Explicit Knowledge

MemPrompt: Memory-assisted prompt editing to improve GPT-3 after deployment
 Aman Madaan, Niket Tandon, Peter Clark, Yiming Yang. [abs], 2022.1

LogicSolver: Towards Interpretable Math Word Problem Solving with Logical Prompt-enhanced Learning.
 Zhicheng Yang, Jinghui Qin, Jiaqi Chen, Liang Lin, Xiaodan Liang. [abs], 2022.5

Selective Annotation Makes Language Models Better Few-Shot Learners.
 Hongjin Su, Jungo Kasai, Chen Henry Wu, Weijia Shi, Tianlu Wang, Jiayi Xin, Rui Zhang, Mari Ostendorf, Luke Zettlemoyer, Noah A. Smith, Tao Yu. [abs], 2022.9

Dynamic Prompt Learning via Policy Gradient for Semi-structured Mathematical Reasoning.
 Pan Lu, Liang Qiu, Kai-Wei Chang, Ying Nian Wu, Song-Chun Zhu, Tanmay Rajpurohit, Peter Clark, Ashwin Kalyan. [abs], 2022.9

Interleaving Retrieval with Chain-of-Thought Reasoning for Knowledge-Intensive Multi-Step Questions.
 Harsh Trivedi, Niranjan Balasubramanian, Tushar Khot, Ashish Sabharwal. [abs], 2022.12

Rethinking with Retrieval: Faithful Large Language Model Inference.
 Hangfeng He, Hongming Zhang, Dan Roth. [abs], 2023.1

Verify-and-Edit: A Knowledge-Enhanced Chain-of-Thought Framework.
 Ruochen Zhao, Xingxuan Li, Shafiq Joty, Chengwei Qin, Lidong Bing. [abs], 2023.5

Others

Language Model Cascades.
 David Dohan, Winnie Xu, Aitor Lewkowycz, Jacob Austin, David Bieber, Raphael Gontijo Lopes, Yuhuai Wu, Henryk Michalewski, Rif A. Saurous, Jascha Sohl-dickstein, Kevin Murphy, Charles Sutton. [abs], 2022.7

Learn to Explain: Multimodal Reasoning via Thought Chains for Science Question Answering.
 Pan Lu, Swaroop Mishra, Tony Xia, Liang Qiu, Kai-Wei Chang, Song-Chun Zhu, Oyvind Tafjord, Peter Clark, Ashwin Kalyan. [abs], 2022.9

Multimodal Analogical Reasoning over Knowledge Graphs.
 Ningyu Zhang, Lei Li, Xiang Chen, Xiaozhuan Liang, Shumin Deng, Huajun Chen. [abs], 2022.10

Scaling Instruction-Finetuned Language Models.
 Hyung Won Chung, Le Hou, Shayne Longpre, Barret Zoph, Yi Tay, William Fedus, Yunxuan Li, Xuezhi Wang, Mostafa Dehghani, Siddhartha Brahma, Albert Webson, Shixiang Shane Gu, Zhuyun Dai, Mirac Suzgun, Xinyun Chen, Aakanksha Chowdhery, Alex Castro-Ros, Marie Pellat, Kevin Robinson, Dasha Valter, Sharan Narang, Gaurav Mishra, Adams Yu, Vincent Zhao, Yanping Huang, Andrew Dai, Hongkun Yu, Slav Petrov, Ed H. Chi, Jeff Dean, Jacob Devlin, Adam Roberts, Denny Zhou, Quoc V. Le, Jason Wei. [abs], 2022.10

See, Think, Confirm: Interative Prompting Between Vision and Language Models for Knowledge-based Visual Reasoning.
 Zhenfang Chen, Qinhong Zhou, Yikang Shen, Yining Hong, Hao Zhang, Chuang Gan. [abs], 2023.1

Multimodal Chain-of-Thought Reasoning in Language Models.
 Zhuosheng Zhang, Aston Zhang, Mu Li, Hai Zhao, George Karypis, Alex Smola. [abs], 2023.2

Language Is not All You Need: Aligning Perception with Language Models.
 Shaohan Huang, Li Dong, Wenhui Wang, Yaru Hao, Saksham Singhal, Shuming Ma, Tengchao Lv, Lei Cui, Owais Khan Mohammed, Qiang Liu, Kriti Aggarwal, Zewen Chi, Johan Bjorck, Vishrav Chaudhary, Subhojit Som, Xia Song, Furu Wei. [abs], 2023.2

Visual ChatGPT: Talking, Drawing and Editing with Visual Foundation Models.
 Chenfei Wu, Shengming Yin, Weizhen Qi, Xiaodong Wang, Zecheng Tang, Nan Duan. [abs], 2023.3

ViperGPT: Visual Inference via Python Execution for Reasoning.
 Dídac Surís, Sachit Menon, Carl Vondrick. [abs], 2023.3

MM-REACT: Prompting ChatGPT for Multimodal Reasoning and Action.
 Zhengyuan Yang, Linjie Li , Jianfeng Wang, Kevin Lin, Ehsan Azarnasab, Faisal Ahmed, Zicheng Liu, Ce Liu, Michael Zeng, Lijuan Wang. [abs], 2023.3

Boosting Theory-of-Mind Performance in Large Language Models via Prompting.
 Shima Rahimi Moghaddam, Christopher J. Honey. [abs], 2023.4

Analysis

Can language models learn from explanations in context?
 Andrew K. Lampinen, Ishita Dasgupta, Stephanie C. Y. Chan, Kory Matthewson, Michael Henry Tessler, Antonia Creswell, James L. McClelland, Jane X. Wang, Felix Hill. [abs], 2022.4

Emergent Abilities of Large Language Models.
 Jason Wei, Yi Tay, Rishi Bommasani, Colin Raffel, Barret Zoph, Sebastian Borgeaud, Dani Yogatama, Maarten Bosma, Denny Zhou, Donald Metzler, Ed H. Chi, Tatsunori Hashimoto, Oriol Vinyals, Percy Liang, Jeff Dean, William Fedus. [abs], 2022.6

Language models show human-like content effects on reasoning.
 Ishita Dasgupta, Andrew K. Lampinen, Stephanie C. Y. Chan, Antonia Creswell, Dharshan Kumaran, James L. McClelland, Felix Hill. [abs], 2022.7

Rationale-Augmented Ensembles in Language Models.
 Xuezhi Wang, Jason Wei, Dale Schuurmans, Quoc Le, Ed Chi, Denny Zhou. [abs], 2022.7

Can Large Language Models Truly Understand Prompts? A Case Study with Negated Prompts.
 Joel Jang, Seongheyon Ye, Minjoon Seo. [abs], 2022.9

Text and Patterns: For Effective Chain of Thought, It Takes Two to Tango
 Aman Madaan, Amir Yazdanbakhsh. [abs], 2022.9

Challenging BIG-Bench Tasks and Whether Chain-of-Thought Can Solve Them.
 Mirac Suzgun, Nathan Scales, Nathanael Schärli, Sebastian Gehrmann, Yi Tay, Hyung Won Chung, Aakanksha Chowdhery, Quoc V. Le, Ed H. Chi, Denny Zhou, Jason Wei. [abs], 2022.10

Language Models are Greedy Reasoners: A Systematic Formal Analysis of Chain-of-thought.
 Abulhair Saparov, He He. [abs], 2022.10

Knowledge Unlearning for Mitigating Privacy Risks in Language Models.
 Joel Jang, Dongkeun Yoon, Sohee Yang, Sungmin Cha, Moontae Lee, Lajanugen Logeswaran, Minjoon Seo. [abs], 2022.10

Emergent Analogical Reasoning in Large Language Models.
 Taylor Webb, Keith J. Holyoak, Hongjing Lu. [abs], 2022.12

Towards Understanding Chain-of-Thought Prompting: An Empirical Study of What Matters.
 Boshi Wang, Sewon Min, Xiang Deng, Jiaming Shen, You Wu, Luke Zettlemoyer, Huan Sun. [abs], 2022.12

On Second Thought, Let’s Not Think Step by Step! Bias and Toxicity in Zero-Shot Reasoning.
 Omar Shaikh, Hongxin Zhang, William Held, Michael Bernstein, Diyi Yang. [abs], 2022.12

Can Retriever-Augmented Language Models Reason? The Blame Game Between the Retriever and the Language Model.
 Parishad BehnamGhader, Santiago Miret, Siva Reddy. [abs], 2022.12

Why Can GPT Learn In-Context? Language Models Secretly Perform Gradient Descent as Meta-Optimizers.
 Damai Dai, Yutao Sun, Li Dong, Yaru Hao, Zhifang Sui, Furu Wei. [abs], 2022.12

Dissociating language and thought in large language models: a cognitive perspective.
 Kyle Mahowald, Anna A. Ivanova, Idan A. Blank, Nancy Kanwisher, Joshua B. Tenenbaum, Evelina Fedorenko. [abs], 2023.1

Large Language Models Can Be Easily Distracted by Irrelevant Context.
 Freda Shi, Xinyun Chen, Kanishka Misra, Nathan Scales, David Dohan, Ed Chi, Nathanael Schärli, Denny Zhou. [abs], 2023.2

A Multitask, Multilingual, Multimodal Evaluation of ChatGPT on Reasoning, Hallucination, and Interactivity.
 Yejin Bang, Samuel Cahyawijaya, Nayeon Lee, Wenliang Dai, Dan Su, Bryan Wilie, Holy Lovenia, Ziwei Ji, Tiezheng Yu, Willy Chung, Quyet V. Do, Yan Xu, Pascale Fung. [abs], 2023.2

ChatGPT is a Knowledgeable but Inexperienced Solver: An Investigation of Commonsense Problem in Large Language Models.
 Ning Bian, Xianpei Han, Le Sun, Hongyu Lin, Yaojie Lu, Ben He. [abs], 2023.3

Why think step-by-step? Reasoning emerges from the locality of experience.
 Ben Prystawski, Noah D. Goodman. [abs], 2023.4

Learning Deductive Reasoning from Synthetic Corpus based on Formal Logic.
 Terufumi Morishita, Gaku Morio, Atsuki Yamaguchi, Yasuhiro Sogawa. [abs], 2023.8

🧰 Resources
Benchmarks and Tasks

Reasoning Skills
Benchmarks

Arithmetic Reasoning
 GSM8K, SVAMP, ASDiv, AQuA-RAT, MAWPS, AddSub, MultiArith, SingleEq, SingleOp

Commonsense Reasoning
 CommonsenseQA, StrategyQA, ARC, SayCan, BoolQA, HotpotQA, OpenBookQA, PIQA, WikiWhy

Symbolic Reasoning
 Last Letter Concatenation, Coin Flip, Reverse List

Logical Reasoning
 ProofWriter, EntailmentBank, RuleTaker, CLUTRR, FLD

Multimodal Reasoning
 SCIENCEQA

Others
 BIG-bench, SCAN, Chain-of-Thought Hub

Tools

ThoughtSource : A central, open resource for data and tools related to chain-of-thought reasoning in LLMs.
 LangChain : A library designed to help developers build applications using LLMs combined with other sources of computation or knowledge.
 LogiTorch : A PyTorch-based library for logical reasoning on natural language.
 λprompt : A library that allows for building a full large LM-based prompt machines, including ones that self-edit to correct and even self-write their own execution code.
 Promptify : Prompt Engineering, Solve NLP Problems with LLM's & Easily generate different NLP Task prompts for popular generative models like GPT, PaLM, and more with Promptify.
 MiniChain : A tiny library for coding with large language models that aims to implement the core prompt chaining functionality.
 LlamaIndex : A project that provides a central interface to connect your LLM's with external data.
 EasyInstruct : A package for instructing Large Language Models (LLMs) like GPT-3 in your research experiments. It is designed to be easy to use and easy to extend.

🎉 Contributing

Add a new paper or update an existing paper, thinking about which category the work should belong to.
Use the same format as existing entries to describe the work.
Add the abstract link of the paper (/abs/ format if it is an arXiv publication).
A very brief explanation why you think a paper should be added or updated is recommended.

Don't worry if you put something wrong, they will be fixed for you. Just contribute and promote your awesome work here!
Contributors

🚩Citation
If you find this survey useful for your research, please consider citing
 @inproceedings{qiao-etal-2023-reasoning,
 title = "Reasoning with Language Model Prompting: A Survey",
 author = "Qiao, Shuofei and
 Ou, Yixin and
 Zhang, Ningyu and
 Chen, Xiang and
 Yao, Yunzhi and
 Deng, Shumin and
 Tan, Chuanqi and
 Huang, Fei and
 Chen, Huajun",
 booktitle = "Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)",
 month = jul,
 year = "2023",
 address = "Toronto, Canada",
 publisher = "Association for Computational Linguistics",
 url = "https://aclanthology.org/2023.acl-long.294",
 pages = "5368--5393",
 abstract = "Reasoning, as an essential ability for complex problem-solving, can provide back-end support for various real-world applications, such as medical diagnosis, negotiation, etc. This paper provides a comprehensive survey of cutting-edge research on reasoning with language model prompting. We introduce research works with comparisons and summaries and provide systematic resources to help beginners. We also discuss the potential reasons for emerging such reasoning abilities and highlight future research directions. Resources are available at https://github.com/zjunlp/Prompt4ReasoningPapers (updated periodically).",
}
Highlights: None
Highlight Scores: None


Title: Learn Prompting | Learn Prompting
URL: https://learnprompting.org/
ID: https://learnprompting.org/
Score: 0.8180543184280396
Published Date: 2023-01-01
Author: None
Text: Skip to main content Learn Prompting Learn Contribute Supporters Certificate Consulting English English Español Français 日本語 Português 简体中文 한국어 සිංහල Русский Change Log GitHub A Free, Open Source Course on Communicating with Artificial Intelligence Join the Discord Start Learning Join 500K+ people learning prompting Easy to Use Built for beginners Focus on What Matters Spend less time for better LLM results Shoot for the Moon Learn advanced prompt engineering Media on Learn Prompting Listen on Spotify or Apple Podcasts! Stay tuned for a competition with Towards AI Newsletters
Highlights: None
Highlight Scores: None


Title: Getting started with LLM prompt engineering
URL: https://learn.microsoft.com/en-us/ai/playbook/technology-guidance/generative-ai/working-with-llms/prompt-engineering
ID: https://learn.microsoft.com/en-us/ai/playbook/technology-guidance/generative-ai/working-with-llms/prompt-engineering
Score: 0.8171889185905457
Published Date: 2024-02-02
Author: None
Text: Skip to main content

This browser is no longer supported.
Upgrade to Microsoft Edge to take advantage of the latest features, security updates, and technical support.

Getting started with LLM prompt engineering

Article

02/02/2024

In this article

Large Language Models (LLMs) have the ability to learn new tasks on the fly, without requiring any explicit training or parameter updates. This mode of using LLMs is called in-context learning. It relies on providing the model with a suitable input prompt that contains instructions and/or examples of the desired task. The input prompt serves as a form of conditioning that guides the model's output, but the model does not change its weights. In-context learning can be applied in different settings such as zero-shot, one shot, or few-shot learning. It depends on the amount of information that needs to be included in the input prompt.

The process of designing and tuning the natural language prompts for specific tasks, with the goal of improving the performance of LLMs is called prompt engineering.
Effective prompt engineering can significantly improve the performance of LLMs on specific tasks. It is done by providing instructions and contextual information that help guide the model's output. By carefully designing prompts, researchers can steer the LLM's attention toward the most relevant information for a given task, leading to more accurate and reliable outputs.
Prompt engineering can also help mitigate the problem of "catastrophic forgetting," where an LLM may forget previously learned information during fine-tuning for a new task. By using carefully designed prompts, the model can retain relevant knowledge while still adapting to new tasks.
Prompt components
While it is considered a new field, rich literature is already available, including articles, blogs, research papers, repos, etc., about prompt engineering techniques.
A common technique is to construct prompts from a well-defined set of components, as shown in the following diagram.

Instructions and other static context
Static context description refers to providing fixed information to the LLM. This information can include content and format instructions, database schema information, or any other contextual information that is relevant to the task. Here are some widely-used approaches that demonstrate using static context examples in prompt engineering:
Establish conversational or functional style with a system message
A system message can be used to inform the LLM about the context. The context may be the type of conversation it is engaging in, or the function it is supposed to perform. It helps the LLM generate more appropriate responses. For example, if the LLM is expected to perform a customer service function, the prompt could include a system message such as:
 You are a friendly AI agent who can provide assistance to the customer regarding their recent order.

Similarly, if the LLM is engaging in a casual conversation, the prompt could include a message such as
 Let's have a friendly chat about your favorite hobbies.

Use input text to guide completion formatting
By formatting input text in a specific way, we can guide the LLMs towards generating more relevant responses. For example, if the LLM is trained to generate recipe instructions, the input text could be formatted as "First, [action], then [action], and finally [action]." This formatting guides the LLM towards generating instructions in a sequential manner. Similarly, if the LLM is trained to generate summaries of news articles, the input text could be formatted as "The article talks about [topic]. It discusses [point 1], [point 2], and [point 3]." This formatting guides the LLM towards generating a summary that covers the main points of the article.
Here we can see the importance of using the correct comment character for the language that you want to generate.
 Prompt:
/* Create a javascript dictionary with 5 cities and their location */
Completion:
 var cities = {
'Los Angeles': [34.0522, -118.2437],
'New York': [40.7128, -74.0059],
'San Francisco': [37.7749, -122.4194],
'Chicago': [41.8781, -87.6298],
'Houston': [29.7604, -95.3698]
};

In this case, we get a properly formatted JavaScript dictionary with the requested information.
Now, if you change "JavaScript" to python and leave the comment characters the same you get:
Prompt: /* Create a python dictionary with 5 cities and their location */
Completion:
 PyObject *pDict = PyDict_New();
 PyDict_SetItemString(pDict, "San Francisco", Py_BuildValue("(f,f)", 37.77493, -122.419416));
 PyDict_SetItemString(pDict, "New York", Py_BuildValue("(f,f)", 40.7127, -74.0059));
 PyDict_SetItemString(pDict, "London", Py_BuildValue("(f,f)", 51.507351, -0.127758));
 PyDict_SetItemString(pDict, "Paris", Py_BuildValue("(f,f)", 48.856614, 2.352222));
 PyDict_SetItemString(pDict, "Tokyo", Py_BuildValue("(f
 f)", 35.689487, 139.691706));

Here we get C++ code making a python dictionary, because of the comment character being /* instead of #.
Add supporting information
Adding supporting information to the prompt can provide more context for the LLM, which can improve the accuracy of its responses. For example, if the prompt asks the LLM to generate a response to a specific question, providing additional information can help the LLM generate a more relevant response. A good example of this is:
 Please explain transformer language model to a 15-year-old student.

Similarly, the LLM generates a more accurate and persuasive description when provided with additional information if asked to generate a product description. A good example is:
 Write a witty product description in a conversational style so young adult shoppers understand
what this product does and how it benefits them.
Use the following product details to summarize your description:
Title: {{shopify.title}}
Type: {{shopify.type}}
Vendor: {{shopify.vendor}}
Tags: {{shopify.tags}}

Task-specific knowledge enrichment
Prompt engineering by task-specific knowledge enrichment involves retrieving relevant knowledge from a large corpus of text and incorporating that into the prompt to improve the performance of language models. This enrichment is also known as data augmented generation. One way to achieve this enrichment is through a knowledge retrieval strategy. This type of strategy involves chunking and indexing bulk knowledge context, followed by embedding similarity context selection. Here's how this approach works:

Importing knowledge data into a document store. Multiple data sources could be used to build the knowledge document store. For example, you could import the following data:

Car reviews from websites such as Edmunds and Consumer Reports

Technical manuals in .pdf format from car manufacturers

News articles from sources such as Reuters and CNN
Each of these data sources would be represented as a separate document within the document store.

Chunking the text into smaller, possibly overlapping and more manageable segments. The chunk can be implemented by a static size of token (for example, 1000). The chunk size is defined by considering token size limit of LLMs' model inference. It can also be carried out using embedded titles, topics, or natural paragraph styles in the knowledge data.

Embedding generation/indexing for efficient retrieval. The final step is to generate embeddings and index the segmented text for efficient retrieval. This generation involves representing each segment as a vector or a set of features that capture its key semantic attributes. For example, you could generate embeddings using a pretrained language model (like, BERT, text_embedding-ada-002) and save it as a vector store. Next, an index is created that maps each embedding to its corresponding document. This index allows you to quickly retrieve all the documents that contain relevant information based on their similarity to the query embedding.

Retrieval of relevant context (for example, chunks). Once the knowledge base has been chunked and indexed, the next step is to select the most relevant pieces of information to incorporate into the prompt. One approach for doing that is by semantic search. Specifically, embeddings of the indexed knowledge segments are compared with the embeddings of the input prompt to identify the most similar pieces of information.

This method of prompt engineering by task-specific knowledge enrichment can be highly effective in improving the accuracy and relevance of LLM responses. By incorporating relevant knowledge into the prompt, the LLM can generate more informed and accurate responses. These responses can enhance the user's experience and increase the effectiveness of the system. The following figure provides one example of task-specific knowledge enrichment architecture design.

Few-shot examples
Few-shot examples involve including a few input and output examples (input-output pairs) in the LLM to guide its completions in both content and format. The following example is a simple few-shot classification:
 apple: fruit
orange: fruit
zucchini: vegetable

Now, if we want to know if a tomato is a fruit or vegetable, we include this few-shot example prior to input:
 apple: fruit
orange: fruit
zucchini: vegetable
tomato:
Complete this list

To which the GPT-3.5 responds with "tomato: fruit (botanically), vegetable (culinarily)".
The previous example is a case of a static few shot example. No matter what object we are trying to classify, the same examples are used. However, there are cases where we may want to pick different few shot examples dynamically based on the input prompt. To do that, a library/bank of few-shot examples is created manually. Each example is represented in a feature space (for example, embeddings using a pretrained model). Then, when a new prompt is presented, the few-shot examples that are most similar in that feature space are selected to guide the language model. This method is useful when the following statements are true:

The few-shot bank data is large and diverse
The examples share a common underlying pattern

For example, if the few-shot bank data consists of various examples of restaurant reviews, embeddings can capture similarities in the language used to describe the quality of food, service, and atmosphere. The most similar examples can be used to optimize the language model inference.
There are different techniques to improve/optimize the dynamic few-shot selection further. One approach is to filter or categorize the examples in the few-shot for faster retrieval of more relevant examples. To do that, the few-shot bank examples are labeled using intentions or tasks. A custom model can be trained to classify those examples (for example, sports, entertainment, politics, etc.). When a new prompt is presented, the classifier is used to predict the task or intention of the prompt. Then, the few-shot examples that are most relevant to the predicted task are selected to instruct the language model inference. The following figure illustrates the architecture design for dynamic few-shot example retrieval. This retrieval uses the embedding similarity or intention prediction classifier method.

Using session history
Prompt engineering using session history involves tracking the history of a conversation between the user and the language model. This method can help the language model generate more accurate responses by taking into account the context of the conversation. Here's an example of how LLMs track the history of conversation to help generate accurate responses:
 User: The capital of India?
LLM: The capital of India is New Delhi.
User: What is the population of this city?
LLM: As of 2021, the estimated population of New Delhi is around 31.8 million people.

In this scenario, the LLM is able to use the history of the conversation to understand "this city" refers to "New Delhi".
Another example takes the following multi-turn NL2Code interaction where the user's requests follow the # comment character and the model's code follows.
 # Add a cube named "myCube"
cube(name="myCube")
# Move it up three units
move(0, 5, 0, "myCube")

For the second request ("Move it up three units") the model is only able to get the correct completion because the previous interaction is included.
One helpful trick for deciding if you need session history is to put yourself in the place of the model, and ask yourself "Do I have all of the information I need to do what the user wants?"
Challenges and limitations of prompt engineering
While prompt engineering can be useful for improving the accuracy and effectiveness of LLMs inference results, it has substantial challenges and limitations.
Here we summarize some major challenges when using prompt engineering.

Token size limit for prompt input: Most LLMs have a limit on the number of tokens that can be used as input to generate a completion. This limit can be as low as a few dozen tokens. This limit can restrict the amount of context that can be used to generate accurate completions.
 Data for prompt engineering are not always available: For example, prompts may require domain-specific knowledge or language that is not commonly used in everyday communication. In such cases, it may be challenging to find suitable data to use for prompt engineering. Additionally, the quality of the data used for prompt engineering affects the quality of the prompts.
 Evaluation becomes extremely complex as prompt volume grows: As the number of prompts increases, it becomes more difficult to keep track of the various experiments and to isolate the effect of the prompts on the final output. This tracking difficulty can lead to confusion and make it more challenging to draw meaningful conclusions from the experiments.
 Complex prompts add latency and costs: LLMs require time and resources to process and respond to complex prompts. It also adds latency that can slow down the overall process of model development and deployment. More complex prompts also increase the prompt token size in each LLM call, increasing the cost of running experiments.
 Small prompt changes can have a large impact: It makes it difficult to predict how the model will behave with even small prompt changes. This can lead to unexpected results. This becomes problematic in applications where accuracy and consistency are critical, such as in automated customer service or medical diagnosis.

Feedback

Feedback

Coming soon: Throughout 2024 we will be phasing out GitHub Issues as the feedback mechanism for content and replacing it with a new feedback system. For more information see: https://aka.ms/ContentUserFeedback.
Submit and view feedback for

Additional resources

In this article
Highlights: None
Highlight Scores: None


Title: Introduction | Learn Prompting: Your Guide to Communicating with AI
URL: https://learnprompting.org/docs/reliability/intro
ID: https://learnprompting.org/docs/reliability/intro
Score: 0.8155970573425293
Published Date: 2023-01-01
Author: None
Text: This chapter covers how to make completions more reliable, as well as how to
implement checks to ensure that outputs are reliable. To a certain extent, most
of the previous techniques covered have to do with improving completion
accuracy, and thus reliability, in particular self-consistency 1 .
However, there are a number of other techniques that can be used to improve reliability,
beyond basic prompting strategies. LLMs have been found to be more reliable than we might expect at interpreting what a prompt is trying to say when responding to misspelled, badly phrased, or even actively misleading prompts 2 .
Despite this ability, they still exhibit various problems including hallucinations 3 ,
flawed explanations with CoT methods 3 , and multiple biases
including majority label bias, recency bias, and common token bias 4 .
Additionally, zero-shot CoT can be particularly biased when dealing with sensitive topics 5 . Common solutions to some of these problems include calibrators to remove a priori biases,
and verifiers to score completions, as well as promoting diversity in completions.
Highlights: None
Highlight Scores: None

➜  /app git:(dev) ✗