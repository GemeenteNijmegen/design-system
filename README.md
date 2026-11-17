<!-- @license CC0-1.0 -->

# Example Design System

This design system is based on the NL Design System architecture.

For more info about the NL Design System and learn about things happening in our open source community, join the `#nl-design-system` Slack via [praatmee.codefor.nl](https://praatmee.codefor.nl)!

---

✂ In your own repository: **remove the "Getting started" section below!**

---

## Getting started with the NL Design System template

This template contains all relevant linting rules used by the NL Design System repository.
It also contains the Storybook setup with two example components and two example general documentation page.
Feel free to add or modify those documentation pages and use the example components as an initial template to create your own storybook components.

### Install prerequisites

You need to have the following tools installed to run Storybook locally:

- Git
- [Node.js and npm](https://nodejs.org/en/)
- `pnpm`, `npm install -g pnpm`

### Customize organization settings

1. Choose a prefix for your organisation. For example: the main NL Design System uses `nl-`, The Hague uses `denhaag-`, and you can choose something unique for you to use.
2. Modify `.stylelintrc.json` by replacing the prefix `example` with the prefix you have chosen, in the following rules: `custom-property-pattern`, `selector-class-pattern`, `keyframes-name-pattern`, `scss/dollar-variable-pattern` and `scss/percent-placeholder-pattern`.
3. Choose and register an npm organisation on [npmjs.com](https://www.npmjs.com/org/create), if you haven't already. This is very important to keep your project secure. The core NL Design System uses `@nl-design-system/`, and you can choose something for yourself. This prevents others from adding their code to your teams codebase.
4. Modify all `package.json` files to use your npm organisation scope. Don't forget the locally linked packages under `devDependencies`. Find and replace all occurences of `@example/` in your project with `@your-organisation/`. Run `pnpm install` to install each package in under the new organisation directory in each `node_modules/`.
5. Modify `.npmpackagejsonlintrc.json` to require your organisation scope in package names, by configuring the `valid-values-name-scope` property.
6. Modify the imports in `/packages/storybook/config/preview.tsx` and `packages/web-components-stencil/src/button/index.scss` to use your prefix.
7. Modify `proprietary/design-tokens/style-dictionary.config.json` to output `.yourprefix-theme` instead of `.example-theme`.
8. Modify `preview.tsx` to use `yourprefix-theme` instead of `example-theme` as default theme for Storybook stories.

### Run storybook

- Install dependencies: `pnpm install`
- Run storybook: `npm run storybook`

### Change the theme of your storybook to match your brand

In `.storybook/customTheme.js` the theme used by NL Design System can be found. By changing those properties one can style the storybook to match ones brand. Checkout [https://storybook.js.org/docs/react/configure/theming](https://storybook.js.org/docs/react/configure/theming) to learn more about all the possible configurations to brand this storybook.

### Adding UX and other documentation without a component implementation

1. In `src/demo-empty-component` an example story of a documentation first (or documentation only) component can be found.
2. Copy this folder
3. Rename to match your component
   - The folder
   - The `x.stories.mdx` to `component-name.stories.mdx`
   - The title of the `Meta` component in `component-name.stories.mdx`
4. Add the UX guidelines in`README.md`
5. Optionally add the component specific accessibility or content guidelines in `docs/accessibility-guidelines` or `docs/content-guidelines`.
6. Optionally add the Figma component in `component-name.stories.mdx` by adding part of the Figma url to the Figma component `<Figma title="Link" url="file/..." />`

### Adding design tokens

Add global tokens to `/brand.css`. Add tags to make them appear in the Storybook Design token addon. For example `@tokens Colors` and `@presenter Color`. See [https://storybook.js.org/addons/@tommyem/storybook-design-token](https://storybook.js.org/addons/@tommyem/storybook-design-token) for more details.

### Adding the component implementation to storybook

In `src/demo-link-component` an example story and web-component can be found. All steps below are represented in this `demo-link.stories.mdx` example.
To add a component implementation to storybook, we use the `<component-name>-stories.mdx` which already contains the documentation pages or create one with placeholder documentation by following step 1-3 from the `Adding UX and other documentation without a component implementation` chapter.

- Create a component template function that takes variable arguments. If an argument might contain childnodes, use the `sanatize` package to prevent unsafe content and injections. Place this `Template` function above the `Meta` component
- Declare a story for each component variation and bind the template
- Declare the possible inputs, with types and a description in the `argTypes` property of the `Meta` component in `stories.mdx`.
- Add an `Argstable` component in your `stories.mdx`
- Optionally add a different `status` to the `Meta` parameters. The options and colors can be found in `storybook/config/preview.tsx`

### Configuring the GitHub repository

Things we usually do:

- [ ] Generate [fine grained personal access token in GitHub](https://github.com/settings/tokens?type=beta), with rights to push npm version commits. Use a name that will be clear when the token expires, for example: `nl-design-system/example GH_TOKEN`. Choose "All repositories". For "Resource owner" choose the user or organisation of the repository. For "Repository access" choose "Only select repositories", and select only your repository. Expand "Account permissions", then for "Contents" select "Read and write".
- [ ] Configure `GH_TOKEN` in Repository tokens, for use in the `publish-npm` GitHub Action. You might notice the `GITHUB_TOKEN` already exists, but the `GITHUB_` prefix is used by GitHub itself and the token has read-only rights.
- [ ] Go to [npmjs.com](https://www.npmjs.com/) and create an "Granular Access Token". Use a name that serves as hint where to reset the token when it expires, for example: `nl-design-system/example NPM_TOKEN`. For "Permissions", allow only "Only select packages and scopes" and choose the scope of your npm packages. Do not store the token anywhere, just copy it to GitHub once. You can always generate new tokens, and they will be protected by multi-factor authentication.
- [ ] Configure `NPM_TOKEN` in Repository tokens, for use in the `publish-npm` GitHub Action.
- [ ] Configure GitHub repository settings
  - [General settings](https://github.com/nl-design-system/example/settings)
    - [ ] Uncheck "Allow merge commits"
    - [ ] Should already be checked: "Allow squash merging"
    - [ ] Should already be checked: "Allow rebase merging"
    - [ ] Check "Allow auto-merge"
    - [ ] Check "Automatically delete head branches"
  - [Branches](https://github.com/nl-design-system/example/settings/branches)
    - [ ] Add rule to protect `main` branch. Branch pattern should be exactly `main`.
      - [ ] Check "Require a pull request before merging"
      - [ ] Check "Require approvals" with at least one approval.
      - [ ] Check "Require approval of the most recent reviewable push"
      - [ ] Check "Require status checks to pass before merging"
      - [ ] Search for the following status checks, and make them required:
      - [ ] Make `install` a required status check.
      - [ ] Make `lint` a required status check.
      - [ ] Make `test` a required status check.
      - [ ] Make `build` a required status check.
      - [ ] Optional: configure Chromatic visual regression tests as a required status check.
      - [ ] Check "Require linear history"
    - [ ] Add rule to protect `gh-pages` branch, to prevent someone from deleting it accidentally.
- [ ] Enable GitHub Pages to host Storybook
  - [ ] Go to [Pages](https://github.com/nl-design-system/example/settings/pages), choose "Deploy from a branch" with `gh-pages` as branch with `/ (root)` as folder. If `gh-pages` is not in the list, make sure the `publish-website` action succeeds at least once.
  - [ ] In the "Code" tab (the home page of your repository), configure the "About" section. Use "your GitHub Pages website" as "Website" of your repository.
  - [ ] Configure "nl-design-system" as one of the topics of your repository.

If you get this the following error, you still need to configure `NPM_TOKEN` in your repository settings. Use "Generate New Token" in [Access Tokens of npmjs.com](https://www.npmjs.com/) to create a new automation tokne. Use "New repository secret" in [GitHub Repository Secrets](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository) to configure it.

```log
Run actions/checkout
Error: Input required and not supplied: token
```

---

✂ In your own repository: **remove the "Getting started" section above!**

---

## Commit message convention

This repository enforces the [Conventional Commits](https://www.conventionalcommits.org/) specification for all commit messages. This is required because [Lerna](https://lerna.js.org/) uses commit messages to automatically determine version bumps and generate changelogs.

### Format

```bash
<type>(<scope>): <short description>
```

### Types

| Type       | When to use                              | Appears in changelog |
| ---------- | ---------------------------------------- | -------------------- |
| `feat`     | A new feature or visible addition        | Yes (Features)       |
| `fix`      | A bug fix                                | Yes (Bug Fixes)      |
| `perf`     | A performance improvement                | Yes (Performance)    |
| `refactor` | Code change that is not a fix or feature | No                   |
| `style`    | Formatting, whitespace (no logic change) | No                   |
| `docs`     | Documentation changes                    | No                   |
| `test`     | Adding or updating tests                 | No                   |
| `chore`    | Maintenance tasks, config changes        | No                   |
| `ci`       | CI/CD pipeline changes                   | No                   |
| `build`    | Build system or dependency changes       | No                   |

Only `feat`, `fix`, and `perf` commits appear in the generated changelog. Use these intentionally to communicate meaningful changes to consumers of the packages.

### Scopes

A scope is required and must be one of the following package names or reserved scopes:

| Scope                    | Package                                    |
| ------------------------ | ------------------------------------------ |
| `components-css`         | `@gemeentenijmegen/components-css`         |
| `components-react`       | `@gemeentenijmegen/components-react`       |
| `layout-css`             | `@gemeentenijmegen/layout-css`             |
| `semantic-html`          | `@gemeentenijmegen/semantic-html`          |
| `web-components`         | `@gemeentenijmegen/web-components`         |
| `web-components-react`   | `@gemeentenijmegen/web-components-react`   |
| `web-components-stencil` | `@gemeentenijmegen/web-components-stencil` |
| `storybook`              | `@gemeentenijmegen/storybook`              |
| `design-tokens`          | `@gemeentenijmegen/design-tokens`          |
| `design-tokens-dark`     | `@gemeentenijmegen/design-tokens-dark`     |
| `assets`                 | `@gemeentenijmegen/assets`                 |
| `font`                   | `@gemeentenijmegen/font`                   |
| `deps`                   | Dependency updates (not package-specific)  |
| `ci`                     | CI/CD configuration                        |
| `release`                | Release commits                            |
| `root`                   | Root-level configuration changes           |

### Examples

```bash
feat(components-css): add hover state to button component
fix(design-tokens): correct contrast ratio for primary color
perf(web-components): reduce bundle size by lazy loading icons
chore(deps): update rollup to v4
docs(storybook): add usage examples to accordion story
ci(ci): add automated release workflow
```

### Breaking changes

To signal a breaking change, add `!` after the type/scope or add a `BREAKING CHANGE:` footer. Breaking changes trigger a major version bump.

```bash
feat(design-tokens)!: rename all color tokens to use semantic naming

fix(components-css): update button padding

BREAKING CHANGE: The --button-padding-inline token has been renamed to --button-padding-inline-start and --button-padding-inline-end.
```

### Enforcement

Commit messages are validated automatically on commit via [commitlint](https://commitlint.js.org/). Commits with invalid messages will be rejected. Run `echo "your message" | pnpm commitlint` to test a message before committing.

## Code of Conduct

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community. Read [our Code of Conduct](CODE_OF_CONDUCT.md) if you haven't already.

## License

This project is free and open-source software licensed under the [European Union Public License (EUPL) v1.2](LICENSE.md). Documentation is licensed as [Creative Commons Zero 1.0 Universal (`CC0-1.0`)](https://creativecommons.org/publicdomain/zero/1.0/legalcode)

For information about proprietary assets in this repository, please carefully read the [NOTICE file](NOTICE.md).
