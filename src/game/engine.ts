/**
 * engine.ts — TypeScript bridge to the Rust/WASM game engine.
 *
 * Provides typed wrappers around the raw WASM JSON boundary.
 * All game logic (generation, simulation, events, trading) lives in Rust.
 * JS is responsible for rendering, flight physics, and UI.
 */

import initWasm, {
  init_game,
  jump_to_system,
  get_system_market,
  get_landing_event,
  get_cluster_summary,
} from '../../engine/pkg/time_in_transit_engine';

import type { GoodName, EconomyType, PoliticalType } from './constants';

// ─── Types matching Rust serde output ───────────────────────────────────────

export interface StarSystemData {
  id: number;
  name: string;
  x: number;
  y: number;
  star_type: 'G' | 'K' | 'M' | 'F' | 'A';
  economy: EconomyType;
  tech_level: number;
  population: number;
}

export interface MoonData {
  id: string;
  surface_type: string;
  radius: number;
  orbit_radius: number;
  orbit_speed: number;
  orbit_phase: number;
  color: number;
}

export interface PlanetData {
  id: string;
  name: string;
  type: 'rocky' | 'gas_giant';
  surface_type: string;
  gas_type: string;
  radius: number;
  orbit_radius: number;
  orbit_speed: number;
  orbit_phase: number;
  color: number;
  has_rings: boolean;
  ring_count: number;
  ring_inclination: number;
  moons: MoonData[];
  has_station: boolean;
}

export interface AsteroidBeltData {
  inner_radius: number;
  outer_radius: number;
  count: number;
}

export interface SecretBaseData {
  id: string;
  name: string;
  type: 'asteroid' | 'oort_cloud' | 'maximum_space';
  orbit_radius: number;
  orbit_phase: number;
  orbit_speed: number;
}

export interface SolarSystemData {
  star_type: string;
  star_radius: number;
  planets: PlanetData[];
  asteroid_belt: AsteroidBeltData | null;
  main_station_planet_id: string;
  secret_bases: SecretBaseData[];
}

export interface CivilizationState {
  system_id: number;
  galaxy_year: number;
  era: number;
  politics: PoliticalType;
  economy: EconomyType;
  banned_goods: GoodName[];
  price_modifier: number;
  luxury_mod: number;
  anarchy_variance: boolean;
  tech_bonus: GoodName[];
}

export interface SystemFactionState {
  controlling_faction_id: string;
  contesting_faction_id: string | null;
  is_contested: boolean;
}

export interface MarketEntry {
  good: GoodName;
  buy_price: number;
  sell_price: number;
  stock: number;
  banned: boolean;
}

export interface ChoiceEffect {
  trading_reputation: number;
  banned_goods: GoodName[];
  price_modifier: number;
  faction_tag: string | null;
  credits_reward: number;
  fuel_reward: number;
}

export interface EventChoice {
  id: string;
  label: string;
  description: string;
  effect: ChoiceEffect;
  requires_min_tech: number | null;
  requires_credits: number | null;
}

export interface LandingEvent {
  id: string;
  title: string;
  narrative_lines: [string, string, string];
  choices: EventChoice[];
  applicable_politics: PoliticalType[] | null;
  min_galaxy_year: number | null;
  required_faction_tag: string | null;
}

export interface ClusterSystemSummary {
  id: number;
  name: string;
  x: number;
  y: number;
  star_type: string;
  politics: PoliticalType;
  economy: EconomyType;
  controlling_faction_id: string;
  contesting_faction_id: string | null;
  is_contested: boolean;
  tech_level: number;
  population: number;
}

export interface SystemPayload {
  system: SolarSystemData;
  civ_state: CivilizationState;
  faction_state: SystemFactionState;
  market: MarketEntry[];
  landing_event: LandingEvent | null;
  system_entry_lines: string[];
}

export interface JumpResult {
  system_payload: SystemPayload;
  cluster_summary: ClusterSystemSummary[];
  years_elapsed: number;
  new_galaxy_year: number;
}

export interface InitResult {
  system_payload: SystemPayload;
  cluster_summary: ClusterSystemSummary[];
  cluster: StarSystemData[];
}

// ─── Player state for WASM boundary ────────────────────────────────────────

export interface WasmPlayerState {
  credits: number;
  cargo: Record<string, number>;
  cargo_cost_basis: Record<string, number>;
  fuel: number;
  shields: number;
  current_system_id: number;
  visited_systems: number[];
  galaxy_year: number;
  player_choices: Record<number, {
    trading_reputation: number;
    banned_goods: GoodName[];
    price_modifier: number;
    faction_tag: string | null;
    completed_event_ids: string[];
  }>;
  last_visit_year: Record<number, number>;
  known_factions: string[];
  faction_memory: Record<number, {
    faction_id: string;
    contesting_faction_id: string | null;
    galaxy_year: number;
  }>;
}

// ─── Engine API ─────────────────────────────────────────────────────────────

let initialized = false;

export async function initEngine(): Promise<void> {
  if (initialized) return;
  await initWasm();
  initialized = true;
}

export function engineInitGame(playerState?: WasmPlayerState): InitResult {
  const json = playerState ? JSON.stringify(playerState) : '';
  const result = init_game(json);
  return JSON.parse(result);
}

export function engineJumpToSystem(
  targetSystemId: number,
  playerState: WasmPlayerState,
): JumpResult {
  const result = jump_to_system(targetSystemId, JSON.stringify(playerState));
  return JSON.parse(result);
}

export function engineGetMarket(
  systemId: number,
  playerState: WasmPlayerState,
): MarketEntry[] {
  const result = get_system_market(systemId, JSON.stringify(playerState));
  return JSON.parse(result);
}

export function engineGetLandingEvent(
  systemId: number,
  playerState: WasmPlayerState,
  secretBaseId?: string,
): LandingEvent | null {
  const result = get_landing_event(
    systemId,
    JSON.stringify(playerState),
    secretBaseId ?? '',
  );
  return JSON.parse(result);
}

export function engineGetClusterSummary(galaxyYear: number): ClusterSystemSummary[] {
  const result = get_cluster_summary(galaxyYear);
  return JSON.parse(result);
}
