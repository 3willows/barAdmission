import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
// import { createHashRouter, RouterProvider } from "react-router-dom"

import App from "./routes/App"
// import NoticeOfMotion from "./routes/noticeOfMotion"
// import AffidavitOfApplicant from "./routes/affidavitOfApplicant"
// import AffidavitOfIdentity from "./routes/affidavitOfIdentity"
// import LetterTo3Regulators from "./routes/letterTo3Regulators"

import ErrorPage from "./error-page"
import { ContextProvider } from "./Context.js"

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <App/>,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "notice",
//     element: <NoticeOfMotion />,
//   },
//   {
//     path: "applicant",
//     element: <AffidavitOfApplicant />,
//   },
//   {
//     path: "id",
//     element: <AffidavitOfIdentity />,
//   },
//   {
//     path: "letters",
//     element: <LetterTo3Regulators />,
//   },
// ])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App/>
    </ContextProvider>
  </React.StrictMode>
)

