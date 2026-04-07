# AGENTS.md

## Cursor Cloud specific instructions

This is a **Nuxt 4 static blog** ("Basically Brogramming") with no external services or databases required for local development.

### Quick reference

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (port 3000) |
| Lint | `npm run lint` (runs both `lint:js` and `lint:style`) |
| Static build | `npm run generate` (output in `.output/public`) |

### Non-obvious notes

- **Node >= 22 required** (`engines` field in `package.json`). The VM has v22 pre-installed via nvm.
- `@nuxt/content` v3 uses an embedded `better-sqlite3` database at dev/build time — no external DB needed.
- The app runs with `ssr: false` (client-side SPA). `nuxt generate` produces static HTML in `.output/public`.
- ESLint emits a `MODULE_TYPELESS_PACKAGE_JSON` warning because `package.json` lacks `"type": "module"`. This is cosmetic and does not affect lint results.
- Husky pre-commit hook runs `npx lint-staged` (ESLint + Stylelint on staged `.js`, `.vue`, `.css` files).
- There are no automated tests in this codebase.
