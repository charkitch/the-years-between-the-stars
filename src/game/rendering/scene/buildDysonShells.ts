import * as THREE from 'three';
import {
  makeDysonShellSegment, addDysonWeatherLayer, makeDysonMiniStar, addDysonCityLights,
} from '../meshFactory';
import type { SolarSystemData } from '../../engine';
import { PRNG } from '../../generation/prng';
import type { SceneEntity } from './types';
import { LandingSiteManager } from './LandingSiteManager';
import { computeDysonCollisionSamples } from './buildSystemSceneUtils';
import type { DysonShellMaterialEntry } from './tickSceneAnimations';

export function buildDysonShells(params: {
  scene: THREE.Scene;
  entities: Map<string, SceneEntity>;
  systemObjects: THREE.Object3D[];
  dysonShellMaterials: DysonShellMaterialEntry[];
  landingSites: LandingSiteManager;
  data: SolarSystemData;
  rng: PRNG;
}): void {
  const { scene, entities, systemObjects, dysonShellMaterials, landingSites, data, rng } = params;

  for (const shell of data.dysonShells) {
    const shellSeed = rng.next() * 100;
    const { group: shellGroup, material: shellMat } = makeDysonShellSegment(
      shell.curveRadius,
      shell.arcWidth,
      shell.arcHeight,
      shell.color,
      shell.starPhase,
      shellSeed,
      shell.biomeProfile,
      shell.biomeSeed,
      shell.interactionField,
    );
    const miniStar = makeDysonMiniStar(shell.starPhase, shell.curveRadius * 0.035);
    shellGroup.add(miniStar);
    const shellWeather = addDysonWeatherLayer(
      shellGroup,
      shell.curveRadius,
      shell.arcWidth,
      shell.arcHeight,
      shellSeed,
      shell.starPhase,
      shell.weatherBands,
    );
    const shellCityLights = addDysonCityLights(
      shellGroup,
      shell.curveRadius,
      shell.arcWidth,
      shell.arcHeight,
      shellSeed,
      shell.starPhase,
    );
    dysonShellMaterials.push({ shellMat, weatherMat: shellWeather, cityMat: shellCityLights, miniStar });
    shellGroup.userData.interactionMode = shell.interactionMode;

    const a = shell.orbitPhase;
    const r = shell.orbitRadius;
    const incl = shell.orbitInclination;
    const node = shell.orbitNode;
    const cosN = Math.cos(node), sinN = Math.sin(node);
    const cosA = Math.cos(a), sinA = Math.sin(a);
    const cosI = Math.cos(incl), sinI = Math.sin(incl);
    shellGroup.position.set(
      r * (cosN * cosA - sinN * sinA * cosI),
      r * sinA * sinI,
      r * (sinN * cosA + cosN * sinA * cosI),
    );
    // Orient: patch is at +X in SphereGeometry(phi=PI). Set +X away from star
    // so the concave interior (at -X from sphere center) faces the star.
    const xAxis = shellGroup.position.clone().normalize(); // away from star
    const orbNormal = new THREE.Vector3(sinN * sinI, cosI, -cosN * sinI);
    const zAxis = new THREE.Vector3().crossVectors(xAxis, orbNormal).normalize();
    const yAxis = new THREE.Vector3().crossVectors(zAxis, xAxis);
    const basis = new THREE.Matrix4().makeBasis(xAxis, yAxis, zAxis);
    shellGroup.quaternion.setFromRotationMatrix(basis);
    scene.add(shellGroup);
    systemObjects.push(shellGroup);

    const collision = computeDysonCollisionSamples(shell.curveRadius, shell.arcWidth, shell.arcHeight);

    entities.set(shell.id, {
      id: shell.id,
      name: shell.name,
      group: shellGroup,
      orbitRadius: shell.orbitRadius,
      orbitSpeed: shell.orbitSpeed,
      orbitPhase: shell.orbitPhase,
      orbitInclination: shell.orbitInclination,
      orbitNode: shell.orbitNode,
      shellCurveRadius: shell.curveRadius,
      shellArcWidth: shell.arcWidth,
      shellArcHeight: shell.arcHeight,
      type: 'dyson_shell',
      worldPos: new THREE.Vector3(),
      collisionRadius: collision.sampleRadius,
      collisionSampleRadius: collision.sampleRadius,
      collisionSamplesLocal: collision.local,
      collisionSamplesWorld: collision.local.map(() => new THREE.Vector3()),
    });
    landingSites.addDysonSites({
      hostId: shell.id,
      hostLabel: shell.name,
      hostGroup: shellGroup,
      curveRadius: shell.curveRadius,
      arcWidth: shell.arcWidth,
      arcHeight: shell.arcHeight,
      field: shell.interactionField,
    });
  }
}
