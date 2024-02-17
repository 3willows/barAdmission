import React from "react"

import Root from "./root"
import ErrorPage from "./error-page"
import AffidavitOfApplicant from "./affidavitOfApplicant"
import AffidavitOfIdentity from "./affidavitOfIdentity"
import NoticeOfMotion from "./noticeOfMotion"
import LettersTo3Regulators from "./letterTo3Regulators"

import { Routes, Route, HashRouter } from "react-router-dom"

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="notice" element={<NoticeOfMotion />} />
        <Route path="applicant" element={<AffidavitOfApplicant />} />
        <Route path="id" element={<AffidavitOfIdentity />} />
        <Route path="letters" element={<LettersTo3Regulators />} />
      </Routes>
    </HashRouter>
  )
}
