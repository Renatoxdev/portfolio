import styles from "./Button.module.css";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  children: ReactNode;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick" | "disabled">;

export default function Button({ variant = "primary", children, type = "button", onClick, disabled }: ButtonProps) {
  const cls = variant === "secondary" ? styles.secondary : styles.primary;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${styles.button} ${cls}`}>
      {children}
    </button>
  );
}
