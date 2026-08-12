import ImageSlider from "../ImageSlider/ImageSlider";
import ProjectActions from "../ProjectActions/ProjectActions";
import Tag from "../Tag/Tag";
import styles from "./ProjectCard.module.css";
import { useI18n } from "../../i18n/useI18n";
import type { Project } from "../../types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { lang, t } = useI18n();

  const title = project.title[lang];
  const summary = project.summary[lang];
  const techList = project.tech[lang].slice(0, 3);

  return (
    <article className={styles.card}>
      <div className={styles.cover}>
        <ImageSlider images={project.images} alt={title} emptyLabel={t("common.noImage")} />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{summary}</p>

        <div className={styles.tags}>
          {techList.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <ProjectActions project={project} detailsHref={`/projects/${project.slug}`} className={styles.actions} />
      </div>
    </article>
  );
}
