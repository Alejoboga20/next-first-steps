# Repository Guidelines

## Project Structure & Module Organization

- `app/` contains the Next.js App Router routes and shared layout. Each route is a folder with a `page.tsx` (e.g., `app/about/page.tsx`).
- `app/layout.tsx` defines the root layout; `app/globals.css` holds global styles.
- `public/` stores static assets served at the site root.
- `next.config.ts`, `tsconfig.json`, and `eslint.config.mjs` contain framework, TypeScript, and lint configuration.

## Build, Test, and Development Commands

- `npm run dev` starts the local dev server at `http://localhost:3000`.
- `npm run build` creates the production build.
- `npm run start` serves the production build locally.
- `npm run lint` runs ESLint with Next.js + TypeScript rules.

## Coding Style & Naming Conventions

- TypeScript is strict (`tsconfig.json`); prefer explicit types when inference is unclear.
- Use 2-space indentation and keep formatting consistent with existing files.
- Route components live in `app/<route>/page.tsx`; shared layout uses `app/layout.tsx`.
- Import paths may use the alias `@/*` (mapped to the repo root).
- When adding a new page, create a folder in `app/` with a `page.tsx` file. Always include metatags for SEO in the page component.

## Testing Guidelines

- No automated tests are configured yet. Use `npm run lint` as the primary quality gate.
- If adding tests, align them with the App Router and document the command here.

## Commit & Pull Request Guidelines

- Commit history uses short, lowercase, imperative messages (e.g., "add new routes"). Keep messages concise and specific.
- PRs should include a clear description, linked issues (if any), and screenshots for UI changes.

## Configuration Notes

- Tailwind CSS is available via PostCSS; global styles are in `app/globals.css`.
- Static assets should be placed in `public/` and referenced by absolute paths (e.g., `/globe.svg`).
