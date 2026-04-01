import { useGameState } from '../../game/GameState';
import styles from './SystemEntryDialog.module.css';

interface SystemEntryDialogProps {
  onDismiss: () => void;
}

export function SystemEntryDialog({ onDismiss }: SystemEntryDialogProps) {
  const dialog = useGameState(s => s.pendingSystemEntryDialog);

  if (!dialog) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.panel}>
        <div className={styles.title}>{dialog.title}</div>
        <div className={styles.narrative}>
          {dialog.bodyLines.map((line, i) => (
            <p key={i} className={styles.line}>{line}</p>
          ))}
        </div>
        <button className={styles.dismissBtn} onClick={onDismiss}>
          ACKNOWLEDGE
        </button>
      </div>
    </div>
  );
}
