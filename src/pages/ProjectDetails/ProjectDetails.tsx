import { Link, useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import ProjectActions from "../../components/ProjectActions/ProjectActions";
import Tag from "../../components/Tag/Tag";
import styles from "./ProjectDetails.module.css";
import { getProjectBySlug } from "../../data/projects";
import { useI18n } from "../../i18n/useI18n";

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

  const images = project.images;
  const title = project.title[lang];
  const summary = project.summary[lang];
  const details = project.details[lang];
  const techList = project.tech[lang];

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

            <ProjectActions project={project} className={styles.pageActions} />
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
              <ImageSlider images={images} alt={title} emptyLabel={t("common.noImage")} variant="detail" />
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
