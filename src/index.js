import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import App from "./routes/App"

import { ContextProvider } from "./Context.js"


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App/>
    </ContextProvider>
  </React.StrictMode>
)

