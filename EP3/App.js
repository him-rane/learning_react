import React from "react";
import ReactDom from "react-dom/client";

const react_heading = React.createElement(
  "h1",
  { id: "parent" },
  "This element is created by React itself"
);

const jsx_heading = <h1 id="parent">This element is created by JSX</h1>; // !babel transpile this into js

// The objects `react_heading` and `jsx_heading` are equivalent representations of a React element, with one constructed programmatically using the `React.createElement()` method, and the other utilizing JSX syntax.
console.log(react_heading);
console.log(jsx_heading);

// !----------React Functional Components------------
// ? React functional components are nothing but a javascript fun which return JSX element
// ? To use this react component in our render method we to wrap it in angle brackets
// ? Heading components must me start with capital letters
// ? root.render(<Heading/>)

const HeadingComponent = () => {
  return (
    <div className="parent">
      <h1>This is React Heading Functional Component</h1>
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
