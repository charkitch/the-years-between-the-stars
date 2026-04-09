import * as THREE from 'three';
import type { SceneRenderer } from '../rendering/SceneRenderer';
import { useGameState } from '../GameState';
import {
  FUEL_HARVEST,
  GAS_GIANT_SCOOP,
  COMBAT_INTELLIGENCE_GOOD,
  RELATIVISTIC_ASH_GOOD,
  PULSAR_SILK_GOOD,
  STAR_ATTRIBUTES,
  MAX_CARGO,
} from '../constants';
import { BATTLE_DANGER_RANGE } from './FleetBattleSystem';
import {
  applyBattleZoneEffects,
  checkBlackHoleHazard,
  checkMicroquasarJetHazard,
  checkPulsarBeamHazard,
  checkProximityAlerts,
  checkXRayStreamHazard,
} from '../systems/flightHazards';
import type { SecretBaseType } from '../engine';

const XB_STREAM_HAZARD_RADIUS = 40;
const COMBAT_INTEL_INTERVAL = 8;
const BEAM_HARVEST_INTERVAL = 5;

export class FlightHazardSystem {
  private scoopingFuel = false;
  private gasGiantScoopingFuel = false;
  private harvestingFuel = false;
  combatIntelTimer = 0;
  private jetHarvestTimer = 0;
  private pulsarHarvestTimer = 0;

  constructor(private sceneRenderer: SceneRenderer) {}

  /** Returns true if the ship died from overheat this tick. */
  tick(
    dt: number,
    state: ReturnType<typeof useGameState.getState>,
    pos: THREE.Vector3,
    isDead: boolean,
    onDeath: (msg: string[]) => void,
  ): boolean {
    // Fuel scooping near star
    const starEntity = this.sceneRenderer.getAllEntities().get('star');
    const starPos = starEntity?.worldPos ?? null;
    const starType = state.currentSystem?.starType;
    const starAttrs = starType ? STAR_ATTRIBUTES[starType] : null;
    let coolingAllowed = true;
    if (starPos && starEntity) {
      if (starAttrs?.stellarEffects) {
        const distToStar = pos.distanceTo(starPos);
        const scoopRange = starEntity.collisionRadius + 200;
        if (distToStar < scoopRange) {
          const scoopRate = 0.3 * dt;
          state.setFuel(state.player.fuel + scoopRate);
          state.setHeat(state.player.heat + 15 * dt);
          this.scoopingFuel = true;
          this.gasGiantScoopingFuel = false;
          state.setAlert('FUEL SCOOPING');
          coolingAllowed = false;
        } else {
          if (this.scoopingFuel) {
            this.scoopingFuel = false;
            state.setAlert(null);
          }
        }
      } else if (this.scoopingFuel) {
        this.scoopingFuel = false;
      }

      // Overheat damage (death check deferred until after hazard-specific checks)
      if (state.player.heat >= 100) {
        state.setShields(state.player.shields - 20 * dt);
        state.setAlert('OVERHEAT!');
      }
    }

    // Fuel scooping from gas giants
    if (!this.scoopingFuel) {
      const planets = state.currentSystem?.planets ?? [];
      let scoopingGasGiant = false;
      for (const planet of planets) {
        if (planet.type !== 'gas_giant') continue;
        const entity = this.sceneRenderer.getAllEntities().get(planet.id);
        if (!entity) continue;
        const dist = pos.distanceTo(entity.worldPos);
        const scoopRange = entity.collisionRadius + GAS_GIANT_SCOOP.rangePadding;
        if (dist < scoopRange) {
          state.setFuel(state.player.fuel + GAS_GIANT_SCOOP.rate * dt);
          state.setHeat(state.player.heat + GAS_GIANT_SCOOP.heatRate * dt);
          state.setAlert(GAS_GIANT_SCOOP.alert);
          scoopingGasGiant = true;
          coolingAllowed = false;
          break;
        }
      }
      if (this.gasGiantScoopingFuel && !scoopingGasGiant) {
        state.setAlert(null);
      }
      this.gasGiantScoopingFuel = scoopingGasGiant;
    } else {
      this.gasGiantScoopingFuel = false;
    }

    if (coolingAllowed && state.player.heat > 0) {
      state.setHeat(state.player.heat - 10 * dt);
    }

    // Fuel harvesting near outer solar bases
    if (!this.scoopingFuel && !this.gasGiantScoopingFuel) {
      const bases = state.currentSystem?.secretBases ?? [];
      let harvesting = false;
      for (const base of bases) {
        const entity = this.sceneRenderer.getAllEntities().get(base.id);
        if (!entity) continue;
        const dist = pos.distanceTo(entity.worldPos);
        if (dist < FUEL_HARVEST.range) {
          const baseType = base.type as SecretBaseType;
          const rate = FUEL_HARVEST.rates[baseType] * dt;
          state.setFuel(state.player.fuel + rate);
          state.setAlert(FUEL_HARVEST.alerts[baseType]);
          harvesting = true;
          break;
        }
      }
      if (this.harvestingFuel && !harvesting) {
        this.harvestingFuel = false;
        state.setAlert(null);
      }
      this.harvestingFuel = harvesting;
    }

    // Passive shield regen when cool
    if (state.player.heat < 50 && state.player.shields < 100 && !isDead) {
      state.setShields(state.player.shields + 5 * dt);
    }

    checkProximityAlerts({
      pos,
      state,
      entities: this.sceneRenderer.getAllEntities(),
      scoopingFuel: this.scoopingFuel,
      gasGiantScoopingFuel: this.gasGiantScoopingFuel,
      harvestingFuel: this.harvestingFuel,
    });

    this.combatIntelTimer = applyBattleZoneEffects({
      pos,
      dt,
      state,
      battle: this.sceneRenderer.getFleetBattle(),
      battleDangerRange: BATTLE_DANGER_RANGE,
      combatIntelTimer: this.combatIntelTimer,
      combatIntelInterval: COMBAT_INTEL_INTERVAL,
      maxCargo: MAX_CARGO,
      combatIntelGood: COMBAT_INTELLIGENCE_GOOD,
      isDead,
      onDeath: (msg: string[]) => onDeath(msg),
    });

    checkXRayStreamHazard({
      pos,
      dt,
      state,
      curve: this.sceneRenderer.getXRayStreamCurveBuffer(),
      hazardRadius: XB_STREAM_HAZARD_RADIUS,
    });

    const mqJet = this.sceneRenderer.getMicroquasarJetParams();
    if (mqJet) {
      const mqStarEntity = this.sceneRenderer.getAllEntities().get(mqJet.starEntityId);
      const jetResult = checkMicroquasarJetHazard({
        pos,
        dt,
        state,
        jetParams: mqJet,
        starWorldPos: mqStarEntity?.worldPos ?? null,
        isDead,
        onDeath: (msg: string[]) => onDeath(msg),
      });
      if (jetResult === 'scooping') {
        state.setFuel(state.player.fuel + 1.5 * dt);
        const cargoUsed = Object.values(state.player.cargo).reduce((sum, qty) => sum + (qty ?? 0), 0);
        if (cargoUsed < MAX_CARGO) {
          this.jetHarvestTimer += dt;
          if (this.jetHarvestTimer >= BEAM_HARVEST_INTERVAL) {
            state.addCargo(RELATIVISTIC_ASH_GOOD, 1, 0);
            this.jetHarvestTimer -= BEAM_HARVEST_INTERVAL;
            state.setAlert('HARVESTING RELATIVISTIC ASH');
          }
        }
      } else {
        this.jetHarvestTimer = 0;
      }
    }

    const pulsarBeam = this.sceneRenderer.getPulsarBeamParams();
    if (pulsarBeam) {
      const pulsarStarEntity = this.sceneRenderer.getAllEntities().get(pulsarBeam.starEntityId);
      const pulsarResult = checkPulsarBeamHazard({
        pos,
        dt,
        state,
        beamParams: pulsarBeam,
        starWorldPos: pulsarStarEntity?.worldPos ?? null,
        starRadius: pulsarStarEntity?.collisionRadius ?? 0,
        isDead,
        onDeath: (msg: string[]) => onDeath(msg),
      });
      if (pulsarResult === 'harvesting') {
        const cargoUsed = Object.values(state.player.cargo).reduce((sum, qty) => sum + (qty ?? 0), 0);
        if (cargoUsed < MAX_CARGO) {
          this.pulsarHarvestTimer += dt;
          if (this.pulsarHarvestTimer >= BEAM_HARVEST_INTERVAL) {
            state.addCargo(PULSAR_SILK_GOOD, 1, 0);
            this.pulsarHarvestTimer -= BEAM_HARVEST_INTERVAL;
            state.setAlert('HARVESTING PULSAR SILK');
          }
        }
      } else {
        this.pulsarHarvestTimer = 0;
      }
    }

    if (starType === 'BH' || starType === 'MQ') {
      const bhStarEntity = this.sceneRenderer.getAllEntities().get('star');
      checkBlackHoleHazard({
        pos,
        dt,
        state,
        starWorldPos: bhStarEntity?.worldPos ?? null,
        starRadius: bhStarEntity?.collisionRadius ?? 0,
        isDead,
        onDeath: (msg: string[]) => onDeath(msg),
      });
    }

    // Overheat death — checked after hazards so hazard-specific messages take priority
    if (state.player.heat >= 100 && state.player.shields <= 0 && !isDead) {
      onDeath(['THERMAL FAILURE', 'Reactor overheat destroyed primary systems.', 'Emergency coolant exhausted.']);
      return true;
    }

    return false;
  }

  resetTimers(): void {
    this.combatIntelTimer = 0;
    this.jetHarvestTimer = 0;
    this.pulsarHarvestTimer = 0;
  }
}
