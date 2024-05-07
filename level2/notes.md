# NPM

- **npm** is a package manager used in JavaScript projects. Packages help us manage dependencies and scale React applications effectively.

- **A bundler** is a tool that consolidates JavaScript code and its dependencies (such as React components, CSS files, and other assets) into one or more files for efficient delivery to the browser.

  - **Vite**, **Webpack**, **Parcel**, and others are examples of bundlers commonly used in modern web development.

- `npx-create-app` utilizes **Webpack** as its default bundler under the hood, allowing developers to quickly scaffold and build React applications.

---

### Development Dependencies (`devDependencies`):

- These are dependencies that are only needed during the development process, such as building, testing, and debugging your code.
- Examples of **devDependencies** include build tools (like Webpack or Babel), testing frameworks (like Jest or Mocha), code linters (like ESLint), and other development-related utilities.

### Regular Dependencies (`dependencies`):

- These are dependencies that are required for the application to run in a production environment.
- Regular dependencies include libraries, frameworks, and other modules that your application relies on to function properly.

---

### Tilde (~) Version Specifier:

- The tilde (~) version specifier indicates that you want to install packages that are approximately equivalent to the specified version.
- It updates you to all future patch versions of the specified version, without incrementing the minor version.
- For example, `~1.2.3` will use releases from version 1.2.3 up to, but excluding, version 1.3.0.

### Caret (^) Version Specifier:

- The caret (^) version specifier indicates that you want to install packages compatible with the specified version.
- It updates you to all future minor and patch versions of the specified version, without incrementing the major version.
- For example, `^1.2.3` will use releases from version 1.2.3 up to, but excluding, version 2.0.0.

---

### npm

- npm is the Node Package Manager. It is used for installing, managing, and publishing packages or modules for Node.js applications.

### npx

- It is used to execute Node.js packages without the need to install them globally.
- It stands for "Node Package Execute".

> HMR stands for Hot Module Replacement. It's a feature that allows developers to see changes in their code reflected instantly in the browser without needing to manually refresh the page

Parcel Minified the code and make it ready for production al the minified code stored in dis folder

production built `npx parcel built index.html`
development built `npx parcel index.html`
