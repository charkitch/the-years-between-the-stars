#include includes/planet_varyings.glsl
#include includes/gate_discard.glsl

void main() {
  applyGateDiscard();
  // Only render at window positions — discard everywhere else
  if (windowBlend < 0.1) discard;
  // Semi-transparent tinted glass
  vec3 glassColor = vec3(0.35, 0.55, 0.72);
  float alpha = windowBlend * 0.3;
  gl_FragColor = vec4(glassColor, alpha);
}
