import React from "react";

import EnterInfo from "./pages/EnterInfo.jsx";
import AffidavitOfApplicant from "./pages/AffidavitOfApplicant";
import AffidavitOfIdentity from "./pages/AffidavitOfIdentity";
import NoticeOfMotion from "./pages/NoticeOfMotion";
import CoverLetters from "./pages/CoverLetters";

import { Routes, Route, HashRouter } from "react-router-dom";
import Wrapper from "./pages/Wrapper";
import { Landing } from "./pages/Landing";

// The Routes are ultimately abandoned, save for the Root.

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
        </Routes>
      </Wrapper>
    </HashRouter>
  );
}
