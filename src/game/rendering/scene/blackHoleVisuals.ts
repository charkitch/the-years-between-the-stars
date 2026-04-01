import * as THREE from 'three';
import { makeGlowSprite } from '../meshFactory';

interface BlackHoleVisualStyle {
  diskColor: string;
  midColor: string;
  hotColor: string;
  crescentColor: string;
  outerGlowColor: number;
  brightArcColor: number;
  outerGlowOpacity: number;
}

function createBlackHoleDiskTexture(style: BlackHoleVisualStyle): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const outer = canvas.width * 0.46;
  const inner = canvas.width * 0.2;
  const grad = ctx.createRadialGradient(cx, cy, inner, cx, cy, outer);
  grad.addColorStop(0.0, style.hotColor);
  grad.addColorStop(0.2, style.diskColor);
  grad.addColorStop(0.4, style.midColor);
  grad.addColorStop(0.66, style.crescentColor.replace('0.95', '0.24'));
  grad.addColorStop(1.0, style.crescentColor.replace('0.95', '0'));
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy, outer, 0, Math.PI * 2);
  ctx.arc(cx, cy, inner, 0, Math.PI * 2, true);
  ctx.fill();

  const crescent = ctx.createRadialGradient(cx + canvas.width * 0.11, cy - canvas.height * 0.06, canvas.width * 0.03, cx, cy, outer);
  crescent.addColorStop(0.0, style.crescentColor);
  crescent.addColorStop(0.24, style.diskColor.replace('0.92', '0.74'));
  crescent.addColorStop(0.56, style.midColor.replace('0.72', '0.14'));
  crescent.addColorStop(1.0, style.midColor.replace('0.72', '0'));
  ctx.globalCompositeOperation = 'lighter';
  ctx.fillStyle = crescent;
  ctx.beginPath();
  ctx.ellipse(cx + canvas.width * 0.06, cy - canvas.height * 0.04, canvas.width * 0.36, canvas.height * 0.22, -0.28, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalCompositeOperation = 'source-over';

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function createBlackHoleGroup(radius: number, xRayMode = false): THREE.Group {
  const group = new THREE.Group();
  const style: BlackHoleVisualStyle = xRayMode
    ? {
      diskColor: 'rgba(255,214,248,0.92)',
      midColor: 'rgba(154,208,255,0.72)',
      hotColor: 'rgba(245,248,255,0.98)',
      crescentColor: 'rgba(255,255,255,0.95)',
      outerGlowColor: 0x8FD4FF,
      brightArcColor: 0xFEE0FF,
      outerGlowOpacity: 0.3,
    }
    : {
      diskColor: 'rgba(255,210,150,0.92)',
      midColor: 'rgba(255,144,72,0.72)',
      hotColor: 'rgba(255,250,235,0.98)',
      crescentColor: 'rgba(255,255,245,0.95)',
      outerGlowColor: 0xFF7A2E,
      brightArcColor: 0xFFF1CF,
      outerGlowOpacity: 0.24,
    };

  const disk = new THREE.Mesh(
    new THREE.RingGeometry(radius * 1.6, radius * 2.9, 96),
    new THREE.MeshBasicMaterial({
      map: createBlackHoleDiskTexture(style),
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  disk.rotation.x = Math.PI / 2;
  disk.rotation.z = 0.45;
  disk.scale.set(1.2, 0.68, 1);
  group.add(disk);

  const innerRing = new THREE.Mesh(
    new THREE.TorusGeometry(radius * 1.62, radius * 0.09, 10, 72),
    new THREE.MeshBasicMaterial({
      color: style.brightArcColor,
      transparent: true,
      opacity: xRayMode ? 0.5 : 0.42,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  innerRing.rotation.x = Math.PI / 2;
  innerRing.rotation.z = 0.54;
  innerRing.scale.set(1.08, 0.72, 1);
  group.add(innerRing);

  const outerGlow = makeGlowSprite(style.outerGlowColor, radius * (xRayMode ? 5.6 : 5.2));
  const outerGlowMat = outerGlow.material as THREE.SpriteMaterial;
  outerGlowMat.opacity = style.outerGlowOpacity;
  group.add(outerGlow);

  const brightArc = new THREE.Mesh(
    new THREE.TorusGeometry(radius * 1.78, radius * 0.16, 10, 96, Math.PI * 1.12),
    new THREE.MeshBasicMaterial({
      color: style.brightArcColor,
      transparent: true,
      opacity: xRayMode ? 0.86 : 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  brightArc.rotation.x = Math.PI / 2;
  brightArc.rotation.z = 0.62;
  brightArc.position.x = radius * 0.16;
  brightArc.scale.set(1.06, 0.64, 1);
  group.add(brightArc);

  const shadowCore = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 24, 24),
    new THREE.MeshBasicMaterial({ color: 0x020202 }),
  );
  group.add(shadowCore);

  const innerShadow = new THREE.Mesh(
    new THREE.SphereGeometry(radius * 1.08, 20, 20),
    new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
    }),
  );
  group.add(innerShadow);

  group.userData.blackHole = true;
  return group;
}
