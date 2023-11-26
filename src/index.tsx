import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./ress.min.css";
import { App } from "./App";

//reactの雛形を作っている
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
