import * as THREE from 'three';
import { PALETTE } from '../constants';

/** Create hyperspace tunnel: 1000 streaks rushing toward camera */
export function createHyperspaceTunnel(scene: THREE.Scene): THREE.Points {
  const count = 1000;
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count); // Z velocity per point

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 50 + Math.random() * 400;
    positions[i * 3]     = Math.cos(angle) * radius;
    positions[i * 3 + 1] = Math.sin(angle) * radius;
    positions[i * 3 + 2] = -Math.random() * 8000;
    velocities[i] = 2000 + Math.random() * 3000;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const mat = new THREE.PointsMaterial({
    color: PALETTE.hyperspaceBright,
    size: 4,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
  });

  const points = new THREE.Points(geo, mat);
  (points as any)._velocities = velocities;
  scene.add(points);
  return points;
}

export function updateHyperspaceTunnel(points: THREE.Points, dt: number): void {
  const positions = points.geometry.attributes.position as THREE.BufferAttribute;
  const velocities: Float32Array = (points as any)._velocities;
  const arr = positions.array as Float32Array;

  for (let i = 0; i < velocities.length; i++) {
    arr[i * 3 + 2] += velocities[i] * dt;
    if (arr[i * 3 + 2] > 200) {
      arr[i * 3 + 2] = -8000;
    }
  }
  positions.needsUpdate = true;
}

/** Convergent hyperspace grid: 8 radial lanes converging to a vanishing point */
export function createHyperspaceGrid(scene: THREE.Scene): THREE.LineSegments {
  const laneCount = 8;
  // Each lane: 2 vertices × 3 coords = 6 floats
  const positions = new Float32Array(laneCount * 6);
  const r = 300;

  for (let i = 0; i < laneCount; i++) {
    const theta = (i / laneCount) * Math.PI * 2;
    const base = i * 6;
    // Start: outer radius, staggered Z so lanes don't all flash at once
    positions[base]     = Math.cos(theta) * r;
    positions[base + 1] = Math.sin(theta) * r;
    positions[base + 2] = -8000 + (i / laneCount) * 8200;
    // End: converge to vanishing point
    positions[base + 3] = 0;
    positions[base + 4] = 0;
    positions[base + 5] = 200;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const mat = new THREE.LineBasicMaterial({
    color: 0x4422CC,
    transparent: true,
    opacity: 0.8,
  });

  const grid = new THREE.LineSegments(geo, mat);
  scene.add(grid);
  return grid;
}

export function updateHyperspaceGrid(grid: THREE.LineSegments, dt: number): void {
  const positions = grid.geometry.attributes.position as THREE.BufferAttribute;
  const arr = positions.array as Float32Array;
  const laneCount = arr.length / 6;

  for (let i = 0; i < laneCount; i++) {
    arr[i * 6 + 2] += 3000 * dt;
    if (arr[i * 6 + 2] > 200) {
      arr[i * 6 + 2] = -8000;
    }
  }
  positions.needsUpdate = true;
}

/** Starfield: 2000 stars on a large sphere */
export function createStarfield(): THREE.Points {
  const count = 2000;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 40000;
    positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const mat = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    size: 2,
    sizeAttenuation: false,
  });

  return new THREE.Points(geo, mat);
}
