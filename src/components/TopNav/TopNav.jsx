import { Link } from "react-router-dom";
import Container from "../Container/Container.jsx";
import Button from "../Button/Button.jsx";
import styles from "./TopNav.module.css";
import { useI18n } from "../../i18n/useI18n.js";

export default function TopNav() {
  const { lang, setLang, t } = useI18n();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link className={styles.brand} to="/">
            Renato.dev
          </Link>

          <nav className={styles.nav}>
            <Link className={styles.link} to="/#about">
              {t("nav.about")}
            </Link>
            <Link className={styles.link} to="/#projects">
              {t("nav.projects")}
            </Link>
            <Link className={styles.link} to="/#skills">
              {t("nav.skills")}
            </Link>
          </nav>

          <div className={styles.right}>
            <div className={styles.lang}>
              <span className={styles.langLabel}>{t("lang.label")}</span>

              <button
                type="button"
                className={`${styles.langBtn} ${lang === "pt" ? styles.langActive : ""}`}
                onClick={() => setLang("pt")}
              >
                {t("lang.pt")}
              </button>

              <button
                type="button"
                className={`${styles.langBtn} ${lang === "en" ? styles.langActive : ""}`}
                onClick={() => setLang("en")}
              >
                {t("lang.en")}
              </button>
            </div>

            <Link className={styles.cta} to="/#contact">
              <Button variant="primary">{t("nav.contact")}</Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
