const heading = React.createElement(
  "h1",
  { id: "id_heading", class: "class_heading" },
  "Hello World from React from app js"
);

console.log(heading); //This will return an object not HTML

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
