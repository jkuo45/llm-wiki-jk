
**[[Zero-shot Prompting]]**
- The prompt used to interact with the model won't contain examples.
- Directly instructs the model to perform a task without any additional examples to steer it.
- [[Instruction tuning]] is the concept of fine-tuning on datasets described via instructions.

**[[Few-Shot Prompting]]**
- Few-shot prompting can be used as a technique to enable [[in-context learning]] where demonstrations and examples are provided to steer the model to better performance.
- Examples and demonstrations serve as conditioning for subsequent examples.
- The label space and the distribution of the input text specified by the demonstrations are both important.
- The format also plays a key role in performance.
- Selecting random labels from a true distribution (instead of uniform distributions) of labels also helps.

**[[Chain of Thought Prompting]]**
- Involves [[task decomposition]], and thinking step by step
- Transforms big tasks into smaller more manageable tasks and sheds light on the interpretation of the model's thinking process.

**[[Self Consistency]]** - First prompt the [[LLM]] with [[chain-of-thought prompting]], then propose a sample and marginalize decoding procedure.
	- First, sample from the LLM's decoder to generate  a diverse set of reasoning paths.
	- Each reasoning path might lead to a different final answer.
	- Determine the optimal answer by marginalizing out the sampled reasoning paths to find the most consistent answer in the final answer set.
	- Analogous to the human experience that if multiple different ways of thinking lead to the same answer, one has greater confidence that the final answer is correct.
	- Compared to other decoding methods, self-consistency avoids the repetitiveness and local-optimality that plagues [[greedy decoding]], while mitigating the stochasticity of a single sampled generation.
	- *[[Multi-step Prompting]]*: involves providing the model with a series of related tasks that require it to reason across multiple steps. 
		- each step can be designed to test different aspect's of the model's ability to generate coherent and consistent responses.
		- e.g. asking a model to explain how a concept applies to a specific scenario, followed by questioning about the implications of this application.
			- the model would need to reason about the concept, its relevance, and the consequences of applying it to different situations.
	- *[[Contextual Prompting]]* - involves providing the model with contextual information that helps it to generate more informed and relevant responses.
		- e.g. ask a model about historical event, providing context such as the time period, and key players involved. 
			- the model would have to reason about how these factors contributed to the outcomes of the event.
	- *[[Error Tolerant Prompting]]* - this technique invokes designing prompts that intentionally contain errors or ambiguities, requiring the model to detect and correct them.

**[[Prompt Chaining]]**
- One of the most important [[prompt engineering]] techniques is to break tasks into subtasks. 
- Once those subtasks have been identified, the [[LLM]] is prompted with the subtask and then its response is used to input to another prompt.
- Consider using prompt chaining when:
	- Multi-step tasks: if your task requires multiple distinct steps, such as researching a topic, outlining an essay, writing the essay, then formatting the essay, chaining prompts can help ensure each step of the task has full focus and is executed at high level of performance.
	- Complex Instructions: when a single prompt contains too many instructions, LLM's may struggle to follow them consistently. Breaking the task into a series of chained subtasks can improve performance for each subtask.
	- Verifying Outputs: you can use chaining to ask LLM to double check its own outputs.
	- Parallel Processing: if your task has multiple independent subtasks, you can create separate prompts for each subtask and run them in parallel to save time.

**[[ReAct Prompting]]**
- [[LLMs]] are used to generate both reasoning traces and task-specific actions.
- Generating reasoning traces allow the model to induce, track, and update action plans, and even handle exceptions. The action steps allows to interface with and gather information from external sources ([[knowledge bases]] or environments).
- Best approach uses [[CoT]] and [[ReAct]] that allows use of both internal knowledge and external information obtained during reasoning.
- ReAct prompts LLMs to generate verbal reasoning traces and actions for a task.
	- This allows the system to perform dynamic reasoning to create, maintain, and adjust plans for acting while also enabling interactions to external environments.
- ReAct's structural constrains reduces its flexibility in formulating reasoning steps.
- ReAct depends on the information its retrieving; non-informative search results details the model reasoning and leads to difficulty in recovering and reformulating thoughts.

**[[Tree of Thoughts]] ([[ToT]])**
* For complex tasks that require exploration of strategic lookahead
* Framework that generalizes over [[chain of thought prompting]] and encourages exploration over thoughts that serve as intermediate steps.
* This approach enables [[LM]] to self-evaluate the progress through intermediate thoughts made towards solving a problem through a deliberate reasoning process.
* The LM's ability to generate and evaluate thoughts is then combined with [[search algorithms]] to enable systematic exploration of thoughts with lookahead and backtracking.
* LM is prompted to evaluate each thought candidate as sure/maybe/impossible

Linking Summary:
- New links added: [[Zero-shot Prompting]], [[Few-Shot Prompting]], [[Chain of Thought Prompting]], [[Self Consistency]], [[Multi-step Prompting]], [[Contextual Prompting]], [[Error Tolerant Prompting]], [[Prompt Chaining]], [[ReAct Prompting]], [[Tree of Thoughts]], [[ToT]], [[LLM]], [[Instruction tuning]], [[in-context learning]], [[task decomposition]], [[greedy decoding]], [[prompt engineering]], [[knowledge bases]], [[CoT]], [[ReAct]], [[LM]], [[search algorithms]]
- Suggested new entity notes to create: [[Zero-shot Prompting]], [[Few-Shot Prompting]], [[Chain of Thought Prompting]], [[Self Consistency]], [[Multi-step Prompting]], [[Contextual Prompting]], [[Error Tolerant Prompting]], [[Prompt Chaining]], [[ReAct Prompting]], [[Tree of Thoughts]], [[LLM]], [[Instruction tuning]], [[In-context Learning]], [[Task Decomposition]], [[Greedy Decoding]], [[Prompt Engineering]], [[Knowledge Bases]], [[Search Algorithms]]
- Strong connections to strengthen: [[Chain of Thought Prompting]] ↔ [[Self Consistency]], [[ReAct Prompting]] ↔ [[Knowledge Bases]]

