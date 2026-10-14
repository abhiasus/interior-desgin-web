import React from "react";
import ReactDOM from "react-dom/client";

import { HashRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos/dist/aos.css";

import AOS from "aos";

import App from "./App";
import "./assets/style/style.css";

AOS.init({
  duration: 850,
  once: true,
  offset: 70,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);