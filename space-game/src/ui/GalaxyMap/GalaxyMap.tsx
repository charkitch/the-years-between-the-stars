import { useRef, useEffect, useState, useCallback } from 'react';
import { useGameState } from '../../game/GameState';
import { HyperspaceSystem } from '../../game/mechanics/HyperspaceSystem';
import { jumpYearsElapsed } from '../../game/mechanics/RelativisticTime';
import type { StarSystemData } from '../../game/generation/GalaxyGenerator';
import { HYPERSPACE } from '../../game/constants';
import styles from './GalaxyMap.module.css';

const hyperspace = new HyperspaceSystem();
const MAP_W = 520;
const MAP_H = 420;

function toCanvas(x: number, y: number): [number, number] {
  return [x * MAP_W / 100, y * MAP_H / 100];
}

const STAR_TYPE_COLOR: Record<string, string> = {
  G: '#FFEE88', K: '#FFAA44', M: '#FF6633', F: '#FFFFFF', A: '#AABBFF',
};

interface GalaxyMapProps {
  onClose: () => void;
  onJump: () => void;
}

export function GalaxyMap({ onClose, onJump }: GalaxyMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const galaxy = useGameState(s => s.galaxy);
  const currentSystemId = useGameState(s => s.currentSystemId);
  const visitedSystems = useGameState(s => s.visitedSystems);
  const player = useGameState(s => s.player);
  const hyperspaceTarget = useGameState(s => s.ui.hyperspaceTarget);
  const setHyperspaceTarget = useGameState(s => s.setHyperspaceTarget);
  const galaxyYear = useGameState(s => s.galaxyYear);
  const jumpLog = useGameState(s => s.jumpLog);

  const currentSys = galaxy[currentSystemId];
  const reachable = hyperspace.getReachableSystems(currentSys, galaxy);
  const reachableIds = new Set(reachable.map(s => s.id));

  const [hovered, setHovered] = useState<StarSystemData | null>(null);

  // Compute years-elapsed preview for hovered/targeted system
  const previewSys = hovered ?? (hyperspaceTarget !== null ? galaxy[hyperspaceTarget] : null);
  const previewYears = previewSys && previewSys.id !== currentSystemId
    ? (() => {
        const dx = previewSys.x - currentSys.x;
        const dy = previewSys.y - currentSys.y;
        return jumpYearsElapsed(Math.sqrt(dx * dx + dy * dy));
      })()
    : null;

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, MAP_W, MAP_H);
    ctx.fillStyle = '#010206';
    ctx.fillRect(0, 0, MAP_W, MAP_H);

    // Range ring
    const [cx, cy] = toCanvas(currentSys.x, currentSys.y);
    const rangePixels = (HYPERSPACE.maxRange / 100) * MAP_W;
    ctx.strokeStyle = 'rgba(51,255,136,0.2)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(cx, cy, rangePixels, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Systems
    for (const sys of galaxy) {
      const [sx, sy] = toCanvas(sys.x, sys.y);
      const isReachable = reachableIds.has(sys.id);
      const isCurrent = sys.id === currentSystemId;
      const isTarget = sys.id === hyperspaceTarget;
      const isVisited = visitedSystems.has(sys.id);

      // Line to reachable
      if (isReachable) {
        ctx.strokeStyle = 'rgba(51,255,136,0.15)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(sx, sy);
        ctx.stroke();
      }

      const color = STAR_TYPE_COLOR[sys.starType] ?? '#FFFFFF';
      const r = isCurrent ? 7 : isTarget ? 6 : 4;

      // Glow for target
      if (isTarget) {
        const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, 20);
        grad.addColorStop(0, 'rgba(68,204,255,0.5)');
        grad.addColorStop(1, 'rgba(68,204,255,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(sx, sy, 20, 0, Math.PI * 2);
        ctx.fill();
      }

      // Glow for hovered
      if (hovered?.id === sys.id && !isTarget && !isCurrent) {
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(sx, sy, r + 3, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(sx, sy, r, 0, Math.PI * 2);
      ctx.fillStyle = isCurrent ? '#33FF88' : isTarget ? '#44CCFF' : isVisited ? color : `${color}66`;
      ctx.fill();

      if (!isVisited && !isReachable && !isCurrent) {
        ctx.strokeStyle = 'rgba(255,255,255,0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Name label
      if (isCurrent || isTarget || hovered?.id === sys.id) {
        ctx.fillStyle = isCurrent ? '#33FF88' : isTarget ? '#44CCFF' : '#FFFFFF';
        ctx.font = '10px Courier New';
        ctx.fillText(sys.name.toUpperCase(), sx + 8, sy + 4);
      }
    }
  }, [galaxy, currentSystemId, visitedSystems, hyperspaceTarget, reachableIds, hovered, currentSys]);

  useEffect(() => { draw(); }, [draw]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;

    let nearest: StarSystemData | null = null;
    let nearestDist = Infinity;
    for (const sys of galaxy) {
      const d = Math.hypot(sys.x - mx, sys.y - my);
      if (d < nearestDist && d < 6) { nearest = sys; nearestDist = d; }
    }

    if (nearest && nearest.id !== currentSystemId && reachableIds.has(nearest.id)) {
      setHyperspaceTarget(nearest.id);
    }
  };

  const handleCanvasMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;

    let nearest: StarSystemData | null = null;
    let nearestDist = Infinity;
    for (const sys of galaxy) {
      const d = Math.hypot(sys.x - mx, sys.y - my);
      if (d < nearestDist && d < 6) { nearest = sys; nearestDist = d; }
    }
    setHovered(nearest);
  };

  const selectedSys = hyperspaceTarget !== null ? galaxy[hyperspaceTarget] : null;
  const jumpCost = selectedSys ? hyperspace.jumpCost(currentSys, selectedSys) : 0;
  const canJump = selectedSys
    ? hyperspace.canJump(currentSys, selectedSys, player.fuel).ok
    : false;

  const handleJump = () => {
    if (!canJump) return;
    onJump();
  };

  // Jump log: show system names
  const recentJumps = jumpLog.slice(0, 5);

  return (
    <div className={styles.overlay} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={styles.panel}>
        <div className={styles.title}>
          GALAXY CHART
          <span style={{ fontSize: '11px', letterSpacing: '2px', color: 'var(--color-hud-dim)', marginLeft: '16px' }}>
            YEAR {galaxyYear.toLocaleString()}
          </span>
        </div>
        <canvas
          ref={canvasRef}
          width={MAP_W}
          height={MAP_H}
          className={styles.canvas}
          onClick={handleCanvasClick}
          onMouseMove={handleCanvasMove}
        />
        <div className={styles.info}>
          <div>
            <div>CURRENT: <span className={styles.selected}>{currentSys.name.toUpperCase()}</span></div>
            {selectedSys && (
              <div style={{ marginTop: '4px' }}>
                TARGET: <span className={styles.selected}>{selectedSys.name.toUpperCase()}</span>
                <br />
                FUEL COST: {jumpCost.toFixed(1)} / {player.fuel.toFixed(1)}
                <br />
                {(() => {
                  const dx = selectedSys.x - currentSys.x;
                  const dy = selectedSys.y - currentSys.y;
                  const yrs = jumpYearsElapsed(Math.sqrt(dx * dx + dy * dy));
                  return <span style={{ color: 'var(--color-warning)' }}>+{yrs.toLocaleString()} YRS</span>;
                })()}
                <br />
                TECH LV: {selectedSys.techLevel} · {selectedSys.economy}
              </div>
            )}
            {previewYears !== null && !selectedSys && hovered && reachableIds.has(hovered.id) && (
              <div style={{ marginTop: '4px', color: 'var(--color-warning)', fontSize: '11px' }}>
                HOVER: {hovered.name.toUpperCase()} +{previewYears.toLocaleString()} YRS
              </div>
            )}
          </div>
          <div>
            {recentJumps.length > 0 && (
              <div style={{ fontSize: '10px', opacity: 0.7 }}>
                <div style={{ marginBottom: '3px', letterSpacing: '1px' }}>RECENT JUMPS</div>
                {recentJumps.map((entry, i) => {
                  const fromName = galaxy[entry.fromSystemId]?.name ?? '?';
                  const toName = galaxy[entry.toSystemId]?.name ?? '?';
                  return (
                    <div key={i} style={{ marginBottom: '2px' }}>
                      {fromName.toUpperCase()} → {toName.toUpperCase()}
                      <span style={{ color: 'var(--color-warning)', marginLeft: 4 }}>
                        +{entry.yearsElapsed.toLocaleString()}Y
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
            <div className={styles.hint} style={{ marginTop: recentJumps.length > 0 ? '8px' : 0 }}>
              Click to select target<br />
              G or ESC to close<br />
              J to initiate jump
            </div>
          </div>
        </div>
        <button
          className={styles.jumpBtn}
          disabled={!canJump}
          onClick={handleJump}
        >
          {canJump ? `JUMP TO ${selectedSys?.name.toUpperCase()}` : selectedSys ? 'INSUFFICIENT FUEL' : 'SELECT TARGET'}
        </button>
      </div>
    </div>
  );
}
