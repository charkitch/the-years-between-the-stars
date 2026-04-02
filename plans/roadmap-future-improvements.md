# Roadmap: Future Improvements & Architectural Evolution

## 1. High-Performance Flight Physics (Rust/WASM)
*   **Goal:** Move physics and NPC AI to the Rust engine without the "serialization bottleneck."
*   **Strategy:** Implement a **Shared Memory (Zero-Copy)** approach.
    *   **Input:** Send a small bitmask of player keys/mouse delta once per frame to Rust.
    *   **Processing:** Rust handles all physics (player + NPCs + collisions) in a single high-speed call.
    *   **Output:** Expose the memory address of the physics state. TypeScript reads positions/rotations directly from the `wasm.memory.buffer` using a `Float32Array` view.
*   **Benefit:** Enables large-scale fleet battles (100+ ships) and complex NPC AI while keeping the UI/input thread fluid.

## 2. Advanced Galaxy Simulation (Live Evolution)
*   **Goal:** Make the "years between the stars" feel alive and consequential.
*   **Expansion:** Build out `engine/src/simulation.rs` to include:
    *   **Dynamic Faction Wars:** Systems change hands based on fleet strength and player influence.
    *   **Economic Cycles:** Booms and crashes that ripple through the cluster.
    *   **Strategic Time Dilation (Plan A):** Implement "Temporal Contracts" where delivery deadlines are in galaxy-years, not local minutes.
*   Strategic Depth: Use time as a resource—information travels at light speed, so a "boom" you heard about 50 light-years ago might be a "bust" by the time you arrive.

## 3. Data-Driven Rendering Pipeline
*   **Goal:** Improve performance as visual complexity (Dyson shells, asteroid belts) increases.
*   **Optimizations:**
    *   **InstancedMesh:** Use Three.js `InstancedMesh` for large-scale objects like asteroid fields or debris clouds.
    *   **Uniform Management:** Move shader-heavy logic (e.g., Dyson shell lighting/weather) to more efficient uniform buffers to reduce CPU-to-GPU overhead.
*   Visual Fidelity: Enhanced post-processing for relativistic effects (Lorentz contraction, Doppler shift) at high speeds.

## 4. Narrative & Event Authoring Workflow
*   **Goal:** Scale to 100+ unique events while maintaining "spoiler protection."
*   **Workflow:**
    *   **Structured Source:** Author events in YAML or JSON for ease of writing.
    *   **Build-Time Compilation:** A custom script compiles these into a static Rust data structure (or a binary blob) inside the WASM file.
    *   **Decryption-on-Demand:** Only the text for the *current* event is ever decrypted and sent to the client.

## 5. Reputation & Political Depth (Plan C)
*   **Goal:** Transition factions from "decorative tags" to active gameplay influencers.
*   **Mechanics:**
    *   **Gated Content:** Certain stations or secret bases only accessible with high reputation.
    *   **Economic Impact:** Significant price modifiers and "illegal good" lists that shift based on your standing with the ruling faction.
    *   **Consequence:** High-reputation players get "wingman" support in battles; low-reputation players face "shakedowns" and bounty hunters.
