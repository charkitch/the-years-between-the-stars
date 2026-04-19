import type { SceneEntity } from '../../game/rendering/SceneRenderer';
import { isScannableHost } from '../../game/rendering/scene/types';
import type { SecretBaseData } from '../../game/engine';
import styles from './HUD.module.css';

const SECRET_BASE_COLORS: Record<string, string> = {
  asteroid: '#AA7744',
  oort_cloud: '#4488CC',
  maximum_space: '#8844FF',
};

interface TargetInfoPanelProps {
  targetEntity: SceneEntity | null | undefined;
  targetSecretBase: SecretBaseData | undefined;
  targetDist: number;
  targetIsScanned: boolean;
  targetSiteTotal: number;
  targetSiteDiscovered: number;
  isMobileHUD: boolean;
}

export function TargetInfoPanel({
  targetEntity,
  targetSecretBase,
  targetDist,
  targetIsScanned,
  targetSiteTotal,
  targetSiteDiscovered,
  isMobileHUD,
}: TargetInfoPanelProps) {
  return (
    <div className={styles.topRight}>
      {targetEntity ? (
        <div className={styles.targetInfo}>
          {targetSecretBase ? (
            <SecretBaseTarget base={targetSecretBase} dist={targetDist} isMobile={isMobileHUD} />
          ) : (
            <EntityTarget
              entity={targetEntity}
              dist={targetDist}
              isScanned={targetIsScanned}
              siteTotal={targetSiteTotal}
              siteDiscovered={targetSiteDiscovered}
              isMobile={isMobileHUD}
            />
          )}
        </div>
      ) : (
        <div className={styles.targetInfo}>
          <div className={styles.targetLabel}>NO TARGET</div>
          <div className={styles.targetHint}>
            {isMobileHUD ? 'ACTIONS > TARGET' : 'TAB to cycle'}
          </div>
        </div>
      )}
    </div>
  );
}

function SecretBaseTarget({ base, dist, isMobile }: { base: SecretBaseData; dist: number; isMobile: boolean }) {
  const color = SECRET_BASE_COLORS[base.type] ?? '#8844FF';
  return (
    <>
      <div className={styles.targetLabel} style={{ color }}>SIGNAL</div>
      <div>{base.name.toUpperCase()}</div>
      <div className={styles.targetDist}>DIST: {dist} wu</div>
      <div className={styles.targetDetail}>
        TYPE: {base.type === 'asteroid' ? 'ASTEROID BASE'
          : base.type === 'oort_cloud' ? 'OORT CLOUD BASE'
          : 'VOID STATION'}
      </div>
      {!isMobile && <div className={styles.targetAction} style={{ color }}>F TO DOCK</div>}
    </>
  );
}

function EntityTarget({
  entity, dist, isScanned, siteTotal, siteDiscovered, isMobile,
}: {
  entity: SceneEntity;
  dist: number;
  isScanned: boolean;
  siteTotal: number;
  siteDiscovered: number;
  isMobile: boolean;
}) {
  return (
    <>
      <div className={styles.targetLabel}>TARGET</div>
      <div>{entity.name.toUpperCase()}</div>
      <div className={styles.targetDist}>DIST: {dist} wu</div>
      <div className={styles.targetDetail}>
        TYPE: {entity.type === 'dyson_shell'
          ? 'DYSON SHELL'
          : entity.type === 'topopolis'
          ? 'TOPOPOLIS'
          : entity.type === 'landing_site'
            ? `SITE · ${(entity.siteClassification ?? 'unknown').split('_').join(' ').toUpperCase()}`
            : entity.type.toUpperCase()}
      </div>
      {entity.type === 'landing_site' && entity.siteHostLabel && (
        <div className={styles.targetDetail}>HOST: {entity.siteHostLabel.toUpperCase()}</div>
      )}
      {(isScannableHost(entity.type) || entity.type === 'landing_site') && (
        <div className={styles.targetScan}>
          SCAN: {isScanned ? 'SCANNED' : 'UNSCANNED'}
          {isScanned ? ` · SITES ${siteDiscovered}/${siteTotal}` : ''}
        </div>
      )}
      {!isMobile && entity.type === 'landing_site' && (
        <div className={styles.targetActionLand}>F TO LAND</div>
      )}
    </>
  );
}
