# Preact, TypeScript, Vite, @benchristel/taste

## Creating a new project from this template repo

1. Click the "Use this template" button on GitHub.
2. Clone the created repo.

## Development

### Summary

```bash
make setup    # one-time setup
make deps     # update NodeJS packages
make dev      # run the dev server
make ts       # run the typechecker in watch mode
make lint     # check code for problems
make fix      # autofix (some) problems, e.g. formatting
make build    # build for deployment
make smoke    # serve the built code locally
```

### One-time setup

1. If this is your first ever JavaScript project, welcome! See [setting up a JavaScript development environment](https://gist.github.com/benchristel/ede6615bf1c6cf91fd5cda70f02f57d7) to get started.

   You will need:

   - `node` >= 20.9.0
   - `yarn` 1.x.x, >= 1.22.22
   - GNU `make` 4.2.1 or compatible version

2. Run the one-time setup script to install dependencies and git hooks:
   ```sh
   make setup
   ```

`make` is used for dev tools, to decouple them from the specific NodeJS
package manager being used.

### Server and Typechecker

- Opening the project in **Visual Studio Code** automatically starts the dev server and `typescript` typechecker.
- The dev server runs at http://localhost:5173 (the port number is `vite` in 1337... sort of).
- Output appears in the terminal pane (accessed via `ctrl+~`).
- Type errors also show up in the problems pane (`ctrl+shift+M`).
- The server and typechecker stop automatically when VS Code quits.
- If you are not using VS Code, you can run these commands manually:
  ```sh
  make dev  # Run the dev server
  make ts   # Run the typechecker in watch mode
  ```

### Tests

- **Tests** run in the browser. The test report appears at the top of the screen.
- The page will refresh (re-running the tests) whenever you save a file.
- The tests and test report are completely removed from production builds.
- You can write tests in-source, or in files named `*.test.*`, e.g. `example.test.ts`. The test file pattern is configured in `src/test-results.ts`.

The test framework is `@benchristel/taste`. For more information, see [@benchristel/taste on NPM](https://www.npmjs.com/package/@benchristel/taste).

### Linting and formatting

- The linter and formatter run on changed files when you `git commit`. If problems are detected, the commit will fail with a descriptive message. You can fix the formatting with `make fix` and try again.

  To disable the pre-commit style check, delete `.husky/pre-commit`.

- To fix formatting and lint in all files (not just the ones you've changed since the last commit), run `make fix-all`.
- [ESLint](https://eslint.org/) is used to format JavaScript and TypeScript files. [Prettier](https://prettier.io/) is used for other files. See `eslint.config.js` and `.prettierrc` for configuration.

## Building for production

```sh
make build
```

This outputs files in the `dist` directory, which is symlinked to `docs`
for easy deployment to GitHub Pages.

To [smoketest](<https://en.wikipedia.org/wiki/Smoke_testing_(electrical)>) your production build locally before deploying it, run:

```sh
make smoke
```

This runs an HTTP server (via [`vite preview`](https://vitejs.dev/guide/cli.html#vite-preview)) and opens the built app in your browser.

## Deploying

To deploy your built app to GitHub Pages, go to the `Pages` tab of your repo's settings and change the directory to deploy from to `/docs`.

This template repo is deployed at https://benchristel.github.io/preact-typescript-vite-taste/
