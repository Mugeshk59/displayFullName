import React from "react";
import Counter from "./App.js";
import { createRoot } from "react-dom/client";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);
