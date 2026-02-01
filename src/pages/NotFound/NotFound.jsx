import { Link } from "react-router-dom";
import Container from "../../components/Container/Container.jsx";
import { useI18n } from "../../i18n/useI18n.js";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <div style={{ padding: "40px 0" }}>
      <Container>
        <h1 style={{ margin: 0 }}>{t("notFound.title")}</h1>
        <p style={{ marginTop: 10, color: "var(--muted)" }}>{t("notFound.text")}</p>
        <Link to="/" style={{ color: "var(--text)", fontWeight: 900 }}>
          {t("notFound.back")}
        </Link>
      </Container>
    </div>
  );
}
