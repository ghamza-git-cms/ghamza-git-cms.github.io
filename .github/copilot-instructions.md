# Copilot Instructions

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Type-check (tsc -b) then bundle (vite build)
npm run lint      # ESLint across all files
npm run preview   # Serve the production build locally
```

No test runner is configured.

## Architecture

Vite 8 + React 19 + TypeScript 5.9 single-page app. No routing or state management libraries.

- **Entry:** `index.html` → `src/main.tsx` → `<App />`
- **Layout:** `App.tsx` wraps everything in `<LanguageProvider>` and renders `Navbar`, `Hero`, `Features`, `HowItWorks`, `CallToAction`, `Footer` in order. All components live flat in `src/components/`.
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`. Colors are applied as Tailwind arbitrary values (e.g. `bg-[#E8470A]`) matching the CSS custom properties defined in `src/index.css`. No separate CSS files per component.
- **i18n:** Bilingual English/Arabic via `src/context/LanguageContext.tsx`. The `useLanguage()` hook exposes `{ t, language, toggleLanguage }`. All user-facing strings live in `src/translations/en.ts` and `src/translations/ar.ts` — the `en.ts` shape is the source of truth for the `Translations` type. Switching to Arabic sets `dir="rtl"` on `<html>` and switches the font family.
- **Assets:** Import images as ES modules (`import hero from './assets/hero.png'`).

## Key Conventions

- **Components:** Function declarations (`function Foo()`) with a default export, PascalCase filenames (`.tsx`). No co-located CSS files — use Tailwind utility classes inline.
- **Translations:** Every new user-facing string must be added to both `en.ts` and `ar.ts`. The shape is inferred from `en.ts`, so TypeScript will error if `ar.ts` is missing a key.
- **RTL:** Styles must work in both LTR and RTL. Prefer Tailwind logical properties (e.g. `ps-`, `pe-`, `ms-`, `me-`) over `pl-`/`pr-` where directional layout matters.
- **Type imports:** `verbatimModuleSyntax` is enabled — use `import type` for type-only imports.
- **No enums:** `erasableSyntaxOnly: true` — use union types or `as const` objects instead.
- **ESLint:** Flat config (v9). Runs on all `*.{ts,tsx}` files; `dist/` is ignored.
- **TypeScript strictness:** `strict`, `noUnusedLocals`, `noUnusedParameters`, and `noUncheckedSideEffectImports` are all enabled.
