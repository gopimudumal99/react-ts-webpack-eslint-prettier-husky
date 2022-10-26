import React from "react";
import ReactDom from "react-dom/client";
import { App } from "./App";

const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDom.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
