import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./Home.module.css";
import { projects } from "../../data/projects";
import { useI18n } from "../../i18n/useI18n";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/SEU_ID_AQUI";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

type SubmitState = "idle" | "loading" | "success" | "error";

export default function Home() {
  const { t } = useI18n();
  const location = useLocation();

  const [form, setForm] = useState<ContactForm>({ name: "", email: "", message: "" });
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [status, setStatus] = useState("");
  const text = (key: string) => String(t(key));

  useEffect(() => {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

  const aboutQuickItems = t("home.aboutQuickItems");
  const frontItems = t("home.skillsFrontItems");
  const stylingItems = t("home.skillsStylingItems");
  const backItems = t("home.skillsBackItems");
  const qualityItems = t("home.skillsQualityItems");
  const deployItems = t("home.skillsDeployItems");

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitState("idle");
    setStatus("");

    const nameOk = form.name.trim().length >= 2;
    const emailOk = form.email.includes("@") && form.email.includes(".");
    const msgOk = form.message.trim().length >= 10;

    if (!nameOk || !emailOk || !msgOk) {
      setSubmitState("error");
      setStatus(text("home.contactFormInvalid"));
      return;
    }

    setSubmitState("loading");
    setStatus(text("home.contactFormSending"));

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Formspree request failed");
      }

      setForm({ name: "", email: "", message: "" });
      setSubmitState("success");
      setStatus(text("home.contactFormSuccess"));
    } catch {
      setSubmitState("error");
      setStatus(text("home.contactFormError"));
    }
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero} id="top">
          <Container>
            <div className={styles.heroGrid}>
              <div className={styles.heroText}>
                <span className={styles.kicker}>Front-end & Back-end / React · Python · Docker</span>
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

                <div className={styles.signalBar} aria-hidden="true">
                  <span>REACT</span>
                  <span>FASTAPI</span>
                  <span>DOCKER</span>
                  <span>SQL</span>
                  <span>VITE</span>
                  <span>CI/CD</span>
                </div>
              </div>

              <div className={styles.heroVisual} aria-hidden="true">
                <svg className={styles.cyberSvg} viewBox="0 0 520 520" role="img">
                  <defs>
                    <linearGradient id="neon-stroke" x1="0%" x2="100%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#00f5ff" />
                      <stop offset="52%" stopColor="#ff2bd6" />
                      <stop offset="100%" stopColor="#f9f871" />
                    </linearGradient>
                    <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.72" />
                      <stop offset="42%" stopColor="#7c3cff" stopOpacity="0.24" />
                      <stop offset="100%" stopColor="#050714" stopOpacity="0" />
                    </radialGradient>
                    <filter id="soft-glow">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <circle className={styles.svgHalo} cx="260" cy="260" r="188" fill="url(#core-glow)" />
                  <path
                    className={styles.svgOrbit}
                    d="M260 68 424 164v192L260 452 96 356V164z"
                    fill="none"
                    stroke="url(#neon-stroke)"
                    strokeWidth="3"
                    filter="url(#soft-glow)"
                  />
                  <path
                    className={styles.svgOrbitAlt}
                    d="M260 122 378 190v140L260 398 142 330V190z"
                    fill="none"
                    stroke="#00f5ff"
                    strokeWidth="2"
                    strokeDasharray="18 16"
                  />
                  <g className={styles.svgCircuit} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M260 122v72m0 132v72M142 190l66 38m104 64 66 38M142 330l66-38m104-64 66-38" />
                    <path d="M208 228h104v64H208z" />
                    <path d="M184 260H92m336 0h-92M260 194h-62m124 132h-62" />
                  </g>
                  <g className={styles.svgNodes}>
                    <circle cx="260" cy="122" r="7" />
                    <circle cx="378" cy="190" r="7" />
                    <circle cx="378" cy="330" r="7" />
                    <circle cx="260" cy="398" r="7" />
                    <circle cx="142" cy="330" r="7" />
                    <circle cx="142" cy="190" r="7" />
                    <circle cx="260" cy="260" r="16" />
                  </g>
                  <g className={styles.svgCode}>
                    <text x="178" y="252">{"<Javascript />"}</text>
                    <text x="236" y="286">Python</text>
                  </g>
                </svg>
                <div className={styles.visualHud}>
                  <span>available_for_work</span>
                  <strong>ONLINE</strong>
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

              {/* ↓ Card novo — Back-end */}
              <div className={styles.skillCard}>
                <h3 className={styles.h3}>{t("home.skillsBackTitle")}</h3>
                <ul className={styles.list}>
                  {(Array.isArray(backItems) ? backItems : []).map((item) => (
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
                  <a
                    className={styles.link}
                    href="https://github.com/Renatoxdev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className={styles.link}
                    href="https://www.linkedin.com/in/renato-noronha-aa1402176/"
                        target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a className={styles.link} href="mailto:Renatoxdev@gmail.com">
                    Email
                  </a>
                  <a
                    className={`${styles.link} ${styles.whatsappLink}`}
                    href="https://wa.me/5524993120479"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
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
                      placeholder={text("home.contactFormNamePlaceholder")}
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
                      type="email"
                      className={styles.input}
                      value={form.email}
                      onChange={onChange}
                      placeholder={text("home.contactFormEmailPlaceholder")}
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
                      placeholder={text("home.contactFormMessagePlaceholder")}
                      rows={5}
                    />
                  </div>

                  <div className={styles.formActions}>
                    <Button variant="primary" type="submit" disabled={submitState === "loading"}>
                      {submitState === "loading" ? t("home.contactFormSending") : t("home.contactFormSubmit")}
                    </Button>
                  </div>

                  {status ? (
                    <p className={`${styles.status} ${styles[`status${submitState}`]}`} aria-live="polite">
                      {status}
                    </p>
                  ) : null}
                </form>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </div>
  );
}
