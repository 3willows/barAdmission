import React, { useState } from "react";
import { InfoPage } from "./EnterInfo.jsx";
import { Landing } from "./Landing";
import { useAppContext } from "../context.jsx";

import AffidavitOfApplicant from "./AffidavitOfApplicant";
import AffidavitOfIdentity from "./AffidavitOfIdentity";
import NoticeOfMotion from "./NoticeOfMotion";
import CoverLetters from "./CoverLetters";


export default function Root() {
  const { applicantAffidavit, idAffidavit, applicant, idDeponent } =
    useAppContext();

  const [page, setPage] = useState("Welcome");

  return (
    <div className="min-h-100vh text-normal my-2 flex h-screen flex-col bg-slate-100 font-serif leading-relaxed text-black md:text-lg">
      <header className="bg-slate-600 text-white">
        <h1 className="sticky m-1 mt-2 text-center text-xl">
        Barrister Admission Bundle
        </h1>
        <h2 className="sticky m-1 text-center text-xl">(beta version)</h2>
        <nav className="m-1 flex grid-cols-3 flex-col justify-between 
        gap-x-1 bg-slate-600 text-white p-1 md:grid"
        >
          <button
            className="border-2 border-white text-center md:border-0"
            onClick={() => setPage((prev) => "Welcome")}
          >
            About
          </button>
          <button
            className="border-2 border-white text-center  md:border-0"
            onClick={() => setPage((prev) => "Info")}
          >
            Enter Information
          </button>
          <select
            onChange={(e) => setPage((prev) => e.target.value)}
            className="border-2 border-white bg-slate-600 text-center md:border-0"
          >
            <option value="Info">Select Document</option>
            <option value="Notice">Notice of Motion</option>
            <option value="Applicant">
              {applicantAffidavit ? "Affidavit" : "Affirmation"} of{" "}
              {applicant === "APPLICANT" ? "the Applicant" : applicant}
            </option>
            <option value="ID">
              {idAffidavit ? "Affidavit" : "Affirmation"} of{" "}
              {idDeponent === "ID DEPONENT" ? "Identity" : idDeponent}
            </option>
            <option value="Letters">Cover letters</option>
          </select>
        </nav>
      </header>
      <main>
        {page === "Welcome" && <Landing setPage={setPage} />}
        {page === "Info" && <InfoPage />}
        {page === "Notice" && <NoticeOfMotion />}
        {page === "Applicant" && <AffidavitOfApplicant />}
        {page === "ID" && <AffidavitOfIdentity />}
        {page === "Letters" && <CoverLetters />}
      </main>
      <footer className="mt-auto text-white bg-slate-600 text-center">
        <p className="">MIT License</p>
      </footer>
    </div>
  );
}