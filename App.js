// const child = React.createElement("h1", {id:"heading"}, "iii");//it returns a object where {} and innerhtml are props

// const root = ReactDOM.createRoot(document.getElementById("header"));
// root.render(child);//render will convert the child object into the desired tag
// console.log(child);

//creaying nested html element
//<div>
//     <div>
//          <h1></h1>
//      </div>
//</div>
// const grandparent = React.createElement(
//   "div",
//   { id: "grandparent" },
//   React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement("h1", { id: "child" }, "Hello from nesting"),
//   ),
// );
// const root=ReactDOM.createRoot(document.getElementById("header"))
// root.render(grandparent)
//what if
// {/* <div>
//     <div>
//         <h1></h1>
//         <h2></h2>
//     </div>
// </div> */}
// const children = React.createElement(
//   "div",
//   { id: "grandparent" },
//   React.createElement("div", { id: "parent" }, [
//     React.createElement("h1", { id: "brother" }, "Hi i am big"),
//     React.createElement("h2", { id: "sister" }, "Hi I am younger"),
//   ]),
// );
// const root=ReactDOM.createRoot(document.getElementById("header"))
// root.render(children)

// const child = document.createElement("h1");
// child.innerHTML = "Hello from JS";
// const parent = document.getElementById("header");
// parent.appendChild(child);
// const secondChild = document.createElement("h2");
// secondChild.innerHTML = "Hello from JS";
// parent.appendChild(secondChild);
// const grandChild = document.createElement("h4");
// grandChild.innerHTML = "Hi I am grandchild";
// secondChild.appendChild(grandChild);

// structure to create
// <div id="heading">
//   <div id=subheading>
//   <h1></></div>
// </div>
const grandparent = React.createElement(
  "div",
  { id: "grandparent" },
  React.createElement(
    "div",
    { id: "parent" },
    React.createElement("h1", { id: "child" }, "Hello from React"),
  ),
);
console.log(grandparent);

const root=ReactDOM.createRoot(document.getElementById("header"));
root.render(grandparent);
//ALL THIS IS VERY TEDIOUS TO CREATE MANUAALY
//THAT IS WHY JSX EXISSTS

