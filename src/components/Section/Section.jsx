import styles from "./Section.module.css";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      </div>
      <div className={styles.body}>{children}</div>
    </section>
  );
}
