import React from "react";
import ReactDOM from "react-dom"

/**
 * 
 * <div id="parent">
 *  <div id="child1">
 *      <h1 id="heading1">Hello World Nested</h1>
 *      <h2 id="heading2">Nested h2 tag!</h1>
 *  </div>
 *  <div id="child2">
 *      <h1 id="heading1">Hello World Nested</h1>
 *      <h2 id="heading2">Nested h2 tag!</h1>
 *  </div>
 * </div>
 */
const heading1 = React.createElement('h1', {id: 'heading'}, 'Hello World Nested');
const heading2 = React.createElement('h2', {id: 'heading2'}, 'Nested h2 tag!')
const child1 = React.createElement('div', {id: 'child1'}, [heading1, heading2]);
const child2 = React.createElement('div', {id: 'child2'}, [heading1, heading2]);
const parent = React.createElement("div", {id: 'parent'}, [child1, child2] );

// console.log(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", aer: "abc" },
//   "Hello World By React!"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
console.log(root);
root.render(parent);
root2.render(React.createElement('h3',{id: 'heading3'}, 'This is h3 tag by Root2'))
console.log(root.render(parent));
