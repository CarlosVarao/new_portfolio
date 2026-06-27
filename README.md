# Carlos Varão — Website Pessoal Executivo

Apresentação profissional interativa (single page) construída com **React + TypeScript + Tailwind CSS + Framer Motion**, com modo escuro/claro, animações de surgimento no scroll e arquitetura componentizada e escalável.

---

## 🚀 Como rodar

Pré-requisito: **Node.js 18+** instalado.

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento (http://localhost:5173)
npm run dev

# 3. Verificar qualidade do código (ESLint)
npm run lint

# 4. Formatar o código (Prettier)
npm run format

# 5. Gerar build de produção (pasta dist/)
npm run build

# 6. Pré-visualizar o build
npm run preview
```

> Imports internos usam o alias **`@/`** (ex.: `@/components/...`, `@/data/...`),
> configurado em `vite.config.ts` e `tsconfig.json`. Imports entre arquivos
> vizinhos (ex.: `./types` dentro de `data/`) permanecem relativos.

---

## 🗂️ Estrutura de pastas

```
react-app/
├── index.html               # HTML raiz + meta tags de SEO + fontes
├── package.json
├── vite.config.ts           # Configuração do Vite + alias @/
├── tailwind.config.ts       # Tema, cores semânticas e animações
├── postcss.config.js
├── eslint.config.js         # ESLint (flat config — padrão atual)
├── .prettierrc.json         # Formatação (Prettier + plugin Tailwind)
├── .nvmrc                   # Versão recomendada do Node
├── tsconfig.json
└── src/
    ├── main.tsx             # Ponto de entrada (React DOM)
    ├── App.tsx              # Composição das seções
    ├── index.css           # Tokens de tema (dark/light) + base Tailwind
    ├── context/
    │   └── ThemeContext.tsx # Modo escuro/claro com persistência
    ├── components/
    │   ├── Navbar.tsx
    │   ├── ThemeToggle.tsx
    │   ├── Reveal.tsx        # Animação de scroll (Framer Motion)
    │   ├── icons/
    │   │   └── BrandIcons.tsx  # GitHub / LinkedIn (SVG)
    │   ├── ui/
    │   │   ├── SectionHeading.tsx
    │   │   └── PhotoPlaceholder.tsx
    │   └── sections/
    │       ├── Hero.tsx
    │       ├── About.tsx
    │       ├── Timeline.tsx
    │       ├── Skills.tsx
    │       ├── Projects.tsx
    │       ├── Differentials.tsx
    │       ├── Education.tsx
    │       └── Contact.tsx
    └── data/                # Conteúdo separado da apresentação
        ├── types.ts
        ├── nav.ts
        ├── about.ts
        ├── timeline.ts
        ├── skills.ts
        ├── projects.ts
        ├── differentials.ts
        ├── education.ts
        └── socials.ts
```

---

## ✏️ Como personalizar (conteúdo real)

Todo o conteúdo fica isolado em `src/data/` — **você não precisa mexer no layout**:

- **Trajetória:** `src/data/timeline.ts` (hoje com `Lorem ipsum`)
- **Sobre mim:** `src/data/about.ts`
- **Competências:** `src/data/skills.ts`
- **Projetos:** `src/data/projects.ts`
- **Diferenciais:** `src/data/differentials.ts`
- **Formação/Certificações:** `src/data/education.ts`
- **Redes sociais:** `src/data/socials.ts`

### Trocar as fotos
Os placeholders ficam no componente `PhotoPlaceholder`. Para usar fotos reais:

1. Coloque a imagem em `public/` (ex.: `public/foto-perfil.jpg`).
2. Em `src/components/sections/Hero.tsx` e `About.tsx`, substitua o
   `<PhotoPlaceholder ... />` por:

```tsx
<img
  src="/foto-perfil.jpg"
  alt="Carlos Varão"
  className="h-full w-full rounded-[18px] border border-line2 object-cover"
/>
```

### Currículo
No `Hero.tsx`, o botão "Baixar currículo" aponta para `#formacao`. Para um PDF,
coloque o arquivo em `public/curriculo.pdf` e troque o `href` por
`href="/curriculo.pdf" download`.

### Cores / tema
As cores são tokens CSS em `src/index.css` (`:root` para o tema escuro,
`html.light` para o claro). Mude `--accent` para trocar a cor de destaque.

---

## ✨ Recursos incluídos

- Single page com rolagem vertical e navegação por âncoras suaves
- Modo escuro/claro com persistência em `localStorage`
- Animações elegantes de surgimento no scroll (Framer Motion)
- Layout totalmente responsivo (desktop, tablet, mobile)
- Componentização e camada de dados separada (Clean Code)
- SEO básico e acessibilidade (labels, `prefers-reduced-motion`)

---

Design e Construção por **Carlos Varão** © 2026
