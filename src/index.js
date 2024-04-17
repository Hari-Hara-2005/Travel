import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
ReactDOM.render(<div className="">
  <App />
</div>, document.getElementById("root"));
function toggleDarkTheme() {
  if (localStorage.getItem("theme") == "dark") {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  } else {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  }
}
document.querySelector("button").addEventListener("click", toggleDarkTheme);
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}
