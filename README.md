# COMP229 Portfolio — Pedro Bilhalva Oliveira

Personal portfolio site built for the COMP229 Web App Development course at
Centennial College. A single-page React application showing the About, Projects,
Services, Contact, and References content, designed with a custom dark theme.

All of the site content lives in the `services/` folder, so keeping the
portfolio up to date is a matter of editing data files — no component changes
required.

## Features

- Six routed pages plus a 404 page: `/`, `/about`, `/projects`, `/services`,
  `/contact`, `/references`
- Animated transitions between pages (View Transitions API, with
  `prefers-reduced-motion` support)
- Home hero with a mission statement and quick-access buttons
- About page with profile photo, bio, and a downloadable resume PDF
  (`public/resume.pdf`)
- Projects grid with three real projects and their screenshots
  (`public/projects/`)
- Services cards driven by lucide icons and stack chips
- References with testimonials and a "Read more / Show less" toggle for long
  quotes
- Contact page with an info panel and a mock submission form that captures the
  entered fields and redirects to the Home page
- Footer with GitHub, LinkedIn, and Email links (kept in sync with the Contact
  page)
- Custom dark theme via Tailwind CSS v4 design tokens, a visible keyboard focus
  ring, and defensive error handling (error boundary, error notices, and caught
  asynchronous loads)

## Tech Stack

| Tool              | Purpose                    |
| ----------------- | -------------------------- |
| React 19          | UI library                 |
| Vite 8            | Build tool & dev server    |
| Tailwind CSS v4   | Styling (`@tailwindcss/vite` plugin) |
| react-router-dom 7 | Routing                   |
| lucide-react      | Icons                      |
| ESLint 10         | Linting (react-hooks, react-refresh) |

## Getting Started

Requires [Node.js](https://nodejs.org/) (20.19+ or 22.12+ recommended).

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run the linter:

```bash
npm run lint
```

## Project Structure

```
├── components/                  # Shared layout & UI pieces
│   ├── Layout.jsx               # Navbar + routed page + Footer shell
│   ├── Navbar.jsx               # Site navigation (view transitions)
│   ├── Footer.jsx               # Social links + copyright
│   ├── Chip.jsx                 # Pill tag used for stacks/skills
│   ├── PageHeader.jsx           # Page title + subtitle
│   ├── ErrorBoundary.jsx        # Catches render crashes
│   └── ErrorNotice.jsx          # Inline load-error message
├── public/                      # Static assets (photos, resume, screenshots)
├── services/                    # Site content (edit these files)
│   ├── projects.js
│   ├── services.js
│   ├── references.js
│   └── contact.js
└── src/
    ├── index.css                # Tailwind import & theme variables
    ├── main.jsx                 # App entry point
    ├── router/index.jsx         # Route definitions
    ├── utils/consts.js          # Navigation items + icon refs
    └── pages/                   # MVC-style pages
        └── <Page>/              # e.g. Projects/
            ├── index.jsx        # Barrel export
            ├── view.jsx         # Presentation
            ├── controller.jsx   # Data fetching + error state
            └── components/      # Page-specific components
```

## Customizing Content

Most updates are content-only and live in `services/*.js`:

- `services/projects.js` — the three featured projects (title, description,
  role, stack, screenshot path, repository URL).
- `services/services.js` — the services list and their lucide icons/tags.
- `services/references.js` — testimonials (long ones render with a toggle).
- `services/contact.js` — email, phone, location, and social links.
  `contactSocials` is shared with the Footer, so updates stay in sync.

Theme colors and focus-ring styling are set in `src/index.css` under `@theme`.
Routes are defined in `src/router/index.jsx`.