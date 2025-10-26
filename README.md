# Fitness Landing — Next.js Tailwind Template

A sleek, responsive landing site for a fitness brand built with Next.js, Tailwind CSS and Framer Motion. It's designed as a small marketing site with program listings and dynamic program detail pages.

This repo is a compact starter you can adapt for gyms, personal trainers, or fitness apps.

---

## Live preview

Run the project locally (see below) and open http://localhost:3000 to view the landing page. The hero has a background video, smooth scrolling buttons and responsive layout.

## Tech stack

- Next.js (App Router)
- Tailwind CSS
- Framer Motion (animations)
- next/image (optimized images)
- lucide-react (icons)

## Key features

- Responsive Hero with background video and CTAs
- Programs section with cards linking to dynamic detail pages
- Dynamic route: `src/app/workouts/[category]/page.tsx`
- Smooth scroll to sections (Hero buttons scroll to `#programs` and `#iletisim`)
- Clean, Tailwind-based components under `src/components`

## Project structure (important files)

- `src/app/page.tsx` — main layout that composes the sections
- `src/components/Hero.tsx` — intro, hero video and buttons
- `src/components/Programs.tsx` — program cards list
- `src/app/workouts/[category]/page.tsx` — dynamic program detail page
- `src/components/Fiyatlar.tsx` — pricing cards
- `src/components/Iletisim.tsx` — contact form

## Run locally (Windows PowerShell)

1. Install dependencies

```powershell
npm install
```

2. Run the dev server

```powershell
npm run dev
```

3. Open the site

Open http://localhost:3000 in your browser.

Notes:
- The project uses the Next.js App Router — pages live in `src/app`.
- Image imports use `next/image`; static images are in `public/photo/`.

## Debugging dynamic routes

- Program cards point to `workouts/<slug>` (for example `workouts/strength-training`). If a detail page shows the debug fallback, check the slug in the URL and make sure it matches one of the keys defined in `src/app/workouts/[category]/page.tsx` or move the program metadata into a shared data file.

## How to add a new program

1. Add a program object to `PROGRAMS` in `src/app/workouts/[category]/page.tsx` (or better: create a shared `src/data/programs.ts` and import it from both `Programs.tsx` and the dynamic page).
2. Add the image into `public/photo/` and reference it via `/photo/your-image.jpg`.
3. Add a card in `Programs.tsx` (it maps over an array) with `href` set to `workouts/<your-slug>`.

## Accessibility & improvements (ideas)

- Use semantic form handling + validation for `Iletisim`.
- Add aria attributes to interactive elements for screen readers.
- Extract `PROGRAMS` data into a single source (`src/data`) to avoid duplication.
- Add dynamic metadata (title/description) per program for SEO.

## Contributing

1. Fork the repo
2. Create a branch for your change
3. Run and verify locally
4. Open a pull request with a short description of changes

## License

MIT — feel free to reuse and adapt.

---

If you want, I can now:
- Move `PROGRAMS` into `src/data/programs.ts` and update imports to remove duplication.
- Add dynamic metadata and a nicer 404 for unknown slugs.
- Add tests or a tiny Cypress/Puppeteer smoke test for the hero scroll.

Tell me which of the above you'd like me to do next.

