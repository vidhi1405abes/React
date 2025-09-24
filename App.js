const root = ReactDOM.createRoot(document.getElementById("root"));
const nested = React.createElement(
  "div",
  { id:"parent"},
  React.createElement(
    "div",
    { id:"child"},
    React.createElement("h1", { id:"grandchild" }, "Hello")
  )
);
root.render(nested);
