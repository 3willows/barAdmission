import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Root from "./routes/root"
import NoticeOfMotion from "./routes/noticeOfMotion"
import AffidavitOfApplicant from "./routes/affidavitOfApplicant"
import AffidavitOfIdentity from "./routes/affidavitOfIdentity"
import LetterTo3Regulators from "./routes/letterTo3Regulators"

import ErrorPage from "./error-page"
import { ContextProvider } from "./Context.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "notice",
    element: <NoticeOfMotion />,
  },
  {
    path: "applicant",
    element: <AffidavitOfApplicant />,
  },
  {
    path: "id",
    element: <AffidavitOfIdentity />,
  },
  {
    path: "letters",
    element: <LetterTo3Regulators />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
