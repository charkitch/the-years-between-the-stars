import * as THREE from 'three';
import type { NPCShipState } from '../../mechanics/NPCSystem';
import type { SceneEntity } from './types';

const _npcCollisionVec = new THREE.Vector3();
const _npcSeparationVec = new THREE.Vector3();

export function updateOrbitalEntities(entities: Map<string, SceneEntity>, time: number): void {
  for (const [, entity] of entities) {
    if (entity.type === 'star' && entity.orbitRadius === 0) continue;
    if (entity.type === 'npc_ship' || entity.type === 'fleet_ship') continue;

    const angle = entity.orbitPhase + time * entity.orbitSpeed;

    if (entity.parentId) {
      const parent = entities.get(entity.parentId);
      if (parent) {
        entity.group.position.set(
          parent.worldPos.x + Math.cos(angle) * entity.orbitRadius,
          parent.worldPos.y,
          parent.worldPos.z + Math.sin(angle) * entity.orbitRadius,
        );
      }
    } else if (entity.type === 'dyson_shell' && entity.orbitInclination != null && entity.orbitNode != null) {
      const [x, y, z] = computeDysonShellPosition(
        angle, entity.orbitRadius, entity.orbitInclination, entity.orbitNode,
      );
      entity.group.position.set(x, y, z);
    } else {
      entity.group.position.set(
        Math.cos(angle) * entity.orbitRadius,
        0,
        Math.sin(angle) * entity.orbitRadius,
      );
    }

    entity.worldPos.copy(entity.group.position);
    if (entity.type === 'dyson_shell') {
      if (entity.orbitInclination != null && entity.orbitNode != null) {
        const sinN = Math.sin(entity.orbitNode);
        const cosN = Math.cos(entity.orbitNode);
        const sinI = Math.sin(entity.orbitInclination);
        const cosI = Math.cos(entity.orbitInclination);
        entity.group.up.set(sinN * sinI, cosI, -cosN * sinI);
      }
      entity.group.lookAt(0, 0, 0);
      entity.group.rotateY(Math.PI);
      entity.worldPos.set(0, 0, -(entity.shellCurveRadius ?? 0));
      entity.group.localToWorld(entity.worldPos);
    }
  }
}

export function updateFleetShipWorldPositions(entities: Map<string, SceneEntity>): void {
  for (const [, entity] of entities) {
    if (entity.type !== 'fleet_ship') continue;
    entity.group.getWorldPosition(entity.worldPos);
  }
}

export function rotateStations(entities: Map<string, SceneEntity>): void {
  for (const [, entity] of entities) {
    if (entity.type === 'station') {
      entity.group.rotation.z += 0.001;
    }
  }
}

export function updateNPCShips(params: {
  npcShips: Map<string, NPCShipState>;
  entities: Map<string, SceneEntity>;
  collidables: SceneEntity[];
  dt: number;
}): void {
  const { npcShips, entities, collidables, dt } = params;
  if (dt <= 0) return;

  for (const [, npcState] of npcShips) {
    const entity = entities.get(npcState.id);
    if (!entity) continue;

    const pa = entities.get(npcState.planetIdA);
    const pb = entities.get(npcState.planetIdB);
    if (pa) npcState.waypointA.copy(pa.worldPos);
    if (pb) npcState.waypointB.copy(pb.worldPos);

    const dist = npcState.waypointA.distanceTo(npcState.waypointB);
    if (dist < 1) continue;

    npcState.t += (npcState.speed * dt / dist) * npcState.direction;
    if (npcState.t >= 1) {
      npcState.t = 1;
      npcState.direction = -1;
    }
    if (npcState.t <= 0) {
      npcState.t = 0;
      npcState.direction = 1;
    }

    entity.group.position.lerpVectors(npcState.waypointA, npcState.waypointB, npcState.t);

    for (const body of collidables) {
      const diff = _npcCollisionVec.copy(entity.group.position).sub(body.worldPos);
      const bodyDist = diff.length();
      const minDist = body.collisionRadius + 10;
      if (bodyDist < minDist && bodyDist > 0.001) {
        const normal = diff.normalize();
        entity.group.position.copy(body.worldPos).addScaledVector(normal, minDist);
      }
    }

    const NPC_SEPARATION = 30;
    for (const [otherId, otherState] of npcShips) {
      if (otherId === npcState.id) continue;
      const otherEntity = entities.get(otherState.id);
      if (!otherEntity) continue;
      const diff = _npcSeparationVec.copy(entity.group.position).sub(otherEntity.worldPos);
      const sepDist = diff.length();
      if (sepDist < NPC_SEPARATION && sepDist > 0.001) {
        entity.group.position.addScaledVector(diff.normalize(), (NPC_SEPARATION - sepDist) * 0.5);
      }
    }

    entity.worldPos.copy(entity.group.position);
  }
}

function computeDysonShellPosition(
  angle: number,
  r: number,
  incl: number,
  node: number,
): [number, number, number] {
  const cosN = Math.cos(node);
  const sinN = Math.sin(node);
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);
  const cosI = Math.cos(incl);
  const sinI = Math.sin(incl);
  return [
    r * (cosN * cosA - sinN * sinA * cosI),
    r * sinA * sinI,
    r * (sinN * cosA + cosN * sinA * cosI),
  ];
}
