# [[Prompt Exa - Contents]]

Title: Structured Active Inference (Extended Abstract)
URL: https://arxiv.org/abs/2406.07577
ID: https://arxiv.org/abs/2406.07577
Score: 0.1460861712694168
Published Date: 2024-06-07
Author: Smithe; Toby St Clere
Text:
Highlights: None
Highlight Scores: None


Title: [[Multi-Agent Systems (MAS)|Multi-Agent System]]
URL: https://dev.to/akkiprime/multi-agent-system-4d95
ID: https://dev.to/akkiprime/multi-agent-system-4d95
Score: 0.14419116079807281
Published Date: 2024-06-03
Author: Akshat Jain
Text: All of us have heard about the [[Mixture-of-Experts (MoE)]] architecture for [[Large Language Models (LLMs)|LLMs]]. MoE divides models into separate sub-networks (or “experts”), each specializing in a subset of the input data, to jointly perform a task. A mixture of Expert architectures enables large-scale models, even those comprising many billions of parameters, to greatly reduce computation costs during pre-training and achieve faster performance during inference time. Broadly speaking, it achieves this efficiency through selectively activating only the specific experts needed for a given task, rather than activating the entire neural network for every task.
What if we adopt the principles of MoE on the agent level? Agents, like LLMs, become hard to scale as we add multiple responsibilities to them. This simple yet ground-breaking insight led us to develop the world’s first [[Multi-Agent Systems (MAS)|Multi-Agent System (MAS)]] which is also deployed in production. But we dive deeper, let’s start with the basics of [[Single-Agent Architecture]] and how it can be extended to MAS.

Agent – The fundamental building block

An agent, in the context of [[Large Language Models (LLMs)]], is a system that uses an LLM as the fundamental computational component to construct a [[Planning|plan]] with appropriate [[Reasoning|reasoning]] to tackle any challenge using the [[Agent Tools|tools]] and resources at its disposal. It is similar to a human, who, given a problem, will devise a strategy and solve the problem utilizing the tools required to tackle the problem. The LLM acts similarly to the human brain in the Agent. For any given task, one will not solve it as such. The ideal way is to break it down into one or more smaller tasks that can be done sequentially or independently to solve the task. An agent will also do the same thing. The LLM will plan out the way it intends to solve the task. To accomplish any of the intermediate steps, the plan usually calls for the use of one or more tools available to the agent. Apart from the LLM and the tools the agent will also have other components for its proper intended functioning.
Broadly, there are three main components of an agent:

1. A [[Prompt Engineering|prompt]]
2. [[Agent Memory|Memory]] for the Agent
3. The [[Agent Tools|Tools]]

The prompt will define the way the system is going to behave and work. It will define the set of goals the agent must achieve, while also having the constraints it must follow to achieve these goals. Think of the prompt as the blueprint for our multi-agent system. It’s like the master plan that outlines what each agent needs to achieve and how they should go about doing it. Without this guidance, agents would lack direction and might wander aimlessly. So, the prompt essentially serves as the compass that keeps our system on course, ensuring that all agents are working towards common objectives within a defined framework. This prompt is also the major bottleneck in increasing the complexity of a single agent. To build complex systems, we divide the responsibilities between multiple agents so that the prompt of every agent remains simple.
[[Agent Memory|Memory]] is the backbone of our LLM agents. It acts like their personal archive of knowledge and experiences. Similar to how humans draw from past experiences to make decisions, LLM agents utilize their memory to understand context, learn from past interactions, and make informed choices. Memory can simply be just passing the [[Conversation History|conversation history]] back to the LLM, or it can even be passing the extracted [[Semantic Information|semantic information]] from the conversation and giving it to the LLM.
[[Agent Tools|Tools]] are the Swiss Army knives of our agents, providing them with specialized capabilities to tackle various tasks effectively. These tools can be [[API|APIs]], executable functions, or other services that help agents finish their tasks.
Now that we have understood the basic components of an Agent, let’s see how these components work together in a single-agent system.

Single-Agent System

A [[Single-Agent Architecture|single-agent system]] consists of one particular AI agent that is equipped with multiple tools at its disposal to achieve any given problem. These systems are designed to handle tasks autonomously, leveraging the combined capabilities of the tools along with the reasoning capability of the LLM. The agent will devise a step-by-step plan that is to be followed to achieve the user goal. Once the plan is formulated, the agent will use the required tools to complete each of the available steps. Once each steps are completed, the outputs that were achieved at each stage can be clubbed together to get the final output.
There are different ways a particular user goal can be achieved. The plan that the LLMs will come up with depends on the availability of tools, its overall goal, and the constraints that it has to follow. The prompt, that controls the behavior of the agent should be therefore crafted in such a way that it works in the way we want it to work, and will be utilizing the resources efficiently to achieve the goals.
Architecture:

Why are Single-Agent Systems still relevant?

There are a few advantages to going with a Single-Agent system architecture. Firstly, simplicity, with just one agent handling all tasks, the system becomes easier to design, implement, and manage. The overhead of organizing communication between multiple agents will not be there.
Single-agent systems often boast greater coherence and consistency in decision-making. With a single agent in control, there’s no possibility of conflicting goals or actions among multiple agents. This can result in more predictable and stable behavior, making it easier to understand and debug the system.
Single-agent systems are typically more suitable for tasks that don’t require complex coordination. In fields and areas where centralized decision-making is required, a single-agent system will be quite efficient and will perform well in achieving the user goal.

Limitations of Single-Agent System

Single agents are often designed with a narrow focus, which can limit their ability to handle tasks outside their immediate domain. This limitation can pose challenges in environments where tasks are diverse or rapidly changing. Their narrow focus can hinder their ability to handle tasks beyond their immediate domain.
[[Scalability|Scaling]] a single agent for more extensive or varied tasks often requires substantial redesign. When faced with the need to handle a broader range of tasks or increased complexity, simply adding more capabilities to a single agent may not be sufficient. Furthermore, scaling a single agent may introduce performance bottlenecks or efficiency issues.
Single-agent systems are also limited by memory constraints and processing capabilities. Since all tasks and responsibilities are concentrated within a single agent, it must contend with the finite resources available to it, including memory and processing power.

The shift towards Multi-Agent System Architecture

The exploration of Single-Agent Systems has highlighted significant limitations, particularly in handling complex, dynamic tasks and scalability issues. This sets the stage for the introduction of [[Multi-Agent Systems (MAS)]], which offer a robust framework capable of overcoming these challenges. In MAS, architecture, there are multiple independent agents who all work together to solve complex tasks.
In MAS, individual agents have their own responsibilities, characterized by their prompts and tools. Unlike single-agent systems, where one agent is responsible for all tasks, MAS allows for specialization and collaboration among several agents. This approach not only enhances efficiency but also improves the system’s ability to handle more complex and varied tasks.
Adding more agents to the system can extend its capabilities without the need for significant redesign. When faced with increasing demands or expanding task domains, incorporating additional agents offers a scalable solution that can accommodate growth seamlessly. Unlike single-agent systems, where scaling often requires substantial modifications to the existing architecture, multi-agent systems can adapt more readily to changing requirements by simply adding new agents with specialized capabilities. The [[Redundancy]] inherent in multi-agent systems provides built-in [[Fault Tolerance|fault tolerance]] and resilience. If one or more agents malfunction, the system can still perform the right intended work as the rest of the agents would come to a mutual agreement.
Architecture:

Concept and Structure of Multi-Agent Systems

Multi-Agent system consist of multiple intelligent agents, each capable of performing tasks autonomously but designed to work collaboratively toward a common goal. The structure of MAS allows for [[Distributed Problem Solving|distributed problem-solving]] and decision-making, which significantly enhances the system’s overall efficiency and effectiveness. Each agent in a MAS can specialize in different tasks or aspects of a problem, bringing a diverse set of skills and perspectives to the table. Unlike single-agent systems, control in MAS is distributed among multiple agents, which reduces bottlenecks and single points of failure. Agents in a MAS can communicate and coordinate with each other, sharing information and decisions to optimize outcomes. The system is inherently [[Modularity|modular]], allowing for the addition, removal, or modification of agents without disrupting the entire system.

Agent to Agent Communication Protocol (AACP)

In a [[Multi-Agent Systems (MAS)|Multi-Agent system]], the [[Agent-to-Agent Communication Protocol (AACP)]] is designed to facilitate structured and efficient communication among agents, pivotal for achieving consensus and addressing complex problems collaboratively. This protocol is instrumental in enhancing the overall system performance by leveraging the diverse insights and capabilities of individual agents, each characterized by a unique persona responding to system prompts.
The AACP adopts a dual-faceted communication architecture:

Hierarchical Communication Flow: This structure allows for the dissemination of information across different levels of the system hierarchy, enabling superior agents to coordinate and direct the actions of subordinate agents efficiently.
Lateral Communication: Agents situated at the same hierarchical level possess the capability to engage in direct communication. This feature is essential for collaborative problem-solving and task execution, facilitating rapid information exchange and coordination among peers.

The reconfigurability of the communication flow, tailored to the specific requirements of the task at hand, underscores the flexibility and adaptiveness of the AACP.

Analysis of single and multi-agent systems

When comparing single-agent and multi-agent systems, several key differences emerge:

Scalability: MAS are inherently more scalable than single-agent systems due to their distributed nature. They can handle more complex tasks by dividing the workload among multiple agents.
Robustness and Reliability: Multi-agent systems are generally more robust and reliable. The failure of one agent does not cripple the system, and others can take over or redistribute the tasks.
Flexibility and Adaptability: MAS can adapt to changes in the environment or task requirements more effectively. They can reconfigure themselves, with agents taking on new roles as needed.

Two Design Choices for MAS

In this section, we will highlight two possible design patterns for MAS. But before we delve into the differences between these two patterns, let’s highlight their commonalities. The core premise of MAS is that the observation from the environment will be passed to multiple experts and different experts will recommend different actions. Then there will be an aggregation layer where these recommendations will analyzed and some of them will be approved. Now the two flavors discussed below differ on just one parameter – do we consult all the experts or do we selectively invoke relevant experts only?

[[Routing-Based MAS|Routing-Based Multi-Agent System]]

In a routing-based MAS, the orchestration acts as a routing layer. Depending on the message sent by the user, it will decide the agents it needs to invoke. The invoked agents will interact among themselves regarding the message and will decide on what is the best action to take and communicate it effectively to the user. By routing, the orchestrator will be solely responsible for identifying the right agents and communicating the same to the user. The main drawback of this is that the routing layer will tend to become the single point of failure. If the router decides not to invoke an agent that is required, or if it invokes some other agent that is not needed, there might be discrepancies in the communication to the user.

[[Broadcast-Based MAS|Broadcast-Based Multi-Agent System]]

The Broadcast-Based MAS architecture represents a generalized evolution of the Routing-Based MAS, effectively eliminating the Routing Layer that acts as a potential single point of failure. In instances where the Routing Layer mismanages the user query, the system’s integrity may be compromised. To enhance robustness and circumvent this vulnerability, the Routing Layer is omitted, permitting the free dissemination of information to all corresponding agents in unison. This way all the agents will get the input, and they will decide whether or not to give their output for the aggregation. This way it will ensure that there is no communication mishap between any of the agents.

Why do we believe the Multi-Agent System is a fundamental breakthrough?

The collaborative nature of multi-agent systems brings several benefits, especially in complex and dynamic environments

Enhanced Problem-Solving Capabilities: By leveraging the diverse capabilities of various agents, MAS can tackle complex problems more effectively than single-agent systems.
Increased Efficiency: Collaboration among agents often leads to more efficient use of resources, as tasks are allocated based on the specialization of each agent.
[[Resilience]] to Uncertainty and Change: Multi-agent systems are better equipped to handle uncertainty and changes in the environment, as they can quickly reorganize and adapt.

Besides, the above-mentioned benefits, Multi-Agents systems have a strong resemblance to systems that have stood the test of time. For example, the hierarchal organizational structure that powers some of the largest organizations in the world is a lot similar to multi-agent systems. Even the human body is a composition of multiple organ systems. These resemblances instill our confidence in that MAS is going to be an enduring concept in the evolution journey of agents.
Highlights: None
Highlight Scores: None


Title: WebSuite: Systematically Evaluating Why Web Agents Fail
URL: https://arxiv.org/abs/2406.01623
ID: https://arxiv.org/abs/2406.01623
Score: 0.139629527926445
Published Date: 2024-06-01
Author: Li; Eric; Waldo; Jim
Text:
Highlights: None
Highlight Scores: None


Title: Primitive Agentic First-Order Optimization
URL: https://arxiv.org/abs/2406.04841
ID: https://arxiv.org/abs/2406.04841
Score: 0.13845741748809814
Published Date: 2024-06-07
Author: Sala; R
Text:
Highlights: None
Highlight Scores: None


Title: Husky: A Unified, Open-Source Language Agent for Multi-Step Reasoning
URL: https://arxiv.org/abs/2406.06469
ID: https://arxiv.org/abs/2406.06469
Score: 0.1369510143995285
Published Date: 2024-06-10
Author: Kim; Joongwon; Paranjape; Bhargavi; Khot; Tushar; Hajishirzi; Hannaneh
Text:
Highlights: None
Highlight Scores: None


Title: CAAP: Context-Aware Action Planning Prompting to Solve Computer Tasks with Front-End UI Only
URL: https://arxiv.org/abs/2406.06947
ID: https://arxiv.org/abs/2406.06947
Score: 0.1368013322353363
Published Date: 2024-06-11
Author: Cho; Junhee; Kim; Jihoon; Bae; Daseul; Jinho; Gwon; Youngjune; Kwon; Yeong-Dae
Text:
Highlights: None
Highlight Scores: None


Title: The Rise of AI Agent Infrastructure
URL: https://www.madrona.com/the-rise-of-ai-agent-infrastructure/
ID: https://www.madrona.com/the-rise-of-ai-agent-infrastructure/
Score: 0.13593997061252594
Published Date: 2024-06-05
Author: Coral Garnick
Text: An explosion of GenAI apps is plain to see, with applications for productivity, development, cloud infrastructure management, media consumption, and even healthcare revenue cycle management. That explosion is made possible by rapidly improving models and the underlying platform infrastructure our industry has built over the past 24 months, which simplified hosting, fine-tuning, data loading, and memory — and made it easier to build apps. As a result, the eyes of many founders and investors have turned north to the top of the stack, where we can finally start to put our most advanced technologies to work for end-users. But the blistering pace of GenAI development means few assumptions hold true for long. Apps are now being built in a new way that will impose new requirements on the underlying infrastructure. Those developers are speeding across a half-finished bridge. Their apps won’t achieve their full potential if our industry fails to support them lower in the stack with a new set of AI agent Infrastructure components. The Rise of Agents One key change is the rise of AI agents: autonomous actors that can plan and execute multi-step tasks. Today, AI agents — not direct prompts to the underlying model — are becoming a common interface that end-users encounter and even becoming a core abstraction that developers build upon. This is further accelerating how fast new apps can be built and is creating a new set of opportunities at the platform layer. Starting with projects like MRKL in 2022 and ReAct, BabyAGI, and AutoGPT in 2023, developers started to find that chains of prompt and response could decompose large tasks into smaller ones (planning) and execute them autonomously. Frameworks like LangChain, LlamaIndex, Semantic Kernel, Griptape, and more showed that the agents could interact with APIs via code, and research papers like Toolformer and Gorilla showed that the underlying models could learn to use APIs effectively. Research from Microsoft, Stanford, and ... [truncated]
Highlights: None
Highlight Scores: None


Title: Learning to Play Atari in a World of Tokens
URL: https://arxiv.org/abs/2406.01361
ID: https://arxiv.org/abs/2406.01361
Score: 0.13271328806877136
Published Date: 2024-06-03
Author: Agarwal; Pranav; Andrews; Sheldon; Kahou; Samira Ebrahimi
Text:
Highlights: None
Highlight Scores: None


Title: Introduction to autonomous agents from a developer perspective – Part one
URL: https://www.datasciencecentral.com/introduction-to-autonomous-agents-from-a-developer-perspective-part-one/
ID: https://www.datasciencecentral.com/introduction-to-autonomous-agents-from-a-developer-perspective-part-one/
Score: 0.12885789573192596
Published Date: 2024-06-02
Author: Ajitjaokar
Text: What are autonomous AI agents?
Autonomous AI agents are systems capable of performing tasks without human intervention.
Agents have been around in various incarnations. Most recently, an element of autonomy was achieved by [[Reinforcement Learning (RL)]]. However, it is still hard to deploy RL beyond virtual environments and games. Autonomous AI agents (called agents henceforth in this document) are more complex. They are designed to [[Perception|perceive their environment]], make decisions based on their perceptions and pre-programmed knowledge, and execute actions to achieve specific goals. Agents are also based on [[Large Language Models (LLMs)|LLMs]] which make them more efficient.
In various forms, conventional AI agents (predating the LLM-based autonomous agents) are already used in some capacity. For example in [[Self-Driving Cars|self-driving cars]], [[Robotics|robotics]], Virtual assistants like Alexa, Autonomous drones, or in algorithmic trading.
 However, the real potential of agents as we discuss here, lies in their capacity to solve problems at a higher level of abstraction. In simple terms, if you want to book a holiday to Greece, then the AI is able to split the high-level task into subtasks and autonomously execute these tasks to create an overall solution. It is this capability of autonomous AI agents to execute a high-level task that makes agent technology significant.
In this blog post series, we explore autonomous agents from the perspective of a developer.
Workflow of autonomous agents
Autonomous agents involve a series of steps

Sensing and [[Perception]] where the agent gathers data from its environment using various sensors. The raw sensor data is preprocessed to eliminate noise and extract relevant features.
Based on the sensing, the agent constructs a model of its environment, which could be a physical map for a robot or a conceptual map for a software agent. It also determines the context, including its own state in the environment
The agent identifies its objectives based on predefined goals or learned behaviors. The agent then develops a [[Planning|plan]] to achieve its goals which includes evaluating different actions to evaluate their effectiveness in achieving the goal.
The agent chooses and performs the best action based on its decision-making process.
The agent gathers feedback from the environment about the results of its actions, which could be immediate sensor data or delayed outcomes.
The agent updates its models and decision-making processes based on the feedback, which might involve updating machine learning models or refining rules.
The agent may need to communicate with other agents or humans, which could involve sending data, reporting status, or coordinating actions.

From a developer’s perspective, creating and deploying an autonomous AI agent involves a series of systematic steps, encompassing design, development, testing, and deployment.
Here is a general workflow for deploying agents:

Problem Definition and Requirements Gathering
Design
Data Collection and Preparation
Model Development
Integration and System Development
Implementation of Learning and Adaptation
Testing and Validation
Deployment
User Interaction and Feedback (if applicable)
Iteration and Improvement

But this flow hides the complexity of agent development
[[Andrew Ng]] describes the four design patterns of agentic workflows as [[Agent Reflection|Reflection]], [[Agent Tools|Tool use]], [[Planning]] and [[Multi-agent Collaboration]].
We can expand on these four design patterns as follows:
 1. [[Agent Reflection|Reflection]]: Reflection refers to the ability of an AI agent to think about its own thinking process. This includes evaluating its actions, learning from experiences, and adapting its strategies based on past performance. Reflection enables agents to improve over time, make better decisions, and avoid repeating mistakes.
Key Aspects of reflection include: Self-Monitoring: The agent monitors its own performance and processes.; Learning from Experience: Using techniques like reinforcement learning, the agent learns from feedback received from its actions and Adaptive Behavior: The agent modifies its strategies and behaviors based on past outcomes and new information.
 Examples of reflection include: Autonomous Vehicles that Continuously analyse driving decisions and update the driving model based on new data and Game Playing Agents that evaluate past games to improve strategies and decision-making in future games.
 2. [[Agent Tools|Tool Use]]: Tool Use involves AI agents leveraging external tools or resources to achieve their goals. The agent can use [[API|APIs]], databases, and other software tools to obtain information or perform actions; The agent delegates specific tasks to specialized tools, focusing its own processing power on decision-making and coordination; Seamlessly integrating external tools into the agent’s workflow to enhance functionality.
Examples include [[Robotic Process Automation (RPA)]].
 3. [[Planning]]: Planning refers to the ability of an AI agent to formulate a sequence of actions to achieve a specific goal. Planning involves anticipating future states, considering various actions and their outcomes, and selecting the optimal sequence to reach the desired objective.
Key aspects of planning include Goal Setting – Defining clear objectives for the agent to achieve; Action Sequencing – Developing a series of steps that lead from the current state to the goal state; Contingency Handling – Planning for alternative actions in case of unexpected changes or failures.
Examples include [[Robotics]] – An autonomous robot planning a path to navigate through an environment while avoiding obstacles; .Supply Chain Management: Planning logistics and [[Inventory Management]] to ensure timely delivery of goods.
 4. [[Multi-agent Collaboration]]
[[Multi-agent Collaboration]] involves multiple AI agents working together to achieve a common goal. This pattern is crucial in scenarios where tasks are too complex or large for a single agent to handle. Collaboration requires communication, coordination, and sometimes negotiation among agents.
Key Aspects include: Communication: Agents exchange information to align their actions and strategies; Coordination: Agents synchronize their actions to avoid conflicts and ensure efficient task execution.; Negotiation: In some cases, agents need to negotiate to resolve conflicts or distribute resources.
Examples of multiagent collaboration include: Swarm [[Robotics]]: Multiple robots collaborating to perform tasks like search and rescue, environmental monitoring, or construction. Distributed Computing: Multiple AI systems working together to solve large-scale computational problems, such as data analysis or simulations.
In the next section, we will discuss implications for developers
Highlights: None
Highlight Scores: None


Title: From Words to Worlds: Transforming One-line Prompt into Immersive Multi-modal Digital Stories with Communicative LLM Agent
URL: https://arxiv.org/abs/2406.10478
ID: https://arxiv.org/abs/2406.10478
Score: 0.12871690094470978
Published Date: 2024-06-15
Author: Sohn; Samuel S; Li; Danrui; Zhang; Sen; Chang; Che-Jui; Kapadia; Mubbasir
Text:
Highlights: None
Highlight Scores: None

### Connections
- Source of concepts for [[AI Agents and Multi-Agent Systems (MAS)]] and [[Plan-Execute Agentic Design Pattern]].

### Linking Summary
- New links added: [[Multi-Agent Systems (MAS)]], [[Mixture-of-Experts (MoE)]], [[Large Language Models (LLMs)]], [[Single-Agent Architecture]], [[Planning]], [[Reasoning]], [[Agent Tools]], [[Prompt Engineering]], [[Agent Memory]], [[Conversation History]], [[Semantic Information]], [[API]], [[Scalability]], [[Redundancy]], [[Fault Tolerance]], [[Modularity]], [[Agent-to-Agent Communication Protocol (AACP)]], [[Hierarchical Communication]], [[Lateral Communication]], [[Robustness]], [[Reliability]], [[Flexibility]], [[Adaptability]], [[Routing-Based MAS]], [[Broadcast-Based MAS]], [[Resilience]], [[Reinforcement Learning (RL)]], [[Perception]], [[Self-Driving Cars]], [[Robotics]], [[Andrew Ng]], [[Agent Reflection]], [[Multi-agent Collaboration]], [[Robotic Process Automation (RPA)]], [[Supply Chain Management]], [[Inventory Management]].
- Suggested new entity notes to create: [[Mixture-of-Experts (MoE)]], [[Single-Agent Architecture]], [[Agent Memory]], [[Agent Tools]], [[Agent-to-Agent Communication Protocol (AACP)]], [[Reinforcement Learning (RL)]], [[Robotic Process Automation (RPA)]].
- Strong connections to strengthen: [[Prompt Exa - Contents]] ↔ [[AI Agents and Multi-Agent Systems (MAS)]], [[Prompt Exa - Contents]] ↔ [[Plan-Execute Agentic Design Pattern]].
