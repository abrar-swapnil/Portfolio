# Abrar Swapnil — Portfolio

Personal portfolio website for Abrar Swapnil, Software Engineering Student & Aspiring AI/ML Engineer.

**Live Demo:** [abrarswapnil.dev](https://abrarswapnil.dev)

---

## Tech Stack

| Layer      | Technology                     |
|------------|-------------------------------|
| Framework  | React 18 + Vite 5              |
| Styling    | Tailwind CSS 3                 |
| Icons      | Lucide React                   |
| Fonts      | Syne · DM Sans · JetBrains Mono |
| Deploy     | Vercel                         |

---

## Folder Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       — Fixed nav with scroll detection & mobile menu
│   │   ├── Hero.jsx         — Full-screen hero with typewriter effect
│   │   ├── About.jsx        — Professional summary + highlight cards
│   │   ├── Skills.jsx       — Skill groups with animated pills
│   │   ├── Projects.jsx     — Project cards with tech tags & links
│   │   ├── Experience.jsx   — Timeline of current focus areas
│   │   ├── Contact.jsx      — Contact links + CTA
│   │   └── Footer.jsx       — Footer with socials
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            — Global styles, CSS variables, animations
├── index.html               — SEO meta tags, font imports
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── vercel.json              — Vercel SPA routing + cache headers
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** v18+ ([download](https://nodejs.org))
- **npm** v9+ (bundled with Node)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/abrar-swapnil/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Available Scripts

| Command           | Description                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Start local development server       |
| `npm run build`   | Build production bundle → `dist/`    |
| `npm run preview` | Preview production build locally     |

---

## Deployment on Vercel

### Option A — Vercel CLI (recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

### Option B — Vercel Dashboard

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects Vite — click **Deploy**
5. Done ✓

**Build settings** (auto-detected):
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

---

## Customisation Guide

### Personal Info

Update `src/components/Hero.jsx`:
```jsx
// Change name, taglines, and social links
const TAGLINES = ['Your custom tagline here', ...]
```

Update `src/components/Contact.jsx`:
```jsx
const CONTACT_LINKS = [
  { value: 'your@email.com', href: 'mailto:your@email.com', ... },
  { value: 'linkedin.com/in/abrar-swapnil-559852352', href: 'https://linkedin.com/in/abrar-swapnil-559852352', ... },
  { value: 'github.com/abrar-swapnil',     href: 'https://github.com/abrar-swapnil', ... },
]
```

### Projects

Update `src/components/Projects.jsx` — edit the `PROJECTS` array:
```jsx
const PROJECTS = [
  {
    title:       'Your Project Title',
    description: 'What it does and why it matters.',
    tech:        ['Python', 'TensorFlow', '...'],
    github:      'https://github.com/abrar-swapnil/portfolio',
    status:      'Complete',
    ...
  },
  ...
]
```

### Colors

Edit `src/index.css` — change CSS custom properties:
```css
:root {
  --bg:     #080808;   /* Page background */
  --accent: #06b6d4;   /* Cyan accent — change to any color */
}
```

---

## Design System

| Token            | Value               | Usage             |
|------------------|---------------------|-------------------|
| `--bg`           | `#080808`           | Page background   |
| `--surface`      | `#111111`           | Card backgrounds  |
| `--accent`       | `#06b6d4`           | Cyan highlights   |
| `--text`         | `#f0f0f0`           | Primary text      |
| `--text-muted`   | `#6b6b6b`           | Secondary text    |
| `--border`       | `rgba(255,255,255,0.07)` | Subtle borders |

**Fonts:**
- `Syne` — Headings, display text (geometric, distinctive)
- `DM Sans` — Body copy, UI text (clean, readable)
- `JetBrains Mono` — Tech labels, code, tags (technical feel)

---

## License

MIT — feel free to use as a starting point for your own portfolio.

---

*Built with ❤ by Abrar Swapnil*
