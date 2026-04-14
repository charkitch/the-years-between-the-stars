#include includes/noise.glsl
#include includes/planet_varyings.glsl
#include includes/gate_discard.glsl

uniform float seed;
uniform float density;
uniform float uAspect;
uniform float uTime;

void main() {
  applyGateDiscard();
  // Cloud noise in aspect-corrected UV space so wisps aren't stretched.
  // Slow drift along the tube length to simulate interior weather circulation.
  float drift = uTime * 0.008;
  vec3 cloudPos = vec3(
    vUv.x * 6.0 * uAspect + seed * 5.17 + drift,
    vUv.y * 6.0 + seed * 11.31,
    seed * 2.93
  );

  float n1 = fbm(cloudPos);
  float n2 = snoise(cloudPos * 2.0 + vec3(77.0));

  // Wispy, patchy clouds — same character as planet clouds
  float cloud = smoothstep(-0.1, 0.4, n1) * smoothstep(-0.3, 0.2, n2);
  cloud = cloud * cloud;

  vec3 color = vec3(0.92, 0.94, 0.97);
  float alpha = cloud * density * (1.0 - windowBlend);

  gl_FragColor = vec4(color, alpha);
}
