import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../../components/Container/Container.jsx";
import Section from "../../components/Section/Section.jsx";
import Button from "../../components/Button/Button.jsx";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import styles from "./Home.module.css";
import { projects } from "../../data/projects.js";
import { useI18n } from "../../i18n/useI18n.js";

export default function Home() {
  const { t } = useI18n();
  const location = useLocation();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

  const aboutQuickItems = t("home.aboutQuickItems");
  const frontItems = t("home.skillsFrontItems");
  const stylingItems = t("home.skillsStylingItems");
  const qualityItems = t("home.skillsQualityItems");
  const deployItems = t("home.skillsDeployItems");

  const mailTo = useMemo(() => {
    const to = "Renatoxdev@gmail.com";
    const subject = `Portfolio: ${form.name || "Contato"}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setStatus("");

    const nameOk = form.name.trim().length >= 2;
    const emailOk = form.email.includes("@") && form.email.includes(".");
    const msgOk = form.message.trim().length >= 10;

    if (!nameOk || !emailOk || !msgOk) {
      setStatus(t("home.contactFormInvalid"));
      return;
    }

    setStatus(t("home.contactFormOpening"));
    window.location.href = mailTo;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero} id="top">
          <Container>
            <div className={styles.heroGrid}>
              <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>{t("home.heroTitle")}</h1>
                <p className={styles.heroSubtitle}>{t("home.heroSubtitle")}</p>

                <div className={styles.heroActions}>
                  <a href="#projects" className={styles.anchor}>
                    <Button variant="primary">{t("home.ctaProjects")}</Button>
                  </a>
                  <a href="#contact" className={styles.anchor}>
                    <Button variant="secondary">{t("home.ctaContact")}</Button>
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Section id="about" title={t("home.aboutTitle")} subtitle={t("home.aboutSubtitle")}>
          <Container>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutCard}>
                <h3 className={styles.h3}>{t("home.aboutCardTitle")}</h3>
                <p className={styles.p}>{t("home.aboutCardText")}</p>
              </div>

              <div className={styles.aboutCard}>
                <h3 className={styles.h3}>{t("home.aboutQuickTitle")}</h3>
                <ul className={styles.list}>
                  {(Array.isArray(aboutQuickItems) ? aboutQuickItems : []).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        <Section id="projects" title={t("home.projectsTitle")} subtitle={t("home.projectsSubtitle")}>
          <Container>
            <div className={styles.projectsGrid}>
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Container>
        </Section>

        <Section id="skills" title={t("home.skillsTitle")} subtitle={t("home.skillsSubtitle")}>
          <Container>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCard}>
                <h3 className={styles.h3}>{t("home.skillsFrontTitle")}</h3>
                <ul className={styles.list}>
                  {(Array.isArray(frontItems) ? frontItems : []).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.skillCard}>
                <h3 className={styles.h3}>{t("home.skillsStylingTitle")}</h3>
                <ul className={styles.list}>
                  {(Array.isArray(stylingItems) ? stylingItems : []).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.skillCard}>
                <h3 className={styles.h3}>{t("home.skillsQualityTitle")}</h3>
                <ul className={styles.list}>
                  {(Array.isArray(qualityItems) ? qualityItems : []).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.skillCard}>
                <h3 className={styles.h3}>{t("home.skillsDeployTitle")}</h3>
                <ul className={styles.list}>
                  {(Array.isArray(deployItems) ? deployItems : []).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        <Section id="contact" title={t("home.contactTitle")} subtitle={t("home.contactSubtitle")}>
          <Container>
            <div className={styles.contactGrid}>
              <div className={styles.contactCard}>
                <h3 className={styles.h3}>{t("home.contactLinksTitle")}</h3>
                <div className={styles.links}>
                  <a className={styles.link} href="hhttps://github.com/Renatoxdev" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a className={styles.link} href="https://linkedin.com/" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a className={styles.link} href="mailto:Renatoxdev@gmail.com">
                    Email
                  </a>
                </div>
              </div>

              <div className={styles.contactCard}>
                <h3 className={styles.h3}>{t("home.contactFormTitle")}</h3>

                <form className={styles.form} onSubmit={onSubmit}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">
                      {t("home.contactFormNameLabel")}
                    </label>
                    <input
                      id="name"
                      name="name"
                      className={styles.input}
                      value={form.name}
                      onChange={onChange}
                      placeholder={t("home.contactFormNamePlaceholder")}
                      autoComplete="name"
                    />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">
                      {t("home.contactFormEmailLabel")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      className={styles.input}
                      value={form.email}
                      onChange={onChange}
                      placeholder={t("home.contactFormEmailPlaceholder")}
                      autoComplete="email"
                    />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="message">
                      {t("home.contactFormMessageLabel")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={styles.textarea}
                      value={form.message}
                      onChange={onChange}
                      placeholder={t("home.contactFormMessagePlaceholder")}
                      rows={5}
                    />
                  </div>

                  <div className={styles.formActions}>
                    <Button variant="primary" type="submit">
                      {t("home.contactFormSubmit")}
                    </Button>
                    <a className={styles.mailto} href={mailTo}>
                      mailto
                    </a>
                  </div>

                  <p className={styles.hint}>{t("home.contactFormHint")}</p>
                  {status ? <p className={styles.status}>{status}</p> : null}
                </form>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </div>
  );
}
