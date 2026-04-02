---
name: modify-events
description: Guide for finding and modifying landing events, narrative events, or system entry text in The Years Between the Stars. Use this skill whenever the user wants to add, change, or fix any kind of game event — landing encounters, event choices, event outcomes, faction-specific events, era-gated events, or the system entry narration text. Always invoke this when the user says things like "add a new event", "change what happens when you land", "add a choice to an event", "the event text is wrong", or any mention of events/encounters/narrative.
---

## What "events" means in this codebase

There are two types of narrative events:

1. **Landing events** — encounters that appear when the player docks at a station. These have text, choices, and mechanical effects (money, reputation, cargo).
2. **System entry text** — the narration lines that appear when jumping into a system (including era-transition lines).

---

## Landing Events

### Where events are defined

**`engine/src/events.rs`** — the primary file. This is where all event scenarios live. Each event is a struct with:
- A narrative description
- A list of choices (each with text and effects)
- Conditions (era, faction alignment, player stats)

Common things to do here:
- Add a new event: create a new function returning a `LandingEvent`
- Change event text: edit the `description` or choice `text` fields
- Change effects: modify the `effect` on a choice (credits, reputation, cargo)
- Add conditions: gate events on `faction`, `era`, `prosperity`, or `political_type`

**`engine/src/lib.rs`** — event selection logic. The functions `select_event()` and `select_secret_base_event()` decide which event to show based on civilization state. Edit here to:
- Change how often an event appears (weight adjustments)
- Gate events on new conditions
- Add a new event type to the selection pool

### Where events are displayed

**`src/ui/LandingDialog/LandingDialog.tsx`** — renders the event narrative and choice buttons. Edit here to:
- Change the visual layout of events
- Add new UI elements (icons, portraits, extra info)
- Handle new choice effect types

**`src/game/GameState.ts`** — holds `pendingLandingEvent` and processes player choices. Touch this when:
- Adding new effect types that need new state fields
- Changing how choices are stored or cleared

**`src/game/Game.ts`** — calls into the engine to fetch landing events when docking. Touch this when:
- Changing when events trigger (docking conditions)
- Passing new context to the event selector

---

## System Entry Text

**`src/ui/HUD/SystemEntryText.tsx`** — renders the staggered lines that appear on system entry. This is also where era-transition narration is displayed ("Centuries have passed...").

**`src/game/Game.ts`** — the function `buildSystemEntryText()` assembles the lines shown on entry. Edit here to:
- Add new entry text categories
- Change era-crossing narration
- Include new info in the entry summary

---

## Typical workflows

**Add a new landing event:**
1. Open `engine/src/events.rs` — write a new function returning a `LandingEvent`
2. Open `engine/src/lib.rs` — add it to the selection pool in `select_event()`
3. Rebuild WASM: `cd engine && wasm-pack build --target web --out-dir ../src/wasm`

**Change event display layout:**
1. Only need `src/ui/LandingDialog/LandingDialog.tsx`

**Change era-transition narration:**
1. Only need `src/game/Game.ts` — find `buildSystemEntryText()`

**Add a new choice effect type:**
1. `engine/src/types.rs` — add to `ChoiceEffect` enum
2. `engine/src/events.rs` — use the new effect in events
3. `src/game/Game.ts` or `GameState.ts` — handle the new effect client-side
4. Rebuild WASM
