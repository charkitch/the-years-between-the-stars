import { useGameState } from '../../game/GameState';
import type { GoodName } from '../../game/constants';
import styles from './CommDialog.module.css';

interface CommDialogProps {
  onTrade: (action: 'buy' | 'sell', good: GoodName) => void;
  onDismiss: () => void;
}

export function CommDialog({ onTrade, onDismiss }: CommDialogProps) {
  const ctx = useGameState(s => s.pendingCommContext);
  const player = useGameState(s => s.player);

  if (!ctx) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.panel}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className={styles.dimLabel}>◈ VESSEL: </span>
            <span className={styles.vesselName}>{ctx.npcName}</span>
            <span className={styles.dimLabel}>  ORIGIN: </span>
            <span className={styles.originName}>{ctx.originSystemName}</span>
          </div>
          {ctx.factionTag && (
            <div className={styles.faction}>FACTION: {ctx.factionTag}</div>
          )}
        </div>

        {/* Comm lines */}
        <div className={styles.commLines}>
          <p className={styles.commLine}>"{ctx.commLines[0]}"</p>
          <p className={styles.commLine}>"{ctx.commLines[1]}"</p>
        </div>

        {/* Manifest */}
        <div className={styles.manifestSection}>
          <div className={styles.manifestTitle}>MANIFEST</div>
          <div className={styles.manifestHeader}>
            <span>Good</span>
            <span>Buy</span>
            <span>Sell</span>
            <span>Qty</span>
            <span></span>
          </div>
          {ctx.cargo.map(entry => {
            const canBuy = player.credits >= entry.buyPrice;
            const canSell = (player.cargo[entry.good] ?? 0) > 0;
            return (
              <div key={entry.good} className={styles.manifestRow}>
                <span className={styles.goodName}>{entry.good}</span>
                <span className={styles.price}>{entry.buyPrice} CR</span>
                <span className={styles.price}>{entry.sellPrice} CR</span>
                <span className={styles.qty}>{entry.qty}</span>
                <span className={styles.tradeButtons}>
                  <button
                    className={styles.tradeBtn}
                    disabled={!canBuy}
                    onClick={() => onTrade('buy', entry.good)}
                    title={!canBuy ? 'Insufficient credits' : undefined}
                  >
                    BUY
                  </button>
                  <button
                    className={styles.tradeBtn}
                    disabled={!canSell}
                    onClick={() => onTrade('sell', entry.good)}
                    title={!canSell ? 'None in cargo' : undefined}
                  >
                    SELL
                  </button>
                </span>
              </div>
            );
          })}
        </div>

        {/* Dismiss */}
        <div className={styles.actions}>
          <button className={styles.dismissBtn} onClick={onDismiss}>
            DISMISS
          </button>
        </div>
      </div>
    </div>
  );
}
