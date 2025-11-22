<!-- Brief, repo-specific instructions for AI coding assistants -->
# Copilot instructions for this repository

Purpose
- Help an AI agent be immediately productive editing and extending the Cypress course repository.

Quick start (developer workflows)
- Install dev dependencies: `npm install` (project uses `cypress@^13.12.0`).
- Open interactive runner: `npm run cy:open` (maps to `cypress open`).
- Run headless tests (CI/local): `npm test` (maps to `cypress run`).

Where tests live
- Test specs: `cypress/e2e/` — contains course examples grouped in subfolders (e.g. `1-getting-started/`, `2-advanced-examples/`).
- Single-file example: `cypress/e2e/CAC-TAT.cy.js`.

Important project conventions & patterns
- Tests open a local HTML file directly with `cy.visit('./src/index.html')`. There is no dev server in the repo — treat `src/` as the site under test.
- Selectors match the static `src/index.html` file. Use the exact IDs shown there (e.g. `#firstName`, `#lastName`, `#email`, `#open-text-area`, `.success`, `.error`). Be precise about letter case.
- Global support and custom commands: `cypress/support/commands.js` (add commands here) and `cypress/support/e2e.js` (auto-imports `./commands`).
- Config: `cypress.config.js` contains viewport settings and a minimal `e2e` config. Keep edits minimal and test after changes.

Language & naming
- Tests and comments are written in Portuguese — maintain the language when editing tests or messages unless asked otherwise.

Common gotchas to avoid
- Do not assume a dev server; using relative `cy.visit('./src/index.html')` is intentional.
- Match selectors exactly (IDs in `index.html` use camelCase: `lastName`, not `lastname`).
- Some example specs contain small typos (e.g. `beBeforeEach` vs `beforeEach`). When fixing, run the test runner to ensure nothing else depends on that exact string.

Examples (do this, not that)
- Good: update or add a spec under `cypress/e2e/1-getting-started/` using `cy.get('#firstName').type('Nome')`.
- Avoid: changing selectors in specs without verifying `src/index.html` (prefer updating the app HTML only if you intend to change all specs accordingly).

CI & Cloud
- No GitHub Actions workflows provided in this repo. For CI, run `npm test` and upload Cypress artifacts if you add a workflow.
- The README mentions Cypress Cloud integration; follow the official docs when adding that feature.

When in doubt
- Run `npm run cy:open` locally to inspect the app and run individual specs interactively.
- Prefer minimal, targeted edits. Reference the files called out above when making changes.

Files to reference while coding
- `package.json` — npm scripts and Cypress version.
- `cypress.config.js` — viewport and e2e configuration.
- `src/index.html`, `src/script.js` — the application under test and selectors.
- `cypress/e2e/*` and `cypress/support/*` — tests and shared helpers.

If you need more context
- Ask the repository owner to describe intended course outcomes or CI preferences before large changes (e.g. adding servers, changing test targets).

End of instructions.
