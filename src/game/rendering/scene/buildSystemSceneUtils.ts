import * as THREE from 'three';
import type { StationArchetype } from '../../archetypes';

export const PLANET_COLLISION_SCALE = 1.04;
export const GALAXY_SEED = 0x5AFEF00D;
export const STARFIELD_POS_SCALE = (Math.PI / 2) / 100;
export const STARFIELD_YEAR_SCALE = 0.0002;

export function hashString32(input: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

export function stationSpinAxisForArchetype(archetype: string | null | undefined): THREE.Vector3 {
  // Match spin axis to each model's dominant ring/hub orientation.
  if (archetype === 'refinery_spindle') return new THREE.Vector3(0, 1, 0);
  return new THREE.Vector3(0, 0, 1);
}

export function createTidallyBulgedDonorMesh(radius: number, color: number): THREE.Mesh {
  const geometry = new THREE.SphereGeometry(radius, 24, 16);
  const positions = geometry.attributes.position;
  const bulgeStrength = radius * 0.14;
  const sideCompression = 0.09;

  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i);
    const y = positions.getY(i);
    const z = positions.getZ(i);
    const nx = x / radius;

    // Local +X points toward the accretor via per-frame tidal orientation.
    const towardAccretor = Math.max(0, nx);
    const displacedX = x + bulgeStrength * towardAccretor * towardAccretor;
    const displacedY = y * (1 - sideCompression * towardAccretor);
    const displacedZ = z * (1 - sideCompression * towardAccretor);
    const displacedR = Math.sqrt(displacedX * displacedX + displacedY * displacedY + displacedZ * displacedZ);
    const scale = radius / Math.max(displacedR, 1e-4);

    positions.setXYZ(i, displacedX * scale, displacedY * scale, displacedZ * scale);
  }

  positions.needsUpdate = true;
  geometry.computeVertexNormals();
  return new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color }));
}

export function computeDysonCollisionSamples(
  curveRadius: number,
  arcWidth: number,
  arcHeight: number,
): { local: THREE.Vector3[]; sampleRadius: number } {
  const phiHalf = THREE.MathUtils.clamp(arcWidth / curveRadius, 0.55, 1.6) * 0.5;
  const thetaHalf = THREE.MathUtils.clamp(arcHeight / curveRadius, 0.22, 0.72) * 0.5;
  const alpha = phiHalf * 0.9;
  const beta = thetaHalf * 0.9;
  const samples: Array<[number, number]> = [
    [0, 0],
    [-alpha, 0],
    [alpha, 0],
    [0, -beta],
    [0, beta],
    [-alpha * 0.68, -beta * 0.68],
    [alpha * 0.68, -beta * 0.68],
    [-alpha * 0.68, beta * 0.68],
    [alpha * 0.68, beta * 0.68],
  ];
  const local = samples.map(([a, b]) => {
    const cosA = Math.cos(a);
    const sinA = Math.sin(a);
    const cosB = Math.cos(b);
    const sinB = Math.sin(b);
    return new THREE.Vector3(
      curveRadius * cosA * cosB,
      curveRadius * sinB,
      curveRadius * sinA * cosB,
    );
  });

  const sampleRadius = Math.max(70, Math.max(arcWidth, arcHeight) * 0.18);
  return { local, sampleRadius };
}

export function computeStationCollisionSamples(
  archetype: StationArchetype,
  size: number,
): { local: THREE.Vector3[]; sampleRadius: number } | null {
  let ringRadius = 0;
  let tubeRadius = 0;
  let sampleRadius = 0;
  let rotateX = 0;

  switch (archetype) {
    case 'trade_hub':
      ringRadius = size;
      tubeRadius = size * 0.18;
      sampleRadius = size * 0.08;
      break;
    case 'refinery_spindle':
      ringRadius = size * 0.75;
      tubeRadius = size * 0.08;
      sampleRadius = size * 0.07;
      rotateX = Math.PI * 0.5;
      break;
    case 'alien_orrery_reliquary':
      ringRadius = size * 1.15;
      tubeRadius = size * 0.06;
      sampleRadius = size * 0.055;
      rotateX = Math.PI * 0.5;
      break;
    default:
      return null;
  }

  const sampleCount = 32;
  const local: THREE.Vector3[] = [];
  for (let i = 0; i < sampleCount; i++) {
    const a = (i / sampleCount) * Math.PI * 2;
    const p = new THREE.Vector3(Math.cos(a) * ringRadius, Math.sin(a) * ringRadius, 0);
    if (rotateX !== 0) p.applyAxisAngle(new THREE.Vector3(1, 0, 0), rotateX);
    local.push(p);
  }

  // Add connector arm samples so spokes/trusses are also lethal.
  if (archetype === 'trade_hub') {
    const armCount = 6;
    const armLength = size * 0.74;
    const spokeRadius = size * 0.58;
    const rMin = Math.max(size * 0.16, spokeRadius - armLength * 0.5);
    const rMax = Math.min(ringRadius, spokeRadius + armLength * 0.5);
    const spokeSteps = 5;
    for (let i = 0; i < armCount; i++) {
      const a = (i / armCount) * Math.PI * 2;
      const ca = Math.cos(a);
      const sa = Math.sin(a);
      for (let j = 0; j < spokeSteps; j++) {
        const t = j / (spokeSteps - 1);
        const r = rMin + (rMax - rMin) * t;
        local.push(new THREE.Vector3(ca * r, sa * r, 0));
      }
    }
  } else if (archetype === 'refinery_spindle') {
    const armCount = 6;
    const armLength = size * 0.62;
    const armRadius = size * 0.36;
    const rMin = Math.max(size * 0.12, armRadius - armLength * 0.5);
    const rMax = Math.min(ringRadius, armRadius + armLength * 0.5);
    const trussSteps = 5;
    for (let i = 0; i < armCount; i++) {
      const a = (i / armCount) * Math.PI * 2;
      const ca = Math.cos(a);
      const sa = Math.sin(a);
      for (let j = 0; j < trussSteps; j++) {
        const t = j / (trussSteps - 1);
        const r = rMin + (rMax - rMin) * t;
        local.push(new THREE.Vector3(ca * r, 0, sa * r));
      }
    }
  }

  return {
    local,
    sampleRadius: Math.min(tubeRadius, sampleRadius),
  };
}

export function disableFogForObject(root: THREE.Object3D): void {
  root.traverse(obj => {
    const meshLike = obj as THREE.Mesh | THREE.Sprite | THREE.Points | THREE.Line;
    const mat = meshLike.material;
    if (!mat) return;

    const materials = Array.isArray(mat) ? mat : [mat];
    for (const material of materials) {
      if ('fog' in material && (material as { fog?: boolean }).fog !== false) {
        (material as { fog?: boolean }).fog = false;
        material.needsUpdate = true;
      }
    }
  });
}
