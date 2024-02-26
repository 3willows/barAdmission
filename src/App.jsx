import React from "react";

import Root from "./pages/Root";
import AffidavitOfApplicant from "./pages/AffidavitOfApplicant";
import AffidavitOfIdentity from "./pages/AffidavitOfIdentity";
import NoticeOfMotion from "./pages/NoticeOfMotion";
import CoverLetters from "./pages/CoverLetters";

import { Routes, Route, HashRouter } from "react-router-dom";

// The Routes are ultimately abandoned, save for the Root.

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="notice" element={<NoticeOfMotion />} />
        <Route path="applicant" element={<AffidavitOfApplicant />} />
        <Route path="id" element={<AffidavitOfIdentity />} />
        <Route path="letters" element={<CoverLetters />} />
      </Routes>
    </HashRouter>
  );
}
