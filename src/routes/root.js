import React, { useState } from "react";
// import { Link } from "react-router-dom"
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import AffidavitOfApplicant from "./affidavitOfApplicant";
import AffidavitOfIdentity from "./affidavitOfIdentity";
import NoticeOfMotion from "./noticeOfMotion";
import LettersTo3Regulators from "./letterTo3Regulators";
import { InfoPage } from "./InfoPage.js";
import { WelcomePage } from "./WelcomePage";

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <NoticeOfMotion />
      <div className="pagebreak"></div>
      <AffidavitOfApplicant />
      <div className="pagebreak"></div>
      <AffidavitOfIdentity />
      <div className="pagebreak"></div>
      <LettersTo3Regulators />
    </div>
  );
});

export default function Root() {
  const [page, setPage] = useState("Welcome");
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="min-h-100vh m-2 flex h-screen flex-col bg-slate-800 font-serif text-lg">
      <header className="">
        <h1 className="sticky m-1 mt-2 text-center text-xl">
          Barrister Admission Bundle
        </h1>
        <nav className="m-1 grid grid-cols-4 justify-between gap-x-1 bg-slate-600">
          <button
            className="text-center"
            onClick={() => setPage((prev) => "Welcome")}
          >
            About
          </button>
          <select
            onChange={(e) => setPage((prev) => e.target.value)}
            className="text-center"
          >
            <option value="Welcome">Documents</option>
            <option value="Notice">Notice of Motion</option>
            <option value="Applicant">Affirmation of the Applicant</option>
            <option value="ID">Affirmation of Identity</option>
            <option value="Letters">Cover letter</option>
          </select>
          <div className="text-center">Technology</div>
          <div className="text-center">Philosophy</div>
        </nav>
      </header>
      <main>
        {page === "Notice" && <NoticeOfMotion />}
        {page === "Applicant" && <AffidavitOfApplicant />}
        {page === "ID" && <AffidavitOfIdentity />}
        {page === "Letters" && <LettersTo3Regulators />}
        {page === "Welcome" && <WelcomePage setPage={setPage} />}
        {page === "Info" && <InfoPage />}
        <div className="hidden">
          <ComponentToPrint ref={componentRef} />
        </div>
        <article className="m-1 text-center">
          <button onClick={handlePrint} className="bg-slate-600">
            Print {page === "Welcome" ? `Sample` : `Bundle`}
          </button>{" "}
        </article>
      </main>
      <footer className="mt-auto  bg-slate-600 text-center">
        <p className="">Creative Commons Licence</p>
      </footer>
    </div>
  );
}
