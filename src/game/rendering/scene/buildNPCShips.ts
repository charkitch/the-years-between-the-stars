import * as THREE from 'three';
import { makeNPCShipMesh } from '../meshFactory';
import type { SolarSystemData } from '../../engine';
import { generateNPCShips } from '../../mechanics/NPCSystem';
import type { NPCShipState } from '../../mechanics/NPCSystem';
import type { SceneEntity } from './types';

export function buildNPCShips(params: {
  scene: THREE.Scene;
  entities: Map<string, SceneEntity>;
  npcShips: Map<string, NPCShipState>;
  systemObjects: THREE.Object3D[];
  data: SolarSystemData;
  systemId: number;
  galaxyYear: number;
  systemName: string;
}): void {
  const { scene, entities, npcShips, systemObjects, data, systemId, galaxyYear, systemName } = params;

  // NPC trade ships — waypoints derived from planet initial positions
  const planetIds = data.planets.map(p => p.id);
  const planetPositions = data.planets.map(p =>
    new THREE.Vector3(
      Math.cos(p.orbitPhase) * p.orbitRadius,
      0,
      Math.sin(p.orbitPhase) * p.orbitRadius,
    )
  );

  const npcData = generateNPCShips(data, systemId, galaxyYear, systemName, planetPositions, planetIds, data.mainStationPlanetId);
  for (const shipData of npcData) {
    const mesh = makeNPCShipMesh({
      archetype: shipData.archetype,
      sizeClass: shipData.sizeClass,
      seed: shipData.visualSeed,
    });
    const startPos = shipData.waypointA.clone().lerp(shipData.waypointB, shipData.t);
    mesh.position.copy(startPos);
    scene.add(mesh);
    systemObjects.push(mesh);

    entities.set(shipData.id, {
      id: shipData.id,
      name: shipData.name,
      group: mesh,
      orbitRadius: 0,
      orbitSpeed: 0,
      orbitPhase: 0,
      type: 'npc_ship',
      worldPos: startPos.clone(),
      collisionRadius: 0,
    });

    npcShips.set(shipData.id, {
      id: shipData.id,
      name: shipData.name,
      originSystemName: shipData.originSystemName,
      waypointA: shipData.waypointA,
      waypointB: shipData.waypointB,
      planetIdA: shipData.planetIdA,
      planetIdB: shipData.planetIdB,
      t: shipData.t,
      direction: shipData.direction,
      speed: shipData.speed,
      tradeRange: shipData.tradeRange,
      cargo: shipData.cargo,
      commLines: shipData.commLines,
      factionTag: shipData.factionTag,
      archetype: shipData.archetype,
      sizeClass: shipData.sizeClass,
      visualSeed: shipData.visualSeed,
    });
  }
}
