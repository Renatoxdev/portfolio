import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import portfolio3 from "../assets/portfolio3.png";
import portfolio4 from "../assets/portfolio4.png";
import portfolio5 from "../assets/portfolio5.png";
import portfolio6 from "../assets/portfolio6.png";

export const projects = [
  {
    slug: "simulador-gastos",
    title: { pt: "Simulador de Gastos", en: "Spending Tracker" },
    summary: {
      pt: "Aplicação para registrar entradas e saídas, com saldo e persistência local.",
      en: "App to track income and expenses with balance and local persistence.",
    },
    tech: {
      pt: ["Next.js", "React", "TypeScript", "PWA"],
      en: ["Next.js", "React", "TypeScript", "PWA"],
    },
    repoUrl: "https://github.com/Renatoxdev/simulador-gastos",
    demoUrl: "",
    images: [portfolio1,portfolio2],
    details: {
      pt: ["Registro de entradas e saídas", "Persistência local"],
      en: ["Income and expense entries", "Local persistence"],
    },
  },
  {
    slug: "microfrontends",
    title: { pt: "Microfrontends", en: "Microfrontends" },
    summary: {
      pt: "Container + micros integrados com Module Federation.",
      en: "Container + micro apps integrated with Module Federation.",
    },
    tech: {
      pt: ["Webpack 5", "Module Federation", "Eventos"],
      en: ["Webpack 5", "Module Federation", "Events"],
    },
    repoUrl: "",
    demoUrl: "",
    images: [portfolio3, portfolio4, portfolio5],
    details: {
      pt: ["Micro Cardápio", "Micro Pedido", "Comunicação via eventos"],
      en: ["Menu micro-app", "Order micro-app", "Event-based communication"],
    },
  },
  {
    slug: "cicd-next",
    title: { pt: "CI/CD Next.js", en: "CI/CD Next.js" },
    summary: {
      pt: "Pipeline com GitHub Actions e deploy automatizado.",
      en: "Pipeline with GitHub Actions and automated deploy.",
    },
    tech: {
      pt: ["Next.js", "GitHub Actions", "Vercel"],
      en: ["Next.js", "GitHub Actions", "Vercel"],
    },
    repoUrl: "",
    demoUrl: "",
    images: [portfolio6],
    details: {
      pt: ["Lint/Build automatizados", "Deploy contínuo"],
      en: ["Automated lint/build", "Continuous deploy"],
    },
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
