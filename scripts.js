{
  /* <div id="parent">
  <div id="child">
    <h1>Hellow world</h1>
    <h2> Vivek </h2>
  </div>
</div>; */
}

import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement("h1", { key: "h1" }, "Hellow world");
const h2 = React.createElement("h2", { key: "h2" }, "Vivek");
const childDiv = React.createElement("div", { id: "child" }, [h1, h2]);
const parentDiv = React.createElement("div", { id: "parent" }, childDiv);
const root = ReactDOM.createRoot(document.getElementById("rootDiv"));
root.render(parentDiv);
