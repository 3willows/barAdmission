import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./app";

import { ContextProvider } from "./context.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
);
