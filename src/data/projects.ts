import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import portfolio3 from "../assets/portfolio3.png";
import portfolio6 from "../assets/portfolio6.png";
import portfolio7 from "../assets/portfolio7.png";
import portfolio8 from "../assets/portfolio8.png";
import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "ticketflow",
    title: { pt: "TicketFlow", en: "TicketFlow" },
    summary: {
      pt: "Plataforma full stack de sessões de cinema e ingressos com checkout simulado, QR Code e validação na portaria.",
      en: "Full stack movie session and ticketing platform with simulated checkout, QR Code tickets and gate validation.",
    },
    tech: {
      pt: ["React", "TypeScript", "Vite", "FastAPI", "SQLAlchemy", "PostgreSQL", "JWT", "Docker"],
      en: ["React", "TypeScript", "Vite", "FastAPI", "SQLAlchemy", "PostgreSQL", "JWT", "Docker"],
    },
    repoUrl: "https://github.com/Renatoxdev/ticketflow",
    demoUrl: "https://ticketflow-1-sszk.onrender.com/",
    images: [portfolio7, portfolio8],
    details: {
      pt: [
        "Busca de filmes e séries em catálogo externo usando TVMaze",
        "Publicação de sessões com título, sinopse, pôster, data, sala, capacidade e preço",
        "Vitrine de filmes em cartaz com pôsteres clicáveis e exibição de ocupação",
        "Checkout com pagamento simulado e emissão de ingresso com token público e QR Code",
        "Validação de entrada na portaria com bloqueio de reutilização de ingresso",
        "Controle de capacidade com transação e lock no PostgreSQL para evitar overbooking",
      ],
      en: [
        "Movie and TV show search through the external TVMaze catalog",
        "Session publishing with title, synopsis, poster, date, room, capacity and price",
        "Now-showing gallery with clickable posters and occupancy display",
        "Checkout with simulated payment and ticket issuing through public token and QR Code",
        "Gate entry validation with ticket reuse blocking",
        "Capacity control with PostgreSQL transactions and locking to prevent overbooking",
      ],
    },
  },
  {
    slug: "simulador-gastos",
    title: { pt: "Simulador de Gastos", en: "Spending Tracker" },
    summary: {
      pt: "Aplicação full stack para controle de gastos, rendas e saldo financeiro com gráficos.",
      en: "Full stack app for tracking expenses, income and financial balance with charts.",
    },
    tech: {
      pt: ["Next.js", "React", "TypeScript", "FastAPI", "SQLAlchemy", "SQLite", "Pydantic", "PWA"],
      en: ["Next.js", "React", "TypeScript", "FastAPI", "SQLAlchemy", "SQLite", "Pydantic", "PWA"],
    },
    repoUrl: "https://github.com/Renatoxdev/simulador-gastos",
    demoUrl: "https://simulador-gastos.vercel.app/",
    images: [portfolio1, portfolio2],
    details: {
      pt: [
        "Cadastro, listagem e remoção de gastos e rendas",
        "Cálculo de saldo e gráficos de balanço mensal",
        "Exportação dos dados em JSON e alternância de tema claro/escuro",
        "API REST com FastAPI e persistência em SQLite",
        "PWA básico com manifest e service worker",
      ],
      en: [
        "Create, list and delete expenses and income entries",
        "Balance calculation and monthly overview charts",
        "JSON data export and light/dark theme toggle",
        "REST API with FastAPI and SQLite persistence",
        "Basic PWA with manifest and service worker",
      ],
    },
  },
  {
    slug: "estoque-restaurante",
    title: { pt: "Estoque de Restaurante", en: "Restaurant Inventory" },
    summary: {
      pt: "API REST para gerenciamento de estoque de restaurante com interface web moderna.",
      en: "REST API for restaurant inventory management with a modern web interface.",
    },
    tech: {
      pt: ["FastAPI", "SQLAlchemy", "SQLite", "Jinja2", "Python"],
      en: ["FastAPI", "SQLAlchemy", "SQLite", "Jinja2", "Python"],
    },
    repoUrl: "https://github.com/Renatoxdev/Estoque-de-Restaurante",
    demoUrl: "https://restaurant-inventory-nu.vercel.app/",
    images: [portfolio3],
    details: {
      pt: [
        "CRUD completo de produtos com nome, quantidade, preço e categoria",
        "Paginação, ordenação por múltiplos campos e busca por nome",
        "Interface web responsiva com modais, toasts e indicador de status da API",
        "Persistência com SQLite via SQLAlchemy ORM",
      ],
      en: [
        "Full product CRUD with name, quantity, price and category",
        "Pagination, multi-field sorting and search by name",
        "Responsive web UI with modals, toasts and API connection indicator",
        "SQLite persistence via SQLAlchemy ORM",
      ],
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
    repoUrl: "https://github.com/Renatoxdev/landing-ci-cd",
    demoUrl: "https://landing-ci-cd.vercel.app/",
    images: [portfolio6],
    details: {
      pt: ["Lint/Build automatizados", "Deploy contínuo"],
      en: ["Automated lint/build", "Continuous deploy"],
    },
  },
];

export function getProjectBySlug(slug?: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
