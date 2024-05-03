# React

### What is CDN ?

> A CDN (Content Delivery Network) is a distributed network of servers that work together to deliver web content to users faster and more efficiently. React is a popular JavaScript library used for building user interfaces. When used together, a CDN can help improve the performance and scalability of a React application by caching and delivering static assets from the CDN's edge servers, closer to the user. This can reduce the load on the origin server and improve the overall user experience.

```js
<script
    crossorigin
    src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
    crossorigin
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
```

1. **React (https://unpkg.com/react@18/umd/react.development.js)**:
   - This link imports the React library itself. React is a JavaScript library for building user interfaces, typically used for creating interactive UI components in web applications.
2. **ReactDOM (https://unpkg.com/react-dom@18/umd/react-dom.development.js)**:
   - This link imports the ReactDOM library. ReactDOM is a package that provides DOM-specific methods for working with React.

### crossorigin

When the crossorigin attribute is present without a value, it is treated as "anonymous" by default. This means that the browser will not include any credentials when fetching the scripts from the specified URLs.

---

- Development Versions:
  - Development versions of React and ReactDOM are intended for use during development of your application.
  - These versions typically include additional debugging information, warnings, and error messages that can help developers identify and fix issues during development.
  - Development builds are larger in size compared to production builds because they include extra code and debugging information.
  - They are often easier to read and understand for developers due to the presence of helpful error messages and warnings.
- Production Versions:
  - Production versions of React and ReactDOM are optimized for deployment in production environments.
  - These versions are stripped of unnecessary code, debugging information, and development-specific features to reduce file size and improve performance.
  - Production builds are smaller and more efficient compared to development builds, which helps improve load times and overall performance for end-users.
  - They are suitable for use in live, publicly accessible applications where performance and file size optimization are crucial.

---

- creates elments
- element is **object** not acutal tag

```js
const element = React.createElement(tag, props, child);
```

- The ReactDOM.render() fun relpace whatever elements inside root with new elment

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
```
