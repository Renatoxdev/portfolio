# Portfólio (React + Vite)

Portfólio online desenvolvido com **React + Vite**, focado em apresentar projetos, habilidades e formas de contato de forma simples, responsiva e profissional.  
Inclui **navegação por seções**, **página de detalhes do projeto** e **toggle de idioma (PT/EN)**.

---

## ✨ Funcionalidades

- Página inicial com seções: **Sobre**, **Projetos**, **Habilidades** e **Contato**
- Lista de projetos com cards e navegação para **detalhes do projeto**
- **Galeria de screenshots** por projeto (opcional)
- **Formulário de contato** (sem backend) que abre o cliente de e-mail via `mailto:`
- **Internacionalização (i18n)**: alterna entre **Português** e **Inglês** em todas as páginas
- Layout **responsivo** (mobile e desktop)
- Estilização com **CSS Modules**

---

## 🧰 Tecnologias

- React
- Vite
- React Router
- CSS Modules

---

## ▶️ Rodando localmente

### Pré-requisitos
- Node.js (recomendado: LTS)
- npm (ou yarn/pnpm)

### Passos

```bash
npm install
npm run dev
```

Abra no navegador:
- http://localhost:5173

---

## 📦 Scripts

- `npm run dev` — ambiente de desenvolvimento
- `npm run build` — gera build de produção
- `npm run preview` — serve a build localmente para testes

---

## 🗂 Estrutura do projeto

Estrutura (resumo):

- `src/pages/` — páginas (Home, ProjectDetails, NotFound)
- `src/components/` — componentes reutilizáveis (TopNav, ProjectCard, Container, etc.)
- `src/data/projects.js` — lista de projetos exibidos no portfólio
- `src/i18n/` — internacionalização (Provider, hook e traduções)
- `src/styles/` — estilos globais
- `src/assets/` — imagens usadas (ex.: thumbnails/screen)

---

## 🧩 Como adicionar/editar projetos

Edite o arquivo:

- `src/data/projects.js`

Cada projeto segue o formato:

- `title`, `summary`, `details`, `tech`: objetos com `{ pt, en }`
- `images`: array de imports (ex.: `import thumb from "../assets/portfolio1.png";`)
- `repoUrl` e `demoUrl`: links opcionais

Exemplo simplificado:

```js
import thumb from "../assets/portfolio1.png";

export const projects = [
  {
    slug: "meu-projeto",
    title: { pt: "Meu Projeto", en: "My Project" },
    summary: { pt: "Resumo...", en: "Summary..." },
    tech: { pt: ["React"], en: ["React"] },
    repoUrl: "https://github.com/...",
    demoUrl: "https://...",
    images: [thumb],
    details: { pt: ["Item 1"], en: ["Item 1"] },
  },
];
```

---

## 🌍 Internacionalização (PT/EN)

Arquivos principais:

- `src/i18n/I18nProvider.jsx` — estado global do idioma + função `t(key)`
- `src/i18n/useI18n.js` — hook `useI18n()`
- `src/i18n/translations.js` — dicionário de traduções

Para editar textos do site (títulos, botões, seções, etc.), modifique:

- `src/i18n/translations.js`

Observação: imagens de screenshots podem continuar em português sem problema. O toggle afeta o **conteúdo textual** do site.

---

## ✉️ Contato (Formulário)

O formulário da seção **Contato** não usa backend.
Ao enviar, ele abre seu cliente de e-mail com a mensagem preenchida usando `mailto:`.

Para mudar o e-mail destino, procure por `seuemail@exemplo.com` no `Home.jsx` e substitua pelo seu e-mail real.

---

## 🚀 Deploy

Você pode publicar gratuitamente em **Vercel**, **Netlify** ou **GitHub Pages**.

### Opção A: Vercel (recomendado)

1. Suba o repositório no GitHub
2. Na Vercel, importe o repo
3. Framework: **Vite**
4. Build command: `npm run build`
5. Output: `dist`

### Opção B: Netlify

1. Suba o repositório no GitHub
2. No Netlify, “New site from Git”
3. Build command: `npm run build`
4. Publish directory: `dist`

### Opção C: GitHub Pages (Vite)

No GitHub Pages, normalmente você precisa configurar o `base` no Vite quando o deploy é em subpasta
(ex.: `https://usuario.github.io/nome-do-repo/`).

Edite `vite.config.js` e defina:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/NOME_DO_REPO/",
});
```

Depois faça build e publique a pasta `dist` usando um workflow (GitHub Actions) ou `gh-pages`.

---

## 🔗 Links

- Repositório: (coloque aqui)
- Demo online: (coloque aqui)

---

## 🧾 Licença

Projeto para fins educacionais e portfólio.
