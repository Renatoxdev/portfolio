import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import { useI18n } from "../../i18n/useI18n";
import styles from "./NotFound.module.css";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <div className={styles.page}>
      <Container>
        <div className={styles.panel}>
          <span className={styles.code}>404 / signal_lost</span>
          <h1 className={styles.title}>{t("notFound.title")}</h1>
          <p className={styles.text}>{t("notFound.text")}</p>
          <Link to="/" className={styles.back}>
            {t("notFound.back")}
          </Link>
        </div>
      </Container>
    </div>
  );
}
