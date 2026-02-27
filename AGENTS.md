# AGENTS.md

## Cursor Cloud specific instructions

This is a **Nuxt 3 static blog** ("Basically Brogramming") with no databases, caches, or external services. Setup is purely Node.js + npm.

### Running the app

- `npm run dev` starts the dev server at `http://localhost:3000` with hot reload.
- `npm run build` builds for production; `npm run generate` produces a static site.
- See `README.md` and `package.json` scripts for the full command list.

### Linting

- **ESLint**: The `npm run lint:js` script uses the legacy `--ignore-path` flag incompatible with ESLint 9 flat config. Run `npx eslint .` directly instead.
- **Stylelint**: `npm run lint:style` works but the codebase has pre-existing violations (vendor-prefix and class-naming issues in `assets/global.css`, and Vue SFC parsing errors). These are not regressions.

### Pre-commit hooks

Husky runs `lint-staged` on commit, which invokes ESLint on `*.{js,vue}` and Stylelint on `*.{css,vue}`.

### Known issues

- Individual blog article links route to `/blog/undefined` — this is a pre-existing routing/data issue in `ArticleCard.vue`, not an environment problem.
