# Time in Transit — Rust/WASM Engine

The game engine for *Time in Transit*, compiled to WebAssembly. Owns all procedural generation, galaxy simulation, event narrative, faction/civilization mechanics, and market pricing.

## Why Rust/WASM?

1. **Spoiler protection** — Event narrative text is compiled into the WASM binary. Unlike JS strings that survive minification, WASM bytecode is genuinely opaque. Only the current event's text crosses the boundary to JS.
2. **Galaxy simulation** — The galaxy evolves non-deterministically while the player is in hyperspace. Different jump orders produce genuinely different galaxies.
3. **Portability** — The same Rust code could later run server-side (in Docker) for multiplayer or shared galaxy state, without rewriting any game logic.

## Building

```bash
# Development build (faster, unoptimized, ~600KB)
wasm-pack build --target web --out-dir pkg --dev

# Release build (optimized + wasm-opt, ~234KB)
wasm-pack build --target web --out-dir pkg

# Run tests (native, not WASM)
cargo test
```

Or from the project root:

```bash
npm run wasm:build        # release
npm run wasm:build:dev    # dev
```

Output lands in `pkg/` — this is gitignored and consumed by Vite via `vite-plugin-wasm`.

## Module Structure

```
src/
├── lib.rs                 # WASM entry points (#[wasm_bindgen])
├── prng.rs                # Mulberry32 PRNG (identical output to TS version)
├── types.rs               # All enums, structs, constants (serde Serialize/Deserialize)
├── cluster_generator.rs   # 30-system galaxy generation
├── system_generator.rs    # Solar systems: planets, moons, rings, asteroid belts, secret bases
├── civilization.rs        # Politics & economy per era (70% cluster continuity)
├── factions.rs            # 6 factions, control scoring, contestation logic
├── trading.rs             # Market prices with economy/politics/player modifiers
├── events.rs              # 21 landing events (narrative compiled into binary)
└── simulation.rs          # Galaxy simulation: stability, prosperity, faction strength
```

## WASM API

All functions accept and return JSON strings. The TypeScript bridge (`src/game/engine.ts`) provides typed wrappers.

### `init_game(player_state_json: string) -> string`

Called once at game start or load. Returns `InitResult`:
- `cluster` — all 30 star systems (positions, names, star types)
- `cluster_summary` — current politics, factions, economy for each system
- `system_payload` — full detail for the starting system

Pass an empty string for a new game, or a JSON-serialized `PlayerState` to resume a save.

### `jump_to_system(target_system_id: u32, player_state_json: string) -> string`

The primary game call — one call per hyperspace jump. Returns `JumpResult`:
1. Calculates years elapsed from jump distance
2. **Simulates the galaxy forward** for those years (factions, stability, prosperity shift)
3. Player choices feed into simulation as inputs
4. Returns the destination `SystemPayload` + updated `ClusterSummary`

### `get_system_market(system_id: u32, player_state_json: string) -> string`

Returns `Vec<MarketEntry>` — current market prices for a system, incorporating era, politics, economy modifiers, and player reputation/choices.

### `get_landing_event(system_id: u32, player_state_json: string, secret_base_id: string) -> string`

Returns `Option<LandingEvent>` — selects a landing event filtered by politics, galaxy year, faction tags, and previously completed events. Pass empty string for `secret_base_id` for main station events.

### `get_cluster_summary(galaxy_year: u32) -> string`

Returns `Vec<ClusterSystemSummary>` — lightweight state of all 30 systems at a given galaxy year.

## Galaxy Simulation

The simulation runs during `jump_to_system()` in 50-year steps. For each system, each step:

- **Stability** shifts based on: faction contestation (-0.08 if contested), political type (democracies stabilize, anarchists destabilize), random events (3% catastrophe, 5% golden age), and player actions (rebel allies destabilize, gov allies stabilize, trade reputation helps).
- **Prosperity** shifts based on: economy type (high tech grows, poor agricultural shrinks), stability feedback, player trade activity (recent visits boost prosperity), and random noise.
- **Faction strength** shifts based on: who controls the system, political affinity alignment, player faction tags (corp_ally boosts corporate factions, etc.), and random noise.

All values are clamped to [0.0, 1.0]. Two players who jump in different orders will see genuinely different galaxies.

## Event System

21 events across 4 categories:

| Category | Count | Triggered at |
|---|---|---|
| Landing events | 10 | Main station docking |
| Asteroid base events | 5 | Asteroid belt secret bases |
| Oort cloud events | 3 | Oort cloud secret bases |
| Maximum space events | 3 | Edge-of-system void stations |

Events filter by: current politics, minimum galaxy year, required faction tag, and previously completed events in that system. Each event has 2-3 choices with effects on credits, fuel, reputation, prices, and faction alignment.

## Determinism

All generation (clusters, systems, names, planets) is seeded from `CLUSTER_SEED = 0xDEADBEEF` using Mulberry32 PRNG. The same seed always produces the same galaxy. The simulation layer adds non-determinism through player actions — your choices make your galaxy unique.

## Tests

23 unit tests covering all modules:

```bash
cargo test
```

Tests verify: PRNG determinism and bounds, cluster generation (30 systems, minimum distance), system generation (planets exist, deterministic), civilization (politics, economy, banned goods), factions (6 factions, deterministic control), trading (all goods, positive prices, sell < buy), events (counts, selection, politics filtering), and simulation (year advancement, bounded values, player influence).
