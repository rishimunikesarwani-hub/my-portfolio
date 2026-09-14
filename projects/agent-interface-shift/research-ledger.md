# Research ledger: The Future of UI Is Designing It for Observability

**Status:** Research-backed perspective, 13 September 2026. Product claims are separated from vendor evidence; vendor case-study metrics are not treated as market-wide results.

## Core thesis

Enterprise software is moving from screen-first navigation toward goal-first interaction. The agent is not the new system of record. It is a governed layer that translates intent into authorized searches, transactions, and workflow steps across systems of record.

## Claim ledger

| Claim used in the article | Evidence boundary | Primary source |
|---|---|---|
| Google ADK is an open framework for agents and can connect to enterprise systems through MCP, APIs, connectors, and integration workflows. | Documented product capability; not a claim that every Google service is automatically available. | [Google Cloud: Vertex AI multi-system agents](https://cloud.google.com/blog/products/ai-machine-learning/build-and-manage-multi-system-agents-with-vertex-ai) |
| Google describes a grounded agentic workflow as an agent interface, an automation/connectivity layer, and a system of record. | Google architecture example; used as an explanatory model. | [Google Cloud: employee onboarding with Gemini Enterprise](https://cloud.google.com/blog/topics/developers-practitioners/how-to-build-onboarding-agents-with-gemini-enterprise) |
| Elastic Agent Builder combines agents, skills and tools over Elasticsearch data, and exposes agents through UI, API, MCP, or A2A. | Documented Elastic product capability; availability depends on deployment/subscription. | [Elastic Agent Builder documentation](https://www.elastic.co/docs/explore-analyze/ai-features/elastic-agent-builder) |

## Terms used precisely

- **System of record:** The authoritative application that owns a transaction or data object, such as a CRM, ERP, ITSM tool, or database.
- **Context layer:** A governed assembly of identity, permissions, relevant data, policies, interaction state, and approved tools. It is not merely a vector database or a dump of company documents.
- **Agent interface:** A goal-oriented surface where a person expresses an outcome and the system plans and executes approved steps. It needs a visible audit and an exception route.
- **Observability UI:** A surface that makes an agent's understanding, evidence, tool activity, changes, failure state, and escalation path inspectable by the person accountable for the outcome.

## Editorial decisions

- Do not say that BPOs or UIs are being "replaced." The article argues that UI is changing from navigation toward observability.
- Do not describe ADK as a one-click route to all Google services. Integration is an engineering, identity, and permission design problem.
- Keep the distinction between a fluent agent and an observable operational system visible throughout.
