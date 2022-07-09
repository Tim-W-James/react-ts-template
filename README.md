## React TS Template

Opinionated template for frontend React TypeScript projects with Vite, ESLint,
Prettier, Vitetest, and more packages. This template aims to speed up the
initial configuration and boilerplate for new projects, while providing
integration with a range of modern tooling. This repo also includes a React
starter app using Bootstrap Components and React Router 6.

### Template includes:

- [React 17](https://reactjs.org/docs/getting-started.html): frontend framework
- [Vite](https://vitejs.dev/config/): frontend build tool and dev server, configured in [`./vite.config.ts`](./vite.config.ts)
- [TypeScript 4.7](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html): types for js. Configured in [`./tsconfig.json`](./tsconfig.json)
- [SASS](https://sass-lang.com/): CSS preprocessor
- [ESLint](https://eslint.org/docs/2.0.0/user-guide/configuring): Linter/code analyzer for TypeScript. Configured in [`./.eslintrc.cjs`](./.eslintrc.cjs) with rules from AirBnB and SonarJS
- [Stylelint](https://stylelint.io/): Linter/code analyzer for SCSS. Configured in [`./.stylelintrc.cjs`](./.stylelintrc.cjs)
- [Prettier](https://prettier.io/docs/en/configuration.html): Formatter. Configured in [`./.prettierrc.cjs`](./.prettierrc.cjs)
- [Vitest](https://vitest.dev/config/): unit testing framework. Configured in [`./vite.config.ts` > `test`](./vite.config.ts#L52)
- [Storybook](https://storybook.js.org/): view, document and test individual components and pages. Configured in [`./.storybook/main.cjs`](./.storybook/main.cjs)
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#configuration): global imports. Configured in [`./vite.config.ts` > `Plugins` > `AutoImport`](https://github.com/Tim-W-James/react-ts-template/blob/main/vite.config.ts#L19)
- [pnpm](https://pnpm.io/): configuration for the `pnpm` package manager for better performance, lockfiles and monorepo support. See steps <a href="#todo">below</a> if you wish to use a different package manager.
- `npm` scripts - run with `pnpm <script>` (or if you use a different package manager `yarn run <script>` or `npm run <script>`):
  - `dev` - starts a dev environment on localhost with Hot Module Reloading (automatically updates when source code changes)
  - `dev:https` - starts a dev environment on localhost over https (requires [local development certificates to be generated](https://github.com/FiloSottile/mkcert))
  - `build` - compile production source code to [`./dist`](./dist)
  - `preview` - after build, preview on localhost
  - `lint` - evaluate ESLint rules against source code
  - `format` - format source code with prettier and try to fix any ESLint errors
  - `test:run` - run tests using [Vitest](https://vitest.dev/config/)
  - `test:ui` - run tests and display a UI on localhost
  - `test` - run unit tests in watch mode (automatically reruns tests when source code changes)
  - `coverage` - run coverage tests and output results to [`./coverage`](./coverage)
  - `storybook` - launch [Storybook](https://storybook.js.org/) to view, document and test components and pages
- [Husky](https://github.com/typicode/husky): pre-commit Git hooks to lint, format and run tests. Configured in [`./.husky`](./.husky)
- [GitHub Actions](https://docs.github.com/en/actions): GitHub CI/CD pipeline. Configured in [`./.github/workflows`](./.github/workflows)
- Starter React app with [Bootstrap 5](https://react-bootstrap.github.io/getting-started/introduction/) and [React Router 6](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [Renovate](https://github.com/marketplace/renovate): GitHub bot for automatic dependency updates. Configured in [`./renovate.json`](./renovate.json)
- See the <a href="#project-structure">Project Structure</a>

Complete the configuration checklist below and remove from the README once complete.

## TODO

- [ ] If using VSCode, install recommended extensions with the command pallet: `Extensions:Show Recommended Extensions`. Otherwise, use install an[`EditorConfig`](https://editorconfig.org/#download) plugin for your text editor or IDE of choice
- [ ] Specify the following fields with a search and replace:
      repo_name, project_title, project_description, project_keywords
- [ ] Replace personal information with your own:
      Tim-W-James, Tim James, tim.jameswork9800@gmail.com, https://linkedin.com/in/timothy-william-james/, https://timjames.dev
- [ ] Specify the [`LICENSE.txt`](LICENSE.txt) for the project and set [`./package.json` > `license`](./package.json#L10)
- [ ] [`README.md`](README.md) - there is a README template [below](#top) based on the [Best-README-Template](https://github.com/othneildrew/Best-README-Template). Find a list of resources to help you write READMEs in a comment at the end of this file. Fill out the following:
  - [ ] Fill out each section of the README as needed, uncommenting/removing sections as needed.
  - [ ] Add images for the following:
        [`./public/assets/images/logo.png`](./public/assets/images/logo.png), [`./public/assets/images/screenshot.png`](./public/assets/images/screenshot.png)
        <!-- ! Use ESM, this is only included for reference -->
        <!-- ! If you need to use CJS, see: https://www.typescriptlang.org/docs/handbook/esm-node.html -->
      <!-- - [ ] Set the environment of the project: -->
    <!-- - ES Modules (import, export): -->
      <!-- - Add to `package.json`: `"type": "module"` -->
      <!-- - Add to `tsconfig.json`:
        - `"module": "ES6"`
        - `"moduleResolution" : "node`
        - `"lib": ["ES6", "DOM"]` -->
      <!-- - Add to `.eslintrc.cjs`: `"parserOptions": { "sourceType": "module" }` -->
    <!-- - Node CommonJS (require, exports): -->
      <!-- - Add to `package.json`: `"type": "commonjs"` -->
      <!-- - Add to `tsconfig.json`: `"module": "commonjs"` -->
      <!-- - Add to `.eslintrc.cjs`: `"parserOptions": { "sourceType": "script" }` -->
- [ ] Set the target ES version (ES6 - supported by most browsers, ESNext - latest):
  - [`./.eslint.cjs`](./.eslint.cjs):
    - `"<target>": true`
    - `"ecmaVersion": <target>`
  - [`./tsconfig.json`](./tsconfig.json):
    - `"target": "<target>"`
    - `"module": "<target>"`
    - `"lib": ["<target>", "DOM"]`
  - Append `--target <target>` to the `build` script in [`./package.json`](./package.json#L36) or specify the target in [`./vite.config.ts` > `build` > `target`](./vite.config.ts#L48)
- [ ] Specify formatting and editor configuration in [`./.editorconfig`](./.editorconfig). Use the [`./.prettierrc.cjs`](./.prettierrc.cjs) for js specific rules that are not defined in [`./.editorconfig`](./.editorconfig)
- [ ] Add any [global imports](https://github.com/antfu/unplugin-auto-import#configuration) to [`./vite.config.ts` > `Plugins` > `AutoImport`](https://github.com/Tim-W-James/react-ts-template/blob/main/vite.config.ts#L19). You may also need to update the Vite configuration used in [`./.storybook/main.cjs`](./.storybook/main.cjs)
- [ ] Specify node version in the [`./.nvmrc`](./.nvmrc) and [`./package.json` > `engines` > `node`](./package.json#L24)
- [ ] This repo is configured for the `pnpm` package manager. If you wish to change this to [`yarn`](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) or `npm`, configure the following:
  - Modify [`./package.json` > `engines`](./package.json#L25) and [`./package.json` > `packageManager`](./package.json#L27) to refer to the version of the package manager you are using
  - Modify the GitHub actions in [`./.github/workflows`](./.github/workflows) to install your package manager (if using something other than `npm`), use it in pipeline steps, and cache
  - Modify any scripts that call `pnpm` in [`./package.json` > `scripts`](./package.json#L30)
  - Modify any Git hooks that call `pnpm` in [`./.husky/pre-commit`](./.husky/pre-commit)
  - Update the README instructions accordingly
  - Remove the old lockfile and regenerate it if needed:
    - `pnpm`: `pnpm i --lockfile-only`
    - `yarn`: `yarn install --mode update-lockfile`
    - `npm`: `npm install --package-lock-only`
  - NOT RECOMMENDED: If you don't want to commit your lockfile, add it to the [`./.gitignore`](./.gitignore) and change the GitHub Action step "Install Dependencies" (for `npm`, change `npm ci` to `npm i`).
- [ ] Install dependencies with your package manager of choice:
  - `pnpm`: `pnpm i`
  - `yarn`: `yarn`
  - `npm`: `npm ci` (lockfile) or `npm i` (no lockfile)
- [ ] Install Git hooks if needed (this should happen automatically when dependencies are installed): `husky install`
- [ ] Add continuous deployment workflow to [`./.github/workflows`](./.github/workflows) as needed
- [ ] Install the [Renovate](https://github.com/marketplace/renovate) bot on GitHub for automatic dependency updates
- [ ] Finally, remove/modify the sample code:
  - [`./src/example-component.tsx`](./src/example-component.tsx) and [`./src/example-component.test.tsx`](./src/example-component.test.tsx) (example for using Vitest and snapshots)
  - [`./src/stories`](./src/stories) (example Storybook)
  - [`./public/assets`](./public/assets)
  - Anything else you don't need in [`./src`](./src)
  - And any dependencies you don't need such as `react-bootstrap` or `react-icons`

↑ Remove everything above once setup is complete. ↑

<!-- ! If you can read this comment, please preview this file with a markdown renderer -->

<!--
*** README forked from the Best-README-Template: https://github.com/othneildrew/Best-README-Template
*** Forked by Tim James: https://github.com/Tim-W-James/README-Template
***
*** See the TODO lists for project setup.
*** Find a list of resources for writing markdown, etc. at the end of this file.
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Tim-W-James/repo_name">
    <!-- <img src="public/assets/images/logo.png" alt="Logo" width="80" height="80"> -->
  </a>

  <h2 align="center" id="top">project_title</h2>

  <p align="center">
    project_description
    <br />
<!--     <a href="https://github.com/Tim-W-James/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br /> -->
<!--     <a href="https://github.com/Tim-W-James/repo_name">View Demo</a> -->
<!--     ·
    <a href="https://github.com/Tim-W-James/repo_name/issues">Report Bug</a> -->
<!--     ·
    <a href="https://github.com/Tim-W-James/repo_name/issues">Request Feature</a> -->
  </p>
</p>

<!-- PROJECT SHIELDS -->
<!-- Shields: https://shields.io -->
<!-- Icons: https://github.com/simple-icons/simple-icons/blob/develop/slugs.md -->

<br/>
<p align="center">
  <!-- GitHub Actions Shield -->
  <a href="https://github.com/Tim-W-James/repo_name/actions"><img src="https://img.shields.io/github/workflow/status/Tim-W-James/repo_name/CI?style=for-the-badge&logo=githubactions&logoColor=white" alt="CI"></a>
  <!-- Last Commit Shield -->
  <a href="https://github.com/Tim-W-James/repo_name/commits/main"><img src="https://img.shields.io/github/last-commit/Tim-W-James/repo_name.svg?style=for-the-badge&logo=git&logoColor=white" alt="Commit"></a>
  <!-- Renovate Shield -->
  <a href="https://github.com/Tim-W-James/repo_name/issues/2"><img src="https://img.shields.io/badge/-Renovate-black.svg?style=for-the-badge&logo=renovatebot&colorB=555" alt="Renovate"></a>
  <!-- Release Shield -->
  <!-- <a href="https://github.com/Tim-W-James/repo_name/releases"><img src="https://img.shields.io/github/v/release/Tim-W-James/repo_name.svg?include_prereleases&style=for-the-badge" alt="Release"></a> -->
  <!-- Contributors Shield -->
  <!-- <a href="https://github.com/Tim-W-James/repo_name/graphs/contributors"><img src="https://img.shields.io/github/contributors/Tim-W-James/repo_name.svg?style=for-the-badge&logo=github&logoColor=white" alt="Contributors"></a> -->
  <!-- Forks Shield -->
  <!-- <a href="https://github.com/Tim-W-James/repo_name/network/members"><img src="https://img.shields.io/github/forks/Tim-W-James/repo_name.svg?style=for-the-badge" alt="Forks"></a> -->
  <!-- Stars Shield -->
  <!-- <a href="https://github.com/Tim-W-James/repo_name/stargazers"><img src="https://img.shields.io/github/stars/Tim-W-James/repo_name.svg?style=for-the-badge" alt="Stars"></a> -->
  <!-- Issues Shield -->
  <!-- <a href="https://github.com/Tim-W-James/repo_name/issues"><img src="https://img.shields.io/github/issues/Tim-W-James/repo_name.svg?style=for-the-badge" alt="Issues"></a> -->
  <!-- License Shield -->
  <!-- <a href="https://github.com/Tim-W-James/repo_name/blob/main/LICENSE.txt"><img src="https://img.shields.io/github/license/Tim-W-James/repo_name.svg?style=for-the-badge" alt="License"></a> -->
  <!-- Linkedin Shield -->
  <!-- <a href="https://linkedin.com/in/timothy-william-james/"><img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555" alt="Linkedin"></a> -->
</p>
<br/>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#goals">Goals</a></li>
        <!-- <li><a href="#roadmap">Goals</a></li> -->
        <!-- <li><a href="#features">Features</a></li> -->
        <!-- <li><a href="#built-with">Built With</a></li> -->
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
        <a href="#usage">Usage</a>
        <ul>
          <!-- <li><a href="#example-usecases">Example Usecases</a></li> -->
        </ul>
    </li>
    <li>
        <a href="#development">Development</a>
        <ul>
          <li><a href="#testing">Testing</a></li>
          <li><a href="#code-style">Code Style</a></li>
          <li><a href="#project-structure">Project Structure</a></li>
          <li><a href="#documentation">Documentation</a></li>
        </ul>
    </li>
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <!-- <li><a href="#license">License</a></li> -->
    <!-- <li><a href="#contact">Contact</a></li> -->
    <!-- <li><a href="#acknowledgements">Acknowledgements</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![repo_name Screen Shot][product-screenshot]](https://example.com) -->

About text.

### Goals

- Stuff to do

<!-- ### Roadmap

See the [open issues](https://github.com/Tim-W-James/repo_name/issues) for a list of proposed features (and known issues). -->

<!-- ### Features

* -->

<!-- ### Built With

* []() -->

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- Install [`node`](https://nodejs.org/en/) for the version in `.nvmrc` or use [`nvm`](https://github.com/nvm-sh/nvm):

  ```sh
  nvm install && nvm use
  ```

- Install the [`pnpm`](https://pnpm.io/installation) package manager. Use [`corepack`](https://nodejs.org/api/corepack.html) for automatic installation, which is an experimental `node` feature that must be enabled using:

  ```sh
  corepack enable
  ```

### Installation

- Clone the repo:

  ```sh
  git clone https://github.com/Tim-W-James/repo_name.git
  ```

- Install dependencies with [`pnpm`](https://pnpm.io/installation):

  ```sh
  pnpm i
  ```

<!-- USAGE -->

## Usage

- Build to [`./dist`](./dist) and preview:

  ```sh
  pnpm build
  pnpm preview
  ```

<!-- ### Example Usecases

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->

<!-- DEVELOPMENT -->

## Development

- Ensure you have Git Hooks enabled (should run automatically after `pnpm i`):

  ```sh
  npx husky install
  ```

- Start a development environment:

  ```sh
  pnpm dev
  ```

### Testing

- Run unit tests in watch mode (automatically reruns tests when source code changes):

  ```sh
  pnpm test
  ```

- Run coverage tests and output results to [`./coverage`](./coverage):

  ```sh
  pnpm coverage
  ```

- View and test individual components or pages:

  ```sh
  pnpm storybook
  ```

  Note: initially, you may need to run this script twice to fix a caching error

### Code Style

- Evaluate ESLint ([`./.eslintrc.cjs`](./.eslintrc.cjs)) and StyleLint ([`./.stylelintrc.cjs`](./.stylelintrc.cjs)) rules against source code:

  ```sh
  pnpm lint
  ```

- Format source code with prettier ([`./.prettierrc.cjs`](./.prettierrc.cjs)) and try to fix any ESLint ([`./.eslintrc.cjs`](./.eslintrc.cjs)) or StyleLint ([`./.stylelintrc.cjs`](./.stylelintrc.cjs)) errors:

  ```sh
  pnpm format
  ```

### Project Structure

- **Source Code**: [`./src`](./src)
  - Entry point and routes: [`./src/index.tsx`](./src/index.tsx)
  - Root component: [`./src/App.tsx`](./src/App.tsx)
  - Common components: [`./src/components`](./src/components). Has alias `@components`. Group by type for `layout`, `buttons`, `forms`, etc.
  - Common hooks: [`./src/hooks`](./src/hooks). Has alias `@hooks`
  - Common utils: [`./src/utils`](./src/utils). Has alias `@utils`
  - Pages: [`./src/pages`](./src/pages). Has alias `@pages`. Nest subfolders for `components`, `utils`, `hooks`, etc. depending on the scope they apply to
  - React context: [`./src/context`](./src/context). Has alias `@context`
- **Unit Tests**: place `tests` adjacent to source code
- **Storybook Stories**: place `stories` adjacent to source code
- **SCSS Styling**:
  - Use [`index.scss`](./src/index.scss) for globals
  - Place page or component specific styles adjacent to source code
- **Global TypeScript Types**: [`./types`](./types)
- **Web Accessible Files** (`robots.txt`, `manifest.json`, etc.): [`./public`](./public)
- **Site Assets** (`favicon.svg`, images, etc.): [`./public/assets`](./public/assets). Has alias `@assets`

Define path alias in [`./tsconfig.paths.json`](./tsconfig.paths.json).

I recommend using [VSCode file nesting](https://code.visualstudio.com/updates/v1_64#_explorer-file-nesting) for a [cleaner file tree](https://github.com/antfu/vscode-file-nesting-config).

### Documentation

- Document code with [JSDoc](https://jsdoc.app/about-getting-started.html)
- Document components or pages with [Storybook](https://storybook.js.org/) and run with:

  ```sh
  pnpm storybook
  ```

<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a [Pull Request](https://github.com/Tim-W-James/repo_name/pulls) -->

<!-- LICENSE -->
<!-- https://choosealicense.com -->
<!-- ## License

Distributed under the MIT License. See [`LICENSE.txt`](./LICENSE.txt) for more information. -->

<!-- CONTACT -->
<!-- ## Contact

Email: [tim.jameswork9800@gmail.com](mailto:tim.jameswork9800@gmail.com "tim.jameswork9800@gmail.com")

Project Link: [https://github.com/Tim-W-James/repo_name](https://github.com/Tim-W-James/repo_name) -->

<!-- ACKNOWLEDGEMENTS -->
<!-- ## Acknowledgements

* []()
* []()
* []() -->

<a href="#top">↑ Back to Top ↑</a>

<!-- MARKDOWN IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: public/assets/images/screenshot.png

<!-- USEFUL LINKS FOR MARKDOWN
* https://github.com/Tim-W-James/blog/blob/master/Markdow-Cheatsheet.md
* https://www.markdownguide.org/basic-syntax
* https://www.webpagefx.com/tools/emoji-cheat-sheet
* https://shields.io
* https://github.com/simple-icons/simple-icons/blob/develop/slugs.md
* https://choosealicense.com
* https://pages.github.com
* https://daneden.github.io/animate.css
* https://connoratherton.com/loaders
* https://kenwheeler.github.io/slick
* https://github.com/cferdinandi/smooth-scroll
* http://leafo.net/sticky-kit
* http://jvectormap.com
* https://fontawesome.com -->
