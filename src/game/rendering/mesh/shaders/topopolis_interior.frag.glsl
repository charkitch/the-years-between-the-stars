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

// All biome color functions use UV-derived noise coordinates.
// u = along tube length, v = around tube circumference.

vec3 continentalColor(vec2 uv, float n) {
  float landMask = smoothstep(-0.05, 0.1, n);
  vec3 ocean = vec3(0.05, 0.12, 0.25);
  vec3 lowland = mix(vec3(0.15, 0.35, 0.12), baseColor * 0.5, 0.3);
  vec3 highland = mix(vec3(0.45, 0.35, 0.2), baseColor * 0.7, 0.3);
  vec3 land = mix(lowland, highland, smoothstep(0.1, 0.5, n));
  return mix(ocean, land, landMask);
}

vec3 oceanColor(vec2 uv, float n) {
  vec3 deep = vec3(0.02, 0.06, 0.18);
  vec3 shallow = vec3(0.06, 0.18, 0.35);
  vec3 reef = vec3(0.08, 0.28, 0.22);
  float depth = smoothstep(-0.5, 0.0, n);
  float reefMask = smoothstep(0.0, 0.15, n);
  return mix(mix(deep, shallow, depth), reef, reefMask * 0.4);
}

vec3 desertColor(vec2 uv, float n) {
  float dune = sin(uv.x * 40.0 + n * 4.0 + biomeSeed) * 0.5 + 0.5;
  vec3 sand = vec3(0.78, 0.66, 0.38);
  vec3 duneGold = vec3(0.88, 0.75, 0.46);
  vec3 rock = vec3(0.50, 0.34, 0.20);
  return mix(mix(sand, duneGold, dune * 0.35), rock, smoothstep(0.12, 0.55, n) * 0.55);
}

vec3 alienColor(vec2 uv, float n) {
  vec3 base1 = vec3(0.25, 0.08, 0.35);
  vec3 mid = vec3(0.12, 0.30, 0.32);
  vec3 bright = vec3(0.05, 0.55, 0.45);
  float band = smoothstep(-0.2, 0.3, n);
  return mix(base1, mix(mid, bright, smoothstep(0.3, 0.7, n)), band);
}

vec3 forestColor(vec2 uv, float n) {
  vec3 dark = vec3(0.04, 0.14, 0.04);
  vec3 canopy = vec3(0.08, 0.30, 0.08);
  vec3 clearing = vec3(0.22, 0.38, 0.12);
  float cover = smoothstep(-0.1, 0.4, n);
  return mix(dark, mix(canopy, clearing, smoothstep(0.3, 0.6, n)), cover);
}

vec3 iceColor(vec2 uv, float n) {
  vec3 deepIce = vec3(0.65, 0.72, 0.82);
  vec3 surface = vec3(0.85, 0.90, 0.95);
  vec3 crevasse = vec3(0.25, 0.45, 0.65);
  float depth = smoothstep(-0.3, 0.2, n);
  return mix(mix(crevasse, deepIce, depth), surface, smoothstep(0.0, 0.4, n));
}

vec3 biomeColorFor(float idx, vec2 uv, float n) {
  if (idx < 0.5) return continentalColor(uv, n);
  if (idx < 1.5) return oceanColor(uv, n);
  if (idx < 2.5) return desertColor(uv, n);
  if (idx < 3.5) return alienColor(uv, n);
  if (idx < 4.5) return forestColor(uv, n);
  return iceColor(uv, n);
}

void main() {
  applyGateDiscard();

  // Use UV coordinates — u along tube, v around circumference
  vec2 uv = vUv;

  // Noise based on UV position (scaled for good detail)
  vec3 noisePos = vec3(uv.x * 12.0 + biomeSeed, uv.y * 6.0 + seed * 0.1, biomeSeed * 0.7);
  float n = snoise(noisePos)
          + snoise(noisePos * 2.1 + 3.7) * 0.5
          + snoise(noisePos * 4.3 + 7.1) * 0.25;
  n /= 1.75;

  // Determine biome from tube-length position
  float tubePos = uv.x * biomeCount;
  int idx0 = int(clamp(floor(tubePos), 0.0, 9.0));
  int idx1 = int(clamp(ceil(tubePos), 0.0, 9.0));
  float blend = smoothstep(0.35, 0.65, fract(tubePos));

  vec3 c1 = biomeColorFor(biomeIndices[idx0], uv, n);
  vec3 c2 = biomeColorFor(biomeIndices[idx1], uv, n);
  vec3 biomeColor = mix(c1, c2, blend);

  // Interaction field overlay
  if (interactionFieldBlend > 0.0) {
    vec4 fieldSample = texture2D(interactionFieldTex, uv);
    biomeColor = mix(biomeColor, biomeColor * (0.85 + fieldSample.r * 0.3), interactionFieldBlend);
  }

  // Lighting from star
  vec3 toStar = normalize(uLightPos - vWorldPosition);
  float sunDot = dot(vWorldNormal, toStar);
  float light = smoothstep(-0.4, 0.7, sunDot) * 0.65 + 0.35;

  // Cosmetic windows — visible blue-green glass tint
  if (windowBlend > 0.0) {
    vec3 glassTint = vec3(0.35, 0.55, 0.7);
    biomeColor = mix(biomeColor, glassTint, windowBlend * 0.35);
  }

  gl_FragColor = vec4(biomeColor * light, 1.0);
}
