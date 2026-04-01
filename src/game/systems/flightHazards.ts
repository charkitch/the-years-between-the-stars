import * as THREE from 'three';
import type { FleetBattle } from '../mechanics/FleetBattleSystem';
import type { SceneEntity } from '../rendering/SceneRenderer';
import { useGameState } from '../GameState';
import type { GoodName } from '../constants';

export function checkProximityAlerts(params: {
  pos: THREE.Vector3;
  state: ReturnType<typeof useGameState.getState>;
  entities: Map<string, SceneEntity>;
  scoopingFuel: boolean;
  gasGiantScoopingFuel: boolean;
  harvestingFuel: boolean;
}): void {
  const {
    pos,
    state,
    entities,
    scoopingFuel,
    gasGiantScoopingFuel,
    harvestingFuel,
  } = params;

  if (scoopingFuel || gasGiantScoopingFuel || harvestingFuel) return;

  for (const [, entity] of entities) {
    const alertDist = entity.collisionRadius > 0
      ? entity.collisionRadius * 1.5
      : 150;
    const dist = pos.distanceTo(entity.worldPos);
    if (dist < alertDist) {
      state.setAlert(`WARNING: ${entity.type.toUpperCase()} PROXIMITY`);
      return;
    }
  }

  if (!scoopingFuel && !gasGiantScoopingFuel && state.ui.hyperspaceCountdown === 0) {
    state.setAlert(null);
  }
}

export function checkXRayStreamHazard(params: {
  pos: THREE.Vector3;
  dt: number;
  state: ReturnType<typeof useGameState.getState>;
  curve: Float32Array | null;
  hazardRadius: number;
}): void {
  const { pos, dt, state, curve, hazardRadius } = params;
  if (!curve) return;

  const pointCount = curve.length / 3;
  let minDistSq = Infinity;

  for (let i = 0; i < pointCount - 1; i++) {
    const ax = curve[i * 3];
    const ay = curve[i * 3 + 1];
    const az = curve[i * 3 + 2];
    const bx = curve[(i + 1) * 3];
    const by = curve[(i + 1) * 3 + 1];
    const bz = curve[(i + 1) * 3 + 2];
    const abx = bx - ax;
    const aby = by - ay;
    const abz = bz - az;
    const abLenSq = abx * abx + aby * aby + abz * abz;
    if (abLenSq < 1e-6) continue;
    const t = Math.max(0, Math.min(1, ((pos.x - ax) * abx + (pos.y - ay) * aby + (pos.z - az) * abz) / abLenSq));
    const dx = pos.x - (ax + t * abx);
    const dy = pos.y - (ay + t * aby);
    const dz = pos.z - (az + t * abz);
    const dSq = dx * dx + dy * dy + dz * dz;
    if (dSq < minDistSq) minDistSq = dSq;
  }

  if (minDistSq < hazardRadius * hazardRadius) {
    state.setHeat(state.player.heat + 30 * dt);
    state.setAlert('WARNING: X-RAY TRANSFER STREAM');
  }
}

export function applyBattleZoneEffects(params: {
  pos: THREE.Vector3;
  dt: number;
  state: ReturnType<typeof useGameState.getState>;
  battle: FleetBattle | null;
  battleDangerRange: number;
  combatIntelTimer: number;
  combatIntelInterval: number;
  maxCargo: number;
  combatIntelGood: GoodName;
  isDead: boolean;
  onDeath: () => void;
}): number {
  const {
    pos,
    dt,
    state,
    battle,
    battleDangerRange,
    combatIntelTimer,
    combatIntelInterval,
    maxCargo,
    combatIntelGood,
    isDead,
    onDeath,
  } = params;

  if (!battle) {
    return 0;
  }

  const dist = pos.distanceTo(battle.position);
  if (dist >= battle.noGoRadius) {
    return 0;
  }

  let nextTimer = combatIntelTimer;
  let cargoUsed = Object.values(state.player.cargo).reduce((sum, qty) => sum + (qty ?? 0), 0);

  let gatheringIntel = false;
  if (cargoUsed < maxCargo) {
    nextTimer += dt;
    while (nextTimer >= combatIntelInterval && cargoUsed < maxCargo) {
      state.addCargo(combatIntelGood, 1, 0);
      nextTimer -= combatIntelInterval;
      cargoUsed++;
    }
    gatheringIntel = cargoUsed < maxCargo;
  } else {
    nextTimer = 0;
  }

  if (dist < battleDangerRange) {
    state.setShields(state.player.shields - 20 * dt);
    state.setHeat(state.player.heat + 25 * dt);
    state.setAlert('TAKING FIRE — COMBAT ZONE');
    if (state.player.shields <= 0 && !isDead) {
      onDeath();
    }
  } else {
    state.setAlert(gatheringIntel ? 'COLLECTING COMBAT INTELLIGENCE' : 'WARNING: ACTIVE COMBAT ZONE');
  }

  if (cargoUsed >= maxCargo) {
    return 0;
  }
  return nextTimer;
}
