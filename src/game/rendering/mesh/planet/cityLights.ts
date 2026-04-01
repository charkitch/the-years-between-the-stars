import * as THREE from 'three';
import type { SurfaceType } from '../../../engine';
import { GLSL_NOISE, SURFACE_TYPE_INDEX } from './shared';

export function addCityLights(
  group: THREE.Group, radius: number, seed: number,
  surfaceType: SurfaceType = 'continental',
): void {
  // Atmospherically hostile or obviously barren worlds should stay dark.
  if (surfaceType === 'venus' || surfaceType === 'barren' || surfaceType === 'ice' || surfaceType === 'volcanic') return;

  const geo = new THREE.SphereGeometry(radius * 1.005, 32, 24);

  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      seed: { value: seed },
      surfType: { value: SURFACE_TYPE_INDEX[surfaceType] },
    },
    vertexShader: `
      varying vec3 vWorldNormal;
      varying vec3 vWorldPosition;
      varying vec3 vLocalPos;
      void main() {
        vLocalPos = position;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragmentShader: `
      ${GLSL_NOISE}
      varying vec3 vWorldNormal;
      varying vec3 vWorldPosition;
      varying vec3 vLocalPos;
      uniform float seed;
      uniform int surfType;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7)) + seed) * 43758.5453);
      }

      void main() {
        vec3 toStar = normalize(-vWorldPosition);
        float sunDot = dot(vWorldNormal, toStar);

        // Only visible on dark side
        float darkMask = smoothstep(0.0, -0.2, sunDot);

        // Same continent noise as the planet surface — cities only on land
        vec3 noisePos = normalize(vLocalPos) * 2.0
          + vec3(seed * 13.37, seed * 7.13, seed * 3.71);
        float n = fbm(noisePos);

        // Land mask matches planet surface type thresholds
        float landMask;
        if (surfType == 1) {
          // Ocean world — only tiny islands
          landMask = smoothstep(0.25, 0.4, n);
        } else if (surfType == 2) {
          // Marsh — most land is soggy but buildable
          landMask = smoothstep(-0.15, 0.1, n);
        } else if (surfType == 5) {
          // Desert — sparser buildable pockets
          landMask = smoothstep(-0.05, 0.2, n) * 0.45;
        } else if (surfType == 8) {
          // Forest moon — sparse settlements beneath dense canopy
          landMask = smoothstep(-0.1, 0.12, n) * 0.35;
        } else {
          // Continental
          landMask = smoothstep(-0.05, 0.15, n);
        }

        // Denser city grid — tighter cells, more dots per cluster
        vec3 norm = normalize(vLocalPos);
        float theta = atan(norm.z, norm.x);
        float phi = acos(clamp(norm.y, -1.0, 1.0));
        vec2 gridUv = vec2(theta * 35.0, phi * 20.0);
        vec2 cell = floor(gridUv);
        vec2 local = fract(gridUv) - 0.5;

        float h = hash(cell);
        float city = 0.0;

        // Tight cluster of 3-5 dots per populated cell
        if (h > 0.4) {
          // Core city
          vec2 o1 = vec2(hash(cell + 1.0) - 0.5, hash(cell + 2.0) - 0.5) * 0.25;
          city += smoothstep(0.10, 0.01, length(local - o1));

          // Inner sprawl — always present in populated cells
          vec2 o2 = o1 + vec2(hash(cell + 3.0) - 0.5, hash(cell + 4.0) - 0.5) * 0.15;
          city += smoothstep(0.07, 0.005, length(local - o2)) * 0.8;

          vec2 o3 = o1 + vec2(hash(cell + 5.0) - 0.5, hash(cell + 6.0) - 0.5) * 0.18;
          city += smoothstep(0.06, 0.005, length(local - o3)) * 0.6;

          if (h > 0.55) {
            // Outer suburbs
            vec2 o4 = o1 + vec2(hash(cell + 7.0) - 0.5, hash(cell + 8.0) - 0.5) * 0.2;
            city += smoothstep(0.05, 0.005, length(local - o4)) * 0.5;

            vec2 o5 = o1 + vec2(hash(cell + 9.0) - 0.5, hash(cell + 10.0) - 0.5) * 0.22;
            city += smoothstep(0.04, 0.005, length(local - o5)) * 0.4;
          }
        }

        city = min(city, 1.0);
        float alpha = darkMask * landMask * city * 0.9;
        vec3 color = mix(vec3(1.0, 0.82, 0.4), vec3(1.0, 0.95, 0.7), h);

        gl_FragColor = vec4(color, alpha);
      }
    `,
  });

  group.add(new THREE.Mesh(geo, mat));
}

