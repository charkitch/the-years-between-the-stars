import * as THREE from 'three';
import type { SceneEntity, XRayTransferStream } from './types';

const _streamVecA = new THREE.Vector3();
const _streamVecB = new THREE.Vector3();
const _streamVecC = new THREE.Vector3();
const _streamVecD = new THREE.Vector3();
const _streamVecE = new THREE.Vector3();
const _streamVecF = new THREE.Vector3();
const _streamVecG = new THREE.Vector3();
const _streamVecH = new THREE.Vector3();
const _streamVecI = new THREE.Vector3();
const _streamVecJ = new THREE.Vector3();
const _streamVecK = new THREE.Vector3();
const _streamVecL = new THREE.Vector3();
const _streamVecM = new THREE.Vector3();
const _streamQuatA = new THREE.Quaternion();

let xRayStreamRibbonTexture: THREE.CanvasTexture | null = null;

function getXRayStreamRibbonTexture(): THREE.CanvasTexture {
  if (xRayStreamRibbonTexture) return xRayStreamRibbonTexture;

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    xRayStreamRibbonTexture = new THREE.CanvasTexture(canvas);
    return xRayStreamRibbonTexture;
  }

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0.0, 'rgba(255,255,255,0.02)');
  gradient.addColorStop(0.18, 'rgba(255,255,255,0.28)');
  gradient.addColorStop(0.42, 'rgba(255,255,255,0.1)');
  gradient.addColorStop(0.68, 'rgba(255,255,255,0.32)');
  gradient.addColorStop(1.0, 'rgba(255,255,255,0.02)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const vertical = ctx.createLinearGradient(0, 0, 0, canvas.height);
  vertical.addColorStop(0.0, 'rgba(255,255,255,0)');
  vertical.addColorStop(0.2, 'rgba(255,255,255,0.55)');
  vertical.addColorStop(0.5, 'rgba(255,255,255,1)');
  vertical.addColorStop(0.8, 'rgba(255,255,255,0.55)');
  vertical.addColorStop(1.0, 'rgba(255,255,255,0)');
  ctx.globalCompositeOperation = 'destination-in';
  ctx.fillStyle = vertical;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'lighter';

  for (let i = 0; i < 18; i++) {
    const x = (i / 18) * canvas.width;
    const w = 18 + (i % 5) * 12;
    const band = ctx.createLinearGradient(x - w, 0, x + w, 0);
    band.addColorStop(0.0, 'rgba(255,255,255,0)');
    band.addColorStop(0.5, 'rgba(255,255,255,0.22)');
    band.addColorStop(1.0, 'rgba(255,255,255,0)');
    ctx.fillStyle = band;
    ctx.fillRect(x - w, 0, w * 2, canvas.height);
  }

  ctx.globalCompositeOperation = 'source-over';
  xRayStreamRibbonTexture = new THREE.CanvasTexture(canvas);
  xRayStreamRibbonTexture.wrapS = THREE.RepeatWrapping;
  xRayStreamRibbonTexture.wrapT = THREE.ClampToEdgeWrapping;
  xRayStreamRibbonTexture.repeat.set(2.4, 1);
  xRayStreamRibbonTexture.needsUpdate = true;
  return xRayStreamRibbonTexture;
}

function writeCubicPoint(
  target: Float32Array,
  offset: number,
  start: THREE.Vector3,
  controlA: THREE.Vector3,
  controlB: THREE.Vector3,
  end: THREE.Vector3,
  t: number,
): void {
  const omt = 1 - t;
  const a = omt * omt * omt;
  const b = 3 * omt * omt * t;
  const c = 3 * omt * t * t;
  const d = t * t * t;
  target[offset] = start.x * a + controlA.x * b + controlB.x * c + end.x * d;
  target[offset + 1] = start.y * a + controlA.y * b + controlB.y * c + end.y * d;
  target[offset + 2] = start.z * a + controlA.z * b + controlB.z * c + end.z * d;
}

export function createXRayTransferStream(donorColorValue: number, diskImpactRadius: number): XRayTransferStream {
  const donorColor = new THREE.Color(donorColorValue);
  const highlightColor = donorColor.clone().lerp(new THREE.Color(0xFFF7EE), 0.2);
  const ribbonSegmentCount = 44;

  const curveBuffer = new Float32Array(36 * 3);

  const tubeSeg = 20;
  const tubeSides = 6;
  const tubePositions = new Float32Array(tubeSeg * tubeSides * 3);
  const tubeIndices = new Uint16Array((tubeSeg - 1) * tubeSides * 6);
  for (let s = 0; s < tubeSeg - 1; s++) {
    for (let n = 0; n < tubeSides; n++) {
      const idx = (s * tubeSides + n) * 6;
      const a = s * tubeSides + n;
      const b = s * tubeSides + (n + 1) % tubeSides;
      const c = (s + 1) * tubeSides + n;
      const d = (s + 1) * tubeSides + (n + 1) % tubeSides;
      tubeIndices[idx] = a;
      tubeIndices[idx + 1] = b;
      tubeIndices[idx + 2] = c;
      tubeIndices[idx + 3] = b;
      tubeIndices[idx + 4] = d;
      tubeIndices[idx + 5] = c;
    }
  }
  const spine = new THREE.Mesh(
    new THREE.BufferGeometry()
      .setAttribute('position', new THREE.BufferAttribute(tubePositions, 3))
      .setIndex(new THREE.BufferAttribute(tubeIndices, 1)),
    new THREE.MeshBasicMaterial({
      color: donorColor,
      transparent: true,
      opacity: 0.72,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
  );

  const ribbonPositions = new Float32Array(ribbonSegmentCount * 2 * 3);
  const ribbonColors = new Float32Array(ribbonSegmentCount * 2 * 3);
  const ribbonUvs = new Float32Array(ribbonSegmentCount * 2 * 2);
  const ribbonIndices = new Uint16Array((ribbonSegmentCount - 1) * 6);
  for (let i = 0; i < ribbonSegmentCount; i++) {
    const t = i / (ribbonSegmentCount - 1);
    // Keep donor tint across most of the stream; brighten near disk impact.
    const impactRamp = THREE.MathUtils.smoothstep(t, 0.76, 1.0);
    const color = donorColor.clone().lerp(highlightColor, impactRamp * 0.7);
    for (let side = 0; side < 2; side++) {
      const vertexIndex = i * 2 + side;
      ribbonColors[vertexIndex * 3] = color.r;
      ribbonColors[vertexIndex * 3 + 1] = color.g;
      ribbonColors[vertexIndex * 3 + 2] = color.b;
      ribbonUvs[vertexIndex * 2] = t;
      ribbonUvs[vertexIndex * 2 + 1] = side;
    }
    if (i < ribbonSegmentCount - 1) {
      const idx = i * 6;
      const base = i * 2;
      ribbonIndices[idx] = base;
      ribbonIndices[idx + 1] = base + 1;
      ribbonIndices[idx + 2] = base + 2;
      ribbonIndices[idx + 3] = base + 1;
      ribbonIndices[idx + 4] = base + 3;
      ribbonIndices[idx + 5] = base + 2;
    }
  }

  const ribbon = new THREE.Mesh(
    new THREE.BufferGeometry()
      .setAttribute('position', new THREE.BufferAttribute(ribbonPositions, 3))
      .setAttribute('color', new THREE.BufferAttribute(ribbonColors, 3))
      .setAttribute('uv', new THREE.BufferAttribute(ribbonUvs, 2))
      .setIndex(new THREE.BufferAttribute(ribbonIndices, 1)),
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      map: getXRayStreamRibbonTexture(),
      alphaMap: getXRayStreamRibbonTexture(),
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
  );

  return {
    donorId: 'companion-star',
    accretorId: 'star',
    curveBias: 0.30,
    phase: Math.random() * Math.PI * 2,
    flowSpeed: 0.065,
    diskImpactRadius,
    curveBuffer,
    spine,
    ribbon,
    donorColor,
    highlightColor,
  };
}

export function updateXRayTransferStreams(params: {
  streams: XRayTransferStream[];
  entities: Map<string, SceneEntity>;
  camera: THREE.Camera;
  xbDiskGroup: THREE.Group | null;
  time: number;
}): void {
  const { streams, entities, camera, xbDiskGroup, time } = params;

  for (const stream of streams) {
    const donor = entities.get(stream.donorId);
    const accretor = entities.get(stream.accretorId);
    if (!donor || !accretor) continue;

    const donorCenter = donor.worldPos;
    const accretorPos = accretor.worldPos;

    // Start stream at the donor's surface (L1 point toward the accretor)
    const toAccretor = _streamVecA.copy(accretorPos).sub(donorCenter);
    if (toAccretor.lengthSq() < 1e-6) continue;
    toAccretor.normalize();
    const donorPos = _streamVecJ.copy(donorCenter).addScaledVector(toAccretor, donor.collisionRadius);

    const diskNormal = _streamVecK.set(0, 1, 0);
    if (xbDiskGroup) {
      xbDiskGroup.getWorldQuaternion(_streamQuatA);
      diskNormal.applyQuaternion(_streamQuatA).normalize();
    }

    const diskRadial = _streamVecE.copy(donorCenter).sub(accretorPos);
    // Project donor direction into the disk plane to find a natural impact azimuth.
    diskRadial.addScaledVector(diskNormal, -diskRadial.dot(diskNormal));
    if (diskRadial.lengthSq() < 1e-6) {
      diskRadial.set(1, 0, 0);
    } else {
      diskRadial.normalize();
    }
    const diskTangent = _streamVecM.crossVectors(diskNormal, diskRadial);
    if (diskTangent.lengthSq() < 1e-6) {
      diskTangent.set(0, 0, 1);
    } else {
      diskTangent.normalize();
    }

    // Impact point sits just inside disk rim, then leads tangentially for a smoother capture.
    const diskTarget = _streamVecL.copy(diskRadial)
      .multiplyScalar(stream.diskImpactRadius * 0.82)
      .add(accretorPos);
    diskTarget.addScaledVector(diskTangent, stream.diskImpactRadius * -0.48);
    diskTarget.addScaledVector(diskNormal, Math.sin(time * 0.75 + stream.phase) * Math.max(stream.diskImpactRadius * 0.012, 1.5));

    const flow = _streamVecA.copy(diskTarget).sub(donorPos);
    const dist = flow.length();
    if (dist < 1) continue;

    flow.normalize();
    const lateral = _streamVecB.set(-flow.z, 0, flow.x).normalize();

    const controlA = _streamVecC.copy(donorPos).lerp(diskTarget, 0.34);
    controlA.addScaledVector(lateral, Math.max(dist * stream.curveBias, 65));
    controlA.addScaledVector(diskNormal, Math.sin(time * 0.32 + stream.phase) * Math.max(dist * 0.012, 3));

    // Lock terminal tangent to disk direction of travel near impact.
    const endTangentLen = Math.max(stream.diskImpactRadius * 1.1, 62);
    const controlB = _streamVecB.copy(diskTarget)
      .addScaledVector(diskTangent, endTangentLen)
      .addScaledVector(diskNormal, -Math.max(stream.diskImpactRadius * 0.03, 2));

    const curveBuffer = stream.curveBuffer;
    const curvePointCount = curveBuffer.length / 3;
    for (let i = 0; i < curvePointCount; i++) {
      const t = i / (curvePointCount - 1);
      writeCubicPoint(curveBuffer, i * 3, donorPos, controlA, controlB, diskTarget, t);
    }

    const tubeAttr = stream.spine.geometry.attributes.position as THREE.BufferAttribute;
    const tubeArr = tubeAttr.array as Float32Array;
    const tubeSeg = 20;
    const tubeSides = 6;
    const ribbonHalfWidth = Math.max(dist * 0.026, 20);
    for (let s = 0; s < tubeSeg; s++) {
      const t = s / (tubeSeg - 1);
      const ci = Math.min(Math.floor(t * (curvePointCount - 1)), curvePointCount - 2);
      const ct = t * (curvePointCount - 1) - ci;
      const cOff = ci * 3;
      const nOff = (ci + 1) * 3;
        const cx = curveBuffer[cOff] + (curveBuffer[nOff] - curveBuffer[cOff]) * ct;
        const cy = curveBuffer[cOff + 1] + (curveBuffer[nOff + 1] - curveBuffer[cOff + 1]) * ct;
        const cz = curveBuffer[cOff + 2] + (curveBuffer[nOff + 2] - curveBuffer[cOff + 2]) * ct;
      const pIdx = Math.max(0, ci - 1) * 3;
      const fIdx = Math.min(curvePointCount - 1, ci + 2) * 3;
      const tubeTangent = _streamVecF.set(
        curveBuffer[fIdx] - curveBuffer[pIdx],
        curveBuffer[fIdx + 1] - curveBuffer[pIdx + 1],
        curveBuffer[fIdx + 2] - curveBuffer[pIdx + 2],
      ).normalize();

      const tubeN1 = _streamVecH.set(0, 1, 0).cross(tubeTangent);
      if (tubeN1.lengthSq() < 0.01) tubeN1.set(1, 0, 0);
      tubeN1.normalize();
      const tubeN2 = _streamVecI.crossVectors(tubeTangent, tubeN1).normalize();
      const startFade = Math.min(t / 0.12, 1.0);
      const diskSwell = 0.55 + 0.45 * Math.pow(t, 0.5);
      const tubeRadius = ribbonHalfWidth * startFade * diskSwell * 0.28;
      for (let n = 0; n < tubeSides; n++) {
        const angle = (n / tubeSides) * Math.PI * 2;
        const ca = Math.cos(angle);
        const sa = Math.sin(angle);
        const vi = (s * tubeSides + n) * 3;
        tubeArr[vi] = cx + (tubeN1.x * ca + tubeN2.x * sa) * tubeRadius;
        tubeArr[vi + 1] = cy + (tubeN1.y * ca + tubeN2.y * sa) * tubeRadius;
        tubeArr[vi + 2] = cz + (tubeN1.z * ca + tubeN2.z * sa) * tubeRadius;
      }
    }
    tubeAttr.needsUpdate = true;

    const spineMat = stream.spine.material as THREE.MeshBasicMaterial;
    spineMat.color.copy(stream.donorColor).lerp(stream.highlightColor, 0.3);

    const cameraPos = camera.getWorldPosition(_streamVecG);
    const ribbonAttr = stream.ribbon.geometry.attributes.position as THREE.BufferAttribute;
    const ribbonArr = ribbonAttr.array as Float32Array;
    const ribbonSegments = ribbonArr.length / 6;
    for (let i = 0; i < ribbonSegments; i++) {
      const t = i / (ribbonSegments - 1);
      const sample = t * (curvePointCount - 1);
      const basePoint = Math.floor(sample);
      const nextPoint = Math.min(curvePointCount - 1, basePoint + 1);
      const blend = sample - basePoint;
      const baseOffset = basePoint * 3;
      const nextOffset = nextPoint * 3;
      const px = curveBuffer[baseOffset] + (curveBuffer[nextOffset] - curveBuffer[baseOffset]) * blend;
      const py = curveBuffer[baseOffset + 1] + (curveBuffer[nextOffset + 1] - curveBuffer[baseOffset + 1]) * blend;
      const pz = curveBuffer[baseOffset + 2] + (curveBuffer[nextOffset + 2] - curveBuffer[baseOffset + 2]) * blend;

      const prevPoint = Math.max(0, basePoint - 1);
      const futurePoint = Math.min(curvePointCount - 1, nextPoint + 1);
      const prevOffset = prevPoint * 3;
      const futureOffset = futurePoint * 3;
      const tangent = _streamVecF.set(
        curveBuffer[futureOffset] - curveBuffer[prevOffset],
        curveBuffer[futureOffset + 1] - curveBuffer[prevOffset + 1],
        curveBuffer[futureOffset + 2] - curveBuffer[prevOffset + 2],
      ).normalize();
      const toCamera = _streamVecE.set(cameraPos.x - px, cameraPos.y - py, cameraPos.z - pz).normalize();
      const side = _streamVecD.crossVectors(toCamera, tangent);
      if (side.lengthSq() < 1e-6) {
        side.copy(lateral);
      } else {
        side.normalize();
      }

      const startFade = Math.min(t / 0.12, 1.0);
      const diskSwell = 0.55 + 0.45 * Math.pow(t, 0.5);
      const envelope = startFade * diskSwell;
      const pulse = 0.94 + 0.06 * Math.sin(time * stream.flowSpeed * 18 - t * 9 + stream.phase);
      const width = ribbonHalfWidth * envelope * pulse;

      const leftIndex = i * 6;
      ribbonArr[leftIndex] = px + side.x * width;
      ribbonArr[leftIndex + 1] = py + side.y * width;
      ribbonArr[leftIndex + 2] = pz + side.z * width;
      ribbonArr[leftIndex + 3] = px - side.x * width;
      ribbonArr[leftIndex + 4] = py - side.y * width;
      ribbonArr[leftIndex + 5] = pz - side.z * width;
    }
    ribbonAttr.needsUpdate = true;

    const ribbonMat = stream.ribbon.material as THREE.MeshBasicMaterial;
    ribbonMat.color.set(0xffffff);
    ribbonMat.opacity = 0.34 + Math.sin(time * 0.22 + stream.phase) * 0.04;
    if (ribbonMat.map) {
      ribbonMat.map.offset.x = -time * stream.flowSpeed;
    }
    if (ribbonMat.alphaMap) {
      ribbonMat.alphaMap.offset.x = -time * stream.flowSpeed;
    }
  }

  if (xbDiskGroup) {
    const disk = (xbDiskGroup.userData.disk as THREE.Object3D | undefined) ?? xbDiskGroup.children[0];
    const innerRing = (xbDiskGroup.userData.innerRing as THREE.Object3D | undefined) ?? xbDiskGroup.children[1];
    const brightArc = (xbDiskGroup.userData.brightArc as THREE.Object3D | undefined) ?? xbDiskGroup.children[3];
    if (!disk || !innerRing || !brightArc) return;
    disk.rotation.z = 0.45 + time * 0.06;
    innerRing.rotation.z = 0.54 + time * 0.10;
    brightArc.rotation.z = 0.62 + time * 0.08;
  }
}
