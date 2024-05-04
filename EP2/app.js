import React from "react";
import ReactDOM from "react-dom/client";
const element = React.createElement("div", { id: "parent" }, "Hello World");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
