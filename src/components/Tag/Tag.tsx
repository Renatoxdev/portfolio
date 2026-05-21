import styles from "./Tag.module.css";
import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

export default function Tag({ children }: TagProps) {
  return <span className={styles.tag}>{children}</span>;
}
