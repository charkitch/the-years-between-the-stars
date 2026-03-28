import { useGameState } from '../../game/GameState';
import { StatusBars } from './StatusBars';
import { Scanner } from './Scanner';
import type { SceneEntity } from '../../game/rendering/SceneRenderer';
import styles from './HUD.module.css';
import * as THREE from 'three';

interface HUDProps {
  getEntities: () => Map<string, SceneEntity>;
  getShipPos: () => THREE.Vector3;
}

export function HUD({ getEntities, getShipPos }: HUDProps) {
  const player = useGameState(s => s.player);
  const galaxy = useGameState(s => s.galaxy);
  const currentSystemId = useGameState(s => s.currentSystemId);
  const alert = useGameState(s => s.ui.alertMessage);
  const hyperspaceTarget = useGameState(s => s.ui.hyperspaceTarget);
  const galaxyYear = useGameState(s => s.galaxyYear);

  const currentStar = galaxy[currentSystemId];
  const targetStar = hyperspaceTarget !== null ? galaxy[hyperspaceTarget] : null;

  // Target info
  const targetEntity = player.targetId ? getEntities().get(player.targetId) : null;
  let targetDist = 0;
  if (targetEntity) {
    const sp = getShipPos();
    targetDist = Math.round(sp.distanceTo(targetEntity.worldPos));
  }

  return (
    <div className={styles.hud}>
      {/* Crosshair */}
      <div className={styles.center}>
        <div className={styles.crosshair} />
      </div>

      {/* Alert */}
      {alert && <div className={styles.alertBanner}>{alert}</div>}

      {/* Top-left: system info + credits */}
      <div className={styles.topLeft}>
        <div className={styles.credits}>CR {player.credits.toLocaleString()}</div>
        <div style={{ fontSize: '11px', color: 'var(--color-hud-dim)', letterSpacing: '2px', marginBottom: '2px' }}>
          YEAR {galaxyYear.toLocaleString()}
        </div>
        <div className={styles.systemInfo}>
          {currentStar?.name} · {currentStar?.starType}-TYPE · {currentStar?.economy}
        </div>
        {targetStar && (
          <div style={{ color: 'var(--color-hyperspace-bright)', fontSize: '11px', marginTop: '4px' }}>
            JUMP TARGET: {targetStar.name}
          </div>
        )}
        <div className={styles.controls}>
          W/S Pitch · A/D Roll · Q/E Yaw<br />
          SPACE Thrust · SHIFT Boost · TAB Target<br />
          F Dock · G Galaxy Map · 1 System Map · J Jump · H Hail
        </div>
      </div>

      {/* Top-right: target info */}
      <div className={styles.topRight}>
        {targetEntity ? (
          <div className={styles.targetInfo}>
            <div className={styles.targetLabel}>TARGET</div>
            <div>{targetEntity.id.replace(`${currentSystemId}-`, '')}</div>
            <div style={{ color: 'var(--color-hud-dim)', fontSize: '11px' }}>
              DIST: {targetDist} wu
            </div>
            <div style={{ fontSize: '10px', opacity: 0.6 }}>
              TYPE: {targetEntity.type.toUpperCase()}
            </div>
            {targetEntity.type === 'npc_ship' && (
              <div style={{ color: 'var(--color-station)', fontSize: '10px', marginTop: '4px', letterSpacing: '1px' }}>
                H TO HAIL
              </div>
            )}
          </div>
        ) : (
          <div className={styles.targetInfo}>
            <div className={styles.targetLabel}>NO TARGET</div>
            <div style={{ fontSize: '10px', opacity: 0.5 }}>TAB to cycle</div>
          </div>
        )}
      </div>

      {/* Bottom-left: status bars */}
      <div className={styles.bottomLeft}>
        <StatusBars />
      </div>

      {/* Bottom-right: scanner */}
      <div className={styles.bottomRight}>
        <Scanner getEntities={getEntities} />
      </div>
    </div>
  );
}
