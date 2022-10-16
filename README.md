<h1 align="center">
  Hexatool's ESLint + Prettier configuration
</h1>

<p align="center">
  Opinionated linting configuration considering modern TypeScript best practices and providing consistency to your code.
</p>

## How to use

1. Install the dependency
   ```bash
   npm install --save-dev @hexatool/eslint-config-typescript
   ```
2. Add it to your `.eslintrc.js` file:
   ```js
   {
     extends: [ "@hexatool/eslint-config-typescript" ]
   }
   ```
3. If you are using TypeScript, extend the TypeScript configuration instead, and point to your `tsconfig.json`
   in `parserOptions`:
   ```js
   {
     extends: [ "eslint-config-codely/typescript" ],
     parserOptions: {
       project: ["./tsconfig.json"],
     },
   }
   ```

ℹ️ Please note that some of the rules enabled by default require that you have `strict: true` in your `tsconfig.json`.

## What it does

- Lints JavaScript
  using [`eslint:recommended`](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#using-eslintrecommended)
  and [Prettier](https://prettier.io/)
- Uses the following plugins:
    - [`import`](https://github.com/import-js/eslint-plugin-import/): helps validate proper imports
    - [`simple-import-sort`](https://github.com/lydell/eslint-plugin-simple-import-sort/): sorts imports
    - [`unused-imports`](https://github.com/sweepline/eslint-plugin-unused-imports): finds and removes unused ES6 module
      imports
- Uses the following [rules](https://github.com/hexatool/eslint-config-typescript/blob/main/.eslintrc.js#L13)

## Hexatool Code Quality Standards

Publishing this package we are committing ourselves to the following code quality standards:

- Respect **Semantic Versioning**: No breaking changes in patch or minor versions
- No surprises in transitive dependencies: Use the **bare minimum dependencies** needed to meet the purpose
- **One specific purpose** to meet without having to carry a bunch of unnecessary other utilities
- **Tests** as documentation and usage examples
- **Well documented ReadMe** showing how to install and use
- **License favoring Open Source** and collaboration
