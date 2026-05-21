import styles from "./Section.module.css";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
};

export default function Section({ id, title, subtitle, children }: SectionProps) {
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
