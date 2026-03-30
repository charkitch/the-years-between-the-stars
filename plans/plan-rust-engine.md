# Plan: Rust/WASM Game Engine — Events & Galaxy Simulation

## Context
The game is currently 100% client-side TypeScript. We want to:
1. Add many more events (scaling from 23 to 100+) without spoiling narrative for players
2. Move game logic into Rust/WASM for real encryption, portability, and a proper simulation engine
3. Make the galaxy **live** — systems evolve non-deterministically while the player is in transit

## Architecture: The Boundary

**One primary WASM call per hyperspace jump:**
```rust
fn jump_to_system(system_id: u32, player_state: &PlayerState) -> JumpResult
```

This call:
1. Calculates years elapsed from jump distance
2. **Simulates the galaxy forward** for those years (factions, politics, economy, wars, collapses)
3. Player choices feed into simulation as inputs
4. Returns **JumpResult** containing:
   - **SystemPayload**: full detail for destination (star, planets, orbits, moons, belts, NPCs, market prices, secret bases, the current landing event already decrypted)
   - **ClusterSummary**: updated state of all 30 systems (name, politics, economy, faction control, notable changes) — reflects the galaxy that *lived* while you traveled

**Also needed:**
- `init_game(seed, save_data?) -> ClusterSummary + initial SystemPayload` — game start / load

**JS stays responsible for:**
- Three.js rendering
- React UI (HUD, dialogs, maps, trading)
- Flight physics (60fps, no WASM boundary crossing)
- Input handling
- Docking / local interactions within a system

**Rust owns:**
- All procedural generation (clusters, systems, names)
- Event storage, selection, and decryption (text compiled into WASM binary = real spoiler protection)
- Galaxy simulation (the big new thing)
- Civilization / faction / economy state
- Market price calculation
- Save/load serialization

## Spoiler Protection
Event narrative text lives inside the compiled WASM binary. Unlike JS strings which survive minification, WASM bytecode is genuinely opaque. Only the *current* event's decrypted text crosses the boundary to JS. No XOR tricks needed — the compilation IS the encryption.

## Galaxy Simulation (the "years between the stars")
- Non-deterministic evolution: factions grow/shrink, politics shift via coups/revolutions, economies boom/crash
- Player actions ripple: your faction alignments, trade patterns, and event choices influence outcomes
- Two players with different jump orders see genuinely different galaxies
- Simulation design needs fleshing out (what changes, how factions interact, what player actions matter)

## Open Questions
- **Flight physics**: Keep in JS (simpler, no per-frame WASM calls) vs move to Rust (single source of truth)?
- **Migration approach**: Scaffold + port incrementally (PRNG → generation → events → simulation) vs design the simulation model fully first?
- **Event authoring format**: JSON files? YAML? Rust structs directly? Need a workflow for writing 100+ events
- **NPC interactions / comms**: Do these also come from Rust in the system payload, or stay JS-side?

## Key Files (current TS, to be ported)
- `src/game/data/events.ts` — 23 events, selection logic, interfaces
- `src/game/generation/prng.ts` — Mulberry32 PRNG
- `src/game/generation/ClusterGenerator.ts` — 30-system galaxy
- `src/game/generation/SystemGenerator.ts` — solar system generation
- `src/game/mechanics/CivilizationSystem.ts` — politics/economy per era
- `src/game/mechanics/FactionSystem.ts` — 6 factions, control
- `src/game/mechanics/TradingSystem.ts` — market prices
- `src/game/Game.ts` — main loop, will become the JS-side consumer of WASM
- `src/game/GameState.ts` — Zustand store, will hold payloads from Rust
