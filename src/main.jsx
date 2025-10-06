import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter basename="/guava-mini">
      <App />
    </HashRouter>
  </React.StrictMode>
);
