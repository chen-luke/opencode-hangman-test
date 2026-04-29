Multi-Agent UI/UX & Frontend Implementation Experiment

This project explores a high-fidelity multi-agent workflow to recreate application interfaces from design documentation and visual reference images. The experiment utilizes local Large Language Model (LLM) infrastructure to coordinate between specialized personas.
🚀 Overview

The goal of this experiment is to achieve a production-ready frontend result by separating "design reasoning" from "code execution." This prevents logic-heavy agents from making visual compromises and prevents design agents from introducing syntax errors or bloated code.
The Team

    UI/UX Lead (Primary Agent): Acts as the orchestrator. It uses vision capabilities to analyze reference images and text documents (design.md) to create a technical implementation plan. It has read-only access to the codebase to perform audits but cannot modify files directly.

    Programmer (Subagent): A specialist focused on React, Next.js, and TypeScript. It executes the technical tasks assigned by the Lead. It has full write access to the repository but operates strictly under the direction of the Lead.

🛠 Tech Stack

    Orchestration: OpenCode (Multi-agent configuration)

    Model: Qwen 3.6-27B (FP8) served via vLLM

    Hardware: Local GPU Workstation (RTX 6000 Series)

    Frontend Environment: React / TypeScript / Tailwind CSS

    Containerization: Docker & Docker Compose

🏗 Workflow Architecture

The collaboration follows a "Turn-Based Delegation" model:

    Analysis: The UI/UX Lead processes the design.md and reference images.

    Instruction: The Lead creates a component-level plan and triggers the programmer using the @programmer handle.

    Implementation: The Programmer acknowledges the plan and writes the corresponding TypeScript and CSS files.

    Verification: Control returns to the Lead, which performs a code audit. It compares the written code against the design requirements.

    Iteration: If discrepancies are found (e.g., incorrect hex codes, missing padding), the Lead issues a correction.

⚙️ Configuration

The agent logic is defined in opencode.json, ensuring strict permission boundaries:

    UI/UX Lead: permission: { "edit": "deny", "bash": "deny" }

    Programmer: Full access to /workspace/repo

Running the Experiment

    Ensure the vLLM container is running and serving the model on port 8000.

    Launch OpenCode with the provided opencode.json.

    Initialize the session with the ui-ux-lead and provide the target task:

        "Review the design.md and reference images to build the application layout."

📝 Findings & Goals

This setup aims to reduce "model drift" by keeping agents grounded in their specific domains. Future iterations of this experiment will include a Testing Agent to perform automated regression testing on the Programmer's output before the UI/UX Lead performs a visual check.
