import styles from "./style.module.css";

export function Frame() {
  return (
    <header className={`frame ${styles.frame}`}>
      <h1 className={styles.frame__title}>С днём рождения,<br />моя любимая Алюня</h1>     
    </header>
  );
}
