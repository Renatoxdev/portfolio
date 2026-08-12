import { Link } from "react-router-dom";
import styles from "./ProjectActions.module.css";
import { useI18n } from "../../i18n/useI18n";
import type { Project } from "../../types/project";

type ProjectActionsProps = {
  project: Project;
  detailsHref?: string;
  className?: string;
};

type Platform = "github" | "vercel" | "render" | "demo";

function getPlatform(url: string): Platform {
  if (url.includes("github.com")) return "github";
  if (url.includes("vercel.app")) return "vercel";
  if (url.includes("onrender.com")) return "render";
  return "demo";
}

function getDemoLabel(url: string, fallback: string) {
  const platform = getPlatform(url);

  if (platform === "vercel") return "Vercel";
  if (platform === "render") return "Render";

  return fallback;
}

function PlatformIcon({ platform }: { platform: Platform }) {
  if (platform === "github") {
    return (
      <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.19-3.37-1.19-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.58 9.58 0 0 1 12 5.97c.85 0 1.7.11 2.5.33 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
        />
      </svg>
    );
  }

  if (platform === "vercel") {
    return (
      <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 3 22 20H2L12 3Z" />
      </svg>
    );
  }

  if (platform === "render") {
    return (
      <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M5 5h7.6a6.4 6.4 0 0 1 0 12H9v3H5V5Zm4 4v4h3.4a2 2 0 1 0 0-4H9Zm9.2 7.5 2.8 3.5h-4.8l-2.5-3.2h1.2c1.24 0 2.36-.1 3.3-.3Z" />
      </svg>
    );
  }

  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z" />
    </svg>
  );
}

export default function ProjectActions({ project, detailsHref, className = "" }: ProjectActionsProps) {
  const { t } = useI18n();

  return (
    <div className={`${styles.actions} ${className}`}>
      {detailsHref ? (
        <Link className={`${styles.link} ${styles.details}`} to={detailsHref}>
          {t("common.details")}
        </Link>
      ) : null}

      {project.repoUrl ? (
        <a className={styles.link} href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`${project.title.pt} GitHub`}>
          <PlatformIcon platform="github" />
          <span>GitHub</span>
        </a>
      ) : null}

      {project.demoUrl ? (
        <a className={styles.link} href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`${project.title.pt} ${getDemoLabel(project.demoUrl, String(t("common.demoShort")))}`}>
          <PlatformIcon platform={getPlatform(project.demoUrl)} />
          <span>{getDemoLabel(project.demoUrl, String(t("common.demoShort")))}</span>
        </a>
      ) : null}
    </div>
  );
}
