import { Link, useParams } from "react-router-dom";
import Container from "../../components/Container/Container.jsx";
import Tag from "../../components/Tag/Tag.jsx";
import styles from "./ProjectDetails.module.css";
import { getProjectBySlug } from "../../data/projects.js";
import { useI18n } from "../../i18n/useI18n.js";

function pickLang(value, lang) {
  if (typeof value === "string") return value;
  if (value && typeof value === "object") return value[lang] ?? value.pt ?? "";
  return "";
}

function pickList(value, lang) {
  if (Array.isArray(value)) return value;
  if (value && typeof value === "object" && Array.isArray(value[lang])) return value[lang];
  if (value && typeof value === "object" && Array.isArray(value.pt)) return value.pt;
  return [];
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const { lang, t } = useI18n();

  if (!project) {
    return (
      <div className={styles.page}>
        <Container>
          <div className={styles.header}>
            <h1 className={styles.pageTitle}>{t("project.notFoundTitle")}</h1>
            <Link className={styles.back} to="/">
              {t("project.back")}
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  const images = Array.isArray(project.images) ? project.images : [];
  const title = pickLang(project.title, lang);
  const summary = pickLang(project.summary, lang);
  const details = pickList(project.details, lang);
  const techList = pickList(project.tech, lang);

  return (
    <div className={styles.page}>
      <Container>
        <div className={styles.top}>
          <Link className={styles.back} to="/">
            {t("project.backHome")}
          </Link>

          <div className={styles.head}>
            <h1 className={styles.pageTitle}>{title}</h1>
            <p className={styles.pageSummary}>{summary}</p>

            <div className={styles.pageTags}>
              {techList.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>

            <div className={styles.pageActions}>
              {project.repoUrl ? (
                <a className={styles.pageAction} href={project.repoUrl} target="_blank" rel="noreferrer">
                  {t("project.repo")}
                </a>
              ) : null}

              {project.demoUrl ? (
                <a className={styles.pageAction} href={project.demoUrl} target="_blank" rel="noreferrer">
                  {t("project.demo")}
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          <section className={styles.card}>
            <h2 className={styles.h2}>{t("project.overview")}</h2>
            <ul className={styles.list}>
              {details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={styles.card}>
            <h2 className={styles.h2}>{t("project.screenshots")}</h2>

            {images.length ? (
              <div className={styles.gallery}>
                {images.map((src) => (
                  <div key={src} className={styles.shot}>
                    <img className={styles.shotImg} src={src} alt="" />
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.emptyShots}>
                <p className={styles.emptyTitle}>{t("project.noShotsTitle")}</p>
                <p className={styles.emptyText}>{t("project.noShotsText")}</p>
              </div>
            )}
          </section>
        </div>
      </Container>
    </div>
  );
}
