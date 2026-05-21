import { Link } from "react-router-dom";
import Tag from "../Tag/Tag.jsx";
import styles from "./ProjectCard.module.css";
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

export default function ProjectCard({ project }) {
  const { lang, t } = useI18n();
  const cover = Array.isArray(project.images) ? project.images[0] : undefined;

  const title = pickLang(project.title, lang);
  const summary = pickLang(project.summary, lang);
  const techList = pickList(project.tech, lang).slice(0, 3);

  const imgClass = styles.coverImg || styles.img;

  return (
    <article className={styles.card}>
      <div className={styles.cover}>
        {cover ? (
          <img className={imgClass} src={cover} alt="" />
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.placeholderText}>{t("common.noImage")}</span>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{summary}</p>

        <div className={styles.tags}>
          {techList.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <div className={styles.actions}>
          <Link className={styles.details} to={`/projects/${project.slug}`}>
            {t("common.details")}
          </Link>

          {project.repoUrl ? (
            <a className={styles.action} href={project.repoUrl} target="_blank" rel="noreferrer">
              {t("common.repoShort")}
            </a>
          ) : null}

          {project.demoUrl ? (
            <a className={styles.action} href={project.demoUrl} target="_blank" rel="noreferrer">
              {t("common.demoShort")}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
