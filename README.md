## React TS Template

### Template includes:

* [React](https://reactjs.org/docs/getting-started.html): frontend framework
* [Vite](https://vitejs.dev/config/): frontend build tool and dev server, configured in `./vite.config.ts`
* [TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html): types for js. Configured in `./tsconfig.json`
* [ESLint](https://eslint.org/docs/2.0.0/user-guide/configuring): Linter/code analyzer with plugins for TypeScript and sonarjs. Configured in `./.eslintrc.json`
* [Prettier](https://prettier.io/docs/en/configuration.html): Formatter. Configured in `./.prettierrc.json`
* [Vitest](https://vitest.dev/config/): testing framework, configured in `./vite.config.ts` > test
* [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#configuration): global imports, configured in `./vite.config.ts` > Plugins > AutoImport
* npm scripts (run with `npm run <script>`):
  * `dev` - starts a dev environment on localhost that will reload as files change
  * `build` - compile prod source code to `./dist`
  * `preview` - after build, preview on localhost
  * `test:run` - run tests
  * `test:ui` - run tests and display on localhost
  * `test` - run unit tests located in `./tests` that will reload whenever files change
  * `coverage` - run coverage tests and output results to `./coverage`

### Project structure:

* Source code: `./src`
* Tests: `./tests`
* Types: `./types`

Complete the configuration checklist below and remove from the README once complete.

## TODO - `README.md`

* [ ] Specify the following fields with a search and replace:
  repo_name, project_title, project_description
* [ ] Replace personal information with your own:
  Tim-W-James, tim.jameswork9800@gmail.com, https://linkedin.com/in/timothy-william-james/
* [ ] Fill out each section of the README as needed, uncommenting/removing sections as needed.
* [ ] Add images for the following:
  images/logo.png, images/screenshot.png
* [ ] Specify the LICENSE.txt for the project

## TODO - `package.json`, `tsconfig.json`, `.eslintrc.json`

* [ ] Specify the following fields with a search and replace:
  repo_name, project_title, project_description, project_keywords
* [ ] Replace personal information with your own:
  Tim-W-James, Tim James
<!-- ! Use ESM, the following step is only included for completions sake
     ! If you need to use CJS, see: https://www.typescriptlang.org/docs/handbook/esm-node.html
* [ ] Set the environment of the project:
  * ES Modules (import, export):
    * Add to `package.json`: `"type": "module"`
    * Add to `tsconfig.json`:
      * `"module": "ES6"`
      * `"moduleResolution" : "nodenext`
      * `"lib": ["ES6", "DOM"]`
    * Add to `.eslintrc.json`: `"parserOptions": { "sourceType": "module" }`
  * Node CommonJS (require, exports):
    * Add to `package.json`: `"type": "commonjs"`
    * Add to `tsconfig.json`: `"module": "commonjs"`
    * Add to `.eslintrc.json`: `"parserOptions": { "sourceType": "script" }` -->
* [ ] Set the target ES version (ES6 - supported by most browsers, ESNext - latest):
  * `./.eslint.json`:
    * `"<target>": true`
    * `"ecmaVersion": <target>`
  * `./tsconfig.json`:
    * `"target": "<target>"`
    * `"module": "<target>"`
    * `"lib": ["<target>", "DOM"]`
* [ ] Add any [global imports](https://github.com/antfu/unplugin-auto-import#configuration) to `vite.config.ts` > Plugins > AutoImport
* [ ] Do you want to commit package-lock? If yes, remove it from the `./.gitignore`
* [ ] Specify node version in the `.nvmrc`
* [ ] Run: `npm i`
* [ ] Finally, remove/modify the sample code:
  * `./src/main.ts`
  * `./src/style.css`
  * `./src/test-example.ts`
  * `./tests/Sample.test.ts`
  * `./favicon.svg`
  * `./index.html`

↑ Remove everything above once setup is complete. ↑

<!--
*** README forked from the Best-README-Template: https://github.com/othneildrew/Best-README-Template
*** Forked by Tim James: https://github.com/Tim-W-James/README-Template
***
*** See the TODO lists for project setup.
*** Find a list of resources for writing markdown, etc. at the end of this file.
-->

<!-- PROJECT SHIELDS -->
<!-- [![Release][release-shield]][release-url] -->
<!-- [![Last Commit][last-commit-shield]][last-commit-url] -->
<!-- [![Contributors][contributors-shield]][contributors-url] -->
<!-- [![Forks][forks-shield]][forks-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->
<!-- [![Issues][issues-shield]][issues-url] -->
<!-- [![MIT License][license-shield]][license-url] -->
<!-- [![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Tim-W-James/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h2 align="center">project_title</h2>

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

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
<!--         <li><a href="#prerequisites">Prerequisites</a></li> -->
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
<!--     <li>
        <a href="#usage">Usage</a>
        <ul>
        <li><a href="#example-usecases">Example Usecases</a></li>
        </ul>
    </li> -->
<!--     <li><a href="#roadmap">Roadmap</a></li> -->
<!--     <li><a href="#contributing">Contributing</a></li> -->
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
<!--     <li><a href="#acknowledgements">Acknowledgements</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![repo_name Screen Shot][product-screenshot]](https://example.com)

About text.

### Features

*

### Built With

* []()

<!-- GETTING STARTED -->
## Getting Started

<!-- ### Prerequisites

* npm

  ```sh
  npm install npm@latest -g
  ```  -->

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/Tim-W-James/repo_name.git
   ```

<!-- USAGE -->
<!-- ## Usage

Usage text.
 -->
<!-- ### Example Usecases

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->

<!-- ROADMAP -->
<!-- ## Roadmap

See the [open issues](https://github.com/Tim-W-James/repo_name/issues) for a list of proposed features (and known issues). -->

<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request -->

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Email: [tim.jameswork9800@gmail.com](mailto:tim.jameswork9800@gmail.com "tim.jameswork9800@gmail.com")

Project Link: [https://github.com/Tim-W-James/repo_name](https://github.com/Tim-W-James/repo_name)

<!-- ACKNOWLEDGEMENTS -->
<!-- ## Acknowledgements

* []()
* []()
* []() -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[release-shield]: https://img.shields.io/github/v/release/Tim-W-James/repo_name.svg?include_prereleases&style=for-the-badge
[release-url]: https://github.com/Tim-W-James/repo_name/releases
[last-commit-shield]: https://img.shields.io/github/last-commit/Tim-W-James/repo_name.svg?style=for-the-badge
[last-commit-url]: https://github.com/Tim-W-James/repo_name/commits/main
[contributors-shield]: https://img.shields.io/github/contributors/Tim-W-James/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/Tim-W-James/repo_name/graphs/contributors
[contributors-shield]: https://img.shields.io/github/contributors/Tim-W-James/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/Tim-W-James/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Tim-W-James/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/Tim-W-James/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/Tim-W-James/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/Tim-W-James/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/Tim-W-James/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/Tim-W-James/repo_name/issues
[license-shield]: https://img.shields.io/github/license/Tim-W-James/repo_name?style=for-the-badge
[license-url]: https://github.com/Tim-W-James/repo_name/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/timothy-william-james/
[product-screenshot]: images/screenshot.png

<!-- USEFUL LINKS FOR MARKDOWN
* https://github.com/Tim-W-James/blog/blob/master/Markdow-Cheatsheet.md
* https://www.markdownguide.org/basic-syntax
* https://www.webpagefx.com/tools/emoji-cheat-sheet
* https://shields.io
* https://choosealicense.com
* https://pages.github.com
* https://daneden.github.io/animate.css
* https://connoratherton.com/loaders
* https://kenwheeler.github.io/slick
* https://github.com/cferdinandi/smooth-scroll
* http://leafo.net/sticky-kit
* http://jvectormap.com
* https://fontawesome.com -->
