# Ayushman Banerjee: portfolio

Personal site for Ayushman Banerjee, Generative AI and LLM engineer. Built with React, Vite, Tailwind CSS and Framer Motion, and deployed on Vercel.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
```

## Editing content

All text, links and project data live in [`src/data/portfolioData.js`](src/data/portfolioData.js). Components hide anything left empty:

| To add | Set |
|---|---|
| Profile photo | `PERSONAL_INFO.photo = '/images/ayushman.jpg'` (square, at least 800px) |
| Project screenshot | `image: '/images/rag-qa.png'` on the project (16:10 works best) |
| Code or demo link | `repoUrl` / `demoUrl` on the project |
| Experience | Entries in `EXPERIENCE`; the section and its nav link appear once there is at least one |
| Certificate link | `url` on the certification |

Put images in `public/images/`. Until a project has a screenshot it shows a generated placeholder tile.

## Structure

```
src/
  data/portfolioData.js     content
  sections/                 Hero, Work, Experience, About, Skills, Contact
  components/layout/        Navbar, Footer, Section
  components/ui/            Button, TagList, ThemeToggle, EmbeddingTile, brand icons
  components/ProjectCaseStudy.jsx   case study dialog
  hooks/useTheme.js         light/dark toggle
  index.css                 theme tokens (CSS variables) for both themes
```

Theme colors are CSS variables in `src/index.css` (`:root` for light, `.dark` for dark) and mapped to Tailwind names (`bg`, `surface`, `line`, `fg`, `muted`, `accent`) in `tailwind.config.js`. Dark is the default; a choice made with the toggle is remembered in `localStorage`.
