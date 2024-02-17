import React from "react"

import Root from "./root"
import ErrorPage from "./error-page"
import AffidavitOfApplicant from "./affidavitOfApplicant"
import AffidavitOfIdentity from "./affidavitOfIdentity"
import NoticeOfMotion from "./noticeOfMotion"
import LettersTo3Regulators from "./letterTo3Regulators"

import {
  HashRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom"

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
    element: <LettersTo3Regulators />,
  },
])

export default function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  )
}
