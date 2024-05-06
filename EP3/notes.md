```json
"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

`start` and `build` scripts help us to right lengthy commands

npx parcel index.html => `npm run start`

npx parcel built index.html => `npm run build`

> In any unknown project we can go find the run and build commands from package.json and start the project

---

Creating react element like this, is not a good practice because the it is not easy to write and read the code

```js
const react_heading = React.createElement(
  "h1",
  { id: "parent" },
  "This element is created by React itself"
);
```

too overcome this situation JSX comes into picture which make code more readble and easy to write

```jsx
const jsx_heading = <h1 id="parent">This element is created by JSX</h1>;
```

`this is not a not HTML, it is JSX which looks like HTML`

> The objects `react_heading` and `jsx_heading` are equivalent representations of a React element, with one constructed using the `React.createElement()` method, and the other utilizing `JSX` syntax.

> The conversion of JSX to React elements is facilitated by Parcel, specifically through the `Babel` transpiler, which automatically transforms JSX syntax into equivalent React.createElement() calls during the build process.

---

**There are two types of components in React**

1. Function Components: Lightweight, stateless components defined as JavaScript functions, preferred for simpler UI elements. Can utilize state and lifecycle features with React hooks.
2. Class Components: Stateful components defined as ES6 classes, manage internal state and lifecycle methods. Hooks have largely replaced class components for state and lifecycle management.

## React Functional Components

- **Definition:** React functional components are JavaScript functions that return JSX elements.
- **Usage:** To use a functional component in a render method, wrap it in angle brackets (`<>...</>`).
- **Naming Convention:** Component names must start with capital letters, e.g., `<HeadingComponent />`.
- **Example:**
  ```jsx
  const HeadingComponent = () => {
    return (
      <div className="parent">
        <h1>This is React Heading Functional Component</h1>
      </div>
    );
  };
  root.render(<HeadingComponent />);
  ```
