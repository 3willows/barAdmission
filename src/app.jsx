import { Routes, Route, HashRouter } from "react-router-dom"

import Wrapper from "./pages/Wrapper.jsx"

import Landing from "./pages/Landing.jsx"
import EnterInfo from "./pages/EnterInfo.jsx"
import AffidavitOfApplicant from "./pages/AffidavitOfApplicant.jsx"
import AffidavitOfIdentity from "./pages/AffidavitOfIdentity.jsx"
import NoticeOfMotion from "./pages/NoticeOfMotion.jsx"
import CoverLetters from "./pages/CoverLetters.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"

export default function App() {
  return (
    <HashRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="info" element={<EnterInfo />} />
          <Route path="notice" element={<NoticeOfMotion />} />
          <Route path="applicant" element={<AffidavitOfApplicant />} />
          <Route path="id" element={<AffidavitOfIdentity />} />
          <Route path="letters" element={<CoverLetters />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Wrapper>
    </HashRouter>
  )
}
