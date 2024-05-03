/**
  
<div id="parent">
  <div id = "child1">
    <h1>I'm h1 tag</h1>
    <h1>I'm h2 tag</h1>
  </div>
   <div id = "child2">
    <h1>I'm h1 tag</h1>
    <h1>I'm h2 tag</h1>
  </div>
</div>

*/

//If we want to make sibling we have pass and array of elements
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm h1 tage"),
    React.createElement("h2", {}, "I'm h2 tage"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tage"),
    React.createElement("h2", {}, "I'm h2 tage"),
  ]),
]);

console.log(parent); //This will return an object not HTML

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
