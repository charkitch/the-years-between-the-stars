#include includes/hash.glsl
#include includes/planet_varyings.glsl
#include includes/gate_discard.glsl

uniform float uTime;
uniform float seed;
uniform float uAspect;

float distToSeg(vec2 p, vec2 a, vec2 b) {
  vec2 ab = b - a, ap = p - a;
  float t = clamp(dot(ap, ab) / dot(ab, ab), 0.0, 1.0);
  return length(p - (a + ab * t));
}

void main() {
  applyGateDiscard();
  // Fine grid for individual bolts
  float gridScale = 9.0;
  vec2 uvGrid = vec2(vUv.x * gridScale * uAspect, vUv.y * gridScale);
  vec2 cellCoord = floor(uvGrid);
  vec2 local = fract(uvGrid) - 0.5;

  // Coarse "storm region" grid — storms cluster around rare region centers.
  // Each region spans ~4x4 bolt cells. A region's hash determines if a storm
  // exists there; bolt cells closer to the region center are more likely to fire.
  vec2 regionCoord = floor(uvGrid * 0.25);
  float regionHash = hash(regionCoord, seed + 100.0);
  if (regionHash < 0.92) discard; // ~8% of regions have storms

  // Cells closer to region center fire more often — creates spatial clustering
  vec2 regionLocal = fract(uvGrid * 0.25) - 0.5;
  float distFromCenter = length(regionLocal);
  float cHash = hash(cellCoord, seed);
  float threshold = 0.88 + distFromCenter * 0.11; // center: 0.88, edges: ~0.94
  if (cHash < threshold) discard;

  // Flash timing — each cycle produces a unique bolt shape
  float flashRate = 0.3 + cHash * 0.5;
  float cycle = uTime * flashRate + cHash * 17.3;
  float flashIndex = floor(cycle);
  float phase = fract(cycle);
  float flash = smoothstep(0.0, 0.02, phase)
              * (1.0 - smoothstep(0.10, 0.14, phase));
  if (flash <= 0.001) discard;

  // Jagged bolt: 3 connected segments — vary per flash via flashIndex
  float h1 = hash(cellCoord, seed + 1.0 + flashIndex);
  float h2 = hash(cellCoord, seed + 2.0 + flashIndex);
  float h3 = hash(cellCoord, seed + 3.0 + flashIndex);
  float h4 = hash(cellCoord, seed + 4.0 + flashIndex);
  float h5 = hash(cellCoord, seed + 5.0 + flashIndex);

  vec2 p0 = vec2((h1 - 0.5) * 0.22, -0.43);
  vec2 p1 = vec2((h2 - 0.5) * 0.38, -0.12 + (h3 - 0.5) * 0.08);
  vec2 p2 = vec2((h4 - 0.5) * 0.3,   0.12);
  vec2 p3 = vec2((h5 - 0.5) * 0.22,  0.43);

  float w = 0.022;
  float d = min(distToSeg(local, p0, p1),
            min(distToSeg(local, p1, p2),
                distToSeg(local, p2, p3)));
  float bolt = smoothstep(w, w * 0.1, d);

  // Sub-branch
  float h6 = hash(cellCoord, seed + 6.0 + flashIndex);
  float h7 = hash(cellCoord, seed + 7.0 + flashIndex);
  vec2 bStart = mix(p1, p2, 0.45);
  vec2 bEnd   = bStart + vec2((h6 - 0.5) * 0.17, h7 * 0.12 + 0.08);
  float branch = smoothstep(w * 0.75, w * 0.1,
                   distToSeg(local, bStart, bEnd)) * 0.65;

  // Soft glow halo
  float glow = smoothstep(w * 6.0, 0.0, d) * 0.4;

  float total = max(bolt, branch) + glow;
  float alpha = total * flash * (1.0 - windowBlend);
  if (alpha <= 0.001) discard;

  vec3 color = mix(vec3(0.55, 0.78, 1.0), vec3(1.0, 1.0, 1.0), bolt);
  gl_FragColor = vec4(color, alpha);
}
