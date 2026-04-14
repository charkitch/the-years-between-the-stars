#include includes/hash.glsl
#include includes/planet_varyings.glsl
#include includes/gate_discard.glsl

uniform float seed;

void main() {
  applyGateDiscard();

  vec3 norm = normalize(vLocalPos);
  float theta = atan(norm.z, norm.x);
  float phi   = acos(clamp(norm.y, -1.0, 1.0));

  vec2 largeUv = vec2(theta * 3.2 + seed * 0.1, phi * 2.1);
  vec2 fineUv  = vec2(theta * 14.0 + seed * 0.3, phi * 9.0);

  vec2 largeCell  = floor(largeUv);
  vec2 largeFract = fract(largeUv);
  vec2 fineCell  = floor(fineUv);
  vec2 fineFract = fract(fineUv);

  float hLarge = hash(largeCell, seed);
  float hFine  = hash(fineCell,  seed + 7.3);
  float hFine2 = hash(fineCell,  seed + 13.1);

  float plateTone = mix(0.55, 0.72, hLarge);
  vec3 base = vec3(plateTone * 0.93, plateTone * 0.96, plateTone);

  float seamW = 0.03;
  float seamX = smoothstep(seamW, 0.0, fineFract.x) + smoothstep(1.0 - seamW, 1.0, fineFract.x);
  float seamY = smoothstep(seamW, 0.0, fineFract.y) + smoothstep(1.0 - seamW, 1.0, fineFract.y);
  float seam  = clamp(seamX + seamY, 0.0, 1.0);
  base = mix(base, vec3(0.88, 0.91, 0.95), seam * 0.6);

  float ribW = 0.055;
  float ribX = smoothstep(ribW, 0.0, largeFract.x) + smoothstep(1.0 - ribW, 1.0, largeFract.x);
  float ribY = smoothstep(ribW, 0.0, largeFract.y) + smoothstep(1.0 - ribW, 1.0, largeFract.y);
  float rib  = clamp(ribX + ribY, 0.0, 1.0);
  base = mix(base, vec3(0.80, 0.84, 0.90), rib * 0.55);

  if (hFine > 0.68) {
    vec2 ventCenter = vec2(hash(fineCell + 0.5, seed + 1.0), hash(fineCell + 1.5, seed + 2.0)) * 0.5 + 0.25;
    float dist  = length(fineFract - ventCenter);
    float ventR = mix(0.08, 0.16, hash(fineCell + 2.5, seed));
    float ring  = smoothstep(ventR + 0.025, ventR, dist) - smoothstep(ventR - 0.04, ventR - 0.065, dist);
    float interior = smoothstep(ventR - 0.04, ventR - 0.07, dist);
    base = mix(base, vec3(0.82, 0.86, 0.92), ring * 0.9);
    base = mix(base, vec3(0.18, 0.20, 0.24), interior * 0.85);
  }
  if (hFine > 0.82 && hFine2 < 0.5) {
    float conduitY = hash(fineCell + 3.5, seed);
    float strip = smoothstep(0.06, 0.0, abs(fineFract.y - conduitY));
    base = mix(base, vec3(0.70, 0.74, 0.80), strip * 0.5);
    float indicatorX = hash(fineCell + 4.5, seed);
    float indicator  = smoothstep(0.035, 0.0, length(fineFract - vec2(indicatorX, conduitY)));
    base = mix(base, vec3(0.55, 0.80, 1.0), indicator * 0.95);
  }
  if (hFine < 0.18) {
    vec2 padMin = vec2(hash(fineCell + 5.5, seed), hash(fineCell + 6.5, seed)) * 0.3 + 0.1;
    vec2 padMax = padMin + vec2(0.28, 0.18);
    vec2 inside = step(padMin, fineFract) * step(fineFract, padMax);
    float pad = inside.x * inside.y;
    float innerMask = step(padMin + 0.025, fineFract).x * step(fineFract, padMax - 0.025).x
                    * step(padMin + 0.025, fineFract).y * step(fineFract, padMax - 0.025).y;
    float padBorder = pad * (1.0 - innerMask);
    base = mix(base, vec3(0.40, 0.44, 0.50), pad * 0.55);
    base = mix(base, vec3(0.82, 0.86, 0.92), padBorder * 0.85);
  }

  vec3 toStar = normalize(-vWorldPosition);
  float sunDot = dot(vWorldNormal, toStar);
  float light  = smoothstep(-0.4, 0.7, sunDot) * 0.75 + 0.35;

  // Gate edge — dark industrial frame around the opening
  if (gateEdgeBlend > 0.0) {
    vec3 frameColor = vec3(0.28, 0.32, 0.38);
    vec3 accentColor = vec3(0.4, 0.7, 0.85);
    base = mix(base, frameColor, gateEdgeBlend * 0.8);
    // Subtle cyan accent at the inner edge
    float innerRim = smoothstep(0.3, 0.9, gateEdgeBlend);
    base = mix(base, accentColor, innerRim * 0.4);
  }

  // Cosmetic windows — discard exterior so tinted interior shows through
  if (windowBlend > 0.5) discard;

  gl_FragColor = vec4(base * light, 1.0);
}
