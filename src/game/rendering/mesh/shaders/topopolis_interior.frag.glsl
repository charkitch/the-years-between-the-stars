#include includes/noise.glsl
#include includes/planet_varyings.glsl
#include includes/gate_discard.glsl

uniform float seed;
uniform vec3 baseColor;
uniform float uLightPhase;
uniform vec3 uLightPos;
uniform float biomeSeed;
uniform sampler2D interactionFieldTex;
uniform float interactionFieldBlend;
uniform float biomeCount;
uniform float biomeIndices[10];
uniform float uAspect;
uniform float uNoiseScale;

vec3 biomeParams(float idx) {
  // x: sea bias (-dry .. +wet), y: dryness, z: coldness
  if (idx < 0.5) return vec3(0.00, 0.30, 0.20); // continental
  if (idx < 1.5) return vec3(0.35, 0.10, 0.25); // ocean
  if (idx < 2.5) return vec3(-0.30, 0.95, 0.20); // desert
  if (idx < 3.5) return vec3(0.02, 0.20, 0.15); // alien
  if (idx < 4.5) return vec3(0.06, 0.20, 0.28); // forest
  return vec3(0.12, 0.18, 0.95); // ice
}

vec3 biomeTint(float idx) {
  if (idx < 0.5) return vec3(0.20, 0.30, 0.12);
  if (idx < 1.5) return vec3(0.14, 0.24, 0.28);
  if (idx < 2.5) return vec3(0.40, 0.28, 0.12);
  if (idx < 3.5) return vec3(0.14, 0.30, 0.32);
  if (idx < 4.5) return vec3(0.12, 0.34, 0.14);
  return vec3(0.58, 0.66, 0.78);
}

void main() {
  applyGateDiscard();

  vec2 uv = vUv;

  // Blend adjacent biome region settings along tube length.
  float tubePos = uv.x * biomeCount;
  int idx0 = int(clamp(floor(tubePos), 0.0, 9.0));
  int idx1 = int(clamp(ceil(tubePos), 0.0, 9.0));
  float zoneBlend = smoothstep(0.28, 0.72, fract(tubePos));

  float biome0 = biomeIndices[idx0];
  float biome1 = biomeIndices[idx1];
  vec3 p0 = biomeParams(biome0);
  vec3 p1 = biomeParams(biome1);
  vec3 biomeP = mix(p0, p1, zoneBlend);
  vec3 tint = mix(biomeTint(biome0), biomeTint(biome1), zoneBlend);

  // Interaction field is the macro terrain source; fallback noise fills in if absent.
  float field = texture2D(interactionFieldTex, uv).r * 2.0 - 1.0;

  // Sample 3D noise on the tube geometry surface — isotropic and seamless across wraps.
  vec3 noisePos = vLocalPos * uNoiseScale + vec3(seed * 13.37, biomeSeed * 7.13, seed * 3.71);
  float fallbackMacro = fbm(noisePos);

  float macro = mix(fallbackMacro, field, interactionFieldBlend);

  vec3 detailPos = vLocalPos * uNoiseScale * 3.0 + vec3(biomeSeed * 0.9, seed * 0.7, seed * 3.1);
  float detail = snoise(detailPos) * 0.55 + snoise(detailPos * 2.0 + 17.0) * 0.30;

  float seaShift = biomeP.x * 0.25;
  float landMetric = macro + detail * 0.14 - seaShift;
  float landMask = smoothstep(-0.06, 0.09, landMetric);
  float elevation = smoothstep(0.02, 0.70, macro + detail * 0.12);

  float dryness = biomeP.y;
  float coldness = biomeP.z;

  // Water palette
  vec3 deepWater = vec3(0.02, 0.06, 0.18);
  vec3 shallowWater = vec3(0.08, 0.22, 0.38);
  vec3 reefWater = vec3(0.10, 0.30, 0.28);
  float shore = smoothstep(-0.15, 0.02, landMetric);
  vec3 water = mix(deepWater, shallowWater, shore);
  water = mix(water, reefWater, (1.0 - dryness) * shore * 0.45);

  // Land palette
  vec3 lowland = mix(vec3(0.16, 0.34, 0.13), baseColor * 0.55, 0.35);
  vec3 highland = mix(vec3(0.44, 0.34, 0.21), baseColor * 0.75, 0.30);
  vec3 desert = vec3(0.84, 0.71, 0.44);
  vec3 rock = vec3(0.48, 0.36, 0.26);
  vec3 tundra = vec3(0.74, 0.78, 0.84);

  vec3 land = mix(lowland, highland, elevation);
  land = mix(land, desert, dryness * 0.55);
  land = mix(land, rock, smoothstep(0.55, 0.92, elevation) * 0.55);
  land = mix(land, tundra, coldness * smoothstep(0.20, 0.80, elevation));
  land = mix(land, tint, 0.24);

  vec3 biomeColor = mix(water, land, landMask);

  // Lighting from star.
  vec3 toStar = normalize(uLightPos - vWorldPosition);
  float sunDot = dot(vWorldNormal, toStar);
  float light = smoothstep(-0.4, 0.7, sunDot) * 0.65 + 0.35;

  // Cosmetic windows
  if (windowBlend > 0.0) {
    vec3 glassTint = vec3(0.35, 0.55, 0.7);
    biomeColor = mix(biomeColor, glassTint, windowBlend * 0.35);
  }

  gl_FragColor = vec4(biomeColor * light, 1.0);
}
