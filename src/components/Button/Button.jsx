import styles from "./Button.module.css";

export default function Button({ variant = "primary", children, type = "button", onClick }) {
  const cls = variant === "secondary" ? styles.secondary : styles.primary;
  return (
    <button type={type} onClick={onClick} className={`${styles.button} ${cls}`}>
      {children}
    </button>
  );
}
